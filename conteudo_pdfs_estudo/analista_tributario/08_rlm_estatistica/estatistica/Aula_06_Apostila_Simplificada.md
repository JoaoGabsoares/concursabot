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
arquivo_origem: Aula 06_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '06'
titulo_aula: Estatística
---

# Estatística

Aula 05
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                            21 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 05

                                                                                     Índice
1) Princípios Fundamentais de Contagem.


2) Fatorial de um Número Natural.


3) Permutação.


4) Arranjo e Combinação.


5) Questoes Comentadas - Princípios de Contagem - FGV


6) Questões Comentadas - Permutação - FGV


7) Questões Comentadas - Arranjo e Combinação - FGV


8) Lista de Questoes - Princípios de Contagem - FGV


9) Lista de Questões - Permutação - FGV


10) Lista de Questões - Arranjo e Combinação - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           70

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                    ANÁLISE COMBINATÓRIA

Princípios Fundamentais da Contagem

Nesta seção, veremos os princípios fundamentais de contagem, que você vai utilizar muito. Eles permeiam
as ferramentas da análise combinatória e são requisitados em praticamente todas as questões sobre o
assunto, desde as mais simples, até as mais complexas.

Princípio Multiplicativo

          Se um evento A ocorre de m maneiras diferentes e se, para cada uma dessas maneiras, um
          outro evento B ocorre de n maneiras diferentes, então o número de maneiras diferentes de
          ambos os eventos (A e B) ocorrerem é m x n.

Para ilustrar, vamos considerar que João precisa se vestir com uma calça e uma blusa e que ele tem 3 calças
e 4 blusas. Nesse caso, o evento A corresponde a vestir uma calça, com m = 3 possibilidades, e o evento B
corresponde a vestir uma blusa, com n = 4 possibilidades.

Segundo o princípio multiplicativo, o número de maneiras distintas de João se vestir é:

                                                 𝒎 × 𝒏 = 𝟑 × 𝟒 = 12

Podemos extrapolar esse princípio para qualquer número de eventos. Ou seja, se tivermos um terceiro
evento C que ocorre de p maneiras diferentes, então o número de maneiras diferentes de os eventos A, B e
C ocorrerem é m x n x p.

Utilizando o mesmo exemplo, considerando que João precisa utilizar um cinto e que ele tem p = 2 cintos
distintos, então o número de maneiras distintas de João colocar uma calça, uma blusa e um cinto é:

                                          𝒎 × 𝒏 × 𝒑 = 𝟑 × 𝟒 × 𝟐 = 24

(VUNESP/2019 – Prefeitura de dois Córregos/SP) Em um grupo de pessoas, há 12 homens e 13 mulheres.
Com essas pessoas, uma dupla será aleatoriamente formada, com um homem e uma mulher, para participar
de um concurso. O número total de possibilidades para a formação dessa dupla é
a) 12.
b) 144.
c) 156.


          Receita Federal (Analista Tributário) Estatística                                              3
          www.estrategiaconcursos.com.br                                                                70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 168.
e) 288.
Comentários:
Havendo 12 homens e 13 mulheres, o número de possibilidades de selecionar um homem E uma mulher é,
pelo princípio multiplicativo:
                                                       12 x 13 = 156
Gabarito: C


(2019 – Prefeitura de Jacutinga/MG) Assinale a alternativa que contém a quantidade de vezes que é possível
usar de maneiras diferentes duas blusas, três calças e quatro meias:
a) 24 maneiras diferentes.
b) 28 maneiras diferentes.
c) 32 maneiras diferentes.
d) 36 maneiras diferentes.
Comentários:
Há 2 blusas para cada uma das 3 calças. Além disso, para cada possível combinação de uma blusa e uma
calça, há 4 meias diferentes. Logo, o número de alternativas é, pelo princípio multiplicativo:
                                                       2 x 3 x 4 = 24
Gabarito: A


(CESPE/2013 – TRT-ES) Os alunos de uma turma cursam 4 disciplinas que são ministradas por 4 professores
diferentes. As avaliações finais dessas disciplinas serão realizadas em uma mesma semana, de segunda a
sexta-feira, podendo ou não ocorrerem em um mesmo dia. A respeito dessas avaliações, julgue o item
seguinte.
Se cada professor escolher o dia em que aplicará a avaliação final de sua disciplina de modo independente
dos demais, haverá mais de 500 maneiras de se organizar o calendário dessas avaliações.
Comentários:
Vamos representar as escolhas dos 4 professores da seguinte forma:


Sabendo que há 5 dias disponíveis, então cada professor terá 5 possibilidades de escolha:

Pelo princípio multiplicativo, o número de maneiras de organizar o calendário para os 4 professores é:
                                       Número de maneiras = 5 x 5 x 5 x 5 = 625
Ou seja, há mais de 500 maneiras de organizar.
Gabarito: Certo.


          Receita Federal (Analista Tributário) Estatística                                              4
          www.estrategiaconcursos.com.br                                                                 70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(FGV/2022 – PM-PB) Cada vértice de um quadrado ABCD deverá ser pintado com uma cor. Há 5 cores
diferentes disponíveis para essa tarefa. A única restrição é que os vértices que estejam em extremidades
opostas de qualquer diagonal do quadrado (AC e BD) sejam pintados com cores diferentes. O número de
maneiras diferentes de pintar os vértices desse quadrado é:
a) 18
b) 60
c) 120
d) 240
e) 400
Comentários:
A questão informa que temos 5 cores disponíveis para pintar 4 vértices de um quadrado:
                                                      A             B


                                                     D              C
No entanto, a cor do vértice A deve ser diferente da cor do vértice C; e a cor do vértice B deve ser diferente
da cor do vértice D.
Assim, há 5 possibilidades para o vértice A e 4 possibilidades para o vértice C.
Similarmente, há 5 possibilidades para o vértice B e 4 possibilidades para o vértice D.
Pelo princípio multiplicativo, o número total de possibilidades para todos os 4 vértices é:
                                                    5 x 5 x 4 x 4 = 400
Gabarito: E

Princípio Aditivo

         Se o evento A ocorre de m maneiras diferentes e o evento B ocorre de n maneiras diferentes,
         e se A e B são mutuamente exclusivos (ou seja, se um ocorrer o outro não ocorre), então
         o número de maneiras de ocorrer um dos eventos (A ou B) é m + n.

Para ilustrar esse princípio, vamos considerar que João precisa se calçar e que ele possui 3 opções de tênis e
2 opções de sapatos.

Nesse caso, o evento A corresponde a calçar um tênis, com m = 3 possibilidades, e o evento B corresponde
a calçar um sapato, com n = 2 possibilidades. Esses eventos são mutuamente excludentes (João calçará um
tênis ou um sapato; ele não pode calçar os dois). Assim, o número de maneiras de João se calçar é a soma:

                                                    m+n=3+2=5

Podemos generalizar esse princípio para qualquer número de eventos.


         Receita Federal (Analista Tributário) Estatística                                                 5
         www.estrategiaconcursos.com.br                                                                    70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

         •   Quando ambos ocorrem os eventos (A E B), multiplicamos as possibilidades;
         •   Quando ocorre somente um dos eventos (A OU B), somamos as possibilidades.

               Eventos Concomitantes: A e B                              Princípio Multiplicativo: n(A) x n(B)


               Eventos Excludentes: A ou B                                  Princípio Aditivo: n(A) + n(B)
                                                            ==219a34==

(CESPE/2013 – TRT-ES) Considerando que, na fruteira da casa de Pedro, haja 10 uvas, 2 maçãs, 3 laranjas, 4
bananas e 1 abacaxi, julgue o próximo item.
Se Pedro desejar comer apenas um tipo de fruta, a quantidade de maneiras de escolher frutas para comer
será superior a 100.
Comentários:
Se Pedro deseja comer apenas um tipo de fruta, ele poderá comer uvas OU maçãs OU laranjas OU bananas
OU abacaxi.
i) Uvas: há 10 uvas, logo Pedro poderá comer 1, 2, 3, 4, 5, 6, 7, 8, 9 ou 10 uvas. Logo, há 10 maneiras de
escolher uvas para comer;
ii) Maçãs: há 2 maçãs, logo há 2 maneiras de escolher maçãs para comer;
iii) Laranjas: com 3 laranjas, há 3 maneiras de comer laranjas;
iv) Bananas: com 4 bananas, há 4 maneiras de comer bananas;
v) Abacaxi: há 1 abacaxi, logo há 1 forma de comer abacaxi.
Como Pedro irá escolher apenas uma dessas opções, então devemos aplicar o princípio aditivo:
                                  Número de maneiras = 10 + 2 + 3 + 4 + 1 = 20
Que é inferior a 100.
Gabarito: Errado.


        Receita Federal (Analista Tributário) Estatística                                                        6
        www.estrategiaconcursos.com.br                                                                           70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(CESPE 2016/FUB) Em um intervalo para descanso, a assistente em administração Marta foi a uma
lanchonete cujo cardápio oferecia 7 tipos diferentes de salgados, 4 tipos diferentes de bolos, 3 espécies
diferentes de tapioca, sucos de 3 sabores diferentes e 5 tipos diferentes de refrigerantes. A partir dessa
situação hipotética, julgue o item que se segue.
Se Marta desejar fazer um lanche com apenas uma opção de comida e apenas uma bebida, ela terá mais de
100 maneiras distintas de organizar seu lanche.
Comentários:
Marta deseja escolher uma comida E uma bebida.
Para comer, Marta pode escolher uma das 7 opções de salgado OU um dos 4 tipos de bolo OU uma das 3
espécies de tapioca. Pelo princípio aditivo, as opções de comida são:
                                                     7 + 4 + 3 = 14
Para beber, Marta pode escolher uma das 3 opções de suco OU uma das 5 opções de refrigerante. Pelo
princípio aditivo, as opções de bebida são:
                                                        3+5=8
Pelo princípio multiplicativo, o número de maneiras de se escolher uma comida E uma bebida é:
                                                     14 × 8 = 112
Logo, há mais de 100 maneiras.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                               7
        www.estrategiaconcursos.com.br                                                                 70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                       FATORIAL DE UM NÚMERO NATURAL
Para resolvermos diversas questões de análise combinatória, utilizamos o chamado fatorial. O fatorial de um
número natural (0, 1, 2, 3, ...) é representado como:

                                                                         𝒏!

         O fatorial representa o produto de todos os números inteiros positivos menores ou iguais
                                                            ==219a34==

         àquele número, conforme indicado a seguir:

                                    𝒏! = 𝒏 × (𝒏 − 𝟏) × (𝒏 − 𝟐) × … × 𝟐 × 𝟏

Por exemplo:

                                                    3! = 3 x 2 x 1 = 6

                                            6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

Podemos representar o fatorial de um número natural como um fatorial de qualquer outro número natural
menor, por exemplo:

                                               4! = 4 x 3 x 2 x 1 = 4 x 3!
                                                           3!

                           10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 10 x 9 x 8 x 7 x 6!
                                                           6!

Esse tipo de mudança facilita o cálculo das divisões entre fatoriais (muito comuns em combinatória):

                           6! 6 × 5 × 4 × 3! 6 × 5 × 4 × 3!
                              =             =               = 6 × 5 × 4 = 120
                           3!       3!             3!
                       10! 10 × 9 × 8 × 7! 10 × 9 × 8 × 7!
                          =               =                = 10 × 9 × 8 = 720
                       7!        7!              7!

Atente-se para dois casos especiais: tanto o fatorial de 1 quanto o fatorial de fatorial de 0 são iguais a 1:

                                                                  1! = 1

                                                                  0! = 1

        Receita Federal (Analista Tributário) Estatística                                                       8
        www.estrategiaconcursos.com.br                                                                          70

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

(2019 – Prefeitura de Jacutinga/MG) O fatorial de um número é extremamente utilizado na análise
combinatória. Dessa forma, analise as proposições a seguir:
I. O fatorial n! de um número n ∈ ℕ é dado por n! = n × (n − 1) × (n − 2) … 3 × 2 × 1;
II. 0! = 1;
III. 1! = 0.
Está(ão) CORRETA(S) a(s) proposição(ões):
a) II apenas.
b) I e II apenas.
c) II e III apenas.
d) I e III apenas.
Comentários:
A proposição I corresponde exatamente à definição de fatorial: n! = n × (n − 1) × (n − 2) … 3 × 2 × 1
A proposição II também está correta, pois 0! = 1.
A proposição III está incorreta, pois 1! = 1.
Ou seja, estão corretas apenas as proposições I e II.
Gabarito: B


                                                                             200!
(2018 – Prefeitura de Uruçuí/PI) A simplificação da expressão a seguir é: 198!
a) 200
b) 198!
c) 38.800
d) 39.800
Comentários:
Podemos escrever 200! como 200! = 200 x 199 x 198!. Assim, temos:
                                 200! 200 × 199 × 198!
                                      =                = 200 × 199 = 39.800
                                 198!       198!
Gabarito: D

          Receita Federal (Analista Tributário) Estatística                                             9
          www.estrategiaconcursos.com.br                                                                70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                              PERMUTAÇÃO
Permutar significa trocar de lugar. As técnicas de permutação permitem calcular o número de maneiras
distintas de ordenar os elementos.

Permutação Simples

Na permutação simples, os elementos a serem ordenados são todos distintos entre si.

Vamos supor que precisamos organizar 3 pessoas diferentes (Ana, Beto e Caio) em uma fila. De quantas
maneiras podemos organizar essa fila?

Inicialmente, há 3 possibilidades (Ana, Beto ou Caio) para o primeiro lugar da fila. Após a escolha do primeiro
lugar, restarão 2 possibilidades para o segundo lugar. Por fim, restará 1 possibilidade para o terceiro lugar.

                                                  3          2         1
                                                  1º        2º        3º

Como são eventos concomitantes, pois alguém ficará em primeiro lugar, outra pessoa ficará em segundo E
outra em terceiro, devemos multiplicar as possibilidades de cada evento, pelo princípio multiplicativo:

                                                        3x2x1

E se houvesse 4 pessoas? Nesse caso, teríamos 4 possibilidades para o primeiro lugar; 3 para o segundo lugar;
2 para o terceiro e 1 para o quarto:

                                                       4x3x2x1

Para n alunos, temos:

                                          n x (n – 1) x (n – 2) x ... x 3 x 2 x 1

Que corresponde à fórmula do fatorial!

         A permutação simples de n elementos distintos, que podemos representar como 𝑷𝒏 , é:

                                                        𝑷𝒏 = 𝒏!

        Receita Federal (Analista Tributário) Estatística                                                   10
        www.estrategiaconcursos.com.br                                                                      70

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

(FGV/2019 – Prefeitura de Salvador/BA) Trocando-se a ordem das letras da sigla PMS de todas as maneiras
possíveis, obtêm-se os anagramas dessa sigla. O número desses anagramas é:
a) 16.
b) 12.
c) 9.
d) 8.
e) 6.
Comentários:
Considerando que todas as 3 letras de PMS são distintas, o número de anagramas, ou seja, de formas de se
reordenar essas letras é a permutação de 3 elementos:
                                                  P3 = 3! = 3 x 2 x 1 = 6
Gabarito: E


(CESPE 2018/EBSERH) Julgue o próximo item, a respeito de contagem.
Se a enfermaria de um hospital possuir cinco leitos desocupados e se cinco pacientes forem ocupar esses
leitos, então haverá mais de 100 formas diferentes de fazer essa ocupação.
Comentários:
Considerando que temos 5 leitos para serem ocupados por 5 pacientes, temos uma permutação de 5
elementos:
                                         𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120
Logo, há mais de 100 formas de fazer essa ocupação.
Gabarito: Certo.

Permutação Simples com Restrições

É possível que algumas questões de permutações imponham determinadas restrições, de modo nem todos
os elementos poderão permutar livremente.

Por exemplo, vamos considerar que há 8 elementos distintos a serem ordenados {1, 2, 3, 4, 5, 6, 7, 8}, de
modo que o número 1 esteja fixo na primeira posição e o número 8, na oitava posição.

         Receita Federal (Analista Tributário) Estatística                                            11
         www.estrategiaconcursos.com.br                                                               70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                              1                                                   8


Sendo assim, restarão os algarismos 2 a 7 (ou seja, um total de 6 algarismos) para serem livremente
ordenados nos 6 espaços restantes. Dessa forma, teremos uma permutação de 6 elementos:

                                          P6 = 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

(FCC/2019 – Analista Judiciário do TRF 3ª Região) Em um concurso com 5 vagas, os candidatos aprovados
serão alocados, cada um, em um dos municípios A, B, C, D ou E. O primeiro colocado foi designado para o
município A. O número de possíveis alocações dos outros candidatos aprovados é
a) 30
b) 4
c) 120
d) 24
e) 6
Comentários:
Essa questão trabalha com a permutação de 5 elementos, com um deles fixo.
Considerando que 1 dos candidatos está fixo no município A, restam 4 candidatos para serem alocados em
4 municípios (B, C, D ou E). Portanto:
                                               P4 = 4! = 4 x 3 x 2 x 1 = 24
Gabarito: D.


(CESPE 2018/BNB) Em um navio, serão transportados 10 animais, todos de espécies diferentes. Antes de
serem colocados no navio, os animais deverão ser organizados em uma fila. Entre esses 10 animais, há um
camelo, um elefante e um leão. A respeito da organização dessa fila, julgue o item subsequente.
Existem 8! maneiras distintas de organizar essa fila de forma que o camelo fique na primeira posição e o
elefante fique na sexta posição.
Comentários:
A questão pede para organizarmos uma fila de 10 animais, de forma que o camelo (C) fique na primeira
posição e o elefante (E), na sexta:

Como esses elementos estão fixos em posições específicas, basta reordenarmos os demais elementos.


         Receita Federal (Analista Tributário) Estatística                                           12
         www.estrategiaconcursos.com.br                                                              70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Logo, o número de maneira de organizarmos essa fila corresponde à permutação de 10 – 2 = 8 elementos:
                                                            𝑃8 = 8!
Gabarito: Certo.

Agora, vamos voltar ao nosso exemplo dos 8 algarismos, supondo que os algarismos 1 e 2 ocupem os
extremos, mas sem fixar qual irá ocupar a primeira posição e qual irá ocupar a última posição.

Assim, poderíamos ter o número 1 na primeira posição e o número 8 na oitava; OU o número 8 na primeira
posição e o número 1 na oitava:


                             1                                                             8


                             8                                                             1


Nesse caso, para cada uma das 720 possibilidades de permutar os algarismos de 2 a 7 nas posições
intermediárias, calculadas anteriormente, há 2 possibilidades distintas de posicionar os extremos.

Pelo princípio multiplicativo, devemos multiplicar as possibilidades desses dois eventos:

                                                2 x P6 = 2 x 720 = 1440

Na verdade, essas 2 possibilidades de alocar esses 2 algarismos, 1 e 8, nas 2 posições extremas
correspondem à permutação desses 2 elementos.

Em outras palavras, tratamos esses casos como duas permutações em separado e, em seguida,
multiplicamos os resultados (princípio multiplicativo).

                                                            P2 x P6


Agora, vamos supor que os 3 primeiros algarismos tenham que ocupar as 3 primeiras posições, em qualquer
ordem; e os demais algarismos, as demais posições, também em qualquer ordem:

                                  1, 2 e 3                            4, 5, 6, 7 e 8

Nesse caso, temos a permutação de 3 elementos nas 3 primeiras posições e de 5 elementos nas demais
posições. Pelo princípio multiplicativo, o número de ordenações possíveis é:

                                 P3 x P5 = 3! x 5! = 3 x 2 x 1 x 5 x 4 x 3 x 2 x 1 = 720

        Receita Federal (Analista Tributário) Estatística                                           13
        www.estrategiaconcursos.com.br                                                              70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(CESPE 2018/BNB) Em um navio, serão transportados 10 animais, todos de espécies diferentes. Antes de
serem colocados no navio, os animais deverão ser organizados em uma fila. Entre esses 10 animais, há um
camelo, um elefante e um leão.
A respeito da organização dessa fila, julgue o item subsequente.
Existem 3 × 7! maneiras distintas de organizar essa fila de forma que o elefante, o camelo e o leão fiquem
nas três primeiras posições, não necessariamente nessa ordem.
Comentários:
                                                            ==219a34==

Agora, desejamos organizar a fila de forma que os 3 animais (Elefante, Camelo e Leão) fiquem nas 3 primeiras
posições, em qualquer ordem. Consequentemente, os outros 10 – 3 = 7 animais ocuparão as outras 7
posições, em qualquer ordem:

                           Elefante, Camelo, Leão                        Outros 7 animais
O número de formas de organizar os 3 animais corresponde a uma permutação de 3 elementos:
                                                            𝑃3 = 3!
O número de formas de organizar os outros 7 animais equivale a uma permutação de 7 elementos:
                                                            𝑃7 = 7!
Pelo princípio multiplicativo, multiplicamos esses resultados para obter o número de maneiras possíveis de
organizar toda a fila:
                                        Número de possibilidades = 3! × 7!
Esse resultado é diferente do valor informado no item, qual seja, 3 × 7!, logo, o item está errado. Aliás, como
3! = 3 x 2, o nosso resultado é o dobro do que consta no item da questão.
Gabarito: Errado.

Agora, vejamos mais um tipo de permutação com restrição. Vamos voltar ao exemplo dos 8 algarismos,
supondo que os algarismos 1 e 2 tenham que ficar sempre juntos, nessa ordem.

Nesse caso, tratamos esses 2 algarismos como elemento único, que podemos chamar de A. Assim, em vez
de 8 elementos {1, 2, 3, 4, 5, 6, 7 e 8}, ordenaremos apenas 7 elementos {A, 3, 4, 5, 6, 7 e 8}:

                                      P7 = 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5.040

        Receita Federal (Analista Tributário) Estatística                                                   14
        www.estrategiaconcursos.com.br                                                                      70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Portanto, a quantidade de maneiras de ordenar 8 elementos, de modo que 2 estejam sempre juntos em uma
determinada ordem, corresponde à permutação de 7 elementos.

Se houvesse 3 elementos juntos em determinada ordem, {1, 2 e 3}, chamaríamos os 3 elementos de A, e
calcularíamos a permutação dos 6 elementos {A, 4, 5, 6, 7 e 8}.

E se os elementos tivessem que ficar juntos, mas em qualquer ordem?

Nesse caso, o início da solução é similar, isto é, chamamos esses elementos de um único elemento, A, e
fazemos a permutação do elemento A com os demais elementos.

Por exemplo, se os algarismos {1, 2 e 3} tivessem que ficar juntos, mas em qualquer ordem, dentre os 8
algarismos, primeiro calcularíamos a permutação dos 6 elementos {A, 4, 5, 6, 7 e 8}:

                                         P6 = 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

Porém, para cada uma dessas 720 possibilidades, há diferentes formas de ordenar os 3 elementos, o que
corresponde à permutação de 3 elementos.

Logo, para calcular o número de maneiras de organizar todos os 8 elementos nessas condições, devemos
multiplicar o resultado anterior pela permutação de 3 elementos (princípio multiplicativo):

                                          P6 x P3 = 6! x 3! = 720 x 6 = 4320

(CESPE 2018/BNB) Julgue o próximo item, relativo a análise combinatória e probabilidade.
A quantidade de números naturais distintos, de cinco algarismos, que se pode formar com os algarismos 1,
2, 3, 4 e 5, de modo que 1 e 2 fiquem sempre juntos e em qualquer ordem, é inferior a 25.
Comentários:
A quantidade de números que podem ser formados com os algarismos 1, 2, 3, 4 e 5 corresponde a uma
permutação desses elementos. Para que os números 1 e 2 fiquem sempre juntos, podemos considerá-lo com
elemento único. Assim, temos uma permutação de 4 elementos:
                                           𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Porém, para cada uma dessas 24 maneiras de organizar os algarismos 3, 4, 5 e o elemento 1-2, podemos ter
1 primeiro e depois 2, ou 2 primeiro e depois 1. Logo, pelo princípio multiplicativo, devemos multiplicar esse
resultado pela permutação de 2 elementos P2 = 2! = 2:
                                 Quantidade de números possíveis = 24 x 2 = 48
Essa quantidade é superior a 25.
Gabarito: Errado.


        Receita Federal (Analista Tributário) Estatística                                                  15
        www.estrategiaconcursos.com.br                                                                     70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Permutação com Repetição

Enquanto na permutação simples, todos os elementos são distintos, na permutação com repetição, alguns
elementos se repetem.

Quando há elementos repetidos, o número de maneiras distintas de ordenação diminui, pois algumas
possibilidades que seriam distintas na permutação simples tornam-se a mesma possibilidade quando há
elementos iguais.

Por isso, precisamos dividir o resultado da permutação simples pelo número de maneiras de reordenar os
elementos repetidos, isto é, pela permutação dos elementos repetidos.

        Havendo 𝒏 elementos no total, com 𝒌 elementos distintos repetidos a permutação desses
        elementos, o que representamos como 𝑷𝒌𝒏 , é dada por:

                                                                  𝒏!
                                                            𝑷𝒌𝒏 = 𝒌!

Por exemplo, a permutação dos elementos {A, A, A, B, C} é uma permutação de 5 elementos, no total, dos
quais 3 são repetidos, dada por:

                                            𝑷𝟓 𝟓! 5 × 4 × 3!
                                    𝑃𝟓𝟑 =     = =            = 5 × 4 = 20
                                            𝑷𝟑 𝟑!     3!

E se houvesse outro elemento repetido? Por exemplo, {A, A, A, B, B, C, D}.

Nesse caso, dividimos a permutação simples de todos os elementos pelo produto das permutações dos
elementos repetidos.

No caso, dividimos a permutação simples de 7 elementos pelo produto da permutação de 3 elementos (A)
com a permutação de 2 elementos (B):

                                                        𝑷𝟕       𝟕!
                                              𝑷𝟐,𝟑
                                               𝟕 =           =
                                                      𝑷𝟐 × 𝑷𝟑 𝟐! × 𝟑!

                                         7 × 6 × 5 × 4 × 3!
                               𝑃72,3 =                      = 7 × 3 × 5 × 4 = 420
                                               2 × 3!

        Receita Federal (Analista Tributário) Estatística                                          16
        www.estrategiaconcursos.com.br                                                             70

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

(VUNESP/2019 – Prefeitura de Cerquilho/SP) Com as letras, A, B e C, é possível fazer seis agrupamentos
diferentes de três letras: ABC, ACB, BAC, BCA, CAB, CBA. Se as três letras fossem A, A e B, só poderiam ser
feitos três desses agrupamentos diferentes: AAB, ABA, BAA. Com as letras F, F, G e G, o número de
agrupamentos diferentes de quatro letras é
a) 6.
b) 8.
c) 10.
d) 12.
e) 16.
Comentários:
A quantidade de agrupamentos com as letras F, F, G e G corresponde à permutação de 4 elementos, com 2
repetições de F e 2 repetições de G:
                                                    4!     4 × 3 × 2! 4 × 3
                                       𝑃42,2 =           =           =      =6
                                                 2! × 2!     2! × 2!    2
Gabarito: A.


(FGV/2018 – ALE-RO) Assinale a opção que indica o número de permutações das letras da palavra SUSSURRO
a) 1680
b) 1560
c) 1440
d) 1320
e) 1260
Comentários:
A palavra SUSSURRO contém 8 letras, sendo o S repetido 3 vezes, o U repetido 2 vezes e o R repetido 2 vezes.
Assim, temos a permutação de 8 elementos com repetição de 2, 2 e 3 elementos:
                                     8!        8 × 7 × 6 × 5 × 4 × 3!
                    𝑃82,2,3 =                =                        = 8 × 7 × 6 × 5 = 1680
                                2! × 2! × 3!         2 × 2 × 3!
Gabarito: A

          Receita Federal (Analista Tributário) Estatística                                              17
          www.estrategiaconcursos.com.br                                                                 70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Permutação Circular

Na permutação circular, considera-se que os elementos estão dispostos em um círculo.

No círculo, o que importa é a posição de cada elemento em relação aos demais. Em outras palavras, quando
giramos o círculo, por exemplo, quando todos os elementos se posicionam uma posição à direita de onde
estavam posicionados, temos a mesma disposição.

Portanto, para calcular a quantidade de disposições distintas, podemos fixar um dos elementos. Com isso,
as posições de todos os outros elementos irão importar.

Portanto, calculamos a permutação simples para os demais elementos (no caso, 7):

                                   𝑃7 = 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5.040

         A permutação circular de 𝒏 elementos, 𝑷𝑪𝒏 , é dada por:

                                                    𝑷𝑪𝒏 = (𝒏 − 𝟏)!

(2019 – Prefeitura de Ibiaçá/RS) O número máximo de maneiras distintas que um grupo de cinco amigos
pode se sentar ao redor de uma mesa circular para realizar um lanche coletivo é:
a) 120
b) 50
c) 24
d) 12
e) 1

         Receita Federal (Analista Tributário) Estatística                                           18
         www.estrategiaconcursos.com.br                                                              70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:
A permutação circular de n = 5 elementos é dada por:

                                                    𝑃𝐶𝑛 = (𝑛 − 1)!

                                          𝑃𝐶5 = 4! = 4 × 3 × 2 × 1 = 24

Gabarito: C


(2016 – Prefeitura de Ouricuri/PE) De quantas maneiras possíveis podemos dispor nove crianças em um
círculo em que todas brincam de mãos dadas?
a) 9!
b) 8!
c) 7!
d) 6!
e) 5!
Comentários:
A permutação circular de n = 9 elementos é dada por:

                                                    𝑃𝐶𝑛 = (𝑛 − 1)!

                                                        𝑃𝐶9 = 8!

Gabarito: B

        Receita Federal (Analista Tributário) Estatística                                       19
        www.estrategiaconcursos.com.br                                                          70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                 ARRANJO E COMBINAÇÃO
As técnicas que veremos nesta seção (arranjo e combinação) trabalham com a seleção de um subconjunto
dos elementos.

A ordem dos elementos selecionados será relevante para o arranjo, mas não para a combinação. Em outras
palavras, selecionar os elementos A e B ou os elementos B e A são possibilidades distintas para o arranjo,
porém equivalentes para a combinação.

Arranjo Simples

No arranjo, selecionamos alguns elementos, de maneira que a sua ordenação seja relevante. Um sorteio de
algumas pessoas, para receberem prêmios distintos é um exemplo desse tipo de seleção.

        A ordem da seleção será importante sempre que os elementos selecionados tiverem
        destinos diferentes, como diferentes prêmios, funções, cargos, tarefas, posições etc.

Vamos supor que existam 10 pessoas em um sorteio, das quais 4 serão sorteadas, para receberem prêmios
diferentes, não sendo possível sortear a mesma pessoa mais de uma vez.

Como a ordem importa, há 10 possibilidades para sortearmos a primeira pessoa; em seguida, restarão 9
pessoas para o segundo sorteio; depois, 8 pessoas para o terceiro sorteio; e, por fim, 7 pessoas para o último
sorteio.

                                                   10 9 8 7
                                                   1º 2º 3º 4º

Como os quatro sorteios irão ocorrer, pelo princípio multiplicativo, devemos multiplicar as possibilidades de
cada evento. Dessa forma, o resultado do arranjo de 4 elementos, dentre 10, é:

                                          𝐴𝟏𝟎,𝟒 = 10 × 9 × 8 × 7 = 5040

Esse resultado corresponde à razão entre o fatorial de 10 (número total de elementos) e o fatorial de 6
(diferença entre o número total de elementos e o número de elementos sorteados):

                            𝟏𝟎!       10! 10 × 9 × 8 × 7 × 6!
                𝐴𝟏𝟎,𝟒 =             =    =                    = 10 × 9 × 8 × 7 = 5040
                          (𝟏𝟎 − 𝟒)!   6!          6!


        Receita Federal (Analista Tributário) Estatística                                                  20
        www.estrategiaconcursos.com.br                                                                     70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

          No caso geral, um arranjo de 𝒌 elementos, dentre 𝒏 elementos distintos é:

                                                                𝒏!
                                                       𝑨𝒏,𝒌 = (𝒏−𝒌)!

          Outra notação possível para o arranjo é 𝐴𝑘𝑛 .

(VUNESP/2019 – Prefeitura de Cerquilho/SP) Na bilheteria de um teatro há apenas 5 ingressos à venda para
a seção de uma peça. Se 4 amigos comprarem ingressos para essa seção, então o número total de posições
distintas em que esses amigos poderão se acomodar no teatro é
a) 120.
b) 80.
c) 60.
d) 20.
e) 5.
Comentários:
Temos uma seleção de 4 lugares, dentre 5 disponíveis, com importância de ordem, pois cada lugar é distinto
do outro. Assim, temos o arranjo de 4 elementos, dentre 5:
                                              5!    5!
                                  𝐴5,4 =           = = 5 × 4 × 3 × 2 × 1 = 120
                                           (5 − 4)! 1!
Gabarito: A.


(VUNESP/2018 – PM/SP) Utilizando-se os algarismos 2, 3, 5, 6, 7 e 9, a quantidade de números múltiplos de
5 e que tenham três algarismos distintos que podem ser formados é
a) 25.
b) 20.
c) 15.
d) 10.


          Receita Federal (Analista Tributário) Estatística                                            21
          www.estrategiaconcursos.com.br                                                               70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:
Para que o número formado pelos 6 algarismos indicados no enunciado seja múltiplo de 5, é necessário que
o algarismo 5 seja o último algarismo. Assim, os diferentes números que podem ser formados com 3
algarismos correspondem a um arranjo de 2 elementos, dentre os algarismos {2, 3, 6, 7 e 9}, isto é, 5
algarismos:
                                                 5!      5 × 4 × 3!
                                     𝐴5,2 =            =            = 5 × 4 = 20
                                              (5 − 2)!       3!
Gabarito: B.


(CESPE 2019/COGE-CE) Em determinado órgão, sete servidores foram designados para implantar novo
programa de atendimento ao público. Um desses servidores será o coordenador do programa, outro será o
subcoordenador, e os demais serão agentes operacionais.
Nessa situação, a quantidade de maneiras distintas de distribuir esses sete servidores nessas funções é igual
a
a) 21.
b) 42.
c) 256.
d) 862.
e) 5.040.
Comentários:
Nessa questão, devemos definir o número de maneiras distintas de distribuir 7 servidores em funções
distintas: 1 será coordenador, 1 será subcoordenador e os demais serão agentes. Note que, após a definição
do coordenador e do subcoordenador, os que sobrarem serão necessariamente agentes. Por isso, não
precisamos nos preocupar com eles, apenas com o coordenador o subcoordenador.
Para a escolha do coordenador, há 7 servidores, ou seja, 7 possibilidades:

Após a escolha do coordenador, restarão 6 possibilidades para o subcoordenador:

Como devemos escolher o coordenador E o subcoordenador, devemos multiplicar as possibilidades
(princípio multiplicativo):
                                         Número de Possibilidades = 7 x 6 = 42
Alternativamente, poderíamos calcular o arranjo de 2 elementos, dentre 7:
                                              7!    7! 7 × 6 × 5!
                                  𝐴7,2 =           = =            = 7 × 6 = 42
                                           (7 − 2)! 5!     5!
Gabarito: B

          Receita Federal (Analista Tributário) Estatística                                               22
          www.estrategiaconcursos.com.br                                                                  70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Combinação Simples

Assim como no caso do arranjo, a combinação é uma seleção de elementos de um
conjunto finito. Entretanto, para a combinação, a ordem não importa.

Por exemplo, em um sorteio de participantes para um grupo de estudo, a ordem do
sorteio de cada participante é irrelevante.

Nessa situação, algumas possibilidades distintas identificadas no arranjo são equivalentes na combinação.
Consequentemente, a combinação de determinados elementos resulta em um número menor do que o
arranjo dos mesmos elementos.

Na verdade, precisamos dividir o resultado do arranjo pelo fatorial do número de elementos selecionados,
pois ele corresponde à permutação dos elementos selecionados.

        A combinação sem reposição de 𝒌 elementos, de um total de 𝒏 elementos, é dada por:

                                                            𝑨𝒏,𝒌        𝒏!
                                               𝑪𝒏,𝒌 =              = (𝒏−𝒌)!𝒌!
                                                            𝑷𝒌

                                                             𝒏
        Outras notações comuns para a combinação são 𝑪𝒌𝒏 ou ( ).
                                                             𝒌

Para o mesmo exemplo anterior, se as 4 pessoas sorteadas, dentre 10, receberem os mesmos prêmios, o
número de maneiras de selecionar essas pessoas é:

                           𝟏𝟎!         10 × 9 × 8 × 7 × 6! 10 × 9 × 8 × 7
            𝐶𝟏𝟎,𝟒 =                  =                    =               = 10 × 3 × 7 = 210
                      (𝟏𝟎 − 𝟒)! × 𝟒!         6! × 4!         4×3×2

        Algumas questões pedem o número de maneiras de selecionar “pelo menos um” ...

        Nesses casos, calcule todas as possibilidades e, em seguida, subtraia o número de
        possibilidades que não atendem à restrição, ou seja, com "nenhum"...


        Receita Federal (Analista Tributário) Estatística                                             23
        www.estrategiaconcursos.com.br                                                                70

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Por exemplo, vamos supor que haja 5 mulheres e 4 homens (ou seja, 9 pessoas no total); e que vamos
selecionar 3 pessoas para formar uma equipe, com pelo menos uma mulher.

Para calcular o número de possibilidades, primeiro calculamos o número total de maneiras possíveis de
selecionar 3 pessoas, de um total de 9 pessoas:

                                  𝟗!         9 × 8 × 7 × 6! 9 × 8 × 7
                    𝐶𝟗,𝟑 =                 =               =          = 3 × 4 × 7 = 84
                             (𝟗 − 𝟑)! × 𝟑!      6! × 3!      3×2×1

Agora, calculamos o número de maneiras possíveis de selecionar 3 pessoas, das quais nenhuma é mulher,
ou seja, somente homens. Sabendo que há 4 homens no total, temos:

                                                       𝟒!        4 × 3!
                                         𝐶𝟒,𝟑 =                =        =4
                                                  (𝟒 − 𝟑)! × 𝟑! 1! × 3!

Logo, o número de maneiras de formar grupos de 3 pessoas com pelo menos uma mulher é:

                                                        84 – 4 = 80

(FGV/2019 – Pref. Angra dos Reis/RJ) Maria possui em casa quatro tipos de frutas: banana, mamão, abacate
e manga. Ela decidiu fazer uma vitamina com duas dessas frutas, batendo-as juntas com leite no
liquidificador. O número de vitaminas diferentes que Maria poderá fazer é
a) 3.
b) 4.
c) 5.
d) 6.
e) 12.
Comentários:
O número de vitaminas diferentes corresponde ao número de maneiras diferentes de Maria escolher 2, das
4 frutas, sem que a ordem importe, logo, temos uma combinação de 2 elementos, dentre 4:
                                           4!         4!     4 × 3 × 2! 4 × 3
                             𝐶4,2 =                =       =           =      =6
                                      (4 − 2)! × 2! 2! × 2     2! × 2     2
Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                           24
         www.estrategiaconcursos.com.br                                                              70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(FGV/2022 – PC-RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos para um
treinamento especial. O número de pares diferentes de policiais que podem ser enviados para o treinamento
especial é:
a) 10
b) 12.
c) 15.
d) 16.
e) 18.
Comentários:
O número de pares de policiais que podem ser escolhidos, dentre 6, corresponde ao número de maneiras de
escolher 2 elementos, dentre 6. Como a ordem dos escolhidos não importa, temos a combinação de 2
elementos dentre 6:
                                                                  𝑛!
                                                  𝐶𝑛,𝑝 =
                                                             (𝑛 − 𝑝)! × 𝑝!
                                               6!         6 × 5 × 4! 6 × 5
                                 𝐶6,2 =                 =           =      = 15
                                          (6 − 2)! × 2!     4! × 2!    2
Gabarito: C

Combinação Completa

Os problemas de combinação completa (ou combinação com repetição) envolvem um conjunto de n tipos
de elementos diferentes, dos quais serão escolhidos k elementos iguais ou diferentes.

Por exemplo, escolher p = 3 potes de sorvete havendo um total de n = 5 marcas distintas (os potes podem
ser de uma mesma marca ou de marcas distintas).

Para calcular todas as possibilidades, vamos imaginar que cada marca de sorvete esteja em uma seção
separada do congelador, conforme indicado a seguir, e que vamos posicionar 3   , simbolizando os potes
de sorvete, nas seções correspondentes:

Dessa forma, podemos considerar esse problema como uma permutação com repetição dos p = 3 objetos
(potes de sorvetes) e das 4 divisórias que separam as marcas.

O número de divisórias é sempre igual ao número de marcas menos 1, ou seja, 𝒏 − 𝟏.

         Receita Federal (Analista Tributário) Estatística                                            25
         www.estrategiaconcursos.com.br                                                               70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Portanto, a combinação completa de p = 3 objetos de n = 5 marcas, indicada por 𝐶𝑅𝟓𝟑 , é igual à permutação
de 7 elementos, com repetição de p = 3 e n - 1 = 4 elementos:

                                                  7!     7 × 6 × 5 × 4!
                              𝐶𝑅𝟓𝟑 = 𝑃7𝟑,𝟒 =           =                = 7 × 5 = 35
                                               𝟑! × 4!     3 × 2 × 4!

         De maneira geral, a combinação de 𝒑 objetos de 𝒏 tipos (ou marcas), equivale à
         permutação de 𝒏 − 𝟏 + 𝒑 elementos, com repetição de 𝒏 − 𝟏 e 𝒑 elementos:

                                                𝒑        𝒏−𝟏,𝒑            (𝒏−𝟏+𝒑)!
                                            𝑪𝑹𝒏 = 𝑷𝒏−𝟏+𝒑 =
                                                                          (𝒏−𝟏)!×𝒑!


Também devemos utilizar a combinação completa em problemas de distribuição de objetos entre pessoas
                                                             ==219a34==

(ou lugares). Por exemplo, a livre distribuição de 3 cestas básicas para 5 famílias segue o mesmo raciocínio.

(FGV/2018 – ALE-RO) Helena entra em uma sorveteria que oferece sorvetes de 8 sabores diferentes. Helena
deseja escolher uma casquinha com duas bolas de sorvete não necessariamente de sabores diferentes. A
ordem em que as bolas forem colocadas na casquinha não fará a escolha de Helena ser diferente.
O número de maneiras de Helena escolher sua casquinha é
a) 64.
b) 56.
c) 36.
d) 28.
e) 16.
Comentários:
Nessa questão, temos um exemplo de combinação com reposição (ou combinação completa, dada por:
                                                     𝒑       (𝒏 − 𝟏 + 𝒑)!
                                                 𝑪𝑹𝒏 =
                                                             (𝒏 − 𝟏)! × 𝒑!
Sabendo que há 8 sabores disponíveis (n = 8) e que Helena irá escolher 2 bolas de sorvete (p = 2):
                                    (8 + 2 − 1)!     9!     9 × 8 × 7! 9 × 8
                           𝐶𝑅82 =                =        =           =      = 36
                                    (8 − 1)! × 2! 7! × 2!     7! × 2     2
Gabarito: C


         Receita Federal (Analista Tributário) Estatística                                                26
         www.estrategiaconcursos.com.br                                                                   70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(CESPE 2018/SEFAZ-RS) Se 7 kg de feijão forem distribuídos para até quatro famílias, de modo que cada uma
delas receba um número inteiro de quilos, então, nesse caso, a quantidade de maneiras distintas de se
distribuírem esses 7 kg de feijão para essas famílias será igual a
a) 30.
b) 120.
c) 330.
d) 820.
e) 1.320.
Comentários:
O enunciado permite que alguma(s) família(s) fique sem quilos de feijão porque menciona que a distribuição
será para “até” 4 famílias. Assim, há 7 quilos de feijão (p = 7) a serem distribuídos livremente para 4 famílias
(n = 4).
Essa distribuição corresponde à combinação com repetição de p = 7 objetos dentre n = 4 tipos, que pode ser
vista como uma permutação de 10 elementos, com repetição de p = 7 objetos e de n - 1 = 3 divisórias:
                           3,7       10!     10 × 9 × 8 × 7! 10 × 9 × 8
                  𝐶𝑅47 = 𝑃10   =           =                =           = 10 × 3 × 4 = 120
                                   3! × 7!       3! × 7!       3×2
Gabarito: B.


(2019 – Conselho Regional de Medicina/AC) O pai de 3 filhos, com idades diferentes, distribuiu 9 balas
idênticas entre eles, de forma que o mais velho recebeu o dobro de balas do caçula e o filho do meio recebeu
mais balas que o caçula e menos balas que o mais velho. O filho caçula recebeu X balas e o filho do meio
recebeu Y balas.
Com base nessa situação hipotética, julgue o item a seguir.
Se alguém deseja distribuir 9 balas idênticas entre 3 pessoas, sem qualquer critério de distribuição, com cada
uma delas recebendo pelo menos uma bala, então existem 28 maneiras de se fazer a distribuição.
Comentários:
Esse também é um caso de combinação completa, em que as balas correspondem aos objetos e as pessoas
correspondem às seções.
Porém, o problema apontou para uma restrição: todas as pessoas receberão pelo menos uma bala.
Após distribuir uma bala por pessoa, totalizando 3 balas, sobrarão 9 – 3 = 6 balas a serem distribuídas, sem
critério, para as 3 pessoas.
Portanto, temos a combinação completa de k = 6 objetos para n = 3 pessoas, ou seja, n – 1 = 2 divisórias:
                                                                  (𝑛 − 1 + 𝑝)!
                                             𝐶𝑅𝑛𝑝 = 𝑃𝑛−1+𝑝
                                                     𝑛−1,𝑝
                                                           =
                                                                  (𝑛 − 1)! × 𝑝!
                                                                 8!     8×7
                                          𝐶𝑅36 = 𝑃82,6 =              =     = 28
                                                              2! × 6!    2
Gabarito: Certo

          Receita Federal (Analista Tributário) Estatística                                                  27
          www.estrategiaconcursos.com.br                                                                     70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Resumo da Aula

Princípios de Contagem

   •   Princípio Multiplicativo (multiplicação): Eventos concomitantes (ocorre um E outro)
   •   Princípio Aditivo (soma): Eventos mutuamente exclusivos (ocorre um OU outro)
Fatorial: produto de um número com todos os números menores que ele:
                                           𝑛! = 𝑛 × (𝑛 − 1) × … × 2 × 1
Permutação – reordenação de elementos

   •   Permutação simples: Número de maneiras de reordenar elementos distintos:
                                                            𝑃𝑛 = 𝑛!
   •   Permutação com repetição: Número de maneiras de reordenar 𝑛 elementos, dos quais 𝑘 elementos
       são repetidos:
                                                                 𝑛!
                                                        𝑃𝑛𝑘 =
                                                                 𝑘!
   •   Permutação circular: Número de maneiras de reordenar elementos dispostos em círculo:
                                                    𝑃𝐶𝑛 = (𝑛 − 1)!
Arranjo – seleção de elementos com importância de ordem

   •   Número de maneiras de sortear, 𝑘 elementos, sem repetição, dentre 𝑛 elementos, de modo que a
       ordem do sorteio importe:
                                                                   𝑛!
                                                      𝐴𝑛,𝑘 =
                                                                (𝑛 − 𝑘)!
Combinação – seleção de elementos sem importância de ordem

   •   Combinação simples: Número de maneiras de sortear, 𝑘 elementos, sem repetição, dentre 𝑛
       elementos, de modo que a ordem do sorteio não importe:
                                                                 𝑛!
                                                  𝐶𝑛,𝑘 =
                                                             (𝑛 − 𝑘)! 𝑘!
   •   Combinação completa: Número de maneiras de sortear, sem importância de ordem, 𝑝 objetos (ex:
       potes de sorvete), quando há 𝑛 tipos diferentes (ex: marcas de sorvete):
                                                                 (𝑛 − 1 + 𝑝)!
                                           𝐶𝑅𝑛𝑝 = 𝑃𝑛−1+𝑝
                                                   𝑛−1,𝑝
                                                         =
                                                                 (𝑛 − 1)! × 𝑝!

        Receita Federal (Analista Tributário) Estatística                                       28
        www.estrategiaconcursos.com.br                                                          70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                           QUESTÕES COMENTADAS – FGV

Princípios de Contagem

1.    (FGV/2022 – Câmara Taubaté/SP) Utilizando apenas os elementos do conjunto {0, 1, 2, 3, 4, 5} a
quantidade de números ímpares de 3 algarismos distintos que podem ser formados é

a) 24.

b) 26.

c) 48.

d) 60.

e) 96.

Comentários:

A questão pede para formarmos números ímpares de 3 algarismos distintos do conjunto {0, 1, 2, 3, 4, 5}.
Para isso, o último algarismo deve ser ímpar. Sabendo que há 3 números ímpares {1, 3, 5}, há 3 possibilidades
para o último algarismo:
                                                                 3


Considerando que 0 não pode ser escolhido como primeiro algarismo, restarão 4 possibilidades (2 números
ímpares e os números 2 e 4) para a escolha do primeiro algarismo:
                                                      4          3


Para a escolha do segundo algarismo, restarão 4 possibilidades, uma vez que o número 0 pode ser escolhido
para essa posição:
                                                      4      4   3


Pelo princípio multiplicativo, o número total de maneiras de formar um número nessas condições é o
produto:
                                                     4 × 4 × 3 = 48
Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                                29
         www.estrategiaconcursos.com.br                                                                   70

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

2.    (FGV/2022 – SEMSA Manaus) Cada quadradinho da figura a seguir contém um algarismo do
conjunto {1, 2, 3, 4, 5} que juntos formam, em sequência, a senha que abre um cofre.

O primeiro quadradinho (o da esquerda) só aceita algarismo ímpar e os outros dois só aceitam algarismos
pares, distintos ou não. O número de senhas diferentes possíveis é

a) 9.
b) 10.
c) 11.
d) 12.
e) 13.

Comentários:

Precisamos calcular o número de senhas que pode ser formada a partir dos algarismos {1, 2, 3, 4, 5}, nas
condições descritas. Sabendo que o primeiro algarismo deve ser ímpar, há 3 possibilidades para ele:
                                                       3

Os demais algarismos devem ser pares, podendo ser iguais ou diferentes. Assim, há 2 possibilidades para o
segundo algarismo e 2 possibilidades para o terceiro:
                                                       3     2   2

Pelo princípio multiplicativo, o número de maneiras de escolher toda a senha (eventos concomitantes) é o
produto:
                                                  𝑛 = 3 × 2 × 2 = 12
Gabarito: D

3.     (FGV/2022 – MPE/GO) No código Morse, as “letras” são · e – (ponto e traço). Certa instrução é
formada por “símbolos” e cada símbolo é formado por uma sequência de duas, três ou quatro letras do
código Morse. Por exemplo, “– · –” e “– – ·” são símbolos diferentes. O número de símbolos diferentes que
essa instrução possui é

a) 18.
b) 20.
c) 24.

         Receita Federal (Analista Tributário) Estatística                                            30
         www.estrategiaconcursos.com.br                                                               70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 26.
e) 28.

Comentários:

O enunciado afirma que os símbolos do código Morse são sequências de 2, 3 ou 4 "letras", as quais podem
ser um ponto (·) ou traço (-). Assim, há 2 possibilidades para cada "letra".
O número de símbolos com 2 "letras" é, pelo princípio multiplicativo:
                                                             2       2

                                                           2×2= 4
O número de símbolos com 3 "letras" é:
                                                       2         2       2

                                                       2×2×2=8
Por fim, o número de símbolos com 4 "letras" é:
                                                   2         2       2       2

                                                  2 × 2 × 2 × 2 = 16
Como essas possibilidades são mutuamente excludentes, o número total de símbolos é a soma (princípio
aditivo):
                                                 𝑛 = 4 + 8 + 16 = 28
Gabarito: E

4.     (FGV/2018 – SASDH/RJ) Uma urna D contém 6 bolas numeradas de 3 a 8 e uma urna U contém 7
bolas numeradas de 2 a 8. Um número de dois algarismos será formado retirando uma bola da urna D e
uma bola da urna U, cujos números serão, respectivamente, o algarismo das dezenas e o algarismo das
unidades. A quantidade de números pares que poderão ser formados dessa maneira é

a) 42.

b) 36.

c) 24.

d) 20.

e) 16.

         Receita Federal (Analista Tributário) Estatística                                          31
         www.estrategiaconcursos.com.br                                                             70

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Comentários:

O enunciado informa que da urna D serão obtidos os algarismos das dezenas e da urna U serão obtidos os
algarismos das unidades, conforme representado a seguir:


                                                             D   U
Para formar números pares, é necessário que o algarismo da unidade seja par. Sabendo que as bolas da urna
U são numeradas de 2 a 8, há 4 algarismos pares (2, 4, 6 e 8), logo, 4 possibilidades:
                                                                 4
                                                             D   U
As bolas da urna D são numeradas de 3 a 8, logo há 6 possibilidades:
                                                             6   4
                                                             D   U
Pelo princípio multiplicativo, a quantidade de números pares possíveis é:
                                                         6 x 4 = 24
Gabarito: C

5.     (FGV/2018 – ALE/RO) Em um circuito elétrico há 4 disjuntores que podem ficar, cada um deles,
independente dos demais, nas posições “ligado” ou “desligado”. O número de maneiras diferentes de se
posicionar (“ligado” ou “desligado”) esses 4 disjuntores é

a) 4.

b) 6.

c) 8.

d) 12.

e) 16.

Comentários:

Há 4 disjuntores e duas posições para cada um. Pelo princípio multiplicativo, o número de maneiras
diferentes de posicionar o conjunto desses 4 disjuntores é:
                                                    2 x 2 x 2 x 2 = 16
Gabarito: E

         Receita Federal (Analista Tributário) Estatística                                            32
         www.estrategiaconcursos.com.br                                                               70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

6.    (FGV/2018 – ALE-RO) O presidente e o vice-presidente de uma comissão serão escolhidos entre os
10 deputados do Partido X e os 6 deputados do Partido Y. Os Partidos acordaram que os dois cargos não
poderão ser ocupados por deputados de um mesmo Partido.

O número de maneiras diferentes de se escolher o presidente e o vice-presidente dessa comissão, é

a) 16
b) 32
c) 60
d) 64
e) 120
Comentários:
Se o presidente for do Partido X, haverá 10 possibilidades para o presidente, e 6 possibilidades para escolher
o vice-presidente, dentre os membros do Partido Y. Pelo princípio multiplicativo, temos:
                                                    𝑛1 = 10 × 6 = 60
Analogamente, se o presidente for do Partido Y, haverá 6 possibilidades para o presidente, e 10
possibilidades para o vice-presidente, dentre os membros do Partido X. Pelo princípio multiplicativo, temos:
                                                    𝑛2 = 6 × 10 = 60
Por serem opções alternativas, pelo princípio aditivo, o número de possibilidades no total é:
                                            𝑛𝑇 = 𝑛1 + 𝑛2 = 60 + 60 = 120
Gabarito: E

7.     (FGV/2018 – ALE-RO) Manoel possui tintas de 5 cores diferentes e deve pintar a bandeira abaixo
de forma que:

   •      cada região será pintada com uma única cor.
   •      duas regiões vizinhas não podem ter a mesma cor.

O número de maneiras diferentes que Manoel pode pintar essa bandeira é

a) 120.

          Receita Federal (Analista Tributário) Estatística                                                33
          www.estrategiaconcursos.com.br                                                                   70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

b) 180.

c) 240.

d) 360.

e) 720.

Comentários:

Vamos representar as regiões da bandeira por números para facilitar a referência.

                                                                               2
                                                      1
                                                                               3
                                                              ==219a34==

                                                                           4
                                                                           5

Para a primeira região, Manuel pode escolher qualquer das 5 cores: 5 possibilidades;
Para a segunda região, Manuel pode escolher qualquer cor, exceto a cor escolhida para a 1ª região (pois são
regiões vizinhas): 4 possibilidades;
Para a terceira região, Manuel pode escolher qualquer cor, exceto as cores escolhidas para a 1ª e 2ª regiões
(pois são todas vizinhas): 3 possibilidades;
Para a quarta região, Manuel pode escolher qualquer cor, exceto as cores escolhidas para a 1ª e 3ª regiões
(pois as três regiões são vizinhas): 3 possibilidades;
Para a quinta região, Manuel pode escolher qualquer cor, exceto a cor escolhida para a 4ª região: 4
possibilidades.
Pelo princípio multiplicativo, o número de possibilidades de pintar todas as regiões é:
                                                   5 x 4 x 3 x 3 x 4 = 720
Gabarito: E

8.     (FGV/2016 – MP-RJ) Para organizar um horário de atendimento, em três dias da semana, pela
manhã e à tarde, deve-se colocar duas letras A, duas letras B e duas letras C nas casas vazias da tabela
abaixo, com a condição de que, em cada coluna, não apareçam letras iguais.

          Receita Federal (Analista Tributário) Estatística                                              34
          www.estrategiaconcursos.com.br                                                                 70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

O número de maneiras diferentes de preencher essa tabela é:

a) 12.
b) 24.
c) 36.
d) 48.
e) 64.
Comentários:
Sabendo que há 3 letras disponíveis e que em cada coluna serão colocadas 2 letras distintas, então em cada
coluna 1 letra não estará presente. Sabendo que todas as letras serão igualmente distribuídas pela tabela,
então as letras que não estão presentes em cada coluna precisam ser diferentes. Logo, há 3 possibilidades
de escolher a letra não presente para a primeira coluna; 2 possibilidades de escolher a letra não presente
para a segunda coluna; e 1 possibilidade de escolher a letra não presente para a terceira coluna:
                                                       3x2x1=6
Uma vez definida a dupla de letras para cada coluna, há 2 possibilidades de organizá-las em cada coluna:
                                                       2x2x2=8
Pelo princípio multiplicativo, o número de maneiras de organizar a tabela é:
                                                         6 x 8 = 48
Gabarito: D

9.     (FGV/2017 – Prefeitura de Salvador/BA) Cinco pessoas de diferentes alturas devem ocupar as cinco
cadeiras abaixo para uma fotografia.

O fotógrafo pediu que nem o mais baixo nem o mais alto ocupassem as cadeiras das extremidades.
Respeitando essa condição, o número de maneiras como as pessoas podem se posicionar para a fotografia
é:

a) 12.

b) 18.

c) 24.

         Receita Federal (Analista Tributário) Estatística                                                 35
         www.estrategiaconcursos.com.br                                                                    70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 36.

e) 72.

Comentários:

Sabendo que, de 5 pessoas, nem o mais baixo nem o mais alto podem se sentar nos extremos, há apenas 3
possibilidades uma das extremidades (por exemplo, a da esquerda) e 2 possibilidades para a outra:
                                                3                            2


Selecionados as 2 pessoas dos extremos, restarão 3 pessoas para a primeira das três posições centrais, 2
para a segunda e 1 para a última:
                                                3      3      2     1        2


Pelo princípio multiplicativo, o número de maneiras de sentar as 5 pessoas nessas condições é:
                                                    3 x 3 x 2 x 1 x 2 = 36
Gabarito: D.

         Receita Federal (Analista Tributário) Estatística                                           36
         www.estrategiaconcursos.com.br                                                              70

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

                           QUESTÕES COMENTADAS – FGV

Permutação

1.    (FGV/2022 – MPE/SC) Quatro casais foram ao cinema e vão sentar em 8 cadeiras consecutivas em
uma mesma fileira. O número de maneiras distintas de os 4 casais se sentarem nas 8 cadeiras, de modo
que cada mulher se sente ao lado de seu marido, é:

a) 24
b) 96
c) 256
d) 384
e) 576

Comentários:

Inicialmente, vamos imaginar que cada um dos 4 casais são elementos únicos. Assim, temos 4 elementos
para serem permutados:
                                            𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Considerando que há 2 maneiras de casal se organizar (mulher à direta e homem à esquerda ou o contrário),
precisamos multiplicar esse resultado pelo número de maneiras de cada um dos 4 casais se organizar entre
si:
                                           𝑛 = 24 × 2 × 2 × 2 × 2 = 384
Gabarito: D

2.     (FGV/2022 – Câmara Taubaté/SP) Três meninos e duas meninas vão posar para uma fotografia e o
fotógrafo sugere que eles fiquem em fila, em qualquer ordem, mas de modo que fique um menino em
cada extremidade da fila. O número de maneiras diferentes que eles as 5 crianças podem posar para a
fotografia é

a) 6.
b) 12.
c) 24.
d) 36.
e) 48.

         Receita Federal (Analista Tributário) Estatística                                            37
         www.estrategiaconcursos.com.br                                                               70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

A questão pede o número de maneiras de organizar 5 crianças em uma fila, sendo 3 meninos e 2 meninas,
de modo que as extremidades sejam ocupadas por meninos.
Assim, temos 3 possibilidades para a 1ª posição e 2 possibilidades para a última posição:
                                                 3                      2
Para organizar as outras 3 crianças nas três posições restantes, calculamos a permutação de 3 elementos:
                                                𝑃3 = 3! = 3 × 2 × 1 = 6
Pelo princípio multiplicativo, o número de maneiras de reordenar todas as 5 crianças é o produto:
                                                      3 × 2 × 6 = 36
Gabarito: D

3.    (FGV/2022 – MPE/GO) Uma mesa retangular está encostada em uma parede, possui dois lugares
de um lado, dois lugares do outro e um na cabeceira como mostra a figura.

Alberto e mais 4 amigos vão ocupar esses 5 lugares, mas Alberto não quer ficar na cabeceira. O número
de maneiras que as 5 pessoas podem ficar dispostas em volta dessa mesa e atender à restrição de Alberto
é

a) 48.
b) 60.
c) 72.
d) 96.
e) 120.

Comentários:

Precisamos alocar 5 amigos em 5 cadeiras distintas, de modo que Alberto não fique na cabeceira. Assim, há
4 possibilidades para Alberto sentar-se.
Em seguida, restarão 4 amigos que podem se sentar em quaisquer das 4 cadeiras restantes. Assim, temos a
permutação de 4 elementos:
                                             𝑃4 = 4! = 4 × 3 × 2 × 1 = 24

          Receita Federal (Analista Tributário) Estatística                                            38
          www.estrategiaconcursos.com.br                                                               70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Pelo princípio multiplicativo, o número de maneiras de Alberto e seus amigos se sentarem é o produto:
                                                     𝑛 = 4 × 24 = 96
Gabarito: D

4.      (FGV/2022 – SEAD/AP) Arnaldo tem 3 livros de Química, 4 de Física e 2 de Matemática, todos
diferentes entre si e deseja arrumá-los em uma prateleira de modo que os livros de Química fiquem juntos
e os de Física também. O número de maneiras distintas de Arnaldo arrumar os seus livros na prateleira é
igual a

a) 288
b) 576
c) 1152
d) 3456
e) 6912

Comentários:

Para que os livros de Química fiquem juntos, vamos primeiro tratá-los como elemento único (Q), assim como
os livros de Física (F). Assim, temos inicialmente a permutação de 4 elementos (Q, F e os 2 livros de
Matemática):
                                             𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Sabendo que os livros de Química podem ser arrumados em qualquer ordem, assim como os de Física,
precisamos multiplicar esse resultado pelo número de maneiras de reordenar os livros de ambos os grupos.
O número de maneiras de reordenar os 3 livros de Química é:
                                                𝑃3 = 3! = 3 × 2 × 1 = 6
E o número de maneiras de reordenar os 4 livros de Física é:
                                             𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Logo, o número de maneiras de arrumar todos os livros, nessas condições, é o produto:
                                                𝑛 = 24 × 6 × 24 = 3456
Gabarito: D

5.      (FGV/2022 – TJ/TO) Considere as 4 letras da sigla TJTO. O número de maneiras de escrever essas 4
letras em sequência, de modo que as 2 letras T não fiquem juntas, é:

a) 24.
b) 12.


          Receita Federal (Analista Tributário) Estatística                                             39
          www.estrategiaconcursos.com.br                                                                70

                                        


---

     Equipe Exatas Estratégia Concursos
     Aula 05

c) 8.
d) 6.
e) 4.

Comentários:

Para encontrar o número de maneiras de escrever "TJTO", de modo que as duas letras T não fiquem juntas,
vamos calcular o número total de anagramas da sigla, sem restrição, e subtrair o número de anagramas com
dois T´s juntos.
A sigla "TJTO" apresenta 4 letras ao total, com repetição de 2 T´s. Assim, o número total de anagramas
corresponde a uma permutação de 4 elementos com repetição de 2:
                                                   4! 4 × 3 × 2!
                                           𝑃42 =      =          = 4 × 3 = 12
                                                   2!     2!
Para calcular o número de anagramas com os 2 T´s juntos, devemos tratá-lo como elemento único. Nessa
situação, teremos uma permutação de 3 elementos (as 2 letras e o elemento com os 2 S´s), todos diferentes:
                                                   𝑃3 = 3! = 3 × 2 × 1 = 6
A diferença corresponde ao número de anagramas desejado:
                                                       𝑛 = 12 − 6 = 6
Gabarito: D

6.        (FGV/2022 – MPE/SC) O número de anagramas da palavra ASSADO que não têm as 2 letras S juntas
é:

OBS.: Anagramas de uma palavra são as permutações das letras dessa palavra.

a) 720.
b) 360.
c) 120.
d) 84.
e) 72.

Comentários:

Para calcular o número de anagramas de "ASSADO", em que as duas letras S não aparecem juntas, devemos
calcular o número total de anagramas da palavra, sem restrição, e subtrair o número de anagramas com dois
S´s juntos.
A palavra "ASSADO" apresenta 6 letras ao total, com repetição de 2 A´s e 2 S´s. Assim, o número total de
anagramas corresponde a uma permutação de 6 elementos com repetição de 2 e de 2:

           Receita Federal (Analista Tributário) Estatística                                           40
           www.estrategiaconcursos.com.br                                                              70

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                       6!     6×5×4×3×2
                            𝑃62,2 =         =           = 6 × 5 × 3 × 2 = 180
                                      2! 2!      2×2
Para calcular o número de anagramas com os 2 S´s juntos, devemos tratá-lo como elemento único. Nessa
situação, teremos uma permutação de 5 elementos (as 4 letras e o elemento com os 2 S´s), com repetição
de 2 A´s:
                                              5! 5 × 4 × 3 × 2
                                      𝑃52 =      =             = 5 × 4 × 3 = 60
                                              2!       2
A diferença corresponde ao número de anagramas desejado:
                                                  𝑛 = 180 − 60 = 120
Gabarito: C

7.   (FGV/2022 – SEMSA Manaus) O número de maneiras diferentes de se escrever as 5 letras da sigla
SEMSA sem que as vogais fiquem juntas é igual a

a) 60.
b) 48.
c) 36.
d) 24.
e) 12.

Comentários:

Similarmente ao que fizemos na questão anterior, devemos calcular o número de anagramas de "SEMSA",
em que as duas vogais não estão juntas. Para isso, vamos calcular o número total de anagramas, e subtrair
o número de anagramas que não atendem à restrição.
A palavra "SEMSA" apresenta 5 letras ao total, com repetição de 2 S´s, o que corresponde à permutação de
5 elementos, com repetição de 2:
                                              5! 5 × 4 × 3 × 2!
                                    𝑃52 =        =              = 5 × 4 × 3 = 60
                                              2!       2"
Para calcular o número de anagramas com as duas vogais juntas, vamos primeiro tratá-las como elemento
único. Nessa situação, teremos uma permutação de 4 elementos (as 3 letras e o elemento com as duas
vogais), com repetição de 2 S´s:
                                                  4! 4 × 3 × 2
                                          𝑃42 =      =         = 4 × 3 = 12
                                                  2!     2
Para cada uma das maneiras de ordenar os 4 elementos, é possível trocar a ordem das vogais de 2 maneiras
(primeiro A e depois E ou primeiro E e depois A). Assim, o número de anagramas com as 2 vogais juntas, em
qualquer ordem, é o dobro do resultado que calculamos:
                                                       2 × 12 = 24

         Receita Federal (Analista Tributário) Estatística                                            41
         www.estrategiaconcursos.com.br                                                               70

                                        


---

     Equipe Exatas Estratégia Concursos
     Aula 05

A diferença corresponde ao número de anagramas desejado:
                                                     𝑛 = 60 − 24 = 36
Gabarito: C

8.       (FGV/2022 – Senado Federal) Luciana deseja ir do vértice A ao vértice B da malha abaixo.

Ela pode caminhar em linha reta, indo de baixo para cima ou da esquerda para a direita, ao longo das
linhas da malha. O número de modos diferentes de Luciana realizar o seu trajeto é igual a

a) 32.
b) 56.
c) 64.
d) 70.
e) 84.

Comentários:

Para chegar de A até B, deve-se andar para cima 4 vezes e para a direita 4 vezes. Assim, cada possibilidade
de caminho pode ser representada por uma sequência de 4 C´s e 4 D´s. Por exemplo, a sequência CDDCCDCD
representa o seguinte caminho:

Assim, a quantidade de caminhos possíveis pode ser calculada pela permutação de 4 C´s e 4 D´s, ou seja,
uma permutação de 8 elementos, com repetição de 4 C´s e 4 D´s:
                                  8!     8 × 7 × 6 × 5 × 4! 8 × 7 × 6 × 5
                     𝑃84,4 =           =                   =              = 2 × 7 × 5 = 70
                               4! × 4!         4! × 4!       4×3×2×1
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                            42
           www.estrategiaconcursos.com.br                                                               70

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

9.      (FGV/2022 – SEFAZ-ES) Dois casais irão se sentar em 4 cadeiras consecutivas de uma fila de um
cinema. O número de maneiras de eles sentarem nas 4 cadeiras, de modo que cada casal se sente junto, é
igual a

a) 4
b) 6
c) 8
d) 12
e) 16

Comentários:

Inicialmente, vamos imaginar que os 2 casais são um elemento único. Assim, temos 2 elementos para serem
permutados:
                                                  𝑃2 = 2! = 2 × 1 = 2
Agora, vamos organizar os casais. Primeiro, permutamos as pessoas do primeiro casal:
                                                  𝑃2 = 2! = 2 × 1 = 2
Em seguida, permutamos as pessoas do segundo casal:
                                                  𝑃2 = 2! = 2 × 1 = 2
Pelo princípio multiplicativo, o número de possibilidades de organizar os casais é: 2 x 2 x 2 = 8.
Gabarito: C

10.   (FGV/2022 – SEFAZ-AM) Um grupo formado por 2 homens e 3 mulheres formará uma fila. Essa fila
deverá começar por um homem ou terminar por um homem. O número de filas distintas possíveis é:

a) 36
b) 48
c) 84
d) 96
e) 120

Comentários:

A questão pede o número de possibilidades de ordenar 2 homens e 3 mulheres em uma fila começando por
um homem OU terminando por um homem.
Para começar com um homem, há 2 possibilidades para escolher o homem inicial. Em relação às demais
posições, temos uma permutação de 4 pessoas:

         Receita Federal (Analista Tributário) Estatística                                           43
         www.estrategiaconcursos.com.br                                                              70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                           𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Pelo princípio multiplicativo, o número de maneiras de organizar a fila começando por um homem é:
                                                       2 x 24 = 48
Similarmente, em relação às filas que terminam com um homem, há 2 possibilidades para escolher o homem
final, enquanto as outras 4 pessoas devem ser permutadas entre as demais posições. Sabendo que a
permutação de 4 elementos é igual a 24, o número de maneiras de organizar a fila terminando por um
homem é, pelo princípio multiplicativo:
                                                       2 x 24 = 48
Agora, devemos subtrair os casos em comum, contados em dobro, quais sejam, as filas que se iniciam e
terminam por homens. Há 2 possibilidades de organizar os 2 homens nessas 2 posições (inicial e final).
Ademais, temos uma permutação das 3 mulheres nas posições intermediárias:
                                              𝑃3 = 3! = 3 × 2 × 1 = 6
Pelo princípio multiplicativo, o número de filas que se iniciam e terminam por homens é:
                                                        2 x 6 = 12
Logo, o número de maneiras de organizar uma fila que se inicia OU termina por um homem é:
                                                   48 + 48 - 12 = 84
Gabarito: C

11.   (FGV/2022 – SSP-AM) Os algarismos 1, 2, 3, 4, 5, devem formar um número de cinco algarismos de
forma que cada um desses algarismos apareça uma vez e que os algarismos pares não fiquem juntos. Por
exemplo, o número 34152 é um desses números.

A quantidade de números que cumprem essas condições é

a) 12

b) 24

c) 36

d) 60

e) 72

Comentários:

A questão pede para organizarmos os algarismos de 1 a 5, de modo que os algarismos pares não fiquem
juntos. Uma forma de fazer esse cálculo é obtendo o número total de possibilidades e subtraindo os casos
que não atendem à restrição.

        Receita Federal (Analista Tributário) Estatística                                            44
        www.estrategiaconcursos.com.br                                                               70

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

O número total de maneiras de organizar 5 algarismos corresponde à permutação de 5 elementos:
                                           𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120
Agora, calculamos o número de possibilidades em que os algarismos pares ficam juntos. Para isso, vamos
considerá-los inicialmente como elemento único. Nessa situação, temos 4 elementos (1, 3, 5 e 2-4) a serem
permutados:
                                              𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Para cada uma dessas possibilidades, podemos reorganizar os números pares de 2 maneiras (2-4 e 4-2). Pelo
princípio multiplicativo, o número de senhas em que os números pares ficam juntos em qualquer ordem é:
                                                          24 x 2 = 48
E o número de senhas em que os algarismos pares não estão juntos é a diferença:
                                                        120 - 48 = 72
                                                               ==219a34==

Gabarito: E

12.   (FGV/2022 – CGU) O número de anagramas da palavra CONCURSO que começam por C ou
terminam por O é:

a) 1.260

b) 1.440

c) 4.320

d) 5.040

e) 10.080

Comentários:

A questão pede o número de anagramas de CONCURSO, que começam com C OU terminam por O.
Os anagramas que começam com C correspondem à permutação das letras ONCURSO nas demais posições.
Logo, temos uma permutação de 7 elementos, com repetição 2 O's:
                                  7! 7 × 6 × 5 × 4 × 3 × 2!
                          𝑃72 =      =                      = 7 × 6 × 5 × 4 × 3 = 2520
                                  2!           2!
E os anagramas que terminam por O correspondem à permutação das letras CONCURS nas demais posições.
Logo, temos uma permutação de 7 elementos, com repetição de 2 C´s:
                                  7! 7 × 6 × 5 × 4 × 3 × 2!
                          𝑃72 =      =                      = 7 × 6 × 5 × 4 × 3 = 2520
                                  2!           2!
Agora, precisamos subtrair os casos contados em dobro, quais sejam os casos que começam com C e
terminam com O.


           Receita Federal (Analista Tributário) Estatística                                          45
           www.estrategiaconcursos.com.br                                                             70

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Nessa situação, temos a permutação das letras ONCURS nas demais posições. Assim, temos a permutação
de 6 elementos, sem repetição:
                                      𝑃6 = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
Portanto, o número de anagramas que começam com C ou terminam por O é:
                                               2520 + 2520 - 720 = 4.320
Gabarito: C

13.   (FGV/2021 – PM-SP) Considere todos os anagramas da palavra BRASIL. O número de anagramas
que não têm as vogais juntas é

a) 720
b) 600
c) 480
d) 240
e) 120

Comentários:

Essa questão pede os anagramas de BRASIL que não apresentam as vogais (A e I) juntas. Para fazermos esse
cálculo, devemos obter o número total de possibilidades e subtrair os casos em que as vogais estão juntas.
O número total de anagramas de BRASIL corresponde à permutação de 6 elementos:
                                      𝑃6 = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
Em relação aos anagramas em que as vogais ficam juntas, vamos primeiro considerá-las como elemento
único. Assim, temos a permutação de 5 elementos (B, R, S, L e A-I):
                                         𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120
Para cada uma dessas possibilidades, podemos reorganizar as vogais de 2 maneiras (A-I e I-A). Pelo princípio
multiplicativo, o número de anagramas em que as vogais ficam juntas em qualquer ordem é:
                                                      120 x 2 = 240
E o número de anagramas em que as vogais não estão juntas é a diferença:
                                                     720 - 240 = 480
Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                               46
         www.estrategiaconcursos.com.br                                                                  70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                            QUESTÕES COMENTADAS – FGV

Arranjo e Combinação

1.     (FGV/2023 – SEFAZ/MG) Os carros A, B, C e D ocupam quatro das seis vagas do estacionamento
representado abaixo

                                                1     2       3   4   5    6

Sabe-se que os carros A e B estão em vagas vizinhas.

O número de maneiras diferentes em que os carros podem estar dispostos nesse estacionamento é igual
a

a) 30.
b) 60.
c) 80.
d) 120.
e) 240.

Comentários:

Precisamos selecionar 4 das 6 vagas, com importância da ordem, com a restrição de que A e B estão em
vagas vizinhas.
Como primeiro passo, vamos selecionar as vagas dos carros A e B. Há 5 possibilidades de escolher vagas
vizinhas ({1,2},{2,3},{3,4},{4,5},{5,6}). Para cada uma dessas possibilidades, há 2 possibilidades de posicionar
os carros (A-B ou B-A). Pelo princípio multiplicativo, o número de vagas possíveis para A e B é o produto:
                                                    𝑛(𝐴, 𝐵) = 5 × 2 = 10
Após a escolha dessas vagas, restarão 2 carros a serem posicionados em 4 vagas distintas, o que corresponde
ao arranjo:
                                                             4!      4 × 3 × 2!
                                    𝑛(𝐶, 𝐷) = 𝐴4,2 =               =            = 12
                                                          (4 − 2)!       2!
E o número de maneiras de alocar todos os carros é o produto (princípio multiplicativo):
                                            𝑛(𝐴, 𝐵, 𝐶, 𝐷) = 10 × 12 = 120
Gabarito: D

          Receita Federal (Analista Tributário) Estatística                                                  47
          www.estrategiaconcursos.com.br                                                                     70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

2.     (FGV/2022 – PC/RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos para
um treinamento especial.

O número de pares diferentes de policiais que podem ser enviados para o treinamento especial é:

a) 10.

b) 12.

c) 15.

d) 16.

e) 18.

Comentários:

Para calcular o número de maneiras de escolher 2 policiais, dentre 6, sem que a ordem importe, uma vez
que os escolhidos terão o mesmo destino, utilizamos a combinação:
                                               6!         6 × 5 × 4!
                                 𝐶6,2 =                 =            = 3 × 5 = 15
                                          (6 − 2)! × 2!     4! × 2
Gabarito: C

3.     (FGV/2022 – EPE) De um grupo composto por cinco homens e cinco mulheres, serão sorteados ao
acaso dois homens e duas mulheres para formar um subgrupo representativo do grupo. O número de
diferentes subgrupos que podem ser formados é igual a

a) 60

b) 80

c) 100

d) 120

e) 160

Comentários:

O número de maneiras de escolher 2 homens, dentre 5, sem que a ordem importe, corresponde à
combinação de 2 elementos, dentre 5:
                                               5!         5 × 4 × 3!
                                 𝐶5,2 =                 =            = 5 × 2 = 10
                                          (5 − 2)! × 2!     3! × 2
Similarmente, também há 10 maneiras de escolher 2 mulheres, dentre 5.


         Receita Federal (Analista Tributário) Estatística                                           48
         www.estrategiaconcursos.com.br                                                              70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Pelo princípio multiplicativo, o número de maneiras de escolher os homens E as mulheres é o produto:
                                                  𝑛 = 10 × 10 = 100
Gabarito: C

4.    (FGV/2022 – EPE) Doze pessoas, representantes de torcidas organizadas, estão reunidas numa sala:
quatro flamenguistas, quatro tricolores e quatro vascaínos. Elas decidem formar um grupo de trabalho
composto por dois flamenguistas, dois tricolores e dois vascaínos. O número de diferentes grupos que
podem ser formados é igual a

a) 27

b) 54

c) 108

d) 216

e) 432

Comentários:

Precisamos escolher 2 flamenguistas, dentre 4; 2 tricolores, dentre 4; e 2 vascaínas, dentre 4.
A escolha de cada um deles corresponde à combinação de 2 elementos, dentre 4:
                                                4!         4 × 3 × 2!
                                  𝐶4,2 =                 =            =2×3=6
                                           (4 − 2)! × 2!     2! × 2
Portanto, há 6 maneiras de escolher os flamenguistas, 6 maneiras de escolher os tricolores e 6 maneiras de
escolher os vascaínos.
Pelo princípio multiplicativo, o número de maneiras de escolher todos os membros do grupo (eventos
concomitantes) é o produto:
                                                 𝑛 = 6 × 6 × 6 = 216
Gabarito: D

5.      (FGV/2022 – SSP-AM) Para o novo cartão de crédito, Renato precisa cadastrar uma senha de 4
dígitos de 0 a 9. Como nasceu em 1998 decidiu que sua senha terá dois “noves” em qualquer posição, mais
dois dígitos diferentes de 9 e diferentes entre si. Por exemplo, 0959 e 2399 são senhas que Renato pode
escolher. O número total de senhas que Renato poderá escolher

a) é menor que 300

b) está entre 300 e 350

         Receita Federal (Analista Tributário) Estatística                                             49
         www.estrategiaconcursos.com.br                                                                70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

c) está entre 351 e 400

d) está entre 401 e 450

e) é maior que 451

Comentários:
Para encontrar o número de possibilidades de senha nessa situação, vamos primeiro escolher os 2 dígitos
diferentes de 9 que farão parte da senha, dentre os 9 algarismos disponíveis (de 0 a 8). Como neste primeiro
momento estamos apenas selecionando os números, temos a combinação de 2 elementos, dentre 9:

                                                9!         9 × 8 × 7! 9 × 8
                                  𝐶9,2 =                 =           =      = 𝟑𝟔
                                           (9 − 2)! × 2!     7! × 2!    2

Agora, vamos organizar os números selecionados. Temos 4 números, sendo 2 deles iguais. Logo, temos a
permutação de 4 elementos com 2 repetições:
                                                 4! 4 × 3 × 2!
                                         𝑃42 =      =          = 4 × 3 = 𝟏𝟐
                                                 2!     2!
Pelo princípio multiplicativo, o número de possibilidades de formar a senha é:
                                                       36 x 12 = 432
Gabarito: D

6.    (FGV/2022 – CBM-AM) A senha bancária de João possui quatro dígitos. Ele esqueceu a senha, mas
lembra-se que ela possui dois dígitos iguais e ímpares e mais dois dígitos pares e diferentes entre si.
Lembrando que 0 (zero) é par, o número de senhas diferentes que cumprem essas condições é

a) 540
b) 600
c) 720
d) 960
e) 1200
Comentários:
Para encontrar o número de senhas com 2 algarismos ímpares iguais e 2 algarismos pares diferentes,
devemos primeiro selecionar os números utilizados. Como há 5 algarismos ímpares, há 5 possibilidades para
a escolha do número ímpar que estará repetido na senha.
Em relação aos números pares, há 5 possibilidades, das quais 2 serão selecionadas para a senha. Como neste
primeiro momento estamos apenas selecionando os números, temos a combinação de 2 elementos, dentre
5:

          Receita Federal (Analista Tributário) Estatística                                              50
          www.estrategiaconcursos.com.br                                                                 70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                5!         5 × 4 × 3! 5 × 4
                                  𝐶5,2 =                 =           =      = 𝟏𝟎
                                           (5 − 2)! × 2!     3! × 2!    2

Agora, vamos organizar os números selecionados. Para isso, temos 4 números, sendo 2 deles iguais. Logo,
temos a permutação de 4 elementos com 2 repetições:
                                                 4! 4 × 3 × 2!
                                         𝑃42 =      =          = 4 × 3 = 𝟏𝟐
                                                 2!     2!
Pelo princípio multiplicativo, o número de possibilidades de formar a senha é:
                                                     5 x 10 x 12 = 600
Gabarito: B

7.      (FGV/2022 – TJDFT) Um restaurante oferece 7 sabores de pizza, sendo que cada pizza só pode ter 1
sabor, isto é, o restaurante não permite a mistura de sabores dentro da mesma pizza. Um grupo de amigos
pretende pedir 4 pizzas. O número possível de escolhas é:

a) 35.
b) 40.
c) 55.
d) 105.
e) 210.

Comentários:

Precisamos encontrar o número de maneiras de os amigos pedirem 4 pizzas, havendo um total de 7 sabores
disponíveis, considerando que as pizzas podem ser do mesmo sabor ou de sabores distintos. Assim, temos
uma combinação completa com 𝑛 = 7 tipos diferentes e 𝑘 = 4 objetos iguais ou diferentes.
Nessa situação, o número de maneiras de escolher os sabores de 4 pizzas, havendo um total de 7 sabores,
pode ser interpretada como uma permutação das 6 barras e dos 4 círculos, ou seja, uma permutação de 10
elementos, com repetição de 6 e de 4:

                                                     𝑛−1,𝑘     (𝑛 + 𝑘 − 1)!
                                             𝐶𝑅𝑛𝑘 = 𝑃𝑛+𝑘−1 =
                                                               (𝑛 − 1)! × 𝑘!
                      6,4       10!     10 × 9 × 8 × 7 × 6! 10 × 9 × 8 × 7
             𝐶𝑅74 = 𝑃10   =           =                    =               = 10 × 3 × 7 = 210
                              6! × 4!         6! × 4!         4×3×2
Gabarito: E

8.     (FGV/2021 – FunSaúde-CE) Em um setor de uma empresa trabalham 6 pessoas. Dessas pessoas,
duas serão escolhidas para trabalhar em um projeto novo. Com essas pessoas, o número de pares
diferentes que podem ser formados é


          Receita Federal (Analista Tributário) Estatística                                          51
          www.estrategiaconcursos.com.br                                                             70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 10
b) 12.
c) 13.
d) 14.
e) 15.
Comentários:
Novamente, o número de pares que podem ser formados, de um total de 6 pessoas corresponde à
combinação de 2 elementos dentre 6, já que a ordem da seleção não importa:

                                               6!         6 × 5 × 4! 6 × 5
                                 𝐶6,2 =                 =           =      = 15
                                          (6 − 2)! × 2!     4! × 2!    2
                                                             ==219a34==

Gabarito: E

9.    (FGV/2019 – Pref. Salvador/BA) Os cinco times de futebol de certo município disputarão um torneio
em que cada time jogará uma vez com cada um dos outros times.

O número de partidas que serão realizadas é

a) 8

b) 9

c) 10

d) 15

e) 20

Comentários:

Considerando que todos os times jogam com os outros times uma vez, então o número de partidas entre 2
times corresponde ao número de maneiras de selecionar 2 times, dentre o total de 5 times.
Tendo em vista que a ordem não importa, temos a combinação de 2 elementos, dentre 5:
                                          5!         5!     5 × 4 × 3! 5 × 4
                            𝐶5,2 =                =       =           =      = 10
                                     (5 − 2)! × 2! 3! × 2     3! × 2     2
Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                          52
         www.estrategiaconcursos.com.br                                                             70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

10.    (FGV/2019 – Pref. Angra dos Reis/RJ) Deseja-se pintar os lados de um quadrado feito de madeira,
sendo cada lado de uma única cor. Lados opostos devem ter a mesma cor e lados adjacentes devem ter
cores diferentes. Dispõe-se de 5 cores diferentes.

O número de maneiras diferentes de pintar o quadrado nas condições dadas é

a) 20.

b) 16.

c) 12.

d) 10.

e) 8.

Comentários:

Para pintar os lados de um quadrado de modo que lados opostos tenham a mesma cor e lados adjacentes
tenham cores diferentes, precisamos de 2 cores diferentes.
Havendo 5 cores disponíveis, o número de maneiras de pintar o quadro corresponde ao número de maneiras
de selecionar 2 cores, dentre 5.
Por se tratar de um quadrado (lados iguais), a ordem dessa seleção não importa, logo, temos uma
combinação de 2 elementos, dentre 5:
                                          5!         5!     5 × 4 × 3! 5 × 4
                            𝐶5,2 =                =       =           =      = 10
                                     (5 − 2)! × 2! 3! × 2     3! × 2     2
Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                         53
         www.estrategiaconcursos.com.br                                                            70

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

                                 LISTA DE QUESTÕES – FGV

Princípios de Contagem

1.    (FGV/2022 – Câmara Taubaté/SP) Utilizando apenas os elementos do conjunto {0, 1, 2, 3, 4, 5} a
quantidade de números ímpares de 3 algarismos distintos que podem ser formados é

a) 24.

b) 26.

c) 48.

d) 60.

e) 96.

2.    (FGV/2022 – SEMSA Manaus) Cada quadradinho da figura a seguir contém um algarismo do
conjunto {1, 2, 3, 4, 5} que juntos formam, em sequência, a senha que abre um cofre.

O primeiro quadradinho (o da esquerda) só aceita algarismo ímpar e os outros dois só aceitam algarismos
pares, distintos ou não. O número de senhas diferentes possíveis é

a) 9.
b) 10.
c) 11.
d) 12.
e) 13.

3.     (FGV/2022 – MPE/GO) No código Morse, as “letras” são · e – (ponto e traço). Certa instrução é
formada por “símbolos” e cada símbolo é formado por uma sequência de duas, três ou quatro letras do
código Morse. Por exemplo, “– · –” e “– – ·” são símbolos diferentes. O número de símbolos diferentes que
essa instrução possui é

a) 18.
b) 20.

         Receita Federal (Analista Tributário) Estatística                                            54
         www.estrategiaconcursos.com.br                                                               70

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

c) 24.
d) 26.
e) 28.

4.     (FGV/2018 – SASDH/RJ) Uma urna D contém 6 bolas numeradas de 3 a 8 e uma urna U contém 7
bolas numeradas de 2 a 8. Um número de dois algarismos será formado retirando uma bola da urna D e
uma bola da urna U, cujos números serão, respectivamente, o algarismo das dezenas e o algarismo das
unidades. A quantidade de números pares que poderão ser formados dessa maneira é

a) 42.

b) 36.                                                       ==219a34==

c) 24.

d) 20.

e) 16.

5.     (FGV/2018 – ALE/RO) Em um circuito elétrico há 4 disjuntores que podem ficar, cada um deles,
independente dos demais, nas posições “ligado” ou “desligado”. O número de maneiras diferentes de se
posicionar (“ligado” ou “desligado”) esses 4 disjuntores é

a) 4.

b) 6.

c) 8.

d) 12.

e) 16.

6.    (FGV/2018 – ALE-RO) O presidente e o vice-presidente de uma comissão serão escolhidos entre os
10 deputados do Partido X e os 6 deputados do Partido Y. Os Partidos acordaram que os dois cargos não
poderão ser ocupados por deputados de um mesmo Partido.

O número de maneiras diferentes de se escolher o presidente e o vice-presidente dessa comissão, é

a) 16
b) 32


         Receita Federal (Analista Tributário) Estatística                                          55
         www.estrategiaconcursos.com.br                                                             70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

c) 60
d) 64
e) 120

7.     (FGV/2018 – ALE-RO) Manoel possui tintas de 5 cores diferentes e deve pintar a bandeira abaixo
de forma que:

    •     cada região será pintada com uma única cor.
    •     duas regiões vizinhas não podem ter a mesma cor.

O número de maneiras diferentes que Manoel pode pintar essa bandeira é

a) 120.

b) 180.

c) 240.

d) 360.

e) 720.

8.     (FGV/2016 – MP-RJ) Para organizar um horário de atendimento, em três dias da semana, pela
manhã e à tarde, deve-se colocar duas letras A, duas letras B e duas letras C nas casas vazias da tabela
abaixo, com a condição de que, em cada coluna, não apareçam letras iguais.

O número de maneiras diferentes de preencher essa tabela é:

a) 12.
b) 24.
c) 36.


          Receita Federal (Analista Tributário) Estatística                                          56
          www.estrategiaconcursos.com.br                                                             70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 48.
e) 64.

9.     (FGV/2017 – Prefeitura de Salvador/BA) Cinco pessoas de diferentes alturas devem ocupar as cinco
cadeiras abaixo para uma fotografia.

O fotógrafo pediu que nem o mais baixo nem o mais alto ocupassem as cadeiras das extremidades.
Respeitando essa condição, o número de maneiras como as pessoas podem se posicionar para a fotografia
é:

a) 12.

b) 18.

c) 24.

d) 36.

e) 72.

         Receita Federal (Analista Tributário) Estatística                                          57
         www.estrategiaconcursos.com.br                                                             70

                                       


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1. LETRA C                                  4. LETRA C                  7. LETRA E
 2. LETRA D                                  5. LETRA E                  8. LETRA D
 3. LETRA E                                  6. LETRA E                  9. LETRA D

      Receita Federal (Analista Tributário) Estatística                               58
      www.estrategiaconcursos.com.br                                                  70

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 05

                                 LISTA DE QUESTÕES – FGV

Permutação

1.    (FGV/2022 – MPE/SC) Quatro casais foram ao cinema e vão sentar em 8 cadeiras consecutivas em
uma mesma fileira. O número de maneiras distintas de os 4 casais se sentarem nas 8 cadeiras, de modo
que cada mulher se sente ao lado de seu marido, é:

a) 24
b) 96
c) 256
d) 384
e) 576

2.     (FGV/2022 – Câmara Taubaté/SP) Três meninos e duas meninas vão posar para uma fotografia e o
fotógrafo sugere que eles fiquem em fila, em qualquer ordem, mas de modo que fique um menino em
cada extremidade da fila.

O número de maneiras diferentes que eles as 5 crianças podem posar para a fotografia é

a) 6.
b) 12.
c) 24.
d) 36.
e) 48.

3.    (FGV/2022 – MPE/GO) Uma mesa retangular está encostada em uma parede, possui dois lugares
de um lado, dois lugares do outro e um na cabeceira como mostra a figura.

Alberto e mais 4 amigos vão ocupar esses 5 lugares, mas Alberto não quer ficar na cabeceira.

         Receita Federal (Analista Tributário) Estatística                                       59
         www.estrategiaconcursos.com.br                                                          70

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 05

O número de maneiras que as 5 pessoas podem ficar dispostas em volta dessa mesa e atender à restrição
de Alberto é

a) 48.
b) 60.
c) 72.
d) 96.
e) 120.

4.     (FGV/2022 – SEAD/AP) Arnaldo tem 3 livros de Química, 4 de Física e 2 de Matemática, todos
diferentes entre si e deseja arrumá-los em uma prateleira de modo que os livros de Química fiquem juntos
e os de Física também.

O número de maneiras distintas de Arnaldo arrumar os seus livros na prateleira é igual a

a) 288

b) 576

c) 1152

d) 3456

e) 6912

5.      (FGV/2022 – TJ/TO) Considere as 4 letras da sigla TJTO. O número de maneiras de escrever essas 4
letras em sequência, de modo que as 2 letras T não fiquem juntas, é:

a) 24.

b) 12.

c) 8.

d) 6.

e) 4.

6.        (FGV/2022 – MPE/SC) O número de anagramas da palavra ASSADO que não têm as 2 letras S juntas
é:


           Receita Federal (Analista Tributário) Estatística                                         60
           www.estrategiaconcursos.com.br                                                            70

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 05

OBS.: Anagramas de uma palavra são as permutações das letras dessa palavra.

a) 720.

b) 360.

c) 120.

d) 84.

e) 72.

7.   (FGV/2022 – SEMSA Manaus) O número de maneiras diferentes de se escrever as 5 letras da sigla
                                                               ==219a34==

SEMSA sem que as vogais fiquem juntas é igual a

a) 60.
b) 48.
c) 36.
d) 24.
e) 12.

8.        (FGV/2022 – Senado Federal) Luciana deseja ir do vértice A ao vértice B da malha abaixo.

Ela pode caminhar em linha reta, indo de baixo para cima ou da esquerda para a direita, ao longo das
linhas da malha. O número de modos diferentes de Luciana realizar o seu trajeto é igual a

a) 32.
b) 56.
c) 64.
d) 70.
e) 84.

           Receita Federal (Analista Tributário) Estatística                                         61
           www.estrategiaconcursos.com.br                                                            70

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

9.      (FGV/2022 – SEFAZ-ES) Dois casais irão se sentar em 4 cadeiras consecutivas de uma fila de um
cinema. O número de maneiras de eles sentarem nas 4 cadeiras, de modo que cada casal se sente junto, é
igual a

a) 4

b) 6

c) 8

d) 12

e) 16

10.   (FGV/2022 – SEFAZ-AM) Um grupo formado por 2 homens e 3 mulheres formará uma fila. Essa fila
deverá começar por um homem ou terminar por um homem.

O número de filas distintas possíveis é:

a) 36

b) 48

c) 84

d) 96

e) 120

11.   (FGV/2022 – SSP-AM) Os algarismos 1, 2, 3, 4, 5, devem formar um número de cinco algarismos de
forma que cada um desses algarismos apareça uma vez e que os algarismos pares não fiquem juntos. Por
exemplo, o número 34152 é um desses números.

A quantidade de números que cumprem essas condições é

a) 12

b) 24

c) 36

d) 60

e) 72


         Receita Federal (Analista Tributário) Estatística                                         62
         www.estrategiaconcursos.com.br                                                            70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

12.   (FGV/2022 – CGU) O número de anagramas da palavra CONCURSO que começam por C ou
terminam por O é:

a) 1.260

b) 1.440

c) 4.320

d) 5.040

e) 10.080

13.   (FGV/2021 – PM-SP) Considere todos os anagramas da palavra BRASIL. O número de anagramas
que não têm as vogais juntas é

a) 720
b) 600
c) 480
d) 240
e) 120

           Receita Federal (Analista Tributário) Estatística                               63
           www.estrategiaconcursos.com.br                                                  70

                                         


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1.   LETRA D                                6. LETRA C                  11. LETRA E
 2.   LETRA D                                7. LETRA C                  12. LETRA C
 3.   LETRA D                                8. LETRA D                  13. LETRA C
 4.   LETRA D                                9. LETRA C
 5.   LETRA D                                10. LETRA C

      Receita Federal (Analista Tributário) Estatística                                64
      www.estrategiaconcursos.com.br                                                   70

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                  LISTA DE QUESTÕES – FGV

Arranjo e Combinação

1.     (FGV/2023 – SEFAZ/MG) Os carros A, B, C e D ocupam quatro das seis vagas do estacionamento
representado abaixo

                                                1     2       3   4   5   6

Sabe-se que os carros A e B estão em vagas vizinhas.

O número de maneiras diferentes em que os carros podem estar dispostos nesse estacionamento é igual
a

a) 30.
b) 60.
c) 80.
d) 120.
e) 240.

2.     (FGV/2022 – PC-RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos para
um treinamento especial. O número de pares diferentes de policiais que podem ser enviados para o
treinamento especial é:

a) 10
b) 12.
c) 15.
d) 16.
e) 18.

3.     (FGV/2022 – EPE) De um grupo composto por cinco homens e cinco mulheres, serão sorteados ao
acaso dois homens e duas mulheres para formar um subgrupo representativo do grupo. O número de
diferentes subgrupos que podem ser formados é igual a

          Receita Federal (Analista Tributário) Estatística                                          65
          www.estrategiaconcursos.com.br                                                             70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 60
b) 80
c) 100
d) 120
e) 160

4.    (FGV/2022 – EPE) Doze pessoas, representantes de torcidas organizadas, estão reunidas numa sala:
quatro flamenguistas, quatro tricolores e quatro vascaínos. Elas decidem formar um grupo de trabalho
composto por dois flamenguistas, dois tricolores e dois vascaínos.

O número de diferentes grupos que podem ser formados é igual a

a) 27
b) 54
c) 108
d) 216
e) 432

5.      (FGV/2022 – SSP-AM) Para o novo cartão de crédito, Renato precisa cadastrar uma senha de 4
dígitos de 0 a 9. Como nasceu em 1998 decidiu que sua senha terá dois “noves” em qualquer posição, mais
dois dígitos diferentes de 9 e diferentes entre si. Por exemplo, 0959 e 2399 são senhas que Renato pode
escolher.

O número total de senhas que Renato poderá escolher

a) é menor que 300
b) está entre 300 e 350
c) está entre 351 e 400
d) está entre 401 e 450
e) é maior que 451

6.    (FGV/2022 – CBM-AM) A senha bancária de João possui quatro dígitos. Ele esqueceu a senha, mas
lembra-se que ela possui dois dígitos iguais e ímpares e mais dois dígitos pares e diferentes entre si.

Lembrando que 0 (zero) é par, o número de senhas diferentes que cumprem essas condições é

         Receita Federal (Analista Tributário) Estatística                                          66
         www.estrategiaconcursos.com.br                                                             70

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 540
b) 600
c) 720
d) 960
e) 1200

7.      (FGV/2022 – TJDFT) Um restaurante oferece 7 sabores de pizza, sendo que cada pizza só pode ter 1
sabor, isto é, o restaurante não permite a mistura de sabores dentro da mesma pizza. Um grupo de amigos
pretende pedir 4 pizzas. O número possível de escolhas é:

a) 35.                                                        ==219a34==

b) 40.
c) 55.
d) 105.
e) 210.

8.     (FGV/2021 – FunSaúde-CE) Em um setor de uma empresa trabalham 6 pessoas. Dessas pessoas,
duas serão escolhidas para trabalhar em um projeto novo. Com essas pessoas, o número de pares
diferentes que podem ser formados é

a) 10
b) 12.
c) 13.
d) 14.
e) 15.

9.    (FGV/2019 – Pref. Salvador/BA) Os cinco times de futebol de certo município disputarão um torneio
em que cada time jogará uma vez com cada um dos outros times.

O número de partidas que serão realizadas é

a) 8

b) 9

c) 10


          Receita Federal (Analista Tributário) Estatística                                          67
          www.estrategiaconcursos.com.br                                                             70

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 15

e) 20

10.    (FGV/2019 – Pref. Angra dos Reis/RJ) Deseja-se pintar os lados de um quadrado feito de madeira,
sendo cada lado de uma única cor. Lados opostos devem ter a mesma cor e lados adjacentes devem ter
cores diferentes. Dispõe-se de 5 cores diferentes.

O número de maneiras diferentes de pintar o quadrado nas condições dadas é

a) 20.

b) 16.

c) 12.

d) 10.

e) 8.

         Receita Federal (Analista Tributário) Estatística                                         68
         www.estrategiaconcursos.com.br                                                            70

                                       


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                  GABARITO
 1.   LETRA D                                5.   LETRA D                9. LETRA C
 2.   LETRA C                                6.   LETRA B                10. LETRA D
 3.   LETRA C                                7.   LETRA E
 4.   LETRA D                                8.   LETRA E

      Receita Federal (Analista Tributário) Estatística                                69
      www.estrategiaconcursos.com.br                                                   70

                                    


---

---
