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
arquivo_origem: Aula 07_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: Índice
---

# Índice

Índice
1)  Introdução - Probabilidade


)  Noções Iniciais sobre Probabilidade                                                                                                                                                       4

3)  Definição Clássica de Probabilidade


4)  Combinações de Eventos                                                                                                                                                                  20
..............................................................................................................................................................................................

)  Axiomas de Probabilidade                                                                                                                                                                41

6)  Probabilidade Condicional                                                                                                                                                               46
..............................................................................................................................................................................................

)  Questões Comentadas - Definição Clássica de Probabilidade - FGV                                                                                                                         75

8)  Questões Comentadas - Combinações de Eventos e Probabilidade - FGV                                                                                                                    109
)  Questões Comentadas - Axiomas de Probabilidade - FGV                                                                                                                                  116
..............................................................................................................................................................................................

)   Questões Comentadas - Probabilidade Condicional - FGV                                                                                                                               118

11)   Lista de Questões - Definição Clássica de Probabilidade - FGV                                                                                                                       169
)   Lista de Questões - Combinações de Eventos e Probabilidade - FGV                                                                                                                    183
..............................................................................................................................................................................................

)   Lista de Questões - Axiomas de Probabilidade - FGV                                                                                                                                  187

14)   Lista de Questões - Probabilidade Condicional - FGV                                                                                                                                 189
..............................................................................................................................................................................................


---

Olá, amigos! Tudo certo até aqui com Estatística?

Nesta aula, vamos estudar a Teoria da Probabilidade. Além de ser um tópico muito frequente nas provas de
concursos, ela também é a base para todo o estudo de Estatística Inferencial.

A matéria não é complicada, mas é preciso entender bem um assunto antes de passar para o próximo,
porque ela é bem encadeada. Então, vamos com bastante calma!

Te espero!

Luana Brandão

Não me conhece? Sou Doutora em Engenharia de Produção, pela Universidade Federal Fluminense, e
Auditora Fiscal da SEFAZ-RJ. Quero muito te ajudar com Estatística, para você conseguir a tão sonhada
aprovação!

                            Se tiver alguma dúvida, entre em contato comigo!

             professoraluanabrandao@gmail.com

             @professoraluanabrandao

                           “Determinação, coragem e autoconfiança são fatores decisivos para o sucesso.”

                                                                                             Dalai Lama


---

                                     PROBABILIDADE

Conceitos Iniciais

A Teoria da Probabilidade é o ramo da Estatística que estuda experimentos e fenômenos aleatórios, cujos
resultados são incertos. Como exemplo, podemos citar:

    •   lançamentos de dados ou moedas;
    •   seleções feitas ao acaso (ou aleatoriamente), como de uma carta no baralho, de uma pessoa ou peça
        dentro de um grupo, etc.;
    •   fenômenos naturais, como chuva em determinado dia.

Embora os resultados sejam incertos, se tais experimentos ou fenômenos são repetidos muitas vezes, é
possível encontrar certo padrão em seus resultados. Se lançarmos uma moeda comum muitas vezes
esperamos que, em torno de metade das vezes, a face superior seja cara e, na outra metade, coroa.

Porém, para encontrar tal padrão, é necessário que os experimentos/fenômenos possam ser repetidos
indefinidamente, sob condições inalteradas.

Um exemplo em que essa condição não é atendida é o lançamento de uma moeda próximo a um bueiro. Em
algum lançamento, é possível que a moeda caia no bueiro, não sendo mais possível repetir o experimento.
Para esse tipo de situação, não podemos utilizar todos os conceitos da Teoria da Probabilidade que
estudaremos aqui.

        Os Experimentos/Fenômenos aleatórios:

        i)     Podem ser repetidos indefinidamente, sob condições inalteradas;
        ii)    Apresentam resultado incerto, porém com um padrão conhecido.

Espaço Amostral

O Espaço Amostral de um experimento/fenômeno aleatório é o conjunto de todos os resultados possíveis.
Também podemos chamar o Espaço Amostral de Universo, e ele pode ser representado como U ou .

No lançamento de uma moeda, por exemplo, o Espaço Amostral é o conjunto:

                                          UM = {CARA, COROA}


---

Para o lançamento de um dado (com 6 faces), o Espaço Amostral é o conjunto:

                                          UD = {1, 2, 3, 4, 5, 6}

Se o experimento for o lançamento de 2 moedas, o Espaço Amostral é dado por:

                U2M = {(CARA, CARA), (CARA, COROA), (COROA, CARA), (COROA, COROA)}

Podemos, ainda, chamar cada resultado possível de ponto amostral. No lançamento de 2 moedas que
acabamos de ver, por exemplo, há 4 pontos amostrais.

(2017 – Secretaria de Educação/MG) Em Teoria das Probabilidades, um conceito importante ao se trabalhar
com experimentos aleatórios é o conceito de Espaço Amostral. Assinale a alternativa que indica o correto
significado deste conceito.
a) Conjunto de todos os resultados possíveis do experimento
b) Tamanho total da amostra
c) Proporção entre o tamanho da amostra tomada e o tamanho total da população
d) Intervalo no qual as probabilidades somadas ultrapassam 0,5
e) Somatória dos todos os possíveis resultados de um experimento
Comentários:
O Espaço Amostral de um experimento é o conjunto de todos os seus resultados possíveis.
Gabarito: A

Evento

Um evento é todo e qualquer subconjunto do Espaço Amostral.

Por exemplo, no lançamento de 2 moedas, podemos chamar de evento A aquele em que ambas as moedas
apresentam o mesmo resultado para a face superior. Portanto, o evento A é o subconjunto:

                                  A = {(CARA, CARA), (COROA, COROA)}


---

Observamos que o evento A apresenta 2 elementos (ou 2 pontos amostrais). Denotamos o número de
elementos do evento A por n(A). Nesse exemplo, temos:

                                                n(A) = 2

Considerando como exemplo o lançamento de 2 dados, podemos chamar de evento B aquele em que a soma
das faces superiores dos dois dados é igual a 12. O evento B é, portanto, o subconjunto:

                                               B = {(6,6)}

Ou seja, temos n(B) = 1. Nesse caso, dizemos que o evento é simples ou elementar.

E se disséssemos que o evento C corresponde ao subconjunto em que a soma das faces superiores dos dois
dados é igual a 13? Nesse caso, não há elemento algum do Espaço Amostral que atenda a esse requisito (a
soma máxima é 12). Por isso, esse evento é um conjunto vazio (simbolizamos o conjunto vazio por ):

                                                 C=

Como não há elemento algum no subconjunto, temos n(C) = 0. Dizemos que esse evento é impossível!

Podemos ter, ainda, um evento que corresponda a todo o Espaço Amostral. Por exemplo, considerando o
lançamento de um único dado, podemos chamar de evento D aquele em que o número indicado na face
superior é menor que 7. Assim, o evento D corresponde ao subconjunto:

                                         D = {1,2,3,4,5,6} = UD

Como ambos os conjuntos (evento D e Espaço Amostral UD) são iguais, o número de elementos de ambos os
conjuntos também é igual: n(D) = n(UD). Dizemos que esse evento é certo!

                                Evento simples ou elementar → n(B) = 1

                                  Evento impossível: C =  → n(C) = 0

                                   Evento certo: D = U → n(D) = n(U)


---

(2017 – Instituto de Previdência de João Pessoa) Sobre as afirmações a seguir, assinale a única correta no
que diz respeito ao espaço amostral.
a) Se Ω é um espaço amostral do experimento, todo subconjunto A contido em Ω será chamado de evento,
Ω é o evento certo, ϕ o evento impossível. Se o evento ω pertence a Ω, o evento {ω} é dito elementar
b) Se Ω é um espaço amostral do experimento, todo subconjunto A contido em Ω será chamado de subespaço
amostral, Ω é o evento certo, ϕ o evento vazio. Se o evento ω pertence a Ω, o evento {ω} é dito elementar
c) Se Ω é um espaço amostral do experimento, todo subconjunto A contido em Ω será chamado de evento,
Ω é o evento vazio, ϕ o evento neutro. Se o evento ω pertence a Ω o evento {ω} é dito elementar.
d) Se Ω é um espaço de probabilidades do experimento, todo subconjunto A contido em Ω será chamado de
evento, Ω é o evento certo, ϕ o evento vazio. Se o evento ω pertence a Ω, o evento {ω} é dito único.
e) Se Ω é um espaço de probabilidades do experimento, todo subconjunto A contido em Ω será chamado de
evento, Ω é o evento certo, ϕ o evento vazio. Se o evento ω pertence a Ω , o evento {ω} é dito unitário.
Comentários:
i) Podemos denotar por Ω um Espaço Amostral (não um espaço de probabilidades, como descrito nas
alternativas “d” e “e”);
ii) Todo subconjunto do Espaço Amostral é chamado de evento (não de subespaço amostral, como descrito
na alternativa “b”);
iii) O evento igual ao Espaço Amostral (Ω) é dito certo (não vazio, como descrito na alternativa “c”);
iv) O evento que corresponde ao conjunto vazio (ϕ) é dito impossível (não neutro, como descrito na
alternativa “c”);
v) O evento com um único elemento, como é o caso de B = {(6, 6)} que vimos anteriormente, é dito
elementar.
Logo, a única afirmação correta é a alternativa A.
Gabarito: A


---

                        DEFINIÇÕES DE PROBABILIDADE
A probabilidade representa as chances de um evento ocorrer. Agora, veremos como ela pode ser calculada.
A principal definição é a clássica, que veremos primeiro. Porém, em alguns casos, ela não pode ser utilizada,
sendo necessário recorrer à definição frequentista de probabilidade, que veremos em seguida.

Definição Clássica

Sendo U o Espaço Amostral, a probabilidade de ocorrer o evento A é, pela definição clássica:

                                                          𝑛(𝐴)
                                               𝑃(𝐴) = 𝑛(𝑈)

Ou seja, a probabilidade de um evento é a razão entre o número de elementos do Evento, 𝑛(𝐴), e o número
de elementos do Espaço Amostral, 𝑛(𝑈).

Por exemplo, no lançamento de 2 moedas, o Espaço Amostral (U2M) é:

                 U2M = {(CARA, CARA), (CARA, COROA), (COROA, CARA), (COROA, COROA)}

E o número de elementos desse Espaço Amostral é:

                                                   n(U2M) = 4

O evento em que ambas as moedas fornecem o mesmo resultado, que vamos chamar de A, é o subconjunto:

                                   A = {(CARA, CARA), (COROA, COROA)}

E o número de elementos do evento A é:

                                                    n(A) = 2

Portanto, a probabilidade de o evento A ocorrer é:

                                                    𝑛(𝐴)   2
                                        𝑃 (𝐴 ) =          = = 0,5
                                                   𝑛(𝑈2𝑀 ) 4

Também podemos dizer que a probabilidade é a razão entre o número de casos favoráveis ao evento e o
número de casos totais:

                                        𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠
                                   𝑃=
                                          𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠


---

         Para utilizar a definição clássica, há uma condição crucial: todos os elementos do Espaço
         Amostral devem ser igualmente prováveis.

         Se isso não for verdade, não podemos utilizar a definição clássica de probabilidade.

         Por exemplo, se tivermos uma moeda viciada, em que a probabilidade de cair CARA é maior
         que a probabilidade de cair COROA, não poderemos utilizar a definição clássica.

(FGV/2019 – Prefeitura de Angra dos Reis/RJ) Uma pesquisa feita com os alunos de uma sala mostrou que
7 alunos torcem pelo Flamengo, 6 pelo Vasco, 5 pelo Fluminense, 4 pelo Botafogo e 3 não torcem por time
nenhum. Escolhendo ao acaso um dos alunos dessa turma, a probabilidade de que ele seja torcedor do Vasco
é de
a) 12%
b) 18%
c) 20%
d) 24%
e) 30%
Comentários:
A probabilidade de escolher um torcedor do Vasco equivale à razão entre o número de torcedores do Vasco
(casos favoráveis) e o número de alunos (casos totais):
                                    𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝑉)
                               𝑃=                             =
                                      𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
O número total de alunos é de:
                                    𝑛(𝑈) = 7 + 6 + 5 + 4 + 3 = 25
O número de torcedores do Vasco é n(V) = 6. Logo, a probabilidade desejada é:
                                              6
                                         𝑃=      = 0,24 = 24%
                                              25
Gabarito: D.


---

(VUNESP/2020 – PM/SP) Em um pote, há 60 balas, todas de mesmo tamanho e formato, embaladas
individualmente. Desse total, 25 são balas de leite com recheio de chocolate, 15 são balas de café sem
recheio, e as demais são balas de frutas também com recheio de chocolate. Retirando-se aleatoriamente
uma bala desse pote, a probabilidade de que ela tenha recheio de chocolate é de
  5
a) 6
   3
b) 4
  2
c) 3
   3
d) 5
Comentários:
A probabilidade de escolher uma bala com recheio de chocolate é a razão entre o número de balas com
recheio de chocolate (casos favoráveis) e o número de balas no total (casos totais):
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝑅𝐶)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
O enunciado informa que há 60 balas, logo, n(U) = 60.
As balas com recheio de chocolate são as balas de leite e as balas de frutas, ou seja, todas as balas exceto as
balas de café. Sabendo que há 15 balas de café, o número de balas com recheio de chocolate é:
                                             n(RC) = 60 – 15 = 45
Logo, a probabilidade desejada é:
                                                     45 3
                                                𝑃=     =
                                                     60 4
Gabarito: B.


(FCC/2017 – Secretaria da Administração/BA) Uma sala de aula com 40 alunos fez uma pesquisa sobre a
ocorrência de dengue no contexto familiar. A pesquisa consistia em tabular, no universo de 120 pessoas, se
cada aluno e seus respectivos pais e mães já tiveram dengue, ou não. As respostas estão tabuladas abaixo.

Sorteando-se ao acaso uma das 120 pessoas pesquisadas, a probabilidade de que ela tenha respondido na
pesquisa que já teve dengue é igual a
a) 2,5%.
b) 2,3%.
c) 7,8%.
d) 3,8%.
e) 1,4%.


---

Comentários:
A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                             𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐷)
                                        𝑃=                   =
                                               𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
Os casos favoráveis correspondem às pessoas que tiveram dengue. A tabela mostra que o número de pessoas
que tiveram dengue é:
                                                n(D) = 1 + 2 = 3
O enunciado informa que, no total, 120 pessoas participaram da pesquisa: n(U) = 120.
Assim, a probabilidade desejada é:
                                                     3   1
                                         𝑃 (𝐷 ) =      =   = 2,5%
                                                    120 40
Gabarito: A.


(CESPE/2018 – EBSERH) Uma pesquisa revelou característica da população de uma pequena comunidade
composta apenas por casais e seus filhos. Todos os casais dessa comunidade são elementos do conjunto 𝐴 ∪
𝐵 ∪ 𝐶, em que
A = {casais com pelo menos um filho com mais de 20 anos de idade};
B = {casais com pelo menos um filho com menos de 10 anos de idade};
C = {casais com pelo menos 4 filhos}.
Considerando que n(P) indique a quantidade de elementos de um conjunto P, suponha que 𝑛(𝐴) = 18;
𝑛(𝐵) = 20; 𝑛(𝐶) = 25; 𝑛(𝐴 ∩ 𝐵) = 13; 𝑛(𝐴 ∩ 𝐶 ) = 11; 𝑛(𝐵 ∩ 𝐶 ) = 12 e 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶 ) = 8. O diagrama
a seguir mostra essas quantidades de elementos.

Com base nas informações e no diagrama precedentes, julgue o item a seguir.
Se um casal dessa comunidade for escolhido ao acaso, então a probabilidade de ele ter menos de 4 filhos
será superior a 0,3.
Comentários:
A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                             𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐸)
                                        𝑃=                   =
                                               𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)


---

Os casos favoráveis correspondem ao número de casais com menos de 4 filhos. Sabendo que C representa
os casais com pelo menos 4 filhos, então os casais com menos de 4 filhos são aqueles que não estão em C,
conforme indicado abaixo:

Assim, o número de casos favoráveis é:
                                           n(E) = 2 + 5 + 3 = 10
E o número de casos totais é:
                                   n(U) = 2 + 5 + 3 + 3 + 8 + 4 + 10 = 35
Logo, a probabilidade é:
                                                 10
                                            𝑃=      ≅ 0,286
                                                 35
Ou seja, é inferior a 0,3.
Gabarito: Errado.


(FGV/2022 – PC/RJ) Treze cadeiras numeradas consecutivamente de 1 a 13 formam uma fila. Quatro pessoas
devem sentar-se nelas e o número da cadeira em que cada uma deve se sentar será decidido por sorteio.
Para as três primeiras pessoas foram sorteados os números 3, 8 e 11 e será feito o sorteio para a última
cadeira a ser ocupada. A probabilidade de que a quarta pessoa NÃO se sente ao lado de nenhuma pessoa já
sentada é:
a) 1/2
b) 1/4
c) 2/5
d) 7/10
e) 4/13
Comentários:
O enunciado informa que há 13 cadeiras e que três pessoas ocupam as cadeiras 3, 8 e 11; e pede a
probabilidade de a quarta pessoa não se sentar ao lado de ninguém.
A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                  𝑃=                        =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)


---

Os eventos possíveis correspondem às 13 - 3 = 10 cadeiras restantes:
                                                  𝑛(𝑈) = 10
E os eventos favoráveis correspondem às cadeiras que não estão ao lado de ninguém sentado, ilustradas a
seguir, em que P representa uma pessoa sentada e X representa uma cadeira ao lado de uma pessoa sentada:

Podemos observar que há 4 cadeiras que não estão ao lado de ninguém sentado (eventos favoráveis):
                                                  𝑛 (𝐴 ) = 4
E a probabilidade é a razão:
                                                  𝑛(𝐴)   4   2
                                             𝑃=        =   =
                                                  𝑛(𝑈) 10 5
Gabarito: C

Para resolver diversas questões de probabilidade, envolvendo a definição clássica, será necessário utilizar as
técnicas de análise combinatória, para calcular o número de elementos do evento e/ou o número de
elementos do Espaço Amostral.

        Vamos supor haja 5 peças amarelas e 6 peças verdes dentro de um saco e que teremos
        que retirar 2 peças sem olhar. Qual é a probabilidade de retirar 2 peças amarelas?

        A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:

                                              𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠         𝑛(𝐴)
                                        𝑃=      𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠
                                                                  = 𝑛(𝑈)

        Os casos favoráveis são as maneiras de retirar 2 dentre as 5 peças amarelas. Como a ordem
        não importa, temos a combinação 2, dentre 5 elementos:

                                                    5!       5×4×3!      5×4
                                 𝑛(𝐴) = 𝐶5,2 = (5−2)!×2! = 3!×2! =              = 10
                                                                            2


        Os casos totais são as maneiras de retirar 2 peças, de um total de 11 peças (entre amarelas
        e verdes), também sem importância de ordem:

                                                  11!        11×10×9!       11×10
                               𝑛(𝑈) = 𝐶11,2 = (11−2)!×2! =              =           = 55
                                                               9!×2!            2

                                                                        10
        Logo, a probabilidade de retirar 2 peças amarelas é: 𝑃 =
                                                                        55


---

E se a ordem importasse?

        Vamos supor, então, que há 5 mulheres e 6 homens, dos quais 2 serão escolhidos para
        ocupar a posição de presidente e vice-presidente do grupo.

        Qual seria a probabilidade de escolher mulheres para ambos os cargos?

        A probabilidade é calculada pela razão:

                                           𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠                 𝑛(𝐴)
                                     𝑃=                                 =
                                             𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠                   𝑛(𝑈)

        Os casos favoráveis são as maneiras de escolher 2 mulheres, dentre as 5, sendo que a
        ordem importa, por serem cargos distintos:

                                                   5!        5×4×3!
                              𝑛(𝐴) = 𝐴5,2 = (5−2)! =                    = 5 × 4 = 20
                                                               3!


        Os casos totais são as maneiras de escolher 2 pessoas, de um total de 11 (dentre mulheres
        e homens), também com importância de ordem:

                                             11!        11×10×9!
                           𝑛(𝑈) = 𝐴11,2 = (11−2)! =                     = 11 × 10 = 110
                                                              9!


        Logo, a probabilidade de escolher 2 mulheres é:

                                                        20         10
                                             𝑃 = 110 = 55

Esse é o mesmo resultado que obtivemos antes!


---

         Quando estivermos escolhendo o mesmo número de elementos, com o mesmo critério
         em relação à importância da ordem, tanto nos casos favoráveis, quanto nos casos totais,
         não faz diferença se consideramos que a ordem importa ou não!

         Se a ordem importa, temos o arranjo, tanto para os casos favoráveis, quanto para os totais.
         Para o nosso exemplo das 5 mulheres e 6 homens, a probabilidade de escolher 2 mulheres
         para cargos distintos foi calculada como:

                                                                   𝟓!
                                                   𝐴5,2         (𝟓−𝟐)!
                                            𝑃=             =      𝟏𝟏!
                                                   𝐴11,2
                                                               (𝟏𝟏−𝟐)!


         Se a ordem não importa, temos a combinação, tanto para os casos favoráveis, quanto para
         os casos totais. Para o nosso exemplo das 5 peças amarelas e 6 peças verdes, a
         probabilidade de escolher 2 peças amarelas, sem importância de ordem, foi:

                                                           5!               𝟓!
                                           𝐶5,2         (5−2)!×𝟐!         (𝟓−𝟐)!
                                     𝑃=𝐶           =       11!      =       𝟏𝟏!
                                            11,2
                                                       (11−2)!×𝟐!        (𝟏𝟏−𝟐)!


         Ou seja, o cálculo da probabilidade será o mesmo, independentemente de a ordem
         importar ou não!

(FGV/2019 – Prefeitura de Salvador/BA) Entre 6 deputados, 3 do Partido A e 3 do Partido B, serão sorteados
2 para uma comissão. A probabilidade de os 2 deputados sorteados serem do Partido A é de:
     1
a) 2
     1
b) 3
     1
c) 4
     1
d)
     5
     1
e) 6


---

Comentários:
A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 2 deputados, dentre todos os 6 (sem importância de ordem):
                                              6!         6 × 5 × 4! 6 × 5
                         𝑛(𝑈) = 𝐶6,2 =                 =           =      = 15
                                         (6 − 2)! × 2!     4! × 2!    2
Os casos favoráveis são as maneiras de escolher 2 deputados, dentre os 3 do Partido A (também sem
importância de ordem):
                                                     3!        3 × 2!
                                𝑛(𝐴) = 𝐶3,2 =                =        =3
                                                (3 − 2)! × 2! 1! × 2!
Logo, a probabilidade desejada é:
                                                     3   1
                                                𝑃=     =
                                                     15 5
Gabarito: D.


(CESPE/2017 – PM-MA) Uma operação policial será realizada com uma equipe de seis agentes, que têm
prenomes distintos, entre eles André, Bruno e Caio. Um agente será o coordenador da operação e outro, o
assistente deste; ambos ficarão na base móvel de operações nas proximidades do local de realização da
operação. Nessa operação, um agente se infiltrará, disfarçado, entre os suspeitos, em reunião por estes
marcada em uma casa noturna, e outros três agentes, também disfarçados, entrarão na casa noturna para
prestar apoio ao infiltrado, caso seja necessário. A respeito dessa situação hipotética, julgue o item seguinte.
Se os dois agentes que ficarão na base móvel forem escolhidos aleatoriamente, a probabilidade de André e
Bruno serem os escolhidos será superior a 30%.
Comentários:
Para calcular a probabilidade, temos:
                                           𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                      𝑃=                   =
                                             𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
Os casos totais correspondem a todas as maneiras de escolher um coordenador e um assistente, dentre 6
agentes. Considerando que os cargos são distintos, temos um arranjo de 2 elementos, dentre 6:
                                               6!      6 × 5 × 4!
                           𝑛(𝑈) = 𝐴6,2 =             =            = 6 × 5 = 30
                                            (6 − 2)!       4!
Os casos favoráveis correspondem às maneiras de escolher André e Bruno como coordenador e assistente,
em qualquer ordem. Podemos ter André como coordenador e Bruno como assistente OU Bruno como
coordenador e Bruno como assistente. Logo, há 2 possibilidades: n(A) = 2. Assim, a probabilidade é:
                                                2   1
                                           𝑃=     =   ≅ 6,7%
                                                30 15
Que é inferior a 30%.
Gabarito: Errado.


---

(FCC/2016 – Conselho Regional de Medicina/SP) Em dezembro serão vistoriados 10 estabelecimentos de
saúde, sendo 2 hospitais, 1 pronto-socorro, 3 ambulatórios e 4 postos de saúde. Sorteando-se ao acaso a
ordem de visita dos 10 estabelecimentos, a probabilidade de que os dois primeiros sejam postos de saúde é
igual a
a) 2/15
b) 4/25
c) 2/25
d) 3/20
e) 3/25
Comentários:
Para calcular a probabilidade de 2 postos de saúde serem os primeiros vistoriados (evento A), utilizamos a
definição clássica de probabilidade:
                                                        𝑛(𝐴)
                                             𝑃 (𝐴 ) =
                                                        𝑛(𝑈)
O Espaço Amostral corresponde a todas as possibilidades de se ordenar 10 elementos:
                                           𝑛(𝑈) = 𝑃10 = 10!
O evento A corresponde às possibilidades de se escolher 2 postos de saúde, dentre 4, sendo a ordem
relevante (arranjo), E de escolher a ordem dos demais 8 elementos (permutação). Pelo princípio
multiplicativo (análise combinatória), temos:
                                                     4!
                                𝑛(𝐴) = 𝐴4,2 × 8! =      × 8! = 4 × 3 × 8!
                                                     2!
A probabilidade do evento A é, portanto:
                                     𝑛(𝐴) 4 × 3 × 8!   4×3      2    2
                          𝑃 (𝐴 ) =        =          =       =     =
                                     𝑛(𝑈)    10!       10 × 9 5 × 3 15
Gabarito: A

Probabilidade como Frequência Relativa ou Empírica

Agora, vamos supor que estejamos observando os resultados de um experimento, repetidos 𝑵 vezes.

Sabendo que um evento específico ocorreu 𝒏 vezes, de um total 𝑵 repetições, podemos calcular a
frequência relativa (ou empírica) do evento, pela fórmula:

                                      𝑛º 𝑑𝑒 𝑜𝑏𝑠𝑒𝑟𝑣𝑎çõ𝑒𝑠 𝑑𝑜 𝑒𝑣𝑒𝑛𝑡𝑜 𝒏
                                𝒇=                               =
                                          𝑛º 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑟𝑒𝑝𝑒𝑡𝑖çõ𝑒𝑠   𝑵


---

Vamos supor que estejamos observando os resultados de sucessivos lançamentos de uma moeda. A
frequência da face COROA será a razão entre o número de vezes em que obtemos COROA e o número total
de lançamentos efetuados:

                                                  𝑛(𝐶𝑂𝑅𝑂𝐴)
                                          𝑓=
                                               𝑛(𝐿𝑎𝑛ç𝑎𝑚𝑒𝑛𝑡𝑜𝑠)

Para ilustrar esse experimento, utilizei o excel para gerar resultados aleatórios, considerando que 0 (zero)
representa CARA e 1 representa para COROA.

Adotando esse procedimento para 100 células, ou seja, 𝑁 = 100, obtive 48 vezes o número 1 (COROA), isto
é, 𝑛 = 48 (se você fizer esse procedimento, é bem possível que obtenha outro resultado).

Portanto, temos a seguinte frequência relativa para COROA:

                                               𝑛   48
                                          𝑓=     =    = 48%
                                               𝑁 100

Esse resultado é próximo da probabilidade de 50% que conhecemos, porém diferente. Para 𝑁 = 1.000,
obtive 505 vezes o número 1, portanto:

                                             𝑛   505
                                        𝑓=     =     = 50,5%
                                             𝑁 1.000

Agora, o resultado ficou mais próximo. Em um último teste, com 𝑁 = 10.000, obtive 𝑛 = 5016:

                                            𝑛   5.016
                                       𝑓=     =       = 50,16%
                                            𝑁 10.000

Observe que estamos nos aproximando cada vez mais do valor de 50%. Ou seja, não podemos dizer que a
frequência é exatamente igual à probabilidade. Porém, quanto maior for o número de experimentos, mais a
frequência relativa se aproxima da probabilidade.

        Para infinitas repetições, a probabilidade se torna igual à frequência relativa:
                                                           𝑛
                                                𝑃 = lim 𝑁
                                                     𝑁→∞


---

Essa definição de probabilidade pode ser utilizada para eventos que não são igualmente prováveis, em que
a definição clássica não pode ser aplicada.

Por exemplo, para uma moeda não equilibrada, se verificamos, após muitos experimentos, que obtemos 1
face COROA a cada 4 lançamentos, então a probabilidade de obter COROA é:

                                                      𝑛 1
                                             𝑝=𝑓=      =
                                                      𝑁 4

(2019 – Prefeitura de Candói/PR) Em uma obra foram entregues 8 milheiros de tijolos maciços. Sabe-se que,
durante o transporte, em média 100 tijolos são danificados. Qual é a probabilidade de, ao acaso, selecionar
um tijolo, e ele estar danificado?
a) 0,00125%
b) 0,0125%
c) 0,125%
d) 1,25%
e) 12,5%
Comentários:
Para resolver essa questão, devemos calcular a probabilidade a partir da frequência relativa observada:
                                       𝑛   100   1
                             𝑃=𝑓=        =     =   = 0,0125 = 1,25%
                                       𝑁 8.000 80
Gabarito: D


---

                           COMBINAÇÕES DE EVENTOS
Nessa seção, veremos formas de combinar eventos. Para esse estudo, pode ser bastante proveitoso utilizar
o Diagrama de Venn, ilustrado abaixo para dois eventos A e B quaisquer, dentro de um Espaço Amostral (U).

                                    A                                 B

                                                                                     U

Teorema da União

A união do evento A com o evento B, que representamos como A  B, é um novo evento, em que estão
incluídos tanto os elementos de A quanto os elementos de B.

Dizemos que, para ocorrer o evento união, pode ocorrer o evento A ou o evento B (ou ambos). A união
corresponde a toda a região cinza indicada no diagrama abaixo.

                                A                                     B

Por exemplo, considerando o lançamento de um dado, se o evento A representa os resultados menores que
4 e o evento B representa os resultados maiores que 3, então a união dos eventos corresponde aos valores
menores que 4 ou maiores que 3.

Temos, portanto, os seguintes subconjuntos:

                                               A = {1, 2, 3}

                                               B = {4, 5, 6}

                                         A  B = {1, 2, 3, 4, 5, 6}


---

        Quando a união de eventos corresponde a todo o Espaço Amostral, dizemos que tais
        eventos são exaustivos.

                                  Eventos A e B Exaustivos: A  B = U

No exemplo que acabamos de ver, a união corresponde à soma dos elementos de A e os elementos de B.

Agora vamos supor que o evento C corresponda aos resultados menores que 5 e o evento D, aos resultados
maiores que 3:

                                              C = {1, 2, 3, 4}

                                               D = {4, 5, 6}

                                         C  D = {1, 2, 3, 4, 5, 6}

Nesse caso, somamos os elementos de C e os elementos de D, mas com atenção para não duplicar os
elementos que constam em C e em D (nesse exemplo, o número 4).

Os elementos que constam em ambos os eventos pertencem à interseção desses eventos, a qual
representamos como C  D, e corresponde à região cinza indicada no diagrama abaixo.

                                     C                                D

Nesse último exemplo, temos:

                                               C  D = {4}

No exemplo anterior, em que A = {1, 2, 3} e B = {4, 5, 6}, não havia elementos que pertencessem tanto ao
evento A, quanto ao evento B, ou seja, a interseção é um conjunto vazio:

                                                AB=


---

        Quando a interseção de eventos é um conjunto vazio, dizemos que tais eventos são
        mutuamente excludentes (ou exclusivos).

        Podemos dizer, ainda, que os conjuntos são disjuntos.

                           Eventos A e B Mutuamente Excludentes: A  B = 

                                 A                                  B

Para calcular o número de elementos na união de C e D, sem duplicarmos os elementos da interseção,
somamos os elementos de ambos os eventos e subtraímos os elementos da interseção, para que não sejam
somados duas vezes:

                                 𝑛(𝐶 ∪ 𝐷) = 𝑛(𝐶) + 𝑛(𝐷)– 𝑛(𝐶 ∩ 𝐷)

Dividindo todos esses termos por n(U), obtemos a fórmula da probabilidade da União:

                                 𝑛(𝐶 ∪ 𝐷) 𝑛(𝐶) 𝑛(𝐷) 𝑛(𝐶 ∩ 𝐷)
                                         =     +     –
                                   𝑛(𝑈)    𝑛(𝑈) 𝑛(𝑈)   𝑛(𝑈)

                                   𝑷(𝑪 ∪ 𝑫) = 𝑷(𝑪) + 𝑷(𝑫)– 𝑷(𝑪 ∩ 𝑫)

Por exemplo, sendo C = {1, 2, 3, 4}, D = {4, 5, 6} e C  D = {4}, as probabilidades dos eventos C, D e da
interseção, considerando o Espaço Amostral U = {1, 2, 3, 4, 5, 6}, são, respectivamente:

                         𝑛(𝐶) 4                   𝑛 (𝐷 ) 3                     𝑛 (𝐶 ∩ 𝐷 ) 1
              𝑃 (𝐶 ) =       = ,       𝑃 (𝐷 ) =         = ,     𝑃 (𝐶 ∩ 𝐷 ) =             =
                         𝑛(𝑈) 6                   𝑛 (𝑈 ) 6                        𝑛 (𝑈 )   6

Com base nessas probabilidades, podemos calcular a probabilidade da união:

                                                                   4 3 1 6
                     𝑃 (𝐶 ∪ 𝐷 ) = 𝑃 (𝐶 ) + 𝑃 (𝐷 ) − 𝑃 (𝐶 ∩ 𝐷 ) =    + − = =1
                                                                   6 6 6 6


---

Para eventos mutuamente excludentes, isto é, que não possuem elementos em sua interseção, como no
caso de A = {1, 2, 3} e B = {4, 5, 6}, a probabilidade da interseção é zero:

                                                     𝑛(𝐴 ∩ 𝐵)    0
                                      𝑃 (𝐴 ∩ 𝐵 ) =            =      = 0
                                                       𝑛(𝑈)     𝑛(𝑈)

Portanto, a probabilidade da união de eventos mutuamente excludentes pode ser calculada como:

                                        P(A  B) = P(A) + P(B) – P(A  B)
                                                                      0
                                           𝑷(𝑨 ∪ 𝑩) = 𝑷(𝑨) + 𝑷(𝑩)

Para o exemplo em que A = {1, 2, 3}, B = {4, 5, 6}, as probabilidades dos eventos A e B, considerando o Espaço
Amostral U = {1, 2, 3, 4, 5, 6}, são, respectivamente:

                                      𝑛(𝐴) 3 1                        𝑛 (𝐵 ) 3 1
                           𝑃 (𝐴 ) =       = = ,            𝑃 (𝐵 ) =         = =
                                      𝑛(𝑈) 6 2                        𝑛 (𝑈 ) 6 2

Como são eventos mutuamente excludentes, a probabilidade da união é:

                                                                  1 1
                                 𝑃 (𝐴 ∪ 𝐵 ) = 𝑃 (𝐴 ) + 𝑃 (𝐵 ) =    + =1
                                                                  2 2

                       Eventos A e B Mutuamente Excludentes: P(A  B) = P() = 0

                   Probabilidade da União (caso geral): P(C  D) = P(C) + P(D) – P(C  D)

                  Probabilidade da União de Eventos Excludentes: P(A  B) = P(A) + P(B)

(FGV/2018 – ALE/RO) Dois eventos A e B ocorrem, respectivamente, com 40% e 30% de probabilidade. A
probabilidade de que A ocorra ou B ocorra é 50%. Assim, a probabilidade de que A e B ocorram é igual a


---

a) 10%
b) 20%
c) 30%
d) 40%
e) 50%
Comentários:
A probabilidade de A OU B ocorrer corresponde à união desses eventos, dada por:
                                  𝑃 (𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
O enunciado informa que:
•   P(A) = 40%
•   P(B) = 30%
•   𝑃(𝐴 ∪ 𝐵) = 50%
Substituindo esses valores na equação da união, temos:
                                     50% = 40% + 30% − 𝑃(𝐴 ∩ 𝐵)
                                     𝑃(𝐴 ∩ 𝐵) = 70% − 50% = 20%
Gabarito: B


(CESPE/2018 – BNB) Um tabuleiro quadrado e quadriculado, semelhante a um tabuleiro de xadrez, com 12
linhas e 12 colunas, e, portanto, com 12 × 12 = 144 quadradinhos pintados: 54, na cor azul; 30, na cor
marrom; 40, na cor amarela; e 20, na cor verde. A cada quadradinho é associado um cartão com dois
números, que indicam a posição do quadradinho no tabuleiro; o primeiro número corresponde ao número
da linha, e o segundo corresponde ao número da coluna. Por exemplo, o cartão com os números 5,10
corresponde ao quadradinho posicionado na linha 5 e na coluna 10. Esses cartões estão em uma urna, da
qual podem ser retirados aleatoriamente.
A respeito desse tabuleiro e desses cartões, julgue o item a seguir.
A probabilidade de retirar dessa caixa, de maneira aleatória, um cartão correspondente a um quadrado
pintado na cor amarela ou na cor verde é superior a 0,44.
Comentários:
A probabilidade de retirar um cartão da cor amarela ou na cor verde corresponde à probabilidade da união
desses eventos.
Considerando que não há interseção entre esses eventos (não existem quadrados amarelos E verdes), então
a probabilidade da união é dada por:
                                         𝑃 (𝐴 ∪ 𝑉 ) = 𝑃(𝐴) + 𝑃(𝑉)
Sabendo que há 40 quadrados amarelos e 144 quadrados no total, a probabilidade de retirar um quadrado
amarelo é:
                                                   𝑛(𝐴)   40   10
                                        𝑃 (𝐴 ) =        =    =
                                                   𝑛(𝑈) 144 36


---

Considerando que há 20 quadrados verdes, a probabilidade de retirar um cartão verde é:
                                                 𝑛(𝑉)   20   5
                                      𝑃 (𝑉 ) =        =    =
                                                 𝑛(𝑈) 144 36
A probabilidade de retirar um cartão amarelo ou verde é, então:
                                              10 5   15   5
                               𝑃 (𝐴 ∪ 𝑉 ) =     +  =    =   ≅ 0,42
                                              36 36 36 12
Ou seja, é inferior a 0,44.
Gabarito: Errado.


(FCC/2019 – Secretaria de Estado da Fazenda/BA) Uma sala contém 20 homens e 30 mulheres em que todos
são funcionários de uma empresa. Verifica-se que metade desses homens e metade dessas mulheres
possuem nível superior. Escolhendo aleatoriamente uma pessoa dessa sala para realizar uma tarefa, a
probabilidade de ela ser mulher ou possuir nível superior é igual a
a) 2/3.
b) 3/10.
c) 5/6.
d) 3/4.
e) 4/5.
Comentários:
Essa questão envolve a união entre os eventos ser mulher (M) com possuir nível superior (S), cuja
probabilidade é calculada por:
                                𝑃(𝑀 ∪ 𝑆) = 𝑃(𝑀) + 𝑃(𝑆) − 𝑃(𝑀 ∩ 𝑆)
A questão informa que o número de mulheres é:
                                                 n(M) = 30
Sabendo que além dessas 30 mulheres, há 20 homens, então o total de pessoas é:
                                           n(U) = 30 + 20 = 50
Logo, a probabilidade de escolher uma mulher é:
                                                     𝑛(𝑀) 𝟑𝟎
                                         𝑃 (𝑀 ) =        =
                                                     𝑛(𝑈) 𝟓𝟎
A questão informa que metade de todas as pessoas possui nível superior. Logo o número de pessoas com
nível superior é:
                                                  50
                                           𝑛 (𝑆 ) =  = 25
                                                   2
Assim, a probabilidade de escolher uma pessoa com nível superior é:
                                                     𝑛(𝑆) 𝟐𝟓
                                          𝑃 (𝑆 ) =       =
                                                     𝑛(𝑈) 𝟓𝟎


---

Por fim, o sabemos que metade das 30 mulheres possui nível superior. Então o número de mulheres com
nível superior (interseção entre os eventos) é:
                                                      30
                                          𝑛(𝑀 ∩ 𝑆) =     = 15
                                                      2
Logo, a probabilidade associada à interseção dos eventos é:
                                                    𝑛(𝑀 ∩ 𝑆) 𝟏𝟓
                                     𝑃 (𝑀 ∪ 𝑆 ) =            =
                                                      𝑛 (𝑈 )   𝟓𝟎
Substituindo os valores que calculamos na equação da probabilidade da união, temos:
                                                𝟑𝟎 𝟐𝟓 𝟏𝟓 40 4
                                 𝑃 (𝑀 ∪ 𝑆 ) =     +  −  =  =
                                                𝟓𝟎 𝟓𝟎 𝟓𝟎 50 5
Gabarito: E.

União de Três Eventos

A união de 3 eventos, A, B e C, pode ser representada pelo seguinte Diagrama de Venn:

                            A              a        y             b          B

                                                    x
                                                z           w

                                                     c

                                          C

A união corresponde à soma de todos os elementos indicados no diagrama acima:

                                                                n(B)
                                  n(A  B  C) = a + z + y + x + b + w + c
                                                         n(A)          n(C)

Podemos observar que há diversos elementos que se repetiriam se simplesmente somássemos os elementos
de A, de B e de C para encontrar a união dos três eventos. Na verdade, estaríamos somando duas vezes os
elementos das interseções, 2 a 2, e três vezes os elementos da interseção de todos os conjuntos.

Porém, ao subtrairmos os elementos da interseção 2 a 2, estaríamos deixando de fora os elementos da
interseção de todos os três eventos. Por isso, precisamos somá-los novamente.

Assim, a união de 3 eventos é dada por:

        𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶)– 𝑛(𝐴 ∩ 𝐵)– 𝑛(𝐵 ∩ 𝐶)– 𝑛(𝐴 ∩ 𝐶) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)


---

Dividindo todos os termos por n(U), obtemos a fórmula da probabilidade da união de 3 eventos:

       𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) 𝑛(𝐴) 𝑛(𝐵) 𝑛(𝐶) 𝑛(𝐴 ∩ 𝐵) 𝑛(𝐵 ∩ 𝐶) 𝑛(𝐴 ∩ 𝐶) 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)
                   =     +    +     –      –        –        +
           𝑛(𝑈)      𝑛(𝑈) 𝑛(𝑈) 𝑛(𝑈)   𝑛(𝑈)    𝑛(𝑈)     𝑛(𝑈)       𝑛(𝑈)

        𝑃(𝐴 ∪ 𝐵 ∪ 𝐶) = 𝑃(𝐴) + 𝑃(𝐵) + 𝑃(𝐶)– 𝑃(𝐴 ∩ 𝐵)– 𝑃(𝐵 ∩ 𝐶)– 𝑃(𝐴 ∩ 𝐶) + 𝑃(𝐴 ∩ 𝐵 ∩ 𝐶)

Em vez de decorar a fórmula, pode ser mais simples utilizar o diagrama de Venn para encontrar o número
de elementos da união 𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) e depois dividir o resultado por 𝑛(𝑈).

        Vamos considerar as seguintes informações, a respeito das probabilidades de 3 eventos:

        •   P(A) = 1/2
        •   P(B) = 5/8
        •   P(A ∩ B) = 1/4
        •   P(A ∩ C) = 5/16
        •   P(B ∩ C) = 3/8
        •   P(A ∩ B ∩ C) = 3/16
        •   P(A ∪ B ∪ C) = 1

        Com essas informações, podemos calcular P(C). Para isso, vamos primeiro utilizar a fórmula
        da probabilidade da união e substituir as informações do enunciado:

                P(ABC) = P(A) + P(B) + P(C) – P(AB) – P(BC) – P(AC) + P(AB C)

                                        1   5              1    5   3   3
                                   1 = 2 + 8 + 𝑃 (𝐶 ) − 4 − 16 − 8 + 16

                                                 8+10−4−5−6+3               6
                                  1 = 𝑃 (𝐶 ) +                  = 𝑃(𝐶 ) + 16
                                                      16

                                                           3    5
                                            𝑃 (𝐶 ) = 1 − 8 = 8

Alternativamente, podemos utilizar o diagrama de Venn, e preencher os valores fornecidos, começando
pela interseção de 3 eventos.


---

                                   A                                        B

                                                         x
                                                      3/16

                                                  y              z


                                          C

O valor de x corresponde à probabilidade dos elementos da interseção de A e B, A ∩ B, que não estão na
interseção de todos os 3 eventos, A ∩ B ∩ C, isto é, a diferença entre P(A ∩ B) e P(A ∩ B ∩ C):

                                                                     1 3    4−3   1
                       𝑥 = 𝑃 (𝐴 ∩ 𝐵 ) − 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =              −   =     =
                                                                     4 16    16   16

O valor de y corresponde à probabilidade dos elementos da interseção de A e C, A ∩ C, que não estão na
interseção de todos os 3 eventos, A ∩ B ∩ C, isto é, a diferença entre P(A ∩ C) e P(A ∩ B ∩ C):

                                                                        5   3   2
                           𝑥 = 𝑃 (𝐴 ∩ 𝐶 ) − 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =              −   =
                                                                        16 16 16

O valor de z corresponde à probabilidade dos elementos da interseção de B e C, B ∩ C, que não estão na
interseção de todos os 3 eventos, A ∩ B ∩ C, isto é, a diferença entre P(B ∩ C) e P(A ∩ B ∩ C):

                                                                     3 3    6−3   3
                       𝑥 = 𝑃 (𝐵 ∩ 𝐶 ) − 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =              −   =     =
                                                                     8 16    16   16

Inserindo esses valores no diagrama de Venn, temos:
                                   A                                            B
                                              𝑎          1/16           𝑏

                                                         3/16
                                                  2/16           3/16


                                                             𝑐
                                          C

O valor de 𝑎 corresponde à probabilidade dos elementos de A que não pertencem a qualquer interseção:
                                                             1 1   2   3   8−6   2
                𝑎 = 𝑃 ( 𝐴 ) − 𝑥 − 𝑦 − 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =        −  −   −   =     =
                                                             2 16 16 16     16   16
O valor de 𝑏 corresponde à probabilidade dos elementos de B que não pertencem a qualquer interseção:
                                                             5 1   3   3   10 − 7   3
               𝑏 = 𝑃 (𝐵 ) − 𝑥 − 𝑧 − 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =          −  −   −   =        =
                                                             8 16 16 16      16     16


---

Assim, o valor de 𝑐 pode ser calculado como a diferença entre a probabilidade da união dos 3 eventos e
todos os demais campos. Para facilitar, em vez de subtrair todos os campos separadamente, podemos
                     3        3
subtrair P(A), 𝑏 = 16 e 𝑧 = 16:

                                                             1 3   3   16 − 8 − 6   2
                 𝑐 = 𝑃 (𝐴 ∪ 𝐵 ∪ 𝐶 ) − 𝑃 (𝐴 ) − 𝑏 − 𝑧 = 1 −    −  −   =            =
                                                             2 16 16       16       16
                                         2       2       3                     3
Logo, o valor de P(C) é a soma de 𝑐 = 16, 𝑦 = 16, 𝑧 = 16 e 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) = 16:

                                                             2   2   3   3   10 5
                     𝑃 (𝐶 ) = 𝑐 + 𝑦 + 𝑧 + 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =     +   +   +   =   =
                                                             16 16 16 16 16 8

(FCC/2018 – SEPLAG de Recife/PE) Em um censo realizado em uma cidade em que são consumidos somente
os sabonetes de marca X, Y e Z, verifica-se que:
I.        40% consomem X.
II.       40% consomem Y.
III.      47% consomem Z.
IV.       15% consomem X e Y.
V.        5% consomem X e Z.
VI.       10% consomem Y e Z.
VII.      qualquer elemento da população consome pelo menos uma marca de sabonete.
Então, escolhendo aleatoriamente um elemento dessa população, a probabilidade de ele consumir uma e
somente uma marca de sabonete é igual a
a) 79%.
b) 70%.
c) 60%.
d) 80%.
e) 76%.
Comentários:
Como toda a população consome alguma marca, então vamos aplicar a fórmula da probabilidade da união,
que vimos, para calcular a interseção de todos os eventos:
             P(X  Y  Z) = P(X) + P(Y) + P(Z) – P(X  Y) – P(X  Z) – P(Y  Z) + P(X  Y  Z) = 100%
                          40% + 40% + 47% – 15% – 5% – 10% + P(X  Y  Z) = 100%
                                        P(X  Y  Z) = 100% – 97% = 3%


---

Agora, vamos utilizar o diagrama de Venn.
Começamos preenchendo P(X  Y  Z). Em seguida, inserimos as interseções dois a dois, subtraindo-se o
valor de P(X  Y  Z). Por fim, inserimos os valores correspondentes a cada marca, individualmente,
subtraindo-se todas as interseções.
                                     X                                  Y


                                                       12%
                                             23%                  18%
                                                       3%
                                              2%             7%


                                                       35%
                                 Z


Portanto, a probabilidade de o elemento consumir apenas uma marca é:
                                         23% + 18% + 35% = 76%
Gabarito: E

Teorema do Evento Complementar

O complementar de um evento corresponde a todos os elementos do Espaço Amostral que não pertencem
a tal evento, como representado abaixo (a região em cinza corresponde ao complementar de A).

                                                   A


                                                                        U


No exemplo do lançamento de um dado, em que 𝐶 = {1, 2, 3, 4}, o evento complementar de 𝐶, indicado por
̅ , corresponde ao seguinte subconjunto:
𝑪

                                                   𝐶̅ = {5, 6}

Por definição, o número de elementos do evento somado ao número de elementos do complementar é
igual ao total de elementos:

                                            𝑛(𝐶 ) + 𝑛(𝐶̅ ) = 𝑛(𝑈)


---

Dividindo toda a equação por 𝑛(𝑈), podemos calcular a probabilidade do evento complementar:

                                         𝑛(𝐶 ) 𝑛(𝐶̅ ) 𝑛(𝑈)
                                              +      =
                                         𝑛(𝑈) 𝑛(𝑈) 𝑛(𝑈)

                                             𝑃 (𝐶 ) + 𝑃 (𝐶 ̅ ) = 1

                                              ̅ ) = 𝟏 − 𝑷(𝑪)
                                            𝑷(𝑪

Para o exemplo do lançamento do dado, em que 𝐶 = {1, 2, 3, 4} e o Espaço Amostral é 𝑈 = {1, 2, 3, 4, 5, 6},
a probabilidade do evento C é:
                                                      𝑛 (𝐶 ) 4 2
                                         𝑃 (𝐶 ) =           = =
                                                      𝑛(𝑈) 6 3
Pelo Teorema do Evento Complementar, a probabilidade do seu complementar é:
                                                                     2 1
                                     𝑃 (𝐶̅ ) = 1 − 𝑃 (𝐶 ) = 1 −       =
                                                                     3 3
De fato, sabemos que o evento complementar é 𝐶̅ = {5, 6}. Pela definição clássica de probabilidade, temos:

                                                      𝑛 (𝐶 ̅ ) 2 1
                                         𝑃 (𝐶 ̅ ) =           = =
                                                      𝑛 (𝑈 ) 6 3
Que é justamente o resultado que encontramos aplicando o Teorema do Evento Complementar.

(2019 – Prefeitura de Palhoça/SC) Uma urna tem dez bolas vermelhas, três azuis e duas pretas. Qual é
probabilidade de sortearmos uma bola que não seja da cor vermelha?
a) 33,33%
b) 45,66%
c) 38,23%
d) 25,45%
Comentários:
A probabilidade do evento complementar é:
                                             𝑃(𝐴̅) = 1 − 𝑃(𝐴)


---

A probabilidade de sortear uma bola vermelha, sabendo que há 10 bolas vermelhas e 15 bolas no total, é:
                                                          𝑛(𝐴) 10
                                               𝑃 (𝐴 ) =       =
                                                          𝑛(𝑈) 15
Assim, a probabilidade de não sortear uma bola vermelha é:
                                              10 15 − 10   5  1
                             𝑃 ( 𝐴̅ ) = 1 −      =       =   = ≅ 33,33%
                                              15   15      15 3
Gabarito: A


(CESPE/2018 – BNB) Um tabuleiro quadrado e quadriculado, semelhante a um tabuleiro de xadrez, com 12
linhas e 12 colunas, e, portanto, com 12 × 12 = 144 quadradinhos pintados: 54, na cor azul; 30, na cor
marrom; 40, na cor amarela; e 20, na cor verde. A cada quadradinho é associado um cartão com dois
números, que indicam a posição do quadradinho no tabuleiro; o primeiro número corresponde ao número
da linha, e o segundo corresponde ao número da coluna. Por exemplo, o cartão com os números 5,10
corresponde ao quadradinho posicionado na linha 5 e na coluna 10. Esses cartões estão em uma urna, da
qual podem ser retirados aleatoriamente.
A respeito desse tabuleiro e desses cartões, julgue o item a seguir.
A probabilidade de retirar dessa caixa, de maneira aleatória, um cartão correspondente a um quadrado que
não tenha sido pintado na cor marrom é inferior a 0,72.
Comentários:
A probabilidade de retirar um cartão que não seja marrom pode ser calculada pelo teorema do evento
complementar:
                                                  ̅ ) = 1 − 𝑃(𝑀)
                                               𝑃 (𝑀
A probabilidade de retirar um cartão marrom é a razão entre o número de cartões marrons e o número de
cartões no total:
                                                            𝑛 (𝑀 )
                                                 𝑃 (𝑀 ) =
                                                            𝑛(𝑈)
O enunciado informa que há:
- 144 quadrados, logo, n(U) = 144; e
- 30 quadrados marrons, logo n(M) = 30
Assim, a probabilidade de retirar um cartão marrom é:
                                                   30   15
                                               𝑃 (𝑀 ) =
                                                      =
                                                  144 72
A probabilidade de retirar um cartão não marrom é complementar:
                                                 15 72 − 15 57
                                    ̅) = 1 −
                                 𝑃 (𝑀               =      =    ≅ 0,79
                                                 72   72     72
Que é superior a 0,72.
Gabarito: Errado.


---

Complementar da União e da Interseção

O Teorema do Evento Complementar 𝑃 (𝐴̅) = 1 − 𝑃(𝐴) pode ser aplicado, mesmo quando o evento A for
resultado de uma combinação de eventos, seja a união seja a interseção.
O complementar da união está representado pela região cinza indicada no diagrama abaixo:

                                             A          B


                                                                 U

Pelo Teorema que acabamos de ver, a probabilidade do complementar da união é dada por:

                                       𝑃(̅̅̅̅̅̅̅
                                         𝐴 ∪ 𝐵) = 1 − 𝑃(𝐴 ∪ 𝐵)

Já o complementar da interseção está representado pela região cinza indicada a seguir:


                                             A             B


                                                                U

Pelo Teorema que acabamos de ver, a probabilidade do complementar da interseção é:

                                       𝑃(̅̅̅̅̅̅̅
                                         𝐴 ∩ 𝐵) = 1 − 𝑃(𝐴 ∩ 𝐵)

As seguintes relações também são importantes:

       1. 𝐴̅ ∩ 𝐵̅ = ̅̅̅̅̅̅̅       ̅∩𝑩
                    𝐴 ∪ 𝐵 então P(𝑨 ̅ ) = P(𝑨
                                            ̅̅̅̅̅̅̅̅
                                               ∪ 𝑩) = 1 – P(𝑨 ∪ 𝑩)

A interseção entre o complementar de A e o complementar de B é igual ao complementar da união do
evento A com o evento B, como ilustrado a seguir.

          A                                            B                         A         B
                                 ∩                                   =

                             U                                  U                              U


---

De fato, a situação do tipo “nem A nem B” significa a interseção dos complementares:

                                                não A E não B

Essa situação implica que não temos qualquer elemento de A ou B, ou seja, o complementar da união.

E já sabemos calcular a probabilidade do complementar da união:

                                  𝑃(𝐴̅ ∩ 𝐵̅) = 𝑃(𝐴
                                                 ̅̅̅̅̅̅̅
                                                    ∪ 𝐵) = 1 − 𝑃(𝐴 ∪ 𝐵)

Por exemplo, em um lançamento do dado, em que o Espaço Amostral é U = {1, 2, 3, 4, 5, 6}, vamos supor
que o evento A corresponda a todos os números pares: A = {2, 4, 6} e o evento B corresponda aos números
menores que 4: B = {1, 2, 3}.

A união dos eventos é A ∪ B = {1, 2, 3, 4, 6} e sua probabilidade é:

                                                        𝑛(𝐴 ∪ 𝐵) 5
                                         𝑃 (𝐴 ∪ 𝐵 ) =           =
                                                          𝑛(𝑈)    6

Aplicando a fórmula, podemos calcular a probabilidade de não ocorrer A nem B (não A E não B):

                                                                        5 1
                                  𝑃(𝐴̅ ∩ 𝐵̅) = 1 − 𝑃(𝐴 ∪ 𝐵) = 1 −        =
                                                                        6 6

De fato, podemos observar que o elemento que não pertence ao evento A e nem ao evento B é 𝐴̅ ∩ 𝐵̅ = {5},
cuja probabilidade é:

                                                        𝑛(𝐴̅ ∩ 𝐵̅) 1
                                         𝑃(𝐴̅ ∩ 𝐵̅) =             =
                                                          𝑛(𝑈)      6

Que é justamente o resultado que obtivemos aplicando a fórmula 𝑃(𝐴̅ ∩ 𝐵̅) = 1 − 𝑃(𝐴 ∪ 𝐵).

       2. 𝐴̅ ∪ 𝐵̅ = ̅̅̅̅̅̅̅       ̅∪𝑩
                    𝐴 ∩ 𝐵 então P(𝑨 ̅ ) = P(𝑨
                                            ̅̅̅̅̅̅̅̅
                                               ∩ 𝑩) = 1 – P(𝑨 ∩ 𝑩)

A união do complementar de A com o complementar de B é igual ao complementar da interseção de A e B,
como ilustrado abaixo.


          A                                                B                   A            B
                                  ∪                                     =

                              U                                    U                              U


---

Vamos supor que em um restaurante haja 𝑥 pessoas que estejam comendo e bebendo, 𝑐 pessoas que estejam
só comendo e 𝑏 pessoas que estejam só bebendo.

Primeiro, pedimos que as pessoas que não estejam comendo se levantem (as 𝑏 pessoas que estão somente
bebendo se levantarão). Em seguida, pedimos que as pessoas que não estejam bebendo também se levantem
(as 𝑐 pessoas que estão somente comendo se levantarão).

Ao final, estarão em pé as 𝑐 pessoas que estavam somente comendo e as 𝑏 pessoas que estavam somente
bebendo, isto é, todos menos as 𝑥 pessoas que estavam fazendo as duas coisas (complementar da interseção)
– essas pessoas permanecerão sentadas.

Considerando o exemplo anterior do lançamento do dado, em que A = {2, 4, 6} e B = {1, 2, 3}, a interseção
dos eventos é A ∩ B = {2} e sua probabilidade é:

                                                       𝑛(𝐴 ∩ 𝐵) 1
                                       𝑃 (𝐴 ∩ 𝐵 ) =            =
                                                         𝑛(𝑈)    6

Aplicando a fórmula que acabamos de ver, podemos calcular a probabilidade de não ocorrer o evento A OU
não ocorrer o evento B, que equivale à probabilidade de não ocorrer a interseção 𝐴 ∩ 𝐵:

                                                                          1 5
                          𝑃(𝐴̅ ∪ 𝐵̅) = 𝑃(̅̅̅̅̅̅̅
                                         𝐴 ∩ 𝐵 ) = 1 − 𝑃 (𝐴 ∩ 𝐵 ) = 1 −    =
                                                                          6 6

De fato, os elementos que não pertencem ao conjunto A são 𝐴̅ = {1, 3, 5} e os elementos que não pertencem
ao conjunto B são 𝐵̅ = {4, 5, 6}.

A união desses dois eventos complementares é 𝐴̅ ∪ 𝐵̅ = {1, 3, 4, 5, 6}, que contém todos os elementos
exceto a interseção A ∩ B = {2}. E a probabilidade dessa união 𝐴̅ ∪ 𝐵̅ é:

                                                       𝑛(𝐴̅ ∪ 𝐵̅) 5
                                       𝑃 (𝐴̅ ∪ 𝐵̅) =             =
                                                         𝑛(𝑈)      6

Que é justamente o resultado que obtivemos aplicando a fórmula 𝑃 (𝐴̅ ∪ 𝐵̅) = 1 − 𝑃 (𝐴 ∩ 𝐵).

Esses casos podem ser extrapolados para diversos eventos. Para três eventos A, B e C, temos:

             𝐴̅ ∩ 𝐵̅ ∩ 𝐶̅ = ̅̅̅̅̅̅̅̅̅̅̅̅̅ ̅∩𝑩
                            𝐴 ∪ 𝐵 ∪ 𝐶 → 𝑷(𝑨 ̅ ∩𝑪
                                               ̅ ) = 𝑷(̅̅̅̅̅̅̅̅̅̅̅̅̅
                                                       𝑨 ∪ 𝑩 ∪ 𝑪) = 𝟏 − 𝑷(𝑨 ∪ 𝑩 ∪ 𝑪)

            𝐴̅ ∪ 𝐵̅ ∪ 𝐶̅ = ̅̅̅̅̅̅̅̅̅̅̅̅̅ ̅ ∪𝑩
                           𝐴 ∩ 𝐵 ∩ 𝐶 → 𝑷(𝑨  ̅ ∪𝑪
                                               ̅ ) = 𝑷(̅̅̅̅̅̅̅̅̅̅̅̅̅
                                                       𝑨 ∩ 𝑩 ∩ 𝑪) = 𝟏 − 𝑷(𝑨 ∩ 𝑩 ∩ 𝑪)


---

                                                           ̅ ) = 𝟏 − 𝑷(𝑨)
                             Probabilidade Complementar: 𝑷(𝑨

                       Interseção dos complementares = complementar da união:

                                  𝑃(𝐴̅ ∩ 𝐵̅) = 𝑃(𝐴
                                                 ̅̅̅̅̅̅̅
                                                    ∪ 𝐵) = 1– 𝑃(𝐴 ∪ 𝐵)

                       União dos complementares = complementar da interseção:

                                  𝑃(𝐴̅ ∪ 𝐵̅) = 𝑃(𝐴
                                                 ̅̅̅̅̅̅̅
                                                    ∩ 𝐵) = 1– 𝑃(𝐴 ∩ 𝐵)

(FGV/2017 – SEPOG/RO) A probabilidade de que certo evento A ocorra é de 20%, a probabilidade de que o
evento B ocorra é de 30% e a probabilidade de que A e B ocorram é de 10%. Assim, a probabilidade de que
nem A nem B ocorra é igual a:
a) 30%
b) 40%
c) 50%
d) 60%
e) 70%
Comentários:
A probabilidade de que nem A nem B ocorra corresponde à interseção dos complementares, que, por sua
vez, equivale ao complementar da união:
                                𝑃(𝐴̅ ∩ 𝐵̅) = 𝑃(̅̅̅̅̅̅̅
                                               𝐴 ∪ 𝐵) = 1 − 𝑃(𝐴 ∪ 𝐵)
E a probabilidade da união é dada por:
                                 𝑃 (𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
O enunciado informa que:
•   P(A) = 20%
•   P(B) = 30%
•   𝑃(𝐴 ∩ 𝐵) = 10%


---

Substituindo esses valores na equação da união, temos:
                               𝑃 (𝐴 ∪ 𝐵) = 20% + 30% − 10% = 40%
O complementar da união, que a questão exige, é, portanto:
                          𝑃 (̅̅̅̅̅̅̅
                             𝐴 ∪ 𝐵) = 1 − 𝑃(𝐴 ∪ 𝐵) = 100% − 40% = 60%
Gabarito: D


(2019 – Fundação Santo André/SP) Considere: Num campeonato de futebol descobriu-se que dos 1000
torcedores, 440 torciam para o time A, 320 torciam para o time B.
Ao escolher uma pessoa no estádio, ao acaso, assinale a alternativa correta quanto à probabilidade dessa
pessoa não torcer para nenhum desses times.
a) 24%
b) 76%
c) 27%
d) 32%
Comentários:
A interseção dos complementares (não A e não B) equivale ao complementar da união:
                                𝑃(𝐴̅ ∩ 𝐵̅) = 𝑃(̅̅̅̅̅̅̅
                                               𝐴 ∪ 𝐵) = 1 − 𝑃(𝐴 ∪ 𝐵)
Nesse caso, os eventos são mutuamente excludentes (𝐴 ∩ 𝐵 = ), pois, ninguém torce para mais de um
time. Por isso, a probabilidade da união é dada por:
                                          𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵)
A probabilidade de uma pessoa torcer para A é a razão entre o número de torcedores de A, que é n(A) = 440,
e o número total de torcedores, que é n(U) = 1000. Logo:
                                                   𝑛 (𝐴 )   440
                                        𝑃 (𝐴 ) =          =     = 44%
                                                   𝑛(𝑈) 1000
A probabilidade de uma pessoa torcer para B é a razão entre o número de torcedores de B, que é n(B) = 320,
e o número total de torcedores:
                                                   𝑛 (𝐵 )   320
                                        𝑃 (𝐵 ) =          =     = 32%
                                                   𝑛(𝑈) 1000
Portanto, a probabilidade da união é:
                           𝑃 (𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃 (𝐵) = 44% + 32% = 76%
Dessa forma a probabilidade de uma pessoa não torcer para A e nem para B é:
                          𝑃 (𝐴̅ ∩ 𝐵̅) = 1 − 𝑃(𝐴 ∪ 𝐵) = 100% − 76% = 24%
Gabarito: A


---

(CESPE/2013 – CBM/CE) Uma pessoa que possua sangue classificado como O– é considerada doadora
universal pelo fato de seu sangue poder, em tese, ser ministrado a qualquer pessoa de qualquer tipo
sanguíneo. A pessoa que possua sangue classificado como AB+ é considerada receptora universal pelo fato
de poder receber, em tese, sangue proveniente de doador de qualquer tipo sanguíneo. Dentro de um mesmo
grupo sanguíneo, os de fator Rh– podem doar aos de fator Rh+. O sangue O+ pode ser doado para qualquer
pessoa que possua sangue com fator Rh+. A tabela abaixo apresenta a distribuição do tipo sanguíneo e do
fator Rh de membros de uma corporação.

Tendo como referência essas informações e a tabela acima, julgue o item que se segue.
Escolhendo-se aleatoriamente um membro dessa corporação, a probabilidade de ele não ser nem receptor
universal nem doador universal é superior à probabilidade de um membro dessa mesma corporação ter o
fator Rh+.
Comentários:
A probabilidade de um membro não ser nem receptor universal (AB +) nem doador universal (O-) corresponde
à interseção dos complementares, que, por sua vez, equivale ao complementar da união desses eventos.
                           𝑃(̅̅̅̅̅̅
                             𝐴𝐵+ ∩ ̅̅̅̅     ̅̅̅̅̅̅̅̅̅̅̅̅
                                    𝑂−) = 𝑃(𝐴𝐵  + ∪ 𝑂− ) = 1 − 𝑃 (𝐴𝐵+ ∪ 𝑂− )

A probabilidade de um membro ser receptor universal (AB+) é dada pela razão entre a proporção de
receptores universais e o total. Pela tabela, observamos que n(AB +) = 18 e n(U) = 100. Assim, a probabilidade
de um membro ser receptor universal é:
                                                𝑛(𝐴𝐵+)    18
                                    𝑃 (𝐴𝐵+) =          =     = 18%
                                                 𝑛(𝑈)    100
A probabilidade de um membro ser doador universal (O -) é dada pela razão entre a proporção de doadores
universais e o total. Pela tabela, observamos que n(O -) = 1. Assim, a probabilidade de um membro ser doador
universal é:
                                                𝑛(𝑂−)    1
                                      𝑃(𝑂−) =         =     = 1%
                                                𝑛(𝑈)    100
Considerando que não há interseção entre esses eventos (são eventos mutuamente exclusivos), então a
probabilidade da união é dada por:
                         𝑃 (𝐴𝐵+ ∪ 𝑂−) = 𝑃(𝐴𝐵+) + 𝑃(𝑂−) = 18% + 1% = 19%
Assim, a probabilidade de a pessoa não ser doadora universal ou receptora universal é dada pelo Teorema
do Evento Complementar:
                       𝑃 (̅̅̅̅̅̅̅̅̅̅̅̅
                          𝐴𝐵+ ∪ 𝑂−) = 1 − 𝑃(𝐴𝐵+ ∪ 𝑂−) = 100% − 19% = 81%
Por outro lado, para calcular a probabilidade de uma pessoa ter Rh+, precisamos do número de pessoas com
Rh+: n(+) = 66. Logo, essa probabilidade é:
                                                       66
                                           𝑃 (+ ) =       = 66%
                                                      100


---

Como 81% é maior que 66%, então a probabilidade de a pessoa não ser doadora ou receptora universal é,
de fato, maior que a probabilidade de ela ter Rh+.
Gabarito: Certo.


(2018 – Conselho Regional de Medicina Veterinária/ES) Em uma pesquisa feita com 200 usuários de uma
pasta de dente, verificou-se o seguinte:
- 76 usam a pasta de dente A
- 86 usam a pasta de dente B
- 140 usam a pasta de dente C
- 68 usam a pasta de dente A e B
- 34 usam a pasta de dente A e C
- 48 usam a pasta de dente B e C
- 30 usam a pasta de dente A, B e C
Marque a probabilidade que, em um sorteio ao acaso de todos os usuários entrevistados, é sorteado aquele
que não utiliza nenhuma das três pastas apresentada.
a) 18%
b) 9%
c) 12%
d) 21%
e) 15%
Comentários:
A probabilidade de o sorteado não utilizar qualquer pasta, A, B e nem C, é:
                            𝑃(𝐴̅ ∩ 𝐵̅ ∩ 𝐶̅ ) = 𝑃(𝐴
                                                 ̅̅̅̅̅̅̅̅̅̅̅̅̅
                                                    ∪ 𝐵 ∪ 𝐶 ) = 1 − 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)
Vimos na seção anterior que:
               P(A  B  C) = P(A) + P(B) + P(C) – P(A  B) – P(B  C) – P(A  C) + P(A  B  C)
O enunciado informa que a pesquisa foi feita com 200 usuários e que:
                                             76
- 76 usam a pasta de dente A, logo 𝑃 (𝐴) =
                                             200
                                             86
- 86 usam a pasta de dente B, logo 𝑃 (𝐵) = 200
                                              140
- 140 usam a pasta de dente C, logo 𝑃 (𝐶 ) = 200
                                                     68
- 68 usam a pasta de dente A e B, logo 𝑃 (𝐴 ∩ 𝐵) = 200
                                                     34
- 34 usam a pasta de dente A e C, logo 𝑃 (𝐴 ∩ 𝐶 ) = 200
                                                     48
- 48 usam a pasta de dente B e C, logo 𝑃 (𝐵 ∩ 𝐶 ) = 200
                                                            30
- 30 usam a pasta de dente A, B e C, logo 𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 ) = 200


---

                                         76   86 140 68   34   48   30
                     𝑃 (𝐴 ∪ 𝐵 ∪ 𝐶 ) =       +   +   −   −    −    +
                                        200 200 200 200 200 200 200

                                                             182
                                          𝑃 (𝐴 ∪ 𝐵 ∪ 𝐶 ) =
                                                             200

Nota: se preferir, utilize o Diagrama de Venn para encontrar o número de elementos na união. Depois, basta
dividir pelo total (200) para encontrar a probabilidade da união. Assim:

                                  𝑃 (̅̅̅̅̅̅̅̅̅̅̅̅̅
                                     𝐴 ∪ 𝐵 ∪ 𝐶 ) = 1 − 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)

                                                      182   18
                                𝑃(̅̅̅̅̅̅̅̅̅̅̅̅̅
                                  𝐴 ∪ 𝐵 ∪ 𝐶) = 1 −        =    = 9%
                                                      200 200

Gabarito: B


---

                           AXIOMAS DE PROBABILIDADE
Os chamados axiomas são verdades tão básicas que dispensam qualquer demonstração. É a partir dessas
verdades, que as propriedades e os teoremas são desenvolvidos. Em probabilidade, temos os Axiomas de
Kolmogorov. São eles:

     1. 𝑷(𝑨) ≥ 𝟎

        A probabilidade de qualquer evento é maior ou igual a 0, ou seja, não há probabilidade negativa.

     2. 𝑷(𝑼) = 𝟏

        A probabilidade associada a todo o Espaço Amostral, ou seja, a todos os eventos possíveis, é igual a
        1 (100%). Por exemplo, considerando o lançamento de um dado, qual é a probabilidade de ocorrer
        um dos resultados 1, 2, 3, 4, 5 ou 6? Como teremos algum desses resultados, certamente, então a
        probabilidade de ocorrer um desses eventos é 100% = 1.

     3. Se A e B são mutuamente excludentes (𝐴 ∩ 𝐵 = ), então a probabilidade da união desses eventos
        corresponde à soma das probabilidades dos eventos:

                                        𝑷(𝑨 ∪ 𝑩) = 𝑷(𝑨) + 𝑷(𝑩)

Com base nesses três axiomas, é possível deduzir as propriedades de probabilidade:

i)      Evento impossível: Sendo A um evento impossível, a sua probabilidade é igual a zero:

                                            Se 𝐴 = , então 𝑃 (𝐴) = 0

         Se um evento é impossível, então necessariamente a sua probabilidade é nula; mas o
         contrário não é necessariamente verdadeiro, ou seja, se a probabilidade de um evento é
         nula, não podemos concluir que tal evento é impossível.

         Há eventos que são, em tese, possíveis, mas cuja probabilidade é nula. Por exemplo, ao
         lançarmos uma moeda infinitas vezes, é possível obter infinitas CARAs, mas a probabilidade
         disso é igual a zero.

         Analogamente, se um evento é certo, então necessariamente a sua probabilidade é igual a
         1, mas o contrário não é necessariamente verdadeiro, ou seja, se a probabilidade de um
         evento é igual a 1, não podemos concluir que tal evento é certo.


---

ii)    Sendo A um evento qualquer, a sua probabilidade está entre 0 e 1:

                                                   0 ≤ 𝑃(𝐴) ≤ 1

iii)   Sendo A e B eventos quaisquer, a probabilidade de ocorrer A e não ocorrer B, que indicamos como
       P(A – B) ou P(A \ B), é a diferença entre a probabilidade de A e a probabilidade da interseção:

                                          𝑃(𝐴 – 𝐵) = 𝑃(𝐴) – 𝑃(𝐴 ∩ 𝐵)

       O evento A – B = A \ B está ilustrado a seguir:

                                            A                           B

iv)    Se A e B são eventos tais que A implica B, isto é, A está contido em B (A ⊆ B), então a probabilidade
       de A é menor ou igual à probabilidade de B.

                                                    𝑃(𝐴) ≤ 𝑃(𝐵)

Também são propriedades decorrentes dos Axiomas de Kolmogorov, a Probabilidade da União de eventos
quaisquer e a Probabilidade do Evento Complementar:

                                   𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)

                                             𝑃(𝐴̅) = 1 − 𝑃(𝐴)

                                                  Axiomas

        1. 𝑃(𝐴) ≥ 0
        2. 𝑃(𝑈) = 1
        3. Se A e B são mutuamente excludentes então 𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵)

                                                Propriedades

        i)      Se 𝐴 = , então 𝑃(𝐴) = 0
        ii)     0 ≤ 𝑃(𝐴) ≤ 1
        iii)    𝑃(𝐴 – 𝐵) = 𝑃(𝐴\𝐵) = 𝑃(𝐴) – 𝑃(𝐴 ∩ 𝐵)
        iv)     Se A ⊆ B, então 𝑃(𝐴) ≤ 𝑃(𝐵)
        v)      𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
        vi)     𝑃(𝐴̅) = 1 − 𝑃(𝐴)


---

(VUNESP/2016 - Prefeitura de Alumínio/SP - Adaptada) Uma moeda é viciada de modo que a probabilidade
de sair cara é 4 vezes a de sair coroa.
A probabilidade de sair cara em um lançamento qualquer é
a) 50%
b) 25%
c) 20%
d) 75%
e) 80%
Comentários:
Para calcular a probabilidade de sair CARA/COROA em um lançamento de uma moeda viciada, não podemos
utilizar a definição clássica de probabilidade, pois os resultados não são equiprováveis.
Nesse caso, podemos calcular as probabilidades dos resultados utilizando o axioma P(U) = 1, combinado com
o dado do enunciado de que a probabilidade de sair CARA é 4 vezes maior que a probabilidade de sair COROA.
Chamando a probabilidade de sair COROA de 𝑝, então a probabilidade de sair CARA é 4𝑝. Logo:

                                           𝑃 (𝑈) = 4𝑝 + 𝑝 = 1

                                                       1
                                                  𝑝=
                                                       5

E a probabilidade de sair CARA é:

                                                    4
                                             4𝑝 =     = 80%
                                                    5

Resposta: E


(FCC/2019 – SANASA/SP) O número de ocorrências diárias de um determinado evento foi registrado por um
funcionário de uma empresa durante um longo período.
Esse trabalho permitiu, com o objetivo de análise, elaborar a distribuição de probabilidade conforme tabela
abaixo, sabendo-se que o evento nunca ocorre mais que 5 vezes em um dia.

A probabilidade de que em 1 dia o evento ocorra, pelo menos, uma vez, mas não mais que 3 vezes, é igual a


---

a) 2/9
b) 1/3
c) 5/12
d) 4/5
e) 8/15
Comentários:
Primeiro, precisamos calcular o valor de p. Sabendo que a tabela corresponde a todo o Espaço Amostral,
uma vez que o evento nunca ocorre mais que 5 vezes no dia, temos:

                                    0,20 + 𝑝 + 2𝑝 + 3𝑝 + 2𝑝 + 𝑝 = 1

                                                 9𝑝 = 0,8

                                                      8
                                                 𝑝=
                                                      90

A probabilidade de ocorrer pelo menos 1 vez e não mais de 3 vezes é:
                                                                          8   8
                        𝑃 (1) + 𝑃 (2) + 𝑃(3) = 𝑝 + 2𝑝 + 3𝑝 = 6𝑝 = 6 ×       =
                                                                          90 15
Gabarito: E


(FCC/2017 – SABESP) Em um grupo de 100 pessoas, 80 possuem telefone celular, 50 possuem telefone fixo,
e 10 não possui telefone celular nem telefone fixo.
Sorteando-se ao acaso uma dessas 100 pessoas, a probabilidade de que ela tenha telefone fixo mas não
tenha telefone celular é de
a) 50%.
b) 5%.
c) 1%.
d) 20%.
e) 10%.
Comentários:
A questão informa que, de um total de 100 pessoas, 10 não possuem nem celular, nem fixo. Portanto, 90
pessoas possuem celular ou fixo:

                                      𝑛(𝐶 ) + 𝑛(𝐹 )– 𝑛(𝐶 ∩ 𝐹 ) = 90

Além disso, o enunciado informa que n(C) = 80 e n(F) = 50. Substituindo esses valores, temos:

                                        80 + 50– 𝑛(𝐶 ∩ 𝐹 ) = 90

                                             𝑛(𝐶 ∩ 𝐹 ) = 40


---

Ou seja, 40 pessoas possuem celular e fixo, conforme representado a seguir.

                                   C (80)                       F (50)


                                      C\F        40      F\C

Portanto, o número de pessoas que têm fixo, mas não têm celular (evento 𝐹\𝐶) é:

                              𝑛(𝐹\𝐶 ) = 𝑛(𝐹 ) − 𝑛(𝐹 ∩ 𝐶 ) = 50 − 40 = 10

Sabendo que há n(U) = 100 pessoas no total, a probabilidade do evento 𝐹\𝐶 é:

                                               𝑛(𝐹\𝐶 )    10
                                   𝑃(𝐹\𝐶 ) =           =     = 10%
                                                𝑛 (𝑈 )   100

Gabarito: E


---

                         PROBABILIDADE CONDICIONAL
A probabilidade condicional trabalha com a probabilidade de um evento ocorrer, sabendo que outro já
ocorreu.

Por exemplo, vamos supor que, em um auditório, existam enfermeiros e dentistas, tanto homens quanto
mulheres. Podemos calcular a probabilidade de uma pessoa escolhida aleatoriamente ser enfermeiro,
sabendo que é homem.

O fato de sabermos que a pessoa escolhida é homem corresponde a uma redução do universo de
possibilidades – não estamos mais considerando todo o auditório, mas apenas os homens nesse auditório.
Com esse “novo” universo, calculamos a probabilidade de esse homem ser enfermeiro.

Para ilustrar, vamos atribuir números a esse exemplo, conforme tabela abaixo:

                                             Homens    Mulheres        Totais
                              Enfermeiros      40        50              90
                               Dentistas       80        30             110
                                 Totais        120       80             200

Nesse caso, o “novo” universo são os 120 homens, ao invés de todas as 200 pessoas no auditório. Assim, a
probabilidade de ser um enfermeiro pode ser calculado pela razão entre os casos favoráveis (número de
enfermeiros) e os casos possíveis (número de homens), nesse "novo" universo:

                                         𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠   𝑛 (𝐴 )
                                    𝑃=                    =
                                          𝑐𝑎𝑠𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛 (𝑈 ′ )

                                                   40   1
                                             𝑃=       =
                                                  120 3

O que fizemos foi dividir o número de enfermeiros e homens (interseção) pelo número de homens (evento
que se sabe ter ocorrido).

                                                  𝑛(𝐸 ∩ 𝐻)
                                             𝑃=
                                                    𝑛(𝐻)

Dividindo tanto o numerador quanto o denominador pelo número de elementos de todo o Espaço Amostral
n(U), obtemos a fórmula da probabilidade de condicional do evento E, dado o evento H, indicada por P(E|H):

                                                𝑛(𝐸 ∩ 𝐻)
                                                  𝑛(𝑈)     𝑃(𝐸 ∩ 𝐻)
                                   𝑃 ( 𝐸 |𝐻 ) =          =
                                                  𝑛(𝐻)       𝑃(𝐻)
                                                  𝑛(𝑈)

                                                       𝑷(𝑬∩𝑯)
                                            𝑷(𝑬|𝑯) =     𝑷(𝑯)


---

O evento que sabemos ter ocorrido (o evento "homem", no nosso exemplo) é chamado de evento a priori
(ocorre antes). O outro evento é aquele cuja probabilidade queremos calcular (no nosso exemplo, o evento
"enfermeiro"). Esse evento é chamado de evento a posteriori (ocorre depois).

É possível que a interseção dos eventos seja equivalente ao próprio evento a posteriori. Por exemplo,
suponha que, dos 90 enfermeiros indicados na tabela, 10 tenham mais de vinte anos de profissão. Agora,
vamos calcular a probabilidade de ter sorteado um enfermeiro com mais de vinte anos de profissão (X),
sabendo que foi sorteado um enfermeiro. Essa probabilidade é dada por:

                                                       𝑃(𝑋 ∩ 𝐸)
                                         𝑃 (𝑋 |𝐸 ) =
                                                         𝑃(𝐸)

Ora, todos os enfermeiros com mais de vinte anos de profissão (X) pertencem ao grupo dos enfermeiros (E).
Assim, a interseção 𝑋 ∩ 𝐸 corresponde ao próprio evento X, logo:

                                                      𝑃 (𝑋 ) 𝑛 (𝑋 )
                                       𝑃 ( 𝑋 |𝐸 ) =         =
                                                      𝑃 (𝐸 ) 𝑛 (𝐸 )

                                                         10 1
                                          𝑃(𝑋|𝐸) =         =
                                                         90 9

        Podemos efetuar as mesmas operações de combinação de eventos com a probabilidade
        condicional. Em especial, a probabilidade condicional complementar é:

                                         𝑃(𝐸̅ |𝐻 ) = 1 − 𝑃(𝐸|𝐻)

        O complementar do evento E, dado H, é não E, dado H. Assim, o evento a priori, que
        sabemos que ocorreu, permanece como evento a priori.

                                                 1
        Para o nosso exemplo, temos 𝑃(𝐸 |𝐻 ) = . Então, dado que foi selecionado um homem, a
                                                3
        probabilidade de a pessoa selecionada não ser um enfermeiro, é:

                                                                      1   2
                                  𝑃(𝐸̅ |𝐻 ) = 1 − 𝑃(𝐸 |𝐻) = 1 − 3 = 3


---

(VUNESP/2019 – Prefeitura da Estância Balneária de Peruíbe/SP) O gráfico a seguir apresenta dados
referentes a homens e mulheres que se inscreveram para prestar um concurso para trabalhar em uma
instituição pública. Entre os candidatos, alguns já tinham emprego.

Um desses candidatos foi escolhido aleatoriamente. Sabendo-se que esse candidato não tem emprego, a
probabilidade de que ele seja homem é:
a) 2/9
b) 4/9
c) 2/5
d) 1/5
e) 3/8
Comentários:
A questão pede a probabilidade de o candidato ser homem, dado que não tem emprego (probabilidade
condicional). Essa probabilidade pode ser calculada pela razão clássica entre os eventos favoráveis e os
eventos totais, restringindo-os aos candidatos que não têm emprego (universo conhecido):
                                       𝑛(𝐻𝑜𝑚𝑒𝑛𝑠 𝑠𝑒𝑚 𝑒𝑚𝑝𝑟𝑒𝑔𝑜)
                                 𝑃=
                                      𝑛(𝐶𝑎𝑛𝑑𝑖𝑑𝑎𝑡𝑜𝑠 𝑠𝑒𝑚 𝑒𝑚𝑝𝑟𝑒𝑔𝑜)
Obs.: Se preferir, considere a definição de probabilidade condicional para calcular a probabilidade de o
candidato ser homem (H), dado que não tem emprego (𝐸̅ ):
                                                𝑃(𝐻 ∩ 𝐸̅) 𝑛(𝐻 ∩ 𝐸̅ )
                                  𝑃 (𝐻|𝐸̅ ) =            =
                                                  𝑃(𝐸̅ )    𝑛(𝐸̅ )
Pelo gráfico, observamos que o número de homens sem emprego é:
                            𝑛(𝐻 ∩ 𝐸̅) = 𝑛(𝐻𝑜𝑚𝑒𝑛𝑠 𝑠𝑒𝑚 𝑒𝑚𝑝𝑟𝑒𝑔𝑜) = 80
O gráfico informa também que o número de mulheres sem emprego é de 100. Logo, o número total de
candidatos sem emprego é:
                      𝑛(𝐸̅ ) = 𝑛(𝐶𝑎𝑛𝑑𝑖𝑑𝑎𝑡𝑜𝑠 𝑠𝑒𝑚 𝑒𝑚𝑝𝑟𝑒𝑔𝑜) = 80 + 100 = 180


---

Assim, a probabilidade desejada é:
                                                            80   4
                                             𝑃 (𝐻|𝐸̅ ) =       =
                                                           180 9
Gabarito: B.


(CESPE/2018 – ABIN) Como forma de melhorar a convivência, as famílias Turing, Russell e Gödel disputaram,
no parque da cidade, em um domingo à tarde, partidas de futebol e de vôlei. O quadro a seguir mostra os
quantitativos de membros de cada família presentes no parque, distribuídos por gênero.

A partir dessa tabela, julgue o item subsequente.
Considere que, em eventual sorteio de brindes, um nome tenha sido retirado, ao acaso, do interior de uma
urna que continha os nomes de todos os familiares presentes no evento. Nessa situação, sabendo-se que o
sorteado não é uma mulher da família Gödel, a probabilidade de ser uma mulher da família Russel será
superior a 20%.
Comentários:
A questão indaga sobre probabilidade condicional. Podemos calcular essa probabilidade, utilizando a
fórmula da probabilidade clássica, porém restringindo os casos considerados ao evento que sabemos ter
ocorrido, no caso, o fato de não ser uma mulher da família Gödel:
                                           𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                      𝑃=                    =
                                            𝑐𝑎𝑠𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈′)
Obs.: Se preferir, considere a definição de probabilidade condicional para calcular a probabilidade de o
sorteado ser uma mulher da família Russel (MR), dado que não é uma mulher da Gödel (𝑀 ̅̅̅̅
                                                                                         𝐺 ):

                                                           𝑃(𝑀𝑅 ∩ ̅̅̅̅
                                                                   𝑀𝐺 )
                                         𝑃(𝑀𝑅 |̅̅̅̅
                                               𝑀𝐺 ) =
                                                               ̅̅̅̅
                                                             𝑃(𝑀  𝐺)

Perceba que a interseção entre as mulheres da família Russel e as pessoas que não são mulheres da família
Gödel, 𝑀𝑅 ∩ ̅̅̅̅
            𝑀𝐺 , equivale exatamente às mulheres da família Russel, 𝑀𝑅 , logo:
                                                       𝑃(𝑀𝑅 ) 𝑛(𝑀𝑅 )
                                       𝑃 (𝑀𝑅 |̅̅̅̅
                                              𝑀𝐺 ) =           =
                                                         ̅̅̅̅
                                                       𝑃(𝑀  𝐺)
                                                                   ̅̅̅̅
                                                                 𝑛(𝑀  𝐺)

Ou seja, sabendo que o sorteado não é uma mulher da família Gödel, então os casos possíveis correspondem
a todos os familiares exceto as mulheres dessa família:
                                     𝑛(̅̅̅̅
                                       𝑀𝐺 ) = n(U’) = 5 + 7 + 6 + 5 + 5 = 28
Os casos favoráveis correspondem ao número de mulheres da família Russel:
                                               𝑛(𝑀𝑅 ) = n(A) = 5
Logo, a probabilidade é dada por:


---

                                                      5
                                              𝑃=         ≅ 18%
                                                      28
Ou seja, é inferior a 20%.
Gabarito: Errado.


(FCC/2018 – Banrisul/RS) Em uma empresa com 400 funcionários, 30% ganham acima de 5 Salários Mínimos
(S.M.). O quadro de funcionários dessa empresa é formado por 180 homens e 220 mulheres, sendo que 160
mulheres ganham no máximo 5 S.M. Escolhendo aleatoriamente 1 funcionário dessa empresa e verificando
que é homem, a probabilidade de ele ganhar mais do que 5 S.M. é igual a
a) 1/2.
b) 3/20.
c) 1/3.
d) 3/11.
e) 3/10.
Comentários:
A probabilidade de a pessoa ganhar mais que 5SM, dado que é homem, pode ser calculada como:
                                                    𝑃(𝐺 ∩ 𝐻) 𝑛(𝐺 ∩ 𝐻)
                                    𝑃 ( 𝐺 |𝐻 ) =            =
                                                      𝑃(𝐻)     𝑛(𝐻)
A questão informa que n(H) = 180, que representa o “novo Universo”.
Também é informado que 30% dos funcionários ganham mais que 5SM: n(G) = 30% x 400 = 120.
Sabendo que 160 mulheres ganham menos que 5SM, então 220 – 160 = 60 mulheres ganham mais que 5SM.
Então, o número de homens que ganham mais que 5SM é:
                                                          ̅ ) = 120 − 60 = 60
                             𝑛 (𝐺 ∩ 𝐻 ) = 𝑛 (𝐺 ) − 𝑛 (𝐺 ∩ 𝐻
Portanto:
                                                    𝑛(𝐺 ∩ 𝐻)    60   1
                                     𝑃 ( 𝐺 |𝐻 ) =            =     =
                                                      𝑛(𝐻)     180 3
Gabarito: C


(FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A probabilidade
condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6. Assim, a probabilidade de que A ou B ocorram é
igual a
a) 0,56
b) 0,60
c) 0,76
d) 0,82
e) 0,94


---

Comentários:
O enunciado informa a probabilidade dos eventos A e B, bem como a probabilidade condicional de A, dado
B, a qual corresponde à razão entre a probabilidade da interseção e a probabilidade do evento a priori, no
caso, o evento B:
                                                         𝑃 (𝐴 ∩ 𝐵 )
                                          𝑃 (𝐴|𝐵) =
                                                            𝑃 (𝐵 )
Sabendo que 𝑃(𝐵) = 0,8 e que 𝑃 (𝐴|𝐵) = 0,6, podemos calcular a probabilidade da interseção:
                                                      𝑃 (𝐴 ∩ 𝐵 )
                                       𝑃 ( 𝐴 |𝐵 ) =              = 0,6
                                                         0,8
                                     𝑃 (𝐴 ∩ 𝐵) = 0,6 × 0,8 = 0,48
Conhecendo as probabilidades 𝑃(𝐴) = 0,5, 𝑃 (𝐵) = 0,8 e 𝑃 (𝐴 ∩ 𝐵) = 0,48, podemos calcular a
probabilidade da união (A OU B):
                   𝑃(𝐴 ∪ 𝐵) = 𝑃 (𝐴) + 𝑃(𝐵) − 𝑃 (𝐴 ∩ 𝐵) = 0,5 + 0,8 − 0,48 = 0,82
Gabarito: D

Teorema da Multiplicação

O Teorema da Multiplicação pode ser visto como uma forma diferente de escrever a fórmula da
probabilidade condicional. Como vimos, a probabilidade condicional é:

                                                         𝑃(𝐴 ∩ 𝐵)
                                          𝑃 ( 𝐵 | 𝐴) =
                                                           𝑃(𝐴)

O Teorema da Multiplicação fornece a probabilidade da interseção, a partir da probabilidade condicional:

                                      𝑷(𝑨 ∩ 𝑩) = 𝑷(𝑩|𝑨) × 𝑷(𝑨)

Ou seja, a probabilidade da interseção de dois eventos é o produto da probabilidade condicional pela
probabilidade do evento a priori.

Para o nosso exemplo anterior, vimos que a probabilidade de ter sido selecionado um enfermeiro, sabendo
que foi homem é:

                                                             1
                                               𝑷(𝑬|𝑯) =
                                                             3

Assim, conhecendo a probabilidade de selecionar um homem (evento a priori), podemos calcular a
probabilidade de selecionar um enfermeiro homem (interseção).

Para isso, vejamos novamente a tabela desse exemplo:


---

                                                 Homens    Mulheres     Totais
                               Enfermeiros         40        50          90
                                Dentistas          80        30          110
                                  Totais           120       80          200

A probabilidade de selecionar um homem (evento a priori) é, pela definição clássica:

                                                    𝑛(𝐻) 120 3
                                         𝑃 (𝐻 ) =       =   =
                                                    𝑛(𝑈) 200 5

Agora, podemos calcular a probabilidade da interseção P(E ∩ H), pelo Teorema da Multiplicação:

                                                                  1 3 1
                                𝑷(𝑬 ∩ 𝑯) = 𝑷(𝑬|𝑯) × 𝑷(𝑯) =         × =
                                                                  3 5 5

De fato, aplicando a definição clássica de probabilidade para calcular a interseção, a partir da tabela, temos:

                                                    𝑛(𝐸 ∩ 𝐻)    40   1
                                    𝑃 (𝐸 ∩ 𝐻 ) =             =     =
                                                      𝑛(𝑈)     200 5

Observe que podemos aplicar o Teorema da Multiplicação, invertendo-se os eventos a priori e a posteriori.
Se, em vez de 𝑃 (𝐸 |𝐻), conhecêssemos 𝑃 (𝐻|𝐸 ), poderíamos calcular a probabilidade da interseção
𝑃 (𝐸 ∩ 𝐻 ) como:

                                       𝑷(𝑬 ∩ 𝑯) = 𝑷(𝑯|𝑬) × 𝑷(𝑬)

Já conhecemos a probabilidade da interseção, mas vamos efetuar os cálculos com essa inversão?

A probabilidade condicional de a pessoa selecionada ser homem, dado que é enfermeiro (homem ou mulher)
é, pela tabela:

                                                𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 40 4
                                 𝑃 ( 𝐻 |𝐸 ) =                    =   =
                                                 𝑐𝑎𝑠𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   90 9

E a probabilidade de selecionar um enfermeiro é, pela tabela (definição clássica):

                                                   𝑛(𝐸)   90   9
                                        𝑃 (𝐸 ) =        =    =
                                                   𝑛(𝑈) 200 20

Com 𝑃 (𝐻|𝐸 ) e 𝑃(𝐸), podemos calcular a probabilidade da interseção 𝑃(𝐸 ∩ 𝐻 ), aplicando-se o Teorema da
Multiplicação:

                                                                 4 9   1
                                𝑃 (𝐸 ∩ 𝐻 ) = 𝑃(𝐻 |𝐸 ) × 𝑃(𝐸) =    ×  =
                                                                 9 20 5

Que é o resultado que obtivemos antes!


---

Para 3 eventos, a interseção é dada por:

                             𝑷(𝑨 ∩ 𝑩 ∩ 𝑪) = 𝑷(𝑨) × 𝑷(𝑩|𝑨) × 𝑷(𝑪|𝑨 ∩ 𝑩)

Ou seja, é a probabilidade do evento a priori (A), multiplicada pela probabilidade condicional do primeiro
evento a posteriori (B|A), multiplicada pela probabilidade condicional do segundo evento a posteriori
(C|A∩B).

(VUNESP/2016 – Prefeitura de Alumínio/SP – Adaptada) Um estudante resolve uma prova com apenas
questões em forma de testes de múltipla escolha, com 4 alternativas cada teste. Ele sabe 75% da matéria da
prova. Quando ele sabe a matéria da questão ele acerta e, quando não sabe, escolhe a alternativa ao acaso.
A probabilidade de o aluno acertar uma questão qualquer por acaso é igual a
a) 6,25%
b) 8,5%
c) 15%
d) 17,25%
e) 18,75%
Comentários:
A probabilidade de o aluno acertar uma questão qualquer por acaso corresponde à interseção dos eventos
“não saber a matéria” (que podemos chamar de 𝑆̅) E “acertar a questão” (que podemos chamar de A) é:
                                                𝑃(𝑆̅ ∩ 𝐴)
Considerando que a probabilidade de o aluno acertar a questão depende do evento saber ou não a matéria,
a probabilidade da interseção é dada por:
                                       𝑃(𝑆̅ ∩ 𝐴) = 𝑃(𝑆̅) × 𝑃(𝐴|𝑆̅)
O enunciado informa que:
•   O aluno sabe 75% da matéria da prova: P(S) = 0,75
Logo, o aluno não sabe o restante da matéria (evento complementar):
                                  𝑃 (𝑆̅) = 1 − 𝑃(𝑆) = 1 − 0,75 = 0,25


•   O aluno escolhe a alternativa ao acaso, se ele não souber a matéria.
Havendo 4 alternativas, a probabilidade de o aluno acertar a questão, dado que não sabe a matéria é:
                                                        1
                                           𝑃 (𝐴|𝑆̅) =     = 0,25
                                                        4


---

Substituindo esses valores na fórmula da probabilidade da interseção, obtemos a probabilidade de o aluno
acertar uma questão qualquer por acaso:
                              𝑃(𝑆̅ ∩ 𝐴) = 0,25 × 0,25 = 0,0625 = 6,25%
Gabarito: A


(VUNESP/2019 – Prefeitura de Campinas/SP) Ao operar em um turno de trabalho, uma linha de produção
se interrompe totalmente se uma máquina M1 falhar. Para diminuir o risco de interrupção, ligou-se ao
sistema uma máquina M2 programada para entrar imediatamente em funcionamento caso M1 falhe,
fazendo com que o sistema prossiga. A probabilidade de M1 falhar é de 1/20 e a probabilidade de M2 falhar
é também de 1/20. A probabilidade de que o sistema não se interrompa durante um turno de trabalho após
a inclusão de M2 é de
a) 99,75%
b) 95%
c) 99%
d) 90,25%
e) 97,5%
Comentários:
A probabilidade de o sistema não se interromper pode ser calculada pelo complementar de ele se
interromper:
                                               𝑃 (𝐼 )̅ = 1 − 𝑃(𝐼)
Para o sistema se interromper, é necessário que a máquina M1 falhe E que a máquina M2 falhe. Logo, temos
a interseção desses eventos:
                                       𝑃 (𝐼 ) = 𝑃(𝐹1) × 𝑃(𝐹2|𝐹1)
Representamos a falha da M2 como F2|F1, pois a máquina atua somente se a M1 falhar.
O enunciado informa que a probabilidade de tanto uma quanto outra falhar é de 1/20:
                                            1    1     1
                                    𝑃 (𝐼 ) =   ×   =     = 0,0025
                                           20 20 400
Assim, a probabilidade de o sistema não interromper é complementar:
                          𝑃(𝐼 )̅ = 1 − 𝑃(𝐼 ) = 1 − 0,0025 = 0,9975 = 99,75%
Gabarito: A.


(FGV/2018 – ALE/RO) Uma urna I contém inicialmente 4 bolas azuis e 6 bolas vermelhas; nessa ocasião, a
urna II contém 5 bolas azuis e 4 bolas vermelhas, e a urna III, 2 azuis e 7 vermelhas. Uma bola é sorteada da
urna I e colocada na urna II. Em seguida, uma bola é sorteada da urna II e colocada na urna III. Por fim, uma
bola é sorteada da urna III. A probabilidade de que a bola sorteada da urna III seja azul é igual a
a) 0,166
b) 0,182


---

c) 0,254
d) 0,352
e) 0,368
Comentários:
A probabilidade de retirar uma bola azul da urna III depende de qual bola é retirada da urna II, que, por sua
vez, depende de qual bola é retirada da urna I, conforme ilustrado abaixo:

                                                                                   Urna 3            P(A3|A2) = 3/10

                                               P(A2|A1) = 6/10                 2 +1 bolas azuis
                                                                                 7 vermelhas
                                  Urna 2

           P(A1) = 4/10     5 +1 bolas azuis      P(V2|A1) = 4/10                  Urna 3            P(A3|V2) = 2/10
                           4 bolas vermelhas
      Urna 1                                                                      2 bolas azuis
                                                                             7 + 1 bolas vermelhas
      4 bolas azuis
   6 bolas vermelhas

           P(V1) = 6/10                                    P(A2|V1) = 5/10         Urna 3            P(A3|A2) = 3/10

                                  Urna 2                                       2 +1 bolas azuis
                                                                                 7 vermelhas
                               5 bolas azuis
                          4 + 1 bolas vermelhas
                                                           P(V2|V1) = 5/10          Urna 3           P(A3|V2) = 2/10

                                                                                  2 bolas azuis
                                                                             7 + 1 bolas vermelhas

Na figura, temos as quantidades de bolas nas urnas, para cada caso, o que nos permite calcular a
probabilidade de retirar uma bola azul ou vermelha, em cada etapa.
Para encontrar a probabilidade de tirar uma bola azul, precisamos da interseção dos eventos subsequentes
(retirada da urna 1, da urna 2 e da urna 3) e da união das possibilidades alternativas (isto é, dos diferentes
caminhos).
A probabilidade do primeiro caminho (superior) é dada por:
             𝑃 (𝐴1 ∩ 𝐴2 ∩ 𝐴3) = 𝑃 (𝐴1) × 𝑃(𝐴2|𝐴1) × 𝑃(𝐴3|𝐴2) = 0,4 × 0,6 × 0,3 = 0,072
A probabilidade do segundo caminho é:
             𝑃(𝐴1 ∩ 𝑉2 ∩ 𝐴3) = 𝑃(𝐴1) × 𝑃(𝑉2|𝐴1) × 𝑃(𝐴3|𝑉2) = 0,4 × 0,4 × 0,2 = 0,032
A probabilidade do terceiro caminho é dada por:
               𝑃 (𝑉1 ∩ 𝐴2 ∩ 𝐴3) = 𝑃(𝑉1) × 𝑃(𝐴2|𝑉1) × 𝑃(𝐴3|𝐴2) = 0,6 × 0,5 × 0,3 = 0,09
A probabilidade do quarto caminho (inferior) é dada por:
               𝑃(𝑉1 ∩ 𝑉2 ∩ 𝐴3) = 𝑃(𝑉1) × 𝑃(𝑉2|𝑉1) × 𝑃(𝐴3|𝑉2) = 0,6 × 0,5 × 0,2 = 0,06


---

E a probabilidade de retirar uma bola azul, considerando todas essas possibilidades (mutuamente exclusivas)
é, pelo princípio aditivo:
       𝑃(𝐴3) = 𝑃(𝐴1 ∩ 𝐴2 ∩ 𝐴3) + 𝑃(𝐴1 ∩ 𝑉2 ∩ 𝐴3) + 𝑃(𝑉1 ∩ 𝐴2 ∩ 𝐴3) + 𝑃(𝑉1 ∩ 𝑉2 ∩ 𝐴3)
                            𝑃 (𝐴3) = 0,072 + 0,032 + 0,09 + 0,06 = 0,254
Gabarito: C

Independência de Eventos

Eventos independentes são aqueles que não influenciam uns nos outros. Por exemplo, o resultado do
lançamento de um dado em nada influencia o resultado de outro lançamento.

       Como fica a probabilidade condicional desses eventos, então?

       Vamos supor que o resultado de um lançamento de um dado tenha sido o número 3: A = {3}. Sabendo
       disso, qual é a probabilidade de um novo lançamento do dado ser B = {4}?

       Bem, o resultado do 1º lançamento (evento A) em nada influencia o 2º lançamento (evento B).
       Portanto, a probabilidade de o 2º lançamento ser 4 é a mesma (P = 1/6), independentemente do
       resultado do 1º lançamento.

Isso quer dizer que, sendo A e B eventos independentes, a probabilidade condicional de B, sabendo que o
evento A ocorreu, é igual à probabilidade de B (e vice-versa):

                                             𝑃(𝐵|𝐴) = 𝑃(𝐵)

       Vamos a mais uma pergunta: sabendo que o resultado do 1º lançamento foi A = {3}, qual é a
       probabilidade de não sair 4 no 2º lançamento (evento 𝐵̅)?

       Sabendo que a probabilidade de sair 4 no 2º lançamento é a mesma, independente do resultado do
       1º lançamento, então a probabilidade de não sair 4 também é independente do 1º lançamento.

De forma geral, se A e B são independentes, então os complementares também são independentes. Isso
implica nas seguintes igualdades:

  i.       ̅ ) = 𝑷(𝑩)
       𝑷(𝑩|𝑨

       Por exemplo, a probabilidade de sair 4 no 2º lançamento (evento B), dado que o resultado do 1º
       lançamento não foi 3 (evento 𝐴̅), é a mesma (P = 1/6), independentemente do resultado do 1º
       lançamento.


---

 ii.      ̅ |𝑨) = 𝑷(𝑩
        𝑷(𝑩         ̅)

        Por exemplo, a probabilidade de não sair 4 no 2º lançamento (evento 𝐵̅), dado que o resultado do 1º
        lançamento foi 3 (evento 𝐴), é a mesma (P = 5/6), independentemente do resultado do 1º
        lançamento.

 iii.     ̅ |𝑨
        𝑷(𝑩  ̅ ) = 𝑷(𝑩
                     ̅)

        Por exemplo, a probabilidade de não sair 4 no 2º lançamento (evento 𝐵̅), dado que o resultado do 1º
        lançamento não foi 3 (evento 𝐴̅), é a mesma (P = 5/6), independentemente do resultado do 1º
        lançamento.

E como fica o teorema da multiplicação para eventos independentes?

Bem, para eventos quaisquer, temos:

                                        𝑃 ( 𝐴 ∩ 𝐵 ) = 𝑃 ( 𝐵 | 𝐴) . 𝑃 ( 𝐴 )

Considerando que, para eventos independentes, temos 𝑃(𝐵|𝐴) = 𝑃(𝐵), então a interseção de eventos
independentes é calculada como:

                                        𝑷(𝑨 ∩ 𝑩) = 𝑷(𝑩) × 𝑷(𝑨)

Por exemplo, a probabilidade de obter 3 no 1º lançamento (evento A), com probabilidade P(A) = 1/6 E de
obter 4 no 2º lançamento (evento B), com probabilidade P(B) = 1/6, é:

                                                                    1 1  1
                                𝑃 (𝐴 ∩ 𝐵 ) = 𝑃 (𝐵 ) × 𝑃 (𝐴 ) =       × =
                                                                    6 6 36

         Essa relação entre a interseção de eventos independentes e o produto das probabilidades
         é uma propriedade de “ida e volta”.

         Em outras palavras, se soubermos que A e B são independentes, podemos concluir que
         𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵); e, se soubermos que 𝑃 (𝐴 ∩ 𝐵) = 𝑃 (𝐴) × 𝑃(𝐵), podemos
         concluir que A e B são independentes.

                                                                             1         1                1
Por exemplo, mesmo sem conhecer os eventos, se soubermos que 𝑃(𝐴) = 6 , 𝑃(𝐵) = 6 e 𝑃 (𝐴 ∩ 𝐵) = 36,
podemos concluir que A e B são independentes.


---

(CESPE/2015 – Telebras) Nas chamadas de suporte de uma empresa de telecomunicações, o funcionário
Pedro resolve o problema do cliente em duas de cada três vezes em que é solicitado, enquanto Marcos
resolve em três de cada quatro chamadas.
A partir dessa situação hipotética, julgue o item seguinte, considerando que os funcionários sejam
suficientemente experientes para que a tentativa de resolução do problema de qualquer chamada não esteja
subordinada a tentativas anteriores.
Se Pedro não resolver o problema de um cliente, considerando-se que nenhuma informação a respeito da
tentativa é repassada a Marcos, a probabilidade de que este também não resolva o referido problema será
inferior a 20%.
Comentários:
A questão pede a probabilidade de Marcos não resolver o problema, dado que Pedro não o resolveu
(probabilidade condicional), que podemos representar por 𝑃 (̅̅̅̅
                                                            𝑅𝑀 |𝑅̅̅̅̅
                                                                    𝑃 ).

O item esclarece que nenhuma informação a respeito da tentativa é repassada a Marcos, indicando que são
eventos independentes. Para esses eventos, a probabilidade condicional é igual à probabilidade não
condicional:
                                            𝑃 (̅̅̅̅
                                               𝑅𝑀 |𝑅̅̅̅̅        ̅̅̅̅
                                                       𝑃 ) = 𝑃 (𝑅𝑀 )

O enunciado informa que Marcos resolve o problema em 3 de 4 ligações, logo a probabilidade de Marcos
resolver é 3/4 e a probabilidade de Marcos não resolver é o complementar:
                                                        3 1
                                           ̅̅̅̅
                                        𝑃 (𝑅 𝑀) = 1 −    = = 25%
                                                        4 4
Que é superior a 20%.
Gabarito: Errado.


(CESPE/2019 – TJ/AM) Em um espaço de probabilidades, as probabilidades de ocorrerem os eventos
independentes A e B são, respectivamente, P(A) = 0,3 e P(B) = 0,5.
Nesse caso, P(A⋂B) = 0,15.
Comentários:
Sendo A e B eventos independentes, a probabilidade da interseção é o produto das probabilidades:
                                         𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)
Sendo P(A) = 0,3 e P(B) = 0,5, então:
                                        𝑃 (𝐴 ∩ 𝐵) = 0,3 × 0,5 = 0,15
Gabarito: Certo.


---

(FGV/2019 – Prefeitura de Angra dos Reis/RJ) Peter é um ótimo lançador de dardos. A cada lançamento, a
probabilidade de Peter acertar o alvo é de 90% e independe de Peter ter acertado ou não o alvo em
lançamentos anteriores. Após fazer dois lançamentos em sequência, a probabilidade de Peter ter acertado
o alvo nos dois lançamentos é de
a) 180%
b) 90%
c) 81%
d) 72%
e) 160%
Comentários:
O enunciado informa que os lançamentos são eventos independentes. Portanto, a probabilidade de acertar
os dois lançamentos, que corresponde à interseção dos eventos (A1 E A2) é o produto das probabilidades:
                                      𝑃 (𝐴1 ∩ 𝐴2 ) = 𝑃(𝐴1 ) × 𝑃(𝐴2 )
A probabilidade de acerto é 90%, ou seja, 𝑃 (𝐴1 ) = 𝑃(𝐴2 ) = 90%. Logo, a probabilidade da interseção é:
                                   𝑃 (𝐴1 ∩ 𝐴2 ) = 90% × 90% = 81%
Gabarito: C


(FGV/2018 – ALE/RO) A urna A tem dois cartões vermelhos e três amarelos e, a urna B, três cartões
vermelhos e dois amarelos. Retira-se, aleatoriamente, um cartão de cada urna. A probabilidade de os dois
cartões retirados serem amarelos é
   6
a) 25
   5
b) 25
   4
c) 25
   3
d) 25
   2
e) 25
Comentários:
A probabilidade de retirar 2 cartões amarelos, isto é, retirar um cartão amarelo da urna A E um cartão
amarelo da urna B, corresponde à interseção desses eventos. Considerando que esses eventos (que
podemos chamar por A e B) são independentes, então a interseção é dada pelo produto das probabilidades:
                                        𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)
Considerando que há 3 cartões amarelos, de um total de 5 cartões, na urna A, a probabilidade de retirar um
                      3
cartão de A é: 𝑃(𝐴) = 5
Considerando que há 2 cartões amarelos, de um total de 5 cartões, na urna B, a probabilidade de retirar um
                      2
cartão de A é: 𝑃(𝐵) =
                       5

Assim, a probabilidade de retirar 2 cartões amarelos é:


---

                                                         3 2  6
                                          𝑃 (𝐴 ∩ 𝐵 ) =    × =
                                                         5 5 25
Gabarito: A.


(FGV/2019 – DPE/RJ – Adaptada) A partir dos axiomas da Teoria das Probabilidades, algumas proposições
podem ser estabelecidas. Para quaisquer eventos não vazios, julgue as seguintes proposições.
I) 𝑃 (𝐴 ∪ 𝐵) ≤ 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴). 𝑃(𝐵)
II) Se 𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴). 𝑃(𝐵) → 𝑃 (𝐴̅ ∩ 𝐵̅) = 𝑃 (𝐴̅). 𝑃(𝐵̅)
Comentários:
Em relação ao item I, a probabilidade da união é dada por:
                                  𝑃 (𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
Se A e B fossem independentes, teríamos 𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵). Porém, essa não é uma condição dada
pelo enunciado. Logo, é possível que os eventos sejam dependentes e, consequentemente, termos:
                                          𝑃(𝐴 ∩ 𝐵) ≠ 𝑃(𝐴) × 𝑃(𝐵)
Pontue-se que não é possível afirmar qual das duas probabilidades 𝑃 (𝐴 ∩ 𝐵) ou 𝑃 (𝐴) × 𝑃(𝐵) é maior.
Sabendo que a probabilidade da interseção pode ser diferente do produto das probabilidades, então a
probabilidade da união pode ser diferente de:
                                 𝑃(𝐴 ∪ 𝐵) ≠ 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴) × 𝑃(𝐵)
Logo, o item I está errado.
Em relação ao item II, o item informa que:
                                          𝑃 (𝐴 ∩ 𝐵 ) = 𝑃 (𝐴 ) × 𝑃 (𝐵 )
Isso nos permite concluir que A e B são eventos independentes. Consequentemente, os eventos
complementares também são independentes. Logo, a interseção dos eventos complementares é o produto:
                                          𝑃(𝐴̅ ∩ 𝐵̅) = 𝑃(𝐴̅) × 𝑃(𝐵̅)
Assim, o item II está correto.
Resposta: item I errado; item II certo.

         Algumas questões pedem a probabilidade da forma “pelo menos um”, ou da união de
         diversos eventos, em que será mais simples calcular a probabilidade complementar.

Vejamos algumas questões desse estilo.


---

(CESPE/2015 – DEPEN) Considerando que, entre a população carcerária de um presídio, a probabilidade de
um detento contrair tuberculose seja igual a 0,01; que dois detentos sejam selecionados aleatoriamente
dessa população carcerária; e que as ocorrências de tuberculose entre esses detentos sejam eventos
independentes, julgue o próximo item.
A probabilidade de pelo menos um detento na amostra contrair tuberculose será superior a 0,01 e inferior a
0,03.
Comentários:
A probabilidade de pelo menos um detento, dentre os 2 detentos da amostra, contrair tuberculose pode ser
calculada como o complementar da probabilidade de nenhum dos 2 detentos contrair a doença.
A probabilidade de um detento qualquer não contrair a doença é o complementar da probabilidade de ele
contraí-la:

                                      ̅ ) = 1 − 𝑃(𝐷 ) = 1 − 0,01 = 0,99
                                   𝑃 (𝐷

A probabilidade de nenhum dos 2 detentos contrair a doença é a interseção da probabilidade de cada um
não a contrair. Como os eventos são independentes, basta multiplicar as probabilidades:

                                          ̅ ) × 𝑃 (𝐷
                              𝑃𝑛𝑒𝑛ℎ𝑢𝑚 = 𝑃(𝐷        ̅ ) = 0,99 × 0,99 ≅ 0,98

Assim, a probabilidade de pelo menos um dos 2 detentos contrair a doença é o complementar:

                              𝑃𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 1 = 1 − 𝑃𝑛𝑒𝑛ℎ𝑢𝑚 ≅ 1 − 0,98 = 0,02

Esse resultado é, de fato, superior a 0,01 e inferior a 0,03.
Gabarito: Certo


(FGV/2021 – FEMPAR) Suponha que cada dose de certa vacina, ao ser aplicada em uma população específica,
garanta a imunização contra uma doença, de metade daqueles que não estão imunizados. Inicialmente, toda
essa população estava não imunizada e todos os seus indivíduos foram submetidos a duas doses
consecutivas dessa vacina. Sorteando-se, ao acaso, um indivíduo dessa população, a probabilidade de que
esteja imunizado contra a doença é de
a) 100%
b) 87,5%
c) 75%
d) 50%
e) 25%


---

Comentários:
Segundo o enunciado, quando uma dose de vacina é aplicada em uma população não imunizada, metade
ficará imunizada. Em outras palavras, há uma probabilidade de 50% de uma pessoa não imunizada se tornar
imunizada com uma dose de vacina. E a questão afirma que foram aplicadas 2 doses em uma população
inicialmente não imunizada.
Vamos calcular a probabilidade de uma pessoa estar imunizada pelo seu complemento, qual seja de não
estar imunizada:
                               𝑃(𝑖𝑚𝑢𝑛𝑖𝑧𝑎𝑑𝑜) = 1 − 𝑃(𝑛ã𝑜 𝑖𝑚𝑢𝑛𝑖𝑧𝑎𝑑𝑜)
Para isso, é necessário que ela não tenha sido imunizada na primeira dose, com probabilidade de 50%, E não
ter sido imunizada na segunda dose, também com probabilidade de 50%. Assim, temos a interseção de
eventos independentes, cuja probabilidade é dada pelo produto:
                                𝑃(𝑛ã𝑜 𝑖𝑚𝑢𝑛𝑖𝑧𝑎𝑑𝑜) = 0,5 × 0,5 = 0,25
E a probabilidade complementar é:
                              𝑃 (𝑖𝑚𝑢𝑛𝑖𝑧𝑎𝑑𝑜) = 1 − 0,25 = 0,75 = 75%
Gabarito: C

Independência de Três Eventos

Quando há três eventos independentes, a situação é um pouco diferente de quando há apenas dois eventos.
Se os eventos A, B e C são independentes, então temos todas as situações a seguir:

                                        𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴). 𝑃(𝐵)

                                        𝑃(𝐴 ∩ 𝐶 ) = 𝑃(𝐴). 𝑃(𝐶)

                                        𝑃(𝐵 ∩ 𝐶 ) = 𝑃(𝐵). 𝑃(𝐶)

                                    𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 ) = 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶)

Dessa forma, os três eventos são considerados independentes somente se todos forem independentes
entre si, tanto quando comparados dois a dois, quanto para todos os 3.

Ou seja, se os eventos são independentes, então podemos concluir que:

                                    𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 ) = 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶)

       Por exemplo, lançando-se 3 moedas equilibradas, e sendo os eventos A = {CARA na 1ª moeda}, B =
       {COROA na 2ª moeda} e C = {CARA na 3ª moeda}, então a probabilidade 𝑃(𝐴 ∩ 𝐵 ∩ 𝐶) é dada por:

                                                                          1 1 1 1
                            𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) = 𝑃 (𝐴 ) × 𝑃 (𝐵 ) × 𝑃 (𝐶 ) =    × × =
                                                                          2 2 2 8


---

Porém, o contrário não é verdadeiro, ou seja, não podemos concluir que os eventos são independentes a
partir desta identidade somente.

       Por exemplo, sem conhecer os eventos A, B e C, mas sabendo que:

                                  1                1             1                       1
                       𝑃 (𝐴 ) =     ,   𝑃 (𝐵 ) =     ,   𝑃 (𝐶 ) = ,   𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) =
                                  2                2             2                       8

       não podemos, com base apenas nessas informações, concluir que A, B e C são independentes.

Além disso, é possível que todos os eventos sejam independentes 2 a 2, porém os 3 eventos não serem
independentes. Ou seja, sabendo que A e B são independentes, B e C são independentes, A e C são
independentes, ainda assim, não podemos concluir que os 3 eventos são independentes.

Também é possível que A e B sejam independentes e que B e C sejam independentes. Com base nessas
informações, não podemos concluir que A e C são independentes.

       Por exemplo, suponha que o 1º e 2º lançamentos serão de moedas equilibradas. Suponha que, se o
       resultado do 1º lançamento for CARA, o 3º lançamento será de uma moeda desequilibrada; caso
       contrário, o 3º lançamento será de uma moeda equilibrada.

       Suponha os mesmos eventos A = {CARA na 1ª}, B = {COROA na 2ª} e C = {CARA na 3ª}.

       Nesse exemplo, os eventos A e B são independentes (2 lançamentos separados) e os eventos B e C
       são independentes, pois o resultado do 2º lançamento em nada influencia no resultado do 3º
       lançamento. Porém, os eventos A e C não são independentes, pois o resultado do 1º lançamento
       afeta o resultado do 3º lançamento.

Generalizando, para 𝑛 eventos independentes, vale a relação:

                         𝑷(𝑨𝟏 ∩ 𝑨𝟐 ∩ … ∩ 𝑨𝒏 ) = 𝑷(𝑨𝟏 ) × 𝑷(𝑨𝟐 ) × … × 𝑷(𝑨𝒏 )

Porém, o contrário não é verdadeiro, ou seja, não podemos concluir que os eventos são independentes, a
partir dessa igualdade.

(VUNESP/2019 – Prefeitura de Cerquilho/SP) Em uma prova de múltipla escolha de língua chinesa, cada
uma das 5 questões tem 4 alternativas. A probabilidade de uma pessoa acertar todas as questões, sem
conhecer a língua, e escolhendo, aleatoriamente, uma alternativa em cada questão, é


---

         1
a)
     1024
         1
b) 512
     1
c) 256
     1
d)
     20
     1
e) 4
Comentários:
A probabilidade de acertar todas as questões, escolhendo aleatoriamente as respostas, corresponde à
interseção de acertar cada uma das questões.
Sabendo que há 4 alternativas, a probabilidade de acertar uma questão é:
                                                         1
                                                𝑃(𝐴) =
                                                         4
Assim, a probabilidade de acertar as 5 questões, considerando que são eventos independentes, é o produto:
                                                                           1 1 1 1 1   1
         𝑃(𝐴1 ∩ 𝐴2 ∩ 𝐴3 ∩ 𝐴4 ∩ 𝐴5 ) = 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) =    × × × × =
                                                                           4 4 4 4 4 1024
Gabarito: A.


(VUNESP/2018 – UNICAMP/SP) Dentre os bebedores de cerveja, sabe-se que 1/3 preferem a marca A. Se
três deles são escolhidos ao acaso, a probabilidade de que nenhum deles preferem a marca A é
     1
a) 27
     5
b) 9
     8
c) 27
     2
d) 9
     2
e)
     3

Comentários:
                 1
Sabendo que 3 dos bebedores preferem a marca A, então a probabilidade de escolher um bebedor que não
prefira é complementar:
                                                   1 2
                                              𝑃 =1−  =
                                                   3 3
Considerando que a escolha de um bebedor independe da escolha de outro, então, escolhendo 3 bebedores
ao acaso, a probabilidade de que nenhum dos 3 bebedores prefira a marca A corresponde à interseção dos
eventos (produto das probabilidades):
                                                   2 2 2  8
                                       𝑃×𝑃×𝑃 =      × × =
                                                   3 3 3 27
Gabarito: C.


---

(FGV/2017 – TJ/AL) Os eventos A, B e C de um espaço amostral são tais que A é independente de B, e B é
independente de C. Sabe-se ainda que os três têm probabilidade não nula de ocorrência.
Com tais informações, é correto afirmar que:
a) A é independente de C;
b) A, B e C são mutuamente independentes;
c) A e C são mutuamente exclusivos;
d) B é independente do complementar de C;
e) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶 ) = 𝑃(𝐴 ∩ 𝐵|𝐶 ).
Comentários:
Sabendo que A é independente de B e que B é independente de C, não podemos afirmar nada a respeito da
dependência entre A e C, muito menos a respeito da dependência dos 3 eventos. Por esses motivos, as
alternativas A e B estão incorretas.
Por outro lado, podemos afirmar que os complementares dos eventos apresentam a mesma relação de
independência dos respectivos eventos. Logo, a afirmativa D está correta.
Em relação à alternativa C, se 2 eventos são mutuamente exclusivos, a sua interseção é nula. Como o
enunciado não menciona a respeito da interseção, não podemos saber se os eventos são mutuamente
exclusivos, ou não. Logo, a alternativa C está incorreta.
Em relação à alternativa E, pela definição de probabilidade condicional, temos:
                                                         𝑃(𝐴 ∩ 𝐵 ∩ 𝐶)
                                      𝑃 ( 𝐴 ∩ 𝐵 |𝐶 ) =
                                                            𝑃(𝐶)
Como não sabemos se A, B e C são independentes e considerando que o enunciado não forneceu elementos
que nos permitem calcular 𝑃(𝐴 ∩ 𝐵 ∩ 𝐶), não podemos calcular 𝑃 (𝐴 ∩ 𝐵|𝐶 ). Logo, a alternativa E está
incorreta.
Gabarito: D

Teorema da Probabilidade Total

O Teorema da Probabilidade Total permite calcular a probabilidade de um evento B, quando conhecemos as
probabilidades condicionais desse evento.

Por exemplo, suponha que, em um banco, o nível de inadimplência dos pagadores do grupo A (melhores
pagadores) seja 1%; o nível de inadimplência dos pagadores do grupo B seja 5%; e o nível de inadimplência
dos pagadores do grupo C seja de 10%.

Além disso, suponha que o grupo A represente 50% dos pagadores; o grupo B represente 30%; e o grupo C
represente 20%. Com base nesses valores, podemos calcular a probabilidade total de inadimplência, ou seja,
a probabilidade de inadimplência de um cliente qualquer, sem saber a que grupo ele pertence.


---

Para isso, consideramos que a probabilidade do evento I (inadimplência) está “espalhada” nos três grupos,
ou seja, temos os inadimplentes do grupo A, os inadimplentes do grupo B e os inadimplentes do grupo C,
como representado a seguir.

                             A                                                  B

                                                    I

                                                                                C

Portanto, a probabilidade total de inadimplência é a soma dos inadimplentes de cada grupo, ou seja, a soma
das interseções de I com os grupos A, B e C:

                                  𝑷(𝑰) = 𝑷(𝑰 ∩ 𝑨) + 𝑷(𝑰 ∩ 𝑩) + 𝑷(𝑰 ∩ 𝑪)

Pelo Teorema da Multiplicação, substituímos as interseções pelos produtos das probabilidades:

                       𝑷(𝑰) = 𝑷(𝑰|𝑨) × 𝑷(𝑨) + 𝑷(𝑰|𝑩) × 𝑷(𝑩) + 𝑷(𝑰|𝑪) × 𝑷(𝑪)

Nesse exemplo, temos P(A) = 0,5, P(B) = 0,3, P(C) = 0,2, P(I|A) = 0,01, P(I|B) = 0,05 e P(I|C) = 0,1. Logo, a
probabilidade de um cliente qualquer ser inadimplente é:

                                 𝑃(𝐼 ) = 0,5 × 0,01 + 0,3 × 0,05 + 0,2 × 0,1

                                 𝑃(𝐼 ) = 0,005 + 0,015 + 0,02 = 0,04 = 4%

Essa relação vale para qualquer número de eventos. Havendo apenas 2 eventos a priori, como se fossem
apenas 2 classificações de clientes, 𝐴 e 𝐴̅, a probabilidade total 𝑃(𝐼) é dada por:

                                                             ̅ ) × 𝑷(𝑨
                                  𝑷(𝑰) = 𝑷(𝑰|𝑨) × 𝑷(𝑨) + 𝑷(𝑰|𝑨       ̅)

Generalizando, com 𝑛 eventos 𝐴𝑖 e conhecendo 𝑃(𝐼|𝐴𝑖 ), temos 𝑃(𝐼) dado por:

                   𝑷(𝑰) = 𝑷(𝑰|𝑨𝟏 ) × 𝑷(𝑨𝟏 ) + 𝑷(𝑰|𝑨𝟐 ). 𝑷(𝑨𝟐 ) + ⋯ + 𝑷(𝑰|𝑨𝒏 ). 𝑷(𝑨𝒏 )


---

(CESPE/2015 – Departamento Penitenciário Nacional – Área 4) As probabilidades dos eventos aleatórios A
= “o infrator é submetido a uma pena alternativa” e B = “o infrator reincide na delinquência” são
representadas, respectivamente, por P(A) e P(B). Os eventos complementares de A e B são denominados,
respectivamente, por 𝐴̅ e 𝐵̅. Considerando que P(A) = 0,4, e que as probabilidades condicionais 𝑃 (𝐵|𝐴̅) =
0,3 e 𝑃(𝐵|𝐴) = 0,1, julgue o item a seguir.
P(B) ≤ 0,2.
Comentários:
A questão trata da probabilidade total de B, dada por:
                               𝑃 (𝐵) = 𝑃(𝐵|𝐴) × 𝑃 (𝐴) + 𝑃(𝐵|𝐴̅) × 𝑃(𝐴̅)
O enunciado informa que 𝑃 (𝐴) = 0,4; 𝑃(𝐵|𝐴) = 0,1 e 𝑃(𝐵|𝐴̅) = 0,3.
Ademais, sabendo que 𝑃 (𝐴) = 0,4, o seu complementar é:
                                     𝑃(𝐴̅) = 1 − 𝑃(𝐴) = 1 − 0,4 = 0,6
Substituindo esses valores, temos:
                          𝑃 (𝐵) = 0,1 × 0,4 + 0,3 × 0,6 = 0,04 + 0,18 = 0,22
Esse resultado é maior que 0,2: 𝑃 (𝐵) > 0,2.
Gabarito: Errado.


(FGV/2019 – DPE/RJ) 10% das lâmpadas fabricadas pela empresa A queimam antes de 1000h de
funcionamento. Das fabricadas pela empresa B, 5% queima antes de 1000h de funcionamento. Das
fabricadas pela empresa C, 1% queima antes de 1000h de funcionamento. Em uma grande loja de varejo,
20% das lâmpadas em estoque são da marca A, 30% são da marca B e 50% são da marca C. Uma lâmpada é
escolhida ao acaso do estoque dessa loja.
A probabilidade de que ela não queime antes de 1000h de funcionamento é igual a.
a) 0,76
b) 0,84
c) 0,92
d) 0,96
e) 0,98
Comentários:
A questão trabalha com o Teorema da Probabilidade Total, pois informa as probabilidades de durabilidade,
condicionadas aos fabricantes, e pede a probabilidade de durabilidade, não condicionada.


---

A probabilidade de a lâmpada não queimar antes de 1000h é complementar à probabilidade de ela queimar
antes de 1000h:
                                              𝑃 (𝑄̅ ) = 1 − 𝑃(𝑄)
O enunciado informa que:
•   10% das lâmpadas fabricadas por A queimam antes de 1000h: P(Q|A) = 0,1;
•   5% das lâmpadas fabricadas por B queimam antes de 1000h: P(Q|B) = 0,05;
•   1% das lâmpadas fabricadas por C queimam antes de 1000h: P(Q|C) = 0,01;
•   20% das lâmpadas são fabricadas por A: P(A) = 0,2;
•   30% das lâmpadas são fabricadas por B: P(B) = 0,3;
•   50% das lâmpadas são fabricadas por C: P(C) = 0,5.

Pelo Teorema da Probabilidade Total, temos:
                      𝑃(𝑄 ) = 𝑃(𝑄 |𝐴) × 𝑃(𝐴) + 𝑃 (𝑄|𝐵) × 𝑃(𝐵) + 𝑃(𝑄|𝐶) × 𝑃(𝐶)
Substituindo os valores fornecidos, temos:
               𝑃(𝑄 ) = 0,1 × 0,2 + 0,05 × 0,3 + 0,01 × 0,5 = 0,02 + 0,015 + 0,005 = 0,04
Portanto, a probabilidade de a lâmpada não queimar é complementar:
                                  𝑃(𝑄̅ ) = 1 − 𝑃(𝑄 ) = 1 − 0,04 = 0,96
Gabarito: D

(FCC/2016 – Analista Judiciário do TRT 11ª Região) Um determinado órgão público recebe mensalmente
processos que devem ser analisados por 2 analistas: A e B. Sabe-se que esses dois analistas recebem a mesma
proporção de processos para a análise. Sabe-se que 20% de todos os processos encaminhados para A são
analisados no mês de recebimento e que 10% são indeferidos. Sabe-se também que 40% dos processos
encaminhados para B são analisados no mês de recebimento e que 20% são indeferidos.
Um processo recebido em determinado mês é selecionado ao acaso. A probabilidade de ele ser deferido
naquele mesmo mês é igual a
a) 0,245
b) 0,350
c) 0,500
d) 0,420
e) 0,250
Comentários:
Pela probabilidade total, a probabilidade de um processo ser deferido no mesmo mês é:
                               𝑃 ( 𝐷 ) = 𝑃 ( 𝐷 |𝐴 ) × 𝑃 ( 𝐴 ) + 𝑃 ( 𝐷 |𝐵 ) × 𝑃 ( 𝐵 )
Sabemos que P(A) = P(B). Como P(A) + P(B) = 1, então P(A) = P(B) = 0,5.


---

Além disso, sabemos que a probabilidade de o processo ser deferido no mesmo mês é o complementar de
ele ser indeferido no mesmo mês.
O enunciado informa que:
•   20% dos processos de A são analisados no mês e 10% deles são indeferidos. Ou seja, 90% dos processos
    analisados no mês por A são deferidos:
                                       𝑃 (𝐷|𝐴) = 0,2 × 0,9 = 0,18
•   40% dos processos de B são analisados no mês e 20% deles são indeferidos. Ou seja, 80% dos processos
    analisados no mês por B são deferidos:
                                       𝑃 (𝐷|𝐵) = 0,4 × 0,8 = 0,32
Inserindo esses valores no Teorema da Probabilidade Total, temos:
                         𝑃(𝐷 ) = 0,18 × 0,5 + 0,32 × 0,5 = 0,09 + 0,16 = 0,25
Gabarito: E

Teorema de Bayes

O Teorema de Bayes é usado quando conhecemos as probabilidades condicionais da forma P(B|A), e
queremos calcular a probabilidade condicional da forma P(A|B), isto é, invertendo-se os eventos a priori e a
posteriori.

No exemplo da inadimplência que vimos antes, conhecemos as probabilidades de inadimplência para cada
grupo, isto é, com a inadimplência sendo o evento a posteriori e os grupos A, B e C sendo os eventos a priori:

    •   P(I|A) = 0,01
    •   P(I|B) = 0,05
    •   P(I|C) = 0,1.

Mas, podemos calcular a probabilidade de um cliente pertencer a um dos grupos (por exemplo ao grupo A),
sabendo que ele foi inadimplente, ou seja, tendo a inadimplência como evento a priori:

    •   P(A|I) = ?

Para isso, vamos utilizar a fórmula da probabilidade condicional:

                                                        𝑃(𝐴 ∩ 𝐼)
                                            𝑃 (𝐴|𝐼) =
                                                          𝑃(𝐼)

Pelo Teorema da Multiplicação, podemos escrever o numerador em função da probabilidade condicional
P(I|A), que conhecemos, isto é, com o evento inadimplência a posteriori:

                                        𝑃 (𝐴 ∩ 𝐼 ) = 𝑃(𝐼|𝐴) × 𝑃(𝐴)


---

Pelo Teorema da Probabilidade Total, podemos escrever o denominador como:

                      𝑃(𝐼 ) = 𝑃(𝐼 |𝐴) × 𝑃(𝐴) + 𝑃 (𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶 ) × 𝑃(𝐶)

Assim, a fórmula do Teorema de Bayes para é:

                                                     𝑷(𝑰|𝑨)×𝑷(𝑨)
                           𝑷(𝑨|𝑰) = 𝑷(𝑰|𝑨)×𝑷(𝑨)+𝑷(𝑰|𝑩)×𝑷(𝑩)+𝑷(𝑰|𝑪)×𝑷(𝑪)

Para o nosso exemplo, já calculamos o denominador, que corresponde à probabilidade de um cliente ser
inadimplente, pela probabilidade total:

                     𝑃(𝐼 ) = 𝑃(𝐴). 𝑃(𝐼|𝐴) + 𝑃(𝐵). 𝑃 (𝐼|𝐵) + 𝑃(𝐶 ). 𝑃 (𝐼|𝐶 ) = 0,04

Também sabemos que P(I|A) = 0,01 e P(A) = 0,5, portanto, a probabilidade de um cliente inadimplente ser
do grupo A é:

                                        0,01 × 0,5 0,005 1
                         𝑃 ( 𝐴| 𝐼 ) =             =      = = 0,125 = 12,5%
                                           0,04     0,04  8

De maneira geral, com 𝑛 eventos 𝐴𝑖 e conhecendo as probabilidades 𝑃(𝐵|𝐴𝑖 ), então a probabilidade de
algum evento 𝐴𝑚 , condicionada ao evento 𝐵 é:

                                                𝑷(𝑩|𝑨𝒎 ). 𝑷(𝑨𝒎 )
               𝑷(𝑨𝒎 |𝑩) =
                            𝑷(𝑩|𝑨𝟏 ). 𝑷(𝑨𝟏 ) + 𝑷(𝑩|𝑨𝟐 ). 𝑷(𝑨𝟐 ) + ⋯ + 𝑷(𝑩|𝑨𝒏 ). 𝑷(𝑨𝒏 )

(FGV/2019 – DPE/RJ) A abrangência do atendimento da Defensoria Pública depende da condição econômica
do cidadão e também do tipo de causa envolvida. Sabe-se que 80% das demandas surgem em função da
hipossuficiência econômica, e os outros 20% devem-se a causas no âmbito criminal. Entre aqueles que não
dispõem de recursos, 90% têm suas necessidades atendidas, enquanto entre os envolvidos em ações
criminais, só 40% são beneficiados com a gratuidade.
Suponha que um indivíduo do cadastro dos que procuram a Defensoria seja sorteado ao acaso, verificando-
se tratar-se de alguém atendido gratuitamente.
Então, a probabilidade de que o sorteado seja um dos que procuraram a Defensoria por causa de questões
criminais é igual a:


---

     1
a)
     10
     2
b) 10
     6
c) 10
     7
d)
     10
     9
e) 10
Comentários:
A questão trabalha com o Teorema de Bayes, pois informa as probabilidades de gratuidade condicionadas
aos tipos de situação e pergunta pela probabilidade do tipo de situação, condicionada à gratuidade, isto é,
inverte os eventos a priori e a posteriori.
O enunciado informa que:
•     80% das demandas surgem por hipossuficiência econômica: P(H) = 0,8;
•     Os outros 20% das demandas surgem por causas criminais: P(C) = 0,2;
•     90% das demandas de hipossuficiência econômica conseguem gratuidade: P(G|H) = 0,9
•     40% das demandas por causas criminais conseguem gratuidade: P(G|C) = 0,4
Assim, a probabilidade de a demanda ser por causas criminais, sabendo que conseguiu gratuidade, P(C|G),
é dada pela fórmula de Bayes:
                                                         𝑃(𝐺|𝐶) × 𝑃(𝐶)
                                𝑃 ( 𝐶 |𝐺 ) =
                                               𝑃(𝐺 |𝐶 ) × 𝑃(𝐶 ) + 𝑃(𝐺|𝐻) × 𝑃(𝐻)
Substituindo os valores do enunciado, temos:
                                            0,4 × 0,2          0,08      0,08   1
                       𝑃 ( 𝐶 |𝐺 ) =                        =           =      =
                                      0,4 × 0,2 + 0,9 × 0,8 0,08 + 0,72 0,80 10
Gabarito: A


(FCC/2018 – Analista Judiciário do TRT 14ª Região) Uma cidade sede do interior possui três varas
trabalhistas. A 1ª Vara comporta 50% das ações trabalhistas, a 2ª Vara comporta 30% e a 3ª Vara as 20%
restantes. As porcentagens de ações trabalhistas oriundas da atividade agropecuária são 3%, 4% e 5% para
a 1ª, 2ª e 3ª Varas, respectivamente. Escolhe-se uma ação trabalhista aleatoriamente e constata-se ser
originária da atividade agropecuária. A probabilidade dessa ação ser da 1ª Vara trabalhista é,
aproximadamente:
a) 0,5312.
b) 0,3332.
c) 0,1241.
d) 0,4909.
e) 0,4054.
Comentários:


---

O enunciado fornece as proporções das ações de atividade agropecuária para cada uma das varas (ou seja,
tendo as ações de atividade agropecuária como probabilidade a posteriori) e exige a probabilidade uma ação
de ser da 1ª Vara, sabendo que ela trata atividade agropecuária (ou seja, tendo as ações de atividade
agropecuária como evento a priori).
Pelo Teorema de Bayes, P(V1|A) é dado por:
                                                 𝑃(𝐴|𝑉1 ) × 𝑃(𝑉1 )
                   𝑃(𝑉1|𝐴) =
                               𝑃(𝐴|𝑉1) × 𝑃(𝑉1) + 𝑃(𝐴|𝑉2 ) × 𝑃(𝑉2 ) + 𝑃(𝐴|𝑉3 ) × 𝑃(𝑉3 )
A questão informa que:
•   A 1ª Vara comporta 50% das ações: 𝑃 (𝑉1) = 0,5;
•   A 2ª Vara comporta 30% das ações: 𝑃 (𝑉2 ) = 0,3;
•   A 3ª Vara comporta 20% das ações: 𝑃 (𝑉3 ) = 0,2;
•   As percentagens das ações de atividade agropecuária para as Varas 1, 2 e 3 são, respectivamente, 3%,
    4% e 5%: 𝑃(𝐴|𝑉1 ) = 0,03, 𝑃 (𝐴|𝑉2 ) = 0,04 e 𝑃 (𝐴|𝑉3 ) = 0,05.
Substituindo esses valores na fórmula do Teorema de Bayes, temos:
                               0,03 × 0,5                     0,015          0,015
      𝑃(𝑉1|𝐴) =                                       =                    =       ≅ 0,4054
                  0,03 × 0,5 + 0,04 × 0,3 + 0,05 × 0,2 0,015 + 0,012 + 0,01 0,037
Gabarito: E.


(CESPE/2019 – TJ/AM) Se Carlos estiver presente na aula ministrada pela professora Paula, a probabilidade
de ele aprender o conteúdo abordado é de 80%; se ele estiver ausente, essa probabilidade cai para 0%. Em
25% das aulas da professora Paula, Carlos está ausente.
Com relação a essa situação hipotética, julgue o item seguinte.
Se Carlos não aprendeu o conteúdo ministrado na aula da professora Paula, então a probabilidade de ele ter
estado presente na aula é inferior a 50%.
Comentários:
O enunciado informa que:
•   Se Carlos estiver presente na aula, a probabilidade de aprender o conteúdo é de 80%: 𝑃 (𝐴𝑝|𝑃 ) = 0,8,
    em que Ap corresponde ao aprendizado e P corresponde à presença;
•   Se Carlos estiver ausente, a probabilidade de aprender é 0%: 𝑃(𝐴𝑝|𝑃̅ ) = 0, em que 𝑃̅ corresponde à não
    presença, isto é, à ausência;
•   Carlos está ausente em 25%: 𝑃 (𝑃̅) = 0,25.


Para calcular a probabilidade de Carlos ter estado presente, sabendo que ele não aprendeu o conteúdo, isto
é, 𝑃 (𝑃|̅̅̅̅
        𝐴𝑝), em que ̅̅̅̅
                     𝐴𝑝 corresponde ao não aprendizado, utilizamos a fórmula de Bayes:

                                                     ̅̅̅̅|𝑃) × 𝑃(𝑃)
                                                   𝑃(𝐴𝑝
                            𝑃 (𝑃|̅̅̅̅
                                 𝐴𝑝) =
                                           ̅̅̅̅|𝑃) × 𝑃(𝑃) + 𝑃(𝐴𝑝
                                         𝑃(𝐴𝑝                  ̅̅̅̅|𝑃̅) × 𝑃(𝑃̅)


---

Sabemos que a probabilidade de Carlos aprender, dado que esteve presente, é 𝑃(𝐴𝑝|𝑃 ) = 0,8. Assim, a
probabilidade de Carlos não aprender, dado que esteve presente, corresponde à probabilidade do evento
complementar:
                               𝑃 (̅̅̅̅
                                  𝐴𝑝|𝑃 ) = 1 − 𝑃(𝐴𝑝|𝑃) = 1 − 0,8 = 0,2
Sabemos ainda que a probabilidade de Carlos não estar presente é 𝑃(𝑃̅) = 0,25. Logo, a probabilidade de
Carlos estar presente corresponde à probabilidade do evento complementar:
                                  𝑃(𝑃) = 1 − 𝑃(𝑃̅) = 1 − 0,25 = 0,75
Por fim, sabemos que a probabilidade de Carlos aprender, dado que não esteve presente, é 𝑃(𝐴𝑝|𝑃̅) = 0.
Logo, a probabilidade de Carlos não aprender, dado que não esteve presente, é complementar:
                                   𝐴𝑝|𝑃̅) = 1 − 𝑃(𝐴𝑝|𝑃̅ ) = 1 − 0 = 1
                                 𝑃(̅̅̅̅
Substituindo esses valores na fórmula de Bayes, temos:
                                      0,2 × 0,75         0,15       0,15
                   𝑃 (𝑃|̅̅̅̅
                        𝐴𝑝) =                        =            =      = 37,5%
                                0,2 × 0,75 + 1 × 0,25 0,15 + 0,25   0,4
Ou seja, a probabilidade de Carlos estar presente, sabendo que ele não aprendeu é inferior a 50%
Gabarito: Certo.

                                    Probabilidade Condicional

                                                   𝑃(𝐴∩𝐵)
        Probabilidade Condicional: 𝑃 (𝐵|𝐴) =        𝑃(𝐴)


        Teorema da Multiplicação: 𝑃 (𝐴 ∩ 𝐵) = 𝑃 (𝐵|𝐴) × 𝑃(𝐴)

        Teorema da Probabilidade Total: 𝑃(𝐼 ) = 𝑃 (𝐼|𝐴) × 𝑃(𝐴) + 𝑃(𝐼|𝐵) × 𝑃 (𝐵)

                                      𝑃(𝐼∩𝐴)              𝑃(𝐼|𝐴)×𝑃(𝐴)
        Teorema de Bayes: 𝑃(𝐴|𝐼 ) =            =
                                       𝑃(𝐼)        𝑃(𝐼|𝐴)×𝑃(𝐴)+𝑃(𝐼|𝐵)×𝑃(𝐵)


                                              Independência

        𝐴 e 𝐵 independentes ↔ 𝑃 (𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)

        𝐴, 𝐵 e 𝐶 independentes → 𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) = 𝑃(𝐴) × 𝑃(𝐵) × 𝑃(𝐶)


---

Resumo da Aula

Definição clássica de probabilidade
                                       𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                            𝑃 (𝐴 ) =                             =
                                         𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
Probabilidade da União – caso geral

                                       P(A  B) = P(A) + P(B) – P(A  B)

Probabilidade da União – eventos mutuamente excludentes: P(A  B) = 0

                                             P(A  B) = P(A) + P(B)
Teorema do Evento Complementar
Vale também para combinação de eventos (união e interseção) e para probabilidades condicionais

                                              𝑃(𝐴̅) = 1 − 𝑃(𝐴)
Axiomas/Propriedades de Probabilidade

                                                       𝑃 (𝑈 ) = 1

                                                   0 ≤ 𝑃(𝐴) ≤ 1

Probabilidade Condicional – quando sabemos que o evento A ocorreu
                                                           𝑃(𝐴 ∩ 𝐵)
                                            𝑃 ( 𝐵 | 𝐴) =
                                                             𝑃(𝐴)
                                        𝑃 ( 𝐴 ∩ 𝐵 ) = 𝑃 ( 𝐵 |𝐴 ) × 𝑃 ( 𝐴 )
Eventos Independentes – o resultado de um não influencia o resultado do outro
                                               𝑃(𝐵|𝐴) = 𝑃(𝐵)
                                         𝑃 (𝐴 ∩ 𝐵) = 𝑃(𝐵) × 𝑃(𝐴)
Teorema da Probabilidade Total: probabilidade do todo, a partir das probabilidades condicionais
                       𝑃(𝐼 ) = 𝑃(𝐼|𝐴) × 𝑃(𝐴) + 𝑃 (𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶 ) × 𝑃(𝐶)

Teorema de Bayes: quando a questão inverte os eventos a priori e a posteriori
                                                   𝑃(𝐼|𝐴) × 𝑃(𝐴)
                     𝑃 (𝐴|𝐼 ) =
                                  𝑃(𝐼|𝐴) × 𝑃 (𝐴) + 𝑃(𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶) × 𝑃(𝐶)


---

                        QUESTÕES COMENTADAS – FGV

Definições de Probabilidade

1.     (FGV/2023 – RFB) Uma equipe de trabalho reúne 4 auditores e 6 analistas. Se três pessoas dessa
equipe forem selecionadas aleatoriamente para formar um pequeno grupo de trabalho, a probabilidade
de que esse grupo seja formado por dois analistas e um auditor é igual a

a) 0,2

b) 0,5

c) 0,6

d) 0,7

e) 0,8

Comentários:

A probabilidade é a razão entre a quantidade de eventos favoráveis e a quantidade total de eventos possíveis
                                             𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐹 )
                                        𝑃=                      =
                                              𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛 (𝑈 )
O total de eventos possíveis correspondem às maneiras de escolher 3 pessoas, dentre 10, no total. Como a
ordem não importa, temos a combinação de 10 escolhe 3:
                                10!         10 × 9 × 8 × 7! 10 × 9 × 8
          𝑛(𝑈) = 𝐶10,3 =                  =                =           = 10 × 3 × 4 = 120
                           (10 − 3)! × 3!       7! × 3!       3×2
E os eventos favoráveis correspondem às maneiras de escolher 1 auditor, dentre 4, e 2 analistas, dentre 6.
Para a escolha do auditor, há 4 possibilidades. E para a escolha dos analistas, temos a combinação de 6
escolhe 2:
                                             6!         6 × 5 × 4!
                               𝐶6,2 =                 =            = 3 × 5 = 15
                                        (6 − 2)! × 2!     4! × 2
Pelo princípio multiplicativo, a quantidade de eventos favoráveis é o produto:
                                              𝑛(𝐹 ) = 4 × 15 = 60
E a probabilidade é a razão:
                                                       60
                                                 𝑃=       = 0,5
                                                      120
Gabarito: B


---

2.     (FGV/2022 – MPE/SC) Há evidências de que uma alta pressão sanguínea esteja associada a um
aumento de óbitos por problemas cardiovasculares. Em um estudo foram examinados 3.000 homens com
alta pressão sanguínea e 2.400 homens com baixa pressão. Durante o período do estudo, 12 homens do
grupo de baixa pressão e 30 do grupo de alta pressão faleceram por problemas cardiovasculares. A chance
de morrer por problemas cardiovasculares no grupo de alta pressão é dada, aproximadamente, por:

a) 0,005
b) 0,01
c) 0,1
d) 0,05
e) 0,5

Comentários:

Essa questão trabalha com o conceito frequentista, em que aproximamos a probabilidade à frequência
observada:
                                      𝑛(𝑜𝑏𝑠𝑒𝑟𝑣𝑎çõ𝑒𝑠 𝑑𝑜 𝑒𝑣𝑒𝑛𝑡𝑜) 𝑛
                                 𝑓=                            =
                                       𝑛(𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑜𝑏𝑠𝑒𝑟𝑣𝑎çõ𝑒𝑠)   𝑁
O enunciado informa que foram observadas 𝑛 = 30 mortes no grupo de alta pressão e que foram
examinados 𝑁 = 3000 homens com alta pressão. Assim, a frequência observada é a razão:
                                                 30
                                           𝑓=        = 0,01
                                                3000
Que é aproximadamente igual à probabilidade correspondente.
Gabarito: B

3.     (FGV/2022 – PC/RJ) Treze cadeiras numeradas consecutivamente de 1 a 13 formam uma fila.
Quatro pessoas devem sentar-se nelas e o número da cadeira em que cada uma deve se sentar será
decidido por sorteio. Para as três primeiras pessoas foram sorteados os números 3, 8 e 11 e será feito o
sorteio para a última cadeira a ser ocupada. A probabilidade de que a quarta pessoa NÃO se sente ao lado
de nenhuma pessoa já sentada é:

a) 1/2
b) 1/4
c) 2/5
d) 7/10
e) 4/13


---

Comentários:

Há 13 cadeiras, estando ocupadas as de números 3, 8 e 11, conforme representado a seguir:
                               P                         P               P
                    1    2     3    4    5     6     7   8     9   10    11   12   13

Assim, restam 𝑛(𝑈) = 10 cadeiras para a quarta pessoa se sentar. Para ela não se sentar ao lado de ninguém
já sentado, há as seguintes possibilidades:
                         X     P    X                X   P    X     X    P    X
                    1    2     3    4    5     6     7   8     9   10    11   12   13

Há, portanto, 𝑛(𝐹 ) = 4 cadeiras que não estão ao lado de ninguém sentado.
A probabilidade é a razão entre essas quantidades:
                                               𝑛 (𝐹 )   4   2
                                          𝑃=          =   =
                                               𝑛(𝑈) 10 5
Gabarito: C

4.     (FGV/2022 – PM/AM) Em uma fila com 12 cadeiras, três delas foram ocupadas aleatoriamente. A
cadeira em que Valter deverá se sentar será sorteada entre as cadeiras que estão vazias. A probabilidade
de que Valter não se sente ao lado de nenhuma pessoa já sentada é, no mínimo:

a) 1/2

b) 1/3

c) 2/3

d) 1/4

e) 1/6

Comentários:

O enunciado informa que há 12 cadeiras, das quais 3 estão ocupadas; e pede a probabilidade mínima de uma
nova pessoa (Valter) não se sentar ao lado de ninguém sentado.
Não sabemos como as três pessoas estão sentadas. Se todas estiverem juntos, haverá mais chances de Valter
não se sentar ao lado de ninguém. Logo, a probabilidade mínima de Valter não se sentar ao lado de ninguém
é calculada supondo-se que as três pessoas estão espalhadas, ou seja, que há pelo menos duas cadeiras
separando as pessoas sentadas.


---

Desse modo, cada pessoa sentada "inviabiliza" duas cadeiras. Um exemplo dessa situação está ilustrado a
seguir, em que P representa uma pessoa sentada e X representa uma cadeira ao lado de uma pessoa sentada:
                     X     P     X            X    P    X                X     P    X
                     1     2     3     4      5    6    7    8      9    10   11    12


Há outras possibilidades de acomodar as 3 pessoas, separadas por pelo menos 2 cadeiras, mas em todas elas
restam 3 cadeiras que não estão ao lado de ninguém sentado (eventos favoráveis):
                                           𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 3
E os eventos possíveis correspondem a todas as cadeiras disponíveis, considerando que há 12 cadeiras no
total, das quais 3 estão ocupadas:
                                     𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 12 − 3 = 9
E a probabilidade é a razão entre esses resultados:
                                                       3 1
                                                  𝑃=    =
                                                       9 3
Gabarito: B

5.     (FGV/2022 – SEMSA Manaus) Lançamos ao acaso dois dados não viciados no chão. Se S é a soma
dos valores obtidos nas faces superiores, então a probabilidade de que S seja maior do 9 é igual a

a) 1/12

b) 1/8

c) 1/6

d) 1/5

e) 1/4

Comentários:

Calculamos a probabilidade pela razão entre os eventos favoráveis e o total de eventos possíveis:
                                           𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐹 )
                                     𝑃=                       =
                                            𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛 (𝑈 )
O total de eventos possíveis corresponde a todos os resultados possíveis dos dois dados. Sabendo que há 6
possibilidades para cada dado, temos:
                                             𝑛(𝑈) = 6 × 6 = 36


---

E os eventos favoráveis são aqueles cuja soma é maior que 9, ou seja, 10, 11 ou 12.
   •      Para somar 10, as possibilidades são {(5,5), (6,4), (4,6)} - 3 possibilidades;
   •      Para somar 11, as possibilidades são {(5,6), (6,5)} - 2 possibilidades; e
   •      Para somar 12, a única possibilidade é {(6,6)} - 1 possibilidade.
Por serem eventos mutuamente exclusivos, o número de possibilidades favoráveis é a soma:
                                               𝑛 (𝐴 ) = 3 + 2 + 1 = 6
E a probabilidade é a razão:
                                                           6   1
                                                     𝑃=      =
                                                           36 6
Gabarito: C

6.     (FGV/2022 – TRT/MA) Dois dados serão lançados aleatoriamente sobre uma mesa e os números
resultantes nas faces superiores serão anotados. Se X é o valor absoluto de diferença entre os dois
números, então a probabilidade de que X seja igual a 3 é igual a

a) 1/12

b) 1/8

c) 1/6

d) 1/3

e) 1/2

Comentários:

A probabilidade pode ser calculada pela razão entre o número de eventos favoráveis e o número total de
eventos possíveis:
                                              𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                         𝑃=                     =
                                               𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
Sabendo que cada dado possui 6 faces e que serão lançados dois dados, o número total de eventos possíveis
é o produto (princípio multiplicativo):
                                                𝑛(𝑈) = 6 × 6 = 36
Em relação aos eventos favoráveis, para que a diferença entre os resultados seja igual a 3, temos as seguintes
possibilidades:
                                                 {(1, 4), (2, 5), (3, 6)}


---

Essa quantidade deve ser multiplicada por 2, porque, para cada um desses resultados, há 2 possibilidades:
o menor resultado (por exemplo, a face 1) pode vir no primeiro dado e o maior (no caso, a face 4) no segundo
dado; OU o maior (a face 4) no primeiro dado e o menor (a face 1) no segundo. Assim, o número de eventos
favoráveis é:
                                            𝑛 (𝐴 ) = 2 × 3 = 6
E a probabilidade é:
                                                  𝑛(𝐴)   6   1
                                           𝑃=          =   =
                                                  𝑛(𝑈) 36 6
Gabarito: C

7.    (FGV/2022 – TRT/PB) Se escolhemos ao acaso um número de três algarismos, a probabilidade de
que seus três algarismos sejam distintos é igual a

a) 46%.

b) 50%.

c) 60%.

d) 72%.

e) 78%.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                    𝑃=                     =
                                          𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O número total de eventos corresponde a todas as possibilidades de formar números de 3 algarismos.

Para a primeira posição, há 9 possibilidades (algarismos de 1 a 9), uma vez que o número não pode iniciar
com o algarismo 0 (nessa situação, o número seria formado por apenas 2 algarismos, e não 3). Para as demais
posições, há 10 possibilidades (algarismos de 0 a 9).

                                              9      10    10

Pelo princípio multiplicativo, a quantidade total de números com 3 algarismos possíveis é:
                                           𝑛(𝑈) = 9 × 10 × 10
Já, os eventos favoráveis correspondem às possibilidades de formar números com 3 algarismos distintos.


---

Para a primeira posição, há 9 possibilidades (algarismos de 1 a 9); para a segunda posição, há 9 possibilidades
(8 possibilidades dentre os algarismos de 1 a 9, exceto o algarismo escolhido para a primeira posição, e mais
o algarismo 0); e para a terceira posição, há 8 possibilidades, dentre os algarismos de 0 a 9, não selecionados
para as posições anteriores.

                                               9      9      8

Pelo princípio multiplicativo, a quantidade de números com 3 algarismos distintos é:
                                              𝑛 (𝐴 ) = 9 × 9 × 8
E a probabilidade é a razão entre esses resultados:
                                       𝑛(𝐴)   9×9×8      72
                                  𝑃=        =          =    = 72%
                                       𝑛(𝑈) 9 × 10 × 10 100
Gabarito: D

8.    (FGV/2022 – CBM/RJ) Solange e Marcelo fazem parte de um grupo de 10 pessoas. Sorteiam-se duas
pessoas desse grupo, em sequência e sem reposição.

A probabilidade de Solange ser sorteada e Marcelo não é de:

a) 8/45

b) 1/10

c) 1/5

d) 4/25

e) 3/40

Comentários:

Precisamos calcular a probabilidade de Solange ser sorteada e Marcelo não, independentemente da ordem
do sorteio.
Para que Solange seja uma das duas pessoas sorteadas e Marcelo não, é necessário que a outra pessoa
selecionada seja uma das 8 pessoas que restaram, diferente de Marcelo. Logo, o número de eventos
favoráveis é 𝑛(𝐹 ) = 8.
E o número total de maneiras de selecionar 2 pessoas, dentre 10, sem que a ordem da escolha importe, é a
combinação de 10 escolhe 2:
                                              10!         10 × 9 × 8!
                        𝑛(𝑈) = 𝐶10,2 =                  =             = 5 × 9 = 45
                                         (10 − 2)! × 2!     8! × 2


---

E a probabilidade desejada é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                                  𝑛 (𝐹 )   8
                                             𝑃=          =
                                                  𝑛(𝑈) 45
Gabarito: A

9.     (FGV/2022 – CM Taubaté) Em uma urna há 6 bolas numeradas. Retira-se da urna, aleatoriamente,
2 bolas em sequência e sem reposição.

A probabilidade de o maior número nas bolas retiradas ser igual a 4 é

a) 1/2

b) 2/3

c) 1/5

d) 2/5

e) 3/5

Comentários:

Precisamos calcular a probabilidade de o maior número das bolas retiradas ser igual a 4, independentemente
da ordem do sorteio.
Para que isso ocorra, é necessário que uma bola seja a de número 4 e a outra seja a de número 1, 2 ou 3 (3
possibilidades). Logo, o número de eventos favoráveis é 𝑛(𝐹 ) = 3.
E o número total de maneiras de selecionar 2 bolas, dentre 6, sem que a ordem da escolha importe, é a
combinação de 6 escolhe 2:
                                             6!         6 × 5 × 4!
                        𝑛(𝑈) = 𝐶6,2 =                 =            = 3 × 5 = 15
                                        (6 − 2)! × 2!     4! × 2
E a probabilidade desejada é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                               𝑛 (𝐹 )   3   1
                                          𝑃=          =   =
                                               𝑛(𝑈) 15 5
Gabarito: C


---

10.    (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados, aleatoriamente,
entre os números −3, −2, −1, 0, 1, 2, 3, 4. A probabilidade de que o produto dos dois números sorteados
seja maior do que zero é:

a) 1/2.

b) 9/28.

c) 19/28.

d) 19/56.

e) 23/56.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                     𝑃=                     =
                                           𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O total de eventos corresponde ao número de maneiras de sortear 2 números, dentre 8. Como vamos
calcular o produto, a ordem não importa:
                                                    8!         8 × 7 × 6!
                               𝑛(𝑈) = 𝐶8,2 =                 =            = 28
                                               (8 − 2)! × 2!     6! × 2
Para que o produto seja maior do que zero, precisamos sortear dois números positivos ou dois números
negativos. O número de maneiras de sortear 2 números positivos, dentre 4 possibilidades, sem que a ordem
importe é a combinação:
                                                       4!         4 × 3 × 2!
                               𝑛(+, +) = 𝐶4,2 =                 =            =6
                                                  (4 − 2)! × 2!     2! × 2
E o número de maneiras de sortear 2 números negativos, dentre 3 possibilidades, sem que a ordem importe
é a combinação:
                                                        3!        3 × 2!
                                𝑛(−, −) = 𝐶3,2 =                =        =3
                                                   (3 − 2)! × 2! 1! × 2!
Os eventos favoráveis correspondem a soma dessas possibilidades, por serem mutuamente exclusivas
(princípio aditivo):
                                               𝑛 (𝐴 ) = 6 + 3 = 9
E a probabilidade é a razão:
                                                     𝑛(𝐴)   9
                                                𝑃=        =
                                                     𝑛(𝑈) 28
Gabarito: B


---

11.    (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas são
retiradas do saco ao acaso. A probabilidade de que as bolinhas retiradas tenham números consecutivos é,
aproximadamente, igual a:

a) 22%;

b) 28%;

c) 33%;

d) 39%;

e) 45%.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                     𝑃=                     =
                                           𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
Os eventos favoráveis correspondem ao número de maneiras de selecionar 2 bolas consecutivos, quais sejam
{(1 e 2), (2 e 3), (3 e 4), (4 e 5), (5 e 6), (6 e 7), (7 e 8), (8 e 9)}. Logo, há 𝑛(𝐴) = 8 eventos favoráveis.
O total de eventos corresponde ao número de maneiras de sortear 2 bolas, dentre 9, sem que a ordem
importe:
                                                    9!         9 × 8 × 7!
                               𝑛(𝑈) = 𝐶9,2 =                 =            = 36
                                               (9 − 2)! × 2!     7! × 2
E a probabilidade é a razão:
                                             𝑛(𝐴)   8  2
                                        𝑃=        =   = ≅ 22%
                                             𝑛(𝑈) 36 9
Gabarito: A

12.   (FGV/2022 – TRT/PB) Numa empresa há seis gerentes e quatro superintendentes. Se quatro dessas
pessoas forem selecionadas ao acaso para formar uma comissão de quatro membros, a probabilidade de
que dois gerentes e dois superintendentes sejam escolhidos é aproximadamente igual a

a) 0,43.
b) 0,50.
c) 0,54.
d) 0,59.
e) 0,63.


---

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                            𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                       𝑃=                     =
                                             𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O total de eventos possíveis é o número de maneiras de selecionar quaisquer 4 pessoas, dentre todas as 10.
Considerando que a ordem não importa, temos a combinação de 10 escolhe 4:
                                     10!         10 × 9 × 8 × 7 × 6!
               𝑛(𝑈) = 𝐶10,4 =                  =                     = 10 × 3 × 7 = 210
                                (10 − 4)! × 4!     6! × 4 × 3 × 2
E os eventos favoráveis correspondem ao número de maneiras de selecionar 2 gerentes, dentre 6, e 2
superintendentes, dentre 4. O número de maneiras de selecionar 2 gerentes, dentre 6, é:
                                            6!         6 × 5 × 4!
                             𝐶6,2 =                  =            = 3 × 5 = 15
                                       (6 − 2)! × 2!     4! × 2
E o número de maneiras de selecionar 2 superintendentes, dentre 4, é:
                                            4!         4 × 3 × 2!
                              𝐶4,2 =                 =            =2×3=6
                                       (4 − 2)! × 2!     2! × 2
Pelo princípio multiplicativo, o número de maneiras de escolher os 2 gerentes E os 2 superintendentes é o
produto:
                                             𝑛(𝐴) = 15 × 6 = 90
E a probabilidade é a razão entre esses resultados:
                                                   90  3
                                             𝑃=       = ≅ 0,43
                                                  210 7
Gabarito: A

13.    (FGV/2022 – SEFAZ/AM) Em uma urna há 5 bolas iguais, cada uma com uma letra da sigla SEFAZ.
Todas as bolas têm letras diferentes entre si. Retiram-se, aleatoriamente, 2 bolas da urna. A probabilidade
de que tenham sido retiradas as 2 vogais é de

a) 1/5

b) 2/5

c) 3/5

d) 3/10

e) 1/10


---

Comentários:

A questão pede a probabilidade de selecionar as 2 únicas vogais, considerando que 2 letras serão
selecionadas dentre as 5 letras da palavra SEFAZ.
Os eventos favoráveis correspondem à única possibilidade de selecionar as 2 vogais:
                                        𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 1
E os eventos possíveis correspondem às maneiras de selecionar 2 elementos, dentre 5, sem que a ordem
importe (combinação):
                                                    5!         5 × 4 × 3! 5 × 4
                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶5,2 =                 =           =      = 10
                                               (5 − 2)! × 2!     3! × 2!    2
A probabilidade é a razão entre esses resultados:
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠   1
                                     𝑃=                      =
                                           𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   10
Gabarito: E

14.    (FGV/2022 – CBM/AM) Uma caixa contém 4 bolas numeradas 1, 2, 3 e 4. Selecionam-se, ao acaso,
2 bolas sem reposição. A probabilidade de 3 ser o maior número selecionado é

a) 1/6

b) 1/4

c) 2/3

d) 1/3

e) 1/2

Comentários:

A questão pede a probabilidade de 3 ser o maior número selecionado, sabendo que serão selecionados 2
números sem reposição, dentre 1, 2, 3 e 4.
Os eventos favoráveis correspondem à seleção dos números (1, 3) ou (2, 3):
                                        𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 2
E os eventos possíveis correspondem às maneiras de selecionar 2 elementos, dentre 4, sem que a ordem
importe (combinação):
                                                     4!         4 × 3 × 2! 4 × 3
                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶4,2 =                  =           =      =6
                                                (4 − 2)! × 2!     2! × 2!    2


---

A probabilidade é a razão entre esses resultados:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 2 1
                                    𝑃=                      = =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠  6 3
Gabarito: D

15.   (FGV/2022 – PM/AM) O soldado Garcia vai liderar uma equipe de 3 soldados (ele incluído) para
uma missão. Os outros 2 soldados da equipe serão sorteados aleatoriamente de um grupo de 6 soldados,
sendo que um dos 6 é o soldado Ryan, amigo do soldado Garcia.

A probabilidade de o soldado Ryan ser um dos 2 sorteados é

a) 1/6

b) 1/5

c) 1/4

d) 1/3

e) 1/2

Comentários:

O enunciado informa que 2 solados serão sorteados, dentre 6, e pede a probabilidade de sortear um soldado
específico.
Os eventos possíveis (denominador da fórmula da probabilidade) correspondem à seleção de 2 elementos,
dentre todos os 6, sem que a ordem importe (combinação):

                                                    6!         6 × 5 × 4! 6 × 5
                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶6,2 =                 =           =      = 15
                                               (6 − 2)! × 2!     4! × 2!    2

E os eventos favoráveis correspondem à seleção de qualquer outro soldado, dentre os outros 5, como
segundo soldado selecionado:

                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 5

                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠   5   1
                                   𝑃=                       =   =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   15 3

Gabarito: D


---

16.   (FGV/2022 – PC/AM) Um dado comum, com as faces numeradas de 1 a 6, é lançado 3 vezes. A
probabilidade de a soma dos 3 números obtidos ser igual a 16 é

a) 1/16

b) 1/18

c) 1/36

d) 1/54

e) 1/108

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                    𝑃=                      =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)
No denominador, temos todos os resultados possíveis para os 3 dados. Considerando que há 6 possibilidades
para cada dado e que são eventos concomitantes (vamos lançar o primeiro E o segundo E o terceiro),
devemos multiplicar essas possibilidades (princípio multiplicativo):
                                             𝑛 (𝑈 ) = 6 × 6 × 6
No numerador, temos as possibilidades que somam 16, que correspondem às seguintes faces (ignorando
neste primeiro momento, em qual dado obteremos cada resultado):
   •      4/6/6
   •      5/5/6
Em relação ao primeiro resultado, temos 3 possibilidades (o dado com a face 4 pode ser o primeiro, o
segundo ou o terceiro); e em relação ao segundo resultado, também temos 3 possibilidades (o dado com a
face 6 pode ser o primeiro, o segundo ou o terceiro).
Como são eventos mutuamente excludentes (um OU outro), devemos somar essas possibilidades (princípio
aditivo):
                                            𝑛 (𝐴 ) = 3 + 3 = 6
E a probabilidade é a razão entre esses resultados:
                                        𝑛(𝐴)     6       1    1
                                   𝑃=        =        =     =
                                        𝑛(𝑈) 6 × 6 × 6 6 × 6 36
Gabarito: C


---

17.    (FGV/2022 – SSP/AM) Duas urnas A e B têm, cada uma, 26 bolinhas. Em cada urna, cada bolinha
tem uma letra do alfabeto, sem repetição. Retira-se aleatoriamente uma bolinha de cada urna. A
probabilidade de a bolinha sorteada da urna A ter uma letra que, na ordem alfabética, é anterior à letra
sorteada da urna B é

a) 1/2

b) 25/52

c) 13/50

d) 1/3

e) 1/26

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                    𝑃=                      =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)
Os eventos possíveis correspondem às possibilidades de tirar uma bola, dentre 26, da urna A e uma bola,
dentre 26, da urna B. Como são eventos concomitantes (um E outro), devemos multiplicar essas
possibilidades (princípio multiplicativo):
                                             𝑛(𝑈) = 26 × 26
Os eventos favoráveis correspondem à retirada de uma bola da urna A com uma letra que seja anterior, em
ordem alfabética, à da urna B. Se retirarmos a letra A da urna A, haverá 25 possibilidades de letras da urna
B; se retirarmos a letra B da urna A, haverá 24 possibilidades para a urna B; e assim sucessivamente, até a
possibilidade de retirar a letra Y da urna A, restando 1 possibilidade para a urna B. Como são eventos
mutuamente excludentes (um OU outro), devemos somar essas possibilidades (princípio aditivo):
                                         𝑛(𝐴) = 25 + 24 + ⋯ + 1
Reorganizando os termos, de 1 a 25, temos uma Progressão Aritmética (PA) com termo inicial A1 = 1, termo
final An = 25 e n = 25 termos. A soma dessa PA é:
                                                               𝑛
                                           𝑆𝑛 = (𝐴1 + 𝐴𝑛 ) ×
                                                               2
                                                   25 26 × 25
                               𝑛(𝑈) = (1 + 25) ×     =        = 13 × 25
                                                   2     2
E a probabilidade é a razão:
                                        𝑛(𝐴) 13 × 25   25    25
                                   𝑃=       =        =     =
                                        𝑛(𝑈) 26 × 26 2 × 26 52
Gabarito: B


---

18.    (FGV/2022 – SEMSA Manaus) Numa vila moram 20 pessoas, das quais 5 são crianças. Se sortearmos
5 pessoas diferentes dessa vila, a probabilidade de que três sejam crianças é aproximadamente igual a

a) 3,4%

b) 6,8%

c) 10,2%

d) 13,6%

e) 20,4%

Comentários:

O enunciado informa que 5 pessoas serão selecionadas, dentre 20, das quais 5 são crianças. A probabilidade
de selecionar 3 crianças é a razão entre o número de maneiras de isso ocorrer (casos favoráveis) e o número
total de maneiras de selecionar 5 pessoas quaisquer (total de casos possíveis):
                                                       𝑛 (𝐹 )
                                                  𝑃=
                                                       𝑛 (𝑈 )
Em relação ao total de casos possíveis, o número de maneiras de selecionar 5 pessoas quaisquer, dentre 20,
sabendo que a ordem não importa é a combinação:
                            20!         20 × 19 × 18 × 17 × 16 × 15! 20 × 19 × 18 × 17 × 16
      𝑛(𝑈) = 𝐶20,5 =                  =                             =
                       (20 − 5)! × 5!             15! × 5!                5×4×3×2
                                       𝑛(𝑈) = 𝐶20,5 = 19 × 3 × 17 × 16
Em relação aos casos favoráveis, precisamos selecionar 3 crianças, dentre 5, e 2 adultos, dentre 15. A escolha
das crianças corresponde à combinação de 5 escolher 3:
                                               5!         5 × 4 × 3!
                                 𝐶5,3 =                 =            = 5×2
                                          (5 − 3)! × 3!     2! × 3!
E a escolha dos adultos corresponde à combinação de 15 escolhe 2:
                                            15!         15 × 14 × 13!
                             𝐶15,2 =                  =               = 15 × 7
                                       (15 − 2)! × 2!      13! × 2
Pelo princípio multiplicativo, o número de casos favoráveis é o produto:
                                            𝑛(𝐴) = 5 × 2 × 15 × 7
E a probabilidade desejada é a razão entre esses resultados
                               5 × 2 × 15 × 7   5×5×7       175
                         𝑃=                   =           =     ≅ 6,77%
                              19 × 3 × 17 × 16 19 × 17 × 8 2584
Gabarito: B


---

19.    (FGV/2022 – TJDFT) Um analista realiza três plantões noturnos por semana durante um mês. O
sorteio dos dias da semana é aleatório. Assim, os plantões são selecionados aleatoriamente em quaisquer
dias da semana: domingo, segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado.
Considere sábado e domingo como dias consecutivos. A probabilidade de que o analista não seja escalado
para dias consecutivos é:

a) 3/5

b) 3/7

c) 1/3

d) 1/5

e) 1/7

Comentários:

O enunciado informa que serão selecionados 3 dias, dentre os 7 dias da semana. A probabilidade de os dias
selecionados não serem consecutivos é a razão entre o número de maneiras de selecionar 3 dias não
consecutivos (casos favoráveis) e o número de maneiras de selecionar quaisquer 3 dias, dentre 7 (total de
casos possíveis):
                                                       𝑛 (𝐹 )
                                                 𝑃=
                                                       𝑛 (𝑈 )
Em relação ao total de casos possíveis, o número de maneiras de selecionar quaisquer 3 dias, dentre 7,
sabendo que a ordem da escolha não importa, é a combinação de 7 escolhe 3:
                                      7!         7 × 6 × 5 × 4! 7 × 6 × 5
                𝑛(𝑈) = 𝐶7,3 =                  =               =          = 7 × 5 = 35
                                 (7 − 3)! × 3!      4! × 3!       3×2
E o número de maneiras de escolher 3 dias não consecutivos, considerando que o primeiro e o último dia da
semana são consecutivos, pode ser calculado pelo 2º lema de Kaplansky:
                                                         𝑛
                                           𝑔(𝑛, 𝑝) =        𝐶
                                                       𝑛 − 𝑝 𝑛−𝑝,𝑝
No caso, temos 𝑛 = 7 e 𝑝 = 3:
                                                        7          7
                                  𝑛(𝐹 ) = 𝑔(7,3) =         𝐶7−3,3 = 𝐶4,3
                                                       7−3         4
A combinação de 4 escolhe 3 é:
                                                  4!        4 × 3!
                                    𝐶4,3 =                =        =4
                                             (4 − 3)! × 3! 1! × 3!
Assim, o número de casos favoráveis é:
                                                            7
                                         𝑛(𝐹 ) = 𝑔(7,3) =     ×4= 7
                                                            4


---

Logo, a probabilidade é:
                                                     7   1
                                                𝑃=     =
                                                     35 5
Gabarito: D

20.    (FGV/2021 – IMBEL) Quatro pessoas estão sentadas em volta de uma mesa circular. Cada uma delas
possui uma moeda honesta. Em determinado momento, as quatro pessoas lançam as respectivas moedas.
Quem tirar cara deve se levantar e, quem tirar coroa, deve permanecer sentada.

A probabilidade de que não haja duas pessoas adjacentes levantadas é de

a) 7/16

b) 5/16

c) 3/8

d) 1/4

e) 1/2

Comentários:

A probabilidade de não haver duas pessoas adjacentes que tiraram CARA pode ser calculada pela razão entre
o número de maneiras de essa situação ocorrer (casos favoráveis) e o número total de resultados possíveis
para as quatro pessoas (total de casos possíveis):
                                                      𝑛 (𝐹 )
                                                 𝑃=
                                                      𝑛 (𝑈 )
Em relação ao total de casos possíveis, há 2 possibilidades para cada pessoa (CARA ou COROA). Por serem
concomitantes, aplicamos o princípio multiplicativo:

                                         𝑛(𝑈) = 2 × 2 × 2 × 2 = 16

Já, os casos favoráveis contemplam as seguintes possibilidades:
   •      todos tiram COROA: 1 possibilidade;
   •      uma pessoa tira CARA: 4 possibilidades; e
   •      duas pessoas em lugares opostos (não adjacentes) da mesa tiram CARA: 2 possibilidades.
Por se tratar de situações mutuamente excludentes, o número total de casos favoráveis é dado pela soma
(princípio aditivo):
                                           𝑛 (𝐹 ) = 1 + 4 + 2 = 7


---

Logo, a probabilidade é:

                                                         7
                                                   𝑃=
                                                         16
Gabarito: A

21.    (FGV/2021 – BANESTES) Marcelo joga, simultaneamente, dois dados cúbicos honestos cujas faces
estão numeradas de 1 a 6. A probabilidade de os dois números sorteados serem consecutivos é:

a) 5/18

b) 5/36

c) 1/3

d) 1/9

e) 7/36

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                         𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                   𝑃=                       =
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)
No denominador, temos todos os resultados possíveis para os 2 dados.
Considerando que há 6 possibilidades para cada dado e que são eventos concomitantes (vamos lançar um E
outro), devemos multiplicar essas possibilidades (princípio multiplicativo):
                                            𝑛(𝑈) = 6 × 6 = 36
Os eventos possíveis correspondem às possibilidades de obter números consecutivos:
                                    {(1, 2); (2, 3), (3, 4), (4, 5) e (5, 6)}
Podemos observar que há 5 possibilidades de números consecutivos, mas como não importa em qual
número é sorteado primeiro (se o menor ou o maior), as possibilidades dobram:
                                            𝑛(𝐴) = 2 × 5 = 10
E a probabilidade é a razão:
                                                𝑛(𝐴) 10   5
                                          𝑃=        =   =
                                                𝑛(𝑈) 36 18
Gabarito: A


---

22.     (FGV/2021 – Paulínia) Em uma caixa há 2 bolas brancas e 4 bolas pretas. Retirando, ao acaso 2
bolas, a probabilidade de que elas sejam de cores diferentes é de

a) 2/5

b) 5/8

c) 5/9

d) 7/12

e) 8/15

Comentários:

A probabilidade de selecionar 2 de cores diferentes corresponde ao número de maneiras de selecionar uma
bola branca e uma preta (eventos favoráveis), dividido pelo número de maneiras de selecionar 2 bolas,
dentre 6 (eventos possíveis).
Sabendo que há 2 bolas brancas e 4 bolas pretas, o número de possibilidades de selecionar uma bola branca
E uma preta é o produto de possibilidades (princípio multiplicativo):
                                    𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 2 × 4 = 8
E o número de maneiras de selecionar 2 bolas, dentre 6, é a combinação:
                                                    6!         6 × 5 × 4! 6 × 5
                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶6,2 =                 =           =      = 15
                                               (6 − 2)! × 2!     4! × 2!    2
A probabilidade é a razão entre esses resultados:
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠   8
                                     𝑃=                      =
                                           𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   15
Gabarito: E

23.    (FGV/2021 – PM/PB) Considere o conjunto {−3; −2; −1; 0; 1; 2; 3}. Sorteiam-se, aleatoriamente sem
reposição, dois elementos desse conjunto. A probabilidade de a soma dos dois números sorteados ser
positiva é:

a) 1/7
b) 2/7
c) 3/7
d) 4/7
e) 5/7


---

Comentários:

Para que a soma seja positiva, podemos sortear 2 números dentre o conjunto {0, 1, 2, 3} ou sortear um
número positivo maior do que o número negativo. De todo modo, o total de eventos possíveis corresponde
à seleção de 2 elementos dentre 7, sem que a ordem importe (combinação):
                                               7!         7 × 6 × 5! 7 × 6
                          𝑛(𝑈) = 𝐶7,2 =                 =           =      = 21
                                          (7 − 2)! × 2!     5! × 2!    2
Em relação ao sorteio de 2 números dentre o conjunto {0, 1, 2, 3}, os eventos favoráveis são a combinação
de 2 elementos dentre 4:
                                               4!         4 × 3 × 2! 4 × 3
                          𝑛(𝐴) = 𝐶4,2 =                 =           =      =6
                                          (4 − 2)! × 2!     2! × 2!    2
Logo, a probabilidade de sortear 2 números dentre o conjunto {0, 1, 2, 3} é:
                                                      𝑛(𝐴)   6   2
                                           𝑃 (𝐴 ) =        =   =
                                                      𝑛(𝑈) 21 7
Ademais, podemos sortear (-2, 3), (-1, 3) ou (-1, 2), ou seja, 3 possibilidades, para que a soma continue sendo
positiva. A probabilidade de sortear um desses conjuntos é:
                                                      𝑛(𝐵)   3   1
                                          𝑃 (𝐵 ) =         =   =
                                                      𝑛(𝑈) 21 7
Considerando que são eventos excludentes, a probabilidade de sortear 2 números cuja soma é positiva é:
                                                               2 1 3
                                       𝑃 = 𝑃 (𝐴 ) + 𝑃 (𝐵 ) =    + =
                                                               7 7 7
Gabarito: C

24.     (FGV/2021 – TJ/RO) As amigas Alice e Bianca estão entre as 6 pessoas classificadas em um concurso
e esperam a entrevista com a banca examinadora. Os classificados receberão aleatoriamente números de
1 a 6, que determinarão a ordem em que eles serão entrevistados.

A probabilidade de que Alice e Bianca fiquem vizinhas nessa fila é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6


---

Comentários:

A probabilidade é a razão entre os eventos favoráveis (2 amigas serem vizinhas na fila) e os eventos possíveis
(todas as maneiras de organizar uma fila de 6 pessoas).
                                          𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝑉)
                                     𝑃=                      =
                                           𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)
O número de maneiras de organizar uma fila de 6 pessoas corresponde à permutação de 6 elementos:
                                              𝑛(𝑈) = 𝑃6 = 6!
Para organizar a fila de modo que as amigas sejam vizinhas, vamos inicialmente imaginá-las como elemento
único, o que corresponde à permutação de 5 elementos (as amigas como elemento único e as outras 4
pessoas):
                                                   𝑃5 = 5!
Porém, para que sejam vizinhas, podemos ter Alice em frente à Bianca, ou Bianca em frente à Alice. Logo,
devemos multiplicar esse número de possibilidades por 2:
                                               𝑛(𝑉 ) = 2 × 5!
E a probabilidade é a razão:
                                            2 × 5! 2 × 5! 2 1
                                       𝑃=         =       = =
                                              6!    6 × 5! 6 3
Gabarito: B

25.   (FGV/2019 – Prefeitura de Angra dos Reis/RJ) Uma pesquisa feita com os alunos de uma sala
mostrou que 7 alunos torcem pelo Flamengo, 6 pelo Vasco, 5 pelo Fluminense, 4 pelo Botafogo e 3 não
torcem por time nenhum.

Escolhendo ao acaso um dos alunos dessa turma, a probabilidade de que ele seja torcedor do Vasco é de

a) 12%

b) 18%

c) 20%

d) 24%

e) 30%

Comentários:


---

A probabilidade de escolher um torcedor do Vasco equivale à razão entre o número de torcedores do Vasco
(casos favoráveis) e o número total de alunos (casos totais):
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝑉)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
O número total de alunos é de:
                                      𝑛(𝑈) = 7 + 6 + 5 + 4 + 3 = 25
O número de torcedores do Vasco é n(V) = 6.
Logo, a probabilidade desejada é:
                                                6
                                           𝑃=      = 0,24 = 24%
                                                25
Gabarito: D

26.    (FGV/2019 – MP/RJ) Entre as pessoas A, B, C, D, E, duas delas serão escolhidas por sorteio para
integrarem o conselho diretor de uma empresa. O diretor da empresa conhece essas cinco pessoas e disse:
“Gostaria que A ou B fossem sorteados, mas não gostaria que D fosse sorteado”. A probabilidade de que
o desejo do diretor da empresa se realize é de:

a) 30%
b) 40%
c) 50%
d) 60%
e) 70%

Comentários:

A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 2 pessoas, dentre todas as 5 (sem importância de ordem):
                                              5!         5 × 4 × 3! 5 × 4
                         𝑛(𝑈) = 𝐶5,2 =                 =           =      = 10
                                         (5 − 2)! × 2!     3! × 2!    2
Os casos favoráveis são as maneiras de escolher A ou B e não escolher D. Assim, vamos primeiro eliminar D
dentre as possibilidades, restando apenas 4 possibilidades (A, B, C ou E) para satisfazer o diretor.
Agora, basta encontrarmos o número de maneiras de escolher A ou B dentre essas 4 possibilidades. Para
isso, podemos calcular a diferença entre o total de maneiras de escolher 2 pessoas dentre as 4 possibilidades,
e o número de maneiras de não escolher A ou B (isto é, não escolher A e não escolher B).


---

O número de maneiras de selecionar 2 pessoas, dentre as 4 possibilidades, é:
                                                 4!         4 × 3 × 2! 4 × 3
                                   𝐶4,2 =                 =           =      =6
                                            (4 − 2)! × 2!     2! × 2!    2
Há apenas 1 maneira de não escolher A ou B dentre as 4 possibilidades, qual seja, escolhendo C e E. Assim,
o número de casos favoráveis é dado pela diferença:
                                                  𝑛 (𝐴 ) = 6 − 1 = 5
Logo, a probabilidade desejada é:
                                                        5
                                                   𝑃=      = 50%
                                                        10
Gabarito: C

27.   (FGV/2018 – SASDH/RJ) Um dado é lançado duas vezes consecutivas. Considere os seguintes
eventos relativos a esses lançamentos:

    •   A: a soma dos números obtidos é 8;
    •   B: a soma dos números obtidos é 10;
    •   C: a soma dos números obtidos é 12.

Colocando-se esses três eventos em ordem crescente da probabilidade de ocorrência, obtém-se

a) A, B, C;

b) A, C, B;

c) B, C, A;

d) C, A, B;

e) C, B, A.

Comentários:

Vejamos os possíveis resultados dos 2 lançamentos para cada evento:
A = {(2,6), (3,5), (4,4), (5,3), (6,2)}
B = {(4,6), (5,5), (6,4)}
C = {(6,6)}
Considerando que todas essas duplas de resultados são equiprováveis, então as desses três eventos
obedecem a seguinte ordem:
                                                   P(C) < P(B) < P(A)


---

Assim, a sequência de eventos, em ordem crescente de probabilidade é C, B, A.
Gabarito: E

28.    (FGV/2018 – ALE/RO) Em um grupo de 10 deputados, 6 são do Partido A e 4 são do Partido B. Serão
sorteados 2 desses 10 deputados, aleatoriamente.

A probabilidade de os 2 deputados sorteados serem do Partido B é

     1
a) 5

     2
b) 5

     2
c) 3

     2
d) 9

     2
e)
     15

Comentários:

A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐵)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 2 deputados, dentre todos os 10 (sem importância de ordem):
                                            10!         10 × 9 × 8! 10 × 9
                      𝑛(𝑈) = 𝐶10,2 =                  =            =       = 45
                                       (10 − 2)! × 2!     8! × 2!     2
Os casos favoráveis são as maneiras de escolher 2 deputados, dentre os 4 do Partido B (também sem
importância de ordem):
                                              4!         4 × 3 × 2! 4 × 3
                         𝑛(𝐵) = 𝐶4,2 =                 =           =      =6
                                         (4 − 2)! × 2!     2! × 2!    2
Logo, a probabilidade desejada é:
                                                   6   2
                                              𝑃=     =
                                                   45 15
Gabarito: E


---

29.     (FGV/2018 – SEPLAG/RJ) Considere todas as senhas formadas por três vogais maiúsculas. São
exemplos dessas senhas: EEE, OIA e UAU. Dentre todas as senhas desse tipo, escolhendo ao acaso uma
delas, a probabilidade de que ela tenha duas letras iguais e uma diferente é de

a) 36%
b) 40%
c) 44%
d) 48%
e) 52%

Comentários:

A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                          𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                     𝑃=                      =
                                            𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são todas as maneiras de formar senhas formadas por 3 vogais maiúsculas, em que se permite
repetição. Ou seja, há 5 opções para cada uma das 3 posições:
                                                5     5     5


Pelo princípio multiplicativo, o número de maneiras de formar a senha é de:
                                            n(U) = 5 x 5 x 5 = 125
Os casos favoráveis correspondem às senhas com 2 vogais iguais e 1 diferente. Supondo que a segunda vogal
da senha seja igual à primeira e a terceira vogal seja diferente, o número de possibilidades para essa condição
é:
                                                5     1     4
Pelo princípio multiplicativo, o número de possibilidades para essa condição é:
                                                5 x 1 x 4 = 20
Porém, não é necessário que as letras repetidas sejam a primeira e a segunda. Então, precisamos multiplicar
esse resultado pelo número de maneiras de organizar essa sequência. Considerando que a letra diferente
pode ficar na primeira, na segunda ou na terceira posição, há 3 formas distintas de organizar a sequência da
repetição, logo:
                                              n(A) = 3 x 20 = 60
Logo, a probabilidade buscada é:
                                                60
                                          𝑃=       = 0,48 = 48%
                                               125
Gabarito: D


---

30.    (FGV/2018 – ALE/RO) Em uma caixa há 4 cartões amarelos e 6 cartões vermelhos. Foram retirados,
aleatoriamente, 2 cartões da caixa. A probabilidade de os dois cartões retirados serem vermelhos é de

     1
a) 2

     1
b)
     3

     1
c) 4

     1
d) 5

     1
e) 6

Comentários:

A probabilidade é a razão entre os casos favoráveis e os casos totais:
                                           𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                      𝑃=                   =
                                             𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
Os casos totais correspondem a todas as maneiras de selecionar 2 cartões, dentre 10 cartões no total (sem
importância de ordem):
                                             10!         10 × 9 × 8! 10 × 9
                       𝑛(𝑈) = 𝐶10,2 =                  =            =       = 45
                                        (10 − 2)! × 2!     8! × 2!     2
Os casos favoráveis correspondem às maneiras de selecionar 2 cartões, dentre os 6 cartões vermelhos (sem
importância de ordem):
                                              6!         6 × 5 × 4! 6 × 5
                         𝑛(𝐴) = 𝐶6,2 =                 =           =      = 15
                                         (6 − 2)! × 2!     4! × 2!    2
Assim, a probabilidade é, então:
                                                     15 1
                                                𝑃=     =
                                                     45 3
Gabarito: B

31.    (FGV/2018 – ALE/RO) Uma urna contém 10 bolas numeradas de 1 a 10. Três dessas bolas são
sorteados aleatoriamente. A probabilidade de o produto dos três números sorteados ser ímpar é

     1
a) 12

     1
b)
     10


---

     1
c)
     8

     1
d) 4

     1
e) 2

Comentários:

Para que o produto dos números seja ímpar, não pode haver números pares. Assim, a probabilidade de
sortear 3 bolas ímpares é dada pela razão entre a quantidade de maneiras de selecionar 3 bolas ímpares e o
total de maneiras de selecionar 3 bolas quaisquer.
                                              𝑛(3 í𝑚𝑝𝑎𝑟𝑒𝑠) 𝑛(𝐴)
                                         𝑃=               =
                                                𝑛(𝑡𝑜𝑡𝑎𝑙)    𝑛(𝑈)
O número de maneiras de selecionar 3 bolas, dentre 10 (sem importância de ordem) é:
                                10!         10 × 9 × 8 × 7! 10 × 9 × 8
          𝑛(𝑈) = 𝐶10,3 =                  =                =           = 10 × 3 × 4 = 120
                           (10 − 3)! × 3!       7! × 3!       3×2
O número de maneiras de selecionar 3 bolas, dentre as 5 bolas ímpares (sem importância de ordem) é:
                                              5!         5 × 4 × 3! 5 × 4
                         𝑛(𝐴) = 𝐶5,3 =                 =           =      = 10
                                         (5 − 3)! × 2!     3! × 2!    2
Assim, a probabilidade é, então:
                                                     10   1
                                               𝑃=       =
                                                    120 12
Gabarito: B

32.    (FGV/2017 – SEPOG/RO) Para uma premiação, dois funcionários de uma empresa serão sorteados
aleatoriamente entre quatro candidatos: dois do departamento A e dois do departamento B.

A probabilidade de os dois funcionários sorteados pertencerem ao mesmo departamento é:

     1
a) 2

     1
b) 3

     1
c) 4

     1
d) 6

     3
e)
     4


---

Comentários:

A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                          𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                    𝑃=                       =
                                            𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 2 pessoas, dentre todas as 4 (sem importância de ordem):
                                               4!         4 × 3 × 2! 4 × 3
                          𝑛(𝑈) = 𝐶4,2 =                 =           =      =6
                                          (4 − 2)! × 2!     2! × 2!    2
Os casos favoráveis são as maneiras de escolher 2 do departamento A OU 2 do departamento B. Logo, há 2
possibilidades.
                                                  n(A) = 2.
Assim, a probabilidade de escolher 2 pessoas do mesmo departamento é:
                                                          2 1
                                               𝑃 (𝑋 ) =    =
                                                          6 3
Gabarito: B

33.    (FGV/2017 – SEFIN/RO) Em cada uma de duas urnas há três bolas: uma vermelha, uma rosa e uma
azul. Sorteiam-se duas bolas, aleatoriamente, uma de cada urna. A probabilidade de as bolas sorteadas
terem cores diferentes é de

  8
a) 9

   7
b) 9

  2
c) 3

   1
d) 2

   1
e) 3

Comentários:

Para que as bolas tenham cores diferentes, podemos selecionar qualquer bola da primeira urna. Na segunda
urna, há 3 bolas, sendo que 1 apresenta a mesma cor da bola selecionada e 2 apresentam cores distintas.
Logo, os casos favoráveis totalizam n(A) = 2 e o número de casos totais é n(U) = 3. Assim, a probabilidade é:
                                       𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴) 2
                                  𝑃=                      =     =
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈) 3
Gabarito: C


---

34.     (FGV/2017 – MPE/BA) O Supremo Tribunal Federal é composto por 11 Ministros, sendo um
Presidente. O histórico de decisões indica que, em questões de natureza política, 3 deles votam sempre
da mesma forma, enquanto os outros de maneira contrária. Suponha que uma Turma de 5 juízes será
selecionada ao acaso para a análise de uma questão do tipo já referido. A probabilidade de que o resultado
seja favorável à tese dos minoritários é igual a:

    5     8 2        3 3
a) 𝐶11 . (11) . (11)
    3      2
b) (11) . (9)

    8 2        3 3
c) (11) . (11)
          8       7
d) 1 − (11) . (10)

          2 2
e) 1 − (8)

Comentários:

Para que a decisão dos 5 Ministros selecionados seja favorável à tese dos 3 Ministros minoritários, então é
necessário que os 3 Ministros sejam selecionados. A probabilidade é, então, a razão entre o número de
maneiras de compor a Turma com os 3 Ministros (casos favoráveis) e o número total de maneiras de compor
a Turma (casos totais).
O número total de maneiras de selecionar 5 Ministros, dentre 11 (sem importância de ordem), é:
                                                                  11!
                                            𝑛(𝑈) = 𝐶11,5 =
                                                             (11 − 5)! × 5!
                           11 × 10 × 9 × 8 × 7 × 6! 11 × 10 × 9 × 8 × 7
                𝑛(𝑈) =                             =                    = 11 × 3 × 2 × 7 = 462
                                   6! × 5!           5×4×3×2×1
O número de maneiras de formar a Turma com os 3 Ministros minoritários corresponde ao número de
maneiras de escolher os outros 2 integrantes da Turma, dentre os 8 Ministros restantes (também sem
importância de ordem):
                                                8!         8 × 7 × 6! 8 × 7
                           𝑛(𝐴) = 𝐶8,2 =                 =           =      = 4 × 7 = 28
                                           (8 − 2)! × 2!     6! × 2!    2
Assim, a probabilidade desejada é dada por:
                                                           28   2
                                                     𝑃=       =
                                                          462 33
Note que a alternativa B é a alternativa correta, pois simplificando essa alternativa, temos:
                                                  3    2      2     2
                                              (     ).( ) =       =
                                                  11   9    11 × 3 33
Gabarito: B


---

35.     (FGV/2016 – SME – São Paulo/SP) Um jogo de dados tem por objetivo obter as somas de 1 a 9,
sendo que o jogador pode escolher, em cada jogada, se vai lançar um dado apenas ou os dois dados. Os
participantes vão se revezando no lançamento de dados e, quem conseguir todos aqueles totais em
primeiro lugar, e em qualquer ordem, será o vencedor. Sobre as chances de conseguir determinadas
somas, é correto afirmar que

a) é mais fácil obter o total 6 jogando dois dados do que 3 com apenas um dado

b) é mais fácil obter o total 5 com dois do que com apenas um dado

c) a chance de se obter a soma 8 com dois dados é 5/21

d) as chances de obter 4 com 1 dado é maior do que de se obter 7 com dois dados

e) as chances de se obter 6 é maior se lançarmos apenas um dado.

Comentários:

As chances de se obter determinado resultado com um dado são de:
                                        𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴) 1
                                  𝑃=                       =     =
                                          𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈) 6
As chances de se obter determinadas faces no lançamento de dois dados, independente da sua soma e
distinguindo os dados (ou seja, considerando que obter 1 no primeiro dado e 6 no segundo é diferente de 6
no primeiro dado e 1 no segundo), são:
                                  𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)    1    1
                             𝑃=                      =     =     =
                                    𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈) 6 × 6 36
Em relação à alternativa A, as possibilidades de se obter 6 com dois dados são:
                                        {(1,5), (2,4), (3,3), (4,2), (5,1)}
Logo, há 5 possibilidades, cuja probabilidade é:
                                                            5
                                                      𝑃=
                                                            36
                                    1    𝟔
Essa probabilidade é menor do que = , que é a probabilidade de obter o resultado 3 com um dado. Logo,
                                      6   36
a alternativa A está incorreta e a alternativa E está correta.
Em relação à alternativa B, as possibilidades de se obter 5 com dois dados são:
                                             {(1,4), (2,3), (3,2), (4,1)}
Logo, há 4 possibilidades, cuja probabilidade é:
                                                            4
                                                      𝑃=
                                                            36


---

                                    1       𝟔
Essa probabilidade é menor do que 6 = 36, que é a probabilidade de obter o resultado 5 com um dado. Logo,
a alternativa B está incorreta.
Em relação à alternativa C, as possibilidades de se obter 8 com dois dados são:
                                        {(2,6), (3,5), (4,4), (5,3), (6,2)}
Logo, há 5 possibilidades, cuja probabilidade é:
                                                           5
                                                     𝑃=
                                                           36
Portanto, a alternativa C está incorreta.
Em relação à alternativa D, as possibilidades de se obter 7 com dois dados são:
                                     {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}
Logo, há 6 possibilidades, cuja probabilidade é:
                                                        6   1
                                                   𝑃=     =
                                                        36 6
Essa probabilidade é igual à probabilidade de obter o resultado 4 com um dado. Logo, a alternativa D está
incorreta.
Gabarito: E

36.    (FGV/2016 – MPE/RJ) A figura abaixo mostra uma mesa retangular com 5 cadeiras representadas
pelos quadradinhos pretos.

Um casal com seus três filhos ocuparão esses cinco lugares e o lugar de cada um será decidido por sorteio.
A probabilidade de que o casal fique junto, ou seja, um ao lado do outro em uma das laterais da mesa é:.

a) 10%

b) 20%

c) 30%

d) 40%

e) 50%


---

Comentários

A probabilidade de o casal ficar junto é dada pela razão entre os casos favoráveis e os casos totais:

                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                      𝑃=                      =
                                             𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)

Os casos totais correspondem a todas as maneiras de sentar as 5 pessoas à mesa. Logo, temos uma
permutação de 5 elementos:

                                𝑛(𝑈) = 𝑃5 = 5! = 5 × 4 × 3 × 2 × 1 = 120

Os casos favoráveis correspondem às maneiras em que os pais (pai e mãe) ficam juntos, de um lado ou de
outro da mesa, conforme ilustrado a seguir:


        P       M                     M      P

                                                                    P      M                   M        P

Logo, há 4 possibilidades para os pais sentarem-se juntos.
Para cada um desses 4 cenários, os 3 filhos poderão se alternar em relação às 3 posições restantes. Logo,
devemos multiplicar as 4 possibilidades pela permutação de 3 elementos:

                              𝑛(𝐴) = 4 × 𝑃3 = 4 × 3! = 4 × 3 × 2 × 1 = 24

Assim, a probabilidade buscada é:

                                                      24  1
                                             𝑃=          = = 20%
                                                     120 5

Gabarito: B

37.    (FGV/2015 – Prefeitura de Niterói/RJ) O quadro a seguir mostra a distribuição das idades dos
funcionários de certa repartição pública:

                                    Faixa de Idade      Número de funcionários
                                        (anos)
                                     20 ou menos                  2
                                      De 21 a 30                  8
                                      De 31 a 40                 12
                                      De 41 a 50                 14
                                      Mais de 50                  4


---

Escolhendo ao acaso um desses funcionários, a probabilidade de que ele tenha mais de 40 anos é:

a) 30%

b) 35%

c) 40%

d) 45%

e) 55%

Comentários:

A probabilidade de escolher um funcionário com mais de 40 anos equivale à razão entre o número de
funcionários com mais de 40 anos (casos favoráveis) e o número total de funcionários (casos totais):
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
O número total de funcionários é de:
                                    𝑛(𝑈) = 2 + 8 + 12 + 14 + 4 = 40
O número de funcionários com maios de 40 anos é de:
                                          𝑛(𝐴) = 14 + 4 = 18
Logo, a probabilidade desejada é:
                                               18
                                          𝑃=      = 0,45 = 45%
                                               40
Gabarito: D


---

                        QUESTÕES COMENTADAS – FGV

Combinações de Eventos

1.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo

a) Prob(A ∩ B) = Prob(A)Prob(B)

b) Prob(A ∪ B) = Prob(A)Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A ∪ B) = 0

e) Prob(A ∪ B) = 1

Comentários:

Sendo A e B eventos mutuamente exclusivos, então a probabilidade da interseção é igual a zero (letra C).

Acrescente-se que a probabilidade da união é igual a 1 (letra E), para eventos exaustivos.

Gabarito: C

2.      (FGV/2022 – SSP/AM) Seis cartas estão em uma caixa; em cada uma delas está escrita uma das seis
letras: A, B, C, D, E, F, e cada letra só aparece uma vez.

Retirando da caixa, simultaneamente e ao acaso, duas cartas, a probabilidade de que as cartas A ou C
sejam sorteadas é

a) 1/2

b) 2/5

c) 3/5

d) 7/15

e) 8/15

Comentários:


---

O enunciado informa que 2 letras serão sorteadas dentre as 6 letras A, B, C, D, E e F. Os eventos possíveis
(denominador da fórmula da probabilidade) correspondem à seleção de 2 elementos, dentre todos os 6, sem
que a ordem importe (combinação):
                                              6!         6 × 5 × 4! 6 × 5
                         𝑛(𝑈) = 𝐶6,2 =                 =           =      = 15
                                         (6 − 2)! × 2!     4! × 2!    2
Em relação à probabilidade de sortear a letra A, os eventos favoráveis correspondem à seleção de qualquer
uma das outras 5 letras como segunda letra sorteada:
                                                           5
                                                𝑃 (𝐴 ) =
                                                           15
Similarmente, em relação à probabilidade de sortear a letra C, os eventos favoráveis correspondem à seleção
de qualquer uma das outras 5 letras como segunda letra sorteada:
                                                           5
                                                𝑃 (𝐶 ) =
                                                           15
Em relação à probabilidade da interseção, os eventos favoráveis correspondem à única possibilidade de
selecionar as letras A e C:
                                                             1
                                              𝑃 (𝐴 ∩ 𝐶 ) =
                                                             15
Logo, a probabilidade de selecionar A ou C (união) é dada por:
                                                                  5   5   1   9   3
                    𝑃 (𝐴 ∪ 𝐶 ) = 𝑃 (𝐴 ) + 𝑃 (𝐶 ) − 𝑃 (𝐴 ∩ 𝐶 ) =     +   −   =   =
                                                                  15 15 15 15 5
Gabarito: C

3.     (FGV/2022 – SEMSA Manaus) Suponha que um professor decida escolher aleatoriamente um
estudante da sua sala de aula para responder a uma pergunta. Considere dois atributos: gênero e cor do
aluno. O conjunto gênero se divide entre mulher e homem. O conjunto cor se divide entre negros e
brancos.

Sabe-se que a proporção de mulheres na sala é de 40%, a proporção de negros é de 60% e a proporção de
mulheres negras é de 24%. Logo, a probabilidade de o aluno escolhido não ser homem branco é igual a

a) 80%

b) 76%

c) 54%

d) 46%

e) 24%

Comentários:


---

Como a questão menciona 2 atributos (gênero e cor), vamos utilizar uma tabela para preencher os dados:

                                                      Cor
                                                                   Totais
                                                 Negra Branca
                                        Mulher
                              Gênero
                                       Homem
                                    Totais                          100%

O enunciado informa que 𝑃 (𝑀) = 40% dos alunos são mulheres, logo a proporção de homens é
complementar:

                                     𝑃(𝐻 ) = 100% − 40% = 60%

Ademais, 𝑃(𝑁) = 60% dos alunos são negros, logo a proporção de brancos é complementar:

                                     𝑃 (𝐵) = 100% − 60% = 40%

                                                      Cor
                                                                   Totais
                                                 Negra Branca
                                        Mulher                       40%
                              Gênero
                                       Homem                         60%
                                    Totais        60%      40%      100%

Além disso, sabemos que 𝑃 (𝑀 ∩ 𝑁) = 24% dos alunos são mulheres negras (interseção). Os demais campos
da tabela podem ser preenchidos, verificando-se os totais das linhas/colunas:

                                                   Cor
                                                                   Totais
                                              Negra Branca
                                       Mulher 24%      16%           40%
                              Gênero
                                      Homem 36%        24%           60%
                                   Totais      60%     40%          100%

A probabilidade de um aluno ser homem e branco é 𝑃(𝐻 ∩ 𝐵) = 24%. Logo, a probabilidade de um aluno
não ser homem branco é complementar:

                                      ̅̅̅̅̅̅̅̅
                                   𝑃 (𝐻  ∩ 𝐵) = 100% − 24% = 76%

Gabarito: B

4.     (FGV/2022 – TRT/PB) Se A, B e C são eventos tais que P[A] = 0,4, P[B] = 0,5 e P[C] = 0,6, então os
valores mínimo e máximo de P[A ∩ B ∩ C] valem, respectivamente.

a) 0 e 0,4.

b) 0,1 e 0,3.


---

c) 0,3 e 0,4.

d) 0,2 e 0,3.

e) 0,1 e 0,4.

Comentários:

A interseção entre os 3 eventos é máxima quando os eventos menores estiverem contidos nos eventos
maiores.

                                             C
                                                 B
                                                     A

Nessa situação, a interseção será igual ao evento menor:
                                     𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 )𝑚𝑎𝑥 = 𝑃(𝐴) = 0,4
Em relação à interseção mínima entre os 3 eventos, devemos verificar se ela pode ser nula, ou seja, se pelo
menos 2 eventos podem ser disjuntos (sem interseção), de modo que a soma das suas probabilidades (que
corresponde à probabilidade da união) não ultrapasse P(U) = 1.
Nessa questão, os eventos A e B podem ser disjuntos, pois a soma das probabilidades é 0,4 + 0,5 = 0,9 (que
é inferior a 1):

                                     B                              A

                                                            C
Alternativamente, A e C podem ser disjuntos, pois a soma das probabilidades é 0,4 + 0,6 = 1. Nessa situação,
o evento B deve estar contido no evento C, para que a probabilidade da união dos 3 eventos não ultrapasse
P(U) = 1:

                                 C       B                          A

Em ambas as situações, a interseção entre os 3 eventos é nula, sendo essa a interseção mínima:
                                             𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 )𝑚𝑖𝑛 = 0
Gabarito: A


---

5.    (FGV/2021 – CREAS) Gabi e Luana têm, cada uma delas, 3 bolas coloridas: uma branca, uma azul e
uma vermelha. Há 3 caixas e Gabi e Luana colocam, cada uma delas de forma aleatória e independente,
uma bola em cada caixa. A probabilidade de pelo menos uma caixa ter ficado com 2 bolas da mesma cor é

a) 1/2

b) 1/3

c) 1/4

d) 2/3

e) 3/4

Comentários:

A probabilidade de pelo menos uma caixa ficar com bolas da mesma cor pode ser calculada pela
probabilidade complementar, qual seja a de nenhuma caixa ficar com bolas da mesma cor.
                              𝑃 (𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚𝑎) = 1 − 𝑃(𝑛𝑒𝑛ℎ𝑢𝑚𝑎)
Para calcular a probabilidade de nenhuma caixa ficar com bolas da mesma cor, vamos imaginar que Gabi
tenha colocado primeiro as suas três bolas nas três caixas.
A probabilidade de Luana colocar as suas três bolas, de modo que nenhuma caixa fique com bolas da mesma
cor pode ser calculada pela razão entre o número de maneiras de alocar as bolas dessa forma (casos
favoráveis) e o número total de maneiras de alocar as 3 bolas (total de casos possíveis):
                                                           𝑛(𝐹)
                                        𝑃(𝑛𝑒𝑛ℎ𝑢𝑚𝑎) =
                                                           𝑛(𝑈)
O número total de maneiras de alocar 3 bolas em 3 caixas (total de casos possíveis) corresponde à
permutação de 3 elementos:
                                   𝑛(𝑈) = 𝑃3 = 3! = 3 × 2 × 1 = 6
Em relação aos casos favoráveis, vamos supor que Gabi tenha alocado as suas bolas na ordem branca, azul
e vermelha (BAV). Assim, há 2 maneiras de Luana alocar as suas bolas, de modo que caixa tenha bolas da
mesma cor, quais sejam AVB e VBA. Independentemente da ordem que Gabi escolheu, haverá 2 maneiras
para Luana alocar as suas bolas (isto é, uma permutação caótica ou desarranjo de 3 elementos):
                                              𝑛 (𝐹 ) = 2
Assim, a probabilidade de nenhuma caixa ter bolas da mesma cor é:
                                                           2 1
                                        𝑃(𝑛𝑒𝑛ℎ𝑢𝑚𝑎) =        =
                                                           6 3
E a probabilidade de pelo menos uma caixa ter bolas da mesma cor é complementar:
                                                                        1 2
                        𝑃 (𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚𝑎) = 1 − 𝑃(𝑛𝑒𝑛ℎ𝑢𝑚𝑎) = 1 −        =
                                                                        3 3
Gabarito: D


---

6.     (FGV/2017 – Prefeitura de Salvador/BA) Entre as pessoas A, B, C, D e E, será sorteada uma comissão
de três membros. A probabilidade de que A e B estejam na comissão ou de que C esteja na comissão, é de:

a) 60%

b) 64%

c) 72%

d) 75%

e) 80%

Comentários:

A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                         𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                    𝑃=                      =
                                           𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 3 pessoas, dentre todas as 5 (sem importância de ordem):
                                              5!         5 × 4 × 3! 5 × 4
                         𝑛(𝑈) = 𝐶5,3 =                 =           =      = 10
                                         (5 − 3)! × 3!     2! × 3!    2
Os casos favoráveis são as maneiras de escolher A e B ou C.
Para isso, podemos calcular a probabilidade complementar, encontrando o número de maneiras de não
escolher nem A e B, nem C. Assim, das 4 pessoas (A, B, D e E), é preciso escolher 3 pessoas, sem que A e B
estejam juntos.
Nessas condições, há somente 2 opções: A, D e E; B, D e E. Logo, a probabilidade de não atender às condições
indicadas é:
                                                      2
                                            𝑃(𝑋̅) =      = 20%
                                                      10
A probabilidade de atender às condições indicadas no enunciado é complementar:
                                𝑃(𝑋) = 1 − 𝑃 (𝑋̅) = 100% − 20% = 80%
Gabarito: E

7.    (FGV/2017 – SEFIN-RO) Dois eventos A e B têm probabilidades iguais a 70% e 80%. Os valores
mínimo e máximo da probabilidade da interseção de A e B são

a) 30% e 50%

b) 20% e 70%

c) 20% e 50%


---

d) 50% e 70%

e) 0% e 70%

Comentários:

Considerando que dois eventos quaisquer possuem probabilidades P(A) = 70% e P(B) = 80%, a interseção
máxima corresponde à situação em que o evento A (com menor probabilidade) está totalmente contido no
evento B. Nesse caso, temos:
                                    𝑃(𝐴 ∩ 𝐵)𝑀á𝑥𝑖𝑚𝑎 = 𝑃(𝐴) = 70%
Para calcular a probabilidade mínima, precisamos considerar a fórmula da união dos eventos:
                                 𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
Quando a probabilidade da interseção for a menor possível, a probabilidade da união será a maior possível.
Como a probabilidade máxima é de 100%, então:
                                100% = 70% + 80% − 𝑃(𝐴 ∩ 𝐵)𝑀í𝑛𝑖𝑚𝑎
                               𝑃(𝐴 ∩ 𝐵)𝑀í𝑛𝑖𝑚𝑎 = 150% − 100% = 50%
Gabarito: D


---

                        QUESTÕES COMENTADAS – FGV

Axiomas de Probabilidade

1.     (FGV/2017 – SEFIN-RO) Júlia e Laura são irmãs e fazem parte de um grupo de 5 meninas. Desse
grupo, três serão sorteadas para um passeio.

A probabilidade de que uma das irmãs seja sorteada e a outra não seja sorteada é de.

a) 80%

b) 70%

c) 50%

d) 40%

e) 60%

Comentários:

A probabilidade de um evento é a razão entre o número de casos favoráveis desse evento e o número de
casos totais:
                                           𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                      𝑃=                   =
                                             𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)
Os casos totais correspondem a todas as maneiras de se selecionar 3 pessoas, dentre 5, sem que a ordem
importe (combinação):
                                              5!         5 × 4 × 3! 5 × 4
                         𝑛(𝑈) = 𝐶5,3 =                 =           =      = 10
                                         (5 − 3)! × 2!     3! × 2!    2
Os casos favoráveis correspondem às maneiras de selecionar Júlia e não selecionar Laura, OU de selecionar
Laura e não selecionar Júlia.
Supondo que Júlia é selecionada, restam 3 meninas (sem ser a Laura) que podem ser escolhidas e 2 vagas
para o passeio. Logo, o número de possibilidades de selecionar Júlia é:
                                                      3!        3 × 2!
                                 𝑛(𝐽) = 𝐶3,2 =                =        =3
                                                 (3 − 2)! × 2! 1! × 2!
Logo, a probabilidade Julia ser selecionada (e Laura não) é a razão entre esses resultados:
                                                           3
                                                  𝑃(𝐽) =
                                                           10
A situação de Laura é a mesma, então a probabilidade de Laura ser selecionada (e Júlia não) é:


---

                                                               3
                                                   𝑃(𝐿) =
                                                               10
Considerando que são eventos mutuamente excludentes, a probabilidade da união corresponde à soma das
probabilidades (união de eventos mutuamente excludentes):
                                                               3   3   6
                              𝑃 (𝐽 ∪ 𝐿 ) = 𝑃 (𝐽 ) + 𝑃 (𝐿 ) =     +   =   = 60%
                                                               10 10 10
Gabarito: E

2.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo:

a) Prob(A ∩ B) = Prob(A).Prob(B)

b) Prob(A U B) = Prob(A).Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A U B) = 0

e) Prob(A U B) = 1

Comentários:

Eventos mutuamente exclusivos (ou excludentes) são aqueles que não apresentam interseção (conjunto
vazio). Logo, a probabilidade da interseção é igual a zero:
                        Prob(A ∩ B) = 0, se A e B são eventos mutuamente exclusivos
Logo, a alternativa A está incorreta e a alternativa C está correta. Em relação às demais alternativas, a
probabilidade da união é dada pela soma das probabilidades:

                                        Prob(A U B) = Prob(A) + Prob(B)

Logo, as alternativas B, D e E estão incorretas.
Gabarito: C


---

                        QUESTÕES COMENTADAS – FGV

Probabilidade Condicional

1.     (FGV/2023 – RFB) Ana vai passar o fim de semana em sua casa de praia. A previsão do tempo diz
que a probabilidade de chuva no sábado é de 30%, e a probabilidade de chuva no domingo é de 40%.

Nesse caso, a probabilidade de que Ana consiga ir à praia no fim de semana sem pegar chuva é de

a) 46%

b) 55%

c) 63%

d) 88%

e) 92%

Comentários:

Para que Ana consiga ir à praia no fim de semana, ela pode ir sábado OU domingo, ou seja, é necessário que
não chova sábado OU não chova domingo, que corresponde ao complemento da interseção de chover
sábado e domingo:
                              𝑃 (̅̅̅
                                 𝐶𝑆 ∪ ̅𝐶̅̅𝐷̅) = 𝑃(𝐶
                                                  ̅̅̅̅̅̅̅̅̅̅
                                                    𝑆 ∩ 𝐶𝐷 ) = 1 − 𝑃(𝐶𝑆 ∩ 𝐶𝐷 )

Por serem eventos independentes, a probabilidade da interseção é o produto das probabilidades. Sendo a
probabilidade de chover sábado 𝑃 (𝐶𝑆 ) = 30% e a probabilidade de chover domingo 𝑃(𝐶𝐷 ) = 40%, então
a probabilidade da interseção é:
                            𝑃 (𝐶𝑆 ∩ 𝐶𝐷 ) = 𝑃(𝐶𝑆 ) × 𝑃(𝐶𝐷 ) = 0,3 × 0,4 = 0,12
E a probabilidade desejada é complementar:
                                 𝑃(̅̅̅  ̅̅̅𝐷̅) = 1 − 0,12 = 0,88 = 88%
                                   𝐶𝑆 ∪ 𝐶
Gabarito: D

2.     (FGV/2023 – BANESTES) A figura a seguir ilustra duas urnas onde estão depositadas bolas brancas
e pretas.


---

Um dado comum e honesto será lançado. Se o resultado desse lançamento for 1, 2, 3 ou 4, uma bola será
sorteada, ao acaso, da Urna 1. Se o resultado do lançamento for 5 ou 6, uma bola será sorteada, ao acaso,
da Urna 2. Nessas condições, após o lançamento aleatório do dado e a subsequente extração ao acaso da
bola de uma das urnas, a probabilidade de que essa bola seja preta

a) é maior que 55%

b) está entre 45% e 55%

c) está entre 35% e 45%

d) está entre 25% e 35%

e) é menor que 25%

Comentários:

O enunciado informa que será sorteada uma bola da urna 1, caso o resultado do dado seja 1, 2, 3 ou 4.
Sabendo que há 6 faces no dado, a probabilidade de isso ocorrer é:
                                                          4 2
                                               𝑃 (𝑈1) =    =
                                                          6 3
Na urna 1, há 5 bolas no total, das quais 3 são pretas. Considerando que será extraída uma bola da urna 1, a
probabilidade de a bola preta ser preta é:
                                                             3
                                               𝑃(𝑃𝑟|𝑈1) =
                                                             5
E a probabilidade de sortear a urna 1 E extrair dela uma bola preta é o produto (interseção):
                                                     2 3 2
                                     𝑃(𝑃𝑟 ∩ 𝑈1) =     × = = 40%
                                                     3 5 5
Já, a urna 2 será escolhida, caso o resultado do dado seja 5 ou 6, cuja probabilidade é:
                                                          2 1
                                               𝑃 (𝑈2) =    =
                                                          6 3
Na urna 2, há 6 bolas no total, sendo 1 preta. Considerando que será extraída uma bola da urna 2, a
probabilidade de a bola preta ser preta é:
                                                             1
                                               𝑃(𝑃𝑟|𝑈2) =
                                                             6
E a probabilidade de sortear a urna 2 E extrair dela uma bola preta é o produto (interseção):
                                                    1 1  1
                                    𝑃 (𝑃𝑟 ∩ 𝑈2) =    × =   ≅ 5,56%
                                                    3 6 18
A probabilidade total de extrair uma bola preta é a soma dessas probabilidades (união de eventos
mutuamente excludentes):
                                    𝑃 (𝑃𝑟) = 40% + 5,56% = 45,56%


---

Que está entre 45% e 55%.
Gabarito: B

3.     (FGV/2023 – BANESTES) Uma seguradora trabalha com 2 tipos de seguros de saúde: um básico e
outro não básico (porque inclui alguns itens adicionais). Ontem, ela vendeu dois seguros.

Admitindo que são iguais as probabilidades de venda de seguros básicos e não básicos, a probabilidade
condicional de que um desses seguros seja básico, dado que o outro era não básico, é igual a

a) 1/4.

b) 1/3.

c) 1/2.

d) 2/3.

e) 3/4.

Comentários:

O enunciado informa que foram vendidos dois seguros e pede a probabilidade condicional de que um dos
seguros vendidos tenha sido o plano básico, dado que o outro não era básico, que pode ser calculada como:
                                                          𝑃(𝐵 ∩ 𝑁)
                                            𝑃 (𝐵 |𝑁 ) =
                                                            𝑃(𝑁)
Sabendo que a probabilidade de a seguradora vender o seguro básico é igual à probabilidade de ela vender
o seguro não básico (50% cada), então:
                                                                       1   1    1
    •     a probabilidade de ela vender 2 seguros básicos é 𝑃(𝐵 ∩ 𝐵) = 2 × 2 = 4;
                                                                            1   1   1
    •     a probabilidade de ela vender 2 seguros não básicos é 𝑃 (𝑁 ∩ 𝑁) = 2 × 2 = 4; e
    •     a probabilidade de ela vender um seguro básico e um seguro não básico, em qualquer ordem, é
                           1   1   1
          𝑃 (𝐵 ∩ 𝑁 ) = 2 × 2 × 2 = 2.

E a probabilidade de ter sido vendido um seguro não básico é a soma:
                                                                 1 1 1+2 3
                            𝑃 (𝑁 ) = 𝑃 (𝑁 ∩ 𝑁 ) + 𝑃 (𝐵 ∩ 𝑁 ) =    + =   =
                                                                 4 2  4   4
Assim, a probabilidade condicional desejada é:
                                                    1/2  1 4 2
                                        𝑃(𝐵|𝑁 ) =       = × =
                                                    3/4 2 3 3
Gabarito: D


---

4.     (FGV/2023 – BANESTES) Considere o lançamento de um dado equilibrado (ou seja, todas as seis
faces do dado têm a mesma chance). Se o número de pontos obtidos for no máximo 5, diz-se que o evento
X ocorreu. Se o número de pontos obtidos for par, diz-se que o evento Y ocorreu.

A probabilidade condicional de X dado Y é igual a

a) 1/2

b) 2/3

c) 2/5

d) 1/3

e) 5/6

Comentários:

A probabilidade condicional de X dado Y é dada por:
                                                          𝑃(𝑋 ∩ 𝑌)
                                            𝑃 (𝑋 |𝑌 ) =
                                                            𝑃(𝑌)
Sabendo que Y representa os números pares do dado, temos:
                                                            3
                                                 𝑃 (𝑌 ) =
                                                            6
Considerando que X representa os números menores ou iguais a 5, então a interseção entre X e Y
corresponde aos números pares menores ou iguais a 5, quais sejam, 2 e 4:
                                                                2
                                               𝑃 (𝑋 ∩ 𝑌 ) =
                                                                6
E a probabilidade condicional desejada é:
                                                          2/6 2
                                            𝑃 (𝑋 |𝑌 ) =      =
                                                          3/6 3
Gabarito: B

5.     (FGV/2023 – RFB) A partida decisiva Maiorais x Geniais envolve uma grande incógnita. O goleiro
Pegatudo, dos Geniais, está machucado, e a probabilidade de sua presença em campo é de 60%. Das
últimas 10 partidas entre as equipes com Pegatudo no gol, os Geniais ganharam 7 e perderam 3. Porém,
nas últimas 4 vezes em que Pegatudo esteve ausente, os Maiorais venceram 3 e só perderam 1. Usando
esses dados, a probabilidade que os Geniais saiam vencedores do confronto é estimada em

a) 76%

b) 68%


---

c) 60%

d) 58%

e) 52%

Comentários:

A probabilidade de o time Geniais vencer, independentemente de o goleiro Pegatudo jogar ou não, pode ser
calculada pelo Teorema da Probabilidade Total:
                                  𝑃 (𝑉 ) = 𝑃(𝑉|𝑃 ) × 𝑃(𝑃) + 𝑃(𝑉|𝑃̅) × 𝑃(𝑃̅)
O enunciado informa que:
   •      A probabilidade de o goleiro Pegatudo jogar é 𝑃 (𝑃) = 60% = 0,6; logo, a probabilidade de ele não
          jogar é complementar 𝑃(𝑃̅ ) = 1 − 0,6 = 0,4;
                                                                                             7
   •      O time Geniais venceu 7 de 10 partidas, quando o goleiro esteve presente 𝑃(𝑉 |𝑃) = = 0,7; e
                                                                                            10
                                                                                                 1
   •      O time Geniais venceu 1 de 4 partidas, quando o goleiro não esteve presente 𝑃(𝑉 |𝑃̅) = = 0,25.
                                                                                                 4

Substituindo esses dados na fórmula da Probabilidade Total, temos:
                         𝑃 (𝑉 ) = 0,7 × 0,6 + 0,25 × 0,4 = 0,42 + 0,1 = 0,52 = 52%
Gabarito: E

6.     (FGV/2023 – TCE/ES) Um certo tipo de componente eletrônico tem 0,2% de chance de chegar
adulterado em uma fábrica. Um equipamento testa e detecta quando o componente é adulterado com
probabilidade de 90% de acerto e indica a inexistência de adulteração com probabilidade de 98% de
acerto. Supondo que o teste foi aplicado em um componente e que o resultado foi positivo para
adulteração, a probabilidade de esse componente ser realmente adulterado é, aproximadamente, de:

a) 0,2%

b) 2%

c) 8%

d) 18%

e) 48%

Comentários:

O enunciado informa as probabilidades dos resultados do teste, condicionadas à condição do componente,
e pede a probabilidade da condição do componente, condicionada ao resultado do teste, invertendo assim
os eventos a priori e a posteriori.


---

Assim, para calcular a probabilidade de o componente ser adulterado, dado que o resultado do teste foi
positivo, devemos utilizar a fórmula de Bayes:
                                     𝑃 (𝐴 ∩ 𝑃 )            𝑃 ( 𝑃 | 𝐴) × 𝑃 ( 𝐴 )
                          𝑃(𝐴|𝑃) =              =
                                        𝑃 (𝑃 )    𝑃 (𝑃|𝐴) × 𝑃(𝐴) + 𝑃(𝑃|𝐴̅) × 𝑃(𝐴̅)
O enunciado informa que:
   •     A probabilidade de o componente ser adulterado é:
                                                𝑃(𝐴) = 0,2% = 0,002
         Portanto, a probabilidade de o componente não ser adulterado é complementar:
                                             𝑃(𝐴̅) = 1 − 0,002 = 0,998
   •     Quando o componente é adulterado, a probabilidade de o equipamento detectar a adulteração, isto
         é, dar resultado positivo é:
                                                 𝑃 (𝑃|𝐴) = 90% = 0,9
   •     A probabilidade de o equipamento indicar corretamente a inexistência de adulteração, isto é, dar
         resultado negativo, quando o componente não é adulterado, é 𝑃(𝑁 |𝐴̅) = 98% = 0,98. Portanto, a
         probabilidade de o resultado ser positivo, quando o componente não é adulterado, é complementar:
                                             𝑃 (𝑃|𝐴̅) = 1 − 0,98 = 0,02
Substituindo esses dados na fórmula de Bayes, temos:
                            0,9 × 0,002             0,0018       0,0018   180
        𝑃 (𝐴|𝑃) =                             =                =        =     ≅ 0,08 = 8%
                    0,9 × 0,002 + 0,02 × 0,998 0,0018 + 0,01996 0,02176 2176
Gabarito: C

7.     (FGV/2023 – BANESTES) Para determinado teste que visa a diagnosticar a presença de defeitos em
placas utilizadas na montagem de celulares, as seguintes afirmações estão corretas:

   •     a probabilidade de o teste indicar a presença de defeitos, quando na realidade eles estão ausentes,
         é de 5%;
   •     a probabilidade de o teste indicar a ausência de defeitos, quando na realidade eles estão presentes,
         é de 20%.

Esse teste será aplicado a uma determinada placa sorteada ao acaso no estoque de uma fábrica de placas,
no qual 10% das placas produzidas apresentam defeitos. A probabilidade condicional de que a placa seja
realmente defeituosa, dado que o resultado do teste acusou a presença de defeito, é igual a

a) 8%

b) 16%

c) 32%

d) 64%

e) 80%


---

Comentários:

Novamente, o enunciado informa as probabilidades dos resultados do teste, condicionadas ao defeito na
placa, e pede a probabilidade de defeito, condicionada ao resultado do teste, invertendo os eventos a priori
e a posteriori.
Assim, para calcular a probabilidade de a placa ser realmente defeituosa, dado que o resultado do teste foi
positivo (isto é, acusou a presença de defeito), devemos utilizar a fórmula de Bayes:
                                     𝑃 (𝐷 ∩ 𝑃 )             𝑃 ( 𝑃 |𝐷 ) × 𝑃 (𝐷 )
                          𝑃(𝐷|𝑃) =              =
                                        𝑃 (𝑃 )    𝑃 (𝑃 |𝐷) × 𝑃(𝐷 ) + 𝑃(𝑃|𝐷   ̅ ) × 𝑃(𝐷
                                                                                     ̅)

O enunciado informa que:
    •    A probabilidade de o teste indicar a presença de defeito (isto é, resultado positivo), quando não há
         defeito na placa é:
                                                      ̅ ) = 5% = 0,05
                                                𝑃 (𝑃 |𝐷
    •    A probabilidade de o teste indicar a ausência de defeito (isto é, resultado negativo), quando há
         defeito na placa é 𝑃(𝑁 |𝐷) = 20% = 0,2. Portanto, a probabilidade de o resultado ser positivo,
         quando há defeito, é complementar:
                                               𝑃(𝑃|𝐷 ) = 1 − 0,2 = 0,8
    •    𝑃 (𝐷 ) = 10% = 0,1 das placas apresentam defeito. Portanto, a probabilidade de a placa não
         apresentar defeito é complementar:
                                                   ̅ ) = 1 − 0,1 = 0,9
                                                𝑃 (𝐷
Substituindo esses dados na fórmula de Bayes, temos:
                                 0,8 × 0,1           0,08      0,08   80
               𝑃(𝐷|𝑃) =                         =            =      =    = 0,64 = 64%
                          0,8 × 0,1 + 0,05 × 0,9 0,08 + 0,045 0,125 125
Gabarito: D

8.      (FGV/2023 – BANESTES) Em relação a probabilidade de eventos, avalie se as afirmativas a seguir
são falsas (F) ou verdadeiras (V).

( ) Segundo o enfoque frequentista, a probabilidade de ocorrência de um evento A é igual ao quociente
entre o número de elementos que estão em A e o número total de elementos no espaço amostral.
( ) Dois eventos mutuamente excludentes são necessariamente independentes entre si.
( ) Se a probabilidade condicional de um evento A dado um evento B é igual à probabilidade de B ocorrer,
então A e B são independentes.

As afirmativas são, respectivamente,

a) F - F - F

b) F - V - V

c) V - V - F


---

d) V - F - F

e) F - V - F

Comentários:

Em relação à primeira afirmativa, a probabilidade é igual ao quociente entre o número de elementos do
evento e o número total de elementos do espaço amostral, segundo o enfoque clássico.
Segundo o enfoque frequentista, a probabilidade é o limite do quociente entre o número de ocorrências do
evento e o número total de repetições, quando este tende a infinito:
                                                             𝑛
                                                  𝑃 = lim
                                                         𝑁→∞ 𝑁

Assim, a primeira afirmativa é falsa.
Em relação à segunda afirmativa, eventos mutuamente excludentes são aqueles sem interseção, enquanto
eventos independentes são aqueles cuja probabilidade da interseção é igual ao produto das probabilidades.
Portanto, eventos mutuamente excludentes (com probabilidade diferente de zero) são necessariamente
dependentes, pois a probabilidade da interseção (que é nula) é diferente do produto das probabilidades.
Assim, a segunda afirmativa é falsa.
Em relação à terceira afirmativa, se a probabilidade do evento A dado B é igual à probabilidade do evento B,
então:
                                                       𝑃 (𝐴 ∩ 𝐵 )
                                        𝑃 ( 𝐴 |𝐵 ) =              = 𝑃(𝐵)
                                                          𝑃 (𝐵 )
                                            𝑃 (𝐴 ∩ 𝐵) = [𝑃(𝐵)]2
Como a probabilidade da interseção é diferente do produto das probabilidades, então concluímos que os
eventos não são independentes. Logo, a terceira afirmativa é falsa.
Gabarito: A

9.     (FGV/2022 – SEMSA Manaus) Se A e B são dois eventos quaisquer com probabilidades maiores do
que zero, avalie se as afirmativas a seguir são falsas (F) ou verdadeiras (V).

I. Se A e B são independentes então são mutuamente exclusivos.

II. Se P[A] = 0,5 e P[B] = 0,8 então o menor valor possível de P[A ∪ B] é 0,8.

III. Se A e B são mutuamente exclusivos então não são independentes

As afirmativas são respectivamente

a) F, F e F

b) V, V e F


---

c) F, V e V

d) V, F e V

e) V, V e V

Comentários:

Em relação à primeira afirmativa, se A e B são independentes, então a probabilidade da interseção é igual ao
produto das probabilidades, que será maior que zero (já que as probabilidades de A e B são maiores que
zero). Assim, podemos concluir que os eventos não são mutuamente exclusivos; logo, a afirmativa I é falsa.
Em relação à segunda afirmativa, o menor valor possível para a probabilidade da união é a maior
probabilidade dos eventos, no vaso, P(B) = 0,8. Logo, a afirmativa II é verdadeira.
Em relação à terceira afirmativa, se A e B são mutuamente exclusivos, então a probabilidade da interseção
é igual a zero, a qual é diferente do produto das probabilidades (já que as probabilidades de A e B são
maiores que zero). Assim, concluímos que os eventos não são independentes; logo, a afirmativa III é
verdadeira.
Gabarito: C

10.   (FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A
probabilidade condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6.

Assim, a probabilidade de que A ou B ocorram é igual a

a) 0,56

b) 0,60

c) 0,76

d) 0,82

e) 0,94

Comentários:

O enunciado informa as probabilidades de A, 𝑃(𝐴) = 0,5; de B, 𝑃 (𝐵) = 0,8; e a probabilidade condicional
de A dado B:
                                                    𝑃(𝐴 ∩ 𝐵)
                                        𝑃 (𝐴|𝐵) =            = 0,6
                                                      𝑃(𝐵)
                                             𝑃(𝐴 ∩ 𝐵)
                                                      = 0,6
                                               0,8
                                      𝑃(𝐴 ∩ 𝐵) = 0,8 × 0,6 = 0,48


---

Conhecendo a probabilidade da interseção, podemos calcular a probabilidade da união:
                   𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃 (𝐴 ∩ 𝐵) = 0,5 + 0,8 − 0,48 = 0,82
Gabarito: D

11.   (FGV/2022 – TCE/TO) Dois eventos A e B têm probabilidades iguais a 0,5 e 0,6, respectivamente. A
probabilidade condicional de A ocorrer dado que B ocorre é igual a 0,8.

Assim, a probabilidade de B ocorrer dado que A ocorre é igual a:

a) 0,96

b) 0,82

c) 0,54

d) 0,36

e) 0,24

Comentários:

O enunciado informa as probabilidades de A, 𝑃(𝐴) = 0,5; de B, 𝑃 (𝐵) = 0,6; e a probabilidade condicional
de A dado B:
                                                   𝑃(𝐴 ∩ 𝐵)
                                       𝑃 (𝐴|𝐵) =            = 0,8
                                                     𝑃(𝐵)
                                            𝑃(𝐴 ∩ 𝐵)
                                                     = 0,8
                                              0,6
                                     𝑃(𝐴 ∩ 𝐵) = 0,8 × 0,6 = 0,48
Agora, podemos calcular a probabilidade condicional de B dado A:
                                              𝑃(𝐴 ∩ 𝐵) 0,48
                                  𝑃 (𝐵|𝐴) =           =     = 0,96
                                                𝑃(𝐴)    0,5
Gabarito: A

12.   (FGV/2022 – SEMSA Manaus) Suponha que um estatístico jogue dois dados não viciados. Ele
informa que os números observados são pares. Logo, a probabilidade de que a soma deles seja 6 é

a) 1/6

b) 2/3


---

c) 1/3

d) 2/9

e) 1/2

Comentários:

A questão pede a probabilidade de que a soma de dois dados seja igual a 6, dado que os números são pares,
que pode ser calculada pela razão entre o número de elementos da interseção e o número de resultados
pares possíveis:
                                          𝑃(𝑠𝑜𝑚𝑎 6 ∩ 𝑝𝑎𝑟𝑒𝑠) 𝑛(𝑠𝑜𝑚𝑎 6 ∩ 𝑝𝑎𝑟𝑒𝑠)
                    𝑃(𝑠𝑜𝑚𝑎 6|𝑝𝑎𝑟𝑒𝑠) =                      =
                                              𝑃(𝑝𝑎𝑟𝑒𝑠)          𝑛(𝑝𝑎𝑟𝑒𝑠)
Sabendo que há 3 faces pares em cada dado, pelo princípio multiplicativo, o número de resultados pares
possíveis é o produto:
                                         𝑛(𝑝𝑎𝑟𝑒𝑠) = 3 × 3 = 9
Sabendo que as faces são pares, elas somam 6 nos casos {(2,4) e (4,2)}. Logo, há 2 elementos na interseção.
Assim, a probabilidade desejada é:
                                                               2
                                         𝑃 (𝑠𝑜𝑚𝑎 6|𝑝𝑎𝑟𝑒𝑠) =
                                                               9
Gabarito: D

13.    (FGV/2022 – SEMSA Manaus) A urna I contém quatro bolas brancas e seis pretas; a urna II contém
quatro bolas brancas e cinco pretas. Sorteamos uma bola da urna I e a colocamos na urna II. Em seguida,
sorteamos uma bola da urna II. A probabilidade de que essa segunda bola sorteada seja branca é igual a

a) 0,24

b) 0,30

c) 0,36

d) 0,40

e) 0,44

Comentários:

Precisamos calcular a probabilidade de a segunda bola ser branca, independentemente da primeira bola,
que pode ser branca ou preta. Para isso, podemos utilizar o Teorema da Probabilidade Total:
                           𝑃(𝐵2) = 𝑃(𝐵2|𝐵1) × 𝑃(𝐵1) + 𝑃(𝐵2|𝑃1) × 𝑃(𝑃1)


---

A primeira bola é retirada da urna 1, que possui 4 bolas brancas e 6 bolas pretas. A probabilidade de retirar
uma bola branca é:
                                                        4
                                            𝑃(𝐵1) =        = 0,4
                                                        10
E a probabilidade de retirar uma bola preta é:
                                                        6
                                            𝑃(𝑃1) =        = 0,6
                                                        10
Supondo que a primeira bola é branca, então na urna 2 haverá 5 bolas brancas e 5 bolas pretas. A
probabilidade de retirar uma bola branca nessa situação é:
                                                         5
                                           𝑃 (𝐵2|𝐵1) =      = 0,5
                                                         10
Supondo que a primeira bola é preta, então na urna 2 haverá 4 bolas brancas e 6 bolas pretas. A
probabilidade de retirar uma bola branca nessa situação é:
                                                         4
                                           𝑃(𝐵2|𝑃1) =       = 0,4
                                                         10
Substituindo esses dados na fórmula da Probabilidade Total, temos:
                           𝑃 (𝐵2) = 0,5 × 0,4 + 0,4 × 0,6 = 0,2 + 0,24 = 0,44
Gabarito: E

14.    (FGV/2022 – SEMSA Manaus) Suponha que temos cinco salas cujas portas estão numeradas de 1 a
5. Sabemos que cada sala contém 5 pessoas, e que o número de mulheres na sala i é igual a i, i = 1,..,5.
Assim, por exemplo, a sala 2 contém duas mulheres e três homens. Selecionamos ao acaso uma sala e
depois selecionamos ao acaso uma pessoa dessa sala. Verificamos então que a pessoa sorteada é uma
mulher. A probabilidade de que ela estivesse na sala 5 é igual a

a) 1/6

b) 1/3

c) 2/5

d) 3/5

e) 4/5

Comentários:

Essa questão pede a probabilidade de ter sido sorteado alguém da sala 5, sabendo que é mulher:
                                                        𝑃 (5 ∩ 𝑀 )
                                           𝑃 (5|𝑀 ) =
                                                          𝑃 (𝑀 )


---

Como sabemos que a quantidade de mulher por sala, podemos calcular as probabilidades de selecionar uma
mulher, condicionadas às salas:
                                                            1
   •     Na sala 1, há 1 mulher, dentre 5 pessoas: 𝑃 (𝑀|1) = 5
                                                                 2
   •     Na sala 2, há 2 mulheres, dentre 5 pessoas: 𝑃(𝑀 |2) = 5
                                                                 3
   •     Na sala 3, há 3 mulheres, dentre 5 pessoas: 𝑃(𝑀 |3) =
                                                                 5
                                                                 4
   •     Na sala 4, há 4 mulheres, dentre 5 pessoas: 𝑃(𝑀 |4) = 5
                                                                 5
   •     Na sala 5, há 5 mulheres, dentre 5 pessoas: 𝑃(𝑀 |5) = 5

Ademais, a probabilidade de sortear cada uma das cinco salas é a mesma:
                                                                        1
                                 𝑃(1) = 𝑃(2) = 𝑃 (3) = 𝑃(4) = 𝑃 (5) =
                                                                        5
Com isso, podemos calcular a probabilidade de sortear uma mulher (Teorema da Probabilidade Total):
    𝑃 (𝑀) = 𝑃(𝑀 |1) × 𝑃 (1) + 𝑃 (𝑀 |2) × 𝑃(2) + 𝑃(𝑀|3) × 𝑃(3) + 𝑃(𝑀|4) × 𝑃 (4) + 𝑃 (𝑀|5) × 𝑃(5)
                    1 1 2 1 3 1 4 1 5 1 1   1+2+3+4+5   1 15 3
         𝑃 (𝑀 ) =    × + × + × + × + × = ×(           )= ×  =
                    5 5 5 5 5 5 5 5 5 5 5       5       5 5   5
E a probabilidade de sortear uma mulher da sala 5 (interseção) é o produto:
                                                                     1 1
                                 𝑃 (5 ∩ 𝑀) = 𝑃 (𝑀|5) × 𝑃(5) = 1 ×     =
                                                                     5 5
Por fim, a probabilidade desejada é dada pela razão, que corresponde à aplicação da fórmula de Bayes:
                                                         1/5 1
                                             𝑃(5|𝑀 ) =      =
                                                         3/5 3
Gabarito: B

15.    (FGV/2022 – SEAD/AP) Uma urna contém 3 bolas azuis e 2 bolas verdes. Bolas são retiradas da urna,
aleatoriamente, uma de cada vez e sem reposição até que as 3 bolas azuis sejam retiradas ou até que as 2
bolas verdes sejam retiradas (o que ocorrer primeiro).

A probabilidade de que as 3 bolas azuis sejam retiradas é igual a

a) 1/2

b) 1/3

c) 2/3

d) 2/5

e) 3/5


---

Comentários:

Para que as 3 bolas azuis sejam retiradas, podemos retirar apenas bolas azuis (AAA) ou 1 bola verde e 3 azuis
(VAAA), em alguma ordem. Sabendo que a retirada é feita sem reposição, a probabilidade de retirar as três
bolas azuis e nenhuma verde é o produto:
                                                             3 2 1  1
                                                𝑃(𝐴𝐴𝐴) =      × × =
                                                             5 4 3 10
Já, a probabilidade de retirar 1 bola verde primeiro e depois 3 bolas azuis é:
                                                           2 3 2 1  1
                                            𝑃(𝑉𝐴𝐴𝐴) =       × × × =
                                                           5 4 3 2 10
No entanto, a bola verde pode ser a primeira, a segunda ou a terceira bola retirada1. Logo, devemos
multiplicar esse resultado por 3:
                                                                        1   3
                                                𝑃 (1𝑉, 3𝐴) = 3 ×          =
                                                                        10 10
Por serem situações mutuamente excludentes, a probabilidade de uma ou outra situação é a soma:
                                                       1   3   4   2
                                                 𝑃=      +   =   =
                                                       10 10 10 5
Gabarito: D

16.    (FGV/2022 – SEFAZ/BA) Luana e Vanessa estão brincando de “par ou ímpar” da seguinte maneira:
elas escondem as mãos, uma delas escolhe “par” e a outra escolhe “ímpar” e, depois, ao mesmo tempo,
cada uma delas mostra uma de suas mãos com 1, 2, 3, 4 ou 5 dedos estendidos. Se o total de dedos
estendidos das duas for “par” ganha a que escolheu “par”. Caso contrário, ganha a que escolheu “ímpar”.
Luana escolher “par” e Vanessa escolheu “ímpar”. É correto afirmar que

a) as duas têm a mesma probabilidade de ganhar.

b) a probabilidade de Luana ganhar é maior do que a de Vanessa.

c) a probabilidade de Vanessa ganhar é maior do que a de Luana.

                                            2
d) a probabilidade de Luana ganhar é 5.

1
 Quando mudamos a ordem da retirada da bola verde, as frações são diferentes, mas o produto é o mesmo. A probabilidade de
a bola verde ser a segunda retirada é:
                                                            3 2 2 1  1
                                                𝑃(𝐴𝑉𝐴𝐴) =    × × × =
                                                            5 4 3 2 10
Que também é a probabilidade de a bola verde ser a terceira retirada.


---

                                      2
e) a probabilidade de Vanessa ganhar é .
                                      5

Comentários:

Vamos calcular a probabilidade de cada uma ganhar. Para que Luana ganhe (soma par), é necessário que
ambas escolham um número par, ou ambas escolham um número ímpar.
Sabendo que há 2 números pares, dentre as 5 possibilidades, a probabilidade de cada uma escolher um
número par é:
                                                         2
                                              𝑃(𝑝𝑎𝑟) =
                                                         5
E a probabilidade de ambas escolherem um número par (interseção de eventos independentes) é o produto:
                                                      2 2  4
                                      𝑃(𝑝𝑎𝑟, 𝑝𝑎𝑟) =    × =
                                                      5 5 25
Sabendo que há 3 números ímpares, dentre as 5 possibilidades, a probabilidade de cada uma escolher um
número ímpar é:
                                                             3
                                            𝑃 (í𝑚𝑝𝑎𝑟) =
                                                             5
E a probabilidade de ambas escolherem um número ímpar (interseção de eventos independentes) é:
                                                         3 3  9
                                    𝑃(í𝑚𝑝𝑎𝑟, í𝑚𝑝𝑎𝑟) =     × =
                                                         5 5 25
E a probabilidade de Luana ganhar é a soma (união de eventos excludentes):
                                                   4   9   13
                                      𝑃(𝐿𝑢𝑎𝑛𝑎) =     +   =
                                                   25 25 25
Como não há qualquer outro resultado possível, a probabilidade de Vanessa é complementar:
                                                          13 12
                                     𝑃 (𝑉𝑎𝑛𝑒𝑠𝑠𝑎) = 1 −      =
                                                          25 25
Assim, concluímos que a probabilidade de Luana ganhar é maior do que a de Vanessa.
Gabarito: B

17.    (FGV/2022 – TJ/TO) Bárbara escreveu cada uma das 13 letras da palavra PROBABILIDADE em 13
cartões que foram colocados em uma urna. Depois, Bárbara retirou em sequência 2 cartões da urna, sem
reposição. A probabilidade de que Bárbara tenha retirado os 2 cartões com a letra B é:

a) 1/78

b) 1/39

c) 1/26


---

d) 2/13.

e) 1/13.

Comentários:

O enunciado informa que Bárbara irá retirar dois cartões em sequência, sem reposição. Para que ambos os
cartões contenham a letra B, é necessário que tanto o primeiro quanto o segundo cartão contenha essa letra.
Sabendo que há 2 cartões com a letra B, dentre 13 cartões no total, a probabilidade de Bárbara retirar um
cartão com a letra B na primeira extração é:
                                                           2
                                                𝑃 (𝐵1) =
                                                           13
Sabendo que foi extraído um cartão com a letra B na primeira extração, restará 1 cartão com a letra B, dentre
12 cartões no total. A probabilidade de Bárbara também retirar um cartão com a letra B na segunda extração
é:
                                                            1
                                              𝑃(𝐵2|𝐵1) =
                                                            12
E a probabilidade de ambos os eventos ocorrerem (interseção) é o produto:
                                                  2   1   1     1
                                  𝑃 (𝐵1 ∩ 𝐵2) =     ×   =     =
                                                  13 12 13 × 6 78
Gabarito: A

18.    (FGV/2022 – MPE/SC) ALESSANDRA escreveu em 10 cartões diferentes cada uma das 10 letras do
seu nome e colocou esses cartões em uma urna. A seguir, ela retirou, aleatoriamente e em sequência, 3
cartões da urna.

A probabilidade de que ALESSANDRA tenha retirado os 3 cartões com a letra “A” é:

a) 1/120

b) 7/120

c) 1/40

d) 3/10.

e) 3/7.

Comentários:

O enunciado informa que ALESSANDRA irá retirar três cartões com as letras do seu nome, em sequência, e
pede a probabilidade de os três terem a letra A.


---

Sabendo que há 3 cartões com a letra A, dentre 10 cartões no total, a probabilidade de Alessandra retirar
um cartão com a letra A na primeira extração é:
                                                           3
                                                𝑃 (𝐴1) =
                                                           10
Sabendo que foi extraído um cartão com a letra A na primeira extração, restarão 2 cartões com a letra A,
dentre 9 cartões no total. Nessas condições, a probabilidade de Alessandra retirar um cartão com a letra A
na segunda extração é:
                                                            2
                                               𝑃(𝐴2|𝐴1) =
                                                            9
Por fim, sabendo que foram extraídos dois cartões com a letra A, restará 1 cartão com a letra A, dentre 8, no
total. Assim, a probabilidade de Alessandra retirar um cartão com a letra A na terceira extração é:
                                                                1
                                            𝑃(𝐴3|𝐴1 ∩ 𝐴2) =
                                                                8
E a probabilidade de os três eventos ocorrerem (interseção) é o produto:
                                                3 2 1      1       1
                           𝑃 (𝐴1 ∩ 𝐴2 ∩ 𝐴3) =     × × =          =
                                                10 9 8 10 × 3 × 4 120
Gabarito: A

19.   (FGV/2022 – MPE/SC) Duas urnas A e B têm, cada uma, 9 bolas numeradas. Na urna A, há 4 bolas
com números ímpares e 5 bolas com números pares. Na urna B, há 5 bolas com números ímpares e 4 bolas
com números pares

Retira-se aleatoriamente uma bola de cada urna. A probabilidade de que o produto dos números das bolas
retiradas seja par é:

a) 1/2.

b) 4/9.

c) 5/9.

d) 20/81.

e) 61/81.

Comentários:

Para que o produto seja par é necessário que pelo menos uma das bolas seja par. Assim, vamos calcular a
probabilidade complementar, qual seja, a de ambas as bolas serem ímpares, o que resulta em um produto
ímpar:
                                         𝑃 (𝑝𝑎𝑟) = 1 − 𝑃(í𝑚𝑝𝑎𝑟)


---

Sabendo que, na urna A, há 4 bolas ímpares, dentre 9 no total, a probabilidade de retirar uma bola ímpar da
urna A é:
                                                             4
                                              𝑃𝐴 (í𝑚𝑝𝑎𝑟) =
                                                             9
Sabendo que, na urna B, há 5 bolas ímpares, dentre 9 no total, a probabilidade de retirar uma bola ímpar da
urna B é:
                                                             5
                                              𝑃𝐵 (í𝑚𝑝𝑎𝑟) =
                                                             9
E a probabilidade de retirar uma bola ímpar da urna A E uma bola ímpar da urna B (interseção de eventos
independentes) é o produto:
                                                       4 5 20
                                         𝑃(í𝑚𝑝𝑎𝑟) =     × =
                                                       9 9 81
A probabilidade de o produto ser par é complementar:
                                                         20 61
                                          𝑃(𝑝𝑎𝑟) = 1 −     =
                                                         81 81
Gabarito: E

20.   (FGV/2022 – SEMSA Manaus) Em uma disputa de pênaltis, quando um time acerta uma cobrança
de pênalti, a probabilidade de que esse time acerte a cobrança seguinte é de 70% e, quando um time perde
uma cobrança de pênalti, a probabilidade de que esse time também perca a próxima cobrança é de 80%.

Se o time A acertou a primeira cobrança, a probabilidade de que esse time perca a sua terceira cobrança
é

a) 45%

b) 50%

c) 55%

d) 60%

e) 70%

Comentários:

O enunciado informa a probabilidade condicional de um time acertar o pênalti seguinte, dado que acertou
o anterior: 𝑃(𝐴𝑡=1 |𝐴𝑡=0 ) = 0,7; e a probabilidade condicional de um time perder o pênalti, dado que perdeu
o anterior: 𝑃(𝑃𝑡=1 |𝑃𝑡=0 ) = 0,8.
Com base nessas informações, podemos calcular as probabilidades complementares. A probabilidade de um
time perder o pênalti seguinte, dado que acertou o anterior é:


---

                           𝑃(𝑃𝑡=1 |𝐴𝑡=0 ) = 1 − 𝑃(𝐴𝑡=1 |𝐴𝑡=0 ) = 1 − 0,7 = 0,3
E a probabilidade de um time acertar o pênalti seguinte, dado que perdeu o anterior é:
                           𝑃 (𝐴𝑡=1 |𝑃𝑡=0 ) = 1 − 𝑃(𝑃𝑡=1 |𝑃𝑡=0 ) = 1 − 0,8 = 0,2
A questão informa que o time acertou a primeira cobrança e pede a probabilidade de ele perder a terceira.
Para isso, devemos considerar que o time pode acertar ou perder a segunda cobrança:
               hoje                                 amanhã                             depois de amanhã
                                                               𝑃 (𝐴𝑡=1 |𝐴𝑡=0 ) = 0,7          𝐴
                            𝑃 (𝐴𝑡=1 |𝐴𝑡=0 ) = 0,7     𝐴
                                                               𝑃 (𝑃𝑡=1 |𝐴𝑡=0 ) = 0,3          𝑃
                𝐴                                              𝑃 (𝐴𝑡=1 |𝑃𝑡=0 ) = 0,2          𝐴
                            𝑃 (𝑃𝑡=1 |𝐴𝑡=0 ) = 0,3     𝑃
                                                                𝑃 (𝑃𝑡=1 |𝑃𝑡=0 ) = 0,8
                                                                                              𝑃

Considerando que o time acerta o segundo pênalti (seta verde, superior), a probabilidade de ele perder o
terceiro pênalti é o produto (interseção de eventos):
                                 𝑃(𝑃𝑡=2 ∩ 𝐴𝑡=1 |𝐴𝑡=0 ) = 0,7 × 0,3 = 0,21
E considerando que o time perde o segundo pênalti (seta vermelha, inferior), a probabilidade de ele perder
o terceiro pênalti é o produto:
                                 𝑃 (𝑃𝑡=2 ∩ 𝑃𝑡=1 |𝐴𝑡=0 ) = 0,3 × 0,8 = 0,24
Considerando que são eventos mutuamente excludentes, a probabilidade de ocorrer um OU outro (união) é
a soma:
                               𝑃 (𝑃𝑡=2 |𝐴𝑡=0 ) = 0,21 + 0,24 = 0,45 = 45%
Gabarito: A

21.    (FGV/2022 – EPE) Uma determinada fábrica produz dois tipos de cabos elétricos, digamos M e N,
nas proporções 4/10 e 6/10, respectivamente. A probabilidade de ocorrência de uma falha no cabo tipo
M é de 5%, e no cabo tipo N, é de 10%.

Retirou-se, ao acaso, um cabo produzido na fábrica, e verificou-se que o cabo tinha falha. Assim, a
probabilidade de que esse cabo seja do tipo M é

a) 0,25

b) 0,30

c) 0,33

d) 0,40

e) 0,50.


---

Comentários:

Essa questão informa as probabilidades de falha condicionadas ao tipo do cabo e pede a probabilidade
associada ao cabo condicionada à falha, invertendo assim os eventos a priori e a posteriori.
Nessa situação, utilizamos a fórmula de Bayes para calcular a probabilidade de ser um cabo do tipo M, dado
que tinha falha:
                                        𝑃(𝑀 ∩ 𝐹)            𝑃(𝐹|𝑀) × 𝑃(𝑀)
                         𝑃 ( 𝑀 |𝐹 ) =            =
                                          𝑃(𝐹)     𝑃 (𝐹 |𝑀) × 𝑃(𝑀) + 𝑃(𝐹|𝑁) × 𝑃(𝑁)
O enunciado informa que:
   •     As proporções dos tipos M e N são 4/10 e 6/10, respectivamente, logo: 𝑃(𝑀) = 0,4 e 𝑃(𝑁) = 0,6; e
   •     As probabilidades de falha são 5% e 10%, respectivamente para M e N, logo: 𝑃(𝐹 |𝑀 ) = 0,05 e
         𝑃 (𝐹 |𝑁) = 0,1.
Substituindo esses dados na fórmula de Bayes, temos:
                                         0,05 × 0,4          0,02      0,02 1
                    𝑃 ( 𝑀 |𝐹 ) =                         =           =     = = 0,25
                                   0,05 × 0,4 + 0,1 × 0,6 0,02 + 0,06 0,08 4
Gabarito: A

22.   (FGV/2022 – Pref. Paulínia) Em uma urna há bolas amarelas e bolas não amarelas. Nessa urna,
algumas bolas são numeradas e outras não. Nenhuma bola é não amarela e não numerada.

                                                                                     𝟐
Sorteando-se uma bola amarela dessa urna, a probabilidade de ela ser numerada é 𝟕.

                                                                                     𝟐
Sorteando-se uma bola numerada dessa urna, a probabilidade de ela ser amarela é 𝟓.

Sorteando-se aleatoriamente uma bola dessa urna, a probabilidade de ela ser amarela e numerada é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6

Comentários:

                                                                                         2
O enunciado informa que a probabilidade de a bola ser numerada, dado que é amarela é :
                                                                                         7

                                                        𝑃 (𝐴 ∩ 𝑁 ) 2
                                             𝑃(𝑁|𝐴) =             =
                                                           𝑃 (𝐴 )   7


---

                                                     7
                                          𝑃 (𝐴 ) =     × 𝑃 (𝐴 ∩ 𝑁 )
                                                     2
                                                                         2
Ademais, a probabilidade de a bola ser amarela, dado que é numerada é 5:

                                                       𝑃 (𝐴 ∩ 𝑁 ) 2
                                        𝑃 ( 𝐴 |𝑁 ) =             =
                                                          𝑃 (𝑁 )   5
                                                     5
                                          𝑃 (𝑁 ) =     × 𝑃 (𝐴 ∩ 𝑁 )
                                                     2
Por fim, o enunciado informa que nenhuma bola é não amarela e não numerada, ou seja, todas as bolas são
amarelas ou numeradas. Em outras palavras, a probabilidade da união é igual a 1:
                                      𝑃 (𝐴 ) + 𝑃 (𝑁 ) − 𝑃 (𝐴 ∩ 𝑁 ) = 1
Agora, substituímos as expressões para 𝑃(𝐴) e 𝑃(𝑁), em função da interseção:
                             7               5
                               × 𝑃 (𝐴 ∩ 𝑁 ) + × 𝑃 (𝐴 ∩ 𝑁 ) − 𝑃 ( 𝐴 ∩ 𝑁 ) = 1
                             2               2
                                           10
                                              × 𝑃 (𝐴 ∩ 𝑁 ) = 1
                                           2
                                                                1
                                              𝑃 (𝐴 ∩ 𝑁 ) =
                                                                5
Gabarito: D

23.   (FGV/2022 – CBM/AM) Márcia tem uma ficha amarela, uma ficha verde e duas vermelhas. Joana
tem duas fichas amarelas e uma ficha verde. Cada uma delas escolhe aleatoriamente uma de suas fichas e
mostra para a outra. A probabilidade de que as fichas mostradas tenham a mesma cor é:

a) 1/12

b) 1/7

c) 1/6

d) 1/4

e) 1/3

Comentários:

As duas fichas mostradas terão a mesma cor, caso ambas selecionem fichas amarelas ou ambas selecionem
fichas verdes. Considerando que Márcia possui 1 ficha amarela, dentre 4 fichas no total, a probabilidade de
Márcia selecionar uma ficha amarela é a razão:
                                                            1
                                                𝑃𝑀 (𝐴) =
                                                            4


---

Considerando que Joana possui 2 fichas amarelas, dentre 3 fichas no total, a probabilidade de Joana
selecionar uma ficha amarela é:
                                                            2
                                                𝑃𝐽 (𝐴) =
                                                            3
E a probabilidade de ambas selecionarem fichas amarelas (uma E outra) é o produto (interseção de eventos
independentes):
                                                      1 2  2
                                           𝑃 (𝐴 ) =    × =
                                                      4 3 12
Similarmente, considerando que Márcia possui 1 ficha verde, dentre 4 fichas, a probabilidade de ela
selecionar uma verde é:
                                                            1
                                                𝑃𝑀 (𝑉 ) =
                                                            4
E considerando que Joana possui 1 ficha verde, dentre 3 fichas, a probabilidade de ela selecionar uma ficha
verde é:
                                                            1
                                                𝑃𝐽 (𝑉 ) =
                                                            3
Portanto, a probabilidade de ambas selecionarem fichas verde é o produto (interseção):
                                                      1 1  1
                                           𝑃 (𝑉 ) =    × =
                                                      4 3 12
Considerando que esses eventos são mutuamente excludentes, a probabilidade de ocorrer um OU outro
(união) é a soma:
                                                                2   1   3   1
                            𝑃 (𝑖𝑔𝑢𝑎𝑖𝑠) = 𝑃(𝐴) + 𝑃(𝑉 ) =           +   =   =
                                                                12 12 12 4
Gabarito: D

24.    (FGV/2022 – MPE/GO) Em uma determinada cidade, se chover em um dia a probabilidade de
chover no dia seguinte é 60%. Se não chover em um dia, a probabilidade de chover no dia seguinte é 10%.
Hoje não choveu nessa cidade. A probabilidade de não chover depois de amanhã é de

a) 90%

b) 85%

c) 81%

d) 76%

e) 72%

Comentários:


---

O enunciado informa a probabilidade condicional de chover em um dia, dado que choveu no dia anterior:
𝑃 (𝐶𝑡=1 |𝐶𝑡=0 ) = 0,6; e a probabilidade condicional de chover em um dia, dado que não choveu no dia
                    ̅ ) = 0,1.
anterior: 𝑃(𝐶𝑡=1 |𝐶𝑡=0
Com base nessas informações, podemos calcular as probabilidades complementares, quais sejam de não
chover em um dia, tanto considerando que choveu no dia anterior tanto considerando que não choveu no
dia anterior:
                              ̅ |𝐶𝑡=0 ) = 1 − 𝑃 (𝐶𝑡=1 |𝐶𝑡=0 ) = 1 − 0,6 = 0,4
                           𝑃(𝐶𝑡=1
                              ̅ |𝐶𝑡=0
                           𝑃(𝐶𝑡=1 ̅ ) = 1 − 𝑃 (𝐶𝑡=1 |𝐶𝑡=0
                                                      ̅ ) = 1 − 0,1 = 0,9

A questão pede a probabilidade de não chover daqui a 2 dias, dado que não choveu hoje. Para isso, devemos
considerar que amanhã pode chover ou não, conforme ilustrado a seguir:
               hoje                               amanhã                            depois de amanhã
                                                                  ̅ |𝐶𝑡=0
                                                               𝑃(𝐶𝑡=1 ̅ ) = 0,9
                                                                                           𝐶̅
                               ̅ |𝐶𝑡=0
                            𝑃(𝐶𝑡=1 ̅ ) = 0,9        𝐶̅
                                                                        ̅ ) = 0,1
                                                               𝑃(𝐶𝑡=1 |𝐶𝑡=0                𝐶
                 𝐶̅                                               ̅ |𝐶𝑡=0 ) = 0,4
                                                               𝑃(𝐶𝑡=1                      𝐶̅
                                      ̅ ) = 0,1
                             𝑃(𝐶𝑡=1 |𝐶𝑡=0           𝐶
                                                               𝑃(𝐶𝑡=1 |𝐶𝑡=0 ) = 0,6        𝐶

Considerando a possibilidade de não chover amanhã (seta vermelha, superior), a probabilidade de chover
depois de amanhã é o produto (interseção de eventos):
                                    ̅ ∩ 𝐶𝑡=1
                                 𝑃(𝐶𝑡=2  ̅ |𝐶𝑡=0
                                             ̅ ) = 0,9 × 0,9 = 0,81

E considerando a possibilidade de chover amanhã (seta preta, inferior), a probabilidade de chover depois de
amanhã é o produto:
                                    ̅ ∩ 𝐶𝑡=1 |𝐶𝑡=0
                                 𝑃(𝐶𝑡=2        ̅ ) = 0,4 × 0,1 = 0,04

Considerando que são eventos mutuamente excludentes, a probabilidade de ocorrer um OU outro (união) é
a soma:
                                   ̅ |𝐶𝑡=0
                               𝑃 (𝐶𝑡=2 ̅ ) = 0,81 + 0,04 = 0,85 = 85%

Gabarito: B

25.    (FGV/2022 – TCE/TO) Uma urna contém inicialmente 5 bolas brancas e 3 bolas pretas. Suponha
que, inicialmente, uma primeira bola seja sorteada, sua cor observada, e que essa bola seja devolvida à
urna juntamente com duas outras bolas da mesma cor. Em seguida, outra bola será sorteada, sua cor,
observada, e essa bola será devolvida à urna juntamente com outras duas da mesma cor. Em seguida, será
sorteada uma terceira bola. Suponha ainda, que, a cada sorteio, todas as bolas na urna sejam igualmente
prováveis de serem sorteadas.

A probabilidade de que as três bolas sorteadas sejam pretas é então, aproximadamente, igual a:

a) 0,05


---

b) 0,07

c) 0,09

d) 0,11

e) 0,13

Comentários:

O enunciado informa que após retirarmos uma bola da urna e observarmos a sua cor, devolvemos essa bola
junto a 2 outras bolas da mesma cor. Assim, as probabilidades a cada extração dependem dos resultados
das extrações anteriores.
Sabendo que há inicialmente 5 bolas brancas e 3 bolas pretas (8 bolas ao total), a probabilidade de retirar
uma bola preta é:
                                                         3
                                                  𝑃1 =
                                                         8
Considerando que selecionamos uma bola preta, acrescentaremos então 2 bolas pretas, resultando em 5
bolas pretas, dentre 10 bolas no total. Assim, a probabilidade de retirar a segunda bola preta é:
                                                      5   1
                                               𝑃2 =     =
                                                      10 2
Considerando que selecionamos novamente uma bola preta, acrescentaremos então mais 2 bolas pretas,
resultando em 7 pretas, dentre 12 bolas no total. Assim, a probabilidade de retirar a terceira bola preta é:
                                                         7
                                                 𝑃3 =
                                                         12
E a probabilidade de selecionarmos as 3 bolas pretas é o produto (interseção):
                                                    3 1 7   7
                               𝑃 = 𝑃1 × 𝑃2 × 𝑃3 =    × ×  =   ≅ 0,11
                                                    8 2 12 64
Gabarito: D

26.     (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2 há 10
alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido e conduzido à
sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é aleatoriamente escolhido.

A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a

a) 0,42

b) 0,47

c) 0,50


---

d) 0,53

e) 0,55

Comentários:

A probabilidade de sortear um aluno do sexo feminino da sala 2 depende do resultado do sorteio da sala 1.
Assim, vamos dividir os possíveis resultados em 2 cenários.


Cenário 1) Sorteio de um aluno do sexo masculino da sala 1.
A probabilidade de sortear um aluno do sexo masculino da sala 1, sabendo que há 12 alunos do sexo
masculino e 8 alunos do sexo feminino (20, no total) é:
                                                         12 3
                                            𝑃(𝑀1 ) =       =
                                                         20 5
Sabendo que o aluno sorteado irá para a sala 2, então, nesse cenário, haverá 10 + 1 = 11 alunos do sexo
masculino e 9 alunos do sexo feminino na sala 2 (20, total).
A probabilidade de sortear um aluno do sexo feminino dessa sala, nessas condições, é:
                                                            9
                                             𝑃(𝐹2 |𝑀1 ) =
                                                            20
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                   9 3   27
                                   𝑃(𝐹2 ∩ 𝑀1 ) =     × =    = 0,27
                                                   20 5 100


Cenário 2) Sorteio de um aluno do sexo feminino da sala 1.
A probabilidade de sortear um aluno do sexo feminino da sala 1, sabendo que há 12 alunos do sexo masculino
e 8 alunos do sexo feminino (20, no total) é:
                                                         8   2
                                             𝑃 (𝐹1 ) =     =
                                                         20 5
Nesse cenário, haverá 9 + 1 = 10 alunos do sexo feminino e 10 alunos do sexo masculino (20, no total) na
sala 2. A probabilidade de sortear um aluno do sexo feminino dessa sala, nessas condições, é:
                                                          10 1
                                           𝑃(𝐹2 |𝐹1 ) =     =
                                                          20 2
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                      1 2 1
                                      𝑃(𝐹2 ∩ 𝐹1 ) =    × = = 0,2
                                                      2 5 5


E a probabilidade de sortear um aluno do sexo feminino da sala 2, considerando ambos os cenários, é a soma
(união de eventos mutuamente exclusivos):


---

                                       𝑃 (𝐹2 ) = 0,27 + 0,2 = 0,47
Gabarito: B

27.    (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] = 𝟎, 𝟐 e
𝑷[𝑩] = 𝟎, 𝟓. A probabilidade condicional 𝑷[𝑨|𝑩] e as probabilidades 𝑷[𝑨 ∪ 𝑩] e 𝑷[𝑨 ∩ 𝑩] valem
respectivamente

a) 0,2; 0,6; 0,1
b) 0,1; 0,6; 0,2
c) 0,2; 0,3; 0,1
d) 0,2; 0,5; 0,1
e) 0,1; 0,6; 0,1

Comentários:

O enunciado informa que os eventos A e B são independentes. Portanto, a probabilidade condicional P(A|B)
é igual à não condicional:
                                          𝑃 (𝐴|𝐵) = 𝑃(𝐴) = 0,2
Ademais, a probabilidade da interseção é o produto das probabilidades:
                               𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵) = 0,2 × 0,5 = 0,1
Conhecendo a probabilidade da interseção, podemos calcular a probabilidade da união, pela fórmula
correspondente:
                     𝑃 (𝐴 ∪ 𝐵) = 𝑃 (𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,2 + 0,5 − 0,1 = 0,6
As probabilidades de 𝑃(𝐴|𝐵), 𝑃 (𝐴 ∪ 𝐵) e 𝑃 (𝐴 ∩ 𝐵) são, respectivamente: 0,2; 0,6; 0,1.
Gabarito: A

28.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
probabilidades P[A] > 0 e P[B] > 0, são falsas (F) ou verdadeiras (V):

   I.   Se A e B são mutuamente exclusivos então não são independentes.
  II.   Se A e B são independentes então P[A∩B] > 0.
 III.   Se A e B não são independentes, então P[A|B] ≠ P[A].

As afirmativas são respectivamente

a) V, V e F
b) V, F e F
c) F, F e F


---

d) F, V e V
e) V, V e V

Comentários:

O enunciado informa que A e B são eventos com probabilidade maior que zero.
Em relação à afirmativa I, eventos mutuamente exclusivos são aqueles em que um não ocorre se o outro
ocorre, o que caracteriza eventos dependentes. Afinal, a probabilidade de um ocorrer, dado que o outro
ocorreu, é nula e, portanto, diferente da probabilidade não condicionada:
                                              𝑃 (𝐴|𝐵) = 0 ≠ 𝑃(𝐴)
                                              𝑃 ( 𝐵 |𝐴 ) = 0 ≠ 𝑃 ( 𝐵 )
Assim, a afirmativa I é verdadeira, pois, de fato, esses eventos não são independentes.
Em relação à afirmativa II, a probabilidade da interseção de eventos independentes é o produto das
probabilidades:
                                        𝑃 (𝐴 ∩ 𝐵 ) = 𝑃 (𝐴 ) × 𝑃 (𝐵 )
Sabendo que ambas as probabilidades são maiores que zero, então o produto também é maior que zero.
Portanto, a afirmativa II é verdadeira.
Em relação à afirmativa III, para eventos dependentes, a probabilidade condicionada é diferente da
probabilidade não condicionada:
                                                𝑃(𝐴|𝐵) ≠ 𝑃(𝐴)
Logo, a afirmativa III também é verdadeira.
Gabarito: E

29.     (FGV/2022 – TRT/PB) Considere o experimento de se lançar aleatoriamente dois dados. Sejam A, B
e C os eventos:

    •   A = o resultado do primeiro dado é ímpar.
    •   B = o resultado do segundo dado é ímpar.
    •   C = a soma dos dois resultados é ímpar.

Avalie então se as seguintes afirmativas estão corretas:

    I. A e B são independentes.
    II. A e C são independentes.
    III. A, B e C são independentes.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.


---

c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

Comentários:

Essa questão pede para verificarmos a independência entre os eventos A (resultado do primeiro dado ímpar),
B (resultado do segundo dado ímpar) e C (soma dos dois resultados ímpar). Em relação à alternativa I, o
resultado do primeiro dado em nada influencia o resultado do segundo dado, logo, os eventos A e B são
independentes e a afirmativa I está correta.
Para verificar a afirmativa II, devemos verificar se a probabilidade da interseção dos eventos A e C é igual ao
produto das probabilidades. A probabilidade de o resultado do primeiro dado ser ímpar (evento A), sabendo
que há 3 faces ímpares em um dado, dentre 6 no total, é:
                                                           3 1
                                                𝑃 (𝐴 ) =    =
                                                           6 2
Para que a soma dos dois dados seja ímpar (evento C), é necessário que um dos resultados seja ímpar e o
outro par. A probabilidade de o resultado do primeiro dado ser ímpar e o do segundo par é o produto das
probabilidades (interseção de eventos independentes):
                                                           3 3  9   1
                                     𝑃(í𝑚𝑝𝑎𝑟, 𝑝𝑎𝑟) =        × =   =
                                                           6 6 36 4
E a probabilidade de o resultado do primeiro dado ser par e o do segundo ímpar é, também:
                                                           3 3  9   1
                                     𝑃(𝑝𝑎𝑟, í𝑚𝑝𝑎𝑟) =        × =   =
                                                           6 6 36 4
E a probabilidade do evento C é a soma (união de eventos exclusivos):
                                                      1 1 2 1
                                           𝑃 (𝐶 ) =    + = =
                                                      4 4 4 2
Assim, o produto das probabilidades dos eventos A e C é:
                                                              1 1 1
                                         𝑃 (𝐴 ) × 𝑃 ( 𝐶 ) =    × =
                                                              2 2 4
Agora, vamos calcular a probabilidade da interseção dos eventos A e C, isto é, a probabilidade de o resultado
do primeiro dado ser ímpar e a soma dos resultados dos dois dados ser ímpar. Para isso, é necessário que o
resultado do primeiro dado seja ímpar e o do segundo dado seja par. Como o resultado de um dado não
influencia no resultado do outro (eventos independentes), podemos calcular o produto das probabilidades:
                                                                  1 1 1
                                  𝑃 (𝐴 ∩ 𝐶 ) = 𝑃(í𝑚𝑝𝑎𝑟, 𝑝𝑎𝑟) =     × =
                                                                  2 2 4
Portanto, temos 𝑃(𝐴 ∩ 𝐶 ) = 𝑃(𝐴) × 𝑃(𝐶). Assim, verificamos que esses eventos são independentes e que
a afirmativa II está correta.
Em relação à afirmativa III, os eventos A, B e C não possuem interseção porque se os resultados do primeiro
e do segundo dados forem ímpar (eventos A e B), a soma será par (evento C não poderá ocorrer):


---

                                              𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) = 0
Sabendo que o produto das probabilidades desses eventos é diferente de zero, concluímos que os eventos
A, B e C não são independentes e que a afirmativa III está incorreta.
Gabarito: B

30.    (FGV/2022 – Senado Federal) Uma peça é colocada inicialmente na casa 1 de um tabuleiro
composto de dez casas, numeradas de 1 a 10. A peça avança uma casa se um número par é obtido no
lançamento de um dado. Caso o número obtido seja ímpar, a peça avança duas casas. O procedimento é
repetido sucessivamente. A probabilidade de a peça saltar a casa 8, indo direto para a casa 9, é de

a) 13/128.

b) 23/128.

c) 33/128.

d) 43/128.

e) 53/128.

Comentários:

Para que a peça salte a casa 8, indo direto para a casa 9, ela precisa chegar na casa 7.
Para isso, temos as seguintes possibilidades, sabendo que a peça começa na casa 1 e que ela avança 1 casa,
se for obtido um número par; e 2 casas, se for obtido um número ímpar:
   •   Avançar uma casa por vez - para isso, devem ser obtidos 6 números pares. Sabendo que a
                                              1
       probabilidade de obter um número par é 2, a probabilidade de obter 6 números pares é:
                                                      1 6    1
                                                𝑃1 = ( ) =
                                                      2      64
   •   Avançar duas casas uma vez e 4 casas, sendo uma por vez - para isso, deve ser obtido 1 número ímpar
                                                                                                        1
       e 4 números pares. Sabendo que a probabilidade de obter um número par ou um número ímpar é 2,
       a probabilidade de obter 1 número ímpar e 4 números pares (em determinada ordem) é:
                                                 1   1 4     1
                                                   ×( ) =
                                                 2   2      32

       Considerando que essa sequência de resultados pode acontecer em qualquer ordem, devemos
       multiplicar pelo número de maneiras de reordenar esses resultados, que pode ser calculado pela
       combinação de 1 dentre 5 resultados:
                                                    1       1     5
                                        𝑃2 = 𝐶5,1 ×    = 5×    =
                                                    32      32 32

   •   Avançar duas casas duas vezes e 2 casas, sendo uma por vez - para isso, devem ser obtidos 2 números
       ímpares e 2 números pares, cuja probabilidade (em determinada ordem) é:
                                                 1 2    1 2    1
                                                ( ) ×( ) =
                                                 2      2      16


---

         Precisamos multiplicar essa probabilidade pelo número de maneiras de reordenar esses resultados,
         que pode ser calculado pela combinação de 2 dentre 4 resultados:
                                      1       4!      1    4 × 3 × 2! 1         1     6
                          𝑃3 = 𝐶4,2 ×    =         ×     =           ×    = 6×     =
                                      16 2! × 2! 16          2! × 2    16       16 16

   •     Avançar duas casas três vezes - para isso, devem ser obtidos 3 números ímpares, com probabilidade:
                                                           1 3 1
                                                     𝑃4 = ( ) =
                                                           2      8
A probabilidade de chegar à casa 7 é a soma dessas probabilidades (união de eventos mutuamente
exclusivos):
                                       1   5   6 1 1 + 10 + 24 + 8 43
                         𝑃(𝑐𝑎𝑠𝑎 7) =     +   +  + =               =
                                       64 32 16 8        64         64
                                                                                          1
Para pular da casa 7 à casa 9, é necessário obter um número ímpar, cuja probabilidade é 2. A probabilidade
de chegar à cassa 7 E pular para a casa 9 (interseção de eventos independentes) é o produto:
                                                  43 1  43
                                             𝑃=     × =
                                                  64 2 128
Gabarito: D

31.    (FGV/2021 – Paulínia) Um grupo de especialistas utiliza técnicas estatísticas para quantificar a
incerteza de eventos esportivos. Ao apurar as chances de cada equipe chegar à final de um importante
campeonato de futebol, os especialistas concluem que a probabilidade de que os times X e Y joguem a
partida decisiva é de 3/7 e 2/7, respectivamente, enquanto a probabilidade de que ambos estejam na final
é 1/7.

Sabendo que o time X está classificado para a partida final, a probabilidade dessa equipe enfrentar o time
Y é de

a) 1/7

b) 1/3

c) 4/7

d) 2/3

e) 6/7

Comentários:

A questão pede a probabilidade condicional de Y chegar à final, dado que X chegou à final, a qual corresponde
à razão entre a probabilidade da interseção dos eventos e a probabilidade do evento a priori (no caso, X
chegar à final):


---

                                                         𝑃 (𝑋 ∩ 𝑌 )
                                           𝑃 (𝑌 |𝑋 ) =
                                                            𝑃 (𝑋 )
                                                               3
Sabemos que a probabilidade de X chegar à final é 𝑃(𝑋) = 7 e que a probabilidade de ambos chegarem à
                    1
final é 𝑃 (𝑋 ∩ 𝑌) = 7.

Assim, a probabilidade condicional desejada é:
                                                         1
                                                             1
                                            𝑃 (𝑌 | 𝑋 ) = 7 =
                                                         3 3
                                                         7
Gabarito: B

32.     (FGV/2021 – FunSaúde/CE) Em um grupo de pessoas de uma pequena cidade, 30 acessam o site A
e 24 acessam o site B. Alguns acessam os dois sites. Sorteando ao acaso uma das pessoas que acessam o
site A, a probabilidade de que ela também acesse o site B é 60%. Sorteando ao acaso uma das pessoas que
acessam o site B, a probabilidade de que ela também acesse o site A é:

a) 25%

b) 40%

c) 50%

d) 60%

e) 75%

Comentários:

O enunciado informa o número de pessoas que acessam o site A e o site B, bem como a probabilidade
condicional de uma pessoa acessar o site B, dado que acessa o site A. A probabilidade condicional é a razão
entre a probabilidade da interseção e a probabilidade do evento a priori (no caso, acessar o site A):
                                                         𝑃(𝐴 ∩ 𝐵)
                                           𝑃(𝐵|𝐴) =
                                                           𝑃(𝐴)
Considerando que a probabilidade é a razão entre os casos favoráveis e os casos possíveis 𝑛(𝑈), podemos
representar essa probabilidade como:
                                          𝑛(𝐴 ∩ 𝐵)   𝑛(𝐴 ∩ 𝐵)
                                            𝑛(𝑈)       𝑛(𝑈)     𝑛(𝐴 ∩ 𝐵)
                              𝑃 (𝐵 |𝐴 ) =          =          =
                                            𝑛(𝐴)       𝑛(𝐴)       𝑛(𝐴)
                                            𝑛(𝑈)       𝑛(𝑈)


---

Ou seja, a probabilidade condicional pode ser calculada pela razão entre o número de casos da interseção e
o número de casos do evento a priori. No caso, é a razão entre o número de pessoas e acessam os sites A e
B e o número de pessoas que acessam o site A.
Sabendo que essa razão é 𝑃 (𝐵|𝐴) = 60% e que 𝑛(𝐴) = 30 pessoas acessam o site A, podemos calcular o
número de pessoas que acessam ambos os sites:
                                                         𝑛(𝐴 ∩ 𝐵)
                                          𝑃 ( 𝐵 |𝐴 ) =            = 0,6
                                                            30
                                         𝑛(𝐴 ∩ 𝐵) = 0,6 × 30 = 18
Conhecendo o número de pessoas da interseção e sabendo que 𝑛(𝐵) = 24 pessoas acessam o site B,
podemos calcular a probabilidade condicional de uma pessoa acessar o site A, dado que acessa o site B:
                                                  𝑛(𝐴 ∩ 𝐵) 18 3
                                   𝑃 ( 𝐴| 𝐵 ) =           =   = = 75%
                                                    𝑛(𝐵)    24 4


Gabarito: E

33.      (FGV/2021 – FunSaúde/CE) Dois eventos A e B são tais que P[A] = 0,8, P[B] = 0,5 e P[A|B]= 0,4.

Assim, a probabilidade condicional P[B|A] é igual a

a) 15%

b) 25%

c) 30%

d) 40%

e) 50%

Comentários:

O enunciado informa a probabilidade dos eventos A e B, bem como a probabilidade condicional de A, dado
B, a qual corresponde à razão entre a probabilidade da interseção e a probabilidade do evento a priori, no
caso, o evento B:
                                                            𝑃 (𝐴 ∩ 𝐵 )
                                             𝑃 (𝐴 |𝐵 ) =
                                                               𝑃 (𝐵 )
Sabendo que 𝑃 (𝐵) = 0,5 e que 𝑃 (𝐴|𝐵) = 0,4, podemos calcular a probabilidade da interseção:
                                                         𝑃 (𝐴 ∩ 𝐵 )
                                          𝑃 (𝐴|𝐵) =                 = 0,4
                                                            0,5
                                         𝑃 (𝐴 ∩ 𝐵) = 0,4 × 0,5 = 0,2


---

Conhecendo as probabilidades 𝑃(𝐴) = 0,8 e 𝑃(𝐴 ∩ 𝐵) = 0,4, podemos calcular a probabilidade condicional:
                                                   𝑃(𝐴 ∩ 𝐵) 0,2 1
                                    𝑃 ( 𝐵 |𝐴 ) =            =    = = 25%
                                                     𝑃 (𝐴 )   0,8 4
Gabarito: B

34.       (FGV/2021 – FunSaúde/CE) Se A e B são eventos possíveis, avalie as afirmativas a seguir.

I. Se A e B são mutuamente exclusivos então são independentes.
II. Se P[A] = 0,5 e P[B] = 0,7 então P[A∩B] não pode ser igual a 0,4.
III. Se A e B são independentes então podem ser mutuamente exclusivos.

Está correto o que se afirma em

a) se nenhuma alternativa estiver correta
b) I, apenas
c) II, apenas
d) I e III, apenas
e) I, II e III

Comentários:

Eventos independentes são aqueles em que um ocorre independentemente do outro. Por outro lado,
eventos mutuamente exclusivos (ou excludentes) são aqueles que não apresentam interseção, ou seja, se
um ocorre, o outro não ocorre. Assim, eventos independentes não são e não podem ser mutuamente
exclusivos. Logo, as afirmativas I e III são falsas.
Em relação à afirmativa II, se a probabilidade de um evento é 0,5 e a probabilidade de outro evento é 0,7, a
probabilidade da interseção é no máximo igual a 0,7. A probabilidade mínima da interseção é aquela que
torna a probabilidade da união igual a 1 (probabilidade máxima):
                                    𝑃 ( 𝐴 ∪ 𝐵 ) = 𝑃 ( 𝐴 ) + 𝑃 (𝐵 ) − 𝑃 ( 𝐴 ∩ 𝐵 )
                                    𝑃 (𝐴 ∪ 𝐵) = 0,5 + 0,7 − 𝑃(𝐴 ∩ 𝐵) = 1
                                           𝑃 (𝐴 ∩ 𝐵) = 1,2 − 1 = 0,2
Logo, é possível que a probabilidade da interseção seja igual a 0,4, o que torna a afirmativa II falsa.
Gabarito: A

35.     (FGV/2021 – FunSaúde/CE) Dois eventos independentes A e B têm probabilidades respectivas
iguais a 0,4 e 0,5. A probabilidade de A ∪ B ocorrer é igual a

a) 0,5


---

b) 0,6
c) 0,7
d) 0,8
e) 0,9

Comentários:

A probabilidade da interseção de eventos independentes é o produto das probabilidades de cada evento:
                              𝑃 (𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃 (𝐵) = 0,4 × 0,5 = 0,2
Logo, a probabilidade da união é:
                     𝑃 (𝐴 ∪ 𝐵) = 𝑃 (𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,4 + 0,5 − 0,2 = 0,7
Gabarito: C

36.    (FGV/2021 – Paulínia) Duas crianças jogam par ou ímpar. Nesse jogo, um dos participantes escolhe
“par” e o outro fica com “ímpar”. Em seguida, e simultaneamente, mostram 1, 2, 3, 4, ou 5 dedos de uma
mão. A soma dos números de dedos será par ou ímpar, e fica decidido o vencedor.

A probabilidade de que o jogador que escolhe “impar” ganhe o jogo é de

a) 0,46

b) 0,48

c) 0,50

d) 0,52

e) 0,54

Comentários:

Para que o resultado seja ímpar, é necessário que um jogador selecione um número par e o outro, ímpar.
Sabendo que dos 5 números, 2 são pares, a probabilidade de o primeiro jogador selecionar um número par
é a razão:
                                                         2
                                              𝑃(𝑝𝑎𝑟) =
                                                         5
Sabendo que há 3 números ímpares, a probabilidade de o segundo jogador selecionar um número ímpar é:
                                                             3
                                            𝑃(í𝑚𝑝𝑎𝑟) =
                                                             5


---

E a probabilidade de o primeiro jogador selecionar par E o segundo jogador selecionar ímpar é o produto
dessas probabilidades (interseção de eventos independentes):
                                                      2 3  6
                                           𝑃 (𝐴 ) =    × =
                                                      5 5 25
Similarmente, a probabilidade de o primeiro jogador selecionar ímpar e o segundo selecionar par é a mesma:
                                                           6
                                                𝑃 (𝐵 ) =
                                                           25
E a probabilidade de o resultado ser ímpar é a soma dos resultados (união de eventos mutuamente
excludentes):
                                                        6   6   12
                               𝑃 = 𝑃 (𝐴 ) + 𝑃 ( 𝐵 ) =     +   =    = 0,48
                                                        25 25 25
Gabarito: B

37.    (FGV/2021 – FunSaúde/CE) Em uma população, 10% das pessoas têm uma dada comorbidade. Se
quatro pessoas forem aleatoriamente sorteadas, com reposição, dessa população, a probabilidade de que
ao menos uma apresente a referida comorbidade é, aproximadamente, igual a

a) 0,34

b) 0,42

c) 0,54

d) 0,66

e) 0,78

Comentários:

A probabilidade de pelo menos uma de 4 pessoas sorteadas apresentar comorbidade pode ser calculada pelo
seu complemento, qual seja de que as 4 pessoas não apresentem comorbidade:
                                 𝑃(𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚) = 1 − 𝑃(𝑛𝑒𝑛ℎ𝑢𝑚)
Sabendo que 10% das pessoas apresentam comorbidade, a proporção de pessoas que não apresentam
comorbidade é complementar:
                                𝑃 (𝑠𝑒𝑚) = 1 − 𝑃 (𝑐𝑜𝑚) = 1 − 0,1 = 0,9
E a probabilidade de as 4 pessoas não apresentarem comorbidade é o produto (interseção de eventos
independentes):
                              𝑃 (𝑛𝑒𝑛ℎ𝑢𝑚) = 0,9 × 0,9 × 0,9 × 0,9 ≅ 0,66
E a probabilidade de pelo menos uma pessoa apresentar comorbidade é complementar:
                            𝑃(𝑔𝑎𝑛ℎ𝑎𝑟 𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚) = 1 − 0,66 = 0,34


---

Gabarito: A

38.    (FGV/2021 – PC/RN) Em um campeonato de futebol, quando o TIMEX joga em casa, a probabilidade
de ele ganhar o jogo é de 60%, mas quando ele joga fora de casa, a probabilidade de ele ganhar o jogo é
de 50%. Nos próximos três jogos do campeonato, o TIMEX jogará dois em casa e um fora de casa.

A probabilidade de o TIMEX ganhar pelo menos um desses três jogos é:

a) 30%

b) 50%

c) 75%

d) 92%

e) 95%

Comentários:

O enunciado informa as probabilidades de o time ganhar dentro e fora de casa e que o time jogará 2 jogos
em casa e 1 fora de casa. A probabilidade de o time ganhar pelo menos um jogo pode ser calculada pelo seu
complemento, qual seja de perder todos os jogos:
                          𝑃 (𝑔𝑎𝑛ℎ𝑎𝑟 𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚) = 1 − 𝑃(𝑝𝑒𝑟𝑑𝑒𝑟 𝑡𝑜𝑑𝑜𝑠)
Sabendo que a probabilidade de o time ganhar em casa é de 60%, a probabilidade de o time perder em casa
é complementar:
                    𝑃 (𝑝𝑒𝑟𝑑𝑒𝑟 𝑒𝑚 𝑐𝑎𝑠𝑎) = 1 − 𝑃(𝑔𝑎𝑛ℎ𝑎𝑟 𝑒𝑚 𝑐𝑎𝑠𝑎) = 1 − 0,6 = 0,4
E sabendo que a probabilidade de o time ganhar fora de casa é de 50%, a probabilidade de o time perder
fora de casa é complementar:
                       𝑃(𝑝𝑒𝑟𝑑𝑒𝑟 𝑓𝑜𝑟𝑎) = 1 − 𝑃(𝑔𝑎𝑛ℎ𝑎𝑟 𝑓𝑜𝑟𝑎) = 1 − 0,5 = 0,5
Considerando que o time joga 2 jogos em casa e 1 jogo fora de casa, a probabilidade de ele perder todos é o
produto (interseção de eventos independentes):
                               𝑃(𝑝𝑒𝑟𝑑𝑒𝑟 𝑡𝑜𝑑𝑜𝑠) = 0,4 × 0,4 × 0,5 = 0,08
E a probabilidade de o time ganhar pelo menos um jogo é complementar:
                         𝑃(𝑔𝑎𝑛ℎ𝑎𝑟 𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚) = 1 − 0,08 = 0,92 = 92%
Gabarito: D

39.    (FGV/2021 – FunSaúde/CE) Em uma caixa há 7 fichas numeradas com 1, 3, 4, 6, 7, 8, 9. Retira-se
aleatoriamente uma ficha da caixa, anota-se o número e a mesma é, então, recolocada na caixa. A seguir,


---

retira-se, também aleatoriamente, uma ficha da caixa e anota-se o número. A probabilidade de o produto
dos dois números sorteados ser par é:

a) 33/49
b) 16/49
c) 14/49
d) 4/7
e) 3/7

Comentários:

Para que o produto seja par, um dos dois números (ou ambos) deve ser par. Assim, podemos calcular a
probabilidade de o produto ser par pelo seu complemento, qual seja a probabilidade de o produto ser ímpar:
                               𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 𝑝𝑎𝑟) = 1 − 𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 í𝑚𝑝𝑎𝑟)
Para que o produto seja ímpar, é necessário que ambos os produtos sejam ímpares. Sabendo que há 4
números ímpares {1, 3, 7 e 9}, dentre 7, a probabilidade de selecionar um número ímpar é:
                                                        4
                                                 𝑝𝑖 =
                                                        7
E a probabilidade de ambos os números serem ímpares é o produto (interseção de eventos independentes):
                                                            4 4 16
                                   𝑃 (𝑝𝑟𝑜𝑑𝑢𝑡𝑜 í𝑚𝑝𝑎𝑟) =       × =
                                                            7 7 49
Logo, a probabilidade de o produto ser par é complementar:
                                                             16 33
                                    𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 𝑝𝑎𝑟) = 1 −       =
                                                             49 49
Gabarito: A

40.    (FGV/2021 – IMBEL) Marcela é praticante de tiro ao alvo. Quando ela acerta um tiro no alvo, a
probabilidade de ela acertar o tiro seguinte é de 90%. Quando ela erra um tiro, a probabilidade de ela
acertar o próximo tiro é de 80%. Hoje, Marcela errou o primeiro tiro. A probabilidade de ela acertar o
terceiro tiro é de

a) 80%

b) 84%

c) 86%

d) 88%

e) 90%


---

Comentários:

O enunciado informa que a probabilidade condicional de Marcela acertar um tiro, dado que ela acertou o
tiro anterior é de 90%: 𝑃(𝐴𝑡=1 |𝐴𝑡=0 ) = 0,9; e que a probabilidade condicional de ela acertar um tiro, dado
que ela não acertou o anterior é de 80%: 𝑃 (𝐴𝑡=1 |𝐴̅𝑡=0 ) = 0,8.
Com base nessas informações, podemos calcular as probabilidades complementares, quais sejam de ela não
acertar um tiro, tanto considerando que ela acertou o anterior quanto considerando que ela não acertou o
anterior:
                           𝑃 (𝐴̅𝑡=1 |𝐴𝑡=0 ) = 1 − 𝑃 (𝐴𝑡=1 |𝐴𝑡=0 ) = 1 − 0,9 = 0,1
                           𝑃 (𝐴̅𝑡=1 |𝐴̅𝑡=0 ) = 1 − 𝑃 (𝐴𝑡=1 |𝐴̅𝑡=0 ) = 1 − 0,8 = 0,2
A questão pede a probabilidade de ela acertar o terceiro tiro, dado que ela não acertou o primeiro.
Para isso, devemos considerar que ela pode acertar ou não o segundo tiro, conforme ilustrado a seguir:


               1º tiro                                2º tiro                              3º tiro
                                                                 𝑃 (𝐴̅𝑡=1 |𝐴̅𝑡=0 ) = 0,2     𝐴̅
                            𝑃 (𝐴̅𝑡=1 |𝐴̅𝑡=0 ) = 0,2     𝐴̅
                                                                 𝑃 (𝐴𝑡=1 |𝐴̅𝑡=0 ) = 0,8      𝐴
                 𝐴̅                                              𝑃 (𝐴𝑡=1 |𝐴𝑡=0 ) = 0,1       𝐴̅
                             𝑃 (𝐴𝑡=1 |𝐴̅𝑡=0 ) = 0,8     𝐴
                                                                                             𝐴
                                                                 𝑃 (𝐴𝑡=1 |𝐴𝑡=0 ) = 0,9

Considerando a possibilidade de Marcela não acertar o 2º tiro (seta vermelha, superior), a probabilidade de
ela acertar o 3º tiro é o produto (interseção de eventos):
                                 𝑃 (𝐴𝑡=2 ∩ 𝐴̅𝑡=1 |𝐴̅𝑡=0 ) = 0,2 × 0,8 = 0,16
E considerando a possibilidade de Marcela acertar o 2º tiro (seta preta, inferior), a probabilidade de ela
acertar o 3º tiro é o produto:
                                 𝑃 (𝐴𝑡=2 ∩ 𝐴𝑡=1 |𝐴̅𝑡=0 ) = 0,8 × 0,9 = 0,72
Considerando que são eventos mutuamente excludentes, a probabilidade de ocorrer um OU outro (união) é
a soma:
                               𝑃(𝐴𝑡=2 |𝐴̅𝑡=0 ) = 0,16 + 0,72 = 0,88 = 88%
Gabarito: D

41.    (FGV/2021 – FunSaúde/CE) Em uma urna, há bolas pequenas e bolas grandes, sendo 75% pequenas
e as demais são grandes. Das bolas pequenas, 20% são azuis e as demais são vermelhas e, das bolas
grandes, 60% são azuis e as demais são vermelhas. Retira-se, aleatoriamente, uma bola da urna e constata-
se que ela é azul.

A probabilidade de a bola retirada ser pequena é de


---

a) 20%

b) 25%

c) 30%

d) 40%

e) 50%

Comentários:

Essa questão trabalha com o Teorema de Bayes, pois informa as probabilidades condicionais considerando
os tamanhos como evento a priori e as cores como evento a posteriori; e pede a probabilidade condicional
considerando a cor como evento a priori e o tamanho como evento a posteriori, invertendo, portanto, os
eventos a priori e a posteriori.
                                   𝑃(𝑃𝑞 ∩ 𝐴)             𝑃(𝐴|𝑃𝑞) × 𝑃(𝑃𝑞)
                      𝑃 (𝑃𝑞|𝐴) =             =
                                     𝑃(𝐴)      𝑃(𝐴|𝑃𝑞 ) × 𝑃(𝑃𝑞) + 𝑃(𝐴|𝐺𝑟) × 𝑃(𝐺𝑟)
O enunciado informa que:
   •     75% das bolas são pequenas e as demais são grandes:
                                               𝑃 (𝑃𝑞) = 0,75
                                   𝑃 (𝐺𝑟) = 1 − 𝑃 (𝑃𝑞) = 1 − 0,75 = 0,25
   •     20% das bolas pequenas são azuis: 𝑃 (𝐴|𝑃𝑞 ) = 0,2
   •     60% das bolas grandes são azuis: 𝑃 (𝐴|𝐺𝑟) = 0,6
Substituindo esses resultados na fórmula de Bayes, encontramos condicional de a bola ser azul, dado que é
pequena:
                                      0,2 × 0,75          0,15      0,15 1
                  𝑃(𝑃𝑞 |𝐴) =                          =           =     = = 50%
                               0,2 × 0,75 + 0,6 × 0,25 0,15 + 0,15 0,30 2
Gabarito: E

42.  (FGV/2019 – DPE/RJ) A independência entre os eventos de dado espaço amostral expressa,
matematicamente, uma regra de proporcionalidade entre as medidas de probabilidades.

Tendo em consideração essa abordagem do conceito, é correto afirmar que:

a) para eventos A e B não vazios P(A|B) = 1 – P(B|A);

b) se A é independente de B e B é independente de C, então A é independente de C;

c) se A é independente de B e B é independente de C e C é independente de A, então A, B e C são ditos
coletivamente ou mutuamente independentes;


---

d) se A, B e C são eventos não vazios e independentes dois a dois, então 𝑃 (𝐴 ∩ 𝐵|𝐶 ) = 𝑃 (𝐴). 𝑃(𝐵);

e) se A e B são disjuntos e P(C) > 0, então 𝑃 (𝐴 ∪ 𝐵|𝐶 ) = 𝑃(𝐴|𝐶 ) + 𝑃(𝐵|𝐶).

Comentários:

Essa questão trata do conceito de independência entre eventos. Vamos analisar as alternativas.

Em relação à alternativa A, os eventos P(A|B) e P(B|A) não são complementares. A relação que podemos
traçar entre eles é:

                              𝑃 (𝐴 ∩ 𝐵) = 𝑃 (𝐴|𝐵) × 𝑃(𝐵) = 𝑃(𝐵|𝐴) × 𝑃(𝐴)

                                                          𝑃(𝐵|𝐴) × 𝑃(𝐴)
                                           𝑃 (𝐴 | 𝐵 ) =
                                                              𝑃(𝐵)

Assim, a alternativa A está errada.

Em relação à alternativa B, sendo A independente de B e B independente de C, nada podemos afirmar quanto
à relação entre A e C. A alternativa B está errada.

Em relação à alternativa C, é possível que 3 eventos sejam independentes 2 a 2, porém os três eventos não
serem independentes entre si. Ou seja, é possível ter:

                                           𝑃 (𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)

                                           𝑃(𝐴 ∩ 𝐶 ) = 𝑃(𝐴) × 𝑃(𝐶)

                                           𝑃 (𝐵 ∩ 𝐶 ) = 𝑃(𝐵) × 𝑃(𝐶)

                                      𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) ≠ 𝑃(𝐴) × 𝑃(𝐵) × 𝑃(𝐶)

Em relação à alternativa D, pela definição de probabilidade condicional, temos:

                                                            𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 )
                                          𝑃(𝐴 ∩ 𝐵|𝐶 ) =
                                                                𝑃(𝐶)

Ainda, que A, B e C sejam independentes dois a dois, não é possível garantir que os 3 eventos sejam
independentes. Ou seja, é possível ter:

                                      𝑃 (𝐴 ∩ 𝐵 ∩ 𝐶 ) ≠ 𝑃(𝐴) × 𝑃(𝐵) × 𝑃(𝐶)

Assim, é possível ter:

                                            𝑃(𝐴 ∩ 𝐵 ∩ 𝐶 ) 𝑃(𝐴) × 𝑃(𝐵) × 𝑃(𝐶)
                           𝑃 (𝐴 ∩ 𝐵|𝐶 ) =                ≠
                                               𝑃(𝐶)              𝑃(𝐶)

                                          𝑃 (𝐴 ∩ 𝐵|𝐶 ) ≠ 𝑃(𝐴) × 𝑃(𝐵)


---

Logo, a alternativa D está errada.

Em relação à alternativa E, pela definição de probabilidade condicional, temos:

                                                           𝑃 (𝐴 ∪ 𝐵 ∩ 𝐶 )
                                           𝑃(𝐴 ∪ 𝐵|𝐶 ) =
                                                               𝑃(𝐶)

Sendo A e B disjuntos, temos: 𝑃 (𝐴 ∪ 𝐵 ∩ 𝐶 ) = 𝑃(𝐴 ∩ 𝐶 ) + 𝑃(𝐵 ∩ 𝐶)

Substituindo esse resultado na fórmula da probabilidade condicional, temos:

                                   𝑃(𝐴 ∪ 𝐵 ∩ 𝐶 ) 𝑃(𝐴 ∩ 𝐶 ) + 𝑃(𝐵 ∩ 𝐶) 𝑃(𝐴 ∩ 𝐶 ) 𝑃 (𝐵 ∩ 𝐶 )
                 𝑃 (𝐴 ∪ 𝐵 |𝐶 ) =                =                    =         +
                                      𝑃(𝐶)              𝑃(𝐶)            𝑃(𝐶)       𝑃(𝐶)

Pela definição de probabilidade condicional, temos:

                                               𝑃 (𝐴 ∩ 𝐶 )
                                                          = 𝑃(𝐴|𝐶)
                                                  𝑃(𝐶)

                                               𝑃 (𝐵 ∩ 𝐶 )
                                                          = 𝑃(𝐵|𝐶)
                                                  𝑃(𝐶)

Logo:

                                         𝑃 (𝐴 ∪ 𝐵|𝐶 ) = 𝑃(𝐴|𝐶) + 𝑃(𝐵|𝐶)

Portanto, a alternativa E está correta.

Gabarito: E

43.  (FGV/2019 – DPE/RJ) A e B são dois eventos tais que P[A] = 0,4 e P[B] = 0,8. Os valores mínimo e
máximo da probabilidade condicional P[A|B] são, respectivamente,

a) 0 e 0,4.

b) 0,25 e 0,5.

c) 0,2 e 0,4.

d) 0,4 e 0,5.

e) 0,15 e 0,4.

Comentários:

A probabilidade condicional P(A|B) é dada por:


---

                                                         𝑃(𝐴 ∩ 𝐵)
                                           𝑃 (𝐴 |𝐵 ) =
                                                           𝑃(𝐵)
Como P(B) é fixo, a probabilidade condicional 𝑃 (𝐴|𝐵) será mínima quando a interseção 𝑃(𝐴 ∩ 𝐵) for
mínima; e máxima quando a interseção 𝑃(𝐴 ∩ 𝐵) for máxima.
A interseção máxima ocorre quando o menor evento (A) está totalmente contido no maior evento (B), de
forma que a interseção corresponde ao próprio evento A. Nesse caso, temos:
                                         𝑃 (𝐴 ∩ 𝐵) = 𝑃(𝐴) = 0,4
Portanto, a probabilidade condicional máxima é:
                                                  𝑃(𝐴 ∩ 𝐵) 0,4
                                   𝑃 ( 𝐴 |𝐵 ) =           =     = 0,5
                                                    𝑃(𝐵)    0,8
Para calcular a interseção mínima, vejamos a sua relação com união dos eventos:
                                 𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵)
Podemos observar que a interseção mínima resulta na maior união possível. Como se trata de
probabilidade, o maior valor é 1 (100%). Assim a interseção mínima é:
                                       1 = 0,4 + 0,8 − 𝑃(𝐴 ∩ 𝐵)
                                       𝑃 (𝐴 ∩ 𝐵) = 1,2 − 1 = 0,2
Portanto, a probabilidade condicional mínima é:
                                                  𝑃(𝐴 ∩ 𝐵) 0,2
                                   𝑃 ( 𝐴| 𝐵 ) =           =     = 0,25
                                                    𝑃(𝐵)    0,8
Gabarito: B

44.    (FGV/2019 – Prefeitura de Angra dos Reis/RJ) Uma urna M contém 3 bolas iguais numeradas de 1
a 3 e uma urna N contém 4 bolas iguais numeradas de 4 a 7. Uma bola será sorteada da seguinte maneira:
primeiro será feito um sorteio entre as urnas M e N e, a seguir, será escolhida aleatoriamente uma bola
da urna sorteada previamente. A probabilidade de que seja sorteado o número 7 é

     1
a) 7

     2
b) 7

     3
c) 4

     1
d) 4

     1
e)
     8

Comentários:


---

O enunciado informa que a urna M contém as bolas 1, 2 e 3; e que a urna N contém as bolas 4, 5, 6 e 7.
Informa ainda que primeiro é selecionada uma urna e, depois, é selecionada uma bola da urna sorteada.
Assim, para que o número 7 seja sorteado, é necessário que a urna N seja sorteada E, em seguida, que o 7
ser sorteado. Isso porque o sorteio do 7 depende do sorteio da urna.
Temos, portanto a interseção entre 2 eventos dependentes (N e 7), cuja probabilidade é dada pelo produto:
                                       𝑃 (𝑁 ∩ 7) = 𝑃(𝑁) × 𝑃(7|𝑁)
Sabendo que há 2 urnas a probabilidade de sortear a urna N é:
                                                            1
                                                 𝑃 (𝑁 ) =
                                                            2
Considerando que a urna N contém 4 bolas, a probabilidade de sortear a bola 7, sabendo que a bola N foi
sorteada é:
                                                            1
                                                𝑃 (7|𝑁) =
                                                            4
Logo, a probabilidade de sortear a bola 7 é o produto desses resultados (interseção):
                                                                1 1 1
                                𝑃 (𝑁 ∩ 7) = 𝑃(𝑁) × 𝑃(7|𝑁) =      × =
                                                                2 4 8
Gabarito: E

45.    (FGV/2019 – DPE/RJ) As técnicas de interrogatório utilizadas para identificar se um suspeito está
ou não falando a verdade têm evoluído bastante, mas ainda é impossível saber, ao certo, se um indivíduo
está mentindo (𝜷 = 𝟏) ou não (𝜷 = 𝟎). Um investigador experiente, após um interrogatório, imagina que
a probabilidade de o sujeito estar mentindo é de 80%. Para tentar melhorar sua percepção, ele faz o
suspeito passar pelo detector de mentiras, que acerta em 90% dos casos quando o sujeito é mentiroso,
mas em apenas 60% quando está falando a verdade. O teste do detector deu positivo para a mentira.

Incorporando esse resultado do teste no detector de mentiras, é correto afirmar que:

a) P(Ser mentiroso | Positivo para mentira) = 0,72

b) P(Não mentiroso | Positivo para mentira) = 0,36

c) P(Não mentiroso | Negativo para mentira) = 0,60

d) P(Ser mentiroso | Negativo para mentira) = 0,08

e) P(Não mentiroso | Positivo para mentira) = 0,25

Comentários:


---

A questão trabalha com o Teorema de Bayes, pois informa as probabilidades dos resultados do teste,
condicionadas ao fato de o sujeito ser ou não mentiroso, e pede a probabilidade de o sujeito ser (ou não)
mentiroso, condicionada ao resultado do teste, invertendo os eventos a priori e a posteriori.
O enunciado informa que:
   •   A probabilidade de o sujeito ser mentiroso é de 80%, a qual podemos denotar por P(M) = 0,8.

       Logo, a probabilidade de o sujeito não ser mentiroso é complementar:
                                           ̅ ) = 1 − 𝑃(𝑀) = 1 − 0,8 = 𝟎, 𝟐
                                         𝑷(𝑴
   •   A probabilidade de o detector acertar, dado que o sujeito é mentiroso é de 90%. Considerando que,
       nesse caso, o resultado do teste será positivo, podemos denotar essa probabilidade por P(P|M) =
       0,9.

       O complementar fornece a probabilidade de o teste ser negativo (isto é, não positivo), dado que o
       sujeito é mentiroso (o chamado falso negativo):
                                     ̅ |𝑴) = 1 − 𝑃(𝑃|𝑀 ) = 1 − 0,9 = 𝟎, 𝟏
                                   𝑷(𝑷

   •   A probabilidade de o teste acertar, dado que o sujeito não é mentiroso é de 60%. Considerando que,
       nesse caso, o resultado do teste será negativo (isto é, não positivo), então podemos representá-lo
             ̅ |𝑴
       por 𝑷(𝑷  ̅ ) = 𝟎, 𝟔.

       O seu complementar fornece a probabilidade de o teste ser positivo, dado que o sujeito não é
       mentiroso (o chamado falso positivo):
                                  𝑷(𝑷|𝑴  ̅ ) = 1 − 𝑃(𝑃̅|𝑀
                                                        ̅ ) = 1 − 0,6 = 𝟎, 𝟒


Agora, podemos calcular quaisquer probabilidades condicionais. Passemos à análise das alternativas:
Em relação à alternativa A, a probabilidade de o sujeito ser mentiroso, dado que o resultado foi positivo,
que chamamos de P(M|P) é dado por
                                                       𝑃(𝑃|𝑀) × 𝑃(𝑀)
                               𝑃 (𝑀 |𝑃 ) =
                                                                   ̅ ) × 𝑃(𝑀
                                             𝑃 (𝑃 |𝑀) × 𝑃(𝑀) + 𝑃(𝑃|𝑀       ̅)

Substituindo os valores que conhecemos, temos:
                                            0,9 × 0,8          0,72      0,72
                       𝑃 ( 𝑀 |𝑃 ) =                        =           =      = 0,9
                                      0,9 × 0,8 + 0,4 × 0,2 0,72 + 0,08 0,80
Logo, a alternativa A está errada.
Em relação às alternativas B e E, a probabilidade de o sujeito não ser mentiroso, dado que o resultado foi
positivo, que chamamos de 𝑃 (𝑀   ̅ |𝑃 ), é o complementar da probabilidade que calculamos na letra A (se
preferir, aplique a fórmula de Bayes para essa situação):
                                         ̅ |𝑃) = 1 − 𝑃 (𝑀|𝑃) = 1 − 0,9 = 0,1
                                      𝑃 (𝑀
Logo, as alternativas B e E estão erradas.


---

Em relação à alternativa C, a probabilidade de o sujeito não ser mentiroso, dado que o resultado foi negativo
(isto é, não positivo), que chamamos de 𝑃(𝑀  ̅ |𝑃̅) é, pela fórmula de Bayes:

                                                      𝑃(𝑃̅ |𝑀
                                                            ̅ ) × 𝑃(𝑀
                                                                    ̅)
                                 ̅ |𝑃̅) =
                               𝑃(𝑀
                                            𝑃 (𝑃̅|𝑀) × 𝑃(𝑀) + 𝑃(𝑃̅|𝑀 ̅ ) × 𝑃(𝑀
                                                                             ̅)

Substituindo os valores que conhecemos, temos:
                                          0,6 × 0,2          0,12      0,12
                         ̅ |𝑃̅) =
                       𝑃(𝑀                               =           =      = 0,6
                                    0,1 × 0,8 + 0,6 × 0,2 0,08 + 0,12 0,20
Logo, a alternativa C está certa.
Já temos a nossa resposta, mas vamos calcular o resultado para a alternativa D. A probabilidade de o sujeito
ser mentiroso, dado que o teste deu negativo (não positivo), que chamamos de 𝑃(𝑀|𝑃̅) é o complementar
da probabilidade que calculamos na alternativa C (mas se preferir, pode aplicar a fórmula de Bayes para esse
caso):
                                                      ̅ |𝑃̅ ) = 1 − 0,6 = 0,4
                                    𝑃(𝑀 |𝑃̅) = 1 − 𝑃 (𝑀
Gabarito: C

46.   (FGV/2017 – MPE/BA) Sejam A, B e C eventos aleatórios de um espaço amostral (S), onde A é
independente do evento (BUC) e B é independente de C. Além disso, estão disponíveis as seguintes
informações: P(A) = 3/7, P(B)= 1/6, P(C) = 1/9

Então a probabilidade do evento A ∩ (B U C) é igual a:

  1
a) 5

  2
b) 7

  14
c) 27

  1
d) 9

  4
e) 7

Comentários:

Para encontrar 𝑃(𝐴 ∩ (𝐵 ∪ 𝐶 )), vamos começar calculando a probabilidade da união 𝑃(𝐵 ∪ 𝐶):
                                     𝑃(𝐵 ∪ 𝐶 ) = 𝑃(𝐵) + 𝑃(𝐶 ) − 𝑃(𝐵 ∩ 𝐶)
Sendo B independente de C, então a interseção 𝑃(𝐵 ∩ 𝐶) é o produto das probabilidades:
                                            𝑃(𝐵 ∩ 𝐶 ) = 𝑃(𝐵) × 𝑃(𝐶)


---

Então, a união é dada por:
                                𝑃(𝐵 ∪ 𝐶 ) = 𝑃(𝐵) + 𝑃(𝐶 ) − 𝑃(𝐵) × 𝑃(𝐶)
O enunciado informa que P(B) = 1/6 e P(C) = 1/9. Substituindo esses valores na fórmula da união, temos:
                                        1 1 1 1  9   6   1   14   7
                         𝑃 (𝐵 ∪ 𝐶 ) =    + − × =   +   −   =    =
                                        6 9 6 9 54 54 54 54 27
Agora, calculamos a probabilidade da interseção entre A e (𝐵 ∪ 𝐶 ).
Sabendo que são eventos independentes, então:
                                  𝑃(𝐴 ∩ (𝐵 ∪ 𝐶 )) = 𝑃(𝐴) × 𝑃(𝐵 ∪ 𝐶 )
O enunciado informa que P(A) = 3/7.
Substituindo esse valor e a probabilidade que calculamos para 𝑃 (𝐵 ∪ 𝐶 ), temos:
                                                       3 7   3   1
                                   𝑃(𝐴 ∩ (𝐵 ∪ 𝐶 )) =    ×  =   =
                                                       7 27 27 9
Gabarito: D

47.     (FGV/2017 – TJ/AL) Sabe-se que a probabilidade de condenação em 1ª instância, para certo juízo,
é igual a 1/5, enquanto a probabilidade de que a decisão seja alterada por um recurso é igual a 1/3.

Se, em qualquer caso, as partes estão dispostas a recorrer até a 3ª instância, a probabilidade de que haja
uma absolvição é:

     24
a) 45

     21
b) 45

     20
c) 45

     16
d)
     45


     9
e) 45


Comentários:

A decisão de absolver em 3ª instância depende da decisão da 2ª instância, que, por sua vez, depende da
decisão em 1ª instância.
Pelos dados do enunciado, temos o seguinte:


---

                                                                           1
   •     A probabilidade de condenação em 1ª instância é de 1/5: 𝑃 (𝐶1) = .
                                                                           5


         Logo, a probabilidade de absolvição nessa instância é complementar:
                                                              1 4
                                              𝑃(𝐴1) = 1 −      =
                                                              5 5

   •     A probabilidade de alteração da decisão em um recurso é de 1/3. Logo, a probabilidade de
         manutenção da decisão é complementar: 2/3.


A figura a seguir representa esse problema:

                                                                         3a inst.     P(A3|A2) = 2/3

                                             P(A2|A1) = 2/3           1/3 alteração
                                                                     2/3 manutenção
                                2a inst.

              P(A1) = 4/5    1/3 alteração   P(C2|A1) = 1/3              3a inst.     P(A3|C2) = 1/3
                            2/3 manutenção
       1a inst.                                                       1/3 alteração
                                                                     2/3 manutenção
     4/5 absolvição
    1/5 condenação

              P(C1) = 1/5                    P(A2|C1) = 1/3              3a inst.     P(A3|A2) = 2/3

                                2a inst.                              1/3 alteração
                                                                     2/3 manutenção
                             1/3 alteração
                            2/3 manutenção
                                             P(A2|A1) = 2/3              3a inst.     P(A3|C2) = 1/3

                                                                      1/3 alteração
                                                                     2/3 manutenção

Agora, podemos calcular a probabilidade de absolvição, dada pela união das probabilidades representadas
nos 4 caminhos.
1º caminho (superior): absolvição em todas as instâncias:
                                                              4 2 2 16
                                       𝑃(𝐴1 ∩ 𝐴2 ∩ 𝐴3) =       × × =
                                                              5 3 3 45
2º caminho: absolvição na 1ª instância, condenação na 2ª e absolvição na 3ª :
                                                              4 1 1  4
                                       𝑃(𝐴1 ∩ 𝐶2 ∩ 𝐴3) =       × × =
                                                              5 3 3 45
3º caminho: condenação na 1ª instância, absolvição na 2ª e absolvição na 3ª :


---

                                                         1 1 2  2
                                   𝑃(𝐶1 ∩ 𝐴2 ∩ 𝐴3) =      × × =
                                                         5 3 3 45
4º caminho: condenação na 1ª e 2ª instâncias, e absolvição na 3ª :
                                                         1 2 1  2
                                   𝑃 (𝐶1 ∩ 𝐶2 ∩ 𝐴3) =     × × =
                                                         5 3 3 45
Logo, a probabilidade de absolvição é:
         𝑃 (𝐴) = 𝑃(𝐴1 ∩ 𝐴2 ∩ 𝐴3) + 𝑃(𝐴1 ∩ 𝐶2 ∩ 𝐴3) + 𝑃(𝐶1 ∩ 𝐴2 ∩ 𝐴3) + 𝑃(𝐶1 ∩ 𝐶2 ∩ 𝐴3)
                                               16 4   2   2   24
                                    𝑃 (𝐴 ) =     +  +   +   =
                                               45 45 45 45 45
Gabarito: A

48.    (FGV/2016 – Prefeitura de Paulínia/SP) Em um Departamento de Matemática trabalham seis
professores, cada um com uma especialidade. Dois são especialistas em Álgebra, dois são especialistas em
Geometria e os outros dois em Trigonometria.

Sorteando três professores, a probabilidade de que sejam todos de especialidades diferentes é

  1
a) 2

   1
b) 3

  2
c) 5

   3
d) 8

   3
e) 10


Comentários:

Sabendo que há 6 professores no total, 2 de cada uma das 3 matérias, o primeiro sorteado pode ser qualquer
professor:
                                                       6
                                                𝑃1 =     =1
                                                       6
Para o segundo sorteado, restarão 5 professores, dos quais 4 são de matérias diferentes do primeiro:
                                                         4
                                                  𝑃2 =
                                                         5
Para o terceiro sorteado, restarão 4 professores e somente uma matéria que ainda não foi sorteada.
Sabendo que há 2 professores dessa matéria, a probabilidade de sorteá-los é:


---

                                                        2
                                                 𝑃3 =
                                                        4
Logo, a probabilidade de sortear 3 professores de matérias distintas (interseção de eventos independentes)
é o produto:
                                                  4 2 2
                                             𝑃=    × =
                                                  5 4 5
Gabarito: C


---

49.   (FGV/2016 – IBGE) Suponha que, por coincidência, as 12 pessoas que estão numa sala de espera,
aguardando por uma chamada, nasceram todas no mês de agosto.

Então a probabilidade de que não haja sequer uma coincidência entre os dias do mês de nascimento é de:

       31!
a) 19!(31)12


      31!
b) (31)12


       31!
c) 12!(31)12


      31!
d)
     19!12!


        30!
e)
     12!(30)12

Comentários:

Sabendo que há 31 dias em agosto, a primeira pessoa pode fazer aniversário em qualquer dia:
                                                        31
                                                 𝑃1 =
                                                        31
A segunda pessoa pode fazer aniversário nos 30 dias que restara:
                                                        30
                                                 𝑃2 =
                                                        31
A terceira pessoa pode fazer aniversário nos 29 dias que restaram:
                                                        28
                                                 𝑃3 =
                                                        31
E assim sucessivamente até a 12ª pessoa. Logo, a probabilidade de que ninguém faça aniversário no mesmo
dia (interseção de eventos independentes) é dada pelo produto:
                        31 30 29 28 27 26 25 24 23 22 21 20
                   𝑃=     ×  ×  ×  ×  ×  ×  ×  ×  ×  ×  ×
                        31 31 31 31 31 31 31 31 31 31 31 31
                                                                           31!
Ou seja, no denominador temos (31)12 e o numerador pode ser indicado por 19!. Ou seja:

                                                      31!
                                            𝑃=
                                                 19! × (31)12
Gabarito: A


---

50.    (FGV/2015 – Prefeitura de Niterói/RJ) Uma urna contém apenas bolas brancas e bolas pretas. São
vinte bolas ao todo e a probabilidade de uma bola retirada aleatoriamente da urna ser branca é 1/5.

Duas bolas são retiradas da urna sucessivamente e sem reposição. A probabilidade de as duas bolas
retiradas serem pretas é:

     16
a) 25

     16
b) 19

     12
c) 19

     4
d)
     5

     3
e) 5

Comentários:

A probabilidade de retirar uma bola branca é a razão entre o número de bolas brancas (B) e o número total
de bolas (U).
                                                         𝑛(𝐵)
                                                𝑃(𝐵) =
                                                         𝑛(𝑈)
Sabendo que essa probabilidade é igual a 1/5 e que há 20 bolas no total, temos:
                                                  1 𝑛(𝐵)
                                                    =
                                                  5   20
                                               5 × 𝑛(𝐵) = 20
                                                  𝑛(𝐵) = 4
Logo, o número de bolas pretas é n(P) = 20 – 4 = 16. Assim, a probabilidade de retirar a 1ª bola preta é de:
                                                     𝑛(𝑃) 16 4
                                          𝑃(𝑃1 ) =       =  =
                                                     𝑛(𝑈) 20 5
Considerando que a 1ª bola foi preta, restarão 19 bolas, das quais 15 são pretas. Logo, probabilidade de
retirar a 2ª bola preta, dado que a 1ª bola foi preta, é de:
                                                              15
                                               𝑃(𝑃2 |𝑃1 ) =
                                                              19
Logo, a probabilidade de retirar a 1ª bola preta E a 2ª bola preta (interseção) é o produto:
                                                              4 15 4 × 3 12
                           𝑃(𝑃1 ∩ 𝑃2 ) = 𝑃1 × 𝑃(𝑃2 |𝑃1 ) =     ×   =    =
                                                              5 19   19   19
Gabarito: C


---

                            LISTA DE QUESTÕES – FGV

Definições de Probabilidade

1.     (FGV/2023 – RFB) Uma equipe de trabalho reúne 4 auditores e 6 analistas. Se três pessoas dessa
equipe forem selecionadas aleatoriamente para formar um pequeno grupo de trabalho, a probabilidade
de que esse grupo seja formado por dois analistas e um auditor é igual a

a) 0,2

b) 0,5

c) 0,6

d) 0,7

e) 0,8

2.     (FGV/2022 – MPE/SC) Há evidências de que uma alta pressão sanguínea esteja associada a um
aumento de óbitos por problemas cardiovasculares. Em um estudo foram examinados 3.000 homens com
alta pressão sanguínea e 2.400 homens com baixa pressão. Durante o período do estudo, 12 homens do
grupo de baixa pressão e 30 do grupo de alta pressão faleceram por problemas cardiovasculares.

A chance de morrer por problemas cardiovasculares no grupo de alta pressão é dada, aproximadamente,
por:

a) 0,005

b) 0,01

c) 0,1

d) 0,05

e) 0,5

3.     (FGV/2022 – PC/RJ) Treze cadeiras numeradas consecutivamente de 1 a 13 formam uma fila.
Quatro pessoas devem sentar-se nelas e o número da cadeira em que cada uma deve se sentar será
decidido por sorteio. Para as três primeiras pessoas foram sorteados os números 3, 8 e 11 e será feito o
sorteio para a última cadeira a ser ocupada.

A probabilidade de que a quarta pessoa NÃO se sente ao lado de nenhuma pessoa já sentada é:


---

a) 1/2

b) 1/4

c) 2/5

d) 7/10

e) 4/13

4.     (FGV/2022 – PM/AM) Em uma fila com 12 cadeiras, três delas foram ocupadas aleatoriamente. A
cadeira em que Valter deverá se sentar será sorteada entre as cadeiras que estão vazias.

A probabilidade de que Valter não se sente ao lado de nenhuma pessoa já sentada é, no mínimo:

a) 1/2

b) 1/3

c) 2/3

d) 1/4

e) 1/6

5.     (FGV/2022 – SEMSA Manaus) Lançamos ao acaso dois dados não viciados no chão. Se S é a soma
dos valores obtidos nas faces superiores, então a probabilidade de que S seja maior do 9 é igual a

a) 1/12

b) 1/8

c) 1/6

d) 1/5

e) 1/4

6.     (FGV/2022 – TRT/MA) Dois dados serão lançados aleatoriamente sobre uma mesa e os números
resultantes nas faces superiores serão anotados.


---

Se X é o valor absoluto de diferença entre os dois números, então a probabilidade de que X seja igual a 3
é igual a

a) 1/12

b) 1/8

c) 1/6

d) 1/3

e) 1/2

7.    (FGV/2022 – TRT/PB) Se escolhemos ao acaso um número de três algarismos, a probabilidade de
que seus três algarismos sejam distintos é igual a

a) 46%.

b) 50%.

c) 60%.

d) 72%.

e) 78%.

8.    (FGV/2022 – CBM/RJ) Solange e Marcelo fazem parte de um grupo de 10 pessoas. Sorteiam-se duas
pessoas desse grupo, em sequência e sem reposição.

A probabilidade de Solange ser sorteada e Marcelo não é de:

a) 8/45

b) 1/10

c) 1/5

d) 4/25

e) 3/40


---

9.     (FGV/2022 – CM Taubaté) Em uma urna há 6 bolas numeradas. Retira-se da urna, aleatoriamente,
2 bolas em sequência e sem reposição.

A probabilidade de o maior número nas bolas retiradas ser igual a 4 é

a) 1/2

b) 2/3

c) 1/5

d) 2/5

e) 3/5

10.    (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados, aleatoriamente,
entre os números −3, −2, −1, 0, 1, 2, 3, 4. A probabilidade de que o produto dos dois números sorteados
seja maior do que zero é:

a) 1/2.

b) 9/28.

c) 19/28.

d) 19/56.

e) 23/56.

11.    (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas são
retiradas do saco ao acaso. A probabilidade de que as bolinhas retiradas tenham números consecutivos é,
aproximadamente, igual a:

a) 22%;

b) 28%;

c) 33%;

d) 39%;

e) 45%.


---

12.   (FGV/2022 – TRT/PB) Numa empresa há seis gerentes e quatro superintendentes. Se quatro dessas
pessoas forem selecionadas ao acaso para formar uma comissão de quatro membros, a probabilidade de
que dois gerentes e dois superintendentes sejam escolhidos é aproximadamente igual a

a) 0,43.

b) 0,50.

c) 0,54.

d) 0,59.

e) 0,63.

13.    (FGV/2022 – SEFAZ/AM) Em uma urna há 5 bolas iguais, cada uma com uma letra da sigla SEFAZ.
Todas as bolas têm letras diferentes entre si. Retiram-se, aleatoriamente, 2 bolas da urna.

A probabilidade de que tenham sido retiradas as 2 vogais é de

a) 1/5

b) 2/5

c) 3/5

d) 3/10

e) 1/10

14.    (FGV/2022 – CBM/AM) Uma caixa contém 4 bolas numeradas 1, 2, 3 e 4. Selecionam-se, ao acaso,
2 bolas sem reposição. A probabilidade de 3 ser o maior número selecionado é

a) 1/6

b) 1/4

c) 2/3

d) 1/3

e) 1/2


---

15.   (FGV/2022 – PM/AM) O soldado Garcia vai liderar uma equipe de 3 soldados (ele incluído) para
uma missão. Os outros 2 soldados da equipe serão sorteados aleatoriamente de um grupo de 6 soldados,
sendo que um dos 6 é o soldado Ryan, amigo do soldado Garcia.

A probabilidade de o soldado Ryan ser um dos 2 sorteados é

a) 1/6

b) 1/5

c) 1/4

d) 1/3

e) 1/2

16.   (FGV/2022 – PC/AM) Um dado comum, com as faces numeradas de 1 a 6, é lançado 3 vezes. A
probabilidade de a soma dos 3 números obtidos ser igual a 16 é

a) 1/16

b) 1/18

c) 1/36

d) 1/54

e) 1/108

17.   (FGV/2022 – SSP/AM) Duas urnas A e B têm, cada uma, 26 bolinhas. Em cada urna, cada bolinha
tem uma letra do alfabeto, sem repetição. Retira-se aleatoriamente uma bolinha de cada urna.

A probabilidade de a bolinha sorteada da urna A ter uma letra que, na ordem alfabética, é anterior à letra
sorteada da urna B é

a) 1/2

b) 25/52

c) 13/50

d) 1/3

e) 1/26


---

18.    (FGV/2022 – SEMSA Manaus) Numa vila moram 20 pessoas, das quais 5 são crianças. Se sortearmos
5 pessoas diferentes dessa vila, a probabilidade de que três sejam crianças é aproximadamente igual a

a) 3,4%

b) 6,8%

c) 10,2%

d) 13,6%

e) 20,4%

19.    (FGV/2022 – TJDFT) Um analista realiza três plantões noturnos por semana durante um mês. O
sorteio dos dias da semana é aleatório. Assim, os plantões são selecionados aleatoriamente em quaisquer
dias da semana: domingo, segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado.
Considere sábado e domingo como dias consecutivos. A probabilidade de que o analista não seja escalado
para dias consecutivos é:

a) 3/5

b) 3/7

c) 1/3

d) 1/5

e) 1/7

20.    (FGV/2021 – IMBEL) Quatro pessoas estão sentadas em volta de uma mesa circular. Cada uma delas
possui uma moeda honesta. Em determinado momento, as quatro pessoas lançam as respectivas moedas.
Quem tirar cara deve se levantar e, quem tirar coroa, deve permanecer sentada.

A probabilidade de que não haja duas pessoas adjacentes levantadas é de

a) 7/16

b) 5/16

c) 3/8

d) 1/4

e) 1/2


---

21.    (FGV/2021 – BANESTES) Marcelo joga, simultaneamente, dois dados cúbicos honestos cujas faces
estão numeradas de 1 a 6. A probabilidade de os dois números sorteados serem consecutivos é:

a) 5/18

b) 5/36

c) 1/3

d) 1/9

e) 7/36

22.     (FGV/2021 – Paulínia) Em uma caixa há 2 bolas brancas e 4 bolas pretas. Retirando, ao acaso 2
bolas, a probabilidade de que elas sejam de cores diferentes é de

a) 2/5

b) 5/8

c) 5/9

d) 7/12

e) 8/15

23.    (FGV/2021 – PM/PB) Considere o conjunto {−3; −2; −1; 0; 1; 2; 3}. Sorteiam-se, aleatoriamente sem
reposição, dois elementos desse conjunto.

A probabilidade de a soma dos dois números sorteados ser positiva é:

a) 1/7

b) 2/7

c) 3/7

d) 4/7

e) 5/7


---

24.     (FGV/2021 – TJ/RO) As amigas Alice e Bianca estão entre as 6 pessoas classificadas em um concurso
e esperam a entrevista com a banca examinadora. Os classificados receberão aleatoriamente números de
1 a 6, que determinarão a ordem em que eles serão entrevistados. A probabilidade de que Alice e Bianca
fiquem vizinhas nessa fila é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6

25.     (FGV/2019 – Prefeitura de Angra dos Reis/RJ) Uma pesquisa feita com os alunos de uma sala
mostrou que 7 alunos torcem pelo Flamengo, 6 pelo Vasco, 5 pelo Fluminense, 4 pelo Botafogo e 3 não
torcem por time nenhum. Escolhendo ao acaso um dos alunos dessa turma, a probabilidade de que ele
seja torcedor do Vasco é de

a) 12%

b) 18%

c) 20%

d) 24%

e) 30%

26.    (FGV/2019 – MP/RJ) Entre as pessoas A, B, C, D, E, duas delas serão escolhidas por sorteio para
integrarem o conselho diretor de uma empresa. O diretor da empresa conhece essas cinco pessoas e disse:
“Gostaria que A ou B fossem sorteados, mas não gostaria que D fosse sorteado”. A probabilidade de que
o desejo do diretor da empresa se realize é de:

a) 30%

b) 40%

c) 50%

d) 60%

e) 70%


---

27.   (FGV/2018 – SASDH/RJ) Um dado é lançado duas vezes consecutivas. Considere os seguintes
eventos relativos a esses lançamentos:

       •   A: a soma dos números obtidos é 8;
       •   B: a soma dos números obtidos é 10;
       •   C: a soma dos números obtidos é 12.

Colocando-se esses três eventos em ordem crescente da probabilidade de ocorrência, obtém-se

a) A, B, C;
b) A, C, B;
c) B, C, A;
d) C, A, B;
e) C, B, A.

28.    (FGV/2018 – ALE/RO) Em um grupo de 10 deputados, 6 são do Partido A e 4 são do Partido B. Serão
sorteados 2 desses 10 deputados, aleatoriamente. A probabilidade de os 2 deputados sorteados serem do
Partido B é

  1
a) 5
   2
b) 5
  2
c) 3
   2
d) 9
   2
e) 15

29.     (FGV/2018 – SEPLAG/RJ) Considere todas as senhas formadas por três vogais maiúsculas. São
exemplos dessas senhas: EEE, OIA e UAU. Dentre todas as senhas desse tipo, escolhendo ao acaso uma
delas, a probabilidade de que ela tenha duas letras iguais e uma diferente é de

a) 36%
b) 40%
c) 44%
d) 48%
e) 52%


---

30.    (FGV/2018 – ALE/RO) Em uma caixa há 4 cartões amarelos e 6 cartões vermelhos. Foram retirados,
aleatoriamente, 2 cartões da caixa. A probabilidade de os dois cartões retirados serem vermelhos é de

     1
a) 2

     1
b)
     3

     1
c) 4

     1
d) 5

     1
e) 6

31.    (FGV/2018 – ALE/RO) Uma urna contém 10 bolas numeradas de 1 a 10. Três dessas bolas são
sorteados aleatoriamente. A probabilidade de o produto dos três números sorteados ser ímpar é

     1
a) 12
     1
b) 10
     1
c) 8
     1
d) 4
     1
e) 2

32.    (FGV/2017 – SEPOG/RO) Para uma premiação, dois funcionários de uma empresa serão sorteados
aleatoriamente entre quatro candidatos: dois do departamento A e dois do departamento B. A
probabilidade de os dois funcionários sorteados pertencerem ao mesmo departamento é:

     1
a) 2
     1
b) 3
     1
c) 4
     1
d) 6
     3
e) 4


---

33.    (FGV/2017 – SEFIN/RO) Em cada uma de duas urnas há três bolas: uma vermelha, uma rosa e uma
azul. Sorteiam-se duas bolas, aleatoriamente, uma de cada urna. A probabilidade de as bolas sorteadas
terem cores diferentes é de

  8
a) 9
   7
b) 9
  2
c) 3
   1
d) 2
   1
e) 3

34.     (FGV/2017 – MPE/BA) O Supremo Tribunal Federal é composto por 11 Ministros, sendo um
Presidente. O histórico de decisões indica que, em questões de natureza política, 3 deles votam sempre
da mesma forma, enquanto os outros de maneira contrária. Suponha que uma Turma de 5 juízes será
selecionada ao acaso para a análise de uma questão do tipo já referido. A probabilidade de que o resultado
seja favorável à tese dos minoritários é igual a:

    5        8 2        3 3
a) 𝐶11 . (11) . (11)
       3      2
b) (11) . (9)

       8 2        3 3
c) (11) . (11)
             8      7
d) 1 − (11) . (10)

             2 2
e) 1 − (8)

35.     (FGV/2016 – SME – São Paulo/SP) Um jogo de dados tem por objetivo obter as somas de 1 a 9,
sendo que o jogador pode escolher, em cada jogada, se vai lançar um dado apenas ou os dois dados. Os
participantes vão se revezando no lançamento de dados e, quem conseguir todos aqueles totais em
primeiro lugar, e em qualquer ordem, será o vencedor. Sobre as chances de conseguir determinadas
somas, é correto afirmar que

a) é mais fácil obter o total 6 jogando dois dados do que 3 com apenas um dado
b) é mais fácil obter o total 5 com dois do que com apenas um dado
c) a chance de se obter a soma 8 com dois dados é 5/21
d) as chances de obter 4 com 1 dado é maior do que de se obter 7 com dois dados
e) as chances de se obter 6 é maior se lançarmos apenas um dado.


---

36.    (FGV/2016 – MPE/RJ) A figura abaixo mostra uma mesa retangular com 5 cadeiras representadas
pelos quadradinhos pretos.

Um casal com seus três filhos ocuparão esses cinco lugares e o lugar de cada um será decidido por sorteio.
A probabilidade de que o casal fique junto, ou seja, um ao lado do outro em uma das laterais da mesa é:.

a) 10%

b) 20%

c) 30%

d) 40%

e) 50%

37.    (FGV/2015 – Prefeitura de Niterói/RJ) O quadro a seguir mostra a distribuição das idades dos
funcionários de certa repartição pública:

                                 Faixa de Idade    Número de funcionários
                                     (anos)
                                  20 ou menos                2
                                   De 21 a 30                8
                                   De 31 a 40               12
                                   De 41 a 50               14
                                   Mais de 50                4

Escolhendo ao acaso um desses funcionários, a probabilidade de que ele tenha mais de 40 anos é:

a) 30%

b) 35%

c) 40%

d) 45%

e) 55%


---

                GABARITO
1. LETRA B    14. LETRA D   27. LETRA E
2. LETRA B    15. LETRA D   28. LETRA E
3. LETRA C    16. LETRA C   29. LETRA D
4. LETRA B    17. LETRA B   30. LETRA B
5. LETRA C    18. LETRA B   31. LETRA B
6. LETRA C    19. LETRA D   32. LETRA B
7. LETRA D    20. LETRA A   33. LETRA C
8. LETRA A    21. LETRA A   34. LETRA B
9. LETRA C    22. LETRA E   35. LETRA E
10. LETRA B   23. LETRA C   36. LETRA B
11. LETRA A   24. LETRA B   37. LETRA D
12. LETRA A   25. LETRA D
13. LETRA E   26. LETRA C


---

                            LISTA DE QUESTÕES – FGV

Combinações de Eventos

1.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo

a) Prob(A ∩ B) = Prob(A)Prob(B)

b) Prob(A ∪ B) = Prob(A)Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A ∪ B) = 0

e) Prob(A ∪ B) = 1

2.      (FGV/2022 – SSP/AM) Seis cartas estão em uma caixa; em cada uma delas está escrita uma das seis
letras: A, B, C, D, E, F, e cada letra só aparece uma vez. Retirando da caixa, simultaneamente e ao acaso,
duas cartas, a probabilidade de que as cartas A ou C sejam sorteadas é

a) 1/2

b) 2/5

c) 3/5

d) 7/15

e) 8/15

3.     (FGV/2022 – SEMSA Manaus) Suponha que um professor decida escolher aleatoriamente um
estudante da sua sala de aula para responder a uma pergunta. Considere dois atributos: gênero e cor do
aluno. O conjunto gênero se divide entre mulher e homem. O conjunto cor se divide entre negros e
brancos.

Sabe-se que a proporção de mulheres na sala é de 40%, a proporção de negros é de 60% e a proporção de
mulheres negras é de 24%. Logo, a probabilidade de o aluno escolhido não ser homem branco é igual a

a) 80%

b) 76%


---

c) 54%

d) 46%

e) 24%

4.     (FGV/2022 – TRT/PB) Se A, B e C são eventos tais que P[A] = 0,4, P[B] = 0,5 e P[C] = 0,6, então os
valores mínimo e máximo de P[A ∩ B ∩ C] valem, respectivamente.

a) 0 e 0,4.
b) 0,1 e 0,3.
c) 0,3 e 0,4.
d) 0,2 e 0,3.
e) 0,1 e 0,4.

5.    (FGV/2021 – CREAS) Gabi e Luana têm, cada uma delas, 3 bolas coloridas: uma branca, uma azul e
uma vermelha. Há 3 caixas e Gabi e Luana colocam, cada uma delas de forma aleatória e independente,
uma bola em cada caixa. A probabilidade de pelo menos uma caixa ter ficado com 2 bolas da mesma cor é

a) 1/2
b) 1/3
c) 1/4
d) 2/3
e) 3/4

6.     (FGV/2017 – Prefeitura de Salvador/BA) Entre as pessoas A, B, C, D e E, será sorteada uma comissão
de três membros. A probabilidade de que A e B estejam na comissão ou de que C esteja na comissão, é de:

a) 60%
b) 64%
c) 72%
d) 75%
e) 80%


---

7.    (FGV/2017 – SEFIN-RO) Dois eventos A e B têm probabilidades iguais a 70% e 80%. Os valores
mínimo e máximo da probabilidade da interseção de A e B são

a) 30% e 50%

b) 20% e 70%

c) 20% e 50%

d) 50% e 70%

e) 0% e 70%


---

              GABARITO
1. LETRA C   4. LETRA A   7. LETRA D
2. LETRA C   5. LETRA D
3. LETRA B   6. LETRA E


---

                            LISTA DE QUESTÕES – FGV

Axiomas de Probabilidade

1.     (FGV/2017 – SEFIN-RO) Júlia e Laura são irmãs e fazem parte de um grupo de 5 meninas. Desse
grupo, três serão sorteadas para um passeio.

A probabilidade de que uma das irmãs seja sorteada e a outra não seja sorteada é de.

a) 80%

b) 70%

c) 50%

d) 40%

e) 60%

2.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo:

a) Prob(A ∩ B) = Prob(A).Prob(B)

b) Prob(A U B) = Prob(A).Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A U B) = 0

e) Prob(A U B) = 1


---

              GABARITO
1. LETRA E   2. LETRA C


---

                            LISTA DE QUESTÕES – FGV

Probabilidade Condicional

1.     (FGV/2023 – RFB) Ana vai passar o fim de semana em sua casa de praia. A previsão do tempo diz
que a probabilidade de chuva no sábado é de 30%, e a probabilidade de chuva no domingo é de 40%.

Nesse caso, a probabilidade de que Ana consiga ir à praia no fim de semana sem pegar chuva é de

a) 46%

b) 55%

c) 63%

d) 88%

e) 92%

2.     (FGV/2023 – BANESTES) A figura a seguir ilustra duas urnas onde estão depositadas bolas brancas
e pretas.

Um dado comum e honesto será lançado. Se o resultado desse lançamento for 1, 2, 3 ou 4, uma bola será
sorteada, ao acaso, da Urna 1. Se o resultado do lançamento for 5 ou 6, uma bola será sorteada, ao acaso,
da Urna 2. Nessas condições, após o lançamento aleatório do dado e a subsequente extração ao acaso da
bola de uma das urnas, a probabilidade de que essa bola seja preta

a) é maior que 55%

b) está entre 45% e 55%

c) está entre 35% e 45%

d) está entre 25% e 35%

e) é menor que 25%


---

3.     (FGV/2023 – BANESTES) Uma seguradora trabalha com 2 tipos de seguros de saúde: um básico e
outro não básico (porque inclui alguns itens adicionais). Ontem, ela vendeu dois seguros. Admitindo que
são iguais as probabilidades de venda de seguros básicos e não básicos, a probabilidade condicional de
que um desses seguros seja básico, dado que o outro era não básico, é igual a

a) 1/4.

b) 1/3.

c) 1/2.

d) 2/3.

e) 3/4.

4.     (FGV/2023 – BANESTES) Considere o lançamento de um dado equilibrado (ou seja, todas as seis
faces do dado têm a mesma chance). Se o número de pontos obtidos for no máximo 5, diz-se que o evento
X ocorreu. Se o número de pontos obtidos for par, diz-se que o evento Y ocorreu. A probabilidade
condicional de X dado Y é igual a

a) 1/2

b) 2/3

c) 2/5

d) 1/3

e) 5/6

5.     (FGV/2023 – RFB) A partida decisiva Maiorais x Geniais envolve uma grande incógnita. O goleiro
Pegatudo, dos Geniais, está machucado, e a probabilidade de sua presença em campo é de 60%. Das
últimas 10 partidas entre as equipes com Pegatudo no gol, os Geniais ganharam 7 e perderam 3. Porém,
nas últimas 4 vezes em que Pegatudo esteve ausente, os Maiorais venceram 3 e só perderam 1. Usando
esses dados, a probabilidade que os Geniais saiam vencedores do confronto é estimada em

a) 76%

b) 68%

c) 60%

d) 58%

e) 52%


---

6.      (FGV/2023 – TCE/ES) Um certo tipo de componente eletrônico tem 0,2% de chance de chegar
adulterado em uma fábrica. Um equipamento testa e detecta quando o componente é adulterado com
probabilidade de 90% de acerto e indica a inexistência de adulteração com probabilidade de 98% de
acerto.

Supondo que o teste foi aplicado em um componente e que o resultado foi positivo para adulteração, a
probabilidade de esse componente ser realmente adulterado é, aproximadamente, de:

a) 0,2%

b) 2%

c) 8%

d) 18%

e) 48%

7.     (FGV/2023 – BANESTES) Para determinado teste que visa a diagnosticar a presença de defeitos em
placas utilizadas na montagem de celulares, as seguintes afirmações estão corretas:

   •      a probabilidade de o teste indicar a presença de defeitos, quando na realidade eles estão ausentes,
          é de 5%;
   •      a probabilidade de o teste indicar a ausência de defeitos, quando na realidade eles estão presentes,
          é de 20%.

Esse teste será aplicado a uma determinada placa sorteada ao acaso no estoque de uma fábrica de placas,
no qual 10% das placas produzidas apresentam defeitos.

A probabilidade condicional de que a placa seja realmente defeituosa, dado que o resultado do teste
acusou a presença de defeito, é igual a

a) 8%

b) 16%

c) 32%

d) 64%

e) 80%


---

8.      (FGV/2023 – BANESTES) Em relação a probabilidade de eventos, avalie se as afirmativas a seguir
são falsas (F) ou verdadeiras (V).

( ) Segundo o enfoque frequentista, a probabilidade de ocorrência de um evento A é igual ao quociente
entre o número de elementos que estão em A e o número total de elementos no espaço amostral.
( ) Dois eventos mutuamente excludentes são necessariamente independentes entre si.
( ) Se a probabilidade condicional de um evento A dado um evento B é igual à probabilidade de B ocorrer,
então A e B são independentes.

As afirmativas são, respectivamente,

a) F - F - F

b) F - V - V

c) V - V - F

d) V - F - F

e) F - V - F

9.     (FGV/2022 – SEMSA Manaus) Se A e B são dois eventos quaisquer com probabilidades maiores do
que zero, avalie se as afirmativas a seguir são falsas (F) ou verdadeiras (V).

I. Se A e B são independentes então são mutuamente exclusivos.

II. Se P[A] = 0,5 e P[B] = 0,8 então o menor valor possível de P[A ∪ B] é 0,8.

III. Se A e B são mutuamente exclusivos então não são independentes

As afirmativas são respectivamente

a) F, F e F

b) V, V e F

c) F, V e V

d) V, F e V

e) V, V e V


---

10.   (FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A
probabilidade condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6.

Assim, a probabilidade de que A ou B ocorram é igual a

a) 0,56

b) 0,60

c) 0,76

d) 0,82

e) 0,94

11.   (FGV/2022 – TCE/TO) Dois eventos A e B têm probabilidades iguais a 0,5 e 0,6, respectivamente. A
probabilidade condicional de A ocorrer dado que B ocorre é igual a 0,8.

Assim, a probabilidade de B ocorrer dado que A ocorre é igual a:

a) 0,96

b) 0,82

c) 0,54

d) 0,36

e) 0,24

12.   (FGV/2022 – SEMSA Manaus) Suponha que um estatístico jogue dois dados não viciados. Ele
informa que os números observados são pares. Logo, a probabilidade de que a soma deles seja 6 é

a) 1/6

b) 2/3

c) 1/3

d) 2/9

e) 1/2


---

13.    (FGV/2022 – SEMSA Manaus) A urna I contém quatro bolas brancas e seis pretas; a urna II contém
quatro bolas brancas e cinco pretas. Sorteamos uma bola da urna I e a colocamos na urna II. Em seguida,
sorteamos uma bola da urna II. A probabilidade de que essa segunda bola sorteada seja branca é igual a

a) 0,24

b) 0,30

c) 0,36

d) 0,40

e) 0,44

14.    (FGV/2022 – SEMSA Manaus) Suponha que temos cinco salas cujas portas estão numeradas de 1 a
5. Sabemos que cada sala contém 5 pessoas, e que o número de mulheres na sala i é igual a i, i = 1,..,5.
Assim, por exemplo, a sala 2 contém duas mulheres e três homens. Selecionamos ao acaso uma sala e
depois selecionamos ao acaso uma pessoa dessa sala. Verificamos então que a pessoa sorteada é uma
mulher. A probabilidade de que ela estivesse na sala 5 é igual a

a) 1/6

b) 1/3

c) 2/5

d) 3/5

e) 4/5

15.    (FGV/2022 – SEAD/AP) Uma urna contém 3 bolas azuis e 2 bolas verdes. Bolas são retiradas da urna,
aleatoriamente, uma de cada vez e sem reposição até que as 3 bolas azuis sejam retiradas ou até que as 2
bolas verdes sejam retiradas (o que ocorrer primeiro). A probabilidade de que as 3 bolas azuis sejam
retiradas é igual a

a) 1/2

b) 1/3

c) 2/3

d) 2/5

e) 3/5


---

16.    (FGV/2022 – SEFAZ/BA) Luana e Vanessa estão brincando de “par ou ímpar” da seguinte maneira:
elas escondem as mãos, uma delas escolhe “par” e a outra escolhe “ímpar” e, depois, ao mesmo tempo,
cada uma delas mostra uma de suas mãos com 1, 2, 3, 4 ou 5 dedos estendidos. Se o total de dedos
estendidos das duas for “par” ganha a que escolheu “par”. Caso contrário, ganha a que escolheu “ímpar”.
Luana escolher “par” e Vanessa escolheu “ímpar”. É correto afirmar que

a) as duas têm a mesma probabilidade de ganhar.

b) a probabilidade de Luana ganhar é maior do que a de Vanessa.

c) a probabilidade de Vanessa ganhar é maior do que a de Luana.

                                     2
d) a probabilidade de Luana ganhar é 5.

                                          2
e) a probabilidade de Vanessa ganhar é 5.

17.    (FGV/2022 – TJ/TO) Bárbara escreveu cada uma das 13 letras da palavra PROBABILIDADE em 13
cartões que foram colocados em uma urna. Depois, Bárbara retirou em sequência 2 cartões da urna, sem
reposição. A probabilidade de que Bárbara tenha retirado os 2 cartões com a letra B é:

a) 1/78

b) 1/39

c) 1/26

d) 2/13.

e) 1/13.

18.    (FGV/2022 – MPE/SC) ALESSANDRA escreveu em 10 cartões diferentes cada uma das 10 letras do
seu nome e colocou esses cartões em uma urna. A seguir, ela retirou, aleatoriamente e em sequência, 3
cartões da urna. A probabilidade de que ALESSANDRA tenha retirado os 3 cartões com a letra “A” é:

a) 1/120

b) 7/120

c) 1/40

d) 3/10.

e) 3/7.


---

19.   (FGV/2022 – MPE/SC) Duas urnas A e B têm, cada uma, 9 bolas numeradas. Na urna A, há 4 bolas
com números ímpares e 5 bolas com números pares. Na urna B, há 5 bolas com números ímpares e 4 bolas
com números pares. Retira-se aleatoriamente uma bola de cada urna. A probabilidade de que o produto
dos números das bolas retiradas seja par é:

a) 1/2.

b) 4/9.

c) 5/9.

d) 20/81.

e) 61/81.

20.    (FGV/2022 – SEMSA Manaus) Em uma disputa de pênaltis, quando um time acerta uma cobrança
de pênalti, a probabilidade de que esse time acerte a cobrança seguinte é de 70% e, quando um time perde
uma cobrança de pênalti, a probabilidade de que esse time também perca a próxima cobrança é de 80%.
Se o time A acertou a primeira cobrança, a probabilidade de que esse time perca a sua terceira cobrança
é

a) 45%

b) 50%

c) 55%

d) 60%

e) 70%

21.    (FGV/2022 – EPE) Uma determinada fábrica produz dois tipos de cabos elétricos, digamos M e N,
nas proporções 4/10 e 6/10, respectivamente. A probabilidade de ocorrência de uma falha no cabo tipo
M é de 5%, e no cabo tipo N, é de 10%. Retirou-se, ao acaso, um cabo produzido na fábrica, e verificou-se
que o cabo tinha falha. Assim, a probabilidade de que esse cabo seja do tipo M é

a) 0,25

b) 0,30

c) 0,33

d) 0,40

e) 0,50.


---

22.   (FGV/2022 – Pref. Paulínia) Em uma urna há bolas amarelas e bolas não amarelas. Nessa urna,
algumas bolas são numeradas e outras não. Nenhuma bola é não amarela e não numerada. Sorteando-se
                                                                   𝟐
uma bola amarela dessa urna, a probabilidade de ela ser numerada é 𝟕. Sorteando-se uma bola numerada
                                                𝟐
dessa urna, a probabilidade de ela ser amarela é 𝟓. Sorteando-se aleatoriamente uma bola dessa urna, a
probabilidade de ela ser amarela e numerada é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6

23.   (FGV/2022 – CBM/AM) Márcia tem uma ficha amarela, uma ficha verde e duas vermelhas. Joana
tem duas fichas amarelas e uma ficha verde. Cada uma delas escolhe aleatoriamente uma de suas fichas e
mostra para a outra. A probabilidade de que as fichas mostradas tenham a mesma cor é:

a) 1/12

b) 1/7

c) 1/6

d) 1/4

e) 1/3

24.    (FGV/2022 – MPE/GO) Em uma determinada cidade, se chover em um dia a probabilidade de
chover no dia seguinte é 60%. Se não chover em um dia, a probabilidade de chover no dia seguinte é 10%.
Hoje não choveu nessa cidade. A probabilidade de não chover depois de amanhã é de

a) 90%

b) 85%

c) 81%

d) 76%

e) 72%


---

25.    (FGV/2022 – TCE/TO) Uma urna contém inicialmente 5 bolas brancas e 3 bolas pretas. Suponha
que, inicialmente, uma primeira bola seja sorteada, sua cor observada, e que essa bola seja devolvida à
urna juntamente com duas outras bolas da mesma cor. Em seguida, outra bola será sorteada, sua cor,
observada, e essa bola será devolvida à urna juntamente com outras duas da mesma cor. Em seguida, será
sorteada uma terceira bola. Suponha ainda, que, a cada sorteio, todas as bolas na urna sejam igualmente
prováveis de serem sorteadas. A probabilidade de que as três bolas sorteadas sejam pretas é então,
aproximadamente, igual a:

a) 0,05

b) 0,07

c) 0,09

d) 0,11

e) 0,13

26.     (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2 há 10
alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido e conduzido à
sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é aleatoriamente escolhido.
A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a

a) 0,42

b) 0,47

c) 0,50

d) 0,53

e) 0,55

27.    (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] = 𝟎, 𝟐 e
𝑷[𝑩] = 𝟎, 𝟓. A probabilidade condicional 𝑷[𝑨|𝑩] e as probabilidades 𝑷[𝑨 ∪ 𝑩] e 𝑷[𝑨 ∩ 𝑩] valem
respectivamente

a) 0,2; 0,6; 0,1

b) 0,1; 0,6; 0,2

c) 0,2; 0,3; 0,1

d) 0,2; 0,5; 0,1

e) 0,1; 0,6; 0,1


---

28.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
probabilidades P[A] > 0 e P[B] > 0, são falsas (F) ou verdadeiras (V):

   I.     Se A e B são mutuamente exclusivos então não são independentes.
  II.     Se A e B são independentes então P[A∩B] > 0.
 III.     Se A e B não são independentes, então P[A|B] ≠ P[A].

As afirmativas são respectivamente

a) V, V e F

b) V, F e F

c) F, F e F

d) F, V e V

e) V, V e V

29.     (FGV/2022 – TRT/PB) Considere o experimento de se lançar aleatoriamente dois dados. Sejam A, B
e C os eventos:

     •    A = o resultado do primeiro dado é ímpar.
     •    B = o resultado do segundo dado é ímpar.
     •    C = a soma dos dois resultados é ímpar.

Avalie então se as seguintes afirmativas estão corretas:

     I. A e B são independentes.
     II. A e C são independentes.
     III. A, B e C são independentes.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

30.    (FGV/2022 – Senado Federal) Uma peça é colocada inicialmente na casa 1 de um tabuleiro
composto de dez casas, numeradas de 1 a 10. A peça avança uma casa se um número par é obtido no
lançamento de um dado. Caso o número obtido seja ímpar, a peça avança duas casas. O procedimento é
repetido sucessivamente. A probabilidade de a peça saltar a casa 8, indo direto para a casa 9, é de


---

a) 13/128.

b) 23/128.

c) 33/128.

d) 43/128.

e) 53/128.

31.     (FGV/2021 – Paulínia) Um grupo de especialistas utiliza técnicas estatísticas para quantificar a
incerteza de eventos esportivos. Ao apurar as chances de cada equipe chegar à final de um importante
campeonato de futebol, os especialistas concluem que a probabilidade de que os times X e Y joguem a
partida decisiva é de 3/7 e 2/7, respectivamente, enquanto a probabilidade de que ambos estejam na final
é 1/7. Sabendo que o time X está classificado para a partida final, a probabilidade dessa equipe enfrentar
o time Y é de

a) 1/7

b) 1/3

c) 4/7

d) 2/3

e) 6/7

32.     (FGV/2021 – FunSaúde/CE) Em um grupo de pessoas de uma pequena cidade, 30 acessam o site A
e 24 acessam o site B. Alguns acessam os dois sites. Sorteando ao acaso uma das pessoas que acessam o
site A, a probabilidade de que ela também acesse o site B é 60%.

Sorteando ao acaso uma das pessoas que acessam o site B, a probabilidade de que ela também acesse o
site A é:

a) 25%

b) 40%

c) 50%

d) 60%

e) 75%


---

33.    (FGV/2021 – FunSaúde/CE) Dois eventos A e B são tais que P[A] = 0,8, P[B] = 0,5 e P[A|B]= 0,4.
Assim, a probabilidade condicional P[B|A] é igual a

a) 15%

b) 25%

c) 30%

d) 40%

e) 50%

34.       (FGV/2021 – FunSaúde/CE) Se A e B são eventos possíveis, avalie as afirmativas a seguir.

I. Se A e B são mutuamente exclusivos então são independentes.
II. Se P[A] = 0,5 e P[B] = 0,7 então P[A∩B] não pode ser igual a 0,4.
III. Se A e B são independentes então podem ser mutuamente exclusivos.

Está correto o que se afirma em

a) se nenhuma alternativa estiver correta

b) I, apenas

c) II, apenas

d) I e III, apenas

e) I, II e III

35.     (FGV/2021 – FunSaúde/CE) Dois eventos independentes A e B têm probabilidades respectivas
iguais a 0,4 e 0,5. A probabilidade de A ∪ B ocorrer é igual a

a) 0,5

b) 0,6

c) 0,7

d) 0,8

e) 0,9


---

36.    (FGV/2021 – Paulínia) Duas crianças jogam par ou ímpar. Nesse jogo, um dos participantes escolhe
“par” e o outro fica com “ímpar”. Em seguida, e simultaneamente, mostram 1, 2, 3, 4, ou 5 dedos de uma
mão. A soma dos números de dedos será par ou ímpar, e fica decidido o vencedor.

A probabilidade de que o jogador que escolhe “impar” ganhe o jogo é de

a) 0,46

b) 0,48

c) 0,50

d) 0,52

e) 0,54

37.    (FGV/2021 – FunSaúde/CE) Em uma população, 10% das pessoas têm uma dada comorbidade. Se
quatro pessoas forem aleatoriamente sorteadas, com reposição, dessa população, a probabilidade de que
ao menos uma apresente a referida comorbidade é, aproximadamente, igual a

a) 0,34

b) 0,42

c) 0,54

d) 0,66

e) 0,78

38.    (FGV/2021 – PC/RN) Em um campeonato de futebol, quando o TIMEX joga em casa, a probabilidade
de ele ganhar o jogo é de 60%, mas quando ele joga fora de casa, a probabilidade de ele ganhar o jogo é
de 50%. Nos próximos três jogos do campeonato, o TIMEX jogará dois em casa e um fora de casa. A
probabilidade de o TIMEX ganhar pelo menos um desses três jogos é:

a) 30%

b) 50%

c) 75%

d) 92%

e) 95%


---

39.     (FGV/2021 – FunSaúde/CE) Em uma caixa há 7 fichas numeradas com 1, 3, 4, 6, 7, 8, 9. Retira-se
aleatoriamente uma ficha da caixa, anota-se o número e a mesma é, então, recolocada na caixa. A seguir,
retira-se, também aleatoriamente, uma ficha da caixa e anota-se o número. A probabilidade de o produto
dos dois números sorteados ser par é:

a) 33/49

b) 16/49

c) 14/49

d) 4/7

e) 3/7

40.    (FGV/2021 – IMBEL) Marcela é praticante de tiro ao alvo. Quando ela acerta um tiro no alvo, a
probabilidade de ela acertar o tiro seguinte é de 90%. Quando ela erra um tiro, a probabilidade de ela
acertar o próximo tiro é de 80%. Hoje, Marcela errou o primeiro tiro. A probabilidade de ela acertar o
terceiro tiro é de

a) 80%

b) 84%

c) 86%

d) 88%

e) 90%

41.    (FGV/2021 – FunSaúde/CE) Em uma urna, há bolas pequenas e bolas grandes, sendo 75% pequenas
e as demais são grandes. Das bolas pequenas, 20% são azuis e as demais são vermelhas e, das bolas
grandes, 60% são azuis e as demais são vermelhas. Retira-se, aleatoriamente, uma bola da urna e constata-
se que ela é azul. A probabilidade de a bola retirada ser pequena é de

a) 20%

b) 25%

c) 30%

d) 40%

e) 50%


---

42.    (FGV/2019 – DPE/RJ) A independência entre os eventos de dado espaço amostral expressa,
matematicamente, uma regra de proporcionalidade entre as medidas de probabilidades. Tendo em
consideração essa abordagem do conceito, é correto afirmar que:

a) para eventos A e B não vazios P(A|B) = 1 – P(B|A);

b) se A é independente de B e B é independente de C, então A é independente de C;

c) se A é independente de B e B é independente de C e C é independente de A, então A, B e C são ditos
coletivamente ou mutuamente independentes;

d) se A, B e C são eventos não vazios e independentes dois a dois, então 𝑃 (𝐴 ∩ 𝐵|𝐶 ) = 𝑃 (𝐴). 𝑃(𝐵);

e) se A e B são disjuntos e P(C) > 0, então 𝑃 (𝐴 ∪ 𝐵|𝐶 ) = 𝑃(𝐴|𝐶 ) + 𝑃(𝐵|𝐶).

43.  (FGV/2019 – DPE/RJ) A e B são dois eventos tais que P[A] = 0,4 e P[B] = 0,8. Os valores mínimo e
máximo da probabilidade condicional P[A|B] são, respectivamente,

a) 0 e 0,4.

b) 0,25 e 0,5.

c) 0,2 e 0,4.

d) 0,4 e 0,5.

e) 0,15 e 0,4.

44.    (FGV/2019 – Prefeitura de Angra dos Reis/RJ) Uma urna M contém 3 bolas iguais numeradas de 1
a 3 e uma urna N contém 4 bolas iguais numeradas de 4 a 7. Uma bola será sorteada da seguinte maneira:
primeiro será feito um sorteio entre as urnas M e N e, a seguir, será escolhida aleatoriamente uma bola
da urna sorteada previamente. A probabilidade de que seja sorteado o número 7 é

  1
a) 7

   2
b) 7

  3
c) 4

   1
d) 4

   1
e) 8


---

45.    (FGV/2019 – DPE/RJ) As técnicas de interrogatório utilizadas para identificar se um suspeito está
ou não falando a verdade têm evoluído bastante, mas ainda é impossível saber, ao certo, se um indivíduo
está mentindo (𝜷 = 𝟏) ou não (𝜷 = 𝟎). Um investigador experiente, após um interrogatório, imagina que
a probabilidade de o sujeito estar mentindo é de 80%. Para tentar melhorar sua percepção, ele faz o
suspeito passar pelo detector de mentiras, que acerta em 90% dos casos quando o sujeito é mentiroso,
mas em apenas 60% quando está falando a verdade. O teste do detector deu positivo para a mentira.

Incorporando esse resultado do teste no detector de mentiras, é correto afirmar que:

a) P(Ser mentiroso | Positivo para mentira) = 0,72

b) P(Não mentiroso | Positivo para mentira) = 0,36

c) P(Não mentiroso | Negativo para mentira) = 0,60

d) P(Ser mentiroso | Negativo para mentira) = 0,08

e) P(Não mentiroso | Positivo para mentira) = 0,25

46.   (FGV/2017 – MPE/BA) Sejam A, B e C eventos aleatórios de um espaço amostral (S), onde A é
independente do evento (BUC) e B é independente de C. Além disso, estão disponíveis as seguintes
informações: P(A) = 3/7, P(B)= 1/6, P(C) = 1/9

Então a probabilidade do evento A ∩ (B U C) é igual a:

     1
a) 5

     2
b)
     7

     14
c) 27

     1
d)
     9

     4
e)
     7

47.     (FGV/2017 – TJ/AL) Sabe-se que a probabilidade de condenação em 1ª instância, para certo juízo,
é igual a 1/5, enquanto a probabilidade de que a decisão seja alterada por um recurso é igual a 1/3.

Se, em qualquer caso, as partes estão dispostas a recorrer até a 3ª instância, a probabilidade de que haja
uma absolvição é:

     24
a) 45


---

     21
b)
     45

     20
c) 45

     16
d) 45

     9
e) 45

48.    (FGV/2016 – Prefeitura de Paulínia/SP) Em um Departamento de Matemática trabalham seis
professores, cada um com uma especialidade. Dois são especialistas em Álgebra, dois são especialistas em
Geometria e os outros dois em Trigonometria.

Sorteando três professores, a probabilidade de que sejam todos de especialidades diferentes é

     1
a) 2

     1
b)
     3

     2
c) 5

     3
d) 8

     3
e) 10

49.    (FGV/2016 – IBGE) Suponha que, por coincidência, as 12 pessoas que estão numa sala de espera,
aguardando por uma chamada, nasceram todas no mês de agosto. Então a probabilidade de que não haja
sequer uma coincidência entre os dias do mês de nascimento é de:

          31!
a) 19!(31)12

         31!
b) (31)12

          31!
c) 12!(31)12

         31!
d) 19!12!

          30!
e) 12!(30)12


---

50.    (FGV/2015 – Prefeitura de Niterói/RJ) Uma urna contém apenas bolas brancas e bolas pretas. São
vinte bolas ao todo e a probabilidade de uma bola retirada aleatoriamente da urna ser branca é 1/5.

Duas bolas são retiradas da urna sucessivamente e sem reposição. A probabilidade de as duas bolas
retiradas serem pretas é:

     16
a) 25

     16
b) 19

     12
c) 19

     4
d)
     5

     3
e) 5


---

                GABARITO
1. LETRA D    19. LETRA E   37. LETRA A
2. LETRA B    20. LETRA A   38. LETRA D
3. LETRA D    21. LETRA A   39. LETRA A
4. LETRA B    22. LETRA D   40. LETRA D
5. LETRA E    23. LETRA D   41. LETRA E
6. LETRA C    24. LETRA B   42. LETRA E
7. LETRA D    25. LETRA A   43. LETRA B
8. LETRA A    26. LETRA B   44. LETRA E
9. LETRA C    27. LETRA A   45. LETRA C
10. LETRA D   28. LETRA E   46. LETRA D
11. LETRA A   29. LETRA B   47. LETRA A
12. LETRA D   30. LETRA D   48. LETRA C
13. LETRA E   31. LETRA B   49. LETRA A
14. LETRA B   32. LETRA E   50. LETRA C
15. LETRA D   33. LETRA B
16. LETRA B   34. LETRA A
17. LETRA A   35. LETRA C
18. LETRA A   36. LETRA B


---
