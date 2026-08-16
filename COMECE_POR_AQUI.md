# 🎯 Gabarito.AI — Guia Mestre de Contextualização e Inicialização (v3.5 Ultra)
> **Instruções para o Usuário / Desenvolvedor:** 
> Você pode copiar e colar todo o conteúdo deste arquivo no início de qualquer nova conversa com IAs (Google Antigravity, Claude Code, ChatGPT, Cursor, etc.) para que a IA adquira imediatamente 100% de consciência arquitetural, funcional e das regras de negócio deste projeto sem precisar reexplicar nada.

---

## 🏛️ 1. O Que é o Gabarito.AI?

O **Gabarito.AI** é uma plataforma web full-stack de alto desempenho focada na preparação de concurseiros para certames públicos de elite no Brasil (Receita Federal, Transpetro/Petrobras, Banco do Brasil, Saúde Estadual, Marinha do Brasil, Tribunais e Polícias).

### 💡 Filosofia e Pilares do Projeto:
1. **Custo Zero de Infraestrutura / Zero API Bill**: O sistema foi concebido para rodar de forma ultra-eficiente sem dependência de serviços externos pagos. Usa SQLite nativo do Node.js (`node:sqlite`) em modo WAL, Web APIs do navegador e heurísticas inteligentes locais. Quando IA generativa é acionada (ex: correção de redação discursiva), utiliza modelos rápidos como Gemini Flash ou chaves próprias (BYOK).
2. **Aprendizado Ativo vs. Leitura Passiva**: Todo o fluxo de estudo força a evocação ativa: Cadência 60/30 (60 min leitura + 30 min questões), Caça-Pegadinhas da Lei Seca em 15s, Súmulas Vinculantes comentadas, Repetição Espaçada SM-2 (D+1, D+7, D+30) e Simulado "Dia D de Prova" com Cartão-Resposta Digital.
3. **Design System Editorial & Mission-Driven**: Interface sem poluição visual, inspirada no design institucional suíço/editorial, com design tokens padronizados (`src/styles/design-tokens.ts`), modo escuro/claro nativo, feedback tátil e tipografia de alta legibilidade.

---

## 💻 2. Stack Tecnológico & Arquitetura

* **Frontend**:
  - React 19 + TypeScript (Strict Mode)
  - Vite 8 (Compilação ultra-rápida em ~2s)
  - Tailwind CSS + Vanilla CSS Variables (`src/styles/index.css`)
  - Lucide React (Ícones consistentes)
  - Arquitetura por Features: `src/features/{study,simulados,erros,redacao,leiseca,aproveitamento,edital,flashcards,settings,dashboard}`
* **Backend**:
  - Node.js LTS (v22/v24) com ESM Nativo (`"type": "module"`)
  - Express.js com compressão gzip/brotli, CORS configurado e rate limiters
  - Banco de Dados: SQLite 3 nativo (`node:sqlite`) no arquivo `database.sqlite` com **WAL (Write-Ahead Logging)** para alta concorrência
  - Segurança: Criptografia **Scrypt** nativa com salt individual de 128 bits por usuário, proteção estrita contra SQL Injection (100% prepared statements) e sanitização XSS
* **Testes & Qualidade**:
  - Suíte unificada de testes em `tests/run_all.js` cobrindo testes unitários, testes de integração de APIs, auditoria de segurança (OWASP), concorrência e isolamento multi-tenant.

---

## 🚀 3. As 7 Carreiras Canônicas Suportadas Nativamente

| ID da Carreira | Nome Oficial | Banca | Foco das Disciplinas |
| :--- | :--- | :--- | :--- |
| `transpetro_adm` | **Transpetro — Técnico de Administração e Controle Jr** | Cesgranrio | Noções de Administração (PODC, Gestão por Processos), Lei das Estatais (Lei 13.303/16), Arquivo, Português e Matemática |
| `transpetro_log` | **Transpetro — Técnico de Suprimento e Logística Jr** | Cesgranrio | Gestão de Estoques (Curva ABC, Ponto de Pedido), Modais de Transporte, Armazenagem, Compras e Lei 13.303/16 |
| `atrfb` | **Receita Federal — Analista-Tributário (ATRFB)** | FGV | Direito Tributário, Aduaneira, Constitucional, Administrativo, Contabilidade Geral e Fluência em Dados |
| `afrfb` | **Receita Federal — Auditor-Fiscal (AFRFB)** | FGV | Auditoria Fiscal, Contabilidade Avançada, Comércio Internacional e Direito Tributário Avançado |
| `bb_comercial` | **Banco do Brasil — Agente Comercial** | Cesgranrio | Conhecimentos Bancários, Mercado Financeiro, Vendas e Negociação, Português e Matemática Financeira |
| `bb_ti` | **Banco do Brasil — Agente de TI** | Cesgranrio | Engenharia de Software, Cloud, Microsserviços, SQL, Python e Arquitetura de Dados |
| `ses_rj` | **Saúde RJ — SES-RJ / IASERJ 2026** | Instituto IBDO | Legislação do SUS (Leis 8.080 e 8.142), Enfermagem e Políticas Públicas de Saúde |
| `marinha_rm2` | **Marinha do Brasil — Praças Temporários RM2** | DEnsM / 1º DN | Organização Básica da Marinha, Tradições Navais e Legislação Militar |

---

## ⚙️ 4. Módulos Funcionais e Regras de Negócio

### 1. 📄 Motor Universal de Ingestão de Qualquer PDF (`server/services/universalPdfService.js`)
- Processa apostilas de **qualquer editora** (Estratégia, Gran, Direção, Cebraspe, etc.).
- Heurísticas avançadas: Remove marcas d'água, CPFs, cabeçalhos repetitivos; extrai sumários hierárquicos e detecta a fronteira exata entre **Doutrina Teórica** e **Baterias de Questões**.
- Calcula velocidade média de leitura (~160 WPM) e tempo estimado para conclusão.

### 2. ⏱️ Cadência de Estudo Flexível (60/30) & Retomada Parcial
- Presets: **60m Leitura + 30m Questões** (Padrão Foco Profundo), 45m/15m (Sprint), 50m/10m (Pomodoro) ou Personalizado.
- Marcador de página persistido com estimativa de tempo restante e botão direto: `⚡ Ir para Questões (30 min)`.

### 3. ⚖️ Lei Seca Ativa & Súmulas dos Tribunais (`/api/leiseca` e `/api/jurisprudencia`)
- **Caça-Pegadinhas da Lei Seca**: Desafios de **15 segundos** onde um artigo de lei tem uma palavra adulterada pela banca (ex: "é vedado" trocado por "é permitido"). O aluno clica no erro e ganha **+10 a +15 XP**.
- **Súmulas Vinculantes & Jurisprudência**: Catálogo das teses do STF, STJ e TST mais cobradas em provas (ex: SV 13 Nepotismo, SV 5 PAD, Súmula 473 Autotutela, Súmula 331 TST Terceirização) com alertas práticos das pegadinhas de bancas examinadoras.

### 4. 🏛️ Simulados Oficiais & Modo "Dia D de Prova" (`src/features/simulados/SimuladosPage.tsx`)
- **Modo Treino Rápido**: Questões com cronômetro progressivo e gabarito comentado item a item.
- **Modo "Dia D de Prova" (4 Horas)**: Bloco contínuo de 4h00 com **Caderno de Prova**, **Folha Oficial de Respostas (Cartão-Resposta Digital com bolhas A-E)** e **Folha Oficial de Redação Integrada** no mesmo bloco, com alerta regressivo nos últimos 30 min.
- **Boletim Oficial**: Gera diagnóstico com nota objetiva, nota discursiva e carimbo frente à nota de corte da carreira (`HOMOLOGADO NO CORTE` / `ABAIXO DO CORTE`).

### 5. 🧭 Matriz de Aproveitamento & Transição de Editais (`/api/aproveitamento`)
- Compara qualquer par de concursos e calcula o **Índice de Afinidade Curricular (%)**.
- Gera a **Trilha de Transição Acelerada**, ordenando matérias inéditas pelo peso da banca e estimando o prazo em semanas.

### 6. ✍️ Corretor de Redação Discursiva com IA (`/api/redacao`)
- Temas oficiais e inéditos por carreira.
- Espelho de correção em 4 critérios oficiais de concurso:
  1. *Domínio do Conhecimento Temático* (0-30 pts)
  2. *Estrutura Textual Dissertativa-Argumentativa* (0-25 pts)
  3. *Emprego da Norma Padrão da Língua Portuguesa* (0-25 pts)
  4. *Coesão, Coerência e Progressão Argumentativa* (0-20 pts)
- Recompensa de **+50 XP** por redação submetida.

### 7. 🎯 Caderno de Erros com Repetição Espaçada SM-2 (`/api/caderno-erros`)
- Captura automática de qualquer item errado em simulados ou questões de estudo.
- Fila de re-treino com algoritmo **SuperMemo-2 (SM-2)**: Intervalos D+1, D+7, D+30.
- Ao acertar uma questão pendente, evolui para status `mastered` com bônus de **+15 XP de superação**.

### 8. 🔒 Autenticação, Isolamento e Gamificação
- Novas contas iniciam rigorosamente com **0 XP, Level 1 Aspirante (0/500 XP), 0 simulados, 0 pendências no caderno de erros e histórico limpo**.
- Limite estrito de no máximo **3 perfis de concurseiro por conta de usuário**.
- Isolamento hermético de dados: Atividades, matérias e pontuações de uma conta nunca vazam para outra.

---

## 🗂️ 5. Estrutura dos Diretórios do Projeto

```
CONCURSO_BOT/
├── COMECE_POR_AQUI.md              # [ESTE ARQUIVO] Guia mestre de inicialização para IAs
├── README.md                       # Apresentação do repositório
├── DOCUMENTACAO_DO_SISTEMA.md      # Manual de arquitetura detalhada
├── PROJECT_MEMORY.md               # Memória técnica contínua e decisões históricas
├── package.json                    # Dependências e scripts npm
├── vite.config.ts                  # Configuração do Vite 8 com porta 5173
├── database.sqlite                 # Banco de dados SQLite 3 em modo WAL
│
├── server/                         # Backend Node.js / Express
│   ├── index.js                    # Ponto de entrada do servidor (porta 3000)
│   ├── database.js                 # Inicialização do SQLite, tabelas e migrações
│   ├── careers.js                  # Catálogo canônico de carreiras e pesos de bancas
│   ├── routes/                     # Endpoints REST modulares
│   │   ├── auth.js                 # Registro, login e validação de tokens Scrypt
│   │   ├── users.js                # Gestão de perfis e troca de carreira ativa
│   │   ├── leiseca.js              # Artigos de ouro e Caça-Pegadinhas da Lei Seca
│   │   ├── jurisprudencia.js       # Súmulas Vinculantes e teses dos tribunais
│   │   ├── aproveitamento.js       # Matriz de transição e cálculo de afinidade
│   │   ├── redacao.js              # Temas e corretor de discursiva com espelho
│   │   ├── caderno-erros.js        # Gestão de erros e repetição espaçada SM-2
│   │   ├── study-room.js           # Catálogo de aulas, marca-página e ritmo WPM
│   │   └── dashboard.js            # Métricas e radar de domínio do edital
│   └── seeds/                      # Cargas iniciais de questões e dados oficiais
│
├── src/                            # Frontend React 19 + TypeScript
│   ├── main.tsx                    # Ponto de entrada React
│   ├── App.tsx                     # Orquestrador de rotas e abas da SPA
│   ├── types/                      # Definições estritas de interfaces TypeScript
│   ├── styles/                     # Design tokens e variáveis de cores/tipografia
│   ├── components/                 # Primitivas de UI (Card, Button, Badge, Modal, etc.)
│   └── features/                   # Páginas modulares
│       ├── dashboard/              # Dashboard principal mission-driven
│       ├── study/                  # Sala de Estudos & Leitor de Doutrina
│       ├── simulados/              # Simulados Rápidos & Modo Dia D de Prova
│       ├── erros/                  # Caderno de Erros com Repetição Espaçada
│       ├── redacao/                # Corretor Discursivo com Espelho Oficial
│       ├── leiseca/                # Lei Seca Ativa & Súmulas dos Tribunais
│       ├── aproveitamento/         # Matriz de Transição e Afinidade de Editais
│       ├── edital/                 # Raio-X do Edital (Princípio de Pareto 80/20)
│       ├── flashcards/             # Decks de Flashcards com algoritmo SM-2
│       └── settings/               # Ajustes de cadência, perfil e guia de estudo
│
└── tests/                          # Suíte de Testes Automatizados
    ├── run_all.js                  # Runner principal de testes (`npm test`)
    ├── unit/                       # Testes unitários do parser de PDFs
    ├── integration/                # Testes de integração de rotas e isolamento
    └── security/                   # Testes de segurança OWASP (SQLi, XSS, rate limit)
```

---

## ⚡ 6. Comandos Essenciais

```bash
# 1. Instalar dependências:
npm install

# 2. Executar toda a suíte de testes automatizados:
npm test

# 3. Compilar o frontend para produção (Vite 8):
npm run build

# 4. Iniciar o servidor backend (porta 3000):
node server/index.js
# ou:
npm start

# 5. Iniciar o servidor de desenvolvimento com Hot-Reload (porta 5173):
npm run dev
```

---

## 🛡️ 7. Regras e Padrões para Qualquer Modificação

1. **Preservar Isolamento e Estado Inicial Zero XP**: Novos usuários registrados devem sempre começar com 0 XP, Level 1 Aspirante e listas vazias de atividades.
2. **Manter Zero Custo Operacional**: Não adicione dependências de serviços pagos ou APIs proprietárias obrigatórias.
3. **Prepared Statements em 100% das Queries**: Nunca use concatenação de strings em comandos SQL; utilize sempre `db.prepare(...).run/get/all(...)`.
4. **Validar com Testes**: Após qualquer alteração relevante, execute `node tests/run_all.js` e `npm run build` para garantir zero quebras de contrato.
5. **Design System Consistente**: Utilize sempre as variáveis CSS e primitivas do Design System (`src/components/UIPrimitives.tsx`) respeitando os modos Claro e Escuro.
