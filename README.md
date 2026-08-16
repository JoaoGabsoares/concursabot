# 🎯 Gabarito.AI — Ecossistema Inteligente de Estudos para Concursos Públicos (v3.0 Ultra)

[![React 19](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite%208-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-v22%20%7C%20v24%20LTS-green.svg)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/Database-SQLite%203%20(node%3Asqlite)-blue.svg)](https://nodejs.org/api/sqlite.html)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%203.5%20%7C%203.7%20Flash-orange.svg)](https://aistudio.google.com)
[![PWA](https://img.shields.io/badge/PWA-Mobile%20First-purple.svg)](https://web.dev/progressive-web-apps/)
[![Security](https://img.shields.io/badge/Security-100%25%20OWASP%20%26%20AI%20Hardened-brightgreen.svg)]()
[![Tests](https://img.shields.io/badge/Tests-117%2F117%20Passing%20(100%25)-success.svg)]()
[![Methodology](https://img.shields.io/badge/Methodology-Vibecoding%20%E2%9C%A8-blueviolet.svg)]()

> **O Gabarito.AI é uma plataforma web de alta performance construída para aprovação em concursos públicos de elite**, integrando leitura de apostilas em PDF com **RAG 2.0 e Caderno Enxuto**, Raio-X de incidência da banca (**Princípio de Pareto 80/20**), **Corretor Discursivo de Redação por IA**, repetição espaçada automática (**Algoritmo SM-2: D+1, D+7, D+30**), simulados oficiais cronometrados, **Caderno de Erros com superação (+15 XP)**, cronograma adaptativo e **Design System Mobile-First (Institutional Editorial & Surgical Minimalism)**.

> 💡 **Nota de Metodologia & Engenharia (Vibecoding):**  
> Este projeto foi idealizado e construído através da abordagem de **Vibecoding** (*desenvolvimento ágil assistido por IA e pair programming com LLMs*), combinando visão de produto focada na dor real do concurseiro com arquitetura de software de alta resiliência.

---

## 🏛️ Destaques da Versão 3.0 Ultra

1. 🎨 **Design System *Institutional Editorial & Surgical Minimalism*:**
   - Ruptura total com clichês de IA (sem azul corporativo genérico ou gradientes roxos).
   - **Dark Mode** imersivo em Void Black (`#0D0E12`) com cartões em Obsidian (`#14151A`).
   - **Light Mode** em Papel Linho Editorial (`#FAFAFA`) de altíssimo contraste e legibilidade.
   - Tipografia de porte institucional (**Fraunces** + **Inter** + **JetBrains Mono**).
2. 📱 **Mobile-First Autêntico & Thumb Zones:**
   - Barra de navegação inferior translúcida com acrílico (`backdrop-blur-md`).
   - Touch targets rigorosos de no mínimo **44px × 44px**.
   - Layouts 100% fluidos e responsivos para smartphones, tablets e notebooks.
3. ⚡ **Dashboard Mission-Driven com Sincronização Dinâmica:**
   - Missão prioritária do dia derivada diretamente do edital ativo (sem fallbacks incorretos).
   - Streak de dias seguidos (🔥) e metas diárias de questões e minutos.
   - Patente oficial de concurseiro com barra de progresso de XP em tempo real.
4. 📖 **Sala de Estudos RAG 2.0 com Upload Resiliente:**
   - Doutrina esquematizada, tendências da banca, mnemônicos e fixação imediata com 1 clique.
   - Botão `[ + Subir PDF da Aula ]` com extração local inteligente via `pdf-parse` e fallback tolerante a falhas.
5. ✍️ **Corretor de Redação Discursiva por IA:**
   - Avaliação por espelho oficial de banca em 4 eixos (*Domínio Temático, Estrutura Dissertativa, Norma Culta e Argumentação*).
6. 🎯 **Caderno de Erros com Bônus de Superação:**
   - Captura automática de qualquer item incorreto em simulados ou sala de estudos com re-treino focado e recompensa de **+15 XP**.
7. 🧠 **Flashcards SM-2:**
   - Repetição espaçada baseada na curva do esquecimento (D+1, D+7, D+30) com avaliação de 1 a 4.
8. 🏗️ **Arquitetura Zero-Build SQLite (`node:sqlite`):**
   - Motor SQLite embutido no núcleo do Node.js (Zero compilação C++, Zero dependências de compilação).
9. 🛡️ **Blindagem 360° contra Pentest & Prompt Injection:**
   - 100% aprovado contra ataques OWASP Top 10 e tentativas de jailbreak de IA.

---

## 🚀 Concursos com Suporte Nativo

| Concurso | Cargo Alvo | Banca Examinadora | Disciplinas & Destaques |
| :--- | :--- | :--- | :--- |
| **Receita Federal (RFB)** | Analista-Tributário (ATRFB) & Auditor-Fiscal (AFRFB) | **FGV (Fundação Getulio Vargas)** | Direito Tributário, Aduaneira, Constitucional, Administrativo e Contabilidade |
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

### 2. Compilar o frontend:
```bash
npm run build
```

### 3. Configurar a Chave da IA (Opcional - Gratuito):
Crie ou edite o arquivo `.env`:
```env
GEMINI_API_KEY=sua_chave_do_google_ai_studio_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=3000
```
*(Obtenha sua chave gratuita em [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey))*

### 4. Iniciar a Plataforma:
```bash
npm start
```
Acesse no seu navegador ou smartphone: **`http://localhost:3000`**

Para desenvolvimento com Hot Module Replacement (HMR):
```bash
npm run dev
```

---

## 🧪 Bateria de Testes Automatizados (117 Provas)

```bash
# Executar todos os testes de Pentest, Segurança de IA, Novas Features e QA:
node test_pentest_suite.js && node test_ai_security.js && node test_new_features.js && node run_qa_tests.js
```
- 🛡️ **Pentest Suite:** 28/28 Aprovados (100%)
- 🤖 **AI Prompt Injection Guard:** 15/15 Aprovados (100%)
- 🚀 **Novas Funcionalidades (Raio-X, Caderno de Erros, Redação):** 24/24 Aprovados (100%)
- ⚙️ **QA REST APIs E2E & Isolamento de Carreiras:** 50/50 Aprovados (100%)
- **Total:** **117/117 testes aprovados com 100% de sucesso!**

---

## 📁 Estrutura do Projeto

```
CONCURSO_BOT/
├── src/                          # Frontend React 19 + TypeScript
│   ├── api/client.ts             # Cliente REST tipado com tratamento de erros
│   ├── components/               # Primitives (Card, Button, ProgressBar, CarimboStatus)
│   ├── features/                 # Módulos por Domínio (Code-Splitting)
│   │   ├── dashboard/            # Dashboard Mission-Driven & Metas
│   │   ├── study-room/           # Sala de Estudos RAG 2.0 & Upload de PDF
│   │   ├── simulados/            # Simulados Cronometrados & Gabaritos
│   │   ├── error-notebook/       # Caderno de Erros & Re-teste (+15 XP)
│   │   ├── flashcards/           # Flashcards SM-2 com Repetição Espaçada
│   │   ├── redacao/              # Corretor Discursivo de Redação por IA
│   │   ├── edital/               # Raio-X do Edital & Pareto 80/20
│   │   └── settings/             # Ajustes, Guia de Uso, Metodologia e Sobre
│   ├── styles/index.css          # Design System e Tokens CSS / Tailwind v4
│   └── utils/                    # Doutrina, Gamificação, Mnemônicos e Carreiras
├── server/                       # Backend Node.js Express ESM
│   ├── database.js               # Driver node:sqlite nativo
│   ├── gemini.js                 # Integração com Google Gemini & Prompt Sanitizer
│   ├── gamification.js           # Motor de Patentes, XP, Streaks e Conquistas
│   └── routes/                   # Endpoints REST (study-room, questions, users, etc.)
├── uploads/                      # Diretório protegido para apostilas e PDFs
└── public/                       # Assets estáticos e manifesto PWA
```

---

## 📄 Licença
Projeto desenvolvido com foco em alta performance e aprovação em concursos públicos.
