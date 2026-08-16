# 🎯 Gabarito.AI — Documentação Completa da Arquitetura, Engenharia e Decisões de Projeto (v3.5 Ultra)

> **Visão Geral**: O **Gabarito.AI** é um ecossistema inteligente de alta performance desenvolvido sob medida para preparação de concursos públicos de elite, com suporte multi-carreira:
> 1. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
> 2. **Banco do Brasil (BB)** — Agente Comercial e Agente de Tecnologia (TI) • Banca Fundação Cesgranrio
> 3. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
> 4. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
> 5. **Carreiras Customizadas / Tribunais** — Adaptável a qualquer certame ou banca examinadora (Cebraspe, FCC, etc.).

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

## 3. Design System & UI Components

O sistema visual é regido pelos tokens definidos em `src/styles/design-tokens.ts`:
- **Cores**: Background (`#0a0d14`), Superfícies (`#111726`, `#182033`), Borda Ativa (`#3b82f6`), Status Verde (`#10b981`), Alerta (`#f59e0b`), Erro (`#ef4444`).
- **Tipografia**: Fraunces/Newsreader (Display Editorial), Inter (Corpo do texto e interface), JetBrains Mono (Dados, temporizadores e código).
- **Componentes Primitivos**: `Card`, `Badge`, `Button`, `Input`, `Modal`, `ProgressBar`, `SegmentedControl`, `Toast`.

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

## 8. Suíte de Testes Automatizados (npm test)

O comando `npm test` executa a suíte completa em `tests/run_all.js`:
- `tests/unit/universal_pdf.test.js`: Testes de sanitização, heurística e extração de sumários.
- `tests/integration/auth_and_isolation.test.js`: Testes de registro, login, zero XP e isolamento multi-conta.
- `tests/integration/study_room_cadence.test.js`: Testes de sala de estudos, marca-página e ritmo.
- `tests/security/pentest_and_ai.test.js`: Testes de pentest, proteção SQLi e sanitização XSS.
