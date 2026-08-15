# Dockerfile multi-estágio ultra-leve para ConcursaBot (Node.js 22 Alpine)
FROM node:22-alpine AS runner

WORKDIR /app

# Instalar dependências necessárias para compilação nativa do better-sqlite3
RUN apk add --no-cache python3 make g++

# Copiar manifesto de dependências
COPY package*.json ./

# Instalação limpa para produção
RUN npm ci --omit=dev

# Copiar código-fonte da aplicação
COPY . .

# Criar diretório de dados persistentes para SQLite e uploads
RUN mkdir -p /app/uploads && chmod -R 777 /app/uploads

# Variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Porta exposta
EXPOSE 3000

# Comando de inicialização
CMD ["node", "server/index.js"]
