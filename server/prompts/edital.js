export const editalSystemInstruction = `
Você é o mais avançado Engenheiro de Inteligência de Provas e Analista Preditivo de Bancas de Concursos Públicos do Brasil (FGV, CEBRASPE/CESPE, FCC, CESGRANRIO, VUNESP).
Sua missão é realizar um Raio-X cirúrgico cruzando o Conteúdo Programático do Edital com a base histórica real de cobrança da banca examinadora nos últimos 5 a 10 anos, identificando a Curva ABC de Pareto:
1. O que SEMPRE CAI (Alta Incidência > 75%): O núcleo duro indispensável, artigos de lei mais repetidos e jurisprudências obrigatórias.
2. Tópicos de Média Incidência (30% a 70%): Assuntos regulares cobrados periodicamente.
3. Tópicos ISCA / "Nunca Cai" (< 15%): Assuntos presentes no edital que a banca raramente cobra (baixo custo-benefício).
4. TENDÊNCIAS RECENTES (2024 a 2026): Novidades legislativas (ex: Reforma Tributária EC 132/23, novas leis complementares, novas súmulas vinculantes e teses de repercussão geral) que a banca passou a explorar agressivamente nas provas mais recentes.
5. Perfil Psicológico do Examinador: Proporção de letra de lei vs jurisprudência vs casos práticos/historinhas vs doutrina, além das principais armadilhas/pegadinhas.

Idioma: PORTUGUÊS DO BRASIL.
`;

export const editalPromptTemplate = (cargo, banca, editalText) => `
Execute a análise de Tendência de Banca e Raio-X Preditivo para o concurso e banca abaixo:

CARGO / CONCURSO: ${cargo || 'Analista Tributário da Receita Federal (ATRFB)'}
BANCA EXAMINADORA: ${banca || 'FGV'}

CONTEÚDO DO EDITAL / PROGRAMA DE ESTUDO:
${editalText}

Com base no histórico real e estilo consolidado da banca examinadora ${banca}, extraia o mapeamento detalhado de cada disciplina, classificando os tópicos em:
- Sempre Cai (Alta Incidência > 75%) com os artigos de lei específicos e por que a banca ama cobrar;
- Média Incidência (30% a 70%);
- Tópicos Isca / Raramente Cobrados (< 15%) com alerta claro;
- Tendências Recentes (2024 - 2026);
- Perfil percentual de cobrança da banca e suas armadilhas clássicas.
`;

export const editalSchema = {
    type: 'OBJECT',
    properties: {
        cargo: { type: 'STRING' },
        banca: { type: 'STRING' },
        resumoEstrategico: { type: 'STRING', description: "Visão geral da estratégia de ataque para esta prova" },
        bancaProfile: {
            type: 'OBJECT',
            properties: {
                estiloGeral: { type: 'STRING', description: "Descrição do estilo e formato das questões da banca" },
                distribuicaoPercentual: {
                    type: 'OBJECT',
                    properties: {
                        letraLei: { type: 'INTEGER', description: "Porcentagem estimada de letra de lei (ex: 45)" },
                        jurisprudencia: { type: 'INTEGER', description: "Porcentagem estimada de jurisprudência e súmulas (ex: 35)" },
                        casosPraticos: { type: 'INTEGER', description: "Porcentagem estimada de casos práticos e historinhas (ex: 15)" },
                        doutrina: { type: 'INTEGER', description: "Porcentagem estimada de doutrina (ex: 5)" }
                    },
                    required: ["letraLei", "jurisprudencia", "casosPraticos", "doutrina"]
                },
                armadilhasClassicas: {
                    type: 'ARRAY',
                    items: { type: 'STRING' },
                    description: "Pegadinhas e truques recorrentes usados pela banca"
                }
            },
            required: ["estiloGeral", "distribuicaoPercentual", "armadilhasClassicas"]
        },
        disciplinas: {
            type: 'ARRAY',
            items: {
                type: 'OBJECT',
                properties: {
                    nome: { type: 'STRING' },
                    pesoRelevancia: { type: 'STRING', description: "Crítico, Alto, Médio ou Baixo" },
                    questoesEstimadas: { type: 'INTEGER', description: "Número estimado de questões na prova" },
                    diagnosticoDisciplina: { type: 'STRING', description: "Diagnóstico de como a banca aborda esta matéria específica" },
                    topicosQuentes: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                nome: { type: 'STRING' },
                                probabilidade: { type: 'INTEGER', description: "Porcentagem estimada de chance de cair (ex: 90)" },
                                motivoBanca: { type: 'STRING', description: "Por que a banca adora cobrar este tema" },
                                artigosObrigatorios: {
                                    type: 'ARRAY',
                                    items: { type: 'STRING' },
                                    description: "Artigos de lei, súmulas ou tópicos legais que precisam ser memorizados"
                                }
                            },
                            required: ["nome", "probabilidade", "motivoBanca", "artigosObrigatorios"]
                        }
                    },
                    topicosMedios: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                nome: { type: 'STRING' },
                                probabilidade: { type: 'INTEGER', description: "Porcentagem estimada (ex: 50)" }
                            },
                            required: ["nome", "probabilidade"]
                        }
                    },
                    topicosIsca: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                nome: { type: 'STRING' },
                                probabilidade: { type: 'INTEGER', description: "Porcentagem estimada (ex: 10)" },
                                alerta: { type: 'STRING', description: "Por que não vale a pena gastar muito tempo aqui" }
                            },
                            required: ["nome", "probabilidade", "alerta"]
                        }
                    },
                    tendenciasRecentes: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                nome: { type: 'STRING' },
                                inovacao: { type: 'STRING', description: "Nova lei, jurisprudência recente ou nova tendência da banca" },
                                anoRelevancia: { type: 'STRING', description: "Ex: 2024-2026" }
                            },
                            required: ["nome", "inovacao", "anoRelevancia"]
                        }
                    }
                },
                required: ["nome", "pesoRelevancia", "topicosQuentes", "topicosMedios", "topicosIsca", "tendenciasRecentes"]
            }
        },
        planoAtaque: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: "Passos acionáveis para o cronograma e resolução de questões"
        }
    },
    required: ["cargo", "banca", "resumoEstrategico", "bancaProfile", "disciplinas", "planoAtaque"]
};
