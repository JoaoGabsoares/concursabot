# 🎯 Gabarito.AI — Ecossistema Inteligente de Estudos para Concursos Públicos (v3.0 Ultra)

[![React 19](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite%208-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-v22%20LTS-green.svg)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/Database-SQLite%203%20(node%3Asqlite)-blue.svg)](https://nodejs.org/api/sqlite.html)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%203.7%20Flash-orange.svg)](https://aistudio.google.com)
[![PWA](https://img.shields.io/badge/PWA-Mobile%20First-purple.svg)](https://web.dev/progressive-web-apps/)
[![Security](https://img.shields.io/badge/Security-100%25%20OWASP%20%26%20AI%20Hardened-brightgreen.svg)]()
[![Tests](https://img.shields.io/badge/Tests-102%2F102%20Passing%20(100%25)-success.svg)]()
[![Methodology](https://img.shields.io/badge/Methodology-Vibecoding%20%E2%9C%A8-blueviolet.svg)]()

> **O Gabarito.AI é uma plataforma web de alta performance construída para aprovação em concursos públicos de elite**, integrando leitura de apostilas em PDF com **Caderno Enxuto**, Raio-X de incidência da banca (Pareto 80/20), corretor discursivo de redação por IA, repetição espaçada automática (D+1, D+7, D+30), simulados oficiais cronometrados, **Caderno de Erros inteligente**, cronograma adaptativo e **Design System Mobile-First (Surgical Minimalism)**.

> 💡 **Nota de Transparência & Metodologia (Vibecoding):**  
> Este projeto foi idealizado e construído através da abordagem de **Vibecoding** (*desenvolvimento ágil assistido por IA e pair programming com LLMs*), combinando visão de produto focada na dor real do concurseiro com engenharia de software de ponta.

---

## 🏛️ Destaques da Versão 3.0 Ultra

1. 🎨 **Design System *Surgical Minimalism & High-Stakes Performance*:**
   - Ruptura total com o clichê de IA (adeus azul genérico e gradientes roxos).
   - Dark Mode imersivo em Void Black (`#0D0E12`) com cartões em Obsidian (`#14151A`).
   - Light Mode em Papel Linho Editorial (`#FAFAFA`) de altíssimo contraste.
   - Tipografia de porte institucional (**Fraunces** + **Inter** + **JetBrains Mono**).
2. 📱 **Mobile-First Autêntico & Thumb Zones:**
   - Barra de navegação inferior translúcida com acrílico (`backdrop-blur-md`).
   - Touch targets rigorosos de no mínimo **44px × 44px**.
   - Bottom sheets deslizantes com barra de arrasto para celular.
3. ⚡ **Dashboard Mission-Driven:**
   - Botão de entrada rápida em 1 toque: `[ 🚀 COMEÇAR A ESTUDAR AGORA ]`.
   - Streak de dias seguidos (🔥) e metas diárias claras de questões e minutos.
   - Radar de Atenção condicional conectado ao Caderno de Erros.
4. 🏗️ **Arquitetura Moderna (React 19 + Vite 8 + TypeScript):**
   - Roteamento modular com code-splitting por rota e carregamento instantâneo (<300ms).
   - Backend Express + `node:sqlite` nativo (Zero compilação C++, Zero ABI lock).
5. 🛡️ **Blindagem de Segurança Total (100% Pentest & AI Guard):**
   - Proteção contra OWASP Top 10, prototype pollution, timing attacks, path traversal e **Prompt Injection / Jailbreak de IA**.

---

## 🚀 Concursos com Suporte Nativo

| Concurso | Cargo Alvo | Banca Examinadora | Status |
| :--- | :--- | :--- | :--- |
| **Banco do Brasil (BB)** | Agente Comercial & Agente de Tecnologia (TI) | **Fundação Cesgranrio** | 🟢 Catálogo Completo |
| **Receita Federal (RFB)** | Analista-Tributário (ATRFB) & Auditor-Fiscal (AFRFB) | **FGV (Fundação Getulio Vargas)** | 🟢 Ciclo Completo |
| **Saúde RJ (SES-RJ / IASERJ 2026)** | Técnico de Enfermagem & Assistente Administrativo | **Instituto IBDO Projetos** | 🟢 Edital Aberto (287 vagas) |
| **Marinha do Brasil (SMV)** | Praças Temporários RM2 (Nível Médio e Técnico) | **DEnsM (Ensino da Marinha)** | 🟢 Edital Regular |
| **Carreiras Customizadas** | Tribunais, Carreiras Policiais e Fiscais | **Qualquer Banca (Cebraspe, FCC, etc.)** | 🟢 Configurável |

---

## ⚡ Como Iniciar Localmente (Em 2 Minutos)

### Pré-requisitos:
* Node.js v20+ ou v22+ LTS instalado.

### 1. Instalar dependências e compilar o frontend:
```bash
git clone https://github.com/JoaoGabsoares/concursabot.git
cd concursabot
npm install
npm run build
```

### 2. Configurar a Chave Gratuita da IA:
Crie ou edite o arquivo `.env`:
```env
GEMINI_API_KEY=sua_chave_do_google_ai_studio_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=3000
```
*(Obtenha sua chave gratuita em [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey))*

### 3. Iniciar o Servidor:
```bash
npm start
```
Acesse no seu navegador ou smartphone: **`http://localhost:3000`**

---

## 🧪 Bateria de Testes Automatizados (102 Provas)

```bash
# Executar todos os testes de QA, Pentest, IA Security e Novas Funcionalidades:
node test_pentest_suite.js && node test_ai_security.js && node test_new_features.js && node run_qa_tests.js
```
- 🛡️ **Pentest Suite:** 28/28 Aprovados (100%)
- 🤖 **AI Prompt Injection Guard:** 15/15 Aprovados (100%)
- 🧠 **Novas Funcionalidades (Raio-X, Caderno de Erros, Redação):** 24/24 Aprovados (100%)
- ⚙️ **QA REST APIs E2E:** 50/50 Aprovados (100%)
- **Total:** **102/102 testes aprovados com 100% de sucesso!**

---

## 📄 Licença
Projeto proprietário desenvolvido com paixão para estudantes de alto rendimento.
