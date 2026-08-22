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
arquivo_origem: Aula 11_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '11'
titulo_aula: Estatística
---

# Estatística

Aula 10
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                             10 de Maio de 2024

---

      Equipe Exatas Estratégia Concursos
      Aula 10

                                                                                     Índice
1) Distribuição Uniforme


2) Distribuição Exponencial


3) Distribuição Normal


4) Soma de Variáveis e o Teorema


5) Distribuição Qui-Quadrado


6) Distribuição T de Student


7) Distribuição F de Snedecor


8) Questões Comentadas - Distribuição Uniforme - FGV


9) Questões Comentadas - Distribuição Exponencial - FGV


10) Questões Comentadas - Distribuição Normal - FGV


11) Questões Comentadas - Soma de Variáveis e o Teorema Central do Limite - FGV


12) Questões Comentadas - Distribuições Avançadas - FGV


13) Lista de Questões - Distribuição Uniforme - FGV


14) Lista de Questões - Distribuição Exponencial - FGV


15) Lista de Questões - Distribuição Normal - FGV


16) Lista de Questões - Soma de Variáveis e o Teorema Central do Limite - FGV


17) Lista de Questões - Distribuições Avançadas - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          174

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                DISTRIBUIÇÕES CONTÍNUAS
Agora, veremos distribuições teóricas ou especiais de variáveis contínuas.

Distribuição Uniforme

Para variáveis discretas, as distribuições uniformes apresentam a mesma probabilidade para todos os
resultados possíveis. Para variáveis uniformes contínuas, a situação é análoga: a função densidade de
probabilidade (f.d.p.) apresenta um valor constante em todo o intervalo da variável.

A figura abaixo ilustra a f.d.p. de uma variável com distribuição uniforme, que assume um valor constante 𝑘,
em um intervalo (𝑎, 𝑏):

                                     k

                                                a                               b

Ou seja, a função densidade de probabilidade para uma distribuição uniforme é da forma:

                                                      𝑘,      𝑠𝑒 𝑎 < 𝑥 < 𝑏
                                           𝑓 (𝑥 ) = {                       }
                                                     0,      𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜

A probabilidade de todo o Espaço Amostral é de 100% = 1, ou seja, a área delimitada pela função é igual a 1:

                                  Á𝑟𝑒𝑎 = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝒃 − 𝒂) × 𝑘 = 1

                                                               1
                                                      𝑘=
                                                            (𝒃 − 𝒂)

Em outras palavras, conhecendo o intervalo (𝒂, 𝒃), podemos calcular o valor da f.d.p. (𝑘). Assim, os limites
do intervalo 𝒂, 𝒃 são os únicos parâmetros da distribuição uniforme.

Por exemplo, para uma variável com distribuição contínua uniforme no intervalo (𝟏, 𝟓), o valor da f.d.p. para
𝟏 < 𝒙 < 𝟓 (ou seja, o valor de 𝑘) é:

                                                              1     1
                                                    𝑘=            =
                                                           (𝟓 − 𝟏) 4

        Receita Federal (Analista Tributário) Estatística                                                 3
        www.estrategiaconcursos.com.br                                                                   174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Já a probabilidade associada a um intervalo (𝒎, 𝒏), com 𝑎 < 𝑚 < 𝑛 < 𝑏, corresponde à área da região
indicada abaixo:

                                                                                  𝑃 (𝒎 < 𝑋 < 𝒏 )
                                             k


                                                    a       m       n         b

                                     Á𝑟𝑒𝑎 = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝒏 − 𝒎) × 𝑘
                     1
Sabendo que 𝑘 = (𝑏−𝑎), temos:

                                                                        (𝒏−𝒎)
                                                 𝑃(𝒎 < 𝑋 < 𝒏) = (𝒃−𝒂)


Ou seja, a probabilidade de um intervalo em uma distribuição uniforme é a razão entre a amplitude desse
intervalo e a amplitude do intervalo total.

Para o nosso exemplo, da variável com distribuição contínua uniforme no intervalo (𝟏, 𝟓), a probabilidade
𝑃 (𝟐 < 𝑋 < 𝟒) é:

                                                                (𝟒 − 𝟐) 2
                                       𝑃 (𝟐 < 𝑋 < 𝟒 ) =                = = 0,5
                                                                (𝟓 − 𝟏) 4

                                                                                  𝑃 (𝟐 < 𝑋 < 𝟒 )
                                             k


                                                    1       2       4     5

Ressalte-se que, por se tratar de uma variável contínua, temos:

                  𝑃 (𝑚 < 𝑋 < 𝑛 ) = 𝑃 (𝑚 ≤ 𝑋 < 𝑛 ) = 𝑃 (𝑚 < 𝑋 ≤ 𝑛 ) = 𝑃 ( 𝑚 ≤ 𝑋 ≤ 𝑛 )

A função de distribuição acumulada no ponto 𝑥 corresponde à probabilidade de a variável ser menor ou
igual a 𝑥:

                                                   𝐹 (𝑥 ) = 𝑃 (𝑋 ≤ 𝑥 )

        Receita Federal (Analista Tributário) Estatística                                              4
        www.estrategiaconcursos.com.br                                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Para a distribuição uniforme, esse valor é igual à probabilidade de a variável estar entre 𝒙 e o limite inferior
do intervalo 𝒂:

                                       𝐹 (𝑥 ) = 𝑃 (𝑋 ≤ 𝑥 ) = 𝑃 ( 𝑎 ≤ 𝑋 ≤ 𝑥 )

                                                                   𝐹 (𝑥 ) = 𝑃 (𝑎 ≤ 𝑋 ≤ 𝑥 )
                                          k


                                                   a       x               b


Logo, para 𝑎 < 𝑥 < 𝑏, a função de distribuição acumulada é dada por:

                                     Á𝑟𝑒𝑎 = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝒙 − 𝒂) × 𝑘

                                                                   (𝒙−𝒂)
                                                           𝑭(𝒙) = (𝒃−𝒂)

Para o nosso exemplo, da variável contínua no intervalo (𝟏, 𝟓), a f.d.a. para 𝒙 = 𝟐, isto é, a probabilidade
𝑃 (𝑋 ≤ 𝟐) é:

                                                           (𝟐 − 𝟏) 1
                                              𝑭(𝟐) =              = = 0,25
                                                           (𝟓 − 𝟏) 4

                                                                      𝐹 (𝟐) = 𝑃 (1 ≤ 𝑋 ≤ 𝟐 )

                                               k


                                                       1       2           5

         A maioria das distribuições teóricas conhecidas, tanto discretas quanto contínuas, fazem
         parte da chamada família exponencial, cuja função densidade de probabilidade pode ser
         descrita de forma similar, como as distribuições discretas: binomial, geométrica,
         hipergeométrica, de Poisson; e as contínuas: exponencial, Normal, Beta, Weibull.

         A distribuição uniforme contínua, assim como a distribuição uniforme discreta, é uma
         distribuição importante que não pertence à família exponencial.

        Receita Federal (Analista Tributário) Estatística                                                    5
        www.estrategiaconcursos.com.br                                                                      174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(FGV/2017 – IBGE) Uma variável aleatória contínua X é uniformemente distribuída no intervalo real [0 , 50].
A probabilidade de que X seja maior do que 20 é igual a:
a) 0,8
b) 0,6
c) 0,4
d) 0,2
e) 0,1
Comentários:
O enunciado informa que X é uniformemente distribuída no intervalo de [0,50], logo a = 0 e b = 50. A
probabilidade P(X > 20) é dada por:
                                                                         P(X > 20) = P(20 < X < 50)

                                           k


                                               0      20           50
                                                                                 (𝟓𝟎 − 𝟐𝟎)
                         𝑃 (𝑋 > 20) = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝟓𝟎 − 𝟐𝟎) × 𝑘 =
                                                                                  (𝟓𝟎 − 𝟎)
                                                              30
                                               𝑃 (𝑋 > 20) =      = 0,6
                                                              50
Gabarito: B


(VUNESP/2015 – TJ-SP) Leia o texto para responder à questão.
A Cia. Alfa Auto-ônibus declara, em seus catálogos, que o tempo de viagem entre duas cidades é de 3 horas.
No entanto o tempo real de viagem é uma variável aleatória x que se distribui uniformemente entre 175 e
190 minutos, ou seja,
                                              1
                                       ( )         𝑝𝑎𝑟𝑎 175 ≤ 𝑥 ≤ 190
                                      𝑓 𝑥 = {15                        }
                                             0 𝑒𝑚 𝑞𝑢𝑎𝑙𝑞𝑢𝑒𝑟 𝑜𝑢𝑡𝑟𝑜 𝑙𝑢𝑔𝑎𝑟
Considere ainda que qualquer tempo x do intervalo tal que x > 180 é considerado como atraso.
A probabilidade de que a viagem não terá mais do que 5 minutos de atraso é
a) 1/2
b) 2/3

         Receita Federal (Analista Tributário) Estatística                                               6
         www.estrategiaconcursos.com.br                                                                 174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

c) 1/8
d) 1/9
e) 1/15
Comentários:
O enunciado informa que o tempo de viagem é uma variável com distribuição uniforme entre 175 e 190
minutos, ou seja, a = 175 e b = 190. Considerando que a viagem deve ter 180 minutos, a probabilidade de
ela não atrasar mais do que 5 minutos corresponde a P(X < 185), dada por:


                                                                            P(X < 185) = P(175 < X < 175)

                                                k


                                                         175        185   190


                                                                                    (𝟏𝟖𝟓 − 𝟏𝟕𝟓)
                     𝑃(𝑋 < 185) = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝟏𝟖𝟓 − 𝟏𝟕𝟓) × 𝑘 =
                                                                                    (𝟏𝟗𝟎 − 𝟏𝟕𝟓)
                                                                     10 2
                                                 𝑃(𝑋 < 185) =          =
                                                                     15 3
Gabarito: B


(CESPE/2016 – Auditor de Controle Externo do TCE/PA) A respeito de uma variável aleatória contínua U,
uniformemente distribuída no intervalo [0, 1], julgue o seguinte item.
P(U > 1/10) = 0,9.
Comentários:
Para uma distribuição uniforme no intervalo a = 0 e b = 1, a probabilidade P(U > 1/10) = P(U > 0,1) é dada
por:


                                                                                   P(U > 0,1) = P(0,1 < U < 1)
                                                k


                                                    0         0,1          1

                                                                                    (𝟏 − 𝟎, 𝟏)
                          𝑃(𝑈 > 0,1) = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝟏 − 𝟎, 𝟏) × 𝑘 =
                                                                                     (𝟏 − 𝟎)
                                                    𝑃(𝑈 > 0,1) = 0,9
Gabarito: Certo.

          Receita Federal (Analista Tributário) Estatística                                                       7
          www.estrategiaconcursos.com.br                                                                         174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Esperança e Variância

A esperança de uma variável uniforme é a média aritmética dos extremos do seu intervalo 𝒂, 𝒃:

                                                                               𝒃+𝒂
                                                          𝐸 (𝑋 ) =                2

                                                  a                         𝑏+𝑎        b
                                                                             2

                                                               ==219a34==

Para o nosso exemplo da variável contínua no intervalo (𝟏, 𝟓), a esperança é:

                                                          𝒃+𝒂 𝟏+𝟓
                                            𝐸 (𝑋 ) =         =    =3
                                                           2   2

E a variância é dada por:

                                                                              (𝒃−𝒂)2
                                                      𝑉(𝑋) =                      12

Para o nosso exemplo da variável contínua no intervalo (𝟏, 𝟓), a variância é:

                                           (𝒃 − 𝒂)2 (𝟓 − 𝟏)2 (4)2 16 4
                                𝑉 (𝑋 ) =           =        =    =   =
                                              12       12     12   12 3

                                                Distribuição Uniforme

                                                                                           1
                      Função Densidade de Probabilidade: 𝑓 (𝑥 ) = (𝒃−𝒂) , 𝑠𝑒 𝒂 ≤ 𝑥 ≤ 𝒃

                                                                                               (𝒏−𝒎)
                               Cálculo da Probabilidade: 𝑃 (𝒎 < 𝑋 < 𝒏) = (𝒃−𝒂)

                                                  𝒃+𝒂                                                 (𝒃−𝒂)2
                          Esperança: 𝐸 (𝑋) =               ;                      Variância: 𝑉(𝑋) =
                                                      2                                                12

        Receita Federal (Analista Tributário) Estatística                                                       8
        www.estrategiaconcursos.com.br                                                                         174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(CESPE/2016 – Auditor de Controle Externo do TCE/PA) A respeito de uma variável aleatória contínua U,
uniformemente distribuída no intervalo [0, 1], julgue o seguinte item.
A variância de U é inferior a 1/10.
Comentários:
Para uma distribuição uniforme no intervalo a = 0 e b = 1, a variância é dada por:

                                                            (𝑏 − 𝑎)2
                                                     𝑉(𝑋) =
                                                               12
                                                               (1 − 0)2   1
                                                  𝑉 (𝑋 ) =              =
                                                                  12      12
Como 1/12 é inferior a 1/10, o item está correto.
Gabarito: Certo.

(FCC/2015 – Analista Judiciário do TER/RR) Uma variável aleatória X tem distribuição uniforme contínua
com média igual a 4 e variância igual a 12.
Nessas condições, P(X < 7) é igual a
a) 0,45.
b) 0,75.
c) 0,25.
d) 0,60.
e) 0,67.
Comentários:
Tratando-se de uma distribuição uniforme com média igual a 4, temos:

                                                               𝑏+𝑎
                                                      𝜇=           =4
                                                                2
                                                         𝑏+𝑎 = 8

           Receita Federal (Analista Tributário) Estatística                                        9
           www.estrategiaconcursos.com.br                                                          174

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 10

Sendo a variância igual a 12, temos1:
                                                         (𝑏 − 𝑎)2
                                                 𝑉 (𝑋 ) =         = 12
                                                            12
                                                   (𝑏 − 𝑎)2 = 12 × 12
                                                          𝑏 − 𝑎 = 12
Somando as duas equações, 𝑏 + 𝑎 = 8 e 𝑏 − 𝑎 = 12, temos:
                                                 𝑏 + 𝑎 + 𝑏 − 𝑎 = 8 + 12
                                                             2𝑏 = 20
                                                             𝑏 = 10
Substituindo esse resultado em 𝑏 + 𝑎 = 8, temos:
                                                          10 + 𝑎 = 8
                                                             𝑎 = −2
A probabilidade P(X < 7), sendo a = -2 e b = 10, é igual à probabilidade de X estar entre -2 e 7:


                  P(X < 7) = P(-2 < X < 7)
                                                         k

                                                   -2             7       10
                                                                                (𝟕 − (−𝟐))
                         𝑃 (𝑋 < 7) = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝟕 − (−𝟐)) × 𝑘 =
                                                                               (𝟏𝟎 − (−𝟐))


                                                                   9
                                                 𝑃 (𝑋 < 7) =          = 0,75
                                                                   12
Gabarito: B

1
    A raiz de um número elevado ao quadrado é igual ao módulo do número:

                                                             √𝑥 2 = |𝑥|
Isso porque 𝑥 pode ser um número negativo, mas a raiz de um número é necessariamente um número positivo. Por exemplo,
podemos ter 𝑥 = −3, então:

                                                        √(−3)2 = √9 = 3
Ou seja, para a nossa questão, temos:

                                                    √(𝑏 − 𝑎)2 = |𝑏 − 𝑎|
Como b > a, então b – a > 0 e, consequentemente:
                                                         |𝑏 − 𝑎| = 𝑏 − 𝑎


           Receita Federal (Analista Tributário) Estatística                                                      10
           www.estrategiaconcursos.com.br                                                                        174

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 10

(FCC/2011 – Analista de Controle Atuarial do TCE/PR) Sabe-se que a variável aleatória X tem distribuição
uniforme contínua no intervalo [10, ß], ß > 10. Sabendo-se que a variância de X é igual a 3, o valor de K tal
que P(X > K) = 0,3 é
a) 14,2
b) 13,8
c) 13,5
d) 13,1
e) 12,8
Comentários:
Sabendo que a variância de X, com distribuição discreta, no intervalo [10, ß], é 3, então 2:
                                                         (𝑏 − 𝑎)2
                                                  𝑉 (𝑋 ) =        =3
                                                            12
                                                        (𝛽 − 10)2
                                                  (  )
                                                 𝑉 𝑋 =            =3
                                                            12
                                                    (𝛽 − 10)2 = 36
                                                        𝛽 − 10 = 6
                                                           𝛽 = 16
Assim, o valor de K para o qual P(X > K) = 0,3, considerando que essa probabilidade corresponde à
probabilidade de X estar entre K e o limite superior do intervalo 𝛽 = 16, é:


                                             k                                P(X > K) = P(K < X < ß)


                                                         10    K      16
                                                                                 (𝟏𝟔 − 𝑲)
                        𝑃 (𝑋 > 𝐾 ) = 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = (𝟏𝟔 − 𝑲) × 𝑘 =                       = 0,3
                                                                                (𝟏𝟔 − 𝟏𝟎)
                                                 16 − 𝐾 = 6 × 0,3 = 1,8
                                                          𝐾 = 14,2
Gabarito: A.

2
    Aqui temos a mesma situação, considerando que 𝛽 > 10, então:

                                             √(𝛽 − 10)2 = |𝛽 − 10| = 𝛽 − 10


           Receita Federal (Analista Tributário) Estatística                                              11
           www.estrategiaconcursos.com.br                                                                 174

                                         


---

    Equipe Exatas Estratégia Concursos
    Aula 10

                                DISTRIBUIÇÃO EXPONENCIAL
A distribuição exponencial se caracteriza por ter uma taxa de falha (ou de ocorrência) constante, sendo
normalmente associada a um tempo. Por exemplo, o tempo de vida de um micro-organismo ou a vida útil
de uma lâmpada podem seguir uma distribuição exponencial.

A função densidade de probabilidade (f.d.p.) de uma variável 𝑋 com distribuição exponencial é:

                                                              −𝝀𝒙
                                            𝑓 (𝑥 ) = {𝝀. 𝒆          ,   𝑠𝑒 𝒙 ≥ 𝟎}
                                                      0,                𝑠𝑒 𝑥 < 0

Em que 𝑒, número de Euler, é um número irracional, cujo valor aproximado é 𝑒 ≅ 2,718. É comum utilizar a
seguinte notação para representar o expoente na base 𝑒:

                                                   𝑒 −𝜆𝑥 = exp {−𝜆𝑥}

Observa-se que a f.d.p. apresenta algum valor 𝑓 (𝑥 ) ≠ 0 apenas para valores positivos da variável 𝑥 ≥ 0.

Ressalte-se que 𝝀 é necessariamente positivo e representa a taxa de falha por unidade de tempo. Esse é o
único parâmetro da distribuição (a f.d.p. só depende desse valor para ser caracterizada)

Por exemplo, o tempo de vida de um micro-organismo pode seguir uma distribuição exponencial com
               𝟏
parâmetro 𝝀 = 𝟏𝟐 por dia; a vida útil de uma lâmpada pode seguir uma distribuição exponencial com
                   𝟏
parâmetro 𝝀 =           por hora.
                  𝟏𝟎𝟎

O valor de 𝑥 corresponde ao tempo até a falha (ou ocorrência). Por exemplo, podemos calcular a
probabilidade de o micro-organismo viver menos de 𝒙 = 𝟑 dias; ou a probabilidade de a lâmpada durar
mais que 𝒙 = 𝟏𝟎𝟎 horas e menos que 𝒙 = 𝟐𝟎𝟎 horas.

O gráfico a seguir1 apresenta as funções densidade de probabilidade para variáveis com distribuição
exponencial, para os parâmetros 𝜆 = 0,5, 𝜆 = 1 e 𝜆 = 1,5. Podemos observar que a f.d.p. é decrescente e
que assume valores no intervalo 𝑥 ∈ (0, ∞).

1
    Gráfico obtido na seção de Distribuição Exponencial do                          Portal   Action,   disponível   em
http://www.portalaction.com.br/probabilidades/612-distribuicao-exponencial


          Receita Federal (Analista Tributário) Estatística                                                         12
          www.estrategiaconcursos.com.br                                                                            174

                                        


---

    Equipe Exatas Estratégia Concursos
    Aula 10

A probabilidade 𝑋 estar em um intervalo 𝑃(𝑎 < 𝑋 < 𝑏) é calculada como2:

                                                𝑃(𝒂 < 𝑋 < 𝒃) = 𝑒 −𝜆.𝒂 − 𝑒 −𝜆.𝒃

Ou seja, a probabilidade de a lâmpada durar entre 100 e 200 horas é dada por:

                                                            𝟏            𝟏
                        𝑃 (𝟏𝟎𝟎 < 𝑋 < 𝟐𝟎𝟎) = 𝑒 −𝟏𝟎𝟎×𝟏𝟎𝟎 − 𝑒 −𝟏𝟎𝟎×𝟐𝟎𝟎 = 𝑒 −𝟏 − 𝑒 −𝟐 ≅ 0,5

E a probabilidade de o micro-organismo viver menos que 𝒙 = 𝟑 dias?

A f.d.p. exponencial assume algum valor somente para 𝒙 ≥ 𝟎 (realmente, não tem como o tempo ser
negativo). Então, a probabilidade de ele durar menos de 𝑥 = 3 dias equivale à probabilidade de durar mais
que 𝑥 = 0 e menos que 𝑥 = 3 dias:

                                                 𝑃 (𝑋 < 3) = 𝑃(0 < 𝑋 < 3)

                                                                             1
Agora, aplicamos a fórmula que vimos antes. Considerando 𝜆 = 12 por dia, temos:

                                                        𝟏            𝟏           1       1
                             𝑃 (𝟎 < 𝑋 < 𝟑) = 𝑒 −𝟏𝟐×𝟎 − 𝑒 −𝟏𝟐×𝟑 = 𝒆𝟎 − 𝑒 −4 = 𝟏 − 𝑒 −4

2
 Pontue-se que o extremo inferior do intervalo, 𝒂, antecede o termo superior, 𝒃, no cálculo da probabilidade da função
exponencial porque a função é decrescente, como se pode observar no gráfico acima.
Logo, o valor de 𝑒 −𝜆.𝒂 é maior do que o valor de 𝑒 −𝜆.𝒃 , para 𝒂 < 𝒃.


          Receita Federal (Analista Tributário) Estatística                                                        13
          www.estrategiaconcursos.com.br                                                                          174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Em geral, para calcular a probabilidade 𝑃(𝑋 < 𝑥 ) para algum valor de 𝑥 em uma distribuição exponencial,
fazemos:

                                                𝑷(𝑿 < 𝒙) = 𝟏 − 𝒆−𝝀.𝒙

A probabilidade 𝑷(𝑿 < 𝒙) é igual à função de distribuição acumulada no ponto 𝒙. Então, podemos dizer
que a f.d.a. da variável exponencial é:

                                                   𝐹 (𝑥 ) = 1 − 𝑒 −𝜆𝑥

        Quando uma variável exponencial representa a taxa de falha de um sistema, a função de
        confiabilidade do sistema é complementar à função de distribuição acumulada e
        representa a probabilidade de o sistema não falhar no período 𝑥.

                                                   𝑅(𝑥 ) = 1 − 𝐹(𝑥)

        Essa expressão é bem utilizada quando um sistema é composto por mais de uma unidade.

        Quando as unidades são independentes e redundantes, isto é, quando é necessário que
        todas falhem para haver falha no sistema, a função de distribuição acumulada do sistema
        (isto é, a probabilidade de ele falhar no tempo 𝑥) é o produto das funções de distribuição
        acumulada individuais das unidades (interseção):

                                         𝐹𝑆 (𝑥 ) = 𝐹1 (𝑥 ) × 𝐹2 (𝑥 ) … × 𝐹𝑛 (𝑥)

E a probabilidade de a variável assumir um valor maior que 𝒙, 𝑃(𝑋 > 𝑥)? Por exemplo, qual seria a
probabilidade de o micro-organismo viver mais que 𝒙 = 𝟑 dias?

Para isso, calculamos a probabilidade do evento complementar:

                                 𝑃 (𝑋 ≥ 𝑥 ) = 1 − 𝑃(𝑋 < 𝑥 ) = 1 − (1 − 𝑒 −𝜆𝑥 )

                                                  𝑷(𝑿 ≥ 𝒙) = 𝒆−𝝀.𝒙

        Receita Federal (Analista Tributário) Estatística                                            14
        www.estrategiaconcursos.com.br                                                               174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

        Para efetuar os cálculos da distribuição exponencial, é essencial que 𝑥 e 𝜆 estejam na
        mesma unidade de tempo. Se a questão trabalhar com unidades de tempo diferentes, será
        necessário ajustar as medidas.

Por exemplo, vamos calcular a probabilidade de o micro-organismo durar menos de 6 horas, considerando
        1
que 𝜆 = 12 por dia. Sabendo que há 24 horas em um dia, então 6 horas correspondem a:

                                                        6  1
                                                   𝑥=     = 𝑑𝑖𝑎
                                                        24 4
                             1
E a probabilidade 𝑃 (𝑋 < ) é:
                             4

                                            1           1 1           1
                                      𝑃 (𝑋 < ) = 1 − 𝑒 −12×4 = 1 − 𝑒 −48
                                            4

(2016 – EBSERH) Um estatístico ajustou um modelo de distribuição exponencial à variável aleatória
correspondente ao tempo de falha T (tempo até falhar em anos) de um produto. O modelo tem a expressão
f(t) = 0,2e-0,2t t > 0. Então, a probabilidade de o produto falhar dentro da garantia pretendida de 1 ano é
a) 0,818731
b) 0,821754
c) 0,803112
d) 0,181269
e) 0,196888
Comentários:
Trata-se de uma distribuição exponencial, com parâmetro 𝜆 = 0,2, em que se deseja calcular a probabilidade
𝑃(𝑋 < 1):
                                          𝐹 (𝑥 ) = 𝑃(𝑋 < 𝑥) = 1 − 𝑒 −𝜆𝑥
                                          𝑃 (𝑋 < 1) = 1 − 𝑒 −0,2 ≅ 0,181
Gabarito: D.


        Receita Federal (Analista Tributário) Estatística                                               15
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Esperança, Variância e Propriedade

A esperança (ou média) da distribuição exponencial é o inverso do parâmetro 𝜆:

                                                                     𝟏
                                                         𝑬(𝑿) =
                                                                     𝝀

                                                                                                1
Por exemplo, sendo a vida útil de uma lâmpada uma variável exponencial com parâmetro 𝜆 = 100 = 0,01
por hora, então a média será de:

                                                         1   1
                                              𝐸 (𝑋 ) =     =    = 100
                                                         𝜆 0,01

A variância é dada por:

                                                                     𝟏
                                                         𝑽(𝑿) = 𝝀𝟐

Nesse exemplo, a variância é de:

                                                     1      1
                                          𝑉 (𝑋 ) =    2
                                                        =       = 10.000
                                                     𝜆    0,012

E o desvio padrão, raiz quadrada da variância é:


                                                              1
                                                 𝜎 = √𝑉(𝑋) = √ 2
                                                              𝜆

                                                                 1
                                                            𝜎=
                                                                 𝜆

Em outras palavras, o desvio padrão é igual à média!

A distribuição exponencial guarda uma relação muito especial com a distribuição de Poisson: a distribuição
exponencial descreve o tempo entre as ocorrências de eventos sucessivos de uma distribuição de Poisson,
com o mesmo parâmetro!

Por exemplo, se a chegada de pessoas em uma loja segue uma distribuição de Poisson com 𝜆𝑋 = 2 pessoas
por hora, então o tempo decorrido entre a chegada de uma e de outra pessoa segue uma distribuição
exponencial com parâmetro de 𝜆𝑌 = 2 por hora.

Desse modo, a média do tempo decorrido entre as chegadas, medida em hora, é:

                                                                 1 1
                                                     𝐸 (𝑌 ) =     =
                                                                 𝜆 2

        Receita Federal (Analista Tributário) Estatística                                              16
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Vale destacar também a seguinte propriedade: a distribuição exponencial é considerada “sem memória”,
ou seja, não importa o que já ocorreu, as probabilidades para o futuro permanecem a mesma:

                                         𝑃(𝑋 > 𝑡 + 𝑠|𝑋 > 𝑠) = 𝑃(𝑋 > 𝑡)

Ou seja, sabendo que já se passou um tempo 𝑋 > 𝑠 desde a ocorrência do último evento, a probabilidade
de se passar um tempo 𝑋 > 𝑡 a mais, até a ocorrência do próximo evento, ou seja, 𝑋 > 𝑡 + 𝑠 no total, é igual
à probabilidade de se passar um tempo 𝑋 > 𝑡, até a ocorrência de um evento.

Vamos considerar um exemplo numérico para facilitar o entendimento. Suponha uma variável exponencial
que considere horas como unidade de tempo. De acordo com essa propriedade, sabendo que já se passaram
3 horas desde a ocorrência do último evento, a probabilidade de se passar pelo menos 2 horas a mais
(totalizando 5 horas) é igual à probabilidade de se passar pelo menos 2 horas até a ocorrência do evento
(não condicionada):

                                        𝑃(𝑋 > 2 + 3|𝑋 > 3) = 𝑃(𝑋 > 2)

        Existe uma forma alternativa de parametrizar a f.d.p. de uma distribuição exponencial,
                           𝟏
        substituindo 𝝀 por 𝜷:

                                                                 𝑥
                                                         1   −
                                                        { 𝛽 𝑒 , 𝑠𝑒 𝑥 ≥ 0 }
                                                              𝛽
                                             𝑓 (𝑥 ) =
                                                        0,           𝑠𝑒 𝑥 < 0

        O parâmetro 𝛽, inverso do parâmetro taxa 𝜆, pode ser interpretado como o parâmetro de
        escala da distribuição, medida em unidade de tempo.

        No exemplo do inseto, teríamos 𝛽 = 12 dias; e no da lâmpada, teríamos 𝛽 = 100 horas.

        Para essa parametrização, temos:

                                            𝑬(𝑿) = 𝜷,                𝑽( 𝑿 ) = 𝜷 𝟐

        Ou seja, o valor do parâmetro 𝛽 corresponde ao valor da média da distribuição.

        Receita Federal (Analista Tributário) Estatística                                                17
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 10

                                                 Distribuição Exponencial

                          Função Densidade de Probabilidade: 𝑓 (𝑥 ) = 𝝀. 𝑒 −𝝀𝑥 , 𝑠𝑒 𝑥 ≥ 0:

                                                 Cálculo da Probabilidade:

                             𝑃(𝒂 < 𝑋 < 𝒃) = 𝑒 −𝜆.𝒂 − 𝑒 −𝜆.𝒃               𝑃 (𝑋 > 𝒂) = 𝑒 −𝜆.𝒂

                             Função de Distribuição Acumulada: 𝑃 (𝑋 < 𝒃) = 1 − 𝑒 −𝜆.𝒃

                                                       1                                1
                               Esperança: 𝐸 (𝑋) = 𝝀 ;                Variância: 𝑉(𝑋) = 𝝀2

                                    Propriedade: 𝑃(𝑋 > 𝑡 + 𝑠|𝑋 > 𝑠) = 𝑃(𝑋 > 𝑡)

(FGV/2014 – DPE-RJ) Constatou-se que o tempo de tramitação de um processo pelas instâncias do judiciário,
até o arquivamento em definitivo, é uma variável aleatória contínua exponencial. Para os casos de processos
em que quadros da Defensoria Pública atuam, o tempo médio de duração tem sido de 225 dias. Então a
probabilidade de que um processo tenha duração inferior a um mês e meio (45 dias) é igual a:
a) 1 – e-5
b) e-5
c) 1 – e-0,2
d) e-0,2
     45      −1
e) (𝐶225 )
Comentários:
O enunciado informa que o tempo de tramitação de um processo tem distribuição exponencial com média
de 225 dias, logo:
                                                              1
                                                     𝐸 (𝑋 ) =   = 225
                                                              𝜆
                                                                1
                                                           𝜆=
                                                              225


           Receita Federal (Analista Tributário) Estatística                                            18
           www.estrategiaconcursos.com.br                                                               174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

A probabilidade de um processo ter duração inferior a 45 dias é dada por:
                                                 𝑃 (𝑋 < 𝑥 ) = 1 − 𝑒 −𝜆𝑥
                                                                  45
                                        𝑃(𝑋 < 45) = 1 − 𝑒 −225 = 1 − 𝑒 −0,2
Gabarito: C


(FCC/2015 – Analista Judiciário do TRE/RR) Em um determinado órgão público o tempo X, em horas, entre
duas solicitações consecutivas, feitas pelo departamento de recursos humanos, pode ser considerado como
tendo distribuição exponencial com média de 5 horas. Nessas condições, a probabilidade do tempo entre
duas solicitações estar compreendido entre 2 horas e 6 horas é, em %, igual a
Dados: e−0,2 = 0,819; e−0,4 = 0,670; e−1,2 = 0,301.
a) 18,1
b) 63,1
c) 51,9
d) 36,9
e) 34,5
Comentários:
Sendo X uma variável com distribuição exponencial e média 5, temos:
                                                   1
                                                      𝐸 (𝑋 ) =
                                                     =5
                                                   𝜆
                                                   1
                                               𝜆=
                                                   5
Logo, a probabilidade de o tempo estar compreendido entre 2 horas e 6 horas é dado por:
                                            𝑃(𝒂 < 𝑋 < 𝒃) = 𝑒 −𝜆.𝒂 − 𝑒 −𝜆.𝒃
                                                              2    6
                                    𝑃(𝟐 < 𝑋 < 𝟔) = 𝑒 −5 − 𝑒 −5 = 𝑒 −0,4 − 𝑒 −1,2
Pelos dados fornecidos pelo enunciado, temos:
                                𝑃 (2 < 𝑋 < 6) = 0,670 − 0,301 = 0,369 = 36,9%
Gabarito: D


(FGV/2021 – FunSaúde/CE) Suponha que carros passem por um posto de observação em uma estrada
remota de acordo com um processo Poisson, com taxa média de ocorrência igual a 2 carros por minuto.
Se um carro acaba de passar por esse posto, o tempo de espera, até que o próximo carro passe pelo posto,
tem distribuição de probabilidades:
a) Cauchy (𝛼 = 1, 𝛽 = 2)
b) Beta (𝛼 = 1, 𝛽 = 2)
c) uniforme (0, 2)

          Receita Federal (Analista Tributário) Estatística                                          19
          www.estrategiaconcursos.com.br                                                             174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

d) exponencial (𝜆 = 2)
e) normal (𝜇 = 2, 𝜎 2 = 1)
Comentários:
O tempo decorrido entre duas ocorrências de um processo de Poisson segue distribuição exponencial com
o mesmo parâmetro. Considerando que a passagem de carros segue distribuição de Poisson com parâmetro
𝜆 = 2, o tempo entre essas ocorrências segue distribuição exponencial com parâmetro 𝜆 = 2.
Gabarito: D


(CESPE/2016 – Analista de Controle Externo do TCE/PA) Se o tempo de espera por atendimento (T, em
minutos) em determinada repartição pública segue uma distribuição exponencial com média igual a 30
minutos, então
P(T > 35 | T > 30) = P(T > 35)
Comentários:
Essa questão trabalha com a propriedade “sem memória” da distribuição exponencial:
                                              𝑃 (𝑋 > 𝑡 + 𝑠|𝑋 > 𝑠) = 𝑃(𝑋 > 𝑡)


Sendo X = T, s = 30 e t = 5, temos:
                                              𝑃(𝑇 > 35|𝑇 > 30) = 𝑃(𝑇 > 5)
Gabarito: Errado.


(FGV/2016 – IBGE) Um fabricante de equipamentos de informática, que conhece a distribuição do tempo de
vida útil dos HDs externos, precisa avaliar os gastos com serviços de garantia. Essa distribuição é a
exponencial com média β = 15 anos, sendo que os HDs já vendidos têm, por hipótese, 3 anos de uso, sem
apresentar defeitos. Supondo que a garantia é de 12 anos, a probabilidade de que ele tenha que prestar
assistência a um determinado HD entre os vendidos é
a) 1 – e-0,6;
b) e-0,75;
c) e-0,6;
d) 1 – e-0,75;
e) e-0,25.
Comentários:
A probabilidade de o fabricante ter que prestar assistência corresponde à probabilidade de o HD durar
menos que 12 anos e a probabilidade de ele não prestar assistência corresponde à probabilidade de o HD
durar mais que 12 anos.
Sabendo que os HDs foram vendidos há 3 anos, a probabilidade de ele não prestar assistência, ou seja, de
durar pelo menos 12 – 3 = 9 anos a mais, segue a propriedade sem memória da distribuição exponencial:
                                               𝑃(𝑇 > 12|𝑇 > 3) = 𝑃(𝑇 > 9)


             Receita Federal (Analista Tributário) Estatística                                       20
             www.estrategiaconcursos.com.br                                                          174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

E a probabilidade de o fabricante ter que prestar assistência pode ser calculada pela probabilidade
complementar:
                        𝑃 (𝑇 < 12|𝑇 > 3) = 1 − 𝑃 (𝑇 > 12|𝑇 > 3) = 1 − 𝑃(𝑇 > 9)
                                          𝑃(𝑇 < 12|𝑇 > 3) = 𝑃(𝑇 < 9)
Conhecendo a média da distribuição, β = 15 anos, podemos calcular o valor de 𝜆 (observe que foi considerada
a parametrização alternativa da distribuição exponencial):
                                                               1
                                                𝐸 (𝑋 ) = 𝛽 =     = 15
                                                               𝜆
                                                    1
                                                        𝜆=
                                                    15
A probabilidade de o HD durar menos de 9 anos é, então, dada por:
                                                                    9
                                𝑃(𝑇 < 9) = 1 − 𝑒 −𝜆.9 = 1 − 𝑒 −15 = 1 − 𝑒 −0,6
Gabarito: A

Considerando duas ou mais variáveis

Agora vamos aprender um raciocínio diferente para resolver questões envolvendo a seleção aleatória de
objetos que apresentam distribuições exponenciais distintas, utilizando o Teorema da Probabilidade Total!

Por exemplo, seja X uma variável com distribuição exponencial com parâmetro 𝜆𝑋 = 0,01 e Y uma variável
com distribuição exponencial com parâmetro 𝜆𝑌 = 0,05.

Suponha, ainda que a proporção de objetos que sigam a distribuição X seja P(X) = 60% = 0,6 e que os demais
objetos sigam a distribuição Y, ou seja, P(Y) = 1 - 0,6 = 0,4.

Se selecionarmos um objeto ao acaso, a probabilidade de ele ter uma vida útil maior que z = 50, por exemplo,
pode ser calculada pelo Teorema da Probabilidade Total.

Para isso, vamos chamar o atributo desejado, qual seja ter uma vida útil maior que z = 50, de evento A. Pelo
Teorema da Probabilidade Total, temos:

                                   𝑃 (𝐴) = 𝑃 (𝐴|𝑋) × 𝑃 (𝑋) + 𝑃(𝐴|𝑌) × 𝑃(𝑌)

Nessa equação, 𝑃(𝐴|𝑋) representa a probabilidade de o objeto ter uma vida útil maior que z = 50 (evento
A), dado que segue a distribuição de X, enquanto 𝑃 (𝐴|𝑌 ) representa a probabilidade de o objeto ter uma
vida útil maior que z = 50 (evento A), dado que segue a distribuição de Y.

Essas probabilidades condicionais podem ser calculadas pelas fórmulas da distribuição exponencial:

                                   𝑃 (𝐴|𝑋) = 𝑃 (𝑋 > 50) = 𝑒 −50×0,01 = 𝑒 −0,5

                                   𝑃(𝐴|𝑌) = 𝑃 (𝑌 > 50) = 𝑒 −50×0,05 = 𝑒 −2,5


        Receita Federal (Analista Tributário) Estatística                                                21
        www.estrategiaconcursos.com.br                                                                   174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Logo, conhecendo essas probabilidades condicionais e as probabilidades P(X) e P(Y), podemos calcular a
probabilidade desejada:

                      𝑃(𝐴) = 𝑒 −0,5 × 0,6 + 𝑒 −2,5 × 0,4 ≅ 0,61 × 0,6 + 0,08 × 0,4 ≅ 0,397

Pontue-se que é possível aplicar esse mesmo raciocínio para outras distribuições.

           A soma de variáveis exponenciais independentes segue distribuição hipoexponencial ou
           distribuição generalizada de Erlang. Ela é chamada de hipoexponencial porque o seu
           coeficiente de variação (CV) é sempre menor que 1.

           Para a distribuição exponencial, o CV é igual a 1, pois o desvio padrão é igual à média.

           Já, a distribuição hiperexponencial tem CV maior que 1 e a sua função densidade de
           probabilidade corresponde à soma das funções densidade de variáveis exponenciais
           multiplicadas pelas respectivas probabilidades.

           Considerando o exemplo da vida útil dos objetos com as mesmas probabilidades, teríamos:

                                𝑓ℎ𝑖𝑝𝑒𝑟 (𝑥 ) = 0,01. 𝑒 −0,01.𝑥 × 0,6 + 0,05. 𝑒 −0,05.𝑥 × 0,4

(FCC/2013 – TRT/5ª Região) Uma empresa produz componentes de dois tipos: A e B. Sejam as variáveis
aleatórias: X = tempo de vida do componente A, em horas e Y = tempo de vida do componente B, em horas.
De um lote de 120 componentes do tipo A e 80 componentes do tipo B, retira-se ao acaso um componente.
Sabendo-se que X tem distribuição exponencial com média de 1.000 horas e que Y tem distribuição
exponencial com média de 700 horas, a probabilidade do componente selecionado ter duração inferior a
1.400 horas é
Dados: e−1 = 0,37; e−1,4 = 0,25; e−2 = 0,14
a) 0,569
b) 0,742


           Receita Federal (Analista Tributário) Estatística                                          22
           www.estrategiaconcursos.com.br                                                             174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

c) 0,618
d) 0,794
e) 0,634
Comentários:
Vamos chamar o atributo desejado, isto é, o fato de um componente ter duração inferior a 1400 horas de
evento C. Pelo Teorema da Probabilidade Total, temos:
                                      𝑃(𝐶 ) = 𝑃(𝐶 |𝐴) × 𝑃(𝐴) + 𝑃(𝐶|𝐵) × 𝑃(𝐵)
Pelas informações do enunciado, sabemos que;

                                                          𝑛(𝐴) 120
                                               𝑃 (𝐴 ) =       =    = 0,6
                                                          𝑛(𝑈) 200

                                                        𝑛(𝐵)   80
                                                               ==219a34==

                                               𝑃 (𝐵 ) =      =    = 0,4
                                                        𝑛(𝑈) 200

Sabendo que o componente A segue uma distribuição exponencial X, com média de 1000 horas, temos:
                                                                             1
                                                    𝐸 (𝑋 ) =                   = 1000
                                                                            𝜆𝑋
                                                   1
                                                          𝜆𝑋 =
                                                 1000
Sabendo que o componente B segue uma distribuição exponencial Y, com média de 700 horas, temos:
                                                                            1
                                                    𝐸 (𝑌 ) =                   = 700
                                                                            𝜆𝑌
                                                      1
                                                          𝜆𝑌 =
                                                    700
Assim, podemos calcular as probabilidades condicionais:
                                                  𝑃 (𝑋 < 𝑥 ) = 1 − 𝑒 −𝜆𝑥
                                                                            1400
                     𝑃(𝐶 |𝐴) = 𝑃(𝑋 < 1400) = 1 − 𝑒 −1000 = 1 − 𝑒 −1,4 = 1 − 0,25 = 0,75
                                                                            1400
                      𝑃 (𝐶 |𝐵) = 𝑃 (𝑌 < 1400) = 1 − 𝑒 − 700 = 1 − 𝑒 −2 = 1 − 0,14 = 0,86
Agora, podemos calcular o valor de um objeto aleatório durar menos de 1400 horas:
                                       𝑃 (𝐶 ) = 0,75 × 0,6 + 0,86 × 0,4 = 0,794
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                       23
           www.estrategiaconcursos.com.br                                                          174

                                         


---

Equipe Exatas Estratégia Concursos
Aula 10

      A distribuição exponencial é um caso particular da distribuição gama, cuja f.d.p. é:

                                                    𝛽𝛼 𝑦 𝛼−1 𝑒 −𝛽.𝑦
                                                                      ,        𝑠𝑒 𝑦 ≥ 0
                                       𝑓 (𝑦 ) = {         Γ(𝛼)                            }
                                                    0,           𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜

      Em que Γ(𝛼) é chamada de função gama.

      A distribuição gama depende dos parâmetros 𝜶 e 𝜷.

      A distribuição gama se reduz à distribuição exponencial para 𝜶 = 𝟏, sendo 𝜷 = 𝝀.

      Observe essa relação nas fórmulas da média e variância da distribuição gama indicadas
                                                                              1          1
      abaixo, em comparação com a distribuição exponencial 𝑋, em que 𝐸 (𝑋) = 𝜆 e 𝑉(𝑋) = 𝜆2 :

                                                         𝛼                           𝛼
                                           𝐸 (𝑌 ) = 𝛽 ,            𝑉 (𝑌 ) = 𝛽 2

      Outra distribuição que apresenta determinada relação com a distribuição exponencial é a
      distribuição de Weibull, cuja f.d.p. é dada pela seguinte fórmula:

                                                                   𝑧 𝑘
                                                𝑘 𝑧 𝑘−1          −( )
                                     𝑓 (𝑧 ) = { 𝜆 ( 𝜆 )      𝑒             ,     𝑠𝑒 𝑧 ≥ 0}
                                                                   𝜆

                                                    0,        𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜

      Podemos observar que essa distribuição depende dos parâmetros 𝑘 e 𝜆.

      Compare a função de distribuição acumulada dessa distribuição, indicada abaixo, com a
      f.d.a. da distribuição exponencial 𝑋, em que 𝐹 (𝑥 ) = 1 − 𝑒 −𝝀𝑥 :

                                                                               𝑧 𝒌
                                                                          −( )
                                                𝐹 (𝑍 ) = 1 − 𝑒                 𝝀

      Se 𝑍 segue distribuição de Weibull, então 𝑋, definida abaixo, segue distribuição
      exponencial com 𝝀 = 𝟏:

                                                                  𝑍 𝒌
                                                         𝑋 = (𝝀 )

      Essas duas distribuições pertencem à família exponencial.

      Receita Federal (Analista Tributário) Estatística                                         24
      www.estrategiaconcursos.com.br                                                            174

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 10

         Outra distribuição que também pertence a essa família é a distribuição beta, cuja f.d.p. é:

                                          Γ(𝛼+𝛽)
                                                   𝑥 𝛼−1 (1 − 𝑥)𝛽−1 ,     𝑠𝑒 0 ≤ 𝑥 ≤ 1
                                𝑓(𝑥 ) = {Γ(𝛼).Γ(𝛽)                                     }
                                          0,                            𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜

         Essa função depende dos parâmetros 𝛼 e 𝛽, podendo ser escrita como:

                                                        1
                                            𝑓(𝑥) = B(𝛼,𝛽) 𝑥 𝛼−1 (1 − 𝑥)𝛽−1

         B é chamada de função beta, funcionando como uma constante de normalização para que
         a probabilidade de todo o Espaço Amostral seja igual a 1.

         A média dessa distribuição é:
                                                                𝛼
                                                       𝐸 (𝑋) = 𝛼+𝛽

(CESPE/2011 – EBC) Julgue o item subsequente, relativo à família exponencial de distribuições.
Tendo em vista que a distribuição exponencial é um caso particular da distribuição de Weibull, e
considerando que a distribuição exponencial pertence à família exponencial, é correto concluir que a
distribuição de Weibull também pertence à família exponencial.
Comentários:
A distribuição exponencial é um caso particular da distribuição gama. A exponencial também apresenta uma
relação com a distribuição de Weibull, mas não pode ser considerada um caso particular desta. Todas essas
distribuições pertencem à família exponencial.
Gabarito: Errado.


(CESPE/2014 – Analista Judiciário do TJ/SE) Nas estatísticas do Poder Judiciário, a taxa de congestionamento
(X), que consiste em um indicador que permite medir a efetividade da movimentação processual de um
tribunal, é uma variável aleatória contínua com função de densidade f(x) expressa por:
             𝛽. 𝑥 8 . (1 − 𝑥)2 , 𝑠𝑒 𝑥 ∈ [0,1]
𝑓 (𝑥 ) = {                                    }, em que 𝛽 é uma constante real
             0,                  𝑠𝑒 𝑥 ∉ [0,1]
Com base nessas informações, julgue o próximo item.
O valor de β é superior a 450 e inferior a 500.
Comentários:


         Receita Federal (Analista Tributário) Estatística                                               25
         www.estrategiaconcursos.com.br                                                                  174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Observe que essa variável segue distribuição beta. O valor da constante 𝛽 pode ser calculado, considerando-
se que a probabilidade de todo o Espaço Amostral é 1. Para isso, precisamos integrar a f.d.p.:

        𝐹 (𝑥 ) = ∫ 𝛽. 𝑥 8 . (1 − 𝑥)2 . 𝑑𝑥 = ∫ 𝛽. 𝑥 8 . (1 − 2𝑥 + 𝑥 2 ). 𝑑𝑥 = ∫ 𝛽. (𝑥 8 − 2. 𝑥 9 + 𝑥 10 ). 𝑑𝑥

                               𝐹 (𝑥 ) = ∫ 𝛽. 𝑥 8 . 𝑑𝑥 − ∫ 2. 𝛽. 𝑥 9 𝑑𝑥 + ∫ 𝛽. 𝑥 10 𝑑𝑥

Integrando em separado, temos:
                                                                     𝑥9
                                                 ∫ 𝛽. 𝑥 8 . 𝑑𝑥 = 𝛽
                                                                     9
                                                                      𝑥 10
                                              ∫ 2. 𝛽. 𝑥 9 𝑑𝑥 = 2. 𝛽
                                                                      10
                                                                    𝑥 11
                                                 ∫ 𝛽. 𝑥 10 𝑑𝑥 = 𝛽
                                                                    11
Juntando esses resultados, temos:
                                                𝑥9        𝑥 10     𝑥 11
                                         𝐹 (𝑥 ) = 𝛽− 2. 𝛽      +𝛽
                                                 9        10       11
Sabendo que x varia no intervalo [0,1], a diferença entre F(1) e F(0) corresponde à probabilidade de todo o
Espaço Amostral:
                                      19        110    111     09      010    011
                 𝐹 (1) − 𝐹 (0) = 𝛽       − 2. 𝛽     +𝛽     − (𝛽 − 2. 𝛽     +𝛽     )=1
                                      9         10     11      9       10     11
                                         𝛽 𝛽 𝛽    55. 𝛽 − 99. 𝛽 + 45. 𝛽    𝛽
                      𝐹 (1) − 𝐹 (0) =     − +   =                       =     =1
                                         9 5 11           495             495
                                               𝛽 = 495
Logo, o valor de 𝛽 é superior a 450 e inferior a 500.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                                      26
        www.estrategiaconcursos.com.br                                                                         174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                    DISTRIBUIÇÃO NORMAL
A distribuição normal, também chamada de gaussiana, é uma das distribuições contínuas mais importantes!
A função densidade de probabilidade (f.d.p.) dessa distribuição é dada por:
                                               1       1 𝑥−𝜇 2
                                                     𝑒 2 𝜎 ) ,
                                                      − (
                                   𝑓 (𝑥 ) =                         𝑥 ∈ (−∞, ∞)
                                              𝜎√2𝜋
Essa f.d.p. é bastante complicada, não é? Mas não se preocupe! Você não vai precisar integrar ou derivar!

Observe que essa função depende apenas dos parâmetros 𝝁 (média) e 𝝈𝟐 (variância), que são parâmetros
independentes.


No gráfico abaixo, temos uma f.d.p. com distribuição normal. Observe que a curva apresenta um formato de
sino, que é uma característica de todas as variáveis normais.

As distribuições normais são simétricas, ou seja, tem-se:

                                              Média = Mediana = Moda
Logo, o valor de 𝝁 divide a distribuição em duas partes iguais. Sabendo que a área total, sob toda a curva,
corresponde à probabilidade de todo o Espaço Amostral e, portanto, a 100%, então:

                                           𝑃(𝑋 > 𝜇 ) = 𝑃 (𝑋 < 𝜇 ) = 50%

A probabilidade de um intervalo corresponde à área sob a f.d.p. limitada por esse intervalo. Assim, a
igualdade acima pode ser ilustrada como no gráfico seguir:


                                                                     50%
                                               50%

                                                            Média

        Receita Federal (Analista Tributário) Estatística                                               27
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

No exemplo do gráfico anterior, temos 𝜇 = 1, logo:

                                          𝑃(𝑋 > 1) = 𝑃(𝑋 < 1) = 50%


Mas a simetria não implica somente nisso. A partir da média, toda a distribuição de probabilidades para os
valores superiores é igual à distribuição para os valores inferiores.
Assim, para qualquer 𝑘 real, a probabilidade de a variável ser maior do que 𝜇 + 𝑘 é igual à probabilidade de
ser menor do que 𝜇 − 𝑘:

                                          𝑃(𝑋 > 𝜇 + 𝑘 ) = 𝑃(𝑋 < 𝜇 − 𝑘)

                                  𝑃(𝑋 < 𝜇 − 𝑘)                     𝑃(𝑋 > 𝜇 + 𝑘)

                                                𝜇−𝑘             𝜇+𝑘

Em relação ao nosso exemplo, em que 𝜇 = 1, temos:

   •   Para 𝑘 = 1: 𝑃(𝑋 > 2) = 𝑃(𝑋 < 0)
   •   Para 𝑘 = 2: 𝑃(𝑋 > 3) = 𝑃(𝑋 < −1)
   •   Para 𝑘 = 2,5: 𝑃(𝑋 > 3,5) = 𝑃(𝑋 < −1,5)
   •   ...


Similarmente, as probabilidades associadas aos intervalos entre a média e esses limites 𝜇 + 𝑘 e 𝜇 − 𝑘
também são iguais, conforme equação abaixo e gráfico a seguir:

                                     𝑃 ( 𝜇 < 𝑋 < 𝜇 + 𝑘 ) = 𝑃 (𝜇 − 𝑘 < 𝑋 < 𝜇 )

                               𝑃(𝜇 − 𝑘 < 𝑋 < 𝜇)                     𝑃(𝜇 < 𝑋 < 𝜇 + 𝑘)

                                                𝜇−𝑘             𝜇+𝑘


        Receita Federal (Analista Tributário) Estatística                                                28
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Em relação ao nosso exemplo em que 𝜇 = 1, temos:

   •   Para 𝑘 = 1: 𝑃(1 < 𝑋 < 2) = 𝑃(0 < 𝑋 < 1)
   •   Para 𝑘 = 2: 𝑃(1 < 𝑋 < 3) = 𝑃(−1 < 𝑋 < 1)
   •   Para 𝑘 = 2,5: 𝑃(1 < 𝑋 < 3,5) = 𝑃(−1,5 < 𝑋 < 1)
   •   ...


Podemos observar, ainda, que a curva normal apresenta duas assíntotas.
De modo geral, uma assíntota ocorre quando uma curva se aproxima cada vez mais a uma reta, porém sem
tocá-la. A curva normal se aproxima do eixo x (eixo das abcissas) tanto para 𝑥 → −∞, quanto para 𝑥 → +∞.
Por isso, dizemos que a curva normal é duplamente assintótica.


Além disso, existem dois pontos de inflexão na curva normal.
Pontos de inflexão são aqueles em que a concavidade da curva muda.
No início da curva normal, a concavidade está voltada para cima. No ponto (aproximado) indicado pela seta
da esquerda, a concavidade muda para baixo, e no ponto (aproximado) indicado pela seta da direita, a
concavidade muda novamente para cima.

Esses pontos de inflexão ocorrem precisamente a 1 desvio padrão da média, ou seja, em 𝝁 − 𝝈 e em 𝝁 + 𝝈.

(FGV/2010 – SEAD-AP – Adaptada) Em relação à distribuição normal, julgue as afirmativas a seguir.
I – A função de densidade de probabilidade é simétrica em relação à média.
II – O valor da mediana é igual ao valor da média.
III – A média de uma variável aleatória com distribuição normal pode ser negativa.
Comentários:


        Receita Federal (Analista Tributário) Estatística                                             29
        www.estrategiaconcursos.com.br                                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Sabemos que a distribuição normal é simétrica em relação à média (logo, a afirmativa I está correta). Por ser
simétrica, ela apresenta média = mediana (logo, a afirmativa II está correta).
A distribuição normal pode ter qualquer valor de média, inclusive negativa. Por exemplo, se estivermos
tratando do lucro das empresas que vão à falência, provavelmente, a média será negativa. Logo, a afirmativa
III está correta.
Resposta: Todas corretas.

Distribuição Normal Padrão

Para calcular os valores de probabilidade, temos uma tabela que relaciona os valores de intervalo da variável
aos respectivos valores de probabilidade.
Essa tabela, inserida abaixo, se refere a uma distribuição normal 𝑵(𝟎, 𝟏), isto é, com média 𝝁 = 𝟎 e variância
𝝈𝟐 = 𝟏, chamada de normal padrão ou reduzida, que denotamos por 𝒁.
Pelo gráfico anterior à tabela, deduzimos que os seus valores correspondem à probabilidade entre a média
𝜇 = 0 e o valor de 𝑧 indicado. Assim, os campos da tabela informam a probabilidade 𝑃(0 < 𝑍 < 𝑧).

    Z        0,00       0,01       0,02       0,03           0,04    0,05     0,06     0,07     0,08     0,09
   0,0      0,0000     0,0040     0,0080     0,0120     0,0160      0,0199   0,0239   0,0279   0,0319   0,0359
   0,1      0,0398     0,0438     0,0478     0,0517     0,0557      0,0596   0,0636   0,0675   0,0714   0,0753
   0,2      0,0793     0,0832     0,0871     0,0910     0,0948      0,0987   0,1026   0,1064   0,1103   0,1141
   0,3      0,1179     0,1217     0,1255     0,1293     0,1331      0,1368   0,1406   0,1443   0,1480   0,1517
   0,4      0,1554     0,1591     0,1628     0,1664     0,1700      0,1736   0,1772   0,1808   0,1844   0,1879
   0,5      0,1915     0,1950     0,1985     0,2019     0,2054      0,2088   0,2123   0,2157   0,2190   0,2224
   0,6      0,2257     0,2291     0,2324     0,2357     0,2389      0,2422   0,2454   0,2486   0,2517   0,2549
   0,7      0,2580     0,2611     0,2642     0,2673     0,2704      0,2734   0,2764   0,2794   0,2823   0,2852
   0,8      0,2881     0,2910     0,2939     0,2967     0,2995      0,3023   0,3051   0,3078   0,3106   0,3133
   0,9      0,3159     0,3186     0,3212     0,3238     0,3264      0,3289   0,3315   0,3340   0,3365   0,3389
   1,0      0,3413     0,3438     0,3461     0,3485     0,3508      0,3531   0,3554   0,3577   0,3599   0,3621
   1,1      0,3643     0,3665     0,3686     0,3708     0,3729      0,3749   0,3770   0,3790   0,3810   0,3830
   1,2      0,3849     0,3869     0,3888     0,3907     0,3925      0,3944   0,3962   0,3980   0,3997   0,4015
   1,3      0,4032     0,4049     0,4066     0,4082     0,4099      0,4115   0,4131   0,4147   0,4162   0,4177
   1,4      0,4192     0,4207     0,4222     0,4236     0,4251      0,4265   0,4279   0,4292   0,4306   0,4319
   1,5      0,4332     0,4345     0,4357     0,4370     0,4382      0,4394   0,4406   0,4418   0,4429   0,4441
   1,6      0,4452     0,4463     0,4474     0,4484     0,4495      0,4505   0,4515   0,4525   0,4535   0,4545
   1,7      0,4554     0,4564     0,4573     0,4582     0,4591      0,4599   0,4608   0,4616   0,4625   0,4633
   1,8      0,4641     0,4649     0,4656     0,4664     0,4671      0,4678   0,4686   0,4693   0,4699   0,4706
   1,9      0,4713     0,4719     0,4726     0,4732     0,4738      0,4744   0,4750   0,4756   0,4761   0,4767
   2,0      0,4772     0,4778     0,4783     0,4788     0,4793      0,4798   0,4803   0,4808   0,4812   0,4817


         Receita Federal (Analista Tributário) Estatística                                                       30
         www.estrategiaconcursos.com.br                                                                          174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

 Z (cont)       0,00       0,01       0,02          0,03        0,04           0,05           0,06          0,07     0,08     0,09
   2,1        0,4821      0,4826     0,4830       0,4834     0,4838       0,4842          0,4846           0,4850   0,4854   0,4857
   2,2        0,4861      0,4864     0,4868       0,4871     0,4875       0,4878          0,4881           0,4884   0,4887   0,4890
   2,3        0,4893      0,4896     0,4898       0,4901     0,4904       0,4906          0,4909           0,4911   0,4913   0,4916
   2,4        0,4918      0,4920     0,4922       0,4925     0,4927       0,4929          0,4931           0,4932   0,4934   0,4936
   2,5        0,4938      0,4940     0,4941       0,4943     0,4945       0,4946          0,4948           0,4949   0,4951   0,4952
   2,6        0,4953      0,4955     0,4956       0,4957     0,4959       0,4960          0,4961           0,4962   0,4963   0,4964
   2,7        0,4965      0,4966     0,4967       0,4968     0,4969       0,4970          0,4971           0,4972   0,4973   0,4974
   2,8        0,4974      0,4975     0,4976       0,4977     0,4977       0,4978          0,4979           0,4979   0,4980   0,4981
   2,9        0,4981      0,4982     0,4982       0,4983     0,4984       0,4984          0,4985           0,4985   0,4986   0,4986
   3,0        0,4987      0,4987     0,4987       0,4988     0,4988       0,4989          0,4989           0,4989   0,4990   0,4990
   3,1        0,4990      0,4991     0,4991       0,4991     0,4992       0,4992          0,4992           0,4992   0,4993   0,4993
   3,2        0,4993      0,4993     0,4994       0,4994     0,4994       0,4994          0,4994           0,4995   0,4995   0,4995
   3,3        0,4995      0,4995     0,4995       0,4996     0,4996       0,4996          0,4996           0,4996   0,4996   0,4997
   3,4        0,4997      0,4997     0,4997       0,4997     0,4997       0,4997          0,4997           0,4997   0,4997   0,4998
   3,5        0,4998      0,4998     0,4998       0,4998     0,4998       0,4998          0,4998           0,4998   0,4998   0,4998
   3,6        0,4998      0,4998     0,4999       0,4999     0,4999       0,4999          0,4999           0,4999   0,4999   0,4999
   3,7        0,4999      0,4999     0,4999       0,4999     0,4999       0,4999          0,4999           0,4999   0,4999   0,4999
   3,8        0,4999      0,4999     0,4999       0,4999     0,4999       0,4999          0,4999           0,4999   0,4999   0,4999
   3,9        0,5000      0,5000     0,5000       0,5000     0,5000       0,5000          0,5000           0,5000   0,5000   0,5000


E quanto aos valores de 𝑧?
O valor de 𝑧 começa a ser lido na primeira coluna (que apresenta as unidades e os décimos de 𝑧) e termina
de ser lido na primeira linha (que apresenta os centésimos de 𝑧). Assim, a probabilidade 𝑃(0 < 𝑍 < 𝑧) é o
valor que está no campo, cuja linha corresponda à unidade e ao décimo de 𝑧 e cuja coluna corresponda ao
centésimo de 𝑧.
Por exemplo, para encontrar o valor de 𝑃(0 < 𝑍 < 1,96), precisamos buscar o número que está na linha 1,9
e na coluna 0,06, conforme indicado abaixo. Podemos observar que 𝑃 (0 < 𝑍 < 1,96) = 0,475.
                                        Z          ...      0,05        0,06           0,07          ...
                                       ...         ...       ...         ...            ...          ...
                                       1,8         ...     0,4678      0,4686         0,4693         ...
                                       1,9         ...     0,4744      0,475          0,4756         ...
                                        2          ...     0,4798      0,4803         0,4808         ...
                                       ...         ...       ...         ...            ...          ...

Também podemos fazer o caminho inverso, qual seja, encontrar o valor de 𝑧 que corresponde à
probabilidade desejada.
Vamos encontrar o valor de 𝑧 tal que 𝑃(0 < 𝑍 < 𝑧) = 0,40, por exemplo. Para isso, devemos buscar o valor
0,40 nos campos da tabela. Como não consta exatamente esse valor, somente 0,3997 e 0,4015, optamos
pelo valor mais próximo, isto é, 0,3997.
Este se encontra na linha 1,2 e na coluna 0,08, conforme indicado a seguir. Logo, concluímos que 𝑧 = 1,28.


            Receita Federal (Analista Tributário) Estatística                                                                         31
            www.estrategiaconcursos.com.br                                                                                            174

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                        Z             ...         0,07         0,08          0,09
                                        ...           ...        0,3577       0,3599        0,3621
                                       1,1            ...        0,379         0,381        0,383
                                       1,2            ...        0,398        0,3997        0,4015
                                       1,3            ...        0,4147       0,4162        0,4177
                                        ...           ...          ...           ...          ...

Para resolver questões envolvendo a tabela normal padrão é importante lembrar que essa distribuição é
simétrica, com média 𝜇 = 0.

                                          𝑷(𝟎 < 𝒁 < 𝒛) = 𝟎, 𝟓 − 𝑷(𝒁 > 𝒛)


                                                                             P(0 < Z < z)

                                                                                P(Z > z)

                                                                         z


                                          𝑷(−𝒛 < 𝒁 < 𝟎) = 𝑷(𝟎 < 𝒁 < 𝒛)

                                     P(-z < Z < 0)                           P(0 < Z < z)

                                                            -z           z


                                                  𝑷(𝒁 < −𝒛) = 𝑷(𝒁 > 𝒛)

                                              P(Z < -z)                         P(Z > z)


                                                            -z           z

Supondo, por exemplo, z = 1,96, vimos que 𝑃(0 < 𝑍 < 1,96) = 0,475. Logo:
                     𝑷(𝒁 > 𝟏, 𝟗𝟔) = 𝟎, 𝟓 − 𝑷(𝟎 < 𝒁 < 𝟏, 𝟗𝟔) = 0,5 − 0,475 = 0,025


        Receita Federal (Analista Tributário) Estatística                                            32
        www.estrategiaconcursos.com.br                                                               174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                       P(0 < Z < 1,96)


                                                                            P(Z > 1,96)


                                                                      0,5

                              𝑷(−𝟏, 𝟗𝟔 < 𝒁 < 𝟎) = 𝑷(𝟎 < 𝒁 < 𝟏, 𝟗𝟔) = 0,475


                                 P(-1,96 < Z < 0)                       P(0 < Z < 1,96)

                                                       -1,96    1,96


                          𝑷(𝒁 < −𝟏, 𝟗𝟔) = 𝑷(𝒁 > 𝟏, 𝟗𝟔) = 0,5 − 0,475 = 0,025

                                       P(Z < -1,96)                         P(Z > 1,96)


                                                       -1,96    1,96

A questão pode solicitar e/ou fornecer a probabilidade em módulo, da forma 𝑃(|𝑍| < 𝑧) ou 𝑃 (|𝑍| > 𝑧). Para
resolvê-las, é importante lembrar que a probabilidade 𝑃 (|𝑍| < 𝑧) corresponde a:

                     𝑷(|𝒁| < 𝒛) = 𝑃(−𝑧 < 𝑍 < 𝑧) = 𝑃(−𝑧 < 𝑍 < 0) + 𝑃 (0 < 𝑍 < 𝑧)

                                                P(|Z| < z) = P(-z < Z < z)


                                       P(-z < Z < 0)                   P(0 < Z < z)

                                                         -z       z

Pela simetria da normal padrão, temos 𝑃 (−𝑧 < 𝑍 < 0) = 𝑃 (0 < 𝑍 < 𝑧), logo:

                                         𝑷(|𝒁| < 𝒛) = 𝟐 × 𝑷(𝟎 < 𝒁 < 𝒛)

Supondo, por exemplo, z = 1,96, vimos que 𝑃(0 < 𝑍 < 1,96) = 0,475. Logo:

                        𝑃 (|𝑍| < 1.96) = 2 × 𝑃 (0 < 𝑍 < 1.96) = 2 × 0,475 = 0,95


        Receita Federal (Analista Tributário) Estatística                                              33
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

E a probabilidade 𝑃(|𝑍| > 𝑧) pode ser calculada pela fórmula da probabilidade complementar:

                                           𝑷(|𝒁| > 𝒛) = 1 − 𝑃 (|𝑍| < 𝑧)

                                      𝑷(|𝒁| > 𝒛) = 𝟏 − 𝟐 × 𝑷(𝟎 < 𝒁 < 𝒛)

                                                         P(|Z| < z)

                                          P(Z < -z)                              P(Z > z)


                                                         -z                z
                                                              ==219a34==

                                                P(|Z| > z) = 1 – P(|Z| < z}

Supondo, por exemplo, z = 1,96, vimos que 𝑃(0 < 𝑍 < 1,96) = 0,475. Logo:

                𝑃 (|𝑍| > 𝑧) = 1 − 2 × 𝑃(0 < 𝑍 < 𝑧) = 1 − 2 × 0,475 = 1 − 0,95 = 0,05

Ou, também podemos calcular 𝑃 (|𝑍| > 𝑧), aplicando-se o raciocínio análogo ao que fizemos anteriormente:

                        𝑷(|𝒁| > 𝒛) = 𝑃 (𝑍 < −𝑧 ∪ 𝑍 > 𝑧) = 𝑃(𝑍 < −𝑧) + 𝑃(𝑍 > 𝑧)

                                            P(Z < -z)                          P(Z > z)


                                                        -z                 z

                                             P(|Z| > z) = P(Z < -z) + P(Z > z}

Pela simetria da normal padrão, temos 𝑃 (𝑍 < −𝑧) = 𝑃 (𝑍 > 𝑧), logo:

                                            𝑷(|𝒁| < 𝒛) = 2 × 𝑃 (𝑍 > 𝑧)

Para z = 1,96, em que 𝑃 (𝑍 > 1,96) = 0,025, temos:

                               𝑃(|𝑍| > 𝑧) = 2 × 𝑃(𝑍 > 𝑧) = 2 × 0,025 = 0,05

        Receita Federal (Analista Tributário) Estatística                                            34
        www.estrategiaconcursos.com.br                                                               174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Existem, ainda, outros tipos de tabela para a distribuição normal padrão, que apresentam as probabilidades
para outros intervalos, como por exemplo para a região indicada a seguir:

Esse tipo de tabela indica as probabilidades da forma 𝑃(−∞ < 𝑍 < 𝑧), que correspondem à função da
distribuição normal acumulada.

Transformação entre Distribuições Normais

Mas, e se a média da distribuição for diferente de zero e/ou a variância for diferente de 1?
Para isso, fazemos uma transformação de uma distribuição normal qualquer para a distribuição normal
padrão, conforme fórmula indicada abaixo:

                                                             𝑥−𝜇
                                                        𝑧=   𝜎

Com essa transformação, encontramos os valores de z na distribuição normal padrão associados aos valores
de x da distribuição normal de interesse, com média 𝜇 e desvio padrão 𝜎.
Vamos supor uma distribuição normal com média 𝜇 = 1 e desvio padrão 𝜎 = 3, em que estamos
interessados no valor de 𝑥 = 7. A transformação desse valor para a distribuição normal padrão é:

                                                    𝑥−𝜇 7−1
                                              𝑧=       =    =2
                                                     𝜎   3

Isso significa que os intervalos associados a z = 2 na distribuição normal padrão apresentam a mesma
probabilidade daqueles associados a 𝒙 = 𝟕 na distribuição 𝑿, com média 𝜇 = 1 e desvio padrão 𝜎 = 3.
Por exemplo:

                                              𝑷(𝑿 > 𝟕) = 𝑷(𝒁 > 𝟐)

Pela tabela da normal padrão, temos 𝑃 (0 < 𝑍 < 2) = 0,4772, logo:

                                      𝑃 (𝑍 > 2) = 0,5 − 0,4772 = 0,0228

                                                                   P(0 < Z < 2) = 0,4772

                                                                     P(Z > 2)


                                                              0,5

        Receita Federal (Analista Tributário) Estatística                                              35
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Portanto, 𝑃(𝑋 > 7) = 0,0228 = 2,28%.


Analogamente, temos:

                                               𝑷(𝑿 < 𝟕) = 𝑷(𝒁 < 𝟐)

Sabemos que 𝑃(𝑍 > 2) = 0,5 − 0,4772 = 0,0228, logo:

                             𝑃(𝑍 < 2) = 1 − 𝑃(𝑍 > 2) = 1 − 0,0228 = 0,9772

                                            P(Z < 2)


                                                                       P(Z > 2)

                                                               2

Portanto, 𝑃(𝑋 < 7) = 0,9772.

Para encontrar intervalos envolvendo outros valores, por exemplo P(4 < X < 7), precisamos aplicar a
transformação para ambos os valores. Para x = 4, temos:
                                                       𝑥−𝜇 4−1
                                              𝑧=          =    =1
                                                        𝜎   3
Sabendo que a transformação para x = 7 é z = 2, então podemos concluir que:
                                               P(4 < X < 7) = P(1 < Z < 2)
A probabilidade P(1 < Z < 2) pode ser calculada como:
                                       P(1 < Z < 2) = P(0 < Z < 2) – P(0 < Z < 1)

                                                                    P(1 < Z < 2)

                                                            0 1 2


Pela tabela da distribuição normal, observamos que P(0 < Z < 1) = 0,3413 e que P(0 < Z < 2)=0,4772, logo:
                                      P(1 < Z < 2) = 0,4772 – 0,3413 = 0,1359
Assim, concluímos que P(4 < X < 7) = 0,1359 = 13,59%

        Receita Federal (Analista Tributário) Estatística                                                   36
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Também podemos fazer o caminho inverso, encontrando o valor de 𝒙 em uma distribuição com média 𝜇 e
desvio padrão 𝜎, a partir de uma probabilidade desejada.
Para isso, primeiro encontramos o valor de z correspondente a essa probabilidade desejada, utilizando a
tabela da normal padrão. Em seguida, aplicamos a fórmula da transformação.


Por exemplo, podemos calcular o valor de 𝑥 para o qual a probabilidade de 𝑃(𝑋 < 𝑥 ) = 0,8, para a
distribuição normal com os mesmos parâmetros do exemplo anterior (𝜇 = 1 e 𝜎 = 3).
Considerando a simetria em torno de zero da normal padrão, temos que:
                                         𝑃(0 < 𝑍 < 𝑧) = 𝑃(𝑍 < 𝑧) − 0,5
                                                                     P(0 < Z < z)

                                                        0,5

                                                                 z
                                                      P(Z < z)

Assim, precisamos encontrar, na tabela normal padrão, o valor de 𝑧 que corresponde a:
                                         𝑃(0 < 𝑍 < 𝑧) = 0,8 − 0,5 = 0,3

                                                                     P(0 < Z < z) = 0,3

                                                        0,5

                                                                 z
                                                        0,8

Pela tabela da distribuição normal padrão, observamos que esse valor é 𝑧 = 0,84, pois P(0<Z<0,84) = 0,2995,
que é o valor da tabela mais próximo de 0,3.
Substituindo os valores conhecidos na fórmula transformação (𝜇 = 1, 𝜎 = 3 e 𝑧 = 0,84), podemos
encontrar o valor de 𝑥, que delimita uma probabilidade 𝑃 (𝑋 < 𝑥 ) = 0,8:
                                                              𝑥−𝜇
                                                      𝑧=
                                                               𝜎
                                                                 𝑥−1
                                                    0,84 =
                                                                  3
                                             𝑥 = 3 × 0,84 + 1 = 3,52

        Receita Federal (Analista Tributário) Estatística                                               37
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Agora, vamos calcular as probabilidades associadas a intervalos genéricos, em função do desvio padrão 𝜎.

Para calcular a probabilidade 𝑷(𝝁 − 𝝈 < 𝑿 < 𝝁 + 𝝈), utilizamos a seguinte transformação, para 𝒙 = 𝝁 + 𝝈:

                                              𝒙−𝜇     𝝁+𝝈−𝜇
                                         𝑧=       =𝑧=       =1
                                               𝜎        𝜎

Para 𝒙 = 𝝁 − 𝝈, temos:

                                             𝒙−𝜇     𝝁−𝝈−𝜇
                                        𝑧=       =𝑧=       = −1
                                              𝜎        𝜎

Portanto:

             𝑷(𝝁 − 𝝈 < 𝑿 < 𝝁 + 𝝈) = 𝑃 (−1 < 𝑍 < 1) = 𝑷(−𝟏 < 𝒁 < 𝟎) + 𝑷(𝟎 < 𝒁 < 𝟏)

        De maneira geral, quando os intervalos são da forma 𝑃(𝜇 − 𝑘 < 𝑋 < 𝜇 + 𝑘), em que os
        extremos são equidistantes da média, basta fazermos a transformação para um dos
        extremos, pois o outro estará associado ao mesmo valor de z, porém multiplicado por –1.

Pela tabela da curva normal, temos 𝑃 (0 < 𝑍 < 1) = 0,3413. Pela simetria da normal padrão, em torno da
média 0, temos:
                                  𝑃(−1 < 𝑍 < 0) = 𝑃(0 < 𝑍 < 1) = 0,3413
Logo:

            𝑃(−1 < 𝑍 < 1) = 𝑃 (−1 < 𝑍 < 0) + 𝑃(0 < 𝑍 < 1) = 0,3413 + 0,3413 = 0,6826

                                         𝑷(𝝁 − 𝝈 < 𝑿 < 𝝁 + 𝝈) ≅ 𝟔𝟖%

Ou seja, a probabilidade de uma variável normal qualquer se afastar da média (para cima ou para baixo) em
até 1 desvio padrão é aproximadamente 68%, conforme ilustrado a seguir.

                                                            68%

                                                     𝜇−𝜎          𝜇+𝜎

        Receita Federal (Analista Tributário) Estatística                                             38
        www.estrategiaconcursos.com.br                                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Para 𝑷(𝝁 − 𝟐𝝈 < 𝑿 < 𝝁 + 𝟐𝝈), temos:
                                                𝑥 − 𝜇 𝜇 + 2𝜎 − 𝜇
                                           𝑧=        =           =2
                                                  𝜎       𝜎
Portanto:

            𝑷(𝝁 − 𝟐𝝈 < 𝑿 < 𝝁 + 𝟐𝝈) = 𝑃 (−2 < 𝑍 < 2) = 𝑷(−𝟐 < 𝒁 < 𝟎) + 𝑷(𝟎 < 𝒁 < 𝟐)

Pela tabela, temos 𝑃(0 < 𝑍 < 2) = 0,4772. Considerando a simetria da normal padrão, temos:
                                  𝑃(−2 < 𝑍 < 0) = 𝑃(0 < 𝑍 < 2) = 0,4772
E a probabilidade desejada é:

            𝑃(−2 < 𝑍 < 2) = 𝑃 (−2 < 𝑍 < 0) + 𝑃(0 < 𝑍 < 2) = 0,4772 + 0,4772 = 0,9544

                                       𝑷(𝝁 − 𝟐𝝈 < 𝑿 < 𝝁 + 𝟐𝝈) ≅ 𝟗𝟓%
Ou seja, a probabilidade de uma variável normal qualquer se afastar da média (para cima ou para baixo) em
até 2 desvios padrão é aproximadamente 95%, como ilustrado abaixo.

                                                            95%

                                                 𝜇 − 2𝜎             𝜇 + 2𝜎

Para 𝑷(𝝁 − 𝟑𝝈 < 𝑿 < 𝝁 + 𝟑𝝈), obtemos, pela transformação, 𝑧 = 3, logo:

            𝑷(𝝁 − 𝟑𝝈 < 𝑿 < 𝝁 + 𝟑𝝈) = 𝑃 (−3 < 𝑍 < 3) = 𝑷(−𝟑 < 𝒁 < 𝟎) + 𝑷(𝟎 < 𝒁 < 𝟑)

Pela tabela, temos 𝑃(0 < 𝑍 < 3) = 0,4987 e, pela simetria, 𝑃 (−3 < 𝑍 < 0) = 0,4987, logo:

            𝑃(−3 < 𝑍 < 3) = 𝑃 (−3 < 𝑍 < 0) + 𝑃(0 < 𝑍 < 3) = 0,4987 + 0,4987 = 0,9974

                                      𝑷(𝝁 − 𝟑𝝈 < 𝑿 < 𝝁 + 𝟑𝝈) ≅ 𝟗𝟗, 𝟕%
Ou seja, a probabilidade de uma variável normal qualquer se afastar da média (para cima ou para baixo) em
até 3 desvios padrão é aproximadamente 99,7%, ilustrado abaixo.

                                                            99,7%

                                                 𝜇 − 3𝜎                      𝜇 + 3𝜎

        Receita Federal (Analista Tributário) Estatística                                             39
        www.estrategiaconcursos.com.br                                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Essas probabilidades (68% para 𝝁 ± 𝝈; 95% para 𝝁 ± 𝟐𝝈 e 99,7% para 𝝁 ± 𝟑𝝈) compõem a chamada Regra
Empírica. Algumas questões (não muitas) exigem que você memorize essas probabilidades.

                                           Distribuição Normal: 𝑁 (𝜇, 𝜎 2 )

                         Simétrica, com formato de sino, definida em toda a reta real

                  Regra Empírica: 68% para 𝝁 ± 𝝈; 95% para 𝝁 ± 𝟐𝝈 e 99,7% para 𝝁 ± 𝟑𝝈

                                                                                       𝒙−𝝁
                             Transformação para a Normal Padrão N(0,1): 𝒛 =
                                                                                        𝝈

(FGV/2010 – SEAD-AP – Adaptada) Em relação à distribuição normal, julgue as afirmativas a seguir:
                                                                                               (𝑋−𝜇)
I – Se X tem distribuição normal com média 𝜇 e variância 𝜎 2 então a variável 𝑍 =                      tem distribuição
                                                                                                 𝜎2
normal padrão.
II – A probabilidade de que uma variável Z que tenha distribuição normal padrão seja maior que 5 é
aproximadamente igual a 0.
Comentários:
                                                                              (𝑋−𝜇)
Em relação à afirmativa I, a transformação para a Normal Padrão é 𝑍 =                 , ou seja, a divisão é pelo desvio
                                                                               𝜎
padrão, não pela variância. Por isso, a afirmativa I está incorreta.
Em relação à afirmativa II, a distribuição se concentra em 3 desvios-padrão para ambos os lados (mais de
99% se encontram nesse intervalo). De fato, as tabelas da normal padrão, em geral, fornecem valores até
z=3,99 porque valores a probabilidade de Z ser maior que isso é praticamente nula. Logo, a afirmativa II está
correta.
Resposta: I – incorreta, II – correta.


(VUNESP/2009 – CETESB) Para um determinado horário, considerando-se todos os dias de um período, ao
se calcular a média de congestionamento de trânsito em km obtém-se o valor 𝜇 e desvio padrão 𝜎.
Considerando-se que os valores obtidos pela variável e suas respectivas probabilidades constituem uma
distribuição normal, no intervalo de (𝜇 − 𝜎) até (𝜇 + 𝜎), a percentagem dos dados contidos é cerca de


        Receita Federal (Analista Tributário) Estatística                                                            40
        www.estrategiaconcursos.com.br                                                                              174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

a) 25%
b) 50%
c) 68%
d) 94%
e) 99%
Comentários:
Essa questão exige o conhecimento da Regra Empírica. Vimos que o intervalo de (𝜇 − 𝜎) até (𝜇 + 𝜎)
concentra 68% da distribuição normal.
Gabarito: C


(CESPE/2016 – Analista da FUNPRESP-JUD) A simetria de Z implica que P(Z ≥ 2) = 1 – P(Z ≤ -2).
Comentários:
A simetria da curva normal com média igual a zero implica na seguinte relação entre P(Z ≥ 2) e P(Z ≤ -2):
                                               𝑃(𝑍 ≥ 2) = 𝑃(𝑍 ≤ −2)
Essa relação está ilustrada no gráfico abaixo.

                                𝑃(𝑍 ≤ −2)                            𝑃(𝑍 ≥ 2)

                                                    -2       0   2


A relação descrita no enunciado iguala a probabilidade 𝑃(𝑍 ≥ 2) à probabilidade 1 − 𝑃(𝑍 ≤ −2). Esta
corresponde a toda a região indicada abaixo:

                                                                     1 − 𝑃(𝑍 ≤ −2)

                                                    -2       0

Podemos observar que 𝑃(𝑍 ≥ 2) é bem menor que 50%, enquanto 1 − 𝑃(𝑍 ≤ −2) é bem maior que 50%,
ou seja:
                                            𝑃(𝑍 ≥ 2) ≠ 1 − 𝑃(𝑍 ≤ −2)
Logo, o item está errado.
Gabarito: Errado.


         Receita Federal (Analista Tributário) Estatística                                                  41
         www.estrategiaconcursos.com.br                                                                 174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(FGV/2022 – EPE) O salário médio dos funcionários de uma empresa é normalmente distribuído com média
de R$ 2.500,00 e desvio padrão de R$ 1.500,00. A empresa divide os funcionários em 5 classes, a saber: M,
N, O, P e Q, onde “M” é a classe com melhor salário e “Q” a classe com menor salário.
Se apenas 5% dos funcionários dessa empresa estão na classe “M”, o menor valor do salário do funcionário
para ele pertencer à classe “M” é
[Considere que P(Z ≤ 1,64) = 0,95.]
a) 3900,00
b) 4170,00
c) 4960,00
d) 5160,00
e) 5350,00
Comentários:
O enunciado informa que os salários seguem distribuição normal com média μ = R$ 2.500,00 e desvio
padrão σ = R$1.500,00; e pede o valor do menor salário da classe M, associada aos 5% melhores salários,
conforme ilustrado a seguir:
                                                       95%

                                                                           5%


                                                            2500   𝑥
Sabendo que 5% (ou 0,05) da distribuição é maior do que o valor buscado, então 95% (ou 0,95) da
distribuição é menor e o enunciado informa justamente que P(Z ≤ 1,64) = 0,95.
Assim, devemos aplicar a transformação para z = 1,64, sabendo que a média é 2500 e o desvio padrão é
1500:
                                                  x−μ
                                             z=
                                                   σ
                                                 x − 2500
                                         1,64 =
                                                   1500
                                  x − 2500 = 1,64 × 1500 = 2460
                                                      x = 4960
Gabarito: C


(VUNESP/2014 – EMPLASA) O tempo de vida da população de um determinado país tem distribuição normal
com a média igual a 68 anos e o desvio padrão igual a 11.
                                                      𝑋−𝜇
Considere os valores da tabela e a fórmula 𝑍 =              :
                                                       𝜎

        Receita Federal (Analista Tributário) Estatística                                             42
        www.estrategiaconcursos.com.br                                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

A probabilidade de uma pessoa viver mais do que 90 anos é de
a) 15,87%
b) 6,68%
c) 4,82%
d) 3,36%
e) 2,28%
Comentários:
Sendo 𝜇 = 68 e 𝜎 = 11, temos a seguinte transformação para 𝑥 = 90:
                                         𝑥 − 𝜇 90 − 68 22
                                            𝑧= =          =    =2
                                           𝜎       11       11
Pela tabela, que apresenta a probabilidade 𝑃(0 < 𝑍 < 𝑧), temos:
                                                 𝑃 (0 < 𝑍 < 2) = 0,4772
Logo:
                           𝑃(𝑍 > 2) = 0,5 − 𝑃(0 < 𝑍 < 2) = 0,5 − 0,4772 = 0,0228
                                                                     𝑃(0 < 𝑍 < 2)


                                                                         𝑃(𝑍 > 2)

                                                                   0,5
Gabarito: E.


(FCC/2015 – Auditor Fiscal da SEFAZ/PI) Se Z tem distribuição normal padrão, então: P(Z < 0,4) = 0,655; P(Z
< 1,2) = 0,885; P(Z < 1,6) = 0,945; P(Z < 1,8) = 0,964; P(Z < 2) = 0,977.
O efeito do medicamento A é o de baixar a pressão arterial de indivíduos hipertensos. O tempo, em minutos,
decorrido entre a tomada do remédio e a diminuição da pressão é uma variável aleatória X com distribuição
normal, tendo média µ e desvio padrão σ. Se o valor de µ é de 56 min e o valor de σ é de 10 min, a
probabilidade de X estar compreendido entre 52 min e 74 min é igual a
a) 30,9%
b) 56,0%
c) 61,9%


           Receita Federal (Analista Tributário) Estatística                                            43
           www.estrategiaconcursos.com.br                                                               174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

d) 52,4%
e) 64,5%
Comentários:
A probabilidade de X estar entre 52 min e 74 min pode ser calculada a partir das transformações para x = 74
min e para x = 52 min, considerando a média de 56 min e desvio padrão de 10 min.
Para x = 74, temos:
                                                      𝑥−𝜇
                                                      𝑧=
                                                       𝜎
                                                74 − 56 18
                                             𝑧=        =    = 1,8
                                                  10     10


A transformação para x = 52 é:
                                          52 − 56 −4
                                            𝑧=     =     = −0,4
                                             10       10
Então, a probabilidade de X estar compreendido entre 52 min e 74 min corresponde a:
                                    𝑃 (52 < 𝑋 < 74) = 𝑃 (−0,4 < 𝑍 < 1,8)
Essa probabilidade pode ser calculada como:
                              𝑃(−0,4 < 𝑍 < 1,8) = 𝑃 (𝑍 < 1,8) − 𝑃 (𝑍 < −0,4)

                                     𝑃(𝑍 < −0,4)

                                                      -0,4       1,8

                                                  𝑃(𝑍 < 1,8)

Pela tabela observamos que P(Z < 1,8) = 0,964. Além disso, temos P(Z < 0,4) = 0,655, logo, o seu
complementar é:
                                            P(Z > 0,4) = 1 – 0,655 = 0,345


                                         𝑃(𝑍 < 0,4)
                                                                 𝑃(𝑍 > 0,4)

                                                               0,4

Pela simetria da normal padrão, temos:
                                            P(Z < -0,4) = P(Z > 0,4) = 0,345

        Receita Federal (Analista Tributário) Estatística                                               44
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                      𝑃(𝑍 < −0,4)
                                                              𝑃(𝑍 > 0,4)

                                                     -0,4   0,4

Inserindo esses valores na equação acima, temos:
                𝑃 (52 < 𝑋 < 74) = 𝑃 (𝑍 < 1,8) − 𝑃(𝑍 < −0,4) = 0,964 − 0,345 = 0,619
Gabarito: C

        Receita Federal (Analista Tributário) Estatística                             45
        www.estrategiaconcursos.com.br                                                174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

   SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE
Nesta seção, veremos a soma de variáveis com distribuição normal e, também, com outras distribuições. Ao
final, veremos como aproximar uma distribuição binomial a uma normal.

Soma de Variáveis com Distribuição Normal

A soma de variáveis independentes com distribuição normal também segue uma distribuição normal, cuja
média corresponde à soma das médias das variáveis e a variância corresponde à soma das variâncias.

        Se 𝑋1 , 𝑋2 , … , 𝑋𝑛 são variáveis independentes que seguem distribuição normal, então a
        soma 𝑌 = 𝑋1 + 𝑋2 + ⋯ + 𝑋𝑛 também segue distribuição normal com média e variância
        dadas respectivamente por:

                                       𝐸 (𝑌) = 𝐸(𝑋1 ) + 𝐸(𝑋2 ) + ⋯ + 𝐸(𝑋𝑛 )

                                       𝑉(𝑌) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) + ⋯ + 𝑉(𝑋𝑛 )

Ademais, a diferença entre duas variáveis independentes com distribuição normal também segue uma
distribuição normal, cuja média e variância podem ser calculadas pelas propriedades dessas medidas.

        Se 𝑋1 e 𝑋2 são variáveis independentes com distribuição normal, então a diferença 𝑌 =
        𝑋1 − 𝑋2 segue distribuição normal com média e variância dadas respectivamente por:

                                               𝐸 (𝑌) = 𝐸 (𝑋1 ) − 𝐸(𝑋2 )

                                               𝑉(𝑌) = 𝑉(𝑋1 ) + 𝑉(𝑋2 )

Por exemplo, sendo 𝑌 = 𝑋1 − 𝑋2 , em que 𝑋1 e 𝑋2 são variáveis normais independentes, com médias
𝐸 (𝑋1 ) = 3 e 𝐸 (𝑋2 ) = 5, e variâncias 𝑉(𝑋1 ) = 4 e 𝑉(𝑋2 ) = 1, então, 𝑌 terá distribuição normal, com
parâmetros:

                                     𝐸 (𝑌) = 𝐸 (𝑋1 ) − 𝐸 (𝑋2 ) = 3 − 5 = −2

                                      𝑉(𝑌) = 𝑉(𝑋1 ) + 𝑉 (𝑋2 ) = 4 + 1 = 5

        Receita Federal (Analista Tributário) Estatística                                            46
        www.estrategiaconcursos.com.br                                                               174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Pontue-se que a soma, a subtração, a multiplicação ou a divisão de uma distribuição normal por uma
constante real também segue distribuição normal, cuja média e variância podem ser calculadas pelas
propriedades de esperança e variância.
Por exemplo, sendo X uma variável normal com média E(X) = 3 e variância V(X) = 4, então a variável Y = 2X –
6 terá distribuição normal, com média e variância dadas por:

                           𝐸(𝑌) = 𝐸(2𝑋 – 6) = 2. 𝐸(𝑋) – 6 = 2 × 3 – 6 = 0

                               𝑉(𝑌) = 𝑉(2𝑋 – 6) = 22 . 𝑉(𝑋) = 4 × 4 = 16

(2020 – FADESP) A variável aleatória X tem distribuição normal com média µ = 2 e variância σ2 = 9. Seja Y
uma variável aleatória definida por Y = 2X + 1. Nestas condições, pode-se afirmar que Y tem distribuição
a) normal com média µ = 2 e variância σ2 = 30.
b) qui-quadrado com média µ = 5 e variância σ2 = 36.
c) normal com média µ = 5 e variância σ2 = 9.
d) normal com média µ = 5 e variância σ2 = 36.
Comentários:
Vimos que a soma de variáveis normais segue uma distribuição normal, mesmo quando somadas a uma
constante. Logo, a variável Y possui distribuição normal, com média:
                                             E(Y) = E(2X + 1) = 2.E(X) + 1
Sendo E(X) = 2, temos:
                                                   E(Y) = 2.2 + 1 = 5
A variância é:
                                               V(Y) = V(2X + 1) = 4V(X)
Sendo V(X) = 36, então:
                                                    V(Y) = 4.9 = 36.
Gabarito: D.


(2018 – Petrobras) As variáveis aleatórias X e Y são independentes. A variável X segue uma distribuição
Normal com média 4 e variância 16, e a Y segue uma distribuição Normal com média 9 e variância 1. A
distribuição de X - Y é Normal com

        Receita Federal (Analista Tributário) Estatística                                               47
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

a) média -5 e variância 15.
b) média -5 e variância 17.
c) média 5 e variância 15.
d) média 5 e variância 17.
e) média 13 e variância 15.
Comentários:
Vimos que a diferença de variáveis normais segue uma distribuição normal, com média:
                                             𝜇 = 𝜇𝑋 − 𝜇𝑌 = 4 − 9 = −5
E variância:
                                           𝜎 2 = 𝜎𝑋2 + 𝜎𝑌2 = 16 + 1 = 17
Gabarito: B.


(FCC/2015 – Analista do CNMP – Adaptada) Se Z tem distribuição normal padrão, então: P(Z < 0,5) = 0,591;
P(Z < 1) = 0,841; P(Z < 1,15) = 0,8951; P(Z < 1,17) = 0,879; P(Z < 1,2) = 0,885; P(Z < 1,4) = 0,919; P(Z < 1,64) =
0,95; P(Z < 2) = 0,977; P(Z < 2,06) = 0,98; P(Z < 2,4) = 0,997.
Sejam X1, X2, ... , Xn variáveis aleatórias independentes e identicamente distribuídas com distribuição normal
padrão. Seja a variável aleatória 𝑌 = 𝑋1 + 𝑋2 + ⋯ + 𝑋𝑛 .
Considerando essa informação, julgue a seguinte afirmativa.
Para n = 4, P(− 2 < Y < 1) = 0,432.
Comentários:
A soma de n = 4 variáveis aleatórias independentes com distribuição normal padrão N(0,1) segue distribuição
normal com média e variância dadas por:
                       𝐸 (𝑌) = 𝐸(𝑋1 ) + 𝐸 (𝑋2 ) + 𝐸 (𝑋3 ) + 𝐸 (𝑋4 ) = 0 + 0 + 0 + 0 = 0
                       𝑉 (𝑌) = 𝑉 (𝑋1 ) + 𝑉(𝑋2 ) + 𝑉(𝑋3 ) + 𝑉 (𝑋4 ) = 1 + 1 + 1 + 1 = 4
Logo, o desvio padrão é:
                                                    𝜎 = √𝑉(𝑌) = 2
Para calcular a probabilidade desejada, utilizaremos a fórmula da transformação para a normal padrão. O
valor de z para y = 1 é:
                                                    𝑦−𝜇
                                                 𝑧=
                                                      𝜎
                                                  1−0
                                              𝑧=       = 0,5
                                                   2
E o valor de z para y = -2 é:
                                                        −2 − 0
                                                  𝑧=           = −1
                                                          2
Logo, a probabilidade desejada corresponde a:

         Receita Federal (Analista Tributário) Estatística                                                     48
         www.estrategiaconcursos.com.br                                                                       174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                              P(− 2 < Y < 1) = P(− 1 < Z < 0,5) = P(Z < 0,5) – P(Z < -1)
Pela tabela fornecida, observamos que P(Z < 0,5) = 0,591. Temos também que P(Z < 1) = 0,841, logo o seu
complementar é:
                                             P(Z > 1) = 1 – 0,841 = 0,159
Pela simetria da normal padrão, temos:
                                              P(Z < -1) = P(Z > 1) = 0,159
Assim, a probabilidade P(-2 < Y < 1) corresponde a:
                                   P(Z < 0,5) – P(Z < -1) = 0,591 – 0,159 = 0,432
Resposta: Certo.

Teorema Central do Limite

Um dos motivos pelos quais a Distribuição Normal (ou de Gauss) é tão importante em Estatística decorre do
Teorema Central do Limite (TLC), que trata da soma de variáveis que seguem uma distribuição qualquer:

        Para variáveis aleatórias 𝑋1 , 𝑋2 , … , 𝑋𝑛 independentes e identicamente distribuídas (i.i.d),
        a distribuição da soma 𝑋1 + 𝑋2 + ⋯ + 𝑋𝑛 tende a uma distribuição normal, à medida em
        que 𝒏 cresce, cuja média e variância são dadas por:

                                𝐸 (𝑌) = 𝐸(𝑋1 ) + 𝐸(𝑋2 ) + ⋯ + 𝐸(𝑋𝑛 ) = 𝑛. 𝐸(𝑋)

                                𝑉(𝑌) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) + ⋯ + 𝑉(𝑋𝑛 ) = 𝑛. 𝑉(𝑋)

Note que as variáveis podem apresentar qualquer distribuição, mesmo assim, a sua soma seguirá
aproximadamente uma distribuição normal.

        A convergência de que trata o TLC é uma convergência em distribuição. A convergência
        em distribuição de uma sequência 𝑋𝑛 a uma variável 𝑋 significa que as funções de
        distribuição acumuladas de 𝑋𝑛 e de 𝑋 convergem.

        As funções densidade de probabilidade não necessariamente convergem, ou seja, não se
        trata de uma convergência ponto a ponto. A convergência em distribuição é o tipo mais
        fraco de convergência, dentre os usuais.


        Receita Federal (Analista Tributário) Estatística                                                49
        www.estrategiaconcursos.com.br                                                                   174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Vamos supor que haja 100 variáveis independentes Xi, com i = 1, 2, ..., 100, todas com média E(Xi) = 3 e
variância V(Xi) = 4. Assim, sendo Y = X1 + X2 + ... + X100, então a média e variância de Y serão:
                                             E(Y) = 100 x E(Xi) = 100 x 3 = 300
                                             V(Y) = 100 x V(Xi) = 100 x 4 = 400


Ainda que as variáveis não sejam identicamente distribuídas, isto é, ainda que apresentem distribuições
distintas, mesmo assim, a sua soma terá, aproximadamente, uma distribuição normal, desde que as
variáveis sejam independentes e tenham variâncias similares.
Nesse caso, a esperança e variância serão:

                                         𝐸 (𝑌) = 𝐸(𝑋1 ) + 𝐸(𝑋2 ) + ⋯ + 𝐸(𝑋𝑛 )

                                         𝑉(𝑌) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) + ⋯ + 𝑉(𝑋𝑛 )

Atenção: devemos somar as variâncias, não os desvios padrão!

(FGV/2017 – IBGE) Sejam X1, X2, X3, ..., X64 variáveis aleatórias discretas, com distribuição Binomial, todas
com p = 0,25 e n = 12. Também são conhecidos valores da função distribuição acumulada da normal-padrão,
mais especificamente: ɸ(2) = 0,977, ɸ(1,5) = 0,933, ɸ(1,25) = 0,894.
No caso da extração de uma amostra (n = 64), a probabilidade de que a soma dos valores seja superior a 207
é igual a:
a) 0,023
b) 0,046
c) 0,067
d) 0,106
e) 0,134
Comentários:
Pelo Teorema Central do Limite, a soma de N variáveis independentes identicamente distribuídas X i, cada
uma com média E(X) e variância V(X), é uma variável Y, com distribuição aproximadamente normal, com
média e variância dadas por:
                                                      𝐸(𝑌) = 𝑁. 𝐸(𝑋)
                                                      𝑉(𝑌) = 𝑁. 𝑉(𝑋)


           Receita Federal (Analista Tributário) Estatística                                              50
           www.estrategiaconcursos.com.br                                                                174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Sendo X uma variável binomial com n = 12 e p = 0,25 (logo, q = 1 – p = 0,75), então:

                                           𝐸(𝑋) = 𝑛. 𝑝 = 12 × 0,25 = 3

                                   𝑉(𝑋) = 𝑛. 𝑝. 𝑞 = 12 × 0,25 × 0,75 = 9/4

Assim, a distribuição da soma de N = 64 variáveis X terá média e variância dadas por:

                                        𝐸 (𝑌) = 𝑁. 𝐸 (𝑋) = 64 × 3 = 192

                                                                   9
                                        𝑉(𝑌) = 𝑁. 𝑉 (𝑋) = 64 ×       = 144
                                                                   4

O desvio padrão de Y é, portanto:

                                            𝜎𝑌 = √𝑉(𝑋) = √144 = 12

Assim, a probabilidade 𝑃(𝑌 > 207) pode ser calculada pela seguinte transformação:

                                           𝑦 − 𝜇 207 − 192 15
                                      𝑧=        =         =    = 1,25
                                             𝜎      12      12

O enunciado informa que 𝑃(−∞ < 𝑍 < 1,25) = 0,894 . Logo:

                       𝑃 (𝑍 > 1,25) = 1 − 𝑃(−∞ < 𝑍 < 1,25) = 1 − 0,894 = 0,106

Gabarito: D.

Aproximação da Binomial pela Normal

Como consequência do Teorema Central do Limite, podemos aproximar uma distribuição binomial a uma
distribuição normal 𝑌, quando o número de ensaios 𝒏 for grande.
Nesse caso, a média e a variância da distribuição são, respectivamente:
                                                     𝐸(𝑌) = 𝑛. 𝑝
                                                𝑉(𝑌) = 𝑛. 𝑝. (1 − 𝑝)


Assim, podemos aproximar a probabilidade de uma variável binomial 𝑋 apresentar valores dentro de um
intervalo [𝑎, 𝑏], ou seja, 𝑃(𝑎 ≤ 𝑋 ≤ 𝑏), à probabilidade de uma variável normal 𝑌 apresentar valores no
referido intervalo:
                                         𝑃(𝑎 ≤ 𝑋 ≤ 𝑏) ≅ 𝑃(𝑎 < 𝑌 < 𝑏)

        Receita Federal (Analista Tributário) Estatística                                           51
        www.estrategiaconcursos.com.br                                                              174

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 10

          Considerando uma variável binomial 𝑋, com 𝑛 = 50 e 𝑝 = 0,5, vamos calcular a
          probabilidade associada ao intervalo [20, 30].

          Pela distribuição binomial, teríamos que calcular:

                         𝑃(20 ≤ 𝑋 ≤ 30) = 𝑃 (𝑋 = 20) + 𝑃(𝑋 = 21) + ⋯ + 𝑃(𝑋 = 30)

                                50                  50                      50
              𝑃(20 ≤ 𝑋 ≤ 30) = ( ) 0,520 . 0,530 + ( ) 0,521 . 0,529 + ⋯ + ( ) 0,530 . 0,520
                                20                  21                      30

          Cansativo, não é? O resultado dessa conta é aproximadamente 0,8811 (confia em mim).

          Aproximando essa distribuição a uma variável 𝑌 que segue uma distribuição normal, com
          média 𝜇𝑌 = 𝑛. 𝑝 = 25 e variância 𝜎𝑌2 = 𝑛. 𝑝. (1 − 𝑝) = 12,5 (desvio padrão 𝜎𝑌 ≅ 3,5355),
          temos a seguinte transformação para 𝑥 = 30:

                                                      𝑥−𝜇         30−25
                                                 𝑧=           ≅            ≅ 1,41
                                                       𝜎          3,5255


          Pela tabela normal, podemos observar que 𝑃 (0 < 𝑍 < 1,41) = 0,4207.

          Considerando que o intervalo [20, 30] é simétrico em relação à média 𝜇𝑌 = 25, então:

                       𝑃(20 ≤ 𝑋 ≤ 30) ≅ 𝑃(−1,41 < 𝑍 < 1,41) = 2 × 0,4207 = 0,8414

O número exato de ensaios necessários que permite essa aproximação é controverso (e depende do grau de
precisão desejado). O que se sabe é que quanto maior 𝒏 e quanto mais próximo de 𝟏⁄𝟐 é o valor de 𝒑, mais
a distribuição binomial se aproxima da normal.


A seguir, apresento os histogramas1 de distribuições binomiais, para 𝑛 = 10. Note que o histograma para
𝑝 = 0,5 é bem próximo de uma normal, mesmo para um número relativamente pequeno de ensaios (10).
Por outro lado, o histograma para 𝑝 = 0,1 está bem distante de uma normal.

1
  Histogramas obtidos das aulas de Bacharelado em Economia da Faculdade de Economia, Administração e
Contabilidade da Universidade de São Paulo (FEA/USP), disponível em https://www.ime.usp.br/~yambar/MAE0219/
Aula%208%20Teorema%20do%20Limite%20Central/Aula%208-Teorema%20do%20Limite%20Central.pdf


          Receita Federal (Analista Tributário) Estatística                                             52
          www.estrategiaconcursos.com.br                                                                174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Vejamos agora os histogramas para 𝑛 = 50:

Nesse caso, todos os histogramas são próximos de uma curva normal, mesmo para 𝑝 = 0,1.


Existe uma regra empírica que exige que o produto entre 𝒏 e a menor probabilidade entre 𝒑 e 𝒒 deve ser
maior que 5, ou, para uma melhor aproximação, maior que 15.
Na prática, a questão deve fornecer elementos que permitirão concluir que a distribuição binomial pode ser
aproximada a uma normal.

        Receita Federal (Analista Tributário) Estatística                                              53
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Correção de Continuidade

Por se tratar de uma distribuição discreta sendo aproximada a uma distribuição contínua, para melhorar a
precisão dos resultados, é necessário introduzir uma correção de continuidade.
Para isso, devemos aumentar o intervalo da binomial da forma [𝑎, 𝑏], isto é, com os extremos incluídos, em
0,5 unidade para cada extremo. Em outras palavras, acrescentamos 0,5 unidade ao extremo superior e
subtraímos 0,5 unidade do extremo inferior.
Assim, o intervalo da distribuição normal correspondente será (𝑎 − 0,5, 𝑏 + 0,5):
                                  𝑃(𝑎 ≤ 𝑋 ≤ 𝑏) ≅ 𝑃(𝑎 − 0,5 < 𝑌 < 𝑏 + 0,5)


Por exemplo, o intervalo [2, 4] em uma distribuição binomial (discreta) corresponde ao seguinte intervalo na
                                                            ==219a34==

distribuição normal (contínua):
                                  𝑃(2 ≤ 𝑋 ≤ 4) ≅ 𝑃(2 − 0,5 < 𝑌 < 4 + 0,5)
                                       𝑃 (2 ≤ 𝑋 ≤ 4) ≅ 𝑃(1,5 < 𝑌 < 4,5)


Se o intervalo desejado não incluir um dos extremos, ou ambos, então primeiro ajustamos o intervalo para
incluí-lo(s).


Por exemplo, vamos calcular a probabilidade de obter mais de 3 sucessos e menos de 8 sucessos, o que
corresponde ao intervalo (3, 8), isto é, sem os extremos.
Para utilizar a aproximação da binomial à normal, primeiro ajustamos o intervalo para que os extremos
sejam incluídos.
Ora, o evento mais de 3 sucessos e menos de 8 sucessos, em uma distribuição binomial (discreta), equivale
ao evento 4 ou mais sucessos e 7 ou menos sucessos, o que corresponde ao intervalo [4, 7], isto é, com os
extremos incluídos.
                                         𝑃(3 < 𝑋 < 8) = 𝑃(4 ≤ 𝑋 ≤ 7)
Após o ajuste do intervalo, podemos aplicar a correção de continuidade, somando-se 0,5 unidade ao
extremo superior e subtraindo 0,5 unidade do extremo inferior:
                                  𝑃(4 ≤ 𝑋 ≤ 7) ≅ 𝑃(4 − 0,5 < 𝑌 < 7 + 0,5)
                                       𝑃 (4 ≤ 𝑋 ≤ 7) ≅ 𝑃(3,5 < 𝑌 < 7,5)

        Receita Federal (Analista Tributário) Estatística                                                54
        www.estrategiaconcursos.com.br                                                                   174

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 10

         Vamos, então, refazer o nosso exemplo com a correção de continuidade:

                                      𝑃(20 ≤ 𝑋 ≤ 30) ≅ 𝑃(19,5 < 𝑌 < 30,5)

         Para 𝑥 = 30,5, com 𝜇 = 25 e 𝜎 ≅ 3,5355, temos a seguinte transformação:

                                                    𝑥−𝜇      30,5−25
                                               𝑧=         ≅ 3,5255 ≅ 1,56
                                                      𝜎


         Pela tabela normal, podemos observar que 𝑃 (0 < 𝑍 < 1,56) = 0,4406. Logo:

                      𝑃(20 ≤ 𝑋 ≤ 30) ≅ 𝑃(−1,56 < 𝑍 < 1,56) = 2 × 0,4406 = 0,8812

         Note que esse resultado é extremamente próximo do resultado exato, qual seja, 0,8811!

Logo, para resolver questões envolvendo a aproximação de uma distribuição binomial X a uma distribuição
normal Y, precisamos:

   i.   Calcular a média e a variância da distribuição, 𝐸(𝑌) = 𝐸 (𝑋) = 𝑛. 𝑝 e 𝑉(𝑌) = 𝑉(𝑋) = 𝑛. 𝑝. 𝑞
  ii.   Aplicar a correção de continuidade 𝑃(𝑎 ≤ 𝑋 ≤ 𝑏) ≅ 𝑃(𝑎 − 0,5 < 𝑌 < 𝑏 + 0,5)
                                                            𝑥−𝜇
 iii.   Utilizar a transformação para a normal padrão 𝑧 = 𝜎
 iv.    Consultar a tabela da normal padrão para encontrar os valores de probabilidade

(CESPE/2013 – TRT 17ª Região) No que se refere a distribuições discretas, julgue o seguinte item.
A aproximação da distribuição binomial pela normal não se aplica com base no teorema limite central, visto
que a binomial não se relaciona com uma soma de variáveis aleatórias.
Comentários:
O Teorema Central do Limite garante que, para n suficientemente grande, a distribuição binomial pode sim
ser aproximada pela distribuição Normal.
Pontue-se, ainda, que a distribuição binomial é uma soma de variáveis de Bernoulli.
Gabarito: Errado.

         Receita Federal (Analista Tributário) Estatística                                             55
         www.estrategiaconcursos.com.br                                                                174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(FGV/2017 – MPE/BA) A probabilidade de que uma decisão de 1ª instância da Justiça Federal do Paraná seja
reformada pelo Tribunal Superior da 4ª Região é de 0,20. No momento 100 recursos aguardam por uma
decisão dos Srs. Desembargadores daquele Tribunal.
São informados alguns valores da distribuição acumulada da normal-padrão:
Ø(1) = 0,87, Ø(1,28)=0,90 e Ø(2) = 98
Sem usar o ajuste de continuidade, a probabilidade de que mais de 24 decisões sejam reformadas é:
a) 13%
b) 10%
c) 8%
d) 5%
e) 2%
Comentários:
A questão trabalha com a aproximação da binomial à normal. Sabendo que a probabilidade de reforma de
decisão é p = 0,20 e que há n = 100 recursos, então a média da distribuição é:
                                            𝜇 = 𝑛 × 𝑝 = 100 × 0,2 = 20
Sendo a probabilidade de não reforma de decisão complementar q = 1 – p = 0,9, a variância é:
                                      𝑉(𝑋) = 𝑛. 𝑝. 𝑞 = 100 × 0,2 × 0,8 = 16
E o desvio padrão:
                                               𝜎 = √𝑉(𝑋) = √16 = 4
Considerando que não deve ser utilizada a correção de continuidade, então a transformação de x = 24 para
a normal padrão é:
                                         𝑥 − 𝜇 24 − 20 4
                                           𝑧= =         = =1
                                           𝜎        4     4
Pelas informações fornecidas, observamos que a probabilidade acumulada é 𝑃(𝑍 ≤ 1) = 0,87. Logo, a
probabilidade de haver mais decisões reformadas é complementar:
                             𝑃(𝑍 > 1) = 1 − 𝑃 (𝑍 ≤ 1) = 1 − 0,87 = 0,13 = 13%
Gabarito: A.

         Receita Federal (Analista Tributário) Estatística                                           56
         www.estrategiaconcursos.com.br                                                              174

                                       


---

    Equipe Exatas Estratégia Concursos
    Aula 10

                             DISTRIBUIÇÃO QUI-QUADRADO
A distribuição qui-quadrado resulta da soma de distribuições normais reduzidas (ou padrão) independentes,
elevadas ao quadrado.

Em outras palavras, a distribuição qui-quadrado 𝒳𝑘2 corresponde à soma dos quadrados de 𝑘 variáveis com
distribuição normal padrão, 𝑍𝑖 ~𝑁(0,1):

                                                     𝒳𝑘2 = ∑𝑘𝑖=1(𝑍𝑖 )2

Dizemos que a distribuição apresenta 𝒌 graus de liberdade, sendo 𝒌 o número de variáveis normais que
compõem a distribuição qui-quadrado. O número de graus de liberdade é o único parâmetro da distribuição.

Em particular, para 𝑘 = 1, isto é, havendo uma única variável normal padrão elevada ao quadrado 𝑍 2 , temos
uma distribuição qui-quadrado com um grau de liberdade, 𝒳12 .


Pontue-se que, se as variáveis normais 𝑋𝑖 não forem reduzidas, ou seja, se apresentarem média 𝜇𝑖 e desvio
padrão 𝜎𝑖 , é necessário aplicar a transformação para a normal reduzida, antes de elevar ao quadrado, para
formar a distribuição qui-quadrado padrão:
                                                 𝑘        𝑘
                                            2         2
                                                             𝑋𝑖 − 𝜇𝑖 2
                                           𝒳𝑘 = ∑(𝑍𝑖 ) = ∑ (        )
                                                                𝜎𝑖
                                                𝑖=1      𝑖=1

          Quando distribuições normais com média 𝜇 ≠ 0 não padronizadas são utilizadas para
          formar uma distribuição qui-quadrada, dizemos que a distribuição resultante é não central,
          com parâmetro de não centralidade igual à média 𝜇 das variáveis normais.

Para a distribuição qui-quadrado, os diferentes graus de liberdade reproduzem funções densidade de
probabilidade distintas, conforme ilustrado a seguir1.

1
   Gráfico do professor Ivan Balducci da Universidade Estadual Paulista, FOSJC/UNESP, disponível em
https://slideplayer.com.br/slide/45581/.


          Receita Federal (Analista Tributário) Estatística                                             57
          www.estrategiaconcursos.com.br                                                                174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Podemos observar que as variáveis com distribuição qui-quadrado são positivas (afinal correspondem à
soma do quadrado de variáveis) e assimétricas à direita.
Observamos, ainda, que quanto maior o grau de liberdade, isto é, quanto mais variáveis normais ao
quadrado são somadas, mais simétrica será a distribuição.
Inclusive, pelo Teorema Central do Limite, a distribuição qui-quadrado se aproxima a uma distribuição
                                                            ==219a34==

normal, à medida que o número de graus de liberdade 𝒌 aumenta.

        A soma de variáveis com distribuição qui-quadrado com 𝑘1 , 𝑘2 , … , 𝑘𝑛 graus de liberdade,
        segue uma distribuição qui-quadrado com 𝑘1 + 𝑘2 + ⋯ + 𝑘𝑛 graus de liberdade.

A média da distribuição qui-quadrado é igual ao número de graus de liberdade 𝒌; e a variância é igual ao
dobro do número de graus de liberdade 𝟐𝒌:

                                                      𝑬(𝓧𝟐𝒌 ) = 𝒌

                                                     𝑽(𝓧𝟐𝒌) = 𝟐𝒌

A distribuição qui-quadrado também possui uma tabela que associa uma probabilidade 𝑃(𝒳𝑘2 < 𝑥) ou
𝑃(𝒳𝑘2 > 𝑥) a um valor positivo 𝑥, de acordo com o grau de liberdade 𝑘.
Pelo fato de a distribuição não ser simétrica, a distribuição acima da média é diferente daquela abaixo da
média. Por isso, a tabela apresenta os valores de probabilidade para toda a distribuição.

A tabela a seguir apresenta os valores para 𝑃(𝒳𝑘2 < 𝑥), indicados na primeira linha. A primeira (assim como
a última) coluna apresenta os graus de liberdade 𝑘, que a tabela indica como 𝑛.
Por exemplo, a mediana para uma distribuição com 5 graus de liberdade, isto é, o valor de 𝑥 para o qual
𝑃 (𝒳52 < 𝑥 ) = 50%, conforme se observa na linha 𝑛 = 5 e na coluna 𝑃 = 0,5, é 𝑥 = 4,351.

        Receita Federal (Analista Tributário) Estatística                                               58
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

Equipe Exatas Estratégia Concursos
Aula 10

      A distribuição qui-quadrado é um caso particular da distribuição gama, cuja f.d.p. é:

                                                    𝛽𝛼 𝑥 𝛼−1 𝑒 −𝛽𝑥
                                                                     ,   𝑠𝑒 𝑥 ≥ 0
                                       𝑓 (𝑥 ) = {        Γ(𝛼)                       }
                                                    0,          𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜
                                                                            𝒌           𝟏
      A f.d.p. da distribuição qui-quadrado é obtida com 𝜶 = 𝟐 e 𝜷 = 𝟐.

      Por exemplo, para 𝒌 = 𝟐, temos uma distribuição qui-quadrado com 2 graus de liberdade,
                                                                 𝟏
      o que corresponde a uma distribuição gama com 𝜶 = 𝟏 e 𝜷 = 𝟐.

      Nessa situação, em que 𝛼 = 1, a distribuição gama se reduz a uma distribuição
      exponencial, com 𝛽 = 𝜆. Então, uma distribuição qui-quadrado com 2 graus de liberdade
                                                            𝟏
      é também uma distribuição exponencial, com 𝝀 = 𝜷 = 𝟐.

                                                    1
      A média dessa distribuição é 𝐸 (𝑋) = 𝜆 = 𝟐 ou 𝐸(𝒳𝑘2 ) = 𝑘 = 𝟐.

      Receita Federal (Analista Tributário) Estatística                                        59
      www.estrategiaconcursos.com.br                                                           174

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                             Distribuição Qui-quadrado com 𝒌 graus de liberdade

                Soma de 𝒌 variáveis normais padrão elevadas ao quadrado: 𝒳𝒌2 = ∑𝒌𝑖=1(𝑍𝑖 )2

                                          Assimétrica à direita, com 𝑥 ≥ 0

                          Esperança: 𝑬(𝓧𝟐𝒌 ) = 𝒌;                     Variância: 𝑽(𝓧𝟐𝒌 ) = 𝟐𝒌

(FCC/2015 – Analista do CNMP – Adaptada) Sejam X1, X2, ... , Xn variáveis aleatórias independentes e
identicamente distribuídas com distribuição normal padrão e seja a variável aleatória 𝑊 = 𝑋12 + 𝑋22 + ⋯ +
𝑋𝑛2 . Considerando essa informação, julgue a seguinte afirmativa:
A variável W tem distribuição qui-quadrado com (n − 1) graus de liberdade.
Comentários:
Sendo 𝑊 = 𝑋12 + 𝑋22 + ⋯ + 𝑋𝑛2 , então W apresenta distribuição qui-quadrado com k = n graus de liberdade
(não, n – 1).
Resposta: Errado.


(FGV/2021 – FunSaúde/CE) Se X1, X2,...Xn são n variáveis aleatórias independentes e identicamente
distribuídas com distribuição N(μ,σ2), então a variável
                                                            𝑛
                                                                (𝑋𝑖 − 𝜇 )2
                                                 𝑄=∑
                                                                    𝜎2
                                                       𝑖=1

Tem a seguinte distribuição de probabilidades:
a) normal com média 𝑛𝜇 e variância 𝑛𝜎 2 .
b) qui-quadrado com n graus de liberdade
c) qui-quadrado com n-1 graus de liberdade.
d) t-Student com n graus de liberdade.
e) t-Student com n-1 graus de liberdade

        Receita Federal (Analista Tributário) Estatística                                             60
        www.estrategiaconcursos.com.br                                                                174

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 10

Comentários:
A variável Q indicada no enunciado corresponde à soma de n variáveis normais, reduzidas à normal padrão,
     𝑋 −𝜇
𝑍𝑖 = 𝑖𝜎 𝑖, elevadas ao quadrado.
         𝑖

Assim, a variável Q apresenta distribuição qui-quadrado com k = n graus de liberdade.
Gabarito: B


(CESPE/2018 – Agente de Polícia Federal) Uma amostra aleatória simples Y1, Y2, ..., Y25 foi retirada de uma
distribuição normal com média nula e variância σ2, desconhecida. Considerando que P(x2 ≤ 13) = P(x2 > 41) =
0,025, em que x2 representa a distribuição qui-quadrado com 25 graus de liberdade, e que 𝑆 2 = ∑25          2
                                                                                                      𝑖=1 𝑌𝑖 ,
julgue o item a seguir.
A variância da distribuição X2 com 25 graus de liberdade é superior a 40.
Comentários:
A variância da distribuição qui-quadrado, com k = 25 graus de liberdade, é:
                                              𝑉(𝑋) = 2𝑘 = 2 × 25 = 50
Assim, a variância é superior a 40.
Gabarito: Certo.


(CESPE/2018 – Analista Administrativo – EBSERH) Considerando que X e Y sejam variáveis aleatórios
mutuamente independentes que seguem distribuição normal padrão, julgue o próximo item.
A soma dos quadrados Q = X2 + Y2 segue uma distribuição exponencial com média igual a 2.
Comentários:
A soma de k variáveis independentes com distribuição normal padrão elevadas ao quadrado segue
distribuição qui-quadrado, com k graus de liberdade. Nesse caso, temos uma variável com distribuição qui-
quadrado com k = 2. A média dessa distribuição é:
                                                         E(X) = k = 2
Especialmente para k = 2, a distribuição qui-quadrado corresponde a uma distribuição exponencial, com 𝜆 =
1
  .
2

Gabarito: Certo.

          Receita Federal (Analista Tributário) Estatística                                                61
          www.estrategiaconcursos.com.br                                                                  174

                                        


---

    Equipe Exatas Estratégia Concursos
    Aula 10

                                DISTRIBUIÇÃO T DE STUDENT
A variável 𝑇 com distribuição 𝒕 de Student (ou t-Student) é definida como:

                                                                   𝑍
                                                          𝑇=
                                                                       2
                                                                  √𝒳𝑘
                                                                   𝑘

em que 𝑍 é uma variável normal padrão, 𝒳𝑘2 é uma variável com distribuição qui-quadrado, com 𝒌 graus de
liberdade, sendo 𝑍 e 𝒳𝑘2 independentes.
A variável 𝑇 apresenta 𝒌 graus de liberdade, que também é o único parâmetro da distribuição.


O gráfico a seguir1 apresenta as funções densidade de probabilidade para distribuições t-Student com 1, 5 e
25 graus de liberdade.

Observa-se que, assim como a normal padrão, a distribuição t-Student é simétrica, com média 𝝁 = 𝟎 e
formato de sino, assumindo valores em toda a reta real, (−∞, ∞).
Porém, em comparação com a normal, a curva t-Student é mais baixa na região central e mais larga nos
extremos. Ou seja, a distribuição t-Student apresenta maior variabilidade.


A variância da distribuição de t-Student é dada por:

                                                              𝑘
                                                𝑉(𝑇) = 𝑘−2 , 𝑝𝑎𝑟𝑎 𝑘 > 2

Pontue-se que a variância não é definida um grau de liberdade menor ou igual a 2 (𝒌 ≤ 𝟐).

1
  Obtido na apresentação das aulas da Prof. Tarciana Liberal, da Universidade Federal da Paraíba, disponível em
http://www.de.ufpb.br/~tarciana/Probabilidade2/Aula15.pdf


          Receita Federal (Analista Tributário) Estatística                                                 62
          www.estrategiaconcursos.com.br                                                                    174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                                                      𝑘
A variância da distribuição de t-Student é sempre maior que 1, para qualquer valor de 𝑘, pois a razão 𝑘−2 é
sempre um valor superior a 1. Porém, à medida que 𝑘 aumenta, essa razão se reduz, aproximando-se de 1.
Assim, à medida que o grau de liberdade 𝒌 aumenta, a distribuição de t-Student se aproxima de uma curva
normal, com variância igual a 1 (outra consequência do Teorema Central do Limite).


A distribuição t-Student também apresenta uma tabela que associa aos valores de probabilidade os
intervalos de valores de 𝑡, de acordo com o grau de liberdade, conforme indicado a seguir. Observe pelo
gráfico anterior a essa tabela, que os seus valores de probabilidade são da forma 𝑃 (𝑇 < 𝑡).

                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                                                 63
        www.estrategiaconcursos.com.br                                                                    174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

A primeira coluna apresenta os graus de liberdade, que a tabela chama de 𝑣, e a primeira linha apresenta os
valores de probabilidade acumulada, até os valores de 𝑡 indicados nos campos. Por exemplo, para 5 graus
de liberdade (5ª linha), o valor que delimita uma probabilidade 𝑃 (𝑇 < 𝑡) = 0,9 (6ª coluna), é 𝑡 = 1,48.
Lembre-se que a distribuição é simétrica, com média, mediana e moda iguais a 𝜇 = 0. Assim:
                                              𝑃 (𝑇 < −𝑡) = 𝑃(𝑇 > 𝑡)
                                           𝑃 (𝑇 < 0) = 𝑃 (𝑇 > 0) = 0,5
Por isso, são apresentados apenas valores de probabilidades 𝑃(𝑇 < 𝑡) maiores que 50%, uma vez que à
esquerda da média, os valores são simétricos.
Assim como para a curva normal padrão, há outras formas de apresentar a tabela de t-Student.

        Ressalte-se que a distribuição t-Student para 𝑘 = 1 consiste na razão entre duas variáveis
        normais padrão independentes:

                                                        𝑍1        𝑍1        𝑍
                                                 𝑇=       2
                                                              =           = 𝑍1
                                                       √𝒳1        √𝑍22       2
                                                         1


        Nesse caso específico, temos uma distribuição de Cauchy, que corresponde à razão entre
        duas variáveis normais independentes.

        Essa distribuição também é simétrica e mais achatada em relação à normal. Porém, ela é
        uma distribuição "patológica", pois não possui média ou variância definidas.

                          Distribuição t-Student, definida para todos os valores reais

                                                                  𝑍
                                                        𝑇=
                                                                      2
                                                              √𝒳𝒌
                                                                   𝒌

                  Simétrica, com 𝜇 = 0 e formato de sino mais achatado do que a normal

                                                                  𝑘
                                       Variância: 𝑉(𝑋) = 𝑘−2 , 𝑝𝑎𝑟𝑎 𝑘 > 2

        Receita Federal (Analista Tributário) Estatística                                               64
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(2017 – TRF 2ª Região – Adaptada) Sobre a distribuição t-Student, julgue a afirmativa a seguir.
Considere uma variável aleatória Z com distribuição normal padrão e uma outra variável aleatória V com
distribuição qui-quadrado e v graus de liberdade. Se Z e V forem independentes, então a variável aleatória
      𝑍
𝑇 = 𝑉 tem distribuição t de Student com v graus de liberdade.
     √
         𝑣

Comentários:
Vimos que a distribuição t-Student é definida como:
                                                                  𝑍
                                                           𝑇=
                                                                      2
                                                                 √𝒳𝑘
                                                                  𝑘
Então, sendo V uma distribuição qui-quadrado com v graus de liberdade, temos:
                                                                  𝑍
                                                            𝑇=
                                                                 √𝑉
                                                                  𝑣
Resposta: Certo.


(CESPE/2011 – Analista Judiciário do TJ/ES)

O gráfico acima mostra a função de densidade da distribuição normal padrão N(0, 1) e t(1) e t(5), que
representam, respectivamente, as densidades da distribuição t de Student com 1 e 5 graus de liberdade.
Com base nesse gráfico, julgue o próximo item.
A distribuição N(0, 1) possui variância unitária, a t(5) possui variância igual a 5/3, e a variância da distribuição
t-Student com 1 grau de liberdade é indefinida.
Comentários:
Vamos analisar as três afirmações.

             Receita Federal (Analista Tributário) Estatística                                                   65
             www.estrategiaconcursos.com.br                                                                     174

                                           


---

   Equipe Exatas Estratégia Concursos
   Aula 10

Em relação à primeira afirmação, de fato, a distribuição normal padrão N(0,1) possui variância igual a 1
(unitária).
Em relação à segunda afirmação, a distribuição de t-Student com k = 5 graus de liberdade é:
                                                       𝑘     5
                                                     𝑉 (𝑋 ) =
                                                           =
                                                     𝑘−2 3
Em relação à terceira afirmação, a distribuição de t-Student com k = 1 grau de liberdade não tem variância
definida.
Gabarito: Certo.


(FGV/2010 – FIOCRUZ) Duas variáveis aleatórias independentes X e Y são tais que X tem distribuição Normal
com média 0 e variância 4 e Y pode ser escrita como Y = Z12 + Z22 + Z32 + Z42 , em que os Zi são independentes
e identicamente distribuídos com distribuição normal padrão, i = 1, 2, 3, 4. Nesse caso, a seguinte variável
tem distribuição t- Student
a) XY
b) XY-0,5
c) X-1Y
d) 4XY-0,5
e) 2XY
Comentários:
A variável t-Student é definida como:
                                                                 𝑍
                                                          𝑇=
                                                                     2
                                                                √𝒳𝑘
                                                                 𝑘
Sendo X uma variável normal com média 𝜇 = 0 e variância V(X) = 4, para transformá-la na normal padrão
precisamos dividir pelo desvio padrão 𝜎 = √𝑉(𝑋) = 2:
                                            𝑋−𝜇 𝑋−0 𝑋
                                                  = 𝑍=    =
                                               𝜎      2      2
Sendo Y a soma de 4 variáveis normais padrão independentes elevadas ao quadrado, então Y é uma variável
qui-quadrado 𝒳𝑘2 com k = 4 graus de liberdade.
Sendo as variáveis independentes, então a seguinte razão apresenta distribuição de t-Student:
                                                 𝑋     𝑋
                                                𝑍 2       𝑋  2   𝑋
                                        𝑇=     =     = 2 = ×   =
                                             2         √𝑌 2 √𝑌 √𝑌
                                           √𝒳𝑘   √𝑌
                                            𝑘      4    2
Essa razão pode ser representada como:
                                                    𝑋       −
                                                                 1
                                             𝑇=              2 = 𝑋 × 𝑌 −0,5
                                                     1 =𝑋×𝑌
                                                    𝑌2
Gabarito: B


            Receita Federal (Analista Tributário) Estatística                                              66
            www.estrategiaconcursos.com.br                                                                174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(CESPE/2020 – Analista Judiciário do TJ/PA) Se X e Y são variáveis aleatórias normais independentes, tais
                                     𝑋
que X ~ N(0,1) e Y ~ N(0,1), a razão 𝑌 segue uma distribuição
a) de Cauchy
b) de Pareto
c) de Weibull
d) t de Student com 2 graus de liberdade
e) normal padrão
Comentários:
A razão entre variáveis independentes com distribuição normal segue uma distribuição de Cauchy, que
corresponde à razão entre duas variáveis normais.
Note que X e Y são variáveis normais padrão. Nesse caso, temos também uma distribuição t de Student,
porém com 1 grau de liberdade, e não 2, como descrito na alternativa D.
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                             67
        www.estrategiaconcursos.com.br                                                                174

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 10

                              DISTRIBUIÇÃO F DE SNEDECOR
A distribuição 𝐹 de Snedecor (ou de Fisher, ou de Fisher-Snedecor) é definida da seguinte forma, em que
𝒳𝑘21 e 𝒳𝑘22 são variáveis independentes com distribuição qui-quadrado, com 𝑘1 e 𝑘2 graus de liberdade,
respectivamente:

                                                                𝒳𝑘21
                                                                    ⁄
                                                                     𝑘
                                                      𝐹𝑘1 ,𝑘2 = 𝒳 2 1
                                                                 𝑘2⁄
                                                                     𝑘2


A variável 𝐹𝑘1 ,𝑘2 apresenta 𝒌𝟏 graus de liberdade no numerador e 𝒌𝟐 graus de liberdade no denominador,
os quais são os parâmetros da distribuição.
O gráfico abaixo1 apresenta as f.d.p. de distribuições F de Snedecor, para diferentes parâmetros.

Observa-se que a variável assume apenas valores positivos, ou seja, no intervalo (0, ∞) (afinal, resulta da
divisão entre duas variáveis positivas). Além disso, observamos que a distribuição é assimétrica à direita,
porém seu formato varia de acordo com os seus parâmetros.


A média dessa distribuição é dada por:

                                                        𝑘2
                                                 𝜇=           , 𝑝𝑎𝑟𝑎 𝑘2 > 2
                                                      𝑘2 −2


Assim, para a distribuição F de Snedecor, apenas o grau de liberdade do denominador 𝒌𝟐 influencia no
cálculo da média.
Além disso, a média é 𝝁 > 𝟏, sendo reduzida conforme 𝑘2 aumenta. (Essa é a mesma fórmula da variância
da t-Student!)

1
  Obtido na apresentação das aulas da Prof. Tarciana Liberal, da Universidade Federal da Paraíba, disponível em
http://www.de.ufpb.br/~tarciana/Probabilidade2/Aula16.pdf


          Receita Federal (Analista Tributário) Estatística                                                 68
          www.estrategiaconcursos.com.br                                                                   174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

        O quadrado de uma distribuição de t-Student com 𝑘 graus de liberdade corresponde a uma
        distribuição F de Snedecor com 1 grau de liberdade no numerador e 𝑘 graus de liberdade
        no denominador:

                                                            𝑍2
                                                    𝑇 2 = 𝒳 2 = 𝐹1,𝑘
                                                             𝑘
                                                            𝑘

Para a distribuição F de Snedecor, também existe uma tabela para que possamos associar probabilidades
aos intervalos de valores.
Porém, como a distribuição depende de 2 parâmetros, sendo um associado às linhas e o outro, às colunas,
a tabela é apresentada para valores fixos de probabilidade.
A tabela a seguir apresenta os valores de 𝑓 que delimitam uma probabilidade 𝑃 (𝐹 > 𝑓 ) = 0,05.

        Receita Federal (Analista Tributário) Estatística                                           69
        www.estrategiaconcursos.com.br                                                              174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Com essa tabela, podemos calcular o valor de 𝑓 que delimita uma probabilidade 𝑃 (𝐹 > 𝑓 ) = 0,05 para uma
distribuição com 5 graus de liberdade no numerador (indicados nas linhas) e 10 graus de liberdade no
denominador (indicado nas colunas), por exemplo.
Pela 5ª coluna e 10ª linha da tabela, podemos observar que 𝑓 = 3,33.
Por outro lado, se precisarmos calcular o valor associado a uma outra probabilidade, 𝑃 (𝐹 > 𝑓 ) = 0,1, por
exemplo, precisaríamos de outra tabela.

                                               Distribuição F-Snedecor

            Razão entre variáveis qui-quadrado, divididas pelos respectivos graus de liberdade:

                                                               𝒳𝑘21
                                                                   ⁄
                                                                    𝑘
                                                     𝐹𝑘1 ,𝑘2 = 𝒳 2 1
                                                                𝑘2⁄
                                                                    𝑘2


                                          Assimétrica à direita, com 𝑥 ≥ 0

                                                       2    𝑘
                                          Média: 𝜇 = 𝑘 −2 , 𝑝𝑎𝑟𝑎 𝑘2 > 2
                                                            2

(2017 – TRF 2ª Região – Adaptada) Sobre a distribuição F, julgue a afirmativa a seguir.
Se uma variável aleatória Y segue a distribuição F, então seus valores são não negativos e a forma da sua
distribuição é controlada pelos graus de liberdade.
Comentários:
Vimos que a distribuição F assume apenas valores não negativos, e depende dos graus de liberdade no
numerador e no denominador.
Resposta: Certo.

        Receita Federal (Analista Tributário) Estatística                                              70
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

(FCC/2015 – Analista do CNMP) Sejam X1, X2, ... , Xn variáveis aleatórias independentes e identicamente
distribuídas com distribuição normal padrão. Sejam as variáveis aleatórias:
                                                                                    𝑌⁄
               𝑌 = 𝑋1 + 𝑋2 + ⋯ + 𝑋𝑛 ;                𝑊 = 𝑋12 + 𝑋22 + ⋯ + 𝑋𝑛2 ;    𝑉= 2
                                                                                    𝑊⁄
                                                                                       𝑛
Com base nessas informações, julgue a afirmativa a seguir:
A variável V tem distribuição F de Snedecor com graus de liberdade 2 e n.
Comentários:
A distribuição F de Snedecor é dada por:
                                                            𝒳𝑘21
                                                                ⁄
                                                                 𝑘
                                                   𝐹𝑘1 ,𝑘2 = 2 1
                                                            𝒳𝑘2
                                                                ⁄
                                                                 𝑘2
O enunciado informa que:
                                                            𝑌⁄
                                                       𝑉=     2
                                                            𝑊⁄
                                                               𝑛
Em que Y é a soma de variáveis normais, ou seja, Y segue distribuição normal, em vez de qui-quadrado, então
V não apresenta distribuição F de Snedecor.
Resposta: Errado.


(CESPE/2010 – Estatístico do MS) A média de uma distribuição F de Snedecor depende de dois parâmetros:
o número de graus de liberdade do denominador e o número de graus de liberdade do numerador.
Comentários:
A média da distribuição F de Snedecor é dada por:
                                                  𝑘2
                                          𝜇=           ,     𝑝𝑎𝑟𝑎 𝑘2 > 2
                                                𝑘2 − 2
Logo, a média depende apenas do número de graus de liberdade do denominador.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                               71
        www.estrategiaconcursos.com.br                                                                  174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                           RESUMO DA AULA
                                             1
Distribuição Uniforme: 𝑓(𝑥 ) = (𝑏−𝑎) , 𝑎 ≤ 𝑥 ≤ 𝑏:

                                                                                (𝑛−𝑚)
    Probabilidade de um intervalo: 𝑃(𝑚 < 𝑋 < 𝑛) = (𝑏−𝑎)

                              𝑏+𝑎                                        (𝑏−𝑎)2
    Esperança: 𝐸(𝑋) =                e Variância: 𝑉(𝑋) =
                                  2                                       12

Distribuição Exponencial, 𝑓 (𝑥 ) = 𝜆. 𝑒 −𝜆𝑥 :

    Probabilidade de um intervalo: 𝑃(𝑎 < 𝑋 < 𝑏) = 𝑒 −𝜆.𝑎 − 𝑒 −𝜆𝑏
                                                            ==219a34==

    Função de Distribuição Acumulada: 𝑃(𝑋 < 𝑏) = 1 − 𝑒 −𝜆𝑏
                              1                             1
    Esperança: 𝐸(𝑋) = 𝜆 e Variância: 𝑉(𝑋) = 𝜆2

    Propriedade: 𝑃(𝑋 > 𝑡 + 𝑠|𝑋 > 𝑠) = 𝑃(𝑋 > 𝑡)


Distribuição Normal 𝑁 (𝜇, 𝜎 2 ): com média 𝜇 e variância 𝜎 2

    Simétrica com formato de sino, definida em toda a reta real
                                                                                   𝑥−𝜇
    Transformação para a normal padrão 𝑁 (0,1): 𝑧 =                               𝜎

    Teorema Central do Limite: Soma de muitas variáveis tende a seguir distribuição normal


Distribuição Qui-quadrado: Positiva; assimétrica
                                                                           𝑘

                                                      𝒳𝑘2 = ∑(𝑍𝑖 )2
                                                                          𝑖=1

    Esperança: 𝐸(𝑋) = 𝑘 e Variância: 𝑉(𝑋) = 2𝑘


Distribuição t-Student: Simétrica com 𝜇 = 0 e formato de sino mais “achatado” do que a normal

                                                                               𝑍
                                                            𝑇=
                                                                                   2
                                                                           √𝒳𝑘
                                                                            𝑘
                              𝑘
    Variância: 𝑉(𝑋) = 𝑘−2 , 𝑝𝑎𝑟𝑎 𝑘 > 2


        Receita Federal (Analista Tributário) Estatística                                       72
        www.estrategiaconcursos.com.br                                                          174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Distribuição Fisher-Snedecor: Positiva; assimétrica

                                                              𝒳𝑘21
                                                                  ⁄
                                                                   𝑘
                                                     𝐹𝑘1 ,𝑘2 = 2 1
                                                              𝒳𝑘2
                                                                  ⁄
                                                                   𝑘2
                               𝑘
    Esperança: 𝐸(𝑋) = 𝑘 −2
                         2
                            , 𝑝𝑎𝑟𝑎 𝑘2 > 2
                               2

        Receita Federal (Analista Tributário) Estatística                  73
        www.estrategiaconcursos.com.br                                     174

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 10

                               QUESTÕES COMENTADAS – FGV

Uniforme

1.        (FGV/2023 – CGE/SC) Considere uma variável aleatória X uniformemente distribuída no intervalo [0,1].
A média e a variância de X serão, respectivamente, iguais a

a) 0 e 1/3

b) 1 e 1

c) 1/2 e 1/12

d) 1/12 e 1

e) 1/6 e 1/24

Comentários:
A média de uma variável uniforme, no intervalo [0, 1], é a média aritmética dos limites do intervalo:
                                                          𝑎+𝑏 0+1 1
                                                    𝜇=       =   =
                                                           2   2   2
E a variância é dada por:
                                                      (𝑏 − 𝑎)2 (1 − 0)2    1
                                               𝜎2 =           =         =
                                                         12       12      12
Gabarito: C


2.     (FGV/2023 – BANESTES) Admita que a variável aleatória Y siga uma distribuição uniforme contínua no
intervalo [-1, +2]. Assim, a esperança de Y2 é igual a

a) 1

b) 1,5

c) 2

d) 2,5

e) 3

           Receita Federal (Analista Tributário) Estatística                                               74
           www.estrategiaconcursos.com.br                                                                  174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Comentários:
O valor de 𝐸(𝑌 2 ) pode ser calculado a partir da fórmula da variância:
                                              𝑉𝑎𝑟(𝑌) = 𝐸(𝑌 2 ) − [𝐸(𝑋)]2
                                              𝐸(𝑌 2 ) = 𝑉𝑎𝑟(𝑌) + [𝐸(𝑋)]2
Para uma variável uniforme, a esperança corresponde à média aritmética dos extremos:
                                                       𝑎 + 𝑏 (−1) + 2 1
                                            𝐸(𝑋) =          =        =
                                                         2      2      2
E a variância é dada por:
                                             (𝑏 − 𝑎)2 (2 − (−1))2 32   9   3
                                𝑉𝑎𝑟(𝑌) =             =           =   =   =
                                                12        12       12 12 4
E a soma é:
                                                        3   1 2 3 1
                                            𝐸(𝑌 2 ) =     +( ) = + =1
                                                        4   2   4 4
Gabarito: A


3.      (FGV/2023 – TCE/ES) Os noventa e nove percentis (𝑷𝟏 , 𝑷𝟐 , … , 𝑷𝟗𝟗 ) dividem os dados ordenados em
cem partes com, aproximadamente, 1% dos dados em cada uma delas. Seja 𝑿~𝑼𝒏𝒊𝒇𝒐𝒓𝒎𝒆(𝒂; 𝒃), 𝒃 > 𝒂 e
𝒑(𝒊) o 𝒊-ésimo percentil, 𝒊 = 𝟏, 𝟐, … , 𝟗𝟗.

Uma expressão que fornece o 𝒑(𝒊) dessa distribuição é

a) 𝑎 + (𝑏 − 𝑎)𝑖%

b) 𝑏 + (𝑏 − 𝑎)𝑖%

c) 𝑎 − (𝑏 − 𝑎)𝑖%

d) 𝑏 − (𝑎 − 𝑏)𝑖%

        𝑏−𝑎
e) 𝑏 + ( 2 ) 𝑖%

Comentários:
Precisamos encontrar a expressão referente ao 𝑖-ésimo percentil de uma distribuição uniforme no intervalo
(𝑎, 𝑏).
Em relação à alternativa A, a expressão 𝑎 + (𝑏 − 𝑎)𝑖% representa que somamos ao limite inferior do intervalo
(𝑎) a parcela (𝑏 − 𝑎)𝑖%, associada ao 𝑖-ésimo percentil.


        Receita Federal (Analista Tributário) Estatística                                                75
        www.estrategiaconcursos.com.br                                                                   174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Para ilustrar, vamos supor que o intervalo seja (10, 50). De acordo com essa expressão, o primeiro percentil é
calculado como:
                                       10 + (50 − 10) × 1% = 10 + 0,4 = 10,4
De modo que 𝑃(𝑋 < 10,4) = 1%. Já, o 99º percentil é:
                                      10 + (50 − 10) × 99% = 10 + 39,6 = 49,6
De modo que 𝑃(𝑋 < 49,6) = 99%. Em outras palavras, devemos dividir a amplitude do intervalo por 100 e
multiplicar pelo percentil 𝑖 desejado. Esse é o valor que deve ser acrescido ao limite inferior do intervalo.
Portanto, essa expressão está correta.
A alternativa B soma esse termo ao limite superior do intervalo, resultando em valores maiores que o limite
superior. A alternativa E também adiciona um termo ao limite superior, o que também resulta em valores
maiores. Assim, as alternativas A e E estão erradas.
A alternativa C subtrai o termo (𝑏 − 𝑎)𝑖% do limite inferior, resultando em valores menores que o limite
inferior, logo a alternativa C está errada.
Por fim, a alternativa D subtrai esse termo do limite superior, o que resulta em valores entre os dois limites.
Entretanto, os percentis estarão trocados, ou seja, para 𝑖 = 1, obteremos o 99% percentil, para 𝑖 = 2,
obteremos o 98%, e assim sucessivamente. Logo, a alternativa D está errada.
Gabarito: A


4.     (FGV/2022 – EPE) Se uma variável aleatória contínua X tem distribuição uniforme no intervalo [2, 8],
então a variância de X é igual a

a) 2,0

b) 3,0

c) 4,0

d) 5,0

e) 6,0

Comentários:
A variância de uma variável com distribuição uniforme é dada por:
                                                             (𝑏 − 𝑎)2
                                                    𝑉𝑎𝑟(𝑋) =
                                                                12
Sendo os extremos 𝑎 = 2 e 𝑏 = 8, temos:

         Receita Federal (Analista Tributário) Estatística                                                  76
         www.estrategiaconcursos.com.br                                                                     174

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 10

                                                           (8 − 2)2 62 36
                                              𝑉𝑎𝑟(𝑋) =             =   =   =3
                                                              12     12 12
Gabarito: B


5.    (FGV/2022 – SEMSA/Manaus) Avalie se as seguintes famílias de distribuições pertencem à família
exponencial:

I - Distribuição Normal
II - Distribuição Binomial

III - Distribuição de Poisson

IV - Distribuição Uniforme                                      ==219a34==

Estão corretas apenas

a) I e II

b) III e IV

c) I, II e III

d) I, III e IV

e) II, III e IV

Comentários:
Diversas distribuições conhecidas pertencem à família exponencial, incluindo a distribuição normal, binomial e
de Poisson. A distribuição uniforme não pertence a essa família.
Gabarito: C

6.          (FGV/2018 – ALERO) Avalie se as seguintes famílias de distribuições são uma família exponencial:

I - A família de distribuições Poisson com média desconhecida.

II - A família de distribuições normais com média conhecida e variância desconhecida.

III - A família de distribuições Beta com parâmetro α conhecido e parâmetro β desconhecido.

IV - A família de distribuições Uniforme no intervalo (0, θ), θ parâmetro desconhecido.
São de fato famílias exponenciais

            Receita Federal (Analista Tributário) Estatística                                                  77
            www.estrategiaconcursos.com.br                                                                     174

                                            


---

     Equipe Exatas Estratégia Concursos
     Aula 10

a) I e II, apenas.

b) III e IV, apenas.

c) I, II e IV, apenas.

d) I, II e III, apenas.

e) I, II, III e IV.

Comentários:

A distribuição uniforme contínua, assim como a discreta, é uma importante distribuição que não pertence à
família exponencial.

As demais distribuições citadas (Poisson, normal e Beta), assim como outras (binomial, geométrica,
hipergeométrica, exponencial, Weibull) são da família exponencial.

Gabarito: D.

7.        (FGV/2018 – ALERO) Se (Xn) é uma sequência de variáveis aleatórias com distribuição uniforme no
intervalo (0, (n – 1)/ n), n > 1, então (Xn) converge para uma distribuição

a) uniforme no intervalo (0, 1).

b) qui-quadrado com 1 grau de liberdade

c) exponencial com parâmetro 𝜆 = 1.

d) normal padrão.

e) geométrica parâmetro 𝜃 = 1.

Comentários:

                                                                                       𝑛−1
Sendo Xn uma sequência de variáveis aleatórias com distribuição uniforme no intervalo (0, 𝑛 ), então quando
                      𝑛−1
𝑛 → ∞, a razão 𝑛 converge para 1, porque 𝑛 − 1 e 𝑛 convergem para o mesmo valor.

Logo, Xn converge para uma distribuição uniforme no intervalo (0, 1).

Gabarito: A.

           Receita Federal (Analista Tributário) Estatística                                            78
           www.estrategiaconcursos.com.br                                                               174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

8.     (FGV/2017 – IBGE) Sabe-se que o tempo de aplicação de um questionário em uma pesquisa de campo
é uma variável com distribuição uniforme entre 8 e 20 minutos. Um entrevistador pretende aplicar três
questionários.

Logo, é correto afirmar que:

a) a probabilidade de que todas as entrevistas durem mais do que 15 minutos é de 27/64;

b) a probabilidade de que duas entrevistas durem mais do que a média é igual a 5/8;

c) o desvio padrão do tempo de duração de cada entrevista é igual a 2 minutos;

d) a probabilidade de que apenas uma das entrevistas leve menos da metade do tempo máximo é igual a 25/72.

e) a probabilidade do tempo total de entrevista exceder 40 minutos é igual a 0,5.

Comentários:

Primeiro vamos calcular o valor da f.d.p.:

                                                       1     1     1
                                               𝑘=         =      =
                                                     𝑏 − 𝑎 20 − 8 12

Em relação à alternativa a, a probabilidade de um questionário durar mais que 15 minutos é:

                                                                  𝑏−𝑚
                                                   𝑃(𝑋 > 𝑚) =
                                                                  𝑏−𝑎

                                                                        20 − 15    5
                                  𝑃(𝑋 > 15) = 𝑃(15 < 𝑋 < 20) =                  =
                                                                         20 − 8   12

A probabilidade de os 3 questionários durarem mais que 15 minutos é o produto:

                                                                        5   5   5   125
                         𝑃(𝑋 > 15) × 𝑃(𝑋 > 15) × 𝑃(𝑋 > 15) =              ×   ×   =
                                                                       12 12 12 1728

Portanto, a alternativa a está errada.

Em relação à alternativa b, precisamos calcular a média:

                                                            𝑏 + 𝑎 20 + 8
                                          𝜇 = 𝐸(𝑋) =             =       = 14
                                                              2     2

A probabilidade de uma entrevista durar mais que a média, isto é, 𝑝 = 𝑃(𝑋 > 14), é dada por:

        Receita Federal (Analista Tributário) Estatística                                              79
        www.estrategiaconcursos.com.br                                                                 174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                           20 − 14    6
                             𝑝 = 𝑃(𝑋 > 14) = 𝑃(14 < 𝑋 < 20) =                      =    = 0,5
                                                                            20 − 8   12

A probabilidade de 2 questionários, dentre 3, durarem mais que a média, é dada pela fórmula da distribuição
binomial, em que a probabilidade de sucesso (isto é, de um questionário durar mais que a média) é p = 0,5 e a
probabilidade de fracasso é q = 1 – p = 0,51:

                                        𝐶3,2 × 𝑝2 × 𝑞 = 3 × 0,52 × 0,5 = 0,375

Portanto, a alternativa b está errada.

Em relação à alternativa c, o desvio padrão é dado por:


                                                                (𝑏 − 𝑎)2 𝑏 − 𝑎
                                           𝜎𝑋 = √𝑉(𝑋) = √               =
                                                                   12     √12

                                                       20 − 8       12
                                                𝜎𝑋 =            =         = √12
                                                        √12         √12

Portanto, a alternativa c está errada.

Em relação à alternativa d, a probabilidade de uma entrevista levar menos da metade do tempo máximo,
𝑃(𝑋 < 10) é:

                                                                          10 − 8   2   1
                                  𝑃(𝑋 < 10) = 𝑃(8 < 𝑋 < 10) =                    =   =
                                                                          20 − 8 12 6

A probabilidade de apenas um dos questionários durar menos de 10 minutos, e os demais, mais que 10 minutos,
                                                  5
com probabilidade 𝑃(𝑋 ≥ 10) = 1 − 𝑃(𝑋 < 10) = 6, é:

                                                                                  1 5 5    25
                       𝑃(𝑋 < 10) × 𝑃(𝑋 ≥ 10) × 𝑃(𝑋 ≥ 10) × 𝐶3,2 =                  × × ×3=
                                                                                  6 6 6    72

Portanto, a alternativa d está correta.

Em relação à alternativa e, o tempo total de entrevista (com os 3 questionários) é uma variável com média igual
à mediana, dada por:

                              𝐸(𝑇𝑜𝑡𝑎𝑙) = 𝐸(𝑋1 + 𝑋2 + 𝑋3 ) = 𝐸(𝑋1 ) + 𝐸(𝑋2 ) + 𝐸(𝑋3 )

1 É necessário multiplicar o produto das probabilidades 𝑝 2 × 𝑞 pelo número de maneiras de escolher 2 questionários, dentre 3

(isto é, pela combinação 𝐶3,2). Isso porque o produto 𝑝2 × 𝑞 fornece a probabilidade associada a determinada ordem (por
exemplo, de os 2 primeiros questionários durarem mais e o 3º questionário durar menos que a média).
         Receita Federal (Analista Tributário) Estatística                                                                80
         www.estrategiaconcursos.com.br                                                                                  174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

A média de tempo de cada questionário é a média aritmética entre os limites 8 e 20:

                                                                     8 + 20
                                       𝐸(𝑋1 ) = 𝐸(𝑋2 ) = 𝐸(𝑋3 ) =           = 14
                                                                       2

Logo, a média do tempo total da entrevista é:

                                            𝐸(𝑇𝑜𝑡𝑎𝑙) = 14 + 14 + 14 = 42

Portanto, a probabilidade de o tempo total exceder 42 minutos (não 40 minutos) é igual 0,5.

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                     81
        www.estrategiaconcursos.com.br                                                        174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                            QUESTÕES COMENTADAS – FGV

Exponencial

1.      (FGV/2023 – TRT/18ª Região) Sabe-se que uma variável aleatória X tem distribuição geométrica, ou
seja, P(X = x) = (1 − p)x−1.p com x = 1, 2, 3, ... , com a probabilidade do primeiro sucesso ocorrer em um
experimento igual a 0,50. Uma outra variável aleatória Y, independente de X, tem distribuição exponencial
com um parâmetro 𝜶.
Se as probabilidades P(X > 2) e P(Y > 1) são iguais, então a média de Y é igual a:

Dados: ln(A) representa o logaritmo neperiano de A

a) −ln⁡(0,25)

b) [− ln(0,50)]−1

c) −ln⁡(0,50)

d) [− ln(0,25)]−1

e) [− ln(0,75)]−1

Comentários:
O enunciado informa que X segue distribuição geométrica, assumindo os valores x = 1, 2, 3,... Assim, a
probabilidade 𝑃(𝑋 > 2) é dada por:
                                       𝑃(𝑋 > 2) = 1 − 𝑃(𝑋 = 1) − 𝑃(𝑋 = 2)
Sabendo que a probabilidade de sucesso é 𝑝 = 0,5, essas probabilidades são:
                                                   𝑃(𝑋 = 1) = 𝑝 = 0,5
                                     𝑃(𝑋 = 2) = (1 − 𝑝). 𝑝 = 0,5 × 0,5 = 0,25
Logo:
                                          𝑃(𝑋 > 2) = 1 − 0,5 − 0,25 = 0,25
Ademais, sabemos que Y segue distribuição exponencial, cuja probabilidade 𝑃(𝑌 > 𝑦) é dada por:
                                                    𝑃(𝑌 > 𝑦) = 𝑒 −𝜆𝑦 ⁡
Assim, a probabilidade 𝑃(𝑌 > 1) é:
                                                     𝑃(𝑌 > 1) = 𝑒 −𝜆 ⁡


        Receita Federal (Analista Tributário) Estatística                                              82
        www.estrategiaconcursos.com.br                                                                 174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Sabendo que essa probabilidade é igual a 𝑃(𝑋 > 2) = 0,25, temos:
                                                  𝑃(𝑌 > 1) = 𝑃(𝑋 > 2)
                                                        𝑒 −𝜆 = 0,25
                                                      −𝜆 = ln(0,25)⁡
                                                      𝜆 = − ln(0,25)
                                                                  1
Sabendo que a média da distribuição exponencial é 𝐸(𝑌) = 𝜆, então a média dessa distribuição é:
                                                       1
                                         𝐸(𝑌) =               = [− ln(0,25)]−1
                                                   − ln(0,25)
Gabarito: D


2.     (FGV/2023 – BANESTES) Por saber que há grande procura por imóveis em determinada região, uma
construtora decide comprar um terreno e construir uma casa nesse local. O prazo necessário para realizar a
obra pode ser encarado como uma variável aleatória com distribuição Exponencial. Com base na sua
experiência, a construtora presume que uma obra como essa leva em média 18 meses para ficar pronta.

Admita que a construtora deseja ser capaz de cumprir esse prazo com 80% de probabilidade. Para facilitar
seus cálculos, use - 1,61 como o valor do logaritmo neperiano de 0,2.

O prazo para a entrega das chaves, a partir do início da obra, que deve ser informado aos possíveis
interessados na compra da casa é de

a) 8 meses

b) 12 meses

c) 29 meses

d) 43 meses

e) 60 meses

Comentários:
O enunciado informa que a média da distribuição exponencial é de 18 meses. Sabendo que o parâmetro dessa
distribuição é o inverso da média, temos:
                                                               1
                                                      𝐸(𝑋) =     = 18
                                                               𝜆

        Receita Federal (Analista Tributário) Estatística                                              83
        www.estrategiaconcursos.com.br                                                                 174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                  1
                                                            𝜆=
                                                                 18
Agora, precisamos calcular o prazo 𝑥 para a entrega da obra, que a construtora deve cumprir com probabilidade
de 80%, ou seja:
                                                     𝑃(𝑋 < 𝑥) = 0,8
                                                      1
Sabendo que 𝑃(𝑋 < 𝑥) = 1 − 𝑒 −𝜆𝑥 e que 𝜆 = 18, temos:
                                                                      1
                                              𝑃(𝑋 < 𝑥) = 1 − 𝑒 −18𝑥 = 0,8
                                                             1
                                                          𝑒 −18𝑥 = 0,2
                                                           1
                                                     −       𝑥 = ln(0,2)
                                                          18
                                                    𝑥 = −18 × ln(0,2)
Utilizando o dado do enunciado de que ln(0,2) ≅ −1,61:
                                                𝑥 ≅ −18 × (−1,61) ≅ 29
Gabarito: C


3.      (FGV/2023 – TJ/SE - Adaptada) Quanto à transformação de variáveis aleatórias que seguem uma
distribuição de probabilidade determinada, julgue o item a seguir.
A soma de n variáveis aleatórias independentes e identicamente distribuídas Exponencial com parâmetro λ tem
distribuição Exponencial com parâmetro n*λ.

Comentários:

A soma de variáveis exponenciais independentes não segue uma distribuição exponencial, mas sim uma
distribuição chamada hipoexponencial ou distribuição generalizada de Erlang.

Resposta: Errado

4.      (FGV/2022 – TCE/TO) Suponha que X tenha distribuição exponencial com parâmetro 𝜸 = 𝟎, 𝟐𝟓, ou
seja, a função densidade de probabilidade de X é dada por 𝒇(𝒙) = 𝟎, 𝟐𝟓𝒆−𝟎,𝟐𝟓 , 𝒙 > 𝟎, 𝒇(𝒙) = 𝟎 nos demais
casos. A média de X é então igual a:

a) 1

b) 2


        Receita Federal (Analista Tributário) Estatística                                                 84
        www.estrategiaconcursos.com.br                                                                    174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

c) 3

d) 4

e) 5

Comentários:
A média da distribuição exponencial é o inverso do parâmetro. Sabendo que o parâmetro é 𝜆 = 0,25, então:
                                                                 1   1
                                                      𝐸(𝑋) =       =    =4
                                                                 𝜆 0,25
Gabarito: D


5.      (FGV/2022 – SEMSA/Manaus) Avalie as seguintes afirmativas acerca de uma variável aleatória X com
distribuição exponencial de probabilidades com parâmetro 𝝀 > 𝟎.

I. Se 𝝀 > 𝟏, então 𝑬(𝑿) > 𝑽𝒂𝒓(𝑿).

II. 𝑷[𝑿 > 𝒂 + 𝒃|𝑿 > 𝒂] = 𝑷[𝑿 > 𝒃], 𝒂 > 𝟎, 𝒃 > 𝟎

III. A função de densidade de probabilidade de X é simétrica em torno de sua média.

Está correto o que se afirma em

a) I, apenas

b) I e II, apenas

c) I e III, apenas

d) II e III, apenas

e) I, II e III

Comentários:
Para uma variável com distribuição exponencial, a média e a variância são:
                                                                   1
                                                                𝐸(𝑋) =
                                                                   𝜆
                                                                    1
                                                           𝑉𝑎𝑟(𝑋) = 2
                                                                    𝜆
Sendo 𝜆 > 1, temos 𝐸(𝑋) > 𝑉𝑎𝑟(𝑋). Logo, a afirmativa I está certa.

            Receita Federal (Analista Tributário) Estatística                                              85
            www.estrategiaconcursos.com.br                                                             174

                                            


---

     Equipe Exatas Estratégia Concursos
     Aula 10

A afirmativa II corresponde à propriedade sem memória da distribuição exponencial. Segundo ela, a
probabilidade de o tempo de falha ser maior que 𝑎 + 𝑏, dado que já se passou 𝑎, é igual à probabilidade de o
tempo de falha ser maior que 𝑏. Logo, a afirmativa II está certa.
Em relação à afirmativa III, a função exponencial é decrescente, ou seja, não é simétrica. Logo, a afirmativa III
está errada.
Gabarito: B


6.    (FGV/2022 – TCE/TO) Considere que um processo Poisson esteja ocorrendo no tempo com uma taxa
média de ocorrência igual a 𝒗 e suponha que uma ocorrência tenha acabado de acontecer. Se T é o tempo
necessário até que a próxima ocorrência do processo aconteça, então T tem distribuição:

a) Normal (𝑣1);

b) Normal padrão;

c) Qui-quadrado parâmetro 𝑣;

d) Poisson parâmetro 𝑣𝑡;

e) Exponencial com parâmetro 𝑣.

Comentários:
O tempo entre duas ocorrências de Poisson segue distribuição exponencial, cujo parâmetro é igual ao parâmetro
da distribuição de Poisson.
Gabarito: E

7.        (FGV/2022 – TRT/16ª Região) Se X tem distribuição exponencial com parâmetro 𝝀, ou seja, se 𝒇(𝒙) =
𝝀𝒆−𝝀𝒙 , se 𝒙 > 𝟎, 𝝀 > 𝟎, então a variância de X é igual a

a) 𝜆2

     1
b) 𝜆

     1
c) 𝜆2

     2
d) 𝜆2

e) 𝜆


           Receita Federal (Analista Tributário) Estatística                                                  86
           www.estrategiaconcursos.com.br                                                                     174

                                           


---

     Equipe Exatas Estratégia Concursos
     Aula 10

Comentários:
Para uma variável exponencial X com parâmetro 𝜆, a variância é dada por:
                                                                        1
                                                               𝑉(𝑋) =
                                                                        𝜆2
Gabarito: C

8.        (FGV/2022 – TRT/PB) Considere uma variável aleatória X com função de probabilidade exponencial
com parâmetro   .
Nesse caso, avalie se as seguintes afirmativas são falsas (F) ou verdadeiras (V):

( ) E[ X ] = 1/ e Var[ X ] = 1/ 
( ) Se um processo Poisson está ocorrendo no tempo, então a variável aleatória que mede o tempo entre duas
ocorrências sucessivas tem distribuição exponencial.
( ) A distribuição exponencial não tem memória, ou seja, se X tem distribuição exponencial, e se a e b são
constantes positivas, P[ X > a + b | X > a] = P[ X > b].
As afirmativas são, respectivamente,

a) V, F e V

b) F, V e V

c) F, F e F

d) V, V e F

e) V, V e V

Comentários:
Em relação à primeira afirmativa, a média e a variância de uma distribuição exponencial com parâmetro 𝜃 são,
respectivamente:
                                                                      1
                                                               𝐸(𝑋) =
                                                                      𝜃
                                                                      1
                                                               𝑉(𝑋) = 2
                                                                     𝜃
Assim, a primeira afirmativa é verdadeira.


           Receita Federal (Analista Tributário) Estatística                                             87
           www.estrategiaconcursos.com.br                                                                174

                                           


---

     Equipe Exatas Estratégia Concursos
     Aula 10

Em relação à segunda afirmativa, a distribuição de Poisson e a distribuição exponencial apresentam a seguinte
relação: a distribuição exponencial representa o tempo entre ocorrências sucessivas de uma distribuição de
Poisson. Logo, a segunda afirmativa também é verdadeira.
Em relação à terceira afirmativa, é considerada sem memória, pois não importa o tempo que já se passou, a
probabilidade associada ao futuro é a mesma:
                                              𝑃(𝑋 > 𝑎 + 𝑏|𝑋 > 𝑎) = 𝑃(𝑋 > 𝑏)
Assim, a terceira afirmativa também é verdadeira.
Gabarito: E

9.        (FGV/2022 – TRT/PB) Se os tempos de vida 𝑿𝟏 , 𝑿𝟐 , … , 𝑿𝒏 de 𝒏 bulbos são variáveis aleatórias
independentes e identicamente distribuídas exponencial com parâmetro 𝝀, então a soma 𝑿𝟏 + ⁡ 𝑿𝟐 , + ⋯ +
⁡𝑿𝒏 desses tempos de vida tem distribuição
a) exponencial com parâmetro 𝑛𝜆
b) gama com parâmetros 𝑛 e 𝜆
c) beta com parâmetros 𝑛 e 𝜆
d) Cauchy com parâmetros 𝑛 e 𝜆
e) logística com parâmetros 𝑛 e 𝜆.

Comentários:
A soma de variáveis exponenciais independentes e identicamente distribuídas segue distribuição
hipoexponencial (ou de Erlang), que é um caso particular da distribuição gama.
Os parâmetros da distribuição gama são 𝛼 e 𝛽. A distribuição hipoexponencial, formada pela soma de 𝑛 variáveis
exponenciais com parâmetro 𝜆, é um caso da distribuição gama com 𝛼 = 𝑛 e 𝛽 = 𝜆.

Gabarito: B


10.   (FGV/2021 – FunSaúde/CE) Suponha que carros passem por um posto de observação em uma estrada
remota de acordo com um processo Poisson, com taxa média de ocorrência igual a 2 carros por minuto.

Se um carro acaba de passar por esse posto, o tempo de espera, até que o próximo carro passe pelo posto,
tem distribuição de probabilidades:

a) Cauchy (𝛼 = 1, 𝛽 = 2)

b) Beta (𝛼 = 1, 𝛽 = 2)

           Receita Federal (Analista Tributário) Estatística                                               88
           www.estrategiaconcursos.com.br                                                                  174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

c) Uniforme (0, 2)

d) Exponencial (𝜆 = 2)

e) Normal (𝜇 = 2, 𝜎 2 = 1)

Comentários:
O tempo entre duas ocorrências de Poisson segue distribuição exponencial, cujo parâmetro é igual ao parâmetro
da distribuição de Poisson, no caso, igual a 2.
Gabarito: D

11.     (FGV/2018 – TJ-AL) Suponha que o tempo de espera para a marcação de uma 1a audiência nas varas
de família de um tribunal seja uma variável aleatória que depende do número de novas ações, seguindo uma
distribuição exponencial com média de 2,5 meses.
Então, trabalhando com 𝒆−𝟎,𝟒 = 𝟐⁄𝟑, a probabilidade de que uma 1ª audiência seja marcada para mais do
que 2 meses depois é igual a aproximadamente:

a) 16%

b) 33%

c) 45%

d) 56%

e) 67%

Comentários:

O enunciado informou que o tempo de espera segue distribuição exponencial com média de 2,5 meses:

                                                         1                  1
                                               𝐸(𝑋) =      = 2,5⁡⁡ → ⁡⁡𝜆 =
                                                         𝜆                 2,5

A probabilidade de o tempo de espera superar 2 meses é dada por:

                                                     𝑃(𝑋 > 𝑥) = 𝑒 −𝜆.𝑥
                                                                 2
                                                             −
                                          𝑃(𝑋 > 2) = 𝑒 2,5 = 𝑒 −0,8 = 𝑒 −0,4×2

         Receita Federal (Analista Tributário) Estatística                                                 89
         www.estrategiaconcursos.com.br                                                                    174

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 10

Pela propriedade da função logarítmica, temos (𝑏 𝑎 )𝑐 = 𝑏 𝑎×𝑐 , logo:

                                                                          2 2 4
                                          𝑃(𝑋 > 2) =      (𝑒 −0,4 )2   = ( ) = ≅ 0,45
                                                                          3   9

Gabarito: C

12.    (FGV/2018 – AL-RO) Acerca da soma de variáveis aleatórias, avalie se as afirmativas a seguir, estão
corretas.

I. A soma de n variáveis aleatórias independentes e identicamente distribuídas Bernoulli com parâmetro p,
tem distribuição binomial com parâmetros n e p.
II. A soma de n variáveis aleatórias independentes e identicamente distribuídas Poisson com parâmetro λ tem
distribuição Poisson com parâmetro nλ.

III. A soma de n variáveis aleatórias independentes e identicamente distribuídas exponencial com parâmetro
λ tem distribuição gama com parâmetros n e λ.

Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas.

e) I, II e III.

Comentários:

Em relação à afirmativa I, sabemos que a soma de variáveis independentes com distribuição de Bernoulli com
parâmetro p, segue distribuição binomial com parâmetros n e p. Logo, a afirmativa I está correta.

Em relação à afirmativa II, sabemos que a soma de variáveis independentes com distribuição de Poisson segue
distribuição de Poisson. O parâmetro dessa distribuição equivale à soma dos parâmetros. Logo, a afirmativa II
está correta. Em relação à afirmativa III, vimos que a soma de n variáveis exponenciais independentes com
parâmetro 𝜆 segue distribuição gama com parâmetros 𝛼 = 𝑛 e 𝛽 = 𝜆. Logo, a afirmativa III está correta.

Gabarito: E

            Receita Federal (Analista Tributário) Estatística                                              90
            www.estrategiaconcursos.com.br                                                                 174

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 10

13.    (FGV/2017 – IBGE) Suponha que o tempo de vida útil da lâmpada de um Scanner seja distribuído
exponencialmente com parâmetro 𝜷⁡= 600 horas. Se T representa a durabilidade da lâmpada, é correto
afirmar que:

a) P(T > 600) = 0,50;

b) P(200 < T < 600) = 0,25;

c) P(T > 1500) = 1 – e-2;

d) P(T > 1200 | T > 300) = P(T > 900)

e) P(T < 450) = 1 – e-2/5

Comentários:

A distribuição exponencial é definida como 𝑓(𝑥) = 𝜆𝑒 −𝜆𝑥 . O que o enunciado chamou de parâmetro é a sua
média:

                                                                   1
                                                   𝐸(𝑋) = 𝛽 =        = 600
                                                                   𝜆

Logo:

                                                                   1
                                                             𝜆=
                                                                  600

Em relação à alternativa A, a probabilidade P(T > 600) é dada por:

                                                                        600
                                         𝑃(𝑇 > 600) = 𝑒 −𝜆.600 = 𝑒 −600 = 𝑒 −1

Esse valor é aproximadamente 0,37, logo a alternativa A está incorreta,

Em relação à alternativa B, a probabilidade P(200 < T < 600) é dada por:

                                                                             600   200       1
                   𝑃(200 < 𝑋 < 600) = −𝑒 −𝜆.600 + 𝑒 −𝜆.200 = −𝑒 −600 + 𝑒 −600 = −𝑒 −1 +𝑒 −3

Esse resultado é um pouco maior que 1, logo a alternativa B está incorreta.

Em relação à alternativa C, a probabilidade P(T < 500) é dada por:

                                                                             500         5
                                  𝑃(𝑇 < 500) = 1 − 𝑒 −𝜆.500 = 1 − 𝑒 −600 = 1 − 𝑒 −6

         Receita Federal (Analista Tributário) Estatística                                           91
         www.estrategiaconcursos.com.br                                                              174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Logo, a alternativa C está incorreta.

A alternativa D trabalha com a propriedade de falta de memória da distribuição:

                                                𝑃(𝑇 > 𝑡 + 𝑠|𝑇 > 𝑠) = 𝑃(𝑇 > 𝑡)

Fazendo t = 900 e s = 300, temos:

                                            𝑃(𝑇 > 1200|𝑇 > 300) = 𝑃(𝑇 > 900)

Logo, a alternativa D está correta. Em relação à alternativa E, a probabilidade P(T < 450) é dada por:

                                                                             450     3
                                     𝑃(𝑇 < 450) = 1 − 𝑒 −𝜆.450 = 1 − 𝑒 −600 = 1 − 𝑒 −4

Logo, a alternativa E está incorreta.

Gabarito: D.

14.    (FGV/2015 – TJ-BA) O tempo necessário para apreciação de uma petição pelos magistrados em
determinado tribunal foi tipificado como uma variável aleatória com distribuição exponencial. Sabe-se ainda
que a probabilidade de que uma petição não seja apreciada nos 30 dias após ser encaminhada é de 40%. Se
uma petição já está aguardando despacho há 60 dias, a probabilidade de que seja apreciada antes de
completar 90 dias é igual a:

a) (0,6)3

b) (0,4)1(0,6)2

c) (0,4)2(0,6)1

d) 0,4

e) 0,6

Comentários:

A probabilidade de a petição ser apreciada antes de completar 90 dias é o complementar de ela ser apreciada
não ser apreciada nesse período.

Sabendo que a petição já está aguardando há 60 dias, a probabilidade de ela não ser apreciada em 90 dias pela
propriedade sem memória da distribuição exponencial:


            Receita Federal (Analista Tributário) Estatística                                             92
            www.estrategiaconcursos.com.br                                                                174

                                            


---

   Equipe Exatas Estratégia Concursos
   Aula 10

                                              𝑃(𝑇 > 90|𝑇 > 60) = 𝑃(𝑇 > 30)

O enunciado informa que a probabilidade de a petição não ser apreciada em 30 dias é P(T > 30) = 40% = 0,4.
Assim, a probabilidade de a petição ser apreciada antes de completar 90 dias, sabendo que está aguardando há
60 dias é complementar:

                                                           1 – 0,4 = 0,6

Gabarito: E

15.    (FGV/2015 – TJ-RO) Sabe-se que o tempo de duração de um processo na justiça do trabalho é uma
variável aleatória contínua distribuída exponencialmente, com média de 1200 dias. Se já passaram 900 dias
                                                               ==219a34==

de um processo, a probabilidade de que ele dure mais do que 1500 dias é igual a:
a) e-5/4
b) e-3/4
c) e-1/2
d) 1 – e-2/3
e) 1 – e-1/2

Comentários:

A probabilidade de o processo durar mais do que 1500 dias, sabendo que já se passaram 900 dias, ou seja, de
durar 1500 – 900 = 600 dias a mais, segue a propriedade sem memória da distribuição exponencial:

                                           𝑃(𝑇 > 1500|𝑇 > 900) = 𝑃(𝑇 > 600)

Conhecendo a média da distribuição, E(X) = 1200, podemos calcular o valor de 𝜆:

                                                                            1
                                                       𝐸(𝑋) =                 = 1200
                                                                            𝜆
                                                                              1
                                                               𝜆=
                                                                            1200

A probabilidade de o processo durar mais de 600 dias é, então, dada por:

                                                                                       600   1
                                           𝑃(𝑇 > 600) = 𝑒 −𝜆.600 = 𝑒 −1200 = 𝑒 −2

Gabarito: E

           Receita Federal (Analista Tributário) Estatística                                             93
           www.estrategiaconcursos.com.br                                                                174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

16.     (FGV/2010 – FIOCRUZ) Avalie cada afirmativa a seguir, acerca de soma de variáveis aleatórias:

I. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição Poisson com parâmetro λi, i = 1,
..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição Poisson com parâmetro ∑𝒏𝒊=𝟏 𝝀𝒊 .

II. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição exponencial com parâmetro λ, i
= 1, ..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição gama com parâmetros 1 e nλ.

III. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição Normal com parâmetros µi e
σi2, i = 1, ..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição Normal com parâmetros ∑𝒏𝒊=𝟏 𝝁𝒊 e ∑𝒏𝒊=𝟏 𝝈𝒊 𝟐 .

Assinale:

a) se apenas a afirmativa I estiver correta

b) se apenas as afirmativas I e II estiverem corretas

c) se apenas as afirmativas I e III estiverem corretas

d) se apenas as afirmativas II e III estiverem corretas

e) se as afirmativas I, II e III estiverem corretas

Comentários:

Em relação à afirmativa I, sabemos que a soma de variáveis independentes com distribuição de Poisson segue
distribuição de Poisson. O parâmetro dessa distribuição equivale à soma dos parâmetros. Logo, a afirmativa I
está correta.

Em relação à afirmativa II, vimos que a soma de n variáveis exponenciais independentes com parâmetro 𝜆 segue
distribuição gama com parâmetros 𝛼 = 𝑛 e 𝛽 = 𝜆. Logo, a afirmativa II está incorreta.

Em relação à afirmativa III, vimos que a soma de variáveis normais segue distribuição normal. A média da
distribuição da soma equivale à soma das médias e a variância da distribuição da soma equivale à soma das
variâncias. Logo, a afirmativa III está correta.

Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                                       94
         www.estrategiaconcursos.com.br                                                                         174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                            QUESTÕES COMENTADAS – FGV

Distribuição Normal

1.    (FGV/2023 – Câmara dos Deputados) Se X é uma variável aleatória normalmente distribuída, com
média 50 e variância 100, então a seguinte variável tem distribuição normal padrão:
a) 𝑍 = (𝑋 − 50)/10
b) 𝑍 = (𝑋 − 50)/100
c) 𝑍 = (𝑋 + 50)/10
d) 𝑍 = (𝑋 + 50)/100
e) 𝑍 = 𝑋 − 5
Comentários:
A transformação para a normal padrão é:
                                                                 𝑋−𝜇
                                                            𝑍=
                                                                  𝜎
O enunciado informa que a média é 𝜇 = 50 e que a variância é 𝜎 2 = 100. Logo, o desvio padrão é:

                                                 𝜎 = √𝜎 2 = √100 = 10
Assim, a transformação dessa variável para a normal padrão é:
                                                                 𝑋 − 50
                                                        𝑍=
                                                                   10
Gabarito: A


2.    (FGV/2023 – TCE/ES) A variável aleatória X tem distribuição normal com média 2 e variância 1.
Considere a transformação 𝒀 = 𝟐 × (𝑿 – 𝟐). É correto afirmar que, aproximadamente:
        1          1
a) Pr (− 2 ≤ 𝑌 ≤ 2) = 95%
        1          1
b) Pr (− 2 ≤ 𝑌 ≤ 2) = 68%

c) Pr(−2 ≤ 𝑌 ≤ 2) = 95%
        1          1
d) Pr (− 2 ≤ 𝑌 ≤ 2) = 68%

e) Pr(−√2 ≤ 𝑌 ≤ √2) = 68%


        Receita Federal (Analista Tributário) Estatística                                          95
        www.estrategiaconcursos.com.br                                                             174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Comentários:
Quando multiplicamos e subtraímos constantes a uma variável com distribuição normal, obtemos uma nova
distribuição normal. A média da nova variável pode ser obtida pelas propriedades da esperança:
                                             𝐸(𝑌) = 𝐸(2𝑋 − 4) = 2. 𝐸(𝑋) − 4
Sabendo que 𝐸(𝑋) = 2, então a média de Y é:
                                                    𝐸(𝑌) = 2 × 2 − 4 = 0
Em relação à variância, quando multiplicamos uma variável por uma constante, a variância é multiplicada pelo
quadrado da constante e quando somamos uma constante, a variância não se altera, logo:
                                    𝑉𝑎𝑟(𝑌) = 𝑉(2𝑋 − 4) = 22 . 𝑉𝑎𝑟(𝑋) = 4. 𝑉𝑎𝑟(𝑋)
Sabendo que 𝑉𝑎𝑟(𝑋) = 1, então a variância de Y é:
                                                     𝑉𝑎𝑟(𝑌) = 4 × 1 = 4
E o desvio padrão é a raiz quadrada:

                                                  𝜎𝑌 = √𝑉𝑎𝑟(𝑌) = √4 = 2
Pela Regra Empírica, a probabilidade associada ao intervalo 𝜇 ± 𝜎 é aproximadamente igual a 68%. Sabendo
que a média é 𝜇 = 0 e que o desvio padrão é 𝜎 = 2, temos:
                                                   𝑃(−2 ≤ 𝑌 ≤ 2) ≅ 68%
Gabarito: D


3.      (FGV/2022 – MPE/SC) Um produtor de azeites comercializa seu produto em garrafas cujo conteúdo,
em litros, é uma variável aleatória com distribuição normal com média 𝝁 = 𝟏 litro e variância 𝝈𝟐 = 𝟎, 𝟎𝟐 litro.
A porcentagem de garrafas de azeite que contêm mais de 1 litro é:
a) 10%
b) 20%
c) 30%
d) 50%
e) 100%
Comentários:
Por se tratar de uma distribuição simétrica, para uma distribuição normal, a probabilidade associada aos valores
maiores que a média (no caso, 𝜇 = 1 litro) é de 50%.
Gabarito: D

          Receita Federal (Analista Tributário) Estatística                                                  96
          www.estrategiaconcursos.com.br                                                                     174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

4.      (FGV/2022 – MPE/SC) Considere um processo onde é observada uma variável aleatória X que tem
distribuição Normal com média 4 e desvio padrão 2. Após uma modificação no processo, os valores se
alteraram e a nova variável é Y = 2X + 4.

a) média 8 e variância 8

b) média 12 e variância 4

c) média 12 e variância 8

d) média 12 e variância 16

e) média 12 e variância 20

Comentários:
Quando multiplicamos e somamos constantes a uma variável com distribuição normal, obtemos uma nova
distribuição normal.
A média da nova variável pode ser obtida pelas propriedades da esperança:
                                           𝐸(𝑌) = 𝐸(2𝑋 + 4) = 2. 𝐸(𝑋) + 4
Sabendo que 𝐸(𝑋) = 4, então a média de Y é:
                                                 𝐸(𝑌) = 2 × 4 + 4 = 12
Em relação à variância, quando multiplicamos uma variável por uma constante, a variância é multiplicada pelo
quadrado da constante e quando somamos uma constante, a variância não se altera, logo:
                                      𝑉(𝑌) = 𝑉(2𝑋 + 4) = 22 . 𝑉(𝑋) = 4. 𝑉(𝑋)
Sabendo que a variância é o quadrado do desvio padrão, temos 𝑉(𝑋) = 22 = 4:
                                                   𝑉(𝑌) = 4 × 4 = 16
Gabarito: D


5.     (FGV/2022 – EPE) Acerca de uma variável aleatória X com distribuição normal, com média 𝝁 e variância
 𝟐
𝝈 , avalie as afirmativas a seguir.
I. Se 𝒎 é a mediana de X, então 𝒎 = 𝝁.
II. A probabilidade de que X seja maior do que 𝝁 + 𝟎, 𝟏𝝈 é maior do que 0,5.
III. A variável 𝒁 = (𝑿 − 𝝁)/𝝈 tem distribuição normal com média 0 e variância 1.
Está correto o que se afirma em

        Receita Federal (Analista Tributário) Estatística                                                97
        www.estrategiaconcursos.com.br                                                                   174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

a) I, apenas

b) I e II, apenas

c) I e III, apenas

d) II e III, apenas

e) I, II e III

Comentários:
Vamos analisar as afirmativas em relação à distribuição normal.
Em relação à afirmativa I, por se tratar de uma distribuição simétrica, a média e a mediana são iguais, logo essa
afirmativa está correta.
Em relação à afirmativa II, a probabilidade associada aos valores maiores que a média é de 50%:
                                                          𝑃(𝑋 > 𝜇) = 0,5
Para um valor 𝑣 superior à média, a probabilidade 𝑃(𝑋 > 𝑣) será menor que 50%. Logo, a afirmativa II está
errada.
                                                    𝑋−𝜇
Em relação à afirmativa III, a variável 𝑍 =               corresponde à distribuição normal padrão, cuja média é igual a
                                                      𝜎
zero e variância é igual a 1.
Gabarito: C


6.     (FGV/2022 – TCE/TO) Se X tem distribuição normal com média 𝝁 e variância 𝝈𝟐 , então a seguinte
variável tem distribuição normal padrão:

          (𝑋−𝜇)
a) 𝑍 =       𝜎

          (𝑋−𝜇)2
b) 𝑍 =       𝜎

          (𝑋−𝜇)2
c) 𝑍 =      𝜎2

          (𝑋−𝜇)
d) 𝑍 =      𝜎2

          (𝑋−𝜇)
e) 𝑍 =      2𝜎


Comentários:

            Receita Federal (Analista Tributário) Estatística                                                        98
            www.estrategiaconcursos.com.br                                                                           174

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 10

O enunciado informa que a variável X segue distribuição normal com média 𝜇 e variância 𝜎 2 . O desvio padrão,
raiz quadrada da variância, é √𝜎 2 = 𝜎. No cálculo da transformação para a normal padrão, subtraímos a média
e dividimos pelo desvio padrão:
                                                                (𝑋 − 𝜇)
                                                           𝑍=
                                                                   𝜎
Gabarito: A


7.    (FGV/2022 – CGU) Suponha que o preço de um determinado ativo no tempo t é dado pela seguinte
fórmula 𝒑𝒕 = 𝒑𝟎 𝒆𝒙𝒑(𝝁𝒕 + 𝝈√𝒕𝒁), onde exp é a função exponencial, 𝝁 e 𝝈 são constantes e Z tem distribuição
normal padrão (com média 0 e variância 1).
Para valores 𝒑𝟎 = 𝟏𝟎𝟎, 𝝁 = 𝟎, 𝟏, 𝝈 = 𝟎, 𝟓, e denotando a função de distribuição acumulada padrão por 𝝋, a
probabilidade de 𝒑𝒕 > 𝟓𝟎 para 𝒕 = 𝟏 corresponde a:

             1
         log( )−0,1
             2
a) 𝜑 (                )
            0,5


b) 𝜑(2. log 2 + 0,2)

c) 𝜑(−2. log 2 − 0,2)

         log(2)−0,1
d) 𝜑 (            )
            0,5

             1
         log( )+0,1
             2
e) 𝜑 (                )
            0,5


Comentários:

O enunciado fornece a equação 𝑝𝑡 = 𝑝0 . 𝑒 (𝜇𝑡+𝜎√𝑡𝑍) , sendo 𝑝0 = 100, 𝜇 = 0,1, 𝜎 = 0,5 e 𝑡 = 1, e pede a
probabilidade de 𝑝𝑡 > 50:

                                           𝑃(𝑝𝑡 > 50) = 𝑃(𝑝0 . 𝑒 (𝜇𝑡+𝜎√𝑡𝑍) > 50)

Vamos trabalhar com a expressão à direita. Substituindo os dados fornecidos, temos:

                                        100. 𝑒 (0,1×1+0,5√1𝑍) = 100. 𝑒 (0,1+0,5.𝑍) > 50

Dividindo ambos os lados da inequação por 100:

                                                                           1
                                                         𝑒 (0,1+0,5.𝑍) >
                                                                           2


           Receita Federal (Analista Tributário) Estatística                                              99
           www.estrategiaconcursos.com.br                                                                 174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Aplicando o logaritmo natural em ambos os lados da equação:

                                                                         1
                                                  ln 𝑒 (0,1+0,5.𝑍) > ln ( )
                                                                         2

Pela definição de logaritmo, temos log 𝑏 𝑏 𝑎 = 𝑎, portanto:

                                                                      1
                                                   0,1 + 0,5. 𝑍 > ln ( )
                                                                      2

Isolando Z (variável normal padrão), temos:

                                                    1
                                                ln (2) − 0,1            1
                                          𝑍>                   = 2. ln ( ) − 0,2
                                                     0,5                2

Considerando a propriedade logarítmica, de que o logaritmo do quociente corresponde à diferença entre os
                𝑎
logaritmos, log 𝑏 = log 𝑎 − log 𝑏, e sabendo que o logaritmo de 1 é igual a 0, temos:

                                                  1
                                              ln ( ) = ln 1 − ln 2 = − ln 2
                                                  2

Logo, a expressão de Z pode ser descrita como:

                                                    𝑍 > −2. ln 2 − 0,2

Recapitulando a equação inicial, temos:

                                         𝑃(𝑝𝑡 > 50) = 𝑃(𝑍 > −2. ln 2 − 0,2)

A probabilidade 𝑃(𝑍 > 2. ln 2 − 0,2) é o que a questão pede, mas precisamos escrevê-la utilizando a função de
distribuição acumulada da normal padrão, ou seja, precisamos que representá-la como 𝑃(𝑍 <? ).

Pela simetria da normal padrão, a probabilidade de a variável ser maior do que um número negativo -z é igual à
probabilidade de ser menor que z, conforme ilustrado a seguir:
                                                      𝑃(𝑍 > 𝑧)

                                                    −𝑧                𝑧
                                                            𝑃(𝑍 > −𝑧)

        Receita Federal (Analista Tributário) Estatística                                                 100
        www.estrategiaconcursos.com.br                                                                    174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Logo:

                              𝑃(𝑝𝑡 > 50) = 𝑃(𝑍 > −2. ln 2 − 0,2) = 𝑃(𝑍 < 2. ln 2 + 0,2)

Chamando a função de distribuição acumulada da normal padrão P(Z < z) = 𝜑, temos:

                                  𝑃(𝑝𝑡 > 50) = 𝑃(𝑍 < 2. ln 2 + 0,2) = 𝜑(2. ln 2 + 0,2)

Gabarito: B

8.     (FGV/2021 – FunSaúde/CE) Se uma variável aleatória X tem distribuição normal com média 15 e
variância 4, então P[X > 20] é, aproximadamente, igual a

a) 0,2%;

b) 0,6%;

c) 0,9%;

d) 1,4%;

e) 1,8%.

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.
Comentários:

O primeiro passo é utilizar a fórmula da transformação para x = 20, sabendo que a média é 𝜇 = 15 e a variância
é 𝜎 2 = 4 (ou seja, o desvio padrão, raiz quadrada da variância, é 𝜎 = √4 = 2):

                                                       𝑥 − 𝜇 20 − 15
                                                 𝑧=         =        = 2,5
                                                         𝜎      2

Ou seja:

                                                      P(X > 20) = P(Z > 2,5)

Pela tabela normal padrão, observamos que P(Z < 2,5) = 0,9938. Logo, o seu complemento á:

                                   P(Z > 2,5) = 1 - P(Z < 2,5) = 1 - 0,9938 = 0,0062 ≅ 0,6%

Gabarito: B

           Receita Federal (Analista Tributário) Estatística                                               101
           www.estrategiaconcursos.com.br                                                                  174

                                           


---

   Equipe Exatas Estratégia Concursos
   Aula 10

9.     (FGV/2021 – FunSaúde/CE) Se X tem distribuição normal com média μ e desvio padrão σ, avalie se as
afirmativas a seguir estão corretas:
I. A função de densidade de probabilidade de X é simétrica em relação a μ.
II. P[μ–2 < X < μ+2] ≅ 0,95.
III. P[X > μ–3] ≅ 1.
Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas

e) I, II e III.

Comentários:

Essa questão pede as propriedades de uma distribuição normal com média 𝜇 e desvio padrão 𝜎. A afirmativa I
diz que a distribuição é simétrica em torno da média, o que é verdade para qualquer distribuição normal. Logo,
a afirmativa I está correta.

A afirmativa II diz que a probabilidade de a variável se distanciar da média em até 2 unidades é de
aproximadamente 95%:

                                                     P[μ–2 < X < μ+2] ≅ 0,95

Na verdade, pela regra empírica, temos que a probabilidade de a variável se distanciar da média em até 2 desvios
padrão é de aproximadamente 95%:

                                                 P[μ – 2.𝜎 < X < μ + 2.𝜎] ≅ 0,95

Logo, a afirmativa II é falsa.

A afirmativa II diz que é a probabilidade de a variável ser maior que μ – 3 é aproximadamente igual a 1, ou seja,
praticamente não há valores menores que μ – 3.

No entanto, a verdade é que a probabilidade de a variável ser maior que μ – 3.𝜎 é aproximadamente igual a 1.
Logo, a afirmativa III também é falsa.

Gabarito: A


            Receita Federal (Analista Tributário) Estatística                                                102
            www.estrategiaconcursos.com.br                                                                   174

                                            


---

   Equipe Exatas Estratégia Concursos
   Aula 10

10.    (FGV/2018 – SEFIN/RO) Uma variável aleatória X tem distribuição normal com média μ e variância σ2.
Nesse caso, avalie se as afirmativas a seguir são falsas (F) ou verdadeiras (V).
                (𝑿−𝝁)
I. A variável           tem distribuição normal padrão.
                 𝝈𝟐

II. Se x é um número real, P[X > x] = 1 - P[X < -x].
III. P[X > μ] = 0,5.
Na ordem apresentada, as afirmativas são, respectivamente,

a) V - F - V.

b) V - F - F.

c) F - V - F.

d) F - F - V.

e) F - F - F.

Comentários:

Essa questão pede as propriedades de uma distribuição normal com média 𝜇 e variância 𝜎 2 .

                                                                                 𝑋−𝜇          𝑋−𝜇
Em relação à afirmativa I, a transformação para a normal padrão é                      ; e não 𝜎2 , como indicado. Logo, a
                                                                                  𝜎
afirmativa I é falsa.

Em relação à afirmativa II, para qualquer distribuição, podemos afirmar que (probabilidade complementar):

                                                     P[X > x] = 1 - P[X < x]

Para uma distribuição normal, sabemos que a distribuição é simétrica em torno da média, então podemos
afirmar que:

                                                   P[X > 𝜇 + x] = P[X < 𝜇 - x]

Que é bem diferente da equação indicada na afirmativa. Vale ressaltar que, mesmo se a média fosse igual a 0
(como é o caso da distribuição normal padrão), teríamos:

                                                      P[X > x] = P[X < -x]

Que também é diferente do que a alternativa indicou. Assim, concluímos que a afirmativa II é falsa.

          Receita Federal (Analista Tributário) Estatística                                                            103
          www.estrategiaconcursos.com.br                                                                               174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Em relação à afirmativa III, como a distribuição normal é simétrica em torno da média, então, de fato, 50% da
distribuição é maior do que a média: P[X > μ] = 0,5. Logo, a afirmativa III é verdadeira.

Gabarito: D

11.    (FGV/2018 – TJ-AL) Os volumes com que são preenchidos os frascos de perfume produzidos por certa
marca são normalmente distribuídos com média 100 mL e desvio padrão de 2 mL. Frascos que apresentam
menos de 95 mL ou mais de 105 mL de perfume são considerados fora dos limites e inadequados pelo controle
de qualidade. A porcentagem de frascos produzidos com volume considerado inadequado é igual a

a) 0,64%;

b) 1,24%;

c) 2,05%;

d) 2,48%;

e) 2,96%.

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.
Comentários:

Essa questão trabalha com uma distribuição normal, com média 𝜇 = 100 e desvio padrão é 𝜎 = 2.

A probabilidade de um frasco ter menos de 95mL ou mais de 105mL corresponde à seguinte região:

                                                 95         100   105


Considerando os dados fornecidos, a transformação para a curva normal para x = 105 é:

                                               𝑥 − 𝜇 105 − 100 5
                                          𝑧=        =         = = 2,5
                                                 𝜎       2     2


        Receita Federal (Analista Tributário) Estatística                                                 104
        www.estrategiaconcursos.com.br                                                                    174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Pela simetria da curva normal, o valor x = 95 corresponde a z = -2,5.

Pelos dados da tabela normal padrão fornecida, temos P(Z < 2,5) = 0,9938. Assim, P(Z > 2,5), que corresponde à
probabilidade de o frasco ter mais de 105mL, é complementar:

                          𝑃(𝑍 > 2,5) = 1 − 𝑃(𝑍 < 2,5) = 1 − 0,9938 = 0,0062 = 0,62%

                                              𝑃(𝑋 > 105) = 0,0062 = 0,62%

Pela simetria da curva normal, temos:

                                           𝑃(𝑍 < −2,5) = 𝑃(𝑍 > 2,5) = 0,62%

                                                     𝑃(𝑋 < 95) = 0,62%

Assim, a probabilidade de o frasco ter menos de 95mL ou mais de 105mL é a soma:

                𝑃(𝑋 < 95 𝑜𝑢 𝑋 > 105) = 𝑃(𝑋 < 95) + 𝑃(𝑋 > 105) = 0,62% + 0,62% = 1,24%

Gabarito: B

12.    (FGV/2017 – MPE/BA) O tempo para a tramitação de certo tipo de procedimento aberto pelo
Ministério Público, em um dado instante, é uma variável aleatória com distribuição normal, tendo média igual
de 10 meses e desvio-padrão de 3 meses. Um novo grupo de procuradores, recém-chegados à instituição,
deve cuidar de alguns procedimentos, que serão sorteados dentre os que já têm mais de 7 meses de duração.
Sobre a função acumulada da normal são dados os valores: Ø(1) = 0,80 , Ø(1,5) = 0,92 e Ø(2,0) = 0,98
Com tais informações, a probabilidade de que um procedimento com mais de 16 meses seja selecionado é
igual a:

a) 2,0%

b) 2,5%

c) 5,0%

d) 8,0%

e) 10,0%

Comentários:

          Receita Federal (Analista Tributário) Estatística                                                105
          www.estrategiaconcursos.com.br                                                                   174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

A questão pede a probabilidade de o procedimento ter mais de 16 meses, sabendo que foi selecionado dentre
os processos com mais de 7 meses (probabilidade condicional), dada por:

                                                             𝑃(𝑋 > 16 ∩ 𝑋 > 7)
                                       𝑃(𝑋 > 16|𝑋 > 7) =
                                                                 𝑃(𝑋 > 7)

Considerando que um processo que tem mais de 16 meses terá, necessariamente, mais de 7 meses, então
𝑃(𝑋 > 16 ∩ 𝑋 > 7) = 𝑃(𝑋 > 16), logo:

                                                                  𝑃(𝑋 > 16)
                                            𝑃(𝑋 > 16|𝑋 > 7) =
                                                                  𝑃(𝑋 > 7)

Essas probabilidades podem ser calculadas, considerando a informação de que o tempo de tramitação segue
distribuição normal com média 𝜇 = 10 meses e desvio padrão 𝜎 = 3 meses. A probabilidade P(X > 16) pode ser
calculada pela seguinte transformação:

                                                  𝑥 − 𝜇 16 − 10 6
                                             𝑧=        =       = =2
                                                    𝜎      3    3

O enunciado informa que P(Z < 2) = 0,98. Logo, a probabilidade P(Z > 2) é complementar:

                                   𝑃(𝑍 > 2) = 1 − 𝑃(𝑍 < 2) = 1 − 0,98 = 0,02

E a probabilidade P(X > 7) pode ser calculada pela seguinte transformação:

                                                 𝑥 − 𝜇 7 − 10 −3
                                            𝑧=        =      =   = −1
                                                   𝜎     3     3

O enunciado informa que P(Z < 1) = 0,8. Logo, pela simetria da normal padrão, temos:

                                             𝑃(𝑍 > −1) = 𝑃(𝑍 < 1) = 0,8

Substituindo esses resultados na probabilidade condicional, temos:

                                                        𝑃(𝑋 > 16) 0,02    1
                               𝑃(𝑋 > 16|𝑋 > 7) =                 =     =    = 2,5%
                                                        𝑃(𝑋 > 7)   0,8   40

Gabarito: B

13.     (FGV/2017 – IBGE) Suponha que certa característica de uma dada população tem suas medidas
distribuídas normalmente com média 40 e variância igual a 25. Um indivíduo deverá ser extraído ao acaso e
sua característica observada.

        Receita Federal (Analista Tributário) Estatística                                                  106
        www.estrategiaconcursos.com.br                                                                     174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Considere também as seguintes informações: ɸ(1,9) = 0,971, ɸ(1,6) = 0,945, ɸ(1,25) = 0,895 e ɸ(2,1) = 0,982
onde ɸ(.) = função distribuição acumulada da normal-padrão.
A probabilidade de o valor sorteado diferir por mais de vinte por cento da média verdadeira é:

a) 3,6%;

b) 5,5%;

c) 10,5%;

d) 11%;

e) 21%.

Comentários:

Essa questão trabalha com uma distribuição normal, com média 𝜇 = 40 e variância 𝜎 2 = 25, logo o desvio
padrão é 𝜎 = √𝜎 2 = √25 = 5. A probabilidade de o valor sorteado diferir em mais de 20% da média, ou seja,
em mais de 0,2 × 40 = 8, corresponde às seguintes regiões:

                                                    32         40    48


Considerando os dados fornecidos no enunciado, a transformação para a curva normal para x = 48 é:

                                                    𝑥 − 𝜇 48 − 40 8
                                               𝑧=        =       = = 1,6
                                                      𝜎      5    5

Pela simetria da curva normal, o valor x = 32 corresponde a z = -1,6.

Pelos dados da normal padrão fornecidos, temos ɸ(1,6) = P(Z < 1,6) = 0,945. Assim, P(Z > 1,6), que corresponde
à probabilidade de o valor sorteado ser maior que 48, é complementar:

                              𝑃(𝑍 > 1,6) = 1 − 𝑃(𝑍 < 1,6) = 1 − 0,945 = 0,055 = 5,5%

                                                 𝑃(𝑋 > 48) = 0,055 = 5,5%

           Receita Federal (Analista Tributário) Estatística                                               107
           www.estrategiaconcursos.com.br                                                                  174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Pela simetria da curva normal, temos:

                                            𝑃(𝑍 < −1,6) = 𝑃(𝑍 > 1,6) = 5,5%

                                                      𝑃(𝑋 < 32) = 5,5%

Assim, a probabilidade de o valor diferir da média em mais de 20% é a soma:

                     𝑃(𝑋 < 32 𝑜𝑢 𝑋 > 48) = 𝑃(𝑋 < 32) + 𝑃(𝑋 > 48) = 5,5% + 5,5% = 11%

Gabarito: D

14.     (FGV/2016 – IBGE) Sabe-se que as notas de uma prova têm distribuição Normal com média μ = 6,5 e
variância σ2 = 4 . Adicionalmente, são conhecidos alguns valores tabulados da normal-padrão. Φ(1,3 ) ≅ 0,90
Φ(1,65) ≅ 0,95 Φ(1,95 ) ≅ 0,975 Onde, Φ(z) é a função distribuição acumulada da Normal Padrão.
Considerando-se que apenas os 10% que atinjam as maiores notas serão aprovados, a nota mínima para
aprovação é:

a) 9,10;

b) 9,30;

c) 9,50;

d) 9,70;

e) 0,13

Comentários:

Considerando que 10% dos alunos são aprovados, então o complementar, isto é, 90% obtêm notas inferiores à
nota de aprovação.

Pelas informações da normal padrão fornecidas, podemos observar que a nota de corte está associada a z = 1,3,
pois 𝑃(𝑍 ≤ 1,3) ≅ 0,90.

Sendo a variância 𝜎 2 = 4, o desvio padrão é 𝜎 = √𝜎 2 = 2.

Sendo a média 𝜇 = 6,5, a transformação para a normal é:

                                                                    𝑥−𝜇
                                                               𝑧=
                                                                     𝜎


           Receita Federal (Analista Tributário) Estatística                                              108
           www.estrategiaconcursos.com.br                                                                 174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                  𝑥 − 6,5
                                                          1,3 =
                                                                     2

                                            𝑥 = 1,3 × 2 + 6,5 = 2,6 + 6,5 = 9,1

Gabarito: A

15.     (FGV/2016 – IBGE) A distribuição das alturas dos indivíduos de uma população é aproximadamente
Normal, com média 1,70 m e variância 0,01. Adicionalmente, não havendo, na população, pessoas com alturas
inferiores a 1,50 m nem superiores a 1,90 m, essa distribuição é truncada nos extremos.
São fornecidas também as seguintes informações: ɸ (1)≅ 0,84 e ɸ (2) ≅ 0,98, ɸ (z) = função distribuição
acumulada da Normal Padrão.
Então a probabilidade de que um indivíduo da população, sorteado ao acaso, tenha altura entre 1,60 m e 1,80
m é:

   23
a) (24);

    21
b) (24);

   21
c) (23);

    17
d) (24);

    17
e) (23);

Comentários:

O enunciado informa que a altura de indivíduos segue distribuição aproximadamente normal, com média 𝜇 =
1,70 e variância 𝜎 2 = 0,01. Assim, o desvio padrão é:

                                                   𝜎 = √𝜎 2 = √0,01 = 0,1

O enunciado pede a probabilidade de sortear um indivíduo com altura entre 1,60 e 1,80. A transformação para
a Normal Padrão de x = 1,80 é:

                                                      𝑥 − 𝜇 1,80 − 1,70
                                                𝑧=         =            =1
                                                        𝜎       0,1

           Receita Federal (Analista Tributário) Estatística                                            109
           www.estrategiaconcursos.com.br                                                               174

                                           


---

     Equipe Exatas Estratégia Concursos
     Aula 10

Como 1,60 está equidistante em relação à média, temos z = -1. Logo, a probabilidade associada ao intervalo
P(1,60 < X < 1,80) corresponde à probabilidade P(-1 < Z < 1). Sabendo que P(Z < 1) = 0,84 (dado fornecido),
temos:

                                             𝑃(𝑍 < 1) = 𝑃(𝑍 < 0) + 𝑃(0 < 𝑍 < 1)

                                                    0,84 = 0,5 + 𝑃(0 < 𝑍 < 1)

                                                        𝑃(0 < 𝑍 < 1) = 0,34

Logo, a probabilidade P(-1 < Z < 1) é o dobro: 𝑃(−1 < 𝑍 < 1) = 2 × 𝑃(0 < 𝑍 < 1) = 2 × 0,34 = 0,68

Se tivéssemos uma distribuição perfeitamente normal, já teríamos a resposta buscada. Porém, o enunciado
informa que a distribuição é truncada nos extremos, pois não há indivíduos com mais de 1,90 ou menos de 1,50.
Isso significa que toda a distribuição (100%) está contida no intervalo (1,50; 1,90).

Na normal padrão, x = 1,90 está associado à seguinte transformação:

                                                        𝑥 − 𝜇 1,90 − 1,70
                                                   𝑧=        =            =2
                                                          𝜎       0,1

Como 1,50 está equidistante em relação à média, temos z = -2. Ou seja, 100% da distribuição está concentrada
no intervalo -2 < Z < 2. Sabendo que P(Z < 2) = 0,98 (dado fornecido), temos:

                                             𝑃(𝑍 < 2) = 𝑃(𝑍 < 0) + 𝑃(0 < 𝑍 < 2)

                                                    0,98 = 0,5 + 𝑃(0 < 𝑍 < 2)

                                                        𝑃(0 < 𝑍 < 2) = 0,48

Logo, a probabilidade P(-2 < Z < 2) é o dobro: 𝑃(−2 < 𝑍 < 2) = 2 × 𝑃(0 < 𝑍 < 2) = 2 × 0,48 = 0,96

Então, a probabilidade associada ao intervalo 1,60 < X < 1,80 é1:

1
    Para entender a lógica por trás da divisão, você pode pensar em regra de 3:
                                                                0,68 → 𝑥
                                                                0,96 → 1
Ou, pode considerar que se trata de uma probabilidade condicional: deseja-se obter a probabilidade associada ao intervalo (1,60;1,80),
sabendo que o indivíduo tem altura no intervalo (1,50;1,90):
                                                                           𝑃(1,60 < 𝑋 < 1,80) 0,68
                                 𝑃(1,60 < 𝑋 < 1,80|1,50 < 𝑋 < 1,90) =                        =
                                                                           𝑃(1,50 < 𝑋 < 1,90) 0,98


            Receita Federal (Analista Tributário) Estatística                                                                     110
            www.estrategiaconcursos.com.br                                                                                        174

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                                 0,68 17
                                                         𝑃=          =
                                                                 0,96 24

Gabarito: D.

16.    (FGV/2016 – IBGE) Sabe-se que as notas de uma prova têm distribuição Normal com média μ = 6,5 e
variância σ2 = 4 . Adicionalmente, são conhecidos alguns valores tabulados da normal-padrão.
ɸ(1,3) ≅ 0,90, ɸ(1,65) ≅ 0,95 e ɸ(1,95) ≅ 0,975 onde ɸ(z) é a função distribuição acumulada da Normal
Padrão.
Considerando-se que apenas os 10% que atinjam as maiores notas serão aprovados, a nota mínima para
aprovação é:

a) 9,10;

b) 9,30;

c) 9,50;

d) 9,70;

e) 9,80.

Comentários:

Essa questão trabalha com uma distribuição normal, com média 𝜇 = 6,5 e variância 𝜎 2 = 4, logo o desvio
padrão é 𝜎 = √𝜎 2 = √4 = 2. O enunciado informa ainda que apenas 10% das melhores notas são dos alunos
aprovados, conforme ilustrado a seguir, em que NC representa a nota de corte:

                                                                              10%

                                                               𝜇 = 6,5   NC

           Receita Federal (Analista Tributário) Estatística                                          111
           www.estrategiaconcursos.com.br                                                             174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Considerando que 10% da distribuição está acima do valor buscado, precisamos do valor de z tal que P(Z < z) =
90% = 0,90. Pelos dados da tabela normal padrão fornecidos, observamos que z = 1,3. Assim, temos a seguinte
transformação:

                                                                 𝑥−𝜇
                                                            𝑧=
                                                                  𝜎

                                                                 𝑁𝐶 − 6,5
                                                      1,3 =
                                                                    2

                                        𝑁𝐶 = 2 × 1,3 + 6,5 = 2,6 + 6,5 = 9,1

Gabarito: A

17.    (FGV/2015 – TCM-SP) Uma cuidadosa pesquisa de preços sobre os custos da construção civil, mais
especificamente para a edificação de certos tipos de infraestruturas públicas, demonstrou que o valor por
metro quadrado tem distribuição próxima da Normal com média de R$1.600 e variância 14.400. São
fornecidos também valores da distribuição normal padrão e respectivas probabilidades, conforme abaixo:

Suponha que, para fins de fiscalização, o Tribunal de Contas do Município de São Paulo tenha convencionado
que, dentre todas as obras, as 10% mais caras deveriam passar por um exame ainda mais detalhado.

Então, isso significa que o critério estabelecido determina, estatisticamente, que uma obra deverá receber
um tratamento mais rigoroso quando o custo por metro quadrado for superior a:

a) R$ 1,403,20;

b) R$ 1.446,40;

c) R$ 1.753,60;

d) R$ 1.796,80;

e) R$ 1.835,20.

Comentários:

Observe que a questão apresenta valores de P(|Z| > z). Ou seja, valores para o seguinte intervalo de valores da
curva normal padrão:

        Receita Federal (Analista Tributário) Estatística                                                   112
        www.estrategiaconcursos.com.br                                                                      174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                   P(|Z| > z) = P(Z < -z ou Z > z) = P(Z < -z) + P(Z > z)

                                      𝑃(𝑍 < −𝑧)                               𝑃(𝑍 > 𝑧)

                                                    −𝑧                    𝑧
O enunciado informa que 10% das obras mais caras devem receber tratamento mais rigoroso. Ou seja,
precisamos do valor associado à probabilidade:

                                                         P(Z > z) = 10%

Pela simetria da curva normal, temos:

                                                       P(Z < -z) = 10%

Então, devemos buscar na tabela o valor de z associado à seguinte probabilidade:

                                  P(|Z| > z) = P(Z < -z) + P(Z > z) = 10% + 10% = 20%

Pela tabela, observamos que esse valor é z = 1,28.

O enunciado informa, ainda, que a variância da distribuição é 𝜎 2 = 14.400. Logo, o desvio padrão é:

                                               𝜎 = √𝜎 2 = √14400 = 120

Considerando que a média é 𝜇 = 1600, conforme enunciado, então o valor de x buscado é:

                                                                 𝑥−𝜇
                                                            𝑧=
                                                                  𝜎
                                                                 𝑥 − 1600
                                                     1,28 =
                                                                   120

                              𝑥 = 120 × 1,28 + 1600 = 153,60 + 1600 = 1753,60

Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                              113
        www.estrategiaconcursos.com.br                                                                 174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

18.  (FGV/2015 – TJ-BA) Sejam Y e W variáveis aleatórias independentes, ambas com distribuição normal,
com médias μy = 2 e μW = 4 e com variâncias dadas por 𝝈𝟐 y = 9 e 𝝈𝟐 W = 16

a) P(Y > 4) > P(W < 2);

b) P(Y < -4) = P(W < -4);

c) P(|Y| < 2) > P(|W| > 4);

d) P(2Y – W > -1) < 0,5;

e) P(Y + W < 6) < 0,5 e P(W – Y > 3) > 0,5.

Comentários:

O enunciado informa as variâncias das distribuições: 𝜎 2 y = 9 e 𝜎 2 W = 16. Os desvios-padrão são, portanto:


                                                      𝜎𝑦 = √𝜎𝑦2 = 3


                                                      𝜎𝑤 = √𝜎𝑤2 = 4

O enunciado informa, ainda, que as médias são μy = 2 e μW = 4. Em relação à alternativa A, o valor de y = 4 está
associado ao seguinte valor de z da normal padrão:

                                                      𝑦−𝜇 4−2 2
                                                 𝑧=      =   =
                                                       𝜎   3   3

Logo:

                                                                      2
                                                     P(Y > 4) = P(Z > 3)

E o valor de w = 2 está associado ao seguinte valor de z da normal padrão:

                                                 𝑤 − 𝜇 2 − 4 −2    1
                                            𝑧=        =     =   =−
                                                   𝜎     4    4    2

Logo:

                                                                          1
                                                   P(W < 2) = P(Z < − 2)

Pela simetria da normal padrão, temos:

                                                                      1
                                                    P(W < 2) = P(Z > 2)


        Receita Federal (Analista Tributário) Estatística                                                       114
        www.estrategiaconcursos.com.br                                                                          174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

       2     1            2                                          1
Como 3 > 2 (ou seja, 3 está mais distante da média do que 2), então:

                                                               2         1
                                                        P(Z > 3) < P(Z > 2)

Ou seja, P(Y > 4) < P(W < 2). Logo, a alternativa A está incorreta.

Em relação à alternativa B, o valor de y = -4 está associado ao seguinte valor de z da normal padrão:

                                                   𝑦 − 𝜇 −4 − 2 −6
                                              𝑧=        =      =   = −2
                                                     𝜎     3     3

Logo, P(Y < -4) = P(Z < -2).

E o valor de w = -4 está associado ao seguinte valor de z da normal padrão:

                                                   𝑤 − 𝜇 −4 − 4 −8
                                              𝑧=        =      =   = −2
                                                     𝜎     4     4

Logo, P(W < -4) = P(Z < -2).

Ou seja:

                                                       P(Y < -4) = P(W < -4)

Portanto, a alternativa B está correta, mas vejamos as demais alternativas.

Em relação à alternativa C, a probabilidade P(|Y| < 2) corresponde ao seguinte intervalo:

                                                    P(|Y| < 2) = P(-2 < Y < 2)

O valor de y = 2 corresponde ao seguinte valor de z da curva normal padrão:

                                                         𝑦−𝜇 2−2
                                                    𝑧=      =    =0
                                                          𝜎   3

E o valor de y = -2 corresponde ao seguinte valor de z:

                                                       𝑦 − 𝜇 −2 − 2    4
                                                  𝑧=        =       =−
                                                         𝜎     3       3

Logo, a probabilidade P(|Y| < 2) corresponde ao seguinte intervalo da normal padrão:

                                                                               4
                                           P(|Y| < 2) = P(-2 < Y < 2) = P(− 3 < Z < 0)

           Receita Federal (Analista Tributário) Estatística                                            115
           www.estrategiaconcursos.com.br                                                               174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Esse intervalo corresponde à seguinte região:

                                         4
                                     𝑃 (− < 𝑍 < 0)
                                         3

                                                        4
                                                    −
                                                        3   0


Já, a probabilidade P(|W| > 2) corresponde ao seguinte intervalo:

                               P(|W| > 4) = P(W < -4 ou W > 4) = P(W < -4) + P(W > 4)

O valor de w = 4 está associado ao seguinte valor de z da normal padrão:

                                                        𝑤−𝜇 4−4
                                                  𝑧=       =    =0
                                                         𝜎   4

E o valor de w = -4 está associado ao seguinte valor de z:

                                                    𝑤 − 𝜇 −4 − 4
                                               𝑧=        =       = −2
                                                      𝜎     4

Logo, a probabilidade P(|W| > 2) corresponde ao seguinte intervalo da normal padrão:

                               P(|W| > 4) = P(W < -4) + P(W > 4) = P(Z < -2) + P (Z > 0)

Esse intervalo corresponde à seguinte região:

                                                                  𝑃(𝑍 > 0) = 0,5

                                      𝑃(𝑍 < −2)

                                                  −2        0


Ou seja, enquanto P(|Y| < 2) é menor que 0,5, P(|W| > 4) é maior que 0,5, logo:


        Receita Federal (Analista Tributário) Estatística                                  116
        www.estrategiaconcursos.com.br                                                     174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                  P(|Y| > 2) < P(|W| > 4)

Em relação à alternativa D, a distribuição 2Y – W apresenta a seguinte média, conforme propriedades da
esperança:

                                                E(2Y – W) = 2.E(Y) – E(W)

Sendo E(Y) = 2 e E(W) = 4, conforme o enunciado:

                                                 E(2Y – W) = 2 x 2 – 4 = 0

E, sabendo que as variáveis são independentes, então a distribuição 2Y – W apresenta a seguinte variância,
conforme propriedades da variância:

                                       V(2Y – W) = V(2Y) – V(W) = 4V(Y) – V(W)

Sendo V(Y) = 9 e V(W) = 16, conforme enunciado, então:

                                               V(2Y – W) = 4 x 9 – 16 = 20

O desvio padrão, então, é 𝜎 = √20. Sendo 𝜇 = 0 e 𝜎 = √20, o valor de x = -1 está associado ao seguinte valor
de z da curva normal padrão:

                                                   𝑥−𝜇     1
                                              𝑧=       =−     ≅ −0,22
                                                    𝜎     √20

Logo, P(2Y – W > -1) = P(Z > -0,22). Essa probabilidade é maior que 0,5. Logo, a alternativa D está incorreta.

Em relação à alternativa E, a distribuição Y + W apresenta a seguinte média:

                                            E(Y + W) = E(Y) + E(W) = 2 + 4 = 6

Logo, o valor de x = 6 está associado ao valor de z = 0. Ou seja:

                                               P(Y + W < 6) = P(Z < 0) = 0,5

Portanto, a primeira parte da alternativa está incorreta. Em relação à segunda parte, a distribuição W – Y
apresenta a seguinte média e variância:

                                            E(W – Y) = E(W) – E(Y) = 4 – 2 = 2

                                          V(W – Y) = V(W) + V(Y) = 9 + 16 = 25

        Receita Federal (Analista Tributário) Estatística                                                        117
        www.estrategiaconcursos.com.br                                                                           174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Logo, o desvio padrão é 𝜎 = √25 = 5. Então, para 𝜇 = 2 e 𝜎 = 5, o valor de x = 3 está associado ao seguinte
valor de z da normal padrão:

                                                        𝑥−𝜇 3−2
                                                   𝑧=      =    = 0,2
                                                         𝜎   5

Ou seja:

                                                 P(W – Y > 3) = P(Z > 0,2) < 0,5

Logo, a alternativa E está incorreta.

Gabarito: B

                                                               ==219a34==

19.    (FGV/2014 – Prefeitura de Recife) Uma variável aleatória X é normalmente distribuída com média 12
e variância 4. A probabilidade de que X seja maior do que 10 é igual a

a) 0,3085

b) 0,3587

c) 0,6915

d) 0,8413

e) 0,9772

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.

Comentários:

A probabilidade desejada pode ser obtida pela seguinte transformação entre a distribuição normal e a
distribuição normal padrão:

                                                                            𝑥−𝜇
                                                               𝑧=
                                                                             𝜎

O enunciado informa que a média é 𝜇 = 12 e a variância é 𝜎 2 = 4.

Logo, o desvio padrão é:

                                                      𝜎 = √𝜎 2 = √4 = 2

           Receita Federal (Analista Tributário) Estatística                                            118
           www.estrategiaconcursos.com.br                                                               174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Assim, a transformação para 𝑥 = 10 é:

                                                     10 − 12 −2
                                                𝑧=          =   = −1
                                                        2     2

Logo, a probabilidade P(X > 10) equivale à probabilidade P(Z > -1). Pela simetria da Normal Padrão, sabemos que
essa probabilidade equivale a:

                                                 𝑃(𝑍 > −1) = 𝑃(𝑍 < 1)

Pela tabela fornecida, observamos que P(Z < 1) = 0,8413.

Gabarito: D

20.    (FGV/2010 – FIOCRUZ) Suponha uma variável aleatória X normalmente distribuída com média 100 e
variância 25. A probabilidade de que X seja maior do que 110 é igual a

a) 2,28%

b) 4,56%

c) 34,46%

d) 47,72%

e) 97,72%

Utilize a tabela normal padrão apresentada ao final.

Comentários:

A probabilidade desejada pode ser obtida pela seguinte transformação entre a distribuição normal e a
distribuição normal padrão:

                                                                 𝑥−𝜇
                                                            𝑧=
                                                                  𝜎

O enunciado informa que a média é 𝜇 = 100 e a variância é 𝜎 2 = 25. Logo, o desvio padrão é:

                                                   𝜎 = √𝜎 2 = √25 = 5

Assim, a transformação para 𝑥 = 110 é:

        Receita Federal (Analista Tributário) Estatística                                                  119
        www.estrategiaconcursos.com.br                                                                     174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                     110 − 100 10
                                                𝑧=            =   =2
                                                         5      5

Logo, a probabilidade P(X > 110) equivale à probabilidade P(Z > 2), que pode ser calculada como:

                                                   P(Z > 2) = 1 – P(Z < 2)

Pela tabela, observamos que P(Z < 2) = 0,9772, logo:

                                       P(Z > 2) = 0,5 – 0,4772 = 0,0228 = 2,28%

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                          120
        www.estrategiaconcursos.com.br                                                             174

                                        


---

Equipe Exatas Estratégia Concursos
Aula 10

      Receita Federal (Analista Tributário) Estatística                    121
      www.estrategiaconcursos.com.br                                       174

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                            QUESTÕES COMENTADAS – FGV

Soma de Variáveis e o Teorema Central do Limite

1.    (FGV/2023 – TCE/ES) Sabe-se que a taxa de acerto em chutes de fora da área de uma certa distância é
de 50%. Uma amostra de 100 chutes de fora da área da mesma distância do gol é observada.

A probabilidade de observar entre 35 e 65 chutes certos é, aproximadamente:

a) menor que 95%

b) igual a 99,7%

c) menor que 0,1%

d) Igual a 95%

e) menor que 0,3%

Comentários:

A distribuição que representa o número de acertos é a distribuição binomial. No entanto, como a amostra é
grande, podemos aproximá-la à distribuição normal (Teorema Central do Limite), cuja média e variância são
dadas por:
                                                       𝐸(𝑋) = 𝑛 × 𝑝
                                                   𝑉𝑎𝑟(𝑋) = 𝑛 × 𝑝 × 𝑞
Sabendo que a probabilidade de acerto é 𝑝 = 0,5 (logo, a probabilidade de erro é 𝑞 = 1 − 𝑝 = 0,5) e que o
tamanho da amostra é 𝑛 = 100, temos:
                                                 𝐸(𝑋) = 100 × 0,5 = 50
                                            𝑉𝑎𝑟(𝑋) = 100 × 0,5 × 0,5 = 25

E o desvio padrão é 𝜎𝑋 = √𝑉𝑎𝑟(𝑋) = 5.
Assim, a transformação para 𝑥 = 35 é:
                                               𝑥 − 𝜇 35 − 50    15
                                          𝑧=        =        =−    = −3
                                                 𝜎      5        5
Como 𝑥 = 60 está à mesma distância da média, esse valor está associado a 𝑧 = 3. Portanto, a probabilidade
desejada corresponde a:
                                          𝑃(35 < 𝑋 < 60) = 𝑃(−3 < 𝑍 < 3)


        Receita Federal (Analista Tributário) Estatística                                             122
        www.estrategiaconcursos.com.br                                                                174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

Pela regra empírica, sabemos que 97,7% da distribuição se concentra entre a média e 3 desvios padrão, para
baixo ou para cima.
Gabarito: B

2.      (FGV/2022 – PC/AM) Em relação à distribuição Normal, assinale V para a afirmativa verdadeira e F
para a falsa.

( ) Se X segue uma distribuição Normal, então a média é igual à mediana e igual à moda.

( ) Quando o tamanho da amostra é grande, a distribuição normal serve como aproximação da distribuição
binomial.

( ) Quanto menor a variância, mais achatada é a função densidade de probabilidade da distribuição Normal.

As afirmativas são, respectivamente,

a) V - V - V
b) V - V - F
c) V - F - V
d) F - V - V
e) F - V - F

Comentários:

Em relação à primeira afirmativa, a distribuição Normal é simétrica e, portanto, a sua média é igual à mediana e
à moda. Logo, a primeira afirmativa é verdadeira.

Em relação à segunda afirmativa, a distribuição Binomial realmente pode ser aproximada à Normal, pelo
Teorema Central do Limite, para um grande número n de ensaios. Logo, a segunda afirmativa também é
verdadeira.

Em relação à terceira afirmativa, quanto menor a variância, mais concentrados em torno da média estará a
distribuição. Logo, ela será mais afunilada, e não mais achatada. Logo, a terceira afirmativa é falsa.

Gabarito: B

          Receita Federal (Analista Tributário) Estatística                                                  123
          www.estrategiaconcursos.com.br                                                                     174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

3.     (FGV/2022 – TRT-PB) Se uma moeda honesta for lançada 2.025 vezes, sabemos que esperam-se 1.012,5
“caras”. A probabilidade de que o número observado de “caras”, em 2.025 lançamentos, não seja menor do
que 1.000 nem maior do que 1.025 é aproximadamente igual a

a) 0,24.
b) 0,29.
c) 0,42.
d) 0,58.
e) 0,71.

Para essa questão, utilize a tabela apresentada ao final desta seção, fornecida na prova.

Comentários:

Para resolver essa questão, consideramos a aproximação da distribuição binomial à normal, uma vez que não é
viável calcular a probabilidade desejada de maneira exata.
A média da distribuição binomial com 𝑛 = 2025 e 𝑝 = 0,5 é, como o próprio enunciado afirma:
                                        𝜇 = 𝐸(𝑋) = 𝑛 × 𝑝 = 2025 × 0,5 = 1012,5
Sendo 𝑞 = 1 − 𝑝 = 0,5, a variância é o produto:
                                           𝑉(𝑋) = 𝑛 × 𝑝 × 𝑞 = 2025 × 0,5 × 0,5
Para calcular o desvio padrão, vale observar que 2025 é o quadrado de 45:

                                     𝜎𝑋 = √𝑉(𝑋) = √452 × 0,52 = 45 × 0,5 = 22,5
Para calcular a probabilidade 𝑃(1000 ≤ 𝑋 ≤ 1025) pode ser calculada utilizando a transformação para a
normal padrão. Para 𝑥 = 1025, temos:
                                             𝑥 − 𝜇 1025 − 1012,5 12,5
                                        𝑧=        =             =      ≅ 0,55
                                               𝜎       22,5       22,5
Sabendo que a diferença entre 𝑥 = 1000 e a média é a mesma, mas com sinal contrário, então a probabilidade
desejada corresponde à seguinte probabilidade da normal padrão:
                 𝑃(1000 ≤ 𝑋 ≤ 1025) ≅ 𝑃(−0,55 ≤ 𝑍 ≤ 0,55) = 𝑃(𝑍 ≤ 0,55) − 𝑃(𝑍 ≤ −0,55)
Pela simetria da normal padrão, temos:
                                    𝑃(𝑍 ≤ −0,55) = 𝑃(𝑍 ≥ 0,55) = 1 − 𝑃(𝑍 ≤ 0,55)
E a probabilidade desejada pode ser calculada como:
                𝑃(−0,55 ≤ 𝑍 ≤ 0,55) = 𝑃(𝑍 ≤ 0,55) − [1 − 𝑃(𝑍 ≤ 0,55)] = 2 × 𝑃(𝑍 ≤ 0,55) − 1

           Receita Federal (Analista Tributário) Estatística                                            124
           www.estrategiaconcursos.com.br                                                               174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Pela tabela da normal padrão acumulada, observamos que 𝑃(𝑍 ≤ 0,55) = 0,7088 ≅ 0,71, logo:
                            𝑃(−0,55 ≤ 𝑍 ≤ 0,55) = 2 × 0,71 − 1 = 1,42 − 1 = 0,42
Gabarito: C

4.     (FGV/2022 – SEFAZ/ES) Três jogadores participam de um experimento que consiste, em cada um, girar
uma roleta n vezes. A roleta sorteia um número uniformemente distribuído entre 0 e 6. Cada rodada é
independente e ganha um prêmio, quem obtiver soma dos números selecionados entre 90 e 144. Os
indivíduos x, y e z decidem rodar a roleta 27, 40 e 75 números, respectivamente.

Utilizando a aproximação para a distribuição normal, a comparação das probabilidades de ganho mostra que

a) Indivíduo y > Indivíduo x > Indivíduo z.

b) Indivíduo x > Indivíduo y > Indivíduo z.

c) Indivíduo z > Indivíduo x > Indivíduo y.

d) Indivíduo y > Indivíduo z > Indivíduo x.

e) Indivíduo x > Indivíduo z > Indivíduo y.

Comentários:

Pelo Teorema Central do Limite, a soma de n variáveis independentes identicamente distribuídas Xi, cada uma
com média E(X) e variância V(X), é uma variável Y, com distribuição aproximadamente normal, com média e
variância dadas por:

                                                        E(Y) = n.E(X)

                                                        V(Y) = n.V(X)

Vamos primeiro calcular a esperança. Considerando que cada rodada tem distribuição uniforme no intervalo
{0,6], a esperança (ou média) de cada rodada é:

                                                            0+6
                                                      𝜇=        =3
                                                             2

Portanto, a esperança para cada jogador é:

                                                  𝐸(𝑋) = 27 × 3 = 81

                                                  𝐸(𝑌) = 40 × 3 = 120


        Receita Federal (Analista Tributário) Estatística                                               125
        www.estrategiaconcursos.com.br                                                                  174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                                     𝐸(𝑍) = 75 × 3 = 225

Por esses valores, podemos imaginar que Y tem mais chances de ganhar, pois a sua média está dentro do
intervalo buscado, seguida de X e depois de Z, uma vez que a média de X está mais próxima do intervalo do que
a de Z. Mas vamos calcular as probabilidades exatas.

Para isso, vamos primeiro calcular a variância de cada rodada (que segue distribuição uniforme):

                                                   (𝑏 − 𝑎)2 (6 − 0)2 36
                                            𝜎2 =           =        =    =3
                                                      12       12     12

Portanto, a variância para cada jogador é:

                                                     𝑉(𝑋) = 27 × 3 = 81

                                                     𝑉(𝑌) = 40 × 3 = 120

                                                     𝑉(𝑍) = 75 × 3 = 225

Utilizando a aproximação à distribuição normal, a transformação para os valores 90 e 144 para X é:

                                                          90 − 81            9
                                                     𝑧=                  =     =1
                                                               √81           9

                                                         144 − 81            63
                                                    𝑧=                   =      =7
                                                               √81            9

Ou seja:

                                      P(90 < X < 144) = P(1 < Z < 7) = P(Z < 7) - P(Z < 1)

A probabilidade de Z ser menor que 7 é praticamente 100%. Pela tabela da normal padrão, temos P(0 < Z < 1) =
0,34, logo:

                                     P(Z < 1) = P(Z < 0) + P(0 < Z < 1) = 0,5 + 0,34 = 0,84

                                      P(1 < Z < 7) = P(Z < 7) - P(Z < 1) = 1 - 0,84 = 0,16

Essa é a probabilidade de X ganhar. Agora, fazemos o mesmo com Y. A transformação para 90 e 144 é:

                                                      90 − 120           −30
                                                𝑧=                   ≅       ≅ −2,7
                                                        √120             11

                                                       144 − 120             24
                                                  𝑧=                     ≅      ≅ 2,2
                                                          √120               11


           Receita Federal (Analista Tributário) Estatística                                              126
           www.estrategiaconcursos.com.br                                                                 174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                               P(90 < Y < 144) = P(-2,7 < Z < 2,2) = P(Z < 2,2) - P(Z < -2,7)

Pela tabela normal padrão, temos P(0< Z < 2,2) = 0,486, logo:

                               P(Z < 2,2) = P(Z < 0) + P(0 < Z < 2,2) = 0,5 + 0,486 = 0,986

E P(0 < Z < 2,7) = 0,497, logo:

                                P(Z > 2,7) = P(Z > 0) - P(0 < Z < 2,7) = 0,5 - 0,497 = 0,003

Pela simetria da normal padrão, temos P(Z < -2,7) = P(Z > 2,7), logo:

                           P(-2,7 < Z < 2,2) = P(Z < 2,2) - P(Z < -2,7) = 0,986 - 0,003 = 0,983

Essa é a probabilidade de Y ganhar. Agora, fazemos o mesmo com Z. Para não confundir com a normal padrão,
vamos chamar o jogador de Z'. A transformação para 90 e 144 é:

                                                    90 − 225       −135
                                               𝑧=              =        = −9
                                                      √225          15

                                                   144 − 225       −81
                                             𝑧=                =       = −5,4
                                                      √225         15

                                P(90 < Z' < 144) = P(-9 < Z < -5,4) = P(Z < -5,4) - P(Z < -9)

As duas probabilidades são ínfimas, então podemos dizer que a probabilidade de Z ganhar é praticamente nula.

Com isso, confirmamos que a probabilidade de Y ganhar é maior do que a de X, que é maior do que a de Z.

Gabarito: A

5.      (FGV/2018 – TJ-AL) Suponha que as penas previstas para punição por corrupção e lavagem de dinheiro,
a serem aplicadas a um ex-chefe do executivo, são em média iguais a 12 anos. Registros passados indicam
que, em geral, a variância é de 24 anos ao quadrado, com igual distribuição e independentes umas das outras.
Considere φ(1,25) ≅ 0,9 φ(1,5) ≅ 0,95 φ(2) ≅ 0,975 e φ(2,25) ≅ 0,99 onde φ(z) é a função acumulada da
N(0,1). Se o réu, que será julgado em 6 processos, for condenado em todos, a probabilidade de que a sua pena
exceda 45 anos é:

a) 75%

b) 90%

c) 95%


         Receita Federal (Analista Tributário) Estatística                                                 127
         www.estrategiaconcursos.com.br                                                                    174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

d) 97,5%

e) 99%

Comentários:

Pelo Teorema Central do Limite, a soma de n variáveis independentes identicamente distribuídas Xi, cada uma
com média E(X) e variância V(X), é uma variável Y, com distribuição aproximadamente normal, com média e
variância dadas por:

                                                         E(Y) = n.E(X)

                                                         V(Y) = n.V(X)

Sendo E(X) = 12, V(X) = 24 e n = 6 então:

                                             𝐸(𝑌) = 𝑛. 𝐸(𝑋) = 6 × 12 = 72

                                            𝑉(𝑌) = 𝑛. 𝑉(𝑋) = 6 × 24 = 144

O desvio padrão de Y é, portanto 𝜎𝑌 = √𝑉(𝑌) = √144 = 12.

Assim, a probabilidade 𝑃(𝑌 > 45) pode ser calculada pela seguinte transformação:

                                              𝑦 − 𝜇 45 − 72 −27
                                         𝑧=        =       =    = −2,25
                                                𝜎     12     12

Logo, a probabilidade de a pena exceder 45 anos corresponde à probabilidade P(Z > -2,25). Pela simetria da
curva normal, temos:

                                    𝑃(𝑍 > −2,25) = 𝑃(𝑍 < 2,25) = 0,99 = 99%

Gabarito: E.

6.      (FGV/2018 – AL-RO) Uma loja recebe em média 100 clientes por dia com um desvio padrão de 10
clientes. A probabilidade de que, em um período de 100 dias, essa loja receba menos de 9.800 clientes é,
aproximadamente, igual a

a) 0;

b) 0,006;

c) 0,145;


         Receita Federal (Analista Tributário) Estatística                                              128
         www.estrategiaconcursos.com.br                                                                 174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

d) 0,0228;

e) 0,0485.

Para resolver essa questão, utilize a tabela normal apresentada ao final, fornecida na prova.

Comentários:

Essa questão também trabalha com o Teorema Central do Limite, pois o enunciado informa apenas os
parâmetros da distribuição (média e desvio padrão), sem informar que tipo de distribuição. No entanto, a
questão pede a probabilidade associada a um período n = 100 dias. Essa distribuição é aproximadamente uma
normal, segundo o Teorema Central do Limite, com média e variância dadas por:

               𝐸(𝑌) = 𝐸(𝑋1 + 𝑋2 + ⋯ + 𝑋100 ) = 𝐸(𝑋1 ) + 𝐸(𝑋2 ) + ⋯ + 𝐸(𝑋100 ) = 100. 𝐸(𝑋)

               𝑉(𝑌) = 𝑉(𝑋1 + 𝑋2 + ⋯ + 𝑋100 ) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) + ⋯ + 𝑉(𝑋100 ) = 100. 𝑉(𝑋)

O enunciado informa que a média por dia é E(X) = 100 e que o desvio padrão é 𝜎𝑋 = 10, logo a variância é
𝑉(𝑋) = (𝜎𝑋 )2 = 102 = 100:

                                              𝐸(𝑌) = 100 × 100 = 10.000

                                              𝑉(𝑌) = 100 × 100 = 10.000

Logo, o desvio padrão da distribuição Y (referente ao período de 100 dias) é:

                                            𝜎𝑌 = √𝑉(𝑌) = √10.000 = 100

Portanto, temos a seguinte transformação da normal padrão para y = 9.800:

                                         𝑦 − 𝜇𝑦 9.800 − 10.000 −200
                                    𝑧=         =              =     = −2
                                           𝜎𝑦        100        100

Pela tabela normal padrão, observamos que P(Z < 2) = 0,9772. Pela simetria da curva, temos:

                                        P(Z < -2)                     P(Z > 2)

                                                    -2      0     2

        Receita Federal (Analista Tributário) Estatística                                             129
        www.estrategiaconcursos.com.br                                                                174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                       𝑃(𝑍 < −2) = 𝑃(𝑍 > 2) = 1 − 𝑃(𝑍 < 2) = 1 − 0,9772 = 0,0228

Gabarito: D

7.    (FGV/2018 – TJ-AL) Suponha que a tramitação de um processo tem 16 etapas. Cada uma delas tem
uma duração aleatória, com distribuição exponencial de parâmetro β = 2 semanas.

Logo, fazendo uso do Teorema do Limite Central e sendo Φ(1)≅ 0,75, Φ(1,2)≅ 0,90 , Φ(1,5)≅0,95 e Φ(2)≅
0,975, a probabilidade de um processo do referido tipo desviar da média por:

a) mais do que 6 semanas é de 50%;

b) mais do que 8 semanas é de 20%;

c) mais do que 12 semanas é de 10%;

d) mais do que 16 semanas é de 2%;

e) menos do que 12 semanas é de 80%;

Comentários:

O enunciado forneceu a média da distribuição exponencial:

                                                                1
                                                       𝐸(𝑋) =     =2
                                                                𝜆
                                                             1
                                                        𝜆=     = 0,5
                                                             2

Com esse parâmetro, podemos calcular a variância da distribuição:

                                                       1   1     1
                                             𝑉(𝑋) =      =    =     =4
                                                       𝜆2 0,52 0,25

Pelo Teorema Central do Limite, a soma de n variáveis independentes identicamente distribuídas Xi, cada uma
com média E(X) e variância V(X), é uma variável Y, com distribuição aproximadamente normal, com média e
variância dadas por:

                                                        E(Y) = n.E(X)

                                                        V(Y) = n.V(X)

        Receita Federal (Analista Tributário) Estatística                                               130
        www.estrategiaconcursos.com.br                                                                  174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Sendo E(X) = 2, V(X) = 4 e n = 16 então:

                                            𝐸(𝑌) = 𝑛. 𝐸(𝑋) = 16 × 2 = 32

                                            𝑉(𝑌) = 𝑛. 𝑉(𝑋) = 16 × 4 = 64

O desvio padrão de Y é, portanto:

                                                𝜎𝑌 = √𝑉(𝑌) = √64 = 8

Em relação à alternativa A, a probabilidade de o processo desviar da média em mais de 𝑦 − 𝜇 = 6 semanas pode
ser calculada pela seguinte transformação:

                                                       𝑦−𝜇 6
                                                  𝑧=      = = 0,75
                                                        𝜎  8

Logo, a probabilidade de o processo desviar da média em mais de 6 semanas, acima ou abaixo da média,
corresponde à probabilidade:

                                   𝑃(𝑍 < −0,75 ∪ 𝑍 > 0,75) = 2 × 𝑃(𝑍 > 0,75)

O enunciado informou que P(Z < 1) = 0,75, logo a probabilidade P(Z > 1) é complementar:

                                                 P(Z > 1) = 1 – 0,75 = 0,25

Logo:

                                𝑃(𝑍 < −1 ∪ 𝑍 > 1) = 2 × 𝑃(𝑍 > 1) = 0,5 = 50%

Como 0,75 é menor que 1, ou seja, 0,75 está mais próximo da média da distribuição, então:

                                          𝑃(𝑍 < −0,75 ∪ 𝑍 > 0,75) > 50%

Assim, a alternativa A está incorreta.

Em relação à alternativa B, a probabilidade de o processo desviar da média em mais de 𝑦 − 𝜇 = 8 semanas pode
ser calculada pela seguinte transformação:

                                                            𝑦−𝜇 8
                                                    𝑧=         = =1
                                                             𝜎  8

Logo, a probabilidade de o processo desviar da média em mais de 8 semanas, acima ou abaixo da média,
corresponde à seguinte probabilidade, que acabamos de calcular:

                                𝑃(𝑍 < −1 ∪ 𝑍 > 1) = 2 × 𝑃(𝑍 > 1) = 0,5 = 50%


        Receita Federal (Analista Tributário) Estatística                                                131
        www.estrategiaconcursos.com.br                                                                   174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Logo, a alternativa B está incorreta.

Em relação à alternativa C, a probabilidade de o processo desviar da média em menos de 𝑦 − 𝜇 = 12 semanas
pode ser calculada pela seguinte transformação:

                                                       𝑦 − 𝜇 12
                                                  𝑧=        =   = 1,5
                                                         𝜎    8

Logo, a probabilidade de o processo desviar da média em mais de 12 semanas, acima ou abaixo da média,
corresponde à probabilidade:

                                      𝑃(𝑍 < −1,5 ∪ 𝑍 > 1,5) = 2 × 𝑃(𝑍 > 1,5)

O enunciado informou que P(Z < 1,5) = 0,95, logo a probabilidade 𝑃(𝑍 > 1,5) é complementar:

                                  𝑃(𝑍 > 1,5) = 1 − 𝑃(𝑍 < 1,5) = 1 − 0,95 = 0,5

Logo:

                                 𝑃(𝑍 < −1,5 ∪ 𝑍 > 1,5) = 2 × 0,5 = 0,10 = 10%

Logo, a alternativa C está correta.

Em relação à alternativa E, a probabilidade de o processo desviar da média em menos que 12 semanas é
complementar, ou seja, de 90%. Logo, a alternativa E está incorreta.

Em relação à alternativa D, a probabilidade de o processo desviar da média em mais de 𝑦 − 𝜇 = 16 semanas
pode ser calculada pela seguinte transformação:

                                                        𝑦 − 𝜇 16
                                                   𝑧=        =   =2
                                                          𝜎    8

Logo, a probabilidade de o processo desviar da média em mais de 16 semanas, acima ou abaixo da média,
corresponde à probabilidade:

                                         𝑃(𝑍 < −2 ∪ 𝑍 > 2) = 2 × 𝑃(𝑍 > 2)

O enunciado informou que P(Z < 2) = 0,975, logo a probabilidade P(Z > 2) é complementar:

                                               P(Z > 2) = 1 – 0,975 = 0,025

Logo:

                                𝑃(𝑍 < −2 ∪ 𝑍 > 2) = 2 × 𝑃(𝑍 > 2) = 0,05 = 5%

        Receita Federal (Analista Tributário) Estatística                                             132
        www.estrategiaconcursos.com.br                                                                174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Assim, a alternativa D está incorreta.

Gabarito: C

8.      (FGV/2015 – TJ-BA) Sejam X1,X2,X3,...X25 variáveis aleatórias independentes e identicamente
distribuídas, com E (Xi) = 4 e (Vi) = 9

Sobre a variável Y = X1 + X2 + X3 + ... + X25 e usando a tabela da normal-padrão acima é correto afirmar que:

a) 𝑃(𝑌 > 122,5) ≅ 10,75%                                    ==219a34==

b) 𝑃(𝑌 ≤ 70,6) ≅ 5,25%

c) 𝑃(80,8 < 𝑌 < 119,2) ≅ 75,25%

d) 𝑃(𝑌 ≥ 134,95) ≅ 2,00%

e) 𝑃(75,25 ≤ 𝑌 < 133,75) ≅ 93,75%

Comentários:

Pelo Teorema Central do Limite, a soma de n variáveis independentes identicamente distribuídas Xi, cada uma
com média E(X) e variância V(X), é uma variável Y, com distribuição aproximadamente normal, com média e
variância dadas por:

                                                        E(Y) = n.E(X)

                                                        V(Y) = n.V(X)

Sendo E(X) = 4, V(X) = 9 e n = 25 então:

                                           𝐸(𝑌) = 𝑛. 𝐸(𝑋) = 25 × 4 = 100

                                           𝑉(𝑌) = 𝑛. 𝑉(𝑋) = 25 × 9 = 175

O desvio padrão de Y é, portanto:

                                        𝜎𝑌 = √𝑉(𝑌) = √25 × 9 = 5 × 3 = 15

        Receita Federal (Analista Tributário) Estatística                                                   133
        www.estrategiaconcursos.com.br                                                                      174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

É importante lembrar que para variáveis contínuas, não importa se usamos o sinal > ou ≥, pois a probabilidade
de ser igual a determinado valor é zero.

Em relação à alternativa A, a probabilidade 𝑃(𝑌 > 122,5) pode ser calculada pela seguinte transformação:

                                            𝑦 − 𝜇 122,5 − 100 22,5
                                       𝑧=        =           =     = 1,5
                                              𝜎       15       15

Esse valor é maior que 1,28 e menor que 1,65, cujas probabilidades foram fornecidas pela tabela. Podemos
observar que P(|Z| > 1,65) = 10% o que equivale a:

                     P(|Z| > 1,65) = P(Z < -1,65 ou Z > 1,65) = P(Z < -1,65) + P(Z > 1,65) = 10%

Pela simetria da curva normal padrão, temos P(Z < -1,65) = P(Z > 1,65), logo:

                                                   2 x P(Z > 1,65) = 10%

                                                      P(Z > 1,65) = 5%

Utilizando o mesmo raciocínio para P(|Z| > 1,28), temos:

                                          P(|Z| > 1,28) = 2 x P(Z > 1,28) = 20%

                                                     P(Z > 1,28) = 10%

Portanto, P(Z > 1,5) = P(Y > 122,5) é superior a 5% e inferior a 10%, não podendo ser igual 10,75%. Logo, a
alternativa A está errada.

Em relação à alternativa B, a probabilidade 𝑃(𝑌 ≤ 70,6) pode ser calculada pela seguinte transformação:

                                          𝑦 − 𝜇 70,6 − 100 −29,4
                                     𝑧=        =          =      = −1,96
                                            𝜎       15      15

Pela tabela, observamos que P(|Z| > 1,96) = 5% o que equivale a:

                          P(|Z| > 1,96) = P(Z < -1,96) + P(Z > 1,96) = 2 x P(Z < -1,96) = 5%

                                                    P(Z < -1,96) = 2,5%

Logo, a alternativa B está errada.

Em relação à alternativa C, o valor de 𝑃(80,8 < 𝑌 < 119,2) pode ser calculado a partir das seguintes
transformações:

        Receita Federal (Analista Tributário) Estatística                                                  134
        www.estrategiaconcursos.com.br                                                                     174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                            𝑦 − 𝜇 119,2 − 100 19,2
                                      𝑧=         =           =     = 1,28
                                              𝜎       15       15
                                          𝑦 − 𝜇 80,8 − 100 −19,2
                                     𝑧=        =          =      = −1,28
                                            𝜎       15      15

Pela tabela, observamos que P(|Z| > 1,28) = 20%, o que equivale a:

                                     P(|Z| > 1,28) = P(Z < -1,28 ou Z > 1,28) = 20%

Logo, o complementar é:

                             P(1,28 < Z < 1,28) = 100% – P(Z < -1,28 ou Z > 1,28) = 80%

Portanto, a alternativa C está errada.

Em relação à alternativa D, o valor de 𝑃(𝑌 ≥ 134,95) pode ser calculado pela seguinte transformação para a
normal padrão:

                                          𝑦 − 𝜇 134,95 − 100 34,95
                                     𝑧=        =            =      = 2,33
                                            𝜎        15       15

Pela tabela, observamos que P(|Z| > 2,33) = 2%, o que equivale a:

                           P(|Z| > 2,33) = P(Z < -2,33) + P(Z > 2,33) = 2 x P(Z > 2,33) = 2%

                                                      P(Z > 2,33) = 1%

Logo, a alternativa D está errada.

Em relação à alternativa E, o valor de 𝑃(75,25 ≤ 𝑌 < 133,75) pode ser calculado a partir das seguintes
transformações:

                                         𝑦 − 𝜇 75,25 − 100 −24,75
                                   𝑧=         =           =       = −1,65
                                           𝜎       15        15

                                          𝑦 − 𝜇 133,75 − 100 33,75
                                     𝑧=        =            =      = 2,25
                                            𝜎        15       15

Pela tabela, observamos que P(|Z| > 1,65) = 10%, o que equivale a:

                          P(|Z| > 1,65) = P(Z < -1,65) + P(Z > 1,65) = 2 x P(Z < -1,65) = 10%

                                                     P(Z < -1,65) = 5%

        Receita Federal (Analista Tributário) Estatística                                              135
        www.estrategiaconcursos.com.br                                                                 174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

Também observamos que P(|Z| > 2,25) = 2,5%, o que equivale a:

                          P(|Z| > 2,25) = P(Z< - 2,25) + P(Z > 2,25) = 2 x P(Z > 2,25) = 2,5%

                                                    P(Z > 2,25) = 1,25%

Somando essas duas probabilidades, temos:

                    P(Z < -1,65) + P(Z > 2,25) = P(Z < -1,65 ou Z > 2,25) = 5% + 1,25% = 6,25%

O complementar dessa probabilidade é:

                                     P(-1,65 < Z < 2,25) = 100% - 6,25% = 93,75%

Logo, a probabilidade 𝑃(75,25 ≤ 𝑌 < 133,75) = 93,75%.

Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                        136
        www.estrategiaconcursos.com.br                                                           174

                                        


---

Equipe Exatas Estratégia Concursos
Aula 10

      Receita Federal (Analista Tributário) Estatística                    137
      www.estrategiaconcursos.com.br                                       174

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 10

                                     QUESTÕES COMENTADAS – FGV

Qui-quadrado, t-Student, F-Snedecor

1.      (FGV/2018 – AL/RO) Se X e Y são variáveis aleatórias independentes e identicamente distribuídas N(0,
1), então X/Y tem distribuição

a) N(0,1)

b) N(0,4)

c) Cauchy (0,1)

d) Qui-quadrado com 1 grau de liberdade

e) Qui-quadrado com 2 graus de liberdade

Comentários:

A razão entre duas variáveis com distribuição normal segue uma distribuição de Cauchy.

Gabarito: C

2.      (FGV/2018 – TJ-AL) Sejam X1, X2 ..., X5 variáveis aleatórias independentes, todas normalmente
distribuídas com média zero e variância unitária. Então, é correto afirmar que:

a) ∑ 𝑋𝑖 também tem distribuição normal padrão;

b) ∑ 𝑋𝑖 2 é uma distribuição qui-quadrado com 4 graus de liberdade;

          2.𝑋1
c)               1   é uma t-Student com 5 graus de liberdade;
     (∑ 𝑋𝑖 2 ) ⁄2


d) (3𝑋5 − 2𝑋2 ) é normal com média zero e variância 13;

     𝑋
c) 𝑋 4 tem distribuição F-Snedecor com 2 graus de liberdade
      5


Comentários:

                 Receita Federal (Analista Tributário) Estatística                                       138
                 www.estrategiaconcursos.com.br                                                          174

                                                 


---

  Equipe Exatas Estratégia Concursos
  Aula 10

O enunciado informa que X1, X2 ..., X5 são variáveis normais com média zero e variância unitária: N(0,1), ou seja,
são variáveis normais padrão.

Em relação à alternativa A, a soma de variáveis normais independentes segue distribuição normal com média e
variância equivalente à soma, respectivamente, das médias e das variâncias. Sendo Y = X1 + X2 +...+ X5, temos:

                                                  𝐸(𝑌) = 5 × 𝐸(𝑋) = 0

                                                  𝑉(𝑌) = 5 × 𝑉(𝑋) = 5

Logo, a variável Y não segue a normal padrão e a alternativa A está incorreta.

Em relação à alternativa B, a soma de k variáveis normais padrão independentes elevadas ao quadrada segue
distribuição qui-quadrado com k graus de liberdade:

                                                𝒳𝑘2 = 𝑍12 + 𝑍22 + ⋯ + 𝑍𝑘2

Logo, sendo k = 5, a distribuição possui 5 graus de liberdade (não 4) e a alternativa B está incorreta.

Em relação à alternativa C, a distribuição de t-Student é definida como:

                                                             𝑍           √𝑘. 𝑍
                                                    𝑇=               =
                                                            √𝒳𝑘
                                                                 2       √𝒳𝑘2
                                                              𝑘

Considerando que a distribuição qui-quadrado possui 5 graus de liberdade, temos:

                                                                 √5. 𝑍
                                                            𝑇=
                                                                 √𝒳𝑘2

Logo, a alternativa C está incorreta.

Em relação à alternativa D, a diferença entre variáveis normais independentes, ainda que multiplicadas por
constantes, também segue distribuição normal. A média e a variância são dadas por:

             𝐸(3𝑋5 − 2𝑋2 ) = 𝐸(3𝑋5 ) − 𝐸(2𝑋2 ) = 3 × 𝐸(𝑋5 ) − 2 × 𝐸(𝑋2 ) = 3 × 0 − 2 × 0 = 0

            𝑉(3𝑋5 − 2𝑋2 ) = 𝑉(3𝑋5 ) + 𝑉(2𝑋2 ) = 9 × 𝑉(𝑋5 ) + 4 × 𝑉(𝑋2 ) = 9 × 1 + 4 × 1 = 13

Logo, a alternativa D está correta.

Em relação à alternativa E, a razão entre duas variáveis normais segue distribuição de Cauchy. A distribuição F-
Snedecor é definida como:

        Receita Federal (Analista Tributário) Estatística                                                     139
        www.estrategiaconcursos.com.br                                                                        174

                                        


---

     Equipe Exatas Estratégia Concursos
     Aula 10

                                                                      𝒳𝑘21
                                                                          ⁄
                                                                           𝑘
                                                             𝐹𝑘1 ,𝑘2 = 2 1
                                                                      𝒳𝑘2
                                                                          ⁄
                                                                           𝑘2

Logo, a alternativa E está incorreta.

Gabarito: D

3.            (FGV/2017 – MPE-BA) Sejam X, Y, W e Z variáveis aleatórias todas com distribuição normal-padrão,
com X independente de Y e Y independente de Z. Já W é independente das demais. Sobre algumas
combinações dessas variáveis, é correto afirmar que:           ==219a34==

a) X + Y + Z não é uma normal;

b) 𝑋 2 + 𝑌 2 + 𝑍 2 é Qui-Quadrado com 3 graus de liberdade;

       𝑋
c) √𝑍 2          é t-Student com 2 graus de liberdade;
          +𝑌 2

      2.𝑋 2
d) 𝑊 2 +𝑌 2 é uma F-Snedecor com 1 e 2 graus de liberdade;

          𝑋
e) √𝑊 2          é uma t-Student com 2 graus de liberdade.
          +𝑌 2


Comentários:

O enunciado informa que X, Y, W e Z são variáveis normais padrão N(0,1) e que X e Y são independentes; Y e Z
são independentes e que W é independente das demais.

Em relação à alternativa A, sabemos que a soma de variáveis normais segue distribuição normal padrão. Logo,
a alternativa A está incorreta.

Em relação à alternativa B, a soma de variáveis normais padrão independentes elevadas ao quadrada apresenta
distribuição Qui-Quadrado. O enunciado informa que X é Y são independentes e que Y e Z são independentes,
mas isso não garante que todas as variáveis sejam independentes. Logo, a alternativa B está incorreta.

Em relação à alternativa C, a variável t-Student é definida como:

                                                                                 𝑍
                                                                   𝑇=
                                                                                     2
                                                                                √𝒳𝑘
                                                                                  𝑘


               Receita Federal (Analista Tributário) Estatística                                                140
               www.estrategiaconcursos.com.br                                                                   174

                                               


---

     Equipe Exatas Estratégia Concursos
     Aula 10

No denominador da expressão fornecida pela alternativa (√𝑍 2 + 𝑌 2 ), consta a raiz de uma variável qui-
quadrado com 𝑘 = 2 graus de liberdade. Logo, para ser uma t-Student, o denominador deveria ser dividido por
√𝑘 = √2. Como não consta tal divisão na expressão fornecida, a alternativa C está incorreta.

O mesmo ocorre com relação à alternativa E (o denominador apresenta 2 graus de liberdade, mas não está
dividido por √2), logo a alternativa E também está errada.

Em relação à alternativa D, a variável F-Snedecor é definida como:

                                                  𝒳𝑘21
                                                      ⁄   𝒳𝑘2 𝑘2  𝒳𝑘2 𝑘2
                                                       𝑘
                                          𝐹𝑘1,𝑘2 = 2 1 = 1 × 2 = 21 ×
                                                  𝒳𝑘2     𝑘1  𝒳𝑘2 𝒳𝑘2 𝑘1
                                                      ⁄
                                                       𝑘2

Na expressão fornecida pela alternativa, no denominador (𝑊 2 + 𝑌 2 ) consta uma variável qui-quadrado com
𝑘2 = 2 graus de liberdade, uma vez que Y e W são independentes; e no numerador consta uma variável qui-
quadrada (𝑋 2 ) com 𝑘1 = 1 grau de liberdade multiplicada por 𝑘2 = 2. Como X é independente tanto de Y quanto
de W, então a variável qui-quadrado do numerador é independente da variável do denominador e, por isso, tal
razão é uma F-Snedecor com 𝑘1 = 1 grau de liberdade no numerador e 𝑘2 = 2 graus de liberdade no
denominador. Logo, a alternativa D está correta.

Gabarito: D.

4.      (FGV/2014 – DPE-RJ) Sejam X, Y e Z variáveis aleatórias independentes, as duas primeiras tendo
distribuição Normal-Padrão, sendo a terceira Qui-quadrado com m graus de liberdade. Então, identifica-se a
variável aleatória

     𝑚.(𝑋+𝑌)
a)             como tendo distribuição t-Student com m graus de liberdade
       √𝑍


b) 𝑍 − (𝑋 2 + 𝑌 2 ) como tendo distribuição qui-quadrado com (m – 2) graus de liberdade

        𝑍       2
c) (𝑋 2+𝑌 2) . 𝑚 como tendo distribuição F-Snedecor, com 2 e m graus de liberdade no numerador e no
denominador, respectivamente.

d) (X – Y) com tendo distribuição Normal com média ZERO e variância 2.

e) X + Y também como tendo distribuição Normal Padrão.

Comentários:

            Receita Federal (Analista Tributário) Estatística                                             141
            www.estrategiaconcursos.com.br                                                                174

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 10

O enunciado informa que X e Y são variáveis normais padrão N(0,1) e Z é qui-quadrado com m graus de
liberdade. Em relação à alternativa A, a distribuição de t-Student é definida como:

                                                                𝑍           √𝑘. 𝑍
                                                       𝑇=               =
                                                               √𝒳𝑘
                                                                    2       √𝒳𝑘2
                                                                 𝑘

Ou seja, no numerador deveríamos ter o produto de √𝑚 (não 𝑚, como consta na alternativa) por uma variável
normal padrão, logo, a alternativa A está incorreta.

Em relação à alternativa B, a distribuição qui-quadrado é definida como a soma de variáveis com distribuição
normal padrão elevadas ao quadrado, não a sua subtração. Logo, 𝑍 − (𝑋 2 + 𝑌 2 ) não tem distribuição qui-
quadrado e a alternativa B está incorreta.

Em relação à alternativa C, a distribuição F-Snedecor com 𝑘1 graus de liberdade no numerador e 𝑘2 graus de
liberdade no denominador é definida como:

                                                 𝒳𝑘21
                                                     ⁄   𝒳𝑘2 𝑘2  𝒳𝑘2 𝑘2
                                                      𝑘
                                         𝐹𝑘1,𝑘2 = 2 1 = 1 × 2 = 21 ×
                                                 𝒳𝑘2     𝑘1  𝒳𝑘2 𝒳𝑘2 𝑘1
                                                     ⁄
                                                      𝑘2
               𝑍        2
Ou seja,            .       apresenta distribuição F-Snedecor, com m graus de liberdade no numerador e 2 graus de
           (𝑋 2 +𝑌 2 ) 𝑚
liberdade no denominador (não o inverso, como consta na alternativa), logo a alternativa C está incorreta.

Em relação à alternativa D, a distribuição X – Y apresenta média:

                                           𝐸(𝑋 − 𝑌) = 𝐸(𝑋) − 𝐸(𝑌) = 0 − 0 = 0

E variância, sabendo que X e Y são independentes:

                                           𝑉(𝑋 − 𝑌) = 𝑉(𝑋) + 𝑉(𝑌) = 1 + 1 = 2

Logo, a alternativa D está correta. Em relação à alternativa C, a distribuição X + Y apresenta média e variância
dadas por (sabendo que X e Y são independentes):

                                           𝐸(𝑋 + 𝑌) = 𝐸(𝑋) + 𝐸(𝑌) = 0 + 0 = 0

                                           𝑉(𝑋 + 𝑌) = 𝑉(𝑋) + 𝑉(𝑌) = 1 + 1 = 2

Como a variância é igual a 2, a distribuição não é normal padrão: alternativa incorreta.

Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                                  142
           www.estrategiaconcursos.com.br                                                                     174

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                   LISTA DE QUESTÕES – FGV

Uniforme

1.      (FGV/2023 – CGE/SC) Considere uma variável aleatória X uniformemente distribuída no intervalo
[0,1]. A média e a variância de X serão, respectivamente, iguais a

a) 0 e 1/3

b) 1 e 1

c) 1/2 e 1/12

d) 1/12 e 1

e) 1/6 e 1/24

2.     (FGV/2023 – BANESTES) Admita que a variável aleatória Y siga uma distribuição uniforme contínua
no intervalo [-1, +2]. Assim, a esperança de Y2 é igual a

a) 1

b) 1,5

c) 2

d) 2,5

e) 3

3.     (FGV/2023 – TCE/ES) Os noventa e nove percentis (𝑷𝟏 , 𝑷𝟐 , … , 𝑷𝟗𝟗 ) dividem os dados ordenados
em cem partes com, aproximadamente, 1% dos dados em cada uma delas. Seja 𝑿~𝑼𝒏𝒊𝒇𝒐𝒓𝒎𝒆(𝒂; 𝒃), 𝒃 >
𝒂 e 𝒑(𝒊) o 𝒊-ésimo percentil, 𝒊 = 𝟏, 𝟐, … , 𝟗𝟗. Uma expressão que fornece o 𝒑(𝒊) dessa distribuição é

a) 𝑎 + (𝑏 − 𝑎)𝑖%

b) 𝑏 + (𝑏 − 𝑎)𝑖%

c) 𝑎 − (𝑏 − 𝑎)𝑖%

d) 𝑏 − (𝑎 − 𝑏)𝑖%
           𝑏−𝑎
e) 𝑏 + ( 2 ) 𝑖%

           Receita Federal (Analista Tributário) Estatística                                       143
           www.estrategiaconcursos.com.br                                                          174

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 10

4.      (FGV/2022 – EPE) Se uma variável aleatória contínua X tem distribuição uniforme no intervalo [2,
8], então a variância de X é igual a

a) 2,0

b) 3,0

c) 4,0

d) 5,0

e) 6,0

5.    (FGV/2022 – SEMSA/Manaus) Avalie se as seguintes famílias de distribuições pertencem à família
exponencial:

I - Distribuição Normal
II - Distribuição Binomial

III - Distribuição de Poisson

IV - Distribuição Uniforme

Estão corretas apenas

a) I e II

b) III e IV

c) I, II e III

d) I, III e IV

e) II, III e IV

6.          (FGV/2018 – ALERO) Avalie se as seguintes famílias de distribuições são uma família exponencial:

I - A família de distribuições Poisson com média desconhecida.

II - A família de distribuições normais com média conhecida e variância desconhecida.

III - A família de distribuições Beta com parâmetro α conhecido e parâmetro β desconhecido.

IV - A família de distribuições Uniforme no intervalo (0, θ), θ parâmetro desconhecido.
São de fato famílias exponenciais

             Receita Federal (Analista Tributário) Estatística                                            144
             www.estrategiaconcursos.com.br                                                               174

                                           


---

     Equipe Exatas Estratégia Concursos
     Aula 10

a) I e II, apenas.

b) III e IV, apenas.

c) I, II e IV, apenas.

d) I, II e III, apenas.

e) I, II, III e IV.

7.        (FGV/2018 – AL/RO) Se (Xn) é uma sequência de variáveis aleatórias com distribuição uniforme no
intervalo (0, (n – 1)/ n), n > 1, então (Xn) converge para uma distribuição
                                                               ==219a34==

a) uniforme no intervalo (0, 1).

b) qui-quadrado com 1 grau de liberdade

c) exponencial com parâmetro 𝜆 = 1.

d) normal padrão.

e) geométrica parâmetro 𝜃 = 1.

8.     (FGV/2017 – IBGE) Sabe-se que o tempo de aplicação de um questionário em uma pesquisa de
campo é uma variável com distribuição uniforme entre 8 e 20 minutos. Um entrevistador pretende aplicar
três questionários.

Logo, é correto afirmar que:

a) a probabilidade de que todas as entrevistas durem mais do que 15 minutos é de 27/64;

b) a probabilidade de que duas entrevistas durem mais do que a média é igual a 5/8;

c) o desvio padrão do tempo de duração de cada entrevista é igual a 2 minutos;

d) a probabilidade de que apenas uma das entrevistas leve menos da metade do tempo máximo é igual a
25/72.

e) a probabilidade do tempo total de entrevista exceder 40 minutos é igual a 0,5.

           Receita Federal (Analista Tributário) Estatística                                          145
           www.estrategiaconcursos.com.br                                                             174

                                         


---

Equipe Exatas Estratégia Concursos
Aula 10

                                                GABARITO
 1. LETRA C                                  4. LETRA B                  7. LETRA A
 2. LETRA A                                  5. LETRA C                  8. LETRA D
 3. LETRA A                                  6. LETRA D

      Receita Federal (Analista Tributário) Estatística                               146
      www.estrategiaconcursos.com.br                                                  174

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                    LISTA DE QUESTÕES – FGV

Exponencial

1.      (FGV/2023 – TRT/18ª Região) Sabe-se que uma variável aleatória X tem distribuição geométrica, ou
seja, P(X = x) = (1 − p)x−1.p com x = 1, 2, 3, ... , com a probabilidade do primeiro sucesso ocorrer em um
experimento igual a 0,50. Uma outra variável aleatória Y, independente de X, tem distribuição exponencial
com um parâmetro 𝜶.
Se as probabilidades P(X > 2) e P(Y > 1) são iguais, então a média de Y é igual a:

Dados: ln(A) representa o logaritmo neperiano de A

a) −ln⁡(0,25)

b) [− ln(0,50)]−1

c) −ln⁡(0,50)

d) [− ln(0,25)]−1

e) [− ln(0,75)]−1

2.     (FGV/2023 – BANESTES) Por saber que há grande procura por imóveis em determinada região, uma
construtora decide comprar um terreno e construir uma casa nesse local. O prazo necessário para realizar
a obra pode ser encarado como uma variável aleatória com distribuição Exponencial. Com base na sua
experiência, a construtora presume que uma obra como essa leva em média 18 meses para ficar pronta.

Admita que a construtora deseja ser capaz de cumprir esse prazo com 80% de probabilidade. Para facilitar
seus cálculos, use - 1,61 como o valor do logaritmo neperiano de 0,2.

O prazo para a entrega das chaves, a partir do início da obra, que deve ser informado aos possíveis
interessados na compra da casa é de

a) 8 meses

b) 12 meses

c) 29 meses

d) 43 meses

e) 60 meses

        Receita Federal (Analista Tributário) Estatística                                              147
        www.estrategiaconcursos.com.br                                                                 174

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 10

3.      (FGV/2023 – TJ/SE - Adaptada) Quanto à transformação de variáveis aleatórias que seguem uma
distribuição de probabilidade determinada, julgue o item a seguir.
A soma de n variáveis aleatórias independentes e identicamente distribuídas Exponencial com parâmetro λ
tem distribuição Exponencial com parâmetro n*λ.

4.     (FGV/2022 – TCE/TO) Suponha que X tenha distribuição exponencial com parâmetro 𝜸 = 𝟎, 𝟐𝟓, ou
seja, a função densidade de probabilidade de X é dada por 𝒇(𝒙) = 𝟎, 𝟐𝟓𝒆−𝟎,𝟐𝟓 , 𝒙 > 𝟎, 𝒇(𝒙) = 𝟎 nos
demais casos.
A média de X é então igual a:

a) 1

b) 2

c) 3

d) 4

e) 5

5.    (FGV/2022 – SEMSA/Manaus) Avalie as seguintes afirmativas acerca de uma variável aleatória X
com distribuição exponencial de probabilidades com parâmetro 𝝀 > 𝟎.

I. Se 𝝀 > 𝟏, então 𝑬(𝑿) > 𝑽𝒂𝒓(𝑿).

II. 𝑷[𝑿 > 𝒂 + 𝒃|𝑿 > 𝒂] = 𝑷[𝑿 > 𝒃], 𝒂 > 𝟎, 𝒃 > 𝟎

III. A função de densidade de probabilidade de X é simétrica em torno de sua média.

Está correto o que se afirma em

a) I, apenas

b) I e II, apenas

c) I e III, apenas

d) II e III, apenas

e) I, II e III

            Receita Federal (Analista Tributário) Estatística                                       148
            www.estrategiaconcursos.com.br                                                          174

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 10

6.    (FGV/2022 – TCE/TO) Considere que um processo Poisson esteja ocorrendo no tempo com uma
taxa média de ocorrência igual a 𝒗 e suponha que uma ocorrência tenha acabado de acontecer.

Se T é o tempo necessário até que a próxima ocorrência do processo aconteça, então T tem distribuição:

a) Normal (𝑣1);

b) Normal padrão;

c) Qui-quadrado parâmetro 𝑣;

d) Poisson parâmetro 𝑣𝑡;

e) Exponencial com parâmetro 𝑣.
                                                               ==219a34==

7.    (FGV/2022 – TRT/16ª Região) Se X tem distribuição exponencial com parâmetro 𝝀, ou seja, se
𝒇(𝒙) = 𝝀𝒆−𝝀𝒙, se 𝒙 > 𝟎, 𝝀 > 𝟎, então a variância de X é igual a

a) 𝜆2

     1
b) 𝜆

     1
c) 2
     𝜆

     2
d) 𝜆2

e) 𝜆

8.       (FGV/2022 – TRT/PB) Considere uma variável aleatória X com função de probabilidade exponencial
com parâmetro   . Nesse caso, avalie se as seguintes afirmativas são falsas (F) ou verdadeiras (V):
( ) E[ X ] = 1/ e Var[ X ] = 1/ 
( ) Se um processo Poisson está ocorrendo no tempo, então a variável aleatória que mede o tempo entre
duas ocorrências sucessivas tem distribuição exponencial.

( ) A distribuição exponencial não tem memória, ou seja, se X tem distribuição exponencial, e se a e b são
constantes positivas, P[ X > a + b | X > a] = P[ X > b].

As afirmativas são, respectivamente,

a) V, F e V

b) F, V e V


           Receita Federal (Analista Tributário) Estatística                                             149
           www.estrategiaconcursos.com.br                                                                174

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 10

c) F, F e F

d) V, V e F

e) V, V e V

9.     (FGV/2022 – TRT/PB) Se os tempos de vida 𝑿𝟏 , 𝑿𝟐 , … , 𝑿𝒏 de 𝒏 bulbos são variáveis aleatórias
independentes e identicamente distribuídas exponencial com parâmetro 𝝀, então a soma 𝑿𝟏 + ⁡ 𝑿𝟐 , + ⋯ +
⁡𝑿𝒏 desses tempos de vida tem distribuição

a) exponencial com parâmetro 𝑛𝜆

b) gama com parâmetros 𝑛 e 𝜆

c) beta com parâmetros 𝑛 e 𝜆

d) Cauchy com parâmetros 𝑛 e 𝜆

e) logística com parâmetros 𝑛 e 𝜆.

10.    (FGV/2021 – FunSaúde/CE) Suponha que carros passem por um posto de observação em uma
estrada remota de acordo com um processo Poisson, com taxa média de ocorrência igual a 2 carros por
minuto.

Se um carro acaba de passar por esse posto, o tempo de espera, até que o próximo carro passe pelo posto,
tem distribuição de probabilidades:

a) Cauchy (𝛼 = 1, 𝛽 = 2)

b) Beta (𝛼 = 1, 𝛽 = 2)

c) Uniforme (0, 2)

d) Exponencial (𝜆 = 2)

e) Normal (𝜇 = 2, 𝜎 2 = 1)

11.     (FGV/2018 – TJ-AL) Suponha que o tempo de espera para a marcação de uma 1a audiência nas varas
de família de um tribunal seja uma variável aleatória que depende do número de novas ações, seguindo
uma distribuição exponencial com média de 2,5 meses.

          Receita Federal (Analista Tributário) Estatística                                            150
          www.estrategiaconcursos.com.br                                                               174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

Então, trabalhando com 𝒆−𝟎,𝟒 = 𝟐⁄𝟑, a probabilidade de que uma 1ª audiência seja marcada para mais do
que 2 meses depois é igual a aproximadamente:

a) 16%

b) 33%

c) 45%

d) 56%

e) 67%

12.    (FGV/2018 – AL-RO) Acerca da soma de variáveis aleatórias, avalie se as afirmativas a seguir, estão
corretas.
I. A soma de n variáveis aleatórias independentes e identicamente distribuídas Bernoulli com parâmetro
p, tem distribuição binomial com parâmetros n e p.
II. A soma de n variáveis aleatórias independentes e identicamente distribuídas Poisson com parâmetro λ
tem distribuição Poisson com parâmetro nλ.
III. A soma de n variáveis aleatórias independentes e identicamente distribuídas exponencial com
parâmetro λ tem distribuição gama com parâmetros n e λ.

Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas.

e) I, II e III.

13.    (FGV/2017 – IBGE) Suponha que o tempo de vida útil da lâmpada de um Scanner seja distribuído
exponencialmente com parâmetro 𝜷⁡= 600 horas. Se T representa a durabilidade da lâmpada, é correto
afirmar que:

a) P(T > 600) = 0,50;

b) P(200 < T < 600) = 0,25;

            Receita Federal (Analista Tributário) Estatística                                          151
            www.estrategiaconcursos.com.br                                                             174

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 10

c) P(T > 1500) = 1 – e-2;

d) P(T > 1200 | T > 300) = P(T > 900)

e) P(T < 450) = 1 – e-2/5

14.    (FGV/2015 – TJ-BA) O tempo necessário para apreciação de uma petição pelos magistrados em
determinado tribunal foi tipificado como uma variável aleatória com distribuição exponencial. Sabe-se
ainda que a probabilidade de que uma petição não seja apreciada nos 30 dias após ser encaminhada é de
40%.

Se uma petição já está aguardando despacho há 60 dias, a probabilidade de que seja apreciada antes de
completar 90 dias é igual a:

a) (0,6)3

b) (0,4)1(0,6)2

c) (0,4)2(0,6)1

d) 0,4

e) 0,6

15.    (FGV/2015 – TJ-RO) Sabe-se que o tempo de duração de um processo na justiça do trabalho é uma
variável aleatória contínua distribuída exponencialmente, com média de 1200 dias.

Se já passaram 900 dias de um processo, a probabilidade de que ele dure mais do que 1500 dias é igual a:

a) e-5/4

b) e-3/4

c) e-1/2

d) 1 – e-2/3

e) 1 – e-1/2

16.        (FGV/2010 – FIOCRUZ) Avalie cada afirmativa a seguir, acerca de soma de variáveis aleatórias:

I. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição Poisson com parâmetro λi, i
= 1, ..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição Poisson com parâmetro ∑𝒏𝒊=𝟏 𝝀𝒊 .

            Receita Federal (Analista Tributário) Estatística                                              152
            www.estrategiaconcursos.com.br                                                                 174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

II. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição exponencial com parâmetro
λ, i = 1, ..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição gama com parâmetros 1 e nλ.

III. Se X1, X2, ..., Xn são variáveis aleatórias independentes, Xi com distribuição Normal com parâmetros µi
e σi2, i = 1, ..., n, então ∑𝒏𝒊=𝟏 𝑿𝒊 tem distribuição Normal com parâmetros ∑𝒏𝒊=𝟏 𝝁𝒊 e ∑𝒏𝒊=𝟏 𝝈𝒊 𝟐 .

Assinale:

a) se apenas a afirmativa I estiver correta

b) se apenas as afirmativas I e II estiverem corretas

c) se apenas as afirmativas I e III estiverem corretas

d) se apenas as afirmativas II e III estiverem corretas

e) se as afirmativas I, II e III estiverem corretas

         Receita Federal (Analista Tributário) Estatística                                               153
         www.estrategiaconcursos.com.br                                                                  174

                                       


---

Equipe Exatas Estratégia Concursos
Aula 10

                                                GABARITO
 1.   LETRA D                                7. LETRA C                  13. LETRA D
 2.   LETRA C                                8. LETRA E                  14. LETRA E
 3.   ERRADO                                 9. LETRA B                  15. LETRA E
 4.   LETRA D                                10. LETRA D                 16. LETRA C
 5.   LETRA B                                11. LETRA C
 6.   LETRA E                                12. LETRA E

      Receita Federal (Analista Tributário) Estatística                                154
      www.estrategiaconcursos.com.br                                                   174

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 10

                                  LISTA DE QUESTÕES – FGV

Distribuição Normal

1.    (FGV/2023 – Câmara dos Deputados) Se X é uma variável aleatória normalmente distribuída, com
média 50 e variância 100, então a seguinte variável tem distribuição normal padrão:
a) 𝑍 = (𝑋 − 50)/10
b) 𝑍 = (𝑋 − 50)/100
c) 𝑍 = (𝑋 + 50)/10
d) 𝑍 = (𝑋 + 50)/100
e) 𝑍 = 𝑋 − 5


2.    (FGV/2023 – TCE/ES) A variável aleatória X tem distribuição normal com média 2 e variância 1.
Considere a transformação 𝒀 = 𝟐 × (𝑿 – 𝟐). É correto afirmar que, aproximadamente:
          1          1
a) Pr (− 2 ≤ 𝑌 ≤ 2) = 95%

          1          1
b) Pr (− 2 ≤ 𝑌 ≤ 2) = 68%

c) Pr(−2 ≤ 𝑌 ≤ 2) = 95%
          1          1
d) Pr (− 2 ≤ 𝑌 ≤ 2) = 68%

e) Pr(−√2 ≤ 𝑌 ≤ √2) = 68%

3.       (FGV/2022 – MPE/SC) Um produtor de azeites comercializa seu produto em garrafas cujo conteúdo,
em litros, é uma variável aleatória com distribuição normal com média 𝝁 = 𝟏 litro e variância 𝝈𝟐 = 𝟎, 𝟎𝟐
litro. A porcentagem de garrafas de azeite que contêm mais de 1 litro é:

a) 10%

b) 20%

c) 30%

d) 50%

e) 100%

          Receita Federal (Analista Tributário) Estatística                                          155
          www.estrategiaconcursos.com.br                                                             174

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 10

4.      (FGV/2022 – MPE/SC) Considere um processo onde é observada uma variável aleatória X que tem
distribuição Normal com média 4 e desvio padrão 2. Após uma modificação no processo, os valores se
alteraram e a nova variável é Y = 2X + 4.

a) média 8 e variância 8

b) média 12 e variância 4

c) média 12 e variância 8

d) média 12 e variância 16

e) média 12 e variância 20

5.     (FGV/2022 – EPE) Acerca de uma variável aleatória X com distribuição normal, com média 𝝁 e
variância 𝝈𝟐 , avalie as afirmativas a seguir.
I. Se 𝒎 é a mediana de X, então 𝒎 = 𝝁.
II. A probabilidade de que X seja maior do que 𝝁 + 𝟎, 𝟏𝝈 é maior do que 0,5.
III. A variável 𝒁 = (𝑿 − 𝝁)/𝝈 tem distribuição normal com média 0 e variância 1.
Está correto o que se afirma em

a) I, apenas

b) I e II, apenas

c) I e III, apenas

d) II e III, apenas

e) I, II e III

6.     (FGV/2022 – TCE/TO) Se X tem distribuição normal com média 𝝁 e variância 𝝈𝟐 , então a seguinte
variável tem distribuição normal padrão:
          (𝑋−𝜇)
a) 𝑍 =
             𝜎

          (𝑋−𝜇)2
b) 𝑍 =       𝜎

          (𝑋−𝜇)2
c) 𝑍 =      𝜎2

          (𝑋−𝜇)
d) 𝑍 =      𝜎2

          (𝑋−𝜇)
e) 𝑍 =      2𝜎


            Receita Federal (Analista Tributário) Estatística                                     156
            www.estrategiaconcursos.com.br                                                        174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

7.      (FGV/2022 – CGU) Suponha que o preço de um determinado ativo no tempo t é dado pela seguinte
fórmula 𝒑𝒕 = 𝒑𝟎 𝒆𝒙𝒑(𝝁𝒕 + 𝝈√𝒕𝒁), onde exp é a função exponencial, 𝝁 e 𝝈 são constantes e Z tem
distribuição normal padrão (com média 0 e variância 1). Para valores 𝒑𝟎 = 𝟏𝟎𝟎, 𝝁 = 𝟎, 𝟏, 𝝈 = 𝟎, 𝟓, e
denotando a função de distribuição acumulada padrão por 𝝋, a probabilidade de 𝒑𝒕 > 𝟓𝟎 para 𝒕 = 𝟏
corresponde a:
             1
         log( )−0,1
             2
a) 𝜑 (                )
            0,5

b) 𝜑(2. log 2 + 0,2)

c) 𝜑(−2. log 2 − 0,2)

         log(2)−0,1
d) 𝜑 (            )
                                                               ==219a34==

            0,5

             1
         log( )+0,1
             2
e) 𝜑 (                )
            0,5

8.     (FGV/2021 – FunSaúde/CE) Se uma variável aleatória X tem distribuição normal com média 15 e
variância 4, então P[X > 20] é, aproximadamente, igual a

a) 0,2%;

b) 0,6%;

c) 0,9%;

d) 1,4%;

e) 1,8%.

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.

9.      (FGV/2021 – FunSaúde/CE) Se X tem distribuição normal com média μ e desvio padrão σ, avalie se
as afirmativas a seguir estão corretas:
I. A função de densidade de probabilidade de X é simétrica em relação a μ.
II. P[μ–2 < X < μ+2] ≅ 0,95.
III. P[X > μ–3] ≅ 1.

           Receita Federal (Analista Tributário) Estatística                                       157
           www.estrategiaconcursos.com.br                                                          174

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 10

Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas

e) I, II e III.

10.    (FGV/2018 – SEFIN/RO) Uma variável aleatória X tem distribuição normal com média μ e
variância σ2. Nesse caso, avalie se as afirmativas a seguir são falsas (F) ou verdadeiras (V).
                  (𝑿−𝝁)
I. A variável             tem distribuição normal padrão.
                   𝝈𝟐

II. Se x é um número real, P[X > x] = 1 - P[X < -x].
III. P[X > μ] = 0,5.
Na ordem apresentada, as afirmativas são, respectivamente,

a) V - F - V.

b) V - F - F.

c) F - V - F.

d) F - F - V.

e) F - F - F.

11.    (FGV/2018 – TJ-AL) Os volumes com que são preenchidos os frascos de perfume produzidos por
certa marca são normalmente distribuídos com média 100 mL e desvio padrão de 2 mL. Frascos que
apresentam menos de 95 mL ou mais de 105 mL de perfume são considerados fora dos limites e
inadequados pelo controle de qualidade.
A porcentagem de frascos produzidos com volume considerado inadequado é igual a

a) 0,64%;

b) 1,24%;

c) 2,05%;


            Receita Federal (Analista Tributário) Estatística                                  158
            www.estrategiaconcursos.com.br                                                     174

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 10

d) 2,48%;

e) 2,96%.

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.


12.     (FGV/2017 – MPE/BA) O tempo para a tramitação de certo tipo de procedimento aberto pelo
Ministério Público, em um dado instante, é uma variável aleatória com distribuição normal, tendo média
igual de 10 meses e desvio-padrão de 3 meses. Um novo grupo de procuradores, recém-chegados à
instituição, deve cuidar de alguns procedimentos, que serão sorteados dentre os que já têm mais de 7
meses de duração.
Sobre a função acumulada da normal são dados os valores: Ø(1) = 0,80 , Ø(1,5) = 0,92 e Ø(2,0) = 0,98
Com tais informações, a probabilidade de que um procedimento com mais de 16 meses seja selecionado
é igual a:

a) 2,0%

b) 2,5%

c) 5,0%

d) 8,0%

e) 10,0%

13.     (FGV/2017 – IBGE) Suponha que certa característica de uma dada população tem suas medidas
distribuídas normalmente com média 40 e variância igual a 25. Um indivíduo deverá ser extraído ao acaso
e sua característica observada. Considere também as seguintes informações:
ɸ(1,9) = 0,971, ɸ(1,6) = 0,945, ɸ(1,25) = 0,895 e ɸ(2,1) = 0,982 onde ɸ(.) = função distribuição acumulada
da normal-padrão.
A probabilidade de o valor sorteado diferir por mais de vinte por cento da média verdadeira é:

a) 3,6%;

b) 5,5%;

c) 10,5%;

d) 11%;

e) 21%.

           Receita Federal (Analista Tributário) Estatística                                              159
           www.estrategiaconcursos.com.br                                                                 174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

14.     (FGV/2016 – IBGE) Sabe-se que as notas de uma prova têm distribuição Normal com média μ = 6,5
e variância σ2 = 4 . Adicionalmente, são conhecidos alguns valores tabulados da normal-padrão.
Φ(1,3 ) ≅ 0,90 Φ(1,65) ≅ 0,95 Φ(1,95 ) ≅ 0,975 Onde, Φ(z) é a função distribuição acumulada da Normal
Padrão.
Considerando-se que apenas os 10% que atinjam as maiores notas serão aprovados, a nota mínima para
aprovação é:

a) 9,10;

b) 9,30;

c) 9,50;

d) 9,70;

e) 0,13

15.    (FGV/2016 – IBGE) A distribuição das alturas dos indivíduos de uma população é aproximadamente
Normal, com média 1,70 m e variância 0,01. Adicionalmente, não havendo, na população, pessoas com
alturas inferiores a 1,50 m nem superiores a 1,90 m, essa distribuição é truncada nos extremos.
São fornecidas também as seguintes informações: ɸ (1)≅ 0,84 e ɸ (2) ≅ 0,98, ɸ (z) = função distribuição
acumulada da Normal Padrão.
Então a probabilidade de que um indivíduo da população, sorteado ao acaso, tenha altura entre 1,60 m e
1,80 m é:

    23
a) (24);

    21
b) (24);

   21
c) (23);

    17
d) (24);

    17
e) (23);

16.    (FGV/2016 – IBGE) Sabe-se que as notas de uma prova têm distribuição Normal com média μ = 6,5
e variância σ2 = 4 . Adicionalmente, são conhecidos alguns valores tabulados da normal-padrão.

           Receita Federal (Analista Tributário) Estatística                                           160
           www.estrategiaconcursos.com.br                                                              174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

ɸ(1,3) ≅ 0,90, ɸ(1,65) ≅ 0,95 e ɸ(1,95) ≅ 0,975 onde ɸ(z) é a função distribuição acumulada da Normal
Padrão.
Considerando-se que apenas os 10% que atinjam as maiores notas serão aprovados, a nota mínima para
aprovação é:

a) 9,10;

b) 9,30;

c) 9,50;

d) 9,70;

e) 9,80.

17.    (FGV/2015 – TCM-SP) Uma cuidadosa pesquisa de preços sobre os custos da construção civil, mais
especificamente para a edificação de certos tipos de infraestruturas públicas, demonstrou que o valor por
metro quadrado tem distribuição próxima da Normal com média de R$1.600 e variância 14.400.
São fornecidos também valores da distribuição normal padrão e respectivas probabilidades, conforme
abaixo:

Suponha que, para fins de fiscalização, o Tribunal de Contas do Município de São Paulo tenha
convencionado que, dentre todas as obras, as 10% mais caras deveriam passar por um exame ainda mais
detalhado.

Então, isso significa que o critério estabelecido determina, estatisticamente, que uma obra deverá receber
um tratamento mais rigoroso quando o custo por metro quadrado for superior a:

a) R$ 1,403,20;

b) R$ 1.446,40;

c) R$ 1.753,60;

d) R$ 1.796,80;

e) R$ 1.835,20.

           Receita Federal (Analista Tributário) Estatística                                           161
           www.estrategiaconcursos.com.br                                                              174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

18.   (FGV/2015 – TJ-BA) Sejam Y e W variáveis aleatórias independentes, ambas com distribuição
normal, com médias μy = 2 e μW = 4 e com variâncias dadas por 𝝈𝟐 y = 9 e 𝝈𝟐 W = 16

a) P(Y > 4) > P(W < 2);

b) P(Y < -4) = P(W < -4);

c) P(|Y| < 2) > P(|W| > 4);

d) P(2Y – W > -1) < 0,5;

e) P(Y + W < 6) < 0,5 e P(W – Y > 3) > 0,5.

19.    (FGV/2014 – Prefeitura de Recife) Uma variável aleatória X é normalmente distribuída com média
12 e variância 4.
A probabilidade de que X seja maior do que 10 é igual a

a) 0,3085

b) 0,3587

c) 0,6915

d) 0,8413

e) 0,9772

Utilize a tabela normal padrão apresentada ao final, fornecida na prova.

20.    (FGV/2010 – FIOCRUZ) Suponha uma variável aleatória X normalmente distribuída com média 100
e variância 25. A probabilidade de que X seja maior do que 110 é igual a

a) 2,28%

b) 4,56%

c) 34,46%

d) 47,72%

e) 97,72%

Utilize a tabela normal padrão apresentada ao final.

        Receita Federal (Analista Tributário) Estatística                                         162
        www.estrategiaconcursos.com.br                                                            174

                                      


---

Equipe Exatas Estratégia Concursos
Aula 10

      Receita Federal (Analista Tributário) Estatística                  163
      www.estrategiaconcursos.com.br                                     174

                                    


---

Equipe Exatas Estratégia Concursos
Aula 10

                                                GABARITO
 1.   LETRA A                                8. LETRA B                  15. LETRA D
 2.   LETRA D                                9. LETRA A                  16. LETRA A
 3.   LETRA D                                10. LETRA D                 17. LETRA C
 4.   LETRA D                                11. LETRA B                 18. LETRA B
 5.   LETRA C                                12. LETRA B                 19. LETRA D
 6.   LETRA A                                13. LETRA D                 20. LETRA A
 7.   LETRA B                                14. LETRA A

      Receita Federal (Analista Tributário) Estatística                                164
      www.estrategiaconcursos.com.br                                                   174

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 10

                                  LISTA DE QUESTÕES – FGV

Soma de Variáveis e o Teorema Central do Limite

1.     (FGV/2023 – TCE/ES) Sabe-se que a taxa de acerto em chutes de fora da área de uma certa distância
é de 50%. Uma amostra de 100 chutes de fora da área da mesma distância do gol é observada.

A probabilidade de observar entre 35 e 65 chutes certos é, aproximadamente:

a) menor que 95%

b) igual a 99,7%

c) menor que 0,1%

d) Igual a 95%

e) menor que 0,3%

2.     (FGV/2022 – PC/AM) Em relação à distribuição Normal, assinale V para a afirmativa verdadeira e F
para a falsa.
( ) Se X segue uma distribuição Normal, então a média é igual à mediana e igual à moda.
( ) Quando o tamanho da amostra é grande, a distribuição normal serve como aproximação da distribuição
binomial.
( ) Quanto menor a variância, mais achatada é a função densidade de probabilidade da distribuição
Normal.
As afirmativas são, respectivamente,

a) V - V - V

b) V - V - F

c) V - F - V

d) F - V - V

e) F - V - F

          Receita Federal (Analista Tributário) Estatística                                          165
          www.estrategiaconcursos.com.br                                                             174

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 10

3.     (FGV/2022 – TRT-PB) Se uma moeda honesta for lançada 2.025 vezes, sabemos que esperam-se
1.012,5 “caras”. A probabilidade de que o número observado de “caras”, em 2.025 lançamentos, não seja
menor do que 1.000 nem maior do que 1.025 é aproximadamente igual a
a) 0,24.
b) 0,29.
c) 0,42.
d) 0,58.
e) 0,71.
Para essa questão, utilize a tabela apresentada ao final desta seção, fornecida na prova.

                                                               ==219a34==

4.     (FGV/2022 – SEFAZ/ES) Três jogadores participam de um experimento que consiste, em cada um,
girar uma roleta n vezes. A roleta sorteia um número uniformemente distribuído entre 0 e 6. Cada rodada
é independente e ganha um prêmio, quem obtiver soma dos números selecionados entre 90 e 144. Os
indivíduos x, y e z decidem rodar a roleta 27, 40 e 75 números, respectivamente. Utilizando a aproximação
para a distribuição normal, a comparação das probabilidades de ganho mostra que

a) Indivíduo y > Indivíduo x > Indivíduo z.

b) Indivíduo x > Indivíduo y > Indivíduo z.

c) Indivíduo z > Indivíduo x > Indivíduo y.

d) Indivíduo y > Indivíduo z > Indivíduo x.

e) Indivíduo x > Indivíduo z > Indivíduo y.

5.     (FGV/2018 – TJ-AL) Suponha que as penas previstas para punição por corrupção e lavagem de
dinheiro, a serem aplicadas a um ex-chefe do executivo, são em média iguais a 12 anos. Registros passados
indicam que, em geral, a variância é de 24 anos ao quadrado, com igual distribuição e independentes umas
das outras.
Considere φ(1,25) ≅ 0,9 φ(1,5) ≅ 0,95 φ(2) ≅ 0,975 e φ(2,25) ≅ 0,99 onde φ(z) é a função acumulada da
N (0,1).
Se o réu, que será julgado em 6 processos, for condenado em todos, a probabilidade de que a sua pena
exceda 45 anos é:

a) 75%

b) 90%


           Receita Federal (Analista Tributário) Estatística                                           166
           www.estrategiaconcursos.com.br                                                              174

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 10

c) 95%

d) 97,5%

e) 99%

6.      (FGV/2018 – AL-RO) Uma loja recebe em média 100 clientes por dia com um desvio padrão de 10
clientes.
A probabilidade de que, em um período de 100 dias, essa loja receba menos de 9.800 clientes é,
aproximadamente, igual a

a) 0;

b) 0,006;

c) 0,145;

d) 0,0228;

e) 0,0485.

Para resolver essa questão, utilize a tabela normal apresentada ao final, fornecida na prova.


7.    (FGV/2018 – TJ-AL) Suponha que a tramitação de um processo tem 16 etapas. Cada uma delas tem
uma duração aleatória, com distribuição exponencial de parâmetro β = 2 semanas.
Logo, fazendo uso do Teorema do Limite Central e sendo Φ(1)≅ 0,75, Φ(1,2)≅ 0,90 , Φ(1,5)≅0,95 e Φ(2)≅
0,975, a probabilidade de um processo do referido tipo desviar da média por:

a) mais do que 6 semanas é de 50%;

b) mais do que 8 semanas é de 20%;

c) mais do que 12 semanas é de 10%;

d) mais do que 16 semanas é de 2%;

e) menos do que 12 semanas é de 80%;

         Receita Federal (Analista Tributário) Estatística                                        167
         www.estrategiaconcursos.com.br                                                           174

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 10

8.      (FGV/2015 – TJ-BA) Sejam X1,X2,X3,...X25 variáveis aleatórias independentes e identicamente
distribuídas, com E (Xi) = 4 e (Vi) = 9

Sobre a variável Y = X1 + X2 + X3 + ... + X25 e usando a tabela da normal-padrão acima é correto afirmar que:

a) 𝑃(𝑌 > 122,5) ≅ 10,75%

b) 𝑃(𝑌 ≤ 70,6) ≅ 5,25%

c) 𝑃(80,8 < 𝑌 < 119,2) ≅ 75,25%

d) 𝑃(𝑌 ≥ 134,95) ≅ 2,00%

e) 𝑃(75,25 ≤ 𝑌 < 133,75) ≅ 93,75%

        Receita Federal (Analista Tributário) Estatística                                                 168
        www.estrategiaconcursos.com.br                                                                    174

                                      


---

Equipe Exatas Estratégia Concursos
Aula 10

      Receita Federal (Analista Tributário) Estatística                  169
      www.estrategiaconcursos.com.br                                     174

                                    


---

Equipe Exatas Estratégia Concursos
Aula 10

                                                GABARITO
 1. LETRA B                                  4. LETRA A                  7. LETRA C
 2. LETRA B                                  5. LETRA E                  8. LETRA E
 3. LETRA C                                  6. LETRA D

      Receita Federal (Analista Tributário) Estatística                               170
      www.estrategiaconcursos.com.br                                                  174

                                    


---

     Equipe Exatas Estratégia Concursos
     Aula 10

                                         LISTA DE QUESTÕES – FGV

Qui-quadrado, t-Student, F-Snedecor

1.      (FGV/2018 – AL/RO) Se X e Y são variáveis aleatórias independentes e identicamente distribuídas
N(0, 1), então X/Y tem distribuição

a) N(0,1)

b) N(0,4)

c) Cauchy (0,1)

d) Qui-quadrado com 1 grau de liberdade

e) Qui-quadrado com 2 graus de liberdade

2.          (FGV/2018 – TJ-AL) Sejam X1, X2 ..., X5 variáveis aleatórias independentes, todas normalmente
distribuídas com média zero e variância unitária. Então, é correto afirmar que:

a) ∑ 𝑋𝑖 também tem distribuição normal padrão;

b) ∑ 𝑋𝑖 2 é uma distribuição qui-quadrado com 4 graus de liberdade;

          2.𝑋1
c)               1   é uma t-Student com 5 graus de liberdade;
     (∑ 𝑋𝑖 2 ) ⁄2


d) (3𝑋5 − 2𝑋2 ) é normal com média zero e variância 13;

     𝑋
c) 𝑋 4 tem distribuição F-Snedecor com 2 graus de liberdade
      5

                 Receita Federal (Analista Tributário) Estatística                                    171
                 www.estrategiaconcursos.com.br                                                       174

                                               


---

     Equipe Exatas Estratégia Concursos
     Aula 10

3.    (FGV/2017 – MPE-BA) Sejam X, Y, W e Z variáveis aleatórias todas com distribuição normal-padrão,
com X independente de Y e Y independente de Z. Já W é independente das demais. Sobre algumas
combinações dessas variáveis, é correto afirmar que:

a) X + Y + Z não é uma normal;

b) 𝑋 2 + 𝑌 2 + 𝑍 2 é Qui-Quadrado com 3 graus de liberdade;

       𝑋
c) √𝑍 2          é t-Student com 2 graus de liberdade;
          +𝑌 2

      2.𝑋 2
d) 𝑊 2 +𝑌 2 é uma F-Snedecor com 1 e 2 graus de liberdade;

          𝑋
e) √𝑊 2          é uma t-Student com 2 graus de liberdade.
          +𝑌 2                                                    ==219a34==

4.      (FGV/2014 – DPE-RJ) Sejam X, Y e Z variáveis aleatórias independentes, as duas primeiras tendo
distribuição Normal-Padrão, sendo a terceira Qui-quadrado com m graus de liberdade. Então, identifica-
se a variável aleatória

     𝑚.(𝑋+𝑌)
a)               como tendo distribuição t-Student com m graus de liberdade
       √𝑍


b) 𝑍 − (𝑋 2 + 𝑌 2 ) como tendo distribuição qui-quadrado com (m – 2) graus de liberdade

          𝑍       2
c) (𝑋 2+𝑌 2) . 𝑚 como tendo distribuição F-Snedecor, com 2 e m graus de liberdade no numerador e no
denominador, respectivamente.

d) (X – Y) com tendo distribuição Normal com média ZERO e variância 2.

e) X + Y também como tendo distribuição Normal Padrão.

              Receita Federal (Analista Tributário) Estatística                                         172
              www.estrategiaconcursos.com.br                                                            174

                                            


---

Equipe Exatas Estratégia Concursos
Aula 10

                                                GABARITO
 1. LETRA C                                  3. LETRA D
 2. LETRA D                                  4. LETRA D

      Receita Federal (Analista Tributário) Estatística                  173
      www.estrategiaconcursos.com.br                                     174

                                    


---

---
