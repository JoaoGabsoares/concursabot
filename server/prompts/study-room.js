import { getExamContextForCareer } from '../exam-config.js';
import { getCareerConfig } from '../careers.js';
import db from '../database.js';

export function getBenchmarkContextForCareer(careerId = 'atrfb') {
  try {
    const benchmarks = db.prepare('SELECT * FROM exam_benchmarks WHERE career_id = ? ORDER BY edition_year DESC LIMIT 3').all(careerId);
    if (!benchmarks || benchmarks.length === 0) return '';

    const details = benchmarks.map(b => {
      const pegadinhas = b.pegadinhas_historicas_json ? JSON.parse(b.pegadinhas_historicas_json) : [];
      const discursivas = b.temas_discursivas_json ? JSON.parse(b.temas_discursivas_json) : null;
      return `\n- EDIÇÃO ${b.edition_year} (${b.banca}): Corte histórico: ${b.corte_historico || 'N/A'}. Pegadinhas oficiais da banca: ${pegadinhas.slice(0, 3).join('; ')}. ${discursivas?.tema_cobrado ? `Tema Discursiva: ${discursivas.tema_cobrado}` : ''}`;
    }).join('');

    return `\nDNA HISTÓRICO DOS 3 ÚLTIMOS CONCURSOS OFICIAIS VALIDADOS:\n${details}\n`;
  } catch (e) {
    return '';
  }
}

export function getStudyRoomSystemPrompt(careerId = 'atrfb') {
  const career = getCareerConfig(careerId);
  const examContext = getExamContextForCareer(careerId);
  const benchmarkContext = getBenchmarkContextForCareer(careerId);

  return `Você é um professor especialista no concurso ${career.name}. Sua função é auxiliar o aluno durante uma sessão de estudo ativa.
${examContext}
${benchmarkContext}
CONTEXTO: O aluno acabou de abrir um material de estudo e está estudando ele agora. Você tem acesso ao conteúdo integral do material.

REGRAS:
1. Sempre que o aluno fizer uma pergunta, responda com base no conteúdo do material fornecido e conectando com as exigências da banca examinadora (${career.bancas?.[0]?.name || 'banca oficial'})
2. Se a pergunta for um aprofundamento, forneça a jurisprudência dominante ou exemplo prático do cargo (${career.role || career.shortName})
3. Use uma linguagem clara, didática, estratégica e objetiva
4. Cite artigos de lei, súmulas e trechos relevantes do material
5. Destaque pegadinhas clássicas e como os conceitos caem em prova

FORMATO:
- Use markdown limpo e estruturado
- Use **negrito** para termos-chave
- Use tabelas e esquemas visuais simples quando comparar conceitos`;
}

export const STUDY_ROOM_SYSTEM_PROMPT = getStudyRoomSystemPrompt('atrfb');

export function getMaterialAnalysisPrompt(careerId = 'atrfb') {
  const career = getCareerConfig(careerId);
  const bancaName = career.bancas?.[0]?.name || 'banca oficial';

  return `Analise o material de estudo (PDF) fornecido e extraia as seguintes informações de forma estruturada, cruzando com o perfil de cobrança da banca ${bancaName} (${career.name}) e o histórico dos últimos concursos:

1. **Número da Aula**: Identifique o número da aula se presente (ex: Aula 01 -> 1, Aula 00 -> 0)
2. **Título/Assunto Principal**: Identifique o tema central e detalhado do material
3. **Matéria**: Identifique a disciplina
4. **Tópicos Abordados**: Liste todos os tópicos e subtópicos em ordem
5. **🔥 Tópicos Quentes na Banca (>75%)**: Quais conceitos, regras e teses deste material a banca ${bancaName} mais cobra com frequência alta
6. **🧊 Tópicos Isca (<15%)**: Quais partes teóricas ou introduções históricas deste material têm baixo retorno e podem ser lidas rapidamente
7. **🧭 Roteiro Estratégico de Leitura**: Indicação clara de onde o aluno deve começar e focar
8. **Artigos de Lei & Súmulas Obrigatórias**: Liste os artigos de lei e súmulas citados que o aluno DEVE grifar
9. **Resumo Estratégico**: Um resumo focado no que mais cai em provas deste concurso

Retorne em formato JSON.`;
}

export const MATERIAL_ANALYSIS_PROMPT = getMaterialAnalysisPrompt('atrfb');

export const MATERIAL_ANALYSIS_SCHEMA = {
  type: "OBJECT",
  properties: {
    numeroAula: { type: "INTEGER", description: "Número da aula (ex: 1 para Aula 01, 2 para Aula 02)" },
    titulo: { type: "STRING", description: "Título ou assunto principal do material" },
    materia: { type: "STRING", description: "Matéria (ex: Direito Tributário, Direito Constitucional)" },
    topicos: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          nome: { type: "STRING", description: "Nome do tópico" },
          subtopicos: { type: "ARRAY", items: { type: "STRING" }, description: "Subtópicos" }
        },
        required: ["nome"]
      },
      description: "Lista de tópicos abordados"
    },
    topicosQuentes: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Tópicos de alta incidência na banca examinadora (>75%)"
    },
    topicosIsca: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Tópicos com baixa incidência (<15%) que podem ser lidos rapidamente ou pulados"
    },
    roteiroLeitura: {
      type: "STRING",
      description: "Instrução estratégica de por onde começar e onde focar a leitura da apostila"
    },
    artigosLei: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Artigos de lei, súmulas e jurisprudências obrigatórias para grifar"
    },
    resumoEstrategico: { type: "STRING", description: "Resumo focado em concursos" }
  },
  required: ["titulo", "materia", "topicos", "topicosQuentes", "roteiroLeitura", "resumoEstrategico"]
};

export function buildCadernoEnxutoPrompt(materialContent, subject, title, careerId = 'atrfb') {
  const benchmarkCtx = getBenchmarkContextForCareer(careerId);
  return `Você é um Professor Mentor de Elite e Estrategista de Preparação para concursos públicos.
Transforme o texto da apostila integral abaixo em um **CADERNO ENXUTO DE LEITURA RÁPIDA (Filtro Inteligente da Banca)**.

DISCIPLINA: ${subject || 'Direito'}
AULA: ${title || 'Apostila de Estudo'}
${benchmarkCtx}

DIRETRIZES DE FILTRAGEM RIGOROSA:
1. ✂️ **ELIMINE A PALHA**: Descarte introduções históricas na Grécia/Roma Antiga, divagações teóricas do autor e doutrinas minoritárias que nunca caíram em prova (Tópicos Isca).
2. 📌 **CONCEITOS SECOS ESSENCIAIS**: Entregue as definições diretas e esquematizadas que servem de premissa para resolver questões.
3. ⚖️ **ARTIGOS DE LEI OBRIGATÓRIOS**: Apresente a literalidade dos artigos de lei e súmulas cruciais, destacando em **negrito** os termos que a banca costuma trocar em pegadinhas (ex: prazos, "salvo", "vedado", "exclusivo").
4. 🏛️ **JURISPRUDÊNCIA PACÍFICA DO STF/STJ**: Súmulas Vinculantes e Teses de Repercussão Geral que decidem as questões de prova.
5. ⚠️ **ALERTA DE ARMADILHAS CLÁSSICAS DA BANCA**: Como a banca monta a "historinha" para induzir o concurseiro ao erro neste tema.

TEXTO DO MATERIAL:
---
${materialContent.substring(0, 35000)}
---

Gere um documento Markdown editorial de altíssimo nível, limpo, agradável e 100% focado em leitura rápida de 15 a 25 minutos.`;
}

export function buildFixationQuestionsPrompt(materialSummary, questionCount = 10, scopeNote = '', mode = 'sempre_cai', careerId = 'atrfb') {
  const benchmarkCtx = getBenchmarkContextForCareer(careerId);
  const scopeBlock = scopeNote && scopeNote.trim()
    ? `
ATENÇÃO — ESCOPO DEFINIDO PELO ALUNO:
O aluno indicou que, nesta sessão, avançou especificamente até o seguinte ponto/tópico do material:
"${scopeNote.trim()}"

Gere as questões APENAS sobre o que está descrito acima. Ignore tópicos do material que estejam
claramente fora desse escopo (ex: capítulos/seções posteriores que o aluno ainda não leu).
`
    : '';

  let modeInstruction = '';
  if (mode === 'armadilhas') {
    modeInstruction = `
FOCO EXCLUSIVO: BATERIA DE ARMADILHAS & PEGADINHAS DA BANCA.
- Construa enunciados com casos práticos e pegadinhas reais já vistas nas últimas provas.
- Explore as clássicas armadilhas (troca de conceitos similares, exceções da lei, prazos e nulidades).`;
  } else if (mode === 'tendencias') {
    modeInstruction = `
FOCO EXCLUSIVO: TENDÊNCIAS RECENTES & JURISPRUDÊNCIA 2024-2026.
- Foque em inovações legislativas recentes, súmulas vinculantes recentes e teses de repercussão geral do STF/STJ.`;
  } else {
    modeInstruction = `
FOCO EXCLUSIVO: NÚCLEO DURO "SEMPRE CAI" (>75% DE INCIDÊNCIA NA BANCA).
- Foque estritamente nos artigos e conceitos mais cobrados da matéria com base no histórico das últimas 3 provas.`;
  }

  return `Com base no seguinte material de estudo que o aluno acabou de revisar, gere ${questionCount} questões de fixação para testar a compreensão dele.

MATERIAL ESTUDADO:
${materialSummary}
${benchmarkCtx}
${scopeBlock}
${modeInstruction}

REGRAS PARA AS QUESTÕES:
1. As questões devem focar no estilo da FGV (casos práticos com 5 alternativas A-E) ou CEBRASPE (julgamento de itens)
2. Misture níveis de dificuldade: 40% fácil, 40% médio, 20% difícil
3. As alternativas incorretas devem ser distratores plausíveis
4. A explicação deve citar a fundamentação legal (artigos de lei e jurisprudência)
5. Se o material já contiver questões comentadas da banca, NÃO repita essas questões — gere questões novas, abordando os conceitos por outro ângulo

Retorne as questões em formato JSON.`;
}

export const FIXATION_QUESTIONS_SCHEMA = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: {
      question: { type: "STRING", description: "Texto da questão" },
      options: {
        type: "ARRAY",
        items: { type: "STRING" },
        description: "Alternativas (5 opções A-E para múltipla escolha ou 2 para certo/errado)"
      },
      correctIndex: { type: "INTEGER", description: "Índice da alternativa correta (0-based)" },
      explanation: { type: "STRING", description: "Explicação detalhada citando o material e leis" },
      difficulty: { type: "STRING", description: "Nível: facil, medio, dificil" },
      topic: { type: "STRING", description: "Tópico do material relacionado" }
    },
    required: ["question", "options", "correctIndex", "explanation", "difficulty", "topic"]
  }
};

export function buildContextualChatPrompt(materialContent) {
  return `${STUDY_ROOM_SYSTEM_PROMPT}

CONTEÚDO DO MATERIAL DE ESTUDO:
---
${materialContent}
---

Responda às perguntas do aluno sempre com base neste material. Se necessário, complemente com seu conhecimento geral sobre o tema, mas sempre priorize o conteúdo do material.`;
}
