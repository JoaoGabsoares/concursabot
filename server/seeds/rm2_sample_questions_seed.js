// RM2 Praças Marinha — Banco de 30 Questões Modelo (15 Português + 15 Militar-Naval)
// Baseado nos padrões reais das provas DEnsM 2023, 2024 e 2025

import db from '../database.js';

const RM2_QUESTIONS = [
  // ============================================================
  // FORMAÇÃO MILITAR-NAVAL (15 QUESTÕES)
  // ============================================================

  // 1. Estatuto — Posto vs Graduação
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Estatuto dos Militares (Lei 6.880/80)', year_reference: 2025, banca: 'DEnsM', difficulty: 'media',
    question_text: 'De acordo com o Estatuto dos Militares (Lei nº 6.880/80), assinale a alternativa CORRETA sobre a hierarquia militar:',
    options_json: JSON.stringify([
      'A) O posto é o grau hierárquico conferido à praça pelo Comandante da Marinha.',
      'B) A graduação é o grau hierárquico do oficial, confirmado por Carta Patente assinada pelo Presidente da República.',
      'C) O posto é o grau hierárquico do oficial, conferido por ato do Presidente da República e confirmado em Carta Patente.',
      'D) A graduação e o posto possuem a mesma natureza jurídica, diferindo apenas na nomenclatura.',
      'E) O Guarda-Marinha é considerado oficial subalterno para todos os efeitos legais.'
    ]),
    correct_answer: 'C',
    explanation: 'Art. 16 da Lei 6.880/80 — Posto é o grau hierárquico do OFICIAL, conferido pelo Presidente da República. Graduação é o grau hierárquico da PRAÇA, conferido pelo Comandante da respectiva Força. O Guarda-Marinha é PRAÇA ESPECIAL, não oficial.',
    legal_reference: 'Lei 6.880/80, Art. 16',
    is_pegadinha: 1, pegadinha_type: 'Inversão de conceitos (Posto vs Graduação)'
  },

  // 2. Estatuto — Ativa vs Inativa
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Estatuto dos Militares (Lei 6.880/80)', year_reference: 2024, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Sobre a precedência entre militares da ativa e da inativa, nos termos da Lei 6.880/80, é CORRETO afirmar que:',
    options_json: JSON.stringify([
      'A) Em igualdade de posto, o militar da reserva remunerada com maior tempo de serviço tem precedência sobre o da ativa.',
      'B) O militar reformado sempre perde a precedência em relação a qualquer militar da ativa, independentemente do posto.',
      'C) Em igualdade de posto ou graduação, os militares da ativa têm precedência sobre os da inativa.',
      'D) A precedência entre ativa e inativa é determinada exclusivamente pela data de nascimento.',
      'E) Os militares da reserva remunerada mantêm a mesma precedência que tinham quando na ativa.'
    ]),
    correct_answer: 'C',
    explanation: 'Art. 18 da Lei 6.880/80 — "Em igualdade de posto ou graduação, os militares da ativa têm precedência sobre os da inativa." Esta é uma das regras mais cobradas pela DEnsM.',
    legal_reference: 'Lei 6.880/80, Art. 18',
    is_pegadinha: 1, pegadinha_type: 'Precedência Ativa vs Inativa'
  },

  // 3. Estatuto — Base institucional
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Estatuto dos Militares (Lei 6.880/80)', year_reference: 2025, banca: 'DEnsM', difficulty: 'media',
    question_text: 'De acordo com a Lei 6.880/80, a base institucional das Forças Armadas repousa em dois pilares fundamentais. Assinale a alternativa que os identifica CORRETAMENTE:',
    options_json: JSON.stringify([
      'A) Lealdade e patriotismo.',
      'B) Hierarquia e disciplina.',
      'C) Ordem e progresso.',
      'D) Coragem e dedicação.',
      'E) Honra e dever.'
    ]),
    correct_answer: 'B',
    explanation: 'Art. 14 da Lei 6.880/80 — "A hierarquia e a disciplina são a base institucional das Forças Armadas." Hierarquia = ordenação da autoridade por postos/graduações. Disciplina = rigorosa observância das leis e regulamentos.',
    legal_reference: 'Lei 6.880/80, Art. 14',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 4. Estatuto — SMV como ativa
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Estatuto dos Militares (Lei 6.880/80)', year_reference: 2023, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Quanto à situação dos militares, é INCORRETO afirmar que:',
    options_json: JSON.stringify([
      'A) O militar da ativa compreende os de carreira e os temporários.',
      'B) O militar da reserva remunerada está sujeito à convocação.',
      'C) O militar reformado está definitivamente isento de prestação de serviço na ativa.',
      'D) Os militares do Serviço Militar Voluntário (SMV) são classificados como militares da inativa.',
      'E) O militar agregado continua a ser considerado militar da ativa.'
    ]),
    correct_answer: 'D',
    explanation: 'Art. 3º da Lei 6.880/80 — Os militares do SMV são classificados como militares da ATIVA, na categoria de temporários, e NÃO da inativa. A alternativa D está incorreta e, portanto, é a resposta certa.',
    legal_reference: 'Lei 6.880/80, Art. 3º',
    is_pegadinha: 1, pegadinha_type: 'SMV como inativa (é ativa)'
  },

  // 5. Estatuto — Valor militar
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Estatuto dos Militares (Lei 6.880/80)', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'O valor militar manifesta-se, entre outros, pelos seguintes atributos, EXCETO:',
    options_json: JSON.stringify([
      'A) Patriotismo traduzido na vontade de cumprir o dever militar.',
      'B) Civismo e culto das tradições históricas.',
      'C) Fé na missão elevada das Forças Armadas.',
      'D) Enriquecimento pessoal como recompensa pelo serviço prestado.',
      'E) Amor à profissão das armas e entusiasmo com que é exercida.'
    ]),
    correct_answer: 'D',
    explanation: 'Art. 27 da Lei 6.880/80 — O valor militar é manifestado por patriotismo, civismo, fé na missão, espírito de corpo, amor à profissão das armas, aprimoramento técnico-profissional e coragem. "Enriquecimento pessoal" NÃO é atributo do valor militar.',
    legal_reference: 'Lei 6.880/80, Art. 27',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 6. RDM — Classificação
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'RDM (Decreto 88.545/83)', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'De acordo com o Regulamento Disciplinar para a Marinha (Decreto 88.545/83), as contravenções disciplinares são classificadas em:',
    options_json: JSON.stringify([
      'A) Brandas, moderadas e severas.',
      'B) Leves, médias e graves.',
      'C) Simples e qualificadas.',
      'D) De 1º, 2º e 3º grau.',
      'E) Administrativas e penais.'
    ]),
    correct_answer: 'B',
    explanation: 'Cap. V do Decreto 88.545/83 — As contravenções disciplinares no RDM são classificadas em LEVES, MÉDIAS e GRAVES, conforme a natureza e a repercussão do ato praticado.',
    legal_reference: 'Decreto 88.545/83, Cap. V',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 7. RDM — Pena inexistente
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'RDM (Decreto 88.545/83)', year_reference: 2023, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Conforme o Regulamento Disciplinar para a Marinha, NÃO constitui pena disciplinar aplicável ao militar:',
    options_json: JSON.stringify([
      'A) Advertência.',
      'B) Repreensão.',
      'C) Detenção.',
      'D) Multa pecuniária.',
      'E) Prisão disciplinar.'
    ]),
    correct_answer: 'D',
    explanation: 'As penas disciplinares previstas no RDM são: Advertência, Repreensão, Detenção, Prisão e Licenciamento a bem da disciplina. Multa pecuniária NÃO é pena disciplinar militar.',
    legal_reference: 'Decreto 88.545/83, Cap. VI',
    is_pegadinha: 1, pegadinha_type: 'Multa como pena disciplinar (não existe)'
  },

  // 8. RDM — Recurso
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'RDM (Decreto 88.545/83)', year_reference: 2025, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Segundo o Regulamento Disciplinar para a Marinha, o recurso disciplinar contra punição aplicada deve ser interposto no prazo de:',
    options_json: JSON.stringify([
      'A) 24 horas.',
      'B) 48 horas.',
      'C) 5 dias úteis.',
      'D) 10 dias úteis.',
      'E) 30 dias corridos.'
    ]),
    correct_answer: 'C',
    explanation: 'Art. 63 do Decreto 88.545/83 — O prazo para interposição de recurso disciplinar é de 5 (cinco) dias úteis, contados da data da ciência da punição.',
    legal_reference: 'Decreto 88.545/83, Art. 63',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 9. Tradições — Cerimonial à Bandeira
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Tradições Navais e Cerimonial', year_reference: 2025, banca: 'DEnsM', difficulty: 'facil',
    question_text: 'O Cerimonial à Bandeira Nacional a bordo dos navios da Marinha do Brasil é realizado diariamente em dois horários específicos. Assinale a alternativa que os indica CORRETAMENTE:',
    options_json: JSON.stringify([
      'A) Ao nascer do sol e ao meio-dia.',
      'B) Às 07:00h e às 18:00h.',
      'C) Às 08:00h e ao pôr do sol.',
      'D) Às 06:00h e às 20:00h.',
      'E) Às 09:00h e ao pôr do sol.'
    ]),
    correct_answer: 'C',
    explanation: 'Segundo as Tradições Navais, o Cerimonial à Bandeira é realizado às 08:00h (hasteamento) e ao pôr do sol (arriamento). A banca frequentemente erra o horário para 07h ou 06h como distrator.',
    legal_reference: 'Tradições Navais da MB',
    is_pegadinha: 1, pegadinha_type: 'Horário errado do Cerimonial à Bandeira'
  },

  // 10. Tradições — Vocabulário Náutico
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Tradições Navais e Cerimonial', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Na terminologia náutica, o lado esquerdo do navio, olhando-se da popa para a proa, é denominado:',
    options_json: JSON.stringify([
      'A) Boreste.',
      'B) Bombordo.',
      'C) Través.',
      'D) Costado.',
      'E) Bochecha.'
    ]),
    correct_answer: 'B',
    explanation: 'Bombordo (BB) é o lado ESQUERDO. Boreste (BE) é o lado DIREITO. A referência é sempre olhando da popa para a proa. A banca cobra inversão destes termos com alta frequência.',
    legal_reference: 'Vocabulário Náutico — Tradições Navais',
    is_pegadinha: 1, pegadinha_type: 'Inversão Bombordo vs Boreste'
  },

  // 11. LESTA — Autoridade Marítima
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'LESTA (Lei 9.537/97)', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'De acordo com a Lei de Segurança do Tráfego Aquaviário (LESTA — Lei 9.537/97), a Autoridade Marítima é exercida pelo:',
    options_json: JSON.stringify([
      'A) Ministro da Defesa.',
      'B) Presidente da República.',
      'C) Comandante da Marinha.',
      'D) Tribunal Marítimo.',
      'E) Capitão dos Portos.'
    ]),
    correct_answer: 'C',
    explanation: 'Art. 3º da Lei 9.537/97 — A Autoridade Marítima é exercida pelo Comandante da Marinha. O Tribunal Marítimo é órgão JUDICIÁRIO, não se confunde com a Autoridade Marítima (pegadinha clássica).',
    legal_reference: 'Lei 9.537/97, Art. 3º',
    is_pegadinha: 1, pegadinha_type: 'Confusão entre Autoridade Marítima e Tribunal Marítimo'
  },

  // 12. LESTA — Competência
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'LESTA (Lei 9.537/97)', year_reference: 2023, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Sobre a Lei de Segurança do Tráfego Aquaviário, assinale a alternativa INCORRETA:',
    options_json: JSON.stringify([
      'A) Cabe à Autoridade Marítima promover a implementação e execução da LESTA.',
      'B) A Capitania dos Portos subordina-se à Autoridade Marítima.',
      'C) A segurança da navegação nas águas interiores é responsabilidade exclusiva dos estados federados.',
      'D) A salvaguarda da vida humana no mar é um dos objetivos da LESTA.',
      'E) A inscrição de embarcações é atribuição da Autoridade Marítima.'
    ]),
    correct_answer: 'C',
    explanation: 'A segurança da navegação em águas interiores NÃO é responsabilidade exclusiva dos estados. A Autoridade Marítima (Comandante da Marinha) atua em TODAS as águas sob jurisdição nacional, conforme Art. 3º e 4º da Lei 9.537/97.',
    legal_reference: 'Lei 9.537/97, Art. 3º e 4º',
    is_pegadinha: 1, pegadinha_type: 'Competência estadual em águas interiores (é federal)'
  },

  // 13. História Naval — Riachuelo
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'História Naval Brasileira', year_reference: 2023, banca: 'DEnsM', difficulty: 'facil',
    question_text: 'A Batalha Naval do Riachuelo, considerada o maior combate naval da história da América do Sul, ocorreu em:',
    options_json: JSON.stringify([
      'A) 13 de dezembro de 1864.',
      'B) 11 de junho de 1865.',
      'C) 07 de setembro de 1822.',
      'D) 17 de julho de 1866.',
      'E) 11 de novembro de 1889.'
    ]),
    correct_answer: 'B',
    explanation: 'A Batalha do Riachuelo ocorreu em 11 de junho de 1865, durante a Guerra da Tríplice Aliança (Guerra do Paraguai). Nesta data comemora-se o Dia da Marinha do Brasil.',
    legal_reference: 'História Naval — Batalha do Riachuelo',
    is_pegadinha: 1, pegadinha_type: 'Data errada da Batalha do Riachuelo'
  },

  // 14. Liderança
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'Doutrina de Liderança Militar', year_reference: 2025, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Segundo a Doutrina de Liderança da Marinha do Brasil (EMA-137), o estilo de liderança em que o líder centraliza todas as decisões e impõe ordens ao grupo é denominado:',
    options_json: JSON.stringify([
      'A) Democrático.',
      'B) Liberal (Laissez-faire).',
      'C) Autocrático.',
      'D) Situacional.',
      'E) Transformacional.'
    ]),
    correct_answer: 'C',
    explanation: 'O estilo AUTOCRÁTICO é aquele em que o líder centraliza a tomada de decisões sem consultar os subordinados. O estilo democrático/participativo consulta o grupo. O liberal delega a decisão.',
    legal_reference: 'EMA-137 — Doutrina de Liderança da MB',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 15. Patrono da Marinha
  {
    career_id: 'marinha_rm2', subject: 'Formação Militar-Naval',
    topic: 'História Naval Brasileira', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'O Patrono da Marinha do Brasil, cuja data de nascimento é celebrada como o Dia do Marinheiro, é:',
    options_json: JSON.stringify([
      'A) Almirante Francisco Manuel Barroso da Silva.',
      'B) Marquês de Tamandaré (Almirante Joaquim Marques Lisboa).',
      'C) Almirante Saldanha da Gama.',
      'D) Almirante Alexandrino Faria de Alencar.',
      'E) Almirante Rademaker Grünewald.'
    ]),
    correct_answer: 'B',
    explanation: 'O Marquês de Tamandaré (Almirante Joaquim Marques Lisboa) é o Patrono da Marinha. Sua data de nascimento, 13 de dezembro, é o Dia do Marinheiro. Almirante Barroso comandou a Batalha do Riachuelo, mas NÃO é o Patrono.',
    legal_reference: 'História Naval — Grandes Vultos da Marinha',
    is_pegadinha: 1, pegadinha_type: 'Confusão entre Patrono e Comandante do Riachuelo'
  },

  // ============================================================
  // LÍNGUA PORTUGUESA (15 QUESTÕES)
  // ============================================================

  // 16. Sintaxe — Classificação de orações
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Sintaxe do Período Composto', year_reference: 2025, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Em "É necessário que todos estudem para que sejam aprovados", as orações subordinadas classificam-se, respectivamente, como:',
    options_json: JSON.stringify([
      'A) Subordinada substantiva subjetiva e subordinada adverbial final.',
      'B) Subordinada substantiva objetiva direta e subordinada adverbial causal.',
      'C) Subordinada adjetiva restritiva e subordinada adverbial concessiva.',
      'D) Subordinada substantiva predicativa e subordinada adverbial consecutiva.',
      'E) Subordinada substantiva completiva nominal e subordinada adverbial temporal.'
    ]),
    correct_answer: 'A',
    explanation: '"que todos estudem" = sujeito de "é necessário" → substantiva subjetiva. "para que sejam aprovados" = finalidade → adverbial final.',
    legal_reference: 'Gramática Normativa',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 17. Sintaxe — Restritiva vs Explicativa
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Sintaxe do Período Composto', year_reference: 2024, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Na oração "Os militares que cumprem seus deveres são respeitados", a oração subordinada é classificada como:',
    options_json: JSON.stringify([
      'A) Subordinada adjetiva explicativa.',
      'B) Subordinada adjetiva restritiva.',
      'C) Subordinada substantiva subjetiva.',
      'D) Subordinada adverbial causal.',
      'E) Coordenada sindética aditiva.'
    ]),
    correct_answer: 'B',
    explanation: 'A oração "que cumprem seus deveres" restringe o sentido de "militares" (sem vírgulas = restritiva). Se houvesse vírgulas, seria EXPLICATIVA. A ausência de vírgulas é o indicador-chave.',
    legal_reference: 'Gramática Normativa — Orações Adjetivas',
    is_pegadinha: 1, pegadinha_type: 'Restritiva vs Explicativa (vírgulas)'
  },

  // 18. Sintaxe — Objetiva direta
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Sintaxe do Período Composto', year_reference: 2023, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Assinale a alternativa que contém uma oração subordinada substantiva objetiva direta:',
    options_json: JSON.stringify([
      'A) É provável que chova amanhã.',
      'B) Desejo que todos sejam aprovados.',
      'C) O regulamento, que é rígido, deve ser cumprido.',
      'D) Onde houver disciplina, haverá ordem.',
      'E) Embora cansados, os recrutas continuaram a marcha.'
    ]),
    correct_answer: 'B',
    explanation: 'Em "Desejo que todos sejam aprovados", a oração "que todos sejam aprovados" funciona como objeto direto de "desejo" → objetiva direta. A alternativa A é subjetiva (sujeito de "é provável").',
    legal_reference: 'Gramática Normativa',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 19. Sintaxe — Subjetiva
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Sintaxe do Período Composto', year_reference: 2025, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Em "Convém que o marinheiro conheça as tradições navais", a oração subordinada exerce função sintática de:',
    options_json: JSON.stringify([
      'A) Objeto direto.',
      'B) Objeto indireto.',
      'C) Sujeito.',
      'D) Predicativo do sujeito.',
      'E) Complemento nominal.'
    ]),
    correct_answer: 'C',
    explanation: '"Convém" é verbo impessoal de uso especial. A oração "que o marinheiro conheça as tradições navais" é o SUJEITO de "convém" → subordinada substantiva subjetiva.',
    legal_reference: 'Gramática Normativa — Substantivas',
    is_pegadinha: 1, pegadinha_type: 'Subjetiva confundida com OD'
  },

  // 20. Concordância Verbal
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Concordância Verbal e Nominal', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Assinale a alternativa em que a concordância verbal está CORRETA:',
    options_json: JSON.stringify([
      'A) Fazem cinco anos que ingressei na Marinha.',
      'B) Houveram muitas inscrições para o concurso.',
      'C) Existem vários candidatos preparados para a prova.',
      'D) Faz necessário que todos compareçam ao quartel.',
      'E) Haviam ocorrido problemas durante a navegação.'
    ]),
    correct_answer: 'C',
    explanation: '"Existir" é verbo PESSOAL e concorda com o sujeito ("vários candidatos" = plural). "Fazer" e "Haver" no sentido de tempo/existência são IMPESSOAIS (ficam no singular): "Faz cinco anos", "Houve muitas inscrições".',
    legal_reference: 'Gramática Normativa — Concordância',
    is_pegadinha: 1, pegadinha_type: 'Verbos impessoais no plural'
  },

  // 21. Concordância Nominal — Erro
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Concordância Verbal e Nominal', year_reference: 2023, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Marque a alternativa que apresenta ERRO de concordância:',
    options_json: JSON.stringify([
      'A) Seguem anexas as cópias do documento.',
      'B) As tropas estavam alertas durante o exercício.',
      'C) É proibido entrada sem autorização.',
      'D) Elas mesmas resolveram o problema.',
      'E) Haviam bastantes razões para a decisão.'
    ]),
    correct_answer: 'E',
    explanation: 'O erro está em "haviam bastantes". "Haver" no sentido de existir é impessoal (fica no singular). O correto seria "Havia bastantes razões".',
    legal_reference: 'Gramática Normativa — Concordância',
    is_pegadinha: 1, pegadinha_type: 'Haver impessoal no plural'
  },

  // 22. Concordância — Partitivos
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Concordância Verbal e Nominal', year_reference: 2025, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Em "A maioria dos militares ________ a cerimônia com pontualidade", a lacuna pode ser corretamente preenchida por:',
    options_json: JSON.stringify([
      'A) assistiram, apenas.',
      'B) assistiu, apenas.',
      'C) assistiu ou assistiram.',
      'D) assiste, apenas.',
      'E) assistem, apenas.'
    ]),
    correct_answer: 'C',
    explanation: 'Com expressões partitivas ("a maioria de") seguidas de nome no plural, a concordância pode ser feita no singular (gramatical) ou no plural (atrativa). Ambas as formas são aceitas.',
    legal_reference: 'Gramática Normativa — Concordância com Partitivos',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 23. Regência e Crase
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Regência Verbal e Crase', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Assinale a alternativa em que o emprego da crase está CORRETO:',
    options_json: JSON.stringify([
      'A) O oficial referiu-se à Vossa Excelência.',
      'B) Os recrutas chegaram à Brasília ontem.',
      'C) O navio dirigiu-se à costa brasileira.',
      'D) A ordem foi transmitida à todos os militares.',
      'E) Ele assistiu à um belo espetáculo.'
    ]),
    correct_answer: 'C',
    explanation: '"Dirigir-se a" exige preposição + "a costa" admite artigo = crase obrigatória ("à costa"). Não se usa crase antes de pronome de tratamento (Vossa Excelência), pronome indefinido (todos), artigo indefinido (um), nem antes de cidade sem determinante.',
    legal_reference: 'Gramática Normativa — Crase',
    is_pegadinha: 1, pegadinha_type: 'Crase antes de pronome de tratamento'
  },

  // 24. Regência — Preferir
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Regência Verbal e Crase', year_reference: 2023, banca: 'DEnsM', difficulty: 'media',
    question_text: 'A regência verbal está INCORRETA em:',
    options_json: JSON.stringify([
      'A) Assisti ao desfile da Marinha.',
      'B) O comandante obedeceu ao regulamento.',
      'C) Prefiro a Marinha do que o Exército.',
      'D) O militar aspirava ao posto de oficial.',
      'E) Todos visam ao sucesso no concurso.'
    ]),
    correct_answer: 'C',
    explanation: 'O verbo "preferir" exige a construção "preferir X a Y" (sem "do que"). O correto seria "Prefiro a Marinha ao Exército". O uso de "do que" com "preferir" é vício de linguagem não aceito pela norma culta.',
    legal_reference: 'Gramática Normativa — Regência Verbal',
    is_pegadinha: 1, pegadinha_type: 'Preferir com "do que"'
  },

  // 25. Regência — Assistir
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Regência Verbal e Crase', year_reference: 2025, banca: 'DEnsM', difficulty: 'dificil',
    question_text: 'Considerando a regência do verbo "assistir", assinale a alternativa CORRETA:',
    options_json: JSON.stringify([
      'A) O médico assistiu o paciente (= ver, presenciar).',
      'B) Assisti o jogo da seleção na televisão.',
      'C) O oficial assistiu ao exercício militar (= ver, presenciar).',
      'D) Não lhe assiste o direito de recorrer (= ver, presenciar).',
      'E) Assistimos a cerimônia sem preposição.'
    ]),
    correct_answer: 'C',
    explanation: '"Assistir" no sentido de VER/PRESENCIAR é VTI (rege preposição "a"). "Assistir" no sentido de AJUDAR é VTD. "Assistir" no sentido de CABER/COMPETIR é VTI. A opção C está correta: assistiu AO exercício (= presenciou).',
    legal_reference: 'Gramática Normativa — Regência de Assistir',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 26. Interpretação — Gradação
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Interpretação de Textos', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Em "Sem disciplina, não há hierarquia; sem hierarquia, não há comando; sem comando, não há operação militar viável.", o autor utiliza a seguinte figura de linguagem:',
    options_json: JSON.stringify([
      'A) Metáfora.',
      'B) Gradação (clímax).',
      'C) Antítese.',
      'D) Hipérbole.',
      'E) Metonímia.'
    ]),
    correct_answer: 'B',
    explanation: 'A gradação (clímax) consiste na apresentação de ideias em ordem crescente de intensidade. O texto parte da disciplina → hierarquia → comando → operação militar, construindo uma cadeia progressiva.',
    legal_reference: 'Gramática — Figuras de Linguagem',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 27. Interpretação — Sinonímia
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Interpretação de Textos', year_reference: 2023, banca: 'DEnsM', difficulty: 'facil',
    question_text: 'Em "O militar deve ser, antes de tudo, um exemplo de probidade e retidão", a palavra "probidade" pode ser substituída, sem alteração de sentido, por:',
    options_json: JSON.stringify([
      'A) Inteligência.',
      'B) Coragem.',
      'C) Honestidade.',
      'D) Humildade.',
      'E) Rapidez.'
    ]),
    correct_answer: 'C',
    explanation: '"Probidade" significa honestidade, integridade moral e retidão de caráter. É sinônimo direto de "honestidade".',
    legal_reference: 'Semântica — Sinonímia',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 28. Interpretação — Conjunções
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Interpretação de Textos', year_reference: 2025, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Em "Alguns acreditam que o serviço militar é desnecessário; outros, entretanto, reconhecem sua importância para a formação do cidadão.", o termo "entretanto" estabelece, entre as orações, relação de:',
    options_json: JSON.stringify([
      'A) Adição.',
      'B) Conclusão.',
      'C) Adversidade (oposição).',
      'D) Explicação.',
      'E) Alternância.'
    ]),
    correct_answer: 'C',
    explanation: '"Entretanto" é conjunção coordenativa adversativa, que indica oposição ou contraste entre as ideias. Equivale a "porém", "contudo", "todavia", "no entanto".',
    legal_reference: 'Gramática — Conjunções Coordenativas',
    is_pegadinha: 0, pegadinha_type: null
  },

  // 29. Colocação Pronominal
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Colocação Pronominal e Pontuação', year_reference: 2024, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Assinale a alternativa em que a colocação pronominal está de acordo com a norma culta:',
    options_json: JSON.stringify([
      'A) Me informaram sobre o horário da formatura.',
      'B) Diga-me o que aconteceu no exercício.',
      'C) Não encontraram-se os documentos solicitados.',
      'D) Ninguém apresentou-se voluntariamente.',
      'E) Tudo acabou-se durante a madrugada.'
    ]),
    correct_answer: 'B',
    explanation: 'Em "Diga-me" (verbo no imperativo em início de frase), usa-se ênclise. Nas demais: palavras negativas e pronomes indefinidos são fatores de próclise obrigatória ("Não se encontraram", "Ninguém se apresentou", "Tudo se acabou").',
    legal_reference: 'Gramática — Colocação Pronominal',
    is_pegadinha: 1, pegadinha_type: 'Próclise obrigatória com palavras negativas'
  },

  // 30. Pontuação — Vírgula proibida
  {
    career_id: 'marinha_rm2', subject: 'Língua Portuguesa',
    topic: 'Colocação Pronominal e Pontuação', year_reference: 2023, banca: 'DEnsM', difficulty: 'media',
    question_text: 'Assinale a alternativa em que o uso da vírgula está INCORRETO:',
    options_json: JSON.stringify([
      'A) O comandante, após analisar o relatório, tomou a decisão.',
      'B) Os recrutas que chegaram atrasados foram advertidos.',
      'C) Brasília, capital do Brasil, sedia o Comando da Marinha.',
      'D) O sargento, disse que o exercício seria adiado.',
      'E) Estudem bastante, pois a prova está próxima.'
    ]),
    correct_answer: 'D',
    explanation: 'Não se separa o sujeito do predicado por vírgula. Em "O sargento disse que...", a vírgula entre "sargento" e "disse" é proibida. Todas as demais estão corretas: A) intercalação, B) restritiva sem vírgula, C) aposto, E) explicativa.',
    legal_reference: 'Gramática — Pontuação',
    is_pegadinha: 1, pegadinha_type: 'Vírgula entre sujeito e predicado'
  }
];

export default function seedRM2Questions() {
  try {
    const count = db.prepare('SELECT COUNT(*) as c FROM career_question_bank WHERE career_id = ?').get('marinha_rm2');
    if (count && count.c > 0) {
      console.log(`[RM2 Seed] career_question_bank already contains ${count.c} RM2 questions.`);
      return;
    }
  } catch (err) {
    // Table may not exist yet on first run
    console.log('[RM2 Seed] career_question_bank table not ready yet, skipping seed.');
    return;
  }

  const stmt = db.prepare(`
    INSERT INTO career_question_bank
      (career_id, subject, topic, year_reference, banca, difficulty, question_text, options_json, correct_answer, explanation, legal_reference, is_pegadinha, pegadinha_type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertAll = db.transaction(() => {
    for (const q of RM2_QUESTIONS) {
      stmt.run(
        q.career_id, q.subject, q.topic, q.year_reference, q.banca, q.difficulty,
        q.question_text, q.options_json, q.correct_answer, q.explanation,
        q.legal_reference, q.is_pegadinha, q.pegadinha_type
      );
    }
  });

  insertAll();
  console.log(`[RM2 Seed] Inserted ${RM2_QUESTIONS.length} sample questions for Marinha RM2.`);
}
