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
arquivo_origem: Aula 07_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: Estatística
---

# Estatística

Aula 06
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                            21 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 06

                                                                                     Índice
1) Introdução - Probabilidade.


2) Noções Iniciais sobre Probabilidade.


3) Definição Clássica de Probabilidade.


4) Probabilidade Condicional.


5) Questões Comentadas - Probabilidade Conceitos Iniciais - FGV


6) Questões Comentadas - Definição Clássica de Probabilidade - FGV


7) Questões Comentadas - Combinações de Eventos e Probabilidade - FGV


8) Questões Comentadas - Probabilidade Condicional - FGV


9) Lista de Questões - Probabilidade Conceitos Iniciais FGV


10) Lista de Questões - Definição Clássica de Probabilidade - FGV


11) Lista de Questões - Combinações de Eventos e Probabilidade - FGV


12) Lista de Questões - Probabilidade Condicional - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           85

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

        Receita Federal (Analista Tributário) Estatística                                                 3
        www.estrategiaconcursos.com.br                                                                   85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                           PROBABILIDADE

Conceitos Iniciais

A Teoria da Probabilidade é o ramo da Estatística que estuda experimentos e fenômenos aleatórios, cujos
resultados são incertos, como o lançamento de um dado ou de uma moeda e sorteios.

Embora os resultados sejam incertos, se tais experimentos ou fenômenos são repetidos muitas vezes, é
possível encontrar certo padrão em seus resultados. Se lançarmos uma moeda comum muitas vezes
esperamos que, em torno de metade das vezes, a face superior seja cara e, na outra metade, coroa.

Espaço Amostral

O Espaço Amostral ou Universo (U) é o conjunto de todos os resultados possíveis. Por exemplo, no
lançamento de um dado (com 6 faces), o Espaço Amostral é o conjunto:

                                                  U = {1, 2, 3, 4, 5, 6}

Evento

Um evento é todo e qualquer subconjunto do Espaço Amostral. No lançamento de um dado, podemos
chamar de evento A que representa resultados pares. Portanto, o evento A é o subconjunto:

                                                      A = {2, 4, 6}

Observamos que o evento A apresenta 3 elementos, o que podemos representar como:

                                                        n(A) = 3

        Receita Federal (Analista Tributário) Estatística                                            4
        www.estrategiaconcursos.com.br                                                              85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                           DEFINIÇÃO DE PROBABILIDADE
Pela definição clássica, a probabilidade de um evento A ocorrer é a razão entre o número de elementos do
Evento (casos favoráveis) e o número de elementos do Espaço Amostral (total de casos possíveis):

                                               𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠          𝑛(𝐴)
                                𝑃(𝐴) =                                         =
                                             𝑛ú𝑚𝑒𝑟𝑜 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠       𝑛(𝑈)

Por exemplo, no lançamento de um dado, o Espaço Amostral é:

                                                  U = {1, 2, 3, 4, 5, 6}

Assim, o número de elementos do Espaço Amostral é 𝒏(𝑼) = 𝟔

Considerando que o evento A corresponde às faces pares, temos:

                                                      A = {2, 4, 6}

E o número de elementos do evento A é 𝒏(𝑨) = 𝟑.

Portanto, a probabilidade de o evento A ocorrer é:

                                                        𝑛(𝐴) 3
                                               𝑃(𝐴) =       = = 0,5
                                                        𝑛(𝑈) 6

        Para utilizar a definição clássica, há uma condição crucial: todos os elementos do Espaço
        Amostral devem ser igualmente prováveis.

        Se tivermos, por exemplo, uma moeda viciada, em que a probabilidade de cair CARA é
        maior que a probabilidade de cair COROA, não poderemos utilizar a definição clássica.

Da definição clássica, conclui-se que a probabilidade de todo o Espaço Amostral é igual a 1:

                                                            𝑛(𝑈)
                                                  𝑃(𝑈) =         =1
                                                            𝑛(𝑈)

Acrescente-se que não há probabilidade negativa, ou seja, a probabilidade de um evento A qualquer é:

                                                     0 ≤ 𝑃(𝐴) ≤ 1

        Receita Federal (Analista Tributário) Estatística                                              5
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 06

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
O número de torcedores do Vasco é n(V) = 6.
Logo, a probabilidade desejada é:
                                                       6
                                                𝑃=       = 0,24 = 24%
                                                      25
Gabarito: D.


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

         Receita Federal (Analista Tributário) Estatística                                            6
         www.estrategiaconcursos.com.br                                                              85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Comentários:
A probabilidade de escolher uma bala com recheio de chocolate é a razão entre o número de balas com
recheio de chocolate (casos favoráveis) e o número de balas no total (casos totais):
                                                𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝑅𝐶)
                                          𝑃=                       =
                                                  𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
O enunciado informa que há 60 balas, logo, n(U) = 60.
As balas com recheio de chocolate são as balas de leite e as balas de frutas, ou seja, todas as balas exceto as
balas de café. Sabendo que há 15 balas de café, o número de balas com recheio de chocolate é:
                                                    n(RC) = 60 – 15 = 45
Logo, a probabilidade desejada é:
                                                               45 3
                                                         𝑃=      =
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
Comentários:
Os casos favoráveis correspondem às pessoas que tiveram dengue. A tabela mostra que o número de pessoas
que tiveram dengue é:
                                                       n(D) = 1 + 2 = 3
O enunciado informa que, no total, 120 pessoas participaram da pesquisa, logo o número total de casos
possíveis é n(U) = 120. Assim, a probabilidade desejada é:
                                             𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠    3   1
                                   𝑃(𝐷) =                     =    =   = 2,5%
                                               𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠     120 40
Gabarito: A.

           Receita Federal (Analista Tributário) Estatística                                                7
           www.estrategiaconcursos.com.br                                                                   85

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 06

Algumas questões de probabilidade exigem que aplicações de técnicas de análise combinatória, para
calcular o número de elementos do evento e/ou o número de elementos do Espaço Amostral.

(FGV/2019 – Prefeitura de Salvador/BA) Entre 6 deputados, 3 do Partido A e 3 do Partido B, serão sorteados
2 para uma comissão. A probabilidade de os 2 deputados sorteados serem do Partido A é de:
  1
a) 2
   1
b) 3
                                                             ==219a34==

  1
c) 4
   1
d) 5
   1
e) 6
Comentários:
A probabilidade é a razão entre o número de casos favoráveis e o número de casos totais:
                                               𝑛(𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠) 𝑛(𝐴)
                                         𝑃=                       =
                                                 𝑛(𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠)    𝑛(𝑈)
Os casos totais são as maneiras de escolher 2 deputados, dentre todos os 6 (sem importância de ordem):
                                                    6!         6 × 5 × 4! 6 × 5
                            𝑛(𝑈) = 𝐶6,2 =                    =           =      = 15
                                               (6 − 2)! × 2!     4! × 2!    2
Os casos favoráveis são as maneiras de escolher 2 deputados, dentre os 3 do Partido A (também sem
importância de ordem):
                                                            3!        3 × 2!
                                    𝑛(𝐴) = 𝐶3,2 =                   =        =3
                                                       (3 − 2)! × 2! 1! × 2!
Logo, a probabilidade desejada é:
                                                                           3   1
                                                       𝑃=                    =
                                                                          15 5
Gabarito: D.


(CESPE/2017 – PM-MA) Uma operação policial será realizada com uma equipe de seis agentes, que têm
prenomes distintos, entre eles André, Bruno e Caio. Um agente será o coordenador da operação e outro, o
assistente deste; ambos ficarão na base móvel de operações nas proximidades do local de realização da
operação. Nessa operação, um agente se infiltrará, disfarçado, entre os suspeitos, em reunião por estes
marcada em uma casa noturna, e outros três agentes, também disfarçados, entrarão na casa noturna para
prestar apoio ao infiltrado, caso seja necessário.


         Receita Federal (Analista Tributário) Estatística                                               8
         www.estrategiaconcursos.com.br                                                                  85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A respeito dessa situação hipotética, julgue o item seguinte.
Se os dois agentes que ficarão na base móvel forem escolhidos aleatoriamente, a probabilidade de André e
Bruno serem os escolhidos será superior a 30%.
Comentários:
Os casos totais correspondem a todas as maneiras de escolher um coordenador e um assistente, dentre 6
agentes. Considerando que os cargos são distintos, temos um arranjo de 2 elementos, dentre 6:
                                                      6!      6 × 5 × 4!
                                𝑛(𝑈) = 𝐴6,2 =               =            = 6 × 5 = 30
                                                   (6 − 2)!       4!
Os casos favoráveis correspondem às maneiras de escolher André e Bruno como coordenador e assistente,
em qualquer ordem. Podemos ter André como coordenador e Bruno como assistente OU Bruno como
coordenador e Bruno como assistente. Logo, há 2 possibilidades: n(A) = 2. Assim, a probabilidade é:
                                                         2   1
                                                  𝑃=       =   ≅ 6,7%
                                                        30 15
Que é inferior a 30%.
Gabarito: Errado.


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
O Espaço Amostral corresponde a todas as possibilidades de se ordenar 10 elementos:
                                                    𝑛(𝑈) = 𝑃10 = 10!
Os casos favoráveis correspondem às possibilidades de se escolher 2 postos de saúde, dentre 4, sendo a
ordem relevante (arranjo), E de escolher a ordem dos outros 8 elementos (permutação).
Pelo princípio multiplicativo (eventos concomitantes), temos:
                                                              4!
                                       𝑛(𝐴) = 𝐴4,2 × 8! =        × 8! = 4 × 3 × 8!
                                                              2!
A probabilidade desejada é, portanto:
                                          𝑛(𝐴) 4 × 3 × 8!   4×3      2    2
                                𝑃(𝐴) =         =          =       =     =
                                          𝑛(𝑈)    10!       10 × 9 5 × 3 15
Gabarito: A

          Receita Federal (Analista Tributário) Estatística                                            9
          www.estrategiaconcursos.com.br                                                              85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                            PROBABILIDADE CONDICIONAL
A probabilidade condicional representa a probabilidade de um evento ocorrer, sabendo que outro já ocorreu
(ou dado que outro já ocorreu).

Por exemplo, vamos supor que, em um auditório, existam enfermeiros e dentistas, tanto homens quanto
mulheres, conforme indicado na tabela a seguir.

                                                   Homens       Mulheres          Totais
                                  Enfermeiros         40          50                90
                                   Dentistas          80          30               110
                                     Totais          120          80               200

A probabilidade condicional de uma pessoa escolhida aleatoriamente ser enfermeiro (𝐸), sabendo que é
homem (𝐻), que representamos como 𝑃(𝐸|𝐻), corresponde à razão entre a probabilidade (ou número de
elementos) da interseção e a probabilidade (ou número de elementos) do evento que sabemos ter ocorrido:

                                                            𝑷(𝑬∩𝑯)       𝒏(𝑬∩𝑯)
                                          𝑷(𝑬|𝑯) =                   =
                                                             𝑷(𝑯)         𝒏(𝑯)

Para o nosso exemplo, o número de homens é 𝑛(𝐻) = 120 e o número de enfermeiros homens (interseção)
é 𝑛(𝐸 ∩ 𝐻) = 40. Assim, a probabilidade condicional de ser enfermeiro dado que é homem:

                                                       𝑛(𝐸 ∩ 𝐻)   40   1
                                          𝑃(𝐸|𝐻) =              =    =
                                                         𝑛(𝐻)     120 3

(VUNESP/2019 – Prefeitura da Estância Balneária de Peruíbe/SP) O gráfico a seguir apresenta dados
referentes a homens e mulheres que se inscreveram para prestar um concurso para trabalhar em uma
instituição pública. Entre os candidatos, alguns já tinham emprego.

        Receita Federal (Analista Tributário) Estatística                                             10
        www.estrategiaconcursos.com.br                                                                85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Um desses candidatos foi escolhido aleatoriamente. Sabendo-se que esse candidato não tem emprego, a
probabilidade de que ele seja homem é:
a) 2/9
b) 4/9
c) 2/5
d) 1/5
e) 3/8
Comentários:
A questão pede a probabilidade condicional de o candidato ser homem, dado que não tem emprego. Essa
probabilidade é a razão entre a probabilidade (ou número de elementos) da interseção e a probabilidade (ou
número de elementos) do evento que sabemos ter ocorrido:
                                                       𝑃(𝐻 ∩ 𝐸̅ ) 𝑛(𝐻 ∩ 𝐸̅ )
                                          𝑃(𝐻|𝐸̅ ) =             =
                                                         𝑃(𝐸̅ )     𝑛(𝐸̅ )
Pelo gráfico, observamos que o número de homens sem emprego é 𝑛(𝐻 ∩ 𝐸̅ ) = 80.
O gráfico informa também que o número de mulheres sem emprego é de 100. Logo, o número total de
candidatos sem emprego é 𝑛(𝐸̅ ) = 80 + 100 = 180.
Assim, a probabilidade desejada é:
                                                               80   4
                                                  𝑃(𝐻|𝐸̅ ) =      =
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
A probabilidade condicional de uma mulher ser da família Russel (MR), dado que não é uma mulher da família
       ̅̅̅̅
Gödel (𝑀  𝐺 ) é dada por:

                                                     𝑃(𝑀𝑅 ∩ ̅̅̅̅
                                                             𝑀𝐺 ) 𝑛(𝑀𝑅 ∩ ̅̅̅̅
                                                                          𝑀𝐺 )
                                           ̅̅̅̅
                                     𝑃(𝑀𝑅 |𝑀  𝐺) =               =
                                                         ̅̅̅̅
                                                       𝑃(𝑀𝐺 )         ̅̅̅̅
                                                                    𝑛(𝑀𝐺 )


         Receita Federal (Analista Tributário) Estatística                                             11
         www.estrategiaconcursos.com.br                                                                85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Nesse caso, a interseção entre as mulheres da família Russel e as pessoas que não são mulheres da família
Gödel corresponde às mulheres da família Russel: 𝑛(𝑀𝑅 ∩ ̅̅̅̅
                                                          𝑀𝐺 ) = 𝑛(𝑀𝑅 ). Assim:
                                                                    𝑛(𝑀𝑅 )
                                                          ̅̅̅̅
                                                    𝑃(𝑀𝑅 |𝑀  𝐺) =     ̅̅̅̅
                                                                    𝑛(𝑀  𝐺)

No denominador, temos o número de pessoas que não são mulheres da família Gödel:
                                                ̅̅̅̅
                                              𝑛(𝑀  𝐺 ) = 5 + 7 + 6 + 5 + 5 = 28

No numerador, temos o número de mulheres da família Russel: 𝑛(𝑀𝑅 ) = 5.
Logo, a probabilidade é:
                                                         5
                                                  𝑃=       ≅ 18% < 20%
                                                        28
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
Para resolver a essa questão, vamos preencher uma tabela com a quantidade de homens e mulheres, que
ganham mais ou menos que 5 SM. O enunciado informa que há 180 homens e 220 mulheres, no total; e que
30% de todos os 400 funcionários ganham mais que 5 SM, o que corresponde a 400 × 30% = 120. Portanto,
280 ganham menos que 5 SM. Ademais, 160 mulheres ganham menos que 5 SM, logo:

Agora, podemos calcular probabilidade condicional de a pessoa ganhar mais que 5SM, dado que é homem:
                                                        𝑃(𝑀𝑎 ∩ 𝐻) 𝑛(𝑀𝑎 ∩ 𝐻)
                                         𝑃(𝑀𝑎|𝐻) =               =
                                                          𝑃(𝐻)      𝑛(𝐻)
O número de homens é n(H) = 180; e o número de homens que ganham mais que 5SM é 𝑛(𝑀𝑎 ∩ 𝐻) = 60.
Logo, a probabilidade condicional desejada é:
                                                          𝑛(𝑀𝑎 ∩ 𝐻)   60   1
                                           𝑃(𝑀𝑎|𝐻) =                =    =
                                                            𝑛(𝐻)      180 3
Gabarito: C


           Receita Federal (Analista Tributário) Estatística                                          12
           www.estrategiaconcursos.com.br                                                             85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Teorema da Multiplicação

O Teorema da Multiplicação fornece a probabilidade da interseção, a partir da probabilidade condicional. A
sua fórmula pode ser obtida reorganizando a fórmula da probabilidade condicional:

                                                            𝑃(𝐴 ∩ 𝐵)
                                                 𝑃(𝐵|𝐴) =
                                                              𝑃(𝐴)

                                            𝑷(𝑨 ∩ 𝑩) = 𝑷(𝑩|𝑨) × 𝑷(𝑨)

Para o nosso exemplo anterior, podemos calcular a probabilidade da interseção de enfermeiros homens,
pelo produto da probabilidade condicional (enfermeiro dado homem) pela probabilidade do evento que
sabemos ter ocorrido (homem):

                                            𝑃(𝐸 ∩ 𝐻) = 𝑃(𝐸|𝐻) × 𝑃(𝐻)

Para calcular a probabilidade de selecionar um homem, vejamos novamente a tabela anterior:

                                                   Homens     Mulheres     Totais
                                  Enfermeiros         40        50           90
                                   Dentistas          80        30          110
                                     Totais          120        80          200

Sabendo que há 𝑛(𝐻) = 120 homens e um total de 𝑛(𝑈) = 200 pessoas, temos:

                                                        𝑛(𝐻) 120 3
                                              𝑃(𝐻) =        =   =
                                                        𝑛(𝑈) 200 5

Considerando que a probabilidade condicional de ser enfermeiro, dado que foi selecionado um homem é
          1
𝑃(𝐸|𝐻) = 3 , como calculamos anteriormente, então a probabilidade da interseção é dada por:

                                                            1 3 1
                                               𝑃(𝐸 ∩ 𝐻) =    × =
                                                            3 5 5

Que é justamente o resultado que obtemos, pela definição clássica de probabilidade, quando consideramos
que há 𝑛(𝐸 ∩ 𝐻) = 40 enfermeiros homens, de um total de 𝑛(𝑈) = 200 pessoas:

                                                        𝑛(𝐸 ∩ 𝐻)   40   1
                                         𝑃(𝐸 ∩ 𝐻) =              =    =
                                                          𝑛(𝑈)     200 5

        Receita Federal (Analista Tributário) Estatística                                              13
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

(FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A probabilidade
condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6. Assim, a probabilidade de que A ou B ocorram é
igual a
a) 0,56
b) 0,60
c) 0,76
d) 0,82
e) 0,94
Comentários:
Para calcular a probabilidade da união (A OU B), precisamos da probabilidade da interseção. Essa
probabilidade pode ser calculada, a partir da probabilidade condicional, utilizando o Teorema da
Multiplicação. Sabendo que 𝑃(𝐴|𝐵) = 0,6 e 𝑃(𝐵) = 0,8, temos
                                  𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴|𝐵) × 𝑃(𝐵) = 0,6 × 0,8 = 0,48
Conhecendo as probabilidades 𝑃(𝐴) = 0,5, 𝑃(𝐵) = 0,8 e 𝑃(𝐴 ∩ 𝐵) = 0,48, podemos calcular a
probabilidade da união:
                        𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,5 + 0,8 − 0,48 = 0,82
Gabarito: D


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
A probabilidade de o sistema não se interromper pode ser calculada pela probabilidade complementar de
ele se interromper:
                                                     𝑃(𝐼 )̅ = 1 − 𝑃(𝐼)


          Receita Federal (Analista Tributário) Estatística                                           14
          www.estrategiaconcursos.com.br                                                              85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Para o sistema se interromper, é necessário que a máquina M1 falhe E que a máquina M2 falhe. Logo, temos
a interseção desses eventos:
                                                 𝑃(𝐼) = 𝑃(𝐹1 ∩ 𝐹2)
Como a máquina 2 é condicionada à falha da máquina 1, podemos calcular a probabilidade dessa interseção
pelo Teorema da Multiplicação:
                                         𝑃(𝐹1 ∩ 𝐹2) = 𝑃(𝐹2|𝐹1) × 𝑃(𝐹1)
O enunciado informa que a probabilidade de tanto uma quanto outra falhar é de 1/20:
                                            1     1    1
                                         𝑃(𝐼) =
                                              ×     =    = 0,0025
                                           20 20 400
E a probabilidade de o sistema não interromper é complementar:
                              𝑃(𝐼 )̅ = 1 − 𝑃(𝐼) = 1 − 0,0025 = 0,9975 = 99,75%
Gabarito: A.

Independência de Eventos

Eventos independentes são aqueles que não influenciam uns nos outros. Por exemplo, o resultado do
lançamento de um dado em nada influencia o resultado de outro lançamento.

Para esses eventos, a probabilidade condicional é igual à probabilidade não condicional, ou seja, se 𝐴 e 𝐵
são eventos independentes, temos:

                                   𝑃(𝐵|𝐴) = 𝑃(𝐵)            𝑒    𝑃(𝐴|𝐵) = 𝑃(𝐴)

        Se dois eventos são independentes, os seus complementares também são independentes,
        ou seja, se 𝐴 e 𝐵 são independentes, então 𝐴, 𝐴̅, 𝐵 e 𝐵̅ são todos independentes entre si.

Consequentemente, a probabilidade da interseção de eventos independentes é igual ao produto das
probabilidades:

                                            𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐵|𝐴) × 𝑃(𝐴)

                                             𝑷(𝑨 ∩ 𝑩) = 𝑷(𝑩) × 𝑷(𝑨)

        Receita Federal (Analista Tributário) Estatística                                              15
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Por exemplo, a probabilidade de obter a face 3 no 1º lançamento de um dado (evento A), com probabilidade
𝑃(𝐴) = 1/6, E a face 4 no 2º lançamento (evento B), com probabilidade 𝑃(𝐵) = 1/6, é o produto:

                                                                         1 1  1
                                     𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐵) × 𝑃(𝐴) =             × =
                                                                         6 6 36

Essa propriedade vale para qualquer quantidade de eventos. Se 𝐴, 𝐵 e 𝐶 são eventos independentes, então
a probabilidade da interseção é o produto das probabilidades:

                                      𝑃(𝐴 ∩ 𝐵 ∩ 𝐶) = 𝑃(𝐵) × 𝑃(𝐴) × 𝑃(𝐶)


                                                            ==219a34==

        Algumas questões pedem a probabilidade da forma “pelo menos um”, ou da união de
        diversos eventos, em que será mais simples calcular a probabilidade complementar.

(CESPE/2019 – TJ/AM) Em um espaço de probabilidades, as probabilidades de ocorrerem os eventos
independentes A e B são, respectivamente, P(A) = 0,3 e P(B) = 0,5.
Nesse caso, P(A⋂B) = 0,15.
Comentários:
Sendo A e B eventos independentes, a probabilidade da interseção é o produto das probabilidades:
                                              𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)
Sendo P(A) = 0,3 e P(B) = 0,5, então:
                                           𝑃(𝐴 ∩ 𝐵) = 0,3 × 0,5 = 0,15
Gabarito: Certo.


(CESPE/2019 – TJ/AM) Em um espaço de probabilidades, as probabilidades de ocorrerem os eventos
independentes A e B são, respectivamente, P(A) = 0,3 e P(B) = 0,5.
Nesse caso, P(B|A) = 0,2.
Comentários:


        Receita Federal (Analista Tributário) Estatística                                            16
        www.estrategiaconcursos.com.br                                                               85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Para eventos independentes, a probabilidade condicionada é igual à probabilidade não condicionada:
                                                   𝑃(𝐵|𝐴) = 𝑃(𝐵) = 0,5
Gabarito: Errado.


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
                                              𝑃(𝐴1 ∩ 𝐴2 ) = 𝑃(𝐴1 ) × 𝑃(𝐴2 )
A probabilidade de acerto é 90%, ou seja, 𝑃(𝐴1 ) = 𝑃(𝐴2 ) = 90%. Logo, a probabilidade da interseção é:
                                           𝑃(𝐴1 ∩ 𝐴2 ) = 90% × 90% = 81%
Gabarito: C


(VUNESP/2019 – Prefeitura de Cerquilho/SP) Em uma prova de múltipla escolha de língua chinesa, cada
uma das 5 questões tem 4 alternativas. A probabilidade de uma pessoa acertar todas as questões, sem
conhecer a língua, e escolhendo, aleatoriamente, uma alternativa em cada questão, é
       1
a) 1024
       1
b) 512
   1
c) 256
   1
d) 20
  1
e) 4
Comentários:
A probabilidade de acertar todas as questões, escolhendo aleatoriamente as respostas, corresponde à
interseção de acertar cada uma das questões. Sabendo que há 4 alternativas, a probabilidade de acertar
uma questão é:
                                                                   1
                                                          𝑃(𝐴) =
                                                                   4


           Receita Federal (Analista Tributário) Estatística                                          17
           www.estrategiaconcursos.com.br                                                             85

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 06

Assim, a probabilidade de acertar as 5 questões, considerando que são eventos independentes, é o produto:
                                                                              1 1 1 1 1   1
        𝑃(𝐴1 ∩ 𝐴2 ∩ 𝐴3 ∩ 𝐴4 ∩ 𝐴5 ) = 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) × 𝑃(𝐴) =        × × × × =
                                                                              4 4 4 4 4 1024
Gabarito: A.


(VUNESP/2019 – UNICAMP/SP) Dentre os bebedores de cerveja, sabe-se que 1/3 preferem a marca A. Se
três deles são escolhidos ao acaso, a probabilidade de que nenhum deles preferem a marca A é
   1
a) 27
  5
b) 9
   8
c) 27
  2
d) 9
  2
e) 3
Comentários:
                 1
Sabendo que 3 dos bebedores preferem a marca A, então a probabilidade de escolher um bebedor que não
prefira é complementar:
                                                   1 2
                                                     = 𝑃 = 1−
                                                   3 3
Considerando que a escolha de um bebedor independe da escolha de outro, então, escolhendo 3 bebedores
ao acaso, a probabilidade de que nenhum dos 3 bebedores prefira a marca A corresponde à interseção dos
eventos (produto das probabilidades):
                                                               2 2 2  8
                                               𝑃×𝑃×𝑃 =          × × =
                                                               3 3 3 27
Gabarito: C.


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
Comentários:

           Receita Federal (Analista Tributário) Estatística                                          18
           www.estrategiaconcursos.com.br                                                             85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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
                                    𝑃(𝑖𝑚𝑢𝑛𝑖𝑧𝑎𝑑𝑜) = 1 − 0,25 = 0,75 = 75%
Gabarito: C

Teorema da Probabilidade Total

O Teorema da Probabilidade Total permite calcular a probabilidade total (não condicionada) de um evento,
quando conhecemos as probabilidades condicionais desse evento.

Por exemplo, suponha que, em um banco, o nível de inadimplência dos pagadores do grupo A (melhores
pagadores) seja 1%; o nível de inadimplência dos pagadores do grupo B seja 5%; e o nível de inadimplência
dos pagadores do grupo C (piores pagadores) seja de 10%.

Além disso, suponha que o grupo A represente 50% dos pagadores; o grupo B represente 30%; e o grupo C
represente 20%. Com base nesses valores, podemos calcular a probabilidade total de inadimplência, ou seja,
a probabilidade de inadimplência de um cliente qualquer, sem saber a que grupo ele pertence.

Para isso, consideramos que a probabilidade do evento I (inadimplência) está “espalhada” nos três grupos,
ou seja, temos os inadimplentes do grupo A, os inadimplentes do grupo B e os inadimplentes do grupo C,
como representado a seguir.

                                A                                              B

                                                            I

                                                                               C

        Receita Federal (Analista Tributário) Estatística                                               19
        www.estrategiaconcursos.com.br                                                                  85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A probabilidade total de inadimplência é a soma dos inadimplentes de cada grupo, ou seja, a soma das
interseções de I com os grupos A, B e C:

                                      𝑷(𝑰) = 𝑷(𝑰 ∩ 𝑨) + 𝑷(𝑰 ∩ 𝑩) + 𝑷(𝑰 ∩ 𝑪)

Agora, aplicamos o Teorema da Multiplicação para cada interseção e, assim, obtemos o Teorema da
Probabilidade Total:

                          𝑷(𝑰) = 𝑷(𝑰|𝑨) × 𝑷(𝑨) + 𝑷(𝑰|𝑩) × 𝑷(𝑩) + 𝑷(𝑰|𝑪) × 𝑷(𝑪)

Nesse exemplo, temos P(A) = 0,5, P(B) = 0,3, P(C) = 0,2, P(I|A) = 0,01, P(I|B) = 0,05 e P(I|C) = 0,1. Logo, a
probabilidade de um cliente qualquer ser inadimplente é:

              𝑃(𝐼) = 0,5 × 0,01 + 0,3 × 0,05 + 0,2 × 0,1 = 0,005 + 0,015 + 0,02 = 0,04 = 4%

Essa relação vale para qualquer número de eventos. Se houvesse apenas 2 classificações de clientes, 𝐴 e 𝐴̅,
a probabilidade total 𝑃(𝐼) seria dada por:

                                                                ̅ ) × 𝑷(𝑨
                                     𝑷(𝑰) = 𝑷(𝑰|𝑨) × 𝑷(𝑨) + 𝑷(𝑰|𝑨       ̅)

(CESPE/2015 – DEPEN) As probabilidades dos eventos aleatórios A = “o infrator é submetido a uma pena
alternativa” e B = “o infrator reincide na delinquência” são representadas, respectivamente, por P(A) e P(B).
Os eventos complementares de A e B são denominados, respectivamente, 𝐴̅ e 𝐵̅. Considerando P(A) = 0,4, e
as probabilidades condicionais 𝑃(𝐵|𝐴̅) = 0,3 e 𝑃(𝐵|𝐴) = 0,1, julgue o item a seguir.
P(B) ≤ 0,2.
Comentários:
Vamos calcular a probabilidade não condicionada do evento B, pelo Teorema da Probabilidade Total:
                                     𝑃(𝐵) = 𝑃(𝐵|𝐴) × 𝑃(𝐴) + 𝑃(𝐵|𝐴̅) × 𝑃(𝐴̅)
O enunciado informa que 𝑃(𝐴) = 0,4; 𝑃(𝐵|𝐴) = 0,1 e 𝑃(𝐵|𝐴̅) = 0,3.
Ademais, sabendo que 𝑃(𝐴) = 0,4, o seu complementar é:
                                         𝑃(𝐴̅) = 1 − 𝑃(𝐴) = 1 − 0,4 = 0,6
Substituindo esses valores, temos:
                               𝑃(𝐵) = 0,1 × 0,4 + 0,3 × 0,6 = 0,04 + 0,18 = 0,22
Esse resultado é maior que 0,2: 𝑃(𝐵) > 0,2.
Gabarito: Errado.


         Receita Federal (Analista Tributário) Estatística                                                  20
         www.estrategiaconcursos.com.br                                                                     85

                                       


---

    Equipe Exatas Estratégia Concursos
    Aula 06

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
A probabilidade de a lâmpada não queimar antes de 1000h é complementar à probabilidade de ela queimar
antes de 1000h:
                                                    𝑃(𝑄̅ ) = 1 − 𝑃(𝑄)
O enunciado informa que:
•    10% das lâmpadas fabricadas por A queimam antes de 1000h: P(Q|A) = 0,1;
•    5% das lâmpadas fabricadas por B queimam antes de 1000h: P(Q|B) = 0,05;
•    1% das lâmpadas fabricadas por C queimam antes de 1000h: P(Q|C) = 0,01;
•    20% das lâmpadas são fabricadas por A: P(A) = 0,2;
•    30% das lâmpadas são fabricadas por B: P(B) = 0,3;
•    50% das lâmpadas são fabricadas por C: P(C) = 0,5.

Pelo Teorema da Probabilidade Total, temos:
                          𝑃(𝑄) = 𝑃(𝑄|𝐴) × 𝑃(𝐴) + 𝑃(𝑄|𝐵) × 𝑃(𝐵) + 𝑃(𝑄|𝐶) × 𝑃(𝐶)
                 𝑃(𝑄) = 0,1 × 0,2 + 0,05 × 0,3 + 0,01 × 0,5 = 0,02 + 0,015 + 0,005 = 0,04
Portanto, a probabilidade de a lâmpada não queimar é complementar:
                                         𝑃(𝑄̅ ) = 1 − 𝑃(𝑄) = 1 − 0,04 = 0,96
Gabarito: D


(FCC/2016 – Analista Judiciário do TRT 11ª Região) Um determinado órgão público recebe mensalmente
processos que devem ser analisados por 2 analistas: A e B. Sabe-se que esses dois analistas recebem a mesma
proporção de processos para a análise. Sabe-se que 20% de todos os processos encaminhados para A são
analisados no mês de recebimento e que 10% são indeferidos. Sabe-se também que 40% dos processos
encaminhados para B são analisados no mês de recebimento e que 20% são indeferidos.

          Receita Federal (Analista Tributário) Estatística                                             21
          www.estrategiaconcursos.com.br                                                                85

                                        


---

    Equipe Exatas Estratégia Concursos
    Aula 06

Um processo recebido em determinado mês é selecionado ao acaso. A probabilidade de ele ser deferido
naquele mesmo mês é igual a
a) 0,245
b) 0,350
c) 0,500
d) 0,420
e) 0,250
Comentários:
Pela probabilidade total, a probabilidade de um processo ser deferido no mesmo mês é:
                                      𝑃(𝐷) = 𝑃(𝐷|𝐴) × 𝑃(𝐴) + 𝑃(𝐷|𝐵) × 𝑃(𝐵)
Sabemos que P(A) = P(B). Como P(A) + P(B) = 1, então P(A) = P(B) = 0,5.
Além disso, sabemos que a probabilidade de o processo ser deferido no mesmo mês é o complementar de
ele ser indeferido no mesmo mês.
O enunciado informa que:
•    20% dos processos de A são analisados no mês e 10% deles são indeferidos. Ou seja, 90% dos processos
     analisados no mês por A são deferidos:
                                                𝑃(𝐷|𝐴) = 0,2 × 0,9 = 0,18
•    40% dos processos de B são analisados no mês e 20% deles são indeferidos. Ou seja, 80% dos processos
     analisados no mês por B são deferidos:
                                               𝑃(𝐷|𝐵) = 0,4 × 0,8 = 0,32
Inserindo esses valores no Teorema da Probabilidade Total, temos:
                               𝑃(𝐷) = 0,18 × 0,5 + 0,32 × 0,5 = 0,09 + 0,16 = 0,25
Gabarito: E

Teorema de Bayes

O Teorema de Bayes é usado quando conhecemos as probabilidades condicionais da forma P(B|A), e
queremos calcular a probabilidade condicional da forma P(A|B), ou seja, quando invertemos o evento que
sabemos ter ocorrido.

No exemplo da inadimplência que vimos antes, conhecemos as probabilidades de inadimplência para cada
grupo, isto é, quando os grupos são os eventos que sabemos ter ocorrido:

     •   P(I|A) = 0,01
     •   P(I|B) = 0,05
     •   P(I|C) = 0,1.


           Receita Federal (Analista Tributário) Estatística                                          22
           www.estrategiaconcursos.com.br                                                             85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Mas, podemos calcular a probabilidade de um cliente pertencer a um dos grupos (por exemplo ao grupo A),
sabendo que ele foi inadimplente, ou seja, tendo a inadimplência como evento que sabemos ter ocorrido:

   •   P(A|I) = ?

Para isso, vamos partir da fórmula da probabilidade condicional:

                                                             𝑃(𝐴 ∩ 𝐼)
                                                  𝑃(𝐴|𝐼) =
                                                               𝑃(𝐼)

Pelo Teorema da Multiplicação, podemos escrever o numerador em função da probabilidade condicional
P(I|A), que conhecemos:

                                             𝑃(𝐴 ∩ 𝐼) = 𝑃(𝐼|𝐴) × 𝑃(𝐴)

Pelo Teorema da Probabilidade Total, podemos escrever o denominador em função das probabilidades
condicionais que conhecemos:

                          𝑃(𝐼) = 𝑃(𝐼|𝐴) × 𝑃(𝐴) + 𝑃(𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶) × 𝑃(𝐶)

Assim, a fórmula do Teorema de Bayes para é:

                                                             𝑷(𝑰|𝑨)×𝑷(𝑨)
                               𝑷(𝑨|𝑰) =
                                             𝑷(𝑰|𝑨)×𝑷(𝑨)+𝑷(𝑰|𝑩)×𝑷(𝑩)+𝑷(𝑰|𝑪)×𝑷(𝑪)

Para o nosso exemplo, já calculamos o denominador, que corresponde à probabilidade total de um cliente
ser inadimplente:

                         𝑃(𝐼) = 𝑃(𝐴). 𝑃(𝐼|𝐴) + 𝑃(𝐵). 𝑃(𝐼|𝐵) + 𝑃(𝐶). 𝑃(𝐼|𝐶) = 0,04

Também sabemos que P(I|A) = 0,01 e P(A) = 0,5, portanto, a probabilidade de um cliente inadimplente ser
do grupo A é:

                                         0,01 × 0,5 0,005 1
                             𝑃(𝐴|𝐼) =              =      = = 0,125 = 12,5%
                                            0,04     0,04  8

        Para resolver algumas questões, pode ser necessário calcular o complementar de uma
        probabilidade condicional:

                                                𝑃(𝐼 |̅ 𝐴) = 1 − 𝑃(𝐼|𝐴)


        Receita Federal (Analista Tributário) Estatística                                           23
        www.estrategiaconcursos.com.br                                                              85

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 06

(FGV/2019 – DPE/RJ) A abrangência do atendimento da Defensoria Pública depende da condição econômica
do cidadão e também do tipo de causa envolvida. Sabe-se que 80% das demandas surgem em função da
hipossuficiência econômica, e os outros 20% devem-se a causas no âmbito criminal. Entre aqueles que não
dispõem de recursos, 90% têm suas necessidades atendidas, enquanto entre os envolvidos em ações
criminais, só 40% são beneficiados com a gratuidade.
Suponha que um indivíduo do cadastro dos que procuram a Defensoria seja sorteado ao acaso, verificando-
se tratar-se de alguém atendido gratuitamente. Então, a probabilidade de que o sorteado seja um dos que
procuraram a Defensoria por causa de questões criminais é igual a:
    1
a) 10
    2
b) 10
    6
c) 10
    7
d) 10
    9
e) 10
Comentários:
A questão trabalha com o Teorema de Bayes, pois informa as probabilidades de gratuidade condicionadas
aos tipos de situação e pergunta pela probabilidade do tipo de situação, condicionada à gratuidade, isto é,
inverte os eventos que sabemos ter ocorrido. O enunciado informa que:
•    80% das demandas surgem por hipossuficiência econômica: P(H) = 0,8;
•    Os outros 20% das demandas surgem por causas criminais: P(C) = 0,2;
•    90% das demandas de hipossuficiência econômica conseguem gratuidade: P(G|H) = 0,9
•    40% das demandas por causas criminais conseguem gratuidade: P(G|C) = 0,4
Assim, a probabilidade de a demanda ser por causas criminais, sabendo que conseguiu gratuidade, P(C|G),
é dada pela fórmula de Bayes:
                                                         𝑃(𝐺|𝐶) × 𝑃(𝐶)
                                    𝑃(𝐶|𝐺) =
                                                 𝑃(𝐺|𝐶) × 𝑃(𝐶) + 𝑃(𝐺|𝐻) × 𝑃(𝐻)
Substituindo os valores do enunciado, temos:
                                              0,4 × 0,2          0,08      0,08   1
                           𝑃(𝐶|𝐺) =                          =           =      =
                                        0,4 × 0,2 + 0,9 × 0,8 0,08 + 0,72 0,80 10
Gabarito: A

          Receita Federal (Analista Tributário) Estatística                                             24
          www.estrategiaconcursos.com.br                                                                85

                                        


---

    Equipe Exatas Estratégia Concursos
    Aula 06

(FCC/2018 – TRT 14ª Região) Uma cidade sede do interior possui três varas trabalhistas. A 1ª Vara comporta
50% das ações trabalhistas, a 2ª Vara comporta 30% e a 3ª Vara as 20% restantes. As porcentagens de ações
trabalhistas oriundas da atividade agropecuária são 3%, 4% e 5% para a 1ª, 2ª e 3ª Varas, respectivamente.
Escolhe-se uma ação trabalhista aleatoriamente e constata-se ser originária da atividade agropecuária. A
probabilidade dessa ação ser da 1ª Vara trabalhista é, aproximadamente:
a) 0,5312.
b) 0,3332.
c) 0,1241.
d) 0,4909.
e) 0,4054.
Comentários:
O enunciado fornece as proporções das ações de atividade agropecuária para cada uma das varas e exige a
probabilidade uma ação de ser da 1ª Vara, sabendo que ela trata atividade agropecuária, ou seja, inverte os
eventos que sabemos ter ocorrido. Pelo Teorema de Bayes, P(V1|A) é dado por:
                                                       𝑃(𝐴|𝑉1 ) × 𝑃(𝑉1 )
                       𝑃(𝑉1|𝐴) =
                                    𝑃(𝐴|𝑉1) × 𝑃(𝑉1 ) + 𝑃(𝐴|𝑉2) × 𝑃(𝑉2 ) + 𝑃(𝐴|𝑉3 ) × 𝑃(𝑉3)
A questão informa que:
•    A 1ª Vara comporta 50% das ações: 𝑃(𝑉1 ) = 0,5;
•    A 2ª Vara comporta 30% das ações: 𝑃(𝑉2 ) = 0,3;
•    A 3ª Vara comporta 20% das ações: 𝑃(𝑉3 ) = 0,2;
•    As percentagens das ações de atividade agropecuária para as Varas 1, 2 e 3 são, respectivamente,
     𝑃(𝐴|𝑉1) = 0,03, 𝑃(𝐴|𝑉2) = 0,04 e 𝑃(𝐴|𝑉3) = 0,05.
Substituindo esses valores na fórmula do Teorema de Bayes, temos:
                                  0,03 × 0,5                     0,015          0,015
        𝑃(𝑉1|𝐴) =                                        =                    =       ≅ 0,4054
                     0,03 × 0,5 + 0,04 × 0,3 + 0,05 × 0,2 0,015 + 0,012 + 0,01 0,037
Gabarito: E.


(CESPE/2019 – TJ/AM) Se Carlos estiver presente na aula ministrada pela professora Paula, a probabilidade
de ele aprender o conteúdo abordado é de 80%; se ele estiver ausente, essa probabilidade cai para 0%. Em
25% das aulas da professora Paula, Carlos está ausente. Com relação a essa situação hipotética, julgue o item
seguinte.
Se Carlos não aprendeu o conteúdo ministrado na aula da professora Paula, então a probabilidade de ele ter
estado presente na aula é inferior a 50%.
Comentários:
O enunciado informa que:
•    Se Carlos estiver presente na aula (𝑃), a probabilidade de aprender o conteúdo (𝐴𝑝) é 𝑃(𝐴𝑝|𝑃) = 0,8;
•    Se Carlos estiver ausente (não presente, 𝑃̅), a probabilidade de aprender (𝐴𝑝) é 𝑃(𝐴𝑝|𝑃̅ ) = 0;
•    Carlos está ausente em 25% das aulas: 𝑃(𝑃̅) = 0,25.


          Receita Federal (Analista Tributário) Estatística                                               25
          www.estrategiaconcursos.com.br                                                                  85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Para calcular a probabilidade de Carlos ter estado presente (𝑃), sabendo que ele não aprendeu o conteúdo
 ̅̅̅̅), utilizamos a fórmula de Bayes:
(𝐴𝑝

                                                           ̅̅̅̅|𝑃) × 𝑃(𝑃)
                                                        𝑃(𝐴𝑝
                                    ̅̅̅̅) =
                                𝑃(𝑃|𝐴𝑝
                                                ̅̅̅̅|𝑃) × 𝑃(𝑃) + 𝑃(𝐴𝑝
                                              𝑃(𝐴𝑝                   ̅̅̅̅|𝑃̅) × 𝑃(𝑃̅)

Sabemos que a probabilidade de Carlos aprender, dado que esteve presente, é 𝑃(𝐴𝑝|𝑃) = 0,8. Assim, a
probabilidade de Carlos não aprender, dado que esteve presente, é complementar:
                                 ̅̅̅̅|𝑃) = 1 − 𝑃(𝐴𝑝|𝑃) = 1 − 0,8 = 0,2
                               𝑃(𝐴𝑝
Sabemos ainda que a probabilidade de Carlos não estar presente é 𝑃(𝑃̅) = 0,25. Logo, a probabilidade de
Carlos estar presente é complementar:
                                       𝑃(𝑃) = 1 − 𝑃(𝑃̅) = 1 − 0,25 = 0,75
Por fim, sabemos que a probabilidade de Carlos aprender, dado que não esteve presente, é 𝑃(𝐴𝑝|𝑃̅ ) = 0.
Logo, a probabilidade de Carlos não aprender, dado que não esteve presente, é complementar:
                                        ̅̅̅̅|𝑃̅) = 1 − 𝑃(𝐴𝑝|𝑃̅) = 1 − 0 = 1
                                      𝑃(𝐴𝑝
Substituindo esses valores na fórmula de Bayes, temos:
                                         0,2 × 0,75         0,15       0,15
                         ̅̅̅̅) =
                     𝑃(𝑃|𝐴𝑝                             =            =      = 37,5%
                                   0,2 × 0,75 + 1 × 0,25 0,15 + 0,25    0,4
Ou seja, a probabilidade de Carlos estar presente, sabendo que ele não aprendeu é inferior a 50%
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                            26
        www.estrategiaconcursos.com.br                                                               85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Resumo da Aula

Definição clássica de probabilidade
                                           𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                 𝑃(𝐴) =                              =
                                             𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑎𝑠𝑜𝑠 𝑡𝑜𝑡𝑎𝑖𝑠    𝑛(𝑈)

                                                            𝑃(𝑈) = 1

Probabilidade da União – caso geral

                                          P(A  B) = P(A) + P(B) – P(A  B)


Probabilidade da União – eventos mutuamente excludentes: P(A  B) = 0

                                                P(A  B) = P(A) + P(B)


Teorema do Evento Complementar
Vale também para combinação de eventos (união e interseção) e para probabilidades condicionais

                                                   𝑃(𝐴̅) = 1 − 𝑃(𝐴)

Probabilidade Condicional – quando sabemos que o evento A ocorreu
                                                             𝑃(𝐴 ∩ 𝐵)
                                                 𝑃(𝐵|𝐴) =
                                                               𝑃(𝐴)


Teorema da Multiplicação – probabilidade da interseção a partir da probabilidade condicional:
                                            𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐵|𝐴) × 𝑃(𝐴)


Eventos Independentes – o resultado de um não influencia o resultado do outro
                                                    𝑃(𝐵|𝐴) = 𝑃(𝐵)
                                              𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐵) × 𝑃(𝐴)


Teorema da Probabilidade Total – probabilidade do todo, a partir das probabilidades condicionais
                          𝑃(𝐼) = 𝑃(𝐼|𝐴) × 𝑃(𝐴) + 𝑃(𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶) × 𝑃(𝐶)

Teorema de Bayes – quando a questão inverte os eventos que sabemos ter ocorrido
                                                     𝑃(𝐼|𝐴) × 𝑃(𝐴)
                         𝑃(𝐴|𝐼) =
                                     𝑃(𝐼|𝐴) × 𝑃(𝐴) + 𝑃(𝐼|𝐵) × 𝑃(𝐵) + 𝑃(𝐼|𝐶) × 𝑃(𝐶)


        Receita Federal (Analista Tributário) Estatística                                          27
        www.estrategiaconcursos.com.br                                                             85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                              QUESTÕES COMENTADAS – FGV

Conceitos Iniciais

1.     (FGV/2023 – Pref. SP) Considere o seguinte experimento aleatório: de uma caixa contendo 5 bolas
verdes e 5 bolas laranjas, retiram-se em sequência e sem reposição 3 bolas da caixa, observando-se, a cada
retirada, a cor da bola.

O número de elementos do espaço amostral dessa experiência é

a) 15

b) 12

c) 9

d) 8

e) 4

Comentários:

O número de elementos do espaço amostral desse experimento corresponde ao número de maneiras de
tirar 3 bolas, em sequência, da caixa, que contém bolas verdes e laranjas. As possibilidades são:
       •   Todas as bolas verdes: 1 possibilidade;
       •   Uma bola laranja e as demais verdes: como a ordem da retirada importa, há 3 possibilidades, pois a
           bola laranja pode ser a primeira, a segunda ou a terceira retirada;
       •   Uma bola verde e as demais laranjas: similarmente, há 3 possibilidades, pois a bola verde pode ser a
           primeira, a segunda ou a terceira retirada;
       •   Todas as bolas laranjas: 1 possibilidade.
Assim, o número de elementos do Espaço Amostral é a soma dessas possibilidades:
                                                   𝑛 =1+3+3+1= 8
Gabarito: D

            Receita Federal (Analista Tributário) Estatística                                               28
            www.estrategiaconcursos.com.br                                                                  85

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                            QUESTÕES COMENTADAS – FGV

Definições de Probabilidade

1.     (FGV/2023 – TJ/SE) Joaquim jogou um dado de seis faces, não viciado, por duas vezes, uma após a
outra. A probabilidade de o resultado do segundo lançamento ser maior que o do primeiro lançamento é
de:

a) 1/12
b) 1/6
c) 1/3
d) 5/12
e) 1/2

Comentários:

Vamos pensar nos possíveis cenários para resolver essa questão. Se o resultado do primeiro lançamento for
igual a 1, o resultado do segundo lançamento pode ser qualquer uma das faces de 2 a 6 (5 possibilidades).
Se o resultado do primeiro lançamento for igual a 2, o resultado do segundo pode ser as faces 3 a 6 (4
possibilidades). E assim seguimos, diminuindo uma possibilidade, até que a face 6 seja a única possibilidade.
Assim, o número de casos favoráveis é:
                                            𝑛(𝐴) = 5 + 4 + 3 + 2 + 1 = 15
E os casos possíveis correspondem às 6 faces no primeiro lançamento e às 6 faces no segundo lançamento:
                                                   𝑛(𝑈) = 6 × 6 = 36
E a probabilidade é a razão entre esses resultados:
                                                        𝑛(𝐴) 15   5
                                                  𝑃=        =   =
                                                        𝑛(𝑈) 36 12
Gabarito: D

2.    (FGV/2023 – RFB) Uma equipe de trabalho reúne 4 auditores e 6 analistas. Se três pessoas dessa
equipe forem selecionadas aleatoriamente para formar um pequeno grupo de trabalho, a probabilidade
de que esse grupo seja formado por dois analistas e um auditor é igual a

a) 0,2
b) 0,5

          Receita Federal (Analista Tributário) Estatística                                               29
          www.estrategiaconcursos.com.br                                                                  85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

c) 0,6
d) 0,7
e) 0,8

Comentários:

A probabilidade é a razão entre a quantidade de eventos favoráveis e a quantidade total de eventos possíveis
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐹)
                                           𝑃=                      =
                                                 𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   𝑛(𝑈)
O total de eventos possíveis correspondem às maneiras de escolher 3 pessoas, dentre 10, no total. Como a
ordem não importa, temos a combinação de 10 escolhe 3:
                                    10!         10 × 9 × 8 × 7! 10 × 9 × 8
            𝑛(𝑈) = 𝐶10,3 =                    =                =           = 10 × 3 × 4 = 120
                               (10 − 3)! × 3!       7! × 3!       3×2
E os eventos favoráveis correspondem às maneiras de escolher 1 auditor, dentre 4, e 2 analistas, dentre 6.
Para a escolha do auditor, há 4 possibilidades. E para a escolha dos analistas, temos a combinação de 6
escolhe 2:
                                                6!         6 × 5 × 4!
                                  𝐶6,2 =                 =            = 3 × 5 = 15
                                           (6 − 2)! × 2!     4! × 2
Pelo princípio multiplicativo, a quantidade de eventos favoráveis é o produto:
                                                   𝑛(𝐹) = 4 × 15 = 60
E a probabilidade é a razão:
                                                              60
                                                      𝑃=          = 0,5
                                                              120
Gabarito: B

3.    (FGV/2022 – TRT/PB) Se escolhemos ao acaso um número de três algarismos, a probabilidade de
que seus três algarismos sejam distintos é igual a

a) 46%.

b) 50%.

c) 60%.

d) 72%.

e) 78%.

Comentários:

          Receita Federal (Analista Tributário) Estatística                                              30
          www.estrategiaconcursos.com.br                                                                 85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis.
O número total de eventos corresponde a todas as possibilidades de formar números de 3 algarismos.

Para a primeira posição, há 9 possibilidades (algarismos de 1 a 9), uma vez que o número não pode iniciar
com o algarismo 0 (nessa situação, o número seria formado por apenas 2 algarismos, e não 3). Para as demais
posições, há 10 possibilidades (algarismos de 0 a 9).

                                                      9                    10   10

Pelo princípio multiplicativo, a quantidade total de números com 3 algarismos possíveis é:
                                                   𝑛(𝑈) = 9 × 10 × 10
Já, os eventos favoráveis correspondem às possibilidades de formar números com 3 algarismos distintos.
                                                              ==219a34==

Para a primeira posição, há 9 possibilidades (algarismos de 1 a 9); para a segunda posição, há 9 possibilidades
(8 possibilidades dentre os algarismos de 1 a 9, exceto o algarismo escolhido para a primeira posição, e mais
o algarismo 0); e para a terceira posição, há 8 possibilidades, dentre os algarismos de 0 a 9, não selecionados
para as posições anteriores.

                                                      9                    9    8

Pelo princípio multiplicativo, a quantidade de números com 3 algarismos distintos é:
                                                    𝑛(𝐴) = 9 × 9 × 8
E a probabilidade é a razão entre esses resultados:
                              𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)   9×9×8       72
                        𝑃=                      =     =           =    = 72%
                               𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈) 9 × 10 × 10 100
Gabarito: D

4.     (FGV/2022 – CBM/RJ) Solange e Marcelo fazem parte de um grupo de 10 pessoas. Sorteiam-se duas
pessoas desse grupo, em sequência e sem reposição. A probabilidade de Solange ser sorteada e Marcelo
não é de:

a) 8/45

b) 1/10

c) 1/5

d) 4/25

e) 3/40

          Receita Federal (Analista Tributário) Estatística                                                 31
          www.estrategiaconcursos.com.br                                                                    85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Comentários:

Precisamos calcular a probabilidade de Solange ser sorteada e Marcelo não, independentemente da ordem
do sorteio. Para que Solange seja uma das duas pessoas sorteadas e Marcelo não, é necessário que a outra
pessoa selecionada seja uma das 8 pessoas que restaram, diferente de Marcelo.
Logo, o número de eventos favoráveis é 𝑛(𝐹) = 8.
E o número total de maneiras de selecionar 2 pessoas, dentre 10, sem que a ordem da escolha importe, é a
combinação de 10 escolhe 2:
                                                   10!         10 × 9 × 8!
                          𝑛(𝑈) = 𝐶10,2 =                     =             = 5 × 9 = 45
                                              (10 − 2)! × 2!     8! × 2
E a probabilidade desejada é a razão entre o número de eventos favoráveis e o total de eventos possíveis:
                                                             𝑛(𝐹)   8
                                                     𝑃=           =
                                                             𝑛(𝑈) 45
Gabarito: A

5.     (FGV/2022 – CM Taubaté) Em uma urna há 6 bolas numeradas. Retira-se da urna, aleatoriamente,
2 bolas em sequência e sem reposição. A probabilidade de o maior número nas bolas retiradas ser igual a
4é

a) 1/2

b) 2/3

c) 1/5

d) 2/5

e) 3/5

Comentários:

Precisamos calcular a probabilidade de o maior número das bolas retiradas ser igual a 4, independentemente
da ordem do sorteio.
Para que isso ocorra, é necessário que uma bola seja a de número 4 e a outra seja a de número 1, 2 ou 3 (3
possibilidades). Logo, o número de eventos favoráveis é 𝑛(𝐹) = 3.
E o número total de maneiras de selecionar 2 bolas, dentre 6, sem que a ordem da escolha importe, é a
combinação de 6 escolhe 2:
                                                    6!         6 × 5 × 4!
                            𝑛(𝑈) = 𝐶6,2 =                    =            = 3 × 5 = 15
                                               (6 − 2)! × 2!     4! × 2

         Receita Federal (Analista Tributário) Estatística                                              32
         www.estrategiaconcursos.com.br                                                                 85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

E a probabilidade desejada é a razão entre o número de eventos favoráveis e o número total de eventos
possíveis:
                                                          𝑛(𝐹)   3   1
                                                    𝑃=         =   =
                                                          𝑛(𝑈) 15 5
Gabarito: C

6.     (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados, aleatoriamente,
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
                                    𝑛(𝑈) = 𝐶8,2 =                   =            = 28
                                                      (8 − 2)! × 2!     6! × 2
Para que o produto seja maior do que zero, precisamos sortear dois números positivos ou dois números
negativos. O número de maneiras de sortear 2 números positivos, dentre 4 possibilidades, sem que a ordem
importe é a combinação:
                                                             4!         4 × 3 × 2!
                                   𝑛(+, +) = 𝐶4,2 =                   =            =6
                                                        (4 − 2)! × 2!     2! × 2
E o número de maneiras de sortear 2 números negativos, dentre 3 possibilidades, sem que a ordem importe
é a combinação:
                                                               3!        3 × 2!
                                     𝑛(−, −) = 𝐶3,2 =                  =        =3
                                                          (3 − 2)! × 2! 1! × 2!

           Receita Federal (Analista Tributário) Estatística                                            33
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Os eventos favoráveis correspondem a soma dessas possibilidades, por serem mutuamente exclusivas
(princípio aditivo):
                                                    𝑛(𝐴) = 6 + 3 = 9
E a probabilidade é a razão:
                                                              𝑛(𝐴)   9
                                                      𝑃=           =
                                                              𝑛(𝑈) 28
Gabarito: B

7.     (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas são
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
                                   𝑛(𝑈) = 𝐶9,2 =                   =            = 36
                                                     (9 − 2)! × 2!     7! × 2
E a probabilidade é a razão:
                                                    𝑛(𝐴)   8  2
                                              𝑃=         =   = ≅ 22%
                                                    𝑛(𝑈) 36 9
Gabarito: A

          Receita Federal (Analista Tributário) Estatística                                                 34
          www.estrategiaconcursos.com.br                                                                    85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

8.    (FGV/2022 – TRT/PB) Numa empresa há seis gerentes e quatro superintendentes. Se quatro dessas
pessoas forem selecionadas ao acaso para formar uma comissão de quatro membros, a probabilidade de
que dois gerentes e dois superintendentes sejam escolhidos é aproximadamente igual a

a) 0,43.
b) 0,50.
c) 0,54.
d) 0,59.
e) 0,63.

Comentários:

A probabilidade é a razão entre o número de eventos favoráveis e o número total de eventos possíveis:
                                                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 𝑛(𝐴)
                                             𝑃=                     =
                                                   𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑒𝑣𝑒𝑛𝑡𝑜𝑠   𝑛(𝑈)
O total de eventos possíveis é o número de maneiras de selecionar quaisquer 4 pessoas, dentre todas as 10.
Considerando que a ordem não importa, temos a combinação de 10 escolhe 4:
                                           10!         10 × 9 × 8 × 7 × 6!
                   𝑛(𝑈) = 𝐶10,4 =                    =                     = 10 × 3 × 7 = 210
                                      (10 − 4)! × 4!     6! × 4 × 3 × 2
E os eventos favoráveis correspondem ao número de maneiras de selecionar 2 gerentes, dentre 6, e 2
superintendentes, dentre 4. O número de maneiras de selecionar 2 gerentes, dentre 6, é:
                                                 6!         6 × 5 × 4!
                                   𝐶6,2 =                 =            = 3 × 5 = 15
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
                                                    𝑃=      = ≅ 0,43
                                                         210 7
Gabarito: A

           Receita Federal (Analista Tributário) Estatística                                            35
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

9.     (FGV/2022 – SEFAZ/AM) Em uma urna há 5 bolas iguais, cada uma com uma letra da sigla SEFAZ.
Todas as bolas têm letras diferentes entre si. Retiram-se, aleatoriamente, 2 bolas da urna. A probabilidade
de que tenham sido retiradas as 2 vogais é de

a) 1/5

b) 2/5

c) 3/5

d) 3/10

e) 1/10

Comentários:

A questão pede a probabilidade de selecionar as 2 únicas vogais, considerando que 2 letras serão
selecionadas dentre as 5 letras da palavra SEFAZ.
Os eventos favoráveis correspondem à única possibilidade de selecionar as 2 vogais:
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 1
E os eventos possíveis correspondem às maneiras de selecionar 2 elementos, dentre 5, sem que a ordem
importe (combinação):
                                                             5!         5 × 4 × 3! 5 × 4
                     𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶5,2 =                       =           =      = 10
                                                        (5 − 2)! × 2!     3! × 2!    2
A probabilidade é a razão entre esses resultados:
                                                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠    1
                                            𝑃=                       =
                                                   𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   10
Gabarito: E

10.   (FGV/2022 – PM/AM) O soldado Garcia vai liderar uma equipe de 3 soldados (ele incluído) para
uma missão. Os outros 2 soldados da equipe serão sorteados aleatoriamente de um grupo de 6 soldados,
sendo que um dos 6 é o soldado Ryan, amigo do soldado Garcia. A probabilidade de o soldado Ryan ser
um dos 2 sorteados é

a) 1/6
b) 1/5
c) 1/4
d) 1/3
e) 1/2

          Receita Federal (Analista Tributário) Estatística                                             36
          www.estrategiaconcursos.com.br                                                                85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Comentários:

O enunciado informa que 2 solados serão sorteados, dentre 6, e pede a probabilidade de sortear um soldado
específico.
Os eventos possíveis (denominador da fórmula da probabilidade) correspondem à seleção de 2 elementos,
dentre todos os 6, sem que a ordem importe (combinação):

                                                             6!         6 × 5 × 4! 6 × 5
                     𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶6,2 =                       =           =      = 15
                                                        (6 − 2)! × 2!     4! × 2!    2

E os eventos favoráveis correspondem à seleção de qualquer outro soldado, dentre os outros 5, como
segundo soldado selecionado: 𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 = 5

                                               𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠    5   1
                                         𝑃=                       =    =
                                                𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   15 3

Gabarito: D

11.    (FGV/2022 – SEMSA Manaus) Numa vila moram 20 pessoas, das quais 5 são crianças. Se sortearmos
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
                                                              𝑛(𝐹)
                                                         𝑃=
                                                              𝑛(𝑈)
Em relação ao total de casos possíveis, o número de maneiras de selecionar 5 pessoas quaisquer, dentre 20,
sabendo que a ordem não importa é a combinação:
                                20!         20 × 19 × 18 × 17 × 16 × 15! 20 × 19 × 18 × 17 × 16
      𝑛(𝑈) = 𝐶20,5 =                      =                             =
                           (20 − 5)! × 5!             15! × 5!                5×4×3×2
                                           𝑛(𝑈) = 𝐶20,5 = 19 × 3 × 17 × 16

          Receita Federal (Analista Tributário) Estatística                                             37
          www.estrategiaconcursos.com.br                                                                85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Em relação aos casos favoráveis, precisamos selecionar 3 crianças, dentre 5, e 2 adultos, dentre 15. A escolha
das crianças corresponde à combinação de 5 escolher 3:
                                                    5!         5 × 4 × 3!
                                      𝐶5,3 =                 =            =5×2
                                               (5 − 3)! × 3!     2! × 3!
E a escolha dos adultos corresponde à combinação de 15 escolhe 2:
                                                15!         15 × 14 × 13!
                                 𝐶15,2 =                  =               = 15 × 7
                                           (15 − 2)! × 2!      13! × 2
Pelo princípio multiplicativo, o número de casos favoráveis é o produto:
                                                 𝑛(𝐴) = 5 × 2 × 15 × 7
E a probabilidade desejada é a razão entre esses resultados
                                    5 × 2 × 15 × 7   5×5×7       175
                             𝑃=                    =           =     ≅ 6,77%
                                   19 × 3 × 17 × 16 19 × 17 × 8 2584
Gabarito: B

12.    (FGV/2021 – Paulínia) Em uma caixa há 2 bolas brancas e 4 bolas pretas. Retirando, ao acaso 2
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
                     𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 = 𝐶6,2 =                       =           =      = 15
                                                        (6 − 2)! × 2!     4! × 2!    2

          Receita Federal (Analista Tributário) Estatística                                                38
          www.estrategiaconcursos.com.br                                                                   85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A probabilidade é a razão entre esses resultados:
                                                 𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠    8
                                           𝑃=                       =
                                                  𝑒𝑣𝑒𝑛𝑡𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   15
Gabarito: E

13.     (FGV/2021 – TJ/RO) As amigas Alice e Bianca estão entre as 6 pessoas classificadas em um concurso
e esperam a entrevista com a banca examinadora. Os classificados receberão aleatoriamente números de
1 a 6, que determinarão a ordem em que eles serão entrevistados.

A probabilidade de que Alice e Bianca fiquem vizinhas nessa fila é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6

Comentários:

A probabilidade é a razão entre os eventos favoráveis (2 amigas serem vizinhas na fila) e os eventos possíveis
(todas as maneiras de organizar uma fila de 6 pessoas).
O número de maneiras de organizar uma fila de 6 pessoas corresponde à permutação de 6 elementos:
                                                     𝑛(𝑈) = 𝑃6 = 6!
Para organizar a fila de modo que as amigas sejam vizinhas, vamos inicialmente imaginá-las como elemento
único, o que corresponde à permutação de 5 elementos (as amigas como elemento único e as outras 4
pessoas):
                                                             𝑃5 = 5!
Porém, para que sejam vizinhas, podemos ter Alice em frente à Bianca, ou Bianca em frente à Alice. Logo,
devemos multiplicar esse número de possibilidades por 2:
                                                     𝑛(𝑉) = 2 × 5!
E a probabilidade é a razão:
                                             𝑛(𝑉) 2 × 5! 2 × 5! 2 1
                                        𝑃=        =     =       = =
                                             𝑛(𝑈)   6!    6 × 5! 6 3
Gabarito: B

         Receita Federal (Analista Tributário) Estatística                                                 39
         www.estrategiaconcursos.com.br                                                                    85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                           QUESTÕES COMENTADAS – FGV

Combinações de Eventos

1.      (FGV/2023 – AGENERSA) Em uma caixa há 5 cartas e cada uma delas contém um dos números: 1, 3,
4, 5, 8. Não aparece o mesmo número em duas cartas. Duas cartas são retiradas da caixa ao acaso. A
probabilidade de que o produto dos números dessas cartas seja um número par é de

a) 30%
b) 40%
c) 50%
d) 60%
e) 70%

Comentários:

Para que o produto de dois números seja par, é necessário que ao menos um deles seja par. Por isso, vamos
calcular essa probabilidade pelo seu complemento, qual seja, de que ambos os números sejam ímpares:
                                               𝑃(𝑝𝑎𝑟) = 1 − 𝑃(í𝑚𝑝𝑎𝑟)
A probabilidade de selecionar 2 números ímpares é a razão entre o número de casos em que essa situação
ocorre e o número total de casos possíveis:
                                                                 𝑛(í𝑚𝑝𝑎𝑟)
                                                𝑃(í𝑚𝑝𝑎𝑟) =
                                                                   𝑛(𝑈)
Os casos favoráveis correspondem à retirada de 2 cartas, dentre as 3 com números ímpares (1, 3 ou 5). Como
a ordem não importa, temos a combinação de 3 escolhe 2:
                                                                  3!        3 × 2!
                                 𝑛(í𝑚𝑝𝑎𝑟) = 𝐶3,2 =                        =        =3
                                                             (3 − 2)! × 2! 1! × 2!
E total de casos corresponde à retirada de 2 cartas quaisquer, dentre todas as 5:
                                                    5!         5 × 4 × 3!
                            𝑛(𝑈) = 𝐶5,2 =                    =            = 5 × 2 = 10
                                               (5 − 2)! × 2!     3! × 2
Assim, a probabilidade de o produto ser ímpar é a razão:
                                                                     3
                                                    𝑃(í𝑚𝑝𝑎𝑟) =
                                                                    10
E a probabilidade de ser par é complementar:
                                                                3   7
                                           𝑃(𝑝𝑎𝑟) = 1 −           =   = 70%
                                                               10 10
Gabarito: E


         Receita Federal (Analista Tributário) Estatística                                             40
         www.estrategiaconcursos.com.br                                                                85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

2.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo

a) Prob(A ∩ B) = Prob(A)Prob(B)

b) Prob(A ∪ B) = Prob(A)Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A ∪ B) = 0

e) Prob(A ∪ B) = 1

Comentários:
                                                              ==219a34==

Sendo A e B eventos mutuamente exclusivos, então a probabilidade da interseção é igual a zero (letra C).

Gabarito: C

3.      (FGV/2022 – SSP/AM) Seis cartas estão em uma caixa; em cada uma delas está escrita uma das seis
letras: A, B, C, D, E, F, e cada letra só aparece uma vez. Retirando da caixa, simultaneamente e ao acaso,
duas cartas, a probabilidade de que as cartas A ou C sejam sorteadas é

a) 1/2

b) 2/5

c) 3/5

d) 7/15

e) 8/15

Comentários:

O enunciado informa que 2 letras serão sorteadas dentre as 6 letras A, B, C, D, E e F.
Os eventos possíveis (denominador da fórmula da probabilidade) correspondem à seleção de 2 elementos,
dentre todos os 6, sem que a ordem importe (combinação):
                                                     6!         6 × 5 × 4! 6 × 5
                             𝑛(𝑈) = 𝐶6,2 =                    =           =      = 15
                                                (6 − 2)! × 2!     4! × 2!    2
Em relação à probabilidade de sortear a letra A, os eventos favoráveis correspondem à seleção de qualquer
uma das outras 5 letras como segunda letra sorteada:
                                                                            5
                                                         𝑃(𝐴) =
                                                                           15


          Receita Federal (Analista Tributário) Estatística                                            41
          www.estrategiaconcursos.com.br                                                               85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Similarmente, em relação à probabilidade de sortear a letra C, os eventos favoráveis correspondem à seleção
de qualquer uma das outras 5 letras como segunda letra sorteada:
                                                                 5
                                                       𝑃(𝐶) =
                                                                15
Em relação à probabilidade da interseção, os eventos favoráveis correspondem à única possibilidade de
selecionar as letras A e C:
                                                                  1
                                                    𝑃(𝐴 ∩ 𝐶) =
                                                                 15
Logo, a probabilidade de selecionar A ou C (união) é dada por:
                                                                       5   5   1   9   3
                      𝑃(𝐴 ∪ 𝐶) = 𝑃(𝐴) + 𝑃(𝐶) − 𝑃(𝐴 ∩ 𝐶) =                +   −   =   =
                                                                      15 15 15 15 5
Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                               42
        www.estrategiaconcursos.com.br                                                                  85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                          QUESTÕES COMENTADAS – FGV

Probabilidade Condicional

1.    (FGV/2024 – Pref. São José dos Campos) Sejam A, B e C três eventos quaisquer e P(.) a função
probabilidade. Se A, B e C são independentes, então P(A ∩ B ∩ C) é igual a

a) 𝑃(𝐴) + 𝑃(𝐵) + 𝑃(𝐶)

b) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶)

c) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶) − 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)

d) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶) − 𝑃(𝐴 ∩ 𝐵) − 𝑃(𝐴 ∩ 𝐶) − 𝑃(𝐴 ∩ 𝐵) + 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)

e) 0

Comentários:

Para eventos independentes, a probabilidade da interseção é igual ao produto das probabilidades:
                                         𝑃(𝐴 ∩ 𝐵 ∩ 𝐶) = 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶)
Gabarito: B

2.      (FGV/2023 – Pref. SP) A professora da turma do 4º ano propôs um jogo de “Par ou Ímpar” diferente.
Para isso, ela organizou a turma em duplas e entregou 2 dados convencionais para cada dupla. Na sua vez
de jogar, os jogadores decidem quem será par e quem será ímpar, lançam os 2 dados e multiplicam os
pontos sorteados. Por exemplo, se o jogador escolher par, lançar os dados e sortear 2 e 4, ele ganha a
rodada (2 x 4 = 8 e 8 é par), mas se sair 3 e 5, o seu adversário será o vencedor da rodada (3 x 5 = 15 e 15 é
ímpar). Ao final de 10 rodadas, ganha o jogo quem tiver sucesso em mais rodadas. Sobre esse jogo, é
correto afirmar que

a) o jogador que escolher par tem mais chance de ganhar a rodada.

b) o jogador que ganhar a primeira rodada tem mais chance de vencer o jogo.

c) o jogador que escolher ímpar tem mais chance de ganhar a rodada.

d) o jogador que sortear 6 em cada dado tem mais chance de ganhar a rodada.

e) os dois jogadores têm a mesma chance de ganhar a rodada.

Comentários:

        Receita Federal (Analista Tributário) Estatística                                                  43
        www.estrategiaconcursos.com.br                                                                     85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

O produto de números será par se ao menos um deles for par; e será ímpar apenas se ambos forem ímpares.
Considerando que, em cada dado, há 3 números ímpares, dentre 6, a probabilidade de sair um número ímpar
é
                                                             3 1
                                                      𝑝𝑖 =    =
                                                             6 2
E a probabilidade de sair um número ímpar em ambos os dados (interseção de eventos independentes), que
corresponde à probabilidade de o jogador que escolher ímpar ganhar, é o produto:
                                                            1 1 1
                                                    𝑝𝑖𝑖 =    × =
                                                            2 2 4
Logo, a probabilidade de o jogador que escolher par ganhar é o complemento:
                                                               1 3
                                                   𝑝𝑝𝑝 = 1 −    =
                                                               4 4
Assim, a probabilidade de o jogador que escolher par ganhar é maior do que a do jogador que escolher ímpar.
Gabarito: A

3.     (FGV/2023 – BANESTES) A figura a seguir ilustra duas urnas onde estão depositadas bolas brancas
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

Comentários:

O enunciado informa que será sorteada uma bola da urna 1, caso o resultado do dado seja 1, 2, 3 ou 4.
Sabendo que há 6 faces no dado, a probabilidade de isso ocorrer é:


        Receita Federal (Analista Tributário) Estatística                                               44
        www.estrategiaconcursos.com.br                                                                  85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                                4 2
                                                     𝑃(𝑈1) =     =
                                                                6 3
Na urna 1, há 5 bolas no total, das quais 3 são pretas. Considerando que será extraída uma bola da urna 1, a
probabilidade de a bola preta ser preta é:
                                                                  3
                                                     𝑃(𝑃𝑟|𝑈1) =
                                                                  5
E a probabilidade de sortear a urna 1 E extrair dela uma bola preta é o produto (interseção):
                                                              2 3 2
                                          𝑃(𝑃𝑟 ∩ 𝑈1) =         × = = 40%
                                                              3 5 5
Já, a urna 2 será escolhida, caso o resultado do dado seja 5 ou 6, cuja probabilidade é:
                                                                2 1
                                                     𝑃(𝑈2) =     =
                                                                6 3
Na urna 2, há 6 bolas no total, sendo 1 preta. Considerando que será extraída uma bola da urna 2, a
probabilidade de a bola preta ser preta é:
                                                                  1
                                                     𝑃(𝑃𝑟|𝑈2) =
                                                                  6
E a probabilidade de sortear a urna 2 E extrair dela uma bola preta é o produto (interseção):
                                                             1 1  1
                                        𝑃(𝑃𝑟 ∩ 𝑈2) =          × =   ≅ 5,56%
                                                             3 6 18
A probabilidade total de extrair uma bola preta é a soma dessas probabilidades:
                                         𝑃(𝑃𝑟) = 40% + 5,56% = 45,56%
Que está entre 45% e 55%.
Gabarito: B

4.     (FGV/2023 – BANESTES) Considere o lançamento de um dado equilibrado (ou seja, todas as seis
faces do dado têm a mesma chance). Se o número de pontos obtidos for no máximo 5, diz-se que o evento
X ocorreu. Se o número de pontos obtidos for par, diz-se que o evento Y ocorreu. A probabilidade
condicional de X dado Y é igual a

a) 1/2

b) 2/3

c) 2/5

d) 1/3

e) 5/6

         Receita Federal (Analista Tributário) Estatística                                               45
         www.estrategiaconcursos.com.br                                                                  85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Comentários:

A probabilidade condicional de X dado Y é dada por:
                                                              𝑃(𝑋 ∩ 𝑌)
                                                  𝑃(𝑋|𝑌) =
                                                                𝑃(𝑌)
Sabendo que Y representa os números pares do dado, temos:
                                                                 3
                                                        𝑃(𝑌) =
                                                                 6
Considerando que X representa os números menores ou iguais a 5, então a interseção entre X e Y
corresponde aos números pares menores ou iguais a 5, quais sejam, 2 e 4:
                                                                     2
                                                      𝑃(𝑋 ∩ 𝑌) =
                                                                     6
E a probabilidade condicional desejada é:
                                                              2/6 2
                                                   𝑃(𝑋|𝑌) =      =
                                                              3/6 3
Gabarito: B

5.      (FGV/2023 – RFB) A partida decisiva Maiorais x Geniais envolve uma grande incógnita. O goleiro
Pegatudo, dos Geniais, está machucado, e a probabilidade de sua presença em campo é de 60%. Das
últimas 10 partidas entre as equipes com Pegatudo no gol, os Geniais ganharam 7 e perderam 3. Porém,
nas últimas 4 vezes em que Pegatudo esteve ausente, os Maiorais venceram 3 e só perderam 1. Usando
esses dados, a probabilidade que os Geniais saiam vencedores do confronto é estimada em

a) 76%

b) 68%

c) 60%

d) 58%

e) 52%

Comentários:

A probabilidade de o time Geniais vencer, independentemente de o goleiro Pegatudo jogar ou não, pode ser
calculada pelo Teorema da Probabilidade Total:
                                     𝑃(𝑉) = 𝑃(𝑉|𝑃) × 𝑃(𝑃) + 𝑃(𝑉|𝑃̅) × 𝑃(𝑃̅)
O enunciado informa que:

         Receita Federal (Analista Tributário) Estatística                                           46
         www.estrategiaconcursos.com.br                                                              85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

   •      A probabilidade de o goleiro Pegatudo jogar é 𝑃(𝑃) = 60% = 0,6; logo, a probabilidade de ele não
          jogar é complementar 𝑃(𝑃̅) = 1 − 0,6 = 0,4;
                                                                                            7
   •      O time Geniais venceu 7 de 10 partidas, quando o goleiro esteve presente 𝑃(𝑉|𝑃) = 10 = 0,7; e
                                                                                               1
   •      O time Geniais venceu 1 de 4 partidas, quando o goleiro não esteve presente 𝑃(𝑉|𝑃̅) = 4 = 0,25.

Substituindo esses dados na fórmula da Probabilidade Total, temos:
                            𝑃(𝑉) = 0,7 × 0,6 + 0,25 × 0,4 = 0,42 + 0,1 = 0,52 = 52%
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
o evento que sabemos ter ocorrido.
Assim, para calcular a probabilidade de o componente ser adulterado, dado que o resultado do teste foi
positivo, devemos utilizar a fórmula de Bayes:
                                           𝑃(𝐴 ∩ 𝑃)           𝑃(𝑃|𝐴) × 𝑃(𝐴)
                              𝑃(𝐴|𝑃) =              =
                                             𝑃(𝑃)     𝑃(𝑃|𝐴) × 𝑃(𝐴) + 𝑃(𝑃|𝐴̅) × 𝑃(𝐴̅)
O enunciado informa que:
   •      A probabilidade de o componente ser adulterado é:
                                               𝑃(𝐴) = 0,2% = 0,002
          Portanto, a probabilidade de o componente não ser adulterado é complementar:
                                             𝑃(𝐴̅) = 1 − 0,002 = 0,998
   •      Quando o componente é adulterado, a probabilidade de o equipamento detectar a adulteração, isto
          é, dar resultado positivo é:
                                               𝑃(𝑃|𝐴) = 90% = 0,9


           Receita Federal (Analista Tributário) Estatística                                            47
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

   •     A probabilidade de o equipamento indicar corretamente a inexistência de adulteração, isto é, dar
         resultado negativo, quando o componente não é adulterado, é 𝑃(𝑁|𝐴̅) = 98% = 0,98. Portanto, a
         probabilidade de o resultado ser positivo, quando o componente não é adulterado, é complementar:
                                             𝑃(𝑃|𝐴̅) = 1 − 0,98 = 0,02
Substituindo esses dados na fórmula de Bayes, temos:
                           0,9 × 0,002             0,0018       0,0018   180
        𝑃(𝐴|𝑃) =                             =                =        =     ≅ 0,08 = 8%
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

Comentários:

Novamente, o enunciado informa as probabilidades dos resultados do teste, condicionadas ao defeito na
placa, e pede a probabilidade de defeito, condicionada ao resultado do teste, invertendo assim o evento que
sabemos ter ocorrido.
Assim, para calcular a probabilidade de a placa ser realmente defeituosa, dado que o resultado do teste foi
positivo (isto é, acusou a presença de defeito), devemos utilizar a fórmula de Bayes:
                                         𝑃(𝐷 ∩ 𝑃)           𝑃(𝑃|𝐷) × 𝑃(𝐷)
                            𝑃(𝐷|𝑃) =              =
                                           𝑃(𝑃)                         ̅ ) × 𝑃(𝐷
                                                    𝑃(𝑃|𝐷) × 𝑃(𝐷) + 𝑃(𝑃|𝐷       ̅)

O enunciado informa que:

          Receita Federal (Analista Tributário) Estatística                                               48
          www.estrategiaconcursos.com.br                                                                  85

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 06

    •   A probabilidade de o teste indicar a presença de defeito (isto é, resultado positivo), quando não há
        defeito na placa é:
                                               𝑃(𝑃|𝐷̅ ) = 5% = 0,05

    •   A probabilidade de o teste indicar a ausência de defeito (isto é, resultado negativo), quando há
        defeito na placa é 𝑃(𝑁|𝐷) = 20% = 0,2. Portanto, a probabilidade de o resultado ser positivo,
        quando há defeito, é complementar:
                                            𝑃(𝑃|𝐷) = 1 − 0,2 = 0,8

    •   𝑃(𝐷) = 10% = 0,1 das placas apresentam defeito. Portanto, a probabilidade de a placa não
        apresentar defeito é complementar:
                                             ̅ ) = 1 − 0,1 = 0,9
                                           𝑃(𝐷


Substituindo esses dados na fórmula de Bayes, temos:
                                 0,8 × 0,1           0,08      0,08   80
              𝑃(𝐷|𝑃) =                          =            =      =    = 0,64 = 64%
                          0,8 × 0,1 + 0,05 × 0,9 0,08 + 0,045 0,125 125
Gabarito: D

8.     (FGV/2022 – SEMSA Manaus) Se A e B são dois eventos quaisquer com probabilidades maiores do
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

Comentários:

Em relação à primeira afirmativa, se A e B são independentes, então a probabilidade da interseção é igual ao
produto das probabilidades, que será maior que zero (já que as probabilidades de A e B são maiores que
zero). Assim, podemos concluir que os eventos não são mutuamente exclusivos; logo, a afirmativa I é falsa.


         Receita Federal (Analista Tributário) Estatística                                               49
         www.estrategiaconcursos.com.br                                                                  85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Em relação à segunda afirmativa, o menor valor possível para a probabilidade da união é a maior
probabilidade dos eventos, no caso, P(B) = 0,8. Logo, a afirmativa II é verdadeira.
Em relação à terceira afirmativa, se A e B são mutuamente exclusivos, então a probabilidade da interseção
é igual a zero, a qual é diferente do produto das probabilidades (já que as probabilidades de A e B são
maiores que zero). Assim, concluímos que os eventos não são independentes; logo, a afirmativa III é
verdadeira.
Gabarito: C

9.     (FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A
probabilidade condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6. Assim, a probabilidade de que A
ou B ocorram é igual a

a) 0,56

b) 0,60

c) 0,76

d) 0,82

e) 0,94

Comentários:

O enunciado informa as probabilidades de A, 𝑃(𝐴) = 0,5; de B, 𝑃(𝐵) = 0,8; e a probabilidade condicional
de A dado B:
                                                              𝑃(𝐴 ∩ 𝐵)
                                               𝑃(𝐴|𝐵) =                = 0,6
                                                                𝑃(𝐵)
                                                      𝑃(𝐴 ∩ 𝐵)
                                                               = 0,6
                                                        0,8
                                             𝑃(𝐴 ∩ 𝐵) = 0,8 × 0,6 = 0,48
Conhecendo a probabilidade da interseção, podemos calcular a probabilidade da união:
                        𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,5 + 0,8 − 0,48 = 0,82
Gabarito: D

10.   (FGV/2022 – TCE/TO) Dois eventos A e B têm probabilidades iguais a 0,5 e 0,6, respectivamente. A
probabilidade condicional de A ocorrer dado que B ocorre é igual a 0,8.

Assim, a probabilidade de B ocorrer dado que A ocorre é igual a:

          Receita Federal (Analista Tributário) Estatística                                           50
          www.estrategiaconcursos.com.br                                                              85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

a) 0,96

b) 0,82

c) 0,54

d) 0,36

e) 0,24

Comentários:

O enunciado informa as probabilidades de A, 𝑃(𝐴) = 0,5; de B, 𝑃(𝐵) = 0,6; e a probabilidade condicional
de A dado B:
                                                              𝑃(𝐴 ∩ 𝐵)
                                               𝑃(𝐴|𝐵) =                = 0,8
                                                                𝑃(𝐵)
                                                      𝑃(𝐴 ∩ 𝐵)
                                                               = 0,8
                                                        0,6
                                             𝑃(𝐴 ∩ 𝐵) = 0,8 × 0,6 = 0,48
Agora, podemos calcular a probabilidade condicional de B dado A:
                                                       𝑃(𝐴 ∩ 𝐵) 0,48
                                          𝑃(𝐵|𝐴) =             =     = 0,96
                                                         𝑃(𝐴)    0,5
Gabarito: A

11.   (FGV/2022 – SEMSA Manaus) Suponha que um estatístico jogue dois dados não viciados. Ele
informa que os números observados são pares. Logo, a probabilidade de que a soma deles seja 6 é

a) 1/6

b) 2/3

c) 1/3

d) 2/9

e) 1/2

Comentários:

A questão pede a probabilidade de que a soma de dois dados seja igual a 6, dado que os números são pares,
dada pela razão entre o número de elementos da interseção e o número de resultados pares possíveis:

          Receita Federal (Analista Tributário) Estatística                                           51
          www.estrategiaconcursos.com.br                                                              85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                  𝑃(𝑠𝑜𝑚𝑎 6 ∩ 𝑝𝑎𝑟𝑒𝑠) 𝑛(𝑠𝑜𝑚𝑎 6 ∩ 𝑝𝑎𝑟𝑒𝑠)
                        𝑃(𝑠𝑜𝑚𝑎 6|𝑝𝑎𝑟𝑒𝑠) =                          =
                                                      𝑃(𝑝𝑎𝑟𝑒𝑠)          𝑛(𝑝𝑎𝑟𝑒𝑠)
Sabendo que há 3 faces pares em cada dado, pelo princípio multiplicativo, o número de resultados pares
possíveis é o produto:
                                                 𝑛(𝑝𝑎𝑟𝑒𝑠) = 3 × 3 = 9
Sabendo que as faces são pares, elas somam 6 nos casos {(2,4) e (4,2)}. Logo, há 2 elementos na interseção.
Assim, a probabilidade desejada é:
                                                                         2
                                                 𝑃(𝑠𝑜𝑚𝑎 6|𝑝𝑎𝑟𝑒𝑠) =
                                                                         9
Gabarito: D

12.    (FGV/2022 – SEMSA Manaus) A urna I contém quatro bolas brancas e seis pretas; a urna II contém
quatro bolas brancas e cinco pretas. Sorteamos uma bola da urna I e a colocamos na urna II. Em seguida,
sorteamos uma bola da urna II.

A probabilidade de que essa segunda bola sorteada seja branca é igual a

a) 0,24

b) 0,30

c) 0,36

d) 0,40

e) 0,44

Comentários:

Precisamos calcular a probabilidade de a segunda bola ser branca, independentemente da primeira bola,
que pode ser branca ou preta. Para isso, podemos utilizar o Teorema da Probabilidade Total:
                                𝑃(𝐵2) = 𝑃(𝐵2|𝐵1) × 𝑃(𝐵1) + 𝑃(𝐵2|𝑃1) × 𝑃(𝑃1)
A primeira bola é retirada da urna 1, que possui 4 bolas brancas e 6 bolas pretas. A probabilidade de retirar
uma bola branca é:
                                                               4
                                                    𝑃(𝐵1) =      = 0,4
                                                              10
E a probabilidade de retirar uma bola preta é:
                                                               6
                                                    𝑃(𝑃1) =      = 0,6
                                                              10
Supondo que a primeira bola é branca, então na urna 2 haverá 5 bolas brancas e 5 bolas pretas. A
probabilidade de retirar uma bola branca nessa situação é:


          Receita Federal (Analista Tributário) Estatística                                               52
          www.estrategiaconcursos.com.br                                                                  85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                                 5
                                                   𝑃(𝐵2|𝐵1) =      = 0,5
                                                                10
Supondo que a primeira bola é preta, então na urna 2 haverá 4 bolas brancas e 6 bolas pretas. A
probabilidade de retirar uma bola branca nessa situação é:
                                                                 4
                                                   𝑃(𝐵2|𝑃1) =      = 0,4
                                                                10
Substituindo esses dados na fórmula da Probabilidade Total, temos:
                                 𝑃(𝐵2) = 0,5 × 0,4 + 0,4 × 0,6 = 0,2 + 0,24 = 0,44
Gabarito: E

13.    (FGV/2022 – TJ/TO) Bárbara escreveu cada uma das 13 letras da palavra PROBABILIDADE em 13
cartões que foram colocados em uma urna. Depois, Bárbara retirou em sequência 2 cartões da urna, sem
reposição.

A probabilidade de que Bárbara tenha retirado os 2 cartões com a letra B é:

a) 1/78

b) 1/39

c) 1/26

d) 2/13.

e) 1/13.

Comentários:

O enunciado informa que Bárbara irá retirar dois cartões em sequência, sem reposição. Para que ambos os
cartões contenham a letra B, é necessário que tanto o primeiro quanto o segundo cartão contenham essa
letra.
Sabendo que há 2 cartões com a letra B, dentre 13 cartões no total, a probabilidade de Bárbara retirar um
cartão com a letra B na primeira extração é:
                                                                    2
                                                         𝑃(𝐵1) =
                                                                   13
Sabendo que foi extraído um cartão com a letra B na primeira extração, restará 1 cartão com a letra B, dentre
12 cartões no total. A probabilidade de Bárbara também retirar um cartão com a letra B na segunda extração
é:
                                                                     1
                                                      𝑃(𝐵2|𝐵1) =
                                                                    12
E a probabilidade de ambos os eventos ocorrerem (interseção) é o produto:


           Receita Federal (Analista Tributário) Estatística                                              53
           www.estrategiaconcursos.com.br                                                                 85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                           2   1   1    1
                                        𝑃(𝐵1 ∩ 𝐵2) =         ×   =    =
                                                          13 12 13 × 6 78
Gabarito: A

14.   (FGV/2022 – MPE/SC) Duas urnas A e B têm, cada uma, 9 bolas numeradas. Na urna A, há 4 bolas
com números ímpares e 5 bolas com números pares. Na urna B, há 5 bolas com números ímpares e 4 bolas
com números pares. Retira-se aleatoriamente uma bola de cada urna. A probabilidade de que o produto
dos números das bolas retiradas seja par é:

a) 1/2.

b) 4/9.

c) 5/9.

d) 20/81.

e) 61/81.

Comentários:

Para que o produto seja par é necessário que pelo menos uma das bolas seja par. Assim, vamos calcular a
probabilidade complementar, qual seja, a de ambas as bolas serem ímpares, o que resulta em um produto
ímpar:
                                                𝑃(𝑝𝑎𝑟) = 1 − 𝑃(í𝑚𝑝𝑎𝑟)
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


          Receita Federal (Analista Tributário) Estatística                                             54
          www.estrategiaconcursos.com.br                                                                85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

15.    (FGV/2022 – EPE) Uma determinada fábrica produz dois tipos de cabos elétricos, digamos M e N,
nas proporções 4/10 e 6/10, respectivamente. A probabilidade de ocorrência de uma falha no cabo tipo
M é de 5%, e no cabo tipo N, é de 10%.

Retirou-se, ao acaso, um cabo produzido na fábrica, e verificou-se que o cabo tinha falha. Assim, a
probabilidade de que esse cabo seja do tipo M é

a) 0,25

b) 0,30

c) 0,33

d) 0,40

e) 0,50.

Comentários:

Essa questão informa as probabilidades de falha condicionadas ao tipo do cabo e pede a probabilidade
associada ao cabo condicionada à falha, invertendo assim o evento que sabemos ter ocorrido.
Nessa situação, utilizamos a fórmula de Bayes para calcular a probabilidade de ser um cabo do tipo M, dado
que tinha falha:
                                          𝑃(𝑀 ∩ 𝐹)          𝑃(𝐹|𝑀) × 𝑃(𝑀)
                            𝑃(𝑀|𝐹) =               =
                                            𝑃(𝐹)     𝑃(𝐹|𝑀) × 𝑃(𝑀) + 𝑃(𝐹|𝑁) × 𝑃(𝑁)
O enunciado informa que:
   •      As proporções dos tipos M e N são 4/10 e 6/10, respectivamente, logo: 𝑃(𝑀) = 0,4 e 𝑃(𝑁) = 0,6; e
   •      As probabilidades de falha são 5% e 10%, respectivamente para M e N, logo: 𝑃(𝐹|𝑀) = 0,05 e
          𝑃(𝐹|𝑁) = 0,1.
Substituindo esses dados na fórmula de Bayes, temos:
                                          0,05 × 0,4          0,02      0,02 1
                       𝑃(𝑀|𝐹) =                           =           =     = = 0,25
                                    0,05 × 0,4 + 0,1 × 0,6 0,02 + 0,06 0,08 4
Gabarito: A

16.   (FGV/2022 – CBM/AM) Márcia tem uma ficha amarela, uma ficha verde e duas vermelhas. Joana
tem duas fichas amarelas e uma ficha verde. Cada uma delas escolhe aleatoriamente uma de suas fichas e
mostra para a outra. A probabilidade de que as fichas mostradas tenham a mesma cor é:

a) 1/12

b) 1/7

           Receita Federal (Analista Tributário) Estatística                                           55
           www.estrategiaconcursos.com.br                                                              85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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
Considerando que Joana possui 2 fichas amarelas, dentre 3 fichas no total, a probabilidade de Joana
selecionar uma ficha amarela é:
                                                                   2
                                                        𝑃𝐽 (𝐴) =
                                                                   3
E a probabilidade de ambas selecionarem fichas amarelas (uma E outra) é o produto (interseção de eventos
independentes):
                                                             1 2  2
                                                  𝑃(𝐴) =      × =
                                                             4 3 12
Similarmente, considerando que Márcia possui 1 ficha verde, dentre 4 fichas, a probabilidade de ela
selecionar uma verde é:
                                                                   1
                                                        𝑃𝑀 (𝑉) =
                                                                   4
E considerando que Joana possui 1 ficha verde, dentre 3 fichas, a probabilidade de ela selecionar uma ficha
verde é:
                                                                   1
                                                        𝑃𝐽 (𝑉) =
                                                                   3
Portanto, a probabilidade de ambas selecionarem fichas verde é o produto (interseção):
                                                             1 1  1
                                                  𝑃(𝑉) =      × =
                                                             4 3 12
Considerando que esses eventos são mutuamente excludentes, a probabilidade de ocorrer um OU outro
(união) é a soma:
                                                                        2   1   3   1
                                 𝑃(𝑖𝑔𝑢𝑎𝑖𝑠) = 𝑃(𝐴) + 𝑃(𝑉) =                +   =   =
                                                                       12 12 12 4
Gabarito: D

         Receita Federal (Analista Tributário) Estatística                                              56
         www.estrategiaconcursos.com.br                                                                 85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

17.     (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2 há 10
alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido e conduzido à
sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é aleatoriamente escolhido.

A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a

a) 0,42

b) 0,47

c) 0,50

d) 0,53

e) 0,55

Comentários:

A probabilidade de sortear um aluno do sexo feminino da sala 2 depende do resultado do sorteio da sala 1.
Assim, vamos dividir os possíveis resultados em 2 cenários.


Cenário 1) Sorteio de um aluno do sexo masculino da sala 1.
A probabilidade de sortear um aluno do sexo masculino da sala 1, sabendo que há 12 alunos do sexo
masculino e 8 alunos do sexo feminino (20, no total) é:
                                                                 12 3
                                                     𝑃(𝑀1 ) =      =
                                                                 20 5
Sabendo que o aluno sorteado irá para a sala 2, então, nesse cenário, haverá 10 + 1 = 11 alunos do sexo
masculino e 9 alunos do sexo feminino na sala 2 (20, total).
A probabilidade de sortear um aluno do sexo feminino dessa sala, nessas condições, é:
                                                                      9
                                                      𝑃(𝐹2 |𝑀1 ) =
                                                                     20
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                               9 3  27
                                         𝑃(𝐹2 ∩ 𝑀1 ) =          × =    = 0,27
                                                              20 5 100


Cenário 2) Sorteio de um aluno do sexo feminino da sala 1.
A probabilidade de sortear um aluno do sexo feminino da sala 1, sabendo que há 12 alunos do sexo masculino
e 8 alunos do sexo feminino (20, no total) é:
                                                                  8   2
                                                     𝑃(𝐹1 ) =       =
                                                                 20 5

          Receita Federal (Analista Tributário) Estatística                                            57
          www.estrategiaconcursos.com.br                                                               85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Nesse cenário, haverá 9 + 1 = 10 alunos do sexo feminino e 10 alunos do sexo masculino (20, no total) na
sala 2. A probabilidade de sortear um aluno do sexo feminino dessa sala, nessas condições, é:
                                                                  10 1
                                                   𝑃(𝐹2 |𝐹1 ) =     =
                                                                  20 2
E a probabilidade de sortear um aluno do sexo feminino da sala 2, nesse cenário, é o produto:
                                                             1 2 1
                                            𝑃(𝐹2 ∩ 𝐹1 ) =     × = = 0,2
                                                             2 5 5


E a probabilidade de sortear um aluno do sexo feminino da sala 2, considerando ambos os cenários, é a soma:
                                              𝑃(𝐹2 ) = 0,27 + 0,2 = 0,47
Gabarito: B

18.    (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] = 𝟎, 𝟐 e
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
                                                 𝑃(𝐴|𝐵) = 𝑃(𝐴) = 0,2
Ademais, a probabilidade da interseção é o produto das probabilidades:
                                   𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵) = 0,2 × 0,5 = 0,1
Conhecendo a probabilidade da interseção, podemos calcular a probabilidade da união, pela fórmula
correspondente:
                        𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,2 + 0,5 − 0,1 = 0,6
As probabilidades de 𝑃(𝐴|𝐵), 𝑃(𝐴 ∪ 𝐵) e 𝑃(𝐴 ∩ 𝐵) são, respectivamente: 0,2; 0,6; 0,1.
Gabarito: A

         Receita Federal (Analista Tributário) Estatística                                              58
         www.estrategiaconcursos.com.br                                                                 85

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 06

19.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
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

Comentários:

O enunciado informa que A e B são eventos com probabilidade maior que zero.
Em relação à afirmativa I, eventos mutuamente exclusivos são aqueles em que um não ocorre se o outro
ocorre, o que caracteriza eventos dependentes. Afinal, a probabilidade de um ocorrer, dado que o outro
ocorreu, é nula e, portanto, diferente da probabilidade não condicionada:
                                                   𝑃(𝐴|𝐵) = 0 ≠ 𝑃(𝐴)
                                                   𝑃(𝐵|𝐴) = 0 ≠ 𝑃(𝐵)
Assim, a afirmativa I é verdadeira, pois, de fato, esses eventos não são independentes.
Em relação à afirmativa II, a probabilidade da interseção de eventos independentes é o produto das
probabilidades:
                                                𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵)
Sabendo que ambas as probabilidades são maiores que zero, então o produto também é maior que zero.
Portanto, a afirmativa II é verdadeira.
Em relação à afirmativa III, para eventos dependentes, a probabilidade condicionada é diferente da
probabilidade não condicionada:
                                                      𝑃(𝐴|𝐵) ≠ 𝑃(𝐴)
Logo, a afirmativa III também é verdadeira.
Gabarito: E

20.     (FGV/2021 – FunSaúde/CE) Em um grupo de pessoas de uma pequena cidade, 30 acessam o site A
e 24 acessam o site B. Alguns acessam os dois sites. Sorteando ao acaso uma das pessoas que acessam o
site A, a probabilidade de que ela também acesse o site B é 60%.


          Receita Federal (Analista Tributário) Estatística                                        59
          www.estrategiaconcursos.com.br                                                           85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Sorteando ao acaso uma das pessoas que acessam o site B, a probabilidade de que ela também acesse o
site A é:

a) 25%

b) 40%

c) 50%

d) 60%

e) 75%

Comentários:

O enunciado informa o número de pessoas que acessam o site A e o site B, bem como a probabilidade
condicional de uma pessoa acessar o site B, dado que acessa o site A. A probabilidade condicional é a razão
entre a probabilidade (ou número de elementos) da interseção e a probabilidade (ou número de elementos)
do evento que sabemos ter ocorrido (no caso, acessar o site A):
                                                       𝑃(𝐴 ∩ 𝐵) 𝑛(𝐴 ∩ 𝐵)
                                          𝑃(𝐵|𝐴) =             =
                                                         𝑃(𝐴)     𝑛(𝐴)
Sabendo que essa razão é 𝑃(𝐵|𝐴) = 60% e que 𝑛(𝐴) = 30 pessoas acessam o site A, podemos calcular o
número de pessoas que acessam ambos os sites:
                                                             𝑛(𝐴 ∩ 𝐵)
                                              𝑃(𝐵|𝐴) =                = 0,6
                                                                30
                                              𝑛(𝐴 ∩ 𝐵) = 0,6 × 30 = 18
Conhecendo o número de pessoas da interseção e sabendo que 𝑛(𝐵) = 24 pessoas acessam o site B,
podemos calcular a probabilidade condicional de uma pessoa acessar o site A, dado que acessa o site B:
                                                    𝑛(𝐴 ∩ 𝐵) 18 3
                                       𝑃(𝐴|𝐵) =             =   = = 75%
                                                      𝑛(𝐵)    24 4
Gabarito: E

21.    (FGV/2021 – FunSaúde/CE) Dois eventos A e B são tais que P[A] = 0,8, P[B] = 0,5 e P[A|B]= 0,4.
Assim, a probabilidade condicional P[B|A] é igual a

a) 15%

b) 25%

c) 30%

d) 40%

e) 50%


         Receita Federal (Analista Tributário) Estatística                                              60
         www.estrategiaconcursos.com.br                                                                 85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Comentários:

O enunciado informa a probabilidade dos eventos A e B, bem como a probabilidade condicional de A, dado
B, a qual corresponde à razão entre a probabilidade da interseção e a probabilidade do evento a priori, no
caso, o evento B:
                                                                            𝑃(𝐴 ∩ 𝐵)
                                                  𝑃(𝐴|𝐵) =
                                                                              𝑃(𝐵)
Sabendo que 𝑃(𝐵) = 0,5 e que 𝑃(𝐴|𝐵) = 0,4, podemos calcular a probabilidade da interseção:
                                                                          𝑃(𝐴 ∩ 𝐵)
                                              𝑃(𝐴|𝐵) =                             = 0,4
                                                                            0,5
                                             𝑃(𝐴 ∩ 𝐵) = 0,4 × 0,5 = 0,2
Conhecendo as probabilidades 𝑃(𝐴) = 0,8 e 𝑃(𝐴 ∩ 𝐵) = 0,4, podemos calcular a probabilidade condicional:
                                                             ==219a34==

                                                    𝑃(𝐴 ∩ 𝐵) 0,2 1
                                       𝑃(𝐵|𝐴) =             =    = = 25%
                                                      𝑃(𝐴)    0,8 4
Gabarito: B

22.     (FGV/2021 – FunSaúde/CE) Dois eventos independentes A e B têm probabilidades respectivas
iguais a 0,4 e 0,5. A probabilidade de A ∪ B ocorrer é igual a

a) 0,5
b) 0,6
c) 0,7
d) 0,8
e) 0,9

Comentários:

A probabilidade da interseção de eventos independentes é o produto das probabilidades de cada evento:
                                   𝑃(𝐴 ∩ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵) = 0,4 × 0,5 = 0,2
Logo, a probabilidade da união é:
                        𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) − 𝑃(𝐴 ∩ 𝐵) = 0,4 + 0,5 − 0,2 = 0,7
Gabarito: C

23.    (FGV/2021 – FunSaúde/CE) Em uma população, 10% das pessoas têm uma dada comorbidade. Se
quatro pessoas forem aleatoriamente sorteadas, com reposição, dessa população, a probabilidade de que
ao menos uma apresente a referida comorbidade é, aproximadamente, igual a


         Receita Federal (Analista Tributário) Estatística                                             61
         www.estrategiaconcursos.com.br                                                                85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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
                                        𝑃(𝑠𝑒𝑚) = 1 − 𝑃(𝑐𝑜𝑚) = 1 − 0,1 = 0,9
E a probabilidade de as 4 pessoas não apresentarem comorbidade é o produto (interseção de eventos
independentes):
                                     𝑃(𝑛𝑒𝑛ℎ𝑢𝑚) = 0,9 × 0,9 × 0,9 × 0,9 ≅ 0,66
E a probabilidade de pelo menos uma pessoa apresentar comorbidade é complementar:
                                   𝑃(𝑔𝑎𝑛ℎ𝑎𝑟 𝑝𝑒𝑙𝑜 𝑚𝑒𝑛𝑜𝑠 𝑢𝑚) = 1 − 0,66 = 0,34
Gabarito: A

24.     (FGV/2021 – FunSaúde/CE) Em uma caixa há 7 fichas numeradas com 1, 3, 4, 6, 7, 8, 9. Retira-se
aleatoriamente uma ficha da caixa, anota-se o número e a mesma é, então, recolocada na caixa. A seguir,
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


           Receita Federal (Analista Tributário) Estatística                                           62
           www.estrategiaconcursos.com.br                                                              85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                    𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 𝑝𝑎𝑟) = 1 − 𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 í𝑚𝑝𝑎𝑟)
Para que o produto seja ímpar, é necessário que ambos os produtos sejam ímpares. Sabendo que há 4
números ímpares {1, 3, 7 e 9}, dentre 7, a probabilidade de selecionar um número ímpar é:
                                                                    4
                                                             𝑝𝑖 =
                                                                    7
E a probabilidade de ambos os números serem ímpares é o produto (interseção de eventos independentes):
                                                                        4 4 16
                                          𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 í𝑚𝑝𝑎𝑟) =             × =
                                                                        7 7 49
Logo, a probabilidade de o produto ser par é complementar:
                                                                         16 33
                                          𝑃(𝑝𝑟𝑜𝑑𝑢𝑡𝑜 𝑝𝑎𝑟) = 1 −             =
                                                                         49 49
Gabarito: A

25.    (FGV/2021 – FunSaúde/CE) Em uma urna, há bolas pequenas e bolas grandes, sendo 75% pequenas
e as demais são grandes. Das bolas pequenas, 20% são azuis e as demais são vermelhas e, das bolas
grandes, 60% são azuis e as demais são vermelhas. Retira-se, aleatoriamente, uma bola da urna e constata-
se que ela é azul. A probabilidade de a bola retirada ser pequena é de

a) 20%

b) 25%

c) 30%

d) 40%

e) 50%

Comentários:

Essa questão trabalha com o Teorema de Bayes, pois informa as probabilidades condicionais considerando
os tamanhos como evento que já ocorreu; e pede a probabilidade condicional considerando a cor como
evento que já ocorreu, invertendo, portanto, o evento que sabemos ter ocorrido.
                                      𝑃(𝑃𝑞 ∩ 𝐴)            𝑃(𝐴|𝑃𝑞) × 𝑃(𝑃𝑞)
                       𝑃(𝑃𝑞|𝐴) =                =
                                        𝑃(𝐴)      𝑃(𝐴|𝑃𝑞) × 𝑃(𝑃𝑞) + 𝑃(𝐴|𝐺𝑟) × 𝑃(𝐺𝑟)
O enunciado informa que:
   •     75% das bolas são pequenas e as demais são grandes:
                                                      𝑃(𝑃𝑞) = 0,75
                                      𝑃(𝐺𝑟) = 1 − 𝑃(𝑃𝑞) = 1 − 0,75 = 0,25

         Receita Federal (Analista Tributário) Estatística                                            63
         www.estrategiaconcursos.com.br                                                               85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

   •   20% das bolas pequenas são azuis: 𝑃(𝐴|𝑃𝑞) = 0,2
   •   60% das bolas grandes são azuis: 𝑃(𝐴|𝐺𝑟) = 0,6
Substituindo esses resultados na fórmula de Bayes, encontramos condicional de a bola ser azul, dado que é
pequena:
                                        0,2 × 0,75          0,15      0,15 1
                  𝑃(𝑃𝑞|𝐴) =                             =           =     = = 50%
                                 0,2 × 0,75 + 0,6 × 0,25 0,15 + 0,15 0,30 2
Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                             64
        www.estrategiaconcursos.com.br                                                                85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                LISTA DE QUESTÕES – FGV

Conceitos Iniciais

1.     (FGV/2023 – Pref. SP) Considere o seguinte experimento aleatório: de uma caixa contendo 5 bolas
verdes e 5 bolas laranjas, retiram-se em sequência e sem reposição 3 bolas da caixa, observando-se, a cada
retirada, a cor da bola.

O número de elementos do espaço amostral dessa experiência é

a) 15

b) 12
                                                            ==219a34==

c) 9

d) 8

e) 4

        Receita Federal (Analista Tributário) Estatística                                              65
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

Equipe Exatas Estratégia Concursos
Aula 06

                                                GABARITO
 1. LETRA D

      Receita Federal (Analista Tributário) Estatística                  66
      www.estrategiaconcursos.com.br                                     85

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                  LISTA DE QUESTÕES – FGV

Definições de Probabilidade

1.     (FGV/2023 – TJ/SE) Joaquim jogou um dado de seis faces, não viciado, por duas vezes, uma após a
outra. A probabilidade de o resultado do segundo lançamento ser maior que o do primeiro lançamento é
de:

a) 1/12

b) 1/6

c) 1/3

d) 5/12

e) 1/2

2.    (FGV/2023 – RFB) Uma equipe de trabalho reúne 4 auditores e 6 analistas. Se três pessoas dessa
equipe forem selecionadas aleatoriamente para formar um pequeno grupo de trabalho, a probabilidade
de que esse grupo seja formado por dois analistas e um auditor é igual a

a) 0,2

b) 0,5

c) 0,6

d) 0,7

e) 0,8

3.    (FGV/2022 – TRT/PB) Se escolhemos ao acaso um número de três algarismos, a probabilidade de
que seus três algarismos sejam distintos é igual a

a) 46%.

b) 50%.

c) 60%.

d) 72%.

e) 78%.

          Receita Federal (Analista Tributário) Estatística                                        67
          www.estrategiaconcursos.com.br                                                           85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

4.     (FGV/2022 – CBM/RJ) Solange e Marcelo fazem parte de um grupo de 10 pessoas. Sorteiam-se duas
pessoas desse grupo, em sequência e sem reposição. A probabilidade de Solange ser sorteada e Marcelo
não é de:

a) 8/45

b) 1/10

c) 1/5

d) 4/25

e) 3/40


                                                               ==219a34==

5.     (FGV/2022 – CM Taubaté) Em uma urna há 6 bolas numeradas. Retira-se da urna, aleatoriamente,
2 bolas em sequência e sem reposição. A probabilidade de o maior número nas bolas retiradas ser igual a
4é

a) 1/2

b) 2/3

c) 1/5

d) 2/5

e) 3/5

6.     (FGV/2022 – Câmara de Taubaté/SP) Dois números diferentes serão sorteados, aleatoriamente,
entre os números −3, −2, −1, 0, 1, 2, 3, 4. A probabilidade de que o produto dos dois números sorteados
seja maior do que zero é:

a) 1/2.

b) 9/28.

c) 19/28.

d) 19/56.

e) 23/56.

           Receita Federal (Analista Tributário) Estatística                                        68
           www.estrategiaconcursos.com.br                                                           85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

7.     (FGV/2022 – TCE/TO) Em um saco há 9 bolinhas iguais, numeradas de 1 a 9. Duas bolinhas são
retiradas do saco ao acaso. A probabilidade de que as bolinhas retiradas tenham números consecutivos é,
aproximadamente, igual a:

a) 22%;

b) 28%;

c) 33%;

d) 39%;

e) 45%.

8.    (FGV/2022 – TRT/PB) Numa empresa há seis gerentes e quatro superintendentes. Se quatro dessas
pessoas forem selecionadas ao acaso para formar uma comissão de quatro membros, a probabilidade de
que dois gerentes e dois superintendentes sejam escolhidos é aproximadamente igual a

a) 0,43.

b) 0,50.

c) 0,54.

d) 0,59.

e) 0,63.

9.     (FGV/2022 – SEFAZ/AM) Em uma urna há 5 bolas iguais, cada uma com uma letra da sigla SEFAZ.
Todas as bolas têm letras diferentes entre si. Retiram-se, aleatoriamente, 2 bolas da urna. A probabilidade
de que tenham sido retiradas as 2 vogais é de

a) 1/5

b) 2/5

c) 3/5

d) 3/10

e) 1/10

           Receita Federal (Analista Tributário) Estatística                                            69
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

10.   (FGV/2022 – PM/AM) O soldado Garcia vai liderar uma equipe de 3 soldados (ele incluído) para
uma missão. Os outros 2 soldados da equipe serão sorteados aleatoriamente de um grupo de 6 soldados,
sendo que um dos 6 é o soldado Ryan, amigo do soldado Garcia. A probabilidade de o soldado Ryan ser
um dos 2 sorteados é

a) 1/6

b) 1/5

c) 1/4

d) 1/3

e) 1/2

11.    (FGV/2022 – SEMSA Manaus) Numa vila moram 20 pessoas, das quais 5 são crianças. Se sortearmos
5 pessoas diferentes dessa vila, a probabilidade de que três sejam crianças é aproximadamente igual a

a) 3,4%

b) 6,8%

c) 10,2%

d) 13,6%

e) 20,4%

12.    (FGV/2021 – Paulínia) Em uma caixa há 2 bolas brancas e 4 bolas pretas. Retirando, ao acaso 2
bolas, a probabilidade de que elas sejam de cores diferentes é de

a) 2/5

b) 5/8

c) 5/9

d) 7/12

e) 8/15

          Receita Federal (Analista Tributário) Estatística                                       70
          www.estrategiaconcursos.com.br                                                          85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

13.     (FGV/2021 – TJ/RO) As amigas Alice e Bianca estão entre as 6 pessoas classificadas em um concurso
e esperam a entrevista com a banca examinadora. Os classificados receberão aleatoriamente números de
1 a 6, que determinarão a ordem em que eles serão entrevistados.

A probabilidade de que Alice e Bianca fiquem vizinhas nessa fila é:

a) 1/2

b) 1/3

c) 1/4

d) 1/5

e) 1/6

         Receita Federal (Analista Tributário) Estatística                                            71
         www.estrategiaconcursos.com.br                                                               85

                                       


---

Equipe Exatas Estratégia Concursos
Aula 06

                                                GABARITO
 1.   LETRA D                                6. LETRA B                  11. LETRA B
 2.   LETRA B                                7. LETRA A                  12. LETRA E
 3.   LETRA D                                8. LETRA A                  13. LETRA B
 4.   LETRA A                                9. LETRA E
 5.   LETRA C                                10. LETRA D

      Receita Federal (Analista Tributário) Estatística                                72
      www.estrategiaconcursos.com.br                                                   85

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                  LISTA DE QUESTÕES – FGV

Combinações de Eventos

1.      (FGV/2023 – AGENERSA) Em uma caixa há 5 cartas e cada uma delas contém um dos números: 1, 3,
4, 5, 8. Não aparece o mesmo número em duas cartas. Duas cartas são retiradas da caixa ao acaso. A
probabilidade de que o produto dos números dessas cartas seja um número par é de

a) 30%
b) 40%
c) 50%
d) 60%
e) 70%

2.    (FGV/2022 – PC/AM) Considere dois eventos A e B mutuamente exclusivos e que Prob(.) indica a
probabilidade do evento indicado entre parênteses. Logo

a) Prob(A ∩ B) = Prob(A)Prob(B)

b) Prob(A ∪ B) = Prob(A)Prob(B)

c) Prob(A ∩ B) = 0

d) Prob(A ∪ B) = 0

e) Prob(A ∪ B) = 1

3.      (FGV/2022 – SSP/AM) Seis cartas estão em uma caixa; em cada uma delas está escrita uma das seis
letras: A, B, C, D, E, F, e cada letra só aparece uma vez. Retirando da caixa, simultaneamente e ao acaso,
duas cartas, a probabilidade de que as cartas A ou C sejam sorteadas é

a) 1/2

b) 2/5

c) 3/5

d) 7/15

e) 8/15


          Receita Federal (Analista Tributário) Estatística                                            73
          www.estrategiaconcursos.com.br                                                               85

                                        


---

Equipe Exatas Estratégia Concursos
Aula 06

                                                GABARITO
 1. LETRA E                                  2. LETRA C                  3. LETRA C

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                               74
      www.estrategiaconcursos.com.br                                                  85

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                               LISTA DE QUESTÕES – FGV

Probabilidade Condicional

1.    (FGV/2024 – Pref. São José dos Campos) Sejam A, B e C três eventos quaisquer e P(.) a função
probabilidade. Se A, B e C são independentes, então P(A ∩ B ∩ C) é igual a

a) 𝑃(𝐴) + 𝑃(𝐵) + 𝑃(𝐶)

b) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶)

c) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶) − 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)

d) 𝑃(𝐴). 𝑃(𝐵). 𝑃(𝐶) − 𝑃(𝐴 ∩ 𝐵) − 𝑃(𝐴 ∩ 𝐶) − 𝑃(𝐴 ∩ 𝐵) + 𝑃(𝐴 ∪ 𝐵 ∪ 𝐶)

e) 0

2.      (FGV/2023 – Pref. SP) A professora da turma do 4º ano propôs um jogo de “Par ou Ímpar” diferente.
Para isso, ela organizou a turma em duplas e entregou 2 dados convencionais para cada dupla. Na sua vez
de jogar, os jogadores decidem quem será par e quem será ímpar, lançam os 2 dados e multiplicam os
pontos sorteados. Por exemplo, se o jogador escolher par, lançar os dados e sortear 2 e 4, ele ganha a
rodada (2 x 4 = 8 e 8 é par), mas se sair 3 e 5, o seu adversário será o vencedor da rodada (3 x 5 = 15 e 15 é
ímpar). Ao final de 10 rodadas, ganha o jogo quem tiver sucesso em mais rodadas. Sobre esse jogo, é
correto afirmar que

a) o jogador que escolher par tem mais chance de ganhar a rodada.

b) o jogador que ganhar a primeira rodada tem mais chance de vencer o jogo.

c) o jogador que escolher ímpar tem mais chance de ganhar a rodada.

d) o jogador que sortear 6 em cada dado tem mais chance de ganhar a rodada.

e) os dois jogadores têm a mesma chance de ganhar a rodada.

3.     (FGV/2023 – BANESTES) A figura a seguir ilustra duas urnas onde estão depositadas bolas brancas
e pretas.

        Receita Federal (Analista Tributário) Estatística                                                  75
        www.estrategiaconcursos.com.br                                                                     85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Um dado comum e honesto será lançado. Se o resultado desse lançamento for 1, 2, 3 ou 4, uma bola será
sorteada, ao acaso, da Urna 1. Se o resultado do lançamento for 5 ou 6, uma bola será sorteada, ao acaso,
da Urna 2. Nessas condições, após o lançamento aleatório do dado e a subsequente extração ao acaso da
bola de uma das urnas, a probabilidade de que essa bola seja preta

a) é maior que 55%

b) está entre 45% e 55%

c) está entre 35% e 45%

d) está entre 25% e 35%

e) é menor que 25%

4.     (FGV/2023 – BANESTES) Considere o lançamento de um dado equilibrado (ou seja, todas as seis
faces do dado têm a mesma chance). Se o número de pontos obtidos for no máximo 5, diz-se que o evento
X ocorreu. Se o número de pontos obtidos for par, diz-se que o evento Y ocorreu. A probabilidade
condicional de X dado Y é igual a

a) 1/2

b) 2/3

c) 2/5

d) 1/3

e) 5/6

5.      (FGV/2023 – RFB) A partida decisiva Maiorais x Geniais envolve uma grande incógnita. O goleiro
Pegatudo, dos Geniais, está machucado, e a probabilidade de sua presença em campo é de 60%. Das
últimas 10 partidas entre as equipes com Pegatudo no gol, os Geniais ganharam 7 e perderam 3. Porém,
nas últimas 4 vezes em que Pegatudo esteve ausente, os Maiorais venceram 3 e só perderam 1. Usando
esses dados, a probabilidade que os Geniais saiam vencedores do confronto é estimada em

a) 76%

b) 68%

c) 60%

d) 58%

e) 52%

         Receita Federal (Analista Tributário) Estatística                                            76
         www.estrategiaconcursos.com.br                                                               85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

7.     (FGV/2023 – BANESTES) Para determinado teste que visa a diagnosticar a presença de defeitos em
placas utilizadas na montagem de celulares, as seguintes afirmações estão corretas:

   •      a probabilidade de o teste indicar a presença de defeitos, quando na realidade eles estão ausentes,
          é de 5%;
   •      a probabilidade de o teste indicar a ausência de defeitos, quando na realidade eles estão presentes,
          é de 20%.

Esse teste será aplicado a uma determinada placa sorteada ao acaso no estoque de uma fábrica de placas,
no qual 10% das placas produzidas apresentam defeitos. A probabilidade condicional de que a placa seja
realmente defeituosa, dado que o resultado do teste acusou a presença de defeito, é igual a

a) 8%

b) 16%

c) 32%

d) 64%

e) 80%

8.     (FGV/2022 – SEMSA Manaus) Se A e B são dois eventos quaisquer com probabilidades maiores do
que zero, avalie se as afirmativas a seguir são falsas (F) ou verdadeiras (V).

I. Se A e B são independentes então são mutuamente exclusivos.

II. Se P[A] = 0,5 e P[B] = 0,8 então o menor valor possível de P[A ∪ B] é 0,8.

III. Se A e B são mutuamente exclusivos então não são independentes


           Receita Federal (Analista Tributário) Estatística                                               77
           www.estrategiaconcursos.com.br                                                                  85

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 06

As afirmativas são respectivamente

a) F, F e F

b) V, V e F

c) F, V e V

d) V, F e V

e) V, V e V

9.     (FGV/2022 – SEFAZ/ES) As probabilidades de dois eventos A e B são P[A] = 0,5, P[B] = 0,8. A
probabilidade condicional de A ocorrer dado que B ocorre é P[A|B] = 0,6. Assim, a probabilidade de que A
ou B ocorram é igual a

a) 0,56

b) 0,60

c) 0,76

d) 0,82

e) 0,94

10.   (FGV/2022 – TCE/TO) Dois eventos A e B têm probabilidades iguais a 0,5 e 0,6, respectivamente. A
probabilidade condicional de A ocorrer dado que B ocorre é igual a 0,8.

Assim, a probabilidade de B ocorrer dado que A ocorre é igual a:

a) 0,96

b) 0,82

c) 0,54

d) 0,36

e) 0,24

          Receita Federal (Analista Tributário) Estatística                                          78
          www.estrategiaconcursos.com.br                                                             85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

11.   (FGV/2022 – SEMSA Manaus) Suponha que um estatístico jogue dois dados não viciados. Ele
informa que os números observados são pares. Logo, a probabilidade de que a soma deles seja 6 é

a) 1/6

b) 2/3

c) 1/3

d) 2/9

e) 1/2

12.    (FGV/2022 – SEMSA Manaus) A urna I contém quatro bolas brancas e seis pretas; a urna II contém
quatro bolas brancas e cinco pretas. Sorteamos uma bola da urna I e a colocamos na urna II. Em seguida,
sorteamos uma bola da urna II.

A probabilidade de que essa segunda bola sorteada seja branca é igual a

a) 0,24

b) 0,30

c) 0,36

d) 0,40

e) 0,44

13.    (FGV/2022 – TJ/TO) Bárbara escreveu cada uma das 13 letras da palavra PROBABILIDADE em 13
cartões que foram colocados em uma urna. Depois, Bárbara retirou em sequência 2 cartões da urna, sem
reposição. A probabilidade de que Bárbara tenha retirado os 2 cartões com a letra B é:

a) 1/78

b) 1/39

c) 1/26

d) 2/13.

e) 1/13.

           Receita Federal (Analista Tributário) Estatística                                        79
           www.estrategiaconcursos.com.br                                                           85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 06

14.   (FGV/2022 – MPE/SC) Duas urnas A e B têm, cada uma, 9 bolas numeradas. Na urna A, há 4 bolas
com números ímpares e 5 bolas com números pares. Na urna B, há 5 bolas com números ímpares e 4 bolas
com números pares. Retira-se aleatoriamente uma bola de cada urna. A probabilidade de que o produto
dos números das bolas retiradas seja par é:

a) 1/2.

b) 4/9.

c) 5/9.

d) 20/81.

e) 61/81.

15.    (FGV/2022 – EPE) Uma determinada fábrica produz dois tipos de cabos elétricos, digamos M e N,
nas proporções 4/10 e 6/10, respectivamente. A probabilidade de ocorrência de uma falha no cabo tipo
M é de 5%, e no cabo tipo N, é de 10%. Retirou-se, ao acaso, um cabo produzido na fábrica, e verificou-se
que o cabo tinha falha. Assim, a probabilidade de que esse cabo seja do tipo M é

a) 0,25

b) 0,30

c) 0,33

d) 0,40

e) 0,50.

16.   (FGV/2022 – CBM/AM) Márcia tem uma ficha amarela, uma ficha verde e duas vermelhas. Joana
tem duas fichas amarelas e uma ficha verde. Cada uma delas escolhe aleatoriamente uma de suas fichas e
mostra para a outra. A probabilidade de que as fichas mostradas tenham a mesma cor é:

a) 1/12

b) 1/7

c) 1/6

d) 1/4

e) 1/3

           Receita Federal (Analista Tributário) Estatística                                          80
           www.estrategiaconcursos.com.br                                                             85

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 06

17.     (FGV/2022 – TCE/TO) Na sala 1 há 12 alunos do sexo masculino e 8 do feminino; na sala 2 há 10
alunos do sexo masculino e 9 do feminino. Um aluno da sala 1 é aleatoriamente escolhido e conduzido à
sala 2. Em seguida, um aluno da sala 2, já com o sorteado na sala 1 incluído, é aleatoriamente escolhido.

A probabilidade de que o aluno sorteado na sala 2 seja do sexo feminino é igual a

a) 0,42

b) 0,47

c) 0,50

d) 0,53

e) 0,55

18.    (FGV/2022 – TRT/MA) A e B são dois eventos independentes com probabilidades 𝑷[𝑨] = 𝟎, 𝟐 e
𝑷[𝑩] = 𝟎, 𝟓. A probabilidade condicional 𝑷[𝑨|𝑩] e as probabilidades 𝑷[𝑨 ∪ 𝑩] e 𝑷[𝑨 ∩ 𝑩] valem
respectivamente

a) 0,2; 0,6; 0,1
b) 0,1; 0,6; 0,2
c) 0,2; 0,3; 0,1
d) 0,2; 0,5; 0,1
e) 0,1; 0,6; 0,1

19.   (FGV/2022 – TRT/MA) Avalie se as afirmativas a seguir, acerca de dois eventos A e B com
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


          Receita Federal (Analista Tributário) Estatística                                           81
          www.estrategiaconcursos.com.br                                                              85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 06

20.     (FGV/2021 – FunSaúde/CE) Em um grupo de pessoas de uma pequena cidade, 30 acessam o site A
e 24 acessam o site B. Alguns acessam os dois sites. Sorteando ao acaso uma das pessoas que acessam o
site A, a probabilidade de que ela também acesse o site B é 60%. Sorteando ao acaso uma das pessoas que
acessam o site B, a probabilidade de que ela também acesse o site A é:

a) 25%

b) 40%

c) 50%

d) 60%

e) 75%

21.    (FGV/2021 – FunSaúde/CE) Dois eventos A e B são tais que P[A] = 0,8, P[B] = 0,5 e P[A|B]= 0,4.
Assim, a probabilidade condicional P[B|A] é igual a

a) 15%

b) 25%

c) 30%

d) 40%

e) 50%

22.     (FGV/2021 – FunSaúde/CE) Dois eventos independentes A e B têm probabilidades respectivas
iguais a 0,4 e 0,5. A probabilidade de A ∪ B ocorrer é igual a

a) 0,5

b) 0,6

c) 0,7

d) 0,8

e) 0,9

         Receita Federal (Analista Tributário) Estatística                                          82
         www.estrategiaconcursos.com.br                                                             85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 06

23.    (FGV/2021 – FunSaúde/CE) Em uma população, 10% das pessoas têm uma dada comorbidade. Se
quatro pessoas forem aleatoriamente sorteadas, com reposição, dessa população, a probabilidade de que
ao menos uma apresente a referida comorbidade é, aproximadamente, igual a

a) 0,34

b) 0,42

c) 0,54

d) 0,66

e) 0,78

                                                               ==219a34==

24.     (FGV/2021 – FunSaúde/CE) Em uma caixa há 7 fichas numeradas com 1, 3, 4, 6, 7, 8, 9. Retira-se
aleatoriamente uma ficha da caixa, anota-se o número e a mesma é, então, recolocada na caixa. A seguir,
retira-se, também aleatoriamente, uma ficha da caixa e anota-se o número.

A probabilidade de o produto dos dois números sorteados ser par é:

a) 33/49

b) 16/49

c) 14/49

d) 4/7

e) 3/7

25.    (FGV/2021 – FunSaúde/CE) Em uma urna, há bolas pequenas e bolas grandes, sendo 75% pequenas
e as demais são grandes. Das bolas pequenas, 20% são azuis e as demais são vermelhas e, das bolas
grandes, 60% são azuis e as demais são vermelhas. Retira-se, aleatoriamente, uma bola da urna e constata-
se que ela é azul. A probabilidade de a bola retirada ser pequena é de

a) 20%

b) 25%

c) 30%

d) 40%

e) 50%


           Receita Federal (Analista Tributário) Estatística                                          83
           www.estrategiaconcursos.com.br                                                             85

                                         


---

Equipe Exatas Estratégia Concursos
Aula 06

                                                GABARITO
 1.   LETRA B                                10. LETRA A                 19. LETRA E
 2.   LETRA A                                11. LETRA D                 20. LETRA E
 3.   LETRA B                                12. LETRA E                 21. LETRA B
 4.   LETRA B                                13. LETRA A                 22. LETRA C
 5.   LETRA E                                14. LETRA E                 23. LETRA A
 6.   LETRA C                                15. LETRA A                 24. LETRA A
 7.   LETRA D                                16. LETRA D                 25. LETRA E
 8.   LETRA C                                17. LETRA B
 9.   LETRA D                                18. LETRA A

      Receita Federal (Analista Tributário) Estatística                                84
      www.estrategiaconcursos.com.br                                                   85

                                    


---

---
