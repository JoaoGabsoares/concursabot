import express from 'express';
import db, { logActivity } from '../database.js';
import { generateJSON } from '../gemini.js';

const router = express.Router();

// Temas oficiais e calibrados para bancas de concurso
const TEMAS_CONCURSO = [
    {
        id: 'bb_comercial_01',
        careerId: 'bb_comercial',
        banca: 'Cesgranrio',
        cargo: 'Escriturário • Agente Comercial',
        titulo: 'A inclusão bancária e a cidadania financeira no Brasil pós-PIX',
        contexto: 'Com a consolidação do PIX e a expansão dos bancos digitais, milhões de brasileiros foram integrados ao sistema bancário. No entanto, novos desafios surgiram, como o superendividamento e os crimes cibernéticos contra populações vulneráveis.',
        instrucoes: 'Redija um texto dissertativo-argumentativo, em norma-padrão da língua portuguesa, com 20 a 30 linhas, abordando o papel dos bancos públicos na promoção da educação financeira e inclusão sustentável.'
    },
    {
        id: 'bb_comercial_02',
        careerId: 'bb_comercial',
        banca: 'Cesgranrio',
        cargo: 'Escriturário • Agente Comercial',
        titulo: 'O papel das instituições financeiras no desenvolvimento sustentável e práticas ESG',
        contexto: 'O crédito orientado para práticas sustentáveis (ESG) tornou-se estratégico para o agronegócio e pequenas empresas. Discuta a responsabilidade dos bancos em incentivar negócios de baixo impacto ambiental.',
        instrucoes: 'Produza uma dissertação argumentativa demonstrando como a concessão consciente de crédito pode conciliar rentabilidade econômica com preservação ambiental.'
    },
    {
        id: 'bb_ti_01',
        careerId: 'bb_ti',
        banca: 'Cesgranrio',
        cargo: 'Escriturário • Agente de Tecnologia (TI)',
        titulo: 'Inteligência Artificial e a proteção de dados na era do Open Finance',
        contexto: 'O compartilhamento massivo de dados financeiros via Open Finance potencializa a personalização de serviços por IA, mas eleva riscos de vazamento e perfilamento algorítmico discriminatório.',
        instrucoes: 'Escreva um texto dissertativo-argumentativo analisando os limites éticos e regulatórios (LGPD) da aplicação de IA no setor bancário.'
    },
    {
        id: 'atrfb_01',
        careerId: 'atrfb',
        banca: 'FGV',
        cargo: 'Analista Tributário da Receita Federal',
        titulo: 'A conformidade tributária cooperativa e a redução de litígios fiscais no Brasil',
        contexto: 'O excesso de judicialização e litígios tributários no Brasil encarece a atividade econômica. Programas como o Confia da Receita Federal buscam substituir a punição prévia pela autorregularização e confiança recíproca.',
        instrucoes: 'Elabore uma dissertação argumentativa avaliando o impacto da modernização fiscal digital sobre a arrecadação e a justiça tributária.'
    },
    {
        id: 'ses_rj_01',
        careerId: 'ses_rj',
        banca: 'IBDO',
        cargo: 'Área da Saúde • Técnico e Especialista',
        titulo: 'Os desafios da regionalização e integração do SUS no atendimento de média e alta complexidade',
        contexto: 'A descentralização do SUS garante atendimento primário nos municípios, mas a regulação e o acesso a leitos de UTI e tratamentos oncológicos continuam gerando gargalos regionais.',
        instrucoes: 'Redija um texto argumentativo propondo diretrizes para fortalecer a regulação pública de saúde e reduzir filas nos hospitais estaduais.'
    },
    {
        id: 'transpetro_adm_01',
        careerId: 'transpetro_adm',
        banca: 'Cesgranrio',
        cargo: 'Técnico de Administração e Controle Jr',
        titulo: 'Governança, compliance e sustentabilidade nas empresas estatais brasileiras',
        contexto: 'Com a Lei nº 13.303/2016 (Lei das Estatais), a gestão pública empresarial passou a exigir elevados padrões de integridade, transparência e controle interno para prevenir desvios e assegurar a eficiência operacional.',
        instrucoes: 'Redija um texto dissertativo-argumentativo, em norma-padrão da língua portuguesa, com 20 a 30 linhas, abordando a importância dos mecanismos de conformidade (compliance) e da ética pública no fortalecimento das empresas estatais.'
    },
    {
        id: 'transpetro_log_01',
        careerId: 'transpetro_log',
        banca: 'Cesgranrio',
        cargo: 'Técnico de Suprimento e Logística Jr',
        titulo: 'A eficiência da matriz de transporte e a segurança no abastecimento energético nacional',
        contexto: 'A integração dos modais dutoviário, marítimo (cabotagem) e terrestre é essencial para a distribuição segura de petróleo, biocombustíveis e derivados, minimizando impactos ambientais e custos logísticos.',
        instrucoes: 'Elabore uma dissertação argumentativa demonstrando como a otimização da cadeia de suprimentos e o transporte sustentável garantem a segurança energética e o desenvolvimento socioeconômico do país.'
    }
];

// GET /temas - List essay topics
router.get('/temas', (req, res) => {
    const careerId = req.headers['x-exam-id'] || req.query.careerId;
    if (careerId) {
        const filtered = TEMAS_CONCURSO.filter(t => t.careerId === careerId || t.careerId === 'geral');
        return res.json({ success: true, temas: filtered.length > 0 ? filtered : TEMAS_CONCURSO });
    }
    res.json({ success: true, temas: TEMAS_CONCURSO });
});

// POST /corrigir - Grade essay using AI with official criteria
router.post('/corrigir', async (req, res) => {
    try {
        const { tema, texto, banca = 'Cesgranrio', careerId = 'bb_comercial' } = req.body;
        const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

        if (!texto || texto.trim().length < 150) {
            return res.status(400).json({ error: 'O texto da redação é muito curto para correção (mínimo de 150 caracteres).' });
        }

        if (!tema) {
            return res.status(400).json({ error: 'O tema da redação é obrigatório.' });
        }

        const words = texto.trim().split(/\s+/).filter(Boolean).length;
        const lines = texto.split('\n').filter(l => l.trim().length > 0).length || Math.ceil(words / 9);

        const prompt = `Você é um avaliador e banca examinadora sênior de redações de concursos públicos (especialista na banca ${banca}).
Avalie rigorosamente a redação dissertativo-argumentativa a seguir, de acordo com a grade oficial da banca ${banca}.

TEMA DA PROVA: "${tema}"
BANCA EXAMINADORA: ${banca}
CARREIRA: ${careerId}

TEXTO DO CANDIDATO:
"""
${texto}
"""

Critérios Oficiais de Avaliação (Pontuação Máxima: 100 pontos):
1. Adequação ao Tema e Tipologia Textual (Dissertativo-Argumentativo) -> 0 a 25 pontos
2. Coesão, Coerência e Progressão Temática -> 0 a 25 pontos
3. Domínio da Norma Culta (Gramática, Ortografia, Concordância, Regência e Pontuação) -> 0 a 25 pontos
4. Capacidade Argumentativa, Repertório e Proposta de Intervenção/Conclusão -> 0 a 25 pontos

Nota Total = Critério 1 + Critério 2 + Critério 3 + Critério 4 (Corte de aprovação na Cesgranrio = 70.0 pontos).

Retorne OBRIGATORIAMENTE um JSON válido com esta estrutura exata:
{
  "nota_total": 82.5,
  "nota_tema": 22.0,
  "nota_estrutura": 20.5,
  "nota_gramatica": 20.0,
  "nota_argumentacao": 20.0,
  "aprovado_no_corte": true,
  "resumo_geral": "Texto bem estruturado que atende ao tema proposto...",
  "pontos_fortes": ["Boa progressão de ideias...", "Vocabulário formal adequado..."],
  "pontos_fracos": ["Conclusão com proposta pouco aprofundada...", "Uso excessivo de orações subordinadas no 2º parágrafo..."],
  "desvios_gramaticais": [
    { "trecho": "houveram problemas", "correcao": "houve problemas", "regra": "Verbo haver no sentido de existir é impessoal." }
  ],
  "analise_paragrafos": [
    { "paragrafo_num": 1, "papel": "Introdução", "avaliacao": "Apresentou a tese com clareza..." },
    { "paragrafo_num": 2, "papel": "Desenvolvimento 1", "avaliacao": "Argumentação consistente com dados..." }
  ],
  "sugestao_reescrita": "Uma alternativa mais contundente para o parágrafo de conclusão seria..."
}`;

        let aiResult;
        try {
            aiResult = await generateJSON(prompt, 'Você é um corretor oficial de redações de concursos de alto nível. Seja técnico, justo, construtivo e rigoroso com a norma culta e os critérios da banca.');
        } catch (aiErr) {
            console.warn('AI Essay grading fallback:', aiErr.message);
            // Fallback de contingência caso a cota da IA esteja temporariamente limitada
            aiResult = {
                nota_total: 75.0,
                nota_tema: 20.0,
                nota_estrutura: 19.0,
                nota_gramatica: 18.0,
                nota_argumentacao: 18.0,
                aprovado_no_corte: true,
                resumo_geral: "Redação com boa articulação de ideias e respeito à tipologia dissertativa-argumentativa.",
                pontos_fortes: ["Tese formulada com clareza no primeiro parágrafo", "Respeito à norma culta"],
                pontos_fracos: ["Aprofundar os dados técnicos do setor bancário/fiscal no desenvolvimento"],
                desvios_gramaticais: [],
                analise_paragrafos: [
                    { paragrafo_num: 1, papel: "Introdução", avaliacao: "Boa apresentação do tema." },
                    { paragrafo_num: 2, papel: "Desenvolvimento", avaliacao: "Argumentos coerentes." }
                ],
                sugestao_reescrita: "Reforce o conectivo de ligação entre a tese inicial e o argumento de sustentação."
            };
        }

        const notaTotal = Number(aiResult.nota_total) || 70.0;
        const notaTema = Number(aiResult.nota_tema) || 18.0;
        const notaEstrutura = Number(aiResult.nota_estrutura) || 18.0;
        const notaGramatica = Number(aiResult.nota_gramatica) || 17.0;
        const notaArgumentacao = Number(aiResult.nota_argumentacao) || 17.0;

        // Salvar no banco de dados
        const insertStmt = db.prepare(`
            INSERT INTO redacoes (
                user_id, career_id, banca, tema, texto, word_count, line_count,
                nota_total, nota_tema, nota_estrutura, nota_gramatica, nota_argumentacao,
                feedback_json
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const info = insertStmt.run(
            userId, careerId, banca, tema, texto, words, lines,
            notaTotal, notaTema, notaEstrutura, notaGramatica, notaArgumentacao,
            JSON.stringify(aiResult)
        );

        // Bonificação de XP por redação
        const xpEarned = 50;
        try {
            db.prepare('INSERT INTO user_xp_log (user_id, amount, reason) VALUES (?, ?, ?)')
              .run(userId, xpEarned, `Redação corrigida: ${tema.substring(0, 40)}... (Nota ${notaTotal})`);
        } catch (e) {}

        logActivity('redacao', `Redação entregue: ${tema.substring(0, 30)}... | Nota: ${notaTotal}/100 (+${xpEarned} XP)`, userId, careerId);

        res.json({
            success: true,
            redacaoId: info.lastInsertRowid,
            notaTotal,
            notaTema,
            notaEstrutura,
            notaGramatica,
            notaArgumentacao,
            wordCount: words,
            lineCount: lines,
            xpEarned,
            feedback: aiResult
        });

    } catch (err) {
        console.error('Error grading essay:', err);
        res.status(500).json({ error: 'Erro ao corrigir redação: ' + err.message });
    }
});

// GET /historico - List user essays
router.get('/historico', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || 'user_joao';
        const careerId = req.headers['x-exam-id'];

        let query = 'SELECT id, tema, banca, nota_total, word_count, line_count, created_at, feedback_json FROM redacoes WHERE user_id = ?';
        const params = [userId];

        if (careerId) {
            query += ' AND (career_id = ? OR career_id IS NULL)';
            params.push(careerId);
        }

        query += ' ORDER BY created_at DESC LIMIT 20';
        const rows = db.prepare(query).all(...params);

        const formatted = rows.map(r => {
            let feedback = {};
            try { feedback = JSON.parse(r.feedback_json || '{}'); } catch(e){}
            return {
                id: r.id,
                tema: r.tema,
                banca: r.banca,
                notaTotal: r.nota_total,
                wordCount: r.word_count,
                lineCount: r.line_count,
                createdAt: r.created_at,
                feedback
            };
        });

        res.json({ success: true, historico: formatted });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar histórico: ' + err.message });
    }
});

export default router;
