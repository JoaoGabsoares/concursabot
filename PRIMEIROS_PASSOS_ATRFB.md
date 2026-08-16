# ConcursaBot — Primeiros Passos (foco: ATRFB)

Este guia assume o cenário real: app local, sem hospedagem web, PDFs vivem no seu Google
Drive (curso completo da Estratégia Concursos), e você não vai baixar a base inteira pro
notebook. Fluxo é sob demanda: baixar o material do dia, alimentar o app, estudar.

---

## 0. Antes de instalar: um ajuste no seu plano

Você propôs baixar o PDF do dia **5 minutos antes** de começar. Tecnicamente funciona — o
upload manual já faz exatamente isso, não precisei mudar nada de código pra isso rodar.

Mas 5h25 da manhã é o pior horário possível pra depender de "achar o arquivo certo no Drive
rápido". É exatamente quando energia e paciência estão mais baixas, e qualquer fricção
(internet lenta, pasta errada, nome de arquivo confuso) engorda o risco de você atrasar o
início ou pular o dia. **Sugestão: baixe o(s) PDF(s) do dia seguinte na noite anterior**,
junto com sua revisão da Wave — 2 minutos à noite em vez de 5 minutos sonolento de manhã.
Deixa os arquivos numa pasta fixa tipo `~/concursabot-hoje/`.

Se quiser eliminar o passo de download manual por completo: você já usa rclone (tem ele
rodando numa VM pra sincronizar a base do curso). No seu notebook Linux, `rclone mount`
monta o Drive como uma pasta local de verdade — arrasta o arquivo pro ConcursaBot igual um
arquivo comum, sem passar pelo navegador. Não é obrigatório, é só a versão sem fricção do
mesmo fluxo que você já propôs. (Google Drive for Desktop, que eu sugeri antes, não existe
pra Linux — essa opção nem valia no seu caso; rclone é o equivalente real aqui.)

---

## 1. Instalação (uma vez só) — Linux

Confirma a versão do Node primeiro (precisa ser 22 ou mais novo):

```bash
node --version
```

Se der `command not found` ou versão menor que 22, instala via NodeSource (Ubuntu/Debian):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Agora o projeto:

```bash
cd CONCURSO_BOT
npm install
cp .env.example .env
```

O ConcursaBot utiliza o **SQLite oficial embutido no Node.js (`node:sqlite`)**, com instalação 100% instantânea e sem necessidade de compilação C++ ou ferramentas externas.

Abre o `.env` (`nano .env` ou seu editor) e cola sua API key gratuita do
[Google AI Studio](https://aistudio.google.com/apikey) em `GEMINI_API_KEY=`. Não precisa
mexer no resto — os modelos já estão configurados corretos (`gemini-3.7-flash` e
`gemini-embedding-001`).

```bash
npm start
```

Abre `http://localhost:3000` no navegador. Deixa essa aba fixa — é seu painel de estudo.

---

## 2. Sobre o que ele vai saber (contexto do concurso)

O app já está configurado especificamente pro **ATRFB — Analista Tributário da Receita
Federal do Brasil**, usando os dados reais do seu "Guia de Estudo — Método Único ATRFB (v8)"
(achei no Drive, em `Analista Tributario/01_Planejamento_e_Metodologia/`):

- Vagas autorizadas em 03/07/2026 (116 para ATRFB); edital tem prazo legal até **04/01/2027**.
- Banca mais provável: **FGV** (foi a banca usada pra extrair os pesos abaixo) — mas a banca
  do *próximo* edital ainda não está confirmada oficialmente. Cesgranrio é a alternativa mais
  cotada.
- **Wave 1 (ativa)**, por peso real na prova: Direito Tributário (16q), Direito
  Previdenciário (16q), Língua Portuguesa (15q), Fluência de Dados (15q), Direito
  Constitucional (14q), Legislação Tributária (14q), Legislação Aduaneira (14q).
- **Wave 2 (fila)**: Direito Administrativo, Língua Inglesa, RLM, Estatística, Contabilidade
  Geral, Administração Geral e Pública.
- Hierarquia de material: **Grifada > Completa > Simplificada > Passo Estratégico**. Grifada e
  Completa já vêm com questões comentadas dentro do próprio PDF — o app agora sabe disso e
  evita gerar questões repetidas das que já estão no material.

Esse contexto fica todo em **um arquivo só**: `server/exam-config.js`. Quando o edital sair
de fato (até janeiro), edite esse arquivo com a banca confirmada — os dois módulos que usam
IA (Tutor e Sala de Estudos) puxam esse contexto automaticamente.

O dropdown de matérias no upload (`Sala de Estudos → Enviar Material`) já reflete a Wave 1 e
a Wave 2 reais, sem mais matérias inventadas (a versão anterior tinha AFO, Auditoria e
Contabilidade de Custos, que não existem no seu programa — foi erro meu, corrigido).

---

## 3. O loop diário (seu cenário: 5h30–8h25)

**Noite anterior (2 min):** baixa do Drive o(s) PDF(s) da(s) aula(s) de amanhã, salva em
`~/concursabot-hoje/`.

**5h30 — Bloco 1 (leitura, ~60min):**
1. Abre `localhost:3000` → **Sala de Estudos** → **Enviar Material**.
2. Seleciona o PDF de `~/concursabot-hoje/`, escolhe a matéria, envia. (Leva poucos segundos — é só análise
   de texto, não manda o PDF inteiro pro Gemini duas vezes como na primeira versão.)
3. Clica em **Iniciar Sessão**, duração 60min.
4. Clica em **📄 Abrir PDF Original** (abre em nova aba) e lê normalmente.
5. Trava em algum conceito? Usa o chat da sessão — ele responde só com base nesse material.

**Fim do bloco 1 → Bloco de questões (~30min):**
1. Antes de finalizar, preenche o campo **"Até onde você chegou?"** com o tópico/página que
   você realmente leu (ex: *"até imunidade tributária recíproca, não cobri os incisos do art.
   150"*). As questões geradas focam só nisso — não no PDF inteiro.
2. Clica em **Finalizar e Gerar Questões**. Responde as 10 geradas.
3. Se sobrar tempo dos 30min, pede mais questões pelo **Gerador de Questões** (módulo
   separado, deixa você escolher matéria/banca/quantidade livremente).

**Descanso 10min.** Sem app, só levanta da cadeira.

**Bloco 2:** repete o processo com o segundo PDF da pasta `~/concursabot-hoje/`.

---

## 4. Sobre RAG e pré-carregamento (não fazem parte do seu loop diário)

Na primeira versão eu montei `npm run preload` pra carregar uma pasta inteira de uma vez.
Dado que você não vai manter os PDFs sincronizados localmente, isso deixou de ser o fluxo do
dia a dia — vira ferramenta ocasional, não passo obrigatório:

- `npm run ingest -- "pasta"` — útil se um dia você quiser fazer uma revisão cruzada entre
  várias aulas já baixadas (ex: revisão de véspera de prova, com vários PDFs baixados de
  propósito naquele dia). Não é pra 1.000 PDFs, é pra um lote pequeno e pontual.
  Depois de usar, pode apagar os arquivos locais — o índice vetorial fica salvo no banco
  mesmo sem o PDF original no disco.
- `npm run preload` — mesma lógica, mas alimenta a biblioteca da Sala de Estudos em vez do
  RAG. Só vale a pena se um dia você quiser montar uma sessão de revisão com vários materiais
  já catalogados de uma vez.

No dia a dia normal (1–2 PDFs/dia), nenhum dos dois é necessário — o upload manual dá conta.

---

## 5. Checklist de primeiro dia

- [ ] `npm install` rodou sem erro
- [ ] `.env` tem a `GEMINI_API_KEY` preenchida
- [ ] `npm start` sobe o servidor sem erro no console
- [ ] Consegue abrir `localhost:3000`
- [ ] Sobe 1 PDF de teste na Sala de Estudos e confirma que a análise volta (matéria, tópicos)
- [ ] Botão "Abrir PDF Original" abre o arquivo numa nova aba
- [ ] Inicia uma sessão curta (5min, só pra testar), preenche o campo de escopo, finaliza, e
      confirma que as questões geradas batem com o que você marcou
