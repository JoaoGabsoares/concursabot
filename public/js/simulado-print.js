export const generatePrintExamBooklet = (simulado) => printSimulado(simulado);

export function printSimulado(simulado) {
  if (!simulado || !simulado.questions || simulado.questions.length === 0) {
    alert('Não há questões disponíveis para impressão deste simulado.');
    return;
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor, permita popups no seu navegador para abrir o PDF do simulado.');
    return;
  }

  const banca = simulado.banca || 'Cesgranrio';
  const cargo = simulado.cargo || simulado.title || 'Concurso Público Oficial';
  const dateStr = new Date().toLocaleDateString('pt-BR');
  const totalQuestions = simulado.questions.length;

  const questionsHtml = simulado.questions.map((q, idx) => {
    let options = [];
    try {
      options = typeof q.options === 'string' ? JSON.parse(q.options) : q.options;
    } catch (e) {
      options = [];
    }

    return `
      <div class="question-block">
        <div class="question-title">
          <strong>QUESTÃO ${idx + 1}</strong> <span class="question-meta">(${q.subject || 'Conhecimentos Específicos'}${q.topic ? ` • ${q.topic}` : ''})</span>
        </div>
        <div class="question-text">${q.question_text || q.text}</div>
        <div class="options-list">
          ${options.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            return `
              <div class="option-item">
                <span class="opt-letter">(${letter})</span>
                <span class="opt-text">${opt}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Folha de Respostas (Bolinhas)
  const answerSheetHtml = Array.from({ length: totalQuestions }).map((_, idx) => `
    <div class="sheet-row">
      <span class="sheet-qnum">${String(idx + 1).padStart(2, '0')}</span>
      <span class="sheet-bubble">A</span>
      <span class="sheet-bubble">B</span>
      <span class="sheet-bubble">C</span>
      <span class="sheet-bubble">D</span>
      <span class="sheet-bubble">E</span>
    </div>
  `).join('');

  // Gabarito e Comentários
  const answerKeyHtml = simulado.questions.map((q, idx) => {
    const letter = String.fromCharCode(65 + (Number(q.correct_index) || 0));
    return `
      <div class="key-item">
        <strong>Questão ${idx + 1}:</strong> <span class="badge-gabarito">Opção (${letter})</span>
        <p class="key-explanation">${q.explanation || 'Resolução comentada no banco do ConcursaBot.'}</p>
      </div>
    `;
  }).join('');

  const docHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Caderno de Prova — ${cargo}</title>
      <style>
        @page {
          size: A4;
          margin: 12mm 15mm 15mm 15mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        body {
          font-family: 'Times New Roman', Times, serif;
          color: #000;
          background: #fff;
          margin: 0;
          padding: 0;
          font-size: 10pt;
          line-height: 1.35;
        }
        .header-box {
          border: 2px solid #000;
          padding: 10px;
          margin-bottom: 15px;
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #000;
          padding-bottom: 6px;
          margin-bottom: 8px;
        }
        .header-title {
          font-size: 14pt;
          font-weight: bold;
          text-transform: uppercase;
        }
        .header-banca {
          font-size: 11pt;
          font-weight: bold;
        }
        .candidate-fields {
          display: flex;
          gap: 15px;
          font-size: 9pt;
        }
        .candidate-field {
          flex: 1;
          border-bottom: 1px dotted #444;
          padding-bottom: 2px;
        }
        .instructions-box {
          background: #f4f4f4;
          border: 1px solid #ccc;
          padding: 8px 12px;
          font-size: 8.5pt;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .instructions-box ol {
          margin: 4px 0 0 15px;
          padding: 0;
        }
        
        /* 2-Column Layout for Questions */
        .questions-columns {
          column-count: 2;
          column-gap: 20px;
          column-rule: 1px solid #ddd;
        }
        .question-block {
          break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px dotted #ccc;
        }
        .question-title {
          font-size: 9.5pt;
          margin-bottom: 4px;
        }
        .question-meta {
          font-size: 8pt;
          color: #555;
          font-style: italic;
        }
        .question-text {
          font-size: 9.5pt;
          text-align: justify;
          margin-bottom: 6px;
        }
        .options-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .option-item {
          display: flex;
          gap: 6px;
          font-size: 9pt;
          text-align: justify;
        }
        .opt-letter {
          font-weight: bold;
          min-width: 18px;
        }
        
        /* Page Breaks */
        .page-break {
          page-break-before: always;
          break-before: page;
        }

        /* Folha de Respostas */
        .sheet-container {
          padding-top: 15px;
        }
        .sheet-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 15px;
        }
        .sheet-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9pt;
          font-family: monospace;
        }
        .sheet-qnum {
          font-weight: bold;
          min-width: 24px;
        }
        .sheet-bubble {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid #000;
          font-size: 7.5pt;
        }

        /* Gabarito Final */
        .key-item {
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
          break-inside: avoid;
        }
        .badge-gabarito {
          background: #000;
          color: #fff;
          padding: 1px 6px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 8.5pt;
        }
        .key-explanation {
          font-size: 8.5pt;
          color: #333;
          margin: 4px 0 0 0;
          text-align: justify;
        }
      </style>
    </head>
    <body>
      <!-- Capa & Cabeçalho -->
      <div class="header-box">
        <div class="header-top">
          <div class="header-title">${cargo}</div>
          <div class="header-banca">Banca: ${banca} • Simulado Real</div>
        </div>
        <div class="candidate-fields">
          <div class="candidate-field">NOME DO CANDIDATO: _________________________________________________</div>
          <div class="candidate-field" style="max-width:180px;">INSCRIÇÃO: ___________________</div>
          <div class="candidate-field" style="max-width:120px;">DATA: ${dateStr}</div>
        </div>
      </div>

      <div class="instructions-box">
        <strong>INSTRUÇÕES GERAIS AO CANDIDATO:</strong>
        <ol>
          <li>Verifique se este caderno contém <strong>${totalQuestions} questões</strong> objetivas.</li>
          <li>Utilize caneta esferográfica de tinta <strong>preta ou azul</strong> fabricada em material transparente.</li>
          <li>Preencha a Folha de Respostas cobrindo inteiramente a bolinha correspondente à sua escolha.</li>
          <li>O tempo estimado para a resolução desta prova é de <strong>${Math.round(totalQuestions * 3.5)} minutos</strong>.</li>
        </ol>
      </div>

      <!-- Caderno de Questões em 2 Colunas -->
      <div class="questions-columns">
        ${questionsHtml}
      </div>

      <!-- Folha de Respostas Destacável -->
      <div class="page-break sheet-container">
        <div class="header-box">
          <div class="header-top">
            <div class="header-title">FOLHA DE RESPOSTAS (CARTÃO-RESPOSTA)</div>
            <div class="header-banca">${banca} • ${totalQuestions} Questões</div>
          </div>
          <div style="font-size:8pt; margin-bottom:8px;">
            Preencha integralmente o círculo com caneta esferográfica: <strong>(A) (B) (C) (D) (E)</strong>
          </div>
        </div>

        <div class="sheet-grid">
          ${answerSheetHtml}
        </div>
      </div>

      <!-- Gabarito Oficial e Resoluções -->
      <div class="page-break">
        <div class="header-box" style="background:#f4f4f4;">
          <div class="header-top">
            <div class="header-title">GABARITO OFICIAL & RESOLUÇÃO COMENTADA</div>
            <div class="header-banca">ConcursaBot IA</div>
          </div>
        </div>

        <div style="column-count: 2; column-gap: 20px;">
          ${answerKeyHtml}
        </div>
      </div>

      <script>
        window.addEventListener('load', () => {
          setTimeout(() => {
            window.print();
          }, 300);
        });
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(docHtml);
  printWindow.document.close();
}
