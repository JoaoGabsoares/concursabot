# 🎯 Gabarito.AI — Guia Completo de Instalação e Uso (v3.5 Ultra)

> Seu Ecossistema Inteligente de Estudos para Concursos Públicos de Elite

Este guia prático ensina como instalar, configurar e aproveitar ao máximo todas as funcionalidades do **Gabarito.AI**.

---

## 📋 Pré-Requisitos

1. **Node.js (v20, v22 ou v24 LTS)**:
   ```bash
   node --version
   ```
   Se não possuir, baixe a versão **LTS** em [nodejs.org](https://nodejs.org/).

2. **Chave de API Google Gemini (Opcional - Gratuita)**:
   - Acesse **[aistudio.google.com/apikey](https://aistudio.google.com/apikey)**
   - Gere uma chave gratuita (`AIzaSy...`) com cota de até 1.500 requisições diárias.

---

## 🚀 Instalação Rápida

### Passo 1: Instale as dependências
```bash
npm install
```

### Passo 2: Execute os Testes Automatizados
```bash
npm test
```

### Passo 3: Compile o Frontend React 19
```bash
npm run build
```

### Passo 4: Configure a Chave de API (.env)
Crie um arquivo `.env` na raiz:
```env
GEMINI_API_KEY=sua_chave_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=3000
```

### Passo 5: Inicie o Servidor
```bash
npm start
```
Acesse no seu navegador: **`http://localhost:3000`**

---

## 📖 Como Usar as Principais Funcionalidades

### 1. Criar Conta & Perfis de Estudo
- Crie uma conta privada com senha.
- Cadastre até **3 perfis de estudante** para diferentes concursos (ex: *João - Receita Federal*, *João - Banco do Brasil*, *Concurso de Tribunal*).
- Cada perfil possui seu próprio progresso, matérias e histórico totalmente isolados.

### 2. Sala de Estudos & Cadência Flexível (60m / 30m)
- **Subir Material**: Clique em `[ + Subir PDF da Aula ]`. O Motor Universal aceita PDFs de qualquer editora ou livros próprios.
- **Configurar Ritmo**: Selecione `60m / 30m` ou configure minutos livres de leitura e exercícios.
- **Leitura Parcial**: Se precisar interromper a leitura na página 15, clique em `⚡ Marcar Parada na Pág. 15 e Ir para Questões`. Na próxima sessão, o leitor retoma automaticamente onde você parou.

### 3. Simulados Cronometrados & Caderno de Erros
- Faça simulados oficiais da sua banca examinadora (FGV, Cesgranrio, Cebraspe, etc.).
- Qualquer questão errada vai automaticamente para o **Caderno de Erros**.
- Ao refazer a questão no Caderno de Erros e acertar, você ganha **+15 XP de superação**.

### 4. Corretor Discursivo de Redação por IA
- Submeta seu texto dissertativo digitado ou colado.
- A IA avalia nos 4 critérios oficiais de banca (*Domínio Temático, Estrutura, Gramática e Argumentação*) com nota de 0 a 100 e feedback corretivo detalhado.

---

## 🛠️ Comandos de Desenvolvimento

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o Vite em modo desenvolvimento com Hot Module Replacement (HMR) |
| `npm run build` | Compila o bundle otimizado de produção em `dist/` |
| `npm test` | Executa a suíte completa de testes automatizados em `tests/run_all.js` |
| `npm start` | Inicia o servidor Express de produção na porta 3000 |
