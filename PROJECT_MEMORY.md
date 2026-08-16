# 🎯 Gabarito.AI — Memória Mestra & Estado Permanente do Projeto (PROJECT_MEMORY.md)

> **Data de Atualização:** Agosto/2026 • Versão 3.0 Ultra  
> **Objetivo deste documento:** Servir como **Fonte Única da Verdade** para o usuário e para qualquer agente de IA em futuras sessões, garantindo que nenhum contexto, decisão arquitetural, funcionalidade ou comando seja perdido mesmo com o truncamento de conversas.

---

## 📌 1. Sumário Executivo do Sistema

O **Gabarito.AI** é uma plataforma web completa de preparação de alta performance para concursos públicos de elite, com suporte nativo a:
1. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
2. **Banco do Brasil (BB)** — Agente Comercial & Agente de Tecnologia (TI) • Banca Cesgranrio
3. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
4. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
5. **Carreiras Customizadas** — Configurável pelo criador de perfis.

---

## 🏛️ 2. Arquitetura & Decisões Tecnológicas Cruciais

### ⚡ 2.1. Frontend Moderno (React 19 + Vite 8 + TypeScript + Tailwind CSS v4)
- **Modularização Completa:** Arquitetura SPA com **Code-Splitting por domínio (`src/features/`)**:
  - `src/features/dashboard/DashboardPage.tsx` (Missão dinâmica por concurso, Streaks, Patentes e Metas).
  - `src/features/study-room/StudyRoomPage.tsx` (Doutrina esquematizada, mnemônicos, fixação e upload de PDF).
  - `src/features/simulados/SimuladosPage.tsx` (Simulados cronometrados e mapas de gabarito).
  - `src/features/error-notebook/ErrorNotebookPage.tsx` (Caderno de Erros com re-teste e bônus de +15 XP).
  - `src/features/flashcards/FlashcardsPage.tsx` (Repetição espaçada com algoritmo SuperMemo-2).
  - `src/features/redacao/RedacaoPage.tsx` (Corretor discursivo com 4 critérios de banca).
  - `src/features/edital/EditalPage.tsx` (Raio-X de incidência 80/20 e notas de corte).
  - `src/features/settings/SettingsPage.tsx` (Abas de Ajustes & BYOK API, Guia de Uso e Sobre o Sistema).
- **Design System (*Institutional Editorial & Surgical Minimalism*):** Dark Mode imersivo em Void Black (`#0D0E12`), Light Mode em Papel Linho (`#FAFAFA`), tipografia de autoridade (**Fraunces**, **Inter**, **JetBrains Mono**) e touch targets rigorosos >= 44px na **Thumb Zone**.

### ⚡ 2.2. Zero-Build SQLite Oficial (`node:sqlite` / `DatabaseSync`)
- **Solução Definitiva:** 100% migrado para o **SQLite embutido no núcleo do Node.js (`import { DatabaseSync } from 'node:sqlite'`)**.
- **Resultado:** **Zero compilação C++**, inicialização instantânea (<50ms), compatibilidade total com Node 22 e 24, e sanitização universal de parâmetros `undefined -> null`.

### 🛡️ 2.3. Blindagem de Segurança 360° (OWASP + AI Guard)
- **Segurança Web & Pentest:** Cabeçalhos HSTS, X-Content-Type-Options, CSP, proteção contra prototype pollution (`security-guard.js`), anti-timing attack (`crypto.timingSafeEqual`) e contenção de uploads (`uploadsDir`).
- **Blindagem de IA contra Prompt Injection:** Sanitização de padrões adversariais (`ignore previous instructions`, `DAN mode`, `system prompt leak`) e cláusula de contenção hermética no motor Gemini.

---

## 🧪 3. Suítes de Testes Automatizados (117 Provas Aprovadas)

O projeto possui **117 testes automatizados** com **100% de taxa de aprovação**:

1. **🛡️ Pentest Security Suite:**
   ```bash
   node test_pentest_suite.js
   # Resultado: 28/28 APROVADOS (100%)
   ```
2. **🤖 AI Security & Prompt Injection Suite:**
   ```bash
   node test_ai_security.js
   # Resultado: 15/15 APROVADOS (100%)
   ```
3. **🧠 Novas Funcionalidades (Raio-X, Caderno de Erros, Redação):**
   ```bash
   node test_new_features.js
   # Resultado: 24/24 APROVADOS (100%)
   ```
4. **⚙️ Suíte Completa de QA & REST APIs E2E:**
   ```bash
   node run_qa_tests.js
   # Resultado: 50/50 APROVADOS (100%)
   ```

---

## 🚀 4. Comandos Essenciais do Projeto

```bash
# Instalar dependências:
npm install

# Compilar frontend React 19:
npm run build

# Iniciar servidor em produção (porta 3000):
npm start

# Iniciar ambiente de desenvolvimento com Vite HMR (porta 5173):
npm run dev

# Executar todas as 117 provas de teste:
node test_pentest_suite.js && node test_ai_security.js && node test_new_features.js && node run_qa_tests.js
```
