import { CAREERS_CATALOG, getCareerConfig } from './careers.js';

/**
 * Retorna o contexto institucional, banca, estilo de cobrança e disciplinas
 * específico para o concurso ativo do aluno.
 * 
 * @param {string} careerId - 'marinha_rm2', 'ses_rj', 'atrfb', 'adm_tribunais'
 * @returns {string} Contexto textual formatado para injeção em prompts de IA
 */
export function getExamContextForCareer(careerId = 'atrfb') {
  const career = getCareerConfig(careerId);

  if (careerId === 'marinha_rm2') {
    return `
CONCURSO-ALVO DO ALUNO: ⚓ Marinha do Brasil — Serviço Militar Voluntário (SMV / Praças RM2).
POSTO/GRADUAÇÃO: Cabo / Terceiro-Sargento Temporário da Marinha do Brasil.
BANCA EXAMINADORA OFICIAL: DEnsM (Diretoria de Ensino da Marinha).
FORMATO DA PROVA: 50 questões de múltipla escolha com 5 alternativas (A, B, C, D, E).
DISTRIBUIÇÃO:
- 25 questões de Língua Portuguesa (compreensão, sintaxe do período, concordância, crase e pontuação com base na Gramática de Celso Cunha).
- 25 questões de Formação Militar-Naval (50% do total da prova).

LEGISLAÇÃO E NORMAS OFICIAIS OBRIGATÓRIAS:
1. Estatuto dos Militares (Lei nº 6.880/1980): Hierarquia e disciplina; Oficiais (Posto via Carta Patente) vs Praças (Graduação); Precedência da Ativa sobre Inativa; Agregação, Excedente, Ausente, Deserção e Reforma.
2. Regulamento Disciplinar para a Marinha (RDM - Decreto nº 88.545/1983): Contravenções disciplinares (leves, médias, graves), penas e recursos.
3. Lei do Serviço Militar (Lei nº 4.375/1964) e Organização da Marinha (Comando da Marinha, EMA, 1º ao 9º Distritos Navais).
4. Segurança do Tráfego Aquaviário (LESTA - Lei nº 9.537/1997 e RLESTA Dec. 2.596/1998): Autoridade Marítima, Capitanias dos Portos e salvaguarda da vida humana no mar.
5. Tradições Navais, Cerimonial à Bandeira (08:00h e pôr do sol), Vocabulário Náutico, História Naval (Batalha do Riachuelo - 1865, Guerra da Tríplice Aliança, Marquês de Tamandaré e Almirante Barroso) e Liderança Militar-Naval.

⚠️ ATENÇÃO CRÍTICA: Este aluno estuda para a MARINHA DO BRASIL. NUNCA cite Receita Federal, Auditor-Fiscal, Direito Tributário ou FGV para este concurso.
`;
  }

  if (careerId === 'ses_rj') {
    return `
CONCURSO-ALVO DO ALUNO: 🏥 SES-RJ / IASERJ 2026 (Secretaria de Estado de Saúde do Rio de Janeiro / IASERJ).
CARGOS: Técnico de Enfermagem (20 vagas) e Assistente Administrativo de Saúde (40 vagas).
BANCA EXAMINADORA OFICIAL: Instituto IBDO Projetos (Oficial 2026).
FORMATO DA PROVA: 70 questões de múltipla escolha com 4 alternativas (A, B, C, D) — padrão IBDO.
DISTRIBUIÇÃO:
- Módulo Comum (40 questões): Legislação do SUS & Saúde Pública RJ (15q), Língua Portuguesa Normativa (15q), Noções de Informática (10q).
- Conhecimentos Específicos (30 questões): Enfermagem e Cuidados Clínicos OU Administração Pública e Protocolo.

LEGISLAÇÃO E NORMAS OFICIAIS OBRIGATÓRIAS:
1. Legislação do SUS: CF/88 (Arts. 196 a 200), Lei Orgânica da Saúde (Lei nº 8.080/1990), Participação Popular e Conselhos/Conferências (Lei nº 8.142/1990), Decreto nº 7.508/2011 (Regiões de Saúde, Portas de Entrada, COAP, RENAME/RENASES), LC nº 141/2012 e Política Nacional de Atenção Básica (PNAB).
2. Legislação Estadual RJ: Estatuto dos Servidores Civis do RJ (Decreto-Lei nº 220/1975 e Regulamento Decreto nº 2.479/1979).
3. Enfermagem: SAE, PNI (Calendário de Vacinação e Rede de Frio), Cálculos de Medicamentos/Gotejamento, Biossegurança e NR-32, Classificação de Risco Manchester e Código de Ética COFEN.
4. Administração: Gestão de Documentos, Protocolo Hospitalar, Prontuários no SUS, Nova Lei de Licitações (Lei nº 14.133/2021), LAI (Lei 12.527/11) e LGPD na saúde.

⚠️ ATENÇÃO CRÍTICA: Este aluno estuda para a SAÚDE PÚBLICA RJ (SES-RJ). NUNCA cite Receita Federal ou Marinha para este concurso.
`;
  }

  if (careerId === 'adm_tribunais') {
    return `
CONCURSO-ALVO DO ALUNO: ⚖️ Tribunais e Carreiras Administrativas (TJ, TRF, TRT, TRE).
CARGO: Técnico e Analista Judiciário / Administrativo.
BANCAS EXAMINADORAS DE REFERÊNCIA: FGV, FCC (Fundação Carlos Chagas) e CEBRASPE.
DISTRIBUIÇÃO: Direito Administrativo, Direito Constitucional, Língua Portuguesa, Raciocínio Lógico e Administração Pública.

LEGISLAÇÃO E NORMAS PRINCIPAIS:
1. Regime Jurídico dos Servidores Públicos Civis da União (Lei nº 8.112/1990).
2. Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021).
3. Organização do Poder Judiciário na CF/88 (Arts. 92 a 126), Súmulas Vinculantes do STF e STJ.
4. Processo Administrativo Federal (Lei nº 9.784/1999) e Improbidade Administrativa (Lei nº 8.429/1992 com alterações da Lei 14.230/2021).
`;
  }

  if (careerId === 'bb_comercial') {
    return `
CONCURSO-ALVO DO ALUNO: 🏦 Banco do Brasil — Escriturário / Agente Comercial.
BANCA EXAMINADORA OFICIAL: Fundação Cesgranrio.
FORMATO DA PROVA: 70 questões de múltipla escolha com 5 alternativas (A, B, C, D, E) + Redação dissertativa-argumentativa.
DISTRIBUIÇÃO DE MATÉRIAS:
- Conhecimentos Específicos: Vendas e Negociação (15q - peso 1.5), Conhecimentos de Informática (15q - peso 1.5), Conhecimentos Bancários (10q - peso 1.5), Matemática Financeira (5q - peso 1.5).
- Conhecimentos Básicos: Língua Portuguesa (10q - peso 1.5), Matemática (5q - peso 1.5), Atualidades do Mercado Financeiro (5q - peso 1.0), Língua Inglesa (5q - peso 1.0).

LEGISLAÇÃO E NORMAS OFICIAIS OBRIGATÓRIAS:
1. Estrutura do Sistema Financeiro Nacional (SFN): Conselho Monetário Nacional (CMN), Banco Central do Brasil (BACEN), CVM, SUSEP, PREVIC e instituições financeiras bancárias e não bancárias.
2. Inovações e Produtos Bancários: PIX, Open Finance, Moedas Digitais (Drex), LCI, LCA, CDB, Fundos de Investimento e Garantias do FGC (limite de R$ 250 mil por CPF/instituição até o teto especial).
3. Prevenção à Lavagem de Dinheiro (Lei nº 9.613/1998 e Resoluções BACEN/COAF): Fases (Colocação, Ocultação, Integração), KYC (Know Your Customer) e comunicação de operações suspeitas.
4. Vendas, Negociação e Atendimento: SPIN Selling, técnicas de sondagem, manejo de objeções, Código de Defesa do Consumidor (Lei nº 8.078/1990) aplicado a instituições financeiras (Súmula 297 STJ) e Ouvidoria.
5. Matemática Financeira: Juros compostos, taxas nominais vs efetivas, equivalência de taxas, Desconto Comercial/Racional e Sistemas de Amortização (Tabela Price vs SAC).

⚠️ ATENÇÃO CRÍTICA: Este aluno estuda para o BANCO DO BRASIL (AGENTE COMERCIAL). O estilo de cobrança deve ser o da FUNDAÇÃO CESGRANRIO (enunciados diretos, interpretação contextual e casos bancários práticos).
`;
  }

  if (careerId === 'bb_ti') {
    return `
CONCURSO-ALVO DO ALUNO: 💻 Banco do Brasil — Escriturário / Agente de Tecnologia (TI).
BANCA EXAMINADORA OFICIAL: Fundação Cesgranrio.
FORMATO DA PROVA: 70 questões de múltipla escolha com 5 alternativas (A, B, C, D, E) + Redação eliminatória.
DISTRIBUIÇÃO DE MATÉRIAS:
- Conhecimentos Específicos: Tecnologia da Informação (35 questões - peso 1.5 = 52.5% da prova), Probabilidade e Estatística (5q - peso 1.5), Conhecimentos Bancários (5q - peso 1.5).
- Conhecimentos Básicos: Língua Portuguesa (10q - peso 1.5), Matemática (5q - peso 1.5), Atualidades do Mercado Financeiro (5q - peso 1.0), Língua Inglesa (5q - peso 1.0).

TECNOLOGIAS E TÓPICOS OBRIGATÓRIOS (CESGRANRIO TI):
1. Bancos de Dados: Modelagem Relacional (1FN, 2FN, 3FN), SQL avançado (DML, DDL, DQL, JOINs, GROUP BY, HAVING, subqueries, índices, transações ACID) e NoSQL (MongoDB, Cassandra, Redis, Teorema CAP).
2. Linguagens de Programação: Python (sintaxe, tipos, list comprehensions, manipulação de dados com Pandas e NumPy), Java (POO, Streams API, Collections) e TypeScript.
3. Arquitetura & Engenharia de Software: Microsserviços, APIs RESTful (verbos HTTP, headers, status codes, OpenAPI/Swagger), mensageria (Kafka, RabbitMQ) e Design Patterns.
4. DevOps, Cloud & Segurança: Docker, Kubernetes, CI/CD, Git, OWASP Top 10, Criptografia Simétrica (AES) e Assimétrica (RSA), Certificação Digital e OAuth2/JWT.
5. Inteligência Artificial / Machine Learning: Aprendizado supervisionado e não-supervisionado, Regressão, Classificação (Árvores, Random Forest, SVM), Métricas (Matriz de Confusão, Acurácia, Precisão, Recall, F1-Score).
6. Probabilidade e Estatística: Média, mediana, moda, variância, desvio-padrão, Teorema de Bayes, Distribuição Normal e Binomial.

⚠️ ATENÇÃO CRÍTICA: Este aluno estuda para o BANCO DO BRASIL (AGENTE DE TECNOLOGIA). As explicações de código e questões de TI devem seguir o padrão técnico rigoroso da Fundação Cesgranrio.
`;
  }

  // Padrão: ATRFB / Receita Federal do Brasil
  return `
CONCURSO-ALVO DO ALUNO: 🏛️ Analista-Tributário da Receita Federal do Brasil (ATRFB).
BANCA EXAMINADORA: FGV (Fundação Getulio Vargas) — padrão de casos práticos e enunciados densos.
FORMATO DA PROVA: 140 questões de múltipla escolha com 5 alternativas (A, B, C, D, E).
DISTRIBUIÇÃO DE MATÉRIAS:
- Wave 1 (80% da prova): Direito Tributário (16q), Direito Previdenciário (16q), Língua Portuguesa (15q), Fluência de Dados (15q - SQL/Modelagem), Direito Constitucional (14q), Legislação Tributária (14q), Legislação Aduaneira (14q).
- Wave 2: Direito Administrativo (12q), RLM (10q), Contabilidade Geral (10q), Estatística (10q), Administração Geral/Pública (10q), Língua Inglesa (10q).

LEGISLAÇÃO E NORMAS PRINCIPAIS:
1. Código Tributário Nacional (Lei nº 5.172/1966) e Doutrina Pentapartida do STF.
2. Regulamento Aduaneiro (Decreto nº 6.759/2009) e Jurisdição Aduaneira (Zona Primária vs Secundária).
3. Seguridade Social e Custeio Previdenciário (Leis nº 8.212/1991 e 8.213/1991).
`;
}

// Retrocompatibilidade para códigos legados que ainda leem a constante estática
export const TARGET_EXAM_CONTEXT = getExamContextForCareer('atrfb');

