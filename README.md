# 🎯 Gabarito.AI — Ecossistema Inteligente de Estudos para Concursos Públicos (v5.4)

[![React 19](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite%208-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.5.0%20(node%3Asqlite)-green.svg)](https://nodejs.org)
[![Architecture](https://img.shields.io/badge/Architecture-POO%20%2B%20Domain%20Services-blueviolet.svg)]()
[![Database](https://img.shields.io/badge/Database-SQLite%203%20(node%3Asqlite)-blue.svg)](https://nodejs.org/api/sqlite.html)
[![AI Engine](https://img.shields.io/badge/AI-Google%20Gemini%20Flash-orange.svg)](https://aistudio.google.com)
[![Security](https://img.shields.io/badge/Security-OAuth%20Redirect%20%2B%20Scrypt-brightgreen.svg)]()
[![Tests](https://img.shields.io/badge/Tests-100%25%20Passing%20(npm%20test)-success.svg)]()

> 💡 **Novo por aqui ou usando em outro chat de IA?** Leia o [COMECE_POR_AQUI.md](file:///home/joao/Área%20de%20trabalho/CONCURSO_BOT/COMECE_POR_AQUI.md) para contextualização técnica instantânea!

> **O Gabarito.AI é uma plataforma web de alta performance construída para aprovação em concursos públicos de elite**, integrando **Design System 100% Semântico (Zero Cores Hardcoded e Zero Slop de IA)**, **Code-Splitting e Otimização de Performance (-52% Bundle Payload)**, **Hardening de Segurança de Backend (Zero-Trust OAuth & Anti-IDOR)**, **Acervo RAG Híbrido com 3.613 Documentos Markdown e Motor FTS5 (<5ms)**, **Gerador & Gerenciador Inteligente de Ciclos de Estudo Ponderados (Interleaving Anti-Fadiga)**, **Interface Despoluída e sem Menus Duplicados**, **Portal Interativo & Dashboard Inicial**, **Autenticação Google Oficial via Redirecionamento Full-Page (accounts.google.com)**, **Acessibilidade Responsiva com Modais Roláveis**, **Isolamento de Renderização de Timers (Zero Thrashing)**, **Inteligência Heurística por Banca (FGV, Cesgranrio, Cebraspe)**, leitura com **Motor Universal de PDFs**, **Cadência Flexível de Estudos (60m Leitura + 30m Questões)**, Raio-X de incidência da banca (**Princípio de Pareto 80/20**), **Corretor Discursivo de Redação por IA**, repetição espaçada automática (**Algoritmo SM-2: D+1, D+7, D+30**), simulados cronometrados com **Cartão-Resposta Digital**, **Caderno de Erros com superação (+15 XP)** e **Design System Modular**.

---

## 🏛️ Destaques da Arquitetura & Funcionalidades (v5.4)

1. 🎨 **Design System 100% Semântico & Despoluição Visual Total:**
   - **Zero Cores Hardcoded**: Todas as 188 cores literais do Tailwind foram substituídas por tokens semânticos CSS (`--accent-primary`, `--accent-success`, `--accent-warning`, `--accent-danger`, `--accent-purple`, `--btn-primary-bg`, etc.).
   - **Eliminação de Slop de IA**: Remoção completa de efeitos `.glow-*` desnecessários, background grid cibernético e animações decorativas não-funcionais.
   - **Tipografia Racionalizada (Regra 60-30-10)**: `font-mono` reservada estritamente para dados numéricos, timers e XP; textos e botões padronizados em `font-sans`.
   - **Tamanho Mínimo de 12px**: Nenhuma fonte abaixo de `text-xs` no projeto, garantindo conforto em leituras de 4h+ de estudo.

2. ⚡ **Code-Splitting & Redução de 52% no Bundle Inicial:**
   - Páginas carregadas dinamicamente via `React.lazy` e `Suspense`.
   - Bundle principal reduzido de 623 KB para **299 KB** com carregamento sob demanda em 25 chunks.
   - Consulta ao Dashboard otimizada com resolução O(1) e eliminação de N+1 queries no SQLite.

3. 🛡️ **Hardening de Segurança & Proteção de Dados:**
   - Rate limiting protegido contra bypass de cabeçalhos.
   - Mock OAuth desativado e bloqueado em ambientes de produção.
   - Validação estrita do parâmetro `aud` (Audience) em tokens de autenticação Google.
   - Ordem de execução de middlewares do Express corrigida com sanitização prévia contra Prototype Pollution.

4. 🧠 **Acervo RAG Híbrido ATRFB & Motor FTS5 no SQLite (3.613 Documentos):**
   - Base canônica com mais de **204 milhões de caracteres** de doutrina, legislação e teoria para a Receita Federal (FGV).
   - Busca textual instantânea (< 5ms) por artigos da lei (`Art. 150`), súmulas do STF/STJ e tópicos doutrinários via SQLite FTS5.
   - **Tutor IA** e **Chat Comunitário** conectados diretamente ao acervo para respostas fundamentadas e com citação direta de aulas.
   - Mais de **900 apostilas teóricas auto-provisionadas** prontas para estudo imediato na Sala de Estudos.
2. 🔄 **Ciclo de Estudos Dinâmico & Ponderado (Interleaving Anti-Fadiga):**
   - Esteira rotativa contínua para editais com muitas matérias (ex: Receita Federal ATRFB com 13 disciplinas).
   - Cálculo proporcional: $\text{Tempo} \propto \text{Peso no Edital} \times \text{Dificuldade do Aluno} \times \text{Fase}$.
   - Intercalação automática entre *Exatas & Dados*, *Direito & Leis* e *Humanas & Linguagens* para prevenir fadiga sináptica.
   - 5 modelos especializados: *Adaptativo*, *Pareto 80/20*, *Base Pré-Edital*, *Sprint com Data da Prova* e *Micro-Sprints (1h-2h)*.
   - Ação direta: botão *"▶ Iniciar Estudo Deste Bloco"* conectado à Sala de Estudos e botão *"✓ Concluir Bloco (+20 XP)"*.
2. 🎨 **Despoluição Visual & Eliminação de Menus Duplicados:**
   - Navegação desktop unificada exclusivamente na Sidebar esquerda.
   - Removidos dropdowns repetidos de atalhos e barras horizontais secundárias.
3. 🏛️ **Dashboard Inicial & Portal Interativo (Público):**
   - Elimina a barreira de telas de login cruas.
   - Demonstração ao vivo de certames, distribuição de pesos oficiais e **Laboratório Caça-Pegadinhas com timer de 15 segundos**.
4. 🔑 **Google OAuth Oficial Full-Page Redirect & Segurança de Sessão:**
   - Redirecionamento nativo de tela inteira para `accounts.google.com` (sem popups invasivos, prompts inline ou GIS).
   - Troca de código de autorização em backend seguro (`/api/auth/google/callback`) com persistência na tabela `auth_sessions`.
   - Criptografia de senhas via Scrypt nativo com validação rigorosa de e-mail e isolamento hermético entre contas.
3. ⚡ **Isolamento de Renderização de Timers (Zero Re-renders Globais):**
   - Cronômetros de simulados e sala de estudos encapsulados em subcomponentes memoizados (`<ExamLiveTimerDisplay />` e `<CadenceTimerWidget />`), evitando re-renders a cada 1s de árvores de 1.600+ linhas de JSX.
3. 🎯 **Formulação Heurística com DNA de Banca:**
   - Calibração semântica específica para **FGV** (enunciados densos de 3 a 6 linhas com casos hipotéticos, trocas conceituais sutis e jurisprudência STF/STJ) e **Fundação Cesgranrio** (literalidade e competências institucionais).
4. ⚡ **Hub de Acesso Rápido no Dashboard do Aluno:**
   - Navegação limpa com 6 atalhos diretos (Sala de Estudos, Simulados, Caça-Pegadinhas, Caderno de Erros, Flashcards, Redação) para menor ruído cognitivo.
5. 🧩 **Arquitetura Orientada a Objetos (POO & Domain Services):**
   - Camada de serviços desacoplada no backend (`UniversalPdfService`, `StudyCadenceService`, `AuthService`, `GamificationService`, `QuestionRepository`).
   - Frontend com `ApiClient` POO tipado em TypeScript e tokens centralizados em `design-tokens.ts`.
6. 📄 **Motor Universal de Ingestão de Qualquer PDF:**
   - Heurísticas avançadas para processar materiais de qualquer editora (Estratégia, Gran, Direção, Cebraspe, livros).
   - Sanitização de ruídos (CPFs, e-mails, marcas d'água), extração de sumários, separação entre teoria e exercícios e cálculo de ritmo de leitura.
7. ⏱️ **Cadência de Estudo Flexível & Sala de Estudos Rica:**
   - Presets inteligentes: `60m / 30m` (Foco Profundo), `45m / 15m` (Sprint Ágil), `50m / 10m` (Pomodoro) ou Personalizado.
   - Marca-página inteligente corrigido e persistido no SQLite com estimativa de tempo restante e seções teóricas aprofundadas com casos práticos e artigos de ouro.
8. ⚖️ **Caça-Pegadinhas da Lei Seca & Súmulas dos Tribunais (STF/STJ/TST):**
   - Desafios dinâmicos de 15 segundos para desarmar armadilhas de bancas na letra da lei com +10 a +15 XP.
   - Mapeamento completo de Súmulas Vinculantes e teses jurisprudenciais com alertas de pegadinhas.
9. 🏛️ **Simulação Realista "Dia D de Prova" (4 Horas):**
   - Prova Oficial contínua de 4h00 com **Folha de Respostas Digital (Cartão-Resposta)** e **Redação Discursiva** no mesmo bloco.
10. 🧭 **Matriz de Aproveitamento & Transição de Editais:**
   - Comparador inteligente que calcula a afinidade percentual entre certames e gera a trilha de complementação de disciplinas.
11. ✍️ **Corretor de Redação Discursiva por IA:**
   - Avaliação por espelho oficial em 4 eixos (*Domínio Temático, Estrutura Dissertativa, Norma Culta e Argumentação*).
12. 🎯 **Caderno de Erros com Repetição Espaçada SM-2:**
   - Captura automática de itens incorretos em simulados com re-treino focado e recompensa de **+15 XP**.

---

## 🚀 Concursos com Suporte Nativo

| Concurso | Cargo Alvo | Banca Examinadora | Disciplinas & Destaques |
| :--- | :--- | :--- | :--- |
| **Transpetro (Edital 03)** | Técnico de Administração e Controle Júnior | **Fundação Cesgranrio** | Noções de Administração (PODC), Lei das Estatais (13.303/16), Técnicas de Arquivo, Ética, Português e Matemática |
| **Transpetro (Edital 03)** | Técnico de Suprimento de Bens e Serviços (Logística) | **Fundação Cesgranrio** | Gestão de Estoques (Curva ABC, Ponto de Pedido), Modais de Transporte (Dutoviário, Cabotagem), Compras e Lei 13.303/16 |
| **Receita Federal (RFB)** | Analista-Tributário (ATRFB) & Auditor-Fiscal (AFRFB) | **FGV (Fundação Getulio Vargas)** | Direito Tributário, Aduaneira, Constitucional, Administrativo, Fluência de Dados e Contabilidade |
| **Banco do Brasil (BB)** | Agente Comercial & Agente de Tecnologia (TI) | **Fundação Cesgranrio** | Conhecimentos Bancários, TI & Banco de Dados, Português e Matemática Financeira |
| **Saúde RJ (SES-RJ / IASERJ 2026)** | Técnico de Enfermagem & Assistente Administrativo | **Instituto IBDO Projetos** | Legislação do SUS (Leis 8.080 e 8.142), Políticas Públicas e Administração |
| **Marinha do Brasil (SMV)** | Praças Temporários RM2 (Nível Médio/Técnico) | **DEnsM (Ensino da Marinha)** | Organização Básica da Marinha, História Naval e Legislação Militar |
| **Carreiras Customizadas** | Tribunais, Policiais e Administrativos | **Cebraspe, FCC, Vunesp, etc.** | Totalmente configurável via perfil |

---

## ⚡ Instalação e Execução Local

### Pré-requisitos:
* Node.js v20+, v22+ ou v24+ LTS.

### 1. Clonar o repositório e instalar dependências:
```bash
git clone https://github.com/JoaoGabsoares/concursabot.git
cd concursabot
npm install
```

### 2. Executar a Suíte de Testes:
```bash
npm test
```

### 3. Compilar o frontend:
```bash
npm run build
```

### 4. Configurar a Chave da IA (Opcional - Gratuito):
Crie ou edite o arquivo `.env`:
```env
GEMINI_API_KEY=sua_chave_do_google_ai_studio_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=3000
```
*(Obtenha sua chave gratuita em [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey))*

### 5. Iniciar a Plataforma:
```bash
npm start
```
Acesse no seu navegador: **`http://localhost:3000`**

Para desenvolvimento com Hot Module Replacement (HMR):
```bash
npm run dev
```

---

## 📁 Estrutura do Projeto

```
CONCURSO_BOT/
├── src/                          # Frontend React 19 + TypeScript
│   ├── api/client.ts             # Cliente REST POO tipado com ApiClient
│   ├── components/               # Componentes UI (Card, Button, ProgressBar, Toast, Modals)
│   ├── features/                 # Módulos por Domínio (Code-Splitting)
│   │   ├── dashboard/            # Dashboard Mission-Driven & Metas
│   │   ├── study-room/           # Sala de Estudos, Leitor PDF e Cadência (60m/30m)
│   │   ├── simulados/            # Simulados Cronometrados & Gabaritos
│   │   ├── error-notebook/       # Caderno de Erros & Re-teste (+15 XP)
│   │   ├── flashcards/           # Flashcards SM-2 com Repetição Espaçada
│   │   ├── redacao/              # Corretor Discursivo de Redação por IA
│   │   ├── edital/               # Raio-X do Edital & Pareto 80/20
│   │   └── settings/             # Ajustes de Cadência, Metodologia e Perfis
│   ├── styles/design-tokens.ts   # Tokens do Design System (Cores HSL, Tipografia, Sombras)
│   └── utils/                    # Doutrina, Gamificação, Mnemônicos e Carreiras
├── server/                       # Backend Node.js Express ESM
│   ├── services/                 # Serviços POO (UniversalPdf, StudyCadence, Auth, Gamification)
│   ├── database.js               # Driver node:sqlite nativo
│   ├── gemini.js                 # Integração com Google Gemini & Sanitizador
│   ├── gamification.js           # Catálogo de Ranks, XP, Streaks e Conquistas
│   └── routes/                   # Endpoints REST delegando para Services
├── tests/                        # Suíte Unificada de Testes Automatizados
│   ├── unit/                     # Testes Unitários de Heurísticas de PDF
│   ├── integration/              # Testes de Autenticação, Isolamento e Cadência
│   ├── security/                 # Pentest (SQLi, XSS, Scrypt)
│   └── run_all.js                # Runner central de testes (npm test)
└── uploads/                      # Diretório protegido para apostilas e PDFs
```

---

## 📄 Licença
Projeto open source sob licença MIT. Desenvolvido para aprovação com excelência técnica.
