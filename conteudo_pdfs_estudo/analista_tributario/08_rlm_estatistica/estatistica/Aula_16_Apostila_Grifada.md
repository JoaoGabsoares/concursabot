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
arquivo_origem: Aula 16_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '16'
titulo_aula: Índice
---

# Índice

Índice
1)  Regressão Múltipla


)  Variável Binária ou Variável Dummy                                                                                                                                                      24

3)  Problema da Especificação                                                                                                                                                               29
)  Transformação de Box-Cox                                                                                                                                                                36
..............................................................................................................................................................................................

)  Questões Comentadas - Regressão Múltipla - FGV                                                                                                                                          42

6)  Aviso importante - Orientação de estudo                                                                                                                                                 47
..............................................................................................................................................................................................

)  Questões Comentadas - Regressão Múltipla - Inéditas                                                                                                                                     48

8)  Questões Comentadas - Problema de Especificação - Inéditas                                                                                                                              62
)  Questões Comentadas - Transformação de Box-Cox - Inéditas                                                                                                                               64
..............................................................................................................................................................................................

)   Lista de Questões - Regressão Múltipla - FGV                                                                                                                                          65

11)   Lista de Questões - Regressão Múltipla - Inéditas                                                                                                                                     68
)   Lista de Questões - Problema de Especificação - Inéditas                                                                                                                              74
..............................................................................................................................................................................................

)   Lista de Questões - Transformação de Box-Cox - Inéditas                                                                                                                               76


---

                                  REGRESSÃO MÚLTIPLA
Como vimos, na regressão linear simples queremos calcular a expressão matemática que relaciona Y (variável
dependente) em função de X (variável independente). Trata-se de uma equação que representa uma reta:

                                                𝑌 = 𝛼 + 𝛽𝑥

em que: 𝛼 é o coeficiente linear da reta (indica em que ponto a reta corta o eixo y); e 𝛽 é a taxa de variação
ou coeficiente angular da reta.

Já na regressão múltipla temos uma variável dependente e duas ou mais variáveis independentes ou
explicativas. Utilizamos a regressão múltipla para estimar o valor de uma variável dependente com base em
um conjunto de outras variáveis independentes.

O modelo de regressão múltipla é dado por:


                               𝒀 = 𝜶 + 𝜷𝟏 𝒙𝟏 + 𝜷𝟐 𝒙𝟐 + ⋯ + 𝜷𝒌 𝒙𝒌 + 𝜺

em que:

    𝑌: é a variável dependente;
    𝛼: é um coeficiente técnico fixo, um valor de base a partir do qual começa Y ou intercepto;
    𝛽𝑖 : são coeficientes de regressão;
    𝑥𝑖 : são variáveis independentes; e
    𝜀: é o erro.

A equação de regressão estimada a partir de dados amostrais é expressa por:

                                  ̂ = 𝒂 + 𝒃𝟏 𝒙𝟏 + 𝒃𝟐 𝒙𝟐 + ⋯ + 𝒃𝒌 𝒙𝒌
                                  𝒀
em que 𝑌̂ é o valor estimado para a variável dependente e números 𝑏𝑖 são chamados de coeficientes de
regressão parcial.


É importante ressaltar que o número de observações da amostra deve exceder o número de variáveis
explicativas em pelo menos 2. Isto é, se tivermos 2 variáveis explicativas (independentes), serão necessárias
04 (quatro) observações na amostra.


---

Assim como ocorreu na regressão linear simples, na regressão múltipla precisamos que os seguintes
pressupostos sejam atendidos:

1) 𝑬(𝜺𝒊 ) = 𝟎:

A média dos erros deve ser igual a zero.

2) 𝑽𝒂𝒓(𝜺𝒊 ) = 𝝈²:

A variância do erro deve ser constante. Essa propriedade é denominada de homocedasticia. Isto somente é
possível se a variável ε tiver variância constante. Ou seja, se ela tiver sempre a mesma variância,
independente de qual seja o valor de X.

3) 𝑪𝒐𝒓𝒓(𝜺𝒊 , 𝜺𝒋 ) = 𝟎, 𝒑𝒂𝒓𝒂 𝒊 ≠ 𝒋:

Essa propriedade garante que os erros cometidos pelo modelo são independentes, isto é, não se
correlacionam.


4) Os erros têm distribuição normal.

Outro importante pressuposto é de que não pode existir nenhuma relação linear entre as variáveis
independentes. Se no modelo tivermos duas variáveis explicativas ou independentes proporcionais, ou seja,
altamente correlacionadas, teremos um problema denominado de multicolinearidade, que, muitas vezes,
torna a estimativa dos parâmetros insignificantes. Por exemplo, teríamos um caso de multicolinearidade se
𝑋1 = 𝑋2 + 3 × 𝑋3 ou se 𝑋2 = 2 × 𝑋1.

O conceito por trás do modelo de regressão linear múltipla é o de ceteris paribus, ou seja, todo o resto
constante. Significa que mantendo outros fatores fixos, podemos estimar o efeito de X (variável explicativa
ou independente) sobre Y (variável dependente).

Na estimativa dos parâmetros do modelo de regressão linear múltipla, precisaremos recorrer aos conceitos
de matrizes. Esse modelo, utilizando a notação matricial, pode ser escrito da seguinte forma:


                                              𝒚 = 𝑿𝜷 + 𝑬


---

A matriz-coluna 𝒚 contém os 𝑛 valores observados de 𝑌 na amostra:

                                                     𝒀𝟏
                                                     𝒀
                                                𝒚 = [ 𝟐]
                                                      ⋮
                                                     𝒀𝒏

A matriz-coluna 𝑬 contém os erros aleatórios:

                                                   𝜺𝟏
                                                   𝜺𝟐
                                                𝑬=[ ⋮]
                                                   𝜺𝒏

A matriz-coluna 𝜷 contém os parâmetros desconhecidos da regressão múltipla:

                                                    𝜶
                                                    𝜷𝟏
                                                𝜷 = 𝜷𝟐
                                                     ⋮
                                                   [𝜷𝒌 ]

A matriz 𝑿 representa as variáveis independentes 𝑋1, 𝑋2 , ⋯, 𝑋𝑛 . Para cada variável 𝑋𝑖 teremos 𝑛 valores
associados. Reparem que a primeira coluna é composta apenas por valores 1, pois corresponde ao termo
constante:


                                     𝟏 𝒙𝟏𝟏          𝒙𝟐𝟏    … 𝒙𝒌𝟏
                                     𝟏 𝒙𝟏𝟐          𝒙𝟐𝟐    … 𝒙𝒌𝟐
                                  𝑿=[                            ]
                                      ⋮ ⋮            ⋮     ⋱  ⋮
                                     𝟏 𝒙𝟏𝒏          𝒙𝟐𝒏    … 𝒙𝒌𝒏

Também podemos empregar a notação matricial para representar a equação de regressão estimada. Nesse
caso, temos a seguinte relação:

                                                     ̂
                                                ̂ = 𝑿𝜷
                                                𝒚


---

Agora, a matriz 𝛽̂ representa a estimativa dos parâmetros do modelo de regressão múltipla:

                                                     𝒂
                                                     𝒃𝟏
                                                 ̂ = 𝒃𝟐
                                                 𝜷
                                                      ⋮
                                                    [𝒃𝒌 ]

De igual modo, as estimativas dos valores observados de Y são representadas por:

                                                     ̂𝟏
                                                     𝒀
                                                     ̂
                                                 ̂ = 𝒀𝟐
                                                 𝒚
                                                      ⋮
                                                     ̂𝒏 ]
                                                    [𝒀


Assim, pelo método dos mínimos quadrados ordinários (MQO), podemos demonstrar que o estimador de
𝛽̂ é expresso por:

                                            ̂ = (𝑿𝑻 𝑿)−𝟏 𝑿𝑻 𝒚
                                            𝜷

em que 𝑋 𝑇 é a transposta da matriz 𝑋; e (𝑋 𝑇 𝑋)−1 é a inversa da matriz 𝑋 𝑇 𝑋.

Os estimadores de mínimos quadrados, assim como no caso da regressão linear simples, são lineares, não
viciados e têm variância mínima na classe de estimadores lineares.

Além disso, assim como no caso da regressão linear simples, os estimadores de mínimos quadrados dos
parâmetros do modelo de regressão linear múltipla são equivalentes aos estimadores de máxima
verossimilhança, sob a suposição de normalidade dos erros.

Se no modelo de regressão linear múltipla tivermos duas variáveis explicativas ou independentes
proporcionais, ou seja, altamente correlacionadas, teremos um problema denominado de
multicolinearidade, que, muitas vezes, torna a estimativa dos parâmetros insignificantes. Assim, não
pode haver nenhuma relação linear entre as variáveis independentes.


---

Determinar o modelo de regressão linear múltipla aplicável aos dados apresentados a seguir:
                                         Y    X1   X2
                                         1    1    1
                                         2    2    2
                                         3    2    2
                                         4    3    3
                                         5    4    5


Atenção, caros alunos! Busquei detalhar ao máximo as etapas apresentadas no exemplo,
porém, é muito importante que vocês revisem as propriedades e operações envolvendo
matrizes. Tenham ciência de que as bancas não vão cobrar todas as etapas aqui descritas,
pois é um procedimento muito trabalhoso (normalmente, esse tipo de análise é feito com
o auxílio de computador).

Nessa questão, teremos que calcular 𝑋 𝑇 , 𝑋 𝑇 𝑋, (𝑋 𝑇 𝑋)−1 e 𝑋 𝑇 𝑦, sendo que:

                                   1      1   1            1
                                   1      2   2            2
                                𝑋= 1      2   2    e    𝑦= 3
                                   1      3   3            4
                                  [1      4   5]          [5 ]

Observem que a primeira coluna da matriz 𝑿 é composta apenas por valores 1.

a) matriz transposta de 𝑿 é:
                                       1      1 1 1 1
                                    𝑇
                                  𝑋 = [1      2 2 3 4]
                                       1      2 2 3 5

b) calcular 𝑿𝑻 𝑿 por meio da operação de multiplicação de matrizes:
                                                      1 1 1
                                   1 1 1 1 1 1 2 2
                             𝑇
                           𝑋 𝑋 = [1 2 2 3 4] 1 2 2
                                   1 2 2 3 5 1 3 3
                                                     [1 4 5 ]


---

A multiplicação de uma matriz 3 × 5 por 5 × 3 resulta em uma matriz 3 × 3. Para encontrar
os termos da operação de multiplicação, temos que multiplicar os termos das linhas da matriz
𝑋 𝑇 pelos termos das colunas de 𝑋:

                      𝑎11 = 1 × 1 + 1 × 1 + 1 × 1 + 1 × 1 + 1 × 1 = 5
                      𝑎12 = 1 × 1 + 1 × 2 + 1 × 2 + 1 × 3 + 1 × 4 = 12
                      𝑎13 = 1 × 1 + 1 × 2 + 1 × 2 + 1 × 3 + 1 × 5 = 13

                      𝑎21 = 1 × 1 + 2 × 1 + 2 × 1 + 3 × 1 + 4 × 1 = 12
                      𝑎22 = 1 × 1 + 2 × 2 + 2 × 2 + 3 × 3 + 4 × 4 = 34
                      𝑎23 = 1 × 1 + 2 × 2 + 2 × 2 + 3 × 3 + 4 × 5 = 38

                      𝑎31 = 1 × 1 + 2 × 1 + 2 × 1 + 3 × 1 + 5 × 1 = 13
                      𝑎32 = 1 × 1 + 2 × 2 + 2 × 2 + 3 × 3 + 5 × 4 = 38
                      𝑎33 = 1 × 1 + 2 × 2 + 2 × 2 + 3 × 3 + 5 × 5 = 43

                                  𝑎11   𝑎12   𝑎13       5 12 13
                         𝑋 𝑇 𝑋 = [𝑎21   𝑎22   𝑎23 ] = [12 34 38]
                                  𝑎31   𝑎32   𝑎33      13 38 43

c) calcular matriz inversa (𝑿𝑻 𝑿)−𝟏 :

A matriz inversa pode ser calculada pelo método da matriz adjunta, em que temos a relação:

                                                  𝑀̅
                                        𝑀−1 =
                                                𝑑𝑒𝑡(𝑀)

Chamando 𝑋 𝑇 𝑋 de 𝑀, temos que:
                                          𝑀 = 𝑋𝑇 𝑋

Então, o determinante de 𝑀 é:

        𝑑𝑒𝑡(𝑀) = 𝟓 × 𝟑𝟒 × 𝟒𝟑 + 𝟏𝟐 × 𝟑𝟖 × 𝟏𝟑 + 𝟏𝟑 × 𝟏𝟐 × 𝟑𝟖 − 𝟓 × 𝟑𝟖 × 𝟑𝟖
                  − 𝟏𝟐 × 𝟏𝟐 × 𝟒𝟑 − 𝟏𝟑 × 𝟑𝟒 × 𝟏𝟑 = 𝟏𝟗𝟏𝟔𝟔 − 𝟏𝟗𝟏𝟓𝟖 = 𝟖


---

                 ̅ é a transposta da matriz dos cofatores 𝐶:
A matriz adjunta 𝑀
                                       𝐴11 𝐴12 𝐴13
                                  𝐶 = [𝐴21 𝐴22 𝐴23 ]
                                       𝐴31 𝐴32 𝐴33

Sendo que cada elemento dessa matriz é calculado da seguinte forma:
                                   34 38
                 𝐴11 = (−1)1+1 ∙ |        | = 34 × 43 − 38 × 38 = 18
                                   38 43
                            12 38
           𝐴12 = (−1)1+2 ∙ |        | = (−1) × (12 × 43 − 38 × 13) = −22
                            13 43
                                   12 34
                 𝐴13 = (−1)1+3 ∙ |        | = 12 × 38 − 34 × 13 = 14
                                   13 38

                             12 13
            𝐴21 = (−1)2+1 ∙ |       | = (−1) × (12 × 43 − 38 × 13) = −22
                             38 43
                                   5 13
                 𝐴22 = (−1)2+2 ∙ |        | = 12 × 43 − 38 × 13 = 46
                                  13 43
                              5 12
            𝐴23 = (−1)2+3 ∙ |       | = (−1) × (12 × 43 − 38 × 13) = −34
                             13 38

                                   12 13
                  𝐴31 = (−1)3+1 ∙ |       | = 12 × 38 − 13 × 34 = 14
                                   34 38
                               5 13
             𝐴32 = (−1)3+2 ∙ |       | = (−1) × (5 × 38 − 12 × 13) = −22
                               12 38
                                    5 12
                  𝐴33 = (−1)3+3 ∙ |        | = 5 × 34 − 12 × 12 = 26
                                    12 34

Portanto, a matriz de cofatores C é:
                                      18 −22 14
                                 𝐶 = [−22 46 −34]
                                      14 −34 26

                      ̅ é a transposta da matriz dos cofatores 𝐶:
Como a matriz adjunta 𝑀
                                      18 −22 14
                                ̅
                                𝑀 = [−22 46 −34]
                                      14 −34 26

Logo, a matriz inversa de M é:
                           18    22 14
                               −
                           8     8   8      2,25 −2,75 1,75
                   𝑀̅       22  46  −34
       𝑇  −1  −1
     (𝑋 𝑋) = 𝑀 =        = −              = [−2,75 5,75 −4,25]
                 𝑑𝑒𝑡(𝑀)     8   8    8       1,75 −4,25 3,25
                           14  −34 26
                         [ 8    8    8 ]


---

d) calcular a matriz 𝑿𝑻 𝒚:
                                                              1
                                              1 1      1 1 1 2
                                     𝑋 𝑇 𝑦 = [1 2      2 3 4] 3
                                              1 2      2 3 5 4
                                                             [5 ]

                               1×1+1×2+1×3+1×4+1×5
                             𝑇
                        𝑋 𝑦 = [1 × 1 + 2 × 2 + 2 × 3 + 3 × 4 + 4 × 5]
                               1×1+2×2+2×3+3×4+5×5

                                                    15
                                               𝑇
                                             𝑋 𝑦 = [43]
                                                    48

                                          ̂:
e) computar as estimativas dos parâmetros 𝜷
                                       2,25 −2,75 1,75 15
                     ̂     𝑇  −1 𝑇
                     𝛽 = (𝑋 𝑋) 𝑋 𝑦 = [−2,75 5,75 −4,25] [43]
                                       1,75 −4,25 3,25 48

                                    2,25 × 15 − 2,75 × 43 + 1,75 × 48
                             𝛽̂ = [−2,75 × 15 + 5,75 × 43 − 4,25 × 48]
                                    1,75 × 15 − 4,25 × 43 + 3,25 × 48

                                                −0,5
                                             ̂
                                             𝛽=[ 2 ]
                                                −0,5

f) calcular as estimativas de 𝒚:
                                           1       1   1           1
                                           1       2   2 −0,5     2,5
                                       ̂
                                 𝑦̂ = 𝑋𝛽 = 1       2   2 [ 2 ] = 2,5
                                           1       3   3 −0,5      4
                                          [1       4   5 ]      [  5]

                                      1 × (−0,5) − 1 × 2 + 1 × (−0,5)
                                      1 × (−0,5) − 2 × 2 + 2 × (−0,5)
                                 𝑦̂ = 1 × (−0,5) − 2 × 2 + 2 × (−0,5)
                                      1 × (−0,5) − 3 × 2 + 3 × (−0,5)
                                     [1 × (−0,5) − 4 × 2 + 5 × (−0,5)]


---

                                                            1
                                                           2,5
                                                      𝑦̂ = 2,5
                                                            4
                                                          [5]

g) calcular a matriz de erros:
                                      1    1     1−1       0
                                      2   2,5   2 − 2,5   −0,5
                         𝐸 = 𝑦 − 𝑦̂ = 3 − 2,5 = 3 − 2,5 = 0,5
                                      4    4     4−4       0
                                     [5] [ 5 ] [ 5 − 5 ] [ 0 ]

h) determinar a equação do modelo de regressão linear múltipla:

                                   𝒀 = −𝟎, 𝟓 + 𝟐𝒙𝟏 − 𝟎, 𝟓𝒙𝟐 + 𝜺

(CESPE/ABIN/2018) Determinado estudo socioeconômico considerou o modelo de regressão linear
múltipla na forma matricial 𝒚 = 𝑿𝜷 + 𝜺, em que 𝒚 = (𝒚𝟏 , … , 𝒚𝟏𝟎𝟎 )𝑻 representa o vetor de respostas (o
símbolo sobrescrito T indica a operação de transposição), 𝒚𝑻 𝒚 = 𝟐. 𝟓𝟎𝟎 e ∑𝟏𝟎𝟎
                                                                           𝒊=𝟏 𝒚𝒊 = 𝟒𝟎𝟎. 𝑿, a matriz de
delineamento, é tal que
                                                𝟏     𝟎, 𝟐   𝟎, 𝟏           𝟑𝟎
                            (𝑿𝑻   𝑿)   −𝟏
                                            = [𝟎, 𝟐   𝟎, 𝟖            𝑻
                                                             𝟎, 𝟐] e 𝑿 𝒚 = [𝟐𝟎]
                                               𝟎, 𝟏   𝟎, 𝟐    𝟏             𝟏𝟎
𝜷 = (𝜷𝟏 , 𝜷𝟐 , 𝜷𝟑 )𝑻 é o vetor de parâmetros, e 𝜺 é o vetor de erros aleatórios independentes e
identicamente distribuídos. Cada componente do vetor 𝜺 segue uma distribuição normal com média nula
e variância 𝝈𝟐 .
Tendo essas informações como referência, julgue o próximo item.
A estimativa de 𝛽 proporcionada pelo método de mínimos quadrados ordinários é 𝛽̂ = (35, 24, 17)𝑇 .


---

Comentários:
Como vimos, pelo método dos mínimos quadrados, a estimativa de 𝛽 é expressa por (𝑋 𝑇 𝑋)−1 𝑋 𝑇 𝑦. O
enunciado já nos forneceu as matrizes (𝑋 𝑇 𝑋)−1 e 𝑋 𝑇 𝑦. Assim, nossa tarefa se resume a fazer a multiplicação
dessas matrizes.
                                               1 0,2 0,1      30
                                        𝛽̂ = [0,2 0,8 0,2] × [20]
                                              0,1 0,2 1       10
A matrizes devem ser multiplicadas na ordem em que aparecem na equação anterior. Assim, a primeira
matriz é do tipo 3x3 e a segunda matriz é do tipo 3x1. Dessa forma, o resultado será uma matriz 3x1.
Na multiplicação de matrizes, cada elemento da matriz resulta do produto entre a linha correspondente da
primeira matriz pela coluna correspondente da segunda matriz. Assim, temos que:
                                       𝟏 × 𝟑𝟎 + 𝟎, 𝟐 × 𝟐𝟎 + 𝟎, 𝟏 × 𝟏𝟎
                                 ̂
                                 𝛽 = [𝟎, 𝟐 × 𝟑𝟎 + 𝟎, 𝟖 × 𝟐𝟎 + 𝟎, 𝟐 × 𝟏𝟎]
                                       𝟎, 𝟏 × 𝟑𝟎 + 𝟎, 𝟐 × 𝟐𝟎 + 𝟏 × 𝟏𝟎
e
                                               𝟑𝟎 + 𝟒 + 𝟏     𝟑𝟓
                                         𝛽̂ = [𝟔 + 𝟏𝟔 + 𝟐] = [𝟐𝟒]
                                               𝟑 + 𝟒 + 𝟏𝟎     𝟏𝟕


A matriz anterior também pode ser escrita como uma matriz-linha, utilizando a transposição de matrizes:
                                            𝛽̂ = [35   24 17]𝑇
Gabarito: Certo.


---

Análise de Regressão Múltipla

Na interpretação da regressão múltipla, buscamos identificar se existe alguma variável independente capaz
de explicar o comportamento de uma outra variável dependente. Para isso, testamos se alguma variável
independente ou explicativa está relacionada com a variável dependente. Assim, temos que:

                                         𝑌̂𝑖 = 𝑎 + 𝑏1 𝑥1𝑖 + 𝑏2 𝑥2𝑖

em que 𝑎 é o valor estimado de Y quando 𝑋1 = 0 e 𝑋2 = 0; 𝑏1 e 𝑏2 representam efeitos parciais.

Assim, se quisermos analisar a variação de Y em função das variações de 𝑋1 e 𝑋2, podemos fazer:

                                         ∆𝑌̂𝑖 = 𝑏1 ∆𝑋1𝑖 + 𝑏2 ∆𝑋2𝑖

Portanto, se 𝑋2 for mantido fixo, ∆𝑋2𝑖 = 0

                                              ∆𝑌̂𝑖 = 𝑏1 ∆𝑋1𝑖

De outro modo, se 𝑥1 for mantido fixo, ∆𝑥1𝑖 = 0

                                              ∆𝑌̂𝑖 = 𝑏2 ∆𝑋2𝑖

Logo, se uma variável independente 𝑋𝑖 não estiver relacionada com a variável dependente, então seu
coeficiente será igual a zero.

Para testar se pelo menos uma das variáveis independentes (explicativas) está relacionada com a variável
dependente, utilizamos uma técnica denominada de Análise de Variância (ANOVA). A ANOVA testa a
hipótese nula de que todos os valores de 𝛽 são iguais a 0 contra a hipótese alternativa de que pelo menos
um 𝛽 não é zero:

                                    𝑯𝟎 : 𝜷𝟏 = 𝜷𝟐 = ⋯ = 𝜷𝒌 = 𝟎
                              {
                               𝑯𝒂 : 𝒑𝒆𝒍𝒐 𝒎𝒆𝒏𝒐𝒔 𝒖𝒎 𝜷𝒊 𝒏ã𝒐 é 𝒛𝒆𝒓𝒐.

Se a hipótese nula é aceita, então não há relação linear entre 𝑌 (variável dependente) e qualquer uma das
variáveis independentes.

Na análise de variância da regressão múltipla, a relação entre a soma dos quadrados permanece válida.
Assim, a soma dos quadrados total, definida por ∑(𝑌𝑖 − 𝑌̅)2 , é igual à soma dos quadrados do modelo de
regressão, definida na expressão por ∑(𝑌̂𝑖 − 𝑌̅)2 mais a soma dos quadrados dos resíduos/desvios/erros,
definida por ∑ 𝜀𝑖2 .


---

Portanto, temos a seguinte relação:


                                         𝑺𝑸𝑻 = 𝑺𝑸𝑴 + 𝑺𝑸𝑹

em que:

     𝑆𝑄𝑇: soma dos quadrados totais;

     𝑆𝑄𝑀: soma dos quadrados do modelo de regressão; e

     𝑆𝑄𝑅: soma dos quadrados dos resíduos/erros.

O coeficiente de determinação da regressão múltipla, 𝑅 2 , é expresso por:

                                                      𝑺𝑸𝑴
                                               𝑹𝟐 =
                                                      𝑺𝑸𝑻

Alguns autores trazem as seguintes nomenclaturas:

    𝑆𝑄𝑅: soma dos quadrados da regressão;

    𝑆𝑄𝐸: soma dos quadrados dos erros.

No entanto, em nossa aula, adotaremos as nomenclaturas apresentadas anteriormente .


---

Também podemos reescrever a equação assim:

                                           𝑺𝑸𝑻 − 𝑺𝑸𝑹 𝑺𝑸𝑻 𝑺𝑸𝑹
                                 𝑹𝟐 =               =    −
                                             𝑺𝑸𝑻      𝑺𝑸𝑻 𝑺𝑸𝑻

                                                           𝑺𝑸𝑹
                                               𝑹𝟐 = 𝟏 −
                                                           𝑺𝑸𝑻

Nesse ponto, retomamos a ideia dos graus de liberdade do modelo de regressão linear múltipla. O grau de
liberdade total continua sendo 𝑛 − 1. Portanto, no modelo de regressão temos que os graus de liberdade
são iguais ao número de parâmetros estimados (p) menos 1, 𝑝 − 1.

Para os graus de liberdade dos resíduos, temos:


                                  𝒈𝒍𝒕𝒐𝒕𝒂𝒍 = 𝒈𝒍𝒓𝒆𝒔í𝒅𝒖𝒐𝒔 + 𝒈𝒍𝒆𝒒𝒖𝒂çã𝒐

Substituindo temos:

                                           𝑛 − 1 = 𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 + 𝑝 − 1

                                           𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 = 𝑝 − 1 − 𝑛 + 1


                                             𝒈𝒍𝒓𝒆𝒔í𝒅𝒖𝒐𝒔 = 𝒏 − 𝒑

Para os graus de liberdade aplicado às fórmulas, temos:

   •   graus de liberdade totais: 𝑛 − 1;
   •   graus de liberdade do modelo: 𝑝 − 1; e
   •   graus de liberdade dos resíduos: 𝑛 − 𝑝.


---

     •   𝑔𝑙𝑡𝑜𝑡𝑎𝑙 = 𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 + 𝑔𝑙𝑒𝑞𝑢𝑎çã𝑜
     •   𝑔𝑙𝑡𝑜𝑡𝑎𝑙 : 𝑛 − 1
     •   𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 : 𝑛 − 𝑝
     •   𝑔𝑙𝑒𝑞𝑢𝑎çã𝑜 : 𝑝 − 1

Normalmente, o coeficiente de determinação 𝑅 2 conforme são adicionadas novas variáveis independentes
(explicativas) ao modelo de regressão linear múltipla. Contudo, a inclusão excessiva de variáveis
independentes pode restringir os graus de liberdade disponíveis para estimar a variabilidade dos parâmetros.
                                                         ̅̅̅2̅, que considera o número de variáveis explicativas
Nesse caso, devemos utilizar o conceito de 𝑅 2 ajustado, 𝑅
do modelo.

Para obtermos ̅̅
              𝑅̅̅2 , dividimos 𝑆𝑄𝑅 e 𝑆𝑄𝑇 pelos respectivos graus de liberdade. Assim, temos:

                                                      𝑺𝑸𝑹
                                                     (𝒏 − 𝒑)
                                            ̅̅̅̅
                                            𝑹𝟐 = 𝟏 −
                                                      𝑺𝑸𝑻
                                                     (𝒏 − 𝟏)

Assim, temos que o coeficiente de determinação corrigido pelos graus de liberdade é dado por:


                                     ̅̅̅̅                 (𝒏 − 𝟏)
                                     𝑹𝟐 = 𝟏 − (𝟏 − 𝑹𝟐 ) ×
                                                          (𝒏 − 𝒑)

Antes de usarmos os dados obtidos na análise de regressão numa previsão, precisamos estabelecer a
significância estatística desses resultados, com a finalidade de determinar a confiança a ser aplicada nos
resultados da regressão e sua aplicação.


---

Os quadrados médios são obtidos pela divisão entre as somas dos quadrados e os respectivos graus de
liberdade. Assim, temos:

a) quadrado médio do modelo (QMM):

                                                      𝑺𝑸𝑴
                                           𝑸𝑴𝑴 =
                                                      𝒑−𝟏

b) quadrado médio dos resíduos (QMR):

                                                     𝑺𝑸𝑹
                                           𝑸𝑴𝑹 =
                                                     𝒏−𝒑

c) quadrado médio total (QMT):

                                                     𝑺𝑸𝑻
                                           𝑸𝑴𝑻 =
                                                     𝒏−𝟏

Para testar 𝐻0 : 𝛽1 = 𝛽2 = ⋯ = 𝛽𝑘 = 0 contra 𝐻1 : 𝛽 ≠ 0, usamos a seguinte estatística teste, denominada
de estatística 𝐹 (ou razão F):


                                                 𝑺𝑸𝑴
                                                (𝒑 − 𝟏)
                                           𝑭∗ =
                                                 𝑺𝑸𝑹
                                                (𝒏 − 𝒑)

Simplificando, temos:

                                                    𝑸𝑴𝑴
                                             𝑭∗ =
                                                    𝑸𝑴𝑹

em que:

    𝑄𝑀𝑀 é o quadrado médio do modelo de regressão;

    𝑄𝑀𝐸 é o quadrado médio dos erros/resíduos;


---

Se o valor de 𝐹 ∗ for significativamente grande, teremos evidências para rejeitar 𝐻0 .

Sob a hipótese 𝐻0 , 𝐹 ∗ tem distribuição 𝐹 de Snedecor, com 𝑝 − 1 e 𝑛 − 𝑝 graus de liberdade, em que 𝑛 é o
número de observações.

Dessa forma, para avaliar o teste de hipóteses, basta compararmos o valor da estatística teste com o valor
crítico tabelado:

   •   Se 𝐹 ∗ > 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , podemos rejeitar a hipótese nula;
   •   Se 𝐹 ∗ < 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , não podemos rejeitar a hipótese nula.

O valor de 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 é consultado em uma tabela F de Snedecor com 𝑝 − 1 grau de liberdade no numerador e
𝑛 − 𝑝 graus de liberdade no denominador, para um determinado nível de significância.

Ainda temos que a variância é igual ao quadrado médio do erro:

                                                            𝑺𝑸𝑹
                                          𝝈𝟐 = 𝑸𝑴𝑹 =
                                                            𝒏−𝒑

Um estimador não viciado de 𝜎 2 é dado por:

                                                     𝑺𝑸𝑹
                                             ̂𝟐 =
                                             𝝈
                                                    𝒏−𝒑−𝟏

sendo o denominador a soma de quadrados dos resíduos, e a razão denominada quadrado médio de
resíduos.

O estimador de máxima verossimilhança de 𝜎 2 é dado por:

                                              (𝒏 − 𝒑 − 𝟏)
                                       ̃𝟐 =
                                       𝝈                  × 𝑺𝑸𝑹
                                                   𝒏

sendo não viciado apenas assintoticamente (quando 𝑛 → ∞).


---

Por fim, as questões de análise de variância da regressão normalmente fornecem uma tabela incompleta e
pedem alguma medida que está faltando. Para descobrir o valor da medida solicitada, você deve conhecer a
estrutura da tabela e as fórmulas apresentadas neste tópico. A estrutura da tabela de análise de variância
da regressão múltipla sempre terá o seguinte formato:

                            Graus de              Soma dos            Quadrados          Estatística F
 Fonte de Variação
                           Liberdade              Quadrados            Médios             (Razão F)
                                                                             𝑆𝑄𝑀                𝑄𝑀𝑀
      Modelo                 𝑝−1                     SQM            𝑄𝑀𝑀 =                𝐹∗ =
                                                                             𝑝−1                𝑄𝑀𝑅

                                                                             𝑆𝑄𝑅
      Resíduos               𝑛−𝑝                     SQR             𝑄𝑀𝑅 =
                                                                             𝑛−𝑝

                                                                             𝑺𝑸𝑻
        Total                𝒏−𝟏                     SQT            𝑸𝑴𝑻 =
                                                                             𝒏−𝟏

Em um modelo de regressão múltipla do tipo:

                                     𝑌 = 𝛼 + 𝛽1 𝑥1 + 𝛽2 𝑥2 + ⋯ + 𝛽𝑘 𝑥𝑘 + 𝜀

temos 𝛼 como intercepto. Desta forma, definimos o número de parâmetros 𝑝 somando a quantidade de
variáveis explicativas do modelo mais o intercepto. Assim,

                           𝑝 = número de variáveis explicativas + intercepto

Alguns autores utilizam a fórmula:

                                                       𝑆𝑄𝑅
                                              𝑄𝑀𝑅 =
                                                      𝑛−𝑘−1

atribuindo 𝑘 ou 𝑝 à quantidade de variáveis explicativas, porém, subtraindo o intercepto, representado na
fórmula (-1).


---

Construir a tabela da análise de variância para o modelo de regressão múltipla calculado no
exemplo anterior. As matrizes obtidas foram:
                         1                    1                    0
                         2                   2,5                  −0,5
                      𝑦= 3              𝑦̂ = 2,5              𝐸 = 0,5
                         4                    4                    0
                        [5 ]                [5]                  [ 0 ]
A média aritmética de 𝑦 é:
                                    1 + 2 + 3 + 4 + 5 15
                               𝑦
                               ̅=                    =   =3
                                            5          5


a) Cálculo da Soma dos Quadrados dos Resíduos (SQR):

                                        𝑆𝑄𝑅 = ∑ 𝜀2𝑖

                          𝑆𝑄𝑅 = 02 + (−0,5)2 + 0,52 + 02 + 02
                                 𝑆𝑄𝑅 = 0,25 + 0,25 = 0,5


b) Cálculo da Soma dos Quadrados do Modelo (SQM):
                                                          2
                                    𝑆𝑄𝑀 = ∑(𝑦̂ 𝑖 − 𝑦̅ )

            𝑆𝑄𝑀 = (1 − 3)2 + (2,5 − 3)2 + (2,5 − 3)2 + (4 − 3)2 + (5 − 3)2
                    𝑆𝑄𝑀 = (−2)2 + (−0,5)2 + (−0,5)2 + (1)2 + (2)2
                          𝑆𝑄𝑀 = 4 + 0,25 + 0,25 + 1 + 4 = 9,5


c) Cálculo da Soma dos Quadrados Totais (SQT):
                                                         2
                                     𝑆𝑄𝑇 = ∑(𝑦𝑖 − 𝑦̅ )

              𝑆𝑄𝑇 = (1 − 3)2 + (2 − 3)2 + (3 − 3)2 + (4 − 3)2 + (5 − 3)2


---

                           𝑆𝑄𝑇 = (−2)2 + (−1)2 + (0)2 + (1)2 + (2)2
                                  𝑆𝑄𝑇 = 4 + 1 + 0 + 1 + 4 = 10
Vejam que 𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅.


d) Cálculo de 𝑹𝟐 :
                                      𝑆𝑄𝑅     0,5
                           𝑅2 = 1 −       =1−     = 1 − 0,05 = 0,95
                                      𝑆𝑄𝑇     10


e) Cálculo de 𝑹𝟐 ajustado:
                   𝑆𝑄𝑅          0,5    0,5
                  (𝑛 − 𝑝)    (      ) (2)      0,25
         ̅̅̅̅
         𝑅2 = 1 −         =1− 5−3 =1−      =1−      = 1 − 0,1 = 0,9
                   𝑆𝑄𝑇          10     10      2,5
                  (𝑛 − 1)    (      ) (4)
                               5−1


f) Cálculo dos quadrados médios do modelo:
                                         𝑆𝑄𝑀   9,5   9,5
                                 𝑄𝑀𝑀 =       =     =     = 4,25
                                         𝑝−1 3−1      2


g) Cálculo dos quadrados médios dos resíduos:
                                         𝑆𝑄𝑅   0,5   0,5
                                 𝑄𝑀𝑅 =       =     =     = 0,25
                                         𝑛−𝑝 5−3      2


h) Cálculo dos quadrados médios totais:
                                         𝑆𝑄𝑇   10   10
                                 𝑄𝑀𝑇 =       =    =    = 2,5
                                         𝑛−1 5−1    4


i) Cálculo da estatística 𝑭∗ :
                                             𝑄𝑀𝑀 4,25
                                      𝐹∗ =      =     = 17
                                             𝑄𝑀𝑅 0,25


---

j) Cálculo de 𝑭𝒄𝒓í𝒕𝒊𝒄𝒐 :
O valor de 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 é consultado em uma tabela F de Snedecor com 𝑝 − 1 = 3 − 1 = 2 grau de
liberdade no numerador e 𝑛 − 𝑝 = 5 − 3 = 2 graus de liberdade no denominador, para um
determinado nível de significância.

                                          𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 = 19,00


Como 𝐹 ∗ < 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , não podemos rejeitar a hipótese nula.


k) Construção da tabela de análise de variância:
                             Graus de        Soma dos         Quadrados   Estatística F
        Fonte de Variação
                            Liberdade        Quadrados         Médios      (Razão F)

             Modelo             2                9,5            4,25           14

            Resíduos            2                0,5            0,25

              Total             𝟒               10,0            𝟐, 𝟓


---

(CESPE/CGE-CE/2019) Considerando-se que, em uma regressão múltipla de dados estatísticos, a soma dos
quadrados da regressão seja igual a 60.000 e a soma dos quadrados dos erros seja igual a 15.000, é correto
afirmar que o coeficiente de determinação 𝑹𝟐 é igual a
a) 0,25
b) 0,50
c) 0,20
d) 0,80
e) 0,75


Comentários:
Primeiro, vamos calcular a soma dos quadrados total:
                                         𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
em que SQT é a soma dos quadrados totais; SQM é a soma dos quadrados do modelo; e SQR é a soma dos
quadrados dos resíduos.


Assim, temos:
                                 𝑆𝑄𝑇 = 60.000 + 15.000 = 75.000


Em seguida, calcularemos o coeficiente de determinação:
                                                       𝑆𝑄𝑀
                                               𝑅2 =
                                                       𝑆𝑄𝑇
                                                 60.000
                                          𝑅2 =          = 0,80
                                                 75.000
Gabarito: D.


---

               VARIÁVEL BINÁRIA OU VARIÁVEL DUMMY
As variáveis binárias são utilizadas para indicar a presença ou ausência de determinada característica, ou
seja, para incorporar aspectos qualitativos ao modelo de regressão. Esses aspectos qualitativos
normalmente aparecem na forma de uma informação binária, isto é, que assume apenas os valores 0 (zero)
ou 1 (um). Uma variável binária é também chamada de variável dummy.

Aspectos que podem ser representados por meio de informações binárias são, por exemplo: sexo (0 -
homem; 1 - mulher); estações do ano (0 - inverno; 1 - verão); volume (0 - cheio; 1 - vazio); ocupação (0 -
empregado; 1 - desempregado).

As variáveis dummy podem ser usadas para representar mudanças no intercepto do modelo ou para estimar
efeitos não lineares. Quando incluídas diretamente no modelo de regressão, como ocorre nas questões
apresentadas a seguir, objetivam estimar as diferenças de intercepto.

Podem também ser usadas interagindo com outras variáveis explicativas, nesse caso objetivam indicar
diferenças na inclinação da reta de regressão para diferentes grupos.

(CESPE/STM/2018) A equação seguinte foi obtida de um modelo de regressão linear múltipla ajustado
sobre 12 amostras, em que cada valor entre parênteses abaixo do coeficiente representa o erro- padrão
desse coeficiente, e representa o erro, D é uma variável dummy que assume o valor 0 caso não ocorra
determinado evento e 1 caso ocorra, e 𝑿𝟏 e 𝑿𝟐 são duas variáveis regressoras.
                                 𝒀 = 𝟑𝟒𝟎
                                     ⏟ + 𝟏𝟓𝟎
                                         ⏟ 𝑿𝟏 + 𝟓𝟒𝟎
                                                ⏟ 𝑿𝟐 + 𝟖𝟗
                                                       ⏟ 𝑫+𝒆
                                    (𝟒𝟎)      (𝟓)       (𝟒𝟓)    (𝟐𝟎)

A tabela de análise de variância (ANOVA) proporcionada pelo referido modelo é apresentada a seguir.

                      Fonte de      Soma de          Graus de Quadrados
                                                                           Teste F
                      Variação     Quadrados        Liberdade  Médios

                       Modelo      2.000.000           a          c
                                                                             𝑭𝒄
                        Erro         16.000            8        2.000

                        Total                          11         d

Com base nas informações e na tabela apresentadas, julgue o item.


---

Fixando-se determinado ponto (𝑋1 , 𝑋2), a ocorrência do evento representado por D faz que a estimativa de
Y diminua em mais de 80 unidades.


Comentários:
A equação que representa o modelo de regressão linear em análise é a seguinte:
                                   𝑌 = 340 + 150𝑋1 + 540𝑋2 + 89𝐷 + 𝑒
em que D é uma variável dummy que assume o valor 0 caso não ocorra determinado evento e 1 caso ocorra,
e X1 e 𝑋2 são duas variáveis regressoras.


Conforme o enunciado, fixando o ponto (𝑋1 , 𝑋2), a ocorrência do evento representado por D faz com que
tenhamos a seguinte situação:
                                  𝑌 = 340 + 150𝑋1 + 540𝑋2 + 89 × 1 + 𝑒
                                   𝑌 = 340 + 150𝑋1 + 540𝑋2 + 𝑒 + 89
                                   𝑌 = (340 + 150𝑋1 + 540𝑋2 + 𝑒) + 89
Assim, concluímos que a estimativa de Y aumenta em 89 unidades.
Gabarito: Errado.


(CESPE/STM/2018) A equação seguinte foi obtida de um modelo de regressão linear múltipla ajustado
sobre 12 amostras, em que cada valor entre parênteses abaixo do coeficiente representa o erro- padrão
desse coeficiente, e representa o erro, D é uma variável dummy que assume o valor 0 caso não ocorra
determinado evento e 1 caso ocorra, e 𝑿𝟏 e 𝑿𝟐 são duas variáveis regressoras.
                                  𝒀 = 𝟑𝟒𝟎
                                      ⏟ + 𝟏𝟓𝟎
                                          ⏟ 𝑿𝟏 + 𝟓𝟒𝟎
                                                 ⏟ 𝑿𝟐 + 𝟖𝟗
                                                        ⏟ 𝑫+𝒆
                                      (𝟒𝟎)     (𝟓)       (𝟒𝟓)     (𝟐𝟎)

A tabela de análise de variância (ANOVA.) proporcionada pelo referido modelo é apresentada a seguir.

                       Fonte de      Soma de          Graus de Quadrados
                                                                              Teste F
                       Variação     Quadrados        Liberdade  Médios

                       Modelo        2.000.000          a           c
                                                                                𝑭𝒄
                         Erro         16.000            8         2.000

                         Total                          11          d

Com base nas informações e na tabela apresentadas, julgue o item.
O coeficiente de determinação ajustado dessa regressão, 𝑅̂ 2 , é maior que o coeficiente de determinação 𝑅 2 .


Comentários:
O coeficiente de determinação é definido pela seguinte expressão:


---

                                                            𝑆𝑄𝑅
                                               𝑅2 = 1 −
                                                            𝑆𝑄𝑇
em que 𝑆𝑄𝑅 é a soma dos quadrados dos resíduos/erros e 𝑆𝑄𝑇 é a soma dos quadrados total.


O coeficiente de determinação ajustado, por sua vez, é expresso por:

                                      ̅𝑅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (𝑛 − 1)
                                                                (𝑛 − 𝑝)
em que 𝑛 é o número de amostras e 𝑝 é o número de parâmetros estimados.


Substituindo os valores de 𝑛 e 𝑝 na expressão do coeficiente de determinação ajustado, temos que:

                                      ̅𝑅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (𝑛 − 1)
                                                                (𝑛 − 𝑝)

                                     ̅𝑅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (12 − 1)
                                                               (12 − 2)

                                       ̅𝑅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (11)
                                                                 (10)

                                             ̅𝑅̅̅2̅ = 𝑅 2 − 1
                                                           10
Logo, o coeficiente de determinação ajustado é menor que o coeficiente de determinação 𝑅 2 .
Gabarito: Errado.


(CESPE/STM/2018) A equação seguinte foi obtida de um modelo de regressão linear múltipla ajustado
sobre 12 amostras, em que cada valor entre parênteses abaixo do coeficiente representa o erro- padrão
desse coeficiente, e representa o erro, D é uma variável dummy que assume o valor 0 caso não ocorra
determinado evento e 1 caso ocorra, e 𝑿𝟏 e 𝑿𝟐 são duas variáveis regressoras.
                                 𝒀 = 𝟑𝟒𝟎
                                     ⏟ + 𝟏𝟓𝟎
                                         ⏟ 𝑿𝟏 + 𝟓𝟒𝟎
                                                ⏟ 𝑿𝟐 + 𝟖𝟗
                                                       ⏟ 𝑫+𝒆
                                    (𝟒𝟎)      (𝟓)       (𝟒𝟓)       (𝟐𝟎)

A tabela de análise de variância (ANOVA.) proporcionada pelo referido modelo é apresentada a seguir.

                      Fonte de      Soma de          Graus de Quadrados
                                                                            Teste F
                      Variação     Quadrados        Liberdade  Médios

                       Modelo      2.000.000           a                c
                                                                              𝑭𝒄
                        Erro         16.000            8          2.000

                        Total                          11            d

Com base nas informações e na tabela apresentadas, julgue o item.


---

O valor de "a" reflete a quantidade de variáveis explicativas, e deve ser igual a 3.


Comentários:
Na tabela apresentada no enunciado, foram informados os graus de liberdade dos erros ou resíduos e os
graus de liberdade total. De posse dessas informações, podemos descobrir o número de graus de liberdade
do modelo (equação), isto é, vamos encontrar o valor da variável 𝑎. Vejamos:
                                       𝑔𝑙𝑡𝑜𝑡𝑎𝑙 = 𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 + 𝑔𝑙𝑒𝑞𝑢𝑎çã𝑜
Substituindo, temos:
                                                      11 = 8 + 𝑎
                                                      𝑎 = 11 − 8
                                                        𝑎=3
Gabarito: Certo.


(CESPE/STM/2018) A equação seguinte foi obtida de um modelo de regressão linear múltipla ajustado
sobre 12 amostras, em que cada valor entre parênteses abaixo do coeficiente representa o erro- padrão
desse coeficiente, e representa o erro, D é uma variável dummy que assume o valor 0 caso não ocorra
determinado evento e 1 caso ocorra, e 𝑿𝟏 e 𝑿𝟐 são duas variáveis regressoras.
                                  𝒀 = 𝟑𝟒𝟎
                                      ⏟ + 𝟏𝟓𝟎
                                          ⏟ 𝑿𝟏 + 𝟓𝟒𝟎
                                                 ⏟ 𝑿𝟐 + 𝟖𝟗
                                                        ⏟ 𝑫+𝒆
                                       (𝟒𝟎)     (𝟓)         (𝟒𝟓)    (𝟐𝟎)

A tabela de análise de variância (ANOVA.) proporcionada pelo referido modelo é apresentada a seguir.

                       Fonte de       Soma de           Graus de Quadrados
                                                                                Teste F
                       Variação      Quadrados         Liberdade  Médios

                        Modelo       2.000.000             a          c
                                                                                  𝑭𝒄
                          Erro         16.000              8       2.000

                         Total                             11         d

Com base nas informações e na tabela apresentadas, julgue o item.
A soma dos quadrados totais é igual a 2.016.000


Comentários:
A soma dos quadrados totais é dada por:
                                              𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
em que:
𝑆𝑄𝑀: soma dos quadrados do modelo de regressão;


---

𝑆𝑄𝑅: soma dos quadrados dos resíduos/erros.


Substituindo os valores, temos:
                                    𝑆𝑄𝑇 = 2.000.000 + 16.000
                                         𝑆𝑄𝑇 = 2.016.000
Gabarito: Certo.


---

                        PROBLEMA DA ESPECIFICAÇÃO
O problema da especificação consiste na definição do tipo de função matemática, ou seja, do modelo
matemático que melhor se ajusta ao estudo da relação entre as variáveis da regressão.

No caso da regressão múltipla, quando mais de uma variável independente pode afetar a variável
dependente, temos o problema da especificação. Daí a necessidade de escolha do modelo matemático mais
adequado ao estudo da regressão, para uma análise mais efetiva.

Podemos escolher como modelos matemáticos, por exemplo, as seguintes funções:


                                                                     Linear
                                                400
                                                350
                                                300
                                                250
               𝒀𝒊 = 𝜶 + 𝜷𝑿𝒊                     200
                                                150                     y = 17,087x + 47,858
                                                100                          R² = 0,8619

                                                 50
                                                  0
                                                      0        5         10                15     20

                                                                    Potência
                                                400
                                                350
                                                300
                                                250
                        𝜷
                 𝒀𝒊 = 𝜶𝑿𝒊                       200
                                                150
                                                100
                                                                              y = 76,797x0,4264
                                                 50                             R² = 0,7176
                                                  0
                                                      0        5         10                15     20


---

                                                              Exponencial
                                            400
                                            350
                                            300
                                            250
                        𝑿𝒊
               𝒀𝒊 = 𝜶𝜷                      200
                                            150                        y = 83,485e0,0887x
                                                                          R² = 0,9546
                                            100
                                             50
                                              0
                                                  0       5         10               15            20

                                                              Logarítmica
                                            400
                                            350
                                            300
                                            250
         𝒀𝒊 = 𝜶 + 𝜷 × 𝒍𝒐𝒈(𝑿𝒊 )              200
                                            150
                                            100                 y = 79,726ln(x) + 36,268
                                             50                        R² = 0,5737

                                              0
                                                  0       5         10               15            20

                                                              Polinomial
                                            400
                                            350
                                            300
                                            250
          𝒀𝒊 = 𝜶 + 𝜷𝑿𝒊 + 𝒚𝑿𝟐𝒊               200
                                                                         y = 1,7778x2 - 11,358x + 128,45
                                            150                                    R² = 0,9994
                                            100
                                             50
                                             0
                                                  0       5         10               15            20

Notem que a escolha do modelo matemático normalmente é determinada por algum conhecimento que
temos a priori ou pela análise gráfica dos dados.


---

O problema da especificação também pode ser notado no caso em que a equação estimada é obtida
erroneamente. Além da escolha do modelo matemático, também é necessário determinar quais variáveis
independentes são consideradas no modelo de regressão. Por exemplo, caso o modelo correto fosse:

                                    𝑌𝑖 = 𝛽1 𝑥1𝑖 + 𝛽2 𝑥2𝑖 + 𝛽3 𝑥3𝑖 + 𝜀𝑖

e obtivéssemos a seguinte equação estimada:

                                              𝑌̂𝑖 = 𝑏1 𝑥1𝑖 + 𝑏2 𝑥2𝑖

Nesse caso, desenvolvendo a matriz da regressão, chegaríamos à equação:

                                           𝐸(𝑏1 ) = 𝛽1 + 𝜃1 𝛽3

                                           𝐸(𝑏2 ) = 𝛽2 + 𝜃2 𝛽3

Portanto, temos uma situação em que duas variáveis explicativas podem estar afetando a variável
dependente. Assim, as estimativas obtidas por meio do modelo equivocado são tendenciosas.

Agora, vamos considerar que o modelo correto agora fosse:

                                        𝑌𝑖 = 𝛽1 𝑥1𝑖 + 𝛽2 𝑥2𝑖 + 𝜀𝑖

e fosse obtida a seguinte equação estimada:

                                       𝑌̂𝑖 = 𝑏1 𝑥1𝑖 + 𝑏2 𝑥2𝑖 + 𝑏3 𝑥3𝑖

Nesse caso, desenvolvendo a matriz da regressão, chegaríamos à equação:

                                                 𝐸(𝑏1 ) = 𝛽1;

                                                 𝐸(𝑏2 ) = 𝛽2 ;

                                                  𝐸(𝑏3 ) = 0

Assim, podemos notar que, quando incluímos uma variável desnecessária, as estimativas dos coeficientes
permanecem não tendenciosas, ao contrário do que ocorre quando deixamos de incluir variáveis
explanatórias importantes.

Com isso, percebemos que é preferível incluir uma variável desnecessária a não incluir uma variável
significativa. Porém, é importante salientar que incluir variáveis desnecessárias também pode ser
prejudicial, pois geralmente a variância dos estimadores é aumentada.


---

Considere que um pesquisador deseje mensurar os salários médios dos funcionários de uma
determinada empresa. Para tanto, ele considerou o salário médio como variável dependente e
incluiu algumas variáveis independentes, conforme o modelo matemático apresentado a seguir:

   𝑙𝑛(𝑠𝑎𝑙á𝑟𝑖𝑜 𝑚é𝑑𝑖𝑜) = 𝑏0 + 𝑏1 × 𝑐𝑜𝑛ℎ𝑒𝑐𝑖𝑚𝑒𝑛𝑡𝑜 + 𝑏2 × 𝑡𝑒𝑚𝑝𝑜 𝑛𝑜 𝑐𝑎𝑟𝑔𝑜 + 𝑏3 × 𝑒𝑥𝑝𝑒𝑟𝑖ê𝑛𝑐𝑖𝑎2 + 𝜀

Supondo o termo quadrático do modelo foi omitido pelo pesquisador, o fator 𝑒𝑥𝑝𝑒𝑟𝑖ê𝑛𝑐𝑖𝑎2 passará
a ser incluído no erro do modelo. Assim, teremos o seguinte modelo subespecificado:

                      ̂
              𝑙𝑛(𝑠𝑎𝑙á𝑟𝑖𝑜 𝑚é𝑑𝑖𝑜) = 𝛽0 + 𝛽1 × 𝑐𝑜𝑛ℎ𝑒𝑐𝑖𝑚𝑒𝑛𝑡𝑜 + 𝛽2 × 𝑡𝑒𝑚𝑝𝑜 𝑛𝑜 𝑐𝑎𝑟𝑔𝑜 + 𝜀


Se o fator 𝑒𝑥𝑝𝑒𝑟𝑖ê𝑛𝑐𝑖𝑎2 tiver relação com conhecimento e tempo no cargo, os parâmetros
estimados 𝛽0 , 𝛽1 e 𝛽2 serão tendenciosos. Esse problema pode ser corrigido com a inclusão do fator
𝑒𝑥𝑝𝑒𝑟𝑖ê𝑛𝑐𝑖𝑎2 no modelo, o que faria com que as estimativas do modelo fossem não tendenciosas.
Vale ressaltar que a omissão de variáveis independentes significativas não é a única forma do
modelo sofrer problema de especificação, o erro na escolha do modelo matemático também pode
contribuir para o problema da especificação, por exemplo, incluir ou deixar de incluir um logaritmo,
uma função exponencial, dentre outras.

Vejam que a especificação incorreta do modelo pode levar a uma análise de dados incompatível com a
realidade, daí a importância de se conhecer quais variáveis independentes são essenciais para o modelo de
regressão.


---

Teste RESET

Para saber se o modelo tem algum problema de especificação, existem alguns testes propostos, dentre eles
o Teste de Erro de Especificação da Regressão (RESET, do inglês Regression Specification Error Test),
proposto por Ramsey.

A ideia do teste RESET é que se o modelo original contém todas as condições para que não haja tendência
nos estimadores, nenhuma função não-linear das variáveis independentes deve ser expressiva quando
adicionada à equação.

Então, o teste RESET adiciona polinômios aos valores estimados pelo método dos mínimos quadrados
ordinários (MQO), com a finalidade de detectar os erros de especificação.

Consideremos o modelo original:

                                  𝑌 = 𝛼 + 𝛽1 𝑥1 + 𝛽2 𝑥2 + ⋯ + 𝛽𝑘 𝑥𝑘 + 𝜀

Segundo o teste RESET, vamos adicionar polinômios quadráticos e cúbicos ao modelo original para analisar
se há não linearidades presentes. Com isso, chegamos ao modelo expandido:


                                                          ̂ 𝟐 + 𝜹𝟐 𝒚
                   𝒀 = 𝜶 + 𝜷𝟏 𝒙𝟏 + 𝜷𝟐 𝒙𝟐 + ⋯ + 𝜷𝒌 𝒙𝒌 + 𝜹𝟏 𝒚        ̂𝟑 + 𝜺

Basicamente, o modelo expandido adiciona dois parâmetros ao modelo de regressão original, tomando
como base as próprias estimativas obtidas com o modelo original, 𝑦̂.

A partir da equação do modelo expandido, podemos testar se existem problemas de especificação no
modelo (ausências de não linearidades importantes). Para isso, realizamos um teste de hipótese conjunta:

                                            𝐻0 : 𝛿1 = 𝛿2 = 0

                                             𝐻𝑎 : 𝐻0 é 𝑓𝑎𝑙𝑠𝑎.

Portanto, a hipótese nula 𝐻0 indica que o modelo foi especificado corretamente. Por consequência, quando
a hipótese nula 𝐻0 é rejeitada, o modelo contém erros de especificação.


---

O teste RESET utiliza a estatística 𝐹 ∗ para testar se a especificação está correta. Se o valor de 𝐹 ∗ for
significativamente grande, teremos evidências para rejeitar 𝐻0 .


                (𝑹𝟐𝒆𝒙𝒑𝒂𝒏𝒅𝒊𝒅𝒐 − 𝑹𝟐𝒐𝒓𝒊𝒈𝒊𝒏𝒂𝒍 )                     (𝑺𝑸𝑹𝒐𝒓𝒊𝒈𝒊𝒏𝒂𝒍 − 𝑺𝑸𝑹𝒆𝒙𝒑𝒂𝒏𝒅𝒊𝒅𝒐 )
              [             𝟐              ]                       [                          ]
                                                                              𝟐
       𝑭∗ =                                                𝑭∗ =
                   (𝟏 − 𝑹𝟐𝒆𝒙𝒑𝒂𝒏𝒅𝒊𝒅𝒐 )                                  𝑺𝑸𝑹𝒆𝒙𝒑𝒂𝒏𝒅𝒊𝒅𝒐
                  [ 𝒏−𝒑−𝟐 ]                                           [ 𝒏−𝒑−𝟐 ]


Sob a hipótese 𝐻0 , 𝐹 ∗ tem distribuição 𝐹 de Snedecor, com 2 e 𝑛 − 𝑝 − 2 graus de liberdade, em que 𝑛 é o
número de observações.

Dessa forma, para avaliar o teste de hipóteses, basta compararmos o valor da estatística teste com o valor
crítico tabelado:

   •   Se 𝐹 ∗ > 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , podemos rejeitar a hipótese nula;
   •   Se 𝐹 ∗ < 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , não podemos rejeitar a hipótese nula.

O valor de 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 é consultado em uma tabela F de Snedecor com 2 grau de liberdade no numerador e 𝑛 −
𝑝 − 2 graus de liberdade no denominador, para um determinado nível de significância.

Um modelo de regressão linear múltipla, com intercepto, consiste em uma variável
dependente, 2 variáveis explicativas e o erro aleatório com as respectivas hipóteses do
modelo de regressão linear múltipla. Com base em 125 observações e utilizando o método
                                            2
dos mínimos quadrados obteve-se um valor 𝑅𝑜𝑟𝑖𝑔𝑖𝑛𝑎𝑙 igual a 0,90. Em seguida, foi executado
um teste de erro de especificação de Ramsey (RESET) nesse mesmo conjunto de dados, tendo
                      2
sido encontrado um 𝑅𝑒𝑥𝑝𝑎𝑛𝑑𝑖𝑑𝑜   de 0,95.


Podemos afirmar que há um erro de especificação nesse modelo?


---

Primeiro temos que calcular o valor da estatística 𝐹 ∗ . Sabemos que o número de parâmetros
é igual a 3, pois o modelo tem duas variáveis explicativas ou independentes e um intercepto.
Além disso, como o número de observações é 125, temos que 𝑛 = 125.


                    2            2
                  (𝑅𝑒𝑥𝑝𝑎𝑛𝑑𝑖𝑑𝑜 − 𝑅𝑜𝑟𝑖𝑔𝑖𝑛𝑎𝑙 )        (0,95 − 0,90)
                [                           ]     [             ]   0,05
                             2                           2           [   ] 120
         𝐹∗ =                                   =                = 2 =         = 60
                           2
                     (1 − 𝑅𝑒𝑥𝑝𝑎𝑛𝑑𝑖𝑑𝑜 )              (1 − 0,95)      0,05    2
                    [ 𝑛−𝑝−2 ]                     [            ]  [      ]
                                                   125 − 3 − 2      120

Para um nível de significância de 5%, o valor tabelado de 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 para 2 e 125 − 3 − 2 = 120
graus de liberdade é 3,04.
Como 𝐹 ∗ > 𝐹𝑐𝑟í𝑡𝑖𝑐𝑜 , podemos rejeitar a hipótese nula e afirmar que há erro de especificação.


---

                        TRANSFORMAÇÃO DE BOX-COX
Vamos supor que precisássemos que estivéssemos diante de um conjunto de dados não-normal ou com
variância não-constante. O que poderíamos nesse caso? Para esse tipo de situação, há um conjunto de
transformações que visa a corrigir a não normalidade ou a variância não constante (heterocedasticia).

Uma estratégia muito eficiente para esse tipo de situação é a transformação de potência,     . Essa
transformação pode ser aplicada quando temos um problema de heterocedasticidade, conjunto de dados
não-normais ou variância não-constante.

A transformação de Box-Cox é capaz de tornar linear uma relação não-linear. Também pode ser aplicada
quando os resíduos não são normalmente distribuídos ou quando a variância deles não é constante. Em
outras palavras, essa técnica pode ser empregada para melhorar a correlação, produzir dados mais próximos
de uma distribuição normal e estabilizar a variância.

Sendo o conjunto de dados representado pelas observações                      ,   ,…,   , a transformação de Box-Cox é
expressa por:

                                                  ( )
                                                        −
                                                                 ,        ( ≠ )
                                    ( )
                                          =
                                                             ,           ( = )

De acordo com Box e Cox, temos essa definição apenas para variáveis com valores positivos,                   > 0. Essa
transformação pode ser simplificada para:

                                                      ( ),           ( ≠ )
                                      ( )
                                            =
                                                             ,        ( = )
Box e Cox afirmam que, após a adequada transformação da variável para , os valores esperados das
observações transformadas serão descritos por um modelo de estrutura mais simples, terão variância
constante e estarão normalmente distribuídos.

(FGV/IBGE/2017) Com o objetivo de verificar qual seria a forma funcional mais adequada a um modelo é
feita uma transformação Box-Cox, estimando-se repetidas vezes o seguinte modelo:
                                              ∗
                                                  =     +        ∙   ∗
                                                                         +!


---

                #−               #−
Onde    ∗
            =        e   ∗
                             =        , sendo e $ os parâmetros que mudam a cada nova rodada de estimações.
As distribuições de          e $ foram identificadas para os testes de hipóteses:
                                              % :     =        '( %) :          =
                                              % :$=            '( %) : $ =
Em ambos os testes % foi rejeitada.
Então a forma funcional mais adequada ao modelo inicial é
a) * = + ∗ + , ∙      +-
b) ./ * = + ∗ + , ∙      +-
c) * = + ∗ + , ∙ ./      +-
d) ./ * = + ∗ + , ∙ ./         +-

e) * = + ∗ + , ∙ 0 2 + -
                     1

Comentários:
Conforme o enunciado a hipótese 34 foi rejeitada nos dois testes. Portanto, temos que
                                                           5=1
e
                                                           7 = 0.
Segundo a transformação de Box-Cox, quando o parâmetro é 0, devemos tirar o logaritmo da variável. Logo,
                                                           ∗
                                                               = ./
Para a variável *, temos que 5 = 1. Logo,
                                                          *8 − 1
                                                 *∗ =            =*−1
                                                             5
Agora, vamos substituir essas expressões no modelo * ∗ = + + , ∙                    ∗
                                                                                        + -.
                                                  *
                                                  9∗ = + + , ∙ 9∗ + -
                                                 :;                   < =

                                                * − 1 = + + , ∙ ./          +-
                                                * = 1 + + + , ∙ ./          +-
Por fim, tomando + ∗ = + + 1, temos que:
                                                * = >?@
                                                    1 + + + , ∙ ./          +-
                                                      A∗

                                                  * = +∗ + , ∙         ∗
                                                                           +-
Gabarito: C.


---

                                     RESUMO DA AULA

REGRESSÃO MÚLTIPLA

                                                O modelo de regressão múltipla é dado por:

       Relaciona uma variável                       𝒀 = 𝜶 + 𝜷𝟏 𝒙𝟏 + 𝜷𝟐 𝒙𝟐 + ⋯ + 𝜷𝒌 𝒙𝒌 + 𝜺
    dependente e duas ou mais
    variáveis independentes ou
     explicativas. Utilizamos a              A equação de regressão estimada a partir de dados
 regressão múltipla para estimar o                      amostrais é expressa por:
 valor de uma variável dependente
   com base em um conjunto de                       ̂ = 𝒂 + 𝒃𝟏 𝒙𝟏 + 𝒃𝟐 𝒙𝟐 + ⋯ + 𝒃𝒌 𝒙𝒌
                                                    𝒀
  outras variáveis independentes.

- Propriedades

Sobre a Regressão Múltipla, podemos afirmar que:

    I – 𝑬(𝜺𝒊 ) = 𝟎: A média dos erros deve ser igual a zero.

    II – 𝑽𝒂𝒓(𝜺𝒊 ) = 𝝈²: A variância do erro deve ser constante. Essa propriedade é denominada de
    homocedasticia. Isto somente é possível se a variável ε tiver variância constante:

    III – 𝑪𝒐𝒓𝒓(𝜺𝒊 , 𝜺𝒋 ) = 𝟎, 𝒑𝒂𝒓𝒂 𝒊 ≠ 𝒋: Essa propriedade garante que os erros cometidos pelo
    modelo são independentes, isto é, não se correlacionam.

    IV – Os erros têm distribuição normal: Outro importante pressuposto é de que não pode
    existir nenhuma relação linear entre as variáveis independentes. Se no modelo tivermos duas
    variáveis explicativas ou independentes proporcionais, ou seja, altamente correlacionadas,
    teremos um problema denominado de multicolinearidade.


- Equação Matricial

Pelo método dos mínimos quadrados ordinários (MQO), podemos demonstrar que o estimador
de 𝛽̂ é expresso por:

                                       ̂ = (𝑿𝑻 𝑿)−𝟏 𝑿𝑻 𝒚
                                       𝜷


---

Análise de Regressão Múltipla

Na interpretação da regressão múltipla, buscamos identificar se existe alguma variável
independente capaz de explicar o comportamento de uma outra variável dependente.

A ANOVA testa a hipótese nula de que todos os valores de 𝛽 são iguais a 0 contra a hipótese
alternativa de que pelo menos um 𝛽 não é zero:


                                  𝑯𝟎 : 𝜷𝟏 = 𝜷𝟐 = ⋯ = 𝜷𝒌 = 𝟎
                            {
                             𝑯𝒂 : 𝒑𝒆𝒍𝒐 𝒎𝒆𝒏𝒐𝒔 𝒖𝒎 𝜷𝒊 𝒏ã𝒐 é 𝒛𝒆𝒓𝒐.

Se a hipótese nula é aceita, então não há relação linear entre 𝑌 (variável dependente) e qualquer
uma das variáveis independentes.


- Coeficiente de Determinação Ajustado

O coeficiente de determinação da Regressão múltipla, 𝑹𝟐 , é expresso por:

                                       𝑺𝑸𝑴            𝑺𝑸𝑹
                                𝑹𝟐 =       ⟹ 𝑹𝟐 = 𝟏 −
                                       𝑺𝑸𝑻            𝑺𝑸𝑻


- Graus de Liberdade

Para os graus de liberdade dos resíduos, temos:

                               𝒈𝒍𝒕𝒐𝒕𝒂𝒍 = 𝒈𝒍𝒓𝒆𝒔í𝒅𝒖𝒐𝒔 + 𝒈𝒍𝒆𝒒𝒖𝒂çã𝒐

Em que:

   •   𝑔𝑙𝑡𝑜𝑡𝑎𝑙 : 𝑛 − 1
   •   𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 : 𝑛 − 𝑝
   •   𝑔𝑙𝑒𝑞𝑢𝑎çã𝑜 : 𝑝 − 1


- Coeficiente de Determinação

O coeficiente de determinação corrigido pelos graus de liberdade é dado por:


                                ̅̅̅̅𝟐 = 𝟏 − (𝟏 − 𝑹𝟐 ) × (𝒏 − 𝟏)
                                𝑹
                                                        (𝒏 − 𝒑)


---

- Estatística F

A estatística F é definida por:

                                                   𝑸𝑴𝑹
                                              𝑭=
                                                   𝑸𝑴𝑬

VARIÁVEL BINÁRIA OU VARIÁVEL DUMMY

 As variáveis binárias são utilizadas para indicar a presença ou ausência de determinada
 característica, ou seja, para incorporar aspectos qualitativos ao modelo de regressão. Esses
 aspectos qualitativos normalmente aparecem na forma de uma informação binária, isto é, que
 assume apenas os valores 0 (zero) ou 1 (um). Uma variável binária é também chamada de variável
 dummy

PROBLEMA DA ESPECIFICAÇÃO

                                        Quando incluímos uma
  Consiste na definição do tipo        variável desnecessária, as
 de função matemática, ou seja,       estimativas dos coeficientes      Com isso, percebemos que é
  do modelo matemático que                 permanecem não-             preferível incluir uma variável
 melhor se ajusta ao estudo da       tendenciosas, ao contrário do       desnecessária a não incluir
  relação entre as variáveis da      que ocorre quando deixamos         uma variável e significativa.
           regressão.                      de incluir variáveis
                                      explanatórias importantes.

Teste RESET

                                                             Adiciona polinômios aos valores
                                                           estimados pelo método dos mínimos
      RESET, do inglês Regression Specification            quadrados ordinários (MQO), com a
                     Error Test                             finalidade de detectar os erros de
                                                                      especificação.


---

TRANSFORMAÇÃO DE BOX-COX

                                       A transformação de Box-Cox é expressa por:


                                                   𝒙(𝝀) − 𝟏
                                                            ,      (𝝀 ≠ 𝟎)
                                           𝑿(𝝀) = ቐ 𝝀
 Aplicada quando temos um problema                  𝐥𝐨𝐠 𝒙 ,       (𝝀 = 𝟎)
 de heterocedasticidade, conjunto de
 dados não-normais ou variância não-
                                                     𝒙(𝝀) ,      (𝝀 ≠ 𝟎)
             constante.                     𝑿(𝝀) = {
                                                    𝐥𝐨𝐠 𝒙 ,       (𝝀 = 𝟎)


---

                           QUESTÕES COMENTADAS – FGV

Regressão Múltipla

1. (FGV/MPE BA/2017) Em um modelo de regressão linear múltipla, após a estimação dos parâmetros,
realizou-se uma Análise da Variância, através da decomposição amostral. Os dados foram impressos, mas
depois foram em parte perdidos, restando apenas a tabela a seguir, com diversas lacunas:

                  Fonte     Soma dos Quadrados G.L. Q. Médio F-Snedecor P-valor

                 Equação              400              X          100
                                                                             W    0,0035
                 Resíduos             R                Y           Z

                   Total              640             28

Com os dados acima é possível concluir que:
a) a variância estimada dos erros é menor do que 3;
b) X = 4, Y = 24, Z = 8 e W = 12,5;
c) a amostra empregada é de tamanho n = 29 e a regressão é não significativa ao nível de 1%;
d) o modelo de regressão explica 62,5 da variação da variável explicativa;
e) X = 4, Y = 24, Z = 10 e W = 10.


Comentários:
Para resolvermos a questão, precisamos preencher as lacunas da tabela. Vamos começar com o valor de R:
                                            𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                            640 = 400 + 𝑆𝑄𝑅
                                            𝑆𝑄𝑅 = 640 − 400
                                              𝑅 = 𝑆𝑄𝑅 = 240
Para encontrarmos o valor X, temos que fazer:
                                                           𝑆𝑄𝑀
                                            𝑄𝑀𝑅 =
                                                           𝑝
                                                           ⏟− 1
                                                      𝐺𝐿 𝑑𝑎 𝑒𝑞𝑢𝑎çã𝑜

                                                           400
                                                100 =
                                                            𝑋


---

                                                   𝑋=4
Para calcular o valor de Y, devemos proceder da seguinte forma:
                                       𝑔𝑙𝑡𝑜𝑡𝑎𝑙 = 𝑔𝑙𝑟𝑒𝑠í𝑑𝑢𝑜𝑠 + 𝑔𝑙𝑒𝑞𝑢𝑎çã𝑜
                                                 28 = 𝑌 + 4
                                                 𝑌 = 28 − 4
                                                   𝑌 = 24
Para o valor de Z, temos:
                                                          𝑆𝑄𝑅
                                            𝑄𝑀𝐸 =
                                                          𝑛−𝑝
                                                          ⏟
                                                    𝐺𝐿 𝑑𝑜𝑠 𝑟𝑒𝑠í𝑑𝑢𝑜𝑠

                                                       240
                                                  𝑍=
                                                       24
                                                   𝑍 = 10
Para o valor de W, temos:
                                                       𝑄𝑀𝑅
                                                 𝐹=
                                                       𝑄𝑀𝐸
                                                          100
                                                  𝑊=
                                                          10
                                                  𝑊 = 10
Assim, temos que: 𝑋 = 4, 𝑌 = 24, 𝑍 = 10 e 𝑊 = 10.
Gabarito: E.


2. (FGV/IBGE/2016) Após estimar um modelo de regressão linear múltipla, por MQO, um econometrista
repara que, por algum motivo, a tabela contendo os resultados da análise da variância ficou incompleta,
conforme abaixo:

                Fonte     Soma dos Quadrados G. Liberdade Q. Médio F-Snedecor P-valor

               Equação          1800                  5               360   4.5     1.05%

               Resíduos           Y                   X               W

               Modelo           3000                 20                Z

Apesar dos valores acima omitidos, é correto afirmar que:
a) a equação de regressão tem cinco variáveis explicativas;


---

b) o coeficiente de determinação 𝑅 2 é igual a 0,8;
c) ao nível de significância de 2% não se rejeita a hipótese nula de que o modelo explica a variável
dependente;
d) o tamanho da amostra é 𝑛 = 20;
e) a estimativa não tendenciosa da variância dos erros aleatórios do modelo 𝜎̂𝜀2 é igual a 80.


Comentários:
Vamos analisar as alternativas:
Letra A: Correta. Observando a tabela percebemos que existem 5 graus de liberdade para o
modelo/equação. O grau de liberdade do modelo/equação é obtido da seguinte forma:
                                                  𝑝−1=5
                                                  𝑝 = 5+1
                                                      𝑝
                                                      ⏟     =6
                                                𝑝𝑎𝑟â𝑚𝑒𝑡𝑟𝑜

em que 𝑝 corresponde ao número de variáveis explicativas ou independentes + um intercepto. Portanto, se
p vale 6, temos 5 variáveis explicativas e mais 1 intercepto.


Letra B: Errada.
O coeficiente de determinação é expresso por:
                                                          𝑆𝑄𝑀
                                                 𝑅2 =
                                                          𝑆𝑄𝑇
                                                      1800
                                              𝑅2 =         = 0,6
                                                      3000
Letra C: Errada.
Rejeitamos a hipótese nula quando o p-valor é menor que o nível de significância. No presente caso, o p-
valor vale 1,05%, portanto, é menor que o nível de significância, de 2%.


Letra D: Errada.
O número de graus de liberdade total é 20. Portanto, temos que:
                                                 𝑛 − 1 = 20
                                                 𝑛 = 20 + 1
Assim, concluímos que:
                                                      𝑛 = 21


---

Letra E: Correta.
                                                           𝑆𝑄𝑅
                                           𝜎 2 = 𝑄𝑀𝐸 =
                                                           𝑛−𝑝
                                                           𝑆𝑄𝑅
                                            𝜎 2 = 𝑄𝑀𝐸 =
                                                            𝑋
Vamos determinar X:
                                                5 + 𝑋 = 20
                                                𝑋 = 20 − 5
                                                  𝑋 = 15
Calculando SQR:
                                           𝑆𝑄𝑅 = 3000 − 1800
                                                𝑌 = 1200
Aplicando na fórmula, temos:
                                                    𝑆𝑄𝑅
                                               𝑄𝑀𝐸 =
                                                     𝑋
                                                    𝑌
                                                 𝑊=
                                                    𝑋
                                                   1200
                                                𝑊=
                                                    15
                                                 𝑊 = 80


A banca definiu a letra E como gabarito oficial. Contudo, verificamos que existem duas alternativas corretas
(A e E).
Gabarito: E.


3. (FGV/SEDUC-AM/2014) Em uma regressão linear múltipla, se a soma quadrática total, devido à
regressão e devido ao erro são representadas respectivamente por SQT, SQR e SQE, então o coeficiente
de determinação pode ser calculado como
a) SQE/SQT
b) SQR/SQE
c) 1 – SQR/SQE
d) 1 – SQE/SQT
e) SQT/SQR


---

Comentários:
O coeficiente de determinação é dado por:
                                                         𝑆𝑄𝑀
                                                  𝑅2 =
                                                         𝑆𝑄𝑇
                                            𝑆𝑄𝑇 − 𝑆𝑄𝑅 𝑆𝑄𝑇 𝑆𝑄𝑅
                                    𝑅2 =             =    −
                                               𝑆𝑄𝑇     𝑆𝑄𝑇 𝑆𝑄𝑇
                                                          𝑆𝑄𝑅
                                              𝑅2 = 1 −
                                                          𝑆𝑄𝑇
Em que:
    𝑆𝑄𝑇, soma dos quadrados totais.
    𝑆𝑄𝑅, soma dos quadrados dos resíduos/erros;
    𝑆𝑄𝑀, soma dos quadrados do modelo de regressão.


Logo, verificando a nomenclatura apresentada na questão, temos:
                                                  𝑆𝑄𝑅     𝑆𝑄𝐸
                                           𝑅2 =       =1−
                                                  𝑆𝑄𝑇     𝑆𝑄𝑇
O coeficiente de determinação, 𝑅 2 , geralmente aumenta quando é adicionada uma nova variável explicativa
ao modelo de regressão. Nesse ponto, retomamos a ideia dos graus de liberdade da equação no modelo de
regressão. O número de graus de liberdade ainda é 𝑛 − 1. Portanto, no modelo de regressão temos que os
graus de liberdade são iguais ao número de parâmetros estimados (p) menos 1: 𝑝 − 1.
Gabarito: D.


---

                                  AVISO IMPORTANTE!

Olá, alunos (as)!

Informamos que não temos mais questões da banca, referente ao assunto tratado na aula de hoje, em
virtude de baixa cobrança deste tópico ao longo dos anos. No entanto, para complementar o estudo e deixar
sua preparação em alto nível, preparamos um caderno de questões inéditas que servirá como treino e
aprimoramento do conteúdo.

Em caso de dúvidas, não deixe de nos chamar no Fórum de dúvidas!

Bons estudos!

Estratégia Concursos


---

                  QUESTÕES COMENTADAS – INÉDITAS

Regressão Múltipla

1. (INÉDITA) Em um modelo de regressão múltipla, a soma dos quadrados é igual a 3600 e a soma dos
quadrados dos erros (resíduos) é 1400. Com base nos dados informados, podemos afirmar que o
coeficiente de determinação R² é igual a
a) 0,25
b) 0,72
c) 0,50
d) 0,62
e) 0,82


Comentários:
Vamos começar calculando a soma total dos quadrados:
                                          𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                     𝑆𝑄𝑇 = 3600 + 1400 = 5000
Em seguida, calculamos o coeficiente de determinação:
                                                       𝑆𝑄𝑀
                                                𝑅2 =
                                                       𝑆𝑄𝑇
                                                   3600
                                            𝑅2 =        = 0,72
                                                   5000
Gabarito: B.


2. (INÉDITA) Uma amostra aleatória de tamanho 64 foi analisada por meio de um modelo de regressão
com 9 parâmetros. A soma dos quadrados do modelo é igual a 9200 e a soma dos quadrados dos
erros/resíduos é igual a 2750. O valor da estatística F utilizado para verificar o nível de significância da
regressão é igual a
a) 29
b) 39
c) 42
d) 23
e) 27


---

Comentários:
Em um modelo de regressão linear múltipla, a estatística F é por:
                                                     𝑄𝑀𝑅
                                                𝐹=
                                                     𝑄𝑀𝐸
em que:
𝑄𝑀𝑅: quadrado médio da regressão;
𝑄𝑀𝐸: quadrado médio dos erros/resíduos.


Conforme o enunciado, temos os seguintes dados:
𝑛 = 64, tamanho da amostra;
𝑝 = 9, número de parâmetros, número de variáveis explicativas ou independentes + um intercepto;
𝑆𝑄𝑀 = 9200, soma dos quadrados da equação;
𝑆𝑄𝑅 = 2750, soma dos quadrados dos resíduos.


Número de graus de liberdade de SQT:
                                           𝑛 − 1 = 64 − 1 = 63
Número de graus de liberdade de SQR:
                                           𝑛 − 𝑝 = 64 − 9 = 55
O quadrado médio da regressão é dado por:
                                                       𝑆𝑄𝑀
                                               𝑄𝑀𝑅 =
                                                       𝑝−1
                                                       9200
                                               𝑄𝑀𝑅 =
                                                         8
                                               𝑄𝑀𝑅 = 1150
O quadrado médio dos erros/resíduos é dado por:
                                                       𝑆𝑄𝑅
                                               𝑄𝑀𝐸 =
                                                       𝑛−𝑝
                                                       2750
                                               𝑄𝑀𝐸 =
                                                        55
                                                𝑄𝑀𝐸 = 50
Aplicando a fórmula da estatística F, temos:


---

                                                    𝑄𝑀𝑅
                                               𝐹=
                                                    𝑄𝑀𝐸
                                                    1150
                                               𝐹=
                                                     50
                                                𝐹 = 23
Gabarito: D.


3. (INÉDITA) Considere um modelo de regressão linear múltipla que contém 3 variáveis explicativas e um
intercepto, para uma amostra de tamanho 18. Supondo-se que as estimativas dos respectivos parâmetros
foram obtidas pelo método dos mínimos quadrados; que a soma dos quadrados do modelo de regressão
foi igual a 85; e que a soma dos quadrados totais é 183. Com base nessas informações, podemos afirmar
que a variância do modelo é igual a
a) 8
b) 9
c) 6
d) 5
e) 7


Comentários:
Analisando-se os dados do enunciado, temos:
𝑛 = 18, número da amostra;
𝑝 = 4, parâmetros, número de variáveis explicativas ou independentes + um intercepto;
𝑆𝑄𝑀 = 85, soma dos quadrados da regressão/variação explicada;
𝑆𝑄𝑇 = 183 → soma dos quadrados totais;
𝑆𝑄𝑅 → soma dos quadrados dos resíduos/erros;
𝜎 2 = 𝑄𝑀𝐸 → quadrado médio dos erros/resíduos;


Agora, vamos calcular a soma dos quadrados dos erros/resíduos (SQR):
                                         𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                           183 = 85 + 𝑆𝑄𝑅
                                           𝑆𝑄𝑅 = 183 − 85
                                              𝑆𝑄𝑅 = 98
Agora, vamos calcular 𝜎 2 :


---

                                                                   𝑆𝑄𝑅
                                              𝜎 2 = 𝑄𝑀𝐸 =
                                                                   𝑛−𝑝
                                                            98
                                                  𝜎2 =
                                                          18 − 4
                                                              98
                                                       𝜎2 =
                                                              14
                                                       𝜎2 = 7
Gabarito: E.


4. (INÉDITA) Seja um modelo de regressão linear múltipla 𝒀 = 𝜶 + 𝜷𝟏 𝒙𝟏 + 𝜷𝟐 𝒙𝟐 + 𝜷𝟑 𝒙𝟑 + 𝜺, em que Y é
a variável dependente 𝒙𝟏 , 𝒙𝟐 , 𝒙𝟑 são variáveis explicativas e 𝜶 é i intercepto do modelo. Sabe-se que a
amostra tem tamanho 20. Com base nas estimativas do modelo, obteve-se a seguinte tabela de
informações:

                                   Fonte de Variação          Soma dos Quadrados

                                  Variáveis dependentes              3000

                                    Variação residual                1200

                                      Variação total                 4200

A variância do modelo é igual a
a) 65
b) 75
c) 25
d) 45
e) 54


Comentários:
Vamos aos dados da questão:
𝑛 = 20, número da amostra;
𝑝 = 4, parâmetros, número de variáveis explicativas ou independentes + um intercepto;
𝜎 2 = 𝑄𝑀𝐸 → quadrado médio dos erros/resíduos;
A variância 𝜎 2 é definida por:


---

                                                              𝑆𝑄𝑅
                                             𝜎 2 = 𝑄𝑀𝐸 =
                                                              𝑛−𝑝
                                                        1200
                                                𝜎2 =
                                                       20 − 4
                                                        1200
                                                 𝜎2 =
                                                         16
                                                   𝜎 2 = 75
Gabarito: B.


5. (INÉDITA) Na análise de regressão linear múltipla, deve-se analisar a significância estatística dos
resultados, antes que os resultados possam ser utilizados em uma previsão. A estatística F é utilizada para
testar a significância da regressão, sendo calculada por meio da expressão:
a) QMR/QME
b) QMR/(p-1)
c) QME/QMR-p
d) 1-SQR/SQT
e) 1-QMR/QME


Comentários:
Um dos testes de significância estatística utilizado é o teste F (ou estatística F), que indica se a equação de
regressão é significativa. A estatística F é definida por:
                                                    𝑆𝑄𝑀
                                                   (𝑝 − 1)
                                                𝐹=
                                                    𝑆𝑄𝑅
                                                   (𝑛 − 𝑝)
Simplificando, temos:
                                                        𝑄𝑀𝑅
                                                  𝐹=
                                                        𝑄𝑀𝐸
Em que:
    𝑄𝑀𝑅 é o quadrado médio da regressão;
    𝑄𝑀𝐸 é o quadrado médio dos erros/resíduos.


Para encontrarmos os quadrados, temos:
                                                         𝑆𝑄𝑀
                                                𝑄𝑀𝑅 =
                                                         𝑝−1


---

                                                          𝑆𝑄𝑅
                                                 𝑄𝑀𝐸 =
                                                          𝑛−𝑝
Gabarito: A.


6. (INÉDITA) Estimado um modelo de regressão múltipla de uma amostra constituída de 30 observações
(𝑿𝒊 , 𝒀𝒊 , 𝒁𝒊 ), 𝒊 = 𝟏, 𝟐, 𝟑 … 𝟑𝟎, foram obtidas as estimativas dos parâmetros pelo método dos mínimos
quadrados. Do modelo temos 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 sendo i a i-ésima observação e 𝜺𝒊 o erro
aleatório. Sabe-se que a soma dos quadrados da equação é igual a 6400 e a soma dos quadrados dos
resíduos é igual a 5600. Com base nessas informações é correto afirmar que

a) O coeficiente de determinação ajustado ̅𝑅̅̅2̅ é igual a 0,54
b) O coeficiente de determinação 𝑅 2 é igual a 0,51
                                          ̅̅̅̅2 é igual a 0,51
c) O coeficiente de determinação ajustado 𝑅
d) ̅̅
   𝑅̅̅2 > 𝑅 2

e) 𝑅 2 = ̅̅̅
         𝑅 2̅


Comentários:
O coeficiente de determinação é determinado por:
                                                            𝑆𝑄𝑅
                                                 𝑅2 = 1 −
                                                            𝑆𝑄𝑇
Com base nos dados informado no enunciado, sabemos que:
𝑆𝑄𝑅 = 5600
𝑆𝑄𝑀 = 6400
𝑛 = 30
𝑝=3
Para encontrar a soma de quadrados total, podemos fazer:
                                              𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                             𝑆𝑄𝑇 = 6400 + 5600
                                                 𝑆𝑄𝑇 = 12000
Agora, podemos encontrar o valor do coeficiente de determinação:
                                                           5600
                                               𝑅2 = 1 −
                                                          12000
                                                 𝑅 2 = 1 − 0,46
                                                   𝑅 2 = 0,54


---

Assim, temos que o coeficiente de determinação ajustado é dado por:

                                      ̅𝑅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (𝑛 − 1)
                                                                (𝑛 − 𝑝)

                                    ̅𝑅̅̅2̅ = 1 − (1 − 0,54) × (30 − 1)
                                                              (30 − 3)

                                         ̅̅̅2̅ = 1 − (0,46) × (29)
                                         𝑅
                                                              (27)
                                         ̅̅̅2̅ = 1 − (0,46) × 1,07
                                         𝑅
                                              ̅̅
                                              𝑅̅̅2 = 1 − 0,49
                                                 ̅̅̅̅2 = 0,51
                                                 𝑅
Gabarito: C.


7. (INÉDITA) Seja um modelo de regressão linear múltipla 𝒀 = 𝜶 + 𝜷𝑿𝒊 + 𝜸𝑺𝒊 + 𝝀𝒁𝒊 + 𝜺, em que Y é a
variável dependente 𝜷, 𝜸, 𝝀 são variáveis explicativas do modelo e 𝜶 é o intercepto. Sabe-se que a amostra
tem tamanho 25, e que a soma de quadrados total e a soma dos quadrados da equação são
respectivamente iguais a 713 e 535. Com base nas estimativas, é correto afirmar que a estimativa de
variância do modelo é igual a:
a) 2,4
b) 7,8
c) 8,5
d) 9,5
e) 8,9


Comentários:
Um estimador não viciado de 𝜎 2 é dado por:
                                                        𝑆𝑄𝑅
                                              𝜎̂ 2 =
                                                       𝑛−𝑝−1
em que 𝑛 é o tamanho da amostra e vale 25; e 𝑝 é o número de parâmetros do modelo, variáveis explicativas
+ intercepto, e vale 4.
Para resolver a questão, vamos inicialmente calcular a soma dos quadrados dos resíduos. Sabemos que:
                                           𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                            713 = 535 + 𝑆𝑄𝑅
                                            𝑆𝑄𝑅 = 713 − 535


---

                                               𝑆𝑄𝑅 = 178
Agora, podemos calcular a estimativa da variância:
                                                       𝑆𝑄𝑅
                                             𝜎̂ 2 =
                                                      𝑛−𝑝−1
                                                         178
                                            𝜎̂ 2 =
                                                      25 − 4 − 1
                                                         178
                                                𝜎̂ 2 =
                                                         20
                                                𝜎̂ 2 = 8,9
Gabarito: E.


8. (INÉDITA) Em um modelo de regressão múltipla, sabe-se que a soma total dos quadrados e a soma dos
quadrados dos erros/resíduos são, respectivamente, 72 e 14. Com os dados mencionados, podemos
afirmar que o coeficiente de determinação R² é igual a
a) 0,58
b) 0,72
c) 0,90
d) 0,60
e) 0,80


Comentários:
Iniciaremos calculando a soma dos quadrados do modelo ou equação:
                                          𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                           72 = 𝑆𝑄𝑀 + 14
                                             𝑆𝑄𝑀 = 72 − 14
                                               𝑆𝑄𝑀 = 58


Em seguida, podemos calcular o coeficiente de determinação:
                                                         𝑆𝑄𝑀
                                               𝑅2 =
                                                         𝑆𝑄𝑇
                                                      58
                                             𝑅2 =        = 0,80
                                                      72
Gabarito: E.


---

9. (INÉDITA) Seja um modelo de regressão linear múltipla com duas variáveis explicativas do modelo e um
intercepto. As estimativas dos parâmetros foram obtidas com base em 12 observações, com coeficiente
de determinação igual a 0,58 e a soma de quadrados total igual a 100. Com base nas estimativas é correto
afirmar que a estimativa de variância do modelo é igual a:
a) 6,5
b) 5,25
c) 8,75
d) 6,45
e) 3,6


Comentários:
Um estimador não viciado de 𝜎 2 é dado por:
                                                        𝑆𝑄𝑅
                                              𝜎̂ 2 =
                                                       𝑛−𝑝−1
Em que 𝑛 é o tamanho da amostra e vale 12; e 𝑝 é o número de parâmetros do modelo, variáveis explicativas
+ intercepto, e vale 3.
Para resolver a questão, vamos inicialmente calcular a soma de quadrados total. Sabemos que:
                                                         𝑆𝑄𝑀
                                                 𝑅2 =
                                                         𝑆𝑄𝑇
                                                          𝑆𝑄𝑀
                                                0,58 =
                                                          100
                                           𝑆𝑄𝑀 = 0,58 × 100
                                                 𝑆𝑄𝑀 = 58
Calculando a soma dos quadrados dos resíduos:
                                          𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                              100 = 58 + 𝑆𝑄𝑅
                                              𝑆𝑄𝑅 = 100 − 58
                                                 𝑆𝑄𝑅 = 42
Agora podemos calcular a estimativa da variância:
                                                        𝑆𝑄𝑅
                                              𝜎̂ 2 =
                                                       𝑛−𝑝−1
                                                           42
                                              𝜎̂ 2 =
                                                       12 − 3 − 1


---

                                                         42
                                                𝜎̂ 2 =
                                                          8
                                               𝜎̂ 2 = 5,25
Gabarito: B.


10. (INÉDITA) Dado um modelo de regressão múltipla 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 com 20 observações
(𝑿𝒊 , 𝒀𝒊 , 𝒁𝒊 ), 𝒊 = 𝟏, 𝟐, 𝟑 … 𝟐𝟎, foram obtidas as estimativas dos parâmetros pelo método dos mínimos
quadrados. sendo i a i-ésima observação e 𝜺𝒊 o erro aleatório. Do modelo apresentado, temos que:
SQM= 170.
SQT= 200.
Nº de parâmetros= 3.

Com base nessas informações é correto afirmar que o coeficiente de determinação ajustado ̅̅̅̅
                                                                                         𝑹𝟐 é igual a
a) 0,85
b) 1,05
c) 1,95
d) 0,95
e) 0,05


Comentários:
O coeficiente de determinação é dado por:
                                                         𝑆𝑄𝑅
                                              𝑅2 = 1 −
                                                         𝑆𝑄𝑇
Conforme os dados informados no enunciado, temos que:
𝑆𝑄𝑇 = 200
𝑆𝑄𝑀 = 170
𝑛 = 20
𝑝=3
Para encontrar a soma dos quadrados dos resíduos, podemos utilizar a relação:
                                            𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                            200 = 170 + 𝑆𝑄𝑅
                                            𝑆𝑄𝑅 = 200 − 170
                                               𝑆𝑄𝑅 = 30


---

Agora, podemos encontrar o valor do coeficiente de determinação:
                                                         30
                                              𝑅2 = 1 −
                                                         200
                                              𝑅 2 = 1 − 0,15
                                                𝑅 2 = 0,85
Assim, temos que o coeficiente de determinação ajustado é dado por:

                                      ̅̅̅2̅ = 1 − (1 − 𝑅 2 ) × (𝑛 − 1)
                                      𝑅
                                                               (𝑛 − 𝑝)

                                     ̅𝑅̅̅2̅ = 1 − (1 − 0,85) × (20 − 1)
                                                               (20 − 3)

                                         ̅̅̅2̅ = 1 − (0,85) × (19)
                                         𝑅
                                                              (17)
                                         ̅̅̅2̅ = 1 − (0,85) × 1,12
                                         𝑅
                                              ̅̅
                                              𝑅̅̅2 = 1 − 0,95
                                                ̅̅̅̅2 = 0,05
                                                𝑅
Gabarito: E.


11. (INÉDITA) Seja um modelo de regressão múltipla com 24 variáveis independentes e um intercepto,
obtido a partir de uma amostra com 365 observações. Se a soma dos quadrados da equação é igual a 728
e a soma dos quadrados dos erros/resíduos é igual a 235, o valor da estatística F utilizado para verificar a
significância da regressão é igual a
a) 43,96
b) 55,2
c) 47,55
d) 28,1
e) 65,4


Comentários:
Em um modelo de regressão linear múltipla, a estatística F é determinada pela expressão:
                                                     𝑄𝑀𝑅
                                                𝐹=
                                                     𝑄𝑀𝐸
em que:
𝑄𝑀𝑅: quadrado médio da regressão;


---

𝑄𝑀𝐸: quadrado médio dos erros/resíduos.


Analisando-se os dados da questão, temos:
𝑛 = 365, tamanho da amostra;
𝑝 = 25, número de parâmetros, número de variáveis explicativas ou independentes + um intercepto;
𝑆𝑄𝑀 = 728, soma dos quadrados da equação;
𝑆𝑄𝑅 = 235, soma dos quadrados dos resíduos.
Número de graus de liberdade de SQT:
                                        𝑛 − 1 = 365 − 1 = 364
Número de graus de liberdade de SQR:
                                        𝑛 − 𝑝 = 365 − 25 = 340
O quadrado médio da regressão é dado por:
                                                     𝑆𝑄𝑀
                                             𝑄𝑀𝑅 =
                                                     𝑝−1
                                                      728
                                              𝑄𝑀𝑅 =
                                                      24
                                             𝑄𝑀𝑅 = 30,33
O quadrado médio dos erros/resíduos é dado por:
                                                     𝑆𝑄𝑅
                                             𝑄𝑀𝐸 =
                                                     𝑛−𝑝
                                                      235
                                              𝑄𝑀𝐸 =
                                                      340
                                              𝑄𝑀𝐸 = 0,69
Aplicando a fórmula da estatística F:
                                                    𝑄𝑀𝑅
                                               𝐹=
                                                    𝑄𝑀𝐸
                                                    30,3
                                               𝐹=
                                                    0,69
                                               𝐹 = 43,96
Gabarito: A.


12. (INÉDITA) Seja um modelo de regressão múltipla cuja soma dos quadrados totais vale 1300 e cuja soma
dos quadrados dos erros/resíduos vale 520. É correto afirmar que o coeficiente de determinação R² é igual
a


---

a) 50%
b) 48%
c) 60%
d) 80%
e) 25%


Comentários:
Iniciaremos calculando a soma dos quadrados do modelo ou equação:
                                            𝑆𝑄𝑇 = 𝑆𝑄𝑀 + 𝑆𝑄𝑅
                                            1300 = 𝑆𝑄𝑀 + 520
                                             𝑆𝑄𝑀 = 1300 − 520
                                                 𝑆𝑄𝑀 = 780
Em seguida, podemos calcular o coeficiente de determinação:
                                                         𝑆𝑄𝑀
                                                  𝑅2 =
                                                         𝑆𝑄𝑇
                                                     780
                                              𝑅2 =        = 0,6
                                                     1300
                                                  𝑅 2 = 60%
Gabarito: C.


13. (INÉDITA) Na utilização de um modelo de regressão linear múltipla, temos 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 ,
sendo i a i-ésima observação e 𝜺𝒊 o erro aleatório. Observou-se que duas variáveis explicativas eram
proporcionais, ou seja, estavam altamente correlacionadas. Considerando as informações sobre o modelo,
assinale a opção correta:
a) a variância do modelo não é constante, por isso ocorre a homoscedasticidade.
b) há um problema de heterocedasticidade, o que torna a variância do modelo constante.
c) há um problema de multicolinearidade no modelo, que torna a estimativa dos parâmetros insignificantes.
d) a alta correlação entre duas variáveis explicativas torna a análise da regressão mais significativa.
e) quando duas variáveis explicativas são proporcionais em um modelo de regressão múltipla, significa que
a média dos erros é igual a zero.


Comentários:


---

Se no modelo de regressão linear múltipla tivermos duas variáveis explicativas ou independentes
proporcionais, ou seja, altamente correlacionadas, teremos um problema denominado de
multicolinearidade, que, muitas vezes, torna a estimativa dos parâmetros insignificantes. Assim, não pode
haver nenhuma relação linear entre as variáveis independentes.
Gabarito: C.


---

                  QUESTÕES COMENTADAS – INÉDITAS

Problema de Especificação

1. (INÉDITA) Na análise de regressão múltipla, o problema de especificação ocorre quando mais de uma
variável independente pode afetar a variável dependente. Sobre o problema da especificação é correto
afirmar que:
a) as estimativas dos coeficientes permanecem não-tendenciosas quando deixamos de incluir variáveis
explanatórias importantes, porém, a inclusão de variáveis desnecessárias pode compensar essa ausência.
b) quando incluímos uma variável desnecessária, as estimativas dos coeficientes permanecem não-
tendenciosas, ao contrário do que ocorre quando deixamos de incluir variáveis explanatórias importantes.
c) é preferível que não se inclua no modelo uma variável significativa a incluir uma variável desnecessária.
d) a variância dos estimadores é aumentada com a inclusão de variáveis explanatórias importantes.
e) o problema da especificação consiste na definição do tipo de função matemática, porém, as variáveis
independentes a serem consideradas no modelo não influenciam na escolha do modelo matemático.


Comentários:
Vamos analisar cada uma das alternativas:
A - Incorreta. As estimativas dos coeficientes permanecem não-tendenciosas quando deixamos de incluir
variáveis explanatórias importantes, porém, a inclusão de variáveis desnecessárias pode compensar essa
ausência. Na verdade, é o contrário disso. Quando incluímos uma variável desnecessária, as estimativas dos
coeficientes permanecem não-tendenciosas, ao contrário do que ocorre quando deixamos de incluir
variáveis explanatórias importantes.
B - Correta. Quando incluímos uma variável desnecessária, as estimativas dos coeficientes permanecem não-
tendenciosas, ao contrário do que ocorre quando deixamos de incluir variáveis explanatórias importantes.
Exatamente. Por isso é preferível que se incluam variáveis desnecessárias a deixar de incluir variáveis
importantes.
C - Incorreta. É preferível que não se inclua no modelo uma variável significativa a incluir uma variável
desnecessária. Conforme mencionado alternativa anterior, a alternativa está incorreta.
D - Incorreta. A variância dos estimadores é aumentada com a inclusão de variáveis explanatórias
importantes. Na verdade, incluir excessivamente variáveis desnecessárias no modelo é prejudicial, pois a
variância dos estimadores geralmente é aumentada.
E - Incorreta. O problema da especificação consiste na definição do tipo de função matemática, porém, as
variáveis independentes a serem consideradas no modelo não influenciam na escolha do modelo
matemático. De fato, o problema da especificação consiste na definição do modelo matemático, porém as


---

variáveis independentes influenciam sim na escolha do modelo matemático mais adequado ao estudo da
regressão, para uma análise mais efetiva.
Gabarito: B.


---

                  QUESTÕES COMENTADAS – INÉDITAS

Transformação de Box-Cox

1. (INÉDITA) Verificando-se que a variância de um modelo de regressão linear não é constante, pode-se
utilizar o procedimento Box-Cox, que consiste em:
a) uma transformação de potência da variável 𝑥 para 𝑥 𝜆 . Essa transformação pode ser aplicada para resolver
um problema de heterocedasticidade.
                                                  1
b) uma transformação de fração da variável 𝑥 para 𝑥. Essa transformação pode ser aplicada para resolver um
problema de homoscedasticidade.
c) uma transformação de potência da variável 𝑥 para 𝑥 𝜆 . Essa transformação pode ser aplicada para resolver
um problema de multicolinearidade.
d) uma transformação na estrutura da regressão, que torna as variáveis mais correlacionadas.
e) uma transformação na estrutura da regressão, com a finalidade de corrigir o problema da
homoscedasticidade.


Comentários:
O procedimento de Box e Cox é utilizado para enfrentar problemas de falta de heterocedasticidade, quando
a variância do conjunto de dados não é constante; e/ou falta de normalidade, quando o conjunto de dados
apresenta uma variância não-normal. Além disso, a transformação de potência de Box e Cox é empregada
na linearização de um modelo de regressão múltipla.
Gabarito: A.


---

                              LISTA DE QUESTÕES – FGV

Regressão Múltipla

1. (FGV/MPE BA/2017) Em um modelo de regressão linear múltipla, após a estimação dos parâmetros,
realizou-se uma Análise da Variância, através da decomposição amostral. Os dados foram impressos, mas
depois foram em parte perdidos, restando apenas a tabela a seguir, com diversas lacunas:

                  Fonte     Soma dos Quadrados G.L. Q. Médio F-Snedecor P-valor

                 Equação               400            X       100
                                                                             W         0,0035
                 Resíduos              R              Y        Z

                   Total               640            28

Com os dados acima é possível concluir que:
a) a variância estimada dos erros é menor do que 3;
b) X = 4, Y = 24, Z = 8 e W = 12,5;
c) a amostra empregada é de tamanho n = 29 e a regressão é não significativa ao nível de 1%;
d) o modelo de regressão explica 62,5 da variação da variável explicativa;
e) X = 4, Y = 24, Z = 10 e W = 10.


2. (FGV/IBGE/2016) Após estimar um modelo de regressão linear múltipla, por MQO, um econometrista
repara que, por algum motivo, a tabela contendo os resultados da análise da variância ficou incompleta,
conforme abaixo:

              Fonte     Soma dos Quadrados G. Liberdade Q. Médio F-Snedecor P-valor

            Equação             1800                  5             360          4.5      1.05%

            Resíduos              Y                   X             W

             Modelo             3000                  20             Z

Apesar dos valores acima omitidos, é correto afirmar que:
a) a equação de regressão tem cinco variáveis explicativas;
b) o coeficiente de determinação 𝑅 2 é igual a 0,8;


---

c) ao nível de significância de 2% não se rejeita a hipótese nula de que o modelo explica a variável
dependente;
d) o tamanho da amostra é 𝑛 = 20;
e) a estimativa não tendenciosa da variância dos erros aleatórios do modelo 𝜎̂𝜀2 é igual a 80.


3. (FGV/SEDUC-AM/2014) Em uma regressão linear múltipla, se a soma quadrática total, devido à
regressão e devido ao erro são representadas respectivamente por SQT, SQR e SQE, então o coeficiente
de determinação pode ser calculado como
a) SQE/SQT
b) SQR/SQE
c) 1 – SQR/SQE
d) 1 – SQE/SQT
e) SQT/SQR


---

                     GABARITO – FGV

Regressão Múltipla

  1. LETRA E          2. LETRA E      3. LETRA D


---

                       LISTA DE QUESTÕES – INÉDITAS

Regressão Múltipla

1. (INÉDITA) Em um modelo de regressão múltipla, a soma dos quadrados é igual a 3600 e a soma dos
quadrados dos erros (resíduos) é 1400. Com base nos dados informados, podemos afirmar que o
coeficiente de determinação R² é igual a
a) 0,25
b) 0,72
c) 0,50
d) 0,62
e) 0,82


2. (INÉDITA) Uma amostra aleatória de tamanho 64 foi analisada por meio de um modelo de regressão
com 9 parâmetros. A soma dos quadrados do modelo é igual a 9200 e a soma dos quadrados dos
erros/resíduos é igual a 2750. O valor da estatística F utilizado para verificar o nível de significância da
regressão é igual a
a) 29
b) 39
c) 42
d) 23
e) 27


3. (INÉDITA) Considere um modelo de regressão linear múltipla que contém 3 variáveis explicativas e um
intercepto, para uma amostra de tamanho 18. Supondo-se que as estimativas dos respectivos parâmetros
foram obtidas pelo método dos mínimos quadrados; que a soma dos quadrados do modelo de regressão
foi igual a 85; e que a soma dos quadrados totais é 183. Com base nessas informações, podemos afirmar
que a variância do modelo é igual a
a) 8
b) 9
c) 6
d) 5
e) 7


---

4. (INÉDITA) Seja um modelo de regressão linear múltipla 𝒀 = 𝜶 + 𝜷𝟏 𝒙𝟏 + 𝜷𝟐 𝒙𝟐 + 𝜷𝟑 𝒙𝟑 + 𝜺, em que Y é
a variável dependente 𝒙𝟏 , 𝒙𝟐 , 𝒙𝟑 são variáveis explicativas e 𝜶 é i intercepto do modelo. Sabe-se que a
amostra tem tamanho 20. Com base nas estimativas do modelo, obteve-se a seguinte tabela de
informações:

                                  Fonte de Variação       Soma dos Quadrados

                                Variáveis dependentes             3000

                                   Variação residual              1200

                                    Variação total                4200

A variância do modelo é igual a
a) 65
b) 75
c) 25
d) 45
e) 54


5. (INÉDITA) Na análise de regressão linear múltipla, deve-se analisar a significância estatística dos
resultados, antes que os resultados possam ser utilizados em uma previsão. A estatística F é utilizada para
testar a significância da regressão, sendo calculada por meio da expressão:
a) QMR/QME
b) QMR/(p-1)
c) QME/QMR-p
d) 1-SQR/SQT
e) 1-QMR/QME


6. (INÉDITA) Estimado um modelo de regressão múltipla de uma amostra constituída de 30 observações
(𝑿𝒊 , 𝒀𝒊 , 𝒁𝒊 ), 𝒊 = 𝟏, 𝟐, 𝟑 … 𝟑𝟎, foram obtidas as estimativas dos parâmetros pelo método dos mínimos
quadrados. Do modelo temos 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 sendo i a i-ésima observação e 𝜺𝒊 o erro
aleatório. Sabe-se que a soma dos quadrados da equação é igual a 6400 e a soma dos quadrados dos
resíduos é igual a 5600. Com base nessas informações é correto afirmar que

a) O coeficiente de determinação ajustado ̅𝑅̅̅2̅ é igual a 0,54


---

b) O coeficiente de determinação 𝑅 2 é igual a 0,51
                                          ̅̅̅̅2 é igual a 0,51
c) O coeficiente de determinação ajustado 𝑅

d) ̅̅
   𝑅̅̅2 > 𝑅 2
e) 𝑅 2 = ̅̅̅
         𝑅 2̅


7. (INÉDITA) Seja um modelo de regressão linear múltipla 𝒀 = 𝜶 + 𝜷𝑿𝒊 + 𝜸𝑺𝒊 + 𝝀𝒁𝒊 + 𝜺, em que Y é a
variável dependente 𝜷, 𝜸, 𝝀 são variáveis explicativas do modelo e 𝜶 é o intercepto. Sabe-se que a amostra
tem tamanho 25, e que a soma de quadrados total e a soma dos quadrados da equação são
respectivamente iguais a 713 e 535. Com base nas estimativas, é correto afirmar que a estimativa de
variância do modelo é igual a:
a) 2,4
b) 7,8
c) 8,5
d) 9,5
e) 8,9


8. (INÉDITA) Em um modelo de regressão múltipla, sabe-se que a soma total dos quadrados e a soma dos
quadrados dos erros/resíduos são, respectivamente, 72 e 14. Com os dados mencionados, podemos
afirmar que o coeficiente de determinação R² é igual a
a) 0,58
b) 0,72
c) 0,90
d) 0,60
e) 0,80


9. (INÉDITA) Seja um modelo de regressão linear múltipla com duas variáveis explicativas do modelo e um
intercepto. As estimativas dos parâmetros foram obtidas com base em 12 observações, com coeficiente
de determinação igual a 0,58 e a soma de quadrados total igual a 100. Com base nas estimativas é correto
afirmar que a estimativa de variância do modelo é igual a:
a) 6,5
b) 5,25
c) 8,75
d) 6,45


---

e) 3,6


10. (INÉDITA) Dado um modelo de regressão múltipla 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 com 20 observações
(𝑿𝒊 , 𝒀𝒊 , 𝒁𝒊 ), 𝒊 = 𝟏, 𝟐, 𝟑 … 𝟐𝟎, foram obtidas as estimativas dos parâmetros pelo método dos mínimos
quadrados. sendo i a i-ésima observação e 𝜺𝒊 o erro aleatório. Do modelo apresentado, temos que:
SQM= 170.
SQT= 200.
Nº de parâmetros= 3.

Com base nessas informações é correto afirmar que o coeficiente de determinação ajustado ̅̅̅̅
                                                                                         𝑹𝟐 é igual a
a) 0,85
b) 1,05
c) 1,95
d) 0,95
e) 0,05


11. (INÉDITA) Seja um modelo de regressão múltipla com 24 variáveis independentes e um intercepto,
obtido a partir de uma amostra com 365 observações. Se a soma dos quadrados da equação é igual a 728
e a soma dos quadrados dos erros/resíduos é igual a 235, o valor da estatística F utilizado para verificar a
significância da regressão é igual a
a) 43,96
b) 55,2
c) 47,55
d) 28,1
e) 65,4


12. (INÉDITA) Seja um modelo de regressão múltipla cuja soma dos quadrados totais vale 1300 e cuja soma
dos quadrados dos erros/resíduos vale 520. É correto afirmar que o coeficiente de determinação R² é igual
a
a) 50%
b) 48%
c) 60%
d) 80%


---

e) 25%


13. (INÉDITA) Na utilização de um modelo de regressão linear múltipla, temos 𝒀 = 𝜶 + 𝜷𝟏 𝑿𝒊 + 𝜷𝟐 𝒀𝒊 + 𝜺𝒊 ,
sendo i a i-ésima observação e 𝜺𝒊 o erro aleatório. Observou-se que duas variáveis explicativas eram
proporcionais, ou seja, estavam altamente correlacionadas. Considerando as informações sobre o modelo,
assinale a opção correta:
a) a variância do modelo não é constante, por isso ocorre a homoscedasticidade.
b) há um problema de heterocedasticidade, o que torna a variância do modelo constante.
c) há um problema de multicolinearidade no modelo, que torna a estimativa dos parâmetros insignificantes.
d) a alta correlação entre duas variáveis explicativas torna a análise da regressão mais significativa.
e) quando duas variáveis explicativas são proporcionais em um modelo de regressão múltipla, significa que
a média dos erros é igual a zero.


---

                     GABARITO – INÉDITAS

Regressão Múltipla

  1.   LETRA B           6. LETRA C        11. LETRA A
  2.   LETRA D           7. LETRA E        12. LETRA C
  3.   LETRA E           8. LETRA E        13. LETRA C
  4.   LETRA B           9. LETRA B
  5.   LETRA A           10. LETRA E


---

                       LISTA DE QUESTÕES – INÉDITAS

Problema de Especificação

1. (INÉDITA) Na análise de regressão múltipla, o problema de especificação ocorre quando mais de uma
variável independente pode afetar a variável dependente. Sobre o problema da especificação é correto
afirmar que:
a) as estimativas dos coeficientes permanecem não-tendenciosas quando deixamos de incluir variáveis
explanatórias importantes, porém, a inclusão de variáveis desnecessárias pode compensar essa ausência.
b) quando incluímos uma variável desnecessária, as estimativas dos coeficientes permanecem não-
tendenciosas, ao contrário do que ocorre quando deixamos de incluir variáveis explanatórias importantes.
c) é preferível que não se inclua no modelo uma variável significativa a incluir uma variável desnecessária.
d) a variância dos estimadores é aumentada com a inclusão de variáveis explanatórias importantes.
e) o problema da especificação consiste na definição do tipo de função matemática, porém, as variáveis
independentes a serem consideradas no modelo não influenciam na escolha do modelo matemático.


---

                 GABARITO – INÉDITAS

Problema de Especificação

  1. LETRA B


---

                       LISTA DE QUESTÕES – INÉDITAS

Transformação de Box-Cox

1. (INÉDITA) Verificando-se que a variância de um modelo de regressão linear não é constante, pode-se
utilizar o procedimento Box-Cox, que consiste em:
a) uma transformação de potência da variável 𝑥 para 𝑥 𝜆 . Essa transformação pode ser aplicada para resolver
um problema de heterocedasticidade.
                                                  1
b) uma transformação de fração da variável 𝑥 para 𝑥. Essa transformação pode ser aplicada para resolver um
problema de homoscedasticidade.
c) uma transformação de potência da variável 𝑥 para 𝑥 𝜆 . Essa transformação pode ser aplicada para resolver
um problema de multicolinearidade.
d) uma transformação na estrutura da regressão, que torna as variáveis mais correlacionadas.
e) uma transformação na estrutura da regressão, com a finalidade de corrigir o problema da
homoscedasticidade.


---

                 GABARITO – INÉDITAS

Transformação de Box-Cox

 1. LETRA A


---
