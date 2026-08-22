# ============================================================
# Estágio 1: Build do Frontend React 19 (Vite)
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar manifestos de dependências
COPY package*.json ./

# Instalar todas as dependências (incluindo dev para compilar o Vite)
RUN npm ci

# Copiar código-fonte da aplicação
COPY . .

# Compilar frontend React 19 para o diretório dist/
RUN npm run build

# ============================================================
# Estágio 2: Runner de Produção Ultra-Leve (Node.js 22 Alpine)
# ============================================================
FROM node:22-alpine AS runner

WORKDIR /app

# Copiar manifestos de dependências
COPY package*.json ./

# Instalação estrita de produção (node:sqlite nativo dispensa compilação C++)
RUN npm ci --omit=dev

# Copiar assets estáticos compilados do builder
COPY --from=builder /app/dist ./dist

# Copiar backend e arquivos essenciais
COPY server/ ./server/
COPY public/ ./public/
COPY cronograma_consolidado.json ./

# Criar diretório de dados persistentes para SQLite e uploads de PDF
RUN mkdir -p /app/uploads && chmod -R 777 /app/uploads

# Variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Porta exposta
EXPOSE 3000

# Comando de inicialização do servidor Gabarito.AI
CMD ["node", "server/index.js"]
