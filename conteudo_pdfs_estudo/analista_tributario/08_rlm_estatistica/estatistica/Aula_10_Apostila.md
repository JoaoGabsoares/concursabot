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
arquivo_origem: Aula 10_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '10'
titulo_aula: Estatística
---

# Estatística

Aula 09
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                             15 de Maio de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 09

                                                                                     Índice
1) Noções iniciais de variáveis aleatórias contínuas


2) Função de Distribuição Acumulada.


3) Tendência Central e Dispersão.


4) Teoremas de Desigualdade.


5) Questões Comentadas - Noções Iniciais de Variáveis Contínuas - FGV


6) Questões Comentadas - Teoremas de Desigualdade - FGV


7) Lista de Questões - Noções Iniciais de Variáveis Contínuas - FGV


8) Lista de Questões - Teoremas de Desigualdade - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                           85

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                      VARIÁVEIS ALEATÓRIAS CONTÍNUAS
As Variáveis Aleatórias podem ser classificadas em variáveis discretas ou contínuas. Os possíveis resultados
que uma variável discreta pode assumir são contáveis (ou enumeráveis). Por exemplo, para a variável que
representa o lançamento de uma moeda, há 2 possíveis resultados; para o lançamento de um dado, há 6
possíveis resultados.

Por outro lado, para variáveis aleatórias contínuas, os resultados não são enumeráveis. Essas podem assumir
quaisquer valores dentro de um intervalo (ou conjunto de intervalos). Por exemplo, a quantidade de água
que uma pessoa ingere por dia pode assumir qualquer valor não negativo. São exemplos desse tipo de
variável: peso, comprimento, área, volume, distância, tempo etc.

Não é possível contar o resultado de uma variável contínua, apenas mensurar (medir) o seu valor. Por
exemplo, não contamos a quantidade de água que uma pessoa ingere por dia, apenas medimos essa
quantidade.

Conceitos Fundamentais

Vamos considerar um exemplo de variável contínua: a altura de uma pessoa, que pode assumir qualquer
valor positivo. Podemos encontrar valores como 1,70 ou 1,83, ou podemos melhorar a precisão da medição
e encontrar 1,704 ou 1,829. Aumentando ainda mais a precisão, podemos encontrar 1,7043 ou 1,8291 ...

Considerando que podemos sempre acrescentar mais uma casa decimal na medida, há infinitos valores
possíveis para a altura. E isso vale para qualquer variável contínua.

Dessa forma, a probabilidade de uma variável assumir exatamente um valor específico (por exemplo,
exatamente 1,82908) é minúscula. Na verdade, essa probabilidade é zero!

Por isso, para variáveis contínuas, associamos as probabilidades a um intervalo de valores (ou conjunto de
intervalos). Ou seja, podemos calcular a probabilidade de a altura estar entre, por exemplo, 1,82 e 1,83 ou
entre 1,80 e 1,90.

Assim, em vez de termos uma função de probabilidade da forma 𝑓(𝑥 ) = 𝑃(𝑋 = 𝑥), como no caso de
variáveis discretas, para as variáveis contínuas, temos uma função densidade de probabilidade ou
simplesmente f.d.p. (não é f!#%# da p#%@, hein!)

Por exemplo, podemos ter a seguinte função densidade de probabilidade (f.d.p.) para uma variável aleatória
contínua que assume valores no intervalo entre 0 e 1:

                                        𝑓 (𝑥 ) = 12𝑥 2 (1 − 𝑥), 𝑠𝑒 𝑥 ∈ [0,1]


        Receita Federal (Analista Tributário) Estatística                                                3
        www.estrategiaconcursos.com.br                                                                   85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

O gráfico dessa f.d.p. é da forma:

        Uma função densidade de probabilidade qualquer satisfaz às seguintes condições:

        i)       Uma probabilidade qualquer nunca é negativa, logo:

                                                        𝒇(𝒙) ≥ 𝟎

        Obs.: Quando 𝒇(𝒙) = 𝟎 em determinado intervalo, a probabilidade associada a esse
        intervalo será zero.

        ii)      A probabilidade associada a todo o Espaço Amostral, isto é, ao conjunto de todos
                 os resultados possíveis da variável, é igual a 100% = 1.

E como se calcula a probabilidade?

A probabilidade associada a um intervalo de valores corresponde à área da região abaixo da f.d.p., nesse
intervalo.

Para o exemplo anterior, a probabilidade de 𝑥 pertencer ao intervalo de 0,4 a 0,6 corresponde à área da
região indicada pela seta na figura a seguir:

        Receita Federal (Analista Tributário) Estatística                                             4
        www.estrategiaconcursos.com.br                                                               85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Sabendo que a probabilidade de todo o Espaço Amostral é igual a 1, então a área da região abaixo de toda
a f.d.p. é igual a 1.

                                                                          1

        Dependendo do formato da f.d.p., será possível calcular a sua área, utilizando as fórmulas
        de geometria básica:

                                        Á𝑟𝑒𝑎 𝑅𝑒𝑡â𝑛𝑔𝑢𝑙𝑜 = 𝐵𝑎𝑠𝑒 × 𝐴𝑙𝑡𝑢𝑟𝑎

                                                                               Altura


                                                            Base
                                                                      𝐵𝑎𝑠𝑒×𝐴𝑙𝑡𝑢𝑟𝑎
                                          Á𝑟𝑒𝑎 𝑇𝑟𝑖â𝑛𝑔𝑢𝑙𝑜 =                        𝟐

                                                                              Altura


                                                             Base

                                                       (𝐵𝑎𝑠𝑒 𝑀𝑎𝑖𝑜𝑟+𝐵𝑎𝑠𝑒 𝑀𝑒𝑛𝑜𝑟)×𝐴𝑙𝑡𝑢𝑟𝑎
                                Á𝑟𝑒𝑎 𝑇𝑟𝑎𝑝é𝑧𝑖𝑜 =                                  2

                                                            Base Menor

                                                             Base Maior

        Receita Federal (Analista Tributário) Estatística                                             5
        www.estrategiaconcursos.com.br                                                               85

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 09

            Se não for possível utilizar as fórmulas de geometria básica para calcular a área da f.d.p.,
            precisaremos calcular a integral1 dessa função. Por isso, veremos agora um breve resumo
            das operações mais comuns envolvendo integral.

            Para uma potência qualquer de 𝑥 (exceto para 𝑛 = −1), a integral é dada por2:

                                                                    𝒙𝒏+𝟏
                                                       ∫ 𝒙𝒏 . 𝒅𝒙 = 𝒏+𝟏

            Por exemplo:

                                                                𝑥 2+1        𝑥3
                                                    ∫ 𝑥 2 . 𝑑𝑥 = 2+1 = 3

                                                               𝑥 −2+1        𝑥 −1
                                                  ∫ 𝑥 −2 . 𝑑𝑥 = −2+1 = −1

            Pontue-se que:

            i)      Quando houver uma multiplicação ou divisão por uma constante, basta multiplicar
                    ou dividir o resultado da integral pela constante:

                                                                        𝑥 𝑛+1
                                                    ∫ 𝑎. 𝑥 𝑛 . 𝑑𝑥 = 𝑎. 𝑛+1

                                             𝑥5       𝑥7        1       𝑥8
            Por exemplo, ∫ 3𝑥 4 . 𝑑𝑥 = 3. ,        ∫ 10 . 𝑑𝑥 = 10 × 8
                                             5

1
 A ideia da integral consiste na separação da área a ser calculada em retângulos muito estreitos, como ilustrado a seguir,
de modo que a área da região seja aproximada à soma das áreas dos retângulos.

Quanto mais estreitos forem os retângulos, mais precisa será essa aproximação.
No limite, quando a largura dos retângulos tende a zero, a soma das suas áreas será igual à área da região sob a função, que
é justamente a definição de integral da função.


2
    O termo 𝑑𝑥 indica que estamos integrando em relação à variável 𝑋.


           Receita Federal (Analista Tributário) Estatística                                                             6
           www.estrategiaconcursos.com.br                                                                                85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

        ii)      Se a integral for somente de uma constante, teremos:

                                                     ∫ 𝑎. 𝑑𝑥 = 𝑎. 𝒙

        Isso porque se considera que a constante está multiplicada por 𝑥 𝟎 = 1. Logo, o resultado
                        𝒙𝟎+𝟏
        da integral é          =𝒙
                        𝟎+𝟏


        Por exemplo, ∫ 𝑑𝑥 = ∫ 1. 𝑑𝑥 = 𝒙,            ∫ 3. 𝑑𝑥 = 3𝒙


        iii)     A integral de uma potência de 𝑥 na base 𝑒 (constante neperiana 𝑒 ≅ 2,718) é ela
                 mesma:

                                                     ∫ 𝒆𝒙 𝑑𝑥 = 𝒆𝒙

        Além disso, quando há uma soma ou subtração de uma constante no expoente com base
        𝑒, a integral também permanece a mesma expressão:

        Por exemplo: ∫ 𝒆(𝒙+𝟒) 𝑑𝑥 = 𝒆(𝒙+𝟒),           ∫ 𝒆(𝒙−𝟑) 𝑑𝑥 = 𝒆(𝒙−𝟑)


        iv)      A integral de uma soma (ou subtração) de expressões equivale à soma (ou
                 subtração) das integrais de cada expressão.

        Por exemplo: ∫(𝒙𝟒 + 𝟑𝒙𝟐 − 𝒙 + 𝟐) . 𝑑𝑥 = ∫ 𝒙𝟒 𝒅𝒙 + ∫ 𝟑𝒙𝟐 𝒅𝒙 − ∫ 𝑥. 𝑑𝑥 + ∫ 𝟐. 𝒅𝒙

        O resultado da integral, chamado de integrando, pode ser indicado por 𝑭(𝒙).

Para calcular a área sob a função em determinado intervalo, precisaremos calcular a integral definida nesse
intervalo, se não for possível utilizar as fórmulas de geometria básica. Para um intervalo (a,b) qualquer:

                                                            𝒃
                                 𝑃(𝒂 < 𝑋 < 𝒃) = ∫ 𝑓 (𝑥 ). 𝑑𝑥 = 𝐹 (𝒃) − 𝐹 (𝒂)
                                                        𝒂

                                                                      𝑃 (𝒂 < 𝑋 < 𝒃)

                                             𝑓(𝑥)

                                                        a       b

Assim, depois de calcularmos o integrando 𝐹 (𝑥 ), aplicamos no ponto 𝒙 = 𝒃 (limite superior do intervalo) e
subtraímos o integrando no ponto 𝒙 = 𝒂 (limite inferior do intervalo).

        Receita Federal (Analista Tributário) Estatística                                                7
        www.estrategiaconcursos.com.br                                                                  85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Por exemplo, vamos calcular a probabilidade associada ao intervalo (0,5; 0,6) para 𝑓(𝑥 ) = 3𝑥 2 :

                                                            𝑃 (𝟎, 𝟓 < 𝑋 < 𝟎, 𝟔)

                                            𝑓(𝑥) = 3𝑥 2


                                                              0,5    0,6

Para isso, precisamos calcular a integral de 𝑓(𝑥 ) = 3𝑥 2 definida no intervalo (0,5; 0,6). O primeiro passo, é
calcular o resultado da integral, independentemente do intervalo (isto é, o integrando):

                                                                𝑥 2+1      𝑥3
                                 𝑭(𝒙) = ∫ 𝟑𝑥 𝟐 . 𝑑𝑥 = 𝟑 ×             = 3×    = 𝒙𝟑
                                                                2+1        3

Agora, aplicamos o resultado 𝑭(𝒙) = 𝒙𝟑 nos pontos 𝒙 = 𝟎, 𝟓 e 𝒙 = 𝟎, 𝟔:

                                               𝑭(𝟎, 𝟓) = 𝟎, 𝟓𝟑 = 𝟎, 𝟏𝟐𝟓

                                               𝑭(𝟎, 𝟔) = 𝟎, 𝟔𝟑 = 𝟎, 𝟐𝟏𝟔

Por fim, subtraímos esses valores:

                             𝑷(𝟎, 𝟓 < 𝑿 < 𝟎, 𝟔) = 0,216 − 0,125 = 𝟎, 𝟎𝟗𝟏 = 𝟗, 𝟏%

A seguir, representamos o integrando 𝐹 (𝑥 ) = 𝑥 3 e seus valores para 𝑥 = 0,5 e para 𝑥 = 0,6. A sua diferença
corresponde à área da f.d.p. 𝑓 (𝑥 ) = 3𝑥 2 no intervalo entre 𝑥 = 0,5 e 𝑥 = 0,6 e, consequentemente, à
probabilidade associada a tal intervalo.

                                                                              𝐹(𝑥) = 𝑥 3

                    0,216

                                 0,091
                     0,125

        Receita Federal (Analista Tributário) Estatística                                                   8
        www.estrategiaconcursos.com.br                                                                      85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Atenção! Devemos aplicar o resultado da integral 𝐹(𝑥), no ponto 𝑏 e, em seguida, no ponto 𝑎, para então
subtrair os resultados 𝐹 (𝑏) − 𝐹(𝑎).
Não podemos calcular a diferença 𝑏 − 𝑎 e, em seguida, aplicar essa diferença no integrando 𝐹(𝑏 − 𝑎), o que
corresponderia, no exemplo anterior, a 𝐹 (0,6 − 0,5) = (0,6 − 0,5)3 = 0,13 = 0,001.
Os resultados são muito diferentes!

        Para variáveis contínuas, não importa se definimos um intervalo com sinal "<" (menor que)
        ou "≤" (menor ou igual).

        Como a probabilidade de ser igual a um valor específico é zero, então ambos os sinais
        correspondem à mesma probabilidade.

                     𝑃 (𝑎 < 𝑋 < 𝑏 ) = 𝑃 (𝑎 ≤ 𝑋 ≤ 𝑏 ) = 𝑃 (𝑎 ≤ 𝑋 < 𝑏 ) = 𝑃 ( 𝑎 < 𝑋 ≤ 𝑏 )

        Isso também vale para os sinais ">" e "≥".

Vimos que a probabilidade associada a todo o Espaço Amostral é igual a 1, certo? Então, para uma f.d.p. cujo
valor mínimo é 𝒙𝑰 e o valor máximo é 𝒙𝑺, a integral definida nesse intervalo é igual a 1, ou seja:

                                                            𝒙
                                              𝑃(𝑆) = ∫𝒙 𝑺 𝑓(𝑥). 𝑑𝑥 = 1
                                                            𝑰

                                                                1


                                      𝒙𝑰                                   𝒙𝑺


Se a f.d.p. apresentar uma função para toda a reta real, então temos 𝒙𝑰 = −∞ e 𝒙𝑺 = ∞.

        Receita Federal (Analista Tributário) Estatística                                                 9
        www.estrategiaconcursos.com.br                                                                   85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

         É possível que uma variável tenha uma função para um intervalo e outra função para outro
         intervalo, conforme exemplo da Banca CEBRASPE abaixo.

                                                    2
                                                        𝑥,                        𝑠𝑒 0 ≤ 𝑥 < 1
                                                    3
                                        𝑓 (𝑥 ) = { − 𝑥 + 5 ,                      𝑠𝑒 1 ≤ 𝑥 ≤ 3 }
                                                        4                 6
                                                   0,                         𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜

         Essa f.d.p. apresenta uma função para o intervalo de 0 a 1 e outra função para o intervalo
                                                             ==219a34==

         de 1 a 3, como ilustrado abaixo.

                                        0               1                         2            3

         Nesse caso, se for necessário integrar em relação a um intervalo que envolva ambas as
         funções, como o intervalo de 0,5 a 1,5, teremos que separar a integral em duas.

                                              2
         Primeiro, integramos a função 𝑥, no intervalo de 0,5 a 1 e depois integramos a função
                                              3
            𝑥   5
         − 4 + 6, no intervalo de 1 a 1,5. Em seguida, devemos somar os resultados dessas integrais,
         para encontrar a probabilidade associada a todo o intervalo de 0,5 a 1,5.

                                                             𝟏                2          𝟏,𝟓       𝑥   5
                              𝑃(𝟎, 𝟓 < 𝑥 < 𝟏, 𝟓) = ∫𝟎,𝟓 (3 𝑥) 𝑑𝑥 + ∫𝟏 (− 4 + 6) 𝑑𝑥

(VUNESP/2014 – TJ-PA) Uma variável aleatória contínua tem uma função de probabilidade dada por f(x) =
K.x, válida apenas no intervalo 1≤ x ≤ 2. Fora desse intervalo f(x) = 0. De acordo com isso o valor de K é:
a) 1/3
b) 2/3


         Receita Federal (Analista Tributário) Estatística                                                 10
         www.estrategiaconcursos.com.br                                                                    85

                                       


---

    Equipe Exatas Estratégia Concursos
    Aula 09

c) 1/2
d) 1
e) 2
Comentários:
Para resolver essa questão, devemos considerar que a probabilidade de todo o Espaço Amostral é igual a 1.
Para isso, podemos integrar a função f(x) ou, como essa função é uma reta 3, basta calcularmos a área
delimitada por essa função, indicada abaixo.

                                                              Área

Podemos observar que essa região é um trapézio, cuja área é dada por:
                                                (𝐵 + 𝑏) × ℎ
                                                      𝐴=
                                                      2
A altura h do trapézio corresponde à amplitude do intervalo:
                                                          h=2–1=1
A base menor b corresponde ao valor da função para x = 1. Como f(x) = K.x, então:
                                                       b = f(1) = K.1 = K
A base maior corresponde ao valor da função para x = 2:
                                                      B = f(2) = K.2 = 2K
Substituindo esses valores na fórmula da área, temos:
                                                        (2𝐾 + 𝐾) × 1
                                                  𝐴=                 =1
                                                             2
                                                          3𝐾 = 2
                                                                   2
                                                              𝐾=
                                                                   3
Gabarito: B.

3
 Podemos concluir que a função f(x) = K.x é uma reta, pois x está elevado ao expoente 1 (f(x) = K.x 1). Se x estivesse elevado a 0,
ou seja, se a função fosse da forma f(x) = K.x0 = K, então, teríamos uma reta paralela ao eixo X.
Se o expoente fosse igual a 2 ou superior, teríamos uma curva e precisaríamos integrar a função para calcular a probabilidade
associada.


          Receita Federal (Analista Tributário) Estatística                                                                     11
          www.estrategiaconcursos.com.br                                                                                        85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

(FCC/2018 – Analista Judiciário do TRT da 14ª Região) Os sinistros de uma companhia de seguros (em R$
milhões) são modelados por uma variável aleatória contínua X com função densidade de probabilidade dada
por:
                                                                2
                                                  𝑓 (𝑥 ) =            ,       𝑥>0
                                                             (1 + 𝑥)3
A probabilidade de um sinistro, aleatoriamente escolhido, exceder R$ 1,5 milhões é
a) 0,1536.
b) 0,128.
c) 0,84.
d) 0,16.
e) 0,8464.
Comentários:
A probabilidade de o sinistro exceder 1,5 milhões P(X > 1,5) pode ser calculada como o complementar da
probabilidade de ele não exceder tal valor:

                                                𝑃 (𝑋 > 1,5) = 1 − 𝑃(𝑋 ≤ 1,5)

Para calcular a probabilidade 𝑃 (𝑋 ≤ 1,5), primeiro calculamos a integral da função:

                               2                          −3
                                                                        (1 + 𝑥)−3+1       (1 + 𝑥)−2
               𝐹 (𝑥 ) = ∫            . 𝑑𝑥 = ∫ 2 × (1 + 𝑥)    . 𝑑𝑥 = 2 ×             = 2 ×
                            (1 + 𝑥)3                                      −3 + 1             −2

                                                                                 1
                                              𝐹 (𝑥 ) = −(1 + 𝑥)−2 = −
                                                                              (1 + 𝑥 )2

Agora, aplicamos os limites, com 𝑥 > 0, conforme enunciado:
                                     𝑃 (𝑋 ≤ 1,5) = 𝑃(0 < 𝑋 ≤ 1,5) = 𝐹 (1,5) − 𝐹(0)
                                                                   1
                                               𝐹(1,5) = −                 = −0,16
                                                               (1 + 1,5)2
                                                                   1
                                                    𝐹 (0) = −            = −1
                                                                (1 + 0)2
4Logo:


                          𝑃 (𝑋 ≤ 1,5) = 𝐹 (1,5) − 𝐹 (0) = −0,16 − (−1) = 1 − 0,16 = 0,84

Então, a probabilidade de exceder esse valor é complementar:

                                    𝑃 (𝑋 > 1,5) = 1 − 𝑃(𝑋 ≤ 1,5) = 1 − 0,84 = 0,16
Gabarito: D.

4
    Observe que a integral aplicada no extremo inferior do intervalo, F(0), foi diferente de zero, nesse caso.


            Receita Federal (Analista Tributário) Estatística                                                    12
            www.estrategiaconcursos.com.br                                                                       85

                                            


---

   Equipe Exatas Estratégia Concursos
   Aula 09

(FCC/2009 – Analista Judiciário do TJ/AP) Se X é uma variável aleatória contínua com função densidade de
probabilidade dada por:
                                                   𝑘 (1 − 𝑥 2 ) ,   𝑠𝑒 0 < 𝑥 ≤ 1
                                        𝑓 (𝑥 ) = {                               }
                                                  0,              𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜
Então o valor de k deve ser
a) 0,5.
b) 0,75.
c) 1.
d) 1,5.
e) 2.
Comentários:
Para encontrar o valor de K, precisamos considerar que a probabilidade de todo o Espaço Amostral é igual a
1. Para isso, precisamos integrar a f.d.p.:

                        𝐹 (𝑥 ) = ∫ 𝑘(1 − 𝑥 2 )𝑑𝑥 = ∫(𝑘 − 𝑘. 𝑥 2 )𝑑𝑥 = ∫ 𝑘. 𝑑𝑥 − ∫ 𝑘. 𝑥 2 𝑑𝑥

Calculando as integrais em separado, temos:

                                                       ∫ 𝑘. 𝑑𝑥 = 𝑘 × 𝑥

                                                   2
                                                            𝑥 2+1     𝑥3
                                            ∫ 𝑘. 𝑥 𝑑𝑥 = 𝑘 ×       =𝑘×
                                                            2+1       3
Logo:
                                                           𝑥3
                                      𝐹 (𝑥 ) = 𝑘 × 𝑥 − 𝑘 ×
                                                           3
Como 𝟎 < 𝑥 ≤ 1, então aplicamos esse resultado em 𝒙 = 𝟎 e em 𝒙 = 𝟏:
                                                               𝟏
                                    𝑃(𝟎 < 𝑋 ≤ 𝟏) = ∫ 𝑓 (𝑥 ). 𝑑𝑥 = 𝐹 (𝟏) − 𝐹(𝟎)
                                                           𝟎

                                                𝟏3                  𝟎3    𝑘 2. 𝑘
                       𝑃(0 < 𝑋 ≤ 1) = 𝑘 × 𝟏 − 𝑘 ×  −𝑘×𝟎−𝑘×             =𝑘− =
                                                3                   3     3  3
Essa probabilidade de todo o Espaço Amostral precisa ser igual a 1:
                                                                     2. 𝑘
                                                𝑃(0 < 𝑋 ≤ 1) =            =1
                                                                      3
                                                           𝑘 = 1,5
Gabarito: B.

           Receita Federal (Analista Tributário) Estatística                                           13
           www.estrategiaconcursos.com.br                                                              85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

                       FUNÇÃO DE DISTRIBUIÇÃO ACUMULADA
Assim como para variáveis discretas, a função de distribuição acumulada (f.d.a. ou função de distribuição
cumulativa ou, simplesmente, função de distribuição) para variáveis contínuas também é definida como a
probabilidade acumulada desde o início até o ponto indicado 𝒙:

                                                        𝑭𝑨 (𝒙) = 𝑃(𝑋 ≤ 𝒙)

Ou seja, a f.d.a. corresponde ao total das probabilidades desde o extremo inferior da distribuição até o ponto
𝒙. Para variáveis contínuas, esse total é calculado pela integral da f.d.p., no intervalo entre o limite inferior1
𝒙𝑰 e o ponto 𝒙:

                                                                               𝒙
                                               𝑭𝑨 (𝒙) = 𝑃(𝑋 ≤ 𝒙) = ∫ 𝑓(𝑥). 𝑑𝑥
                                                                              𝒙𝑰


                                                     𝑭𝑨 (𝒙) = 𝐹(𝒙) − 𝐹(𝒙𝑰 )

Por exemplo, vamos supor que a f.d.p. seja 𝑓(𝑥) = 9𝑥 2 , para 𝒙 ≥ 𝟎. Para calcular a f.d.a., primeiro
calculamos a integral dessa função, sem nos preocupar com o intervalo.

                                                                     𝑥 2+1     𝑥3
                                     𝐹(𝑥) = ∫ 9𝑥 2 . 𝑑𝑥 = 9 ×              =9×    = 3. 𝑥 3
                                                                     2+1       3

A f.d.a. corresponde à diferença entre essa integral aplicada no ponto 𝒙 e no limite inferior 𝒙𝑰 . Nesse
exemplo, o limite inferior é 𝒙𝑰 = 𝟎, então:

                                      𝑭𝑨 (𝒙) = 𝐹(𝒙) − 𝐹(𝟎) = 3. 𝑥 3 − 3. (0)3 = 𝟑. 𝒙𝟑

             Nesse caso, a f.d.a. 𝑭𝑨 (𝒙) foi exatamente igual à integral da f.d.p. 𝑭(𝒙). Isso ocorreu
             porque a integral aplicada no limite inferior foi nula, 𝑭(𝒙𝑰 ) = 0, mas nem sempre isso irá
             ocorrer.

1
    Mais precisamente, a f.d.a. é definida como a integral da f.d.p. de menos infinito até o ponto 𝒙:
                                                                          𝒙
                                                  𝐹(𝒙) = 𝑃(𝑋 ≤ 𝒙) = ∫ 𝑓(𝑥). 𝑑𝑥
                                                                         −∞

            Receita Federal (Analista Tributário) Estatística                                                  14
            www.estrategiaconcursos.com.br                                                                     85

                                            


---

     Equipe Exatas Estratégia Concursos
     Aula 09

O valor probabilidade acumulada em 𝒙 = 𝟎, 𝟓, por exemplo, é:

                                        𝑭𝑨 (𝟎, 𝟓) = 𝟑. (𝟎, 𝟓)𝟑 = 3 × 0,125 = 0,375

O gráfico da f.d.a. 𝑭𝑨 (𝒙) = 𝟑. 𝒙𝟑 é:

             A função de distribuição acumulada apresenta as seguintes características (são as mesmas
             da função de distribuição acumulada das variáveis discretas):

             i)       𝐹𝐴 é não decrescente, pois as probabilidades são sempre acrescidas.


             ii)      Por ser uma probabilidade, a f.d.a. assume valores entre 0 e 1:

                                                         𝟎 ≤ 𝑭𝑨 (𝒙) ≤ 𝟏

             Na verdade, para valores menores ou iguais ao extremo inferior do intervalo 𝒙𝑰 , a f.d.a. é
             igual a 0 e para valores maiores ou iguais ao extremo superior do intervalo 𝒙𝑺 , a f.d.a. é
             igual a 12:

                                                    𝐹𝐴 (𝑥) = 𝟎, 𝑝𝑎𝑟𝑎 𝑥 ≤ 𝒙𝑰

                                                    𝐹𝐴 (𝑥) = 𝟏, 𝑝𝑎𝑟𝑎 𝑥 ≥ 𝒙𝑺

2
    Mais precisamente, a f.d.a. é igual a 𝟎 quando x tende a menos infinito e igual a 𝟏 quando x tende a mais infinito:
                                                  lim 𝐹(𝑥) = 𝟎,        lim 𝐹(𝑥) = 𝟏
                                                 𝑥→−∞                 𝑥→∞

            Receita Federal (Analista Tributário) Estatística                                                             15
            www.estrategiaconcursos.com.br                                                                                85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Para o nosso exemplo, em que a f.d.a. é 𝑭𝑨 (𝒙) = 𝟑. 𝒙𝟑 , sabemos que o extremo inferior é 𝒙𝑰 = 𝟎. Então,
vamos calcular o extremo superior dessa variável, isto é, o valor de 𝒙𝑺 para o qual a f.d.a. é 𝐹(𝒙𝑺 ) = 𝟏.

                                                 𝑭𝑨 (𝒙𝑺 ) = 𝟑. 𝒙𝑺 𝟑 = 𝟏

                                                                           1
                                                            𝑥𝑆 3 =
                                                                           3

                                                        3 1
                                                   𝑥𝑆 = √ ≅ 0,69
                                                          3

Ou seja, a função de distribuição acumulada para essa variável pode ser descrita como:

                                                        𝟎    ==219a34==
                                                                               𝑠𝑒 𝑥 ≤ 𝟎
                                                                                       𝟑   𝟏
                                                       𝟑𝒙𝟑                𝑠𝑒 𝟎 < 𝑥 < √
                                        𝐹𝐴 (𝑥) =                                           𝟑

                                                                                   𝟑   𝟏
                                                        𝟏                   𝑠𝑒 𝑥 ≥ √
                                                   {                                   𝟑 }

                                                                                            u  lo
                                                                                       Cálc


        Para resolver algumas integrais, por exemplo, ∫ 𝑥. 𝑒 𝑥 . 𝑑𝑥, é necessário aplicar a técnica de
        integração por partes:

                                               ∫ 𝑢. 𝑑𝑣 = 𝑢. 𝑣 − ∫ 𝑣. 𝑑𝑢

        Para aplicar essa técnica, é necessário chamar alguma parte da expressão original de 𝑢 e
        outra de 𝑑𝑣 e, em seguida, calcular 𝑑𝑢 (a derivada de 𝑢) e 𝑣 (a integral de 𝑑𝑣), de modo
        que ∫ 𝑣. 𝑑𝑢 seja calculável.

        Para ∫ 𝑥. 𝑒 𝑥 . 𝑑𝑥, fazemos 𝑢 = 𝑥 (cuja derivada é 𝑑𝑢 = 𝑑𝑥) e 𝑑𝑣 = 𝑒 𝑥 . 𝑑𝑥 (cuja integral é
        𝑣 = 𝑒 𝑥 ). Aplicando a integração por partes, temos:

                            ∫ 𝑥. 𝑒 𝑥 . 𝑑𝑥 = 𝑥. 𝑒 𝑥 − ∫ 𝑒 𝑥 . 𝑑𝑥 = 𝑥. 𝑒 𝑥 − 𝑒 𝑥 = 𝑒 𝑥 (𝑥 − 1)

        Receita Federal (Analista Tributário) Estatística                                                16
        www.estrategiaconcursos.com.br                                                                   85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

(CESPE/2011 – Analista de Correios) Julgue o próximo item, referentes à probabilidade e às variáveis
aleatórias.
A função de distribuição cumulativa de uma variável aleatória é sempre uma função decrescente e assume
valores no intervalo [0,1].
Comentários:
A função de distribuição acumulada, ou cumulativa, é uma função crescente, com valores entre 0 e 1.
Gabarito: Errado.


(FCC/2012 – Analista Judiciário do TRF da 2ª Região) Uma variável aleatória contínua tem função densidade
de probabilidade dada por:
                                                      2
                                             𝑓(𝑥) = { 𝑥 3 ,     𝑠𝑒 1 ≤ 𝑥 < ∞ }
                                                     0,        𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜
Se F(x) é a função de distribuição de X, então F(2) é igual a
a) 0,40.
b) 0,56.
c) 0,75.
d) 0,80.
e) 0,82.
Comentários:
Para calcular a função de distribuição acumulada, primeiro calculamos a integral de f(x):
                               2                  −3
                                                                𝑥 −3+1       𝑥 −2             1
                  𝐹(𝑥) = ∫       3
                                   . 𝑑𝑥 = ∫ 2 × 𝑥    . 𝑑𝑥 = 2 ×        = 2 ×      = −𝑥 −2 = − 2
                               𝑥                                −3 + 1       −2              𝑥
A f.d.a. é a diferença entre essa integral aplicada no ponto 𝒙 e no limite inferior. No caso, o limite inferior da
f.d.p. descrita no enunciado é 𝒙𝑰 = 𝟏
                                                                 1       1          1
                                  𝑭𝑨 (𝒙) = 𝐹(𝒙) − 𝐹(𝟏) = −          − (−    ) = 1 −
                                                                 𝒙2      𝟏2         𝒙2
Assim, a f.d.a. no ponto desejado 𝒙 = 𝟐 é:
                                                     1        1
                                      𝑭(𝟐) = 1 −       2
                                                         = 1 − = 1 − 0,25 = 0,75
                                                     𝟐        4
Gabarito: C.

           Receita Federal (Analista Tributário) Estatística                                                   17
           www.estrategiaconcursos.com.br                                                                      85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

      MEDIDAS DE TENDÊNCIA CENTRAL E DE DISPERSÃO
Agora, veremos como calcular as medidas de tendência central (mediana, moda e média) e de dispersão
(variância e desvio padrão).


Mediana

A mediana divide a distribuição em duas partes iguais, de modo que metade das observações são superiores
e metade das observações são inferiores, ou seja:

                                             𝑃(𝑋 ≤ 𝒙𝑴𝒅 ) = 50% = 0,5

Sabendo que a probabilidade 𝑃(𝑋 ≤ 𝒙𝑴𝒅 ) corresponde à função de distribuição acumulada (f.d.a.) no ponto
𝒙𝑴𝒅 , podemos calcular a mediana 𝒙𝑴𝒅 , a partir da f.d.a.:

                                           𝐹(𝒙𝑴𝒅 ) = 𝑃(𝑋 ≤ 𝒙𝑴𝒅 ) = 0,5

        Vamos calcular a mediana para a f.d.a. 𝐹(𝑥) = 3𝑥 3 :

                                                            3
                                                𝐹(𝑥𝑀𝑑 ) = 3𝑥𝑀𝑑 = 0,5

                                                         3          1
                                                        𝑥𝑀𝑑 =6

                                                            3   1
                                                  𝑥𝑀𝑑 = √6 ≅ 0,55

        O gráfico abaixo representa a função acumulada 𝐹(𝑥) = 3𝑥 3 e a reta vermelha representa
        a mediana, que divide a distribuição em duas partes iguais. Isso significa que a área sob a
        curva para cada uma das partes é igual a 0,5.

        Receita Federal (Analista Tributário) Estatística                                             18
        www.estrategiaconcursos.com.br                                                                85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Quando somamos, subtraímos, multiplicamos ou dividimos uma constante dos valores da distribuição, a
mediana também sofrerá o mesmo efeito, isto é, também será somada, subtraída, multiplicada ou dividida
pela mesma constante:
                                             𝑀𝑑(𝑋 + 𝑎) = 𝑀𝑑(𝑋) + 𝑎
                                             𝑀𝑑(𝑋 − 𝑎) = 𝑀𝑑(𝑋) − 𝑎
                                              𝑀𝑑(𝑋 ∗ 𝑎) = 𝑀𝑑(𝑋) ∗ 𝑎
                                             𝑀𝑑(𝑋 ÷ 𝑎) = 𝑀𝑑(𝑋) ÷ 𝑎
Afinal, a mediana é um valor da distribuição. Se todos os valores são duplicados, por exemplo, a mediana
também será duplicada.

(CESPE/2011 – FUB) Considerando que X, Y e Z sejam variáveis aleatórias, que a seja uma constante não nula
e que E, Md, Var, Cov, denotem, respectivamente, esperança, mediana, variância, covariância, primeiro
quartil e terceiro quartil, julgue o item a seguir.
Md(X + a) = Md(X)
Comentários:
Quando somamos uma constante a uma distribuição X, todos os valores da distribuição são somados a essa
constante. Em particular, a mediana também é somada a essa constante:
                                                Md(X + a) = Md(X) + a
Gabarito: Errado.

Moda

A moda corresponde ao valor com maior probabilidade.
A moda pode ser visualmente identificada, a partir do gráfico da f.d.p., pois é o valor de 𝑥 associado ao maior
valor da função densidade de probabilidade, 𝑓(𝑥).

        Receita Federal (Analista Tributário) Estatística                                                   19
        www.estrategiaconcursos.com.br                                                                      85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

        Se a f.d.p., definida em determinado intervalo, for uma função que sabemos ser
        decrescente ou crescente, então a moda será o menor ou maior valor, respectivamente,
        do intervalo da variável.

                         Moda                                                                Moda

        Se a f.d.p. for uma parábola com concavidade voltada para cima, a moda será o menor ou
        o maior valor (ou ambos) do intervalo da variável. Nessa situação, teste os dois extremos
        para saber qual corresponde ao maior valor da f.d.p.; ou se ambos apresentam o mesmo
        valor, caso em que haverá duas modas.

                                                 Moda(?)           Moda(?)

        Se for uma parábola com concavidade voltada para baixo, a moda será a média entre as
        raízes. Raízes são os valores de x para os quais a função é igual a zero.

                                                                                   𝑟𝑎𝑖𝑧1 + 𝑟𝑎𝑖𝑧2
                                                                            𝑀𝑜 =
                                                                                         2

                                                Raiz 1             Raiz 2
                                                            Moda

Porém, se não for possível identificar a moda dessa forma, será necessário calcular a derivada da f.d.p. O
valor da moda será, então, o valor de 𝑥 para o qual a derivada da f.d.p. é igual a zero.
                                                             𝒅[𝒇(𝒙𝑴𝒐 )]
                                             𝒇′(𝒙𝑴𝒐 ) =                 =𝟎
                                                                𝒅𝒙


        Receita Federal (Analista Tributário) Estatística                                              20
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 09


                                                                             u    lo
                                                                        Cálc

        A derivada1 de uma função é o inverso da integral, ou seja, se a integral de uma função f é
        F, então a derivada de F é igual a f. Assim, temos:

        i)      A derivada de uma variável 𝑥 qualquer, elevada a uma constante 𝒂 é:

                                                       𝑑(𝑥 𝒂 )
                                                                 = 𝑎. 𝑥 𝒂−𝟏
                                                         𝑑𝑥

        Por exemplo:

                                                   𝑑(𝑥 𝟒 )
                                                             = 4. 𝑥 𝟒−𝟏 = 4𝑥 3
                                                    𝑑𝑥

                                            𝑑(𝑥 −𝟐 )
                                                       = −𝟐. 𝑥 −𝟐−𝟏 = −2𝑥 −3
                                              𝑑𝑥

                                                                 𝑑(𝑎)
        ii)     A derivada de uma constante é zero: 𝑑𝑥 = 0

        Por exemplo:

                                            𝑑(5)                          𝑑(20)
                                                   = 0,                           =0
                                            𝑑𝑥                             𝑑𝑥

1 A derivada de uma função representa a sua variação, isto é, o quanto a função está crescendo ou decrescendo em cada

ponto. Por exemplo, a função f(x) = 2x está sempre dobrando de valor. Por isso, a derivada dessa função é igual a 2 em todos
os pontos.
Assim, quando igualamos a derivada de uma função a zero, estamos buscando o ponto em que ela não cresce e nem
decresce. O ponto encontrado pode ser um ponto de máximo ou de mínimo, conforme ilustrado a seguir:

No gráfico laranja, o ponto x = 1 corresponde a um ponto de mínimo e, no gráfico roxo, o ponto x = 1 corresponde a um
ponto de máximo. Em ambos os casos, a função não cresce e nem decresce nesse ponto, logo a derivada é igual a zero em
x = 1 para ambas as funções.
Quando igualamos a derivada a zero e verificamos que o ponto encontrado é um ponto de máximo, como é o caso de x = 1
para a curva roxa, podemos concluir que o valor de X encontrado corresponde à moda da função.


         Receita Federal (Analista Tributário) Estatística                                                               21
         www.estrategiaconcursos.com.br                                                                                  85

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 09

           iii)    A derivada de uma função qualquer 𝑓(𝑥) multiplicada por uma constante 𝒂 é igual
                   ao produto da constante pela derivada da função. Por exemplo:

                                               𝑑(𝒂.𝑥 𝒃 )          𝑑(𝑥 𝒃 )
                                                           = 𝑎.             = 𝑎. 𝒃. 𝑥 𝒃−𝟏
                                                 𝑑𝑥                 𝑑𝑥

           iv)     A derivada de 𝑒 𝑥 é o próprio 𝑒 𝑥 :2

                                                             𝑑(𝒆𝒙 )
                                                                      = 𝒆𝒙
                                                               𝑑𝑥

           v)      A derivada da soma de funções 𝒇(𝒙) e 𝒈(𝒙) é igual à soma das derivadas:

                                              𝑑(𝑓(𝑥)+ 𝑔(𝑥))           𝑑(𝑓(𝑥))       𝑑(𝒈(𝒙))
                                                                  =             +
                                                      𝑑𝑥                 𝑑𝑥           𝑑𝑥


Por exemplo, suponha que 𝑓(𝑥) = 𝑥 − 𝑥 2 , 𝑝𝑎𝑟𝑎 𝑥 ∈ [0,1] seja uma f.d.p.
Para encontrar a moda, vamos primeiro derivá-la:
                                𝑑
                                   (𝑥 − 𝑥 2 ) = 𝟏. 𝑥 𝟏−𝟏 − 𝟐. 𝑥 𝟐−𝟏 = 𝑥 𝟎 − 𝟐. 𝑥 𝟏 = 1 − 2𝑥
                                𝑑𝑥
A moda corresponde ao valor de 𝑥 para o qual essa derivada seja nula, logo:
                                                             1 − 2𝑥 = 0
                                                                  𝑥 = 0,5
Como a função 𝑓(𝑥) = 𝑥 − 𝑥 2 tem a sua concavidade voltada para baixo, uma vez que o termo elevado ao
quadrado está com o sinal negativo, então o ponto encontrado é um ponto de máximo e, assim, concluímos
que 𝑥 = 0,5 corresponde, de fato, à moda da função.

(FCC/2011 – Analista Judiciário do TRT da 1ª Região) Considere a variável aleatória contínua X com função
densidade de probabilidade dada por:
                                                    12𝑥 2 (1 − 𝑥),   𝑠𝑒 0 < 𝑥 < 1
                                        𝑓(𝑥) = {                                  }
                                                    0,             𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜
Se Mo (X) representa a moda de X, então P [X ≤ Mo (X)] é igual a

2
    Esse é um caso particular da derivada da potência em uma base 𝑏 qualquer:
                                                            𝑑(𝑏 𝑥 )
                                                                    = 𝑏 𝑥 . ln 𝑏
                                                             𝑑𝑥


            Receita Federal (Analista Tributário) Estatística                                         22
            www.estrategiaconcursos.com.br                                                            85

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 09

a) 16/27.
b) 8/27.
c) 16/81.
d) 8/81.
e) 32/81.
Comentários:
Para calcular a moda de X, primeiro calculamos a derivada da f.d.p., que pode ser escrita como
                                          𝑓(𝑥) = 12𝑥 2 (1 − 𝑥) = 12𝑥 2 − 12𝑥 3
A sua derivada é, portanto:
                    𝑑
                      (12𝑥 2 − 12𝑥 3 ) = 12 × 𝟐. 𝑥 𝟐−1 − 12 × 𝟑. 𝑥 𝟑−1 = 24. 𝑥 − 36. 𝑥 2
                   𝑑𝑥
No ponto 𝑥 = 𝑥𝑀𝑜 , a derivada é igual a 0:
                                                                  2
                                                   24. 𝑥𝑀𝑜 − 36. 𝑥𝑀𝑜 =0
Sendo 𝑥𝑀𝑜 ≠ 0, tendo em vista o intervalo de X fornecido no enunciado, podemos dividir toda a equação
por 12. 𝑥𝑀𝑜 :
                                                        2 − 3𝑥𝑀𝑜 = 0
                                                          2
                                                     𝑀𝑜(𝑋) = 𝑥𝑀𝑜 =
                                                          3
Esse ponto, de fato, corresponde à moda da função porque a função tem concavidade voltada para baixo,
uma vez que o termo
Para calcular a probabilidade 𝑃(𝑋 ≤ 2/3), primeiro calculamos a integral da f.d.p.:

                              𝐹(𝑥) = ∫(12𝑥 2 − 12𝑥 3 ). 𝑑𝑥 = ∫ 12𝑥 2 . 𝑑𝑥 − ∫ 12𝑥 3 . 𝑑𝑥

Calculando essas integrais em separado, temos:
                                                               𝑥 2+1        𝑥3
                                     ∫ 12𝑥 2 . 𝑑𝑥 = 12 ×             = 12 ×    = 4. 𝑥 3
                                                               2+1          3

                                                               𝑥 3+1        𝑥4
                                     ∫ 12𝑥 3 . 𝑑𝑥 = 12 ×             = 12 ×    = 3. 𝑥 4
                                                               3+1          4

Logo, a f.d.a. é:

                      𝑭𝑨 (𝑥) = 𝐹(𝑥) − 𝐹(0) = 4. 𝑥 3 − 3. 𝑥 4 − [4. (0)3 − 3. (0)4 ] = 4. 𝑥 3 − 3. 𝑥 4
                  2
No ponto 𝑥 = 3, temos:

                      2        2        2 3      2 4 4 × 23 3 × 24 4 × 8 16 16
                𝑃 (𝑋 ≤ ) = 𝑭𝑨 ( ) = 4. ( ) − 3. ( ) =      −      =     −   =
                      3        3        3        3     33     34    27    27 27

Gabarito: A.


           Receita Federal (Analista Tributário) Estatística                                            23
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

(CESPE/2011 – TJ/ES)

A figura acima mostra a função densidade da distribuição normal padrão – 𝑓𝑁(0,1) (𝑥) –, a função densidade
da distribuição normal com média 2 e desvio padrão 1 – 𝑓𝑁(2,1) (𝑥) –, e a combinação entre elas –
𝑓(𝑥) = 0,3 × 𝑓𝑁(0,1) (𝑥) + 0,7 × 𝑓𝑁(2,1) (𝑥). Julgue o item que segue, com relação a essas funções.
A moda da distribuição da combinação 𝑓(𝑥) coincide com a moda de 𝑓𝑁(0,1) (𝑥) ou com a moda de 𝑓𝑁(2,1) (𝑥).
Comentários:
Pelo gráfico, podemos observar que a moda da combinação 𝑓(𝑥) se aproxima da moda de 𝑓𝑁(2,1) (𝑥). Porém,
será que essas modas coincidem?
Por definição, a moda corresponde ao valor de x para o qual a derivada da função densidade é igual a zero
(ou seja, a função densidade não aumenta nem diminui). No ponto x = 2 (moda de 𝑓𝑁(2,1)), a derivada de
𝑓(𝑥) será dada por:
                                  𝑓′(2) = 0,3 × 𝑓′𝑁(0,1) (2) + 0,7 × 𝑓′𝑁(2,1) (2)
Como x = 2 é moda de 𝑓𝑁(2,1) , então a derivada dessa função é nula nesse ponto, logo:
                                              𝑓′(2) = 0,3 × 𝑓′𝑁(0,1) (2)
Porém, o ponto x = 2 não é moda para 𝑓𝑁(0,1) . Pelo contrário, podemos observar que a função está
decrescendo, logo:
                                           𝑓′(2) = 0,3 × 𝑓′𝑁(0,1) (2) < 0
Portanto, o ponto x = 2 não é moda para a combinação 𝑓(𝑥). Nesse ponto, a função já está decrescendo, o
que significa que a moda é inferior a esse valor. Assim, a moda da combinação não coincide nem com
𝑓𝑁(0,1) (𝑥), nem com 𝑓𝑁(2,1) (𝑥).
Gabarito: Errado.

Esperança Matemática

Para o caso discreto, a esperança matemática é definida como:

                                               𝐸(𝑋) = ∑ 𝑥. 𝑃(𝑋 = 𝑥)

Para o caso contínuo, a situação é análoga. Porém, como os elementos não são contáveis, não conseguimos
somá-los. Por isso, substituímos a soma do produto, pela integral do produto.


        Receita Federal (Analista Tributário) Estatística                                              24
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Assim, para uma f.d.p., definida no intervalo de 𝒙𝑰 a 𝒙𝑺 , a esperança é:

                                                            𝒙
                                              𝑬(𝑿) = ∫𝒙 𝑺 𝒙. 𝒇(𝒙) . 𝒅𝒙
                                                            𝑰

                                                                                 𝟑   𝟏
Vamos calcular a esperança para a f.d.p. 𝑓(𝑥) = 9𝑥 2 para 𝟎 < 𝑥 < √𝟑:

                                                  𝟑 𝟏                    𝟑 𝟏
                                                     √                   √
                                                      𝟑                   𝟑
                                      𝐸(𝑋) = ∫        𝑥. 9𝑥 2 . 𝑑𝑥 = ∫         9𝑥 3 . 𝑑𝑥
                                                 𝟎                   𝟎

Primeiro calculamos a integral, sem os limites:

                                                                   𝑥 3+1  9
                                      𝐸(𝑋) = ∫ 9𝑥 3 . 𝑑𝑥 = 9 ×           = 𝑥4
                                                                   3+1 4

Aplicando os limites, temos:

                                                            4
                                                                                     4
                                            9 𝟑 𝟏 9   4
                                                        9 1 ⁄3
                                              √
                                      𝐸(𝑋) = ( ) − (𝟎) = ( )
                                            4   𝟑 4     4 3

         Mais precisamente, a esperança é definida como a integral da f.d.p., multiplicada por 𝑥, de
         menos infinito (menor valor) até mais infinito (maior valor):
                                                            +∞
                                               𝐸(𝑋) = ∫−∞ 𝑥. 𝑓(𝑥). 𝑑𝑥

É possível termos uma f.d.p. com uma função definida para um intervalo e outra função definida para outro
intervalo:

                                                2
                                                   𝑥,    𝑠𝑒 0 ≤ 𝑥 < 1
                                                3
                                       𝑓(𝑥) =      𝑥 5
                                               − + ,     𝑠𝑒 1 ≤ 𝑥 ≤ 3
                                                   4 6
                                              { 0,     𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜 }

        Receita Federal (Analista Tributário) Estatística                                              25
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Nesses casos, precisaremos calcular as integrais em separado e, em seguida somá-las.

                                               𝟏          𝟑
                                               2               𝑥 5
                                  𝐸(𝑋) = ∫ 𝑥. ( 𝑥) 𝑑𝑥 + ∫ 𝑥. (− + ) 𝑑𝑥
                                          𝟎    3         𝟏     4 6

Pontue-se que todas as propriedades de esperança que valem para distribuições discretas também se
aplicam a variáveis contínuas:
        i)       𝑬(𝑿 + 𝒀) = 𝑬(𝑿) + 𝑬(𝒀)
        ii)      𝑬(𝑿 − 𝒀) = 𝑬(𝑿) − 𝑬(𝒀)
        iii)     Se X e Y são independentes, então 𝑬(𝑿. 𝒀) = 𝑬(𝑿). 𝑬(𝒀)
        iv)      𝑬(𝒌. 𝑿) = 𝒌. 𝑬(𝑿)
        v)       𝑬(𝒌) = 𝒌

        Em uma distribuição simétrica e unimodal (somente uma moda), temos Média = Mediana
        = Moda. Nessa situação, podemos nos referir a esse valor central, dizendo que a variável é
        simétrica em torno desse valor.

                                                   Média = Mediana = Moda

As parábolas (equações de 2º grau) com concavidade para baixo são bons exemplos de funções simétricas
em que Média = Mediana = Moda; e esse ponto é igual ao ponto central entre suas raízes.

Já as parábolas com concavidade para cima apresentam modas diferentes, mas são funções simétricas, cuja
média e mediana também são iguais ao ponto central entre suas raízes.

Então, sendo a f.d.p. uma parábola, basta calcular a média de suas raízes (ou o valor da sua única raiz) para
calcular a média (e a mediana) da variável.

        Receita Federal (Analista Tributário) Estatística                                                 26
        www.estrategiaconcursos.com.br                                                                    85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                  3
         Por exemplo, vamos supor 𝑓(𝑥) = 2 (𝑥 − 1)2 , no intervalo (0, 2). Essa função apresenta
         uma única raiz:

                                                      3
                                                          (𝑥 − 1)2 = 0
                                                      2


                                                      (𝑥 − 1)2 = 0

                                                          𝑥−1=0
                                                               ==219a34==

                                                               𝑥=1

         Esse é o valor da esperança (e da mediana) da variável! Vamos verificar?

                                                                                                       2
                              3   2                   3    2                               3 𝑥3   𝑥2
                    𝐸(𝑋) = 2 ∫0 (𝑥 − 1)2 𝑑𝑥 = 2 ∫0 (𝑥 2 − 2𝑥 + 1)𝑑𝑥 = 2 [ 3 − 2 2 + 𝑥]
                                                                                                       0

                                           3 8                              3 8−12+6   3    2
                                  𝐸(𝑋) = 2 (3 − 4 + 2) = 2 (                        )=2×3=1
                                                                                3

No entanto, é importante verificar se o intervalo em que a variável está definida é simétrico em relação ao
ponto calculado. Para o nosso exemplo, o intervalo (0, 2) realmente é simétrico em torno do ponto 𝑥 = 1.

Caso contrário, a f.d.p. não será simétrica em relação ao ponto calculado.

Por exemplo, para 𝑓(𝑥) = 3𝑥 2 , no intervalo (0, 1), a única raiz é 𝑥 = 0, mas a f.d.p. não é simétrica em torno
desse ponto, conforme ilustrado a seguir:

        Receita Federal (Analista Tributário) Estatística                                                    27
        www.estrategiaconcursos.com.br                                                                       85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                                                     ulo
                                                                                Cálc


        Algumas questões exigem que você saiba derivar uma função composta, isto é, uma função
        𝑔 de uma função 𝑓(𝑥), que podemos representar por 𝑔[𝑓(𝑥)], por exemplo, 𝑒 𝑡.𝑥 .

        Para isso, precisamos da regra da cadeia. Segundo ela, a derivada da função composta é a
        derivada da função externa, 𝑔′ [𝑓(𝑥)], multiplicada pela derivada da função interna, 𝑓′(𝑥):

                                            𝑔[𝑓(𝑥)]′ = 𝑔′ [𝑓(𝑥)] × 𝑓′(𝑥)

        A função 𝑒 𝑡.𝑥 tem a função 𝑡. 𝑥 como função interna, 𝑓(𝑥) = 𝑡. 𝑥, que é o expoente de 𝑒:

                                                   𝑔[𝑓(𝑥)] = 𝑒 𝑓(𝑥)

        Sabemos que a derivada de 𝑒 𝑥 é ela mesma, então a derivada da função externa é:

                                               𝑔′ [𝑓(𝑥)] = 𝑒 𝑓(𝑥) = 𝑒 𝑡.𝑥

        Agora, derivamos a função interna, que está no expoente, 𝑓(𝑥) = 𝑡. 𝑥:

                                                       𝑓 ′ (𝑥) = 𝑡

        Então, a derivada de 𝑒 𝑡.𝑥 é o produto:
                                                            ′
                                                     𝑒 𝑡.𝑥 = 𝑡. 𝑒 𝑡.𝑥

        E se precisarmos integrar, em vez de derivar?

        A integral fará a operação contrária: em vez de multiplicarmos por 𝑡 dividimos por 𝑡:

                                                                        𝑒 𝑡.𝑥
                                               𝐹(𝑥) = ∫ 𝑒 𝑡.𝑥 𝑑𝑥 =       𝑡

(FCC/2007 – Analista de Documentação do MPU) O tempo em minutos, X, para a digitação de um texto, é
considerado uma variável aleatória contínua com função densidade de probabilidade dada por:

        Receita Federal (Analista Tributário) Estatística                                             28
        www.estrategiaconcursos.com.br                                                                85

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 09

                                                   1
                                                      ,         𝑠𝑒 0 ≤ 𝑥 < 2
                                                   4
                                            𝑓(𝑥) = 1
                                                      ,         𝑠𝑒 2 ≤ 𝑥 < 6
                                                   8
                                                  {0,         𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜}
O valor esperado de X é
a) 5,0.
b) 4,0.
c) 3,5.
d) 2,5.
e) 1,0.
Comentários:
Nesse caso, temos 2 funções, uma para o intervalo 0 ≤ 𝑥 < 2 e outra para o intervalo 2 ≤ 𝑥 < 6.
Então, precisaremos calcular a integral das 2 funções multiplicadas por 𝑥 em seus respectivos intervalos e,
em seguida, somá-las.
A integral da 1ª função multiplicada por 𝑥 é:
                                             1         1 𝑥1+1  1 𝑥2 𝑥2
                                   𝐸1 (𝑋) = ∫ . 𝑥. 𝑑𝑥 = ×     = ×  =
                                             4         4 1+1 4 2     8
Essa função deve ser aplicada nos limites do intervalo 𝑥 = 0 e 𝑥 = 2:
                                                       22 02 4 1
                                     𝐸1 (2) − 𝐸1 (0) =   −   = =
                                                       8   8  8 2
A integral da 2ª função multiplicada por 𝑥 é:
                                             1         1 𝑥1+1  1 𝑥2 𝑥2
                                   𝐸2 (𝑥) = ∫ . 𝑥. 𝑑𝑥 = ×     = ×  =
                                             8         8 1+1 8 2     16
Essa função deve ser aplicada nos limites do intervalo 𝑥 = 2 e 𝑥 = 6:
                                                         62 22 36 − 4 32
                                   𝐸2 (6) − 𝐸2 (2) =       −   =     =    =2
                                                         16 16   16    16
Agora, basta somar os resultados:
                                                              1
                                                   𝐸(𝑋) =       + 2 = 2,5
                                                              2
Gabarito: D.


(CESPE/2013 – CNJ) A função f(t) mostrada abaixo corresponde à função densidade de probabilidade do
tempo gasto (t, em meses) para se analisar um processo em determinada vara civil. Com relação essa função,
julgue os itens seguintes.

          Receita Federal (Analista Tributário) Estatística                                             29
          www.estrategiaconcursos.com.br                                                                85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                  2
                                                     𝑡,     𝑠𝑒 0 ≤ 𝑡 < 1
                                                  3
                                          𝑓(𝑡) =      𝑡 5
                                                  − + ,     𝑠𝑒 1 ≤ 𝑡 ≤ 3
                                                      4 6
                                                 { 0,     𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜 }


(CESPE/2013 – CNJ) Cada processo demora, em média, pelo menos 1,5 mês para ser analisado.
Comentários:
A média (ou esperança) é dada por:

                                                𝐸(𝑇) = ∫ 𝑥. 𝑓(𝑡) . 𝑑𝑥

Como há funções diferentes para intervalos diferentes, então precisamos fazer o cálculo em separado. Para
                           2
a primeira função 𝑓1 (𝑡) = 3 . 𝑡, temos:
                                  2               2 2      2 𝑡 2+1  2 𝑡 3 2. 𝑡 3
                        𝐸1 (𝑇) = ∫ . 𝑡 × 𝑡. 𝑑𝑡 = ∫ 𝑡 . 𝑑𝑡 = .      = . =
                                  3               3        3 2+1 3 3       9
Aplicando essa função nos limites do intervalo t = 0 e t = 1, temos:
                                                            2. 13 2. 03 2
                                           𝐸(1) − 𝐸(0) =         −     =
                                                              9     9    9
                                      𝑡     5
Para a segunda função 𝑓2 (𝑡) = − 4 + 6, temos:
                            𝑡 5                𝑡 2 5𝑡         1              5
               𝐸2 (𝑇) = ∫ (− + ) × 𝑡. 𝑑𝑡 = ∫ (− + ) . 𝑑𝑡 = ∫ − . 𝑡 2 . 𝑑𝑡 + ∫ . 𝑡. 𝑑𝑡
                            4 6                4   6          4              6
Separando as integrais:
                                    1              1 𝑡 2+1   1 𝑡3  𝑡3
                                 ∫ − . 𝑡 2 . 𝑑𝑡 = − ×      =− × =−
                                    4              4 2+1     4 3   12
                                       5         5 𝑡1+1  5 𝑡 2 5. 𝑡 2
                                      ∫ . 𝑡. 𝑑𝑡 = ×     = × =
                                       6         6 1+1 6 2      12
Somando os resultados:
                                                𝑡 3 5𝑡 2 −𝑡 3 + 5𝑡 2
                                           𝐸2 (𝑇) = −
                                                   +       =
                                                12 12             12
Agora, aplicamos essa função nos limites do intervalo t = 1 e t = 3:
                           −33 + 5. 32 −13 + 5. 12 −27 + 45 −1 + 5 18 − 4 14 7
         𝐸2 (3) − 𝐸2 (1) =            −              =     −      =      =   =
                               12             12        12   12      12    12 6
A esperança é, portanto, a soma desses dois resultados:
                                                   2 7 4 + 21 25
                                          𝐸(𝑇) =    + =      =    ≅ 1,4
                                                   9 6   18    18
Ou seja, a esperança é inferior a 1,5 mês.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                             30
        www.estrategiaconcursos.com.br                                                                85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

(CESPE/2013 – CNJ) O tempo médio para se avaliar sequencialmente 10 processos é superior a 1 ano.
Comentários:
                                                                                 25
Na última questão, calculamos que cada processo demora em média 18 ≅ 1,4 mês para ser analisado. Logo,
considerando as propriedades da esperança, 10 processos levam, em média:
                                                   𝐸(𝑎. 𝑇) = a. 𝐸(𝑇)
                                                            25
                                       𝐸(10. 𝑇) = 10. 𝐸(𝑇) = 10 ×
                                                                ≅ 14
                                                            18
Como 14 meses são superiores a 1 ano (composto de 12 meses), o item está correto.
Gabarito: Certo.


(FGV/2022 – PC/AM) Suponha que X seja uma variável aleatória contínua com a seguinte função densidade
de probabilidade:
                                                           𝑘2𝑥,    0<𝑥<1
                                            𝑓(𝑥) = {                         }
                                                           0, 𝑐𝑎𝑠𝑜 𝑐𝑜𝑛𝑡𝑟á𝑟𝑖𝑜
O valor de k e o valor esperado de X são, respectivamente,
a) 1/2 e 1/2.
b) 1 e 1/2.
c) 1 e 2/3.
d) 1 e 1/3.
e) 2 e 4/3.
Comentários:
Para encontrar o valor de k, precisamos considerar que a probabilidade associada a todos os possíveis valores
da variável (ao Espaço Amostral) é igual a 1. Para variáveis contínuas, a integral da função densidade de
probabilidade (f.d.p.) deve ser igual a 1. Sabendo a f.d.p. 𝑓(𝑥) = 𝑘. 2. 𝑥 se aplica no intervalo (0, 1), temos:
                                                              1
                                               𝑃(𝑈) = ∫ 𝑘. 2. 𝑥. 𝑑𝑥 = 1
                                                             0

Considerando que 𝑘 e 2 são constantes, podemos tirá-los de dentro da integral:
                                        1                         1
                                                   𝑥2          12 02         1
                      𝑃(𝑈) = 𝑘. 2 ∫ 𝑥. 𝑑𝑥 = 𝑘. 2. [ ] = 𝑘. 2. [ − ] = 𝑘. 2. [ ] = 𝑘
                                   0               2 0         2  2          2
Sabendo que essa probabilidade (que corresponde a todo o Espaço Amostral) deve ser igual, temos que 𝑘 =
1 e 𝑓(𝑥) = 2𝑥.
Para calcular a esperança, multiplicamos a f.d.p. por 𝑥 e integramos a função no intervalo da variável (que é
análogo ao caso discreto, em que multiplicamos as probabilidades por 𝑥 e somamos os resultados):
                              1                    1                   1
                                                       2
                                                          𝑥3       13 03      1    2
                   𝐸(𝑋) = ∫ 𝑥. 2𝑥. 𝑑𝑥 = 2. ∫ 𝑥 . 𝑑𝑥 = 2. [ ] = 2. [ − ] = 2. [ ] =
                           0                0             3 0      3  3       3    3
                          2
Sendo 𝑘 = 1 e 𝐸(𝑋) = 3, verificamos que o gabarito é C.


         Receita Federal (Analista Tributário) Estatística                                                   31
         www.estrategiaconcursos.com.br                                                                      85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Observação: Neste caso específico, como a f.d.p. 𝑓(𝑥) = 𝑘. 2. 𝑥 é uma reta, poderíamos ter calculado o valor
de 𝑘 geometricamente. O gráfico a seguir representa a f.d.p., no intervalo (0, 1):

                                          2k

                                           0                            1

Sabendo que a área delimitada (triângulo) deve ser igual a 1, temos:
                                                 𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 1 × 2𝑘
                                       𝐴𝑡𝑟𝑖 =                 =       =1
                                                       2          2
                                                         𝑘=1
Gabarito: C

Variância

A variância de uma variável aleatória 𝑋, seja ela discreta ou contínua, pode ser calculada como:
                                               𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2


Para variáveis discretas, o valor 𝐸(𝑋 2 ) é dado por:

                                               𝐸(𝑿𝟐 ) = ∑ 𝒙𝟐 . 𝑃(𝑋 = 𝑥)

Para variáveis contínuas, substituímos o somatório pela integral e a probabilidade 𝑃(𝑋 = 𝑥) pela f.d.p. 𝑓(𝑥),
definida no intervalo de 𝒙𝑰 a 𝒙𝑺 :

                                                                𝒙
                                               𝑬(𝑿𝟐 ) = ∫𝒙 𝑺 𝒙𝟐 . 𝒇(𝒙). 𝒅𝒙
                                                                𝑰

O termo 𝑬(𝑿𝟐 ) pode ser chamado de segundo momento e a variância 𝑉(𝑋) de segundo momento central.

                                                                                               𝟑   𝟏
Vamos calcular 𝑬(𝑿𝟐 ) para o nosso exemplo, em que a f.d.p. é 𝑓(𝑥) = 9𝑥 2 para 𝟎 < 𝑥 < √𝟑:

                                                    𝟑 𝟏                      𝟑 𝟏
                                                      √                      √
                                                       𝟑                      𝟑
                                         𝟐)                 2       2
                                    𝑬(𝑿        =∫          𝑥 . 9𝑥 . 𝑑𝑥 = ∫         9𝑥 4 . 𝑑𝑥
                                                  𝟎                      𝟎

        Receita Federal (Analista Tributário) Estatística                                                 32
        www.estrategiaconcursos.com.br                                                                    85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Primeiro calculamos a integral, sem os limites:

                                           𝟐)             4
                                                                  𝑥 4+1  9
                                     𝑬(𝑿        = ∫ 9𝑥 . 𝑑𝑥 = 9 ×       = 𝑥5
                                                                  4+1 5

Aplicando os limites, temos:

                                                              5
                                                                               5
                                          𝟐)
                                                 9   𝟏𝟑  9      9 1 ⁄3
                                     𝑬(𝑿        = ( √ ) − (𝟎)5 = ( )
                                                 4   𝟑   4      4 3

        Mais precisamente, 𝑬(𝑿𝟐 ) é a integral da f.d.p., multiplicada por 𝑥 2 , de menos infinito até
        mais infinito:
                                                              +∞
                                                𝐸(𝑋 2 ) = ∫−∞ 𝑥 2 . 𝑓(𝑥). 𝑑𝑥

Todas as propriedades de variância, que valem para variáveis discretas, também se aplicam a variáveis
contínuas:
        i)       𝑉(𝑋 + 𝑘) = 𝑉(𝑋)
        ii)      𝑉(𝑘. 𝑋) = 𝑘 2 . 𝑉(𝑋)
                    𝑋      𝑉(𝑋)
        iii)     𝑉 (𝑘 ) = 𝑘 2

Além disso, vale ressaltar a seguinte propriedade, válida somente para variáveis independentes, que
também se aplica tanto para o caso discreto quanto para o caso contínuo:
        iv)      Se X e Y são independentes, então 𝑉(𝑋 + 𝑌) = 𝑉(𝑋) + 𝑉(𝑌)


Por fim, vale pontuar que o desvio padrão é a raiz quadrada da variância:

                                                          𝜎 = √𝑉(𝑋)

        Receita Federal (Analista Tributário) Estatística                                                33
        www.estrategiaconcursos.com.br                                                                   85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                                                      c ulo
                                                                                C á l


        Quando estivermos aplicando limites, principalmente limites infinitos, podem surgir
                                        0    ∞
        resultados indeterminados, como 0 ou ∞.

        Uma boa ferramenta para esses casos é a Regra de L´Hôpital, segundo a qual podemos
        derivar as expressões, que o limite será o mesmo:

                                                        𝑓(𝑥)            𝑓′(𝑥)
                                                 lim           = lim 𝑔′(𝑥)
                                                 𝑥→𝑎 𝑔(𝑥)         𝑥→𝑎

                                                                                                  𝑥
        Por exemplo, vamos supor que precisamos aplicar o limite 𝑥 → ∞ para a expressão 𝑒 𝑥 .

                                                                                              ∞
        Esse é um caso de indeterminação, pois a aplicação direta resultaria em ∞. Então, vamos
        aplicar a Regra de L´Hôpital, derivando o numerador e o denominador:

                                                    𝑥              1     1
                                              lim 𝑒 𝑥 = lim 𝑒 𝑥 = ∞ = 0
                                             𝑥→∞            𝑥→∞

        E assim resolvemos a indeterminação!

(CESPE/2014 – Analista Judiciário do TJ/SE) Considerando que X seja uma variável aleatória contínua, tal
que E(X) = 1 e E(X 2 ) = 4, julgue o item seguinte.
Var(X) = 2
Comentários:
Conhecendo 𝐸(𝑋) = 1 e 𝐸(𝑋 2 ) = 4, podemos calcular a variância como:
                                     𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 = 4 − 12 = 3
Gabarito: Errado.


(FCC/2010 – Analista Judiciário do TRT da 9ª Região) A variável aleatória contínua X tem função densidade
de probabilidade dada por:
           6(𝑥 − 𝑥 2 ), 𝑝𝑎𝑟𝑎 0 < 𝑥 ≤ 1
𝑓(𝑥) = {                              }
           0,    𝑝𝑎𝑟𝑎 𝑥 ≤ 0 𝑜𝑢 𝑥 > 1


        Receita Federal (Analista Tributário) Estatística                                             34
        www.estrategiaconcursos.com.br                                                                85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

A variância de X é igual a
a) 0,01.
b) 0,02.
c) 0,03.
d) 0,04.
e) 0,05.
Comentários:
Podemos calcular a variância por:
                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2
Vamos primeiro calcular 𝐸(𝑋). Para isso, integrar f(x) multiplicada por x:

                    𝐸(𝑋) = ∫ 𝑥. 6(𝑥 − 𝑥 2 ). 𝑑𝑥 = ∫(6𝑥 2 − 6𝑥 3 ). 𝑑𝑥 = ∫ 6𝑥 2 . 𝑑𝑥 − ∫ 6𝑥 3 . 𝑑𝑥

Resolvendo essas integrais em separado:

                                                               𝑥 2+1     𝑥3
                                        ∫ 6𝑥 2 . 𝑑𝑥 = 6 ×            =6×    = 2. 𝑥 3
                                                               2+1       3

                                                               𝑥 3+1     𝑥 4 3. 𝑥 4
                                        ∫ 6𝑥 3 . 𝑑𝑥 = 6 ×            =6×    =
                                                               3+1       4     2

Juntando esses resultados, encontramos a função E(X):
                                                            3
                                             𝐸(𝑋) = 2. 𝑥 3 − 𝑥 4
                                                            2
Agora, aplicamos E(X) nos limites x = 0 e x = 1:
                                                          3. 14            3. 04        3 1
                    𝐸(𝑋) = 𝐸(1) − 𝐸(0) = 2. 13 −                − (2. 03 −       ) = 2 − = = 0,5
                                                            2                2          2 2
Agora, calculamos 𝐸(𝑋 2 ). Para isso, precisamos integrar o produto de 𝑥 2 por 𝑓(𝑥):

                  𝐸(𝑋 2 ) = ∫ 𝑥 2 . 6(𝑥 − 𝑥 2 ). 𝑑𝑥 = ∫(6𝑥 3 − 6𝑥 4 ). 𝑑𝑥 = ∫ 6𝑥 3 . 𝑑𝑥 − ∫ 6𝑥 4 . 𝑑𝑥

Resolvendo essas integrais em separado:

                                                               𝑥 3+1     𝑥 4 3. 𝑥 4
                                        ∫ 6𝑥 3 . 𝑑𝑥 = 6 ×            =6×    =
                                                               3+1       4     2

                                                               𝑥 4+1     𝑥 5 6. 𝑥 5
                                        ∫ 6𝑥 4 . 𝑑𝑥 = 6 ×            =6×    =
                                                               4+1       5     5

Juntando esses resultados, encontramos a função 𝐸(𝑋 2 ):

                                                        𝟐)
                                                               𝟑. 𝒙𝟒 𝟔. 𝒙𝟓
                                                   𝑬(𝑿       =      −
                                                                𝟐     𝟓


           Receita Federal (Analista Tributário) Estatística                                            35
           www.estrategiaconcursos.com.br                                                               85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Agora, aplicamos 𝐸(𝑋 2 ) nos limites x = 0 e x = 1:

             2)           𝟐)           𝟐)
                                              𝟑. 𝟏𝟒 𝟔. 𝟏𝟓   𝟑. 𝟎𝟒 𝟔. 𝟎𝟓   3 6 15 − 12    3
       𝐸(𝑋        = 𝐸(𝟏        − 𝐸(𝟎        =      −      −(     −      )= − =        =    = 0,3
                                                𝟐     𝟓       𝟐     𝟓     2 5   10      10
Por fim, subtraímos 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 para calcular a variância:
                           𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 = 0,3 − 0,52 = 0,3 − 0,25 = 0,05
Gabarito: E.

Covariância e correlação

A covariância é definida da seguinte maneira (seja para variáveis discretas, seja para contínuas):
                                              𝑪𝒐𝒗(𝑿, 𝒀) = 𝑬(𝑿. 𝒀) − 𝑬(𝑿). 𝑬(𝒀)

         A diferença está na forma de calcular o valor de 𝐸(𝑋. 𝑌). Para o caso discreto, temos:

                                               𝐸(𝑋. 𝑌) = ∑ 𝑥. 𝑦. 𝑃(𝑋 = 𝑥, 𝑌 = 𝑦)

         Para o caso contínuo, em que as variáveis não são contáveis, não conseguimos efetuar a
         soma desses resultados. Por isso, a substituímos pela integral:
                                                         ∞   ∞
                                            𝐸(𝑋. 𝑌) = ∫−∞ ∫−∞ 𝑥. 𝑦. 𝑓𝑋,𝑌 (𝑥, 𝑦). 𝑑𝑦 . 𝑑𝑥

         Nessa fórmula, temos uma integral dupla, em que precisamos resolver a integral interna
         primeiro:
                                                             ∞
                                                 𝑓(𝑦) = ∫−∞ 𝑥. 𝑦. 𝑓𝑋,𝑌 (𝑥, 𝑦). 𝑑𝑦

         E depois integramos o resultado em relação a x:
                                                                 ∞
                                                     𝐸(𝑋𝑌) = ∫−∞ 𝑓(𝑦) . 𝑑𝑥

         Pontue-se que 𝑃(𝑋 = 𝑥, 𝑌 = 𝑦) é chamada de distribuição conjunta de probabilidade,
         enquanto 𝑓𝑋,𝑌 (𝑥, 𝑦) é chamada de função densidade conjunta de probabilidade.

        Receita Federal (Analista Tributário) Estatística                                            36
        www.estrategiaconcursos.com.br                                                               85

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 09

As propriedades da covariância também são as mesmas, tanto para variáveis discretas quanto para
contínuas:

        i)       Simetria: 𝐶𝑜𝑣(𝑋, 𝑌) = 𝐶𝑜𝑣(𝑌, 𝑋)
        ii)      Mesma variável: 𝐶𝑜𝑣(𝑋, 𝑋) = 𝑉𝑎𝑟(𝑋)
        iii)     Com uma constante: 𝐶𝑜𝑣(𝑘, 𝑋) = 0
        iv)      Soma: 𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐶𝑜𝑣(𝑋, 𝑍) + 𝐶𝑜𝑣(𝑌, 𝑍)
        v)       Produto de uma constante: 𝐶𝑜𝑣(𝑘𝑋, 𝑌) = 𝐶𝑜𝑣(𝑋, 𝑘𝑌) = 𝑘. 𝐶𝑜𝑣(𝑋, 𝑌)

A partir da covariância, podemos calcular a variância da soma e da subtração de duas variáveis não
(necessariamente) independentes:

                               𝑽𝒂𝒓(𝑿 + 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀) + 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)

                               𝑽𝒂𝒓(𝑿 − 𝒀) = 𝑽𝒂𝒓(𝑿) + 𝑽𝒂𝒓(𝒀) − 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)

Para calcular a variância da soma de múltiplas variáveis, somamos as variâncias e o dobro das covariâncias
entre cada par de variáveis:
                                      𝑛            𝑛             𝑛     𝑛

                                 𝑉 (∑ 𝑋𝑖 ) = ∑ 𝑉(𝑋𝑖 ) + 2. ∑ ∑ 𝐶𝑜𝑣(𝑋𝑖 , 𝑋𝑗 )
                                     𝑖=1          𝑖=1           𝑗>𝑖 𝑖=1

Para 3 variáveis, por exemplo, temos:
               𝑉(𝑋 + 𝑌 + 𝑍) = 𝑉(𝑋) + 𝑉(𝑌) + 𝑉(𝑍) + 2[𝐶𝑜𝑣(𝑋, 𝑌) + 𝐶𝑜𝑣(𝑋, 𝑍) + 𝐶𝑜𝑣(𝑌, 𝑍)]


Por fim, o coeficiente de correlação também é calculado pela razão entre a covariância e o produto dos
desvios padrão, assim como para variáveis discretas:

                                                             𝑪𝒐𝒗(𝑿,𝒀)
                                                𝝆(𝑿, 𝒀) =
                                                              𝝈𝑿 .𝝈𝒀

        Receita Federal (Analista Tributário) Estatística                                              37
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

(CESPE/2016 – TCE/PR) Se satisfação no trabalho e saúde no trabalho forem indicadores com variâncias
populacionais iguais a 8 e 2, respectivamente, e se a covariância populacional entre esses indicadores for
igual a 3, então a correlação populacional entre satisfação no trabalho e saúde no trabalho será igual a:
a) 0,8125.
b) 1.
c) 0,1875.
d) 0,30.
e) 0,75.
Comentários:
Sabendo que V(X) = 8, V(Y) = 2 e Cov(X,Y) = 3, então a correlação é dada por:
                                               𝐶𝑜𝑣(𝑋, 𝑌)     3     3  3
                                  𝜌(𝑋, 𝑌) =              =       =   = = 0,75
                                                 𝜎𝑋 . 𝜎𝑌   √8. √2 √16 4
Gabarito: E

           Receita Federal (Analista Tributário) Estatística                                           38
           www.estrategiaconcursos.com.br                                                              85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                            TEOREMAS DE DESIGUALDADE
Nesta seção, veremos a Desigualdade de Chebyshev e a Desigualdade Unilateral, cujo objetivo é trazer uma
estimativa de probabilidades, a partir da esperança e da variância da variável.

Desigualdade de Chebyshev

Antes de falar sobre a desigualdade, vale pontuar que existem diversas maneiras de escrever o nome do
matemático russo: Chebyshev, Tchebychev, Tschebyscheff, Chebychov,...

        Seja X uma variável aleatória com esperança 𝑬(𝑿) = 𝝁 e variância 𝑽(𝑿) = 𝝈𝟐.

        Então, para todo 𝜹 > 𝟎, temos:

                                                                    𝝈𝟐
                                                 𝑃(|𝑋 − 𝝁| ≥ 𝜹) ≤ 𝜹𝟐

Em outras palavras, a probabilidade de 𝑋 se distanciar da média (para cima ou para baixo) em mais que um
determinado valor 𝜹 é, no máximo, igual à razão entre a variância e o quadrado de 𝜹.

Para que o módulo da diferença 𝑋 − 𝜇 seja maior ou igual a 𝛿, ou a diferença é positiva e maior ou igual a
𝛿 ou a diferença é negativa e menor ou igual a −𝛿:

                               𝑋 − 𝜇 ≥ 𝛿,         𝑠𝑒 𝑋 − 𝜇 ≥ 0     𝑋 ≥ 𝜇 + 𝛿,   𝑠𝑒 𝑋 − 𝜇 ≥ 0
            |𝑋 − 𝜇 | ≥ 𝛿 = {                                   }={                           }
                               𝑋 − 𝜇 ≤ −𝛿,         𝑠𝑒 𝑋 − 𝜇 < 0    𝑋 ≤ 𝜇 − 𝛿,   𝑠𝑒 𝑋 − 𝜇 < 0

Assim, a probabilidade 𝑃(|𝑋 − 𝜇| ≥ 𝛿) corresponde à união dessas probabilidades:

                                𝑃(|𝑋 − 𝝁| ≥ 𝜹) = 𝑃(𝑋 ≤ 𝝁 − 𝜹 ∪ 𝑋 ≥ 𝝁 + 𝜹)

        Vamos supor que uma fábrica produza, em média, 1000 unidades por dia de determinado
        medicamento, com variância de 200 unidades 2/dia.

        Com apenas essas informações, vamos calcular a probabilidade de a fábrica produzir
        menos que 900 unidades ou mais que 1100 unidades em um dia.


        Receita Federal (Analista Tributário) Estatística                                              39
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

           Em ambos os casos, temos uma “distância”, em relação à média, de 100 unidades, pois
           |900 – 1000| = 100 e |1100 – 1000| = 100. Logo, 𝛿 = 100 unidades:

                                                                            𝜎2
                                                    𝑃(|𝑋 − 𝜇 | ≥ 𝛿) ≤ 𝛿 2

                                                                                 200
                             𝑃(𝑋 < 900 ∪ 𝑋 > 1100) = 𝑃(|𝑋 − 1000| ≥ 100) ≤ (
                                                                                 100)2


                                            𝑃(𝑋 < 900 ∪ 𝑋 > 1100) ≤ 0,02

           Ou seja, a probabilidade de a fábrica produzir menos de 900 unidades ou mais de 110
           unidades é no máximo igual a 0,02 = 2%.

           Podemos calcular também a probabilidade de produzir entre 900 e 1100 unidades em um
           dia, que é a probabilidade complementar:            ==219a34==

                                𝑃(900 < 𝑋 < 1100) = 1 − 𝑃(𝑋 < 900 ∪ 𝑋 > 1100)

                                        𝑃(900 < 𝑋 < 1100) ≥ 1 − 0,02 = 0,98

           Ou seja, a probabilidade de a fábrica produzir entre 900 e 110 unidades é no mínimo igual
           a 0,98 = 98%.

(FCC/2012 – Analista Judiciário do TRE/SP) Seja X uma variável aleatória contínua com uma média igual a
20. Utilizando o Teorema de Tchebyshev, obtém-se que a probabilidade de X não pertencer ao intervalo (15,
25) é, no máximo, 6,25%. Isto significa que o desvio padrão de X é igual a
a) 1,25.
b) 1,50.
c) 2.00.
d) 2,25.
e) 2,50.
Comentários:
Sabendo que 𝜇 = 20, então a probabilidade de X não pertencer ao intervalo (15,25) corresponde à
probabilidade de X se distanciar da média em pelo menos 5 unidades:
                                      𝑃 (𝑋 ≤ 15 𝑜𝑢 𝑋 ≥ 25) = 𝑃(|𝑋 − 20| ≥ 5)
O enunciado informa que essa probabilidade é no máximo 6,25% = 0,0625:
                                               𝑃(|𝑋 − 20| ≥ 5) ≤ 0,0625

           Receita Federal (Analista Tributário) Estatística                                           40
           www.estrategiaconcursos.com.br                                                              85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Aplicando o teorema de Chebyshev, podemos calcular a variância:
                                                                  𝜎2
                                                𝑃(|𝑋 − 𝜇 | ≥ 𝛿) ≤
                                                                  𝛿2
                                                                   𝜎2
                                                𝑃(|𝑋 − 20| ≥ 𝟓) ≤ 2
                                                                   𝟓
                                                     𝜎2
                                                        = 0,0625
                                                     25
                                                  𝜎 2 = 25 × 0,0625
Assim:

                                  𝜎 = √𝜎 2 = √25 × 0,0625 = 5 × 0,25 = 1,25
Gabarito: A


(FCC/2010 – Analista Judiciário do TRT da 8ª Região) Seja X uma variável aleatória contínua representando
os salários dos empregados de uma empresa. Como é desconhecida a distribuição destes salários, utilizou-
se o teorema de Tchebyshev para saber qual é a porcentagem dos empregados que ganham mais que R$
1.600,00 e menos que R$ 2.400,00. O resultado encontrado foi que esta porcentagem foi no mínimo igual a
84%, baseado no fato de que a média de X é igual a R$ 2.000,00. A correspondente variância de X, em (R$) 2,
é igual a
a) 22.500.
b) 25.600.
c) 40.000.
d) 62.500.
e) 160.000.
Comentários:
A probabilidade de os empregados ganharem mais que R$ 1.600 ou menos que R$ 2.400 pode ser
considerada como o complementar da probabilidade de os empregados ganharem menos que R$ 1.600 ou
mais que R$ 2.400:
                          𝑃 (𝑋 ≤ 1.600 𝑜𝑢 𝑋 ≥ 2.400) = 1 − 𝑃 (1.600 < 𝑋 < 2.400)
O enunciado informa que 𝑃(1.600 < 𝑋 < 2.400) = 84% = 0,84, logo, o seu complementar é:
                                𝑃 (𝑋 ≤ 1.600 𝑜𝑢 𝑋 ≥ 2.400) = 1 − 0,84 = 0,16
Sabendo que a média é 𝜇 = 2.000, então a probabilidade de os empregados ganharem menos que R$ 1.600
ou mais que R$ 2.400 corresponde à probabilidade de os salários se distanciarem da média em mais de R$
400:
                             𝑃(𝑋 ≤ 1.600 𝑜𝑢 𝑋 ≥ 2.400) = 𝑃(|𝑋 − 2.000| ≥ 400)
Pelo teorema de Chebyshev, calculamos a variância:
                                                                    𝜎2
                                                𝑃(|𝑋 − 𝜇 | ≥ 𝛿) ≤
                                                                    𝛿2

         Receita Federal (Analista Tributário) Estatística                                              41
         www.estrategiaconcursos.com.br                                                                 85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                                         𝜎2
                                         𝑃(|𝑋 − 2.000| ≥ 𝟒𝟎𝟎) ≤
                                                                        𝟒𝟎𝟎2
                                                   𝜎2
                                                         = 0,16
                                                 160.000
                                         𝜎 2 = 160.000 × 0,16 = 25.600
Gabarito: B.

Desigualdade Unilateral

É possível estimar a probabilidade de uma variável se afastar da média apenas para cima, chamada de versão
unilateral de Cantelli da desigualdade de Chebyshev (ou de desigualdade unilateral de Chebyshev ou,
ainda, de desigualdade de Cantelli):

                                                                   𝝈𝟐
                                                𝑃(𝑋 − 𝝁 ≥ 𝜹) ≤ 𝝈𝟐 +𝜹𝟐

                                                                                         𝝈𝟐
Ou seja, a probabilidade de X superar a média em mais de 𝜹 é, no máximo, igual à razão 𝝈𝟐 +𝜹𝟐.

        Para o mesmo exemplo, podemos calcular a probabilidade de a fábrica produzir mais que
        1100 unidades, somente, sabendo que a média é de 1000 unidades e a variância de 200
        unidades2/dia. A distância em relação à média é 𝛿 = 100, então:

                                                                   𝜎2
                                                𝑃(𝑋 − 𝜇 ≥ 𝛿) ≤ 𝜎2 +𝛿2

                                                                        200
                                         𝑃(𝑋 − 1000 ≥ 100) ≤ 200+10.000

                                               𝑃(𝑋 ≥ 1100) ≤ 0,0196

        Assim, a probabilidade de produzir menos que 1100 unidades é dada por:

                                        𝑃(𝑋 < 1100) = 1 − 𝑃(𝑋 ≥ 1100)

                                      𝑃(𝑋 < 1100) ≥ 1 − 0,0196 = 0,9804

        Receita Federal (Analista Tributário) Estatística                                              42
        www.estrategiaconcursos.com.br                                                                 85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

(CESPE/2011 – EBC)           Considerando       as    desigualdades   usuais   em   teoria   de   probabilidades,
julgue o próximo item.
Suponha que uma variável aleatória X tenha média zero e variância finita e que, pela desigualdade unilateral
de Chebyshev, P(X≥ 25) ≤ 0,25. Nesse caso, a variância de X será superior a 200.
Comentários:
Pela desigualdade unilateral de Chebyshev, temos:
                                                       𝜎2
                                             𝑃(𝑋 − 𝜇 ≥ 𝛿) ≤
                                                    𝜎2 + 𝛿2
Pelo enunciado, 𝑃(𝑋 ≥ 25) ≤ 0,25, detectamos que 𝜇 = 0 e 𝛿 = 25, logo:
                                                   𝜎2
                                    𝑃(𝑋 ≥ 𝟐𝟓) ≤ 2
                                                 𝜎 + 𝟐𝟓2
O enunciado informa que 𝑃(𝑋 ≥ 25) ≤ 0,25, então:


                                                    𝜎2
                                                           = 0,25
                                                𝜎 2 + 625
                                          𝜎 2 = 0,25 × 𝜎 2 + 0,25 × 625
                                              0,75 × 𝜎 2 = 0,25 × 625
                                            0,25 × 625 625
                                     𝜎2 =             =    = 208,333 …
                                               0,75     3
Gabarito: Certo.


(CESPE/2014 – Analista Judiciário do TJ/SE) Considerando que X seja uma variável aleatória contínua, tal
que E(X) = 1 e E(X2) = 4, julgue o item seguinte.
P(X > 4) ≤ ¼
Comentários:
Para resolver essa questão, vamos utilizar a desigualdade lateral de Chebyshev:
                                                       𝜎2
                                             𝑃(𝑋 − 𝜇 ≥ 𝛿) ≤
                                                    𝜎2 + 𝛿2
O enunciado informa que a média é 𝜇 = 𝐸 (𝑋) = 1. Ele também fornece 𝐸(𝑋 2 ), que permite calcular a
variância:
                                 𝜎 2 = 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸 (𝑋)]2 = 4 − 12 = 3

        Receita Federal (Analista Tributário) Estatística                                                     43
        www.estrategiaconcursos.com.br                                                                        85

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Sabendo que a média é 𝜇 = 1, a probabilidade 𝑃(𝑋 > 4) corresponde à probabilidade de X se afastar da
média em mais de 3 unidades:
                                            𝑃(𝑋 > 4) = 𝑃 (𝑋 − 1 > 3)
Ou seja, 𝛿 = 3. Substituindo esses valores na desigualdade de Chebyshev, temos:
                                                        3      3
                                          𝑃 (𝑋 − 1 ≥ 𝟑) ≤  2
                                                             =
                                                     3+𝟑       12
                                                         1
                                            𝑃(𝑋 ≥ 4) ≤
                                                         4
Lembre-se que, por ser uma variável contínua, temos 𝑃 (𝑋 > 4) = (𝑋 ≥ 4).
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                        44
        www.estrategiaconcursos.com.br                                                           85

                                      


---

Equipe Exatas Estratégia Concursos
Aula 09

                                           RESUMO DA AULA
  Função densidade de probabilidade positiva 𝑓 (𝑥 ) ≥ 0
                                                                𝑏
  Probabilidade de um intervalo 𝑃 (𝑎 < 𝑋 < 𝑏) = ∫𝑎 𝑓 (𝑥 ). 𝑑𝑥 = 𝐹 (𝑏) − 𝐹 (𝑎)

                                                                          𝑥
  Função de distribuição acumulada varia entre 0 e 1: 𝐹 (𝑥 ) = ∫−∞ 𝑓 (𝑥 ). 𝑑𝑥
                              ∞
  Esperança: 𝐸(𝑋) = ∫−∞ 𝑥. 𝑓(𝑥) . 𝑑𝑥

                                                                    ∞
  Variância, 𝑉 (𝑋) = 𝐸 (𝑋 2 ) − [𝐸 (𝑋)]2, com 𝐸 (𝑋 2 ) = ∫−∞ 𝑥 2 . 𝑓 (𝑥 ). 𝑑𝑥

  Covariância: 𝐶𝑜𝑣 (𝑋, 𝑌) = 𝐸 (𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌),

                               𝐶𝑜𝑣(𝑋,𝑌)
  Correlação: 𝜌(𝑋, 𝑌) =          𝜎𝑋 .𝜎𝑌


  Variância da Soma e da Diferença:

                                  𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌)

                                  𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2. 𝐶𝑜𝑣 (𝑋, 𝑌)

                                                               𝜎2
  Desigualdade de Chebyshev: 𝑃(|𝑋 − 𝜇| ≥ 𝛿) ≤ 𝛿 2

                                                          𝜎2
  Desigualdade Unilateral: 𝑃(𝑋 − 𝜇 ≥ 𝛿) ≤ 𝜎2 +𝛿 2

      Receita Federal (Analista Tributário) Estatística                          45
      www.estrategiaconcursos.com.br                                             85

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                             QUESTÕES COMENTADAS – FGV

Noções de variáveis contínuas

1.     (FGV/2024 – TJ/MS) Seja 𝒇(𝒙) = 𝒌, −𝟏 ≤ 𝒙 ≤ 𝟏, uma função densidade de probabilidade de variável
aleatória contínua, onde 𝒇(𝒙) = 𝟎 para 𝒙 > 𝟏 ou 𝒙 < −𝟏. O valor de 𝒌 deve ser igual a:

a) 1

b) 1/2

c) 1/3

d) 1/e

e) 1/5

Comentários:

Para encontrar o valor de 𝑘, devemos considerar que a probabilidade associada a todo o Espaço Amostral é igual
a 1. Para isso, podemos integrar a função densidade da variável em seu intervalo [−1, 1] ou efetuar os cálculos
geometricamente:

                                                        k

                                             -1                       1
A probabilidade associada a todo o Espaço Amostral dessa variável é igual à área do retângulo:

                                    𝐴𝑟𝑒𝑡 = 𝐵𝑎𝑠𝑒 × 𝐴𝑙𝑡𝑢𝑟𝑎 = (1 − (−1)) × 𝑘 = 2𝑘

Sabendo que esse resultado deve ser igual a 1, temos:

                                                             2𝑘 = 1

                                                                  1
                                                             𝑘=
                                                                  2

Gabarito: B

         Receita Federal (Analista Tributário) Estatística                                                  46
         www.estrategiaconcursos.com.br                                                                     85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

2.     (FGV/2024 – TCE/PA) A densidade de probabilidade de uma variável aleatória segue a função 𝒑(𝒙) =
𝟏 − |𝒙|, caso |𝒙| < 𝟏, ou 0, caso contrário.
Ao retirar-se uma amostra aleatória 𝒙, a probabilidade de −𝟑, 𝟎 < 𝒙 < 𝟎, 𝟖 é

a) 0,96

b) 0,98

c) 0,99

d) 0,92

e) 0,04

Comentários:

Sabendo que a variável assume valores para |𝑥| < 1, ou seja, −1 < 𝑥 < 1, então a função densidade de
probabilidade da variável pode ser descrita como:

                                              𝑓(𝑥) = 1 − 𝑥,           𝑠𝑒 0 ≤ 𝑥 < 1

                                     𝑓(𝑥) = 1 − (−𝑥) = 1 + 𝑥,             𝑠𝑒 − 1 < 𝑥 < 0

Essa função pode ser representada como:


                                                              1

                                                -1                0           1

Considerando, ainda, que a variável assume valores para −1 < 𝑥 < 1, então a probabilidade de −3 < 𝑥 < 0,8
é igual à probabilidade de −1 < 𝑥 < 0,8, o que pode ser calculada pelo seu complementar:

                            𝑃(−3 < 𝑥 < 0,8) = 𝑃(−1 < 𝑥 < 0,8) = 1 − 𝑃(0,8 < 𝑥 < 1)

Essa probabilidade pode ser calculada geometricamente:


                                                              1

                                               -1                 0     0,8   1

          Receita Federal (Analista Tributário) Estatística                                           47
          www.estrategiaconcursos.com.br                                                              85

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 09

Para isso, precisamos do valor da função densidade para 𝑥 = 0,8:

                                                    𝑓(0,8) = 1 − 0,8 = 0,2

Assim, a área do triângulo hachurado é:

                                                               𝐵𝑎𝑠𝑒 × 𝐴𝑙𝑡𝑢𝑟𝑎
                                                    𝐴𝑡𝑟𝑖 =
                                                                     2

                                                        (1 − 0,8) × 0,2 0,2 × 0,2
                                 𝑃(0,8 < 𝑥 < 1) =                      =          = 0,02
                                                               2            2

E a probabilidade desejada é complementar:

                                            𝑃(−3 < 𝑥 < 0,8) = 1 − 0,02 = 0,98

Gabarito: B

                                                𝒌
3.        (FGV/2024 – TJ/AP) Seja 𝒇(𝒙) = 𝒙 , 𝟏 ≤ 𝒙 ≤ 𝒆, onde "𝒆" é o número neperiano, uma função densidade
de probabilidade de variável aleatória contínua, onde 𝒇(𝒙) = 𝟎 para 𝒙 > 𝒆 ou 𝒙 < 𝟏. O valor de 𝒌 deve ser
igual a:

a) 1

b) 2

c) 3

d) 4

e) 5

Comentários:

Para encontrar o valor de 𝑘, devemos considerar que a probabilidade associada a todo o Espaço Amostral é igual
a 1, ou seja, a integral da função densidade da variável em todo o seu intervalo [1, 𝑒] é igual a 1:
                                                                ∞

                                                    𝑃(𝑈) = ∫ 𝑓(𝑥). 𝑑𝑥 = 1
                                                               −∞

           Receita Federal (Analista Tributário) Estatística                                               48
           www.estrategiaconcursos.com.br                                                                  85

                                           


---

     Equipe Exatas Estratégia Concursos
     Aula 09

                                       𝑒
                                    𝑘
                            𝑃(𝑈) = ∫ . 𝑑𝑥 = 𝑘. [ln 𝑥]1𝑒 = 𝑘. (ln 𝑒 − ln 1) = 𝑘. (1 − 0) = 𝑘
                                    𝑥
                                      1

Sabendo que esse resultado deve ser igual a 1, temos 𝑘 = 1.

Gabarito: A

4.        (FGV/2024 – SES/MT) Uma variável contínua X tem função de densidade de probabilidade dada por
                                                        𝒌𝒙,    𝟎<𝒙<𝟐
                                              𝒇(𝒙) = {                    }
                                                      𝟎, 𝒏𝒐𝒔 𝒅𝒆𝒎𝒂𝒊𝒔 𝒄𝒂𝒔𝒐𝒔
Nesse caso, se 𝒌 é uma constante, o valor esperado de X é igual a

a) 0

b) 1/2

c) 3/5

d) 4/3

Comentários:

Para responder à questão, devemos primeiro calcular o valor de 𝑘. Para isso, consideramos que a probabilidade
associada a todo o Espaço Amostral é igual a 1, ou seja, a integral da função densidade da variável em todo o
seu intervalo [0, 2] é igual a 1:
                                                                ∞

                                                    𝑃(𝑈) = ∫ 𝑓(𝑥). 𝑑𝑥 = 1
                                                               −∞

                                                2                   2
                                                           𝑥2       22
                                     𝑃(𝑈) = ∫ 𝑘𝑥. 𝑑𝑥 = 𝑘. [ ] = 𝑘. ( − 0) = 2𝑘
                                                           2 0      2
                                               0

Sabendo que esse resultado deve ser igual a 1, temos:

                                                               2𝑘 = 1

                                                                    1
                                                               𝑘=
                                                                    2

           Receita Federal (Analista Tributário) Estatística                                              49
           www.estrategiaconcursos.com.br                                                                 85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Agora, podemos calcular a esperança da variável, integrando 𝑥. 𝑓(𝑥) em todo o seu intervalo:
                                                               ∞

                                                    𝐸(𝑋) = ∫ 𝑥. 𝑓(𝑥). 𝑑𝑥
                                                              −∞

                                      2                  2                 2
                                   1          1            1 𝑥3    1 23        4
                           𝐸(𝑋) = ∫ 𝑥. 𝑥. 𝑑𝑥 = ∫ 𝑥 2 . 𝑑𝑥 = . [ ] = . ( − 0) =
                                   2          2            2 3 0 2 3           3
                                     0                  0

Gabarito: D

5.    (FGV/2024 – Pref. Vitória) Considere uma variável aleatória contínua X com função de densidade de
probabilidade dada por 𝒇(𝒙) = 𝒌𝒙𝟐 , se 𝟎 < 𝒙 < 𝟑 e 𝒇(𝒙) = 𝟎, nos demais casos, sendo 𝒌 constante.

A média de X é igual a

a) 1/3

b) 18/24

c) 54/9

d) 1

e) 81/36

Comentários:

Para encontrar a média da variável, precisamos calcular o valor de 𝑘. Para isso, consideramos que a
probabilidade associada a todo o Espaço Amostral é igual a 1, ou seja, a integral da função densidade da variável
em todo o seu intervalo (0, 3) é igual a 1:

                                              3                    3
                                                          𝑥3  𝑘
                                   𝑃(𝑈) = ∫ 𝑘𝑥 . 𝑑𝑥 = 𝑘. [ ] = . (33 − 03 ) = 9𝑘
                                                   2
                                                          3 0 3
                                             0

Sabendo que esse resultado deve ser igual a 1, temos:

                                                              9𝑘 = 1

                                                                   1
                                                              𝑘=
                                                                   9


          Receita Federal (Analista Tributário) Estatística                                                   50
          www.estrategiaconcursos.com.br                                                                      85

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 09

Agora, vamos calcular a esperança, integrando 𝑥. 𝑓(𝑥) em todo o seu intervalo:

                                    3                      3                   3
                                 1             1            1 𝑥4     1                81
                         𝐸(𝑋) = ∫ 𝑥 2 . 𝑥. 𝑑𝑥 = ∫ 𝑥 3 . 𝑑𝑥 = . [ ] =   . (34 − 04 ) =
                                 9             9            9 4 0 36                  36
                                   0                      0

Gabarito: E

6.        (FGV/2024 – TJ/RR) Uma variável aleatória X tem função de densidade de probabilidade dada por
𝒇(𝒙) = 𝒌𝒙𝟐 , se −𝟏 < 𝒙 < 𝟏 e 𝒇(𝒙) = 𝟎, nos demais casos, 𝒌 constante.

A variância de X é então igual a

a) 1/5

b) 1/4

c) 1/3

d) 2/5

e) 3/5

Comentários:

Antes de buscar a variância, precisamos calcular o valor de 𝑘. Para isso, consideramos que a probabilidade
associada a todo o Espaço Amostral é igual a 1, ou seja, a integral da função densidade da variável em todo o
seu intervalo [−1, 1] é igual a 1:
                                                                    ∞

                                                      𝑃(𝑈) = ∫ 𝑓(𝑥). 𝑑𝑥 = 1
                                                                   −∞

                                       1                       1
                                                𝑥3   𝑘                𝑘          2𝑘
                         𝑃(𝑈) = ∫ 𝑘𝑥 . 𝑑𝑥 = 𝑘. [ ] = . (13 − (−1)3 ) = (1 + 1) =
                                           2
                                                3 −1 3                3           3
                                   −1

Sabendo que esse resultado deve ser igual a 1, temos:

                                                                   2𝑘
                                                                      =1
                                                                    3

           Receita Federal (Analista Tributário) Estatística                                              51
           www.estrategiaconcursos.com.br                                                                 85

                                               


---

     Equipe Exatas Estratégia Concursos
     Aula 09

                                                                       3
                                                                 𝑘=
                                                                       2

Agora, vamos calcular a variância como:

                                                   𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Para calcular a esperança da variável, integramos 𝑥. 𝑓(𝑥) em todo o seu intervalo:
                                                                   ∞

                                                     𝐸(𝑋) = ∫ 𝑥. 𝑓(𝑥). 𝑑𝑥
                                                                 −∞

                             1                  1                          1
                         3             3            3 𝑥4    3                 3
                 𝐸(𝑋) = ∫ 𝑥 2 . 𝑥. 𝑑𝑥 = ∫ 𝑥 3 . 𝑑𝑥 = . [ ] = . (14 − (−1)4 ) = . (1 − 1) = 0
                         2             2            2 4 −1 8                  8
                         −1                    −1

Agora, calculamos 𝐸(𝑋 2 ), integrando 𝑥 2 . 𝑓(𝑥) no mesmo intervalo:
                                                                   ∞
                                                          2)
                                                    𝐸(𝑋        = ∫ 𝑥 2 . 𝑓(𝑥). 𝑑𝑥
                                                                 −∞

                         1                      1                      1
                          3                3            3 𝑥5     3                    3             3
               𝐸(𝑋 2 ) = ∫ 𝑥 2 . 𝑥 2 . 𝑑𝑥 = ∫ 𝑥 4 . 𝑑𝑥 = . [ ] =   . (15 − (−1)5 ) =    . (1 + 1) =
                          2                2            2 5 −1 10                    10             5
                        −1                    −1

Gabarito: E

7.        (FGV/2023 – BANESTES) A função de densidade da variável aleatória X é dada por:
                                                   𝟏 𝟐   𝟓
                                     𝒇(𝒙) = {−    𝟑𝟔
                                                     𝒙 +
                                                         𝟏𝟖
                                                            𝒙 + 𝒌,    𝒔𝒆 𝟐 ≤ 𝒙 ≤ 𝟖}
                                                𝟎,                 𝒄𝒂𝒔𝒐 𝒄𝒐𝒏𝒕𝒓á𝒓𝒊𝒐

em que k é uma constante a determinar.

                                                     𝟖                         𝟖
Para facilitar os cálculos, informa-se que ∫𝟐 𝒙𝟐 𝒅𝒙 = 𝟏𝟔𝟖 e ∫𝟐 𝒙 𝒅𝒙 = 𝟑𝟎. Nessas condições, o valor correto
de k é igual a

a) 0

b) 4/9

           Receita Federal (Analista Tributário) Estatística                                            52
           www.estrategiaconcursos.com.br                                                               85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

c) -4/9

d) 1/3

e) -1/3

Comentários:

Para calcular o valor da constante k, devemos considerar que a probabilidade associada a todo o Espaço
Amostral, isto é, a todos os resultados possíveis, é igual a 1.
Assim, a integral da função densidade em todo o intervalo da variável [2, 8] deve ser igual a 1:
                                                     8
                                                            1 2   5
                                         𝑃(𝑈) = ∫ (−          𝑥 + 𝑥 + 𝑘) 𝑑𝑥 = 1
                                                           36    18
                                                   2
                                                       8           8           8
                                             1             5
                                    𝑃(𝑈) = − ∫ 𝑥 2 . 𝑑𝑥 +    ∫ 𝑥. 𝑑𝑥 + 𝑘. ∫ 𝑑𝑥 = 1
                                            36            18
                                                   2              2            2
                                8                             8
O enunciado informa que ∫2 𝑥 2 . 𝑑𝑥 = 168 e que ∫2 𝑥. 𝑑𝑥 = 30.
                 8
Sabendo que ∫2 𝑑𝑥 = 𝑥|82 = 8 − 2 = 6, temos:
                                                    1          5
                                       𝑃(𝑈) = −       × 168 +    × 30 + 𝑘 × 6 = 1
                                                   36         18
                                                   1      5
                                           𝑃(𝑈) = − × 42 + × 5 + 6. 𝑘 = 1
                                                   9      3
                                                       42 25 9 + 42 − 75 −24
                                        6. 𝑘 = 1 +        −   =         =
                                                        9   3     9       9
                                                                4
                                                            𝑘=−
                                                                9
Gabarito: C

8.     (FGV/2023 – TJ/SE - Adaptada) Seja f(x) = k.x3, 0 ≤ x ≤ 1, uma função densidade de probabilidade de
variável aleatória contínua, onde f(x) = 0 para x > 1 ou x < 0. O valor de k deve ser igual a:

a) 0

b) 1

c) 2


          Receita Federal (Analista Tributário) Estatística                                            53
          www.estrategiaconcursos.com.br                                                               85

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 09

d) 3

e) 4

Comentários:

Para encontrar o valor de k, devemos integrar a função densidade de probabilidade 𝑓(𝑥) = 𝑘. 𝑥 3 em todo o
intervalo da variável (0,1). O resultado, que corresponde à probabilidade de todo o Espaço Amostral, deve ser
igual a 1.

                                                                   1

                                                    𝑃(𝑈) = ∫ 𝑘. 𝑥 3 . 𝑑𝑥 = 1
                                                                   0

                                                               1
                                                     𝑥4       14 − 04   𝑘
                                          𝑃(𝑈) = 𝑘. [ ] = 𝑘. [        ]= =1
                                                     4 0         4      4

                                                                   𝑘=4

Resposta: E

9.        (FGV/2022 – TRT/MA) Uma variável aleatória X tem função de densidade de probabilidade dada por:
                                                         𝒌𝒙𝟐 ,   𝒔𝒆 𝟎 < 𝒙 < 𝟑
                                              𝒇(𝒙) = {                        }
                                                         𝟎, 𝒏𝒐𝒔 𝒅𝒆𝒎𝒂𝒊𝒔 𝒄𝒂𝒔𝒐𝒔

O valor da constante 𝒌 é

a) 1/9

b) 1/7

c) 1/6

d) 1/3

e) 3

Comentários:

           Receita Federal (Analista Tributário) Estatística                                              54
           www.estrategiaconcursos.com.br                                                                 85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Para calcular o valor da constante k, devemos considerar que a probabilidade associada a todo o Espaço
Amostral, isto é, a todos os resultados possíveis, é igual a 1. Assim, a integral da função densidade em todo o
intervalo da variável deve ser igual a 1. A integral da função fornecida no intervalo (0, 3) é:
                                               3                   3
                                                     2
                                                         𝑥3      33 03
                                    𝑃(𝑈) = ∫ 𝑘𝑥 𝑑𝑥 = 𝑘. [ ] = 𝑘 [ − ] = 9𝑘
                                                         3 0     3  3
                                              0

Sabendo que esse resultado precisa ser igual a 1, então:
                                                         𝑃(𝑈) = 9𝑘 = 1
                                                                   1
                                                              𝑘=
                                                                   9
Gabarito: A

10.       (FGV/2022 – TRT/MA) Uma variável aleatória X tem função de distribuição dada por:
                                                           𝟎,      𝒔𝒆 𝒙 < 𝟎
                                                            𝟐
                                                   𝑭(𝒙) = {𝒙 , 𝒔𝒆 𝟎 ≤ 𝒙 ≤ 𝟏}
                                                           𝟏,      𝒔𝒆 𝒙 > 𝟏

O valor da probabilidade P[X > 0,8] é

a) 0,16

b) 0,24

c) 0,36

d) 0,64

e) 0,72

Comentários:

A probabilidade 𝑃(𝑋 > 0,8) pode ser calculada pela sua probabilidade complementar:
                                      𝑃(𝑋 > 0,8) = 1 − 𝑃(𝑋 ≤ 0,8) = 1 − 𝐹(0,8)
Sabendo que a função de distribuição é 𝐹(𝑥) = 𝑥 2 , para 0 ≤ 𝑥 ≤ 1, então 𝐹(0,8) é:
                                                     𝐹(0,8) = 0,82 = 0,64
E a probabilidade desejada é o complemento: 𝑃(𝑋 > 0,8) = 1 − 0,64 = 0,36
Gabarito: C

          Receita Federal (Analista Tributário) Estatística                                                 55
          www.estrategiaconcursos.com.br                                                                    85

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 09

11.   (FGV/2022 – TRT/PB) Considere uma variável aleatória X com função de densidade de probabilidade
dada por 𝒇(𝒙) = 𝒙−𝟐, se 𝒙 ≥ 𝟏 e 𝒇(𝒙) = 𝟎, nos demais casos. A média de X é igual a

a) 1.

b) 2.

c) 3.

d) 8.

e) ထ.

Comentários:

A média (ou esperança) de uma variável contínua é a integral da função densidade de probabilidade multiplicada
por 𝑥. Considerando que a variável está definida no intervalo [1, ∞), a média é:
                                     ∞                       ∞                ∞                  ∞
                                                                 −2                −1
                                                                                                     1
                         𝐸(𝑋) = ∫ 𝑥. 𝑓(𝑥). 𝑑𝑥 = ∫ 𝑥 × 𝑥               . 𝑑𝑥 = ∫ 𝑥        𝑑𝑥 = ∫         𝑑𝑥
                                    1                    1                    1              1       𝑥
                                  𝐸(𝑋) = ln(𝑥)|1+∞ = ln(∞) − ln(1) = ∞ − 0 = ∞

Gabarito: E

12.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória contínua X tem função de densidade de
probabilidade dada por f(x) = kx, se 0 < x < 1, k constante, e f(x) = 0, nos demais casos.

A média da variável Y = 3X + 5 é igual a

a) 1

b) 2.

c) 5.

d) 6.

e) 7.

Comentários:

         Receita Federal (Analista Tributário) Estatística                                                  56
         www.estrategiaconcursos.com.br                                                                     85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

O primeiro passo é encontrar o valor de k, considerando que a probabilidade associada a todos os possíveis
valores da variável (ao Espaço Amostral) é igual a 1.

Integrando a função densidade de probabilidade (f.d.p.) 𝑓(𝑥) = 𝑘. 𝑥, no intervalo (0, 1), temos:

                                   1               1               1
                                                         𝑥2       12 02      1    𝑘
                     𝑃(𝑈) = ∫ 𝑘. 𝑥. 𝑑𝑥 = 𝑘 ∫ 𝑥. 𝑑𝑥 = 𝑘. [ ] = 𝑘. [ − ] = 𝑘. [ ] =
                             0              0            2 0      2  2       2    2

Sabendo que essa probabilidade (que corresponde a todo o Espaço Amostral) deve ser igual, temos:

                                                            𝑘
                                                              =1
                                                            2

                                                            𝑘=2

Desse modo, a f.d.p. é 𝑓(𝑥) = 2𝑥.

Para calcular a esperança de X, multiplicamos a f.d.p. por 𝑥 e integramos a função no intervalo da variável:

                               1                    1                  1
                                                        2
                                                          𝑥3       13 03      1    2
                   𝐸(𝑋) = ∫ 𝑥. 2𝑥. 𝑑𝑥 = 2. ∫ 𝑥 . 𝑑𝑥 = 2. [ ] = 2. [ − ] = 2. [ ] =
                           0                0             3 0      3  3       3    3

Agora, podemos aplicar as propriedades da esperança para calcular a média de Y = 3X + 5:

                                           𝐸(𝑌) = 𝐸(3𝑋 + 5) = 3. 𝐸(𝑋) + 5
                        2
Sabendo que 𝐸(𝑋) = 3, temos:

                                                      2
                                            𝐸(𝑌) = 3 × + 5 = 2 + 5 = 7
                                                      3

Assim, verificamos que o gabarito é a alternativa E.

Observação: Nesta questão, também poderíamos ter calculado o valor de 𝑘 geometricamente, uma vez que a
f.d.p. 𝑓(𝑥) = 2. 𝑥 é uma reta. O gráfico a seguir representa a f.d.p., no intervalo (0, 1):

                                             k

                                             0
                                                                       1

        Receita Federal (Analista Tributário) Estatística                                                      57
        www.estrategiaconcursos.com.br                                                                         85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Sabendo que a área do triângulo delimitado deve ser igual a 1, temos:
                                                   𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 1 × 𝑘
                                          𝐴𝑡𝑟𝑖 =                =      =1
                                                         2         2
                                                            𝑘=2
Gabarito: E

13.    (FGV/2019 – DPE/RJ) Levantamentos prévios indicaram que o tempo que o cidadão leva para ser
atendido nas repartições da Defensoria Pública é uma variável aleatória com função de densidade dada por:

                 𝒇𝑻 (𝒕) = 𝟐. (𝟏 − 𝒕),         𝒑𝒂𝒓𝒂 𝟎 < 𝒕 < 𝟏;       𝒆       𝒁𝒆𝒓𝒐,       𝒄𝒂𝒔𝒐 𝒄𝒐𝒏𝒕𝒓á𝒓𝒊𝒐

Onde t é o tempo decorrido do momento em que o cidadão chega à repartição até o instante do atendimento,
medido em fração de hora. Se necessário, utilize a informação aproximada √𝟐 ≅ 𝟏, 𝟒. Assim sendo, é correto
concluir que:

a) em média, um cidadão leva 25 minutos para ser atendido;

b) a estatística da Moda de tempo de espera é igual a zero;

c) mais de 75% dos indivíduos que procuram a Defensoria levam pelo menos meia hora para ser atendidos;

d) a probabilidade de que alguém que já esteja aguardando há 30 minutos seja atendido nos próximos 15
minutos é de 0,5;

e) a estatística da Mediana da distribuição do tempo de espera é igual a 18 minutos.

Comentários:

Essa questão informa que a f.d.p. é 𝑓𝑇 (𝑡) = 2. (1 − 𝑡) = 2 − 2. 𝑡 no intervalo (0, 1), sendo 𝑡 o tempo de espera
medido em fração de hora. Vamos às alternativas:

Em relação à alternativa A, calculamos a esperança, integrando a f.d.p. multiplicada pela variável 𝑡, no intervalo
(0, 1).

                                    1                       1                       1
                        𝐸(𝑇) = ∫ 𝑡. (2 − 2𝑡). 𝑑𝑡 = ∫ (2. 𝑡 − 2𝑡 ). 𝑑𝑡 = 2 ∫ (𝑡 − 𝑡 2 ). 𝑑𝑡
                                                                        2
                                   0                        0                       0

Vamos calcular as integrais em separado:

                                              1                 1
                                                      𝑡2    12 02  1
                                           ∫ 𝑡. 𝑑𝑡 = [ ] = [ − ] =
                                            0         2 0   2  2   2


        Receita Federal (Analista Tributário) Estatística                                                      58
        www.estrategiaconcursos.com.br                                                                         85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                             1              1
                                                 2
                                                       𝑡3    13 03  1
                                           ∫ 𝑡 . 𝑑𝑡 = [ ] = [ − ] =
                                            0          3 0   3  3   3

E a média é:

                                               1 1        3−2        1    1
                                    𝐸(𝑇) = 2. ( − ) = 2. (   ) = 2. ( ) =
                                               2 3         6         6    3

Sabendo que essa medida está em fração de hora, o tempo de espera em minutos é:

                                                        1
                                                          × 60 = 20
                                                        3

E não 25 minutos, logo a alternativa A está incorreta.

Para entender a alternativa B, vamos visualizar o gráfico da f.d.p., no intervalo (0, 1):

                                            2

                                             0
                                                                      1

Podemos observar que o ponto mais alto do gráfico, de fato, corresponde ao ponto t = 0, no entanto, a f.d.p.
está definida no intervalo aberto (0, 1), ou seja, o ponto t = 0 não faz parte do intervalo. Desse modo, a f.d.p.
para t = 0 é f = 0 (assim como para x = 1 e para todos os pontos fora do intervalo). Por isso, não podemos dizer
a Moda é igual a 0 (poderíamos dizer que ela tende a zero).
Em relação à alternativa C, podemos calcular a probabilidade de um indivíduo levar mais de 0,5 hora para ser
atendido de duas maneiras. Podemos calcular a integral da f.d.p. no intervalo (0,5; 1):
                                                                 1
                                             𝑃(𝑇 > 0,5) = ∫ (2 − 2𝑡). 𝑑𝑡
                                                                0,5

Ou calcular a área do triângulo referente a esse intervalo, conforme ilustrado a seguir.
Vale ressaltar que a proporção entre a base e a altura do triângulo formado para qualquer intervalo desta
variável será igual à proporção do triângulo maior (com base igual a 1 e altura igual a 2), ou seja, a altura será
sempre o dobro da base.
Sendo a base igual a 0,5, a altura será igual a 1.


        Receita Federal (Analista Tributário) Estatística                                                      59
        www.estrategiaconcursos.com.br                                                                         85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                            2

                                            1

                                             0              0,5                1

Vamos utilizar o segundo caminho. A área desse triângulo é:
                                         𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 0,5 × 1 1
                                𝐴𝑡𝑟𝑖 =                =       = = 0,25 = 25%
                                               2          2    4
Assim, 25% (e não mais de 75%) das pessoas esperam pelo menos meia hora. Logo, a alternativa C está incorreta.
Em relação à alternativa D, a probabilidade de que alguém que tenha aguardado 30 minutos (0,5 hora) seja
atendido nos próximos 15 minutos (0,25 hora) é a probabilidade condicional de um indivíduo aguardar menos
de 45 minutos (0,75 hora) no total, dado que aguarda pelo menos 30 minutos (0,5 hora):
                                                  𝑃(𝑇 < 0,75 ∩ 𝑇 > 0,5) 𝑃(0,5 < 𝑇 < 0,75)
                     𝑃(𝑇 < 0,75|𝑇 > 0,5) =                             =
                                                       𝑃(𝑇 > 0,5)          𝑃(𝑇 > 0,5)
Já calculamos que 𝑃(𝑇 > 0,5) = 0,25.
Para calcular 𝑃(0,5 < 𝑇 < 0,75), podemos calcular a integral da f.d.p. no intervalo (0,5; 0,75):
                                                                          0,75
                                         𝑃(0,5 < 𝑇 < 0,75) = ∫                 (2 − 2𝑡). 𝑑𝑡
                                                                         0,5

Ou calcular a área do trapézio associada ao referido intervalo, conforme ilustrado a seguir. Para definir a base
menor do trapézio, também consideramos que a altura do triângulo menor (em branco) deve ser o dobro da
sua base. Sabendo que a sua base tem tamanho 0,25 (1 - 0,75 = 0,25), a sua altura será de 2 x 0,25 = 0,5.

                                            2

                                            1

                                           0,5


                                             0              0,5   0,75         1

Novamente, vamos utilizar o segundo caminho, calculando a área do trapézio:

        Receita Federal (Analista Tributário) Estatística                                                    60
        www.estrategiaconcursos.com.br                                                                       85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                                   𝑎𝑙𝑡𝑢𝑟𝑎               0,25
                𝐴𝑡𝑟𝑎𝑝 = (𝐵𝑎𝑠𝑒 𝑚𝑎𝑖𝑜𝑟 + 𝑏𝑎𝑠𝑒 𝑚𝑒𝑛𝑜𝑟) ×                       = (1 + 0,5) ×      = 0,1875
                                                                      2                  2
Essa é a probabilidade 𝑃(0,5 < 𝑇 < 0,75). Agora, podemos calcular a probabilidade condicional:
                                                         𝑃(0,5 < 𝑇 < 0,75) 0,1875
                          𝑃(𝑇 < 0,75|𝑇 > 0,5) =                           =       = 0,75
                                                            𝑃(𝑇 > 0,5)      0,25
Ou seja, a probabilidade é de 0,75, e não 0,5. Logo, a alternativa D está incorreta.
A alternativa E pede a mediana da distribuição, que também pode ser calculada tanto algebricamente quanto
geometricamente. Algebricamente, devemos primeiro calcular a função distribuição acumulada da variável,
integrando a f.d.p. de 0 a t, e igualar o resultado a 0,5 para encontrar o valor de t que corresponde à mediana:
                                                             𝑡
                                              𝐹(𝑡) = ∫ (2 − 2𝑡). 𝑑𝑡 = 0,5
                                                          0

Para efetuar os cálculos utilizando a geometria, devemos considerar que a mediana é o valor que divide a
distribuição em duas áreas iguais, com probabilidade de 50% = 0,5 cada. Logo, o triângulo formado à direita da
mediana tem área igual a 0,5. É importante lembrar que a altura do triângulo continuará sendo o dobro da base.
Sabendo que a base mede 1 - t, então a altura mede 2(1 - t) , conforme ilustrado a seguir:

                                             2


                                         2(1-t)

                                              0          t              1

                                                   t             1-t

E a área do triângulo é dada por:
                              𝑏𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 (1 − 𝑡) × 2(1 − 𝑡)
                     𝐴𝑡𝑟𝑖 =                =                   = (1 − 𝑡)2 = 1 − 2𝑡 + 𝑡 2
                                    2                2
Sabendo que essa área é igual a 0,5:

                                                       1 − 2𝑡 + 𝑡 2 = 0,5
                                                    𝑡 2 − 2. 𝑡 + 0,5 = 0

        Receita Federal (Analista Tributário) Estatística                                                    61
        www.estrategiaconcursos.com.br                                                                       85

                                        


---

    Equipe Exatas Estratégia Concursos
    Aula 09

Para encontrar o valor de t que corresponde à mediana, utilizamos Bháskara 1:
                                  ∆= 𝑏 2 − 4. 𝑎. 𝑐 = (−2)2 − 4 × 1 × 0,5 = 4 − 2 = 2

                                                        −𝑏 ± √∆ 2 ± √2
                                                   𝑡=          =
                                                          2𝑎       2
Como o enunciado informou que √2 ≅ 1,4, temos:
                                                                2 ± 1,4
                                                          𝑡=
                                                                   2
                                                              2 + 1,4
                                                      𝑡1 =            = 1,7
                                                                 2
                                                              2 − 1,4
                                                      𝑡2 =            = 0,3
                                                                 2
Note que 𝑡1 = 1,7 está fora do intervalo da variável (0, 1) e, portanto, não pode ser a mediana. Assim, a mediana
é 𝑡2 = 0,3 hora. Medida em minutos, a mediana é:
                                                     𝑡2 = 0,3 × 60 = 18
Logo, a alternativa E está correta.
Gabarito: E

14.     (FGV/2018 – TJ/AL) Seja X uma variável aleatória que representa a distância entre o ponto de um alvo
circular atingido pelo lançamento de um dardo e o centro desse mesmo alvo. Supondo que todos os pontos
do círculo têm igual probabilidade de ser acertado e que o raio do alvo é igual a 4, sobre X é correto afirmar
que:

a) a função distribuição acumulada da variável X é dada por 𝐹𝑥 (𝑥) = 0,25𝑥 2 para 0 < 𝑥 < 4;

b) a mediana da variável X é dada por Me(X) = 3;

c) a função densidade de probabilidade da variável X é dada por 𝑓𝑥 (𝑥) = 0,5. 𝑥 para 0 < 𝑥 < 4;

d) a esperança matemática de X é dada por E(X) = 2;

e) P(1 < X < 3) = 0,5

1
 Utilizando a resolução algébrica (por integral) também encontramos a equação 𝑡 2 − 2. 𝑡 + 0,5 = 0, a partir da qual
aplicamos a fórmula de Bháskara para encontrar o valor de t.

          Receita Federal (Analista Tributário) Estatística                                                      62
          www.estrategiaconcursos.com.br                                                                         85

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Comentários:

O enunciado informa que a variável X representa a distância de um ponto de um alvo ao seu centro e que o raio
do alvo é igual a 4. Assim, sabemos que a variável assume valores no intervalo de 0 (no ponto central) a 4 (em
um ponto do extremo do alvo). O enunciado informa, ainda, que todos os pontos são equiprováveis.

Para resolver essa questão, precisamos observar que quanto maior a distância do ponto (valor de x), mais pontos
existem a essa distância, o que significa que a função densidade de probabilidade (f.d.p.) da variável é
proporcional a x:

                                                          𝑓(𝑥) = 𝑘. 𝑥

Vamos determinar o valor da constante 𝑘, considerando que a probabilidade associada a todo o intervalo (0, 4)
é igual a 1 (probabilidade do Espaço Amostral):

                                                             4

                                                  𝑃(𝑈) = ∫ 𝑘. 𝑥. 𝑑𝑥 = 1
                                                            0

                                             4
                                         𝑥2       42 02      16
                                     𝑘. [ ] = 𝑘. [ − ] = 𝑘. [ ] = 8𝑘 = 1
                                         2 0      2  2        2

                                                                  1
                                                            𝑘=
                                                                  8
                                                     1
Logo, a função densidade da variável é 𝑓(𝑥) = 8 𝑥 ou, em termos decimais, 𝑓(𝑥) = 0,125𝑥.

A alternativa C pede justamente a f.d.p., indicando uma função diferente da que calculamos, logo, podemos
concluir que ela está errada.

A alternativa A pede a função distribuição acumulada. Para isso, precisamos integrar a f.d.p., de 0 a 𝑥:
                                                      𝑥
                                                   1       1 𝑥2 𝑥2
                                           𝐹(𝑥) = ∫ 𝑥. 𝑑𝑥 = ×  =
                                                   8       8 2   16
                                                     0


Essa função em decimal é 𝐹(𝑥) = 0,0625𝑥 2 , que é diferente da f.d.a. indicada na alternativa A; logo, ela está
incorreta.

A alternativa B pede a mediana, que é o valor de 𝑥 para o qual a f.d.a. é igual a 0,5. Como já calculamos a f.d.a.,
podemos calcular o valor da mediana:

                                                                 𝑥2
                                                     𝐹(𝑥) =         = 0,5
                                                                 16


        Receita Federal (Analista Tributário) Estatística                                                       63
        www.estrategiaconcursos.com.br                                                                          85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                    𝑥 2 = 0,5 × 16 = 8

                                                            𝑥 = √8

Que é diferente de 3 (√8 ≅ 2,8). Logo, a alternativa B está errada.

A alternativa D pede a esperança, que corresponde à integral da f.d.p. multiplicada por x, no intervalo da
variável, no caso, (0, 4):

                             4                 4                     4
                              1         1 2      1 𝑥3    1 43 03   1 64     8
                   𝐸(𝑥) = ∫ 𝑥. 𝑥. 𝑑𝑥 = ∫ 𝑥 . 𝑑𝑥 = . [ ] = . [ − ] = . [ ] =
                              8         8        8 3 0 8 3     3   8 3      3
                            0                 0

                        8
Que é diferente de 2 (3 ≅ 2,7). Logo, a alternativa D está errada.

A alternativa E pede a probabilidade P(1 < X < 3), que pode ser calculada pela diferença entre a f.d.a. para x = 3
e a f.d.a. para x = 1:

                                             𝑃(1 < 𝑋 < 3) = 𝐹(3) − 𝐹(1)

                       𝑥2
Sabendo que 𝐹(𝑥) = 16, temos:

                                                              32   9
                                                     𝐹(3) =      =
                                                              16 16

                                                              12   1
                                                     𝐹(1) =      =
                                                              16 16

E a diferença é:

                                                              9   1   8
                                        𝑃(1 < 𝑋 < 3) =          −   =   = 0,5
                                                             16 16 16

Logo, a alternativa E está correta.

Gabarito: E

15.   (FGV/2018 – TJ/AL) Seja X uma variável aleatória do tipo contínua com função de densidade de
probabilidade dada por:

ƒx(x) = (2 – 2x) para 0 < x < 1 e Zero caso contrário

        Receita Federal (Analista Tributário) Estatística                                                      64
        www.estrategiaconcursos.com.br                                                                         85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Assim sendo, sobre as estatísticas de X tem-se que:

a) E(X) = 0,75;

b) Var(X) = 4;

c) Mo(X) = 0;

d) Me(X) = 0,25;

e) Q3 = 0,5

Comentários:

Em relação à alternativa A, a esperança é, por definição:

                                      ∞                      1                  1
                        𝐸(𝑋) = ∫ 𝑥. 𝑓(𝑥). 𝑑𝑥 = ∫ 𝑥. (2 − 2𝑥). 𝑑𝑥 = ∫ (2. 𝑥 − 2𝑥 2 ). 𝑑𝑥
                                      −∞                 0                      0

                                                                 1
                                                      2. 𝑥 3          2. 13    2 1
                                   𝐸(𝑋) = 𝑥 2 ]10 −          ] = 12 −       =1− =
                                                        3 0             3      3 3

Logo, a alternativa A está incorreta.

Em relação à alternativa B, precisamos de 𝐸(𝑋 2 ) para calcular a variância:

                                      ∞                      1                      1
                      𝐸(𝑋 2 ) = ∫ 𝑥 2 . 𝑓(𝑥). 𝑑𝑥 = ∫ 𝑥 2 . (2 − 2𝑥). 𝑑𝑥 = ∫ (2. 𝑥 2 − 2𝑥 3 ). 𝑑𝑥
                                  −∞                     0                          0

                                                 1       1
                                 2)
                                        2. 𝑥 3     2. 𝑥 4     2. 13 14 2 1 4 − 3 1
                           𝐸(𝑋        =        ] −        ] =      −   = − =    =
                                          3 0        4 0        3    2  3 2  6    6

A variância é, então:

                                            2)           2
                                                           1   1 2 1 1 3−2    1
                           𝑉(𝑋) = 𝐸(𝑋            − [𝐸(𝑋)] = − ( ) = − =    =
                                                           6   3   6 9  18   18

Logo, a alternativa B está incorreta.

Em relação à alternativa C, a moda corresponde ao valor de X ao qual está associado o maior valor da f.d.p.
Como a função assume valor no intervalo 0 < x < 1 e zero, caso contrário, então a f.d.p. para x = 0 assume o valor
0. Por isso, não é a moda da função. Logo, a alternativa C está incorreta.

         Receita Federal (Analista Tributário) Estatística                                                     65
         www.estrategiaconcursos.com.br                                                                        85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Para calcular a mediana e o terceiro quartil (alternativas D e E), precisamos da função de distribuição acumulada,
dada por:
                                            𝑥                𝑥
                                𝐹(𝑥) = ∫ 𝑓(𝑥). 𝑑𝑥 = ∫ (2 − 2𝑥). 𝑑𝑥 = 2. 𝑥 − 𝑥 2
                                           −∞               0

A mediana é o valor de x para o qual F(x) = 0,5:

                                                 𝐹(𝑥) = 2. 𝑥 − 𝑥 2 = 0,5

                                                  −𝑥 2 + 2. 𝑥 − 0,5 = 0

Multiplicando toda a equação por -1, temos:

                                                   𝑥 2 − 2. 𝑥 + 0,5 = 0

Pela fórmula de bhaskara, com a = 1, b = -2 e c = 0,5, temos:

                                     −𝑏 ± √𝑏 2 − 4. 𝑎. 𝑐 2 ± √4 − 2 2 ± √2
                                  𝑥=                    =          =
                                           2𝑎                2         2

Esse resultado é aproximadamente 1 ± 0,7. Como 1,7 está acima do limite superior, a mediana é
aproximadamente 0,3. Logo, a alternativa D está errada.

O terceiro quartil é o valor de x para o qual F(x) = 0,75:

                                                𝐹(𝑥) = 2. 𝑥 − 𝑥 2 = 0,75

                                                  −𝑥 2 + 2. 𝑥 − 0,75 = 0

                                                   𝑥 2 − 2. 𝑥 + 0,75 = 0

Pela fórmula de bhaskara, com a = 1, b = -2 e c = 0,75, temos:

                                         −𝑏 ± √𝑏 2 − 4. 𝑎. 𝑐 2 ± √4 − 3 2 ± 1
                                   𝑥=                       =          =
                                               2𝑎                 2       2

Ou seja, as raízes são x = 1,5 ou x = 0,5. Como x = 1,5 está acima do limite superior, então o 3º quartil é x = 0,5.
Logo, a alternativa E está correta.

Gabarito: E.

        Receita Federal (Analista Tributário) Estatística                                                        66
        www.estrategiaconcursos.com.br                                                                           85

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 09

16.    (FGV/2015 – TJ-BA) Seja X uma variável aleatória contínua com uma distribuição triangular, com
função densidade de probabilidade não nula no intervalo [0,2], dada por f(x) = 1/2.(2-x) , sendo nula caso
contrário. Então é possível afirmar que:

a) P(X > 1) = P( X ≤ 1) = 0,5

b) FX(x) = 1 – x2/4, é a função distribuição acumulada de X;

c) FX(1,5) = 15/16

d) E(X) = ¾, é a esperança matemática de X;

e) Me(X) > 1, onde Me(X) representa a mediana de X
                                                             ==219a34==

Comentários:

                                                                          1
O enunciado informa que a f.d.p. da variável é 𝑓(𝑥) = 2 . (2 − 𝑥), para o intervalo 0 ≤ 𝑥 ≤ 2.

Em relação à alternativa A, a probabilidade P(X ≤ 1) pode ser calculada como:

                                                                          1
                                                                            1
                                              𝑃(𝑋 ≤ 1) = ∫                    . (2 − 𝑥). 𝑑𝑥
                                                                          0 2

A integral, sem os limites, é:

                1                      1                   1           1 𝑥2     𝑥2
               ∫ . (2 − 𝑥). 𝑑𝑥 = ∫ (1 − 𝑥) 𝑑𝑥 = ∫ 1. 𝑑𝑥 − ∫ 𝑥. 𝑑𝑥 = 𝑥 − ×   =𝑥−
                2                      2                   2           2 2      4

Aplicando os limites, temos:

                                     1
                                         1                     12 02     1 3
                        𝑃(𝑋 ≤ 1) = ∫ (1 − 𝑥) . 𝑑𝑥 = (1 − 0) − ( − ) = 1 − =
                                    0    2                     4  4      4 4

Logo, P(X > 1) é a probabilidade complementar:

                                                                                          3 1
                                        𝑃(𝑋 > 1) = 1 − 𝑃(𝑋 ≤ 1) = 1 −                      =
                                                                                          4 4

Logo, a alternativa A está errada.

Em relação à alternativa B, a função distribuição acumulada é dada por (calculamos a integral na alternativa
anterior):

         Receita Federal (Analista Tributário) Estatística                                               67
         www.estrategiaconcursos.com.br                                                                  85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                   𝑥                   𝑥
                                                   1                       1              𝑥2
                       𝐹(𝑥) = 𝑃(𝑋 ≤ 𝑥) = ∫           . (2 − 𝑥). 𝑑𝑥 = ∫ (1 − 𝑥) . 𝑑𝑥 = 𝑥 −
                                                 0 2                  0    2              4

Logo, a alternativa B está errada.

Em relação à alternativa C, o valor de F(1,5) pode ser calculado aplicando-se x = 1,5 na função calculada na
alternativa anterior:

                                                    1,52 3 2,25 24 − 9 15
                                     𝐹(1,5) = 1,5 −     = −    =      =
                                                     4   2   4    16    16

Logo, a alternativa C está correta.

Em relação à alternativa D, a esperança matemática é dada por:

                                              2                    2
                                                1                      1
                                     𝐸(𝑋) = ∫ 𝑥. . (2 − 𝑥). 𝑑𝑥 = ∫ (𝑥 − 𝑥 2 ) . 𝑑𝑥
                                             0  2                 0    2

A integral, sem os limites, é:

                              1 2                  1 2       𝑥2 1 𝑥3 𝑥2 𝑥3
                        ∫ (𝑥 − 𝑥 ) 𝑑𝑥 = ∫ 𝑥. 𝑑𝑥 − ∫ 𝑥 . 𝑑𝑥 =   − ×  =   −
                              2                    2         2 2 3    2   6

Aplicando os limites, temos:

                                 2
                                 1 2         22 02 23 03   8 6−4 2
                    𝐸(𝑋) = ∫ (𝑥 − 𝑥 ) . 𝑑𝑥 =   − −( − )= 2− =   =
                            0    2           2  2  6  6    6  3   3

Logo, a alternativa D está incorreta.

Em relação à alternativa E, a mediana é o valor de x para o qual a f.d.a. é F(x) = 0,5. Vamos calcular o valor de
F(1) para avaliar se a mediana é superior a 1, como afirma a alternativa, ou não. Para isso, aplicamos x = 1 na
f.d.a. calculada na alternativa B:

                                                                12
                                                   𝐹(1) = 1 −      = 0,75
                                                                4

Isso significa que a mediana é inferior a 1 e, por isso, a alternativa E está errada.

Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                                    68
         www.estrategiaconcursos.com.br                                                                       85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

17.       (FGV/2016 – IBGE) Seja X uma variável aleatória mista com função densidade de probabilidade dada
por:
               𝟏
𝒇𝑿 (𝒙) = 𝒙𝟐 𝒑𝒂𝒓𝒂 𝟏 < 𝒙 ≤ 𝟒, 𝑷(𝑿 = 𝟏) = 𝟎, 𝟐𝟓, sendo igual a zero caso contrário.

Então os valores de 𝑷(𝑿 ≤ 𝟐) e 𝑬(𝑿𝟐 ), esperança matemática de X ao quadrado, são respectivamente iguais
a:

a) 0,25 e 2,50;

b) 0,50 e 2,50;

c) 0,50 e 3,25;

d) 0,75 e 2,50;

e) 0,75 e 3,25.

Comentários:

Trata-se de uma variável mista, com natureza discreta para X = 1 e contínua para o intervalo (1,4]. Assim, a
probabilidade 𝑃(𝑋 ≤ 2) pode ser calculada como:

                                                                                    2
                                                                                      1
                               𝑃(𝑋 ≤ 2) = 𝑃(𝑋 = 1) + 𝑃(1 < 𝑋 ≤ 2) = 0,25 + ∫            2
                                                                                          𝑑𝑥
                                                                                    1 𝑥

A integral, sem os limites, é:

                                          1         −2
                                                            𝑥 −2+1   𝑥 −1    1
                                        ∫ 2 𝑑𝑥 = ∫ 𝑥 . 𝑑𝑥 =        =      =−
                                         𝑥                  −2 + 1 −1        𝑥

Aplicando os limites, temos:

                                              2
                                             1           1       1        1
                                          ∫    2
                                                 𝑑𝑥 = (−  ) − (−  ) = 1 −   = 0,5
                                           1 𝑥           2       1        2

Logo:

                                                  𝑃(𝑋 ≤ 2) = 0,25 + 0,5 = 0,75

Analogamente, o segundo momento, 𝐸(𝑋 2 ), pode ser calculado como:

                                                               4                 4
                                   2)      2
                                                               1   2
                             𝐸(𝑋        = 1 × 𝑃(𝑋 = 1) + ∫ 𝑥 × 2 . 𝑑𝑥 = 0,25 + ∫ 1 . 𝑑𝑥
                                                          1   𝑥                 1

           Receita Federal (Analista Tributário) Estatística                                             69
           www.estrategiaconcursos.com.br                                                                85

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 09

Considerando que a integral é ∫ 1. 𝑑𝑥 = 𝑥, aplicando os limites, temos:

                                                  4
                                                ∫ 1. 𝑑𝑥 = (4) − (1) = 3
                                                 1

Logo:

                                                𝐸(𝑋 2 ) = 0,25 + 3 = 3,25

Gabarito: E

        Receita Federal (Analista Tributário) Estatística                    70
        www.estrategiaconcursos.com.br                                       85

                                        


---

     Equipe Exatas Estratégia Concursos
     Aula 09

                               QUESTÕES COMENTADAS – FGV

Teoremas de Desigualdade

1.         (FGV/2022 – TRT/MA) Pela Desigualdade de Tchebichev, se X é uma variável aleatória com média  e
desvio padrão , a probabilidade de que o valor de X se afaste de  por no mínimo 5 é menor ou igual a
a) 0,04.
b) 0,10.
c) 0,12.
d) 0,20.
e) 0,25.

Comentários:

O Teorema (ou Desigualdade) de Tchebichev permite calcular probabilidades associadas a uma variável, sem
que a sua distribuição seja conhecida:

                                                                       𝜎
                                                    𝑃(|𝑋 − 𝜇| ≥ 𝛿) ≤
                                                                       𝛿

A probabilidade de a variável se afastar (para cima ou para baixo) da média 𝜇 por, no mínimo, 𝜹 = 𝟓. 𝝈 é:

                                                             𝜎       𝜎       1
                                   𝑃(|𝑋 − 𝜇| ≥ 5. 𝜎) ≤            =       =    = 0,04
                                                           (5. 𝜎)   25. 𝜎   25

Assim, a probabilidade buscada é menor ou igual a 0,04.

Gabarito: A

2.    (FGV/2019 – DPE/RJ) Suponha que A seja a variável aleatória da quantidade (centenas) mensal de
novos atendimentos feitos pela Defensoria Pública, sendo uma série estacionária. A distribuição de
probabilidades de A não é conhecida, mas sabe-se que E(A) = 7 e Var(A) = 4.

Apesar da pouca informação, é correto estabelecer que:

a) P(A < 3 ou A > 10) ≤ 4/9;

b) P(A >8) > 0,25;

            Receita Federal (Analista Tributário) Estatística                                               71
            www.estrategiaconcursos.com.br                                                                  85

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 09

c) P(5 < A < 9) ≥ 1/2;

d) P(A < 15) ≥ 32/36;

e) P(2 < A < 12) ≤ 4/25.

Comentários:

Essa questão não informa que tipo de distribuição a variável A segue, mas informa a sua média e variância.
Podemos ter alguma noção de probabilidade nestes casos, utilizando o teorema de Chebyshev:

                                                                           𝜎
                                                 𝑃(|𝐴 − 𝜇| ≥ 𝛿) ≤
                                                             ==219a34==

                                                                           𝛿

Sabendo que a média é 𝜇 = 𝐸(𝐴) = 7 e que a variância é 𝜎 = 𝑉𝑎𝑟(𝐴) = 4, temos:

                                                                           4
                                                 𝑃(|𝐴 − 7| ≥ 𝛿) ≤
                                                                           𝛿

É importante interpretar o lado esquerdo da inequação. Para que a distância de A à média 7 seja maior que (ou
igual a) um valor 𝛿, é necessário que A seja menor que (ou igual a) 7 − 𝛿 ou maior que (ou igual a) 7 + 𝛿:

                                      |𝐴 − 7| ≥ 𝛿 = 𝐴 ≤ 7 − 𝛿 OU 𝐴 ≥ 7 + 𝛿

Vamos começar pela alternativa C, que pede a probabilidade de 5 < A < 9. Ambos os extremos estão a uma
distância 𝛿 = 2 da média 𝜇 = 7. Então, vamos calcular o Teorema de Chebyshev para 𝛿 = 2:

                                                                          4
                                              𝑃(|𝐴 − 7| ≥ 2) ≤              =1
                                                                          2

Embora essa inequação não seja nada informativa (afinal, qualquer probabilidade é menor ou igual a 1), mas é
importante pontuar que essa probabilidade corresponde à probabilidade de 𝐴 ≤ 5 OU 𝐴 ≥ 9:

                                               𝑃(𝐴 ≤ 5 OU 𝐴 ≥ 9) ≤ 1

A probabilidade desejada corresponde ao complemento dessa probabilidade:

                                     𝑃(5 < 𝐴 < 9) = 1 − 𝑃(𝐴 ≤ 5 OU 𝐴 ≥ 9)

                                             𝑃(5 < 𝐴 < 9) ≥ 1 − 1 = 0

Que também não é nada informativo, mas concluímos que a alternativa C está incorreta.

A alternativa E pede a probabilidade P(2 < A < 12), em que os extremos estão a 𝛿 = 5 de distância da média 𝜇 =
7. Então, vamos calcular o Teorema de Chebyshev para 𝛿 = 5:

         Receita Federal (Analista Tributário) Estatística                                                 72
         www.estrategiaconcursos.com.br                                                                    85

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 09

                                                                   4    4
                                                𝑃(|𝐴 − 7| ≥ 5) ≤     =
                                                                   5   25

Essa probabilidade corresponde à probabilidade de 𝐴 ≤ 2 OU 𝐴 ≥ 12:

                                                                         4
                                               𝑃(𝐴 ≤ 2 OU 𝐴 ≥ 12) ≤
                                                                        25

A probabilidade desejada corresponde ao complemento dessa probabilidade:

                                      𝑃(2 < 𝐴 < 12) = 1 − 𝑃(𝐴 ≤ 2 OU 𝐴 ≥ 12)

                                                                     4   16
                                             𝑃(2 < 𝐴 < 12) ≥ 1 −       =
                                                                    25 25

E assim concluímos que a alternativa E está incorreta.

Agora vejamos a alternativa A, que pede a probabilidade de A < 3 ou A > 10, ou seja, em que os extremos não
estão equidistantes em relação à média. Mas vamos efetuar os cálculos para o extremo mais próximo, a uma
distância 𝛿 = 3 da média:

                                                                   4   4
                                                𝑃(|𝐴 − 7| ≥ 3) ≤     =
                                                                   3   9

Ou seja:

                                                                         4
                                                𝑃(𝐴 ≤ 4 OU 𝐴 ≥ 10) ≤
                                                                         9

O intervalo indicado na alternativa, (𝐴 < 3 OU 𝐴 > 10), engloba ainda menos valores da variável, o que nos
permite concluir que a probabilidade será menor ou igual à probabilidade que calculamos:

                                                                               4
                                  𝑃(𝐴 < 3 OU 𝐴 > 10) ≤ 𝑃(𝐴 ≤ 4 OU 𝐴 ≥ 10) ≤
                                                                               9

Portanto, podemos afirmar que:

                                                                         4
                                                𝑃(𝐴 < 3 OU 𝐴 > 10) ≤
                                                                         9

Logo, a alternativa A está correta.

Em relação à alternativa D, vamos aplicar a desigualdade de Tchebyshev para 𝛿 = 8, uma vez que 15 está a essa
distância da média 7:

           Receita Federal (Analista Tributário) Estatística                                              73
           www.estrategiaconcursos.com.br                                                                 85

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                                                  4    1
                                              𝑃(|𝐴 − 7| ≥ 8) ≤      =
                                                                  8   16

Essa é a probabilidade P(A ≤ -1 OU A ≥ 15):

                                                                        1
                                            𝑃(𝐴 ≤ −1 OU 𝐴 ≥ 15) ≤
                                                                       16

Como a variável aleatória representa uma quantidade, a probabilidade 𝑃(𝐴 ≤ −1) é nula, portanto:

                                                                             1
                                    𝑃(𝐴 ≥ 15) = 𝑃(𝐴 ≤ −1 OU 𝐴 ≥ 15) ≤
                                                                            16

E a probabilidade P(A < 15) é complementar:

                                            𝑃(𝐴 < 15) = 1 − 𝑃(𝐴 ≥ 15)

                                                                  1   15
                                              𝑃(𝐴 < 15) ≥ 1 −       =
                                                                 16 16

Que é diferente da probabilidade indicada na alternativa D, logo, ela está incorreta.

A alternativa B pede a probabilidade associada a um valor ainda mais próximo da média do que aquele indicado
na alternativa C. Como não foi possível obter qualquer estimativa de probabilidade em relação ao intervalo
indicado na alternativa C, utilizando o teorema de Chebyshev, também não será possível obter para o intervalo
indicado na alternativa B.

Nessa situação, podemos aplicar a desigualdade de Markov, válida para variáveis não negativas, que é
justamente o caso. A desigualdade de Markov afirma que:

                                                                𝐸(𝐴)
                                                   𝑃(𝐴 ≥ 𝜔) ≤
                                                                 𝜔

Sendo E(A) = 7 e 𝜔 = 8, temos:

                                                                  7
                                                     𝑃(𝐴 ≥ 8) ≤
                                                                  8

E a probabilidade P(A > 8) será necessariamente menor ou igual que a probabilidade calculada:

                                                                       7
                                              𝑃(𝐴 > 8) ≤ 𝑃(𝐴 ≥ 8) ≤
                                                                       8

Que é totalmente diferente da probabilidade indicada na alternativa, logo, ela está errada.

Gabarito: A

         Receita Federal (Analista Tributário) Estatística                                                74
         www.estrategiaconcursos.com.br                                                                   85

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 09

                                   LISTA DE QUESTÕES – FGV

Noções de variáveis contínuas

1.     (FGV/2024 – TJ/MS) Seja 𝒇(𝒙) = 𝒌, −𝟏 ≤ 𝒙 ≤ 𝟏, uma função densidade de probabilidade de
variável aleatória contínua, onde 𝒇(𝒙) = 𝟎 para 𝒙 > 𝟏 ou 𝒙 < −𝟏. O valor de 𝒌 deve ser igual a:

a) 1

b) 1/2

c) 1/3

d) 1/e

e) 1/5

2.    (FGV/2024 – TCE/PA) A densidade de probabilidade de uma variável aleatória segue a função
𝒑(𝒙) = 𝟏 − |𝒙|, caso |𝒙| < 𝟏, ou 0, caso contrário.
Ao retirar-se uma amostra aleatória 𝒙, a probabilidade de −𝟑, 𝟎 < 𝒙 < 𝟎, 𝟖 é

a) 0,96

b) 0,98

c) 0,99

d) 0,92

e) 0,04

                                                   𝒌
3.        (FGV/2024 – TJ/AP) Seja 𝒇(𝒙) = 𝒙 , 𝟏 ≤ 𝒙 ≤ 𝒆, onde "𝒆" é o número neperiano, uma função
densidade de probabilidade de variável aleatória contínua, onde 𝒇(𝒙) = 𝟎 para 𝒙 > 𝒆 ou 𝒙 < 𝟏. O valor
de 𝒌 deve ser igual a:

a) 1

b) 2

           Receita Federal (Analista Tributário) Estatística                                      75
           www.estrategiaconcursos.com.br                                                         85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

c) 3

d) 4

e) 5

4.        (FGV/2024 – SES/MT) Uma variável contínua X tem função de densidade de probabilidade dada por
                                                         𝒌𝒙,    𝟎<𝒙<𝟐
                                            𝒇(𝒙) = {                      }
                                                       𝟎, 𝒏𝒐𝒔 𝒅𝒆𝒎𝒂𝒊𝒔 𝒄𝒂𝒔𝒐𝒔
Nesse caso, se 𝒌 é uma constante, o valor esperado de X é igual a

a) 0

b) 1/2

c) 3/5

d) 4/3

5.        (FGV/2024 – Pref. Vitória) Considere uma variável aleatória contínua X com função de densidade
de probabilidade dada por 𝒇(𝒙) = 𝒌𝒙𝟐 , se 𝟎 < 𝒙 < 𝟑 e 𝒇(𝒙) = 𝟎, nos demais casos, sendo 𝒌 constante.

A média de X é igual a

a) 1/3

b) 18/24

c) 54/9

d) 1

e) 81/36

6.        (FGV/2024 – TJ/RR) Uma variável aleatória X tem função de densidade de probabilidade dada por
𝒇(𝒙) = 𝒌𝒙𝟐 , se −𝟏 < 𝒙 < 𝟏 e 𝒇(𝒙) = 𝟎, nos demais casos, 𝒌 constante. A variância de X é então igual a

a) 1/5

b) 1/4


           Receita Federal (Analista Tributário) Estatística                                         76
           www.estrategiaconcursos.com.br                                                            85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

c) 1/3

d) 2/5

e) 3/5

7.        (FGV/2023 – BANESTES) A função de densidade da variável aleatória X é dada por:
                                                 𝟏 𝟐    𝟓
                                   𝒇(𝒙) = {−    𝟑𝟔
                                                   𝒙 +
                                                       𝟏𝟖
                                                          𝒙 + 𝒌,    𝒔𝒆 𝟐 ≤ 𝒙 ≤ 𝟖}
                                              𝟎,                 𝒄𝒂𝒔𝒐 𝒄𝒐𝒏𝒕𝒓á𝒓𝒊𝒐

em que k é uma constante a determinar.

                                                       𝟖                  𝟖
Para facilitar os cálculos, informa-se que ∫𝟐 𝒙𝟐 𝒅𝒙 = 𝟏𝟔𝟖 e ∫𝟐 𝒙 𝒅𝒙 = 𝟑𝟎. Nessas condições, o valor
correto de k é igual a

a) 0

b) 4/9

c) -4/9

d) 1/3

e) -1/3

8.     (FGV/2023 – TJ/SE - Adaptada) Seja f(x) = k.x3, 0 ≤ x ≤ 1, uma função densidade de probabilidade
de variável aleatória contínua, onde f(x) = 0 para x > 1 ou x < 0.

O valor de k deve ser igual a:

a) 0

b) 1

c) 2

d) 3

e) 4

           Receita Federal (Analista Tributário) Estatística                                        77
           www.estrategiaconcursos.com.br                                                           85

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 09

9.        (FGV/2022 – TRT/MA) Uma variável aleatória X tem função de densidade de probabilidade dada
por:
                                                       𝒌𝒙𝟐 ,   𝒔𝒆 𝟎 < 𝒙 < 𝟑
                                            𝒇(𝒙) = {                        }
                                                       𝟎, 𝒏𝒐𝒔 𝒅𝒆𝒎𝒂𝒊𝒔 𝒄𝒂𝒔𝒐𝒔

O valor da constante 𝒌 é

a) 1/9

b) 1/7

c) 1/6

d) 1/3

e) 3

10.       (FGV/2022 – TRT/MA) Uma variável aleatória X tem função de distribuição dada por:
                                                        𝟎,      𝒔𝒆 𝒙 < 𝟎
                                                         𝟐
                                                𝑭(𝒙) = {𝒙 , 𝒔𝒆 𝟎 ≤ 𝒙 ≤ 𝟏}
                                                        𝟏,      𝒔𝒆 𝒙 > 𝟏

O valor da probabilidade P[X > 0,8] é

a) 0,16
b) 0,24
c) 0,36
d) 0,64
e) 0,72

11.       (FGV/2022 – TRT/PB) Considere uma variável aleatória X com função de densidade de
probabilidade dada por 𝒇(𝒙) = 𝒙−𝟐 , se 𝒙 ≥ 𝟏 e 𝒇(𝒙) = 𝟎, nos demais casos.

A média de X é igual a
a) 1.
b) 2.
c) 3.
d) 8.
e) ထ.


           Receita Federal (Analista Tributário) Estatística                                     78
           www.estrategiaconcursos.com.br                                                        85

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 09

12.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória contínua X tem função de densidade de
probabilidade dada por f(x) = kx, se 0 < x < 1, k constante, e f(x) = 0, nos demais casos.

A média da variável Y = 3X + 5 é igual a

a) 1

b) 2.

c) 5.

d) 6.

e) 7.
                                                             ==219a34==

13.    (FGV/2019 – DPE/RJ) Levantamentos prévios indicaram que o tempo que o cidadão leva para ser
atendido nas repartições da Defensoria Pública é uma variável aleatória com função de densidade dada
por:

                𝒇𝑻 (𝒕) = 𝟐. (𝟏 − 𝒕),         𝒑𝒂𝒓𝒂 𝟎 < 𝒕 < 𝟏;              𝒆   𝒁𝒆𝒓𝒐,   𝒄𝒂𝒔𝒐 𝒄𝒐𝒏𝒕𝒓á𝒓𝒊𝒐

Onde t é o tempo decorrido do momento em que o cidadão chega à repartição até o instante do
atendimento, medido em fração de hora. Se necessário, utilize a informação aproximada √𝟐 ≅ 𝟏, 𝟒.

Assim sendo, é correto concluir que:

a) em média, um cidadão leva 25 minutos para ser atendido;

b) a estatística da Moda de tempo de espera é igual a zero;

c) mais de 75% dos indivíduos que procuram a Defensoria levam pelo menos meia hora para ser atendidos;

d) a probabilidade de que alguém que já esteja aguardando há 30 minutos seja atendido nos próximos 15
minutos é de 0,5;

e) a estatística da Mediana da distribuição do tempo de espera é igual a 18 minutos.

14.     (FGV/2018 – TJ/AL) Seja X uma variável aleatória que representa a distância entre o ponto de um
alvo circular atingido pelo lançamento de um dardo e o centro desse mesmo alvo.

Supondo que todos os pontos do círculo têm igual probabilidade de ser acertado e que o raio do alvo é
igual a 4, sobre X é correto afirmar que:

a) a função distribuição acumulada da variável X é dada por 𝐹𝑥 (𝑥) = 0,25𝑥 2 para 0 < 𝑥 < 4;


         Receita Federal (Analista Tributário) Estatística                                             79
         www.estrategiaconcursos.com.br                                                                85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 09

b) a mediana da variável X é dada por Me(X) = 3;

c) a função densidade de probabilidade da variável X é dada por 𝑓𝑥 (𝑥) = 0,5. 𝑥 para 0 < 𝑥 < 4;

d) a esperança matemática de X é dada por E(X) = 2;

e) P(1 < X < 3) = 0,5

15.   (FGV/2018 – TJ/AL) Seja X uma variável aleatória do tipo contínua com função de densidade de
probabilidade dada por: ƒx(x) = (2 – 2x) para 0 < x < 1 e Zero caso contrário.
Assim sendo, sobre as estatísticas de X tem-se que:

a) E(X) = 0,75;

b) Var(X) = 4;

c) Mo(X) = 0;

d) Me(X) = 0,25;

e) Q3 = 0,5

16.    (FGV/2015 – TJ-BA) Seja X uma variável aleatória contínua com uma distribuição triangular, com
função densidade de probabilidade não nula no intervalo [0,2], dada por f(x) = 1/2.(2-x) , sendo nula caso
contrário.
Então é possível afirmar que:

a) P(X > 1) = P( X ≤ 1) = 0,5

b) FX(x) = 1 – x2/4, é a função distribuição acumulada de X;

c) FX(1,5) = 15/16

d) E(X) = ¾, é a esperança matemática de X;

e) Me(X) > 1, onde Me(X) representa a mediana de X

         Receita Federal (Analista Tributário) Estatística                                             80
         www.estrategiaconcursos.com.br                                                                85

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 09

17.   (FGV/2016 – IBGE) Seja X uma variável aleatória mista com função densidade de probabilidade
dada por:
             𝟏
𝒇𝑿 (𝒙) = 𝒙𝟐 𝒑𝒂𝒓𝒂 𝟏 < 𝒙 ≤ 𝟒, 𝑷(𝑿 = 𝟏) = 𝟎, 𝟐𝟓, sendo igual a zero caso contrário.

Então os valores de 𝑷(𝑿 ≤ 𝟐) e 𝑬(𝑿𝟐 ), esperança matemática de X ao quadrado, são respectivamente
iguais a:

a) 0,25 e 2,50;

b) 0,50 e 2,50;

c) 0,50 e 3,25;

d) 0,75 e 2,50;

e) 0,75 e 3,25.

            Receita Federal (Analista Tributário) Estatística                                 81
            www.estrategiaconcursos.com.br                                                    85

                                          


---

Equipe Exatas Estratégia Concursos
Aula 09

                                                GABARITO
 1.   LETRA B                                7. LETRA C                  13. LETRA E
 2.   LETRA B                                8. LETRA E                  14. LETRA E
 3.   LETRA A                                9. LETRA A                  15. LETRA E
 4.   LETRA D                                10. LETRA C                 16. LETRA C
 5.   LETRA E                                11. LETRA E                 17. LETRA E
 6.   LETRA E                                12. LETRA E

      Receita Federal (Analista Tributário) Estatística                                82
      www.estrategiaconcursos.com.br                                                   85

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 09

                                   LISTA DE QUESTÕES – FGV

Teoremas de Desigualdade

1.     (FGV/2022 – TRT/MA) Pela Desigualdade de Tchebichev, se X é uma variável aleatória com média
 e desvio padrão , a probabilidade de que o valor de X se afaste de  por no mínimo 5 é menor ou igual
a
a) 0,04.
b) 0,10.
c) 0,12.
                                                               ==219a34==

d) 0,20.
e) 0,25.


2.    (FGV/2019 – DPE/RJ) Suponha que A seja a variável aleatória da quantidade (centenas) mensal de
novos atendimentos feitos pela Defensoria Pública, sendo uma série estacionária. A distribuição de
probabilidades de A não é conhecida, mas sabe-se que E(A) = 7 e Var(A) = 4.
Apesar da pouca informação, é correto estabelecer que:

a) P(A < 3 ou A > 10) ≤ 4/9;

b) P(A >8) > 0,25;

c) P(5 < A < 9) ≥ 1/2;

d) P(A < 15) ≥ 32/36;

e) P(2 < A < 12) ≤ 4/25.

           Receita Federal (Analista Tributário) Estatística                                          83
           www.estrategiaconcursos.com.br                                                             85

                                         


---

Equipe Exatas Estratégia Concursos
Aula 09

                                                GABARITO
 1. LETRA A                                  2. LETRA A

      Receita Federal (Analista Tributário) Estatística                  84
      www.estrategiaconcursos.com.br                                     85

                                    


---

---
