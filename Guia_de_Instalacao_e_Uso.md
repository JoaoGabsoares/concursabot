# 🧠 ConcursaBot — Guia de Instalação e Uso

> Seu Cérebro IA Pessoal para Concursos Públicos

> **📝 Nota de revisão (11/08/2026):** o pacote original gerado pelo Antigravity usava dois
> modelos do Gemini que a Google já desligou (`gemini-2.0-flash`, morto desde 01/06/2026, e
> `text-embedding-004`, morto desde 14/01/2026) — nada disso ia funcionar. Foram corrigidos
> para `gemini-3.7-flash` e `gemini-embedding-001`. Além disso: (1) `npm run ingest` agora
> pula PDFs já indexados em vez de reprocessar tudo do zero a cada rerun; (2) o upload da
> Sala de Estudos usa extração de texto local (`pdf-parse`) em vez de mandar o PDF inteiro
> pro Gemini duas vezes; (3) novo comando `npm run preload` pré-carrega uma pasta inteira de
> PDFs direto na biblioteca da Sala de Estudos, sem upload manual um por um; (4) ao finalizar
> uma sessão de estudo, agora dá pra marcar "até onde você chegou" e as questões de fixação
> saem focadas só nesse trecho, em vez do material inteiro.

Este guia te leva do zero até o app rodando no seu navegador. São **5 minutos de setup**.

---

## 📋 Pré-Requisitos

Antes de começar, você precisa de duas coisas:

### 1. Node.js (v22 ou superior)

**Verificar se já tem:**
```powershell
node --version
```

**Se não tiver:** Baixe e instale em [nodejs.org](https://nodejs.org/) — escolha a versão **LTS**.

### 2. API Key do Google Gemini (GRATUITA)

1. Acesse **[aistudio.google.com](https://aistudio.google.com/)**
2. Faça login com sua conta Google
3. No menu lateral, clique em **"Get API key"** (ou "Obter chave de API")
4. Clique em **"Create API key in new project"**
5. Copie a chave gerada (começa com `AIza...`)

> [!NOTE]
> É 100% gratuito. Você tem ~1.500 chamadas/dia no tier free — mais que suficiente para estudar o dia inteiro.

---

## 🚀 Instalação (5 minutos)

Abra o **PowerShell** ou **Terminal** e siga estes comandos:

### Passo 1: Navegue até a pasta do projeto

```powershell
cd ./CONCURSO_BOT
```

### Passo 2: Configure sua API Key

```powershell
copy .env.example .env
```

Agora abra o arquivo `.env` com qualquer editor de texto e substitua `cole_sua_api_key_aqui` pela sua chave:

```
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

> [!WARNING]
> **Nunca compartilhe sua API key!** O arquivo `.env` já está no `.gitignore`.

### Passo 3: Instale as dependências

```powershell
npm install
```

Isso vai baixar Express, Gemini SDK, SQLite e tudo mais. Aguarde ~30 segundos.

### Passo 4: Inicie o servidor

```powershell
npm start
```

Você verá:
```
ConcursaBot Backend rodando! Acesse: http://localhost:3000
```

### Passo 5: Acesse no navegador

Abra o navegador e acesse:

```
http://localhost:3000
```

**Pronto!** 🎉 Seu ConcursaBot está funcionando.

---

## 🎮 Como Usar Cada Módulo

### 🏠 Dashboard
Visão geral do seu progresso: questões respondidas, taxa de acerto, flashcards pendentes e simulados feitos. Atualiza automaticamente conforme você usa os outros módulos.

### 🤖 Tutor IA
1. Selecione a **matéria** no dropdown (Direito Constitucional, Administrativo, etc.)
2. Digite sua dúvida no campo de texto
3. Pressione **Enter** ou clique em **Enviar**
4. A resposta aparece em tempo real (streaming)
5. O histórico fica salvo — volte quando quiser!

**Exemplos de perguntas:**
- *"Explique o princípio da legalidade no Direito Administrativo"*
- *"Qual a diferença entre autarquia e fundação pública?"*
- *"Me dê exemplos de pegadinhas do CESPE sobre direitos fundamentais"*

### 📝 Gerador de Questões
1. Escolha: **Matéria**, **Tópico**, **Banca** (Cebraspe, FGV, FCC, VUNESP)
2. Defina a **quantidade** (5, 10, 15 ou 20)
3. Escolha o **tipo**: Múltipla Escolha ou Certo/Errado
4. Clique em **Gerar Questões**
5. Responda cada questão — feedback imediato com explicação!

### 🎯 Simulados
1. Selecione as **matérias** que quer incluir
2. Escolha a **banca**, **quantidade** e **tempo limite**
3. Inicie o simulado — timer no topo da tela
4. Navegue entre questões com os botões ◄ ►
5. Ao final, veja o **relatório**: acertos por matéria, tempo médio, etc.

### 📚 Resumos
1. Cole um texto longo (artigo de lei, capítulo de livro, etc.)
2. Escolha o tipo:
   - **Resumo Estratégico**: foca no que cai em prova
   - **Mapa Mental**: estrutura hierárquica
   - **Quadro Comparativo**: tabela comparativa
3. Clique em **Gerar** — resumo pronto em segundos!

### 📋 Análise de Edital
1. Cole o texto do edital
2. Informe o **cargo/posição** desejado
3. Clique em **Analisar**
4. Receba: matérias por peso, ordem de estudo, dicas estratégicas

### 🃏 Flashcards
1. **Criar deck**: informe o tópico (ex: "Princípios do Direito Administrativo")
2. A IA gera os cards automaticamente
3. **Revisar**: veja a frente → clique para virar → avalie:
   - 🔴 Não Lembrei
   - 🟠 Difícil  
   - 🔵 Bom
   - 🟢 Fácil
4. O sistema calcula automaticamente quando cada card deve ser revisado (repetição espaçada)

### 📅 Cronograma
1. Adicione as **matérias** do concurso
2. Defina **horas/dia** e **dias da semana** disponíveis
3. Opcionalmente, informe a **data da prova**
4. Clique em **Gerar Cronograma**
5. Visualize em formato de calendário semanal
6. Marque tarefas como concluídas ✅

### 📖 Sala de Estudos (NOVO! ⭐)
A funcionalidade mais poderosa — integra seus PDFs com a IA:

1. Clique em **📖 Sala de Estudos** na sidebar
2. **Faça upload** do PDF da sua aula (arraste ou clique para selecionar)
3. Escolha a **matéria** (Direito Tributário, Constitucional, etc.)
4. Clique em **🧠 Enviar e Analisar com IA** — aguarde a análise (~30s)
5. O sistema extrai: título, tópicos, conceitos-chave, resumo estratégico
6. Clique em **▶️ Estudar** no material
7. Defina o **tempo de estudo** (15min, 30min, 1h, 2h, ou personalizado)
8. **Durante o estudo:**
   - Veja o resumo e tópicos do material na esquerda
   - Use o **chat contextual** na direita para perguntar sobre o PDF
   - O timer conta regressivamente no topo
   - Aviso automático faltando 5 minutos
9. **Quando o timer acaba (ou você clica "Finalizar"):**
   - A IA gera **10 questões de fixação** baseadas no PDF!
   - Questões no estilo de banca (Cebraspe/FCC)
   - Feedback imediato + explicação por questão
   - Score final com análise de performance

**Dica:** Baixe os PDFs do Google Drive para o seu computador e faça upload pela interface.

### 🧠 Base RAG — 1.000 PDFs (Busca Semântica Global ⭐)
O verdadeiro cérebro de inteligência artificial que conecta **todos os seus 1.000 PDFs** em um banco vetorial:

1. **Como indexar sua pasta inteira de PDFs:**
   - No PowerShell/Terminal, na pasta do projeto, execute:
     ```powershell
     npm run ingest -- "C:\Caminho\Para\Sua\Pasta\De\PDFs"
     ```
   - Ou se usa o Google Drive para Desktop:
     ```powershell
     npm run ingest -- "G:\Meu Drive\Concursos"
     ```
   - O script varre todas as subpastas, fatia os PDFs, gera os vetores com o modelo gratuito **`gemini-embedding-001` do Gemini** e grava no banco SQLite local.
2. **Como usar na interface web:**
   - Acesse **🧠 Base RAG (1.000 PDFs)** no menu lateral.
   - Faça perguntas cruzadas (ex: *"Quais são as diferenças de imunidade recíproca entre empresas públicas e autarquias?"*).
   - A IA busca os trechos exatos de múltiplos PDFs e formula a resposta citando os arquivos fontes e o percentual de relevância!

### 🌐 Hub Multicarreiras e Acesso
O sistema agora suporta Hub Multicarreiras (SES-RJ, Marinha RM2, ATRFB) e controle de acesso online via `INVITE_PIN`.

---

## 🔧 Comandos Úteis

| Comando | O que faz |
|---|---|
| `npm start` | Inicia o servidor normalmente |
| `npm run dev` | Inicia com auto-reload (reinicia sozinho quando você edita código) |
| `npm run preload -- "CAMINHO"` | Pré-carrega uma pasta inteira de PDFs na biblioteca da Sala de Estudos (sem upload manual) |
| `npm run ingest -- "CAMINHO"` | Indexa uma pasta inteira de PDFs na Base RAG (busca semântica cruzada) |
| `Ctrl+C` | Para o servidor |

> `preload` e `ingest` são catálogos **separados** e não se cruzam: `preload` alimenta a
> lista de materiais da Sala de Estudos (sessão com timer + questões de fixação); `ingest`
> alimenta a Base RAG (busca semântica em texto livre entre múltiplos PDFs). Se você quer
> um PDF disponível nos dois lugares, rode os dois comandos apontando pra mesma pasta.

---

## ❓ Problemas Comuns

### "npm não é reconhecido como comando"
→ Node.js não está instalado. Baixe em [nodejs.org](https://nodejs.org/)

### "GEMINI_API_KEY não encontrada"
→ Verifique se o arquivo `.env` existe e contém sua chave (não o `.env.example`)

### "Erro 429 - Rate Limit"
→ Você atingiu o limite de chamadas por minuto. Aguarde 60 segundos e tente novamente.

### "Cannot find module 'better-sqlite3'"
→ Execute `npm install` novamente. Se persistir:
```powershell
npm install better-sqlite3 --build-from-source
```
No Windows, instale o Visual Studio Build Tools (https://visualstudio.microsoft.com/visual-cpp-build-tools/) com a carga de trabalho 'Desenvolvimento para Desktop com C++'.

### O banco de dados precisa ser resetado
→ Delete o arquivo `concursabot.db` na pasta raiz do projeto e reinicie o servidor.

---

## 📁 Estrutura do Projeto

```
ConcursaBot/
├── 📄 package.json          ← Dependências
├── 📄 .env                  ← Sua API key (criar a partir do .env.example)
├── 📄 .env.example          ← Template
├── 📄 .gitignore
├── 📂 server/               ← Backend
│   ├── index.js             ← Servidor Express
│   ├── gemini.js            ← Cliente da API Gemini
│   ├── database.js          ← SQLite (banco de dados local)
│   ├── 📂 routes/           ← Rotas da API
│   │   ├── tutor.js
│   │   ├── questions.js
│   │   ├── simulados.js
│   │   ├── summaries.js
│   │   ├── edital.js
│   │   ├── flashcards.js
│   │   ├── schedule.js
│   │   └── dashboard.js
│   └── 📂 prompts/          ← Instruções da IA (em português)
│       ├── tutor.js
│       ├── questions.js
│       ├── summaries.js
│       ├── edital.js
│       ├── flashcards.js
│       └── schedule.js
└── 📂 public/               ← Frontend
    ├── index.html            ← Página principal
    ├── 📂 css/
    │   └── style.css         ← Design system premium (dark mode)
    └── 📂 js/
        ├── app.js            ← Router principal
        ├── api.js            ← Cliente HTTP
        ├── utils.js          ← Utilitários
        ├── dashboard.js      ← Dashboard
        ├── tutor.js          ← Chat com IA
        ├── questions.js      ← Gerador de questões
        ├── simulados.js      ← Simulados adaptativos
        ├── summaries.js      ← Gerador de resumos
        ├── edital.js         ← Analisador de edital
        ├── flashcards.js     ← Flashcards + repetição espaçada
        └── schedule.js       ← Cronograma de estudos
```

---

## 🎯 Resumo Rápido (Cola no Celular)

```
1. cd ./CONCURSO_BOT
2. copy .env.example .env
3. [editar .env e colar a API key]
4. npm install
5. npm start
6. Abrir: http://localhost:3000
```

Bons estudos! 🚀📚
