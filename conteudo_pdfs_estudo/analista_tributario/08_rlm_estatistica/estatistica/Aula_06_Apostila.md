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
arquivo_origem: Aula 06_Apostila.txt
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
1) Introdução Análise Combinatória.


2) Princípios Fundamentais de Contagem.


3) Fatorial de um Número Natural.


4) Permutação.


5) Outros Tipos de Permutação.


6) Arranjo e Combinação.


7) Partições.


8) Lemas de Kaplansky.


9) Questoes Comentadas - Princípios de Contagem - FGV


10) Questões Comentadas - Permutação - FGV


11) Questões Comentadas - Outros Tipos de Permutação - FGV


12) Questões Comentadas - Arranjo e Combinação - FGV


13) Questões Comentadas - Partições - FGV


14) Questões Comentadas - Lemas de Kaplansky - FGV


15) Lista de Questoes - Princípios de Contagem - FGV


16) Lista de Questões - Permutação - FGV


17) Lista de Questões - Outros Tipos de Permutação - FGV


18) Lista de Questões - Arranjo e Combinação - FGV


19) Lista de Questões - Partições - FGV


20) Lista de Questões - Lemas de Kaplansky - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          183

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Olá, amigos! Como estão os estudos de Estatística?

Nesta aula, vamos estudar análise combinatória, que são ferramentas de contagem.

Como assim? Uma aula sobre contagem? 1, 2, 3, ...?

Sim e não! Sim, porque, de fato, você pode contar os eventos, simplesmente. Essa é uma boa estratégia
quando há poucos eventos.

Mas, quando há muitos eventos, essa contagem se torna muito trabalhosa, você se perde no meio do
caminho, ... Então, a ideia dessas ferramentas é ajudá-lo a "contar" os eventos com eficiência!

Algumas questões de concursos cobram a análise combinatória, puramente; e outras cobram no cálculo de
probabilidades. Então, esse é um assunto bem importante.
                                                              ==219a34==

Até já!

Luana Brandão

Posso te contar um pouquinho sobre a minha trajetória? Sou Doutora em Engenharia de Produção, pela
Universidade Federal Fluminense, e Auditora Fiscal da SEFAZ-RJ. Sou professora de Estatística do Estratégia
porque quero muito te ajudar na sua trajetória, rumo à aprovação!

                                 Se tiver alguma dúvida, entre em contato comigo!

                professoraluanabrandao@gmail.com

               @professoraluanabrandao

                                                   “Lute e conquiste, supere seus medos. Acredite em seus sonhos.”

                                                                                                     Aislan Dlano

          Receita Federal (Analista Tributário) Estatística                                                     3
          www.estrategiaconcursos.com.br                                                                       183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                   ANÁLISE COMBINATÓRIA

Introdução

A Análise Combinatória, ou simplesmente combinatória, estuda técnicas de contagem, para que você não
precise efetivamente contar todos os elementos.

Por exemplo, quantos números de 3 algarismos podemos formar com o conjunto {1, 3, 4}, sem repetir os
algarismos, em um mesmo número?

Bem, as possibilidades são:

                   i)       134;                            ii) 143;            iii) 314;

                   iv)      341;                            v) 413;             vi) 431.

Portanto, são 6 números distintos.

Para resolver esse problema, não precisamos de nenhuma técnica específica. Só precisamos raciocinar e
contar todas as possibilidades.

Mas, e se o conjunto de algarismos fosse de todos os números de 1 a 9? Perderíamos muito tempo para
relacionar todas as possibilidades, e talvez nos perderíamos em algum momento.

A análise combinatória facilita justamente a contagem das possibilidades, em conjuntos finitos.

Ela também permite efetuar contagens de subconjuntos com determinadas características. Por exemplo,
poderíamos estar interessados apenas nos números pares ou nos números primos.

Princípios Fundamentais da Contagem

Nesta seção, veremos os princípios fundamentais de contagem, que você vai utilizar muito. Eles permeiam
as ferramentas da análise combinatória e são requisitados em praticamente todas as questões sobre o
assunto, desde as mais simples, até as mais complexas.

Princípio Multiplicativo

Esse princípio enuncia o seguinte:

        Se um evento A ocorre de m maneiras diferentes e se, para cada uma dessas maneiras, um
        outro evento B ocorre de n maneiras diferentes, então o número de maneiras diferentes de
        ambos os eventos (A e B) ocorrerem é m x n.

        Receita Federal (Analista Tributário) Estatística                                            4
        www.estrategiaconcursos.com.br                                                              183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Para ilustrar, vamos considerar que João precisa se vestir com uma calça e uma blusa e que ele tem 3 calças
e 4 blusas. Nesse caso, o evento A corresponde a vestir uma calça, com m = 3 possibilidades, e o evento B
corresponde a vestir uma blusa, com n = 4 possibilidades.

Segundo o princípio multiplicativo, o número de maneiras distintas de João se vestir é:

                                               𝒎 × 𝒏 = 𝟑 × 𝟒 = 12

                         Calças                   Blusas                    Possibilidades
                                                   Blusa 1             Calça 1      Blusa 1
                           Calça 1

                                                   Blusa 2             Calça 1       Blusa 2
                           Calça 2

                                                  Blusa 3              Calça 1      Blusa 3

                          Calça 3
                                                   Blusa 4             Calça 1      Blusa 4

                         Calças                   Blusas                    Possibilidades

                                                   Blusa 1             Calça 2      Blusa 1
                           Calça 1

                                                   Blusa 2             Calça 2       Blusa 2
                           Calça 2

                                                  Blusa 3              Calça 2      Blusa 3

                          Calça 3
                                                   Blusa 4             Calça 2      Blusa 4

                         Calças                   Blusas                    Possibilidades
                                                   Blusa 1             Calça 3      Blusa 1
                           Calça 1

                                                   Blusa 2             Calça 3       Blusa 2
                           Calça 2

                                                  Blusa 3              Calça 3      Blusa 3

                          Calça 3
                                                   Blusa 4             Calça 3      Blusa 4

Observe que, para cada calça, há 4 possibilidades de blusas. Portanto, são 4 blusas possíveis para a calça 1;
4 blusas possíveis para a calça 2; e 4 blusas possíveis para a calça 3. Somando todas essas possibilidades,
temos 4 + 4 + 4 = 3 x 4 = 12.

Obtemos o mesmo resultado se pensarmos que há 3 possibilidades de calça para cada blusa.

Podemos extrapolar esse princípio para qualquer número de eventos. Ou seja, se tivermos um terceiro
evento C que ocorre de p maneiras diferentes, então o número de maneiras diferentes de os eventos A, B e
C ocorrerem é m x n x p.

        Receita Federal (Analista Tributário) Estatística                                                 5
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Utilizando o mesmo exemplo, considerando que João precisa utilizar um cinto e que ele tem p = 2 cintos
distintos, então o número de maneiras distintas de João colocar uma calça, uma blusa e um cinto é:

                                          𝒎 × 𝒏 × 𝒑 = 𝟑 × 𝟒 × 𝟐 = 24

          Generalizando para n eventos, com p1 possibilidades para o evento A1, p2 possibilidades
          para o evento A2, ... e pn possibilidades para o evento An, então o número de maneiras de
          todos os n eventos ocorrerem é:

                                          P(A1 e A2 e ... e An) = p1 x p2 x ... x pn

(VUNESP/2019 – Prefeitura de dois Córregos/SP) Em um grupo de pessoas, há 12 homens e 13 mulheres.
Com essas pessoas, uma dupla será aleatoriamente formada, com um homem e uma mulher, para participar
de um concurso. O número total de possibilidades para a formação dessa dupla é
a) 12.
b) 144.
c) 156.
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
Há 2 blusas para cada uma das 3 calças.


          Receita Federal (Analista Tributário) Estatística                                             6
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Além disso, para cada possível combinação de uma blusa e uma calça, há 4 meias diferentes.
Logo, o número de alternativas é, pelo princípio multiplicativo:
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
                                                      A            B


                                                     D             C


         Receita Federal (Analista Tributário) Estatística                                                7
         www.estrategiaconcursos.com.br                                                                  183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

No entanto, a cor do vértice A deve ser diferente da cor do vértice C; e a cor do vértice B deve ser diferente
da cor do vértice D.
Assim, há 5 possibilidades para o vértice A e 4 possibilidades para o vértice C.
Similarmente, há 5 possibilidades para o vértice B e 4 possibilidades para o vértice D.
Pelo princípio multiplicativo, o número total de possibilidades para todos os 4 vértices é:
                                                   5 x 5 x 4 x 4 = 400
Gabarito: E

Contagem de Divisores

Com base no princípio multiplicativo, é possível calcular a quantidade de divisores de um número natural.
O primeiro passo é fatorar o número natural em números primos. Por exemplo, vamos fatorar o número 60:

                                                            60   2
                                                            30   2
                                                            15   3
                                                             5   5
                                                             1

Assim, podemos representar o número 60, a partir dos seus divisores primos, da seguinte forma:

                                                  60 = 2𝟐 × 3𝟏 × 5𝟏

Agora é o pulo do gato: Todos os divisores de um número são formados pelo produto de um subconjunto
dos seus divisores primos. Por exemplo, o número 15 é produto de 3 e 5 e pode ser representado como:

                                                  15 = 2𝟎 × 3𝟏 × 5𝟏

Assim, todos os divisores de 60, que indicamos como 𝑑60 , podem ser representados da seguinte forma:

                              𝑑60 = 2𝒙 × 3𝒚 × 5𝒛 ,           𝑠𝑒𝑛𝑑𝑜 𝒙 ≤ 𝟐, 𝒚 ≤ 𝟏, 𝒛 ≤ 𝟏

Logo, as possibilidades para cada expoente são:

    •   𝑥: 0, 1 ou 2 (3 possibilidades);
    •   𝑦: 0 ou 1 (2 possibilidades);
    •   𝑧: 0 ou 1 (2 possibilidades).

Pelo princípio multiplicativo, devemos multiplicar as possibilidades desses eventos para encontrar o número
de possibilidades, no total:

                                                     3 x 2 x 2 = 12

Logo, há 12 divisores de 60.


        Receita Federal (Analista Tributário) Estatística                                                  8
        www.estrategiaconcursos.com.br                                                                    183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

        Os expoentes dos divisores primos de 60 eram 2, 1 e 1, e os valores multiplicados para
        encontrar o número de divisores foram 3, 2 e 2.

        Portanto, basta somar 1 a cada expoente e multiplicá-los:

                           Número de Divisores = (2 + 1) x (1 + 1) x (1 + 1) = 3 x 2 x 2

Isso porque o número de possibilidades que cada expoente pode assumir é igual ao seu valor, mais 1,
correspondente ao zero.

(FCC/2016 – Companhia Metropolitana/SP) Uma tabela retangular de 12 linhas por 18 colunas possui 216
campos de preenchimento. Outras tabelas retangulares com combinações diferentes de linhas e colunas
também possuem 216 campos de preenchimento. Observando-se que uma tabela de 12 linhas por 18
colunas é diferente de uma tabela de 18 linhas por 12 colunas, o total de tabelas retangulares diferentes
com 216 campos de preenchimento é igual a
a) 14
b) 12
c) 10
d) 16
e) 18
Comentários:
O enunciado pede a quantidade de tabelas distintas que podem ser formadas com 216 campos, de modo
que uma tabela com A linhas e B colunas é diferente de uma tabela B linhas e A colunas.
Essa quantidade corresponde ao número de maneiras de obter 216 pelo produto de 2 números inteiros:
                                        1 x 216; 2 x 108; ...; 108 x 2; 216 x 1
Ou seja, ela corresponde ao número divisores de 216.
Para isso, vamos primeiro fatorar 216 em números primos:

        Receita Federal (Analista Tributário) Estatística                                              9
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                            216 2
                                                            108 2
                                                             54 2
                                                             27 3
                                                              9 3
                                                              3 3
                                                              1

                                                    216 = 2𝟑 × 3𝟑

Os divisores de 216 podem ser, portanto, representados da seguinte forma:

                                                    𝑑216 = 2𝒙 × 3𝒚

Nesse caso, 𝒙 pode assumir 3 + 1 = 4 possibilidades (0, 1, 2 ou 3), assim como 𝒚., que também pode assumir
as mesmas 3 + 1 = 4 possibilidades. Pelo princípio multiplicativo, o número total de possibilidades é:
                                                       4 x 4 = 16
Gabarito: D.

Princípio Aditivo

Agora, veremos outro princípio fundamental de contagem, chamado de princípio aditivo:

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

        Havendo n eventos mutuamente exclusivos, com p1 possibilidades para o evento A1, p2
        possibilidades para o evento A2, ... e pn possibilidades para o evento An, então o número de
        maneiras um dos n eventos ocorrer é:

                                     P(A1 ou A2 ou ... ou An) = p1 + p2 + ... + pn

        Receita Federal (Analista Tributário) Estatística                                                  10
        www.estrategiaconcursos.com.br                                                                    183

                                      


---

Equipe Exatas Estratégia Concursos
Aula 05

      •      Quando ambos ocorrem os eventos (A E B), multiplicamos as possibilidades;
      •      Quando ocorre somente um dos eventos (A OU B), somamos as possibilidades.

              Eventos Concomitantes: A e B                    Princípio Multiplicativo: n(A) x n(B)


               Eventos Excludentes: A ou B                       Princípio Aditivo: n(A) + n(B)

      Agora, vejamos um exemplo combinando esses dois princípios.

      Vamos considerar que Maria precisa se vestir e se calçar, dispondo de:

      •      4 vestidos;
      •      2 saias;
      •      3 blusas; e
      •      5 sapatos.

      Nesse caso, Maria irá colocar um vestido (evento A) OU um conjunto de saia (evento B) E
      blusa (evento C). De uma forma ou de outra, irá colocar também um sapato (evento D).

      Nessa situação, as possibilidades de Maria se vestir e se calçar são:

      i)        Os eventos B (saia) e C (blusa) são concomitantes – princípio multiplicativo:
                                             2 x 3 = 6 possibilidades;

      ii)       Os eventos A (vestido) e (i) (saia e blusa) são excludentes – princípio aditivo:
                                              4 + 6 = 10 possibilidades;

      iii)      Os eventos D (sapato) e (iii) (saia e blusa ou vestido) são concomitantes – princípio
                multiplicativo:
                                             5 x 10 = 50 possibilidades.

      Receita Federal (Analista Tributário) Estatística                                                 11
      www.estrategiaconcursos.com.br                                                                    183

                                    


---

    Equipe Exatas Estratégia Concursos
    Aula 05

(2017 – Conselho Regional de Educação Física/CE) Numa estante encontram-se 4 dicionários de inglês, 3 de
espanhol e 2 de francês.
De quantas maneiras uma pessoa pode escolher dois dicionários dessa estante e que sejam de idiomas
diferentes?
a) 22
b) 24
c) 26
d) 28
Comentários:
Selecionando 2 dicionários de idiomas diferentes, podemos encontrar uma das seguintes opções:
        i) um livro de inglês e um de espanhol; ou
        ii) um livro de inglês e um de francês; ou
        iii) um livro espanhol e um de francês.
Em cada opção, temos eventos concomitantes (ambos ocorrem), aplicando-se o princípio multiplicativo;
enquanto as opções i, ii e iii se excluem mutuamente (somente uma delas irá ocorrer), aplicando-se o
princípio aditivo entre elas.
•    para i (inglês e espanhol), temos 4 x 3 = 12 possibilidades;
•    para ii (inglês e francês), temos 4 x 2 = 8 possibilidades;
•    para iii (espanhol e francês), temos 3 x 2 = 6 possibilidades.
E o total de maneiras de pegar dois dicionários de idiomas distintos é (princípio aditivo):
                                                       12 + 8 + 6 = 26
Gabarito: C


(CESPE/2013 – TRT-ES) Considerando que, na fruteira da casa de Pedro, haja 10 uvas, 2 maçãs, 3 laranjas, 4
bananas e 1 abacaxi, julgue o próximo item.
Se Pedro desejar comer apenas um tipo de fruta, a quantidade de maneiras de escolher frutas para comer
será superior a 100.
Comentários:
Se Pedro deseja comer apenas um tipo de fruta, ele poderá comer uvas OU maçãs OU laranjas OU bananas
OU abacaxi.

          Receita Federal (Analista Tributário) Estatística                                            12
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

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

Princípio da Casa dos Pombos

O princípio do pombal ou da casa dos pombos afirma que:

         Se n pombos devem se abrigar em m casas e se n > m, então pelo menos uma casa irá
         conter mais de um pombo.

        Receita Federal (Analista Tributário) Estatística                                              13
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Por exemplo, podemos ter m = 4 casas. Nesse caso, se tivermos qualquer número de pombos maior do que
4, então pelo menos uma casa conterá mais de um pombo.

Por que pombos? Bem, os pombos são imprevisíveis. Eles podem resolver ficar todos juntos ou todos
separados... Nesse sentido, eles representam eventos aleatórios, como a seleção de determinados
elementos ao acaso. Porém, mesmo sendo imprevisíveis, é possível fazer algumas afirmações ou garantias.
Para fazer essas afirmações, precisamos pensar no pior cenário possível.

Por exemplo, considerando um total de 4 casas, quantos pombos são necessários para garantir que haverá
pelo menos 2 pombos em uma casa? Bem, é possível que, havendo apenas 2 pombos, ambos escolham a
mesma casa. Porém, isso não pode ser garantido, pois também é possível que escolham casas distintas. A
mesma situação ocorre com 3 e com 4 pombos, pois ainda é possível que todos escolham casas distintas.

Entretanto, com 5 pombos, necessariamente haverá pelo menos 2 pombos em uma casa. Como há somente
4 casas, ainda que eles tentem se espalhar, o 5º pombo não terá alternativa e terá que ficar com algum outro
pombo.

Também podemos encontrar o número de pombos necessários para garantir que haja pelo menos 3 pombos
em uma mesma casa. No pior cenário, eles ficarão todos espalhados com 2 pombos por casa, antes de
termos 3 pombos em uma mesma casa.

        Receita Federal (Analista Tributário) Estatística                                                14
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Para que haja 2 pombos em cada uma das 4 casas, serão necessários 2 x 4 = 8 pombos. Portanto, são
necessários 8 + 1 = 9 pombos, para garantir que haverá pelo menos 3 pombos em uma casa.

Podemos mencionar outros exemplos, mais próximos à nossa realidade. Por exemplo, qual é o menor
número de pessoas necessário para garantir que pelo menos 2 pessoas façam aniversário no mesmo mês?

Para garantir isso, precisamos pensar no pior cenário: aquele que em que os aniversariantes ficam todos
“espalhados”.

Assim, em um grupo de 12 pessoas, todas fariam aniversário em meses distintos. Porém, em um grupo de
13 pessoas, como há somente 12 meses, então necessariamente alguém fará aniversário no mesmo mês que
outra pessoa. Portanto, são necessárias 13 pessoas para garantir que pelo menos 2 façam aniversário no
mesmo mês.

                                 Janeiro        Fevereiro     Março         Abril      Maio        Junho

                                  Julho          Agosto     Setembro       Outubro   Novembro   Dezembro

Por que a pergunta é pelo menor número de pessoas?

Note que, se houver mais do que 13 pessoas (ou seja, 14, 15,...), também poderemos garantir que pelo
menos 2 pessoas farão aniversário no mesmo mês. Por isso, a questão se interessa pelo menor número de
pessoas, para o qual temos a garantia desejada.

(FCC/2017 – Analista Executivo da Secretaria de Gestão/MA) No setor administrativo de uma empresa, há
quatro tipos de cargos: estagiários, técnicos, gerentes e diretores. Alguns funcionários desse setor comporão
um grupo que será transferido para o setor financeiro da empresa. Compondo-se o grupo com funcionários
escolhidos ao acaso, o número mínimo de funcionários que deverá compor o grupo para que se tenha certeza
de que nele haverá quatro funcionários de um mesmo cargo é igual a
a) 17
b) 15
c) 13


        Receita Federal (Analista Tributário) Estatística                                                  15
        www.estrategiaconcursos.com.br                                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 16
e) 14
Comentários:
O pior cenário (ou seja, o cenário que exige o maior número de funcionários para garantir que 4 terão o
mesmo cargo) é aquele em que os funcionários são todos de cargos diferentes. Assim, haverá 3 funcionários
para cada um dos 4 tipos de cargo, antes de haver 4 funcionários de algum cargo.
Ou seja, haverá 3 x 4 = 12 funcionários distribuídos por todos os cargos, em 3 funcionários por cargo. Com o
13º funcionário, necessariamente haverá 4 funcionários para algum cargo.
Gabarito: C


(CESPE/2013 – TCE-RO) Considerando que, em uma pesquisa de rua, cada entrevistado responda sim ou não
a cada uma de dez perguntas feitas pelos entrevistadores, julgue o item seguinte.
                                                            ==219a34==

Será necessário entrevistar mais de mil pessoas para se garantir que duas pessoas respondam igualmente a
todas as perguntas.
Comentários:
Para garantir que duas pessoas respondam igualmente a todas as perguntas, é necessário entrevistar um
número de pessoas maior que o número de maneiras diferentes de responder ao questionário. Ou seja, essa
questão combina o princípio dos pombos com o princípio multiplicativo.
Vamos representar as possibilidades de resposta para as 10 perguntas conforme abaixo:

Sabemos que há 2 respostas distintas possíveis para cada pergunta:

Pelo princípio multiplicativo, o número de maneiras distintas de responder às 10 perguntas é:
                             2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 210 = 1024
Assim, precisamos entrevistar 1.025 pessoas para garantir que haverá pelo menos duas respostas iguais, ou
seja, mais de 1.000 pessoas.
Gabarito: Certo.

Contagem de Jogos

Algumas questões pedem para você calcular o número de jogos em determinado torneio. Cada jogo reúne
2 jogadores, sendo o perdedor eliminado e o vencedor mantido para a próxima fase.

O torneio se inicia com 𝑁 jogadores e termina com um único campeão, ou seja, devem ser eliminados 𝑁 − 1
jogadores. Considerando que cada jogo elimina 1 jogador, então o número de jogos do torneio é 𝑵 − 𝟏.

        Receita Federal (Analista Tributário) Estatística                                                16
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Vamos supor que o torneio se inicie com 10 jogadores. Sabemos que deve haver 10 - 1 = 9 jogos, mas vamos
entender como eles seriam distribuídos ao longo do torneio.

Na primeira fase, o número de jogos (com 2 jogadores cada) é igual à metade do número total de jogadores,
ou seja, igual a 5. Na segunda fase, teremos os 5 vencedores da primeira fase. Como há um número ímpar
de jogadores, deixamos um de fora e teremos 2 jogos entre os outros 4 jogadores. Na terceira fase, temos
os 2 vencedores da segunda fase, mais o jogador que não competiu, totalizando 3 jogadores. Novamente,
há um número ímpar de jogadores, logo, deixamos um de fora e teremos 1 jogo entre os outros 2 jogadores.
Na última fase, teremos o vencedor da terceira fase, mais o jogador que não competiu, totalizando 2
jogadores. Assim, teremos mais 1 jogo para definir o campeão do torneio.

O número de jogadores e o número de jogos em cada fase da competição estão indicados na tabela a seguir:

                              Torneio c/ 10       1ª fase   2ª fase   3ª fase   4ª fase
                             nº de jogadores        10         5         3         2
                               nº de jogos           5         2         1         1

Portanto, o número total de jogos é:

                                          𝑛(𝑗𝑜𝑔𝑜𝑠) = 5 + 2 + 1 + 1 = 9

(FGV/2025 – TRT/24ª Região) Na distante galáxia de XPTO3 será disputado o torneio de YZW. Cada jogo do
torneio reúne dois contendores. O vencedor segue para a próxima etapa, o perdedor é eliminado. O torneio
segue até que o campeão vença a última contenda e, portanto, o torneio. Se 23.987 contendores participarão
do torneio, o número total de jogos que será disputado é igual a
a) 18.560
b) 23.986
c) 383.792
d) 767.584
e) 1.535.168
Comentários:
Cada jogo elimina exatamente 1 competidor. Se inicialmente temos 23.987 competidores e o torneio segue
até que reste 1 competidor, então deve haver 23.987 - 1 = 23.986 competidores eliminados. Para isso, são
necessários 23.986 jogos.
Gabarito: B

        Receita Federal (Analista Tributário) Estatística                                              17
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                       FATORIAL DE UM NÚMERO NATURAL
Para resolvermos diversas questões de análise combinatória, utilizamos o chamado fatorial.

O fatorial de um número natural (0, 1, 2, 3, ...) é representado como:

                                                            𝒏!

        O fatorial representa o produto de todos os números inteiros positivos menores ou iguais
        àquele número, conforme indicado a seguir:

                                    𝒏! = 𝒏 × (𝒏 − 𝟏) × (𝒏 − 𝟐) × … × 𝟐 × 𝟏

Por exemplo:

                                                      2! = 2 x 1 = 2

                                                    3! = 3 x 2 x 1 = 6

                                                 4! = 4 x 3 x 2 x 1 = 24

                                              5! = 5 x 4 x 3 x 2 x 1 = 120

                                            6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

Note que podemos escrever o fatorial de um número natural em função do fatorial de qualquer outro
número natural menor, por exemplo:

                                               4! = 4 x 3 x 2 x 1 = 4 x 3!
                                                           3!

                                         7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 7 x 6!
                                                           6!

                                       7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 7 x 6 x 5!
                                                           5!

                           10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 10 x 9 x 8 x 7 x 6!
                                                           6!

        Receita Federal (Analista Tributário) Estatística                                          18
        www.estrategiaconcursos.com.br                                                             183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Esse tipo de mudança facilita o cálculo das divisões entre fatoriais (muito comuns em combinatória):

                          6! 6 × 5 × 4 × 3! 6 × 5 × 4 × 3!
                             =             =               = 6 × 5 × 4 = 120
                          3!       3!             3!

                       10! 10 × 9 × 8 × 7! 10 × 9 × 8 × 7!
                           =              =                = 10 × 9 × 8 = 720
                        7!       7!              7!

                          15! 15 × 14 × 13! 15 × 14 × 13!
                              =            =              = 15 × 14 = 210
                          13!      13!           13!

        Nesses casos, aplicamos o fatorial antes de efetuar a divisão. Quando for necessário
        realizar a divisão antes, utilizaremos o parêntesis. Por exemplo:

                                                         6!      6
                                                              ≠ (3) !
                                                         3!

             6!                                             6!   6×5×4×3!                     6
        Em 3!, calculamos os fatoriais antes: 3! =              = 6 × 5 × 4 = 120; já em (3) !,
                                                         3!
        efetuamos a divisão entre parêntesis, antes do fatorial:

                                                 6
                                               (3) ! = 2! = 2 × 1 = 2

        Analogamente, em um produto, temos: 2 × 4! ≠ (2 × 4)!

        Em 2 × 4!, calculamos o fatorial de 4 antes da multiplicação:

                                         2 × 4! = 2 × 4 × 3 × 2 × 1 = 48

        Em (2 × 4)!, multiplicamos os fatores, antes de aplicar o fatorial:

                           (2 × 4)! = 8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40.320

        O mesmo vale para as demais operações:

                                                     2 + 4! ≠ (2 + 4)!

        Pois 2 + 4! = 2 + 4 × 3 × 2 × 1 = 26; e (2 + 4)! = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.

                                                     8 − 3! ≠ (8 − 3)!

        Pois 8 − 3! = 8 − 3 × 2 × 1 = 2; e (8 − 3)! = 5! = 5 × 4 × 3 × 2 × 1 = 120.

        Receita Federal (Analista Tributário) Estatística                                              19
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Agora, vejamos dois casos especiais do fatorial. O fatorial de 1 pode ser entendido pela própria definição de
fatorial. Como não há número inteiro positivo menor do que 1, apenas igual, então esse será o único fator:

                                                                     1! = 1

O segundo caso especial é 0! Você pode considerar que o seguinte resultado é uma convenção:

                                                                     0! = 1

                                                              ==219a34==

           Para entender o porquê dos resultados desses casos especiais, devemos observar que o
           fatorial de um número n pode ser escrito como o fatorial do número seguinte, (n + 1)!,
           dividido por esse número seguinte, n + 1.

           Por exemplo, 4! pode ser representado como 5! dividido por 5.

                                               5!    5×4×3×2×1
                                         4! = 5 =                               = 4×3×2×1
                                                          5

           Similarmente, o fatorial de 1 pode ser representado como:

                                                              2!                2×1
                                                     1! = 2 =                         =1
                                                                                 2

           E o fatorial de 0 como:

                                                                           1!    1
                                                      0! = 1 = 1 = 1

(2019 – Prefeitura de Jacutinga/MG) O fatorial de um número é extremamente utilizado na análise
combinatória. Dessa forma, analise as proposições a seguir:
I. O fatorial n! de um número n ∈ ℕ é dado por n! = n × (n − 1) × (n − 2) … 3 × 2 × 1;
II. 0! = 1;
III. 1! = 0.
Está(ão) CORRETA(S) a(s) proposição(ões):


          Receita Federal (Analista Tributário) Estatística                                               20
          www.estrategiaconcursos.com.br                                                                 183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

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

          Receita Federal (Analista Tributário) Estatística                                             21
          www.estrategiaconcursos.com.br                                                                183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                              PERMUTAÇÃO
Informalmente, podemos dizer que permutar significa trocar de lugar.

Ao trocar elementos de lugar, a ordem desses elementos se modifica. Por isso, podemos dizer que as
técnicas de permutação permitem calcular as diferentes possibilidades de se ordenar elementos.

Permutação Simples

Na permutação simples, os elementos a serem ordenados são todos distintos entre si.

Digamos que 3 alunos (Ana, Beto e Caio), de um grupo de estudo, serão avaliados e, em seguida, ranqueados
de acordo com o resultado da sua avaliação. Supondo que não há empates, de quantas formas esses alunos
podem ser ranqueados?

Como o exemplo é pequeno poderíamos relacionar e contar todas as possibilidades, mas vamos
experimentar uma outra forma de resolver: encontrando o número de possibilidades para cada posição:

                                                  1º        2º     3º

Quais são os alunos que podem ficar em primeiro lugar? Qualquer um deles (Ana, Beto ou Caio) pode ficar
em primeiro lugar. Portanto, temos 3 possibilidades para o primeiro lugar.

E para o segundo lugar? Bem, sabendo que alguém ficará em primeiro lugar, restarão 2 possibilidades para
o segundo colocado.

E para o terceiro lugar, sabendo que alguém ficará em primeiro lugar e outro ficará em segundo lugar, restará
apenas uma possibilidade para o terceiro lugar.

                                                  3         2      1
                                                  1º        2º     3º

Como são eventos concomitantes, pois alguém ficará em primeiro lugar, outra pessoa ficará em segundo E
outra em terceiro, devemos multiplicar as possibilidades de cada evento, pelo princípio multiplicativo:

                                                        3x2x1

Poderíamos ter começado o raciocínio por qualquer posição, que o resultado seria o mesmo.

Como assim “sobrarão” 2 possibilidades para o 2º colocado e 1 possibilidade para o 3º colocado?

        Receita Federal (Analista Tributário) Estatística                                                 22
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

        Para a 1ª posição, todos os 3 alunos estão disponíveis:


                                                  3
                                                  1º        2º       3º

        Para cada uma dessas 3 possibilidades, teremos ordenações diferentes, dependendo do 2º
        e 3º lugares. Por exemplo, mantendo Ana em 1º lugar, temos Ana, Beto e Caio ou Ana, Caio
        e Beto.

        Sabendo que não é possível que o mesmo aluno ocupe mais de uma posição, então há
        apenas 2 possibilidades para a 2ª posição, uma vez que um dos alunos terá ocupado a 1ª.

        Por isso, dizemos que o aluno da 1ª posição “já foi escolhido” e assim sobrarão apenas 2
        alunos para a 2ª posição:
                                                 3          2
                                                 1º         2º       3º

        Da mesma forma, só haverá 1 aluno que não terá ocupado nem a primeira nem a segunda
        posição, logo ele irá ocupar a terceira posição. Por isso, dizemos que, “após a escolha” do
        1º e do 2º colocados, sobrará apenas 1 aluno para a 3ª posição:


                                                 3          2         1
                                                 1º         2º       3º

        Por fim, multiplicamos todas essas possibilidades (princípio multiplicativo) para encontrar
        a quantidade de maneiras de ordenar todos os 3 elementos.

E se houvesse 4 alunos? Quais seriam as possibilidades de ordenação? Nesse caso, teríamos 4 possibilidades
para o primeiro lugar; 3 para o segundo lugar; 2 para o terceiro e 1 para o quarto:

                                                       4x3x2x1

E para 10 alunos? Teríamos 10 possibilidades para o primeiro lugar, 9 para o segundo, depois 8, depois 7...
até sobrar 1 possibilidade para o décimo lugar:

                                         10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1


        Receita Federal (Analista Tributário) Estatística                                               23
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Assim, a posição seguinte terá sempre uma possibilidade a menos do que a posição anterior.

Para n alunos, temos:

                                           n x (n – 1) x (n – 2) x ... x 3 x 2 x 1

Lembrou de algo? Essa é a fórmula do fatorial!

         Portanto, a permutação simples de n elementos distintos, que representamos como 𝑷𝒏 ,
         que corresponde ao número de possibilidades de ordenar n elementos distintos, é:

                                                         𝑷𝒏 = 𝒏!

Reforçando, a permutação simples pode ser utilizada para calcular todas as possibilidades de se reordenar
elementos, sejam letras de uma sigla (formando anagramas distintos), algarismos em um número (formando
números distintos), etc., desde que os elementos sejam todos distintos.

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

         Receita Federal (Analista Tributário) Estatística                                            24
         www.estrategiaconcursos.com.br                                                               183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(VUNESP/2018 – PM/SP) Em um armário, há 5 prateleiras e será preciso colocar 5 caixas, de cores distintas,
cada uma em uma prateleira desse armário, sem que haja uma ordem específica. O número total de maneiras
de colocar essas caixas nesse armário é
a) 25.
b) 60.
c) 95.
d) 120.
e) 165.
Comentários:
Por se tratar de caixas distintas, a serem alocadas em determinada ordem, temos uma permutação de 5
elementos:
                                         𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120
Gabarito: D.


(CESPE 2018/EBSERH) Julgue o próximo item, a respeito de contagem.
Se a enfermaria de um hospital possuir cinco leitos desocupados e se cinco pacientes forem ocupar esses
leitos, então haverá mais de 100 formas diferentes de fazer essa ocupação.
Comentários:
Considerando que temos 5 leitos para serem ocupados por 5 pacientes, temos uma permutação de 5
elementos:
                                         𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120
Logo, há mais de 100 formas de fazer essa ocupação.
Gabarito: Certo.


(CESPE 2016/CBM-DF) Para atender uma grave ocorrência, o comando do corpo de bombeiros acionou 15
homens: 3 bombeiros militares condutores de viatura e 12 praças combatentes, que se deslocaram em três
viaturas: um caminhão e duas caminhonetes. Cada veículo transporta até 5 pessoas, todas sentadas,
incluindo o motorista, e somente os condutores de viatura podem dirigir uma viatura. Com relação a essa
situação, julgue o item seguinte.
A quantidade de maneiras distintas de se distribuir os condutores de viatura para dirigir os veículos é superior
a 5.
Comentários:
Considerando que há 3 condutores para 3 veículos, a quantidade de maneiras de organizá-los corresponde
a uma permutação de 3 elementos:
                                               𝑃3 = 3! = 3 × 2 × 1 = 6
Logo, a quantidade de maneiras é superior a 5.
Gabarito: Certo.


          Receita Federal (Analista Tributário) Estatística                                                  25
          www.estrategiaconcursos.com.br                                                                    183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Permutação Simples com Restrição

É possível que algumas questões de permutações imponham determinadas restrições. Nesses casos, nem
todos os elementos poderão permutar livremente, o que exige mais atenção para resolver a questão.

Por exemplo, vamos considerar que há 8 elementos distintos a serem ordenados, por exemplo, os algarismos
{1, 2, 3, 4, 5, 6, 7, 8}. Vamos representar as opções de ordenação com os espaços abaixo.

Suponha que o número 1 esteja fixo na primeira posição e o número 8, na oitava posição:


                             1                                                   8


Sendo assim, restarão os algarismos 2 a 7 (ou seja, um total de 6 algarismos) para serem ordenados nos 6
espaços restantes. Dessa forma, teremos uma permutação de 6 elementos em 6 posições:

                                         P6 = 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

Poderíamos ter fixado quaisquer 2 algarismos em quaisquer 2 posições, que continuaríamos com a
permutação dos 6 algarismos restantes, nos 6 espaços restantes. Portanto, o número de possibilidades de
ordená-los seria o mesmo.

        De modo geral, havendo n elementos, dos quais p estejam fixos em determinadas
        posições, fazemos a permutação de n – p elementos:

                                                     Pn–p = (n – p)!

Um exemplo sutilmente diferente seria se esses dois algarismos fossem posicionados nos extremos, mas
sem fixar qual irá ocupar a primeira posição e qual irá ocupar a última posição.

Assim, poderíamos ter o número 1 na primeira posição e o número 8 na oitava; ou o número 8 na primeira
posição e o número 1 na oitava:


                             1                                                   8


                             8                                                   1

        Receita Federal (Analista Tributário) Estatística                                            26
        www.estrategiaconcursos.com.br                                                               183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Nesse caso, para cada uma das 720 possibilidades de permutar os algarismos de 2 a 7 nas posições
intermediárias, calculadas anteriormente, há 2 possibilidades distintas de posicionar os extremos.

Pelo princípio multiplicativo, devemos multiplicar as possibilidades desses dois eventos:

                                                2 x P6 = 2 x 720 = 1440

Na verdade, essas 2 possibilidades de alocar esses 2 algarismos, 1 e 8, nas 2 posições extremas
correspondem à permutação desses 2 elementos.

Assim, podemos representar o número de maneiras de se ordenar os 8 algarismos, nessas condições, como:

                                                            P2 x P6

Em outras palavras, podemos tratar como duas permutações em separado: uma com os 2 elementos que
ocuparão as posições extremas; e a outra com os 6 elementos que ocuparão as posições não extremas.

E para ordenar todos os 8 elementos, multiplicamos esses resultados (princípio multiplicativo).

Com isso, podemos resolver outros problemas que indiquem determinadas posições a certos elementos,
sem fixar a posição específica de cada um.

Por exemplo, vamos supor que os 3 primeiros algarismos tenham que ocupar as 3 primeiras posições, em
qualquer ordem; e os demais algarismos, as demais posições, também em qualquer ordem:

                                  1, 2 e 3                                4, 5, 6, 7 e 8

Nesse caso, temos a permutação de 3 elementos nas 3 primeiras posições e de 5 elementos nas demais
posições.

Pelo princípio multiplicativo, o número de ordenações possíveis é:

                                 P3 x P5 = 3! x 5! = 3 x 2 x 1 x 5 x 4 x 3 x 2 x 1 = 720

Agora, vamos supor que os algarismos ímpares tenham que ocupar posições ímpares e os algarismos pares,
posições pares, como ilustrado abaixo:


                             I        P        I        P             I          P         I   P


Também vamos resolver esse caso com 2 permutações em separado.


        Receita Federal (Analista Tributário) Estatística                                          27
        www.estrategiaconcursos.com.br                                                             183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Em relação aos ímpares, temos 4 algarismos para 4 posições, logo, temos uma permutação de 4 elementos:

                                               P4 = 4! = 4 x 3 x 2 x 1 = 24

Em relação aos pares, temos 4 algarismos para 4 posições, logo, temos outra permutação de 4 elementos:

                                               P4 = 4! = 4 x 3 x 2 x 1 = 24

Pelo princípio multiplicativo, o número de maneiras de ordenar todos esses 8 algarismos é:

                                                      24 x 24 = 576

         Em geral, havendo n elementos, dos quais p estejam designados a determinadas posições,
         mas sem fixar a posição específica de cada um, fazemos a permutação de n – p elementos
         e multiplicamos pela permutação de p elementos:

                                                 Pn–p x Pp = (n – p)! x p!

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


         Receita Federal (Analista Tributário) Estatística                                          28
         www.estrategiaconcursos.com.br                                                             183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(CESPE 2018/BNB) Em um navio, serão transportados 10 animais, todos de espécies diferentes. Antes de
serem colocados no navio, os animais deverão ser organizados em uma fila. Entre esses 10 animais, há um
camelo, um elefante e um leão. A respeito da organização dessa fila, julgue o item subsequente.
Existem 8! maneiras distintas de organizar essa fila de forma que o camelo fique na primeira posição e o
elefante fique na sexta posição.
Comentários:
A questão pede para organizarmos uma fila de 10 animais, de forma que o camelo (C) fique na primeira
posição e o elefante (E), na sexta:

Como esses elementos estão fixos em posições específicas, basta reordenarmos os demais elementos.
Logo, o número de maneira de organizarmos essa fila corresponde à permutação de 10 – 2 = 8 elementos:
                                                        𝑃8 = 8!
Gabarito: Certo.


(CESPE 2018/BNB) Em um navio, serão transportados 10 animais, todos de espécies diferentes. Antes de
serem colocados no navio, os animais deverão ser organizados em uma fila. Entre esses 10 animais, há um
camelo, um elefante e um leão.
A respeito da organização dessa fila, julgue o item subsequente.
Existem 3 × 7! maneiras distintas de organizar essa fila de forma que o elefante, o camelo e o leão fiquem
nas três primeiras posições, não necessariamente nessa ordem.
Comentários:
Agora, desejamos organizar a fila de forma que os 3 animais (Elefante, Camelo e Leão) fiquem nas 3 primeiras
posições, em qualquer ordem. Consequentemente, os outros 10 – 3 = 7 animais ocuparão as outras 7
posições, em qualquer ordem:

                           Elefante, Camelo, Leão            Outros 7 animais
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


        Receita Federal (Analista Tributário) Estatística                                                   29
        www.estrategiaconcursos.com.br                                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Vejamos mais uma ferramenta para resolver problemas de permutação simples com restrição.

Vamos supor que os algarismos 1 e 2 tenham que ficar sempre juntos, nessa ordem.

Nesse caso, tratamos esses 2 algarismos como elemento único, que podemos chamar de A. Assim, em vez
de 8 elementos {1, 2, 3, 4, 5, 6, 7 e 8}, ordenaremos apenas 7 elementos {A, 3, 4, 5, 6, 7 e 8}:

                                      P7 = 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5.040

Portanto, a quantidade de maneiras de ordenar 8 elementos, de modo que 2 estejam sempre juntos em uma
determinada ordem, corresponde à permutação de 7 elementos.

Se houvesse 3 elementos juntos em determinada ordem, {1, 2 e 3}, chamaríamos os 3 elementos de A, e
calcularíamos a permutação dos outros 5 elementos acrescido do elemento A, o que corresponde à
permutação de 6 elementos {A, 4, 5, 6, 7 e 8}.

        De modo geral, havendo n elementos, dos quais j devam ficar juntos em determinada
        ordem, fazemos a permutação de n – j + 1 elementos:

                                                   Pn–j+1 = (n – j + 1)!

E se os elementos tivessem que ficar juntos, mas em qualquer ordem?

Nesse caso, o início da solução é similar, isto é, chamamos esses elementos de um único elemento, A, e
fazemos a permutação do elemento A com os demais elementos.

Por exemplo, se os algarismos {1, 2 e 3} tivessem que ficar juntos, mas em qualquer ordem, dentre os 8
algarismos, faríamos a permutação dos 6 elementos {A, 4, 5, 6, 7 e 8}:

                                         P6 = 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

Porém, para cada uma dessas 720 possibilidades de ordenar os elementos {A, 4, 5, 6, 7 e 8}, os algarismos
{1, 2 e 3} pode aparecer como:

                 ... 1 2 3 ...                     ... 1 3 2 ...                    ... 2 1 3 ...

                 ... 2 3 1 ...                     ... 3 1 2 ...                    ... 3 2 1 ...

Em outras palavras, para cada uma das possibilidades que calculamos anteriormente, temos diferentes
formas de ordenar os 3 elementos.

Como calculamos as diferentes formas de ordenar 3 elementos? Pela permutação de 3 elementos!


        Receita Federal (Analista Tributário) Estatística                                             30
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Logo, para calcular o número de maneiras de organizar todos os 8 elementos nessas condições, devemos
multiplicar o resultado anterior pela permutação de 3 elementos (princípio multiplicativo):

                                          P6 x P3 = 6! x 3! = 720 x 6 = 4320

        De modo geral, havendo n elementos, dos quais j elementos devem ficar juntos em
        qualquer ordem, fazemos a permutação de n – j + 1 elementos e multiplicamos pela
        permutação de j elementos:

                                              Pn–j+1 x Pj = (n – j + 1)! x j!

        Na permutação simples com restrição, podemos (i) designar posições para determinados
        elementos ou (ii) determinar elementos a permanecerem juntos.

        i) Quando designamos posições, devemos permutar os demais elementos.

        i.a) Havendo p elementos fixos em determinadas posições, dentre n elementos no total,
        devemos permutar n – p elementos:

                                                     Pn-p = (n – p)!

        i.b) Caso os p elementos possam ser reordenados dentre as posições designadas, devemos
        multiplicar o resultado anterior pela permutação de p elementos:

                                                Pn-p x Pp = (n – p)! x p!

        ii) Quando determinamos elementos devem permanecer juntos, devemos considerá-los
        como elementos único e permutar esse novo elemento junto aos demais.

        ii.a) Havendo j elementos que deverão permanecer juntos em determinada ordem, dentre
        n elementos no total, devemos permutar os demais n – j elementos acrescidos de 1
        unidade, a qual corresponde ao conjunto dos j elementos:

                                                   Pn-j+1 = (n – j + 1)!

        i.b) Se os j elementos, que deverão permanecer juntos, puderem ser reordenados entre si,
        devemos multiplicar o resultado anterior pela permutação de j elementos:

                                              Pn-j+1 x Pj = (n – j + 1)! x j!


        Receita Federal (Analista Tributário) Estatística                                          31
        www.estrategiaconcursos.com.br                                                             183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

(FGV/2017 – Prefeitura de Salvador/BA) Três casais vão ocupar seis cadeiras consecutivas de uma fila do
cinema, e os casais não querem sentar separados. Assinale a opção que indica o número de maneiras
diferentes em que esses três casais podem ocupar as seis cadeiras.
a) 6.
b) 12.
c) 24.
d) 36.
e) 48.
Comentários:
Primeiro, vamos tratar cada casal como elemento único. Assim, temos a permutação de 3 elementos:
                                              𝑃3 = 3! = 3 × 2 × 1 = 6
Uma vez definida a ordem entre os casais, é necessário que cada casal decida a sua ordem.
Assim, para cada uma dessas 6 possibilidades de ordem entre os casais, há 𝑃2 = 2 possibilidades de cada um
dos três casais se organizarem:
                                                    6 x 2 x 2 x 2 = 48
Gabarito: E


(CESPE 2018/BNB) Em um navio, serão transportados 10 animais, todos de espécies diferentes. Antes de
serem colocados no navio, os animais deverão ser organizados em uma fila. Entre esses 10 animais, há um
camelo, um elefante e um leão.
A respeito da organização dessa fila, julgue o item subsequente.
Existem 7 × 7! maneiras distintas de organizar essa fila de forma que o elefante, o camelo e o leão estejam
sempre juntos, mantendo-se a seguinte ordem: leão na frente do camelo e camelo na frente do elefante.
Comentários:
Para organizar uma fila de 10 animais, de modo que o leão, o camelo e o elefante apareçam sempre nessa
ordem, podemos tratá-lo como elemento único.
Assim, o número de formas de organizar os outros 10 – 3 = 7 animais e mais esse trio corresponde a uma
permutação de 8 elementos:
                                                   𝑃8 = 8! = 8 × 7!
Esse resultado é diferente de 7 x 7!, descrito no item.
Gabarito: Errado.

         Receita Federal (Analista Tributário) Estatística                                              32
         www.estrategiaconcursos.com.br                                                                 183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

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

Permutação com Repetição

Na permutação simples, todos os elementos são distintos.

Por exemplo, se houver 3 elementos {A, B, C}, há P3 = 3! = 3 x 2 x 1 = 6 possibilidades de ordená-los. São elas:

             i) A B C          ii) A C B          iii) B A C      iv) B C A      v) C A B   vi) C B A

Agora, vamos supor que, em vez C, haja um segundo elemento A. Vamos escrever novamente as 6
possibilidades descritas acima, porém substituindo C por um segundo A:

             I) A B A         II) A A B        III) B A A         IV) B A A      V) A A B   VI) A B A

Agora, a ordem descrita em I é igual à ordem em VI; a ordem em II é igual à ordem em V; e a ordem em III é
igual à ordem em IV. Portanto, temos apenas 3 possibilidades distintas de ordenar os elementos {A, A, B}:

                                       I) A B A           II) A A B      III) B A A

Ou seja, quando há elementos repetidos, o número de possibilidades distintas de ordenação diminui.

Mas, por quê? O que aconteceu?

Bem, a redução ocorreu porque na opção i da primeira permutação, os elementos A e C estavam invertidos
em relação à opção vi, enquanto todo o restante se manteve igual. Por isso, na segunda permutação, essas
opções se tornaram uma única opção. O mesmo ocorreu com as opções ii e v; e com as opções iii e iv.


        Receita Federal (Analista Tributário) Estatística                                                    33
        www.estrategiaconcursos.com.br                                                                      183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Em outras palavras, precisamos dividir o resultado da primeira permutação pelo número de vezes em que A
e C trocam de posição.

E como calculamos a quantidade de maneiras em que elementos trocam de posição? Pela permutação!

Portanto, na permutação com repetição, dividimos a permutação simples pela permutação dos elementos
repetidos. Indicamos essa permutação de 3 elementos com repetição de 2 elementos por 𝑃𝟑𝟐 :

                                              𝑷𝟑 𝟑! 3 × 2! 3 × 2!
                                      𝑃𝟑𝟐 =     = =       =       =3
                                              𝑷𝟐 𝟐!   2!     2!

Assim, se tivéssemos 5 elementos distintos para permutar, teríamos P5 = 5!. Havendo 3 elementos iguais,
dentre esses 5, dividimos esse resultado pela permutação dos 3 elementos P3 = 3!:

                                   𝑷𝟓 𝟓! 5 × 4 × 𝟑! 5 × 4 × 3!
                           𝑃𝟓𝟑 =     = =           =           = 5 × 4 = 20
                                   𝑷𝟑 𝟑!     𝟑!         3!

E se além de um elemento repetido, tivéssemos outro elemento repetido? Por exemplo, {A, A, B, B, B, C, D}.

Vamos pensar em etapas: primeiro calculamos a permutação simples dos 7 elementos, como se fossem
distintos: P7 = 7!. Em seguida, consideramos que o elemento A está repetido 2 vezes e dividimos pela
permutação de 2 elementos: P2 = 2!. Por fim, consideramos que o elemento B está repetido 3 vezes e
dividimos novamente pela permutação de 3 elementos: P3 = 3!:

                                                       𝑷𝟕       𝟕!
                                              𝑷𝟐,𝟑
                                               𝟕 =          =
                                                     𝑷𝟐 × 𝑷𝟑 𝟐! × 𝟑!

                           7 × 6 × 5 × 4 × 𝟑! 7 × 6 × 5 × 4 × 3!
                 𝑃72,3 =                     =                   = 7 × 3 × 5 × 4 = 420
                                 2 × 𝟑!             2 × 3!

Ou seja, na permutação com mais de um elemento repetido, dividimos a permutação simples pelas
permutações dos elementos repetidos.

        De modo geral, sendo 𝒏 elementos totais, com 𝒎𝟏 , 𝒎𝟐 , … , 𝒎𝒌 elementos distintos
        repetidos, a permutação desses elementos é dada por:

                                              𝒎 ,𝒎𝟐 ,…,𝒎𝒌          𝒏!
                                            𝑷𝒏 𝟏            = 𝒎 !×𝒎 !×…×𝒎 !
                                                               𝟏   𝟐       𝒌

        Receita Federal (Analista Tributário) Estatística                                              34
        www.estrategiaconcursos.com.br                                                                 183

                                      


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


(FCC/2015 – Professor da Secretaria de Educação/ES) O número de anagramas que podem ser obtidos
utilizando as letras da palavra VITÓRIA, e que terminam com uma consoante é igual a


          Receita Federal (Analista Tributário) Estatística                                              35
          www.estrategiaconcursos.com.br                                                                 183

                                        


---

      Equipe Exatas Estratégia Concursos
      Aula 05

a) 2520
b) 1080
c) 840
d) 5040
e) 1980
Comentários:
Na palavra VITÓRIA, há 7 letras:
                    3
                          1            2           3            4         5     6      7         8
i)         Para terminar com uma consoante, há 3 possibilidades para essa posição, todas distintas:

                          3                                                            3

                          1            2           3            4         5     6      7         8
ii)        As outras 6 letras podem permutar livremente pelas 6 posições restantes. Considerando que dessas
           6, há 2 elementos repetidos (letra I), temos:
                                           𝟔!
                                             𝑃𝟔𝟐 =
                                              = 6 × 5 × 4 × 3 = 360
                                           𝟐!
Pelo princípio multiplicativo, o número de possibilidades, no total, é:
                                                        3 x 360 = 1080
Gabarito: B.

Permutação Circular

Na permutação circular, considera-se que os elementos estão dispostos em um círculo.

No círculo, considera-se que não há posições fixas (primeiro lugar, segundo, terceiro, ..., ou tampouco
referências como acima, abaixo, à direita ou à esquerda).

A figura a seguir representa a mesma disposição daquela indicada na figura acima, como se tivéssemos
girado o círculo 180º, mantendo todos os elementos na mesma posição:

            Receita Federal (Analista Tributário) Estatística                                           36
            www.estrategiaconcursos.com.br                                                              183

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 05

A disposição varia somente com a mudança da posição de algum elemento em relação aos demais. A figura
abaixo representa uma disposição diferente, haja vista a troca dos elementos 2 e 3.

                                                            ==219a34==

Para calcular a quantidade de disposições distintas, podemos fixar (qualquer) um dos elementos, por
exemplo, o elemento 1, em qualquer posição:

Agora sim, as posições de todos os outros elementos irão importar porque elas serão relativas ao elemento
1 fixado. Portanto, calculamos a permutação simples para os demais elementos (no caso, os 7):

                                 𝑃7 = 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5.040

        Em geral, como fixamos um dos elementos, a permutação circular de 𝒏 elementos,
        indicada por 𝑷𝑪𝒏 , é:

                                                   𝑷𝑪𝒏 = (𝒏 − 𝟏)!

        Receita Federal (Analista Tributário) Estatística                                             37
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Permutação Circular com Restrições

É possível que uma permutação circular apresente restrições.

Por exemplo, suponha que haja 4 meninos (O) e 4 meninas (A) para se sentarem a uma mesa circular, de
forma que todo menino esteja entre duas meninas (e, portanto, toda menina esteja entre dois meninos),
como indicado abaixo.

Nesse tipo de situação, resolvemos o problema em 2 etapas: primeiro sentamos os meninos e, depois, as
meninas (ou vice-versa). Para sentarmos os 4 meninos, há 4 posições possíveis:

Nessa primeira etapa, temos uma permutação circular, em que fixamos a posição de um deles e calculamos
a permutação dos demais:

                                                   𝑃𝐶𝑛 = (𝑛 − 1)!

                                            𝑃𝐶4 = 3! = 3 × 2 × 1 = 6

Na segunda etapa, vamos sentar as 4 meninas. Nesse caso, todas as posições são diferentes, pois já temos
meninos sentados, de modo que a posição de todas as meninas importa.

Assim, temos a permutação simples de 4 elementos:

                                              P4 = 4! = 4 x 3 x 2 x 1 = 24

Portanto, para cada uma das 6 possibilidades de se posicionar os meninos, há 24 possibilidades de posicionar
as meninas. Pelo princípio multiplicativo, devemos multiplicar as possibilidades desses eventos:

                                                      6 x 24 = 144

        Receita Federal (Analista Tributário) Estatística                                                38
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

(2019 – Prefeitura de Ibiaçá/RS) O número máximo de maneiras distintas que um grupo de cinco amigos
pode se sentar ao redor de uma mesa circular para realizar um lanche coletivo é:
a) 120
b) 50
c) 24
d) 12
e) 1
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

         Receita Federal (Analista Tributário) Estatística                                      39
         www.estrategiaconcursos.com.br                                                         183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(2017 – Companhia de Desenvolvimento Habitacional/DF)

Bruno, Carlos, Davi, Eduardo e Flávio são amigos e jantam em uma churrascaria. Na mesa circular em que se
encontram, há 5 cadeiras idênticas, equidistantes duas a duas, e 5 espaços entre cada par de cadeiras para
os garçons servirem carnes: acém; costela; fraldinha; linguiça; e maminha. A figura acima ilustra uma possível
configuração da mesa, com os 5 amigos e as 5 carnes do rodízio. Sabe‐se que as carnes preferidas de Bruno
são costela e acém e Davi prefere fraldinha.
Com base nessa situação hipotética, julgue o item a seguir.
O número possível de configurações da mesa, contando que os 5 amigos estejam sentados e as 5 carnes
estejam entre cada par de cadeiras, é maior que 3.000.
Comentários:
Vamos resolver essa questão em 2 etapas. Primeiro, sentamos os 5 amigos e, em seguida, colocamos as 5
carnes (ou vice-versa).
Para sentar os 5 amigos em uma mesa redonda, podemos sentar um amigo em qualquer posição e, em
seguida, permutar os demais:

                                         𝑃𝐶5 = 4! = 4 × 3 × 2 × 1 = 24

Ao colocarmos as 5 carnes, a posição de todas elas importam, pois elas estarão entre amigos distintos.
Portanto, temos a permutação simples de 5 elementos:

                                       𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120

Portanto, para cada 24 possibilidades de sentar os amigos, há 120 possibilidades de colocar as carnes. Pelo
princípio multiplicativo, as possibilidades desses eventos devem ser multiplicadas:
                                                 24 × 120 = 2.880
Como 2.880 é menor que 3.000, o item está errado.
Gabarito: Errado

        Receita Federal (Analista Tributário) Estatística                                                  40
        www.estrategiaconcursos.com.br                                                                    183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                          OUTROS TIPOS DE PERMUTAÇÃO
Nesta seção, veremos tipos de permutação mais complexos e menos frequentes nas provas de concursos,
quais sejam, a permutação com elementos ordenados e a permutação caótica (ou desarranjo).


Permutação com Elementos Ordenados

Na permutação com elementos ordenados, determinados elementos devem seguir uma ordem definida,
não podendo ser permutados livremente.

Vamos considerar o exemplo do grupo de estudo dos 3 alunos Ana, Beto e Caio. De quantas maneiras,
podemos ordená-los, de acordo com as suas notas (sem empates), sabendo que a nota da Ana foi maior do
que a nota do Beto?

Para responder, vamos primeiro relacionar todas as possibilidades, ignorando essa restrição (sabemos que
são P3 = 3! = 6 possibilidades):

        i) Ana, Beto, Caio                        ii) Ana, Caio, Beto          iii) Beto, Ana, Caio

        iv) Beto, Caio, Ana                       v) Caio, Ana, Beto           vi) Caio, Beto, Ana

Agora vamos eliminar as possibilidades em que Beto está à frente de Ana (ordem incorreta):

        i) Ana, Beto, Caio                        ii) Ana, Caio, Beto          iii) Beto, Ana, Caio

        iv) Beto, Caio, Ana                       v) Caio, Ana, Beto           vi) Caio, Beto, Ana

Claramente, há uma redução das ordenações possíveis, em relação à permutação simples. Mas por quê?

Na permutação simples, se mantivermos constantes as posições dos demais elementos, haverá sempre uma
opção em que Ana fica à frente de Beto e outra em que Beto ficará à frente de Ana. Entretanto, apenas uma
dessas opções atende à restrição de ordenação.

Por esse motivo, precisamos dividir o resultado pelo número de vezes em que os elementos ordenados
trocam de posição.

Já sabemos como fazer isso! Dividindo a permutação simples pela permutação dos elementos ordenados!

Nesse exemplo, dividimos P3 por P2:

                                               𝑃3 3! 3 × 2!
                                                 = =        =3
                                               𝑃2 2!   2!

        Receita Federal (Analista Tributário) Estatística                                             41
        www.estrategiaconcursos.com.br                                                                183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

         De maneira geral, havendo 𝒏 elementos, dos quais 𝒌 elementos devem respeitar uma
         ordem específica, o número de possibilidades de ordená-los é:

                                                         𝑷𝒏      𝒏!
                                                           = 𝒌!
                                                         𝑷   𝒌


Esta fórmula é igual à da permutação com repetição!

         Na permutação com elementos ordenados, os elementos não devem ser necessariamente
         consecutivos.

         No exemplo em que a ordenação foi Ana > Beto, aceitamos a opção ii (Ana, Caio, Beto),
         sem que Ana e Beto estivessem em posições consecutivas.

         Se o problema apontar que dois elementos estejam em determinada ordem e que sejam
         consecutivos, então será necessário tratá-lo como elemento único.

Em geral, havendo 𝒌𝟏 elementos que devam seguir uma ordem e outros 𝒌𝟐 elementos que devam seguir
outra ordem, dividimos a permutação dos 𝒏 elementos pela permutação de 𝒌𝟏 e de 𝒌𝟐 (o que também é
similar à permutação com repetição):
                                                   𝑷𝒏         𝒏!
                                                         =
                                                𝑷𝒌𝟏 × 𝑷𝒌𝟐 𝒌𝟏 ! × 𝒌𝟐 !

Por exemplo, vamos supor a palavra ORDEM. O número de anagramas que podem ser formados de modo
que as letras ORD estejam sempre nesta ordem, assim como as letras EM, corresponde a uma permutação
de 5 elementos, de modo que 3 elementos sigam uma ordem e outros 2 elementos sigam uma ordem:
                                     𝑃5      5!     5 × 4 × 3!
                                         =        =            = 5 × 2 = 10
                                  𝑃3 × 𝑃2 3! × 2!     3! × 2
Para ilustrar, vejamos quais são essas 10 possibilidades:
   i.   ORDEM                                                       vi.   OERMD
  ii.   OREDM                                                      vii.   EORMD
 iii.   OERDM                                                     viii.   OEMRD
 iv.    EORDM                                                       ix.   EOMRD
  v.    OREMD                                                        x.   EMORD
Essa fórmula pode ser estendida para qualquer número de ordenações necessárias.


         Receita Federal (Analista Tributário) Estatística                                       42
         www.estrategiaconcursos.com.br                                                          183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(FCC/2014 – TRF 3ª Região) Álvaro, Benedito, Cléber e outros dois amigos participam de uma corrida. Se
apenas os cinco participaram dessa corrida, o número de possibilidades diferentes de maneira que Álvaro
chegue antes que Benedito e este, por sua vez, chegue antes de Cléber é igual a:
a) 20
b) 24
c) 18
                                                            ==219a34==

d) 22
e) 26
Comentários:
Há n = 5 elementos, dos quais k = 3 elementos estão ordenados: Álvaro > Benedito > Cléber. Portanto, temos:

                                                        𝑃𝑛 𝑛!
                                                          =
                                                        𝑃𝑘 𝑘!

                                               𝑃5 5!
                                                 = = 5 × 4 = 20
                                               𝑃3 3!

Gabarito: A.

Permutação Caótica ou Desarranjo

Na permutação caótica ou desarranjo, considera-se que os elementos estão originalmente ordenados de
certa maneira e que nenhum deles pode retornar para a sua posição original.

Vamos supor que 3 elementos {A, B, C} estejam originalmente posicionados nesta ordem, isto é, A em
primeiro lugar, B em segundo lugar e C em terceiro lugar. Agora, vamos reordenar esses elementos, de modo
que nenhum deles retorne à sua posição original.

Como o elemento A estava em primeiro lugar, ele poderá ocupar o 2º ou o 3º lugar:

    •   A em 2º lugar: __ A __
           o Como o elemento C estava em 3º lugar originalmente, ele terá que ocupar o 1º lugar
           o Assim, resta a 3ª posição para o elemento B

            Possível ordenação: C A B


        Receita Federal (Analista Tributário) Estatística                                               43
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

    •   A em 3º lugar: __ __ A
           o Como o elemento B estava em 2º lugar originalmente, ele terá que ocupar o 1º lugar
           o Assim, resta a 2ª posição para o elemento C

            Possível ordenação: B C A

Portanto, há 2 possibilidades de permutação caótica para esse exemplo.

        Para calcular o número de possibilidades em uma permutação caótica (ou desarranjo) de
        𝒏 elementos, utiliza-se a seguinte fórmula:

                                                    𝟏       𝟏        𝟏        𝟏           (−𝟏)𝒏
                                     𝑫𝒏 = 𝒏! × [ −               +        −        + ⋯+           ]
                                                    𝟎!      𝟏!       𝟐!       𝟑!           𝒏!


Calma! Vamos juntos tentar digerir essa fórmula.

Observe que os denominadores das frações são fatoriais de 0 até 𝒏 (total de elementos) e que os sinais das
frações vão se alternando: quando o denominador é o fatorial de um número par, o sinal é positivo, quando
o denominador é o fatorial de um número ímpar, o sinal é negativo.

Como não sabemos se 𝒏 é par ou ímpar, utilizamos a expressão (−1)𝑛 . Assim, quando 𝒏 é par, (−1)𝑛 = +1,
e o sinal da fração é positivo; quando 𝒏 é ímpar, (−1)𝑛 = −1, e o sinal da fração é negativo. Em outras
palavras, não precisamos calcular uma função exponencial, apenas nos atentar para o sinal de n.

Ademais, considerando que 0! = 1 e que 1! = 1, os resultados da primeira e da segunda fração são:

                                                         1
                                                            =1
                                                         0!

                                                         1
                                                            =1
                                                         1!

Como o sinal da primeira fração é positivo e o da segunda é negativo, essas frações se anulam (1 – 1 = 0).
Logo, podemos retirá-las da fórmula:

                                                   𝟏 𝟏      (−𝟏)𝒏
                                        𝑫𝒏 = 𝒏! × [ − + ⋯ +       ]
                                                   𝟐! 𝟑!      𝒏!

No nosso exemplo, tivemos n = 3, portanto:

                                                𝟏 𝟏   3! 3!
                                  𝐷3 = 3! × [     − ]= − =3−1=2
                                                𝟐! 𝟑! 2! 3!

Que foi o resultado que obtivemos anteriormente.

        Receita Federal (Analista Tributário) Estatística                                              44
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(CESPE/2014 – TER-GO – Adaptada) As prestações de contas das campanhas dos 3 candidatos a governador
de determinado estado foram analisadas por 3 servidores do TRE desse estado. Considerando que um
servidor deve analisar exatamente prestação de contas e que, por coincidência, cada um dos 3 candidatos é
parente de um dos 3 servidores, julgue o item que se segue.
A quantidade de maneiras distintas de se distribuírem as prestações de contas entre os 3 servidores de modo
que nenhum deles analise as contas de um parente é inferior a 5.
Comentários:
O enunciado informa que há 3 servidores que irão analisar as contas de 3 candidatos e que cada candidato
é parente de um servidor:

Para que nenhum candidato seja avaliado pelo seu parente, devemos reordenar os candidatos de modo que
nenhum deles retorne à posição original, indicada acima. Assim, temos uma permutação caótica (ou
desarranjo) de 3 elementos.
Como há poucos elementos, podemos contar as possibilidades, como fizemos anteriormente:
- O candidato A pode ser analisado pelo servidor b:

       - Nessa situação, o candidato C terá que ser analisado pelo servidor a;
       - E restará o servidor c para o candidato B, resultando na seguinte possibilidade:

- O candidato A pode ser analisado pelo servidor c:

       - Nessa situação, o candidato B terá que ser analisado pelo servidor a;
       - E restará o servidor b para o candidato C, resultando na seguinte possibilidade:

Portanto, há 2 possibilidades.


        Receita Federal (Analista Tributário) Estatística                                               45
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Alternativamente, podemos aplicar a fórmula de desarranjo que aprendemos:
                                                      1 1      (−1)𝑛
                                        𝐷𝑛 = 𝑛! × [     − + ⋯+       ]
                                                      2! 3!      𝑛!

                                                 1 1    3! 3!
                                   𝐷4 = 3! × [     − ] = − =3−1=2
                                                 2! 3!  2! 3!

Logo, o número de maneiras é inferior a 5.

Resposta: Certo.

(FCC/2019 – Prefeitura de Recife/PE) Os quatro funcionários de uma repartição trabalham cada um em uma
mesa, todos na mesma sala. O chefe da repartição determinou que os funcionários trocassem de mesa entre
si. Os funcionários podem ser realocados na sala de modo que nenhum funcionário passe a ocupar a mesa
que ocupava antes da realocação.
a) de 4 maneiras diferentes.
b) de 24 maneiras diferentes.
c) de 9 maneiras diferentes.
d) de 6 maneiras diferentes.
e) de 12 maneiras diferentes.
Comentários:
Novamente, temos uma permutação caótica (ou desarranjo), mas agora com 4 elementos. Por haver uma
maior quantidade de elementos, vamos direto para a fórmula:
                                                   1 1      (−1)𝑛
                                        𝐷𝑛 = 𝑛! × [ − + ⋯ +       ]
                                                   2! 3!      𝑛!

                                      1 1 1    4! 4! 4!
                        𝐷4 = 4! × [     − + ] = − + = 4×3−4+1=9
                                      2! 3! 4! 2! 3! 4!

Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                           46
        www.estrategiaconcursos.com.br                                                              183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                    ARRANJO E COMBINAÇÃO
As técnicas que veremos nesta seção (arranjo e combinação) trabalham com a seleção de um
subconjunto dos elementos.
A ordem dos elementos selecionados será relevante para o arranjo, mas não para a combinação.
Em outras palavras, selecionar os elementos A e B ou os elementos B e A são possibilidades
distintas para o arranjo, porém equivalentes para a combinação.

Arranjo Simples
O arranjo de um conjunto finito de elementos é um subconjunto desses elementos, de tal
maneira que a sua ordenação seja relevante.
Por exemplo, em um sorteio, em que o primeiro sorteado ganha um carro, e o segundo sorteado
ganha uma bicicleta, a ordem, com certeza, será relevante. Em outras palavras, o cenário em que
Ana é sorteada primeiro e Beto é sorteado depois será diferente daquele em que Beto é
sorteado primeiro e Ana é sorteada depois.
Suponha que existam 6 pessoas em um sorteio, em que 3 delas serão sorteadas, não sendo
possível sortear a mesma pessoa mais de uma vez. Considerando a ordem relevante, de quantas
formas as 3 pessoas poderão ser sorteadas?
Como a ordem importa, vamos sortear uma pessoa por vez, preenchendo os seguintes espaços
com o número de possibilidades de cada sorteio:

Havendo 6 pessoas no total, há 6 possibilidades para sortearmos a primeira pessoa. Assim,
restarão 5 pessoas para o segundo sorteio. Em seguida, haverá 4 possibilidades para o terceiro e
último sorteio:

Como os três sorteios irão ocorrer, pelo princípio multiplicativo, devemos multiplicar as
possibilidades de cada evento. Dessa forma, o resultado desse arranjo é:
                                                        6x5x4


E se houvesse 10 pessoas para 4 sorteios?
Para o primeiro sorteio, haveria 10 possibilidades; para o segundo, 9 possibilidades; para o
terceiro, 8 possibilidades; e para o quarto, 7 possibilidades:

        Receita Federal (Analista Tributário) Estatística                                    47
        www.estrategiaconcursos.com.br                                                       183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                         10 x 9 x 8 x 7
Parece um pouco a fórmula do fatorial, certo? Na verdade, é o início do fatorial do total de 𝑛
elementos, “estancado” após 𝑘 fatores, sendo 𝑘 o número de elementos sorteados.
E como fazemos para “estancar” um fatorial? Dividindo por um fatorial menor!
No caso de 𝑘 = 4 sorteios para um conjunto de 𝑛 = 10 pessoas, fazemos:
                               10!          10!        10×9×8×7×6!
                             (10−4)!
                                        =    6!
                                                   =        6!
                                                                     = 10×9×8×7 = 5. 040

        No caso geral, um arranjo sem reposição de 𝑘 elementos, dentre 𝑛 elementos
        distintos é:

                                                                     𝑛!
                                                         𝐴𝑛,𝑘 = (𝑛−𝑘)!

                                                                 𝑘
        Outra notação possível para o arranjo é 𝐴𝑛.

Por exemplo, o número de maneiras de sortear 5 pessoas, dentre um total de 8, para prêmios
distintos corresponde ao arranjo de 5 elementos, dentre 8:
                                   8!         8!        8×7×6×5×4×3!
                       𝐴8,5 = (8−5)! = 3! =                  3!
                                                                          = 8×7×6×5×4 = 6. 720

Nem sempre a importância da ordem da seleção será fácil de visualizar. Vamos supor que, dentre
um grupo de 10 funcionários de uma empresa, tivermos que selecionar 1 supervisor, 1
coordenador e 1 técnico.
Nesse caso, selecionar um funcionário como supervisor é diferente de selecionar esse mesmo
funcionário como coordenador ou como técnico.
Imagine que a seleção desses cargos ocorre em uma sequência, por exemplo, primeiro
supervisor, depois coordenador e depois técnico.
Assim, há diferença entre ser chamado primeiro, segundo ou terceiro. Logo, a ordem da seleção
é, de fato, importante, motivo pelo temos um arranjo.

        Receita Federal (Analista Tributário) Estatística                                        48
        www.estrategiaconcursos.com.br                                                           183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

          A fórmula de arranjo que acabamos de ver serve para casos sem reposição, ou
          seja, quando um mesmo elemento não puder ser selecionado mais de uma vez.

          Caso haja reposição, o número de elementos disponíveis para cada sorteio é
          sempre o mesmo. Por exemplo, em uma seleção com reposição, cuja ordem
          importe, de 3 elementos, dentre 6 elementos disponíveis no total, o número de
          possibilidades é:

                                                       6 x 6 x 6 = 63

          De modo geral, o arranjo com reposição (ou repetição) de 𝑘 elementos dentre 𝑛
          elementos no total é dado por:

                                                                             𝑘
                                               𝐴𝑛,𝑘 = 𝑛 × 𝑛×…×𝑛 = 𝑛

                                                              𝑘 vezes

(VUNESP/2019 – Prefeitura de Cerquilho/SP) Na bilheteria de um teatro há apenas 5 ingressos à
venda para a seção de uma peça. Se 4 amigos comprarem ingressos para essa seção, então o
número total de posições distintas em que esses amigos poderão se acomodar no teatro é

a) 120.

b) 80.

c) 60.

d) 20.

e) 5.

Comentários:

Temos uma seleção de 4 lugares, dentre 5 disponíveis, com importância de ordem, pois cada
lugar é distinto do outro. Assim, temos o arranjo de 4 elementos, dentre 5:

                                                5!       5!
                                     𝐴5,4 = (5−4)! = 1! = 5×4×3×2×1 = 120

Gabarito: A.

          Receita Federal (Analista Tributário) Estatística                                49
          www.estrategiaconcursos.com.br                                                  183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(VUNESP/2018 – PM/SP) Utilizando-se os algarismos 2, 3, 5, 6, 7 e 9, a quantidade de números
múltiplos de 5 e que tenham três algarismos distintos que podem ser formados é

a) 25.

b) 20.

c) 15.

d) 10.

Comentários:

Para que o número formado pelos 6 algarismos indicados no enunciado seja múltiplo de 5, é
necessário que o algarismo 5 seja o último algarismo. Assim, os diferentes números que podem
ser formados com 3 algarismos correspondem a um arranjo de 2 elementos, dentre 5:

                                                    5!        5×4×3!
                                        𝐴5,2 = (5−2)! =         3!
                                                                       = 5×4 = 20

Gabarito: B.

(CESPE 2019/COGE-CE) Em determinado órgão, sete servidores foram designados para
implantar novo programa de atendimento ao público. Um desses servidores será o coordenador
do programa, outro será o subcoordenador, e os demais serão agentes operacionais.

Nessa situação, a quantidade de maneiras distintas de distribuir esses sete servidores nessas
funções é igual a

a) 21.

b) 42.

c) 256.

d) 862.

e) 5.040.

Comentários:

Nessa questão, devemos definir o número de maneiras distintas de distribuir 7 servidores em
funções distintas: 1 será coordenador, 1 será subcoordenador e os demais serão agentes. Note
que, após a definição do coordenador e do subcoordenador, os que sobrarem serão

          Receita Federal (Analista Tributário) Estatística                                50
          www.estrategiaconcursos.com.br                                                  183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

necessariamente agentes. Por isso, não precisamos nos preocupar com eles, apenas com o
coordenador o subcoordenador.

Para a escolha do coordenador, há 7 servidores, ou seja, 7 possibilidades:

Após a escolha do coordenador, restarão 6 possibilidades para o subcoordenador:

Como devemos escolher o coordenador E o subcoordenador, devemos multiplicar as
possibilidades (princípio multiplicativo):

                                    Número de Possibilidades = 7 x 6 = 42

Alternativamente, poderíamos calcular o arranjo de 2 elementos, dentre 7:

                                              7!       7!   7×6×5!
                                   𝐴7,2 = (7−2)! = 5! =       5!
                                                                     = 7×6 = 42

Gabarito: B

(CESPE 2020/TJ-PA) Em um sistema de acesso a uma rede de computadores, os usuários devem
cadastrar uma senha de 6 dígitos, que deve ser formada da seguinte maneira:

• os 2 primeiros dígitos devem ser letras minúsculas distintas, escolhidas entre as 26 letras do
alfabeto;

• os demais 4 dígitos da senha devem ser números inteiros entre 0 e 9, admitindo-se repetição.

Nessa situação, a quantidade de senhas diferentes que podem ser formadas é igual a

a) 3.674.

b) 5.690.

c) 1.965.600.

d) 3.276.000.

e) 6.500.000.

Comentários:

        Receita Federal (Analista Tributário) Estatística                                        51
        www.estrategiaconcursos.com.br                                                       183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Nessa questão, temos os dois tipos de arranjo, com e sem reposição. Isso porque as letras devem
ser distintas (não podem repetir) e os números podem ser repetir.

Vamos representar a senha de 6 dígitos por 6 espaços:

Os dois primeiros dígitos admitem as 26 letras do alfabeto, sem repetição. Logo, temos 26
possibilidades para o primeiro espaço e 25 possibilidades para o segundo espaço (uma vez que a
letra escolhida para o primeiro espaço não pode se repetir):

Os demais 4 dígitos admitem os 10 números (de 0 a 9), podendo haver repetição. Logo, há 10
possibilidades para cada espaço:

Como a senha é formada por todos os 6 dígitos, então devemos multiplicar as possibilidades
(princípio multiplicativo):

               Número de Senhas Possíveis = 26 x 25 x 10 x 10 x 10 x 10 = 6.500.000

Gabarito: E

Combinação Simples
Assim como no caso do arranjo, a combinação é uma seleção de elementos
de um conjunto finito. Entretanto, para a combinação, a ordem não importa.
Por exemplo, em um sorteio de participantes para um grupo de estudo, a
ordem do sorteio de cada participante é irrelevante.
Nessa situação, algumas possibilidades distintas identificadas no arranjo são
equivalentes na combinação. Consequentemente, a combinação de
determinados elementos resulta em um número menor do que o arranjo dos mesmos elementos.
Menor, quanto?
Bem, todas as possibilidades de sorteio das mesmas pessoas, em que elas apenas mudam de
lugar, são consideradas o mesmo resultado na combinação. Logo, precisamos dividir as
possibilidades do arranjo pelo número de possibilidades em que os elementos selecionados
trocam de posição, isto é, pela permutação dos elementos selecionados!
No caso de um sorteio de 3 pessoas, dividimos o número de possibilidades do arranjo por P3:


        Receita Federal (Analista Tributário) Estatística                                     52
        www.estrategiaconcursos.com.br                                                        183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                             𝐴6,3        6!
                                                    𝐶6,3 =   𝑃3
                                                                    = (6−3)!3!

         De maneira geral, a combinação sem reposição de 𝑘 elementos, de um total de 𝑛
         elementos, é dada por:

                                                             𝐴𝑛,𝑘         𝑛!
                                                    𝐶𝑛,𝑘 =    𝑃𝑘
                                                                    = (𝑛−𝑘)!𝑘!

                                                                                 𝑘
         Outras notações comuns para a combinação são 𝐶𝑛 ou (𝑛 𝑘 ).

(FGV/2019 – Pref. Angra dos Reis/RJ) Maria possui em casa quatro tipos de frutas: banana,
mamão, abacate e manga. Ela decidiu fazer uma vitamina com duas dessas frutas, batendo-as
juntas com leite no liquidificador. O número de vitaminas diferentes que Maria poderá fazer é

a) 3.

b) 4.

c) 5.

d) 6.

e) 12.

Comentários:

O número de vitaminas diferentes corresponde ao número de maneiras diferentes de Maria
escolher 2, das 4 frutas, sem que a ordem importe, logo, temos uma combinação de 2
elementos, dentre 4:

                                               4!             4!        4×3×2!           4×3
                                  𝐶4,2 = (4−2)!×2! = 2!×2 =              2!×2
                                                                                     =    2
                                                                                               = 6

Gabarito: D


         Receita Federal (Analista Tributário) Estatística                                           53
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(FGV/2022 – PC-RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos
para um treinamento especial. O número de pares diferentes de policiais que podem ser
enviados para o treinamento especial é:

a) 10

b) 12.

c) 15.

d) 16.

e) 18.

Comentários:

O número de pares de policiais que podem ser escolhidos, dentre 6, corresponde ao número de
maneiras de escolher 2 elementos, dentre 6. Como a ordem dos escolhidos não importa, temos a
combinação de 2 elementos dentre 6:

                                                                𝑛!
                                                     𝐶𝑛,𝑝 = (𝑛−𝑝)!×𝑝!

                                                   6!        6×5×4!       6×5
                                      𝐶6,2 = (6−2)!×2! =      4!×2!
                                                                      =    2
                                                                                = 15

Gabarito: C

(CESPE 2018/BNB) Julgue o próximo item, relativo a análise combinatória e probabilidade.

Se 9 cidades forem interligadas por rodovias, de forma que entre quaisquer duas dessas cidades
haja apenas uma rodovia interligando-as e essa rodovia não passe por nenhuma outra cidade,
então essa malha viária será composta de 72 rodovias.

Comentários:

A ilustração a seguir representa as 9 cidades e 1 das rodovias possíveis.

         Receita Federal (Analista Tributário) Estatística                                 54
         www.estrategiaconcursos.com.br                                                    183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Considerando que há exatamente 1 rodovia entre cada 2 cidades, então o número de rodovias é
igual ao número de maneiras de selecionar 2 cidades, sem importância de ordem.

Sabendo que há 9 cidades, o número de maneiras de escolher 2 cidades é:

                                               9!           9!     9×8×7!       9×8
                                𝐶9,2 = (9−2)!×2! = 7!×2! =          7!×2!
                                                                            =    2
                                                                                      = 36

Gabarito: Errado.

        É comum que a questão imponha restrições à seleção, da forma “pelo menos
        um”.

        Por exemplo, suponha um conjunto de 5 mulheres e de 4 homens. Quantos
        grupos distintos de 3 pessoas podem ser formados com pelo menos uma
        mulher?

        Você pode resolver esse tipo de questão calculando todas as possibilidades de
        grupos, desconsiderando-se a restrição imposta, e, em seguida, subtrair o
        número de possibilidades que não atendem à restrição.

        Para o nosso exemplo, o número de maneiras possíveis de selecionar 3 pessoas,
        de um total de 4 + 5 = 9 pessoas, no total, é:

                                         9!         9×8×7×6!       9×8×7
                            𝐶9,3 = (9−3)!×3! =        6!×3!
                                                                 = 3×2×1 = 3×4×7 = 84

        Dentre essas possibilidades, não servem aquelas em que apenas homens são
        selecionados. A quantidade de maneiras possíveis de selecionar 3 homens,
        dentre 4, é:

                                                        4!          4×3!
                                              𝐶4,3 = (4−3)!×3! = 1!×3! = 4

        Logo, o número de maneiras de formar grupos de 3 pessoas com pelo menos 1
        mulher é:

                                                      84 – 4 = 80

        Receita Federal (Analista Tributário) Estatística                                    55
        www.estrategiaconcursos.com.br                                                       183

                                      


---

       Equipe Exatas Estratégia Concursos
       Aula 05

Casos Particulares de Combinação
Nessa seção, veremos alguns casos particulares da combinação simples. Você não precisa
decorá-los, mas conhecê-los pode ajudar a resolver alguns problemas com mais rapidez.

i)​         Combinação de 𝑛 elementos em 𝑛 elementos (𝐶𝑛,𝑛).

De quantas formas é possível selecionar 5 jogadores dentre 5 jogadores? Só uma, certo?
Selecionando todos os jogadores! De todo modo, vamos às contas:
                                                        𝑛!             𝑛!        𝑛!
                                            𝐶𝑛,𝑛 = (𝑛−𝑛)!𝑛! = (0)!𝑛! = 1×𝑛! = 1


                                                                 𝐶𝑛,𝑛 = 1

ii)​        Combinação de 0 elemento em 𝑛 elementos (𝐶𝑛,0).

De quantas formas é possível selecionar 0 jogador dentre 5? Só uma também, certo? Não
selecionando jogador algum! Vejamos como ficam as contas:
                                                                 𝑛!         𝑛!
                                                 𝐶𝑛,0 = (𝑛−0)!0! = 𝑛!×1 = 1


                                                                 𝐶𝑛,0 = 1

iii)​       Combinação de 1 elemento em 𝑛 elementos (𝐶𝑛,1).

Considerando 5 jogadores (A, B, C, D, E), quantas são as possibilidades de selecionar 1 jogador?
5, certo? Podemos selecionar A, ou B, ou C, ou D ou E:
                                                                  𝑛!        𝑛
                                                   𝐶𝑛,1 = (𝑛−1)!1! = 1 = 𝑛


                                                                 𝐶𝑛,1 = 𝑛

iv)​        Combinação de 𝑛 − 1 elementos em 𝑛 elementos (𝐶𝑛,𝑛−1).

Considerando os 5 jogadores (A, B, C, D, E), quantas são as possibilidades de selecionar 4
jogadores? Podemos responder a essa pergunta, pensando em quem fica de fora em cada
seleção.

             Receita Federal (Analista Tributário) Estatística                               56
             www.estrategiaconcursos.com.br                                                  183

                                           


---

      Equipe Exatas Estratégia Concursos
      Aula 05

Ou seja, podemos selecionar todos exceto A; ou todos exceto B; ou todos exceto C; ou todos
exceto D; ou todos exceto E. Assim, temos 5 possibilidades!
                                                           𝑛!                      𝑛    𝑛
                                     𝐶𝑛,𝑛−1 = [𝑛−(𝑛−1)]!(𝑛−1)! = [𝑛−𝑛+1]! = 1 = 𝑛


                                                                𝐶𝑛,𝑛−1 = 𝑛

v)​        A combinação de 𝑘 elementos em 𝑛 é igual à combinação de 𝑛 − 𝑘 em 𝑛 (𝐶𝑛,𝑘 = 𝐶𝑛,𝑛−𝑘).

No item anterior, construímos o raciocínio de que selecionar 4 jogadores dentre 5 é o mesmo
que deixar 1 jogador. Além disso, o número de maneiras de deixar 1 jogador é o mesmo de
selecionar 1 jogador.                                            ==219a34==

Em outras palavras, de um total de 5 jogadores, o número de maneiras de selecionar 4 jogadores
é o mesmo de selecionar 1 jogador.
Em geral, de um total de 𝑛 elementos, selecionar 𝑘 elementos é o mesmo que selecionar 𝑛 − 𝑘
elementos:
                                                                              𝑛!
                                                           𝐶𝑛,𝑘 = (𝑛−𝑘)!𝑘!

                                                      𝑛!                           𝑛!       𝑛!
                                  𝐶𝑛,𝑛−𝑘 = [𝑛−(𝑛−𝑘)]!(𝑛−𝑘)! = [𝑛−𝑛+𝑘]!(𝑛−𝑘)! = 𝑘!(𝑛−𝑘)!


                                                           𝐶𝑛,𝑘 = 𝐶𝑛,𝑛−𝑘

            Vamos a mais um “facilitador de contas”:

                                                                                                 𝑛
                    O somatório de todas as combinações possíveis de 𝑛 elementos é 2

                                                                                            𝑛
                                      𝐶𝑛,0 + 𝐶𝑛,1 + 𝐶𝑛,2 + … + 𝐶𝑛,𝑛−1 + 𝐶𝑛,𝑛 = 2

            Ou seja, o somatório de todas as possibilidades de combinações distintas de um
            total de 𝑛 elementos, ou seja, a combinação com 0 elemento, as combinações
            com 1 elemento, combinações com 2 elementos, etc., até a combinação com 𝑛
                                         𝑛
            elementos, é igual a 2 .


            Receita Federal (Analista Tributário) Estatística                                        57
            www.estrategiaconcursos.com.br                                                           183

                                             


---

Equipe Exatas Estratégia Concursos
Aula 05

      Essa propriedade que acabamos de ver é um dos teoremas associados ao
      chamado Triângulo de Pascal, que pode ser representado da seguinte forma:

      O Triângulo de Pascal é formado por combinações 𝐶𝑛,𝑘, sendo 𝑛 o número da
      linha e 𝑘 o número da coluna, iniciando-se pela linha e coluna zero.

      Os números 𝐶𝑛,𝑘 podem ser chamados Números Binomiais ou Coeficientes
      Binomiais.

      Para construir o Triângulo, somamos 2 elementos consecutivos (colunas 𝑘 e 𝑘 + 1
      ) de uma mesma linha (𝑛), para obter o elemento da linha abaixo (𝑛 + 1) na
      coluna 𝑘 + 1:

      Essa propriedade é chamada de Relação de Stifel e corresponde ao seguinte:

                                            𝐶𝑛,𝑘 + 𝐶𝑛,𝑘+1 = 𝐶𝑛+1,𝑘+1

      Além disso, a soma dos elementos de uma coluna (𝑘), desde o seu início (linha 𝑘)
      até alguma linha 𝑘 + 𝑛, é igual ao elemento da linha seguinte (𝑘 + 𝑛 + 1) e
      coluna seguinte (𝑘 + 1), conforme ilustrado abaixo para a coluna 1:

      Receita Federal (Analista Tributário) Estatística                                  58
      www.estrategiaconcursos.com.br                                                     183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

        Essa propriedade é chamada de Teorema das Colunas e pode ser descrita como:

                               𝐶𝑘,𝑘 + 𝐶𝑘+1,𝑘 + 𝐶𝑘+2,𝑘 + … + 𝐶𝑘+𝑛,𝑘 = 𝐶𝑘+𝑛+1,𝑘+1

                                                                                  𝑛
        A propriedade que vimos antes (𝐶𝑛,0 + 𝐶𝑛,1 + 𝐶𝑛,2 + … + 𝐶𝑛,𝑛 = 2 ) é chamada
        de Teorema das Linhas, pois 𝐶𝑛,0 + 𝐶𝑛,1 + 𝐶𝑛,2 + … + 𝐶𝑛,𝑛 é a soma de todos os
        elementos de uma linha 𝑛.

(2019 – Prefeitura de Colômbia/SP) Em uma pequena escola de música os estudantes são
especializados em instrumentos conforme tabela a seguir:

O número de bandas diferentes que poderão ser formadas com os estudantes desta escola de
música com a seguinte constituição: 2 guitarristas, 1 contrabaixista, 1 baterista e 1 tecladista está
compreendido entre:

a) 1 e 300

b) 301 e 400

c) 401 e 600

d) 601 e 800

Comentários:


        Receita Federal (Analista Tributário) Estatística                                         59
        www.estrategiaconcursos.com.br                                                            183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Para selecionar 2 guitarristas, dentre 6, temos:

                                                                     𝑛!
                                                       𝐶𝑛,𝑘 = (𝑛−𝑘)!𝑘!

                                                           6!             6×5
                                             𝐶6,2 = (6−2)!2! =             2
                                                                                = 15

Para as demais combinações, basta conhecer o caso especial 𝐶𝑛,1 = 𝑛.

Para selecionar 1 contrabaixista, temos n = 2: 𝐶2,1 = 2.

Para selecionar 1 baterista, temos n = 4: 𝐶4,1 = 4.

Para selecionar 1 tecladista, temos n = 3: 𝐶3,1 = 3.

Como a banda terá todos esses instrumentistas, pelo princípio multiplicativo, devemos multiplicar
todas essas possibilidades:

                                   Cguitarristas x Ccontrabaixistas x Cbateristas x Ctecladistas

                                                  15 x 2 x 4 x 3 = 360

Gabarito: B

(CESPE 2018/PF) Para cumprimento de um mandado de busca e apreensão serão designados um
delegado, 3 agentes (para a segurança da equipe na operação) e um escrivão. O efetivo do
órgão que fará a operação conta com 4 delegados, entre eles o delegado Fonseca; 12 agentes,
entre eles o agente Paulo; e 6 escrivães, entre eles o escrivão Estêvão.

Em relação a essa situação hipotética, julgue o item a seguir.

Considerando todo o efetivo do órgão responsável pela operação, há mais de 5.000 maneiras
distintas de se formar uma equipe para dar cumprimento ao mandado.

Comentários:

A questão pede o número de maneiras de escolher 1 delegado (dentre 4), 3 agentes (dentre 12)
e 1 escrivão (dentre 6):

- O número de formas de escolher 1 delegado, dentre 4, é igual a 4 – caso especial 𝐶4,1 = 4;

- O número de formas de escolher 3 agentes, dentre 12, é igual a:

        Receita Federal (Analista Tributário) Estatística                                          60
        www.estrategiaconcursos.com.br                                                             183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                              12!      12×11×10
                                   𝐶12,3 = 9!3! =        3×2
                                                                  = 2×11×10 = 220

- O número de formas de escolher 1 escrivão, dentre 6, é igual a 6 – caso especial 𝐶6,1 = 6.

Para formar toda a equipe, multiplicamos esses resultados (princípio multiplicativo):

                                Número de possibilidades = 4 x 220 x 6 = 5280

Logo, há mais de 5.000 maneiras de formar a equipe.

Gabarito: Certo.

(FCC/2018 – Analista Judiciário do TRT 15ª Região) Dez pastas diferentes devem ser guardadas
em duas caixas diferentes. Se a única regra é que cada uma das caixas contenha pelo menos uma
pasta, então a quantidade de maneiras distintas como se pode guardar essas pastas nas caixas é

a) 510

b) 1.022

c) 126.

d) 2.048

e) 256

Comentários:

Como a ordem dentro das caixas não importa, utilizaremos combinação. Além disso, é
importante notar que ao selecionarmos as pastas para uma das caixas, teremos definido as pastas
que serão guardadas na outra caixa. Por isso, podemos pensar na combinação para uma das
caixas apenas.

Assim, podemos selecionar 1, 2, 3, 4, 5, 6, 7, 8 ou 9 pastas para a primeira caixa. Não podemos
selecionar 10 pastas porque não sobraria pastas para a segunda caixa, o que não é permitido
(cada caixa deve conter pelo menos 1 pasta). Pelo mesmo motivo, não podemos selecionar 0
pasta para a primeira caixa.

Devemos, portanto, calcular as possibilidades de combinação C10,1, C10,2, C10,3, C10,4, C10,5, C10,6,
C10,7, C10,8 e C10,9. Esses eventos são mutuamente exclusivos (selecionamos 1 OU 2 OU 3 OU ...
OU 9 pastas para a primeira caixa). Portanto, as possibilidades desses eventos devem ser
somadas (princípio aditivo).

          Receita Federal (Analista Tributário) Estatística                                       61
          www.estrategiaconcursos.com.br                                                          183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Para facilitar as contas, utilizaremos a propriedade de combinação que vimos:

                                                                           𝑛
                                  𝐶𝑛,0 + 𝐶𝑛,1 + 𝐶𝑛,2 + … + 𝐶𝑛,𝑛−1 + 𝐶𝑛,𝑛 = 2

                                                                                                      10
       𝐶10,0 + 𝐶10,1 + 𝐶10,2 + 𝐶10,3 + 𝐶10,4 + 𝐶10,5 + 𝐶10,6 + 𝐶10,7 + 𝐶10,8 + 𝐶10,9 + 𝐶10,10 = 2

Porém, não é exatamente essa soma que estamos buscando, pois não temos nem 𝐶10,0 nem 𝐶10,10
. Por isso, devemos subtrair os valores dessas combinações do resultado:

                                                                                   10
       𝐶10,1 + 𝐶10,2 + 𝐶10,3 + 𝐶10,4 + 𝐶10,5 + 𝐶10,6 + 𝐶10,7 + 𝐶10,8 + 𝐶10,9 = 2        − 𝐶10,0 − 𝐶10,10

Sabemos, ainda, que 𝐶𝑛,0 = 1, logo, 𝐶10,0 = 1; e 𝐶𝑛,𝑛 = 1, logo, 𝐶10,10 = 1:

    𝐶10,1 + 𝐶10,2 + 𝐶10,3 + 𝐶10,4 + 𝐶10,5 + 𝐶10,6 + 𝐶10,7 + 𝐶10,8 + 𝐶10,9 = 1024 − 1 − 1 = 1022

Gabarito: B

Combinação Completa
Os problemas de combinação completa (ou combinação com repetição) envolvem um conjunto
de n tipos de elementos diferentes, dos quais serão escolhidos k elementos iguais ou diferentes.
Também podemos pensar que será selecionado um número k de objetos, iguais ou diferentes,
dentre n tipos diferentes.
Por exemplo, escolher k = 3 potes de sorvete havendo um total de n = 5 marcas distintas (os
potes podem ser de uma mesma marca ou de marcas distintas).
Observe que essa situação é diferente da escolha de 3 potes de sorvete dentre 5 potes, o que
seria a combinação simples de 3 elementos, dentre 5 (C5,3 = 10). Essa também seria a
combinação para escolher 3 marcas dentre 5 marcas.
Porém, no nosso exemplo atual, temos que escolher 3 potes dentre 5 marcas. O número de
possibilidades é muito maior do que a combinação simples de 3 dentre 5 elementos.
Para calcular todas as possibilidades, vamos imaginar que cada marca de sorvete esteja em uma
seção separada do congelador:

Podemos escolher, por exemplo, 3 potes da marca A.

        Receita Federal (Analista Tributário) Estatística                                                  62
        www.estrategiaconcursos.com.br                                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Ou 2 potes da marca B e 1 da marca C:

Ou, ainda, 1 da marca A, outro da D e outro da E:

Repare que podemos considerar esse problema como a permutação dos objetos (potes de
sorvetes) e das divisórias que separam as diferentes marcas.
Nesse caso, temos 3 potes de sorvete e 4 divisórias – o número de divisórias é sempre o número
de marcas menos 1. Assim, temos a permutação de 7 elementos, sendo 3 potes e 4 divisórias
(elementos repetidos).
                                                                                  3
Portanto, a combinação completa de 3 objetos de 5 marcas, indicada por 𝐶𝑅5, é igual à
permutação de 7 elementos, com repetição de 3 e 4 elementos:
                                           3       3,4      7!   7×6×5
                                        𝐶𝑅5 = 𝑃7 = 3!×4! =        3×2
                                                                           = 35

        De maneira geral, a combinação de 𝑝 objetos de 𝑛 tipos (ou marcas), equivale à
        permutação de 𝑛 − 1 divisórias com 𝑝 objetos, ou seja, à permutação de
        𝑛 − 1 + 𝑝 elementos, com repetição de 𝑛 − 1 e 𝑝 elementos:

                                               𝑝         𝑛−1,𝑝   (𝑛−1+𝑝)!
                                           𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝 = (𝑛−1)!×𝑝!

Também devemos utilizar a combinação completa em problemas de distribuição de objetos entre
pessoas (ou lugares). Por exemplo, a distribuição de 3 cestas básicas para 5 famílias segue o
mesmo raciocínio.

        Receita Federal (Analista Tributário) Estatística                                  63
        www.estrategiaconcursos.com.br                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

         A combinação completa de 𝑝 objetos de 𝑛 tipos também equivale à combinação
         simples de 𝑝 elementos, dentre 𝑛 − 1 + 𝑝 elementos disponíveis:

                                                 𝑝     (𝑛−1+𝑝)!
                                             𝐶𝑅𝑛 = (𝑛−1)!×𝑝! = 𝐶𝑛−1+𝑝,𝑝

         No nosso exemplo, a combinação completa de p = 3 potes de sorvete, havendo
         um total de n = 5 marcas distintas, corresponde à combinação de 3 elementos,
         dentre 5 – 1 + 3 = 8 elementos no total.

(FGV/2018 – ALE-RO) Helena entra em uma sorveteria que oferece sorvetes de 8 sabores
diferentes. Helena deseja escolher uma casquinha com duas bolas de sorvete não
necessariamente de sabores diferentes. A ordem em que as bolas forem colocadas na casquinha
não fará a escolha de Helena ser diferente.

O número de maneiras de Helena escolher sua casquinha é

a) 64.

b) 56.

c) 36.

d) 28.

e) 16.

Comentários:

Nessa questão, temos um exemplo de combinação com reposição (ou combinação completa).
Trata-se de uma combinação porque a ordem não importa, como a questão informa. E há
reposição pelo fato de Helena poder escolher sabores não necessariamente diferentes. A fórmula
da combinação completa é:

         Receita Federal (Analista Tributário) Estatística                                 64
         www.estrategiaconcursos.com.br                                                    183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                           𝑝        (𝑛−1+𝑝)!
                                                     𝐶𝑅𝑛 = (𝑛−1)!×𝑝!

Sabendo que há 8 sabores disponíveis (n = 8) e que Helena irá escolher 2 bolas de sorvete (p =
2):

                                   2      (8+2−1)!             9!        9×8×7!       9×8
                                𝐶𝑅8 = (8−1)!×2! = 7!×2! =                 7!×2
                                                                                  =    2
                                                                                            = 36

Gabarito: C

(2019 – Conselho Regional de Medicina/AC) O pai de 3 filhos, com idades diferentes, distribuiu 9
balas idênticas entre eles, de forma que o mais velho recebeu o dobro de balas do caçula e o
filho do meio recebeu mais balas que o caçula e menos balas que o mais velho. O filho caçula
recebeu X balas e o filho do meio recebeu Y balas.

Com base nessa situação hipotética, julgue o item a seguir.

Se alguém deseja distribuir 9 balas idênticas entre 3 pessoas, sem qualquer critério de
distribuição, com cada uma delas recebendo pelo menos uma bala, então existem 28 maneiras
de se fazer a distribuição.

Comentários:

Esse também é um caso de combinação completa, em que as balas correspondem aos objetos e
as pessoas correspondem às seções.

Porém, o problema apontou para uma restrição: todas as pessoas receberão pelo menos uma
bala.

Após distribuir uma bala por pessoa, totalizando 3 balas, sobrarão 9 – 3 = 6 balas a serem
distribuídas, sem critério, para as 3 pessoas.

Portanto, temos a combinação completa de k = 6 objetos para n = 3 pessoas, ou seja, n – 1 = 2
divisórias:

                                                 𝑝         𝑛−1,𝑝         (𝑛−1+𝑝)!
                                             𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝 = (𝑛−1)!×𝑝!

                                             6       2,6            8!     8×7
                                         𝐶𝑅3 = 𝑃8 = 2!×6! =                 2
                                                                                  = 28

Gabarito: Certo

(CESPE 2018/SEFAZ-RS) Se 7 kg de feijão forem distribuídos para até quatro famílias, de modo
que cada uma delas receba um número inteiro de quilos, então, nesse caso, a quantidade de
maneiras distintas de se distribuírem esses 7 kg de feijão para essas famílias será igual a

        Receita Federal (Analista Tributário) Estatística                                          65
        www.estrategiaconcursos.com.br                                                             183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 30.

b) 120.

c) 330.

d) 820.

e) 1.320.

Comentários:

Podemos representar os quilos de feijão como                         e as 4 famílias como seções separadas por
uma barra:

                   Família 1​        ​            Família 2​ ​          Família 3​      Família 4

Podemos distribuir os 7 quilos de feijão da seguinte forma, por exemplo:

                   Família 1​        ​            Família 2​ ​          Família 3​      Família 4

O enunciado permite que alguma(s) família(s) fique sem quilos de feijão porque menciona que a
distribuição será para “até” 4 famílias. Assim, há 7 quilos de feijão (p = 7) a serem distribuídos
livremente para 4 famílias (n = 4).

Essa distribuição pode ser vista como a permutação dos 7        e das 3 barras que separam as
famílias, isto é, uma permutação de 10 elementos, com repetição de 7 e de 3 elementos:

                            7      3,7      10!      10×9×8×7!       10×9×8
                         𝐶𝑅4 = 𝑃10 = 3!×7! =           3!×7!
                                                                 =     3×2
                                                                              = 10×3×4 = 120

Gabarito: B.

(FGV/2021 – Pref. Paulínia) Eva tem 9 maçãs indistinguíveis e deseja distribuí-las a 3 amigos de
forma que cada um deles fique com, ao menos, 2 maçãs. O número de maneiras distintas de Eva
distribuir as maçãs é

a) 12

          Receita Federal (Analista Tributário) Estatística                                                 66
          www.estrategiaconcursos.com.br                                                                   183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

b) 10

c) 9

d) 8

e) 6

Comentários:

Essa questão trabalha com combinação completa, em que precisamos distribuir 9 maçãs para 3
amigos. Primeiro, distribuímos as maçãs obrigatórias, quais sejam, 2 para cada amigo. Após a
distribuição das 6 maçãs, restarão 3 a serem distribuídas livremente.

A figura a seguir ilustra uma forma de distribuir as 3 maçãs:

                           Amigo 1​                  Amigo 2 ​       ​      Amigo 3

A combinação completa, entre 𝑛 = 3 amigos e 𝑝 = 3 objetos, pode ser vista como a permutação
dos 3 objetos e das 2 barras que separam os amigos, que corresponde a permutação de 5
elementos no total, com repetição de 3 e de 2 elementos:

                                      3      3,2      5!    5×4×3!
                                   𝐶𝑅3 = 𝑃5 = 3!×2! =        3!×2
                                                                     = 5×2 = 10

Gabarito: B

Número de Soluções Inteiras de Equações
Os problemas de combinação completa, que acabamos de ver, podem ser analisados de outra
perspectiva.
Vamos considerar o mesmo exemplo da compra de 3 potes de sorvete, dentre 5 marcas distintas.
Podemos representá-lo por uma equação, em que 𝑥𝐴 representa a quantidade de potes de
sorvete adquiridos da marca A; 𝑥𝐵 representa a quantidade de potes de sorvete da marca B; 𝑥𝐶, a
quantidade de potes da marca C; 𝑥𝐷, a quantidade de potes da marca D; e 𝑥𝐸, a quantidade de
potes da marca E.
Sabendo que o total de potes de sorvete adquiridos é igual a 3, então a soma dos potes
adquiridos de todas as marcas é igual a 3:
                                           𝑥𝐴 + 𝑥𝐵 + 𝑥𝐶 + 𝑥𝐷 + 𝑥𝐸 = 3

        Receita Federal (Analista Tributário) Estatística                                   67
        www.estrategiaconcursos.com.br                                                      183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Como os valores de 𝑥 representam as quantidades de potes adquiridos de cada uma das 5
marcas, de modo que o total de potes seja igual a 3, o número de maneiras de escolher os 3
potes de sorvete corresponde ao número de maneiras de encontrar os valores de 𝑥 que resolvem
essa equação.
Ou seja, o problema de combinação completa, que vimos antes, corresponde ao número de
soluções possíveis para essa equação.

Afinal, podemos representar os diferentes 𝑥𝑖 por espaços entre os símbolos de                                     e os


valores que eles assumem por                        , de forma que o total seja igual a 3. Um exemplo dessa
representação é:

Aqui, temos 𝑥𝐴 = 1, 𝑥𝐵 = 2, 𝑥𝐶 = 0, 𝑥𝐷 = 0, 𝑥𝐸 = 0. Outra opção seria:

Nesse exemplo, temos 𝑥𝐴 = 0, 𝑥𝐵 = 0, 𝑥𝐶 = 0, 𝑥𝐷 = 0 e 𝑥𝐸 = 3.

Ou seja, o número de maneiras de encontrar os possíveis valores de 𝑥, isto é, o número de
soluções possíveis para a equação, corresponde a uma permutação de p = 3      com n – 1 = 4
símbolos de
                                                     3        4,3           7!
                                                 𝐶𝑅5 = 𝑃7 = 4!×3!

                                                              3
Em outras palavras, a combinação completa 𝐶𝑅5 também indica o número de soluções possíveis
para a equação 𝑥𝐴 + 𝑥𝐵 + 𝑥𝐶 + 𝑥𝐷 + 𝑥𝐸 = 3.


        De modo geral, o número                          de    soluções          possíveis   para   a   equação
        𝑥1 + 𝑥2 + … + 𝑥𝑛 = 𝑝 é:

                                                          𝑝         𝑛−1,𝑝
                                                     𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝

        Receita Federal (Analista Tributário) Estatística                                                           68
        www.estrategiaconcursos.com.br                                                                             183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                    O resultado da equação corresponde ao número de objetos: 𝑝

                      O número de variáveis corresponde ao número de seções: 𝑛

                                                              𝑝
Mais precisamente, a combinação completa 𝐶𝑅𝑛 indica o número de soluções inteiras e
não-negativas possíveis para a referida equação.

        Por que somente soluções inteiras e não-negativas?

        Se pudéssemos escolher números negativos, poderíamos sempre diminuir uma
        unidade de uma variável e aumentar uma unidade de outra para manter a soma
        constante (no nosso exemplo, igual a 3).

        Ou seja, poderíamos ter 𝑥𝐴 = 4 e 𝑥𝐵 =− 1 (e as demais variáveis nulas), 𝑥𝐴 = 5 e
        𝑥𝐵 =− 2, 𝑥𝐴 = 6 e 𝑥𝐵 =− 3, etc. O número de soluções seria infinita!

        O mesmo vale para números decimais. Há infinitos números decimais entre
        quaisquer números inteiros. Por exemplo, entre 2 e 3, há 2,1; 2,11; 2,111;
        2,1111;...

        Portanto, se as incógnitas pudessem assumir quaisquer valores reais, sempre
        poderíamos aumentar uma incógnita um “pouquinho” e diminuir outra esse
        mesmo “pouquinho” e manter a soma constante.

        Portanto, somente o conjunto das soluções inteiras e não-negativas da equação é
        um conjunto finito.

        Receita Federal (Analista Tributário) Estatística                                  69
        www.estrategiaconcursos.com.br                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

        Como vimos, a princípio, são permitidas soluções nulas para algumas incógnitas.

        Caso o problema traga alguma situação especial diferente dessa, como exigir
        que as soluções sejam positivas (ou seja, não permitir soluções nulas), precisamos
        fazer as adaptações necessárias.

        Por exemplo, considere a seguinte equação, em que os valores de 𝑥 precisam ser
        positivos:

                                       𝑥𝐴 + 𝑥𝐵 + 𝑥𝐶 + 𝑥𝐷 = 6, 𝑐𝑜𝑚 𝑥 > 0

        Nesse caso, precisamos primeiro distribuir 1 unidade para cada 𝑥.

        Assim, sobrarão 6 – 4 = 2 unidades a serem livremente distribuídas, o que pode
        ser representado pela seguinte equação (em que 𝑥 pode assumir valores nulos):

                                       𝑥𝐴 + 𝑥𝐵 + 𝑥𝐶 + 𝑥𝐷 = 2, 𝑐𝑜𝑚 𝑥 ≥ 0

        Sabemos que o número de soluções possíveis para essa equação é:

                                                     2       3,2           5!
                                                 𝐶𝑅4 = 𝑃5 = 3!×2!

(CESPE/2011 – SEDUC/AM) A equação 𝒙𝟏 + 𝒙𝟐 + 𝒙𝟑 = 𝟏𝟖 possui mais de 200 soluções inteiras e
não negativas.

Comentários:

O número de soluções inteiras e não-negativas para essa equação é o número de combinações
completas com p = 18 objetos em n = 3 seções, ou seja:

                                                         𝑝         𝑛−1,𝑝
                                                     𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝


        Receita Federal (Analista Tributário) Estatística                                    70
        www.estrategiaconcursos.com.br                                                       183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                          18       2,18        20!       20×19
                                      𝐶𝑅3 = 𝑃20 = 2!18! =                  2
                                                                                 = 190

O resultado (190) é inferior a 200.

Gabarito: Errado.

(2015 – Prefeitura de Mangaratiba/RJ) Considerando o conjunto universo dos números inteiros
não negativos, podemos afirmar que a equação x + y + z – 5 = 0:

a) possui uma única solução.

b) possui infinitas soluções.

c) possui 21 soluções.

d) possui 35 soluções.

e) possui 42 soluções.

Comentários:

Primeiro fazemos o seguinte ajuste na equação:

                                                      x+y+z=5

O número de soluções inteiras e não-negativas para essa equação é o número de combinações
completas com p = 5 objetos em n = 3 seções, ou seja:

                                                           𝑝         𝑛−1,𝑝
                                                     𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝

                                               5     2,5        7!       7×6
                                          𝐶𝑅3 = 𝑃7 = 2!5! =               2
                                                                               = 21

Gabarito: C.

        Receita Federal (Analista Tributário) Estatística                                71
        www.estrategiaconcursos.com.br                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                 PARTIÇÕES
O conceito de partição em matemática é bastante similar ao que utilizamos no dia a dia. Se vamos partir uma
pizza, iremos dividi-la em algumas fatias (não necessariamente iguais). Seja qual for o número ou tamanho
das fatias, se juntarmos todas elas (antes de comê-las, é claro!), teremos a pizza completa.

Com a partição em matemática, temos uma situação muito semelhante. A pizza inteira corresponderia a um
conjunto de elementos, que seria particionado (fatiado) em alguma quantidade de subconjuntos (fatias), que
podem ser ou não iguais.

Por exemplo, podemos particionar um grupo de 9 trabalhadores em 3 grupos (um com 5 trabalhadores,
outro com 2 trabalhadores e outro com 1). Atente-se que a soma dos trabalhadores de todos os grupos
equivale ao total de trabalhadores.

O fato de a soma dos elementos nos grupos ser equivalente ao total de elementos é a característica que
diferencia as partições dos problemas de combinação.

Em outras palavras, é possível resolver problemas de partição com as técnicas de combinação. Porém,
conhecer o cálculo específico para a partição é importante, tanto para acelerar a resolução do problema
quanto para reduzir as chances de erros.

Há dois tipos de partição: a partição ordenada e a partição não-ordenada. Na partição ordenada, os grupos
são diferentes. Por exemplo, há um grupo dos coordenadores, outro dos supervisores e outro dos
trabalhadores de uma linha de montagem. Assim, participar do primeiro grupo é diferente de participar do
segundo ou do terceiro, ou seja, a ordem entre os grupos importa.

Na partição não-ordenada, os grupos são iguais. Por exemplo, as equipes formadas terão que fazer um
mesmo trabalho. Assim, se um mesmo grupo de pessoas é selecionado entes ou depois, não haverá
diferença. Portanto, a ordem entre os grupos não importa.

Partição Ordenada

A partição ordenada representa a separação de um conjunto de elementos em subconjuntos distintos entre
si, de modo que a soma dos elementos dos subconjuntos seja equivalente ao total de elementos do conjunto
original.

Por exemplo, podemos particionar um conjunto de 10 profissionais entre os subconjuntos de 1 gerente, 2
coordenadores, e 7 trabalhadores de linha de frente. Como os subconjuntos são distintos, ser chamado para
o primeiro grupo é diferente de ser chamado para o segundo, terceiro ou quarto grupos. Nesse caso, temos
uma partição ordenada, em que a ordem dos subconjuntos importa.

Atenção! Dentro de um mesmo subconjunto, a ordem dos participantes não importa. O que importa é a
ordem entre os subconjuntos.

        Receita Federal (Analista Tributário) Estatística                                               72
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Vamos resolver esse exemplo com as técnicas de combinação que conhecemos. Podemos começar
calculando as possibilidades de se escolher o único gerente (k = 1, n = 10). Esse é um caso especial de
combinação 𝐶𝑛,1 = 𝑛:

                                                      𝐶10,1 = 10

Agora, escolhemos k = 2 coordenadores, dentre as n = 9 opções que restaram após a escolha do gerente:

                                                                𝑛!
                                                 𝐶𝑛,𝑘 =
                                                            (𝑛 − 𝑘 )! 𝑘!

                                                       9!     9×8
                                             𝐶9,2 =         =     = 36
                                                      7! 2!    2

Por fim, temos uma única opção para escolher k = 7 trabalhadores, dentre as n = 7 opções que restaram
(outro caso especial 𝐶𝑛,𝑛 = 1).

Pelo princípio multiplicativo, temos 10 x 36 x 1 = 360 possibilidades de formar esses três subconjuntos. O
resultado seria o mesmo se começássemos por qualquer outro subconjunto.

Alternativamente, esse problema poderia ser resolvido com a seguinte fórmula de partição:

                      10       10!      10 × 9 × 8 × 7! 10 × 9 × 8
                 (        )=          =                =           = 10 × 9 × 4 = 360
                     1,2,7   1! 2! 7!       2 × 7!          2

Bem mais simples, certo?

        Por que esses resultados são iguais? Vamos entender essa “coincidência”!

        Para a escolha de k = 1 gerente, dentre todas as n = 10 opções, temos:

                                                                 10!
                                                    𝐶10,1 = (10−1)!1!

        Para a escolha de k = 2 coordenadores, dentre as n = 10 – 1 opções que sobraram após a
        escolha do gerente, temos:

                                                                (10−1)!
                                                 𝐶10−1,2 = (10−1−2)!2!


        Receita Federal (Analista Tributário) Estatística                                               73
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

        Para a escolha de k = 7 trabalhadores, dentre as n = 10 – 1 – 2 opções que sobraram após
        a escolha do gerente e dos coordenadores, temos:

                                                                           (10−1−2)!
                                              𝐶10−1−2,7 = (
                                                                          10−1−2−7)!7!


        Agora, precisamos multiplicar todos esses resultados:

                                             𝐶10,1 × 𝐶10−1,2 × 𝐶10−1−2,7

                                             10!        (10−1)!                   (10−1−2)!
                                      = (10−1)!1! × (10−1−2)!2! × (10−1−2−7)!7!

                                                     (10−1)!                        (10−1−2)!
        Nessa expressão, podemos simplificar (10−1)! e também (10−1−2)!:

                                           10!        (10−1)!       (10−1−2)!
                                                            ==219a34==

                                      = (10−1)!1! × (10−1−2)!2! × (10−1−2−7)!7!

        Além disso, (10 − 1 − 2 − 7)! = 0! = 1. Portanto, conforme vimos antes, temos:

                                                                         10!
                                                            = 1!2!7!

        Em geral, uma partição ordenada de 𝒏 elementos no total, em 𝒎 subconjuntos com
        𝒑𝟏 , 𝒑𝟐 , … , 𝒑𝒎 elementos cada, temos:

                                                𝒏               𝒏!
                                         (𝒑 , 𝒑 , … , 𝒑 ) = 𝒑 !𝒑 !…𝒑 !
                                           𝟏 𝟐         𝒎     𝟏 𝟐    𝒎

(CESPE/2011 – STF) O colegiado do Supremo Tribunal Federal (STF) é composto por 11 ministros,
responsáveis por decisões que repercutem em toda a sociedade brasileira. No julgamento de determinados
processos, os ministros votam pela absolvição ou pela condenação dos réus de forma independente uns dos
outros. A partir dessas informações e considerando que, em determinado julgamento, a probabilidade de
qualquer um dos ministros decidir pela condenação ou pela absolvição do réu seja a mesma, julgue o item
seguinte.
Se, no julgamento de determinado réu, 8 ministros votarem pela absolvição e 3 ministros votarem pela
condenação, a quantidade de maneiras distintas de se atribuir os votos aos diferentes ministros será́ inferior
a 170.
Comentários:


        Receita Federal (Analista Tributário) Estatística                                                  74
        www.estrategiaconcursos.com.br                                                                    183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Temos uma partição de 11 elementos em dois subconjuntos com 8 e 3 elementos:

                                                    𝑛                  𝑛!
                                             (𝑝 , 𝑝 , … , 𝑝 ) =
                                               1 2         𝑚    𝑝1 ! 𝑝2 ! … 𝑝𝑚 !

                      11  11!     11 × 10 × 9 × 8! 11 × 10 × 9
                     ( )=       =                 =            = 11 × 5 × 3 = 165
                      8,3 8! 3!      8! × 3 × 2       3×2

Como 165 é menor do que 170, portanto o item está certo.
Gabarito: Certo


(FCC/2015 – Julgador Administrativo Tributário da SEFAZ/PE) A tabela a seguir mostra a pontuação obtida
pelas cinco empresas que participaram da concorrência pública para a construção das dez estações de uma
linha de metrô.

De acordo com as regras do edital da concorrência, somente as empresas com mais de 150 pontos seriam
consideradas aprovadas.
Além disso, o edital determinava que as dez estações seriam distribuídas entre as empresas aprovadas
proporcionalmente ao número de pontos que cada uma delas obteve.
Sabendo que as dez estações são iguais, o número de maneiras diferentes de distribuí-las entre as empresas
aprovadas, de acordo com as regras do edital, é igual a
a) 3780.
b) 2520.
c) 7560.
d) 1260.
e) 5040.
Comentários:
Pela regra da pontuação mínima, apenas as empresas I, II e III são aprovadas. As 10 estações serão divididas
entre elas proporcionalmente ao número de pontos.
Podemos chamar de x a quantidade de estações por ponto, que é constante para todas as empresas. Assim,
temos:
                                                  500x + 300x + 200x = 10
                                                          1000x = 10
                                                           x = 1/100

           Receita Federal (Analista Tributário) Estatística                                             75
           www.estrategiaconcursos.com.br                                                                183

                                         


---

       Equipe Exatas Estratégia Concursos
       Aula 05

Portanto, cada empresa irá receber 1/100 estação por ponto:
I)          A empresa I irá receber: 500 x 1/100 = 5
II)         A empresa II irá receber 300 x 1/100 = 3
III)        A empresa III irá receber 200 x 1/100 = 2
Agora, vamos calcular o número de possibilidades de distribuição. Podemos calcular as combinações para
cada empresa e, em seguida, multiplicar os resultados, tendo em vista o princípio multiplicativo.
Porém, a solução será muito mais rápida se considerarmos que as 10 estações serão particionadas entre as
3 empresas (não sobrará nenhuma estação), com n = 10, p 1 = 5, p2 = 3 e p3 = 2.
                                                      𝑛                  𝑛!
                                               (𝑝 , 𝑝 , … , 𝑝 ) =
                                                 1 2         𝑚    𝑝1 ! 𝑝2 ! … 𝑝𝑚 !
                              10       10!      10 × 9 × 8 × 7 × 6
                         (        )=          =                    = 10 × 9 × 4 × 7 = 2520
                             5,3,2   5! 3! 2!       3×2×2
Gabarito: B

Partição Não-Ordenada

A partição não-ordenada representa a separação de um conjunto de elementos em subconjuntos
equivalentes entre si. Por exemplo, podemos particionar um conjunto de 6 profissionais em 3 duplas, que
deverão realizar um mesmo trabalho.

Como os subconjuntos são equivalentes, se uma mesma dupla é chamada primeiro ou depois, a situação
será a mesma. Ou seja, a ordem entre os subconjuntos não importa.

Repare que a ordem dentro do subconjunto não importa, como também não importava para a partição
ordenada. A diferença é que, na partição não-ordenada, a ordem entre os subconjuntos também não
importa.

Se esse exemplo de 3 duplas de profissionais, dentre 6, fosse uma partição ordenada, teríamos:

                                                      𝑛                  𝑛!
                                               (𝑝 , 𝑝 , … , 𝑝 ) =
                                                 1 2         𝑚    𝑝1 ! 𝑝2 ! … 𝑝𝑚 !

                                      6        6!      6×5×4×3×2
                                (        )=          =           = 6 × 5 × 3 = 90
                                    2,2,2   2! 2! 2!     2×2×2

Nessa situação, as mesmas duplas, selecionadas em ordens diferentes, correspondem a possibilidades
distintas. Por exemplo, suponha que os 6 profissionais sejam Ana, Beto, Caio, Dedé, Eduardo e Fátima e que
as duplas formadas sejam Ana e Beto, Caio e Dedé, Eduardo e Fátima.

Em uma partição ordenada, teríamos as seguintes possibilidades distintas, com exatamente essas duplas:


             Receita Federal (Analista Tributário) Estatística                                         76
             www.estrategiaconcursos.com.br                                                            183

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                          Grupo 1                         Grupo 2               Grupo 3
            1.           Ana e Beto                     Caio e Dedé         Eduardo e Fátima
            2.           Ana e Beto                   Eduardo e Fátima        Caio e Dedé
            3.          Caio e Dedé                      Ana e Beto         Eduardo e Fátima
            4.          Caio e Dedé                   Eduardo e Fátima         Ana e Beto
            5.        Eduardo e Fátima                   Ana e Beto           Caio e Dedé
            6.        Eduardo e Fátima                  Caio e Dedé            Ana e Beto

Porém, em uma partição não ordenada, todas essas 6 possibilidades representam o mesmo resultado, uma
vez que as duplas são as mesmas.

Assim, para calcular a permutação não ordenada, precisamos dividir as 90 possibilidades da permutação
ordenada pelo número de maneiras de reordenar as 3 duplas, ou seja, pela permutação dos 3 elementos:

                                            6       6
                                      (        ) (     )     90
                                          2,2,2   2,2,2
                                                =        =       = 15
                                           𝑃3      3!      3×2×1

De maneira geral, na partição não ordenada, precisamos dividir o resultado da partição ordenada pelo
número de maneiras de permutar os 𝒎 grupos, como indicado abaixo.

                                                  𝑛               𝑛!
                                           (𝑝 , 𝑝 , … , 𝑝 ) 𝑝 ! 𝑝 ! … 𝑝 !
                                             1 2         𝑚
                                                           = 1 2       𝑚
                                                 𝑃𝑚              𝑚!

A fórmula da partição não ordenada é praticamente essa, porém com alguns ajustes. Para que sejam iguais,
os grupos devem possuir o mesmo tamanho, então chamamos 𝑝1 , 𝑝2 , … , 𝑝𝑚 de 𝒑. Logo, substituímos
𝑝1 ! 𝑝2 ! … 𝑝𝑚 ! por:

                                                 𝒑! 𝒑! … 𝒑! = (𝒑!)𝒎

                                                   𝒎 vezes
Além disso, sabendo que há 𝒎 subconjuntos com 𝑝 elementos cada, então há um total de 𝒎 × 𝒑 elementos.
Então, substituímos 𝑛 por 𝒎 × 𝒑.

        A partição não ordenada em 𝒎 subconjuntos de 𝒑 elementos cada (ou seja, o conjunto
        original possui 𝒎 × 𝒑 elementos, no total), é:

                                                 𝒎×𝒑
                                               (𝒑,𝒑,…,𝒑)   (𝒎×𝒑)!
                                                         =
                                                  𝒎!       𝒎!(𝒑!)𝒎

        Receita Federal (Analista Tributário) Estatística                                            77
        www.estrategiaconcursos.com.br                                                               183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(2016 – Prefeitura de São José da Coroa Grande/PE) De quantos modos podemos dividir 10 pessoas em dois
grupos de 5 pessoas?
a) 96
b) 108
c) 120
d) 126
e) 132
Comentários:
Considerando que os grupos são equivalentes, temos uma partição não-ordenada de m = 2 subconjuntos de
p = 5 elementos cada:
                                          𝑚×𝑝
                                       (             ) (𝑚 × 𝑝)!
                                         𝑝, 𝑝, … , 𝑝
                                                      =
                                             𝑚!         𝑚! (𝑝!)𝑚
                               10
                           (      )     10!       10 × 9 × 8 × 7 × 6
                               5,5
                                    =         2
                                                =                    = 2 × 9 × 7 = 126
                               2!     2! (5!)     2×5×4×3×2
Gabarito: D


(2006 – TCE/PR) De quantas maneiras diferentes 12 estudantes podem ser divididos em 3 equipes, sendo
que cada uma das equipes deve ser composta de quatro estudantes?
a) 8425
b) 3260
c) 12640
d) 5775
e) 34650
Comentários:
Considerando que as equipes são equivalentes, temos uma partição não-ordenada de m = 3 subconjuntos
de p = 4 elementos cada:
                12
           (        )     12!      12 × 11 × 10 × 9 × 8 × 7 × 6 × 5
               4,4,4
                      =          =                                  = 11 × 5 × 3 × 7 × 5 = 5.775
                3!      3! (4!)3     3×2×4×3×2×4×3×2
Gabarito: D


          Receita Federal (Analista Tributário) Estatística                                        78
          www.estrategiaconcursos.com.br                                                           183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                       LEMAS DE KAPLANSKY
Agora, veremos o primeiro lema e o segundo lema de Kaplansky. Ambos trabalham com a
seleção de um subconjunto de elementos, a partir de um conjunto de elementos originalmente
dispostos em determinada ordem, de modo que elementos consecutivos (vizinhos) do conjunto
original não sejam selecionados.
A diferença entre os lemas é que, para o primeiro lema, os elementos extremos do conjunto
original não são considerados consecutivos (vizinhos), enquanto para o segundo lema, tais
elementos são considerados consecutivos (vizinhos), como se os elementos do conjunto original
estivessem dispostos em um círculo.

Primeiro Lema de Kaplansky
O primeiro lema de Kaplansky considera que os elementos estão originalmente dispostos em
determinada ordem, como em uma fila, e que serão selecionados alguns desses elementos, sem
que a ordem dessa seleção importe. Porém, dentre os elementos selecionados, não pode haver
elementos consecutivos (vizinhos) da fila original.
Suponha um conjunto de 8 algarismos ordenados {1, 2, 3, 4, 5, 6, 7, 8}. Quantas são as
possibilidades de selecionar 2 elementos que não sejam consecutivos do conjunto original?
Podemos resolver esse problema, sem conhecer o lema de Kaplansky, calculando o número de
maneiras de selecionar 2 elementos no total (combinação de 2 elementos, dentre 8) e subtrair o
número de maneiras de selecionar 2 elementos consecutivos. Vejamos:
A combinação de 2 elementos, dentre 8, é dada por:
                                                  8!        8×7×6!
                                     𝐶8,2 = (8−2)!×2! =      6!×2
                                                                     = 4×7 = 28

As possibilidades de escolha de 2 elementos consecutivos são: {1, 2}, {2, 3}, {3, 4}, {4, 5}, {5, 6}, {6,
7} e {7, 8}, ou seja, há 7 possibilidades.
Portanto, o número de maneiras de escolher 2 elementos não consecutivos, dentre 8 no total, é:
                                                       28 – 7 = 21
E se quiséssemos escolher 3 elementos não consecutivos? Aí, teríamos um pouco mais de
trabalho.
Para facilitar a resolução de problemas desse tipo, podemos utilizar o raciocínio de Kaplansky.
Primeiro, vamos representar cada elemento do conjunto original por um S, caso ele pertença ao
subconjunto selecionado, ou por um N, caso ele não pertença ao subconjunto selecionado. Por
exemplo, a seleção do 2º e do 4º elemento do conjunto original de 8 elementos é representada
por N S N S N N N N.
Para formar um subconjunto de 3 elementos, sem elementos consecutivos, vamos começar
representando os 8 – 3 = 5 elementos que não serão selecionados. Como não sabemos em quais
posições esses 5 elementos estarão, vamos prever possíveis espaços antes e depois desses
elementos.


        Receita Federal (Analista Tributário) Estatística                                             79
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                           __ N __ N __ N __ N __ N __
Esses espaços correspondem aos possíveis lugares dos elementos selecionados. Como não há
espaços consecutivos, não será possível escolher elementos consecutivos. Assim, o número de
maneiras de selecionar 3 elementos não consecutivos do conjunto original corresponde ao
número de maneiras de selecionar 3 dentre esses 6 espaços (combinação de 3 elementos, dentre
6):
                                               6!            6×5×4×3!           6×5×4
                                   𝐶6,3 = (6−3)!3! =           3!×3!
                                                                            =    3×2
                                                                                        = 20

É mais importante entender o raciocínio do que memorizar a fórmula.


De modo geral, para a seleção de um subconjunto de 𝑝 elementos, dentre 𝑛 elementos no total,
teremos 𝑛 − 𝑝 elementos não selecionados (N) e, portanto, 𝑛 − 𝑝 + 1 espaços, antes e depois
de cada N.                                                   ==219a34==

Desses 𝑛 − 𝑝 + 1 espaços, selecionaremos os lugares dos 𝑝 elementos (combinação de 𝑝
elementos dentre 𝑛 − 𝑝 + 1).

        O 1º lema de Kaplansky, indicado por 𝑓(𝑛, 𝑝), é:

                                                    𝑓(𝑛, 𝑝) = 𝐶𝑛−𝑝+1,𝑝


Para o exemplo que calculamos antes de conhecer o primeiro lema de Kaplansky, tivemos n = 8 e
p = 2. Assim, haverá 8 – 2 = 6 elementos não selecionados e 6 + 1 = 7 espaços. Dentre esses 7
espaços, devemos escolher a posição de 2 elementos:
                                                        7!                7×6×5!
                               𝑓(8, 2) = 𝐶7,2 = (7−2)!2! =                 5!×2
                                                                                   = 7×3 = 21

Que foi o resultado que obtivemos anteriormente.

(FGV/2019 – MPE/RJ) Valdo é estagiário em um escritório de advocacia e, na semana que vem,
deverá escolher para trabalhar três dias de segunda a sábado. O escritório não permite que um
estagiário trabalhe dois dias consecutivos. O número de possibilidades que Valdo tem para
escolher seus dias de trabalho é:

a) 2

b) 3

c) 4


        Receita Federal (Analista Tributário) Estatística                                       80
        www.estrategiaconcursos.com.br                                                          183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 5

e) 6

Comentários:

Como o conjunto original é formado pelos dias da semana de segunda a sábado, os extremos
não são dias consecutivos. Assim, temos o primeiro lema de Kaplansky com n = 6 e p = 3.

Primeiro representamos os 6 – 3 = 3 dias em que Valdo não irá trabalhar, com os espaços antes e
depois de cada dia não trabalhado, totalizando n – p + 1 = 4 espaços, os quais representam os
possíveis dias de trabalho:

                                                    _N_N_N_

Desses n – p + 1 = 4 espaços, devem ser escolhidos p = 3 elementos:

                                                  𝑓(𝑛, 𝑝) = 𝐶𝑛−𝑝+1,𝑝

                                                     𝑓(6, 3) = 𝐶4,3

Para facilitar as contas, lembre-se que a seleção de n – 1 elementos, dentre n, é um caso
particular de combinação: 𝐶𝑛,𝑛−1 = 𝑛:

                                                        𝐶4,3 = 4

Gabarito: C

(CESPE/2019 – Prefeitura de São Cristóvão/SE) Situação hipotética: As 5 lâmpadas tubulares de
uma sala de aula foram instaladas formando uma única fileira. Por motivo de economia, 2
lâmpadas adjacentes nunca poderão ficar acesas ao mesmo tempo.

Assertiva: Nessa situação, há exatamente 13 configurações distintas, incluindo todas as lâmpadas
desligadas, que atendem à exigência de economia.

Comentários:

Essa questão é um pouco mais trabalhosa. Precisamos tratar distintamente das situações (i) em
que nenhuma lâmpada está acesa; (ii) em que há 1 lâmpada acesa; (iii) em que há 2 lâmpadas
acesas; e (iv) em que há 3 lâmpadas acesas.

Se houvesse 4 lâmpadas acesas, dentre 5, necessariamente teríamos lâmpadas adjacentes
acesas. Portanto, as opções de acender 4 lâmpadas ou mais (5) não atendem às restrições do
problema.

        Receita Federal (Analista Tributário) Estatística                                     81
        www.estrategiaconcursos.com.br                                                        183

                                      


---

       Equipe Exatas Estratégia Concursos
       Aula 05

i)​         Nenhuma lâmpada acesa: C5,0 = 1 (caso especial de combinação Cn,0 = 1). Não há que se
            falar em lema de Kaplansky, porque quando não selecionamos lâmpada alguma, não é
            possível selecionar lâmpadas adjacentes.

ii)​        1 lâmpada acesa: C5,1 = 5 (outro caso especial de combinação Cn,1 = n). Nesse caso,
            também não há que se falar em lema de Kaplansky, porque quando selecionamos uma
            única lâmpada, também não é possível selecionar lâmpadas adjacentes.
iii)​       2 lâmpadas acesas: agora sim, podemos utilizar o 1º lema de Kaplansky para garantir que
            as 2 lâmpadas selecionadas não sejam adjacentes. Com p = 2 elementos, dentre n = 5
            elementos no total, temos n – p = 5 – 2 = 3 elementos não selecionados e n – p + 1 = 4
            espaços. Desses 4 espaços, devemos escolher p = 2:

                                                         4!      4×3×2!       4×3
                                          𝐶 4,2 = (4−2)!×2! =     2!×2!
                                                                          =    2
                                                                                    = 6

iv)​        3 lâmpadas acesas: conseguimos selecionar 3 lâmpadas não adjacentes de uma única
            forma (SNSNS). De todo modo, vamos utilizar o lema de Kaplansky para chegar a essa
            conclusão. Com p = 3 elementos, dentre n = 5, temos n – p = 5 – 3 = 2 elementos não
            selecionados e n – p + 1 = 3 espaços. Desses 3 espaços, devemos escolher p = 3: C3,3 = 1
            (caso especial de combinação Cn,n = 1).


Como as possibilidades dos eventos de i a iv são excludentes, isto é, temos a possibilidade de i
OU as possibilidades de ii OU as possibilidades de iii OU a possibilidade de iv, então, pelo
princípio aditivo, devemos somar esses resultados: 1 + 5 + 6 + 1 = 13

Gabarito: Certo.

Segundo Lema de Kaplansky

O segundo lema de Kaplansky também trabalha com a seleção de um subconjunto de
elementos, de modo que elementos consecutivos (vizinhos) do conjunto original não sejam
selecionados.
Porém, neste caso, os elementos extremos do conjunto original são considerados consecutivos
(vizinhos). Assim, havendo 𝑛 elementos, os elementos 1 e 𝑛 são considerados vizinhos.
Supondo um conjunto de 8 elementos, os elementos 1 e 8 são consecutivos, como se os
elementos estivessem dispostos em um círculo:

             Receita Federal (Analista Tributário) Estatística                                   82
             www.estrategiaconcursos.com.br                                                      183

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Exemplos desse tipo de situação são os dias da semana, de segunda a domingo, ou os meses do
ano, de janeiro a dezembro, etc.

        O 2º lema de Kaplansky, indicado por 𝑔(𝑛, 𝑝), é dado por:

                                                                    𝑛
                                                 𝑔(𝑛, 𝑝) = 𝑛−𝑝 𝐶𝑛−𝑝,𝑝


No caso de 𝑛 = 8, como na figura, se tivermos que selecionar 𝑝 = 3 elementos não
consecutivos:
                                                            8                8
                                           𝑔(8, 3) = 8−3 𝐶8−3,3 = 5 𝐶5,3

                                       8         5!             8       5×4×3!     8     5×4
                          𝑔(8, 3) = 5 × (5−3)!×3! = 5 ×                  2!×3!
                                                                                 = 5 ×    2
                                                                                               = 16

        Vamos entender o raciocínio por trás do 2º lema.

        Com 8 elementos dispostos em um círculo, precisamos separar o problema em 2:
        (i) o elemento 1 é selecionado; e (ii) o elemento 1 não é selecionado (poderíamos
        substituir o elemento 1 por qualquer outro elemento).

        i) Ao selecionarmos o elemento 1, não podemos selecionar os elementos 2 ou 8,
        pois ambos são vizinhos.

        Receita Federal (Analista Tributário) Estatística                                             83
        www.estrategiaconcursos.com.br                                                                183

                                      


---

Equipe Exatas Estratégia Concursos
Aula 05

      Assim, restam os elementos 3 a 7 (isto é, 5 elementos), dos quais devemos
      selecionar 2 elementos não consecutivos.

      Observe que os extremos 3 e 7 não são consecutivos.

      Portanto, podemos utilizar o 1º lema de Kaplansky, com um total de n = 5
      elementos, dos quais devemos selecionar p = 2 elementos. Assim, temos n – p =
      3 elementos não selecionados e n – p + 1 = 4 espaços, dos quais devemos
      selecionar p = 2:

                                                          4!      4×3
                                       𝑓(5, 2) = 𝐶4,2 = 2!2! =     2
                                                                         = 6

      ii) Se não selecionarmos o elemento 1, então iremos selecionar 3 elementos não
      consecutivos, dentre os elementos 2 a 8.

      Novamente, os extremos 2 e 8 não são consecutivos.

      Então, utilizamos o 1º lema de Kaplansky, com n = 7 elementos e p = 3, ou seja,
      n – p = 4 elementos não selecionados e n – p + 1 = 5 espaços:

                                                          5!      5×4
                                      𝑓(7, 3) = 𝐶5,3 = 2!3! =      2
                                                                        = 10

      Como as possibilidades de i e ii são excludentes, ou seja, temos as 6
      possibilidades de i OU as 10 possibilidades de ii, pelo princípio aditivo, temos:

                                                    6 + 10 = 16

      Esse é o resultado que obtivemos pela fórmula do 2º lema de Kaplansky!

      Receita Federal (Analista Tributário) Estatística                                   84
      www.estrategiaconcursos.com.br                                                      183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

(2018 – Câmara de Cambé/PR) Um auxiliar administrativo vai organizar um calendário para a
supervisão de uma praça de 2ª feira até domingo. Essa praça tem que ser supervisionada
exatamente duas vezes por semana e nos mesmos dias de cada semana. A praça nunca deve ser
supervisionada dois dias consecutivos. Assinale a alternativa que apresenta, corretamente, o
número de possibilidades diferentes que o auxiliar administrativo tem para organizar esse
calendário.

a) 14

b) 16

c) 18

d) 24

e) 28

Comentários:

Temos um exemplo do segundo lema de Kaplansky, pois engloba todos os dias da semana
(domingo e segunda-feira são consecutivos). Assim, temos n = 7, p = 2:

                                                                 𝑛
                                                 𝑔(𝑛, 𝑝) = 𝑛−𝑝 𝐶𝑛−𝑝,𝑝

                                                                     7
                                                   𝑔(7, 2) = 5 𝐶5,2

                                                   7        5!           7   5×4
                                      𝑔(7, 2) = 5 × 3!2! = 5 ×                2
                                                                                   = 14

Caso não lembre essa fórmula, podemos dividir a resolução desse problema em duas situações.

i) A segunda-feira é selecionada. Assim, restarão os dias de quarta a sábado (4 dias) para
selecionar 1 dia. Usando o 1º lema de Kaplansky, com n = 4 e p = 1, temos n – p = 3 dias não
selecionados e n – p + 1 = 4 espaços, dos quais devemos selecionar 1:

                                                  𝑓(4, 1) = 𝐶4,1 = 4

        Receita Federal (Analista Tributário) Estatística                                 85
        www.estrategiaconcursos.com.br                                                    183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

ii) A segunda-feira não é selecionada. Assim, restarão os dias de terça a domingo (6 dias) para
selecionar 2 dias. Usando o 1º lema de Kaplansky, com n = 6 e p = 2, temos n – p = 4 dias não
selecionados e n – p + 1 = 5 espaços, dos quais devemos selecionar 2:

                                                                5!    5×4
                                        𝑓(6, 2) = 𝐶5,2 = 2!3! =        2
                                                                            = 10

Como são situações excludentes (ou seja, alternativas), pelo princípio da adição devemos somar
os resultados:

                                  𝑔(7, 2) = 𝑓(4, 1) + 𝑓(6, 2) = 4 + 10 = 14

Gabarito: A

Resumo da Aula

Princípios de Contagem

   ●​ Princípio Multiplicativo (multiplicação): Eventos concomitantes (ocorre um E outro)
   ●​ Princípio Aditivo (soma): Eventos mutuamente exclusivos (ocorre um OU outro)
   ●​ Princípio do Pombo: Considerar o pior cenário para garantir a situação desejada

Fatorial: produto de um número com todos os números menores que ele:

                                             𝑛! = 𝑛×(𝑛 − 1)×…×2×1

Permutação – reordenação de elementos

   ●​ Permutação simples: Número de maneiras de reordenar elementos distintos:

                                                        𝑃𝑛 = 𝑛!

   ●​ Permutação com repetição: Número de maneiras de reordenar 𝑛 elementos, dos quais 𝑘
      elementos são repetidos:

                                                            𝑘    𝑛!
                                                        𝑃𝑛 = 𝑘!

   ●​ Permutação circular: Número de maneiras de reordenar elementos dispostos em círculo:

                                                   𝑃𝐶𝑛 = (𝑛 − 1)!

   ●​ Permutação com elementos ordenados: reordenação de 𝑛 elementos, dos quais 𝑘
      elementos devem respeitar uma ordem específica, não necessariamente consecutivos:

        Receita Federal (Analista Tributário) Estatística                                    86
        www.estrategiaconcursos.com.br                                                       183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                        𝑃𝑛         𝑛!
                                                            𝑃𝑘
                                                                 = 𝑘!

   ●​ Permutação caótica: número de maneiras de reordenar elementos, de modo nenhum
      deles retorne para a sua posição original:
                                                                                    𝑛
                                            1    1    1    1       (−1)
                               𝐷𝑛 = 𝑛! ×⎡⎢+ 0! − 1! + 2! − 3! + … + 𝑛! ⎤⎥
                                         ⎣                              ⎦

Arranjo – seleção de elementos com importância de ordem

   ●​ Arranjo sem repetição: Número de maneiras de sortear, sem repetição 𝑘 elementos,
      dentre 𝑛, de modo que a ordem do sorteio importe:

                                                                    𝑛!
                                                     𝐴𝑛,𝑘 = (𝑛−𝑘)!

   ●​ Arranjo com repetição: Número de maneiras de sortear, permitindo-se a repetição, 𝑘
      elementos, dentre 𝑛, de modo que a ordem do sorteio importe:

                                                                     𝑘
                                                       𝐴𝑛,𝑘 = 𝑛

Combinação – seleção de elementos sem importância de ordem

   ●​ Combinação simples: Número de maneiras de sortear, sem repetição, 𝑘 elementos, dentre
      𝑛, de modo que a ordem do sorteio não importe:

                                                                    𝑛!
                                                     𝐶𝑛,𝑘 = (𝑛−𝑘)!𝑘!

   ●​ Combinação completa: Número de maneiras de sortear, sem importância de ordem, 𝑝
      objetos (ex: potes de sorvete), quando há 𝑛 tipos diferentes (ex: marcas de sorvete):

                                                 𝑝      𝑛−1,𝑝            (𝑛−1+𝑝)!
                                             𝐶𝑅𝑛 = 𝑃𝑛−1+𝑝 = (𝑛−1)!×𝑝!

      Esse também é o número de soluções inteiras não-negativas para a equação:

                                               𝑥1 + 𝑥2 + … + 𝑥𝑛 = 𝑝

Partição – separação de elementos em subconjuntos

   ●​ Partição ordenada: Número de maneiras de separar 𝑛 elementos em 𝑚 subconjuntos
      distintos entre si, com 𝑝1, 𝑝2, …, 𝑝𝑚 elementos cada, temos:

        Receita Federal (Analista Tributário) Estatística                                87
        www.estrategiaconcursos.com.br                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                            (𝑛 𝑝1, 𝑝2, …, 𝑝𝑚 ) = 𝑝 !𝑝 𝑛!!…𝑝 !
                                                                       1   2       𝑚

   ●​ Partição não ordenada: Número de maneiras de separar elementos em 𝑚 subconjuntos de
      𝑝 elementos cada (total de 𝑚×𝑝 elementos):

                                                (𝑚×𝑝 𝑝,𝑝,…,𝑝 )       (𝑚×𝑝)!
                                                     𝑚!
                                                                 =             𝑚
                                                                     𝑚!(𝑝!)

Lemas de Kaplansky – seleção de elementos não vizinhos

   ●​ 1º Lema: Número de maneiras de selecionar 𝑝 elementos não vizinhos, dentre 𝑛, em que
      os extremos do conjunto original não são considerados vizinhos: 𝑓(𝑛, 𝑝) = 𝐶𝑛−𝑝+1,𝑝

   ●​ 2º Lema: Número de maneiras de selecionar 𝑝 elementos não vizinhos, dentre 𝑛, em que
                                                                                       𝑛
       os extremos do conjunto original são considerados vizinhos: 𝑔(𝑛, 𝑝) = 𝑛−𝑝 𝐶𝑛−𝑝,𝑝

        Receita Federal (Analista Tributário) Estatística                                    88
        www.estrategiaconcursos.com.br                                                     183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                            QUESTÕES COMENTADAS – FGV

Princípios de Contagem

1.    (FGV/2025 – PC/MG) Um perito criminal precisa analisar um conjunto de quatro amostras coletadas
de uma cena de crime. As amostras incluem os seguintes itens distintos:

   •     cinco fibras de tecido;
   •     três fios de cabelo;
   •     dois fragmentos de vidro; e
   •     uma amostra de solo.

Para realizar a análise, ele precisa escolher exatamente três itens entre as amostras, mas cada item deve
pertencer a uma amostra diferente. O número total de diferentes trios de itens que o perito pode escolher
é

a) 59
b) 60.
c) 61
d) 62.
e) 63.

Comentários:

Como os itens escolhidos devem ser de amostras diferentes, as possibilidades são:
   •     uma fibra de tecido E um fio de cabelo E um fragmento de vidro (que vamos chamar de A). Sabendo
         que há 5 fibras de tecido, 3 fios de cabelo e 2 fragmentos de vidro, o número de maneiras de
         selecionar uma amostra com essas características é o produto (princípio multiplicativo):
                                                 𝑛𝐴 = 5 × 3 × 2 = 30
   •     uma fibra de tecido E um fio de cabelo E uma amostra de solo (que vamos chamar de B). Sabendo
         que há 5 fibras de tecido, 3 fios de cabelo e 1 amostra de solo, o número de maneiras de selecionar
         uma amostra com essas características é o produto (princípio multiplicativo):
                                                 𝑛𝐵 = 5 × 3 × 1 = 15
   •     uma fibra de tecido E um fragmento de vidro E uma amostra de solo (que vamos chamar de C).
         Sabendo que há 5 fibras de tecido, 2 fragmentos de vidro e 1 amostra de solo, o número de maneiras
         de selecionar uma amostra com essas características é o produto (princípio multiplicativo):
                                                 𝑛𝐶 = 5 × 2 × 1 = 10
   •     um fio de cabelo E um fragmento de vidro E uma amostra de solo (que vamos chamar de D). Sabendo
         que há 3 fios de cabelo, 2 fragmentos de vidro e 1 amostra de solo, o número de maneiras de
         selecionar uma amostra com essas características é o produto (princípio multiplicativo):

          Receita Federal (Analista Tributário) Estatística                                              89
          www.estrategiaconcursos.com.br                                                                 183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                         𝑛𝐷 = 3 × 2 × 1 = 6
Considerando que esses cenários são mutuamente excludentes, o número de maneira de selecionar uma
amostra do tipo A OU do tipo B OU do tipo C OU do tipo D é a soma (princípio aditivo):
                                                𝑁 = 30 + 15 + 10 + 6 = 61
Gabarito: C

2.    (FGV/2025 – SEEC/RN) Seis pessoas (A, B, C, D, E e F) devem ser separadas em dois grupos: um
formado por 4 desses indivíduos e o outro com os demais. Por razões particulares, A e B devem ficar em
grupos distintos e, além disso, E e F devem ficar no mesmo grupo.

O número de diferentes formas nas quais esses grupos podem ser constituídos é

a) 3
b) 4.
c) 6
d) 8.
e) 10.

Comentários:

Precisamos separar 6 pessoas em dois grupos, sendo um de 4 e o outro com os outros 2. Se E e F devem ficar
no mesmo grupo e A e B devem ficar em grupos diferentes, então E e F não podem ficar no grupo de 2,
porque isso obrigaria A e B a ficarem no mesmo grupo.
Fixando E e F no grupo grande, podemos escolher A ou B para ficar no grupo grande (2 possibilidades).
Em seguida, devemos escolher mais uma pessoa, dentre as opções C ou D, para ficar no grupo grande
também (2 possibilidades).
Uma vez definido o grupo grande, o grupo pequeno ficará com os demais. Pelo princípio multiplicativo, o
número de possibilidades é:
                                                        𝑛 = 2×2=4
Nesse caso, há tão poucas opções, que podemos identificá-las:
       •   A, C, E, F / B, D
       •   B, C, E, F / A, D
       •   A, D, E, F / B, C
       •   B, D, E, F / A, C
Gabarito: B

            Receita Federal (Analista Tributário) Estatística                                           90
            www.estrategiaconcursos.com.br                                                              183

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 05

3.     (FGV/2025 – TRT-24ª Região) Um palíndromo numérico, ou capicua, é um número que lido de trás
para a frente é igual ao número original. Por exemplo: 121, 35653, 8778, 108801 são palíndromos. Entre
os números de seis algarismos, a quantidade de palíndromos numéricos é igual a

a) 600
b) 900
c) 8.100
d) 18.000
e) 180.000

Comentários:

Para definir um palíndromo de 6 algarismos, precisamos pensar nos 3 primeiros algarismos, pois os outros 3
estarão definidos: o último algarismo deve ser igual ao primeiro; o penúltimo algarismo deve ser igual ao
segundo; e o quarto algarismo deve ser igual ao terceiro.
Para o primeiro algarismo, podemos selecionar qualquer dígito de 1 a 9 (9 possibilidades); para o segundo
algarismo, podemos selecionar qualquer dígito de 0 a 9 (10 possibilidades), uma vez que a repetição é
permitida; para o terceiro algarismo, também podemos selecionar qualquer dígito de 0 a 9 (10
possibilidades).
Pelo princípio multiplicativo, o número de possibilidades é:
                                                  𝑛 = 9 × 10 × 10 = 900
Gabarito: B

4.     (FGV/2025 – PM/SP) Para receber o novo comandante, o 1º Tenente Ramiro deverá organizar, no
pátio do quartel da PM, uma formação retangular com 72 soldados dispostos regularmente em linhas
(horizontais) e colunas (verticais). Sabe-se que essa formação retangular deve ter, no mínimo, três linhas
e, no mínimo, oito colunas.

O número de arrumações diferentes que Ramiro poderá fazer é igual a

a) 2
b) 3.
c) 4
d) 5.
e) 6.

Comentários:

           Receita Federal (Analista Tributário) Estatística                                           91
           www.estrategiaconcursos.com.br                                                              183

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 05

Para formar retângulos exatos com 72 soldados, precisamos que o número de linhas vezes o número de
colunas seja igual a 72. Por isso, precisamos pensar nos divisores de 72, quais sejam
                                       𝐷72 = {1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72}
O enunciado informa que a formação deve ter no mínimo 3 linhas e, no mínimo 8 colunas (ou seja, no máximo
9 linhas). Assim, a formação pode ter 3, 4, 6, 8 ou 9 linhas, o que corresponde a 5 arrumações possíveis.
Gabarito: D

5.       (FGV/2022 – TRT/MA) Em um jogo, as peças têm a forma abaixo, formada por 6 quadradinhos.

Na primeira fase do jogo, as peças devem ter exatamente 2 quadradinhos pretos e os outros brancos, mas
os dois quadradinhos pretos não podem ser vizinhos, ou seja, não podem ter um lado em comum. O
número de peças diferentes na primeira fase desse jogo é

a) 9.
b) 10.
c) 12.
d) 14.
e) 16.

Comentários:

Precisamos encontrar o número de peças diferentes com 2 quadradinhos pretos e 4 brancos, de modo que
os quadradinhos pretos não sejam vizinhos. Se um dos quadrados de cima seja preto, restarão 3
possibilidades para o outro quadrado preto:


                                                               P   B
                                                               B


Caso o outro quadrado de cima seja preto, o número de possibilidades é o mesmo. Logo, o número de peças
diferentes com um quadrado preto em cima é (princípio aditivo):
                                                           3+3=6
Se ambos os quadrados de cima forem brancos, os quadrados inferiores terão as seguintes possibilidades:

           Receita Federal (Analista Tributário) Estatística                                          92
           www.estrategiaconcursos.com.br                                                             183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

i) PBPB
ii) BPBP
iii) PBBP
O número total de peças diferentes é (princípio aditivo):
                                                             6+3=9

Gabarito: A

6.    (FGV/2022 – Câmara Taubaté/SP) Utilizando apenas os elementos do conjunto {0, 1, 2, 3, 4, 5} a
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
                                                         4           3


Para a escolha do segundo algarismo, restarão 4 possibilidades, uma vez que o número 0 pode ser escolhido
para essa posição:
                                                         4      4    3

            Receita Federal (Analista Tributário) Estatística                                             93
            www.estrategiaconcursos.com.br                                                               183

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Pelo princípio multiplicativo, o número total de maneiras de formar um número nessas condições é o
produto:
                                                     4 × 4 × 3 = 48
Gabarito: C

7.    (FGV/2022 – SEMSA Manaus) Cada quadradinho da figura a seguir contém um algarismo do
conjunto {1, 2, 3, 4, 5} que juntos formam, em sequência, a senha que abre um cofre.

O primeiro quadradinho (o da esquerda) só aceita algarismo ímpar e os outros dois só aceitam algarismos
pares, distintos ou não.

O número de senhas diferentes possíveis é

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

         Receita Federal (Analista Tributário) Estatística                                            94
         www.estrategiaconcursos.com.br                                                               183

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 05

8.     (FGV/2022 – MPE/GO) No código Morse, as “letras” são · e – (ponto e traço). Certa instrução é
formada por “símbolos” e cada símbolo é formado por uma sequência de duas, três ou quatro letras do
código Morse. Por exemplo, “– · –” e “– – ·” são símbolos diferentes.

O número de símbolos diferentes que essa instrução possui é

a) 18.
b) 20.
c) 24.
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

9.       (FGV/2022 – Senado Federal) Determine quantos retângulos existem na figura a seguir.

           Receita Federal (Analista Tributário) Estatística                                        95
           www.estrategiaconcursos.com.br                                                           183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 70
b) 90
c) 110
d) 130
e) 150

Comentários:

Precisamos encontrar o número total de retângulos que podem ser formados.
Vamos considerar que o menor retângulo que pode ser formado possui 1 medida na horizontal e 1 medida
na vertical, como ilustrado a seguir:

Considerando que há 5 desses retângulos na horizontal, então os retângulos podem apresentar 1, 2, 3, 4 ou
5 medidas na horizontal:

   •     há 5 possibilidades com 1 medida;
                                               1       2       3       4       5

   •     há 4 possibilidades com 2 medidas;
                                                           2               4
                                                   1               3

          Receita Federal (Analista Tributário) Estatística                                           96
          www.estrategiaconcursos.com.br                                                              183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

   •   há 3 possibilidades com 3 medidas;

                                                                     3
                                                             2
                                                     1

   •   há 2 possibilidades com 4 medidas; e
                                                                 2
                                                         1

   •   há 1 possibilidade com 5 medidas.
                                                             1

Considerando que os eventos são mutuamente exclusivos, o número total de possibilidades de escolher uma
medida na horizontal para formar um retângulo é a soma (princípio aditivo):
                                                 5 + 4 + 3 + 2 + 1 = 15


Considerando que há 4 retângulos mínimos na vertical, então os retângulos podem apresentar 1, 2, 3 ou 4
medidas na vertical:

   •   há 4 possibilidades com 1 medida;

        Receita Federal (Analista Tributário) Estatística                                           97
        www.estrategiaconcursos.com.br                                                              183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                           1
                                           2
                                           3

                                           4

      •   há 3 possibilidades com 2 medidas;

                                           1
                                      2

                                           3

      •   há 2 possibilidades com 3 medidas; e


                                           1

                                       2

      •   1 possibilidades com 4 medidas.

                                           1

Considerando que os eventos são mutuamente exclusivos, o número total de possibilidades de escolher uma
medida na vertical para formar um retângulo é a soma (princípio aditivo):
                                                      4 + 3 + 2 + 1 = 10
Considerando que a escolha de uma medida na horizontal e na vertical são eventos concomitantes, o número
total de maneiras de formar um retângulo é o produto (princípio multiplicativo):
                                                        15 x 10 = 150
Gabarito: E

10.       (FGV/2021 – Pref. Paulínia) Dois dados comuns, um azul e outro vermelho, são lançados. Sejam:

           Receita Federal (Analista Tributário) Estatística                                          98
           www.estrategiaconcursos.com.br                                                             183

                                           


---

   Equipe Exatas Estratégia Concursos
   Aula 05

    •   x, o número de maneiras diferentes de se obter soma 3;
    •   y, o número de maneiras diferentes de se obter soma 6;
    •   z, o número de maneiras diferentes de se obter soma 9.

É correto afirmar que:

a) x < y < z

b) x = y = z

c) x = y < z

d) x < z < y

e) z < y < x

Comentários:

Para que a soma de dois dados seja igual a 3, é necessário termos 1 em um dado e 2 no outro dado. Como
podemos ter 1 - azul e 2 - vermelho ou o contrário, há 2 possibilidades de obtermos a soma 3:
                                                             x=2
Para que a soma seja igual a 6, o primeiro dado pode apresentar qualquer resultado de 1 a 5, enquanto o
segundo dado apresenta o complemento para formar 6. Ou seja, podemos ter 1 e 5, 2 e 4, 3 e 3, 4 e 2, 5 e 1.
Portanto, há 5 possibilidades de obtermos a soma 6:
                                                             y=5
Por fim, para que a soma seja 9, o primeiro dado pode obter qualquer resultado de 3 a 6, enquanto o segundo
dado apresenta o complemento para formar 9. Ou seja, podemos ter 3 e 6, 4 e 5, 5 e 4, 6 e 3. Logo, há 4
possibilidades:
                                                             z=4
Portanto, temos x < z < y.
Gabarito: D

11.    (FGV/2021 – IMBEL) Três dados, um vermelho, um azul e um amarelo, são lançados. O número de
possibilidades de que a soma dos três números sorteados seja igual a 7 é

a) 15

b) 14

c) 13

         Receita Federal (Analista Tributário) Estatística                                              99
         www.estrategiaconcursos.com.br                                                                 183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 12

e) 10

Comentários:

Para que a soma de três dados seja igual a 7, temos os seguintes resultados possíveis, desconsiderando-se
inicialmente a ordem:
   •      5/1/1
   •      4/2/1
   •      3/3/1
   •      3/2/2
Em relação ao primeiro resultado, há 3 possibilidades de escolher qual dado apresentará a face 5. Uma vez
escolhido esse dado, os demais necessariamente apresentarão a face 1.
Em relação ao segundo resultado, há 3 possibilidades de escolher o dado que apresentará a face 4; e, em
seguida, haverá 2 possibilidades de escolher o dado que apresentará a face 2. Após a escolha desses dois
dados, o último dado necessariamente apresentará a face 1. Pelo princípio multiplicativo, há 3 x 2 = 6
possibilidades de obtermos o segundo resultado.
Em relação ao terceiro resultado, há 3 possibilidades de escolher qual dado apresentará a face 1, enquanto
os demais necessariamente apresentarão a face 3.
Por fim, em relação ao quarto resultado, há 3 possibilidades de escolher o dado que apresentará a face 3,
enquanto os demais necessariamente apresentarão a face 2.
Como são possibilidades mutuamente excludentes, o número total de possibilidades corresponde à soma
(princípio aditivo):
                                                     3 + 6 + 3 + 3 = 15
Gabarito: A

12.     (FGV/2021 – IMBEL) Uma empresa solicita a seus funcionários que cadastrem uma senha de 4
dígitos (algarismos de 0 a 9) com a condição de que essa senha não contenha três dígitos iguais juntos. O
número de senhas possível é

a) 9760

b) 9780

c) 9800

d) 9810

e) 9820

          Receita Federal (Analista Tributário) Estatística                                            100
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

A questão informa que a senha precisa ser de 4 dígitos, mas não pode haver 3 dígitos iguais juntos. Primeiro,
vamos formar a senha, desconsiderando-se qualquer restrição, sabendo que há 10 algarismos possíveis (de
0 a 9) para cada dígito:
                                                    10 10 10 10

Pelo princípio multiplicativo, o total de senhas possíveis é:
                                               10 x 10 x 10 x 10 = 10.000
Agora, vejamos as senhas que não atendem à condição indicada. Supondo que um algarismo será repetido
3 vezes e que haverá um algarismo diferente para formar a senha de 4 dígitos, há 10 possibilidades para
escolher o algarismo que será repetido e 9 possibilidades para escolher o algarismo diferente.
Ademais, os algarismos repetidos podem ocupar as três posições iniciais da senha (A A A X) ou as três
posições finais da senha (X A A A). Assim, para cada possibilidade de escolher o algarismo repetido e o
algarismo diferente, há 2 maneiras de organizá-los.
Pelo princípio multiplicativo, o número de senhas que podem ser formadas com um algarismo repetido 3
vezes e um algarismo diferente é:
                                                     10 x 9 x 2 = 180
Também temos que remover os casos em que todos os algarismos são iguais, pois neste caso também haverá
3 algarismos iguais juntos, o que não é permitido. Nessa situação, há 10 possibilidades para a escolha do
único algarismo da senha. Assim, o número de senhas que não apresentam 3 algarismos iguais juntos é:
                                               10.000 - 180 - 10 = 9.810
Gabarito: D

13.    (FGV/2018 – SASDH/RJ) Uma urna D contém 6 bolas numeradas de 3 a 8 e uma urna U contém 7
bolas numeradas de 2 a 8. Um número de dois algarismos será formado retirando uma bola da urna D e
uma bola da urna U, cujos números serão, respectivamente, o algarismo das dezenas e o algarismo das
unidades. A quantidade de números pares que poderão ser formados dessa maneira é

a) 42.

b) 36.

c) 24.

d) 20.

e) 16.

         Receita Federal (Analista Tributário) Estatística                                               101
         www.estrategiaconcursos.com.br                                                                  183

                                       


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

14.    (FGV/2018 – ALE/RO) Em um circuito elétrico há 4 disjuntores que podem ficar, cada um deles,
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

         Receita Federal (Analista Tributário) Estatística                                            102
         www.estrategiaconcursos.com.br                                                               183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

15.    (FGV/2018 – ALE-RO) O presidente e o vice-presidente de uma comissão serão escolhidos entre os
10 deputados do Partido X e os 6 deputados do Partido Y. Os Partidos acordaram que os dois cargos não
poderão ser ocupados por deputados de um mesmo Partido. O número de maneiras diferentes de se
escolher o presidente e o vice-presidente dessa comissão, é

a) 16
b) 32
c) 60
d) 64
e) 120
Comentários:
Se o presidente for do Partido X, haverá 10 possibilidades para o presidente, e 6 possibilidades para escolher
o vice-presidente, dentre os membros do Partido Y.
Analogamente, se o presidente for do Partido Y, haverá 6 possibilidades para o presidente, e 10
possibilidades para o vice-presidente, dentre os membros do Partido X.
Por serem opções alternativas, pelo princípio aditivo, o número de possibilidades no total é:
                                                       60 + 60 = 120
Gabarito: E

16.    (FGV/2018 – ALE-RO) Manoel possui tintas de 5 cores diferentes e deve pintar a bandeira abaixo
de forma que:

   •      cada região será pintada com uma única cor.
   •      duas regiões vizinhas não podem ter a mesma cor.

O número de maneiras diferentes que Manoel pode pintar essa bandeira é

a) 120.
b) 180.
c) 240.
d) 360.
e) 720.

          Receita Federal (Analista Tributário) Estatística                                               103
          www.estrategiaconcursos.com.br                                                                  183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

Vamos representar as regiões da bandeira por números para facilitar a referência.

                                                                    2
                                                     1
                                                                    3
                                                             4
                                                             5

É importante que a ordem da escolha das cores importa.
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

17.    (FGV/2017 – Prefeitura de Salvador/BA) Cinco pessoas de diferentes alturas devem ocupar as cinco
cadeiras abaixo para uma fotografia.

O fotógrafo pediu que nem o mais baixo nem o mais alto ocupassem as cadeiras das extremidades.
Respeitando essa condição, o número de maneiras como as pessoas podem se posicionar para a fotografia
é:

a) 12.

b) 18.

         Receita Federal (Analista Tributário) Estatística                                               104
         www.estrategiaconcursos.com.br                                                                  183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

c) 24.

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

18.    (FGV/2016 – MP-RJ) Para organizar um horário de atendimento, em três dias da semana, pela
manhã e à tarde, deve-se colocar duas letras A, duas letras B e duas letras C nas casas vazias da tabela
abaixo, com a condição de que, em cada coluna, não apareçam letras iguais.

O número de maneiras diferentes de preencher essa tabela é:

a) 12.
b) 24.
c) 36.
d) 48.
e) 64.

         Receita Federal (Analista Tributário) Estatística                                           105
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

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


                                                                               𝒙    𝟑
19.      (FGV/2016 – MPE/RJ) Sejam x e y números inteiros positivos tais que 𝟏𝟔 = 𝒚. O número de pares
ordenados diferentes (x,y) que podem ser formados é:

a) 16.
b) 14.
c) 12.
d) 10.
e) 8.
Comentários:
Vamos primeiro reorganizar a equação:
                                                              𝑥   3
                                                                =
                                                              16 𝑦
                                                     𝑥. 𝑦 = 3.16 = 48
O número de pares ordenados diferentes (x,y) é igual à quantidade de divisores de 48. Para encontrar esse
resultado, vamos fatorar 48 em números primos:

                                                              48   2
                                                              24   2
                                                              12   2
                                                               6   2
                                                               3   3
                                                               1

          Receita Federal (Analista Tributário) Estatística                                                106
          www.estrategiaconcursos.com.br                                                                   183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                      48 = 24 × 31

Os divisores de 48 são, portanto, descritos como:

                                                     𝑑48 = 2𝑎 × 3𝑏

Há 5 possibilidades para a (0, 1, 2, 3 ou 4) e 2 possibilidades para b (0 ou 1). Logo, a quantidade de divisores
de 48 é:
                                                         5 x 2 = 10
Portanto, há 10 pares ordenados (x,y) diferentes tal que x.y = 48.
Gabarito: D

20.     (FGV/2015 – SEE-PE) O professor Joel vai de sua casa para a escola, de segunda à sexta-feira, de
ônibus (O) ou de metrô (M) e, em cada semana, utiliza pelo menos uma vez, cada um desses dois
transportes. Joel anota, a cada semana, a ordem dos transportes que utilizou. Por exemplo, OOMOM
significa que ele usou o ônibus na segunda, terça e quinta-feira e o metrô nos outros dois dias. O número
de sequências diferentes que Joel pode utilizar os dois transportes em uma semana é

a) 10.

b) 14.

c) 20.

d) 30.

e) 32.

Comentários:

Todos os dias, Joel possui 2 opções de transporte, ônibus (O) ou metrô (M). Considerando apenas isso, o
número de sequências diferentes para os 5 dias da semana seria:
                                                  2 x 2 x 2 x 2 x 2 = 32
Porém, ele utiliza ônibus ou metrô pelo menos uma vez na semana. Logo, precisamos excluir a possibilidade
OOOOO, em que Joel utiliza somente ônibus, e MMMMM, em que Joel utiliza somente metrô:
                                                        32 – 2 = 30
Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                                  107
         www.estrategiaconcursos.com.br                                                                     183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

21.    (FGV/2015 – SEE-PE) Regina vai sortear uma menina e um menino entre os estudantes de uma de
suas turmas para serem os representantes da turma. Nessa turma há 10 meninas e 12 meninos. O número
de duplas diferentes possíveis para representantes da turma é

a) 22
b) 60
c) 72
d) 110
e) 120
Comentários:
Considerando que será escolhida 1 menina, dentre 10, e 1 menino, dentre 12, então, pelo princípio
multiplicativo, o número de maneiras de formar a dupla é:     ==219a34==

                                                       10 x 12 = 120
Gabarito: E

22.    (FGV/2015 – SSP-AM) Uma urna A contém cinco bolas numeradas com os números 1, 3, 5, 7 e 9.
Uma urna B também contém cinco bolas, mas numeradas com os números 0, 2, 4, 6 e 8. Retira-se,
aleatoriamente, uma bola de cada urna e somam-se os números das duas bolas. O número de valores
diferentes possíveis para essa soma é:

a) 25
b) 21
c) 17
d) 13
e) 9
Comentários:
Conforme o enunciado, temos:
   •     A: {1, 3, 5, 7, 9}
   •     B: {0, 2, 4, 6, 8}
Vamos supor que escolhemos a bola de número 1 da urna A. Sendo assim, há 5 valores distintos que podem
ser obtidos com essa bola, quais sejam:
   •     1+0=1
   •     1+2=3
   •     1+4=5
   •     1+6=7
   •     1+8=9

          Receita Federal (Analista Tributário) Estatística                                        108
          www.estrategiaconcursos.com.br                                                           183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Se, em vez de 1, a bola fosse a de número 3, o único somatório diferente que poderia ser formado seria:
    •      3 + 8 = 11.
Podemos aplicar o mesmo raciocínio para as demais bolas da urna A:
    •      5 + 8 = 13
    •      7 + 8 = 15
    •      9 + 8 = 17
Logo, o número total de somatórios distintos é 9.
Gabarito: E

23.  (FGV/2015 – DPE-RO) Considere todas as placas de veículos desde NCD-4000 até NCD-9999. O
número de placas que possuem os dígitos todos diferentes é:

a) 2520.
b) 3024.
c) 3528.
d) 3786.
e) 4032.
Comentários:
As letras são iguais, então nos concentramos nos 4 algarismos:

Para o primeiro algarismo, há 6 opções ({4, 5, 6, 7, 8, 9}):

                                                6

Após escolher o 1º algarismo, restarão 9 possibilidades distintas para o 2º algarismo:

                                                    6        9

Para o 3º algarismo, restarão 8 possibilidades; e, para o 4º algarismo, restarão 7:

                                                    6       9       8      7

Pelo princípio multiplicativo, o número de possibilidades é:
                                                        6 x 9 x 8 x 7 = 3.024
Gabarito: B

           Receita Federal (Analista Tributário) Estatística                                              109
           www.estrategiaconcursos.com.br                                                                 183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

24.     (FGV/2015 – Ministério das Relações Exteriores) André, Beatriz e Carlos são adultos, Laura e Júlio
são crianças e todos vão viajar em um automóvel com 5 lugares, sendo 2 na frente e 3 atrás. Dos adultos,
somente Carlos não sabe dirigir. As crianças viajarão atrás, mas Júlio faz questão de ficar em uma janela.
O número de maneiras diferentes pelas quais essas pessoas podem ocupar os cinco lugares do automóvel
é:

a) 12.
b) 16.
c) 18.
d) 20.
e) 24.
Comentários:
O enunciado informa que, no carro, há 5 lugares, como ilustrado a seguir:

O enunciado informa que Júlio, que é criança, se sentará em uma das 2 janelas detrás (2 possibilidades):
                                                 Júlio: 2 possibilidades
Laura, que também é criança, se sentará atrás. Logo, após a escolha do assento de Júlio, restarão 2
possibilidades para Laura:
                                                 Laura: 2 possibilidades
Carlos, que é adulto, não dirige. Logo, após a escolha das crianças, restará, para Carlos, um lugar atrás e outro
na frente à direita:
                                                Carlos: 2 possibilidades
Restarão 2 lugares para André e Beatriz (um será motorista e o outro não). Logo, há 2 possibilidades para os
dois escolherem os seus assentos:
                                           André e Beatriz: 2 possibilidades
Pelo princípio multiplicativo, o número de possibilidades de todos se sentarem é o produto:
                                                    2 x 2 x 2 x 2 = 16
Gabarito: B

         Receita Federal (Analista Tributário) Estatística                                                   110
         www.estrategiaconcursos.com.br                                                                      183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

25.    (FGV/2015 – PGE/RO) Quatro processos, numerados de 1 a 4, deverão ser distribuídos entre três
procuradores: Átila, Hércules e Ulisses. Um mesmo procurador pode receber até quatro processos, exceto
o procurador Átila, que não pode receber o processo número 2.

O número de maneiras diferentes de se fazer tal distribuição é:

a) 81;

b) 64;

c) 54;

d) 11;

e) 8.

Comentários:

Considerando que cada um dos 3 procuradores pode receber de zero até todos os processos, exceto Átila,
que não poderá receber o processo 2, então há:

    •    3 procuradores que podem analisar o processo 1;
    •    2 procuradores que podem analisar o processo 2;
    •    3 procuradores que podem analisar o processo 3; e
    •    3 procuradores que podem analisar o processo 4.

Pelo princípio multiplicativo, temos: 3 x 2 x 3 x 3 = 54

Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                         111
         www.estrategiaconcursos.com.br                                                            183

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 05

                             QUESTÕES COMENTADAS – FGV

Permutação

1.       (FGV/2025 – TCE/RR) Considere as 5 letras da sigla TCERR.

O número de maneiras distintas de escrever essas 5 letras em sequência de modo que as duas letras R não
fiquem juntas é

a) 60
b) 48.
c) 36
d) 24.
e) 12.

Comentários:

Para calcular o número de maneiras de ordenar as 5 letras TCERR, de modo que os dois R´s não fiquem
juntos, vamos calcular o número total de maneiras de ordenar as 5 letras e subtrair o número de maneiras
de maneiras que não atendem à restrição.
O número de maneiras de ordenar as 5 letras, sabendo que 2 delas são repetidas, corresponde à permutação
de 5 elementos, com repetição de 2:
                                              5! 5 × 4 × 3 × 2!
                                      𝑃52 =      =              = 5 × 4 × 3 = 60
                                              2!       2!
Agora, precisamos calcular o número de maneiras de ordenar as letras, de modo que os dois R´s fiquem
juntos. Para isso, devemos considerar os dois R´s como um único elemento e permutar os 4 elementos (T. C.
E, RR):
                                               𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
E o número de possibilidades que atendem à restrição é a diferença:
                                                     𝑛 = 60 − 24 = 36
Gabarito: C

2.     (FGV/2025 – TCE/RR) Os meninos Bruno e Luís, e as meninas Olívia e Ana formam uma fila na
seguinte ordem: Bruno, Olívia, Luís, Ana. Uma nova fila deverá ser formada de forma que nenhum dos dois
meninos ocupe o lugar em que estava antes.

O número de novas filas possíveis é

           Receita Federal (Analista Tributário) Estatística                                          112
           www.estrategiaconcursos.com.br                                                             183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 10
b) 12.
c) 14
d) 16.
e) 18.

Comentários:

Para calcular o número de maneiras de ordenar as 4 pessoas, de modo que os 2 meninos não ocupem o
mesmo lugar de antes, vamos calcular o número total de maneiras de ordenar as 4 pessoas e subtrair o
número de maneiras de maneiras que não atendem à restrição.
Para ordenar a 4 pessoas, sem qualquer restrição, temos a permutação de 4 elementos:
                                            𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Agora, vamos calcular o número de maneiras de ordenar os 4 elementos, de modo que Bruno fique na
mesma posição. Para isso, temos uma permutação das outras 3 pessoas:
                                               𝑃3 = 3! = 3 × 2 × 1 = 6
Similarmente, o número de maneiras de ordenar os 4 elementos, de modo que Luís fique na mesma posição,
corresponde a uma permutação dos outros 3 elementos:
                                               𝑃3 = 3! = 3 × 2 × 1 = 6
Agora, devemos pensar na interseção entre esses cenários, para que ela não seja contada em duplicidade. O
número de maneiras de ordenar os 4 elementos, de modo que Bruno E Luís fiquem na mesma posição,
corresponde a uma permutação dos outros 2 elementos:
                                                       𝑃2 = 2! = 2
Portanto, o número de casos que não atendem à restrição é:
                                                𝑛𝑛ã𝑜 = 6 + 6 − 2 = 10
E o número de maneiras de ordenar os 4 elementos, atendendo à restrição, é a diferença:
                                                   𝑛 = 24 − 10 = 14
Gabarito: C

3.    (FGV/2022 – MPE/SC) Quatro casais foram ao cinema e vão sentar em 8 cadeiras consecutivas em
uma mesma fileira. O número de maneiras distintas de os 4 casais se sentarem nas 8 cadeiras, de modo
que cada mulher se sente ao lado de seu marido, é:

a) 24
b) 96

         Receita Federal (Analista Tributário) Estatística                                            113
         www.estrategiaconcursos.com.br                                                               183

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

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
                                                             ==219a34==

                                           𝑛 = 24 × 2 × 2 × 2 × 2 = 384
Gabarito: D

4.     (FGV/2022 – Câmara Taubaté/SP) Três meninos e duas meninas vão posar para uma fotografia e o
fotógrafo sugere que eles fiquem em fila, em qualquer ordem, mas de modo que fique um menino em
cada extremidade da fila. O número de maneiras diferentes que eles as 5 crianças podem posar para a
fotografia é

a) 6.
b) 12.
c) 24.
d) 36.
e) 48.

Comentários:

A questão pede o número de maneiras de organizar 5 crianças em uma fila, sendo 3 meninos e 2 meninas,
de modo que as extremidades sejam ocupadas por meninos. Assim, temos 3 possibilidades para a 1ª posição
e 2 possibilidades para a última posição:
                                                3                         2
Para organizar as outras 3 crianças nas três posições restantes, calculamos a permutação de 3 elementos:
                                               𝑃3 = 3! = 3 × 2 × 1 = 6
Pelo princípio multiplicativo, o número de maneiras de reordenar todas as 5 crianças é o produto:
                                                     3 × 2 × 6 = 36
Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                             114
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

5.    (FGV/2022 – MPE/GO) Uma mesa retangular está encostada em uma parede, possui dois lugares
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
4 possibilidades para Alberto sentar-se. Em seguida, restarão 4 amigos que podem se sentar em quaisquer
das 4 cadeiras restantes. Assim, temos a permutação de 4 elementos:
                                             𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Pelo princípio multiplicativo, o número de maneiras de Alberto e seus amigos se sentarem é o produto:
                                                     𝑛 = 4 × 24 = 96
Gabarito: D

6.      (FGV/2022 – SEAD/AP) Arnaldo tem 3 livros de Química, 4 de Física e 2 de Matemática, todos
diferentes entre si e deseja arrumá-los em uma prateleira de modo que os livros de Química fiquem juntos
e os de Física também. O número de maneiras distintas de Arnaldo arrumar os seus livros na prateleira é
igual a

a) 288
b) 576
c) 1152
d) 3456
e) 6912

          Receita Federal (Analista Tributário) Estatística                                             115
          www.estrategiaconcursos.com.br                                                                183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

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

7.      (FGV/2022 – TJ/TO) Considere as 4 letras da sigla TJTO. O número de maneiras de escrever essas 4
letras em sequência, de modo que as 2 letras T não fiquem juntas, é:

a) 24.
b) 12.
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


         Receita Federal (Analista Tributário) Estatística                                             116
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

A diferença corresponde ao número de anagramas desejado:
                                                      𝑛 = 12 − 6 = 6
Gabarito: D

8.     (FGV/2022 – MPE/SC) O número de anagramas da palavra ASSADO que não têm as 2 letras S juntas
é: [OBS.: Anagramas de uma palavra são as permutações das letras dessa palavra.]

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

9.   (FGV/2022 – SEMSA Manaus) O número de maneiras diferentes de se escrever as 5 letras da sigla
SEMSA sem que as vogais fiquem juntas é igual a

a) 60.
b) 48.

          Receita Federal (Analista Tributário) Estatística                                           117
          www.estrategiaconcursos.com.br                                                              183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

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
                                     𝑃52 =      =              = 5 × 4 × 3 = 60
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
A diferença corresponde ao número de anagramas desejado:
                                                    𝑛 = 60 − 24 = 36
Gabarito: C

10.      (FGV/2022 – Senado Federal) Luciana deseja ir do vértice A ao vértice B da malha abaixo.

Ela pode caminhar em linha reta, indo de baixo para cima ou da esquerda para a direita, ao longo das
linhas da malha. O número de modos diferentes de Luciana realizar o seu trajeto é igual a

          Receita Federal (Analista Tributário) Estatística                                           118
          www.estrategiaconcursos.com.br                                                              183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

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

11.     (FGV/2022 – SEFAZ-ES) Dois casais irão se sentar em 4 cadeiras consecutivas de uma fila de um
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

         Receita Federal (Analista Tributário) Estatística                                              119
         www.estrategiaconcursos.com.br                                                                 183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Agora, vamos organizar os casais. Primeiro, permutamos as pessoas do primeiro casal:
                                                  𝑃2 = 2! = 2 × 1 = 2
Em seguida, permutamos as pessoas do segundo casal:
                                                  𝑃2 = 2! = 2 × 1 = 2
Pelo princípio multiplicativo, o número de possibilidades de organizar os casais é: 2 x 2 x 2 = 8.
Gabarito: C

12.   (FGV/2022 – SEFAZ-AM) Um grupo formado por 2 homens e 3 mulheres formará uma fila. Essa fila
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


         Receita Federal (Analista Tributário) Estatística                                           120
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Logo, o número de maneiras de organizar uma fila que se inicia OU termina por um homem é:
                                                   48 + 48 - 12 = 84
Gabarito: C

13.   (FGV/2022 – SSP-AM) Os algarismos 1, 2, 3, 4, 5, devem formar um número de cinco algarismos de
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
Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                             121
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

14.   (FGV/2022 – CGU) O número de anagramas da palavra CONCURSO que começam por C ou
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
Nessa situação, temos a permutação das letras ONCURS nas demais posições. Assim, temos a permutação
de 6 elementos, sem repetição:
                                        𝑃6 = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
Portanto, o número de anagramas que começam com C ou terminam por O é:
                                                 2520 + 2520 - 720 = 4.320
Gabarito: C

15.   (FGV/2021 – BANESTES) Considere a sequência dos 120 anagramas da palavra BANCO escritos em
ordem alfabética. O anagrama CANBO ocupa a posição de número:

a) 50

b) 51

           Receita Federal (Analista Tributário) Estatística                                    122
           www.estrategiaconcursos.com.br                                                       183

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 05

c) 52

d) 53

e) 54

Comentários:

Os anagramas que começam com C são depois de todos os anagramas que começam com A e com B. O
número de anagramas que começam com A é igual à permutação das outras 4 letras:
                                            𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
E o número de anagramas que começam com B também é igual a 24. Ou seja, há 48 anagramas que começam
com A ou B e o primeiro anagrama que começa com a letra C ocupa a posição 49. Assim, os primeiros
anagramas que começam com C e as posições correspondentes são:
   •     49) CABNO
   •     50) CABON
   •     51) CANBO
Logo, o anagrama CANBO ocupa a posição 51.
Gabarito: B

16.   (FGV/2021 – PM-SP) Considere todos os anagramas da palavra BRASIL. O número de anagramas
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

         Receita Federal (Analista Tributário) Estatística                                             123
         www.estrategiaconcursos.com.br                                                                183

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

Para cada uma dessas possibilidades, podemos reorganizar as vogais de 2 maneiras (A-I e I-A). Pelo princípio
multiplicativo, o número de anagramas em que as vogais ficam juntas em qualquer ordem é:
                                                      120 x 2 = 240
E o número de anagramas em que as vogais não estão juntas é a diferença:
                                                     720 - 240 = 480
Gabarito: C

17.      (FGV/2019 – Pref. Angra dos Reis/RJ) O número de filas que pode ser formado com três pessoas, X,
Y e Z, é

a) 2.
b) 3.
c) 4.
d) 5.
e) 6.

Comentários:

O número de filas que podem ser formadas com 3 pessoas corresponde à permutação de 3 elementos:
                                               𝑃3 = 3! = 3 × 2 × 1 = 6
Gabarito: E

18.    (FGV/2017 – Prefeitura de Salvador/BA) Amélia, Bruno, Carla e Diego desejam sentar-se em quatro
cadeiras consecutivas em uma fila do cinema. Entretanto, Carla se recusa a sentar ao lado de Amélia ou
de Bruno. Nessas condições, o número de maneiras de os quatro se sentarem nas quatro cadeiras.

a) 6.
b) 4.
c) 3.
d) 2.
e) 1.

Comentários:

         Receita Federal (Analista Tributário) Estatística                                              124
         www.estrategiaconcursos.com.br                                                                 183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Considerando que há 4 pessoas para se sentarem em uma fila e que Carla não irá sentar ao lado de Amélia
ou Bruno, então Carla terá que se sentar apenas ao lado de Diego. Para isso, terá que ficar em um dos
extremos, conforme ilustrado a seguir:
                                      Carla                  Diego


                                                               Amélia e Bruno
                                                              OU
                                                                Diego   Carla


                                           Amélia e Bruno
Assim, para cada uma dessas 2 opções, temos também a permutação de Amélia e Bruno:
                                                       𝑃2 = 2! = 2
Pelo princípio multiplicativo, o número de maneiras de as 4 pessoas se sentarem é:
                                                         2x2=4
Gabarito: B

19.    (FGV/2015 – Prefeitura de Paulínia/SP) Em um determinado concurso, além das provas escritas, os
candidatos também serão submetidos ao Teste de Aptidão Física. O Teste de Aptidão Física constará de 4
(quatro) testes: T1, T2, T3 e T4. Em cada teste as pontuações possíveis de cada candidato são: 0, 2, 3, 4, 5,
6. A nota final no Teste de Aptidão Física será igual ao somatório das notas obtidas nos 4 (quatro) testes.

O candidato será considerado APTO no Teste de Aptidão Física se, submetido a todos os testes, obtiver o
desempenho mínimo de 2 (dois) pontos em cada teste e o somatório mínimo de 10 (dez) pontos no
conjunto dos testes. Por exemplo, a tabela a seguir mostra uma das maneiras de um candidato ser
considerado APTO, obtendo exatamente o somatório de 10 pontos:

O número de maneiras diferentes de um candidato ser considerado APTO no Teste de Aptidão Física,
obtendo exatamente o somatório de 10 pontos, é:

a) 24;

b) 20;

c) 16;


         Receita Federal (Analista Tributário) Estatística                                               125
         www.estrategiaconcursos.com.br                                                                  183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

d) 10;

e) 8.

Comentários:

Para obter exatamente 10 pontos, sabendo que a pontuação mínima por teste para ser considerado APTO é
2, o candidato poderá obter a nota 2 em 2 testes e 3 nos outros 2 testes ({2,2,3,3} em alguma ordem), como
indicado no enunciado; ou a nota 2 em 3 testes e 4 no outro teste {(2,2,2,4} em alguma ordem).

O número de maneiras de reordenar a primeira opção ({2,2,3,3}) corresponde a uma permutação de 4
elementos com repetição de 2 e 2 elementos:

                                                 4!     4×3×2×1
                                    𝑃42,2 =           =         =3×2=6
                                              2! × 2!     2×2

O número de maneiras de reordenar a segunda opção ({2,2,2,4}) corresponde ao número de posições
possíveis para a nota 4. Como há 4 testes, há 4 possibilidades.

Considerando que são situações mutuamente excludentes (o candidato irá tirar as notas {2,2,3,3} em alguma
ordem OU as notas (2,2,2,4} em alguma ordem), então somamos essas possibilidades (princípio aditivo):

                                                        6 + 4 = 10

Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                             126
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                          QUESTÕES COMENTADAS – FGV

Outros Tipos de Permutação

1.      (FGV/2021 – FUNSAÚDE/CE) Eduardo deseja escrever as 4 letras da palavra RATO de modo que a
letra A esteja à esquerda da letra O. Por exemplo, uma das maneiras de escrevê-las respeitando a restrição
dada é ARTO. O número de maneiras distintas que Eduardo tem para satisfazer o seu desejo é:

a) 24

b) 18

c) 16

d) 12

e) 8

Comentários:

Essa questão trata de permutação com elementos ordenados, em que determinados elementos devem
seguir uma ordem específica, no caso, a letra A deve estar sempre à esquerda da letra O. Nessa situação,
precisamos dividir a permutação de todos os elementos pela permutação dos elementos que devem seguir
uma ordem específica. Como há 4 letras no total, sendo que 2 devem seguir uma ordem específica, temos:
                                        𝑃4 4! 4 × 3 × 2!
                                          = =            = 4 × 3 = 12
                                        𝑃2 2!     2!
Gabarito: D

2.     (FGV/2021 – IMBEL) Considere as cinco letras da sigla IMBEL. Deseja-se arrumar essas cinco letras
em sequência, de modo que tanto as vogais quanto as consoantes apareçam na ordem alfabética, isto é,
as vogais na ordem E, I e as consoantes na ordem B, L, M. Por exemplo, uma dessas arrumações é BELMI.
O número de arrumações diferentes é

a) 18

b) 12

c) 10

d) 8

e) 6

        Receita Federal (Analista Tributário) Estatística                                              127
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

Essa questão também trabalha com elementos ordenados, mas dessa vez, duas vogais devem seguir
determinada ordem e 3 consoantes devem seguir uma ordem também. Assim, dividimos a permutação de
todos os 5 elementos pela permutação das 2 vogais e das 3 consoantes que devem estar em ordem:
                                    𝑃5       5!     5 × 4 × 3!
                                         =        =            = 5 × 2 = 10
                                  𝑃2 × 𝑃3 2! × 3!     2 × 3!
Gabarito: C

3.      (FGV/2021 – IMBEL) Artur, Breno, Caio e Diogo fizeram uma fila nessa ordem para uma fotografia.
Em seguida, o fotógrafo pediu que fizessem uma fila diferente para outra fotografia, de forma que apenas
uma das quatro pessoas ficasse no seu lugar original. Indique o número de maneiras diferentes que a nova
                                                            ==219a34==

fila pode ser feita.

a) 2

b) 4

c) 6

d) 8

e) 10

Comentários:

Essa questão trabalha com a permutação caótica ou desarranjo, em que os elementos não podem retornar
para a sua posição original. O número de possibilidades nessa situação é dado pela seguinte fórmula, em que
os denominadores são os fatoriais de 0 até n e os sinais das frações se alternam, sendo positivo para números
pares e positivos para números ímpares:
                                                 1 1 1 1     (−1)𝑛
                                   𝐷𝑛 = 𝑛! × [     − + − +⋯+       ]
                                                 0! 1! 2! 3!   𝑛!
Das 4 pessoas, 3 não podem voltar ao seu lugar original, logo temos uma permutação caótica de 3 elementos:
                                    1 1 1 1                 1 1
                      𝐷3 = 3! × [     − + − ] = 6 × [1 − 1 + − ] = 3 − 1 = 2
                                    0! 1! 2! 3!             2 6
Esse resultado deve ser multiplicado pelo número de possibilidades de escolher a pessoa que vai continuar
no mesmo lugar (princípio multiplicativo). Como há 4 pessoas, temos:
                                                        2x4=8
Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                                128
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                           QUESTÕES COMENTADAS – FGV

Arranjo e Combinação

1.     (FGV/2025 – TCE/RR) Os números 1, 2, 3 e 4 devem ser colocados cada um em um dos quadradinhos
da figura abaixo (permanecendo dois quadradinhos vazios) de forma que, da esquerda para a direita,
mantenham a ordem crescente.

O número de maneiras diferentes em que os quatro números podem ser colocados da forma descrita
acima é

a) 10
b) 12.
c) 15
d) 20.
e) 30.

Comentários:

Como os 4 números serão colocados em determinada ordem, então o número de maneiras de colocá-los nos
6 quadradinhos corresponde ao número de maneiras de selecionar os 4 quadradinhos, dentre os 6
disponíveis, para colocarmos os números; ou os 2 quadradinhos, dentre os 6, que ficarão vazios (o resultado
é o mesmo).
Para isso, a ordem da escolha não importa. Pensando nos quadradinhos que ficarão vazios, se eu selecionar,
por exemplo, o segundo quadradinho primeiro e o quarto depois, teremos o mesmo resultado de
selecionarmos o quarto quadradinho primeiro e o segundo depois. Em ambos os casos, teremos:

                                            1      X         2   X   3      4

Por isso, para selecionar os 4 quadradinhos para colocarmos os números (ou os 2 para ficarem vazios),
utilizamos a combinação:
                                               6!         6 × 5 × 4! 6 × 5
                                 𝐶6,4 =                 =           =      = 15
                                          (6 − 4)! × 4!     2! × 4!    2
Gabarito: C

2.     (FGV/2023 – SEFAZ/MG) Os carros A, B, C e D ocupam quatro das seis vagas do estacionamento
representado abaixo


         Receita Federal (Analista Tributário) Estatística                                              129
         www.estrategiaconcursos.com.br                                                                 183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                1     2       3   4   5    6

Sabe-se que os carros A e B estão em vagas vizinhas. O número de maneiras diferentes em que os carros
podem estar dispostos nesse estacionamento é igual a

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

3.     (FGV/2022 – PC/RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos para
um treinamento especial. O número de pares diferentes de policiais que podem ser enviados para o
treinamento especial é:

a) 10.

b) 12.

c) 15.

          Receita Federal (Analista Tributário) Estatística                                                 130
          www.estrategiaconcursos.com.br                                                                    183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

d) 16.

e) 18.

Comentários:

Para calcular o número de maneiras de escolher 2 policiais, dentre 6, sem que a ordem importe, uma vez
que os escolhidos terão o mesmo destino, utilizamos a combinação:
                                               6!         6 × 5 × 4!
                                 𝐶6,2 =                 =            = 3 × 5 = 15
                                          (6 − 2)! × 2!     4! × 2
Gabarito: C

4.     (FGV/2022 – SEMSA Manaus) Um conjunto é formado por peças de mesma forma e tamanho da
que está abaixo. Cada peça tem bolinhas nos vértices e uma no interior.

As peças do conjunto são todas diferentes entre si, pois em cada uma, duas bolinhas são pretas e as demais
brancas, como mostra o exemplo a seguir.

O número máximo de peças desse conjunto é

a) 8.
b) 9.
c) 10.
d) 16.
e) 20.

Comentários:

As peças se diferenciam pela localização das duas bolinhas pretas, sendo as outras três bolinhas brancas.
Assim, o número de peças corresponde ao número de maneiras de selecionar 2 bolinhas, dentre as 5, para
serem pretas, uma vez que as demais serão necessariamente brancas.
Considerando que a ordem dessa escolha não importa, temos a combinação de 2 elementos, dentre 5:


         Receita Federal (Analista Tributário) Estatística                                             131
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                               5!         5 × 4 × 3!
                                 𝐶5,2 =                 =            = 5 × 2 = 10
                                          (5 − 2)! × 2!     3! × 2
Gabarito: C

5.     (FGV/2022 – EPE) De um grupo composto por cinco homens e cinco mulheres, serão sorteados ao
acaso dois homens e duas mulheres para formar um subgrupo representativo do grupo.

O número de diferentes subgrupos que podem ser formados é igual a

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
Pelo princípio multiplicativo, o número de maneiras de escolher os homens E as mulheres é o produto:
                                                  𝑛 = 10 × 10 = 100
Gabarito: C

6.    (FGV/2022 – EPE) Doze pessoas, representantes de torcidas organizadas, estão reunidas numa sala:
quatro flamenguistas, quatro tricolores e quatro vascaínos. Elas decidem formar um grupo de trabalho
composto por dois flamenguistas, dois tricolores e dois vascaínos.

O número de diferentes grupos que podem ser formados é igual a

a) 27
b) 54
c) 108
d) 216
e) 432


         Receita Federal (Analista Tributário) Estatística                                             132
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

Precisamos escolher 2 flamenguistas, dentre 4; 2 tricolores, dentre 4; e 2 vascaínas, dentre 4.
A escolha de cada um deles corresponde à combinação de 2 elementos, dentre 4:
                                               4!         4 × 3 × 2!
                                 𝐶4,2 =                 =            =2×3=6
                                          (4 − 2)! × 2!     2! × 2
Portanto, há 6 maneiras de escolher os flamenguistas, 6 maneiras de escolher os tricolores e 6 maneiras de
escolher os vascaínos. Pelo princípio multiplicativo, o número de maneiras de escolher todos os membros
do grupo (eventos concomitantes) é o produto:
                                                𝑛 = 6 × 6 × 6 = 216
Gabarito: D

7.    (FGV/2022 – PC-AM) Os times X (Nacional) e Y (São Raimundo) jogaram pelo campeonato
amazonense e 5 gols foram marcados. Sílvio viu o jogo e fez uma lista da ocorrência dos gols como mostra
o quadro abaixo.

                                                            Gol de
                                   1º tempo - 23 min          X
                                   1º tempo - 44 min
                                   2º tempo - 55 min
                                   2º tempo - 70 min
                                   2º tempo - 91 min

Por algum motivo, só a primeira anotação permaneceu, mas Sílvio lembra-se que o time X ganhou a
partida. A coluna dos gols pode ter sido preenchida por Sílvio do seguinte número de maneiras:

a) 5
b) 7
c) 9
d) 11
e) 13
Comentários:
Precisamos preencher os 4 campos da tabela de gols com X e/ou Y, de modo que X ganhe a partida, ou seja,
de modo que haja mais X do que Y.
Pode ser que apenas o time X tenha marcado gols. Nessa situação, há 1 possibilidade.
Pode ser que o time Y tenha marcado um único gol. Assim, há 4 possibilidades para preencher o gol de Y na
tabela.

        Receita Federal (Analista Tributário) Estatística                                              133
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Pode ser que o time Y tenha feito 2 gols. Nessa situação, devemos escolher 2 campos dentre os 4 para
preenchermos com os gols de Y. Assim, temos a combinação de 2 elementos dentre 4:
                                               4!         4 × 3 × 2! 4 × 3
                                 𝐶4,2 =                 =           =      =𝟔
                                          (4 − 2)! × 2!     2! × 2!    2
O time Y não pode fazer 3 ou mais gols, senão ganharia a partida.
Como são possibilidades excludentes, devemos somar essas possibilidades:
                                                     1 + 4 + 6 = 11
Gabarito: D

8.      (FGV/2022 – SSP-AM) Para o novo cartão de crédito, Renato precisa cadastrar uma senha de 4
dígitos de 0 a 9. Como nasceu em 1998 decidiu que sua senha terá dois “noves” em qualquer posição, mais
dois dígitos diferentes de 9 e diferentes entre si. Por exemplo, 0959 e 2399 são senhas que Renato pode
escolher.

O número total de senhas que Renato poderá escolher

a) é menor que 300
b) está entre 300 e 350
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

        Receita Federal (Analista Tributário) Estatística                                                134
        www.estrategiaconcursos.com.br                                                                   183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

9.    (FGV/2022 – CBM-AM) A senha bancária de João possui quatro dígitos. Ele esqueceu a senha, mas
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

10.     (FGV/2022 – TJDFT) Um restaurante oferece 7 sabores de pizza, sendo que cada pizza só pode ter 1
sabor, isto é, o restaurante não permite a mistura de sabores dentro da mesma pizza. Um grupo de amigos
pretende pedir 4 pizzas. O número possível de escolhas é:

a) 35.
b) 40.
c) 55.
d) 105.
e) 210.

          Receita Federal (Analista Tributário) Estatística                                            135
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

Precisamos encontrar o número de maneiras de os amigos pedirem 4 pizzas, havendo um total de 7 sabores
disponíveis, considerando que as pizzas podem ser do mesmo sabor ou de sabores distintos. Assim, temos
uma combinação completa com 𝑛 = 7 tipos diferentes e 𝑘 = 4 objetos iguais ou diferentes.
Para resolver essa questão, podemos imaginar que os 7 sabores de pizza correspondem a seções espaçadas
por barras e que as 4 pizzas são representadas por círculos. Nessa situação, a ordem das barras e das pizzas
corresponde às possibilidades de escolha dos sabores.
A seguir, representamos a escolha de três pizzas do sabor 1 e uma pizza do sabor 4.

    Sabor 1          Sabor 2            Sabor 3              Sabor 4       Sabor 5   Sabor 6    Sabor 7

Assim, o número de maneiras de escolher os sabores de 4 pizzas, havendo um total de 7 sabores, pode ser
interpretada como uma permutação das 6 barras e dos 4 círculos, ou seja, uma permutação de 10 elementos,
com repetição de 6 e de 4:

                                                    𝑛−1,𝑘         (𝑛 + 𝑘 − 1)!
                                            𝐶𝑅𝑛𝑘 = 𝑃𝑛+𝑘−1 =
                                                                  (𝑛 − 1)! × 𝑘!

                     6,4       10!     10 × 9 × 8 × 7 × 6! 10 × 9 × 8 × 7
            𝐶𝑅74 = 𝑃10   =           =                    =               = 10 × 3 × 7 = 210
                             6! × 4!         6! × 4!         4×3×2
Gabarito: E

11.    (FGV/2021 – FunSaúde-CE) Em um setor de uma empresa trabalham 6 pessoas. Dessas pessoas,
duas serão escolhidas para trabalhar em um projeto novo. Com essas pessoas, o número de pares
diferentes que podem ser formados é

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

Gabarito: E


         Receita Federal (Analista Tributário) Estatística                                                136
         www.estrategiaconcursos.com.br                                                                   183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

12.   (FGV/2019 – Pref. Angra dos Reis/RJ) Em um torneio de handebol, no qual cada time joga uma única
vez com cada um dos outros, há 6 times participantes. O número de jogos desse torneio é

a) 30.
b) 24.
c) 21.
d) 20.
e) 15.
Comentários:
Considerando que cada time joga uma vez com cada um dos outros times, o número de jogos corresponde
à combinação dos times dois a dois. Sabendo que há 6 times participantes, então:
                                          6!         6!     6 × 5 × 4! 6 × 5
                            𝐶6,2 =                =       =           =      = 15
                                     (6 − 2)! × 2! 4! × 2     4! × 2     2
Gabarito: E

13.    (FGV/2019 – Pref. Salvador/BA) Os cinco times de futebol de certo município disputarão um torneio
em que cada time jogará uma vez com cada um dos outros times. O número de partidas que serão
realizadas é

a) 8

b) 9

c) 10

d) 15

e) 20

Comentários:

Considerando que todos os times jogam com os outros times uma vez, então o número de partidas entre 2
times corresponde ao número de maneiras de selecionar 2 times, dentre o total de 5 times. Tendo em vista
que a ordem não importa, temos a combinação de 2 elementos, dentre 5:
                                          5!         5!     5 × 4 × 3! 5 × 4
                            𝐶5,2 =                =       =           =      = 10
                                     (5 − 2)! × 2! 3! × 2     3! × 2     2
Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                           137
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

14.    (FGV/2019 – Pref. Angra dos Reis/RJ) Deseja-se pintar os lados de um quadrado feito de madeira,
sendo cada lado de uma única cor. Lados opostos devem ter a mesma cor e lados adjacentes devem ter
cores diferentes. Dispõe-se de 5 cores diferentes. O número de maneiras diferentes de pintar o quadrado
nas condições dadas é

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

15.    (FGV/2019 – MPE/RJ) Considere quatro cartões, cada um deles com uma das letras M, P, R, J e três
urnas numeradas 1, 2 e 3. O número de maneiras diferentes de distribuir os quatro cartões pelas três
urnas, de tal modo que uma das urnas fique com dois cartões e cada uma das outras duas urnas fique com
um cartão, é:

a) 36;

b) 32;

c) 24;

d) 18;

e) 12.

Comentários:

         Receita Federal (Analista Tributário) Estatística                                          138
         www.estrategiaconcursos.com.br                                                             183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Vamos resolver essa questão por etapas.

Primeiro, vamos calcular o número de maneiras diferentes de selecionar a urna que receberá 2 cartões.
Como há 3 urnas, há 3 possibilidades (C3,1 = 3).

Em seguida, vamos calcular o número de maneiras diferentes de selecionar 2 cartões para essa urna.
Sabendo que há 4 cartões disponíveis, temos a combinação de 2 elementos, dentre 4:

                                           4!         4!     4 × 3 × 2! 4 × 3
                             𝐶4,2 =                =       =           =      =𝟔
                                      (4 − 2)! × 2! 2! × 2     2! × 2     2

Por fim, vamos calcular o número de maneiras de distribuir os 2 cartões restantes pelas 2 urnas que
receberão apenas 1 cartão. Assim, temos a permutação de 2 elementos:

                                                        𝑃2 = 2! = 𝟐

Pelo princípio multiplicativo, o número de maneiras de distribuir os 4 cartões pelas 3 urnas é:

                                                       3 x 6 x 2 = 36

Gabarito: A

16.  (FGV/2018 – ALE-RO) O número de subconjuntos do conjunto {2,3,4,5,6,7,8} que têm, pelo menos,
um número ímpar é

a) 112.

b) 113.

c) 114.

d) 115.

e) 116.

Comentários:

O número de subconjuntos formados, com pelo menos 1 número ímpar, a partir de um conjunto de 7
elementos corresponde ao total de possibilidades de combinações com 1, 2, ... e 7 elementos, de forma que
pelo menos 1 número seja ímpar, dentre um total de 7 elementos no total. Vamos então por etapas.
- Subconjuntos de 1 elemento: Apenas números ímpares são possíveis, logo há 3 possibilidades (3, 5 e 7);
- Subconjuntos de 2 elementos: A quantidade de subconjuntos com pelo menos 1 número ímpar
corresponde ao total de combinações possíveis de 2 elementos, dentre 7, menos as possibilidades em que
não haja números ímpares (isto é, a combinação de 2 elementos, dentre os 4 números pares):

          Receita Federal (Analista Tributário) Estatística                                            139
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                                     𝐶7,2 − 𝐶4,2 =
                                                 7!          4!
                                                        −            =
                                             (7 − 2)! 2! (4 − 2)! 2!
                                            7 × 6 × 5! 4 × 3 × 2!
                                                       −          =
                                               5! 2!       2! 2!
                                           7×6 4×3
                                                −       = 21 − 6 = 𝟏𝟓
                                            2        2
- Subconjuntos de 3 elementos: Similarmente, para selecionarmos 3 elementos com pelo menos 1 número
ímpar, basta calcularmos a combinação de 3 elementos, dentre 7, menos a combinação de 3 elementos,
dentre os 4 números pares:
                                                       𝐶7,3 − 𝐶4,3
A combinação 𝐶4,3 é um caso especial: 𝐶4,3 = 4, logo:       ==219a34==

                                                                             7!
                                           𝐶7,3 − 𝐶4,3 =                             −4=
                                                                         (7 − 3)! 3!
                                                7 × 6 × 5 × 4!
                                                               −4 =
                                                     4! 3!
                                           7×6×5
                                                 − 4 = 35 − 4 = 𝟑𝟏
                                            3×2
- Subconjuntos de 4 elementos: Para selecionarmos 4 elementos com pelo menos 1 número ímpar, basta
calcularmos a combinação de 4 elementos, dentre 7, menos a única possibilidade de selecionarmos os 4
números pares existentes (𝐶4,4 = 1):
                                                𝐶7,4 − 𝐶4,4 = 𝐶7,4 − 1
Sabemos que 𝐶7,4 = 𝐶7,3, pois 3 + 4 = 7. Acabamos de calcular 𝐶7,3 = 35, logo 𝐶7,4 = 35:
                                               𝐶7,4 − 1 = 35 − 1 = 𝟑𝟒
- Subconjuntos de 5 elementos: Como há somente 4 números pares, ao selecionarmos 5 elementos,
necessariamente estaremos selecionando pelo menos 1 número ímpar. Assim, temos a combinação de 5
elementos, dentre 7:
                                                   𝐶7,5 = 𝐶7,2 = 𝟐𝟏
Já havíamos calculado 𝐶7,2, logo, pudemos obter rapidamente o resultado.
- Subconjuntos de 6 elementos: Novamente, precisamos apenas da combinação de 6 elementos, dentre 7,
que corresponde a um caso especial de combinação: 𝐶7,6 = 𝟕


- Subconjunto de 7 elementos: Há apenas uma forma de selecionarmos 7 elementos, dentre 7: 𝐶7,7 = 𝟏
Como essas possibilidades são alternativas, pelo princípio aditivo, temos:
                                         3 + 15 + 31 + 34 + 21 + 7 + 1 = 112
Gabarito: A


        Receita Federal (Analista Tributário) Estatística                                            140
        www.estrategiaconcursos.com.br                                                               183

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 05

17.    (FGV/2017 – Prefeitura de Salvador/BA) Uma casa mal-assombrada tem 5 janelas. O número de
maneiras diferentes pelas quais um fantasma pode entrar por uma janela qualquer e sair por outra
diferente é.

a) 9.
b) 10.
c) 16.
d) 20.
e) 25.
Comentários:
Para entrar, o fantasma pode escolher qualquer uma das 5 janelas, logo há 5 possibilidades. Para sair, o
fantasma poderá escolher todas, exceto a janela pela qual ele entrou. Logo, há 4 possibilidades. Pelo
princípio multiplicativo, o número de possibilidades é:
                                                         5 x 4 = 20

Nota: Alternativamente, poderíamos ter feito um arranjo de 2 janelas, dentre 5 opções:

                                                                 𝑛!
                                                     𝐴𝑛,𝑝 =
                                                              (𝑛 − 𝑝)!

                                                     5!    5!
                                         𝐴5,3 =           = = 5 × 4 = 20
                                                  (5 − 2)! 3!

Gabarito: D

18.    (FGV/2015 – TJ-RO) João tem 5 processos que devem ser analisados e Arnaldo e Bruno estão
disponíveis para esse trabalho. Como Arnaldo é mais experiente, João decidiu dar 3 processos para
Arnaldo e 2 para Bruno.

O número de maneiras diferentes pelas quais João pode distribuir esses 5 processos entre Arnaldo e Bruno
é:

a) 6.
b) 8.
c) 10.
d) 12.
e) 15.
Comentários:

         Receita Federal (Analista Tributário) Estatística                                           141
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Note que ao definir quais 3 processos irão para Arnaldo, os 2 processos de Bruno estarão definidos (e vice-
versa). Logo, o número de maneiras de distribuir os 5 processos corresponde ao número de maneiras de
selecionar 3 processos para Arnaldo, dentre os 5 disponíveis. Como a ordem não importa, temos a
combinação de 3 elementos, dentre 5:
                                        5!          5!     5 × 4 × 3! 5 × 4
                          𝐶5,3 =                =        =           =      = 10
                                   (5 − 3)! × 3! 2! × 3!     2 × 3!     2
Gabarito: C

19.    (FGV/2015 – TJ-PI) No primeiro turno do campeonato piauiense de futebol 6 times participam, mas
somente 4 chegam às semifinais. O número de possibilidades diferentes para o conjunto dos 4 times que
estarão nas semifinais é:

a) 10

b) 12

c) 15

d) 18

e) 30

Comentários:

O número de possibilidades diferentes para a seleção dos 4 times que estarão nas semifinais, dentre 6,
corresponde à combinação de 4 elementos, dentre 6:
                                        6!          6!     6 × 5 × 4! 6 × 5
                          𝐶6,4 =                =        =           =      = 15
                                   (6 − 4)! × 4! 2! × 4!     2 × 4!     2
Gabarito: C

20.   (FGV/2015 – TCE-SE) João tem 4 primas e 3 primos, deseja convidar duas dessas pessoas para ir ao
cinema, mas não quer que o grupo seja exclusivamente masculino.

O número de maneiras diferentes pelas quais João pode escolher seus dois convidados é:

a) 9
b) 12
c) 15
d) 16
e) 18


        Receita Federal (Analista Tributário) Estatística                                               142
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:
João irá chamar 2 pessoas, dentre um total de 7. Se não houvesse restrições, teríamos uma combinação de
2 elementos, dentre 7:
                                                7!         7 × 6 × 5! 7 × 6
                                  𝐶7,2 =                 =           =      = 21
                                           (7 − 2)! × 2!     5! × 2     2
Porém, João não quer chamar um grupo exclusivamente de homens. Considerando que há 3 primos homens,
o número de maneiras de fazer isso é:
                                                       3!         3×2×1
                                         𝐶3,2 =                 =         =3
                                                  (3 − 2)! × 2!    1! × 2
Logo, o número de maneiras de João escolher os 2 convidados é a diferença:
                                                         21 – 3 = 18
Gabarito: E

21.     (FGV/2015 – IBGE) Uma senha de 4 símbolos deve ser feita de forma a conter dois elementos
distintos do conjunto {A, B, C, D, E} e dois elementos distintos do conjunto {0, 1, 2, 3, 4, 5}, em qualquer
ordem. Por exemplo, a senha 2EC4 é uma das senhas possíveis.

Nesse sistema, o número de senhas possíveis é:

a) 2400

b) 3600

c) 4000

d) 4800

e) 6400

Comentários:

Para formar a senha de forma que 2 elementos sejam de um conjunto e 2 elementos, de outro, podemos
pensar primeiro em escolher quais elementos farão parte da senha, sem nos preocuparmos com a ordem,
por ora.
O número de maneiras de escolher 2 elementos distintos do conjunto {A, B, C, D, E} corresponde à
combinação de 2 elementos, dentre 5:
                                           5!         5!     5 × 4 × 3! 5 × 4
                             𝐶5,2 =                =       =           =      = 10
                                      (5 − 2)! × 2! 3! × 2     3! × 2     2
O número de maneiras de escolher 2 elementos distintos do conjunto {0, 1, 2, 3, 4, 5} corresponde à
combinação de 2 elementos, dentre 6:

          Receita Federal (Analista Tributário) Estatística                                              143
          www.estrategiaconcursos.com.br                                                                 183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                         6!         6!     6 × 5 × 4! 6 × 5
                           𝐶6,2 =                =       =           =      = 15
                                    (6 − 2)! × 2! 4! × 2     4! × 2     2
Considerando que, para uma senha, a ordem importa, então com os 4 elementos escolhidos, precisamos
encontrar o número de maneiras de reordená-los, que corresponde à permutação de 4 elementos:
                                           𝑃4 = 4! = 4 × 3 × 2 × 1 = 24
Pelo princípio multiplicativo, o número de senhas possível é o produto:
                                                  10 x 15 x 24 = 3600
Gabarito: B

        Receita Federal (Analista Tributário) Estatística                                      144
        www.estrategiaconcursos.com.br                                                         183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                          QUESTÕES COMENTADAS – FGV

Partições

1.    (FGV/2015 – SMF-Niterói/RJ) João coordena as 5 pessoas da equipe de manutenção de uma
empresa e deve designar, para cada dia, as pessoas para as seguintes funções:

   •    uma pessoa da equipe para abrir o prédio da empresa e fiscalizar o trabalho geral;
   •    duas pessoas da equipe para o trabalho no turno da manhã, deixando as outras duas para o turno
        da tarde.

O número de maneiras diferentes pelas quais João poderá organizar essa escala de trabalho é:

a) 10

b) 15

c) 20

d) 30

e) 60

Comentários:

Considerando que as 5 pessoas serão distribuídas em grupos distintos, podemos resolver essa questão,
utilizando a partição ordenada.
Considerando que p1 = 1 pessoa irá fiscalizar o trabalho, p2 = 2 pessoas ficarão no turno da manhã e p2 = 2
pessoas ficarão no turno da tarde, então, o número de possibilidades de organizar esses grupos é:
                          𝑛!               5!        5×4×3×2×1
                                     =             =           = 5 × 3 × 2 = 30
                   𝑝1 ! × 𝑝2 ! × 𝑝3 ! 1! × 2! × 2!     1×2×2
Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                               145
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                            QUESTÕES COMENTADAS – FGV

Lemas de Kaplansky

1.     (FGV/2022 – TRT/AM) Alberto deverá fazer um tratamento contínuo de fisioterapia durante longo
tempo. Para isso, deverá fixar 2 dias na semana (de 7 dias) para realizar as atividades do tratamento, mas
esses dias não podem ser seguidos. O número de maneiras diferentes em que esses 2 dias podem ser
fixados é igual a

a) 12.

b) 14.

c) 15.

d) 18.

e) 20.

Comentários:
A questão informa que devem ser selecionados 2 dias não consecutivos, dentre os 7 dias da semana.
Considerando que o primeiro e o último dia da semana de 7 dias (segunda e domingo) são considerados
consecutivos, devemos aplicar o 2º lema de Kaplansky, com 𝑛 = 7 e 𝑝 = 2:
                                                                𝑛
                                                 𝑔(𝑛, 𝑝) =         𝐶
                                                              𝑛 − 𝑝 𝑛−𝑝,𝑝
                                                   7        7      5!
                                      𝑔(7,2) =        𝐶5,2 = ×
                                                  7−2       5 (5 − 2)! × 2!
                                                  7 5 × 4 × 3! 7
                                      𝑔(7,2) =      ×         = × 10 = 14
                                                  5   3! × 2   5
Gabarito: B

2.    (FGV/2021 - Pref. Paulínia) O número de anagramas da palavra PAULINIA que não têm duas
consoantes juntas é

a) 3600
b) 4800
c) 6400
d) 10800
e) 14400

          Receita Federal (Analista Tributário) Estatística                                            146
          www.estrategiaconcursos.com.br                                                               183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

Comentários:

Podemos utilizar o primeiro lema de Kaplansky para garantir que não teremos duas consoantes juntas.

Nesse sentido, vamos primeiro escolher os lugares das 3 consoantes entre as 5 vogais, sem nos
preocuparmos, neste primeiro momento, com qual letra ocupará cada posição:

                                             __ V __ V __ V __ V __ V __

As consoantes ocuparão 3 desses 6 espaços, pois assim garantimos que não haverá consoantes juntas. O
número de maneiras de escolher 3 desses 6 lugares é a combinação de 3 elementos, dentre 6:

                                                 𝑓(𝑛, 𝑝) = 𝐶𝑛−𝑝+1,𝑝

                                             𝑓 (8,3) = 𝐶8−3+1,3 = 𝐶6,3
                                                            ==219a34==

                                   6!         6 × 5 × 4 × 3! 6 × 5 × 4
                     𝐶6,3 =                 =               =          = 5 × 4 = 20
                              (6 − 3)! × 3!      3! × 3!      3×2×1

Agora que encontramos o número de maneiras de organizar as posições das consoantes e das vogais,
precisamos encontrar o número de maneiras de reorganizar as diferentes consoantes e as vogais em cada
posição.

Por exemplo, supondo uma posição fixa V C V V C V C V, de quantas maneiras podemos organizar as 3
consoantes e as 5 vogais nessas posições.

Como há 3 consoantes diferentes, o número de maneiras de reorganizá-las corresponde à permutação de 3
elementos:

                                             𝑃3 = 3! = 3 × 2 × 1 = 6

Como há 5 vogais, sendo 2 As e 2 Is, o número de maneiras de reorganizá-las corresponde à permutação de
5 elementos com repetição de 2 elementos e de 2 elementos:

                                   5!     5 × 4 × 3 × 2! 5 × 4 × 3
                      𝑃52,2 =           =               =          = 5 × 2 × 3 = 30
                                2! × 2!      2! × 2!         2

Pelo princípio multiplicativo, o número de anagramas que não apresentam duas vogais juntas é:

                                                   20 x 6 x 30 = 3600

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                             147
        www.estrategiaconcursos.com.br                                                                183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

3.     (FGV/2015 – SSP-AM) Sete pessoas formam uma fila e duas delas serão escolhidas para receber um
brinde. O número de maneiras diferentes de escolher duas pessoas da fila que não sejam vizinhas é:

a) 15

b) 18

c) 20

d) 24

e) 30

Comentários:
Considerando que duas pessoas vizinhas não podem ser escolhidas, podemos utilizar o 1º lema de Kaplansky
para resolver essa questão.
Sabendo que há 7 pessoas na fila e que 2 serão escolhidas, então 5 pessoas não serão escolhidas (N). Assim,
as pessoas escolhidas ocuparão 2 posições dentre as seguintes possibilidades ( _ ):
                                                 _N_N_N_N_N_
Logo, há 6 posições possíveis para a escolha de 2 (combinação):
                                        6!         6!     6 × 5 × 4! 6 × 5
                          𝐶6,2 =                =       =           =      = 15
                                   (6 − 2)! × 2! 4! × 2     4! × 2     2
Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                               148
        www.estrategiaconcursos.com.br                                                                  183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                    LISTA DE QUESTÕES – FGV

Princípios de Contagem

1.    (FGV/2025 – PC/MG) Um perito criminal precisa analisar um conjunto de quatro amostras coletadas
de uma cena de crime. As amostras incluem os seguintes itens distintos:

       •   cinco fibras de tecido;
       •   três fios de cabelo;
       •   dois fragmentos de vidro; e
       •   uma amostra de solo.

Para realizar a análise, ele precisa escolher exatamente três itens entre as amostras, mas cada item deve
pertencer a uma amostra diferente. O número total de diferentes trios de itens que o perito pode escolher
é

a) 59
b) 60.
c) 61
d) 62.
e) 63.

2.    (FGV/2025 – SEEC/RN) Seis pessoas (A, B, C, D, E e F) devem ser separadas em dois grupos: um
formado por 4 desses indivíduos e o outro com os demais. Por razões particulares, A e B devem ficar em
grupos distintos e, além disso, E e F devem ficar no mesmo grupo.

O número de diferentes formas nas quais esses grupos podem ser constituídos é

a) 3
b) 4.
c) 6
d) 8.
e) 10.

3.     (FGV/2025 – TRT-24ª Região) Um palíndromo numérico, ou capicua, é um número que lido de trás
para a frente é igual ao número original. Por exemplo: 121, 35653, 8778, 108801 são palíndromos. Entre
os números de seis algarismos, a quantidade de palíndromos numéricos é igual a

            Receita Federal (Analista Tributário) Estatística                                         149
            www.estrategiaconcursos.com.br                                                            183

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 05

a) 600
b) 900
c) 8.100
d) 18.000
e) 180.000

4.     (FGV/2025 – PM/SP) Para receber o novo comandante, o 1º Tenente Ramiro deverá organizar, no
pátio do quartel da PM, uma formação retangular com 72 soldados dispostos regularmente em linhas
(horizontais) e colunas (verticais). Sabe-se que essa formação retangular deve ter, no mínimo, três linhas
e, no mínimo, oito colunas.

O número de arrumações diferentes que Ramiro poderá fazer é igual a

a) 2
b) 3.
c) 4
d) 5.
e) 6.

5.       (FGV/2022 – TRT/MA) Em um jogo, as peças têm a forma abaixo, formada por 6 quadradinhos.

Na primeira fase do jogo, as peças devem ter exatamente 2 quadradinhos pretos e os outros brancos, mas
os dois quadradinhos pretos não podem ser vizinhos, ou seja, não podem ter um lado em comum.

O número de peças diferentes na primeira fase desse jogo é

a) 9.
b) 10.
c) 12.
d) 14.
e) 16.

           Receita Federal (Analista Tributário) Estatística                                           150
           www.estrategiaconcursos.com.br                                                              183

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 05

6.    (FGV/2022 – Câmara Taubaté/SP) Utilizando apenas os elementos do conjunto {0, 1, 2, 3, 4, 5} a
quantidade de números ímpares de 3 algarismos distintos que podem ser formados é

a) 24.
b) 26.
c) 48.
d) 60.
e) 96.

7.    (FGV/2022 – SEMSA Manaus) Cada quadradinho da figura a seguir contém um algarismo do
conjunto {1, 2, 3, 4, 5} que juntos formam, em sequência, a senha que abre um cofre.

O primeiro quadradinho (o da esquerda) só aceita algarismo ímpar e os outros dois só aceitam algarismos
pares, distintos ou não.

O número de senhas diferentes possíveis é

a) 9.
b) 10.
c) 11.
d) 12.
e) 13.

8.     (FGV/2022 – MPE/GO) No código Morse, as “letras” são · e – (ponto e traço). Certa instrução é
formada por “símbolos” e cada símbolo é formado por uma sequência de duas, três ou quatro letras do
código Morse. Por exemplo, “– · –” e “– – ·” são símbolos diferentes.

O número de símbolos diferentes que essa instrução possui é

a) 18.
b) 20.
c) 24.
d) 26.
e) 28.

         Receita Federal (Analista Tributário) Estatística                                          151
         www.estrategiaconcursos.com.br                                                             183

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 05

9.        (FGV/2022 – Senado Federal) Determine quantos retângulos existem na figura a seguir.

a) 70
b) 90
c) 110
d) 130
e) 150

10.       (FGV/2021 – Pref. Paulínia) Dois dados comuns, um azul e outro vermelho, são lançados. Sejam:

      •   x, o número de maneiras diferentes de se obter soma 3;
      •   y, o número de maneiras diferentes de se obter soma 6;
      •   z, o número de maneiras diferentes de se obter soma 9.

É correto afirmar que:

a) x < y < z

b) x = y = z

c) x = y < z

d) x < z < y

e) z < y < x

11.    (FGV/2021 – IMBEL) Três dados, um vermelho, um azul e um amarelo, são lançados. O número de
possibilidades de que a soma dos três números sorteados seja igual a 7 é

a) 15

b) 14

c) 13

d) 12

e) 10


           Receita Federal (Analista Tributário) Estatística                                          152
           www.estrategiaconcursos.com.br                                                             183

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 05

12.     (FGV/2021 – IMBEL) Uma empresa solicita a seus funcionários que cadastrem uma senha de 4
dígitos (algarismos de 0 a 9) com a condição de que essa senha não contenha três dígitos iguais juntos. O
número de senhas possível é

a) 9760

b) 9780

c) 9800

d) 9810

e) 9820

13.    (FGV/2018 – SASDH/RJ) Uma urna D contém 6 bolas numeradas de 3 a 8 e uma urna U contém 7
bolas numeradas de 2 a 8. Um número de dois algarismos será formado retirando uma bola da urna D e
uma bola da urna U, cujos números serão, respectivamente, o algarismo das dezenas e o algarismo das
unidades. A quantidade de números pares que poderão ser formados dessa maneira é

a) 42.

b) 36.

c) 24.

d) 20.

e) 16.

14.    (FGV/2018 – ALE/RO) Em um circuito elétrico há 4 disjuntores que podem ficar, cada um deles,
independente dos demais, nas posições “ligado” ou “desligado”. O número de maneiras diferentes de se
posicionar (“ligado” ou “desligado”) esses 4 disjuntores é

a) 4.

b) 6.

c) 8.

d) 12.

e) 16.

          Receita Federal (Analista Tributário) Estatística                                           153
          www.estrategiaconcursos.com.br                                                              183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

15.   (FGV/2018 – ALE-RO) O presidente e o vice-presidente de uma comissão serão escolhidos entre os
10 deputados do Partido X e os 6 deputados do Partido Y. Os Partidos acordaram que os dois cargos não
poderão ser ocupados por deputados de um mesmo Partido.

O número de maneiras diferentes de se escolher o presidente e o vice-presidente dessa comissão, é

a) 16
b) 32
c) 60
d) 64
e) 120

16.    (FGV/2018 – ALE-RO) Manoel possui tintas de 5 cores diferentes e deve pintar a bandeira abaixo
de forma que:

   •      cada região será pintada com uma única cor.
   •      duas regiões vizinhas não podem ter a mesma cor.

O número de maneiras diferentes que Manoel pode pintar essa bandeira é

a) 120.

b) 180.

c) 240.

d) 360.

e) 720.

17.    (FGV/2017 – Prefeitura de Salvador/BA) Cinco pessoas de diferentes alturas devem ocupar as cinco
cadeiras abaixo para uma fotografia.

          Receita Federal (Analista Tributário) Estatística                                         154
          www.estrategiaconcursos.com.br                                                            183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

O fotógrafo pediu que nem o mais baixo nem o mais alto ocupassem as cadeiras das extremidades.
Respeitando essa condição, o número de maneiras como as pessoas podem se posicionar para a fotografia
é:

a) 12.

b) 18.

c) 24.

d) 36.

e) 72.

                                                              ==219a34==

18.    (FGV/2016 – MP-RJ) Para organizar um horário de atendimento, em três dias da semana, pela
manhã e à tarde, deve-se colocar duas letras A, duas letras B e duas letras C nas casas vazias da tabela
abaixo, com a condição de que, em cada coluna, não apareçam letras iguais.

O número de maneiras diferentes de preencher essa tabela é:

a) 12.
b) 24.
c) 36.
d) 48.
e) 64.


                                                                               𝒙      𝟑
19.      (FGV/2016 – MPE/RJ) Sejam x e y números inteiros positivos tais que        = . O número de pares
                                                                               𝟏𝟔     𝒚
ordenados diferentes (x,y) que podem ser formados é:

a) 16.
b) 14.
c) 12.
d) 10.
e) 8.

          Receita Federal (Analista Tributário) Estatística                                           155
          www.estrategiaconcursos.com.br                                                              183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

20.     (FGV/2015 – SEE-PE) O professor Joel vai de sua casa para a escola, de segunda à sexta-feira, de
ônibus (O) ou de metrô (M) e, em cada semana, utiliza pelo menos uma vez, cada um desses dois
transportes. Joel anota, a cada semana, a ordem dos transportes que utilizou. Por exemplo, OOMOM
significa que ele usou o ônibus na segunda, terça e quinta-feira e o metrô nos outros dois dias. O número
de sequências diferentes que Joel pode utilizar os dois transportes em uma semana é

a) 10.

b) 14.

c) 20.

d) 30.

e) 32.

21.    (FGV/2015 – SEE-PE) Regina vai sortear uma menina e um menino entre os estudantes de uma de
suas turmas para serem os representantes da turma. Nessa turma há 10 meninas e 12 meninos.

O número de duplas diferentes possíveis para representantes da turma é

a) 22
b) 60
c) 72
d) 110
e) 120

22.    (FGV/2015 – SSP-AM) Uma urna A contém cinco bolas numeradas com os números 1, 3, 5, 7 e 9.
Uma urna B também contém cinco bolas, mas numeradas com os números 0, 2, 4, 6 e 8. Retira-se,
aleatoriamente, uma bola de cada urna e somam-se os números das duas bolas.

O número de valores diferentes possíveis para essa soma é:

a) 25
b) 21
c) 17
d) 13
e) 9

         Receita Federal (Analista Tributário) Estatística                                            156
         www.estrategiaconcursos.com.br                                                               183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

23.  (FGV/2015 – DPE-RO) Considere todas as placas de veículos desde NCD-4000 até NCD-9999. O
número de placas que possuem os dígitos todos diferentes é:

a) 2520.
b) 3024.
c) 3528.
d) 3786.
e) 4032.

24.     (FGV/2015 – Ministério das Relações Exteriores) André, Beatriz e Carlos são adultos, Laura e Júlio
são crianças e todos vão viajar em um automóvel com 5 lugares, sendo 2 na frente e 3 atrás. Dos adultos,
somente Carlos não sabe dirigir. As crianças viajarão atrás, mas Júlio faz questão de ficar em uma janela.
O número de maneiras diferentes pelas quais essas pessoas podem ocupar os cinco lugares do automóvel
é:

a) 12.
b) 16.
c) 18.
d) 20.
e) 24.

25.     (FGV/2015 – PGE/RO) Quatro processos, numerados de 1 a 4, deverão ser distribuídos entre três
procuradores: Átila, Hércules e Ulisses. Um mesmo procurador pode receber até quatro processos, exceto
o procurador Átila, que não pode receber o processo número 2. O número de maneiras diferentes de se
fazer tal distribuição é:

a) 81;

b) 64;

c) 54;

d) 11;

e) 8.

           Receita Federal (Analista Tributário) Estatística                                           157
           www.estrategiaconcursos.com.br                                                              183

                                         


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1.   LETRA C                                10. LETRA D                 19. LETRA D
 2.   LETRA B                                11. LETRA A                 20. LETRA D
 3.   LETRA B                                12. LETRA D                 21. LETRA E
 4.   LETRA D                                13. LETRA C                 22. LETRA E
 5.   LETRA A                                14. LETRA E                 23. LETRA B
 6.   LETRA C                                15. LETRA E                 24. LETRA B
 7.   LETRA D                                16. LETRA E                 25. LETRA C
 8.   LETRA E                                17. LETRA D
 9.   LETRA E                                18. LETRA D

      Receita Federal (Analista Tributário) Estatística                                158
      www.estrategiaconcursos.com.br                                                   183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                 LISTA DE QUESTÕES – FGV

Permutação

1.     (FGV/2025 – TCE/RR) Considere as 5 letras da sigla TCERR. O número de maneiras distintas de
escrever essas 5 letras em sequência de modo que as duas letras R não fiquem juntas é

a) 60
b) 48.
c) 36
d) 24.
e) 12.

2.     (FGV/2025 – TCE/RR) Os meninos Bruno e Luís, e as meninas Olívia e Ana formam uma fila na
seguinte ordem: Bruno, Olívia, Luís, Ana. Uma nova fila deverá ser formada de forma que nenhum dos dois
meninos ocupe o lugar em que estava antes.

O número de novas filas possíveis é

a) 10
b) 12.
c) 14
d) 16.
e) 18.

3.    (FGV/2022 – MPE/SC) Quatro casais foram ao cinema e vão sentar em 8 cadeiras consecutivas em
uma mesma fileira. O número de maneiras distintas de os 4 casais se sentarem nas 8 cadeiras, de modo
que cada mulher se sente ao lado de seu marido, é:

a) 24
b) 96
c) 256
d) 384
e) 576

         Receita Federal (Analista Tributário) Estatística                                          159
         www.estrategiaconcursos.com.br                                                             183

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

4.     (FGV/2022 – Câmara Taubaté/SP) Três meninos e duas meninas vão posar para uma fotografia e o
fotógrafo sugere que eles fiquem em fila, em qualquer ordem, mas de modo que fique um menino em
cada extremidade da fila.

O número de maneiras diferentes que eles as 5 crianças podem posar para a fotografia é

a) 6.
b) 12.
c) 24.
d) 36.
e) 48.

5.    (FGV/2022 – MPE/GO) Uma mesa retangular está encostada em uma parede, possui dois lugares
de um lado, dois lugares do outro e um na cabeceira como mostra a figura.

Alberto e mais 4 amigos vão ocupar esses 5 lugares, mas Alberto não quer ficar na cabeceira.

O número de maneiras que as 5 pessoas podem ficar dispostas em volta dessa mesa e atender à restrição
de Alberto é

a) 48.
b) 60.
c) 72.
d) 96.
e) 120.

6.     (FGV/2022 – SEAD/AP) Arnaldo tem 3 livros de Química, 4 de Física e 2 de Matemática, todos
diferentes entre si e deseja arrumá-los em uma prateleira de modo que os livros de Química fiquem juntos
e os de Física também.

O número de maneiras distintas de Arnaldo arrumar os seus livros na prateleira é igual a

          Receita Federal (Analista Tributário) Estatística                                          160
          www.estrategiaconcursos.com.br                                                             183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

a) 288
b) 576
c) 1152
d) 3456
e) 6912

7.      (FGV/2022 – TJ/TO) Considere as 4 letras da sigla TJTO. O número de maneiras de escrever essas 4
letras em sequência, de modo que as 2 letras T não fiquem juntas, é:

a) 24.
b) 12.
c) 8.
d) 6.
e) 4.

8.     (FGV/2022 – MPE/SC) O número de anagramas da palavra ASSADO que não têm as 2 letras S juntas
é: [OBS.: Anagramas de uma palavra são as permutações das letras dessa palavra.]

a) 720.
b) 360.
c) 120.
d) 84.
e) 72.

9.   (FGV/2022 – SEMSA Manaus) O número de maneiras diferentes de se escrever as 5 letras da sigla
SEMSA sem que as vogais fiquem juntas é igual a

a) 60.
b) 48.
c) 36.
d) 24.
e) 12.

          Receita Federal (Analista Tributário) Estatística                                          161
          www.estrategiaconcursos.com.br                                                             183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

10.      (FGV/2022 – Senado Federal) Luciana deseja ir do vértice A ao vértice B da malha abaixo.

Ela pode caminhar em linha reta, indo de baixo para cima ou da esquerda para a direita, ao longo das
linhas da malha. O número de modos diferentes de Luciana realizar o seu trajeto é igual a

a) 32.                                                        ==219a34==

b) 56.

c) 64.

d) 70.

e) 84.

11.     (FGV/2022 – SEFAZ-ES) Dois casais irão se sentar em 4 cadeiras consecutivas de uma fila de um
cinema. O número de maneiras de eles sentarem nas 4 cadeiras, de modo que cada casal se sente junto, é
igual a

a) 4

b) 6

c) 8

d) 12

e) 16

12.   (FGV/2022 – SEFAZ-AM) Um grupo formado por 2 homens e 3 mulheres formará uma fila. Essa fila
deverá começar por um homem ou terminar por um homem. O número de filas distintas possíveis é:

a) 36

b) 48

          Receita Federal (Analista Tributário) Estatística                                         162
          www.estrategiaconcursos.com.br                                                            183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

c) 84

d) 96

e) 120

13.   (FGV/2022 – SSP-AM) Os algarismos 1, 2, 3, 4, 5, devem formar um número de cinco algarismos de
forma que cada um desses algarismos apareça uma vez e que os algarismos pares não fiquem juntos. Por
exemplo, o número 34152 é um desses números. A quantidade de números que cumprem essas condições
é

a) 12

b) 24

c) 36

d) 60

e) 72

14.   (FGV/2022 – CGU) O número de anagramas da palavra CONCURSO que começam por C ou
terminam por O é:

a) 1.260

b) 1.440

c) 4.320

d) 5.040

e) 10.080

15.   (FGV/2021 – BANESTES) Considere a sequência dos 120 anagramas da palavra BANCO escritos em
ordem alfabética. O anagrama CANBO ocupa a posição de número:

a) 50

b) 51

c) 52

           Receita Federal (Analista Tributário) Estatística                                     163
           www.estrategiaconcursos.com.br                                                        183

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 05

d) 53

e) 54

16.   (FGV/2021 – PM-SP) Considere todos os anagramas da palavra BRASIL. O número de anagramas
que não têm as vogais juntas é

a) 720

b) 600

c) 480

d) 240

e) 120

17.      (FGV/2019 – Pref. Angra dos Reis/RJ) O número de filas que pode ser formado com três pessoas, X,
Y e Z, é

a) 2.

b) 3.

c) 4.

d) 5.

e) 6.

18.    (FGV/2017 – Prefeitura de Salvador/BA) Amélia, Bruno, Carla e Diego desejam sentar-se em quatro
cadeiras consecutivas em uma fila do cinema. Entretanto, Carla se recusa a sentar ao lado de Amélia ou
de Bruno. Nessas condições, o número de maneiras de os quatro se sentarem nas quatro cadeiras.

a) 6.

b) 4.

c) 3.

d) 2.

e) 1.

         Receita Federal (Analista Tributário) Estatística                                            164
         www.estrategiaconcursos.com.br                                                               183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

19.   (FGV/2015 – Prefeitura de Paulínia/SP) Em um determinado concurso, além das provas escritas, os
candidatos também serão submetidos ao Teste de Aptidão Física.

O Teste de Aptidão Física constará de 4 (quatro) testes: T1, T2, T3 e T4. Em cada teste as pontuações
possíveis de cada candidato são: 0, 2, 3, 4, 5, 6. A nota final no Teste de Aptidão Física será igual ao
somatório das notas obtidas nos 4 (quatro) testes. O candidato será considerado APTO no Teste de Aptidão
Física se, submetido a todos os testes, obtiver o desempenho mínimo de 2 (dois) pontos em cada teste e
o somatório mínimo de 10 (dez) pontos no conjunto dos testes. Por exemplo, a tabela a seguir mostra uma
das maneiras de um candidato ser considerado APTO, obtendo exatamente o somatório de 10 pontos:

O número de maneiras diferentes de um candidato ser considerado APTO no Teste de Aptidão Física,
obtendo exatamente o somatório de 10 pontos, é:

a) 24;

b) 20;

c) 16;

d) 10;

e) 8.

         Receita Federal (Analista Tributário) Estatística                                           165
         www.estrategiaconcursos.com.br                                                              183

                                       


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1.   LETRA C                                8. LETRA C                  15. LETRA B
 2.   LETRA C                                9. LETRA C                  16. LETRA C
 3.   LETRA D                                10. LETRA D                 17. LETRA E
 4.   LETRA D                                11. LETRA C                 18. LETRA B
 5.   LETRA D                                12. LETRA C                 19. LETRA D
 6.   LETRA D                                13. LETRA E
 7.   LETRA D                                14. LETRA C

      Receita Federal (Analista Tributário) Estatística                                166
      www.estrategiaconcursos.com.br                                                   183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                LISTA DE QUESTÕES – FGV

Outros Tipos de Permutação

1.      (FGV/2021 – FUNSAÚDE/CE) Eduardo deseja escrever as 4 letras da palavra RATO de modo que a
letra A esteja à esquerda da letra O. Por exemplo, uma das maneiras de escrevê-las respeitando a restrição
dada é ARTO. O número de maneiras distintas que Eduardo tem para satisfazer o seu desejo é:

a) 24

b) 18

c) 16

d) 12

e) 8

2.     (FGV/2021 – IMBEL) Considere as cinco letras da sigla IMBEL. Deseja-se arrumar essas cinco letras
em sequência, de modo que tanto as vogais quanto as consoantes apareçam na ordem alfabética, isto é,
as vogais na ordem E, I e as consoantes na ordem B, L, M. Por exemplo, uma dessas arrumações é BELMI.
O número de arrumações diferentes é

a) 18

b) 12

c) 10

d) 8

e) 6

        Receita Federal (Analista Tributário) Estatística                                              167
        www.estrategiaconcursos.com.br                                                                 183

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 05

3.      (FGV/2021 – IMBEL) Artur, Breno, Caio e Diogo fizeram uma fila nessa ordem para uma fotografia.
Em seguida, o fotógrafo pediu que fizessem uma fila diferente para outra fotografia, de forma que apenas
uma das quatro pessoas ficasse no seu lugar original. Indique o número de maneiras diferentes que a nova
fila pode ser feita.

a) 2

b) 4

c) 6

d) 8

e) 10
                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                                            168
        www.estrategiaconcursos.com.br                                                               183

                                      


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1. LETRA D                                  2. LETRA C                  3. LETRA D

      Receita Federal (Analista Tributário) Estatística                               169
      www.estrategiaconcursos.com.br                                                  183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                  LISTA DE QUESTÕES – FGV

Arranjo e Combinação

1.     (FGV/2025 – TCE/RR) Os números 1, 2, 3 e 4 devem ser colocados cada um em um dos quadradinhos
da figura abaixo (permanecendo dois quadradinhos vazios) de forma que, da esquerda para a direita,
mantenham a ordem crescente.

O número de maneiras diferentes em que os quatro números podem ser colocados da forma descrita
acima é

a) 10
b) 12.
c) 15
d) 20.
e) 30.

2.     (FGV/2023 – SEFAZ/MG) Os carros A, B, C e D ocupam quatro das seis vagas do estacionamento
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

          Receita Federal (Analista Tributário) Estatística                                      170
          www.estrategiaconcursos.com.br                                                         183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

3.     (FGV/2022 – PC/RJ) Do grupo dos 6 novos policiais de uma delegacia, 2 deles serão escolhidos para
um treinamento especial.

O número de pares diferentes de policiais que podem ser enviados para o treinamento especial é:

a) 10.
b) 12.
c) 15.
d) 16.
e) 18.

4.     (FGV/2022 – SEMSA Manaus) Um conjunto é formado por peças de mesma forma e tamanho da
que está abaixo. Cada peça tem bolinhas nos vértices e uma no interior.

As peças do conjunto são todas diferentes entre si, pois em cada uma, duas bolinhas são pretas e as demais
brancas, como mostra o exemplo a seguir.

O número máximo de peças desse conjunto é

a) 8.
b) 9.
c) 10.
d) 16.
e) 20.

5.     (FGV/2022 – EPE) De um grupo composto por cinco homens e cinco mulheres, serão sorteados ao
acaso dois homens e duas mulheres para formar um subgrupo representativo do grupo.

O número de diferentes subgrupos que podem ser formados é igual a

         Receita Federal (Analista Tributário) Estatística                                             171
         www.estrategiaconcursos.com.br                                                                183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 60
b) 80
c) 100
d) 120
e) 160

6.    (FGV/2022 – EPE) Doze pessoas, representantes de torcidas organizadas, estão reunidas numa sala:
quatro flamenguistas, quatro tricolores e quatro vascaínos. Elas decidem formar um grupo de trabalho
composto por dois flamenguistas, dois tricolores e dois vascaínos. O número de diferentes grupos que
podem ser formados é igual a

a) 27
b) 54
c) 108
d) 216
e) 432

7.    (FGV/2022 – PC-AM) Os times X (Nacional) e Y (São Raimundo) jogaram pelo campeonato
amazonense e 5 gols foram marcados. Sílvio viu o jogo e fez uma lista da ocorrência dos gols como mostra
o quadro abaixo.

                                                             Gol de
                                    1º tempo - 23 min          X
                                    1º tempo - 44 min
                                    2º tempo - 55 min
                                    2º tempo - 70 min
                                    2º tempo - 91 min

Por algum motivo, só a primeira anotação permaneceu, mas Sílvio lembra-se que o time X ganhou a
partida. A coluna dos gols pode ter sido preenchida por Sílvio do seguinte número de maneiras:

a) 5
b) 7
c) 9
d) 11
e) 13

         Receita Federal (Analista Tributário) Estatística                                           172
         www.estrategiaconcursos.com.br                                                              183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

8.      (FGV/2022 – SSP-AM) Para o novo cartão de crédito, Renato precisa cadastrar uma senha de 4
dígitos de 0 a 9. Como nasceu em 1998 decidiu que sua senha terá dois “noves” em qualquer posição, mais
dois dígitos diferentes de 9 e diferentes entre si. Por exemplo, 0959 e 2399 são senhas que Renato pode
escolher.

O número total de senhas que Renato poderá escolher

a) é menor que 300
b) está entre 300 e 350
c) está entre 351 e 400
d) está entre 401 e 450
e) é maior que 451

9.    (FGV/2022 – CBM-AM) A senha bancária de João possui quatro dígitos. Ele esqueceu a senha, mas
lembra-se que ela possui dois dígitos iguais e ímpares e mais dois dígitos pares e diferentes entre si.
Lembrando que 0 (zero) é par, o número de senhas diferentes que cumprem essas condições é

a) 540
b) 600
c) 720
d) 960
e) 1200

10.     (FGV/2022 – TJDFT) Um restaurante oferece 7 sabores de pizza, sendo que cada pizza só pode ter 1
sabor, isto é, o restaurante não permite a mistura de sabores dentro da mesma pizza. Um grupo de amigos
pretende pedir 4 pizzas. O número possível de escolhas é:

a) 35.
b) 40.
c) 55.
d) 105.
e) 210.

11.    (FGV/2021 – FunSaúde-CE) Em um setor de uma empresa trabalham 6 pessoas. Dessas pessoas,
duas serão escolhidas para trabalhar em um projeto novo. Com essas pessoas, o número de pares
diferentes que podem ser formados é

          Receita Federal (Analista Tributário) Estatística                                          173
          www.estrategiaconcursos.com.br                                                             183

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 05

a) 10
b) 12.
c) 13.
d) 14.
e) 15.

12.   (FGV/2019 – Pref. Angra dos Reis/RJ) Em um torneio de handebol, no qual cada time joga uma única
vez com cada um dos outros, há 6 times participantes. O número de jogos desse torneio é

a) 30.
b) 24.
c) 21.
d) 20.
e) 15.

13.    (FGV/2019 – Pref. Salvador/BA) Os cinco times de futebol de certo município disputarão um torneio
em que cada time jogará uma vez com cada um dos outros times. O número de partidas que serão
realizadas é

a) 8

b) 9

c) 10

d) 15

e) 20

14.    (FGV/2019 – Pref. Angra dos Reis/RJ) Deseja-se pintar os lados de um quadrado feito de madeira,
sendo cada lado de uma única cor. Lados opostos devem ter a mesma cor e lados adjacentes devem ter
cores diferentes. Dispõe-se de 5 cores diferentes. O número de maneiras diferentes de pintar o quadrado
nas condições dadas é

a) 20.

b) 16.

         Receita Federal (Analista Tributário) Estatística                                           174
         www.estrategiaconcursos.com.br                                                              183

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 05

c) 12.

d) 10.

e) 8.

15.    (FGV/2019 – MPE/RJ) Considere quatro cartões, cada um deles com uma das letras M, P, R, J e três
urnas numeradas 1, 2 e 3.

O número de maneiras diferentes de distribuir os quatro cartões pelas três urnas, de tal modo que uma
das urnas fique com dois cartões e cada uma das outras duas urnas fique com um cartão, é:

a) 36;

b) 32;

c) 24;

d) 18;

e) 12.

16.  (FGV/2018 – ALE-RO) O número de subconjuntos do conjunto {2,3,4,5,6,7,8} que têm, pelo menos,
um número ímpar é

a) 112.
b) 113.
c) 114.
d) 115.
e) 116.

17.    (FGV/2017 – Prefeitura de Salvador/BA) Uma casa mal-assombrada tem 5 janelas. O número de
maneiras diferentes pelas quais um fantasma pode entrar por uma janela qualquer e sair por outra
diferente é.

a) 9.
b) 10.
c) 16.

          Receita Federal (Analista Tributário) Estatística                                         175
          www.estrategiaconcursos.com.br                                                            183

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 05

d) 20.
e) 25.

18.    (FGV/2015 – TJ-RO) João tem 5 processos que devem ser analisados e Arnaldo e Bruno estão
disponíveis para esse trabalho. Como Arnaldo é mais experiente, João decidiu dar 3 processos para
Arnaldo e 2 para Bruno. O número de maneiras diferentes pelas quais João pode distribuir esses 5
processos entre Arnaldo e Bruno é:

a) 6.
b) 8.
c) 10.
                                                             ==219a34==

d) 12.
e) 15.

19.    (FGV/2015 – TJ-PI) No primeiro turno do campeonato piauiense de futebol 6 times participam, mas
somente 4 chegam às semifinais. O número de possibilidades diferentes para o conjunto dos 4 times que
estarão nas semifinais é:

a) 10

b) 12

c) 15

d) 18

e) 30

20.   (FGV/2015 – TCE-SE) João tem 4 primas e 3 primos, deseja convidar duas dessas pessoas para ir ao
cinema, mas não quer que o grupo seja exclusivamente masculino.

O número de maneiras diferentes pelas quais João pode escolher seus dois convidados é:

a) 9
b) 12
c) 15
d) 16
e) 18


         Receita Federal (Analista Tributário) Estatística                                         176
         www.estrategiaconcursos.com.br                                                            183

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 05

21.     (FGV/2015 – IBGE) Uma senha de 4 símbolos deve ser feita de forma a conter dois elementos
distintos do conjunto {A, B, C, D, E} e dois elementos distintos do conjunto {0, 1, 2, 3, 4, 5}, em qualquer
ordem. Por exemplo, a senha 2EC4 é uma das senhas possíveis.

Nesse sistema, o número de senhas possíveis é:

a) 2400

b) 3600

c) 4000

d) 4800

e) 6400

          Receita Federal (Analista Tributário) Estatística                                              177
          www.estrategiaconcursos.com.br                                                                 183

                                        


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1.   LETRA C                                9. LETRA B                  17. LETRA D
 2.   LETRA D                                10. LETRA E                 18. LETRA C
 3.   LETRA C                                11. LETRA E                 19. LETRA C
 4.   LETRA C                                12. LETRA E                 20. LETRA E
 5.   LETRA C                                13. LETRA C                 21. LETRA B
 6.   LETRA D                                14. LETRA D
 7.   LETRA D                                15. LETRA A
 8.   LETRA D                                16. LETRA A

      Receita Federal (Analista Tributário) Estatística                                178
      www.estrategiaconcursos.com.br                                                   183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                LISTA DE QUESTÕES – FGV

Partições

1.    (FGV/2015 – SMF-Niterói/RJ) João coordena as 5 pessoas da equipe de manutenção de uma
empresa e deve designar, para cada dia, as pessoas para as seguintes funções:

   •    uma pessoa da equipe para abrir o prédio da empresa e fiscalizar o trabalho geral;
   •    duas pessoas da equipe para o trabalho no turno da manhã, deixando as outras duas para o turno
        da tarde.

O número de maneiras diferentes pelas quais João poderá organizar essa escala de trabalho é:

a) 10

b) 15

c) 20

d) 30

e) 60

        Receita Federal (Analista Tributário) Estatística                                          179
        www.estrategiaconcursos.com.br                                                             183

                                      


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1. LETRA D

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                  180
      www.estrategiaconcursos.com.br                                     183

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 05

                                  LISTA DE QUESTÕES – FGV

Lemas de Kaplansky

1.     (FGV/2022 – TRT/AM) Alberto deverá fazer um tratamento contínuo de fisioterapia durante longo
tempo. Para isso, deverá fixar 2 dias na semana (de 7 dias) para realizar as atividades do tratamento, mas
esses dias não podem ser seguidos.

O número de maneiras diferentes em que esses 2 dias podem ser fixados é igual a

a) 12.

b) 14.                                                        ==219a34==

c) 15.

d) 18.

e) 20.

2.    (FGV/2021 - Pref. Paulínia) O número de anagramas da palavra PAULINIA que não têm duas
consoantes juntas é

a) 3600
b) 4800
c) 6400
d) 10800
e) 14400

3.     (FGV/2015 – SSP-AM) Sete pessoas formam uma fila e duas delas serão escolhidas para receber um
brinde. O número de maneiras diferentes de escolher duas pessoas da fila que não sejam vizinhas é:

a) 15
b) 18
c) 20
d) 24
e) 30

          Receita Federal (Analista Tributário) Estatística                                            181
          www.estrategiaconcursos.com.br                                                               183

                                        


---

Equipe Exatas Estratégia Concursos
Aula 05

                                                GABARITO
 1. LETRA B                                  2. LETRA A                  3. LETRA A

      Receita Federal (Analista Tributário) Estatística                               182
      www.estrategiaconcursos.com.br                                                  183

                                    


---

---
