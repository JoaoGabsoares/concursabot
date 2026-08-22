---
cargo: Analista-Tributário da Receita Federal do Brasil (ATRFB)
banca: FGV
disciplina: Raciocínio Lógico-Matemático e Estatística
tags:
- rlm
- logica_proposicional
- probabilidade
- estatistica
- inferencia
arquivo_origem: Aula 09_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: 09
titulo_aula: Passo Estratégico de Raciocínio Lógico
---

# Passo Estratégico de Raciocínio Lógico

Aula 08
                          Receita Federal (Analista Tributário)
                     Passo Estratégico de Raciocínio Lógico
                                                   Matemático

                                                         Autor:
                                         Allan Maux Santana

                                             12 de Abril de 2024

---

      Allan Maux Santana
      Aula 08

                                                                                     Índice
1) Análise FGV - RFB - Pós Edital


2) Matrizes, Determinantes e Sistemas de Equações Lineares

                Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                           35

                                                             


---

  Allan Maux Santana
  Aula 08

                                    ANÁLISE ESTATÍSTICA
Inicialmente, convém destacar os percentuais de incidência de todos os assuntos previstos em
nosso curso – quanto maior o percentual de incidência de um determinado assunto, maior será sua
importância para nosso certame. Nossa análise será executada tendo em vista concursos realizados
no período de 2018 a 2022.
Temos um total de 55 questões de RLM distribuídas nos concursos realizados pela FGV, nível
superior na área fiscal.
                                                                                                   Grau de
                                          ASSUNTOS
                                                                                                  incidência

                  ESTRUTURAS LÓGICAS / DIAGRAMAS LÓGICOS                                          25,45%

                    ANÁLISE COMBINATÓRIA / PROBABILIDADE                                          21,82%

              PORCENTAGEM / OPERACÕES COM NÚMEROS REAIS                                           16,36%

            LÓGICA DE ARGUMENTAÇÃO / RACIOCÍNIO SEQUENCIAL                                        14,55%

    NOÇOES DE GEOMETRIA / TRIGONOMETRIA / GEOMETRIA ANALÍTICA                                      7,27%

        RAZÃO / PROPORÇÃO / REGRA DE TRÊS SIMPLES E COMPOSTA                                       5,45%

      MATRIZES / DETERMINANTES / SISTEMAS DE EQUAÇÕES LINEARES                                     5,45%

                   MODA / MÉDIA / MEDIANA / DESVIO PADRÃO                                          3,64%

                                             TOTAL                                                 100,0%


A quantidade de questões para o curso do Passo Estratégico é por volta de 5, desde que envolvam
todo o conteúdo. No entanto, para o que material fique mais rico em exercícios para vocês, resolvi
elaborar os PDFs com uma quantidade maior de questões de bancas diversas também.


        A PEDIDO DOS ALUNOS, ESTOU COMEÇANDO, AGORA
        EM 2023, UM NOVO PROJETO DE AULAS EM VÍDEO,
        SIGAM:

                                                Prof. Allan Maux

        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático             3
        www.estrategiaconcursos.com.br                                                                      35

                                    


---

   Allan Maux Santana
   Aula 08

              MATRIZES / DETERMINANTES / SISTEMAS
                             LINEARES
Sumário

   O que é mais cobrado dentro do assunto 

Roteiro de revisão e pontos do assunto que merecem destaque 

   Matrizes 

      Multiplicações entre Matrizes 

      Matriz identidade 

      Matriz Inversa

      Adição e Subtração entre Matrizes 

   Determinantes 

      Determinante de uma Matriz de 1ª Ordem 

      Determinante de uma Matriz de 2ª Ordem 

      Determinante de uma Matriz de 3ª Ordem – Regra de Sarrus

      Propriedades dos Determinantes: 

   Sistemas de Equações Lineares 

      Classificação / Discussão dos Sistemas de Equações Lineares. 

Questões estratégicas 

   Questões CESGRANRIO 

   Questões FCC 

   Questões FGV 

Lista de Questões Estratégicas 

   Questões CESGRANRIO 


           Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                                                  4
           www.estrategiaconcursos.com.br                                                                                                          35

                                               


---

  Allan Maux Santana
  Aula 08

  Questões FCC 

  Questões FGV 

  Gabarito 

O que é mais cobrado dentro do assunto

                                                                                                                         GRAU DE
                                          GEOMETRIA
                                                                                                                       INCIDÊNCIA
                                      MATRIZES                                                                                62,0%
                                  DETERMINANTES                                                                               25,0%
                           SISTEMAS DE EQUAÇÕES LINEARES                                                                      13,0%
                                                 TOTAL                                                                       100,0%

          ROTEIRO DE REVISÃO E PONTOS DO ASSUNTO QUE
                                               MERECEM DESTAQUE

A ideia desta seção é apresentar um roteiro para que você realize uma revisão completa do
assunto e, ao mesmo tempo, destacar aspectos do conteúdo que merecem atenção.

Para revisar e ficar bem preparado no assunto, você precisa, basicamente, seguir os passos a seguir:


Matrizes

Pessoal, constantemente, em nosso dia a dia, estamos diante de matrizes, desde um simples
preenchimento de dados num determinado site, que são enviados a uma planilha de Excel, à tela
do seu computador ou, até mesmo, o do seu smartphone.

Matrizes são tabelas retangulares organizadas em linhas e colunas.

Um outro exemplo bem comum de matrizes são os calendários.

                                       DOM SEG TER QUA QUI SEX SAB
                                        1   2   3   4   5   6   7

                                                                                                                                                  2


          Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                                                5
          www.estrategiaconcursos.com.br                                                                                                        35

                                              


---

  Allan Maux Santana
  Aula 08

                                  8        9      10      11      12       13    14
                                 15        16     17      18      19       20    21
                                 22        23     24      25      26       27    28
                                 29        30     31       1      2        3      4

Acima, temos uma Matriz formada por 6 linhas e 7 colunas.

Portanto, podermos afirmar que essa matriz é de ordem 6 por 7, ou simplesmente, 6 x 7.

                                A ordem de uma matriz retangular qualquer nos indica a
                                quantidade de linhas por colunas que existem nessa
                                determinada matriz; primeiro o número de linhas, em seguida,
                                o número de colunas e indicamos assim: A6 x 7

Amigos, existem inúmeras classificações de matrizes quanto à forma, mas acredito que isso não
seja escopo de cobrança nas questões. O mais importante para o aluno, no momento das
questões, é saber indicar a posição de determinado elemento na matriz.

        Exemplo:

        Em nosso calendário, qual seria o elemento de posição 4ª linha e 6ª coluna?

        Voltem lá e vejam que eu o representei na cor vermelha:

                                                     a46 = 20

                                                Sacaram a ideia?

        Vejam que eu estou considerando como 1ª linha os nomes dos dias da semana,
        ok?

Portanto, dada uma matriz A3x2, podemos afirmar que ela possui 3 linhas por 2 colunas.

                                                        −1  2
                                                A3x2 = ! 0 −5 *
                                                         6 1/4

Se quisermos multiplicar essa matriz por qualquer número real, basta multiplicar todos os seus
elementos por esse número.

        Exemplo:


                                                                                                   3


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   6
        www.estrategiaconcursos.com.br                                                            35

                                      


---

  Allan Maux Santana
  Aula 08

                              −1  2
        Dada a matriz A3x2 = ! 0 −5 *, encontre a matriz 3∙A.
                               6 1/4

        Amigos, basta multiplicarmos cada elemento da matriz A3x2 por 3, então:

                                                          −𝟑         𝟔
                                         A matriz 3 ∙A = ! 𝟎        −𝟏𝟓*
                                                          𝟏𝟖        𝟑/𝟒

Acredito que até aqui não tenhamos quaisquer dificuldades, mas, qualquer dúvida chama no fórum
ou no direct do Instagram @profallanmaux.

                       Umas das matrizes que mais iremos trabalhar em nosso estudo é a
                       quadrada, como próprio nome induz, é aquela que possui a mesma
                       quantidade de linhas e colunas. Exemplo:

                                                                1 −6
                                                        A2x2 = 4    6
                                                                8 0

                        A Matriz Quadrada é aquela utilizada p/ cálculo de Determinantes.

Multiplicações entre Matrizes

Aqui, meus amigos, é a multiplicação entre duas matrizes.

Existe uma condição para que duas matrizes possam ser multiplicadas uma pela outra, é a seguinte:

O número de colunas da primeira matriz deve ser igual ao de linhas da segunda matriz.

                                              A3x5 ∙ B5x2 = C3X2

                                                                                                                             ª
                            Número de Colunas da 1ª matriz = ao                                                     d   a2
                                                                                                          lu   n as
                            de linhas da 2ª                                                      r   Co
                                                                                          ª   po
                                                                                 d   a1
                                                                            ha s
                                                                      Lin


Vejam que a matriz C3x2, que foi obtida pela multiplicação de A3x5 por B5x2, possui a quantidade de
linhas de A3x5 pela de colunas de B5x2. Essa condição é muito importante para nossa prova, tenham
atenção à regra.

Sabemos que, ao multiplicarmos números reais quaisquer entre si, podemos inverter os fatores e
os resultados (produtos) continuam os mesmos. Assim:
                                                                                                                                  4


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                                  7
        www.estrategiaconcursos.com.br                                                                                           35

                                    


---

  Allan Maux Santana
  Aula 08

                                                 3∙2=2∙3

Na multiplicação entre duas matrizes essa propriedade não é válida, Logo:

            NÃO PODEMOS dizer que para quaisquer que sejam duas matrizes A ∙ B = B ∙ A

No caso de nosso exemplo:

                                          B5x2 ∙ A3x5 = ∄ produto

                                         Número de colunas da 1ª matriz ≠
                                        ao de linhas da 2ª.


Sim, Allan, entendi esse lance de multiplicação entre matrizes, mas como iremos efetuá-las?

Aqui já é um pouco diferente.

                             Na multiplicação de matrizes, o produto de uma matriz por outra
                             NÃO será determinado por meio do produto dos seus
                             respectivos elementos.

Exemplo:

                                      1 2             −1 3
Vamos multiplicar as matrizes A2x2 = 8    9 e B2x2 = 8     9 para sabermos como chegaremos aos
                                      4 5              2 1
elementos da Matriz C.

Primeiro, temos que ver se a condição é satisfeita, ou seja:

                Total de elementos da coluna de A igual ao total de elementos da linha de B.

Como a condição está ok, vamos à multiplicação:

A matriz C será de ordem 2, ou seja:

                                                 C2x2 ou apenas C2
Determinando o elemento C11 da matriz C:

                                Multiplica a 1ª linha de A pela 1ª coluna de B
                                                                                                   5


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   8
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

                                                     1 2 −1 3
                                              A=8        9∙8     9
                                                     4 5     2 1

                                          C11 = [1 ∙ (−1) + 2 ∙ 2] = 𝟑

Determinando o elemento C12 da matriz C:

                                Multiplica a 1ª linha de A pela 2ª coluna de B

                                                 1 2     −1 3
                                              A=8   9 ∙8     9
                                                 4 5     2 1

                                               C12 = [1∙ 3 + 2 ∙ 1] = 5

Determinando o elemento C21 da matriz C:

                                Multiplica a 2ª linha de A pela 1ª coluna de B

                                                    1 2 −1 3
                                                8       9∙8    9
                                                    4 5     2 1

                                             C21 = [4 ∙ (-1) + 5 ∙ 2] = 6

Determinando o elemento C22 da matriz C:

                                Multiplica a 2ª linha de A pela 2ª coluna de B

                                                    1 2 −1 3
                                                8       9∙8    9
                                                    4 5     2 1

                                             C22 = [ 4 ∙ 3 + 5 ∙ 1] = 17

Logo:

                                                           𝟑       𝟓
                                               A ∙B = C = 8          9
                                                           𝟔      𝟏𝟕

Há um caso bastante particular das matrizes chamado de Matriz Inversa A-1.


                                                A ∙ A-1 = In
In é uma matriz identidade.

                                                                                                   6


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   9
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Matriz identidade

É uma matriz quadrada que possui os elementos da diagonal principal iguais a 1 e todos os demais
iguais a zero, assim:
                                                                                    Diagonal Secundária

                Diagonal Principal
                                                  𝟏 𝟎 𝟎
                                            𝑰𝟑 = &𝟎 𝟏 𝟎)
                                                  𝟎 𝟎 𝟏
Temos uma matriz identidade I3x3 ou, simplesmente, matriz identidade de terceira ordem.

Os elementos que formam a Diagonal Principal são aqueles que possuem a posição linha igual à
coluna. Na matriz acima, seriam os elementos:
                                                       ==219a34==

                                                  i11, i22 e i33

Ora, meus amigos, se há diagonal principal, obviamente, existirá a não principal, que será
chamada de Diagonal Secundária.

Para que um elemento pertença à diagonal secundária, ele deverá satisfazer a seguinte condição:

            Posição do elemento na Linha + Posição na Coluna = Ordem da matriz + 1


                                            i+j=n+1

Matriz Inversa

Para que exista uma matriz inversa à matriz dada, a seguinte condição deverá ser satisfeita:


                                               A ∙ A-1 = In


Adição e Subtração entre Matrizes

E, por fim, para somarmos (ou subtrairmos) duas matrizes, é necessário apenas que elas possuam
a mesma ordem entre si:

                                            A4x5 + B4x5 =
                                            C4x5

                                                                                                           7


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático           10
        www.estrategiaconcursos.com.br                                                                    35

                                     


---

  Allan Maux Santana
  Aula 08

               1       2 5 7       0   1        0    8   9 0     2 2 13 16 0
               0       2 0 9       3   8        4    2   9 −5    8 6   2 18 −2
              A                     D+A                      D= A              D
               0       4 −1 0      3   5        6    0   8 4     5 10 −1 8   7
               0       6 3 5       5   3        2    0   7 6     3 8   3 12 11

Viram que não há dificuldades? Bastar somar os elementos que estão nas mesmas posições linhas
e colunas nas respectivas matrizes. ;-)


Determinantes

Determinante nada mais é do que um número real qualquer associado a uma matriz quadrada.

Isso mesmo, só existem determinantes de matrizes quadradas.

Existem algumas maneiras para ser feita essa determinação, umas bem práticas e outras bem
chatas.

  Fiquem atentos apenas para os determinantes de matrizes quadradas de ordem 2 e 3, ok?

As demais não costumam cair em provas e são bem chatinhas, o custo benefício de seu estudo é
horrível.

Quando estamos diante e uma matriz A, indicaremos o determinante de A da seguinte forma:

                                               Det A ou DA.

Vejam abaixo:

                                                      a!!     a!"
                                                 A = Ea       a"" E
                                                         "!

                                                         a!!          a!"
                                            Det A = DA= Ea            a"" E
                                                              "!


Determinante de uma Matriz de 1ª Ordem

Quando estamos diante de uma matriz de primeira ordem, ou seja, uma matriz que possui apenas
um elemento (a11), temos que o seu determinante será o valor desse elemento.

Det A = |𝑎!! | = 𝑎!!

Desta forma, temos que, se M = (8), então det M será 8.

Caso det A = - √3 e A sendo uma matriz de ordem um, então A = (- √3).

                                                                                                   8


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   11
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Determinante de uma Matriz de 2ª Ordem

                                         a!!               a!"
A matriz quadrada, de segunda ordem A = Ea                 a"" E, terá como seu determinante o resultado da
                                                      "!
seguinte expressão:


                                       𝐃𝐞𝐭 𝐀 = (𝐚𝟏𝟏 ∙ 𝐚𝟐𝟐) − (𝐚𝟏𝟐 ∙ 𝐚𝟐𝟏 )


Neste tipo de matriz, o determinante será dado pela diferença entre os produtos da diagonal
principal da matriz A pelo produto dos elementos que compõem a sua diagonal secundária.

                                                           𝟐     𝟓
                                                  A="              "
                                                           𝟎     𝟐
                                Diagonal Secundária             Diagonal Principal

                                                 O Det A será:

                                                =(2 ∙ 2) – (0 ∙ 5) =

                                                    =4–0=

                                                    Det A = 4

Determinante de uma Matriz de 3ª Ordem – Regra de Sarrus

Vamos utilizar a Regra de Sarrus.

Diante da seguinte matriz:

                                                   𝒂𝟏𝟏         𝒂𝟏𝟐 𝒂𝟏𝟑
                                             A3 = J𝒂𝟐𝟏         𝒂𝟐𝟐 𝒂𝟐𝟑 J
                                                   𝒂𝟑𝟏         𝒂𝟑𝟐 𝒂𝟑𝟑

Primeiro Passo:

                                                                                                         9


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático         12
        www.estrategiaconcursos.com.br                                                                  35

                                    


---

   Allan Maux Santana
   Aula 08

Devemos repetir a 1ª e a 2ª colunas após a 3ª:

                                                 𝑎!!       𝑎!" 𝑎!$ 𝑎!!             𝑎!"
                                                &𝑎"!       𝑎"" 𝑎"$ & 𝑎"!           𝑎""
                                                 𝑎$!       𝑎$" 𝑎$$ 𝑎$!             𝑎$"

                                           -       -       -             +         +       +

Desta forma, seguindo as setas acima, encontramos o det A da seguinte maneira:

                                                               Det A =

(a1,1 ∙ a2,2 ∙ a3,3) + (a1,2 ∙ a2,3 ∙ a3,1) + (a1,3 ∙ a2,1 ∙ a3,2) - ( a1,3 ∙ a2,2 ∙ a3,1) - (a1,1 ∙ a2,3 ∙ a3,2) – (a1,2 ∙ a2,1 ∙ a3,3)

Propriedades dos Determinantes:

P.1.:

           Se numa matriz houver filas iguais ou proporcionais, o Determinante será nulo.

P.2.:

    Se todos os elementos de uma determinada fila forem nulos, o Determinante será nulo.

P.3.:

                  O determinante de uma Matriz A será igual ao de sua Transposta AT.

                                          Quando invertemos as posições linhas e colunas dos
                                          elementos de uma matriz, estaremos diante de uma Matriz
                                          Transposta AT.

Exemplo:

                                      𝟎        𝟏
                                                                                 𝟎                𝟐    𝟖
                              𝐀𝟑𝐱𝟐 = J𝟐        𝟑J, sua transposta será: 𝐀𝐓𝟐𝐱𝟑 = E                        E
                                                                                 𝟏                𝟑    𝟗
                                      𝟖        𝟗

Vejam que todos os elementos das 1ª e 2ª linhas passaram a ser elementos das 1ª e 2ª colunas.


                                                                                                                                     10


          Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                                    13
          www.estrategiaconcursos.com.br                                                                                             35

                                           


---

  Allan Maux Santana
  Aula 08

Consequentemente, a ordem que era 3X2 passou a ser 2X3.

No caso, de matrizes quadradas, a ordem não será alterada, ok? Sendo, justamente a nossa
situação aqui estudada, visto que somente existem determinantes de matrizes quadradas.

P.4.:

                                        DET (A ∙ B) = DET(A) ∙ DET(B)

P.5.:

    Ao multiplicarmos uma fila de uma matriz quadrada por um número real qualquer, seu
                determinante será multiplicado por essa mesma constante, ok?

                                  𝟐      𝟓                    𝟏𝟎         𝟐𝟓
                         Det A = E        E= 4, já o Det B = E              E= 4 ∙ 5 = 20
                                  𝟎      𝟐                     𝟎          𝟐

Vejam que o Det A foi multiplicado por 5, para acharmos o Det B, simplesmente, porque a 1ª linha
da matriz A foi multiplicada por 5. Caso, por exemplo, a 1ª linha tivesse sido multiplicada por 5 e
a 2ª linha por 3, então o Det B seria igual a 4 ∙ 5 ∙ 𝟑 = 𝟔𝟎

P.6.:

            O determinante de uma matriz multiplicado pelo de sua inversa é igual a 1.


                                        Det A ∙ Det A-1 = 1


Sistemas de Equações Lineares

O que estudamos, exatamente, aqui nesse tópico foi o que vimos no 2º ano do ensino médio.

Classificação / Discussão dos Sistemas de Equações Lineares.

                                                               Equações do 1º grau também são
                                                               conhecidas por Equações Lineares.

                                                                               X + Y = 12

A forma mais eficiente de classificar um sistema linear é através do cálculo de determinantes.

                                                                                                   11


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático    14
        www.estrategiaconcursos.com.br                                                             35

                                    


---

  Allan Maux Santana
  Aula 08

                    CLASSIFICAÇÃO DOS SISTEMAS LINEARES
                                                Sistema Possível
 Sistema Possível Determinado                                                         Sistema Impossível
                                                 Indeterminado
                SPD                                                                               SI
                                                       SPI
            Solução Única                      Infinitas Soluções                        Sem Soluções
                D≠0                                    D=0                                  D=0

      Dx, Dy, ... Dn ∈ Reais                 Dx = Dy = ... = Dn = 0                     Dx, Dy, ... Dn ≠ 0

A solução é encontrada da seguinte forma:

                                              𝑫𝒙      𝑫𝒚        𝑫𝒏
                                      𝒙=         ,𝒚 =    ,…,𝒏 =
                                              𝑫       𝑫         𝑫

                         %! %"     %
Solução do Sistema: {      , , ..., # }
                         % %        %

Vou explicar melhor:

Pensem aí em dois números cuja soma seja igual 30. Poderíamos montar essa situação da seguinte
forma:

                                                  X + Y = 30

Acredito que cada um pensou em inúmeras possibilidades de pares de número cuja soma seja 30.
Ou não? 1 e 29; 2 e 28; 14 e 16; 57 e -27 etc

Vejam que é possível existência de dois números cuja soma seja 30, porém a quantidade de
soluções é indeterminada, por isso dizemos que o Sistema é Possível e Indeterminado - SPI.

Agora, se eu pedisse para que vocês pensassem em dois números cuja soma seja 30 e 12 ao
mesmo tempo. Bora montas as equações:

                                                  X + Y = 30

                                                  X + Y = 12

E agora? Estamos diante de um sistema, logo, as duas equações lineares (do 1º grau) devem
coexistirem e convergirem para um mesmo resultado...

                                                                                                             12


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático              15
        www.estrategiaconcursos.com.br                                                                       35

                                    


---

  Allan Maux Santana
  Aula 08

Percebam, meus alunos, que é impossívellllllll haver dois números cuja soma dê resultados
diferentes, logo o Sistema é Impossível - S.I.

E, por último, o que conhecemos desde os 11 anos, lá do ensino fundamental, é o sistema cuja
solução podemos determinar. Sistema Possível Determinado – SPD.

Um outro método para que você consiga classificar os sistemas, sem ser por determinantes, é
resolver o sistema da forma que você se sinta mais à vontade...isso mesmo.

Aí, se você encontrar a solução do sistema, ele será SPD.

Se você encontrar uma igualdade 0 = 0, ele será S.P.I.

E, se você encontrar um absurdo tipo 0 = 8, será S.I.

Isso é infalível...sempre dará certo.

Contem comigo nessa jornada,

                                                Prof. Allan Maux

                                                                                                  13


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   16
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

                                 QUESTÕES ESTRATÉGICAS

Nesta seção, apresentamos e comentamos uma amostra de questões objetivas selecionadas
estrategicamente: são questões com nível de dificuldade semelhante ao que você deve esperar
para a sua prova e que, em conjunto, abordam os principais pontos do assunto.

A ideia, aqui, não é que você fixe o conteúdo por meio de uma bateria extensa de questões, mas
que você faça uma boa revisão global do assunto a partir de, relativamente, poucas questões.

Questões CESGRANRIO

Q.01 (CESGRANRIO / (PETROBRAS) / 2018)
Sejam A uma matriz quadrada de ordem 2 e B uma matriz quadrada de ordem 3, tais que
det A ∙ det B = 1.
O valor de det(3A) ∙ det(2B) é

a) 5

b) 6

c) 36

d) 72

e) 108

Comentários:

Pessoal, essa é uma questão de determinantes.

Uma matriz B de ordem “n” é dada por:

                                             det(𝑘 ∙ 𝐵) = 𝑘 * ∙ det (𝐵)

                                                                                                   14


         Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   17
         www.estrategiaconcursos.com.br                                                            35

                                     


---

  Allan Maux Santana
  Aula 08

Na questão é dito que A é de ordem 2 e B é de ordem 3. Além disso, diz que det(𝐴) ∙ 𝑑𝑒𝑡(𝐵) = 1.
E quer saber o valor de det(3𝐴) ∙ 𝑑𝑒𝑡(2𝐵).

Fazendo as substituições temos o seguinte:

                                det(3𝐴) ∙ 𝑑𝑒𝑡(2𝐵) = 3" ∙ det(𝐴) ∙ 2+ ∙ det (𝐵)

Como,

                                               det(𝐴) ∙ 𝑑𝑒𝑡(𝐵) = 1

Teremos o seguinte:

                                   det(3𝐴) ∙ 𝑑𝑒𝑡(2𝐵) = 3" ∙ 2+ = 9. 8 = 𝟕𝟐

Gabarito: D

Q.02 (CESGRANRIO / PETROBRAS /Júnior/Geologia/2018)

Em um laboratório, um geólogo investiga a densidade de quatro tipos de materiais diferentes,
inicialmente denominados X, Y, W e Z, coletados em campo. Eles estão distribuídos em
camadas, não misturadas entre si, no interior de quatro tubos de mesma massa (quando vazios),
numerados de 1 a 4, conforme ilustra a Figura a seguir.

Sobre os dados, sabe-se que: (i) mk é a massa conjunta do tubo k com os materiais nele
contidos, para 1 ≤ k ≤ 4; (ii) cada tubo vazio tem massa igual a m0; (iii) as densidades dos
materiais X, Y, W, e Z são, respectivamente, dx, dy, dw e dz; (iv) os volumes de cada material, em
cada um dos quatro tubos, estão representados pelo quadro a seguir.

Considere que esses dados foram organizados nas matrizes M, D e V, assim definidas:

                                                                                                  15


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   18
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Assim, o sistema de equações que modela matematicamente o problema, representado em
sua forma matricial, é:

a) D = MT ∙V−1

b) D = V ∙ M

c) D = M ∙ V−1

d) D = MT ∙ V

e) D = V−1 ∙ MT

Comentários:

Nessa questão, temos três matrizes M4×1, D1×4 e V4×4. Sendo que, a matriz D será obtida pelo
produto entre as matrizes M e V.

É importante saber que o produto entre matrizes só será possível se o número de colunas da
primeira for igual ao número de linhas da segunda. Temos que saber também que, a matriz
resultante terá o número de linha da primeira e de coluna da segunda.

Logo, genericamente teremos

                                                 Am×p=Bm×n⋅ Cn×p

Desta forma, única maneira da matriz D fique no formato de D1x4 é se fizermos a multiplicação da
matriz transposta de M. Com isso, ficamos com a alternativa A e D. Sendo que, a densidade (D) é
a razão entre a massa e o volume. Desta forma, não poderia resultar do produto MT.V, pois
resultaria o produto entre massa e volume. Logo, ficamos com a alternativa A, que temos a matriz
inversa de V.

                                                   D = MT ∙ V-1


                                                                                                  16


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   19
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Gabarito: A

Q.03 (CESGRANRIO/ TRANSPETRO / Comércio e Suprimento/2018)

                                                       𝟐 𝟒
Sejam A e B duas matrizes quadradas 2x2, tal que 𝑨 = 8      9, e 𝑨 ∙ 𝑩 = 𝑰, onde I é a matriz
                                                      −𝟏 𝟔
identidade 2x2. Assim, a soma dos elementos da matriz B é igual a
a) 5/16
b) 7/16
c) 9/16
d) 11/16
e) 13/16

Comentários:

Pessoal, nessa questão a banca quer saber a soma dos elementos da matriz B. Para isso, é dado a
             2 4
matriz 𝐴 = 8      9 e 𝐴 ∙ 𝐵 = 𝐼.
             −1 6

Supondo que a matriz B seja a seguinte:

                                                            𝑎    𝑏
                                                     𝐵=8           9
                                                            𝑐    𝑑

E a matriz identidade I:

                                                         1 0
                                                      𝐼=8   9
                                                         0 1

Fazendo as substituições teremos o seguinte:

                                                       𝐴. 𝐵 = 𝐼

                                              2 4     𝑎         𝑏     1 0
                                            8     9∙ 8            9=8     9
                                             −1 6      𝑐        𝑑     0 1

Fazendo as multiplicações teremos o seguinte.

                                             𝐼!! = 𝑎!! ∙ 𝑏!! + 𝑎!" ∙ 𝑏"!

                                                   1 = 2𝑎 + 4𝑐 (𝟏)

                                             𝐼!" = 𝑎!! ∙ 𝑏!" + 𝑎!" ∙ 𝑏""

                                                     0 = 2𝑏 + 4𝑑

                                                                                                    17


          Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   20
          www.estrategiaconcursos.com.br                                                            35

                                      


---

  Allan Maux Santana
  Aula 08

                                                   𝑏 = −2𝑑 (𝟐)

                                            𝐼"! = 𝑎"! ∙ 𝑏!! + 𝑎"" ∙ 𝑏!"

                                                   0 = −𝑎 + 6𝑐

                                                    𝑎 = 6𝑐 (𝟑)

                                            𝐼"" = 𝑎"! ∙ 𝑏!" + 𝑎"" ∙ 𝑏""

                                                1 = −𝑏 + 6𝑑 (𝟒)

Fazendo as análises das equações 2 e 4 teremos o seguinte:

                                                     𝒃 = −𝟐𝒅

                                                  𝟏 = −𝒃 + 𝟔𝒅

                                                1 = −(−2𝑑) + 6𝑑

                                                      1 = 8𝑑

                                                            1
                                                       𝑑=
                                                            8

Logo, o valor de b será o seguinte:

                                                     𝒃 = −𝟐𝒅

                                                                1
                                                    𝑏 = −2 ∙
                                                                8

                                                             1
                                                      𝑏=−
                                                             4

Fazendo as análises das equações 1 e 3 teremos o seguinte:

                                                   𝟏 = 𝟐𝒂 + 𝟒𝒄

                                                     𝒂=𝟔∙𝒄

                                                1 = 2 ∙ (6𝑐) + 4𝑐

                                                    16 ∙ 𝑐 = 1

                                                            1
                                                      𝑐=
                                                           16

                                                                                                  18


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   21
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Logo, o valor de a será o seguinte:

                                                      𝒂 = 𝟔𝒄

                                                             1
                                                     𝑎 =6∙
                                                             16
                                                            3
                                                       𝑎=
                                                            8

Portanto, a soma dos elementos da matriz B será o seguinte:

                                               3 1 1 1 6−4+1+2   5
                           𝑎+𝑏+𝑐+𝑑 =            − +  + =       =
                                               8 4 16 8   16     16

Gabarito: A

Q.04 (CESGRANRIO / Técnico (PETROBRAS) /Enfermagem do Trabalho Júnior/2017)

                𝟏        𝟏    𝟏
Na matriz 𝑨 = i 𝒎        𝒏    𝒑 m, m, n e p são números inteiros ímpares consecutivos tais que
               𝒎𝟐        𝒏𝟐   𝒑𝟐
m< n < p.


                                  𝟒
O valor de 𝒅𝒆𝒕 𝑨 + √𝒅𝒆𝒕 𝑨 + √𝒅𝒆𝒕 𝑨 é
a) 2
b) 8
c) 16
d) 20
e) 22

Comentários:

Pessoal, nessa questão é apresentada a Matriz de Vandermonde. Pois, os elementos da primeira
linha são iguais a 1, os elementos da segunda linha valores quaisquer, os elementos da terceira
linha são iguais ao quadrado dos elementos da segunda linha. Vejamos,

                                                     1      1     1
                                                𝐴 = i𝑚      𝑛     𝑝m
                                                     𝑚"     𝑛"    𝑝"

Nesse tipo de matriz o determinante é dado por:
                                                                                                  19


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   22
        www.estrategiaconcursos.com.br                                                            35

                                      


---

  Allan Maux Santana
  Aula 08

                                      det 𝐴 = (𝑛 − 𝑚) ∙ (𝑝 − 𝑛) ∙ (𝑝 − 𝑚)

A questão diz que m, n e p são número ímpares positivos. Desta forma, não importa os valores
dados a eles, pois sempre o determinante dará o mesmo valor. Vamos supor que esse número
sejam 1, 3 e 5, respectivamente.

                                       det 𝐴 = (3 − 1) ∙ (5 − 3) ∙ (5 − 1)

                                             det 𝐴 = 2 ∙ 2 ∙ 4 = 16

Só para reforça, se fossem escolhidos os valores de 9, 11, 13 para m, n e p, respectivamente.

                                      det 𝐴 = (𝑛 − 𝑚) ∙ (𝑝 − 𝑛) ∙ (𝑝 − 𝑚)

                                   det 𝐴 = (11 − 9) ∙ (13 − 11) ∙ (13 − 9)

                                             det 𝐴 = 2 ∙ 2 ∙ 4 = 16

Esse determinante poderia ser calculado da forma tradicional. Supondo que, m, n e p são 1, 3 e 5,
respectivamente.

                                                    1       1    1
                                               𝐴 = i𝑚       𝑛    𝑝m
                                                    𝑚"      𝑛"   𝑝"

Fazendo as substituições:

                                                      1 1 1
                                                 𝐴 = s1 3 5 t
                                                      1 9 25

                                             3 5       1 5       1 3
                                det 𝐴 = 1 ∙ 8    9−1∙8      9+1∙8   9
                                             9 25      1 25      1 9

                   det 𝐴 = 1 ∙ (3 ∙ 25 − 5 ∙ 9) − 1 ∙ (1 ∙ 25 − 5 ∙ 1) + 1 ∙ (1 ∙ 9 − 3 ∙ 1)

                              det 𝐴 = 1 ∙ (75 − 45) − 1 ∙ (25 − 5) + 1 ∙ (9 − 3)

                                           det 𝐴 = 30 − 20 + 6 = 16

De posse do valor do determinante, utilizaremos a expressão dada na questão,

                                                     "                         "
                                 det 𝐴 + √det 𝐴 + √det 𝐴 = 16 +√16 + √16

                                               = 16 + 4 + 2 = 𝟐𝟐

Gabarito: E
                                                                                                  20


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   23
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

Q.05 (CESGRANRIO / Analista de Pesquisa Energética (EPE)/Petróleo/Abastecimento/2014)

                        𝟏 𝟐
Considere a matriz 𝑴 = 8    9
                        𝟑 𝟒
Qual é o valor do determinante da matriz inversa da transposta de M?
a) -2
b) -1/2
c) 1/2
d) 1
e) 2

Comentários:

Pessoal, a matriz transposta é obtida invertendo as linhas por colunas.

                                                            1 3
                                                      𝑀, = 8   9
                                                            2 4

E a questão quer saber o valor do determinante da matriz inversa à transposta de M. A primeira
coisa a ser feira é achar o determinante da matriz transposta de M.

                                               det (𝑀, ) = 4 − 6 = −2

Agora é só achar a matriz inversa da matriz transposta.

                                                               1         1
                                             det(𝑀-! ) =             = −
                                                           det (𝑀, )     2

Gabarito: B


Questões FCC

Q.06 (FCC / (TRT 11ª Região) /Estatística/2017)
                                                            𝟏    𝟑
Se A é uma matriz quadrada de ordem 2 tal que A=E                 E, então o determinante da inversa da matriz
                                                            𝟐    𝟏
transposta de A é igual a
a) −0,20
b) −0,40
c) −0,25
d) −0,50

                                                                                                                 21


           Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático               24
           www.estrategiaconcursos.com.br                                                                        35

                                       


---

  Allan Maux Santana
  Aula 08

e) −1,00
Comentários:
Determinante de A:
                                                  Det A = 1∙1−3∙2 =
                                                      Det A = −5

P.3.:

                  O determinante de uma Matriz A será igual ao de sua Transposta AT.

Logo:
                                                      Det At = -5
Chamando a transposta da matriz A de matriz B, temos a seguinte relação:
                                                    Det B = Det At
                                                      Det B = −5
A questão solicita o determinante da inversa da transposta, ou seja, o determinante de B−1

P.6.:

             O determinante de uma matriz multiplicado pelo de sua inversa é igual a 1.


                                           Det B ∙ Det B-1 = 1

                                                   (-5) ∙ Det B-1 = 1
                                                        Logo,
                                                   Det B-1 = -1/5 =
                                                       = -0,2 =
Gabarito: A


Questões FGV

Q.07 (FGV / Analista – MPE-SC /2022)
                            −𝟏    𝟎          𝟐    −𝟏
Dadas as matrizes A = E            E, e B = E        E, a soma dos elementos da matriz AB − BA é:
                             𝟐    𝟑          𝟏     𝟐
   a) 0;
   b) 2;
   c) 4;

                                                                                                     22


           Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   25
           www.estrategiaconcursos.com.br                                                            35

                                       


---

  Allan Maux Santana
  Aula 08

   d) 6;
   e) 8.
Comentários:
Gente, de imediato, fiquem atentos à resposta na alternativa “A”.
Sabemos que na operação de multiplicação entres matrizes, a propriedade comutativa não é válida, ou
seja:

                                                   AB ≠ BA
O candidato menos atento poderia não lembrar desse detalhe e marcar a alternativa “A.
Vamos lá para a solução:
         −𝟏    𝟎 𝟐      −𝟏 (−𝟏) ∙ 𝟐 + 𝟎 ∙ 𝟏                  𝟏
                                                     (−𝟏) ∙ (−𝟏) + 𝟎 ∙ 𝟐      −𝟐
AB = E          E∙E       E= w                                "          w= "
          𝟐    𝟑 𝟏       𝟐     𝟐∙𝟐+𝟑∙𝟏                 𝟐 ∙ (−𝟏) + 𝟑 ∙ 𝟐
                                                             𝟒                 𝟕
      𝟐 −𝟏 −𝟏 𝟎 (𝟐) ∙ (−𝟏) + (−𝟏) ∙ 𝟐 𝟐 ∙ 𝟎 + (−𝟏) ∙ 𝟑
BA = E     E∙E    E=w                                 w = E−𝟒 −𝟑E
      𝟏  𝟐     𝟐 𝟑    𝟏 ∙ (−𝟏) + 𝟐 ∙ 𝟐    𝟏∙𝟎+𝟐∙𝟑           𝟑 𝟔

Por fim:
                                                     = AB – BA =

                                          = E−𝟐
                                            𝟏E − E−𝟒 −𝟑E =
                                      𝟕 𝟒           𝟑 𝟔
                                    −𝟐 − (−𝟒) 𝟏 − (−𝟑)
                                ="                         "=
                                        𝟕− 𝟑           𝟒−𝟔
                                             𝟐     𝟒
                                         ="          "=
                                             𝟒 −𝟐
                                            2     4
Agora, vamos somar os elementos da matriz "         ":
                                             4 −2
                                                  = 2 + 4 + 4 + (-2) =
                                                         =8=
Gabarito: E
Q.08 (FGV / Assistente de Controle Externo – TCE-TO /2022)
Para um dia de treinamento, os funcionários de uma empresa foram alocados em três salas: Sala 1, Sala
2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um intervalo, após o qual os
funcionários puderam escolher livremente qualquer sala para a segunda parte do treinamento.

Na matriz A abaixo, cada elemento aij representa o número de funcionários que estavam na Sala i e
foram para a Sala j após o intervalo.

                                                         5 2 7
                                                    𝐴 = s4 9 6 t
                                                         3 8 10
                                                                                                           23


           Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático         26
           www.estrategiaconcursos.com.br                                                                  35

                                       


---

  Allan Maux Santana
  Aula 08

É correto concluir que:
   a) a Sala 1 terminou com 2 funcionários a mais que no início;
   b) a Sala 2 terminou com 20 funcionários;
   c) a Sala 3 terminou com 3 funcionários a mais que no início;
   d) a Sala 1 iniciou com 15 funcionários;
   e) uma das salas terminou com o mesmo número de funcionários que tinha no início.
Comentários:
Vamos colocar a principal parte do enunciado a seguir:
Na matriz A abaixo, cada elemento aij representa o número de funcionários que estavam na Sala i e
foram para a Sala j após o intervalo.

                                                   511     212     713
                                              𝐴 = s421     922     623 t
                                                   331     832    1033

Percebam que os elementos 511, 922 𝑒 1033 representam os funcionários que não mudaram de sala, ok?
Portanto, vamos partir deles.
   •   Toda a primeira linha, exceto o elemento 5, representa os funcionários que saíram da sala 1.
   •   Toda a segunda linha, exceto o elemento 9, representa os funcionários que saíram da sala 2.
   •   Toda a terceira linha, exceto o elemento 10, representa os funcionários que saíram da sala 3.
Agora, vamos aos funcionários que entraram nas salas:
   •   Toda a primeira coluna, exceto o elemento 5, representa os funcionários que entraram na sala 1.
   •   Toda a segunda coluna, exceto o elemento 9, representa os funcionários que entraram na sala 2.
   •   Toda a terceira coluna, exceto o elemento 10, representa os funcionários que entraram na sala 3.
Portanto, temos:
Sala 1 (no início): 5 + 2 + 7 = 14 funcionários;
Sala 2 (no início): 9 + 4 + 6 = 19 funcionários;
Sala 3 (no início): 10 + 3 + 8 = 21 funcionários;
Salas após os remanejamentos:
Sala 1 = 5 – 2 – 7 + 4 + 3 = 3
Sala 2 = 19 – 4 – 6 + 2 + 8 = 19
Sala 3 = 21 – 3 – 8 + 7 + 6 = 23
A única alternativa que corresponde à solução é a “E”.
       e) uma das salas (2) terminou com o mesmo número de funcionários que tinha no início.
Gabarito: E

                                                                                                          24


         Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático          27
         www.estrategiaconcursos.com.br                                                                   35

                                     


---

  Allan Maux Santana
  Aula 08

Q.09 (FGV / Analista – MPE-SC /2022)
Seja A uma     matriz      4     x            4      cujo       determinante          é      igual   a   2.
O determinante da matriz 3A é igual a:
   a) 6;
   b) 12;
   c) 24;
   d) 64;
   e) 162.
Comentários:
Essa é uma questão clássica sobre determinantes.
Como o Det (A)4x4 = 2 e questão nos pede o Det (4A), basta multiplicarmos o Det (A) por 34.
A propriedade é a seguinte:

                                         𝐝𝐞𝐭(𝒌 ∙ 𝑨) = 𝒌𝒏 ∙ 𝐝𝐞𝐭 (𝑨)

Portanto,
                                            Det (3A) = 34 ∙ 2 = 162
Gabarito: E
Q.10 (FGV / Analista – MPE-SC /2022)
Considere as matrizes:

                                         𝐚 𝐛        𝐜          𝟐𝐚 𝐜 𝟑𝐛
                                     𝐀=s 𝐝 𝐞        𝐟 t e 𝐁 = s𝟐𝐝 𝐟 𝟑𝐞t
                                         𝐠 𝐡        𝐤          𝟐𝐠 𝐤 𝟑𝐡

Sendo det(A) e det(B) os determinantes das matrizes A e B, respectivamente, tem-se que:
   a) det(A) = 6 × det(B);
   b) det(A) = −6 × det(B);
   c) det(B) = 6 × det(A);
   d) det(B) = −6 × det(A);
   e) det(A) = det(B).
Comentários:
Para facilitar, vamos supor que o Det (A) = 1
Ocorreram 3 fatos na matriz B em função da matriz A, vejam:

                                          𝐚 𝐛       𝐜          𝟐𝐚 𝐜 𝟑𝐛
                                     𝐀 = s𝐝 𝐞       𝐟 t e 𝐁 = s𝟐𝐝 𝐟 𝟑𝐞t
                                          𝐠 𝐡       𝐤          𝟐𝐠 𝐤 𝟑𝐡
                                                                                                              25


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático               28
        www.estrategiaconcursos.com.br                                                                        35

                                    


---

  Allan Maux Santana
  Aula 08

1º A primeira coluna de “A” foi multiplicada por 2;
2º Houve a permuta da segunda coluna da matriz “A” para a terceira coluna na matriz “B” (quando houver
permuta de filas paralelas, o determinante tem o sinal invertido); e
3º Juntamente com a permuta das colunas, a segunda coluna da matriz “A” também foi multiplicada por
3.
Logo o Det (B) = 3 ∙ 2 ∙ (-1) ∙ 1 = -6
Assim: o Det (B) = -6 ∙ Det A
Gabarito: D

                       LISTA DE QUESTÕES ESTRATÉGICAS

Questões CESGRANRIO

Q.01 (CESGRANRIO / (PETROBRAS) / 2018)
Sejam A uma matriz quadrada de ordem 2 e B uma matriz quadrada de ordem 3, tais que
det A ∙ det B = 1.
O valor de det (3A) ∙ det (2B) é

a) 5

b) 6

c) 36

d) 72

e) 108

Q.02 (CESGRANRIO / PETROBRAS /Júnior/Geologia/2018)

Em um laboratório, um geólogo investiga a densidade de quatro tipos de materiais diferentes,
inicialmente denominados X, Y, W e Z, coletados em campo. Eles estão distribuídos em
camadas, não misturadas entre si, no interior de quatro tubos de mesma massa (quando vazios),
numerados de 1 a 4, conforme ilustra a Figura a seguir.

                                                                                                         26


         Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático         29
         www.estrategiaconcursos.com.br                                                                  35

                                     


---

  Allan Maux Santana
  Aula 08

Sobre os dados, sabe-se que: (i) mk é a massa conjunta do tubo k com os materiais nele
contidos, para 1 ≤ k ≤ 4; (ii) cada tubo vazio tem massa igual a m0; (iii) as densidades dos
materiais X, Y, W, e Z são, respectivamente, dx, dy, dw e dz; (iv) os volumes de cada material, em
cada um dos quatro tubos, estão representados pelo quadro a seguir.

Considere que esses dados foram organizados nas matrizes M, D e V, assim definidas:

Assim, o sistema de equações que modela matematicamente o problema, representado em
sua forma matricial, é:

a) D = MT ∙ V−1

b) D = V ∙ M

c) D = M ∙ V−1

d) D = MT ∙ V

e) D = V−1∙ MT

Q.03 (CESGRANRIO/ TRANSPETRO / Comércio e Suprimento/2018)
                                                                                                  27


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   30
        www.estrategiaconcursos.com.br                                                            35

                                    


---

  Allan Maux Santana
  Aula 08

                                                       𝟐 𝟒
Sejam A e B duas matrizes quadradas 2x2, tal que 𝑨 = 8      9, e 𝑨 ∙ 𝑩 = 𝑰, onde I é a matriz
                                                      −𝟏 𝟔
identidade 2x2. Assim, a soma dos elementos da matriz B é igual a
a) 5/16
b) 7/16
c) 9/16
d) 11/16
e) 13/16

Q.04 (CESGRANRIO / Técnico (PETROBRAS) /Enfermagem do Trabalho Júnior/2017)

                𝟏          𝟏    𝟏
Na matriz 𝑨 = i 𝒎          𝒏    𝒑 m, m, n e p são números inteiros ímpares consecutivos tais que
               𝒎𝟐          𝒏𝟐   𝒑𝟐
m< n < p.


                                    𝟒
O valor de 𝒅𝒆𝒕 𝑨 + √𝒅𝒆𝒕 𝑨 + √𝒅𝒆𝒕 𝑨 é
a) 2
b) 8
c) 16
d) 20
e) 22

Q.05 (CESGRANRIO / Analista de Pesquisa Energética (EPE)/Petróleo/Abastecimento/2014)

                                𝟏   𝟐
Considere a matriz 𝑴 = 8             9
                                𝟑   𝟒
Qual é o valor do determinante da matriz inversa da transposta de M?
a) -2
b) -1/2
c) 1/2
d) 1
e) 2

                                                                                                    28


          Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   31
          www.estrategiaconcursos.com.br                                                            35

                                        


---

  Allan Maux Santana
  Aula 08

Questões FCC

Q.06 (FCC / (TRT 11ª Região) /Estatística/2017)
                                                            𝟏    𝟑
Se A é uma matriz quadrada de ordem 2 tal que A=E                 E, então o determinante da inversa da matriz
                                                            𝟐    𝟏
transposta de A é igual a
a) −0,20
b) −0,40
c) −0,25
d) −0,50
e) −1,00

Questões FGV

Q.07 (FGV / Analista – MPE-SC /2022)
                            −𝟏    𝟎          𝟐    −𝟏
Dadas as matrizes A = E            E, e B = E        E, a soma dos elementos da matriz AB − BA é:
                             𝟐    𝟑          𝟏     𝟐
   a) 0;
   b) 2;
   c) 4;
   d) 6;
   e) 8.
Q.08 (FGV / Assistente de Controle Externo – TCE-TO /2022)
Para um dia de treinamento, os funcionários de uma empresa foram alocados em três salas: Sala 1, Sala
2 e Sala 3. Tendo sido realizada a primeira parte do treinamento, foi feito um intervalo, após o qual os
funcionários puderam escolher livremente qualquer sala para a segunda parte do treinamento.

Na matriz A abaixo, cada elemento aij representa o número de funcionários que estavam na Sala i e
foram para a Sala j após o intervalo.

                                                         5 2 7
                                                    𝐴 = s4 9 6 t
                                                         3 8 10

É correto concluir que:
   a) a Sala 1 terminou com 2 funcionários a mais que no início;
   b) a Sala 2 terminou com 20 funcionários;

                                                                                                                 29


           Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático               32
           www.estrategiaconcursos.com.br                                                                        35

                                       


---

  Allan Maux Santana
  Aula 08

   c) a Sala 3 terminou com 3 funcionários a mais que no início;
   d) a Sala 1 iniciou com 15 funcionários;
   e) uma das salas terminou com o mesmo número de funcionários que tinha no início.


Q.09 (FGV / Analista – MPE-SC /2022)
Seja A uma     matriz      4     x            4      cujo       determinante          é       igual       a    2.
O determinante da matriz 3A é igual a:
   a) 6;
   b) 12;
   c) 24;
   d) 64;
   e) 162.
Q.10 (FGV / Analista – MPE-SC /2022)
Considere as matrizes:

                                          𝐚 𝐛       𝐜          𝟐𝐚 𝐜 𝟑𝐛
                                     𝐀 = s𝐝 𝐞       𝐟 t e 𝐁 = s𝟐𝐝 𝐟 𝟑𝐞t
                                          𝐠 𝐡       𝐤          𝟐𝐠 𝐤 𝟑𝐡

Sendo det(A) e det(B) os determinantes das matrizes A e B, respectivamente, tem-se que:
   a) det(A) = 6 × det(B);
   b) det(A) = −6 × det(B);
   c) det(B) = 6 × det(A);
   d) det(B) = −6 × det(A);
   e) det(A) = det(B).

Gabarito

    1          2           3           4            5          6            7             8           9       10
    D          A           A           E            B          A            E             E           E       D

                                                                                                                    30


        Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático                     33
        www.estrategiaconcursos.com.br                                                                              35

                                    


---

Allan Maux Santana
Aula 08

                                              Prof. Allan Maux

                                                                                                31


      Receita Federal (Analista Tributário) Passo Estratégico de Raciocínio Lógico Matemático   34
      www.estrategiaconcursos.com.br                                                            35

                                  


---

---
