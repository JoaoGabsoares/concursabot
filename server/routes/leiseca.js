import express from 'express';
import db, { logActivity } from '../database.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// Banco de Artigos Essenciais e Pegadinhas Clássicas das Bancas
const LEI_SECA_DB = [
    {
        id: 'cf88_art5_inciso_x',
        lei: 'Constituição Federal de 1988',
        diploma: 'CF/88',
        artigo: 'Art. 5º, X',
        carreiras: ['atrfb', 'transpetro_adm', 'transpetro_log', 'bb_comercial', 'bb_ti', 'ses_rj', 'marinha_rm2'],
        banca: 'FGV / Cesgranrio / Cebraspe',
        tema: 'Direitos e Garantias Fundamentais • Inviolabilidade da Intimidade',
        textoOriginal: 'são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação;',
        pegadinha: {
            textoComErro: 'são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, sendo vedado o direito a indenização pelo dano material decorrente de sua violação;',
            palavraErrada: 'vedado',
            correcao: 'assegurado',
            explicacao: 'A banca costuma trocar "assegurado" por "vedado" ou restringir o dano apenas ao dano moral/material. O texto constitucional assegura expressamente a indenização por dano material OU moral.'
        }
    },
    {
        id: 'cf88_art37_xvi',
        lei: 'Constituição Federal de 1988',
        diploma: 'CF/88',
        artigo: 'Art. 37, XVI',
        carreiras: ['atrfb', 'transpetro_adm', 'transpetro_log', 'ses_rj', 'marinha_rm2'],
        banca: 'FGV / Cesgranrio / IBDO',
        tema: 'Administração Pública • Acumulação de Cargos Públicos',
        textoOriginal: 'é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários, observado em qualquer caso o disposto no inciso XI: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas;',
        pegadinha: {
            textoComErro: 'é permitida a acumulação remunerada de quaisquer cargos públicos, desde que haja compatibilidade de horários;',
            palavraErrada: 'permitida',
            correcao: 'vedada',
            explicacao: 'A regra geral na CF/88 é a VEDAÇÃO da acumulação remunerada de cargos públicos. As exceções são taxativas (2 de professor; 1 professor + 1 técnico/científico; 2 de profissionais de saúde).'
        }
    },
    {
        id: 'lei8112_art132',
        lei: 'Estatuto dos Servidores Públicos Federais (Lei 8.112/1990)',
        diploma: 'Lei 8.112/90',
        artigo: 'Art. 132',
        carreiras: ['atrfb'],
        banca: 'FGV',
        tema: 'Regime Disciplinar • Hipóteses de Demissão',
        textoOriginal: 'A demissão será aplicada nos seguintes casos: I - crime contra a administração pública; II - abandono de cargo; III - inassiduidade habitual; IV - improbidade administrativa; V - incontinência pública e conduta escandalosa, na repartição; VI - insubordinação grave em serviço; VII - ofensa física, em serviço, a servidor ou a particular, salvo em legítima defesa própria ou de outrem;',
        pegadinha: {
            textoComErro: 'A suspensão será aplicada nos seguintes casos: crime contra a administração pública e improbidade administrativa;',
            palavraErrada: 'suspensão',
            correcao: 'demissão',
            explicacao: 'Crime contra a administração pública e improbidade administrativa são hipóteses gravíssimas punidas com DEMISSÃO, e não suspensão ou advertência.'
        }
    },
    {
        id: 'lei13303_art29',
        lei: 'Lei das Estatais (Lei nº 13.303/2016)',
        diploma: 'Lei 13.303/16',
        artigo: 'Art. 29, I',
        carreiras: ['transpetro_adm', 'transpetro_log', 'bb_comercial', 'bb_ti'],
        banca: 'Cesgranrio',
        tema: 'Licitações nas Estatais • Dispensa de Licitação por Valor',
        textoOriginal: 'É dispensável a realização de licitação por empresas públicas e sociedades de economia mista: I - para obras e serviços de engenharia de valor até R$ 100.000,00, desde que não se refiram a parcelas de uma mesma obra ou serviço;',
        pegadinha: {
            textoComErro: 'É obrigatória a realização de licitação por empresas públicas para obras de engenharia de qualquer valor, vedada a dispensa;',
            palavraErrada: 'obrigatória',
            correcao: 'dispensável',
            explicacao: 'O Art. 29 da Lei 13.303/2016 prevê expressamente as hipóteses de DISPENSA de licitação por valor e por outros critérios de oportunidade e conveniência.'
        }
    },
    {
        id: 'ctn_art3',
        lei: 'Código Tributário Nacional (Lei nº 5.172/1966)',
        diploma: 'CTN',
        artigo: 'Art. 3º',
        carreiras: ['atrfb'],
        banca: 'FGV',
        tema: 'Direito Tributário • Conceito Legal de Tributo',
        textoOriginal: 'Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.',
        pegadinha: {
            textoComErro: 'Tributo é toda prestação pecuniária facultativa, em moeda ou cujo valor nela se possa exprimir, que constitua sanção de ato ilícito;',
            palavraErrada: 'facultativa',
            correcao: 'compulsória',
            explicacao: 'O tributo é COMPULSÓRIO (obrigatório por lei) e NÃO constitui sanção de ato ilícito (tributo não é multa).'
        }
    },
    {
        id: 'lei4595_art3',
        lei: 'Sistema Financeiro Nacional (Lei nº 4.595/1964)',
        diploma: 'Lei 4.595/64',
        artigo: 'Art. 3º',
        carreiras: ['bb_comercial', 'bb_ti'],
        banca: 'Cesgranrio',
        tema: 'Conhecimentos Bancários • Competências do CMN',
        textoOriginal: 'A política do Conselho Monetário Nacional objetivará: I - Adaptar o volume dos meios de pagamento às reais necessidades da economia nacional e seu processo de desenvolvimento; II - Regular o valor interno da moeda; III - Regular o valor externo da moeda e o equilíbrio no balanço de pagamentos;',
        pegadinha: {
            textoComErro: 'A política do Banco Central objetivará fixar unilateralmente a diretriz monetária sem qualquer subordinação ao Conselho Monetário Nacional;',
            palavraErrada: 'Banco Central',
            correcao: 'Conselho Monetário Nacional',
            explicacao: 'O órgão normativo máximo do SFN é o CONSELHO MONETÁRIO NACIONAL (CMN). O Banco Central é a autarquia executora.'
        }
    },
    {
        id: 'lei8080_art7',
        lei: 'Lei Orgânica da Saúde (Lei nº 8.080/1990)',
        diploma: 'Lei 8.080/90',
        artigo: 'Art. 7º',
        carreiras: ['ses_rj'],
        banca: 'IBDO',
        tema: 'Legislação do SUS • Princípios e Diretrizes',
        textoOriginal: 'As ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o Sistema Único de Saúde (SUS), são desenvolvidos de acordo com as diretrizes previstas no art. 198 da Constituição Federal, obedecendo ainda aos seguintes princípios: I - universalidade de acesso aos serviços de saúde em todos os níveis de assistência; II - integralidade de assistência;',
        pegadinha: {
            textoComErro: 'As ações do SUS obedecem ao princípio da seletividade de acesso, restrito aos cidadãos contribuintes da previdência social;',
            palavraErrada: 'seletividade',
            correcao: 'universalidade',
            explicacao: 'O SUS é regido pela UNIVERSALIDADE de acesso (a saúde é direito de todos e dever do Estado, independente de contribuição previdenciária).'
        }
    },
    {
        id: 'lei6880_art14',
        lei: 'Estatuto dos Militares (Lei nº 6.880/1980)',
        diploma: 'Lei 6.880/80',
        artigo: 'Art. 14',
        carreiras: ['marinha_rm2'],
        banca: 'DEnsM',
        tema: 'Legislação Militar-Naval • Hierarquia e Disciplina',
        textoOriginal: 'A hierarquia e a disciplina são a base institucional das Forças Armadas. A autoridade e a responsabilidade crescem com o grau hierárquico.',
        pegadinha: {
            textoComErro: 'A antiguidade e o tempo de serviço são a base institucional exclusiva das Forças Armadas, suplantando a hierarquia formal;',
            palavraErrada: 'antiguidade',
            correcao: 'hierarquia e a disciplina',
            explicacao: 'O Art. 14 do Estatuto dos Militares define com clareza pétrea que a HIERARQUIA e a DISCIPLINA são a base institucional das Forças Armadas.'
        }
    },
    {
        id: 'lei6880_art16',
        lei: 'Estatuto dos Militares (Lei nº 6.880/1980)',
        diploma: 'Lei 6.880/80',
        artigo: 'Art. 16',
        carreiras: ['marinha_rm2'],
        banca: 'DEnsM',
        tema: 'Legislação Militar-Naval • Postos, Graduações e Praças Especiais',
        textoOriginal: 'Posto é o grau hierárquico do oficial, conferido por ato do Presidente da República ou do Comandante de Força Singular e confirmado em Carta Patente. Graduação é o grau hierárquico da praça. São praças especiais os Guardas-Marinha e os Aspirantes a Oficial.',
        pegadinha: {
            textoComErro: 'Graduação é o grau hierárquico do oficial conferido em Carta Patente, sendo o Posto privativo das praças;',
            palavraErrada: 'Graduação é o grau hierárquico do oficial',
            correcao: 'Posto é o grau hierárquico do oficial',
            explicacao: 'POSTO pertence aos Oficiais (com Carta Patente); GRADUAÇÃO pertence às Praças.'
        }
    },
    {
        id: 'dec88545_art11',
        lei: 'Regulamento Disciplinar para a Marinha (Decreto nº 88.545/1983)',
        diploma: 'RDM',
        artigo: 'Art. 11',
        carreiras: ['marinha_rm2'],
        banca: 'DEnsM',
        tema: 'Legislação Militar-Naval • Penas Disciplinares',
        textoOriginal: 'As penas disciplinares a que estão sujeitos os militares da Marinha são: 1) repreensão; 2) impedimento disciplinar; 3) serviço extraordinário; 4) prisão disciplinar; 5) licenciamento e exclusão a bem da disciplina.',
        pegadinha: {
            textoComErro: 'As penas disciplinares na Marinha compreendem a multa pecuniária, o confisco de bens e a perda da patente militar;',
            palavraErrada: 'multa pecuniária',
            correcao: 'repreensão, impedimento e prisão disciplinar',
            explicacao: 'No RDM NÃO existe pena de multa pecuniária nem confisco de bens. As penas disciplinares são repreensão, impedimento, serviço extraordinário, prisão disciplinar e exclusão.'
        }
    },
    {
        id: 'lei9537_art3',
        lei: 'Segurança do Tráfego Aquaviário - LESTA (Lei nº 9.537/1997)',
        diploma: 'LESTA',
        artigo: 'Art. 3º',
        carreiras: ['marinha_rm2'],
        banca: 'DEnsM',
        tema: 'Legislação Militar-Naval • Autoridade Marítima',
        textoOriginal: 'Cabe à Autoridade Marítima promover a implementação e a execução desta Lei, com o propósito de assegurar a salvaguarda da vida humana e a segurança da navegação, no mar aberto e em hidrovias interiores, e a prevenção da poluição ambiental por parte de embarcações.',
        pegadinha: {
            textoComErro: 'Cabe privativamente à Polícia Federal a autoridade marítima e a fiscalização do tráfego aquaviário civil e militar;',
            palavraErrada: 'Polícia Federal',
            correcao: 'Autoridade Marítima (Comandante da Marinha)',
            explicacao: 'A Autoridade Marítima brasileira é exercida pelo COMANDANTE DA MARINHA (DPC e Capitanias dos Portos), e não pela Polícia Federal.'
        }
    }
];

// GET /api/leiseca/artigos - Lista artigos de alta incidência filtrados por carreira
router.get('/artigos', (req, res) => {
    try {
        const { careerId } = req.query;
        let artigos = LEI_SECA_DB;
        if (careerId) {
            artigos = LEI_SECA_DB.filter(item => item.carreiras.includes(careerId));
            if (artigos.length === 0) artigos = LEI_SECA_DB;
        }
        res.json({
            total: artigos.length,
            artigos: artigos.map(a => ({
                id: a.id,
                lei: a.lei,
                diploma: a.diploma,
                artigo: a.artigo,
                banca: a.banca,
                tema: a.tema,
                textoOriginal: a.textoOriginal
            }))
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao carregar artigos de lei seca: ' + err.message });
    }
});

// GET /api/leiseca/desafio - Sorteia um desafio de caça-pegadinhas com tempo regressivo
router.get('/desafio', (req, res) => {
    try {
        const { careerId } = req.query;
        let pool = LEI_SECA_DB;
        if (careerId) {
            const filtered = LEI_SECA_DB.filter(item => item.carreiras.includes(careerId));
            if (filtered.length > 0) pool = filtered;
        }

        const randomIndex = Math.floor(Math.random() * pool.length);
        const item = pool[randomIndex];

        res.json({
            desafioId: item.id,
            diploma: item.diploma,
            artigo: item.artigo,
            banca: item.banca,
            tema: item.tema,
            textoComErro: item.pegadinha.textoComErro,
            tempoLimiteSegundos: 15,
            recompensaXP: 10
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao gerar desafio de lei seca: ' + err.message });
    }
});

// POST /api/leiseca/responder - Valida a identificação do erro e concede XP
router.post('/responder', (req, res) => {
    try {
        const { desafioId, palavraSelecionada, tempoGastoSegundos } = req.body;
        const profileId = getAuthenticatedUserId(req);

        const item = LEI_SECA_DB.find(d => d.id === desafioId);
        if (!item) {
            return res.status(404).json({ error: 'Desafio não encontrado.' });
        }

        const normalizedSelected = (palavraSelecionada || '').trim().toLowerCase();
        const normalizedTarget = item.pegadinha.palavraErrada.toLowerCase();

        const acertou = normalizedSelected.includes(normalizedTarget) || normalizedTarget.includes(normalizedSelected);

        let xpGained = 0;
        if (acertou) {
            xpGained = 10;
            // Bônus de velocidade para respostas em até 8 segundos
            if (tempoGastoSegundos && tempoGastoSegundos <= 8) {
                xpGained += 5; // Total 15 XP
            }
            try {
                db.prepare('UPDATE user_profiles SET xp = xp + ? WHERE id = ?').run(xpGained, profileId);
                db.prepare('INSERT INTO user_xp_log (user_id, amount, reason) VALUES (?, ?, ?)').run(profileId, xpGained, `Acerto no Caça-Pegadinha de Lei Seca (${item.artigo})`);
            } catch (e) {
                // Ignore silent XP error
            }
        }

        res.json({
            acertou,
            palavraCorreta: item.pegadinha.palavraErrada,
            substituicaoEsperada: item.pegadinha.correcao,
            explicacao: item.pegadinha.explicacao,
            textoOriginal: item.textoOriginal,
            xpGanho: xpGained,
            tempoGastoSegundos
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao processar resposta da lei seca: ' + err.message });
    }
});

export default router;
