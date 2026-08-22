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
arquivo_origem: Aula 05_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '05'
titulo_aula: Estatística
---

# Estatística

Aula 04
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                             23 de Maio de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 04

                                                                                     Índice
1) Medidas de Dispersão.


2) Amplitude Total.


3) Amplitude Interquartílica.


4) Desvios em Relação à Média Aritmética e Mediana.


5) Desvio Absoluto Médio.


6) Variância.


7) Desvio-Padrão.


8) Coeficiente de Variação (ou Dispersão Relativa).


9) Variância Relativa.


10) Questões Comentadas - Amplitude Total - FGV


11) Questões Comentadas - Amplitude Interquartílica - FGV


12) Questões Comentadas - Desvios em Relação à Média Aritmética e Mediana - FGV


13) Questões Comentadas - Variância - FGV


14) Questões Comentadas - Desvio-Padrão - FGV


15) Questões Comentadas - Coeficiente de Variação (ou Dispersão Relativa) - FGV


16) Aviso importante - Orientação de estudo


17) Questões Comentadas - Medidas de Dispersão - Inéditas


18) Questões Comentadas - Amplitude Total - Inéditas


19) Questões Comentadas - Amplitude Interquartílica - Inéditas


20) Questões Comentadas - Desvio Absoluto Médio - Inéditas


21) Questões Comentadas - Desvio-Padrão - Inéditas


22) Questões Comentadas - Variância Relativa - Inéditas


23) Lista de Questões - Amplitude Total - FGV


24) Lista de Questões - Amplitude Interquartílica - FGV


25) Lista de Questões - Desvios em Relação à Média Aritmética e Mediana - FGV


26) Lista de Questões - Variância - FGV


27) Lista de Questões - Desvio-Padrão - FGV


28) Lista de Questões - Coeficiente de Variação (ou Dispersão Relativa) - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          169

                                                             


---

      Equipe Exatas Estratégia Concursos
      Aula 04

                                                                                    Índice
29) Lista de Questões - Medidas de Dispersão - Inéditas


30) Lista de Questões - Amplitude Total - Inéditas


31) Lista de Questões - Amplitude Interquartílica - Inéditas


32) Lista de Questões - Desvio Absoluto Médio - Inéditas


33) Lista de Questões - Desvio-Padrão - Inéditas


34) Lista de Questões - Variância Relativa - Inéditas

                Receita Federal (Analista Tributário) Estatística                                                                                                                        3
                www.estrategiaconcursos.com.br                                                                                                                                         169

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                              MEDIDAS DE VARIABILIDADE
Nas aulas anteriores, estudamos mecanismos para encontrar valores (média, mediana e moda) que
sintetizam o comportamento dos elementos de um conjunto de dados. Esses valores fornecem parâmetros
significativos para uma análise dos dados, porém, também é importante identificarmos como variam ou
como se diferenciam as características dos elementos de um conjunto.

Imagine, por exemplo, que você precise avaliar três grupos de alunos, cada um com cinco elementos, no que
diz respeito ao domínio de uma determinada matéria. Os testes mostraram os seguintes resultados:

                                                            Grupos
                                                   𝑨 = 𝟕, 𝟕, 𝟕, 𝟕, 𝟕
                                                   𝑩 = 𝟓, 𝟔, 𝟕, 𝟖, 𝟗
                                                 𝑪 = 𝟏, 𝟒, 𝟏𝟎, 𝟏𝟎, 𝟏𝟎

Para analisar esses dados, podemos, inicialmente, calcular a média aritmética dos três grupos. Concluímos,
então, que todos possuem a mesma média aritmética (𝑥̅ = 7). Contudo, ao observarmos a variação dos
dados, percebemos que os grupos se comportam de maneira diferente, apesar de todos possuírem a mesma
média.

        Receita Federal (Analista Tributário) Estatística                                               4
        www.estrategiaconcursos.com.br                                                                 169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

Nesse caso, a média, embora seja uma medida representativa do conjunto, não indica o grau de
homogeneidade ou heterogeneidade existente entre os valores que compõem o conjunto. Desse modo,
precisamos recorrer a procedimentos matemáticos que possibilitem a compreensão da discrepância
existente entre os valores do conjunto.

As medidas de dispersão (ou variabilidade) são justamente métricas que mostram a variação dos dados
de um conjunto. Elas podem ser divididas em dois grupos:

    a) medidas de dispersão absoluta:
         - amplitude total;
         - amplitude interquartílica;
         - desvio médio;
         - variância; e
         - desvio-padrão.
                                                             ==219a34==

    b) medidas de dispersão relativa:
         - coeficiente de variação (de Pearson); e
         - variância relativa.

Nessa aula, aprenderemos a medir o grau de concentração ou dispersão dos dados em torno da média. Para
isso, estudaremos as principais medidas de dispersão, que são: amplitude total, amplitude interquartílica,
desvio médio, variância, desvio padrão, coeficiente de variação e variância relativa.

(COC-UFAC/UFAC/2019) Analise as seguintes assertivas:
I. A moda e o desvio padrão são medidas de dispersão,
II. O desvio médio e a média são medidas de dispersão,
III. O coeficiente de variação e a variância são medidas de dispersão,
IV. A moda, a média e o desvio padrão são medidas de posição.
Pode-se afirmar que estão corretas:
a) Apenas I. e II.
b) Apenas II. e III.
c) Apenas III.
d) Apenas IV.
e) Apenas I. e IV.

         Receita Federal (Analista Tributário) Estatística                                              5
         www.estrategiaconcursos.com.br                                                                169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Comentários:
As medidas de posição consistem em valores que representam a tendência de concentração dos dados
observados. As medidas de posição mais importantes são as medidas de tendência central. Nesse grupo,
encontram-se as medidas mais utilizadas: média aritmética, moda e mediana.
Já as medidas de dispersão medem o grau de variabilidade dos elementos de uma distribuição. A dispersão
aumenta à proporção que o valor da medida de dispersão também aumenta. As principais medidas de
dispersão são amplitude, desvio médio, variância, desvio padrão e coeficiente de variação.
Gabarito: C.


(VUNESP/MPE-SP/2016) Na estatística, são considerados medidas de dispersão:
a) média e moda.
b) percentil e coeficiente de variação.
c) amplitude total e percentil.
d) amplitude total e desvio padrão.
e) variância e média.


Comentários:
As medidas de tendência central estudam o centro da amostra. As medidas de tendência central mais
utilizadas são a média aritmética, a mediana e a moda.
Por sua vez, as medidas de separatrizes dividem os dados em grupos com a mesma quantidade de elementos,
sendo representadas pelos quartis, decis e percentis.


Por fim, as medidas de dispersão têm a finalidade de identificar o quanto os dados estão dispersos em torno
da média de uma amostra. São dadas pelos coeficientes de variação, desvio padrão, amplitude e variância.
Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                                                6
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                         AMPLITUDE TOTAL
A amplitude total (ou simplesmente amplitude) é a diferença entre os valores extremos de um conjunto de
observações, ou seja, a diferença entre o maior e o menor elemento desse conjunto:


                                                𝑨𝑻 = 𝒙𝒎á𝒙 − 𝒙𝒎í𝒏

Essa medida de dispersão chama atenção por ser extremamente simples e muito fácil de se calcular.
Contudo, há uma certa restrição quanto ao seu uso por conta de sua grande instabilidade, vez que leva em
consideração apenas os valores extremos da série.

Por exemplo, vamos comparar os conjuntos 𝐴 e 𝐵 da tabela a seguir:

                                     Conjunto                Média         Amplitude total
                           𝑨 = 𝟓, 𝟕, 𝟖, 𝟗, 𝟏𝟎, 𝟏𝟏, 𝟓𝟓        𝑥̅ = 15 𝐴𝑇 = 55 − 5 = 50
                         𝑩 = 𝟏𝟐, 𝟏𝟑, 𝟏𝟒, 𝟏𝟓, 𝟏𝟔, 𝟏𝟕, 𝟏𝟖 𝑥̅ = 15 𝐴𝑇 = 18 − 12 = 6

Reparem que as médias aritméticas dos dois conjuntos são iguais a 15. Portanto, no que diz respeito a essa
medida de posição, podemos considerá-los idênticos. Porém, ao calcularmos a amplitude total, verificamos
que os valores do conjunto 𝐴 apresentam um grau de dispersão bem maior que os do conjunto 𝐵.

Isso acontece porque, no cálculo da amplitude total, desconsideramos os valores da série que se
encontram entre os extremos, o que pode conduzir a interpretações equivocadas. Com frequência, um
valor discrepante pode afetar a medida de maneira acentuada. É o caso, por exemplo, do último valor (55)
do conjunto 𝐴, sensivelmente maior que seu antecessor (11), que elevou a magnitude da amplitude total
para 50.

Além disso, a amplitude total também é sensível ao tamanho de amostra. Normalmente, a amplitude total
tende a aumentar com o incremento do tamanho da amostra, ainda que não proporcionalmente. Ainda, a
amplitude total pode apresentar muita variação de uma amostra para outra, ainda que extraídas de uma
mesma população.

Apesar das limitações dessa medida, há situações em que ela pode ser aplicada de forma satisfatória. É o
caso, por exemplo, da variação da temperatura em um dia. Também é o caso de quando uma compreensão
rápida dos dados é mais relevante que a exatidão de um procedimento complexo.

        Receita Federal (Analista Tributário) Estatística                                               7
        www.estrategiaconcursos.com.br                                                                 169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Amplitude Total para dados não-agrupados

Para dados não agrupados, o cálculo da amplitude total pode ser expresso pela seguinte fórmula:


                                                𝑨𝑻 = 𝒙𝒎á𝒙 − 𝒙𝒎í𝒏

em que 𝑥𝑚á𝑥 é o maior elemento; e 𝑥𝑚í𝑛 é o menor elemento do conjunto.

Calcular a amplitude total dos conjuntos apresentados a seguir:
                                         𝐴 = 50, 50, 50, 50, 50, 50, 50
                                         𝐵 = 47, 48, 49, 50, 51, 52, 53
                                         𝐶 = 20, 30, 40, 50, 60, 70, 80


Aplicando a fórmula anterior para esses dados, obtemos os seguintes resultados:
                                     𝐴 𝑇 𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛 = 50 − 50 = 0
                                     𝐴 𝑇 𝐵 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛 = 53 − 47 = 6
                                    𝐴 𝑇 𝐶 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛 = 80 − 20 = 60
Nesse caso, podemos observar que o conjunto A obteve uma amplitude total igual a 0, ou seja, uma
dispersão nula. Então, significa que os valores não variam entre si. O conjunto B, por sua vez, obteve
uma amplitude igual a 6. Já a variável C teve uma amplitude total igual a 60.
Embora o valor da amplitude total seja diferente para os conjuntos A, B e C, todos possuem a mesma
média aritmética (50). Independentemente da média, verificamos que o conjunto A possui
elementos mais homogêneos do que os conjuntos B e C. E, também, que os elementos do conjunto
B são mais homogêneos do que os do conjunto C.

        Receita Federal (Analista Tributário) Estatística                                           8
        www.estrategiaconcursos.com.br                                                             169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Amplitude Total para dados agrupados sem intervalos de classes

Para dados agrupados SEM intervalos de classe, a fórmula usada para a identificação da amplitude total é
similar à adotada para dados não-agrupados. A única diferença consiste na identificação dos valores
mínimo e máximo, que agora ocorre por meio de uma tabela de frequências.

Calcular a amplitude total da tabela de frequências apresentada a seguir.

                                                  𝒙𝒊              𝒇𝒊
                                                   1             10
                                                   3             15
                                                   5             10
                                                   7              8
                                                   9              7

Nesse caso, como 1 e 9 são os valores mínimo e máximo da variável 𝑥𝑖 , temos o seguinte resultado:


                                                𝐴 𝑇 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
                                                  𝐴𝑇 = 9 − 1 = 8


É importante ressaltar que esses valores foram selecionados independentemente da frequência
associada a eles.

        Receita Federal (Analista Tributário) Estatística                                             9
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Amplitude Total para dados agrupados em classes

Para dados agrupados em intervalos de classe, podemos definir a amplitude total de duas formas:

1) pela diferença entre o limite superior da última classe (𝑳𝒔𝒖𝒑 ) e o limite inferior da primeira classe (𝒍𝒊𝒏𝒇 ),
conforme expresso na fórmula a seguir:


                                                  𝑨 = 𝑳𝒔𝒖𝒑 − 𝒍𝒊𝒏𝒇

2) pela diferença entre o ponto médio da última classe (𝑷𝑴ú𝒍𝒕 ) e o ponto médio da primeira classe (𝑷𝑴𝒑𝒓𝒊 ),
conforme expresso na fórmula a seguir:
                                                            ==219a34==

                                                 𝑨 = 𝑷𝑴ú𝒍𝒕 − 𝑷𝑴𝒑𝒓𝒊

Calcular a amplitude total da distribuição de frequências apresentada a seguir:

                                                  Classes                𝑷𝑴i   𝒇𝒊
                                                   1⊢5                    3    5
                                                   5⊢9                    7    10
                                                  9 ⊢ 13                 11    15
                                                 13 ⊢ 17                 15    10
                                                 17 ⊢ 21                 19    5
                                                   Total                       45

Pelo primeiro método, temos que o limite superior da última classe é 21, enquanto o limite inferior
da primeira classe é 1. Portanto, temos a seguinte amplitude:
                                                  𝐴 = 𝐿𝑠𝑢𝑝 − 𝑙𝑖𝑛𝑓
                                                 𝐴 = 21 − 1 = 20
Pelo segundo método, temos que o ponto médio da última classe é 19, enquanto o ponto médio da
primeira classe é 3. Portanto, temos a seguinte amplitude:


        Receita Federal (Analista Tributário) Estatística                                                      10
        www.estrategiaconcursos.com.br                                                                        169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                𝐴 = 𝑃𝑀ú𝑙𝑡 − 𝑃𝑀𝑝𝑟𝑖
                                                  𝐴 = 19 − 3 = 16
Observe que a amplitude é menor pelo segundo método, porque os extremos da distribuição são
desconsiderados.

(COPEVE (UFAL)/Pref. Maceió/2012) Um registro em saúde epidemiológica apresenta os dados: 3, 4, 7, 8
e 8. Se calcularmos 8 – 3 = 5, estaremos determinando:
a) a amplitude total.
b) o primeiro quartil.
c) o desvio médio.
d) a distância interquartílica.
e) o terceiro quartil.


Comentários:
A amplitude total (ou simplesmente amplitude) é a diferença entre os valores extremos de um conjunto de
observações, ou seja, a diferença entre o maior e o menor elemento desse conjunto.
Gabarito: A.


(VUNESP/Pref. de São José dos Campos/2012) A diferença entre o maior e o menor valor em um conjunto
de dados é denominado (a)
a) curva normal.
b) amplitude total.
c) média.
d) média ponderada.
e) moda.


Comentários:
A diferença entre o maior e o menor valor em um conjunto de dados é denominada de amplitude (ou
amplitude total).
Gabarito: B.

         Receita Federal (Analista Tributário) Estatística                                          11
         www.estrategiaconcursos.com.br                                                             169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Propriedades da Amplitude Total

Nesse tópico, estudaremos as principais propriedades da amplitude total:

        1ª Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, a
          amplitude do conjunto não é alterada.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {3, 6, 8, 9, 10}, cuja amplitude total é:


                                                 𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
                                                  𝐴 = 10 − 3 = 7


Se adicionarmos o número 5 a cada um dos termos da sequência, obteremos uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {8, 11, 13, 14, 15}, cuja amplitude total é:


                                                 𝐴 = 𝑦𝑚á𝑥 − 𝑦𝑚í𝑛
                                                  𝐴 = 15 − 8 = 7


Logo, a adição do número 5 a cada um dos termos da sequência fez com que a amplitude
permanecesse inalterada.

        Receita Federal (Analista Tributário) Estatística                                       12
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

        2ª Propriedade
        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, a amplitude do conjunto fica multiplicada (ou dividida) por essa constante.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {8, 11, 13, 14, 15}, cuja amplitude total é:


                                                 𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
                                                  𝐴 = 15 − 8 = 7


Se multiplicarmos cada um dos termos da sequência por 5, obteremos uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {40, 55, 65, 70, 75}, cuja amplitude total é:


                                                 𝐴 = 𝑦𝑚á𝑥 − 𝑦𝑚í𝑛
                                                𝐴 = 75 − 40 = 35


Logo, a multiplicação de cada um dos termos da sequência por 5 fez com que a amplitude total do
conjunto também fosse multiplicada por 5.

        Receita Federal (Analista Tributário) Estatística                                         13
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                             AMPLITUDE INTERQUARTÍLICA
Como já sabemos, denominamos de quartis os valores de uma série que a dividem em quatro partes iguais,
isto é, quatro partes contendo o mesmo número de elementos (25%). A imagem a seguir mostra os quartis
de uma distribuição hipotética:

Temos, então, 3 quartis (𝑄1 , 𝑄2 e 𝑄3 ) para dividir uma série em quatro partes iguais:

   •   𝑄1: o primeiro quartil corresponde à separação dos primeiros 25% de elementos da série;
   •   𝑄2 : o segundo quartil corresponde à separação de metade dos elementos da série, coincidindo com
       a mediana (𝑸𝟐 = 𝑴𝒅 );
   •   𝑄3 : o terceiro quartil corresponde à separação dos primeiros 75% de elementos da série, ou dos
       últimos 25% de elementos da série.

A amplitude interquartílica (ou distância interquartílica, ou intervalo interquartílico) é o resultado da
subtração entre o terceiro quartil e o primeiro quartil:

                                                  𝑨𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏

A amplitude semi-interquartílica (ou desvio quartílico) é definida como a metade desse valor, sendo
calculada pela expressão apresentada a seguir:

                                                            𝑸 𝟑 − 𝑸𝟏
                                                   𝑫𝑸 =
                                                                𝟐

        Receita Federal (Analista Tributário) Estatística                                             14
        www.estrategiaconcursos.com.br                                                                169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Reparem que a fórmula da amplitude interquartílica (ou distância interquartílica) é muito parecida
com a fórmula da amplitude semi-interquartílico (ou desvio quartílico), podendo ser facilmente
confundida.

                                                             ==219a34==

(AOCP/SUSIPE-PA/2018) Quartis são valores que dividem os dados de uma amostra em quatro grupos,
cada um deles contendo 1/4 do tamanho total da amostra. Em relação ao assunto, informe se é verdadeiro
(V) ou falso (F) o que se afirma a seguir e assinale a alternativa com a sequência correta.
( ) O primeiro quartil Q1 tem 1/4 dos dados acima dele e 3/4 dos dados abaixo dele.
( ) O terceiro quartil Q3 tem 3/4 dos dados abaixo dele e 1/4 dos dados acima dele.
( ) O quartil Q3 é a própria mediana.
( ) A distância interquartílica é dada por DIQ = Q3 – Q1.
a) V – F – F – V.
b) F – V – F – V.
c) F – V – V – V.
d) V – V – F – V.
e) F – V – F – F.


Comentários:
Vamos analisar cada assertiva:
Item 1 - O primeiro quartil Q1 tem 1/4 dos dados acima dele e 3/4 dos dados abaixo dele.
Falso. O primeiro quartil (Q1) tem 1/4 (25%) dos dados abaixo dele e 3/4 (75%) acima dele.

         Receita Federal (Analista Tributário) Estatística                                         15
         www.estrategiaconcursos.com.br                                                            169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Item 2 - O terceiro quartil Q3 tem 3/4 dos dados abaixo dele e 1/4 dos dados acima dele.
Verdadeiro. De fato, o terceiro quartil (Q3) tem 3/4 (75%) dos dados abaixo dele e 1/4 (25%) acima dele

Item 3 - O quartil Q3 é a própria mediana.
Falso. A terceira assertiva é falsa, pois a mediana é equivalente ao segundo quartil (Q2).


4 - A distância interquartílica é dada por 𝐷𝐼𝑄 = 𝑄3 – 𝑄1.
Verdadeiro. Essa é a exata definição de distância interquartílica.


Gabarito: B.

Propriedades da Amplitude Interquartílica

A seguir, veremos que a amplitude interquartílica e o desvio quartílico possuem as mesmas propriedades da
amplitude total.

        1ª Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, a
          amplitude interquartílica (e o desvio quartílico) do conjunto não é alterada.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9, 11, 13}, cuja amplitude interquartílica
é:
                                                   𝐴𝐼𝑄 = 𝑄3 − 𝑄1
                                                𝐴𝐼𝑄 = 11 − 3 = 8

        Receita Federal (Analista Tributário) Estatística                                                 16
        www.estrategiaconcursos.com.br                                                                    169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Se adicionarmos o número 5 a cada um dos termos da sequência, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {6, 8, 10, 12, 14, 16, 18}, cuja amplitude interquartílica é:
                                                   𝐴𝐼𝑄 = 𝑄3 − 𝑄1
                                                𝐴𝐼𝑄 = 16 − 8 = 8
Logo, a adição do número 5 a cada um dos termos da sequência fez com que a amplitude
interquartílica permanecesse inalterada.

        2ª Propriedade

        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, a amplitude interquartílica (e o desvio quartílico) do conjunto fica multiplicada (ou
          dividida) por essa constante.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9, 11, 13}, cuja amplitude interquartílica
é:
                                                   𝐴𝐼𝑄 = 𝑄3 − 𝑄1
                                                𝐴𝐼𝑄 = 11 − 3 = 8
Se multiplicarmos cada um dos termos da sequência por 5, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {5, 15, 25, 35, 45, 55, 65}, cuja amplitude interquartílica é:
                                                   𝐴𝐼𝑄 = 𝑄3 − 𝑄1
                                               𝐴𝐼𝑄 = 55 − 15 = 40
Logo, a multiplicação de cada um dos termos da sequência por 5 fez com que a amplitude
interquartílica do conjunto também fosse multiplicada por 5.

        Receita Federal (Analista Tributário) Estatística                                            17
        www.estrategiaconcursos.com.br                                                               169

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 04

     DESVIOS EM RELAÇÃO À MÉDIA ARITMÉTICA E MEDIANA
Antes de apresentarmos as fórmulas para o cálculo do desvio médio e da variância, precisamos compreender
qual o conceito de desvio em estatística. Um desvio é a distância entre qualquer observação do conjunto
de dados e uma medida descritiva desse conjunto:

                                          𝑑𝑒𝑠𝑣𝑖𝑜 = 𝑜𝑏𝑠𝑒𝑟𝑣𝑎çã𝑜 − 𝑚𝑒𝑑𝑖𝑑𝑎

Em especial, destacamos os desvios em relação à média aritmética e em relação à mediana:


                                                            ̅
                                                   𝒅𝒊 = 𝒙 − 𝒙        (𝑚é𝑑𝑖𝑎)

ou


                                             𝒅𝒊 = 𝒙 − 𝑴𝒅 (𝑚𝑒𝑑𝑖𝑎𝑛𝑎)

É natural pensarmos que, quando os desvios em relação a uma medida descritiva são pequenos, as
observações estão concentradas em torno dessa medida e, portanto, a variabilidade dos dados é pequena.
Agora, quando os desvios são maiores, significa que as observações estão dispersas e, portanto, a
variabilidade dos dados é grande.

(VUNESP/TJ-SP/2015) Leia o texto a seguir para responder à questão. Uma pequena empresa que emprega
apenas cinco funcionários paga os seguintes salários mensais (em mil reais):

                           0,9               1,2               1,4            1,5   2,0

Considerando-se a média dos salários, o valor do desvio do salário de quem ganha R$ 1.400,00 mensais é
a) –1.000.
b) –400.
c) 0.
d) 200.
e) 400.


Comentários:


           Receita Federal (Analista Tributário) Estatística                                         18
           www.estrategiaconcursos.com.br                                                            169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Para responder a questão, primeiro teremos que calcular a média:
                                          0,9 + 1,2 + 1,4 + 1,5 + 2
                                          𝑥̅ =
                                                      5
                                                 7
                                             𝑥̅ = = 1,4 𝑚𝑖𝑙
                                                 5
Então, o desvio em relação ao salário de R$ 1.400 é:
                                                     𝑑𝑖 = 𝑥𝑖 − 𝑥̅
                                                  1400 − 1400 = 0
Gabarito: C.


(VUNESP/TJ-SP/2015) Leia o texto a seguir para responder à questão. Uma pequena empresa que emprega
apenas cinco funcionários paga os seguintes salários mensais (em mil reais):

                        0,9               1,2               1,4            1,5   2,0

Somando-se os valores absolutos dos desvios individuais dos salários tomados em relação à média,
encontra-se o valor de
a) 1.400,00.
b) 1.200,00.
c) 1.000,00.
d) 800,00.
e) 0.


Comentários:
Como vimos na questão anterior, a média dos salários é:
                                                 0,9 + 1,2 + 1,4 + 1,5 + 2
                                          𝑥̅ =
                                                             5
                                                     7
                                                 𝑥̅ = ⟹ 𝑥̅ = 1,4 𝑚𝑖𝑙
                                                     5


Agora, calcularemos os desvios para cada valor apresentado:

        Receita Federal (Analista Tributário) Estatística                                       19
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                                              Desvio
                                 Valor                Desvio
                                                                             absoluto

                                  0,9           0,9 − 1,4 = −0,50              0,5

                                  1,2            1,2 − 1,4 = −0,2              0,2

                                  1,4              1,4 − 1,4 = 0                0

                                  1,5             1,5 − 1,4 = 0,1              0,1

                                   2               2 − 1,4 = 0,6               0,6

                                 Total                                         1,4

Portanto, a soma dos desvios absolutos é 1,4 mil.
Gabarito: A.

Propriedades dos Desvios em Relação à Média Aritmética e
Mediana

Nesse tópico, revisaremos algumas propriedades importantes dos desvios sobre as quais discutimos quando
estudamos sobre a média e a mediana.

        1ª Propriedade
        • A soma algébrica dos desvios em relação à média é nula.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 2, 3, 4, 5, 6, 7}, com média 𝑥̅ = 4. O desvio em
relação à média é a diferença entre cada elemento da sequência e a média aritmética. Como a
sequência possui 7 elementos, teremos o mesmo número de desvios para calcular. Logo, basta
encontrarmos a diferença entre cada elemento e a média:


        Receita Federal (Analista Tributário) Estatística                                           20
        www.estrategiaconcursos.com.br                                                              169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                           𝑑1 = 𝑥1 − 𝑥̅ = 1 − 4 = −3
                                           𝑑2 = 𝑥2 − 𝑥̅ = 2 − 4 = −2
                                           𝑑3 = 𝑥3 − 𝑥̅ = 3 − 4 = −1
                                            𝑑4 = 𝑥4 − 𝑥̅ = 4 − 4 = 0
                                            𝑑5 = 𝑥5 − 𝑥̅ = 5 − 4 = 1
                                            𝑑6 = 𝑥6 − 𝑥̅ = 6 − 4 = 2
                                            𝑑7 = 𝑥7 − 𝑥̅ = 7 − 4 = 3
Agora, somaremos todos esses desvios:
                                   7

                                ∑ 𝑑𝑖 = 𝑑1 + 𝑑2 + 𝑑3 + 𝑑4 + 𝑑5 + 𝑑6 + 𝑑7
                                𝑖=1
                               7

                              ∑ 𝑑𝑖 = (−3) + (−2) + (−1) + 0 + 1 + 2 + 3
                              𝑖=1
                                                       7

                                                      ∑ 𝑑𝑖 = 0
                                                      𝑖=1

Portanto, não importa qual a sequência de números, a soma dos desvios em relação à média é
sempre igual a zero.

        2ª Propriedade
        • A soma dos quadrados dos desvios da sequência de números 𝒙𝒊 , em relação a um
          número 𝒂, é mínima se 𝒂 for a média aritmética dos números.

Novamente, vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 2, 3, 4, 5, 6, 7}, com média 𝑥̅ = 4.
Já calculamos os desvios desses números em relação à média:
                                           𝑑1 = 𝑥1 − 𝑥̅ = 1 − 4 = −3

        Receita Federal (Analista Tributário) Estatística                                    21
        www.estrategiaconcursos.com.br                                                       169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                            𝑑2 = 𝑥2 − 𝑥̅ = 2 − 4 = −2
                                            𝑑3 = 𝑥3 − 𝑥̅ = 3 − 4 = −1
                                            𝑑4 = 𝑥4 − 𝑥̅ = 4 − 4 = 0
                                            𝑑5 = 𝑥5 − 𝑥̅ = 5 − 4 = 1
                                            𝑑6 = 𝑥6 − 𝑥̅ = 6 − 4 = 2
                                            𝑑7 = 𝑥7 − 𝑥̅ = 7 − 4 = 3
Na propriedade anterior, vimos que a soma dos desvios é sempre igual a zero. Agora, calcularemos
a soma dos quadrados desses desvios. Em outras palavras, vamos elevar cada um deles ao quadrado
e somar todos os resultados:
                                 7                          ==219a34==

                               ∑ 𝑑𝑖 = 𝑑12 + 𝑑22 + 𝑑32 + 𝑑42 + 𝑑52 + 𝑑62 + 𝑑72
                                𝑖=1
                          7

                         ∑ 𝑑𝑖 = (−3)2 + (−2)2 + (−1)2 + 02 + 12 + 22 + 32
                         𝑖=1
                                       7

                                      ∑ 𝑑𝑖 = 9 + 4 + 1 + 0 + 1 + 4 + 9
                                      𝑖=1
                                                      7

                                                     ∑ 𝑑𝑖 = 28
                                                     𝑖=1

A propriedade nos garante que, para essa sequência numérica, o valor 28 é o menor valor possível.
Isto é, se encontrarmos os desvios em relação a outro número (diferente da média) e, em seguida,
calcularmos a soma dos quadrados dos desvios, o valor obtido será maior que 28. Vamos ver o que
acontece ao calcularmos o desvio em relação ao número 6:
                                            𝑑1 = 𝑥1 − 𝑥̅ = 1 − 6 = −5
                                            𝑑2 = 𝑥2 − 𝑥̅ = 2 − 6 = −4
                                            𝑑3 = 𝑥3 − 𝑥̅ = 3 − 6 = −3
                                            𝑑4 = 𝑥4 − 𝑥̅ = 4 − 6 = −2
                                            𝑑5 = 𝑥5 − 𝑥̅ = 5 − 6 = −1
                                            𝑑6 = 𝑥6 − 𝑥̅ = 6 − 6 = 0
                                            𝑑7 = 𝑥7 − 𝑥̅ = 7 − 6 = 1

        Receita Federal (Analista Tributário) Estatística                                     22
        www.estrategiaconcursos.com.br                                                        169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Agora, calcularemos a soma dos quadrados desses números:
                     7

                    ∑ 𝑑𝑖 = (−5)2 + (−4)2 + (−3)2 + (−2)2 + (−1)2 + 02 + 12
                    𝑖=1
                                 7

                               ∑ 𝑑𝑖 = 25 + 16 + 9 + 4 + 1 + 0 + 1 = 56
                                𝑖=1

Como esperávamos, o resultado foi maior do que 28.

        3ª Propriedade
        • A soma dos desvios absolutos de uma sequência de números, em relação a um número
          𝒂, é mínima quando 𝒂 é a mediana dos números.

Vamos tomar como exemplo a série {𝑥𝑛 } = {1, 2, 3, 4, 6, 7, 8, 9}. Como o número de termos é par, a
mediana será, por convenção, a média aritmética dos dois termos centrais:
                                                            4+6
                                                    𝑀𝑑 =          = 5.
                                                             2

O desvio em relação à mediana corresponde à diferença entre cada elemento da sequência e a
mediana. Como são 8 números, temos a mesma quantidade de desvios para calcular. Logo, basta
encontrarmos a diferença entre cada número e a mediana:
                                         𝑑1 = 𝑥1 − 𝑀𝑑 = 1 − 5 = −4
                                         𝑑2 = 𝑥2 − 𝑀𝑑 = 2 − 5 = −3
                                         𝑑3 = 𝑥3 − 𝑀𝑑 = 3 − 5 = −2
                                         𝑑4 = 𝑥4 − 𝑀𝑑 = 4 − 5 = −1
                                          𝑑5 = 𝑥5 − 𝑀𝑑 = 6 − 5 = 1
                                          𝑑6 = 𝑥6 − 𝑀𝑑 = 7 − 5 = 2
                                          𝑑7 = 𝑥7 − 𝑀𝑑 = 8 − 5 = 3
                                          𝑑8 = 𝑥8 − 𝑀𝑑 = 9 − 5 = 4


        Receita Federal (Analista Tributário) Estatística                                       23
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Agora, precisamos somar os valores absolutos desses desvios:
                     8

                    ∑|𝑑𝑖 | = |𝑑1 | + |𝑑2 | + |𝑑3 | + |𝑑4 | + |𝑑5 | + |𝑑6 | + |𝑑7 | + |𝑑8 |
                    𝑖=1
                      8

                     ∑|𝑑𝑖 | = |−4| + |−3| + |−2| + |−1| + |1| + |2| + |3| + |4|
                     𝑖=1
                               8

                              ∑|𝑑𝑖 | = 4 + 3 + 2 + 1 + 1 + 2 + 3 + 4 = 20
                              𝑖=1

A propriedade garante que, ao calcularmos a soma dos desvios absolutos em relação à mediana, o
menor valor que encontraremos para essa sequência será 20.
Há um detalhe importante que precisamos esclarecer. Como vimos anteriormente, quando o
número de elementos do conjunto é ímpar, o valor da mediana é único e igual ao termo central.
Porém, quando o número de elementos é par, a mediana pode ser qualquer valor entre os termos
centrais, havendo infinitos valores possíveis para a mediana. Por convenção, contudo, adotamos
a média aritmética dos valores centrais.
Certo, o que isso tem a ver com a propriedade que estamos estudando? Significa dizer que, se
calcularmos a soma dos desvios absolutos para qualquer valor entre 4 e 6, que são os termos
centrais, o valor dos desvios absolutos em relação a mediana também será mínimo. A título
exemplificativo, vamos calcular os desvios em relação ao valor 4,5:
                                       𝑑1 = 𝑥1 − 4,5 = 1 − 4,5 = −3,5
                                       𝑑2 = 𝑥2 − 4,5 = 2 − 4,5 = −2,5
                                       𝑑3 = 𝑥3 − 4,5 = 3 − 4,5 = −1,5
                                       𝑑4 = 𝑥4 − 4,5 = 4 − 4,5 = −0,5
                                        𝑑5 = 𝑥5 − 4,5 = 6 − 4,5 = 1,5
                                        𝑑6 = 𝑥6 − 4,5 = 7 − 4,5 = 2,5
                                        𝑑7 = 𝑥7 − 4,5 = 8 − 4,5 = 3,5
                                        𝑑8 = 𝑥8 − 4,5 = 9 − 4,5 = 4,5
Somando os valores absolutos desses desvios:
                     8

                    ∑|𝑑𝑖 | = |𝑑1 | + |𝑑2 | + |𝑑3 | + |𝑑4 | + |𝑑5 | + |𝑑6 | + |𝑑7 | + |𝑑8 |
                    𝑖=1

        Receita Federal (Analista Tributário) Estatística                                    24
        www.estrategiaconcursos.com.br                                                       169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

             8

            ∑|𝑑𝑖 | = |−3,5| + |−2,5| + |−1,5| + |−0,5| + |1,5| + |2,5| + |3,5| + |4,5|
            𝑖=1
                      8

                    ∑|𝑑𝑖 | = 3,5 + 2,5 + 1,5 + 0,5 + 1,5 + 2,5 + 3,5 + 4,5 = 20
                    𝑖=1

Como havíamos previsto, o valor também foi igual ao valor mínimo, 20.


Por último, a propriedade também garante que, para qualquer valor fora do intervalo entre 4 e 6,
encontraremos um valor maior que o mínimo. Por exemplo, vamos calcular os desvios em relação
ao valor 7:
                                           𝑑1 = 𝑥1 − 7 = 1 − 7 = −6
                                          𝑑2 = 𝑥2 − 7 = 2 − 7 = −5
                                          𝑑3 = 𝑥3 − 7 = 3 − 7 = −4
                                          𝑑4 = 𝑥4 − 7 = 4 − 7 = −3
                                          𝑑5 = 𝑥5 − 7 = 6 − 7 = −1
                                            𝑑6 = 𝑥6 − 7 = 7 − 7 = 0
                                            𝑑7 = 𝑥7 − 7 = 8 − 7 = 1
                                            𝑑8 = 𝑥8 − 7 = 9 − 7 = 2
Somando os valores absolutos desses desvios:
                     8

                    ∑|𝑑𝑖 | = |𝑑1 | + |𝑑2 | + |𝑑3 | + |𝑑4 | + |𝑑5 | + |𝑑6 | + |𝑑7 | + |𝑑8 |
                    𝑖=1
                     8

                    ∑|𝑑𝑖 | = |−6| + |−5| + |−4| + |−3| + |−1| + |0| + |1| + |2|
                    𝑖=1
                               8

                              ∑|𝑑𝑖 | = 6 + 5 + 4 + 3 + 1 + 0 + 1 + 2 = 22
                              𝑖=1

Portanto, como havíamos previsto anteriormente, o valor foi maior que o mínimo.

        Receita Federal (Analista Tributário) Estatística                                    25
        www.estrategiaconcursos.com.br                                                       169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Podemos resumir as propriedades dos desvios da seguinte forma:

1ª) a soma dos desvios em relação à média aritmética é sempre nula;

2ª) a soma dos quadrados dos desvios em relação à média aritmética é mínima; e

3ª) a soma dos módulos dos desvios em relação à mediana é mínima.

Caso o número de elemento seja par, a soma dos módulos também será mínima se os desvios forem
calculados em relação a um dos valores centrais. Isto é, também será mínima a soma dos módulos
dos desvios calculados em relação a qualquer termo no intervalo [𝑥𝑛 , 𝑥𝑛+1 ], em que 𝑥𝑛 e 𝑥𝑛+1 são
                                                                           2   2     2    2
os termos centrais.

        Receita Federal (Analista Tributário) Estatística                                      26
        www.estrategiaconcursos.com.br                                                         169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

(FCC/TRE-SP/2012) Dado um conjunto de observações, indicadas por 𝑿𝒊 (𝒊 = 𝟏, 𝟐, 𝟑, … , 𝒏), o desvio 𝒆𝟏 da
i-ésima observação em relação a um valor 𝜶 é 𝒆𝒊 = 𝑿𝒊 − 𝜶 e |𝒆𝒊 | é o valor absoluto de 𝒆𝒊. Considere as
seguintes afirmações para qualquer conjunto de observações:
I. O valor de ∑ 𝒆𝒊 𝟐 é mínimo se 𝜶 for igual à média aritmética das observações.
II. O valor de ∑|𝒆𝒊 | é mínimo se 𝜶 for igual à mediana das observações.
III. O valor de ∑ 𝒆𝒊 é nulo se 𝜶 for igual à moda das observações.
IV. O valor de ∑|𝒆𝒊 | é nulo se 𝜶 for igual à média aritmética das observações.
Então, são corretas APENAS
a) I e II.
b) I e III.
c) II e III.
d) II e IV.
e) II, III e IV.


Comentários:
Vamos analisar cada assertiva:
A sentença I é verdadeira, pois a soma dos quadrados dos desvios é mínima quando os desvios são calculados
em relação à média aritmética.
A sentença II também é verdadeira, pois a soma dos módulos dos desvios é mínima quando os desvios são
calculados em relação à mediana. Em qualquer situação, quando o desvio é calculado em relação à mediana,
a soma dos desvios absolutas é mínima.
A sentença III é falsa, vez que a soma dos módulos dos desvios é nula se os desvios são calculados em relação
à média. Somente seria verdadeira caso a moda fosse igual à média.
A sentença IV é falsa, pois a soma dos desvios absolutos em relação à média somente é nula quando todos
os desvios também são nulos, ou seja, se todos os números fossem iguais e não houvesse dispersão dos
dados.
Gabarito: A.

               Receita Federal (Analista Tributário) Estatística                                          27
               www.estrategiaconcursos.com.br                                                             169

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                 DESVIO ABSOLUTO MÉDIO
O desvio absoluto médio, ou simplesmente desvio médio, mede a dispersão entre os valores da distribuição
e a média dos dados coletados. Para compreender essa medida, vamos supor que o Estratégia Concursos
tenha realizado uma semana de revisão para estudantes da área fiscal, obtendo os seguintes números de
visualizações:

                                         Dia da
                                                       Número de visualizações
                                        semana
                                       Domingo                  2.000
                                        Segunda                 4.000
                                          Terça                 5.200
                                         Quarta                 6.300
                                         Quinta                 5.400
                                          Sexta                 4.100
                                        Sábado                  2.400

                                          Total             ∑ 𝑓𝑖 = 29.400

Isso significa que a semana de revisão teve uma média diária de 4.200 visualizações. Esse resultado, porém,
não retrata a realidade com fidedignidade, pois alguns dias tiveram mais visualizações do que a média;
enquanto outros não. Por isso, é importante sabermos o quão distante a média está em relação aos valores
reais por ela representados.
Para calculá-los, basta subtrairmos o valor da média de cada observação, conforme mostrado a seguir:

                         Dia da
                                       Número de visualizações                   ̅
                                                                            𝒙𝒊 − 𝒙
                        semana
                       Domingo                    2.000             2.000 − 4.200 = −2.200
                       Segunda                    4.000             4.000 − 4.200 = −200
                         Terça                    5.200             5.200 − 4.200 = 1000
                        Quarta                    6.300             6.300 − 4.200 = 2.100
                        Quinta                    5.400             5.400 − 4.200 = 1.200
                         Sexta                    4.100             4.100 − 4.200 = −100
                        Sábado                    2.400             2.400 − 4.200 = −1.800

        Receita Federal (Analista Tributário) Estatística                                               28
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                         Total             ∑ 𝒇𝒊 = 𝟐𝟗. 𝟒𝟎𝟎                  0

Notem que, ao calcularmos o desvio médio, obtemos resultados positivos e negativos, que se anulam ao
serem somados. Percebam que existem valores de observações que estão muito próximos da média,
enquanto outros estão mais distantes.

Como a soma de todos os desvios médios é sempre igual a zero para qualquer conjunto de dados (1.ª
propriedade dos desvios), sabemos que ∑𝑛𝑖=1(𝑥 − 𝑥̅ ) não nos fornecerá nenhuma informação relevante nem
nos ajudará a compreender o que está acontecendo com essa variável.

Para superar essa dificuldade, podemos utilizar apenas os resultados positivos dos desvios calculados. A
fórmula do cálculo do desvio médio se apresenta da seguinte maneira:

                                                     ∑𝒏𝒊=𝟏|𝒙𝒊 − 𝒙
                                                                ̅|
                                                𝑫𝒎 =
                                                           𝒏

em que 𝐷𝑚 representa o desvio médio, |𝑥𝑖 − 𝑥̅ | representa o módulo da diferença entre uma determinada
observação e a média calculada, 𝑓𝑖 representa a frequência de um determinado valor para a variável da
distribuição, e 𝑛 representa o total de elementos formados pela distribuição.
O desvio médio é uma medida de dispersão mais robusta do que a amplitude total e a amplitude
interquartílica, pois leva em consideração todos os valores do conjunto. O inconveniente dessa medida é a
operação de módulo, que, por conta de suas características matemáticas, torna difícil o estudo de suas
propriedades.

Desvio Médio para dados não-agrupados

O desvio absoluto médio (𝐷𝑚 ), de um conjunto de 𝑛 observações 𝑥1 , ⋯ , 𝑥𝑛 , é a média dos valores absolutos
das diferenças entre as observações e a média. Isto é,

                                                     ∑𝒏𝒊=𝟏|𝒙𝒊 − ̅
                                                                𝒙|
                                                𝑫𝒎 =
                                                           𝒏

As barras verticais indicam a operação de módulo, que é responsável por transformar qualquer número
negativo em um número positivo, isto é, retornar o valor absoluto.

        Receita Federal (Analista Tributário) Estatística                                                29
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Calcular o desvio médio do conjunto mostrado a seguir:
                                                     {1, 2, 3, 5, 9}


Iniciaremos pelo cálculo da média aritmética:
                                                1 + 2 + 3 + 5 + 9 20
                                         𝑥̅ =                    =   =4
                                                        5          5


Vamos montar uma tabela para facilitar o cálculo do desvio médio:

                                    𝒙𝒊              ( 𝒙𝒊 − 𝒙
                                                           ̅)                | 𝒙𝒊 − 𝒙
                                                                                    ̅|
                                    1             (1 − 4) = −3                  3
                                    2             (2 − 4) = −2                  2
                                    3             (3 − 4) = −1                  1
                                    5              (5 − 4) = 1                  1
                                    9              (9 − 4) = 5                  5

                                                                       ∑ | 𝒙𝒊 − 𝒙
                                                                                ̅| = 𝟏𝟐

Aplicando a fórmula do desvio médio, temos:
                                         ∑𝐾𝑖=1|𝑥𝑖 − 𝑥̅ | ∑𝐾
                                                          𝑖=1|𝑥𝑖 − 4|   12
                              𝐷𝑚 =                      =             =    = 2,4
                                               𝑛              𝑛         5

        Receita Federal (Analista Tributário) Estatística                                 30
        www.estrategiaconcursos.com.br                                                    169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(CESPE/ANATEL/2004)

A tabela acima mostra os números mensais de reclamações (N) feitas por usuários de telefonia fixa,
registradas em uma central de atendimento, entre os meses de fevereiro a novembro de 2003.
Considerando esses dados, julgue os itens que se seguem.
O maior desvio absoluto dos números mensais de reclamações registradas é superior a 45.


Comentários:
Iniciaremos pelo cálculo da média:
                       100 + 70 + 70 + 60 + 50 + 100 + 50 + 50 + 30 + 20 600
                𝑥̅ =                                                    =    = 60
                                              10                          10


Agora, calcularemos o módulo (valor absoluto) de cada um dos desvios.
                                       |𝑑1 | = |𝑥1 − 𝑥̅ | = |100 − 60| = 40
                                        |𝑑2 | = |𝑥2 − 𝑥̅ | = |70 − 60| = 10
                                        |𝑑3 | = |𝑥3 − 𝑥̅ | = |70 − 60| = 10
                                         |𝑑4 | = |𝑥4 − 𝑥̅ | = |60 − 60| = 0
                                        |𝑑5 | = |𝑥5 − 𝑥̅ | = |50 − 60| = 10
                                       |𝑑6 | = |𝑥6 − 𝑥̅ | = |100 − 60| = 40
                                        |𝑑7 | = |𝑥7 − 𝑥̅ | = |50 − 60| = 10
                                        |𝑑8 | = |𝑥8 − 𝑥̅ | = |50 − 60| = 10
                                        |𝑑9 | = |𝑥9 − 𝑥̅ | = |30 − 60| = 30
                                       |𝑑10 | = |𝑥10 − 𝑥̅ | = |20 − 60| = 40


O maior desvio absoluto é 40, portanto, o item está incorreto.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                      31
        www.estrategiaconcursos.com.br                                                         169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(CESPE/ANATEL/2004)

A tabela acima mostra os números mensais de reclamações (N) feitas por usuários de telefonia fixa,
registradas em uma central de atendimento, entre os meses de fevereiro a novembro de 2003.
Considerando esses dados, julgue os itens que se seguem.
O desvio médio absoluto da sequência formada pelos números mensais de reclamações é um valor entre 25
e 35.


Comentários:
Para calcular o desvio absoluto médio, temos que encontrar a média dos valores absolutos (módulos) dos
desvios.
                                               ∑𝑛𝑖=1|𝑥𝑖 − 𝑥̅ |
                                                 𝐷𝑚 =
                                                     𝑛
                          40 + 10 + 10 + 0 + 10 + 40 + 10 + 10 + 30 + 40 200
                     𝐷𝑚 =                                               =
                                                10                        10
                                                       𝐷𝑚 = 20
Gabarito: Errado.

Desvio Médio para dados agrupados sem intervalo de classe

Quando os valores vierem dispostos em uma tabela de frequências, o desvio médio será calculado por meio
da seguinte fórmula:
                                               ∑𝒎
                                                𝒊=𝟏[ |𝒙𝒊 − 𝒙
                                                           ̅ | × 𝒇𝒊 ]
                                          𝑫𝒎 =
                                                       ∑ 𝒇𝒊

Em que 𝑚 indica o número de grupos em que os dados estão organizados; e |𝑥𝑖 − 𝑥̅ | representa o módulo
da diferença entre uma determinada observação e a média calculada.

        Receita Federal (Analista Tributário) Estatística                                           32
        www.estrategiaconcursos.com.br                                                              169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Durante uma pesquisa, o Estratégia Concursos registrou a quantidade de filhos de seus professores,
obtendo a tabela de frequências apresentada a seguir. Vamos calcular o desvio médio dessa
distribuição.

                                       Nº de filhos
                                           por              𝒇𝒊            𝒙𝒊 × 𝒇𝒊
                                        professor
                                            0               4             0×4=0
                                            1               8             1×8=8
                                            2               4             2×4=8
                                            3               2             3×2=6
                                            4               2             4×2=8
                                        * Pesquisa ∑ 𝑓 = 20 ∑ 𝑥 × 𝑓 = 30
                                                      𝑖        𝑖   𝑖
                                       populacional

Iniciaremos pelo cálculo da média aritmética:


                                       ∑ 𝑥𝑖 × 𝑓𝑖 30
                                𝑥̅ =            =    = 1,50 𝑓𝑖𝑙ℎ𝑜𝑠 / 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑜𝑟
                                         ∑ 𝑓𝑖     20


Em seguida, adicionaremos uma nova coluna à tabela anterior, em que calcularemos os produtos
dos desvios absolutos por suas respectivas frequências:

                           Nº de filhos
                               por              𝒇𝒊              𝒙𝒊 × 𝒇𝒊        |𝒙𝒊 − 𝒙
                                                                                     ̅| × 𝒇𝒊
                            professor
                                 0              4                 0          |0 − 1,5| × 4 = 6

                                 1              8                 8          |1 − 1,5| × 8 = 4

                                 2              4                 8          |2 − 1,5| × 4 = 2

                                 3              2                 6          |3 − 1,5| × 2 = 3

                                 4              2                 8          |4 − 1,5| × 2 = 5

                            * Pesquisa ∑ 𝑓 = 20 ∑ 𝑥 × 𝑓 = 30 ∑|𝑥 − 𝑥̅ | × 𝑓 = 20
                                          𝑖        𝑖   𝑖        𝑖          𝑖
                           populacional

        Receita Federal (Analista Tributário) Estatística                                        33
        www.estrategiaconcursos.com.br                                                           169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Por fim, aplicando a fórmula do desvio médio, temos:
                                                 ∑|𝑥𝑖 − 𝑥
                                                        ̅| × 𝑓𝑖       20
                                         𝐷𝑚 =                     =        =1
                                                       ∑ 𝑓𝑖           20

Desvio Médio para dados agrupados em classes

Se os dados estiverem agrupados em classe, deveremos adotar a mesma convenção que tomamos para o
cálculo da média: vamos assumir que todos os valores coincidem com os pontos médios das suas respectivas
classes.

Durante uma pesquisa, o Estratégia Concursos registrou as estaturas de 40 alunos, obtendo a
distribuição de frequências apresentada a seguir. Calcule o desvio médio dessa distribuição.

                                                              Frequência
                                                Estaturas
                                                                 (𝒇𝒊 )

                                               150 ⊢ 154          4
                                               154 ⊢ 158          9
                                               158 ⊢ 162          11
                                               162 ⊢ 166          8
                                               166 ⊢ 170          5
                                               170 ⊢ 174          3
                                               * Pesquisa     ∑ 𝒇𝒊 = 𝟒𝟎
                                                amostral

        Receita Federal (Analista Tributário) Estatística                                            34
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Inicialmente, construiremos uma tabela como a mostrada a seguir:

               Frequência
  Estaturas                    𝒙𝒊            𝒙𝒊 × 𝒇𝒊                ̅)
                                                              (𝒙𝒊 − 𝒙      |𝒙𝒊 − 𝒙
                                                                                 ̅|       |𝒙𝒊 − 𝒙
                                                                                                ̅ | × 𝒇𝒊
                  (𝒇𝒊 )

 150 ⊢ 154          4         152              608               -9           9                36
 154 ⊢ 158          9         156            1.404               -5           5                45
 158 ⊢ 162          11        160            1.760               -1           1                11
 162 ⊢ 166          8         164            1.312               3            3                24
 166 ⊢ 170          5         168              840               7            7                35
 170 ⊢ 174          3         172              516               11          11                33
  * Pesquisa   ∑ 𝒇𝒊 = 𝟒𝟎              ∑ 𝒙𝒊 × 𝒇𝒊 = 𝟔. 𝟒𝟒𝟎                              ∑|𝒙𝒊 − 𝒙
                                                                                             ̅ | × 𝒇𝒊 = 𝟏𝟖𝟒
   amostral

Feito isso, podemos calcular a média da distribuição por meio da seguinte fórmula:
                                                  ∑ 𝑥𝑖 × 𝑓𝑖 6.440
                                           𝑥̄ =            =      = 161
                                                    ∑ 𝑓𝑖      40


Conhecendo a média, completamos a tabela com as diferenças e os produtos necessários para o
cálculo do desvio médio. Assim, aplicando a fórmula do desvio médio, temos:
                                           ∑6𝑖=1|𝑥𝑖 − 𝑥̅| × 𝑓𝑖 184
                                    𝐷𝑚 =                      =    = 4,6 𝑐𝑚
                                                  ∑ 𝑓𝑖          40


Portanto, o desvio médio para essa distribuição de estaturas é 4,6 𝑐𝑚.

        Receita Federal (Analista Tributário) Estatística                                                     35
        www.estrategiaconcursos.com.br                                                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(UEPA/SEFAZ-PA/2013) A tabela abaixo representa as estaturas dos jogadores de voleibol que disputaram
a Liga Mundial de 2012.

                                                                NÚMERO
                                             ESTATURAS
                                                                  DE
                                                (cm)
                                                               JOADORES
                                              180 ⊢ 190           10
                                              190 ⊢ 200           30
                                              200 ⊢ 210           10

                                                  ∑

O desvio médio da estatura dos jogadores é:
a) 2
b) 4
c) 6
d) 8
e) 10


Comentários:
Vamos iniciar pelo cálculo da média. Para isso, construiremos uma coluna com os pontos médios e
multiplicaremos cada um pela sua respectiva frequência. Da seguinte forma:

Portanto, a média é:
                                                         9.750
                                                  𝑥̅ =         = 195
                                                          50

        Receita Federal (Analista Tributário) Estatística                                         36
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Em seguida, adicionaremos uma coluna para calcularmos os módulos dos desvios:

Para calcular o desvio médio, devemos multiplicar cada desvio absoluto pela sua respectiva frequência.
Depois, basta somar tudo e dividir por 𝑛.
                                                            ==219a34==

Portanto, o desvio médio é:
                                                 ∑|𝑥𝑖 − 𝑥̅ | × 𝑓𝑖 200
                                         𝐷𝑚 =                    =    =4
                                                      ∑ 𝑓𝑖         50


Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                          37
        www.estrategiaconcursos.com.br                                                             169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Propriedades do Desvio Médio

Nesse tópico, vamos aprender as principais propriedades do desvio médio.

        1ª Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, o
          desvio médio do conjunto não é alterado.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cuja desvio médio é:

                                  |1 − 5| + |3 − 5| + |5 − 5| + |7 − 5| + |9 − 5|
                         𝐷𝑚 =
                                                         5
                                                 4 + 2 + 0 + 2 + 4 12
                                        𝐷𝑚 =                      =
                                                         5          5

Se adicionarmos o número 5 a cada um dos termos da sequência, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {6, 8, 10, 12, 14}, cujo desvio médio é:

                           |6 − 10| + |8 − 10| + |10 − 10| + |12 − 10| + |14 − 10|
                  𝐷𝑚 =
                                                      5
                                                 4 + 2 + 0 + 2 + 4 12
                                        𝐷𝑚 =                      =
                                                         5          5

Logo, a adição do número 5 a cada um dos termos da sequência fez com que o desvio médio
permanecesse inalterado.

        Receita Federal (Analista Tributário) Estatística                                       38
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

        2ª Propriedade
        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, o desvio médio do conjunto fica multiplicado (ou dividido) por essa constante.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cujo desvio médio é:

                                  |1 − 5| + |3 − 5| + |5 − 5| + |7 − 5| + |9 − 5|
                         𝐷𝑚 =
                                                         5
                                                 4 + 2 + 0 + 2 + 4 12
                                        𝐷𝑚 =                      =
                                                         5          5

Se multiplicarmos cada um dos termos da sequência por 5, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {5, 15, 25, 35, 45}, cujo desvio médio é:

                          |5 − 25| + |15 − 25| + |25 − 25| + |35 − 25| + |45 − 25|
                  𝐷𝑚 =
                                                     5
                                             20 + 10 + 0 + 10 + 20 60
                                     𝐷𝑚 =                         =
                                                       5            5

Logo, a multiplicação de cada um dos termos da sequência por 5 fez com que o desvio médio do
conjunto também fosse multiplicado por 5.

        Receita Federal (Analista Tributário) Estatística                                         39
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                            VARIÂNCIA (𝝈𝟐 )
Existem outras formas de se eliminar o problema com os números negativos. Além da operação de módulo,
podemos trabalhar com potências pares. A utilização de potências de expoente par, como o número dois,
além de transformar números negativos em positivos, simplifica o cálculo.

A variância é determinada pela média dos quadrados dos desvios em relação à média aritmética. Por meio
dessa medida de dispersão ou variabilidade, podemos avaliar o quanto os dados estão dispersos em
relação à média aritmética. Nesse sentido, quanto maior a variância, maior a dispersão dos dados.

A variância leva em consideração a totalidade dos valores da variável em estudo, e não apenas os valores
extremos, como faz a amplitude total. Por isso, essa medida de variabilidade é considerada muito estável.
Além disso, a variância complementa as informações obtidas pelas medidas de tendência central.

Até o momento, as medidas que estudamos não sofriam nenhuma alteração quando o cálculo era realizado
para uma amostra. Contudo, para a variância, devemos levar em consideração essa informação, pois há uma
pequena diferença entre o cálculo da variância populacional e da variância amostral.

A variância populacional é simbolizada pela letra grega 𝜎 (sigma), sendo calculada usando todos os
elementos da população, pela seguinte fórmula:


                                                 𝟐
                                                   ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝝁)𝟐
                                               𝝈 =
                                                          𝒏

em que: 𝑥𝑖 é o valor de ordem 𝑖 assumido pela variável; 𝜇 é a média populacional de 𝑥; 𝜎 2 é a variância
populacional; e 𝑛 é o número de dados da população.

A variância amostral é simbolizada pela letra 𝑠, sendo calculada a partir de uma amostra da população, pela
seguinte fórmula:


                                                 𝟐
                                                   ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝒙
                                                              ̅ )𝟐
                                               𝒔 =
                                                        𝒏−𝟏

em que: 𝑥𝑖 é o valor de ordem i assumido pela variável; 𝑥̅ é a média amostral de 𝑥; 𝑠 2 é a variância amostral;
e 𝑛 é o número de dados da amostra.

Normalmente, uma população possui uma grande quantidade de elementos, o que inviabiliza a realização
de um estudo aprofundado de suas medidas, chamadas de parâmetros populacionais. Nesse caso,
recorremos ao estudo de amostras representativas dessa população, buscando obter indícios do valor
correto do parâmetro populacional desconhecido. Esse valor amostral é denominado de estimador do
parâmetro populacional.

        Receita Federal (Analista Tributário) Estatística                                                   40
        www.estrategiaconcursos.com.br                                                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Em nosso caso, a variância populacional cumpre o papel de parâmetro populacional, enquanto a variância
amostral atua como um estimador. Já vimos a variância populacional e a variância amostral são
representadas por símbolos diferentes: 𝜎 2 e 𝑠 2 . O mesmo acontece com a média populacional e a média
amostral, que também possuem símbolos diferentes: 𝜇 (parâmetro populacional) e 𝑥̅ (estimador).

Reparem que, quando a variância representa uma descrição da amostra e não da população, caso mais
frequente em estatística, o denominador das expressões deve ser 𝑛 − 1, em vez de 𝑛. Isso ocorre porque a
utilização do divisor (𝑛 − 1) resulta em uma melhor estimativa do parâmetro populacional.

Além disso, como a soma dos desvios em relação à média aritmética é sempre nula, apenas (𝑛 − 1) dos
desvios (𝑥𝑖 − 𝑥̅ ) são independentes, vez que (𝑛 − 1) desvios determinam automaticamente o valor
desconhecido. Para amostras grandes (𝑛 > 30), não há diferença significativa entre os resultados
proporcionados pela utilização de qualquer dos dois divisores, 𝑛 ou (𝑛 − 1).

Em determinadas situações, a aplicação dessas fórmulas pode requerer um esforço considerável. É o caso
do que acontece quando a média não é um número natural, situação em que a obtenção da soma dos
quadrados dos desvios se torna muito trabalhosa. Por isso, é importante aprendermos outras fórmulas que
podem nos ajudar no cálculo da variância.

Já ouviram dizer que a variância é igual à média dos quadrados menos o quadrado da média? Pois bem,
essa é a fórmula que expressa a variância populacional:


                                                  𝝈𝟐 = ̅̅̅   ̅ )𝟐
                                                       𝒙𝟐 − (𝒙

em que ̅̅̅
       𝑥 2 é a média dos quadrados; e (𝑥̅ )2 é o quadrado da média.

Como vimos, para encontrarmos a fórmula da variância amostral, basta substituirmos 𝑛 por (𝑛 − 1). Isso é
                                                                  𝑛
equivalente a multiplicarmos a variância populacional por (𝑛−1). É exatamente o que faremos agora:


                                               ̅̅̅𝟐 − (𝒙           𝒏
                                         𝒔𝟐 = [𝒙       ̅ )𝟐 ] × (     )
                                                                  𝒏−𝟏

em que ̅̅̅
       𝑥 2 é a média dos quadrados; (𝑥̅ )2 é o quadrado da média; e 𝑛 é o tamanho da amostra.

Por fim, é importante ressaltarmos que, por ser calculada a partir dos quadrados dos desvios, a variância é
um número em unidade quadrada em relação à variável em questão, o que pode ser considerado um
inconveniente. Por isso, essa medida tem pouca utilidade na estatística descritiva, mas é extremamente
importante na inferência estatística e em combinações de amostras. Por exemplo, se os dados estiverem
expressos em quilogramas (Kg), a variância estará expressa em quilogramas ao quadrado (Kg²).

        Receita Federal (Analista Tributário) Estatística                                               41
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Símbolo da variância populacional:
                                                            𝜎2

Símbolo da variância amostral:
                                                            𝑠2

A variância de um conjunto é zero quando todos os elementos são iguais. Se todos os elementos
são iguais, a média aritmética do conjunto coincide com o valor dos elementos e todos os desvios
também são iguais a zero. Logo, a variância também é zero.

A variância é sempre maior ou igual a zero, isto é, sempre tem valor positivo.

Fórmula da variância populacional:

                                         ∑𝑛
                                          𝑖=1(𝑥𝑖 −𝜇)
                                                    2
                                  𝜎2 =                      ou     𝜎 2 = ̅̅̅
                                                                         𝑥 2 − (𝑥̅ )2
                                                𝑛


Fórmula da variância amostral:

                                   ∑𝑛
                                    𝑖=1(𝑥𝑖 −𝑥̅ )
                                                2
                            𝑠2 =                     ou             ̅̅̅2 − (𝑥̅ )2 ] × ( 𝑛 )
                                                             𝑠 2 = [𝑥
                                       𝑛−1                                              𝑛−1

        Receita Federal (Analista Tributário) Estatística                                     42
        www.estrategiaconcursos.com.br                                                        169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Variância para dados não-agrupados

Para dados não agrupados, a variância pode ser expressa por meio das seguintes fórmulas:
a) para populações


                                                                                    (∑𝒏𝒊=𝟏 𝒙𝒊 )𝟐
                               ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝝁)𝟐                            ∑𝒏𝒊=𝟏 𝒙𝟐𝒊 −
                       𝝈𝟐 =                            𝒐𝒖 𝝈𝟐 =                           𝒏
                                        𝒏                                          𝒏

b) para amostras

                                                            ==219a34==

                                                                          𝒏    𝟐   (∑𝒏𝒊=𝟏 𝒙𝒊 )𝟐
                               ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝒙
                                          ̅ )𝟐                           ∑𝒊=𝟏 𝒙𝒊 −
                       𝒔𝟐 =                            𝒐𝒖 𝒔𝟐 =                          𝒏
                                    𝒏 − 𝟏                                       𝒏 − 𝟏


A relação entre a variância amostral (𝒔𝟐 ) e a variância populacional (𝝈𝟐 ) é dada por:

                                                          𝒏
                                               𝒔𝟐 = (         ) × 𝝈𝟐
                                                        𝒏 − 𝟏

Calcular a variância amostral do conjunto de números mostrado a seguir:

                                                     {1, 2, 3, 5, 9}

Iniciaremos pelo cálculo da média aritmética:

                                              1 + 2 + 3 + 5 + 9 20
                                       𝑥̅ =                    =   =4
                                                      5          5
Agora, vamos montar uma tabela para facilitar o cálculo da variância:

        Receita Federal (Analista Tributário) Estatística                                          43
        www.estrategiaconcursos.com.br                                                             169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                  𝒙𝒊                ̅) 𝟐
                                                              (𝒙𝒊 − 𝒙
                                                  1          (1 − 4)2 = 9
                                                  2          (2 − 4)2 = 4
                                                  3          (3 − 4)2 = 1
                                                  5          (5 − 4)2 = 1
                                                  9          (9 − 4)2 = 25

                                                              (𝑥𝑖 − 𝑥̅ )2 = 40


Por fim, aplicando a fórmula da variância amostral, temos:

                                              ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2    40
                                       𝑠2 =                    =     = 10
                                                  𝑛 − 1          5−1

(VUNESP/TJ-SP/2015) Dados os valores de uma variável: 5, 10, 15, 20, 25, as variâncias amostral e
populacional são, respectivamente,
a) 14,7 e 15.
b) 125 e 250.
c) 62,5 e 50.
d) 29,4 e 30,8.
e) 83,3 e 85.


Comentários:


Vamos começar calculando a média:
                                            5 + 10 + 15 + 20 + 25
                                                                  = 15
                                                      5


Agora, vamos encontrar os desvios em relação à média:
                                                 𝑑1 = 5 − 15 = −10
                                                 𝑑2 = 10 − 15 = −5


         Receita Federal (Analista Tributário) Estatística                                    44
         www.estrategiaconcursos.com.br                                                       169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                 𝑑3 = 15 − 15 = 0
                                                 𝑑4 = 20 − 15 = 5
                                                𝑑5 = 25 − 15 = 10


Para calcular a variância (populacional ou amostral), precisamos calcular a soma dos quadrados dos desvios,
isto é:

                                       𝑑𝑖2 = (−10)2 + (−5)2 + 02 + 52 + 102

                                                            𝑑𝑖2 = 250


Nesse momento, dividiremos esse valor por 𝑛 para encontrar a variância populacional e por 𝑛 − 1 para
encontrar a variância amostral:

                            2
                              ∑ 𝑑𝑖2   250   250
                          𝑠 =       =     =     = 62,5 (variância amostral)
                              𝑛−1 5−1        4


                                 2
                                    ∑ 𝑑𝑖2 250
                                𝜎 =      =    = 50 (variância populacional)
                                     𝑛     5
Gabarito: C.

Variância para dados agrupados sem intervalos de classes

Quando os valores vierem dispostos em uma tabela de frequências, a variância será calculada por meio de
uma das seguintes fórmulas:

a) para populações


                                                                                     (∑𝒎
                                                                                       𝒊=𝟏 𝑿𝒊 × 𝒇𝒊 )
                                                                                                     𝟐
                      ∑𝒎          𝟐
                       𝒊=𝟏(𝑿𝒊 − 𝝁) × 𝒇𝒊
                                                                  ∑𝒎    𝟐
                                                                   𝒊=𝟏(𝑿𝒊 × 𝒇𝒊 ) −
            𝝈𝟐 =                                  𝒐𝒖 𝝈𝟐 =                                   𝒏
                                 𝒏                                              𝒏

b) para amostras


                                                                                (∑𝒎
                                                                                  𝒊=𝟏 𝑿𝒊 × 𝒇𝒊 )
                                                                                                𝟐
                      ∑𝒎        ̅ ) 𝟐 × 𝒇𝒊
                       𝒊=𝟏(𝑿𝒊 − 𝒙
                                                                 ∑𝒎    𝟐
                                                                  𝒊=𝟏(𝑿𝒊 × 𝒇𝒊 ) −
               𝒔𝟐 =                               𝒐𝒖 𝒔𝟐 =                              𝒏
                            𝒏 − 𝟏                                            𝒏 − 𝟏

                             ∑𝑚
                              𝑖=1 𝑋𝑖 ×𝑓𝑖
Em que 𝑛 = ∑𝑚
            𝑖=1 𝑓𝑖 e 𝑥̅ =                  .
                                  𝑛

        Receita Federal (Analista Tributário) Estatística                                                45
        www.estrategiaconcursos.com.br                                                                   169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Durante uma pesquisa, o Estratégia Concursos registrou a quantidade de filhos por professor,
obtendo a tabela de frequências apresentada a seguir. Sendo assim, calcule a variância amostral
dessa tabela.

                                        Nº de filhos
                                            por             𝒇𝒊             𝒙𝒊 × 𝒇𝒊
                                         professor
                                             0               4         0×4=0
                                             1               8         1×8=8
                                             2               4         2×4=8
                                             3               2         3×2=6
                                             4               2         4×2=8
                                         * Pesquisa         𝑓𝑖 = 20    𝑥𝑖 × 𝑓𝑖 = 30
                                        populacional

Iniciaremos pelo cálculo da média aritmética:
                                        ∑ 𝑥𝑖 × 𝑓𝑖 30
                                 𝑥̅ =            =    = 1,50 𝑓𝑖𝑙ℎ𝑜𝑠 / 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑜𝑟
                                          ∑ 𝑓𝑖     20


Em seguida, adicionaremos uma nova coluna à tabela anterior, em que calcularemos os produtos
dos quadrados dos desvios por suas respectivas frequências:

                       Nº de filhos
                           por                𝒇𝒊             𝒙𝒊 × 𝒇𝒊                  ̅)𝟐 × 𝒇𝒊
                                                                                (𝒙𝒊 − 𝒙
                        professor
                             0                   4               0            (0 − 1,5)2 × 4 = 9
                             1                   8               8            (1 − 1,5)2 × 8 = 2
                             2                   4               8            (2 − 1,5)2 × 4 = 1
                             3                   2               6           (3 − 1,5)2 × 2 = 4,5
                             4                   2               8          (4 − 1,5)2 × 2 = 12,5
                       * Pesquisa            𝑓𝑖 = 20        𝑥𝑖 × 𝑓𝑖 = 30       (𝑥𝑖 − 𝑥̅ )2 × 𝑓𝑖 = 29
                      populacional

        Receita Federal (Analista Tributário) Estatística                                              46
        www.estrategiaconcursos.com.br                                                                 169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Por fim, aplicando a fórmula do desvio padrão amostral, temos:
                                                ∑(𝑥𝑖 − 𝑥̅ )2 × 𝑓𝑖       29
                                      𝑠2 =                          =        = 1,52
                                                     𝑛−1                19

Variância para dados agrupados em classes

Para dados contínuos agrupados em classes, a variância é calculada por meio das seguintes expressões:

a) para populações

                                                                                                     𝟐
                                                            𝒌     𝟐        (∑𝒌𝒊=𝟏 𝑷𝑴𝒊 × 𝒇𝒊 )
            ∑𝒌𝒊=𝟏(𝑷𝑴𝒊 − 𝝁)𝟐 × 𝒇𝒊                           ∑𝒊=𝟏 𝑷𝑴𝒊 × 𝒇𝒊 −
        𝝈 =  𝟐
                                                   𝒐𝒖 𝝈𝟐 =                         𝒏
                     𝒏                                                    𝒏

b) para amostras


                                                                                    𝒌                𝟐
                                                                𝒌               ( ∑ 𝒊=𝟏 𝑷𝑴 𝒊 × 𝒇 𝒊 )
                ∑𝒌𝒊=𝟏(𝑷𝑴𝒊 − 𝒙
                            ̅ ) 𝟐 × 𝒇𝒊                         ∑𝒊=𝟏 𝑷𝑴𝟐𝒊 × 𝒇𝒊 −
             𝟐
            𝒔 =                        𝒐𝒖 𝒔𝟐 =                                           𝒏
                       𝒏 − 𝟏                                                          𝒏 − 𝟏

                             ∑𝑘
                              𝑖=1 𝑃𝑀𝑖 ×𝑓𝑖
Em que 𝑛 = ∑𝑘𝑖=1 𝑓𝑖 e 𝑥̅ =                  .
                                  𝑛

Observem que as fórmulas são praticamente iguais as apresentadas no subtópico anterior. A diferença básica
é que agora vamos utilizar o ponto médio das 𝑘 classes.

Durante uma pesquisa, o Estratégia Concursos registrou as estaturas de 40 alunos, obtendo a
distribuição de frequências apresentada a seguir. Vamos calcular a variância amostral dessa
distribuição.

        Receita Federal (Analista Tributário) Estatística                                                47
        www.estrategiaconcursos.com.br                                                                   169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                              Frequência
                                                 Estaturas
                                                                 (𝒇𝒊 )

                                                 150 ⊢ 154        4
                                                 154 ⊢ 158        9
                                                 158 ⊢ 162       11
                                                 162 ⊢ 166        8
                                                 166 ⊢ 170        5
                                                 170 ⊢ 174        3
                                                 * Pesquisa      𝒇𝒊 = 𝟒𝟎
                                                  amostral


Inicialmente, construiremos uma tabela como a mostrada a seguir:
                Frequência
  Estaturas                    𝒙𝒊            𝒙𝒊 × 𝒇𝒊                 ̅)
                                                               (𝒙𝒊 − 𝒙           ̅)𝟐
                                                                           (𝒙𝒊 − 𝒙             ̅)𝟐 × 𝒇𝒊
                                                                                         (𝒙𝒊 − 𝒙
                   (𝒇𝒊 )

 150 ⊢ 154            4        152            608                 -9          81              324
 154 ⊢ 158            9        156           1.404                -5          25              225
 158 ⊢ 162           11        160           1.760                -1          1                11
 162 ⊢ 166            8        164           1.312                3           9                72
 166 ⊢ 170            5        168            840                 7           49              245
 170 ⊢ 174            3        172            516                 11         121              363
  * Pesquisa         𝒇𝒊 = 𝟒𝟎              𝒙𝒊 × 𝒇𝒊 = 𝟔. 𝟒𝟒𝟎                                   ̅)𝟐 × 𝒇𝒊 = 𝟏. 𝟐𝟒𝟎
                                                                                       (𝒙𝒊 − 𝒙
 populacional


Feito isso, podemos calcular a média da distribuição por meio da seguinte fórmula:

                                                 ∑ 𝑥𝑖 × 𝑓𝑖 6.440
                                          𝑥̄ =            =      = 161
                                                   ∑ 𝑓𝑖      40

Conhecendo a média, completamos a tabela com as diferenças e os produtos necessários para o
cálculo da variância. Agora, aplicando a fórmula da variância amostral, temos:

                 2
                    ∑𝑘𝑖=1(𝑥𝑖 − 𝑥̅ )2 × 𝑓𝑖 ∑6𝑖=1(𝑥𝑖 − 161)2 × 𝑓𝑖 1.240
                𝑠 =                      =                     =      = 31,79 𝑐𝑚2
                          𝑛 − 1                  40 − 1          39

A variância amostral das estaturas é 31, 79 𝑐𝑚2 .

        Receita Federal (Analista Tributário) Estatística                                                    48
        www.estrategiaconcursos.com.br                                                                      169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Propriedades do Variância

Nesse tópico, vamos aprender as principais propriedades da variância.

        1ª Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, a
          variância do conjunto não é alterada.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cuja variância é:

                            (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + (9 − 5)2
                     𝜎2 =
                                                     5
                                               16 + 4 + 0 + 4 + 16
                                        𝜎2 =                       =8
                                                        5

Se adicionarmos o número 5 a cada um dos termos da sequência, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {6, 8, 10, 12, 14}, cuja variância é:

                2
                  (6 − 10)2 + (8 − 10)2 + (10 − 10)2 + (12 − 10)2 + (14 − 10)2
              𝜎 =
                                                5
                                               16 + 4 + 0 + 4 + 16
                                        𝜎2 =                       =8
                                                        5

Logo, a adição do número 5 a cada um dos termos da sequência fez com que a variância
permanecesse inalterada.

        Receita Federal (Analista Tributário) Estatística                                       49
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

        2ª Propriedade

        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, a variância do conjunto fica multiplicada (ou dividida) pelo QUADRADO dessa
          constante.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cuja variância é:

                       2
                         (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + (9 − 5)2
                     𝜎 =
                                                  5
                                               16 + 4 + 0 + 4 + 16
                                        𝜎2 =                       =8
                                                        5

Se multiplicarmos cada um dos termos da sequência por 5, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {5, 15, 25, 35, 45}, cuja variância é:

                    (5 − 25)2 + (15 − 25)2 + (25 − 25)2 + (35 − 25)2 + (45 − 25)2
             𝜎2 =
                                                  5
                                        400 + 100 + 0 + 100 + 400
                                 𝜎2 =                             = 200
                                                    5

Logo, a multiplicação de cada um dos termos da sequência por 5 fez com que a variância do conjunto
fosse multiplicada por 52 = 25.

        Receita Federal (Analista Tributário) Estatística                                         50
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                       DESVIO-PADRÃO (𝝈)
O desvio padrão (𝒔 ou 𝝈) é definido como sendo a raiz quadrada da média aritmética dos quadrados dos
desvios e, dessa forma, é determinado pela raiz quadrada da variância. É uma das medidas de variabilidade
mais utilizadas porque é capaz de apontar de forma mais precisa a dispersão dos valores em relação à
média aritmética.

Valores muito próximos da média resultarão em um desvio-padrão pequeno, enquanto valores mais
espalhados levarão a desvios maiores. Essa medida será sempre maior ou igual a zero. Ela será igual a zero
quando todos os elementos do conjunto forem iguais.

O desvio padrão é utilizado para comparar a variabilidade de dois conjuntos de dados diferentes quando
as médias forem aproximadamente iguais e quando as unidades de medidas para os dois conjuntos forem
idênticas.

A fórmula para o cálculo do desvio padrão populacional é:


                                                       ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝝁)𝟐
                                              𝝈=√
                                                              𝒏

Para o desvio padrão amostral, a fórmula é a seguinte:


                                                  ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝒙
                                                             ̅ )𝟐
                                              𝒔=√
                                                       𝒏−𝟏

Como vimos no tópico anterior, a utilização do divisor (𝑛 − 1) resulta em uma melhor estimativa do
parâmetro populacional. Além disso, como a soma dos desvios em relação à média aritmética é sempre nula,
apenas (𝑛 − 1) dos desvios (𝑥𝑖 − 𝑥̅ ) são independentes, uma vez que esses (𝑛 − 1) desvios determinam
automaticamente o valor desconhecido.

Por fim, o desvio-padrão é expresso nas mesmas unidades dos dados originais. Tanto o desvio padrão como
a variância são usados como medidas de dispersão ou variabilidade. O uso de uma medida ou de outra
dependerá da finalidade que se tiver em mente.

        Receita Federal (Analista Tributário) Estatística                                              51
        www.estrategiaconcursos.com.br                                                                 169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Símbolo do desvio-padrão populacional:
                                                            𝜎

Símbolo do desvio-padrão amostral:
                                                            𝑠

O desvio-padrão será igual a zero quando todos os elementos forem iguais. Se todos os elementos
forem iguais, a média aritmética do conjunto será igual ao valor dos elementos e todos os desvios
também serão iguais a zero. Logo, o desvio-padrão também será zero.

O desvio-padrão é sempre maior ou igual a zero, isto é, sempre tem valor positivo.

Fórmula do desvio-padrão populacional:
                                                       ∑𝑛𝑖=1(𝑥𝑖 − 𝜇)2
                                               𝜎=√
                                                              𝑛

Fórmula do desvio-padrão amostral:
                                                       ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                               𝑠=√
                                                            𝑛−1

        Receita Federal (Analista Tributário) Estatística                                     52
        www.estrategiaconcursos.com.br                                                        169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(VUNESP/ARTESP/2018) Numa série composta por 𝒏 dados, todos de mesmo valor 𝒙 (𝒙 ≠ 𝟎), o valor do
desvio padrão 𝒔 é:
         𝑛
a) 𝑠 = 𝑥
b) 𝑠 = 0
         𝑛𝑥
c) 𝑠 =
         2

d) 𝑠 = 𝑥
e) 𝑠 = 1


Comentários:
Como todos os dados são iguais, todos os desvios são nulos. Consequentemente, os quadrados dos desvios
também são nulos. Logo, a variância e o desvio-padrão serão iguais a zero.
Gabarito: B.


(UFMT/Pref. de Cáceres-MT/2017) Um conjunto de dados sobre a plaquetopenia de pacientes com dengue
tem variância igual a zero. Pode-se concluir que também vale zero
a) a média.
b) o desvio padrão.
c) a mediana.
d) a moda.


Comentários:
O desvio-padrão é a raiz quadrada da variância. Nesse caso, como a variância é igual a zero, então o desvio-
padrão vale:
                                                          𝜎 = √0 = 0.
Gabarito: B.

             Receita Federal (Analista Tributário) Estatística                                           53
             www.estrategiaconcursos.com.br                                                             169

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Desvio-padrão para dados não-agrupados

Para dados não agrupados, o desvio-padrão pode ser expresso por meio das seguintes fórmulas:
a) para populações


                                               ∑𝒏𝒊=𝟏 𝒅𝟐𝒊     ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝝁)𝟐
                                     𝝈=√                 = √
                                                   𝒏                𝒏


b) para amostras


                                         ∑𝒏𝒊=𝟏 𝒅𝟐𝒊    ∑𝒏𝒊=𝟏(𝒙𝒊 − 𝒙
                                                                 ̅ )𝟐
                                     𝒔=√           =√
                                          𝒏−𝟏              𝒏−𝟏

Vamos calcular o desvio-padrão amostral do conjunto de números mostrado a seguir:
                                                    {1, 2, 3, 5, 9}
Iniciaremos pelo cálculo da média aritmética:
                                              1 + 2 + 3 + 5 + 9 20
                                       𝑥̅ =                    =   =4
                                                      5          5
Em seguida, montaremos uma tabela para facilitar o cálculo do desvio padrão:

                                               𝒙𝒊                     ̅) 𝟐
                                                               ( 𝒙𝒊 − 𝒙
                                               1             (1 − 4)2 = 9
                                               2             (2 − 4)2 = 4
                                               3             (3 − 4)2 = 1
                                               5             (5 − 4)2 = 1
                                               9            (9 − 4)2 = 25

                                                              (𝑥𝑖 − 𝑥̅ )2 = 40

        Receita Federal (Analista Tributário) Estatística                                      54
        www.estrategiaconcursos.com.br                                                         169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Por fim, aplicando a fórmula do desvio padrão temos:

                                                    40
                                           𝑠=√         = √10 ≅ 3,16
                                                   5−1

(FCC/ARTESP/2017) O departamento de operações de uma autarquia do Estado fez um levantamento do
número de acidentes em um determinado trecho de rodovia no ano de 2016, conforme tabela a seguir.

Os números indicam que há uma dispersão significativa, portanto, o desvio padrão para esta amostra é
representado por
a) 13,30.
b) 14,33.
c) 12,74.
d) 10,40.
e) 11,50.


Comentários:


Vamos iniciar calculando a média:
                               36 + 28 + 12 + 5 + 3 + 2 + 2 + 4 + 9 + 11 + 22 + 38
                        𝑥̅ =
                                                         12
                                                        172
                                                   𝑥̅ =
                                                         12
                                                    43
                                               𝑥̅ =     = 14,33
                                                     3

        Receita Federal (Analista Tributário) Estatística                                        55
        www.estrategiaconcursos.com.br                                                           169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Agora, vamos montar uma tabela para simplificar o cálculo da média dos quadrados:

                                                  Valor (𝒙)             𝑿²

                                                      36               1.296
                                                      28               784
                                                      12               144
                                                       5                25
                                                       3                9
                                                       2                4
                                                       2                4
                                                       4                16
                                                       9                81
                                                      11               121
                                                      22               484
                                                      38               1.444
                                                    Total              4.412

Portanto, a média dos quadrados é:

                                          ̅̅̅   4.412
                                          𝑥2 =        = 367,67
                                                 12
A variância populacional é dada pela diferença entre a média dos quadrados e o quadrado da média:
                                                    𝜎 2 = ̅̅̅
                                                          𝑥 2 − 𝑥̅ 2
                                             𝜎 2 = 367,67 − (14,33)2
                                              𝜎 2 = 367,67 − 205,35
                                                    𝜎 2 = 162,32
                                                       𝑛
Se multiplicarmos a variância populacional por 𝑛−1, encontraremos a variância amostral:
                                                              12
                                                 𝑠 2 = 162,32 ×
                                                              11
                                                 2
                                                𝑠 = 162,32 × 1,09
                                                     𝑠 2 = 177,07
                                                    𝑠 = √177,07
                                                      𝑠 = 13,30
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                           56
        www.estrategiaconcursos.com.br                                                              169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(CESPE/Polícia Federal/2018)

Tendo em vista que, diariamente, a Polícia Federal apreende uma quantidade X, em kg, de drogas em
determinado aeroporto do Brasil, e considerando os dados hipotéticos da tabela precedente, que
apresenta os valores observados da variável X em uma amostra aleatória de 5 dias de apreensões no citado
aeroporto, julgue o próximo item.
O desvio padrão amostral da variável X foi inferior a 7


Comentários:


Começaremos calculando a média:
                                          10 + 22 + 18 + 22 + 28
                                                                 = 20
                                                    5
Agora, vamos encontrar os desvios:
                                               𝑑1 = 10 − 20 = −10
                                                 𝑑2 = 22 − 20 = 2
                                                𝑑3 = 18 − 20 = −2
                                                 𝑑4 = 22 − 20 = 2
                                                 𝑑5 = 28 − 20 = 8
Para calcular a variância (populacional ou amostral), precisamos calcular a soma dos quadrados dos desvios,
isto é:

                                       𝑑𝑖2 = (−10)2 + 22 + (−2)2 + 22 + 82

                                                            𝑑𝑖2 = 176

Nesse momento, dividiremos esse valor por 𝑛 − 1 para encontrarmos a variância amostral:

                                          2
                                           ∑ 𝑑𝑖2     176    176
                                      𝑠 =        =        =     = 44
                                           𝑛−1 5−1           4
E, por fim, o desvio padrão é a raiz quadrada da variância:
                                                       𝑠 = √44
O enunciado diz que esse valor é menor do que 7kg. De fato, sabemos que 72 = 49, logo √44 < 7.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                               57
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Desvio-padrão para dados agrupados sem intervalo de Classe

Quando os valores vierem dispostos em uma tabela de frequências, o desvio-padrão será calculado por meio
de uma das seguintes fórmulas:

a) para populações

                                ∑𝒎
                                 𝒊=𝟏 (𝒅𝟐𝒊 × 𝒇𝒊 )    ∑𝒎  [(𝑿𝒊 − 𝝁)𝟐 × 𝒇𝒊 ]
                            𝝈=√                  = √ 𝒊=𝟏
                                      𝒏                      𝒏

b) para amostras

                                       ∑𝒎    𝟐
                                        𝒊=𝟏(𝒅𝒊 × 𝒇𝒊 )     ∑𝒎         ̅ )𝟐 × 𝒇𝒊 ]
                                                           𝒊=𝟏[(𝑿𝒊 − 𝒙
                            𝒔=√                       = √
                                           𝒏−𝟏                   𝒏−𝟏

                             ∑𝑚
                              𝑖=1 𝑋𝑖 ×𝑓𝑖
Em que 𝑛 = ∑𝑚
            𝑖=1 𝑓𝑖 e 𝑥̅ =                  .
                                 𝑛

Durante uma pesquisa, o Estratégia Concursos registrou a quantidade de filhos de seus professores,
obtendo a tabela de frequências apresentada a seguir. Vamos calcular o desvio-padrão amostral
dessa distribuição.

                                        Nº de filhos
                                            por             𝒇𝒊        𝒙𝒊 × 𝒇𝒊
                                         professor
                                               0             4        0×4=0
                                               1             8        1×8=8
                                               2             4        2×4=8
                                               3             2        3×2=6
                                               4             2        4×2=8
                                        * Pesquisa          𝑓𝑖 = 20   𝑥𝑖 × 𝑓𝑖 = 30
                                       populacional

Iniciaremos pelo cálculo da média aritmética:
                                       ∑ 𝑋𝑖 × 𝑓𝑖 30
                                𝑥̅ =            =    = 1,50 𝑓𝑖𝑙ℎ𝑜𝑠 / 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑜𝑟
                                         ∑ 𝑓𝑖     20


        Receita Federal (Analista Tributário) Estatística                                            58
        www.estrategiaconcursos.com.br                                                               169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Em seguida, adicionaremos uma nova coluna à tabela anterior, em que calcularemos os produtos
dos quadrados dos desvios por suas respectivas frequências:

                       Nº de filhos
                           por              𝒇𝒊              𝒙𝒊 × 𝒇𝒊                 ̅)𝟐 × 𝒇𝒊
                                                                              (𝒙𝒊 − 𝒙
                        professor
                             0               4                 0            (0 − 1,5)2 × 4 = 9
                             1               8                 8            (1 − 1,5)2 × 8 = 2
                             2               4                 8            (2 − 1,5)2 × 4 = 1
                             3               2                 6           (3 − 1,5)2 × 2 = 4,5
                             4               2                 8           (4 − 1,5)2 × 2 = 12,5
                       * Pesquisa          𝑓𝑖 = 20          𝑥𝑖 × 𝑓𝑖 = 30     (𝑥𝑖 − 𝑥̅ )2 × 𝑓𝑖 = 29
                      populacional

Por fim, aplicando a fórmula do desvio padrão amostral, temos:
                                                               2
                                                      ∑(𝑥𝑖 − 𝑥
                                                             ̅) × 𝑓𝑖
                                                 𝑠= √
                                                           𝑛−1

                                                     29
                                             𝑠=√        = √1,52 ≅ 1,23
                                                     19

Desvio-padrão para dados agrupados em classes

Quando tivermos que calcular o desvio-padrão para dados agrupados em classes, usaremos as mesmas
fórmulas para dados sem intervalos de classes, utilizando para 𝑥𝑖 os pontos médios de cada classe, mas
adotando os mesmos procedimentos.

Durante uma pesquisa, o Estratégia Concursos registrou as estaturas de 40 alunos, obtendo a
distribuição de frequências apresentada a seguir. Vamos calcular o desvio-padrão amostral dessa
distribuição.

        Receita Federal (Analista Tributário) Estatística                                            59
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                                 Frequência
                                                   Estaturas
                                                                    (𝒇𝒊 )

                                                   150 ⊢ 154         4
                                                   154 ⊢ 158         9
                                                   158 ⊢ 162         11
                                                   162 ⊢ 166         8
                                                   166 ⊢ 170         5
                                                   170 ⊢ 174         3
                                                   * Pesquisa       𝒇𝒊 = 𝟒𝟎
                                                    amostral


Inicialmente, construiremos uma tabela como a mostrada a seguir:

                      Frequência
        Estaturas                  𝒙𝒊            𝒙𝒊 × 𝒇𝒊                ̅)
                                                                  (𝒙𝒊 − 𝒙           ̅)𝟐
                                                                              (𝒙𝒊 − 𝒙             ̅)𝟐 × 𝒇𝒊
                                                                                            (𝒙𝒊 − 𝒙
                         (𝒇𝒊 )

       150 ⊢ 154          4        152            608               -9           81              324
       154 ⊢ 158          9        156           1.404              -5           25              225
       158 ⊢ 162         11        160           1.760              -1           1                11
       162 ⊢ 166          8        164           1.312               3           9                72
       166 ⊢ 170          5        168            840                7           49              245
       170 ⊢ 174          3        172            516               11          121              363
        * Pesquisa       𝒇𝒊 = 𝟒𝟎              𝒙𝒊 × 𝒇𝒊 = 𝟔. 𝟒𝟒𝟎                                  ̅)𝟐 × 𝒇𝒊 = 𝟏. 𝟐𝟒𝟎
                                                                                          (𝒙𝒊 − 𝒙
       populacional


Feito isso, podemos calcular a média da distribuição por meio da seguinte fórmula:
                                                 ∑ 𝑃𝑀𝑖 × 𝑓𝑖 6.440
                                          𝑥̄ =             =      = 161
                                                    ∑ 𝑓𝑖     40
Conhecendo a média, completamos a tabela com as diferenças e os produtos necessários para o
cálculo do desvio padrão. Agora, aplicando a fórmula do desvio padrão amostral, temos:

            ∑𝑘𝑖=1(𝑃𝑀𝑖 − 𝑥̅ )2 × 𝑓𝑖    ∑6 (𝑃𝑀𝑖 − 161)2 × 𝑓𝑖    1.240
    𝑠=√                            = √ 𝑖=1                 =√       = √31,79 ≅ 5,64 𝑐𝑚
                   𝑛−1                      40 − 1              39

O desvio-padrão das estaturas é 5,64 𝑐𝑚. Vimos anteriormente que o desvio médio, para essa
mesma distribuição, foi de 4,63 𝑐𝑚.

        Receita Federal (Analista Tributário) Estatística                                                           60
        www.estrategiaconcursos.com.br                                                                              169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Propriedades do Desvio-padrão

Nesse tópico, vamos estudar as principais propriedades do desvio-padrão.

        1ª Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, o
          desvio-padrão do conjunto não é alterado.

                                                            ==219a34==

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cujo desvio-padrão é:

                             (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + ( 9 − 5)2
                    𝜎=√
                                                      5


                                              16 + 4 + 0 + 4 + 16
                                      𝜎=√                         = 2√2
                                                       5

Se adicionarmos o número 5 a cada um dos termos da sequência, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {6, 8, 10, 12, 14}, cujo desvio-padrão é:

                      (6 − 10)2 + (8 − 10)2 + (10 − 10)2 + (12 − 10)2 + (14 − 10)2
             𝜎=√
                                                    5


                                              16 + 4 + 0 + 4 + 16
                                      𝜎=√                         = 2√2
                                                       5

Logo, a adição do número 5 a cada um dos termos da sequência fez com que o desvio-padrão
permanecesse inalterado.

        Receita Federal (Analista Tributário) Estatística                                       61
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

        2ª Propriedade
        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, o desvio-padrão do conjunto fica multiplicado (ou dividido) por essa constante.

Vamos tomar como exemplo a sequência {𝑥𝑛 } = {1, 3, 5, 7, 9}, cujo desvio-padrão é:

                             (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + ( 9 − 5)2
                    𝜎=√
                                                      5

                                              16 + 4 + 0 + 4 + 16
                                      𝜎=√                         = 2√2
                                                       5

Se multiplicarmos cada um dos termos da sequência por 5, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {5, 15, 25, 35, 45}, cujo desvio-padrão é:

                     (5 − 25)2 + (15 − 25)2 + (25 − 25)2 + (35 − 25)2 + (45 − 25)2
            𝜎=√
                                                   5

                                  400 + 100 + 0 + 100 + 400    200
                          𝜎=√                               =√     = 10√2
                                              5                 5

Logo, a multiplicação de cada um dos termos da sequência por 5 fez com que o desvio-padrão do
conjunto também fosse multiplicado por 5.

        Receita Federal (Analista Tributário) Estatística                                         62
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

   COEFICIENTE DE VARIAÇÃO (OU DISPERSÃO RELATIVA)
O desvio-padrão pode ser utilizado para a comparação de duas ou mais séries de valores, no que diz respeito
à variabilidade e dispersão, quando os conjuntos possuem a mesma média e estão expressos na mesma
unidade de medida (p.ex., os dois conjuntos em centímetros). Porém, quando os conjuntos de dados estão
expressos em unidades diferentes (p.ex., quilogramas e centímetros), precisamos de outra medida.

Para contornar essa limitação do desvio-padrão, podemos caracterizar a dispersão ou variabilidade dos
dados de maneira relativa ao seu valor médio. Nesse sentido, o coeficiente de variação é uma medida de
dispersão relativa que fornece a variação dos dados em relação à média, podendo ser calculado como:

a) para populações

                                                            𝝈
                                               𝑪𝑽 =           × 𝟏𝟎𝟎 (%)
                                                            𝝁

b) para amostras

                                                            𝒔
                                               𝑪𝑽 =           × 𝟏𝟎𝟎 (%)
                                                            ̅
                                                            𝒙

em que: 𝜎 é o desvio-padrão populacional; 𝜇 é a média populacional; 𝑠 é o desvio-padrão amostral; e 𝑥̅ é a
média amostral.

O coeficiente de variação pode ser interpretado por meio de algumas regras empíricas:

a) a distribuição tem baixa dispersão se 𝐶𝑉 < 15%;

b) a distribuição tem média dispersão se 15% < 𝐶𝑉 < 30%; 𝑒

c) a distribuição tem elevada dispersão se 𝐶𝑉 > 30%.

Além disso, quanto menor for o valor do coeficiente de variação, mais homogêneos serão os dados, ou seja,
menor será a dispersão em torno da média. Por isso, podemos classificar as distribuições em homogêneas
ou heterogêneas, da seguinte forma:

a) a distribuição é homogênea quando possui dispersão baixa ou média (𝐶𝑉 < 30%);

b) a distribuição é heterogênea quando possui dispersão elevada (𝐶𝑉 > 30%).

        Receita Federal (Analista Tributário) Estatística                                               63
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Em uma empresa de tecnologia, o salário médio dos homens é de R$ 1800,00 com desvio-padrão de
R$ 810,00 e o salário médio das mulheres é de R$ 1500,00 com desvio padrão de R$ 705,00. A
dispersão relativa dos salários dos homens é maior que a das mulheres?


Vamos identificar os dados do problema:
a) para os homens:
                                                    𝜇 = 1800
                                                   { 𝐻
                                                     𝜎𝐻 = 810
b) para as mulheres:
                                                    𝜇 = 1500
                                                   { 𝑀
                                                     𝜎𝑀 = 705


Agora, vamos calcular os respectivos coeficientes de variação:
a) para os homens:
                                            𝜎𝐻         810
                                    𝐶𝑉 =       × 100 =      = 45,0%
                                            𝜇𝐻         1800
b) para as mulheres:
                                            𝜎𝑀         705
                                   𝐶𝑉 =        × 100 =      = 47,0%
                                            𝜇𝑀         1500


Portanto, os salários das mulheres apresentam uma dispersão relativa maior que os salários dos
homens. Além disso, as duas distribuições possuem uma alta dispersão (𝐶𝑉 > 30%).

        Receita Federal (Analista Tributário) Estatística                                  64
        www.estrategiaconcursos.com.br                                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(FCC/ALAP/2020) O número de empregados de uma empresa é igual a 200, sendo que 60% são homens e
o restante mulheres. Nesta empresa, a média aritmética dos salários da população formada pelos salários
dos homens é igual a 5 mil reais, com um coeficiente de variação igual a 30%, e a média aritmética dos
salários da população formada pelos salários das mulheres também é igual a 5 mil reais, porém com um
coeficiente de variação igual a 20%. Considerando a população formada por todos os 200 empregados da
empresa, obtém-se que a variância, em mil reais ao quadrado, dos respectivos salários é igual a
a) 1,69
b) 1,75
c) 1,30
d) 2,50
e) 3,25


Comentários:
Para responder essa questão, encontraremos os dados considerando separadamente os homens e depois
faremos o mesmo processo para as mulheres. Ao final, acharemos o que foi pedido para a população 𝑁 =
200.
Segundo a questão, a população tem tamanho igual a 200, isto é, 𝑁 = 200. Dessa população de empregados,
temos que 60% são homens, ou seja:
                                             60% × 200 = 120 ℎ𝑜𝑚𝑒𝑛𝑠.
Consequentemente, o número de mulheres será:
                                             200 – 120 = 80 𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠.
De acordo com o enunciado, a média aritmética dos salários da população tem coeficiente de variação igual
a 30%, isto é, 𝐶𝑉ℎ𝑜𝑚𝑒𝑛𝑠 = 30%. Esse coeficiente é calculado por meio da seguinte fórmula:
                                                          𝜎
                                             𝐶𝑉ℎ𝑜𝑚𝑒𝑛𝑠 =
                                                          𝜇
A questão nos informou que a média salarial dos homens é de 5 mil reais, ou seja, 𝜇 = 5 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠). Logo,
usando a fórmula acima, conseguiremos encontrar o desvio padrão "populacional" dos homens:
                                                   𝜎ℎ𝑜𝑚𝑒𝑛𝑠
                                            30% =
                                                      5
                                         𝜎ℎ𝑜𝑚𝑒𝑛𝑠 = 30% × 5
                                              𝜎ℎ𝑜𝑚𝑒𝑛𝑠 = 1,5 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)
Sabemos que a variância é o quadrado do desvio padrão, então:
                                        2
                                       𝜎ℎ𝑜𝑚𝑒𝑛𝑠 = (1,5)2 = 2,25(𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)2

          Receita Federal (Analista Tributário) Estatística                                            65
          www.estrategiaconcursos.com.br                                                               169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Adotaremos o mesmo procedimento para as mulheres. A questão nos informou que a média salarial das
mulheres é de 5 mil reais, ou seja, 𝜇 = 5 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠). A única diferença é que o coeficiente de variação das
mulheres é igual a 20%, 𝐶𝑉𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 = 20%.
                                                        𝜎𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠
                                          𝐶𝑉𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 =
                                                            𝜇
                                                    𝜎𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠
                                            20% =
                                                         5
                                       𝜎𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 = 1,00 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)
A variância é o quadrado do desvio padrão, então:
                                     2
                                    𝜎𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 = (1,00)2 = 1,00(𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)2
Agora, consideraremos toda a população 𝑁 = 200. A média populacional dos salários dos 200 empregados
será 5 mil, já que tanto a média salarial dos homens quanto a média salarial das mulheres é igual é igual a 5
mil reais. Portanto:
                                                 𝑥̅ = 5 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)
Agora, para encontrar a variância, vamos utilizar a fórmula clássica da variância:
                                               ∑(𝑥𝑖 − 𝑥̅ )2
                                                    2
                                          𝜎 =
                                                   𝑁
                               2
Buscaremos o termo ∑(𝑥𝑖 − 𝜇) para homens e mulheres, lembrando sempre que a média é igual a
5 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠), tanto para homens quanto para mulheres.
Calculando para os homens:

                                                2
                                                         ∑(𝑥𝑖 − 𝑥̅ )2
                                               𝜎ℎ𝑜𝑚𝑒𝑛𝑠 =
                                                              𝑁
                                                        ∑(𝑥𝑖 − 𝑥̅ )2
                                                 2,25 =
                                                           120
                                        ∑(𝑥𝑖 − 𝜇)2 = 2,25 × 120 = 270

Calculando para as mulheres:

                                               2
                                                          ∑(𝑥𝑖 − 𝑥̅ )2
                                              𝜎𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 =
                                                              𝑁
                                                        ∑(𝑥𝑖 − 𝑥̅ )2
                                                 1,00 =
                                                           80
                                         ∑(𝑥𝑖 − 𝜇)2 = 1,00 × 80 = 80

Agora, substituiremos esses valores na variância de toda a população, considerando 𝑁 = 200:
                                                  ∑(𝑥𝑖 − 𝑥̅ )2
                                                    2
                                              𝜎 =
                                                      𝑁
                                       270 + 80 350
                                  𝜎2 =          =     = 1,75 (𝑚𝑖𝑙 𝑟𝑒𝑎𝑖𝑠)2
                                         200      200
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                                 66
        www.estrategiaconcursos.com.br                                                                   169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

(FCC/Metrô-SP/2019) Uma empresa possui 40 funcionários dos quais F1 são mulheres e F2 são homens.
Sabe-se que a média salarial das mulheres é de 8 salários mínimos, que a média salarial dos homens é de
10 salários mínimos e que a média salarial de todos os 40 funcionários é de 8,6 salários mínimos. Se a
variância dos salários dos funcionários do sexo masculino é igual a (F2 + 4) (salários mínimos)², o
coeficiente de variação desses funcionários do sexo masculino é igual a
a) 32%.
b) 25%.
c) 36%.
d) 40%.
e) 15%


Comentários:                                                  ==219a34==

Conforme o enunciado, uma empresa possui um total de 40 funcionários, sendo um subtotal 𝐹1 de mulheres
e um subtotal 𝐹2 de homens. Logo,
                                              𝐹1 + 𝐹2 = 40 (𝐸𝑞𝑢𝑎çã𝑜 1)
De acordo com a questão, a média salarial das mulheres é 8, enquanto a média salarial dos homens é 10.
                                                      𝑥̅𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠 = 8
                                                      𝑥̅ℎ𝑜𝑚𝑒𝑛𝑠 = 10
                                                          𝑥̅ = 8,6
Calculando a média dos salários para homens e mulheres :
                                              𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠)
                                                                  = 8
                                                       𝐹1
                                           𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠) = 8 × 𝐹1


                                              𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 ℎ𝑜𝑚𝑒𝑛𝑠)
                                                                = 10
                                                      𝐹2
                                            𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 ℎ𝑜𝑚𝑒𝑛𝑠) = 10 × 𝐹2
A média total pode ser calculada por meio da seguinte expressão:
                                       𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 𝑚𝑢𝑙ℎ𝑒𝑟𝑒𝑠) + 𝛴(𝑠𝑎𝑙á𝑟𝑖𝑜 ℎ𝑜𝑚𝑒𝑛𝑠)
                                𝑥̅ =
                                                       𝐹1 + 𝐹2
                                                        8 × 𝐹1 + 10 × 𝐹2
                                                8,6 =
                                                             𝐹1 + 𝐹2
                                       8,6 × 𝐹1 + 8,6 × 𝐹2 = 8 × 𝐹1 + 10 × 𝐹2
                                          0,6 × 𝐹1 = 1,4 × 𝐹2 (𝐸𝑞𝑢𝑎çã𝑜 2)


Chegamos, portanto, a uma situação em que temos duas equações e duas incógnitas (𝐹1 e 𝐹2 ). Podemos
isolar a variável 𝐹1 na Equação 2 e, em seguida, substituí-la na Equação 1, chegando ao valor de 𝐹2 .


          Receita Federal (Analista Tributário) Estatística                                              67
          www.estrategiaconcursos.com.br                                                             169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                      1,4 × 𝐹2    7
                                               𝐹1 =            = ( ) × 𝐹2
                                                         0,6      3


Substituindo a variável 𝐹1 na Equação 1, chegamos ao valor de 𝐹2 .
                                              𝐹1 + 𝐹2 = 40 (𝐸𝑞𝑢𝑎çã𝑜 1)
                                          7
                                         ( ) × 𝐹2 + 𝐹2 = 40
                                          3
Multiplicando todos os termos por 3, temos:
                                                7 × 𝐹2 + 3 × 𝐹2 = 120
                                                      10 × 𝐹2 = 120
                                                         𝐹2 = 12
Portanto, o número de homens é 12.
O enunciado também forneceu a variância, que é equivalente à expressão (F2+4). Isto é:
                                             𝜎 2 = 𝐹2 + 4 = 12 + 4 = 16.
Então, o desvio padrão será a raiz quadrada da variância:
                                                          𝜎 = 4.
O coeficiente de variação (𝐶𝑉) para os homens será:
                                                         𝜎            4
                                             𝐶𝑉 =                =      = 40%
                                                      𝑥̅ℎ𝑜𝑚𝑒𝑛𝑠       10
Gabarito: D.


(FCC/TRT 20ª Região/2016) Em uma associação de determinada carreira profissional é realizado um censo
em que foram apurados os salários de todos os seus 320 associados em número de salários mínimos (S.M.).
O coeficiente de variação correspondente foi de 16% e a soma dos quadrados de todos os salários, em
(S.M.)2, foi de 8.204,80. O desvio padrão dos salários destes associados é, em S.M., de
a) 0,80
b) 0,64
c) 0,96
d) 0,40
e) 1,60


Comentários:
O coeficiente de variação foi informado na questão. Sabemos que ele é resultado da divisão entre o desvio
padrão e a média, então:
                                                         16   𝜎
                                                            =
                                                         100 𝑥̅

          Receita Federal (Analista Tributário) Estatística                                           68
          www.estrategiaconcursos.com.br                                                              169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                     100𝜎
                                                       𝑥̅ =
                                                      16
A variância resulta da diferença entre a média dos quadrados e o quadrado da média. Vamos aplicar o valor
da média na fórmula da variância:
                                                     𝜎 2 = ̅̅̅
                                                           𝑥 2 − 𝑥̅ 2

                                              2
                                                8.204,80    100𝜎 2
                                          𝜎 =            −(      )
                                                  320        16
                                           2
                                               8.204,80 10.000𝜎 2
                                          𝜎 =            −
                                                  320        256
                                           2
                                               32.819,2 − 50.000𝜎 2
                                          𝜎 =
                                                       1280
                                        1280𝜎 = 32.819,2 − 50.000𝜎 2
                                             2

                                                  51280𝜎 2 = 32.819,2
                                                          32.819,2
                                                    𝜎2 =
                                                           51280
                                                        2
                                                       𝜎 = 0,64
                                                      𝜎 = √0,64
                                                        𝜎 = 0,8
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                             69
        www.estrategiaconcursos.com.br                                                                169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                      VARIÂNCIA RELATIVA
A variância relativa é uma medida de dispersão relativa que resulta do quociente entre a variância absoluta
e o quadrado da média. É basicamente o quadrado do coeficiente de variação. Isto é:

a) para populações


                                                       𝜎 2 𝜎2
                                                 𝑉𝑅 = ( ) = 2
                                                       𝜇   𝜇

b) para amostras


                                                       𝑠 2 𝑠2
                                                 𝑉𝑅 = ( ) = 2
                                                       𝑥̅  𝑥̅

A variância relativa, assim como o coeficiente de variação, é uma medida adimensional, ou seja, não tem
uma unidade de medida. Repare que tanto o numerador (variância) quanto o denominador (quadrado da
média) são expressos na mesma unidade de medida, de modo a se cancelarem no momento da divisão.

Em uma empresa de tecnologia, o salário médio dos homens é de R$ 1800,00 com desvio-padrão de
R$ 810,00 e o salário médio das mulheres é de R$ 1500,00 com desvio padrão de R$ 705,00. A
variância relativa dos salários dos homens é maior que a das mulheres?

Vamos identificar os dados do problema:

a) para os homens:
                                                    𝜇 = 1800
                                                   { 𝐻
                                                     𝜎𝐻 = 810

b) para as mulheres:
                                                    𝜇 = 1500
                                                   { 𝑀
                                                     𝜎𝑀 = 705

        Receita Federal (Analista Tributário) Estatística                                               70
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Agora, vamos calcular as respectivas variâncias relativas:

a) para os homens:
                                                          2                 2
                                                 𝜎𝐻      810
                                          𝑉𝑅 = (    ) =(     ) ≅ 0,20
                                                 𝜇𝐻     1800

b) para as mulheres:
                                                         2                  2
                                               𝜎𝑀                  705
                                         𝑉𝑅 = (    )           = (      ) ≅ 0,22
                                                𝜇𝑀                 1500

Portanto, os salários das mulheres apresentam uma variância relativa maior que os salários dos
homens.
                                                               ==219a34==

(FCC/SEFAZ-BA/2019) O coeficiente de variação de Pearson correspondente a uma população P1 com
média aritmética igual a 20 e tamanho 20 é igual a 30%. Decide-se excluir de P1, em um determinado
momento, dois elementos iguais a 11 cada um, formando uma nova população P2. A variância relativa de
P2 é igual a
a) 10/147.
b) 4/49.
c) 16/147.
d) 8/49.
e) 4/441.


Comentários:
O coeficiente de variação de Pearson é a razão entre o desvio padrão e a média.
                                                        𝜎1
                                                𝐶𝑉𝑃1 =
                                                        ̅̅̅1
                                                        𝑋
                                                       𝜎1
                                                0,3 =
                                                       20
                                            𝜎1 = 20 × 0,3 = 6


Logo, a variância de 𝑃1 é:

           Receita Federal (Analista Tributário) Estatística                                     71
           www.estrategiaconcursos.com.br                                                        169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                         𝜎12 = 62 = 36


Como a variância é a média dos quadrados menos o quadrado das médias, temos:
                                                     𝜎12 = ̅̅̅
                                                           𝑋12̅ − (𝑋
                                                                   ̅̅̅1 )2

                                                         36 = ̅̅̅̅
                                                              𝑋12 − 202
                                                         36 = ̅̅̅
                                                              𝑋12̅ − 400
                                                           ̅̅̅
                                                           𝑋12̅ = 436


Com isso, podemos calcular a soma dos termos:
                                                                 ∑ 𝑋𝑖
                                                           ̅̅̅
                                                           𝑋1 =
                                                                  20
                                                                ∑20 𝑋
                                                          ̅̅̅1 = 𝑖=1 𝑖
                                                          𝑋
                                                                  20
                                        20
                                                   ̅̅̅1 = 20 × 20 = 400
                                       ∑ 𝑋𝑖 = 20 × 𝑋
                                       𝑖=1

De igual forma, temos:
                                                                  20    2
                                                         ̅̅̅    ∑𝑖=1 𝑋𝑖
                                                         𝑋12̅ =
                                                                  20
                                     20

                                     ∑ 𝑋𝑖2 = 20 × ̅̅̅
                                                  𝑋12̅ = 20 × 436 = 8.720
                                     𝑖=1

O enunciado afirma que dois elementos iguais a 11 serão retirados, formando uma nova população 𝑃2 . Dessa
forma, as novas somas serão iguais a:
                                               18

                                             ∑ 𝑋𝑖 = 400 − 2 × 11 = 378
                                             𝑖=1
                                          18

                                       ∑ 𝑋𝑖2 = 8720 − 2 × 112 = 8.478
                                        𝑖=1

Assim, as novas médias são iguais a:
                                                   ∑18
                                                     𝑖=1 𝑋𝑖   378
                                                ̅̅̅2 =
                                                𝑋           =      = 21
                                                      18       18
                                             ̅̅̅̅
                                                2
                                                  ∑18
                                                   𝑖=1 𝑋𝑖
                                                         2
                                                             8.478
                                             𝑋2 =          =       = 471
                                                    18        18


        Receita Federal (Analista Tributário) Estatística                                             72
        www.estrategiaconcursos.com.br                                                                169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

De posse dessas informações, podemos calcular a nova variância absoluta:
                                                  𝜎22 = ̅̅̅
                                                        𝑋22̅ − (𝑋
                                                                ̅̅̅2 )2
                                                 𝜎22 = 471 − (21)2
                                                  𝜎22 = 471 − 441
                                                       𝜎22 = 30


Finalmente, temos que a variância relativa é a razão entre a variância e o quadrado da média:
                                                         𝜎22     30
                                                𝑉𝑅𝑃2 =         =
                                                        ̅̅̅
                                                       (𝑋2 ) 2   441


Simplificando por 3, temos:
                                                            30   10
                                                 𝑉𝑅𝑃2 =        =
                                                            441 147
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                       73
        www.estrategiaconcursos.com.br                                                          169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                          QUESTÕES COMENTADAS – FGV

Amplitude Total

1. (FGV/Pref. SJC/2024) Segundo dados do IBGE, o IPCA mensal registrou os seguintes valores
entre janeiro e julho de 2023 (em %):

                                           Jan/2023                    0,53

                                           Fev/2023                    0,84

                                          Mar/2023                     0,71

                                           Abr/2023                    0,61

                                           Mai/2023                    0,23

                                           Jun/2023                   -0,08

                                           Jul/2023                    0,12

Considerando esse período, a mediana e a amplitude (em %) foram iguais, respectivamente, a
a) 0,42 e 0,76.
b) 0,53 e 0,76.
c) 0,53 e 0,92.
d) 0,53 e 0,485.
e) 0,57 e 0,84.


Comentários:
A mediana é o termo central da amostra, ou seja, em um conjunto de dados ordenados a mediana
corresponde à 50% da amostra. Ordenando os dados da tabela, temos:
                                  −0,08, 0,12, 0,23,        0,53
                                                            ⏟         , 0,61, 0,71, 0,84
                                                       𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑡𝑟𝑎𝑙

A amplitude total é a diferença entre o maior e o menor elemento de um conjunto:
                                                   𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
                                                 𝐴 = 0,84 − (−0,08)
                                                        𝐴 = 0,92
Gabarito: C.

        Receita Federal (Analista Tributário) Estatística                                  74
        www.estrategiaconcursos.com.br                                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

2. (FGV/DPE-RJ/2014) Dentre as informações coletadas dos cidadãos através do 1º atendimento
da Defensoria Pública estão as variáveis idade, renda e o número de dependentes. Cada uma é
classificada em três diferentes níveis A, B e C, com valores de referência conforme a tabela:

          Variáveis                      A                                B    C       D

       Renda Média (R$
                                         9                                11   11     17
            100)

   Idade Média (anos)                   20                                32   36     48

        Dependentes
                                         2                                3    3       2
         (pessoas)
                                                             ==219a34==

Portanto, as unidades de medida são distintas (R$, anos e pessoas). Mesmo assim, através de
uma estatística de amplitude, escolhida convenientemente, aqui representada por VB, é possível
comparar as dispersões. Logo, renda, idade e número de dependentes seguem a ordenação
a) VB (renda) < VB (idade) < VB (dependentes).
b) VB (renda) < VB (dependentes) < VB (idade).
c) VB (idade) < VB (dependentes) < VB (renda).
d) VB (idade) < VB (renda) < VB (dependentes).
e) VB (dependentes) < VB (renda) < VB (idade).


Comentários:
A amplitude é a diferença entre o valor máximo e o mínimo. Tomando as informações da tabela, temos:
   •    amplitude para a renda: 17 − 9 = 8;
   •    amplitude para a idade: 48 − 20 = 28; e
   •    amplitude para os dependentes: 3 − 2 = 1.
Logo:
                                          𝑑𝑒𝑝𝑒𝑛𝑑𝑒𝑛𝑡𝑒𝑠 < 𝑟𝑒𝑛𝑑𝑎 < 𝑖𝑑𝑎𝑑𝑒
Gabarito: E.

         Receita Federal (Analista Tributário) Estatística                                      75
         www.estrategiaconcursos.com.br                                                         169

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                           QUESTÕES COMENTADAS – FGV

Amplitude Interquartílica

1. (FGV/STN/2024) Uma amostra de idades de 52 crianças e adolescentes foi obtida e resultou nos
seguintes dados (já ordenados)

                                5   5   5       5   5   6        6   6   6       7   7   7       7

                                7   8   8       8   8   8        8   8   8       9   9   9    10

                             10 10 10 10 10 10 10 11 11 11 12 12 12

                             12 13 14 14 15 15 15 15 15 16 16 16 16

A distância interquartil das idades é igual a
a) 2.
b) 3.
c) 4.
d) 5.
e) 6.


Comentários:
A questão nos forneceu um conjunto ordenado com 52 idades e pediu a distância interquartil. Portanto,
vamos ter que encontrar os valores que representam 𝑄1 e 𝑄3 . Podemos aproveitar que a própria questão já
dividiu o conjunto em 4 partes iguais, cada uma com 14 valores. Sendo assim, podemos facilmente verificar
que 𝑄1 = 7 e 𝑄3 = 12, vez que esses valores estabelecem os limites de cada uma das quatro partes. Vejamos:

                            5       5   5   5       5   6    6       6   6   7       7   7   7

                            7       8   8   8       8   8    8       8   8   9       9   9   10

                           10 10 10 10 10 10 10 11 11 11 12 12 12

                           12 13 14 14 15 15 15 15 15 16 16 16 16

Portanto, a distância interquartílica é:
                                            𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 12 − 7 = 5
Gabarito: D.

         Receita Federal (Analista Tributário) Estatística                                             76
         www.estrategiaconcursos.com.br                                                                169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

2. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:

A turma com notas mais homogêneas nessa prova foi a
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.


Comentários:
A partir dos dados fornecidos na questão, as medidas que podemos utilizar para identificar o conjunto mais
homogêneo são a amplitude e a amplitude interquartílica.

                        Amplitude                                           Amplitude Interquartílica

A amplitude resulta da diferença entre o valor máximo e valor mínimo da distribuição. A amplitude
interquartílica é determinada pela diferença entre o terceiro quartil e o primeiro quartil. Analisando as
medidas, verificamos que a turma número 3 é a que apresenta dados mais homogêneos.


         Receita Federal (Analista Tributário) Estatística                                              77
         www.estrategiaconcursos.com.br                                                                 169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Gabarito: C.


3. (FGV/IBGE/2017) A população de um estudo é dividida em quatro estratos, sendo o menor com 10%
dos indivíduos e os demais com tamanhos acrescidos de dez pontos percentuais, progressivamente. Os
estratos se distinguem por classes de renda com amplitude constante, sendo maiores quanto menor a
renda. Sobre os estratos sabe-se que:
                             𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟏 = 𝟔𝟓 𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟐 = 𝟒𝟓 𝒆 𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟒 = 𝟓
Onde os valores acima representam os limites inferiores da renda dos extratos, inclusive.
Portanto, é correto afirmar que:
a) Tomando os pontos médios das classes como representativos, a renda média é igual a Md(Rd) = 38;
b) A mediana da distribuição de renda, Me(Rd), é menor que 45 e maior do que ou igual a 25;
                                                            ==219a34==

c) Tomando os pontos médios das classes como representativos, a moda da renda é igual a Mo(Rd) = 35;
d) O valor máximo atingido pela renda nessa distribuição é igual a Mx(Rd) = 85;
e) O valor do desvio-interquartílico da distribuição de renda deverá ser superior a 50.


Comentários:
O enunciado informou que a amplitude é igual para todas as classes. Observando os limites inferiores dos
dois primeiros estratos, 65 e 45, concluímos que a amplitude será igual a 20. Assim, temos:

                                        Estrato        Renda             Frequência

                                           1          65⊢85                 10%

                                           2          45⊢65                 20%

                                           3          25⊢45                 30%

                                           4           5⊢25                 40%

Ordenando os estratos de forma crescente, com base nos seus limites inferiores, chegamos à seguinte tabela:

                     Estrato        Renda           Frequência              Frequência acumulada

                         4           5⊢25               40%                       40% (≥ 25%)

                         3          25⊢45               30%                       70% (≥ 50%)

        Receita Federal (Analista Tributário) Estatística                                               78
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                         2          45⊢65               20%                90% (≥ 75%)

                         1          65⊢85               10%                   100%

Vamos analisar cada uma das alternativas:
   •   letra A: tomando os pontos médios de cada classe, calculamos a média:
                              𝑥̅ = (75 × 0,1 + 55 × 0,2 + 35 × 0,3 + 15 × 0,4) = 35
       Logo, a alternativa está incorreta;
   •   letra B: a mediana é o valor que ocupa o termo central da amostra, representando 50% do total. Pela
       frequência acumulada, percebemos que 50% correspondem ao estrato 3, cuja classe é 25 a 45.
       Portanto, a alternativa está correta;
   •   letra C: a moda é o termo que mais se repete na amostra. Assim, quem mais se repete representa
       40% da frequência relativa. Logo será 15, ponto médio da classe 5 a 25. Alternativa incorreta;
   •   letra D: a renda máxima é o valor que tende a 85, mas não necessariamente será esse valor exato.
       Alternativa errada
   •   letra E: primeiro quartil 𝑄1 pode assumir qualquer valor entre 5 e 25, e o terceiro quartil 𝑄3 pode
       assumir qualquer valor entre 45 e 65. Se pegarmos os pontos médios de cada classe, o desvio
       interquartílico fica: 𝑄3 − 𝑄1 = 55 − 15 = 40. Portanto, alternativa incorreta.
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                              79
        www.estrategiaconcursos.com.br                                                                 169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                          QUESTÕES COMENTADAS – FGV

Desvios em Relação à Média Aritmética e Mediana

1. (FGV/SEFAZ MS/2006) Analise as afirmativas a seguir, a respeito da média aritmética:
I. A soma dos resíduos em relação à média aritmética é sempre igual a zero.
II. É em relação à média aritmética que a soma dos valores absolutos dos resíduos é mínima.
III. É em relação à média aritmética que a soma dos quadrados dos resíduos é mínima.
Assinale:
a) se somente a afirmativa II estiver correta.               ==219a34==

b) se somente as afirmativas I e II estiverem corretas.
c) se somente as afirmativas I e III estiverem corretas.
d) se somente as afirmativas II e III estiverem corretas.
e) se todas as afirmativas estiverem corretas.


Comentários:
Vamos analisar cada item:
Item I - Certo. Desenvolvendo a propriedade da média:
                                                        𝑛

                                                     ∑(𝑥𝑖 − 𝑥̅ ) =
                                                       𝑖=1
                                                   𝑛

                                                  ∑(𝑥𝑖 ) − 𝑛 × 𝑥̅ =
                                                  𝑖=1
                 ∑𝑥
Temos que 𝑥̅ = 𝑛 𝑖 logo:
                                                    𝑛
                                                                               (∑ 𝑥𝑖 )
                                               = ∑(𝑥𝑖 ) − 𝑛 ×
                                                                                 𝑛
                                                   𝑖=1
                                                        𝑛

                                                 = ∑(𝑥𝑖 ) − (∑ 𝑥𝑖 )
                                                    𝑖=1

                                                                          =0
Item II - Errado. Essa propriedade é aplicada à mediana e não à média.

        Receita Federal (Analista Tributário) Estatística                                     80
        www.estrategiaconcursos.com.br                                                        169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Item III - Certo. Se calculamos os desvios em relação a um valor "y" qualquer, a soma dos quadrados dos
desvios fica:
                                                     𝑛

                                                    ∑(𝑥𝑖 − y)2 =
                                                    𝑖=1

Minimizando a soma temos:
                                                              𝑛

                                            2 × (−1) × ∑(𝑥𝑖 − y) = 0
                                                             𝑖=1
                                                     𝑛

                                                    ∑(𝑥𝑖 − y) = 0
                                                    𝑖=1

Assim temos que y é tal que a soma dos desvios é nula. Logo:
                                                            𝑦 = 𝑥̅
Gabarito: C.


2. (FGV/SEFAZ-MS/2006) Analise as afirmativas a seguir, a respeito da mediana:
I. A soma dos resíduos em relação à mediana é sempre igual a zero.
II. É em relação à mediana que a soma dos valores absolutos dos resíduos é mínima.
III. É em relação à mediana que a soma dos quadrados dos resíduos é mínima.
Assinale:
a) se somente a afirmativa II estiver correta.
b) se somente as afirmativas I e II estiverem corretas.
c) se somente as afirmativas I e III estiverem corretas.
d) se somente as afirmativas II e III estiverem corretas.
e) se todas as afirmativas estiverem corretas.


Comentários:
Vamos analisar cada item:
Para I - Errado. Essa propriedade é aplicada à média e não à mediana.
Para II - Certo. Quando calculados em relação à mediana a soma dos módulos dos desvios de fato é mínima.
Para III - Errado. Essa propriedade é aplicada à média e não à mediana.
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                            81
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                            QUESTÕES COMENTADAS – FGV

Variância

1. (FGV/TCE-GO/2024) Considere a seguinte amostra de idades:
                                                     20, 21, 19, 20, 20
A variância amostral dessas idades pode ser igual a
a) 0,50
b) 0,56
c) 0,60
d) 0,62
e) 0,64


Comentários:
Vamos calcular a média das idades da amostra.
                                              20 + 21 + 19 + 20 + 20 100
                                  𝑀é𝑑𝑖𝑎 =                           =    = 20
                                                        5             5
Agora, vamos calcular as diferenças entre cada valor e a média, e depois elevamos ao quadrado:
                                                  (20 − 20)2 = 02 = 0
                                                  (21 − 20)2 = 12 = 1
                                                (19 − 20)2 = (−1)2 = 1
                                                  (20 − 20)2 = 02 = 0
                                                  (20 − 20)2 = 02 = 0
Somando esses valores, temos:
                                                 0+1+1+0+0=2
Para encontrarmos a variância amostral, dividimos essa soma pelo número de observações menos um (𝑛 −
1), onde 𝑛 é 5:
                                                                   2  2
                                       𝑉𝑎𝑟𝑖â𝑛𝑐𝑖𝑎 𝑎𝑚𝑜𝑠𝑡𝑟𝑎𝑙 =          = = 0,5
                                                                  5−1 4
Portanto, a variância amostral dessas idades é 0,50.
Gabarito: A.

          Receita Federal (Analista Tributário) Estatística                                      82
          www.estrategiaconcursos.com.br                                                         169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

2. (FGV/BANESTES/2023) Considere o seguinte conjunto de n = 5 observações relativas a determinada
variável:
                                                           8, 3, 11, 1, 7.
Em relação a esses dados, avalie as seguintes afirmativas:
I. A média é igual a 7.
II. A mediana é igual a 6.
III. A variância é igual a 16.
Está correto apenas o que se afirma em
a) I.
b) III.
c) I e II.
d) I e III.
e) II e III.


Comentários:
Calculando a média das observações:
                                  𝑠𝑜𝑚𝑎 8 + 3 + 11 + 1 + 7 30
                                       = 𝑥̅ =             =   =6
                                    𝑛              5        5
Para encontrarmos a mediana, precisamos ordenar os dados:
                                                        13         ⏟
                                                                   7       8 11
                                                              𝑚𝑒𝑑𝑖𝑎𝑛𝑎

A variância é determinada pela média dos quadrados dos desvios em relação à média aritmética. A variância
amostral é dada por:
                                                              ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                       𝑠2 =
                                                                  𝑛 − 1
em que: 𝑥𝑖 é o valor de ordem 𝑖 assumido pela variável; 𝑥̅ é a média amostral de 𝑥; 𝑠 2 é a variância amostral;
e 𝑛 é o número de observações da amostra.
Como já sabemos o valor da média, vamos calcular os desvios em relação à média. Para isso, podemos
reescrever os dados em formato de tabela:

                                                𝒙𝒊                     ̅
                                                                  𝒙𝒊 − 𝒙                ̅) 𝟐
                                                                                  (𝒙𝒊 − 𝒙

                                                8            8−6=2                    4

                                                3           3 − 6 = −3                9

                                                11          11 − 6 = 5               25

              Receita Federal (Analista Tributário) Estatística                                             83
              www.estrategiaconcursos.com.br                                                               169

                                            


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                          1              1 − 6 = −5          25

                                          7              7−6=1               1

                                                   Total                     64

Calculando a variância, temos:
                                                               64
                                                     𝑠2 =         = 16
                                                              5−1
Gabarito: B.


3. (FGV/Câmara dos Deputados/2023) Observe a seguinte amostra de notas de cinco alunos:
6, 6, 8, 10, 10.
A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média, é igual
a
a) 2,4.
b) 2,8.
c) 3,2.
d) 3,6.
e) 4,0.


Comentários:
Para calcular a variância das notas, nosso primeiro passo deve ser calcular a média delas. Temos um total de
5 notas, logo, a média será a soma de todas as notas dividida por 5. Vejamos:
                                                 6 + 6 + 8 + 10 + 10 40
                                          𝑥̅ =                      =   =8
                                                          5           5
A variância, por sua vez, é calculada como a média dos quadrados dos desvios em torno da média. Vejamos
como fazer isso:

                                                     2
                                                       ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                   𝜎 =
                                                             𝑛
                                (6 − 8)2 + (6 − 8)2 + (8 − 8)2 + (10 − 8)2 + (10 − 8)2
                         𝜎2 =
                                                           5
                                              (−2)2 + (−2)2 + (0)2 + (2)2 + (2)2
                                     𝜎2 =
                                                              5

          Receita Federal (Analista Tributário) Estatística                                              84
          www.estrategiaconcursos.com.br                                                                169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                                       4+4+0+4+4
                                                 𝜎2 =
                                                              5
                                                           16
                                                      𝜎2 =    = 3,2
                                                            5
Logo, a variância das notas é igual a 3,2.
Gabarito: C.


4. (FGV/SEFAZ-MG/2023) Considere a seguinte amostra aleatória simples:
2, 5, 5, 6, 6, 7, 7, 10.
A variância amostral que corresponde à estimativa não tendenciosa da variância populacional é
aproximadamente igual a
a) 4,5.
b) 5,1.
c) 5,5.
d) 5,8.
e) 6,2.


Comentários:
Calculando a média da amostra, temos:
                                          2 + 5 + 5 + 6 + 6 + 7 + 7 + 10 48
                                   𝑥̅ =                                 =   =6
                                                        8                 8
Após calculada a média, podemos aplicar a fórmula da variância:
             (2 − 6)2 + (5 − 6)2 + (5 − 6)2 + (6 − 6)2 + (6 − 6)2 + (7 − 6)2 + (7 − 6)2 + (10 − 6)2
     𝑠2 =
                                                     8−1
                              (−4)2 + (−1)2 + (−1)2 + (0)2 + (0)2 + (1)2 + (1)2 + (4)2
                       𝑠2 =
                                                         7
                                          16 + 1 + 1 + 0 + 0 + 1 + 1 + 16
                                     𝑠2 =
                                                         7
                                                     36
                                               𝑠2 =     ≅ 5,14
                                                      7
Logo, a variância amostral é aproximadamente igual a 5,1.
Gabarito: B.

          Receita Federal (Analista Tributário) Estatística                                           85
          www.estrategiaconcursos.com.br                                                              169

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 04

5. (FGV/TCE ES/2023) O quadro seguinte apresenta, parcialmente, os valores de uma série ordenada de 80
observações.

                                1     3,7    3,7     3,7    4,7      5,7   5,7   5,7   5,7   5,7

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                               6,2    6,5    6,5     6,5    6,5      6,5   6,5   6,5   6,5   6,5

                               6,5    6,5     7       7        7     ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                               7,3    7,3    7,3     7,3    7,3      7,3   8,3   9,3   10    10

O 1º e o 3º quartis são, respectivamente, 5,8 e 7,3. A soma dos quadrados das informações é 3.512.
Após a retirada dos valores atípicos pelo critério dos quartis, a nova série passou a ser simétrica.
O valor da variância dessa nova série é:
a) 0,50;
b) 0,75;
c) 1,0;
d) 1,25;
e) 1,50.


Comentários:
Iniciaremos calculando a distância interquartílica da amostra, que é dada por:
                                                          𝐷𝐼𝑄 = 𝑄3 − 𝑄1
A questão já nos deu os valores de 𝑄1 e de 𝑄3 , que correspondem ao primeiro e terceiro quartil,
respectivamente, então:
                                                    𝐷𝐼𝑄 = 7,3 − 5,8 = 1,5
Agora que já sabemos a distância interquartílica, podemos calcular os limites inferior e superior para
detecção de outliers. Da seguinte forma:
                                                    𝑙𝑖𝑛𝑓 = 𝑄1 − 1,5 × 𝐷𝐼𝑄
                                                    𝑙𝑖𝑛𝑓 = 5,8 − 1,5 × 1,5
                                                           𝑙𝑖𝑛𝑓 = 3,55

           Receita Federal (Analista Tributário) Estatística                                           86
           www.estrategiaconcursos.com.br                                                              169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                 𝑙𝑠𝑢𝑝 = 𝑄3 + 1,5 × 𝐷𝐼𝑄
                                                 𝑙𝑠𝑢𝑝 = 7,3 + 1,5 × 1,5
                                                        𝑙𝑠𝑢𝑝 = 9,55
Tudo o que for menor que 3,55 e maior que 9,55 é considerado outlier. Dessa forma, vamos remover o
primeiro e os dois últimos termos da amostra, ou seja, os números 1, 10 e 10. Nossa nova amostra passará
a ter apenas 77 elementos.
Observe que a questão já nos deu o valor da soma dos quadrados para a amostra 80 termos:
                                                       80

                                                    ∑ 𝑥𝑖2 = 3.512
                                                    𝑖=1

Sendo assim, podemos calcular a soma dos quadrados para a amostra com 77 termos, bastando subtrairmos
os termos removidos:
                                                 12 + 102 + 102 = 201
                                           77

                                          ∑ 𝑥𝑖2 = 3.512 − 201 = 3.311
                                           𝑖=1

O enunciado nos disse que, após a retirada dos outliers, a nova série passou a ser simétrica, isso quer dizer
que a média passou a ser igual à mediana. Então, vamos primeiro encontrar a mediana para sabermos quem
é a média. Ora, se temos uma amostra com 77 termos, a mediana será dada por:
                                                77 + 1
                                                       = 39
                                                  2
Assim, o termo que ocupa a posição 39 será a nossa mediana. Observando a tabela o valor da mediana é
igual a 6,5. Logo, a média também é igual a 6,5.
                                                            𝑀𝑑 = 6,5
                                                            𝑥̅ = 6,5
Agora sim, podemos calcular a variância:

                                                   2
                                                      ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                  𝜎 =
                                                            𝑛
Desenvolvendo o somatório, teremos:

                                                    2
                                                        ∑𝑛𝑖=1 𝑥𝑖2
                                                  𝜎 =             − 𝑥̅ 2
                                                            𝑛
                                                        3311
                                                  𝜎2 =         − 6,52
                                                          77
                                                   𝜎 2 = 43 − 42,25
                                                        𝜎 2 = 0,75
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                                 87
        www.estrategiaconcursos.com.br                                                                   169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

6. (FGV/CGU/2022) O ativo A está gerando grande atração de matemáticos, que conseguiram convencer a
bolsa de valores a registrar preços baseados em quantidades pouco usuais, como √𝟐 e 𝝅. Durante cinco
dias foram observados os seguintes preços de dois ativos, A e B, respectivamente:
                            𝝅     𝟏 𝟏
                     (√𝟐;     ; 𝟏; ; ) 𝒆 (𝟏𝟎𝟎, 𝟑𝟎; 𝟒𝟎𝟎, 𝟏𝟖; 𝟐𝟎𝟕, 𝟎𝟏; 𝟓𝟎𝟖, 𝟎𝟎; 𝟗𝟏𝟐, 𝟏𝟏)
                            𝟐     𝟑 𝟔
Considerando esses valores, sobre a média e a variância dos retornos durante esses cinco dias, é correto
afirmar que:
a) os retornos do ativo A têm maior média e maior variância;
b) os retornos do ativo A têm maior média e menor variância;
c) os retornos do ativo A têm menor média e maior variância;
d) os retornos do ativo A têm menor média e menor variância;
e) a média e a variância dos retornos dos dois ativos são iguais.


Comentários:
Vamos analisar a média dos dois conjuntos. No conjunto A, temos:
                                       𝜋    1 1
                                   (√2; ; 1; ; ) ≅ (1,4; 1,6; 1; 0,33; 0,16)
                                       2    3 6
A média desse conjunto é próxima de 0,9, pois, somando todos os elementos, obtemos um valor em torno
de 4,5. Dessa forma, variância do conjunto é mínima, pois os desvios em relação à média (variabilidade do
conjunto) são pequenos.
Agora, vamos analisar o conjunto B:
                                    (100,30; 400,18; 207,01; 508,00; 912,11)
Agora, a soma dos elementos está próxima de 2125, portanto, a média resulta em um valor em torno de
425. Analisando a variabilidade do conjunto, percebemos que os dados estão bem dispersos entre si, assim
a variância do conjunto B será consideravelmente maior que a do conjunto A.
Então, comparando os dois conjuntos, temos que:
   •   a média de A é menor que a média de B.
   •   a variância de A é menor que a variância de B.
Gabarito: D.


7. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                       Valores de X         0   2    6     8

        Receita Federal (Analista Tributário) Estatística                                             88
        www.estrategiaconcursos.com.br                                                                169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                          Probabilidades 0,2 0,3 0,3 0,2

A variância de X é igual a
a) 7,2.
b) 7,6.
c) 8,0.
d) 8,4.
e) 8,8.


Comentários:
Antes de determinarmos a variância, precisamos calcular a média da amostra. Para isso, vamos multiplicar
todos os valores de X por suas respectivas probabilidades. Assim, teremos:
                                        (0 × 0,2) + (2 × 0,3) + (6 × 0,3) + (8 × 0,2)
                                 𝑋̅ =
                                                    0,2 + 0,3 + 0,3 + 0,2
                                                                4
                                                         𝑋̅ =     =4
                                                                1
Sabendo o valor da média, agora podemos calcular a variância. Para isso, vamos aplicar a fórmula:
                                                        ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2 × 𝑓𝑖
                                                 𝜎2 =
                                                              ∑𝑛𝑖=1 𝑓𝑖
                          (0 − 4)2 × 0,2 + (2 − 4)2 × 0,3 + (6 − 4)2 × 0,3 + (8 − 4)2 × 0,2
                   𝜎2 =
                                                          1
                                             3,2 + 1,2 + 1,2 + 3,2
                                       𝜎2 =                        = 8,8
                                                       1
Gabarito: E.


8. (FGV/SEPOG-RO/2017) Considere a seguinte amostra de notas de alunos: 5,0; 6,0; 5,0; 4,0; 10,0. A
variância amostral dessas notas pode ser igual a
a) 5,5.
b) 6,2.
c) 6,8.
d) 7,2.
e) 9,0.

          Receita Federal (Analista Tributário) Estatística                                          89
          www.estrategiaconcursos.com.br                                                             169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Comentários:
Inicialmente, vamos calcular a média:
                                                   5 + 6 + 5 + 4 + 10 30
                                            𝑥̅ =                     =
                                                            5          5
                                                             𝑥̅ = 6
Agora, calcularemos os desvios de cada nota em relação à média:

                                                        Desvio em
                                Notas (𝒙𝒊 )          relação à média              ̅)²
                                                                            (𝒙𝒊 − 𝒙
                                                               ̅)
                                                         (𝒙𝒊 − 𝒙

                                      5                5 − 6 = −1              1

                                      6                 6−6=0                  0

                                      5                5 − 6 = −1              1

                                      4                4 − 6 = −2              4

                                     10                10 − 6 = 4              16

                                    Total                                      22

De posse dessa informação, podemos calcular a variância. Devemos lembrar que, por se tratar de uma
variância amostral, aplicamos 𝑛 − 1.
                                                        22   22
                                                𝑠2 =       =    = 5,5
                                                       5−1    4
Gabarito: A.


9. (FGV/AL-BA/2014) A média das idades de um grupo de 4 amigos é de 36 anos, e o desvio padrão é igual
a 2. Daqui a cinco anos, a média e a variância das idades desse grupo serão iguais a:
a) 41 e 4.
b) 41 e 50.
c) 56 e 2.
d) 56 e 50.
e) 56 e 200.

         Receita Federal (Analista Tributário) Estatística                                         90
         www.estrategiaconcursos.com.br                                                            169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Comentários:
O desvio padrão e a variância não se alteram com a adição ou subtração de uma constante 𝑐. Sabemos que
a variância é igual ao desvio padrão ao quadrado. Logo:
                                                          𝜎 2 = 22
                                                              𝜎2 = 4
Como a média era 36 e foram somados mais cinco anos, a nova média também será adicionada de 5
unidades:
                                                     𝑥̅ = 36 + 5 = 41
Gabarito: A.


10. (FGV/SEFAZ-RJ/2010) A média, a mediana e a variância das idades de um grupo de vinte pessoas são,
hoje, iguais, respectivamente, a 34, 35 e 24. Daqui a dez anos, os valores da média, da mediana e da
variância das idades dessas pessoas serão, respectivamente:
a) 44, 35 e 34.
b) 44, 45 e 12.
c) 44, 45 e 24.
d) 34, 35 e 12.
e) 44, 45 e 124.


Comentários:
Ao somarmos uma constante a um conjunto, a média e mediana também aumentarão no valor dessa
constante. Assim temos que:
                                                    𝑥̅ = 34 + 10 = 44
                                                   𝑀𝑑 = 35 + 10 = 45
Para a variância, temos que a regra é que se somarmos uma constante ela não será alterada. Portanto:
                                                          𝜎 2 = 24
Gabarito: C.


11. (FGV/SEAD-AP/2010) Os dados a seguir são as quantidades de empregados de cinco pequenas
empresas: 6, 5, 8, 5, 6.
A variância da quantidade de empregados dessas cinco empresas é igual a:
a) 0,8.

          Receita Federal (Analista Tributário) Estatística                                            91
          www.estrategiaconcursos.com.br                                                               169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

b) 1,2.
c) 1,6.
d) 2,0.
e) 2,4.


Comentários:
Queremos calcular a variância, para isso precisamos inicialmente calcular a média de empregados das 5
empresas:
                                                         6+5+8+5+6
                                                  𝑥̅ =
                                                             5
                                                               𝑥̅ = 6
Agora vamos calcular a média dos quadrados:

                                               ̅ = 6² + 5² + 8² + 5² + 6²
                                               𝑥²
                                                             5
                                                        ̅ = 186
                                                       𝑥²
                                                             5
                                                       ̅ = 37,2
                                                       𝑥²
Sabemos que a variância é dada pela diferença entre a média dos quadrados e o quadrado da média, logo:

                                                         𝜎 2 = ̅̅̅
                                                               𝑥 2 − 𝑥̅ 2
                                                       𝜎 2 = 37,2 − 62
                                                           𝜎 2 = 1,2
Gabarito: B.


12. (FGV/SEN/2008) A média
                                                                   𝒏
                                                           𝟏
                                                       (𝒙
                                                        ̅ = ∑ 𝒙𝒊 )
                                                           𝒏
                                                                  𝒊=𝟏

e a variância amostral
                                                                  𝒏
                                                   𝟐
                                                      𝟏
                                                (𝒔 =            ̅) 𝟐 )
                                                         ∑(𝒙𝒊 − 𝒙
                                                     𝒏−𝟏
                                                                 𝒊=𝟏

de um conjunto de 20 observações são, respectivamente, 5 e 1. Uma nova observação, de valor igual a 5,
foi acrescentada ao conjunto inicial, passando-se a ter 21 valores. A nova variância amostral será igual a:
a) 1,10.

           Receita Federal (Analista Tributário) Estatística                                            92
           www.estrategiaconcursos.com.br                                                               169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

b) 1,05.
c) 1,00.
d) 0,95.
e) 0,90.


Comentários:
Temos que a média inicial vale 5 e que são 20 observações, então:
                                                                              ∑20
                                                                               𝑖=1 𝑥𝑖
                                                           5=
                                                                                20
                                                       20
                                                                 ==219a34==

                                                       ∑ 𝑥𝑖 = 20 × 5
                                                       𝑖=1
                                                           20

                                                           ∑ 𝑥𝑖 = 100
                                                           𝑖=1

Agora, vamos acrescentar mais um valor igual a 5 no conjunto e calcular a nova média:
                                                                                20
                                                              1
                                                        𝑥̅ =    ∑ 𝑥𝑖
                                                             21
                                                                                𝑖=1

                                                                              100 + 5
                                                           𝑥̅ =
                                                                                21
                                                                               105
                                                             𝑥̅ =
                                                                               21
                                                                 𝑥̅ = 5
A nova média também vale 5.
Calculando a nova variância. Temos no enunciado que inicialmente ela vale 1:
                                                        ∑20
                                                         𝑖=1(𝑥𝑖 − 5)
                                                                     2
                                                     1=
                                                           20 − 1
                                                20

                                               ∑(𝑥𝑖 − 5)2 = (20 − 1) × 1
                                               𝑖=1
                                                      20

                                                     ∑(𝑥𝑖 − 5)2 = 19
                                                     𝑖=1

Acrescentando a 21ª observação:

                                               2
                                                 ∑21         2
                                                  𝑖=1(𝑥𝑖 − 5) + (5 − 5)
                                                                        2
                                             𝑠 =
                                                          21 − 1


           Receita Federal (Analista Tributário) Estatística                            93
           www.estrategiaconcursos.com.br                                               169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                             19 + 0
                                                      𝑠2 =
                                                               20
                                                       𝑠 2 = 0,95
Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                  94
        www.estrategiaconcursos.com.br                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                            QUESTÕES COMENTADAS – FGV

Desvio-Padrão

1. (FGV/Pref. SJC/2024) Considere uma variável aleatória X com os seguintes momentos:
𝑬(𝑿) = 𝟒.
𝑬(𝑿𝟐 ) = 𝟐𝟓
O desvio-padrão de X é igual a:
a) 3.
b) 9.
c) √21.
d) √29.
e) 2,5.


Comentários:
A variância pode ser expressa matematicamente por:
                                                 𝜎 2 = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2
Substituindo os valores do enunciado na fórmula, temos:
                                                      𝜎 2 = 25 − (4)2
                                                       𝜎 2 = 25 − 16
                                                              𝜎2 = 9
                                                              𝜎 = √9
                                                              𝜎=3
Logo, o desvio padrão é igual a 3.
Gabarito: A.


2. (FGV/RFB/2023) Observe as cinco amostras a seguir:

                              Amostra                                Observações

                                   1                      –5 –3 –1           1    3    5    7

                                   2                           22 26     30       34   38

                                   3                           100     101       102 103

          Receita Federal (Analista Tributário) Estatística                                     95
          www.estrategiaconcursos.com.br                                                        169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                 4                            1    2    3     5     10

                                 5                      0,5       2,0   3,5       5,0    6,5

Das cinco, a de menor desvio padrão é a
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.


Comentários:
Observando os dados da tabela temos que a amplitude total (ou simplesmente amplitude) é a diferença
entre os valores extremos de um conjunto de observações, ou seja, a diferença entre o maior e o menor
elemento desse conjunto:
                                                   𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
Assim temos que a amplitude de cada amostra é:
                                                 𝐴1 = 7 − (−5) = 12
                                                 𝐴2 = 38 − 22 = 16
                                                𝐴3 = 103 − 100 = 3
                                                   𝐴4 = 10 − 1 = 9
                                                 𝐴5 = 6,5 − 0,5 = 6
Queremos saber o menor desvio padrão. Ora, sabemos que o desvio padrão máximo pode ser dado por:
                                                  𝐴
                                                       𝜎max =
                                                  2
Então, temos que o desvio padrão máximo é igual a amplitude dividida por 2. calculando para cada
amostra temos:
                                                  12
                                                   𝜎max1 =
                                                     =6
                                                   2
                                                  16
                                         𝜎max2 =     =8
                                                   2
                                                  3
                                         𝜎max3 = = 1,5
                                                  2
                                                  9
                                         𝜎max4 = = 4,5
                                                  2
                                                   6
                                          𝜎max5 = = 3
                                                   2
Portanto, a amostra com o menor desvio padrão é a 3.

        Receita Federal (Analista Tributário) Estatística                                         96
        www.estrategiaconcursos.com.br                                                            169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

Gabarito: C.


3. (FGV/BANESTES/2023) A tabela a seguir apresenta as idades (em anos) de 16 crianças
divididas em 4 grupos de 4 alunos.

                                                 Grupo 1         6     7    8   9

                                                 Grupo 2         7     7    7   9

                                                 Grupo 3         6     7    7   8

                                                 Grupo 4         5     7    8   8

Com base nessas informações, avalie as afirmações.
I. A média das idades é maior no Grupo 1 que no Grupo 2.
II. A mediana das idades é maior no Grupo 1 que no Grupo 3.
III. O grupo 4 é o que apresenta maior desvio-padrão.
Está correto o que se afirma em
a) II, apenas.
b) III, apenas.
c) I e II, apenas.
d) II e III, apenas.
e) I, II e III.


Comentários:
Vamos analisar cada uma das afirmativas:
I - A média das idades é maior no Grupo 1 que no Grupo 2.
                                       𝑠𝑜𝑚𝑎 6 + 7 + 8 + 9 30
                                       𝑥̅ 𝐺1 =
                                            =            =   = 7,5
                                         𝑛         4       4
                                       𝑠𝑜𝑚𝑎 7 + 7 + 7 + 9 30
                               𝑥̅ 𝐺2 =      =            =   = 7,5
                                         𝑛         4       4
Afirmativa errada, pois as duas médias são iguais.
II - A mediana das idades é maior no Grupo 1 que no Grupo 3. A mediana é o termo central da amostra,
nesse caso será dada pela média dos dois termos centrais. É importante mencionar que os dados devem
estar ordenados:
                                                                            7+8
                                      𝑀𝑑𝐺1 = 6            7⏟8          9⟹       = 7,5
                                                    𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠
                                                                             2
                                                                            7+7
                                       𝑀𝑑𝐺3 = 6            7⏟7         8⟹       =7
                                                     𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠
                                                                             2

           Receita Federal (Analista Tributário) Estatística                                     97
           www.estrategiaconcursos.com.br                                                        169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Afirmativa correta. No grupo 1, a mediana é maior que no grupo 3.
III - O grupo 4 é o que apresenta maior desvio-padrão. Temos que quanto maior é amplitude da amostra
maior é o desvio padrão. Sabendo disso, podemos calcular as amplitudes para verificar qual é o maior
desvio padrão. Assim, temos que:
                                                    𝐴𝐺1 = 9 − 6 = 3
                                                    𝐴𝐺2 = 9 − 7 = 2
                                                    𝐴𝐺3 = 8 − 6 = 2
                                                    𝐴𝐺4 = 8 − 5 = 3
Como as maiores amplitudes estão nos grupos 1 e 4, precisamos calcular o desvio padrão apenas para
esses dois grupos. Calculando a média do grupo 1:
                                                  6 + 7 + 8 + 9 30
                                           𝑥̅ =                =   = 7,5
                                                        4        4
O desvio padrão é determinado pela fórmula:

                                                            ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                   𝜎=√
                                                                   𝑛

                            (6 − 7,5)2 + (7 − 7,5)2 + (8 − 7,5)2 + (9 − 7,5)2   5 √5
                   𝜎1 = √                                                     =√ =
                                                    4                           4  2

Calculando a média do grupo 4:
                                                   5 + 7 + 8 + 8 28
                                            𝑥̅ =                =   =7
                                                         4        4
Desvio padrão do grupo 4:

                                (5 − 7)2 + (7 − 7)2 + (8 − 7)2 + (8 − 7)2   6 √6
                       𝜎4 = √                                             =√ =
                                                    4                       4  2

Portanto, o desvio padrão do grupo 4 é maior. Afirmativa correta.
Gabarito: D.


4. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de idades:
26 28 30 32 32 34 36 38
O desvio padrão dessas idades é igual a
a) 2.
b) 3.
c) 4.
d) 5.

        Receita Federal (Analista Tributário) Estatística                                        98
        www.estrategiaconcursos.com.br                                                           169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

e) 6.


Comentários:
Como já sabemos, o desvio padrão amostral é expresso por:

                                                         ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                 𝑠=√
                                                              𝑛−1

Logo, teremos que calcular a média do conjunto e, em seguida, os desvios em relação à média.
Começando pela média, temos:
                                 26 + 28 + 30 + 32 + 32 + 34 + 36 + 38 256
                          𝑥̅ =                                        =    = 32
                                                   8        ==219a34==
                                                                        8
Para facilitar o cálculo do desvio padrão, podemos montar uma tabela como a seguinte:

                             𝒙𝒊                      ̅
                                                𝒙𝒊 − 𝒙                             ̅) 𝟐
                                                                             (𝒙𝒊 − 𝒙

                          26               26 − 32 = −6                     (−6)2 = 36

                          28               28 − 32 = −4                     (−4)2 = 16

                          30               30 − 32 = −2                     (−2)2 = 4

                          32                32 − 32 = 0                      (0)2 = 0

                          32                32 − 32 = 0                      (0)2 = 0

                          34                34 − 32 = 2                      (2)2 = 4

                          36                36 − 32 = 4                      (4)2 = 16

                          38                38 − 32 = 6                      (6)2 = 36


                          Soma                                                  ̅)𝟐 = 𝟏𝟏𝟐
                                                                         ∑(𝒙𝒊 − 𝒙

Aplicando a fórmula do desvio padrão amostral, temos:

                                                 112    112
                                         𝑠=√         =√     = √16 = 4
                                                 8−1     7

Logo, o desvio padrão da amostra em questão é igual a 4.
Gabarito: C.

        Receita Federal (Analista Tributário) Estatística                                      99
        www.estrategiaconcursos.com.br                                                         169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

5. (FGV/Pref. Paulínia/2021) Em uma turma de 10 alunos, as notas dos alunos em uma avaliação
foram:

                                  6     7     7      8        8     8     8      9   9   10

O desvio padrão dessa lista de notas é, aproximadamente,
a) 0,8.
b) 0,9.
c) 1,1.
d) 1,3.
e) 1,5.


Comentários:
Calculando a média do conjunto:
                                     6 + 7 + 7 + 8 + 8 + 8 + 8 + 9 + 9 + 10 80
                              𝑥̅ =                                         =    =8
                                                       10                    10
Temos que o desvio padrão é dado por:

                                                              ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2
                                                   𝜎=√
                                                                     𝑛

em que n é a quantidade de alunos.

          (6 − 8)2 + (7 − 8)2 + (7 − 8)2 + (8 − 8)2 + (8 − 8)2 + (8 − 8)2 + (8 − 8)2 + (9 − 8)2 + (9 − 8)2 + (10 − 8)2
   𝜎=√
                                                               10


                                            4+1+1+0+0+0+0+1+1+4
                                      𝜎=√
                                                     10

                                                                    12
                                                          𝜎=√
                                                                    10

                                                         𝜎 = √1,2
                                                          𝜎 ≅ 1,1
Gabarito: C.


6. (FGV/IMBEL/2021) Considere os números 1, 2, 3, 6, 8.
O desvio padrão dessa lista de números é, aproximadamente, igual a

          Receita Federal (Analista Tributário) Estatística                                                          100
          www.estrategiaconcursos.com.br                                                                             169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

a) 1,7.
b) 2,1.
c) 2,6.
d) 3,0.
e) 3,4.


Comentários:
Calculando a média do conjunto:
                                                 1 + 2 + 3 + 6 + 8 20
                                           𝜇=                     =   =4
                                                         5          5
Temos que o desvio padrão é dado por:

                                                              ∑𝑛𝑖=1(𝑥𝑖 − 𝜇)2
                                                   𝜎=√
                                                                     𝑛

em que 𝑛 é a quantidade de elementos do conjunto.

                                  (1 − 4)2 + (2 − 4)2 + (3 − 4)2 + (6 − 4)2 + (8 − 4)2
                          𝜎=√
                                                           5

                                                       9 + 4 + 1 + 4 + 16
                                               𝜎=√
                                                                5

                                                                   34
                                                          𝜎=√
                                                                    5

                                                         𝜎 = √6,8
                                                          𝜎 ≅ 2,6
Gabarito: C.


7. (FGV/IBGE/2016) A partir de uma amostra de tamanho 2n+1, sendo n um número inteiro,
elaborou-se a distribuição de frequência de tal forma que apenas os dados grupados ficaram
disponíveis. Apesar disso, é possível determinar com certeza a classe à qual pertence o valor
exato:
a) Da moda;
b) Da mediana;
c) Da média;

          Receita Federal (Analista Tributário) Estatística                               101
          www.estrategiaconcursos.com.br                                                  169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

d) Dos quartis;
e) Do desvio padrão.


Comentários:
O enunciado diz que a amostra tem tamanho 2𝑛 + 1. Sendo assim, a quantidade de termos será sempre
ímpar. Nessas condições, a mediana obrigatoriamente ocupará o termo central da amostra, ficando
posicionada em uma das classes de dados, e não entre duas classes limítrofes.
Gabarito: B.


8. (FGV/TJ-AM/2013) Em relação à medida de desvio padrão, analise as afirmativas a seguir.
I. Tal medida apresenta a propriedade adimensional.
II. Tal medida mostra a dispersão dos dados em relação à média.
III. Tal medida nunca é negativa.
Assinale:
a) Se apenas a afirmativa II estiver correta.
b) Se apenas as afirmativas I e III estiverem corretas.
c) Se apenas as afirmativas II e III estiverem corretas.
d) Se apenas as afirmativas I e II estiverem corretas.
e) Se todas as afirmativas estiverem corretas.


Comentários:
Vamos analisar cada um dos itens:
    •      item I: falso, pois o desvio padrão tem a mesma unidade de medida que a variável apresentada;
    •      item II: verdadeiro. O desvio padrão mede a dispersão dos dados, tomando a média como
           referência;
    •      item III: verdadeiro. É a raiz quadrada da variância e, portanto, sempre é positiva.
Gabarito: C.


9. (FGV/SEFAZ-RJ/2011) O desvio-padrão da população {2; 4; 2; 4; 2; 4; 2; 4} é
a) 1,5 .
b) 1,0 .
c) 2,5 .

            Receita Federal (Analista Tributário) Estatística                                        102
            www.estrategiaconcursos.com.br                                                           169

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 04

d) 2,0 .
e) 3,0 .


Comentários:
Vamos inicialmente calcular a média:
                                                  2+4+2+4+2+4+2+4
                                           𝑥̅ =
                                                             8
                                                            24
                                                       𝑥̅ =
                                                             8
                                                               𝑥̅ = 3
Agora, vamos calcular a média dos quadrados:

                                     ̅̅̅  2² + 4² + 2² + 4² + 2² + 4² + 2² + 4²
                                     𝑥2 =
                                                            8
                                                           ̅̅̅   80
                                                           𝑥2 =
                                                                  8
                                                           ̅̅̅
                                                           𝑥 2 = 10
Sabemos que a variância é dada pela diferença entre a média dos quadrados e o quadrado da média,
logo:
                                                        𝜎 2 = ̅̅̅
                                                              𝑥 2 − 𝑥̅ 2
                                                     𝜎 2 = 10 − 3² = 1
O desvio padrão é dado pela raiz quadrada da variância:

                                                               𝜎 = √1
                                                               𝜎=1
Gabarito: B.

           Receita Federal (Analista Tributário) Estatística                                 103
           www.estrategiaconcursos.com.br                                                    169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                          QUESTÕES COMENTADAS – FGV

Coeficiente de Variação (ou Dispersão Relativa)

1. (FGV/TJ-MS/2024) A amostra dos pesos, em quilos, dos indivíduos de uma população foi obtida: {50,
60, 70, 80, 90}.
Considerando as cinco medições, é correto afirmar que nessa amostra:
a) a média aritmética coincide com a média geométrica;
b) a média aritmética coincide com a média harmônica;
c) a média aritmética coincide com a mediana;
d) a média aritmética coincide com a moda;
e) o coeficiente de variação amostral é menor que o coeficiente de variação populacional.


Comentários:
Vamos calcular as medidas mencionadas para verificar qual das alternativas está correta.
Primeiro, calculamos a média aritmética:
                                                    50 + 60 + 70 + 80 + 90 350
                         𝑀é𝑑𝑖𝑎 𝑎𝑟𝑖𝑡𝑚é𝑡𝑖𝑐𝑎 =                               =    = 70
                                                              5             5
Em seguida, descobrimos o valor da mediana. Como temos 5 valores (número ímpar), a mediana é o valor
do meio quando os dados são ordenados. Neste caso, a mediana é 70.
Agora, vamos analisar cada alternativa:
Alternativa A: Incorreta. A média aritmética coincide com a média geométrica.
A média geométrica é dada por:
                                                            5
                               𝑀é𝑑𝑖𝑎 𝑔𝑒𝑜𝑚é𝑡𝑟𝑖𝑐𝑎 = √50 × 60 × 70 × 80 × 90
Vamos calcular o produto:
                                  50 × 60 × 70 × 80 × 90 = 1512000000
                                                                5
                                 𝑀é𝑑𝑖𝑎 𝑔𝑒𝑜𝑚é𝑡𝑟𝑖𝑐𝑎 = √1512000000 ≈ 68,41
Portanto, a média geométrica não coincide com a média aritmética (70).


Alternativa B: Incorreta. A média aritmética coincide com a média harmônica. A média harmônica é dada
por:

        Receita Federal (Analista Tributário) Estatística                                         104
        www.estrategiaconcursos.com.br                                                            169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                                      5
                                  𝑀é𝑑𝑖𝑎 ℎ𝑎𝑟𝑚ô𝑛𝑖𝑐𝑎 =
                                                              1   1   1   1   1
                                                                +   +   +   +
                                                             50 60 70 80 90
Vamos calcular o denominador:
             1   1   1   1   1
               +   +   +   +   ≈ 0,020 + 0,0167 + 0,0143 + 0,0125 + 0,0111 = 0.0746
            50 60 70 80 90
                                                                   5
                                       𝑀é𝑑𝑖𝑎 ℎ𝑎𝑟𝑚ô𝑛𝑖𝑐𝑎 =               ≈ 67,01
                                                                0,0746
Portanto, a média harmônica não coincide com a média aritmética (70).


Alternativa C: Correta. A média aritmética coincide com a mediana.
Calculamos anteriormente que ambas são 70. Portanto, esta afirmação é verdadeira.


Alternativa D: Incorreta. A média aritmética coincide com a moda.
A moda é o valor que mais se repete na amostra. Como todos os valores são diferentes, não há moda.
Portanto, essa afirmação é falsa.


Alternativa E: Incorreta. O coeficiente de variação amostral é menor que o coeficiente de variação
populacional.
Não, o coeficiente de variação amostral não é menor que o coeficiente de variação populacional. Isso ocorre
porque o desvio padrão amostral utiliza 𝑛 − 1 no denominador (graus de liberdade), o que tende a aumentar
o valor do desvio padrão em relação ao desvio padrão populacional, que usa 𝑛 no denominador.
Gabarito: C.


2. (FGV/TJ-AP/2024) Um grupo de funcionários possui desvio padrão salarial igual a R$ 1 mil. Após receber
um aumento linear de R$ 2,5 mil, o novo coeficiente de variação salarial passou a ser igual a 0,08.
O percentual médio de aumento salarial foi de:
a) 5;
b) 10
c) 15;
d) 20;
e) 25.


Comentários:


         Receita Federal (Analista Tributário) Estatística                                              105
         www.estrategiaconcursos.com.br                                                                 169

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 04

De acordo com o enunciado, após um aumento linear de R$ 2,5 mil, o novo coeficiente de variação salarial
passou a ser igual a 0,08:
                                                             𝜎𝑎𝑝ó𝑠
                                                  𝐶𝑉𝑎𝑝ó𝑠 =         = 0,08
                                                             𝜇𝑎𝑝ó𝑠
Como o aumento linear de R$ 2,5 mil não alterou o desvio padrão da distribuição, sabemos que 𝜎𝑎𝑝ó𝑠 =
𝜎𝑎𝑛𝑡𝑒𝑠 = 1.000. Por outro lado, sabemos que a média sofreu um aumento equivalente à constante
adicionada aos valores individuais, no caso, 𝜇𝑎𝑝ó𝑠 = 𝜇𝑎𝑛𝑡𝑒𝑠 + 2.500. Assim, temos que:
                                                      1000
                                                            = 0,08
                                                      𝜇𝑎𝑝ó𝑠
                                                      1000
                                                           = 𝜇𝑎𝑝ó𝑠
                                                      0,08
                                                   𝜇𝑎𝑝ó𝑠 = 𝑅$ 12.500
                                             𝜇𝑎𝑛𝑡𝑒𝑠 + 2.500 = 𝑅$ 12.500
                                                   𝜇𝑎𝑛𝑡𝑒𝑠 = 𝑅$ 10.000
Portanto, o percentual médio de aumento salarial foi de:
                                                  2.500
                                              (         ) × 100% = 25%
                                                  10.000
Gabarito: E.


3. (FGV/PC AM/2022) Suponha que um pesquisador tenha as seguintes informações de uma amostra de
dados:
Média = 5
Variância = 25
Soma dos desvios absolutos em relação à média = 10
Tamanho da amostra = 5
Assim, o coeficiente de variação dessa amostra em termos decimais será igual a
a) 1.
b) 2.
c) √5.
d) 5.
e) 10.


Comentários:


         Receita Federal (Analista Tributário) Estatística                                           106
         www.estrategiaconcursos.com.br                                                              169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

O coeficiente de variação é dado pela razão entre o desvio padrão e a média. Sabemos que o desvio padrão
é a raiz quadrada da variância. Portanto, temos:
                                                                   𝜎
                                                            𝐶𝑣 =
                                                                   𝑥̅
                                                         √25 5
                                                  𝐶𝑣 =      = =1
                                                          5  5
Gabarito: A.


4. (FGV/IBGE/2017) Alguns economistas estão discutindo sobre a volatilidade dos preços em duas
economias, relativamente parecidas, tendo como moedas peras (A) e maçãs (B). Sabe-se que as médias
dos preços são 100 peras e 120 maçãs, respectivamente. É fornecido, ainda, o desvio-padrão dos preços
em A, igual a 25 peras, e a variância em B, igual a 400 maçãs ao quadrado.
Considerando as principais medidas estatísticas de dispersão como medidas de volatilidade, é correto
afirmar que:
a) O desvio padrão dos preços em A é inferior ao de B;
b) A taxa de conversão da moeda A para B é de 1,2;
c) A taxa de inflação em A deve ser menor do que em B;
d) Os preços em B são, em média, mais caros do que em A;
e) A medida adimensional de dispersão de A é superior à de B.


Comentários:
Vamos analisar cada uma das alternativas:
   •   letra A: o desvio padrão é igual à raiz quadrada da variância, logo:

                                                    𝑠 = √𝑠² → √400 = 20
   •   letra B: não podemos afirmar qual a taxa de conversão das moedas, pois o problema não traz
       informações suficientes para isso;
   •   letra C: não podemos afirmar nada sobre a taxa de inflação, pois o problema não traz informações
       suficientes para isso;
   •   letra D: não podemos afirmar nada sobre os preços das moedas, pois o problema não traz
       informações suficientes para isso; e
                                                                                  𝜎
   •   letra E: a medida adimensional se refere ao coeficiente de variação 𝐶𝑣 = 𝑥̅ . Logo:

                                                            25
                                                  𝐶𝑣 𝐴 =        = 0,25
                                                            100

        Receita Federal (Analista Tributário) Estatística                                            107
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                                         20
                                                  𝐶𝑣 𝐵 =                     ≅ 0,16
                                                                         120
Gabarito: E.


5. (FGV/IBGE/2016) As principais medidas de dispersão utilizadas na estatística são a amplitude (A), a
variância (Var), o desvio padrão (DP), o coeficiente de variação (CV) e o desvio-interquartílico (DI). Sobre
o tema, é correto afirmar que:
a) As medidas acima listadas têm seus valores dependentes, na íntegra, dos valores da distribuição amostral;
b) A variância apresenta a vantagem de ser diretamente comparável com os valores da distribuição;
c) É possível afirmar que var(x) ≥ dp(x);
d) O desvio-interquartílico é sempre superior ou no mínimo igual à amplitude;
                                                            ==219a34==

e) O coeficiente de variação é uma medida invariante às mudanças de escala.


Comentários:
Vamos analisar cada uma das alternativas:
   •   letra A: a alternativa está incorreta, pois as medidas de dispersão podem ser calculadas tanto para
       amostras quanto para populações;
   •   letra B: o desvio padrão tem a mesma unidade de medida que a variável observada, enquanto a
       variância corresponde ao desvio padrão ao quadrado;
   •   letra C: a variância será menor que o desvio padrão for um valor entre 0 e 1, isto é, 0 < 𝜎 < 1;
   •   letra D: a amplitude é a diferença entre o valor máximo e o mínimo, enquanto o desvio interquartílico
       é dado pela diferença entre o terceiro e o primeiro quartis; e
   •   letra E: o coeficiente de variação é dado pela divisão entre o desvio padrão e a média. Assim, se
       multiplicarmos ou dividirmos o numerador e denominador por uma mesma constante o coeficiente
       de variação não se altera.
Com essas informações, concluímos que a alternativa correta é a E.
Gabarito: E.


6. (FGV/AL-BA/2014) A tabela a seguir mostra média e desvio padrão das notas dos alunos em um exame
nacional em cinco estados diferentes:

                                                       Média                     Desvio padrão

                                     Estado I               500                       100

        Receita Federal (Analista Tributário) Estatística                                                 108
        www.estrategiaconcursos.com.br                                                                    169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                     Estado II               600               120

                                     Estado III              500               140

                                     Estado IV               450               120

                                     Estado V                600               100

Assinale a opção que indica o Estado que apresentou o menor coeficiente de variação das notas.
a) I
b) II
c) III
d) IV
e) V


Comentários:
O coeficiente de variação é dado pela divisão entre o desvio padrão e a média:
                                                                    𝜎
                                                             𝐶𝑣 =
                                                                    𝑥̅
Aplicando aos cinco estados, temos:

                                                  Média            Desvio padrão     CV

                               Estado I            500                   100         0,2

                              Estado II            600                   120         0,2

                              Estado III           500                   140         0,28

                              Estado IV            450                   120         0,26

                              Estado V             600                   100         0,16

Gabarito: E.


7. (FGV/SEN/2008) O coeficiente de variação amostral (em porcentagem) de um conjunto de salários é
110%.
Se os salários desse conjunto forem reajustados em 20%, o novo coeficiente de variação amostral será:


         Receita Federal (Analista Tributário) Estatística                                          109
         www.estrategiaconcursos.com.br                                                             169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

a) 110%.
b) 112,2%.
c) 114,2%.
d) 122%.
e) 130%.


Comentários:
Ao multiplicarmos o coeficiente de variação por uma constante o valor do coeficiente não será alterado.
Portanto, permanecerá em 110%.
Gabarito: A.


8. (FGV/SEFAZ-RJ/2008) Uma companhia utiliza um sistema de avaliação de desempenho de seus
funcionários por meio de dois indicadores de performance: Qualidade das tarefas e a Tempestividade com
que as tarefas são realizadas.
Os funcionários receberam, na última avaliação, as medidas indicadas na tabela a seguir:

                                                                        Indicador
                               Medidas
                                                            Qualidade         Tempestividade

                                Média                          50                   25

                           Desvio-Padrão                      10,0                  6,0

                           Coeficiente de
                                                               20                   24
                            Variação %

Com base na tabela, é correto afirmar que:
a) a média aritmética não é uma boa medida para representar a performance dos funcionários em face do
elevado nível de dispersão das avaliações.
b) as avaliações da Qualidade foram mais dispersas do que as avaliações da Tempestividade.
c) as avaliações da Qualidade foram mais homogêneas do que as da Tempestividade.
d) os funcionários demoram mais para realizar as tarefas, mas a qualidade das tarefas é melhor.
e) nada se pode afirmar sem o conhecimento do tamanho da amostra.

        Receita Federal (Analista Tributário) Estatística                                           110
        www.estrategiaconcursos.com.br                                                              169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Comentários:
Analisando as alternativas:
Letra A: Errada. Considera-se que para valores inferiores a 50%, a média será tanto mais representativa do
fato quanto menor for o valor de seu coeficiente de variação. Logo, as duas médias da tabela seriam sim
representativas já que os coeficientes de variação são inferiores de 50%.
Letra B: Errada. Para essa análise consideramos o coeficiente de variação, a análise é que a dispersão relativa
das avaliações de qualidade é menor (menos dispersas) que a das avaliações de tempestividade.
Letra C: Certa. O coeficiente de variação para a qualidade foi menor, logo as avaliações de qualidade são
mais homogêneas, já que a homogeneidade está relacionada à pequena dispersão.
Letra D: Errada. A questão não traz informações suficientes para essa afirmação.
Letra E: Errada. No enunciado da questão temos a informação de que todos os funcionários foram avaliados,
portanto, o quadro apresenta informações da população toda e não apenas de uma amostra.
Gabarito: C.


9. (FGV/SEFAZ RJ/2007) Uma amostra de 100 servidores de uma repartição apresentou média salarial de
R$ 1.700,00 com uma dispersão de R$ 240,00. Pode-se afirmar que:
a) a média aritmética não é uma boa medida para representar a amostra em função do elevado valor do
desvio-padrão.
b) a melhor medida para representar a amostra é a remu-neração por unidade de desvio-padrão.
c) o salário mediano representaria melhor a amostra de-vido ao alto nível de heterogeneidade dos salários
na amostra.
d) a amostra não é suficientemente grande para analisar-mos o valor encontrado para a média dos salários.
e) a média aritmética pode perfeitamente representar os salários da amostra pelo fato de esta apresentar
uma dispersão relativa inferior a 20%.


Comentários:
Vamos focar na análise das alternativas A e E.


Letra A: Errada. Considera-se que para valores inferiores a 50%, a média será tanto mais representativa do
fato quanto menor for o valor de seu coeficiente de variação. Vamos calcular o coeficiente de variação:
                                                                   𝜎
                                                            𝐶𝑣 =
                                                                   𝑥̅
                                                             240
                                                     𝐶𝑣 =         =
                                                             1700


        Receita Federal (Analista Tributário) Estatística                                                  111
        www.estrategiaconcursos.com.br                                                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                     𝐶𝑣 = 14,11%
Logo, a média seria sim representativas, pois o coeficiente de variação de variação é inferior a 50%.


Com essa análise percebemos que a alternativa E é a correta.
Gabarito: E.

        Receita Federal (Analista Tributário) Estatística                                               112
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                       AVISO IMPORTANTE!

Olá, alunos (as)!

Informamos que não temos mais questões da banca, referente ao assunto tratado na aula de hoje, em
virtude de baixa cobrança deste tópico ao longo dos anos. No entanto, para complementar o estudo e deixar
sua preparação em alto nível, preparamos um caderno de questões inéditas que servirá como treino e
aprimoramento do conteúdo.

Em caso de dúvidas, não deixe de nos chamar no Fórum de dúvidas!

Bons estudos!

Estratégia Concursos

        Receita Federal (Analista Tributário) Estatística                                             113
        www.estrategiaconcursos.com.br                                                                169

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                      QUESTÕES COMENTADAS – INÉDITAS

Medidas de Dispersão

1. (INÉDITA/2022) Sobre medidas de dispersão, julgue os itens:
I – as medidas de dispersão são métricas que mostram a variação dos dados de um conjunto;
II – são medidas de dispersão: amplitude total; amplitude interquartílica; desvio médio; média; variância
relativa e mediana.
III – as medidas de dispersão podem ser divididas em dois grupos: medidas de dispersão absoluta e
medidas de dispersão relativa.
                                                             ==219a34==

IV – a média, moda, mediana e o desvio padrão são medidas de posição.
V – a coeficiente de variação e a variância relativa são medidas de dispersão relativa.
Estão corretas as afirmativas:
a) Apenas I. e III.
b) Apenas I. III. e V.
c) Apenas V.
d) Apenas II. e IV.
e) Apenas IV. e V.


Comentários:
As medidas de dispersão medem o grau de variabilidade dos elementos de uma distribuição, ou seja,
mostram a variação dos dados de um conjunto. As principais medidas de dispersão podem ser divididas em
dois grupos: medidas de dispersão absoluta (amplitude, amplitude interquartílica, desvio médio, variância e
desvio padrão) e medidas de dispersão relativa (coeficiente de variação e variância relativa).
Média aritmética, moda e mediana fazem parte do grupo de medidas de posição que sintetizam o
comportamento dos elementos de um conjunto de dados.
Gabarito: B.


2. (INÉDITA/2022) Com relação às medidas de tendência central, medidas de posição e medidas de
dispersão, assinale a alternativa correta:
a) Dentre as medidas de posição mais utilizadas, temos: a média, mediana, moda e o desvio padrão, sendo
a mais importante delas a média aritmética.

         Receita Federal (Analista Tributário) Estatística                                              114
         www.estrategiaconcursos.com.br                                                                 169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

b) Sendo a variância uma medida de dispersão, ao dividirmos todos os valores de uma variável por uma
constante, a variância do novo conjunto fica dividida pelo quadrado dessa constante.
c) O coeficiente de variação é uma medida de dispersão absoluta que fornece a variação dos dados em
relação à média.
d) Sendo a variância uma medida de posição, ao subtrairmos uma constante de todos os valores de uma
variável, a variância do conjunto não é alterada.
e) O desvio médio faz parte das medidas de dispersão, ao somarmos uma constante a todos os valores de
uma variável, o desvio médio do conjunto também será somado dessa constante.


Comentários:
Vamos analisar cada uma das alternativas:
A - Dentre as medidas de posição mais utilizadas, temos: a média, mediana, moda e o desvio padrão, sendo
a mais importante delas a média aritmética. O desvio padrão faz parte das medidas de dispersão. Além disso,
não podemos afirmar que a média aritmética é a mais importante das medidas de posição.
B - Sendo a variância uma medida de dispersão, ao dividirmos todos os valores de uma variável por uma
constante, a variância do novo conjunto fica dividida pelo quadrado dessa constante. Perfeito! Uma das
propriedades da variância diz que multiplicando-se (ou dividindo-se) todos os valores de uma variável por
uma constante 𝑐, a variância do conjunto fica multiplicada (ou dividida) pelo QUADRADO dessa constante.
C - O coeficiente de variação é uma medida de dispersão absoluta que fornece a variação dos dados em
relação à média. Na verdade, o coeficiente de variação é uma medida de dispersão relativa e não absoluta
como afirma a questão.
D - Sendo a variância uma medida de posição, ao subtrairmos uma constante de todos os valores de uma
variável, a variância do conjunto não é alterada. A questão erra ao afirmar que a variância é uma medida de
posição, pois trata-se de uma medida de dispersão.
E- O desvio médio faz parte das medidas de dispersão, ao somarmos uma constante a todos os valores de
uma variável, o desvio médio do conjunto também será somado dessa constante. Na verdade, uma das
propriedades do desvio médio diz que somando-se (ou subtraindo-se) uma constante 𝑐 a todos os valores
de uma variável, o desvio médio do conjunto não é alterado.
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                               115
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                   QUESTÕES COMENTADAS – INÉDITAS

Amplitude Total

1. (INÉDITA/2022) Uma pesquisa foi realizada em uma escola para avaliar o rendimento dos alunos do
terceiro ano. Nessa avaliação foram atribuídos valores de acordo com o rendimento dos alunos nos testes
aplicados pelos professores. A tabela de frequências abaixo mostra o resultado da pesquisa:

                                                   𝒙𝒊        nº de alunos

                                                   3                4

                                                   6               10

                                                   8               17

                                                   10              13

                                                   15               6

                                                 Total             50

De acordo com as informações da tabela a amplitude total é igual a:
a) 8
b) 10
c) 12
d) 4
e) 9


Comentários:
Para dados agrupados sem intervalos de classe, a fórmula usada para a identificação da amplitude total é
expressa pela seguinte fórmula:
                                                   𝑨 = 𝒙𝒎á𝒙 − 𝒙𝒎í𝒏
em que 𝑥𝑚á𝑥 é o maior elemento; e 𝑥𝑚í𝑛 é o menor elemento do conjunto.
De acordo com a tabela apresentada, temos 3 e 15 para os valores mínimo e máximo da variável 𝑥𝑖 , assim
temos o seguinte resultado:

        Receita Federal (Analista Tributário) Estatística                                            116
        www.estrategiaconcursos.com.br                                                               169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                   𝐴 = 𝑥𝑚á𝑥 − 𝑥𝑚í𝑛
                                                   𝐴 = 15 − 3 = 12
Gabarito: C.

                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                  117
        www.estrategiaconcursos.com.br                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                    QUESTÕES COMENTADAS – INÉDITAS

Amplitude Interquartílica

1. (INÉDITA/2022) Denominamos de quartis os valores de uma série que a dividem em quatro partes iguais,
isto é, quatro partes contendo o mesmo número de elementos (25%). A respeito desse assunto, julgue as
assertivas e marque a opção correta:
( ) A amplitude interquartílica é o resultado da subtração entre o terceiro quartil e o primeiro quartil, sendo
expressa pela seguinte equação: 𝑨𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏
( ) Ao somar ou subtrair uma constante c a/de todos os valores de uma variável, a amplitude interquartílica
do conjunto também será somada dessa constante.
( ) O segundo quartil corresponde à separação de metade dos elementos da série, porém, esse valor não
coincide com a mediana.
( ) Ao multiplicar ou dividir todos os valores de uma variável por uma constante c, a amplitude
interquartílica do conjunto também será multiplicada ou dividida por essa constante.
a) V – V – F – V
b) V – V – F – F
c) V – F – F – V
d) F – F – V – V
e) F – V – V – F


Comentários:
Vamos analisar as assertivas:
Item 1 - A amplitude interquartílica é o resultado da subtração entre o terceiro quartil e o primeiro quartil,
sendo expressa pela seguinte equação: 𝐴𝐼𝑄 = 𝑄3 − 𝑄1
De fato, a amplitude interquartílica é dada pela diferença entre o terceiro quartil e o primeiro quartil, assim,
para calcularmos essa diferença, usamos a expressão 𝐴𝐼𝑄 = 𝑄3 − 𝑄1. Item verdadeiro.
Item 2 - Ao somar ou subtrair uma constante c a/de todos os valores de uma variável, a amplitude
interquartílica do conjunto também será somada dessa constante.
Na verdade, uma das propriedades da amplitude interquartílica diz que: Somando-se (ou subtraindo-se) uma
constante 𝑐 a todos os valores de uma variável, a amplitude interquartílica (e o desvio quartílico) do conjunto
não é alterada. Item falso.
Item 3 - O segundo quartil corresponde à separação de metade dos elementos da série, porém, esse valor
não coincide com a mediana.


         Receita Federal (Analista Tributário) Estatística                                                  118
         www.estrategiaconcursos.com.br                                                                     169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Os quartis dividem a série em quatro partes iguais, sendo assim, o segundo quartil corresponde a 50% dos
elementos da série, portanto, esse valor coincide sim com a mediana, sendo 𝑄2 = 𝑀𝑑 . Item falso.
Item 4 - Ao multiplicar ou dividir todos os valores de uma variável por uma constante c, a amplitude
interquartílica do conjunto também será multiplicada ou dividida por essa constante.
É exatamente isso o que diz uma das propriedades da amplitude interquartílica: multiplicando-se (ou
dividindo-se) todos os valores de uma variável por uma constante 𝑐, a amplitude interquartílica (e o desvio
quartílico) do conjunto fica multiplicada (ou dividida) por essa constante. Item verdadeiro.
Logo, a sequência correta é: V – F – F – V
Gabarito: C.


2. (INÉDITA/2022) Considerando a distribuição de frequências abaixo marque a alternativa correta.
A distribuição dos salários em mil reais dos 100 funcionários de uma empresa está apresentada na tabela
abaixo:

                                        Salários (𝒙𝒊 )      Frequência absoluta

                                       2000 ⊢ 3000                  8

                                       3000 ⊢ 4000                  20

                                       4000 ⊢ 5000                  34

                                       5000 ⊢ 6000                  26

                                       6000 ⊢ 7000                  12

                                            Total                  100

A amplitude interquartílica, dada pela diferença entre o terceiro e o primeiro quartil, é igual a:
a) R$ 2300,00
b) R$ 3500,00
c) R$ 1900,00
d) R$ 1650,00
e) R$ 1800,00


Comentários:

        Receita Federal (Analista Tributário) Estatística                                               119
        www.estrategiaconcursos.com.br                                                                  169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Inicialmente, precisamos calcular as frequências acumuladas de cada classe. Para isso, vamos reescrever a
tabela acrescentado essas informações:

                           Salários (𝒙𝒊 )      Frequência absoluta Frequência acumulada

                          2000 ⊢ 3000                     8                                 8

                          3000 ⊢ 4000                     20                                28

                          4000 ⊢ 5000                     34                                62

                          5000 ⊢ 6000                     26                                88

                          6000 ⊢ 7000                     12                                100
                                                              ==219a34==

                                Total                    100

Agora, vamos calcular as posições do 1º quartil:
                                                            𝑘 × ∑ 𝑓𝑖
                                                      𝑃𝑄𝑘 =
                                                               4
                                                         1 × 100
                                                   𝑃𝑄1 =         = 25
                                                            4
Logo, o primeiro quartil está na posição 25, o que corresponde à 2ª classe 3000 ⊢ 4000.
Aplicando a fórmula:
                                                       𝑘 × ∑ 𝑓𝑖
                                                                − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                        𝑄𝑘 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄𝑘
                                                   𝑘          𝑓𝑄𝑘

em que:
𝑙𝑖𝑛𝑓 𝑄 → Limite inferior à classe quartílica
     𝑘

𝑓𝑎𝑐𝑎𝑛𝑡 → frequência acumulada da classe anterior à classe quartílica
ℎ𝑄𝑘 → amplitude da classe
𝑓𝑄𝑘 → frequência da classe
                                                                           25 − 8
                                             𝑄1 = 3000 + [                       ] × 1000
                                                                             20
                                               𝑄1 = 3000 + 0,85 × 1000
                                                    𝑄1 = 3000 + 850
                                                        𝑄1 = 3850

          Receita Federal (Analista Tributário) Estatística                                           120
          www.estrategiaconcursos.com.br                                                              169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Calculando a posição do 3º quartil:
                                                          𝑘 × ∑ 𝑓𝑖
                                                    𝑃𝑄𝑘 =
                                                             4
                                                       3 × 100
                                                 𝑃𝑄3 =         = 75
                                                          4
Logo, o terceiro quartil está na posição 75, que corresponde à 4 ª classe 5000 ⊢ 6000.
Calculando o terceiro quartil:
                                                    𝑘 × ∑ 𝑓𝑖
                                                             − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                     𝑄𝑘 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄𝑘
                                                𝑘          𝑓𝑄𝑘

                                                            75 − 62
                                          𝑄3 = 5000 + [             ] × 1000
                                                              26
                                              𝑄3 = 5000 + 0,5 × 1000
                                                  𝑄3 = 5000 + 500
                                                      𝑄3 = 5500
Dessa forma, podemos calcular a amplitude do intervalo que é dada pela diferença entre o maior e o menor:
                                             𝐴 = 5500 − 3850 = 1650
Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                                             121
        www.estrategiaconcursos.com.br                                                                169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                     QUESTÕES COMENTADAS – INÉDITAS

Desvio Absoluto Médio

1. (INÉDITA/2022) Em um curso preparatório para concursos, foi realizada uma pesquisa para identificar
as idades dos seus alunos. As idades estão distribuídas conforme a tabela de frequências abaixo:

                                             idades (𝒙𝒊 )     Nº de alunos (𝒇𝒊 )

                                               20 ⊢ 25               150

                                               25 ⊢ 30               380

                                               30 ⊢ 35               420

                                               35 ⊢ 40               150

                                                Total               1200

Com base na tabela, o desvio absoluto médio das idades dos alunos é:
a) 5,3
b) 6,2
c) 2,65
d) 4,8
e) 3,62


Comentários:
Vamos iniciar pelo cálculo da média. Para isso, construiremos uma coluna com os pontos médios e
multiplicaremos cada um pela sua respectiva frequência. Da seguinte forma:

                 idades (𝒙𝒊 )       Pontos médios (𝒙𝒊 ) Nº de alunos (𝒇𝒊 )         𝒙𝒊 × 𝒇𝒊

                   20 ⊢ 25                   22,5                  150             3.375

                   25 ⊢ 30                   27,5                  380             10.450

                   30 ⊢ 35                   32,5                  420             13.650

          Receita Federal (Analista Tributário) Estatística                                        122
          www.estrategiaconcursos.com.br                                                           169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                     35 ⊢ 40                 37,5                    150                  5.625


                      Total                                     ∑ 𝒇𝒊 = 𝟏𝟐𝟎𝟎       ∑ 𝒙𝒊 × 𝒇𝒊 = 𝟑𝟑. 𝟏𝟎𝟎


Portanto, a média é:
                                                           33100
                                                    𝑥̅ =         = 27,58
                                                            1200
Acrescentando à tabela as informações de módulos dos desvios e da multiplicação dos desvios absolutos por
suas respectivas frequências:

  (𝒙𝒊 )      (𝒙𝒊 )         (𝒇𝒊 )                 𝒙𝒊 × 𝒇𝒊                   |𝒙𝒊 − 𝒙
                                                                                 ̅|               |𝒙𝒊 − 𝒙
                                                                                                        ̅| × 𝒇𝒊

                                                                   |22,5 − 27,58|
20 ⊢ 25      22,5          150                    3.375                                       5,08 × 150 = 762
                                                                                 = 5,08

                                                                   |27,5 − 27,58|
25 ⊢ 30      27,5          380                   10.450                                      0,08 × 380 = 30,4
                                                                                 = 0,08

                                                                   |32,5 − 27,58|
30 ⊢ 35      32,5          420                   13.650                                     4,92 × 420 = 2066,4
                                                                                 = 4,92

                                                                   |37,5 − 27,58|
35 ⊢ 40      37,5          150                    5.625                                      9,92 × 150 = 1488
                                                                                 = 9,92


                                                                                           ∑|𝑥𝑖 − 𝑥̅ | × 𝑓𝑖
 Total                ∑ 𝑓𝑖 = 1200        ∑ 𝑥𝑖 × 𝑓𝑖 = 33.100
                                                                                                           = 4346,8

Assim, o desvio absoluto médio é:
                                               ∑|𝑥𝑖 − 𝑥̅ | × 𝑓𝑖 4.346,8
                                        𝐷𝑚 =                   =        = 3,62
                                                     𝑛           1.200
Gabarito: E.


2. (INÉDITA/2022) Em um campeonato de basquete, a comissão organizadora fez um levantamento de
quantas cestas foram feitas por cada jogador. O resultado é apresentado na tabela de frequências abaixo:

                                          Nº de cestas
                                                              Nº de jogadores (𝒇𝒊 )
                                              (𝒙𝒊 )

                                                11                     5

          Receita Federal (Analista Tributário) Estatística                                                       123
          www.estrategiaconcursos.com.br                                                                          169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                14                             6

                                                23                             4

                                                25                             3

                                               Total                           18

O desvio absoluto médio do número de cestas é de:
a) 5,33
b) 6,78
c) 5,2                                                        ==219a34==

d) 4,89
e) 3,55


Comentários:
Vamos iniciar a resolução calculando a média de cestas feitas. Para isso, vamos reescrever a tabela
multiplicando as quantidades de cestas por suas respectivas frequências:

                              Nº de cestas
                                                  Nº de jogadores (𝒇𝒊 )                 𝒙𝒊 × 𝒇𝒊
                                  (𝒙𝒊 )

                                    11                                     5              55

                                    14                                     6              84

                                    23                                     4              92

                                    25                                     3              75


                                  Total                ∑ 𝒇𝒊 = 𝟏𝟖                    ∑ 𝒙𝒊 × 𝒇𝒊 = 𝟑𝟎𝟔


A média é dada pela razão entre os dois totais:
                                            ∑ 𝑥𝑖 × 𝑓𝑖 306
                                     𝑥̅ =            =    = 17 𝑐𝑒𝑠𝑡𝑎𝑠/𝑗𝑜𝑔𝑎𝑑𝑜𝑟
                                              ∑ 𝑓𝑖     18
Agora, acrescentamos mais uma coluna para armazenar os módulos dos desvios multiplicados por suas
respectivas frequências:

          Receita Federal (Analista Tributário) Estatística                                           124
          www.estrategiaconcursos.com.br                                                              169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

               Nº de cestas
                                 Nº de jogadores (𝒇𝒊 )          𝒙𝒊 × 𝒇𝒊           |𝒙𝒊 − 𝒙
                                                                                        ̅| × 𝒇𝒊
                   (𝒙𝒊 )

                   11                        5                    55           |11 − 17| × 5 = 30

                   14                        6                    84           |14 − 17| × 6 = 18

                   23                        4                    92           |23 − 17| × 4 = 24

                   25                        3                    75           |25 − 17| × 3 = 24


                  Total               ∑ 𝒇𝒊 = 𝟏𝟖                                    ̅| × 𝒇𝒊 = 𝟗𝟔
                                                            ∑ 𝒙𝒊 × 𝒇𝒊 = 𝟑𝟎𝟔 ∑|𝒙𝒊 − 𝒙

Agora, basta aplicarmos a fórmula do desvio absoluto médio:
                                                 ∑|𝑥𝑖 − 𝑥̅ | × 𝑓𝑖 96
                                         𝐷𝑚 =                    =    = 5,33
                                                       𝑛           18
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                           125
        www.estrategiaconcursos.com.br                                                              169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                         QUESTÕES COMENTADAS – INÉDITAS

Desvio-Padrão

1. (INÉDITA/2022) Em uma empresa de departamento, com 10 funcionários na área de vendas, as
quantidades vendidas por cada funcionário no mês foram:

                                           13 14 17 17 17 19 19 21 22 23

O desvio padrão das vendas foi igual a:
a) 4,01                                                                ==219a34==

b) 3,09
c) 3,50
d) 2,89
e) 5,2


Comentários:
Para calcularmos o desvio padrão, precisamos inicialmente calcular a média. Assim, temos que:
                             13 + 14 + 17 + 17 + 17 + 19 + 19 + 21 + 22 + 23 182
                       𝜇=                                                   =    = 18,2
                                                   10                         10
O desvio padrão (𝒔 ou 𝝈) é definido como sendo a raiz quadrada da média aritmética dos quadrados dos
desvios, sendo expresso pela fórmula:

                                                                     ∑𝑛𝑖=1(𝑥𝑖 − 𝜇)2
                                                            𝜎=√
                                                                            𝑛

Calculando o desvio dos dados apresentados, temos:
                                                                                    𝜎=

  (13 − 18,2)2 + (14 − 18,2)2 + (17 − 18,2)2 + (17 − 18,2)2 + (17 − 18,2)2 + (19 − 18,2)2 + (19 − 18,2)2 + (21 − 18,2)2 + (22 − 18,2)2 + (23 − 18,2)2
 √
                                                                           10


                        27,04 + 17,64 + 1,44 + 1,44 + 1,44 + 0,64 + 0,64 + 7,84 + 14,44 + 23,04
               𝜎=√
                                                          10

                                                                                     95,6
                                                                   𝜎=√
                                                                                      10

                                                                   𝜎 = √9,56


          Receita Federal (Analista Tributário) Estatística                                                                                        126
          www.estrategiaconcursos.com.br                                                                                                           169

                                               


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                        𝜎 = 3,09
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                  127
        www.estrategiaconcursos.com.br                                     169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                     QUESTÕES COMENTADAS – INÉDITAS

Variância Relativa

1. (INÉDITA/2022) Seja uma amostra de candidatos que prestaram concurso para os cargos de assistente
e analista. Considere que a média de pontos da prova de analista é de 86 pontos, com desvio padrão de
36; e a média de pontos da prova de assistentes é de 95 pontos, com desvio padrão de 25. A variância
relativa de analistas supera a de assistentes em:
a) 0,1
b) 0,5
c) 0,7
d) 0,17
e) 0,3


Comentários:
A variância relativa é dada por:
                                                           𝑠 2 𝑠2
                                                     𝑉𝑅 = ( ) = 2
                                                           𝑥̅  𝑥̅
em que 𝑠 2 é variância absoluta e 𝑥̅ 2 é o quadrado da média.
A questão nos deu a informação da média para analistas e assistentes, assim como a informação de desvio
padrão. Sabemos que o desvio padrão é determinado pela raiz quadrada da variância. Então:
Para analistas:
                                                   𝑠𝑎𝑛𝑎𝑙𝑖𝑠𝑡𝑎𝑠 2     36 2
                                         𝑉𝑅 = (                ) = ( ) = 0,17
                                                   𝑥̅𝑎𝑛𝑎𝑙𝑖𝑠𝑡𝑎𝑠      86
Para assistente:

                                               𝑠𝑎𝑠𝑠𝑖𝑡𝑒𝑛𝑡𝑒𝑠 2     25 2
                                        𝑉𝑅 = (              ) = ( ) = 0,07
                                              𝑥̅𝑎𝑠𝑠𝑖𝑠𝑡𝑒𝑛𝑡𝑒𝑠      95
A questão quer saber o quanto a variação relativa dos analistas é superior à de assistentes, logo temos:
                                   𝑉𝑅𝑎𝑛𝑎𝑙𝑖𝑠𝑡𝑎𝑠 − 𝑉𝑅𝑎𝑠𝑠𝑖𝑡𝑒𝑛𝑡𝑒𝑠 = 0,17 − 0,07 = 0,1
Gabarito: A.

          Receita Federal (Analista Tributário) Estatística                                                128
          www.estrategiaconcursos.com.br                                                                   169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

2. (INÉDITA/2022) Considere uma população X com coeficiente de variação 0,3 e média aritmética igual a
35. E uma população Y com desvio padrão 25 e média aritmética igual a 49. A variância relativa da
população X mais a variância relativa da população Y é igual a:
a) 0,25
b) 0,40
c) 0,55
d) 0,28
e) 0,35


Comentários:
                                                              ==219a34==

Temos que a variância relativa é dada por:
                                                                            𝜎2
                                                         𝑉𝑅 =
                                                                           (𝑋̅)2
Em que 𝑠 2 é variância absoluta e 𝑥̅ 2 é o quadrado da média.
A questão nos forneceu a média e o coeficiente de variação para a população X. O coeficiente de variação é
determinado pela razão entre o desvio padrão e a média. Logo:
                                                                 𝜎𝑋
                                                         𝐶𝑉𝑋 =
                                                                ̅𝑋̅̅𝑋̅
                                                                𝜎𝑋
                                                          0,3 =
                                                                35
                                                       𝜎𝑋 = 35 × 0,3
                                                         𝜎𝑋 = 10,5
Assim, podemos calcular a variância relativa para a população X:
                                                  10,52 110,25
                                            𝑉𝑅𝑋 =      =       = 0,09
                                                   352   1225
Para a população Y, basta aplicarmos:
                                                        252   625
                                               𝑉𝑅𝑌 =        =     = 0,26
                                                        492 2401
Agora, basta somarmos as variâncias relativa de X e Y:
                                           𝑉𝑅𝑋 + 𝑉𝑅𝑌 = 0,09 + 0,26 = 0,35
Gabarito: E.


3. (INÉDITA/2022) Considere uma amostra de tamanho 15, com 270 sendo o somatório dos termos e que
tem coeficiente de variação igual a 0,5. A variância relativa dessa amostra é igual a:


          Receita Federal (Analista Tributário) Estatística                                            129
          www.estrategiaconcursos.com.br                                                               169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

a) 0,18
b) 0,50
c) 0,75
d) 0,35
e) 0,25


Comentários:
A variância relativa é dada por:
                                                           𝑠 2 𝑠2
                                                     𝑉𝑅 = ( ) = 2
                                                           𝑥̅  𝑥̅
Vamos iniciar a resolução da questão calculando a média da amostra. Ora, sabemos que a média é dada pelo
quociente entre a soma de todos os elementos e o número deles. Logo:
                                                              270
                                                      𝑥̅ =        = 18
                                                              15
A questão nos forneceu o coeficiente de variação, que é calculado pela razão entre o desvio padrão e a
média. Logo:
                                                                 𝑠
                                                              𝐶𝑉 =
                                                                𝑥̅
                                                                 𝑠
                                                          0,5 =
                                                                18
                                                     𝑠 = 18 × 0,5 = 9
Agora, já podemos calcular a variância relativa da amostra:
                                                 𝑠2   92  81
                                             𝑉𝑅 = 2 = 2 =     = 0,25
                                                 𝑥̅  18   324
Gabarito: E.

          Receita Federal (Analista Tributário) Estatística                                          130
          www.estrategiaconcursos.com.br                                                             169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                LISTA DE QUESTÕES – FGV

Amplitude Total

1. (FGV/Pref. SJC/2024) Segundo dados do IBGE, o IPCA mensal registrou os seguintes valores
entre janeiro e julho de 2023 (em %):

                                            Jan/2023               0,53

                                            Fev/2023               0,84

                                            Mar/2023               0,71

                                            Abr/2023               0,61

                                            Mai/2023               0,23

                                            Jun/2023              -0,08

                                            Jul/2023               0,12

Considerando esse período, a mediana e a amplitude (em %) foram iguais, respectivamente, a
a) 0,42 e 0,76.
b) 0,53 e 0,76.
c) 0,53 e 0,92.
d) 0,53 e 0,485.
e) 0,57 e 0,84.


2. (FGV/DPE-RJ/2014) Dentre as informações coletadas dos cidadãos através do 1º atendimento
da Defensoria Pública estão as variáveis idade, renda e o número de dependentes. Cada uma é
classificada em três diferentes níveis A, B e C, com valores de referência conforme a tabela:

         Variáveis                      A                   B              C      D

     Renda Média (R$
                                        9                   11             11    17
          100)

    Idade Média (anos)                 20                   32             36    48

       Dependentes
                                        2                   3              3      2
        (pessoas)

        Receita Federal (Analista Tributário) Estatística                                 131
        www.estrategiaconcursos.com.br                                                    169

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 04

Portanto, as unidades de medida são distintas (R$, anos e pessoas). Mesmo assim, através de
uma estatística de amplitude, escolhida convenientemente, aqui representada por VB, é possível
comparar as dispersões. Logo, renda, idade e número de dependentes seguem a ordenação
a) VB (renda) < VB (idade) < VB (dependentes).
b) VB (renda) < VB (dependentes) < VB (idade).
c) VB (idade) < VB (dependentes) < VB (renda).
d) VB (idade) < VB (renda) < VB (dependentes).
e) VB (dependentes) < VB (renda) < VB (idade).

                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                                  132
        www.estrategiaconcursos.com.br                                                     169

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Amplitude Total

  1. LETRA C                                  2. LETRA E

       Receita Federal (Analista Tributário) Estatística                  133
       www.estrategiaconcursos.com.br                                     169

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                 LISTA DE QUESTÕES – FGV

Amplitude Interquartílica

1. (FGV/STN/2024) Uma amostra de idades de 52 crianças e adolescentes foi obtida e resultou nos
seguintes dados (já ordenados)

                             5     5    5    5     5    6    6   6   6      7   7   7   7

                             7     8    8    8     8    8    8   8   8      9   9   9   10

                             10 10 10 10 10 10 10 11 11 11 12 12 12

                             12 13 14 14 15 15 15 15 15 16 16 16 16

A distância interquartil das idades é igual a
a) 2.
b) 3.
c) 4.
d) 5.
e) 6.


2. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:

A turma com notas mais homogêneas nessa prova foi a
a) 1.

         Receita Federal (Analista Tributário) Estatística                                    134
         www.estrategiaconcursos.com.br                                                       169

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 04

b) 2.
c) 3.
d) 4.
e) 5.


3. (FGV/IBGE/2017) A população de um estudo é dividida em quatro estratos, sendo o menor com 10%
dos indivíduos e os demais com tamanhos acrescidos de dez pontos percentuais, progressivamente. Os
estratos se distinguem por classes de renda com amplitude constante, sendo maiores quanto menor a
renda. Sobre os estratos sabe-se que:
                              𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟏 = 𝟔𝟓 𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟐 = 𝟒𝟓 𝒆 𝑹𝒅𝑬𝒔𝒕𝒓𝒂𝒕𝒐𝟒 = 𝟓
Onde os valores acima representam os limites inferiores da renda dos extratos, inclusive.
                                                             ==219a34==

Portanto, é correto afirmar que:
a) Tomando os pontos médios das classes como representativos, a renda média é igual a Md(Rd) = 38;
b) A mediana da distribuição de renda, Me(Rd), é menor que 45 e maior do que ou igual a 25;
c) Tomando os pontos médios das classes como representativos, a moda da renda é igual a Mo(Rd) = 35;
d) O valor máximo atingido pela renda nessa distribuição é igual a Mx(Rd) = 85;
e) O valor do desvio-interquartílico da distribuição de renda deverá ser superior a 50.

         Receita Federal (Analista Tributário) Estatística                                             135
         www.estrategiaconcursos.com.br                                                                169

                                       


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Amplitude Interquartílica

  1. LETRA D                                  2. LETRA C                  3. LETRA B

       Receita Federal (Analista Tributário) Estatística                               136
       www.estrategiaconcursos.com.br                                                  169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                LISTA DE QUESTÕES – FGV

Desvios em Relação à Média Aritmética e Mediana

1. (FGV/SEFAZ MS/2006) Analise as afirmativas a seguir, a respeito da média aritmética:
I. A soma dos resíduos em relação à média aritmética é sempre igual a zero.
II. É em relação à média aritmética que a soma dos valores absolutos dos resíduos é mínima.
III. É em relação à média aritmética que a soma dos quadrados dos resíduos é mínima.
Assinale:
a) se somente a afirmativa II estiver correta.              ==219a34==

b) se somente as afirmativas I e II estiverem corretas.
c) se somente as afirmativas I e III estiverem corretas.
d) se somente as afirmativas II e III estiverem corretas.
e) se todas as afirmativas estiverem corretas.


2. (FGV/SEFAZ-MS/2006) Analise as afirmativas a seguir, a respeito da mediana:
I. A soma dos resíduos em relação à mediana é sempre igual a zero.
II. É em relação à mediana que a soma dos valores absolutos dos resíduos é mínima.
III. É em relação à mediana que a soma dos quadrados dos resíduos é mínima.
Assinale:
a) se somente a afirmativa II estiver correta.
b) se somente as afirmativas I e II estiverem corretas.
c) se somente as afirmativas I e III estiverem corretas.
d) se somente as afirmativas II e III estiverem corretas.
e) se todas as afirmativas estiverem corretas.

        Receita Federal (Analista Tributário) Estatística                                     137
        www.estrategiaconcursos.com.br                                                        169

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Desvios em Relação à Média Aritmética e Mediana

  1. LETRA C                                  2. LETRA A

       Receita Federal (Analista Tributário) Estatística                  138
       www.estrategiaconcursos.com.br                                     169

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                      LISTA DE QUESTÕES – FGV

Variância

1. (FGV/TCE-GO/2024) Considere a seguinte amostra de idades:
                                                         20, 21, 19, 20, 20
A variância amostral dessas idades pode ser igual a
a) 0,50
b) 0,56
c) 0,60
d) 0,62
e) 0,64


2. (FGV/BANESTES/2023) Considere o seguinte conjunto de n = 5 observações relativas a determinada
variável:
                                                           8, 3, 11, 1, 7.
Em relação a esses dados, avalie as seguintes afirmativas:
I. A média é igual a 7.
II. A mediana é igual a 6.
III. A variância é igual a 16.
Está correto apenas o que se afirma em
a) I.
b) III.
c) I e II.
d) I e III.
e) II e III.


3. (FGV/Câmara dos Deputados/2023) Observe a seguinte amostra de notas de cinco alunos:
6, 6, 8, 10, 10.
A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média, é igual
a
a) 2,4.

              Receita Federal (Analista Tributário) Estatística                                   139
              www.estrategiaconcursos.com.br                                                      169

                                            


---

   Equipe Exatas Estratégia Concursos
   Aula 04

b) 2,8.
c) 3,2.
d) 3,6.
e) 4,0.


4. (FGV/SEFAZ-MG/2023) Considere a seguinte amostra aleatória simples:
2, 5, 5, 6, 6, 7, 7, 10.
A variância amostral que corresponde à estimativa não tendenciosa da variância populacional é
aproximadamente igual a
a) 4,5.
b) 5,1.
c) 5,5.
d) 5,8.
e) 6,2.


5. (FGV/TCE ES/2023) O quadro seguinte apresenta, parcialmente, os valores de uma série ordenada de 80
observações.

                                1     3,7    3,7    3,7    4,7       5,7   5,7   5,7   5,7   5,7

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                               6,2    6,5    6,5    6,5    6,5       6,5   6,5   6,5   6,5   6,5

                               6,5    6,5     7      7         7     ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                                ...    ...    ...    ...       ...   ...   ...   ...   ...   ...

                               7,3    7,3    7,3    7,3    7,3       7,3   8,3   9,3   10    10

O 1º e o 3º quartis são, respectivamente, 5,8 e 7,3. A soma dos quadrados das informações é 3.512.
Após a retirada dos valores atípicos pelo critério dos quartis, a nova série passou a ser simétrica.
O valor da variância dessa nova série é:
a) 0,50;

           Receita Federal (Analista Tributário) Estatística                                           140
           www.estrategiaconcursos.com.br                                                              169

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 04

b) 0,75;
c) 1,0;
d) 1,25;
e) 1,50.


6. (FGV/CGU/2022) O ativo A está gerando grande atração de matemáticos, que conseguiram convencer a
bolsa de valores a registrar preços baseados em quantidades pouco usuais, como √𝟐 e 𝝅. Durante cinco
dias foram observados os seguintes preços de dois ativos, A e B, respectivamente:
                               𝝅     𝟏 𝟏
                        (√𝟐;     ; 𝟏; ; ) 𝒆 (𝟏𝟎𝟎, 𝟑𝟎; 𝟒𝟎𝟎, 𝟏𝟖; 𝟐𝟎𝟕, 𝟎𝟏; 𝟓𝟎𝟖, 𝟎𝟎; 𝟗𝟏𝟐, 𝟏𝟏)
                               𝟐     𝟑 𝟔
Considerando esses valores, sobre a média e a variância dos retornos durante esses cinco dias, é correto
afirmar que:
a) os retornos do ativo A têm maior média e maior variância;
b) os retornos do ativo A têm maior média e menor variância;
c) os retornos do ativo A têm menor média e maior variância;
d) os retornos do ativo A têm menor média e menor variância;
e) a média e a variância dos retornos dos dois ativos são iguais.


7. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                          Valores de X         0   2    6     8

                                          Probabilidades 0,2 0,3 0,3 0,2

A variância de X é igual a
a) 7,2.
b) 7,6.
c) 8,0.
d) 8,4.
e) 8,8.


8. (FGV/SEPOG-RO/2017) Considere a seguinte amostra de notas de alunos: 5,0; 6,0; 5,0; 4,0; 10,0. A
variância amostral dessas notas pode ser igual a
a) 5,5.

           Receita Federal (Analista Tributário) Estatística                                         141
           www.estrategiaconcursos.com.br                                                            169

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 04

b) 6,2.
c) 6,8.
d) 7,2.
e) 9,0.


9. (FGV/AL-BA/2014) A média das idades de um grupo de 4 amigos é de 36 anos, e o desvio padrão é igual
a 2. Daqui a cinco anos, a média e a variância das idades desse grupo serão iguais a:
a) 41 e 4.
b) 41 e 50.
c) 56 e 2.
d) 56 e 50.
e) 56 e 200.


10. (FGV/SEFAZ-RJ/2010) A média, a mediana e a variância das idades de um grupo de vinte pessoas são,
hoje, iguais, respectivamente, a 34, 35 e 24. Daqui a dez anos, os valores da média, da mediana e da
variância das idades dessas pessoas serão, respectivamente:
a) 44, 35 e 34.
b) 44, 45 e 12.
c) 44, 45 e 24.
d) 34, 35 e 12.
e) 44, 45 e 124.


11. (FGV/SEAD-AP/2010) Os dados a seguir são as quantidades de empregados de cinco pequenas
empresas: 6, 5, 8, 5, 6.
A variância da quantidade de empregados dessas cinco empresas é igual a:
a) 0,8.
b) 1,2.
c) 1,6.
d) 2,0.
e) 2,4.


12. (FGV/SEN/2008) A média


          Receita Federal (Analista Tributário) Estatística                                        142
          www.estrategiaconcursos.com.br                                                           169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                                             𝒏
                                                           𝟏
                                                       (𝒙
                                                        ̅ = ∑ 𝒙𝒊 )
                                                           𝒏
                                                                            𝒊=𝟏

e a variância amostral
                                                                            𝒏
                                                       𝟏
                                                (𝒔𝟐 =            ̅) 𝟐 )
                                                          ∑(𝒙𝒊 − 𝒙
                                                      𝒏−𝟏
                                                                            𝒊=𝟏

de um conjunto de 20 observações são, respectivamente, 5 e 1. Uma nova observação, de valor igual a 5,
foi acrescentada ao conjunto inicial, passando-se a ter 21 valores. A nova variância amostral será igual a:
a) 1,10.
b) 1,05.
c) 1,00.                                                       ==219a34==

d) 0,95.
e) 0,90.

           Receita Federal (Analista Tributário) Estatística                                            143
           www.estrategiaconcursos.com.br                                                               169

                                         


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Variância

  1.   LETRA A                                5.   LETRA B                9. LETRA A
  2.   LETRA B                                6.   LETRA D                10. LETRA C
  3.   LETRA C                                7.   LETRA E                11. LETRA B
  4.   LETRA B                                8.   LETRA A                12. LETRA D

       Receita Federal (Analista Tributário) Estatística                                144
       www.estrategiaconcursos.com.br                                                   169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                  LISTA DE QUESTÕES – FGV

Desvio-Padrão

1. (FGV/Pref. SJC/2024) Considere uma variável aleatória X com os seguintes momentos:
𝑬(𝑿) = 𝟒.
𝑬(𝑿𝟐 ) = 𝟐𝟓
O desvio-padrão de X é igual a:
a) 3.
b) 9.
c) √21.
d) √29.
e) 2,5.


2. (FGV/RFB/2023) Observe as cinco amostras a seguir:

                              Amostra                               Observações

                                   1                      –5 –3 –1                  1       3       5    7

                                   2                          22 26             30       34         38

                                   3                          100       101             102 103

                                   4                            1       2       3       5       10

                                   5                      0,5       2,0         3,5         5,0         6,5

Das cinco, a de menor desvio padrão é a
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.


3. (FGV/BANESTES/2023) A tabela a seguir apresenta as idades (em anos) de 16 crianças
divididas em 4 grupos de 4 alunos.

                                               Grupo 1              6       7        8          9


          Receita Federal (Analista Tributário) Estatística                                                   145
          www.estrategiaconcursos.com.br                                                                      169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                                Grupo 2            7   7   7       9

                                                Grupo 3            6   7   7       8

                                                Grupo 4            5   7   8       8

Com base nessas informações, avalie as afirmações.
I. A média das idades é maior no Grupo 1 que no Grupo 2.
II. A mediana das idades é maior no Grupo 1 que no Grupo 3.
III. O grupo 4 é o que apresenta maior desvio-padrão.
Está correto o que se afirma em
a) II, apenas.
b) III, apenas.
c) I e II, apenas.
d) II e III, apenas.
e) I, II e III.


4. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de idades:
26 28 30 32 32 34 36 38
O desvio padrão dessas idades é igual a
a) 2.
b) 3.
c) 4.
d) 5.
e) 6.


5. (FGV/Pref. Paulínia/2021) Em uma turma de 10 alunos, as notas dos alunos em uma avaliação
foram:

                                   6     7     7      8        8   8   8       9       9   10

O desvio padrão dessa lista de notas é, aproximadamente,
a) 0,8.
b) 0,9.
c) 1,1.

           Receita Federal (Analista Tributário) Estatística                                    146
           www.estrategiaconcursos.com.br                                                       169

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 04

d) 1,3.
e) 1,5.


6. (FGV/IMBEL/2021) Considere os números 1, 2, 3, 6, 8.
O desvio padrão dessa lista de números é, aproximadamente, igual a
a) 1,7.
b) 2,1.
c) 2,6.
d) 3,0.
e) 3,4.


7. (FGV/IBGE/2016) A partir de uma amostra de tamanho 2n+1, sendo n um número inteiro,
elaborou-se a distribuição de frequência de tal forma que apenas os dados grupados ficaram
disponíveis. Apesar disso, é possível determinar com certeza a classe à qual pertence o valor
exato:
a) Da moda;
b) Da mediana;
c) Da média;
d) Dos quartis;
e) Do desvio padrão.


8. (FGV/TJ-AM/2013) Em relação à medida de desvio padrão, analise as afirmativas a seguir.
I. Tal medida apresenta a propriedade adimensional.
II. Tal medida mostra a dispersão dos dados em relação à média.
III. Tal medida nunca é negativa.
Assinale:
a) Se apenas a afirmativa II estiver correta.
b) Se apenas as afirmativas I e III estiverem corretas.
c) Se apenas as afirmativas II e III estiverem corretas.
d) Se apenas as afirmativas I e II estiverem corretas.
e) Se todas as afirmativas estiverem corretas.

          Receita Federal (Analista Tributário) Estatística                                  147
          www.estrategiaconcursos.com.br                                                     169

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 04

9. (FGV/SEFAZ-RJ/2011) O desvio-padrão da população {2; 4; 2; 4; 2; 4; 2; 4} é
a) 1,5 .
b) 1,0 .
c) 2,5 .
d) 2,0 .
e) 3,0 .

                                                               ==219a34==

           Receita Federal (Analista Tributário) Estatística                     148
           www.estrategiaconcursos.com.br                                        169

                                         


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Desvio-Padrão

  1. LETRA A                                  4. LETRA C                  7. LETRA B
  2. LETRA C                                  5. LETRA C                  8. LETRA C
  3. LETRA D                                  6. LETRA C                  9. LETRA B

       Receita Federal (Analista Tributário) Estatística                               149
       www.estrategiaconcursos.com.br                                                  169

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                 LISTA DE QUESTÕES – FGV

Coeficiente de Variação (ou Dispersão Relativa)

1. (FGV/TJ-MS/2024) A amostra dos pesos, em quilos, dos indivíduos de uma população foi obtida: {50,
60, 70, 80, 90}.
Considerando as cinco medições, é correto afirmar que nessa amostra:
a) a média aritmética coincide com a média geométrica;
b) a média aritmética coincide com a média harmônica;
c) a média aritmética coincide com a mediana;
d) a média aritmética coincide com a moda;
e) o coeficiente de variação amostral é menor que o coeficiente de variação populacional.


2. (FGV/TJ-AP/2024) Um grupo de funcionários possui desvio padrão salarial igual a R$ 1 mil. Após receber
um aumento linear de R$ 2,5 mil, o novo coeficiente de variação salarial passou a ser igual a 0,08.
O percentual médio de aumento salarial foi de:
a) 5;
b) 10
c) 15;
d) 20;
e) 25.


3. (FGV/PC AM/2022) Suponha que um pesquisador tenha as seguintes informações de uma amostra de
dados:
Média = 5
Variância = 25
Soma dos desvios absolutos em relação à média = 10
Tamanho da amostra = 5
Assim, o coeficiente de variação dessa amostra em termos decimais será igual a
a) 1.
b) 2.

         Receita Federal (Analista Tributário) Estatística                                            150
         www.estrategiaconcursos.com.br                                                               169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

c) √5.
d) 5.
e) 10.


4. (FGV/IBGE/2017) Alguns economistas estão discutindo sobre a volatilidade dos preços em duas
economias, relativamente parecidas, tendo como moedas peras (A) e maçãs (B). Sabe-se que as médias
dos preços são 100 peras e 120 maçãs, respectivamente. É fornecido, ainda, o desvio-padrão dos preços
em A, igual a 25 peras, e a variância em B, igual a 400 maçãs ao quadrado.
Considerando as principais medidas estatísticas de dispersão como medidas de volatilidade, é correto
afirmar que:
a) O desvio padrão dos preços em A é inferior ao de B;
b) A taxa de conversão da moeda A para B é de 1,2;
c) A taxa de inflação em A deve ser menor do que em B;
d) Os preços em B são, em média, mais caros do que em A;
e) A medida adimensional de dispersão de A é superior à de B.


5. (FGV/IBGE/2016) As principais medidas de dispersão utilizadas na estatística são a amplitude (A), a
variância (Var), o desvio padrão (DP), o coeficiente de variação (CV) e o desvio-interquartílico (DI). Sobre
o tema, é correto afirmar que:
a) As medidas acima listadas têm seus valores dependentes, na íntegra, dos valores da distribuição amostral;
b) A variância apresenta a vantagem de ser diretamente comparável com os valores da distribuição;
c) É possível afirmar que var(x) ≥ dp(x);
d) O desvio-interquartílico é sempre superior ou no mínimo igual à amplitude;
e) O coeficiente de variação é uma medida invariante às mudanças de escala.


6. (FGV/AL-BA/2014) A tabela a seguir mostra média e desvio padrão das notas dos alunos em um exame
nacional em cinco estados diferentes:

                                                        Média      Desvio padrão

                                      Estado I               500            100

                                     Estado II               600            120

         Receita Federal (Analista Tributário) Estatística                                               151
         www.estrategiaconcursos.com.br                                                                  169

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                                     Estado III              500                         140

                                     Estado IV               450                         120

                                     Estado V                600                         100

Assinale a opção que indica o Estado que apresentou o menor coeficiente de variação das notas.
a) I
b) II
c) III
d) IV                                                        ==219a34==

e) V


7. (FGV/SEN/2008) O coeficiente de variação amostral (em porcentagem) de um conjunto de salários é
110%.
Se os salários desse conjunto forem reajustados em 20%, o novo coeficiente de variação amostral será:
a) 110%.
b) 112,2%.
c) 114,2%.
d) 122%.
e) 130%.


8. (FGV/SEFAZ-RJ/2008) Uma companhia utiliza um sistema de avaliação de desempenho de seus
funcionários por meio de dois indicadores de performance: Qualidade das tarefas e a Tempestividade com
que as tarefas são realizadas.
Os funcionários receberam, na última avaliação, as medidas indicadas na tabela a seguir:

                                                                                      Indicador
                                Medidas
                                                                          Qualidade         Tempestividade

                                 Média                                       50                   25

                            Desvio-Padrão                                   10,0                  6,0

         Receita Federal (Analista Tributário) Estatística                                                   152
         www.estrategiaconcursos.com.br                                                                      169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                           Coeficiente de
                                                             20             24
                            Variação %

Com base na tabela, é correto afirmar que:
a) a média aritmética não é uma boa medida para representar a performance dos funcionários em face do
elevado nível de dispersão das avaliações.
b) as avaliações da Qualidade foram mais dispersas do que as avaliações da Tempestividade.
c) as avaliações da Qualidade foram mais homogêneas do que as da Tempestividade.
d) os funcionários demoram mais para realizar as tarefas, mas a qualidade das tarefas é melhor.
e) nada se pode afirmar sem o conhecimento do tamanho da amostra.


9. (FGV/SEFAZ RJ/2007) Uma amostra de 100 servidores de uma repartição apresentou média salarial de
R$ 1.700,00 com uma dispersão de R$ 240,00. Pode-se afirmar que:
a) a média aritmética não é uma boa medida para representar a amostra em função do elevado valor do
desvio-padrão.
b) a melhor medida para representar a amostra é a remu-neração por unidade de desvio-padrão.
c) o salário mediano representaria melhor a amostra de-vido ao alto nível de heterogeneidade dos salários
na amostra.
d) a amostra não é suficientemente grande para analisar-mos o valor encontrado para a média dos salários.
e) a média aritmética pode perfeitamente representar os salários da amostra pelo fato de esta apresentar
uma dispersão relativa inferior a 20%.

        Receita Federal (Analista Tributário) Estatística                                             153
        www.estrategiaconcursos.com.br                                                                169

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                         GABARITO – FGV

Coeficiente de Variação (ou Dispersão Relativa)

  1. LETRA C                                  4. LETRA E                  7. LETRA A
  2. LETRA E                                  5. LETRA E                  8. LETRA C
  3. LETRA A                                  6. LETRA E                  9. LETRA E

       Receita Federal (Analista Tributário) Estatística                               154
       www.estrategiaconcursos.com.br                                                  169

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 04

                          LISTA DE QUESTÕES – INÉDITAS

Medidas de Dispersão

1. (INÉDITA/2022) Sobre medidas de dispersão, julgue os itens:
I – as medidas de dispersão são métricas que mostram a variação dos dados de um conjunto;
II – são medidas de dispersão: amplitude total; amplitude interquartílica; desvio médio; média; variância
relativa e mediana.
III – as medidas de dispersão podem ser divididas em dois grupos: medidas de dispersão absoluta e
medidas de dispersão relativa.
IV – a média, moda, mediana e o desvio padrão são medidas de posição.
V – a coeficiente de variação e a variância relativa são medidas de dispersão relativa.
Estão corretas as afirmativas:
a) Apenas I. e III.
b) Apenas I. III. e V.
c) Apenas V.
d) Apenas II. e IV.
e) Apenas IV. e V.


2. (INÉDITA/2022) Com relação às medidas de tendência central, medidas de posição e medidas de
dispersão, assinale a alternativa correta:
a) Dentre as medidas de posição mais utilizadas, temos: a média, mediana, moda e o desvio padrão, sendo
a mais importante delas a média aritmética.
b) Sendo a variância uma medida de dispersão, ao dividirmos todos os valores de uma variável por uma
constante, a variância do novo conjunto fica dividida pelo quadrado dessa constante.
c) O coeficiente de variação é uma medida de dispersão absoluta que fornece a variação dos dados em
relação à média.
d) Sendo a variância uma medida de posição, ao subtrairmos uma constante de todos os valores de uma
variável, a variância do conjunto não é alterada.
e) O desvio médio faz parte das medidas de dispersão, ao somarmos uma constante a todos os valores de
uma variável, o desvio médio do conjunto também será somado dessa constante.

         Receita Federal (Analista Tributário) Estatística                                            155
         www.estrategiaconcursos.com.br                                                               169

                                       


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Medidas de Dispersão

  1. LETRA B                                  2. LETRA B

                                                           ==219a34==

       Receita Federal (Analista Tributário) Estatística                  156
       www.estrategiaconcursos.com.br                                     169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                         LISTA DE QUESTÕES – INÉDITAS

Amplitude Total

1. (INÉDITA/2022) Uma pesquisa foi realizada em uma escola para avaliar o rendimento dos alunos do
terceiro ano. Nessa avaliação foram atribuídos valores de acordo com o rendimento dos alunos nos testes
aplicados pelos professores. A tabela de frequências abaixo mostra o resultado da pesquisa:

                                                   𝒙𝒊        nº de alunos

                                                   3                4

                                                   6               10

                                                   8               17

                                                   10              13

                                                   15               6

                                                 Total             50

De acordo com as informações da tabela a amplitude total é igual a:
a) 8
b) 10
c) 12
d) 4
e) 9

        Receita Federal (Analista Tributário) Estatística                                           157
        www.estrategiaconcursos.com.br                                                              169

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Amplitude Total

  1. LETRA C

                                                           ==219a34==

       Receita Federal (Analista Tributário) Estatística                  158
       www.estrategiaconcursos.com.br                                     169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                          LISTA DE QUESTÕES – INÉDITAS

Amplitude Interquartílica

1. (INÉDITA/2022) Denominamos de quartis os valores de uma série que a dividem em quatro partes iguais,
isto é, quatro partes contendo o mesmo número de elementos (25%). A respeito desse assunto, julgue as
assertivas e marque a opção correta:
( ) A amplitude interquartílica é o resultado da subtração entre o terceiro quartil e o primeiro quartil, sendo
expressa pela seguinte equação: 𝑨𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏
( ) Ao somar ou subtrair uma constante c a/de todos os valores de uma variável, a amplitude interquartílica
do conjunto também será somada dessa constante.
( ) O segundo quartil corresponde à separação de metade dos elementos da série, porém, esse valor não
coincide com a mediana.
( ) Ao multiplicar ou dividir todos os valores de uma variável por uma constante c, a amplitude
interquartílica do conjunto também será multiplicada ou dividida por essa constante.
a) V – V – F – V
b) V – V – F – F
c) V – F – F – V
d) F – F – V – V
e) F – V – V – F


2. (INÉDITA/2022) Considerando a distribuição de frequências abaixo marque a alternativa correta.
A distribuição dos salários em mil reais dos 100 funcionários de uma empresa está apresentada na tabela
abaixo:

                                         Salários (𝒙𝒊 )      Frequência absoluta

                                        2000 ⊢ 3000                  8

                                        3000 ⊢ 4000                  20

                                        4000 ⊢ 5000                  34

                                        5000 ⊢ 6000                  26

         Receita Federal (Analista Tributário) Estatística                                                 159
         www.estrategiaconcursos.com.br                                                                    169

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                       6000 ⊢ 7000                       12

                                            Total                        100

A amplitude interquartílica, dada pela diferença entre o terceiro e o primeiro quartil, é igual a:
a) R$ 2300,00
b) R$ 3500,00
c) R$ 1900,00
d) R$ 1650,00
e) R$ 1800,00
                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                                            160
        www.estrategiaconcursos.com.br                                                               169

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Amplitude Interquartílica

  1. LETRA C                                  2. LETRA D

       Receita Federal (Analista Tributário) Estatística                  161
       www.estrategiaconcursos.com.br                                     169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                           LISTA DE QUESTÕES – INÉDITAS

Desvio Absoluto Médio

1. (INÉDITA/2022) Em um curso preparatório para concursos, foi realizada uma pesquisa para identificar
as idades dos seus alunos. As idades estão distribuídas conforme a tabela de frequências abaixo:

                                             idades (𝒙𝒊 )      Nº de alunos (𝒇𝒊 )

                                               20 ⊢ 25                150

                                               25 ⊢ 30                380

                                               30 ⊢ 35                420

                                               35 ⊢ 40                150

                                                Total                1200

Com base na tabela, o desvio absoluto médio das idades dos alunos é:
a) 5,3
b) 6,2
c) 2,65
d) 4,8
e) 3,62


2. (INÉDITA/2022) Em um campeonato de basquete, a comissão organizadora fez um levantamento de
quantas cestas foram feitas por cada jogador. O resultado é apresentado na tabela de frequências abaixo:

                                          Nº de cestas
                                                              Nº de jogadores (𝒇𝒊 )
                                              (𝒙𝒊 )

                                                11                     5

                                                14                     6

                                                23                     4

          Receita Federal (Analista Tributário) Estatística                                          162
          www.estrategiaconcursos.com.br                                                             169

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                                                25                         3

                                               Total                       18

O desvio absoluto médio do número de cestas é de:
a) 5,33
b) 6,78
c) 5,2
d) 4,89
e) 3,55
                                                              ==219a34==

          Receita Federal (Analista Tributário) Estatística                     163
          www.estrategiaconcursos.com.br                                        169

                                        


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Desvio Absoluto Médio

  1. LETRA E                                  2. LETRA A

       Receita Federal (Analista Tributário) Estatística                  164
       www.estrategiaconcursos.com.br                                     169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                           LISTA DE QUESTÕES – INÉDITAS

Desvio-Padrão

1. (INÉDITA/2022) Em uma empresa de departamento, com 10 funcionários na área de vendas, as
quantidades vendidas por cada funcionário no mês foram:

                                     13 14 17 17 17 19 19 21 22 23

O desvio padrão das vendas foi igual a:
a) 4,01                                                       ==219a34==

b) 3,09
c) 3,50
d) 2,89
e) 5,2

          Receita Federal (Analista Tributário) Estatística                             165
          www.estrategiaconcursos.com.br                                                169

                                        


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Desvio-Padrão

  1. LETRA B

       Receita Federal (Analista Tributário) Estatística                  166
       www.estrategiaconcursos.com.br                                     169

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 04

                           LISTA DE QUESTÕES – INÉDITAS

Variância Relativa

1. (INÉDITA/2022) Seja uma amostra de candidatos que prestaram concurso para os cargos de assistente
e analista. Considere que a média de pontos da prova de analista é de 86 pontos, com desvio padrão de
36; e a média de pontos da prova de assistentes é de 95 pontos, com desvio padrão de 25. A variância
relativa de analistas supera a de assistentes em:
a) 0,1
b) 0,5
c) 0,7
d) 0,17
e) 0,3


2. (INÉDITA/2022) Considere uma população X com coeficiente de variação 0,3 e média aritmética igual a
35. E uma população Y com desvio padrão 25 e média aritmética igual a 49. A variância relativa da
população X mais a variância relativa da população Y é igual a:
a) 0,25
b) 0,40
c) 0,55
d) 0,28
e) 0,35


3. (INÉDITA/2022) Considere uma amostra de tamanho 15, com 270 sendo o somatório dos termos e que
tem coeficiente de variação igual a 0,5. A variância relativa dessa amostra é igual a:
a) 0,18
b) 0,50
c) 0,75
d) 0,35
e) 0,25

          Receita Federal (Analista Tributário) Estatística                                        167
          www.estrategiaconcursos.com.br                                                           169

                                        


---

 Equipe Exatas Estratégia Concursos
 Aula 04

                                  GABARITO – INÉDITAS

Variância Relativa

  1. LETRA A                                  2. LETRA E                  3. LETRA E

                                                           ==219a34==

       Receita Federal (Analista Tributário) Estatística                               168
       www.estrategiaconcursos.com.br                                                  169

                                     


---

---
