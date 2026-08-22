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
arquivo_origem: Aula 03_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '03'
titulo_aula: Estatística
---

# Estatística

Aula 02
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                             23 de Maio de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 02

                                                                                     Índice
1) Mediana.


2) Quartil, Decil e Percentill.


3) Box Plot.


4) Questões Comentadas - Mediana - FGV


5) Questões Comentadas - Quartil, Decil e Percentil - FGV


6) Questões Comentadas - Box Plot - FGV


7) Lista de Questões - Mediana - FGV


8) Lista de Questões - Quartil, Decil e Percentil - FGV


9) Lista de Questões - Box Plot - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           47

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                   MEDIDAS SEPARATRIZES
As separatrizes são medidas que dividem (ou separam) uma série ordenada em duas ou mais
partes, cada uma contendo a mesma quantidade de elementos. Nesse caso, o nome da medida
separatriz é definido de acordo com a quantidade de partes em que a série é dividida:
       •    mediana: divide uma série ordenada em duas partes iguais, cada uma contendo 50%
            dos valores da sequência;
       •    quartis: dividem uma série ordenada em quatro partes iguais, cada uma contendo 25%
            dos valores da sequência;
       •    decis: dividem uma série ordenada em dez partes iguais, cada uma contendo 10% dos
            valores da sequência; e
       •    percentis: dividem uma série ordenada em cem partes iguais, cada uma contendo 1%
            dos valores da sequência.

Mediana

A mediana é, simultaneamente, uma MEDIDA DE POSIÇÃO, de TENDÊNCIA CENTRAL e
SEPARATRIZ. Ela caracteriza a posição central de uma série de valores. Também separa uma série
de valores em duas partes de tamanhos iguais, cada uma contendo o mesmo número de
elementos. Muitas vezes, é designada como valor mediano, sendo representada pelo símbolo 𝑴𝒅 .


Mediana para dados não agrupados
A mediana é o elemento que ocupa a POSIÇÃO CENTRAL de uma série de observações
ORDENADA segundo suas grandezas (isto é, dados brutos organizados em rol crescente ou
decrescente).

Quando uma série possui um NÚMERO ÍMPAR de elementos, a MEDIANA SEMPRE COINCIDE
com o ELEMENTO CENTRAL do conjunto de dados. Quando uma série possui um NÚMERO PAR
de elementos, POR CONVENÇÃO, a MEDIANA é a MÉDIA ARITMÉTICA dos dois termos centrais.

Portanto, podemos estabelecer que a mediana de um conjunto composto por 𝑛 elementos
ordenados de forma crescente ou decrescente será:
                                                 𝑛+1
  a) se 𝑛 for ímpar, o termo de ordem                 , isto é,
                                                  2


                                                       𝑴𝒅 = 𝒙𝒏+𝟏
                                                                  𝟐

        Receita Federal (Analista Tributário) Estatística                                   3
        www.estrategiaconcursos.com.br                                                     47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                                           𝑛   𝑛
  b) se 𝑛 for par, a média aritmética dos termos de ordem 2 e 2 + 1, isto é,

                                                            𝒙𝒏 + 𝒙𝒏+𝟏
                                                             𝟐       𝟐
                                                𝑴𝒅 =
                                                                 𝟐

A mediana depende apenas do termo que ocupa a posição central em um conjunto de dados, isto
é, depende apenas posição e não dos valores dos elementos de uma série ordenada. Essa é uma
das principais diferenças entre a média e a mediana, pois a primeira é muito impactada pela
presença de valores extremos/discrepantes enquanto a última não.

Mediana para dados agrupados sem intervalos de classe

O raciocínio adotado no cálculo da mediana para dados agrupados por valor (sem intervalos de
classe) é similar ao empregado no caso dos dados não-agrupados. Basicamente, teremos que
encontrar um valor que dividirá a distribuição de frequências em duas partes contendo o mesmo
número de elementos.


Considere a tabela ao lado que apresenta o nível                            Nível de
de satisfação dos clientes de determinada                                                   Frequência (𝒇𝒊 )
                                                                         Satisfação (𝑿𝒊 )
empresa. Os clientes puderam atribuir notas de                                  0                  3
0 a 5 quanto ao nível de satisfação, resultando na
                                                                                1                  5
seguinte distribuição de frequências:
                                                                                2                  8
                                                                                3                 10
                                                                                4                 13
                                                                                5                 10

        Receita Federal (Analista Tributário) Estatística                                                      4
        www.estrategiaconcursos.com.br                                                                         47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

O total de clientes entrevistados foi de:
                                         3 + 5 + 8 + 10 + 13 + 10 = 49.
Como o número de entrevistados é ímpar, 𝑛 = 49, a mediana será o termo que ocupa a posição
de ordem:
                                             𝑛 + 1 49 + 1 50
                                                  =      =   = 25
                                               2     2     2

A mediana será o elemento que ocupa a                               Nível de      Frequênc        Frequência
vigésima quinta posição. Para chegarmos a                          Satisfação         ia          Acumulada
esse elemento, precisamos percorrer cada um                           (𝑿𝒊 )          (𝒇𝒊 )           (𝒇𝒂𝒄 )
dos níveis de satisfação. Esse procedimento                                0           3               3
pode ser simplificado com a adição de uma
                                                                           1           5            3+5 = 8
coluna adicional para armazenar as
frequências acumuladas. Para calcularmos a                                 2           8           8+8 = 16
frequência acumulada, devemos repetir a                                    3           10         16+10 = 26
primeira frequência e somar as frequências                                 4           13         26 + 13 = 39
subsequentes, exibindo os resultados a cada                                5           10         39 + 10 = 49
linha. Observem na tabela ao lado:


A coluna de frequências acumuladas torna possível calcularmos a mediana de forma praticamente
imediata. Se 𝒏 for ímpar, basta identificarmos o valor da variável correspondente à primeira
                                                                                            𝒏+𝟏
frequência acumulada imediatamente igual ou superior à posição de ordem                          ; e, se 𝒏 for par,
                                                                                             𝟐
basta identificarmos os dois valores correspondentes às frequências acumuladas imediatamente
                                              𝒏   𝒏
iguais ou superiores às posições de ordens 𝟐 e 𝟐 + 𝟏, respectivamente, e tirarmos a média
aritmética desses dois valores.
                                                                                                     𝑛+1       49+1
Em nosso exemplo, como a frequência total é ímpar, teremos que buscar pela posição                         =          =
                                                                                                      2         2
25. A mediana será o valor da variável correspondente à primeira frequência acumulada maior ou
igual a essa posição, portanto, 𝑀𝑑 = 3. Vejamos:

               Nível de Satisfação (𝑿𝒊 ) Frequência (𝒇𝒊 ) Frequência Acumulada (𝒇𝒂𝒄 )
                              0                             3                     3
                              1                             5                     8
                              2                             8                     16
                              3                         10                     26 (> 25)
                              4                         13                        39
                              5                         10                        49

        Receita Federal (Analista Tributário) Estatística                                                             5
        www.estrategiaconcursos.com.br                                                                                47

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 02

Assim, podemos estabelecer que a mediana de uma tabela de frequências composta por um total
de 𝑛 elementos será:
  a) se 𝑛 for ímpar, o valor identificado na tabela correspondente à frequência acumulada
                                                   𝑛+1
imediatamente igual ou superior à posição de ordem 2 , isto é,

                                                        𝑴𝒅 = 𝑿𝒏+𝟏
                                                                       𝟐

   b) se 𝑛 for par, a média aritmética dos valores identificados na tabela correspondentes às
                                                                                 𝑛  𝑛
frequências acumuladas imediatamente iguais ou superiores às posições de ordens 2 e 2 + 1, isto
é,

                                                               𝑿𝒏 + 𝑿𝒏+𝟏
                                                                𝟐          𝟐
                                                   𝑴𝒅 =
                                                                     𝟐

Mediana para dados agrupados em classes

O raciocínio adotado no cálculo da mediana para dados agrupados em classes é muito similar ao
empregado no tópico anterior. Agora, contudo, não nos importaremos com o número de
elementos da série. Adotaremos um único procedimento de cálculo, independentemente de
termos um número par ou ímpar de elementos.
Seja a distribuição de frequências descrita a seguir, que resume as idades de um grupo de 50
alunos:

                                              Idades                Frequência (𝒇𝒊 )
                                             23 ⊢ 26                           3
                                             26 ⊢ 29                           4
                                             29 ⊢ 32                       10
                                             32 ⊢ 35                       13
                                             35 ⊢ 38                       10
                                             38 ⊢ 41                           6
                                             41 ⊢ 44                           4
                                              TOTAL                        50

           Receita Federal (Analista Tributário) Estatística                                 6
           www.estrategiaconcursos.com.br                                                   47

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A etapa inicial do cálculo da mediana consiste na construção da coluna de frequências acumuladas:
                                                                         Frequência
                                                   Frequência
                                   Idades                                Acumulada
                                                       (𝒇𝒊 )
                                                                            (𝒇𝒂𝒄 )

                                  23 ⊢ 26                   3                3

                                  26 ⊢ 29                   4                7

                                  29 ⊢ 32                   10              17

                                  32 ⊢ 35                   13              30

                                  35 ⊢ 38                   10              40

                                  38 ⊢ 41                   6
                                                            ==219a34==
                                                                            46

                                  41 ⊢ 44                   4               50

                                  TOTAL                     50

Para calcular a mediana de dados que estão agrupados por intervalo de classes, precisamos
identificar a classe em que se encontra a mediana, a chamada classe mediana, que corresponde à
frequência acumulada imediatamente igual ou superior à metade da frequência total, ou seja,
metade da soma das frequências simples, ∑ 𝒇𝒊 ⁄𝟐. Em nosso exemplo, temos:
                                                    ∑ 𝑓𝑖 50
                                                        =   = 25
                                                     2    2
Agora, devemos comparar o valor encontrado com os valores presentes na coluna de frequências
acumuladas, percorrendo-os de cima para baixo. A classe mediana será a primeira classe em que
a frequência acumulada for igual ou superior a 25. Observando a tabela, percebemos que a quarta
classe tem frequência acumulada 30, portanto, é maior que 25. Logo, encontramos a classe
mediana. Ela se encontra na quarta classe, isto é, no intervalo entre 32 e 35.
Conhecendo a classe mediana, podemos aplicar a fórmula da mediana, a seguir:

                                                  ∑𝒇
                                                 ( 𝟐 𝒊 ) − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                    𝑴𝒅 = 𝒍𝒊𝒏𝒇 + [                  ]×𝒉
                                                         𝒇𝒊

em que:
   𝑙𝑖𝑛𝑓 é o limite inferior da classe mediana;
   𝑓𝑎𝑐 𝑎𝑛𝑡 é a frequência acumulada da classe anterior à classe mediana;
   𝑓𝑖 é a frequência simples da classe mediana; e
   ℎ é a amplitude do intervalo da classe mediana.

        Receita Federal (Analista Tributário) Estatística                                      7
        www.estrategiaconcursos.com.br                                                        47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Já sabemos que a amplitude é a diferença entre os limites da classe. Assim, temos:
                                                  ℎ = 35 − 32 = 3.


Os demais elementos da fórmula são ilustrados a seguir:

Após identificarmos os elementos, precisamos aplicá-los na fórmula mostrada anteriormente:
                                                       ∑𝑓
                                                      ( 𝑖 ) − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                        2
                                         𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [                ]×ℎ
                                                            𝑓𝑖

                                                             50
                                                            ( 2 ) − 17
                                            𝑀𝑑 = 32 + [                  ]×3
                                                               13

                                                        25 − 17
                                             𝑀𝑑 = 32 + (        )×3
                                                          13
                                                       8
                                           𝑀𝑑 = 32 + ( ) × 3 ≅ 33,85
                                                      13


Sendo assim, podemos afirmar que:
     a) 50% dos valores estão entre 23 e 33,85;
     b) 50% dos valores estão entre 33,85 e 44.

        Receita Federal (Analista Tributário) Estatística                                    8
        www.estrategiaconcursos.com.br                                                       47

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

Propriedades da Mediana
  •   1ª Propriedade - Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma
      variável, a mediana do conjunto fica aumentada (ou diminuída) dessa constante.
  •   2ª Propriedade - Multiplicando-se (ou dividindo-se) todos os valores de uma variável por
      uma constante 𝒄, a mediana do conjunto fica multiplicada (ou dividida) por esta constante.
  •   3ª Propriedade - A soma dos desvios absolutos de uma sequência de números, em relação
      a um número 𝒂, é mínima quando 𝒂 é a mediana dos números.

       Receita Federal (Analista Tributário) Estatística                                      9
       www.estrategiaconcursos.com.br                                                        47

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                              QUARTIL, DECIL E PERCENTIL
Uma série também pode ser dividida em um número maior de partes, todas compostas por
quantidades iguais de elementos. Nesse caso, o nome da medida separatriz é atribuído de acordo
com a quantidade de partes em que a série é dividida:

   •   quartil: divide uma série em quatro partes iguais (𝑄1 , 𝑄2 , 𝑄3 );

   •   decil: divide uma série em dez partes iguais (𝐷1 , 𝐷2 , ⋯, 𝐷9 );

   •   percentil: divide uma série em cem partes iguais (𝑃1 , 𝑃2 , ⋯, 𝑃99 ).

Nessa seção, vamos detalhar algumas medidas separatrizes que também são muito exploradas
em provas de concursos: os quartis, os decis e os percentis.

Quartis

Denominamos de quartis os valores de uma
série que a dividem em quatro partes iguais,
isto é, quatro partes contendo o mesmo
número de elementos (25%). A imagem ao lado
mostra os quartis de uma distribuição
hipotética:
Temos, então, 3 quartis (𝑄1 , 𝑄2 e 𝑄3 ) para dividir uma série em quatro partes iguais:
   •   𝑄1: o primeiro quartil corresponde à separação dos primeiros 25% de elementos da série;
   •   𝑄2 : o segundo quartil corresponde à separação de metade dos elementos da série,
       coincidindo com a mediana (𝑸𝟐 = 𝑴𝒅 );
   •   𝑄3 : o terceiro quartil corresponde à separação dos primeiros 75% de elementos da série,
       ou dos últimos 25% de elementos da série.
Para o cálculo dos quartis, empregaremos a mesma fórmula adotada no cálculo da mediana,
                                          ∑ 𝑓𝑖         𝑘×∑ 𝑓𝑖
apenas substituindo a expressão                  por            , em que 𝑘 indica a ordem do quartil e assume
                                            2            4
valores inteiros no intervalo de 1 a 3.

Quartil para dados não agrupados

O cálculo do quartil para dados não-agrupados é realizado, de forma aproximada, por meio das
etapas descritas a seguir:


        Receita Federal (Analista Tributário) Estatística                                                 10
        www.estrategiaconcursos.com.br                                                                    47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:

                                                     𝒌×𝒏
                                            𝑷 𝑸𝒌 =                       (𝒌 = 𝟏, 𝟐, 𝟑);
                                                      𝟒

   •   2.a etapa: identificamos a posição mais próxima do rol;

   •   3.a etapa: verificamos o valor que está ocupando essa posição.

Sempre que houver necessidade, teremos que organizar o conjunto de valores por ordem de
magnitude.

                                                            ==219a34==

Embora fórmula anterior possa ser utilizada para o cálculo da posição de 𝑄2 , por depender de uma
aproximação, nem sempre o valor do segundo quartil resultará no valor convencionado para a
mediana. Por isso, para o cálculo de 𝑄2 , vamos adotar o procedimento utilizado para encontrar a
mediana. Isto é, se o número de elementos for ímpar, 𝑄2 será representado pelo elemento que
                               𝑛+1
ocupar a posição central,           . Se o número de elementos do conjunto for par, 𝑄2 será representado
                                2
                                                                                           𝑛   𝑛
pela média aritmética entre os elementos que ocuparem as posições centrais, e + 1.
                                                                                           2   2

Quartil para dados agrupados sem intervalos de classe
O cálculo do quartil para dados agrupados sem intervalos de classe é realizado, de forma
aproximada, por meio das etapas descritas a seguir:

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:

                                                 𝒌 × ∑ 𝒇𝒊
                                       𝑷𝑸𝒌 =                               (𝒌 = 𝟏, 𝟐, 𝟑)
                                                    𝟒
            em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;

   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                            11
        www.estrategiaconcursos.com.br                                                               47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Quartil para dados agrupados em classes
O cálculo do quartil para dados agrupados em classes será realizado por meio das seguintes
etapas:

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:
                                                       𝑘 × ∑ 𝑓𝑖
                                               𝑃𝑄𝑘 =              (𝑘 = 1, 2, 3);
                                                          4
             em que:

                  𝑘 = índice do quartil;

                  ∑ 𝑓𝑖 = somatório das frequências simples.

   •   2.a etapa: identificamos a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;

   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e

   •   4.ª etapa: calculamos o valor do quartil por meio da fórmula apresentada a seguir, que
       consiste em uma variação da fórmula da mediana para dados agrupados em classes,
                                      𝑘×∑ 𝑓𝑖
       mudando-se apenas o                     :
                                         4


                                               𝒌 × ∑ 𝒇𝒊
                                                        − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                  𝑸𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟒                 ] × 𝒉𝑸𝒌
                                           𝑸𝒌         𝒇𝑸 𝒌

             em que:

                      𝑙𝑖𝑛𝑓 𝑄 = limite inferior da classe do quartil considerado;
                            𝑘


                      𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do quartil considerado;

                      ℎ𝑄𝑘 = amplitude do intervalo de classe do quartil considerado;

                      𝑓𝑄𝑘 = frequência simples da classe do quartil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

          Receita Federal (Analista Tributário) Estatística                                          12
          www.estrategiaconcursos.com.br                                                             47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Decis

Denominamos de decis os valores de uma série
que a dividem em dez partes iguais, isto é, dez
partes      contendo       o    mesmo        número       de
elementos (10%). A imagem ao lado mostra os
decis de uma distribuição hipotética:

Temos, então, 9 decis (𝐷1 , 𝐷2 , ⋯, 𝐷9 ) para dividir uma série em dez partes iguais:

   •     𝐷1 : o primeiro decil corresponde à separação dos primeiros 10% de elementos da série;

   •     𝐷5 : o quinto decil corresponde à separação de metade dos elementos da série, coincidindo
         com a mediana (𝑫𝟓 = 𝑴𝒅 );

   •     𝐷𝟗 : o nono decil corresponde à separação dos primeiros 90% de elementos da série, ou dos
         últimos 10% de elementos da série.

Para o cálculo dos decis, empregaremos a mesma fórmula adotada no cálculo da mediana, apenas
                                ∑𝑓        𝑘×∑ 𝑓𝑖
substituindo a expressão 2 𝑖 por                   , em que 𝑘 indica a ordem do decil e assume valores inteiros
                                            10
no intervalo de 1 a 9.

Decil para dados não agrupados
O cálculo do decil segue o mesmo raciocínio empregado no cálculo do quartil para dados não-
agrupados. A primeira tarefa que devemos realizar, se houver necessidade, é organizar o conjunto
de valores por ordem de magnitude. Depois, procedemos conforme as seguintes etapas:

   •     1.a etapa: determinamos a posição do decil, por meio da expressão:

                                                    𝒌×𝒏
                                        𝑷𝑫𝒌 =                  (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗);
                                                     𝟏𝟎
   •     2.a etapa: identificamos a posição mais próxima do rol;

   •     3.a etapa: verificamos o valor que está ocupando essa posição.

Decil para dados agrupados sem intervalos de classe.

O cálculo do decil para dados agrupados sem intervalos de classe será realizado por meio das
etapas descritas a seguir:


          Receita Federal (Analista Tributário) Estatística                                                 13
          www.estrategiaconcursos.com.br                                                                    47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •   1.a etapa: determinamos a posição do decil, por meio da expressão:

                                                  𝒌 × ∑ 𝒇𝒊
                                        𝑷𝑫𝒌 =                 (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗)
                                                    𝟏𝟎

            em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do decil;

   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

Decil para dados agrupados em classes

O cálculo do decil para dados agrupados em classes será realizado por meio das seguintes etapas:

   •   1.a etapa: determinamos a posição do decil, por meio da expressão:
                                                 𝑘 × ∑ 𝑓𝑖
                                       𝑃𝐷𝑘 =                 (𝑘 = 1, 2, 3, ⋯ , 9);
                                                    10
            em que:

                𝑘 = índice do decil;

                ∑ 𝑓𝑖 = somatório das frequências simples.

   •   2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do decil;

   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e

   •   4.ª etapa: calculamos o valor do decil por meio da fórmula apresentada a seguir, que
       consiste em uma variação da fórmula da mediana para dados agrupados em classes,
                                    𝑘×∑ 𝑓𝑖
       mudando-se apenas o                   :
                                      10

                                                 𝒌 × ∑ 𝒇𝒊
                                                          − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                    𝑫𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟏𝟎                ] × 𝒉𝑫𝒌
                                             𝑫𝒌        𝒇𝑫𝒌


            em que:

                    𝑙𝑖𝑛𝑓 𝐷 = limite inferior da classe do decil considerado;
                          𝑘


                    𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do decil considerado;

        Receita Federal (Analista Tributário) Estatística                                         14
        www.estrategiaconcursos.com.br                                                            47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                    ℎ𝐷𝑘 = amplitude do intervalo de classe do decil considerado;

                    𝑓𝐷𝑘 = frequência simples da classe do decil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

Percentis

Denominamos de percentis os valores de uma
série que a dividem em cem partes iguais, isto
é, cem partes contendo o mesmo número de
elementos (1%). A imagem ao lado mostra os
percentis de uma distribuição hipotética:

Temos, então, 99 percentis (𝑃1 , 𝑃2 , ⋯, 𝑃99 ) para dividir uma série em cem partes iguais:

   •   𝑃1 : o primeiro percentil corresponde à separação do primeiro 1% de elementos da série;

   •   𝑃50 : o quinquagésimo percentil corresponde à separação de metade dos elementos da
       série, coincidindo com a mediana (𝑷𝟓𝟎 = 𝑴𝒅 );

   •   𝑃99 : o nonagésimo nono percentil corresponde à separação dos primeiros 99% de
       elementos da série, ou do último 1% de elementos da série.

Para o cálculo dos percentis, empregaremos a mesma fórmula adotada no cálculo da mediana,
                                          ∑ 𝑓𝑖         𝑘×∑ 𝑓𝑖
apenas substituindo a expressão                  por            , em que 𝑘 indica a ordem do percentil e assume
                                           2            100
valores inteiros no intervalo de 1 a 99.

Percentil para dados não-agrupados

O cálculo do percentil segue o mesmo raciocínio empregado nos cálculos do quartil e do decil
para dados não-agrupados. A primeira tarefa que devemos realizar, se houver necessidade, é
organizar o conjunto de valores por ordem de magnitude. Depois disso, colocamos em prática as
seguintes etapas:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:

                                                  𝒌×𝒏
                                         𝑷 𝑷𝒌 =                 (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗);
                                                  𝟏𝟎𝟎

        Receita Federal (Analista Tributário) Estatística                                                   15
        www.estrategiaconcursos.com.br                                                                      47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •   2.a etapa: identificamos a posição mais próxima do rol;

   •   3.a etapa: verificamos o valor que está ocupando essa posição.

Percentil para dados agrupados sem intervalos de classe

O cálculo do percentil para dados agrupados sem intervalos de classe será realizado por meio das
etapas descritas a seguir:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:

                                                   𝒌 × ∑ 𝒇𝒊
                                          𝑷 𝑷𝒌 =               (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗)
                                                     𝟏𝟎𝟎

             em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do percentil na coluna de frequências acumuladas, isto é,
       a frequência acumulada imediatamente igual ou superior à posição do percentil;

   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

Percentil para dados agrupados em classes

O cálculo do percentil para dados agrupados em classes será realizado por meio das seguintes
etapas:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:
                                                𝑘 × ∑ 𝑓𝑖
                                        𝑃𝑃𝑘 =                 (𝑘 = 1, 2, 3, ⋯ , 99);
                                                  100
             em que:

                  𝑘 = índice do percentil;

                  ∑ 𝑓𝑖 = somatório das frequências simples.

   •   2.a etapa: identificamos a posição do percentil na coluna de frequências acumuladas, isto é,
       a frequência acumulada imediatamente igual ou superior à posição do percentil;

   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e

          Receita Federal (Analista Tributário) Estatística                                     16
          www.estrategiaconcursos.com.br                                                        47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •   4.ª etapa: calculamos o valor do percentil por meio da fórmula apresentada a seguir, que
       consiste em uma variação da fórmula da mediana para dados agrupados em classes,
                                    𝑘×∑ 𝑓𝑖
       mudando-se apenas o                   :
                                     100


                                                 𝒌 × ∑ 𝒇𝒊
                                                          − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                    𝑷𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟏𝟎𝟎               ] × 𝒉 𝑷𝒌
                                             𝑷𝒌         𝒇𝑷𝒌


            em que:

                𝑙𝑖𝑛𝑓 𝑃 = limite inferior da classe do percentil considerado;
                      𝑘


                𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do percentil considerado;

                ℎ𝑃𝑘 = amplitude do intervalo de classe do percentil considerado;

                𝑓𝑃𝑘 = frequência simples da classe do percentil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                        17
        www.estrategiaconcursos.com.br                                                           47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                  BOX PLOT
Um boxplot (também chamado de box-and-whisker plot) é uma representação gráfica utilizada na
análise exploratória de dados que permite visualizar a distribuição dos dados e os valores
discrepantes (outliers), assim como a distância dos valores extremos em relação à maioria dos
dados. Essa ferramenta resume cinco medidas descritivas de um conjunto de dados, incluindo: o
valor mínimo, o primeiro quartil, a mediana, o terceiro quartil e o valor máximo.

Para construir um gráfico de boxplot, usamos uma haste horizontal ou vertical e uma caixa
retangular (box). O local em que a haste começa (da esquerda para a direita) indica o valor mínimo
e o ponto em que a haste termina indica o valor máximo.

A caixa retangular, localizada no meio da haste, em geral, possui três linhas. A primeira linha, na
extremidade esquerda da caixa, indica o primeiro quartil. A terceira linha, na extremidade direita,
indica o terceiro quartil. A linha do meio, no interior da caixa, indica o segundo quartil ou a
mediana. O segundo quartil pode estar entre o primeiro e o terceiro quartis, ou pode coincidir
com um, ou outro, ou ambos.

Além disso, há dois traços, chamados de whiskers (ou bigodes), ligando o valor mínimo à
extremidade esquerda da caixa e o valor máximo à extremidade direita da caixa. Cada um desses
traços comporta, aproximadamente, 25% dos dados. O restante, cerca de 50%, está distribuído
no interior da caixa.

Também podemos encontrar gráficos de box plot com pontos ou asteriscos marcando valores
discrepantes (outliers). Nesses casos, os whiskers não se estendem aos valores mínimo e máximo
do conjunto de dados, mas ficam limitados a um comprimento máximo de 1,5 × 𝐷𝐼𝑄, em que 𝑫𝑰𝑸
é a distância interquartílica.

A distância interquartílica (ou amplitude interquartílica, ou intervalo interquartílico) é calculada
pela fórmula:

                                                   𝑫𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏

        Receita Federal (Analista Tributário) Estatística                                        18
        www.estrategiaconcursos.com.br                                                           47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                            ==219a34==

Dessa forma, valores menores que 𝑸𝟏 − 𝟏, 𝟓 × 𝑫𝑰𝑸 ou maiores que 𝑸𝟑 + 𝟏, 𝟓 × 𝑫𝑰𝑸 são
considerados VALORES DISCREPANTES (OUTLIERS) e representados por PONTOS ou
ASTERISCOS.

É importante salientarmos que a fórmula da distância interquartílica se parece muito com a do
desvio quartílico (ou amplitude semi-interquartílica), podendo ser facilmente confundida. O desvio
quartílico é calculado pela expressão apresentada a seguir:
                                                                         𝑸𝟑 − 𝑸𝟏
                                                     𝑫𝒒 =
                                                                            𝟐
Essa medida será abordada de forma mais detalhada na aula de medidas de dispersão.

        Receita Federal (Analista Tributário) Estatística                                      19
        www.estrategiaconcursos.com.br                                                         47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                            QUESTÕES COMENTADAS – FGV

Mediana

1. (FGV/TJ-AP/2024) Segundo o ditado, “se alguém está com a cabeça no gelo e os pés no forno, não se
pode dizer que está bem”. Para que a conclusão seja que a pessoa está bem, deve-se aferir a temperatura
da pessoa na cabeça (gelo), nos pés (forno) e também nas axilas (fora do gelo e do forno), pelo seguinte
estimador:
a) média aritmética;
b) média geométrica;
c) média harmônica;
d) mediana;
e) moda.


Comentários:
A expressão é uma metáfora que ilustra a falácia da média. A média, por si só, pode fornecer uma visão
incompleta da realidade, especialmente quando se trata de conjuntos de dados com distribuições
assimétricas.
A cabeça no gelo (temperatura muito baixa) e os pés no forno (temperatura muito alta) representam valores
extremos que distorcem a média, levando a uma visão falsa da situação.
A mediana pode ser uma alternativa mais adequada à média quando se trata de conjuntos de dados com
distribuições assimétricas. A mediana é o valor que divide o conjunto de dados em dois grupos com o mesmo
número de elementos.
A mediana é menos sensível à presença de valores extremos. Ela não é influenciada por valores muito altos
ou muito baixos, o que a torna mais robusta que a média em distribuições assimétricas.
Gabarito: D.


2. (FGV/RFB/2023) Uma pequena amostra de 11 salários (medidos em quantidades de salários mínimos)
de trabalhadores de terceiro setor mostrou os seguintes resultados:
                                 2,0 2,3 2,7 3,4 3,9 2,8 2,3 1,8 1,5 3,3 1,5
A diferença, em quantidade de salários mínimos, entre os valores da média e da mediana desses dados é
igual a
a) 0,0.

          Receita Federal (Analista Tributário) Estatística                                           20
          www.estrategiaconcursos.com.br                                                              47

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 02

b) 0,1.
c) 0,2.
d) 0,3.
e) 0,4.


Comentários:
A mediana é o termo central da amostra. Ela separa uma série de valores em duas partes de tamanhos iguais,
cada uma contendo o mesmo número de elementos. Para calcularmos a mediana, primeiramente, vamos
precisar ordenar os dados. Assim, reescrevendo os dados em ordem crescente, temos:
                                1,5 1,5 1,8 2,0 2,3            2,3
                                                               ⏟         2,7 2,8 3,3 3,4 3,9
                                                         𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

Portanto, a mediana é igual a 2,3.
Agora, vamos calcular a média. A média é definida pelo quociente entre a soma dos valores de um
determinado conjunto e a quantidade de valores nele existentes.
                                                                  𝑠𝑜𝑚𝑎
                                                          𝑥̅ =
                                                                    𝑛
                              2,0 + 2,3 + 2,7 + 3,4 + 3,9 + 2,8 + 2,3 + 1,8 + 1,5 + 3,3 + 1,5
                       𝑥̅ =
                                                            11
                                                                  27,5
                                                           𝑥̅ =
                                                                   11
                                                           𝑥̅ = 2,5
Fazendo a diferença entre a média e a mediana, temos:
                                                𝑥̅ − 𝑀𝑑 = 2,5 − 2,3 = 0,2
Gabarito: C.


3. (FGV/SEF-MG/2023) Considere a lista de 200 números inteiros a seguir:
                                           𝟏, 𝟐, 𝟑, ⋯ , 𝟏𝟎𝟎, 𝟏𝟐 , 𝟐𝟐 , 𝟑𝟐 , ⋯ , 𝟏𝟎𝟎𝟐 .
A mediana dessa lista de números é
a) 50,5.
b) 72,5.
c) 80,5.
d) 91,5.
e) 100.

           Receita Federal (Analista Tributário) Estatística                                           21
           www.estrategiaconcursos.com.br                                                              47

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Comentários:
A mediana caracteriza a posição central de uma série de valores. Ela separa uma série de valores em duas
partes de tamanhos iguais, cada uma contendo o mesmo número de elementos.
No enunciado da questão, temos a informação de que o conjunto é formado por 200 termos. Quando o
                                                                                                           𝑛
número de termos é par, dois termos ocupam as posições centrais, sendo que o primeiro ocupa a posição 2
                                                                            𝑛
e o segundo ocupa a posição imediatamente seguinte, ou seja, 2 + 1. Nessa situação, por convenção, a
mediana será a média aritmética entre os termos centrais. Assim, a mediana será dada pela média aritmética
dos termos na posição 100 e 101.
É importante observarmos que os dados precisam estar em ordem crescente para que a mediana seja
determinada. Então, se organizarmos a sequência 1,2,3, … ,100, 12 , 22 , 32 , … , 1002 em ordem crescente,
ficamos com:
                                           1, 12 , 2,3, 22 , … ,100, … , 1002 .
Reparem que 12 , 22 , 32 , … , 92 resultam em valores menores que 100. Assim, entre 1 e 100 teremos 9 valores
resultantes dessas potências.
Agora, precisamos encontrar a posição do número 92 = 81, pois essa é a última potência de 2 menor que
100. Para identificarmos a posição ocupada pelo termo 81, basta somarmos os 9 valores que entraram entre
1 e 100. Logo, 81 + 9 = 90. Então, o termo 81, ou seja, 92 , está na posição 90.
Assim, podemos identificar os termos que ocupam as posições 100 e 101:

                                              Termos          Posição

                                                 81              90

                                                 82              91

                                                 83              92

                                                 84              93

                                                 85              94

                                                 86              95

                                                 87              96

                                                 88              97

                                                 89              98

        Receita Federal (Analista Tributário) Estatística                                                 22
        www.estrategiaconcursos.com.br                                                                    47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                 90                99

                                                 91               100

                                                 92               101

Portanto, os termos que ocupam as posições 100 e 101 são, respectivamente, os valores 91 e 92. Para
determinarmos a mediana, basta calcularmos a média aritmética entre esses dois valores:
                                                   91 + 92 183
                                           𝑀𝑑 =           =    = 91,5
                                                      2     2
Ou seja, a mediana é igual a 91,5.
Gabarito: D.


4. (FGV/TCE ES/2023) A seguinte amostra de acidentes de trânsito em um mês foi observada:
                                       9, 15, 15, 11, 13, 16, 15, 13, 16, 18, 9.
Nesse caso, é correto afirmar, a respeito das principais medidas de tendência central desse conjunto, que:
a) a média é igual a 15;
b) o valor da média é menor do que o da mediana;
c) o valor da mediana é duas unidades maior do que o da média;
d) se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar;
e) se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
permanecerão iguais.


Comentários:
Vamos analisar cada uma das alternativas.
Letra A - a média é igual a 15. Calculando a média temos:
                𝑠𝑜𝑚𝑎 9 + 15 + 15 + 11 + 13 + 16 + 15 + 13 + 16 + 18 + 9 150
            𝑥̅ =      =                                                =    ≅ 13,63
                  𝑛                          11                          11
Portanto, a alternativa A está errada.
Letra B - o valor da média é menor do que o da mediana. Já calculamos a média na alternativa anterior,
então, vamos ao cálculo da mediana. Sabemos que a mediana é o termo central da amostra. Por conta disso,
precisamos ordenar os dados da amostra:
                                    9, 9, 11, 13, 13,       15
                                                            ⏟     , 15, 15, 16, 16, 18
                                                        𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Dessa forma, percebemos que o valor da média é menor que a mediana. Portanto, a alternativa está correta.

        Receita Federal (Analista Tributário) Estatística                                              23
        www.estrategiaconcursos.com.br                                                                 47

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Letra C - o valor da mediana é duas unidades maior do que o da média. Já verificamos que a mediana é igual
a 15 e a média é aproximadamente igual a 13,63. Portanto, a alternativa C está errada.
Letra D - se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar. Vamos calcular:
                                   9, 9, 11, 13, 13,       15,
                                                           ⏟ 15          , 15, 16, 16, 18, 20
                                                       𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠

Nesse caso, a mediana será determinada pela média aritmética dos dois termos centrais:
                                                              15 + 15
                                                   𝑀𝑑 =               = 15
                                                                 2
calculando a nova média, temos:
                                             150 + 20
                                                 𝑥̅ =  ≅ 14,16
                                                 12
Logo, a diferença entre a média e a mediana deve ser menor. Portanto, a alternativa está errada.
Letra E - se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
permanecerão iguais.
Conforme calculado na alternativa anterior, o valor da média será alterado. Portanto, a alternativa está
errada.
Gabarito: B.


5. (FGV/CBM-AM/2022) A soma de 11 números inteiros estritamente positivos, não necessariamente
distintos, é 2022.
O maior valor que a mediana desses 11 números pode ter é
a) 335.
b) 336.
c) 337.
d) 338.
e) 339.


Comentários:
A mediana é o termo central da amostra. Ela divide o conjunto de dados em duas partes, separando os
valores inferiores à mediana dos valores superiores à mediana. Então, se a mediana é o termo central da
amostra, em um conjunto com 11 termos, ela será o 6º termo do conjunto de dados ordenados.
Então, se a soma desses 11 números é igual a 2022, para encontramos o valor da maior mediana basta
considerarmos que os cinco primeiros números são iguais a 1, menor valor inteiro e positivo inferior à
mediana. Vamos esquematizar para melhor compreensão:

          Receita Federal (Analista Tributário) Estatística                                             24
          www.estrategiaconcursos.com.br                                                                47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                       1+1+1+1+1+
                       ⏟                           𝑀
                                                   ⏟𝑑        +⏟
                                                              𝑥7 + 𝑥8 + 𝑥9 + 𝑥10 + 𝑥11 = 2022
                        𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑖𝑛𝑓𝑒𝑟𝑖𝑜𝑟𝑒𝑠      𝑚𝑒𝑑𝑖𝑎𝑛𝑎            𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑠𝑢𝑝𝑒𝑟𝑖𝑜𝑟𝑒𝑠

Como não conhecemos o valor da mediana, e como também não sabemos quais são os valores dos demais
números, vamos considerar que todos possuem o mesmo valor, igual a 𝑥. Agora, basta resolvermos a
equação:
                                          5 + 𝑥 + 𝑥 + 𝑥 + 𝑥 + 𝑥 + 𝑥 = 2022
                                                     6𝑥 = 2022 − 5
                                                               2017
                                                         𝑥=
                                                                 6
Vejam que essa divisão não é exata, portanto, restará uma unidade. Logo, temos que:
                                                          𝑥 = 336
Agora, podemos atribuir a sobra da divisão ao último termo da amostra, assim:
                   1 + 1 + 1 + 1 + 1 + 336
                   ⏟                   ⏟ +⏟336 + 336 + 336 + 336 + 337 = 2022
                     𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑖𝑛𝑓𝑒𝑟𝑖𝑜𝑟𝑒𝑠      𝑚𝑒𝑑𝑖𝑎𝑛𝑎               𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑠𝑢𝑝𝑒𝑟𝑖𝑜𝑟𝑒𝑠

Logo, o maior valor da mediana é 336.
Gabarito: B.


6. (FGV/SEFAZ ES/2022) As notas de nove candidatos num certo exame foram:
                                           54, 48, 46, 51, 38, 50, 44, 58, 32.
A mediana dessas notas é igual a
a) 44.
b) 46.
c) 48.
d) 50.
e) 51.


Comentários:
A mediana divide uma série ordenada em duas partes iguais. Como temos 9 termos na amostra, a mediana
é determinada pelo termo central, isto é, o quinto termo da amostra. É importante observar que, para
encontrarmos a mediana, os dados devem estar ordenados. Assim, temos:
                                      32, 38, 44, 46,         𝟒𝟖
                                                              ⏟         , 50, 51, 54, 58
                                                        𝒕𝒆𝒓𝒎𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍

Portanto, a mediana é 48.
Gabarito: C.


         Receita Federal (Analista Tributário) Estatística                                       25
         www.estrategiaconcursos.com.br                                                          47

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

7. (FGV/TCE-TO/2022) A seguinte amostra de idades foi observada: 30, 24, 26, 25, 24, 28, 26, 29, 30.
A mediana dessas idades é igual a:
a) 25,5;
b) 26,0;
c) 26,5;
d) 28,0;
e) 28,5.


Comentários:                                                   ==219a34==

Para determinarmos a mediana de um conjunto, precisamos inicialmente ordenar os dados. Como o
conjunto possui um número ímpar de elementos, a mediana coincidirá com o termo central da amostra. No
caso apresentado, temos um total de 9 elementos. Portanto, a mediana coincidirá com o quinto elemento
da série ordenada. Ordenando os dados, temos:
                                         24 24 25 26                        26
                                                                            ⏟        28 29 30 30
                                                         𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

Assim, a mediana da amostra é o elemento de valor igual a 26.
Gabarito: B.


8. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                          Valores de X                      0    3     10   12

                                          Probabilidades 0,2 0,1 0,3 0,4

A média e a mediana de X são respectivamente iguais a
a) 8,1 e 10.
b) 8,1 e 3,0.
c) 8,5 e 6,5.
d) 8,1 e 6,5.
e) 8,5 e 10.


Comentários:

           Receita Federal (Analista Tributário) Estatística                                           26
           www.estrategiaconcursos.com.br                                                              47

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Para calcularmos a média, precisamos multiplicar todos os valores de X por suas respectivas probabilidades.
Assim, teremos:
                                       (0 × 0,2) + (3 × 0,1) + (10 × 0,3) + (12 × 0,4)
                                𝑋̅ =
                                                    0,2 + 0,1 + 0,3 + 0,4
                                                               8,1
                                                        𝑋̅ =       = 8,1
                                                                1
Agora, para determinarmos a mediana de uma distribuição, precisamos verificar em que momento as
frequências acumuladas atingem 50% da amostra. Vejam que a soma das probabilidades dos dois primeiros
valores de X já alcança 30%. Somando a probabilidade referente ao próximo valor, X=10, atingimos o valor
de 60%, ultrapassando o limite em questão. Então, podemos considerar que a mediana de X é igual a 10.
Gabarito: A.


9. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de pesos aproximados, em kg, de homens
adultos:
67, 55, 102, 77, 88, 89, 100, 78, 69, 65, 65, 101, 98, 65, 68
A mediana desses pesos é
a) 76.
b) 77.
c) 77,5.
d) 78.
e) 78,5.


Comentários:
A mediana é o termo central de uma amostra ou distribuição de valores. Ela divide o conjunto em duas partes
contendo as mesmas quantidades de valores. Para encontrarmos a mediana, precisamos que os dados
estejam ordenados, como fizemos a seguir:
                           55, 65, 65, 65, 67, 68, 69,         77
                                                               ⏟    , 78, 88, 89, 98, 100, 101, 102
                                                         𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Veja que temos um conjunto com um número ímpar de elementos, portanto, a mediana será o termo central
da amostra, cuja posição pode ser encontrada por meio da seguinte fórmula:
                                                    𝑛 + 1 15 + 1
                                                         =       =8
                                                      2     2
Logo, a mediana corresponde ao 8º termo da amostra, representado pelo peso igual a 77.
Gabarito: B.

           Receita Federal (Analista Tributário) Estatística                                            27
           www.estrategiaconcursos.com.br                                                               47

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

10. (FGV/TRT-PB/2022) Avalie se as seguintes afirmativas acerca da mediana de uma variável aleatória X
estão corretas:
I. Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.
II. A mediana é uma medida mais resistente a valores extremos do que a média.
III. Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.


Comentários:
Vamos analisar cada item:
Item I: Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.
Correto. Como sabemos, a mediana divide um conjunto em duas partes com o mesmo número de elementos.
Assim, como temos a mesma quantidade de elementos antes e depois da mediana, a probabilidade de X ser
maior que a mediana é de, no mínimo, 50%.


Item II: A mediana é uma medida mais resistente a valores extremos do que a média.
Correto. A mediana é representada pelo elemento que ocupa a posição central em um conjunto ordenado
de valores. Ela não se preocupa com os valores propriamente ditos, mas somente com a posição, por isso
não sofre influência de valores extremos. A média, por outro lado, sofre muita influência de valores
extremos, pois o cálculo da média requer que eles sejam considerados.


Item III: Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Incorreto. A assimetria é negativa quando a curva de frequência tem uma “cauda” mais longa à esquerda do
ponto que corresponde à frequência máxima:

            Receita Federal (Analista Tributário) Estatística                                           28
            www.estrategiaconcursos.com.br                                                              47

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                          ̅ < 𝑴𝒅 .
Nesse caso, o valor da média será menor que o da mediana, 𝒙
Gabarito: B.


11. (FGV/IMBEL/2021) Considere a lista de cinco números reais: 2, 9, 4, 10, x.
Sabe-se que a mediana desses números é igual à média deles.
A soma dos possíveis valores de x é:
a) 22,5.
b) 21,25.
c) 20,75.
d) 19,5.
e) 17,5.


Comentários:
A mediana é o termo central da amostra. Ela divide os dados ordenados em duas partes iguais, de um lado
teremos valores inferiores à mediana e de outro lado teremos valores superiores à mediana.
No caso apresentado, como são 5 termos, a mediana ocupará a terceira posição do conjunto de dados.
Ocorre que não sabemos o valor de 𝑥, portanto, temos 5 possibilidades para o termo que representa a
mediana. Ordenando os dados, temos:
                                                     2, 4,     ⏟
                                                               9       , 10, 𝑥
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 4,     ⏟
                                                               9       , 𝑥, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 4,     ⏟
                                                               𝑥       , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 𝑥,     ⏟
                                                               4       , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     𝑥, 2,     ⏟
                                                               4       , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Dos possíveis arranjos, observamos apenas 3 opções para a mediana: 4, 9 ou x.

           Receita Federal (Analista Tributário) Estatística                                        29
           www.estrategiaconcursos.com.br                                                           47

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

A questão também nos informa que o valor da mediana é igual ao valor da média. Assim, calculando a média
para os dados apresentados, temos:
                                                 2 + 4 + 9 + 10 + 𝑥 25 + 𝑥
                                          𝑋̅ =                     =
                                                          5           5
Agora, considerando as possibilidades para a mediana, temos:
a) para uma mediana igual a 9:
                                                                25 + 𝑥
                                                        9=
                                                                  5
                                                       25 + 𝑥 = 45
                                                       𝑥 = 45 − 25
                                                              𝑥 = 20
b) para uma mediana igual a x:
                                                                25 + 𝑥
                                                        𝑥=
                                                                  5
                                                       5𝑥 = 25 + 𝑥
                                                          4𝑥 = 25
                                                          𝑥 = 6,25
c) para uma mediana igual a 4:
                                                                25 + 𝑥
                                                        4=
                                                                  5
                                                       25 + 𝑥 = 20
                                                       𝑥 = 20 − 25
                                                              𝑥 = −5
Logo, temos os possíveis valores de 𝑥:
                                                       20; 6,25; −5
Somando os valores, temos:
                                              20 + 6,25 + (−5) = 21,25
Gabarito: B.


12. (FGV/FunSaúde CE/2021) A mediana dos sete números 9, 2, 5, 3, 13, x, 5 é x.
A média desses números é
a) 5.
b) 5,5.


          Receita Federal (Analista Tributário) Estatística                                          30
          www.estrategiaconcursos.com.br                                                             47

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 02

c) 6.
d) 6,5.
e) 7.


Comentários:
A mediana é o termo central da amostra. Ela divide o conjunto de dados em duas partes, separando os
valores inferiores à mediana dos valores superiores à mediana. Se a mediana é o termo central da amostra,
em um conjunto com 7 termos, a mediana será representada pelo 4º termo do conjunto de dados ordenados.
Ordenando os termos, temos:
                                                 2, 3, 5,     ⏟
                                                              𝑥       , 5, 9, 13
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

A mediana está entre dois números iguais, no caso, 5. Logo, a mediana também deve assumir o valor 5 no
conjunto. Então, teremos os seguintes dados:
                                                 2, 3, 5,     ⏟
                                                              5       , 5, 9, 13
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Agora, basta calcularmos a média:
                                            2 + 3 + 5 + 5 + 5 + 9 + 13 42
                                     𝑥̅ =                             =   =6
                                                        7               7
Logo, a média é igual a 6.
Gabarito: C.

          Receita Federal (Analista Tributário) Estatística                                           31
          www.estrategiaconcursos.com.br                                                              47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                           QUESTÕES COMENTADAS – FGV

Quartil, Decil e Percentil

1. (FGV/TJ-AL/2018) Para avaliar a produtividade de um dado conjunto de varas da justiça, é extraída uma
amostra do número de audiências efetivamente realizadas durante um determinado período.
Os dados foram tratados, obtendo-se as seguintes estatísticas:
Me (A.) = 22, 𝑸𝟏 =19 e 𝑸𝟑 =27
Essas estatísticas representam os Quartis da distribuição.
Adotando a técnica de Box-Plot para fins da identificação de outliers, sobre os valores A1 = 6, A2 = 11 e
A3 = 40 tem-se que:                                          ==219a34==

a) Todos são outliers;
b) Os dois primeiros são outliers;
c) Apenas A3 é um outlier;
d) A1 e A3 são outliers;
e) Nenhum deles é outlier.


Comentários:
Vamos, inicialmente, calcular a diferença interquartílica. Assim:
                                             𝑑 = 𝑄3 − 𝑄1 = 27 − 19 = 8
Agora, calculamos o limite superior:
                                                  𝑙𝑠𝑢𝑝 = 𝑄3 + 1,5 × 𝑑
                                               𝑙𝑠𝑢𝑝 = 27 + 1,5 × 8 = 39
O limite inferior fica:
                                                  𝑙𝑖𝑛𝑓 = 𝑄1 − 1,5 × 𝑑
                                                𝑙𝑖𝑛𝑓 = 19 − 1,5 × 8 = 7
Desta forma, temos que todos os valores que estiverem acima de 39 e abaixo de 7 serão outliers (dados
discrepantes), a exemplo dos valores A1 e A3. E todos os valores que estiverem entre 7 e 39 serão
considerados normais, a exemplo de A2.
Gabarito: D.


2. (FGV/IBGE/2016) Adotando-se para as estatísticas de posição de uma dada distribuição de frequências
as convenções, 𝐐𝐤 = 𝐐𝐮𝐚𝐫𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐃𝐤 = 𝐃𝐞𝐜𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐐𝐭 𝐤 = 𝐐𝐮𝐢𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤 e
𝐏𝐤 = 𝐏𝐞𝐧𝐜𝐞𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, é correto afirmar que:
a) 𝑄3 ≥ 𝐷6 ≥ 𝑄𝑡4 = 𝑃80 ;

         Receita Federal (Analista Tributário) Estatística                                            32
         www.estrategiaconcursos.com.br                                                               47

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

b) 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
c) 𝐷9 ≥ 𝑃85 ≥ 𝑄3 = 𝑄𝑡3;
d) 𝑄1 ≥ 𝑄𝑡2 = 𝑃20 ≤ 𝐷3 ;
e) 𝐷6 ≤ 𝑄3 = 𝑃75 ≤ 𝑄𝑡3 .


Comentários:
Para responder essa questão, devíamos saber que:
    a) cada quartil delimita 25% das observações de uma distribuição. Logo:
            • 𝑄1 = 1 × 25% = 25% ⟹ até o primeiro quartil temos 25% das observações;
            • 𝑄3 = 3 × 25% = 75% ⟹ até o terceiro quartil temos 75% das observações;

    b) cada quintil delimita 20% das observações de uma distribuição. Logo:
            • 𝑄𝑡2 = 2 × 20% = 40% ⟹ até o segundo quintil temos 40% das observações;
            • 𝑄𝑡3 = 3 × 20% = 60% ⟹ até o terceiro quintil temos 60% das observações;
            • 𝑄𝑡4 = 4 × 20% = 80% ⟹ até o quarto quintil temos 80% das observações;

    c) cada decil delimita 25% das observações de uma distribuição. Logo:
            • 𝐷3 = 3 × 10% = 30% ⟹ até o terceiro decil temos 30% das observações;
            • 𝐷6 = 6 × 10% = 60% ⟹ até o sexto decil temos 60% das observações;
            • 𝐷9 = 9 × 10% = 90% ⟹ até o nono decil temos 90% das observações;

    d) cada percentil delimita 1% das observações de uma distribuição. Logo:
           • 𝑃20 = 20 × 1% = 20% ⟹ até o vigésimo percentil temos 20% das observações;
           • 𝑃55 = 55 × 1% = 55% ⟹ até o quinquagésimo quinto percentil temos 55% das
       observações;
           • 𝑃75 = 75 × 1% = 75% ⟹ até o septuagésimo quinto percentil temos 75% das
       observações;
           • 𝑃80 = 80 × 1% = 80% ⟹ até o octogésimo percentil temos 80% das observações;
           • 𝑃85 = 85 × 1% = 85% ⟹ até o octogésimo quinto percentil temos 85% das observações;
Agora, vamos avaliar cada uma das alternativas:
   •   Letra A: Errada. Se 𝑄𝑡4 é maior que 80% das observações e 𝐷6 é superior a 60% das observações,
       então obrigatoriamente 𝑄𝑡4 ≥ 𝐷6 ;
   •   Letra B: Correta. Se 𝑄𝑡2 delimita 40% das observações; 𝑃55 delimita 55%; 𝐷6 delimita 60% e
       𝑄3 delimita 75% das observações, então 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
   •   Letra C: Errada. Se 𝑄3 é maior que 75% das observações; e 𝑄𝑡3 é maior que 60% das observações,
       então, eles delimitam porções diferentes do conjunto de dados. Logo, não podemos garantir que
       sejam iguais entre si;
   •   Letra D: Errada. Se 𝑄1 delimita 25% das observações e 𝑄𝑡2 delimita 40% das observações, então
       𝑄𝑡2 ≥ 𝑄1 ;
   •   Letra E: Errada. Se 𝑃75 é maior que 75% das observações e 𝑄𝑡3 é maior que 60%, então, 𝑃75 ≥ 𝑄𝑡3 .
Gabarito: B.


        Receita Federal (Analista Tributário) Estatística                                            33
        www.estrategiaconcursos.com.br                                                               47

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                           QUESTÕES COMENTADAS – FGV

Box Plot

1. (FGV/Câmara dos Deputados/2023) Os dados a seguir são uma amostra de 40 idades:

               7         18        20        20         20      21       21   24    25       26

              26         28        28        29         30      32       34   34    36       36

              36         36        37        37         38      38       38   39    40       40

              40         41        41        43         48      48       49   50    50       59

Para a detecção de observações atípicas (outliers), será usado o critério que considera atípica a observação
que não está no intervalo (Q1 – 1,5D; Q3 + 1,5D), em que D é a distância interquartil, Q1 é o 1º quartil e
Q3, o terceiro.
Assim, a quantidade de outliers com base nesse critério, para esse conjunto de dados, é igual a
a) 0.
b) 1.
c) 2.
d) 3.
e) 4.


Comentários:
A questão nos forneceu um conjunto ordenado com 40 idades e nos pediu a quantidade outliers utilizando o
critério da distância interquartílica. Portanto, vamos ter que encontrar os valores que representam 𝑄1 e 𝑄3 .
Podemos aproveitar que a própria questão já dividiu o conjunto em 4 partes iguais, cada uma com 10 valores.
Sendo assim, podemos facilmente verificar que 𝑄1 = 26, 𝑄2 = 36 e 𝑄3 = 40, vez que esses valores
estabelecem os limites de cada uma das quatro partes. Vejamos:

               7         18        20        20         20      21       21   24    25       26

              26         28        28        29         30      32       34   34    36       36

              36         36        37        37         38      38       38   39    40       40

              40         41        41        43         48      48       49   50    50       59

Portanto, a distância interquartílica é:


         Receita Federal (Analista Tributário) Estatística                                                34
         www.estrategiaconcursos.com.br                                                                   47

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                          𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 40 − 26 = 14
Agora, vamos calcular os limites para considerarmos os valores como atípicos. Tudo que estiver abaixo de
𝑄1 − 1,5 × 𝐷𝐼𝑄 e acima de 𝑄3 + 1,5 × 𝐷𝐼𝑄 deve ser considerado outlier:
                                 𝑄1 − 1,5 × 𝐷𝐼𝑄 = 26 − 1,5 × 14 = 26 − 21 = 5
                                𝑄3 + 1,5 × 𝐷𝐼𝑄 = 40 + 1,5 × 14 = 40 + 21 = 61
Logo, nenhum valor do conjunto pode ser considerado outlier.
Gabarito: A.


2. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:
                                                             ==219a34==

A maior mediana das notas foi obtida pela turma
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.


Comentários:
O diagrama de box-plot é uma ferramenta gráfica muito utilizada na análise exploratória de dados. O box-
plot é formado por uma caixa retangular, localizada no meio da haste. A extremidade esquerda ou inferior
da caixa indica o primeiro quartil. A extremidade direita ou superior indica o terceiro quartil. A linha no
interior da caixa indica o segundo quartil ou a mediana. O segundo quartil pode estar entre o primeiro e o
terceiro quartis, ou pode coincidir com um, ou outro, ou ambos.

         Receita Federal (Analista Tributário) Estatística                                              35
         www.estrategiaconcursos.com.br                                                                 47

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Analisando os diagramas apresentados na questão, podemos verificar que a maior mediana foi obtida pela
turma número 4, com valor superior a 5:

Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                                          36
        www.estrategiaconcursos.com.br                                                             47

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                   LISTA DE QUESTÕES – FGV

Mediana

1. (FGV/TJ-AP/2024) Segundo o ditado, “se alguém está com a cabeça no gelo e os pés no forno, não se
pode dizer que está bem”. Para que a conclusão seja que a pessoa está bem, deve-se aferir a temperatura
da pessoa na cabeça (gelo), nos pés (forno) e também nas axilas (fora do gelo e do forno), pelo seguinte
estimador:
a) média aritmética;
b) média geométrica;
c) média harmônica;
d) mediana;
e) moda.


2. (FGV/RFB/2023) Uma pequena amostra de 11 salários (medidos em quantidades de salários mínimos)
de trabalhadores de terceiro setor mostrou os seguintes resultados:
                                  2,0 2,3 2,7 3,4 3,9 2,8 2,3 1,8 1,5 3,3 1,5
A diferença, em quantidade de salários mínimos, entre os valores da média e da mediana desses dados é
igual a
a) 0,0.
b) 0,1.
c) 0,2.
d) 0,3.
e) 0,4.


3. (FGV/SEF-MG/2023) Considere a lista de 200 números inteiros a seguir:
                                           𝟏, 𝟐, 𝟑, ⋯ , 𝟏𝟎𝟎, 𝟏𝟐 , 𝟐𝟐 , 𝟑𝟐 , ⋯ , 𝟏𝟎𝟎𝟐 .
A mediana dessa lista de números é
a) 50,5.
b) 72,5.
c) 80,5.
d) 91,5.


           Receita Federal (Analista Tributário) Estatística                                         37
           www.estrategiaconcursos.com.br                                                            47

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

e) 100.


4. (FGV/TCE ES/2023) A seguinte amostra de acidentes de trânsito em um mês foi observada:
                                         9, 15, 15, 11, 13, 16, 15, 13, 16, 18, 9.
Nesse caso, é correto afirmar, a respeito das principais medidas de tendência central desse conjunto, que:
a) a média é igual a 15;
b) o valor da média é menor do que o da mediana;
c) o valor da mediana é duas unidades maior do que o da média;
d) se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar;
e) se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
                                                              ==219a34==

permanecerão iguais.


5. (FGV/CBM-AM/2022) A soma de 11 números inteiros estritamente positivos, não necessariamente
distintos, é 2022.
O maior valor que a mediana desses 11 números pode ter é
a) 335.
b) 336.
c) 337.
d) 338.
e) 339.


6. (FGV/SEFAZ ES/2022) As notas de nove candidatos num certo exame foram:
                                            54, 48, 46, 51, 38, 50, 44, 58, 32.
A mediana dessas notas é igual a
a) 44.
b) 46.
c) 48.
d) 50.
e) 51.


7. (FGV/TCE-TO/2022) A seguinte amostra de idades foi observada: 30, 24, 26, 25, 24, 28, 26, 29, 30.

          Receita Federal (Analista Tributário) Estatística                                            38
          www.estrategiaconcursos.com.br                                                               47

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A mediana dessas idades é igual a:
a) 25,5;
b) 26,0;
c) 26,5;
d) 28,0;
e) 28,5.


8. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                          Valores de X         0   3    10    12

                                          Probabilidades 0,2 0,1 0,3 0,4

A média e a mediana de X são respectivamente iguais a
a) 8,1 e 10.
b) 8,1 e 3,0.
c) 8,5 e 6,5.
d) 8,1 e 6,5.
e) 8,5 e 10.


9. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de pesos aproximados, em kg, de homens
adultos:
67, 55, 102, 77, 88, 89, 100, 78, 69, 65, 65, 101, 98, 65, 68
A mediana desses pesos é
a) 76.
b) 77.
c) 77,5.
d) 78.
e) 78,5.


10. (FGV/TRT-PB/2022) Avalie se as seguintes afirmativas acerca da mediana de uma variável aleatória X
estão corretas:
I. Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.


           Receita Federal (Analista Tributário) Estatística                                       39
           www.estrategiaconcursos.com.br                                                          47

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

II. A mediana é uma medida mais resistente a valores extremos do que a média.
III. Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.


11. (FGV/IMBEL/2021) Considere a lista de cinco números reais: 2, 9, 4, 10, x.
Sabe-se que a mediana desses números é igual à média deles.
A soma dos possíveis valores de x é:
a) 22,5.
b) 21,25.
c) 20,75.
d) 19,5.
e) 17,5.


12. (FGV/FunSaúde CE/2021) A mediana dos sete números 9, 2, 5, 3, 13, x, 5 é x.
A média desses números é
a) 5.
b) 5,5.
c) 6.
d) 6,5.
e) 7.

            Receita Federal (Analista Tributário) Estatística                                      40
            www.estrategiaconcursos.com.br                                                         47

                                          


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Mediana

  1.   LETRA D                                5.   LETRA B                9. LETRA B
  2.   LETRA C                                6.   LETRA C                10. LETRA B
  3.   LETRA D                                7.   LETRA B                11. LETRA B
  4.   LETRA B                                8.   LETRA A                12. LETRA C

       Receita Federal (Analista Tributário) Estatística                                41
       www.estrategiaconcursos.com.br                                                   47

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                LISTA DE QUESTÕES – FGV

Quartil, Decil e Percentil

1. (FGV/TJ-AL/2018) Para avaliar a produtividade de um dado conjunto de varas da justiça, é extraída uma
amostra do número de audiências efetivamente realizadas durante um determinado período.
Os dados foram tratados, obtendo-se as seguintes estatísticas:
Me (A.) = 22, 𝑸𝟏 =19 e 𝑸𝟑 =27
Essas estatísticas representam os Quartis da distribuição.
Adotando a técnica de Box-Plot para fins da identificação de outliers, sobre os valores A1 = 6, A2 = 11 e
A3 = 40 tem-se que:                                         ==219a34==

a) Todos são outliers;
b) Os dois primeiros são outliers;
c) Apenas A3 é um outlier;
d) A1 e A3 são outliers;
e) Nenhum deles é outlier.


2. (FGV/IBGE/2016) Adotando-se para as estatísticas de posição de uma dada distribuição de frequências
as convenções, 𝐐𝐤 = 𝐐𝐮𝐚𝐫𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐃𝐤 = 𝐃𝐞𝐜𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐐𝐭 𝐤 = 𝐐𝐮𝐢𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤 e
𝐏𝐤 = 𝐏𝐞𝐧𝐜𝐞𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, é correto afirmar que:
a) 𝑄3 ≥ 𝐷6 ≥ 𝑄𝑡4 = 𝑃80 ;
b) 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
c) 𝐷9 ≥ 𝑃85 ≥ 𝑄3 = 𝑄𝑡3;
d) 𝑄1 ≥ 𝑄𝑡2 = 𝑃20 ≤ 𝐷3 ;
e) 𝐷6 ≤ 𝑄3 = 𝑃75 ≤ 𝑄𝑡3 .

        Receita Federal (Analista Tributário) Estatística                                             42
        www.estrategiaconcursos.com.br                                                                47

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Quartil, Decil e Percentil

  1. LETRA D                                  2. LETRA B

       Receita Federal (Analista Tributário) Estatística                  43
       www.estrategiaconcursos.com.br                                     47

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                 LISTA DE QUESTÕES – FGV

Box Plot

1. (FGV/Câmara dos Deputados/2023) Os dados a seguir são uma amostra de 40 idades:

               7         18        20        20         20      21       21   24   25       26

              26         28        28        29         30      32       34   34   36       36

              36         36        37        37         38      38       38   39   40       40

              40         41        41        43         48      48       49   50   50       59

Para a detecção de observações atípicas (outliers), será usado o critério que considera atípica a observação
que não está no intervalo (Q1 – 1,5D; Q3 + 1,5D), em que D é a distância interquartil, Q1 é o 1º quartil e
Q3, o terceiro.
Assim, a quantidade de outliers com base nesse critério, para esse conjunto de dados, é igual a
a) 0.
b) 1.
c) 2.
d) 3.
e) 4.


2. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:

A maior mediana das notas foi obtida pela turma


         Receita Federal (Analista Tributário) Estatística                                               44
         www.estrategiaconcursos.com.br                                                                  47

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 02

a) 1.
b) 2.
c) 3.
d) 4.
e) 5.

                                                             ==219a34==

         Receita Federal (Analista Tributário) Estatística                  45
         www.estrategiaconcursos.com.br                                     47

                                       


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Box Plot

  1. LETRA A                                  2. LETRA D

       Receita Federal (Analista Tributário) Estatística                  46
       www.estrategiaconcursos.com.br                                     47

                                     


---

---
