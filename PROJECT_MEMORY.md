# 🎯 Gabarito.AI — Memória Mestra & Estado Permanente do Projeto (PROJECT_MEMORY.md)

> **Data de Atualização:** Agosto/2026 • Versão 3.5 Ultra  
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

### ⚡ 2.1. Programação Orientada a Objetos (POO & Domain Services)
- **Camada de Serviços Desacoplada (`server/services/`)**:
  - `UniversalPdfService`: Ingestão universal, sanitização de ruídos/CPFs, fronteira teoria vs exercícios, extração de sumários e métricas de leitura.
  - `StudyCadenceService`: Gestão de cadência de estudos (60m/30m), cálculo de ritmo de leitura e controle de marcação de página.
  - `AuthService`: Criptografia Scrypt nativa com salt, gerenciamento de sessões e perfis de estudo.
  - `GamificationService`: Motor de XP, streaks, patentes (Ranks) e troféus desbloqueáveis por carreira.
  - `QuestionRepository`: Gestão de questões, respostas, estatísticas de acerto e Caderno de Erros.
- **Frontend com ApiClient POO (`src/api/client.ts`)**:
  - Classe `ApiClient` com tipagem estrita TypeScript, auto-injeção de headers de autenticação e tratamento de erros.

### 🎨 2.2. Design System Modular & Tokens Tipados
- **Tokens Centrais (`src/styles/design-tokens.ts`)**:
  - Cores HSL (`#0a0d14` background, `#111726` surface, `#3b82f6` primary, `#10b981` success).
  - Tipografia institucional: **Fraunces/Newsreader** (Display Editorial), **Inter** (Interface/Corpo), **JetBrains Mono** (Dados).
  - Componentes primitivos consistentes e acessíveis em `src/components/UIPrimitives.tsx`.

### ⏱️ 2.3. Cadência de Estudo Flexível (60m/30m) & Reconhecimento de Parada
- Ciclo personalizável de estudo: **60 min de leitura teórica + 30 min de questões**.
- O sistema salva a página exata de interrupção (ex: pág. 18 de 45), calcula o tempo restante de teoria e permite transitar imediatamente para o bloco de questões com 1 toque.

### 🛡️ 2.4. Segurança, Autenticação & Zero XP para Novos Usuários
- Contas privadas isoladas com Scrypt.
- Cada novo usuário registrado inicia com rigorosamente **0 XP, Level 1 Aspirante (0/500), Streak 0 e zero histórico**, sem qualquer vazamento cross-account.

---

## 🧪 3. Suíte Unificada de Testes Automatizados (`npm test`)

A pasta `tests/` reúne toda a bateria de testes automatizados:
```
tests/
├── unit/universal_pdf.test.js        # Heurísticas de PDF, sanitização e métricas
├── integration/auth_and_isolation.test.js # Autenticação, zero-state e multi-conta
├── integration/study_room_cadence.test.js # Sala de estudos, marca-página e ritmo
├── security/pentest_and_ai.test.js   # Pentest, SQLi, XSS e sanitização
└── run_all.js                        # Runner central unificado
```

---

## 🚀 4. Comandos Essenciais do Projeto

```bash
# Instalar dependências:
npm install

# Executar todos os testes automatizados:
npm test

# Compilar frontend React 19 (Vite):
npm run build

# Iniciar servidor em produção (porta 3000):
npm start

# Iniciar ambiente de desenvolvimento com Vite HMR (porta 5173):
npm run dev
```
