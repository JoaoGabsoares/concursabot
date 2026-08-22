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
arquivo_origem: Aula 07_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: Fluência em Dados
---

# Fluência em Dados

Aula 05
                          Receita Federal (Analista Tributário)
                                             Fluência em Dados

                                                           Autor:
                                     Diego Carvalho, Emannuelle
                        Gouveia Rolim, Equipe Informática
                                           e TI, Renato da Costa

                                            07 de Setembro de 2025

---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 05

                                                                                     Índice
1) Análise de Informações - Modelagem Lógica


2) Questões Comentadas - Análise de Informações - Modelagem Lógica - Multibancas


3) Lista de Questões - Análise de Informações - Modelagem Lógica - Multibancas

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                           48

                                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                          APRESENTAÇÃO DO TÓPICO
Meus queridos, é chegado o momento de ver como banco de dados funcionam de uma maneira um
pouco mais prática. Nós vamos entender como podemos modelar dados para que eles possam ser
representados no banco de dados e vamos descobrir diversas características que eu acredito que
vocês nem saibam que existe. Lembrem-se de que bancos de dados estão por toda parte. Aula
difícil, Diego? Não é difícil, mas é uma aula que precisa de um pouco mais de atenção \o/

       PROFESSOR DIEGO CARVALHO - www.instagram.com/professordiegocarvalho

Galera, todos os tópicos da aula possuem Faixas de Incidência, que indicam se o assunto cai
muito ou pouco em prova. Diego, se cai pouco para que colocar em aula? Cair pouco não significa
que não cairá justamente na sua prova! A ideia aqui é: se você está com pouco tempo e precisa ver
somente aquilo que cai mais, você pode filtrar pelas incidências média, alta e altíssima; se você tem
tempo sobrando e quer ver tudo, vejam também as incidências baixas e baixíssimas. Fechado?

                                             INCIDÊNCIA EM PROVA: baixíssima
                                               INCIDÊNCIA EM PROVA: baixa
                                               INCIDÊNCIA EM PROVA: média
                                                INCIDÊNCIA EM PROVA: ALTA
                                              INCIDÊNCIA EM PROVA: Altíssima

Além disso, essas faixas não são por banca – é baseado tanto na quantidade de vezes que caiu em
prova independentemente da banca e também em minhas avaliações sobre cada assunto...

        Receita Federal (Analista Tributário) Fluência em Dados                                    3
        www.estrategiaconcursos.com.br                                                            48

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 05

      Receita Federal (Analista Tributário) Fluência em Dados                        4
      www.estrategiaconcursos.com.br                                                 48

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                     MODELAGEM LÓGICA
                                                                                          INCIDÊNCIA EM PROVA: baixíssima


Pessoal, chegou a hora de estudar a modelagem lógica – que é um tipo de modelagem menos
abstrata mais próxima do modelo físico! Existem diversas implementações de modelo lógico:

                                       Principais Modelos de dados
              MODELO                                  MODELO                               MODELO
              PLANO                                   EM REDE                           HIERÁRQUIICO

    Consiste em matrizes simples,        Permite que várias tabelas sejam      Variação do Modelo em Rede que
   bidimensionais, compostas por         utilizadas simultaneamente por        limita as relações a uma estrutura
  elementos de dados – é a base de             meio de referências ou            semelhante à estrutura de uma
        planilhas eletrônicas.                     apontadores.                               árvore.

             MODELO                                   MODELO                             MODELO
       ORIENTADA A OBJETOS                          relacional                    HIERÁRQUICO-RELACIONAL

                                         Trata os dados como uma coleção       Combina a simplicidade do modelo
  Trata os dados como objetos que
                                         de tabelas compostas por linhas e          relacional com algumas
 possuem propriedades (atributos) e
                                        colunas e relacionadas por meio de       funcionalidades avançadas do
        operações (métodos).
                                                      chaves.                     modelo orientado a objetos.

        Receita Federal (Analista Tributário) Fluência em Dados                                                       5
        www.estrategiaconcursos.com.br                                                                               48

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Modelo Relacional
                                                                                           INCIDÊNCIA EM PROVA: ALTA


Galera, nós podemos dizer que os bancos de dados relacionais são aqueles que se baseiam no
princípio de que todos os dados devem estar armazenados em tabelas. Criado em 1970, ele foi
proposto originalmente para separar o armazenamento físico dos dados de sua representação
conceitual, e para fornecer uma base matemática para a representação e a consulta dos dados
fundamentado em lógica de predicados e teoria dos conjuntos.

Quando você abre um arquivo do Excel, você visualiza os dados em uma tabela! Concordam? Isso
não significa que os dados estejam também armazenados fisicamente no banco de dados como
uma tabela – uma coisa é a representação física dos dados e outra coisa é a representação
conceitual! O Modelo de Dados trata da representação conceitual dos dados fisicamente
armazenados. E esse lance de base matemática, professor? Eu nem curto matemática...

Relaxa, galera! Isso só significa que o Modelo Relacional é capaz de representar dados por meio
de uma linguagem matemática, utilizando teoria de conjuntos e lógica de predicado de
primeira ordem. O Modelo de Dados Relacional também introduziu linguagens de consulta mais
intuitivas do que as que existiam anteriormente, oferecendo uma alternativa às interfaces de
linguagem de programação e tornando muito mais rápida a escrita de novas consultas.

Uma das melhores utilidades de um banco de dados é poder consultá-lo. Vocês se lembram do
exemplo da multa? Pois é, você estava consultando uma base de dados por multas de um
determinado veículo. No entanto, o banco de dados relacional não fala português ou inglês... ele
possui a língua dele! Fiquem tranquilos que vai chegar a hora de falar sobre isso também, apenas
guardem que os modelos relacionais trouxeram linguagens mais intuitivas.


Tabelas
                                                                                       INCIDÊNCIA EM PROVA: Altíssima


Galera, o modelo relacional efetivamente representa o banco de dados como uma coleção de
relações. O que é uma relação? Informalmente, cada relação é semelhante a uma tabela de valores
em que cada linha na tabela representa uma coleção de valores de dados relacionados. Uma linha
representa um fato que normalmente corresponde a uma entidade ou relacionamento do mundo
real. Entendido?

Os nomes das tabelas e das colunas são usados para ajudar a interpretar o significado dos
valores em cada linha. Exemplo: uma tabela em que cada linha representa fatos sobre alunos
provavelmente se chamará ALUNO. As colunas dessa tabela especificam como interpretar os valores
em que cada valor se encontra, sendo que todos os valores em uma coluna são do mesmo tipo de
dado (Exemplo: NOME DO ALUNO, NUMERO DO ALUNO, TIPO DE ALUNO, CURSO).

        Receita Federal (Analista Tributário) Fluência em Dados                                                   6
        www.estrategiaconcursos.com.br                                                                           48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                                                            Tabela/relação
                     Coluna/atributo*
                                                          ALUNO
       NOME DO ALUNO                  NUMERO DO ALUNO                   TIPO DE ALUNO                            CURSO
      Diego Carvalho                      1357981                          Bolsista                 Ciência da Computação
      Renato da Costa                     2121578                          Regular                Engenharia da Computação

                                                              Domínio/tipo                                                   Linha/tupla

                        * A quantidade de colunas de uma relação é chamada de Grau ou Aridade da Relação.


Então, vamos lá! Nós sabemos que o Modelo Relacional é baseado em tabelas compostas de linhas
e colunas. Na terminologia formal, a tabela é chamada de relação, as linhas são chamadas de
tuplas e as colunas são chamadas de atributos. Por fim, o Domínio trata do tipo de dados que
descreve os tipos de valores possíveis que podem aparecer em cada coluna. Exemplo: uma coluna
DATA DE NASCIMENTO permite valores de data apenas. Vamos resumir:


            TABELA                                        RELAÇÃO                                       representa os dados e os
                                                                                                     relacionamentos entre os dados

            LINHA                                          TUPLA                                  coleção ou registro de valores de dados
                                                                                                               relacionados

            COLUNA                                      ATRIBUTO                                    dados que ajudam a interpretar o
                                                                                                    significado dos valores das linhas

     tipo de dado                                        domínio                                  descreve os tipos de valores que podem
                                                                                                       ser exibidos em uma coluna

            GRAU                                         ARIDADE                                   NÚMERO DE COLUNAS PRESENTES EM UMA
                                                                                                                RELAÇÃO

A definição dada de relações implica certas características que tornam uma relação diferente de um
arquivo ou uma tabela. Professor, você não disse que relações são tabelas? Grosso modo, elas são a
mesma coisa! Sendo rigoroso, há algumas pequenas diferenças de características que veremos
logo abaixo. Vem comigo...

  ORDENAÇÃO DE Uma relação é definida como um conjunto de tuplas. Tanto na matemática quanto na
 TUPLAS EM UMA modelagem relacional de bancos de dados, trata-se de um conjunto de elementos não duplicados
       RELAÇÃO que não possuem ordem entre si. Logo, as tuplas em uma relação não possuem nenhuma ordem
                 em particular. Em outras palavras, uma relação não é sensível à ordenação das linhas. Por que,

        Receita Federal (Analista Tributário) Fluência em Dados                                                                             7
        www.estrategiaconcursos.com.br                                                                                                     48

                                       


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                   professor? Porque muitas ordens podem ser especificadas para uma mesma relação – você pode
                   escolher ordenar uma relação de diversas maneiras diferentes.

                   Em uma relação, é irrelevante a ordenação das tuplas, mas a ordenação dos atributos/colunas
     Ordem dos     pode ser relevante dependendo do nível de abstração. Existe uma divergência na literatura
       valores     quanto a ordenação dos componentes em uma tupla. Edgar Codd, no artigo original que
 dentro de uma     estabeleceu cos conceitos do modelo relacional, afirma que a ordem das colunas é significativa.
                   Navathe segue nessa mesma linha, afirmando que uma tupla é uma lista ordenada de valores, de
    tupla e uma    modo que a ordem dos valores em uma tupla — e, portanto, dos atributos em um esquema de
      definição    relação — é importante. Entretanto, o mesmo Navathe complementa seu texto com a seguinte
 alternativa de    frase: “... em um nível mais abstrato, a ordem dos atributos e seus valores não é tão importante,
   uma relação     desde que a correspondência entre atributos e valores seja mantida”.

               Cada valor em uma tupla é um valor atômico, ou seja, ele não é divisível em componentes dentro
               da estrutura básica do modelo relacional. Logo, atributos compostos ou multivalorados não são
               permitidos. Um conceito importante é o dos valores NULL, que são usados para representar os
     Valores e valores de atributos que podem ser desconhecidos ou não se aplicam a uma tupla. Um valor
               especial – chamado NULL – é usado nesses casos. Imaginem a famosa tabela de alunos de uma
     NULLs nas escola com uma coluna adicional: Telefone Residencial! Muitas pessoas atualmente não possuem
       tuplas mais telefone residencial – eu, por exemplo, não possuo. Se eu estudo nessa escola e não possuo
               um telefone residencial, o que a coluna de Telefone Residencial deve armazenar? Nada, porque
               ou o valor é desconhecido ou o valor não existe ou o valor não se aplica!

                   O esquema de relação pode ser interpretado como uma declaração ou um tipo de afirmação (ou
 Interpretação     asserção). Como assim, professor? Lembrem-se novamente da Tabela ALUNO! Uma entidade de
   (significado)   aluno tem um Nome, CPF, Telefone, Endereço, Idade, entre outros. Cada tupla na relação pode
         de uma    então ser interpretada como um fato ou uma instância em particular da afirmação. Algumas
        relação    relações podem representar fatos sobre entidades e outras sobre relacionamentos.

Álgebra Relacional
                                                                                               INCIDÊNCIA EM PROVA: baixa


Vamos agora falar sobre Álgebra Relacional! Vocês se lembram que nós falamos que o Modelo
Relacional utiliza uma fundamentação teórica de teoria dos conjuntos? Pois é, agora nós vamos
entender isso melhor! A Álgebra Relacional recebia pouca atenção fora do campo da matemática
pura até à publicação em 1970 do modelo relacional de dados de Edgar Frank Codd. Codd propôs a
tal álgebra como a base das linguagens de consulta de banco de dados.

Definimos – assim – a álgebra relacional como uma linguagem de consulta formal, isto é, uma
coleção de operações de alto nível sobre relações ou conjuntos cujo resultado seja uma nova
relação ou conjunto. As operações em questão são: Seleção, Projeção, Produto Cartesiano, União,
Diferença, Junção e Intersecção. Sendo que as cinco primeiras são primitivas (não podem ser
obtidas a partir de outras) e as duas últimas são derivadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                                       8
        www.estrategiaconcursos.com.br                                                                               48

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Seleção (σ)


                                σ        LISTA DE condições               (RELAÇÃO)
                                  -- SELECIONA LINHAS QUE SATISFAZEM UM PREDICADO OU UMA CONDIÇÃO --


Trata-se de uma operação unária que filtra as linhas de uma tabela que satisfazem um conjunto
de condições ou predicados. Vamos ver um exemplo: imaginem que desejamos selecionar apenas
os professores maiores de 35 anos da tabela abaixo. Para tal, nós poderíamos realizar a seguinte
operação algébrica: σ IDADE>35 (PROFESSOR).

                                                       TABELA PROFESSOR
  NOME PROFESSOR         CPF          IDADE              NOME DISCIPLINA                                NATURALIDADE
   DIEGO CARVALHO   111.111.111-11      21                 INFORMÁTICA                                 DISTRITO FEDERAL
  RENATO DA COSTA   222.222.222-22      54                 INFORMÁTICA                                  RIO DE JANEIRO
    RICARDO VALE    333.333.333-33      40            DIREITO CONSTITUCIONAL                             MINAS GERAIS
  ROSENVAL JÚNIOR   444.444.444-44      32              DIREITO AMBIENTAL                                Minas gerais
  HERBERT ALMEIDA   555.555.555-55      19            DIREITO ADMINISTRATIVO                            Espírito santo

                                                            resultado
  NOME PROFESSOR         CPF          IDADE              NOME DISCIPLINA                                NATURALIDADE
  RENATO DA COSTA   222.222.222-22      54                 INFORMÁTICA                                  RIO DE JANEIRO
   RICARDO VALE     333.333.333-33      40            DIREITO CONSTITUCIONAL                            MINAS GERAIS

Notem que o resultado só contempla Renato da Costa e Ricardo Vale porque eles possuem idade
maior que 35. Lembrando que você pode utilizar quantas condições desejar :)

Projeção (π)


                                 π       LISTA DE ATRIBUTOS              (RELAÇÃO)
                                 -- PROJETA UMA NOVA TABELA APENAS COM OS ATRIBUTOS ESPECIFICADOS --


Trata-se de uma operação unária que seleciona as colunas especificadas de todas as linhas da
relação, excluindo as linhas duplicadas do resultado (chamadas de duplicatas). Em contraste com
a operação de Seleção – que seleciona as linhas que satisfazem uma condição –, a operação de
Projeção projeta as colunas especificadas na lista de atributos. Vamos ver um exemplo:

Imaginem que desejamos projetar uma nova tabela apenas com o Nome e CPF dos professores.
Para tal, nós poderíamos realizar a seguinte operação algébrica: π nome PROFESSOR, cpf (PROFESSOR).

        Receita Federal (Analista Tributário) Fluência em Dados                                                           9
        www.estrategiaconcursos.com.br                                                                                    48

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                                         TABELA PROFESSOR
  NOME PROFESSOR         CPF            IDADE              NOME DISCIPLINA                                     NATURALIDADE
   DIEGO CARVALHO   111.111.111-11        21                 INFORMÁTICA                                      DISTRITO FEDERAL
  RENATO DA COSTA   222.222.222-22        54                 INFORMÁTICA                                       RIO DE JANEIRO
    RICARDO VALE    333.333.333-33        40            DIREITO CONSTITUCIONAL                                  MINAS GERAIS
  ROSENVAL JÚNIOR   444.444.444-44        32              DIREITO AMBIENTAL                                     Minas gerais
  HERBERT ALMEIDA   555.555.555-55        19            DIREITO ADMINISTRATIVO                                 Espírito santo

                                                          resultado
                                             NOME PROFESSOR           CPF
                                              DIEGO CARVALHO     111.111.111-11
                                             RENATO DA COSTA     222.222.222-22
                                               RICARDO VALE      333.333.333-33
                                             ROSENVAL JÚNIOR     444.444.444-44
                                             HERBERT ALMEIDA     555.555.555-55

Produto Cartesiano (X)


                                (Relação A)                      X (Relação B)
                         -- RESULTA EM UMA NOVA TABELA COM TODAS AS COMBINAÇÕES DE LINHAS DE AMBAS AS RELAÇÕES --


Também chamado de Produto Cruzado ou Junção Cruzada, trata-se de uma operação binária que
produz um resultado que combina as linhas de uma tabela com as linhas de outra tabela.

             TABELA professor                                                                            TABELA disciplina
  NOME PROFESSOR              CPF                                                               NOME DISCIPLINA            código
   DIEGO CARVALHO        111.111.111-11                                                           INFORMÁTICA               101
  RENATO DA COSTA        222.222.222-22                                                      DIREITO CONSTITUCIONAL         102
    RICARDO VALE         333.333.333-33                                                        DIREITO AMBIENTAL            103
  ROSENVAL JÚNIOR        444.444.444-44                                                      DIREITO ADMINISTRATIVO         104
  HERBERT ALMEIDA        555.555.555-55

                                                               resultado
            NOME PROFESSOR                           CPF                              NOME DISCIPLINA                            CÓDIGO
             DIEGO CARVALHO                     111.111.111-11                          INFORMÁTICA                               101
            RENATO DA COSTA                     222.222.222-22                          Informática                               101
              RICARDO VALE                      333.333.333-33                          Informática                               101
            ROSENVAL JÚNIOR                     444.444.444-44                          Informática                               101
            HERBERT ALMEIDA                     555.555.555-55                          informática                               101
             DIEGO CARVALHO                     111.111.111-11                     DIREITO CONSTITUCIONAL                         102
            RENATO DA COSTA                     222.222.222-22                     DIREITO CONSTITUCIONAL                         102


        Receita Federal (Analista Tributário) Fluência em Dados                                                                           10
        www.estrategiaconcursos.com.br                                                                                                    48

                                       


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

              RICARDO VALE                        333.333.333-33                          DIREITO CONSTITUCIONAL                  102
            ROSENVAL JÚNIOR                       444.444.444-44                          DIREITO CONSTITUCIONAL                  102
            HERBERT ALMEIDA                       555.555.555-55                          DIREITO CONSTITUCIONAL                  102
             DIEGO CARVALHO                       111.111.111-11                            DIREITO AMBIENTAL                     103
            RENATO DA COSTA                       222.222.222-22                            DIREITO AMBIENTAL                     103
              RICARDO VALE                        333.333.333-33                            DIREITO AMBIENTAL                     103
            ROSENVAL JÚNIOR                       444.444.444-44                            DIREITO AMBIENTAL                     103
            HERBERT ALMEIDA                       555.555.555-55                            DIREITO AMBIENTAL                     103
             DIEGO CARVALHO                       111.111.111-11                          DIREITO ADMINISTRATIVO                  104
            RENATO DA COSTA                       222.222.222-22                          DIREITO ADMINISTRATIVO                  104
              RICARDO VALE                        333.333.333-33                          DIREITO ADMINISTRATIVO                  104
            ROSENVAL JÚNIOR                       444.444.444-44                          DIREITO ADMINISTRATIVO                  104
            HERBERT ALMEIDA                       555.555.555-55  ==219a34==


                                                                                          DIREITO ADMINISTRATIVO                  104

Notem que o resultado contempla todas as combinações das duas tabelas. Além disso, a
quantidade de colunas é igual à soma das colunas das tabelas e a quantidade de linhas é igual ao
produto da quantidade de linhas de cada tabela. Dessa forma, a tabela resultante tem quatro
colunas porque ambas as tabelas do produto cartesiano possuem duas colunas (2+2 = 4). Ademais,
a tabela resultante tem vinte linhas porque as combinações geram 5*4 = 20 linhas.

Junção (⋈)


                            RELAÇÃO a                                          condição   RELAÇÃO b
                      -- RESULTA EM UMA NOVA TABELA COM TODAS AS COMBINAÇÕES DE LINHAS QUE SATISFAZEM ALGUMA CONDIÇÃO --


Assim como o Produto Cartesiano, trata-se de uma operação binária que produz um resultado
que combina as linhas de uma tabela com as linhas de outra tabela. No entanto, isso gera um
bocado de linhas que não tem nenhum sentido, portanto a junção realiza uma seleção de linhas cujo
valor de uma determinada coluna de uma tabela é igual ao valor de uma determinada coluna de
outra tabela. Professor, não entendi nada! Relaxem, vocês vão entender com o exemplo...

Se desejarmos – em uma única tabela – as linhas da Tabela PROFESSOR e da Tabela DISCIPLINA cujo CÓDIGO
(PROFESSOR) seja igual a CÓDIGO (DISCIPLINA), temos que: PROFESSOR ⋈ CÓDIGO = CÓDIGO DISCIPLINA.

Notem quem a Operação Junção remove as colunas duplicadas, caso contrário teríamos duas
colunas com o nome de CÓDIGO. Bacana?

                                                                                                              TABELA disciplina
                                                                                                         NOME DISCIPLINA          Código


        Receita Federal (Analista Tributário) Fluência em Dados                                                                            11
        www.estrategiaconcursos.com.br                                                                                                     48

                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                                                                                           INFORMÁTICA                 101
              TABELA professor                                                                        DIREITO CONSTITUCIONAL           102
 NOME PROFESSOR          CPF          CÓDIGO                                                            DIREITO AMBIENTAL              103
 DIEGO CARVALHO 111.111.111-11         101                                                            DIREITO ADMINISTRATIVO           104
 RENATO DA COSTA 222.222.222-22        101
  RICARDO VALE     333.333.333-33      102
 ROSENVAL JÚNIOR 444.444.444-44        103
     HERBERT
                   555.555.555-55       104
     ALMEIDA
                                                                 resultado
             NOME PROFESSOR                            CPF                     CÓDIGO                            NOME DISCIPLINA
              DIEGO CARVALHO                      111.111.111-11                101                                INFORMÁTICA
             RENATO DA COSTA                      222.222.222-22                101                                Informática
               RICARDO VALE                       333.333.333-33                102                           DIREITO CONSTITUCIONAL
             ROSENVAL JÚNIOR                      444.444.444-44                103                             DIREITO AMBIENTAL
             HERBERT ALMEIDA                      555.555.555-55                104                           DIREITO ADMINISTRATIVO

União (⋃)


                                       TABELA a                               TABELA b
                           -- RESULTA NA UNIÃO DAS LINHAS DE DUAS TABELAS COM ELIMINAÇÃO AUTOMÁTICA DE DUPLICATAS --


Trata-se de uma operação binária que produz como resultado uma nova tabela que contém
todas as linhas da primeira tabela seguidas de todas as linhas da segunda tabela. A tabela
resultante possui a mesma quantidade de colunas que as tabelas originais, e tem um número de
linhas que é – no máximo – igual à soma das linhas de ambas as tabelas. Por que, professor? Porque
essa operação elimina automaticamente qualquer linha que esteja duplicada.

Professor, é possível unir duas tabelas que tenham quantidades de colunas diferentes? Não! Vamos
ver um exemplo: vamos unir as Tabelas PROFESSOR e ALUNO na Tabela RESULTADO.

                TABELA professor                                                                        TABELA aluno
      NOME              CPF              CÓDIGO                                              NOME             CPF                  CÓDIGO
 DIEGO CARVALHO 000.000.000-00            101                                               romário      555.555.555-55             101
 RENATO DA COSTA 111.111.111-11           101                                            Roberto carlos 666.666.666-66              101
  RICARDO VALE     222.222.222-22         102                                             Ronaldo fofo 777.777.777-77               102
 ROSENVAL JÚNIOR 333.333.333-33           103                                               Rivaldo      888.888.888-88             103
     HERBERT                                                                             Ronaldo gaúcho 999.999.999-99              104
                   444.444.444-44          104
     ALMEIDA

                                                                resultado
                   NOME                                             CPF                                                CÓDIGO


        Receita Federal (Analista Tributário) Fluência em Dados                                                                              12
        www.estrategiaconcursos.com.br                                                                                                       48

                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

              DIEGO CARVALHO                           000.000.000-00                               101
             RENATO DA COSTA                           111.111.111-11                               101
               RICARDO VALE                            222.222.222-22                               102
             ROSENVAL JÚNIOR                           333.333.333-33                               103
             HERBERT ALMEIDA                           444.444.444-44                               104
                  romário                              555.555.555-55                               101
             Roberto carlos                            666.666.666-66                               101
               Ronaldo fofo                            777.777.777-77                               102
                  Rivaldo                              888.888.888-88                               103
             Ronaldo gaúcho                            999.999.999-99                               104

Observação importante: essa operação somente pode ser realizada se as tabelas forem união
compatíveis, isto é, possuírem a mesma estrutura. Como assim, professor? Basicamente, a mesma
estrutura contempla dois requisitos: (1) as tabelas devem possuir a mesma quantidade de colunas;
(2) as colunas das tabelas devem possuir o mesmo domínio. Cara, professor... agora deu ruim para
mim! Pode explicar melhor? Claro que eu posso!

Suponham que temos duas tabelas: uma com cinco colunas e outra com apenas duas colunas. A
união dessas duas tabelas geraria essa coisa esquisita mostrada abaixo:

                                                           TABELA
                         COLUNA 1          COLUNA 2         COLUNA 3      COLUNA 4       COLUNA 5
                          VALOR             VALOR             VALOR        VALOR          VALOR
                          VALOR             VALOR             VALOR        VALOR          VALOR
                          VALOR             VALOR
                          VALOR             VALOR
                                                                ?           ?               ?
E se as tabelas tivessem colunas com domínios diferentes? Vejam as duas tabelas abaixo! Elas
possuem a mesma quantidade de colunas, mas observem que a Coluna DATA DE NASCIMENTO e a
Coluna CÓDIGO possuem domínios diferentes. A primeira guarda somente datas e o segundo guarda
somente números. Isso não é permitido porque uma coluna pode ter apenas um único domínio.
Vocês entenderam essa parada? Caso não, mandem ver no fórum...

              TABELA professor escolar                                           TABELA professor universitário
      NOME              CPF          Dt nascimento                          NOME               CPF              CÓDIGO
 DIEGO CARVALHO 000.000.000-00        12/10/1988                           romário        555.555.555-55         101
 RENATO DA COSTA 111.111.111-11       11/04/1961                        Roberto carlos 666.666.666-66            101
  RICARDO VALE     222.222.222-22     17/07/1979                         Ronaldo fofo     777.777.777-77         102
 ROSENVAL JÚNIOR 333.333.333-33       01/12/1983                           Rivaldo        888.888.888-88         103
     HERBERT                                                            Ronaldo gaúcho 999.999.999-99            104
                   444.444.444-44     28/02/1977
     ALMEIDA
                                                     DOMÍNIO: DATA                      DOMÍNIO: NÚMERO


        Receita Federal (Analista Tributário) Fluência em Dados                                                          13
        www.estrategiaconcursos.com.br                                                                                   48

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Intersecção (∩)


                                        TABELA a                              TABELA b
                       -- RESULTA EM UMA NOVA TABELA QUE CONTÉM OS ELEMENTOS EM COMUM ÀS DUAS TABELAS SEM REPETIÇÕES --


Trata-se de uma operação binária que produz como resultado uma tabela que contém, sem
repetições, todos os elementos que são comuns às duas tabelas fornecidas como operandos. É
importante ressaltar que a mesma restrição que valia para a operação de União também vale para
a operação de Intersecção, isto é, as tabelas devem ser união compatíveis e possuir a mesma
quantidade de colunas e elas devem possuir o mesmo domínio. Bacana?

               TABELA professor escolar                                                      TABELA professor universitário
      NOME               CPF          Dt nascimento                                    NOME               CPF           Dt nascimento
 DIEGO CARVALHO 111.111.111-11          12/10/1988                                DIEGO CARVALHO 111.111.111-11          12/10/1988
 RENATO DA COSTA 222.222.222-22         11/04/1961                                 Marcos girão      666.666.666-66      01/08/1968
  RICARDO VALE      333.333.333-33      17/07/1979                                 Décio terror      777.777.777-77      27/06/1976
 ROSENVAL JÚNIOR 444.444.444-44         01/12/1983                                RENATO DA COSTA 999.999.999-99         11/04/1961
     HERBERT                                                                         Guilherme
                    555.555.555-55      28/02/1977                                                   888.888.888-88      11/04/1961
     ALMEIDA                                                                           neves

                                                                resultado
                   NOME                                            CPF                                             Dt nascimento
              DIEGO CARVALHO                                  111.111.111-11                                        12/10/1988

Professor, por que Renato da Costa não está na intersecção? Cuidado! São duas pessoas com o
mesmo NOME e DT NASCIMENTO, mas possuem CPF diferentes – são apenas homônimos.

Diferença (-)


                                           TABELA a TABELA b
                       -- RESULTA EM UMA NOVA TABELA QUE CONTÉM AS LINHAS PRESENTES NA TABELA A E AUSENTES NA TABELA B --


Trata-se de uma operação binária que produz como resultado uma tabela que contém todas as
linhas que existem na primeira tabela e não existem na segunda tabela. No caso do exemplo
abaixo, observem que o resultado trará as linhas que estão na Tabela PROFESSOR ESCOLAR que não
estão na Tabela PROFESSOR UNIVERSITÁRIO. Fácil, não é?

        Receita Federal (Analista Tributário) Fluência em Dados                                                                     14
        www.estrategiaconcursos.com.br                                                                                              48

                                          


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

               TABELA professor escolar                                           TABELA professor universitário
      NOME               CPF          Dt nascimento                         NOME               CPF           Dt nascimento
 DIEGO CARVALHO 111.111.111-11          12/10/1988                     DIEGO CARVALHO 111.111.111-11          12/10/1988
 RENATO DA COSTA 222.222.222-22         11/04/1961                      Marcos girão      666.666.666-66      01/08/1968
  RICARDO VALE      333.333.333-33      17/07/1979                      Décio terror      777.777.777-77      27/06/1976
 ROSENVAL JÚNIOR 444.444.444-44         01/12/1983                     RENATO DA COSTA 222.222.222-22         11/04/1961
     HERBERT                                                              Guilherme
                    555.555.555-55      28/02/1977                                        888.888.888-88      11/04/1985
     ALMEIDA                                                                neves

                                                        resultado
                                       NOME                CPF            Dt nascimento
                                   RICARDO VALE       333.333.333-33       17/07/1979
                                  ROSENVAL JÚNIOR     444.444.444-44       01/12/1983
                                     HERBERT
                                                      555.555.555-55       28/02/1977
                                      ALMEIDA
Vamos resumir o que                                                     vimos sobre as operações
de Álgebra Relacional? A tabela abaixo apresenta tudo que vocês precisam saber, mas antes
vamos ver dois detalhes: primeiro, uma operação pode ser unária, quando trata de apenas de uma
tabela (Ex: σ(T1)); e pode ser binária, quando trata de duas tabelas (Ex: T1 ⋈ T2); segundo, uma
operação é dita comutativa quando a ordem da operação é indiferente. Vamos ver um exemplo?

  σCONDIÇÃO1(σCONDIÇÃO2(TABELA)) = σCONDIÇÃO2(σCONDIÇÃO1(TABELA))
Observem que a ordem das condições está invertida, mas o resultado é o mesmo! Logo, a
ordem das operações é indiferente. Uma dúvida muito comum no fórum de dúvidas trata da
comutatividade em operações de projeção. Vamos imaginar uma tabela que possua seis colunas:
A, B, C, D, E, F. Nós vamos executar duas operações de projeção, isto é, faremos a primeira e depois
faremos outra no resultado da primeira. As operações serão: πA,B (πA,B,C,D(TABELA)).

Observe que na operação de projeção interna, o resultado foi a seleção das colunas A, B, C, D. Na
operação de projeção externa – aplicado sobre o resultado da operação de projeção interna –, o
resultado foi a seleção das colunas A, B. Agora vamos fazer o inverso: πA,B,C,D (πA,B(TABELA)).
Observe que na operação de projeção interna, o resultado foi a seleção das colunas A, B. No
entanto, não é possível fazer a operação de projeção externa sobre esse resultado. Por que?

Porque a operação de projeção externa buscaria selecionar as colunas A, B, C, D de A, B. Isso não
faz nenhum sentido! Como eu vou selecionar quatro colunas de uma tabela que só possui duas
colunas? Como a ordem das operações não é indiferente, podemos afirmar que a operação de
projeção não é comutativa. Das operações estudadas em aulas, apenas a operação de projeção e
diferença não são comutativas. Vamos agora à tabela que resume o que vimos:

        Receita Federal (Analista Tributário) Fluência em Dados                                                          15
        www.estrategiaconcursos.com.br                                                                                   48

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

  OPERAÇÃO    SÍMBOLO COMUTATiva          ARIDADE                              FINALIDADE
                                                       Seleciona todas as linhas que satisfazem a condição de
   SELEÇÃO      σ(T1)       Sim           Unária       seleção de uma Tabela T1.

                                                       Produz uma nova tabela com apenas algumas das colunas de
  PROJEÇÃO      Π(T1)       Não           Unária       uma tabela T1 e remove linhas duplicadas.

                                                       Produz uma nova tabela com todas as combinações
  PRODUTO
               T1 X T2      Sim           Binária      possíveis de linhas de duas tabelas T1 e T2.
 CARTESIANO
                                                       Produz uma nova tabela com todas as combinações
   JUNÇÃO      T1 ⋈ T2      Sim           Binária      possíveis de linhas de duas tabelas T1 e T2 que satisfazem
                                                       uma condição de seleção.
                                                       Produz uma nova tabela que inclui todas as linhas das Tabela
    UNIÃO      T1 ⋃ T2      Sim           Binária      T1 e T2, eliminando as duplicatas – as tabelas devem ser
                                                       união-compatíveis.
                                                       Produz uma tabela que inclui todas as linhas em comum das
 INTERSECÇÃO T1 ∩ T2        Sim           Binária      Tabela T1 e T2 – as tabelas devem ser união-compatíveis.

                                                       Produz uma tabela que inclui todas as linhas de uma Tabela
  DIFERENÇA    T1 - T2      Não           Binária      T1 que não estão na Tabela T2 – as tabelas devem ser união
                                                       compatíveis.


Visões (Views)
                                                                                              INCIDÊNCIA EM PROVA: média


Galera, nós vimos que uma view é, em geral, um subconjunto do banco de dados, isto é, se você
deseja visualizar apenas uma parte dos dados de uma ou mais tabelas, você pode criar uma visão
personalizada dos dados. Ela não necessariamente existe em forma física – ela é considerada,
portanto, uma tabela virtual. A definição formal afirma que uma view é basicamente uma única
tabela que é derivada de outras tabelas (reais ou virtuais). Como é, professor?

Pensa comigo: um banco de dados relacional possui um bocado de tabelas – essas tabelas são
tabelas reais cujas linhas estão armazenadas fisicamente no banco de dados. Uma view funciona
como uma tabela virtual cujo comportamento se assemelha a uma tabela real de banco de
dados, no entanto sem armazenar os dados – essas estruturas sempre dependem da base de
dados que está realmente armazenada fisicamente.

Por ser uma tabela virtual, há uma limitação das possíveis operações de atualização que podem ser
aplicadas às views, mas não há qualquer limitação à operação de consulta de uma view. O que
você quer dizer com isso, professor? Eu quero dizer que até é possível inserir, atualizar ou excluir

        Receita Federal (Analista Tributário) Fluência em Dados                                                     16
        www.estrategiaconcursos.com.br                                                                              48

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 05

dados de uma view – exceto quando a view não é atualizável1. No entanto, você sempre poderá
consultar uma view – não há nenhuma limitação quanto a isso!

A melhor maneira de entender é por meio de um exemplo! Em primeiro lugar, vejam na imagem
anterior que a view é basicamente um subconjunto de tabelas de um banco de dados ou do
relacionamento entre tabelas de um banco de dados. Em segundo lugar, vejam a tabela a seguir
que apresenta diversas colunas que armazenam dados sobre professores, como Nome, CPF, Idade,
Disciplina e Naturalidade.

                                                                             TABELA PROFESSOR
          NOME                        CPF                 IDADE                  DISCIPLINA               NATURALIDADE
     DIEGO CARVALHO              111.111.111-11             21                  INFORMÁTICA              DISTRITO FEDERAL
    RENATO DA COSTA              222.222.222-22             54                  INFORMÁTICA               RIO DE JANEIRO
      RICARDO VALE               333.333.333-33             40             DIREITO CONSTITUCIONAL          MINAS GERAIS
    ROSENVAL JÚNIOR              444.444.444-44             32               DIREITO AMBIENTAL             Minas gerais
    HERBERT ALMEIDA              555.555.555-55             19             DIREITO ADMINISTRATIVO         Espírito santo

Essa tabela seria uma tabela real armazenada fisicamente no banco de dados. No entanto, vamos
supor um contexto em que eu não precise visualizar todas essas colunas – o que eu preciso mesmo
é visualizar a todo momento NOME e CPF dos Professores. O que eu posso fazer? Eu posso criar uma
view que contenha apenas essas duas colunas e que seria criada por meio de uma consulta
previamente definida, analisada e otimizada.

Notem que essa view me oferece uma nova maneira de observar dados de um ou mais tabelas –
sim, uma view pode envolver qualquer quantidade de tabelas! Além disso, podemos afirmar que o
uso de view em banco de dados é uma forma de aumentar a sua segurança, uma vez que ela
impede o acesso direto aos dados de uma tabela, ocultando colunas e fornecendo somente os
dados considerados necessários aos usuários.

Dito isso, eu preciso contar para vocês que existe um tipo específico de view que permite que ela
seja armazenada – trata-se da View Materializada. Esse tipo de view é armazenado de forma não
volátil, isto é, ela é de fato armazenada fisicamente, em constraste com as views tradicionais.
Ademais, o desempenho de acesso é melhor que o de uma view não materializada, visto que o
resultado de uma view materializada já fica armazenado no banco de dados.


Índices (Index)
                                                                                                                INCIDÊNCIA EM PROVA: baixa

1 Em geral, uma view é considerada atualizável quando trata apenas de uma tabela, entre outras regras.

              Receita Federal (Analista Tributário) Fluência em Dados                                                                 17
              www.estrategiaconcursos.com.br                                                                                          48

                                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Galera, a primeira página desse livro eletrônico possui um índice. Qual é a sua maior utilidade?
Basicamente, ele ajuda a encontrar informações no livro de forma mais rápida. Se não houvesse um
índice e você estivesse interessado em estudar apenas álgebra relacional, você teria que percorrer
todo o livro até encontrar esse tópico. Por meio do índice, você consegue encontrar em página
está esse tópico e acessá-lo diretamente de forma rápida e sem complicações.

Dessa forma, podemos concluir que os índices são uma estrutura de acesso utilizados para
otimizar o desempenho de consultas a registros em uma base de dados relacional. Ele permite
ao servidor de banco de dados encontrar e trazer linhas específicas muito mais rápido do que faria
sem o índice. No entanto, os índices também produzem trabalho adicional para o sistema de banco
de dados como um todo devendo, portanto, serem utilizados com parcimônia.

Índices podem ser classificados em primários (também chamados de índices clusterizados) ou
secundários (também chamados de índices não clusterizados). O índice primário é utilizado para
identificar exclusivamente cada linha na tabela e define a organização física dos dados na tabela. Já
um índice secundário é criado em uma coluna que não é a chave primária da tabela, mas é
frequentemente usada como critério de consulta.

A principal diferença entre um índice primário e um índice secundário está na maneira como os
dados são organizados: índices primários determinam a ordem física dos dados na tabela e
índices secundários não alteram a ordem física dos dados, mas mantém uma estrutura
separada que mapeia os valores da coluna indexada para as posições correspondentes nas
páginas de dados da tabela. Entendido?


Chaves
                                                                                       INCIDÊNCIA EM PROVA: ALTA


Vamos lá! No Modelo Relacional, uma tabela é definida como um conjunto de linhas. Por definição,
todos os elementos de um conjunto são distintos; logo, todas as linhas em uma relação também
precisam ser distintas. O que isso significa? Isso significa que duas linhas não podem ter a mesma
combinação de valores para todas as suas colunas. Agora chegamos a um dos conceitos mais
importantes quando falamos de banco de dados: chaves!

Uma superchave é um conjunto de uma ou mais colunas que, tomadas coletivamente, permitem
identificar de maneira unívoca uma linha de uma tabela. Em outras palavras, não podem existir duas
ou mais linhas de uma tabela com o mesmo valor de uma superchave. Dizemos, portanto, que
uma superchave especifica uma restrição de chave, isto é, duas linhas não podem ter os
mesmos valores de superchave.

No entanto, uma superchave pode ter atributos redundantes, de modo que um conceito mais
útil é o de uma chave, que não tem redundância. Como assim, professor? Vejam a tabela abaixo:
nós poderíamos dizer que uma possível chave seria {NOME + CPF + IDADE + DISCIPLINA +

        Receita Federal (Analista Tributário) Fluência em Dados                                             18
        www.estrategiaconcursos.com.br                                                                      48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

NATURALIDADE}. Notem que esse conjunto de atributos, tomados coletivamente, identificam de
maneira unívoca qualquer linha da tabela. Bacana?

                                                  TABELA PROFESSOR
        NOME             CPF         IDADE             DISCIPLINA                       NATURALIDADE
   DIEGO CARVALHO   111.111.111-11     21             INFORMÁTICA                      DISTRITO FEDERAL
  RENATO DA COSTA   222.222.222-22     54             INFORMÁTICA                       RIO DE JANEIRO
    RICARDO VALE    333.333.333-33     40        DIREITO CONSTITUCIONAL                  MINAS GERAIS
  ROSENVAL JÚNIOR   444.444.444-44     32          DIREITO AMBIENTAL                     Minas gerais
  HERBERT ALMEIDA   555.555.555-55     19        DIREITO ADMINISTRATIVO                 Espírito santo

No entanto, vocês concordam comigo que há uma redundância nessa superchave? Não é obrigatório
ter uma chave composta por todas as colunas. Acompanhem meu raciocínio:

                    { NOME + CPF + IDADE + DISCIPLINA + NATURALIDADE }
                         Essa superchave é composta por todas as cinco colunas.
                                { NOME + CPF + IDADE + DISCIPLINA }
                            Essa superchave é composta por quatro colunas.
                                       { NOME + CPF + IDADE }
                              Essa superchave é composta por três colunas.
                                             { NOME + CPF }
                             Essa superchave é composta por duas colunas.
                                                  { CPF }
                              Essa superchave é composta por uma coluna.

Percebam que, se nós eliminamos quatro colunas, ainda é possível identificar de forma unívoca
qualquer linha dessa tabela, então todas as colunas eliminadas estavam redundantes. Por que?
Porque { CPF} é um identificador único – nunca duas pessoas terão o mesmo { CPF }. Além disso,
podemos concluir que toda tabela possui pelo menos uma superchave padrão, que é o conjunto
de todas as colunas de uma tabela. Perfeito?

Agora vou dizer uma coisa para vocês: um conceito mais interessante que o de superchave é o
conceito de chave. Uma chave também precisa identificar de forma unívoca qualquer linha de uma
tabela, mas precisa satisfazer outra condição: ela precisa ser uma superchave mínima, isto é, uma
superchave da qual não podemos remover nenhum atributo e ainda mantermos uma restrição
de chave. Para que um atributo seja considerado chave, deve ser único e mínimo.

Além disso, é importante salientar que há uma diferença entre superchave e chave composta. Uma
chave composta é uma superchave mínima que possui mais de um atributo. Como é, Diego?
Suponha que uma tabela não possui nenhum atributo que sozinho identifica uma linha/registro.
Você pode escolher como chave composta, por exemplo, { NOME + DATA DE NASCIMENTO}. Essa
combinação é única e mínima, logo é chave e superchave.

        Receita Federal (Analista Tributário) Fluência em Dados                                           19
        www.estrategiaconcursos.com.br                                                                    48

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Por outro lado, a combinação { NOME + DATA DE NASCIMENTO + NACIONALIDADE} não é uma chave
composta, porque ela não é mínima, visto que { NOME + DATA DE NASCIMENTO} já identificava
univocamente uma linha/registro em uma tabela. Logo, uma chave composta é uma superchave
mínima que possui mais de um atributo. Lembrando novamente que uma chave (primária,
candidata, etc) é uma superchave mínima.

Dito isso, podemos concluir que qualquer conjunto de colunas que inclua { CPF } será considerada
uma superchave. No entanto, { NOME + CPF + IDADE } não será uma chave, porque remover { NOME}
ou { IDADE } ou ambos do conjunto ainda nos deixa com uma superchave. Em outras palavras, uma
chave é uma superchave com a propriedade adicional de que a remoção de qualquer uma de
suas colunas a faz deixar de identificar unicamente uma linha da tabela.

Em geral, uma tabela pode ter mais de uma chave. Nesse caso, cada uma das chaves é chamada de
Chave Candidata. Por exemplo: imaginem que na tabela acima houvesse também uma coluna de {
RG }. Ora, tanto { CPF } quanto { RG } identificam de forma unívoca uma linha de uma tabela, uma vez
que não existem duas pessoas com o mesmo { RG } ou { CPF }. Logo, qualquer uma das duas poderia
ser escolhida para ser a chave primária de uma tabela. Chave o que, professor?

Pois é, mais um conceito! É comum designar uma das chaves candidatas como chave primária
de uma relação. Essa é a chave candidata cujos valores são utilizados para identificar linhas em uma
tabela. Notem que, quando uma tabela possui várias chaves candidatas, a escolha de uma para se
tornar a chave primária é um tanto quanto arbitrária; porém, normalmente, é melhor escolher uma
chave primária com uma única coluna ou um pequeno número de colunas.

Por fim, as chaves candidatas que não foram escolhidas para serem chaves primárias são
designadas como chaves únicas ou chaves secundárias. Bem, pessoal, nós falamos bastante sobre
os tipos de chave. Agora vamos falar um pouquinho sobre os tipos de restrições! Navathe afirma
que no banco de dados relacional normalmente haverá muitas relações, e as tuplas nessas relações
costumam estar relacionadas de várias maneiras.

O estado do banco de dados inteiro corresponderá aos estados de todas as suas relações em
determinado ponto no tempo. Em geral, existem muitas restrições (ou constraints) sobre os valores
reais em um estado do banco de dados. Essas restrições são derivadas das regras no minimundo
que o banco de dados representa. As diversas restrições sobre os dados podem ser especificadas
em um banco de dados relacional na forma de restrições, que podem ser divididas em três tipos:

 Restrições Implícitas: também chamadas de restrições inerentes ao modelo, são restrições
  inerentes ao modelo de dados (Ex: não são permitidas tuplas duplicadas em uma relação – trata-
  se de uma restrição implícita ao próprio modelo de dados relacional).

                subTIPOS DE RESTRIÇÃO                                    DESCRIÇÃO
                                        Restringe que uma chave primária se repita – uma chave primária diferencia
      Restrição de chave OU UNICIDADE de forma única os registros de uma relação.

        Receita Federal (Analista Tributário) Fluência em Dados                                                 20
        www.estrategiaconcursos.com.br                                                                          48

                                    


---

   Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Aula 05

 Restrições Explícitas: também chamadas de restrições baseadas no esquema, são restrições
  que podem ser expressas diretamente nos esquemas do modelo de dados. Em geral,
  especificando-as via DDL (Ex: o campo NOME não pode conter números).

                     subTIPOS DE RESTRIÇÃO                                                 DESCRIÇÃO
                                       Restringe que um campo de uma relação tenha valores diferentes daqueles
    Restrição de INTEGRIDADE DE domínio
                                       definidos para o campo específico.
                                       Restringe que uma chave primária tenha valores nulos (NULL). Pode ser
  Restrição de Integridade de ENTIDADE considerada uma subcategoria da restrição de domínio.
                                       Restringe que a chave estrangeira de uma tabela seja inconsistente com a
  Restrição de Integridade Referencial chave candidata da tabela referenciada.
                                       Restringe que uma chave primária se repita, isto é, uma chave primária
     Restrição de INTEGRIDADE DE chave diferencia de forma única os registros (linhas) de uma relação (tabela).


 Restrições Semânticas: também chamadas de restrições baseadas na aplicação, não podem
  ser expressas diretamente nos esquemas do modelo de dados, e, portanto, devem ser expressas
  e impostas pela aplicação (Ex: o número de telefone não pode ter mais de 10 dígitos).

                     subTIPOS DE RESTRIÇÃO                                                 DESCRIÇÃO
                                                  Assegura que o conteúdo dos campos de um banco de dados reflita de
    RESTRIÇÃO DE INTEGRIDADE SEMÂNTICA
                                                  forma precisa as regras de negócio2.


Vamos detalhar um pouco mais! A restrição de integridade de entidade afirma que nenhum valor
de chave primária pode ser NULL. Por que? Galera, o valor da chave primária é utilizado para
identificar linhas individuais em uma tabela. Ter valores NULL para a chave primária implica que
não podemos identificar algumas linhas. Por exemplo: se duas ou mais linhas tivessem NULL para
suas chaves primárias, não conseguiríamos distingui-las ao tentar referenciá-las por outras tabelas.

As restrições de integridade de chave e as restrições de integridade de entidade são
especificadas sobre relações individuais. A restrição de integridade referencial é um pouco
diferente, ela é especificada entre duas tabelas e utilizada para manter a consistência entre linhas
nas duas tabelas. Informalmente, a restrição de integridade referencial afirma que uma linha em
uma tabela que referencia outra tabela precisa se referir a uma linha existente nessa tabela.

Eu sei que está confuso, então é hora de vermos um exemplo. Imaginem um cenário em que um
professor pode ministrar diversas disciplinas, mas uma disciplina só pode ser ministrada por um
único professor. Observem abaixo que a chave primária da Tabela PROFESSOR se tornou uma chave
estrangeira da Tabela DISCIPLINA, no entanto continua referenciando a Tabela Professor. Por
isso, dizemos que se trata de uma restrição de integridade referencial.

2
  Não são diretamente expressas no esquema do banco de dados e devem ser construídas para refletir as regras de negócio específicas do minimundo
sendo modelado. Em geral, empregam-se triggers (ou gatilhos). Ex: o salário de um funcionário não deve ser superior ao salário de seu supervisor.

           Receita Federal (Analista Tributário) Fluência em Dados                                                                           21
           www.estrategiaconcursos.com.br                                                                                                    48

                                              


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 05

                                                                             CHAVE ESTRANGEIRA (REFERENCIA A TABELA PROFESSOR)


                     TABELA professor                                                            TABELA disciplina
        CPF professor              NOME PROFESSOR                              código            NOME DISCIPLINA           CPF professor
        111.111.111-11               DÉCIO TERROR                               101                 PORTUGUÊS              111.111.111-11
        222.222.222-22             GUILHERME NEVES                                                    DIREITO
                                                                                102                                        333.333.333-33
        333.333.333-33               RICARDO VALE                                                 CONSTITUCIONAL
        444.444.444-44             ROSENVAL JÚNIOR                                                    DIREITO
                                                                                103                                        555.555.555-55
        555.555.555-55             HERBERT ALMEIDA                                                ADMINISTRATIVO
        666.666.666-66               Marcos girão                               104             DIREITO AMBIENTAL          444.444.444-44
                                                                                105              NOÇÕES DE LÓGICA          222.222.222-22
        CHAVE PRIMÁRIA (TABELA PROFESSOR)                                       CHAVE PRIMÁRIA (TABELA DISCIPLINA)
                                                                                106             DIREITO TRIBUTÁRIO         333.333.333-33


Para ser considerada uma chave estrangeira, ela deve satisfazer duas regras: primeiro, as colunas
que a compõem devem ter o mesmo domínio que as colunas da chave candidata da tabela
referenciada; segundo, o valor da chave estrangeira em uma relação deve ocorrer também na
tabela referenciada ou ser nula (veremos no próximo tópico). Por fim, é possível haver um auto-
relacionamento, isto é, uma coluna referenciar outra coluna da mesma tabela.

           TIPOS DE chave                   Em inglês                                          descrição
                                                           Conjunto de uma ou mais colunas que, tomadas coletivamente,
              SUPERCHAVE                    SUPERKEY
                                                           permitem identificar de maneira unívoca uma linha.
                                                           Superchaves de tamanho mínimo, candidatas a serem possíveis
          CHAVE CANDIDATA               CANDIDATE KEY
                                                           chaves primárias de uma tabela.
                                                           Chaves cujas colunas são utilizadas para identificar linhas em uma
           CHAVE PRIMÁRIA                PRIMARY KEY
                                                           tabela – em geral, vêm sublinhada.
                                                           Chaves candidatas a serem possíveis chaves primárias de uma
    CHAVE SECUNDÁRIA/alternativa        SECONDARY KEY
                                                           tabela, mas que não foram escolhidas.
                                                           Chaves de uma tabela que fazem referência à chave candidata de
         CHAVE ESTRANGEIRA                FOREIGN KEY
                                                           outra tabela, ou até mesmo da própria tabela.
                                                           Chaves primárias artificiais criadas para identificar de maneira
          Chave substituta              Surrogate key
                                                           unívoca uma linha3.


                                                                ATENÇÃO
      CESPE             O CESPE TEM O ENTENDIMENTO DE QUE A CHAVE ESTRANGEIRA REFERENCIA A CHAVE
                        PRIMÁRIA (E, NÃO, CANDIDATA) DE OUTRA TABELA (OU DA MESMA TABELA).

Relacionamentos
                                                                                                                    INCIDÊNCIA EM PROVA: média

3
 Professor, para que criar uma chave artificial se nós podemos usar as chaves naturais de uma tabela? Galera, há uma infinidade de sistemas que
utilizam, por exemplo, CPF para identificar uma pessoa. E se o governo cria um cadastro único de pessoas que tem outro formato de forma que as
pessoas não precisam mais ter CPF? É improvável, mas – para garantir – é interessante utilizar chaves substitutas (Surrogate Keys).

           Receita Federal (Analista Tributário) Fluência em Dados                                                                         22
           www.estrategiaconcursos.com.br                                                                                                  48

                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Pessoal, nós vimos no tópico anterior que tabelas podem se relacionar por meio de chaves. Agora,
o que é um relacionamento? Um relacionamento nada mais é que uma associação entre tabelas!
Vocês sabem que um banco de dados é composto por diversas tabelas (Professor, Aluno, Disciplina,
etc). Embora as informações estejam separadas em cada uma das tabelas, na prática devem
existir relacionamentos entre essas tabelas. Como assim, professor?

Ora, um Professor ministra uma Disciplina, assim como um Aluno estuda uma Disciplina. Em um
Banco de Dados, precisamos de alguma maneira para representar estes relacionamentos que
ocorrem em nosso dia a dia em termos das tabelas e de seus atributos. Isto é possível com a
utilização de relacionamentos entre tabelas, os quais podem ser de três tipos: um-para-um (1:1),
um-para-muitos (1:N) ou muitos-para-muitos (N:M).

Professor, o que são esses números e letras ao lado dos relacionamentos? Nós chamamos isso de
cardinalidade! Ela se refere à exclusividade dos valores de dados contidos em uma determinada
coluna de uma tabela do banco de dados. Em outras palavras, é o número máximo e mínimo de
ocorrências de uma entidade que estão associadas às ocorrências de outra entidade que participa
do relacionamento. Fiquem tranquilos, vocês vão entender isso logo mais...

Relacionamento Um-Para-Um (1:1)

Trata-se de um relacionamento em que uma linha de uma tabela está associada com uma e
apenas uma linha de outra tabela. Exemplo: suponha uma Tabela País, que armazena o nome de
todos os países do mundo; e uma Tabela Capital, que armazena o nome das capitais de todos os
países do mundo. Sabe-se que um país possui somente uma capital e uma capital só é capital de um
único país. Logo, trata-se de um relacionamento um-para-um (1:1).

Relacionamento Um-Para-Muitos (1:N)

Trata-se de um relacionamento em que uma linha de uma tabela está associada a uma ou mais
linhas de outra tabela. Exemplo: suponha uma Tabela Pessoa, que armazena dados de diversas
pessoas; e uma Tabela Cartão, que armazena dados sobre diversos cartões. Em nosso contexto,
sabe-se que uma pessoa pode possuir zero ou vários cartões, mas um cartão só pode pertencer a
uma única pessoa. Bacana?

Relacionamento Muitos-Para-Muitos (N:M)

Trata-se de um relacionamento em que várias linhas de uma tabela se associam a várias linhas
de outra tabela. Exemplo: suponha uma Tabela Professor, que armazena dados de diversos
professores; e uma Tabela Aluno, que armazena dados sobre diversos alunos. Em nosso contexto,
sabe-se que um professor pode ter diversos alunos e um aluno pode ter diversos professores, por
isso se trata de um relacionamento muitos-para-muitos.

        Receita Federal (Analista Tributário) Fluência em Dados                              23
        www.estrategiaconcursos.com.br                                                       48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Agora mudando um pouco de assunto: vocês se lembram que eu disse que chaves estrangeiras podem
ser nulas? Pois é, uma dúvida muito comum que eu recebo no fórum de dúvidas trata justamente
desse ponto. Como uma chave primária não pode ser nula, mas uma chave estrangeira que referencia
uma chave primária pode ser nula? Galera, quando existe um relacionamento não obrigatório, é
possível que uma instância não esteja associada a outra entidade.

Vamos pensar em um contexto em que uma prefeitura deseja armazenar dados sobre os alunos e
escolas de uma cidade. Para tal, ela possui uma tabela de alunos e outra de escolas, sabendo que
um aluno pode estar frequentando zero ou uma escola e uma escola pode possuir zero ou vários
alunos. Como assim, Diego? Esse é o relacionamento não obrigatório, ou seja, a cardinalidade
mínima é zero.

Nesse contexto, é possível concluir que estamos falando de um relacionamento 1:N entre escola e
aluno, em que a chave primária de escola se torna chave estrangeira de aluno. A prefeitura pode
verificar todas as escolas da cidade e armazenar na tabela de escolas. Da mesma forma, ela pode
verificar todas as crianças em idade escolar e armazenar na tabela de alunos. Nesse contexto, pode
haver crianças na tabela de alunos cuja coluna de chave estrangeira seja nula.

Percebam na tabela seguinte que Davi não possui nenhum valor em sua coluna de chave
estrangeira, logo ela é – sim – nula. Como pode ocorrer isso, professor? Galera, um aluno pode não
estar matriculado em nenhuma escola por não ter dinheiro; por ter que trabalhar para ajudar os
pais; por estar fazendo algum tratamento de saúde; por ainda não ter feito inscrição em nenhuma
escola. Sei lá... o importante é que a chave estrangeira pode ser nula!


                           A CHAVE PRIMÁRIA DA TABELA escola SE TORNA CHAVE ESTRANGEIRA DA TABELA aluno

                    TABELA escola                                                             TABELA aluno
   código_escola                     NOME                              código_aluno              nome                Código_escola
        001                Colégio Leonardo da vinci                        101                  Alice                    001
        002                   Colégio dom pedro II                          102                Bernardo                   001
        003               Colégio marista champagnat                        103                  Clara                    004
        004                     Colégio la salle                            104                   Davi
                                                                            105                  enzo                      002
                                                                            106                fernanda                    004
       CHAVE PRIMÁRIA (TABELA escola)                                          CHAVE PRIMÁRIA (TABELA aluno)

Regras de Codd
                                                                                                               INCIDÊNCIA EM PROVA: baixa

Vamos falar agora sobre as 12 Regras de Codd! Primeira informação interessante: Edgar F. Codd é
simplesmente o cara que criou o modelo de banco de dados relacional – ele era um matemático


        Receita Federal (Analista Tributário) Fluência em Dados                                                                      24
        www.estrategiaconcursos.com.br                                                                                               48

                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

britânico que criou as bases para grande parte da disciplina de banco de dados. Segunda informação
interessante: as 12 regras de Codd eram 13! É o que, Diego? Sim, é porque são enumeradas de 0 a
12, mas – no total – são 13 regras.

E sobre o que tratam essas regras? Elas tratam de doze regras que definem o que é necessário para
que um Sistema Gerenciador de Banco de Dados (SGBD) seja considerado relacional. Nós sabemos
que existem SGBDs que obedecem a diversos paradigmas diferentes, como orientados a objetos,
hierárquicos, multidimensionais, entre outros – as regras que veremos a seguir tratam tão somente
dos requisitos para um paradigma relacional. Vamos conhecê-las...

  REGRA 00 Regra Fundamental/Base

Para que um sistema que seja considerado como um SGBD Relacional, ele deverá gerenciar bancos
de dados exclusivamente através de suas capacidades relacionais (tabelas, linhas, colunas,
restrições, etc). Em outras palavras, não é só o armazenamento dos dados em si que deve obedecer
a regras relacionais, mas também seu gerenciamento como controle de permissão, catálogo de
metadados, controle de concorrência – tudo gerenciado como tabelas.

  REGRA 01 Regra da Informação

Todas as informações (todas mesmo, inclusive metadados) de um banco de dados relacional devem
ser representadas logicamente como dados dentro de colunas pertencentes a registros de uma
tabela. Em outras palavras, existe uma – e apenas uma – maneira de representar os dados: como
valores dentro de colunas dentro de registros de uma tabela. Lembrando que uma tabela é
composta por linhas ou registros, que contêm colunas, que armazenam valores.

  Regra 02 Regra de Garantia de Acesso

Ora, todos os dados devem ser acessíveis. Logo, deve-se garantir que todos os valores de uma
tabela possam ser acessados por meio de uma combinação de nome de tabela, valor de chave
primária e nome de coluna. Em outras palavras, o nome de uma tabela é capaz de identificá-la em
um banco de dados; o valor da chave primária permite que eu identifique uma linha específica dessa
tabela; e o nome de uma coluna permite que eu encontre um determinado valor dessa linha.

  Regra 03 Regra do Tratamento Sistemático de Valores Nulos

Os valores nulos (que são diferentes da cadeia de caracteres vazia, do valor zero ou de qualquer
outro número) são suportados pelo SGBD Relacional para representar informação ausente ou não
aplicável e tratados de uma maneira sistemática, independentemente do tipo de dados. Em outras
palavras, o sistema deve ser capaz de tratar sistematicamente valores nulos – não importa se uma
determinada coluna armazena um determinado tipo, ela deverá ser capaz de tratar o valor nulo.

  Regra 04 Regra do Catálogo Online baseado no Modelo Relacional

        Receita Federal (Analista Tributário) Fluência em Dados                                25
        www.estrategiaconcursos.com.br                                                         48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

A descrição do banco de dados está representada, no nível lógico, da mesma maneira que os dados
comuns, de forma que os usuários autorizados possam aplicar a eles a mesma linguagem relacional
de consulta utilizada para consultar dados normais. Em outras palavras, o catálogo de dados deve
ser armazenado e gerenciado como um dado comum, isto é, em tabelas do banco de dados
disponíveis aos usuários autorizados. Trata-se de uma consequência da Regra 0!

Professor, por que é um catálogo online? Ora, lembrem-se que o catálogo armazena dados sobre os
dados, logo alterações nas estruturas dos dados alteram também os metadados de forma online.

  Regra 05 Regra da Sublinguagem Ampla/Compreensiva de Dados

O Banco de Dados Relacional pode oferecer suporte a múltiplas linguagens e meios de acesso. No
entanto, deve existir pelo menos uma linguagem declarativa bem definida com suporte às
seguintes operações: (1) definição de dados; (2) definição de views; (3) manipulação de dados; (4)
restrições de integridade; (5) autorização; (6) controle de transação. Aqui basta lembrar da
Linguagem SQL (Structured Query Language).

A SQL possui diversas sublinguagens: (1) DDL, para definição de dados; (2) VDL, para definição de
views; (3) DML, para manipulação de dados; (4) DDL, para restrições de integridade; (5) DCL, para
autorização; e (6) TCL, para controle de transação. Por que ela é uma linguagem declarativa? Porque
não há uma preocupação em fazer um passo a passo para executar uma rotina – faz-se apenas uma
ou mais declarações. O sistema é responsável por executar a rotina da maneira que bem entender.

O SGBD pode até ser manipulado por várias linguagens, interface gráfica, etc – desde que exista ao
menos uma linguagem que englobe todas as funcionalidades listadas anteriormente.

  Regra 06 Regra da Atualização por meio de Views

Toda view teoricamente atualizável deve ser também atualizável na prática por meio do sistema.
Essa é uma regra complicada de entender – sugiro memorizá-la! Lembrem-se que as views nem
sempre podem ser atualizáveis, ou seja, uma alteração na view nem sempre gera uma mudança de
estado nas tabelas associadas. No entanto, se uma determinada view for teoricamente atualizável,
deverá ser possível atualizá-la via sistema.

  Regra 07 Regra da Inserção, Atualização e Exclusão de Alto Nível

A capacidade de gerenciar uma relação base ou uma relação derivada com um só operando se aplica
não somente à extração de dados, mas também à inserção, atualização e remoção dos dados. Em
outras palavras, se você é capaz de fazer consultas a um conjunto de dados por meio de comandos
de alto nível (isto é, utilizando comandos simples), você também deverá ser capaz de fazer
inserções, atualizações e exclusões da mesma maneira.

Ex o comando select * from tabela busca todas as linhas de uma determinada tabela. Ora, se isso
pode ser feito para recuperar dados, também deve poder ser feito para outros comandos.


        Receita Federal (Analista Tributário) Fluência em Dados                                 26
        www.estrategiaconcursos.com.br                                                          48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

  Regra 08 Regra da Independência Física de Dados

Aplicações e recursos permanecem logicamente inalterados quando ocorrem mudanças no
método de acesso ou na forma de armazenamento físico. Logo, quando for necessária alguma
modificação na forma como os dados são armazenados fisicamente, nenhuma alteração deve ser
necessária nas aplicações que fazem uso do banco de dados. Devem também permanecer
inalterados os mecanismos de consulta e manipulação de dados utilizados pelos usuários finais.

  Regra 09 Regra da Independência Lógica de Dados

Aplicações e recursos ad hoc (formas mais flexíveis de pesquisar informações sobre dados) não são
afetados logicamente quando de alterações de estruturas de tabela que preservem os valores
originais da tabela (alteração da ordem ou inserção de colunas). Alterações nas relações e
nas views causam pouco ou nenhum impacto nas aplicações. É possível alterar o esquema
conceitual do banco sem ter que modificar os esquemas externos ou aplicações.

  Regra 10 Regra da Independência de Integridade

As aplicações não são afetadas quando ocorrem mudanças nas regras de restrições de integridade.
Deve ser possível que todas as regras de integridade sejam definidas na linguagem relacional e
armazenadas no catálogo de sistema e, não, no nível de aplicação. As várias formas de integridade
do banco de dados (integridade de entidade, referencial, restrição, etc) precisam ser estabelecidas
dentro do catálogo do sistema e ser totalmente independente da lógica dos aplicativos.

Exemplo: um programador não precisará criar regras de restrições de integridade na lógica de
programação de uma aplicação específica porque tudo isso é gerenciado pelo SGBD.

  Regra 11 Regra da Independência de Distribuição

Aplicações não são logicamente afetadas quando ocorrem mudanças geográficas de dados, ou seja,
os usuários finais não devem perceber o fato de o banco de dados ser distribuído ou local. Sistemas
de Banco de Dados Distribuídos podem estar espalhados em diversas plataformas, interligados em
rede, e podem, inclusive, estar fisicamente distantes entre si. Essa capacidade de distribuição não
pode afetar a funcionalidade do sistema e dos aplicativos que fazem uso do banco de dados.

Em outras palavras, a localização física dos dados não deve ser da preocupação do usuário, ou seja,
o usuário não enxerga nem é afetado pela localização dos dados – diz-se que a localização física dos
dados é transparente para o usuário. Ele vai trabalhar com os dados e executar comandos da mesma
maneira que faria se todos os dados estivessem armazenados no mesmo servidor e no mesmo local
físico dele.

  Regra 12 Regra da Não-Transposição/Subversão

        Receita Federal (Analista Tributário) Fluência em Dados                                  27
        www.estrategiaconcursos.com.br                                                           48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Se um sistema possui uma linguagem de baixo nível, essa linguagem não pode ser usada para
subverter as regras de integridades e as restrições definidas no nível mais alto. Linguagens de baixo
nível são aquelas mais próximas da linguagem do hardware e mais distantes da linguagem do
usuário – geralmente são capazes de executar tarefas mais restritas para um programador comum,
acessando alguns recursos em nível de hardware.

Em outras palavras, o sistema deve ser capaz de impedir que qualquer usuário ou programador
passe por cima de todos os mecanismos de segurança, das regras de integridade do banco de dados
e das restrições, utilizando algum recurso ou linguagem de baixo nível que eventualmente possam
ser oferecidos pelo próprio sistema. Bem, essas são as Treze Regras de Codd – cai muito pouco de
forma direta, mas cai bastante de forma indireta, portanto... atenção!


Notação IDEF1X
                                                                                       INCIDÊNCIA EM PROVA: baixíssima


IDEF1X (Integration Definition for Information Modeling) é uma linguagem/método de modelagem
de dados cujo propósito inclui oferecer meios para definir uma visão de dados independente de
aplicação que possa ser validada por usuários e que representa a estrutura e a semântica das
informações de um sistema. Embora aplicada no nível conceitual, incorpora muitas características
de projeto de banco de dados (modelagem lógica).

Fiquem tranquilos porque ela é bem fácil de aprender! Em primeiro lugar, baseia-se em três
estruturas fundamentais: Entidades, Atributos e Relacionamentos.


                     Entidade independente                        ENTIDADE DEPENDENTE

Da mesma forma da Notação Pé-de-Galinha, as entidades são representadas graficamente como
retângulos com uma linha divisória horizontal – nós já sabemos que entidades são basicamente
objetos de mesma natureza. Caso o retângulo seja com arestas retas, trata-se da representação de
uma entidade independente; caso o retângulo seja com arestas arredondadas, trata-se da
representação de uma entidade dependente (entidade fraca).

        Receita Federal (Analista Tributário) Fluência em Dados                                                   28
        www.estrategiaconcursos.com.br                                                                            48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                                      pessoa
                                          Id_pessoa ( FK )
                                          CPF ( AK )
                                          Endereço
                                          Data de nascimento ( O )


Já os atributos são identificados por seu nome único e domínio respectivo - o nome é expresso no
singular e descreve a característica representada pelo atributo. O tipo do atributo pode ser
identificado entre parênteses: (PK) para representar uma chave primária; (FK) para representar uma
chave estrangeira; (AK) para representar uma chave alternativa; e (O) para representar que um
atributo é opcional. Chaves primárias são inscritas acima da divisão horizontal do retângulo.

Por fim, temos os relacionamentos, que representam regras ou restrições do ambiente de negócios.
A determinação do relacionamento entre duas entidades está, portanto, completamente ligada à
compreensão que se tem do sistema sob estudo. Relacionamentos podem ser classificados em duas
categorias independentes: relacionamentos identificadores ou não identificadores e
relacionamentos mandatórios/obrigatórios ou não mandatórios/não obrigatórios (opcionais).

Relacionamento identificador entre duas entidades (E1 → E2) indica que uma instância de E2
(entidade-filha) não pode ser completamente identificada sem uma instância de E1 (entidade-pai).
Já relacionamento obrigatório entre duas entidades (E1 → E2) indica que a cardinalidade mínima
de E1 é 1. Dessa forma, podemos inferir que um relacionamento identificador sempre será
obrigatório. Por que, Diego?

Porque se uma instância de E2 não pode ser completamente identificada sem uma instância de E1,
significa que uma instância de E1 é obrigatória. Já um relacionamento não identificador pode ser
classificado em mandatório ou opcional. Ele é considerado mandatório quando uma instância de
E2 não precisa de uma instância de E1 para ser identificado, porém o ambiente de negócios obriga
que exista uma instância de E1 associada à instância de E2.

Em outras palavras, a chave primária de E1 se torna chave estrangeira em E2. Essa chave não é
necessária para identificar E2, mas é obrigatória. Imagine que um Canil (E1) aloja diversos animais
(E2), mas que um animal (E2) está alojado em apenas um canil (E1). A chave primária de E1 se torna
chave estrangeira de E2. Para identificar um animal, é necessário saber seu canil? Não, é possível usar
o código do animal. No entanto, pelas regras de negócio, o valor da chave estrangeira é obrigatório.

        Receita Federal (Analista Tributário) Fluência em Dados                                     29
        www.estrategiaconcursos.com.br                                                              48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Em cenário semelhante, um relacionamento não identificador pode ser classificado como opcional
(não mandatório/não obrigatório). Isso ocorre quando uma instância de E2 não precisa de uma
instância de E1 para ser identificado e o ambiente de negócios não impõe nenhuma obrigação que
exista uma instância de E1 associada à instância de E2. Em outras palavras, uma instância de E2 não
precisa necessariamente estar associada a uma instância de E1.

Em outras palavras, a chave primária de E1 se torna chave estrangeira em E2. No entanto, essa
chave não é necessária para identificar E2 e sequer é obrigatória. Vocês se lembram que chaves
estrangeiras podem ser nulas? Pois é! Imagine que um Canil (E1) aloja diversos animais (E2), mas que
um animal (E2) não precisa estar alojado em um canil (E1). A chave primária de E1 se torna chave
estrangeira de E2.

Para identificar um animal, é necessário saber seu canil? Não, é possível usar o código do animal.
Além disso, pelas regras de negócio, o valor da chave estrangeira pode ser nulo (opcional).

Em suma, relacionamentos identificadores e não identificadores são representados conforme
apresenta a tabela a seguir. Além disso, é importante notar que a chave estrangeira fica acima da
linha divisória do retângulo apenas em relacionamentos identificadores, porque – nesse caso – ela
faz parte da chave primária. Quando o relacionamento é não identificador, a chave estrangeira fica
abaixo da linha divisória do retângulo porque ela não faz parte da chave primária.

                           Relacionamento identificador
                       Relacionamento Não-identificador


        Receita Federal (Analista Tributário) Fluência em Dados                                  30
        www.estrategiaconcursos.com.br                                                           48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Um relacionamento pode ser obrigatório (quando a sua cardinalidade mínima é maior que zero) ou
opcional (quando a sua cardinalidade mínima é zero). Quanto à cardinalidade, temos:

      cardinalidade                  Significado                                  exemplo
 (sem indicação)             0, 1 ou mais                   Um FUNCIONÁRIO possui 0, 1 ou mais FILHOS.
 Letra P                     1 ou mais (vem de Positivo)    Um GRUPO é composto de 1 ou mais PESSOAS.
 Letra Z                     0 ou 1 (vem de Zero)           Um ESTUDANTE possui 0 ou 1 BOLSAS DE ESTUDO.
 Letra N                     Exatamente N                   Um NAVIO possui exatamente 6 TURBINAS.


Agora vamos ver como os relacionamentos são representados de acordo com cada classificação e
cardinalidades. Da esquerda para a direita, temos a entidade-pai e a entidade-filha. Logo, a leitura
é: uma instância da entidade-pai está relacionada à (cardinalidade?) instâncias da entidade-filha
(Ex: uma instância da Entidade 1 está relacionada a 0, 1 ou muitas instâncias da Entidade 2; uma
instância da Entidade 1 está relacionada a uma ou mais instâncias da Entidade 2; entre outros).

      CARDINALIDADE                         IDENTIFICAdor                              NÃO IDENTIFICador

    MUITOS-PARA-MUITOS                                                                        –


    ZERO, UM OU MUITOS

                                                                  Z                                        Z
        ZERO OU UM


                                                                  P                                        P
        UM OU MAIS


                                                                  N                                        N
    UM A EXATAMENTE N

Agora note uma coisa interessante que já foi cobrada em prova de concurso: quando temos um
relacionamento não identificador e não obrigatório, a entidade-pai (à esquerda) pode ser zero.
Dessa forma, trata-se de um relacionamento opcional e utilizamos um losango para representá-lo.
Por que, professor? Isso é apenas uma convenção! Um dia alguém decidiu que era uma exceção e
que deveria ser representado dessa maneira.

     RELACIONAMENTO                         IDENTIFICAdor                              NÃO IDENTIFICador

 RELACIONAMENTO OPCIONAL                           –

        Receita Federal (Analista Tributário) Fluência em Dados                                                31
        www.estrategiaconcursos.com.br                                                                         48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Por fim, é importante enfatizar que muitas questões simplesmente misturam DER, IDEF1X e
Notação Pé-De-Galinha em um mesmo diagrama! Não há nada de errado nisso...

        Receita Federal (Analista Tributário) Fluência em Dados                        32
        www.estrategiaconcursos.com.br                                                 48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

            QUESTÕES COMENTADAS – DIVERSAS BANCAS

1. (IFB / IFB – 2017) Segundo Elmasri (2011), na terminologia formal do modelo relacional, uma
   linha, um cabeçalho de coluna e a tabela, são chamados, respectivamente, de:

   a) Registro, atributo, domínio
   b) Tupla, atributo e relação
   c) Registro, atributo e relação
   d) Relação, domínio e registro
   e) Relação, tupla e registro

Comentários:

Na terminologia formal do modelo relacional (lógico), uma linha é uma tupla; um cabeçalho de
coluna é um atributo; e uma tabela é uma relação.

                                                                                       Gabarito: Letra B

2. (FCC / TJ-APP – 2014) Uma das formas de se garantir a integridade em um banco de dados é
   por meio da definição de atributos, como a chave primária que:

   a) sempre é formada por apenas um atributo.
   b) não pode ser composta por atributos numéricos.
   c) não pode ser composta por mais do que 3 atributos.
   d) pode ser composta por mais de 1 atributo.
   e) é formada por um único tipo de atributo, que é o que estabelece uma sequência numérica.

Comentários:

(a) Errado. Uma chave primária pode ser composta, isto é, formada por mais de um atributo; (b)
Errado. Uma chave primária pode – sim – ser composta por atributos numéricos; (c) Errado. Uma
chave primária pode – sim – ser composta por mais de três atributos; (d) Correto. Uma chave
primária pode ser composta por mais de um atributo; (e) Errado. Uma chave primária pode ser
formada por atributos de diversos tipos.

                                                                                       Gabarito: Letra D

3. (VUNESP / PRODEST-ES – 2014) Sobre a chave primária de uma tabela de um banco de dados
   relacional, é correto afirmar que:

   a) pode conter, no máximo, três atributos.
   b) pode ser composta por mais de um atributo.


        Receita Federal (Analista Tributário) Fluência em Dados                                      33
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   c) não há chave primária em tabelas com até 100 registros.
   d) não pode conter atributos do tipo textual.
   e) não pode conter atributos do tipo numérico.

Comentários:

(a) Errado. Uma chave primária pode conter mais de três atributos; (b) Correto. Uma chave primária
pode – sim – ser composta por mais de um atributo; (c) Errado. Uma chave primária pode estar
presente em tabelas com infinitos registros; (d) Errado. Uma chave primária pode – sim – conter
atributos do tipo textual; (e) Errado. Uma chave primária pode – sim – conter atributos do tipo
numérico.

                                                                                       Gabarito: Letra B

4. (VUNESP / DESENVOLVESP – 2014) Em um banco de dados relacional deve haver, em cada
   uma de suas relações, um conjunto de um ou mais atributos que não admite valores iguais, nesse
   conjunto, para qualquer par de tuplas da relação. Esse conjunto de atributos tem a seguinte
   denominação:

   a) abstração.
   b) chave primária.
   c) domínio.
   d) índice.
   e) instância.

Comentários:

Conjunto de um ou mais atributos que não admite valores iguais? Deve estar contida em toda
relação? A questão trata claramente das chaves primárias: conjunto de um ou mais atributos cujos
valores nunca se repetem para qualquer par de tuplas de uma relação.

                                                                                       Gabarito: Letra B

5. (FCC / TRE-AP – 2015) Leia, abaixo, a descrição das propriedades de um modelo lógico de dados
   e assinale a única alternativa que corresponde a essa descrição do modelo. Ao contrário de seus
   antecessores, não se baseia num paradigma de estruturação de dados particular e sim em um
   fundamento matemático específico. Representa o Banco de Dados como uma coleção de
   tabelas, constituídas de atributos e tuplas.

   a) Modelo em Redes.
   b) Modelo Hierárquico.
   c) Modelo Relacional.
   d) Modelo Matemático.


        Receita Federal (Analista Tributário) Fluência em Dados                                      34
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   e) Modelo Orientado a Objetos.

Comentários:

Fundamenta-se em um modelo matemático específico? Não se baseia em paradigmas de estrutura
de dados particular? O Modelo Relacional fornece uma base matemática para a representação e a
consulta dos dados fundamentado em lógica de predicados e teoria dos conjuntos.

                                                                                                      Gabarito: Letra C

6. (CESPE / TRE-MT – 2015) Assinale a opção que apresenta corretamente o modelo de dados em
   que uma linha é chamada de tupla, um cabeçalho de coluna é chamado de atributo e uma tabela
   é chamada de relação:
                                                       ==219a34==

   a) modelo de dados XML
   b) modelo relacional de dados
   c) modelo de dados em rede
   d) modelo de dados hierárquico
   e) modelo de dados híbrido de registro integrado

Comentários:


                TABELA                               RELAÇÃO                         representa os dados e os
                                                                                  relacionamentos entre os dados

                 LINHA                                TUPLA                            coleção de valores de dados
                                                                                              relacionados

               COLUNA                              ATRIBUTO                        dados que ajudam a interpretar o
                                                                                  significado dos valores das linhas

Essa correspondência de nomenclaturas faz parte do modelo relacional de dados.

                                                                                                      Gabarito: Letra B

7. (CESPE / TCU – 2015) Em um banco de dados estruturado de acordo com o modelo relacional,
   todos os elementos dos dados são colocados em tabelas bidimensionais, organizados em linhas
   e colunas, o que simplifica o acesso e a manipulação dos dados. Operações matematicamente
   conhecidas como de produto cartesiano, de seleção e de projeção também apoiam a
   manipulação de dados aderentes ao modelo relacional.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                                        35
        www.estrategiaconcursos.com.br                                                                                 48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Perfeito! A base do modelo relacional é uma relação, que é basicamente uma tabela bidimensional
organizada em linhas e colunas. Além disso, ele fornece uma base matemática para a representação
e a consulta dos dados fundamentado em lógica de predicados e teoria dos conjuntos. Dessa forma,
operações matematicamente conhecidas da álgebra relacional ajudam a suportar a manipulação
de dados (Ex: Produto Cartesiano, Junção, Seleção, Projeção, etc).

                                                                                       Gabarito: Correto

8. (IBFC / Polícia Científica – 2017) No modelo relacional, cada registro de uma tabela tem um
   identificador único chamado de chave primária. Assinale a alternativa que indica o nome da
   chave primária quando utilizada como referência em outro registro de outra tabela:

   a) chave secundária
   b) chave derivada
   c) chave estrangeira
   d) chave de ligação
   e) chave de índice

Comentários:

O nome da chave primária quando utilizada como referência a um registro de outra tabela é Chave
Estrangeira. Elas basicamente fazem referência à chave primária de outra tabela ou até mesmo da
própria tabela.

                                                                                       Gabarito: Letra C

9. (CESPE / MEC – 2015) Chave candidata é um atributo especial capaz de identificar uma instância
   de determinada entidade de maneira única. Assim, durante a modelagem relacional de dados,
   todas as chaves candidatas nas entidades em análise se tornam chaves primárias dessas
   entidades.

Comentários:

A primeira parte da questão está correta – uma chave candidata é basicamente uma possível chave
primária de uma relação. No entanto, apenas uma das chaves candidatas se torna chave primária
uma vez que só pode haver uma única chave primária por entidade.

                                                                                       Gabarito: Errado

10. (FCM / IFF-RS – 2015) Em um banco de dados relacional, algumas regras são aplicadas às
    chaves, assim:

   a) não é possível a criação de uma tabela sem chave primária.


        Receita Federal (Analista Tributário) Fluência em Dados                                      36
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   b) a chave primária de uma tabela deve ser sempre única e não nula.
   c) as chaves, primária e estrangeira, de uma tabela, devem ser do tipo numérico.
   d) a cláusula UNIQUE, aplicada à chave estrangeira, é responsável pela integridade referencial
   do relacionamento.
   e) as chaves primárias podem ser compostas por um ou mais atributos, porém as chaves
   estrangeiras devem ser compostas somente por um atributo.

Comentários:

(a) Errado. É possível – apesar de não ser uma boa prática – criar uma tabela sem chave primária;
(b) Correto. A chave primária deve – sim – ser sempre única e não-nula; (c) Errado. Não existe esse
tipo de restrição; (d) Errado. A cláusula UNIQUE é responsável pela restrição de unicidade do
relacionamento; (e) Errado. Chaves estrangeiras também podem ser compostas por um ou mais
atributos.

                                                                                                 Gabarito: Letra B


11. (IESES / MSGAS – 2015) No projeto de banco de dados relacional, a integridade de entidades é
    uma característica que necessita ser garantida. Nesse contexto, assinale a alternativa correta:

   a) A integridade de entidades estabelece que o valor da chave primária deve ser um número
   sequencial auto-incrementado.

   b) A integridade de entidades estabelece que nenhum valor da chave primária pode ser null.

   c) A integridade de entidades é utilizada para manter a consistência entre duas relações, sendo
   que esta é possível por meio de chaves estrangeiras.

   d) A integridade de entidades estabelece que as chaves primárias devem ser formadas por um
   único atributo.

Comentários:

            TIPOS DE RESTRIÇÃO                                               DESCRIÇÃO
                                           Restringe que uma chave primária se repita – uma chave primária diferencia
   Restrição de chave OU UNICIDADE         de forma única os registros de uma relação.
                                           Restringe que um campo de uma relação tenha valores diferentes daqueles
  Restrição de INTEGRIDADE DE domínio
                                           definidos para o campo específico.
                                           Restringe que uma chave primária tenha valores nulos (NULL). Pode ser
 Restrição de Integridade de ENTIDADE      considerada uma subcategoria da restrição de domínio.
                                           Restringe que a chave estrangeira de uma tabela seja inconsistente com a
 Restrição de Integridade Referencial
                                           chave candidata da tabela referenciada.

        Receita Federal (Analista Tributário) Fluência em Dados                                                    37
        www.estrategiaconcursos.com.br                                                                             48

                                        


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

A Restrição de Integridade de Entidade estabelece que nenhum valor de chave primária pode ser
NULL (Nulo).

                                                                                       Gabarito: Letra B

12. (CESGRANRIO / PETROBRAS – 2014) A álgebra relacional fornece um alicerce formal para as
    operações do modelo relacional. Um técnico de informática reconhece que essas operações
    permitem que um usuário especifique solicitações como expressões da álgebra relacional, nas
    quais a(o):

   a) operação PROJEÇÃO é usada para escolher um subconjunto das tuplas de uma relação que
   satisfaça uma condição de seleção.

   b) operação de PROJEÇÃO mantém quaisquer tuplas duplicadas, de modo que o resultado dessa
   operação é um conjunto de tuplas que pode conter tuplas repetidas.

   c) operação PROJEÇÃO pode selecionar certas colunas da tabela e descartar outras.

   d) operação SELEÇÃO é usada para incluir todas as tuplas de duas relações em uma única
   relação, sendo que as tuplas duplicadas são eliminadas.

   e) resultado da operação SELEÇÃO pode ser visualizado como uma partição vertical da relação
   original em duas relações: uma tem as colunas (atributos) necessárias e contém o resultado da
   operação, e a outra contém as colunas descartadas.

Comentários:

(a) Errado. Essa operação seleciona colunas de uma tabela dada uma condição; (b) Errado. Essa
operação elimina duplicatas (tuplas repetidas); (c) Correto. Essa operação seleciona colunas de uma
tabela dada uma condição; (d) Errado. Essa operação seleciona tuplas de uma tabela dada uma
condição; (e) Errado. Essa operação seleciona tuplas de uma tabela dada uma condição;

                                                                                       Gabarito: Letra C

13. (FCC / TJ-AP – 2014) Em um banco de dados, uma maneira de aumentar a segurança é a
    ocultação de dados de um usuário. Um recurso que pode ser utilizado na ocultação de dados que
    o usuário não tem necessidade de acessar, denomina-se:

    a) procedure.
    b) script.
    c) trigger.
    d) trilha.
    e) view.


        Receita Federal (Analista Tributário) Fluência em Dados                                      38
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

Comentários:

Um recurso que pode ser utilizado na ocultação de dados que o usuário não tem necessidade de
acessar, denomina-se view. Ela é um subconjunto do banco de dados, isto é, se você deseja
visualizar apenas uma parte dos dados de uma tabela, você pode criar uma visão personalizada dos
dados, sendo considerada basicamente uma tabela que é derivada de outras tabelas.

                                                                                       Gabarito: Letra E

14. (CESPE / MEC – 2015) View é um objeto que permite implementar a segurança em um banco
    de dados, omitindo dados irrelevantes para algum grupo de usuário. No entanto, não é
    permitido criar uma view com base na definição de outra view.

Comentários:

A primeira parte da questão está perfeita, no entanto é permitido – sim – criar uma view com base
na definição de outra view.

                                                                                       Gabarito: Errado

15. (CESPE / TRE-MT – 2015) O conjunto de um ou mais campos cujos valores, considerando-se a
    combinação de todos os campos da tupla, nunca se repetem e que podem ser usados como um
    índice para os demais campos da tabela do banco de dados é denominado de:

   a) domínio.
   b) primeira forma normal.
   c) dicionário de dados.
   d) chave estrangeira.
   e) chave primária.

Comentários:

O conjunto de um ou mais campos cujos valores, considerando-se a combinação de todos os
campos da tupla, nunca se repetem e que podem ser usados como um índice para os demais
campos da tabela do banco de dados é o conceito clássico de chave primária.

                                                                                       Gabarito: Letra E

16. (CETAP / MPCM – 2015) Sobre o conceito de chave primária, relacionado a um registro em um
    banco de dados, selecione a afirmação falsa:

   a) Pode ser formado por um campo ou um conjunto de campos.


        Receita Federal (Analista Tributário) Fluência em Dados                                      39
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   b) Não pode conter valores nulos.
   c) Deve formar um valor único para cada registro.
   d) Pode ser utilizada para relacionar o registro com outras tabelas.
   e) Deve ser declarado de um tipo de dados INTEIRO.

Comentários:

(a) Correto. Uma Chave Primária pode ser composta; (b) Correto. Uma Chave Primária não pode
conter valores nulos (Restrição de Entidade); (c) Correto. Uma Chave Primária deve ter valores
únicos para cada registro (Restrição de Chave); (d) Correto. Uma Chave Primária pode ser Chave
Estrangeira de outra tabela; (e) Errado. Uma Chave Primária não precisa ser obrigatoriamente do
tipo INTEIRO.

                                                                                              Gabarito: Letra E

17. (NC-UFPR / ITAIPU BINACIONAL – 2015) Quando uma chave primária de uma tabela é usada
    como atributo em outra tabela, nessa outra tabela ela será chamada de:

   a) Chave dupla.
   b) Chave candidata.
   c) Chave importada.
   d) Chave estrangeira.
   e) Chave secundária.

Comentários:

        TIPOS DE chave            Em inglês                                  descrição
                                                Conjunto de uma ou mais colunas que, tomadas coletivamente,
            SUPERCHAVE             SUPERKEY
                                                permitem identificar de maneira unívoca uma linha.
                                                Superchaves de tamanho mínimo, candidatas a serem possíveis
       CHAVE CANDIDATA          CANDIDATE KEY
                                                chaves primárias de uma tabela.
                                                Chaves cujas colunas são utilizadas para identificar linhas em uma
        CHAVE PRIMÁRIA           PRIMARY KEY
                                                tabela – em geral, vêm sublinhada.
                                                Chaves candidatas a serem possíveis chaves primárias de uma
 CHAVE SECUNDÁRIA/alternativa   SECONDARY KEY
                                                tabela, mas que não foram escolhidas.
                                                Chaves de uma tabela que fazem referência à chave candidata de
      CHAVE ESTRANGEIRA           FOREIGN KEY
                                                outra tabela, ou até mesmo da própria tabela.
                                                Chaves primárias artificiais criadas para identificar de maneira
       Chave substituta         Surrogate key
                                                unívoca uma linha.


(a) Errado. Essa chave não existe; (b) Errado. Essa chave é uma possível chave primária; (c) Errado.
Essa chave não existe; (d) Correto. Essa chave é uma chave primária de outra tabela; (e) Errado.
Essa chave é uma chave candidata que não foi escolhida para ser chave primária.

        Receita Federal (Analista Tributário) Fluência em Dados                                                 40
        www.estrategiaconcursos.com.br                                                                          48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                                                                                       Gabarito: Letra D

18. (CESPE / TER-GO – 2015) Uma chave primária identifica um único valor de uma tupla no banco
    de dados e não possui mais de um atributo na tabela.

Comentários:

Uma chave primária pode ser composta por diversos atributos – não há restrições de quantidade de
atributos de uma chave primária.

                                                                                       Gabarito: Errado

19. (CESPE / TCE-PA – 2016) Em bancos de dados relacionais, chave estrangeira é aquela que
    permite uma ligação lógica entre duas tabelas — a chave estrangeira de uma tabela se liga
    logicamente à chave primária de outra tabela.

Comentários:


                                                    ATENÇÃO
   CESPE           O CESPE TEM O ENTENDIMENTO DE QUE A CHAVE ESTRANGEIRA REFERENCIA A CHAVE
                   PRIMÁRIA (E, NÃO, CANDIDATA) DE OUTRA TABELA (OU DA MESMA TABELA).


Perfeito! O entendimento do CESPE é de que a chave estrangeira de uma tabela se liga logicamente
à chave primária de outra tabela e, não, à chave candidata.

                                                                                       Gabarito: Correto

        Receita Federal (Analista Tributário) Fluência em Dados                                      41
        www.estrategiaconcursos.com.br                                                               48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

                 LISTA DE QUESTÕES – DIVERSAS BANCAS

1. (IFB / IFB – 2017) Segundo Elmasri (2011), na terminologia formal do modelo relacional, uma
   linha, um cabeçalho de coluna e a tabela, são chamados, respectivamente, de:

   a) Registro, atributo, domínio
   b) Tupla, atributo e relação
   c) Registro, atributo e relação
   d) Relação, domínio e registro
   e) Relação, tupla e registro

2. (FCC / TJ-APP – 2014) Uma das formas de se garantir a integridade em um banco de dados é
   por meio da definição de atributos, como a chave primária que:

   a) sempre é formada por apenas um atributo.
   b) não pode ser composta por atributos numéricos.
   c) não pode ser composta por mais do que 3 atributos.
   d) pode ser composta por mais de 1 atributo.
   e) é formada por um único tipo de atributo, que é o que estabelece uma sequência numérica.

3. (VUNESP / PRODEST-ES – 2014) Sobre a chave primária de uma tabela de um banco de dados
   relacional, é correto afirmar que:

   a) pode conter, no máximo, três atributos.
   b) pode ser composta por mais de um atributo.
   c) não há chave primária em tabelas com até 100 registros.
   d) não pode conter atributos do tipo textual.
   e) não pode conter atributos do tipo numérico.

4. (VUNESP / DESENVOLVESP – 2014) Em um banco de dados relacional deve haver, em cada
   uma de suas relações, um conjunto de um ou mais atributos que não admite valores iguais, nesse
   conjunto, para qualquer par de tuplas da relação. Esse conjunto de atributos tem a seguinte
   denominação:

   a) abstração.
   b) chave primária.
   c) domínio.
   d) índice.
   e) instância.

5. (FCC / TRE-AP – 2015) Leia, abaixo, a descrição das propriedades de um modelo lógico de dados
   e assinale a única alternativa que corresponde a essa descrição do modelo. Ao contrário de seus


        Receita Federal (Analista Tributário) Fluência em Dados                                 42
        www.estrategiaconcursos.com.br                                                          48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   antecessores, não se baseia num paradigma de estruturação de dados particular e sim em um
   fundamento matemático específico. Representa o Banco de Dados como uma coleção de
   tabelas, constituídas de atributos e tuplas.

   a) Modelo em Redes.
   b) Modelo Hierárquico.
   c) Modelo Relacional.
   d) Modelo Matemático.
   e) Modelo Orientado a Objetos.

6. (CESPE / TRE-MT – 2015) Assinale a opção que apresenta corretamente o modelo de dados em
   que uma linha é chamada de tupla, um cabeçalho de coluna é chamado de atributo e uma tabela
   é chamada de relação:

   a) modelo de dados XML
   b) modelo relacional de dados
   c) modelo de dados em rede
   d) modelo de dados hierárquico
   e) modelo de dados híbrido de registro integrado

7. (CESPE / TCU – 2015) Em um banco de dados estruturado de acordo com o modelo relacional,
   todos os elementos dos dados são colocados em tabelas bidimensionais, organizados em linhas
   e colunas, o que simplifica o acesso e a manipulação dos dados. Operações matematicamente
   conhecidas como de produto cartesiano, de seleção e de projeção também apoiam a
   manipulação de dados aderentes ao modelo relacional.

8. (IBFC / Polícia Científica – 2017) No modelo relacional, cada registro de uma tabela tem um
   identificador único chamado de chave primária. Assinale a alternativa que indica o nome da
   chave primária quando utilizada como referência em outro registro de outra tabela:

   a) chave secundária
   b) chave derivada
   c) chave estrangeira
   d) chave de ligação
   e) chave de índice

9. (CESPE / MEC – 2015) Chave candidata é um atributo especial capaz de identificar uma instância
   de determinada entidade de maneira única. Assim, durante a modelagem relacional de dados,
   todas as chaves candidatas nas entidades em análise se tornam chaves primárias dessas
   entidades.

10. (FCM / IFF-RS – 2015) Em um banco de dados relacional, algumas regras são aplicadas às
    chaves, assim:

        Receita Federal (Analista Tributário) Fluência em Dados                               43
        www.estrategiaconcursos.com.br                                                        48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

   a) não é possível a criação de uma tabela sem chave primária.
   b) a chave primária de uma tabela deve ser sempre única e não nula.
   c) as chaves, primária e estrangeira, de uma tabela, devem ser do tipo numérico.
   d) a cláusula UNIQUE, aplicada à chave estrangeira, é responsável pela integridade referencial
   do relacionamento.
   e) as chaves primárias podem ser compostas por um ou mais atributos, porém as chaves
   estrangeiras devem ser compostas somente por um atributo.

11. (IESES / MSGAS – 2015) No projeto de banco de dados relacional, a integridade de entidades é
    uma característica que necessita ser garantida. Nesse contexto, assinale a alternativa correta:

   a) A integridade de entidades estabelece que o valor da chave primária deve ser um número
   sequencial auto-incrementado.

   b) A integridade de entidades estabelece que nenhum valor da chave primária pode ser null.

   c) A integridade de entidades é utilizada para manter a consistência entre duas relações, sendo
   que esta é possível por meio de chaves estrangeiras.

   d) A integridade de entidades estabelece que as chaves primárias devem ser formadas por um
   único atributo.

12. (CESGRANRIO / PETROBRAS – 2014) A álgebra relacional fornece um alicerce formal para as
    operações do modelo relacional. Um técnico de informática reconhece que essas operações
    permitem que um usuário especifique solicitações como expressões da álgebra relacional, nas
    quais a(o):

   a) operação PROJEÇÃO é usada para escolher um subconjunto das tuplas de uma relação que
   satisfaça uma condição de seleção.

   b) operação de PROJEÇÃO mantém quaisquer tuplas duplicadas, de modo que o resultado dessa
   operação é um conjunto de tuplas que pode conter tuplas repetidas.

   c) operação PROJEÇÃO pode selecionar certas colunas da tabela e descartar outras.

   d) operação SELEÇÃO é usada para incluir todas as tuplas de duas relações em uma única
   relação, sendo que as tuplas duplicadas são eliminadas.

   e) resultado da operação SELEÇÃO pode ser visualizado como uma partição vertical da relação
   original em duas relações: uma tem as colunas (atributos) necessárias e contém o resultado da
   operação, e a outra contém as colunas descartadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                 44
        www.estrategiaconcursos.com.br                                                          48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

13. (FCC / TJ-AP – 2014) Em um banco de dados, uma maneira de aumentar a segurança é a
    ocultação de dados de um usuário. Um recurso que pode ser utilizado na ocultação de dados que
    o usuário não tem necessidade de acessar, denomina-se:

   a) procedure.
   b) script.
   c) trigger.
   d) trilha.
   e) view.

14. (CESPE / MEC – 2015) View é um objeto que permite implementar a segurança em um banco
    de dados, omitindo dados irrelevantes para algum grupo de usuário. No entanto, não é
    permitido criar uma view com base na definição de outra view.

15. (CESPE / TRE-MT – 2015) O conjunto de um ou mais campos cujos valores, considerando-se a
    combinação de todos os campos da tupla, nunca se repetem e que podem ser usados como um
    índice para os demais campos da tabela do banco de dados é denominado de:

   a) domínio.
   b) primeira forma normal.
   c) dicionário de dados.
   d) chave estrangeira.
   e) chave primária.

16. (CETAP / MPCM – 2015) Sobre o conceito de chave primária, relacionado a um registro em um
    banco de dados, selecione a afirmação falsa:

   a) Pode ser formado por um campo ou um conjunto de campos.
   b) Não pode conter valores nulos.
   c) Deve formar um valor único para cada registro.
   d) Pode ser utilizada para relacionar o registro com outras tabelas.
   e) Deve ser declarado de um tipo de dados INTEIRO.

17. (NC-UFPR / ITAIPU BINACIONAL – 2015) Quando uma chave primária de uma tabela é usada
    como atributo em outra tabela, nessa outra tabela ela será chamada de:

   a) Chave dupla.
   b) Chave candidata.
   c) Chave importada.
   d) Chave estrangeira.
   e) Chave secundária.

18. (CESPE / TER-GO – 2015) Uma chave primária identifica um único valor de uma tupla no banco
    de dados e não possui mais de um atributo na tabela.

        Receita Federal (Analista Tributário) Fluência em Dados                               45
        www.estrategiaconcursos.com.br                                                        48

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 05

19. (CESPE / TCE-PA – 2016) Em bancos de dados relacionais, chave estrangeira é aquela que
    permite uma ligação lógica entre duas tabelas — a chave estrangeira de uma tabela se liga
    logicamente à chave primária de outra tabela.

                                                       ==219a34==

        Receita Federal (Analista Tributário) Fluência em Dados                           46
        www.estrategiaconcursos.com.br                                                    48

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 05

                         GABARITO – DIVERSAS BANCAS
1. LETRA B                              8. LETRA C                               15. LETRA E
2. LETRA D                              9. ERRADO                                16. LETRA E
3. LETRA B                              10. LETRA B                              17. LETRA D
4. LETRA B                              11. LETRA B                              18. ERRADO
5. LETRA C                              12. LETRA C                              19. CORRETO
6. LETRA B                              13. LETRA E
7. CORRETO                              14. ERRADO

       Receita Federal (Analista Tributário) Fluência em Dados                                 47
       www.estrategiaconcursos.com.br                                                          48

                                   


---

---
