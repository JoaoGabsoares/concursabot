// Módulo de Exportação / Impressão de Apostilas Nativas da Sala de Estudos em PDF / A4

export function printStudyLesson(title, subject, lessonNumber, contentHtml, careerName = 'Concurso Público') {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor, permita popups para abrir a versão de impressão da apostila.');
    return;
  }

  const currentDate = new Date().toLocaleDateString('pt-BR');

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${title} — Apostila Oficial (${subject})</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 18mm 15mm 18mm 15mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 11pt;
          line-height: 1.6;
          color: #1E293B;
          background: #FFFFFF;
          margin: 0;
          padding: 0;
        }
        .print-header {
          border-bottom: 2px solid #0F172A;
          padding-bottom: 12px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .header-title-block h1 {
          font-size: 16pt;
          margin: 0 0 4px 0;
          color: #0F172A;
          font-weight: 800;
        }
        .header-title-block .subtitle {
          font-size: 10pt;
          color: #64748B;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .header-meta-block {
          text-align: right;
          font-size: 9pt;
          color: #64748B;
        }
        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 8.5pt;
          background: #FEF3C7;
          color: #92400E;
          margin-bottom: 4px;
        }
        .lesson-body {
          font-size: 10.5pt;
          line-height: 1.65;
        }
        .lesson-body h1, .lesson-body h2, .lesson-body h3 {
          color: #0F172A;
          margin-top: 18px;
          margin-bottom: 8px;
          page-break-after: avoid;
        }
        .lesson-body h2 {
          font-size: 13pt;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 4px;
        }
        .lesson-body h3 {
          font-size: 11.5pt;
        }
        .lesson-body p {
          margin: 0 0 10px 0;
          text-align: justify;
        }
        .lesson-body ul, .lesson-body ol {
          margin: 0 0 12px 0;
          padding-left: 20px;
        }
        .lesson-body li {
          margin-bottom: 4px;
        }
        .lesson-body blockquote {
          margin: 12px 0;
          padding: 8px 12px;
          background: #F8FAFC;
          border-left: 4px solid #D97706;
          color: #334155;
          font-style: italic;
        }
        .lesson-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 14px 0;
          font-size: 9.5pt;
          page-break-inside: avoid;
        }
        .lesson-body th, .lesson-body td {
          border: 1px solid #CBD5E1;
          padding: 6px 10px;
          text-align: left;
        }
        .lesson-body th {
          background: #F1F5F9;
          font-weight: 700;
        }
        .print-footer {
          margin-top: 30px;
          border-top: 1px solid #E2E8F0;
          padding-top: 8px;
          font-size: 8.5pt;
          color: #94A3B8;
          display: flex;
          justify-content: space-between;
          page-break-before: avoid;
        }
        @media print {
          .no-print { display: none !important; }
        }
        .print-bar {
          background: #0F172A;
          color: #FFF;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .print-btn {
          background: #D97706;
          color: #FFF;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="print-bar no-print">
        <span>📖 Visualização de Impressão — <strong>${title}</strong></span>
        <button class="print-btn" onclick="window.print()">🖨️ Imprimir / Salvar em PDF</button>
      </div>

      <div style="padding: 20px 30px;">
        <div class="print-header">
          <div class="header-title-block">
            <span class="badge">${careerName}</span>
            <h1>Aula ${lessonNumber}: ${title}</h1>
            <div class="subtitle">Disciplina: ${subject} • Caderno Oficial de Teoria & Fixação</div>
          </div>
          <div class="header-meta-block">
            <div>Gabarito.AI</div>
            <div>Data: ${currentDate}</div>
          </div>
        </div>

        <div class="lesson-body">
          ${contentHtml}
        </div>

        <div class="print-footer">
          <span>Material de Estudo Oficial • Gabarito.AI Inteligência em Concursos</span>
          <span>Apostila Individual Gerada para Estudos</span>
        </div>
      </div>

      <script>
        window.addEventListener('load', () => {
          setTimeout(() => {
            window.print();
          }, 600);
        });
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(fullHtml);
  printWindow.document.close();
}
