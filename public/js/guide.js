/**
 * ConcursaBot — Guia de Uso Completo & Interativo
 * public/js/guide.js
 */

export function render(container) {
  container.innerHTML = `
    <div class="guide-container fade-in">
      
      <!-- Top Banner / Hero -->
      <div class="card guide-hero-banner">
        <div class="guide-hero-header">
          <div style="max-width:750px; min-width:0;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem; flex-wrap:wrap;">
              <span class="badge badge-primary" style="font-weight:600; text-transform:uppercase; font-size:0.72rem; letter-spacing:0.05em;">Manual de Alta Performance</span>
              <span class="badge badge-secondary" style="font-size:0.75rem;">Versão 2.5.0 Pro</span>
            </div>
            <h1 class="guide-hero-title">
              📖 Guia de Uso: Como Dominar o ConcursaBot
            </h1>
            <p style="margin:0; font-size:0.95rem; color:var(--text-secondary); line-height:1.5;">
              Aprenda a utilizar cada ferramenta, entenda a metodologia de <strong>Estudo Ativo em Tela Dividida</strong> e descubra a rotina ideal para acelerar sua aprovação.
            </p>
          </div>

          <div class="guide-hero-actions">
            <a href="#hub" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.4rem;">
              <span>🎯 Escolher Concurso</span>
            </a>
            <a href="#study-room" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:0.4rem;">
              <span>📖 Sala de Estudos</span>
            </a>
          </div>
        </div>

        <!-- Search Bar & Category Filter Pills -->
        <div style="margin-top:1.5rem; display:flex; flex-direction:column; gap:0.8rem; width:100%;">
          <div class="guide-search-wrapper">
            <input 
              type="text" 
              id="guide-search-input" 
              placeholder="🔍 Buscar ferramenta, aba ou assunto (ex: redação, caderno de erros, flashcards)..." 
              class="guide-search-input"
            />
          </div>

          <!-- Quick Navigation Filter Pills -->
          <div class="guide-filter-pills" id="guide-filter-pills">
            <button class="btn btn-sm btn-primary guide-filter-btn active" data-filter="all">Todas as Seções</button>
            <button class="btn btn-sm btn-secondary guide-filter-btn" data-filter="passos">🚀 Comece Aqui (3 Passos)</button>
            <button class="btn btn-sm btn-secondary guide-filter-btn" data-filter="abas">📑 Guia das 12 Abas</button>
            <button class="btn btn-sm btn-secondary guide-filter-btn" data-filter="rotina">⚡ Rotina Diária</button>
            <button class="btn btn-sm btn-secondary guide-filter-btn" data-filter="gamificacao">🏆 XP & Níveis</button>
            <button class="btn btn-sm btn-secondary guide-filter-btn" data-filter="faq">❓ FAQ</button>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SEÇÃO 1: COMECE AQUI EM 3 PASSOS                             -->
      <!-- ============================================================ -->
      <section class="guide-section" id="sec-passos" style="margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
          <h2 style="font-size:1.35rem; margin:0; color:var(--text-primary);">🚀 Primeiros Passos em 3 Minutos</h2>
          <span class="badge badge-success">Essencial</span>
        </div>

        <div class="guide-step-grid">
          
          <!-- Passo 1 -->
          <div class="card" style="padding:1.25rem; border-top:3px solid var(--color-primary); display:flex; flex-direction:column; justify-content:space-between; min-width:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span style="font-size:1.5rem;">🎯</span>
                <span class="badge badge-primary" style="font-family:var(--font-mono); font-weight:bold;">PASSO 1</span>
              </div>
              <h3 style="font-size:1.1rem; margin:0 0 0.4rem 0; color:var(--text-primary);">Escolha o Concurso Alvo</h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 1rem 0;">
                No <strong>Hub de Concursos</strong>, selecione seu objetivo (Banco do Brasil, Receita, Marinha, etc.). O sistema filtra todo o conteúdo automaticamente.
              </p>
            </div>
            <a href="#hub" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Hub de Concursos →
            </a>
          </div>

          <!-- Passo 2 -->
          <div class="card" style="padding:1.25rem; border-top:3px solid #10B981; display:flex; flex-direction:column; justify-content:space-between; min-width:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span style="font-size:1.5rem;">👨‍🎓</span>
                <span class="badge badge-success" style="font-family:var(--font-mono); font-weight:bold;">PASSO 2</span>
              </div>
              <h3 style="font-size:1.1rem; margin:0 0 0.4rem 0; color:var(--text-primary);">Ajuste seu Perfil & Metas</h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 1rem 0;">
                Em <strong>Ajustes</strong>, defina suas horas diárias de estudo (ex: 2h, 4h), turnos e alterne para o tema <strong>Modo Escuro</strong> se preferir.
              </p>
            </div>
            <a href="#settings" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Ajustes do Aluno →
            </a>
          </div>

          <!-- Passo 3 -->
          <div class="card" style="padding:1.25rem; border-top:3px solid #8B5CF6; display:flex; flex-direction:column; justify-content:space-between; min-width:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span style="font-size:1.5rem;">📖</span>
                <span class="badge badge-warning" style="font-family:var(--font-mono); font-weight:bold;">PASSO 3</span>
              </div>
              <h3 style="font-size:1.1rem; margin:0 0 0.4rem 0; color:var(--text-primary);">Comece na Sala de Estudos</h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 1rem 0;">
                Abra a <strong>Sala de Estudos</strong>. Leia a teoria resumida à esquerda e resolva as 5 questões práticas à direita para agendar revisões D+1, D+7 e D+30!
              </p>
            </div>
            <a href="#study-room" class="btn btn-primary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Sala de Estudos →
            </a>
          </div>

        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SEÇÃO 2: GUIA COMPLETO DAS 12 ABAS                           -->
      <!-- ============================================================ -->
      <section class="guide-section" id="sec-abas" style="margin-bottom:2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
          <h2 style="font-size:1.35rem; margin:0; color:var(--text-primary);">📑 Guia Completo das 12 Ferramentas</h2>
          <span style="font-size:0.82rem; color:var(--text-secondary);">Clique no botão de qualquer card para ir direto à tela</span>
        </div>

        <div class="guide-grid-12" id="guide-cards-grid">
          
          <!-- 1. Início & Pauta -->
          <div class="card guide-feature-card" data-tags="inicio dashboard pauta meta streak xp nivel hoje">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">⚡</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">1. Início & Pauta Diária</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#inicio</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Seu centro de comando diário. Exibe metas do dia, revisões do ciclo Ebbinghaus pendentes, streak diário (🔥) e total de XP.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid var(--color-primary); font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Abra toda manhã para planejar seu dia de estudos.
              </div>
            </div>
            <a href="#inicio" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Acessar Início & Pauta →
            </a>
          </div>

          <!-- 2. Hub de Concursos -->
          <div class="card guide-feature-card" data-tags="hub concurso carreira banco brasil receita federal marinha ses rj saude">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">🎯</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">2. Hub de Concursos</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#hub</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Catálogo dos principais concursos. Permite alternar o foco do seu estudo, comparar notas de corte históricas e ver o edital.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #10B981; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Ao ativar um concurso, todo o acervo se adapta à carreira escolhida.
              </div>
            </div>
            <a href="#hub" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Acessar Hub de Concursos →
            </a>
          </div>

          <!-- 3. Sala de Estudos -->
          <div class="card guide-feature-card" data-tags="sala de estudos split screen caderno enxuto teoria questoes aula pdf">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📖</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">3. Sala de Estudos (Split)</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#study-room</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                O coração do ConcursaBot. Divide a tela em duas partes: teoria resumida à esquerda e 5 questões práticas à direita.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #3B82F6; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Finalizar a aula agenda automaticamente revisões D+1, D+7 e D+30.
              </div>
            </div>
            <a href="#study-room" class="btn btn-primary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Entrar na Sala de Estudos →
            </a>
          </div>

          <!-- 4. Caderno de Erros -->
          <div class="card guide-feature-card" data-tags="caderno de erros erros retry refazer questoes notas correcao">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📕</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">4. Caderno de Erros</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#caderno-erros</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Questões erradas são salvas aqui com explicação da IA. Adicione notas e use <strong>"Tentar Novamente"</strong> (+15 XP ao acertar).
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #EF4444; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Reserve 15 min ao fim do dia para limpar seu Caderno de Erros.
              </div>
            </div>
            <a href="#caderno-erros" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Abrir Caderno de Erros →
            </a>
          </div>

          <!-- 5. Corretor de Redações IA -->
          <div class="card guide-feature-card" data-tags="redacao discursiva correcao cesgranrio fgv criterios tema texto">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">✍️</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">5. Laboratório de Redação IA</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#redacao</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Treine temas de provas e receba correção em 4 critérios oficiais (Tema, Estrutura, Norma Culta e Argumentação) com +50 XP.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #8B5CF6; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Escreva 1 redação por semana para garantir segurança na discursiva.
              </div>
            </div>
            <a href="#redacao" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Treinar Redação Discursiva →
            </a>
          </div>

          <!-- 6. Raio-X & Pareto 80/20 -->
          <div class="card guide-feature-card" data-tags="raiox edital pareto 80 20 incidencia banca recorrencia peso">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📊</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">6. Raio-X & Pareto 80/20</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#edital</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Estatísticas da banca. Revela os 20% do edital que correspondem a 80% das questões de prova, com lista de "Tópicos de Ouro".
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #F59E0B; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Na reta final, priorize 100% os Tópicos de Ouro do Raio-X.
              </div>
            </div>
            <a href="#edital" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Consultar Raio-X da Banca →
            </a>
          </div>

          <!-- 7. Banco de Questões -->
          <div class="card guide-feature-card" data-tags="questoes banco exercicios treino fixacao gabarito comentado">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📝</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">7. Questões Inéditas</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#questions</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Gere baterias ilimitadas de questões no estilo exato da sua banca, com filtros por matéria e gabarito fundamentado na Lei Seca.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #10B981; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Cada questão correta rende +10 XP no seu perfil.
              </div>
            </div>
            <a href="#questions" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Resolver Questões →
            </a>
          </div>

          <!-- 8. Simulados Oficiais -->
          <div class="card guide-feature-card" data-tags="simulados prova cronometro tempo pressao ranking nota corte">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">⏱️</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">8. Simulados Oficiais</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#simulados</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Treine gestão de tempo em condições reais com contagem regressiva e cálculo ponderado de pesos por matéria (+150 XP).
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #EC4899; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Faça 1 simulado todo sábado para calibrar seu ritmo de prova.
              </div>
            </div>
            <a href="#simulados" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Iniciar um Simulado →
            </a>
          </div>

          <!-- 9. Flashcards -->
          <div class="card guide-feature-card" data-tags="flashcards memorizacao repeticao espacada prazos sumulas anki">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">🃏</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">9. Flashcards Inteligentes</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#flashcards</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Fixe prazos, artigos literais de lei, súmulas e exceções com repetição espaçada SM-2 (Fácil, Bom, Difícil, Errei).
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #F59E0B; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Revise flashcards no transporte ou intervalos do dia pelo celular.
              </div>
            </div>
            <a href="#flashcards" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Revisar Flashcards →
            </a>
          </div>

          <!-- 10. Cronograma & Ciclos -->
          <div class="card guide-feature-card" data-tags="cronograma schedule ciclo agenda google calendario planejamento">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📅</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">10. Cronograma & Ciclos</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#schedule</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Organiza sua rotina semanal distribuindo as matérias pelos seus horários livres, com sincronização para Google Agenda (.ics).
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #6366F1; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Importe o arquivo .ics no celular para receber lembretes de estudo.
              </div>
            </div>
            <a href="#schedule" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Ver Meu Cronograma →
            </a>
          </div>

          <!-- 11. Tutor IA 24/7 -->
          <div class="card guide-feature-card" data-tags="tutor mentor chat duvidas inteligencia artificial jurisprudencia">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">💬</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">11. Tutor IA 24/7</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#tutor</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Professor particular disponível 24h. Peça explicações simplificadas, mnemônicos e exemplos práticos da jurisprudência.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #0EA5E9; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Peça ao tutor: <em>"Explique este artigo com um exemplo do cotidiano"</em>.
              </div>
            </div>
            <a href="#tutor" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Conversar com o Tutor IA →
            </a>
          </div>

          <!-- 12. Acervo RAG -->
          <div class="card guide-feature-card" data-tags="rag acervo pdf apostilas upload busca semantica material">
            <div>
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
                <span style="font-size:1.5rem;">📂</span>
                <div style="min-width:0;">
                  <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">12. Acervo RAG (PDFs)</h3>
                  <code style="font-size:0.75rem; color:var(--color-primary);">#rag</code>
                </div>
              </div>
              <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.45; margin:0 0 0.75rem 0;">
                Envie suas próprias apostilas e livros em PDF. A IA indexa tudo e permite buscas semânticas em milhares de páginas.
              </p>
              <div style="background:var(--bg-primary); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; border-left:3px solid #14B8A6; font-size:0.8rem; color:var(--text-secondary);">
                💡 <strong>Dica Pro:</strong> Transforme qualquer PDF próprio em aula com questões na Sala de Estudos.
              </div>
            </div>
            <a href="#rag" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
              Acessar Base de Acervo →
            </a>
          </div>

        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SEÇÃO 3: ROTINA DIÁRIA RECOMENDADA                           -->
      <!-- ============================================================ -->
      <section class="guide-section" id="sec-rotina" style="margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
          <h2 style="font-size:1.35rem; margin:0; color:var(--text-primary);">⚡ Rotina Diária de Alto Rendimento</h2>
          <span class="badge badge-primary">Método ConcursaBot</span>
        </div>

        <div class="card" style="padding:1.4rem;">
          <div class="guide-routine-grid">
            
            <div style="background:var(--bg-primary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color); min-width:0;">
              <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem;">
                <span style="font-size:1.25rem;">🌅</span>
                <strong style="color:var(--text-primary); font-size:0.92rem;">Bloco 1: Teoria Ativa (45 min)</strong>
              </div>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.45;">
                Abra a <strong>Sala de Estudos</strong> (<code>#study-room</code>). Leia o Caderno Enxuto e responda às 5 questões de fixação.
              </p>
            </div>

            <div style="background:var(--bg-primary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color); min-width:0;">
              <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem;">
                <span style="font-size:1.25rem;">☀️</span>
                <strong style="color:var(--text-primary); font-size:0.92rem;">Bloco 2: Treino & Cards (30 min)</strong>
              </div>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.45;">
                Resolva 15 a 20 questões em <strong>Questões</strong> (<code>#questions</code>) e revise os <strong>Flashcards</strong> (<code>#flashcards</code>) do dia.
              </p>
            </div>

            <div style="background:var(--bg-primary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color); min-width:0;">
              <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem;">
                <span style="font-size:1.25rem;">🌙</span>
                <strong style="color:var(--text-primary); font-size:0.92rem;">Bloco 3: Blindagem (15 min)</strong>
              </div>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.45;">
                Acesse o <strong>Caderno de Erros</strong> (<code>#caderno-erros</code>). Refaça os erros do dia e anote os pontos de atenção.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SEÇÃO 4: GAMIFICAÇÃO & NÍVEIS DE XP                          -->
      <!-- ============================================================ -->
      <section class="guide-section" id="sec-gamificacao" style="margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
          <h2 style="font-size:1.35rem; margin:0; color:var(--text-primary);">🏆 Gamificação: Tabela de XP & Níveis</h2>
          <span class="badge badge-warning">Motivação Diária</span>
        </div>

        <div class="card" style="padding:1.25rem;">
          <div class="guide-table-wrapper">
            <table class="guide-table">
              <thead>
                <tr style="border-bottom:2px solid var(--border-color); text-align:left;">
                  <th style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Ação de Estudo</th>
                  <th style="padding:0.6rem 0.6rem; color:var(--text-secondary);">XP Concedido</th>
                  <th style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:0.6rem 0.6rem;">📖 Concluir 1 Aula na Sala de Estudos</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:var(--color-primary); font-weight:bold;">+50 XP</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Avança edital</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:0.6rem 0.6rem;">🎯 Acertar Questão de Treino</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:var(--color-status-success); font-weight:bold;">+10 XP</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Fixação de lei</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:0.6rem 0.6rem;">🔥 Superar Questão no Caderno de Erros</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:#F59E0B; font-weight:bold;">+15 XP</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Elimina pontos fracos</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:0.6rem 0.6rem;">✍️ Escrever e Corrigir Redação IA</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:#8B5CF6; font-weight:bold;">+50 XP</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Treino discursivo</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:0.6rem 0.6rem;">⏱️ Finalizar Simulado Oficial</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:#EC4899; font-weight:bold;">+150 XP</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Gestão de tempo</td>
                </tr>
                <tr>
                  <td style="padding:0.6rem 0.6rem;">🔥 Manter Streak Diário Consecutivo</td>
                  <td style="padding:0.6rem 0.6rem; font-family:var(--font-mono); color:#EF4444; font-weight:bold;">+25 XP / dia</td>
                  <td style="padding:0.6rem 0.6rem; color:var(--text-secondary);">Disciplina</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- SEÇÃO 5: PERGUNTAS FREQUENTES (FAQ)                          -->
      <!-- ============================================================ -->
      <section class="guide-section" id="sec-faq" style="margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
          <h2 style="font-size:1.35rem; margin:0; color:var(--text-primary);">❓ Perguntas Frequentes (FAQ)</h2>
          <span class="badge badge-secondary">Tire suas dúvidas</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          
          <details class="card" style="padding:1.1rem; cursor:pointer;">
            <summary style="font-weight:600; color:var(--text-primary); font-size:0.95rem; outline:none;">
              📱 Posso usar o ConcursaBot no celular ou tablet?
            </summary>
            <p style="margin:0.75rem 0 0 0; font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">
              <strong>Sim!</strong> O ConcursaBot possui design 100% responsivo e arquitetura PWA. Você pode abrir pelo navegador do celular e tocar em <em>"Adicionar à Tela Inicial"</em> para usá-lo como app nativo offline.
            </p>
          </details>

          <details class="card" style="padding:1.1rem; cursor:pointer;">
            <summary style="font-weight:600; color:var(--text-primary); font-size:0.95rem; outline:none;">
              🔒 Onde meus dados de estudo e anotações ficam salvos?
            </summary>
            <p style="margin:0.75rem 0 0 0; font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">
              Todos os seus dados ficam salvos localmente no banco de dados SQLite (<code>concursabot.db</code>). Total privacidade, sem rastreamento ou venda de dados.
            </p>
          </details>

          <details class="card" style="padding:1.1rem; cursor:pointer;">
            <summary style="font-weight:600; color:var(--text-primary); font-size:0.95rem; outline:none;">
              🔄 O que fazer se eu quiser recomeçar meu progresso do zero?
            </summary>
            <p style="margin:0.75rem 0 0 0; font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">
              Basta clicar no botão <strong>"Resetar"</strong> presente no painel de Início (<code>#inicio</code>). Você pode escolher resetar apenas o dia, a semana, o mês ou todo o histórico geral com 1 clique.
            </p>
          </details>

          <details class="card" style="padding:1.1rem; cursor:pointer;">
            <summary style="font-weight:600; color:var(--text-primary); font-size:0.95rem; outline:none;">
              📑 Posso adicionar matérias ou PDFs de outros concursos?
            </summary>
            <p style="margin:0.75rem 0 0 0; font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">
              Sim! Na aba <strong>Base de Conhecimento</strong> (<code>#rag</code>), você pode enviar qualquer apostila em PDF. A IA fará a indexação automática para buscas e geração de questões.
            </p>
          </details>

        </div>
      </section>

      <!-- Bottom Call to Action -->
      <div class="card" style="padding:1.8rem 1.2rem; text-align:center; background:linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%); border:1px solid rgba(59,130,246,0.2);">
        <h3 style="font-size:1.25rem; margin:0 0 0.4rem 0; color:var(--text-primary);">Pronto para começar seu estudo de alto rendimento?</h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin:0 0 1.2rem 0;">Escolha seu concurso agora e dê o primeiro passo rumo à sua posse.</p>
        <a href="#hub" class="btn btn-primary" style="padding:0.7rem 1.6rem; font-size:0.95rem;">
          🚀 Ir para o Hub de Concursos
        </a>
      </div>

    </div>
  `;

  // Attach search and filter listeners
  setupGuideInteractions();
}

function setupGuideInteractions() {
  const searchInput = document.getElementById('guide-search-input');
  const cards = document.querySelectorAll('.guide-feature-card');
  const filterBtns = document.querySelectorAll('.guide-filter-btn');

  // Search filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const tags = card.getAttribute('data-tags') || '';
        if (!q || text.includes(q) || tags.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Category pills filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('btn-primary', 'active');
        b.classList.add('btn-secondary');
      });
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary', 'active');

      const filter = btn.getAttribute('data-filter');
      const sections = document.querySelectorAll('.guide-section');

      if (filter === 'all') {
        sections.forEach(s => s.style.display = 'block');
      } else {
        sections.forEach(s => {
          if (s.id === `sec-${filter}`) {
            s.style.display = 'block';
            s.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            s.style.display = 'none';
          }
        });
      }
    });
  });
}
