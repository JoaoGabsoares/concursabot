# 🎯 Gabarito.AI — Memória Mestra & Estado Permanente do Projeto (PROJECT_MEMORY.md)

> **Data de Atualização:** Agosto/2026 • Versão 3.5 Ultra  
> **Objetivo deste documento:** Servir como **Fonte Única da Verdade** para o usuário e para qualquer agente de IA em futuras sessões.  
> 💡 **Guia Rápido de Contexto para IAs em Novos Chats**: Veja o arquivo [COMECE_POR_AQUI.md](file:///home/joao/Área%20de%20trabalho/CONCURSO_BOT/COMECE_POR_AQUI.md).

---

## 📌 1. Sumário Executivo do Sistema

O **Gabarito.AI** é uma plataforma web completa de preparação de alta performance para concursos públicos de elite, com suporte nativo a:
1. **Tribunal de Contas da União (TCU)** — Auditor Federal de Controle Externo (AUFC • Geral) • Bancas FGV & Cebraspe
2. **Tribunal de Contas do Estado do Rio de Janeiro (TCE-RJ)** — Técnico de Controle Externo • Bancas Cebraspe & FGV
3. **Secretaria Municipal de Fazenda de Niterói (ISS Niterói/RJ)** — Fiscal de Tributos Municipais • Banca FGV
4. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
5. **Transpetro (Edital nº 03 • Nível Médio)** — Técnico de Administração e Controle Jr & Técnico de Suprimento e Logística Jr • Banca Cesgranrio
6. **Banco do Brasil (BB)** — Agente Comercial & Agente de Tecnologia (TI) • Banca Cesgranrio
7. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
8. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
9. **Carreiras Customizadas** — Configurável pelo criador de perfis.

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

### 🛡️ 2.4. Segurança, Autenticação, Radar Dinâmico & Zero State para Novos Usuários
- Contas privadas isoladas com Scrypt e auto-recuperação de sessão.
- Cada novo usuário registrado inicia com rigorosamente **0 XP, Level 1 Aspirante (0/500), Streak 0 e zero histórico**.
- **Radar de Disciplinas do Edital**: Todas as matérias iniciam com **0 itens resolvidos**, **0% taxa de acerto** e badge **`[ NÃO INICIADO ]`**, sendo alimentadas e calculadas em tempo real à medida que o aluno responde questões e simulados na plataforma.

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

---

## 📱 9. Release v3.7: Responsividade Mobile, Botão de Senha & Deploy Online (TryCloudflare)

- **Botão de Visualizar/Ocultar Senha**: Adicionado toggle com ícones de olho (`Eye` / `EyeOff`) em todos os formulários de autenticação (Login e Cadastro) em `AuthAndUserSelector.tsx`.
- **Redesenho do Header Mobile & Menu Hambúrguer**:
  - Reestruturação do `Header.tsx`: espaçamentos balanceados, streak compacto (`🔥 Xd`), tema e atalho direto de Configurações (`⚙️`).
  - Menu Drawer mobile ampliado com navegação completa pelas **10 seções da plataforma**, seletor de carreira dedicado com lista de bancas e botão de troca de perfil no rodapé.
  - Prevenção contra cortes de entalhe (Safe Area) e ajuste de padding no `<main>` (`pb-28 lg:pb-8`) evitando sobreposição pelo menu do polegar (`MobileBottomNav`).
  - Barra de navegação inferior com `backdrop-blur-md` e suporte a `env(safe-area-inset-bottom)`.
- **Compatibilidade com Deploy TryCloudflare / Multi-Dispositivos**:
  - Header CSP em `server/index.js` atualizado para permitir conexões `connect-src 'self' https: http: wss: ws: blob: data:`.
  - Chat comunitário SSE 100% compatível com broadcast simultâneo entre celulares, tablets e computadores conectados através de túneis públicos do Cloudflare (`npx untun` / `cloudflared tunnel`).
- **Consultoria de Autenticação Google OAuth**:
  - Documentada a gratuidade total do Google OAuth 2.0 (Google Identity Services) e plano de migração para login social.

---

## 🛡️ 10. Release v3.8: Blindagem Zero-Trust & Proteção Total de APIs e Chave Gemini

- **Middleware Global Zero-Trust (`session-auth.js`)**:
  - Intercepta 100% das requisições em `/api/*` e exige token de sessão criptográfico válido (`Authorization: Bearer <token>` ou `x-account-token`) verificado em `auth_sessions`.
  - Rejeição instantânea com `401 Unauthorized` para qualquer chamada anônima ou com token forjado.
- **Whitelist Pública Mínima Estrita**:
  - Apenas endpoints essenciais permanecem abertos: `POST /api/auth/login`, `POST /api/auth/register`, `GET /api/auth/status`, `POST /api/auth/verify-invite`, `POST /api/verify-pin` e `GET /api/health`.
- **Proteção Total da Chave Gemini contra Abuso / Bots**:
  - Endpoints de IA (`/api/tutor`, `/api/study-room/chat`, `/api/redacao/ia-stream`, `/api/rag`, `/api/summaries`, `/api/edital`) agora exigem login ativo e verificação de conta + `aiRateLimiter` associado ao ID do aluno, impossibilitando que terceiros consumam a cota da chave privada.
- **Tratamento de Sessão Expirada no Frontend (`ApiClient.ts`)**:
  - Respostas 401 do servidor limpam automaticamente o token de autenticação local e forçam o fluxo de login/troca de perfil limpo.
- **Encerramento de Túneis Expõem Redes**:
  - Processos expostos do Cloudflare Tunnel finalizados e validação de pentest automatizado no test suite.

---

## 🔒 11. Release v3.9: Blindagem Anti-IDOR (BOLA) & Isolamento Hermético Multi-Tenant

- **Helper Criptográfico de Propriedade (`getAuthenticatedUserId`)**:
  - Implementado em `server/middleware/session-auth.js` e montado em todas as 15 rotas de negócio do backend.
  - Verifica no SQLite se o `userId` enviado no header `x-user-id`, `x-profile-id` ou no body/query pertence estritamente ao `account_id` autenticado na sessão (`SELECT id FROM user_profiles WHERE id = ? AND account_id = ?`).
  - Caso um usuário autenticado envie o ID de outro concurseiro (tentativa de *IDOR / Insecure Direct Object Reference*), o backend neutraliza a requisição e retorna estritamente os dados da **própria conta**, impedindo espionagem de dados.
- **Eliminação Definitiva de Fallback Legado**:
  - Removido 100% dos fallbacks para `'user_joao'` em todas as rotas do backend (`dashboard`, `caderno-erros`, `simulados`, `redacao`, `questions`, `flashcards`, `schedule`, `study-room`, `gamification`, `leiseca`, `aproveitamento`, `community`, `reset`, `tutor`).
- **Bloqueio e Proteção de Rotas Administrativas (`/api/system/logs`)**:
  - Rota de logs do sistema restrita a conexões de loopback local (`127.0.0.1` / `::1`) com rejeição `403 Forbidden` para qualquer acesso remoto via rede ou internet.
- **Proteção Estrita de Perfis de Usuário (`/api/users/:id`)**:
  - Verificação de propriedade de conta em `GET /api/users/:id`, `POST /:id/activate`, `PUT /:id`, `DELETE /:id` e `GET /:id/export-progress`, rejeitando qualquer tentativa de edição ou leitura cruzada com `403 Forbidden`.
- **Suíte de Testes de Pentest Anti-IDOR (`tests/security/pentest_and_ai.test.js`)**:
  - Teste automatizado simulando dois usuários cadastrados (Conta A e Conta B) com tentativa de invasão cruzada de perfil e caderno de erros, validando 100% de isolamento hermético.

---

## 💼 12. Planejamento Estratégico de Monetização & SaaS (Mapeado para Escala)

- **Documento Oficial de Estratégia**: [`plano_monetizacao_estrategica_gabarito_ai.md`](file:///home/joao/.gemini/antigravity-cli/brain/29a39f76-5283-4dac-8ad2-9f74e8cd8814/plano_monetizacao_estrategica_gabarito_ai.md)
- **Decisão de Gateway**: **Kiwify / Hotmart** como plataforma primária para venda e assinaturas recorrentes via Webhook automatizado.
- **Unit Economics**: Custo médio de IA (Gemini Flash) de ~R$ 1,20/aluno/mês vs Preço sugerido de R$ 39,90/mês a R$ 79,90/mês (**Margem Bruta > 92%**).
- **Diretriz de Execução Imediata**: Manter a modelagem de negócios registrada e priorizar **100% o ciclo real de estudos de Analista Tributário da Receita Federal (ATRFB)** e a estabilidade da plataforma para o dia a dia.

---

## 🏛️ 13. Release v5.5: Bento Grid Figma-Grade, Despoluição Semântica & Code-Splitting

- **Bento Grid & Paleta Executive Obsidian**: Layout de 12 colunas, modo escuro refinado (`#0B0F17`), cartões translúcidos e acentos semânticos.
- **Design System 100% Semântico**: 188 cores hardcoded eliminadas; design tokens CSS aplicados em todos os componentes.
- **Code-Splitting**: 52% de redução no bundle inicial através de `React.lazy` e `Suspense`.

---

## 🧠 14. Release v6.0: Acervo RAG Híbrido ATRFB com SQLite FTS5 (3.613 Documentos)

- Ingestão canônica de mais de 204 milhões de caracteres de doutrina e leis da Receita Federal.
- Pesquisa de texto completo (< 5ms) por artigos, súmulas e doutrinas via SQLite FTS5.

---

## 📊 15. Release v7.0: Acervo de 813 Questões & Deduplicação Semântica FGV

- Normalização semântica e hash que detecta e previne duplicatas ao importar questões de PDFs da FGV.
- Acervo ampliado para 813 questões categorizadas (344 FGV oficiais e 394 de Português em 8 eixos temáticos).

---

## ⚔️ 16. Release v7.1: Ciclo de Guerra Março/2027 & Projeções Matemáticas

- Esteira contínua com 24 blocos de 60 min (24h de rotação completa), ponderada pelos pesos oficiais da prova:
  - 62.5% Direito (Tributário, Aduaneiro, Constitucional, Administrativo, Previdenciário)
  - 20.8% Exatas/Dados (TI, Contabilidade, RLM, Estatística)
  - 16.7% Humanas/Linguagens (Português FGV, Inglês, Administração Pública)
- Projeção em tempo real de **204 dias**, **29.1 voltas**, **699 horas líquidas** e **11.184 questões comentadas**.
- Conexão nativa do Dashboard com o próximo bloco do ciclo e avanço com premiação de XP.

---

## 📁 17. Release v7.2.0: Identificação Personalizada de PDFs, Estante Isolada & Unificação de UI

- **Upload Inteligente com Nome Personalizado**: O modal de envio sugere títulos limpos e permite ao aluno editar o nome da apostila/resumo e número da aula.
- **Estante Contextual de PDFs por Disciplina**: Visualização isolada na Sala de Estudos (apenas PDFs da disciplina selecionada são exibidos por padrão, impedindo confusão entre matérias).
- **Leitura Fracionada de Apostilas Longas**: Marca-página inteligente preserva o progresso de leitura em PDFs densos (3-4 dias por aula), com avanço gradual no ciclo e ganho fracionado de XP (+20 XP por sessão e +50 XP na conclusão).
- **Desduplicação de Botão de Tema**: Alternância de modo claro/escuro unificada exclusivamente no Header Superior.
- **100% de Aprovação na Suíte de Testes**: 87 rotas de backend verificadas e validadas em `tests/run_all.js`.
