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
arquivo_origem: Aula 19_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '19'
titulo_aula: Estatística
---

# Estatística

Aula Extra
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                            27 de Março de 2023

---

      Equipe Exatas Estratégia Concursos
      Aula Extra

                                                                                     Índice
1) Questões Extras Comentadas - FGV - Estatística


2) Lista de Questões Extras - FGV - Estatística

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           59

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                   QUESTÕES EXTRAS COMENTADAS – FGV

Teoria da Probabilidade

1.    (FGV/2022 – TRT/MA) Dois dados serão lançados aleatoriamente sobre uma mesa e os
números resultantes nas faces superiores serão anotados. Se X é o valor absoluto de diferença
entre os dois números, então a probabilidade de que X seja igual a 3 é igual a

a) 1/12
b) 1/8
c) 1/6
d) 1/3
e) 1/2

Comentários:

A probabilidade pode ser calculada pela razão entre o número de eventos favoráveis e o número
total de eventos possíveis:
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                           𝑃=                     =
                                                 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
Sabendo que cada dado possui 6 faces e que serão lançados dois dados, o número total de
eventos possíveis é o produto (princípio multiplicativo):

                                                   𝑛(𝑈) = 6 × 6 = 36

Em relação aos eventos favoráveis, para que a diferença entre os resultados seja igual a 3, temos
as seguintes possibilidades:

                                                   {(1, 4), (2, 5), (3, 6)}

Essa quantidade deve ser multiplicada por 2, porque, para cada um desses resultados, há 2
possibilidades: o menor resultado (por exemplo, a face 1) pode vir no primeiro dado e o maior (no
caso, a face 4) no segundo dado; OU o maior (a face 4) no primeiro dado e o menor (a face 1) no
segundo. Assim, o número de eventos favoráveis é:

                                                    𝑛(𝐴) = 2 × 3 = 6

E a probabilidade é:
                                                         𝑛(𝐴)   6   1
                                                   𝑃=         =   =
                                                         𝑛(𝑈) 36 6
Gabarito: C


          Receita Federal (Analista Tributário) Estatística                                    3
          www.estrategiaconcursos.com.br                                                      59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

2.    (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados,
aleatoriamente, entre os números −3, −2, −1, 0, 1, 2, 3, 4.

A probabilidade de que o produto dos dois números sorteados seja maior do que zero é:

a) 1/2.
b) 9/28.
c) 19/28.
d) 19/56.
e) 23/56.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                           𝑃=                     =
                                                 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O total de eventos corresponde ao número de maneiras de sortear 2 números, dentre 8. Como
vamos calcular o produto, a ordem não importa:
                                                          8!         8 × 7 × 6!
                                   𝑛(𝑈) = 𝐶8,2 =                   =            = 28
                                                     (8 − 2)! × 2!     6! × 2
Para que o produto seja maior do que zero, precisamos sortear dois números positivos ou dois
números negativos. O número de maneiras de sortear 2 números positivos, dentre 4
possibilidades, sem que a ordem importe é a combinação:
                                                            4!         4 × 3 × 2!
                                  𝑛(+, +) = 𝐶4,2 =                   =            =6
                                                       (4 − 2)! × 2!     2! × 2
E o número de maneiras de sortear 2 números negativos, dentre 3 possibilidades, sem que a
ordem importe é a combinação:
                                                              3!        3 × 2!
                                    𝑛(−, −) = 𝐶3,2 =                  =        =3
                                                         (3 − 2)! × 2! 1! × 2!

Os eventos favoráveis correspondem a soma dessas possibilidades, por serem mutuamente
exclusivas (princípio aditivo):

                                                    𝑛(𝐴) = 6 + 3 = 9

E a probabilidade é a razão:

          Receita Federal (Analista Tributário) Estatística                               4
          www.estrategiaconcursos.com.br                                                 59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                                              𝑛(𝐴)   9
                                                      𝑃=           =
                                                              𝑛(𝑈) 28
Gabarito: B

3.    (FGV/2022 – Câmara de Taubaté/SP) Em uma urna há 6 bolas numeradas de 1 a 6. Retiram-
se da urna, aleatoriamente, 2 bolas em sequência e sem reposição.

A probabilidade de o maior número nas bolas retiradas ser igual a 4 é:

a) 1/2.
b) 2/3.
c) 1/5.
d) 2/5.
e) 3/5.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                           𝑃=                     =
                                                 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O total de eventos corresponde ao número de maneiras de sortear 2 números, dentre 6, sem
reposição (ou seja, os números serão distintos). Como precisamos do maior número dentre as
bolas retiradas, a ordem não importa:
                                                          6!         6 × 5 × 4!
                                   𝑛(𝑈) = 𝐶6,2 =                   =            = 15
                                                     (6 − 2)! × 2!     4! × 2
Para que o maior número seja igual a 4, podemos retirar as bolas {(1 e 4), (2 e 4) ou (3 e 4)}. Assim,
há 3 possibilidades:

                                                         𝑛(𝐴) = 3

E a probabilidade é a razão:
                                                         𝑛(𝐴)   3   1
                                                   𝑃=         =   =
                                                         𝑛(𝑈) 15 5
Gabarito: C

          Receita Federal (Analista Tributário) Estatística                                         5
          www.estrategiaconcursos.com.br                                                           59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

4.     (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas
são retiradas do saco ao acaso.

A probabilidade de que as bolinhas retiradas tenham números consecutivos é, aproximadamente,
igual a:

a) 22%;
b) 28%;
c) 33%;
d) 39%;
e) 45%.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                           𝑃=                     =
                                                 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
Os eventos favoráveis correspondem ao número de maneiras de selecionar 2 bolas consecutivos,
quais sejam {(1 e 2), (2 e 3), (3 e 4), (4 e 5), (5 e 6), (6 e 7), (7 e 8), (8 e 9)}. Logo, há 𝑛(𝐴) = 8 eventos
favoráveis.

O total de eventos corresponde ao número de maneiras de sortear 2 bolas, dentre 9, sem que a
ordem importe:
                                                          9!         9 × 8 × 7!
                                   𝑛(𝑈) = 𝐶9,2 =                   =            = 36
                                                     (9 − 2)! × 2!     7! × 2
E a probabilidade é a razão:
                                                    𝑛(𝐴)   8  2
                                              𝑃=         =   = ≅ 22%
                                                    𝑛(𝑈) 36 9
Gabarito: A

5.     (FGV/2022 – TCE/TO) Uma urna contém inicialmente 5 bolas brancas e 3 bolas pretas.
Suponha que, inicialmente, uma primeira bola seja sorteada, sua cor observada, e que essa bola
seja devolvida à urna juntamente com duas outras bolas da mesma cor. Em seguida, outra bola
será sorteada, sua cor, observada, e essa bola será devolvida à urna juntamente com outras duas
da mesma cor. Em seguida, será sorteada uma terceira bola. Suponha ainda, que, a cada sorteio,
todas as bolas na urna sejam igualmente prováveis de serem sorteadas.

          Receita Federal (Analista Tributário) Estatística                                                 6
          www.estrategiaconcursos.com.br                                                                    59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

A probabilidade de que as três bolas sorteadas sejam pretas é então, aproximadamente, igual a:

a) 0,05
b) 0,07
c) 0,09
d) 0,11
e) 0,13

Comentários:

O enunciado informa que após retirarmos uma bola da urna e observarmos a sua cor, devolvemos
essa bola junto a 2 outras bolas da mesma cor. Assim, as probabilidades a cada extração
dependem dos resultados das extrações anteriores.

Sabendo que há inicialmente 5 bolas brancas e 3 bolas pretas (8 bolas ao total), a probabilidade
de retirar uma bola preta é:
                                                                     3
                                                              𝑃1 =
                                                                     8
Considerando que selecionamos uma bola preta, acrescentaremos então 2 bolas pretas,
resultando em 5 bolas pretas, dentre 10 bolas no total. Assim, a probabilidade de retirar a segunda
bola preta é:
                                                                 5   1
                                                       𝑃2 =        =
                                                                10 2
Considerando que selecionamos novamente uma bola preta, acrescentaremos então mais 2 bolas
pretas, resultando em 7 pretas, dentre 12 bolas no total. Assim, a probabilidade de retirar a
terceira bola preta é:
                                                                      7
                                                          𝑃3 =
                                                                     12
E a probabilidade de selecionarmos as 3 bolas pretas é o produto (interseção):
                                                               3 1 7   7
                                    𝑃 = 𝑃1 × 𝑃2 × 𝑃3 =          × ×  =   ≅ 0,11
                                                               8 2 12 64
Gabarito: D

6.    (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2
há 10 alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido
e conduzido à sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é
aleatoriamente escolhido.

A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a


          Receita Federal (Analista Tributário) Estatística                                      7
          www.estrategiaconcursos.com.br                                                        59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

a) 0,42
b) 0,47
c) 0,50
d) 0,53
e) 0,55

Comentários:

A probabilidade de sortear um aluno do sexo feminino da sala 2 depende do resultado do sorteio
da sala 1. Assim, vamos dividir os possíveis resultados em 2 cenários.

Cenário 1) Sorteio de um aluno do sexo masculino da sala 1.

A probabilidade de sortear um aluno do sexo masculino da sala 1, sabendo que há 12 alunos do
sexo masculino e 8 alunos do sexo feminino (20, no total) é:
                                                                 12 3
                                                     𝑃(𝑀1 ) =      =
                                                                 20 5
Sabendo que o aluno sorteado irá para a sala 2, então, nesse cenário, haverá 10 + 1 = 11 alunos
do sexo masculino e 9 alunos do sexo feminino na sala 2 (20, total). A probabilidade de sortear
um aluno do sexo feminino dessa sala, nessas condições, é:
                                                                      9
                                                      𝑃(𝐹2 |𝑀1 ) =
                                                                     20
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                               9 3  27
                                         𝑃(𝐹2 ∩ 𝑀1 ) =          × =    = 0,27
                                                              20 5 100
Cenário 2) Sorteio de um aluno do sexo feminino da sala 1.

A probabilidade de sortear um aluno do sexo feminino da sala 1, sabendo que há 12 alunos do
sexo masculino e 8 alunos do sexo feminino (20, no total) é:
                                                                  8   2
                                                     𝑃(𝐹1 ) =       =
                                                                 20 5
Nesse cenário, haverá 9 + 1 = 10 alunos do sexo feminino e 10 alunos do sexo masculino (20, no
total) na sala 2. A probabilidade de sortear um aluno do sexo feminino dessa sala, nessas
condições, é:
                                                                   10 1
                                                    𝑃(𝐹2 |𝐹1 ) =     =
                                                                   20 2
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                               1 2 1
                                             𝑃(𝐹2 ∩ 𝐹1 ) =      × = = 0,2
                                                               2 5 5

          Receita Federal (Analista Tributário) Estatística                                     8
          www.estrategiaconcursos.com.br                                                        59

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula Extra

E a probabilidade de sortear um aluno do sexo feminino da sala 2, considerando ambos os
cenários, é a soma (união de eventos mutuamente exclusivos):
                                              𝑃(𝐹2 ) = 0,27 + 0,2 = 0,47
Gabarito: B

7.     (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] =
𝟎, 𝟐 e 𝑷[𝑩] = 𝟎, 𝟓. A probabilidade condicional 𝑷[𝑨|𝑩] e as probabilidades 𝑷[𝑨 ∪ 𝑩] e 𝑷[𝑨 ∩ 𝑩]
valem respectivamente

a) 0,2; 0,6; 0,1
b) 0,1; 0,6; 0,2
c) 0,2; 0,3; 0,1
d) 0,2; 0,5; 0,1
e) 0,1; 0,6; 0,1

Comentários:

O enunciado informa que os eventos A e B são independentes. Portanto, a probabilidade
condicional P(A|B) é igual à não condicional:
                                                 𝑃(𝐴|𝐵) = 𝑃(𝐴) = 0,2
Ademais, a probabilidade da interseção é o produto das probabilidades:
                                   𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵) = 0,2 × 0,5 = 0,1
Conhecendo a probabilidade da interseção, podemos calcular a probabilidade da união, pela
fórmula correspondente:
                        𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,2 + 0,5 − 0,1 = 0,6
As probabilidades de 𝑃(𝐴|𝐵), 𝑃(𝐴 ∪ 𝐵) e 𝑃(𝐴 ∩ 𝐵) são, respectivamente: 0,2; 0,6; 0,1.

Gabarito: A

8.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
probabilidades P[A] > 0 e P[B] > 0, são falsas (F) ou verdadeiras (V):

   I.   Se A e B são mutuamente exclusivos então não são independentes.
  II.   Se A e B são independentes então P[A∩B] > 0.
 III.   Se A e B não são independentes, então P[A|B] ≠ P[A].

As afirmativas são respectivamente


         Receita Federal (Analista Tributário) Estatística                                  9
         www.estrategiaconcursos.com.br                                                    59

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

a) V, V e F
b) V, F e F
c) F, F e F
d) F, V e V
e) V, V e V

Comentários:

O enunciado informa que A e B são eventos com probabilidade maior que zero.

Em relação à afirmativa I, eventos mutuamente exclusivos são aqueles em que um não ocorre se
o outro ocorre, o que caracteriza eventos dependentes. Afinal, a probabilidade de um ocorrer,
dado que o outro ocorreu, é nula e, portanto, diferente da probabilidade não condicionada:
                                                 𝑃(𝐴|𝐵) = 0 ≠ 𝑃(𝐴)
                                                 𝑃(𝐵|𝐴) = 0 ≠ 𝑃(𝐵)
Assim, a afirmativa I é verdadeira, pois, de fato, esses eventos não são independentes.

Em relação à afirmativa II, a probabilidade da interseção de eventos independentes é o produto
das probabilidades:
                                              𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)
Sabendo que ambas as probabilidades são maiores que zero, então o produto também é maior
que zero. Portanto, a afirmativa II é verdadeira.

Em relação à afirmativa III, para eventos dependentes, a probabilidade condicionada é diferente
da probabilidade não condicionada:
                                                    𝑃(𝐴|𝐵) ≠ 𝑃(𝐴)
Logo, a afirmativa III também é verdadeira.

Gabarito: E

9.    (FGV/2022 – Senado Federal) Uma peça é colocada inicialmente na casa 1 de um tabuleiro
composto de dez casas, numeradas de 1 a 10. A peça avança uma casa se um número par é obtido
no lançamento de um dado. Caso o número obtido seja ímpar, a peça avança duas casas. O
procedimento é repetido sucessivamente.

A probabilidade de a peça saltar a casa 8, indo direto para a casa 9, é de

a) 13/128.
b) 23/128.
c) 33/128.


        Receita Federal (Analista Tributário) Estatística                                   10
        www.estrategiaconcursos.com.br                                                      59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

d) 43/128.
e) 53/128.

Comentários:

Para que a peça salte a casa 8, indo direto para a casa 9, ela precisa chegar na casa 7.

Para isso, temos as seguintes possibilidades, sabendo que a peça começa na casa 1 e que ela
avança 1 casa, se for obtido um número par; e 2 casas, se for obtido um número ímpar:

   •   Avançar uma casa por vez - para isso, devem ser obtidos 6 números pares. Sabendo que a
                                                1
       probabilidade de obter um número par é 2, a probabilidade de obter 6 números pares é:
                                                1 6   1
                                          𝑃1 = ( ) =
                                                2    64
   •   Avançar duas casas uma vez e 4 casas, sendo uma por vez - para isso, deve ser obtido 1
       número ímpar e 4 números pares. Sabendo que a probabilidade de obter um número par
                                     1
       ou um número ímpar é 2, a probabilidade de obter 1 número ímpar e 4 números pares (em
       determinada ordem) é:
                                                            1   1 4   1
                                                              ×( ) =
                                                            2   2    32

       Considerando que essa sequência de resultados pode acontecer em qualquer ordem,
       devemos multiplicar pelo número de maneiras de reordenar esses resultados, que pode ser
       calculado pela combinação de 1 dentre 5 resultados:
                                                 1       1   5
                                    𝑃2 = 𝐶5,1 ×    = 5×    =
                                                32      32 32

   •   Avançar duas casas duas vezes e 2 casas, sendo uma por vez - para isso, devem ser obtidos
       2 números ímpares e 2 números pares, cuja probabilidade (em determinada ordem) é:
                                            1 2    1 2   1
                                           ( ) ×( ) =
                                            2      2    16

       Precisamos multiplicar essa probabilidade pelo número de maneiras de reordenar esses
       resultados, que pode ser calculado pela combinação de 2 dentre 4 resultados:
                                   1    4!      1   4 × 3 × 2! 1         1    6
                      𝑃3 = 𝐶4,2 ×    =       ×    =           ×    =6×     =
                                  16 2! × 2! 16       2! × 2    16      16 16

   •   Avançar duas casas três vezes - para isso, devem ser obtidos 3 números ímpares, com
       probabilidade:
                                                  1 3 1
                                           𝑃4 = ( ) =
                                                  2    8
A probabilidade de chegar à casa 7 é a soma dessas probabilidades (união de eventos
mutuamente exclusivos):

        Receita Federal (Analista Tributário) Estatística                                    11
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                              1   5   6 1 1 + 10 + 24 + 8 43
                             𝑃(𝑐𝑎𝑠𝑎 7) =        +   +  + =               =
                                             64 32 16 8         64         64
                                                                                           1
Para pular da casa 7 à casa 9, é necessário obter um número ímpar, cuja probabilidade é 2. A
probabilidade de chegar à cassa 7 E pular para a casa 9 (interseção de eventos independentes) é
o produto:
                                                          43 1  43
                                                    𝑃=      × =
                                                          64 2 128
Gabarito: D

Distribuições Discretas

10.  (FGV/2023 – SEFAZ/MG) Numa população, 50% das pessoas têm uma certa característica
C. Se oito pessoas desta população foram aleatoriamente sorteadas com reposição, a
probabilidade de que mais de cinco tenham a referida característica é aproximadamente igual a

a) 14%.
b) 18%.
c) 22%.
d) 25%.
e) 29%.

Comentários:

Como o sorteio das pessoas é feito com reposição, as extrações são independentes, o que
caracteriza uma distribuição binomial.

O enunciado informa que a proporção de pessoas da população que apresentam a referida
característica é p = 50%, logo, a proporção de pessoas que não apresentam é q = 1 - p = 50%.

A probabilidade de que mais de que mais de 5 pessoas, dentre n = 8, apresentem a referida
característica é a soma:
                                  𝑃(𝑋 > 5) = 𝑃(𝑋 = 6) + 𝑃(𝑋 = 7) + 𝑃(𝑋 = 8)
Na distribuição binomial, as probabilidades são calculadas como:
                                             𝑃(𝑋 = 𝑘) = 𝐶𝑛,𝑘 × 𝑝𝑘 × 𝑞 𝑛−𝑘

                          1 6   1 2       8!         1 8 8 × 7 × 6!    1 8        1 8
       𝑃(𝑋 = 6) = 𝐶8,6 × ( ) × ( ) =               ×( ) =           × ( ) = 28 × ( )
                          2     2    (8 − 6)! × 6!   2     2! × 6!     2          2
                               1 7   1 1       8!         1 8 8 × 7!     1 8    1 8
            𝑃(𝑋 = 7) = 𝐶8,7 × ( ) × ( ) =               ×( ) =         ×( ) =8×( )
                               2     2    (8 − 7)! × 7!   2    1! × 7!   2      2


          Receita Federal (Analista Tributário) Estatística                                    12
          www.estrategiaconcursos.com.br                                                       59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                          1 6   1 2       8!         1 8     1 8
                       𝑃(𝑋 = 8) = 𝐶8,8 × ( ) × ( ) =               ×( ) = 1×( )
                                          2     2    (8 − 8)! × 8!   2       2
E a soma é:

                                 1 8       1 8       1 8        1 8  37
                𝑃(𝑋 > 5) = 28 × ( ) + 8 × ( ) + 1 × ( ) = 37 × ( ) =     ≅ 14,4%
                                 2         2         2          2    256
Gabarito: A

11.   (FGV/2022 – TRT/MA) Uma moeda honesta será lançada 10 vezes. Se X é o número de caras
observadas, então a variância de X vale

a) 1,0
b) 1,5
c) 2,0
d) 2,5
e) 3,0

Comentários:

Sendo X o número de CARAS observadas (sucessos) em 10 lançamentos de uma moeda honesta
(ensaios independentes), temos uma distribuição binomial, com n=10 lançamentos e
probabilidade de sucesso p=0,5, sendo a probabilidade de fracasso complementar: q = 1 - p =
0,5.

A variância da distribuição binomial é:
                                     𝑉(𝑋) = 𝑛 × 𝑝 × 𝑞 = 10 × 0,5 × 0,5 = 2,5
Gabarito: D

12.    (FGV/2022 – TRT/MA) Suponha que experimentos Bernoulli independentes sejam
realizados até que o primeiro “sucesso” aconteça.

Se X é o número de tentativas anteriores a esse primeiro “sucesso”, avalie se as afirmativas a
seguir sobre a distribuição de X estão corretas.

I. X tem distribuição geométrica.
II. E[X] = (1 – p)/p
III. Var[X] = (1 – p)/p²

         Receita Federal (Analista Tributário) Estatística                                 13
         www.estrategiaconcursos.com.br                                                    59

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula Extra

Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

Comentários:

O enunciado informa serão realizados ensaios independentes de Bernoulli, até a ocorrência do
primeiro sucesso, o que corresponde à distribuição geométrica.

O enunciado esclarece que X corresponde ao número de tentativas (ensaios de Bernoulli)
anteriores a esse primeiro sucesso, que corresponde à parametrização alternativa da distribuição
geométrica. Assim, a afirmativa I está correta.

A média da variável geométrica com essa parametrização é:
                                                               𝑞 1−𝑝
                                                     𝐸(𝑋) =      =
                                                               𝑝   𝑝
Logo, a afirmativa II está correta.

A variância da distribuição geométrica (em qualquer parametrização):
                                                               𝑞     1−𝑝
                                                    𝑉(𝑋) =       2
                                                                   =
                                                               𝑝      𝑝2
Logo, a afirmativa III também está correta.

Gabarito: E

13.    (FGV/2022 – TRT/MA) Uma fábrica produz N itens, dos quais K são defeituosos. Se n itens
diferentes forem sorteados aleatoriamente dessa produção, então o número de itens defeituosos
nessa amostra tem distribuição

a) binomial.
b) exponencial.
c) uniforme discreta.
d) hipergeométrica.
e) Poisson.

Comentários:

           Receita Federal (Analista Tributário) Estatística                                 14
           www.estrategiaconcursos.com.br                                                    59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

A distribuição que estuda o número de sucessos (no caso, itens defeituosos) em uma amostra
extraída de uma população finita de N elementos no total, dos quais K apresentam o atributo
sucesso é a distribuição hipergeométrica (alternativa D).

Vamos analisar as demais alternativas. A distribuição binomial (alternativa A) estuda o número de
sucessos em uma amostra extraída de uma população infinita, ou se a amostra for extraída com
reposição. Porém, o enunciado informa que o tamanho da população é igual a N (finito) e não
afirma que a extração é com reposição. Desse modo, não podemos utilizar a distribuição binomial.

A distribuição de Poisson (alternativa E) deve ser aplicada quando o tamanho da amostra tende a
infinito (𝒏 → ∞) e a probabilidade tende a zero (𝒑 → 𝟎), sendo aplicável a intervalos, como o
tempo, que não é o caso.

A distribuição exponencial (alternativa B) é contínua e estuda o intervalo entre ocorrências; e a
distribuição uniforme (alternativa C) é utilizada quando todos os possíveis resultados da variável
apresentam a mesma probabilidade. Essas distribuições não apresentam qualquer relação com a
situação descrita.

Gabarito: D

14.    (FGV/2022 – TRT/MA) Um exemplo de variável aleatória cuja distribuição de probabilidades
é tal que a média é sempre igual a variância é a

a) binomial.
b) exponencial.
c) uniforme discreta.
d) hipergeométrica.
e) Poisson.

Comentários:

O enunciado pede a distribuição em que a média é sempre igual à variância. Na distribuição de
Poisson (alternativa E), temos:
                                                      𝐸(𝑋𝑃𝑜 ) = 𝜆
                                                      𝑉(𝑋𝑃𝑜 ) = 𝜆
Mas vejamos as demais alternativas. Para a distribuição binomial (A), a média e a variância são
diferentes:
                                                    𝐸(𝑋𝐵𝑖 ) = 𝑛 × 𝑝
                                                 𝑉(𝑋𝐵𝑖 ) = 𝑛 × 𝑝 × 𝑞

        Receita Federal (Analista Tributário) Estatística                                      15
        www.estrategiaconcursos.com.br                                                         59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Em relação à distribuição hipergeométrica (D), a média é igual à média da distribuição binomial e
a variância é multiplicada pelo fator de correção:

                                                   𝐸(𝑋𝐻𝑔 ) = 𝑛 × 𝑝
                                                                     𝑁−𝑛
                                           𝑉(𝑋𝐻𝑔 ) = 𝑛 × 𝑝 × 𝑞 ×
                                                                     𝑁−1
Assim, também temos média diferente de variância.

Para a distribuição exponencial, a média e a variância também são diferentes:
                                                                1
                                                      𝐸(𝑋𝐸𝑥 ) =
                                                                𝜆
                                                                1
                                                      𝑉(𝑋𝐸𝑥 ) = 2
                                                               𝜆
Em relação à distribuição uniforme discreta, a média e a variância são diferentes:
                                                               𝑎+𝑏
                                                    𝐸(𝑋𝑈 ) =
                                                                2
                                                             (𝑏 − 𝑎)2
                                                  𝑉(𝑋𝑈 ) =
                                                                12
Gabarito: E

15.   (FGV/2022 – TRT/MA) Suponha que um processo Poisson esteja ocorrendo no tempo a uma
taxa média de 0,5/min. Usando 𝐞−𝟎,𝟐𝟓 = 0,7788, a probabilidade de que ocorra um acontecimento
num intervalo de 30s é, aproximadamente, igual a

a) 0,104.
b) 0,195.
c) 0,256.
d) 0,348.
e) 0,360.

Comentários:

O enunciado informa que o processo segue distribuição de Poisson com parâmetro 𝜆0 = 0,5 por
minuto. O parâmetro para 30 segundos (meio minuto) é a metade:
                                                      𝜆0 0,5
                                                 𝜆=     =    = 0,25
                                                      2   2
A probabilidade de ocorrer k = 1 acontecimento nesse intervalo é:

        Receita Federal (Analista Tributário) Estatística                                     16
        www.estrategiaconcursos.com.br                                                        59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                                             𝑒 −𝜆 × 𝜆𝑘
                                                  𝑃(𝑋 = 𝑘) =
                                                                 𝑘!
                                                 𝑒 −0,25 × 0,251
                                      𝑃(𝑋 = 1) =                 = 0,25. 𝑒 −0,25
                                                        1!
Considerando que 𝑒 −0,25 = 0,7788:
                                   𝑃(𝑋 = 1) = 0,25 × 0,7788 = 0,1947 ≅ 0,195
Gabarito: B

Distribuições Contínuas

16.   (FGV/2022 – TCE/TO) Se X tem distribuição exponencial com parâmetro 𝝀, ou seja, se
𝒇(𝒙) = 𝝀𝒆−𝝀𝒙, se 𝒙 > 𝟎, 𝝀 > 𝟎, então a variância de X é igual a

a) 𝜆2

   1
b) 𝜆

   1
c) 𝜆2

   2
d) 𝜆2

e) 𝜆

Comentários:

Para uma variável exponencial X com parâmetro 𝜆, a variância é dada por:
                                                                  1
                                                         𝑉(𝑋) =
                                                                  𝜆2
Gabarito: C

17.   (FGV/2022 – TCE/TO) Se X tem distribuição normal com média 𝝁 e variância 𝝈𝟐 , então a
seguinte variável tem distribuição normal padrão:

         (𝑋−𝜇)
a) 𝑍 =     𝜎

         (𝑋−𝜇)2
b) 𝑍 =     𝜎

          Receita Federal (Analista Tributário) Estatística                             17
          www.estrategiaconcursos.com.br                                                59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

         (𝑋−𝜇)2
c) 𝑍 =
          𝜎2

         (𝑋−𝜇)
d) 𝑍 =    𝜎2

         (𝑋−𝜇)
e) 𝑍 =    2𝜎


Comentários:

O enunciado informa que a variável X segue distribuição normal com média 𝜇 e variância 𝜎 2 .

O desvio padrão, raiz quadrada da variância, é √𝜎 2 = 𝜎.

No cálculo da transformação para a normal padrão, subtraímos a média e dividimos pelo desvio
padrão:
                                                              (𝑋 − 𝜇)
                                                        𝑍=
                                                                 𝜎
Gabarito: A

18.    (FGV/2022 – TRT/MA) A soma dos quadrados de n variáveis aleatórias independentes e
identicamente distribuídas N(0, 1) tem distribuição

a) N(n, 1)
b) N(n, n²)
c) qui-quadrado com (n – 1) graus de liberdade
d) qui-quadrado com n graus de liberdade
e) N(n, n)

Comentários:

A soma de variáveis normais padrão independentes elevadas ao quadrado caracterizam uma
distribuição qui-quadrado. O número de graus de liberdade dessa distribuição corresponde ao
número de variáveis normais somadas. Assim, o número de graus de liberdade da distribuição qui-
quadrado é igual a n.

Gabarito: D

19.      (FGV/2022 – TRT/PB) Uma amostra aleatória simples 𝑿𝟏 , 𝑿𝟐 , . . . , 𝑿𝟏𝟎 , de tamanho 10, de uma
                                                                               𝟐                 (𝑿𝒊 −𝝁)
variável populacional 𝑵(𝝁, 𝝈𝟐 ) será obtida. Nesse caso, a variável 𝑾 = ∑𝟏𝟎
                                                                         𝒊=𝟏 𝒁𝒊 , em que 𝒁𝒊 =            ,
                                                                                                    𝝈
tem distribuição de probabilidades


          Receita Federal (Analista Tributário) Estatística                                             18
          www.estrategiaconcursos.com.br                                                                59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

a) N(0, )
b) N(0, 1002)
c) qui-quadrado com 9 graus de liberdade.
d) qui-quadrado com 10 graus de liberdade.
e) t-Student com 9 graus de liberdade.

Comentários:

Considerando que as variáveis 𝑋𝑖 apresentam distribuição normal com média 𝜇 e variância 𝜎 2
                                                    (𝑋𝑖 −𝜇)
(desvio padrão 𝜎), então a variável 𝑍𝑖 =                      apresenta distribuição normal padrão.
                                                      𝜎

A soma de 𝑘 variáveis normais padrão elevadas ao quadrado caracteriza uma distribuição qui-
quadrado com 𝑘 graus de liberdade.
                                          2
Sendo 𝑘 = 10, então a variável 𝑊 = ∑10
                                    𝑖=1 𝑍𝑖 segue distribuição qui-quadrado com 10 graus de
liberdade.

Gabarito: D

20.    (FGV/2022 – TRT/MA) Se X tem distribuição qui-quadrado com n graus de liberdade, Y tem
distribuição qui-quadrado com m graus de liberdade e se X e Y são independentes, então a
seguinte variável tem distribuição F com n e m graus de liberdade:

a) XY/nm
b) nmX/Y
c) nX²/mY²
d) mX/nY
e) X²/Y

Comentários:

A distribuição de F-Snedecor consiste na razão entre duas variáveis independentes com
distribuição qui-quadrado, sendo cada uma dividida pelo respectivo grau de liberdade:
                                                               𝒳𝑘21
                                                                   ⁄
                                                                    𝑘
                                                      𝐹𝑘1 ,𝑘2 = 2 1
                                                               𝒳𝑘2
                                                                   ⁄
                                                                    𝑘2
O enunciado informa que X tem distribuição qui-quadrado com n graus de liberdade e que Y tem
distribuição qui-quadrado com m graus de liberdade.

          Receita Federal (Analista Tributário) Estatística                                           19
          www.estrategiaconcursos.com.br                                                              59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Assim, a seguinte variável segue a distribuição F:
                                                    𝑋⁄
                                                       𝑛 𝑋 𝑚 𝑚. 𝑋
                                           𝐹𝑛,𝑚 =       = × =
                                                    𝑌⁄
                                                      𝑚 𝑛 𝑌   𝑛. 𝑌

Gabarito: D

Estimação Pontual e Intervalar

21.   (FGV/2022 – TRT/MA) Uma amostra aleatória simples de tamanho 784 será obtida para se
estimar o valor de uma média populacional. Se 𝝈 é o valor do desvio padrão populacional, a
probabilidade de que o valor da média amostral não difira do valor da média populacional por
mais de 0,1𝝈, é aproximadamente igual a

a) 0,995.
b) 0,975.
c) 0,957.
d) 0,946.
e) 0,933.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

O enunciado pede a probabilidade de a média de uma amostra 𝑋̅ de tamanho 𝑛 = 784 não diferir
(para cima ou para baixo) da média populacional 𝜇 por mais que 0,1𝜎:
                                𝑃(|𝑋̅ − 𝜇| ≤ 0,1𝜎) = 𝑃(−0,1𝜎 ≤ 𝑋̅ − 𝜇 ≤ 0,1𝜎)
Em que 𝜎 é o desvio padrão populacional.

Para calcular essa probabilidade, vamos utilizar a transformação da média amostral para a normal
padrão:
                                                            𝑋̅ − 𝜇
                                                      𝑍=       𝜎
                                                              √𝑛
Fazendo 𝑋̅ − 𝜇 = 0,1𝜎 e 𝑛 = 784, temos:
                                             0,1𝜎 0,1
                                       𝑍=      𝜎 = 1 = 0,1 × 28 = 2,8
                                             √784  28
Similarmente, o valor de Z para 𝑋̅ − 𝜇 = −0,1𝜎 é 𝑍 = −2,8.


        Receita Federal (Analista Tributário) Estatística                                    20
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Assim, a probabilidade desejada corresponde à probabilidade 𝑃(−2,8 ≤ 𝑍 ≤ 2,8) na normal
padrão:
                                𝑃(−2,8 ≤ 𝑍 ≤ 2,8) = 𝑃(𝑍 < 2,8) − 𝑃(𝑍 < −2,8)
Pela simetria da normal padrão, temos:
                                  𝑃(𝑍 < −2,8) = 𝑃(𝑍 > 2,8) = 1 − 𝑃(𝑍 < 2,8)
                                                    𝑃(−2,8 < 𝑍 < 2,8)

                                      𝑃(𝑍 < −2,8)                       𝑃(𝑍 > 2,8)

                                                 -2,8        0    2,8

                                                 𝑃(𝑍 < 2,8)

Assim:
                𝑃(−2,8 ≤ 𝑍 ≤ 2,8) = 𝑃(𝑍 < 2,8) − [1 − 𝑃(𝑍 < 2,8)] = 2 × 𝑃(𝑍 < 2,8) − 1
Pela tabela fornecida, observamos que 𝑃(𝑍 < 2,8) = 0,9974, logo a probabilidade desejada é:
                   𝑃(−2,8 ≤ 𝑍 ≤ 2,8) = 2 × 0,9974 − 1 = 1,9948 − 1 = 0,9948 ≅ 0,995
Gabarito: A

22.   (FGV/2022 – TRT/MA) Numa dada população, 50% das pessoas são do sexo feminino.
Usando o teorema central do limite, se uma amostra aleatória simples de tamanho n = 1.225 dessa
população for observada, a probabilidade de que, na amostra, a porcentagem de pessoas do sexo
feminino seja menor do que 0,46 ou maior do que 0,54 é aproximadamente igual a

a) 0.
b) 0,045.
c) 0,085.
d) 0,125.
e) 0,150.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

         Receita Federal (Analista Tributário) Estatística                                    21
         www.estrategiaconcursos.com.br                                                       59

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

O enunciado pede a probabilidade de a proporção amostral ser menor que 0,46 ou maior que
0,54:
                          𝑃(𝑝̂ < 0,46 𝑜𝑢 𝑝̂ > 0,54) = 𝑃(𝑝̂ < 0,46 ) + 𝑃( 𝑝̂ > 0,54)
Considerando a aproximação pelo Teorema Central do Limite, podemos utilizar a transformação
para a normal padrão, considerando que a média da distribuição é 𝑝 e o desvio padrão (erro
                               𝑝.𝑞
padrão do estimador) é √ 𝑛 :

                                                                𝑝̂ − 𝑝
                                                       𝑧=
                                                                  𝑝. 𝑞
                                                                √
                                                                   𝑛
O enunciado informa que 𝑝 = 0,5, logo 𝑞 = 1 − 𝑝 = 0,5, e 𝑛 = 1225. Para 𝑝̂ = 0,54, temos:
                                            0,54 − 0,5          0,04 0,04
                                      𝑧=                    =       =     = 2,8
                                                                0,5    1
                                            √0,5 × 0,5           35   70
                                               1225
Assim, 𝑃( 𝑝̂ > 0,54) = 𝑃(𝑍 > 2,8).

Como 𝑝̂ = 0,46 apresenta a mesma distância de 0,04 à média, a probabilidade 𝑃( 𝑝̂ < 0,46) é igual
à 𝑃( 𝑝̂ > 0,54), haja vista a simetria da curva normal em torno da média:
                                𝑃(𝑝̂ < 0,46 ) + 𝑃( 𝑝̂ > 0,54) = 2 × 𝑃(𝑍 > 2,8)
Por sua vez, a probabilidade 𝑃(𝑍 > 2,8) pode ser calculada pelo seu complemento:
                                           𝑃(𝑍 > 2,8) = 1 − 𝑃(𝑍 < 2,8)
Pela tabela fornecida na prova, observamos que 𝑃(𝑍 < 2,8) = 0,9974. O seu complemento é:
                                       𝑃(𝑍 > 2,8) = 1 − 0,9974 = 0,0026
E a probabilidade desejada é o dobro desse resultado:
                        𝑃(𝑝̂ < 0,46 ) + 𝑃( 𝑝̂ > 0,54) = 2 × 0,0026 = 0,0052 < 0,01
Dentre as probabilidades indicadas nas alternativas, a que mais se aproxima é P = 0.

Gabarito: A

23.    (FGV/2022 – TRT/MA) Suponha uma amostra aleatória simples 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 , 𝑿𝟒 de uma
variável populacional com média 𝝁. Assinale a opção que apresenta um estimador não
tendencioso de 𝝁.

a) 𝑋1 + 𝑋2
b) 𝑋1 − 𝑋2 + 𝑋3 − 𝑋4
c) (2𝑋3 + 3𝑋4 )/5


        Receita Federal (Analista Tributário) Estatística                                     22
        www.estrategiaconcursos.com.br                                                        59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

d) (2𝑋1 + 3𝑋2 + 2𝑋3 + 3𝑋4 )/5
e) 5𝑋4

Comentários:

Para um estimador não tendencioso, a sua esperança deve ser igual ao parâmetro sendo estimado:
                                                        𝐸(𝜃) = 𝜇
A esperança do estimador da alternativa A é:
                                       𝐸(𝜃𝐴 ) = 𝐸(𝑋1 + 𝑋2 ) = 𝐸(𝑋1 ) + 𝐸(𝑋2 )
Considerando que os elementos da amostra seguem a mesma distribuição da população, temos
𝐸(𝑋1 ) = 𝐸(𝑋2 ) = 𝜇:
                                                  𝐸(𝜃𝐴 ) = 𝜇 + 𝜇 = 2. 𝜇
Assim, a esperança do estimador é o dobro do parâmetro (e não igual ao parâmetro). Logo, o
estimador definido na alternativa A é tendencioso.

A esperança do estimador da alternativa B é:
                     𝐸(𝜃𝐵 ) = 𝐸(𝑋1 − 𝑋2 + 𝑋3 − 𝑋4 ) = 𝐸(𝑋1 ) − 𝐸(𝑋2 ) + 𝐸(𝑋3 ) − 𝐸(𝑋4 )
Sabendo que 𝐸(𝑋1 ) = 𝐸(𝑋2 ) = 𝐸(𝑋3 ) = 𝐸(𝑋4) = 𝜇, então:
                                             𝐸(𝜃𝐵 ) = 𝜇 − 𝜇 + 𝜇 − 𝜇 = 0
Assim, a esperança do estimador é nula (e não igual ao parâmetro). Logo, o estimador definido na
alternativa B é tendencioso.

A esperança do estimador da alternativa C é:
                                                 2. 𝑋3 + 3. 𝑋4    2. 𝐸(𝑋3 ) + 3. 𝐸(𝑋4 )
                                  𝐸(𝜃𝐶 ) = 𝐸 (                 )=
                                                       5                    5
Sendo 𝐸(𝑋3 ) = 𝐸(𝑋4 ) = 𝜇, então:
                                                       2. 𝜇 + 3. 𝜇 5. 𝜇
                                            𝐸(𝜃𝐶 ) =              =     =𝜇
                                                            5       5
Assim, a esperança do estimador é igual ao parâmetro 𝜇. Logo, o estimador definido na alternativa
C é não tendencioso.

A esperança do estimador da alternativa D é:
                              2𝑋1 + 3𝑋2 + 2𝑋3 + 3𝑋4    2. 𝐸(𝑋1 ) + 3𝐸(𝑋2 ) + 2. 𝐸(𝑋3 ) + 3. 𝐸(𝑋4 )
               𝐸(𝜃𝐷 ) = 𝐸 (                         )=
                                        5                                  5
Sendo 𝐸(𝑋1 ) = 𝐸(𝑋2 ) = 𝐸(𝑋3 ) = 𝐸(𝑋4 ) = 𝜇, então:
                                             2. 𝜇 + 3. 𝜇 + 2. 𝜇 + 3. 𝜇 10. 𝜇
                                  𝐸(𝜃𝐷 ) =                            =      = 2. 𝜇
                                                         5              5


         Receita Federal (Analista Tributário) Estatística                                           23
         www.estrategiaconcursos.com.br                                                              59

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula Extra

Assim, a esperança do estimador é o dobro do parâmetro (e não igual ao parâmetro). Logo, o
estimador definido na alternativa D é tendencioso.

Por fim, a esperança do estimador da alternativa E é:
                                              𝐸(𝜃𝐸 ) = 𝐸(5. 𝑋4 ) = 5. 𝐸(𝑋4 ) = 5. 𝜇
Portanto, a esperança do estimador é 5 vezes o parâmetro (e não igual ao parâmetro). Logo, o
estimador definido na alternativa E é tendencioso.

Gabarito: C

24.   (FGV/2022 – TRT/MA) Considere 𝑿𝟏 , 𝑿𝟐 , ..., 𝑿𝐧 uma amostra aleatória simples de uma
função de densidade exponencial parâmetro q, ou seja,

                            𝒇(𝒙, 𝜽) = 𝜽. 𝒆𝒙𝒑{−𝜽𝒙},             𝒔𝒆 𝒙 > 𝟎; 𝒇(𝒙, 𝜽) = 𝟎,   𝒔𝒆 𝒙 ≤ 𝟎

O estimador não tendencioso de variância uniformemente mínima de 1/ é
        𝑛
a) ∑𝑛
      𝑖=1 𝑋𝑖

     ∑𝑛
      𝑖=1 𝑋𝑖
b)      𝑛
    𝑛−1
c) ∑𝑛 𝑋
    𝑖=1 𝑖

     ∑𝑛
      𝑖=1 𝑋𝑖
d)    𝑛−1
     ∑𝑛
      𝑖=1 𝑋𝑖
e)     2𝑛


Comentários:

                                                                                                   1
O enunciado pede o estimador eficiente, isto é, não tendencioso e de variância mínima para 𝜃,
sendo 𝜃 o parâmetro de uma distribuição exponencial.

O estimador eficiente para o parâmetro da distribuição exponencial, que usualmente indicamos
como 𝜆, é o inverso da média amostral:

                                                                          1
                                                                   𝜆̂ =
                                                                          𝑋̅

Assim, para estimar o inverso do parâmetro, temos:

                                                             1 1
                                                                = = 𝑋̅
                                                             𝜆̂  1
                                                                 𝑋̅

               Receita Federal (Analista Tributário) Estatística                                   24
               www.estrategiaconcursos.com.br                                                      59

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                                  ∑𝑛
                                                   𝑖=1 𝑋𝑖
Sabendo que a média amostral é 𝑋̅ =                         , então:
                                                     𝑛


                                                            1 ∑𝑛𝑖=1 𝑋𝑖
                                                               =
                                                            𝜆̂   𝑛

Gabarito: B

25.   (FGV/2022 – TRT/PB) A seguinte amostra de uma densidade uniforme no intervalo (0, 𝜽) foi
obtida:

                           22,1     23,5     18,5 30,1 28,7 20,0 16,4         29,2 25,5

A estimativa de máxima verossimilhança de 𝜽 é igual a
a) 21,4.
b) 25,5.
c) 28,7.
d) 29,0.
e) 30,1.

Comentários:

A estimativa de máxima verossimilhança para uma distribuição uniforme no intervalo (0, 𝜃) é o
maior valor obtido na amostra, no caso, 30,1.

Gabarito: E

26.   (FGV/2022 – TRT/MA) Se 𝑿𝟏 , 𝑿𝟐 , ..., 𝑿𝐧 é uma amostra aleatória simples de uma variável
populacional normalmente distribuída com média  e variância ², então o estimador de máxima
verossimilhança de log(²) é

a) 𝑛. log[∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
         1
b) log [𝑛+1 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]

c) 2𝑛. log[∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
        1
d) log [𝑛 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
           1
e) log [𝑛−1 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]

Comentários:


           Receita Federal (Analista Tributário) Estatística                               25
           www.estrategiaconcursos.com.br                                                  59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

O estimador de máxima verossimilhança para a variância de uma população normal é:

                                                  2
                                                            ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                                                𝜎̂𝑀𝑉 =
                                                                   𝑛
Que é tendencioso, por dividir a soma dos quadrados dos desvios por 𝒏 e não por 𝑛 − 1.

O logaritmo desse estimador (referente à função de log-verossimilhança) é:
                                                                              𝑛
                                             ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2          1
                                   2
                             log 𝜎̂𝑀𝑉 = log [                ] = log [ ∑(𝑋𝑖 − 𝑋̅)2 ]
                                                    𝑛                 𝑛
                                                                              𝑖=1

Gabarito: D

27.    (FGV/2022 – TRT/MA) Considere uma amostra aleatória de tamanho n obtida de uma
distribuição Bernoulli com parâmetro p:

                           𝒇(𝒙; 𝒑) = 𝒑𝒙 (𝟏 − 𝒑)𝟏−𝒙 ,            𝒙 = 𝟎 𝒐𝒖 𝟏,         𝟎≤𝒑≤𝟏

A função de verossimilhança correspondente é então
a) 𝐿(𝑝) = 𝑝∑ 𝑥𝑖 (1 − 𝑝)𝑛−∑ 𝑥𝑖
b) 𝐿(𝑝) = 𝑝𝑛−∑ 𝑥𝑖 (1 − 𝑝)1−∑ 𝑥𝑖
c) 𝐿(𝑝) = 𝑝2 (1 − 𝑝)𝑛−1 ∑ 𝑥𝑖
d) 𝐿(𝑝) = 𝑝𝑛 (1 − 𝑝)𝑛−1 ∑ 𝑥𝑖
                         ∑ 𝑥𝑖
e) 𝐿(𝑝) = (1 − 𝑝)𝑛−1 .      ⁄ ∑ 𝑥𝑖
                              𝑝

Comentários:

A função de máxima verossimilhança é o produto da função de probabilidade, aplicada para cada
resultado da amostra:
                                       𝑛

                         𝐿(𝜃, 𝑥𝑖 ) = ∏ 𝑓(𝜃, 𝑥𝑖 ) = 𝑓(𝜃, 𝑥1 ) × 𝑓(𝜃, 𝑥2 ) × … × 𝑓(𝜃, 𝑥𝑛 )
                                      𝑖=1

Sendo a função 𝑓(𝑥; 𝑝) = 𝑝 𝑥 (1 − 𝑝)1−𝑥 , o produto para uma amostra de tamanho 𝑛 é dada por:

                     𝐿(𝑝, 𝑥𝑖 ) = 𝑝 𝑥1 (1 − 𝑝)1−𝑥1 × 𝑝 𝑥2 (1 − 𝑝)1−𝑥2 × … × 𝑝 𝑥𝑛 (1 − 𝑝)1−𝑥𝑛

O que precisamos fazer para encontrar a resposta da questão é condensar essa expressão. Para
isso, consideramos que 𝑎 𝑥 . 𝑎 𝑦 = 𝑎 𝑥+𝑦 :

                                𝐿(𝑝, 𝑥𝑖 ) = 𝑝 𝑥1+𝑥2+⋯+𝑥𝑛 (1 − 𝑝)1−𝑥1+1−𝑥2+⋯+1−𝑥𝑛

        Receita Federal (Analista Tributário) Estatística                                       26
        www.estrategiaconcursos.com.br                                                          59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

O somatório 𝑥1 + 𝑥2 + ⋯ + 𝑥𝑛 pode ser representado como ∑ 𝑥𝑖 .

                                     𝐿(𝑝, 𝑥𝑖 ) = 𝑝∑ 𝑥𝑖 (1 − 𝑝)1−𝑥1+1−𝑥2+⋯+1−𝑥𝑛

Ademais, a expressão 1 − 𝑥1 + 1 − 𝑥2 + ⋯ + 1 − 𝑥𝑛 corresponde a 𝑛 vezes 1 menos o somatório
∑ 𝑥𝑖 :

                                            𝐿(𝑝, 𝑥𝑖 ) = 𝑝∑ 𝑥𝑖 (1 − 𝑝)𝑛−∑ 𝑥𝑖

Gabarito: A

28.   (FGV/2023 – SEFAZ/MG) O menor tamanho da amostra aleatória simples para que
possamos garantir, com 99% de confiança, que a proporção de sucessos amostral não diferirá da
proporção de sucessos populacional por mais de 1% deve ser aproximadamente igual a

[dado: se 𝒁~𝑵(𝟎, 𝟏), 𝑷[𝒁 < 𝟐, 𝟓𝟖] = 𝟎, 𝟗𝟗𝟓]

a) 1.032.

b) 4.236.

c) 6.488.

d) 16.642.

e) 18.544.

Comentários:

O enunciado pede o tamanho da amostra necessário, na construção de um intervalo de confiança
para a proporção:
                                                          𝑧 2
                                                     𝑛 = ( ) 𝑝̂ . 𝑞̂
                                                          𝐸
O enunciado informa que a proporção amostral não deve se afastar da proporção populacional
por mais de 1%, o que corresponde ao erro amostral: E = 0,01.

Para um nível de 99% de confiança, temos 0,5% abaixo do limite inferior e 0,5% acima do limite
superior. Assim, precisamos do valor de z que delimita uma probabilidade P(Z < z) = 0,5% + 99%
= 99,5% = 0,995.

Pelos dados fornecidos, observamos que z = 2,58, pois P(Z < 2,58) = 0,995.

Como o enunciado não forneceu uma estimativa para a proporção, devemos utilizar a proporção
que maximiza o tamanho amostral, para que possamos garantir que ele estará adequado.


        Receita Federal (Analista Tributário) Estatística                                  27
        www.estrategiaconcursos.com.br                                                     59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Essa proporção é 𝑝̂ = 𝑞̂ = 0,5, logo:

                                 2,58 2
                              𝑛=(    ) × 0,5 × 0,5 = (258)2 × 0,25 = 16.641
                                 0,01
Gabarito: D

29.   (FGV/2022 – TRT/MA) Se p é uma proporção populacional, o tamanho da amostra
necessário para que possamos garantir, com 95% de confiança, que o valor da proporção amostral
não se afastará do valor de p por mais de 2% é, aproximadamente, igual a

a) 1.600.
b) 1.800.
                                                            ==219a34==

c) 2.000.
d) 2.200.
e) 2.400.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

O enunciado pede o tamanho da amostra necessário, na construção de um intervalo de confiança
para a proporção:
                                                          𝑧 2
                                                     𝑛 = ( ) 𝑝̂ . 𝑞̂
                                                          𝐸
O enunciado informa que a proporção amostral não deve se afastar da proporção da população
por mais de 2%, o que corresponde ao erro amostral: E = 0,02.

Para um nível de 95% de confiança, temos 2,5% abaixo do limite inferior e 2,5% acima do limite
superior. Assim, precisamos do valor de z que delimita uma probabilidade P(Z < z) = 2,5% + 95%
= 97,5%.

Pela tabela fornecida na prova, observamos que z = 1,96, pois P(Z < 1,96) = 0,9750.

Como o enunciado não forneceu uma estimativa para a proporção, devemos utilizar a proporção
que maximiza o tamanho amostral, para que possamos garantir que ele estará adequado.

Essa proporção é 𝑝̂ = 𝑞̂ = 0,5, logo:

                             1,96 2
                          𝑛=(     ) × 0,5 × 0,5 = (98)2 × 0,25 = 2401 ≅ 2400
                             0,02
Gabarito: E


        Receita Federal (Analista Tributário) Estatística                                    28
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

30.    (FGV/2022 – TRT/PB) Supondo amostra aleatória simples, usando o teorema central do
limite e considerando, ainda, o pior caso, o tamanho da amostra para que possamos garantir, com
99% de confiança, que o valor de uma proporção amostral não diferirá do valor da proporção
populacional por mais de 2% é, no mínimo, aproximadamente igual a

a) 1.640.
b) 2.720.
c) 3.105.
d) 3.458.
e) 4.160.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

Essa questão trabalha com o tamanho da amostra necessário, na construção de um intervalo de
confiança para a proporção:
                                                          𝑧 2
                                                     𝑛 = ( ) 𝑝̂ . 𝑞̂
                                                          𝐸
O enunciado informa que a proporção amostral não deve se afastar da proporção população por
mais de 2%, o que corresponde ao erro amostral: E = 0,02.

Para um nível de 99% de confiança, temos 0,5% abaixo do limite inferior e 0,5% acima do limite
superior. Assim, precisamos do valor de z que delimita uma probabilidade P(Z < z) = 0,5% + 99%
= 99,5%.

Pela tabela fornecida na prova, observamos que z = 2,58, pois P(Z < 2,58) = 0,9951 ≅ 0,995.

O enunciado considera o pior caso, para que possamos garantir o intervalo de confiança. Em
outras palavras, devemos utilizar a proporção que maximiza o tamanho amostral, qual seja 𝑝̂ = 𝑞̂ =
0,5, logo:

                                  2,58 2
                               𝑛=(    ) × 0,5 × 0,5 = (129)2 × 0,25 ≅ 4160
                                  0,02
Gabarito: E

31.  (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 16 de uma densidade
normal com média 𝝁 e variância 𝝈𝟐 apresentou os seguintes resultados:

        Receita Federal (Analista Tributário) Estatística                                      29
        www.estrategiaconcursos.com.br                                                         59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

̅ = 20,5 e ∑(𝒙𝒊 − 𝒙
𝒙                 ̅)𝟐 = 60

Um intervalo de 95% de confiança para  será dado aproximadamente por

a) (19,43; 21,57)
b) (19,14; 21,86)
c) (18,62; 22,38)
d) (18,32; 22,68)
e) (18,00; 23,00)

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

Essa questão pede o intervalo de confiança para a média, com variância populacional
desconhecida (estimada a partir da amostra), dado por:
                                                            𝑋̅ ± 𝐸
Em que o erro é calculado como:
                                                                 𝑠
                                                       𝐸 = 𝑡.
                                                                √𝑛
E a estimativa para o desvio padrão (amostral) é:

                                                                ∑(𝑋𝑖 − 𝑋̅)2
                                              𝑠 = √𝑠 2 = √
                                                                  𝑛−1

Sabendo que ∑(𝑋𝑖 − 𝑋̅)2 = 60 e que o tamanho da amostra é 𝑛 = 16, a estimativa para o desvio
padrão (amostral) é:

                                                    60      60
                                          𝑠=√            = √ = √4 = 2
                                                  16 − 1    15

Para um nível de confiança de 95%, temos 2,5% abaixo do limite inferior (e 2,5% acima do limite
superior). Considerando que é fornecida a tabela da distribuição acumulada de t-Student 𝑃(𝑇 ≤
𝑡), precisamos do valor de 𝑡 que delimita uma probabilidade 𝑃(𝑇 ≤ 𝑡) = 97,5% para 𝑛 − 1 = 15
graus de liberdade. Observamos que 𝑡 = 2,131. Assim, o erro é dado por:
                                                        2         2
                                        𝐸 = 2,131.        = 2,131. ≅ 1,07
                                                      √16         4
Sabendo que a média amostral é 𝑋̅ = 20,5, o intervalo de confiança é:
                             𝑋̅ ± 𝐸 = (20,5 − 1,07; 20,5 + 1,07) = (19,43; 21,57)

        Receita Federal (Analista Tributário) Estatística                                    30
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Gabarito: A

32.   (FGV/2022 – TRT/PB) Considere 𝑿𝟏 , 𝑿𝟐 , … , 𝑿𝒏 uma amostra aleatória simples de uma variável
populacional normalmente distribuída com média 𝝁 e variância 𝝈𝟐 . Um intervalo de confiança para
𝝈𝟐 será dado por

                                            ̅ )𝟐
                                 ∑𝒏𝒊=𝟏(𝑿𝒊 − 𝑿                      ̅ )𝟐
                                                        ∑𝒏𝒊=𝟏(𝑿𝒊 − 𝑿
                               𝑷[                ≤ 𝝈𝟐 ≤                 ] = 𝟎, 𝟗𝟓
                                        𝒂                      𝒂

Assim, 𝒂 e 𝒃 podem ser, respectivamente,

a) o percentil 2,5% e o percentil 97,5% da distribuição qui-quadrado com n – 1 graus de liberdade.
b) o percentil 97,5% e o percentil 2,5% da distribuição qui-quadrado com n – 1 graus de liberdade.
c) o percentil 2,5% e o percentil 97,5% da distribuição qui-quadrado com n graus de liberdade.
d) o percentil 97,5% e o percentil 2,5% da distribuição qui-quadrado com n graus de liberdade.
e) o percentil 97,5% e o percentil 2,5% da distribuição t com n – 1 graus de liberdade.

Comentários:

Essa questão trabalha com o intervalo de confiança para a variância, dado por:
                                                (𝑛 − 1). 𝑠 2 (𝑛 − 1). 𝑠 2
                                          𝐼𝐶 = (    2       ;     2       )
                                                   𝒳𝑆𝑈𝑃         𝒳𝐼𝑁𝐹

Em que 𝒳𝑆𝑈𝑃2
              e 𝒳𝐼𝑁𝐹
                  2
                     são os valores tabelados da distribuição qui-quadrado com 𝑛 − 1 graus de
liberdade, considerando o nível de confiança, conforme ilustrado a seguir:


                                    𝛼⁄                             𝛼⁄
                                      2                              2
                                                 1−𝛼


                                            2                2
                                          𝒳𝐼𝑁𝐹              𝒳𝑆𝑈𝑃

O enunciado utiliza a soma dos quadrados ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2, em vez da variância amostral 𝑠 2 , a qual
pode ser calculada como:
                                                        ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                                                 𝑠2 =
                                                             𝑛−1
Assim, o intervalo de confiança para a variância pode ser representado como:

        Receita Federal (Analista Tributário) Estatística                                       31
        www.estrategiaconcursos.com.br                                                          59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                               (𝑛 − 1) ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 (𝑛 − 1) ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                         𝐼𝐶 = ( 2     ×               ;   2   ×                )
                                𝒳𝑆𝑈𝑃        𝑛−1         𝒳𝐼𝑁𝐹        𝑛−1
                                            ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                                      𝐼𝐶 = (       2       ;       2        )
                                                 𝒳𝑆𝑈𝑃            𝒳𝐼𝑁𝐹

Para um nível de confiança (1 − 𝛼) = 95%, temos que a probabilidade de o intervalo de confiança
englobar o parâmetro verdadeiro é de 95%, ou seja:
                                 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2   2
                                                      ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                               𝑃[       2        ≤𝜎 ≤        2        ] = 95%
                                      𝒳𝑆𝑈𝑃                 𝒳𝐼𝑁𝐹
Assim, o denominador do limite inferior do intervalo (𝑎) é igual a 𝒳𝑆𝑈𝑃  2
                                                                           , que corresponde ao
percentil 97,5% da distribuição qui-quadrado com 𝑛 − 1 graus de liberdade; e o denominador do
limite superior intervalo do intervalo (𝑏) é igual a 𝒳𝐼𝑁𝐹
                                                       2
                                                          , que corresponde ao percentil 2,5% da
distribuição qui-quadrado com 𝑛 − 1 graus de liberdade.

Gabarito: B

Testes de Hipóteses

33.    (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 400 será usada para testar
𝑯𝟎 : 𝝁 ≤ 𝟏𝟎𝟎 versus 𝑯𝟏 : 𝝁 > 𝟏𝟎𝟎, em que 𝝁 é a média de uma densidade normal com desvio
padrão suposto igual a 50. O critério que rejeita 𝑯𝟎 se 𝒙
                                                        ̅ > 𝟏𝟎𝟓 será usado.

O nível de significância desse critério e a probabilidade de erro tipo II se 𝝁 = 103 valem,
respectivamente, aproximadamente:

a) 0,02 e 0,79.
b) 0,02 e 0,21.
c) 0,02 e 0,54.
d) 0,05 e 0,21.
e) 0,05 e 0,38.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

O nível de significância do teste é a probabilidade de rejeitar a hipótese nula, considerando-a
verdadeira. Sabendo que a hipótese nula será rejeitada se 𝑥̅ > 105, temos:
                                                   𝛼 = 𝑃(𝑋̅ > 105)

        Receita Federal (Analista Tributário) Estatística                                    32
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Considerando que o parâmetro indicado na hipótese nula é 𝜇 = 100, que o desvio padrão é 𝜎 =
50 e que o tamanho da amostra é 𝑛 = 400, a transformação para a normal padrão é:
                                             𝑥̅ − 𝜇 105 − 100    5
                                        𝑧=      𝜎 =           =    =2
                                                       50       50
                                               √𝑛     √400      20

Assim, o nível de significância pode ser calculado como:
                                           𝛼 = 𝑃(𝑋̅ > 105) = 𝑃(𝑍 > 2)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 2) = 0,9772, logo:
                       𝛼 = 𝑃(𝑍 > 2) = 1 − 𝑃(𝑍 ≤ 2) = 1 − 0,9772 = 0,0228 ≅ 0,02
Já, a probabilidade do erro tipo II é a probabilidade de não rejeitar a hipótese nula, sendo ela
falsa:
                                                   𝛽 = 𝑃(𝑌̅ ≤ 105)
Considerando que o parâmetro verdadeiro é 𝜇 = 103, que o desvio padrão é 𝜎 = 50 e que o
tamanho da amostra é 𝑛 = 400, a transformação para a normal padrão é:
                                            𝑦̅ − 𝜇 105 − 103    2
                                      𝑧=       𝜎 =           =    = 0,8
                                                      50       50
                                              √𝑛     √400      20

Assim, a probabilidade do erro tipo II pode ser calculada como:
                                          𝛽 = 𝑃(𝑌̅ ≤ 105) = 𝑃(𝑍 ≤ 0,8)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 0,8) = 0,7881, logo:
                                         𝛽 = 𝑃(𝑍 ≤ 0,8) = 0,7881 ≅ 0,79
Gabarito: A

34.   (FGV/2022 – TRT/MA) Uma amostra aleatória de tamanho 144 de uma população descrita
por uma variável aleatória suposta normalmente distribuída com média 𝝁 e variância 𝝈𝟐
apresentou os seguintes dados:

                                                            𝟏𝟒𝟒

                                       ̅ = 𝟓𝟐, 𝟓,
                                       𝒙                          ̅)𝟐 = 𝟓𝟏𝟒𝟖
                                                            ∑(𝒙 − 𝒙
                                                            𝒊=𝟏


Assim, se queremos testar H0: 𝝁 ≤ 50 versus H1: 𝝁 > 50, o critério de decisão com base na
estatística de teste t usual, ao nível de significância de 5%, e a respectiva decisão serão:

a) Rejeitar H0 se 𝑥̅ ≥ 54,02, logo não rejeitamos H0.
b) Rejeitar H0 se 𝑥̅ ≥ 49,12, logo rejeitamos H0.


        Receita Federal (Analista Tributário) Estatística                                    33
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

c) Rejeitar H0 se 𝑥̅ ≥ 55,03, logo não rejeitamos H0.
d) Rejeitar H0 se 𝑥̅ ≥ 50,82, logo rejeitamos H0.
e) Rejeitar H0 se 𝑥̅ ≥ 53,28, logo não rejeitamos H0.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

Aqui temos um teste unilateral à direita para a média, com variância desconhecida (teste t), em
que precisamos calcular o limite crítico superior para a média amostral:
                                                                       𝑠
                                                     𝐿𝑆𝑢𝑝 = 𝜇 + 𝑡𝛼 .
                                                                       √𝑛
O enunciado fornece os seguintes dados:

   •   A média indicada na hipótese alternativa é 𝜇 = 50; e
   •   O tamanho da amostra é 𝑛 = 144.

Ademais, a partir da soma do quadrado dos desvios, podemos calcular a variância amostral 𝑠 2 :

                                           2
                                             ∑144
                                              𝑖=1 (𝑥 − 𝑥̅ )
                                                            2
                                                                5148
                                         𝑠 =                  =      = 36
                                                𝑛−1             143
O desvio padrão amostral é a raiz quadrada desse resultado:

                                                    𝑠 = √𝑠 2 = √36 = 6
Por fim, precisamos do valor de 𝑡𝛼 para 𝑛 − 1 = 143 graus de liberdade e para um nível de
confiança 𝑃(𝑇 < 𝑡𝛼 ) = 1 − 𝛼 = 95%. Pela tabela fornecida, observamos que o valor de 𝑡𝛼 está
entre 1,658 e 1,645.

Utilizando 𝑡𝛼 = 1,65 (valor aproximado), obtemos o seguinte limite superior:
                                                6                       6
                      𝐿𝑆𝑢𝑝 = 50 + 1,65.               = 50 + 1,65.        = 50 + 0,825 ≅ 50,82
                                               √144                    12
Assim, rejeitamos a hipótese nula se a média amostral for superior a 50,82. Considerando que a
média observada é 𝑥̅ = 52,5, que é superior ao limite máximo, rejeitamos a hipótese nula.

Gabarito: D

35.    (FGV/2022 – TRT/MA) Para testar se a proporção p de pessoas infectadas pela dengue já é
superior a 10%, num dado momento, uma amostra aleatória simples de 400 pessoas será
observada e será usado o critério de decisão que decide por p > 10% se ao menos 48 pessoas
estiverem infectadas.

        Receita Federal (Analista Tributário) Estatística                                        34
        www.estrategiaconcursos.com.br                                                           59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

O nível de significância associado a esse critério é aproximadamente igual a

a) 0,01.
b) 0,02.
c) 0,05.
d) 0,09.
e) 0,12.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

Essa questão trabalha com o teste para a proporção, em que as hipóteses são:
                                                          𝐻0 : 𝑝 = 10%
                                                          𝐻1 : 𝑝 > 10%
O enunciado informa que, se pelo menos 48 pessoas, da amostra de 400 pessoas, estiverem
infectadas, ficará decido que p > 10%. Em outras palavras, o limite crítico para a proporção
amostral é:
                                                          48   12
                                                   𝑝̂ =      =    = 0,12
                                                          400 100
Utilizando a aproximação à distribuição normal, haja vista o tamanho da amostra, temos a seguinte
transformação para a normal padrão, sabendo que 𝑝 = 0,1, logo 𝑞 = 1 − 𝑝 = 0,9, e que 𝑛 = 400:
                                          𝑝̂ − 𝑝       0,12 − 0,1       0,02 0,4
                                    𝑧=             =                =        =     ≅ 1,33
                                            𝑝. 𝑞                         0,3   0,3
                                          √            √0,1 × 0,9        20
                                             𝑛             400
Assim, o nível de significância, isto é, a probabilidade de obter uma proporção amostral que nos
leva à rejeição da hipótese nula, dado que a verdadeira proporção populacional é 𝑝 = 0,1,
corresponde a:
                                               𝑃(𝑝̂ > 0,12) = 𝑃(𝑍 > 1,33)
Pela tabela fornecida, observamos que 𝑃(𝑍 < 1,33) = 0,9082. A probabilidade desejada é
complementar:
                         𝑃(𝑝̂ > 0,12) = 1 − 𝑃(𝑍 < 1,33) = 1 − 0,9082 = 0,0918 ≅ 0,09
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                  35
           www.estrategiaconcursos.com.br                                                     59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

36.    (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 10 de uma densidade
Bernoulli (p) será observada para testar H0: p ≤ 0,5 versus H1: p > 0,5 e será usado o critério que
rejeita H0 se o número de “sucessos” na amostra for maior do que 7.

A probabilidade de erro tipo I máxima com esse critério é aproximadamente igual a

a) 0,001.
b) 0,01.
c) 0,05.
d) 0,1.
e) 0,2.

Comentários:

Essa questão trabalha com o teste para a distribuição binomial e pede a probabilidade do erro
tipo I, que é a probabilidade de rejeitar a hipótese nula, sendo ela verdadeira. Considerando que
a hipótese nula é rejeitada se houver mais de 7 sucessos na amostra de tamanho 𝑛 = 10, a
probabilidade do erro tipo I é:
                                𝛼 = 𝑃(𝑋 > 7) = 𝑃(𝑋 = 8) + 𝑃(𝑋 = 9) + 𝑃(𝑋 = 10)
Em que a probabilidade de obter 𝑘 sucessos é dada por:
                                              𝑃(𝑋 = 𝑘) = 𝐶𝑛,𝑘 × 𝑝𝑘 × 𝑞 𝑛−𝑘

Considerando a probabilidade de sucesso indicada na hipótese nula 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 =
0,5), temos:
                                                         10!                 10 × 9
           𝑃(𝑋 = 8) = 𝐶10,8 × 0,58 × 0,52 =                        × 0,510 =        × 0,510 = 45 × 0,510
                                                    (10 − 8)! × 8!             2
                                                                    10!
                     𝑃(𝑋 = 9) = 𝐶10,9 × 0,59 × 0,51 =                         × 0,510 = 10 × 0,510
                                                               (10 − 9)! × 9!
                                                                     10!
                   𝑃(𝑋 = 10) = 𝐶10,10 × 0,510 × 0,50 =                          × 0,510 = 1 × 0,510
                                                                (10 − 10)! × 0!
E a soma é:
                       𝛼 = 𝑃(𝑋 > 7) = 45 × 0,510 + 10 × 0,510 + 1 × 0,510 = 56 × 0,510
Essa expressão pode ser reescrita como:

                                                   1 10 56    56
                                         𝛼 = 56 × ( ) = 10 =      ≅ 0,05
                                                   2    2    1024
Gabarito: C

           Receita Federal (Analista Tributário) Estatística                                               36
           www.estrategiaconcursos.com.br                                                                  59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

37.    (FGV/2022 – TRT/PB) Para testar H0: p > 0,5 versus H1: p ≤ 0,5 será usado o critério usual
baseado na proporção de sucessos amostral. Observada uma amostra aleatória de tamanho 225,
verificou-se uma proporção de sucessos amostral aproximadamente igual a 46%. O p-valor
associado a esse critério é, então, aproximadamente igual a

a) 0,01.
b) 0,05.
c) 0,09.
d) 0,12.
e) 0,15.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

Comentários:

O p-valor é a probabilidade de o resultado do teste ser mais extremo que o resultado obtido,
considerando a hipótese nula como premissa. Sabendo que a proporção amostral observada foi
𝑝̂ = 0,46 e que o teste é unilateral à esquerda, temos:
                                                 𝑝 − 𝑣𝑎𝑙𝑜𝑟 = 𝑃(𝑝̂ < 0,46)
Para calcular essa probabilidade, vamos utilizar a transformação para a normal padrão, sabendo
que a proporção indicada na hipótese nula é 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 = 0,5):
                                       𝑝̂ − 𝑝       0,46 − 0,5       −0,04 −0,6
                                 𝑧=             =                =        =     = −1,2
                                        𝑝×𝑞                           0,5   0,5
                                      √             √0,5 × 0,5        15
                                         𝑛              225
Pela tabela normal padrão, observamos que 𝑃(𝑍 ≤ 1,2) = 0,8849. A probabilidade complementar
é:
                               𝑃(𝑍 > 1,2) = 1 − 𝑃(𝑍 ≤ 1,2) = 1 − 0,8849 = 0,1151
Pela simetria da normal padrão, temos:
                                     𝑃(𝑍 < −1,2) = 𝑃(𝑍 > 1,2) = 0,1151 ≅ 0,12
Que é justamente a probabilidade desejada.

Gabarito: D

38.     (FGV/2022 – TRT/MA) Para testar a independência entre dois atributos, 400 pessoas foram
classificadas de acordo com sexo e opinião em relação a certa proposta da prefeitura.

Os resultados observados estão na tabela de contingências a seguir.

           Receita Federal (Analista Tributário) Estatística                                  37
           www.estrategiaconcursos.com.br                                                     59

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                                                                  Opinião
                                                                                  Total
                                                           Contra A favor

                                                Masc.          120         80     200
                                       Sexo
                                                 Fem.          130         70     200

                                            Total              250         150    400

O valor da estatística de teste qui-quadrado usual para esses dados é aproximadamente igual a
a) 1,07.
b) 1,56.
c) 2,24.
d) 2,56.
e) 3,02.

Comentários:

O teste qui-quadrado de independência verifica se dois atributos (no caso, sexo e opinião em
relação à proposta) são independentes ou não.

Para isso, o teste compara os resultados observados com os valores que seriam esperados, caso
os dois atributos fossem, de fato, independentes.

Nessa situação, as proporções seriam sempre as mesmas. Por exemplo, se metade das pessoas é
do sexo masculino, então metade dos que são contrários à proposta deveriam ser do sexo
masculino e metade dos que são favoráveis deveriam ser do sexo masculino.

Assim, calculamos o valor esperado de cada campo, multiplicando o total da linha com o total da
coluna e dividindo pelo número total de pessoas:
                                                               𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                     𝐸𝑖𝑗 =
                                                                   𝑡𝑜𝑡𝑎𝑙

                                          Contra                             A Favor      Total
                                   𝟐𝟎𝟎 × 𝟐𝟓𝟎                            𝟐𝟎𝟎 × 𝟏𝟓𝟎
               Masculino                     = 125                                = 75    200
                                      400                                  400
                                   𝟐𝟎𝟎 × 𝟐𝟓𝟎                            𝟐𝟎𝟎 × 𝟏𝟓𝟎
                Feminino                     = 125                                = 75    200
                                      400                                  400

           Receita Federal (Analista Tributário) Estatística                                      38
           www.estrategiaconcursos.com.br                                                         59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                Total                    250                                150             400


Agora, calculamos o quadrado do desvio do valor observado para cada campo, que consta na
tabela fornecida no enunciado, em relação ao valor esperado, que acabamos de calcular:

                                                            (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                                 𝐸𝑖𝑗
                                                Contra                            A Favor
                                     (120 − 125)2 1                    (80 − 75)2 1
                     Masculino                   = = 0,2                         = = 0,333
                                         125      5                        75     3
                                     (130 − 125)2 1                    (70 − 75)2 1
                      Feminino                   = = 0,2                         = = 0,333
                                         125      5                        75     3


A estatística do teste consiste na soma desses valores:

                                                  2
                                                     (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                𝒳 =∑
                                                          𝐸𝑖𝑗

                               𝒳 2 ≅ 0,2 + 0,333 + 0,2 + 0,333 = 1,066 ≅ 1,07

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                         39
        www.estrategiaconcursos.com.br                                                            59

                                      


---

Equipe Exatas Estratégia Concursos
Aula Extra

      Receita Federal (Analista Tributário) Estatística                  40
      www.estrategiaconcursos.com.br                                     59

                                    


---

Equipe Exatas Estratégia Concursos
Aula Extra

      Receita Federal (Analista Tributário) Estatística                  41
      www.estrategiaconcursos.com.br                                     59

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

                         LISTA DE QUESTÕES EXTRAS – FGV

Teoria da Probabilidade

1.    (FGV/2022 – TRT/MA) Dois dados serão lançados aleatoriamente sobre uma mesa e os
números resultantes nas faces superiores serão anotados. Se X é o valor absoluto de diferença
entre os dois números, então a probabilidade de que X seja igual a 3 é igual a

a) 1/12
b) 1/8
c) 1/6
d) 1/3
e) 1/2

2.    (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados,
aleatoriamente, entre os números −3, −2, −1, 0, 1, 2, 3, 4.

A probabilidade de que o produto dos dois números sorteados seja maior do que zero é:

a) 1/2.
b) 9/28.
c) 19/28.
d) 19/56.
e) 23/56.

3.    (FGV/2022 – Câmara de Taubaté/SP) Em uma urna há 6 bolas numeradas de 1 a 6. Retiram-
se da urna, aleatoriamente, 2 bolas em sequência e sem reposição.

A probabilidade de o maior número nas bolas retiradas ser igual a 4 é:

a) 1/2.
b) 2/3.
c) 1/5.
d) 2/5.
e) 3/5.

          Receita Federal (Analista Tributário) Estatística                               42
          www.estrategiaconcursos.com.br                                                  59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

4.     (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas
são retiradas do saco ao acaso.

A probabilidade de que as bolinhas retiradas tenham números consecutivos é, aproximadamente,
igual a:

a) 22%;
b) 28%;
c) 33%;
d) 39%;
e) 45%.

                                                              ==219a34==

5.     (FGV/2022 – TCE/TO) Uma urna contém inicialmente 5 bolas brancas e 3 bolas pretas.
Suponha que, inicialmente, uma primeira bola seja sorteada, sua cor observada, e que essa bola
seja devolvida à urna juntamente com duas outras bolas da mesma cor. Em seguida, outra bola
será sorteada, sua cor, observada, e essa bola será devolvida à urna juntamente com outras duas
da mesma cor. Em seguida, será sorteada uma terceira bola. Suponha ainda, que, a cada sorteio,
todas as bolas na urna sejam igualmente prováveis de serem sorteadas.

A probabilidade de que as três bolas sorteadas sejam pretas é então, aproximadamente, igual a:

a) 0,05
b) 0,07
c) 0,09
d) 0,11
e) 0,13

6.    (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2
há 10 alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido
e conduzido à sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é
aleatoriamente escolhido.

A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a

a) 0,42
b) 0,47
c) 0,50
d) 0,53
e) 0,55


          Receita Federal (Analista Tributário) Estatística                                 43
          www.estrategiaconcursos.com.br                                                    59

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula Extra

7.     (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] =
𝟎, 𝟐 e 𝑷[𝑩] = 𝟎, 𝟓. A probabilidade condicional 𝑷[𝑨|𝑩] e as probabilidades 𝑷[𝑨 ∪ 𝑩] e 𝑷[𝑨 ∩ 𝑩]
valem respectivamente

a) 0,2; 0,6; 0,1
b) 0,1; 0,6; 0,2
c) 0,2; 0,3; 0,1
d) 0,2; 0,5; 0,1
e) 0,1; 0,6; 0,1

8.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
probabilidades P[A] > 0 e P[B] > 0, são falsas (F) ou verdadeiras (V):

   I.   Se A e B são mutuamente exclusivos então não são independentes.
  II.   Se A e B são independentes então P[A∩B] > 0.
 III.   Se A e B não são independentes, então P[A|B] ≠ P[A].

As afirmativas são respectivamente

a) V, V e F
b) V, F e F
c) F, F e F
d) F, V e V
e) V, V e V

9.    (FGV/2022 – Senado Federal) Uma peça é colocada inicialmente na casa 1 de um tabuleiro
composto de dez casas, numeradas de 1 a 10. A peça avança uma casa se um número par é obtido
no lançamento de um dado. Caso o número obtido seja ímpar, a peça avança duas casas. O
procedimento é repetido sucessivamente.

A probabilidade de a peça saltar a casa 8, indo direto para a casa 9, é de

a) 13/128.
b) 23/128.
c) 33/128.
d) 43/128.
e) 53/128.

         Receita Federal (Analista Tributário) Estatística                                 44
         www.estrategiaconcursos.com.br                                                    59

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Distribuições Discretas

10.  (FGV/2023 – SEFAZ/MG) Numa população, 50% das pessoas têm uma certa característica
C. Se oito pessoas desta população foram aleatoriamente sorteadas com reposição, a
probabilidade de que mais de cinco tenham a referida característica é aproximadamente igual a

a) 14%.
b) 18%.
c) 22%.
d) 25%.
e) 29%.

11.   (FGV/2022 – TRT/MA) Uma moeda honesta será lançada 10 vezes. Se X é o número de caras
observadas, então a variância de X vale

a) 1,0
b) 1,5
c) 2,0
d) 2,5
e) 3,0

12.    (FGV/2022 – TRT/MA) Suponha que experimentos Bernoulli independentes sejam
realizados até que o primeiro “sucesso” aconteça.

Se X é o número de tentativas anteriores a esse primeiro “sucesso”, avalie se as afirmativas a
seguir sobre a distribuição de X estão corretas.

I. X tem distribuição geométrica.
II. E[X] = (1 – p)/p
III. Var[X] = (1 – p)/p²
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.


          Receita Federal (Analista Tributário) Estatística                                45
          www.estrategiaconcursos.com.br                                                   59

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula Extra

d) II e III, apenas.
e) I, II e III.

13.    (FGV/2022 – TRT/MA) Uma fábrica produz N itens, dos quais K são defeituosos. Se n itens
diferentes forem sorteados aleatoriamente dessa produção, então o número de itens defeituosos
nessa amostra tem distribuição

a) binomial.
b) exponencial.
c) uniforme discreta.
d) hipergeométrica.
e) Poisson.

14.    (FGV/2022 – TRT/MA) Um exemplo de variável aleatória cuja distribuição de probabilidades
é tal que a média é sempre igual a variância é a

a) binomial.
b) exponencial.
c) uniforme discreta.
d) hipergeométrica.
e) Poisson.

15.   (FGV/2022 – TRT/MA) Suponha que um processo Poisson esteja ocorrendo no tempo a uma
taxa média de 0,5/min. Usando 𝐞−𝟎,𝟐𝟓 = 0,7788, a probabilidade de que ocorra um acontecimento
num intervalo de 30s é, aproximadamente, igual a

a) 0,104.
b) 0,195.
c) 0,256.
d) 0,348.
e) 0,360.

Distribuições Contínuas

16.   (FGV/2022 – TCE/TO) Se X tem distribuição exponencial com parâmetro 𝝀, ou seja, se
𝒇(𝒙) = 𝝀𝒆−𝝀𝒙, se 𝒙 > 𝟎, 𝝀 > 𝟎, então a variância de X é igual a


           Receita Federal (Analista Tributário) Estatística                                46
           www.estrategiaconcursos.com.br                                                   59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

a) 𝜆2

   1
b) 𝜆

   1
c) 𝜆2

   2
d) 𝜆2

e) 𝜆

17.   (FGV/2022 – TCE/TO) Se X tem distribuição normal com média 𝝁 e variância 𝝈𝟐 , então a
seguinte variável tem distribuição normal padrão:

         (𝑋−𝜇)
a) 𝑍 =     𝜎

         (𝑋−𝜇)2
b) 𝑍 =     𝜎

         (𝑋−𝜇)2
c) 𝑍 =    𝜎2

         (𝑋−𝜇)
d) 𝑍 =    𝜎2

         (𝑋−𝜇)
e) 𝑍 =    2𝜎

18.    (FGV/2022 – TRT/MA) A soma dos quadrados de n variáveis aleatórias independentes e
identicamente distribuídas N(0, 1) tem distribuição

a) N(n, 1)
b) N(n, n²)
c) qui-quadrado com (n – 1) graus de liberdade
d) qui-quadrado com n graus de liberdade
e) N(n, n)

19.      (FGV/2022 – TRT/PB) Uma amostra aleatória simples 𝑿𝟏 , 𝑿𝟐 , . . . , 𝑿𝟏𝟎 , de tamanho 10, de uma
                                                                               𝟐                 (𝑿𝒊 −𝝁)
variável populacional 𝑵(𝝁, 𝝈𝟐 ) será obtida. Nesse caso, a variável 𝑾 = ∑𝟏𝟎
                                                                         𝒊=𝟏 𝒁𝒊 , em que 𝒁𝒊 =            ,
                                                                                                    𝝈
tem distribuição de probabilidades


          Receita Federal (Analista Tributário) Estatística                                             47
          www.estrategiaconcursos.com.br                                                                59

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

a) N(0, )
b) N(0, 1002)
c) qui-quadrado com 9 graus de liberdade.
d) qui-quadrado com 10 graus de liberdade.
e) t-Student com 9 graus de liberdade.

20.    (FGV/2022 – TRT/MA) Se X tem distribuição qui-quadrado com n graus de liberdade, Y tem
distribuição qui-quadrado com m graus de liberdade e se X e Y são independentes, então a
seguinte variável tem distribuição F com n e m graus de liberdade:

a) XY/nm
b) nmX/Y
c) nX²/mY²
d) mX/nY
e) X²/Y

Estimação Pontual e Intervalar

21.   (FGV/2022 – TRT/MA) Uma amostra aleatória simples de tamanho 784 será obtida para se
estimar o valor de uma média populacional. Se 𝝈 é o valor do desvio padrão populacional, a
probabilidade de que o valor da média amostral não difira do valor da média populacional por
mais de 0,1𝝈, é aproximadamente igual a

a) 0,995.
b) 0,975.
c) 0,957.
d) 0,946.
e) 0,933.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

22.  (FGV/2022 – TRT/MA) Numa dada população, 50% das pessoas são do sexo feminino.
Usando o teorema central do limite, se uma amostra aleatória simples de tamanho n = 1.225 dessa

          Receita Federal (Analista Tributário) Estatística                                  48
          www.estrategiaconcursos.com.br                                                     59

                                        


---

     Equipe Exatas Estratégia Concursos
     Aula Extra

população for observada, a probabilidade de que, na amostra, a porcentagem de pessoas do sexo
feminino seja menor do que 0,46 ou maior do que 0,54 é aproximadamente igual a

a) 0.
b) 0,045.
c) 0,085.
d) 0,125.
e) 0,150.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

23.    (FGV/2022 – TRT/MA) Suponha uma amostra aleatória simples 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 , 𝑿𝟒 de uma
variável populacional com média 𝝁. Assinale a opção que apresenta um estimador não
tendencioso de 𝝁.

a) 𝑋1 + 𝑋2
b) 𝑋1 − 𝑋2 + 𝑋3 − 𝑋4
c) (2𝑋3 + 3𝑋4 )/5
d) (2𝑋1 + 3𝑋2 + 2𝑋3 + 3𝑋4 )/5
e) 5𝑋4

24.   (FGV/2022 – TRT/MA) Considere 𝑿𝟏 , 𝑿𝟐 , ..., 𝑿𝐧 uma amostra aleatória simples de uma
função de densidade exponencial parâmetro q, ou seja,

                            𝒇(𝒙, 𝜽) = 𝜽. 𝒆𝒙𝒑{−𝜽𝒙},             𝒔𝒆 𝒙 > 𝟎; 𝒇(𝒙, 𝜽) = 𝟎,   𝒔𝒆 𝒙 ≤ 𝟎

O estimador não tendencioso de variância uniformemente mínima de 1/ é
        𝑛
a) ∑𝑛
      𝑖=1 𝑋𝑖

     ∑𝑛
      𝑖=1 𝑋𝑖
b)      𝑛
    𝑛−1
c) ∑𝑛 𝑋
    𝑖=1 𝑖

     ∑𝑛
      𝑖=1 𝑋𝑖
d)    𝑛−1
     ∑𝑛
      𝑖=1 𝑋𝑖
e)     2𝑛

               Receita Federal (Analista Tributário) Estatística                                   49
               www.estrategiaconcursos.com.br                                                      59

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

25.   (FGV/2022 – TRT/PB) A seguinte amostra de uma densidade uniforme no intervalo (0, 𝜽) foi
obtida:

                           22,1     23,5     18,5 30,1 28,7 20,0 16,4         29,2 25,5

A estimativa de máxima verossimilhança de 𝜽 é igual a
a) 21,4.
b) 25,5.
c) 28,7.
d) 29,0.
e) 30,1.

26.   (FGV/2022 – TRT/MA) Se 𝑿𝟏 , 𝑿𝟐 , ..., 𝑿𝐧 é uma amostra aleatória simples de uma variável
populacional normalmente distribuída com média  e variância ², então o estimador de máxima
verossimilhança de log(²) é

a) 𝑛. log[∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
         1
b) log [𝑛+1 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]

c) 2𝑛. log[∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
        1
d) log [𝑛 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]
           1
e) log [𝑛−1 ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2 ]

27.    (FGV/2022 – TRT/MA) Considere uma amostra aleatória de tamanho n obtida de uma
distribuição Bernoulli com parâmetro p:

                              𝒇(𝒙; 𝒑) = 𝒑𝒙 (𝟏 − 𝒑)𝟏−𝒙 ,        𝒙 = 𝟎 𝒐𝒖 𝟏,    𝟎≤𝒑≤𝟏

A função de verossimilhança correspondente é então
a) 𝐿(𝑝) = 𝑝∑ 𝑥𝑖 (1 − 𝑝)𝑛−∑ 𝑥𝑖
b) 𝐿(𝑝) = 𝑝𝑛−∑ 𝑥𝑖 (1 − 𝑝)1−∑ 𝑥𝑖
c) 𝐿(𝑝) = 𝑝2 (1 − 𝑝)𝑛−1 ∑ 𝑥𝑖
d) 𝐿(𝑝) = 𝑝𝑛 (1 − 𝑝)𝑛−1 ∑ 𝑥𝑖
                            ∑ 𝑥𝑖
e) 𝐿(𝑝) = (1 − 𝑝)𝑛−1 .         ⁄ ∑ 𝑥𝑖
                                 𝑝

           Receita Federal (Analista Tributário) Estatística                               50
           www.estrategiaconcursos.com.br                                                  59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

28.   (FGV/2023 – SEFAZ/MG) O menor tamanho da amostra aleatória simples para que
possamos garantir, com 99% de confiança, que a proporção de sucessos amostral não diferirá da
proporção de sucessos populacional por mais de 1% deve ser aproximadamente igual a

[dado: se 𝒁~𝑵(𝟎, 𝟏), 𝑷[𝒁 < 𝟐, 𝟓𝟖] = 𝟎, 𝟗𝟗𝟓]

a) 1.032.

b) 4.236.

c) 6.488.

d) 16.642.

e) 18.544.

29.   (FGV/2022 – TRT/MA) Se p é uma proporção populacional, o tamanho da amostra
necessário para que possamos garantir, com 95% de confiança, que o valor da proporção amostral
não se afastará do valor de p por mais de 2% é, aproximadamente, igual a

a) 1.600.
b) 1.800.
c) 2.000.
d) 2.200.
e) 2.400.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

30.    (FGV/2022 – TRT/PB) Supondo amostra aleatória simples, usando o teorema central do
limite e considerando, ainda, o pior caso, o tamanho da amostra para que possamos garantir, com
99% de confiança, que o valor de uma proporção amostral não diferirá do valor da proporção
populacional por mais de 2% é, no mínimo, aproximadamente igual a

a) 1.640.
b) 2.720.
c) 3.105.
d) 3.458.

        Receita Federal (Analista Tributário) Estatística                                    51
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

e) 4.160.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

31.  (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 16 de uma densidade
normal com média 𝝁 e variância 𝝈𝟐 apresentou os seguintes resultados:

̅ = 20,5 e ∑(𝒙𝒊 − 𝒙
𝒙                 ̅)𝟐 = 60

Um intervalo de 95% de confiança para  será dado aproximadamente por

a) (19,43; 21,57)
b) (19,14; 21,86)
c) (18,62; 22,38)
d) (18,32; 22,68)
e) (18,00; 23,00)

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

32.   (FGV/2022 – TRT/PB) Considere 𝑿𝟏 , 𝑿𝟐 , … , 𝑿𝒏 uma amostra aleatória simples de uma variável
populacional normalmente distribuída com média 𝝁 e variância 𝝈𝟐 . Um intervalo de confiança para
𝝈𝟐 será dado por

                                            ̅ )𝟐
                                 ∑𝒏𝒊=𝟏(𝑿𝒊 − 𝑿                      ̅ )𝟐
                                                        ∑𝒏𝒊=𝟏(𝑿𝒊 − 𝑿
                               𝑷[                ≤ 𝝈𝟐 ≤                 ] = 𝟎, 𝟗𝟓
                                        𝒂                      𝒂

Assim, 𝒂 e 𝒃 podem ser, respectivamente,

a) o percentil 2,5% e o percentil 97,5% da distribuição qui-quadrado com n – 1 graus de liberdade.
b) o percentil 97,5% e o percentil 2,5% da distribuição qui-quadrado com n – 1 graus de liberdade.
c) o percentil 2,5% e o percentil 97,5% da distribuição qui-quadrado com n graus de liberdade.
d) o percentil 97,5% e o percentil 2,5% da distribuição qui-quadrado com n graus de liberdade.
e) o percentil 97,5% e o percentil 2,5% da distribuição t com n – 1 graus de liberdade.

        Receita Federal (Analista Tributário) Estatística                                      52
        www.estrategiaconcursos.com.br                                                         59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

Testes de Hipóteses

33.    (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 400 será usada para testar
𝑯𝟎 : 𝝁 ≤ 𝟏𝟎𝟎 versus 𝑯𝟏 : 𝝁 > 𝟏𝟎𝟎, em que 𝝁 é a média de uma densidade normal com desvio
padrão suposto igual a 50. O critério que rejeita 𝑯𝟎 se 𝒙
                                                        ̅ > 𝟏𝟎𝟓 será usado.

O nível de significância desse critério e a probabilidade de erro tipo II se 𝝁 = 103 valem,
respectivamente, aproximadamente:

a) 0,02 e 0,79.
b) 0,02 e 0,21.
c) 0,02 e 0,54.
d) 0,05 e 0,21.
e) 0,05 e 0,38.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

34.   (FGV/2022 – TRT/MA) Uma amostra aleatória de tamanho 144 de uma população descrita
por uma variável aleatória suposta normalmente distribuída com média 𝝁 e variância 𝝈𝟐
apresentou os seguintes dados:

                                                            𝟏𝟒𝟒

                                       ̅ = 𝟓𝟐, 𝟓,
                                       𝒙                          ̅)𝟐 = 𝟓𝟏𝟒𝟖
                                                            ∑(𝒙 − 𝒙
                                                            𝒊=𝟏


Assim, se queremos testar H0: 𝝁 ≤ 50 versus H1: 𝝁 > 50, o critério de decisão com base na
estatística de teste t usual, ao nível de significância de 5%, e a respectiva decisão serão:

a) Rejeitar H0 se 𝑥̅ ≥ 54,02, logo não rejeitamos H0.
b) Rejeitar H0 se 𝑥̅ ≥ 49,12, logo rejeitamos H0.
c) Rejeitar H0 se 𝑥̅ ≥ 55,03, logo não rejeitamos H0.
d) Rejeitar H0 se 𝑥̅ ≥ 50,82, logo rejeitamos H0.
e) Rejeitar H0 se 𝑥̅ ≥ 53,28, logo não rejeitamos H0.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

        Receita Federal (Analista Tributário) Estatística                                    53
        www.estrategiaconcursos.com.br                                                       59

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

35.    (FGV/2022 – TRT/MA) Para testar se a proporção p de pessoas infectadas pela dengue já é
superior a 10%, num dado momento, uma amostra aleatória simples de 400 pessoas será
observada e será usado o critério de decisão que decide por p > 10% se ao menos 48 pessoas
estiverem infectadas.

O nível de significância associado a esse critério é aproximadamente igual a

a) 0,01.
b) 0,02.
c) 0,05.
d) 0,09.
e) 0,12.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

36.    (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 10 de uma densidade
Bernoulli (p) será observada para testar H0: p ≤ 0,5 versus H1: p > 0,5 e será usado o critério que
rejeita H0 se o número de “sucessos” na amostra for maior do que 7.

A probabilidade de erro tipo I máxima com esse critério é aproximadamente igual a

a) 0,001.
b) 0,01.
c) 0,05.
d) 0,1.
e) 0,2.

37.    (FGV/2022 – TRT/PB) Para testar H0: p > 0,5 versus H1: p ≤ 0,5 será usado o critério usual
baseado na proporção de sucessos amostral. Observada uma amostra aleatória de tamanho 225,
verificou-se uma proporção de sucessos amostral aproximadamente igual a 46%. O p-valor
associado a esse critério é, então, aproximadamente igual a

a) 0,01.
b) 0,05.
c) 0,09.
d) 0,12.


           Receita Federal (Analista Tributário) Estatística                                    54
           www.estrategiaconcursos.com.br                                                       59

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula Extra

e) 0,15.

Para resolver essa questão, utilize as tabelas apresentadas ao final, fornecidas na prova.

38.     (FGV/2022 – TRT/MA) Para testar a independência entre dois atributos, 400 pessoas foram
classificadas de acordo com sexo e opinião em relação a certa proposta da prefeitura.

Os resultados observados estão na tabela de contingências a seguir.


                                                                 Opinião
                                                                              Total
                                                           Contra A favor

                                                Masc.          120     80     200
                                       Sexo
                                                 Fem.          130     70     200

                                            Total              250    150     400

O valor da estatística de teste qui-quadrado usual para esses dados é aproximadamente igual a
a) 1,07.
b) 1,56.
c) 2,24.
d) 2,56.
e) 3,02.

           Receita Federal (Analista Tributário) Estatística                                 55
           www.estrategiaconcursos.com.br                                                    59

                                         


---

Equipe Exatas Estratégia Concursos
Aula Extra

      Receita Federal (Analista Tributário) Estatística                  56
      www.estrategiaconcursos.com.br                                     59

                                    


---

Equipe Exatas Estratégia Concursos
Aula Extra

      Receita Federal (Analista Tributário) Estatística                  57
      www.estrategiaconcursos.com.br                                     59

                                    


---

Equipe Exatas Estratégia Concursos
Aula Extra

                                              GABARITO
 1. LETRA C                                  14. LETRA E                 27. LETRA A
 2. LETRA B                                  15. LETRA B                 28. LETRA D
 3. LETRA C                                  16. LETRA C                 29. LETRA E
 4. LETRA A                                  17. LETRA A                 30. LETRA E
 5. LETRA D                                  18. LETRA D                 31. LETRA A
 6. LETRA B                                  19. LETRA D                 32. LETRA B
 7. LETRA A                                  20. LETRA D                 33. LETRA A
 8. LETRA E                                  21. LETRA A                 34. LETRA D
 9. LETRA D                                  22. LETRA A                 35. LETRA D
 10. LETRA A                                 23. LETRA C                 36. LETRA C
 11. LETRA D                                 24. LETRA B                 37. LETRA D
 12. LETRA E                                 25. LETRA E                 38. LETRA A
 13. LETRA D                                 26. LETRA D

      Receita Federal (Analista Tributário) Estatística                                58
      www.estrategiaconcursos.com.br                                                   59

                                    


---

---
