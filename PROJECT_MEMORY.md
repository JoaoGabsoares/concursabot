# 🧠 ConcursaBot — Memória Mestra & Estado Permanente do Projeto (PROJECT_MEMORY.md)

> **Data de Atualização:** Agosto/2026 • Versão 2.5.0 Pro  
> **Objetivo deste documento:** Servir como **Fonte Única da Verdade** para o usuário e para qualquer agente de IA em futuras sessões, garantindo que nenhum contexto, decisão arquitetural, funcionalidade ou comando seja perdido mesmo com o truncamento de conversas.

---

## 📌 1. Sumário Executivo do Sistema

O **ConcursaBot** é uma plataforma web completa de preparação de alta performance para concursos públicos de elite, com suporte nativo a:
1. **Banco do Brasil (BB)** — Agente Comercial & Agente de Tecnologia (TI) • Banca Cesgranrio
2. **Receita Federal do Brasil (RFB)** — Analista-Tributário (ATRFB) e Auditor-Fiscal (AFRFB) • Banca FGV
3. **Saúde RJ (SES-RJ / IASERJ 2026)** — Técnico de Enfermagem e Assistente Administrativo • Banca Instituto IBDO
4. **Marinha do Brasil (SMV RM2 Praças)** — Formação Militar-Naval e Língua Portuguesa • Banca DEnsM
5. **Carreiras Customizadas** — Configurável pelo criador de perfis.

---

## 🏛️ 2. Arquitetura & Decisões Tecnológicas Cruciais

### ⚡ 2.1. Zero-Build SQLite Oficial (`node:sqlite` / `DatabaseSync`)
- **Problema anterior:** A biblioteca `better-sqlite3` utilizava compilação nativa C++ (via `node-gyp` e GCC), travando em caminhos com espaços (`Área de trabalho`), gerando erros de ABI (`NODE_MODULE_VERSION`) e quebrando no Node 24 (`Assertion failed: (env) != nullptr`).
- **Solução definitiva:** Migrado 100% para o **SQLite embutido no núcleo do Node.js (`import { DatabaseSync } from 'node:sqlite'`)**.
- **Resultado:** **Zero compilação**, inicialização instantânea (<50ms), compatibilidade total com Node 22 e 24, e sanitização universal de parâmetros `undefined -> null`.

### 📂 2.2. Ingestão RAG de PDFs em Fila de Micro-Lotes
- **Problema anterior:** Enviar 120 PDFs de uma só vez em um único formulário HTTP multipart estourava o limite de 50 arquivos do Multer e causava timeout de memória (`Unexpected end of JSON input`).
- **Solução definitiva:** O frontend (`public/js/rag.js`) implementa um **Smart Batch Queue Uploader** que envia os PDFs em lotes pequenos com barra de progresso em tempo real, tolerância a falhas por arquivo corrompido e resposta segura com `safeJson()`.

### 📱 2.3. Modo PWA Offline & Fila de Sincronização Local
- **Service Worker (`public/sw.js` v1.4.0):** Estratégia *Stale-While-Revalidate* para casca do app (HTML/CSS/JS) e *Network-First* com fallback offline para dados.
- **Fila Offline (`public/js/pwa-helper.js`):** Respostas a questões dadas offline são salvas em `concursa_offline_queue` no `localStorage` e sincronizadas automaticamente no banco de dados assim que a conexão de rede for restabelecida.

---

## 🎯 3. As 6 Novas Funcionalidades Estratégicas (v2.5.0)

| Funcionalidade | Rota Backend | Módulo Frontend | Status & Validação |
| :--- | :--- | :--- | :--- |
| **1. Caderno de Erros Inteligente** | `/api/caderno-erros` | `public/js/caderno-erros.js` | ✅ Captura automática ao errar questão, retreino com **+15 XP**, anotações pessoais e filtro por status. |
| **2. Corretor de Redação IA** | `/api/redacao` | `public/js/redacao.js` | ✅ Avaliação em 4 critérios oficiais (Tema, Estrutura, Gramática, Argumentação), nota 0-100, **+50 XP** e histórico. |
| **3. Raio-X de Incidência 80/20** | `/api/edital/raiox` | `public/js/edital.js` | ✅ Curva de Pareto destacando disciplinas de maior peso (ex: TI no BB TI, Vendas no BB Comercial, Tributário na RFB). |
| **4. Simulado PDF Imprimível** | N/A (Client-Side) | `public/js/simulado-print.js` | ✅ Layout oficial em 2 colunas diagramadas, folha de respostas (gabarito de bolinhas) e chave de correção. |
| **5. Modo Foco & Pomodoro** | N/A (DOM / CSS) | `public/js/study-room.js` | ✅ Oculta barras laterais, ativa timer flutuante, atalho `Esc` e confetes ao finalizar ciclo. |
| **6. PWA & Offline Sync** | N/A (Service Worker) | `public/sw.js`, `pwa-helper.js` | ✅ Cache local, aviso de rede flutuante e sincronização automática em background. |

---

## 🧪 4. Suítes de Testes Automatizados

O projeto possui **74 testes automatizados** com **100% de taxa de aprovação**:

1. **Testes das Novas Funcionalidades:**
   ```bash
   node test_new_features.js
   # Resultado: 24/24 APROVADOS (100%)
   ```
2. **Suíte Completa de QA & E2E:**
   ```bash
   node run_qa_tests.js
   # Resultado: 50/50 APROVADOS (100%)
   ```

---

## 🚀 5. Guia Rápido de Operação & Comandos

### Como Rodar o Servidor Localmente:
```bash
npm start
# Acesse no navegador: http://localhost:3000
```

### Como Acessar Remotamente com Segurança (Localtunnel):
```bash
# Terminal 1: Servidor
npm start

# Terminal 2: Túnel com URL customizada
npx localtunnel --port 3000 --subdomain concursa-joao
```
- **Proteção por PIN:** O sistema possui barreira de convite (`INVITE_CODES=JOAO-CONCURSO-2026,CONCURSA-PRO-PASS`) e Rate Limiter ativo para impedir acessos não autorizados.

---

## 🗺️ 6. Próximos Passos & Melhorias Futuras Mapeadas

1. **Geração de Áudio (TTS Opcional):** Explorar síntese de voz neural leve e humanizada para leitura das leis secas e cadernos enxutos.
2. **Exportação de Flashcards para o Anki (`.apkg`):** Permitir baixar os decks para o aplicativo Anki Mobile.
3. **Heatmap de Desempenho no Dashboard:** Gráfico visual estilo GitHub mostrando dias estudados e intensidade ao longo do ano.
