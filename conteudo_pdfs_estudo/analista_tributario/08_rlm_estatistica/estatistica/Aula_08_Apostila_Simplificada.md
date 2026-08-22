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
arquivo_origem: Aula 08_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: 08
titulo_aula: Estatística
---

# Estatística

Aula 07
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                            23 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 07

                                                                                     Índice
1) Noções Iniciais sobre Variáveis Aleatórias Discretas.


2) Variável Aleatória Discreta.


3) Medidas de Tendência Central.


4) Função de Distribuição Acumulada.


5) Variância e Desvio Padrão.


6) Covariância e Correlação.


7) Variância da Soma e da Diferença.


8) Coeficiente de Variação e Variância Relativa.


9) Questões Comentadas - Noções de Variáveis Aleatórias Discretas - FGV


10) Lista de Questões - Noções de Variáveis Aleatórias Discretas - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           83

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                       VARIÁVEIS ALEATÓRIAS DISCRETAS

Conceitos Iniciais

Uma variável aleatória (v.a.) é uma função que associa um número real a cada elemento do Espaço
Amostral. Com ela, temos uma caracterização numérica do resultado de um experimento ou fenômeno
aleatório.

Por exemplo, criamos uma variável aleatória quando utilizamos o número 0 (zero) para representar a face
CARA e o número 1 para representar a face COROA. Outro exemplo de variável aleatória é atribuir o número
indicado na face superior do dado {1,2,3,4,5,6} ao resultado do seu lançamento.

Assim como os resultados dos experimentos e fenômenos que representam, os valores das variáveis
aleatórias também são incertos, mas apresentam certo padrão, o que nos permite calcular probabilidades.

Por exemplo, se a variável X representa o lançamento de uma moeda equilibrada, então a probabilidade de
termos X = 0 (CARA) é:

                                             𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 (𝐶𝐴𝑅𝐴)     1
                           𝑃(𝑋 = 0) =                                       =
                                          𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 (𝐶𝐴𝑅𝐴, 𝐶𝑂𝑅𝑂𝐴) 2

Se denotarmos a variável que representa o resultado do lançamento de um dado equilibrado por Y, então a
probabilidade de termos Y = 1 é:

                                                   𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 1
                                    𝑃(𝑌 = 1) =                           =
                                                    𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   6

Nesses dois exemplos, as variáveis aleatórias são discretas, pois a quantidade de valores que elas podem
assumir é enumerável (isto é, contável). No caso da moeda, há 2 possíveis resultados; e para o dado, há 6
possíveis resultados.

Por outro lado, há variáveis aleatórias contínuas, cujos resultados não são enumeráveis. Essas podem
assumir quaisquer valores dentro de um intervalo, finito ou infinito. Por exemplo, suponha que a variável Z
represente a quantidade de água que um brasileiro ingere em um dia. Assim, Z pode assumir qualquer valor
maior ou igual a 0L.

Para variáveis contínuas, não atribuímos probabilidades aos seus possíveis valores. Para o nosso exemplo,
não calculamos a probabilidade de um brasileiro beber exatamente 2L de água em um dia, isto é,
exatamente 2,000000... litros, nem um milésimo de litro a mais nem a menos. Essa probabilidade é sempre
nula.

No entanto, podemos calcular a probabilidade associada a um intervalo, por exemplo, entre 1,95L e 2,05L.

        Receita Federal (Analista Tributário) Estatística                                                3
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        Variáveis discretas também podem ter infinitos valores possíveis, desde que sejam
        enumeráveis.

        Por exemplo, vamos supor que uma variável aleatória represente o número de carros que
        chegam em um pedágio, podendo assumir os valores 1, 2, 3, ... Assim, os possíveis valores
        da variável são infinitos, porém enumeráveis (contáveis).

                                                            ==219a34==

Em resumo, as Variáveis Aleatórias Discretas e Contínuas possuem as seguintes características:

   Variáveis Aleatórias      •   Quantidade de valores possíveis é enumerável (finito ou não)
        Discretas            •   Atribuímos probabilidades a resultados específicos


                             •   Assumem qualquer valor dentro de um intervalo
   Variáveis Aleatórias      •   Os resultados possíveis são infinitos e não enumeráveis
        Contínuas
                             •   Não atribuímos probabilidade a resultados específicos, apenas a intervalos

(CESPE/2005 – Secretaria de Educação/MG) A identificação do tipo de variável é um requisito importante
para a escolha do teste estatístico mais adequado. Acerca das variáveis, julgue o seguinte item.
Os valores das variáveis quantitativas discretas não podem ser contados, mas apenas mensurados.
Comentários:
Os valores das variáveis discretas podem ser contados, enquanto os valores das variáveis contínuas não.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                                     4
        www.estrategiaconcursos.com.br                                                                        83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                          VARIÁVEL ALEATÓRIA DISCRETA
Nesta aula, veremos apenas de variáveis aleatórias discretas, para as quais podemos atribuir probabilidades
a resultados específicos.

Por exemplo, no lançamento de um dado honesto, a probabilidade de qualquer face é igual a 1/6, ou seja:

                                                                                            1
                𝑃(𝑋 = 1) = 𝑃(𝑋 = 2) = 𝑃(𝑋 = 3) = 𝑃(𝑋 = 4) = 𝑃(𝑋 = 5) = 𝑃(𝑋 = 6) =
                                                                                            6

Chamamos essa função que atribui uma probabilidade a um resultado de uma variável aleatória discreta de
função de probabilidade.

Em vez de apresentar resultados fixos, como no exemplo do dado, a função de probabilidade 𝑃(𝑋 = 𝑥)
também pode ser definida como uma função de 𝑥, como no exemplo a seguir.

                                                        2
                                        𝑃(𝑋 = 𝑥) = 3𝒙 para 𝑥 = 1, 2, 3, 4, ...

                                            2     2
   •   Para x = 1, temos: 𝑃(𝑿 = 𝟏) = 3𝟏 = 3
                                            2     2
   •   Para x = 2, temos: 𝑃(𝑿 = 𝟐) = 3𝟐 = 9
                                            2     2
   •   Para x = 3, temos: 𝑃(𝑿 = 𝟑) = 3𝟑 = 27

   •   ...

         Por se tratar de uma probabilidade, essa função satisfaz às seguintes condições:

         i)      𝑃(𝑋 = 𝑥) ≥ 0, pois não há probabilidade negativa;

         ii)     Somatório das probabilidades de todos os possíveis resultados é igual a 1, pois a
                 probabilidade de todo o Espaço Amostral é P(U) = 1.

No exemplo do dado, vimos que as probabilidades são todas iguais a 1/6, o que atende à primeira condição,
por se tratar de um valor positivo. Para verificar a segunda condição, somamos as probabilidades de todos
os resultados:

               𝑃(𝑈) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) + 𝑃(𝑋 = 4) + 𝑃(𝑋 = 5) + 𝑃(𝑋 = 6)

                                                1 1 1 1 1 1 6
                                     𝑃(𝑈) =      + + + + + = =1
                                                6 6 6 6 6 6 6

        Receita Federal (Analista Tributário) Estatística                                                5
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação ao segundo exemplo, podemos observar que os valores de probabilidade são positivos, o que
atende à primeira condição.

Para verificar a segunda propriedade, devemos observar que se trata de uma Progressão Geométrica infinita,
                 1                    2
com razão 𝑞 = 3 e termo inicial 𝐴1 = 3, cuja soma é dada por:

                                                      2    2
                                                 𝐴1   3
                                           𝑆𝑛 =     =    = 3 =1
                                                1−𝑞 1−1 2
                                                        3 3

Algumas questões fornecem a função de probabilidade com uma constante, que deve ser calculada com
base nessas propriedades.

        Considere a seguinte função de probabilidade, sendo 𝑘 uma constante desconhecida:
                                                                 𝑥
                                          𝑃(𝑋 = 𝑥) = 𝑘 para 𝑥 = 1, 2, 3 e 4

        Ou seja, as probabilidades de X = 1, X = 2, X = 3 e X = 4 são:

                            𝟏                            𝟐                           𝟑                  𝟒
             𝑃(𝑋 = 𝟏) = 𝑘 ,            𝑃(𝑋 = 𝟐) = 𝑘 ,                    𝑃(𝑋 = 𝟑) = 𝑘 ,      𝑃(𝑋 = 𝟒) = 𝑘

        Para descobrir o valor de 𝑘, devemos considerar que o somatório de todas as
        probabilidades é igual a 1:

                                𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) + 𝑃(𝑋 = 4) = 1
                                                     1       2       3    4
                                                       +𝑘+𝑘+𝑘 =1
                                                     𝑘

                                                     1+2+3+4             10
                                                                     = 𝑘 =1
                                                         𝑘


                                                                 𝑘 = 10
                                                 𝑥
        Agora, sabemos que 𝑃(𝑋 = 𝑥) = 10 e podemos conhecer todas as probabilidades:

                            1                            2                               3                  4
            𝑃(𝑋 = 1) = 10 ,            𝑃(𝑋 = 2) = 10 ,                    𝑃(𝑋 = 3) = 10 ,     𝑃(𝑋 = 4) = 10

        Receita Federal (Analista Tributário) Estatística                                                       6
        www.estrategiaconcursos.com.br                                                                          83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(2014 – Fundação João Pinheiro/MG) A fórmula P(x) = 3k/x representa a distribuição de probabilidade de
uma variável aleatória, para x = 1,7,9. Portanto P(1 ≤ x ≤ 7) é igual a
a) 27/237
b) 23/63
c) 1/3
d) 216/237
                                                             ==219a34==

e) 210/23
Comentários:
Sabendo que a x pode assumir 1, 7 ou 9, a soma dessas probabilidades deve ser igual a 1:
                                       𝑃(𝑥 = 1) + 𝑃(𝑥 = 7) + 𝑃(𝑥 = 9) = 1
                                            3𝑘 3𝑘 3𝑘
                                                +    +    =1
                                             1    7    9
                      3𝑘 × 63 + 3𝑘 × 9 + 3𝑘 × 7 3𝑘 × (63 + 9 + 7) 3𝑘 × (79)
                                                =                =          =1
                                 63                       63         63
                                               3𝑘 × 79 = 63
                                                                          63
                                                         3𝑘 =
                                                                          79
Portanto, a probabilidade de x é:
                                                                          3𝑘    63
                                                𝑃(𝑋 = 𝑥) =                   =
                                                                           𝑥   79. 𝑥
Agora, podemos calcular o valor de 𝑃(1 ≤ 𝑋 ≤ 7):
                                      𝑃(1 ≤ 𝑋 ≤ 7) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 7)
                                                            63    63
                                               𝑃(𝑋 = 1) =       =
                                                          79 × 1 79
                                                            63     9
                                               𝑃(𝑋 = 7) =       =
                                                          79 × 7 79
A soma será, portanto:
                                                   63 9        72
                                           𝑃(1 ≤ 𝑋 ≤ 7) =
                                                       +    =
                                                   79 79 79
Multiplicando o numerador e o denominador desse resultado por 3, obtemos a resposta:
                                                                            72 216
                                              𝑃(1 ≤ 𝑥 ≤ 7) =                  =
                                                                            79 237
Gabarito: D


         Receita Federal (Analista Tributário) Estatística                                          7
         www.estrategiaconcursos.com.br                                                            83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O conjunto dos pares (𝑥, 𝑃(𝑋 = 𝑥)), isto é, o valor da variável e sua respectiva probabilidade, é chamado de
distribuição de probabilidade da variável.

         Dizemos que variáveis aleatórias são independentes e identicamente distribuídas (i.i.d. ou
         IID) se forem independentes entre si e tiverem a mesma distribuição de probabilidade, isto
         é, os mesmos valores 𝑥 e as mesmas probabilidades 𝑃(𝑋 = 𝑥).

(CESPE/2015 – Telecomunicações Brasileiras S.A.) Considerando que Y1, Y2, ..., Yn, ... sejam variáveis
aleatórias independentes que satisfazem P(Yj = j) = P(Yj = -j) = 1/2 para j = 1, 2, ..., julgue o item que se segue.
As variáveis aleatórias Y1, Y2, ..., Yn, ... são identicamente distribuídas.
Comentários:
Para Y1, temos:
                                                P(Y1 = 1) = P(Y1 = -1) = ½
Para Y2, temos:
                                                P(Y2 = 2) = P(Y1 = -2) = ½
O que segue indefinidamente. Para um Yn qualquer, temos:
                                                P(Yn = n) = P(Yn = -n) = ½
Ou seja, os valores de probabilidade são os mesmos, mas os valores que a variável assume não são os
mesmos. Portanto, as variáveis não são identicamente distribuídas.
Gabarito: Errado.

         Receita Federal (Analista Tributário) Estatística                                                       8
         www.estrategiaconcursos.com.br                                                                          83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                        MEDIDAS DE TENDÊNCIA CENTRAL
Neste tópico, veremos três medidas de tendência central relevantes para distribuições de probabilidade,
quais sejam a esperança, a moda e a mediana.

Esperança Matemática

A esperança matemática de uma variável corresponde ao seu valor médio, podendo ser chamada também
de expectância, valor esperado ou média.

Ela é calculada multiplicando-se cada valor da variável pela sua respectiva probabilidade, e, em seguida,
somando-se todos os resultados.

                                               𝑬(𝑿) = ∑ 𝒙. 𝑷(𝑿 = 𝒙)

                                                                                 1
Para o lançamento de um dado, em que todas as probabilidades são de 6, temos:

                                      1     1     1     1     1      1
                            𝐸(𝑋) = 1 × + 2 × + 3 × + 4 × + 5 × + 6 ×
                                      6     6     6     6     6      6

                                             1 + 2 + 3 + 4 + 5 + 6 21
                                   𝐸(𝑋) =                         =   = 3,5
                                                       6            6

Podemos efetuar esse mesmo cálculo, a partir da tabela de distribuição de probabilidade, criando uma
coluna com o produto de 𝑥𝑖 e 𝑃(𝑥𝑖 ). Assim, a esperança será à soma de todas as linhas dessa nova coluna.

                                      𝒙𝒊                    𝑷(𝒙𝒊 )         𝒙𝒊 . 𝑷(𝒙𝒊 )

                                       𝟏                     1⁄      1 × 1⁄6 = 1⁄6
                                                               6
                                       𝟐                     1⁄      2 × 1⁄6 = 2⁄6
                                                               6
                                       𝟑                     1⁄
                                                               6     3 × 1⁄6 = 3⁄6

                                       𝟒                     1⁄      4 × 1⁄6 = 4⁄6
                                                               6
                                       𝟓                     1⁄      5 × 1⁄6 = 5⁄6
                                                               6
                                       𝟔                     1⁄
                                                               6     6 × 1⁄6 = 6⁄6
                                  Soma das
                                                              𝟏       𝑬(𝑿) = 𝟑, 𝟓
                                   Colunas

        Receita Federal (Analista Tributário) Estatística                                              9
        www.estrategiaconcursos.com.br                                                                83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(VUNESP/2019 – Prefeitura de Campinas/SP) Sabe-se que as probabilidades de um carro transportar 1, 2,
3, 4 ou 5 pessoas são de 0,05, 0,20, 0,40, 0,25 e 0,10, respectivamente. Se em uma cidade chegaram 400
carros, a estimativa de pessoas que chegaram é de
a) 1400.
b) 1600.
c) 1260.
d) 2000.
e) 1320
Comentários:
A estimativa do número de pessoas transportadas por carro corresponde à esperança dessa distribuição.
Inserindo as informações do enunciado na tabela de distribuição, temos:

Assim, a esperança é a soma da última coluna:
                                  𝐸(𝑋) = 0,05 + 0,40 + 1,20 + 1,00 + 0,50 = 3,15
Logo, são transportadas, em média, 3,15 pessoas por carro. Sabendo que chegam 400 carros, então a
estimativa de pessoas é de:
                                                      400 x 3,15 = 1260
Gabarito: C


(FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte distribuição de
probabilidade:

           Receita Federal (Analista Tributário) Estatística                                       10
           www.estrategiaconcursos.com.br                                                          83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O valor de K e o valor esperado de X são, respectivamente:
a) 0 e 3/4
b) 1/4 e 3/2
c) 1/2 e 3/4
d) 1/2 e 3/2
e) 1/2 e 9/4
Comentários:
Para resolver essa questão, o primeiro passo é calcular o valor de K, considerando que a soma das
probabilidades dos possíveis resultados é igual a 1:
                               𝑃(𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) = 1
                                              1 1
                                           0+ + +𝐾 =1
                                              4 4
                                              1
                                                +𝐾 =1
                                              2
                                                     1 1
                                            𝐾 = 1− =
                                                     2 2
E para calcular a esperança, somamos os produtos dos valores de x com as respectivas probabilidades

                                               𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)
                                      1     1     1 1 1 3 1+2+6 9
                    𝐸(𝑋) = 0 × 0 + 1 × + 2 × + 3 × = + + =     =
                                      4     4     2 4 2 2   4    4
Gabarito: E


(CESPE/2015 – Telecomunicações Brasileiras S.A.) Considerando que Y1, Y2, ..., Yn, ... sejam variáveis
aleatórias independentes que satisfazem P(Yj = j) = P(Yj = -j) = 1/2 para j = 1, 2, ..., julgue o item que se segue.
O valor esperado para a variável aleatória Yj é nulo para todo número natural positivo j
Comentários:
Para ilustrar o cálculo da esperança para Yj, vamos primeiro calcular a esperança para j = 1 e j = 2.
Sabemos que para Y1, temos P(Y1 = 1) = P(Y1 = -1) = ½. Logo, a esperança de Y1 é:
                                           E(Y1) = -1 x ½ + 1 x ½ = -½ + ½ = 0
Para Y2, temos P(Y2 = 2) = P(Y1 = -2) = ½, então a esperança dessa variável é:
                                           E(Y2) = -2 x ½ + 2 x ½ = -1 + 1 = 0
Ou seja, para um Yj qualquer, temos P(Yj = j) = P(Yj = -j) = ½ e sua esperança é dada por:
                                                 E(Yj) = -j x ½ + j x ½ = 0
Logo, a esperança é nula para qualquer j = 1, 2, ...
Gabarito: Certo.

         Receita Federal (Analista Tributário) Estatística                                                       11
         www.estrategiaconcursos.com.br                                                                          83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Propriedades da Esperança

Nesta seção, veremos propriedades da esperança, que valem tanto para variáveis discretas, quanto para
variáveis contínuas. A seguir, consideramos 𝑋 e 𝑌 variáveis aleatórias e 𝑘 uma constante real qualquer.

       i)      𝑬(𝒌. 𝑿) = 𝒌. 𝑬(𝑿)

Quando multiplicamos todos os valores da variável por uma constante qualquer, a esperança é multiplicada
pela mesma constante.

Vamos considerar, como exemplo, um grupo de funcionários com salários distintos, de modo que a média
seja R$ 5.000. Segundo essa propriedade, se os salários de todos os funcionários forem dobrados, então a
média também será dobrada, ou seja, passará para R$ 10.000.

A mesma propriedade vale quando dividimos a variável pela constante, isto é:

                                                      𝑿    𝑬(𝑿)
                                                    𝑬( ) =
                                                      𝒌     𝒌

Por exemplo, se cada salário fosse dividido por 2, então a média também seria dividida por 2, ou seja,
passaria de R$ 5.000 para R$ 2.500.

       ii)     𝑬(𝑿 + 𝒌) = 𝑬(𝑿) + 𝒌

Quando somamos uma constante k a uma variável X, a esperança de X sofre o mesmo acréscimo de k.

Ou seja, se todos os funcionários do nosso exemplo, cuja média salarial era de R$ 5.000, tiverem um aumento
de R$ 2.000, então a média desse grupo passará para R$ 7.000.

A mesma propriedade vale quando subtraímos a variável pela constante, isto é:

                                                𝑬(𝑿 − 𝒌) = 𝑬(𝑿) − 𝒌

Ou seja, se cada funcionário recebesse uma redução de R$ 2.000 do seu salário, então a média também seria
reduzida em R$ 2.000, ou seja, passaria de R$ 5.000 para R$ 3.000.

       iii)    𝑬(𝑿 + 𝒀) = 𝑬(𝑿) + 𝑬(𝒀)

A esperança da soma de duas variáveis é igual à soma das suas esperanças.

Digamos que um grupo de homens receba, em média, um salário de E(X) = R$ 5.000; e que um grupo de
mulheres receba, em média, E(Y) = R$ 4.000. Ao selecionarmos aleatoriamente uma mulher e um homem, o
valor soma dos salários será, em média, igual à soma das médias:

                                   E(X + Y) = E(X) + E(Y) = 5.000 + 4.000 = 9.000


        Receita Federal (Analista Tributário) Estatística                                               12
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A mesma propriedade vale para a subtração de variáveis:

                                           𝑬(𝑿𝟏 − 𝑿𝟐 ) = 𝑬(𝑿𝟏 ) − 𝑬(𝑿𝟐 )

       iv)     𝑬(𝒌) = 𝒌

O valor esperado de uma constante é igual à própria constante.

Se todos os funcionários recebem k = R$ 5.000 reais cada, a média será igual a R$ 5.000.

       v)      Se X e Y são independentes, então 𝑬(𝑿. 𝒀) = 𝑬(𝑿). 𝑬(𝒀)

Se X e Y são variáveis aleatórias independentes, então a esperança do produto de duas variáveis é igual ao
produto das suas esperanças.

Por exemplo, vamos considerar que X representa o lançamento de dado, cuja esperança é 𝐸(𝑋) = 3,5, como
vimos, e que Y representa o lançamento de uma moeda, cuja esperança é 𝐸(𝑌) = 0 × 0,5 + 1 × 0,5 = 0,5.
Assim, sabendo que essas variáveis são independentes, a esperança do produto 𝑋 × 𝑌 é o produto:

                                  𝐸(𝑋 × 𝑌) = 𝐸(𝑋) × 𝐸(𝑌) = 3,5 × 0,5 = 1,75

        i)       𝑬(𝒌𝑿) = 𝒌. 𝑬(𝑿)
        ii)      𝑬(𝑿 ± 𝒌) = 𝑬(𝑿) ± 𝒌
        iii)     𝑬(𝑿 ± 𝒀) = 𝑬(𝑿) ± 𝑬(𝒀)
        iv)      𝑬(𝒌) = 𝒌
        v)       Se X e Y forem independentes, então 𝑬(𝑿 × 𝒀) = 𝑬(𝑿) × 𝑬(𝒀)

(2016 – Instituto Federal de Educação/BA – Adaptada) Sendo X uma variável aleatória, com média , então
a esperança matemática da função Y = a + bX, com a e b ∈ R, é


        Receita Federal (Analista Tributário) Estatística                                              13
        www.estrategiaconcursos.com.br                                                                 83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) E(Y) = a + b
b) E(Y) = a
c) E(Y) = b
d) E(Y) = a + b
e) E(Y) = a2
Comentários:
Pelas propriedades da esperança, temos E(Y) = E(a + bx) = a +b.E(X). Como  = E(X), temos:
                                                      E(Y) = a + b.
Gabarito: D.


(FGV/2017 – IBGE – Adaptada) Para o caso de variáveis aleatórias quaisquer, existem diversas propriedades
que se aplicam diretamente à esperança matemática. Dentre essas propriedades está:
a) E(X.Y) = E(X).E(Y)
b) E(X+a) = a
c) E(X±Y) = E(X) ± E(Y)
d) E(a.X) = E(X), sendo a uma constante qualquer
Comentários:
Em relação à alternativa A, podemos afirmar que E(X.Y) = E(X).E(Y) somente se X e Y forem independentes.
Como o enunciado não menciona que X e Y são independentes, então a alternativa A está incorreta.
Em relação à alternativa B, temos a seguinte propriedade da esperança:
                                                    E(X + a) = E(X) + a
Portanto, a alternativa B está incorreta.
Em relação à alternativa C, temos de fato a seguinte propriedade, para quaisquer variáveis aleatórias X e Y:
                                                  E(X + Y) = E(X) + E(Y)
                                                  E(X – Y) = E(X) – E(Y)
Portanto, a alternativa C está correta. Em relação à alternativa D, sabemos que: E(a.X) = a.E(X). Portanto, a
alternativa D está incorreta.
Resposta: C.

Moda

A moda de uma variável aleatória é o seu valor mais provável, isto é, o elemento com maior probabilidade.

Vamos supor um dado não equilibrado, em que a probabilidade de cada face seja proporcional à face,
conforme indicado a seguir.


         Receita Federal (Analista Tributário) Estatística                                                14
         www.estrategiaconcursos.com.br                                                                   83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                     𝒙        𝒑(𝒙)
                                                     1        1/21
                                                     2        2/21
                                                     3        3/21
                                                     4        4/21
                                                     5        5/21
                                                     6        6/21

Como a probabilidade de X = 6 é maior que as demais, então concluímos que a moda dessa variável é X = 6.

        A moda é um valor da variável e não a sua probabilidade.

A distribuição correspondente a um dado equilibrado não apresenta moda, o que chamamos de distribuição
amodal.

(CESPE/2015 – Agente do Departamento Penitenciário Nacional)

Considerando os dados da tabela mostrada, que apresenta a distribuição populacional da quantidade diária
de incidentes (N) em determinada penitenciária, julgue o item que se segue.
A moda da distribuição de N é igual a 4, pois esse valor representa a maior quantidade diária de incidentes
que pode ser registrada nessa penitenciária.
Comentários:
A moda é o valor com maior frequência relativa, que é igual a 0,5. Essa frequência está associada a N = 2,
então a moda é N = 2 (e não 4).
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                               15
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(CESPE/2018 – Departamento de Polícia Federal)

Tendo em vista que, diariamente, a Polícia Federal apreende uma quantidade X, em kg, de drogas em
determinado aeroporto do Brasil, e considerando os dados hipotéticos da tabela precedente, que apresenta
os valores observados da variável X em uma amostra aleatória de 5 dias de apreensões no citado aeroporto,
julgue o próximo item.
A moda da distribuição dos valores X registrados na amostra foi igual a 22 kg.
Comentários:
A moda de uma amostra é o valor obtido com maior frequência. No caso, foram apreendidos 22kg em 2 dias,
enquanto as demais quantidades foram apreendidas em um único dia somente.
                                                            ==219a34==

Gabarito: Certo

Mediana

A mediana de uma variável é o valor que divide a distribuição em duas partes, de modo que a probabilidade
dos valores menores ou iguais à mediana seja, no mínimo, igual a 50% e a probabilidade dos valores maiores
ou iguais à mediana seja também, no mínimo, igual a 50%.
Vamos considerar o mesmo exemplo dado não equilibrado:

                                                     𝒙                   𝒑(𝒙)
                                                     1                   1/21
                                                     2                   2/21
                                                     3                   3/21
                                                     4                   4/21
                                                     5                   5/21
                                                     6                   6/21


Observamos que a mediana é X = 5, pois a probabilidade associada aos valores menores ou iguais é:
                                               1   2   3   4   5   15
                              𝑃(𝑋 ≤ 5) =         +   +   +   +   =    > 50%
                                              21 21 21 21 21 21
E a probabilidade associada aos valores maiores ou iguais é:
                                                          5   6   11
                                        𝑃(𝑋 ≥ 5) =          +   =    > 50%
                                                         21 21 21

        Receita Federal (Analista Tributário) Estatística                                              16
        www.estrategiaconcursos.com.br                                                                 83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para um dado equilibrado, a mediana está entre X = 3 e X = 4, pois a probabilidade associada aos valores
menores ou iguais a X = 3 é igual a 50%, assim como a probabilidade associada aos maiores ou iguais a X = 4.
Nessa situação, calculamos a média aritmética entre esses valores, por convenção:
                                                            3+4
                                                  𝑀𝑑 =          = 3,5
                                                             2

Propriedades da Mediana

A seguir, veremos as propriedades da mediana, as quais também valem para a moda.

       i)      𝑴𝒅(𝒌. 𝑿) = 𝒌. 𝑴𝒅(𝑿)

Quando uma variável é multiplicada por uma constante, a sua mediana é multiplicada pela mesma
constante.

Se todos os funcionários de uma empresa passam a receber o dobro do que recebiam antes, a mediana será
o dobro da mediana anterior.

A mesma propriedade vale quando dividimos a variável pela constante, isto é:

                                                      𝑿    𝑴𝒅(𝑿)
                                                  𝑴𝒅 ( ) =
                                                      𝒌     𝒌

Ou seja, se cada salário fosse dividido por 2, então a mediana também seria dividida por 2.

       ii)     𝑴𝒅(𝑿 + 𝒌) = 𝑴𝒅(𝑿) + 𝒌

Quando somamos uma constante k a uma variável, a sua mediana é acrescida da mesma constante k.

Se todos os funcionários recebem um aumento de k = 3 mil reais no salário, a mediana também aumentará
k = 3 mil reais.

A mesma propriedade vale quando subtraímos a variável pela constante, isto é:

                                             𝑴𝒐(𝑿 − 𝒌) = 𝑴𝒐(𝑿) − 𝒌

Ou seja, se cada funcionário recebesse uma redução de mil reais do seu salário, então a mediana também
seria reduzida em mil reais.

        Receita Federal (Analista Tributário) Estatística                                                17
        www.estrategiaconcursos.com.br                                                                   83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(CESPE/2020 – ME) Considerando que R representa uma variável quantitativa cuja média, mediana e
                                                                 𝑅
variância são, respectivamente, iguais a 70, 80 e 100, e que 𝑈 = 10 − 7, julgue o próximo item, acerca das
variáveis U e R.
A mediana de U é negativa.
Comentários:
                                                                           𝑅
De acordo com as propriedades da mediana que vimos, a mediana de 𝑈 = 10 − 7 é dada por:

                                                           𝑅
                                               𝑀𝑑(𝑈) = 𝑀𝑑 ( − 7)
                                                           10

                                                           𝑅
                                               𝑀𝑑(𝑈) = 𝑀𝑑 ( ) − 7
                                                           10

                                                            𝑀𝑑(𝑅)
                                                𝑀𝑑(𝑈) =           −7
                                                             10

O enunciado informa que a mediana de R é 𝑀𝑑(𝑅) = 80, logo a mediana de U é:

                                                       80
                                           𝑀𝑑(𝑈) =        −7=8−7=1
                                                       10

Ou seja, a mediana é positiva.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                              18
        www.estrategiaconcursos.com.br                                                                 83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                  FUNÇÃO DE DISTRIBUIÇÃO ACUMULADA
A função de distribuição acumulada (f.d.a ou função de distribuição) de uma variável aleatória apresenta a
probabilidade acumulada de todos os valores menores ou iguais a determinado valor 𝑥.

                                                  𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)

Em outras palavras, a função de distribuição acumulada de 𝑥 equivale à soma de todas as probabilidades
menores ou iguais ao valor 𝑥.

Por exemplo, no lançamento de um dado equilibrado, a probabilidade de cada uma das faces, numeradas de
         1
1 a 6, é 6. Assim, o valor da função de distribuição acumulada para X = 1 equivale à probabilidade de X = 1,
uma vez que não há valor menor:

                                                                           1
                                        𝐹(1) = 𝑃(𝑋 ≤ 1) = 𝑃(𝑋 = 1) =
                                                                           6

Para X = 3, temos a soma das probabilidades de X = 1, X = 2 e X = 3:

                            𝐹(3) = 𝑃(𝑋 ≤ 3) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3)

                                                            1 1 1 3
                                                𝐹(3) =       + + =
                                                            6 6 6 6

Alternativamente, podemos somar a probabilidade no ponto 𝒙 à função de distribuição acumulada no
ponto anterior. Dessa forma, a função de distribuição acumulada para X = 3 é calculada como:

                                                                           1 2 3
                              𝐹(3) = 𝑃(𝑋 ≤ 3) = 𝑷(𝑿 = 𝟑) + 𝑭(𝟐) =           + =
                                                                           6 6 6

Também podemos calcular os valores da f.d.a., incluindo uma nova coluna na tabela da distribuição de
probabilidade. Para preenchê-la, basta somarmos o valor da função acumulada acima (valor de X anterior),
com o valor da probabilidade da linha em questão (valor de X atual), como ilustrado pelas setas para F(3).

        Receita Federal (Analista Tributário) Estatística                                                19
        www.estrategiaconcursos.com.br                                                                   83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                  𝒙                  𝑷(𝑿 = 𝒙)             𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)

                                  𝟏                      1⁄                    1⁄
                                                           6                     6
                                  𝟐                      1⁄                    2⁄
                                                           6                     6
                                  𝟑                      1⁄                    3⁄
                                                           6                     6
                                  𝟒                      1⁄                    4⁄
                                                           6                     6
                                  𝟓                      1⁄                    5⁄
                                                           6                     6
                                  𝟔                      1⁄                    6⁄
                                                           6                     6

De maneira geral, a função acumulada de uma variável aleatória 𝑋 (discreta ou contínua) apresenta as
                                                             ==219a34==

seguintes características:

   i)       𝐹 é não decrescente, porque as probabilidades são sempre somadas.

   ii)      Por ser uma probabilidade, a f.d.a. também assume valores somente entre 0 e 1:

                                                        𝟎 ≤ 𝑭(𝒙) ≤ 𝟏

         A função de distribuição acumulada 𝑭(𝒙) é definida em toda a reta real, ou seja, ela pode
         ser calculada para qualquer valor de 𝒙.

Assim, podemos representar a f.d.a. da variável que representa o lançamento de um dado equilibrado como:

                                                      0, 𝑠𝑒 𝑥 < 1
                                                   1⁄ , 𝑠𝑒 1 ≤ 𝑥 < 2
                                                     6
                                                   1⁄ , 𝑠𝑒 2 ≤ 𝑥 < 3
                                                     3
                                                   1
                                            𝐹(𝑥) = ⁄2 , 𝑠𝑒 3 ≤ 𝑥 < 4
                                                   2⁄ , 𝑠𝑒 4 ≤ 𝑥 < 5
                                                     3
                                                   5⁄ , 𝑠𝑒 5 ≤ 𝑥 < 6
                                                     6
                                                  { 1, 𝑠𝑒 𝑥 ≥ 6 }

         Receita Federal (Analista Tributário) Estatística                                           20
         www.estrategiaconcursos.com.br                                                              83

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 07

Também podemos percorrer o caminho inverso, ou seja, calcular a probabilidade 𝑃(𝑋 = 𝑥) de cada ponto,
pela diferença entre o valor da f.d.a. no ponto e o valor da f.d.a. no ponto anterior.

Em relação ao exemplo do dado equilibrado, a probabilidade da face 𝑋 = 4 pode ser calculada pela diferença
entre os valores da f.d.a. nos pontos X = 4 e X = 3:

                                                                       4 3 1
                                        𝑃(𝑋 = 4) = 𝐹(4) − 𝐹(3) =        − =
                                                                       6 6 6

É possível calcular, ainda, a probabilidade de um intervalo de valores, a partir da f.d.a. Para o nosso exemplo
do dado equilibrado, a probabilidade do intervalo 𝑃(2 < 𝑋 ≤ 5) pode ser calculada pela diferença entre a
f.d.a. para x = 5 e a f.d.a. para x = 2:

                                                                         5 2 3
                                     𝑃(2 < 𝑋 ≤ 5) = 𝐹(5) − 𝐹(2) =         − =
                                                                         6 6 6

          Quando calculamos a diferença entre valores da f.d.a., 𝐹(𝑏) − 𝐹(𝑎), incluímos a
          probabilidade de 𝑋 = 𝑏 e não incluímos a probabilidade de 𝑋 = 𝑎.

(FGV/2018 – ALERO) Uma variável aleatória discreta X tem função de probabilidade dada por:

Se F(x) representa a função de distribuição de X, ∀ x real, então F(-0,8) é igual a
a) 0,3.
b) 0,4.
c) 0,5.
d) 0,6.
e) 1,0.
Comentários:

          Receita Federal (Analista Tributário) Estatística                                                 21
          www.estrategiaconcursos.com.br                                                                    83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A função acumulada F(-0,8) corresponde à probabilidade P(X ≤ -0,8), que nesse caso é igual à soma das
probabilidades P(X = –2) + P(X = –1):
                    𝐹(−0,8) = 𝑃(𝑋 ≤ −0,8) = 𝑃(𝑋 = −2) + 𝑃(𝑋 = −1) = 0,1 + 0,2 = 0,3
Gabarito: A


(FGV/2015 – TJ/RO) A função distribuição de probabilidade acumulada da variável “número de anos de
experiência de magistrados” de um dado tribunal é dada por:

Então, a probabilidade de que um magistrado escolhido ao acaso tenha experiência maior do que cinco anos
e menor ou igual a 15 anos é igual a:
a) 0,39.
b) 0,45.
c) 0,48.
d) 0,57.
e) 0,61.
Comentários:
A probabilidade de P(5 < X ≤ 15) é igual à diferença entre os valores da função acumulada F(15) – F(5), uma
vez que o intervalo não precisa ser adaptado, pois o extremo superior está contemplado e o inferior, não:
               𝑃(5 < 𝑋 ≤ 15) = 𝑃(𝑋 ≤ 15) − 𝑃(𝑋 ≤ 5) = 𝐹(15) − 𝐹(5) = 0,69 − 0,30 = 0,39
Gabarito: A


(FGV/2017 – MPE/BA) Considere a variável aleatória do tipo discreta(X), relativa às fases de andamento de
um processo podendo assumir apenas três valores numéricos 1, 2 ou 3, conforme o mesmo esteja em
conhecimento, liquidação ou execução, respectivamente. Se F(.) é a função distribuição acumulada
correspondente, com F(1,17) = 0,15 e F(2,76) = 0,45.
Então é verdadeiro que
a) P(X > 1,9) = 0,75 e P(X < 2,5) = 0,60.
b) P(X < 2,70) < 0,45 e P(X > 1,5) = 0,85.
c) P(X = 1) = 0,15 e P(X = 2) = 0,30.
d) P(X = 3) = 0,55 e E(X) = 2,70.
e) P(1,44 < X < 3) = 0,85 e Mo(X) = 3.
Comentários:
O enunciado informa que há apenas três valores possíveis: X = 1, X = 2 ou X = 3.
Para conhecermos as probabilidades de cada valor, o enunciado informa os valores que a função de
distribuição acumulada assume:

           Receita Federal (Analista Tributário) Estatística                                            22
           www.estrategiaconcursos.com.br                                                               83

                                         


---

    Equipe Exatas Estratégia Concursos
    Aula 07

•    F(1,17) = P(X ≤ 1,17) = 0,15.
     O único valor menor ou igual a 1,17 é o valor X = 1. Ou seja:
                                               P(X ≤ 1,17) = P(X = 1) = 0,15
     Assim, concluímos que:
                                                       P(X = 1) = 0,15
•    F(2,76) = P(X ≤ 2,76) = 0,45.
     Os valores menores ou iguais a 2,76 são X = 1 e X = 2, ou seja:
                                         P(X ≤ 2,76) = P(X = 1) + P(X = 2) = 0,45
     Sabemos que P(X = 1) = 0,15, logo:
                                           P(X ≤ 2,76) = 0,15 + P(X = 2) = 0,45
                                                       P(X = 2) = 0,30
Isso nos permite concluir que a alternativa C está correta, mas vejamos as demais alternativas.
Em relação à alternativa A, o valor de P(X > 1,79) pode ser calculado como:
                             P(X > 1,79) = 1 – P(X ≤ 1,79) = 1 – P(X = 1) = 1 – 0,15 = 0,85
E o valor de P(X < 2,5) é:
                                  P(X < 2,5) = P(X = 1) + P(X = 2) = 0,15 + 0,30 = 0,45
Logo, a alternativa A está incorreta.
Em relação à alternativa B, o valor de P(X < 2,70) é:
                                 P(X < 2,70) = P(X = 1) + P(X = 2) = 0,15 + 0,30 = 0,45
Ou seja, P(X < 2,70) = 0,45 (não < 0,45).
E o valor de P(X > 1,5) pode ser calculado como:
                              P(X > 1,5) = 1 – P(X ≤ 1,5) = 1 – P(X = 1) = 1 – 0,15 = 0,85
A segunda parte está correta, mas a alternativa B está incorreta, porque a primeira parte é falsa.
Em relação à alternativa D, o valor de P(X = 3) é:
                               P(X = 3) = 1 – P(X = 1) – P(X = 2) = 1 – 0,15 – 0,30 = 0,55
E o valor da esperança é:
                             E(X) = 1x0,15 + 2x0,30 + 3x0,55 = 0,15 + 0,60 + 1,65 = 2,40
A primeira parte está correta, mas a alternativa D está incorreta, porque a segunda parte é falsa.
Em relação à alternativa E, o valor de P(1,44 < X < 3) é:
                                             P(1,44 < X < 3) = P(X = 2) = 0,30
E a moda de X (valor com maior probabilidade) é, de fato, Mo(X) = 3.
A segunda parte está correta, mas a alternativa E está incorreta, porque a primeira parte é falsa.
Gabarito: C

          Receita Federal (Analista Tributário) Estatística                                          23
          www.estrategiaconcursos.com.br                                                             83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Quartis e Mediana

A partir da função de distribuição acumulada, podemos calcular a mediana da distribuição.

Considerando que a probabilidade associada aos valores menores ou iguais à mediana é de, no mínimo, 50%,
então o valor da f.d.a. para a mediana é, no mínimo, igual a 50%.

                                    𝑭(𝒙𝑴𝒆𝒅𝒊𝒂𝒏𝒂 ) = 𝑷(𝑿 ≤ 𝒙𝒎𝒆𝒅𝒊𝒂𝒏𝒂 ) ≥ 𝟓𝟎%

Similarmente, podemos utilizar a f.d.a. para calcular os quartis da distribuição (Q1, Q2 e Q3), que dividem a
distribuição em 4 partes. No mínimo, 25% da distribuição é menor ou igual ao primeiro quartil; no mínimo,
75% da distribuição é menor ou igual ao terceiro quartil; e o segundo quartil é igual à mediana.

                                                    𝐹(𝑥𝑄1 ) ≥ 25%

                                             𝐹(𝑥𝑄2 ) = 𝐹(𝑥𝑀𝑒𝑑 ) ≥ 50%

                                                    𝐹(𝑥𝑄3 ) ≥ 75%

Para ilustrar, replicamos a tabela com os valores da f.d.a. (em percentual) para o lançamento do dado:

                                                𝒙           𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)
                                                𝟏               16,7%
                                                𝟐               33,3%
                                                𝟑                50%
                                                𝟒               66,7%
                                                𝟓               83,3%
                                                𝟔               100%

Podemos observar que não há um valor de X para o qual a f.d.a. é exatamente igual a 25%. Por isso,
escolhemos a probabilidade imediatamente superior, qual seja, de 33,3%, associada a X = 2. Com isso,
concluímos que o primeiro quartil é 𝑥𝑄1 = 2.

Também observamos que não há um valor de X para o qual a f.d.a. seja exatamente igual a 75%. A
probabilidade imediatamente superior é de 83,3%, associada a X = 5. Logo, o terceiro quartil é 𝑥𝑄3 = 5.


        Receita Federal (Analista Tributário) Estatística                                                 24
        www.estrategiaconcursos.com.br                                                                    83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação à mediana, podemos observar que a f.d.a. para X = 3 é exatamente 𝐹(3) = 50%. Isso significa
que 𝑥𝑀𝑒𝑑 = 3 é um possível valor para a mediana.

Entretanto, para todos os valores de 𝑥 que pertencem ao intervalo 3 ≤ 𝑋 < 4, temos 𝑭(𝒙) = 𝟓𝟎%. Por
convenção, consideramos o valor médio desse intervalo como a mediana:

                                                            3+4
                                                  𝑥𝑀 =          = 3,5
                                                             2

(CESPE/2015 – Agente do Departamento Penitenciário Nacional)

Considerando os dados da tabela mostrada, que apresenta a distribuição populacional da quantidade diária
de incidentes (N) em determinada penitenciária, julgue o item que se segue.
O segundo quartil da distribuição das quantidades diárias de incidentes registradas nessa penitenciária é
igual a 2.
Comentários:
A mediana é calculada a partir da função de distribuição acumulada, cuja tabela consta a seguir:

Nesse exemplo, não temos nem um valor de X para o qual o valor de F(x) seja exatamente igual a 0,5. O valor
imediatamente superior a 0,5 é de 0,8, o qual está associado ao valor X = 2. Logo, o segundo quartil (ou
mediana) é 𝑥𝑀𝑒𝑑 = 2.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                               25
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(FCC/2014 – TRT 19ª Região) Seja F(x) a função de distribuição da variável X que representa o número de
trabalhadores por domicílio em uma determinada população. Se:
                                                      0,00              𝑠𝑒 𝑥 < 0
                                                     0,10           𝑠𝑒 0 ≤ 𝑥 < 1
                                                     0,25           𝑠𝑒 1 ≤ 𝑥 < 2
                                             𝐹(𝑋) =
                                                     0,50           𝑠𝑒 2 ≤ 𝑥 < 3
                                                     0,80           𝑠𝑒 3 ≤ 𝑥 < 4
                                                    { 1,00              𝑠𝑒 𝑥 ≥ 4 }
então, o número médio de trabalhadores por domicílio subtraído do número mediano de trabalhadores por
domicílio é igual a
a) 0,15
b) 0,10
c) 0,25
d) -0,15
e) -0,50
Comentários:
A média (ou valor esperado) de trabalhadores por domicílio é dada pela fórmula:

                                                    𝐸(𝑋) = ∑ 𝑥𝑖 . 𝑃(𝑥𝑖 )
                                                                𝑖

Para aplicá-la, precisamos dos valores de probabilidade, a serem calculados a partir dos valores da função
de distribuição acumulada:
                                                 𝑃(𝑋 = 0) = 𝐹(0) = 0,10
                                   𝑃(𝑋 = 1) = 𝐹(1) − 𝐹(0) = 0,25 − 0,10 = 0,15
                                   𝑃(𝑋 = 2) = 𝐹(2) − 𝐹(1) = 0,50 − 0,25 = 0,25
                                   𝑃(𝑋 = 3) = 𝐹(3) − 𝐹(2) = 0,80 − 0,50 = 0,30
                                      𝑃(𝑋 = 4) = 𝐹(4) − 𝐹(3) = 1 − 0,8 = 0,20
Assim, a média é dada por:
           𝐸(𝑋) = 0 × 𝑃(𝑋 = 0) + 1 × 𝑃(𝑋 = 1) + 2 × 𝑃(𝑋 = 2) + 3 × 𝑃(𝑋 = 3) + 4 × 𝑃(𝑋 = 4)
                                 𝐸(𝑋) = 1 × 0,15 + 2 × 0,25 + 3 × 0,30 + 4 × 0,20
                                      𝐸(𝑋) = 0,15 + 0,50 + 0,90 + 0,80 = 2,35
A mediana é calculada a partir da função de distribuição acumulada. Pelo enunciado, podemos observar que
𝐹(𝑥) = 50% para 𝑥 ∈ [2,3). Por convenção, temos:
                                                               2+3
                                                     𝑥𝑀 =          = 2,5
                                                                2
A diferença entre a média e a mediana é:
                                            𝐸(𝑥) − 𝑥𝑀 = 2,35 − 2,5 = −0,15
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                           26
           www.estrategiaconcursos.com.br                                                              83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                             VARIÂNCIA E DESVIO PADRÃO
Nesta seção, veremos medidas de dispersão (ou variabilidade), que representam o quanto os elementos
desviam em relação à média.


Variância

Para calcularmos a variância de um conjunto de dados, somamos os quadrados dos desvios e dividimos pela
quantidade 𝑁 de elementos:

                                              ∑(𝑥 − 𝜇)2               1
                                       𝜎2 =             = ∑(𝑥 − 𝜇)2 ×
                                                 𝑁                    𝑁

Em outras palavras, multiplicamos o quadrado do desvio de cada elemento por 1/𝑁, que pode ser
considerada a proporção, em relação ao total, que cada elemento representa.

Em uma distribuição de probabilidade, multiplicamos o quadrado do desvio pela probabilidade de cada
elemento e, por fim, somamos todos os produtos:

                                           𝑽𝒂𝒓(𝑿) = ∑(𝒙 − 𝝁)𝟐 × 𝒑(𝒙)

Vamos, então, calcular a variância para o nosso exemplo do dado equilibrado, em que os valores da variável
                                                    1
são {1, 2, 3, 4, 5, 6} com probabilidade 𝑃(𝑋 = 𝑥) = 6 para todos os elementos e média 𝜇 = 3,5.

                       1              1              1              1              1               1
  𝑉𝑎𝑟(𝑋) = (1 − 3,5)2 . + (2 − 3,5)2 . + (3 − 3,5)2 . + (4 − 3,5)2 . + (5 − 3,5)2 . + (6 − 3,5)2 .
                       6              6              6              6              6               6
                              1           1           1          1          1           1
            𝑉𝑎𝑟(𝑋) = (−2,5)2 . + (−1,5)2 . + (−0,5)2 . + (0,5)2 . + (1,5)2 . + (2,5)2 .
                              6           6           6          6          6           6

                    1        1        1        1        1        1        1 35
     𝑉𝑎𝑟(𝑋) = 6,25 × + 2,25 × + 0,25 × + 0,25 × + 2,25 × + 6,25 × = 17,5 × =
                    6        6        6        6        6        6        6 12

        A variância também pode ser calculada como:

                                                                           𝟐
                                             𝑽𝒂𝒓(𝑿) = 𝑬(𝑿𝟐 ) − [𝑬(𝑿)]

        Receita Federal (Analista Tributário) Estatística                                              27
        www.estrategiaconcursos.com.br                                                                 83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para calcularmos 𝐸(𝑋 2 ), elevamos os valores de 𝑥 ao quadrado, multiplicamos pela probabilidade de 𝑥 e,
por fim, somamos todos os resultados:

                                               𝑬(𝑿𝟐 ) = ∑ 𝒙𝟐 × 𝒑(𝒙)

        Chamamos 𝐸(𝑋 2 ) de segundo momento (ou momento de segunda ordem) de 𝑋. Também
        podemos chamar a variância de segundo momento central (ou momento central de
        segunda ordem) da variável aleatória.

Vamos calcular a variância para o exemplo do lançamento do dado, utilizando a segunda fórmula. O primeiro
termo dessa fórmula, 𝐸(𝑋 2 ), é calculado como:

                                            𝐸(𝑋 2 ) = ∑ 𝑥 2 × 𝑃(𝑋 = 𝑥)

                                       1        1        1        1        1         1
                       𝐸(𝑋 2 ) = (1)2 . + (2)2 . + (3)2 . + (4)2 . + (5)2 . + (6)2 .
                                       6        6        6        6        6         6
                                        1    1    1     1     1     1 91
                            𝐸(𝑋 2 ) = 1. + 4. + 9. + 16. + 25. + 36. =
                                        6    6    6     6     6     6  6

E o segundo termo é o quadrado da média:

                                                                7 2 49
                                          [𝐸(𝑋)]2           2
                                                     = (3,5) = ( ) =
                                                                2    4

A variância é dada pela diferença:

                                                   91 49 182 147 35
                                      𝑉𝑎𝑟(𝑋) =        −   =    −    =
                                                    6   4   12   12   12

Para essa segunda forma de cálculo, podemos utilizar, como apoio, a tabela de distribuição de probabilidade,
com os valores de 𝑥 e 𝑃(𝑋 = 𝑥), acrescentando duas colunas, uma com o valor da variável ao quadrado, 𝑥 2 ,
e outra com o produto 𝑥 2 . 𝑃(𝑋 = 𝑥).

A soma da última coluna será o resultado de 𝑬(𝑿𝟐 ), ou seja, ainda será necessário subtrair, desse resultado,
o quadrado da média, para obter a variância.


        Receita Federal (Analista Tributário) Estatística                                                 28
        www.estrategiaconcursos.com.br                                                                    83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                    𝒙                  𝑷(𝑿 = 𝒙)                     𝒙𝟐             𝒙𝟐 . 𝑷(𝑿 = 𝒙)

                    𝟏                      1⁄                       1                  1⁄
                                             6                                           6
                    𝟐                      1⁄                       4                  4⁄
                                             6                                           6
                    𝟑                      1⁄                       9                  9⁄
                                             6                                           6
                    𝟒                      1⁄                       16                16⁄
                                             6                                            6
                    𝟓                      1⁄                       25                25⁄
                                             6                                            6
                    𝟔                      1⁄                       36                36⁄
                                             6                                            6
                                           𝑬(𝑿𝟐 ) =                                   𝟗𝟏⁄
                                                                                          𝟔

(VUNESP/2014 – TJ/PA) Em uma locadora de automóveis a demanda diária é uma variável aleatória com a
seguinte distribuição de probabilidades:

A variância da demanda diária é:
a) 1,85.
b) 1,5.
c) 1,25.
d) 1,0.
e) 0,85
Comentários:
A variância pode ser calculada como:
                                               𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2
Vamos utilizar a tabela para calcular o valor de E(X):

Sabendo que E(X) é a soma de Xi.P(Xi), temos:
                                    𝐸(𝑋) = 0 + 0,1 + 0,6 + 0,9 + 0,4 + 0,5 = 2,5

           Receita Federal (Analista Tributário) Estatística                                       29
           www.estrategiaconcursos.com.br                                                          83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Logo, o quadrado da média é:
                                                     [𝐸(𝑋)]2 = (2,5)2 = 6,25
Agora, vamos calcular 𝐸(𝑋 2 ):

Sabendo que 𝐸(𝑋 2 ) é a soma de Xi2.P(Xi), temos:
                                  𝐸(𝑋 2 ) = 0 + 0,1 + 1,2 + 2,7 + 1,6 + 2,5 = 8,1
Assim, a variância é a diferença:
                                                   𝑉𝑎𝑟(𝑋) = 8,1 − 6,25 = 1,85
Gabarito: A


(FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade, sendo k uma
constante:
                                                     x -2,0 -1,0 0,0 1,0 2,0
                                                    p(x) 0,2 0,1 0,4 0,1 k

A variância de X é igual a:
a) 1,8
b) 2,0
c) 2,2
d) 2,4
e) 2,6
Comentários:
Para resolver essa questão, o primeiro passo é calcular o valor de k, considerando que a soma de todas as
probabilidades é igual a 1:
                                                   0,2 + 0,1 + 0,4 + 0,1 + 𝑘 = 1
                                                            𝑘 = 1 − 0,8 = 0,2
Agora, vamos utilizar a tabela para calcular nos ajudar com o cálculo da esperança 𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥) e do
segundo momento 𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥).
                                        x            -2,0      -1,0   0,0       1,0   2,0
                                       p(x)           0,2       0,1   0,4       0,1   0,2
                                      x.p(x)         -0,4      -0,1    0        0,1   0,4
                                               2
                                           x          4,0      1,0    0,0       1,0   4,0
                                       2
                                      x .p(x)         0,8      0,1     0        0,1   0,8
A média corresponde à soma da terceira linha:
                                      𝐸(𝑋) = −0,4 − 0,1 + 0 + 0,1 + 0,4 = 0

         Receita Federal (Analista Tributário) Estatística                                            30
         www.estrategiaconcursos.com.br                                                               83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

E o segundo momento corresponde à soma da última linha:
                                    𝐸(𝑋 2 ) = 0,8 + 0,1 + 0 + 0,1 + 0,8 = 1,8
Que é igual à variância, uma vez que a média é nula:
                                 𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 = 1,8 − 02 = 1,8
Gabarito: A

Desvio Padrão

Como elevamos os desvios ao quadrado, no cálculo da variância, perdemos um pouco a noção da grandeza
dos resultados. Se os dados são medidos em horas, por exemplo, a variância estará em horas2.

Para termos uma medida de dispersão, na mesma medida dos dados, utilizamos o desvio padrão (𝝈),
calculado como a raiz quadrada da variância:

                                                        𝝈 = √𝝈𝟐

                                                                                 35
Para o nosso exemplo da moeda equilibrada, em que calculamos a variância 𝜎 2 = 12, o desvio padrão é a
raiz quadrada desse valor:


                                                            35
                                                    𝜎=√        ≅ 1,7
                                                            12

Variância e Desvio Padrão Amostrais

Podemos calcular a variância, a partir de uma amostra da população de interesse, o que chamamos de
variância amostral. Nessa situação, em vez de dividirmos a soma dos quadrados dos desvios pelo número
de elementos, dividimos por 𝒏 − 𝟏, sendo 𝑛 o tamanho da amostra:

                                                                 ̅)𝟐
                                                             ∑(𝒙−𝒙
                                                    𝒔𝟐 =
                                                               𝒏−𝟏

                                                   ∑𝑥
        Em que 𝑥̅ é a média da amostra 𝑥̅ = 𝑛 .

Alternativamente, podemos nos basear na fórmula alternativa para a variância populacional:

                                                            ∑ 𝑥2
                                                    𝜎2 =         − 𝑥̅ 2
                                                             𝑛

        Receita Federal (Analista Tributário) Estatística                                          31
        www.estrategiaconcursos.com.br                                                             83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                         𝑛
E multiplicar o resultado pelo fator 𝑛−1, para obter a variância amostral:

                                                                𝑛
                                                   𝑠2 = 𝜎2 ×
                                                               𝑛−1

E o desvio padrão amostral corresponde à raiz quadrada da variância amostral:


                                                              ∑(𝑥 − 𝑥̅ )2
                                               𝑠 = √𝑠 2 = √
                                                                𝑛−1

(FCC/2015 – SEFAZ/PI – Adaptada) Julgue a seguinte afirmativa:
As amostras I e II dadas abaixo possuem a mesma variância amostral igual a 10.
Amostra I: 1 3 5 7 9 Amostra II: 11 13 15 17 19
Comentários:
Para calcular a variância amostral da Amostra I, primeiro calculamos a média da amostra:
                                      ∑ 𝑥 1 + 3 + 5 + 7 + 9 25
                                     𝑥1 =
                                     ̅̅̅   =               =   =5
                                        𝑛           5        5
Logo, a variância amostral da Amostra I é dada por:

                                                     2
                                                        ∑(𝑥 − 𝑥̅ )2
                                                    𝑠 =
                                                          𝑛−1

           (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + (9 − 5)2 16 + 4 + 0 + 4 + 16 40
    𝑠1 2 =                                                        =                =   = 10
                                       4                                      4      4
Para calcular a variância amostral da Amostra II, começamos pelo cálculo da média:
                                   ∑ 𝑥 11 + 13 + 15 + 17 + 19 75
                                𝑥2 =
                                ̅̅̅     =                    =   = 15
                                    𝑛                 5        5
A variância amostral da Amostral II é, portanto, dada por:

                 2
                    (11 − 15)2 + (13 − 15)2 + (15 − 15)2 + (17 − 15)2 + (19 − 15)2
              𝑠2 =                                                                 =
                                                       4
                                          16 + 4 + 0 + 4 + 16 40
                                   𝑠2 2 =                    =      = 10
                                                   4            4
Portanto, as amostras I e II possuem a mesma variância amostral, igual a 10.
Resposta: Certo.

        Receita Federal (Analista Tributário) Estatística                                     32
        www.estrategiaconcursos.com.br                                                        83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Propriedades

Agora, veremos as propriedades da variância e do desvio padrão, que são aplicáveis tanto a variáveis
aleatórias discretas, quanto a variáveis contínuas.

Nos enunciados a seguir, consideramos 𝑋 e 𝑌 variáveis aleatórias e 𝑘 uma constante real qualquer.

       i)      𝑽𝒂𝒓(𝑿 + 𝒌) = 𝑽𝒂𝒓(𝑿)

Quando somamos uma constante k a uma variável X, a variância de X não se altera. Por exemplo, para k = 2:

                                               𝑉𝑎𝑟(𝑋 + 2) = 𝑉𝑎𝑟(𝑋)

Essa propriedade vale também quando subtraímos uma constante 𝑘:

                                               𝑽𝒂𝒓(𝑿 − 𝒌) = 𝑽𝒂𝒓(𝑿)

Consequentemente, o desvio padrão também permanece o mesmo:

                                                𝑫𝑷(𝑿 + 𝒌) = 𝑫𝑷(𝑿)

                                                𝑫𝑷(𝑿 − 𝒌) = 𝑫𝑷(𝑿)

       ii)     𝑽𝒂𝒓(𝒌. 𝑿) = 𝒌𝟐 . 𝑽𝒂𝒓(𝑿)

Quando multiplicamos uma variável por uma constante, a variância é multiplicada pelo quadrado dessa
constante. Por exemplo, para k = 2, a variância de 2.X será:

                                       𝑉𝑎𝑟(2. 𝑋) = 22 . 𝑉𝑎𝑟(𝑋) = 4. 𝑉𝑎𝑟(𝑋)

Essa propriedade também vale para a divisão por uma constante 𝒌:

                                                      𝑿    𝑽𝒂𝒓(𝑿)
                                                 𝑽𝒂𝒓 ( ) =
                                                      𝒌      𝒌𝟐

Não importa se 𝑘 é positivo ou negativo, pois o seu quadrado será sempre positivo.

Como o desvio padrão é a raiz quadrada da variância, o desvio padrão do produto 𝑘. 𝑋 é igual ao produto do
valor absoluto da constante 𝑘 (desconsiderando-se o sinal) multiplicado pelo desvio padrão de 𝑋:

                             𝐷𝑃(𝑘. 𝑋) = √𝑉𝑎𝑟(𝑘. 𝑋) = √𝑘 𝟐 . 𝑉𝑎𝑟(𝑋) = |𝑘|. 𝐷𝑃(𝑋)

        Receita Federal (Analista Tributário) Estatística                                              33
        www.estrategiaconcursos.com.br                                                                 83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Analogamente, quando dividimos por uma constante 𝑘, temos:

                                                      𝑋    𝐷𝑃(𝑋)
                                                  𝐷𝑃 ( ) =
                                                      𝑘     |𝑘|

Por exemplo, para Y = 3.X, o desvio padrão será:

                                          𝐷𝑃(𝑌) = 𝐷𝑃(3. 𝑋) = 3. 𝐷𝑃(𝑋)
                𝑋
E para 𝑌 = − 2 , o desvio padrão será:

                                                        𝑋    𝐷𝑃(𝑋)
                                            𝐷𝑃(𝑌) = 𝐷𝑃 ( ) =
                                                        −2     2

       iii)     𝑽𝒂𝒓(𝒌) = 𝟎

A variância de uma constante qualquer é zero. Por exemplo, a variância da constante 𝑘 = 3 é:

                                                       𝑽(𝟑) = 𝟎

Consequentemente, o desvio padrão de uma constante também é igual a zero: 𝑫𝑷(𝒌) = 𝟎

       iv)      Se X e Y são independentes, então 𝑽𝒂𝒓(𝑿 + 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀)

Somente se X e Y forem variáveis aleatórias independentes, poderemos concluir que a variância da soma
das variáveis é igual à soma das variâncias (propriedade aditiva).

Além disso, se X e Y forem independentes, a variância da diferença X – Y também é a soma das variâncias:

                                        𝑽𝒂𝒓(𝑿 − 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀)

Para variáveis independentes, temos 𝑉𝑎𝑟(𝑋 ± 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌), porém o contrário não é
necessariamente verdadeiro. Ou seja, é possível verificar que 𝑉𝑎𝑟(𝑋 ± 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) e as
variáveis não serem independentes.

         i)         𝑽(𝑿 ± 𝒌) = 𝑽(𝑿)
         ii)        𝑽(𝒌. 𝑿) = 𝒌𝟐 . 𝑽(𝑿)
         iii)       𝑽(𝒌) = 𝟎
         iv)        Se X e Y forem independentes, então 𝑽(𝑿 ± 𝒀) = 𝑽(𝑿) + 𝑽(𝒀)


        Receita Federal (Analista Tributário) Estatística                                             34
        www.estrategiaconcursos.com.br                                                                83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(2016 – Instituto Federal de Educação/BA – Adaptada) Sendo X uma variável aleatória, com variância 2,
então a variância da função Y = a + bX, com a e b ∈ R, é
a) V(Y) = b2
b) V(Y) = a + b
c) V(Y) = 2
d) V(Y) = b22                                               ==219a34==

e) V(Y) = a2 + b2
Comentários:
Pelas propriedades da variância, temos:
                                            Var(Y) = Var(a + bx) = b2.Var(X)
Como a variância de X é Var(X) = 2, então a variância de Y é:
                                                      Var(Y) = b2.2
Gabarito: D.


(FGV/2017 – IBGE – Adaptada) Para o caso de variáveis aleatórias quaisquer, existem diversas propriedades
que se aplicam diretamente à esperança matemática e ao momento central de segunda ordem. Dentre essas
propriedades está:
a) Var(X) > E(X2)
b) Var(X±Y) = Var(X) ± Var(Y)
c) DP(a) = 0, sendo a uma constante qualquer
d) Var(a.X) = a.Var(X), sendo a uma constante positiva
e) DP(a.X) = a.DP(X), sendo a uma constante qualquer
Comentários:
Em relação à alternativa A, podemos calcular a variância como:
                                                 Var(X) = E(X2) – [E(X)]2
Como [E(X)]2 > 0 para qualquer variável X, então, temos:
                                                      Var(X) < E(X2)
Portanto, a alternativa A está incorreta. Em relação à alternativa B, se X e Y forem independentes, então
podemos afirmar que:
                                              Var(X ± Y) = Var(X) + Var(Y)


         Receita Federal (Analista Tributário) Estatística                                            35
         www.estrategiaconcursos.com.br                                                               83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Logo, a alternativa B está incorreta por 2 motivos:
i) Não podemos considerar a propriedade aditiva da variância, Var(X ± Y) = Var(X) + Var(Y), pois o enunciado
não afirmou que X e Y são independentes.
ii) Ainda que X e Y fossem independentes, a variância da diferença de X e Y seria igual à soma das variâncias:
Var(X – Y) = Var(X) + Var(Y)
Em relação à alternativa C, sabemos que a variância e o desvio padrão de uma constante “a” qualquer são
iguais a zero.
                                                        DP(a) = 0
Portanto, a alternativa C está correta. Em relação à alternativa D, sabemos que para uma constante “a”
qualquer:
                                                  Var(a.X) = a2.Var(X)
Portanto, a alternativa D está incorreta. Em relação à alternativa E, sabemos que para uma constante “a”
qualquer, temos:
                                                  DP(a.X) = |a|.DP(X)
Assim, sendo a uma constante positiva então:
                                                   DP(a.X) = a.DP(X)
Sendo a uma constante negativa então:
                                                  DP(a.X) = –a.DP(X)
Portanto, temos equações distintas para constantes positivas e negativas, logo a alternativa E está incorreta.
Resposta: C.

        Receita Federal (Analista Tributário) Estatística                                                  36
        www.estrategiaconcursos.com.br                                                                     83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                             COVARIÂNCIA E CORRELAÇÃO
A covariância e o coeficiente de correlação são medidas que representam a relação linear entre duas
variáveis aleatórias.

A covariância entre duas variáveis aleatórias 𝑋 e 𝑌, representada por 𝐶𝑜𝑣(𝑋, 𝑌), é, por definição:

                                        𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸[(𝑋 − 𝜇𝑋 ). (𝑌 − 𝜇𝑌 )]

Em que 𝜇𝑋 corresponde à média (esperança) da variável X, e 𝜇𝑌 corresponde à média de Y.

A covariância também pode ser calculada como:

                                        𝑪𝒐𝒗(𝑿, 𝒀) = 𝑬(𝑿. 𝒀) − 𝑬(𝑿). 𝑬(𝒀)

Nessa fórmula, 𝐸(𝑋. 𝑌) corresponde ao seguinte:

                                               𝐸(𝑋. 𝑌) = ∑ 𝑥. 𝑦 . 𝑝(𝑥, 𝑦)

Ou seja, multiplicamos os possíveis valores das variáveis pelas probabilidades correspondentes.

Por exemplo, vamos supor a seguinte tabela que representa a distribuição de 𝑋 e 𝑌 (que chamamos de
distribuição conjunta):

                                                 Y = -1     Y=0   Y=1       Total
                                       X=0        0,2       0,1   0,1        0,4
                                       X=1        0,3       0,1   0,2        0,6
                                       Total      0,5       0,2   0,3        1,0

Para calcular E(X.Y), multiplicamos os possíveis valores de X e de Y pelas probabilidades conjuntas
correspondentes, e somamos todos os resultados:

  𝐸(𝑋. 𝑌) = 0 × (−1) × 0,2 + 0 × 0 × 0,1 + 0 × 1 × 0,1 + 1 × (−1) × 0,3 + 0 × 0 × 0,1 + 1 × 1 × 0,2

                                  𝐸(𝑋. 𝑌) = 0 + 0 + 0 − 0,3 + 0 + 0,2 = −0,1

Pela última coluna da tabela, observamos que P(X = 0) = 0,4 e P(X = 1) = 0,6, logo a esperança de X é:

                                          𝐸(𝑋) = 0 × 0,4 + 1 × 0,6 = 0,6

Pela última linha da tabela, observamos que P(Y = -1) = 0,5, P(Y = 0) = 0,2 e P(Y = 1) = 0,3, logo a esperança
de Y é:

                         𝐸(𝑌) = −1 × 0,5 + 0 × 0,2 + 1 × 0,3 = −0,5 + 0,3 = −0,2

        Receita Federal (Analista Tributário) Estatística                                                  37
        www.estrategiaconcursos.com.br                                                                     83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Portanto, a covariância entre X e Y é:

            𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) = −0,1 − 0,6 × (−0,2) = −0,1 + 0,12 = 0,02

         Da mesma forma que podemos calcular a variância amostral, para estimar a variância da
         população a partir de uma amostra, também podemos calcular a covariância amostral,
         dividindo a soma dos produtos dos desvios por 𝑛 − 1:
                                                            ==219a34==

                                                    1
                                           𝑠𝑋,𝑌 = 𝑛−1 . ∑(𝑥𝑖 − 𝑥̅ ). (𝑦𝑖 − 𝑦̅)

         Alternativamente, podemos multiplicar a covariância calculara para uma população pelo
                𝑛
         fator 𝑛−1.

Quando a covariância é positiva, como no nosso exemplo, as variáveis se relacionam no mesmo sentido, isto
é, quando uma aumenta, a outra também aumenta, em média. Quando a covariância é negativa, as variáveis
se relacionam em sentidos opostos, isto é, quando uma aumenta, a outra diminui, em média.

Para variáveis independentes, a covariância é nula. No entanto, o contrário não é verdadeiro, ou seja,
sabendo que a covariância é nula, não podemos afirmar que as variáveis são independentes.

A covariância não é capaz de expressar a força dessa relação entre as variáveis.

Para isso, temos o coeficiente de correlação, 𝝆, em que dividimos a covariância pelos desvios padrão:

                                                                         𝑪𝒐𝒗(𝑿,𝒀)
                                                𝝆(𝑿, 𝒀) =
                                                                          𝝈𝑿 .𝝈𝒀


Para calcular o desvio padrão para as variáveis do nosso exemplo, vamos utilizar a seguinte fórmula da
variância:

                                            𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Sabendo que P(X = 0) = 0,4 e P(X = 1) = 0,6, o valor de 𝐸(𝑋 2 ) é:

                                        𝐸(𝑋 2 ) = 02 × 0,4 + 12 × 0,6 = 0,6


        Receita Federal (Analista Tributário) Estatística                                               38
        www.estrategiaconcursos.com.br                                                                  83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Sabendo que 𝐸(𝑋) = 0,6, temos:

                                     𝑉𝑎𝑟(𝑋) = 0,6 − 0,62 = 0,6 − 0,36 = 0,24

                                                  𝜎𝑋 = √0,24 ≅ 0,49

Sabendo que P(Y = -1) = 0,5, P(Y = 0) = 0,2 e P(Y = 1) = 0,3, o valor de 𝐸(𝑌 2 ):

                        𝐸(𝑌 2 ) = (−1)2 × 0,5 + 02 × 0,2 + 12 × 0,3 = 0,5 + 0,3 = 0,8

Sabendo que 𝐸(𝑌) = −0,2, temos:

                                  𝑉𝑎𝑟(𝑌) = 0,8 − (−0,2)2 = 0,8 − 0,04 = 0,76

                                                  𝜎𝑌 = √0,76 ≅ 0,87

Portanto, o coeficiente de correlação para o nosso exemplo é:

                                                𝐶𝑜𝑣(𝑋, 𝑌)      0,02
                                   𝜌(𝑋, 𝑌) =              ≅             ≅ 0,047
                                                  𝜎𝑋 . 𝜎𝑌   0,49 × 0,87

         A fórmula do coeficiente de correlação também pode ser representada como:

                                                                ∑ 𝑥.𝑦−𝑛.𝑥̅ .𝑦̅
                                           𝜌(𝑋, 𝑌) =
                                                        √∑ 𝑥 2 −𝑛.𝑥̅ 2 ×√∑ 𝑦 2 −𝑛.𝑦̅ 2

O coeficiente de correlação mede a força e a orientação da relação linear entre duas variáveis, podendo
assumir valores no intervalo [-1,1].

Assim, como para a covariância, valores positivos do coeficiente de correlação indicam uma relação entre
as variáveis no mesmo sentido e valores negativos indicam relação em sentidos opostos.

Quanto mais próximo dos extremos (-1 ou 1), mais forte é a relação entre as variáveis.

Para variáveis independentes, o coeficiente de correlação também é nulo. Porém, é possível que o
coeficiente de correlação seja nulo e as variáveis não serem independentes.

Afinal, a covariância e o coeficiente de correlação medem a relação linear entre as variáveis, mas existem
outros tipos de relações (quadrática, logística etc.) que não são captadas por essas medidas.


         Receita Federal (Analista Tributário) Estatística                                             39
         www.estrategiaconcursos.com.br                                                                83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                         𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

                                                         𝐶𝑜𝑣(𝑋,𝑌)
                                            𝜌(𝑋, 𝑌) =                 , 𝜌 ∈ [−1,1]
                                                             𝜎𝑋 .𝜎𝑌


                          Variáveis 𝑋 e 𝑌 Independentes → 𝐶𝑜𝑣(𝑋, 𝑌) = 0, 𝜌(𝑋, 𝑌) = 0

              𝐶𝑜𝑣(𝑋, 𝑌) > 0, 𝜌(𝑋, 𝑌) > 0 ↔ Relação positiva (𝑋 e 𝑌 variam no mesmo sentido)

             𝐶𝑜𝑣(𝑋, 𝑌) < 0, 𝜌(𝑋, 𝑌) < 0 ↔ Relação negativa (𝑋 e 𝑌 variam em sentidos opostos)

(FCC/2015 – SEFAZ/PI – Adaptada) Julgue a seguinte afirmação:
Se r é o coeficiente de correlação linear entre duas variáveis, então −1 ≤ r ≤ 1.
Comentários:
O coeficiente de correlação varia entre [-1,1].
Resposta: Certo.


(FCC/2015 – SEFAZ/PI – Adaptada) Julgue a seguinte afirmação:
Se duas variáveis X e Y apresentam correlação linear inversa, o coeficiente de correlação linear entre elas
será um número negativo menor do que −1.
Comentários:
Se X e Y se relacionam de forma inversa, então o coeficiente de correlação é negativo. Porém, como o menor
valor para o coeficiente é −1, o coeficiente será um valor negativo maior ou igual a −1, não menor do que −1.
Resposta: Errado.


(CESPE/2016 – TCE/PR) Se satisfação no trabalho e saúde no trabalho forem indicadores com variâncias
populacionais iguais a 8 e 2, respectivamente, e se a covariância populacional entre esses indicadores for
igual a 3, então a correlação populacional entre satisfação no trabalho e saúde no trabalho será igual a
a) 0,8125.
b) 1.


         Receita Federal (Analista Tributário) Estatística                                                40
         www.estrategiaconcursos.com.br                                                                   83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 0,1875.
d) 0,30.
e) 0,75.
Comentários:
Sabendo que V(X) = 8, V(Y) = 2 e Cov(X,Y) = 3, então a correlação é dada por:
                                                   𝐶𝑜𝑣(𝑋, 𝑌)     3    3
                                      𝜌(𝑋, 𝑌) =              =       = = 0,75
                                                     𝜎𝑋 . 𝜎𝑌   √8. √2 4
Gabarito: E

Propriedades

Veremos agora propriedades da covariância e da correlação, que valem tanto para variáveis discretas,
quanto para variáveis contínuas. A seguir, consideramos 𝑋, 𝑌 e 𝑍 variáveis aleatórias e 𝑘 uma constante real
qualquer.

       i)         𝑪𝒐𝒗(𝑿, 𝒀) = 𝑪𝒐𝒗(𝒀, 𝑿)

A covariância é considerada uma medida simétrica, pois não importa qual é a variável que aparece primeiro.

Pelo mesmo motivo, o coeficiente de correlação também é simétrico: 𝝆(𝑿, 𝒀) = 𝝆(𝒀, 𝑿)

       ii)        𝑪𝒐𝒗(𝑿, 𝑿) = 𝑽𝒂𝒓(𝑿)

A covariância de uma mesma variável é igual à sua variância.

Dessa forma, o coeficiente de correlação de uma mesma variável é 𝝆(𝑿, 𝑿) = 𝟏.

       iii)       𝑪𝒐𝒗(𝒌, 𝑿) = 𝟎

A covariância de uma constante e uma variável é igual a zero.

Consequentemente, o coeficiente de correlação também é 𝝆(𝒌, 𝑿) = 𝟎

       iv)        𝑪𝒐𝒗(𝑿 ± 𝒂, 𝒀 ± 𝒃) = 𝑪𝒐𝒗(𝑿, 𝒀)

A covariância não se altera quando somamos ou subtraímos constantes às variáveis.

           Receita Federal (Analista Tributário) Estatística                                             41
           www.estrategiaconcursos.com.br                                                                83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Por exemplo, a covariância entre Z = X + 5 e a variável W = Y – 4 é igual à covariância entre X e Y:

                                      Cov(Z, W) = Cov(X + 5, Y – 4) = Cov(X, Y)

Dessa forma, o coeficiente de correlação também não se altera quando somamos ou subtraímos constantes
às variáveis:

                                             𝝆(𝑿 ± 𝒂, 𝒀 ± 𝒃) = 𝝆(𝑿, 𝒀)

       v)      𝑪𝒐𝒗(𝑿 + 𝒀, 𝒁) = 𝑪𝒐𝒗(𝑿, 𝒁) + 𝑪𝒐𝒗(𝒀, 𝒁)

A covariância da soma de variáveis aleatórias X + Y e uma outra variável Z é igual à soma da covariância entre
X e Z com a covariância entre Y e Z.

A mesma propriedade pode ser aplicada para a subtração de variáveis:

                                    𝑪𝒐𝒗(𝑿 − 𝒀, 𝒁) = 𝑪𝒐𝒗(𝑿, 𝒁) − 𝑪𝒐𝒗(𝒀, 𝒁)

       vi)     𝑪𝒐𝒗(𝒌. 𝑿, 𝒀) = 𝑪𝒐𝒗(𝑿, 𝒌. 𝒀) = 𝒌. 𝑪𝒐𝒗(𝑿, 𝒀)

A covariância de duas variáveis aleatórias, sendo qualquer uma delas multiplicada por uma constante, é
igual ao produto da constante pela covariância das variáveis.

Por exemplo, a covariância entre X e W = 5.Y é igual a 5 vezes a covariância entre X e Y:

                                        Cov(X, W) = Cov(X, 5.Y) = 5.Cov(X, Y)

                                                                                                       1
Isso também vale para a divisão por uma constante 𝑘 (pois é o mesmo que multiplicar pela constante 𝑘). Por
                     𝑋
exemplo, para 𝐺 = 3 , a covariância entre G e Y é igual a um terço da covariância entre X e Y:

                                                      𝑋      1
                                     𝐶𝑜𝑣(𝐺, 𝑌) = 𝐶𝑜𝑣 ( , 𝑌) = . 𝐶𝑜𝑣(𝑋, 𝑌)
                                                      3      3

Se ambas as variáveis estiverem multiplicadas por constantes, a covariância será multiplicada por ambas:

                                          𝑪𝒐𝒗(𝒌. 𝑿, 𝒍. 𝒀) = 𝒌. 𝒍. 𝑪𝒐𝒗(𝑿, 𝒀)
                          𝑋
Por exemplo, para 𝐺 = 3 e W = 5.Y, a covariância entre G e W é:

                                          𝑋         1                5
                         𝐶𝑜𝑣(𝐺, 𝑊) = 𝐶𝑜𝑣 ( , 5. 𝑌) = . 5. 𝐶𝑜𝑣(𝑋, 𝑌) = . 𝐶𝑜𝑣(𝑋, 𝑌)
                                          3         3                3


        Receita Federal (Analista Tributário) Estatística                                                  42
        www.estrategiaconcursos.com.br                                                                     83

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 07

E como fica o coeficiente de correlação?

O coeficiente de correlação não se altera, em módulo, quando multiplicamos as variáveis por constantes:

                                               |𝝆(𝒌. 𝑿, 𝒍. 𝒀)| = |𝝆(𝑿, 𝒀)|

O sinal do coeficiente será o mesmo se as constantes tiverem o mesmo sinal (𝑘𝑙 > 0) e terá sinal contrário
se as constantes tiverem sinais diferentes (𝑘𝑙 < 0):

                                          𝝆(𝒌. 𝑿, 𝒍. 𝒀) = 𝝆(𝑿, 𝒀), se 𝒌𝒍 > 𝟎

                                         𝝆(𝒌. 𝑿, 𝒍. 𝒀) = −𝝆(𝑿, 𝒀), se 𝒌𝒍 < 𝟎

Se houver apenas uma constante 𝑘 multiplicando uma das variáveis, o coeficiente de correlação será o
mesmo se 𝑘 > 0 e terá sinal contrário se 𝑘 < 0:

                                            𝜌(𝑘. 𝑋, 𝑌) = 𝜌(𝑋, 𝑌), se 𝑘 > 0

                                           𝜌(𝑘. 𝑋, 𝑌) = −𝜌(𝑋, 𝑌), se 𝑘 < 0

                                        Propriedades da Covariância

          i)      Simetria: 𝐶𝑜𝑣(𝑋, 𝑌) = 𝐶𝑜𝑣(𝑌, 𝑋)
          ii)     Mesma variável: 𝐶𝑜𝑣(𝑋, 𝑋) = 𝑉𝑎𝑟(𝑋)
          iii)    Com uma constante: 𝐶𝑜𝑣(𝑘, 𝑋) = 0
          iv)     Soma/Subtração de uma constante: 𝐶𝑜𝑣(𝑋 ± 𝑎, 𝑌 ± 𝑏) = 𝐶𝑜𝑣(𝑋, 𝑌)
          v)      Soma/Subtração de variáveis: 𝐶𝑜𝑣(𝑋 ± 𝑌, 𝑍) = 𝐶𝑜𝑣(𝑋, 𝑍) ± 𝐶𝑜𝑣(𝑌, 𝑍)
          vi)     Produto de constantes: 𝐶𝑜𝑣(𝑘. 𝑋, 𝑙. 𝑌) = 𝑘. 𝑙. 𝐶𝑜𝑣(𝑋, 𝑌)

(FGV/2015 – Prefeitura de Recife/PE) Uma variável aleatória X tem média igual a 2 e desvio padrão igual a
2. Se Y = 6 – 2X, então a média de Y, a variância de Y e o coeficiente de correlação entre X e Y valem,
respectivamente,
a) -2, 4 e 1.
b) -2, 16 e 1.
c) 2, 16 e -1.
d) 10, 2 e -1.
e) 2, 4 e -1.


         Receita Federal (Analista Tributário) Estatística                                             43
         www.estrategiaconcursos.com.br                                                                83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Comentários:
Pelas propriedades da esperança, temos:
                                             E(Y) = E(6 – 2X) = 6 – 2.E(X)
O enunciado informa que a média de X é E(X) = 2, logo:
                                                   E(Y) = 6 – 2.2 = 2
Pela propriedade da variância, temos:
                                   Var(Y) = Var(6 – 2X) = (-2)2.Var(X) = 4.Var(X)
O enunciado informa que o desvio padrão de X é DP(X) = 2. Assim, a variância é Var(X) = 22 = 4:
                                                   Var(Y) = 4.4 = 16
Como Y = 6 – 2X, o coeficiente de correlação de X e Y é:
                                               𝜌(𝑋, 𝑌) = 𝜌(𝑋, 6 − 2𝑋)
Sabemos que a soma de constantes não altera o coeficiente de correlação, logo:
                                                𝜌(𝑋, 𝑌) = 𝜌(𝑋, −2𝑋)
Aqui, temos uma constante negativa multiplicando uma das variáveis: k = -2 < 0. Logo, o coeficiente de
correlação terá sinal contrário:
                                                 𝜌(𝑋, 𝑌) = −𝜌(𝑋, 𝑋)
Sabemos que 𝜌(𝑋, 𝑋) = 1, logo:
                                                     𝜌(𝑋, 𝑌) = −1
Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                          44
        www.estrategiaconcursos.com.br                                                             83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                    VARIÂNCIA DA SOMA E DA DIFERENÇA
No caso geral, a variância da soma é dada pela soma das variâncias, mais o dobro da covariância:

                                    𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌)

Por exemplo, vamos supor que a variância de X seja Var(X) = 3, que a variância de Y seja Var(Y) = 4 e a
covariância entre X e Y seja Cov(X,Y) = 1. Então, a variância da soma das variáveis S = X + Y será:
            𝑉𝑎𝑟(𝑆) = 𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 3 + 4 + 2 × 1 = 9
E a variância da diferença é dada pela soma das variâncias, menos o dobro da covariância:

                                    𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌)

Para o mesmo exemplo, sendo D = X – Y, a variância de D será:
            𝑉𝑎𝑟(𝐷) = 𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 3 + 4 − 2 × 1 = 5
Para variáveis independentes, a covariância é nula. Portanto, tanto a variância da soma quanto a variância
da diferença são iguais à soma das variâncias:
                   𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌)
                   𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌)

(2016 – IBGE) Se duas variáveis aleatórias, X e Y, têm correlação linear negativa, então:
a) Quanto menor for o valor de X, menor será o valor de Y.
b) A soma dos valores esperados de X e Y é menor do que o valor esperado de X + Y.
c) O produto dos valores esperados de X e Y é menor do que o valor esperado do produto X.Y.
d) A soma das variâncias de X e Y é igual ou menor do que as variâncias de X + Y.
e) A soma das variâncias de X e Y é estritamente maior do que a variância de X + Y.
Comentários:
A questão informa que a correlação linear entre X e Y é negativa.
Em relação à alternativa A, como a correlação é negativa, então X e Y se relacionam em sentidos opostos.
Assim, quanto menor for o valor de X, maior será o valor de Y (em média). Portanto: alternativa A incorreta.
Em relação à alternativa B, a soma dos valores esperados E(X) + E(Y) é igual ao valor esperado E(X+Y), para
quaisquer variáveis X e Y. Portanto: alternativa B incorreta.


        Receita Federal (Analista Tributário) Estatística                                                45
        www.estrategiaconcursos.com.br                                                                   83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação à alternativa C, o valor de E(X.Y) pode ser calculado a partir da covariância:
                   𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) → 𝐸(𝑋. 𝑌) = 𝐶𝑜𝑣(𝑋, 𝑌) + 𝐸(𝑋). 𝐸(𝑌)
Como a correlação entre X e Y é negativa, então Cov(X,Y) < 0. Dessa forma:
                                                      E(X.Y) < E(X).E(Y)
Ou seja, o produto dos valores esperados E(X).E(Y) é maior que o valor esperado do produto E(X.Y). Portanto:
alternativa C incorreta.
Em relação às alternativas D e E, a variância de X + Y é dada por:
                                         Var(X + Y) = Var(X) + Var(Y) + 2.Cov(X,Y)
Como Cov(X,Y) < 0, então:
                                                Var(X + Y) < Var(X) + Var(Y)
Ou seja, a soma das variâncias de V(X) + V(Y) é maior que a V(X + Y). Portanto: alternativa D incorreta e
                                                               ==219a34==

alternativa E correta.
Gabarito: E.


(FGV/2015 – TJ/RO) Seja X = número de anos de condenação e Y = nível de renda do condenado (mil reais).
São fornecidas ainda as seguintes informações: Var(X) = 25; Var (Y) = 16 e Var (X+Y) = 21. Assim sendo, a
correlação entre X e Y é igual a:
a) 0,20
b) 0,25
c) 0,50
d) -0,50
e) -0,10
Comentários:
Para calcular o coeficiente de correlação, precisamos da covariância e dos desvios padrão. O valor de Cov(X,Y)
pode ser obtido pela fórmula da variância da soma:
                                   𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌)
O enunciado informa que Var(X + Y) = 21, Var(X) = 25 e Var(Y) = 16, logo:
                                              21 = 25 + 16 + 2. 𝐶𝑜𝑣(𝑋, 𝑌)
                            2. 𝐶𝑜𝑣(𝑋, 𝑌) = 21 − 25 − 16 = −20 → 𝐶𝑜𝑣(𝑋, 𝑌) = −10
Os valores dos desvios padrão são a raiz quadrada das variâncias. Sendo Var(X) = 25 e Var(Y) = 16, então:
                                            𝜎𝑋 = √25 = 5,                   𝜎𝑌 = √16 = 4
Portanto, o coeficiente de correlação é:
                                                      𝐶𝑜𝑣(𝑋, 𝑌)   −10
                                          𝜌(𝑋, 𝑌) =             =     = −0,5
                                                        𝜎𝑋 . 𝜎𝑌   5×4
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                                46
           www.estrategiaconcursos.com.br                                                                   83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        COEFICIENTE DE VARIAÇÃO E VARIÂNCIA RELATIVA
O coeficiente de variação é a razão entre o desvio padrão e a média:

                                                                𝝈
                                                         𝑪𝑽 =
                                                                𝝁


Por exemplo, vamos supor que a variável aleatória 𝑋 apresente média 𝜇𝑋 = 100 e desvio padrão 𝜎𝑋 = 20;
e que a variável aleatória 𝑌 apresente média 𝜇𝑌 = 10 e desvio padrão 𝜎𝑌 = 5.
Nesse caso, não poderíamos afirmar que a dispersão de 𝑋 é maior que a de 𝑌, só porque 𝜎𝑋 > 𝜎𝑌 . Para
efetuarmos essa comparação, precisamos do Coeficiente de Variação. Para esse exemplo, temos:
                                        𝜎𝑋   20                         𝜎𝑌   5
                                𝐶𝑉𝑋 =      =    = 0,2,          𝐶𝑉𝑌 =      =   = 0,5
                                        𝜇𝑋 100                          𝜇𝑌 10
Portanto, concluímos que a dispersão de 𝑌 é maior do que a de 𝑋, porque 𝐶𝑉𝑌 > 𝐶𝑉𝑋 .

Como a média e o desvio padrão consideram a mesma unidade de medida (a mesma dos elementos da
variável aleatória), o coeficiente de variação é adimensional, isto é, não possui unidade de medida, sendo
apenas um número.


A variância relativa, 𝑉𝑅 , também apresenta o mesmo objetivo, qual seja, de permitir comparações entre
variáveis com médias distintas. Ela corresponde ao quadrado do coeficiente de variação:

                                                             𝝈𝟐     𝑽𝒂𝒓(𝑿)
                                             𝑽𝑹 = (𝑪𝑽 )𝟐 = 𝝁𝟐 =
                                                                      𝝁𝟐


Ou seja, a variância relativa, que também é adimensional, é a razão entre a variância e o quadrado da média.
Para o nosso exemplo, em que 𝐶𝑉𝑋 = 0,2, a variância relativa de X é:

                                             𝑉𝑅 = (𝐶𝑉 )2 = (0,2)2 = 0,04

(2015 – Analista de Planejamento e Orçamento) O coeficiente de correlação de duas variáveis aleatórias x
e y é igual 0,7, ou seja: δ (x , y) = 0,7. O coeficiente de variabilidade de x é 0,3 e o coeficiente de variabilidade
de y é 0,5. Com essas informações sobre as variáveis x e y, pode-se, corretamente, afirmar que:


         Receita Federal (Analista Tributário) Estatística                                                        47
         www.estrategiaconcursos.com.br                                                                           83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) à medida que x cresce, em média y decresce.
b) a variabilidade absoluta de x é maior que a variabilidade absoluta de y.
c) o desvio-padrão de x é 30% menor do que sua média.
d) o desvio-padrão de y é 50% de sua média.
e) o desvio-padrão de y é 50% maior do que sua média.
Comentários:
A questão informa que o coeficiente de correlação entre X e Y é 0,7: (X,Y) = 0,7; que o coeficiente de
variabilidade (ou de variação) de X é 0,3:
                                                 𝜎𝑋
                                           𝐶𝑉𝑋 =    = 0,3
                                                 𝜇𝑋
E que o coeficiente de variabilidade (ou de variação) de Y é 0,5:
                                                      𝜎𝑌
                                                            ==219a34==

                                               𝐶𝑉𝑌 =     = 0,5
                                                      𝜇𝑌
Em relação à alternativa A, como o coeficiente de correlação é positivo, à medida que x cresce, em média, y
também cresce. Portanto, a alternativa A está incorreta.
Em relação à alternativa B, não é possível calcular as médias 𝜇𝑋 e 𝜇𝑌 com as informações fornecidas, assim,
não é possível afirmar algo sobre as variabilidades absolutas (isto é, os desvios padrão ou as variâncias) das
variáveis. Portanto, a alternativa B está incorreta.
Em relação à alternativa C, podemos afirmar que o desvio padrão de X é 30% da sua média:
                                                     𝜎𝑋 = 0,3 × 𝜇𝑋
Portanto, a alternativa C está incorreta.
Em relação às alternativas D e E, podemos afirmar que o desvio padrão de Y é 50% da sua média:
                                                     𝜎𝑌 = 0,5 × 𝜇𝑌
Portanto, a alternativa D está correta e a alternativa E está incorreta.
Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                                                  48
        www.estrategiaconcursos.com.br                                                                     83

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Resumo

Função de Distribuição Acumulada: 𝐹(𝑥) = 𝑃(𝑋 ≤ 𝑥)

Esperança Matemática (média): 𝐸(𝑋) = ∑ 𝑥. 𝑃(𝑋 = 𝑥)

            •   𝐸(𝑘𝑋) = 𝑘. 𝐸(𝑋)
            •   𝐸(𝑋 + 𝑘) = 𝐸(𝑋) + 𝑘
            •   𝐸(𝑋 ± 𝑌) = 𝐸(𝑋) ± 𝐸(𝑌)
            •   𝐸(𝑘) = 𝑘
            •   Se X e Y forem independentes, então 𝐸(𝑋 × 𝑌) = 𝐸(𝑋) × 𝐸(𝑌)

Moda: valor de X com maior probabilidade

Mediana: divide a distribuição em duas partes iguais, 𝐹(𝑥𝑀𝑒𝑑 ) = 0,5

Variância: 𝑉𝑎𝑟(𝑋) = ∑(𝑥 − 𝜇)2 × 𝑃(𝑋 = 𝑥)

            •   𝑉𝑎𝑟(𝑋 + 𝑘) = 𝑉𝑎𝑟(𝑋)
            •   𝑉𝑎𝑟(𝑘. 𝑋) = 𝑘 2 . 𝑉𝑎𝑟(𝑋)
            •   𝑉𝑎𝑟(𝑘) = 0
            •   Se X e Y forem independentes, então 𝑉𝑎𝑟(𝑋 ± 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌)

Desvio Padrão: 𝜎 = √𝑉𝑎𝑟(𝑋)

Covariância: 𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

                            𝐶𝑜𝑣(𝑋,𝑌)
Correlação: 𝜌(𝑋, 𝑌) =         𝜎𝑋 .𝜎𝑌


            •   Se X e Y forem independentes, então 𝐶𝑜𝑣(𝑋, 𝑌) = 0, 𝜌(𝑋, 𝑌) = 0

Variância da Soma e da Diferença

                               𝑽𝒂𝒓(𝑿 + 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀) + 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)

                               𝑽𝒂𝒓(𝑿 − 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀) − 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)
                                           𝝈
Coeficiente de Variação: 𝑪𝑽 = 𝝁

                                               𝑽(𝑿)
Variância Relativa: 𝑽𝑹 = (𝑪𝑽 )𝟐 = 𝝁𝟐

        Receita Federal (Analista Tributário) Estatística                          49
        www.estrategiaconcursos.com.br                                             83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                               QUESTÕES COMENTADAS – FGV

Noções de variáveis discretas

1.  (FGV/2024 – Pref. São José dos Campos) Considere uma variável aleatória X com os seguintes
momentos: E(X) = 4 e E(X2) = 25.

O desvio padrão de X é igual a:

a) 3

b) 9

c) √21

d) √29

e) 2,5

Comentários:

A variância pode ser calculada como:

                                                 𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Pelos dados do enunciado, temos 𝐸(𝑋 2 ) = 25 e 𝐸(𝑋) = 4, logo:

                                            𝑉𝑎𝑟(𝑋) = 25 − (4)2 = 25 − 16 = 9

E o desvio é a raiz quadrada do resultado:

                                                   𝜎𝑋 = √𝑉𝑎𝑟(𝑋) = √9 = 3

Gabarito: A

2.     (FGV/2023 – TJ/SE) Se X é uma variável aleatória com média 20 e variância 4, então a variável
Y = 5X – 100 tem média e variância iguais, respectivamente, a:

a) 0 e 4

b) 0 e 20

           Receita Federal (Analista Tributário) Estatística                                     50
           www.estrategiaconcursos.com.br                                                        83

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 0 e 100

d) 100 e 4

e) 100 e 20

Comentários:

Para resolver essa questão, devemos considerar as propriedades da esperança e da variância.

Sabendo que a esperança de X é igual a 20, temos

                           𝐸(𝑌) = 𝐸(5𝑋 − 100) = 5. 𝐸(𝑋) − 100 = 5 × 20 − 100 = 0

E, sabendo que a variância de X é igual a 4; que a subtração de uma constante não afeta a variância; e que,
quando multiplicamos a variável por uma constante, a variância é multiplicada pelo seu quadrado, temos:

                             𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(5𝑋 − 100) = 𝑉𝑎𝑟(5. 𝑋) = 52 × 4 = 100

Gabarito: C

3.    (FGV/2023 – TJ/SE) Sabe-se que a variância da variável aleatória X é igual a 8, enquanto a da
variável aleatória Y é 2. Além disso, a variância de X-Y é nula. Então, a covariância entre X e Y vale:

a) 0

b) 1

c) 3

d) 5

e) 7

Comentários:

A variância da diferença é igual à soma das variâncias menos o dobro da covariância:

                                 𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2 × 𝐶𝑜𝑣(𝑋, 𝑌)

Sabendo que Var(X) = 8, Var(Y) = 2 e Var(X - Y) = 0, então:

                                               0 = 8 + 2 − 2 × 𝐶𝑜𝑣(𝑋, 𝑌)

                                                   2 × 𝐶𝑜𝑣(𝑋, 𝑌) = 10


        Receita Federal (Analista Tributário) Estatística                                               51
        www.estrategiaconcursos.com.br                                                                  83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                        𝐶𝑜𝑣(𝑋, 𝑌) = 5

Gabarito: D

4.    (FGV/2023 – TJ/SE) A medida utilizada para comparar a variabilidade de variáveis com
diferentes desvios padrões e diferentes médias é:

a) coeficiente de correlação de Pearson;

b) coeficiente de correlação de Spearman;

c) coeficiente de variação;

d) covariância;

e) quantil.

Comentários:

A medida de variabilidade que permite comparar distribuições diferentes é o coeficiente de variação, que
é a razão entre o desvio padrão e a média.

Gabarito: C

5.    (FGV/2023 – Câmara dos Deputados) A função de probabilidade de uma variável aleatória
discreta X é dada por:

  x        0      1       2       3
 p(x)     0,2    0,3     0,3     0,2

No caso, a variância de X é igual a

a) 1,05

b) 1,15

c) 1,25

d) 1,35

e) 1,45

Comentários:


          Receita Federal (Analista Tributário) Estatística                                          52
          www.estrategiaconcursos.com.br                                                             83

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Vamos calcular a variância pela seguinte fórmula, utilizando a tabela:

                                                 𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

                                                x         0     1       2        3
                                              p(x)       0,2   0,3     0,3      0,2
                                             x.p(x)       0    0,3     0,6      0,6
                                                x2        0     1       4        9
                                             x2.p(x)      0    0,3     1,2      1,8

A esperança corresponde à soma da terceira linha:

                                     𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥) = 0 + 0,3 + 0,6 + 0,6 = 1,5

E o valor de 𝐸(𝑋 2 ) corresponde à soma da última linha:

                                    𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥) = 0 + 0,3 + 1,2 + 1,8 = 3,3

E a variância é:

                                         𝑉𝑎𝑟(𝑋) = 3,3 − 1,52 = 3,3 − 2,25 = 1,05

Gabarito: A

6.        (FGV/2023 – Câmara dos Deputados) Observe a seguinte amostra de notas de cinco alunos:

6, 6, 8, 10, 10

A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média, é
igual a

a) 2,4

b) 2,8

c) 3,2

d) 3,6

e) 4,0

Comentários:

           Receita Federal (Analista Tributário) Estatística                                  53
           www.estrategiaconcursos.com.br                                                     83

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Apesar de o enunciado dizer que se trata de uma amostra, a questão pede a variância dessas notas, e não a
variância amostral, calculada para estimar a variância da população. Por isso, utilizamos a fórmula da
variância populacional, em que dividimos a soma dos quadrados por 𝑛:

                                                             ∑(𝑥 − 𝑥̅ )2
                                                      𝜎2 =
                                                                 𝑛

A média é:

                                                  6 + 6 + 8 + 10 + 10 40
                                           𝑥̅ =                      =   =8
                                                           5           5

E a variância é:

               (6 − 8)2 + (6 − 8)2 + (8 − 8)2 + (10 − 8)2 + (10 − 8)2 4 + 4 + 0 + 4 + 4 16
      𝜎2 =                                                           =                 =   = 3,2
                                          5                                   5          5

Gabarito: C

7.    (FGV/2023 – Câmara dos Deputados) Avalie se as seguintes afirmativas acerca do coeficiente
de correlação linear 𝝆 entre duas variáveis aleatórias contínuas estão corretas.

I - O módulo de 𝝆 é sempre menor ou igual a 1.

II - Se 𝝆 = 𝟎, as duas variáveis são independentes.

III - Valores de 𝝆 próximos de + 1 indicam uma correlação positiva forte.

Está correto o que se afirma em

a) I, apenas

b) II, apenas

c) I e II, apenas

d) I e III, apenas

e) II e III, apenas

Comentários:

O coeficiente de correlação varia entre -1 e 1, ou seja, o seu módulo (valor absoluto) é sempre menor ou
igual a 1, logo a afirmativa I está certa.


         Receita Federal (Analista Tributário) Estatística                                            54
         www.estrategiaconcursos.com.br                                                               83

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Se o coeficiente de correlação for próximo de +1, a correlação entre as variáveis é positiva (porque o
coeficiente é positivo) e forte (por ser próximo de 1). Logo, a afirmativa III está certa.

Para variáveis independentes, o coeficiente de correlação é nulo; porém, é possível que o coeficiente seja
nulo e as variáveis não serem independentes. Portanto, não podemos afirmar que duas variáveis são
independentes se o coeficiente de correlação for nulo. Logo, a afirmativa II está errada.

Gabarito: D

8.        (FGV/2023 – RFB) Uma variável aleatória discreta X tem função de probabilidade dada por

 x    0           1       2      3
 p(x) 0,5         0,2     0,1    0,2

A probabilidade de que o valor de X seja maior do que 2 é igual a

a) 10%

b) 20%

c) 25%

d) 30%

e) 50%

Comentários:

Pela tabela, observamos que X assume os valores 0, 1, 2 e 3. Assim, a probabilidade de X ser maior que 2
corresponde à probabilidade de X ser igual a 3. Pela tabela, observamos que:

                                                         𝑃(𝑋 = 3) = 0,2

Gabarito: B

9.    (FGV/2023 – RFB) Edson e Roberto fazem uma aposta jogando dois dados, ambos regulares.
Edson ganha a aposta se saírem dois números maiores do que 3. Caso contrário, ganha Roberto.

Eles pretendem fazer um jogo honesto. Se perder, Edson pagará a Roberto 10 reais. Então, se perder,
Roberto deverá pagar a Edson

a) 18 reais


           Receita Federal (Analista Tributário) Estatística                                           55
           www.estrategiaconcursos.com.br                                                              83

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 24 reais

c) 30 reais

d) 42 reais

e) 46 reais

Comentários:

Para que o jogo seja honesto é necessário que o ganho esperado seja igual para ambos os jogadores.

Edson ganha se saírem dois números maiores do que 3. Há 3 possibilidades para isso, em cada dado, logo
a probabilidade é:

                                                                 3 1
                                                            𝑝=    =
                                                                 6 2

Como esse resultado precisa ocorrer para ambos os dados (interseção de eventos independentes), a
probabilidade de Edson ganhar é o produto:

                                                                 1 1 1
                                                   𝑃(𝐸𝑑𝑠) =       × =
                                                                 2 2 4

Considerando que Roberto ganhará nos demais casos, a probabilidade de ele ganhar é complementar:

                                                                     1 3
                                                   𝑃(𝑅𝑜𝑏) = 1 −       =
                                                                     4 4

Sabendo que Roberto ganhará 10 reais se ganhar, o seu ganho esperado é:

                                                                  3 30
                                                   𝐸𝑅𝑜𝑏 = 10 ×      =
                                                                  4   4

Para que esse também seja o ganho esperado de Edson, o valor que ele deve receber, caso ganhe é:

                                                             1      30
                                                    𝐸𝐸𝑑𝑠 =     ×𝑔 =
                                                             4       4

                                                            𝑔 = 30

Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                            56
        www.estrategiaconcursos.com.br                                                               83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

10.    (FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte
distribuição de probabilidade:

                                                        X    Prob(X)
                                                        0       0
                                                        1      1/4
                                                        2      1/4
                                                        3       K

O valor de K e o valor esperado de X são, respectivamente,

a) 0 e 3/4

b) 1/4 e 3/2

c) 1/2 e 3/4

d) 1/2 e 3/2

e) 1/2 e 9/4

Comentários:

Vamos calcular o valor K, considerando que a soma das probabilidades é igual a 1:

                                𝑃(𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) = 1

                                                            1 1
                                                    0+       + +𝐾 =1
                                                            4 4
                                                              2 2 1
                                                   𝐾 = 1−      = =
                                                              4 4 2

Para calcular a esperança, multiplicamos cada valor que a variável assume pela respectiva probabilidade:

                                               1     1     2 1 2 6 9
                             𝐸(𝑋) = 0 × 0 + 1 × + 2 × + 3 × = + + =
                                               4     4     4 4 4 4 4

Portanto, o valor de K é igual a 1/2 e o valor esperado de X é igual a 9/4.

Gabarito: E

11.  (FGV/2022 – SEFAZ/BA) Uma variável aleatória discreta X tem a seguinte distribuição de
probabilidades:


        Receita Federal (Analista Tributário) Estatística                                             57
        www.estrategiaconcursos.com.br                                                                83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

 x    1          3       5      10
 p(x) 0,1        0,2     0,3    0,4

A média de X é igual a

a) 3,5

b) 4,0

c) 5,4

d) 6,2

e) 7,0

Comentários:

A média (ou esperança) de uma variável é o produto dos valores da variável pelas respectivas
probabilidades:

                   𝐸(𝑋) = 1 × 0,1 + 3 × 0,2 + 5 × 0,3 + 10 × 0,4 = 0,1 + 0,6 + 1,5 + 4 = 6,2

Gabarito: D

12.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

 x    -2,0 -1,0 0,0             1,0     2
 p(x) 0,2 0,1 0,4               0,1     k

A média de X é igual a:

a) -0,4

b) -0,3

c) -0,2

d) 0,0

e) 0,5

Comentários:

          Receita Federal (Analista Tributário) Estatística                                    58
          www.estrategiaconcursos.com.br                                                       83

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Aqui, primeiro precisamos calcular o valor de k, considerando que a soma das probabilidades de todos os
possíveis valores é igual a 1:

                       𝑃(𝑋 = −2) + 𝑃(𝑋 = −1) + 𝑃(𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) = 1

                                              0,2 + 0,1 + 0,4 + 0,1 + 𝑘 = 1

                                                         0,8 + 𝑘 = 1

                                                     𝑘 = 1 − 0,8 = 0,2

E para calcular a esperança, somamos os produtos dos valores de x com as respectivas probabilidades

                                                 𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

     𝐸(𝑋) = (−2) × 0,2 + (−1) × 0,1 + 0 × 0,4 + 1 × 0,1 + 2 × 0,2 = −0,4 − 0,1 + 0 + 0,1 + 0,4 = 0

Gabarito: D

13.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

  x   -2,0 -1,0         0,0     1,0      2
 p(x) 0,2 0,1           0,4     0,1      k

A variância de X é igual a:

a) 1,8

b) 2,0

c) 2,2

d) 2,4

e) 2,6

Comentários:

Na questão anterior, calculamos o valor de probabilidade faltante 𝑘 = 0,2, assim como a média 𝐸(𝑋) = 0.
Agora, precisamos da variância, que pode ser calculada como:

                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2


         Receita Federal (Analista Tributário) Estatística                                            59
         www.estrategiaconcursos.com.br                                                               83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para calcular 𝐸(𝑋 2 ), elevamos os valores de 𝑥 ao quadrado e multiplicamos pela probabilidade
correspondente:

                                                 𝐸(𝑋 2 ) = ∑ 𝑥 2 × 𝑝(𝑥)

                     𝐸(𝑋 2 ) = (−2)2 × 0,2 + (−1)2 × 0,1 + 02 × 0,4 + 12 × 0,1 + 22 × 0,2

                                    𝐸(𝑋 2 ) = 4 × 0,2 + 0,1 + 0,1 + 4 × 0,2 = 1,8

Como 𝐸(𝑋) = 0, esse é o valor da própria variância:

                                                 𝑉(𝑋) = 1,8 − 02 = 1,8

Gabarito: A

14.   (FGV/2022 – MPE/SC) As variáveis aleatórias X e Y são tais que Var(X)= 1, Var(Y) = 4 e
Cov(X,Y) = −1. O valor de Var(Y - 2X) é:

a) 0

b) 4

c) 6

d) 8

e) 12

Comentários:

Para calcular a variância da diferença, somamos as variâncias e subtraímos o dobro da covariância:

                               𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟(2𝑋) − 2. 𝐶𝑜𝑣(𝑌, 2𝑋)

Quando multiplicamos uma variável por uma constante, a covariância é multiplicada pela mesma
constante, enquanto a variância é multiplicada pelo quadrado da constante:

                             𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 22 . 𝑉𝑎𝑟(𝑋) − 2 × 2. 𝐶𝑜𝑣(𝑌, 𝑋)

                                𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 4. 𝑉𝑎𝑟(𝑋) − 4. 𝐶𝑜𝑣(𝑌, 𝑋)

O enunciado informa que 𝑉𝑎𝑟(𝑋) = 1, 𝑉𝑎𝑟(𝑌) = 4 e 𝐶𝑜𝑣(𝑋, 𝑌) = −1, logo:

        Receita Federal (Analista Tributário) Estatística                                            60
        www.estrategiaconcursos.com.br                                                               83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                               𝑉𝑎𝑟(𝑌 − 2𝑋) = 4 + 4 × 1 − 4 × (−1) = 4 + 4 + 4 = 12

Gabarito: E

15.      (FGV/2022 – TCE/TO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                        Valores de X          -3     -1    0     1     3
                                       Probabilidades         0,1   0,2   0,3   0,2   0,2

A média de X é igual a

a) 0,1

b) 0,2

c) 0,3

d) 0,4

e) 0,5

Comentários:

Para calcular a média de uma variável discreta, multiplicamos cada um dos seus valores pela respectiva
probabilidade e somamos os produtos:

                                                      𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥)

         𝐸(𝑋) = −3 × 0,1 − 1 × 0,2 + 0 × 0,3 + 1 × 0,2 + 3 × 0,2 = −0,3 − 0,2 + 0 + 0,2 + 0,6 = 0,3
Gabarito: C

16.      (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                           Valores de X          0     3    10    12
                                          Probabilidades        0,2   0,1   0,3   0,4

A média e a mediana de X são respectivamente iguais a

a) 8,1 e 10


          Receita Federal (Analista Tributário) Estatística                                           61
          www.estrategiaconcursos.com.br                                                              83

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 8,1 e 3,0
c) 8,5 e 6,5
d) 8,1 e 6,5
e) 8,5 e 10

Comentários:

Para calcular a média de uma variável discreta, multiplicamos cada um dos seus valores pela respectiva
probabilidade e somamos os produtos:

                                                     𝐸 (𝑋) = ∑ 𝑥. 𝑝(𝑥)

                  𝐸(𝑋) = 0 × 0,2 + 3 × 0,1 + 10 × 0,3 + 12 × 0,4 = 0 + 0,3 + 3 + 4,8 = 8,1
Já a mediana é o valor que divide a distribuição em duas partes, de modo que pelo menos 50% sejam
menores ou iguais à mediana e pelo menos 50% sejam maiores ou iguais à mediana.
Pela tabela, observamos que a mediana é X = 10, pois a probabilidade associada aos valores menores ou
iguais é 0,2 + 0,1 + 0,3 = 0,6; e a probabilidade associada aos valores maiores ou iguais é 0,4 + 0,3 = 0,7.
Gabarito: A

17.      (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                          Valores de X        0     2     6     8
                                         Probabilidades      0,2   0,3   0,3   0,2

A variância de X é igual a

a) 7,2
b) 7,6
c) 8,0
d) 8,4
e) 8,8

Comentários:

Podemos calcular a variância pela seguinte fórmula:
                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2


         Receita Federal (Analista Tributário) Estatística                                               62
         www.estrategiaconcursos.com.br                                                                  83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para calcular a esperança, multiplicamos os valores da variável pela respectiva probabilidade e somamos
os produtos:

                                                       𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥)

                      𝐸(𝑋) = 0 × 0,2 + 2 × 0,3 + 6 × 0,3 + 8 × 0,2 = 0 + 0,6 + 1,8 + 1,6 = 4
Agora, vamos calcular 𝐸(𝑋 2 ):

                                                      𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥)

                                   𝐸(𝑋 2 ) = 02 × 0,2 + 22 × 0,3 + 62 × 0,3 + 82 × 0,2
                      𝐸(𝑋 2 ) = 0 + 4 × 0,3 + 36 × 0,3 + 64 × 0,2 = 1,2 + 10,8 + 12,8 = 24,8
E a variância é:
                                           𝑉(𝑋) = 24,8 − 42 = 24,8 − 16 = 8,8
Gabarito: E

18.    (FGV/2022 – TRT/PB) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                                x         2     4     6     8    10
                                               p(x)      0,2   0,1   0,4   0,1   0,2

A soma dos valores da média e da variância de Y = 2X + 5 é igual a

a) 32,0.
b) 36,8.
c) 40,2.
d) 45,8.
e) 52,4.

Comentários:

Essa questão pede a soma da média com a variância de Y = 2X + 5. Para isso, vamos primeiro calcular a
média e a variância de X.
Calculamos a média de X, multiplicando cada um dos seus valores pela respectiva probabilidade e somamos
os resultados:

                                                   𝜇 = 𝐸(𝑋) = ∑ 𝑥 × 𝑝(𝑥)


           Receita Federal (Analista Tributário) Estatística                                        63
           www.estrategiaconcursos.com.br                                                           83

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                              𝐸(𝑋) = 2 × 0,2 + 4 × 0,1 + 6 × 0,4 + 8 × 0,1 + 10 × 0,2

                                          𝐸(𝑋) = 0,4 + 0,4 + 2,4 + 0,8 + 2 = 6

Para calcular a variância, calculamos o quadrado do desvio de cada elemento em relação à média,
multiplicamos pela probabilidade do elemento e somamos os resultados:

                                               𝑉𝑎𝑟(𝑋) = ∑(𝑥 − 𝜇)2 × 𝑝(𝑥)

      𝑉𝑎𝑟(𝑋) = (2 − 6)2 × 0,2 + (4 − 6)2 × 0,1 + (6 − 6)2 × 0,4 + (8 − 6)2 × 0,1 + (10 − 6)2 × 0,2
                  𝑉𝑎𝑟(𝑋) = (−4)2 × 0,2 + (−2)2 × 0,1 + (0)2 × 0,4 + (2)2 × 0,1 + (4)2 × 0,2
                                𝑉𝑎𝑟(𝑋) = 16 × 0,2 + 4 × 0,1 + 0 + 4 × 0,1 + 16 × 0,2
                                       𝑉𝑎𝑟(𝑋) = 3,2 + 0,4 + 0 + 0,4 + 3,2 = 7,2
                                                              ==219a34==

Agora, vamos calcular a média e a variância de Y = 2X + 5. Pelas propriedades da esperança, quando uma
variável é multiplicada por uma constante, o valor esperado também é multiplicado pela mesma constante;
e quando uma variável é adicionada de uma constante, o valor esperado também é adicionado da mesma
constante:
                                𝐸(𝑌) = 𝐸(2. 𝑋 + 5) = 2 × 𝐸(𝑋) + 5 = 2 × 6 + 5 = 17
Pelas propriedades da variância, quando uma variável é multiplicada por uma constante, a variância é
multiplicada pelo quadrado da constante; e quando uma variável é adicionada de uma constante, a
variância não se altera:
                              𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(2. 𝑋 + 5) = 22 × 𝑉𝑎𝑟(𝑋) = 4 × 7,2 = 28,8
E a soma da esperança com a variância de Y é:
                                           𝐸(𝑌) + 𝑉𝑎𝑟(𝑌) = 17 + 28,8 = 45,8
Gabarito: D

19.       (FGV/2022 – TRT/PB) 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 são variáveis aleatórias independentes tais que

   𝑬(𝑿𝟏 ) = 𝟐,         𝑽𝒂𝒓(𝑿𝟏 ) = 𝟗,          𝑬(𝑿𝟐 ) = −𝟏,                 𝑽𝒂𝒓(𝑿𝟐 ) = 𝟒,   𝑬(𝑿𝟑 ) = 𝟐,   𝑽𝒂𝒓(𝑿𝟑 ) = 𝟏

Se 𝒀 = 𝟑𝑿𝟏 − 𝟑𝑿𝟐 + 𝟒𝑿𝟑 , então a soma dos valores da média e da variância de Y é igual a
a) 150.
b) 160.
c) 170.
d) 180.
e) 200.


          Receita Federal (Analista Tributário) Estatística                                                             64
          www.estrategiaconcursos.com.br                                                                                83

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Comentários:

Pelas propriedades da esperança, a esperança da soma de variáveis é igual à soma das esperanças; e a
esperança da diferença entre variáveis é igual à diferença das esperanças. Além disso, quando uma variável
é multiplicada por uma constante, a esperança da variável também é multiplicada pela mesma constante.
Assim, a esperança de Y é dada por:
                         𝐸(𝑌) = 𝐸(3𝑋1 − 3𝑋2 + 4𝑋3 ) = 3. 𝐸(𝑋1 ) − 3. 𝐸(𝑋2 ) + 4. 𝐸(𝑋3 )
Sabendo que 𝐸(𝑋1 ) = 2, 𝐸(𝑋2 ) = −1 e 𝐸(𝑋3 ) = 2, temos:
                               𝐸(𝑌) = 3 × 2 − 3 × (−1) + 4 × 2 = 6 + 3 + 8 = 17
Em relação à variância, para variáveis independentes, a variância tanto da soma quanto da diferença entre
as variáveis é igual à soma das variâncias. Além disso, quando uma variável é multiplicada por uma
constante, a variância da variável é multiplicada pelo quadrado dessa constante. Assim, a variância de Y é
dada por:
                𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(3𝑋1 − 3𝑋2 + 4𝑋3 ) = 32 . 𝑉𝑎𝑟(𝑋1 ) + 32 . 𝑉𝑎𝑟(𝑋2 ) + 42 . 𝑉𝑎𝑟(𝑋3 )
                                 𝑉𝑎𝑟(𝑌) = 9. 𝑉𝑎𝑟(𝑋1 ) + 9. 𝑉𝑎𝑟(𝑋2 ) + 16. 𝑉𝑎𝑟(𝑋3 )
Sabendo que 𝑉𝑎𝑟(𝑋1 ) = 9, 𝑉𝑎𝑟(𝑋2 ) = 4 e 𝑉𝑎𝑟(𝑋3 ) = 1, temos:
                            𝑉𝑎𝑟(𝑌) = 9 × 9 + 9 × 4 + 16 × 1 = 81 + 36 + 16 = 133
E a soma da variância com a esperança é:
                                          𝐸(𝑌) + 𝑉𝑎𝑟(𝑌) = 17 + 133 = 150
Gabarito: A

20.    (FGV/2022 – TRT/PB) X e Y são variáveis aleatórias tais que:

E[X] = 5, E[Y] = 3, Var[X] = 16, Var[Y] = 4, E[XY] = 10

O coeficiente de correlação entre X e Y é igual a
a) – 0,625.
b) – 0,240.
c) 0,166.
d) 0,348.
e) 0,765.

Comentários:

O coeficiente de correlação é calculado pela razão entre a covariância e o produto dos desvios padrão:

        Receita Federal (Analista Tributário) Estatística                                                65
        www.estrategiaconcursos.com.br                                                                   83

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 07

                                                               𝐶𝑜𝑣(𝑋, 𝑌)
                                                         𝜌=
                                                                𝜎𝑥 × 𝜎𝑦
Por sua vez, a covariância é a diferença entre a esperança de XY e o produto das esperanças:
                                            𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋𝑌) − 𝐸(𝑋) × 𝐸(𝑌)
Sabendo que 𝐸(𝑋𝑌) = 10, 𝐸(𝑋) = 5 e 𝐸(𝑌) = 3, a covariância é:
                                         𝐶𝑜𝑣(𝑋, 𝑌) = 10 − 5 × 3 = 10 − 15 = −5
E os desvios padrão são a raiz das variâncias. Sabendo que 𝑉𝑎𝑟(𝑋) = 16 e 𝑉𝑎𝑟(𝑌) = 4, os desvios padrão
de X e Y são, respectivamete:

                                                  𝜎𝑥 = √𝑉𝑎𝑟[𝑋] = √16 = 4

                                                   𝜎𝑦 = √𝑉𝑎𝑟[𝑌] = √4 = 2
Agora, podemos calcular o coeficiente de correlação:
                                                        −5   −5
                                                  𝜌=       =    = −0,625
                                                       2×4   8
Gabarito: A

21.   (FGV/2022 – TRT/PB) Avalie se as seguintes afirmativas acerca da mediana de uma variável
aleatória X estão corretas:

  I.     Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[X ≥ m] ≥ 0,5.
 II.     A mediana é uma medida mais resistente a valores extremos do que a média.
III.     Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana
         de X é menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

Comentários:

Em relação à afirmativa I, a mediana divide a distribuição, de modo que pelo menos 50% dos valores são
menores ou iguais à mediana, e pelo menos 50% dos valores são maiores ou iguais à mediana.
Assim, sendo 𝑚 a mediana, temos:


           Receita Federal (Analista Tributário) Estatística                                       66
           www.estrategiaconcursos.com.br                                                          83

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                      𝑃(𝑋 ≤ 𝑚) ≥ 50%,           𝑃(𝑋 ≥ 𝑚) ≥ 50%
Logo, a afirmativa I está correta.
Em relação a afirmativa II, a mediana depende principalmente da ordem dos elementos da distribuição.
Assim, se um elemento é um pouco menor ou muito menor que a mediana, isso não influencia no valor da
mediana. A situação com os valores maiores que a mediana é análoga.
Por outro lado, o valor do elemento afeta diretamente no cálculo da média. Então, de fato, a mediana é mais
resistente a extremos do que a média; e a afirmativa II está correta.
Em relação à afirmativa III, se a distribuição tem assimetria negativa (cauda esquerda mais longa), em que
há uma quantidade maior de valores inferiores à moda, temos:
                                                Média < Mediana < Moda
Ou seja, a mediana é maior que a média (não menor); e a afirmativa III está incorreta.
Gabarito: B

22.    (FGV/2022 – Senado Federal) João propõe a Maria um jogo de apostas. Ele joga dois dados,
pagando a ela 5 reais se saírem dois números não consecutivos. Para que o jogo seja honesto, Maria
deve, caso perca a aposta, pagar a João a quantia de

a) 12 reais.

b) 13 reais.

c) 14 reais.

d) 15 reais.

e) 16 reais.

Comentários:

Para que o jogo seja honesto, o ganho esperado de Maria deve ser igual ao ganho de João. Para isso,
precisamos das probabilidades de cada um ganhar a aposta.
O enunciado informa que Maria ganha a aposta se saírem dois números não consecutivos no lançamento
de dois dados. Assim, ela perde se saírem dois números consecutivos.
As possibilidades são:
                                            {(1,2), (2,3), (3,4), (4,5), (5,6)}
O número menor pode estar no primeiro ou no segundo dado, logo, o número de possibilidades é o dobro:

        Receita Federal (Analista Tributário) Estatística                                               67
        www.estrategiaconcursos.com.br                                                                  83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                    n(João) = 2 x 5 = 10
E o número total de possibilidades é:
                                                      n(U) = 6 x 6 = 36
Assim, a probabilidade de João ganhar a aposta é a razão:
                                                                    10
                                                        𝑃(𝐽𝑜ã𝑜) =
                                                                    36
E a probabilidade de Maria ganhar é complementar:
                                                                    10 26
                                                𝑃(𝑀𝑎𝑟𝑖𝑎) = 1 −        =
                                                                    36 36
Sabendo que Maria ganha 5 reais se ganhar a aposta, o seu ganho esperado é:
                                                                    26 130
                                                𝐸(𝑀𝑎𝑟𝑖𝑎) = 5 ×         =
                                                                    36   36
Considerando que esse deve ser o ganho esperado de João, então o valor que ele deve receber, caso ganhe
a aposta é:
                                                            10 130
                                                 𝐸(𝐽𝑜ã𝑜) = 𝑟 × =
                                                            36    36
                                                       130 36
                                                    𝑟=    ×   = 13
                                                       36 10
Gabarito: B

23.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória discreta X tem os seguintes valores
possíveis e probabilidades associadas:

  x      -1      1       3
 p(x)    0,4    0,2     0,4

A variância de X é igual a:

a) 2,0

b) 2,4

c) 2,8

d) 3,2

e) 3,6


         Receita Federal (Analista Tributário) Estatística                                          68
         www.estrategiaconcursos.com.br                                                             83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Comentários:

Para calcular a variância, primeiro precisamos da média (ou esperança), dada pela soma dos produtos dos
valores da variável pelas respectivas probabilidades:

                       𝐸(𝑋) = (−1) × 0,4 + 1 × 0,2 + 3 × 0,4 = −0,4 + 0,2 + 1,2 = 1,0

Agora, calculamos os desvios de cada resultado em relação à média e elevamos cada desvio ao quadrado.

Em seguida, multiplicamos cada quadrado pela respectiva probabilidade e somamos todos os resultados:

                                         𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)

                                                   x         -1      1        3
                                                 p(x)        0,4    0,2      0,4
                                               x - E(X)      -2      0        2
                                             [x - E(X)]2      4      0        4
                                          [x - E(X)]2.p(x)   1,6     0       1,6

A variância é a soma dos resultados da última linha:

                                              𝑉(𝑋) = 1,6 + 0 + 1,6 = 3,2

Gabarito: D

24.   (FGV/2021 – IMBEL) O estado de uma máquina pode ser representado por uma variável
aleatória X, cujos valores indicam se a máquina está funcionando (x=1), operando parcialmente
(x=1/2) ou em manutenção (x=0).

A função de probabilidade desta variável aleatória é expressa a seguir:

                                                         𝟎, 𝟐, 𝒙 = 𝟎
                                                                   𝟏
                                                 𝒑(𝒙) = {𝟎, 𝟑, 𝒙 = }
                                                                   𝟐
                                                         𝟎, 𝟓, 𝒙 = 𝟏

O valor esperado e a variância desta variável valem, respectivamente,

a) 0,50 e 0,1525

b) 0,50 e 0,1575

c) 0,65 e 0,1525


        Receita Federal (Analista Tributário) Estatística                                           69
        www.estrategiaconcursos.com.br                                                              83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) 0,65 e 0,1575

e) 0,75 e 0,1575

Comentários:

Pela função de probabilidade apresentada:

   •    a probabilidade de 𝑋 = 0 é 𝑃(𝑋 = 0) = 0,2;
                               1          1
   •    a probabilidade de 𝑋 = 2 é 𝑃 (𝑋 = 2) = 0,3; e
   •    a probabilidade de 𝑋 = 1 é 𝑃(𝑋 = 1) = 0,5.

Para calcular o valor esperado, multiplicamos os valores da variável pelas respectivas probabilidades e
somamos os produtos:

                                                 𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

                                                   1
                           𝐸(𝑋) = 0 × 0,2 +          × 0,3 + 1 × 0,5 = 0 + 0,15 + 0,5 = 0,65
                                                   2

Para calcular a variância, primeiro calculamos os desvios de cada resultado em relação à média (ou
esperança) e elevamos o resultado ao quadrado, conforme indicado na tabela a seguir:

                                              𝑋      𝑋 − 𝐸(𝑋)    [𝑋 − 𝐸(𝑋)]2
                                              0        -0,65       0,4225
                                             0,5       -0,15       0,0225
                                              1        0,35        0,1225

Agora, multiplicamos esses resultados pelas respectivas probabilidades:

                                          𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)

       𝑉(𝑋) = 0,4225 × 0,2 + 0,0225 × 0,3 + 0,1225 × 0,5 = 0,0845 + 0,00675 + 0,06125 = 0,1525

Gabarito: C

25.    (FGV/2021 – FunSaúde/CE) X e Y são variáveis aleatórias independentes, com médias E[X] =
2 e E[Y] = 4 e variâncias Var[X] = 2 e Var[Y] = 5.

A variável W = 4Y – 3X tem média e variância iguais, respectivamente, a

a) 8 e 56;


         Receita Federal (Analista Tributário) Estatística                                          70
         www.estrategiaconcursos.com.br                                                             83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 8 e 62;

c) 8 e 74;

d) 10 e 98;

e) 10 e 106;

Comentários:

Essa questão pede a esperança e a variância de W = 4Y - 3X, dadas as esperanças e variâncias de Y e X e
sabendo que são variáveis independentes, ou seja, a covariância entre elas é nula.

Vamos começar pela esperança:

                                                  𝐸(𝑊) = 𝐸(4𝑌 − 3𝑋)

Pelas propriedades da esperança e sabendo que E(X) = 2 e E(Y) = 4, temos:

                           𝐸(𝑊) = 4. 𝐸(𝑌) − 3. 𝐸(𝑋) = 4 × 4 − 3 × 2 = 16 − 6 = 10

Em relação à variância, sabendo que as variáveis são independentes, então a variância da diferença será
igual à soma das variâncias:

                                      𝑉(𝑊) = 𝑉(4𝑌 − 3𝑊) = 𝑉(4𝑌) + 𝑉(3𝑊)

Pelas propriedades da variância, quando multiplicamos uma variável por uma constante, a variância é
multiplicada pela constante ao quadrado:

                               𝑉(𝑊) = 42 . 𝑉(𝑌) + 32 . 𝑉(𝑊) = 16. 𝑉(𝑌) + 9. 𝑉(𝑊)

Sabendo que V(X) = 2 e V(Y) = 5, calculamos a variância de W:

                                      𝑉(𝑊) = 16 × 5 + 9 × 2 = 80 + 18 = 98

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                           71
        www.estrategiaconcursos.com.br                                                              83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                   LISTA DE QUESTÕES – FGV

Noções de variáveis discretas

1.    (FGV/2024 – Pref. São José dos Campos) Considere uma variável aleatória X com os
seguintes momentos: E(X) = 4 e E(X2) = 25. O desvio padrão de X é igual a:

a) 3

b) 9

c) √21

d) √29

e) 2,5

2.    (FGV/2023 – TJ/SE) Se X é uma variável aleatória com média 20 e variância 4, então a
variável Y = 5X – 100 tem média e variância iguais, respectivamente, a:

a) 0 e 4

b) 0 e 20

c) 0 e 100

d) 100 e 4

e) 100 e 20

3.    (FGV/2023 – TJ/SE) Sabe-se que a variância da variável aleatória X é igual a 8, enquanto a
da variável aleatória Y é 2. Além disso, a variância de X-Y é nula. Então, a covariância entre X e Y
vale:

a) 0

b) 1

c) 3

d) 5

e) 7

           Receita Federal (Analista Tributário) Estatística                                     72
           www.estrategiaconcursos.com.br                                                        83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

4.    (FGV/2023 – TJ/SE) A medida utilizada para comparar a variabilidade de variáveis com
diferentes desvios padrões e diferentes médias é:

a) coeficiente de correlação de Pearson;

b) coeficiente de correlação de Spearman;

c) coeficiente de variação;

d) covariância;

e) quantil.

5.    (FGV/2023 – Câmara dos Deputados) A função de probabilidade de uma variável aleatória
discreta X é dada por:

  x        0      1       2       3
 p(x)     0,2    0,3     0,3     0,2

No caso, a variância de X é igual a

a) 1,05

b) 1,15

c) 1,25

d) 1,35

e) 1,45

6.    (FGV/2023 – Câmara dos Deputados) Observe a seguinte amostra de notas de cinco
alunos:

                                                      6, 6, 8, 10, 10

A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média,
é igual a

a) 2,4

b) 2,8

c) 3,2

          Receita Federal (Analista Tributário) Estatística                               73
          www.estrategiaconcursos.com.br                                                  83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) 3,6

e) 4,0

7.     (FGV/2023 – Câmara dos Deputados) Avalie se as seguintes afirmativas acerca do
coeficiente de correlação linear 𝝆 entre duas variáveis aleatórias contínuas estão corretas.

I - O módulo de 𝝆 é sempre menor ou igual a 1.

II - Se 𝝆 = 𝟎, as duas variáveis são independentes.

III - Valores de 𝝆 próximos de + 1 indicam uma correlação positiva forte.

Está correto o que se afirma em

a) I, apenas

b) II, apenas

c) I e II, apenas

d) I e III, apenas

e) II e III, apenas

8.       (FGV/2023 – RFB) Uma variável aleatória discreta X tem função de probabilidade dada
por

  x        0     1       2       3
 p(x)     0,5   0,2     0,1     0,2

A probabilidade de que o valor de X seja maior do que 2 é igual a

a) 10%

b) 20%

c) 25%

d) 30%

e) 50%

         Receita Federal (Analista Tributário) Estatística                                74
         www.estrategiaconcursos.com.br                                                   83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

9.    (FGV/2023 – RFB) Edson e Roberto fazem uma aposta jogando dois dados, ambos
regulares. Edson ganha a aposta se saírem dois números maiores do que 3. Caso contrário, ganha
Roberto. Eles pretendem fazer um jogo honesto. Se perder, Edson pagará a Roberto 10 reais.
Então, se perder, Roberto deverá pagar a Edson

a) 18 reais
b) 24 reais
c) 30 reais
d) 42 reais
e) 46 reais

10.    (FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte
distribuição de probabilidade:

                                                       X     Prob(X)
                                                       0        0
                                                       1       1/4
                                                       2       1/4
                                                       3        K

O valor de K e o valor esperado de X são, respectivamente,

a) 0 e 3/4
b) 1/4 e 3/2
c) 1/2 e 3/4
d) 1/2 e 3/2
e) 1/2 e 9/4

11.  (FGV/2022 – SEFAZ/BA) Uma variável aleatória discreta X tem a seguinte distribuição de
probabilidades:

  x       1      3       5      10
 p(x)    0,1    0,2     0,3     0,4

A média de X é igual a

a) 3,5

b) 4,0

         Receita Federal (Analista Tributário) Estatística                                 75
         www.estrategiaconcursos.com.br                                                    83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 5,4

d) 6,2

e) 7,0

12.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

  x   -2,0 -1,0          0,0     1,0      2
 p(x) 0,2 0,1            0,4     0,1      k

A média de X é igual a:

a) -0,4
b) -0,3
c) -0,2
d) 0,0
e) 0,5

13.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

  x   -2,0 -1,0          0,0     1,0      2
 p(x) 0,2 0,1            0,4     0,1      k

A variância de X é igual a:

a) 1,8
b) 2,0
c) 2,2
d) 2,4
e) 2,6

14.   (FGV/2022 – MPE/SC) As variáveis aleatórias X e Y são tais que Var(X)= 1, Var(Y) = 4 e
Cov(X,Y) = −1.

O valor de Var(Y - 2X) é:

          Receita Federal (Analista Tributário) Estatística                              76
          www.estrategiaconcursos.com.br                                                 83

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) 0
b) 4
c) 6
d) 8
e) 12

15.   (FGV/2022 – TCE/TO) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                     Valores de X            -3     -1    0     1     3
                                    Probabilidades           0,1   0,2   0,3   0,2   0,2

A média de X é igual a

a) 0,1

b) 0,2

c) 0,3

d) 0,4

e) 0,5

16.   (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                        Valores de X            0     3    10    12
                                       Probabilidades          0,2   0,1   0,3   0,4

A média e a mediana de X são respectivamente iguais a

a) 8,1 e 10

b) 8,1 e 3,0

c) 8,5 e 6,5

d) 8,1 e 6,5

e) 8,5 e 10

         Receita Federal (Analista Tributário) Estatística                                 77
         www.estrategiaconcursos.com.br                                                    83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

17.   (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                          Valores de X                        0      2      6      8
                                         Probabilidades                      0,2    0,3    0,3    0,2

A variância de X é igual a

a) 7,2

b) 7,6

c) 8,0

d) 8,4                                                         ==219a34==

e) 8,8

18.   (FGV/2022 – TRT/PB) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                              x         2                    4      6      8     10
                                             p(x)      0,2                  0,1    0,4    0,1    0,2

A soma dos valores da média e da variância de Y = 2X + 5 é igual a

a) 32,0.

b) 36,8.

c) 40,2.

d) 45,8.

e) 52,4.

19.       (FGV/2022 – TRT/PB) 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 são variáveis aleatórias independentes tais que

 𝑬(𝑿𝟏 ) = 𝟐,          𝑽𝒂𝒓(𝑿𝟏 ) = 𝟗,          𝑬(𝑿𝟐 ) = −𝟏,                         𝑽𝒂𝒓(𝑿𝟐 ) = 𝟒,         𝑬(𝑿𝟑 ) = 𝟐,   𝑽𝒂𝒓(𝑿𝟑 ) = 𝟏

Se 𝒀 = 𝟑𝑿𝟏 − 𝟑𝑿𝟐 + 𝟒𝑿𝟑 , então a soma dos valores da média e da variância de Y é igual a

a) 150.

           Receita Federal (Analista Tributário) Estatística                                                                     78
           www.estrategiaconcursos.com.br                                                                                        83

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 07

b) 160.

c) 170.

d) 180.

e) 200.

20.       (FGV/2022 – TRT/PB) X e Y são variáveis aleatórias tais que:

E[X] = 5, E[Y] = 3, Var[X] = 16, Var[Y] = 4, E[XY] = 10

O coeficiente de correlação entre X e Y é igual a

a) – 0,625.

b) – 0,240.

c) 0,166.

d) 0,348.

e) 0,765.

21.   (FGV/2022 – TRT/PB) Avalie se as seguintes afirmativas acerca da mediana de uma
variável aleatória X estão corretas:

  I.      Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[X ≥ m] ≥ 0,5.
 II.      A mediana é uma medida mais resistente a valores extremos do que a média.
III.      Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da
          mediana de X é menor do que o da média de X.
Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas.

e) I, II e III.

           Receita Federal (Analista Tributário) Estatística                              79
           www.estrategiaconcursos.com.br                                                 83

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

22.   (FGV/2022 – Senado Federal) João propõe a Maria um jogo de apostas. Ele joga dois dados,
pagando a ela 5 reais se saírem dois números não consecutivos. Para que o jogo seja honesto,
Maria deve, caso perca a aposta, pagar a João a quantia de

a) 12 reais.

b) 13 reais.

c) 14 reais.

d) 15 reais.

e) 16 reais.

23.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória discreta X tem os seguintes valores
possíveis e probabilidades associadas:

  x      -1      1       3
 p(x)    0,4    0,2     0,4

A variância de X é igual a:

a) 2,0

b) 2,4

c) 2,8

d) 3,2

e) 3,6

24.   (FGV/2021 – IMBEL) O estado de uma máquina pode ser representado por uma variável
aleatória X, cujos valores indicam se a máquina está funcionando (x=1), operando parcialmente
(x=1/2) ou em manutenção (x=0).

A função de probabilidade desta variável aleatória é expressa a seguir:

                                                        𝟎, 𝟐, 𝒙 = 𝟎
                                                                  𝟏
                                                𝒑(𝒙) = {𝟎, 𝟑, 𝒙 = }
                                                                  𝟐
                                                        𝟎, 𝟓, 𝒙 = 𝟏

O valor esperado e a variância desta variável valem, respectivamente,

         Receita Federal (Analista Tributário) Estatística                                 80
         www.estrategiaconcursos.com.br                                                    83

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) 0,50 e 0,1525

b) 0,50 e 0,1575

c) 0,65 e 0,1525

d) 0,65 e 0,1575

e) 0,75 e 0,1575

25.    (FGV/2021 – FunSaúde/CE) X e Y são variáveis aleatórias independentes, com médias E[X]
= 2 e E[Y] = 4 e variâncias Var[X] = 2 e Var[Y] = 5.

A variável W = 4Y – 3X tem média e variância iguais, respectivamente, a

a) 8 e 56;

b) 8 e 62;

c) 8 e 74;

d) 10 e 98;

e) 10 e 106;

         Receita Federal (Analista Tributário) Estatística                                81
         www.estrategiaconcursos.com.br                                                   83

                                       


---

Equipe Exatas Estratégia Concursos
Aula 07

                                                GABARITO
 1.   LETRA A                                10. LETRA E                 19. LETRA A
 2.   LETRA C                                11. LETRA D                 20. LETRA A
 3.   LETRA D                                12. LETRA D                 21. LETRA B
 4.   LETRA C                                13. LETRA A                 22. LETRA B
 5.   LETRA A                                14. LETRA E                 23. LETRA D
 6.   LETRA C                                15. LETRA C                 24. LETRA C
 7.   LETRA D                                16. LETRA A                 25. LETRA D
 8.   LETRA B                                17. LETRA E
 9.   LETRA C                                18. LETRA D

      Receita Federal (Analista Tributário) Estatística                                82
      www.estrategiaconcursos.com.br                                                   83

                                    


---

---
