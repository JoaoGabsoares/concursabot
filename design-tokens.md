# 🏛️ ConcursaBot — Design Tokens & Sistema Visual Institucional

> Documento de referência normativa para a repaginação visual unificada do ConcursaBot.
> Proibido criar variações locais ou desviar destas regras em qualquer rota (#study-room, #dashboard, #simulados, #edital).

---

## 1. Paleta de Cores em Hex (5 Valores Normativos)

A cor primária é **absoluta e idêntica em todas as rotas e em ambos os modos (Claro e Escuro)**. Não existem seções com cores próprias (fim do "laranja em estudo, roxo em simulados, azul em edital").

| Token | Nome Normativo | Valor Hex | Aplicação / Papel |
| :--- | :--- | :--- | :--- |
| `--color-primary` | **Azul Notarial / Imprensa Oficial** | `#1B365D` | Cor primária única do sistema: botões principais, links ativos, bordas de destaque ativo, carimbo de revisão. |
| `--color-neutral-dark` | **Tinta Titânio / Slate Profundo** | `#0F172A` | Texto principal no modo claro e fundo base estrutural no modo escuro. |
| `--color-neutral-light` | **Papel Oficial / Off-White Linho** | `#F8FAFC` | Fundo base no modo claro e texto de alto contraste no modo escuro. |
| `--color-surface-card` | **Superfície Documental** | `#FFFFFF` (Claro) / `#162032` (Escuro) | Fundo de cartões, painéis, blocos de conteúdo e tabelas. |
| `--color-border-doc` | **Borda de Processo** | `#CBD5E1` (Claro) / `#2A3B53` (Escuro) | Borda nítida de 1px em cards, divisores de seção e tabelas. |

### Cores Semânticas de Estado (Apenas para Carimbos e Feedback Funcional):
* `--color-status-success`: `#059669` (Verde Deferido / Aprovado)
* `--color-status-warning`: `#D97706` (Âmbar Pendente / Em Tramitação)
* `--color-status-danger`: `#DC2626` (Vermelho Indeferido / Erro)

---

## 2. Tipografia Normativa (3 Famílias com Papéis Rígidos)

| Papel | Família Tipográfica | Import Google Fonts | Aplicação Obrigatória |
| :--- | :--- | :--- | :--- |
| **Display & Títulos** | **`IBM Plex Serif`** | `IBM+Plex+Serif:wght@500;600;700` | Todos os títulos (`h1`, `h2`, `h3`, `h4`), nome do produto na barra superior, cabeçalhos de seções e modais. Evoca o rigor de documentos oficiais, editais publicados e tratados jurídicos. |
| **Corpo & UI Geral** | **`Inter`** | `Inter:wght@400;500;600` | Textos de leitura, instruções, enunciados de questões, apostilas em PDF, menus, botões e labels. |
| **Dados & Métricas** | **`JetBrains Mono`** | `JetBrains+Mono:wght@500;600;700` | Números de estatísticas, porcentagens reais, contadores de tempo/cronômetros, código de lei seca, gabaritos e textos internos dos carimbos/selos. |

---

## 3. Regra Rígida de Ícones (Funcionalidade vs Eliminação de Ruído)

### Regra Universal:
> **Ícones decorativos são PROIBIDOS por padrão.**
> Um ícone só é permitido quando **substitui funcionalmente um texto** (ex: status booleano) ou quando indica **ação mecânica imediata** (ex: seta de ordenação, chevron de expandir menu).
> **É estritamente proibido colocar ícone ao lado de um texto que já diz a mesma coisa.**

### Tabela de Auditoria dos Itens Reais da Interface:

| Elemento Atual | Como Está Hoje (Com Erro) | Como Ficará (Correto) | Motivo da Decisão |
| :--- | :--- | :--- | :--- |
| **Nav Tab 1** | `[ ⚡ Hoje ]` | **`Hoje`** | O raio não adiciona informação; o texto "Hoje" já é autoexplicativo. |
| **Nav Tab 2** | `[ 📚 Biblioteca & Aulas ]` | **`Biblioteca & Aulas`** | O livro é redundante com a palavra Biblioteca. |
| **Nav Tab 3** | `[ 🎯 Treino & Questões ]` | **`Treino & Questões`** | O alvo é decorativo e redundante. |
| **Nav Tab 4** | `[ 📊 Inteligência & Edital ]` | **`Inteligência & Edital`** | O gráfico de barras não representa dados reais na nav. |
| **Header Brand** | `[ ⚡ ConcursaBot ]` | **`ConcursaBot`** (em `IBM Plex Serif`) | O nome institucional fala por si só. |
| **Header Badge** | `[ 🎯 Concurso Ativo ▾ ]` | **`Concurso Ativo ▾`** | Mantém apenas o chevron `▾` (indica dropdown interativo). |
| **Botão Estudar** | `[ ▶️ Estudar ]` | **`Estudar`** | O ícone play é ruído visual. |
| **Breadcrumb** | `[ ⚡ Dashboard ]` | **`Dashboard`** | Remove o emoji do caminho de navegação. |
| **Botão Reset** | `[ 🔄 Reset de Estudo ]` | **`Reset de Estudo`** | Texto claro dispensa emoji. |
| **Chips de Metadados**| `[ 🏛️ FGV ]` / `[ ⏱️ 60 min ]`| **`FGV`** / **`60 min`** (em `JetBrains Mono`)| Dados limpos e legíveis sem emojis infantis. |
| **Gabarito / Erro** | Linha de resultado da questão | **`✓`** / **`✗`** (Apenas o símbolo) | **PERMITIDO**: Substitui funcionalmente o texto "Acertou/Errou" em grade compacta. |
| **Cadeado de Bloqueio**| Módulo não liberado | **`🔒`** | **PERMITIDO**: Indica restrição de acesso em estado desabilitado. |

---

## 4. Elemento de Assinatura: Carimbo/Selo Institucional de Status

Em substituição a barras de progresso genéricas e chips arredondados de dashboards SaaS, o ConcursaBot utiliza o **Carimbo de Processo Oficial** como assinatura visual em todas as 4 rotas.

### Anatomia Visual do Carimbo:
* **Estrutura**: Borda retangular firme de `1.5px`, cantos retos (`border-radius: 2px`), tipografia em caixa alta `JetBrains Mono` (`font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.2rem 0.6rem;`).
* **Efeito**: Estilo carimbo de autenticação em cartório / Diário Oficial da União.

### Os 3 Estados Oficiais do Carimbo:

```
+------------------+     +------------------+     +------------------+
|    [ COBERTO ]   |     |   [ PENDENTE ]   |     |  [ EM REVISÃO ]  |
+------------------+     +------------------+     +------------------+
  Verde Documental         Âmbar Tramitação         Azul Institucional
   Borda: #059669           Borda: #D97706           Borda: #1B365D
   Texto: #059669           Texto: #D97706           Texto: #1B365D
   Fundo: rgba(5,           Fundo: rgba(217,         Fundo: rgba(27,
          150,105,0.08)            119,6,0.08)              54,93,0.08)
```

### Regras de Exibição do Carimbo:
1. **Na Biblioteca (`#study-room`)**: Aparece no cabeçalho de cada matéria e aula para atestar se a teoria foi totalmente estudada.
2. **No Dashboard (`#dashboard`)**: Identifica o status real de cada meta da pauta diária.
3. **No Treino & Questões (`#simulados`)**: Estampa o resultado oficial da prova (ex: `[ HOMOLOGADO ]` ou `[ RE-TREINO NECESSÁRIO ]`) com base na nota de corte real.
4. **Na Inteligência de Edital (`#edital`)**: Marca cada disciplina do edital como Coberta, Pendente ou Em Revisão com base no progresso efetivo.

---

## 5. Regra de Numeração e Métricas Reais

1. **Numeração**: Utilizada **exclusivamente** quando há ordem sequencial intrínseca ao conteúdo:
   * Numeração de questões da prova (`01`, `02`, ..., `70`).
   * Itens e capítulos do edital oficial (`Item 4.1`, `Item 4.2`).
   * Passos obrigatórios de execução do simulado.
   * **Proibido** adicionar numeração puramente cosmética ("01 Foco", "02 Metas").
2. **Barras e Indicadores de Progresso**:
   * Proibido qualquer gradiente fantasia (`laranja → azul`).
   * Barras de progresso só existem se atreladas a uma fórmula matemática explícita (ex.: `Questões Resolvidas / Total do Edital = 45%`).
   * A barra usa preenchimento sólido com a cor primária institucional (`#1B365D`) sobre trilha neutra clara (`#E2E8F0` no claro, `#2A3B53` no escuro).
