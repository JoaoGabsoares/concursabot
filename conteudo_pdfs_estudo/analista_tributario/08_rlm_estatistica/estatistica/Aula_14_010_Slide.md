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
arquivo_origem: Aula 14_010_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '14'
titulo_aula: SÉRIES TEMPORAIS
---

# SÉRIES TEMPORAIS

SÉRIES TEMPORAIS

                   


---

SÉRIE TEMPORAL
Uma série temporal é um conjunto de observações ordenadas no
tempo

                     


---

OBJETIVO
O objetivo da análise de séries temporais é descobrir os padrões de
comportamento (crescimento e mudança) nas variáveis estudadas,
buscando entender o relacionamento histórico entre as observações,
para fins de previsibilidade de valores futuros da série em
consideração.

                       


---

---

SÉRIE TEMPORAL

Um processo estocástico é um processo controlado pelas leis da
probabilidade.

                        


---

TIPO DE SÉRIE TEMPORAL
CONTÍNUA
A série temporal é contínua se as observações são obtidas
continuamente em um determinado intervalo de tempo [0,T].
DISCRETA
A série temporal é discreta se o intervalo de observações
pertence a um conjunto discreto, ou seja, as observações são
realizadas em intervalos de tempo específicos.

                      


---

SÉRIE ESTACIONÁRIA
Uma série temporal é dita estacionária quando ela se desenvolve
aleatoriamente em torno de uma média constante, exibindo
comportamento estatístico similar ao longo do tempo. Além disso,
apresenta sempre a mesma distribuição de probabilidades no
tempo (mesma média, variância, etc).

                       


---

SÉRIE ESTACIONÁRIA

                 


---

QUESTÃO 1
Uma série temporal é qualquer conjunto de observações ordenadas
no tempo. Acerca das séries temporais, assinale a alternativa correta.
a) As séries temporais não podem ser contínuas nem discretas.
b) Os modelos utilizados para descrever séries temporais não são
controlados por fatores probabilísticos.
c) Os modelos utilizados para descrever séries temporais são
processos estocásticos, isto é, processos controlados por leis
probabilísticas.
d) Um conjunto de observações ordenadas no tempo não é uma série
temporal.
e) Um conjunto de índices diários da bolsa de valores não é um
exemplo de série temporal.
                         


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

MODELO CLÁSSICO

                  


---

SÉRIE ESTACIONÁRIA
As séries temporais podem ser decompostas em quatro
componentes:

 tendência secular (T)

 variação sazonal (S)

 variação cíclica(C)

 variação irregular ou aleatória (I).

                          


---

TENDÊNCIA
A tendência descreve um movimento suave (a longo prazo) dos
dados, para cima ou para baixo.

                     


---

VARIAÇÃO SAZONAL
As variações sazonais referem-se às mudanças que ocorrem devido
às forças rítmicas que atuam de forma regular e periódica. Essas
forças geralmente seguem um padrão semelhante ano após ano.
Dessa forma, as variações sazonais são variações cíclicas a prazo
relativamente curto (um ano ou menos).

                       


---

VARIAÇÃO SAZONAL

                   


---

VARIAÇÃO CÍCLICA
As variações cíclicas são oscilações de longo prazo em torno de
uma linha de tendência. Esses ciclos podem ou não ser periódicos,
ou seja, podem ou não seguir padrões semelhantes após intervalos
de tempo iguais. Essas variações possuem duração maior que um
ano e não mostram o tipo de regularidade observada no caso de
variações sazonais.

                       


---

VARIAÇÃO IRREGULAR (OU ALEATÓRIA
As variações aleatórias são flutuações resultantes de forças
imprevistas e imprevisíveis. Essas forças são causadas por
ocorrências raras, operam de maneira absolutamente aleatória ou
errática, e não têm nenhum padrão definido. As variações
irregulares podem ser resultantes de enchentes, guerras,
pandemias, terremotos, conflitos políticos, etc.

                       


---

INTERAÇÃO ENTRE AS COMPONENTES

                


---

QUESTÃO 1
Considerando uma série temporal, é correto afirmar que a tendência
indica:
a) comportamento sazonal a curto prazo.
b) ciclos de altas e quedas periódicas de valores a curto prazo.
c) comportamento independente dos dados a longo, curto e médio
prazo.
d) comportamento a longo prazo.
e) somente se há um outlier conhecido como ponto influente

                       


---

QUESTÃO 2
“Quais os elementos que compõem o modelo clássico de séries
temporais?”.
 A alternativa correta desta indagação é:
a) regularização exponencial, variação cíclicas, variações sazonais e
variações irregulares.
b) tendência, variações aditivas, médias móveis, variações regulares.
c) variações multiplicativas, variações irregulares, tendência e
variações sazonais.
d) tendência cíclica, variações aditivas, variações sazonais e variações
irregulares.
e) tendência, variações cíclicas, variações sazonais e variações
irregulares.
                         


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

MODELO CLÁSSICO

                  


---

MODELO ADITIVO
O modelo aditivo considera uma série temporal como o resultado
da soma das componentes individuais.

𝒁𝒕 = 𝑻𝒕 + 𝑪𝒕 + 𝑺𝒕 + It

IMPORTANTE

O modelo aditivo pressupõe que os componentes não interagem
entre si e são independentes.


                         


---

MODELO ADITIVO
O modelo aditivo deve ser empregado quando a série temporal
não apresentar uma modificação significativa na amplitude com o
incremento do nível ao longo do tempo.

                       


---

MODELO ADITIVO
Todas as componentes são expressas em suas unidades originais.
As componentes 𝐶𝑡 , 𝑆𝑡 e 𝐼𝑡 representam desvios em torno da
tendência T.

                      


---

MODELO MULTIPLICATIVO
O modelo multiplicativo considera uma série temporal como
resultado do produto das componentes individuais.

𝒁𝒕 = 𝑻𝒕 x 𝑪𝒕 x 𝑺𝒕 x It

IMPORTANTE

O modelo multiplicativo pressupõe que os componentes interagem
entre si e não são independentes.


                         


---

MODELO MULTIPLICATIVO
A decomposição pode ser feita pelo método multiplicativo se as
magnitudes das flutuações sazonais variam com nível da série ao
longo do tempo.

                       


---

MODELO MULTIPLICATIVO
No modelo multiplicativo, apenas a tendência T é expressa na
unidade original. As demais componentes C, S e I são expressas em
porcentagens da tendência.

                       


---

QUESTÃO 1
Qual método de previsão de Séries Temporais deve ser utilizado
quando temos tendência e sazonalidade presentes nos dados?
 a) Decomposição.
b) Média Móvel.
c) Alisamento exponencial simples.
d) Alisamento exponencial duplo.
e) Análise de tendência com regressão linear.

                      


---

QUESTÃO 1
Considere a série temporal representada graficamente a seguir:

                       


---

QUESTÃO 1
Considerando a decomposição clássica da série (Yt) em tendência
(Tt), sazonalidade (St) e componente aleatório (Et), assinale a
alternativa correta.
A. Para avaliar a tendência nessa série através de médias móveis,
deve-se usar médias móveis de ordem três para não haver muitas
perdas nas extremidades e garantir a eliminação da sazonalidade.
B. Na decomposição clássica, a avaliação dos efeitos ou dos índices
sazonais deve ser realizada antes de se avaliar a tendência.
C. Como as variações em torno da tendência aumentam de
magnitude com o valor de Yt, é melhor considerar o modelo
multiplicativo: Yt=TtxStxEt.
                        


---

QUESTÃO 1
D. Como a tendência é linear, é melhor considerar o modelo
aditivo: Yt=Tt+St+Et.
E. A sazonalidade pode ser avaliada por médias móveis
apropriadas.

                     


---

QUESTÃO 2
Analisando as vendas trimestrais realizadas pela empresa Gama no
período de 2016 a 2018, obteve-se a equação da tendência
utilizando o método dos mínimos quadrados com base nestas 12
observações, ou seja, X t = 10 + 1,5 t, em que X corresponde às
vendas trimestrais (em milhões de reais) e t = 1 representa o
primeiro trimestre de 2016, t = 2 representa o segundo trimestre
de 2016 e assim por diante.

Trimestre        1º               2º                        3º   4º
   Índices
                 0,5            0,3                     1,2      1,0
 Sazonais
                       


---

QUESTÃO 2
A previsão das vendas para o segundo trimestre de 2020, levando
em conta o movimento sazonal do período e considerando o
modelo multiplicativo, é igual, em milhões de reais, a
A. 11,1.
B. 12,6.
C. 12,0.
D. 11,5.
E. 11,8.

                       


---

QUESTÃO 3
A análise do comportamento das vendas de uma empresa durante
os últimos anos permitiu apurar uma tendência linear de
crescimento ao longo do tempo com sazonalidade. Por meio do
método dos mínimos quadrados, a empresa deduziu a reta de
tendência como sendo 𝒀𝒕 = 𝟓 + 𝟐𝟓 𝒕, em que 𝒀𝒕 são as vendas, em
milhares de reais, em t, que representa o trimestre
correspondente das vendas (𝒕 = 𝟏 é o primeiro trimestre de 2001; 𝒕
= 𝟐 é o segundo trimestre de 2001, e assim por diante). O quadro a
seguir fornece os fatores sazonais, caso seja adotado o modelo
multiplicativo, e as médias das diferenças (vendas observadas
menos vendas obtidas pela tendência) por trimestre, caso seja
adotado o modelo aditivo.
                        


---

QUESTÃO 3
 trimestre    Fator
             sazonal
 primeiro         0,4
 segundo          0,6
  terceiro        1,2
   quarto         1,8

                        


---

QUESTÃO 3
A previsão de vendas, em milhares de reais, para o primeiro
trimestre de 2006 é
a) 212, caso seja adotado o método multiplicativo.
b) 210, caso seja adotado o método multiplicativo.
c) 200, caso seja adotado o método multiplicativo.
d) 245, caso seja adotado o método aditivo.
e) 225, caso seja adotado o método aditivo.

                        


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

TENDÊNCIA

            


---

TENDÊNCIA
A tendência se refere ao movimento dos dados a longo prazo, para
cima e para baixo. Há duas finalidades básicas ao isolar a tendência
numa série temporal.

                        


---

MÉTODOS GERAIS PARA ISOLAR A TENDÊNCIA
 Regressão Linear

 Médias Móveis

                     


---

REGRESSÃO LINEAR
𝑌 = 𝛼 + 𝛽𝑋 + 𝜖

                   


---

ANO    TONELADAS   ANO TONELADAS                          𝛼=11,65
2001          12   2011                              18   𝛽=0,567
2002          14   2012                              20
2003          13   2013                              21
2004          12   2014                              18
2005          14   2015                              17
2006          16   2016                              19
2007          17   2017                              23
2008          18   2018                              25
2009          15   2019                              21
2010          16   2020                              23
                     


---

MÉDIAS MÓVEIS
Uma média móvel é uma média das últimas 𝒌 observações.

                      


---

MÉDIAS MÓVEIS
Calcule a média móvel de terceira ordem.

     t    zt
     1     10
     2     18
     3     12
     4     20
     5
     6
     7
                        


---

MÉDIAS MÓVEIS
Calcule, a média móvel de quarta ordem.

     t    zt
     1     10
     2     18
     3     12
     4     20
     5
     6
     7
                        


---

QUESTÃO 1
Considere a série temporal de seis itens de números de sinistros a
pagar no mês a seguir: 200, 210, 205, 217, 207, 203, 209. Usando o
método de previsão de médias móveis de dois pontos de dados, o
valor para a projeção do oitavo item de dado é igual a:

a) 200.
b) 203.
c) 242.
d) 207.
e) 206

                        


---

QUESTÃO 2
Uma série de tempo consiste no consumo mensal, em unidades, de
um produto no ano de 2017. Pelo método da regressão linear,
usando os estimadores de mínimos quadrados, obteve-se a equação
da tendência estimada Tt= 70 + 4t, em que t é o tempo (mês). Essa
equação foi encontrada com base nas observações do consumo dos
12 meses de 2017, ou seja, janeiro é representado por t = 1,
fevereiro por t = 2 e assim por diante até dezembro por t = 12.

                       


---

QUESTÃO 2
A média mensal do consumo, em unidades, desse produto, no ano
de 2017, foi então igual a
A. 74
B. 94
C. 100
D. 120
E. 96

                      


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

SUAVIZAÇÃO EXPONENCIAL

                


---

SUAVIZAÇÃO EXPONENCIAL SIMPLES

𝑍𝑡+1 = 𝛼𝑍𝑡 + 𝛼 1 − 𝛼 𝑍𝑡−1 + 𝛼 1 − 𝛼 2 𝑍𝑡−2 + ⋯

                     


---

SUAVIZAÇÃO EXPONENCIAL SIMPLES
        Z1               Z2                           Z3
        10               12                           15

                 


---

SUAVIZAÇÃO EXPONENCIAL SIMPLES
𝑍𝑡ҧ = 𝛼𝑍𝑡 + 1 − 𝛼 𝑍ҧ𝑡−1

                   


---

SUAVIZAÇÃO EXPONENCIAL SIMPLES
Média anterior = 90

Valor atual = 100

                      


---

QUESTÃO 1
Considere o método de suavização exponencial simples para
previsão. Suponha que a taxa de amortecimento seja 0,9, e que a
previsão de 1 passo à frente na origem 𝒕 = 𝟏𝟎𝟎 é X𝟏𝟎𝟎 = 𝟓𝟎. Se
𝑿𝟏𝟎𝟏 = 𝟓𝟓, qual é a previsão de 1 passo à frente em 𝒕 = 𝟏𝟎𝟏?
a) 49,5
b) 50
c) 50,5
d) 54,5
e) 55


                       


---

OPERADORES

             


---

OPERADOR BACK
     𝐵𝑝 𝑓𝑡 = 𝑓𝑡−𝑝

5;    8;   6;   7;   8;   5;     10;         9

                           


---

OPERADOR BACK
     𝐵𝑝 𝑓𝑡 = 𝑓𝑡−𝑝

5;    8;   6;   7;   8;   5;     10;         9

                           


---

OPERADOR DIFERENÇA
 Δ𝑓𝑡 = 𝑓𝑡 − 𝑓𝑡−1

5;   8;   6;   7;   8;   5;     10;         9

                          


---

OPERADOR DIFERENÇA DE ORDEM 2
Δ2 𝑓𝑡 = 𝑓𝑡 − 2𝑓𝑡−1 + 𝑓𝑡−2

                     


---

OPERADOR DIFERENÇA DE ORDEM 2
Δ2 𝑓𝑡 = 𝑓𝑡 − 2𝑓𝑡−1 + 𝑓𝑡−2

5;   8;   6;   7;   8;   10;      12;          15

                          


---

OPERADOR DIFERENÇA DE ORDEM 2
Δ2 𝑓𝑡 = 𝑓𝑡 − 2𝑓𝑡−1 + 𝑓𝑡−2

5;   8;   6;   7;   8;   10;      12;          15

                          


---

FUNÇÕES DE AUTOVARIÂNCIA E AUTOCORRELAÇÃO

                


---

AUTOCOVARIÂNCIA

É A VARIÂNCIA ENTRE DOIS VALORES OBSERVADOS EM INTANTES DIFERENTES.

                            


---

AUTOCOVARIÂNCIA
   Z1   Z2   Z3   Z4             Z5             Z6     Z7
    5    8   10   13             16             20     22

                  


---

AUTOCOVARIÂNCIA

PARA PROCESSOS ESTACIONÁRIOS, A COVARIÂNCIA DEPENDE APENAS DA DIFERENÇA
ENTRE OS TEMPOS T1 E T2

LAG = T2 – T1


𝐶𝑂𝑉 𝑡1 , 𝑡2 = 𝛾 𝑡1 , 𝑡2 = 𝛾(𝑘)


𝛾 0 = 𝑉𝐴𝑅(𝑍𝑡)

                           


---

FUNÇÃO DE AUTOCOVARIÂNCIA

        𝜎 2 ∅1𝑘
𝛾 𝑘 =
        1 − ∅1𝑘

                  


---

FUNÇÃO DE AUTOCOVARIÂNCIA

𝑦𝑡 = 5 + 0,6𝑦𝑡−1 + 𝜖𝑡

                        


---

AUTOCORRELAÇÃO

MEDE A DEPENDÊNCIA LINEAR ENTRE DOIS INSTANTES COM LAG IGUAL A K.


      𝛾(𝑘)
𝜌 𝑘 =
      𝛾(0)

                           


---

FUNÇÃO DE AUTOCORRELAÇÃO

𝜌 𝑘 = 𝜃1𝑘

               


---

AUTOCORRELAÇÃO

𝑦𝑡 = 5 + 0,6𝑦𝑡−1 + 𝜖𝑡

                        


---

AUTOCOVARIÂNCIA E AUTOCORRELAÇÃO
Considerando o modelo de séries temporais expresso por
𝑍𝑡 = 0,6. 𝑍𝑡−1 + 𝜖𝑡 , em que 𝜖𝑡 denota um ruído branco com
média zero e variância de 0,8.

                        


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

MODELOS ARIMA

                


---

MODELOS ARIMA

                


---

ARIMA

AUTO REGRESSIVOS INTEGRADOS DE MÉDIAS MÓVEIS

                   


---

MODELO AUTO REGRESSIVO - AR
AUTO REGRESSIVOS INTEGRADOS DE MÉDIAS MÓVEIS

 Cada valor é uma combinação linear dos valores que o antecedem.

 𝑦𝑡 = 𝛼 + 𝜙1 𝑦𝑡−1 + 𝜙2 𝑦𝑡−2 + ⋯ + 𝜙𝑝 𝑦𝑡−𝑝 + 𝜀𝑡

                       


---

OPERADOR AUTORREGRESSIVO ESTACIONÁRIO
𝑦𝑡 = 𝛼 + 𝜙1 𝑦𝑡−1 + 𝜙2 𝑦𝑡−2 + ⋯ + 𝜙𝑝 𝑦𝑡−𝑝 + 𝜀𝑡

                       


---

OPERADOR (POLINÔMIO) AUTORREGRESSIVO

𝑦𝑡 = 2 + 0,3𝑦𝑡−1 + 0,5𝑦𝑡−2 + 𝜀𝑡

                       


---

OPERADOR (POLINÔMIO) AUTORREGRESSIVO

𝑦𝑡 = 5 + 0,1𝑦𝑡−1 + 0,6𝑦𝑡−2 + 𝜀𝑡

                       


---

OPERADOR (POLINÔMIO) AUTORREGRESSIVO

𝑦𝑡 = 4 + 0,5𝑦𝑡−1

                   


---

OPERADOR (POLINÔMIO) AUTORREGRESSIVO

𝑦𝑡 = 1 + 0,4𝑦𝑡−1

                   


---

MODELOS ARIMA

                


---

ESTACIONARIEDADE E INVERTIBILIDADE


         SE OS MÓDULOS DAS RAÍZES FOREM MAIORES DO 1       ESTACIONÁRIA


𝜃 𝐵 =0


         SEMPRE INVERTÍVEIS

                      


---

ESTACIONARIEDADE

𝑦𝑡 = 4 + 0,8𝑦𝑡−1 + 𝜖𝑡

                        


---

ESTACIONARIEDADE

𝑦𝑡 = 5 + 0,6𝑦𝑡−1 + 𝜖𝑡

                        


---

ESTACIONARIEDADE

𝑦𝑡 = 2 + 0,75𝑦𝑡−1 − 0,125𝑦𝑡−2 + 𝜖

                      


---

ESTACIONARIEDADE

𝑦𝑡 = 2 + 0,75𝑦𝑡−1 − 0,125𝑦𝑡−2 + 𝜖

                      


---

QUESTÃO
Considerando o modelo de séries temporais expresso por
𝑍𝑡 = 0,6. 𝑍𝑡−1 + 𝜖𝑡 , em que 𝜖𝑡 denota um ruído branco com
média zero e variância de 0,8. Assinale a alternativa que contém a
variância do processo.

a) 1
b) 1,25
c) 2
d) 2,25
e) 4


                         


---

OBRIGADO
                                          Prof. Jhoni Zini

     


---

SÉRIES TEMPORAIS

                   


---
