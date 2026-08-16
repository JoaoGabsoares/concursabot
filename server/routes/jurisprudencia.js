import express from 'express';
import db from '../database.js';

const router = express.Router();

// Banco de Súmulas Vinculantes e Jurisprudência de Alta Incidência em Concursos
const SUMULAS_DB = [
    {
        id: 'sv_13',
        tribunal: 'STF',
        tipo: 'Súmula Vinculante',
        numero: 'SV nº 13',
        materia: 'Direito Administrativo',
        tema: 'Nepotismo na Administração Pública',
        carreiras: ['atrfb', 'transpetro_adm', 'transpetro_log', 'bb_comercial', 'bb_ti', 'ses_rj', 'marinha_rm2'],
        enunciado: 'A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança ou, ainda, de função gratificada na administração pública direta e indireta em qualquer dos poderes da União, dos Estados, do Distrito Federal e dos Municípios, compreendido o ajuste mediante designações recíprocas, viola a Constituição Federal.',
        pegadinhaBanca: {
            banca: 'FGV / Cesgranrio / Cebraspe',
            alerta: 'A banca costuma afirmar que o parentesco vai até o 4º grau (o correto é até o 3º GRAU) ou que a súmula se aplica indistintamente a cargos políticos de Ministro/Secretário (a jurisprudência do STF ressalva cargos de natureza estritamente política, salvo flagrante falta de qualificação técnica ou fraude).'
        },
        relevancia: 'ALTÍSSIMA (Presente em 85% das provas com Dir. Administrativo)'
    },
    {
        id: 'sv_5',
        tribunal: 'STF',
        tipo: 'Súmula Vinculante',
        numero: 'SV nº 5',
        materia: 'Direito Administrativo',
        tema: 'Processo Administrativo Disciplinar (PAD) • Defesa Técnica por Advogado',
        carreiras: ['atrfb', 'transpetro_adm', 'transpetro_log'],
        enunciado: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.',
        pegadinhaBanca: {
            banca: 'FGV / Cesgranrio',
            alerta: 'As bancas tentam induzir o candidato ao erro dizendo que a ausência de advogado no PAD "anula o processo por cerceamento de defesa". A SV 5 do STF diz expressamente que NÃO ofende a Constituição.'
        },
        relevancia: 'ALTÍSSIMA'
    },
    {
        id: 'sumula_473_stf',
        tribunal: 'STF',
        tipo: 'Súmula Comum',
        numero: 'Súmula nº 473',
        materia: 'Direito Administrativo',
        tema: 'Princípio da Autotutela Administrativa',
        carreiras: ['atrfb', 'transpetro_adm', 'transpetro_log', 'ses_rj', 'marinha_rm2'],
        enunciado: 'A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial.',
        pegadinhaBanca: {
            banca: 'FGV / Cesgranrio / IBDO',
            alerta: 'As bancas invertem os verbos: dizem que a administração "revoga" atos ilegais e "anula" atos por conveniência. Regra de ouro: Ilegalidade gera ANULAÇÃO (efeito retroativo ex tunc); Mérito gera REVOGAÇÃO (efeito prospectivo ex nunc).'
        },
        relevancia: 'ALTÍSSIMA'
    },
    {
        id: 'sv_37',
        tribunal: 'STF',
        tipo: 'Súmula Vinculante',
        numero: 'SV nº 37',
        materia: 'Direito Constitucional / Servidores',
        tema: 'Aumento de Vencimentos pelo Poder Judiciário',
        carreiras: ['atrfb', 'transpetro_adm', 'marinha_rm2'],
        enunciado: 'Não cabe ao Poder Judiciário, que não tem função legislativa, aumentar vencimentos de servidores públicos sob o fundamento de isonomia.',
        pegadinhaBanca: {
            banca: 'FGV / Cesgranrio',
            alerta: 'A banca tenta aplicar o princípio da isonomia para justificar concessão de aumentos pelo Judiciário. A SV 37 proíbe expressamente tal equiparação salarial por via judicial.'
        },
        relevancia: 'ALTA'
    },
    {
        id: 'sumula_581_stj',
        tribunal: 'STJ',
        tipo: 'Súmula Comum',
        numero: 'Súmula nº 581',
        materia: 'Direito Tributário / Conhecimentos Bancários',
        tema: 'Recuperação Judicial e Devedores Solidários',
        carreiras: ['atrfb', 'bb_comercial'],
        enunciado: 'A recuperação judicial do devedor principal não impede o prosseguimento das ações e execuções ajuizadas contra terceiros devedores solidários ou coobrigados em geral, por garantia cambial, real ou fidejussória.',
        pegadinhaBanca: {
            banca: 'Cesgranrio / FGV',
            alerta: 'A banca afirma que a recuperação judicial suspende todas as ações inclusive contra avalistas e fiadores. O STJ pacificou que os coobrigados continuam respondendo integralmente.'
        },
        relevancia: 'ALTA'
    },
    {
        id: 'sumula_331_tst',
        tribunal: 'TST',
        tipo: 'Súmula Comum',
        numero: 'Súmula nº 331, V',
        materia: 'Direito do Trabalho / Terceirização nas Estatais',
        tema: 'Responsabilidade Subsidiária da Administração Pública',
        carreiras: ['transpetro_adm', 'transpetro_log', 'bb_comercial', 'bb_ti'],
        enunciado: 'Os entes integrantes da Administração Pública direta e indireta respondem subsidiariamente pelas obrigações trabalhistas inadimplidas pelo empregador terceirizado, caso evidenciada a sua conduta culposa no cumprimento das obrigações da Lei nº 8.666/93 e Lei 13.303/16, especialmente na fiscalização. Essa responsabilidade não decorre de mero inadimplemento.',
        pegadinhaBanca: {
            banca: 'Cesgranrio',
            alerta: 'A Cesgranrio costuma colocar que a responsabilidade do ente público é objetiva ou automática. O TST e o STF (Tema 246) exigem a comprovação inequívoca de CULPA IN VIGILANDO da Administração.'
        },
        relevancia: 'ALTÍSSIMA para Transpetro e Banco do Brasil'
    }
];

// GET /api/jurisprudencia/sumulas - Lista súmulas com filtros
router.get('/sumulas', (req, res) => {
    try {
        const { tribunal, materia, careerId, busca } = req.query;
        let lista = SUMULAS_DB;

        if (careerId) {
            lista = lista.filter(s => s.carreiras.includes(careerId));
            if (lista.length === 0) lista = SUMULAS_DB;
        }

        if (tribunal) {
            lista = lista.filter(s => s.tribunal.toLowerCase() === tribunal.toLowerCase());
        }

        if (materia) {
            lista = lista.filter(s => s.materia.toLowerCase().includes(materia.toLowerCase()));
        }

        if (busca) {
            const b = busca.toLowerCase();
            lista = lista.filter(s => 
                s.numero.toLowerCase().includes(b) ||
                s.tema.toLowerCase().includes(b) ||
                s.enunciado.toLowerCase().includes(b) ||
                s.materia.toLowerCase().includes(b)
            );
        }

        res.json({
            total: lista.length,
            sumulas: lista
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar súmulas: ' + err.message });
    }
});

// GET /api/jurisprudencia/desafio - Sorteia item de jurisprudência para teste
router.get('/desafio', (req, res) => {
    try {
        const { careerId } = req.query;
        let pool = SUMULAS_DB;
        if (careerId) {
            const filtered = SUMULAS_DB.filter(s => s.carreiras.includes(careerId));
            if (filtered.length > 0) pool = filtered;
        }

        const randomIndex = Math.floor(Math.random() * pool.length);
        const item = pool[randomIndex];

        res.json({
            id: item.id,
            tribunal: item.tribunal,
            numero: item.numero,
            materia: item.materia,
            tema: item.tema,
            enunciado: item.enunciado,
            pegadinha: item.pegadinhaBanca,
            relevancia: item.relevancia
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao gerar desafio de jurisprudência: ' + err.message });
    }
});

export default router;
