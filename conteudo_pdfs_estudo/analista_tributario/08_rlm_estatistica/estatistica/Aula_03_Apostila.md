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
arquivo_origem: Aula 03_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '03'
titulo_aula: Estatística
---

# Estatística

Aula 02
                          Receita Federal (Analista Tributário)
                                                   Estatística

                                                        Autor:
                                     Equipe Exatas Estratégia
                                                  Concursos


                                             23 de Maio de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 02

                                                                                     Índice
1) Mediana.


2) Quartil, Decil e Percentill.


3) Box Plot.


4) Questões Comentadas - Mediana - FGV


5) Questões Comentadas - Quartil, Decil e Percentil - FGV


6) Questões Comentadas - Box Plot - FGV


7) Aviso importante - Orientação de estudo


8) Questões Comentadas - Quartil, Decil e Percentil - Inéditas


9) Questões Comentadas - Box Plot - Inéditas


10) Lista de Questões - Mediana - FGV


11) Lista de Questões - Quartil, Decil e Percentil - FGV


12) Lista de Questões - Box Plot - FGV


13) Lista de Questões - Quartil, Decil e Percentil - Inéditas


14) Lista de Questões - Box Plot - Inéditas

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          160

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                   MEDIDAS SEPARATRIZES
As separatrizes são medidas que dividem (ou separam) uma série ordenada em duas ou mais partes, cada
uma contendo a mesma quantidade de elementos. Nesse caso, o nome da medida separatriz é definido de
acordo com a quantidade de partes em que a série é dividida:

       •    mediana: divide uma série ordenada em duas partes iguais, cada uma contendo 50% dos valores
            da sequência;
       •    quartis: dividem uma série ordenada em quatro partes iguais, cada uma contendo 25% dos
            valores da sequência;
       •    quintis: dividem uma série ordenada em cinco partes iguais, cada uma contendo 20% dos valores
            da sequência;
       •    decis: dividem uma série ordenada em dez partes iguais, cada uma contendo 10% dos valores da
            sequência; e
       •    percentis: dividem uma série ordenada em cem partes iguais, cada uma contendo 1% dos valores
            da sequência.
Ao longo da aula, vamos estudar a mediana, os quartis, os decis e os percentis. Os quintis, por não serem tão
explorados em provas de concurso, não serão abordados.

                                                   MEDIANA
A mediana é, simultaneamente, uma MEDIDA DE POSIÇÃO, de TENDÊNCIA CENTRAL e SEPARATRIZ. Ela
caracteriza a posição central de uma série de valores. Além disso, também separa uma série de valores em
duas partes de tamanhos iguais, cada uma contendo o mesmo número de elementos. Muitas vezes, a
mediana é designada como valor mediano, sendo representada pelos símbolos 𝑴𝒅 ou, em menor
            ̃.
frequência, 𝒙

Mediana para dados não-agrupados.

O método para determinação da mediana envolve a realização de uma etapa anterior, que consiste na
ordenação do conjunto de dados. Feito isso, a mediana é o elemento que ocupa a POSIÇÃO CENTRAL de
uma série de observações ORDENADA segundo suas grandezas (isto é, dados brutos organizados em rol
crescente ou decrescente).

Por exemplo, vamos determinar a mediana da seguinte série de valores:

                                        {𝟑, 𝟏𝟕, 𝟏𝟑, 𝟏𝟗, 𝟐, 𝟓, 𝟕, 𝟏, 𝟖, 𝟐𝟏, 𝟗}.

        Receita Federal (Analista Tributário) Estatística                                                  3
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Em conformidade com a definição da mediana, a primeira etapa consiste na ordenação (crescente ou
decrescente) da série de valores. Desse modo, obtemos:

                                        {𝟏, 𝟐, 𝟑, 𝟓, 𝟕, 𝟖, 𝟗, 𝟏𝟑, 𝟏𝟕, 𝟏𝟗, 𝟐𝟏}.

Agora, determinaremos o elemento que ocupa a posição central desse conjunto de dados. Para isso,
devemos encontrar o termo que possui o mesmo número de elementos tanto à sua esquerda quanto à sua
direita. Em nosso exemplo, esse valor é o 8, pois existem cinco elementos antes dele e cinco após ele.

                                 𝟏, 𝟐, 𝟑, 𝟓, 𝟕,
                                 ⏟                          𝟖,
                                                            ⏟       𝟗, 𝟏𝟑, 𝟏𝟕, 𝟏𝟗, 𝟐𝟏.
                                                                    ⏟
                               𝟓 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒂𝒏𝒕𝒆𝒔 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍 𝟓 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒅𝒆𝒑𝒐𝒊𝒔


É importante notarmos que essa série possui um número ímpar de elementos. Quando isso acontece, isto
é, quando uma série possui um NÚMERO ÍMPAR de elementos, a MEDIANA SEMPRE COINCIDE com o
ELEMENTO CENTRAL do conjunto de dados. Portanto, temos:

                                                        𝑀𝑑 = 8

Contudo, se porventura a série tivesse um número par de elementos, POR CONVENÇÃO, a MEDIANA seria
a MÉDIA ARITMÉTICA dos dois termos centrais. Assim, caso adicionássemos o número 23 ao conjunto de
dados apresentado anteriormente, teríamos a seguinte situação:

                               𝟏, 𝟐, 𝟑, 𝟓, 𝟕,
                               ⏟                        𝟖,
                                                        ⏟  𝟗,        𝟏𝟑, 𝟏𝟕, 𝟏𝟗, 𝟐𝟏, 𝟐𝟑.
                                                                     ⏟
                             𝟓 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒂𝒏𝒕𝒆𝒔 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒄𝒆𝒏𝒕𝒓𝒂𝒊𝒔     𝟓 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒅𝒆𝒑𝒐𝒊𝒔


Nesse caso, em que temos um número par de elementos, a mediana é definida como a média aritmética dos
termos centrais, que são os números 8 e 9. Assim, temos:

                                                       8 + 9 17
                                                𝑀𝑑 =        =   = 8,5
                                                         2    2
                                                                                           𝒏+𝟏
Note que, quando o número é ímpar, o termo central sempre ocupa a posição                        . Por outro lado, quando
                                                                                            𝟐
                                                                                                                  𝒏
o número de termos é par, existem dois termos centrais, sendo que o primeiro ocupa a posição ; e o
                                                                                                                  𝟐
                                                                  𝒏
segundo ocupa a posição imediatamente seguinte, ou seja,              + 𝟏.
                                                                  𝟐

Essas relações são importantes porque nem sempre conseguiremos identificar a posição central tão
facilmente. Por exemplo, se tivermos uma série composta por 501 elementos, podemos afirmar que o termo
                                              𝑛+1  501+1
central será o elemento ocupando a posição 2 = 2 = 251, sem precisar recorrer a qualquer outro
método. Logo, a mediana terá o mesmo valor do termo central:

                                                       𝑀𝑑 = 𝑥251 .

Vejamos a disposição do termo central em relação aos demais elementos da série:

                               𝒙𝟏 , 𝒙𝟐 , ⋯ , 𝒙𝟐𝟓𝟎 ,
                               ⏟                     𝒙⏟𝟐𝟓𝟏 ,    𝒙𝟐𝟓𝟐 , 𝒙𝟐𝟓𝟑 , ⋯ , 𝒙𝟓𝟎𝟏 .
                                                                ⏟
                              𝟐𝟓𝟎 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒂𝒏𝒕𝒆𝒔 𝒕𝒆𝒓𝒎𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍 𝟐𝟓𝟎 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒅𝒆𝒑𝒐𝒊𝒔

        Receita Federal (Analista Tributário) Estatística                                                              4
        www.estrategiaconcursos.com.br                                                                                160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Agora, se tivermos uma série composta por 500 elementos, os termos centrais serão os elementos ocupando
as posições:

                               𝑛       500                     𝑛                500
                                   =         = 250 e               +1=                  + 1 = 251.
                               2       2                       2                    2

Vejamos a disposição dos termos centrais em relação aos demais elementos da série:

                              𝒙𝟏 , 𝒙𝟐 , ⋯ , 𝒙𝟐𝟒𝟗 , ⏟
                              ⏟                    𝒙𝟐𝟓𝟎 , 𝒙𝟐𝟓𝟏 , ⏟
                                                                 𝒙𝟐𝟓𝟐 , 𝒙𝟐𝟓𝟑 , ⋯ , 𝒙𝟓𝟎𝟎 .
                             𝟐𝟓𝟎 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒂𝒏𝒕𝒆𝒔 𝒕𝒆𝒓𝒎𝒐𝒔 𝒄𝒆𝒏𝒕𝒓𝒂𝒊𝒔 𝟐𝟓𝟎 𝒆𝒍𝒆𝒎𝒆𝒏𝒕𝒐𝒔 𝒅𝒆𝒑𝒐𝒊𝒔


Nessa situação, por convenção, a mediana será a média aritmética entre os termos centrais,

                                                               𝑥    +𝑥251
                                                     𝑀𝑑 = 250                   .
                                                                    2

Portanto, podemos estabelecer que a mediana de um conjunto composto por 𝑛 elementos ordenados de
forma crescente ou decrescente será:

                                              𝑛+1
  a) se 𝑛 for ímpar, o termo de ordem              , isto é,
                                               2


                                                        𝑴𝒅 = 𝒙𝒏+𝟏
                                                                        𝟐

                                                                            𝑛       𝑛
  b) se 𝑛 for par, a média aritmética dos termos de ordem 2 e 2 + 1, isto é,


                                                               𝒙𝒏 + 𝒙𝒏+𝟏
                                                                𝟐           𝟐
                                                    𝑴𝒅 =
                                                                    𝟐

A mediana nem sempre coincidirá com um elemento da série de dados. Isso somente acontecerá
quando o número de elementos da série de dados for ímpar, pois haverá coincidência entre os
valores da mediana e do termo que ocupa a posição central. Contudo, quando número de elementos
for par, não existirá essa coincidência.

        Receita Federal (Analista Tributário) Estatística                                             5
        www.estrategiaconcursos.com.br                                                               160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Quando o número de elementos do conjunto é ÍMPAR, o valor da mediana é único e igual ao termo
central. Porém, quando o número de elementos é PAR, a mediana pode ser QUALQUER VALOR
ENTRE OS TERMOS CENTRAIS, havendo infinitos valores possíveis para a mediana. Para
exemplificar, imaginemos os números 1 e 2 como termos centrais. Entre esses dois números temos
infinitas possibilidades de escolha, a exemplo de 1,01; 1,2; 1,673; etc. A mediana poderia ser
qualquer desses valores, contudo, POR CONVENÇÃO, adotamos a média aritmética dos valores
centrais.

Seja {𝑥𝑛 } uma série de dados estatísticos composta por n elementos ordenados de forma crescente
ou decrescente, isto é, {𝑥𝑛 } = {𝑥1 , 𝑥2 , 𝑥3 , ⋯ , 𝑥𝑛 }. A mediana desse conjunto de dados será:
                                            𝑛+1
a) se 𝑛 for ímpar, o termo de ordem               , isto é, 𝑀𝑑 = 𝑥𝑛+1
                                              2                    2

                                                                                   𝑥𝑛 + 𝑥𝑛
                                                                   𝑛    𝑛           2       2
                                                                                                +1
b) se 𝑛 for par, a média aritmética dos termos de ordem e + 1, isto é, 𝑀𝑑 =
                                                                   2    2               2

Calcular a mediana dos seguintes conjuntos:

a) seja {𝑥𝑛 } uma série de dados composta pelos seguintes valores:

                                  {𝑥𝑛 } = {1, 3, 5, 6, 7, 9, 11, 13, 17, 18, 20}

Como o número de elementos é ímpar, 𝑛 = 11, temos:

        Receita Federal (Analista Tributário) Estatística                                             6
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                              𝑀𝑑 = 𝑥11+1 = 𝑥12 = 𝑥6
                                                            2       2

Logo, a mediana é o sexto elemento da série, isto é:

                                               𝑀𝑑 = 𝑥6 ⇒ 𝑀𝑑 = 9

b) seja {𝑦𝑛 } uma série de dados composta pelos seguintes elementos:

                                     {𝑦𝑛 } = {11, 14, 15, 16, 18, 19, 21, 23}

Como o número de elementos é par, 𝑛 = 8, temos:

                               𝑦𝑛 + 𝑦𝑛+1           𝑦8 + 𝑦8+1
                                 2        2         2           2       𝑦4 + 𝑦4+1 𝑦4 + 𝑦5
                       𝑀𝑑 =                    =                    =            =
                                      2                  2                  2        2

Logo, a mediana será a média aritmética entre o quarto e o quinto elementos da série, isto é:

                                     𝑦4 + 𝑦5 16 + 18 34
                            𝑀𝑑 =            =       =   = 17 ⇒ 𝑀𝑑 = 17
                                        2       2     2

Como vimos, a mediana depende apenas do termo que ocupa a posição central em um conjunto de dados,
e não dos valores de todos os elementos que compõem a série. Por isso, dizemos que a mediana não sofre
tanta influência pela presença de valores extremos/discrepantes quanto à média. Essa é, inclusive, uma
das principais diferenças entre essas duas medidas.

Podemos constatar essa propriedade da mediana por meio de um exemplo. Considere que tenhamos
inicialmente a seguinte série:

                                              {1, 2, 4, 6, 7, 9, 10, 11, 13}

A média aritmética desses valores é:

                                 1 + 2 + 4 + 6 + 7 + 9 + 10 + 11 + 13 63
                            𝑥=                                       =   =7
                                                   9                   9

Como o número de elementos é ímpar, 𝑛 = 9, a mediana será o elemento que ocupa a posição:

                                              𝑛 + 1 9 + 1 10
                                                   =     =   = 5.
                                                2     2    2

        Receita Federal (Analista Tributário) Estatística                                           7
        www.estrategiaconcursos.com.br                                                             160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

O quinto termo é 7, portanto:

                                                𝑀𝑑 = 𝑥5 ⇒ 𝑀𝑑 = 7.

Agora, considere que o elemento de valor 13 tenha sido alterado para 130.000. Veja o que acontece com a
média aritmética desse conjunto:

                    1 + 2 + 4 + 6 + 7 + 9 + 10 + 11 + 130.000
               𝑥=                                             = 14.450 ⇒ 𝑥 = 14.450
                                         9

Como o número de elementos permanece inalterado, 𝑛 = 9, a mediana continua sendo o elemento que
ocupa a posição:

                                             𝑛 + 1 9 + 1 10
                                                  =     =   = 5.
                                               2     2    2

Logo, a mediana ainda é representada pelo quinto termo da série:

                                                𝑀𝑑 = 𝑥5 ⇒ 𝑀𝑑 = 7.

Portanto, a alteração no valor de um único elemento do conjunto de dados causou um impacto significativo
na média, ao passo que a mediana permaneceu inalterada. Por isso, dizemos que a média é mais
influenciada pela presença de valores extremos que a mediana.

A mediana depende da apenas posição e não dos valores dos elementos de uma série ordenada.
Essa é uma das principais diferenças entre a média e a mediana, pois a primeira é muito impactada
pela presença de valores extremos enquanto a última não.

        Receita Federal (Analista Tributário) Estatística                                             8
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Em geral, os valores da média aritmética e da mediana são diferentes. Por exemplo, a média da série
{𝑥𝑛 } = {1, 2, 4, 6, 7, 9, 10, 11, 13} é:
                           1 + 2 + 4 + 6 + 7 + 9 + 10 + 11 + 130.000
                     𝑥=                                              = 14.450,
                                                9
enquanto sua mediana é:
                                                        𝑀𝑑 = 7.

(CESPE/IPHAN/2018) Define-se estatística descritiva como a etapa inicial da análise utilizada para
descrever e resumir dados. Em relação às medidas descritivas, julgue o item a seguir.
A mediana é o valor que ocupa a posição central da série de observações de uma variável, dividindo-se o
conjunto de valores ordenados em partes assimétricas desiguais.


Comentários:
A mediana é o valor que ocupa a posição central da série de observações de uma variável, dividindo o
conjunto em duas partes com a mesma quantidade de valores. As partes não serão necessariamente
assimétricas desiguais. Se tivéssemos um conjunto formado apenas por elementos repetidos, por exemplo,
a mediana dividiria os valores em partes simétricas.
Gabarito: Errado.


(CESPE/IPHAN/2018) Uma pesquisa a respeito das quantidades de teatros em cada uma de 11 cidades
brasileiras selecionadas apresentou o seguinte resultado: {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4}. Com referência a
esses dados, julgue o item seguinte.
A mediana do conjunto é igual a 3.


Comentários:


        Receita Federal (Analista Tributário) Estatística                                                  9
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A mediana divide um conjunto ao meio e ocupa a posição central. Temos 11 elementos na amostra. Então,
a mediana ocupará a posição:
                                             𝑛 + 1 11 + 1 12
                                                  =      =   =6
                                               2     2     2
Vejamos:
                                 {1, 2, 2, 3, 3,               ⏟
                                                               𝟑               , 4, 4, 4, 4, 4}
                                                   𝟔º 𝒕𝒆𝒓𝒎𝒐 = 𝒕𝒆𝒓𝒎𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍

Portanto, a mediana corresponde ao sexto termo da série de observações. Logo:
                                                           𝑀𝑑 = 3.
Gabarito: Certo.


(CESPE/FUB/2018) A tabela seguinte mostra as quantidades de livros de uma biblioteca que foram
emprestados em cada um dos seis primeiros meses de 2017.

                                                                         Mês

                                                     1         2         3     4       5          6

                              Quantidade            50      150 250 250 300 200

A partir dessa tabela, julgue o próximo item.
A mediana dos números correspondentes às quantidades de livros emprestados no primeiro semestre de
2017 é igual a 200.


Comentários:
A mediana é o termo central de uma amostra ou população. Se temos 6 meses, então a mediana poderá ser
encontrada pela média dos termos que ocupam as posições 3 e 4, pois, nesse caso, não há apenas um termo
central. Organizando os dados da tabela em ordem crescente (isto é, em rol crescente), temos:
                                     50 150              200
                                                         ⏟         250       250     300
                                                      𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠

Encontrando a média dos termos nas posições 3 e 4:
                                                         200 + 250
                                              𝑀𝑑 =                 = 225
                                                             2
Gabarito: Errado.

        Receita Federal (Analista Tributário) Estatística                                             10
        www.estrategiaconcursos.com.br                                                                160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Mediana para dados agrupados sem intervalos de classe

O raciocínio adotado no cálculo da mediana para dados agrupados por valor (sem intervalos de classe) é
similar ao empregado no caso dos dados não-agrupados. Basicamente, teremos que encontrar um valor que
dividirá a distribuição de frequências em duas partes contendo o mesmo número de elementos.

Considere a seguinte situação hipotética: uma empresa realizou uma pesquisa para medir o nível de
satisfação dos clientes com relação ao seu atendimento. Os clientes puderam atribuir notas de 0 a 5 no que
diz respeito ao nível de satisfação, resultando na seguinte distribuição de frequências:

                                             Nível de
                                                           Frequência (𝒇𝒊 )
                                          Satisfação (𝑿𝒊 )
                                                  0                  3
                                                  1                  5
                                                  2                  8
                                                  3                  10
                                                  4                  13
                                                  5                  10

O total de clientes entrevistados foi de:

                                         3 + 5 + 8 + 10 + 13 + 10 = 49.

Como o número de entrevistados é ímpar, 𝑛 = 49, a mediana será o termo que ocupa a posição de ordem:

                                            𝑛 + 1 49 + 1 50
                                                 =      =   = 25
                                              2     2     2

Em outros termos, a mediana será o elemento que ocupa a vigésima quinta posição. Para chegarmos a esse
elemento, precisamos percorrer cada um dos níveis de satisfação. Reparem que três clientes atribuíram a
nota 0 (zero); cinco atribuíram a nota 1 (um); e oito atribuíram a nota 2 (dois). Portanto, até esse ponto,
temos um total de 16 avaliações:

                                                   3 + 5 + 8 = 16

Vejam que ainda não chegamos na posição desejada, isto é, na vigésima quinta. Contudo, sabemos que o
próximo nível de satisfação, referente à nota 3 (três), teve frequência absoluta igual a 10. Se somarmos essas
dez novas avaliações com o total obtido anteriormente, chegaremos a um valor que ultrapassa a posição
procurada (16 + 10 = 26). Assim, descobrimos que a mediana está localizada nessa faixa de avaliação.
Portanto,

                                                      𝑀𝑑 = 𝑥25 = 3

        Receita Federal (Analista Tributário) Estatística                                                  11
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Esse procedimento pode ser simplificado com a introdução de uma coluna adicional para armazenar as
frequências acumuladas. Já vimos que, para calcularmos a frequência acumulada, devemos repetir a
primeira frequência e somar as frequências subsequentes, exibindo os resultados a cada linha. Observem:

                              Nível de             Frequência
                                        Frequência                              Memória
                             Satisfação            Acumulada
                                           (𝒇𝒊 )                                de cálculo
                                (𝑿𝒊 )                 (𝒇𝒂𝒄 )

                                   0              3              3                  =3

                                   1              5              8               = 3+5 = 8

                                   2              8              16             = 8 + 8 = 16

                                   3             10              26         = 16 + 10 = 26

                                   4             13              39         = 26 + 13 = 39

                                   5             10              49         = 39 + 10 = 49


Vamos remover a memória de cálculo para simplificar a tabela:

                                        Nível de             Frequência
                                                  Frequência
                                       Satisfação            Acumulada
                                                     (𝒇𝒊 )
                                          (𝑿𝒊 )                 (𝒇𝒂𝒄 )

                                            0               3               3
                                            1               5               8
                                            2               8           16
                                            3               10          26
                                            4               13          39
                                            5               10          49

Reparem que o número 16, na terceira linha da coluna de frequências acumuladas, representa a soma das
frequências absolutas simples das três primeiras linhas, isto é, 3 + 5 + 8. Assim, concluímos que 16 clientes
avaliaram o atendimento da empresa com nota igual ou inferior a 2. De forma análoga, como 49 clientes
participaram da pesquisa, podemos afirmar que 33 avaliaram o atendimento com nota igual ou superior a 3.

Observem que a introdução da coluna de frequências acumuladas torna possível calcularmos a mediana de
forma praticamente imediata. Nesse sentido, se n for ímpar, basta identificarmos o valor da variável
correspondente à primeira frequência acumulada imediatamente igual ou superior à posição de ordem

        Receita Federal (Analista Tributário) Estatística                                                 12
        www.estrategiaconcursos.com.br                                                                   160

                                       


---

     Equipe Exatas Estratégia Concursos
     Aula 02

𝒏+𝟏
     ; e, se n for par, basta identificarmos os dois valores correspondentes às frequências acumuladas
 𝟐
                                                                        𝒏   𝒏
imediatamente iguais ou superiores às posições de ordens 𝟐 e 𝟐 + 𝟏, respectivamente, e tirarmos a média
aritmética desses dois valores.

                                                                                        𝑛+1   49+1
Em nosso exemplo, como a frequência total é ímpar, teremos que buscar pela posição 2 = 2 = 25. A
mediana será o valor da variável correspondente à primeira frequência acumulada maior ou igual a essa
posição, portanto, 𝑀𝑑 = 3. Vejamos:

                                           Nível de             Frequência
                                                     Frequência
                                          Satisfação            Acumulada
                                                        (𝒇𝒊 )
                                             (𝑿𝒊 )                 (𝒇𝒂𝒄 )

                                               0                3               3
                                               1                5               8
                                               2                8               16
                                               3               10           26 (> 25)
                                               4               13               39
                                               5               10               49

Assim, podemos estabelecer que a mediana de uma tabela de frequências composta por um total de 𝑛
elementos será:
   a) se 𝑛 for ímpar, o valor identificado na tabela correspondente à frequência acumulada imediatamente
                                        𝑛+1
igual ou superior à posição de ordem 2 , isto é,

                                                        𝑴𝒅 = 𝑿𝒏+𝟏
                                                                    𝟐

   b) se 𝑛 for par, a média aritmética dos valores identificados na tabela correspondentes às frequências
                                                                       𝑛 𝑛
acumuladas imediatamente iguais ou superiores às posições de ordens 2 e 2 + 1, isto é,

                                                               𝑿𝒏 + 𝑿𝒏+𝟏
                                                                𝟐       𝟐
                                                   𝑴𝒅 =
                                                                    𝟐

           Receita Federal (Analista Tributário) Estatística                                          13
           www.estrategiaconcursos.com.br                                                             160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular a mediana da seguinte tabela de frequências:

                                                       Nota Frequência
                                                       (𝑿𝒊 )           (𝒇𝒊 )

                                                        6               5

                                                        7              15

                                                        8              10

                                                        9               7

                                                        10              3

Vamos construir a coluna da frequência acumulada para calcular a mediana.

                                                                               Frequência
                                            Nota       Frequência
                                                                               Acumulada
                                             (𝑿𝒊 )             (𝒇𝒊 )
                                                                                  (𝒇𝒂𝒄 )

                                                6               5                   5

                                                7              15                  20

                                                8              10                  30

                                                9               7                  37

                                                10              3                  40

                                            TOTAL              40

Como o número de elementos é par, 𝑛 = 40, temos dois termos ocupando as posições centrais. O
                                        𝑛       40                                          𝑛
primeiro termo ocupa a posição              =        = 20; o segundo, a posição + 1 = 21. Assim, a mediana
                                        2        2                                          2
será a média aritmética dos termos que ocupam essas duas posições.
A frequência acumulada indica que 20 elementos foram contados até a segunda linha. Portanto,
                                                            𝑥20 = 7
Logo, o termo de posição 21 está na linha seguinte:
                                                            𝑥21 = 8
Assim, a mediana é:
                                                     𝑥20 + 𝑥21 7 + 8
                                        𝑀𝑑 =                  =      = 7,5
                                                         2       2


        Receita Federal (Analista Tributário) Estatística                                              14
        www.estrategiaconcursos.com.br                                                                 160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

(CESPE/Pref. SL/2017)
Texto 11A2CCC
A tabela a seguir apresenta uma comparação entre a evolução populacional ocorrida na cidade de São
Luís, no estado do Maranhão e no Brasil, a cada cinco anos, de 1985 a 2010.

                                           São Luís         Maranhão       Brasil
                                Ano
                                        (em milhares) (em milhões) (em milhões)

                               1985             640              4,3         137

                               1990             700              4,9         146

                               1995             780              5,2         156

                               2000             870              5,6         171

                               2005             960              6,1         183

                               2010            1.000             6,6         192

                                                  IBGE (com adaptações).

Com base na tabela do texto 11A2CCC, considerando-se a sequência dos seis valores correspondentes à
população de São Luís, infere-se que a mediana desses valores é igual a
a) 725.000.
b) 775.000.
c) 825.000.
d) 875.000.
e) 700.000.
Comentários:
A mediana é o termo central de uma amostra ou população. Se temos 6 observações representadas na
tabela, então a mediana poderá ser encontrada pela média dos termos que ocupam as posições 3 e 4 pois
nesse caso não há apenas um termo central. Os dados já estão ordenados em ordem crescente. Então:
                                                      780 + 870 1650
                                             𝑀𝑑 =              =
                                                          2       2
                                                       𝑀𝑑 = 825
Gabarito: C.

        Receita Federal (Analista Tributário) Estatística                                         15
        www.estrategiaconcursos.com.br                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

(CESPE/TCE-PA/2016)

                                        Número diário de
                                                                     Frequência
                                      denúncias registradas
                                                                      Relativa
                                              (X)

                                                    0                      0,3

                                                    1                      0,1

                                                    2                      0,2

                                                    3                      0,1

                                                    4                      0,3

                                                  Total                    1,0

A tabela precedente apresenta a distribuição de frequências relativas da variável X, que representa o
número diário de denúncias registradas na ouvidoria de determinada instituição pública. A partir das
informações dessa tabela, julgue o item seguinte.
A mediana do número diário de denúncias registradas é igual a 2.


Comentários:
A mediana é o valor associado a uma frequência relativa acumulada de 50%, ou seja, que separa os 50%
menores dos 50% maiores. Vamos calcular a frequência relativa acumulada.

                                                                     Frequência
                                     Número de Frequência
                                                                       Relativa
                                      denúncias           Relativa
                                                                     Acumulada
                                          (𝑿𝒊 )             (𝒇𝒓 )
                                                                        (𝒇𝒓 𝒂𝒄 )

                                           0            0,3 = 30%       30%

                                           1            0,1 = 10%       40%

                                           2            0,2 = 20%    60% (> 50%)

                                           3            0,1 = 10%       70%

                                           4            0,3 = 30%       100%

        Receita Federal (Analista Tributário) Estatística                                         16
        www.estrategiaconcursos.com.br                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A primeira linha apresenta uma frequência acumulada de 30%, indicando que 30% dos valores são iguais a
zero.
A segunda linha apresenta uma frequência acumulada de 40%, indicando que 40% dos valores são menores
ou iguais a 1.
A terceira linha apresenta uma frequência acumulada de 60%, indicando que 60% dos valores são menores
ou iguais a 2.
Observe que o patamar de 50% foi ultrapassado na terceira linha. Portanto, a mediana é igual a 2.
Gabarito: Certo.

Mediana para dados agrupados em classes

O raciocínio adotado no cálculo da mediana para dados agrupados em classes é muito similar ao empregado
no tópico anterior. Agora, contudo, não nos importaremos com o número de elementos da série.
Adotaremos um único procedimento de cálculo, independentemente de termos um número par ou ímpar
de elementos.

Considere a distribuição de frequências descrita a seguir, que resume as idades de um grupo de 50 alunos
do Estratégia Concursos:

                                                            Frequência
                                                 Idades
                                                               (𝒇𝒊 )
                                                 23 ⊢ 26        3
                                                 26 ⊢ 29        4
                                                 29 ⊢ 32       10
                                                 32 ⊢ 35       13
                                                 35 ⊢ 38       10
                                                 38 ⊢ 41        6
                                                 41 ⊢ 44        4
                                                 TOTAL         50

        Receita Federal (Analista Tributário) Estatística                                            17
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A etapa inicial do cálculo da mediana consiste na construção da coluna de frequências acumuladas:

                                                                      Frequência
                                                   Frequência
                                   Idades                             Acumulada
                                                      (𝒇𝒊 )
                                                                         (𝒇𝒂𝒄 )
                                  23 ⊢ 26                   3              3
                                  26 ⊢ 29                   4              7
                                  29 ⊢ 32                   10             17
                                  32 ⊢ 35                   13             30
                                  35 ⊢ 38                   10             40
                                  38 ⊢ 41                   6              46
                                  41 ⊢ 44                   4              50
                                   TOTAL                    50

Para calcular a mediana de dados que estão agrupados por intervalo de classes, precisamos identificar a
classe em que se encontra a mediana, a chamada classe mediana, que corresponde à frequência acumulada
imediatamente igual ou superior à metade da frequência total, ou seja, metade da soma das frequências
simples, ∑ 𝒇𝒊 ⁄𝟐. Em nosso exemplo, temos:

                                                   ∑ 𝑓𝑖 50
                                                       =   = 25
                                                    2    2

Agora, devemos comparar o valor encontrado com os valores presentes na coluna de frequências
acumuladas, percorrendo-os de cima para baixo. A classe mediana será a primeira classe em que a frequência
acumulada for igual ou superior a 25. Assim, teremos que analisar o seguinte:

   •   a primeira frequência acumulada (3) é maior ou igual a 25? Não;
   •   a segunda frequência acumulada (7) é maior ou igual a 25? Não;
   •   a terceira frequência acumulada (17) é maior ou igual a 25? Não;
   •   a quarta frequência acumulada (30) é maior ou igual a 25? Sim.

Pronto, encontramos a classe mediana. Nesse ponto, paramos a comparação e verificamos que a mediana
se encontra na quarta classe, isto é, no intervalo entre 32 e 35.

        Receita Federal (Analista Tributário) Estatística                                              18
        www.estrategiaconcursos.com.br                                                                 160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Conhecendo a classe mediana, podemos aplicar a fórmula da mediana, a seguir:

                                                    ∑𝒇
                                                   ( 𝟐 𝒊 ) − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                      𝑴𝒅 = 𝒍𝒊𝒏𝒇 + [                  ]×𝒉
                                                           𝒇𝒊


em que:

    𝑙𝑖𝑛𝑓 é o limite inferior da classe mediana;

    𝑓𝑎𝑐 𝑎𝑛𝑡 é a frequência acumulada da classe anterior à classe mediana;

    𝑓𝑖 é a frequência simples da classe mediana; e

    ℎ é a amplitude do intervalo da classe mediana.

Já sabemos que a amplitude é a diferença entre os limites da classe. Assim, temos:

                                                    ℎ = 35 − 32 = 3.

Os demais elementos da fórmula são ilustrados a seguir:

          Receita Federal (Analista Tributário) Estatística                          19
          www.estrategiaconcursos.com.br                                             160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Após identificarmos os elementos, precisamos aplicá-los na fórmula mostrada anteriormente:

                                                      ∑𝑓
                                                     ( 𝑖 ) − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                       2
                                        𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [                ]×ℎ
                                                           𝑓𝑖


                                                             50
                                                            ( 2 ) − 17
                                           𝑀𝑑 = 32 + [                   ]×3
                                                               13

                                                       25 − 17
                                            𝑀𝑑 = 32 + (        )×3
                                                         13

                                                      8
                                          𝑀𝑑 = 32 + ( ) × 3 ≅ 33,85
                                                     13

Sendo assim, podemos afirmar que:

     a) 50% dos valores estão entre 23 e 33,85;

     b) 50% dos valores estão entre 33,85 e 44.

Com a memorização da fórmula da mediana para dados agrupados em classes, você conseguirá
compreender, com mais facilidade, a aplicação dos quartis, decis e percentis. As fórmulas dessas
medidas sofrem poucas alterações em relação à fórmula da mediana, como veremos nos próximos
tópicos. Por isso, recomendo fortemente que internalizem a expressão:

                                                     ∑𝑓
                                                    ( 𝑖 ) − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                      2
                                      𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [                 ]×ℎ
                                                          𝑓𝑖

        Receita Federal (Analista Tributário) Estatística                                    20
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A fórmula apresentada anteriormente é obtida pelo método de interpolação linear. Esse método
consiste, basicamente, em utilizar valores conhecidos para estimar valores desconhecidos de forma
linear, isto é, por meio de uma reta. No caso da mediana, a reta se inicia no ponto (𝑙𝑖𝑚𝑖𝑛𝑓 , 𝑓𝑎𝑐 );
                                                                                                                 𝑎𝑛𝑡
passa pelo ponto (𝑀𝑑 , ∑ 𝑓𝑖 ⁄2) e termina no ponto (𝑙𝑖𝑚𝑖𝑛𝑓 + ℎ, 𝑓𝑎𝑐                           + 𝑓𝑖 ). Vejamos:
                                                                                        𝑎𝑛𝑡

Em virtude da semelhança entre os triângulos 𝐴𝐵𝐶 e 𝐴𝐷𝐸, podemos estabelecer a seguinte relação
de proporcionalidade:
                                     𝑀𝑑 − 𝑙𝑖𝑛𝑓          (𝑙𝑖𝑛𝑓 + ℎ) − 𝑙𝑖𝑛𝑓
                                                   =
                                    ∑𝑓               (𝑓𝑎𝑐 + 𝑓𝑖 ) − 𝑓𝑎𝑐
                                   ( 𝑖 ) − 𝑓𝑎𝑐           𝑎𝑛𝑡              𝑎𝑛𝑡
                                     2         𝑎𝑛𝑡

                                                 𝑀𝑑 − 𝑙𝑖𝑛𝑓       ℎ
                                                               =
                                                ∑𝑓               𝑓𝑖
                                               ( 𝑖 ) − 𝑓𝑎𝑐
                                                 2         𝑎𝑛𝑡

                                                            ∑𝑓
                                                           ( 𝑖 ) − 𝑓𝑎𝑐
                                                             2           𝑎𝑛𝑡
                                       𝑀𝑑 − 𝑙𝑖𝑛𝑓 =                                 ×ℎ
                                                                 𝑓𝑖
                                                       [                       ]
Assim, chegamos à fórmula mostrada anteriormente:
                                                            ∑𝑓
                                                           ( 𝑖 ) − 𝑓𝑎𝑐
                                                             2           𝑎𝑛𝑡
                                       𝑀𝑑 = 𝑙𝑖𝑛𝑓 +                                 ×ℎ
                                                                 𝑓𝑖
                                                       [                       ]


        Receita Federal (Analista Tributário) Estatística                                                          21
        www.estrategiaconcursos.com.br                                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular a mediana da distribuição de frequências apresentada a seguir, referente às estaturas de
um grupo de 40 alunos:

                                                                 Frequência
                                               Estaturas
                                                                    (𝒇𝒊 )

                                              150 ⊢ 154              4

                                              154 ⊢ 158              9

                                              158 ⊢ 162             11

                                              162 ⊢ 166              8

                                              166 ⊢ 170              5

                                              170 ⊢ 174              3

                                                TOTAL               40

Como sabemos, o primeiro passo é construir a coluna de frequências acumuladas:

                                                                         Frequência
                                                      Frequência
                                       Estaturas                         Acumulada
                                                            (𝒇𝒊 )
                                                                            (𝒇𝒂𝒄 )

                                       150 ⊢ 154             4                4

                                       154 ⊢ 158             9               13

                                       158 ⊢ 162            11               24

                                       162 ⊢ 166             8               32

                                       166 ⊢ 170             5               37

                                       170 ⊢ 174             3               40

                                         TOTAL              40

Agora, precisamos identificar a classe mediana. Para tanto, vamos calcular sua posição por meio da
expressão:
                                                  ∑ 𝑓𝑖 40
                                                      =   = 20
                                                   2    2


        Receita Federal (Analista Tributário) Estatística                                      22
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Devemos comparar esse valor com os existentes na coluna de frequências acumuladas, da mesma
maneira que fizemos anteriormente. A classe mediana será a primeira classe em que a frequência
acumulada for igual ou superior a 20.
Assim, teremos:
   • a primeira frequência acumulada (4) é maior ou igual a 20? Não;
   • a segunda frequência acumulada (13) é maior ou igual a 20? Não;
   • a terceira frequência acumulada (24) é maior ou igual a 20? Sim.
Nesse ponto, paramos a comparação e verificamos que a mediana se encontra na terceira classe,
isto é, no intervalo entre 158 e 162.
Conhecendo a classe mediana, podemos identificar os termos empregados na fórmula da mediana:
   • ∑ 𝑓𝑖 = 40;
   • 𝑙𝑖𝑛𝑓 = 158;
   • 𝑓𝑎𝑐 𝑎𝑛𝑡 = 13;

   • 𝑓𝑖 = 11; e
   • ℎ = 162 − 158 = 4.
Finalmente, vamos aplicar a fórmula da mediana:
                                                     ∑𝑓
                                                    ( 𝑖 ) − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                      2
                                      𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [                 ]×ℎ
                                                          𝑓𝑖

                                                      40
                                                     ( ) − 13
                                         𝑀𝑑 = 158 + [ 2       ]×4
                                                         11

                                                     20 − 13
                                        𝑀𝑑 = 158 + (         )×4
                                                       11
                                                   7
                                       𝑀𝑑 = 158 + ( ) × 4 ≅ 160,54
                                                   11
Portanto, podemos concluir que:
  a) metade dos valores estão entre 150 e 160,54;
  b) metade dos valores estão entre 160,54 e 174.

        Receita Federal (Analista Tributário) Estatística                                  23
        www.estrategiaconcursos.com.br                                                     160

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 02

(CESPE/DEPEN/2015)

                                                    Idade (𝒙)                      Percentual

                                                  18 ≤ 𝑥 < 25                         30%

                                                  25 ≤ 𝑥 < 30                         25%

                                                  30 ≤ 𝑥 < 35         ==219a34==
                                                                                      20%

                                                  35 ≤ 𝑥 < 45                         15%

                                                  45 ≤ 𝑥 < 60                         10%

                                                       Total                         100%

Felipe M. Monteiro, Gabriela R. Cardoso e Rafael da Silva. A seletividade do sistema prisional brasileiro e as políticas de segurança pública. In: XV
Congresso Brasileiro de Sociologia, 26 a 29 de julho de 2011. Curitiba (PR). Grupo de Trabalhos - Violência e Sociedade (com adaptações).

Com base nos dados dessa tabela, julgue o item a seguir.
A mediana da distribuição mostrada é igual ou superior a 30 anos, pois as idades mínima e máxima na
população prisional brasileira em 2010 foram, respectivamente, 18 e 60 anos.


Comentários:
Nessa questão, podemos afirmar que o item está errado, pois os valores mínimo e máximo não são
suficientes para determinarmos o valor da mediana. Assim, ainda que o valor da mediana estivesse correto,
o item estaria errado.
De todo modo, vamos calcular o valor da mediana para treinar. Primeiro, construiremos a coluna da
frequência acumulada e descobriremos a classe mediana.

           Receita Federal (Analista Tributário) Estatística                                                                                     24
           www.estrategiaconcursos.com.br                                                                                                       160

                                               


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                                     Frequência
                                         Idade (𝑿𝒊 ) Frequência (𝒇𝒊 ) Acumulada
                                                                         (𝒇𝒂𝒄 )

                                           18 - 25            30%        30%

                                           25 - 30            25%        55%

                                           30 - 35            20%        75%

                                           35 - 45            15%        90%

                                           45 - 60            10%       100%

                                            Total             100%

A classe mediana é a primeira classe com frequência acumulada maior ou igual a 50%. Dessa forma, a classe
mediana é a segunda, pois 55% ≥ 50%. Assim, a mediana é um número entre 25 e 30.
Sabendo disso, vamos calcular o valor da mediana pelo método da interpolação:
                                                        ∑𝑓
                                                       ( 𝑖 ) − 𝑓𝑎𝑐𝑎𝑛𝑡
                                                         2
                                          𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [               ]×ℎ
                                                            𝑓𝑖

em que:
   • o somatório das frequências é ∑ 𝑓𝑖 = 100%.
   • o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 25.
   • a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 30%.
   • a frequência da própria classe é 𝑓𝑖 = 25%.
   • a amplitude da classe é ℎ = 30 − 25 = 5.


Agora podemos aplicar a fórmula:
                                                        ∑𝑓
                                                       ( 𝑖 ) − 𝑓𝑎𝑐𝑎𝑛𝑡
                                                         2
                                          𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [               ]×ℎ
                                                            𝑓𝑖

                                                          50% − 30%
                                            𝑀𝑑 = 25 + [             ]×5
                                                             25%
                                                         𝑀𝑑 = 29
Gabarito: Errado.

          Receita Federal (Analista Tributário) Estatística                                           25
          www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

(FCC/CNMP/2015) A tabela de frequências absolutas abaixo corresponde à distribuição dos valores dos
salários dos funcionários de nível médio lotados em um órgão público no mês de dezembro de 2014.

                                  Classe de Salários              Frequências
                                         (R$)                      Absolutas
                                     1.500 ⊢ 2.500                     𝑓1
                                     2.500 ⊢ 3.500                     𝑓2
                                     3.500 ⊢ 4.500                     𝑓3
                                     4.500 ⊢ 5.500                     𝑓4
                                     5.500 ⊢ 6.500                     𝑓5
                                     6.500 ⊢ 7.500                     𝑓6
                                  Observação: 𝒇𝒊 = −𝒊𝟐 + 𝟏𝟎𝒊 + 𝟏, 𝟏 ≤ 𝒊 ≤ 𝟔 .
O valor da mediana destes salários, obtido pelo método da interpolação linear, é, em R$, igual a
a) 5.320,00.
b) 5.040,00.
c) 5.260,00.
d) 4.900,00.
e) 5.400,00.


Comentários:
Nosso primeiro passo será calcular as frequências absolutas por meio da equação apresentada (𝑓𝑖 = −𝑖 2 +
10𝑖 + 1) no problema. Em seguida, completamos a tabela com as novas informações e calculamos as
frequências acumuladas. Assim:

        Classe de Salários (R$)              Frequências Absolutas          Frequências Acumuladas

               1.500 ⊢ 2.500           𝑓1 = − 1)2 + 10 × 1) + 1 = 10             𝟎 + 10 = 𝟏𝟎

               2.500 ⊢ 3.500           𝑓2 = − 2)2 + 10 × 2) + 1 = 17             𝟏𝟎 + 17 = 𝟐𝟕

               3.500 ⊢ 4.500           𝑓3 = − 3)2 + 10 × 3) + 1 = 22             𝟐𝟕 + 22 = 𝟒𝟗

               4.500 ⊢ 5.500           𝑓4 = − 4)2 + 10 × 4) + 1 = 25             𝟒𝟗 + 25 = 𝟕𝟒

               5.500 ⊢ 6.500           𝑓5 = − 5)2 + 10 × 5) + 1 = 26            𝟕𝟒 + 26 = 𝟏𝟎𝟎

               6.500 ⊢ 7.500           𝑓6 = − 6)2 + 10 × 6) + 1 = 25            𝟏𝟎𝟎 + 25 = 𝟏𝟐𝟓

                   Total                                    125                      125

        Receita Federal (Analista Tributário) Estatística                                            26
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Somando as frequências acumuladas chegamos a um total de 125 observações. A mediana é o termo central
do conjunto. Portanto, temos:
                                                        125
                                                                  = 62,5.
                                                          2

A quarta classe é a primeira a superar esse valor em termos de frequências acumuladas, portanto, ela será
nossa classe mediana. Vejamos:

                Classe de Salários (R$) Frequências Absolutas Frequências Acumuladas
                      1.500 ⊢ 2.500                               10             10
                      2.500 ⊢ 3.500                               17             27
                      3.500 ⊢ 4.500                               22             49
                     𝟒. 𝟓𝟎𝟎 ⊢ 𝟓. 𝟓𝟎𝟎                              𝟐𝟓         𝟕𝟒 (> 𝟔𝟐, 𝟓)
                      5.500 ⊢ 6.500                               26             100
                      6.500 ⊢ 7.500                               25             125
                            Total                             125                125

Sabendo disso, podemos calcular a mediana por meio do método de interpolação linear. Temos:
                                                        ∑𝑓
                                                       ( 𝑖 ) − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                         2
                                          𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [                ]×ℎ
                                                             𝑓𝑖

em que:
o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 4.500.
a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 49.
a frequência da própria classe é 𝑓𝑖 = 25.
a amplitude da classe é ℎ = 5.500 − 4.500 = 1.000.
Aplicando a fórmula, temos:
                                                      125
                                                              (
                                                          ) − 49
                                        𝑀𝑑 = 4.500 + [ 2         ] × 1.000
                                                         25

                                                          13,5
                                            𝑀𝑑 = 4.500 + (     ) × 1.000
                                                           25
                                               𝑀𝑑 = 4.500 + 13,5 × 40
                                                   𝑀𝑑 = 4.500 + 540
                                                       𝑀𝑑 = 5040
Gabarito: B.

          Receita Federal (Analista Tributário) Estatística                                           27
          www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Propriedades da Mediana

A seguir, estudaremos algumas propriedades importantes sobre a mediana.

        1º Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, a
          mediana do conjunto fica aumentada (ou diminuída) dessa constante.

Para explicar essa propriedade, vamos tomar como exemplo a sequência {𝒙𝒏 } = {3, 6, 8, 9, 10}, cuja
mediana é:
                                     𝑀𝑑𝑥 = 𝑥𝑛+1 = 𝑥5+1 = 𝑥6 = 𝑥3 = 8
                                                  2         2    2

                                                       𝑀𝑑𝑥 = 8


Se adicionarmos o número 5 a cada um dos termos da sequência, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 + 5} = {8, 11, 13, 14, 15}, cuja mediana é:
                                    𝑀𝑑𝑦 = 𝑦𝑛+1 = 𝑦5+1 = 𝑦6 = 𝑦3 = 13
                                                 2          2    2

                                                      𝑀𝑑𝑦 = 13


Veja que a adição do número 5 a cada um dos termos da sequência fez com que a mediana também
aumentasse em 5 unidades, indo de 8 para 13.

        Receita Federal (Analista Tributário) Estatística                                       28
        www.estrategiaconcursos.com.br                                                          160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

        2º Propriedade
        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, a mediana do conjunto fica multiplicada (ou dividida) por esta constante.

Para explicar essa propriedade, vamos tomar como exemplo a sequência {𝒙𝒏 } = {3, 6, 8, 9, 10}, cuja
mediana é:
                                     𝑀𝑑𝑥 = 𝑥𝑛+1 = 𝑥5+1 = 𝑥6 = 𝑥3 = 8
                                                  2         2    2

                                                       𝑀𝑑𝑥 = 8


Se multiplicarmos cada um dos termos da sequência por 5, iremos obter uma nova lista {𝑦𝑛 } =
{𝑥𝑛 × 5} = {15, 30, 40, 45, 50}, cuja mediana é:
                                    𝑀𝑑𝑦 = 𝑦𝑛+1 = 𝑦5+1 = 𝑦6 = 𝑦3 = 40
                                                 2          2    2

                                                      𝑀𝑑𝑦 = 40


Veja que a multiplicação de cada um dos termos da sequência por 5 fez com que a mediana também
fosse multiplicada por 5, aumentando de 8 para 40.

        Receita Federal (Analista Tributário) Estatística                                         29
        www.estrategiaconcursos.com.br                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

        3º Propriedade
        • A soma dos desvios absolutos de uma sequência de números, em relação a um número
          𝒂, é mínima quando 𝒂 é a mediana dos números.

Para explicar essa propriedade, vamos tomar como exemplo a série {𝑥𝑛 } = {1, 2, 3, 4, 6, 7, 8, 9}.
Como o número de termos é par, a mediana será, por convenção, a média aritmética dos dois termos
centrais:
                                                            4+6
                                                    𝑀𝑑 =          = 5.
                                                             2

O desvio em relação à mediana corresponde à diferença entre cada elemento da sequência e a
mediana. Como são 8 números, teremos a mesma quantidade de desvios para calcular. Logo, basta
encontrarmos a diferença entre cada número e a mediana:
                                         𝑑1 = 𝑥1 − 𝑀𝑑 = 1 − 5 = −4
                                         𝑑2 = 𝑥2 − 𝑀𝑑 = 2 − 5 = −3
                                         𝑑3 = 𝑥3 − 𝑀𝑑 = 3 − 5 = −2
                                         𝑑4 = 𝑥4 − 𝑀𝑑 = 4 − 5 = −1
                                          𝑑5 = 𝑥5 − 𝑀𝑑 = 6 − 5 = 1
                                          𝑑6 = 𝑥6 − 𝑀𝑑 = 7 − 5 = 2
                                          𝑑7 = 𝑥7 − 𝑀𝑑 = 8 − 5 = 3
                                          𝑑8 = 𝑥8 − 𝑀𝑑 = 9 − 5 = 4
Agora, precisamos somar os valores absolutos (valores positivos) desses desvios:
                     8

                    ∑|𝑑𝑖 | = |𝑑1 | + |𝑑2 | + |𝑑3 | + |𝑑4 | + |𝑑5 | + |𝑑6 | + |𝑑7 | + |𝑑8 |
                    𝑖=1

        Receita Federal (Analista Tributário) Estatística                                      30
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

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
             8

            ∑|𝑑𝑖 | = |−3,5| + |−2,5| + |−1,5| + |−0,5| + |1,5| + |2,5| + |3,5| + |4,5|
            𝑖=1
                      8

                    ∑|𝑑𝑖 | = 3,5 + 2,5 + 1,5 + 0,5 + 1,5 + 2,5 + 3,5 + 4,5 = 20
                    𝑖=1

        Receita Federal (Analista Tributário) Estatística                                    31
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

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

        Receita Federal (Analista Tributário) Estatística                                    32
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                              QUARTIL, DECIL E PERCENTIL
Já vimos que a mediana separa uma série em duas partes iguais, cada uma contendo o mesmo número de
elementos. Contudo, uma série também pode ser dividida em um número maior de partes, todas compostas
por quantidades iguais de elementos. Nesse caso, o nome da medida separatriz é atribuído de acordo com
a quantidade de partes em que a série é dividida:

   •   quartil: divide uma série em quatro partes iguais (𝑄1 , 𝑄2 , 𝑄3 );
   •   quintil: divide uma série em cinco partes iguais (𝑄𝑡1 , 𝑄𝑡2 , ⋯, 𝑄𝑡5 );
   •   decil: divide uma série em dez partes iguais (𝐷1 , 𝐷2 , ⋯, 𝐷9 );
   •   percentil: divide uma série em cem partes iguais (𝑃1 , 𝑃2 , ⋯, 𝑃99 ).
Nessa seção, vamos detalhar algumas medidas separatrizes que também são muito exploradas em provas
de concursos: os quartis, os decis e os percentis.

Quartis

Denominamos de quartis os valores de uma série que a dividem em quatro partes iguais, isto é, quatro
partes contendo o mesmo número de elementos (25%). A imagem a seguir mostra os quartis de uma
distribuição hipotética:

Temos, então, 3 quartis (𝑄1 , 𝑄2 e 𝑄3 ) para dividir uma série em quatro partes iguais:

   •   𝑄1: o primeiro quartil corresponde à separação dos primeiros 25% de elementos da série;
   •   𝑄2 : o segundo quartil corresponde à separação de metade dos elementos da série, coincidindo com
       a mediana (𝑸𝟐 = 𝑴𝒅 );
   •   𝑄3 : o terceiro quartil corresponde à separação dos primeiros 75% de elementos da série, ou dos
       últimos 25% de elementos da série.

        Receita Federal (Analista Tributário) Estatística                                           33
        www.estrategiaconcursos.com.br                                                              160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Para o cálculo dos quartis, empregaremos a mesma fórmula adotada no cálculo da mediana, apenas
                            ∑ 𝑓𝑖         𝑘×∑ 𝑓𝑖
substituindo a expressão           por            , em que 𝑘 indica a ordem do quartil e assume valores inteiros no
                             2             4
intervalo de 1 a 3.

Quartil para dados não-agrupados

O cálculo do quartil para dados não-agrupados é realizado, de forma aproximada, por meio das etapas
descritas a seguir:

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:

                                                      𝒌×𝒏
                                           𝑷𝑸𝒌 =               (𝒌 = 𝟏, 𝟐, 𝟑);
                                                       𝟒
   •   2.a etapa: identificamos a posição mais próxima do rol;
   •   3.a etapa: verificamos o valor que está ocupando essa posição.

Sempre que houver necessidade, teremos que organizar o conjunto de valores por ordem de magnitude.

Embora fórmula anterior possa ser utilizada para o cálculo da posição de 𝑄2 , por depender de uma
aproximação, nem sempre o valor do segundo quartil resultará no valor convencionado para a
mediana. Por isso, para o cálculo de 𝑄2 , vamos adotar o procedimento utilizado para encontrar a
mediana. Isto é, se o número de elementos for ímpar, 𝑄2 será representado pelo elemento que
                               𝑛+1
ocupar a posição central,            . Se o número de elementos do conjunto for par, 𝑄2 será representado
                                 2
                                                                                             𝑛   𝑛
pela média aritmética entre os elementos que ocuparem as posições centrais, e + 1.
                                                                                             2   2

        Receita Federal (Analista Tributário) Estatística                                                       34
        www.estrategiaconcursos.com.br                                                                          160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular os quartis 𝑄1 , 𝑄2 e 𝑄3 para o seguinte conjunto de valores:
                      {11, 15, 18, 12, 19, 25, 26, 16, 15, 21, 22, 27, 14, 18, 20, 24}
Reparem que os valores não estão organizados, portanto, nossa primeira tarefa será colocá-los em
ordem de magnitude (rol). Assim, teremos:
                      {11, 12, 14, 15, 15, 16, 18, 18, 19, 20, 21, 22, 24, 25, 26, 27}


a) Cálculo de 𝑸𝟏 :
Começamos determinando a posição de 𝑄1 :
                                                             1 × 16
                                                     𝑃𝑄1 =          =4
                                                               4
Depois, identificamos a posição mais próxima no rol. Como o resultado foi um número inteiro, a
posição mais próxima coincidirá com o valor encontrado, não havendo necessidade de aproximação.
Em seguida, verificamos o valor que está ocupando a posição identificada:

             𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎 𝒙𝟏𝟏 𝒙𝟏𝟐 𝒙𝟏𝟑 𝒙𝟏𝟒 𝒙𝟏𝟓 𝒙𝟏𝟔
             11 12 14 15 15 16 18 18 19                          20     21    22   24   25   26        27

Portanto, o valor 15 corresponde a 25% do rol.


b) Cálculo de 𝑸𝟐 :
Para o cálculo de 𝑄2 , precisamos verificar o número de elementos do conjunto. Se o número de
                                                                                                  𝑛+1
elementos for ímpar, 𝑄2 será representado pelo elemento que ocupar a posição                           . Se o número
                                                                                                   2
de elementos do conjunto for par, 𝑄2 será representado pela média aritmética entre os elementos
                                𝑛    𝑛
que ocuparem as posições e + 1.
                                2    2

No nosso exemplo, como o conjunto é formado por um número par de observações, 𝑄2 será
calculado como a média aritmética dos valores que ocupam as posições 8 e 9.
                         𝑋𝑛 + 𝑋𝑛+1              𝑋16 + 𝑋16+1
                           2        2            2           2       𝑋8 + 𝑋9 18 + 19
                  𝑄2 =                      =                    =          =        = 18,5
                                2                      2                2       2
Portanto, o valor 18,5 corresponde a 50% do rol.


        Receita Federal (Analista Tributário) Estatística                                                        35
        www.estrategiaconcursos.com.br                                                                           160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) Cálculo de 𝑸𝟑 :
Começamos determinando a posição de 𝑄3 :
                                                        3 × 16
                                                𝑃𝑄3 =          = 12
                                                          4
Depois, identificamos a posição mais próxima no rol. Como o resultado foi um número inteiro, a
posição mais próxima coincidirá com o valor encontrado, não havendo necessidade de aproximação.
Em seguida, verificamos o valor que está ocupando a posição identificada:

             𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎 𝒙𝟏𝟏 𝒙𝟏𝟐 𝒙𝟏𝟑 𝒙𝟏𝟒 𝒙𝟏𝟓 𝒙𝟏𝟔
             11 12 14 15 15 16 18 18 19                       20    21     22   24   25   26   27

Portanto, o valor 22 corresponde a 75% do rol.

Quartil para dados agrupados sem intervalos de classe

O cálculo do quartil para dados agrupados sem intervalos de classe é realizado, de forma aproximada, por
meio das etapas descritas a seguir:

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:

                                                 𝒌 × ∑ 𝒇𝒊
                                       𝑷𝑸𝒌 =                  (𝒌 = 𝟏, 𝟐, 𝟑)
                                                    𝟒

            em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;
   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                            36
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Embora fórmula anterior possa ser utilizada para o cálculo da posição de 𝑄2 , por depender de uma
aproximação, nem sempre o valor do segundo quartil resultará no valor convencionado para a
mediana. Por isso, para o cálculo de 𝑄2 , vamos adotar o procedimento utilizado para encontrar a
mediana. Isto é, se o número de elementos for ímpar, 𝑄2 será representado pelo elemento que
                               𝑛+1
ocupar a posição central,           . Se o número de elementos do conjunto for par, 𝑄2 será representado
                                2
                                                                                   𝑛   𝑛
pela média aritmética entre os elementos que ocuparem as posições centrais, e + 1.
                                                                                   2   2

Calcular 𝑄1 , 𝑄2 e 𝑄3 da tabela de frequências a seguir, que representa a quantidade de filhos dos
professores do Estratégia Concursos:

                                                               Frequência
                                                    Frequência
                                           Filhos              Acumulada
                                                       (𝒇𝒊 )
                                                                  (𝒇𝒂𝒄 )
                                             0              4           4
                                             1              6           10
                                             2              9           19
                                             3              5           24
                                             4              4           28
                                          TOTAL             28

a) Cálculo de 𝑸𝟏 :
Começamos determinando a posição de 𝑄1 :
                                                            1 × 28
                                                 𝑃𝑄1 =             =7
                                                              4

        Receita Federal (Analista Tributário) Estatística                                            37
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

                                                                          Frequência
                                                               Frequência
                                                  Filhos                  Acumulada
                                                                  (𝒇𝒊 )
                                                                             (𝒇𝒂𝒄 )
                                                    0                4              4
                                                    1                6           10 (≥ 𝟕)
                                                    2                9             19
                                                    3                5             24
                                                    4                4             28
                                                  TOTAL           28

Portanto, a quantidade de 1 filho corresponde a 25% do rol.

b) Cálculo de 𝑸𝟐 :
Para o cálculo de 𝑄2 , precisamos verificar o número de elementos do conjunto. Se o número de
                                                                                                      𝑛+1
elementos for ímpar, 𝑄2 será representado pelo elemento que ocupar a posição                               . Se o número
                                                                                                       2
de elementos do conjunto for par, 𝑄2 será representado pela média aritmética entre os elementos
                                  𝑛       𝑛
que ocuparem as posições e + 1.
                                  2       2

No nosso exemplo, como o conjunto é formado por um número par de observações, 𝑄2 será
calculado como a média aritmética dos valores que ocupam as posições 14 e 15.
                            𝑋𝑛 + 𝑋𝑛+1                   𝑋28 + 𝑋28+1
                              2               2            2             2       𝑋14 + 𝑋15 2 + 2
                     𝑄2 =                           =                        =            =      =2
                                      2                          2                   2       2
Portanto, a quantidade de 2 filhos corresponde a 50% do rol.

c) Cálculo de 𝑸𝟑 :
Começamos determinando a posição de 𝑄3 :
                                                                  3 × 28
                                                        𝑃𝑄3 =            = 21
                                                                    4

        Receita Federal (Analista Tributário) Estatística                                                            38
        www.estrategiaconcursos.com.br                                                                               160

                                              


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

                                                              Frequência
                                                   Frequência
                                         Filhos               Acumulada
                                                      (𝒇𝒊 )
                                                                 (𝒇𝒂𝒄 )
                                            0               4         4
                                            1               6        10
                                            2               9        19
                                            3               5    24 (≥ 𝟐𝟏)
                                            4               4        28
                                         TOTAL              28

Portanto, a quantidade de 3 filhos corresponde a 75% do rol.

        Receita Federal (Analista Tributário) Estatística                                      39
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Quartil para dados agrupados em classes

O cálculo do quartil para dados agrupados em classes será realizado por meio das seguintes etapas:

   •   1.a etapa: determinamos a posição do quartil, por meio da expressão:

                                                      𝑘 × ∑ 𝑓𝑖
                                              𝑃𝑄𝑘 =              (𝑘 = 1, 2, 3);
                                                         4

                em que:

                     𝑘 = índice do quartil;

                     ∑ 𝑓𝑖 = somatório das frequências simples.

   •   2.a etapa: identificamos a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;


   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e


   •   4.ª etapa: calculamos o valor do quartil por meio da fórmula apresentada a seguir, que consiste em
       uma variação da fórmula da mediana para dados agrupados em classes, mudando-se apenas o
       𝑘×∑ 𝑓𝑖
                 :
            4

                                               𝒌 × ∑ 𝒇𝒊
                                                        − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                  𝑸𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟒                 ] × 𝒉𝑸 𝒌
                                           𝑸𝒌         𝒇𝑸 𝒌


                em que:

                        𝑙𝑖𝑛𝑓 𝑄 = limite inferior da classe do quartil considerado;
                             𝑘


                        𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do quartil considerado;

                        ℎ𝑄𝑘 = amplitude do intervalo de classe do quartil considerado;

                        𝑓𝑄𝑘 = frequência simples da classe do quartil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                                    40
        www.estrategiaconcursos.com.br                                                                       160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular 𝑄1 , 𝑄2 e 𝑄3 da distribuição de frequências dos pesos de um grupo de 180 alunos do
Estratégia Concursos:

                                                                     Frequência
                                                        Frequência
                                       i   Pesos (kg)                Acumulada
                                                            (𝒇𝒊 )
                                                                        (𝒇𝒂𝒄 )

                                      1     10 ⊢ 30         10             10

                                      2     30 ⊢ 50         24             34

                                      3     50 ⊢ 70         57             91

                                      4     70 ⊢ 90         44          135

                                      5    90 ⊢ 110         29          164

                                      6 110 ⊢ 130           16          180

                                            TOTAL           180

a) Cálculo de 𝑸𝟏 :
Começamos determinando a posição de 𝑄1 :
                                                   1 × ∑ 𝑓𝑖 180
                                           𝑃𝑄1 =           =    = 45
                                                      4      4
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

        Receita Federal (Analista Tributário) Estatística                                     41
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Em seguida, encontramos o valor numérico de 𝑄1 utilizando a expressão:
                                                 1 × ∑ 𝑓𝑖
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                  𝑄1 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄1
                                             1          𝑓𝑄1

                                                   45 − 34
                                   𝑄1 = 50 + [             ] × 20 ≅ 53,9 𝐾𝑔
                                                     57

b) Cálculo de 𝑸𝟐 :
Começamos determinando a posição de 𝑄2 :
                                                2 × ∑ 𝑓𝑖 2 × 180
                                        𝑃𝑄2 =           =        = 90
                                                   4        4
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝑄2 utilizando a expressão:
                                                 2 × ∑ 𝑓𝑖
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                  𝑄2 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄2
                                             2          𝑓𝑄2

                                                   90 − 34
                                   𝑄2 = 50 + [             ] × 20 ≅ 69,7 𝐾𝑔
                                                     57

        Receita Federal (Analista Tributário) Estatística                                     42
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) Cálculo de 𝑸𝟑 :
Começamos determinando a posição de 𝑄3 :
                                               3 × ∑ 𝑓𝑖 3 × 180
                                       𝑃𝑄3 =           =        = 135
                                                  4        4


Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝑄3 utilizando a expressão:
                                                 3 × ∑ 𝑓𝑖
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                  𝑄3 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄3
                                             3          𝑓𝑄3

                                                    135 − 91
                                    𝑄3 = 70 + [              ] × 20 = 90 𝐾𝑔
                                                       44

        Receita Federal (Analista Tributário) Estatística                                     43
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Decis

Denominamos de decis os valores de uma série que a dividem em dez partes iguais, isto é, dez partes
contendo o mesmo número de elementos (10%). A imagem a seguir mostra os decis de uma distribuição
hipotética:

Temos, então, 9 decis (𝐷1 , 𝐷2 , ⋯, 𝐷9 ) para dividir uma série em dez partes iguais:

   •   𝐷1 : o primeiro decil corresponde à separação dos primeiros 10% de elementos da série;
   •   𝐷5 : o quinto decil corresponde à separação de metade dos elementos da série, coincidindo com a
       mediana (𝑫𝟓 = 𝑴𝒅 );
   •   𝐷𝟗 : o nono decil corresponde à separação dos primeiros 90% de elementos da série, ou dos últimos
       10% de elementos da série.

Para o cálculo dos decis, empregaremos a mesma fórmula adotada no cálculo da mediana, apenas
                            ∑ 𝑓𝑖         𝑘×∑ 𝑓𝑖
substituindo a expressão           por            , em que 𝑘 indica a ordem do decil e assume valores inteiros no
                              2            10
intervalo de 1 a 9.

Decil para dados não-agrupados

O cálculo do decil segue o mesmo raciocínio empregado no cálculo do quartil para dados não-agrupados. A
primeira tarefa que devemos realizar, se houver necessidade, é organizar o conjunto de valores por ordem
de magnitude. Depois disso, procedemos conforme as seguintes etapas:

   •   1.a etapa: determinamos a posição do decil, por meio da expressão:
                                                   𝒌×𝒏
                                         𝑷𝑫𝒌 =               (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗);
                                                    𝟏𝟎
   •   2.a etapa: identificamos a posição mais próxima do rol;
   •   3.a etapa: verificamos o valor que está ocupando essa posição.

        Receita Federal (Analista Tributário) Estatística                                                     44
        www.estrategiaconcursos.com.br                                                                        160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcularemos os quartis 𝐷1 e 𝐷8 para o seguinte conjunto de valores:
                                        {5, 12, 15, 20, 2, 3, 4, 18, 10, 22}
Reparem que os valores não estão organizados. Portanto, nossa primeira tarefa será colocá-los em
ordem de magnitude (rol):
                                        {2, 3, 4, 5, 10, 12, 15, 18, 20, 22}
a) Cálculo de 𝑫𝟏 :
Começamos determinando a posição de 𝐷1 :
                                                            1 × 10
                                                  𝑃𝐷1 =            =1
                                                              10
Depois, identificamos a posição mais próxima no rol. Como o resultado foi um número inteiro, a
posição mais próxima coincidirá com o valor encontrado, não havendo necessidade de aproximação.

                                  𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎
                                  2     3     4    5      10 12 15 18 20       22

Portanto, o valor 2 corresponde a 10% do rol.


b) Cálculo de 𝑫𝟖 :
Começamos determinando a posição de 𝐷8 :
                                                            8 × 10
                                                  𝑃𝐷8 =            =8
                                                              10
Depois, identificamos a posição mais próxima no rol. Como o resultado foi um número inteiro, a
posição mais próxima coincidirá com o valor encontrado, não havendo necessidade de aproximação.

                                  𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎
                                  2     3     4    5      10 12 15 18 20       22

Portanto, o valor 18 corresponde a 80% do rol.

        Receita Federal (Analista Tributário) Estatística                                    45
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Decil para dados agrupados sem intervalos de classe.

O cálculo do decil para dados agrupados sem intervalos de classe será realizado por meio das etapas
descritas a seguir:

   •   1.a etapa: determinamos a posição do decil, por meio da expressão:

                                                 𝒌 × ∑ 𝒇𝒊
                                     𝑷𝑫𝒌 =                       (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗)
                                                    𝟏𝟎

            em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a frequência
       acumulada imediatamente igual ou superior à posição do decil;
   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

Vamos calcular 𝐷3 e 𝐷8 da tabela de frequências a seguir, que representa a quantidade de filhos dos
professores do Estratégia Concursos:

                                                               Frequência
                                                    Frequência
                                           Filhos              Acumulada
                                                       (𝒇𝒊 )
                                                                  (𝒇𝒂𝒄 )
                                             0              18          18
                                             1              35          53
                                             2              46          99
                                             3              28         127
                                             4              25         152
                                             5              10         162
                                             6              5          167
                                             7              3          170
                                           TOTAL        170


        Receita Federal (Analista Tributário) Estatística                                                46
        www.estrategiaconcursos.com.br                                                                   160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

a) Cálculo de 𝑫𝟑 :
Começamos determinando a posição de 𝐷3 :
                                                        3 × 170
                                                𝑃𝐷3 =           = 51
                                                          10
Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

                                                              Frequência
                                                   Frequência
                                         Filhos               Acumulada
                                                      (𝒇𝒊 )
                                                                 (𝒇𝒂𝒄 )
                                            0               18       18
                                            1               35   53 (≥ 𝟓𝟏)
                                            2               46       99
                                            3               28       127
                                            4               25       152
                                            5               10       162
                                            6               5        167
                                            7               3        170
                                         TOTAL           170

Portanto, a quantidade de 1 filho corresponde a 30% do rol.

b) Cálculo de 𝑫𝟖 :
Começamos determinando a posição de 𝐷8 :
                                                        8 × 170
                                                𝑃𝐷8 =           = 136
                                                          10
Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

        Receita Federal (Analista Tributário) Estatística                                      47
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                                Frequência
                                                   Frequência
                                         Filhos                 Acumulada
                                                      (𝒇𝒊 )
                                                                   (𝒇𝒂𝒄 )
                                            0           18           18
                                            1           35           53
                                            2           46           99
                                            3           28          127
                                            4           25      152 (≥ 𝟏𝟑𝟔)
                                            5           10          162
                                            6               5       167
                                            7               3       170
                                         TOTAL         170

Portanto, a quantidade de 4 filhos corresponde a 80% do rol.

        Receita Federal (Analista Tributário) Estatística                     48
        www.estrategiaconcursos.com.br                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Decil para dados agrupados em classes

O cálculo do decil para dados agrupados em classes será realizado por meio das seguintes etapas:

   •   1.a etapa: determinamos a posição do decil, por meio da expressão:

                                              𝑘 × ∑ 𝑓𝑖
                                      𝑃𝐷𝑘 =                              (𝑘 = 1, 2, 3, ⋯ , 9);
                                                 10

             em que:

                    𝑘 = índice do decil;

                    ∑ 𝑓𝑖 = somatório das frequências simples.
                                                            ==219a34==

   •   2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a frequência
       acumulada imediatamente igual ou superior à posição do decil;


   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e


   •   4.ª etapa: calculamos o valor do decil por meio da fórmula apresentada a seguir, que consiste em
       uma variação da fórmula da mediana para dados agrupados em classes, mudando-se apenas o
       𝑘×∑ 𝑓𝑖
                :
        10

                                              𝒌 × ∑ 𝒇𝒊
                                                       − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                 𝑫𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟏𝟎                ] × 𝒉𝑫𝒌
                                          𝑫𝒌         𝒇𝑫𝒌


             em que:

                       𝑙𝑖𝑛𝑓 𝐷 = limite inferior da classe do decil considerado;
                            𝑘


                       𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do decil considerado;

                       ℎ𝐷𝑘 = amplitude do intervalo de classe do decil considerado;

                       𝑓𝐷𝑘 = frequência simples da classe do decil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                                 49
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular 𝐷1 , 𝐷2 e 𝐷7 da distribuição de frequências das estaturas de um grupo de 54 alunos do
Estratégia Concursos:

                                                                 Frequência
                                                      Frequência
                                   i   Estaturas (cm)            Acumulada
                                                         (𝒇𝒊 )
                                                                    (𝒇𝒂𝒄 )
                                  1      120 ⊢ 128            6             6
                                  2      128 ⊢ 136            12            18
                                  3      136 ⊢ 144            16            34
                                  4      144 ⊢ 152            13            47
                                  5      152 ⊢ 160            7             54
                                           TOTAL              54

a) Cálculo de 𝑫𝟏 :
Começamos determinando a posição de 𝐷1 :
                                                   1 × ∑ 𝑓𝑖 54
                                           𝑃𝐷1 =           =    = 5,4
                                                     10      10
Depois disso, identificamos a posição na coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                  50
        www.estrategiaconcursos.com.br                                                     160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Em seguida, encontramos o valor numérico de 𝐷1 utilizando a expressão:
                                                1 × ∑ 𝑓𝑖
                                                         − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                   𝐷1 = 𝑙𝑖𝑛𝑓 + [ 10                ] × ℎ𝐷1
                                            𝐷1         𝑓𝐷1

                                                    5,4 − 0
                                   𝐷1 = 120 + [             ] × 8 = 127,5 𝑐𝑚
                                                       6

b) Cálculo de 𝑫𝟐 :
Começamos determinando a posição de 𝐷2 :
                                                2 × ∑ 𝑓𝑖 2 × 54
                                       𝑃𝐷2 =            =       = 10,8
                                                  10       10
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝐷2 utilizando a expressão:
                                                  2 × ∑ 𝑓𝑖
                                                           − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                   𝐷2 = 𝑙𝑖𝑛𝑓 𝐷 + [ 10                ] × ℎ𝐷2
                                              2          𝑓𝐷2

                                                    10,8 − 6
                                  𝐷2 = 128 + [               ] × 8 = 131,2 𝑐𝑚
                                                       12

        Receita Federal (Analista Tributário) Estatística                                     51
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) Cálculo de 𝑫𝟕 :
Começamos determinando a posição de 𝐷7 :
                                                7 × ∑ 𝑓𝑖 7 × 54
                                       𝑃𝐷7 =            =       = 37,8
                                                  10       10
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝐷7 utilizando a expressão:
                                                  7 × ∑ 𝑓𝑖
                                                           − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                   𝐷7 = 𝑙𝑖𝑛𝑓 𝐷 + [ 10                ] × ℎ𝐷7
                                              7          𝑓𝐷7

                                                   37,8 − 34
                                 𝐷7 = 144 + [                ] × 8 = 146,3 𝑐𝑚
                                                      13

        Receita Federal (Analista Tributário) Estatística                                     52
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Percentis

Denominamos de percentis os valores de uma série que a dividem em cem partes iguais, isto é, cem partes
contendo o mesmo número de elementos (1%). A imagem a seguir mostra os percentis de uma distribuição
hipotética:

Temos, então, 99 percentis (𝑃1 , 𝑃2 , ⋯, 𝑃99 ) para dividir uma série em cem partes iguais:

   •   𝑃1 : o primeiro percentil corresponde à separação do primeiro 1% de elementos da série;
   •   𝑃50 : o quinquagésimo percentil corresponde à separação de metade dos elementos da série,
       coincidindo com a mediana (𝑷𝟓𝟎 = 𝑴𝒅 );
   •   𝑃99 : o nonagésimo nono percentil corresponde à separação dos primeiros 99% de elementos da
       série, ou do último 1% de elementos da série.

Para o cálculo dos percentis, empregaremos a mesma fórmula adotada no cálculo da mediana, apenas
                           ∑ 𝑓𝑖         𝑘×∑ 𝑓𝑖
substituindo a expressão          por            , em que 𝑘 indica a ordem do percentil e assume valores inteiros no
                             2           100
intervalo de 1 a 99.

Percentil para dados não-agrupados

O cálculo do percentil segue o mesmo raciocínio empregado nos cálculos do quartil e do decil para dados
não-agrupados. A primeira tarefa que devemos realizar, se houver necessidade, é organizar o conjunto de
valores por ordem de magnitude. Depois disso, colocamos em prática as seguintes etapas:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:

                                                   𝒌×𝒏
                                        𝑷𝑷𝒌 =               (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗);
                                                   𝟏𝟎𝟎
   •   2.a etapa: identificamos a posição mais próxima do rol;
   •   3.a etapa: verificamos o valor que está ocupando essa posição.

        Receita Federal (Analista Tributário) Estatística                                                        53
        www.estrategiaconcursos.com.br                                                                           160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcularemos os percentis 𝑃27 e 𝑃83 para o seguinte conjunto de valores:
                                     {15, 2, 4, 6, 10, 12, 13, 7, 21, 18, 20}
Reparem que os valores não estão organizados. Portanto, nossa primeira tarefa será colocá-los em
ordem de magnitude (rol):
                                     {2, 4, 6, 7, 10, 12, 13, 15, 18, 20, 21}


a) Cálculo de 𝑷𝟐𝟕 :
Começamos determinando a posição de 𝑃27 :
                                                       27 × 11
                                              𝑃𝑃27 =           = 2,97
                                                         100
Depois, identificamos a posição mais próxima no rol:
                                                       𝑃𝑃27 = 3
Em seguida, verificamos o valor que está ocupando essa posição.

                              𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎 𝒙𝟏𝟏
                               2     4    6     7    10 12 13 15 18        20   21

Portanto, o valor 6 corresponde a 27% do rol.


b) Cálculo de 𝑷𝟖𝟑 :
Começamos determinando a posição de 𝑃83 :
                                                       83 × 11
                                              𝑃𝑃83 =           = 9,13
                                                         100
Depois, identificamos a posição mais próxima no rol:
                                                       𝑃𝑃27 = 9
Em seguida, verificamos o valor que está ocupando essa posição.

        Receita Federal (Analista Tributário) Estatística                                    54
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                              𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎 𝒙𝟏𝟏
                               2     4      6    7    10 12 13 15 18          20   21

Portanto, o valor 18 corresponde a 83% do rol.

Percentil para dados agrupados sem intervalos de classe

O cálculo do percentil para dados agrupados sem intervalos de classe será realizado por meio das etapas
descritas a seguir:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:

                                                𝒌 × ∑ 𝒇𝒊
                                    𝑷𝑷𝒌 =                     (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗)
                                                  𝟏𝟎𝟎

            em que∑ 𝑓𝑖 é a soma das frequências simples;

   •   2.a etapa: identificamos a posição do percentil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do percentil;
   •   3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

Vamos calcular 𝑃45 e 𝑃93 da tabela de frequências a seguir, que representa a quantidade de filhos
dos professores do Estratégia Concursos:

        Receita Federal (Analista Tributário) Estatística                                           55
        www.estrategiaconcursos.com.br                                                              160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                               Frequência
                                                    Frequência
                                          Filhos               Acumulada
                                                       (𝒇𝒊 )
                                                                  (𝒇𝒂𝒄 )
                                            1               15       15
                                            2               30       45
                                            3               20       65
                                            4               12       77
                                            5               10       87
                                            6               8        95
                                         TOTAL              95

a) Cálculo de 𝑷𝟒𝟓 :
Começamos determinando a posição de 𝑃45 :
                                                      45 × 95
                                            𝑃𝑃45 =            = 42,75
                                                        100
Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

                                                               Frequência
                                                    Frequência
                                          Filhos               Acumulada
                                                       (𝒇𝒊 )
                                                                  (𝒇𝒂𝒄 )
                                            1               15       15
                                            2               30   45 (≥ 𝟒𝟑)
                                            3               20       65
                                            4               12       77
                                            5               10       87
                                            6               8        95
                                         TOTAL              95

Portanto, a quantidade de 2 filhos corresponde a 45% do rol.

        Receita Federal (Analista Tributário) Estatística                                      56
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

b) Cálculo de 𝑷𝟗𝟑 :
Começamos determinando a posição de 𝑃93 :
                                                      93 × 95
                                            𝑃𝑃93 =            = 88,35
                                                        100
Depois disso, identificamos a posição na coluna de frequências acumuladas. Em seguida, verificamos
a variável que corresponde a essa posição:

                                                               Frequência
                                                    Frequência
                                          Filhos               Acumulada
                                                       (𝒇𝒊 )
                                                                  (𝒇𝒂𝒄 )
                                            1               15       15
                                            2               30       45
                                            3               20       65
                                            4               12       77
                                            5               10       87
                                            6               8    95 (≥ 𝟖𝟖)
                                         TOTAL              95

Portanto, a quantidade de 6 filhos corresponde a 93% do rol.

        Receita Federal (Analista Tributário) Estatística                                      57
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Percentil para dados agrupados em classes

O cálculo do percentil para dados agrupados em classes será realizado por meio das seguintes etapas:

   •   1.a etapa: determinamos a posição do percentil, por meio da expressão:

                                                   𝑘 × ∑ 𝑓𝑖
                                           𝑃𝑃𝑘 =              (𝑘 = 1, 2, 3, ⋯ , 99);
                                                     100

            em que:

                    𝑘 = índice do percentil;

                    ∑ 𝑓𝑖 = somatório das frequências simples.

   •   2.a etapa: identificamos a posição do percentil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do percentil;


   •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição; e


   •   4.ª etapa: calculamos o valor do percentil por meio da fórmula apresentada a seguir, que consiste
       em uma variação da fórmula da mediana para dados agrupados em classes, mudando-se apenas o
       𝑘×∑ 𝑓𝑖
                :
        100

                                                    𝒌 × ∑ 𝒇𝒊
                                                             − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                      𝑷𝒌 = 𝒍𝒊𝒏𝒇 + [   𝟏𝟎𝟎              ] × 𝒉𝑷𝒌
                                               𝑷𝒌          𝒇𝑷𝒌

            em que:

                    𝑙𝑖𝑛𝑓        = limite inferior da classe do percentil considerado;
                           𝑃𝑘


                    𝑓𝑎𝑐 𝑎𝑛𝑡 = frequência acumulada da classe anterior à classe do percentil considerado;

                    ℎ𝑃𝑘 = amplitude do intervalo de classe do percentil considerado;

                    𝑓𝑃𝑘 = frequência simples da classe do percentil considerado.

Sempre que houver necessidade, teremos que incluir uma coluna de frequências acumuladas.

        Receita Federal (Analista Tributário) Estatística                                                  58
        www.estrategiaconcursos.com.br                                                                     160

                                           


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Calcular 𝑃45 e 𝑃77 da distribuição de frequências das estaturas de um grupo de 54 alunos do
Estratégia Concursos:

                                                                  Frequência
                                                       Frequência
                                   i    Estaturas (cm)            Acumulada
                                                          (𝒇𝒊 )
                                                                     (𝒇𝒂𝒄 )
                                   1       120 ⊢ 128           5             5
                                   2       128 ⊢ 136           13            18
                                   3       136 ⊢ 144           16            34
                                   4       144 ⊢ 152           13            47
                                   5       152 ⊢ 160           7             54
                                            TOTAL              54

a) Cálculo de 𝑷𝟒𝟓 :
Começamos determinando a posição de 𝑃45 :
                                                45 × ∑ 𝑓𝑖 45 × 54
                                       𝑃𝑃45 =            =        = 24,30
                                                  100       100
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝑃45 utilizando a expressão:


        Receita Federal (Analista Tributário) Estatística                                     59
        www.estrategiaconcursos.com.br                                                        160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                              45 × ∑ 𝑓𝑖
                                                        − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                𝑃45 = 𝑙𝑖𝑛𝑓 + [ 100                ] × ℎ𝑃45
                                          𝑃45       𝑓𝑃45

                                                  24,30 − 18
                               𝑃45 = 136 + [                 ] × 8 = 139,15 𝑐𝑚
                                                      16


b) Cálculo de 𝑷𝟕𝟕 :
Começamos determinando a posição de 𝑃77 :
                                              77 × ∑ 𝑓𝑖 77 × 54
                                    𝑃𝑃77 =             =        = 41,04
                                                100       100
Depois, identificamos a classe que representa essa posição na coluna de frequências acumuladas:

Em seguida, encontramos o valor numérico de 𝑃77 utilizando a expressão:
                                                77 × ∑ 𝑓𝑖
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                𝑃77 = 𝑙𝑖𝑛𝑓 𝑃 + [ 100                ] × ℎ𝑃77
                                            77         𝑓𝑃77

                                                  41,58 − 34
                               𝑃77 = 144 + [                 ] × 8 = 148,66 𝑐𝑚
                                                      13

        Receita Federal (Analista Tributário) Estatística                                     60
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

(FCC/BANRISUL/2019) As idades dos 120 funcionários lotados em uma repartição pública estão
distribuídas conforme a tabela de frequências absolutas abaixo.

                                    Idade (x) em anos Número de funcionários

                                       𝟐𝟎 < 𝒙 ≤ 𝟑𝟎                      40

                                       𝟑𝟎 < 𝒙 ≤ 𝟒𝟎                      50

                                       𝟒𝟎 < 𝒙 ≤ 𝟓𝟎                      20

                                       𝟓𝟎 < 𝒙 ≤ 𝟔𝟎                      10

                                            Total                      120

Utilizando o método da interpolação linear, obteve-se o primeiro quartil (𝑸𝟏) e a mediana (𝑴𝒅) desta
distribuição em anos. A amplitude do intervalo [𝑸𝟏,𝑴𝒅] é então igual a
a) 4,0.
b) 6,5.
c) 10,0.
d) 3,5.
e) 7,5.


Comentários:
Para calcularmos o primeiro quartil, precisamos encontrar a posição:
                                          1𝑛 1 × 120
                                               =          = 30
                                           4         4
Agora, vamos determinar a classe em que se encontra o primeiro quartil. Devemos procurar a primeira
frequência acumulada que é maior do que ou igual a 30. Vejam que a primeira frequência acumulada já é
maior do que 30. Portanto, o primeiro quartil está na primeira classe.

           Receita Federal (Analista Tributário) Estatística                                      61
           www.estrategiaconcursos.com.br                                                         160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                   Idade em anos Número de funcionários Frequência acumulada

                        20 - 30                        40                  40 (> 30)

                        30 - 40                        50                     90

                        40 - 50                        20                    110

                        50 - 60                        10                    120

                         Total                        120

Agora é só aplicar a fórmula do 𝑄1:
                                                       1𝑛
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                          𝑄1 = 𝑙𝑖𝑛𝑓 + [ 4           ]×ℎ
                                                           𝑓𝑖

   • o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 20.
   • a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 0, pois não há classe anterior.
   • a frequência da própria classe é 𝑓𝑖 = 40.
   • a amplitude da classe é ℎ = 30 − 20 = 10.
Jogando esses valores na fórmula, teremos:
                                                          30 − 0
                                             𝑄1 = 20 + [         ] × 10
                                                            40
                                                      𝑄1 = 27,5


Pronto, agora vamos calcular a mediana. Para tanto, precisamos descobrir a posição:
                                            𝑛 120
                                              =      = 60
                                            2     2
De posse dessa informação, podemos determinar a classe em que se encontra a mediana. Devemos procurar
a primeira frequência acumulada que é maior do que ou igual a 60. A segunda frequência acumulada é maior
que 60. Portanto, a mediana está na segunda classe.

                  Idade em anos Número de funcionários Frequência acumulada

                       20 - 30                        40                      40

                       30 - 40                        50                   90 (> 60)

                       40 - 50                        20                     110

                       50 - 60                        10                     120

                         Total                       120

        Receita Federal (Analista Tributário) Estatística                                            62
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Agora é só aplicar a fórmula da 𝑀𝑑 :
                                                        𝑛
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                           𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [2           ]×ℎ
                                                            𝑓𝑖

   • o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 30.
   • a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 40.
   • a frequência da própria classe é 𝑓𝑖 = 50.
   • a amplitude da classe é ℎ = 40 − 30 = 10.
Jogando esses valores na fórmula, teremos:
                                                          60 − 40
                                            𝑀𝑑 = 30 + [           ] × 10
                                                            50
                                                       𝑀𝑑 = 34
A amplitude do intervalo [𝑄1, 𝑀𝑑 ] é dada pela diferença entre os extremos.
                                         𝑀𝑑 − 𝑄1 = 34 − 27, 50 = 6, 50
Gabarito: B.


(CESPE/IPHAN/2018) Uma pesquisa a respeito das quantidades de teatros em cada uma de 11 cidades
brasileiras selecionadas apresentou o seguinte resultado: {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4}.
Com referência a esses dados, julgue o item seguinte.
O valor do primeiro quartil do conjunto de dados (Q1/4) é igual a 3.
Comentários:
Podemos usar a seguinte fórmula para encontrar a posição do primeiro quartil:
                                                             1×𝑛
                                                     𝑃𝑄1 =
                                                              4
Assim, temos:
                                                   11
                                                    1× = 2,75
                                                    4
Logo, o primeiro quartil está entre as posições 2 e 3. De acordo com o conjunto, o valor do primeiro quartil
é 2.
Gabarito: Errado.


(CESPE/IPHAN/2018) Uma pesquisa a respeito das quantidades de teatros em cada uma de 11 cidades
brasileiras selecionadas apresentou o seguinte resultado: {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4}.
Com referência a esses dados, julgue o item seguinte.
O valor do terceiro quartil do conjunto de dados (Q3/4) é igual a 4.


        Receita Federal (Analista Tributário) Estatística                                                63
        www.estrategiaconcursos.com.br                                                                   160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Comentários:
Podemos usar a seguinte fórmula para encontrar a posição do terceiro quartil:
                                                             3×𝑛
                                                     𝑃𝑄3 =
                                                              4
Assim, temos:
                                                    11
                                                    3×  = 8,25
                                                     4
Logo, o terceiro quartil está entre as posições 8 e 9. De acordo com o conjunto, o valor do terceiro quartil é
4.
Gabarito: Certo.


(FGV/DPE-RJ/2014) Um levantamento sobre o local de residência das pessoas que recorrem à Defensoria
Pública indicou que 30% moram a menos de 10 quilômetros distância de um dos pontos de atendimento,
70% a menos de 20 quilômetros, 90% a menos de 30 quilômetros e que nenhuma delas mora a mais de 40
quilômetros de distância. Supondo ainda que a distribuição das distâncias, dentro das faixas especificadas
(10 Km), é uniforme pode-se afirmar que
a) A distância mediana é de 15 quilômetros e o percentil 75 é 22,5 quilômetros.
b) A distância mediana é de 20 quilômetros e o desvio-padrão é de 8 quilômetros.
c) A distância mediana é de 20 quilômetros a moda é de 18 quilômetros.
d) A distância mediana é de 15 quilômetros e o decil 9 é de 35 quilômetros.
e) A distância mediana é de 15 quilômetros e a média é de 15 quilômetros.


Comentários:


Para entendermos a questão vamos montar uma tabela com os dados fornecidos pelo enunciado.

                                                             Freq. Relativa
                                           Distância (𝒙)
                                                              Acumulada

                                             0 ≤ 𝑥 < 10          30%

                                            𝟏𝟎 ≤ 𝒙 < 𝟐𝟎 70% (> 50%)

                                            20 ≤ 𝑥 < 30          90%

                                            30 ≤ 𝑥 < 40          100%

Para identificar a mediana, precisamos encontrar o termo central da amostra. Como temos uma frequência
acumulada total de 100%, a mediana ocupará a posição representada por 50%. Dessa forma, nossa classe
mediana será o intervalo entre 10 e 20 quilômetros, pois é o primeiro a superar a marca de 50%.


        Receita Federal (Analista Tributário) Estatística                                                  64
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Sabendo disso, podemos aplicar a fórmula da mediana:
                                                        𝑛
                                                          − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                           𝑀𝑑 = 𝑙𝑖𝑛𝑓 + [2           ]×ℎ
                                                            𝑓𝑖

   • o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 10.
   • a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 30%.
   • a frequência da própria classe é 𝑓𝑖 = 40%.
   • a amplitude da classe é ℎ = 20 − 10 = 10.


Jogando esses valores na fórmula, teremos:
                                                    50% − 30%
                                         𝑀𝑑 = 10 + (            ) × 10
                                                        40%
                                                        20%
                                             𝑀𝑑 = 10 + (    ) × 10
                                                        40%
                                                         1
                                              𝑀𝑑 = 10 + ( ) × 10
                                                         2
                                               𝑀𝑑 = 10 + 5 = 15
Portanto, eliminamos as alternativas B e C, pois a mediana é 15 e não 20 quilômetros.


Agora, vamos calcular o septuagésimo quinto percentil (𝑃75 ). Para isso, precisamos identificar a classe que
corresponde à frequência acumulada de 75%. Vejamos:

                                                            Freq. Relativa
                                           Distância (𝒙)
                                                             Acumulada

                                             0 ≤ 𝑥 < 10         30%

                                            10 ≤ 𝑥 < 20         70%

                                            𝟐𝟎 ≤ 𝒙 < 𝟑𝟎 90% (> 75%)

                                            30 ≤ 𝑥 < 40         100%

Pronto, agora podemos aplicar a fórmula do percentil:
                                                   75 × ∑ 𝑓𝑖
                                                              − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                     𝑃75 = 𝑙𝑖𝑛𝑓 + [ 100                 ]×ℎ
                                                           𝑓𝑖

   • o limite inferior da classe é 𝑙𝑖𝑛𝑓 = 20.
   • a frequência acumulada da classe anterior é 𝑓𝑎𝑐 𝑎𝑛𝑡 = 70%.


        Receita Federal (Analista Tributário) Estatística                                                65
        www.estrategiaconcursos.com.br                                                                   160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   • a frequência da própria classe é 𝑓𝑖 = 20%.
   • a amplitude da classe é ℎ = 30 − 20 = 10.


Jogando esses valores na fórmula, teremos:
                                                       75% − 70%
                                         𝑃75 = 20 + [              ] × 10
                                                           20%
                                                            5%
                                              𝑃75 = 20 + [     ] × 10
                                                           20%
                                                             1
                                                𝑃75 = 20 + ( ) × 10
                                                             4
                                               𝑃75 = 20 + 2,5 = 22,5


Analisando as alternativas, observamos que a letra A está correta.


Para não restar dúvidas, vamos analisar as alternativas D e E:
    • Letra D: Errada. A alternativa se refere ao nono decil, que é o valor cuja frequência relativa acumulada
vale 90%. A tabela nos mostra que esse valor corresponde a 30 km, e não a 35 km.
   • Letra E: Errada. Precisamos calcular as frequências relativas simples para sabermos a média. Para isso
tomamos a diferença entre duas frequências acumuladas seguidas para termos a frequência simples.
Montando a tabela, temos:

                         Distância Ponto Médio (𝑿) Frequência Simples (𝒇) 𝑿 × 𝒇

                        0 ≤ 𝑥 < 10                5                   0,30         1,5

                       10 ≤ 𝑥 < 20               15                   0,40          6

                       20 ≤ 𝑥 < 30               25                   0,20          5

                       30 ≤ 𝑥 < 40               35                   0,10         3,5

                            Total                                          𝟏       𝟏𝟔

Então, a média vale 16 km.
Gabarito: A.

        Receita Federal (Analista Tributário) Estatística                                                  66
        www.estrategiaconcursos.com.br                                                                    160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                  BOX PLOT
Um boxplot (também chamado de box-and-whisker plot) é uma ferramenta gráfica
frequentemente utilizada na análise exploratória de dados que permite visualizar a distribuição
dos dados e os valores discrepantes (outliers), assim como a distância dos valores extremos em
relação à maioria dos dados. Essa ferramenta resume cinco medidas descritivas de um conjunto
de dados, incluindo: o valor mínimo, o primeiro quartil, a mediana, o terceiro quartil e o valor
máximo.

Para construir um gráfico de boxplot, usamos uma haste horizontal ou vertical e uma caixa
retangular (box). O local em que a haste começa (da esquerda para a direita) indica o valor mínimo
e o ponto em que a haste termina indica o valor máximo.

A caixa retangular, localizada no meio da haste, em geral, possui três linhas. A primeira linha, na
extremidade esquerda da caixa, indica o primeiro quartil. A terceira linha, na extremidade direita,
indica o terceiro quartil. A linha do meio, no interior da caixa, indica o segundo quartil ou a
mediana. O segundo quartil pode estar entre o primeiro e o terceiro quartis, ou pode coincidir
com um, ou outro, ou ambos.

Além disso, há dois traços, chamados de whiskers (ou bigodes), ligando o valor mínimo à
extremidade esquerda da caixa e o valor máximo à extremidade direita da caixa. Cada um desses
traços comporta, aproximadamente, 25% dos dados. O restante, cerca de 50%, está distribuído
no interior da caixa.

Também podemos encontrar gráficos de box plot com pontos ou asteriscos marcando valores
discrepantes (outliers). Nesses casos, os whiskers não se estendem aos valores mínimo e máximo
do conjunto de dados, mas ficam limitados a um comprimento máximo de 1,5 × 𝐷𝐼𝑄, em que 𝑫𝑰𝑸
é a distância interquartílica.

A distância interquartílica (ou amplitude interquartílica, ou intervalo interquartílico) é calculada
pela fórmula:

        Receita Federal (Analista Tributário) Estatística                                        67
        www.estrategiaconcursos.com.br                                                           160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                  𝑫𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏

Dessa forma, valores menores que 𝑸𝟏 − 𝟏, 𝟓 × 𝑫𝑰𝑸 ou maiores que 𝑸𝟑 + 𝟏, 𝟓 × 𝑫𝑰𝑸 são
considerados VALORES DISCREPANTES (OUTLIERS) e representados por PONTOS ou
ASTERISCOS.

É importante salientarmos que a fórmula da distância interquartílica se parece muito com a do
desvio quartílico (ou amplitude semi-interquartílica), podendo ser facilmente confundida. O desvio
quartílico é calculado pela expressão apresentada a seguir:
                                                            𝑸𝟑 − 𝑸𝟏
                                                   𝑫𝒒 =
                                                               𝟐
Essa medida será abordada de forma mais detalhada na aula de medidas de dispersão.

        Receita Federal (Analista Tributário) Estatística                                      68
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Vamos ver como representar um conjunto de dados em forma de box plot. Considere a seguinte
série, que elenca os pesos de um grupo de 40 alunos do Estratégia Concursos:


{58, 65, 66, 67, 68, 68, 68, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 71, 71, 72, 72, 73, 73, 74, 75,
75, 75, 75, 75, 76, 76, 77, 77, 78, 79, 79, 80, 87}.


Primeiro, vamos identificar as medidas descritivas desse conjunto:
a) valor mínimo:
                                                        𝑚í𝑛 = 58


b) primeiro quartil:
Determinando a posição de 𝑄1 :
                                                             1 × 40
                                                     𝑃𝑄1 =          = 10
                                                               4
Em seguida, verificamos o valor que está ocupando essa posição
                                                           𝑄1 = 69


c) mediana:
Como o conjunto é formado por um número par de elementos, o segundo quartil (mediana) será
calculado como a média aritmética dos termos centrais. Os termos centrais ocupam as posições 20
e 21, então, calculando a média aritmética, descobrimos que o segundo quartil vale:
                          𝑥𝑛 + 𝑥𝑛+1             𝑥40 + 𝑥40+1
                            2        2           2           2       𝑥20 + 𝑥21 71 + 71
                   𝑄2 =                     =                    =            =        = 71
                                 2                     2                 2        2


d) terceiro quartil:
Determinando a posição de 𝑄3 :

        Receita Federal (Analista Tributário) Estatística                                                69
        www.estrategiaconcursos.com.br                                                                   160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                            3 × 40
                                                 𝑃𝑄3 =             = 30
                                                              4
Em seguida, verificamos o valor que está ocupando essa posição
                                                        𝑄3 = 75


e) valor máximo:
                                                      𝑚á𝑥 = 87


f) distância interquartílica:
                                         𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 75 − 69 = 6


g) limite inferior para detecção de outliers:
                                     𝑄1 − 1,5 × 𝐷𝐼𝑄 = 69 − 1,5 × 6 = 60


h) limite superior para detecção de outliers:
                                     𝑄3 + 1,5 × 𝐷𝐼𝑄 = 75 + 1,5 × 6 = 84


Agora, podemos reunir essas informações em um gráfico de box plot. Reparem que o valor mínimo
está localizado em 65, porque esse é o MENOR VALOR do conjunto de dados IGUAL OU SUPERIOR
ao limite inferior para detecção de outliers (60). De igual modo, notem que o valor máximo está
localizado em 80, porque esse é o MAIOR VALOR do conjunto de dados IGUAL OU INFERIOR ao
limite superior para detecção de outliers (84). Vejam também que os valores abaixo de 60 e acima
de 84 são considerados discrepantes, sendo sinalizados por pontos.

Agora, vamos analisar uma segunda série de dados, que representa os pesos de um grupo de 40
alunas do Estratégia Concursos.


        Receita Federal (Analista Tributário) Estatística                                    70
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

{59, 60, 61, 62, 62, 63, 64, 64, 64, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66, 66, 66, 66, 66, 66, 66, 67,
67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 69, 69}


Vamos identificar as medidas descritivas desse conjunto:
a) valor mínimo:
                                                        𝑚í𝑛 = 59


b) primeiro quartil:
Determinando a posição de 𝑄1 :
                                                             1 × 40
                                                     𝑃𝑄1 =          = 10
                                                               4
Em seguida, verificamos o valor que está ocupando essa posição
                                                           𝑄1 = 65


c) mediana:
Como o conjunto é formado por um número par de elementos, o segundo quartil (mediana) será
calculado como a média aritmética dos termos centrais. Os termos centrais ocupam as posições 20
e 21, então, calculando a média aritmética, descobrimos que o segundo quartil vale:
                          𝑥𝑛 + 𝑥𝑛+1             𝑥40 + 𝑥40+1
                            2        2           2           2       𝑥20 + 𝑥21 66 + 66
                   𝑄2 =                     =                    =            =        = 66
                                 2                     2                 2        2


d) terceiro quartil:
Determinando a posição de 𝑄3 :
                                                             3 × 40
                                                     𝑃𝑄3 =          = 30
                                                               4
Em seguida, verificamos o valor que está ocupando essa posição
                                                           𝑄3 = 67


e) valor máximo:
                                                        𝑚á𝑥 = 69


        Receita Federal (Analista Tributário) Estatística                                                71
        www.estrategiaconcursos.com.br                                                                   160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

f) distância interquartílica:
                                         𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 67 − 65 = 2


g) limite inferior para detecção de outliers:
                                     𝑄1 − 1,5 × 𝐷𝐼𝑄 = 65 − 1,5 × 2 = 62


h) limite superior para detecção de outliers:
                                     𝑄3 + 1,5 × 𝐷𝐼𝑄 = 67 + 1,5 × 2 = 70


Nesse ponto, podemos reunir essas informações em um segundo gráfico de box plot. Reparem que
o valor mínimo está localizado em 62, porque esse é o MENOR VALOR do conjunto de dados IGUAL
OU SUPERIOR ao limite inferior para detecção de outliers (62). De igual modo, notem que o valor
máximo está localizado em 69, porque esse é o MAIOR VALOR do conjunto de dados IGUAL OU
INFERIOR ao limite superior para detecção de outliers (70). Vejam também que os valores abaixo
de 62 são considerados discrepantes, sendo sinalizados por pontos.

Podemos, também, construir um único gráfico de box plot reunindo duas ou mais distribuições, o
que torna o processo de comparação mais simples e visual.

        Receita Federal (Analista Tributário) Estatística                                   72
        www.estrategiaconcursos.com.br                                                      160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Por fim, gostaria de chamar atenção para um detalhe importante. A depender do conjunto de dados,
teremos valores iguais para máximos, mínimos, primeiro quartil, mediana e terceiro quartil. Nesse
caso, o aspecto visual do box plot sofrerá alterações.
Por exemplo, considere a distribuição a seguir, em que a mediana e o terceiro quartil são iguais:

                              𝒙𝟏 𝒙𝟐 𝒙𝟑 𝒙𝟒 𝒙𝟓 𝒙𝟔 𝒙𝟕 𝒙𝟖 𝒙𝟗 𝒙𝟏𝟎 𝒙𝟏𝟏

                               1    1     1     1       6   6       6   6       6   6   8

a) valor mínimo: 1;
b) primeiro quartil:
                    𝑃𝑜𝑠𝑖çã𝑜: 1 × (11/4) = 2,75 ⟶ 𝑉𝑎𝑙𝑜𝑟 𝑚𝑎𝑖𝑠 𝑝𝑟ó𝑥𝑖𝑚𝑜: 𝑥3 = 1
c) segundo quartil (mediana):
Como o número de elementos do conjunto é ímpar, o segundo quartil (mediana) coincidirá com o
termo central da série. Assim, calculando a posição da mediana teremos:
                                         𝑄2 = 𝑥𝑛+1 = 𝑥11+1 = 𝑥12 = 𝑥6
                                                    2           2           2

Portanto, o segundo quartil (mediana) é igual a 𝑥6 = 6
d) terceiro quartil:
                    𝑃𝑜𝑠𝑖çã𝑜: 3 × (11/4) = 8,25 ⟶ 𝑉𝑎𝑙𝑜𝑟 𝑚𝑎𝑖𝑠 𝑝𝑟ó𝑥𝑖𝑚𝑜: 𝑥8 = 6
e) valor máximo: 8


Nessa situação, a caixa retangular não exibirá três linhas em seu interior, pois a linha da mediana irá
se sobrepor a do quartil superior. Além disso, também não haverá um traço ligando o valor mínimo
ao quartil inferior, vez que ambos terão a mesma magnitude. O gráfico ficará assim:

        Receita Federal (Analista Tributário) Estatística                                           73
        www.estrategiaconcursos.com.br                                                              160

                                      


---

Equipe Exatas Estratégia Concursos
Aula 02

      Receita Federal (Analista Tributário) Estatística                  74
      www.estrategiaconcursos.com.br                                     160

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 02

(CESPE/TJ-PA/2020)

Considerando que o desenho esquemático (boxplot) antecedente se refere a uma variável
quantitativa X, assinale a opção correta.
a) O intervalo interquartil é igual a 65.
b) Metade da distribuição da variável X se encontra entre os valores 20 e 40.
c) Os valores da variável X que se encontram no intervalo [5;10] representam 5% da distribuição
de X.
d) A mediana de X é igual a 25.
e) O primeiro quartil da distribuição de X é igual a 10.


Comentários:


Analisando cada uma das alternativas:
   • Letra A: Errada. O intervalo interquartil vale 𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 40 − 10 = 30.
    • Letra B: Errada. O diagrama mostra que a mediana ocorre em 20, logo, a metade da
distribuição está entre 20 e 70.
   • Letra C: Errada. O diagrama é distribuído em 4 quartis, 4 partes com a mesma quantidade
de valores, cada quartil representando 25% das observações, sendo o primeiro quartil
representado pelo intervalo [5;10].

        Receita Federal (Analista Tributário) Estatística                                   75
        www.estrategiaconcursos.com.br                                                      160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   • Letra D: Errada. O diagrama mostra que a mediana vale 20.
    • Letra E: Correta. O diagrama mostra que o primeiro quartil vale 10, ocupando o intervalo
[5;10].
Gabarito: E.


(CESPE/IPHAN/2018) Julgue o item subsequente, referente à análise exploratória de dados.
O BOXPLOT representa os dados em um retângulo construído com o primeiro e o segundo quartil,
fornecendo informação sobre valores médios.


Comentários:


O boxplot oferece informações sobre os quartis (1.º, 2.º e 3.º), o limite mínimo, o limite máximo e
os outliers (valores discrepantes). O 2.º quartil coincide com o valor da mediana. Portanto, a
questão erra ao afirmar que as informações são sobre os valores médios.
Gabarito: Errado.


(FGV/MPE-BA/2017) Em uma amostra desconfia-se de que três valores sejam, na verdade,
“ outliers” e que deveriam ser descartados. Para tal avaliação o estatístico dispõe apenas dos
valores dos 1º e 3º quartil da distribuição. Os números são os seguintes:
𝑸𝟏 (𝑿) = 𝟐𝟏, 𝑸𝟑 (𝑿) = 𝟑𝟑, 𝑿𝟏 = 𝟓𝟖, 𝑿𝟐 = 𝟐 e 𝑿𝟑 = 𝟒𝟑
Onde 𝑸𝒊𝒔 são os quartis e os 𝑿𝒊𝒔 os valores em análise.
Assim, é correto afirmar que:
a) Todos os valores são “outliers”;
b) Os valores 𝑋1 e 𝑋3 são “outliers”;
c) Nenhum dos valores é “outliers”;
d) Apenas o valor 𝑋2 é “outlier”;
e) Os valores 𝑋1 e 𝑋2 são “outliers”.


Comentários:


Para resolvermos a questão, precisamos calcular os limites inferior e superior da amostra. Assim:
                                            𝑙𝑖𝑛𝑓 = 𝑄1 − 1,5 × (𝑄3 − 𝑄1 )
                                            𝑙𝑖𝑛𝑓 = 21 − 1,5 × (33 − 21)


        Receita Federal (Analista Tributário) Estatística                                       76
        www.estrategiaconcursos.com.br                                                          160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                 𝑙𝑖𝑛𝑓 = 21 − 18 = 3


                                            𝑙𝑠𝑢𝑝 = 𝑄3 + 1,5 × (𝑄3 − 𝑄1 )
                                            𝑙𝑠𝑢𝑝 = 33 + 1,5 × (33 − 21)
                                                𝑙𝑠𝑢𝑝 = 33 + 18 = 51


Como 2 < 3 e 58 > 51, então podemos afirmar que os valores 𝑋1 e 𝑋2 são outliers.
Gabarito: E.


(FCC/TRT 3ª Região/2015) Seja uma representação gráfica de dados de acordo com o desenho
esquemático abaixo (box-plot) que foi preparado para comparar todos os salários dos funcionários
do sexo masculino (Grupo I) com todos os salários dos funcionários do sexo feminino (Grupo II)
lotados em um órgão público.

Neste desenho esquemático
a) O número de elementos do Grupo I é superior ao número de elementos do Grupo II.
b) O módulo da diferença entre as medianas dos 2 grupos é igual a 25% do menor salário deste
órgão público.
c) Mais da metade dos elementos do Grupo I possui um salário inferior a R$ 5.000,00 ou superior
a R$ 10.000,00.
d) O valor do menor salário do Grupo II corresponde a 37,5% do valor da mediana do Grupo I.
e) A diferença interquartil do Grupo I é superior à diferença interquartil do Grupo II.

        Receita Federal (Analista Tributário) Estatística                                     77
        www.estrategiaconcursos.com.br                                                       160

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 02

Comentários:


Vamos analisar cada uma das alternativas:
   • Letra A: Errada. O diagrama não mostra a quantidade de elementos de cada grupo,
portanto, não podemos afirmar que o Grupo I tem mais elementos que o Grupo II.
    • Letra B: Errada. O diagrama mostra que as medianas valem 8 e 7 para cada grupo, portanto,
a diferença entre elas é igual a 1. Podemos observar também que o menor salário é 2. Logo, a
diferença entre as medianas corresponde a 50% do menor salário.
   • Letra C: Errada. Se separarmos o Grupo I em quartis, cada quartil corresponderá a 25% do
total de elementos. Somando o último e o primeiro quartil teremos 50%, exatamente a metade,
dos elementos. Portanto, não podemos afirmar que mais da metade dos elementos do Grupo I
possui um salário inferior a R$ 5.000,00 ou superior a R$ 10.000,00.
   • Letra D: Correta. O menor salário do Grupo II vale 3. A mediana do Grupo I vale 8. Então,
3
  = 0,375 = 37,5%.
8

   • Letra E: Errada. Para o primeiro grupo 𝑄3 = 10, 𝑄1 = 5 → 𝑄3 − 𝑄1 = 10 − 5 = 5 para o
segundo grupo 𝑄3 = 9 , 𝑄1 = 4 → 𝑄3 − 𝑄1 = 9 − 4 = 5. Portanto, as distâncias são iguais.
Gabarito: D.

          Receita Federal (Analista Tributário) Estatística                                 78
          www.estrategiaconcursos.com.br                                                    160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                            RESUMO DA AULA

MEDIDAS SEPARATRIZES

As separatrizes são medidas que dividem (ou separam) uma série ordenada em duas ou mais
partes, cada uma contendo a mesma quantidade de elementos. Nesse caso, o nome da medida
separatriz é definido de acordo com a quantidade de partes em que a série é dividida:

  Divide uma série ordenada em duas           Dividem uma série ordenada em          Dividem uma série ordenada em
   partes iguais, cada uma contendo            quatro partes iguais, cada uma         cinco partes iguais, cada uma
     50% dos valores da sequência               contendo 25% dos valores da           contendo 20% dos valores da
                                                        sequência.                              sequência

                      Dividem uma série ordenada em dez            Dividem uma série ordenada em
                       partes iguais, cada uma contendo              cem partes iguais, cada uma
                         10% dos valores da sequência.               contendo 1% dos valores da
                                                                             sequência.

MEDIANA

A mediana é, simultaneamente, uma MEDIDA DE POSIÇÃO, de TENDÊNCIA CENTRAL e
SEPARATRIZ. Ela separa uma série de valores em duas partes de tamanhos iguais, cada uma
contendo o mesmo número de elementos. Sendo representada pelos símbolos 𝑴𝒅 ou, em menor
            ̃.
frequência, 𝒙

Mediana para dados não-agrupados.

A mediana é o elemento que ocupa a POSIÇÃO CENTRAL de uma série de observações ordenada
segundo suas grandezas. Para estabelecer que a mediana de um conjunto composto por 𝑛
elementos ordenados de forma crescente ou decrescente temos:

a) se 𝑛 for ímpar: 𝑴𝒅 = 𝒙𝒏+𝟏
                                     𝟐
                           𝒙𝒏 + 𝒙𝒏+𝟏
                             𝟐       𝟐
b) se 𝑛 for par: 𝑴𝒅 =
                                 𝟐

        Receita Federal (Analista Tributário) Estatística                                                             79
        www.estrategiaconcursos.com.br                                                                                160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Mediana para dados agrupados sem intervalos de classe

A mediana é um valor que dividirá a distribuição de frequências em duas partes contendo o mesmo
número de elementos. Para estabelecer que a mediana de uma tabela de frequências composta por
um total de 𝑛 elementos:

a) se 𝑛 for ímpar: 𝑴𝒅 = 𝒙𝒏+𝟏
                                     𝟐


                           𝒙𝒏 + 𝒙𝒏+𝟏
                             𝟐       𝟐
b) se 𝑛 for par: 𝑴𝒅 =
                                 𝟐

Mediana para dados agrupados em classes

I - Para calcular a mediana de dados que estão agrupados por intervalo de classes, identificamos a
classe mediana, que corresponde à frequência acumulada imediatamente igual ou superior à
metade da frequência total, ou seja, metade da soma das frequências simples, ∑ 𝒇𝒊 ⁄𝟐.

II - Conhecendo a classe mediana, podemos aplicar a fórmula da mediana:
                                                       ∑𝒇
                                                      ( 𝟐 𝒊 ) − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                         𝑴𝒅 = 𝒍𝒊𝒏𝒇 + [                  ]×𝒉
                                                              𝒇𝒊

III - método de interpolação linear consiste em utilizar valores conhecidos para estimar valores
desconhecidos de forma linear, isto é, por meio de uma reta.

Propriedades da Mediana

        1º Propriedade
        • Somando-se (ou subtraindo-se) uma constante 𝒄 a todos os valores de uma variável, a
          mediana do conjunto fica aumentada (ou diminuída) dessa constante.

        Receita Federal (Analista Tributário) Estatística                                       80
        www.estrategiaconcursos.com.br                                                          160

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 02

        2º Propriedade
        • Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante
          𝒄, a mediana do conjunto fica multiplicada (ou dividida) por esta constante.


        3º Propriedade
        • A soma dos desvios absolutos de uma sequência de números, em relação a um número
          𝒂, é mínima quando 𝒂 é a mediana dos números.

QUARTIL, DECIL E PERCENTIL

O nome da medida separatriz é atribuído de acordo com a quantidade de partes em que a série
é dividida:

Quartis

                                                                 𝑸𝟏 : o primeiro quartil corresponde à separação dos
                                                                         primeiros 25% de elementos da série.

                                                                 𝑸𝟐 : o segundo quartil corresponde à separação de
     Valores de uma série que a dividem em QUATRO               metade dos elementos da série, coincidindo com a
     PARTES IGUAIS, isto é, quatro partes contendo o                            mediana (𝑸𝟐 = 𝑴𝒅 )
          mesmo número de elementos (25%).
                                                                 𝑸𝟑 : o terceiro quartil corresponde à separação dos
                                                                primeiros 75% de elementos da série, ou dos últimos
                                                                              25% de elementos da série

Quartil para dados não-agrupados

O cálculo do quartil para dados não-agrupados será realizado por meio de três etapas:

    •   1.a etapa: determinar a posição do quartil, por meio da expressão:
                                                       𝒌×𝒏
                                             𝑷𝑸𝒌 =              (𝒌 = 𝟏, 𝟐, 𝟑);
                                                        𝟒
    •   2.a etapa: identificar a posição mais próxima do rol;

        Receita Federal (Analista Tributário) Estatística                                                              81
        www.estrategiaconcursos.com.br                                                                                 160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

   •   3.a etapa: verificar o valor que está ocupando essa posição.

Quartil para dados agrupados sem intervalos de classe

O cálculo do quartil para dados agrupados sem intervalos de classe será realizado por meio de
três etapas:

   •   1.a etapa: determinar a posição do quartil, por meio da expressão:
                                                     𝒌 × ∑ 𝒇𝒊
                                           𝑷 𝑸𝒌 =                          (𝒌 = 𝟏, 𝟐, 𝟑)
                                                        𝟒  ==219a34==

   •   2.a etapa: identificar a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;
   •   3.a etapa: verificar o valor da variável que corresponde a essa posição.

Quartil para dados agrupados em classes

O cálculo do quartil para dados agrupados em classes será realizado por meio das seguintes
etapas:

   •   1.a etapa: determinar a posição do quartil, por meio da expressão:
                                                𝒌 × ∑ 𝒇𝒊
                                      𝑷𝑸𝒌 =                             (𝒌 = 𝟏, 𝟐, 𝟑)
                                                   𝟒
   •   2.a etapa: identificar a posição do quartil na coluna de frequências acumuladas, isto é, a
       frequência acumulada imediatamente igual ou superior à posição do quartil;
   •   3.a etapa: verificar as informações referentes à classe correspondente a essa posição; e
   •   4.ª etapa: calcular o valor do quartil por meio da fórmula apresentada a seguir, que
       consiste em uma variação da fórmula da mediana para dados agrupados em classes:
                                             𝒌 × ∑ 𝒇𝒊
                                                      − 𝒇𝒂𝒄 𝒂𝒏𝒕
                               𝑸𝒌 = 𝒍𝒊𝒏𝒇 + [    𝟒               ] × 𝒉𝑸𝒌
                                        𝑸𝒌          𝒇𝑸 𝒌

       Receita Federal (Analista Tributário) Estatística                                          82
       www.estrategiaconcursos.com.br                                                             160

                                     


---

 Equipe Exatas Estratégia Concursos
 Aula 02

Decis

                                                                   𝑫𝟏 : o primeiro decil corresponde à separação dos
                                                                   primeiros 10% de elementos da série;
                                                                   𝑫𝟓 : o quinto decil corresponde à separação de
                                                                   metade dos elementos da série, coincidindo
  Valores de uma série que a dividem em DEZ PARTES
 IGUAIS, isto é, dez partes contendo o mesmo número                com a mediana (𝑫𝟓 = 𝑴𝒅 );
                  de elementos (10%).                              𝑫𝟗 : o nono decil corresponde à separação dos
                                                                   primeiros 90% de elementos da série, ou dos
                                                                   últimos 10% de elementos da série.

Decil para dados não-agrupados

O cálculo do decil para dados não-agrupados será realizado por meio de três etapas:

   •    1.a etapa: determinar a posição do decil, por meio da expressão:
                                                     𝒌×𝒏
                                           𝑷𝑫𝒌 =              (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗);
                                                      𝟏𝟎
   •    2.a etapa: identificar a posição mais próxima do rol;
   •    3.a etapa: verificar o valor que está ocupando essa posição.

Decil para dados agrupados sem intervalos de classe.

O cálculo do decil para dados agrupados sem intervalos de classe será realizado por meio das
seguintes etapas:

   •    1.a etapa: determinamos a posição do decil, por meio da expressão:
                                                   𝒌 × ∑ 𝒇𝒊
                                         𝑷𝑫𝒌 =                  (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗)
                                                      𝟏𝟎
   •    2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a
        frequência acumulada imediatamente igual ou superior à posição do decil;
   •    3.a etapa: verificamos o valor da variável que corresponde a essa posição.

Decil para dados agrupados em classes

        Receita Federal (Analista Tributário) Estatística                                                              83
        www.estrategiaconcursos.com.br                                                                                 160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

O cálculo do decil para dados agrupados em classes será realizado por meio das seguintes
etapas:

    •   1.a etapa: determinamos a posição do decil, por meio da expressão:
                                               𝒌 × ∑ 𝒇𝒊
                                     𝑷𝑫𝒌 =                  (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗)
                                                 𝟏𝟎
    •   2.a etapa: identificamos a posição do decil na coluna de frequências acumuladas, isto é, a
        frequência acumulada imediatamente igual ou superior à posição do decil;
    •   3.a etapa: verificamos as informações referentes à classe correspondente a essa posição;
        e
    •   4.ª etapa: calculamos o valor do decil por meio da fórmula apresentada a seguir, que
        consiste em uma variação da fórmula da mediana para dados agrupados em classes:
                                             𝒌 × ∑ 𝒇𝒊
                                                      − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                𝑫𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟏𝟎                ] × 𝒉𝑫𝒌
                                         𝑫𝒌        𝒇𝑫𝒌

Percentis

                                                               𝑷𝟏 : o primeiro percentil corresponde à separação do
                                                                         primeiro 1% de elementos da série;

                                                                  𝑷𝟓𝟎 : o quinquagésimo percentil corresponde à
  Valores de uma série que a dividem em CEM PARTES                separação de metade dos elementos da série,
 IGUAIS, isto é, cem partes contendo o mesmo número                coincidindo com a mediana (𝑷𝟓𝟎 = 𝑴𝒅 );
                   de elementos (1%)
                                                                 𝑷𝟗𝟗 : o nonagésimo nono percentil corresponde à
                                                               separação dos primeiros 99% de elementos da série,
                                                                       ou do último 1% de elementos da série.

Percentil para dados não-agrupados

O cálculo do Percentil para dados não-agrupados será realizado por meio de três etapas:

    •   1.a etapa: determinar a posição do percentil, por meio da expressão:
                                                     𝒌×𝒏
                                           𝑷𝑷𝒌 =         (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗);
                                                     𝟏𝟎𝟎

        Receita Federal (Analista Tributário) Estatística                                                             84
        www.estrategiaconcursos.com.br                                                                                160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

   •   2.a etapa: identificar a posição mais próxima do rol;
   •   3.a etapa: verificar o valor que está ocupando essa posição.

Percentil para dados agrupados sem intervalos de classe

O cálculo do percentil para dados agrupados sem intervalos de classe será realizado por meio
das seguintes etapas:

   •   1.a etapa: determinar a posição do percentil, por meio da expressão:
                                                 𝒌 × ∑ 𝒇𝒊
                                       𝑷𝑷𝒌 =                  (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗)
                                                   𝟏𝟎𝟎
   •   2.a etapa: identificar a posição do percentil na coluna de frequências acumuladas, isto é,
       a frequência acumulada imediatamente igual ou superior à posição do percentil;
   •   3.a etapa: verificar o valor da variável que corresponde a essa posição.

Percentil para dados agrupados em classes

O cálculo do percentil para dados agrupados em classes será realizado por meio das seguintes
etapas:

   •   1.a etapa: determinar a posição do percentil, por meio da expressão:
                                             𝒌 × ∑ 𝒇𝒊
                                   𝑷𝑷𝒌 =                   (𝒌 = 𝟏, 𝟐, ⋯ , 𝟗𝟗)
                                               𝟏𝟎𝟎
   •   2.a etapa: identificar a posição do percentil na coluna de frequências acumuladas, isto é,
       a frequência acumulada imediatamente igual ou superior à posição do percentil;
   •   3.a etapa: verificar as informações referentes à classe correspondente a essa posição; e
   •   4.ª etapa: calculamos o valor do percentil por meio da fórmula apresentada a seguir, que
       consiste em uma variação da fórmula da mediana para dados agrupados em classes:

                                                   𝒌 × ∑ 𝒇𝒊
                                                            − 𝒇𝒂𝒄 𝒂𝒏𝒕
                                      𝑷𝒌 = 𝒍𝒊𝒏𝒇 + [ 𝟏𝟎𝟎               ] × 𝒉𝑷𝒌
                                               𝑷𝒌         𝒇𝑷𝒌

       Receita Federal (Analista Tributário) Estatística                                          85
       www.estrategiaconcursos.com.br                                                             160

                                     


---

Equipe Exatas Estratégia Concursos
Aula 02

      Receita Federal (Analista Tributário) Estatística                  86
      www.estrategiaconcursos.com.br                                     160

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 02

BOX PLOT

Um boxplot ou box-and-whisker plot é uma ferramenta gráfica frequentemente utilizada na análise
exploratória de dados que permite visualizar a distribuição dos dados e os valores discrepantes
(outliers). Essa ferramenta resume cinco medidas descritivas de um conjunto de dados, incluindo:
o valor mínimo, o primeiro quartil, a mediana, o terceiro quartil e o valor máximo.

A distância interquartílica (ou amplitude interquartílica, ou intervalo interquartílico) é calculada
pela fórmula:
                                                  𝑫𝑰𝑸 = 𝑸𝟑 − 𝑸𝟏

        Receita Federal (Analista Tributário) Estatística                                        87
        www.estrategiaconcursos.com.br                                                           160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                           QUESTÕES COMENTADAS – FGV

Mediana

1. (FGV/TCE-PA/2024) O professor deu as seguintes notas numa prova de matemática de uma pequena
turma de 7 alunos:

                                                      Aluno Nota
                                                        1    6,0
                                                        2    6,5
                                                        3    7,8
                                                        4    4,2
                                                        5    6,6
                                                        6   10,0
                                                        7    5,5
A mediana dessas notas foi igual a
a) 4,2
b) 5,5
c) 6,5
d) 6,6
e) 6,7


Comentários:
Para calcular a mediana, primeiro precisamos organizar as notas em ordem crescente e depois encontrar a
nota que está no meio dessa lista.
Organizando as notas em ordem crescente, temos:
                             4,2 − 5,5 − 6,0 −               6,5
                                                             ⏟        − 6,6 − 7,8 − 10,0
                                                      𝑇𝑒𝑟𝑚𝑜 𝐶𝑒𝑛𝑡𝑟𝑎𝑙

Como há 7 alunos, a mediana será a nota que ocupa a posição central da lista ordenada. Ou seja, a 4ª nota.
Portanto, a mediana das notas é 6,5.
Gabarito: C.


2. (FGV/TJ-AP/2024) Segundo o ditado, “se alguém está com a cabeça no gelo e os pés no forno, não se
pode dizer que está bem”. Para que a conclusão seja que a pessoa está bem, deve-se aferir a temperatura

         Receita Federal (Analista Tributário) Estatística                                             88
         www.estrategiaconcursos.com.br                                                                160

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 02

da pessoa na cabeça (gelo), nos pés (forno) e também nas axilas (fora do gelo e do forno), pelo seguinte
estimador:
a) média aritmética;
b) média geométrica;
c) média harmônica;
d) mediana;
e) moda.


Comentários:
A expressão é uma metáfora que ilustra a falácia da média. A média, por si só, pode fornecer uma visão
incompleta da realidade, especialmente quando se trata de conjuntos de dados com distribuições
assimétricas.
A cabeça no gelo (temperatura muito baixa) e os pés no forno (temperatura muito alta) representam valores
extremos que distorcem a média, levando a uma visão falsa da situação.
A mediana pode ser uma alternativa mais adequada à média quando se trata de conjuntos de dados com
distribuições assimétricas. A mediana é o valor que divide o conjunto de dados em dois grupos com o mesmo
número de elementos.
A mediana é menos sensível à presença de valores extremos. Ela não é influenciada por valores muito altos
ou muito baixos, o que a torna mais robusta que a média em distribuições assimétricas.
Gabarito: D.


3. (FGV/RFB/2023) Uma pequena amostra de 11 salários (medidos em quantidades de salários mínimos)
de trabalhadores de terceiro setor mostrou os seguintes resultados:
                                 2,0 2,3 2,7 3,4 3,9 2,8 2,3 1,8 1,5 3,3 1,5
A diferença, em quantidade de salários mínimos, entre os valores da média e da mediana desses dados é
igual a
a) 0,0.
b) 0,1.
c) 0,2.
d) 0,3.
e) 0,4.


Comentários:


          Receita Federal (Analista Tributário) Estatística                                           89
          www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A mediana é o termo central da amostra. Ela separa uma série de valores em duas partes de tamanhos iguais,
cada uma contendo o mesmo número de elementos. Para calcularmos a mediana, primeiramente, vamos
precisar ordenar os dados. Assim, reescrevendo os dados em ordem crescente, temos:
                                1,5 1,5 1,8 2,0 2,3            2,3
                                                               ⏟         2,7 2,8 3,3 3,4 3,9
                                                         𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

Portanto, a mediana é igual a 2,3.
Agora, vamos calcular a média. A média é definida pelo quociente entre a soma dos valores de um
determinado conjunto e a quantidade de valores nele existentes.
                                                                  𝑠𝑜𝑚𝑎
                                                          𝑥̅ =
                                                                    𝑛
                              2,0 + 2,3 + 2,7 + 3,4 + 3,9 + 2,8 + 2,3 + 1,8 + 1,5 + 3,3 + 1,5
                       𝑥̅ =
                                                            11
                                                                  27,5
                                                           𝑥̅ =
                                                                   11
                                                           𝑥̅ = 2,5
Fazendo a diferença entre a média e a mediana, temos:
                                                𝑥̅ − 𝑀𝑑 = 2,5 − 2,3 = 0,2
Gabarito: C.


4. (FGV/SEF-MG/2023) Considere a lista de 200 números inteiros a seguir:
                                           𝟏, 𝟐, 𝟑, ⋯ , 𝟏𝟎𝟎, 𝟏𝟐 , 𝟐𝟐 , 𝟑𝟐 , ⋯ , 𝟏𝟎𝟎𝟐 .
A mediana dessa lista de números é
a) 50,5.
b) 72,5.
c) 80,5.
d) 91,5.
e) 100.


Comentários:
A mediana caracteriza a posição central de uma série de valores. Ela separa uma série de valores em duas
partes de tamanhos iguais, cada uma contendo o mesmo número de elementos.
No enunciado da questão, temos a informação de que o conjunto é formado por 200 termos. Quando o
                                                                                                        𝑛
número de termos é par, dois termos ocupam as posições centrais, sendo que o primeiro ocupa a posição 2
                                                                               𝑛
e o segundo ocupa a posição imediatamente seguinte, ou seja, 2 + 1. Nessa situação, por convenção, a


           Receita Federal (Analista Tributário) Estatística                                           90
           www.estrategiaconcursos.com.br                                                              160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

mediana será a média aritmética entre os termos centrais. Assim, a mediana será dada pela média aritmética
dos termos na posição 100 e 101.
É importante observarmos que os dados precisam estar em ordem crescente para que a mediana seja
determinada. Então, se organizarmos a sequência 1,2,3, … ,100, 12 , 22 , 32 , … , 1002 em ordem crescente,
ficamos com:
                                           1, 12 , 2,3, 22 , … ,100, … , 1002 .
Reparem que 12 , 22 , 32 , … , 92 resultam em valores menores que 100. Assim, entre 1 e 100 teremos 9 valores
resultantes dessas potências.
Agora, precisamos encontrar a posição do número 92 = 81, pois essa é a última potência de 2 menor que
100. Para identificarmos a posição ocupada pelo termo 81, basta somarmos os 9 valores que entraram entre
1 e 100. Logo, 81 + 9 = 90. Então, o termo 81, ou seja, 92 , está na posição 90.
Assim, podemos identificar os termos que ocupam as posições 100 e 101:

                                              Termos          Posição

                                                 81              90

                                                 82              91

                                                 83              92

                                                 84              93

                                                 85              94

                                                 86              95

                                                 87              96

                                                 88              97

                                                 89              98

                                                 90              99

                                                 91             100

                                                 92             101

Portanto, os termos que ocupam as posições 100 e 101 são, respectivamente, os valores 91 e 92. Para
determinarmos a mediana, basta calcularmos a média aritmética entre esses dois valores:

        Receita Federal (Analista Tributário) Estatística                                                 91
        www.estrategiaconcursos.com.br                                                                   160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                     91 + 92 183
                                           𝑀𝑑 =             =    = 91,5
                                                        2     2
Ou seja, a mediana é igual a 91,5.
Gabarito: D.


5. (FGV/TCE ES/2023) A seguinte amostra de acidentes de trânsito em um mês foi observada:
                                       9, 15, 15, 11, 13, 16, 15, 13, 16, 18, 9.
Nesse caso, é correto afirmar, a respeito das principais medidas de tendência central desse conjunto, que:
a) a média é igual a 15;
b) o valor da média é menor do que o da mediana;
c) o valor da mediana é duas unidades maior do que o da média;
d) se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar;
e) se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
permanecerão iguais.


Comentários:
Vamos analisar cada uma das alternativas.
Letra A - a média é igual a 15. Calculando a média temos:
                𝑠𝑜𝑚𝑎 9 + 15 + 15 + 11 + 13 + 16 + 15 + 13 + 16 + 18 + 9 150
            𝑥̅ =      =                                                =    ≅ 13,63
                  𝑛                          11                          11
Portanto, a alternativa A está errada.
Letra B - o valor da média é menor do que o da mediana. Já calculamos a média na alternativa anterior,
então, vamos ao cálculo da mediana. Sabemos que a mediana é o termo central da amostra. Por conta disso,
precisamos ordenar os dados da amostra:
                                    9, 9, 11, 13, 13,       15
                                                            ⏟     , 15, 15, 16, 16, 18
                                                        𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Dessa forma, percebemos que o valor da média é menor que a mediana. Portanto, a alternativa está correta.
Letra C - o valor da mediana é duas unidades maior do que o da média. Já verificamos que a mediana é igual
a 15 e a média é aproximadamente igual a 13,63. Portanto, a alternativa C está errada.
Letra D - se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar. Vamos calcular:
                                 9, 9, 11, 13, 13,       15,
                                                         ⏟ 15          , 15, 16, 16, 18, 20
                                                     𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠

Nesse caso, a mediana será determinada pela média aritmética dos dois termos centrais:
                                                            15 + 15
                                                 𝑀𝑑 =               = 15
                                                               2


        Receita Federal (Analista Tributário) Estatística                                               92
        www.estrategiaconcursos.com.br                                                                  160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

calculando a nova média, temos:
                                             150 + 20
                                                 𝑥̅ =  ≅ 14,16
                                                 12
Logo, a diferença entre a média e a mediana deve ser menor. Portanto, a alternativa está errada.
Letra E - se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
permanecerão iguais.
Conforme calculado na alternativa anterior, o valor da média será alterado. Portanto, a alternativa está
errada.
Gabarito: B.


6. (FGV/CBM-AM/2022) A soma de 11 números inteiros estritamente positivos, não necessariamente
distintos, é 2022.
O maior valor que a mediana desses 11 números pode ter é
a) 335.
b) 336.
c) 337.
d) 338.
e) 339.


Comentários:
A mediana é o termo central da amostra. Ela divide o conjunto de dados em duas partes, separando os
valores inferiores à mediana dos valores superiores à mediana. Então, se a mediana é o termo central da
amostra, em um conjunto com 11 termos, ela será o 6º termo do conjunto de dados ordenados.
Então, se a soma desses 11 números é igual a 2022, para encontramos o valor da maior mediana basta
considerarmos que os cinco primeiros números são iguais a 1, menor valor inteiro e positivo inferior à
mediana. Vamos esquematizar para melhor compreensão:
                        1+1+1+1+1+
                        ⏟                           𝑀
                                                    ⏟𝑑        +⏟
                                                               𝑥7 + 𝑥8 + 𝑥9 + 𝑥10 + 𝑥11 = 2022
                         𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑖𝑛𝑓𝑒𝑟𝑖𝑜𝑟𝑒𝑠      𝑚𝑒𝑑𝑖𝑎𝑛𝑎            𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑠𝑢𝑝𝑒𝑟𝑖𝑜𝑟𝑒𝑠

Como não conhecemos o valor da mediana, e como também não sabemos quais são os valores dos demais
números, vamos considerar que todos possuem o mesmo valor, igual a 𝑥. Agora, basta resolvermos a
equação:
                                          5 + 𝑥 + 𝑥 + 𝑥 + 𝑥 + 𝑥 + 𝑥 = 2022
                                                      6𝑥 = 2022 − 5
                                                                2017
                                                         𝑥=
                                                                  6


          Receita Federal (Analista Tributário) Estatística                                          93
          www.estrategiaconcursos.com.br                                                             160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Vejam que essa divisão não é exata, portanto, restará uma unidade. Logo, temos que:
                                                            𝑥 = 336
Agora, podemos atribuir a sobra da divisão ao último termo da amostra, assim:
                     1 + 1 + 1 + 1 + 1 + 336
                     ⏟                   ⏟ +⏟336 + 336 + 336 + 336 + 337 = 2022
                       𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑖𝑛𝑓𝑒𝑟𝑖𝑜𝑟𝑒𝑠     𝑚𝑒𝑑𝑖𝑎𝑛𝑎               𝑣𝑎𝑙𝑜𝑟𝑒𝑠 𝑠𝑢𝑝𝑒𝑟𝑖𝑜𝑟𝑒𝑠

Logo, o maior valor da mediana é 336.
Gabarito: B.


7. (FGV/SEFAZ ES/2022) As notas de nove candidatos num certo exame foram:
                                             54, 48, 46, 51, 38, 50, 44, 58, 32.
A mediana dessas notas é igual a
a) 44.
b) 46.
c) 48.
d) 50.
e) 51.


Comentários:
A mediana divide uma série ordenada em duas partes iguais. Como temos 9 termos na amostra, a mediana
é determinada pelo termo central, isto é, o quinto termo da amostra. É importante observar que, para
encontrarmos a mediana, os dados devem estar ordenados. Assim, temos:
                                        32, 38, 44, 46,        𝟒𝟖
                                                               ⏟          , 50, 51, 54, 58
                                                          𝒕𝒆𝒓𝒎𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍

Portanto, a mediana é 48.
Gabarito: C.


8. (FGV/TCE-TO/2022) A seguinte amostra de idades foi observada: 30, 24, 26, 25, 24, 28, 26, 29, 30.
A mediana dessas idades é igual a:
a) 25,5;
b) 26,0;
c) 26,5;
d) 28,0;

           Receita Federal (Analista Tributário) Estatística                                           94
           www.estrategiaconcursos.com.br                                                              160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

e) 28,5.


Comentários:
Para determinarmos a mediana de um conjunto, precisamos inicialmente ordenar os dados. Como o
conjunto possui um número ímpar de elementos, a mediana coincidirá com o termo central da amostra. No
caso apresentado, temos um total de 9 elementos. Portanto, a mediana coincidirá com o quinto elemento
da série ordenada. Ordenando os dados, temos:
                                         24 24 25 26           26
                                                               ⏟         28 29 30 30
                                                         𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

Assim, a mediana da amostra é o elemento de valor igual a 26.
Gabarito: B.


9. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                          Valores de X          0    3     10   12

                                          Probabilidades 0,2 0,1 0,3 0,4

A média e a mediana de X são respectivamente iguais a
a) 8,1 e 10.
b) 8,1 e 3,0.
c) 8,5 e 6,5.
d) 8,1 e 6,5.
e) 8,5 e 10.


Comentários:
Para calcularmos a média, precisamos multiplicar todos os valores de X por suas respectivas probabilidades.
Assim, teremos:
                                       (0 × 0,2) + (3 × 0,1) + (10 × 0,3) + (12 × 0,4)
                                𝑋̅ =
                                                    0,2 + 0,1 + 0,3 + 0,4
                                                               8,1
                                                        𝑋̅ =       = 8,1
                                                                1
Agora, para determinarmos a mediana de uma distribuição, precisamos verificar em que momento as
frequências acumuladas atingem 50% da amostra. Vejam que a soma das probabilidades dos dois primeiros
valores de X já alcança 30%. Somando a probabilidade referente ao próximo valor, X=10, atingimos o valor
de 60%, ultrapassando o limite em questão. Então, podemos considerar que a mediana de X é igual a 10.


           Receita Federal (Analista Tributário) Estatística                                            95
           www.estrategiaconcursos.com.br                                                               160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Gabarito: A.


10. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de pesos aproximados, em kg, de homens
adultos:
67, 55, 102, 77, 88, 89, 100, 78, 69, 65, 65, 101, 98, 65, 68
A mediana desses pesos é
a) 76.
b) 77.
c) 77,5.
d) 78.
e) 78,5.


Comentários:
A mediana é o termo central de uma amostra ou distribuição de valores. Ela divide o conjunto em duas partes
contendo as mesmas quantidades de valores. Para encontrarmos a mediana, precisamos que os dados
estejam ordenados, como fizemos a seguir:
                           55, 65, 65, 65, 67, 68, 69,         77
                                                               ⏟    , 78, 88, 89, 98, 100, 101, 102
                                                         𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Veja que temos um conjunto com um número ímpar de elementos, portanto, a mediana será o termo central
da amostra, cuja posição pode ser encontrada por meio da seguinte fórmula:
                                                    𝑛 + 1 15 + 1
                                                         =       =8
                                                      2     2
Logo, a mediana corresponde ao 8º termo da amostra, representado pelo peso igual a 77.
Gabarito: B.


11. (FGV/TRT-PB/2022) Avalie se as seguintes afirmativas acerca da mediana de uma variável aleatória X
estão corretas:
I. Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.
II. A mediana é uma medida mais resistente a valores extremos do que a média.
III. Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.

           Receita Federal (Analista Tributário) Estatística                                            96
           www.estrategiaconcursos.com.br                                                               160

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.


Comentários:
Vamos analisar cada item:
Item I: Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.
Correto. Como sabemos, a mediana divide um conjunto em duas partes com o mesmo número de elementos.
Assim, como temos a mesma quantidade de elementos antes e depois da mediana, a probabilidade de X ser
maior que a mediana é de, no mínimo, 50%.


Item II: A mediana é uma medida mais resistente a valores extremos do que a média.
Correto. A mediana é representada pelo elemento que ocupa a posição central em um conjunto ordenado
de valores. Ela não se preocupa com os valores propriamente ditos, mas somente com a posição, por isso
não sofre influência de valores extremos. A média, por outro lado, sofre muita influência de valores
extremos, pois o cálculo da média requer que eles sejam considerados.


Item III: Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Incorreto. A assimetria é negativa quando a curva de frequência tem uma “cauda” mais longa à esquerda do
ponto que corresponde à frequência máxima:

                                                          ̅ < 𝑴𝒅 .
Nesse caso, o valor da média será menor que o da mediana, 𝒙
Gabarito: B.


12. (FGV/IMBEL/2021) Considere a lista de cinco números reais: 2, 9, 4, 10, x.
Sabe-se que a mediana desses números é igual à média deles.
A soma dos possíveis valores de x é:


            Receita Federal (Analista Tributário) Estatística                                           97
            www.estrategiaconcursos.com.br                                                              160

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 02

a) 22,5.
b) 21,25.
c) 20,75.
d) 19,5.
e) 17,5.


Comentários:
A mediana é o termo central da amostra. Ela divide os dados ordenados em duas partes iguais, de um lado
teremos valores inferiores à mediana e de outro lado teremos valores superiores à mediana.
No caso apresentado, como são 5 termos, a mediana ocupará a terceira posição do conjunto de dados.
                                                               ==219a34==

Ocorre que não sabemos o valor de 𝑥, portanto, temos 5 possibilidades para o termo que representa a
mediana. Ordenando os dados, temos:
                                                     2, 4,                  ⏟
                                                                            9   , 10, 𝑥
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 4,                  ⏟
                                                                            9   , 𝑥, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 4,                  ⏟
                                                                            𝑥   , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     2, 𝑥,                  ⏟
                                                                            4   , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

                                                     𝑥, 2,                  ⏟
                                                                            4   , 9, 10
                                                             𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Dos possíveis arranjos, observamos apenas 3 opções para a mediana: 4, 9 ou x.
A questão também nos informa que o valor da mediana é igual ao valor da média. Assim, calculando a média
para os dados apresentados, temos:
                                                  2 + 4 + 9 + 10 + 𝑥 25 + 𝑥
                                           𝑋̅ =                     =
                                                           5           5
Agora, considerando as possibilidades para a mediana, temos:
a) para uma mediana igual a 9:
                                                                            25 + 𝑥
                                                         9=
                                                                              5
                                                        25 + 𝑥 = 45
                                                        𝑥 = 45 − 25
                                                               𝑥 = 20
b) para uma mediana igual a x:

           Receita Federal (Analista Tributário) Estatística                                         98
           www.estrategiaconcursos.com.br                                                            160

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                                                25 + 𝑥
                                                        𝑥=
                                                                  5
                                                       5𝑥 = 25 + 𝑥
                                                            4𝑥 = 25
                                                            𝑥 = 6,25
c) para uma mediana igual a 4:
                                                                25 + 𝑥
                                                        4=
                                                                  5
                                                       25 + 𝑥 = 20
                                                       𝑥 = 20 − 25
                                                              𝑥 = −5
Logo, temos os possíveis valores de 𝑥:
                                                       20; 6,25; −5
Somando os valores, temos:
                                              20 + 6,25 + (−5) = 21,25
Gabarito: B.


13. (FGV/FunSaúde CE/2021) A mediana dos sete números 9, 2, 5, 3, 13, x, 5 é x.
A média desses números é
a) 5.
b) 5,5.
c) 6.
d) 6,5.
e) 7.


Comentários:
A mediana é o termo central da amostra. Ela divide o conjunto de dados em duas partes, separando os
valores inferiores à mediana dos valores superiores à mediana. Se a mediana é o termo central da amostra,
em um conjunto com 7 termos, a mediana será representada pelo 4º termo do conjunto de dados ordenados.
Ordenando os termos, temos:
                                                 2, 3, 5,      ⏟
                                                               𝑥      , 5, 9, 13
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

          Receita Federal (Analista Tributário) Estatística                                           99
          www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A mediana está entre dois números iguais, no caso, 5. Logo, a mediana também deve assumir o valor 5 no
conjunto. Então, teremos os seguintes dados:
                                                 2, 3, 5,     ⏟
                                                              5       , 5, 9, 13
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Agora, basta calcularmos a média:
                                           2 + 3 + 5 + 5 + 5 + 9 + 13 42
                                    𝑥̅ =                             =   =6
                                                       7               7
Logo, a média é igual a 6.
Gabarito: C.


14. (FGV/FunSaúde CE/2021) Sabe-se que x é maior do que 11 e que a diferença entre a média e a mediana
dos cinco números 2, x, 11, 16, 5 é igual a 2.
O valor de x é
a) 12.
b) 16.
c) 21.
d) 26.
e) 31.


Comentários:
A mediana é termo central do conjunto de dados. Vamos ordenar os dados para encontrarmos a mediana:
                                                   2, 5,      11
                                                              ⏟       , 𝑥, 16
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Calculando a média para os dados apresentados, temos:
                                                2 + 5 + 11 + 𝑥 + 16 34 + 𝑥
                                         𝑋̅ =                      =
                                                         5            5
Se a diferença entre a média e a mediana é igual a 2, então temos:
                                                    34 + 𝑥
                                                           − 11 = 2
                                                      5
                                                    34 + 𝑥
                                                           = 2 + 11
                                                      5
                                                    34 + 𝑥 = 13 × 5
                                                       34 + 𝑥 = 65
                                                       𝑥 = 65 − 34

         Receita Federal (Analista Tributário) Estatística                                         100
         www.estrategiaconcursos.com.br                                                            160

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                                              𝑥 = 31
Portanto, 𝑥 é igual a 31.
Gabarito: E.


15. (FGV/ALE-RO/2018) Sejam x, y e z, respectivamente, a média, a mediana e a moda dos sete valores 9,
10, 6, 5, 20, 9 e 4. É correto concluir que
a) x < y < z .
b) x < y = z
c) x = y < z
d) y < z = x
e) x = y = z


Comentários:
A média é calculada pela soma dos valores dividida pela quantidade de valores:
                                       9 + 10 + 6 + 5 + 20 + 9 + 4
                                        𝑥=                         =9
                                                    7
Agora, para calcular a mediana, precisamos organizar os números em ordem crescente:
                                               4, 5, 6,           9,
                                                                  ⏟        9, 10, 20
                                                          𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

A mediana é o termo que ocupa a posição central. Portanto,
                                                              𝑦=9
A moda é o termo que aparece em maior frequência. O número que aparece mais vezes é o 9, portanto:
                                                              𝑧=9
Assim, concluímos que:
                                                            𝑥=𝑦=𝑧
Gabarito: E.


16. (FGV/ALE-RO/2018) A tabela a seguir mostra o número de gols sofridos por um time de futebol nas dez
primeiras partidas de um campeonato:

                     Jogo         1       2       3           4        5       6       7   8   9   10

                 Gols Sofridos    0       1       2           0        1       2       1   0   3   2

A média e a mediana do número de gols sofridos nesses jogos são respectivamente
a) 1,2 e 1,0.
b) 1,2 e 1,5.


          Receita Federal (Analista Tributário) Estatística                                             101
          www.estrategiaconcursos.com.br                                                                160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) 1,1 e 1,0.
d) 1,0 e 1,0.
e) 1,0 e 1,5.


Comentários:
Calculamos a média somando os valores do conjunto e dividindo pela quantidade de números somados. No
caso da tabela, somamos todos os gols sofridos e dividimos pela quantidade de jogos. Assim:
                                           0+1+2+0+1+2+1+0+3+2
                                    𝑥̅ =
                                                       10
                                                       12
                                                  𝑥̅ =
                                                       10
                                                 𝑥̅ = 1,2
Para calcular a mediana precisamos achar o valor central do conjunto. Para isso, vamos colocar os valores da
amostra em ordem crescente e encontrar seu termo central.
                                           0, 0, 0, 1,        1, 1
                                                              ⏟            , 2, 2, 2, 3
                                                         𝑡𝑒𝑟𝑚𝑜𝑠 𝑐𝑒𝑛𝑡𝑟𝑎𝑖𝑠

No caso da nossa amostra, temos 10 valores, então teremos 2 termos centrais. Vamos calcular a média
desses dois termos e teremos a mediana:
                                                                1+1
                                                          𝑀𝑑 =
                                                                  2
                                                             𝑀𝑑 = 1
Gabarito: A.


17. (FGV/CODEBA/2016) Uma das características principais da mediana é
a) A invariância à unidade de medida utilizada.
b) A robustez à presença de outliers.
c) A identificação da observação mais frequente.
d) O fato de, em seu cálculo, dar mais peso às observações mais frequentes.
e) A normalização pelos desvios em relação à média.


Comentários:
Vamos analisar cada uma das alternativas:
    •   Letra A: Errada. Se mudarmos a unidade de medida utilizada a mediana também mudará.
    •   Letra B: Correta. A presença de outliers pouco impacta na mediana;
    •   Letra C: Errada. A mediana representa o termo central do conjunto. As observações frequentes estão
        relacionadas à moda.

         Receita Federal (Analista Tributário) Estatística                                               102
         www.estrategiaconcursos.com.br                                                                  160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •   Letra D: Errada. A mediana representa o termo central do conjunto. As observações frequentes estão
       relacionadas à moda.
   •   Letra E: Errada. A mediana representa o termo central do conjunto ou da amostra. Contudo, a
       mediana não é uma medida de dispersão.
Gabarito: B.


18. (FGV/IBGE/2016) Após a extração de uma amostra, as observações obtidas são tabuladas, gerando a
seguinte distribuição de frequências:

                                         Valor              3   5    9     13

                                      Frequência            5   9    10    3

Considerando que E(X) = Média de X, Mo(X) = Moda de X e Me(X) = Mediana de X, é correto afirmar que:
a) E(X) = 7 e Mo(X) = 10;
b) Me(X) = 5 e E(X) = 6,3;
c) Mo(X) = 9 e Me(X) = 9;
d) Me(X) = 9 e E(X) = 6,3;
e) Mo(X) = 9 e E(X) = 7.


Comentários:
A moda é, por definição, o valor que aparece em maior frequência. Portanto, o valor que tem frequência
máxima é 𝑀𝑜 (𝑋) = 9.
O número total de termos é 5 + 9 + 10 + 3 = 27. Como o número de termos é ímpar, a mediana é o termo
de ordem:
                                            (27 + 1)
                                                     = 14.
                                               2
Organizando os termos de forma ascendente, o 14º termo é o número 5. Veja que o número 3 aparece 5
vezes e o número 5 aparece 9 vezes. Portanto,
                                                      𝑀𝑑 (𝑋) = 5.
Agora, calcularemos o valor da média. Para tanto, multiplicaremos cada termo pela sua respectiva frequência
e dividiremos o resultado pela soma das frequências.
                                       3 × 5 + 5 × 9 + 9 × 10 + 13 × 3 189
                             𝐸(𝑋) =                                   =    = 7.
                                                      27                27
Gabarito: E.


19. (FGV/AL-BA/2014) Os dados a seguir são uma amostra de 11 salários mensais (aproximados) em reais:
                  2.080 1.830 2.480 3.010 1.450 1.650 2.500 1.740 3.600 1.900 2.840


        Receita Federal (Analista Tributário) Estatística                                               103
        www.estrategiaconcursos.com.br                                                                  160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

A mediana desses salários, em reais, é
a) 1.990.
b) 2.080.
c) 1.650.
d) 2.000.
e) 2.220.


Comentários:
A mediana é o termo central de uma amostra. Dividimos o conjunto ao meio e o termo que ocupar a posição
central será a mediana. Para isso os dados da amostra devem estar em ordem crescente. Ordenando os
salários, temos:
               1450, 1650, 1740, 1830, 1900,                ⏟
                                                            𝟐𝟎𝟖𝟎        , 2480, 2500, 2840, 3010, 3600
                                                        𝒕𝒆𝒓𝒎𝒐 𝒄𝒆𝒏𝒕𝒓𝒂𝒍

Portanto, o valor mediano é 2080.
Gabarito: B.


20. (FGV/CGE-MA/2014) Sobre uma amostra com uma quantidade ímpar de valores, todos diferentes de
uma variável aleatória, sabe-se que a média é maior que a mediana.
Com relação aos valores dessa amostra é necessariamente verdade que
a) Há mais valores acima da média do que abaixo da média.
b) Há mais valores abaixo da média do que acima da média.
c) Há mais valores acima da média do que abaixo da mediana.
d) Há mais valores acima da mediana do que abaixo da média.
e) A quantidade de valores acima da média é igual à quantidade de valores abaixo da média.


Comentários:
O enunciado informa que a amostra tem uma quantidade ímpar de valores. Logo, teremos um único valor
central que corresponderá à mediana. Antes de adentrarmos na análise das alternativas, tomemos como
exemplo o conjunto de valores {1, 2, 3, 5, 9}:
                                                             𝑀𝑑 = 3

                                               1+2+3+5+9
                                                 𝑥̅ =      =4
                                                      5
Nosso exemplo está em conformidade com o que é dito no enunciado, vez que a média é maior que a
mediana. Sendo assim, vamos analisar as alternativas:
   •   Letra A: Errado. Pelo nosso exemplo observamos que há mais valores abaixo da média do que acima
       da média.


        Receita Federal (Analista Tributário) Estatística                                                104
        www.estrategiaconcursos.com.br                                                                   160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

   •    Letra B: Correto. Há mais valores abaixo da média.
   •    Letra C: Errado. A mediana ocupa a posição central da amostra, portanto, divide a amostra em duas
        partes iguais.
   •    Letra D: Errado. Há mais valores abaixo da média.
   •    Letra E: Errado. A alternativa se refere à mediana e não à média.
Gabarito: B.


21. (FGV/Pref. Recife/2014) A seguinte amostra de idades foi obtida:
                                      19; 25; 39; 20; 16; 27; 40; 38; 28; 32; 30.
Assinale a opção que indica a mediana dessas idades.
a) 27
b) 28
c) 29
d) 30
e) 31


Comentários:
A mediana é o termo central de uma amostra. Para encontrar a mediana, temos que dividir o conjunto e
identificar o termo que ocupa a posição central. Para isso, os dados da amostra devem estar em ordem
crescente.
Ordenando as idades, temos:
                                 16, 19, 20, 25, 27,         28
                                                             ⏟         , 30, 32, 38, 39, 40
                                                       𝑡𝑒𝑟𝑚𝑜 𝑐𝑒𝑛𝑡𝑟𝑎𝑙

A mediana é 28.
Gabarito: B.

         Receita Federal (Analista Tributário) Estatística                                            105
         www.estrategiaconcursos.com.br                                                               160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                           QUESTÕES COMENTADAS – FGV

Quartil, Decil e Percentil

1. (FGV/TJ-AL/2018) Para avaliar a produtividade de um dado conjunto de varas da justiça, é
extraída uma amostra do número de audiências efetivamente realizadas durante um
determinado período.
Os dados foram tratados, obtendo-se as seguintes estatísticas:
Me (A.) = 22, 𝑸𝟏 =19 e 𝑸𝟑 =27
Essas estatísticas representam os Quartis da distribuição.
Adotando a técnica de Box-Plot para fins da identificação de outliers, sobre os valores A1 = 6,
                                                            ==219a34==

A2 = 11 e A3 = 40 tem-se que:
a) Todos são outliers;
b) Os dois primeiros são outliers;
c) Apenas A3 é um outlier;
d) A1 e A3 são outliers;
e) Nenhum deles é outlier.


Comentários:
Vamos, inicialmente, calcular a diferença interquartílica. Assim:
                                           𝑑 = 𝑄3 − 𝑄1 = 27 − 19 = 8
Agora, calculamos o limite superior:
                                                𝑙𝑠𝑢𝑝 = 𝑄3 + 1,5 × 𝑑
                                              𝑙𝑠𝑢𝑝 = 27 + 1,5 × 8 = 39
O limite inferior fica:
                                                𝑙𝑖𝑛𝑓 = 𝑄1 − 1,5 × 𝑑
                                              𝑙𝑖𝑛𝑓 = 19 − 1,5 × 8 = 7
Desta forma, temos que todos os valores que estiverem acima de 39 e abaixo de 7 serão outliers (dados
discrepantes), a exemplo dos valores A1 e A3. E todos os valores que estiverem entre 7 e 39 serão
considerados normais, a exemplo de A2.
Gabarito: D.


2. (FGV/IBGE/2016) Adotando-se para as estatísticas de posição de uma dada distribuição de
frequências as convenções, 𝐐𝐤 = 𝐐𝐮𝐚𝐫𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐃𝐤 = 𝐃𝐞𝐜𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐐𝐭 𝐤 =
𝐐𝐮𝐢𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤 e 𝐏𝐤 = 𝐏𝐞𝐧𝐜𝐞𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, é correto afirmar que:
a) 𝑄3 ≥ 𝐷6 ≥ 𝑄𝑡4 = 𝑃80 ;

        Receita Federal (Analista Tributário) Estatística                                         106
        www.estrategiaconcursos.com.br                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

b) 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
c) 𝐷9 ≥ 𝑃85 ≥ 𝑄3 = 𝑄𝑡3;
d) 𝑄1 ≥ 𝑄𝑡2 = 𝑃20 ≤ 𝐷3 ;
e) 𝐷6 ≤ 𝑄3 = 𝑃75 ≤ 𝑄𝑡3 .


Comentários:
Para responder essa questão, devíamos saber que:
    a) cada quartil delimita 25% das observações de uma distribuição. Logo:
            • 𝑄1 = 1 × 25% = 25% ⟹ até o primeiro quartil temos 25% das observações;
            • 𝑄3 = 3 × 25% = 75% ⟹ até o terceiro quartil temos 75% das observações;

    b) cada quintil delimita 20% das observações de uma distribuição. Logo:
            • 𝑄𝑡2 = 2 × 20% = 40% ⟹ até o segundo quintil temos 40% das observações;
            • 𝑄𝑡3 = 3 × 20% = 60% ⟹ até o terceiro quintil temos 60% das observações;
            • 𝑄𝑡4 = 4 × 20% = 80% ⟹ até o quarto quintil temos 80% das observações;

    c) cada decil delimita 25% das observações de uma distribuição. Logo:
            • 𝐷3 = 3 × 10% = 30% ⟹ até o terceiro decil temos 30% das observações;
            • 𝐷6 = 6 × 10% = 60% ⟹ até o sexto decil temos 60% das observações;
            • 𝐷9 = 9 × 10% = 90% ⟹ até o nono decil temos 90% das observações;

    d) cada percentil delimita 1% das observações de uma distribuição. Logo:
           • 𝑃20 = 20 × 1% = 20% ⟹ até o vigésimo percentil temos 20% das observações;
           • 𝑃55 = 55 × 1% = 55% ⟹ até o quinquagésimo quinto percentil temos 55% das
       observações;
           • 𝑃75 = 75 × 1% = 75% ⟹ até o septuagésimo quinto percentil temos 75% das
       observações;
           • 𝑃80 = 80 × 1% = 80% ⟹ até o octogésimo percentil temos 80% das observações;
           • 𝑃85 = 85 × 1% = 85% ⟹ até o octogésimo quinto percentil temos 85% das
       observações;
Agora, vamos avaliar cada uma das alternativas:
   •   Letra A: Errada. Se 𝑄𝑡4 é maior que 80% das observações e 𝐷6 é superior a 60% das observações,
       então obrigatoriamente 𝑄𝑡4 ≥ 𝐷6 ;
   •   Letra B: Correta. Se 𝑄𝑡2 delimita 40% das observações; 𝑃55 delimita 55%; 𝐷6 delimita 60% e
       𝑄3 delimita 75% das observações, então 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
   •   Letra C: Errada. Se 𝑄3 é maior que 75% das observações; e 𝑄𝑡3 é maior que 60% das
       observações, então, eles delimitam porções diferentes do conjunto de dados. Logo, não podemos
       garantir que sejam iguais entre si;
   •   Letra D: Errada. Se 𝑄1 delimita 25% das observações e 𝑄𝑡2 delimita 40% das observações, então
       𝑄𝑡2 ≥ 𝑄1 ;
   •   Letra E: Errada. Se 𝑃75 é maior que 75% das observações e 𝑄𝑡3 é maior que 60%, então, 𝑃75 ≥
       𝑄𝑡3 .
Gabarito: B.


        Receita Federal (Analista Tributário) Estatística                                         107
        www.estrategiaconcursos.com.br                                                            160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                          QUESTÕES COMENTADAS – FGV

Box Plot

1. (FGV/CVM/2024) Um analista estuda discrepâncias salariais entre os seguintes setores:
manufatura, serviços financeiros e tecnologia. A figura a seguir apresenta os box-plots dos salários
desses setores, em reais.

Dentre as afirmativas a seguir, a única correta é:

a) o primeiro quartil de todos os setores é superior a 4.000 reais;

b) a amplitude interquartil dos salários do setor de tecnologia vale aproximadamente 2.000 reais;

c) um salário de 5.500 seria identificado como uma observação discrepante, ou seja, um outlier,
para todos os três setores;

d) a mediana dos salários do setor de serviços financeiros é menor do que o primeiro quartil do
setor de tecnologia;

e) o menor salário observado para o setor de tecnologia é maior do que a mediana dos salários
do setor de manufatura.

Comentários:

        Receita Federal (Analista Tributário) Estatística                                        108
        www.estrategiaconcursos.com.br                                                           160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Vamos analisar cada uma das afirmações:

Alternativa A: Incorreta. O primeiro quartil de todos os setores é superior a 4.000 reais.

No box plot, o primeiro quartil (Q1) para o setor de manufatura está abaixo de 4.000 reais,
enquanto para os setores de serviços financeiros e tecnologia, Q 1 está acima de 4.000 reais.
Portanto, o primeiro quartil do setor de manufatura não é superior a 4.000 reais.

Alternativa B: Incorreta. A amplitude interquartil (IQR) dos salários do setor de tecnologia é
aproximadamente 2.000 reais.

No gráfico, o terceiro quartil (Q3) para tecnologia é cerca de 5.350 reais e o primeiro quartil (Q1) é
cerca de 4.350 reais. A diferença entre Q3 e Q1 (IQR) é 1.000 reais, não 2.000 reais.

Alternativa C: Incorreta. Um salário de 5.500 reais seria identificado como uma observação
discrepante (outlier) para todos os três setores.

Para determinar se um salário de 5.500 reais é considerado um outlier para todos os três setores,
precisamos calcular os limites para a identificação de outliers no setor de tecnologia. Outliers são
geralmente definidos como valores que estão abaixo de 𝑄1 − 1.5 × 𝐼𝑄𝑅 ou acima de 𝑄3 +
1.5 × 𝐼𝑄𝑅.

Primeiro, calculamos a amplitude interquartil (IQR) para o setor de tecnologia: 𝐼𝑄𝑅 = 𝑄3 − 𝑄1 =
5350 − 4350 = 1000.

Agora, calculamos os limites superior e inferior para identificar outliers:

   •   Limite inferior: 𝑄1 − 1.5 × 𝐼𝑄𝑅 = 4350 − 1.5 × 1000 = 4350 − 1500 = 2850

   •   Limite superior: 𝑄3 + 1.5 × 𝐼𝑄𝑅 = 5350 + 1.5 × 1000 = 5350 + 1500 = 6850

Portanto, qualquer valor acima de 6850 reais seria considerado um outlier para o setor de
tecnologia. Como 5500 reais está dentro do intervalo [2850, 6850], ele não é um outlier para o
setor de tecnologia.

Alternativa D: Correta. A mediana dos salários do setor de serviços financeiros é menor do que o
primeiro quartil do setor de tecnologia.

Observando o gráfico, vemos que a mediana dos serviços financeiros está próxima de 4.200 reais,
enquanto o primeiro quartil de tecnologia está em torno de 4.350 reais. Portanto, a mediana dos
serviços financeiros é menor do que o primeiro quartil de tecnologia.

        Receita Federal (Analista Tributário) Estatística                                          109
        www.estrategiaconcursos.com.br                                                             160

                                      


---

   Equipe Exatas Estratégia Concursos
   Aula 02

Alternativa E: Incorreta. O menor salário observado para o setor de tecnologia é maior do que a
mediana dos salários do setor de manufatura.

O menor valor observado no setor de tecnologia está próximo de 3.850 reais, enquanto a mediana
de manufatura está em torno de 3.850 reais. Como esses valores são muito próximos, não
podemos afirmar que o menor salário observado para o setor de tecnologia é maior do que a
mediana dos salários do setor de manufatura.

Gabarito: D.


2. (FGV/Câmara dos Deputados/2023) Os dados a seguir são uma amostra de 40 idades:
                                                             ==219a34==

               7         18        20        20         20                21   21   24   25   26

              26         28        28        29         30                32   34   34   36   36

              36         36        37        37         38                38   38   39   40   40

              40         41        41        43         48                48   49   50   50   59

Para a detecção de observações atípicas (outliers), será usado o critério que considera atípica a observação
que não está no intervalo (Q1 – 1,5D; Q3 + 1,5D), em que D é a distância interquartil, Q1 é o 1º quartil e
Q3, o terceiro.
Assim, a quantidade de outliers com base nesse critério, para esse conjunto de dados, é igual a
a) 0.
b) 1.
c) 2.
d) 3.
e) 4.


Comentários:
A questão nos forneceu um conjunto ordenado com 40 idades e nos pediu a quantidade outliers utilizando o
critério da distância interquartílica. Portanto, vamos ter que encontrar os valores que representam 𝑄1 e 𝑄3 .
Podemos aproveitar que a própria questão já dividiu o conjunto em 4 partes iguais, cada uma com 10 valores.
Sendo assim, podemos facilmente verificar que 𝑄1 = 26, 𝑄2 = 36 e 𝑄3 = 40, vez que esses valores
estabelecem os limites de cada uma das quatro partes. Vejamos:

               7         18        20        20         20                21   21   24   25   26

         Receita Federal (Analista Tributário) Estatística                                               110
         www.estrategiaconcursos.com.br                                                                  160

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 02

               26        28        28        29         30      32       34   34   36   36

               36        36        37        37         38      38       38   39   40   40

               40        41        41        43         48      48       49   50   50   59

Portanto, a distância interquartílica é:
                                           𝐷𝐼𝑄 = 𝑄3 − 𝑄1 = 40 − 26 = 14
Agora, vamos calcular os limites para considerarmos os valores como atípicos. Tudo que estiver abaixo de
𝑄1 − 1,5 × 𝐷𝐼𝑄 e acima de 𝑄3 + 1,5 × 𝐷𝐼𝑄 deve ser considerado outlier:
                                 𝑄1 − 1,5 × 𝐷𝐼𝑄 = 26 − 1,5 × 14 = 26 − 21 = 5
                                𝑄3 + 1,5 × 𝐷𝐼𝑄 = 40 + 1,5 × 14 = 40 + 21 = 61
Logo, nenhum valor do conjunto pode ser considerado outlier.
Gabarito: A.


3. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:

A maior mediana das notas foi obtida pela turma
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.


Comentários:


         Receita Federal (Analista Tributário) Estatística                                           111
         www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

O diagrama de box-plot é uma ferramenta gráfica muito utilizada na análise exploratória de dados. O box-
plot é formado por uma caixa retangular, localizada no meio da haste. A extremidade esquerda ou inferior
da caixa indica o primeiro quartil. A extremidade direita ou superior indica o terceiro quartil. A linha no
interior da caixa indica o segundo quartil ou a mediana. O segundo quartil pode estar entre o primeiro e o
terceiro quartis, ou pode coincidir com um, ou outro, ou ambos.
Analisando os diagramas apresentados na questão, podemos verificar que a maior mediana foi obtida pela
turma número 4, com valor superior a 5:

Gabarito: D.

        Receita Federal (Analista Tributário) Estatística                                               112
        www.estrategiaconcursos.com.br                                                                  160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

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
        www.estrategiaconcursos.com.br                                                                160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                   QUESTÕES COMENTADAS – INÉDITAS

Quartil, Decil e Percentil

1. (INÉDITA/2022) Em uma empresa, os salários de 100 funcionários estão distribuídos de
acordo com a tabela de frequências abaixo:

                                        Salários em
                                                             Nº de funcionários
                                         mil R$ (x)

                                            2⊢4                     30

                                            4⊢6                     10

                                            6⊢8                     20

                                           8 ⊢ 10                   30

                                          10 ⊢ 12                   10

                                            Total                   100

Com base nas medidas de separatrizes a amplitude interquartil dos salários dos funcionários é:
a) 5,666
b) 3,666
c) 9
d) 5,334
e) 4,336


Comentários:
Vamos iniciar o cálculo reescrevendo a tabela de frequências e acrescentando uma coluna para
frequências acumuladas:

                                Classes (x)         Frequências Freq. acumulada

                                    2⊢4                     30             30

                                    4⊢6                     10             40

        Receita Federal (Analista Tributário) Estatística                                  114
        www.estrategiaconcursos.com.br                                                     160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                      6⊢8                     20             60

                                     8 ⊢ 10                   30             90

                                    10 ⊢ 12                   10             100

                                      Total                   100

Calculando a posição do primeiro quartil, temos:
                                                            𝑘 × ∑ 𝑓𝑖
                                                      𝑃𝑄𝑘 =
                                                               4
                                                         1 × 100
                                                   𝑃𝑄1 =         = 25
                                                            4
Logo, o primeiro quartil está na posição 25, o que corresponde a 1ª classe 2 ⊢ 4.
Agora, podemos aplicar a fórmula:
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
                                                               25 − 0
                                                 𝑄1 = 2 + [          ]×2
                                                                 30
                                                   𝑄1 = 2 + 0,833 × 2
                                                      𝑄1 = 2 + 1,666
                                                        𝑄1 = 3,666


Calculando a posição do terceiro quartil:
                                                            𝑘 × ∑ 𝑓𝑖
                                                      𝑃𝑄𝑘 =
                                                               4
                                                         3 × 100
                                                   𝑃𝑄3 =         = 75
                                                            4

          Receita Federal (Analista Tributário) Estatística                         115
          www.estrategiaconcursos.com.br                                            160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Logo, o terceiro quartil está na posição 75, o que corresponde a 4 ª classe 8 ⊢ 10.
Calculando o terceiro quartil:
                                                    𝑘 × ∑ 𝑓𝑖
                                                             − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                     𝑄𝑘 = 𝑙𝑖𝑛𝑓 𝑄 + [ 4                 ] × ℎ𝑄𝑘
                                                𝑘          𝑓𝑄𝑘

                                                              75 − 60
                                               𝑄3 = 8 + [             ]×2
                                                                30
                                                   𝑄3 = 8 + 0,5 × 2
                                                      𝑄3 = 8 + 1
                                                            𝑄3 = 9
Agora, podemos calcular a amplitude do intervalo que é dada pela diferença entre o terceiro quartil e o
primeiro quartil:
                                               𝐴 = 9 − 3,666 = 5,334
Gabarito: D.


2. (INÉDITA/2022) As distâncias percorridas em quilômetros por 7 carros em uma corrida
automobilística foram:
12,20,18,14,22,15,19
A mediana dessas distâncias é igual:
a) 19
b) 20
c) 15
d) 22
e) 18


Comentários:
A mediana é o termo central da amostra, que divide uma série ordenada de dados em duas partes iguais,
separando os valores inferiores à mediana dos valores superiores à mediana. Assim, ordenando os
dados, temos:
                                                12,20,18,14,22,15,19
Portanto, a mediana é:
                                            12,14,15,        18
                                                             ⏟       , 19,20,22
                                                        𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Gabarito: E.


        Receita Federal (Analista Tributário) Estatística                                           116
        www.estrategiaconcursos.com.br                                                              160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

3. (INÉDITA/2022) O histograma abaixo apresenta uma distribuição de uma variável x por meio
de frequências absolutas.

Considerando as informações do histograma, o sexto decil dessa distribuição é:
a) 47,33
b) 38, 77
c) 50
d) 53,8
e) 39,25


Comentários:
Primeiramente, vamos reescrever os dados do histograma em uma tabela e acrescentarmos as
frequências acumuladas:

                                  Classes (x)        Frequências Freq. acumulada

                                    10 ⊢ 20                   50              50

                                    20 ⊢ 30                   300            350

                                    30 ⊢ 40                   200            550

                                    40 ⊢ 50                   150            700

                                    50 ⊢ 60                   400            1100

                                      Total               1100

          Receita Federal (Analista Tributário) Estatística                             117
          www.estrategiaconcursos.com.br                                                160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Para calcular o decil de dados agrupados em classe, primeiro precisamos calcular a posição do decil.
Faremos isso por meio da seguinte fórmula:
                                                                𝑘 × ∑ 𝑓𝑖
                                                       𝑃𝐷𝑘 =
                                                                   10
Queremos encontrar a posição do 6º decil:
                                                          6 × 1100
                                                  𝑃𝐷6 =            = 660
                                                             10
Logo, o sexto decil está na posição 660.
Observando as frequências acumuladas na tabela, descobrimos que ele pertence à quarta classe, de 40
a 50.
Agora, podemos aplicar a fórmula para o cálculo do decil:
                                                       𝑘 × ∑ 𝑓𝑖
                                                                − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                        𝐷𝑘 = 𝑙𝑖𝑛𝑓 𝐷 + [ 10                ] × ℎ𝐷𝑘
                                                   𝑘          𝑓𝐷𝑘

em que:
𝑙𝑖𝑛𝑓 𝐷 → limite inferior à classe do decil;
       𝑘

𝑓𝑎𝑐𝑎𝑛𝑡 → frequência acumulada da classe anterior ao decil;
ℎ𝐷𝑘 → amplitude da classe;
𝑓𝐷𝑘 → frequência da classe.
                                                                                    𝑘×∑ 𝑓𝑖
Perceba que já calculamos a posição do decil, então, basta substituirmos em                  :
                                                                                     10

                                                               660 − 550
                                              𝐷6 = 40 + [                ] × 10
                                                                  150
                                                                  110
                                                  𝐷6 = 40 + [         ] × 10
                                                                  150
                                                  𝐷6 = 40 + 0,733 × 10
                                                       𝐷6 = 40 + 7,33
                                                         𝐷6 = 47,33
Portanto, o sexto decil da distribuição é 47,33.
Gabarito: A.


4. (INÉDITA/2022) Considere o seguinte conjunto: 2,5,y,9,15 Sabe-se que y é menor que 9,e que
y não é a mediana. A diferença entre a média e a mediana é igual a 2. O valor de y é:
a) 3
b) 4


           Receita Federal (Analista Tributário) Estatística                                     118
           www.estrategiaconcursos.com.br                                                        160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) 9
d) 8
e) 6


Comentários:
Sabemos que a mediana é o termo central da amostra. A questão nos diz que y é menor que 9, porém, y
não é a mediana. Consequentemente, y será menor que 5.
Ordenando os dados do conjunto temos que a mediana será:
                                                   2, y,                 5     , 9,15
                                                           𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Agora, vamos calcular a média do conjunto:                  ==219a34==

                                                      2 + 𝑦 + 5 + 9 + 15
                                               𝑥̅ =
                                                               5
                                                             31 + 𝑦
                                                        𝑥̅ =
                                                               5
A questão diz que a diferença entre a média e a mediana é igual a 2, assim:
                                                       𝑥̅ − 𝑀𝑑 = 2
                                                      31 + 𝑦
                                                             −5=2
                                                         5
                                                      31 + 𝑦
                                                             = 2+5
                                                         5
                                                        31 + 𝑦
                                                               =7
                                                           5
                                                       31 + 𝑦 = 35
                                                       𝑦 = 35 − 31
                                                            𝑦=4
Gabarito: B.


5. (INÉDITA/2022) Em um supermercado os preços de alguns produtos foram agrupados em
classes a fim de se determinar a frequência de saída dos produtos de acordo com o valor. Assim
a distribuição de frequências absolutas foi dada conforme a tabela a seguir:

                                  Classes de preços                          Frequência de saída

                                           3⊢6                                          7

                                           6⊢9                                          8


        Receita Federal (Analista Tributário) Estatística                                          119
        www.estrategiaconcursos.com.br                                                             160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                            9 ⊢ 12                      10

                                           12 ⊢ 15                      4

                                           15 ⊢ 18                      11

O percentil 43 da amostra é:
a) 8,25
b) 10,5
c) 6,99
d) 8,7
e) 9,66


Comentários:
Para calcularmos o percentil, dividimos a amostra em cem partes iguais. Assim, precisamos determinar
a posição do percentil que queremos encontrar.
Para isso, identificamos a posição do percentil na coluna de frequências acumuladas, isto é, a frequência
acumulada imediatamente igual ou superior à posição do percentil.
Reescrevendo a tabela com as informações de frequências acumuladas, temos:

                                                                       freq.
                                        Classes       Frequência
                                                                    acumulada

                                          3⊢6                 7              7

                                          6⊢9                 8              15

                                         9 ⊢ 12               10             25

                                        12 ⊢ 15               4              29

                                        15 ⊢ 18               11             40

Assim, temos que:
                                              𝐾 × ∑ 𝑓𝑖          43 × 40
                                      𝑃𝑃𝑘 =            = 𝑃𝑃43 =         = 17,2
                                                100               100
Logo, a posição do 43º percentil está na frequência acumulada 17,2. Portanto, o 43º percentil está
contido na terceira classe.
O percentil é calculado por meio da fórmula apresentada a seguir:


          Receita Federal (Analista Tributário) Estatística                                           120
          www.estrategiaconcursos.com.br                                                              160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                                 43 × ∑ 𝑓𝑖
                                                                           − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                                 𝑃43 = 𝑙𝑖𝑛𝑓 𝑃 + [ 100                ] × ℎ𝑃43
                                                             43        𝑓𝑃43

                                                                    43 × 40
                                                                            − 15
                                                         𝑃43 = 9 + [ 100         ]×3
                                                                         10

                                                                         17,2 − 15
                                                           𝑃43 = 9 + [             ]×3
                                                                            10
                                                               𝑃43 = 9 + 0,22 × 3
                                                                   𝑃43 = 9,66
Gabarito: E.


6. (INÉDITA/2022) O gráfico a seguir demonstra o número de acidentes registrados em uma
rodovia durante 7 dias. Utilize as informações para responder à questão.


                                            10
                          Nº de acidentes

                                             8
                                             6
                                             4
                                             2
                                             0
                                                 1        2        3         4         5   6    7
                                                                       Dia da semana

Considere que o primeiro dia da semana é domingo e o sétimo dia da semana é sábado. O
primeiro quartil é observado no dia:
a) segunda
b) sábado
c) domingo
d) sexta
e) terça


Comentários:
Para resolvermos a questão, vamos criar uma tabela de frequências para melhor visualizarmos a
resolução:

           Receita Federal (Analista Tributário) Estatística                                        121
           www.estrategiaconcursos.com.br                                                           160

                                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                      Dias da                              Freq.
                                      semana          Frequência        acumulada
                                        (x)

                                          1                  8                   8

                                          2                  4               12

                                          3                  2               14

                                          4                  2               16

                                          5                  6               22

                                          6                  8               30

                                          7                 10               40

                                        Total               40

Sabemos que os quartis dividem a amostra em quatro partes e que o primeiro quartil corresponde a
25% da amostra. Portanto, o primeiro quartil está localizado na posição:
                                                      𝑘×𝑛
                                              𝑃𝑄𝑘 =              (𝑘 = 1, 2, 3)
                                                       4
em que 𝑛 é a soma das frequências simples;
Para o primeiro quartil, temos:
                                                            1 × 40
                                                  𝑃𝑄1 =            = 10
                                                              4
Assim, 25% dos acidentes correspondem a 10 acumulados na semana e são observados no segundo dia
da semana, de acordo com a tabela de frequências acumuladas. De domingo a segunda feira são
acumulados 12 acidentes. Portanto, temos que 25% dos acidentes ocorrem até segunda feira.
Gabarito: A.


7. (INÉDITA/2022) No histograma abaixo estão apresentadas informações sobre os salários em
R$ dos 50 funcionários de determinada empresa.

        Receita Federal (Analista Tributário) Estatística                                    122
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Considerando as informações do histograma, o quarto decil dessa distribuição é:
a) 5
b) 4
c) 3
d) 4,5
e) 3,5


Comentários:
Reescrevendo os dados do histograma em uma tabela e acrescentando as frequências acumuladas:

                                 Classes (x)        Frequências Freq. acumulada

                                     2⊢3                     20             20

                                     3⊢4                     10             30

                                     4⊢5                     15             45

                                     5⊢6                     5              50

                                     Total                   50

Para calcularmos o decil de dados agrupados em classe, primeiro precisamos calcular a posição do decil.
Podemos calcular o decil por meio da seguinte fórmula:
                                                              𝑘 × ∑ 𝑓𝑖
                                                     𝑃𝐷𝑘 =
                                                                 10
Queremos encontrar a posição do 4º decil:

         Receita Federal (Analista Tributário) Estatística                                          123
         www.estrategiaconcursos.com.br                                                             160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                               4 × 50
                                                     𝑃𝐷4 =            = 20
                                                                 10
Logo, o quarto decil está na posição 20. Observando as frequências acumuladas na tabela, podemos
perceber que ele pertence à primeira classe, de 2 a 3.
Agora, podemos aplicar a fórmula para o cálculo do decil:
                                                       𝑘 × ∑ 𝑓𝑖
                                                                − 𝑓𝑎𝑐 𝑎𝑛𝑡
                                        𝐷𝑘 = 𝑙𝑖𝑛𝑓 𝐷 + [ 10                ] × ℎ𝐷𝑘
                                                   𝑘          𝑓𝐷𝑘

em que:
𝑙𝑖𝑛𝑓 𝐷 → Limite inferior à classe do decil;
       𝑘

𝑓𝑎𝑐𝑎𝑛𝑡 → frequência acumulada da classe anterior ao decil;
ℎ𝐷𝑘 → amplitude da classe;
𝑓𝐷𝑘 → frequência da classe
                                                                                    𝑘×∑ 𝑓𝑖
Perceba que já calculamos a posição do decil, então basta substituirmos em           10

                                                                 20 − 0
                                                  𝐷4 = 2 + [            ]×1
                                                                   20
                                                                   20
                                                     𝐷4 = 2 + [       ]×1
                                                                   20
                                                       𝐷4 = 2 + 1 × 1
                                                         𝐷4 = 2 + 1
                                                               𝐷4 = 3
Portanto, o quarto decil da distribuição é 3.
Gabarito: C.


8. (INÉDITA/2022) Dado o seguinte conjunto de valores: (5,7,9,13,2,8,24,14,6,15)
O percentil 80 (𝑷𝟖𝟎 ) do conjunto é:
a) 13
b) 9
c) 14
d) 24
e) 15


Comentários:


           Receita Federal (Analista Tributário) Estatística                                 124
           www.estrategiaconcursos.com.br                                                    160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Primeiro, precisamos ordenar os valores do conjunto:
                                            (𝟐, 𝟓, 𝟔, 𝟕, 𝟖, 𝟗, 𝟏𝟑, 𝟏𝟒, 𝟏𝟓, 𝟐𝟒)
Agora, temos que determinar a posição de 𝑷𝟖𝟎 . Para isso, vamos usar a fórmula:
                                                    𝑘×𝑛
                                            𝑃𝑃𝑘 =               (𝑘 = 1,2, ⋯ ,99)
                                                    100
                                                            80 × 10
                                                  𝑃𝑃80 =            =8
                                                              100
Verificando o valor que ocupa a posição 8:

                             𝒙𝟏     𝒙𝟐      𝒙𝟑    𝒙𝟒      𝒙𝟓      𝒙𝟔   𝒙𝟕    𝒙𝟖    𝒙𝟗   𝒙𝟏𝟎

                             2      5       6       7       8     9    13    14    15   24

Portanto, o valor que corresponde à oitava posição é 14. Portanto, 14 corresponde a 80% do rol.
Gabarito: C.


9. (INÉDITA/2022) A média de cinco números 13,8,2,1,y é 5.
A mediana desse conjunto é:
a) 8
b) 2
c) 5
d) 13
e) 1


Comentários:
Como a média do conjunto vale 5, podemos utilizar a fórmula da média para determinarmos o valor de
y:
                                                          𝑠𝑜𝑚𝑎
                                                         𝑥̅ =
                                                            𝑛
                                                    13 + 8 + 2 + 1 + 𝑦
                                                 5=
                                                            5
                                                        24 + 𝑦 = 25
                                                        𝑦 = 25 − 24
                                                            𝑦=1
Agora, para determinarmos a mediana do conjunto, os dados devem estar ordenados, da seguinte forma:

        Receita Federal (Analista Tributário) Estatística                                         125
        www.estrategiaconcursos.com.br                                                            160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                     1,1,        ⏟
                                                                 2    , 8,13
                                                            𝑚𝑒𝑑𝑖𝑎𝑛𝑎

Portanto, a mediana vale 2.
Gabarito: B.


10. (INÉDITA/2022) Considere o seguinte conjunto de números reais: (3,6,14,26,32,21,5,8).
O terceiro quartil do conjunto é igual a:
a) 26
b) 14
c) 8
d) 32
e) 21


Comentários:
Ordenando os valores do conjunto, temos:
                                                 (𝟑, 𝟓, 𝟔, 𝟖, 𝟏𝟒, 𝟐𝟏, 𝟐𝟔, 𝟑𝟐)
Os quartis dividem uma série ordenada em quatro partes iguais, cada uma contendo 25% dos valores
da sequência. Para encontrarmos o terceiro quartil, podemos usar a fórmula:
                                                         𝑘×𝑛
                                                 𝑃𝑄𝑘 =       (𝑘 = 1,2,3)
                                                          4
em que n é igual ao número de termos.
                                                            3 × 8 24
                                                  𝑃𝑄𝑘 =          =   =6
                                                              4    4
Assim, a posição do terceiro quartil é 6.
Agora, basta verificarmos o valor que ocupa a posição 6:

                                    𝒙𝟏      𝒙𝟐      𝒙𝟑      𝒙𝟒       𝒙𝟓   𝒙𝟔    𝒙𝟕   𝒙𝟖

                                    3       5       6        8       14   21    26   32

Portanto, o valor que corresponde à sexta posição é 21, sendo esse o valor que corresponde a 75% do
rol.
Gabarito: E.

        Receita Federal (Analista Tributário) Estatística                                       126
        www.estrategiaconcursos.com.br                                                          160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                      QUESTÕES COMENTADAS – INÉDITAS
Box Plot
1. (INÉDITA/2022) De uma determinada amostra, foram obtidas as seguintes estatísticas:
𝑄1 = 23; 𝑄3 = 38, para o primeiro quartil e terceiro quartil respectivamente. Acerca dos valores
𝑋1 = 7; 𝑋2 = 12; e 𝑋3 = 52, podemos afirmar que:

a) X1 e X3 são outliers.
b) Nenhum pode ser considerado outlier.
c) Apenas X1 é outlier.
d) Apenas X2 é outlier.
e) Todos são outliers.


Comentários:
Para resolvermos a questão, precisamos calcular os limites inferior e superior para detecção de
outliers. Assim:

                                                              (
                                            𝑙𝑖𝑛𝑓 = 𝑄1 − 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑖𝑛𝑓 = 23 − 1, 5×(38 − 23)

                                              𝑙𝑖𝑛𝑓 = 23 − 22, 5 = 0, 5

                                                               (
                                            𝑙𝑠𝑢𝑝 = 𝑄3 + 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑠𝑢𝑝 = 38 + 1, 5×(38 − 23)

                                             𝑙𝑠𝑢𝑝 = 38 + 22, 5 = 60, 5

Assim, tudo o que estiver entre 0,5 e 60,5 é considerado normal na amostra e tudo o que estiver
abaixo de 0,5 e acima de 60,5 é considerado outlier.
Portanto os valores de X1, X2 e X3 são normais.
Gabarito: B.


2. (INÉDITA/2022) Seja uma amostra para a qual foram calculadas as seguintes estatísticas:
Q1=25 e Q3=38. Sobre os seguintes valores: X1=18; X2=3 e X3=59, podemos afirmar que:


        Receita Federal (Analista Tributário) Estatística                                    127
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

a) Nenhum dos valores é outlier.
b) Os valores de X1 e X3 são outliers.
c) Apenas X2 é outlier.
d) Os valores de X2 e X3 são outliers.
e) Apenas X3 é outlier.


Comentários:
Para resolvermos a questão, precisamos calcular os limites inferior e superior para detecção de
outliers. Assim:

                                                              (
                                            𝑙𝑖𝑛𝑓 = 𝑄1 − 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑖𝑛𝑓 = 25 − 1, 5×(38 − 25)

                                              𝑙𝑖𝑛𝑓 = 25 − 19, 5 = 5, 5

                                                               (
                                            𝑙𝑠𝑢𝑝 = 𝑄3 + 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑠𝑢𝑝 = 38 + 1, 5×(38 − 25)

                                             𝑙𝑠𝑢𝑝 = 38 + 19, 5 = 57, 5

Assim, tudo o que estiver entre 5,5 e 57,5 é considerado normal; e tudo o que estiver abaixo de
5,5 e acima de 57,5 é considerado outlier.
Portanto, os valores de X2 e X3 são outliers.
Gabarito: C.


3. (INÉDITA/2022) Considere o gráfico abaixo que representa o desempenho escolar de duas
turmas do 3º ano:

        Receita Federal (Analista Tributário) Estatística                                   128
        www.estrategiaconcursos.com.br                                                      160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

De acordo com o gráfico, é correto afirmar que
a) A quantidade de alunos da turma A é superior à da turma B
b) A distância interquartil da turma A é superior ao da turma B
c) A mediana da turma A é superior à mediana da turma B
d) O menor desempenho verificado na turma B foi 5
e) O maior desempenho da turma A é superior ao verificado na turma B


Comentários:
Vamos analisar cada uma das assertivas:
A - O diagrama não informa a quantidade de elementos de cada turma.
B - A distância interquartil corresponde à diferença entre o terceiro quartil e o primeiro quartil.
Para a turma A, temos: Q3-Q1= 9,5-6,5=3.
Para a turma B, temos: Q3-Q1=9-7=2
Portanto, a alternativa está correta.
C - Observando o gráfico, percebemos que a mediana para A=8 e para B=8. Portanto ambas as
turmas têm mediana iguais.
D - No gráfico, o limite inferior da turma B é 6. Portanto, o menor desempenho nessa turma é 6.
E - Os limites superiores de ambas as turmas são iguais a 10. Portanto, ambas têm desempenho
superior iguais.
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                             129
        www.estrategiaconcursos.com.br                                                                160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

4. (INÉDITA/2022) A distribuição dos salários de analistas e assistentes de determinado órgão
público está representada conforme o gráfico boxplot abaixo:

Com relação aos diagramas, pode-se afirmar que
a) A amplitude interquartil dos salários dos assistentes é superior à amplitude interquartil dos
salários dos analistas.
b) Ambas as distribuições são simétricas.
c) O maior salário observado para os assistentes corresponde à mediana dos analistas.
d) A mediana dos salários dos analistas equivale ao terceiro quartil dos salários dos assistentes.
e) O maior salário dos ocupantes do cargo de analista é de R$ 10.000,00.


Comentários:
Analisando as alternativas, temos:
A - A distância interquartil corresponde à diferença entre o terceiro quartil e o primeiro quartil.
Para os analistas, temos: Q3-Q1= 9-4=5.
Para os assistentes, temos: Q3-Q1=7-3=4
Portanto, a distância interquartil dos analistas é superior à dos assistentes.
B - Para que haja simetria na distribuição, é necessário que as duas partes do retângulo sejam
iguais. Observem que a distribuição dos assistentes é simétrica, mas na distribuição dos analistas
a parte superior do retângulo é menor que a parte inferior. Logo, a distribuição não é simétrica.
C - O maior salário para os assistentes é R$ 8.000,00. Já a mediana dos analistas, de acordo com
o gráfico, é de R$ 7.000,00. Portanto, a alternativa está errada.
D - A mediana dos salários dos analistas é de R$ 7.000,00 e o terceiro quartil dos salários dos
assistentes é observada pela linha superior da caixa boxplot e corresponde ao valor de R$
7.000,00. Portanto, a alternativa está correta.
E - No gráfico, percebemos que o limite superior dos analistas supera o valor de 10 mil reais.
Logo, a alternativa está errada.

        Receita Federal (Analista Tributário) Estatística                                             130
        www.estrategiaconcursos.com.br                                                                160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Gabarito: D.


5. (INÉDITA/2022) A figura abaixo representa a distribuição de consumo de açúcar por um grupo
de amigos:

De acordo com o gráfico é correto afirmar que 75% do consumo corresponde à:
                                                             ==219a34==

a) 30g
b) 25g
c) 40g
d) 50g
e) 10g


Comentários:
Um percentual de 75% dos dados corresponde ao terceiro quartil da amostra. No gráfico
boxplot, a linha à direita da caixa equivale ao terceiro quartil, a linha no meio da caixa equivale à
mediana (50% dos dados) e a linha à esquerda da caixa equivale ao primeiro quartil (25% dos
dados).
Portanto, para o gráfico em questão, temos que 75% dos dados correspondem a um consumo de
40g de açúcar.
Gabarito: C.


6. (INÉDITA/2022) O boxplot é uma ferramenta gráfica frequentemente utilizada na análise
exploratória de dados. Essa ferramenta resume cinco medidas descritivas de um conjunto de
dados. São elas:
a) média, mediana, moda, amplitude e variância.
b) média, mediana, moda, valor mínimo e valor máximo.
c) valor mínimo, média, mediana, valor máximo e outliers.
d) valor mínimo, moda, primeiro quartil, mediana e terceiro quartil.
e) valor mínimo, primeiro quartil, mediana, terceiro quartil e valor máximo.


         Receita Federal (Analista Tributário) Estatística                                        131
         www.estrategiaconcursos.com.br                                                           160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Comentários:
O boxplot resume cinco medidas descritivas de um conjunto de dados, incluindo: o valor mínimo,
o primeiro quartil, a mediana, o terceiro quartil e o valor máximo.
Gabarito: E.


7. (INÉDITA/2022) Nos gráficos boxplot é comum encontrarmos pontos ou asteriscos nas
extremidades do gráfico. A essas representações chamamos de:
a) outliers.
b) quartil inferior.
c) quartil superior.
d) distância interquartílica.
e) desvio quartílico.


Comentários:
Os outliers são valores discrepantes marcados com pontos ou asteriscos nos gráficos boxplot.
Nesse caso, os valores discrepantes são menores que 𝑄1 − 1, 5×𝐷𝐼𝑄 ou maiores que
𝑄3 + 1, 5×𝐷𝐼𝑄.

Gabarito: A.


8. (INÉDITA/2022) Abaixo temos uma representação gráfica da quantidade de processos
analisados por um servidor.

Com base no diagrama boxplot apresentado, podemos afirmar que 50% dos processos
analisados equivale a uma quantidade de processos igual a:
a) 4
b) 5

         Receita Federal (Analista Tributário) Estatística                                 132
         www.estrategiaconcursos.com.br                                                    160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

c) 6
d) 8
e) 12


Comentários:
Sabemos que a representação gráfica boxplot informa os valores do 1º quartil, mediana e 3º
quartil, além dos valores máximo e mínimo. Assim, a linha do meio da caixa, equivale ao segundo
quartil, ou seja, a mediana. Também sabemos que a mediana corresponde a 50% da amostra.
Portanto, de acordo com o gráfico, a mediana equivale a 6 processos.
Gabarito: C.


9. (INÉDITA/2022) Considere o gráfico

A distância interquartílica da amostra é igual a
a) 20
b) 16
c) 18
d) 4
e) 6


Comentários:
A distância interquartílica corresponde à diferença entre o terceiro quartil e o primeiro quartil.
Assim, temos:

        Receita Federal (Analista Tributário) Estatística                                      133
        www.estrategiaconcursos.com.br                                                         160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                             𝑄3 − 𝑄1 = 20 − 16 = 4.

Gabarito: D.


10. (INÉDITA/2022) Seja uma amostra com as seguintes estatísticas: 1º quartil Q1=34; e 3º quartil
Q3=42. Com base nesses dados, podemos afirmar que os valores A1= 8, A2=16 e A3=58:
a) Nenhum dos valores pode ser considerado outliers
b) Todos os valores são outliers
c) Apenas A2 é outlier
d) Os valores de A2 e A3 são outliers
e) Apenas A3 faz parte da amostra normal


Comentários:
Para resolvermos a questão, precisamos calcular os limites inferior e superior da amostra. Assim:

                                                              (
                                            𝑙𝑖𝑛𝑓 = 𝑄1 − 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑖𝑛𝑓 = 34 − 1, 5×(42 − 34)

                                                𝑙𝑖𝑛𝑓 = 34 − 12 = 22

                                                               (
                                            𝑙𝑠𝑢𝑝 = 𝑄3 + 1, 5× 𝑄3 − 𝑄1      )
                                           𝑙𝑠𝑢𝑝 = 42 + 1, 5×(42 − 34)

                                                𝑙𝑠𝑢𝑝 = 42 + 12 = 54

Assim, tudo o que estiver entre 22 e 54 é considerado normal na amostra e tudo o que estiver
abaixo de 22 e acima de 54 é considerado outlier.
Portanto, todos os valores são outliers.
Gabarito: B.

        Receita Federal (Analista Tributário) Estatística                                       134
        www.estrategiaconcursos.com.br                                                          160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                 LISTA DE QUESTÕES – FGV

Mediana

1. (FGV/TCE-PA/2024) O professor deu as seguintes notas numa prova de matemática de uma pequena
turma de 7 alunos:

                                                      Aluno Nota
                                                        1    6,0
                                                        2    6,5
                                                        3    7,8
                                                        4    4,2
                                                        5    6,6
                                                        6   10,0
                                                        7    5,5
A mediana dessas notas foi igual a
a) 4,2
b) 5,5
c) 6,5
d) 6,6
e) 6,7


2. (FGV/TJ-AP/2024) Segundo o ditado, “se alguém está com a cabeça no gelo e os pés no forno, não se
pode dizer que está bem”. Para que a conclusão seja que a pessoa está bem, deve-se aferir a temperatura
da pessoa na cabeça (gelo), nos pés (forno) e também nas axilas (fora do gelo e do forno), pelo seguinte
estimador:
a) média aritmética;
b) média geométrica;
c) média harmônica;
d) mediana;
e) moda.


3. (FGV/RFB/2023) Uma pequena amostra de 11 salários (medidos em quantidades de salários mínimos)
de trabalhadores de terceiro setor mostrou os seguintes resultados:

         Receita Federal (Analista Tributário) Estatística                                           135
         www.estrategiaconcursos.com.br                                                              160

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 02

                                  2,0 2,3 2,7 3,4 3,9 2,8 2,3 1,8 1,5 3,3 1,5
A diferença, em quantidade de salários mínimos, entre os valores da média e da mediana desses dados é
igual a
a) 0,0.
b) 0,1.
c) 0,2.
d) 0,3.
e) 0,4.


4. (FGV/SEF-MG/2023) Considere a lista de 200 números inteiros a seguir:
                                           𝟏, 𝟐, 𝟑, ⋯ , 𝟏𝟎𝟎, 𝟏𝟐 , 𝟐𝟐 , 𝟑𝟐 , ⋯ , 𝟏𝟎𝟎𝟐 .
A mediana dessa lista de números é
a) 50,5.
b) 72,5.
c) 80,5.
d) 91,5.
e) 100.


5. (FGV/TCE ES/2023) A seguinte amostra de acidentes de trânsito em um mês foi observada:
                                          9, 15, 15, 11, 13, 16, 15, 13, 16, 18, 9.
Nesse caso, é correto afirmar, a respeito das principais medidas de tendência central desse conjunto, que:
a) a média é igual a 15;
b) o valor da média é menor do que o da mediana;
c) o valor da mediana é duas unidades maior do que o da média;
d) se uma nova medida, igual a 20, for incorporada à amostra, a diferença entre média e mediana deve
aumentar;
e) se uma nova medida, igual a 20, for incorporada à amostra, os valores da média e da mediana
permanecerão iguais.


6. (FGV/CBM-AM/2022) A soma de 11 números inteiros estritamente positivos, não necessariamente
distintos, é 2022.
O maior valor que a mediana desses 11 números pode ter é
a) 335.


           Receita Federal (Analista Tributário) Estatística                                           136
           www.estrategiaconcursos.com.br                                                              160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

b) 336.
c) 337.
d) 338.
e) 339.


7. (FGV/SEFAZ ES/2022) As notas de nove candidatos num certo exame foram:
                                             54, 48, 46, 51, 38, 50, 44, 58, 32.
A mediana dessas notas é igual a
a) 44.
b) 46.
c) 48.
d) 50.
e) 51.


8. (FGV/TCE-TO/2022) A seguinte amostra de idades foi observada: 30, 24, 26, 25, 24, 28, 26, 29, 30.
A mediana dessas idades é igual a:
a) 25,5;
b) 26,0;
c) 26,5;
d) 28,0;
e) 28,5.


9. (FGV/TRT-MA/2022) Uma variável aleatória discreta X tem função de probabilidade dada por:

                                          Valores de X         0   3     10   12

                                          Probabilidades 0,2 0,1 0,3 0,4

A média e a mediana de X são respectivamente iguais a
a) 8,1 e 10.
b) 8,1 e 3,0.
c) 8,5 e 6,5.

           Receita Federal (Analista Tributário) Estatística                                           137
           www.estrategiaconcursos.com.br                                                              160

                                         


---

   Equipe Exatas Estratégia Concursos
   Aula 02

d) 8,1 e 6,5.
e) 8,5 e 10.


10. (FGV/TRT-PB/2022) Os dados a seguir são uma amostra de pesos aproximados, em kg, de homens
adultos:
67, 55, 102, 77, 88, 89, 100, 78, 69, 65, 65, 101, 98, 65, 68
A mediana desses pesos é
a) 76.
b) 77.
c) 77,5.
d) 78.
e) 78,5.


11. (FGV/TRT-PB/2022) Avalie se as seguintes afirmativas acerca da mediana de uma variável aleatória X
estão corretas:
I. Se m é a mediana de X então P[X ≤ m] ≥ 0,5 e P[ X ≥ m] ≥ 0,5.
II. A mediana é uma medida mais resistente a valores extremos do que a média.
III. Se a distribuição de probabilidades de X tem assimetria negativa, então o valor da mediana de X é
menor do que o da média de X.
Está correto o que se afirma em
a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.


12. (FGV/IMBEL/2021) Considere a lista de cinco números reais: 2, 9, 4, 10, x.
Sabe-se que a mediana desses números é igual à média deles.
A soma dos possíveis valores de x é:
a) 22,5.
b) 21,25.

            Receita Federal (Analista Tributário) Estatística                                      138
            www.estrategiaconcursos.com.br                                                         160

                                          


---

   Equipe Exatas Estratégia Concursos
   Aula 02

c) 20,75.
d) 19,5.
e) 17,5.


13. (FGV/FunSaúde CE/2021) A mediana dos sete números 9, 2, 5, 3, 13, x, 5 é x.
A média desses números é
a) 5.
b) 5,5.
c) 6.
d) 6,5.                                                        ==219a34==

e) 7.


14. (FGV/FunSaúde CE/2021) Sabe-se que x é maior do que 11 e que a diferença entre a média e a mediana
dos cinco números 2, x, 11, 16, 5 é igual a 2.
O valor de x é
a) 12.
b) 16.
c) 21.
d) 26.
e) 31.


15. (FGV/ALE-RO/2018) Sejam x, y e z, respectivamente, a média, a mediana e a moda dos sete valores 9,
10, 6, 5, 20, 9 e 4. É correto concluir que
a) x < y < z .
b) x < y = z
c) x = y < z
d) y < z = x
e) x = y = z


16. (FGV/ALE-RO/2018) A tabela a seguir mostra o número de gols sofridos por um time de futebol nas dez
primeiras partidas de um campeonato:

           Receita Federal (Analista Tributário) Estatística                                        139
           www.estrategiaconcursos.com.br                                                           160

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                    Jogo         1       2        3          4   5    6     7    8   9   10

                Gols Sofridos    0       1        2          0   1    2     1    0   3   2

A média e a mediana do número de gols sofridos nesses jogos são respectivamente
a) 1,2 e 1,0.
b) 1,2 e 1,5.
c) 1,1 e 1,0.
d) 1,0 e 1,0.
e) 1,0 e 1,5.


17. (FGV/CODEBA/2016) Uma das características principais da mediana é
a) A invariância à unidade de medida utilizada.
b) A robustez à presença de outliers.
c) A identificação da observação mais frequente.
d) O fato de, em seu cálculo, dar mais peso às observações mais frequentes.
e) A normalização pelos desvios em relação à média.


18. (FGV/IBGE/2016) Após a extração de uma amostra, as observações obtidas são tabuladas, gerando a
seguinte distribuição de frequências:

                                          Valor              3   5    9     13

                                       Frequência            5   9    10    3

Considerando que E(X) = Média de X, Mo(X) = Moda de X e Me(X) = Mediana de X, é correto afirmar que:
a) E(X) = 7 e Mo(X) = 10;
b) Me(X) = 5 e E(X) = 6,3;
c) Mo(X) = 9 e Me(X) = 9;
d) Me(X) = 9 e E(X) = 6,3;
e) Mo(X) = 9 e E(X) = 7.


19. (FGV/AL-BA/2014) Os dados a seguir são uma amostra de 11 salários mensais (aproximados) em reais:
                    2.080 1.830 2.480 3.010 1.450 1.650 2.500 1.740 3.600 1.900 2.840
A mediana desses salários, em reais, é
a) 1.990.


         Receita Federal (Analista Tributário) Estatística                                        140
         www.estrategiaconcursos.com.br                                                           160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

b) 2.080.
c) 1.650.
d) 2.000.
e) 2.220.


20. (FGV/CGE-MA/2014) Sobre uma amostra com uma quantidade ímpar de valores, todos diferentes de
uma variável aleatória, sabe-se que a média é maior que a mediana.
Com relação aos valores dessa amostra é necessariamente verdade que
a) Há mais valores acima da média do que abaixo da média.
b) Há mais valores abaixo da média do que acima da média.
c) Há mais valores acima da média do que abaixo da mediana.
d) Há mais valores acima da mediana do que abaixo da média.
e) A quantidade de valores acima da média é igual à quantidade de valores abaixo da média.


21. (FGV/Pref. Recife/2014) A seguinte amostra de idades foi obtida:
                                     19; 25; 39; 20; 16; 27; 40; 38; 28; 32; 30.
Assinale a opção que indica a mediana dessas idades.
a) 27
b) 28
c) 29
d) 30
e) 31

        Receita Federal (Analista Tributário) Estatística                                    141
        www.estrategiaconcursos.com.br                                                       160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Mediana

  1.   LETRA C                                8. LETRA B                  15. LETRA E
  2.   LETRA D                                9. LETRA A                  16. LETRA A
  3.   LETRA C                                10. LETRA B                 17. LETRA B
  4.   LETRA D                                11. LETRA B                 18. LETRA E
  5.   LETRA B                                12. LETRA B                 19. LETRA B
  6.   LETRA B                                13. LETRA C                 20. LETRA B
  7.   LETRA C                                14. LETRA E                 21. LETRA B

       Receita Federal (Analista Tributário) Estatística                                142
       www.estrategiaconcursos.com.br                                                   160

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                LISTA DE QUESTÕES – FGV

Quartil, Decil e Percentil

1. (FGV/TJ-AL/2018) Para avaliar a produtividade de um dado conjunto de varas da justiça, é
extraída uma amostra do número de audiências efetivamente realizadas durante um
determinado período.
Os dados foram tratados, obtendo-se as seguintes estatísticas:
Me (A.) = 22, 𝑸𝟏 =19 e 𝑸𝟑 =27
Essas estatísticas representam os Quartis da distribuição.
Adotando a técnica de Box-Plot para fins da identificação de outliers, sobre os valores A1 = 6,
A2 = 11 e A3 = 40 tem-se que:
a) Todos são outliers;
b) Os dois primeiros são outliers;
c) Apenas A3 é um outlier;
d) A1 e A3 são outliers;
e) Nenhum deles é outlier.


2. (FGV/IBGE/2016) Adotando-se para as estatísticas de posição de uma dada distribuição de
frequências as convenções, 𝐐𝐤 = 𝐐𝐮𝐚𝐫𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐃𝐤 = 𝐃𝐞𝐜𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, 𝐐𝐭 𝐤 =
𝐐𝐮𝐢𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤 e 𝐏𝐤 = 𝐏𝐞𝐧𝐜𝐞𝐧𝐭𝐢𝐥 𝐝𝐞 𝐨𝐫𝐝𝐞𝐦 𝐤, é correto afirmar que:
a) 𝑄3 ≥ 𝐷6 ≥ 𝑄𝑡4 = 𝑃80 ;
b) 𝑄𝑡2 ≤ 𝑃55 ≤ 𝐷6 ≤ 𝑄3 ;
c) 𝐷9 ≥ 𝑃85 ≥ 𝑄3 = 𝑄𝑡3;
d) 𝑄1 ≥ 𝑄𝑡2 = 𝑃20 ≤ 𝐷3 ;
e) 𝐷6 ≤ 𝑄3 = 𝑃75 ≤ 𝑄𝑡3 .

        Receita Federal (Analista Tributário) Estatística                                   143
        www.estrategiaconcursos.com.br                                                      160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Quartil, Decil e Percentil

  1. LETRA D                                  2. LETRA B

                                                           ==219a34==

       Receita Federal (Analista Tributário) Estatística                  144
       www.estrategiaconcursos.com.br                                     160

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                LISTA DE QUESTÕES – FGV

Box Plot

1. (FGV/CVM/2024) Um analista estuda discrepâncias salariais entre os seguintes setores:
manufatura, serviços financeiros e tecnologia. A figura a seguir apresenta os box -plots dos
salários desses setores, em reais.

Dentre as afirmativas a seguir, a única correta é:
a) o primeiro quartil de todos os setores é superior a 4.000 reais;
b) a amplitude interquartil dos salários do setor de tecnologia vale aproximadamente 2.000 reais;
c) um salário de 5.500 seria identificado como uma observação discrepante, ou seja, um outlier,
para todos os três setores;
d) a mediana dos salários do setor de serviços financeiros é menor do que o primeiro quartil do
setor de tecnologia;
e) o menor salário observado para o setor de tecnologia é maior do que a mediana dos salários
do setor de manufatura.


2. (FGV/Câmara dos Deputados/2023) Os dados a seguir são uma amostra de 40 idades:

              7         18        20        20         20      21       21   24   25   26

        Receita Federal (Analista Tributário) Estatística                                     145
        www.estrategiaconcursos.com.br                                                        160

                                       


---

   Equipe Exatas Estratégia Concursos
   Aula 02

              26         28        28        29         30                32   34   34   36   36

              36         36        37        37         38                38   38   39   40   40

              40         41        41        43         48                48   49   50   50   59

Para a detecção de observações atípicas (outliers), será usado o critério que considera atípica a observação
que não está no intervalo (Q1 – 1,5D; Q3 + 1,5D), em que D é a distância interquartil, Q1 é o 1º quartil e
Q3, o terceiro.
Assim, a quantidade de outliers com base nesse critério, para esse conjunto de dados, é igual a
a) 0.
b) 1.
                                                             ==219a34==

c) 2.
d) 3.
e) 4.


3. (FGV/TRT-PB/2022) Os diagramas a seguir são Box-Plots de notas de cinco turmas de alunos de um
mesmo colégio numa prova de matemática:

A maior mediana das notas foi obtida pela turma
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.

         Receita Federal (Analista Tributário) Estatística                                               146
         www.estrategiaconcursos.com.br                                                                  160

                                        


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                         GABARITO – FGV

Box Plot

  1. LETRA D                                  2. LETRA A                  3. LETRA D

       Receita Federal (Analista Tributário) Estatística                               147
       www.estrategiaconcursos.com.br                                                  160

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                         LISTA DE QUESTÕES – INÉDITAS

Quartil, Decil e Percentil

1. (INÉDITA/2022) Em uma empresa, os salários de 100 funcionários estão distribuídos de
acordo com a tabela de frequências abaixo:

                                        Salários em
                                                            Nº de funcionários
                                         mil R$ (x)

                                            2⊢4                    30

                                            4⊢6                    10

                                            6⊢8                    20

                                           8 ⊢ 10                  30

                                          10 ⊢ 12                  10

                                            Total                  100

Com base nas medidas de separatrizes a amplitude interquartil dos salários dos funcionários é:
a) 5,666
b) 3,666
c) 9
d) 5,334
e) 4,336


2. (INÉDITA/2022) As distâncias percorridas em quilômetros por 7 carros em uma corrida
automobilística foram:
12,20,18,14,22,15,19
A mediana dessas distâncias é igual:
a) 19
b) 20
c) 15
d) 22


        Receita Federal (Analista Tributário) Estatística                                  148
        www.estrategiaconcursos.com.br                                                     160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

e) 18


3. (INÉDITA/2022) O histograma abaixo apresenta uma distribuição de uma variável x por meio
de frequências absolutas.

Considerando as informações do histograma, o sexto decil dessa distribuição é:
a) 47,33
b) 38, 77
c) 50
d) 53,8
e) 39,25


4. (INÉDITA/2022) Considere o seguinte conjunto: 2,5,y,9,15 Sabe-se que y é menor que 9,e que
y não é a mediana. A diferença entre a média e a mediana é igual a 2. O valor de y é:
a) 3
b) 4
c) 9
d) 8
e) 6


5. (INÉDITA/2022) Em um supermercado os preços de alguns produtos foram agrupados em
classes a fim de se determinar a frequência de saída dos produtos de acordo com o valor. Assim
a distribuição de frequências absolutas foi dada conforme a tabela a seguir:

                                    Classes de preços         Frequência de saída

          Receita Federal (Analista Tributário) Estatística                                149
          www.estrategiaconcursos.com.br                                                   160

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                                                         3⊢6                           7

                                                         6⊢9                           8

                                                        9 ⊢ 12                         10

                                                       12 ⊢ 15                         4

                                                       15 ⊢ 18                         11

O percentil 43 da amostra é:
a) 8,25
b) 10,5
c) 6,99
d) 8,7
e) 9,66


6. (INÉDITA/2022) O gráfico a seguir demonstra o número de acidentes registrados em uma
rodovia durante 7 dias. Utilize as informações para responder à questão.


                                            10
                          Nº de acidentes

                                             8
                                             6
                                             4
                                             2
                                             0
                                                 1        2        3         4         5    6   7
                                                                       Dia da semana

Considere que o primeiro dia da semana é domingo e o sétimo dia da semana é sábado. O
primeiro quartil é observado no dia:
a) segunda
b) sábado
c) domingo
d) sexta
e) terça

           Receita Federal (Analista Tributário) Estatística                                        150
           www.estrategiaconcursos.com.br                                                           160

                                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

7. (INÉDITA/2022) No histograma abaixo estão apresentadas informações sobre os salários em
R$ dos 50 funcionários de determinada empresa.

                                                             ==219a34==

Considerando as informações do histograma, o quarto decil dessa distribuição é:
a) 5
b) 4
c) 3
d) 4,5
e) 3,5


8. (INÉDITA/2022) Dado o seguinte conjunto de valores: (5,7,9,13,2,8,24,14,6,15)
O percentil 80 (𝑷𝟖𝟎 ) do conjunto é:
a) 13
b) 9
c) 14
d) 24
e) 15


9. (INÉDITA/2022) A média de cinco números 13,8,2,1,y é 5.
A mediana desse conjunto é:
a) 8
b) 2
c) 5
d) 13
e) 1


         Receita Federal (Analista Tributário) Estatística                             151
         www.estrategiaconcursos.com.br                                                160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

10. (INÉDITA/2022) Considere o seguinte conjunto de números reais: (3,6,14,26,32,21,5,8).
O terceiro quartil do conjunto é igual a:
a) 26
b) 14
c) 8
d) 32
e) 21

        Receita Federal (Analista Tributário) Estatística                                   152
        www.estrategiaconcursos.com.br                                                      160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                  GABARITO – INÉDITAS

Quartil, Decil e Percentil

  1. LETRA D                                  5. LETRA E                  9. LETRA B
  2. LETRA E                                  6. LETRA A                  10. LETRA E
  3. LETRA A                                  7. LETRA C
  4. LETRA B                                  8. LETRA C

       Receita Federal (Analista Tributário) Estatística                                153
       www.estrategiaconcursos.com.br                                                   160

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 02

                           LISTA DE QUESTÕES – INÉDITAS
Box Plot
1. (INÉDITA/2022) De uma determinada amostra, foram obtidas as seguintes estatísticas:
𝑄1 = 23; 𝑄3 = 38, para o primeiro quartil e terceiro quartil respectivamente. Acerca dos valores
𝑋1 = 7; 𝑋2 = 12; e 𝑋3 = 52, podemos afirmar que:

a) X1 e X3 são outliers.
b) Nenhum pode ser considerado outlier.
c) Apenas X1 é outlier.
d) Apenas X2 é outlier.
e) Todos são outliers.


2. (INÉDITA/2022) Seja uma amostra para a qual foram calculadas as seguintes estatísticas:
Q1=25 e Q3=38. Sobre os seguintes valores: X1=18; X2=3 e X3=59, podemos afirmar que:
a) Nenhum dos valores é outlier.
b) Os valores de X1 e X3 são outliers.
c) Apenas X2 é outlier.
d) Os valores de X2 e X3 são outliers.
e) Apenas X3 é outlier.


3. (INÉDITA/2022) Considere o gráfico abaixo que representa o desempenho escolar de duas
turmas do 3º ano:

        Receita Federal (Analista Tributário) Estatística                                    154
        www.estrategiaconcursos.com.br                                                       160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

De acordo com o gráfico, é correto afirmar que
a) A quantidade de alunos da turma A é superior à da turma B
b) A distância interquartil da turma A é superior ao da turma B
c) A mediana da turma A é superior à mediana da turma B
d) O menor desempenho verificado na turma B foi 5
e) O maior desempenho da turma A é superior ao verificado na turma B


4. (INÉDITA/2022) A distribuição dos salários de analistas e assistentes de determinado órgão
público está representada conforme o gráfico boxplot abaixo:

Com relação aos diagramas, pode-se afirmar que
a) A amplitude interquartil dos salários dos assistentes é superior à amplitude interquartil dos
salários dos analistas.
b) Ambas as distribuições são simétricas.
c) O maior salário observado para os assistentes corresponde à mediana dos analistas.
d) A mediana dos salários dos analistas equivale ao terceiro quartil dos salários dos assistentes.
e) O maior salário dos ocupantes do cargo de analista é de R$ 10.000,00.


5. (INÉDITA/2022) A figura abaixo representa a distribuição de consumo de açúcar por um grupo
de amigos:

De acordo com o gráfico é correto afirmar que 75% do consumo corresponde à:


        Receita Federal (Analista Tributário) Estatística                                            155
        www.estrategiaconcursos.com.br                                                               160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

a) 30g
b) 25g
c) 40g
d) 50g
e) 10g


6. (INÉDITA/2022) O boxplot é uma ferramenta gráfica frequentemente utilizada na análise
exploratória de dados. Essa ferramenta resume cinco medidas descritivas de um conjunto de
dados. São elas:
a) média, mediana, moda, amplitude e variância.
b) média, mediana, moda, valor mínimo e valor máximo.
c) valor mínimo, média, mediana, valor máximo e outliers.
d) valor mínimo, moda, primeiro quartil, mediana e terceiro quartil.
e) valor mínimo, primeiro quartil, mediana, terceiro quartil e valor máximo.


7. (INÉDITA/2022) Nos gráficos boxplot é comum encontrarmos pontos ou asteriscos nas
extremidades do gráfico. A essas representações chamamos de:
a) outliers.
b) quartil inferior.
c) quartil superior.
d) distância interquartílica.
e) desvio quartílico.


8. (INÉDITA/2022) Abaixo temos uma representação gráfica da quantidade de processos
analisados por um servidor.

         Receita Federal (Analista Tributário) Estatística                            156
         www.estrategiaconcursos.com.br                                               160

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 02

Com base no diagrama boxplot apresentado, podemos afirmar que 50% dos processos
analisados equivale a uma quantidade de processos igual a:
a) 4
b) 5
c) 6
d) 8
e) 12


9. (INÉDITA/2022) Considere o gráfico

                                                            ==219a34==

A distância interquartílica da amostra é igual a
a) 20
b) 16
c) 18
d) 4
e) 6


10. (INÉDITA/2022) Seja uma amostra com as seguintes estatísticas: 1º quartil Q1=34; e 3º quartil
Q3=42. Com base nesses dados, podemos afirmar que os valores A1= 8, A2=16 e A3=58:
a) Nenhum dos valores pode ser considerado outliers
b) Todos os valores são outliers
c) Apenas A2 é outlier
d) Os valores de A2 e A3 são outliers

        Receita Federal (Analista Tributário) Estatística                                     157
        www.estrategiaconcursos.com.br                                                        160

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 02

e) Apenas A3 faz parte da amostra normal

        Receita Federal (Analista Tributário) Estatística                  158
        www.estrategiaconcursos.com.br                                     160

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 02

                                   GABARITO – INÉDITAS
Box Plot
  1. LETRA B                                  5. LETRA C                  9. LETRA D
  2. LETRA C                                  6. LETRA E                  10. LETRA B
  3. LETRA B                                  7. LETRA A
  4. LETRA D                                  8. LETRA C

       Receita Federal (Analista Tributário) Estatística                                159
       www.estrategiaconcursos.com.br                                                   160

                                     


---

---
