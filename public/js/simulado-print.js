// Módulo de Geração de Caderno de Prova Oficial Impresso (PDF / A4 2 Colunas)

export function generatePrintExamBooklet(simulado, questions = []) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor, permita popups neste site para abrir o Caderno de Prova para impressão.');
    return;
  }

  const banca = (simulado.banca || 'FGV').toUpperCase();
  const isCebraspe = banca.includes('CEBRASPE') || banca.includes('CESPE');
  const isIBDO = banca.includes('IBDO');
  const questionType = isCebraspe ? 'CERTO / ERRADO' : (isIBDO ? 'MÚLTIPLA ESCOLHA (A, B, C, D)' : 'MÚLTIPLA ESCOLHA (A, B, C, D, E)');
  const totalQuestions = questions.length;
  const timeLimit = simulado.time_limit_minutes || 60;
  const examDate = new Date().toLocaleDateString('pt-BR');

  // Constrói HTML das questões em 2 colunas
  const questionsHtml = questions.map((q, idx) => {
    let options = [];
    try {
      options = Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]');
    } catch (e) {
      options = isCebraspe ? ['Certo', 'Errado'] : (isIBDO ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'D', 'E']);
    }

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const optionsHtml = isCebraspe
      ? `
        <div class="print-cebraspe-options">
          <span class="option-pill">( &nbsp; ) CERTO</span>
          <span class="option-pill">( &nbsp; ) ERRADO</span>
        </div>
      `
      : options.map((opt, oIdx) => `
        <div class="print-option">
          <span class="option-letter">(${letters[oIdx] || oIdx + 1})</span>
          <span class="option-text">${opt}</span>
        </div>
      `).join('');

    return `
      <div class="print-question-item">
        <div class="print-question-header">
          <span class="print-q-num">QUESTÃO ${idx + 1}</span>
          <span class="print-q-subject">${q.subject || ''}</span>
        </div>
        <div class="print-question-body">
          ${q.question_text || q.text || ''}
        </div>
        <div class="print-question-options">
          ${optionsHtml}
        </div>
        <div class="print-rascunho-area">
          <span class="rascunho-tag">Espaço para Rascunho</span>
        </div>
      </div>
    `;
  }).join('');

  // Constrói Folha de Respostas (Cartão-Resposta)
  const letters = isCebraspe ? ['C', 'E'] : (isIBDO ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'D', 'E']);
  const answerSheetHtml = questions.map((_, idx) => `
    <div class="bubble-row">
      <span class="bubble-num">${String(idx + 1).padStart(2, '0')}</span>
      ${letters.map(l => `<span class="bubble-circle">(${l})</span>`).join('')}
    </div>
  `).join('');

  // Constrói Gabarito Comentado
  const answerKeyHtml = questions.map((q, idx) => {
    let options = [];
    try {
      options = Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]');
    } catch (e) {
      options = [];
    }
    const correctLetter = isCebraspe 
      ? (q.correct_index === 0 ? 'CERTO' : 'ERRADO')
      : (letters[q.correct_index] || `Opção ${q.correct_index + 1}`);

    return `
      <div class="gabarito-item">
        <div class="gabarito-header">
          <strong>QUESTÃO ${idx + 1}:</strong> <span class="gabarito-badge">${correctLetter}</span> — <em>${q.subject || ''}</em>
        </div>
        <div class="gabarito-exp">
          ${q.explanation || 'Comentário técnico não disponível.'}
        </div>
      </div>
    `;
  }).join('');

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Caderno de Prova — Simulado ${banca} (${totalQuestions} Questões)</title>
      <style>
        @page {
          size: A4;
          margin: 12mm 15mm 15mm 15mm;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Times New Roman', Times, serif;
          color: #111;
          background: #fff;
          font-size: 10.5pt;
          line-height: 1.35;
        }

        .no-print-toolbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #1e293b;
          color: #fff;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 9999;
          font-family: sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .btn-print {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn-close {
          background: #475569;
          color: #fff;
          border: none;
          padding: 8px 14px;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
        }

        .page-container {
          padding-top: 50px;
        }

        @media print {
          .no-print-toolbar {
            display: none !important;
          }
          .page-container {
            padding-top: 0 !important;
          }
          .page-break {
            page-break-before: always;
          }
        }

        /* CABEÇALHO OFICIAL */
        .exam-cover-header {
          border: 2px solid #000;
          padding: 12px;
          margin-bottom: 16px;
          text-align: center;
        }

        .exam-title-main {
          font-size: 14pt;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .exam-subtitle {
          font-size: 11pt;
          font-weight: bold;
          margin-top: 3px;
        }

        .exam-meta-grid {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 6px;
          border-top: 1px solid #333;
          font-size: 9.5pt;
        }

        .candidate-box {
          border: 1px solid #000;
          padding: 8px;
          margin-bottom: 16px;
          font-size: 9.5pt;
          display: flex;
          justify-content: space-between;
        }

        .exam-instructions {
          border: 1px dashed #444;
          padding: 8px 12px;
          margin-bottom: 16px;
          font-size: 8.5pt;
          background: #fafafa;
        }

        .exam-instructions h4 {
          font-size: 9.5pt;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .exam-instructions ul {
          padding-left: 18px;
        }

        .exam-instructions li {
          margin-bottom: 2px;
        }

        /* DIAGRAMAÇÃO EM 2 COLUNAS */
        .exam-two-columns {
          column-count: 2;
          column-gap: 20px;
          column-rule: 1px solid #ccc;
          text-align: justify;
        }

        .print-question-item {
          break-inside: avoid;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px dotted #aaa;
        }

        .print-question-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 10pt;
          margin-bottom: 4px;
          border-bottom: 1px solid #000;
          padding-bottom: 2px;
        }

        .print-q-num {
          text-transform: uppercase;
        }

        .print-q-subject {
          font-size: 8.5pt;
          font-style: italic;
          font-weight: normal;
        }

        .print-question-body {
          font-size: 9.5pt;
          margin-bottom: 8px;
        }

        .print-option {
          display: flex;
          gap: 6px;
          font-size: 9pt;
          margin-bottom: 4px;
          align-items: flex-start;
        }

        .option-letter {
          font-weight: bold;
          min-width: 22px;
        }

        .print-cebraspe-options {
          display: flex;
          gap: 20px;
          margin: 6px 0;
          font-weight: bold;
          font-size: 9pt;
        }

        .print-rascunho-area {
          margin-top: 8px;
          border: 1px dashed #ccc;
          height: 35px;
          position: relative;
        }

        .rascunho-tag {
          position: absolute;
          top: 2px;
          right: 4px;
          font-size: 7pt;
          color: #888;
          text-transform: uppercase;
        }

        /* CARTÃO-RESPOSTA / FOLHA DE RESPOSTAS */
        .answer-sheet-container {
          border: 2px solid #000;
          padding: 16px;
          margin-top: 20px;
          text-align: center;
        }

        .answer-sheet-header {
          border-bottom: 2px solid #000;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .bubble-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          justify-content: center;
          margin-top: 12px;
        }

        .bubble-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9pt;
          width: 140px;
        }

        .bubble-num {
          font-weight: bold;
          min-width: 24px;
        }

        .bubble-circle {
          border: 1px solid #000;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7pt;
          font-weight: bold;
        }

        /* GABARITO COMENTADO */
        .gabarito-container {
          margin-top: 20px;
        }

        .gabarito-item {
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
          font-size: 9pt;
        }

        .gabarito-badge {
          background: #000;
          color: #fff;
          padding: 1px 5px;
          border-radius: 3px;
          font-weight: bold;
        }

        .gabarito-exp {
          margin-top: 4px;
          color: #333;
          font-size: 8.5pt;
        }
      </style>
    </head>
    <body>
      <div class="no-print-toolbar">
        <div><strong>Caderno de Prova — Simulado ${banca}</strong> (${totalQuestions} Questões)</div>
        <div style="display:flex; gap:10px;">
          <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
          <button class="btn-close" onclick="window.close()">✕ Fechar</button>
        </div>
      </div>

      <div class="page-container">
        <!-- CABEÇALHO -->
        <div class="exam-cover-header">
          <div class="exam-title-main">CONCURSO PÚBLICO SIMULADO — BANCA ${banca}</div>
          <div class="exam-subtitle">CADERNO DE QUESTÕES OBJETIVAS • ${questionType}</div>
          <div class="exam-meta-grid">
            <span><strong>Duração:</strong> ${timeLimit} minutos</span>
            <span><strong>Total de Questões:</strong> ${totalQuestions}</span>
            <span><strong>Data:</strong> ${examDate}</span>
          </div>
        </div>

        <div class="candidate-box">
          <span><strong>NOME DO CANDIDATO:</strong> ____________________________________________________</span>
          <span><strong>ASSINATURA:</strong> ______________________</span>
        </div>

        <div class="exam-instructions">
          <h4>INSTRUÇÕES GERAIS AOS CANDIDATOS:</h4>
          <ul>
            <li>Verifique se este caderno contém exatamente ${totalQuestions} questões numeradas sequencialmente.</li>
            <li>Utilize somente caneta esferográfica de tinta preta ou azul fabricada em material transparente.</li>
            <li>Preencha a Folha de Respostas ao final do caderno preenchendo integralmente o alvéolo correspondente.</li>
            <li>O tempo disponível para esta prova é de ${timeLimit} minutos, incluindo a marcação da folha de respostas.</li>
          </ul>
        </div>

        <!-- QUESTÕES EM 2 COLUNAS -->
        <div class="exam-two-columns">
          ${questionsHtml}
        </div>

        <!-- FOLHA DE RESPOSTAS (CARTÃO-RESPOSTA DESTACÁVEL) -->
        <div class="page-break"></div>
        <div class="answer-sheet-container">
          <div class="answer-sheet-header">
            <h3 style="text-transform: uppercase;">FOLHA DE RESPOSTAS (CARTÃO-RESPOSTA)</h3>
            <p style="font-size: 8.5pt; margin-top: 3px;">Preencha com caneta preta o círculo correspondente à alternativa correta.</p>
          </div>
          <div class="bubble-grid">
            ${answerSheetHtml}
          </div>
        </div>

        <!-- GABARITO COMENTADO -->
        <div class="page-break"></div>
        <div class="gabarito-container">
          <div style="border-bottom: 2px solid #000; padding-bottom: 6px; margin-bottom: 14px;">
            <h3 style="text-transform: uppercase;">GABARITO OFICIAL & COMENTÁRIOS ESTRATÉGICOS</h3>
            <p style="font-size: 8.5pt; color: #555;">Consulte apenas após a conclusão e preenchimento da Folha de Respostas.</p>
          </div>
          ${answerKeyHtml}
        </div>
      </div>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(fullHtml);
  printWindow.document.close();
}
