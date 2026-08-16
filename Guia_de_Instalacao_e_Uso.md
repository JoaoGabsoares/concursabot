# 🎯 Gabarito.AI — Guia Completo de Instalação e Uso (v3.0 Ultra)

> Seu Ecossistema Inteligente de Estudos para Concursos Públicos de Elite

Este guia prático ensina como instalar, configurar e aproveitar ao máximo todas as funcionalidades do **Gabarito.AI**.

---

## 📋 Pré-Requisitos

Antes de iniciar, certifique-se de possuir:

### 1. Node.js (v20, v22 ou v24 LTS)
Verifique se está instalado:
```bash
node --version
```
Se não possuir, baixe a versão **LTS** em [nodejs.org](https://nodejs.org/).

### 2. Chave de API Google Gemini (Opcional - Gratuita)
1. Acesse **[aistudio.google.com/apikey](https://aistudio.google.com/apikey)**
2. Faça login com sua conta Google e clique em **"Create API key"**
3. Copie a chave gerada (`AIzaSy...`)

> [!NOTE]
> O tier gratuito do Google AI Studio oferece até **1.500 requisições diárias**, mais que suficiente para meses de estudo contínuo.

---

## 🚀 Instalação Rápida (3 Minutos)

Abra o terminal na pasta do projeto e execute:

### Passo 1: Instale as dependências
```bash
npm install
```

### Passo 2: Compile o Frontend React 19
```bash
npm run build
```

### Passo 3: Configure a Chave de API (.env)
Crie um arquivo `.env` na raiz do projeto (ou copie `.env.example`):
```env
GEMINI_API_KEY=sua_chave_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
PORT=3000
```

### Passo 4: Inicie o Servidor
```bash
npm start
```

### Passo 5: Acesse no Navegador
Abra: **`http://localhost:3000`**

---

## 🎮 Guia de Uso dos Módulos

### 1. ⚡ Início & Missão (Dashboard)
- **Missão Recomendada do Dia:** O sistema identifica dinamicamente o edital selecionado e sugere o tópico de maior peso da banca (ex: *Direito Tributário* na Receita Federal, *Conhecimentos Bancários* no Banco do Brasil).
- **Patente do Concurseiro:** Acompanhe seu XP acumulado, dias seguidos de estudo (Streak) e metas diárias.
- **Radar de Disciplinas:** Veja a porcentagem de assertividade por matéria (*DOMINADO*, *EM ESTUDO*, *VULNERÁVEL*).

### 2. 📖 Sala de Estudos Teórica (RAG 2.0)
- **Doutrina Esquematizada:** Selecione a matéria nas abas superiores para acessar o resumo oficial de edital, tendências da banca examinadora e mnemônicos.
- **Fixação Imediata:** Resolva itens de prova no painel lateral logo após ler a teoria.
- **Upload de PDF:** Clique no botão `[ + Subir PDF da Aula ]` para enviar apostilas ou leis em PDF. O sistema extrai o texto localmente com fallback resiliente.

### 3. 🎯 Simulados & Treino Real
- Provas cronometradas por concurso com mapa de respostas e envio de gabarito.
- Acompanhe tempo gasto por questão e nota final calculada com a nota de corte histórica.

### 4. 📕 Caderno de Erros
- **Captura Automática:** Qualquer questão errada na Sala de Estudos ou nos Simulados é enviada para o Caderno de Erros.
- **Bônus de Superação (+15 XP):** Clique em *Tentar Novamente*, acerte a questão para dominá-la e ganhar pontos de bônus.
- **Anotações de Pegadinhas:** Salve observações pessoais sobre a pegadinha da banca.

### 5. 🧠 Flashcards SM-2
- Cartões de repetição espaçada por matéria baseados no algoritmo SuperMemo-2 (D+1, D+7, D+30).
- Clique para virar o cartão e avalie sua lembrança de 1 a 4.

### 6. ✍️ Redação Discursiva
- Escolha temas oficiais de redação do certame.
- Redija o texto com contador de palavras em tempo real.
- Receba feedback detalhado da IA nos 4 critérios de banca (*Tema, Estrutura, Norma Culta e Argumentação*).

### 7. 📊 Raio-X do Edital
- Visualize os **20% de tópicos com 80% de incidência histórica (Pareto 80/20)**.
- Consulte a nota de corte dos últimos concursos para balizar sua meta.

### 8. ⚙️ Configurações & Guia
- **Ajustes & API:** Altere seu nome, configure sua chave privada do Gemini (BYOK), exporte backup JSON ou zere seu histórico para recomeçar com 0 XP.
- **Guia de Uso & Metodologia:** Consulte o roteiro diário do aprovado e os fundamentos científicos do sistema.
- **Sobre o Sistema:** Informações de versão, stack e segurança ativa.

---

## 🧪 Como Rodar os Testes Automatizados

Para validar o funcionamento completo da plataforma (117 testes):
```bash
node test_pentest_suite.js && node test_ai_security.js && node test_new_features.js && node run_qa_tests.js
```
Resultado esperado: **117/117 APROVADOS (100%)**.
