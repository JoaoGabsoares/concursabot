# 🎯 Gabarito.AI — Documentação Completa da Arquitetura, Engenharia e Decisões de Projeto (v3.0 Ultra)

> **Visão Geral**: O **Gabarito.AI** é um ecossistema inteligente de alta performance desenvolvido sob medida para preparação de concursos públicos de elite, com suporte multi-carreira:
> 1. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
> 2. **Banco do Brasil (BB 2026)** — Agente Comercial e Agente de Tecnologia (TI) • Banca Fundação Cesgranrio
> 3. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
> 4. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
> 5. **Carreiras Customizadas / Tribunais** — Adaptável a qualquer certame ou banca examinadora (Cebraspe, FCC, etc.).
>
> O sistema integra leitura de apostilas em PDF com **RAG 2.0 e Caderno Enxuto**, análise preditiva de bancas examinadoras (**Princípio de Pareto 80/20** e cortes históricos), repetição espaçada automática (**Algoritmo SM-2: D+1, D+7, D+30**), **Caderno de Erros com superação (+15 XP)**, **Corretor Discursivo de Redação por IA**, gamificação orientada a patentes de concurseiro e suporte PWA.

---

## 📑 Sumário

1. [Princípios & Diretrizes do Projeto](#1-princípios--diretrizes-do-projeto)
2. [Stack Tecnológica & Diagrama de Arquitetura](#2-stack-tecnológica--diagrama-de-arquitetura)
3. [Módulos do Frontend React 19 & Funcionalidades](#3-módulos-do-frontend-react-19--funcionalidades)
   - [3.1. ⚡ Dashboard Mission-Driven (`features/dashboard/DashboardPage.tsx`)](#31--dashboard-mission-driven)
   - [3.2. 📖 Sala de Estudos RAG 2.0 & Upload (`features/study-room/StudyRoomPage.tsx`)](#32--sala-de-estudos-rag-20--upload)
   - [3.3. 🎯 Simulados Oficiais Cronometrados (`features/simulados/SimuladosPage.tsx`)](#33--simulados-oficiais-cronometrados)
   - [3.4. 📕 Caderno de Erros com Re-teste (+15 XP) (`features/error-notebook/ErrorNotebookPage.tsx`)](#34--caderno-de-erros-com-re-teste-15-xp)
   - [3.5. 🧠 Flashcards com Algoritmo SM-2 (`features/flashcards/FlashcardsPage.tsx`)](#35--flashcards-com-algoritmo-sm-2)
   - [3.6. ✍️ Corretor de Redação Discursiva por IA (`features/redacao/RedacaoPage.tsx`)](#36--corretor-de-redação-discursiva-por-ia)
   - [3.7. 📊 Raio-X do Edital & Pareto 80/20 (`features/edital/EditalPage.tsx`)](#37--raio-x-do-edital--pareto-8020)
   - [3.8. ⚙️ Central de Configurações, Guia & Sobre (`features/settings/SettingsPage.tsx`)](#38--central-de-configurações-guia--sobre)
4. [🤖 Motor de Inteligência Artificial: Google Gemini & Fallback Resiliente](#4--motor-de-inteligência-artificial-google-gemini--fallback-resiliente)
5. [🎨 Design System "Institutional Editorial & Surgical Minimalism"](#5--design-system-institutional-editorial--surgical-minimalism)
6. [💾 Banco de Dados SQLite Nativo (`node:sqlite`) & Schemas](#6--banco-de-dados-sqlite-nativo-nodesqlite--schemas)
7. [🔒 Blindagem de Segurança 360° & Pentest](#7--blindagem-de-segurança-360--pentest)
8. [🧪 Suítes de Testes Automatizados (117 Provas Aprovadas)](#8--suítes-de-testes-automatizados-117-provas-aprovadas)

---

## 1. Princípios & Diretrizes do Projeto

- **Privacidade & Custo Zero de Assinatura**: Executado 100% no computador do usuário ou na nuvem gratuita, armazenando histórico e materiais no banco de dados local SQLite sem custos de terceiros.
- **Fidelidade ao Material Original & RAG 2.0**: O estudante tem acesso à doutrina e legislação esquematizada com mnemônicos e fixação imediata, além de poder subir seus próprios PDFs de cursinho com extração local inteligente.
- **Foco Implacável nas Bancas Reais**:
  - **FGV**: Casos práticos longos, enunciados densos e pegadinhas em Direito Tributário, Administrativo e Constitucional.
  - **Cesgranrio**: Foco em Conhecimentos Bancários, PIX, TI e resolução rápida.
  - **Instituto IBDO**: Letra de lei rigorosa (SUS, Leis 8.080 e 8.142), prazos e protocolos assistenciais.
  - **DEnsM (Marinha)**: Tradições navais, cerimonial, RDM e Estatuto dos Militares (Lei 6.880/80).
- **Gamificação com Propósito**: Patentes oficiais de concurseiro (Aspirante &rarr; Focado &rarr; Competitivo &rarr; Especialista &rarr; Elite dos Aprovados) com ganho de XP e bônus de superação.
- **Prevenção Ativa do Esquecimento**: As revisões D+1, D+7 e D+30 são geradas pelo algoritmo SM-2 para evitar a perda do conteúdo memorizado.

---

## 2. Stack Tecnológica & Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FRONTEND WEB SPA (REACT 19 + VITE 8)                 │
│  - React 19 + TypeScript + Tailwind CSS v4 (Code-Splitting por Domínio) │
│  - Design System "Institutional Editorial" (Dark Void & Papel Linho)    │
│  - Google Fonts: Fraunces (Serif), Inter (Sans) & JetBrains Mono (Data) │
│  - Navegação Mobile-First com Bottom Nav Bar e Touch Targets >= 44px    │
│  - PWA: Service Worker para cache e uso offline completo                │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ HTTP / REST APIs (JSON)
┌────────────────────────────────────▼────────────────────────────────────┐
│                        NODE.JS BACKEND (v22 / v24 LTS)                  │
│  - Express.js ESM com Arquitetura de Rotas Modulares                    │
│  - node:sqlite oficial (DatabaseSync, Zero Compilação C++)              │
│  - Google GenAI SDK (gemini-3.5-flash-lite com fallback resiliente)     │
│  - Blindagem 360° contra Pentest, OWASP Top 10 e Prompt Injection       │
│  - Multer com sanitização estrita e extração assíncrona pdf-parse       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ SQL Queries
┌────────────────────────────────────▼────────────────────────────────────┐
│                       BANCO DE DADOS PERSISTENTE                        │
│  - SQLite 3 local: concursabot.db (Zero latência de rede)               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Módulos do Frontend React 19 & Funcionalidades

### 3.1. ⚡ Dashboard Mission-Driven
- **Localização:** `src/features/dashboard/DashboardPage.tsx`
- **Funcionalidades:**
  - **Missão do Dia Dinâmica:** Derivada estritamente da matéria prioritária do concurso ativo (ex: *Direito Tributário* na Receita Federal, *Conhecimentos Bancários* no BB).
  - **Patente do Concurseiro:** Visualização do rank atual, XP acumulado e barra de progresso até o próximo nível.
  - **Chama da Consistência (Streak):** Registro dos dias consecutivos de estudo.
  - **Radar de Disciplinas:** Percentuais de domínio por matéria e carimbo de status (*DOMINADO*, *EM ESTUDO*, *VULNERÁVEL*).

### 3.2. 📖 Sala de Estudos RAG 2.0 & Upload
- **Localização:** `src/features/study-room/StudyRoomPage.tsx`
- **Funcionalidades:**
  - Barra de seleção horizontal de disciplinas com troca instantânea de conteúdo.
  - Teoria esquematizada, tendências da banca, mnemônicos estruturados e fixação ativa com 1 clique.
  - Botão `[ + Subir PDF da Aula ]` com modal de envio de apostilas, extração via `pdf-parse` e fallback local de IA.
  - Isolamento estrito: só exibe arquivos PDF enviados pelo próprio usuário para o concurso ativo.

### 3.3. 🎯 Simulados Oficiais Cronometrados
- **Localização:** `src/features/simulados/SimuladosPage.tsx`
- **Funcionalidades:**
  - Provas oficiais cronometradas por carreira com gabarito dinâmico.
  - Mapa de respostas, temporizador regressivo e cálculo de pontuação com nota de corte.

### 3.4. 📕 Caderno de Erros com Re-teste (+15 XP)
- **Localização:** `src/features/error-notebook/ErrorNotebookPage.tsx`
- **Funcionalidades:**
  - Captura automática de cada erro cometido em simulados ou salas de estudo.
  - Re-tentativa imediata com validação de gabarito e atribuição de **+15 XP de bônus de superação**.
  - Campo para anotações pessoais de pegadinhas de banca.

### 3.5. 🧠 Flashcards com Algoritmo SM-2
- **Localização:** `src/features/flashcards/FlashcardsPage.tsx`
- **Funcionalidades:**
  - Baralhos categorizados por disciplina do edital.
  - Efeito 3D flip card e algoritmo SuperMemo-2 (SM-2) para agendamento de repetição espaçada.

### 3.6. ✍️ Corretor de Redação Discursiva por IA
- **Localização:** `src/features/redacao/RedacaoPage.tsx`
- **Funcionalidades:**
  - Temas oficiais de redação por banca e carreira.
  - Contador de palavras em tempo real e avaliação detalhada em 4 critérios de banca (*Tema, Estrutura, Norma Culta e Argumentação*).

### 3.7. 📊 Raio-X do Edital & Pareto 80/20
- **Localização:** `src/features/edital/EditalPage.tsx`
- **Funcionalidades:**
  - Mapeamento dos 20% de tópicos com 80% de incidência histórica na banca.
  - Tabela de notas de corte dos certames anteriores.

### 3.8. ⚙️ Central de Configurações, Guia & Sobre
- **Localização:** `src/features/settings/SettingsPage.tsx`
- **Funcionalidades:**
  - **Aba Ajustes & API:** Alteração de nome, chave Gemini BYOK (Bring Your Own Key), backup JSON e botão para zerar histórico para 0 XP.
  - **Aba Guia de Uso:** Metodologia dos 4 pilares e roteiro diário de estudo.
  - **Aba Sobre o Sistema:** Manifesto institucional, especificações de engenharia e blindagem OWASP.

---

## 4. 🤖 Motor de Inteligência Artificial: Google Gemini & Fallback Resiliente

O Gabarito.AI utiliza a API oficial do **Google GenAI SDK (`@google/genai`)** configurada no arquivo `server/gemini.js`:

* **Modelo Padrão**: `gemini-3.5-flash-lite` (alta velocidade e raciocínio estruturado).
* **Cadeia de Fallback em Cascata**:
  $$\text{gemini-3.5-flash-lite} \longrightarrow \text{gemini-flash-lite-latest} \longrightarrow \text{gemini-3.1-flash-lite} \longrightarrow \text{gemini-3.5-flash}$$
* **Prompt Injection Guard**: Filtro regex e sanitização contra instruções adversariais (`ignore previous instructions`, `DAN mode`, `system prompt leaks`).

---

## 5. 🎨 Design System "Institutional Editorial & Surgical Minimalism"

* **Modo Escuro (Dark Void)**: Fundo `#0D0E12`, cartões `#14151A`, bordas sutis `#262933` e destaque em azul cobalto `#3B82F6`.
* **Modo Claro (Papel Linho)**: Fundo `#FAFAFA`, cartões `#FFFFFF`, bordas `#E2E8F0` com altíssimo contraste tipográfico.
* **Tipografia Curada**:
  - *Display:* **Fraunces** (Serif elegante e autoritativa).
  - *Interface:* **Inter** (Máxima legibilidade e clareza).
  - *Dados & Códigos:* **JetBrains Mono** (Números, XP, timers e mnemônicos).

---

## 6. 💾 Banco de Dados SQLite Nativo (`node:sqlite`) & Schemas

O banco de dados SQLite (`concursabot.db`) é gerenciado de forma nativa pelo **`node:sqlite` (`DatabaseSync`)**, dispensando qualquer compilação nativa C++ ou `node-gyp`.

### Tabelas Principais:
* `user_profiles`: Perfis de estudantes, avatar emoji, carreira ativa e metas.
* `study_materials`: Apostilas em PDF, metadados extraídos e títulos por carreira.
* `questions`: Banco de questões com opções, gabarito e justificativas de banca.
* `simulados` & `simulado_questions`: Provas realizadas, notas e tempo cronometrado.
* `caderno_erros`: Questões erradas isoladas para re-treino focado e anotações.
* `redacoes`: Histórico de redações corrigidas com notas por critério.
* `flashcards`: Cartões com intervalo, repetições, facilidade SM-2 e data de revisão.
* `user_achievements` & `user_xp_log`: Histórico de XP e conquistas desbloqueadas.

---

## 7. 🔒 Blindagem de Segurança 360° & Pentest

- **Proteção Web:** Sanitização contra Prototype Pollution, HPP, Timing Attacks com `crypto.timingSafeEqual`, Rate Limiting de requisições e cabeçalhos de segurança OWASP (`helmet`).
- **Contenção de Uploads:** Validação de MIME type (`application/pdf`), sanitização de nomes de arquivos e bloqueio de Path Traversal (`/uploads/`).
- **Segurança de IA:** Sanitização de entradas em todas as rotas que consom Gemini.

---

## 8. 🧪 Suítes de Testes Automatizados (117 Provas Aprovadas)

```bash
# Execução da bateria completa:
node test_pentest_suite.js && node test_ai_security.js && node test_new_features.js && node run_qa_tests.js
```

1. 🛡️ **Pentest Suite:** **28/28 Aprovados (100%)**
2. 🤖 **AI Security Guard:** **15/15 Aprovados (100%)**
3. 🚀 **Novas Funcionalidades (Raio-X, Caderno de Erros, Redação):** **24/24 Aprovados (100%)**
4. ⚙️ **QA REST APIs E2E & Isolamento de Carreiras:** **50/50 Aprovados (100%)**
5. **Total:** **117/117 Testes com 100% de Aprovação!**
