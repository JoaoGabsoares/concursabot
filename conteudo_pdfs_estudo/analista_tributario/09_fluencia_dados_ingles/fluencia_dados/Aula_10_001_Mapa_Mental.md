---
cargo: Analista-Tributário da Receita Federal do Brasil (ATRFB)
banca: FGV
disciplina: Fluência em Dados e Língua Inglesa
tags:
- dados
- sql
- nosql
- big_data
- ingles_fiscal
arquivo_origem: Aula 10_001_Mapa Mental.txt
tipo_material: Mapas Mentais & Esquemas
aula_numero: '10'
titulo_aula: Conjunto de processos, métodos, teorias,              ...Utilizadas p/
  explorar, organizar e
---

# Conjunto de processos, métodos, teorias,              ...Utilizadas p/ explorar, organizar e

Conjunto de processos, métodos, teorias,              ...Utilizadas p/ explorar, organizar e
   ferramentas e tecnologias open-end...                 analisar, de forma semiautomática, uma
                                                         grande quantidade de dados brutos...             ... Com o intuito de identificar, descobrir,
                                                                                                          extrair, classificar e agrupar
                                                                                                          informações implícitas desconhecidas...
 Necessita, por vezes, utilizar
 processamento paralelo.

                                                     Mineração
 Utilizado em áreas como Marketing,                                                                                ... Além de avaliar correlações, tendências
 Finanças, Manufatura, Saúde, etc.                                                                                 e padrões consistentes de comportamento

                                                     de Dados
                                                                                                                   potencialmente úteis.

                                                                                                                                Como regras de associação
 Também chamada de Data Mining                                                                                                  ou sequências temporais...
    ou Prospecção de Dados.
                                                   ... Por meio de técnicas estatísticas e matemáticas.
                                                              Ex:
                                                                 redes neurais;
                                                                 algoritmos genéticos;                        ...De forma não trivial...
                                                                 inteligência artificial;
Apesar de geralmente ser utilizada em conjunto com               lógica nebulosa;
Data Warehouses, não é obrigatório que o seja.                   análise de conglomerados (clusters);
                                                                 etc.


                                                           


---

Processo de Descoberta de Conhecimento                                                          Objetivos
  Knowledge Discovery in Databases (KDD) - Descoberta

                                                                                                                               C O
  de Conhecimento em Banco de Dados.
  A mineração de dados é uma das fases do KDD.                                                                P           I
                             Interpretação

                      Data Mining      5                                                             PREVISÃO
             Transformação      4                                                                      Prever comportamentos futuros com base em compor-
                                                                                                       tamentos passados.
 Pré-procesamento        3

                                                  Mineração
    Seleção       2                                                                                     IDENTIFICAÇÃO

                                                  de Dados
                                                                                                       Identificar, através de padrões de dados, a existência
         1                                                                                             de um item, um evento ou uma atividade.

 Seleção: selecionar um conjunto de dados ou se con-
 centrar em um subconjunto de variáveis ou amostras.
 Limpeza e Pré-processamento: remoção de erros, cole-                                                   CLASSIFICAÇÃO:
 ta de informações, etc.                                                                                Particionar os dados p/ que diferentes categorias
 Transformação: os dados são transformados e consoli-                                                   possam ser identificadas com base em combinações
 dados em formas apropriadas à mineração (sumarizan-                                                    de parâmetros.
 do-os ou agregando-os).                                           OTIMIZAÇÃO:
 Mineração de dados: algoritmos e técnicas p/ extrair              Otimizar o uso de recursos limitados (como tempo,
 possíveis padrões úteis de dados.                                 espaço, dinheiro ou materiais) e maximizar variáveis
 Interpretação: os padrões encontrados são avaliados               de saída (como vendas e lucros), sob determinado
 e interpretados.                                                  conjunto de restrições.


                                                        


---

Predição                     Busca descrever a natureza de                                      Associação
     Ou Previsão             ocorrências futuras de certos eventos                                                Busca descobrir relacionamentos entre
                             com base nos acontecimentos passados.                                                variáveis correlacionando a presença
                                                                                                                  de um item com uma faixa de valores p/
                                        Objetiva prever um número/valor.                                          outro conjunto de variáveis.
                                            Compreende a busca por uma função
                                            que mapeie os registros de um BD em                            REGRAS DE ASSOCIAÇÃO: X -> Y
  Classificação           Regressão                                                                          Visam descobrir o relacionamento entre
                                            um intervalo de valores reais.
  Categorização de dados p/ a identificação de                                                               variáveis de um banco de dados.
  uma classe por meio de múltiplos atributos.
     As classes são predefinidas antes da                                                             PADRÕES SEQUENCIAIS
     análise dos resultados (aprendizado

                                                         Mineração
                                                                                                       Buscam descobrir padrões sequencias de ações ou
     supervisionado).                                                                                  eventos de forma equivalente a certos relaciona-

                                                         de Dados
                                                                                                       mentos temporais.
PRINCIPAIS FERRAMENTAS DE CLASSIFICAÇÃO:
Arvores de Decisão
  Representação gráfica das regras de classifica-
  ção, demonstrando visualmente as condições e        Tecnicas e Tarefas                             PADRÕES TEMPORAIS
                                                                                                      Semelhante à técnica dos Padrões Sequenciais,
                                                                                                      mas sempre envolve um fator temporal que permite
  probabilidades p/ se chegar a algum resultado.
Redes Neurais (Artificiais)                                                                           diferenciá-los.
                                                                                                                        um intervalo regular de tempo
  Algoritmos inspirados no cérebro de animais, com

                                                        Clusterização
  capacidade de aprender com experiências passadas,                                               Uma regra de associação deve satisfazer alguma medida
  prever um comportamento ou reconhecer um padrão,                                                de interesse do analista de dados:
  desde que apresentados e um conjunto de dados          Ou Agrupamento                              SUPORTE/PREVALÊNCIA: frequência com que um
  estruturados.                                                Particiona dados em segmentos         conjunto de itens ocorre no BD.
                                                               previamente desconhecidos com         CONFIANÇA/FORÇA: probabilidade de que exista
                                                               características semelhantes.          uma relação entre itens.


                                                           


---
