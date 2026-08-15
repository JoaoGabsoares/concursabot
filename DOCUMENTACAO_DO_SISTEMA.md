# 🧠 ConcursaBot — Documentação Completa da Arquitetura, Funcionalidades e Decisões de Projeto (v2.4 Pro)

> **Visão Geral**: O **ConcursaBot** é uma plataforma e ecossistema inteligente de alta performance desenvolvido sob medida para preparação de concursos públicos de elite com suporte multi-carreira:
> 1. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
> 2. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
> 3. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
> 4. **Carreiras Customizadas / Tribunais** — Adaptável a qualquer certame ou banca examinadora.
>
> O projeto foi idealizado como uma alternativa proprietária, local, segura, gratuita e muito mais robusta a plataformas comerciais como o *Concursa.ai*, integrando leitura de apostilas originais em PDF com Caderno Enxuto, análise preditiva de bancas examinadoras, repetição espaçada automática (D+1, D+7, D+30), Caderno de Erros, Cronograma Inteligente com IA, gamificação e suporte a PWA offline.

---

## 📑 Sumário

1. [Princípios & Diretrizes do Projeto](#1-princípios--diretrizes-do-projeto)
2. [Stack Tecnológica & Arquitetura](#2-stack-tecnológica--arquitetura)
3. [Módulos do Sistema & Funcionalidades Operacionais](#3-módulos-do-sistema--funcionalidades-operacionais)
   - [3.0. 🎴 Hub Multicarreiras com Isolamento Estrito (#hub)](#30--hub-multicarreiras-com-isolamento-estrito-hub)
   - [3.1. ⚡ Hoje • Painel de Ação & Pauta Semanal com IA (#dashboard)](#31--hoje--painel-de-ação--pauta-semanal-com-ia-dashboard)
   - [3.2. 📖 Biblioteca & Sala de Estudos com "Caderno Enxuto" (#study-room)](#32--biblioteca--sala-de-estudos-com-caderno-enxuto-study-room)
   - [3.3. 🎯 Treino: Simulados Oficiais, Banco de Questões e Caderno de Erros](#33--treino-simulados-oficiais-banco-de-questões-e-caderno-de-erros)
   - [3.4. 🧠 Repetição Espaçada & Curva do Esquecimento (D+1, D+7, D+30)](#34--repetição-espaçada--curva-do-esquecimento-d1-d7-d30)
   - [3.5. 📊 Inteligência: Raio-X de Edital, Cronograma IA e Tutor Socrático](#35--inteligência-raio-x-de-edital-cronograma-ia-e-tutor-socrático)
   - [3.6. ⚙️ Central de Configurações Unificadas (#settings)](#36--central-de-configurações-unificadas-settings)
   - [3.7. 🏆 Gamificação, Conquistas e Níveis de XP](#37--gamificação-conquistas-e-níveis-de-xp)
4. [🤖 Motor de Inteligência Artificial: Google Gemini 3.7 Flash & Fallback](#4--motor-de-inteligência-artificial-google-gemini-37-flash--fallback)
5. [🎨 Design System, Temas (Claro/Escuro) & Microinterações](#5--design-system-temas-claroescuro--microinterações)
6. [💾 Banco de Dados SQLite, Schemas & Migrations](#6--banco-de-dados-sqlite-schemas--migrations)
7. [🔒 Segurança, Multi-usuário & Autenticação por PIN de Convite](#7--segurança-multi-usuário--autenticação-por-pin-de-convite)
8. [🌐 Estratégia de Deploy Web Gratuito & PWA Offline](#8--estratégia-de-deploy-web-gratuito--pwa-offline)

---

## 1. Princípios & Diretrizes do Projeto

- **Privacidade & Custo Zero de Assinatura**: O sistema pode ser executado 100% no computador do usuário ou na nuvem gratuita, armazenando histórico e materiais no banco de dados local SQLite sem mensalidades.
- **Fidelidade ao Material Original & Caderno Enxuto**: Em vez de depender apenas de resumos genéricos, o estudante estuda com a **apostila oficial** lado a lado com o **Caderno Enxuto gerado por IA**, sintetizando leis secas, súmulas e jurisprudência.
- **Foco Implacável nas Bancas Reais**:
  - **FGV**: Casos práticos longos, enunciados densos e interdisciplinaridade.
  - **Instituto IBDO**: Letra de lei rigorosa (SUS, Leis 8.080 e 8.142), prazos e protocolos assistenciais.
  - **DEnsM (Marinha)**: Tradições navais, cerimonial, RDM e Estatuto dos Militares (Lei 6.880/80).
- **Gamificação com Propósito**: Ganho de XP e desbloqueio de troféus reais ao resolver questões inéditas e bater metas diárias.
- **Prevenção Ativa do Esquecimento**: As revisões D+1, D+7 e D+30 são geradas automaticamente na pauta diária para evitar a perda do conteúdo já estudado.

---

## 2. Stack Tecnológica & Arquitetura

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FRONTEND WEB SPA                              │
│  - HTML5 Semântico + Vanilla JS Moderno (ES Modules)                   │
│  - CSS3 Design System com Tokens HSL, Modo Claro e Modo Escuro          │
│  - Google Fonts: Plus Jakarta Sans (UI) & Outfit (Títulos & Métricas)   │
│  - PDF Viewer nativo em split-screen + Canvas de Confetes               │
│  - PWA: Service Worker para cache e uso offline completo                │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ HTTP / REST APIs (JSON)
┌────────────────────────────────────▼────────────────────────────────────┐
│                        NODE.JS BACKEND (v22 LTS)                        │
│  - Express.js com ESM & Arquitetura de Rotas Modulares                  │
│  - Better-SQLite3 (com WAL Mode, Prepared Statements e Migrations)      │
│  - Google Gemini API (gemini-3.7-flash com fallback 3.6/3.5/3.1-lite)  │
│  - gemini-embedding-001 (768-d via MRL para busca vetorial RAG)         │
│  - Exportação .ICS nativa (Google Agenda / Apple Calendar)              │
│  - Multer (upload e catalogação segura de PDFs de estudo)               │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ SQL Queries
┌────────────────────────────────────▼────────────────────────────────────┐
│                       BANCO DE DADOS PERSISTENTE                        │
│  - SQLite 3 local: concursabot.db (Zero latência de rede)               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Módulos do Sistema & Funcionalidades Operacionais

### 3.0. 🎴 Hub Multicarreiras com Isolamento Estrito (`#hub`)
* Permite alternar instantaneamente entre **Receita Federal**, **SES-RJ Saúde 2026**, **Marinha RM2 Praças** e **Concurso Personalizado**.
* **Isolamento 100% Garantido**: Ao trocar de concurso, o catálogo de apostilas, o banco de questões, os simulados e o cronograma filtram estritamente as disciplinas pertinentes ao objetivo ativo, sem vazamento de dados de outras carreiras.

### 3.1. ⚡ Hoje • Painel de Ação & Pauta Semanal com IA (`#dashboard`)
* **Pauta do Dia Orientada por IA**: Carrega os blocos de estudo calculados para o dia da semana atual com checkboxes interativos que concedem **+25 XP** e feedback sonoro imediato.
* **Métricas em Tempo Real**: Total de questões resolvidas, taxa de assertividade percentual, cards pendentes de revisão e simulados concluídos com animações fluidas.
* **Radar de Disciplinas**: Exibe o progresso de cobertura das matérias com pesos oficiais da banca.

### 3.2. 📖 Biblioteca & Sala de Estudos com "Caderno Enxuto" (`#study-room`)
* Leitura em tela dividida (*split-screen*): Apostila original em PDF à esquerda e o **Caderno Enxuto** da IA à direita.
* O Caderno Enxuto extrai automaticamente os artigos de lei mais cobrados, prazos fatais, mnemônicos e pegadinhas de prova.

### 3.3. 🎯 Treino: Simulados Oficiais, Banco de Questões e Caderno de Erros
* **Simulados Oficiais (`#simulados`)**: Modo de prova cronometrado com pontuação real, gabarito detalhado comentado por IA e geração de relatórios de desempenho.
* **Banco de Questões Inéditas (`#questions`)**: Fixação contínua de matérias com resolução socrática e explicações passo a passo.
* **Caderno de Erros Inteligente (`#error-notebook`)**: Isola automaticamente todas as questões erradas pelo estudante nos simulados para re-treino focado até a fixação definitiva.
* **Flashcards com Repetição Espaçada (`#flashcards`)**: Memorização de prazos, conceitos e exceções de lei.

### 3.4. 🧠 Repetição Espaçada & Curva do Esquecimento (D+1, D+7, D+30)
* O motor de repetição calcula as datas exatas de revisão para cada aula concluída, alimentando a pauta diária e prevenindo a perda de memória a longo prazo.

### 3.5. 📊 Inteligência: Raio-X de Edital, Cronograma IA e Tutor Socrático
* **Raio-X de Edital (`#edital`)**: Análise preditiva dos últimos 5 concursos da banca, mapeando o que *Sempre Cai*, o que *Às Vezes Cai* e os *Tópicos Inéditos*.
* **Cronograma Semanal IA (`#schedule`)**: Gerador dinâmico com Gemini 3.7 Flash que calcula a divisão de horas e matérias com botão de exportação universal **`.ICS`**.
* **Tutor IA 24/7 (`#tutor`)**: Assistente socrático que responde dúvidas conceituais, jurisprudência e casos práticos da banca.

### 3.6. ⚙️ Central de Configurações Unificadas (`#settings`)
* **5 Abas de Controle**:
  1. *Perfil & Concurso*: Edição de nome, avatar emoji, concurso ativo, horas/dia e turnos de estudo.
  2. *Agenda & Integrações*: Chave liga/desliga da Google Agenda, link iCal com validação em tempo real e download de `.ICS`.
  3. *Inteligência Artificial*: Status do modelo Gemini 3.7 Flash, seleção do estilo pedagógico do tutor e medidor de latência em milissegundos.
  4. *Aparência & Sons*: Alternador Claro/Escuro e controle de efeitos sonoros de gamificação.
  5. *Dados & Manutenção*: Backup completo em JSON (`/api/users/:id/export-progress`), modal de reset de estudos e estatísticas do banco SQLite.

### 3.7. 🏆 Gamificação, Conquistas e Níveis de XP (`#conquistas`)
* Sistema de níveis de aprovação (Iniciante &rarr; Reta Final &rarr; Nome no Diário Oficial) com cálculo diário de *Streak* (dias consecutivos) e medalhas comemorativas.

---

## 4. 🤖 Motor de Inteligência Artificial: Google Gemini 3.7 Flash & Fallback

O ConcursaBot utiliza a API oficial do **Google GenAI SDK (`@google/genai`)** configurada no arquivo `server/gemini.js`:

* **Modelo Padrão**: `gemini-3.7-flash` (disponibilidade geral GA, raciocínio avançado e alta velocidade).
* **Cadeia de Fallback Resiliente**:
  $$\text{gemini-3.7-flash} \longrightarrow \text{gemini-3.6-flash} \longrightarrow \text{gemini-3.5-flash} \longrightarrow \text{gemini-3.1-flash-lite} \longrightarrow \text{gemini-flash-latest}$$
  Se a nuvem da Google apresentar instabilidades temporárias ou erros 503/429, o backend tenta automaticamente o próximo modelo sem travar o estudo do aluno.
* **Modelo de Embeddings Vetoriais**: `gemini-embedding-001` configurado com dimensionalidade fixa de **768-d** via MRL (*Matryoshka Representation Learning*) para busca semântica em PDFs.

---

## 5. 🎨 Design System, Temas (Claro/Escuro) & Microinterações

* **Modo Claro (Padrão)**: Fundo limpo e arejado em tons de cinza suave (`#f8fafc`), cartões brancos com sombras sutis e contraste perfeito para leitura prolongada.
* **Modo Escuro**: Superfícies escuras texturizadas (`#0f172a` e `#1e293b`) com destaque em azul royal e esmeralda.
* **Acessibilidade**: Elementos clicáveis com estados `:hover` e `:active`, badges coloridas por matéria e suporte a teclado.

---

## 6. 💾 Banco de Dados SQLite, Schemas & Migrations

O banco de dados SQLite (`concursabot.db`) é gerenciado de forma transacional pelo `better-sqlite3` com modo **WAL (Write-Ahead Logging)** ativado para máxima concorrência.

### Principais Tabelas:
* `user_profiles`: Perfis de estudantes, avatar emoji, concurso ativo, metas diárias, preferências de agenda e estilo de tutor.
* `schedules` e `schedule_tasks`: Cronogramas inteligentes gerados por IA e seus blocos semanais com status de conclusão.
* `study_materials`: Aulas, apostilas em PDF e Cadernos Enxutos indexados por matéria e concurso.
* `questions`: Banco de questões com opções em JSON, gabarito oficial, banca e explicações pedagógicas.
* `simulados` e `simulado_questions`: Histórico de provas realizadas, tempo gasto e pontuação.
* `question_answers`: Registro de cada resposta submetida pelo aluno (para alimentar o Caderno de Erros e estatísticas de precisão).
* `study_reviews`: Fila de revisões espaçadas D+1, D+7 e D+30.
* `user_achievements` e `user_xp_log`: Histórico de gamificação e conquistas.

---

## 7. 🔒 Segurança, Multi-usuário & Autenticação por PIN de Convite

* **PIN de Convite (`INVITE_PIN`)**: Configurado no arquivo `.env`, impede que pessoas não autorizadas acessem o ConcursaBot na web e consumam sua cota do Gemini.
* **Isolamento Multi-usuário**: Todas as ações (sessões, respostas, simulados e tarefas) são vinculadas ao `x-user-id` do perfil ativo, permitindo que vários amigos usem a mesma instância sem misturar seus dados.
* **Proteção de Segredos**: A chave do Gemini (`GEMINI_API_KEY`) nunca é exposta no frontend; todas as chamadas à IA passam pelo backend autenticado.

---

## 8. 🌐 Estratégia de Deploy Web Gratuito & PWA Offline

Para colocar o ConcursaBot online com custo zero para seus amigos testarem, consulte o guia passo a passo em:
👉 [**`GUIA_DEPLOY_GRATUITO.md`**](file:///home/joao/%C3%81rea%20de%20trabalho/CONCURSO_BOT/GUIA_DEPLOY_GRATUITO.md)

* **Opção 1**: Cloudflare Tunnel + PC Local (Sem abrir portas de roteador, zero custo, HTTPS grátis).
* **Opção 2**: Render.com Free Tier com Docker direto do GitHub.
* **Opção 3**: Oracle Cloud Always Free VPS (Linux 24GB RAM grátis).
* **PWA no Celular**: Instalação como app nativo em iPhone e Android em 2 toques.
