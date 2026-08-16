# 🏛️ Gabarito.AI — Sistema de Design Tokens & Diretrizes de Identidade Visual

> **Documento Normativo — Etapa 1 do Processo de Redesign Estrutural**  
> Este documento estabelece os tokens canônicos, regras tipográficas, restrições de ícones, elemento de assinatura (carimbo de edital) e escala de espaçamento para as 4 rotas (`#study-room`, `#dashboard`, `#simulados`, `#edital`) nos modos Claro e Escuro.

---

## 1. Paleta de Cores Hex Canônica (Zero Variação de Cor Primária por Rota)

A cor primária é **única e idêntica em todas as rotas e em ambos os modos**, eliminando o padrão de laranja em uma aba, roxo em outra e azul em outra.

### 🎨 Tabela de Tokens de Cor

| Token | Dark Mode | Light Mode | Papel / Aplicação |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#3B82F6` | `#1D4ED8` | **Cor Primária Única Oficial** (Destaques, botões primários, estados ativos de navegação) |
| `--color-primary-subtle`| `rgba(59, 130, 246, 0.12)` | `rgba(29, 78, 216, 0.08)` | Fundo sutil de seleção, hover e badges institucionais |
| `--color-bg` | `#0B0E17` | `#F8FAFC` | Fundo principal da página (Dark: ardósia profundo / Light: papel institucional) |
| `--color-surface` | `#131826` | `#FFFFFF` | Superfície dos cards e containers de conteúdo |
| `--color-surface-elevated`| `#1C2336` | `#F1F5F9` | Superfície elevada (inputs, menus, cabeçalhos de tabela) |
| `--color-border` | `#263048` | `#CBD5E1` | Borda estrutural sóbria |
| `--color-border-subtle` | `#182032` | `#E2E8F0` | Linha divisória e separador de itens |
| `--color-text-primary` | `#F8FAFC` | `#0F172A` | Títulos, enunciados, textos de alta ênfase |
| `--color-text-secondary` | `#94A3B8` | `#475569` | Explicações, labels, parágrafos |
| `--color-text-muted` | `#64748B` | `#94A3B8` | Metadados, notas de rodapé, referências de lei |

### 🛑 Cores Funcionais Restritas a Status e Carimbos
- `--color-status-success`: `#10B981` (Dark) / `#059669` (Light) — Carimbo `HOMOLOGADO` / `COBERTO`
- `--color-status-warning`: `#F59E0B` (Dark) / `#D97706` (Light) — Carimbo `EM REVISÃO`
- `--color-status-danger`: `#EF4444` (Dark) / `#DC2626` (Light) — Carimbo `VULNERÁVEL` / `INDEFERIDO`
- `--color-status-neutral`: `#64748B` (Dark) / `#64748B` (Light) — Carimbo `PENDENTE`

---

## 2. Tipografia Nomeada (Três Papéis Explícitos)

Fontes carregadas diretamente via Google Fonts com declaração estrita e fallbacks controlados:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 1. Display / Títulos: `Newsreader`, Georgia, 'Times New Roman', serif
- **Papel:** Títulos de seções, cabeçalho de missão do edital, nomes de disciplinas e tópicos da lei.
- **Justificativa:** Remete à autoridade documental e solene do Diário Oficial da União e de editais de concurso, eliminando o visual genérico de template SaaS.
- **Exemplo de aplicação:** `font-family: var(--font-display); font-weight: 600; letter-spacing: -0.02em;`

### 2. Dados / Estatísticas / Código de Lei: `IBM Plex Mono`, Menlo, monospace
- **Papel:** Números métricos (questões resolvidas, minutos líquidos, notas de corte, percentuais), artigos de lei (`Art. 37 da CF/88`), cronômetros de simulado e carimbos de status.
- **Justificativa:** Garante legibilidade analítica, alinhamento numérico tabular e precisão técnica.
- **Exemplo de aplicação:** `font-family: var(--font-mono); font-variant-numeric: tabular-nums;`

### 3. Corpo do Texto: `Plus Jakarta Sans`, system-ui, -apple-system, sans-serif
- **Papel:** Parágrafos teóricos, enunciados de questões, comentários de gabarito e textos de interface.
- **Justificativa:** Sans neutra de alta legibilidade em telas de qualquer densidade de pixels.
- **Exemplo de aplicação:** `font-family: var(--font-sans); line-height: 1.6;`

---

## 3. Regra de Aplicação de Ícones (Proibidos por Padrão)

**Regra Estrita:** Ícones só são permitidos quando **substituem texto funcionalmente** ou indicam estado crítico de interação. É terminantemente **proibido** posicionar ícones ao lado de labels que já descrevem textualmente o elemento.

### 📋 Auditoria e Remoção na Interface Atual

| Elemento da UI | Estado Anterior | Estado Obrigatório Novo | Ação Realizada |
| :--- | :--- | :--- | :--- |
| **Nav: Início / Painel** | `[Ícone Layout] Início` | `Início` | ❌ Ícone decorativo removido |
| **Nav: Sala de Estudos** | `[Ícone Livro] Sala de Estudos` | `Sala de Estudos` | ❌ Ícone decorativo removido |
| **Nav: Simulados** | `[Ícone Alvo] Simulados & Treino` | `Simulados & Treino` | ❌ Ícone decorativo removido |
| **Nav: Caderno de Erros** | `[Ícone Alerta] Caderno de Erros` | `Caderno de Erros [2]` | ❌ Ícone removido; mantido badge numérico real |
| **Nav: Redação** | `[Ícone Caneta] Redação Discursiva`| `Redação Discursiva` | ❌ Ícone decorativo removido |
| **Nav: Raio-X do Edital** | `[Ícone Gráfico] Raio-X do Edital` | `Raio-X do Edital` | ❌ Ícone decorativo removido |
| **Nav: Configurações** | `[Ícone Engrenagem] Configurações` | `Configurações` | ❌ Ícone decorativo removido |
| **Ofensiva / Streak** | `🔥 12 Dias` | `OFENSIVA: 12 DIAS` | ❌ Fogo decorativo substituído por métrica mono |
| **Card de Missão** | `✨ Missão do Dia` | `MISSÃO OFICIAL DO EDITAL`| ❌ Sparkles removidos; texto institucional solene |
| **Gabarito / Alternativa** | `Opção C` | `[ ✓ ] Opção C (Correta)` | ✅ Check funcional indicando acerto |
| **Acesso Bloqueado** | `Simulado 3` | `[ 🔒 ] Simulado 3` | ✅ Cadeado funcional indicando bloqueio |

---

## 4. Elemento de Assinatura: Carimbo de Processo / Selo de Edital

No lugar de badges arredondados genéricos de SaaS com gradientes aleatórios, o Gabarito.AI adota o **Carimbo Oficial de Conformidade do Edital**:

### 🏛️ Especificação Visual do Carimbo
- **Formato:** Caixa retangular solene com borda dupla ou contorno nítido de `1.5px`.
- **Tipografia:** `IBM Plex Mono` em caixa alta (`uppercase`), `font-weight: 700`, `letter-spacing: 0.12em`, `font-size: 10px` a `11px`.
- **Rotação:** Leve inclinação de `-1.5deg` em visualizações de destaque para simular carimbo físico institucional, ou `0deg` em tabelas.

### 📌 Estados do Carimbo

1. **`[ HOMOLOGADO ]` / `[ COBERTO ]`**
   - **Cor:** Borda e texto em `#059669` (Light) / `#10B981` (Dark), fundo `rgba(16, 185, 129, 0.08)`.
   - **Gatilho:** Disciplina ou tópico do edital com 100% da teoria lida e taxa de acerto >= 80%.
2. **`[ EM REVISÃO ]`**
   - **Cor:** Borda e texto em `#D97706` (Light) / `#F59E0B` (Dark), fundo `rgba(245, 158, 11, 0.08)`.
   - **Gatilho:** Tópico com agendamento ativo de repetição espaçada (D+1, D+7, D+30).
3. **`[ PENDENTE ]`**
   - **Cor:** Borda e texto em `#64748B`, fundo `rgba(100, 116, 139, 0.08)`.
   - **Gatilho:** Tópico do edital ainda não estudado.
4. **`[ VULNERÁVEL ]`**
   - **Cor:** Borda e texto em `#DC2626` (Light) / `#EF4444` (Dark), fundo `rgba(239, 68, 68, 0.08)`.
   - **Gatilho:** Questões erradas acumuladas no Caderno de Erros sem retreino.

---

## 5. Escala de Espaçamento e Aplicação Estrutural

Todos os elementos na interface obedecem estritamente à escala geométrica em múltiplos de 4px / 8px:

| Token de Espaçamento | Valor em px | Valor em rem | Aplicação Exclusiva |
| :--- | :--- | :--- | :--- |
| `--space-1` | `4px` | `0.25rem` | Padding interno de micro-tags, respiro entre carimbo e borda |
| `--space-2` | `8px` | `0.5rem` | Gap entre labels e campos de formulário, gap entre badges |
| `--space-3` | `12px` | `0.75rem` | Espaçamento entre parágrafos curtos e metadados |
| `--space-4` | `16px` | `1.0rem` | Padding interno de cards compactos, gap entre opções A/B/C/D/E |
| `--space-6` | `24px` | `1.5rem` | Padding interno de cards principais e painéis de estudo |
| `--space-8` | `32px` | `2.0rem` | Gap vertical entre seções do Dashboard e páginas |
| `--space-12`| `48px` | `3.0rem` | Margem de topo e base de grandes áreas de trabalho |
| `--space-16`| `64px` | `4.0rem` | Padding máximo de respiro horizontal em monitores grandes |

**Regra de Ouro:** É estritamente proibido qualquer elemento encostar no container ou em outro elemento vizinho sem um token desta escala.

---

## 6. Breakpoints Responsivos & Comportamento Estrutural

| Breakpoint | Largura | Comportamento da Navegação | Comportamento dos Cards & Grids |
| :--- | :--- | :--- | :--- |
| **Mobile (`sm`)** | `< 640px` | Sidebar oculta. Menu inferior compacto (`h-14`) posicionado na thumb zone. | Grids de 2, 3 e 4 colunas empilham estritamente em **1 coluna vertical** (`flex-col`). Padding reduz para `16px`. |
| **Tablet (`md`)** | `640px – 1023px` | Sidebar colapsada em barra lateral compacta ou drawer sob demanda. | Grids de 4 colunas viram **2 colunas × 2 linhas**. Grid de 3 colunas vira **1 coluna destaque + 2 colunas**. Padding `24px`. |
| **Desktop / Notebook (`lg`/`xl`)** | `≥ 1024px` | Sidebar lateral fixa visível (`w-64` / `256px`), com tipografia legível e respiro. | Layout expandido em tela cheia com `max-w-6xl` centralizado, preenchendo a altura vertical sem vazios artificiais. |

---

## 🛑 Ponto de Parada — Etapa 1 Concluída

Este arquivo consolida todas as especificações obrigatórias de design tokens, fontes e carimbos antes da escrita de qualquer código da Etapa 2.
