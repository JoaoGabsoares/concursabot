# 🎓 ConcursaBot — Ecossistema Inteligente de Estudos para Concursos Públicos

[![Node.js](https://img.shields.io/badge/Node.js-v22%20LTS-green.svg)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/Database-SQLite%203%20(WAL)-blue.svg)](https://sqlite.org)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%203.7%20Flash-orange.svg)](https://aistudio.google.com)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-purple.svg)](https://web.dev/progressive-web-apps/)
[![Tests](https://img.shields.io/badge/Tests-74%2F74%20Passing%20(100%25)-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

> **O ConcursaBot é uma plataforma web completa, local, segura e gratuita de preparação para concursos públicos de elite**, integrando leitura de apostilas em PDF com **Caderno Enxuto**, Raio-X de incidência da banca (Pareto 80/20), corretor discursivo de redação por IA, repetição espaçada automática (D+1, D+7, D+30), simulados oficiais, **Caderno de Erros inteligente**, cronograma adaptativo com IA e gamificação com ganho de XP.

---

## 🚀 Concursos com Suporte Nativo e Isolamento Estrito

| Concurso | Cargo Alvo | Banca Examinadora | Status |
| :--- | :--- | :--- | :--- |
| **Banco do Brasil (BB)** | Agente Comercial & Agente de Tecnologia (TI) | **Fundação Cesgranrio** | 🟢 Catálogo Oficial Completo |
| **SES-RJ / IASERJ 2026** | Técnico de Enfermagem & Assistente Administrativo | **Instituto IBDO Projetos** | 🟢 Edital Aberto (287 vagas) |
| **Marinha do Brasil (SMV)** | Praças Temporários RM2 (Nível Médio e Técnico) | **DEnsM (Ensino da Marinha)** | 🟢 Edital Anual Regular |
| **Receita Federal (RFB)** | Analista-Tributário (ATRFB) & Auditor-Fiscal (AFRFB) | **FGV (Fundação Getulio Vargas)** | 🟢 Ciclo Completo Wave 1 & 2 |
| **Carreiras Customizadas** | Tribunais, Carreiras Policiais e Administrativas | **Qualquer Banca (Cebraspe, FCC, etc.)** | 🟢 Totalmente Configurável |

---

## 🌟 As 12 Ferramentas do Ecossistema

1. 📊 **Dashboard & Início (`#dashboard`)**: Visão consolidada da sua jornada, percentual de acerto geral, progresso no edital e atalhos rápidos.
2. 📖 **Sala de Estudos (`#study-room`)**: Visualizador de apostilas em PDF lado a lado com Caderno Enxuto e questões imediatas de fixação.
3. 📝 **Banco de Questões (`#questions`)**: Treino ativo por disciplina e assunto com filtros de banca e gabarito fundamentado.
4. ⏱️ **Simulados Cronometrados (`#simulados`)**: Provas completas com contagem regressiva, cálculo de nota líquida e estatísticas detalhadas.
5. 📕 **Caderno de Erros Inteligente (`#caderno-erros`)**: Captura automática de deslizes com botão de re-treino focado até a superação (+15 XP).
6. ✍️ **Corretor de Redação por IA (`#redacao`)**: Avaliação discursiva em 4 critérios oficiais (Tema, Estrutura, Norma Culta, Argumentação).
7. 🔍 **Raio-X do Edital & Pareto 80/20 (`#edital`)**: Análise de incidência estatística da banca, tópicos mais cobrados e notas de corte históricas.
8. 🧠 **Flashcards Anki-Style (`#flashcards`)**: Algoritmo SM-2 de repetição espaçada com revisão rápida por atalhos de teclado (1 a 4).
9. 📅 **Cronograma Inteligente (`#schedule`)**: Ciclo de estudos balanceado automaticamente por IA com exportação para `.ics` e Google Agenda.
10. 🤖 **Tutor Socrático IA (`#tutor`)**: Mentor pedagógico com 3 estilos de resposta e gerador de flashcards com 1 clique.
11. ⚖️ **Comparador "Dá pra Conciliar?" (`#hub`)**: Matriz de sobreposição entre editais para orientar estratégias multicarreira.
12. 📚 **Resumos & Mapas Mentais (`#summaries`)**: Sínteses de alta densidade estruturadas em Markdown para revisão rápida pré-prova.

---

## ⚡ Como Iniciar Localmente (Em 2 Minutos)

### Pré-requisitos:
* Node.js v20+ ou v22 LTS instalado.

### 1. Clonar o repositório e instalar dependências:
```bash
git clone https://github.com/JoaoGabsoares/concursabot.git
cd concursabot
npm install
```

### 2. Configurar a Chave Gratuita da IA:
Crie ou edite o arquivo `.env`:
```env
GEMINI_API_KEY=sua_chave_do_google_ai_studio_aqui
GEMINI_MODEL=gemini-3.7-flash
PORT=3000
```
*(Obtenha sua chave gratuita em [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey))*

### 3. Iniciar o ConcursaBot:
```bash
npm start
```
Acesse no seu navegador: **`http://localhost:3000`** 🎉

---

## 🌐 Como Deixar Online de Graça (Zero Custo)

Consulte nosso guia passo a passo:
👉 [**`GUIA_DEPLOY_GRATUITO.md`**](GUIA_DEPLOY_GRATUITO.md)

* **Cloudflare Tunnel (Recomendado)**: Túnel HTTPS seguro direto do seu computador (`cloudflared tunnel --url http://localhost:3000`).
* **Render.com Free Tier**: Deploy em nuvem com Docker.
* **Oracle Cloud Always Free**: VPS Linux potente gratuita para sempre.
* **Proteção por PIN**: Ative o `INVITE_PIN=2026` no `.env` para controle de acesso.

---

## 📬 Autor & Contato

Desenvolvido por **João Gabriel Soares**
* 📧 **E-mail:** [joao.dev.soares@gmail.com](mailto:joao.dev.soares@gmail.com)
* 🐙 **GitHub:** [@JoaoGabsoares](https://github.com/JoaoGabsoares)

---

## 📚 Documentação Técnica
Para detalhes de arquitetura de software, schemas do SQLite e rotas REST:
👉 [**`DOCUMENTACAO_DO_SISTEMA.md`**](DOCUMENTACAO_DO_SISTEMA.md)

