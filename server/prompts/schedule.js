export const scheduleSystemInstruction = `
Você é o mais experiente Mentor e Estrategista de Ciclos de Estudo para Concursos Públicos Brasileiros (Fiscais, Militares, Saúde, Tribunais e Administrativos).
Sua missão é gerar um Cronograma Semanal Inteligente e Balanceado (Semana Tipo) adaptado rigorosamente ao concurso, à banca examinadora e à carga horária do estudante:
1. De SEGUNDA a QUINTA/SEXTA: Ciclo de estudo dinâmico alternando teoria das disciplinas com maior peso na banca com baterias imediatas de fixação.
2. DISCURSIVA / REDAÇÃO: Se o concurso tiver redação ou prova discursiva, insira 1 bloco semanal dedicado ao estilo da banca.
3. SÁBADO: Bloco de "📚 Resumo Integrado & Revisão das Matérias da Semana" + Bateria de Questões.
4. DOMINGO: "🎯 Simulado Cronometrado" e Descanso Estratégico (ou livre caso dias/semana < 7).
5. DIVISÃO DIÁRIA: Se o aluno tiver X horas por dia, divida o tempo em blocos de 45 a 90 minutos para evitar fadiga cognitiva.

Idioma: PORTUGUÊS DO BRASIL.
`;

export const schedulePromptTemplate = (subjects, hoursPerDay, daysPerWeek, examDate, careerInfo = {}) => {
  const careerName = careerInfo.name || 'Concurso Público';
  const banca = careerInfo.banca || 'Banca Oficial';
  const careerId = careerInfo.id || 'atrfb';

  let specificGuidance = '';
  if (careerId === 'ses_rj') {
    specificGuidance = `
DIRETRIZES ESPECÍFICAS PARA SES-RJ / IASERJ 2026 (Banca IBDO):
- Priorizar Legislação do SUS (Leis 8.080 e 8.142) e Conhecimentos Específicos do Cargo (Enfermagem ou Administração) nos primeiros dias da semana.
- Incluir 1 bloco de Redação Técnica / Dissertação sobre Temas de Saúde Pública na Sexta-feira.
- Incluir blocos de fixação gramatical de Língua Portuguesa IBDO.
    `;
  } else if (careerId === 'marinha_rm2') {
    specificGuidance = `
DIRETRIZES ESPECÍFICAS PARA MARINHA DO BRASIL (Praças RM2 - Banca DEnsM):
- 50% do tempo dedicado a Formação Militar-Naval (Estatuto dos Militares, RDM, Tradições Navais e História Marítima) e 50% para Língua Portuguesa DEnsM.
- Ênfase em memorização de artigos e prazos do RDM e cerimonial à Bandeira.
    `;
  } else if (careerId === 'atrfb') {
    specificGuidance = `
DIRETRIZES ESPECÍFICAS PARA RECEITA FEDERAL (ATRFB / AFRFB - Banca FGV):
- Priorizar Wave 1: Direito Tributário, Direito Previdenciário, Legislação Tributária/Aduaneira e Fluência de Dados.
- Sexta-feira: Redação e Estudo de Caso FGV.
    `;
  } else {
    specificGuidance = `
DIRETRIZES ESPECÍFICAS PARA ${careerName} (Banca ${banca}):
- Priorizar as disciplinas com maior relevância e peso no edital.
    `;
  }

  return `
Gere o Cronograma Semanal Estratégico (Semana Tipo) para um candidato ao concurso: ${careerName} (Banca: ${banca})

Parâmetros do aluno:
- Disciplinas Selecionadas para o Ciclo: ${subjects.join(', ')}
- Horas disponíveis por dia de estudo: ${hoursPerDay}h (Total diário: ${hoursPerDay * 60} minutos)
- Dias de estudo por semana: ${daysPerWeek} dias
- Data da prova: ${examDate || 'A definir / Pré-Edital'}

${specificGuidance}

REGRAS DE DISTRIBUIÇÃO:
1. day_of_week deve ser um número inteiro de 1 a 7 (1 = Segunda-feira, 2 = Terça-feira, ..., 6 = Sábado, 7 = Domingo).
2. Para cada dia selecionado (1 até ${daysPerWeek}), a soma de duration_minutes das tarefas deve ser aproximadamente ${hoursPerDay * 60} minutos.
3. Alterne disciplinas teóricas com resolução de exercícios e revisões ativas.
4. Forneça uma strategy_summary explicando a lógica pedagógica do ciclo.
`;
};

export const scheduleSchema = {
    type: 'OBJECT',
    properties: {
        schedule_data: {
            type: 'OBJECT',
            properties: {
                strategy_summary: { type: 'STRING', description: "Resumo da estratégia do ciclo semanal" }
            }
        },
        tasks: {
            type: 'ARRAY',
            items: {
                type: 'OBJECT',
                properties: {
                    day_of_week: { type: 'INTEGER', description: "1 (Segunda) a 7 (Domingo)" },
                    subject: { type: 'STRING' },
                    topic: { type: 'STRING', description: "Assunto específico, 'Redação Discursiva', 'Resumo Semanal' ou 'Exercícios'" },
                    duration_minutes: { type: 'INTEGER' }
                },
                required: ["day_of_week", "subject", "topic", "duration_minutes"]
            }
        }
    },
    required: ["schedule_data", "tasks"]
};
