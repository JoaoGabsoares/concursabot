import express from 'express';
import db from '../database.js';
import { CAREERS_CATALOG } from '../careers.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// Matriz de Disciplinas e Afinidade entre Concursos com catálogo oficial
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
    afrfb: {
        nome: 'Receita Federal • Auditor-Fiscal (AFRFB)',
        banca: 'Fundação Getulio Vargas (FGV)',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 10, nucleo: 'geral' },
            { nome: 'Língua Inglesa', peso: 5, nucleo: 'geral' },
            { nome: 'Raciocínio Lógico-Matemático e Estatística', peso: 10, nucleo: 'exatas' },
            { nome: 'Economia e Finanças Públicas', peso: 10, nucleo: 'economia' },
            { nome: 'Direito Constitucional', peso: 10, nucleo: 'juridico' },
            { nome: 'Direito Administrativo', peso: 10, nucleo: 'juridico' },
            { nome: 'Direito Tributário', peso: 15, nucleo: 'especifico' },
            { nome: 'Legislação Tributária e Aduaneira', peso: 10, nucleo: 'especifico' },
            { nome: 'Auditoria Fiscal', peso: 10, nucleo: 'auditoria' },
            { nome: 'Contabilidade Geral e Avançada', peso: 10, nucleo: 'fiscal' },
            { nome: 'Tecnologia da Informação & Análise de Dados', peso: 10, nucleo: 'ti' }
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
    },
    adm_tribunais: {
        nome: 'Tribunais (TJ/TRT/TRE) • Técnico Judiciário - Área Administrativa',
        banca: 'FCC / FGV',
        disciplinas: [
            { nome: 'Língua Portuguesa', peso: 20, nucleo: 'geral' },
            { nome: 'Raciocínio Lógico-Matemático', peso: 10, nucleo: 'exatas' },
            { nome: 'Direito Constitucional', peso: 20, nucleo: 'juridico' },
            { nome: 'Direito Administrativo', peso: 20, nucleo: 'juridico' },
            { nome: 'Administração Pública e Gestão de Pessoas', peso: 20, nucleo: 'gestao' },
            { nome: 'Normas e Regimento Interno', peso: 10, nucleo: 'especifico' }
        ]
    }
};

// Helper: Formata data DD/MM/YYYY
function formatDateBR(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
}

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

// POST /api/aproveitamento/comparar - Calcula afinidade curricular e cronograma semanal com datas reais
router.post('/comparar', (req, res) => {
    try {
        const { 
            origemCareerId, 
            destinoCareerId, 
            dailyHours = 2, 
            daysPerWeek = 6,
            startDate 
        } = req.body;

        if (!origemCareerId || !destinoCareerId) {
            return res.status(400).json({ error: 'Informe origemCareerId e destinoCareerId.' });
        }

        const origem = SYLLABUS_MATRIX[origemCareerId];
        const destino = SYLLABUS_MATRIX[destinoCareerId];

        if (!origem || !destino) {
            return res.status(404).json({ error: 'Uma ou ambas as carreiras não foram encontradas no catálogo.' });
        }

        const parsedDailyHours = Math.max(1, Math.min(12, Number(dailyHours) || 2));
        const parsedDaysPerWeek = Math.max(1, Math.min(7, Number(daysPerWeek) || 6));
        const weeklyHoursCapacity = parsedDailyHours * parsedDaysPerWeek;

        const baseDate = startDate ? new Date(startDate) : new Date();

        if (origemCareerId === destinoCareerId) {
            return res.json({
                origem: origem.nome,
                destino: destino.nome,
                bancaDestino: destino.banca,
                percentualAproveitamento: 100,
                percentualGapInedito: 0,
                disciplinasComuns: destino.disciplinas.map(d => ({ ...d, status: 'DOMINADA' })),
                disciplinasIneditas: [],
                trilhaTransicao: [],
                cronogramaSemanal: [],
                estimativaSemanasTransicao: 0,
                totalHorasTransicao: 0,
                mensagem: 'Mesmo edital selecionado. Seu aproveitamento teórico é de 100%!',
                dicaEstrategica: 'Você já está no foco perfeito. Mantenha os simulados de revisão e o ritmo de questões!'
            });
        }

        const disciplinasComuns = [];
        const disciplinasIneditas = [];
        let pesoAproveitadoNoDestino = 0;

        for (const destDisc of destino.disciplinas) {
            const matchExato = origem.disciplinas.find(o => 
                o.nome.toLowerCase() === destDisc.nome.toLowerCase() ||
                (o.nucleo === destDisc.nucleo && o.nucleo !== 'especifico' && o.nucleo !== 'saude' && o.nucleo !== 'militar' && o.nucleo !== 'bancario')
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

        // Trilha de transição ordenada pelas disciplinas de maior peso
        const trilhaTransicao = [...disciplinasIneditas].sort((a, b) => b.peso - a.peso).map((d, index) => {
            const horasNecessarias = Math.round(d.peso * 1.5);
            return {
                passo: index + 1,
                disciplina: d.nome,
                pesoNoEdital: `${d.peso}%`,
                prioridade: d.peso >= 25 ? 'ALTA' : (d.peso >= 15 ? 'MÉDIA' : 'NORMAL'),
                sugestaoHorasEstudo: Math.max(6, horasNecessarias)
            };
        });

        const totalHorasGap = trilhaTransicao.reduce((acc, t) => acc + t.sugestaoHorasEstudo, 0);
        // Adiciona 20% de horas para revisão das matérias da base comum
        const totalHorasComunsRevisao = Math.round((disciplinasComuns.length * 4));
        const totalHorasTotais = totalHorasGap + totalHorasComunsRevisao;

        const totalSemanas = Math.max(2, Math.ceil(totalHorasTotais / weeklyHoursCapacity));

        // Geração do Cronograma Semanal com Datas Reais
        const cronogramaSemanal = [];
        let cursorData = new Date(baseDate);
        let gapItemsQueue = [...trilhaTransicao];
        let commonItemsQueue = [...disciplinasComuns];

        for (let semana = 1; semana <= totalSemanas; semana++) {
            const dataInicio = new Date(cursorData);
            const dataFim = new Date(cursorData);
            dataFim.setDate(dataInicio.getDate() + (parsedDaysPerWeek - 1));

            // Avança cursor 7 dias para a próxima semana
            cursorData.setDate(cursorData.getDate() + 7);

            // Aloca matérias nesta semana
            const materiasSemana = [];
            let horasRestantesSemana = weeklyHoursCapacity;

            // 70% do tempo semanal em matéria inédita (Gap)
            if (gapItemsQueue.length > 0 && horasRestantesSemana > 0) {
                const gapAtual = gapItemsQueue[0];
                const horasAlocadas = Math.min(horasRestantesSemana, Math.min(gapAtual.sugestaoHorasEstudo, Math.round(weeklyHoursCapacity * 0.75)));
                
                materiasSemana.push({
                    nome: gapAtual.disciplina,
                    horas: horasAlocadas,
                    tipo: 'INÉDITA (NOVO EDITAL)',
                    foco: `Teoria essencial + questões da banca ${destino.banca}`
                });

                gapAtual.sugestaoHorasEstudo -= horasAlocadas;
                horasRestantesSemana -= horasAlocadas;

                if (gapAtual.sugestaoHorasEstudo <= 0) {
                    gapItemsQueue.shift();
                }
            }

            // Restante do tempo em revisão de matéria comum
            if (horasRestantesSemana > 0 && commonItemsQueue.length > 0) {
                const comumAtual = commonItemsQueue[(semana - 1) % commonItemsQueue.length];
                materiasSemana.push({
                    nome: comumAtual.nome,
                    horas: horasRestantesSemana,
                    tipo: 'REVISÃO DA BASE COMUM',
                    foco: `Manutenção de retenção e resolução de questões de alto nível`
                });
            } else if (horasRestantesSemana > 0) {
                materiasSemana.push({
                    nome: destino.disciplinas[0]?.nome || 'Simulado Geral',
                    horas: horasRestantesSemana,
                    tipo: 'SIMULADO & REVISÃO GERAL',
                    foco: `Bateria de exercícios de fixação e diagnóstico de pontos fracos`
                });
            }

            const questoesMeta = weeklyHoursCapacity * 5; // Média de 5 questões por hora de estudo
            const focoPrincipal = materiasSemana[0] ? materiasSemana[0].nome : 'Revisão Consolidada';

            cronogramaSemanal.push({
                numeroSemana: semana,
                dataInicio: formatDateBR(dataInicio),
                dataFim: formatDateBR(dataFim),
                dataInicioISO: dataInicio.toISOString().split('T')[0],
                dataFimISO: dataFim.toISOString().split('T')[0],
                horasSemana: weeklyHoursCapacity,
                focoPrincipal,
                materias: materiasSemana,
                questoesAlvo: questoesMeta,
                metaDescricao: `Cobrir ${materiasSemana.map(m => `${m.nome} (${m.horas}h)`).join(' + ')} e resolver ${questoesMeta} questões da banca ${destino.banca}.`
            });
        }

        res.json({
            origem: origem.nome,
            destino: destino.nome,
            bancaDestino: destino.banca,
            percentualAproveitamento,
            percentualGapInedito,
            disciplinasComuns,
            disciplinasIneditas,
            trilhaTransicao,
            cronogramaSemanal,
            estimativaSemanasTransicao: totalSemanas,
            totalHorasTransicao: totalHorasTotais,
            weeklyHoursCapacity,
            dicaEstrategica: percentualAproveitamento >= 60 
                ? `Excelente migração! Você já tem ${percentualAproveitamento}% da base pronta (${disciplinasComuns.length} matérias). O foco deve ser 100% no gap inédito de ${percentualGapInedito}%.`
                : `Transição moderada (${percentualAproveitamento}% de base comum). Exigirá imersão nas ${disciplinasIneditas.length} disciplinas inéditas ao longo de ~${totalSemanas} semanas.`
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao comparar editais: ' + err.message });
    }
});

// POST /api/aproveitamento/sincronizar-cronograma - Persiste o plano de transição no SQLite
router.post('/sincronizar-cronograma', (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const { 
            origemCareerId, 
            destinoCareerId, 
            cronogramaSemanal, 
            dailyHours = 2, 
            daysPerWeek = 6 
        } = req.body;

        if (!destinoCareerId || !Array.isArray(cronogramaSemanal) || cronogramaSemanal.length === 0) {
            return res.status(400).json({ error: 'Dados incompletos para sincronizar cronograma de transição.' });
        }

        const origem = SYLLABUS_MATRIX[origemCareerId] || { nome: origemCareerId };
        const destino = SYLLABUS_MATRIX[destinoCareerId] || { nome: destinoCareerId };

        const title = `Plano de Transição: ${origem.nome} ➔ ${destino.nome}`;
        const configData = {
            origemCareerId,
            destinoCareerId,
            dailyHours,
            daysPerWeek,
            totalSemanas: cronogramaSemanal.length,
            sincronizadoEm: new Date().toISOString()
        };

        // 1. Cria ou Atualiza o registro em schedules
        const insertSched = db.prepare(`
            INSERT INTO schedules (title, config, schedule_data, exam_date, user_id, career_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        const result = insertSched.run(
            title,
            JSON.stringify(configData),
            JSON.stringify(cronogramaSemanal),
            cronogramaSemanal[cronogramaSemanal.length - 1]?.dataFimISO || null,
            userId,
            destinoCareerId
        );

        const scheduleId = result.lastInsertRowid;

        // 2. Insere as tarefas detalhadas em schedule_tasks
        const insertTask = db.prepare(`
            INSERT INTO schedule_tasks (schedule_id, day_of_week, week_number, subject, topic, duration_minutes, completed)
            VALUES (?, ?, ?, ?, ?, ?, 0)
        `);

        let taskCount = 0;
        const insertMany = db.transaction((semanas) => {
            for (const sem of semanas) {
                const weekNum = sem.numeroSemana;
                let dayCounter = 1; // 1 = Segunda, 2 = Terça...
                for (const mat of sem.materias) {
                    const durationMin = Math.round((mat.horas || 2) * 60);
                    insertTask.run(
                        scheduleId,
                        dayCounter,
                        weekNum,
                        mat.nome,
                        `Semana ${weekNum} (${sem.dataInicio} a ${sem.dataFim}) • ${mat.foco}`,
                        durationMin
                    );
                    taskCount++;
                    dayCounter = (dayCounter % 7) + 1;
                }
            }
        });

        insertMany(cronogramaSemanal);

        // 3. Registra no log de atividades para o Dashboard
        try {
            db.prepare(`
                INSERT INTO activity_log (type, detail) 
                VALUES (?, ?)
            `).run('study', `Sincronizou plano de transição para ${destino.nome} com ${taskCount} tarefas agendadas`);
        } catch (logErr) {
            console.warn('Aviso: Falha ao inserir activity_log de aproveitamento:', logErr.message);
        }

        res.json({
            success: true,
            scheduleId,
            totalTasks: taskCount,
            totalSemanas: cronogramaSemanal.length,
            message: `Plano de transição para "${destino.nome}" sincronizado com sucesso! Foram agendadas ${taskCount} sessões de estudo ao longo de ${cronogramaSemanal.length} semanas.`
        });
    } catch (err) {
        console.error('Erro ao sincronizar cronograma de aproveitamento:', err);
        res.status(500).json({ error: 'Falha ao sincronizar cronograma: ' + err.message });
    }
});

export default router;
