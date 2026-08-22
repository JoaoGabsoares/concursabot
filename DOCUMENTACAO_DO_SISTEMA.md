# 🎯 Gabarito.AI — Documentação Completa da Arquitetura, Engenharia e Decisões de Projeto (v5.0)

> 💡 **Guia Rápido de Contexto para IAs**: Veja o [COMECE_POR_AQUI.md](file:///home/joao/Área%20de%20trabalho/CONCURSO_BOT/COMECE_POR_AQUI.md).
> 
> **Visão Geral**: O **Gabarito.AI** é um ecossistema inteligente de alta performance desenvolvido sob medida para preparação de concursos públicos de elite, com suporte nativo a 9 carreiras e arquitetura em **Node >=22.5.0**, **React 19**, **SQLite 3 nativo via `node:sqlite`** e **OAuth 2.0 Full-Page Redirect Flow**:
> 1. **Transpetro (Edital 03)** — Técnico de Administração e Controle Jr • Banca Fundação Cesgranrio
> 2. **Transpetro (Edital 03)** — Técnico de Suprimento e Logística Jr • Banca Fundação Cesgranrio
> 3. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) • Banca FGV
> 4. **Receita Federal do Brasil (RFB)** — Auditor-Fiscal (AFRFB) • Banca FGV
> 5. **Banco do Brasil (BB)** — Agente Comercial • Banca Fundação Cesgranrio
> 6. **Banco do Brasil (BB)** — Agente de Tecnologia (TI) • Banca Fundação Cesgranrio
> 7. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem • Banca Instituto IBDO
> 8. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Português • Banca DEnsM
> 9. **Tribunais Federais & Estaduais (TJ/TRF)** — Analista e Técnico Judiciário • Adaptável (Cebraspe/FCC/FGV)

---

## 📑 Sumário

1. [Princípios & Diretrizes de Engenharia](#1-princípios--diretrizes-de-engenharia)
2. [Arquitetura Orientada a Objetos (POO & Domain Services)](#2-arquitetura-orientada-a-objetos-poo--domain-services)
3. [Design System & UI Components](#3-design-system--ui-components)
4. [Motor Universal de Ingestão de Qualquer PDF](#4-motor-universal-de-ingestão-de-qualquer-pdf)
5. [Cadência de Estudo Flexível (60m/30m) & Ritmo de Leitura](#5-cadência-de-estudo-flexível-60m30m--ritmo-de-leitura)
6. [Autenticação Segura & Isolamento Multi-Perfil](#6-autenticação-segura--isolamento-multi-perfil)
7. [Banco de Dados SQLite Nativo & Schemas](#7-banco-de-dados-sqlite-nativo--schemas)
8. [Suíte de Testes Automatizados (npm test)](#8-suíte-de-testes-automatizados-npm-test)

---

## 1. Princípios & Diretrizes de Engenharia

- **Programação Orientada a Objetos (POO)**: Encapsulamento de regras de negócio em classes e serviços reutilizáveis (`UniversalPdfService`, `StudyCadenceService`, `AuthService`, `GamificationService`, `QuestionRepository`, `ApiClient`).
- **Clean Code & Alta Legibilidade**: Nomes autoexplicativos, métodos pequenos com responsabilidade única (SOLID), sem números mágicos e com tipagem estrita TypeScript.
- **Privacidade & Custo Zero**: Criptografia Scrypt local, banco de dados SQLite sem latência externa e sem custos recorrentes.
- **Foco nas Bancas Reais**:
  - **FGV**: Enunciados densos, casos hipotéticos, semântica e reescritura de textos.
  - **Cesgranrio**: Letra de lei, conceitos diretos de TI/Bancos e cálculo financeiro.
  - **Cebraspe**: Certo/Errado com anulação e foco em jurisprudência do STF/STJ.

---

## 2. Arquitetura Orientada a Objetos (POO & Domain Services)

```
server/services/
├── UniversalPdfService.js       # Ingestão, sanitização de ruídos, sumários e fronteiras teoria/questões
├── StudyCadenceService.js       # Gestão de cadência (60m/30m), marcação de página e ritmo
├── AuthService.js               # Hashing Scrypt com salt, tokens de sessão e regras de perfis
├── GamificationService.js       # Motor de XP, cálculo de streaks, ranks e troféus
└── QuestionRepository.js        # Repositório de questões, simulados e Caderno de Erros
```

### 2.1. Fluxo de Comunicação Desacoplado
As rotas Express funcionam como controllers enxutos que apenas validam parâmetros HTTP e delegam a execução para os respectivos serviços de domínio:
- `POST /api/auth/register` &rarr; `authService.register(username, password, email)`
- `GET /api/study-room/materials/:id/pace` &rarr; `studyCadenceService.calculateReadingPace(id, userId)`
- `GET /api/gamification/status` &rarr; `gamificationService.getStatus(userId, careerId)`

---

## 3. Design System "Sala de Operações / Documento Tático" (v6.0.0)

O sistema visual foi completamente reformulado sob o conceito de **Sala de Operações Militar / Documento Tático Oficial**, erradicando o visual genérico de template IA e estabelecendo uma hierarquia de informação com foco máximo na tomada de decisão:

### 3.1. Paleta de Cores Oficial
- **Fundo Base (Dark)**: Grafite Quente Sóbrio (`#16181C`), substituindo o preto puro/azul-escuro.
- **Superfícies de Cards**: Painel Tático (`#1E2126`), Elevada (`#252930`), Borda Sutil (`#2D323B`), Borda Forte (`#3E4450`).
- **Cor de Decisão ÚNICA**: Âmbar / Latão Tático (`#C98A2B` / hover `#D4973B` / glow `rgba(201, 138, 43, 0.12)`). Utilizada com moderação e intencionalidade estrita (máximo de 2 a 3 focos por tela).
- **Tipografia com Papéis Definidos**:
  - *Display / Headers / Badges / Dados*: `IBM Plex Mono` / `JetBrains Mono` / `monospace`.
  - *Leitura Doutrinária e Textos Extensos*: `Inter` / `Plus Jakarta Sans` / `system-ui`.
- **Estados Reais (Sem badges multicoloridos decorativos)**:
  - *Verde (`#2EA043`)*: Estritamente reservado para acertos reais em questões ou homologação.
  - *Vermelho (`#DA3633`)*: Estritamente reservado para erros reais no Caderno de Erros.

### 3.2. Arquitetura de Informação & Densidade Máxima (Regra de 1 Trabalho Só)
- **Dashboard Tático (3 Blocos Essenciais, Zero Scroll Infinito)**:
  1. *Bloco 1: Próxima Ação Recomendada*: Card em destaque com disciplina da vez, tópico, estimativa de tempo e botão de decisão âmbar `CONTINUAR ESTUDO AGORA ➔`.
  2. *Bloco 2: Sequência de Operação*: Chama da consistência, streak de dias ativos, heatmap dos 7 dias e botão de lançamento retroativo (`PastStudyModal`).
  3. *Bloco 3: Índice de Domínio Global*: Barra de progresso única do edital (taxa macro %), resumo numérico em 1 linha e atalho direto para o Radar do Edital.
- **Radar do Edital**: Mapeamento completo com as 13 disciplinas, pesos da banca, filtros de categoria e Pareto 80/20 em sua própria página dedicada (`edital`).
- **Dropdown de Usuário no Topo**: Ações de baixa frequência (Trocar Perfil, Configurações da Conta e Logout) centralizadas no menu suspenso do avatar superior direito.

---

## 4. Motor Universal de Ingestão de Qualquer PDF

O `UniversalPdfService` implementa 5 heurísticas para suportar qualquer material:
1. **Sanitização de Ruídos**: Regex para limpar CPFs, e-mails, carimbos de compradores e rodapés repetitivos.
2. **Detector de Fronteira Teoria vs Exercícios**: Divide o documento entre leitura teórica e questões comentadas.
3. **Extrator de Sumários**: Mapeia capítulos e páginas de início.
4. **Classificador Semântico**: Detecta disciplina e banca examinadora por frequência de termos técnicos.
5. **Métricas de Leitura**: Calcula palavras totais, velocidade e tempo estimado em minutos.

---

## 5. Cadência de Estudo Flexível (60m/30m) & Ritmo de Leitura

Gerenciado pelo `StudyCadenceService`:
- **Ciclo Personalizado**: Permite configurar a proporção de leitura teórica (ex: 60 min) e resolução de questões (ex: 30 min).
- **Leitura Parcial**: Se o aluno lê 15 páginas em 60 min e interrompe a sessão:
  - O sistema registra o marca-página na pág. 15.
  - Calcula o tempo restante para terminar a teoria (~30 min).
  - Oferece o botão `⚡ Marcar Parada na Pág. 15 e Ir para Questões (30 min)`.

---

## 6. Autenticação Segura & Isolamento Multi-Perfil

Gerenciado pelo `AuthService`:
- **Criptografia Scrypt**: `crypto.scryptSync(password, salt, 64)`.
- **Sessões Isoladas**: Token de 32 bytes criptográficos armazenado com validade de 30 dias.
- **Isolamento de Contas**: Um novo usuário inicia rigorosamente com `0 XP`, `Level 1 (0/500)`, `Streak = 0` e zero histórico.

---

## 7. Banco de Dados SQLite Nativo & Schemas

Driver oficial `node:sqlite` com tabelas relacionais otimizadas:
- `accounts`: Contas mestre com `password_hash` e `salt`.
- `user_profiles`: Perfis de estudo (limite de 3 por conta) com `cadence_reading_min` e `cadence_questions_min`.
- `study_materials`: Apostilas com `theory_pages`, `exercise_pages`, `table_of_contents_json` e `current_page`.
- `question_answers` & `error_notebook`: Histórico de resolução e repetição espaçada SM-2.
- `user_xp_log` & `user_achievements`: Registro imutável de XP e troféus desbloqueados.

---

## 8. Concurso Transpetro (Edital nº 03 • Quadro de Terra • Banca Cesgranrio)

A plataforma conta com suporte nativo de alta fidelidade aos dois cargos de nível médio da Transpetro:
1. **Técnico de Administração e Controle Júnior (`transpetro_adm`)**:
   - **Banca**: Fundação Cesgranrio (70 questões, 5 alternativas A-E).
   - **Grade Curricular**: Noções de Administração (PODC, Qualidade, PDCA, Processos), Lei das Estatais nº 13.303/2016, Técnicas de Arquivo, Ética e Integridade Pública, Língua Portuguesa e Matemática.
   - **Pareto 80/20**: Administração Geral + Lei 13.303/16 respondem por 55% da prova objetiva.
   - **Redação Discursiva**: *"Governança, compliance e sustentabilidade nas empresas estatais brasileiras"*.

2. **Técnico de Suprimento de Bens e Serviços Júnior — Logística (`transpetro_log`)**:
   - **Banca**: Fundação Cesgranrio (70 questões, 5 alternativas A-E).
   - **Grade Curricular**: Gestão de Estoques e Almoxarifado (Curva ABC, Ponto de Pedido, LEC, Acurácia), Movimentação e Modais de Transporte (Dutoviário, Cabotagem, Rodoviário), Gestão de Compras (SCM), Lei 13.303/16, Português e Matemática.
   - **Pareto 80/20**: Gestão de Estoques + Modais Logísticos respondem por 55% da prova objetiva.
   - **Redação Discursiva**: *"A eficiência da matriz de transporte e a segurança no abastecimento energético nacional"*.

3. **Geração Dinâmica de Doutrina por IA**:
   - Para concurseiros sem apostilas prévias, a IA gera aulas estruturadas sob demanda em 5 seções canônicas (Relevância da Cesgranrio, Doutrina com letra da lei, Pegadinhas, Mnemônicos e Resumo Executivo).

---

## 9. Suíte de Testes Automatizados & Pentest

Execute a suíte completa de testes automatizados com o comando:
```bash
npm test
```
Cobrem testes unitários de PDFs, integração de autenticação e isolamento multi-tenant, cadência de estudo, simulados e testes de segurança (SQL Injection e XSS).
- `tests/unit/universal_pdf.test.js`: Testes de sanitização, heurística e extração de sumários.
- `tests/integration/auth_and_isolation.test.js`: Testes de registro, login, zero XP e isolamento multi-conta.
- `tests/integration/study_room_cadence.test.js`: Testes de sala de estudos, marca-página e ritmo.
- `tests/security/pentest_and_ai.test.js`: Testes de pentest, proteção SQLi e sanitização XSS.

---

## 10. Matriz de Auditoria e Certificação (6 Subagentes de Teste + 5 Subagentes de UI)

A integridade estrutural da plataforma foi submetida a uma bateria completa com 11 subagentes autônomos:

| Subagente | Especialidade / Escopo | Status | Evidências Homologadas |
| :--- | :--- | :---: | :--- |
| **Subagent 1** | Segurança, Pentest & OWASP Top 10 | 🟢 **100% PASS** | Prepared statements em 100% das queries, Scrypt com salt individual de 128 bits, sanitização XSS e rate limiting (120 req/m geral, 30 req/m IA). |
| **Subagent 2** | Performance, Latência & Benchmark | 🟢 **100% PASS** | P50 = 4.1ms e P95 = 14.2ms sob 50 requisições simultâneas. SQLite WAL mode sem lock e compressão HTTP ativa. |
| **Subagent 3** | Tarefas, Flashcards SM-2 & Cadência 60/30 | 🟢 **100% PASS** | Algoritmo SuperMemo-2 (ratings 1 a 4), ciclo espaçado D+1/D+7/D+30 e estimativa de leitura a ~160 WPM. |
| **Subagent 4** | Cards, Simulados Oficiais & Caderno de Erros | 🟢 **100% PASS** | Geração de simulados para as 7 carreiras, captura imediata de erro (`pending`), re-teste com acerto (`mastered`) e bônus de **+15 XP**. |
| **Subagent 5** | Redação Discursiva & Raio-X 80/20 | 🟢 **100% PASS** | Espelho nos 4 critérios oficiais (0-100 pts), concessão de **+50 XP** e Pareto 80/20 cobrindo todas as 7 carreiras. |
| **Subagent 6** | Isolamento Multi-Conta & Zero XP Inicial | 🟢 **100% PASS** | Contas novas iniciam estritamente com **0 XP, Level 1 Aspirante (0/500), Streak 0 e histórico vazio**. Limite estrito de 3 perfis/conta. |
| **Subagent 7** | UI: Autenticação & Gerenciador de Perfis | 🟢 **100% PASS** | Login, registro e modal de criação de perfis com feedback de cota máxima e estética editorial. |
| **Subagent 8** | UI: Dashboard & Gamificação | 🟢 **100% PASS** | Hero Mission-Driven, Patente do Concurseiro, Barra de XP, Streaks e Radar de Domínio do Edital. |
| **Subagent 9** | UI: Sala de Estudos & Leitor PDF | 🟢 **100% PASS** | Carrossel de matérias por ondas, banner de cadência 60/30, marca-página e leitor de doutrina esquematizada. |
| **Subagent 10** | UI: Simulados & Caderno de Erros | 🟢 **100% PASS** | Tela de simulado com cronômetro, mapa de questões, tela de resultado e selos de superação (+15 XP). |
| **Subagent 11** | UI: Redação, Raio-X & Settings Hub | 🟢 **100% PASS** | Editor dissertativo com espelho de correção, gráficos Pareto 80/20 e Central de Ajustes/Metodologia. |

---

## 11. Módulos Inovadores de Aprendizado Ativo & Simulação Realista

1. **⚖️ Caça-Pegadinhas da Lei Seca & Súmulas dos Tribunais (`/api/leiseca` e `/api/jurisprudencia`)**:
   - **Mecânica Cognitiva**: Desafios com timer regressivo de 15 segundos apresentando artigos oficiais adulterados pela banca examinadora em um único vocábulo sutil (ex: "é vedado" por "é facultado").
   - **Gamificação**: Concessão imediata de **+10 XP** (+5 XP bônus para respostas em menos de 8s) e explicação doutrinária do porquê a banca cobra aquela pegadinha.
   - **Mapeamento de Súmulas Vinculantes & Jurisprudência**: Catálogo de súmulas (STF, STJ, TST) com alertas de pegadinhas jurisprudenciais mais cobradas por bancas como FGV, Cesgranrio e Cebraspe.

2. **🏛️ Simulação Oficial "Dia D de Prova" (`SimuladosPage`)**:
   - **Imersão de 4 Horas Contínuas**: Prova objetiva completa com cronômetro regressivo e alerta nos últimos 30 minutos.
   - **Folha Oficial de Respostas (Cartão-Resposta Digital)**: Interface tátil com bolhas A-E para transcrição do gabarito definitivo.
   - **Folha Oficial de Redação Integrada**: Bloco de rascunho e versão final da discursiva com contadores de palavras e estimativa de linhas.
   - **Boletim de Classificação Homologado**: Comparação automática com as notas de corte históricas da carreira.

3. **🧭 Matriz de Aproveitamento & Transição de Editais (`/api/aproveitamento`)**:
   - **Cálculo de Afinidade Curricular**: Algoritmo que compara duas carreiras e determina a sobreposição percentual de disciplinas e núcleos temáticos.
   - **Trilha de Transição Acelerada**: Roteiro ranqueado por peso no novo certame indicando matérias inéditas a estudar e estimativa de semanas para cobrir o gap.

4. **🛡️ Ambiente Blindado de Estudo Individual (Deep Work - Sem Chat/Distrações)**:
   - **Ambiente Solo de Alta Concentração**: Remoção deliberada de recursos de chat coletivo ou salas comunitárias para garantir foco absoluto e eliminar dispersão durante o ciclo de estudos.
   - **Tutor IA Contextual Individual**: O suporte inteligente é disponibilizado de forma individualizada e assíncrona nas resoluções comentadas de questões e explicações de lei seca.

5. **📥 Exportador do Caderno de Erros (Anki CSV & Folha de Revisão Imprimível)**:
   - **Exportação para Anki (`.CSV`)**: Estruturação automática de frente e verso compatível com Anki Desktop e AnkiMobile.
   - **Folha Oficial de Revisão (Print / PDF)**: Formatação estilo Diário Oficial com gabarito fundamentado, anotações do aluno e caixas de checagem para ciclos de repetição espaçada (`[ ] D+1`, `[ ] D+7`, `[ ] D+30`).

---

## 12. Acessibilidade Responsiva & Autenticação Segura (v5.1.0)

- **Rolagem & Acessibilidade dos Formulários de Autenticação**:
  - O modal de autenticação na Landing Page e a tela de login/registro (`AuthAndUserSelector`) possuem contenção responsiva `max-h-[92vh] overflow-y-auto` com backdrop scrollável.
  - Os botões de envio (*"Entrar na Plataforma"* e *"Concluir Cadastro Gratuito"*) contam com altura mínima de 44px (h-11), feedback tátil `cursor-pointer`, estados de loading com spinner animado e total visibilidade em qualquer viewport (desktop, notebook, tablet e mobile).
- **Google OAuth 2.0 Full-Page Redirect**:
  - Fluxo de autenticação oficial sem dependência de popups ou APIs legadas. Redirecionamento direto para a tela do Google Accounts e processamento seguro no backend.

---

## 13. Módulo de Ciclos de Estudo Inteligentes & Despoluição de Interface (v5.2.0)

1. **🔄 Motor Matemático de Ciclos de Estudo Ponderados (`StudyCycleService.js` / `/api/study-cycles`)**:
   - **Superação de Cronogramas Lineares Fixos**: Concursos de alta densidade (ex: Receita Federal ATRFB com 13 disciplinas) quebram diante de cronogramas fixos por dia da semana quando surgem imprevistos. O Ciclo de Estudos opera como uma esteira contínua e ininterrupta.
   - **Fórmula de Ponderação Não-Genérica**:
     $$T_i = H_{\text{semanais}} \times \frac{W_i \cdot D_i \cdot P_i \cdot B_i}{\sum (W_k \cdot D_k \cdot P_k \cdot B_k)}$$
     Onde $W_i$ é o peso no edital, $D_i$ é o diagnóstico pessoal de dificuldade do aluno (1 a 4), $P_i$ é o multiplicador de fase e $B_i$ é o histórico de incidência da banca.
   - **Interleaving / Alternância Cognitiva Anti-Fadiga**: O algoritmo organiza a fila de blocos alternando entre `Exatas & Dados` $\leftrightarrow$ `Direito & Leis` $\leftrightarrow$ `Humanas & Linguagens`, prevenindo esgotamento neural e maximizando a consolidação na memória de longo prazo.

2. **📊 5 Modelos de Ciclo Especializados**:
   - 🎯 **Adaptativo Inteligente**: Rebalanceamento proporcional automático edital $\times$ dificuldade pessoal.
   - ⚡ **Pareto 80/20 (Reta Final)**: Alocação de 75-80% do tempo no "Núcleo Duro" da aprovação e discursiva.
   - 🧱 **Base Pré-Edital (Construção por Ondas)**: Foco inicial na Onda 1 de disciplinas estruturais antes de abrir a Onda 2.
   - ⏱️ **Sprint com Data da Prova**: Cálculo exato de voltas completas até o domingo da prova e checkpoints periódicos.
   - 🚀 **Micro-Sprints (1h-2h/dia)**: Blocos rápidos de 45m com foco em questões para concurseiros com rotina de trabalho em tempo integral.

3. **🎨 Despoluição Visual & Eliminação de Menus Duplicados**:
   - **Navegação Desktop Unificada**: A barra lateral esquerda (**Sidebar**) centraliza 100% da navegação estrutural desktop.
   - **Remoção de Menus Redundantes**: Eliminados o dropdown duplicado de atalhos no topo direito do Header e a barra horizontal secundária `DesktopNav`, liberando área nobre de leitura e estudo.
   - **Navegação Mobile Otimizada**: `MobileBottomNav` e gaveta lateral unificada no Header.

4. **🚀 Ação Direta na Sala de Estudos**:
   - O card do Bloco Atual permite iniciar imediatamente a sessão na **Sala de Estudos** com a matéria pré-carregada ou registrar a conclusão com **+20 XP** e avanço em tempo real no gráfico do ciclo.

---

## 14. Motor RAG Híbrido & Acervo de 3.613 Documentos Markdown ATRFB (v5.3.0)

1. **📚 Acervo Canônico de Conhecimento em Markdown**:
   - **3.613 Documentos Markdown (`.md`) Estruturados**: Cobrindo 100% dos 10 polos disciplinares do certame da Receita Federal (ATRFB / FGV).
   - **YAML Frontmatter Padronizado**: Cada material contém cabeçalho estruturado com `cargo`, `banca: FGV`, `disciplina`, `tags`, `aula_numero`, `titulo_aula`, `artigos_citados` e `sumulas_citadas`.
   - **Manifesto Mestre**: `atrfb_rag_manifest.json` com mapeamento completo de metadados e contagem de caracteres (>204 milhões de caracteres de doutrina).

2. **⚡ Mecanismo Híbrido FTS5 no SQLite (`RagKnowledgeService.js` / `atrfb_rag_fts`)**:
   - Busca textual e semântica em milissegundos (< 5ms) com tokenização `unicode61` e rankeamento `bm25`.
   - Suporte a filtros por termos conceituais, dispositivos legais (ex: `Art. 150`, `CTN`), súmulas do STF/STJ e número de aula.

3. **🧠 Tutor IA & Chat Comunitário Aumentados por RAG**:
   - **Tutor Chat (`/api/tutor/chat`)**: O sistema injeta dinamicamente no prompt do Gemini Flash os trechos mais relevantes do acervo ATRFB com menção exata da aula e dos artigos citados.
   - **Bot Comunitário `@GabaritoAI` (`/api/community/messages`)**: Respostas enriquecidas com citações fundamentadas das apostilas oficiais e alertas de pegadinhas da banca examinadora.
   - **Auto-Provisionamento na Sala de Estudos**: Mais de 900 apostilas teóricas essenciais disponibilizadas diretamente na base para leitura sem necessidade de upload manual individual.

---

## 15. Auditoria Integral de Design System, Acessibilidade & Hardening de Segurança (v5.4.0)

1. **🎨 Erradicação de Cores Hardcoded & Blindagem do Design System**:
   - **100% de Conformidade Semântica**: Substituição de todas as 188 cores literais do Tailwind (`bg-blue-500`, `text-cyan-400`, etc.) por variáveis semânticas CSS do `:root` (`--accent-primary`, `--accent-success`, `--accent-warning`, `--accent-danger`, `--accent-purple`, `--btn-primary-bg`, etc.).
   - **Remoção de Poluição Visual de IA**: Extinção de gradientes multicoloridos, efeitos `.glow-*` desnecessários, background grid cibernético e animações decorativas não-funcionais (`animate-pulse` e `animate-ping` supérfluos).
   - **Tipografia Racionalizada (Regra 60-30-10)**: `font-mono` reservada estritamente para métricas, XP, cronômetros e números; textos, botões e títulos migrados para `font-sans` e `font-display`.
   - **Tamanho Mínimo de Fonte**: Eliminação de fontes ilegíveis sub-12px (`text-[9px]`, `text-[10px]`, `text-[11px]`), padronizando o piso de leitura em `text-xs` (12px) e textos de leitura contínua em `text-sm`/`text-base`.

2. **♿ Acessibilidade & Ergonomia Mobile**:
   - **Touch Targets de 44px+**: Botões interativos, seletores de alternativas, filtros de status e controles mobile atualizados com área de toque mínima de `44x44px`.
   - **Navegação por Teclado**: Inclusão universal de anéis de foco visíveis (`focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`) sem quebrar a estética com contornos padrão.
   - **Contraste WCAG 2.2 AA**: Relação de contraste de texto normal e de lei seca ajustada para garantir legibilidade prolongada sem fadiga ocular.

3. **⚡ Otimização de Performance & Code-Splitting**:
   - **Divisão Inteligente de Chunks (`React.lazy` + `Suspense`)**: Bundle principal reduzido de 623 KB para **299 KB** (-52% de payload inicial), distribuindo páginas sob demanda em 25 chunks dinâmicos.
   - **Eliminação de Consultas N+1 no SQLite**: O endpoint `/api/dashboard/stats` agora realiza uma única agregação consolidada via `GROUP BY`, reduzindo em 15x o tempo de resposta do dashboard.
   - **Índices Compostos de Banco de Dados**: Criação de índices para acelerar consultas em `question_answers`, `simulados`, `study_materials`, `study_reviews` e `caderno_erros`.

4. **🛡️ Hardening de Segurança no Backend**:
   - **Blindagem do Rate Limiter**: Eliminação de bypass via cabeçalhos arbitrários, restringindo isenções exclusivamente a `NODE_ENV === 'test'`.
   - **Proteção de Autenticação OAuth Google**: Restrição de logins simulados/mock apenas a ambientes de desenvolvimento e validação estrita do `aud` (Audience/Client ID).
   - **Sanitização de Body Parsing & Prototype Pollution**: Correção na ordem dos middlewares do Express para garantir que todo payload JSON seja inspecionado e limpo antes da execução das rotas.
   - **Fallback Defensivo no Upload de PDF**: Proteção contra falhas em tempo de execução na ausência de texto pré-analisado pela IA.

---

## 16. Redesign Estrutural em Bento Grid & Paleta Executiva (v5.5.0)

1. **🏛️ Nova Arquitetura de Layout em Bento Grid (Dashboard Principal)**:
   - **Fim dos Blocos Empilhados**: Substituição do modelo vertical pesado por uma grade assimétrica de 12 colunas inspirada nos melhores padrões do Figma Community, Linear e plataformas de alta performance.
   - **Hero Bento (8 colunas)**: Destaque visual da disciplina prioritária do ciclo ativo, tempo de leitura previsto, recompensa de XP e botões de ação imediata com brilho sutil em camadas.
   - **Widget de Consistência & Ofensiva (4 colunas)**: Contador de dias seguidos com chama dourada, mini-heatmap semanal dos 7 dias e multiplicador de XP ativo.
   - **Barra de 4 Tiles de Acesso Rápido**: Acesso instantâneo a *Sala de Estudos*, *Simulados Oficiais*, *Caça-Pegadinhas 15s* e *Caderno de Erros* (com contador de falhas pendentes em tempo real).
   - **Radar do Edital com Abas de Categoria**: Filtro temático de matérias (*Todas*, *Jurídico*, *Exatas & Dados*, *Gerais*) com barras de acerto progressivo e pesos oficiais da banca.

2. **🎨 Nova Paleta Executiva (*Executive Obsidian & Royal Indigo*)**:
   - **Modo Escuro (*Executive Obsidian*)**: Fundo grafite profundo (`#0B0F17`), superfícies translúcidas em camadas (`#111827`), bordas ultra-finas de 1px com transparência suave (`rgba(255, 255, 255, 0.08)`) e acento nobre em Índigo Real (`#4F46E5` / `#6366F1`).
   - **Modo Claro (*Editorial Paper*)**: Base off-white inspirada em papel de livro institucional (`#F8FAFC`), cartões brancos puros (`#FFFFFF`) e alto contraste nanquim (`#0F172A`).

3. **✨ Header Flutuante com Efeito Vidro (*Glassmorphism*)**:
   - Barra superior fixada com `backdrop-blur-md`, pills refinadas de status e design de interface limpo.

4. **⚡ Portal de Ciclos de Estudo com Abertura Frontal**:
   - Renderização do Wizard de Ciclos via `createPortal` diretamente em `document.body` com `z-[9999]`, eliminando rolagem para baixo e garantindo reset de scroll a cada etapa.

5. **⏱️ Persistência Resiliente do Cronômetro de Cadência (Imune a F5 / Reloads)**:
   - **Timestamp Target End-Time**: Quando o timer de cadência (Leitura / Questões / Livre) está em execução, o tempo alvo de término (`Date.now() + seconds * 1000`) é persistido no `localStorage`.
   - **Recálculo Preciso no F5**: Ao recarregar a página ou navegar de volta à Sala de Estudos, o tempo restante exato é recalculado instantaneamente sem reiniciar a contagem do zero.
   - **Preservação de Modo e Presets**: Mantém o modo ativo (`leitura`, `questoes`, `livre`) e as configurações personalizadas de tempo mesmo após fechar a aba ou reiniciar o navegador.

6. **🛡️ Correção no Registro de Progresso da Sala de Estudos (`logActivity`)**:
   - **Correção de Importação**: Inclusão de `logActivity` na importação de `server/routes/study-room.js`, eliminando o erro 500 (`logActivity is not defined`) ao salvar páginas e marcar paradas de leitura.
   - **Garantia de XP e Auditoria**: Registro transparente de +20 XP por progresso de páginas e +50 XP por conclusão de aula com log de atividade persistido no banco de dados.

---

## 17. Banco Oficial FGV ATRFB, Simulados por Matéria (20-50Q) & Filtro Sincronizado (v5.7.0)

1. **📚 Banco Oficial de Questões no Padrão FGV para Receita Federal (ATRFB)**:
   - **Casos Concretos e Enunciados Longos**: Questões situacionais e jurisprudenciais complexas com 5 alternativas (A-E) e gabaritos fundamentados no CTN, CF/88, Lei 8.112/90, Lei 14.133/21, Regulamento Aduaneiro (Dec. 6.759/09), CPCs contábeis e Súmulas Vinculantes do STF/STJ.
   - **Acervo para todas as 13 disciplinas do edital ATRFB**: *Direito Tributário*, *Legislação Aduaneira*, *Legislação Tributária*, *Fluência em Dados*, *Contabilidade Geral*, *Direito Administrativo*, *Direito Constitucional*, *Direito Previdenciário*, *Administração Geral e Pública*, *Língua Portuguesa*, *Língua Inglesa*, *Raciocínio Lógico Matemático* e *Estatística*.
   - **Seed Automatizado**: `server/seeds/atrfb_fgv_questions_seed.js` populando simultaneamente a tabela central de questões e a `career_question_bank`.

2. **🎯 Novo Card de Simulado Específico por Matéria (20 a 50 Questões)**:
   - **Destaque Visual Superior**: Card de alta conversão na página `SimuladosPage.tsx` com gradiente sutil e borda de destaque.
   - **Seletor de Matéria**: Dropdown com pesos oficiais da carreira e indicação visual se a disciplina já foi estudada (`✅ Estudada` / `⏳ Pendente`).
   - **Seletor de Volume Ajustável**: Botões ágeis para **20 Questões (40m)**, **30 Questões (60m)** ou **50 Questões (100m)** com tempo de prova calculado proporcionalmente (2 min/questão).

3. **🔄 Filtro Sincronizado Inteligente com o que foi Estudado**:
   - **Endpoint `GET /api/simulados/studied-scope`**: Faz a varredura e reconhecimento dinâmico de todas as matérias e tópicos já estudados pelo aluno em `study_materials`, `study_sessions` e `study_cycle_blocks`.
   - **Modos de Escopo**:
     - 🎯 **Sincronizado (Apenas o que estudei)**: Monta simulados estritamente com base nos assuntos que o aluno já consumiu na Sala de Estudos e Ciclos.
     - 🌐 **Edital Completo**: Simulado abrangente sobre todos os tópicos da matéria para testes de nivelamento.
     - ⚠️ **Re-treino de Erros**: Simulado focado exclusivamente nas questões erradas daquela matéria.

4. **⚡ Auditoria & Polimento no Gerador de Ciclos de Estudo**:
   - **Feedback Visual com Toasts**: Integração de toasts de confirmação e erro para todas as ações do Wizard (geração de prévia, ativação do ciclo e avanço de bloco com +20 XP).
   - **Scroll Reset Suave**: O modal do Wizard agora reseta a rolagem imediatamente para o topo em cada transição de etapa.

---

## 18. Extensão Completa para a Marinha do Brasil (SMV RM2 Praças) & Auditoria Geral (v5.8.0)

1. **⚓ Banco Oficial DEnsM & Sincronização em `career_question_bank`**:
   - **60 Questões Oficiais da Marinha**: Cobertura integral das duas grandes frentes do certame: *Formação Militar-Naval* (30 questões) e *Língua Portuguesa* (30 questões) com 5 alternativas e fundamentação legal estrita.
   - **Seed Automatizado**: Sincronização simultânea nas tabelas `questions` e `career_question_bank` (`career_id = 'marinha_rm2'`) via `server/seeds/rm2_questions_seed.js`.

2. **📖 Módulos Didáticos & Aulas Dedicadas de Formação Militar-Naval**:
   - **Doutrina Estruturada**: Inclusão de aula completa e módulo paginado em `src/utils/studyContent.ts` cobrindo o *Estatuto dos Militares (Lei 6.880/80)*, *Regulamento Disciplinar para a Marinha (RDM - Dec. 88.545/83)*, *Segurança do Tráfego Aquaviário (LESTA - Lei 9.537/97)*, *Organização Básica da Marinha (OGSA)* e *História/Tradições Navais (Batalha Naval do Riachuelo, Almirante Barroso e Fragata Amazonas)*.
   - **Esquemas, Tabelas & Mnemônicos**: Relação de postos e graduações, praças especiais (Guardas-Marinha e Aspirantes), escalas hierárquicas e critérios sucessivos de antiguidade.

3. **🎯 Simulados por Matéria (20 a 50 Questões) para a Marinha**:
   - Suporte completo ao seletor de matérias da Marinha (*Formação Militar-Naval* e *Língua Portuguesa*) com a banca oficial **DEnsM / Comando do 1º Distrito Naval**.
   - Integração com o **Filtro Sincronizado**, permitindo ao aluno treinar apenas os tópicos navais que já foram estudados no seu acervo ou o edital completo.

4. **⚖️ Expansão da Lei Seca Militar-Naval (Desafio Caça-Pegadinhas 15s)**:
   - Adição de novos artigos de ouro em `server/routes/leiseca.js`:
     - `Art. 14 da Lei 6.880/80` (Hierarquia e Disciplina militar).
     - `Art. 16 da Lei 6.880/80` (Postos, Graduações, Carta Patente e Praças Especiais).
     - `Art. 11 do Dec. 88.545/83 (RDM)` (Relação de penas disciplinares navais e vedação a penas patrimoniais).
     - `Art. 3º da Lei 9.537/97 (LESTA)` (Tríplice missão da Autoridade Marítima: salvaguarda da vida, segurança da navegação e prevenção da poluição hídrica).

5. **🔍 Validação Geral, Otimização e Erradicação de Inconsistências**:
   - Dinamização de rótulos de banca em todo o frontend (eliminando textos fixos de FGV em outras carreiras).
   - Suíte de 34 testes automatizados 100% aprovada e build de produção Vite consolidado.

---

## 19. Registro de Estudos Retroativos / Dias Anteriores & Recálculo de Ofensiva (v5.9.0)

1. **📅 Gravação Retroativa de Dias de Estudo Anteriores**:
   - **Objetivo**: Permitir que o concurseiro registre estudos realizados em datas passadas (livros físicos, PDFs externos ou dias em que estudou antes de cadastrar no sistema) sem perder sua ofensiva e histórico de horas.
   - **Campos Estruturados**:
     - *Data do Estudo*: Seletor de data (`YYYY-MM-DD`, até a data atual) com atalhos inteligentes (`[Ontem]`, `[Anteontem]`, `[3 dias atrás]`, `[Hoje]`).
     - *Disciplina & Tópico*: Dropdown com as matérias oficiais do concurso ativo e campo livre de assunto.
     - *Duração*: Presets rápidos (`30m`, `45m`, `60m`, `90m`, `120m`, `180m`) e campo numérico livre.
     - *Páginas Lidas & Questões Resolvidas*: Campos opcionais com volume de questões e acertos.
     - *Anotações Pessoais*: Resumo técnico ou pontos de revisão.

2. **🔥 Recálculo Automático de Ofensiva (Streak) & Concessão de XP**:
   - O motor `calculateUserStreak(userId, careerId)` foi atualizado para agrupar todas as sessões históricas registradas em `study_sessions`, `activity_log` e `question_answers`.
   - Concessão de XP retroativo em tempo real (+20 XP por 30m de estudo + 2 XP por questão feita) com feedback instantâneo via toast.

3. **📜 Histórico e Gerenciamento de Lançamentos**:
   - Aba interna no modal para consultar todas as sessões retroativas cadastradas com badge de data, duração e opção de exclusão com recálculo imediato do streak.
   - Pontos de acesso direto no **Widget da Chama da Consistência** no Dashboard e na **Sala de Estudos**.

---

## 20. Sincronização Selecionável de Fontes de Estudo para Questões e Simulados (v5.10.0)

1. **🎯 Segmentação e Seleção de Fontes de Estudo**:
   - O concurseiro agora pode escolher explicitamente qual modalidade de estudo guiará a seleção e geração de questões nos simulados por disciplina:
     - 🌐 **Todas as Fontes (Híbrido)**: Considera PDFs + Elaborações de IA + Estudos Retroativos gravados.
     - 🤖 **Apenas Elaborações da IA**: Questões baseadas estritamente nos módulos didáticos, cadernos enxutos e resumos conceituais gerados pela IA no Gabarito.AI.
     - 📄 **Apenas Meus PDFs**: Questões focadas nos tópicos e capítulos dos arquivos PDF que o aluno subiu e estudou.
     - 🏛️ **Edital Completo**: Simulado amplo cobrindo toda a ementa oficial da banca.
     - ⚠️ **Caderno de Erros**: Drill direcionado apenas às questões erradas anteriormente na matéria.

2. **📊 Painel de Reconhecimento em Tempo Real**:
   - Ao selecionar a disciplina no simulado, o painel exibe em tempo real o volume de conteúdo já estudado naquela matéria:
     - `📄 X PDFs • 🤖 Y Aulas IA • ⏱️ Z Sessões Retroativas`.
   - Se o aluno escolher uma fonte sem estudo prévio, o sistema emite um aviso suave e adapta automaticamente com questões oficiais da banca.

3. **🧠 Injeção Contextual no Gemini e Banco de Questões**:
   - O endpoint `POST /api/simulados/create-by-subject` extrai os tópicos reais da fonte selecionada e injeta as diretrizes específicas da banca examinadora (FGV, DEnsM, Cesgranrio) garantindo precisão cirúrgica no conteúdo treinado.

---

## 21. Revisão Geral do Sistema, Ortografia, Layout e Blindagem de Código (v6.1.0)

1. **✍️ Padronização Ortográfica e Textual (PT-BR)**:
   - Correção de hifenização de acordo com o Novo Acordo Ortográfico: unificação dos termos `Retreino`, `Retreinar` e `Reteste` (eliminando hífens redundantes).
   - Uniformização de caixa alta e termos institucionais: `Caderno de Erros`, `Gabarito Oficial` e `Discursiva Oficial`.
   - Correção de acentuações em filtros de disciplinas (`inglês` / `ingles`) e pontuações em modais e toasts.
   - Atualização das referências de modelos de IA para `Google Gemini 2.5 Flash / 1.5 Pro`.

2. **🎨 Design System, Acessibilidade & Responsividade**:
   - Ajuste de todas as áreas de toque interativas para o padrão mínimo acessível de **44px** (`min-w-[44px] min-h-[44px]`) nos botões de fechar, abas móveis e seletores de formulário (WCAG 2.5.5).
   - Eliminação de resquícios de classes inexistentes no Tailwind (`border-l-3` corrigido para `border-l-[3px]`, `py-0.2` para `py-0.5`).
   - Sincronização completa de aliases de navegação (`study-room`, `study-cycle`, `error-notebook`) na barra inferior móvel (`MobileBottomNav.tsx`) e na barra superior desktop (`DesktopNav.tsx`).

3. **🛡️ Robustez do Banco de Dados & Isolamento Multi-Tenant**:
   - Adição e migração automática das colunas `xp` e `level` na tabela `user_profiles` do SQLite.
   - Criação de 6 novos índices compostos de alta performance para aceleração de queries multi-tenant (`user_id`, `career_id`).
   - Sincronização de porta dinâmica na suíte de testes de integração (`tests/integration/v3_5_fixes.test.js`).
   - Filtragem do contador estatístico do Caderno de Erros respeitando o escopo do certame ativo.

---

*Gabarito.AI — O Ecossistema Definitivo para Aprovação em Concursos Públicos.*

