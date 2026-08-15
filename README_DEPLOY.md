# 🌐 Guia de Deploy Web do ConcursaBot (Beta Testing)

> ⚠️ **Nota:** Para instruções mais completas e atualizadas de deploy, consulte o [GUIA_DEPLOY_GRATUITO.md](./GUIA_DEPLOY_GRATUITO.md).

Este guia explica como hospedar o **ConcursaBot na Nuvem de graça (ou por centavos)** para que amigos e estudantes possam testar a plataforma online pelo navegador ou celular, mantendo a sua chave do Gemini protegida e o banco de dados persistente.

---

## 🚀 Opção 1: Deploy no Render.com (Recomendado — Gratuito com Docker)

1. Crie uma conta gratuita em [Render.com](https://render.com).
2. Clique em **"New +"** → **"Web Service"**.
3. Conecte o repositório GitHub do seu projeto.
4. Configure os seguintes campos:
   - **Name**: `concursabot`
   - **Runtime**: `Docker`
   - **Instance Type**: `Free`
5. Na seção **"Environment Variables"**, adicione:
   - `GEMINI_API_KEY`: `Sua Chave do Google AI Studio`
   - `NODE_ENV`: `production`
   - `PORT`: `3000`
   - `INVITE_PIN`: `SUA_SENHA_AQUI`
6. (Opcional para persistência de disco no plano pago/hobby): Em **"Disks"**, adicione um disco montado em `/app/concursabot.db`.
7. Clique em **"Create Web Service"**.
8. Em menos de 2 minutos você terá uma URL pública HTTPS (ex: `https://concursabot.onrender.com`).

---

## ⚡ Opção 2: Deploy no Fly.io (Com Volume Persistente Grátis)

1. Instale o CLI do Fly.io:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```
2. Faça login:
   ```bash
   fly auth login
   ```
3. No diretório do projeto, inicialize a aplicação:
   ```bash
   fly launch
   ```
4. Crie um volume de disco persistente para o banco SQLite:
   ```bash
   fly volumes create concursabot_data --size 1
   ```
5. Configure sua chave do Gemini e a senha de acesso como segredo seguro:
   ```bash
   fly secrets set GEMINI_API_KEY="sua_chave_aqui" INVITE_PIN="SUA_SENHA_AQUI"
   ```
6. Faça o deploy:
   ```bash
   fly deploy
   ```

---

## 💻 Opção 3: Executar Localmente (100% Offline)

O ConcursaBot pode ser executado localmente sem precisar de Docker ou internet para consultar matérias e questões já salvas:

```bash
# 1. Instalar dependências (apenas na primeira vez)
npm install

# 2. Iniciar o servidor
npm start

# 3. Acessar no navegador
http://localhost:3000
```

---

## 📱 Como Instalar no Celular como Aplicativo (PWA)

1. Abra a URL do ConcursaBot no navegador do celular (Safari no iOS ou Chrome no Android).
2. Toque no botão de **Compartilhar / Opções** (ícone de 3 pontinhos ou quadrado com seta).
3. Toque em **"Adicionar à Tela de Início"** (Add to Home Screen).
4. O ícone do **ConcursaBot** aparecerá na tela do seu celular e abrirá em tela cheia como um app nativo!
