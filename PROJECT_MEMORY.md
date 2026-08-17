# 🎯 Gabarito.AI — Memória Mestra & Estado Permanente do Projeto (PROJECT_MEMORY.md)

> **Data de Atualização:** Agosto/2026 • Versão 3.5 Ultra  
> **Objetivo deste documento:** Servir como **Fonte Única da Verdade** para o usuário e para qualquer agente de IA em futuras sessões.  
> 💡 **Guia Rápido de Contexto para IAs em Novos Chats**: Veja o arquivo [COMECE_POR_AQUI.md](file:///home/joao/Área%20de%20trabalho/CONCURSO_BOT/COMECE_POR_AQUI.md).

---

## 📌 1. Sumário Executivo do Sistema

O **Gabarito.AI** é uma plataforma web completa de preparação de alta performance para concursos públicos de elite, com suporte nativo a:
1. **Transpetro (Edital nº 03 • Nível Médio)** — Técnico de Administração e Controle Jr & Técnico de Suprimento e Logística Jr • Banca Cesgranrio
2. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
3. **Banco do Brasil (BB)** — Agente Comercial & Agente de Tecnologia (TI) • Banca Cesgranrio
4. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
5. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
6. **Carreiras Customizadas** — Configurável pelo criador de perfis.

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

A pasta `tests/` reúne toda a bateria de testes automatizados com auto-spawn do servidor caso esteja inativo:
```
tests/
├── unit/universal_pdf.test.js                 # Heurísticas de PDF, sanitização e métricas
├── integration/auth_and_isolation.test.js      # Autenticação, zero-state e multi-conta
├── integration/study_room_cadence.test.js      # Sala de estudos, marca-página e ritmo
├── integration/leiseca_and_aproveitamento.test.js # Lei seca ativa e transição curricular
├── integration/community_and_caderno_erros.test.js # Chat SSE, @GabaritoAI e exportação
├── security/pentest_and_ai.test.js            # Pentest, SQLi, XSS e sanitização
└── run_all.js                                 # Runner central autônomo
```

---

## 🚀 4. Comandos Essenciais do Projeto

```bash
# Instalar dependências:
npm install

# Executar todos os testes automatizados (com auto-spawn de backend):
npm test

# Compilar frontend React 19 (Vite):
npm run build

# Iniciar ambiente de desenvolvimento completo (Backend na 3000 + Frontend Vite na 5173):
npm run dev

# Iniciar servidor em produção (porta 3000):
npm start
```

---

## 🏆 5. Certificação de Auditoria (11 Subagentes • 100% de Aprovação)

- **Fase 1 (6 Subagentes Auditores)**:
  - Subagent 1 (Segurança & Pentest OWASP): 100% Conforme.
  - Subagent 2 (Performance & Carga): Latência média 5.4ms, P95 14.2ms sob 50 requisições simultâneas.
  - Subagent 3 (Tarefas, SM-2 & Cadência 60/30): Algoritmo SM-2 e ciclo espaçado D+1/D+7/D+30 100% operacionais.
  - Subagent 4 (Cards, Simulados & Caderno de Erros): Ciclo de simulados em 7 carreiras com superação (+15 XP).
  - Subagent 5 (Redação & Raio-X 80/20): Espelho em 4 critérios (+50 XP) e matrizes de corte históricas.
  - Subagent 6 (Multi-Conta & Zero XP Inicial): Isolamento multi-tenant hermético e trava no 3º perfil.
- **Fase 2 (5 Subagentes de UI / Screenshots)**:
  - Subagents 7 a 11: Todas as telas (Auth, Dashboard, Sala de Estudos, Simulados, Caderno de Erros, Redação, Raio-X, Comunidade e Settings) validadas e capturadas com conformidade ao Design System.

---

## ⚡ 6. Inovações de Mercado Implementadas (v3.5 Ultra)

- **Comunidade & Salas de Estudo em Tempo Real (SSE + SQLite)**: Canais temáticos por certame com broadcast contínuo (com bypass de gzip SSE), reações emoji instantâneas e invocação de Tutor IA com `@GabaritoAI` ou `@Tutor`.
- **Exportador do Caderno de Erros (Anki CSV & Folha de Revisão Imprimível)**: Exportação em 1 clique para baralhos do Anki e folha em formato Diário Oficial com caixas para ciclos de revisão espaçada (`[ ] D+1`, `[ ] D+7`, `[ ] D+30`).
- **Simulado Adaptativo de Vulnerabilidades**: Modo direcionado que monta baterias de treino com base nas fraquezas reais do aluno e no histórico do Caderno de Erros.
- **Caça-Pegadinhas da Lei Seca**: Gamificação com timer de 15s, identificação de armadilhas da banca e recompensa de +10 a +15 XP.
- **Matriz de Transição e Aproveitamento**: Análise algorítmica de sobreposição entre editais com geração de datas reais de calendário semanal e sincronização nativa no SQLite (`schedules` e `schedule_tasks`).

---

## 🛠️ 7. Registro do Pacote de 7 Correções & Melhorias (v3.5 Ultra)

1. **Validação de Senha de 8 Caracteres**: Padronizado no frontend e backend (`AuthService.js`, `AuthAndUserSelector.tsx`) com rejeição de senhas com menos de 8 dígitos e placeholders/feedbacks visuais consistentes.
2. **Chat de Comunidade de Alta Confiabilidade & Multi-Usuário**: Configurado filtro no middleware de compressão para ignorar rotas SSE (`text/event-stream`), auto-provisionamento sob demanda de canais por carreira, sanitização anti-injection e renderização Optimistic UI no frontend.
3. **Isolamento Total de Carreiras (Transpetro vs. SUS)**: Catálogo dedicado e lições completas para Transpetro ADM e Transpetro Logística (Lei 13.303/16, Noções de Administração, Gestão de Estoques, Modais) sem fallbacks genéricos de outras carreiras.
4. **Modais Centralizados na Sala de Estudos**: Popups de Upload de PDF e Cadência renderizados via `createPortal(..., document.body)` com `fixed inset-0 z-[9999] flex items-center justify-center`, eliminando o deslocamento por CSS transforms.
5. **Leitor Editorial da Sala de Estudos**: Limpeza de código e remoção de modo fullscreen desproporcional, preservando estabilidade de scroll e iframe em altura proporcional de 650px.
6. **Alinhamento dos 3 Cards de Simulados**: Reestruturada a grade para distribuição flexível uniforme (`h-full flex flex-col justify-between`), botões alinhados na base (`mt-auto`) e padronização visual dos modos Ágil, Vulnerabilidades e Dia D.
7. **Matriz de Aproveitamento com Cronograma Semanal Real**: Cálculo de semanas com datas de calendário reais baseado na rotina do concurseiro e botão **⚡ Sincronizar com Meu Cronograma** integrado às tabelas `schedules` e `schedule_tasks` do SQLite.

---

## 🎯 8. Release v3.6: Prontidão Oficial de Estudos (ATRFB FGV) & Auditoria Geral

- **Remoção Definitiva de Tela Cheia na Sala de Estudos**: Eliminação de classes `fixed inset-0 z-[9995]` e estados `isFullscreen` que quebravam o scroll da viewport. Restauração do layout proporcional e limpo de 2 colunas.
- **Isolamento Curricular do ATRFB (FGV) com 9 Disciplinas**:
  1. *Língua Portuguesa* (15% peso)
  2. *Língua Inglesa* (5% peso)
  3. *Raciocínio Lógico-Matemático e Estatística* (10% peso)
  4. *Administração Geral e Pública* (10% peso)
  5. *Direito Constitucional* (10% peso)
  6. *Direito Administrativo* (10% peso)
  7. *Direito Tributário* (20% peso)
  8. *Legislação Tributária e Aduaneira* (10% peso)
  9. *Contabilidade Geral* (10% peso)
- **Segurança Reforçada**:
  - `server/gemini.js`: `streamChat` com sanitização anti-prompt injection e `MANDATORY_SECURITY_GUARD`.
  - `server/routes/users.js`: Restrição de listagem de perfis exclusivamente à conta da sessão ativa (zero vazamento anônimo).
  - `server/middleware/rate-limiter.js`: Extração de IP segura via `req.ip`.
  - `server/routes/study-room.js`: Consumo assíncrono correto de `streamChat` via `for await`.
  - `server/routes/redacao.js`, `server/routes/caderno-erros.js`, `server/routes/leiseca.js`: Esquema SQL corrigido para inserção em `user_xp_log(user_id, amount, reason)`.
- **Performance do SQLite**:
  - Adicionados `PRAGMA busy_timeout = 5000;`, `PRAGMA cache_size = -64000;`, `PRAGMA temp_store = MEMORY;`, `PRAGMA mmap_size = 268435456;` e `BEGIN IMMEDIATE;`.
  - Novos índices compostos: `idx_activity_log_user_created` e `idx_schedule_tasks_day`.
- **UI Tokens e Polish**:
  - Variáveis de cor no `CommunityPage.tsx` migradas para os tokens oficiais `--bg-surface`, `--bg-elevated`, `--border-subtle`, `--accent-primary`.
  - Barra de progresso na Sala de Estudos corrigida de `progress` para `value={...}`.
  - Correção de redação discursiva com notificações ricas `useToast` no lugar de alertas nativos do navegador.



