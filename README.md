# 🎓 ConcursaBot — Ecossistema Inteligente de Estudos para Concursos Públicos

[![Node.js](https://img.shields.io/badge/Node.js-v22%20LTS-green.svg)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/Database-SQLite%203%20(WAL)-blue.svg)](https://sqlite.org)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%203.7%20Flash-orange.svg)](https://aistudio.google.com)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-purple.svg)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

> **O ConcursaBot é uma plataforma web completa, local, segura e gratuita de preparação para concursos públicos de elite**, integrando leitura de apostilas originais em PDF com **Caderno Enxuto**, análise preditiva de bancas examinadoras, repetição espaçada automática (D+1, D+7, D+30), simulados oficiais, **Caderno de Erros inteligente**, cronograma adaptativo com IA e gamificação com ganho de XP.

---

## 🚀 Concursos com Suporte Nativo e Isolamento Estrito

| Concurso | Cargo Alvo | Banca Examinadora | Status |
| :--- | :--- | :--- | :--- |
| **SES-RJ / IASERJ 2026** | Técnico de Enfermagem & Assistente Administrativo | **Instituto IBDO Projetos** | 🟢 Edital Aberto (287 vagas) |
| **Marinha do Brasil (SMV)** | Praças Temporários RM2 (Nível Médio e Técnico) | **DEnsM (Ensino da Marinha)** | 🟢 Edital Anual Regular |
| **Receita Federal (RFB)** | Analista-Tributário (ATRFB) & Auditor-Fiscal (AFRFB) | **FGV (Fundação Getulio Vargas)** | 🟢 Ciclo Completo Wave 1 & 2 |
| **Carreiras Customizadas** | Tribunais, Carreiras Policiais e Administrativas | **Qualquer Banca (Cebraspe, FCC, etc.)** | 🟢 Totalmente Configurável |

---

## ✨ Principais Funcionalidades

* 📖 **Biblioteca & Caderno Enxuto**: Estude com a apostila original em PDF lado a lado com a síntese de leis secas, súmulas e pegadinhas geradas pelo **Gemini AI**.
* ⏱️ **Simulados Oficiais Cronometrados**: Provas reais com contagem regressiva, cálculo de nota líquida (padrão Cebraspe/FGV/IBDO/DEnsM) e gabarito comentado.
* ⚡ **Simulados de Re-treino dos Erros**: Gere instantaneamente um simulado focado apenas nas questões que você errou anteriormente para garantir 100% de domínio.
* 📕 **Caderno de Erros Inteligente**: Isola automaticamente as questões que você errou com feedback imediato e explicações fundamentadas em lei.
* 🗂️ **Flashcards com 1 Clique no Tutor**: Salve qualquer resposta ou síntese do Tutor IA diretamente como um Flashcard de repetição espaçada.
* 🎯 **Tutor IA com Estilos Pedagógicos**: Personalize o estilo de tutoria entre **Prático & Direto ao Ponto**, **Método Socrático (indução)** e **Foco Cirúrgico em Pegadinhas da Banca**.
* 🌐 **Hub de Concursos com "Dá pra Conciliar?"**: Matriz de sobreposição de matérias entre editais para orientar sua estratégia de estudos multicarreiras.
* 🧠 **Repetição Espaçada Automática**: Curva do esquecimento calculada em D+1, D+7 e D+30 para nunca esquecer o conteúdo estudado.
* 📅 **Cronograma com IA & Exportação .ICS**: Divisão automática de matérias e horas da sua rotina, com sincronização opcional de Google Agenda e download de `.ics` para celulares.
* ⚙️ **Central de Configurações Unificadas (`#settings`)**: Controle de perfil, avatar emoji, temas Claro/Escuro, sons, estilo do tutor e backups em JSON.
* 📱 **PWA Offline**: Instalação como aplicativo nativo no iPhone e Android com suporte a estudo sem internet.

---

## ⚡ Como Iniciar Localmente (Em 2 Minutos)

### Pré-requisitos:
* Node.js v20+ ou v22 LTS instalado.

### 1. Clonar o repositório e instalar dependências:
```bash
cd CONCURSO_BOT
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

Quer disponibilizar o ConcursaBot para seus amigos testarem no celular sem gastar nada com hospedagem?

Consulte nosso guia completo:
👉 [**`GUIA_DEPLOY_GRATUITO.md`**](GUIA_DEPLOY_GRATUITO.md)

* **Opção 1 (Recomendada)**: **Cloudflare Tunnel** (Túnel HTTPS seguro direto do seu computador, sem abrir portas de roteador).
* **Opção 2**: **Render.com Free Tier** (Deploy gratuito na nuvem com Docker).
* **Opção 3**: **Oracle Cloud Always Free** (VPS Linux potente gratuita para sempre).
* **Proteção**: Ative o `INVITE_PIN=2026` no `.env` para proteger o acesso com senha.

---

## 📚 Documentação Técnica Completa

Para detalhes de arquitetura de software, schemas do SQLite, rotas REST e diretrizes pedagógicas, leia:
👉 [**`DOCUMENTACAO_DO_SISTEMA.md`**](DOCUMENTACAO_DO_SISTEMA.md)
