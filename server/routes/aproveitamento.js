import express from 'express';
import { CAREERS_CATALOG } from '../careers.js';

const router = express.Router();

// Matriz de Disciplinas e Afinidade entre Concursos
const SYLLABUS_MATRIX = {
    atrfb: {
        nome: 'Receita Federal • Analista-Tributário (ATRFB)',
        banca: 'Fundação Getulio Vargas (FGV)',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 15, nucleo: 'geral' },
            { nome: 'Língua Inglesa', peso: 5, nucleo: 'geral' },
            { nome: 'Raciocínio Lógico-Matemático e Estatística', peso: 10, nucleo: 'exatas' },
            { nome: 'Administração Geral e Pública', peso: 10, nucleo: 'gestao' },
            { nome: 'Direito Constitucional', peso: 10, nucleo: 'juridico' },
            { nome: 'Direito Administrativo', peso: 10, nucleo: 'juridico' },
            { nome: 'Direito Tributário', peso: 20, nucleo: 'especifico' },
            { nome: 'Legislação Tributária e Aduaneira', peso: 10, nucleo: 'especifico' },
            { nome: 'Contabilidade Geral', peso: 10, nucleo: 'fiscal' }
        ]
    },
    transpetro_adm: {
        nome: 'Transpetro • Técnico de Administração e Controle Jr',
        banca: 'Fundação Cesgranrio',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 20, nucleo: 'geral' },
            { nome: 'Matemática', peso: 10, nucleo: 'exatas' },
            { nome: 'Noções de Administração', peso: 35, nucleo: 'gestao' },
            { nome: 'Lei das Estatais (Lei nº 13.303/2016)', peso: 20, nucleo: 'juridico' },
            { nome: 'Técnicas de Arquivo e Ética no Setor Público', peso: 15, nucleo: 'gestao' }
        ]
    },
    transpetro_log: {
        nome: 'Transpetro • Técnico de Suprimento e Logística Jr',
        banca: 'Fundação Cesgranrio',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 20, nucleo: 'geral' },
            { nome: 'Matemática', peso: 10, nucleo: 'exatas' },
            { nome: 'Gestão de Estoques e Almoxarifado', peso: 35, nucleo: 'logistica' },
            { nome: 'Modais de Transporte e Movimentação', peso: 20, nucleo: 'logistica' },
            { nome: 'Lei das Estatais e Ética Pública', peso: 15, nucleo: 'juridico' }
        ]
    },
    bb_comercial: {
        nome: 'Banco do Brasil • Escriturário - Agente Comercial',
        banca: 'Fundação Cesgranrio',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 15, nucleo: 'geral' },
            { nome: 'Língua Inglesa', peso: 5, nucleo: 'geral' },
            { nome: 'Matemática', peso: 15, nucleo: 'exatas' },
            { nome: 'Atualidades do Mercado Financeiro', peso: 10, nucleo: 'bancario' },
            { nome: 'Conhecimentos Bancários', peso: 20, nucleo: 'bancario' },
            { nome: 'Conhecimentos de Informática', peso: 15, nucleo: 'ti' },
            { nome: 'Vendas e Negociação', peso: 20, nucleo: 'comercial' }
        ]
    },
    bb_ti: {
        nome: 'Banco do Brasil • Escriturário - Agente de TI',
        banca: 'Fundação Cesgranrio',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 15, nucleo: 'geral' },
            { nome: 'Língua Inglesa', peso: 5, nucleo: 'geral' },
            { nome: 'Matemática', peso: 15, nucleo: 'exatas' },
            { nome: 'Atualidades do Mercado Financeiro', peso: 10, nucleo: 'bancario' },
            { nome: 'Tecnologia da Informação & Banco de Dados', peso: 35, nucleo: 'ti' },
            { nome: 'Probabilidade e Estatística', peso: 20, nucleo: 'exatas' }
        ]
    },
    ses_rj: {
        nome: 'Saúde RJ / IASERJ 2026 • Técnico & Assistente',
        banca: 'Instituto IBDO',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 20, nucleo: 'geral' },
            { nome: 'Legislação do SUS (Lei 8.080/90 e 8.142/90)', peso: 30, nucleo: 'sus' },
            { nome: 'Direito Constitucional e Administrativo Básico', peso: 20, nucleo: 'juridico' },
            { nome: 'Conhecimentos Específicos em Saúde / Assistência', peso: 30, nucleo: 'saude' }
        ]
    },
    marinha_rm2: {
        nome: 'Marinha do Brasil • Praças RM2 / SMV',
        banca: 'Diretoria de Ensino da Marinha (DEnsM)',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 50, nucleo: 'geral' },
            { nome: 'Formação Militar-Naval e Tradições Navais', peso: 30, nucleo: 'militar' },
            { nome: 'Legislação Militar (Estatuto dos Militares)', peso: 20, nucleo: 'juridico' }
        ]
    }
};

// GET /api/aproveitamento/catalogo - Retorna catálogo de carreiras para seleção
router.get('/catalogo', (req, res) => {
    try {
        const lista = Object.keys(SYLLABUS_MATRIX).map(id => ({
            id,
            nome: SYLLABUS_MATRIX[id].nome,
            banca: SYLLABUS_MATRIX[id].banca,
            totalDisciplinas: SYLLABUS_MATRIX[id].disciplinas.length
        }));
        res.json(lista);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar catálogo: ' + err.message });
    }
});

// POST /api/aproveitamento/comparar - Calcula afinidade curricular e trilha de transição
router.post('/comparar', (req, res) => {
    try {
        const { origemCareerId, destinoCareerId } = req.body;

        if (!origemCareerId || !destinoCareerId) {
            return res.status(400).json({ error: 'Informe origemCareerId e destinoCareerId.' });
        }

        const origem = SYLLABUS_MATRIX[origemCareerId];
        const destino = SYLLABUS_MATRIX[destinoCareerId];

        if (!origem || !destino) {
            return res.status(404).json({ error: 'Uma ou ambas as carreiras não foram encontradas no catálogo.' });
        }

        if (origemCareerId === destinoCareerId) {
            return res.json({
                origem: origem.nome,
                destino: destino.nome,
                percentualAproveitamento: 100,
                percentualGapInedito: 0,
                disciplinasComuns: destino.disciplinas.map(d => ({ ...d, status: 'DOMINADA' })),
                disciplinasIneditas: [],
                trilhaTransicao: [],
                mensagem: 'Mesmo edital selecionado. Seu aproveitamento teórico é de 100%!'
            });
        }

        const disciplinasComuns = [];
        const disciplinasIneditas = [];
        let pesoAproveitadoNoDestino = 0;

        for (const destDisc of destino.disciplinas) {
            // Verifica se a matéria de destino existe na origem pelo mesmo nome ou mesmo núcleo
            const matchExato = origem.disciplinas.find(o => 
                o.nome.toLowerCase() === destDisc.nome.toLowerCase() ||
                (o.nucleo === destDisc.nucleo && o.nucleo !== 'especifico' && o.nucleo !== 'saude' && o.nucleo !== 'militar')
            );

            if (matchExato) {
                disciplinasComuns.push({
                    nome: destDisc.nome,
                    peso: destDisc.peso,
                    nucleo: destDisc.nucleo,
                    origemEquivalente: matchExato.nome,
                    status: 'APROVEITADA'
                });
                pesoAproveitadoNoDestino += destDisc.peso;
            } else {
                disciplinasIneditas.push({
                    nome: destDisc.nome,
                    peso: destDisc.peso,
                    nucleo: destDisc.nucleo,
                    status: 'INÉDITA_A_ESTUDAR'
                });
            }
        }

        const totalPesoDestino = destino.disciplinas.reduce((acc, d) => acc + d.peso, 0) || 100;
        const percentualAproveitamento = Math.round((pesoAproveitadoNoDestino / totalPesoDestino) * 100);
        const percentualGapInedito = 100 - percentualAproveitamento;

        // Trilha de transição ordenada pelas disciplinas de maior peso no novo edital
        const trilhaTransicao = [...disciplinasIneditas].sort((a, b) => b.peso - a.peso).map((d, index) => ({
            passo: index + 1,
            disciplina: d.nome,
            pesoNoEdital: `${d.peso}%`,
            prioridade: d.peso >= 25 ? 'ALTA' : (d.peso >= 15 ? 'MÉDIA' : 'NORMAL'),
            sugestaoHorasEstudo: Math.round(d.peso * 1.5)
        }));

        res.json({
            origem: origem.nome,
            destino: destino.nome,
            bancaDestino: destino.banca,
            percentualAproveitamento,
            percentualGapInedito,
            disciplinasComuns,
            disciplinasIneditas,
            trilhaTransicao,
            estimativaSemanasTransicao: Math.max(2, Math.ceil(disciplinasIneditas.length * 1.5)),
            dicaEstrategica: percentualAproveitamento >= 60 
                ? `Excelente migração! Você já tem ${percentualAproveitamento}% da base pronta. Foque apenas no gap de ${percentualGapInedito}%.`
                : `Transição moderada (${percentualAproveitamento}% de base comum). Exigirá imersão nas ${disciplinasIneditas.length} disciplinas inéditas.`
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao comparar editais: ' + err.message });
    }
});

export default router;
