# 🌐 Guia Definitivo: Como Deixar o Gabarito.AI Online com CUSTO ZERO (R$ 0,00)

Este guia prático foi elaborado para você disponibilizar o **Gabarito.AI na internet com segurança, alta velocidade e zero custo**, permitindo que amigos e pequenos grupos de estudantes testem a plataforma pelo celular ou computador sem você precisar gastar nada com servidores caros ou bancos de dados na nuvem.

---

## 🧭 Visão Geral das 4 Melhores Opções Gratuitas

| Método | Custo | Dificuldade | Onde roda o servidor? | Banco de Dados SQLite | Ideal para... |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Opção 1: Cloudflare Tunnel (Recomendado)** | **R$ 0,00** | ⭐ Fácil (5 min) | Seu computador / notebook | 100% Local no seu PC | Privacidade máxima, sem limites de memória e sem hibernação. |
| **Opção 2: Render.com Free Tier** | **R$ 0,00** | ⭐ Fácil (3 min) | Nuvem do Render | Efêmero / Persistente | Quem não quer deixar o computador ligado em casa. |
| **Opção 3: Oracle Cloud Always Free** | **R$ 0,00** | ⭐⭐ Médio (15 min) | VPS Linux na Nuvem | 100% Persistente | Infraestrutura potente para sempre (4 vCPUs / 24GB RAM). |
| **Opção 4: Fly.io com Disco Persistente** | **R$ 0,00** | ⭐⭐ Médio (10 min) | Nuvem do Fly.io | Volume de 1GB Grátis | Deploy via linha de comando CLI. |

---

## 🔒 Passo Fundamental: Proteção de Acesso com PIN de Convite

Para evitar que pessoas não autorizadas acessem sua aplicação na internet e consumam sua cota gratuita da API do Gemini, o Gabarito.AI conta com um sistema nativo de **Autenticação por PIN de Convite**.

### Como ativar:
1. Abra o arquivo `.env` na raiz do projeto.
2. Defina uma senha/PIN numérico ou alfanumérico para seus testadores:
   ```env
   INVITE_PIN=2026
   ```
3. Quando alguém abrir o link do Gabarito.AI pela primeira vez, uma tela solicitará o **PIN de Acesso**. Ao digitar o PIN correto, a sessão do estudante é liberada e ele pode criar seu próprio perfil isolado!

---

## 🔑 Como Obter a Chave Gratuita do Google Gemini (Google AI Studio)

1. Acesse: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Faça login com qualquer conta Google.
3. Clique em **"Create API Key"** (Criar Chave de API).
4. Copie sua chave (ela começa com `AQ...`).
5. O plano gratuito da Google oferece:
   * **15 Requisições por Minuto (RPM)** no modelo `gemini-3.7-flash` / `gemini-3.6-flash`.
   * **1 milhão de tokens por minuto (TPM)**.
   * **1.500 requisições por dia**, o que é mais do que suficiente para 5 a 15 estudantes estudando juntos diariamente!

---

## 🚀 OPÇÃO 1 (A MAIS RECOMENDADA): Cloudflare Tunnel + PC Local

Nesta opção, o ConcursaBot roda no seu computador ou notebook em casa, e o **Cloudflare Tunnel** cria um túnel criptografado HTTPS seguro para a internet **sem você precisar abrir nenhuma porta no seu roteador (sem port forwarding)** e **sem expor seu endereço IP pessoal**.

### Vantagens:
* **Zero Custo Real**: Você não paga hospedagem nem banco de dados.
* **100% dos Dados no seu PC**: Os materiais de estudo, PDFs e dados dos estudantes ficam no seu SQLite local.
* **Sem Hibernação**: A aplicação não "dorme" após inatividade.
* **Domínio HTTPS Automático**: Fornece certificado SSL grátis (cadeado verde).

### Passo a Passo (Linux / macOS / Windows):

#### 1. Baixar o `cloudflared` (Utilitário Oficial da Cloudflare):
* **Linux (Debian/Ubuntu)**:
  ```bash
  curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
  sudo dpkg -i cloudflared.deb
  ```
* **Windows**:
  Baixe o executável em [https://github.com/cloudflare/cloudflared/releases/latest](https://github.com/cloudflare/cloudflared/releases/latest).

#### 2. Iniciar o ConcursaBot:
No terminal do projeto:
```bash
npm start
```
*(O backend estará rodando em `http://localhost:3000`)*.

#### 3. Criar o Túnel Público Instantâneo:
Abra outro terminal e execute:
```bash
cloudflared tunnel --url http://localhost:3000
```

O terminal exibirá uma URL pública segura, por exemplo:
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://concursa-study-group.trycloudflare.com                                            |
+--------------------------------------------------------------------------------------------+
```

Pronto! Basta enviar esse link `https://...trycloudflare.com` para seus amigos e testadores.

---

## ☁️ OPÇÃO 2: Deploy no Render.com (Nuvem sem PC Ligado)

Se você prefere que o sistema fique online 24h por dia na nuvem sem precisar do seu computador ligado, o **Render.com** oferece um plano gratuito excelente com suporte a Docker.

### Passo a Passo:

1. **Subir o código para o seu GitHub**:
   * Crie um repositório privado ou público no GitHub e faça push dos arquivos do ConcursaBot.
2. **Criar o Serviço no Render**:
   * Acesse [https://render.com](https://render.com) e crie uma conta gratuita.
   * No painel, clique em **"New +"** &rarr; **"Web Service"**.
   * Conecte o repositório do ConcursaBot.
3. **Preencher as Configurações**:
   * **Name**: `concursabot`
   * **Region**: `Oregon (US West)` ou `Frankfurt (EU)`
   * **Branch**: `main`
   * **Runtime**: `Docker` *(o Render detectará automaticamente o `Dockerfile` incluso no projeto)*.
   * **Instance Type**: `Free`
4. **Adicionar as Variáveis de Ambiente**:
   Na seção **"Environment Variables"**, adicione:
   * `GEMINI_API_KEY`: *(Sua chave do Google AI Studio)*
   * `GEMINI_MODEL`: `gemini-3.7-flash`
   * `INVITE_PIN`: `2026` *(opcional, para proteger o acesso)*
   * `NODE_ENV`: `production`
   * `PORT`: `3000`
5. **Finalizar Deploy**:
   * Clique em **"Create Web Service"**.
   * Em cerca de 2 minutos, o Render fornecerá sua URL pública HTTPS: `https://concursabot.onrender.com`.

> 💡 **Dica Pro (Evitar Hibernação no Plano Grátis do Render)**:
> No plano gratuito, o Render hiberna o serviço após 15 minutos sem visitas. Para mantê-lo sempre acordado e rápido para seus alunos:
> 1. Crie uma conta gratuita no [https://uptimerobot.com](https://uptimerobot.com).
> 2. Adicione um monitor do tipo **HTTP(s)** apontando para a URL do seu Render a cada 10 minutos. O UptimeRobot fará um ping leve mantendo o servidor sempre ativo e aquecido!

---

## 🛡️ OPÇÃO 3: Oracle Cloud Always Free (VPS Potente Grátis para Sempre)

A **Oracle Cloud** oferece o programa gratuito mais generoso do mercado (*Always Free*), fornecendo instâncias virtuais ARM com até **4 OCPUs, 24 GB de memória RAM e 200 GB de disco** com custo zero vitalício.

### Passo a Passo:
1. Crie uma conta no [https://cloud.oracle.com](https://cloud.oracle.com) (selecione o plano Always Free).
2. No menu de computação, crie uma **Compute Instance** com Ubuntu 24.04 LTS (Ampere ARM ou AMD Micro).
3. Conecte-se via SSH:
   ```bash
   ssh ubuntu@SEU_IP_PUBLICO
   ```
4. Instale o Docker e Git:
   ```bash
   sudo apt update && sudo apt install -y docker.io docker-compose git
   sudo usermod -aG docker ubuntu
   ```
5. Clone seu repositório, configure o `.env` e inicie:
   ```bash
   git clone https://github.com/SEU_USUARIO/CONCURSO_BOT.git
   cd CONCURSO_BOT
   cp .env.example .env
   # Edite o .env com sua GEMINI_API_KEY e INVITE_PIN
   docker-compose up -d
   ```
6. O ConcursaBot estará rodando 24 horas por dia com desempenho profissional e persistência total de dados!

---

## 📱 Como os Alunos Podem Instalar no Celular como App (PWA)

O ConcursaBot já possui suporte nativo a **Progressive Web App (PWA)** com manifesto e Service Worker configurados. Seus testadores não precisam baixar nada em lojas de aplicativos (App Store / Play Store):

### No iPhone / iPad (iOS Safari):
1. Abra a URL do ConcursaBot no Safari.
2. Toque no botão de **Compartilhar** (ícone do quadrado com a seta para cima no rodapé).
3. Role a lista e toque em **"Adicionar à Tela de Início"** (Add to Home Screen).
4. O ícone oficial do **ConcursaBot** será adicionado à grade de aplicativos e abrirá em **tela cheia**, sem barra de navegação do navegador.

### No Android (Google Chrome):
1. Abra a URL do ConcursaBot no Chrome.
2. Um aviso automático *"Adicionar ConcursaBot à tela inicial"* aparecerá na parte inferior, ou toque nos **3 pontinhos** no canto superior direito.
3. Toque em **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**.
4. Pronto! O app fica instalado e funciona até mesmo offline para consultar conteúdos já lidos.

---

## 💾 Gestão de Backups e Dados dos Alunos

Recomende sempre aos seus testadores utilizarem o recurso de backup nativo criado:
* Acesse **`⚙️ Configurações`** &rarr; aba **`💾 Dados & Manutenção`** &rarr; clique em **`[ 📥 Exportar Backup (.JSON) ]`**.
* O arquivo JSON gerado contém 100% das sessões, simulados realizados, flashcards e histórico de XP, permitindo restaurar ou migrar o progresso a qualquer momento.

---

## 🏁 Resumo de Comandos Rápidos

| Ação | Comando |
| :--- | :--- |
| **Rodar Localmente** | `npm start` |
| **Rodar com Docker** | `docker-compose up -d` |
| **Abrir Túnel Grátis** | `cloudflared tunnel --url http://localhost:3000` |
| **Ver Logs do Servidor** | `tail -f server.log` |
| **Health Check da IA** | `curl http://localhost:3000/api/users/system/health` |
