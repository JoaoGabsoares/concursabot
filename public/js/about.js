import { showToast } from './utils.js';

export async function render(container) {
  const contactEmail = 'joao.dev.soares@gmail.com';

  container.innerHTML = `
    <div class="about-container fade-in" style="max-width: 960px; margin: 0 auto; padding: 1.5rem 1rem 4rem 1rem;">
      
      <!-- Top Hero Section -->
      <div class="card" style="padding: 2.5rem 2rem; text-align: center; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 2rem; position: relative; overflow: hidden;">
        <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(139,92,246,0.15); color:var(--color-primary); padding:0.4rem 1.2rem; border-radius:20px; font-weight:700; font-size:0.85rem; margin-bottom:1rem; border:1px solid rgba(139,92,246,0.35);">
          <span>✨ Projeto Vibecoding • Ecossistema ConcursaBot v2.5.0 Pro</span>
        </div>
        
        <h1 style="font-size: 2.3rem; font-weight: 800; color: var(--text-primary); margin: 0 0 1rem 0; letter-spacing: -0.02em;">
          O Cérebro de IA Criado para a sua Aprovação
        </h1>
        
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 760px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
          Uma plataforma inteligente, proprietária, rápida e 100% gratuita desenvolvida sob medida para concurseiros que não querem perder tempo com videoaulas infinitas de 60 horas ou resumos genéricos da internet.
        </p>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="#hub" class="btn btn-primary" style="padding:0.75rem 1.5rem; font-weight:700;">
            <span>🎯 Explorar Carreiras & Editais</span>
          </a>
          <a href="#contato" class="btn btn-secondary" style="padding:0.75rem 1.5rem; font-weight:700;">
            <span>✉️ Falar com o Desenvolvedor</span>
          </a>
        </div>
      </div>

      <!-- Grid: O Motivo, Manifesto & Vibecoding -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        
        <!-- Card 1: O Motivo -->
        <div class="card" style="padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <div style="font-size: 2rem; margin-bottom: 0.75rem;">💡</div>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.6rem 0;">
            Por que o ConcursaBot nasceu?
          </h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
            A maioria dos estudantes gasta <strong>80% do tempo assistindo vídeos lentos</strong> e apenas 20% resolvendo questões. O ConcursaBot inverte essa lógica: você lê a <strong>apostila em tela dividida</strong> ao lado de um <strong>Caderno Enxuto por IA</strong> que sintetiza leis secas, súmulas e pegadinhas em minutos.
          </p>
        </div>

        <!-- Card 2: A Missão & Privacidade -->
        <div class="card" style="padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <div style="font-size: 2rem; margin-bottom: 0.75rem;">🛡️</div>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.6rem 0;">
            Privacidade Total & Custo Zero
          </h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
            Sem mensalidades de R$ 150/mês, sem travas comerciais e sem vender seus dados de estudo. Seus simulados, anotações e progresso ficam armazenados no seu banco SQLite local, com suporte a <strong>PWA 100% Offline</strong>.
          </p>
        </div>

        <!-- Card 3: Metodologia Vibecoding -->
        <div class="card" style="padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-secondary);">
          <div style="font-size: 2rem; margin-bottom: 0.75rem;">⚡</div>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.6rem 0;">
            Metodologia Vibecoding
          </h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
            Desenvolvido sob a filosofia de <strong>Vibecoding</strong>: combinando visão de produto e necessidades reais de estudantes com pair programming contínuo via modelos de IA de última geração (Gemini 3.7 Flash) para construir soluções robustas em tempo recorde.
          </p>
        </div>

      </div>

      <!-- Section: Os 6 Pilares de Alta Performance -->
      <div class="card" style="padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-secondary); margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-primary); margin: 0 0 1.5rem 0; display:flex; align-items:center; gap:0.5rem;">
          <span>⚡</span> Os 6 Pilares Metodológicos do Sistema
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          
          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              1. 📖 Sala de Estudos Split-Screen
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Apostila oficial do seu curso lado a lado com o Caderno Enxuto gerado por IA para revisão relâmpago.
            </p>
          </div>

          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              2. 🧠 Repetição Espaçada D+1, D+7, D+30
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Prevenção ativa da curva do esquecimento com pauta diária automatizada de revisões.
            </p>
          </div>

          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              3. 🎯 Raio-X de Bancas & Pareto 80/20
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Estatísticas preditivas do que a FGV, Cesgranrio, IBDO e DEnsM mais cobram nas provas.
            </p>
          </div>

          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              4. 🎯 Caderno de Erros com Retreino
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Captura automática de falhas, anotações de lei seca e bônus de +15 XP ao superar o erro.
            </p>
          </div>

          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              5. ✍️ Corretor de Redação por IA
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Avaliação instantânea em 4 critérios de banca, nota de 0 a 100, feedback cirúrgico e +50 XP.
            </p>
          </div>

          <div style="padding:1rem; border-radius:8px; background:var(--bg-tertiary); border:1px solid var(--border-color);">
            <strong style="color:var(--text-primary); font-size:0.95rem; display:block; margin-bottom:0.35rem;">
              6. 📴 PWA & Fila de Sincronização Offline
            </strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
              Estude no metrô ou viagens sem internet; suas respostas sincronizam sozinhas quando a rede volta.
            </p>
          </div>

        </div>
      </div>

      <!-- Section: Contato & Desenvolvedor -->
      <div id="secao-contato" class="card" style="padding: 2.5rem 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-primary); background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, var(--bg-secondary) 100%);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem;">
          
          <div style="max-width:550px;">
            <div style="display:inline-flex; align-items:center; gap:0.4rem; color:var(--color-primary); font-weight:700; font-size:0.85rem; margin-bottom:0.5rem;">
              <span>📬 Canal Direto de Comunicação</span>
            </div>
            <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.6rem 0;">
              Fale com o Desenvolvedor
            </h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin: 0 0 1.25rem 0;">
              Tem sugestões de novas bancas, editais para incluir, feedbacks sobre o sistema ou dúvidas? Envie uma mensagem direta:
            </p>

            <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
              <div style="padding:0.6rem 1rem; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:8px; font-family:var(--font-mono); font-size:0.95rem; color:var(--text-primary); font-weight:600;">
                <span id="label-contact-email">${contactEmail}</span>
              </div>

              <button id="btn-copy-email" class="btn btn-secondary btn-sm" style="padding:0.65rem 1rem; font-weight:600; display:inline-flex; align-items:center; gap:0.4rem;">
                <span>📋 Copiar E-mail</span>
              </button>

                <a href="#guia" class="btn btn-secondary" style="text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
                  <span>📖 Guia de Uso das 12 Abas</span>
                </a>
                <a href="mailto:${contactEmail}" class="btn btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
                  <span>✉️ Abrir E-mail</span>
                </a>
              </div>
            </div>

          <div style="padding:1.25rem; border-radius:12px; background:var(--bg-tertiary); border:1px solid var(--border-color); min-width:240px;">
            <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-weight:700; margin-bottom:0.5rem;">
              Informações Técnicas
            </div>
            <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">
              <div>• <strong>Versão:</strong> 2.5.0 Pro (Zero-Build)</div>
              <div>• <strong>Engine:</strong> Node.js Built-in SQLite</div>
              <div>• <strong>IA:</strong> Google Gemini 3.7 Flash</div>
              <div>• <strong>Autor:</strong> João Soares</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;

  // Copiar E-mail com 1 clique
  const btnCopy = document.getElementById('btn-copy-email');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(contactEmail).then(() => {
        showToast('📋 E-mail copiado para a área de transferência!', 'success');
        btnCopy.innerHTML = '<span>✓ Copiado!</span>';
        setTimeout(() => {
          btnCopy.innerHTML = '<span>📋 Copiar E-mail</span>';
        }, 2500);
      }).catch(() => {
        showToast(`E-mail: ${contactEmail}`, 'info');
      });
    });
  }
}
