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
arquivo_origem: Aula 08_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: 08
titulo_aula: Estatística
---

# Estatística

Aula 07
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                            23 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 07

                                                                                     Índice
1) Introdução - Variáveis Aleatórias Discretas.


2) Noções Iniciais sobre Variáveis Aleatórias Discretas.


3) Variável Aleatória Discreta.


4) Medidas de Tendência Central.


5) Função de Distribuição Acumulada.


6) Variância e Desvio Padrão.


7) Covariância e Correlação.


8) Variância da Soma e da Diferença.


9) Coeficiente de Variação e Variância Relativa.


10) Questões Comentadas - Noções de Variáveis Aleatórias Discretas - FGV


11) Aviso importante - Orientação de estudo


12) Questões Comentadas - Noções de Variáveis Aleatórias Discretas - Inéditas


13) Lista de Questões - Noções de Variáveis Aleatórias Discretas - FGV


14) Lista de Questões - Noções de Variáveis Aleatórias Discretas - Inéditas

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          173

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Olá, amigo(a)! Espero que estejam ficando mais à vontade com Estatística!

Nesta aula, vamos estudar Variáveis Aleatórias Discretas. Veremos algumas definições e suas propriedades
que são moderadamente cobradas nas provas de concursos e te ajudam a entender melhor a aula de
Distribuições Discretas de probabilidade.

Vamos lá?

Luana Brandão

Quer me conhecer um pouquinho? Sou Doutora em Engenharia de Produção, pela Universidade Federal
Fluminense, e Auditora Fiscal da SEFAZ-RJ. Tornei-me professora de Estatística do Estratégia, para ajudá-lo(a)
na sua trajetória rumo à aprovação!

                               Se tiver alguma dúvida, entre em contato comigo!

              professoraluanabrandao@gmail.com

             @professoraluanabrandao

                                              “O sucesso é a soma de pequenos esforços repetidos dia após dia.”

                                                                                                 Robert Collier

        Receita Federal (Analista Tributário) Estatística                                                    3
        www.estrategiaconcursos.com.br                                                                      173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                       VARIÁVEIS ALEATÓRIAS DISCRETAS

Conceitos Iniciais

Introdução à Estatística Inferencial

Com esta aula, estamos iniciando os estudos em Estatística Inferencial ou Inferência Estatística, que é o
ramo da Estatística que nos ajuda a tirar conclusões a respeito de um todo (que chamamos de população) a
partir das observações feitas em uma parte dessa população (que chamamos de amostra). A inferência é
uma técnica importante, pois normalmente não é possível conhecer a informação exata (por exemplo,
altura, idade, salário, etc.) para toda a população.

Por exemplo, para conhecer a altura média dos brasileiros, os órgãos responsáveis por essa estatística NÃO
verificam a altura de TODOS os brasileiros para conhecer exatamente a sua média. Em vez disso, é
selecionada uma amostra de brasileiros, a partir da qual são feitas as medições necessárias. Por fim, com
base nessas medições da amostra, são feitos os cálculos necessários para tirar conclusões a respeito da
altura média da população de brasileiros.

Vamos destacar os seguintes conceitos do processo que acabamos de descrever:

   •   A característica numérica da população que se deseja conhecer (no nosso exemplo, a altura média
       da população de brasileiros) é chamada de parâmetro populacional;
   •   A medida correspondente feita na amostra (no caso, a altura média dos brasileiros da amostra
       selecionada) é chamada de parâmetro de estimativa ou estatística da amostra;
   •   As conclusões a respeito da população feitas a partir da amostra são chamadas de inferência.

As etapas desse processo de inferência estão representadas abaixo:


  Selecionar uma amostra                      Calcular a estatística da         Inferir o parâmetro
                                                      amostra                      populacional

Hoje, vamos começar a estudar a base que permeia o processo.

A inferência do parâmetro populacional não é uma informação exata, a qual seria obtida somente se toda a
população fosse verificada. Como os cálculos são feitos a partir de uma amostra, somente, os resultados vão
depender da amostra selecionada. Ou melhor, vão variar de acordo com a amostra. Por isso, dizemos que
as medidas obtidas a partir da amostra são variáveis aleatórias!

        Receita Federal (Analista Tributário) Estatística                                                4
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Variáveis Aleatórias

A definição de variável aleatória, ou simplesmente v.a., é uma função que associa um número real a cada
ponto amostral, isto é, a cada elemento do Espaço Amostral.

Com isso, passamos a ter uma caracterização numérica do resultado de um experimento ou fenômeno
aleatório.

Quando utilizamos o número 0 (zero) para representar a face CARA e o número 1 para representar a face
COROA, criamos justamente uma variável aleatória! Outro exemplo de variável aleatória é atribuir o número
indicado na face superior do dado {1,2,3,4,5,6} ao resultado do seu lançamento (o que é bastante comum).

Assim como os resultados dos experimentos e fenômenos que representam, os valores das variáveis
aleatórias também são incertos (variáveis que apresentam valores certos não são variáveis aleatórias).
Apesar dessa incerteza, os resultados das variáveis aleatórias apresentam certo padrão, o que torna possível
lhes atribuir probabilidades.

Por exemplo, se denotarmos a variável que representa o lançamento de uma moeda equilibrada por X, então
a probabilidade de termos X = 0 (o que equivale à probabilidade de obtermos a face CARA) é:

                                            𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 (𝐶𝐴𝑅𝐴)     1
                          𝑃(𝑋 = 0) =                                       =
                                         𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 (𝐶𝐴𝑅𝐴, 𝐶𝑂𝑅𝑂𝐴) 2

Note que mudamos um pouco a forma que escrevemos a probabilidade, pois agora estamos associando-a a
uma variável aleatória e não mais a um evento. Por isso, em vez de escrevê-la como P(A), para representar
o evento A, estamos utilizando a forma P(X = 0). Alternativamente, podemos utilizar a forma P(0).

Similarmente, a probabilidade de termos X = 1 (face COROA) é:

                                           𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 (𝐶𝑂𝑅𝑂𝐴)     1
                          𝑃(𝑋 = 1) =                                       =
                                         𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠 (𝐶𝐴𝑅𝐴, 𝐶𝑂𝑅𝑂𝐴) 2

Se denotarmos a variável que representa o resultado do lançamento de um dado equilibrado por Y, então a
probabilidade de termos Y = 1 é:

                                                   𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑓𝑎𝑣𝑜𝑟á𝑣𝑒𝑖𝑠 1
                                   𝑃(𝑌 = 1) =                            =
                                                    𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜𝑠 𝑝𝑜𝑠𝑠í𝑣𝑒𝑖𝑠   6

A probabilidade de qualquer outro resultado do dado é a mesma:

                 1                        1                       1                      1                1
   𝑃(𝑌 = 2) =              𝑃(𝑌 = 3) =               𝑃 (𝑌 = 4) =            𝑃 (𝑌 = 5) =       𝑃(𝑌 = 6) =
                 6                        6                       6                      6                6


        Receita Federal (Analista Tributário) Estatística                                                      5
        www.estrategiaconcursos.com.br                                                                        173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Nesses dois exemplos, as variáveis aleatórias são discretas, pois a quantidade de valores que elas podem
assumir é enumerável (isto é, contável). No caso da moeda, há 2 possíveis resultados; para o dado, há 6
possíveis resultados. Normalmente, os valores possíveis de uma variável discreta são números racionais.

        O conjunto dos números racionais (ℚ) engloba os números inteiros e decimais (finitos ou
        infinitos com dízima periódica), ou seja, todos os números que podem ser descritos em
        forma de fração.

        Não estão englobados os números irracionais (𝕀), isto é, os números infinitos sem dízima
                                                            ==219a34==

        periódica, como as constantes  = 3,1415... e o número neperiano e = 2,718...

        Juntos, os racionais e irracionais formam o conjunto dos números reais (ℝ).

Por outro lado, há variáveis aleatórias contínuas, cujos resultados não são enumeráveis. Essas podem
assumir quaisquer valores dentro de um intervalo (ou conjunto de intervalos), finito ou infinito. Por
exemplo, suponha que a variável Z represente a quantidade de água que um brasileiro ingere em um dia.
Assim, Z pode assumir qualquer valor maior ou igual a 0L.

Para variáveis contínuas, não atribuímos probabilidades aos seus resultados. Ou seja, não calculamos a
probabilidade de um brasileiro beber exatamente 2L de água em um dia, isto é, exatamente 2,000000...
litros, nem um milésimo de litro a mais nem a menos. Essa probabilidade é sempre nula.

No entanto, podemos atribuir probabilidades a um intervalo, por exemplo, entre 1,95L e 2,05L e mensurar
os resultados obtidos.

        Para variáveis contínuas, há infinitos valores possíveis. Porém, não é essa a característica
        que distingue os dois tipos de variável aleatória. Isso porque as variáveis discretas também
        podem assumir um número infinito de valores, desde que tais valores sejam enumeráveis.

        Por exemplo, suponha que uma variável aleatória represente o número de carros que
        chegam em um pedágio. Essa variável poderá assumir os valores 1, 2, 3, ... Não há um limite
        para a variável, pois sempre será possível chegar mais um carro. Portanto, há infinitos
        valores possíveis. Entretanto, esses valores são enumeráveis (contáveis), pois nunca
        aparecerá meio carro, ou qualquer outra parcela de carro.

        Receita Federal (Analista Tributário) Estatística                                               6
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 07

Em resumo, as Variáveis Aleatórias Discretas e Contínuas possuem as seguintes características:

   Variáveis Aleatórias       •   Quantidade de valores possíveis é enumerável (finito ou não)
        Discretas             •   Atribuímos probabilidades a resultados específicos


                              •   Assumem qualquer valor dentro de um intervalo
   Variáveis Aleatórias       •   Os resultados possíveis são infinitos e não enumeráveis
        Contínuas
                              •   Não atribuímos probabilidade a resultados específicos, apenas a intervalos

(CESPE/2005 – Secretaria de Educação/MG) A identificação do tipo de variável é um requisito importante
para a escolha do teste estatístico mais adequado. Acerca das variáveis, julgue o seguinte item.
Os valores das variáveis quantitativas discretas não podem ser contados, mas apenas mensurados.
Comentários:
Os valores das variáveis discretas podem ser contados, enquanto os valores das variáveis contínuas não
podem ser contados, apenas mensurados.
Gabarito: Errado.


(2017 – SEDUC/MT) Sobre as variáveis serem discretas ou contínuas, analise as afirmativas abaixo, dê valores
Verdadeiro (V) ou Falso (F).
( ) A contagem do número de alunos dentro de uma sala de aula só pode ser uma variável discreta, pois é
um número inteiro racional e positivo.
( ) A contagem da quilometragem de um corredor em uma pista circular é uma variável contínua, pois este
valor pode assumir qualquer valor dentro do intervalo real, no caso múltiplos de π (pi).
( ) O caso do termômetro analógico (de mercúrio), a variável representada nele é uma variável discreta, pois
aceita todos os valores intermediários entre duas temperaturas a e b.
Assinale a alternativa que traga, de cima para baixo, a sequência correta.
a) V, V, F
b) V, V, V
c) V, F, V
d) F, F, V
e) F, V, F
Comentários:

         Receita Federal (Analista Tributário) Estatística                                                      7
         www.estrategiaconcursos.com.br                                                                        173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação ao primeiro item, o número de alunos dentro de uma sala é, de fato, uma variável discreta, pois
os alunos podem ser enumerados. O número de alunos é um número racional e positivo. Portanto, a
afirmativa é verdadeira.
Em relação ao segundo item, a distância percorrida por um corredor é uma variável contínua, pois pode
assumir quaisquer valores reais, dentro de determinado intervalo, inclusive valores múltiplos de , por se
tratar de uma circunferência. Portanto, a afirmativa é verdadeira.
Em relação ao terceiro item, por aceitar todos os valores intermediários entre quaisquer duas temperaturas,
os resultados de um termômetro analógico correspondem uma variável contínua. Portanto, a afirmativa é
falsa.
Assim, a sequência correta é V, V, F.
Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                                8
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                          VARIÁVEL ALEATÓRIA DISCRETA
Aqui, trataremos apenas de variáveis aleatórias discretas. Como já sabemos, para essas variáveis, podemos
atribuir probabilidades a resultados específicos. É possível calcular a probabilidade de a face superior do
dado lançado ser especificamente igual a 1, por exemplo.

Ou seja, sendo 𝑥 um resultado possível para a variável 𝑋 (no nosso exemplo, temos 𝑥 = 1), então podemos
calcular a probabilidade de a variável 𝑋 assumir tal resultado, isto é, 𝑋 = 𝑥:

                                                      𝑃(𝑋 = 𝑥)

No lançamento de um dado, a probabilidade de obter a face 𝑋 = 1 (ou qualquer outra face) é:

                                                                  1
                                                    𝑃(𝑋 = 1) =
                                                                  6

Agora, vamos supor que tenhamos testado um medicamento em uma amostra de 100 pessoas, das quais 80
pessoas apresentaram melhora em seu quadro. Então, podemos representar os resultados obtidos pela
variável Y e dizer que Y = 1 representa o resultado de melhora e Y = 0 representa o resultado em que não
houve melhora. Assim, a probabilidade de ter Y = 1 é:

                                                               80
                                               𝑃 (𝑌 = 1) =        = 0,8
                                                              100

Em outras palavras, podemos definir a probabilidade dessa variável como:

                                                              𝑛 (𝑌 = 𝑦 )
                                               𝑃 (𝑌 = 𝑦 ) =
                                                                 𝑛(𝑈)

Em que 𝑛(𝑌 = 𝑦) representa a frequência do resultado 𝑌 = 𝑦 (nesse exemplo, calculamos a probabilidade
de Y = 1); e 𝑛(𝑈) representa a quantidade de todos os resultados possíveis.

Se estivéssemos observando os resultados em uma amostra, 𝑛(𝑌 = 𝑦) representaria o número de vezes em
que foi observado o resultado 𝑦; e 𝑛(𝑈) representaria o número total de observações da amostra, chamado
de tamanho amostral.

Chamamos essa função que atribui uma probabilidade a um resultado de uma variável aleatória discreta de
função de probabilidade.

        Receita Federal (Analista Tributário) Estatística                                                9
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Por se tratar de uma probabilidade, essa função satisfaz aos axiomas de probabilidade: 𝑷 ≥ 𝟎 e 𝑷(𝑼) = 𝟏.

        i)       𝑃(𝑋 = 𝑥) ≥ 0, pois não há probabilidade negativa;


        ii)      Somatório das probabilidades de todos os possíveis resultados é igual a 1, pois a
                 probabilidade de todo o Espaço Amostral é P(U) = 1.

Vimos que para o lançamento de um dado, a probabilidade de todos os resultados é:

                                                                                            1
              𝑃(𝑋 = 1) = 𝑃 (𝑋 = 2) = 𝑃 (𝑋 = 3) = 𝑃(𝑋 = 4) = 𝑃 (𝑋 = 5) = 𝑃 (𝑋 = 6) =
                                                                                            6

O que atende à primeira condição, por se tratar de um valor positivo. Para verificar a segunda condição,
somamos as probabilidades de todos os resultados:

               𝑃(𝑋 = 1) + 𝑃 (𝑋 = 2) + 𝑃(𝑋 = 3) + 𝑃 (𝑋 = 4) + 𝑃(𝑋 = 5) + 𝑃 (𝑋 = 6) =

                                          1 1 1 1 1 1 6
                                           + + + + + = =1
                                          6 6 6 6 6 6 6

No exemplo dos medicamentos, observamos que a frequência de pessoas que apresentaram melhora foi
𝑃 (𝑌 = 1) = 0,8. Então, para que o somatório de todos os possíveis resultados seja P(U) = 1, a frequência de
pessoas que não apresentaram melhora é:

                                  𝑃(𝑌 = 0) = 1 − 𝑃(𝑌 = 1) = 1 − 0,8 = 0,2

Assim, observamos que esse exemplo também atende às 2 condições da função de probabilidade, isto é,
todos os valores 𝑦 apresentam valores de probabilidade não negativos, 𝑃 (𝑌 = 𝑦) ≥ 0, e a soma das
probabilidades de todos os possíveis valores é P(U) = 1.

Em vez de apresentar resultados fixos, como os que acabamos de ver, a função de probabilidade 𝑃(𝑋 = 𝑥)
também pode ser definida como uma função do valor de 𝑥, como no exemplo a seguir.

        Receita Federal (Analista Tributário) Estatística                                                10
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        A função de probabilidade pode ser definida como:

                                                            2
                                        𝑃(𝑥 = 𝑖) = 3𝑥 para 𝑥 = 1, 2, 3, 4, ...

                                                            2       2
        Ou seja, para x = 1, temos: 𝑃(𝒙 = 𝟏) = 3𝟏 = 3

                                             2     2
        Para x = 2, temos: 𝑃(𝒙 = 𝟐) = 3𝟐 = 9

                                             2      2
        Para x = 3, temos: 𝑃(𝒙 = 𝟑) = 𝟑 =
                                             3     27


Para esse exemplo, podemos observar que os valores de probabilidade são positivos.

Para verificar a segunda propriedade, devemos observar que se trata de uma Progressão Geométrica infinita,
                 1                    2
com razão 𝑞 = 3 e termo inicial 𝐴1 = 3, cuja soma é dada por:

                                                     2     2
                                                𝐴1   3
                                          𝑆𝑛 =     =     = 3 =1
                                               1−𝑞 1−  1   2
                                                       3   3

Algumas questões fornecem a função de probabilidade com uma incógnita, que você deve calcular utilizando
essas propriedades.

        Vamos supor a seguinte função de probabilidade, para um valor de 𝑘 que ainda não
        conhecemos:
                                                                𝑥
                                         𝑃(𝑋 = 𝑥) = 𝑘 para 𝑥 = 1, 2, 3 e 4

        Ou seja, as probabilidades de X = 1, X = 2, X = 3 e X = 4 são:

                             𝟏                          𝟐                          𝟑                  𝟒
             𝑃 (𝑋 = 𝟏) = ,             𝑃 (𝑋 = 𝟐) = ,                    𝑃 (𝑋 = 𝟑) = ,   𝑃 (𝑋 = 𝟒) =
                            𝑘                           𝑘                          𝑘                  𝑘

        Receita Federal (Analista Tributário) Estatística                                                 11
        www.estrategiaconcursos.com.br                                                                    173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para descobrir o valor de 𝑘, devemos considerar que o somatório de todas as probabilidades é igual a 1:

                              𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) + 𝑃 (𝑋 = 4) = 1

                                                  1 2 3 4
                                                   + + + =1
                                                  𝑘 𝑘 𝑘 𝑘

                                               1 + 2 + 3 + 4 10
                                                            =   =1
                                                     𝑘        𝑘

                                                         𝑘 = 10

Agora, podemos conhecer todas as probabilidades:

                          1                           2                                  3                    4
            𝑃(𝑋 = 1) =       ,        𝑃 (𝑋 = 2) =        ,   ==219a34==

                                                                           𝑃 (𝑋 = 3) =      ,   𝑃 (𝑋 = 4) =
                          10                          10                                 10                   10

(2014 – Fundação João Pinheiro/MG) A fórmula P(x) = 3k/x representa a distribuição de probabilidade de
uma variável aleatória, para x = 1,7,9. Portanto P(1 ≤ x ≤ 7) é igual a
a) 27/237
b) 23/63
c) 1/3
d) 216/237
e) 210/23
Comentários:
Sabendo que a x pode assumir 1, 7 ou 9, a soma dessas probabilidades deve ser igual a 1:
                                      𝑃(𝑥 = 1) + 𝑃(𝑥 = 7) + 𝑃(𝑥 = 9) = 1
                                       3𝑘 3𝑘 3𝑘
                                          +   +   =1
                                        1   7   9
Sabendo que o MMC é 1 × 7 × 9 = 63, temos:
                     3𝑘 × 63 + 3𝑘 × 9 + 3𝑘 × 7 3𝑘 × (63 + 9 + 7) 3𝑘 × (79)
                                              =                 =          =1
                                63                      63          63
                                             3𝑘 × 79 = 63
                                                                          63
                                                        3𝑘 =
                                                                          79


         Receita Federal (Analista Tributário) Estatística                                                         12
         www.estrategiaconcursos.com.br                                                                            173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Portanto, a probabilidade de x é:
                                                             3𝑘    63
                                              𝑃 (𝑋 = 𝑥 ) =      =
                                                              𝑥   79. 𝑥
Agora, podemos calcular o valor de 𝑃(1 ≤ 𝑋 ≤ 7):
                                    𝑃(1 ≤ 𝑋 ≤ 7) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 7)
                                                          63    63
                                             𝑃(𝑋 = 1) =       =
                                                        79 × 1 79
                                                          63    9
                                             𝑃(𝑋 = 7) =       =
                                                        79 × 7 79
A soma será, portanto:
                                                   63 9       72
                                         𝑃 (1 ≤ 𝑋 ≤ 7) =
                                                      +    =
                                                   79 79 79
Multiplicando o numerador e o denominador desse resultado por 3, obtemos a resposta:
                                                               72 216
                                             𝑃(1 ≤ 𝑥 ≤ 7) =      =
                                                               79 237
Gabarito: D

O conjunto dos pares (𝑥, 𝑃(𝑋 = 𝑥)), isto é, o valor da variável e sua respectiva probabilidade, é chamado de
distribuição de probabilidade da variável.

Uma forma de representá-la é por meio de uma tabela, relacionando o valor da variável com a sua
probabilidade. A seguir, apresentamos a distribuição de probabilidade para o lançamento de um dado
equilibrado, em forma de tabela.


                                               𝒙𝒊               𝑷(𝑿 = 𝒙𝒊 )

                                                                    1
                                               𝟏
                                                                    6
                                                                    1
                                               𝟐
                                                                    6
                                                                    1
                                               𝟑
                                                                    6
                                                                    1
                                               𝟒
                                                                    6
                                                                    1
                                               𝟓
                                                                    6
                                                                    1
                                               𝟔
                                                                    6
                                        ∑ 𝑷(𝑿 = 𝒙𝒊 )                𝟏
                                         𝒊

        Receita Federal (Analista Tributário) Estatística                                                13
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Também é possível utilizar um gráfico de barras, com os valores da variável no eixo das abcissas (eixo
horizontal) e os respectivos valores de probabilidade no eixo das ordenadas (eixo vertical).

Por exemplo, vamos supor um dado viciado (não equilibrado), com a distribuição de probabilidades
apresentada no gráfico a seguir:

                                                Distribuição de Probabilidades
                                                         Dado Viciado
                             30%
                             25%
                             20%                                             25%   25%

                             15%                                   20%

                             10%                            15%

                               5%                  10%
                                       5%
                               0%
                                       1            2        3      4         5     6

Podemos observar que a distribuição de probabilidades de cada face do dado viciado, representada no
gráfico acima, corresponde à distribuição representada na tabela abaixo:

                                                  𝒙𝒊               𝑷(𝑿 = 𝒙𝒊 )
                                                   𝟏               5% = 0,05
                                                   𝟐              10% = 0,10
                                                   𝟑              15% = 0,15
                                                   𝟒              20% = 0,20
                                                   𝟓              25% = 0,25
                                                   𝟔              25% = 0,25
                                        ∑ 𝑷(𝑿 = 𝒙𝒊 )                     𝟏
                                            𝒊

Pontue-se que o gráfico de barras é diferente do histograma, ilustrado abaixo.

        Receita Federal (Analista Tributário) Estatística                                          14
        www.estrategiaconcursos.com.br                                                             173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O histograma apresenta uma distribuição de frequências para variáveis contínuas, como faixas de altura de
uma população, por exemplo; enquanto o gráfico de barras representa variáveis discretas.

Por isso, não há espaço entre as barras de um histograma, enquanto há espaço em um gráfico de barras.

         Dizemos que duas ou mais variáveis aleatórias são independentes e identicamente
         distribuídas (i.i.d. ou IID) se todas as variáveis forem mutuamente independentes entre si
         e tiverem a mesma distribuição de probabilidade, isto é, mesmos (𝑥𝑖 , 𝑃(𝑥𝑖 )).


Vamos supor, por exemplo, uma variável Y com a seguinte distribuição de probabilidades:

                                               𝒚𝒊              𝑷(𝒀 = 𝒚𝒊 )
                                               𝟏                  0,05
                                               𝟐                  0,10
                                               𝟑                  0,15
                                               𝟒                  0,20
                                               𝟓                  0,25
                                               𝟔                  0,25
                                        ∑ 𝑷(𝒀 = 𝒚𝒊 )                𝟏
                                         𝒊

Podemos observar que a variável X referente ao dado viciado e esta variável Y apresentam os mesmos
resultados possíveis {1, 2, 3, 4, 5, 6} e as mesmas probabilidades associadas a cada resultado possível: P(1) =
0,05; P(2) = 0,10; P(3) = 0,15; P(4) = 0,20; P(5) = 0,25 e P(6) = 0,25.

Portanto, podemos dizer que X e Y apresentam a mesma distribuição de probabilidade.

Assim, se X e Y forem independentes, concluímos que essas variáveis são independentes e identicamente
distribuídas (i.i.d.).

        Receita Federal (Analista Tributário) Estatística                                                   15
        www.estrategiaconcursos.com.br                                                                      173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(CESPE/2015 – Telecomunicações Brasileiras S.A.) Considerando que Y1, Y2, ..., Yn, ... sejam variáveis
aleatórias independentes que satisfazem P(Yj = j) = P(Yj = -j) = 1/2 para j = 1, 2, ..., julgue o item que se segue.
As variáveis aleatórias Y1, Y2, ..., Yn, ... são identicamente distribuídas.
Comentários:
Para Y1, temos:
                                                P(Y1 = 1) = P(Y1 = -1) = ½
Para Y2, temos:
                                                P(Y2 = 2) = P(Y1 = -2) = ½
O que segue indefinidamente. Para um Yn qualquer, temos:
                                                P(Yn = n) = P(Yn = -n) = ½
Ou seja, os valores de probabilidade são os mesmos, mas os valores que a variável assume (que normalmente
chamamos de 𝑥, mas o enunciado chamou de j), não são os mesmos. Portanto, as variáveis não são
identicamente distribuídas.
Gabarito: Errado.

         Receita Federal (Analista Tributário) Estatística                                                       16
         www.estrategiaconcursos.com.br                                                                         173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                        MEDIDAS DE TENDÊNCIA CENTRAL
Neste tópico, veremos três medidas de tendência central relevantes para distribuições de probabilidade,
quais sejam a esperança, a moda e a mediana. O objetivo dessas medidas é resumir a posição central das
variáveis aleatórias, no intuito de facilitar a análise dos seus resultados.


Esperança Matemática

A esperança matemática de uma variável corresponde ao seu valor médio, podendo ser chamada também
de expectância, valor esperado ou média.

Para ilustrar esse conceito, vamos supor que Maria enfrente trânsito de sua casa até o trabalho. Depois de
algum tempo fazendo esse trajeto, Maria terá alguma noção de quanto tempo ela costuma levar para chegar
no trabalho, isto é, uma média do tempo que ela leva.

Essa noção de quanto tempo se “costuma” ou se “espera” levar é justamente a esperança da variável. Neste
último exemplo, a esperança corresponde ao tempo médio que a pessoa leva de casa ao trabalho; e no
exemplo da altura dos brasileiros, a esperança corresponde à média de altura dos brasileiros.

Sendo 𝑋 uma variável aleatória, a sua esperança é indicada por 𝑬(𝑿) ou 𝝁𝑿 .

Para os exemplos dos lançamentos de moedas ou dados, em que os resultados são equiprováveis, a
esperança corresponde à média aritmética dos resultados. Assim, para o lançamento de uma moeda, com
faces 0 e 1, temos:

                                                            0+1
                                                 𝐸 (𝑋 ) =       = 0,5
                                                             2

Para o lançamento de um dado, com faces de 1 a 6, temos:

                                              1 + 2 + 3 + 4 + 5 + 6 21
                                   𝐸 (𝑌 ) =                        =   = 3,5
                                                        6            6

Contudo, no caso geral, para qualquer variável aleatória discreta, a esperança é calculada multiplicando-se
cada valor da variável pela sua respectiva probabilidade, e, em seguida, somando-se todos os resultados.

                                               𝑬(𝑿) = ∑ 𝒙. 𝑷(𝑿 = 𝒙)

        Receita Federal (Analista Tributário) Estatística                                               17
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Aplicando essa fórmula geral1 para a variável que representa o lançamento de uma moeda, em que
            1              1
𝑃 (𝑋 = 0) = e 𝑃(𝑋 = 1) = , temos:
                2                  2

                                                                     1    1 1
                                                𝐸 (𝑋 ) = 0 ×           +1× =
                                                                     2    2 2
                                                                                    1
Para o lançamento de um dado, em que todas as probabilidades são de 6, temos:

                                           1     1     1     1     1      1
                               𝐸 (𝑌 ) = 1 × + 2 × + 3 × + 4 × + 5 × + 6 ×
                                           6     6     6     6     6      6

                                                1 + 2 + 3 + 4 + 5 + 6 21
                                       𝐸(𝑌) =                        =   = 3,5
                                                          6            6

Podemos efetuar esse mesmo cálculo, a partir da tabela de distribuição de probabilidade, criando uma
coluna com o produto de 𝑥𝑖 e 𝑃(𝑥𝑖 ). Assim, a esperança corresponderá à soma de todas as linhas dessa
nova coluna.

                                          𝒙𝒊                   𝑷(𝒙𝒊 )         𝒙𝒊 . 𝑷(𝒙𝒊 )

                                          𝟏                     1⁄         1 × 1⁄6 = 1⁄6
                                                                  6
                                          𝟐                     1⁄         2 × 1⁄6 = 2⁄6
                                                                  6
                                          𝟑                     1⁄         3 × 1⁄6 = 3⁄6
                                                                  6
                                          𝟒                     1⁄         4 × 1⁄6 = 4⁄6
                                                                  6
                                          𝟓                     1⁄         5 × 1⁄6 = 5⁄6
                                                                  6
                                          𝟔                     1⁄         6 × 1⁄6 = 6⁄6
                                                                  6
                                       Soma das
                                                                   𝟏        𝑬(𝑿) = 𝟑, 𝟓
                                        Colunas

1
    A rigor, representamos o somatório junto a um índice 𝑖:
                                                               𝒏

                                                  𝐸(𝑋) = ∑ 𝑥𝒊 . 𝑃(𝑋 = 𝑥𝒊 )
                                                               𝒊=𝟏

Esse índice deixa claro que estamos somando para os diferentes valores de 𝒊, desde 𝒊 = 𝟏 até 𝑖 = 𝑛, ou seja, para
𝑥𝟏 , 𝑥𝟐 , … , 𝑥𝒏 .
Porém, nesta aula, daremos preferência à notação sem o índice, no intuito de simplificar a fórmula visualmente.


           Receita Federal (Analista Tributário) Estatística                                                      18
           www.estrategiaconcursos.com.br                                                                         173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

          Algumas questões fornecem uma tabela com vários cenários e estratégias possíveis, com
          os resultados e as probabilidades correspondentes; e pedem para você indicar a que resulta
          no maior valor esperado.

          No exemplo a seguir, temos 3 possíveis estratégias de negócio e os lucros associados a cada
          uma delas, considerando 3 possíveis cenários. A probabilidade de cada cenário também
          consta na tabela.

          Para escolher a estratégia associada ao maior lucro esperado, vamos calcular a esperança
          de cada estratégia, multiplicando o lucro de cada cenário pela respectiva probabilidade:

                 𝐸 (1) = 1000 × 30% + 600 × 50% − 100 × 20% = 300 + 300 − 20 = 580

                  𝐸 (2) = 800 × 30% + 500 × 50% + 200 × 20% = 240 + 250 + 40 = 530

                 𝐸 (3) = 500 × 30% + 500 × 50% + 500 × 20% = 150 + 250 + 100 = 500

          Assim, podemos concluir que a Estratégia 1 resulta no maior lucro esperado.

(2017 – Secretaria de Saúde/RO) Uma variável aleatória discreta X tem valores possíveis 0, 1, 2 e 3 com
probabilidades respectivamente iguais a 0,2, 0,4, 0,3 e 0,1. A média de X é igual a
a) 1,0.
b) 1,3.


          Receita Federal (Analista Tributário) Estatística                                             19
          www.estrategiaconcursos.com.br                                                                173

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 07

c) 1,5.
d) 1,8.
e) 1,9.
Comentários:
Vamos inserir as informações do enunciado na tabela de distribuição de probabilidade a seguir:

Assim, a esperança é a soma da última coluna:
                                            𝐸(𝑋) = 0 + 0,4 + 0,6 + 0,3 = 1,3
Gabarito: B.


(VUNESP/2019 – Prefeitura de Campinas/SP) Sabe-se que as probabilidades de um carro transportar 1, 2,
3, 4 ou 5 pessoas são de 0,05, 0,20, 0,40, 0,25 e 0,10, respectivamente. Se em uma cidade chegaram 400
carros, a estimativa de pessoas que chegaram é de
a) 1400.
b) 1600.
c) 1260.
d) 2000.
e) 1320
Comentários:
A estimativa do número de pessoas transportadas por carro corresponde à esperança dessa distribuição.
Inserindo as informações do enunciado na tabela de distribuição, temos:

           Receita Federal (Analista Tributário) Estatística                                       20
           www.estrategiaconcursos.com.br                                                          173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Assim, a esperança é a soma da última coluna:
                               𝐸 (𝑋) = 0,05 + 0,40 + 1,20 + 1,00 + 0,50 = 3,15
Logo, são transportadas, em média, 3,15 pessoas por carro. Sabendo que chegam 400 carros, então a
estimativa de pessoas é de:
                                                   400 x 3,15 = 1260
Gabarito: C


(FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte distribuição de
probabilidade:

O valor de K e o valor esperado de X são, respectivamente:
a) 0 e 3/4
b) 1/4 e 3/2
c) 1/2 e 3/4
d) 1/2 e 3/2
e) 1/2 e 9/4
Comentários:
Para resolver essa questão, o primeiro passo é calcular o valor de K, considerando que a soma das
probabilidades dos possíveis resultados é igual a 1 (probabilidade de todo o Espaço Amostral):
                              𝑃 (𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃 (𝑋 = 2) + 𝑃(𝑋 = 3) = 1
                                              1 1
                                                  0+
                                                + +𝐾=1
                                              4 4
                                              1
                                                +𝐾 = 1
                                              2
                                                     1 1
                                            𝐾 =1− =
                                                     2 2
E para calcular a esperança, somamos os produtos dos valores de x com as respectivas probabilidades

                                              𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

                                             1    1   1 1 1 3 1+2+6 9
                   𝐸 (𝑋 ) = 0 × 0 + 1 ×        +2× +3× = + + =     =
                                             4    4   2 4 2 2   4    4
Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                             21
        www.estrategiaconcursos.com.br                                                                173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(CESPE/2010 – Agência Brasileira de Inteligência) Sabendo que X é variável aleatória discreta que pode
assumir valores inteiros não negativos, julgue o próximo item.
A média de X é não negativa.
Comentários:
A média da variável é a soma dos produtos dos resultados pelas respectivas probabilidades:

                                                𝐸 (𝑋) = ∑ 𝑥. 𝑃(𝑋 = 𝑥)

Sabemos que a probabilidade é sempre maior ou igual a zero (condição necessária). Então, se os valores da
variável são não negativos, o produto de ambos será sempre maior ou igual a zero (não negativo).
Consequentemente, a média, que corresponde à soma desses valores será maior ou igual a zero.
Gabarito: Certo.


(CESPE/2015 – Telecomunicações Brasileiras S.A.) Considerando que Y1, Y2, ..., Yn, ... sejam variáveis
aleatórias independentes que satisfazem P(Yj = j) = P(Yj = -j) = 1/2 para j = 1, 2, ..., julgue o item que se segue.
O valor esperado para a variável aleatória Yj é nulo para todo número natural positivo j
Comentários:
Para ilustrar o cálculo da esperança para Yj, vamos primeiro calcular a esperança para j = 1 e j = 2.
Sabemos que para Y1, temos P(Y1 = 1) = P(Y1 = -1) = ½. Logo, a esperança de Y1 é:
                                           E(Y1) = -1 x ½ + 1 x ½ = -½ + ½ = 0
Para Y2, temos P(Y2 = 2) = P(Y1 = -2) = ½, então a esperança dessa variável é:
                                           E(Y2) = -2 x ½ + 2 x ½ = -1 + 1 = 0
Ou seja, para um Yj qualquer, temos P(Yj = j) = P(Yj = -j) = ½ e sua esperança é dada por:
                                                 E(Yj) = -j x ½ + j x ½ = 0
Logo, a esperança é nula para qualquer j = 1, 2, ...
Gabarito: Certo.

Propriedades da Esperança

Nesta seção, veremos propriedades da esperança. Vale adiantar que essas propriedades valem também
para a esperança de variáveis aleatórias contínuas.

Nos enunciados abaixo, consideramos 𝑋 e 𝑌 variáveis aleatórias e 𝑘 uma constante real qualquer.

       i)       𝑬(𝒌. 𝑿) = 𝒌. 𝑬(𝑿)

De acordo com essa propriedade, a esperança de uma variável aleatória X, cujos valores foram multiplicados
por uma constante k, é igual a k vezes a esperança da variável aleatória X.

         Receita Federal (Analista Tributário) Estatística                                                       22
         www.estrategiaconcursos.com.br                                                                         173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Podemos considerar, como exemplo, um grupo de funcionários com salários distintos, de modo que a média
seja R$ 5.000. Segundo essa propriedade, se os salários de todos os funcionários forem dobrados, então a
média também será dobrada (passará para R$ 10.000).

Mas vamos confirmar isso!

Digamos que os funcionários tenham os seguintes valores de salário, em mil reais:

                                           X = {1, 2, 2, 2, 3, 5, 7, 7, 10, 11}

Sorteando um desses 10 funcionários ao acaso, o valor esperado do salário do funcionário sorteado pode ser
calculado pela média aritmética de todos os 10 salários:

                                    1 + 2 + 2 + 2 + 3 + 5 + 7 + 7 + 10 + 11 50
                         𝐸 (𝑋 ) =                                          =    =5
                                                       10                    10

Duplicando os salários de todos os funcionários, temos:

                                      Y = 2.X = {2, 4, 4, 4, 6, 10, 14, 14, 20, 22}

Nesse caso, o valor esperado será:

                                2 + 4 + 4 + 4 + 6 + 10 + 14 + 14 + 20 + 22 100
                     𝐸 (𝑌 ) =                                             =    = 10
                                                    10                      10

        Também podemos multiplicar uma variável por uma constante e representar a distribuição
        resultante utilizando a tabela de distribuição de probabilidade.

        Para ilustrar, vamos considerar o mesmo exemplo dos salários. Considerando que há 10
        elementos no total, a tabela de distribuição para X é:

        Receita Federal (Analista Tributário) Estatística                                              23
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

         E a média (ou esperança) pode ser calculada como:

                                    1             3                1             1          2                 1            1
                  𝐸 (𝑋) = 1 × 10 + 2 × 10 + 3 × 10 + 5 × 10 + 7 × 10 + 10 × 10 + 11 × 10

                                              1        6       3        5    14       10    11           50
                                𝐸 (𝑋) = 10 + 10 + 10 + 10 + 10 + 10 + 10 = 10 = 5

         Para obter a tabela de distribuição de Y = 2X, duplicamos os valores da primeira coluna
         (referentes aos elementos da distribuição) e mantemos as mesmas probabilidades:

         Calculando a esperança de Y, observamos que ela é o dobro da esperança de X:

                                1             3                1                 1              2                 1            1
                 𝐸 (𝑌 ) = 2 ×        +4×           +6×             + 10 ×            + 14 ×          + 20 ×           + 22 ×
                                10            10           10                10                 10            10               10

                                          2           12   6           10   28       20    22           100
                              𝐸 (𝑋) = 10 + 10 + 10 + 10 + 10 + 10 + 10 = 10 = 10

A mesma propriedade vale quando dividimos a variável pela constante, isto é:

                                                             𝑿    𝑬(𝑿)
                                                           𝑬( ) =
                                                             𝒌     𝒌

Ou seja, se cada salário fosse dividido por 2, então a média também seria divida por 2: passaria de R$ 5.000
para R$ 2.500.

Na verdade, essa é a mesma propriedade da multiplicação, pois ao invés de pensarmos que estamos
                                                                 1
dividindo por 2, podemos pensar que estamos multiplicando por 𝑘 = .
                                                                                                    2

       ii)     𝑬(𝑿 + 𝒌) = 𝑬(𝑿) + 𝒌

A esperança de uma variável aleatória X, sendo esta somada a uma constante k, é igual a k mais a esperança
de X.

Ou seja, se todos os funcionários do nosso exemplo, cuja média salarial era de R$ 5.000, tiverem um aumento
de R$ 2.000, então a média desse grupo passará para R$ 7.000, segundo essa propriedade.


        Receita Federal (Analista Tributário) Estatística                                                                           24
        www.estrategiaconcursos.com.br                                                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Vamos verificar essa propriedade novamente. Sabendo que os salários originais eram X = {1, 2, 2, 2, 3, 5, 7,
7, 10, 11}, então, com um aumento de 2 mil reais, eles passarão a ser:

                                       Y = X + 2 = {3, 4, 4, 4, 5, 7, 9, 9, 12, 13}

Assim, a esperança será:

                                    3 + 4 + 4 + 4 + 5 + 7 + 9 + 9 + 12 + 13 70
                         𝐸 (𝑌 ) =                                          =    =7
                                                       10                    10

A mesma propriedade vale quando subtraímos a variável pela constante, isto é:

                                                𝑬(𝑿 − 𝒌) = 𝑬(𝑿) − 𝒌

Ou seja, se cada funcionário recebesse uma redução de R$ 2.000 do seu salário, então a média também seria
reduzida em R$ 2.000: passaria de R$ 5.000 para R$ 3.000.

Na verdade, essa é a mesma propriedade da adição, pois ao invés de pensarmos que estamos subtraindo 2,
podemos pensar que estamos somando k = -2.

       iii)    𝑬(𝑿 + 𝒀) = 𝑬(𝑿) + 𝑬(𝒀)

Por essa propriedade, temos que a esperança da soma de duas variáveis, X e Y, é igual à soma da esperança
de X com a esperança de Y.

Digamos que um grupo de homens receba um salário médio E(X) = 5.000; e que um grupo de mulheres
receba, em média, E(Y) = 4.000. Ao selecionar uma mulher e um homem, o valor do salário somado será, em
média:

                                    E(X + Y) = E(X) + E(Y) = 5.000 + 4.000 = 9.000

Para verificar essa propriedade, vamos utilizar um exemplo menor, pois envolve encontrar todas as possíveis
combinações dos elementos dos dois grupos e somá-los. Suponha, então, o experimento de lançamento de
duas moedas (X1 e X2), com faces representadas por 0 e 1.

Ao lançarmos ambas as moedas, temos os seguintes valores possíveis:

                                          (X1,X2) = {(0,0), (0,1), (1,0), (1,1)}

Ao somarmos esses valores, temos:

                                X1 + X2 = {(0 + 0), (0 + 1), (1 + 0), (1 + 1)} = {0,1,1,2}

A média é então:

                                                        0+1+1+2 4
                                      𝐸 (𝑋1 + 𝑋2 ) =           = =1
                                                           4    4

        Receita Federal (Analista Tributário) Estatística                                                25
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                                           1
Sabendo que o valor esperado dos dois lançamentos é E(X 1) = E(X2) = , então confirmamos que, de fato:
                                                                           2

                                                                         1 1
                                   𝐸 (𝑋1 + 𝑋2 ) = 𝐸(𝑋1 ) + 𝐸 (𝑋2 ) =      + =1
                                                                         2 2

A mesma propriedade vale para a subtração de variáveis:

                                           𝑬(𝑿𝟏 − 𝑿𝟐 ) = 𝑬(𝑿𝟏 ) − 𝑬(𝑿𝟐 )

       iv)     𝑬(𝒌) = 𝒌

Ou seja, o valor esperado de uma constante é igual à própria constante.

Digamos que em um grupo de funcionários, o salário individual de todos seja igual a k = 5 mil reais.
Selecionando um funcionário ao acaso, qual será o salário esperado? Certamente, 5 mil reais.

Também podemos obter esse resultado, a partir da fórmula da esperança. Sendo k = 5, então para um grupo
de n funcionários, a esperança é:

                                                             𝑛×5
                                                  𝐸 (𝑘 ) =       =5
                                                              𝑛

       v)      Se X e Y são independentes, então 𝑬(𝑿. 𝒀) = 𝑬(𝑿). 𝑬(𝒀)

Se X e Y são variáveis aleatórias independentes, então a esperança do produto de X e Y é igual ao produto
da esperança de X com a esperança de Y.

Supondo novamente o lançamento das duas moedas, em que (X1,X2) = {(0,0), (0,1), (1,0), (1,1)}. Assim, o
produto X1 x X2 corresponde ao conjunto:

                                                   X1 x X2 = {0,0,0,1}

A média de X1 x X2 é, portanto:

                                                            0+0+0+1 1
                                         𝐸(𝑋1 × 𝑋2 ) =             =
                                                               4     4
                                                                           1
Sabendo que o valor esperado dos dois lançamentos é E(X1) = E(X2) = , então, confirmamos que, de fato:
                                                                           2

                                                                         1 1 1
                                   𝐸 (𝑋1 × 𝑋2 ) = 𝐸(𝑋1 ) × 𝐸 (𝑋2 ) =      × =
                                                                         2 2 4

No entanto, para isso é essencial que as variáveis X e Y sejam independentes (como é o caso de lançamentos
distintos).

Por outro lado, é possível verificar a identidade E(X.Y) = E(X).E(Y) e as variáveis não serem independentes.
Ou seja, se as variáveis são independentes, então podemos concluir que E(X.Y) = E(X).E(Y); mas se E(X.Y) =
E(X).E(Y), não sabemos se as variáveis são ou não independentes.


        Receita Federal (Analista Tributário) Estatística                                                26
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

         i)        𝑬(𝒌𝑿) = 𝒌. 𝑬(𝑿)
         ii)       𝑬(𝑿 ± 𝒌) = 𝑬(𝑿) ± 𝒌
         iii)      𝑬(𝑿 ± 𝒀) = 𝑬(𝑿) ± 𝑬(𝒀)
         iv)       𝑬(𝒌) = 𝒌
         v)        Se X e Y forem independentes, então 𝑬(𝑿 × 𝒀) = 𝑬(𝑿) × 𝑬(𝒀)

Essas propriedades podem ser utilizadas conjuntamente e para qualquer número de variáveis aleatórias. Por
exemplo, sendo 𝑋, 𝑌 e 𝑍 variáveis aleatórias, então:

                                     𝑌                            𝑌
                         𝐸 (3. 𝑋 +     − 2. 𝑍 + 1) = 𝐸(3. 𝑋) + 𝐸 ( ) − 𝐸(2. 𝑍) + 𝐸 (1)
                                     4                            4

                                        𝑌                          𝐸 (𝑌 )
                            𝐸 (3. 𝑋 +     − 2. 𝑍 + 1) = 3. 𝐸 (𝑋) +        . −2. 𝐸 (𝑍) + 1
                                        4                            4

(2016 – Instituto Federal de Educação/BA – Adaptada) Sendo X uma variável aleatória, com média , então
a esperança matemática da função Y = a + bX, com a e b ∈ R, é
a) E(Y) = a + b
b) E(Y) = a
c) E(Y) = b
d) E(Y) = a + b
e) E(Y) = a2
Comentários:
Pelas propriedades da esperança, temos E(Y) = E(a + bx) = a +b.E(X). Como  = E(X), temos:
                                                      E(Y) = a + b.
Gabarito: D.

         Receita Federal (Analista Tributário) Estatística                                            27
         www.estrategiaconcursos.com.br                                                               173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(FGV/2017 – IBGE – Adaptada) Para o caso de variáveis aleatórias quaisquer, existem diversas propriedades
que se aplicam diretamente à esperança matemática. Dentre essas propriedades está:
a) E(X.Y) = E(X).E(Y)
b) E(X+a) = a
c) E(X±Y) = E(X) ± E(Y)
d) E(a.X) = E(X), sendo a uma constante qualquer
Comentários:
Em relação à alternativa A, podemos afirmar que E(X.Y) = E(X).E(Y) somente se X e Y forem independentes.
Como o enunciado não menciona que X e Y são independentes, então a alternativa A está incorreta.
Em relação à alternativa B, temos a seguinte propriedade da esperança:
                                                    E(X + a) = E(X) + a
Portanto, a alternativa B está incorreta.
Em relação à alternativa C, temos de fato a seguinte propriedade, para quaisquer variáveis aleatórias X e Y:
                                                  E(X + Y) = E(X) + E(Y)
                                                  E(X – Y) = E(X) – E(Y)
Portanto, a alternativa C está correta. Em relação à alternativa D, sabemos que: E(a.X) = a.E(X). Portanto, a
alternativa D está incorreta.
Resposta: C.

Moda

A moda de uma variável aleatória é o seu valor mais provável, isto é, o valor com maior probabilidade.

No exemplo de lançamento de duas moedas, X1 e X2, a soma das variáveis resulta no seguinte conjunto de
resultados possíveis:

                                                  X = X1 + X2 = {0,1,1,2}.

Assim, a probabilidade de cada resultado é:

                                                                1
                                                 𝑃(𝑋 = 0) =       = 0,25
                                                                4

                                                                2
                                                  𝑃(𝑋 = 1) =      = 0,5
                                                                4

                                                                1
                                                 𝑃(𝑋 = 2) =       = 0,25
                                                                4

Como a probabilidade de X = 1 é maior que as demais, então concluímos que a moda dessa variável é X = 1.


         Receita Federal (Analista Tributário) Estatística                                                28
         www.estrategiaconcursos.com.br                                                                  173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

No gráfico de barras que representa a distribuição de probabilidades de uma variável, a moda pode ser
identificada visualmente, pois estará associada à coluna mais alta, como representado abaixo.

                                                          X = X1 + X2
                                         0,6
                                         0,5
                                         0,4
                                         0,3
                                         0,2
                                         0,1
                                           0
                                                    0             1          2

        A moda é um valor da variável aleatória e não a sua probabilidade. Assim, no gráfico de
        barras, a moda estará no eixo horizontal.

Se estivermos lidando com uma amostra, a moda, chamada de moda amostral, corresponde ao valor da
variável obtido com maior frequência.

É possível haver mais de uma moda, quando a maior probabilidade estiver associada a mais de um
resultado.

No exemplo anterior do dado viciado, tanto a face 5 quanto a face 6 apresentavam a maior probabilidade,
de 25%.

                                               Distribuição de Probabilidades
                                                        Dado Viciado
                                  30%

                                  20%                                       25%   25%
                                                                      20%
                                  10%                       15%
                                            5%      10%
                                   0%
                                               1     2       3         4     5     6


Com 2 modas, a distribuição é chamada bimodal.

Uma distribuição trimodal apresenta 3 modas e uma distribuição multimodal apresenta múltiplas modas.


        Receita Federal (Analista Tributário) Estatística                                           29
        www.estrategiaconcursos.com.br                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Por outro lado, também é possível que uma distribuição não tenha moda, o que ocorre todos os resultados
da variável são equiprováveis, como é o caso do lançamento de uma moeda equilibrada e de um dado
equilibrado, como ilustrado abaixo.

                                             Distribuição de Probabilidades
                                                    Dado Equilibrado
                        20,0%
                        15,0%
                        10,0%
                         5,0%
                         0,0%
                                    1           2                        3   4     5   6


Nessa situação, a distribuição é dita amodal.
                                                            ==219a34==

Propriedades da Moda

Nesta seção, veremos propriedades da moda, sendo 𝑋 uma variável aleatória e 𝑘 uma constante real.

       i)      𝑴𝒐(𝒌. 𝑿) = 𝒌. 𝑴𝒐(𝑿)

Quando uma variável X é multiplicada por uma constante k, a sua moda é igual k vezes a moda de X.
Considerando o exemplo dos salários dos funcionários, se os salários dobram, a nova moda também será o
dobro da moda anterior.

Para ilustrar, vamos considerar novamente os seguintes valores de salário, em mil reais:

                                            X = {1, 2, 2, 2, 3, 5, 7, 7, 10, 11}

Podemos observar que a moda é igual a 2 mil reais. Duplicando os salários de todos os funcionários, temos:

                                         2.X = {2, 4, 4, 4, 6, 10, 14, 14, 20, 22}

E a nova moda é igual a 4 mil reais, que é o dobro da moda anterior.

A mesma propriedade vale quando dividimos a variável pela constante, isto é:

                                                        𝑿    𝑴𝒐(𝑿)
                                                    𝑴𝒐 ( ) =
                                                        𝒌     𝒌

Ou seja, se cada salário fosse dividido por 2, então a moda também seria dividida por 2: passaria de 2 mil
reais para mil reais.

        Receita Federal (Analista Tributário) Estatística                                              30
        www.estrategiaconcursos.com.br                                                                 173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

       ii)      𝑴𝒐(𝑿 + 𝒌) = 𝑴𝒐(𝑿) + 𝒌

Quando somamos uma constante k a uma variável X, a sua moda é acrescida da mesma constante k.

Em relação ao exemplo dos salários dos funcionários, se há um aumento de 3 mil reais no salário, a moda
também terá esse mesmo aumento: passará de 2 mil reais para 5 mil reais.

Para ilustrar, sabendo que os salários originais eram X = {1, 2, 2, 2, 3, 5, 7, 7, 10, 11}, com um aumento de 3
mil reais, eles passarão a ser:

                                       X + 2 = {4, 5, 5, 5, 6, 8, 10, 10, 13, 14}

Podemos observar que a nova moda é, de fato, de 5 mil reais.

A mesma propriedade vale quando subtraímos a variável pela constante, isto é:

                                             𝑴𝒐(𝑿 − 𝒌) = 𝑴𝒐(𝑿) − 𝒌

Ou seja, se cada funcionário recebesse uma redução de mil reais do seu salário, então a moda também seria
reduzida em mil reais: passaria de 2 mil reais para mil reais.

         i)      𝑴𝒐(𝒌. 𝑿) = 𝒌. 𝑴𝒐(𝑿)
         ii)     𝑴𝒐(𝑿 ± 𝒌) = 𝑴𝒐(𝑿) ± 𝒌

(FCC/2018 – Prefeitura de Macapá/AP – Adaptada) A medida de tendência central que representa o valor
com maior frequência na distribuição de uma amostra é a
a) média amostral.
b) variância.
c) amplitude total.
d) mediana.
e) moda amostral.
Comentários:


        Receita Federal (Analista Tributário) Estatística                                                   31
        www.estrategiaconcursos.com.br                                                                     173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A moda de uma amostra é o valor obtido com maior frequência.
Gabarito: E.


(CESPE/2015 – Agente do Departamento Penitenciário Nacional)

Considerando os dados da tabela mostrada, que apresenta a distribuição populacional da quantidade diária
de incidentes (N) em determinada penitenciária, julgue o item que se segue.
A moda da distribuição de N é igual a 4, pois esse valor representa a maior quantidade diária de incidentes
que pode ser registrada nessa penitenciária.
Comentários:
A moda é o valor com maior frequência relativa, que é igual a 0,5.
Essa frequência está associada a N = 2, então a moda é N = 2.
Gabarito: Errado.


(CESPE/2018 – Departamento de Polícia Federal)

Tendo em vista que, diariamente, a Polícia Federal apreende uma quantidade X, em kg, de drogas em
determinado aeroporto do Brasil, e considerando os dados hipotéticos da tabela precedente, que apresenta
os valores observados da variável X em uma amostra aleatória de 5 dias de apreensões no citado aeroporto,
julgue o próximo item.
A moda da distribuição dos valores X registrados na amostra foi igual a 22 kg.
Comentários:
A moda de uma amostra é o valor obtido com maior frequência. No caso, foram apreendidos 22kg em 2 dias,
enquanto as demais quantidades foram apreendidas em um único dia somente.
Gabarito: Certo

        Receita Federal (Analista Tributário) Estatística                                               32
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Mediana

A mediana de uma variável é o valor que divide a distribuição em duas partes com mesma probabilidade,
de modo que a probabilidade dos valores menores ou iguais à mediana é igual a 50% e a probabilidade dos
valores maiores ou iguais à mediana é igual a 50%.
Para ilustrar, o gráfico replicado a seguir representa a distribuição de probabilidades do dado viciado que
vimos anteriormente.

                                               Distribuição de Probabilidades
                                                        Dado Viciado
                                  30%

                                  20%                                        25%    25%
                                                                       20%
                                  10%                       15%
                                            5%      10%
                                   0%
                                               1     2       3          4     5      6


Podemos observar que a mediana está entre X = 4 e X = 5, pois a probabilidade associada aos valores menores
ou iguais a 4 é de 50% e a probabilidade associada aos valores maiores ou iguais a 5 é igual a 50%.
Por convenção, quando a mediana está entre 2 valores, consideramos a média aritmética desses valores:
                                                            4+5
                                                    𝑀𝑑 =        = 4,5
                                                             2


Agora, vamos considerar o exemplo em que somamos os resultados do lançamento de duas moedas,
conforme o gráfico replicado a seguir:

                                                          X = X1 + X2
                                         0,6
                                         0,5
                                         0,4                     0,5
                                         0,3
                                         0,2
                                                   0,25                      0,25
                                         0,1
                                           0
                                                    0             1           2


Neste caso, temos 25% menor que 1 e 75% menor ou igual a 1; por outro lado, também temos 25% maior
que a e 75% maior ou igual a 1. Ainda assim, a mediana será igual a 1. Afinal, não faz sentido ela ser igual a
0 e nem igual a 2.
Então, vamos ajustar a definição: a probabilidade dos valores menores ou iguais à mediana é de pelo menos
50%; e a probabilidade dos valores são maiores ou iguais à mediana também é de pelo menos 50%.

        Receita Federal (Analista Tributário) Estatística                                                  33
        www.estrategiaconcursos.com.br                                                                    173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Propriedades da Mediana

As propriedades da mediana que veremos nesta seção são as mesmas das propriedades da moda que vimos
anteriormente.

       i)      𝑴𝒅(𝒌. 𝑿) = 𝒌. 𝑴𝒅(𝑿)

Quando uma variável X é multiplicada por uma constante k, a sua mediana é igual k vezes a mediana de X.

Considerando o exemplo dos salários dos funcionários, se os salários dobram, a nova mediana também será
o dobro da mediana anterior.

Para ilustrar, vamos considerar o mesmo exemplo dos salários, mas agora vamos analisar a tabela de
distribuição de probabilidade da variável X = {1, 2, 2, 2, 3, 5, 7, 7, 10, 11}:

                                                      X     P(X = x)
                                                       1     10%
                                                       2     30%
                                                       3     10%
                                                       5     10%
                                                       7     20%
                                                      10     10%
                                                      11     10%

Podemos observar que a mediana está entre 3 e 5, pois 50% dos valores são menores ou iguais a 3 e 50%
dos valores são maiores ou iguais a 5, de modo que a mediana é, por convenção:

                                                             3+5
                                                 𝑀𝑑(𝑋) =         =4
                                                              2

Duplicando os salários de todos os funcionários, temos s seguinte tabela de distribuição de probabilidade:

                                                     2.X    P(X = x)
                                                      2      10%
                                                      4      30%
                                                      6      10%
                                                     10      10%
                                                     14      20%
                                                     20      10%
                                                     22      10%

Agora, a mediana está entre 6 e 10, pois 50% dos valores são menores ou iguais a 6 e 50% dos valores são
maiores ou iguais a 10, de modo que a nova mediana é:

                                                             6 + 10
                                               𝑀𝑑(2. 𝑋) =           =8
                                                               2
Que é o dobro da mediana anterior.


        Receita Federal (Analista Tributário) Estatística                                               34
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A mesma propriedade vale quando dividimos a variável pela constante, isto é:

                                                      𝑿    𝑴𝒅(𝑿)
                                                  𝑴𝒅 ( ) =
                                                      𝒌     𝒌

Ou seja, se cada salário fosse dividido por 2, então a mediana também seria dividida por 2: passaria de 4 mil
reais para 2 mil reais.

       ii)     𝑴𝒅(𝑿 + 𝒌) = 𝑴𝒅(𝑿) + 𝒌

Quando somamos uma constante k a uma variável X, a sua mediana é acrescida da mesma constante k.

Em relação ao exemplo dos salários dos funcionários, se há um aumento de 3 mil reais no salário, a mediana
também terá esse mesmo aumento: passará de 4 mil reais para 7 mil reais. Vejamos:

                                                    X+3     P(X = x)
                                                      4      10%
                                                      5      30%
                                                      6      10%
                                                      8      10%
                                                     10      20%
                                                     13      10%
                                                     14      10%

E a nova mediana está entre 6 e 8:

                                                              6+8
                                              𝑀𝑑(𝑋 + 3) =         =7
                                                               2

A mesma propriedade vale quando subtraímos a variável pela constante, isto é:

                                             𝑴𝒐(𝑿 − 𝒌) = 𝑴𝒐(𝑿) − 𝒌

Ou seja, se cada funcionário recebesse uma redução de mil reais do seu salário, então a mediana também
seria reduzida em mil reais: passaria de 4 mil reais para 3 mil reais.

         i)      𝑴𝒅(𝒌. 𝑿) = 𝒌. 𝑴𝒅(𝑿)
         ii)     𝑴𝒅(𝑿 ± 𝒌) = 𝑴𝒅(𝑿) ± 𝒌

        Receita Federal (Analista Tributário) Estatística                                                 35
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(CESPE/2020 – ME) Considerando que R representa uma variável quantitativa cuja média, mediana e
                                                                 𝑅
variância são, respectivamente, iguais a 70, 80 e 100, e que 𝑈 = 10 − 7, julgue o próximo item, acerca das
variáveis U e R.
A mediana de U é negativa.
Comentários:
                                                                           𝑅
De acordo com as propriedades da mediana que vimos, a mediana de 𝑈 = 10 − 7 é dada por:
                                             𝑅          𝑀𝑑(𝑅)
                                          𝑀𝑑 (𝑈) =
                                                −7=           −7
                                            10            10
O enunciado informa que a mediana de R é Md(R) = 80, logo a mediana de U é:
                                                       80
                                           𝑀𝑑(𝑈) =        −7=8−7=1
                                                       10
Ou seja, a mediana é positiva.
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                              36
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                  FUNÇÃO DE DISTRIBUIÇÃO ACUMULADA
A função de distribuição acumulada de uma variável aleatória (ou simplesmente f.d.a ou função de
distribuição) apresenta a probabilidade acumulada de todos os valores menores ou iguais a determinado
valor 𝑥.

                                                  𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)

Ou seja, equivale à soma de todas as probabilidades menores ou iguais ao valor 𝑥.

Por exemplo, no experimento de lançar um dado, a probabilidade de cada uma das faces, numeradas de 1 a
    1
6, é . Assim, o valor da função de distribuição acumulada para X = 1 equivale à probabilidade de X = 1, uma
    6
vez que não há valor menor:

                                                                           1
                                       𝐹 (1) = 𝑃(𝑋 ≤ 1) = 𝑃(𝑋 = 1) =
                                                                           6

Para X = 2, a f.d.a. corresponde à soma das probabilidades de X = 1 e de X = 2:

                                  𝐹 (2) = 𝑃(𝑋 ≤ 2) = 𝑃 (𝑋 = 1) + 𝑃 (𝑋 = 2)

                                                             1 1 2
                                                 𝐹(2) =       + =
                                                             6 6 6

Para X = 3, temos a soma das probabilidades de X = 1, X = 2 e X = 3:

                           𝐹 (3) = 𝑃 (𝑋 ≤ 3) = 𝑃 (𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃 (𝑋 = 3)

                                                            1 1 1 3
                                               𝐹(3) =        + + =
                                                            6 6 6 6

E assim sucessivamente.

Alternativamente, podemos somar a probabilidade no ponto 𝒙 à função de distribuição acumulada no
ponto anterior. Dessa forma, a função de distribuição acumulada para X = 3 é calculada como:

                                                                           1 2 3
                             𝐹 (3) = 𝑃(𝑋 ≤ 3) = 𝑷(𝑿 = 𝟑) + 𝑭(𝟐) =           + =
                                                                           6 6 6


        Receita Federal (Analista Tributário) Estatística                                               37
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para X = 4, temos:

                                                                            1 3 4
                              𝐹 (4) = 𝑃(𝑋 ≤ 4) = 𝑷(𝑿 = 𝟒) + 𝑭(𝟑) =           + =
                                                                            6 6 6

E assim por diante.

Também podemos calcular os valores da f.d.a., incluindo uma nova coluna na tabela da distribuição de
probabilidade. Para preenchê-la, basta somarmos o valor da função acumulada acima (valor de X anterior),
com o valor da probabilidade da linha em questão (valor de X atual), como ilustrado pelas setas para F(3).

                                 𝒙                  𝑷(𝑿 = 𝒙)          𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)

                                 𝟏                      1⁄                   1⁄
                                                          6                    6
                                 𝟐                      1⁄                   2⁄
                                                          6                    6
                                 𝟑                      1⁄                   3⁄
                                                          6                    6
                                 𝟒                      1⁄                   4⁄
                                                          6                    6
                                 𝟓                      1⁄                   5⁄
                                                          6                    6
                                 𝟔                      1⁄                   6⁄
                                                          6                    6

Algumas questões de prova apresentariam essa f.d.a. da seguinte forma:

                                                        0, 𝑠𝑒 𝑥 < 1
                                                     1⁄ , 𝑠𝑒 1 ≤ 𝑥 < 2
                                                       6
                                                     1⁄ , 𝑠𝑒 2 ≤ 𝑥 < 3
                                                       3
                                                     1
                                            𝐹 (𝑥 ) = ⁄2 , 𝑠𝑒 3 ≤ 𝑥 < 4
                                                     2⁄ , 𝑠𝑒 4 ≤ 𝑥 < 5
                                                       3
                                                     5⁄ , 𝑠𝑒 5 ≤ 𝑥 < 6
                                                       6
                                                    { 1, 𝑠𝑒 𝑥 ≥ 6 }

Também podemos calcular a função de distribuição acumulada para uma amostra, chamada de distribuição
amostral ou empírica acumulada. Nessa situação, substituímos as probabilidades pelas frequências
relativas observadas na amostra.

De maneira geral, a função acumulada de uma variável aleatória 𝑋 (discreta ou contínua) apresenta as
seguintes características:

   i)       𝐹 é não decrescente, porque as probabilidades são sempre somadas.

   ii)      Por ser uma probabilidade, a f.d.a. também assume valores somente entre 0 e 1:

                                                       𝟎 ≤ 𝑭(𝒙) ≤ 𝟏

         Receita Federal (Analista Tributário) Estatística                                             38
         www.estrategiaconcursos.com.br                                                                173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        A função de distribuição acumulada 𝑭(𝒙) é definida em toda a reta real, ou seja, ela pode
        ser calculada para qualquer valor de 𝒙.

Isso significa que a função de distribuição não assume valores apenas nos pontos dos possíveis resultados
da variável. Utilizando o mesmo exemplo do dado, podemos calcular o valor da função de distribuição em
outros pontos diferentes de X = 1, X = 2, X = 3, ..., X = 6.

Por exemplo, para X = 0,5, a f.d.a. corresponde à soma das probabilidades de todos os valores menores ou
iguais a 0,5. Como o menor valor possível é X = 1, então a probabilidade acumulada até X = 0,5 é nula:

                                             𝐹 (0,5) = 𝑃(𝑋 ≤ 0,5) = 0

        De forma geral, podemos dizer que, para os valores de x menores que o menor valor
        possível da variável (no exemplo do dado, para x < 1), o valor da f.d.a. é 𝑭(𝒙) = 𝟎.

Para X = 8,1, a f.d.a. corresponde à soma das probabilidades de todos os valores menores ou iguais a 8,1.
Como o maior valor possível é X = 6, então a probabilidade acumulada até X = 8,1 é igual à probabilidade
acumulada até X = 6, isto é, à probabilidade de todo o Espaço Amostral:

                                     𝐹 (8,1) = 𝑃(𝑋 ≤ 8,1) = 𝑃 (𝑋 ≤ 6) = 1

        De forma geral, podemos dizer que, para os valores de x maiores ou iguais ao maior valor
        possível da variável (no caso do dado, para 𝑥 ≥ 6), o valor da f.d.a. é 𝑭(𝒙) = 𝟏.

Para X = 4,7, a f.d.a. corresponde à soma das probabilidades de todos os valores menores ou iguais a 4,7.
Como as faces do dado são valores inteiros, a probabilidade acumulada até X = 4,7 é igual à probabilidade
acumulada até X = 4:

                                                                           4
                                     𝐹 (4,5) = 𝑃(𝑋 ≤ 4,5) = 𝑃 (𝑋 ≤ 4) =
                                                                           6

Similarmente, para X = 5,3, a f.d.a. corresponde à probabilidade acumulada até X = 5:

                                                                           5
                                     𝐹 (5,3) = 𝑃(𝑋 ≤ 5,3) = 𝑃 (𝑋 ≤ 5) =
                                                                           6

        A f.d.a. pode ser calculada para qualquer valor de x, mas os seus valores serão alterados
        somente nos pontos dos possíveis resultados da variável.

        Receita Federal (Analista Tributário) Estatística                                             39
        www.estrategiaconcursos.com.br                                                                173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para o nosso exemplo do dado, os valores da f.d.a. serão alterados somente para X = 1, X = 2, X = 3, ..., X = 6.
Veja, no gráfico abaixo, como a f.d.a. dá saltos para esses valores de x.

                                           100%

                                          83,33%

                                          66,67%

                                          50,00%

                                          33,33%

                                          16,67%

                                           0,00%
                                     -1        0   1       2   3   4       5    6   7       8


O tamanho de cada “salto” no gráfico da f.d.a. corresponde à probabilidade em cada ponto 𝑥. Nesse
exemplo, os “saltos” são todos iguais, pois os valores de 𝑋 são todos equiprováveis.

Para o exemplo do dado viciado, temos a seguinte f.d.a.:

                                          𝒚            𝑷(𝒀 = 𝒚)            𝑭(𝒚) = 𝑷(𝒀 ≤ 𝒚)
                                          𝟏              0,05                    0,05
                                          𝟐              0,10                    0,15
                                          𝟑              0,15                    0,30
                                          𝟒              0,20                    0,50
                                          𝟓              0,25                    0,75
                                          6              0,25                    1,00

Assim, o gráfico da f.d.a. para o dado viciado é:


                               1,0

                               0,9

                               0,8

                               0,7

                               0,6

                               0,5

                               0,4

                               0,3

                               0,2

                               0,1


                                0             1        2       3       4       5        6

Observe que os “saltos” apresentam tamanhos diferentes, uma vez que as probabilidades não são todas
iguais.

        Receita Federal (Analista Tributário) Estatística                                                    40
        www.estrategiaconcursos.com.br                                                                      173

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Sabendo que esses "saltos" representam as diferenças da função acumulada em cada ponto, é possível
percorrer o caminho inverso, ou seja, calcular a probabilidade 𝑃(𝑋 = 𝑥) de cada ponto, pela diferença entre
o valor da f.d.a. no ponto e o valor da f.d.a. no ponto anterior.

Por exemplo, para um dado equilibrado, a probabilidade da face 𝑋 = 4 pode ser calculada pela diferença
entre os valores da f.d.a. nos pontos X = 4 e X = 3:

                                                                    4 3 1
                                     𝑃 (𝑋 = 4) = 𝐹 (4) − 𝐹 (3) =     − =
                                                                    6 6 6

Para o nosso exemplo do dado viciado, temos:

                                  𝑃(𝑌 = 4) = 𝐹 (4) − 𝐹 (3) = 0,5 − 0,3 = 0,2

É possível calcular, ainda, a probabilidade de um intervalo de valores, a partir da f.d.a. Para o nosso exemplo
do dado equilibrado, a probabilidade do intervalo 𝑃(2 < 𝑋 ≤ 5) pode ser calculada pela diferença entre a
f.d.a. para x = 5 e a f.d.a. para x = 2:

                                                                      5 2 3
                                  𝑃(2 < 𝑋 ≤ 5) = 𝐹 (5) − 𝐹 (2) =       − =
                                                                      6 6 6

Mas, para isso, é importante verificar se a igualdade está ou não contemplada em cada extremo do intervalo.
A diferença entre a f.d.a. no ponto X = 5 e a f.d.a. no ponto X = 2 fornece a probabilidade de a face do dado
ser maior que 2 e menor ou igual a 5.

                           𝐹 (5) − 𝐹 (2) = 𝑃 (𝑋 ≤ 5) − 𝑃 (𝑋 ≤ 2) = 𝑃 (2 < 𝑋 ≤ 5)

Isso porque, no ponto X = 5, a f.d.a. contempla a probabilidade para todo valor menor ou igual a 5 e no ponto
X = 2, ela contempla a probabilidade para todo valor menor ou igual a 2. Logo, quando subtraímos esta da
primeira, teremos a probabilidade de todo valor menor ou igual a 5 e maior que 2.

         De maneira geral, para 𝑎 < 𝑏, temos:

                                           𝑭(𝒃) − 𝑭(𝒂) = 𝑷(𝒂 < 𝑿 ≤ 𝒃)

Se precisarmos de um intervalo de uma forma diferente, precisaremos adaptá-lo para que fique dessa forma.

        Receita Federal (Analista Tributário) Estatística                                                   41
        www.estrategiaconcursos.com.br                                                                     173

                                      


---

Equipe Exatas Estratégia Concursos
Aula 07

      Se o extremo inferior estiver contemplado no intervalo, ou seja, se o intervalo for:

                                                   𝑃(𝑎 ≤ 𝑋 ≤ 𝑏)

      fazemos a adaptação buscando um valor menor que 𝑎 como novo extremo inferior, o qual
      não estará contemplado no novo intervalo.

      No exemplo do dado, se a face 2 estiver contemplada no intervalo, ou seja, se o intervalo
      for 2 ≤ 𝑋 ≤ 5, então fazemos a adaptação, subtraindo 1 unidade do extremo inferior, o
                                                          ==219a34==

      qual será 2 – 1 = 1:

                               𝑃(2 ≤ 𝑋 ≤ 5) = 𝑃(1 < 𝑋 ≤ 5) = 𝐹 (5) − 𝐹(1)

                                                                       5   1   4
                                           𝑃(2 ≤ 𝑋 ≤ 5) = 6 − 6 = 6

      Por outro lado, se extremo superior não estiver contemplado no intervalo, ou seja, se o
      intervalo for 𝑎 < 𝑋 < 𝑏, então fazemos a adaptação buscando um valor menor que 𝑏 como
      novo extremo superior, o qual estará contemplado no novo intervalo.

      Por exemplo, se a face 5 não estiver contemplada, ou seja, se o intervalo for 2 < 𝑋 < 5,
      fazemos a adaptação, subtraindo 1 unidade do extremo superior, o qual será 5 – 1 = 4:

                               𝑃(2 < 𝑥 < 5) = 𝑃 (2 < 𝑥 ≤ 4) = 𝐹(4) − 𝐹(2)
                                                                       4   2   2
                                           𝑃(2 < 𝑥 < 5) = 6 − 6 = 6

      Se o intervalo for da forma 𝑎 ≤ 𝑥 < 𝑏, faremos as duas adaptações, ou seja, buscamos um
      valor menor que 𝑎 e um valor menor que 𝑏:

                                                                                   4   1   3
                       𝑃(2 ≤ 𝑥 < 5) = 𝑃 (1 < 𝑋 ≤ 4) = 𝐹 (4) − 𝐹 (1) = 6 − 6 = 6

      Receita Federal (Analista Tributário) Estatística                                           42
      www.estrategiaconcursos.com.br                                                              173

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 07

(FGV/2018 – ALERO) Uma variável aleatória discreta X tem função de probabilidade dada por:

Se F(x) representa a função de distribuição de X, ∀ x real, então F(-0,8) é igual a
a) 0,3.
b) 0,4.
c) 0,5.
d) 0,6.
e) 1,0.
Comentários:
A função acumulada F(-0,8) corresponde à probabilidade P(X ≤ -0,8), que nesse caso é igual à soma das
probabilidades P(X = –2) + P(X = –1):
                   𝐹 (−0,8) = 𝑃(𝑋 ≤ −0,8) = 𝑃(𝑋 = −2) + 𝑃(𝑋 = −1) = 0,1 + 0,2 = 0,3
Gabarito: A


(FGV/2015 – TJ/RO) A função distribuição de probabilidade acumulada da variável “número de anos de
experiência de magistrados” de um dado tribunal é dada por:

Então, a probabilidade de que um magistrado escolhido ao acaso tenha experiência maior do que cinco anos
e menor ou igual a 15 anos é igual a:
a) 0,39.
b) 0,45.
c) 0,48.
d) 0,57.
e) 0,61.
Comentários:
A probabilidade de P(5 < X ≤ 15) é igual à diferença entre os valores da função acumulada F(15) – F(5), uma
vez que o intervalo não precisa ser adaptado, pois o extremo superior está contemplado e o inferior, não:
              𝑃(5 < 𝑋 ≤ 15) = 𝑃(𝑋 ≤ 15) − 𝑃(𝑋 ≤ 5) = 𝐹 (15) − 𝐹 (5) = 0,69 − 0,30 = 0,39
Gabarito: A


           Receita Federal (Analista Tributário) Estatística                                            43
           www.estrategiaconcursos.com.br                                                               173

                                         


---

    Equipe Exatas Estratégia Concursos
    Aula 07

(FGV/2017 – MPE/BA) Considere a variável aleatória do tipo discreta(X), relativa às fases de andamento de
um processo podendo assumir apenas três valores numéricos 1, 2 ou 3, conforme o mesmo esteja em
conhecimento, liquidação ou execução, respectivamente. Se F(.) é a função distribuição acumulada
correspondente, com F(1,17) = 0,15 e F(2,76) = 0,45. Então é verdadeiro que
a) P(X > 1,9) = 0,75 e P(X < 2,5) = 0,60.
b) P(X < 2,70) < 0,45 e P(X > 1,5) = 0,85.
c) P(X = 1) = 0,15 e P(X = 2) = 0,30.
d) P(X = 3) = 0,55 e E(X) = 2,70.
e) P(1,44 < X < 3) = 0,85 e Mo(X) = 3.
Comentários:
O enunciado informa que há apenas três valores possíveis: X = 1, X = 2 ou X = 3.
Para conhecermos as probabilidades de cada valor, o enunciado informa os valores que a função de
distribuição acumulada assume:
•    F(1,17) = P(X ≤ 1,17) = 0,15.
     O único valor menor ou igual a 1,17 é o valor X = 1. Ou seja:
                                               P(X ≤ 1,17) = P(X = 1) = 0,15
     Assim, concluímos que:
                                                       P(X = 1) = 0,15


•    F(2,76) = P(X ≤ 2,76) = 0,45.
     Os valores menores ou iguais a 2,76 são X = 1 e X = 2, ou seja:
                                         P(X ≤ 2,76) = P(X = 1) + P(X = 2) = 0,45
     Sabemos que P(X = 1) = 0,15, logo:
                                           P(X ≤ 2,76) = 0,15 + P(X = 2) = 0,45
                                                       P(X = 2) = 0,30


Isso nos permite concluir que a alternativa C está correta, mas vejamos as demais alternativas.
Em relação à alternativa A, o valor de P(X > 1,79) pode ser calculado como:
                             P(X > 1,79) = 1 – P(X ≤ 1,79) = 1 – P(X = 1) = 1 – 0,15 = 0,85
E o valor de P(X < 2,5) é:
                                  P(X < 2,5) = P(X = 1) + P(X = 2) = 0,15 + 0,30 = 0,45
Logo, a alternativa A está incorreta.
Em relação à alternativa B, o valor de P(X < 2,70) é:
                                 P(X < 2,70) = P(X = 1) + P(X = 2) = 0,15 + 0,30 = 0,45
Ou seja, P(X < 2,70) = 0,45 (não < 0,45).


          Receita Federal (Analista Tributário) Estatística                                           44
          www.estrategiaconcursos.com.br                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

E o valor de P(X > 1,5) pode ser calculado como:
                            P(X > 1,5) = 1 – P(X ≤ 1,5) = 1 – P(X = 1) = 1 – 0,15 = 0,85
A segunda parte está correta, mas a alternativa B está incorreta, porque a primeira parte é falsa.
Em relação à alternativa D, o valor de P(X = 3) é:
                             P(X = 3) = 1 – P(X = 1) – P(X = 2) = 1 – 0,15 – 0,30 = 0,55
E o valor da esperança é:
                            E(X) = 1x0,15 + 2x0,30 + 3x0,55 = 0,15 + 0,60 + 1,65 = 2,40
A primeira parte está correta, mas a alternativa D está incorreta, porque a segunda parte é falsa.
Em relação à alternativa E, o valor de P(1,44 < X < 3) é:
                                           P(1,44 < X < 3) = P(X = 2) = 0,30
E a moda de X (valor com maior probabilidade) é, de fato, Mo(X) = 3.
A segunda parte está correta, mas a alternativa E está incorreta, porque a primeira parte é falsa.
Gabarito: C

Quartis e Mediana

A partir da função de distribuição acumulada, podemos calcular a mediana da distribuição. A mediana é,
assim como a esperança e a moda, uma medida de tendência central, mas também uma medida separatriz,
ou seja, que separa a distribuição em partes iguais.

Ela divide a distribuição em 2 partes iguais, de forma que 50% das observações fiquem abaixo dessa medida
e 50% das observações fiquem acima. Portanto, a mediana é o valor de 𝑋 para o qual a f.d.a. é igual a 50%.

                                            𝑭(𝒙𝑴𝒆𝒅𝒊𝒂𝒏𝒂) = 𝟓𝟎% = 𝟎, 𝟓

Outras medidas separatrizes são os quartis da distribuição (Q1, Q2 e Q3), os quais dividem a distribuição em
4 partes iguais.

O primeiro quartil (Q1) deixa 25% das observações abaixo e 75%, acima; o segundo quartil (Q2) deixa 50%
das observações abaixo e 50%, acima; e o terceiro quartil (Q3) deixa 75% das observações abaixo e 25%,
acima. Note que a mediana equivale ao segundo quartil!

        Receita Federal (Analista Tributário) Estatística                                                45
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Assim, os valores da f.d.a. no primeiro, no segundo e no terceiro quartis são:

                                              𝐹(𝑥𝑄1 ) = 25% = 0,25

                                        𝐹(𝑥𝑄2 ) = 𝐹 (𝑥𝑀𝑒𝑑 ) = 50% = 0,5

                                              𝐹(𝑥𝑄3 ) = 75% = 0,75

Para as variáveis discretas, pode não ser possível encontrar valores para 𝑥 que separem a distribuição
exatamente nesses percentuais. Nesses casos, devemos encontrar os valores de 𝑋 para os quais a f.d.a.
apresenta valores maiores (ou iguais) a esses percentuais:

                                                   𝐹(𝑥𝑄1 ) ≥ 25%

                                            𝐹(𝑥𝑄2 ) = 𝐹 (𝑥𝑀𝑒𝑑 ) ≥ 50%

                                                   𝐹(𝑥𝑄3 ) ≥ 75%

Para ilustrar, replicamos a tabela com os valores da f.d.a. (em percentual) para o lançamento do dado:

                                               𝒙        𝑭(𝒙) = 𝑷(𝑿 ≤ 𝒙)
                                               𝟏            16,7%
                                               𝟐             33,3%
                                               𝟑             50%
                                               𝟒             66,7%
                                               𝟓             83,3%
                                               𝟔             100%

Podemos observar que não há um valor de X para o qual a f.d.a. é exatamente igual a 25%. Por isso,
escolhemos a probabilidade imediatamente superior, qual seja, de 33,3%, associada a X = 2. Com isso,
concluímos que o primeiro quartil é:

                                                       𝑥𝑄1 = 2

Também observamos que não há um valor de X para o qual a f.d.a. seja exatamente igual a 75%. A
probabilidade imediatamente superior é de 83,3%, associada a X = 5. Logo, o terceiro quartil é

                                                       𝑥𝑄3 = 5

Em relação à mediana, podemos observar que a f.d.a. para X = 3 é exatamente 𝐹 (3) = 50%. Isso significa
que 𝑥𝑀𝑒𝑑 = 3 é um possível valor para a mediana. Entretanto, esse não é o único valor.

        Receita Federal (Analista Tributário) Estatística                                                46
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 07

Lembra que a função acumulada é definida para qualquer valor de x? Pois é! Para todos os valores de 𝑥 que
pertencem ao intervalo [3,4) 1, temos 𝑭(𝒙) = 𝟓𝟎%.

Sendo assim, podemos dizer que quaisquer desses valores são a mediana, inclusive o próprio 4. Entretanto,
por convenção, normalmente consideramos o valor médio desse intervalo como a mediana:

                                                              3+4
                                                     𝑥𝑀 =         = 3,5
                                                               2

Além dos quartis, há outros quantis, que dividem a distribuição em partes iguais, como os decis, que dividem
em 10 partes iguais, e os percentis, que dividem em 100 partes iguais.

Calculamos esses quantis da mesma forma, a partir da função de distribuição acumulada.

(CESPE/2015 – Agente do Departamento Penitenciário Nacional)

Considerando os dados da tabela mostrada, que apresenta a distribuição populacional da quantidade diária
de incidentes (N) em determinada penitenciária, julgue o item que se segue.
O segundo quartil da distribuição das quantidades diárias de incidentes registradas nessa penitenciária é
igual a 2.
Comentários:
A mediana é calculada a partir da função de distribuição acumulada, cuja tabela consta a seguir:

1
 Utilizamos o parêntesis, ou o colchete voltado para fora, para indicar que o intervalo é aberto naquele extremo, o que significa
que o extremo não está incluído no intervalo.
Utilizamos o colchete voltado para dentro para indicar que o intervalo é fechado naquele extremo, o que significa que o extremo
está incluído.
Assim, a expressão [3,4) equivale a [3,4[ e representa o intervalo 3 ≤ 𝑋 < 4.


          Receita Federal (Analista Tributário) Estatística                                                                   47
          www.estrategiaconcursos.com.br                                                                                     173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Nesse exemplo, não temos nem um valor de X para o qual o valor de F(x) seja exatamente igual a 0,5. O valor
imediatamente superior a 0,5 é de 0,8, o qual está associado ao valor X = 2. Logo, o segundo quartil (ou
mediana) é 𝑥𝑀𝑒𝑑 = 2.
Gabarito: Certo.


(FCC/2014 – TRT 19ª Região) Seja F(x) a função de distribuição da variável X que representa o número de
trabalhadores por domicílio em uma determinada população. Se:
                                                       0,00            𝑠𝑒 𝑥 < 0
                                                      0,10         𝑠𝑒 0 ≤ 𝑥 < 1
                                                      0,25         𝑠𝑒 1 ≤ 𝑥 < 2
                                            𝐹 (𝑋 ) =
                                                      0,50         𝑠𝑒 2 ≤ 𝑥 < 3
                                                      0,80         𝑠𝑒 3 ≤ 𝑥 < 4
                                                     { 1,00            𝑠𝑒 𝑥 ≥ 4 }
então, o número médio de trabalhadores por domicílio subtraído do número mediano de trabalhadores por
domicílio é igual a
a) 0,15
b) 0,10
c) 0,25
d) -0,15
e) -0,50
Comentários:
A média (ou valor esperado) de trabalhadores por domicílio é dada pela fórmula:

                                                   𝐸 (𝑋) = ∑ 𝑥𝑖 . 𝑃(𝑥𝑖 )
                                                               𝑖

Para aplicá-la, precisamos dos valores de probabilidade, a serem calculados a partir dos valores da função
de distribuição acumulada:
                                                𝑃 (𝑋 = 0) = 𝐹 (0) = 0,10
                                  𝑃(𝑋 = 1) = 𝐹 (1) − 𝐹 (0) = 0,25 − 0,10 = 0,15
                                  𝑃(𝑋 = 2) = 𝐹 (2) − 𝐹 (1) = 0,50 − 0,25 = 0,25
                                  𝑃(𝑋 = 3) = 𝐹 (3) − 𝐹 (2) = 0,80 − 0,50 = 0,30
                                     𝑃(𝑋 = 4) = 𝐹 (4) − 𝐹 (3) = 1 − 0,8 = 0,20

           Receita Federal (Analista Tributário) Estatística                                            48
           www.estrategiaconcursos.com.br                                                               173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Assim, a média é dada por:
       𝐸(𝑋) = 0 × 𝑃(𝑋 = 0) + 1 × 𝑃 (𝑋 = 1) + 2 × 𝑃(𝑋 = 2) + 3 × 𝑃(𝑋 = 3) + 4 × 𝑃(𝑋 = 4)
                             𝐸 (𝑋) = 1 × 0,15 + 2 × 0,25 + 3 × 0,30 + 4 × 0,20
                                   𝐸 (𝑋) = 0,15 + 0,50 + 0,90 + 0,80 = 2,35
A mediana é calculada a partir da função de distribuição acumulada. Pelo enunciado, podemos observar que
𝐹 (𝑥 ) = 50% para 𝑥 ∈ [2,3). Por convenção, temos:
                                                            2+3
                                                 𝑥𝑀 =           = 2,5
                                                             2
A diferença entre a média e a mediana é:
                                        𝐸 (𝑥 ) − 𝑥𝑀 = 2,35 − 2,5 = −0,15
Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                            49
        www.estrategiaconcursos.com.br                                                               173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                               VARIÂNCIA E DESVIO PADRÃO
Nesta seção, veremos medidas de dispersão (ou variabilidade), que representam o quanto os elementos
desviam em relação à média.

Variância

O desvio de um elemento 𝑥 em relação à média 𝜇 é a diferença entre os seus valores:

                                                     𝐷𝑒𝑠𝑣𝑖𝑜 = 𝑥 − 𝜇

Entretanto, ao somar os desvios de todos os elementos do conjunto, os desvios positivos (𝑥 > 𝜇) anulam os
desvios negativos (𝑥 < 𝜇), de modo que o resultado seria zero, tendo vista a própria definição de média.

Para ilustrar, vamos supor o seguinte conjunto de números {1, 1, 1, 1, 3, 7, 7}. A média desse conjunto é:

                                            1 + 1 + 1 + 1 + 3 + 7 + 7 21
                                      𝜇=                             =   =3
                                                        7              7

A soma dos desvios em relação à média é:

          𝑆𝑜𝑚𝑎 𝐷𝑒𝑠𝑣𝑖𝑜𝑠 = (1 − 3) + (1 − 3) + (1 − 3) + (1 − 3) + (3 − 3) + (7 − 3) + (7 − 3)

                                𝑆𝑜𝑚𝑎 𝐷𝑒𝑠𝑣𝑖𝑜𝑠 = −2 − 2 − 2 − 2 + 0 + 4 + 4 = 𝟎

Assim, para que possamos somar os desvios, precisamos elevá-los ao quadrado antes.

                                             𝐷𝑒𝑠𝑣𝑖𝑜 𝑞𝑢𝑎𝑑𝑟𝑎𝑑𝑜 = (𝑥 − 𝜇)2

A variância é, portanto, definida como a média do quadrado dos desvios. Assim, em um conjunto de
elementos, somamos o quadrado de todos os desvios e dividimos pela quantidade 𝑁 de elementos, para
obtermos a variância, que pode ser indicada como 𝜎 2 :

                                                       2
                                                         ∑(𝑥 − 𝜇)2
                                                     𝜎 =
                                                            𝑁

Para o nosso exemplo, temos:

                    (1 − 3)2 + (1 − 3)2 + (1 − 3)2 + (1 − 3)2 + (3 − 3)2 + (7 − 3)2 + (7 − 3)2
             𝜎2 =
                                                        7

          (−2)2 + (−2)2 + (−2)2 + (−2)2 + (0)2 + (4)2 + (4)2 4 + 4 + 4 + 4 + 0 + 16 + 16 48
   𝜎2 =                                                     =                           =
                                 7                                        7               7

          Receita Federal (Analista Tributário) Estatística                                                  50
          www.estrategiaconcursos.com.br                                                                     173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação aos elementos repetidos, podemos multiplicá-los pela sua frequência.

Em outras palavras, podemos calcular a variância, somando os produtos dos desvios quadrados
multiplicados pela sua frequência relativa:

                               4             1            2         4        1         2
            𝜎 2 = (1 − 3)2 ×     + (3 − 3)2 × + (7 − 3)2 × = (−2)2 × + (0)2 × + (4)2 ×
                               7             7            7         7        7         7
                                                4           2 16 + 32 48
                                    𝜎2 = 4 ×      + 0 + 16 × =       =
                                                7           7    7     7

Genericamente, essa segunda forma de obter a variância pode ser representada pela seguinte fórmula, em
que 𝑓𝑟 é a frequência relativa:

                                                𝜎 2 = ∑(𝑥 − 𝜇)2 × 𝑓𝑟

Para uma variável aleatória, a variância é calculada de maneira similar, porém, em vez da frequência relativa,
utilizamos a probabilidade para cada valor 𝑥.

                                              𝝈𝟐 = ∑(𝒙 − 𝝁)𝟐 × 𝑷(𝒙)

A variância da variável aleatória 𝑋 pode ser denotada também por 𝑽(𝑿) ou 𝑽𝒂𝒓(𝑿).

Vamos, então, calcular a variância para o nosso exemplo do dado equilibrado, em que os valores da variável
                                                    1
são {1, 2, 3, 4, 5, 6} com probabilidade 𝑃(𝑋 = 𝑥) = 6 para todos os elementos e média 𝜇 = 3,5.

                      1              1              1              1              1               1
    𝜎 2 = (1 − 3,5)2 . + (2 − 3,5)2 . + (3 − 3,5)2 . + (4 − 3,5)2 . + (5 − 3,5)2 . + (6 − 3,5)2 .
                      6              6              6              6              6               6
                               1           1           1          1          1           1
                𝜎 2 = (−2,5)2 . + (−1,5)2 . + (−0,5)2 . + (0,5)2 . + (1,5)2 . + (2,5)2 .
                               6           6           6          6          6           6

                    1        1        1        1        1        1        1 35
        𝜎 2 = 6,25 × + 2,25 × + 0,25 × + 0,25 × + 2,25 × + 6,25 × = 17,5 × =
                    6        6        6        6        6        6        6 12

        Receita Federal (Analista Tributário) Estatística                                                  51
        www.estrategiaconcursos.com.br                                                                    173

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 07

            A esperança de uma variável X é a soma dos produtos de cada valor de X pela sua
            probabilidade:

                                                  𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

            Se substituirmos 𝑥 por (𝑥 − 𝜇)2, obtemos justamente a fórmula da variância1:

                                           𝐸(𝑋 − 𝜇)2 = ∑(𝑥 − 𝜇)2 × 𝑃(𝑋 = 𝑥)

            Por isso, dizemos que a variância de uma variável aleatória é a esperança dos quadrados
            dos desvios:

                                                       𝝈𝟐 = 𝑬(𝑿 − 𝝁)𝟐

A variância também pode ser calculada da seguinte forma:

                                                       𝝈𝟐 = 𝑬(𝑿𝟐 ) − 𝝁𝟐

Considerando que 𝜇 = 𝐸(𝑋), podemos escrever essa fórmula como:

                                                   𝝈𝟐 = 𝑬(𝑿𝟐 ) − [𝑬(𝑿)]𝟐

O termo 𝐸(𝑋 2 ) representa a esperança dos valores da variável aleatória 𝑋, elevados ao quadrado, isto é, o
produto de 𝑥 2 pela sua probabilidade:

                                                𝑬(𝑿𝟐 ) = ∑ 𝒙𝟐 × 𝑷(𝑿 = 𝒙)

1
    De maneira geral, podemos calcular a esperança de uma função 𝑓(𝑥) qualquer de uma variável aleatória:

                                                 𝐸[𝑓(𝑥)] = ∑ 𝑓(𝑥) × 𝑃(𝑋 = 𝑥)


            Receita Federal (Analista Tributário) Estatística                                               52
            www.estrategiaconcursos.com.br                                                                  173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Vamos calcular a variância para o exemplo do lançamento do dado, utilizando a segunda fórmula:

                                                   𝜎 2 = 𝐸(𝑋 2 ) − 𝜇 2

O primeiro termo dessa fórmula é:

                                            𝐸(𝑋 2 ) = ∑ 𝑥 2 × 𝑃(𝑋 = 𝑥)

                                       1        1        1        1        1         1
                       𝐸(𝑋 2 ) = (1)2 . + (2)2 . + (3)2 . + (4)2 . + (5)2 . + (6)2 .
                                       6        6        6        6        6         6

                                        1    1    1     1     1     1 91
                            𝐸(𝑋 2 ) = 1. + 4. + 9. + 16. + 25. + 36. =
                                        6    6    6     6     6     6  6

O segundo termo dessa fórmula (em fração) é:

                                                              7 2 49
                                              𝜇 2 = (3,5)2 = ( ) =
                                                              2    4

A variância é dada pela diferença:

                                                91 49 182 147 35
                                         𝜎2 =      −   =    −    =
                                                 6   4   12   12   12

Para essa segunda forma de cálculo, podemos utilizar, como apoio, a tabela de distribuição de probabilidade,
com os valores de 𝑥 e 𝑃(𝑋 = 𝑥), acrescentando duas colunas, uma com o valor da variável ao quadrado, 𝑥 2 ,
e outra com o produto 𝑥 2 . 𝑃(𝑋 = 𝑥).

A soma da última coluna será o resultado de 𝑬(𝑿𝟐 ).

                 𝒙                  𝑷(𝑿 = 𝒙)                      𝒙𝟐            𝒙𝟐 . 𝑷(𝑿 = 𝒙)

                 𝟏                      1⁄                         1                 1⁄
                                          6                                            6
                 𝟐                      1⁄                         4                 4⁄
                                          6                                            6
                 𝟑                      1⁄                         9                 9⁄
                                          6                                            6
                 𝟒                      1⁄                        16                16⁄
                                          6                                             6
                 𝟓                      1⁄                        25                25⁄
                                          6                                             6
                 𝟔                      1⁄                        36                36⁄
                                          6                                             6
                                        𝑬(𝑿𝟐 ) =                                    𝟗𝟏⁄
                                                                                        𝟔

        Receita Federal (Analista Tributário) Estatística                                                53
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        Para calcular a variância, seguimos os seguintes passos:

        i) Calcular a média: 𝜇 = 𝐸(𝑋) = ∑𝑖 𝑥𝑖 . 𝑃(𝑥𝑖 );

        ii) Elevar a média ao quadrado: 𝜇 2 ;

        iii) Elevar os valores de X ao quadrado e multiplicá-los pela probabilidade: 𝑥 2 . 𝑃(𝑋 = 𝑥);

        iv) Somar os resultados do passo iii para calcular 𝐸(𝑋 2 ) = ∑𝑖(𝑥𝑖 )2 . 𝑃(𝑥𝑖 );

        v) Calcular a variância pela diferença (iv) – (ii): 𝜎 2 = 𝐸(𝑋 2 ) − 𝜇 2 .

Cuidado para não esquecer o último passo. Ou seja, não pense que o resultado do passo iv, 𝐸(𝑋 2 ), é a
variância.

        Chamamos 𝐸(𝑋 2 ) de segundo momento (ou momento de segunda ordem) da variável
        aleatória. Também podemos chamar a variância de segundo momento central (ou
        momento central de segunda ordem) da variável aleatória.

(2017 – DPE/PR)
                                        Tabela - Distribuição da variável aleatória X

        Receita Federal (Analista Tributário) Estatística                                              54
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Seja X uma variável aleatória discreta, sua esperança e variância são respectivamente:
a) Esperança = 2,00 e Variância = 2,13.
b) Esperança = 2,13 e Variância = 1,53
d) Esperança = 1,00 e Variância = 1,53
e) Esperança = 2,13 e Variância = 2,53
Comentários:
Vamos utilizar novamente a tabela de distribuição de probabilidade fornecida para calcular os valores de
𝜇 = 𝐸(𝑋) = ∑𝑖 𝑥𝑖 . 𝑃(𝑥𝑖 ) e de 𝐸(𝑋 2 ) = ∑𝑖(𝑥𝑖 )2 . 𝑃(𝑥𝑖 ):

                                             x       P(x)      x.P(x)   x2    x2.P(x)
                                             1       0,42      0,42     1      0,42
                                             2       0,25      0,50     4      1,00
                                             3       0,18      0,54     9      1,62
                                             4       0,08      0,32     16     1,28
                                             5       0,07      0,35     25     1,75
                                          Total      1,00      2,13     -      6,07


Portanto, temos 𝜇 = 𝐸(𝑋) = 2,13, então, 𝜇 2 ≅ 4,54; e 𝐸(𝑋 2 ) = 6,07.
Assim, a variância é:
                                        𝜎 2 = 𝐸(𝑋 2 ) − 𝜇 2 ≅ 6,07 − 4,54 = 1,53
Gabarito: B


(VUNESP/2014 – TJ/PA) Em uma locadora de automóveis a demanda diária é uma variável aleatória com a
seguinte distribuição de probabilidades:

A variância da demanda diária é:
a) 1,85.
b) 1,5.
c) 1,25.
d) 1,0.
e) 0,85
Comentários:
A variância pode ser calculada como:
                                                  𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

           Receita Federal (Analista Tributário) Estatística                                         55
           www.estrategiaconcursos.com.br                                                            173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Vamos utilizar a tabela para calcular o valor de E(X):

Sabendo que E(X) é a soma de Xi.P(Xi), temos:
                       𝐸(𝑋) = 0 × 0,1 + 1 × 0,1 + 2 × 0,3 + 3 × 0,3 + 4 × 0,1 + 5 × 0,1
                                   𝐸(𝑋) = 0 + 0,1 + 0,6 + 0,9 + 0,4 + 0,5 = 2,5
Logo, o quadrado de E(X) é:
                                                [𝐸(𝑋)]2 = (2,5)2 = 6,25
Agora, vamos calcular 𝐸 (𝑋 2 ):

Sabendo que 𝐸(𝑋 2 ) é a soma de Xi2.P(Xi), temos:
                  𝐸(𝑋 2 ) = 02 × 0,1 + 12 × 0,1 + 22 × 0,3 + 32 × 0,3 + 42 × 0,1 + 52 × 0,1
                     𝐸(𝑋 2 ) = 0 × 0,1 + 1 × 0,1 + 4 × 0,3 + 9 × 0,3 + 16 × 0,1 + 25 × 0,1
                                   𝐸(𝑋 2 ) = 0 + 0,1 + 1,2 + 2,7 + 1,6 + 2,5 = 8,1
Assim, a variância é:
                                               𝑉(𝑋) = 8,1 − 6,25 = 1,85
Gabarito: A


(2019 – IF-PA) Uma variável aleatória discreta Z tem função de probabilidade dada por:

Pode-se afirmar que a variância da variável aleatória Z é igual a:
a) 2,64
b) 3,00
c) 3,24
d) 4,64
e) 2,84
Comentários:
Vamos utilizar a tabela de distribuição de probabilidade fornecida para calcular os valores de 𝜇 = 𝐸(𝑍) =
∑𝑖 𝑧𝑖 . 𝑃(𝑧𝑖 ) e de 𝐸(𝑍 2 ) = ∑𝑖(𝑧𝑖 )2 . 𝑃(𝑧𝑖 ). Atente-se que a tabela abaixo está em um formato diferente
daquele que vimos antes (está transposta), para acompanhar a tabela do enunciado.


          Receita Federal (Analista Tributário) Estatística                                             56
          www.estrategiaconcursos.com.br                                                                173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Portanto, temos 𝜇 = 𝐸(𝑍) = 0,6, então, 𝜇 2 = 0,36; e 𝐸(𝑍 2 ) = 3,6.
Assim, a variância é:
                                       𝜎 2 = 𝐸(𝑍 2 ) − 𝜇 2 = 3,6 − 0,36 = 3,24
Gabarito: C


(FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade, sendo k uma
constante:

A variância de X é igual a:
a) 1,8
b) 2,0
c) 2,2
d) 2,4
e) 2,6
Comentários:
Para calcular a variância, precisamos do valor de k e da esperança.
Sabendo que a soma das probabilidades é igual a 1, o valor de k é dado por:
                                            0,2 + 0,1 + 0,4 + 0,1 + 𝑘 = 1
                                                   𝑘 = 1 − 0,8 = 0,2
Assim, a esperança é:
                        𝐸(𝑋) = (−2) × 0,2 + (−1) × 0,1 + 0 × 0,4 + 1 × 0,1 + 2 × 0,2
                                      𝐸(𝑋) = −0,4 − 0,1 + 0 + 0,1 + 0,4 = 0
Agora, precisamos calcular os desvios de cada valor de x em relação à média (que será igual ao próprio valor
da variável) e elevar cada desvio ao quadrado.
Em seguida, multiplicamos cada quadrado pela respectiva probabilidade e somamos todos os resultados:

                                        𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)


         Receita Federal (Analista Tributário) Estatística                                               57
         www.estrategiaconcursos.com.br                                                                  173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Esses cálculos constam na tabela a seguir:

A variância é a soma dos resultados da última linha:
                                     𝑉(𝑋) = 0,8 + 0,1 + 0 + 0,1 + 0,8 = 1,8
Gabarito: A


(2012 – Empresa de Pesquisa Energética) Sejam X e Y variáveis aleatórias independentes. Sabendo-se que:
E (X) = 2; E(X²Y) = 8; E(XY²) = 6 e E ((XY)²) = 24, conclui-se que o valor da variância de Y, Var (Y), é
a) 48
b) 24
c) 10
d) 3
e) 2
Comentários:
Sendo X e Y variáveis independentes, então vale a propriedade multiplicativa da esperança:
                                                    E(XY) = E(X).E(Y)
Sabendo que E(X) = 2 e que E(XY²) = 6, então:
                                           E(X.Y2) = E(X).E(Y2) = 2.E(Y2) = 6
                                                        E(Y2) = 3
Considerando esse resultado e sabendo que E((XY)2) = 24, então:
                                   E((XY)2) = E(X2.Y2) = E(X2).E(Y2) = E(X2).3 = 24
                                                        E(X2) = 8
Considerando esse resultado e sabendo que E(X²Y) = 8, então:
                                            E(X²Y) = E(X2).E(Y) = 8.E(Y) = 8
                                                            E(Y) = 1
Sabendo que E(Y2) = 3 e E(Y) = 1, podemos calcular a variância, por:
                                         VAR (Y) = E(Y2) – [E(Y)]2 = 3 – 1 = 2
Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                            58
        www.estrategiaconcursos.com.br                                                               173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Desvio Padrão

Ao utilizarmos os quadrados dos desvios, perdemos um pouco a noção da grandeza dos resultados. Se
estivermos interessados na altura dos brasileiros, por exemplo, a média adulta masculina seria algo em torno
de 173cm e a variância, 400cm2, por exemplo. Analisando somente esses números, não entendemos muito
bem o que 400cm2 querem dizer.

Por isso, existe o conceito do desvio padrão, que representamos por 𝝈, 𝑫(𝑿) ou 𝑫𝑷(𝑿), definido como a
raiz quadrada da variância:

                                                        𝝈 = √𝝈𝟐

Nesse exemplo hipotético, o desvio padrão seria de:

                                                  𝜎 = √400 = 20𝑐𝑚

Ora, esse resultado é bem mais palatável – ele indica que uma boa parcela da população adulta masculina
tem altura entre 153cm e 193cm. Agora, o quanto uma “boa parcela” representa depende de alguns fatores.
Então, aguarde cenas dos próximos capítulos!

                                                                                    35
Para o nosso exemplo da moeda equilibrada, em que calculamos a variância 𝜎 2 = 12, o desvio padrão é a
raiz quadrada desse valor:


                                                            35
                                                    𝜎=√        ≅ 1,7
                                                            12

Variância e Desvio Padrão Amostrais

Podemos calcular a variância e o desvio padrão a partir de amostras, isto é, utilizar os dados obtidos em
amostras para estimar a variância ou o desvio padrão da população de interesse.

Para isso, considerando uma amostra de tamanho 𝑛 (isto é, com 𝑛 observações), primeiro calculamos a
média da amostra, que denotamos por 𝑥̅ :

                                                               ∑𝑥
                                                        𝑥̅ =
                                                               𝑛

Para calcular a estimativa da variância, que denotamos por 𝑠 2 , dividimos a soma do quadrado dos desvios
∑(𝑥 − 𝑥̅ )2 por 𝑛 − 1:

                                                                ̅)𝟐
                                                            ∑(𝒙−𝒙
                                                    𝒔𝟐 =
                                                               𝒏−𝟏

        Receita Federal (Analista Tributário) Estatística                                                59
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Observe que essa fórmula é bastante similar à variância populacional, com a seguinte diferença: no cálculo
da variância populacional, dividimos pelo total da população 𝑁 e, no cálculo da variância amostral (isto é,
para estimar a variância, a partir dos dados da amostra), dividimos por 𝑛 − 1.

Vamos supor que o conjunto que vimos anteriormente, {1, 1, 1, 1, 3, 7, 7}, represente os números observados
em uma amostra, obtidos a partir de determinada população. Assim, para estimar a variância da população,
a partir dessa amostra, utilizamos a fórmula:

                                                            ∑(𝑥 − 𝑥̅ )2
                                                    𝑠2 =
                                                              𝑛−1

Já calculamos a média desse conjunto: 𝑥̅ = 3. Então a estimativa da variância é:

                    (1 − 3)2 + (1 − 3)2 + (1 − 3)2 + (1 − 3)2 + (3 − 3)2 + (7 − 3)2 + (7 − 3)2
             𝑠2 =
                                                      7−1

                          2
                             (−2)2 + (−2)2 + (−2)2 + (−2)2 + (0)2 + (4)2 + (4)2
                         𝑠 =
                                                     6
                                         4 + 4 + 4 + 4 + 0 + 16 + 16 48
                                  𝑠2 =                              =   =8
                                                      6               6

(FCC/2015 – SEFAZ/PI – Adaptada) Julgue a seguinte afirmativa:
As amostras I e II dadas abaixo possuem a mesma variância amostral igual a 10.
Amostra I: 1 3 5 7 9 Amostra II: 11 13 15 17 19
Comentários:
Para calcular a variância amostral da Amostra I, primeiro calculamos a média da amostra:
                                      ∑ 𝑥 1 + 3 + 5 + 7 + 9 25
                                     𝑥1 =
                                     ̅̅̅   =               =   =5
                                        𝑛           5        5
Logo, a variância amostral da Amostra I é dada por:

                                                     2
                                                        ∑(𝑥 − 𝑥̅ )2
                                                    𝑠 =
                                                          𝑛−1

           (1 − 5)2 + (3 − 5)2 + (5 − 5)2 + (7 − 5)2 + (9 − 5)2 16 + 4 + 0 + 4 + 16 40
    𝑠1 2 =                                                        =                =   = 10
                                       4                                      4      4
Para calcular a variância amostral da Amostra II, começamos pelo cálculo da média:
                                       ∑ 𝑥 11 + 13 + 15 + 17 + 19 75
                                𝑥2 =
                                ̅̅̅       =                      =   = 15
                                        𝑛             5            5

        Receita Federal (Analista Tributário) Estatística                                               60
        www.estrategiaconcursos.com.br                                                                 173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A variância amostral da Amostral II é, portanto, dada por:

                   2
                    (11 − 15)2 + (13 − 15)2 + (15 − 15)2 + (17 − 15)2 + (19 − 15)2
              𝑠2 =                                                                 =
                                                       4
                                          16 + 4 + 0 + 4 + 16 40
                                   𝑠2 2 =                    =      = 10
                                                   4            4
Portanto, as amostras I e II possuem a mesma variância amostral, igual a 10.
Resposta: Certo.

Propriedades

Agora, veremos as propriedades da variância e do desvio padrão, que são aplicáveis tanto a variáveis
                                                            ==219a34==

aleatórias discretas, quanto a variáveis contínuas.

Nos enunciados a seguir, consideramos 𝑋 e 𝑌 variáveis aleatórias e 𝑘 uma constante real qualquer.

       i)        𝑽(𝑿 + 𝒌) = 𝑽(𝑿)

Quando somamos uma constante k a uma variável X, a variância de X não se altera.

                                        35
Por exemplo, para k = 2 e 𝑉(𝑋) = 12, a variância de X + 2 será:

                                                                                 35
                                                𝑉(𝑋 + 2) = 𝑉(𝑋) =
                                                                                 12

            Vamos entender o porquê disso, com base no exemplo do dado. Sabendo que a média é
            𝜇 = 3,5, vamos replicar o início do cálculo da variância, pela primeira fórmula:

                                             𝑉(𝑋) = ∑(𝑥 − 𝜇)2 × 𝑃(𝑋 = 𝑥)
                                1               1                        1            1       1               1
             𝑉(𝑋) = (1 − 3,5)2 . + (2 − 3,5)2 . + (3 − 3,5)2 . + (4 − 3,5)2 . + (5 − 3,5)2 . + (6 − 3,5)2 .
                                6               6                        6            6       6               6

                                    1               1                        1        1   1           1
                 𝑉(𝑋) = (−2,5)2 . 6 + (−1,5)2 . 6 + (−0,5)2 . 6 + (0,5)2 . 6 + (1,5)2 . 6 + (2,5)2 . 6

            Agora, vamos supor que Y represente um dado igualmente equilibrado, cujas faces variam
            de Y = 3 até Y = 8. Ou seja, somamos k = 2 às faces do dado X:

                                               Y = X + 2 = {3, 4, 5, 6, 7, 8}

        Receita Federal (Analista Tributário) Estatística                                                         61
        www.estrategiaconcursos.com.br                                                                            173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        A média (ou esperança) de Y será:

                                         1      1          1         1         1       1    33
                        𝐸(𝑌) = 3 × 6 + 4 × 6 + 5 × 6 + 6 × 6 + 7 × 6 + 8 × 6 = 6 = 5,5

        E a variância será calculada como:
                                1                1               1                 1                 1           1
            𝑉(𝑌) = (3 − 5,5)2 . 6 + (4 − 5,5)2. 6 + (5 − 5,5)2. 6 + (6 − 5,5)2. 6 + (7 − 5,5)2 . 6 + (8 − 5,5)2 . 6

                                     1               1               1             1             1          1
                𝑉(𝑌) = (−2,5)2 . 6 + (−1,5)2 . 6 + (−0,5)2 . 6 + (0,5)2 . 6 + (1,5)2 . 6 + (2,5)2 . 6

        Observe que os desvios 𝑦 − 𝐸(𝑌) são exatamente os mesmos de 𝑥 − 𝐸(𝑋), e as
        probabilidades 𝑃(𝑌 = 𝑦) são as mesmas de 𝑃(𝑋 = 𝑥). Como o cálculo é o mesmo, o
        resultado, isto é, a variância, será igual.

        Isso acontece porque, ao somarmos a constante 𝑘 = 2 aos valores de 𝑋, a média também
        sofre esse mesmo acréscimo (essa é uma propriedade da esperança):

                                             𝐸(𝑌) = 𝐸(𝑋 + 2) = 𝐸(𝑋) + 2

        Consequentemente, os desvios 𝑦 − 𝐸(𝑌) são iguais aos 𝑥 − 𝐸(𝑋):

                      𝑦 − 𝐸(𝑌) = (𝑥 + 2) − [𝐸(𝑋) − 2] = 𝑥 + 2 − 𝐸(𝑋) − 2 = 𝑥 − 𝐸(𝑋)

        Por isso, as variâncias são iguais!

Essa propriedade vale também quando subtraímos uma constante 𝑘 (trata-se da mesma propriedade, pois
podemos considerar que estamos somando −𝒌):

                                                     𝑽(𝑿 − 𝒌) = 𝑽(𝑿)

                                                      35
Então, para esse mesmo exemplo de 𝑉(𝑋) = 12, a variância de X – 4 será:

                                                                          35
                                                 𝑉(𝑋 − 4) = 𝑉(𝑋) =
                                                                          12

Por ser a raiz quadrada da variância, que não se altera, o desvio padrão também permanece o mesmo:

                                                     𝑫(𝑿 + 𝒌) = 𝑫(𝑿)

                                                     𝑫(𝑿 − 𝒌) = 𝑫(𝑿)

      ii)       𝑽(𝒌. 𝑿) = 𝒌𝟐 . 𝑽(𝑿)

Quando multiplicamos uma variável por uma constante, a variância é multiplicada pelo quadrado dessa
constante.


        Receita Federal (Analista Tributário) Estatística                                                             62
        www.estrategiaconcursos.com.br                                                                                173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                      35
Por exemplo, para k = 2 e 𝑉(𝑋) = 12, a variância de 2.X será:

                                                                      35 35
                                           𝑉(2. 𝑋) = 22 . 𝑉(𝑋) = 4.      =
                                                                      12   3

        Vamos, novamente, entender o porquê disso, mas agora vamos supor que Y represente os
        valores de X multiplicados por 3:

                                                            Y = 3.X

        Pelas propriedades da esperança, a média de Y será multiplicada por 3:

                                               𝐸(𝑌) = 𝐸(3. 𝑋) = 3 × 𝐸(𝑋)

        E os desvios serão multiplicados por 3:

                                 𝑦 − 𝐸(𝑌) = (3. 𝑥) − [3. 𝐸(𝑋)] = 3. [𝑥 − 𝐸(𝑋)]

        Ao elevarmos esses desvios ao quadrado, os resultados serão multiplicados por (3)𝟐 :

                                           2
                            (𝑦 − 𝐸(𝑌)) = (3. [𝑥 − 𝐸(𝑋)])2 = (3)𝟐 . ([𝑥 − 𝐸(𝑋)])2

        Por isso, a variância é multiplicada pelo quadrado da constante!

Essa propriedade também vale para a divisão por uma constante 𝑘 (podemos considerar que estamos
                  1
multiplicando por 𝑘):

                                                       𝑋   𝑉(𝑋)
                                                     𝑉( ) = 𝟐
                                                       𝑘    𝑘

Não importa se 𝑘 é positivo ou negativo, pois o seu quadrado será sempre positivo.

                            𝑋                                                        35
Por exemplo, para 𝑌 = − 2 , a variância de X é dividida por (−2)𝟐 = 4. Sendo 𝑉(𝑋) = 12, teremos:

                                               𝑋     𝑉(𝑋)   1 35 35
                                     𝑉(𝑌) = 𝑉 ( ) =      𝟐
                                                           = .   =
                                               −2   (−2)    4 12   3

Como o desvio padrão é a raiz quadrada da variância, o desvio padrão do produto 𝑘. 𝑋, é:

                                 𝐷(𝑘. 𝑋) = √𝑉(𝑘. 𝑋) = √𝑘 𝟐 . 𝑉(𝑋) = |𝑘|. 𝐷(𝑋)


        Receita Federal (Analista Tributário) Estatística                                          63
        www.estrategiaconcursos.com.br                                                             173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

         Como a raiz de um número é sempre um número positivo, então a raiz de 𝑘 2 é o módulo
         de 𝑘, denotado por |𝑘|:

                                                       √𝑘 2 = |𝑘|

         O módulo de 𝑘, |𝑘|, é uma “versão positiva” do número 𝑘, ou seja:

                                                            𝑘, 𝑠𝑒 𝑘 ≥ 0
                                                 |𝑘| = {                }
                                                            −𝑘, 𝑠𝑒 𝑘 < 0

         Por exemplo, se 𝑘 = 3, então |𝑘| = 3 e se 𝑘 = −3, então |𝑘| = 3.

Portanto:

                                          𝑫(𝒌. 𝑿) = 𝒌. 𝑫(𝑿), para 𝒌 ≥ 𝟎

                                         𝑫(𝒌. 𝑿) = −𝒌. 𝑫(𝑿), para 𝒌 < 𝟎

                                                  𝑿         𝑫(𝑿)
                                              𝑫 (𝒌) =                , para 𝒌 ≥ 𝟎
                                                             𝒌

                                                 𝑿           𝑫(𝑿)
                                             𝑫 (𝒌) = −                , para 𝒌 < 𝟎
                                                                 𝒌


Por exemplo, para Y = 3.X, o desvio padrão será:

                                                 D(Y) = D(3.X) = 3.D(X)

               𝑋
E para 𝑌 = − 2 , o desvio padrão será:

                                                                 𝑋    𝐷(𝑋)
                                                       𝐷(𝑌) = 𝐷 ( ) =
                                                                 −2    2


       iii)    𝑽(𝒌) = 𝟎

A variância de uma constante qualquer é zero. Por exemplo, a variância da constante 𝑘 = 3 é:

                                                       𝑽(𝟑) = 𝟎

        Receita Federal (Analista Tributário) Estatística                                       64
        www.estrategiaconcursos.com.br                                                          173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        Pelas propriedades da esperança, a média de uma constante 𝑘:

                                                     𝜇 = 𝐸(𝑘) = 𝒌

        Assim, o desvio 𝑘 − 𝜇 será:

                                           𝑑𝑒𝑠𝑣𝑖𝑜 = 𝑘 − 𝜇 = 𝒌 − 𝒌 = 𝟎

        Por isso, a variância será 𝟎.

Consequentemente, a variância e o desvio padrão de uma constante são iguais a zero: 𝑫(𝒌) = 𝟎

      iv)      Se X e Y são independentes, então 𝑽(𝑿 + 𝒀) = 𝑽(𝑿) + 𝑽(𝒀)

Somente se X e Y forem variáveis aleatórias independentes, poderemos concluir que a variância da soma
das variáveis é igual à soma das variâncias (propriedade aditiva).

        Vamos supor que X represente os resultados do lançamento de um dado normal
        (equilibrado, com faces de 1 a 6) e que Y represente os resultados do lançamento do dado
        equilibrado com faces de 3 a 8. Assim, se lançarmos os dois dados ao mesmo tempo, qual
        será a variância da distribuição da soma dos resultados?

        Já calculamos as variâncias de X e Y em exercícios anteriores:

                                                                 35
                                                       𝑉(𝑋) = 12

                                                                      35
                                                  𝑉(𝑌) = 𝑉(𝑋) = 12

        Sendo X e Y variáveis independentes, pois um lançamento não influencia no outro, a
        variância da distribuição de X + Y, é:

                                                            35   35        35   35
                                        𝑉(𝑋) + 𝑉(𝑌) = 12 + 12 = 2. 12 = 6


        Receita Federal (Analista Tributário) Estatística                                          65
        www.estrategiaconcursos.com.br                                                             173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Além disso, se X e Y forem independentes, a variância da diferença X – Y também é a soma das variâncias:

                                              𝑽(𝑿 − 𝒀) = 𝑽(𝑿) + 𝑽(𝒀)

Para variáveis independentes, temos 𝑉(𝑋 ± 𝑌) = 𝑉(𝑋) + 𝑉(𝑌), porém o contrário não é necessariamente
verdadeiro. Ou seja, é possível verificar que 𝑉(𝑋 ± 𝑌) = 𝑉(𝑋) + 𝑉(𝑌) e as variáveis não serem
independentes.

         i)         𝑽(𝑿 ± 𝒌) = 𝑽(𝑿)
         ii)        𝑽(𝒌. 𝑿) = 𝒌𝟐 . 𝑽(𝑿)
         iii)       𝑽(𝒌) = 𝟎
         iv)        Se X e Y forem independentes, então 𝑽(𝑿 ± 𝒀) = 𝑽(𝑿) + 𝑽(𝒀)

(2016 – Instituto Federal de Educação/BA – Adaptada) Sendo X uma variável aleatória, com variância 2,
então a variância da função Y = a + bX, com a e b ∈ R, é
a) V(Y) = b2
b) V(Y) = a + b
c) V(Y) = 2
d) V(Y) = b22
e) V(Y) = a2 + b2
Comentários:
Pelas propriedades da variância, temos:
                                                V(Y) = V(a + bx) = b2.V(X)
Como a variância de X é V(X) = 2, então a variância de Y é:
                                                        V(Y) = b22
Gabarito: D.

         Receita Federal (Analista Tributário) Estatística                                            66
         www.estrategiaconcursos.com.br                                                               173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(FGV/2017 – IBGE – Adaptada) Para o caso de variáveis aleatórias quaisquer, existem diversas propriedades
que se aplicam diretamente à esperança matemática e ao momento central de segunda ordem. Dentre essas
propriedades está:
a) Var(X) > E(X2)
b) Var(X±Y) = Var(X) ± Var(Y)
c) DP(a) = 0, sendo a uma constante qualquer
d) Var(a.X) = a.Var(X), sendo a uma constante positiva
e) DP(a.X) = a.DP(X), sendo a uma constante qualquer
Comentários:
Em relação à alternativa A, podemos calcular a variância como:
                                                 Var(X) = E(X2) – [E(X)]2
Como [E(X)]2 > 0 para qualquer variável X, então, temos:
                                                      Var(X) < E(X2)
Portanto, a alternativa A está incorreta. Em relação à alternativa B, se X e Y forem independentes, então
podemos afirmar que:
                                              Var(X ± Y) = Var(X) + Var(Y)
Logo, a alternativa B está incorreta por 2 motivos:
i) Não pode considerar a propriedade aditiva da variância, Var(X ± Y) = Var(X) + Var(Y), pois o enunciado não
afirmou que X e Y são independentes.
ii) Ainda que X e Y fossem independentes, a variância da diferença de X e Y seria igual à soma das variâncias:
Var(X – Y) = Var(X) + Var(Y)
Em relação à alternativa C, sabemos que a variância e o desvio padrão de uma constante “a” qualquer são
iguais a zero.
                                                         DP(a) = 0
Portanto, a alternativa C está correta. Em relação à alternativa D, sabemos que para uma constante “a”
qualquer:
                                                   Var(a.X) = a2.Var(X)
Portanto, a alternativa D está incorreta. Em relação à alternativa E, sabemos que para uma constante “a”
qualquer, temos:
                                                   DP(a.X) = |a|.DP(X)
Assim, sendo a uma constante positiva então:
                                                    DP(a.X) = a.DP(X)
Sendo a uma constante negativa então:
                                                   DP(a.X) = –a.DP(X)
Portanto, temos equações distintas para constantes positivas e negativas, logo a alternativa E está incorreta.
Resposta: C.


         Receita Federal (Analista Tributário) Estatística                                                 67
         www.estrategiaconcursos.com.br                                                                   173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                             COVARIÂNCIA E CORRELAÇÃO
As medidas que estudaremos nesta seção representam a relação entre duas variáveis aleatórias. Variáveis
relacionadas são aquelas em que o resultado de uma influencia o resultado de outra, ou seja, essas variáveis
não são independentes.

Por exemplo, a altura de uma criança é dependente da altura de seus pais; o volume de água em uma caixa
d’água se tem relação com o seu peso; a demanda de certo produto varia de acordo com o seu preço.

Há variáveis fortemente relacionadas, como o volume e o peso de água, e outras nem tanto, como a altura
dos pais e a altura dos filhos. Também existem variáveis que se relacionam em um mesmo sentido (quanto
mais altos são os pais, mais altos os filhos tendem a ser) e variáveis que se relacionam em sentidos opostos
(quanto maior o preço, menor a demanda).

No gráfico abaixo, ilustramos um exemplo hipotético de duas variáveis que se relacionam no mesmo sentido,
como a altura dos pais e a altura dos filhos.


                                               Altura dos Pais X Altura dos Filhos
                            1,55
                             1,5
                            1,45
                             1,4
                            1,35
                             1,3
                            1,25
                             1,2
                                   1,65       1,7     1,75   1,8     1,85    1,9     1,95     2    2,05

No gráfico a seguir, ilustramos um exemplo hipotético de duas variáveis que se relacionam em sentidos
opostos, como o preço de um produto e a quantidade adquirida.


                                                    Preço X Quantidade Comprada
                               35
                               30
                               25
                               20
                               15
                               10
                                   5
                                   0
                                       R$-     R$1,00    R$2,00    R$3,00   R$4,00   R$5,00   R$6,00

        Receita Federal (Analista Tributário) Estatística                                                 68
        www.estrategiaconcursos.com.br                                                                    173

                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A covariância e a correlação caracterizam tanto a força da relação entre duas variáveis, quanto a sua
orientação (se variam no mesmo sentido ou em sentidos opostos).

A covariância entre duas variáveis aleatórias 𝑋 e 𝑌, representada por 𝐶𝑜𝑣(𝑋, 𝑌), é, por definição:

                                                                   1
                      𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸[(𝑋 − 𝜇𝑋 ). (𝑌 − 𝜇𝑌 )] =          . ∑(𝑥𝑖 − 𝜇𝑋 ). (𝑦𝑖 − 𝜇𝑌 )
                                                                   𝑛

Nessa expressão, 𝜇𝑋 corresponde à média (esperança) da variável X, e 𝜇𝑌 corresponde à média de Y.

A covariância também pode ser calculada como:

                                        𝑪𝒐𝒗(𝑿, 𝒀) = 𝑬(𝑿. 𝒀) − 𝑬(𝑿). 𝑬(𝒀)

Nessa fórmula, 𝐸(𝑋. 𝑌) corresponde ao seguinte:

                                             𝐸(𝑋. 𝑌) = ∑ 𝑥. 𝑦 . 𝑝(𝑥, 𝑦)

Ou seja, multiplicamos os possíveis valores das variáveis pelas probabilidades correspondentes.

Se os valores forem igualmente prováveis, podemos calcular 𝐸(𝑋. 𝑌) como:

                                                               ∑ 𝑥. 𝑦
                                                   𝐸(𝑋. 𝑌) =
                                                                 𝑁

Por exemplo, vamos considerar uma parte dos dados hipotéticos do gráfico Preço X Quantidade Comprada,
conforme indicado na tabela abaixo.

Para calcular a covariância, podemos criar uma nova coluna com o produto das duas variáveis, o que
permitirá calcular E(X.Y).

                                           X: Preço         Y: Qtdade        X.Y
                                  i          1,50               30            45
                                  ii         2,00               25            50
                                 iii         3,00               20            60
                                 iv          5,00               2             10
                                Total       11,50               77           165

Como esses valores são igualmente prováveis, o valor de E(X.Y) pode ser calculado como:

        Receita Federal (Analista Tributário) Estatística                                            69
        www.estrategiaconcursos.com.br                                                               173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                       ∑ 𝑥. 𝑦 165
                                         𝐸(𝑋. 𝑌) =           =    = 41,25
                                                         𝑁     4

Agora, calculamos E(X) e E(Y), isto é, a média de X e de Y:

                                                       ∑ 𝑥 11,50
                                           𝐸(𝑋) =         =      = 2,875
                                                       𝑁     4

                                                        ∑ 𝑦 77
                                             𝐸(𝑌) =        =   = 19,25
                                                        𝑁    4

A covariância será, portanto:

                                   𝐶𝑜𝑣(𝑋, 𝑌) = 41,25 − 2,875 × 19,25 ≅ −14

         Da mesma forma que podemos calcular a variância amostral, para estimar a variância da
         população a partir de uma amostra, também podemos calcular a covariância amostral,
         dividindo a soma dos produtos dos desvios por 𝑛 − 1:

                                                   1
                                         𝑠𝑋,𝑌 = 𝑛−1 . ∑(𝑥𝑖 − 𝜇𝑋 ). (𝑦𝑖 − 𝜇𝑌 )

         Em relação ao nosso exemplo, já calculamos a covariância com base na outra fórmula.
                                                                                             𝑛
         Nesse caso, para obter a covariância amostral, podemos multiplicar o resultado por 𝑛−1:

                                                             4
                                              𝑠𝑋,𝑌 ≅ −14 × 3 ≅ −18,7

Para o nosso exemplo, obtivemos uma covariância negativa. Isso ocorreu porque as variáveis se relacionam
em sentidos opostos (relação negativa), isto é, quando uma aumenta, a outra diminui, em média.

Quando a covariância das variáveis é positiva, elas variam no mesmo sentido (relação positiva), isto é,
quando uma aumenta, a outra também aumenta, em média.

        Receita Federal (Analista Tributário) Estatística                                            70
        www.estrategiaconcursos.com.br                                                               173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

         Para calcular a covariância, podemos seguir os seguintes passos:

         i)      Multiplicar os valores de X e Y;
                                                                                ∑ 𝑥.𝑦
         ii)     Somar os produtos X.Y e dividir por N para obter 𝐸(𝑋. 𝑌) =             ;
                                                                                 𝑁
                                                 ∑𝑥             ∑𝑦
         iii)    Calcular as médias 𝐸(𝑋) = 𝑁 e 𝐸(𝑌) = 𝑁 e multiplicá-las;
         iv)     Subtrair o resultado de ii pelo resultado de iii para obter a covariância.

Entretanto, a força da relação entre duas variáveis é difícil de interpretar a partir da covariância. Em relação
ao nosso exemplo, uma covariância de -14 indica uma forte relação negativa ou uma fraca relação?

Para isso, há o conceito de correlação (ou coeficiente de correlação), indicado por 𝝆, em que dividimos a
covariância pelo desvio padrão de ambas as variáveis.

                                                               𝑪𝒐𝒗(𝑿,𝒀)
                                                𝝆(𝑿, 𝒀) =
                                                                𝝈𝑿 .𝝈𝒀


Para calcular o desvio padrão (populacional) para as variáveis do nosso exemplo, vamos utilizar a seguinte
fórmula da variância:

                                              𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Para isso, vamos criar uma coluna com os valores de 𝑋 2 e 𝑌 2 :

                                   X: Preço        Y: Qtdade           X2         Y2
                           i         1,50              30             2,25       900
                          ii         2,00              25              4         625
                         iii         3,00              20              9         400
                         iv          5,00              2               25         4
                        Total       11,50              77            40,25       1929

Os valores de 𝐸(𝑋 2 ) e 𝐸(𝑌 2 ) são, portanto:

                                                      ∑ 𝑥 2 40,25
                                          𝐸(𝑋 2 ) =        =      ≅ 10,06
                                                       𝑁      4

                                                      ∑ 𝑦 2 1929
                                         𝐸(𝑌 2 ) =         =     = 482,25
                                                       𝑁      4

        Receita Federal (Analista Tributário) Estatística                                                    71
        www.estrategiaconcursos.com.br                                                                      173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Sabendo que 𝐸(𝑋 2 ) = 10,06 e que 𝐸(𝑋) = 2,875, então a variância de X é:

                   𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 ≅ 10,06 − [2,875]2 ≅ 10,06 − 8,26 ≅ 1,80

                                                 𝜎𝑋 ≅ √1,80 ≅ 1,34

Em relação a Y, sabendo que 𝐸(𝑌 2 ) = 482,25 e que 𝐸(𝑌) = 19,25, então a variância e desvio padrão são:

              𝑉(𝑌) = 𝐸(𝑌 2 ) − [𝐸(𝑌)]2 = 482,25 − [19,25]2 ≅ 482,25 − 370,56 = 111,69

                                               𝜎𝑌 ≅ √111,69 ≅ 10,57

Portanto, o coeficiente de correlação para o nosso exemplo é:

                                              𝐶𝑜𝑣(𝑋, 𝑌)       −14
                                 𝜌(𝑋, 𝑌) =              ≅              ≅ −0,99
                                                𝜎𝑋 . 𝜎𝑌   1,34 × 10,57

Com base nesse valor, podemos concluir que a relação negativa entre as variáveis é muito forte, pois o valor
do coeficiente de correlação é próximo de -1.

        A fórmula do coeficiente de correlação também pode ser representada como:

                                                               ∑ 𝑥.𝑦−𝑛.𝑥̅ .𝑦̅
                                          𝜌(𝑋, 𝑌) =
                                                       √∑ 𝑥 2 −𝑛.𝑥̅ 2 ×√∑ 𝑦 2 −𝑛.𝑦̅ 2


        Em que o numerador é igual à covariância multiplicada por 𝑛 e o denominador é igual ao
        produto dos desvios padrão, também multiplicado por 𝑛.

        Vamos verificar isso! A covariância pode ser representada como:

                                                                  ∑ 𝑥.𝑦                 1
                   𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) =                      − 𝑥̅ . 𝑦̅ = 𝑛 (∑ 𝑥. 𝑦 − 𝑛. 𝑥̅ . 𝑦̅)
                                                                     𝑛

        E os desvios padrão são a raiz quadrada da variância:

                                                                         ∑ 𝑥2               1
                     𝜎𝑋 = √𝑉(𝑋) = √𝐸 (𝑋 2 ) − [𝐸(𝑋)]2 = √ 𝑛 − 𝑥̅ = √𝑛 (∑ 𝑥 2 − 𝑛. 𝑥̅ )


                                                                         ∑ 𝑦2               1
                     𝜎𝑌 = √𝑉(𝑌) = √𝐸 (𝑌 2 ) − [𝐸(𝑌)]2 = √ 𝑛 − 𝑦̅ = √𝑛 (∑ 𝑦 2 − 𝑛. 𝑦̅)

        Dividindo a covariância pelo produto dos desvios padrão, obtemos a fórmula acima!

        Receita Federal (Analista Tributário) Estatística                                                        72
        www.estrategiaconcursos.com.br                                                                           173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O coeficiente de correlação mede a força e a orientação com que duas variáveis se relacionam linearmente,
podendo assumir valores no intervalo [-1,1].

Assim, como para a covariância, valores positivos do coeficiente de correlação indicam uma relação entre
as variáveis no mesmo sentido (relação positiva) e valores negativos indicam relação em sentidos opostos
(relação negativa).

Além disso, quando 𝝆 = 𝟏, há uma correlação linear perfeita positiva, ou seja, as variáveis apresentam uma
relação linear entre si da forma 𝑌 = 𝑎𝑋 + 𝑏, sendo 𝑎 e 𝑏 reais e 𝑎 > 0. É o caso do volume de água e do
peso da caixa d’água.

Quando 𝝆 = −𝟏, há uma correlação linear perfeita negativa, ou seja, as variáveis apresentam uma relação
linear entre si da forma 𝑌 = 𝑎𝑋 + 𝑏, sendo 𝑎 e 𝑏 reais e 𝑎 < 0. Um exemplo dessa relação seria o peso da
caixa d’água e o seu espaço disponível.

Vejamos agora qual valor a covariância assume quando as variáveis são independentes. Sendo 𝑋 e 𝑌
variáveis independentes, sabemos que:

                                                𝐸(𝑋. 𝑌) = 𝐸(𝑋). 𝐸(𝑌)

Portanto, a covariância de duas variáveis independentes é:

                    𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) = 𝐸(𝑋). 𝐸(𝑌) − 𝐸(𝑋). 𝐸(𝑌) = 0

Consequentemente, o valor do coeficiente de correlação para variáveis independentes também é 𝝆 = 𝟎.

Porém, é possível ter 𝐶𝑜𝑣 = 0, 𝜌 = 0 e as variáveis não serem independentes.

        Existe uma exceção para essa regra!

        Para variáveis binárias, isto é, que assumem apenas 2 valores, a covariância nula implica
        na independência dessas variáveis! Em outras palavras, se a covariância entre 2 variáveis
        binárias for nula, podemos garantir que essas variáveis são independentes.

        Receita Federal (Analista Tributário) Estatística                                              73
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                         𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

                                                         𝐶𝑜𝑣(𝑋,𝑌)
                                            𝜌(𝑋, 𝑌) =                 , 𝜌 ∈ [−1,1]
                                                             𝜎𝑋 .𝜎𝑌


                          Variáveis 𝑋 e 𝑌 Independentes → 𝐶𝑜𝑣(𝑋, 𝑌) = 0, 𝜌(𝑋, 𝑌) = 0

               𝐶𝑜𝑣(𝑋, 𝑌) > 0, 𝜌(𝑋, 𝑌) > 0 ↔ Relação positiva (𝑋 e 𝑌 variam no mesmo sentido)

            𝐶𝑜𝑣(𝑋, 𝑌) < 0, 𝜌(𝑋, 𝑌) < 0 ↔ Relação negativa (𝑋 e 𝑌 variam em sentidos opostos)

                      𝜌(𝑋, 𝑌) = 1 ↔ relação linear perfeita positiva ↔ 𝑌 = 𝑎𝑋 + 𝑏, 𝑎 > 0

                    𝜌(𝑋, 𝑌) = −1 ↔ relação linear perfeita negativa ↔ 𝑌 = 𝑎𝑋 + 𝑏, 𝑎 < 0

(2018 – UFRGS) A análise de ____________ permite estudar a relação entre dois conjuntos de valores e
quantificar o quanto um está relacionado com o outro, no sentido de determinar a intensidade e a direção
dessa relação. Isto é, essa análise indica se, e com que intensidade, os valores de uma variável aumentam ou
diminuem enquanto os valores da outra variável aumentam ou diminuem.
Assinale a alternativa que completa corretamente a lacuna do texto acima.
a) correlação
b) dispersão
c) classificação
d) agrupamento
e) regressão
Comentários:
O conceito que estuda a relação entre duas variáveis, representando tanto a força dessa relação quanto o
seu sentido, é a correlação.
Gabarito: A

         Receita Federal (Analista Tributário) Estatística                                               74
         www.estrategiaconcursos.com.br                                                                  173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(2015 – PC/GO) Com o intuito de avaliar possíveis correlações entre variáveis, um gráfico de dispersão pode
ser um aliado na tomada de decisão. Esse gráfico, elaborado no eixo cartesiano, plota resultados das
variáveis estudadas a fim de representá-las conjuntamente. Sejam x e y variáveis referentes a “tempo de
experiência” e “tempo de execução de tarefa”, respectivamente, e analisando o gráfico de dispersão
apresentado, assinale a alternativa correta.

a) É observada uma correlação positiva perfeita entre as variáveis.
b) É observada uma correlação positiva entre as variáveis.
c) É observada uma correlação nula entre as variáveis.
d) É observada uma correlação negativa entre as variáveis.
e) É observada uma correlação negativa perfeita entre as variáveis..
Comentários:
Pelo gráfico, observamos que as variáveis se relacionam em um mesmo sentido, portanto a correlação é
positiva. Porém, essa relação não é perfeitamente linear, por isso a correlação não é perfeita.
Gabarito: B


(FCC/2015 – SEFAZ/PI – Adaptada) Julgue as seguintes afirmações:
I – Se r é o coeficiente de correlação linear entre duas variáveis, então −1 ≤ r ≤ 1.
II – Se duas variáveis X e Y apresentam correlação linear inversa, o coeficiente de correlação linear entre elas
será um número negativo menor do que −1.
Comentários:
Em relação à afirmação I, o coeficiente de correlação varia entre [-1,1]. Portanto, a afirmação I está correta.
Em relação à afirmação II, se X e Y se relacionam de forma inversa, então o coeficiente de correlação é
negativo. Porém, como o menor valor para o coeficiente é −1, o coeficiente será um valor negativo maior ou
igual a −1, não menor do que −1.
Portanto, a afirmação II está incorreta.
Resposta: I – Certo; II – Errado.


(CESPE/2016 – TCE/PR) Se satisfação no trabalho e saúde no trabalho forem indicadores com variâncias
populacionais iguais a 8 e 2, respectivamente, e se a covariância populacional entre esses indicadores for
igual a 3, então a correlação populacional entre satisfação no trabalho e saúde no trabalho será igual a


         Receita Federal (Analista Tributário) Estatística                                                   75
         www.estrategiaconcursos.com.br                                                                     173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) 0,8125.
b) 1.
c) 0,1875.
d) 0,30.
e) 0,75.
Comentários:
Sabendo que V(X) = 8, V(Y) = 2 e Cov(X,Y) = 3, então a correlação é dada por:
                                                   𝐶𝑜𝑣(𝑋, 𝑌)     3    3
                                      𝜌(𝑋, 𝑌) =              =       = = 0,75
                                                     𝜎𝑋 . 𝜎𝑌   √8. √2 4
Gabarito: E
                                                               ==219a34==

(2018 – FUNPAPA) Um pesquisador suspeita que existe uma correlação entre o número de promessas que
um candidato político faz e o número de promessas que são cumpridas uma vez que o candidato é eleito.
Ele acompanha vários políticos proeminentes e registra as promessas feitas (X) e as promessas mantidas (Y).
Utilizando os seguintes dados sumarizados, calcule o coeficiente de correlação entre as promessas feitas e
as promessas mantidas e assinale a alternativa correta.

a) O coeficiente de correlação entre as promessas feitas e as promessas mantidas indicam uma correlação
forte e positiva.
b) O coeficiente de correlação entre as promessas feitas e as promessas mantidas indicam uma correlação
fraca e negativa.
c) O coeficiente de correlação entre as promessas feitas e as promessas mantidas indicam uma correlação
forte e negativa.
d) O coeficiente de correlação entre as promessas feitas e as promessas mantidas indicam uma correlação
fraca e positiva.
e) O coeficiente de correlação entre as promessas feitas e as promessas mantidas indicam uma correlação
𝑟 ≈ 0,5.
Comentários:
O coeficiente de correlação é calculado por:
                                                                            𝐶𝑜𝑣(𝑋, 𝑌)
                                                    𝜌(𝑋, 𝑌) =
                                                                              𝜎𝑋 . 𝜎𝑌
A covariância pode ser calculada por:
                                           𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)
O enunciado informa que ∑ 𝑥. 𝑦 = 940 e 𝑛 = 7, logo:
                                                                            ∑ 𝑥. 𝑦 940
                                                  𝐸(𝑋. 𝑌) =                       =
                                                                              𝑛     7


           Receita Federal (Analista Tributário) Estatística                                            76
           www.estrategiaconcursos.com.br                                                               173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O valor de E(X) pode ser calculado a partir da informação de que ∑ 𝑥 = 280, logo:
                                                     ∑ 𝑥 280
                                                  𝐸(𝑋) = =
                                                      𝑛      7
O valor de E(Y) pode ser calculado a partir da informação de que ∑ 𝑦 = 28, logo:
                                                            ∑ 𝑦 28
                                                𝐸(𝑌) =         =   =4
                                                             𝑛   7
Assim, o valor da covariância é:
                                    940 280          940 1120          180
                         𝐶𝑜𝑣(𝑋, 𝑌) =    −     ×4=        −        =−        ≅ 25,7
                                     7      7         7       7         7
Para calcular o coeficiente de correlação, vamos primeiro calcular a variância de X utilizando a seguinte
fórmula:
                                              𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2
O enunciado informa que ∑ 𝑥 2 = 12400, logo:
                                                            ∑ 𝑥 2 12400
                                               𝐸(𝑋 2 ) =         =
                                                             𝑛      7
                        280
Sabendo que 𝐸(𝑋) = 7 = 40, então a variância de X é:
                                         12400         12400 11200 1200
                               𝑉(𝑋) =          − 402 =      −     =
                                           7             7     7     7
E o desvio padrão de X é:

                                                    1200      12
                                           𝜎𝑋 = √        = 10√ ≅ 13,1
                                                      7        7

O enunciado informa que ∑ 𝑦 2 = 140, logo:
                                                         ∑ 𝑦 2 140
                                             𝐸(𝑌 2 ) =        =    = 20
                                                          𝑛     7
Sabendo que 𝐸(𝑌) = 4, então a variância de Y é:
                                          𝑉(𝑌) = 20 − 42 = 20 − 16 = 4
E o desvio padrão de Y é:
                                                     𝜎𝑋 = √4 = 2
Assim, o coeficiente de correlação é:
                                                 𝐶𝑜𝑣(𝑋, 𝑌)    −25,7
                                    𝜌(𝑋, 𝑌) =              ≅          ≅ −0,98
                                                   𝜎𝑋 . 𝜎𝑌   13,1 × 2
Como -0,98 é muito próximo de -1, há uma correlação forte e negativa.
Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                             77
        www.estrategiaconcursos.com.br                                                                173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Propriedades

Veremos agora propriedades da covariância e da correlação, que valem tanto para variáveis discretas,
quanto para variáveis contínuas. Nesta seção, deduziremos algumas propriedades para que você possa
escolher se prefere deduzi-las ou memorizá-las.

A seguir, consideramos 𝑋, 𝑌 e 𝑍 variáveis aleatórias e 𝑘 uma constante real qualquer.

       i)        𝑪𝒐𝒗(𝑿, 𝒀) = 𝑪𝒐𝒗(𝒀, 𝑿)

A covariância é considerada uma medida simétrica, pois não importa qual é a variável que aparece primeiro.

De fato, a fórmula da covariância é composta por produtos e, por isso, a ordem das variáveis é indiferente:

                   𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) = 𝐸(𝑌. 𝑋) − 𝐸(𝑌). 𝐸(𝑋) = 𝐶𝑜𝑣(𝑌, 𝑋)

Pelo mesmo motivo, o coeficiente de correlação também é simétrico:

                                                  𝝆(𝑿, 𝒀) = 𝝆(𝒀, 𝑿)

Afinal, ele é a razão entre a covariância e o produto dos desvios padrão:

                                               𝐶𝑜𝑣(𝑋, 𝑌) 𝐶𝑜𝑣(𝑌, 𝑋)
                                  𝜌(𝑋, 𝑌) =              =         = 𝜌(𝑌, 𝑋)
                                                 𝜎𝑋 . 𝜎𝑌   𝜎𝑌 . 𝜎𝑋

       ii)       𝑪𝒐𝒗(𝑿, 𝑿) = 𝑽(𝑿)

A covariância de uma mesma variável é igual à sua variância.

Por exemplo, sendo X uma variável aleatória com variância V(X) = 4, então a covariância dessa variável com
ela mesma é igual à própria variância: Cov(X,X) = 4.

            Podemos obter esse resultado, pela fórmula da covariância:

                                        𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

            Assim, o valor de 𝐶𝑜𝑣(𝑋, 𝑋) é:

                            𝐶𝑜𝑣(𝑋, 𝑋) = 𝐸(𝑋. 𝑋) − 𝐸(𝑋). 𝐸(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

            Essa é exatamente a fórmula da variância!


        Receita Federal (Analista Tributário) Estatística                                               78
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Dessa forma, o coeficiente de correlação de uma mesma variável é:

                                                    𝐶𝑜𝑣(𝑋, 𝑋) 𝑉𝑎𝑟(𝑋)
                                       𝜌(𝑋, 𝑋) =              =      =1
                                                      𝜎𝑋 . 𝜎𝑋   𝜎𝑋 2

                                                      𝝆(𝑿, 𝑿) = 𝟏

Ou seja, não importa qual é a variável, o seu coeficiente de correlação com ela mesma é igual a 1.

       iii)    𝑪𝒐𝒗(𝒌, 𝑿) = 𝟎

A covariância de uma constante e uma variável é igual a zero.

Ou seja, a covariância de uma variável X com uma constante k = 5, por exemplo, é Cov(X,5) = 0. Essa
propriedade vale para qualquer variável X e qualquer constante k.

         Vejamos o porquê desse resultado. Pela fórmula da covariância, temos:

                                        𝐶𝑜𝑣(𝑘, 𝑋) = 𝐸(𝑘. 𝑋) − 𝐸(𝑘). 𝐸(𝑋)

         Sabemos que 𝐸(𝑘. 𝑋) = 𝑘. 𝐸(𝑋) e 𝐸(𝑘) = 𝑘. Substituindo esses resultados, temos:

                                        𝐶𝑜𝑣(𝑘, 𝑋) = 𝑘. 𝐸(𝑋) − 𝑘. 𝐸(𝑋) = 0

Como a covariância 𝐶𝑜𝑣(𝑘, 𝑋) = 0, então a correlação também é igual a 0: 𝝆(𝒌, 𝑿) = 𝟎

       iv)     𝑪𝒐𝒗(𝑿 ± 𝒂, 𝒀 ± 𝒃) = 𝑪𝒐𝒗(𝑿, 𝒀)

A covariância não se altera quando somamos ou subtraímos constantes às variáveis.

Por exemplo, sendo Cov(X,Y) = 6, então a covariância entre a variável X + 5 e a variável Y – 4 será a igual:

                                           Cov(X + 5, Y – 4) = Cov(X,Y) = 6

        Receita Federal (Analista Tributário) Estatística                                                      79
        www.estrategiaconcursos.com.br                                                                         173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        Podemos verificar essa propriedade, pela fórmula de covariância:

                      𝐶𝑜𝑣(𝑋 + 𝑎, 𝑌 + 𝑏) = 𝐸[(𝑋 + 𝑎). (𝑌 + 𝑏)] − 𝐸(𝑋 + 𝑎). 𝐸(𝑌 + 𝑏)

        Aplicando a distributiva na primeira expressão, temos:

                  𝐶𝑜𝑣(𝑋 + 𝑎, 𝑌 + 𝑏) = 𝐸(𝑋. 𝑌 + 𝑏. 𝑋 + 𝑎. 𝑌 + 𝑎. 𝑏) − 𝐸(𝑋 + 𝑎). 𝐸(𝑌 + 𝑏)

        Pelas propriedades da esperança, temos:

            𝐶𝑜𝑣(𝑋 + 𝑎, 𝑌 + 𝑏) = 𝐸(𝑋. 𝑌) + 𝑏. 𝐸(𝑋) + 𝑎. 𝐸(𝑌) + 𝑎. 𝑏 − [𝐸(𝑋) + 𝑎]. [𝐸(𝑌) + 𝑏]

        Aplicando a distributiva no segundo termo:

             = 𝐸(𝑋. 𝑌) + 𝑏. 𝐸(𝑋) + 𝑎. 𝐸(𝑌) + 𝑎. 𝑏. −[𝐸(𝑋). 𝐸(𝑌) + 𝑏. 𝐸(𝑋) + 𝑎. 𝐸(𝑌) + 𝑎. 𝑏]

              = 𝐸(𝑋. 𝑌) + 𝑏. 𝐸(𝑋) + 𝑎. 𝐸(𝑌) + 𝑎. 𝑏. −𝐸(𝑋). 𝐸(𝑌) − 𝑏. 𝐸(𝑋) − 𝑎. 𝐸(𝑌) − 𝑎. 𝑏

                                   𝐶𝑜𝑣(𝑋 + 𝑎, 𝑌 + 𝑏) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

        Essa é justamente a fórmula da covariância 𝐶𝑜𝑣(𝑋, 𝑌)!

Dessa forma, o coeficiente de correlação também não se altera quando somamos ou subtraímos constantes
às variáveis:

                                             𝝆(𝑿 ± 𝒂, 𝒀 ± 𝒃) = 𝝆(𝑿, 𝒀)

       v)      𝑪𝒐𝒗(𝑿 + 𝒀, 𝒁) = 𝑪𝒐𝒗(𝑿, 𝒁) + 𝑪𝒐𝒗(𝒀, 𝒁)

A covariância da soma de variáveis aleatórias X + Y e uma outra variável Z é igual à soma da covariância entre
X e Z com a covariância entre Y e Z.

Por exemplo, vamos supor que a covariância entre as variáveis X e Z seja Cov(X, Z) = 1 e que a covariância
entre as variáveis Y e Z seja Cov(Y, Z) = 2. Supondo que a variável S represente a soma S = X + Y, então
podemos calcular a covariância entre S e Z:

                             Cov(S,Z) = Cov(X + Y, Z) = Cov(X,Z) + Cov(Y,Z) = 1 + 2 = 3

        Receita Federal (Analista Tributário) Estatística                                                  80
        www.estrategiaconcursos.com.br                                                                    173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

        Novamente, podemos verificar essa propriedade, pela fórmula de covariância:

                               𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸[(𝑋 + 𝑌). 𝑍] − 𝐸(𝑋 + 𝑌). 𝐸(𝑍)

        Aplicando a distributiva na primeira expressão, temos:

                               𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸(𝑋. 𝑍 + 𝑌. 𝑍) − 𝐸(𝑋 + 𝑌). 𝐸(𝑍)

        Pela propriedade aditiva da esperança, temos:

                         𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸(𝑋. 𝑍) + 𝐸(𝑌. 𝑍) − [𝐸(𝑋) + 𝐸(𝑌)]. 𝐸(𝑍)

        Aplicando a distributiva no segundo termo:

                      𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸(𝑋. 𝑍) + 𝐸(𝑌. 𝑍) − [𝐸(𝑋). 𝐸(𝑍) + 𝐸(𝑌). 𝐸(𝑍)]

                       𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸(𝑋. 𝑍) + 𝐸(𝑌. 𝑍) − 𝐸(𝑋). 𝐸(𝑍) − 𝐸(𝑌). 𝐸(𝑍)

        Reorganizando esses termos:

                       𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐸(𝑋. 𝑍) − 𝐸(𝑋). 𝐸(𝑍) + 𝐸(𝑌. 𝑍) − 𝐸(𝑌). 𝐸(𝑍)

                                     𝐶𝑜𝑣(𝑋 + 𝑌, 𝑍) = 𝐶𝑜𝑣(𝑋, 𝑍) + 𝐶𝑜𝑣(𝑌, 𝑍)

A mesma propriedade pode ser aplicada para a subtração de variáveis:

                                    𝑪𝒐𝒗(𝑿 − 𝒀, 𝒁) = 𝑪𝒐𝒗(𝑿, 𝒁) − 𝑪𝒐𝒗(𝒀, 𝒁)

Ou seja, para o nosso exemplo em que Cov(X,Z) = 1 e seja Cov(Y,Z) = 2, supondo D = X – Y, então a covariância
entre D e Z é:

                            Cov(D,Z) = Cov(X – Y, Z) = Cov(X,Z) – Cov(Y,Z) = 1 – 2 = -1

       vi)     𝑪𝒐𝒗(𝒌𝑿, 𝒀) = 𝑪𝒐𝒗(𝑿, 𝒌𝒀) = 𝒌. 𝑪𝒐𝒗(𝑿, 𝒀)

A covariância de duas variáveis aleatórias, sendo qualquer uma delas multiplicada por uma constante, é
igual ao produto da constante pela covariância das variáveis.


        Receita Federal (Analista Tributário) Estatística                                                 81
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Considerando que a covariância entre X e Y é Cov(X, Y) = 6 e supondo W = 5.Y, a covariância entre X e W será:

                                 Cov(X, W) = Cov(X, 5.Y) = 5.Cov(X, Y) = 5 x 6 = 30

E se definíssemos a variável H = 5.X, então a covariância entre H e Y seria:

                                     Cov(H, Y) = Cov(5.X, Y) = 5.Cov(X, Y) = 30

Teríamos o mesmo resultado! Ou seja, não importa qual é a variável que está sendo multiplicada pela
constante, pois o resultado será o mesmo: a covariância será multiplicada pela constante.

O mesmo vale para quando estamos dividindo por uma constante 𝑘 (pois é o mesmo que multiplicar pela
         1                        𝑌
constante ). Por exemplo, para 𝐺 = , a covariância entre X e G será:
            𝑘                             3

                                                  𝑌   1             1
                               𝐶𝑜𝑣(𝑋, 𝐺) = 𝐶𝑜𝑣 (𝑋, ) = . 𝐶𝑜𝑣(𝑋, 𝑌) = . 6 = 2
                                                  3   3             3

         Essa propriedade também pode ser verificada, a partir da fórmula da covariância e das
         propriedades da esperança.

                                    𝐶𝑜𝑣(𝑘. 𝑋, 𝑌) = 𝐸(𝑘. 𝑋. 𝑌) − 𝐸(𝑘. 𝑋). 𝐸(𝑌)

                  𝐶𝑜𝑣(𝑘. 𝑋, 𝑌) = 𝑘. 𝐸(𝑋. 𝑌) − 𝑘. 𝐸(𝑋). 𝐸(𝑌) = 𝑘. [𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)]

                                              𝐶𝑜𝑣(𝑘. 𝑋, 𝑌) = 𝑘. 𝐶𝑜𝑣(𝑋, 𝑌)

Podemos deduzir que, se ambas as variáveis estiverem multiplicadas pela constante, então a covariância
será multiplicada pelo quadrado da constante:

                               𝑪𝒐𝒗(𝒌. 𝑿, 𝒌. 𝒀) = 𝒌. 𝒌. 𝑪𝒐𝒗(𝑿, 𝒀) = 𝒌𝟐 . 𝑪𝒐𝒗(𝑿, 𝒀)

Por exemplo, sendo W = 5.Y e H = 5.X, a covariância entre H e W é:

                              Cov(H, W) = Cov(5.X, 5.Y) = 5 x 5.Cov(X,Y) = 25 x 6 = 150

E se as constantes forem diferentes, teremos:

                                          𝑪𝒐𝒗(𝒌. 𝑿, 𝒍. 𝒀) = 𝒌. 𝒍. 𝑪𝒐𝒗(𝑿, 𝒀)
                          𝑌
Por exemplo, para 𝐺 = 3 e H = 5.X, a covariância entre H e G é:

        Receita Federal (Analista Tributário) Estatística                                                 82
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                               𝑌      1                1
                         𝐶𝑜𝑣(𝐻, 𝐺) = 𝐶𝑜𝑣 (5. 𝑋, ) = 5. . 𝐶𝑜𝑣(𝑋, 𝑌) = 5. . 6 = 10
                                               3      3                3

E como fica o coeficiente de correlação?

Se as variáveis estiverem multiplicadas por duas constantes quaisquer, 𝑘 e 𝑙, o coeficiente de correlação se
manterá o mesmo se as constantes tiverem o mesmo sinal (𝑘𝑙 > 0) e terá sinal contrário se as constantes
tiverem sinais diferentes (𝑘𝑙 < 0):

                                         𝝆(𝒌. 𝑿, 𝒍. 𝒀) = 𝝆(𝑿, 𝒀), se 𝒌𝒍 > 𝟎

                                        𝝆(𝒌. 𝑿, 𝒍. 𝒀) = −𝝆(𝑿, 𝒀), se 𝒌𝒍 < 𝟎

Assim, o coeficiente de correlação não varia, em módulo, ao multiplicarmos as variáveis aleatórias por
constantes reais.

        Para obter o coeficiente de correlação, dividimos a covariância pelos desvios padrão:

                                                           𝐶𝑜𝑣(𝑘.𝑋,𝑙.𝑌)       𝑘.𝑙.𝐶𝑜𝑣(𝑋,𝑌)
                                       𝜌(𝑘. 𝑋, 𝑙. 𝑌) =                    =
                                                            𝜎𝑘.𝑋 .𝜎𝑙.𝑋         𝜎𝑘.𝑋 .𝜎𝑙.𝑋


        Pelas propriedades do desvio padrão, sabemos que 𝜎𝑘.𝑋 = |𝑘|. 𝜎𝑋 e 𝜎𝑙.𝑌 = |𝑙|. 𝜎𝑌 :

                                                       𝑘.𝑙.𝐶𝑜𝑣(𝑋,𝑌)       𝑘𝑙      𝐶𝑜𝑣(𝑋,𝑌)
                                     𝜌(𝑘. 𝑋, 𝑙. 𝑌) = |𝑘|.𝜎 .|𝑙|.𝜎 = |𝑘𝑙| ×
                                                             𝑋     𝑌                𝜎𝑋 .𝜎𝑋

                        𝐶𝑜𝑣(𝑋,𝑌)
        Sabemos que                = 𝜌(𝑋, 𝑌), logo:
                          𝜎𝑋 .𝜎𝑋

                                                                 𝒌𝒍
                                            𝜌(𝑘. 𝑋, 𝑙. 𝑌) = |𝒌𝒍| × 𝜌(𝑋, 𝑌)

        Assim, se o produto das constantes for positivo, 𝑘𝑙 > 0, o que ocorre quando as constantes
        possuem o mesmo sinal, então teremos 𝑘𝑙 = |𝑘𝑙| e o mesmo valor para o coeficiente de
        correlação:

                                                       𝒌𝒍
                                     𝜌(𝑘. 𝑋, 𝑙. 𝑌) = |𝒌𝒍| × 𝜌(𝑋, 𝑌) = 1. 𝜌(𝑋, 𝑌)

        Se o produto das constantes for negativo, 𝑘𝑙 < 0, o que ocorre quando as constantes
        possuem sinal contrário, então teremos 𝑘𝑙 = −|𝑘𝑙| e o coeficiente de correlação terá sinal
        contrário:

                                                      𝒌𝒍
                                    𝜌(𝑘. 𝑋, 𝑙. 𝑌) = |𝒌𝒍| × 𝜌(𝑋, 𝑌) = −1. 𝜌(𝑋, 𝑌)

        Receita Federal (Analista Tributário) Estatística                                                83
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                     1                                            1
Por exemplo, sendo A = 5.X e B = 3.Y, o produto entre os coeficientes k = 5 e l = 3 é positivo:

                                                          1 5
                                                        5. = > 0
                                                          3 3

Portanto, o coeficiente de correlação entre X e Y se mantém o mesmo:

                                                               1
                                             𝜌(𝐴, 𝐵) = 𝜌 (5. 𝑋, . 𝑌) = 𝜌(𝑋, 𝑌)
                                                               3
                                                   1
Similarmente, se tivermos C = -5.X e D = − 3.Y, o produto também será positivo:

                                                             1 5
                                                       −5 × − = > 0
                                                             3 3

Logo, o coeficiente de correlação também se mantém o mesmo:

                                                           1
                                      𝜌(𝐶, 𝐷) = 𝜌 (−5. 𝑋, − . 𝑌) = 𝜌(𝑋, 𝑌)
                                                           3
                                         1
Porém, se tivermos A = 5.X e D = − 3.Y, o produto entre os coeficientes é negativo:

                                                          1   5
                                                       5×− = − < 0
                                                          3   3

Por isso, o coeficiente de correlação terá sinal oposto:

                                                          1
                                      𝜌(𝐴, 𝐷) = 𝜌 (5. 𝑋, − . 𝑌) = −𝜌(𝑋, 𝑌)
                                                          3

Se houver apenas uma constante 𝑘 multiplicando uma das variáveis, temos um caso específico dessa
propriedade, para 𝑙 = 1.

Nesse caso, o coeficiente de correlação será o mesmo se 𝑘 > 0 e terá sinal contrário se 𝑘 < 0:

                                               𝜌(𝑘. 𝑋, 𝑌) = 𝜌(𝑋, 𝑌), se 𝑘 > 0

                                              𝜌(𝑘. 𝑋, 𝑌) = −𝜌(𝑋, 𝑌), se 𝑘 < 0

                                         Propriedades da Covariância

         i)      Simetria: 𝐶𝑜𝑣(𝑋, 𝑌) = 𝐶𝑜𝑣(𝑌, 𝑋)
         ii)     Mesma variável: 𝐶𝑜𝑣(𝑋, 𝑋) = 𝑉𝑎𝑟(𝑋)
         iii)    Com uma constante: 𝐶𝑜𝑣(𝑘, 𝑋) = 0
         iv)     Soma/Subtração de uma constante: 𝐶𝑜𝑣(𝑋 ± 𝑎, 𝑌 ± 𝑏) = 𝐶𝑜𝑣(𝑋, 𝑌)
         v)      Soma/Subtração de variáveis: 𝐶𝑜𝑣(𝑋 ± 𝑌, 𝑍) = 𝐶𝑜𝑣(𝑋, 𝑍) ± 𝐶𝑜𝑣(𝑌, 𝑍)
         vi)     Produto de constantes: 𝐶𝑜𝑣(𝑘. 𝑋, 𝑙. 𝑌) = 𝑘. 𝑙. 𝐶𝑜𝑣(𝑋, 𝑌)

        Receita Federal (Analista Tributário) Estatística                                         84
        www.estrategiaconcursos.com.br                                                            173

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 07

(FGV/2015 – Prefeitura de Recife/PE) Uma variável aleatória X tem média igual a 2 e desvio padrão igual a
2. Se Y = 6 – 2X, então a média de Y, a variância de Y e o coeficiente de correlação entre X e Y valem,
respectivamente,
a) -2, 4 e 1.
b) -2, 16 e 1.
c) 2, 16 e -1.
d) 10, 2 e -1.
e) 2, 4 e -1.
Comentários:
Pelas propriedades da esperança, temos:
                                              E(Y) = E(6 – 2X) = 6 – 2.E(X)
O enunciado informa que a média de X é E(X) = 2, logo:
                                                    E(Y) = 6 – 2.2 = 2
Pela propriedade da variância, temos:
                                         V(Y) = V(6 – 2X) = (-2)2.V(X) = 4.V(X)
O enunciado informa que o desvio padrão de X é DP(X) = 2. Assim, a variância é V(X) = 22 = 4:
                                                      V(Y) = 4.4 = 16
Como Y = 6 – 2X, o coeficiente de correlação de X e Y é:
                                                𝜌(𝑋, 𝑌) = 𝜌(𝑋, 6 − 2𝑋)
Sabemos que a soma de constantes não altera o coeficiente de correlação, logo:
                                                 𝜌(𝑋, 𝑌) = 𝜌(𝑋, −2𝑋)
Aqui, temos uma constante negativa multiplicando uma das variáveis: k = -2 < 0. Logo, o coeficiente de
correlação terá sinal contrário:
                                                  𝜌(𝑋, 𝑌) = −𝜌(𝑋, 𝑋)
Sabemos que 𝜌(𝑋, 𝑋) = 1, logo:
                                                      𝜌(𝑋, 𝑌) = −1
Gabarito: C

         Receita Federal (Analista Tributário) Estatística                                            85
         www.estrategiaconcursos.com.br                                                               173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                    VARIÂNCIA DA SOMA E DA DIFERENÇA
No caso geral, a variância da soma é dada pela seguinte fórmula:

                                         𝑉(𝑋 + 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌)

Por exemplo, vamos supor que a variância de X é V(X) = 3, que a variância de Y é V(Y) = 4 e a covariância
entre X e Y é Cov(X,Y) = 1. Então, a variância da soma das variáveis S = X + Y será:
                            V(S) = V(X + Y) = V(X) + V(Y) + 2.Cov(X,Y) = 3 + 4 + 2x1 = 9


Para a subtração das variáveis, temos:

                                         𝑉(𝑋 − 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌)

Para o mesmo exemplo, sendo D = X – Y, a variância de D será:
                           V(D) = V(X – Y) = V(X) + V(Y) – 2.Cov(X,Y) = 3 + 4 – 2x1 = 5

                 Tanto na fórmula da variância da soma V(X + Y), quanto na fórmula da variância da
                 subtração V(X - Y), iremos somar as variâncias de X e Y.

                 A diferença entre as duas fórmulas está no sinal da covariância, que é multiplicada
                 por 2. Para a variância da soma, somamos o dobro da covariância e para a variância
                 da subtração, subtraímos o dobro da covariância entre as variáveis.

Para ajudar a lembrar, observe a similaridade das fórmulas acima com os produtos notáveis:

                                           (𝑥 + 𝑦)2 = 𝑥 2 + 𝑦 2 + 2. 𝑥. 𝑦
                                           (𝑥 − 𝑦)2 = 𝑥 2 + 𝑦 2 − 2. 𝑥. 𝑦
Para variáveis independentes 𝑋, 𝑌, temos 𝐶𝑜𝑣(𝑋, 𝑌) = 0 e, portanto, a variância da soma será igual à
variância da diferença (propriedade aditiva da variância):
                          𝑉(𝑋 + 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌)
                          𝑉(𝑋 − 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 𝑉 (𝑋) + 𝑉 (𝑌)

        Receita Federal (Analista Tributário) Estatística                                              86
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Por exemplo, se X e Y forem independentes, com V(X) = 3 e V(Y) = 4, então a variância da soma e da diferença
serão iguais a:
                                          V(X + Y) = V(X – Y) = V(X) + V(Y) = 7

                 Se as variáveis forem multiplicadas por constantes reais quaisquer 𝑘, 𝑙:

                                 𝑉(𝑘. 𝑋 + 𝑙. 𝑌) = 𝑉(𝑘. 𝑋) + 𝑉(𝑙. 𝑌) + 2. 𝐶𝑜𝑣(𝑘. 𝑋, 𝑙. 𝑌)
                                                            ==219a34==

                 Sabemos que:

                                                       𝑉(𝑘. 𝑋) = 𝑘 2 . 𝑉(𝑋)

                                                       𝑉(𝑙. 𝑌) = 𝑙 2 . 𝑉(𝑌)

                                               𝐶𝑜𝑣(𝑘. 𝑋, 𝑙. 𝑌) = 𝑘. 𝑙. 𝐶𝑜𝑣(𝑋, 𝑌)

                 Então:

                               𝑽(𝒌. 𝑿 + 𝒍. 𝒀) = 𝒌𝟐 . 𝑽(𝑿) + 𝒍𝟐 . 𝑽(𝒀) + 𝟐. 𝒌. 𝒍. 𝑪𝒐𝒗(𝑿, 𝒀)

                 Analogamente, temos:

                               𝑽(𝒌. 𝑿 − 𝒍. 𝒀) = 𝒌𝟐 . 𝑽(𝑿) + 𝒍𝟐 . 𝑽(𝒀) − 𝟐. 𝒌. 𝒍. 𝑪𝒐𝒗(𝑿, 𝒀)

                 Perceba que a similaridade com os produtos notáveis se mantém:

                                      (𝑘. 𝑥 + 𝑙. 𝑦)2 = 𝑘 2 . 𝑥 2 + 𝑙 2 . 𝑦 2 + 2. (𝑘. 𝑙 ). 𝑥. 𝑦

                                      (𝑘. 𝑥 − 𝑙. 𝑦)2 = 𝑘 2 . 𝑥 2 + 𝑙 2 . 𝑦 2 − 2. (𝑘. 𝑙 ). 𝑥. 𝑦

E se houver mais de 2 variáveis? A variância da soma de 3 variáveis, por exemplo, é:
            𝑉(𝑋 + 𝑌 + 𝑍) = 𝑉 (𝑋) + 𝑉 (𝑌) + 𝑉 (𝑍) + 2[𝐶𝑜𝑣 (𝑋, 𝑌) + 𝐶𝑜𝑣(𝑋, 𝑍) + 𝐶𝑜𝑣(𝑌, 𝑍)]
Ou seja, precisamos somar as variâncias com o dobro das covariâncias entre todas as variáveis. É importante
notar que consideramos a covariância entre duas variáveis uma única vez, em razão da sua simetria, isto é,
𝐶𝑜𝑣(𝑋, 𝑌) = 𝐶𝑜𝑣(𝑌, 𝑋).
Para 𝑛 variáveis 𝑋1 , 𝑋2 , … , 𝑋𝑛 , podemos representar a variância da soma ∑𝑛𝑖=1 𝑋𝑖 como:
                                     𝑛            𝑛                      𝑛   𝑛

                                𝑉 (∑ 𝑋𝑖 ) = ∑ 𝑉(𝑋𝑖 ) + 2. ∑ ∑ 𝐶𝑜𝑣(𝑋𝑖 , 𝑋𝑗 )
                                    𝑖=1          𝑖=1                     𝑗>𝑖 𝑖=1

        Receita Federal (Analista Tributário) Estatística                                                87
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(2016 – IBGE) Se duas variáveis aleatórias, X e Y, têm correlação linear negativa, então:
a) Quanto menor for o valor de X, menor será o valor de Y.
b) A soma dos valores esperados de X e Y é menor do que o valor esperado de X + Y.
c) O produto dos valores esperados de X e Y é menor do que o valor esperado do produto X.Y.
d) A soma das variâncias de X e Y é igual ou menor do que as variâncias de X + Y.
e) A soma das variâncias de X e Y é estritamente maior do que a variância de X + Y.
Comentários:
A questão informa que a correlação linear entre X e Y é negativa.
Em relação à alternativa A, como a covariância é negativa, então X e Y se relacionam em sentidos opostos.
Assim, quanto menor for o valor de X, maior será o valor de Y (em média).
Portanto: alternativa A incorreta.
Em relação à alternativa B, a soma dos valores esperados E(X) + E(Y) é igual ao valor esperado E(X+Y), para
quaisquer variáveis X e Y.
Portanto: alternativa B incorreta.
Em relação à alternativa C, o valor de E(X.Y) pode ser calculado a partir da covariância:
                                             Cov(X,Y) = E(X.Y) – E(X).E(Y)
                                             E(X.Y) = Cov(X,Y) + E(X).E(Y)
Como a correlação entre X e Y é negativa, então Cov(X,Y) < 0. Dessa forma:
                                                   E(X.Y) < E(X).E(Y)
Ou seja, o produto dos valores esperados E(X).E(Y) é maior que o valor esperado do produto E(X.Y).
Portanto: alternativa C incorreta.
Em relação às alternativas D e E, a variância de X + Y é:
                                          V(X + Y) = V(X) + V(Y) + 2.Cov(X,Y)
Como Cov(X,Y) < 0, então:
                                                 V(X + Y) < V(X) + V(Y)
Ou seja, A soma das variâncias de V(X) + V(Y) é maior que a V(X + Y).
Portanto: alternativa D incorreta e alternativa E correta.
Gabarito: E.

        Receita Federal (Analista Tributário) Estatística                                               88
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(FGV/2015 – TJ/RO) Seja X = número de anos de condenação e Y = nível de renda do condenado (mil reais).
São fornecidas ainda as seguintes informações:
Var(X) = 25; Var (Y) = 16 e Var (X+Y) = 21
Assim sendo, a correlação entre X e Y é igual a:
a) 0,20
b) 0,25
c) 0,50
d) -0,50
e) -0,10
Comentários:
A correlação é dada por:
                                                               𝐶𝑜𝑣(𝑋, 𝑌)
                                                   𝜌(𝑋, 𝑌) =
                                                                 𝜎𝑋 . 𝜎𝑌
O valor de Cov(X,Y) pode ser obtido pela fórmula da variância da soma:
                                             V(X + Y) = V(X) + V(Y) + 2.Cov(X,Y)
O enunciado informa que V(X + Y) = 21, V(X) = 25 e V(Y) = 16, logo:
                                                  21 = 25 + 16 + 2.Cov(X,Y)
                                              2.Cov(X,Y) = 21 – 25 – 16 = -20
                                                        Cov(X,Y) = -10
Os valores dos desvios padrão são a raiz quadrada das variâncias. Sendo V(X) = 25, então:
                                                       𝜎𝑋 = √25 = 5
Sendo V(Y) = 16, então:
                                                       𝜎𝑌 = √16 = 4


Portanto, o coeficiente de correlação é:
                                                     𝐶𝑜𝑣(𝑋, 𝑌)   −10
                                         𝜌(𝑋, 𝑌) =             =     = −0,5
                                                       𝜎𝑋 . 𝜎𝑌   5×4
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                        89
           www.estrategiaconcursos.com.br                                                           173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

       COEFICIENTE DE VARIAÇÃO E VARIÂNCIA RELATIVA
A definição de coeficiente de variação (também chamado de desvio padrão relativo ou, ainda, de
coeficiente de variabilidade), 𝐶𝑉 , é:

                                                              𝝈
                                                        𝑪𝑽 = 𝝁

Podemos dizer que esse parâmetro representa uma normalização do desvio padrão pela média, para
permitir a comparação da dispersão de variáveis com médias distintas.


Por exemplo, vamos supor que a variável aleatória 𝑋 apresente média 𝜇𝑋 = 100 e desvio padrão 𝜎𝑋 = 20;
e que a variável aleatória 𝑌 apresente média 𝜇𝑌 = 10 e desvio padrão 𝜎𝑌 = 5.
Nesse caso, não poderíamos afirmar que a dispersão de 𝑋 é maior que a de 𝑌, só porque 𝜎𝑋 > 𝜎𝑌 . Para
efetuarmos essa comparação, precisamos do Coeficiente de Variação. Para esse exemplo, temos:
                                                       𝜎𝑋   20
                                              𝐶𝑉𝑋 =       =    = 0,2
                                                       𝜇𝑋 100
                                                        𝜎𝑌   5
                                               𝐶𝑉𝑌 =       =   = 0,5
                                                        𝜇𝑌 10
Portanto, concluímos que a dispersão de 𝑌 é maior do que a de 𝑋, porque 𝐶𝑉𝑌 > 𝐶𝑉𝑋 .

Como a média e o desvio padrão consideram a mesma unidade de medida (a mesma dos elementos da
variável aleatória), o coeficiente de variação é adimensional, isto é, não possui unidade de medida, sendo
apenas um número.


A variância relativa, 𝑉𝑅 , também apresenta o mesmo objetivo, qual seja, de permitir comparações entre
variáveis com médias distintas.
A variância relativa é definida como o quadrado do coeficiente de variação:

                                                              𝝈𝟐    𝑽(𝑿)
                                              𝑽𝑹 = ( 𝑪 𝑽 ) 𝟐 = 𝝁 𝟐 = 𝝁 𝟐


Ou seja, a variância relativa é o quociente entre a variância e o quadrado da média.


Para o nosso exemplo, em que 𝐶𝑉𝑋 = 0,2, a variância relativa de X é:

                                           𝑉𝑅 = (𝐶𝑉 )2 = (0,2)2 = 0,04

        Receita Federal (Analista Tributário) Estatística                                              90
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

(2015 – Analista de Planejamento e Orçamento) O coeficiente de correlação de duas variáveis aleatórias x
e y é igual 0,7, ou seja: δ (x , y) = 0,7. O coeficiente de variabilidade de x é 0,3 ─ por γx =0,3. O coeficiente de
variabilidade de y é 0,5 ─ γy =0,5. Com essas informações sobre as variáveis x e y, pode-se, corretamente,
afirmar que:
a) à medida que x cresce, em média y decresce.
b) a variabilidade absoluta de x é maior que a variabilidade absoluta de y.
c) o desvio-padrão de x é 30% menor do que sua média.
                                                             ==219a34==

d) o desvio-padrão de y é 50% de sua média.
e) o desvio-padrão de y é 50% maior do que sua média.
Comentários:
A questão informa que o coeficiente de correlação entre X e Y é 0,7: (X,Y) = 0,7; que o coeficiente de
variabilidade (ou de variação) de X é 0,3:
                                                 𝜎𝑋
                                           𝐶𝑉𝑋 =    = 0,3
                                                 𝜇𝑋
E que o coeficiente de variabilidade (ou de variação) de Y é 0,5:
                                                     𝜎𝑌
                                              𝐶𝑉𝑌 =     = 0,5
                                                     𝜇𝑌
Em relação à alternativa A, como o coeficiente de correlação é positivo, à medida que x cresce, em média, y
também cresce.
Portanto, a alternativa A está incorreta.
Em relação à alternativa B, não é possível calcular as médias 𝜇𝑋 e 𝜇𝑌 com as informações fornecidas, assim,
não é possível afirmar algo sobre as variabilidades absolutas (isto é, os desvios padrão ou as variâncias) das
variáveis.
Portanto, a alternativa B está incorreta.
Em relação à alternativa C, podemos afirmar que o desvio padrão de X é 30% da sua média:
                                                     𝜎𝑋 = 0,3 × 𝜇𝑋
Portanto, a alternativa C está incorreta.
Em relação às alternativas D e E, podemos afirmar que o desvio padrão de Y é 50% da sua média:
                                                     𝜎𝑌 = 0,5 × 𝜇𝑌
Portanto, a alternativa D está correta e a alternativa E está incorreta.
Gabarito: D.

         Receita Federal (Analista Tributário) Estatística                                                       91
         www.estrategiaconcursos.com.br                                                                         173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Resumo

Função de Distribuição Acumulada: 𝐹 (𝑥 ) = 𝑃(𝑋 ≤ 𝑥)

Esperança Matemática (média): 𝐸 (𝑋) = ∑ 𝑥. 𝑃(𝑋 = 𝑥 )

            •   𝐸 (𝑘𝑋) = 𝑘. 𝐸(𝑋)
            •   𝐸 ( 𝑋 + 𝑘 ) = 𝐸 (𝑋 ) + 𝑘
            •   𝐸 (𝑋 ± 𝑌) = 𝐸 (𝑋) ± 𝐸(𝑌)
            •   𝐸 (𝑘 ) = 𝑘
            •   Se X e Y forem independentes, então 𝐸(𝑋 × 𝑌) = 𝐸(𝑋) × 𝐸(𝑌)

Moda: valor de X com maior probabilidade

Mediana: divide a distribuição em duas partes iguais, 𝐹 (𝑥𝑀𝑒𝑑 ) = 0,5

Variância: 𝑉(𝑋) = ∑(𝑥 − 𝜇 )2 × 𝑃(𝑋 = 𝑥)

            •   𝑉(𝑋 + 𝑘 ) = 𝑉(𝑋)
            •   𝑉(𝑘. 𝑋) = 𝑘 2 . 𝑉 (𝑋)
            •   𝑉 (𝑘 ) = 0
            •   Se X e Y forem independentes, então 𝑉(𝑋 ± 𝑌) = 𝑉 (𝑋) + 𝑉(𝑌)

Desvio Padrão: 𝜎 = √𝑉(𝑋)

Covariância: 𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸 (𝑋. 𝑌) − 𝐸 (𝑋). 𝐸 (𝑌)

                            𝐶𝑜𝑣(𝑋,𝑌)
Correlação: 𝜌(𝑋, 𝑌) =         𝜎𝑋 .𝜎𝑌


            •   Se X e Y forem independentes, então 𝐶𝑜𝑣(𝑋, 𝑌) = 0, 𝜌(𝑋, 𝑌) = 0

Variância da Soma e da Diferença

                                   𝑽(𝑿 + 𝒀) = 𝑽(𝑿) + 𝑽(𝒀) + 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)

                                   𝑽(𝑿 − 𝒀) = 𝑽(𝑿) + 𝑽(𝒀) − 𝟐. 𝑪𝒐𝒗(𝑿, 𝒀)
                                           𝝈
Coeficiente de Variação: 𝑪𝑽 = 𝝁

                                               𝑽(𝑿)
Variância Relativa: 𝑽𝑹 = (𝑪𝑽 )𝟐 = 𝝁𝟐

        Receita Federal (Analista Tributário) Estatística                        92
        www.estrategiaconcursos.com.br                                           173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                             QUESTÕES COMENTADAS – FGV

Noções de variáveis discretas

1.   (FGV/2025 – TCE/PI) Uma variável aleatória discreta X tem a seguinte função de
probabilidade:

                                         x          0         2       4        6
                                        p(x)       0,2       0,3     0,3      0,2

A variância de X é então igual a:

a) 3,4

b) 3,6

c) 3,8

d) 4,0

e) 4,2

Comentários:

A variância pode ser calculada como:

                                               𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Para calcular a esperança, multiplicamos os valores da variável pelas probabilidades correspondentes:

            𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥) = 0 × 0,2 + 2 × 0,3 + 4 × 0,3 + 6 × 0,2 = 0 + 0,6 + 1,2 + 1,2 = 3,0

Para calcular 𝐸(𝑋 2 ), elevamos os valores da variável ao quadrado e multiplicamos pelas probabilidades
correspondentes:

                        𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥) = 02 × 0,2 + 22 × 0,3 + 42 × 0,3 + 62 × 0,2


             𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥) = 0 + 4 × 0,3 + 16 × 0,3 + 36 × 0,2 = 1,2 + 4,8 + 7,2 = 13,2

Agora, podemos calcular a variância:

         Receita Federal (Analista Tributário) Estatística                                              93
         www.estrategiaconcursos.com.br                                                                 173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                           𝑉𝑎𝑟(𝑋) = 13,2 − 32 = 13,2 − 9 = 4,2

Gabarito: E

2.  (FGV/2024 – Pref. São José dos Campos) Considere uma variável aleatória X com os seguintes
momentos: E(X) = 4 e E(X2) = 25.

O desvio padrão de X é igual a:

a) 3

b) 9

c) √21

d) √29

e) 2,5

Comentários:

A variância pode ser calculada como:

                                                 𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

Pelos dados do enunciado, temos 𝐸(𝑋 2 ) = 25 e 𝐸(𝑋) = 4, logo:

                                            𝑉𝑎𝑟(𝑋) = 25 − (4)2 = 25 − 16 = 9

E o desvio é a raiz quadrada do resultado:

                                                   𝜎𝑋 = √𝑉𝑎𝑟(𝑋) = √9 = 3

Gabarito: A

3.     (FGV/2023 – TJ/SE) Se X é uma variável aleatória com média 20 e variância 4, então a variável
Y = 5X – 100 tem média e variância iguais, respectivamente, a:

a) 0 e 4

b) 0 e 20

           Receita Federal (Analista Tributário) Estatística                                     94
           www.estrategiaconcursos.com.br                                                        173

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 0 e 100

d) 100 e 4

e) 100 e 20

Comentários:

Para resolver essa questão, devemos considerar as propriedades da esperança e da variância.

Sabendo que a esperança de X é igual a 20, temos

                           𝐸(𝑌) = 𝐸(5𝑋 − 100) = 5. 𝐸(𝑋) − 100 = 5 × 20 − 100 = 0

E, sabendo que a variância de X é igual a 4; que a subtração de uma constante não afeta a variância; e que,
quando multiplicamos a variável por uma constante, a variância é multiplicada pelo seu quadrado, temos:

                             𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(5𝑋 − 100) = 𝑉𝑎𝑟(5. 𝑋) = 52 × 4 = 100

Gabarito: C

4.    (FGV/2023 – TJ/SE) Sabe-se que a variância da variável aleatória X é igual a 8, enquanto a da
variável aleatória Y é 2. Além disso, a variância de X-Y é nula. Então, a covariância entre X e Y vale:

a) 0

b) 1

c) 3

d) 5

e) 7

Comentários:

A variância da diferença é igual à soma das variâncias menos o dobro da covariância:

                                 𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2 × 𝐶𝑜𝑣(𝑋, 𝑌)

Sabendo que Var(X) = 8, Var(Y) = 2 e Var(X - Y) = 0, então:

                                               0 = 8 + 2 − 2 × 𝐶𝑜𝑣(𝑋, 𝑌)

                                                   2 × 𝐶𝑜𝑣(𝑋, 𝑌) = 10


        Receita Federal (Analista Tributário) Estatística                                               95
        www.estrategiaconcursos.com.br                                                                  173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                        𝐶𝑜𝑣(𝑋, 𝑌) = 5

Gabarito: D

5.    (FGV/2023 – TJ/SE) A medida utilizada para comparar a variabilidade de variáveis com
diferentes desvios padrões e diferentes médias é:

a) coeficiente de correlação de Pearson;

b) coeficiente de correlação de Spearman;

c) coeficiente de variação;

d) covariância;

e) quantil.

Comentários:

A medida de variabilidade que permite comparar distribuições diferentes é o coeficiente de variação, que
é a razão entre o desvio padrão e a média.

Gabarito: C

6.    (FGV/2023 – Câmara dos Deputados) A função de probabilidade de uma variável aleatória
discreta X é dada por:

  x        0      1       2       3
 p(x)     0,2    0,3     0,3     0,2

No caso, a variância de X é igual a

a) 1,05

b) 1,15

c) 1,25

d) 1,35

e) 1,45

Comentários:


          Receita Federal (Analista Tributário) Estatística                                          96
          www.estrategiaconcursos.com.br                                                             173

                                          


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Vamos calcular a variância pela seguinte fórmula, utilizando a tabela:

                                                 𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

                                                x         0     1       2        3
                                              p(x)       0,2   0,3     0,3      0,2
                                             x.p(x)       0    0,3     0,6      0,6
                                                x2        0     1       4        9
                                             x2.p(x)      0    0,3     1,2      1,8

A esperança corresponde à soma da terceira linha:

                                     𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥) = 0 + 0,3 + 0,6 + 0,6 = 1,5

E o valor de 𝐸(𝑋 2 ) corresponde à soma da última linha:

                                    𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥) = 0 + 0,3 + 1,2 + 1,8 = 3,3

E a variância é:

                                         𝑉𝑎𝑟(𝑋) = 3,3 − 1,52 = 3,3 − 2,25 = 1,05

Gabarito: A

7.        (FGV/2023 – Câmara dos Deputados) Observe a seguinte amostra de notas de cinco alunos:

6, 6, 8, 10, 10

A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média, é
igual a

a) 2,4

b) 2,8

c) 3,2

d) 3,6

e) 4,0

Comentários:

           Receita Federal (Analista Tributário) Estatística                                  97
           www.estrategiaconcursos.com.br                                                     173

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Apesar de o enunciado dizer que se trata de uma amostra, a questão pede a variância dessas notas, e não a
variância amostral, calculada para estimar a variância da população. Por isso, utilizamos a fórmula da
variância populacional, em que dividimos a soma dos quadrados por 𝑛:

                                                             ∑(𝑥 − 𝑥̅ )2
                                                      𝜎2 =
                                                                 𝑛

A média é:

                                                  6 + 6 + 8 + 10 + 10 40
                                           𝑥̅ =                      =   =8
                                                           5           5

E a variância é:

               (6 − 8)2 + (6 − 8)2 + (8 − 8)2 + (10 − 8)2 + (10 − 8)2 4 + 4 + 0 + 4 + 4 16
      𝜎2 =                                                           =                 =   = 3,2
                                          5                                   5          5

Gabarito: C

8.    (FGV/2023 – Câmara dos Deputados) Avalie se as seguintes afirmativas acerca do coeficiente
de correlação linear 𝝆 entre duas variáveis aleatórias contínuas estão corretas.

I - O módulo de 𝝆 é sempre menor ou igual a 1.

II - Se 𝝆 = 𝟎, as duas variáveis são independentes.

III - Valores de 𝝆 próximos de + 1 indicam uma correlação positiva forte.

Está correto o que se afirma em

a) I, apenas

b) II, apenas

c) I e II, apenas

d) I e III, apenas

e) II e III, apenas

Comentários:

O coeficiente de correlação varia entre -1 e 1, ou seja, o seu módulo (valor absoluto) é sempre menor ou
igual a 1, logo a afirmativa I está certa.


         Receita Federal (Analista Tributário) Estatística                                            98
         www.estrategiaconcursos.com.br                                                               173

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Se o coeficiente de correlação for próximo de +1, a correlação entre as variáveis é positiva (porque o
coeficiente é positivo) e forte (por ser próximo de 1). Logo, a afirmativa III está certa.

Para variáveis independentes, o coeficiente de correlação é nulo; porém, é possível que o coeficiente seja
nulo e as variáveis não serem independentes. Portanto, não podemos afirmar que duas variáveis são
independentes se o coeficiente de correlação for nulo. Logo, a afirmativa II está errada.

Gabarito: D

9.        (FGV/2023 – RFB) Uma variável aleatória discreta X tem função de probabilidade dada por

 x    0           1       2      3
 p(x) 0,5         0,2     0,1    0,2

A probabilidade de que o valor de X seja maior do que 2 é igual a

a) 10%

b) 20%

c) 25%

d) 30%

e) 50%

Comentários:

Pela tabela, observamos que X assume os valores 0, 1, 2 e 3. Assim, a probabilidade de X ser maior que 2
corresponde à probabilidade de X ser igual a 3. Pela tabela, observamos que:

                                                         𝑃(𝑋 = 3) = 0,2

Gabarito: B

10.   (FGV/2023 – RFB) Edson e Roberto fazem uma aposta jogando dois dados, ambos regulares.
Edson ganha a aposta se saírem dois números maiores do que 3. Caso contrário, ganha Roberto.

Eles pretendem fazer um jogo honesto. Se perder, Edson pagará a Roberto 10 reais. Então, se perder,
Roberto deverá pagar a Edson

a) 18 reais


           Receita Federal (Analista Tributário) Estatística                                           99
           www.estrategiaconcursos.com.br                                                              173

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 24 reais

c) 30 reais

d) 42 reais

e) 46 reais

Comentários:

Para que o jogo seja honesto é necessário que o ganho esperado seja igual para ambos os jogadores.

Edson ganha se saírem dois números maiores do que 3. Há 3 possibilidades para isso, em cada dado, logo
a probabilidade é:

                                                                 3 1
                                                            𝑝=    =
                                                                 6 2

Como esse resultado precisa ocorrer para ambos os dados (interseção de eventos independentes), a
probabilidade de Edson ganhar é o produto:

                                                                 1 1 1
                                                   𝑃(𝐸𝑑𝑠) =       × =
                                                                 2 2 4

Considerando que Roberto ganhará nos demais casos, a probabilidade de ele ganhar é complementar:

                                                                     1 3
                                                   𝑃(𝑅𝑜𝑏) = 1 −       =
                                                                     4 4

Sabendo que Roberto ganhará 10 reais se ganhar, o seu ganho esperado é:

                                                                  3 30
                                                   𝐸𝑅𝑜𝑏 = 10 ×      =
                                                                  4   4

Para que esse também seja o ganho esperado de Edson, o valor que ele deve receber, caso ganhe é:

                                                             1      30
                                                    𝐸𝐸𝑑𝑠 =     ×𝑔 =
                                                             4       4

                                                            𝑔 = 30

Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                            100
        www.estrategiaconcursos.com.br                                                               173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

11.    (FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte
distribuição de probabilidade:

                                                        X    Prob(X)
                                                        0       0
                                                        1      1/4
                                                        2      1/4
                                                        3       K

O valor de K e o valor esperado de X são, respectivamente,

a) 0 e 3/4

b) 1/4 e 3/2

c) 1/2 e 3/4

d) 1/2 e 3/2

e) 1/2 e 9/4

Comentários:

Vamos calcular o valor K, considerando que a soma das probabilidades é igual a 1:

                                𝑃(𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) = 1

                                                            1 1
                                                    0+       + +𝐾 =1
                                                            4 4
                                                              2 2 1
                                                   𝐾 = 1−      = =
                                                              4 4 2

Para calcular a esperança, multiplicamos cada valor que a variável assume pela respectiva probabilidade:

                                               1     1     2 1 2 6 9
                             𝐸(𝑋) = 0 × 0 + 1 × + 2 × + 3 × = + + =
                                               4     4     4 4 4 4 4

Portanto, o valor de K é igual a 1/2 e o valor esperado de X é igual a 9/4.

Gabarito: E

12.  (FGV/2022 – SEFAZ/BA) Uma variável aleatória discreta X tem a seguinte distribuição de
probabilidades:


        Receita Federal (Analista Tributário) Estatística                                             101
        www.estrategiaconcursos.com.br                                                                173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

 x    1          3       5      10
 p(x) 0,1        0,2     0,3    0,4

A média de X é igual a

a) 3,5

b) 4,0

c) 5,4

d) 6,2

e) 7,0

Comentários:

A média (ou esperança) de uma variável é o produto dos valores da variável pelas respectivas
probabilidades:

                   𝐸(𝑋) = 1 × 0,1 + 3 × 0,2 + 5 × 0,3 + 10 × 0,4 = 0,1 + 0,6 + 1,5 + 4 = 6,2

Gabarito: D

13.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

 x    -2,0 -1,0 0,0             1,0     2
 p(x) 0,2 0,1 0,4               0,1     k

A média de X é igual a:

a) -0,4

b) -0,3

c) -0,2

d) 0,0

e) 0,5

Comentários:

          Receita Federal (Analista Tributário) Estatística                                    102
          www.estrategiaconcursos.com.br                                                       173

                                            


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Aqui, primeiro precisamos calcular o valor de k, considerando que a soma das probabilidades de todos os
possíveis valores é igual a 1:

                       𝑃(𝑋 = −2) + 𝑃(𝑋 = −1) + 𝑃(𝑋 = 0) + 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) = 1

                                              0,2 + 0,1 + 0,4 + 0,1 + 𝑘 = 1

                                                         0,8 + 𝑘 = 1

                                                     𝑘 = 1 − 0,8 = 0,2

E para calcular a esperança, somamos os produtos dos valores de x com as respectivas probabilidades

                                                 𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

     𝐸(𝑋) = (−2) × 0,2 + (−1) × 0,1 + 0 × 0,4 + 1 × 0,1 + 2 × 0,2 = −0,4 − 0,1 + 0 + 0,1 + 0,4 = 0

Gabarito: D

14.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

  x   -2,0 -1,0         0,0     1,0      2
 p(x) 0,2 0,1           0,4     0,1      k

A variância de X é igual a:

a) 1,8

b) 2,0

c) 2,2

d) 2,4

e) 2,6

Comentários:

Na questão anterior, calculamos o valor de probabilidade faltante 𝑘 = 0,2, assim como a média 𝐸(𝑋) = 0.
Agora, precisamos da variância, que pode ser calculada como:

                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2


         Receita Federal (Analista Tributário) Estatística                                            103
         www.estrategiaconcursos.com.br                                                               173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para calcular 𝐸(𝑋 2 ), elevamos os valores de 𝑥 ao quadrado e multiplicamos pela probabilidade
correspondente:

                                                 𝐸(𝑋 2 ) = ∑ 𝑥 2 × 𝑝(𝑥)

                     𝐸(𝑋 2 ) = (−2)2 × 0,2 + (−1)2 × 0,1 + 02 × 0,4 + 12 × 0,1 + 22 × 0,2

                                    𝐸(𝑋 2 ) = 4 × 0,2 + 0,1 + 0,1 + 4 × 0,2 = 1,8

Como 𝐸(𝑋) = 0, esse é o valor da própria variância:

                                                 𝑉(𝑋) = 1,8 − 02 = 1,8

Gabarito: A

15.   (FGV/2022 – MPE/SC) As variáveis aleatórias X e Y são tais que Var(X)= 1, Var(Y) = 4 e
Cov(X,Y) = −1. O valor de Var(Y - 2X) é:

a) 0

b) 4

c) 6

d) 8

e) 12

Comentários:

Para calcular a variância da diferença, somamos as variâncias e subtraímos o dobro da covariância:

                               𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟(2𝑋) − 2. 𝐶𝑜𝑣(𝑌, 2𝑋)

Quando multiplicamos uma variável por uma constante, a covariância é multiplicada pela mesma
constante, enquanto a variância é multiplicada pelo quadrado da constante:

                             𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 22 . 𝑉𝑎𝑟(𝑋) − 2 × 2. 𝐶𝑜𝑣(𝑌, 𝑋)

                                𝑉𝑎𝑟(𝑌 − 2𝑋) = 𝑉𝑎𝑟(𝑌) + 4. 𝑉𝑎𝑟(𝑋) − 4. 𝐶𝑜𝑣(𝑌, 𝑋)

O enunciado informa que 𝑉𝑎𝑟(𝑋) = 1, 𝑉𝑎𝑟(𝑌) = 4 e 𝐶𝑜𝑣(𝑋, 𝑌) = −1, logo:

        Receita Federal (Analista Tributário) Estatística                                            104
        www.estrategiaconcursos.com.br                                                               173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                               𝑉𝑎𝑟(𝑌 − 2𝑋) = 4 + 4 × 1 − 4 × (−1) = 4 + 4 + 4 = 12

Gabarito: E

16.      (FGV/2022 – TCE/TO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                        Valores de X          -3     -1    0     1     3
                                       Probabilidades         0,1   0,2   0,3   0,2   0,2

A média de X é igual a

a) 0,1

b) 0,2

c) 0,3

d) 0,4

e) 0,5

Comentários:

Para calcular a média de uma variável discreta, multiplicamos cada um dos seus valores pela respectiva
probabilidade e somamos os produtos:

                                                      𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥)

         𝐸(𝑋) = −3 × 0,1 − 1 × 0,2 + 0 × 0,3 + 1 × 0,2 + 3 × 0,2 = −0,3 − 0,2 + 0 + 0,2 + 0,6 = 0,3
Gabarito: C

17.      (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                           Valores de X          0     3    10    12
                                          Probabilidades        0,2   0,1   0,3   0,4

A média e a mediana de X são respectivamente iguais a

a) 8,1 e 10


          Receita Federal (Analista Tributário) Estatística                                           105
          www.estrategiaconcursos.com.br                                                              173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 8,1 e 3,0
c) 8,5 e 6,5
d) 8,1 e 6,5
e) 8,5 e 10

Comentários:

Para calcular a média de uma variável discreta, multiplicamos cada um dos seus valores pela respectiva
probabilidade e somamos os produtos:

                                                     𝐸 (𝑋) = ∑ 𝑥. 𝑝(𝑥)

                  𝐸(𝑋) = 0 × 0,2 + 3 × 0,1 + 10 × 0,3 + 12 × 0,4 = 0 + 0,3 + 3 + 4,8 = 8,1
Já a mediana é o valor que divide a distribuição em duas partes, de modo que pelo menos 50% sejam
menores ou iguais à mediana e pelo menos 50% sejam maiores ou iguais à mediana.
Pela tabela, observamos que a mediana é X = 10, pois a probabilidade associada aos valores menores ou
iguais é 0,2 + 0,1 + 0,3 = 0,6; e a probabilidade associada aos valores maiores ou iguais é 0,4 + 0,3 = 0,7.
Gabarito: A

18.      (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                          Valores de X        0     2     6     8
                                         Probabilidades      0,2   0,3   0,3   0,2

A variância de X é igual a

a) 7,2
b) 7,6
c) 8,0
d) 8,4
e) 8,8

Comentários:

Podemos calcular a variância pela seguinte fórmula:
                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2


         Receita Federal (Analista Tributário) Estatística                                               106
         www.estrategiaconcursos.com.br                                                                  173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para calcular a esperança, multiplicamos os valores da variável pela respectiva probabilidade e somamos
os produtos:

                                                       𝐸(𝑋) = ∑ 𝑥. 𝑝(𝑥)

                      𝐸(𝑋) = 0 × 0,2 + 2 × 0,3 + 6 × 0,3 + 8 × 0,2 = 0 + 0,6 + 1,8 + 1,6 = 4
Agora, vamos calcular 𝐸(𝑋 2 ):

                                                      𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥)

                                   𝐸(𝑋 2 ) = 02 × 0,2 + 22 × 0,3 + 62 × 0,3 + 82 × 0,2
                      𝐸(𝑋 2 ) = 0 + 4 × 0,3 + 36 × 0,3 + 64 × 0,2 = 1,2 + 10,8 + 12,8 = 24,8
E a variância é:
                                           𝑉(𝑋) = 24,8 − 42 = 24,8 − 16 = 8,8
Gabarito: E

19.    (FGV/2022 – TRT/PB) Uma variável aleatória discreta X tem função de probabilidade dada
por:

                                                x         2     4     6     8    10
                                               p(x)      0,2   0,1   0,4   0,1   0,2

A soma dos valores da média e da variância de Y = 2X + 5 é igual a

a) 32,0.
b) 36,8.
c) 40,2.
d) 45,8.
e) 52,4.

Comentários:

Essa questão pede a soma da média com a variância de Y = 2X + 5. Para isso, vamos primeiro calcular a
média e a variância de X.
Calculamos a média de X, multiplicando cada um dos seus valores pela respectiva probabilidade e somamos
os resultados:

                                                   𝜇 = 𝐸(𝑋) = ∑ 𝑥 × 𝑝(𝑥)


           Receita Federal (Analista Tributário) Estatística                                        107
           www.estrategiaconcursos.com.br                                                           173

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                              𝐸(𝑋) = 2 × 0,2 + 4 × 0,1 + 6 × 0,4 + 8 × 0,1 + 10 × 0,2

                                          𝐸(𝑋) = 0,4 + 0,4 + 2,4 + 0,8 + 2 = 6

Para calcular a variância, calculamos o quadrado do desvio de cada elemento em relação à média,
multiplicamos pela probabilidade do elemento e somamos os resultados:

                                               𝑉𝑎𝑟(𝑋) = ∑(𝑥 − 𝜇)2 × 𝑝(𝑥)

      𝑉𝑎𝑟(𝑋) = (2 − 6)2 × 0,2 + (4 − 6)2 × 0,1 + (6 − 6)2 × 0,4 + (8 − 6)2 × 0,1 + (10 − 6)2 × 0,2
                  𝑉𝑎𝑟(𝑋) = (−4)2 × 0,2 + (−2)2 × 0,1 + (0)2 × 0,4 + (2)2 × 0,1 + (4)2 × 0,2
                                𝑉𝑎𝑟(𝑋) = 16 × 0,2 + 4 × 0,1 + 0 + 4 × 0,1 + 16 × 0,2
                                       𝑉𝑎𝑟(𝑋) = 3,2 + 0,4 + 0 + 0,4 + 3,2 = 7,2
Agora, vamos calcular a média e a variância de Y = 2X + 5. Pelas propriedades da esperança, quando uma
variável é multiplicada por uma constante, o valor esperado também é multiplicado pela mesma constante;
e quando uma variável é adicionada de uma constante, o valor esperado também é adicionado da mesma
constante:
                                𝐸(𝑌) = 𝐸(2. 𝑋 + 5) = 2 × 𝐸(𝑋) + 5 = 2 × 6 + 5 = 17
Pelas propriedades da variância, quando uma variável é multiplicada por uma constante, a variância é
multiplicada pelo quadrado da constante; e quando uma variável é adicionada de uma constante, a
variância não se altera:
                              𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(2. 𝑋 + 5) = 22 × 𝑉𝑎𝑟(𝑋) = 4 × 7,2 = 28,8
E a soma da esperança com a variância de Y é:
                                           𝐸(𝑌) + 𝑉𝑎𝑟(𝑌) = 17 + 28,8 = 45,8
Gabarito: D

20.       (FGV/2022 – TRT/PB) 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 são variáveis aleatórias independentes tais que

   𝑬(𝑿𝟏 ) = 𝟐,         𝑽𝒂𝒓(𝑿𝟏 ) = 𝟗,          𝑬(𝑿𝟐 ) = −𝟏,       𝑽𝒂𝒓(𝑿𝟐 ) = 𝟒,   𝑬(𝑿𝟑 ) = 𝟐,   𝑽𝒂𝒓(𝑿𝟑 ) = 𝟏

Se 𝒀 = 𝟑𝑿𝟏 − 𝟑𝑿𝟐 + 𝟒𝑿𝟑 , então a soma dos valores da média e da variância de Y é igual a
a) 150.
b) 160.
c) 170.
d) 180.
e) 200.


          Receita Federal (Analista Tributário) Estatística                                                   108
          www.estrategiaconcursos.com.br                                                                      173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Comentários:

Pelas propriedades da esperança, a esperança da soma de variáveis é igual à soma das esperanças; e a
esperança da diferença entre variáveis é igual à diferença das esperanças. Além disso, quando uma variável
é multiplicada por uma constante, a esperança da variável também é multiplicada pela mesma constante.
Assim, a esperança de Y é dada por:
                         𝐸(𝑌) = 𝐸(3𝑋1 − 3𝑋2 + 4𝑋3 ) = 3. 𝐸(𝑋1 ) − 3. 𝐸(𝑋2 ) + 4. 𝐸(𝑋3 )
Sabendo que 𝐸(𝑋1 ) = 2, 𝐸(𝑋2 ) = −1 e 𝐸(𝑋3 ) = 2, temos:
                               𝐸(𝑌) = 3 × 2 − 3 × (−1) + 4 × 2 = 6 + 3 + 8 = 17
Em relação à variância, para variáveis independentes, a variância tanto da soma quanto da diferença entre
as variáveis é igual à soma das variâncias. Além disso, quando uma variável é multiplicada por uma
constante, a variância da variável é multiplicada pelo quadrado dessa constante. Assim, a variância de Y é
dada por:
                𝑉𝑎𝑟(𝑌) = 𝑉𝑎𝑟(3𝑋1 − 3𝑋2 + 4𝑋3 ) = 32 . 𝑉𝑎𝑟(𝑋1 ) + 32 . 𝑉𝑎𝑟(𝑋2 ) + 42 . 𝑉𝑎𝑟(𝑋3 )
                                 𝑉𝑎𝑟(𝑌) = 9. 𝑉𝑎𝑟(𝑋1 ) + 9. 𝑉𝑎𝑟(𝑋2 ) + 16. 𝑉𝑎𝑟(𝑋3 )
Sabendo que 𝑉𝑎𝑟(𝑋1 ) = 9, 𝑉𝑎𝑟(𝑋2 ) = 4 e 𝑉𝑎𝑟(𝑋3 ) = 1, temos:
                            𝑉𝑎𝑟(𝑌) = 9 × 9 + 9 × 4 + 16 × 1 = 81 + 36 + 16 = 133
E a soma da variância com a esperança é:
                                          𝐸(𝑌) + 𝑉𝑎𝑟(𝑌) = 17 + 133 = 150
Gabarito: A

21.    (FGV/2022 – TRT/PB) X e Y são variáveis aleatórias tais que:

E[X] = 5, E[Y] = 3, Var[X] = 16, Var[Y] = 4, E[XY] = 10

O coeficiente de correlação entre X e Y é igual a
a) – 0,625.
b) – 0,240.
c) 0,166.
d) 0,348.
e) 0,765.

Comentários:

O coeficiente de correlação é calculado pela razão entre a covariância e o produto dos desvios padrão:

        Receita Federal (Analista Tributário) Estatística                                                109
        www.estrategiaconcursos.com.br                                                                   173

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 07

                                                               𝐶𝑜𝑣(𝑋, 𝑌)
                                                         𝜌=
                                                                𝜎𝑥 × 𝜎𝑦
Por sua vez, a covariância é a diferença entre a esperança de XY e o produto das esperanças:
                                            𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋𝑌) − 𝐸(𝑋) × 𝐸(𝑌)
Sabendo que 𝐸(𝑋𝑌) = 10, 𝐸(𝑋) = 5 e 𝐸(𝑌) = 3, a covariância é:
                                         𝐶𝑜𝑣(𝑋, 𝑌) = 10 − 5 × 3 = 10 − 15 = −5
E os desvios padrão são a raiz das variâncias. Sabendo que 𝑉𝑎𝑟(𝑋) = 16 e 𝑉𝑎𝑟(𝑌) = 4, os desvios padrão
de X e Y são, respectivamete:

                                                  𝜎𝑥 = √𝑉𝑎𝑟[𝑋] = √16 = 4

                                                   𝜎𝑦 = √𝑉𝑎𝑟[𝑌] = √4 = 2
Agora, podemos calcular o coeficiente de correlação:
                                                        −5   −5
                                                  𝜌=       =    = −0,625
                                                       2×4   8
Gabarito: A

22.   (FGV/2022 – TRT/PB) Avalie se as seguintes afirmativas acerca da mediana de uma variável
aleatória X estão corretas:

  I.     Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[X ≥ m] ≥ 0,5.
 II.     A mediana é uma medida mais resistente a valores extremos do que a média.
III.     Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana
         de X é menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

Comentários:

Em relação à afirmativa I, a mediana divide a distribuição, de modo que pelo menos 50% dos valores são
menores ou iguais à mediana, e pelo menos 50% dos valores são maiores ou iguais à mediana.
Assim, sendo 𝑚 a mediana, temos:


           Receita Federal (Analista Tributário) Estatística                                       110
           www.estrategiaconcursos.com.br                                                          173

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                      𝑃(𝑋 ≤ 𝑚) ≥ 50%,           𝑃(𝑋 ≥ 𝑚) ≥ 50%
Logo, a afirmativa I está correta.
Em relação a afirmativa II, a mediana depende principalmente da ordem dos elementos da distribuição.
Assim, se um elemento é um pouco menor ou muito menor que a mediana, isso não influencia no valor da
mediana. A situação com os valores maiores que a mediana é análoga.
Por outro lado, o valor do elemento afeta diretamente no cálculo da média. Então, de fato, a mediana é mais
resistente a extremos do que a média; e a afirmativa II está correta.
Em relação à afirmativa III, se a distribuição tem assimetria negativa (cauda esquerda mais longa), em que
há uma quantidade maior de valores inferiores à moda, temos:
                                                Média < Mediana < Moda
Ou seja, a mediana é maior que a média (não menor); e a afirmativa III está incorreta.
Gabarito: B

23.    (FGV/2022 – Senado Federal) João propõe a Maria um jogo de apostas. Ele joga dois dados,
pagando a ela 5 reais se saírem dois números não consecutivos. Para que o jogo seja honesto, Maria
deve, caso perca a aposta, pagar a João a quantia de

a) 12 reais.

b) 13 reais.

c) 14 reais.

d) 15 reais.

e) 16 reais.

Comentários:

Para que o jogo seja honesto, o ganho esperado de Maria deve ser igual ao ganho de João. Para isso,
precisamos das probabilidades de cada um ganhar a aposta.
O enunciado informa que Maria ganha a aposta se saírem dois números não consecutivos no lançamento
de dois dados. Assim, ela perde se saírem dois números consecutivos.
As possibilidades são:
                                            {(1,2), (2,3), (3,4), (4,5), (5,6)}
O número menor pode estar no primeiro ou no segundo dado, logo, o número de possibilidades é o dobro:

        Receita Federal (Analista Tributário) Estatística                                               111
        www.estrategiaconcursos.com.br                                                                  173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                   n(João) = 2 x 5 = 10
E o número total de possibilidades é:
                                                     n(U) = 6 x 6 = 36
Assim, a probabilidade de João ganhar a aposta é a razão:
                                                                   10
                                                       𝑃(𝐽𝑜ã𝑜) =
                                                                   36
E a probabilidade de Maria ganhar é complementar:
                                                                   10 26
                                               𝑃(𝑀𝑎𝑟𝑖𝑎) = 1 −        =
                                                                   36 36
Sabendo que Maria ganha 5 reais se ganhar a aposta, o seu ganho esperado é:
                                                                   26 130
                                               𝐸(𝑀𝑎𝑟𝑖𝑎) = 5 ×         =
                                                                   36   36
Considerando que esse deve ser o ganho esperado de João, então o valor que ele deve receber, caso ganhe
a aposta é:
                                                           10 130
                                                𝐸(𝐽𝑜ã𝑜) = 𝑟 × =
                                                           36    36
                                                      130 36
                                                   𝑟=    ×   = 13
                                                      36 10
Gabarito: B

24.   (FGV/2022 – TJ/DFT) Em uma fábrica de calçados, um gerente precisa decidir o volume de
produção para o mês de setembro. Para apoiar sua tomada de decisão, o gerente utilizou a
ferramenta “matriz de resultados”.

A tabela abaixo exibe a matriz de resultados associados a três alternativas de produção, bem como
as probabilidades das vendas estimadas.

   Vendas                    Produção (Unidades)
                                                           Probabilidade
 (Unidades)          2.000          3.000        5.000
    2.000        R$ 50.000,00   R$ 80.000,00 -R$ 30.000,00     20%
    3.000        R$ 20.000,00 R$ 100.000,00 R$ 60.000,00       25%
    5.000        -R$ 20.000,00 R$ 80.000,00 R$ 150.000,00      40%

Pelo critério de maior valor esperado, o gerente deve optar por produzir:

a) 2.000 unidades, com valor esperado de R$ 12.500,00;
b) 3.000 unidades, com valor esperado de R$ 25.000,00;

        Receita Federal (Analista Tributário) Estatística                                           112
        www.estrategiaconcursos.com.br                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 3.000 unidades, com valor esperado de R$ 73.000,00;
d) 5.000 unidades, com valor esperado de R$ 69.000,00;
e) 5.000 unidades, com valor esperado de R$ 84.000,00;

Comentários:

O principal ponto dessa questão é entender a tabela. Ela informa as probabilidades de vender 2.000, 3.000
e 5.000 unidades, quais sejam, 20%, 25% e 40%, respectivamente. Considerando que o gerente pode
decidir produzir 2.000, 3.000 e 5.000 peças, a tabela também informa o resultado (lucro ou prejuízo) em
cada um dos nove cenários.

Sabendo que o gerente vai decidir a quantidade a ser produzida com base no resultado esperado associado
àquela quantidade, precisamos calcular o resultado esperado para cada quantidade de produção, dado pela
soma dos produtos possíveis resultados pelas probabilidades correspondentes.

                                                  𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

Considerando a produção de 2000 unidades (primeira coluna), o resultado esperado será:

        𝐸(2000) = 50.000 × 20% + 20.000 × 25% − 20.000 × 40% = 1.000 + 5.000 − 8.000 = 7.000

Em relação à produção de 3000 unidades (segunda coluna), o resultado esperado será:

  𝐸(3000) = 80.000 × 20% + 100.000 × 25% + 80.000 × 40% = 16.000 + 25.000 + 32.000 = 73.000

Por fim, para a produção de 5000 unidades (terceira coluna), o resultado esperado será:

 𝐸(5000) = −30.000 × 20% + 60.000 × 25% + 150.000 × 40% = −6.000 + 15.000 + 60.000 = 69.000

O maior valor esperado é de R$ 73.000 e está associado à produção de 3000 unidades.

Gabarito: C

25.    (FGV/2022 – TCU) Considere a seguinte sequência de 2001 valores: x1=-1000, x2=-999, ...,
x1001=0, x1002=1, ..., x2001=1000.

A covariância amostral entre essa sequência e a sequência de seus valores ao quadrado (yi = xi2) é

a) 1;

b) 2001;

          Receita Federal (Analista Tributário) Estatística                                           113
          www.estrategiaconcursos.com.br                                                              173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) 1001;

d) 0;

e) -1.

Comentários:

A covariância de variáveis aleatórias é dada por:

                                           𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋, 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

Para uma sequência de N valores, a fórmula da covariância pode ser indicada como:

                                                          ∑𝑁
                                                           𝑖=1 𝑥𝑖 . 𝑦𝑖
                                              𝐶𝑜𝑣(𝑋, 𝑌) =              − 𝑋̅. 𝑌̅
                                                             𝑁

A variável X assume todos os valores entre -1000 e 1000. Assim, os valores negativos compensam os
positivos e a soma de todos os valores é igual a 0 e, consequentemente, a média de X também é igual a 0:

                                    ∑𝑁
                                     𝑖=1 𝑥𝑖   −1000 − 999 − ⋯ + 999 + 1000 0
                             𝑋̅ =           =                             = =0
                                      𝑁                    𝑁               𝑁

Logo, a covariância entre as variáveis se torna:

                                                              ∑𝑁
                                                               𝑖=1 𝑥𝑖 . 𝑦𝑖
                                                  𝐶𝑜𝑣(𝑋, 𝑌) =
                                                                 𝑁

Sabendo que 𝑦𝑖 = (𝑥𝑖 )2, então:

                                                         ∑𝑁
                                                          𝑖=1 𝑥𝑖 . (𝑥𝑖 )
                                                                         2   ∑𝑁
                                                                              𝑖=1(𝑥𝑖 )
                                                                                       3
                                         𝐶𝑜𝑣(𝑋, 𝑌) =                       =
                                                              𝑁                 𝑁

A variável X3 assume os valores (-1000)3, (-999)3,..., 9993 e 10003. Assim, os valores negativos também
compensam os positivos e a soma é igual a 0:

                         ∑𝑁
                          𝑖=1(𝑥𝑖 )
                                   3
                                       (−1000)3 + (−999)3 − ⋯ + (999)3 + (−1000)3 0
             𝐶𝑜𝑣(𝑋, 𝑌) =             =                                           = =0
                            𝑁                              𝑁                      𝑁

Gabarito: D

26.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória discreta X tem os seguintes valores
possíveis e probabilidades associadas:

         Receita Federal (Analista Tributário) Estatística                                           114
         www.estrategiaconcursos.com.br                                                              173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

  x      -1      1       3
 p(x)    0,4    0,2     0,4

A variância de X é igual a:

a) 2,0

b) 2,4

c) 2,8

d) 3,2

e) 3,6

Comentários:

Para calcular a variância, primeiro precisamos da média (ou esperança), dada pela soma dos produtos dos
valores da variável pelas respectivas probabilidades:

                        𝐸(𝑋) = (−1) × 0,4 + 1 × 0,2 + 3 × 0,4 = −0,4 + 0,2 + 1,2 = 1,0

Agora, calculamos os desvios de cada resultado em relação à média e elevamos cada desvio ao quadrado.

Em seguida, multiplicamos cada quadrado pela respectiva probabilidade e somamos todos os resultados:

                                          𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)

                                                    x         -1      1        3
                                                  p(x)        0,4    0,2      0,4
                                                x - E(X)      -2      0        2
                                              [x - E(X)]2      4      0        4
                                           [x - E(X)]2.p(x)   1,6     0       1,6

A variância é a soma dos resultados da última linha:

                                               𝑉(𝑋) = 1,6 + 0 + 1,6 = 3,2

Gabarito: D

27.   (FGV/2021 – IMBEL) O estado de uma máquina pode ser representado por uma variável
aleatória X, cujos valores indicam se a máquina está funcionando (x=1), operando parcialmente
(x=1/2) ou em manutenção (x=0).


         Receita Federal (Analista Tributário) Estatística                                          115
         www.estrategiaconcursos.com.br                                                             173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A função de probabilidade desta variável aleatória é expressa a seguir:

                                                          𝟎, 𝟐, 𝒙 = 𝟎
                                                                    𝟏
                                                  𝒑(𝒙) = {𝟎, 𝟑, 𝒙 = }
                                                                    𝟐
                                                          𝟎, 𝟓, 𝒙 = 𝟏

O valor esperado e a variância desta variável valem, respectivamente,

a) 0,50 e 0,1525

b) 0,50 e 0,1575

c) 0,65 e 0,1525

d) 0,65 e 0,1575

e) 0,75 e 0,1575

Comentários:

Pela função de probabilidade apresentada:

   •   a probabilidade de 𝑋 = 0 é 𝑃(𝑋 = 0) = 0,2;
                              1          1
   •   a probabilidade de 𝑋 = 2 é 𝑃 (𝑋 = 2) = 0,3; e
   •   a probabilidade de 𝑋 = 1 é 𝑃(𝑋 = 1) = 0,5.

Para calcular o valor esperado, multiplicamos os valores da variável pelas respectivas probabilidades e
somamos os produtos:

                                                𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

                                                  1
                          𝐸(𝑋) = 0 × 0,2 +          × 0,3 + 1 × 0,5 = 0 + 0,15 + 0,5 = 0,65
                                                  2

Para calcular a variância, primeiro calculamos os desvios de cada resultado em relação à média (ou
esperança) e elevamos o resultado ao quadrado, conforme indicado na tabela a seguir:

                                             𝑋      𝑋 − 𝐸(𝑋)    [𝑋 − 𝐸(𝑋)]2
                                             0        -0,65       0,4225
                                            0,5       -0,15       0,0225
                                             1        0,35        0,1225

Agora, multiplicamos esses resultados pelas respectivas probabilidades:

        Receita Federal (Analista Tributário) Estatística                                           116
        www.estrategiaconcursos.com.br                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                         𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)

      𝑉(𝑋) = 0,4225 × 0,2 + 0,0225 × 0,3 + 0,1225 × 0,5 = 0,0845 + 0,00675 + 0,06125 = 0,1525

Gabarito: C

28.    (FGV/2021 – FunSaúde/CE) X e Y são variáveis aleatórias independentes, com médias E[X] =
2 e E[Y] = 4 e variâncias Var[X] = 2 e Var[Y] = 5.

A variável W = 4Y – 3X tem média e variância iguais, respectivamente, a

a) 8 e 56;

b) 8 e 62;

c) 8 e 74;

d) 10 e 98;

e) 10 e 106;

Comentários:

Essa questão pede a esperança e a variância de W = 4Y - 3X, dadas as esperanças e variâncias de Y e X e
sabendo que são variáveis independentes, ou seja, a covariância entre elas é nula.

Vamos começar pela esperança:

                                                  𝐸(𝑊) = 𝐸(4𝑌 − 3𝑋)

Pelas propriedades da esperança e sabendo que E(X) = 2 e E(Y) = 4, temos:

                           𝐸(𝑊) = 4. 𝐸(𝑌) − 3. 𝐸(𝑋) = 4 × 4 − 3 × 2 = 16 − 6 = 10

Em relação à variância, sabendo que as variáveis são independentes, então a variância da diferença será
igual à soma das variâncias:

                                      𝑉(𝑊) = 𝑉(4𝑌 − 3𝑊) = 𝑉(4𝑌) + 𝑉(3𝑊)

Pelas propriedades da variância, quando multiplicamos uma variável por uma constante, a variância é
multiplicada pela constante ao quadrado:

                               𝑉(𝑊) = 42 . 𝑉(𝑌) + 32 . 𝑉(𝑊) = 16. 𝑉(𝑌) + 9. 𝑉(𝑊)


        Receita Federal (Analista Tributário) Estatística                                           117
        www.estrategiaconcursos.com.br                                                              173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Sabendo que V(X) = 2 e V(Y) = 5, calculamos a variância de W:

                                        𝑉(𝑊) = 16 × 5 + 9 × 2 = 80 + 18 = 98

Gabarito: D

29.       (FGV/2018 – ALE-RO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

 x    -2         -1      0      1
 p(x) 0,1        0,2     0,3    0,4

A média de X é igual a:

a) -0,5

b) -0,2

c) -0,1

d) 0

e) 0,1

Comentários:

Para calcular a média (ou esperança), multiplicamos os possíveis resultados da variável pelas respectivas
probabilidades e, em seguida, somamos todos os produtos:

                                                  𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

                𝐸(𝑋) = (−2) × 𝑃(𝑋 = 2) + (−1) × 𝑃(𝑋 = −1) + 0 × 𝑃(𝑋 = 0) + 1 × 𝑃(𝑋 = 1)

                       𝐸(𝑋) = −2 × 0,1 − 1 × 0,2 + 0 × 0,3 + 1 × 0,4 = −0,2 − 0,2 + 0,4 = 0

Gabarito: D

30.  (FGV/2018 – COMPESA) Analise a tabela sobre o consumo diário de água dos habitantes de
um município de Pernambuco.

          Receita Federal (Analista Tributário) Estatística                                           118
          www.estrategiaconcursos.com.br                                                              173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

         Consumo
                              13L     20L      38L     50L    64L    83L       90L   112L 120L 163L 175L
       Diário de Água
       Probabilidade          5%      7%       8%      10%    9%     11% 11% 12%          15%   10%   2%

Selecionando de forma aleatória um indivíduo do município em questão, o valor esperado para seu
consumo diário de água será de

a) 84,36L

b) 86,12L

c) 87,5L

d) 90L

e) 112L

Comentários:

Para calcular o valor esperado do consumo diário, multiplicamos os valores de consumo pelas respectivas
probabilidades e somamos os produtos:

                                                  𝐸(𝑋) = ∑ 𝑥 × 𝑃(𝑋 = 𝑥)

𝐸(𝑋) = 13 × 0,05 + 20 × 0,07 + 38 × 0,08 + 50 × 0,1 + 64 × 0,09 + 83 × 0,11 + 90 × 0,11 + 112 × 0,12
            + 120 × 0,15 + 163 × 0,1 + 175 × 0,02

            𝐸(𝑋) = 0,65 + 1,4 + 3,04 + 5 + 5,76 + 9,13 + 9,9 + 13,44 + 18 + 16,3 + 3,5 = 86,12

Gabarito: B

31.       (FGV/2018 – ALE-RO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

 x    -2         -1     0       1
 p(x) 0,1        0,2    0,3     0,4

A variância de X é igual a

a) 0,16
b) 0,64
c) 1


          Receita Federal (Analista Tributário) Estatística                                                119
          www.estrategiaconcursos.com.br                                                                   173

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) 1,2
e) 1,8

Comentários:

Para calcular a variância, precisamos da média (ou esperança), dada pela soma dos produtos dos valores
da variável pelas respectivas probabilidades:

                    𝐸(𝑋) = −2 × 0,1 − 1 × 0,2 + 0 × 0,3 + 1 × 0,4 = −0,2 − 0,2 + 0,4 = 0

O próximo passo é calcular os desvios de cada valor da variável em relação à média (que será igual ao valor
da própria variável, uma vez que a média é nula) e elevamos os desvios ao quadrado. Em seguida,
multiplicamos cada quadrado pela respectiva probabilidade e somamos todos os resultados:

                                          𝑉(𝑋) = ∑[𝑋 − 𝐸(𝑋)]2 × 𝑃(𝑋 = 𝑥)

                                                 x           -2    -1     0     1
                                               p(x)          0,1   0,2   0,3   0,4
                                             x - E(X)        -2    -1     0     1
                                           [x - E(X)]2        4     1     0     1
                                        [x - E(X)]2.p(x)     0,4   0,2    0    0,4

A variância é a soma dos resultados da última linha:

                                             𝑉(𝑋) = 0,4 + 0,2 + 0 + 0,4 = 1

Gabarito: C

32.  (FGV/2018 – TJ-AL) Sejam X, Y e W três variáveis que representam quantidades que são, de
alguma forma, conhecidas:

X = número de crimes cometidos

Y = número de crimes notificados

W = número de crimes solucionados

Adicionalmente são conhecidas as seguintes estatísticas: E(X.Y) = 268, E(W.Y) = 26, E(X.W) = 85,
E(X) = 25, E(Y) = 10, E(W) = 3, DP(X) = 5 e DP(W) = DP(Y) = 4

Considerando as tendências lineares entre as variáveis como medidas para fins de avaliações, é
correto afirmar que:


         Receita Federal (Analista Tributário) Estatística                                              120
         www.estrategiaconcursos.com.br                                                                 173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) a relaçã o entre notificados e cometidos é mais fraca do que a observada entre cometidos e solucionados;

b) há uma tendê ncia para que um aumento de crimes solucionados afete negativamente o volume de
notificaçõ es;

c) a medida adimensional para a dispersã o da quantidade de crimes cometidos é maior do que a de
solucionados;

d) a medida de associaçã o entre cometidos e notificados é 40% maior do que a medida entre cometidos e
solucionados;

e) a soluçã o de uma quantidade maior de crimes tende a reduzir a quantidade de crimes cometidos.

Comentários:

O enunciado informa valores que permitem calcular os coeficientes de correlação entre as variáveis, o que
                                                            ==219a34==

nos permitirá analisar as alternativas A, B, D e E. Em relação à alternativa C, a medida adimensional para a
dispersão é o coeficiente de variação, o qual também pode ser calculado a partir dos dados fornecidos.

Para as variáveis X (crimes cometidos) e Y (crimes notificados), temos:

                                          𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌)

                                  𝐶𝑜𝑣(𝑋, 𝑌) = 268 − 25 × 10 = 268 − 250 = 18

Logo, o coeficiente de correlação é:

                                                                           𝐶𝑜𝑣(𝑋, 𝑌)
                                               𝜌(𝑋, 𝑌) =
                                                                         𝐷𝑃(𝑋) × 𝐷𝑃(𝑌)

                                                                          18    18
                                              𝜌(𝑋, 𝑌) =                       =    = 0,9
                                                                         5 × 4 20

Para as variáveis X (crimes cometidos) e W (crimes solucionados), temos:

                                        𝐶𝑜𝑣(𝑋, 𝑊) = 𝐸(𝑋. 𝑊) − 𝐸(𝑋). 𝐸(𝑊)

                                     𝐶𝑜𝑣(𝑋, 𝑊) = 85 − 25 × 3 = 85 − 75 = 10

Logo, o coeficiente de correlação é:

                                                                           𝐶𝑜𝑣(𝑋, 𝑊)
                                              𝜌(𝑋, 𝑊) =
                                                                         𝐷𝑃(𝑋) × 𝐷𝑃(𝑊)

                                                                          10    10
                                              𝜌(𝑋, 𝑊) =                       =    = 0,5
                                                                         5 × 4 20

        Receita Federal (Analista Tributário) Estatística                                                  121
        www.estrategiaconcursos.com.br                                                                     173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Para as variáveis Y (crimes notificados) e W (crimes solucionados), temos:

                                         𝐶𝑜𝑣(𝑌, 𝑊) = 𝐸(𝑌. 𝑊) − 𝐸(𝑌). 𝐸(𝑊)

Vale ressaltar que, por se tratar de um produto, a ordem das variáveis dentro do parêntesis não importa,
ou seja, 𝐸(𝑌. 𝑊) = 𝐸(𝑊. 𝑌).

                                     𝐶𝑜𝑣(𝑌, 𝑊) = 26 − 10 × 3 = 26 − 30 = −4

Logo, o coeficiente de correlação é:

                                                               𝐶𝑜𝑣(𝑌, 𝑊)
                                              𝜌(𝑌, 𝑊) =
                                                             𝐷𝑃(𝑌) × 𝐷𝑃(𝑊)

                                                             −4    1
                                           𝜌(𝑌, 𝑊) =            = − = −0,25
                                                            4×4    4

A alternativa A afirma que a relaçã o entre crimes notificados (Y) e crimes cometidos (X) é mais fraca que a
relação entre crimes cometidos (X) e crimes solucionados (W). No entanto, calculamos que 𝜌(𝑋, 𝑌) = 0,9
enquanto 𝜌(𝑋, 𝑊) = 0,5. Portanto, a relação entre X e Y é mais forte do que a relação entre X e W, logo, a
alternativa A está incorreta.

A alternativa B afirma que um aumento de crimes solucionados (W) tende a afetar negativamente o volume
de notificaçõ es (Y). De fato, calculamos que a correlação entre essas variáveis é negativa, 𝜌(𝑌, 𝑊) = −0,25,
logo, quando uma variável aumenta a outra diminui. Assim, a alternativa B está correta.

A alternativa D afirma que a medida de associação (isto é, o coeficiente de correlação) entre crimes
cometidos (X) e crimes notificados (Y) é 40% maior do que a medida entre cometidos (X) e solucionados
(W).

Calculamos que 𝜌(𝑋, 𝑌) = 0,9 e que 𝜌(𝑋, 𝑊) = 0,5. Portanto, de fato, a relação entre X e Y é mais forte do
que a relação entre X e W. Para calcular quão mais forte é essa relação, fazemos:

                                  𝜌(𝑋, 𝑌) − 𝜌(𝑋, 𝑊) 0,9 − 0,5 0,4 4
                                                   =         =    = = 0,8
                                       𝜌(𝑋, 𝑊)         0,5     0,5 5

Logo, a relação entre X e Y é 80% mais forte do que a relação entre X e W, e não 40%, como indicado na
alternativa D. Por isso, a alternativa está incorreta.

A alternativa E afirma que a solução de uma quantidade maior de crimes (W) tende a reduzir a quantidade
de crimes cometidos (X). No entanto, obtivemos um coeficiente de correlação entre essas duas variáveis
positivo, 𝜌(𝑋, 𝑊) = 0,5. Logo, o aumento de uma das variáveis tende a aumentar a outra variável e, por
isso, a alternativa E está incorreta.

Por fim, para analisar a alternativa C, precisamos do coeficiente de variação da quantidade de crimes
cometidos (X) e da quantidade de crimes solucionados (W):


        Receita Federal (Analista Tributário) Estatística                                                  122
        www.estrategiaconcursos.com.br                                                                     173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                            𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜
                                                  𝐶𝑉 =
                                                               𝑚é𝑑𝑖𝑎

                                                            𝐷𝑃(𝑋)    5
                                              𝐶𝑉 (𝑋) =            =    = 0,2
                                                            𝐸(𝑋)    25

                                                            𝐷𝑃(𝑊) 4
                                              𝐶𝑉 (𝑊) =           = ≅ 1,3
                                                            𝐸(𝑊)  3

Assim, a dispersão de X é menor do que a de W e, por isso, a alternativa C está incorreta.

Gabarito: B

33.    (FGV/2017 – MPE/BA) Um criminoso está avaliando se vale a pena ou não recorrer ao
instituto da colaboração premiada. Caso não recorra, a sua probabilidade de ser condenado é igual
a p, com 12 anos de reclusão. Se resolver delatar, pode pegar 6 anos de prisão, com probabilidade
de 0,4, ou 10 anos, com a probabilidade complementar.

Supondo que a decisão será tomada com base na esperança matemática da pena, o criminoso deve

a) não delatar se o valor de p for inferior a 0,75;

b) delatar se o valor de p for superior a 0,55;

c) não delatar caso o valor de p seja de 0,80;

d) mostrar-se indiferente caso o valor de p seja de 0,70;

e) delatar caso o valor de p seja inferior a 0,60.

Comentários:

O criminoso tem 2 alternativas: delatar ou não. Caso não faça a delação, poderá pegar 12 anos de reclusão,
com probabilidade p (ou não ser recluso, com a probabilidade complementar). Assim, a esperança da pena,
caso não delate, é de:

                                                      𝐸(𝑋𝐷̅ ) = 12. 𝑝

Caso faça a delação, poderá pegar:

       •    6 anos, com probabilidade de 0,4; ou
       •    10 anos, com a probabilidade complementar de 1 – 0,4 = 0,6

Assim, a esperança da pena caso delate é de:

        Receita Federal (Analista Tributário) Estatística                                              123
        www.estrategiaconcursos.com.br                                                                 173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                    𝐸(𝑋𝐷 ) = 6 × 0,4 + 10 × 0,6 = 2,4 + 6 = 8,4

Essas esperanças são iguais para o seguinte valor de p:

                                                     𝐸(𝑋𝐷̅ ) = 𝐸(𝑋𝐷 )

                                                        12. 𝑝 = 8,4

                                                        8,4 2,1
                                                   𝑝=      =    = 0,7
                                                        12   3

Assim, o criminoso:

   •   será indiferente se p = 0,7;
   •   irá delatar se p > 0,7;
   •   não irá delatar se p < 0,7.

Logo, a única resposta correta é a alternativa D.

Gabarito: D

34.   (FGV/2017 – IBGE) Sejam X e Y duas variáveis aleatórias com variâncias iguais a 21 e 17,
respectivamente. Além disso, sabe-se que a variável Z representada pela diferença entre as duas
tem variância igual a 44.

Com base em tais informações, é correto deduzir que:

a) as variáveis Z e X são positivamente correlacionadas;
b) o momento de segunda ordem de Y é maior do que o de Z;
c) a média de Z é menor do que ambas as médias, de X e de Y;
d) a covariância entre X e Y é positiva;
e) as variáveis X e Y são negativamente correlacionadas.

Comentários:

A questão informa que Z é igual a diferença entre X e Y. A variância da diferença é dada por:

                                      𝑉(𝑋 − 𝑌) = 𝑉(𝑋) + 𝑉(𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌)

A fórmula é a mesma para V(Y - X). Sabendo que V(X) = 21, V(Y) = 17 e V(Z) = V(X - Y) = 44, a covariância
é:

        Receita Federal (Analista Tributário) Estatística                                             124
        www.estrategiaconcursos.com.br                                                                173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                       𝑉(𝑋 − 𝑌) = 21 + 17 − 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 44

                                              −2. 𝐶𝑜𝑣(𝑋, 𝑌) = 44 − 38 = 6

                                                                6
                                                  𝐶𝑜𝑣(𝑋, 𝑌) =      = −3
                                                                −2

Como a covariância é negativa, podemos concluir que as variáveis são negativamente correlacionadas.
Assim, a alternativa E está correta e as alternativas A e D estão incorretas.

A alternativa C faz uma afirmação a respeito das médias, mas não podemos comparar as médias das
variáveis, tendo como informação apenas as variâncias e covariância. Assim, a alternativa C está incorreta,
porque ela não pode ser deduzida a partir das informações dadas no enunciado.

Similarmente, a alternativa B faz uma afirmação a respeito do momento de segunda ordem das variáveis, o
qual corresponde à soma da variância com o quadrado da média (fórmula da variância):

                                                 𝑉(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2

                                                 𝐸(𝑋 2 ) = 𝑉(𝑋) + [𝐸(𝑋)]2

Como não conhecemos a média das variáveis, não podemos comparar o segundo momento das variáveis.
Assim, a alternativa B também está incorreta, porque ela não pode ser deduzida a partir das informações
dadas.

Gabarito: E

35.    (FGV/2017 – MPE-BA) Para duas variáveis aleatórias estão disponíveis as seguintes
informações estatísticas: Cov (Y, Z) = 18, E(Z) = 4, Var(Z) = 25, E(Y) = 4 e CV(Y) = 2, onde CV é o
coeficiente de variação, além da nomenclatura usual.

Então a expressão 𝑬(𝒁𝟐 ) + 𝑽𝒂𝒓(𝟐𝒀 − 𝟑𝒁) vale:

a) 265

b) 274

c) 306

d) 373

e) 405

Comentários:


         Receita Federal (Analista Tributário) Estatística                                              125
         www.estrategiaconcursos.com.br                                                                 173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

O valor de 𝐸(𝑍 2 ) pode ser calculado pela fórmula da variância:

                                              𝑉𝑎𝑟(𝑍) = 𝐸(𝑍 2 ) − [𝐸(𝑍)]2

                                              𝐸(𝑍 2 ) = 𝑉𝑎𝑟(𝑍) + [𝐸(𝑍)]2

O enunciado informa que Var(Z) = 25 e que E(Z) = 4, logo:

                                         𝐸(𝑍 2 ) = 25 + [4]2 = 25 + 16 = 41

E o valor de Var(2Y – 3Z) pode ser calculado pela fórmula da variância da diferença entre duas variáveis:

                                  𝑉𝑎𝑟(𝐴 − 𝐵) = 𝑉𝑎𝑟(𝐴) + 𝑉𝑎𝑟(𝐵) − 2. 𝐶𝑜𝑣(𝐴, 𝐵)

                             𝑉𝑎𝑟(2𝑌 − 3𝑍) = 𝑉𝑎𝑟(2𝑌) + 𝑉𝑎𝑟(3𝑍) − 2. 𝐶𝑜𝑣(2𝑌, 3𝑍)

Quando multiplicamos uma variável por uma constante, a variância dessa variável é multiplicada pelo
quadrado dessa constante:

                                                    𝑉(𝑘. 𝐴) = 𝑘 2 . 𝑉(𝐴)

Aplicando essa propriedade na fórmula anterior, temos:

                           𝑉𝑎𝑟(2𝑌 − 3𝑍) = 22 . 𝑉𝑎𝑟(𝑌) + 32 . 𝑉𝑎𝑟(𝑍) − 2. 𝐶𝑜𝑣(2𝑌, 3𝑍)

                            𝑉𝑎𝑟(2𝑌 − 3𝑍) = 4. 𝑉𝑎𝑟(𝑌) + 9. 𝑉𝑎𝑟(𝑍) − 2. 𝐶𝑜𝑣(2𝑌, 3𝑍)

E quando multiplicamos uma variável por uma constante, a covariância envolvendo essa variável é
multiplicada por essa constante:

                                          𝐶𝑜𝑣(𝑘. 𝐴, 𝑙. 𝐵) = 𝑘 × 𝑙 × 𝐶𝑜𝑣(𝐴, 𝐵)

Aplicando essa propriedade na fórmula anterior, temos:

                         𝑉𝑎𝑟(2𝑌 − 3𝑍) = 4. 𝑉𝑎𝑟(𝑌) + 9. 𝑉𝑎𝑟(𝑍) − 2 × 2 × 3. 𝐶𝑜𝑣(𝑌, 𝑍)

                             𝑉𝑎𝑟(2𝑌 − 3𝑍) = 4. 𝑉𝑎𝑟(𝑌) + 9. 𝑉𝑎𝑟(𝑍) − 12. 𝐶𝑜𝑣(𝑌, 𝑍)

O valor de Var(Y) pode ser obtido a partir do coeficiente de variação de Y fornecido, o qual corresponde à
razão entre o desvio padrão e a média da variável:

                                                                  𝜎𝑌
                                                      𝐶𝑉 (𝑌) =
                                                                 𝐸(𝑌)

                                           𝜎𝑌 = 𝐶𝑉 (𝑌) × 𝐸(𝑌) = 2 × 4 = 8

        Receita Federal (Analista Tributário) Estatística                                              126
        www.estrategiaconcursos.com.br                                                                 173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

E a variância é o quadrado do desvio padrão:

                                             𝑉𝑎𝑟(𝑌) = (𝜎𝑌 )2 = (8)2 = 64

Substituindo esse resultado e os dados fornecidos, Var(Z) = 25 e Cov(Y, Z) = 18, na equação acima:

                   𝑉𝑎𝑟(2𝑌 − 3𝑍) = 4.× 64 + 9 × 25 − 12 × 18 = 256 + 225 − 216 = 265

E o valor de toda a expressão indicada na questão é:

                                     𝐸(𝑍 2 ) + 𝑉𝑎𝑟(2𝑌 − 3𝑍) = 41 + 265 = 306

Gabarito: C

36.   (FGV/2016 – IBGE) Sejam X, Z e W variáveis aleatórias tais que, Var(W) = 16, 𝝆(X, Z) = 1,
Var(3Z + 2X) = 144, Cov(W, Z) = 4 e 𝝆(W, Z) = 0,5.

Então a variância de X é:

a) 4

b) 9

c) 16

d) 25

e) 36

Comentários:

Essa questão exige conhecimentos de estatística similares à questão anterior, porém, para resolver essa
questão você precisará fazer mais contas.

Vamos primeiro encontrar a variância de Z, utilizando a informação de que Cov(W,Z) = 4, que 𝜌(W,Z) = 0,5
e que Var(W) = 16, considerando a definição de correlação:

                                                               𝐶𝑜𝑣(𝑊, 𝑍)
                                            𝜌(𝑊, 𝑍) =
                                                            √𝑉𝑎𝑟(𝑊). √𝑉𝑎𝑟(𝑍)

                                                                 4
                                                   0,5 =
                                                            √16. √𝑉𝑎𝑟(𝑍)

        Receita Federal (Analista Tributário) Estatística                                            127
        www.estrategiaconcursos.com.br                                                               173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                   4. √𝑉𝑎𝑟(𝑍). 0,5 = 4

                                                     2. √𝑉𝑎𝑟(𝑍) = 4

                                                       √𝑉𝑎𝑟(𝑍) = 2

                                                     𝑉𝑎𝑟(𝑍) = 22 = 4

Agora, vamos utilizar a informação de que Var(3Z + 2X) = 144, considerando a fórmula da variância da
soma de duas variáveis:

                                  𝑉𝑎𝑟(𝐴 + 𝐵) = 𝑉𝑎𝑟(𝐴) + 𝑉𝑎𝑟(𝐵) + 2. 𝐶𝑜𝑣(𝐴, 𝐵)

                         𝑉𝑎𝑟(3𝑍 + 2𝑋) = 𝑉𝑎𝑟(3𝑍) + 𝑉𝑎𝑟(2𝑋) + 2. 𝐶𝑜𝑣(3𝑍, 2𝑋) = 144

Pelas propriedades da variância e da covariância, temos:

                   𝑉𝑎𝑟(3𝑍 + 2𝑋) = 32 . 𝑉𝑎𝑟(𝑍) + 22 . 𝑉𝑎𝑟(𝑋) + 2 × 3 × 2. 𝐶𝑜𝑣(𝑍, 𝑋) = 144

                        𝑉𝑎𝑟(3𝑍 + 2𝑋) = 9. 𝑉𝑎𝑟(𝑍) + 4. 𝑉𝑎𝑟(𝑋) + 12. 𝐶𝑜𝑣(𝑍, 𝑋) = 144

Sabemos que Var(Z) = 4, então:

                           𝑉𝑎𝑟(3𝑍 + 2𝑋) = 9 × 4 + 4. 𝑉𝑎𝑟(𝑋) + 12. 𝐶𝑜𝑣(𝑍, 𝑋) = 144

                                   4. 𝑉𝑎𝑟(𝑋) + 12. 𝐶𝑜𝑣(𝑍, 𝑋) = 144 − 36 = 108

Reorganizando a fórmula do coeficiente de correlação, temos que a covariância é dada por:

                                      𝐶𝑜𝑣(𝑍, 𝑋) = 𝜌(𝑍, 𝑋). √𝑉𝑎𝑟(𝑍). √𝑉𝑎𝑟(𝑋)

O enunciado informa que 𝜌(𝑋, 𝑍) = 𝜌(𝑍, 𝑋) = 1 e sabemos que √𝑉𝑎𝑟(𝑍) = 2, logo:

                                     𝐶𝑜𝑣(𝑍, 𝑋) = 1 × 2. √𝑉𝑎𝑟(𝑋) = 2. √𝑉𝑎𝑟(𝑋)

Substituindo esse resultado na equação acima, temos:

                                         4. 𝑉𝑎𝑟(𝑋) + 12 × 2. √𝑉𝑎𝑟(𝑋) = 108

                                              𝑉𝑎𝑟(𝑋) + 6. √𝑉𝑎𝑟(𝑋) = 27

Uma forma de resolver essa questão, a partir desse ponto, é substituindo os valores indicados nas
alternativas para encontrar a alternativa correta.

        Receita Federal (Analista Tributário) Estatística                                        128
        www.estrategiaconcursos.com.br                                                           173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A outra forma é chamando √𝑽𝒂𝒓(𝑿) de x. Nessa situação, temos a seguinte equação de 2º grau:

                                                    𝑥 2 + 6𝑥 − 27 = 0

Aplicando a fórmula de Bhaskara, temos:

                            ∆= 𝑏 2 − 4. 𝑎. 𝑐 = 62 − 4 × 1 × (−27) = 36 + 108 = 144

                                                     −𝑏 ± √∆ −6 ± 12
                                                𝑥=          =
                                                       2𝑎       2
                                                            −6 + 12
                                                    𝑥1 =            =3
                                                               2
                                                            −6 − 12
                                                    𝑥2 =            −9
                                                               2

Como x representa a raiz da variância, então necessariamente x é um número positivo, ou seja:

                                                    𝑥 = √𝑉𝑎𝑟(𝑋) = 3

Assim, a variância de X é:

                                                    𝑉𝑎𝑟(𝑋) = 32 = 9

Gabarito: B

37.    (FGV/2015 – TJ/BA) Sejam X, Y e Z três variáveis aleatórias que apresentam as seguintes
estatísticas elementares:

Var(X) = 4, Var(Y) = 25, Var(Z) = 16, Cov(X,Y) = Cov(Z,Y), Var(Z-X) = 8 e ρ(X,Y) = 0,6.

Com base em tais informações, é correto afirmar que:

a) ρ(X,Z) = 0,75 e Var(Z + Y) = 53;

b) ρ(X,Z) = 0,25 e Var(Z + Y) = 65;

c) ρ(X,Z) = 0,80 e Var(Z + Y) = 41;

d) ρ(X,Z) = 0,75 e Var(Z + Y) = 65;

e) ρ(X,Z) = 0,25 e Var(Z + Y) = 53;


        Receita Federal (Analista Tributário) Estatística                                       129
        www.estrategiaconcursos.com.br                                                          173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Comentários:

Para encontrar o coeficiente de correlação ρ(X,Z), precisamos da covariância Cov(X,Z). Esse valor pode ser
obtido a partir do dado fornecido Var(Z – X). A variância da diferença é dada por:

                                 𝑉𝑎𝑟(𝑍 − 𝑋) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑍) − 2 × 𝐶𝑜𝑣(𝑋, 𝑍)

Substituindo os dados fornecidos, Var(X) = 4, Var (Z) = 16 e Var(X – Z) = 8, temos:

                                              8 = 4 + 16 − 2 × 𝐶𝑜𝑣(𝑋, 𝑍)

                                             2 × 𝐶𝑜𝑣(𝑋, 𝑍) = 20 − 8 = 12

                                                      𝐶𝑜𝑣(𝑋, 𝑍) = 6

Agora, podemos calcular o coeficiente de correlação:

                                             𝐶𝑜𝑣(𝑋, 𝑍)            𝐶𝑜𝑣(𝑋, 𝑍)        6
                          𝜌(𝑋, 𝑍) =                           =               =       = 𝟎, 𝟕𝟓
                                      √𝑉𝑎𝑟(𝑋) × √𝑉𝑎𝑟(𝑍)           √4 × √16        2×4

Para calcular a variância da soma Var(Z + Y), precisamos da covariância Cov(Z,Y).

O enunciado informa que essa covariância é igual à covariância Cov(X,Y), que pode ser calculada a partir
do valor da correlação 𝜌(𝑋, 𝑌) fornecido no enunciado:

                                    𝐶𝑜𝑣(𝑋, 𝑌) = 𝜌(𝑋, 𝑌) × √𝑉𝑎𝑟(𝑋) × √𝑉𝑎𝑟(𝑌)

Substituindo os dados fornecidos, Var(X) = 4, Var(Y) = 25 e 𝜌(𝑋, 𝑌) = 0,6, temos:

                                  𝐶𝑜𝑣(𝑋, 𝑌) = 0,6 × √4 × √25 = 0,6 × 2 × 5 = 6

                                              𝐶𝑜𝑣(𝑍, 𝑌) = 𝐶𝑜𝑣(𝑋, 𝑌) = 6

Sabendo que Var(Z) = 16 e Var(Y) = 25, a variância da soma Var(Z + Y) é, portanto:

            𝑉𝑎𝑟(𝑍 + 𝑌) = 𝑉𝑎𝑟(𝑍) + 𝑉𝑎𝑟(𝑌) + 2 × 𝐶𝑜𝑣(𝑍, 𝑌) = 16 + 25 + 2 × 6 = 41 + 12 = 𝟓𝟑

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                              130
        www.estrategiaconcursos.com.br                                                                 173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                       AVISO IMPORTANTE!

Olá, alunos (as)!

Informamos que não temos mais questões da banca, referente ao assunto tratado na aula de hoje, em
virtude de baixa cobrança deste tópico ao longo dos anos. No entanto, para complementar o estudo e deixar
sua preparação em alto nível, preparamos um caderno de questões inéditas que servirá como treino e
aprimoramento do conteúdo.

Em caso de dúvidas, não deixe de nos chamar no Fórum de dúvidas!

Bons estudos!

Estratégia Concursos

        Receita Federal (Analista Tributário) Estatística                                             131
        www.estrategiaconcursos.com.br                                                                173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                      QUESTÕES COMENTADAS – INÉDITAS

Noções de variáveis discretas

1.      Abel planeja investir o seu capital, mas está em dúvida entre dois investimentos, cujos retornos
variam de acordo com o cenário econômico. Com o primeiro investimento, Abel irá obter o dobro do
capital investido no cenário favorável; 20% a mais do capital investido no cenário intermediário; e 90% do
capital investido no cenário desfavorável. Em relação ao segundo investimento, Abel irá obter o triplo do
capital investido no cenário favorável; o mesmo capital investido no cenário intermediário; e 50% do
capital investido no cenário desfavorável.

Considera-se que a probabilidade do cenário favorável é de 20%, do cenário intermediário é de 50% e do
cenário desfavorável é de 30%. Pelo critério do maior valor esperado, Abel deve optar pelo _______
(primeiro/segundo) investimento, em que se espera obter ____ vezes o capital investido.

A alternativa que completa corretamente as lacunas é:

a) segundo; 1,50

b) primeiro; 1,27

c) segundo; 0,75

d) primeiro; 1,10

e) segundo; 1,25

Comentários:

Para visualizar melhor essa questão, podemos montar uma tabela com os possíveis cenários e os valores que
Abel irá obter de cada investimento, em cada cenário, supondo que investiu x:

                          Cenário    Probabilidade          Investimento I   Investimento II
                         Favorável       20%                      2x                3x
                       Intermediário     50%                     1,2x               1x
                        Desfavorável     30%                     0,9x             0,5x

Para calcular o valor esperado de cada investimento, multiplicamos os retornos pelas respectivas
probabilidades e somamos os produtos. Para o primeiro investimento, a esperança é:

               𝐸(𝐼) = 2𝑥 × 0,2 + 1,2𝑥 × 0,5 + 0,9𝑥 × 0,3 = 0,4𝑥 + 0,6𝑥 + 0,27𝑥 = 1,27𝑥

Para o segundo investimento, a esperança é:

                𝐸(𝐼𝐼) = 3𝑥 × 0,2 + 1𝑥 × 0,5 + 0,5𝑥 × 0,3 = 0,6𝑥 + 0,5𝑥 + 0,15𝑥 = 1,25𝑥

        Receita Federal (Analista Tributário) Estatística                                              132
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Portanto, o primeiro investimento tem maior valor esperado, em que se espera obter 1,27 vezes o capital
investido.

Gabarito: B

2.      Um representante de vendas possui 2 produtos para vender: o produto A, com valor de R$1.000,00;
e o produto B, com valor de R$500,00. Em um certo dia, o vendedor deve escolher entre encontrar com o
cliente X ou com o cliente Y, com o objetivo de efetuar uma venda. Para ambos os clientes, a probabilidade
de vender o produto B é o triplo da probabilidade de vender o produto A, não sendo possível a venda de
ambos os produtos.

Considerando essa situação hipotética, é correto afirmar que:

                                                                                           1
a) A probabilidade de o representante vender o produto A ao cliente X é no máximo igual a 3.

b) Se a probabilidade de o representante vender o produto B ao cliente Y for igual a 15%, então o valor
esperado de venda a esse cliente será igual a R$ 525,00.

c) Se a probabilidade de o representante vender o produto A ao cliente Y for metade da probabilidade de ele
vender o produto B ao cliente X, então o valor esperado de venda ao cliente Y será uma vez e meia o valor
esperado de venda ao cliente X.

d) Se a probabilidade de o representante vender o produto A ao cliente X for igual a 25%, então a
probabilidade de ele efetuar alguma venda a esse cliente é igual a 75%.

e) Se a probabilidade de o representante vender o produto B ao cliente Y for o dobro da probabilidade de
ele vender o produto A ao cliente X, então o valor esperado de venda ao cliente Y será maior que o valor
esperado de venda ao cliente X.

Comentários:

O enunciado informa que há 2 produtos, mutuamente exclusivos, a venda: A com valor de R$ 1.000 e B com
valor de R$ 500, sendo que a probabilidade de vender o produto B é o triplo da probabilidade de vender o
produto A:

                                                       𝑝𝐵 = 3. 𝑝𝐴

Sabe-se, ainda, que há 2 clientes, mutuamente exclusivos: X e Y.

A alternativa A pede a probabilidade máxima de o representante vender o produto A ao cliente X. Para isso,
devemos considerar que a probabilidade de venda (do produto A ou do produto B) é no máximo igual a 1:

                                                      𝑝𝐴 + 𝑝𝐵 ≤ 1

                                                    𝑝𝐴 + 3. 𝑝𝐴 ≤ 1

        Receita Federal (Analista Tributário) Estatística                                               133
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                                        4. 𝑝𝐴 ≤ 1

                                                                           1
                                                            𝑝𝐴 ≤
                                                                           4
                                                                                     1   1
Logo, a probabilidade de vender o produto A é no máximo igual a 4 e não a 3. Logo, a alternativa A está
incorreta.

Em relação à alternativa D, sendo 𝑝𝐴 = 25%, a probabilidade de venda de um dos produtos, A ou B, é igual
a 100%, como vimos. Logo, a alternativa D também está incorreta.

A alternativa B afirma que a probabilidade de venda do produto B ao cliente Y é igual a 15%. Nessa situação,
a probabilidade de venda do produto A a esse cliente é:

                                                       𝑝𝐵 = 3. 𝑝𝐴
                                                            ==219a34==

                                                      0,15 = 3. 𝑝𝐴

                                                            0,15
                                                  𝑝𝐴 =           = 0,05
                                                             3

Assim, o valor esperado de venda para esse cliente é:

             𝐸(𝑌) = 1000 × 𝑝𝐴 + 500 × 𝑝𝐵 = 1000 × 0,05 + 500 × 0,15 = 50 + 75 = 125

Que é diferente de R$ 525, logo a alternativa B está incorreta.

A alternativa C supõe que a probabilidade de venda do produto A ao cliente Y é metade da probabilidade de
venda do produto B ao cliente X:

                                                                         1
                                                  𝑝𝐴 (𝑌) =                 . 𝑝 (𝑋)
                                                                         2 𝐵

Sabendo que 𝑝𝐵 = 3. 𝑝𝐴 para ambos os clientes, então:

                                                1
                                        𝑝𝐴 (𝑌) = . [3. 𝑝𝐴 (𝑋)] = 1,5. 𝑝𝐴 (𝑋)
                                                2

O valor esperado da venda para X pode ser expresso como:

                 𝐸(𝑋) = 1000 × 𝑝𝐴 (𝑋) + 500 × 𝑝𝐵 (𝑋) = 1000 × 𝑝𝐴 (𝑋) + 500 × 3. 𝑝𝐴 (𝑋)

                                                 𝐸(𝑋) = 2500. 𝑝𝐴 (𝑋)

E o valor esperado de venda para Y pode ser expresso como:

                 𝐸(𝑌) = 1000 × 𝑝𝐴 (𝑌) + 500 × 𝑝𝐵 (𝑌) = 1000 × 𝑝𝐴 (𝑌) + 500 × 3. 𝑝𝐴 (𝑌)

                                                 𝐸(𝑌) = 2500. 𝑝𝐴 (𝑌)


        Receita Federal (Analista Tributário) Estatística                                               134
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Sabendo que 𝑝𝐴 (𝑌) = 1,5. 𝑝𝐴 (𝑋), o valor esperado de venda para Y é dado por:

                          𝐸(𝑌) = 2500. [1,5. 𝑝𝐴 (𝑋)] = 1,5 × 2500. 𝑝𝐴 (𝑋) = 1,5. 𝐸(𝑋)

Portanto, o valor esperado de Y, de fato, será igual a uma vez e meia o valor esperado de X; e a alternativa C
está correta.

A alternativa E supõe que a probabilidade de venda do produto B ao cliente Y é o dobro da probabilidade de
venda do produto A ao cliente X:

                                                    𝑝𝐵 (𝑌) = 2. 𝑝𝐴 (𝑋)

Sabendo que 𝑝𝐵 = 3. 𝑝𝐴 para ambos os clientes, então:

                                                  3. 𝑝𝐴 (𝑌) = 2. 𝑝𝐴 (𝑋)

                                                           2
                                                   𝑝𝐴 (𝑌) = . 𝑝𝐴 (𝑋)
                                                           3

Sabendo que 𝐸(𝑋) = 2500. 𝑝𝐴 (𝑋) e que 𝐸(𝑌) = 2500. 𝑝𝐴 (𝑌), podemos indicar o valor esperado de Y como:

                                           2           2                2
                             𝐸(𝑌) = 2500. ൤ . 𝑝𝐴 (𝑋)൨ = × 2500. 𝑝𝐴 (𝑋) = . 𝐸(𝑋)
                                           3           3                3

Logo, o valor esperado de Y será menor (e não maior) do que o valor esperado de X; e a alternativa E está
errada.

Gabarito: C

                                                                                          𝒙
3.    Suponha a função de probabilidade para a variável aleatória discreta X 𝒑(𝒙) = 𝒌, para x = 1, 2 e 3,
sendo k uma constante. Se F(.) é a função distribuição acumulada correspondente, então F(2,5) é igual a:

a) 2/3

b) 0

c) 1/2

d) 1

e) 1/6

Comentários:

O primeiro passo é definir o valor de k, sabendo que a soma das probabilidades para x = 1, x = 2 e x = 3 é
igual a 1:


         Receita Federal (Analista Tributário) Estatística                                                135
         www.estrategiaconcursos.com.br                                                                   173

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 07

                                        𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) = 1

                                                        1 2 3
                                                         + + =1
                                                        𝑘 𝑘 𝑘
                                                               6
                                                                 =1
                                                               𝑘

                                                               𝑘=6

O valor F(2,5) é a soma das probabilidades para os valores de X menores ou iguais a 2,5, no caso, X = 1 e X
=2:

                                    𝐹(2,5) = 𝑃(𝑋 ≤ 2,5) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2)

                                                               1 2 3 1
                                                  𝐹(2,5) =      + = =
                                                               6 6 6 2

Gabarito: C

ATENÇÃO: O ENUNCIADO A SEGUIR REFERE-SE ÀS QUESTÕES 4 A 6.

Suponha uma variável aleatória discreta X com função de distribuição acumulada dada por:

                                            x      -2     -1     0     1       2
                                           F(x)    3k     5k     7k   15k     20k

Em que k representa uma constante.

4.        A probabilidade de X assumir valores positivos é igual a:

a) 0,70

b) 0,86

c) 0,75

d) 0,84

e) 0,65

Comentários:

A questão fornece a função de distribuição acumulada (f.d.a.) da variável, 𝐹(𝑥) = 𝑃(𝑋 ≤ 𝑥). Sabendo que a
probabilidade associada a todos os valores possíveis da variável é igual a 1, então a f.d.a. para o maior valor
da variável é igual a 1:

           Receita Federal (Analista Tributário) Estatística                                               136
           www.estrategiaconcursos.com.br                                                                  173

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

                                              𝐹(2) = 𝑃(𝑋 ≤ 2) = 20𝑘 = 1

                                                                1
                                                       𝑘=         = 0,05
                                                               20

A probabilidade de X assumir valores positivos (X > 0) pode ser calculada pelo complemento da probabilidade
𝑃(𝑋 ≤ 0):

                                         𝑃(𝑋 > 0) = 1 − 𝑃(𝑋 ≤ 0) = 1 − 𝐹(0)

                               𝑃(𝑋 > 0) = 1 − 7𝑘 = 1 − 7 × 0,05 = 1 − 0,35 = 0,65

Gabarito: E

5.       A média e moda da variável valem, respectivamente:

a) 0,88 e 2

b) 0 e 1

c) 0,5 e 0,40

d) 0 e 2

e) 0,5 e 1

Comentários:

O primeiro passo é conhecer o valor de k, que calculamos na questão anterior, sabendo que a f.d.a. para o
maior valor da distribuição é igual a 1:

                                                      𝐹(2) = 20𝑘 = 1

                                                                1
                                                       𝑘=         = 0,05
                                                               20

Agora, vamos calcular a sua distribuição de probabilidades a partir da f.d.a. A probabilidade de um valor é
igual à diferença entre a f.d.a. para aquele valor e a f.d.a. para o valor anterior:

        x             -2                    -1                      0                    1                  2
       F(x)      3*0,05 = 0,15        5*0,05 = 0,25          7*0,05 = 0,35       15*0,05 = 0,75       20*0,05 = 1
     P(X = x)        0,15           0,25 - 0,15 = 0,10     0,35 - 0,25 = 0,10   0,75 - 0,35 = 0,40   1 - 0,75 = 0,25

Podemos observar que a moda, isto é, o valor da distribuição associado à maior probabilidade de ocorrência
é Moda(X) = 1.

           Receita Federal (Analista Tributário) Estatística                                                           137
           www.estrategiaconcursos.com.br                                                                              173

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

Para calcular a média (ou esperança), multiplicamos os valores da variável pelas respectivas probabilidades
e somamos os produtos:

     𝐸(𝑋) = −2 × 0,15 − 1 × 0,10 + 0 × 0,10 + 1 × 0,40 + 2 × 0,25 = −0,3 − 0,1 + 0 + 0,4 + 0,5 = 0,5

Gabarito: E

6.        A variância da variável é:

a) 1,85

b) 1,61

c) 10,00

d) 1,47

e) 2,00

Comentários:

Para calcular a variância, precisamos da média, que calculamos na questão anterior, E(X) = 0,5. Agora, vamos
construir uma tabela com os desvios em relação à média; esses desvios elevados ao quadrado; e esses
quadrados multiplicados pelas respectivas probabilidades (que calculamos na questão anterior):

               x                 -2                  -1                0               1               2
             P(x)              0,15                 0,10             0,10            0,40            0,25
           x - E(X)       -2 - 0,5 = -2,5     -1 - 0,5 = -1,5   0 - 0,5 = -0,5   1 - 0,5 = 0,5   2 - 0,5 = 1,5
         [x - E(X)]2      (-2,5)2 = 6,25      (-1,5)2 = 2,25    (-0,5)2 = 0,25   (0,5)2 = 0,25   (1,5)2 = 2,25
      [x - E(X)]2. P(x)       0,9375               0,225            0,025              1            0,5625

E a variância corresponde à soma da última linha:

                                   V(X) = 0,9375 + 0,225 + 0,025 + 1 + 0,5625 = 1,85

Gabarito: A

7.     Suponha que a variável X assuma apenas os valores 1, 2, 3, 4 e 5. Sendo F(.) a função distribuição
acumulada correspondente, sabe-se que F(1,23) = 10%, que F(2,35) = 30% e que F(4,52) = 70%. Sabendo
que P(X = 5) é o dobro de P(X = 4), então é verdadeiro que:

a) P(X = 3) = 40%

b) P(2 < X < 4) = 60%


           Receita Federal (Analista Tributário) Estatística                                                     138
           www.estrategiaconcursos.com.br                                                                        173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

c) A moda de X é igual a 4

d) P(X ≥ 4) = 30%

e) P(X ≤ 3) = 55%

Comentários:

O enunciado informa que a variável assume apenas os valores 1, 2, 3, 4 e 5. Assim, a função distribuição
acumulada F(1,23) é a probabilidade P(X = 1):

                                  𝐹(1,23) = 𝑃(𝑋 ≤ 1,23) = 𝑃(𝑋 = 1) = 10%

A função distribuição acumulada F(2,35) corresponde à soma das probabilidades P(X = 1) e P(X = 2):

                               𝐹(2,35) = 𝑃(𝑋 ≤ 2,35) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2)

Sabendo que F(2,35) = 30% e que P(X = 1) = 10%, podemos calcular a probabilidade P(X = 2):

                                       𝐹(2,35) = 10% + 𝑃(𝑋 = 2) = 30%

                                         𝑃(𝑋 = 2) = 30% − 10% = 20%

O enunciado informa que F(4,52) = 70%. A função distribuição acumulada nesse ponto contempla todos os
valores, exceto X = 5. Logo, a probabilidade P(X = 5) é complementar:

                             𝑃(𝑋 = 5) = 100% − 𝐹(4,52) = 100% − 70% = 30%

Sabendo que essa probabilidade é o dobro de P(X = 4), então:

                                             𝑃(𝑋 = 5) = 2 × 𝑃(𝑋 = 4)

                                                            30%
                                              𝑃(𝑋 = 4) =        = 15%
                                                             2

Conhecendo P(X = 1) = 10%, P(X = 2) = 20% e P(X = 4) = 15%, podemos utilizar o valor da função distribuição
acumulada F(4,52) = 70% para calcular a probabilidade P(X = 3):

                𝐹(4,52) = 𝑃(𝑋 ≤ 4,52) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) + 𝑃(𝑋 = 4)

                              𝐹(4,52) = 10% + 20% + 𝑃(𝑋 = 3) + 15% = 70%

                                         𝑃(𝑋 = 3) = 70% − 45% = 25%

Assim, concluímos que a alternativa A está incorreta, assim como a alternativa B, pois P(2 < X < 4) = P(X = 3).

Em relação à alternativa C, a moda é X = 5, pois é o valor associado à maior probabilidade. Logo, a alternativa
C também está incorreta.

        Receita Federal (Analista Tributário) Estatística                                                  139
        www.estrategiaconcursos.com.br                                                                     173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Em relação à alternativa D, temos:

                          𝑃(𝑋 ≥ 4) = 𝑃(𝑋 = 4) + 𝑃(𝑋 = 5) = 15% + 30% = 45%

Logo, a alternativa D está incorreta.

Em relação à alternativa E, temos:

              𝑃(𝑋 ≤ 3) = 𝑃(𝑋 = 1) + 𝑃(𝑋 = 2) + 𝑃(𝑋 = 3) = 10% + 20% + 25% = 55%

Logo, a alternativa E está correta.

Gabarito: E

8.     Maria estava analisando um relatório de dados e resolveu verificar as proporções com que cada
algarismo aparecia, no intuito de verificar a sua aleatoriedade. As proporções de cada algarismo estão
indicadas na tabela a seguir:

                  0        1        2         3        4      5       6     7     8     9
                 20%      18%      15%       12%      11%    6%      5%    6%    4%    3%

Considerando a distribuição de probabilidade encontrada, Maria desconfiou dos dados do relatório
porque o terceiro quartil é igual a:

a) 3

b) 4

c) 5

d) 6

e) 7

Comentários:

O terceiro quartil da distribuição corresponde ao menor valor que concentra uma função de distribuição
acumulada (f.d.a.) de pelo menos 75%. Assim, vamos incluir a f.d.a. na tabela fornecida:

                  0        1        2         3        4     5        6     7     8      9
                 20%      18%      15%       12%      11%   6%       5%    6%    4%     3%
                 20%      38%      53%       65$      76%   82%      87%   93%   97%   100%

Podemos observar que o primeiro valor para o qual F(Q3) ≥ 75% é Q3 = 4.

Gabarito: B


        Receita Federal (Analista Tributário) Estatística                                          140
        www.estrategiaconcursos.com.br                                                             173

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 07

ATENÇÃO: O ENUNCIADO A SEGUIR REFERE-SE ÀS QUESTÕES 9 E 10.

Considere a seguinte função de probabilidade da variável aleatória discreta X:

                                                        𝟎, 𝟐,      𝒙 = −𝟏
                                                        𝟎, 𝟑,       𝒙=𝟎
                                               𝒑(𝒙) = {                  }
                                                        𝟎, 𝟒,       𝒙=𝟏
                                                        𝟎, 𝟏,       𝒙=𝟐

9.        O valor do segundo momento de X é igual a:

a) 0,40

b) 0,84

c) 0,60

d) 1,00

e) 0,80

Comentários:

Para calcular o segundo momento central E(X2), primeiro elevamos os valores da variável ao quadrado; em
seguida, multiplicamos os quadrados pelas respectivas probabilidades; e, por fim, somamos os produtos:

                                                   𝐸(𝑋 2 ) = ∑ 𝑥 2 . 𝑝(𝑥)

               𝐸(𝑋 2 ) = (−1)2 × 0,2 + 02 × 0,3 + 12 × 0,4 + 22 × 0,1 = 0,2 + 0 + 0,4 + 0,4 = 1

Gabarito: D

10.       Considere também a variável aleatória discreta Y = 3.X + 2. A respeito de X e Y, é correto afirmar:

a) P(X < 0) = P(Y < 0)

b) o segundo momento central de Y é 9 vezes o segundo momento central de X.

c) E(Y) = 1,2

d) o primeiro quartil de X é igual ao primeiro quartil de Y

e) V(Y) = 4,52

Comentários:

           Receita Federal (Analista Tributário) Estatística                                               141
           www.estrategiaconcursos.com.br                                                                  173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

A variável X apresenta a seguinte distribuição de probabilidade:

                                                       x          P
                                                      -1         0,2
                                                      0          0,3
                                                      1          0,4
                                                      2          0,1

Para calcular a distribuição de probabilidade da variável Y = 3X + 2, fazemos

                                                      y                 P
                                               3.(-1) + 2 = -1         0,2
                                                3.0 + 2 = 2            0,3
                                                3.1 + 2 = 5            0,4
                                                3.2 + 2 = 8            0,1

Em relação à alternativa A, temos para X:

                                           𝑃(𝑋 < 0) = 𝑃(𝑋 = −1) = 0,2

Em relação a Y, temos:

                                           𝑃(𝑌 < 0) = 𝑃(𝑌 = −1) = 0,2

Logo, P(X < 0) = P(Y < 0) e a alternativa A está correta. Em relação à alternativa B, calculamos na questão
anterior que o segundo momento de X é 𝐸(𝑋 2 ) = 1. Já o segundo momento central de Y é:

            𝐸(𝑌 2 ) = (−1)2 × 0,2 + 22 × 0,3 + 52 × 0,4 + 82 × 0,1 = 0,2 + 1,2 + 10 + 6,4 = 17,8

Logo, o segundo o momento central de Y não é 9 vezes o segundo momento central de X e alternativa B está
incorreta. Em relação à alternativa C, a média de Y é:

               𝐸(𝑌) = (−1) × 0,2 + 2 × 0,3 + 5 × 0,4 + 8 × 0,1 = −0,2 + 0,6 + 2 + 0,8 = 3,2

Logo, a alternativa C está incorreta. Em relação à alternativa D, o primeiro quartil é o menor elemento para
o qual a função distribuição acumulada é 𝐹(𝑄1 ) ≥ 0,25. Considerando que a probabilidade do primeiro
elemento de ambas as distribuições é igual a 0,2, o primeiro quartil será igual ao segundo elemento. Para X,
temos 𝑄1 (𝑋) = 0 e, para Y, temos 𝑄1 (𝑌) = 2. Logo, o primeiro quartil de X é diferente do primeiro quartil
de Y.

Em relação à alternativa E, podemos calcular a variância de Y a partir do segundo momento central de Y
𝐸(𝑌 2 ) = 17,8 e da média 𝐸(𝑌) = 3,2, que calculamos anteriormente:

                      𝑉(𝑌) = 𝐸(𝑌 2 ) − [𝐸(𝑌)]2 = 17,8 − (3,2)2 = 17,8 − 10,24 = 7,56

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                               142
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

11.     Sejam X e Y duas variáveis aleatórias com variâncias iguais a 1 e 4, respectivamente, e covariância
igual a -2. A variável Z = 3X - Y/2 tem variância igual a:

a) 5

b) 14

c) 8

d) 16

e) 9

Comentários:

O enunciado pede a variância de Z = 3X - Y/2, tendo fornecido a variância de X e Y, bem como a covariância:

                                                                𝑌
                                              𝑉𝑎𝑟(𝑍) = 𝑉𝑎𝑟 (3𝑋 − )
                                                                2

A variância da diferença corresponde à soma das variâncias, subtraindo-se o dobro da covariância:

                                                        𝑌               𝑌
                                𝑉𝑎𝑟(𝑍) = 𝑉𝑎𝑟(3𝑋) + 𝑉𝑎𝑟 ( ) − 2. 𝐶𝑜𝑣 (3𝑋, )
                                                        2               2

Em relação à variância, quando multiplicamos (ou dividimos) a variável por uma constante, a variância é
multiplicada (ou dividida) pelo quadrado dessa constante. Em relação à covariância, quando multiplicamos
uma variável por uma constante, a covariância é multiplicada por essa constante. Logo:

                                     2
                                              1 2                  1
                       𝑉𝑎𝑟(𝑍) = 3 . 𝑉𝑎𝑟(𝑋) + ( ) . 𝑉𝑎𝑟(𝑌) − 2 × 3 × × 𝐶𝑜𝑣(𝑋, 𝑌)
                                              2                    2

                                                    1
                                𝑉𝑎𝑟(𝑍) = 9. 𝑉𝑎𝑟(𝑋) + . 𝑉𝑎𝑟(𝑌) − 3. 𝐶𝑜𝑣(𝑋, 𝑌)
                                                    4

Sabendo que Var(X) = 1, Var(Y) = 4 e Cov(X,Y) = -2, podemos calcular a variância pedida:

                                            1
                            𝑉𝑎𝑟(𝑍) = 9 × 1 + × 4 − 3 × (−2) = 9 + 1 + 6 = 16
                                            4

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                               143
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

12.   Sejam X e Y duas variáveis aleatórias, ambas com média igual 3. Sabe-se ainda que o momento de
segunda ordem de X é igual a 10 e o de Y é igual 13. Considerando E(XY) = 11, é correto afirmar que:

a) o desvio padrão de Y é 𝐷𝑃(𝑌) = 4.

b) o coeficiente de correlação é 𝜌(𝑋, 𝑌) = 1.

c) a covariância de X e Y é 𝐶𝑜𝑣(𝑋, 𝑌) = 20.

d) a variância da soma é 𝑉𝑎𝑟(𝑋 + 𝑌) = 5.

e) a variância de X é 𝑉𝑎𝑟(𝑋) = 7.

Comentários:

Em relação a X, o enunciado informa que a média é E(X) = 3 e que o momento de 2ª ordem é E(X2) = 10. Com
base nessas informações, podemos calcular a variância de X:

                            𝑉𝑎𝑟(𝑋) = 𝐸(𝑋 2 ) − [𝐸(𝑋)]2 = 10 − [3]2 = 10 − 9 = 1

Logo, a alternativa E está incorreta. Em relação a Y, sabendo que a média é E(Y) = 3 e que o momento de 2ª
ordem é E(Y2) = 13, a variância de Y é dada por:

                            𝑉𝑎𝑟(𝑌) = 𝐸(𝑌 2 ) − [𝐸(𝑌)]2 = 13 − [3]2 = 13 − 9 = 4

Consequentemente, o desvio padrão, raiz quadrada da variância, é 𝐷𝑃(𝑌) = √𝑉𝑎𝑟(𝑌) = √4 = 2, logo a
alternativa A está incorreta.

Conhecendo E(XY) = 11 e as médias das variáveis, podemos calcular a covariância:

                       𝐶𝑜𝑣(𝑋, 𝑌) = 𝐸(𝑋. 𝑌) − 𝐸(𝑋). 𝐸(𝑌) = 11 − 3 × 3 = 11 − 9 = 2

Portanto, a alternativa C está incorreta.

Após o cálculo da covariância, podemos obter a variância da soma das variáveis:

                   𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2. 𝐶𝑜𝑣(𝑋, 𝑌) = 1 + 4 + 2 × 2 = 9

Logo, a alternativa D está incorreta.

Já, o coeficiente de correlação é a razão entre a covariância e os desvios padrão das variáveis:

                                                𝐶𝑜𝑣(𝑋, 𝑌)            2           2
                             𝜌(𝑋, 𝑌) =                         =            =       =1
                                          √𝑉𝑎𝑟(𝑋). √𝑉𝑎𝑟(𝑌)         √1. √4       1×2

Portanto, a alternativa B está correta.

Gabarito: B


        Receita Federal (Analista Tributário) Estatística                                              144
        www.estrategiaconcursos.com.br                                                                 173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

13.    Para duas variáveis aleatórias, estão disponíveis as seguintes estatísticas elementares: Var(X) = 4,
Var(X - Y) = 9 e 𝝆(X, Y) = 1/3.

Então a variância de Y é igual a:

a) 5

b) 17/3

c) 9

d) 4/3

e) 3

Comentários:

A variância da diferença é dada por:

                                  𝑉𝑎𝑟(𝑋 − 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) − 2. 𝐶𝑜𝑣(𝑋, 𝑌)

Para obtermos a covariância a partir do coeficiente de correlação, fazemos:

                                                              𝐶𝑜𝑣(𝑋, 𝑌)
                                             𝜌(𝑋, 𝑌) =
                                                          √𝑉𝑎𝑟(𝑋). √𝑉𝑎𝑟(𝑌)

                                     𝐶𝑜𝑣(𝑋, 𝑌) = 𝜌(𝑋, 𝑌) × √𝑉𝑎𝑟(𝑋). √𝑉𝑎𝑟(𝑌)

                            1
Sabendo que 𝜌(𝑋, 𝑌) = 3 e 𝑉𝑎𝑟(𝑋) = 4, temos:

                                                    1                2
                                    𝐶𝑜𝑣(𝑋, 𝑌) =       × √4. √𝑉𝑎𝑟(𝑌) = . √𝑉𝑎𝑟(𝑌)
                                                    3                3

Substituindo esse resultado na fórmula da variância da diferença e sabendo que Var(X) = 4 e Var(X - Y) = 9,
temos:

                                                              2
                                  𝑉𝑎𝑟(𝑋 − 𝑌) = 4 + 𝑉𝑎𝑟(𝑌) − 2. . √𝑉𝑎𝑟(𝑌) = 9
                                                              3
                                                    4
                                            𝑉𝑎𝑟(𝑌) − . √𝑉𝑎𝑟(𝑌) − 5 = 0
                                                    3

Para encontrar a variância de Y, vamos substituir √𝑉𝑎𝑟(𝑌) → 𝑥 e 𝑉𝑎𝑟(𝑌) → 𝑥 2 e aplicar Bháskara:

                                                         4
                                                     𝑥2 − 𝑥 − 5 = 0
                                                         3

          Receita Federal (Analista Tributário) Estatística                                             145
          www.estrategiaconcursos.com.br                                                                173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                          2
                                      4 2                 16        16 + 180 196
                   ∆= 𝑏 − 4. 𝑎. 𝑐 = (− ) − 4 × 1 × (−5) =    + 20 =         =
                                      3                    9           9      9

                                                             4 14
                                                    −𝑏 ± √∆ 3 ± 3
                                                 𝑥=        =
                                                      2𝑎      2

Como a raiz da variância é necessariamente um número positivo, há somente uma possibilidade para x:

                                                 4 14 18
                                                  +       6
                                               𝑥=3 3 = 3 = =3
                                                  2    2  2

Esse é o valor para raiz da variância de Y: √𝑉𝑎𝑟(𝑌) = 3. A variância de Y é, portanto, o quadrado desse
resultado:

                                                    𝑉𝑎𝑟(𝑌) = 32 = 9

Gabarito: C

14.     Sejam X, Y e Z três variáveis aleatórias, tais que Var(Y) = 2,25, Cov(Y,Z) = 1, Var(2Y - Z) = 9, Cov(X,Z)
= 0,5 e 𝝆(X,Z) = 0,25.

Então a variância de X é

a) 0,75

b) 1,00

c) 0,50

d) 4,00

e) 5,50

Comentários:

A variância da diferença é dada por:

                                𝑉𝑎𝑟(2𝑌 − 𝑍) = 𝑉𝑎𝑟(2𝑌) + 𝑉𝑎𝑟(𝑍) − 2. 𝐶𝑜𝑣(2𝑌, 𝑍)

Pelas propriedades da variância, quando multiplicamos uma variável por uma constante, a variância é
multiplicada pelo quadrado dessa constante. Em relação à covariância, quando multiplicamos uma variável
por uma constante, a covariância é multiplicada por essa mesma constante. Assim:

                              𝑉𝑎𝑟(2𝑌 − 𝑍) = 22 . 𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟(𝑍) − 2 × 2. 𝐶𝑜𝑣(𝑌, 𝑍)

          Receita Federal (Analista Tributário) Estatística                                                  146
          www.estrategiaconcursos.com.br                                                                     173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                              𝑉𝑎𝑟(2𝑌 − 𝑍) = 4. 𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟(𝑍) − 4. 𝐶𝑜𝑣(𝑌, 𝑍)

Sabendo que Var(Y) = 2,25, que Cov(Y,Z) = 1, temos:

                                   𝑉𝑎𝑟(2𝑌 − 𝑍) = 4 × 2,25 + 𝑉𝑎𝑟(𝑍) − 4 × 1

                                 𝑉𝑎𝑟(2𝑌 − 𝑍) = 9 + 𝑉𝑎𝑟(𝑍) − 4 = 𝑉𝑎𝑟(𝑍) + 5

Considerando que Var(2Y - Z) = 9, então:

                                         𝑉𝑎𝑟(2𝑌 − 𝑍) = 𝑉𝑎𝑟(𝑍) + 5 = 9

                                                 𝑉𝑎𝑟(𝑍) = 9 − 5 = 4

Pela fórmula do coeficiente de correlação entre X e Z, temos:

                                                              𝐶𝑜𝑣(𝑋, 𝑍)
                                           𝜌(𝑋, 𝑍) =
                                                        √𝑉𝑎𝑟(𝑋). √𝑉𝑎𝑟(𝑍)

O enunciado informa que 𝜌(𝑋, 𝑍) = 0,25 e que 𝐶𝑜𝑣(𝑋, 𝑍) = 0,5. Sabendo que 𝑉𝑎𝑟(𝑍) = 4, podemos
calcular a variância de X:

                                                                0,5
                                                0,25 =
                                                            √𝑉𝑎𝑟(𝑋). √4

                                                                0,5
                                                 0,25 =
                                                            √𝑉𝑎𝑟(𝑋). 2

                                             √𝑉𝑎𝑟(𝑋) × 2 × 0,25 = 0,5

                                                √𝑉𝑎𝑟(𝑋) × 0,5 = 0,5

                                                     √𝑉𝑎𝑟(𝑋) = 1

                                                  𝑉𝑎𝑟(𝑋) = 12 = 1

Gabarito: B

        Receita Federal (Analista Tributário) Estatística                                 147
        www.estrategiaconcursos.com.br                                                    173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

15.   O diretor da empresa HM estava achando injusta a distribuição de salários entre homens e
mulheres e decidiu analisar a questão mais afundo. Em seu levantamento inicial, verificou que o salário
dos homens tem média igual a 9 mil reais e variância de 9 (mil reais)2, enquanto o salário das mulheres
tem média igual a 4 mil reais e variância de 4 (mil reais)2.

A respeito dessa situação hipotética, pode-se afirmar corretamente que:

a) a dispersão relativa dos salários é igual para homens e mulheres.

b) a variância relativa dos salários das mulheres é igual a 4.

c) o coeficiente de variação dos salários dos homens é igual a 3.

d) a medida adimensional da dispersão dos salários é maior para as mulheres do que para os homens.

e) o coeficiente de variação dos salários dos homens é mais que o dobro do coeficiente de variação dos
salários das mulheres.

Comentários:

O enunciado informa que o salário dos homens tem média 𝐻  ̅ = 9 e variância 𝑉𝑎𝑟(𝐻) = 9; enquanto o
                               ̅
salário das mulheres tem média 𝑀 = 4 e variância 𝑉𝑎𝑟(𝑀) = 4.

Em relação à alternativa A, a dispersão relativa é representada pelo coeficiente de variação, dado pela razão
entre o desvio padrão (raiz quadrada da variância) e a média. Em relação aos salários dos homens, o desvio
padrão é:

                                             𝜎𝐻 = √𝑉𝑎𝑟(𝐻) = √9 = 3

Logo, o coeficiente de variação dos salários dos homens é:

                                                            𝜎𝐻 3 1
                                                𝐶𝑉(𝐻) =        = =
                                                            𝐻̅  9 3

Com esse resultado, podemos afirmar que a alternativa C está incorreta. Em relação aos salários das
mulheres, o desvio padrão é:

                                             𝜎𝑀 = √𝑉𝑎𝑟(𝑀) = √4 = 2

Logo, o coeficiente de variação é:

                                                            𝜎𝑀 2 1
                                                𝐶𝑉(𝑀) =        = =
                                                            𝑀̅  4 2

Portanto, a dispersão relativa não é igual para homens e mulheres e a alternativa A está incorreta.

        Receita Federal (Analista Tributário) Estatística                                                148
        www.estrategiaconcursos.com.br                                                                   173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Também podemos concluir que a medida adimensional de dispersão (coeficiente de variação) é maior para
mulheres do que para homens. Com isso, concluímos que a alternativa D está correta e que a alternativa E
está incorreta.

Em relação à alternativa B, a variância relativa é o quadrado do coeficiente de variação. Logo, a variância
relativa dos salários das mulheres é:

                                                                   1 2 1
                                         𝑉𝑅(𝑀) =      [𝐶𝑉(𝑀)]2   =( ) =
                                                                   2    4

Logo, a alternativa B está incorreta.

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                               149
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                                   LISTA DE QUESTÕES – FGV

Noções de variáveis discretas

1.   (FGV/2025 – TCE/PI) Uma variável aleatória discreta X tem a seguinte função de
probabilidade:

                                         x          0           2     4        6
                                        p(x)       0,2         0,3   0,3      0,2

A variância de X é então igual a:

a) 3,4

b) 3,6

c) 3,8

d) 4,0

e) 4,2

2.    (FGV/2024 – Pref. São José dos Campos) Considere uma variável aleatória X com os
seguintes momentos: E(X) = 4 e E(X2) = 25. O desvio padrão de X é igual a:

a) 3

b) 9

c) √21

d) √29

e) 2,5

3.    (FGV/2023 – TJ/SE) Se X é uma variável aleatória com média 20 e variância 4, então a
variável Y = 5X – 100 tem média e variância iguais, respectivamente, a:

a) 0 e 4

b) 0 e 20

c) 0 e 100

           Receita Federal (Analista Tributário) Estatística                           150
           www.estrategiaconcursos.com.br                                              173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) 100 e 4

e) 100 e 20

4.    (FGV/2023 – TJ/SE) Sabe-se que a variância da variável aleatória X é igual a 8, enquanto a
da variável aleatória Y é 2. Além disso, a variância de X-Y é nula. Então, a covariância entre X e Y
vale:

a) 0

b) 1

c) 3

d) 5

e) 7

5.    (FGV/2023 – TJ/SE) A medida utilizada para comparar a variabilidade de variáveis com
diferentes desvios padrões e diferentes médias é:

a) coeficiente de correlação de Pearson;

b) coeficiente de correlação de Spearman;

c) coeficiente de variação;

d) covariância;

e) quantil.

6.    (FGV/2023 – Câmara dos Deputados) A função de probabilidade de uma variável aleatória
discreta X é dada por:

  x        0      1       2       3
 p(x)     0,2    0,3     0,3     0,2

No caso, a variância de X é igual a

a) 1,05

b) 1,15

c) 1,25

          Receita Federal (Analista Tributário) Estatística                                      151
          www.estrategiaconcursos.com.br                                                         173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) 1,35

e) 1,45

7.    (FGV/2023 – Câmara dos Deputados) Observe a seguinte amostra de notas de cinco
alunos:

                                                      6, 6, 8, 10, 10

A variância dessas notas, entendida como a média dos quadrados dos desvios em torno da média,
é igual a

a) 2,4

b) 2,8

c) 3,2

d) 3,6

e) 4,0

8.     (FGV/2023 – Câmara dos Deputados) Avalie se as seguintes afirmativas acerca do
coeficiente de correlação linear 𝝆 entre duas variáveis aleatórias contínuas estão corretas.

I - O módulo de 𝝆 é sempre menor ou igual a 1.

II - Se 𝝆 = 𝟎, as duas variáveis são independentes.

III - Valores de 𝝆 próximos de + 1 indicam uma correlação positiva forte.

Está correto o que se afirma em

a) I, apenas

b) II, apenas

c) I e II, apenas

d) I e III, apenas

e) II e III, apenas

          Receita Federal (Analista Tributário) Estatística                               152
          www.estrategiaconcursos.com.br                                                  173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

9.      (FGV/2023 – RFB) Uma variável aleatória discreta X tem função de probabilidade dada
por

  x       0      1       2       3
 p(x)    0,5    0,2     0,1     0,2

A probabilidade de que o valor de X seja maior do que 2 é igual a

a) 10%

b) 20%

c) 25%

d) 30%                                                       ==219a34==

e) 50%

10.   (FGV/2023 – RFB) Edson e Roberto fazem uma aposta jogando dois dados, ambos
regulares. Edson ganha a aposta se saírem dois números maiores do que 3. Caso contrário, ganha
Roberto. Eles pretendem fazer um jogo honesto. Se perder, Edson pagará a Roberto 10 reais.

Então, se perder, Roberto deverá pagar a Edson

a) 18 reais
b) 24 reais
c) 30 reais
d) 42 reais
e) 46 reais

11.    (FGV/2022 – PC/AM) Suponha que X, uma variável aleatória discreta, assuma a seguinte
distribuição de probabilidade:

                                                       X                  Prob(X)
                                                       0                     0
                                                       1                    1/4
                                                       2                    1/4
                                                       3                     K

O valor de K e o valor esperado de X são, respectivamente,

a) 0 e 3/4

         Receita Federal (Analista Tributário) Estatística                                 153
         www.estrategiaconcursos.com.br                                                    173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

b) 1/4 e 3/2
c) 1/2 e 3/4
d) 1/2 e 3/2
e) 1/2 e 9/4

12.  (FGV/2022 – SEFAZ/BA) Uma variável aleatória discreta X tem a seguinte distribuição de
probabilidades:

  x        1      3       5      10
 p(x)     0,1    0,2     0,3     0,4

A média de X é igual a

a) 3,5

b) 4,0

c) 5,4

d) 6,2

e) 7,0

13.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

  x   -2,0 -1,0          0,0     1,0      2
 p(x) 0,2 0,1            0,4     0,1      k

A média de X é igual a:

a) -0,4
b) -0,3
c) -0,2
d) 0,0
e) 0,5

14.   (FGV/2022 – SEFAZ/AM) Uma variável aleatória X tem a seguinte função de probabilidade,
sendo k uma constante:

          Receita Federal (Analista Tributário) Estatística                              154
          www.estrategiaconcursos.com.br                                                 173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

  x   -2,0 -1,0         0,0     1,0      2
 p(x) 0,2 0,1           0,4     0,1      k

A variância de X é igual a:

a) 1,8
b) 2,0
c) 2,2
d) 2,4
e) 2,6

15.   (FGV/2022 – MPE/SC) As variáveis aleatórias X e Y são tais que Var(X)= 1, Var(Y) = 4 e
Cov(X,Y) = −1.

O valor de Var(Y - 2X) é:

a) 0
b) 4
c) 6
d) 8
e) 12

16.   (FGV/2022 – TCE/TO) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                       Valores de X          -3     -1    0     1     3
                                      Probabilidades         0,1   0,2   0,3   0,2   0,2

A média de X é igual a

a) 0,1

b) 0,2

c) 0,3

d) 0,4

e) 0,5

         Receita Federal (Analista Tributário) Estatística                                 155
         www.estrategiaconcursos.com.br                                                    173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

17.   (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                        Valores de X           0      3     10     12
                                       Probabilidades         0,2    0,1    0,3    0,4

A média e a mediana de X são respectivamente iguais a

a) 8,1 e 10

b) 8,1 e 3,0

c) 8,5 e 6,5

d) 8,1 e 6,5

e) 8,5 e 10

18.   (FGV/2022 – TRT/MA) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                        Valores de X           0      2      6      8
                                       Probabilidades         0,2    0,3    0,3    0,2

A variância de X é igual a

a) 7,2

b) 7,6

c) 8,0

d) 8,4

e) 8,8

19.   (FGV/2022 – TRT/PB) Uma variável aleatória discreta X tem função de probabilidade
dada por:

                                            x         2       4      6      8     10
                                           p(x)      0,2     0,1    0,4    0,1    0,2

A soma dos valores da média e da variância de Y = 2X + 5 é igual a

         Receita Federal (Analista Tributário) Estatística                               156
         www.estrategiaconcursos.com.br                                                  173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) 32,0.

b) 36,8.

c) 40,2.

d) 45,8.

e) 52,4.

20.       (FGV/2022 – TRT/PB) 𝑿𝟏 , 𝑿𝟐 , 𝑿𝟑 são variáveis aleatórias independentes tais que

 𝑬(𝑿𝟏 ) = 𝟐,          𝑽𝒂𝒓(𝑿𝟏 ) = 𝟗,          𝑬(𝑿𝟐 ) = −𝟏,       𝑽𝒂𝒓(𝑿𝟐 ) = 𝟒,   𝑬(𝑿𝟑 ) = 𝟐,   𝑽𝒂𝒓(𝑿𝟑 ) = 𝟏

Se 𝒀 = 𝟑𝑿𝟏 − 𝟑𝑿𝟐 + 𝟒𝑿𝟑 , então a soma dos valores da média e da variância de Y é igual a

a) 150.

b) 160.

c) 170.

d) 180.

e) 200.

21.       (FGV/2022 – TRT/PB) X e Y são variáveis aleatórias tais que:

E[X] = 5, E[Y] = 3, Var[X] = 16, Var[Y] = 4, E[XY] = 10

O coeficiente de correlação entre X e Y é igual a

a) – 0,625.

b) – 0,240.

c) 0,166.

d) 0,348.

e) 0,765.

           Receita Federal (Analista Tributário) Estatística                                            157
           www.estrategiaconcursos.com.br                                                               173

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 07

22.   (FGV/2022 – TRT/PB) Avalie se as seguintes afirmativas acerca da mediana de uma
variável aleatória X estão corretas:

  I.     Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[X ≥ m] ≥ 0,5.
 II.     A mediana é uma medida mais resistente a valores extremos do que a média.
III.     Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da
         mediana de X é menor do que o da média de X.
Está correto o que se afirma em

a) I, apenas.

b) I e II, apenas.

c) I e III, apenas.

d) II e III, apenas.

e) I, II e III.

23.   (FGV/2022 – Senado Federal) João propõe a Maria um jogo de apostas. Ele joga dois dados,
pagando a ela 5 reais se saírem dois números não consecutivos. Para que o jogo seja honesto,
Maria deve, caso perca a aposta, pagar a João a quantia de

a) 12 reais.

b) 13 reais.

c) 14 reais.

d) 15 reais.

e) 16 reais.

24.   (FGV/2022 – TJ/DFT) Em uma fábrica de calçados, um gerente precisa decidir o volume
de produção para o mês de setembro. Para apoiar sua tomada de decisão, o gerente utilizou a
ferramenta “matriz de resultados”. A tabela abaixo exibe a matriz de resultados associados a três
alternativas de produção, bem como as probabilidades das vendas estimadas.

   Vendas                       Produção (Unidades)
                                                              Probabilidade
 (Unidades)             2.000          3.000        5.000
    2.000           R$ 50.000,00   R$ 80.000,00 -R$ 30.000,00     20%
    3.000           R$ 20.000,00 R$ 100.000,00 R$ 60.000,00       25%
    5.000           -R$ 20.000,00 R$ 80.000,00 R$ 150.000,00      40%

           Receita Federal (Analista Tributário) Estatística                                  158
           www.estrategiaconcursos.com.br                                                     173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

Pelo critério de maior valor esperado, o gerente deve optar por produzir:

a) 2.000 unidades, com valor esperado de R$ 12.500,00;

b) 3.000 unidades, com valor esperado de R$ 25.000,00;

c) 3.000 unidades, com valor esperado de R$ 73.000,00;

d) 5.000 unidades, com valor esperado de R$ 69.000,00;

e) 5.000 unidades, com valor esperado de R$ 84.000,00.

25.   (FGV/2022 – TCU) Considere a seguinte sequência de 2001 valores: x1=-1000, x2=-999, ...,
x1001=0, x1002=1, ..., x2001=1000. A covariância amostral entre essa sequência e a sequência de seus
valores ao quadrado (yi = xi2) é

a) 1;
b) 2001;
c) 1001;
d) 0;
e) -1.

26.   (FGV/2021 – FunSaúde/CE) Uma variável aleatória discreta X tem os seguintes valores
possíveis e probabilidades associadas:

  x        -1      1       3
 p(x)      0,4    0,2     0,4

A variância de X é igual a:

a) 2,0

b) 2,4

c) 2,8

d) 3,2

e) 3,6

           Receita Federal (Analista Tributário) Estatística                                     159
           www.estrategiaconcursos.com.br                                                        173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

27.   (FGV/2021 – IMBEL) O estado de uma máquina pode ser representado por uma variável
aleatória X, cujos valores indicam se a máquina está funcionando (x=1), operando parcialmente
(x=1/2) ou em manutenção (x=0). A função de probabilidade desta variável aleatória é expressa
a seguir:

                                                        𝟎, 𝟐, 𝒙 = 𝟎
                                                                  𝟏
                                                𝒑(𝒙) = {𝟎, 𝟑, 𝒙 = }
                                                                  𝟐
                                                        𝟎, 𝟓, 𝒙 = 𝟏

O valor esperado e a variância desta variável valem, respectivamente,

a) 0,50 e 0,1525

b) 0,50 e 0,1575

c) 0,65 e 0,1525

d) 0,65 e 0,1575

e) 0,75 e 0,1575

28.    (FGV/2021 – FunSaúde/CE) X e Y são variáveis aleatórias independentes, com médias E[X]
= 2 e E[Y] = 4 e variâncias Var[X] = 2 e Var[Y] = 5.

A variável W = 4Y – 3X tem média e variância iguais, respectivamente, a

a) 8 e 56;

b) 8 e 62;

c) 8 e 74;

d) 10 e 98;

e) 10 e 106;

29.    (FGV/2018 – ALE-RO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

 x    -2        -1     0       1
 p(x) 0,1       0,2    0,3     0,4

A média de X é igual a:

         Receita Federal (Analista Tributário) Estatística                                160
         www.estrategiaconcursos.com.br                                                   173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

a) -0,5

b) -0,2

c) -0,1

d) 0

e) 0,1

30.   (FGV/2018 – COMPESA) Analise a tabela sobre o consumo diário de água dos habitantes
de um município de Pernambuco.

   Consumo Diário
                             13L       20L    38L     50L      64L   83L      90L   112L 120L 163L 175L
       de Água
    Probabilidade            5%        7%     8%      10%      9%    11% 11% 12%         15%   10%   2%

Selecionando de forma aleatória um indivíduo do município em questão, o valor esperado para
seu consumo diário de água será de

a) 84,36L

b) 86,12L

c) 87,5L

d) 90L

e) 112L

31.       (FGV/2018 – ALE-RO) Uma variável aleatória discreta X tem função de probabilidade dada
por:

 x    -2          -1     0       1
 p(x) 0,1         0,2    0,3     0,4

A variância de X é igual a

a) 0,16
b) 0,64
c) 1
d) 1,2
e) 1,8


           Receita Federal (Analista Tributário) Estatística                                              161
           www.estrategiaconcursos.com.br                                                                 173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

32.   (FGV/2018 – TJ-AL) Sejam X, Y e W três variáveis que representam quantidades que são,
de alguma forma, conhecidas:

X = número de crimes cometidos

Y = número de crimes notificados

W = número de crimes solucionados

Adicionalmente são conhecidas as seguintes estatísticas: E(X.Y) = 268, E(W.Y) = 26, E(X.W) = 85,
E(X) = 25, E(Y) = 10, E(W) = 3, DP(X) = 5 e DP(W) = DP(Y) = 4

Considerando as tendências lineares entre as variáveis como medidas para fins de avaliações, é
correto afirmar que:

a) a relaçã o entre notificados e cometidos é mais fraca do que a observada entre cometidos e
solucionados;

b) há uma tendê ncia para que um aumento de crimes solucionados afete negativamente o volume de
notificaçõ es;

c) a medida adimensional para a dispersã o da quantidade de crimes cometidos é maior do que a de
solucionados;

d) a medida de associaçã o entre cometidos e notificados é 40% maior do que a medida entre cometidos
e solucionados;

e) a soluçã o de uma quantidade maior de crimes tende a reduzir a quantidade de crimes cometidos.

33.    (FGV/2017 – MPE/BA) Um criminoso está avaliando se vale a pena ou não recorrer ao
instituto da colaboração premiada. Caso não recorra, a sua probabilidade de ser condenado é
igual a p, com 12 anos de reclusão. Se resolver delatar, pode pegar 6 anos de prisão, com
probabilidade de 0,4, ou 10 anos, com a probabilidade complementar.

Supondo que a decisão será tomada com base na esperança matemática da pena, o criminoso
deve

a) não delatar se o valor de p for inferior a 0,75;

b) delatar se o valor de p for superior a 0,55;

c) não delatar caso o valor de p seja de 0,80;

d) mostrar-se indiferente caso o valor de p seja de 0,70;

e) delatar caso o valor de p seja inferior a 0,60.

        Receita Federal (Analista Tributário) Estatística                                             162
        www.estrategiaconcursos.com.br                                                                173

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 07

34.   (FGV/2017 – IBGE) Sejam X e Y duas variáveis aleatórias com variâncias iguais a 21 e 17,
respectivamente. Além disso, sabe-se que a variável Z representada pela diferença entre as duas
tem variância igual a 44. Com base em tais informações, é correto deduzir que:

a) as variáveis Z e X são positivamente correlacionadas;
b) o momento de segunda ordem de Y é maior do que o de Z;
c) a média de Z é menor do que ambas as médias, de X e de Y;
d) a covariância entre X e Y é positiva;
e) as variáveis X e Y são negativamente correlacionadas.

35.    (FGV/2017 – MPE-BA) Para duas variáveis aleatórias estão disponíveis as seguintes
informações estatísticas: Cov (Y, Z) = 18, E(Z) = 4, Var(Z) = 25, E(Y) = 4 e CV(Y) = 2, onde CV é o
coeficiente de variação, além da nomenclatura usual. Então a expressão 𝑬(𝒁𝟐 ) + 𝑽𝒂𝒓(𝟐𝒀 − 𝟑𝒁)
vale:

a) 265

b) 274

c) 306

d) 373

e) 405

36.   (FGV/2016 – IBGE) Sejam X, Z e W variáveis aleatórias tais que, Var(W) = 16, 𝝆(X, Z) = 1,
Var(3Z + 2X) = 144, Cov(W, Z) = 4 e 𝝆(W, Z) = 0,5.

Então a variância de X é:

a) 4

b) 9

c) 16

d) 25

e) 36

         Receita Federal (Analista Tributário) Estatística                                         163
         www.estrategiaconcursos.com.br                                                            173

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 07

37.    (FGV/2015 – TJ/BA) Sejam X, Y e Z três variáveis aleatórias que apresentam as seguintes
estatísticas elementares:

Var(X) = 4, Var(Y) = 25, Var(Z) = 16, Cov(X,Y) = Cov(Z,Y), Var(Z-X) = 8 e ρ(X,Y) = 0,6.

Com base em tais informações, é correto afirmar que:

a) ρ(X,Z) = 0,75 e Var(Z + Y) = 53;

b) ρ(X,Z) = 0,25 e Var(Z + Y) = 65;

c) ρ(X,Z) = 0,80 e Var(Z + Y) = 41;

d) ρ(X,Z) = 0,75 e Var(Z + Y) = 65;

e) ρ(X,Z) = 0,25 e Var(Z + Y) = 53;

         Receita Federal (Analista Tributário) Estatística                                 164
         www.estrategiaconcursos.com.br                                                    173

                                       


---

Equipe Exatas Estratégia Concursos
Aula 07

                                                GABARITO
 1. LETRA E                                  14. LETRA A                 27. LETRA C
 2. LETRA A                                  15. LETRA E                 28. LETRA D
 3. LETRA C                                  16. LETRA C                 29. LETRA D
 4. LETRA D                                  17. LETRA A                 30. LETRA B
 5. LETRA C                                  18. LETRA E                 31. LETRA C
 6. LETRA A                                  19. LETRA D                 32. LETRA B
 7. LETRA C                                  20. LETRA A                 33. LETRA D
 8. LETRA D                                  21. LETRA A                 34. LETRA E
 9. LETRA B                                  22. LETRA B                 35. LETRA C
 10. LETRA C                                 23. LETRA B                 36. LETRA B
 11. LETRA E                                 24. LETRA C                 37. LETRA A
 12. LETRA D                                 25. LETRA D
 13. LETRA D                                 26. LETRA D

      Receita Federal (Analista Tributário) Estatística                                165
      www.estrategiaconcursos.com.br                                                   173

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 07

                           LISTA DE QUESTÕES – INÉDITAS

Noções de variáveis discretas

1.      Abel planeja investir o seu capital, mas está em dúvida entre dois investimentos, cujos retornos
variam de acordo com o cenário econômico. Com o primeiro investimento, Abel irá obter o dobro do
capital investido no cenário favorável; 20% a mais do capital investido no cenário intermediário; e 90% do
capital investido no cenário desfavorável. Em relação ao segundo investimento, Abel irá obter o triplo do
capital investido no cenário favorável; o mesmo capital investido no cenário intermediário; e 50% do
capital investido no cenário desfavorável.

Considera-se que a probabilidade do cenário favorável é de 20%, do cenário intermediário é de 50% e do
cenário desfavorável é de 30%. Pelo critério do maior valor esperado, Abel deve optar pelo _______
(primeiro/segundo) investimento, em que se espera obter ____ vezes o capital investido.

A alternativa que completa corretamente as lacunas é:

a) segundo; 1,50

b) primeiro; 1,27

c) segundo; 0,75

d) primeiro; 1,10

e) segundo; 1,25

2.      Um representante de vendas possui 2 produtos para vender: o produto A, com valor de R$1.000,00;
e o produto B, com valor de R$500,00. Em um certo dia, o vendedor deve escolher entre encontrar com o
cliente X ou com o cliente Y, com o objetivo de efetuar uma venda. Para ambos os clientes, a probabilidade
de vender o produto B é o triplo da probabilidade de vender o produto A, não sendo possível a venda de
ambos os produtos.

Considerando essa situação hipotética, é correto afirmar que:

                                                                                           1
a) A probabilidade de o representante vender o produto A ao cliente X é no máximo igual a 3.

b) Se a probabilidade de o representante vender o produto B ao cliente Y for igual a 15%, então o valor
esperado de venda a esse cliente será igual a R$ 525,00.

c) Se a probabilidade de o representante vender o produto A ao cliente Y for metade da probabilidade de ele
vender o produto B ao cliente X, então o valor esperado de venda ao cliente Y será uma vez e meia o valor
esperado de venda ao cliente X.


        Receita Federal (Analista Tributário) Estatística                                               166
        www.estrategiaconcursos.com.br                                                                  173

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 07

d) Se a probabilidade de o representante vender o produto A ao cliente X for igual a 25%, então a
probabilidade de ele efetuar alguma venda a esse cliente é igual a 75%.

e) Se a probabilidade de o representante vender o produto B ao cliente Y for o dobro da probabilidade de
ele vender o produto A ao cliente X, então o valor esperado de venda ao cliente Y será maior que o valor
esperado de venda ao cliente X.

                                                                                             𝒙
3.    Suponha a função de probabilidade para a variável aleatória discreta X 𝒑(𝒙) = 𝒌, para x = 1, 2 e 3,
sendo k uma constante. Se F(.) é a função distribuição acumulada correspondente, então F(2,5) é igual a:

a) 2/3

b) 0                                                           ==219a34==

c) 1/2

d) 1

e) 1/6

ATENÇÃO: O ENUNCIADO A SEGUIR REFERE-SE ÀS QUESTÕES 4 A 6.

Suponha uma variável aleatória discreta X com função de distribuição acumulada dada por:

                                            x      -2     -1                0     1     2
                                           F(x)    3k     5k                7k   15k   20k

Em que k representa uma constante.

4.        A probabilidade de X assumir valores positivos é igual a:

a) 0,70

b) 0,86

c) 0,75

d) 0,84

e) 0,65

           Receita Federal (Analista Tributário) Estatística                                          167
           www.estrategiaconcursos.com.br                                                             173

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

5.        A média e moda da variável valem, respectivamente:

a) 0,88 e 2

b) 0 e 1

c) 0,5 e 0,40

d) 0 e 2

e) 0,5 e 1

6.        A variância da variável é:

a) 1,85

b) 1,61

c) 10,00

d) 1,47

e) 2,00

7.     Suponha que a variável X assuma apenas os valores 1, 2, 3, 4 e 5. Sendo F(.) a função distribuição
acumulada correspondente, sabe-se que F(1,23) = 10%, que F(2,35) = 30% e que F(4,52) = 70%. Sabendo
que P(X = 5) é o dobro de P(X = 4), então é verdadeiro que:

a) P(X = 3) = 40%

b) P(2 < X < 4) = 60%

c) A moda de X é igual a 4

d) P(X ≥ 4) = 30%

e) P(X ≤ 3) = 55%

8.     Maria estava analisando um relatório de dados e resolveu verificar as proporções com que cada
algarismo aparecia, no intuito de verificar a sua aleatoriedade. As proporções de cada algarismo estão
indicadas na tabela a seguir:

           Receita Federal (Analista Tributário) Estatística                                          168
           www.estrategiaconcursos.com.br                                                             173

                                         


---

     Equipe Exatas Estratégia Concursos
     Aula 07

                     0        1        2         3        4      5       6     7    8      9
                    20%      18%      15%       12%      11%    6%      5%    6%   4%     3%

Considerando a distribuição de probabilidade encontrada, Maria desconfiou dos dados do relatório
porque o terceiro quartil é igual a:

a) 3

b) 4

c) 5

d) 6

e) 7

ATENÇÃO: O ENUNCIADO A SEGUIR REFERE-SE ÀS QUESTÕES 9 E 10.

Considere a seguinte função de probabilidade da variável aleatória discreta X:

                                                        𝟎, 𝟐,      𝒙 = −𝟏
                                                        𝟎, 𝟑,       𝒙=𝟎
                                               𝒑(𝒙) = {                  }
                                                        𝟎, 𝟒,       𝒙=𝟏
                                                        𝟎, 𝟏,       𝒙=𝟐

9.        O valor do segundo momento de X é igual a:

a) 0,40

b) 0,84

c) 0,60

d) 1,00

e) 0,80

10.       Considere também a variável aleatória discreta Y = 3.X + 2. A respeito de X e Y, é correto afirmar:

a) P(X < 0) = P(Y < 0)

b) o segundo momento central de Y é 9 vezes o segundo momento central de X.

c) E(Y) = 1,2

           Receita Federal (Analista Tributário) Estatística                                               169
           www.estrategiaconcursos.com.br                                                                  173

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 07

d) o primeiro quartil de X é igual ao primeiro quartil de Y

e) V(Y) = 4,52

11.     Sejam X e Y duas variáveis aleatórias com variâncias iguais a 1 e 4, respectivamente, e covariância
igual a -2. A variável Z = 3X - Y/2 tem variância igual a:

a) 5

b) 14

c) 8

d) 16

e) 9

12.   Sejam X e Y duas variáveis aleatórias, ambas com média igual 3. Sabe-se ainda que o momento de
segunda ordem de X é igual a 10 e o de Y é igual 13. Considerando E(XY) = 11, é correto afirmar que:

a) o desvio padrão de Y é 𝐷𝑃(𝑌) = 4.

b) o coeficiente de correlação é 𝜌(𝑋, 𝑌) = 1.

c) a covariância de X e Y é 𝐶𝑜𝑣(𝑋, 𝑌) = 20.

d) a variância da soma é 𝑉𝑎𝑟(𝑋 + 𝑌) = 5.

e) a variância de X é 𝑉𝑎𝑟(𝑋) = 7.

13.    Para duas variáveis aleatórias, estão disponíveis as seguintes estatísticas elementares: Var(X) = 4,
Var(X - Y) = 9 e 𝝆(X, Y) = 1/3. Então a variância de Y é igual a:

a) 5

b) 17/3

c) 9

d) 4/3

e) 3


          Receita Federal (Analista Tributário) Estatística                                             170
          www.estrategiaconcursos.com.br                                                                173

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 07

14.     Sejam X, Y e Z três variáveis aleatórias, tais que Var(Y) = 2,25, Cov(Y,Z) = 1, Var(2Y - Z) = 9, Cov(X,Z)
= 0,5 e 𝝆(X,Z) = 0,25.

Então a variância de X é

a) 0,75

b) 1,00

c) 0,50

d) 4,00

e) 5,50

15.   O diretor da empresa HM estava achando injusta a distribuição de salários entre homens e
mulheres e decidiu analisar a questão mais afundo. Em seu levantamento inicial, verificou que o salário
dos homens tem média igual a 9 mil reais e variância de 9 (mil reais) 2, enquanto o salário das mulheres
tem média igual a 4 mil reais e variância de 4 (mil reais)2.

A respeito dessa situação hipotética, pode-se afirmar corretamente que:

a) a dispersão relativa dos salários é igual para homens e mulheres.

b) a variância relativa dos salários das mulheres é igual a 4.

c) o coeficiente de variação dos salários dos homens é igual a 3.

d) a medida adimensional da dispersão dos salários é maior para as mulheres do que para os homens.

e) o coeficiente de variação dos salários dos homens é mais que o dobro do coeficiente de variação dos
salários das mulheres.

          Receita Federal (Analista Tributário) Estatística                                                  171
          www.estrategiaconcursos.com.br                                                                     173

                                        


---

Equipe Exatas Estratégia Concursos
Aula 07

                                                GABARITO
 1.   LETRA B                                6. LETRA A                  11. LETRA D
 2.   LETRA C                                7. LETRA E                  12. LETRA B
 3.   LETRA C                                8. LETRA B                  13. LETRA C
 4.   LETRA E                                9. LETRA D                  14. LETRA B
 5.   LETRA E                                10. LETRA A                 15. LETRA D

      Receita Federal (Analista Tributário) Estatística                                172
      www.estrategiaconcursos.com.br                                                   173

                                    


---

---
