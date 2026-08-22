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
arquivo_origem: Aula 13_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '13'
titulo_aula: Estatística
---

# Estatística

Aula 12
                          Receita Federal (Analista Tributário)
                                                    Estatística

                                                         Autor:
                                     Equipe Exatas Estratégia
                                                   Concursos


                                           13 de Outubro de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 12

                                                                                     Índice
1) Introdução - Testes de Hipóteses.


2) Conceitos Fundamentais - Teste de Hipóteses.


3) Tipos de Erros.


4) Testes de Hipóteses para a Média.


5) Testes de Hipóteses para Proporções.


6) P-Valor.


7) Teste Qui-Quadrado.


8) Questões Comentadas - Conceitos Fundamentais - FGV


9) Questões Comentadas - Tipos de Erros - FGV


10) Questões Comentadas - Testes para a Média - FGV


11) Questões Comentadas - Testes para Proporções - FGV


12) Questões Comentadas - P-Valor - FGV


13) Questões Comentadas - Teste Qui-Quadrado - FGV


14) Lista de Questões - Conceitos Fundamentais - FGV


15) Lista de Questões - Tipos de Erros - FGV


16) Lista de Questões - Testes para a Média - FGV


17) Lista de Questões - Testes para Proporções - FGV


18) Lista de Questões - P-Valor - FGV


19) Lista de Questões - Teste Qui-Quadrado - FGV

                Receita Federal (Analista Tributário) Estatística                                                                                                                         2
                www.estrategiaconcursos.com.br                                                                                                                                          110

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Olá, amigo(a)!

Chegamos à cereja do bolo da Estatística Inferencial! Os testes de hipóteses são muito queridos pelas bancas
porque reúnem o conhecimento de quase toda a Estatística Inferencial e ainda exigem atenção especial na
hora da conclusão.

Preparado(a)?!

                                                    Luana Brandão

                                    Doutora em Engenharia de Produção (UFF)

                                             Auditora Fiscal da SEFAZ-RJ

                               Se tiver alguma dúvida, entre em contato comigo!

              professoraluanabrandao@gmail.com

             @professoraluanabrandao

                                                             “A direção é mais importante do que a velocidade.”

                                                                                               Edson Marques

        Receita Federal (Analista Tributário) Estatística                                                    3
        www.estrategiaconcursos.com.br                                                                      110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                     TESTES DE HIPÓTESES
Nesta aula, vamos aprender a testar suposições (que chamamos de hipóteses), a respeito de um parâmetro
populacional. Por exemplo, vamos supor que o fornecedor de um produto afirme que a quantidade em cada
recipiente seja de 2L, em média. Para testar essa hipótese, vamos extrair uma amostra e com base nela
decidir se o fornecedor está certo ou errado.

Conceitos Fundamentais

A suposição inicial é chamada de hipótese nula, representada como 𝑯𝒐 , enquanto a hipótese alternativa,
indicada por 𝑯𝟏 ou 𝑯𝑨 , pressupõe uma situação diferente. A hipótese alternativa será considerada
verdadeira, caso a hipótese nula seja considerada falsa.

Para o exemplo do fornecedor, a hipótese nula é 𝐻𝑜 : 𝜇 = 2L. Já, a hipótese alternativa pode ser 𝐻1 : 𝜇 ≠ 2,
ou seja, de que a média é diferente de 2L.

No teste de hipóteses, primeiro consideramos a hipótese nula como verdadeira e construímos um intervalo
de confiança em torno do parâmetro 𝜇 = 2.
Se a média da amostra observada estiver fora desse intervalo, rejeitamos a hipótese nula. Caso contrário,
não rejeitamos a hipótese nula.

Por isso, a região entre os extremos do intervalo é chamada de Região de Não Rejeição (RNR) e a região
externa ao intervalo é chamada de Região Crítica (RC).

A rejeição da hipótese nula é a decisão forte. Por isso, quando o resultado do teste é de rejeição, dizemos
que o teste é significante, ou que gerou evidência estatística.

(CESPE/2019 – TJ-AM) A respeito dos testes de hipóteses, julgue o próximo item.
A hipótese nula (Ho) e a hipótese alternativa (Ha) são mutuamente excludentes.
Comentário:
A hipótese alternativa é a hipótese formulada supondo a hipótese nula como falsa. Portanto, são
mutuamente excludentes.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                                4
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue a afirmativa a seguir.
Tanto na rejeição quanto na aceitação, o teste de hipóteses é uma ferramenta da inferência que gera
evidência estatística.
Comentário:
Dizemos que o teste gera evidência estatística, apenas quando rejeitamos a hipótese nula, ou seja, o teste
não gera evidência estatística na aceitação. Logo, a afirmativa está incorreta.
Resposta: Errado

A probabilidade associada à Região Crítica é chamada de nível de significância (𝜶), e corresponde à
probabilidade de rejeitar a hipótese nula, sendo ela verdadeira. E a probabilidade associada à Região de Não
                                                               ==219a34==

Rejeição é 𝟏 − 𝜶 e corresponde à probabilidade de não rejeitar a hipótese nula, sendo ela verdadeira.

No nosso exemplo, em que a hipótese alternativa é 𝐻1 : 𝜇 ≠ 2, o teste é considerado bilateral, porque a
Região Crítica é dividida em relação aos dois extremos, conforme ilustrado a seguir.

                                               𝑅𝐶                           𝑅𝑁𝑅
                                               𝛼⁄                           1−𝛼            𝑅𝐶
                                                 2                                         𝛼⁄
                                                                                             2

                                                        LINF                    𝜇   LSUP
                                              ̅ < 𝑳𝑰𝑵𝑭 ou 𝑿
Nessa situação, rejeitamos a hipótese nula se 𝑿           ̅ > 𝑳𝑺𝑼𝑷 ; e não rejeitamos a hipótese nula, se
𝑳𝑰𝑵𝑭 ≤ 𝑿̅ ≤ 𝑳𝑺𝑼𝑷 .

Porém, podemos considerar que o lote do fabricante não deve ser rejeitado se encontrarmos uma
quantidade maior do que a estipulada. Nesse caso, iremos rejeitar a hipótese nula apenas se a quantidade
encontrada for inferior ao limite mínimo calculado. Esse teste é chamado unilateral à esquerda.

Para esse teste, a hipótese alternativa será 𝐻1 : 𝜇 < 2, de modo que toda a Região Crítica estará à esquerda
do parâmetro 𝜇 = 2, como representado a seguir:

                                                           𝑅𝑁𝑅
                                                           1−𝛼
                                                 𝑅𝐶
                                                    𝛼
                                                    LINF                    𝜇

                                                            ̅ < 𝑳𝑰𝑵𝑭 ; e não a rejeitamos, se 𝑿
Assim, rejeitamos a hipótese nula, se o valor observado for 𝑿                                 ̅ ≥ 𝑳𝑰𝑵𝑭.

        Receita Federal (Analista Tributário) Estatística                                                  5
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Por outro lado, caso a hipótese alternativa seja da forma 𝐻1 : 𝜇 > 2, temos o teste unilateral à direita, em
que a região crítica está totalmente concentrada à direita, como representado a seguir:

                                                      𝑅𝑁𝑅
                                                      1−𝛼         𝑅𝐶
                                                                   𝛼
                                                            𝜇   LSUP
                                          ̅ > 𝑳𝑺𝑼𝑷 ; e não a rejeitamos se 𝑿
Nesse caso, rejeitamos a hipótese nula se 𝑿                                ̅ ≤ 𝑳𝑺𝑼𝑷 .

Nos testes unilaterais (ou unicaudais), as hipóteses alternativas podem ser chamadas de direcionais (pois
supõem que o parâmetro seja maior ou menor que determinado valor) e, nos bilaterais (ou bicaudais), elas
podem ser chamadas de não direcionais (pois supõem que o parâmetro é diferente de determinado valor).

(CESPE/2019 – TJ/AM) A respeito dos testes de hipóteses, julgue o próximo item.
A hipótese alternativa (Ha) é direcional em um teste unicaudal.
Comentário:
A hipótese alternativa pode ser classificada como direcional em testes unilaterais (ou unicaudais) e como
não direcional em testes bilaterais (também chamados de bicaudais).
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                                 6
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                           TIPOS DE ERROS
O nível de significância 𝜶 corresponde à probabilidade de rejeitarmos a hipótese nula, sendo ela verdadeira.
Quando isso ocorre, cometemos um erro, chamado de erro tipo I.

Podemos diminuir o nível de significância, com o aumento do tamanho da amostra ou com o aumento da
Região de Não Rejeição.

Por outro lado, existe a possibilidade de não rejeitar a hipótese nula quando ela é falsa, que também é um
erro, chamado de erro tipo II. A probabilidade desse erro é indicada como 𝜷.

                      Erro tipo I (probabilidade 𝛼): rejeitar 𝐻0 dado que 𝐻0 é verdadeira

                      Erro tipo II (probabilidade 𝛽): não rejeitar 𝐻0 dado que 𝐻0 é falsa

Nos gráficos que construímos para os testes de hipóteses, que considera a hipótese nula como verdadeira,
podemos identificar a região associada ao erro tipo I, cuja probabilidade é α.

No entanto, não é possível identificar, nesses gráficos, a região associada ao erro tipo II, porque esse erro
considera que a hipótese nula é falsa. Para visualizá-lo, precisamos do gráfico construído com base no
parâmetro indicado na hipótese alternativa, quando houver (ou no parâmetro verdadeiro, caso ele seja
informado).

Por exemplo, se testarmos a hipótese nula 𝐻0 : 𝜇 = 2 contra a hipótese alternativa 𝐻𝑎 : 𝜇 = 1,5 e decidirmos
rejeitar a hipótese nula se 𝑋̅ < 1,9 (portanto, não a rejeitar se 𝑋̅ ≥ 1,9), então o erro tipo II corresponde à
região indicada a seguir:

                                                                    𝛽
                                                        𝜇 = 1,5   L: 1,9

        Receita Federal (Analista Tributário) Estatística                                                   7
        www.estrategiaconcursos.com.br                                                                     110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

        Os erros não são complementares: 𝜶 + 𝜷 = 𝟏

        Eles pressupõem distribuições distintas e por isso pertencem a Espaços Amostrais
        diferentes. A rigor, a sua soma pode até ser maior que 1!


Os complementares dos erros correspondem a decisões corretas.
                                                            ==219a34==

O complementar do erro tipo I corresponde à não rejeição da hipótese nula quando ela é verdadeira e tem
probabilidade igual a 𝟏 − 𝜶, chamada nível de confiança.

O complementar do erro tipo II corresponde à rejeição da hipótese nula quando ela é falsa e tem
probabilidade igual a 𝟏 − 𝜷, chamada poder do teste.

Quanto maior a diferença entre o parâmetro descrito na hipótese nula 𝜇𝑜 e o parâmetro verdadeiro 𝜇1 (ou
aquele indicado na hipótese alternativa), maior será o poder do teste.

Além dessa diferença entre os parâmetros, o poder do teste também é afetado pelos seguintes fatores:

   o Tamanho da amostra 𝒏: quanto maior o tamanho da amostra, maior o poder do teste;
   o Nível de significância 𝜶: quanto maior o nível de significância, maior o poder do teste.

(FCC/2019 – Secretaria de Manaus/AM) De um estudo, obtiveram-se informações de uma amostra aleatória
extraída de uma população. Em um teste de hipóteses, foram formuladas as hipóteses Hₒ (hipótese nula) e
Hₗ (hipótese alternativa) para analisar um parâmetro da população com base nos dados da amostra.
O nível de significância deste teste corresponde à probabilidade de
a) não rejeitar Hₒ, dado que Hₒ é falsa.
b) rejeitar Hₒ, dado que Hₒ é falsa
c) rejeitar Hₒ, dado que Hₒ é verdadeira
d) não rejeitar Hₒ, independente de Hₒ ser falsa ou verdadeira
e) rejeitar Hₒ, independente de Hₒ ser falsa ou verdadeira


        Receita Federal (Analista Tributário) Estatística                                               8
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Comentários:
O nível de significância (𝛼), ou seja, a probabilidade do erro tipo I, corresponde à probabilidade de rejeitar a
hipótese nula, sendo ela verdadeira.
Gabarito: C


(CESPE/2019 – TJ-AM) A respeito dos testes de hipóteses, julgue o próximo item.
O poder de um teste estatístico varia conforme o tamanho amostral.
Comentários:
O poder do teste (1 − 𝛽), que representa a probabilidade de rejeitar a hipótese nula, quando ela é falsa, de
fato, aumenta quando o tamanho da amostra aumenta. Portanto, a afirmativa está correta.
A título de complementação, o poder do teste também aumenta com o aumento do nível de significância 𝜶
e da diferença entre o verdadeiro valor do parâmetro e aquele indicado na hipótese nula.
Gabarito: Certa


(FGV/2022 – PC/AM) Em relação ao poder de um teste de hipóteses, NÃO é possível afirmar que
a) é definido como a probabilidade de se rejeitar a hipótese nula, quando essa é falsa.
b) é igual à unidade deduzida da probabilidade de erro do tipo II.
c) quanto maior o tamanho da amostra, maior o poder do teste de hipóteses.
d) é afetado pelo verdadeiro valor do parâmetro que é testado.
e) independe do nível de significância fixado pelo pesquisador.
Comentários:
A questão pede a alternativa INCORRETA a respeito do poder do teste.
Em relação à alternativa A, o poder do teste corresponde à probabilidade de rejeitar a hipótese nula, sendo
ela falsa. Logo, a alternativa A está correta.
Em relação à alternativa B, o poder do teste é o complementar da probabilidade do erro tipo II. Ou seja,
sendo 𝛽 a probabilidade do erro tipo II, o poder do teste é 1 − 𝛽. Logo, a alternativa B está correta.
Em relação à alternativa C, quanto maior o tamanho da amostra, maior o poder do teste, de fato. Logo, a
alternativa C está correta.
Em relação à alternativa D, o poder do teste depende do verdadeiro valor do parâmetro: quanto maior a
diferença entre o parâmetro verdadeiro e o parâmetro indicado na hipótese nula, maior o poder do teste.
Logo, a alternativa D está correta.
Em relação à alternativa E, o nível de significância também influencia o poder do teste - quanto maior o nível
de significância, maior o poder do teste. Logo, a alternativa E está incorreta.
Gabarito: E

        Receita Federal (Analista Tributário) Estatística                                                    9
        www.estrategiaconcursos.com.br                                                                      110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                     TESTES DE HIPÓTESES PARA A MÉDIA
Nessa seção, veremos os testes de hipóteses para a média de populações, que podem ter a variância
conhecida ou não. Essas duas situações estão associadas a distribuições distintas de probabilidade: no
primeiro caso, utilizamos a distribuição normal e, no segundo, a distribuição de t-Student.

Teste para Média com Variância Conhecida
                                                                                        ̅ também terá
Quando a população tiver variância conhecida 𝝈𝟐 e distribuição normal, a média amostral 𝑿
distribuição normal. Se a população apresentar outra distribuição, mas o tamanho da amostra for
suficientemente grande, também podemos aproximar a distribuição da média amostral a uma normal
(consequência do Teorema Central do Limite).

Os testes que levam em consideração uma distribuição normal (ainda que seja por aproximação) são
chamados de Testes Z.

Os limites entre a Região de Não Rejeição e a Região Crítica são calculados a partir da transformação para a
normal padrão:

                                                                       𝜎
                                                   𝐿 = 𝜇 ± 𝑧𝐶 × 𝑛
                                                                   √


Em que 𝑧𝐶 é o valor da normal padrão associado ao nível de confiança 1 − 𝛼 e ao tipo de teste (bilateral ou
unilateral); 𝜇 é o parâmetro indicado na hipótese nula; 𝜎 é o desvio padrão da população e 𝑛 é o tamanho
da amostra.

Por exemplo, vamos supor que o nível de confiança desejado seja 1 − 𝛼 = 90% (ou seja, nível de
significância 𝛼 = 10%) em um teste bilateral, conforme ilustrado a seguir.

                                                             𝑅𝑁𝑅
                                              𝑅𝐶         1 − 𝛼 = 90%         𝑅𝐶
                                          𝛼⁄ = 5%                          𝛼⁄ = 5%
                                            2                                2


                                                      LINF   𝜇     LSUP
Nesse caso, precisamos dos valores que delimitam 5% da distribuição abaixo de LINF e 5% acima de LSUP.

Utilizando a tabela normal padrão, verificamos que o valor crítico é 𝑧𝐶 = 1,64, pois 𝑃(𝑍 < 1,64) = 0,95.

        Receita Federal (Analista Tributário) Estatística                                                  10
        www.estrategiaconcursos.com.br                                                                   110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Vamos considerar, ainda, que o desvio padrão populacional seja 𝜎 = 1 e que o tamanho da amostra seja
𝑛 = 16. Supondo que o parâmetro indicado na hipótese nula seja 𝜇 = 2, os limites para a média amostral
serão:

                                                      1                     1
                                 𝐿 = 2 ± 1,64 ×              = 2 ± 1,64 ×     = 2 ± 0,41
                                                    √16                     4

Para esse exemplo, rejeitamos a hipótese nula, caso a média amostral seja 𝑋̅ < 1,59 ou se 𝑋̅ > 2,41.

                                                                                           𝑥̅ −𝜇
         A transformação para a normal padrão da média amostral 𝑥̅ observada 𝑧𝑡 =            𝜎     pode ser
                                                                                            √𝑛
         chamada estatística do teste.

Outra forma de decidir se vamos rejeitar ou não a hipótese nula é comparar a estatística do teste com o
valor crítico da normal padrão 𝑧𝐶 . Assim, a hipótese nula será rejeitada se a estatística do teste for maior
que o limite crítico 𝑧𝐶 , em módulo.

(2019 – Instituto Federal de Educação, Ciência e Tecnologia da Paraíba) Um atleta, querendo levantar
dinheiro para participar de campeonatos, compra uma máquina de empacotar biscoitos caseiros em
embalagens de 300g. Para aferir se a máquina está embalando corretamente o atleta tomou uma amostra
de 1500 embalagens, que apresentou uma média de 285g e desvio padrão de 15g. Com os resultados do
experimento realizado pelo atleta proporcionam evidências suficientes para concluir que a máquina não está
trabalhando conforme o esperado. Nível de confiança de 99%.
Sabendo que F(z) é a função de distribuição acumulada da normal padrão, onde F(1,3) ≅ 0,90, F(1,64) ≅ 0,95,
F(1,96) ≅ 0,975, F(2,58) ≅ 0,995
Observando o problema acima, responda, qual teste deve ser realizado e quais os valores críticos?
a) Teste bilateral e valores críticos 1,96 e -1,96
b) Teste bilateral e valores críticos 1,3 e -1,3
c) Teste unilateral à esquerda e valor crítico igual a 2,33
d) Teste unilateral à direita e valor crítico igual a 2,33
e) Teste bilateral e valores críticos 2,58 e -2,58


         Receita Federal (Analista Tributário) Estatística                                                    11
         www.estrategiaconcursos.com.br                                                                       110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Comentários:
Nesse caso, a máquina precisa empacotar corretamente, nem a mais (senão, o atleta terá prejuízo), nem a
menos (senão, o cliente será lesado). Portanto, o teste deve ser bilateral.
Para um nível de confiança 1 − 𝛼 = 99%, isto é, nível de significância de 𝛼 = 1%, a área á direita do limite
superior (e à esquerda do limite inferior) deve ser 𝛼⁄2 = 0,5%, como ilustrado a seguir.

                                                             𝑅𝑁𝑅
                                                         1 − 𝛼 = 99%
                                                𝑅𝐶                        𝑅𝐶
                                           𝛼⁄ = 0,5%                   𝛼⁄ = 0,5%
                                             2                           2
                                                      LINF   𝜇     LSUP
Considerando que a tabela padrão apresentada apresenta a função de distribuição acumulada, precisamos
do valor de z que corresponde a uma probabilidade acumulada F(z) = P(Z ≤ z) = 0,5% + 99% = 99,5%.
Pela tabela, vemos que esse valor é z = 2,58, pois F(2,58) ≅ 0,995.
Portanto, os valores críticos, na curva normal padrão, são -2,58 e 2,58.
Gabarito: E.


(VUNESP/2019 – TJ-SP) Um teste de hipóteses consistirá em testar, ao nível de significância de 5%, se a vida
média µ das lâmpadas produzidas por uma indústria é igual a 2 000 horas, em face da hipótese alternativa
de µ ser diferente de 2 000 horas. A população das vidas das lâmpadas produzidas é normalmente
distribuída, de tamanho infinito e variância conhecida. Com base em uma amostra aleatória de 100 lâmpadas
da população que apresentou uma vida média de 2 050 horas, foi realizado o teste. Seja z o valor do escore
da distribuição normal padrão (Z) tal que a probabilidade P(ǀZǀ ≤ z) = 95%. O valor do escore reduzido
encontrado, por meio dos dados da amostra, para comparar com o valor de z foi igual a 2,5.
O desvio padrão populacional é de
a) 500 horas
b) 400 horas
c) 280 horas
d) 100 horas
e) 200 horas
Comentários:
O enunciado apresenta os seguintes dados:
o Média 𝜇 = 2000 (hipótese nula a ser testada);
o Tamanho da amostra 𝑛 = 100;
o Valor observado 𝑥̅ = 2050; e
o Escore reduzido encontrado (estatística do teste): 𝑧 = 2,5.

        Receita Federal (Analista Tributário) Estatística                                                12
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Para calcular o desvio padrão populacional 𝜎, com base nesses dados, devemos utilizar a transformação
entre a normal e a normal padrão:
                                                                         𝑥̅ − 𝜇
                                                       𝑧=                   𝜎
                                                                         √100
Substituindo os dados fornecidos, temos:
                                                       2050 − 2000
                                                 2,5 =       𝜎
                                                            10
                                                         𝜎
                                                    2,5.    = 50
                                                         10
                                                  𝜎 = 50 × 4 = 200
Gabarito: E
                                                            ==219a34==

(FGV/2022 – TJDFT) Deseja-se testar a média populacional μ, sendo as hipóteses:
                                            𝐻0 : 𝜇 = 600 𝑒 𝐻1 : 𝜇 > 600
Suponha que o tamanho da amostra seja n = 100, a variância seja conhecida e igual a σ2 = 400 e a
probabilidade de ocorrer o erro do tipo I, 2,5%.
O poder do teste, quando a média, sob a hipótese alternativa, for 𝜇 = 608 é, aproximadamente:
a) 82,3%;
b) 87,2%;
c) 92,2%;
d) 97,7%;
e) 100%.
Para resolver essa questão, considere a tabela normal padrão P(Z > Z0) fornecida na prova, parcialmente
replicada a seguir.

        Receita Federal (Analista Tributário) Estatística                                           13
        www.estrategiaconcursos.com.br                                                              110

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 12

Comentários:
Essa questão trabalha pede o poder do teste. O primeiro passo é calcularmos o limite da região crítica,
considerando o parâmetro indicado na hipótese nula 𝜇, sabendo que se trata de um teste unilateral à direita
(limite crítico superior somente):
                                                         𝜎
                                            𝐿 = 𝜇 + 𝑧.
                                                        √𝑛
Para isso, o enunciado informa que:
•    O parâmetro indicado na hipótese nula é 𝜇 = 600;
•    A variância da população é σ2 = 400, logo o desvio padrão é 𝜎 = √400 = 20;
•    O tamanho da amostra é 𝑛 = 100, logo a raiz quadrada é √𝑛 = 10.
Para obtermos o valor de z, o enunciado informa que a probabilidade de ocorrer o erro tipo I (nível de
significância) é 𝛼 = 2,5% = 0,025. Assim, precisamos do valor de Z0 tal que P(Z > Z0) = 0,025:

                                                                              𝛼 = 2,5%

                                                                         Z0
Pela tabela, observamos que Z0 = 1,96 ≅ 2. Agora, podemos encontrar o limite superior:

                                                              20
                                         𝐿 = 600 + 2 ×           = 600 + 4 = 604
                                                              10

O poder do teste corresponde à probabilidade de rejeitar a hipótese nula (ou seja, de observarmos um
resultado maior que esse limite), considerando que o parâmetro verdadeiro é 𝜇 = 608 (hipótese nula falsa).
Para isso, utilizamos a fórmula da transformação para 𝐿 = 604, considerando o parâmetro verdadeiro:

                                                       604 − 608 −4
                                              𝑧=                =   = −2
                                                          20      2
                                                          10

Assim, o poder do teste é 1 − 𝛽 = 𝑃(𝑍 > −2), ilustrada a seguir:

                                              𝛽
                                                        Poder do teste

                                                  -2

Pela simetria da normal padrão, temos:
                                                  𝑃(𝑍 < −2) = 𝑃(𝑍 > 2)

          Receita Federal (Analista Tributário) Estatística                                             14
          www.estrategiaconcursos.com.br                                                               110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Pela tabela observamos que 𝛽 = 𝑃(𝑍 > 2) = 0,0228. Logo, o poder do teste é:
                                     1 − 𝛽 = 1 − 0,0228 = 0,9772 ≅ 97,7%
Gabarito: D

Teste para Média com Variância Desconhecida

Quando a variância da população for desconhecida, precisamos estimá-la pela variância amostral.
O estimador não tendencioso para a variância (variância amostral) é:

                                                   2
                                                     ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                                                 𝑠 =
                                                          𝒏−𝟏
Em que 𝑛 é o tamanho da amostra.

        Alternativamente, podemos calcular o estimador não tendencioso para a variância como:

                                                       ∑ 𝑥2            𝑛
                                               𝑠 2 = ( 𝑛 − 𝑥̅ 2 ) × 𝑛−1

Esse estimador vale para populações infinitas OU amostras extraídas com reposição.
Caso a população seja finita de tamanho 𝑁, e a amostra seja extraída sem reposição, é necessário aplicar o
                                                                            𝑵−𝒏
fator de correção, multiplicando a fórmula da variância amostral por 𝑵−𝟏.

Para calcular a estimativa para a variância da média amostral, dividimos essa estimativa da variância
populacional 𝑠 2 pelo tamanho da amostra 𝑛:
                                                                   2
                                                               𝑠
                                                        𝑠𝑋2̅ =
                                                               𝑛
E o desvio padrão da média amostral será (a raiz quadrada):

                                                                   𝑠2   𝑠
                                               𝑠𝑋̅ = √𝑠𝑋2̅ = √        =
                                                                   𝑛 √𝑛

        Receita Federal (Analista Tributário) Estatística                                              15
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Quando a população seguir distribuição normal (ou quando o tamanho da amostra permitir essa
aproximação), mas com variância desconhecida, utilizamos a distribuição t-Student, que é similar à normal,
porém mais achatada no centro e com caudas mais largas, ou seja, apresenta maior variabilidade.
Por ser baseado nessa distribuição de t-Student, esse teste pode ser chamado de teste T.


Sabendo que a média da distribuição é o parâmetro 𝝁 indicado na hipótese nula, a estatística do teste, que
corresponde à transformação da média amostral observada 𝑥̅ para a distribuição padronizada, é:

                                                                 𝑥̅ −𝜇
                                                        𝑡=         𝑠
                                                                  √𝑛

Essa estatística deve ser comparada ao valor crítico tabelado 𝑡𝐶 , considerando o nível de significância
desejado, o tipo de teste (bilateral, unilateral à esquerda ou unilateral à direita) e 𝒏 − 𝟏 graus de liberdade.


Alternativamente, podemos utilizar a fórmula da transformação para calcular os limites das regiões RC/RNR,
considerando o valor crítico 𝑡𝐶 .
Reorganizando a expressão acima, obtemos a fórmula para os limites críticos:

                                                                                   𝑠
                                           𝐿 = 𝜇 ± 𝑡𝐶 × 𝑠𝑋̅ = 𝜇 ± 𝑡𝐶 × 𝑛
                                                                               √

Por exemplo, suponha o mesmo nível de confiança 1 − 𝛼 = 90% do nosso exemplo anterior, um teste
bilateral e uma amostra de tamanho 𝑛 = 5.
Nessa situação, precisamos do valor de 𝑡, considerando 𝑛 − 1 = 4 graus de liberdade.

Se a probabilidade associada ao intervalo de confiança é de 90%, então a probabilidade associada aos valores
acima e abaixo desse intervalo é de 5%, como ilustrado abaixo.


                                           5%                                 5%

                                                        90%


                                                −𝑡𝐶         𝑋̅           𝑡𝐶

Logo, a probabilidade associada aos valores menores que 𝑡𝑐 é 𝑃(𝑇 < 𝑡𝐶 ) = 5% + 90% = 95%.
Assim, devemos buscar o valor de 𝑡𝐶 com 4 graus de liberdade, para o qual 𝑃(𝑇4 < 𝑡𝐶 ) = 0,95. Utilizando
uma tabela de t-Student, verificamos que 𝑡𝐶 ≅ 2,13, pois 𝑃(𝑇4 < 2,13) ≅ 0,95.
Agora, vejamos os demais parâmetros para calcular os limites do intervalo.

        Receita Federal (Analista Tributário) Estatística                                                    16
        www.estrategiaconcursos.com.br                                                                      110

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 12

Vamos supor que a variância amostral observada seja 𝑠 2 = 0,0125. Nesse caso, a variância da média
amostral será estimada por:

                                                       𝑠 2 0,0125
                                              𝑠𝑋2̅ =      =       = 0,0025
                                                       𝑛      5
E o desvio padrão da média amostral será estimado pela sua raiz quadrada:

                                             𝑠𝑋̅ = √𝑠𝑋2̅ = √0,0025 = 0,05

Portanto, supondo que a média populacional indicada na hipótese nula seja 𝜇 = 1, os limites da Região de
Não Rejeição são:
                    𝐿𝑅𝑁𝑅 = 𝜇 ± 𝑡 × 𝑠𝑋̅ = 1 ± 2,13 × 0,05 = 1 ± 0,1065 = [0,8935; 1,165]

(FGV/2022 – TCU) Assuma que o valor anual gasto para pagamento de pessoal em municípios de uma certa
região do Brasil possui distribuição normal com parâmetros desconhecidos. Em uma amostra de 16
municípios, observou-se um gasto médio de R$ 1.000.000,00 ao ano com desvio padrão amostral igual a R$
500.000,00. Gostaríamos de testar se o gasto médio para pagamento de pessoal desses municípios é
estatisticamente diferente de R$ 750.000,00.
O teste a ser usado e o valor da sua estatística de teste são, respectivamente:
a) teste T e a estatística de teste é igual a 2;
b) teste Z e a estatística de teste é igual a 1/2;
c) teste T e a estatística de teste é igual a 1/2;
d) teste F e a estatística de teste é igual a 1/2;
e) teste Z e a estatística de teste é igual a 2;
Comentários:
O enunciado informa que a população segue distribuição normal com parâmetros desconhecidos, ou seja,
tanto a média quanto a variância da população são desconhecidas.
Assim, temos um teste para a média com variância desconhecida, em que devemos utilizar a distribuição de
t-Student (teste T).
Para isso, o enunciado fornece os seguintes dados:
•    Tamanho da amostra 𝑛 = 16;
•    Gasto médio observado na amostra 𝑥̅ = 1.000.000; e
•    Desvio padrão amostral 𝑠 = 500.000.

          Receita Federal (Analista Tributário) Estatística                                          17
          www.estrategiaconcursos.com.br                                                             110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Ademais, o enunciado informa que o objetivo do teste é verificar se a média é estatisticamente diferente de
750.000. Ou seja, 𝜇 = 750.000 corresponde à hipótese nula e 𝜇 ≠ 750.000 corresponde à hipótese
alternatica.ao parâmetro da hipótese nula.
Assim, a estatística do teste é dada por:

                             𝑥̅ − 𝜇   1.000.000 − 750.000   250.000 250.000
                        𝑡=      𝑠   =                     =        =        =2
                                            500.000         500.000 125.000
                               √𝑛             √16              4

Já temos a resposta da questão, mas vale reforçar que, para decidirmos se rejeitamos ou não a hipótese
nula, comparamos essa estatística do teste ao valor tabelado da distribuição de t-Student com 𝒏 − 𝟏 = 15
graus de liberdade.

Gabarito: A


(FCC/2018 – TCE-RS) Uma população, referente aos comprimentos de certo cabo, é normalmente
distribuída, de tamanho infinito e com variância desconhecida. Deseja-se verificar se há indícios de que a
média 𝜇 dessa população seja diferente de 100 cm. Para isso foi retirada uma amostra aleatória de tamanho
9, que apresentou uma média igual a 𝑥̅ , em cm, e um desvio padrão igual a 6 cm. Foram formuladas as
hipóteses 𝐻0 : 𝜇 = 100𝑐𝑚 (hipótese nula) e 𝐻1 : 𝜇 ≠ 100𝑐𝑚 (hipótese alternativa), e o nível de significância
considerado foi de 5%. Para testar a hipótese nula, utilizou- se o teste t de Student.
A tabela abaixo fornece valores de 𝑡0,025 > 0, que representa o quantil da distribuição t de Student para n
graus de liberdade, em que 𝑡0,025 > 0 é o quantil da distribuição t de Student tal que a probabilidade
𝑃(𝑡 > 𝑡0,025 ) = 0,025.
Verificou-se que o valor que foi encontrado para 𝑥̅ foi o menor valor tal que 𝐻0 não é rejeitada.
Dados:

Então, 𝑥̅ é igual a:
a) 95,48 cm
b) 94,88 cm
c) 95,28 cm
d) 94,60 cm
e) 95,38 cm
Comentários:
A questão pede o valor de 𝑥̅ , que é o menor valor para o qual a hipótese nula não é rejeitada, ou seja, o
limite inferior da Região de Não Rejeição, calculado como:
                                                                    𝑠
                                        𝑥̅ = 𝜇 − 𝑡 × 𝑠𝑋̅ = 𝜇 − 𝑡 ×
                                                                   √𝑛
Para isso, o enunciado apresenta os seguintes dados:

         Receita Federal (Analista Tributário) Estatística                                                    18
         www.estrategiaconcursos.com.br                                                                      110

                                       


---

    Equipe Exatas Estratégia Concursos
    Aula 12

•    Média da população (parâmetro sendo testado): 𝜇 = 100 cm
•    Desvio padrão amostral: 𝑠 = 6
•    Tamanho da amostra: 𝑛 = 9
Com base nessas informações, primeiro calculamos o valor do desvio padrão da média amostral:
                                                         𝑠        6       6
                                                 𝑠𝑋̅ =        =       =     =2
                                                √𝑛 √9                     3
O valor crítico 𝑡 deve ser obtido para 𝑛 − 1 = 8 graus de liberdade. Pela tabela fornecida, observamos que
𝑡 = 2,31. Logo, o valor mínimo é:
                                     𝑥̅ = 100 − 2,31 × 2 = 100 − 4,62 = 95,38
Gabarito: E

          Receita Federal (Analista Tributário) Estatística                                            19
          www.estrategiaconcursos.com.br                                                               110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                TESTES DE HIPÓTESES PARA PROPORÇÕES
Agora, veremos os testes de hipóteses para proporções, utilizada para populações que seguem distribuições
de Bernoulli (em que cada elemento é categorizado em sucesso ou fracasso), com proporção de sucesso 𝑝
desconhecida.

Teste para a Proporção de uma População

Para iniciar o teste para a proporção, é feita uma suposição a respeito da proporção populacional 𝑝 (hipótese
nula), a qual será testada a partir da proporção amostral observada 𝑝̂ .

A estatística do teste pode ser calculada pela fórmula da transformação para a normal padrão para uma
amostra suficientemente grande (aproximação baseada no Teorema do Limite Central).

Para isso, consideramos que a média da distribuição é 𝐸(𝑝̂ ) = 𝑝 e que a variância da distribuição é a razão
entre a variância populacional e o tamanho da amostra 𝑛:

                                                             𝑉𝑎𝑟(𝑝) 𝑝. 𝑞
                                              𝑉𝑎𝑟(𝑝̂ ) =           =
                                                               𝑛     𝑛

Em que 𝑞 = 1 − 𝑝. E o desvio (ou erro) padrão da distribuição é a raiz quadrada desse resultado:

                                                                          𝑝. 𝑞
                                               𝜎𝑝̂ = √𝑉𝑎𝑟(𝑝̂ ) = √
                                                                           𝑛

Portanto, a estatística do teste é dada por:

                                                            𝑝̂−𝑝   𝑝̂−𝑝
                                                    𝑧𝑡 = 𝜎 =        𝑝.𝑞
                                                              ̂
                                                              𝑝    √𝑛

Por exemplo, vamos considerar uma grande empresa que alega ter o mesmo número de homens e mulheres
dentre os seus colaboradores, ou seja, que a proporção de homens seja de 50% (hipótese nula):
                                                      𝐻0 : 𝑝 = 0,5
Para testar essa hipótese, é extraída uma amostra de 100 colaboradores, dos quais 55 são homens. A
proporção encontrada na amostra é de:
                                                            55
                                                   𝑝̂ =         = 0,55
                                                            100
Para calcular a estatística desse teste, vamos primeiro calcular a variância da proporção amostral.

        Receita Federal (Analista Tributário) Estatística                                                 20
        www.estrategiaconcursos.com.br                                                                   110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Sendo 𝑝 = 0,5 e, portanto, 𝑞 = 1 − 𝑝 = 0,5, a variância da proporção amostral é a razão entre a variância
populacional e o tamanho da amostra:
                                                     𝑝. 𝑞 0,5 × 0,5
                                        𝑉𝑎𝑟(𝑝̂ ) =       =          = 0,0025
                                                      𝑛      100

E o desvio padrão da proporção amostral é a raiz quadrada 𝜎𝑝̂ = √𝑉𝑎𝑟(𝑝̂ ) = √0,0025 = 0,05.

A estatística do teste é dada por:
                                               𝑝̂ − 𝑝 0,55 − 0,5 0,05
                                        𝑧𝑡 =          =         =      =1
                                                  𝜎𝑝̂    0,05     0,05

Essa estatística deve ser comparada ao valor crítico 𝑧𝐶 , para o nível de confiança desejado e o tipo de teste
(bilateral ou unilateral).
                                                             ==219a34==

Alternativamente, pode-se utilizar a mesma fórmula da transformação para calcular o limite da Região
Crítica (ou os limites, no caso do teste bilateral), considerando o valor crítico, associado ao nível de confiança.
Reorganizando a expressão da estatística do teste, obtemos limite para a proporção amostral:

                                                                               𝑝.𝑞
                                                   𝐿 = 𝑝 ± 𝑧𝐶 × √ 𝑛

Essas fórmulas pressupõem uma população infinita ou amostras extraídas com reposição.
Caso a população seja finita e as amostras extraídas sem reposição, será necessário aplicar o fator de
                                                                                                             𝑵−𝒏
correção para população finita. Para isso, devemos multiplicar a variância da proporção amostral por 𝑵−𝟏:

                                                                          𝑝. 𝑞 𝑁 − 𝑛
                                                𝑉𝑎𝑟∗ (𝑝̂ ) =                  ×
                                                                           𝑛    𝑁−1

(CESPE/2018 – ABIN) Em uma fábrica de ferragens, o departamento de controle de qualidade realizou testes
na linha de produção de parafusos. Os testes ocorreram em dois campos: comprimento dos parafusos e
frequência com que esse comprimento fugia da medida padrão. Historicamente, o comprimento médio
desses parafusos é 3 cm, e o desvio padrão observado é 0,3 cm. Foram avaliados 10.000 parafusos durante
uma semana. Desses, 1.000 fugiram às especificações técnicas da gerência: o comprimento do parafuso
deveria variar de 2,4 cm a 3,6 cm. O chefe da linha de produção, porém, insiste em afirmar que, em média,
4% da produção de parafusos fogem às especificações. O departamento de controle de qualidade assume
que os comprimentos dos parafusos têm distribuição normal.


         Receita Federal (Analista Tributário) Estatística                                                      21
         www.estrategiaconcursos.com.br                                                                        110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

A partir dessa situação hipotética, julgue os itens subsequentes, considerando que Φ(1) = 0,841, Φ(1,65) =
0,95, Φ(2) = 0,975 e Φ(2,5) = 0,994, em que Φ(z) é a função distribuição normal padronizada acumulada, e
                                             0,0384
que 0,002 seja valor aproximado para √10.000.

Com base nos dados apresentados, pode-se rejeitar, com significância de 5%, a afirmação do chefe da linha
de Produção.
Comentários:
O enunciado informa que o chefe da linha de Produção afirma que 4% dos parafusos fogem às especificações:
                                                      𝐻0 : 𝑝 = 0,04
Considerando-se a hipótese nula (𝑝 = 0,04 e, portanto, 𝑞 = 1 − 𝑝 = 0,96), a variância da proporção da
amostra extraída, de tamanho n = 10.000, é:
                                       𝑝. 𝑞 0,04 × 0,96 0,0384
                                     𝑉𝑎𝑟(𝑝̂ ) =
                                             =             =
                                         𝑛        10.000     10.000
Logo, o desvio padrão da proporção amostral, raiz quadrada da variância (considerando a aproximação
                           0,0384
indicada no enunciado √10.000 ≅ 0,002) é:

                                                                0,0384
                                       𝜎𝑝̂ = √𝑉𝑎𝑟(𝑝̂ ) = √             ≅ 0,002
                                                                10.000
Agora, vamos calcular o valor de zC, considerando o nível de significância 𝛼 = 5% (logo, é 1 − 𝛼 = 95%).
O problema é a proporção de defeito superar a proporção indicada (se a proporção de defeito for menor,
será ainda melhor para a empresa). Assim, temos um teste unilateral à direita, sendo a hipótese alternativa:
                                                      𝐻1 : 𝑝 > 0,04

                                                  1 − 𝛼 = 95%
                                                                     𝛼 = 5%
                                                            0   zC
Ou seja, precisamos do valor de z cuja função de distribuição acumulada é P(Z < z C) = 0,95. Pela tabela
fornecida na questão, observamos que o valor crítico é zC = 1,65, pois P(Z < 1,65) = 0,95.
Portanto, a proporção amostral máxima para que a hipótese nula não seja rejeitada é:
                     𝐿 = 𝑝 + 𝑧 × 𝜎𝑝̂ = 0,04 + 1,65 × 0,002 = 0,04 + 0,0033 = 0,0433
Porém, na amostra extraída pelo departamento de controle, observou-se que, de n = 10.000 parafusos, 1.000
fugiam à especificação, ou seja, a proporção observada foi de:
                                                 1.000
                                                  𝑝̂ = = 0,1
                                                10.000
Por ser muito superior ao limite máximo da proporção amostral aceitável, a hipótese nula deve ser rejeitada.
Gabarito: Certo.

        Receita Federal (Analista Tributário) Estatística                                                22
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                                   P-VALOR
O p-valor, também denominado nível descritivo ou probabilidade de significância, é uma outra forma de
analisar o resultado do teste de hipóteses, para decidirmos se vamos rejeitar ou não a hipótese nula.

O p-valor é a probabilidade de obter um valor mais extremo ou igual ao resultado observado, considerando
a hipótese nula como verdadeira. Em seguida, comparamos o p-valor calculado com o nível de significância
𝜶 para decidir se vamos rejeitar ou não a hipótese nula.

Se o p-valor for menor que o nível de significância 𝜶, então o resultado do teste está na região crítica e a
hipótese nula deve ser rejeitada. Caso contrário, a hipótese nula não é rejeitada.

                                             p-valor < 𝜶 → Rejeitar 𝑯𝟎

                                          p-valor ≥ 𝜶 → Não Rejeitar 𝑯𝟎

Vamos supor que estejamos testando a hipótese nula 𝐻𝑜 : 𝜇 = 2 em um teste unilateral à esquerda e que a
média amostral observada tenha sido 𝑋̅ = 1,85.

Sabendo que o p-valor é a probabilidade de obter um valor mais extremo ou igual, neste caso, ele é a
probabilidade de obter um valor igual ou inferior a 𝑋̅ = 1,85, pelo fato de a região crítica estar à esquerda:

                                         p-valor


                                            𝑋̅ = 1,85   𝜇=2

Para calcular o p-valor do resultado observado, primeiro calculamos a estatística do teste. Tratando-se de
um teste para a média de uma população normal com variância conhecida (Teste Z), fazemos:

                                                             𝑥̅ − 𝜇
                                                        𝑧=      𝜎
                                                               √𝑛

        Receita Federal (Analista Tributário) Estatística                                                  23
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

No nosso exemplo, temos 𝑥̅ = 1,85 e 𝜇 = 2. Supondo que a variância populacional é 𝜎 = 1 e que o tamanho
da amostra seja 𝑛 = 100, a estatística do teste é:
                                    𝑥̅ − 𝜇 1,85 − 2   −0,15 −0,15
                               𝑧=      𝜎 =          =      =      = −1,5
                                              1         1    0,1
                                      √𝑛    √100       10

Agora, para calcular o p-valor, recorremos à tabela normal padrão. Utilizando uma tabela normal padrão,
podemos verificar que 𝑃(0 < 𝑍 < 1,5) = 0,4332. Pela simetria da normal padrão, temos:
                                            𝑃(−1,5 < 𝑍 < 0) = 0,4332
E a probabilidade de 𝑃(𝑍 < −1,5) é dada pela diferença:
                 𝑃(𝑍 < −1,5) = 𝑃(𝑍 < 0) − 𝑃(−1,5 < 𝑍 < 0) = 0,5 − 0,4332 = 0,0668
                                                       𝑝 = 6,68%
                                                            ==219a34==

Assim, se o nível de significância for 𝛼 = 5%, teremos 𝒑 > 𝜶 e, então, não rejeitaremos a hipótese nula;
porém, se o nível de significância for 𝛼 = 10%, teremos 𝒑 < 𝜶, e devemos rejeitar a hipótese nula.

Para o teste unilateral à direita, o p-valor é a probabilidade de se observar um valor maior que o resultado
observado, porque a região crítica está à direita:

                                                                                   p-valor

                                                                         𝜇    𝑧𝑡


E para o teste bilateral, o p-valor se refere aos dois extremos.

Considerando o mesmo exemplo em que a estatística do teste foi zt = -1,5, o p-valor é a soma das
probabilidades 𝑃(𝑍 < −1,5) e 𝑃(𝑍 > 1,5):

                                      p-valor                                   p-valor


                                            𝑧 = −1,5                         𝑧 = 1,5


Considerando a simetria da distribuição normal, as probabilidades 𝑃(𝑍 < −𝑧𝑡 ) e 𝑃(𝑍 > 𝑧𝑡 ) são iguais e,
assim, o p-valor em um teste bilateral considerando será o dobro do p-valor em um teste unilateral, para
essa distribuição.


        Receita Federal (Analista Tributário) Estatística                                                24
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

(CESPE/2017 – TCE/PE) Para avaliar se a proporção p de itens defeituosos enviados por um fornecedor estava
acima do valor pactuado de 0,025, um analista, a partir de uma amostra aleatória de itens enviada por esse
fornecedor, testou a hipótese nula 𝐻𝑜 : 𝑝 ≤ 0, 025 contra a hipótese alternativa 𝐻1 : 𝑝 > 0, 025, utilizando
nível de significância 𝛼 = 1%.
A respeito dessa situação hipotética, julgue o seguinte item.
Caso o P-valor do teste efetuado pelo analista seja igual a 0,005, é correto concluir que a afirmação proposta
na hipótese nula seja verdadeira.
Comentários:
Para sabermos se devemos rejeitar ou não a hipótese nula, devemos comparar o p-valor e o nível de
significância 𝛼.
O enunciado informa que 𝛼 = 1% e o item informa que p-valor = 0,005 = 0,5%. Ou seja, temos:
                                                        p-valor < 𝛼
Portanto, devemos rejeitar a hipótese nula, isto é, concluir que ela é falsa.
Gabarito: Errado.


(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue as afirmativas a seguir:
O p-valor de um teste é o maior valor para o nível de significância a partir do qual a hipótese nula não poderá
ser rejeitada.
Comentários:
O item afirma que o p-valor é o maior valor para o nível de significância.
Porém, o p-valor é a probabilidade de obter um resultado tão ou mais extremo que o valor observado no
teste. Ou seja, ele não define limite algum. Por isso, o item está errado.
Resposta: Errado.

         Receita Federal (Analista Tributário) Estatística                                                    25
         www.estrategiaconcursos.com.br                                                                      110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                    TESTE QUI-QUADRADO
Por se tratar de um teste não paramétrico, o teste qui-quadrado (ou chi-quadrado) não pressupõe uma
distribuição específica para a variável, podendo ser utilizado inclusive para variáveis qualitativas nominais
(aquelas que não são ordenáveis).

Como os demais testes de hipóteses, o teste qui-quadrado é conduzido assumindo a hipótese nula como
verdadeira. Calcula-se, então, a estatística do teste (também chamado de qui-quadrado observado):

                                                            (𝑶𝒊 −𝑬𝒊 )𝟐
                                                  𝓧𝟐 = ∑
                                                               𝑬𝒊


Em que 𝑬𝒊 é o valor esperado para o teste, de acordo com a hipótese nula, e 𝑶𝒊 é o valor observado no
teste.

Quanto maior for o desvio em relação ao valor esperado, maior será o resultado da estatística do teste 𝒳 2
e haverá uma menor chance de a hipótese nula ser verdadeira. O teste será rejeitado se a sua estatística
for maior do que o limite crítico definido (qui-quadrado tabelado):

                                          𝓧𝟐𝒕𝒆𝒔𝒕𝒆 > 𝓧𝟐𝒄𝒓í𝒕𝒊𝒄𝒐 → Rejeitar 𝑯𝟎

                                       𝓧𝟐𝒕𝒆𝒔𝒕𝒆 ≤ 𝓧𝟐𝒄𝒓í𝒕𝒊𝒄𝒐 → Não Rejeitar 𝑯𝟎

Existem três tipos de teste qui-quadrado, quais sejam de aderência, independência e homogeneidade.

Teste de Aderência

Os testes de aderência verificam se a população pode ser descrita por determinado modelo probabilístico,
isto é, se ela segue determinadas proporções, com base nos resultados observados na amostra. Essas
proporções são indicadas na hipótese nula do teste.

Quando atribuímos proporções a diversas categorias da população, temos uma distribuição multinomial
(generalização da distribuição binomial para mais de 2 categorias). Por isso, é comum utilizarmos o teste qui-
quadrado de aderência para testarmos se a população se adequa a determinado modelo multinomial.

Por exemplo, vamos verificar se as proporções dos adultos que concluíram até o ensino fundamental, até o
ensino médio ou o ensino superior seguem as proporções 20%, 50% e 30%, o que consiste na hipótese nula.

        Receita Federal (Analista Tributário) Estatística                                                  26
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Vamos supor que, de uma amostra de 100 pessoas, tenhamos encontrado 15 adultos que estudaram até o
nível fundamental, 60 adultos que estudaram até o ensino médio e 25 adultos que chegaram ao ensino
superior. De acordo com a hipótese nula, temos os seguintes valores esperados:

                                            Fundamental: 20% x 100 = 20

                                                  Médio: 50% x 100 = 50

                                                Superior: 30% x 100 = 30

Então, a estatística do teste é a soma das seguintes razões:

                                             (𝑶𝒊 −𝑬𝒊 )𝟐        (𝟏𝟓−𝟐𝟎)𝟐           (−5)2        25       5
                           Fundamental:                    =                  =            =        =
                                                  𝑬𝒊              𝟐𝟎              20           20       4

                                        (𝑶𝒊 −𝑬𝒊 )𝟐         (𝟔𝟎−𝟓𝟎)𝟐          (10)2       100
                               Médio:                  =                 =           =          =2
                                           𝑬𝒊                𝟓𝟎              50           50

                                          (𝑶𝒊 −𝑬𝒊 )𝟐        (𝟐𝟓−𝟑𝟎)𝟐          (−5)2        25       5
                              Superior:                =                 =             =        =
                                             𝑬𝒊                𝟑𝟎              30          30       6

                                     5    5 15 + 24 + 10 39 13
                              𝒳2 =     +2+ =            =    =   = 3,25
                                     4    6      12       12   4

Para obtermos o valor crítico da tabela da distribuição qui-quadrado, precisamos do nível de significância 𝛼
e do número de graus de liberdade 𝒌, que deve ser calculado subtraindo-se 1 unidade do número 𝐿 de linhas
da tabela de contingência e 1 unidade do número 𝐶 de colunas (desconsiderando-se os campos de títulos
ou totais). Por fim, multiplicamos os resultados:

                                                   𝒌 = (𝑳 − 𝟏)(𝑪 − 𝟏)

Entretanto, essa subtração deve ser feita apenas se houver mais de uma linha/coluna (para não
multiplicarmos por zero).

Se houver apenas 𝐿 = 1 linha, o número de graus de liberdade do teste será:

                                                           𝒌=𝑪−𝟏

E se houver apenas 𝐶 = 1 coluna, o número de graus de liberdade será:

                                                           𝒌=𝑳−𝟏

Embora não tenha sido apresentada uma tabela para o nosso exemplo, podemos construi-la:

                                      Fundamental                 Médio                Superior             Total

            Valores observados              15                      60                     25               100

        Receita Federal (Analista Tributário) Estatística                                                           27
        www.estrategiaconcursos.com.br                                                                              110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Observamos que há 𝐿 = 1 linha e 𝐶 = 3 colunas de dados. Logo, o número de graus de liberdade é:

                                                𝑘 =𝐶−1= 3−1 =2

Abaixo, inserimos os valores da distribuição qui-quadrado para 2 graus de liberdade. A probabilidade
𝑃(𝒳22 < 𝑥) indicada na tabela corresponde justamente ao nível de confiança 𝟏 − 𝜶:

                                                    1−𝛼
                                                               𝛼
                                                              𝑥

 𝑃(𝒳22 < 𝑥)    0,005   0,01    0,025     0,05     0,1       0,25   0,5    0,75      0,9   0,95    0,975   0,99   0,995
     𝑥         0,01    0,02     0,05     0,10    0,21       0,58   1,39   2,77   4,61     5,99    7,38    9,21   10,60


Podemos observar que a estatística do teste 𝓧𝟐 = 𝟑, 𝟐𝟓 está entre 𝑥 = 2,77 (associado ao nível de
confiança 1 − 𝛼 = 0,75, logo ao nível de significância 𝛼 = 0,25) e 𝑥 = 4,61 (associado ao nível de confiança
1 − 𝛼 = 0,90, logo ao nível de significância 𝛼 = 0,10).

Assim, concluímos que a hipótese nula de que a população segue a proporção de 20%, 50% e 30% seria
rejeitada para um nível de significância 𝛼 ≥ 0,25, mas não seria rejeitada para um nível 𝛼 ≤ 0,10.

Teste de Independência

Já o teste qui-quadrado de independência tem como objetivo verificar se há uma relação de independência
entre duas variáveis (dois tipos de categorias) ou não. A hipótese nula considera que as variáveis são
independentes, ou seja, que as proporções de uma variável são sempre as mesmas, independentemente da
outra variável.

Vamos então verificar hipoteticamente se o nível de educação de uma população afeta o seu salário, por
exemplo. Para isso, vamos classificar os salários em 3 categorias: elevado, intermediário e baixo (embora
possamos classificar em um maior número de categorias, caso necessário). Vamos supor que, de uma
amostra de 100 pessoas, tenha sido verificado em que categoria salarial as pessoas se encontram, e o
resultado está indicado a seguir:

                                          Elevado       Intermediário       Baixo         Total
                       Fundamental           0                5              10             15
                          Médio              5               45              10             60
                         Superior            5               15               5             25
                          Total              10              65              25            100

Considerando a hipótese nula de que o nível de educação e a faixa salarial são independentes (ou seja, de
que uma variável não influencia na outra), esperamos ter as mesmas proporções totais em todos os campos.


        Receita Federal (Analista Tributário) Estatística                                                            28
        www.estrategiaconcursos.com.br                                                                               110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Isso significa que, para calcular o valor esperado do campo 𝐸𝑖𝑗 , devemos multiplicar o total da linha 𝑖 pelo
total da coluna 𝑗 e dividir pelo total das pessoas:

                                                            𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                   𝐸𝑖𝑗 =
                                                                𝑡𝑜𝑡𝑎𝑙

Na tabela a seguir, efetuamos esses cálculos para obter os valores esperados de cada campo:

                                         Elevado            Intermediário                Baixo             Total
                                   15 × 10                 15 × 65                   15 × 25
                Fundamental                = 1,5                   = 9,75                    = 3,75            15
                                     100                     100                       100
                                    60 × 10                 60 × 65                   60 × 25
                   Médio                    =6                      = 39                      = 15             60
                                      100                     100                       100
                                   25 × 10                 25 × 65                   25 × 25
                  Superior                 = 2,5                   = 16,25                   = 6,25            25
                                     100                     100                       100
                    Total               10                       65                        25              100

                                                                                                               (𝑶𝒊 −𝑬𝒊 )𝟐
Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado                                      .
                                                                                                                  𝑬𝒊


                                    Elevado                    Intermediário                           Baixo
                                (0 − 1,5)2                  (5 − 9,75)2                  (10 − 3,75)2
            Fundamental                    = 1,5                        ≅ 2,314                       ≅ 10,417
                                   1,5                         9,75                         3,75
                                (5 − 6)2                    (45 − 39)2                        (10 − 15)2
               Médio                     ≅ 0,167                       ≅ 0,923                           ≅ 1,667
                                   6                           39                                15
                                (5 − 2,5)2                (15 − 16,25)2                       (5 − 6,25)2
              Superior                     = 2,5                        ≅ 0,096                           = 0,25
                                   2,5                       16,25                               6,25

E somamos todos os valores para obter a estatística do teste:

            𝒳 2 ≅ 1,5 + 0,167 + 2,5 + 2,314 + 0,923 + 0,096 + 10,417 + 1,667 + 0,25 = 19,834

Para esse exemplo, temos uma tabela com C = 3 colunas de dados e L = 3 linhas de dados, logo, o número
de graus de liberdade da distribuição qui-quadrado é:

                                          𝑘 = (𝐿 − 1) × (𝐶 − 1) = 2 × 2 = 4

A tabela abaixo indica as probabilidades 𝑃(𝒳42 < 𝑥) para a distribuição qui-quadrado com 𝑘 = 4.

 𝑃(𝒳42 < 𝑥) 0,005        0,01    0,025     0,05    0,1       0,25    0,5      0,75     0,9      0,95     0,975 0,99 0,995
     𝑥       0,21        0,30     0,48     0,71    1,06      1,92    3,36     5,39     7,78     9,49     11,14 13,28 14,86

Podemos observar que a estatística do teste foi superior a todos os valores de 𝑥, ou seja, ainda que o nível
de significância fosse 𝛼 = 0,005 (nível de confiança 1 − 𝛼 = 0,995), rejeitaríamos a hipótese nula,
concluindo que as variáveis são dependentes, ou seja, que há influência de uma variável na outra.

        Receita Federal (Analista Tributário) Estatística                                                                       29
        www.estrategiaconcursos.com.br                                                                                          110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Teste de Homogeneidade

Os testes de homogeneidade verificam se as distribuições de probabilidade de uma variável são as mesmas
para as subpopulações de interesse (subgrupos da população) ou não. A hipótese nula é a de
homogeneidade, isto é, de que as distribuições são as mesmas.

Podemos verificar, por exemplo, se as proporções dos três níveis de educação (variável de interesse) são as
mesmas em todas as 5 regiões do país (subpopulações). Vamos supor que tenhamos obtido os seguintes
resultados em uma amostra de tamanho 𝑛 = 100:

                                          Fundamental Médio Superior                 Total
                                  N            4       11      3                      18
                                 NE            2       10      4                      16
                                 CO            3       14      5                      22
                                 SE            4       13      7                      24
                                  S            2       12      6                      20
                                Total         15       60     25                      100

Considerando a hipótese nula de que a distribuição é a mesma para todas as subpopulações, então
esperamos que as proporções dos níveis de ensino sejam as mesmas para todas as regiões.

Para isso, o valor esperado de cada campo deve ser calculado pelo produto do total da linha pelo total da
coluna, dividido pelo total da amostra (assim como fizemos para o teste de independência):

                                                            𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                  𝐸𝑖𝑗 =
                                                                𝑡𝑜𝑡𝑎𝑙

Os valores esperados para o nosso exemplo são:

                           Fundamental             Médio                      Superior       Total
                           18 × 15            18 × 60                     18 × 25
                    N              = 2,7              = 10,8                      = 4,5       18
                             100                100                         100
                           16 × 15            16 × 60                      16 × 25
                   NE              = 2,4               = 9,6                       =4         16
                             100                100                          100
                           24 × 15            22 × 60                     22 × 25
                   CO              = 3,3              = 13,2                      = 5,5       22
                             100                100                         100
                           24 × 15            24 × 60                      24 × 25
                   SE              = 3,6              = 14,4                       =6         24
                             100                100                          100
                            20 × 15            20 × 60                     20 × 25
                    S               =3                 = 12                        =5         20
                              100                100                         100
                  Total          15                  60                         25           100

                                                                                                   (𝑶𝒊 −𝑬𝒊 )𝟐
Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado                          :
                                                                                                      𝑬𝒊

        Receita Federal (Analista Tributário) Estatística                                                           30
        www.estrategiaconcursos.com.br                                                                              110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                 Fundamental                        Médio              Superior
                                         2                                2
                       N       (4 − 2,7)                  (11 − 10,8)               (3 − 4,5)2
                                          ≅ 0,63                       ≅0                      = 0,5
                                  2,7                         10,8                      4,5
                       NE      (2 − 2,4)2                (10 − 9,6)2                  (4 − 4)2
                                          ≅ 0,07                     ≅ 0,02                    =0
                                  2,4                        9,6                          4
                       CO      (3 − 3,3)2               (14 − 13,2)2               (5 − 5,5)2
                                          ≅ 0,03                      ≅ 0,05                   ≅ 0,05
                                  3,3                       13,2                       5,5
                       SE      (4 − 3,6)2               (13 − 14,4)2                (7 − 6)2
                                          ≅ 0,04                      ≅ 0,14                  ≅ 0,17
                                  3,6                       14,4                        6
                        S       (2 − 3)2                   (12 − 12)2                (6 − 5)2
                                         ≅ 0,33                       =0                      = 0,2
                                   3                           12                        5

E somamos todos os valores para obter a estatística do teste:

  𝒳 2 ≅ 0,63 + 0 + 0,5 + 0,07 + 0,02 + 0 + 0,03 + 0,05 + 0,05 + 0,04 + 0,14 + 0,17 + 0,33 + 0 + 0,2 = 2,23

O número de graus de liberdade desse exemplo, com C = 5 colunas e L = 3 linhas é:

                                         𝑘 = (𝐿 − 1) × (𝐶 − 1) = 4 × 2 = 8

Os valores da distribuição qui-quadrada com 8 graus de liberdade constam abaixo:

 𝑃(𝒳82 < 𝑥)   0,005    0,01    0,025     0,05    0,1         0,25     0,5     0,75   0,9  0,95 0,975 0,99 0,995
     𝑥         1,34    1,65     2,18     2,73    3,49        5,07     7,34    10,22 13,36 15,51 17,54 20,09 21,96

Podemos observar que a estatística do teste 𝒳 2 = 2,23 é inferior a 𝑥 = 2,73, associado à probabilidade
𝑃(𝒳82 > 2,73) = 1 − 0,05 = 0,95 Como esse valor é muito superior a qualquer nível de significância
razoável, não rejeitamos a hipótese nula de que as proporções dos níveis de ensino são as mesmas em todas
as regiões do país.


De maneira geral, os cálculos do teste de independência são muito similares aos do teste de homogeneidade.
A diferença principal entre esses testes é interpretativa: enquanto o teste de independência avalia 2
variáveis relativas a uma mesma população, o teste de homogeneidade avalia 1 variável em relação a
subpopulações distintas.

         Em suma, para o teste qui-quadrado de independência ou de homogeneidade, devemos
         seguir o seguinte passo a passo:

         i) Calcular os valores esperados 𝑬𝒊𝒋 para cada campo, considerando a hipótese nula*:

                                                              𝑖      ×𝑗
                                                    𝐸𝑖𝑗 = 𝑡𝑜𝑡𝑎𝑙  𝑡𝑜𝑡𝑎𝑙
                                                             𝑡𝑜𝑡𝑎𝑙

         Receita Federal (Analista Tributário) Estatística                                                      31
         www.estrategiaconcursos.com.br                                                                        110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

        ii) Calcular, para cada campo da tabela, o quadrado do desvio, dividido pelo valor esperado:

                                                        (𝑶𝒊𝒋 −𝑬𝒊𝒋 )𝟐
                                                            𝑬𝒊𝒋


        iii) Somar os resultados de todos os campos para obter a estatística do teste 𝓧𝟐𝑻 ;

        iv) Calcular o número de graus de liberdade da distribuição qui-quadrado**:

                                               𝑘 = (𝐿 − 1) × (𝐶 − 1)

        v) Obter o limite crítico (máximo) da distribuição qui-quadrado 𝒳𝐶2 , considerando o nível
        de significância 𝛼 desejado e o número de graus de liberdade 𝑘;

        vi) Decidir quanto à hipótese nula: Rejeitá-la se 𝒳𝑇2 > 𝒳𝐶2 e não a rejeitar, caso contrário.

Obs* (passo i): Para o teste qui-quadrado de aderência, percorremos esses mesmos passos, porém a forma
de calcular os valores esperados será diferente. Considerando que a hipótese nula fornece as proporções 𝑝𝑖
para cada categoria, calculamos os valores esperados de cada categoria multiplicando cada proporção 𝑝𝑖 ,
pelo tamanho total da amostra:

                                                    𝐸𝑖 = 𝑝𝑖 × 𝑡𝑜𝑡𝑎𝑙

Obs** (passo iv): Se houver apenas 1 coluna, o número de graus de liberdade será 𝑘 = (𝐿 − 1) e se houver
apenas 1 linha, o número de graus de liberdade será 𝑘 = (𝐶 − 1).

(VUNESP/2018 – Prefeitura de Itapevi/SP) Na análise de contingência com o emprego do teste qui-
quadrado, os valores esperados são calculados com base na hipótese
a) alternativa
b) de verossimilhança
c) de clusters
d) de nulidade
e) Q de Cochran
Comentários:
Assim como os demais testes de hipóteses, em que os cálculos são feitos com base na hipótese nula (ou de
nulidade), no teste qui-quadrado, os valores esperados também são calculados com base na hipótese nula.
Gabarito: D.


        Receita Federal (Analista Tributário) Estatística                                               32
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

(FGV/2022 – TCU) Numa empresa com 100 funcionários, todos foram perguntados a respeito de suas
preferências sobre trabalho remoto ou presencial. Dos funcionários de 18 a 39 anos, 40% preferem trabalho
presencial. Dos funcionários acima de 40 anos, 40% mostraram preferência pelo remoto. Dos 100
funcionários, 50 têm mais de 40 anos. O presidente da empresa está interessado em saber se a preferência
por trabalho remoto é independente da categoria de idade (18 a 39 e acima de 40 anos).
O teste a ser usado pelo presidente e o valor da estatística de teste são, respectivamente:
a) teste T e o valor da estatística é 4;
b) teste T e o valor da estatística é 0;
c) teste chi-quadrado e o valor da estatística é 4/5;
d) teste chi-quadrado e o valor da estatística é 4;
e) teste chi-quadrado e o valor da estatística é 0.
Comentários:
O enunciado informa as preferências em relação a 2 tipos de trabalho (remoto e presencial) de funcionários
divididos em 2 categorias de idade (abaixo de 40 anos e acima de 40 anos). Para verificar se a preferência
pelo tipo de trabalho é independente da categoria de idade, fazemos um teste qui-quadrado (ou chi-
quadrado) de independência.
Para calcularmos a estatística do teste, vamos primeiro inserir os dados fornecidos na seguinte tabela,
considerando que há 100 funcionários no total, dos quais 50 têm mais de 40 anos (logo, 50 têm menos de
40 anos):

O enunciado informa que 40% dos funcionários com menos de 40 anos preferem o trabalho presencial. Ou
seja, 40% x 50 = 20 funcionários nessa categoria preferem o trabalho presencial. Os demais (os outros 30)
preferem o trabalho remoto.
Ademais, 40% dos funcionários com mais de 40 anos preferem o trabalho remoto. Ou seja, 20 funcionários
nessa categoria preferem o trabalho remoto e 30 preferem o trabalho presencial. Inserindo esses dados,
temos:

Em seguida, calculamos o valor esperado de cada campo, que corresponde ao produto do total da linha com
o total da coluna, dividido pelo número total de funcionários. Como os totais são todos iguais, o valor
esperado de todos os campos é:
                                                  50 × 50 2500
                                             𝐸=          =     = 25
                                                    100    100


        Receita Federal (Analista Tributário) Estatística                                              33
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Agora, calculamos a razão entre o quadrado do desvio e o valor esperado para cada campo. Para o campo
da primeira linha e primeira coluna, temos:
                                  (𝑂11 − 𝐸11 )2 (20 − 25)2 (−5)2 25
                                               =          =     =    =1
                                      𝐸11           25      25    25
Vale observar que os desvios em relação ao valor esperado (E = 25) é igual a 5, em módulo, para todos os
campos. Assim, essa razão será igual a 1 para todos os campos.
E a estatística do teste que consiste na soma desses resultados:
                                               𝒳2 = 1 + 1 + 1 + 1 = 𝟒
Já encontramos a resposta da questão, mas vale reforçar que devemos comparar a estatística do teste com
o valor indicado na tabela da distribuição qui-quadrado com k = (L - 1).(C - 1) = 1x1 = 1 grau de liberdade.
Gabarito: D.


(FGV/2019 – DPE-RJ) Cogita-se a possibilidade de que decisões judiciais, favoráveis ou não, possam estar
associadas à etnia do réu, refletida na sentença. Para testar a independência entre o resultado do julgamento
e o grupo étnico do réu, uma amostra representativa foi extraída, com resultados conforme abaixo.

Estão disponíveis também as seguintes informações sobre a distribuição Qui-Quadrado:
                                   𝑃(𝒳12 < 3,842) = 𝑃(𝒳22 < 5,993) = 0,9500
Sobre a realização do teste, é correto afirmar que:
a) o valor observado da estatística do teste é 3,6363;
b) o número de graus de liberdade da distribuição do teste é igual a 2;
c) ao nível de significância de 5% rejeita-se a hipótese de que a sentença e a etnia são independentes;
d) através da tabela acima é possível inferir que os indivíduos da etnia negra estão mais sujeitos à
   condenação do que outros;
e) se a estatística do teste for igual a 4, não será possível, ao nível de significância de 5%, rejeitar a hipótese
   de independência entre a sentença e a etnia.
Comentários:
O objetivo do teste é avaliar se o resultado da sentença tem relação com a etnia. Não havendo relação, ou
seja, sendo independentes (hipótese nula do teste), espera-se que a proporção de negros condenados seja
igual à proporção dos negros inocentados, assim como os não negros.
O primeiro passo é calcular o valor esperado de cada campo, considerando o total da respectiva linha e
coluna:
                                                             𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                   𝐸𝑖𝑗 =
                                                                 𝑡𝑜𝑡𝑎𝑙


         Receita Federal (Analista Tributário) Estatística                                                      34
         www.estrategiaconcursos.com.br                                                                        110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                                            ==219a34==

                                                                                          (𝑶𝒊𝒋 −𝑬𝒊𝒋 )𝟐
Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado                   :
                                                                                              𝑬𝒊𝒋

E somamos os valores para obter a estatística do teste:
                                                                         (𝑶𝒊 − 𝑬𝒊 )𝟐
                                                 𝒳2 = ∑
                                                                             𝑬𝒊
                                      𝒳 2 ≅ 1 + 1 + 0,818 + 0,818 = 3,636
Com esse resultado, podemos observar que a alternativa A está correta.
Para obter o valor crítico, precisamos do número de graus de liberdade da distribuição:
                                                 𝑘 = (𝐿 − 1)(𝐶 − 1)
                                                    𝑘 =1×1= 1
Com esse resultado, observamos que a alternativa B está incorreta.
Pelos valores fornecidos no enunciado, observamos que, para 𝑘 = 1, temos 𝒳12 = 3,842, que é o valor
crítico para o nível de significância 1 − 𝛼 = 0,95 = 95%.
Como a estatística do teste (𝒳 2 = 3,63) é inferior ao valor crítico (𝒳12 = 3,842), então não rejeitamos a
hipótese nula de independência entre a etnia e o resultado do julgamento. Por isso, as alternativas C e D
estão incorretas.
Em relação à alternativa E, se a estatística fosse 𝒳 2 = 4, rejeitaríamos a hipótese de independência porque
esse valor superaria o valor crítico (𝒳12 = 3,842). Portanto, a alternativa E está incorreta.
Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                                    35
        www.estrategiaconcursos.com.br                                                                       110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                          RESUMO DA AULA
Tipos de Teste

   •   Teste Bilateral: Região Crítica (RC) em ambos os extremos

                                                                    𝑅𝑁𝑅
                                                     𝑅𝐶             1−𝛼                𝑅𝐶
                                                  𝛼⁄                                𝛼⁄
                                                    2                                 2
                                                            LINF                LSUP


   •   Teste Unilateral à Esquerda: Região Crítica concentrada à esquerda

                                                                   𝑅𝑁𝑅
                                                𝑅𝐶                 1−𝛼
                                                 𝛼
                                                     LINF


   •   Teste Unilateral à Direita: Região crítica concentrada à esquerda

                                                             𝑅𝑁𝑅
                                                             1−𝛼            𝑅𝐶
                                                                                𝛼
                                                                         LSUP

Tipos de Erros – não complementares

   •   Erro tipo I (probabilidade 𝛼 – nível de significância)

            o Rejeitar a hipótese nula (H0) sendo ela verdadeira

            o Complementar: Nível de Confiança 1 − 𝛼

   •   Erro tipo II (probabilidade 𝛽):

            o Não rejeitar a hipótese nula sendo ela falsa

            o Complementar: Poder do Teste 1 − 𝛽

        Receita Federal (Analista Tributário) Estatística                                   36
        www.estrategiaconcursos.com.br                                                      110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

   •   Poder do Teste (probabilidade 1 − 𝛽):

            o Quanto maior a diferença entre os parâmetros (verdadeiro e da hipótese nula), maior o poder
              do teste

            o Quanto maior o tamanho da amostra, maior o poder do teste

            o Quanto maior 𝛼, maior o poder do teste

Tipos de Testes
                                                                           𝑥̅ −𝜇
   •   Teste para a média com variância conhecida: 𝑧𝐶 =                     𝜎
                                                                            √𝑛

                                                                                   𝑥̅ −𝜇
   •   Teste para a média com variância desconhecida: 𝑡𝐶 =                           𝑠
                                                                                    √𝑛


                                                 𝑝̂−𝑝
   •   Teste para a proporção: 𝑧 =                   𝑝.𝑞
                                                 √𝑛

P-Valor: Rejeitar se 𝑝 < 𝛼; Não Rejeitar se 𝑝 ≥ 𝛼

Teste Qui-Quadrado
                                                              𝑖    ×𝑗
   •   Valor Esperado do teste de independência: 𝐸𝑖𝑗 = 𝑡𝑜𝑡𝑎𝑙  𝑡𝑜𝑡𝑎𝑙
                                                          𝑡𝑜𝑡𝑎𝑙

   •   Grau de liberdade: 𝑘 = (𝐿 − 1) × (𝐶 − 1); se L = 1, 𝑘 = (𝐶 − 1); se C = 1, 𝑘 = (𝐿 − 1)

                                        (𝑂𝑖 −𝐸𝑖 )2
   •   Estatística do teste: 𝒳 2 = ∑        𝐸𝑖

        Receita Federal (Analista Tributário) Estatística                                             37
        www.estrategiaconcursos.com.br                                                                110

                                      


---

     Equipe Exatas Estratégia Concursos
     Aula 12

                              QUESTÕES COMENTADAS - FGV

Conceitos Fundamentais

1.       (FGV/2025 – TCE-RR - Adaptada) Julgue a afirmativa a seguir sobre inferência estatística.

O teste de hipótese presume que a negação da hipótese nula é verdadeira, cria um modelo para isso e testa
se o efeito observado é plausível dentro de um intervalo de confiança.

Comentários:

O teste de hipótese presume que a hipótese nula é verdadeira, ou seja, ele não presume a negação da
hipótese nula.
                                                               ==219a34==

Resposta: Errado

2.       (FGV/2025 – TCE-RR - Adaptada) Julgue a afirmativa a seguir sobre inferência estatística.

Em um teste de hipótese, se a hipótese alternativa contém o símbolo maior que (“>”), então tem-se um teste
unilateral à esquerda.

Comentários:

Quando a hipótese alternativa contém o símbolo ">", a região crítica fica à direita. Nesse caso, temos um
teste unilateral à direita.

Resposta: Errado

3.     (FGV/2024 – EPE) Um fabricante de certo equipamento diz que o tempo médio de sobrevida de seu
produto é de 720 dias. Para verificar se a afirmação do fabricante estava correta, foi realizado um teste de
hipótese. Para tanto, foi selecionado uma amostra de 25 equipamentos, em que se observou que o tempo
médio e o desvio padrão dessa amostra foi de, aproximadamente, 700 dias e 20 dias respectivamente.
Levando em consideração a potência do teste, assinale a opção que apresenta a hipótese alternativa mais
adequada para a realização do teste.
a) HA: μ < 720.
b) HA: μ ≠ 720.
c) HA: μ > 720.
d) HA: μ < 700.
e) HA: μ ≠ 700.


           Receita Federal (Analista Tributário) Estatística                                             38
           www.estrategiaconcursos.com.br                                                                110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Comentários:

O fabricante informa que a sobrevida de seu produto é de 720 dias, mas a média amostral observada foi
inferior. Assim, o teste mais adequado, para verificar se a média é aquela descrita pelo fabricante, ou se é
inferior, é o teste unilateral à esquerda, em que a hipótese nula é 𝐻0 : 𝜇 = 720 e a hipótese alternativa é
𝐻𝐴 : 𝜇 < 720.
Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                                39
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                             QUESTÕES COMENTADAS - FGV

Tipos de Erros

1.     (FGV/2024 – Pref. Nova Iguaçu) A prefeitura de uma cidade está preocupada com o elevado índice
de acidentes automobilísticos que vêm acontecendo em determinada rodovia. O número de acidentes
nesse local pode ser modelado por uma distribuição Poisson de média λ. A prefeitura decide registrar o
número X de acidentes nessa rodovia ao longo de um mês para testar a hipótese de que o número médio
de acidentes nesse intervalo é maior que 20.
Assim, foi definido que:
H0: λ = 20
H1: λ > 20
E a hipótese nula será rejeitada se X > 26.
É correto afirmar que a probabilidade de que seja cometido erro do Tipo I corresponde à
a) P(X ≥ 25 | λ = 20).
b) P(X ≥ 25 | λ = 26).
c) P(X ≥ 26 | λ = 20).
d) P(X ≥ 27 | λ = 20).
e) P(X ≥ 27 | λ = 26).

Comentários:

O erro tipo I corresponde à rejeição da hipótese nula, sendo ela verdadeira. Sabendo que a hipótese nula
será rejeitada se X > 26, então o erro tipo I está associado ao evento X > 26 (que não consta dentre as
alternativas) ou X ≥ 27 (que consta nas alternativas D e E), considerando que o verdadeiro parâmetro é
aquele indicado na hipótese nula, qual seja, λ = 20, como indicado na alternativa D.
Gabarito: D


2.     (FGV/2024 – TJ/RR) Considere que uma amostra aleatória simples de tamanho 100 de uma
densidade 𝑵(𝝁, 𝟐𝟓) será obtida para testar 𝑯𝟎 : 𝝁 ≤ 𝟏𝟎 versus 𝑯𝟏 : 𝝁 ≤ 𝟏𝟎. Será usado como critério de
                       ̅ > 𝟏𝟎, 𝟖𝟐.
decisão rejeitar 𝑯𝟎 se 𝒙
A função de potência desse teste quando 𝝁 = 𝟏𝟏 é aproximadamente igual a
a) 0,35
b) 0,50
c) 0,64


          Receita Federal (Analista Tributário) Estatística                                          40
          www.estrategiaconcursos.com.br                                                             110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

d) 0,72
e) 0,80

Para resolver essa questão, considere a tabela normal padrão fornecida na prova, constante ao final desta
seção de questões.

Comentários:

Inicialmente, pontue-se que houve um equívoco no enunciado, pois a hipótese alternativa não pode ser igual
à hipótese nula. Considerando que o critério de decisão é rejeitar 𝐻0 se 𝑥̅ > 10,82, conclui-se que se trata
de um teste unilateral à direita, sendo a hipótese alternativa 𝐻1 : 𝜇 > 10. De todo modo, para calcular o
poder do teste, precisamos do critério de rejeição 𝑥̅ > 10,82 e do parâmetro verdadeiro 𝜇 = 11. Além disso,
sabendo que a variância da população é 𝜎 2 = 25, o desvio padrão é a raiz quadrada, 𝜎 = √25 = 5.
Considerando que a amostra tem tamanho 𝑛 = 100, a transformação para a normal padrão é:
                                                              ==219a34==

                                          𝑥̅ − 𝜇 10,82 − 11   −0,18
                                    𝑧=       𝜎 =            =       = −0,36
                                                     5          5
                                            √𝑛     √100        10
Sabendo que o poder do teste é a probabilidade de rejeitar a hipótese nula, sendo ela falsa, então:
                                    𝑝𝑜𝑑𝑒𝑟 = 𝑃𝜇=11 (𝑥̅ > 10,82 ) = 𝑃(𝑍 > −0,36)
Pela tabela normal padrão fornecida na prova, observamos que 𝑃(𝑍 < 0,36) ≅ 0,64, logo:
                                        𝑃(𝑍 > −0,36) = 𝑃(𝑍 < 0,36) = 0,64
Gabarito: C


3.     (FGV/2023 – TJ/SE) A função poder de um teste de hipóteses é uma medida importante para avaliar
a capacidade de o teste detectar uma diferença ou efeito verdadeiro, caso ele exista. A função poder é
definida como a probabilidade de:

a) rejeitar a hipótese nula falsa;

b) rejeitar a hipótese nula verdadeira;

c) aceitar a hipótese nula verdadeira;

d) aceitar a hipótese nula, dada a hipótese alternativa verdadeira;

e) rejeitar a hipótese alternativa, dada a hipótese nula verdadeira.

Comentários:

O poder do teste corresponde à probabilidade de rejeitar a hipótese nula, sendo ela falsa (decisão correta).
Ele é complementar ao erro tipo II.

Gabarito: A


          Receita Federal (Analista Tributário) Estatística                                              41
          www.estrategiaconcursos.com.br                                                                 110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

4.     (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 400 será usada para testar
𝑯𝟎 : 𝝁 ≤ 𝟏𝟎𝟎 versus 𝑯𝟏 : 𝝁 > 𝟏𝟎𝟎, em que 𝝁 é a média de uma densidade normal com desvio padrão
                                                 ̅ > 𝟏𝟎𝟓 será usado.
suposto igual a 50. O critério que rejeita 𝑯𝟎 se 𝒙

O nível de significância desse critério e a probabilidade de erro tipo II se 𝝁 = 103 valem, respectivamente,
aproximadamente:

a) 0,02 e 0,79.
b) 0,02 e 0,21.
c) 0,02 e 0,54.
d) 0,05 e 0,21.
e) 0,05 e 0,38.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

Comentários:

O nível de significância do teste é a probabilidade de rejeitar a hipótese nula, considerando-a verdadeira.
Sabendo que a hipótese nula será rejeitada se 𝑥̅ > 105, temos:
                                                    𝛼 = 𝑃(𝑋̅ > 105)
Considerando que o parâmetro indicado na hipótese nula é 𝜇 = 100, que o desvio padrão é 𝜎 = 50 e que o
tamanho da amostra é 𝑛 = 400, a transformação para a normal padrão é:
                                              𝑥̅ − 𝜇   105 − 100    5
                                         𝑧=      𝜎   =           =    =2
                                                          50       50
                                                √𝑛       √400      20
Assim, o nível de significância pode ser calculado como:
                                            𝛼 = 𝑃(𝑋̅ > 105) = 𝑃(𝑍 > 2)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 2) = 0,9772, logo:
                        𝛼 = 𝑃(𝑍 > 2) = 1 − 𝑃(𝑍 ≤ 2) = 1 − 0,9772 = 0,0228 ≅ 0,02
Já, a probabilidade do erro tipo II é a probabilidade de não rejeitar a hipótese nula, sendo ela falsa:
                                                    𝛽 = 𝑃(𝑌̅ ≤ 105)
Considerando que o parâmetro verdadeiro é 𝜇 = 103, que o desvio padrão é 𝜎 = 50 e que o tamanho da
amostra é 𝑛 = 400, a transformação para a normal padrão é:
                                             𝑦̅ − 𝜇 105 − 103    2
                                       𝑧=       𝜎 =           =    = 0,8
                                                       50       50
                                               √𝑛     √400      20
Assim, a probabilidade do erro tipo II pode ser calculada como 𝛽 = 𝑃(𝑌̅ ≤ 105) = 𝑃(𝑍 ≤ 0,8)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 0,8) = 0,7881, logo:

         Receita Federal (Analista Tributário) Estatística                                                42
         www.estrategiaconcursos.com.br                                                                   110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                          𝛽 = 𝑃(𝑍 ≤ 0,8) = 0,7881 ≅ 0,79
Gabarito: A

5.    (FGV/2021 – IMBEL) O planejamento e controle de qualidade de uma operação envolvem
amostragens de desempenho, que devem ser analisadas. Nessas análises, podem ocorrer erros de
julgamento, que se classificam em tipos X e Z. Assim, o quadro a seguir apresenta as possíveis decisões a
se tomar para cada resultado de análise.

                                          O lote de sacos de arroz está, na realidade...

                           Decisão            Adequado                 Inadequado

                           Rejeitar                (a)               Decisão Correta

                            Aceitar        Decisão Correta                  (b)

Sobre esse quadro, analise as afirmativas a seguir.
I. O erro de análise indicado por (a) corresponde a um erro do tipo X.
II. O erro de análise indicado por (b) também corresponde a um erro do tipo X.
III. Os erros (a) e (b) podem também ser referidos como riscos para o consumidor e para o produtor,
respectivamente.
Está correto o que se afirma em

a) I, somente.

b) II, somente.

c) I e II, somente.

d) I e III, somente.

e) II e III, somente.

Comentários:

Nas análises de amostragem, podem ocorrer os erros do tipo I (que o enunciado chama de X), que
corresponde a uma decisão de rejeição, quando o lote está adequado; e do tipo II (que o enunciado chama
de Z), que corresponde a uma decisão de aceitação, quando o lote está inadequado.

Na afirmativa I, consta que o erro indicado por (a), que corresponde a uma decisão de rejeição, quando o
lote está adequado, corresponde a um erro do tipo X. De fato, esse erro corresponde ao erro do tipo I, logo,
a afirmativa I está correta.

         Receita Federal (Analista Tributário) Estatística                                               43
         www.estrategiaconcursos.com.br                                                                  110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Na afirmativa II, consta que o erro indicado por (b), que corresponde a uma decisão de aceitação, quando o
lote está inadequado, também corresponde a um erro do tipo X. No entanto, esse erro corresponde ao erro
do tipo II, que o enunciado chamou de Z, logo a afirmativa II está incorreta.

Na afirmativa III, consta que o erro indicado por (a) é um risco para o consumidor e que o erro indicado por
(b) é um risco para o produtor. No entanto, (a) corresponde à rejeição de um lote adequado, ou seja, esse é
um risco para o produtor; enquanto (b) corresponde à aceitação de um lote inadequado, tratando-se,
portanto, de um risco para o consumidor. Logo, a afirmativa III está incorreta.

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                                44
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  45
      www.estrategiaconcursos.com.br                                     110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                            QUESTÕES COMENTADAS - FGV

Testes para a Média

1.      (FGV/2024 – SES/MT) Para testar H0: μ ≤ 20 versus H1: μ > 20, em que μ é a média de uma
distribuição normal com variância conhecida e igual a 125, uma amostra aleatória simples de tamanho 100
será obtida e o critério de decisão rejeitará H0 se o valor da média amostral for maior do que 23.
Se P[Z > z] indica a probabilidade de que uma variável com distribuição normal padrão seja maior do que
z, então, o tamanho α deste critério de teste será dado por
a) 𝛼 = P[Z > 2] ≅ 0,023
b) 𝛼 = P[Z > 1,6] ≅ 0,054
c) 𝛼 = P[Z > 1,4] ≅ 0,081
d) 𝛼 = P[Z > 1,2] ≅ 0,115

Comentários:

O nível de significância 𝛼 é a probabilidade de rejeição da hipótese nula, considerando-a como verdadeira.
Considerando que a hipótese nula será rejeitada se a média amostral for 𝑥̅ > 23, então:
                                                    𝛼 = 𝑃(𝑥̅ > 23)
Essa probabilidade deve ser calculada utilizando o parâmetro indicado na hipótese nula, qual seja, 𝜇 = 20.
Sabendo que a variância da população é conhecida 𝜎 2 = 125 (o desvio padrão é 𝜎 = √125 = 15) e que a
amostra tem tamanho 𝑛 = 100, temos a seguinte transformação para a normal padrão:
                                           𝑥̅ − 𝜇   23 − 20    3   30
                                      𝑧=      𝜎   =         =    =    =2
                                                      15      15 15
                                             √𝑛      √100     10
Assim, o nível de significância do teste é:
                                                     𝛼 = 𝑃(𝑍 > 2)
Gabarito: A


2.      (FGV/2024 – SES/MT) Para testar H0: μ ≤ 36 versus H1: μ > 36, em que μ é a média de uma
distribuição normal com variância conhecida e igual a 144, uma amostra aleatória simples de tamanho
n=100 será obtida.
Lembre-se que se Z tem distribuição N(0, 1), então P[Z > 1,64] ≅ 0,05. Assim, ao nível de significância de
                                                ̅ da média amostral rejeitará H0 se 𝒙
5%, o critério usual baseado no valor observado 𝒙                                   ̅ for maior ou igual a
a) 37,124
b) 37,968

        Receita Federal (Analista Tributário) Estatística                                              46
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

c) 38,605
d) 39,666

Comentários:

Precisamos calcular o valor crítico do teste de hipóteses unilateral à direita, para a média de uma população,
com variância conhecida, dado por:
                                                                   𝜎
                                                   𝐿𝑆𝑢𝑝 = 𝜇 + 𝑧.
                                                                   √𝑛
O enunciado informa que:
   •   A média populacional indicada na hipótese nula é 𝜇 = 36;
   •   O valor da normal padrão associado ao nível de confiança desejado é 𝑧 = 1,64;
   •   A variância da população é 𝜎 2 = 144, logo o desvio padrão é 𝜎 = √144 = 12;
   •   O tamanho da amostra é 𝑛 = 100.
Substituindo esses dados na fórmula acima, temos:
                                              12                    12
                   𝐿𝑆𝑢𝑝 = 36 + 1,64 ×              = 36 + 1,64 ×       = 36 + 1,968 = 37,968
                                            √100                    10
Gabarito: B


3.     (FGV/2024 – Pref. Vitória) Para testar H0: µ ≤ 30 versus H1: µ > 30, em que µ é a média de uma
variável populacional suposta normalmente distribuída com variância 64, uma amostra aleatória simples
de tamanho 100 será obtida.
Lembre-se que se Z tem distribuição N(0, 1), então P[Z > 1,64] ≅ 0,05. O teste uniformemente mais potente
de tamanho aa = 0,05 rejeitará H0 se o valor da média amostral observada for maior ou igual a
a) 30,866
b) 30,978
c) 31,312
d) 32,568
e) 33,650

Comentários:

Para calcular o valor crítico do teste de hipóteses unilateral à direita, para a média de uma população, com
variância conhecida, temos:
                                                                   𝜎
                                                   𝐿𝑆𝑢𝑝 = 𝜇 + 𝑧.
                                                                   √𝑛
O enunciado informa que:
   •   A média populacional indicada na hipótese nula é 𝜇 = 30


        Receita Federal (Analista Tributário) Estatística                                                  47
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

    •    O valor da normal padrão associado ao nível de confiança desejado é 𝑧 = 1,64;
    •    A variância da população é 𝜎 2 = 64, logo o desvio padrão é 𝜎 = √64 = 8;
    •    O tamanho da amostra é 𝑛 = 100.
Substituindo esses dados na fórmula acima, temos:
                                                8                      8
                     𝐿𝑆𝑢𝑝 = 30 + 1,64 ×              = 30 + 1,64 ×       = 30 + 1,312 = 31,312
                                              √100                    10
Gabarito: C


4.     (FGV/2024 – CVM) Para a resolução da questão abaixo, pode ser necessário utilizar alguns dos
resultados a seguir.
Probabilidades aproximadas da Normal padrão Z~N(0,1): P(Z>0.25) = 0.40; P(Z>0.5) = 0.31; P(Z>0.8) = 0.21;
P(Z>1) = 0.16; P(Z>1.2) = 0.12; P(Z>1.28) = 0.1; P(Z>1.5) = 0.07; P(Z>1.64) = 0.05; P(Z>1,96) = 0.025; P(Z>2)
= 0.02; P(Z>2,33) = 0,01; P(Z>2.5) = 0.06; P(Z>2,575) = 0,005; P(Z>3) = 0.013
O número de fraudes anuais detectadas no mercado financeiro, nos últimos 16 anos, foi registrado por um
auditor. Ele deseja testar se o resultado fornece evidência de que a média anual de fraudes no mercado é
inferior a 4, supondo que esses 16 registros constituam observações de uma amostra aleatória simples
obtida a partir de uma população Normal. A variância dessa população é conhecida e igual a 25.
Nessas condições, o auditor obterá evidência estatística de que a média populacional é inferior a 4, ao
nível de significância 0,1, se a média na amostra for menor ou igual a:
a) 1,6
b) 1,8
c) 2,4
d) 3,6
e) 5,6

Comentários:

Precisamos calcular o valor crítico do teste de hipóteses para a média de uma população normal com
variância conhecida, sabendo que o teste é unilateral à esquerda (ou seja, há um único limite, abaixo do qual
a hipótese nula é rejeitada):
                                                                     𝜎
                                                     𝐿𝐼𝑛𝑓 = 𝜇 − 𝑧.
                                                                     √𝑛
O enunciado informa que:
    •    A média populacional indicada na hipótese nula é 𝜇 = 4;
    •    A variância da população é 𝜎 2 = 25, logo o desvio padrão é 𝜎 = √25 = 5;
    •    O tamanho da amostra é 𝑛 = 16.

          Receita Federal (Analista Tributário) Estatística                                               48
          www.estrategiaconcursos.com.br                                                                 110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Ademais, para o nível de significância 𝛼 = 0,1, devemos buscar o valor de z tal que 𝑃(𝑍 > 𝑧) = 0,1, tendo
em vista a simetria da normal padrão. Pelos dados fornecidos, observamos que 𝑧 = 1,28. Assim:
                                                     5                   5
                           𝐿𝐼𝑛𝑓 = 4 − 1,28 ×             = 4 − 1,28 ×      = 4 − 1,6 = 2,4
                                                  √16                    4
Gabarito: C


5.     (FGV/2024 – CVM) Para a resolução da questão abaixo, pode ser necessário utilizar alguns dos
resultados a seguir.
Probabilidades aproximadas da Normal padrão (Z ~ N(0,1): P(Z>0.25) = 0.40; P(Z>0.5) = 0.31; P(Z>0.8) =
0.21; P(Z>1) = 0.16; P(Z>1.2) = 0.12; P(Z>1.28) = 0.1; P(Z>1.5) = 0.07; P(Z>1.64) = 0.05; P(Z>1,96) = 0.025;
P(Z>2) = 0.02; P(Z>2,33) = 0,01; P(Z>2.5) = 0.06; P(Z>2,575) = 0,005; P(Z>3) = 0.013
Distribuição t de Student:

                              Graus de             Área da Extremidade Superior
                             Liberdade        10%           5%   2,5%        1%     0,5%

                                  15         1,341       1,753   2,131      2,602   2,947

                                  16         1,337       1,746   2,120      2,583   2,921

                                  17         1,333       1,740   2,110      2,567   2,898

                                  18         1,330       1,734   2,101      2,552   2,878

                                  19         1,328       1,729   2,093      2,539   2,861

                                  20         1,325       1,725   2,086      2,528   2,845

Um analista busca evidenciar estatisticamente a conjectura de que a valorização média das cotas dos
fundos imobiliários negociados no mercado em 2023 tenha sido superior a 15%. Supõe-se que as
valorizações das cotas sigam distribuição Normal, sendo o desvio padrão desconhecido. Com base nas
observações de uma amostra aleatória de tamanho 16, ele observa que a valorização média foi de 15,85%,
com desvio padrão amostral igual a 2%.
Considerando os três níveis de significância usuais (0,01, 0,05 e 0,1), a conjectura investigada:
a) foi evidenciada apenas aos níveis 0,05 e 0,1, o que resulta da comparação do valor da estatística de teste
com os valores críticos 1,64 e 1,28;
b) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de
teste com os valores críticos 1,96 e 1,64;
c) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de teste
com os valores críticos 1,64 e 1,28;
d) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de
teste com os valores críticos 1,753 e 1,341;

        Receita Federal (Analista Tributário) Estatística                                                    49
        www.estrategiaconcursos.com.br                                                                      110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

e) não foi evidenciada a nenhum dos três níveis, o que se conclui comparando o valor da estatística de teste
com os valores 2,947, 2,131 e 1,753.

Comentários:

Para responder à questão, vamos calcular a estatística. Considerando que o desvio padrão é desconhecido,
devemos utilizar a distribuição de t-Student:
                                                             𝑥̅ − 𝜇
                                                      𝑡𝑐 =      𝑠
                                                               √𝑛
O enunciado informa que:
   •   A hipótese nula é de que a média populacional é 𝜇 = 15%;
   •   A média amostral observada é 𝑥̅ = 15,85%;
   •   O desvio padrão amostral observado é 𝑠 = 2%;
   •   O tamanho da amostra é 𝑛 = 16.
Inserindo esses dados na fórmula acima, temos:
                                      15,85% − 15%   0,85%
                               𝑡𝑐 =                =       = 0,85 × 2 = 1,7
                                           2%          2%
                                           √16          4
Essa estatística deve ser comparada ao valor tabelado da distribuição de t-Student com 𝑛 − 1 = 15 graus de
liberdade. Por se tratar de um teste de hipóteses unilateral à direita, pois se acredita que a valorização tenha
superado 15%, então a área da extremidade superior indicada na tabela fornecida corresponde justamente
ao nível de significância do teste.
Desse modo, verificamos que para 1%, temos 𝑡1% = 2,602; para 5%, temos 𝑡5% = 1,753 e para 10%, temos
𝑡10% = 1,341. Assim, a estatística do teste 𝑡𝑐 = 1,7 é inferior a 𝑡5% = 1,753 e superior a 𝑡10% = 1,341.
Portanto, a hipótese nula não deve ser rejeitada a 5% (e nem a 1%) e deve ser rejeitada a 10% de
significância, como indicado na alternativa D.
Pontue-se que as alternativas A, B e C referem erroneamente aos valores tabelados da distribuição normal
padrão. Ademais, a alternativa E compara com os valores tabelados da distribuição de t-Student associados
a 0,5%, 2,5% e 5% de área da extremidade superior, que deveriam ser utilizados no caso do teste bilateral.
Gabarito: D


6.     (FGV/2024 – TJ/RR) Uma amostra de tamanho 25 de uma densidade normal com média μμ e
variância σ2σ2desconhecidas resultou nos seguintes dados:

̅ = 𝟑𝟏, 𝟐 e ∑𝟐𝟓
𝒙                     ̅)𝟐 = 𝟗𝟔
             𝒊=𝟏(𝒙𝒊 − 𝒙

Deseja-se testar H0: μ ≤ 30 versus H1: μ > 30 usando a estatística t usual.
Assinale a opção que indica o valor da estatística t, o critério de decisão e a correspondente decisão ao
nível de significância de 5%.

        Receita Federal (Analista Tributário) Estatística                                                    50
        www.estrategiaconcursos.com.br                                                                      110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

a) t = 2,0 / Rejeitar H0 se t > 2,064 / H0 rejeitada
b) t = 1,5 / Rejeitar H0 se t > 1,711 / H0 não rejeitada
c) t = 1,5 / Rejeitar H0 se t > 2,064 / H0 não rejeitada
d) t = 3,0 / Rejeitar H0 se t > 1,711 / H0 rejeitada
e) t = 3,0 / Rejeitar H0 se t > 2,064 / H0 rejeitada

Considere a tabela da distribuição de t-Student, constante ao final desta seção de questões, fornecida na
prova.

Comentários:

Precisamos calcular a estatística t do teste. Mas, para isso, precisamos calcular a variância amostral, dividindo
a soma dos quadrados fornecida por 𝑛 − 1 = 25 − 1 = 24:

                                              2
                                                 ∑𝑛𝑖=1(𝑥𝑖 − 𝑥̅ )2 96
                                             𝑠 =                 =    =4
                                                      𝑛−1          24
E o desvio padrão amostral é a raiz quadrada: 𝑠 = √4 = 2.
Sabendo que a média amostral observada é 𝑥̅ = 31,2 e que a média populacional indicada na hipótese nula
é 𝜇 = 30, temos:
                                             𝑥̅ − 𝜇   31,2 − 30   1,2 6
                                      𝑡𝑐 =      𝑠   =           =    = =3
                                                          2        2  2
                                               √𝑛       √25        5
Agora, precisamos buscar o valor tabelado da distribuição de t-Student com 𝑛 − 1 = 24 graus de liberdade,
considerando que o nível de significância é de 5%. Por se tratar de um teste unilateral, devemos buscar o
valor 𝑡 associado à probabilidade 𝑝 = 𝑃(𝑇 < 𝑡) = 0,95. Pela tabela fornecida, verificamos que 𝑡 = 1,711.
Por fim, sabendo que a estatística do teste é superior ao valor tabelado, rejeitamos a hipótese nula.
Gabarito: D


7.     (FGV/2022 – SEFAZ/AM) Uma amostra aleatória de tamanho 16 de uma variável populacional
normalmente distribuída com parâmetros desconhecidos será obtida para testar as seguintes hipóteses
acerca do valor da média populacional:
                                         𝑯𝟎 : 𝝁 ≤ 𝝁𝟎 𝒗𝒆𝒓𝒔𝒖𝒔       𝑯𝟏 : 𝝁 > 𝝁 𝟎
A estatística de teste usual mais adequada a ser usada tem, quando μ = μ0, distribuição:

a) N(0, 1).
b) t-student com 15 graus de liberdade.
c) t-student com 16 graus de liberdade.
d) qui-quadrado com 16 graus de liberdade.
e) qui-quadrado com 15 graus de liberdade.

Comentários:


         Receita Federal (Analista Tributário) Estatística                                                    51
         www.estrategiaconcursos.com.br                                                                      110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

O enunciado informa que a população segue distribuição normal com parâmetros desconhecidos, ou seja,
trata-se de um teste para a média, com variância desconhecida, em que utilizamos a distribuição de t-
Student, com n - 1 graus de liberdade. Sendo o tamanho da amostra n = 16, então a estatística do teste segue
distribuição de t-Student com n - 1 = 15 graus de liberdade.

Gabarito: B

8.     (FGV/2022 – TRT/MA) Uma amostra aleatória de tamanho 144 de uma população descrita por uma
variável aleatória suposta normalmente distribuída com média 𝝁 e variância 𝝈𝟐 apresentou os seguintes
dados:
                                                            𝟏𝟒𝟒

                                       ̅ = 𝟓𝟐, 𝟓,
                                       𝒙                          ̅)𝟐 = 𝟓𝟏𝟒𝟖
                                                            ∑(𝒙 − 𝒙
                                                            𝒊=𝟏


Assim, se queremos testar H0: 𝝁 ≤ 50 versus H1: 𝝁 > 50, o critério de decisão com base na estatística de
teste t usual, ao nível de significância de 5%, e a respectiva decisão serão:

a) Rejeitar H0 se 𝑥̅ ≥ 54,02, logo não rejeitamos H0.
b) Rejeitar H0 se 𝑥̅ ≥ 49,12, logo rejeitamos H0.
c) Rejeitar H0 se 𝑥̅ ≥ 55,03, logo não rejeitamos H0.
d) Rejeitar H0 se 𝑥̅ ≥ 50,82, logo rejeitamos H0.
e) Rejeitar H0 se 𝑥̅ ≥ 53,28, logo não rejeitamos H0.

Para essa questão, considere as tabelas constantes no final desta seção de questões, fornecidas na prova.

Comentários:

Aqui temos um teste unilateral à direita para a média, com variância desconhecida (teste t), em que
precisamos calcular o limite crítico superior para a média amostral:
                                                                    𝑠
                                                  𝐿𝑆𝑢𝑝 = 𝜇 + 𝑡𝛼 .
                                                                    √𝑛
O enunciado fornece os seguintes dados:
   •   A média indicada na hipótese alternativa é 𝜇 = 50; e
   •   O tamanho da amostra é 𝑛 = 144.
Ademais, a partir da soma do quadrado dos desvios, podemos calcular a variância amostral 𝑠 2 :

                                           2
                                             ∑144
                                              𝑖=1 (𝑥 − 𝑥̅ )
                                                            2
                                                                5148
                                         𝑠 =                  =      = 36
                                                𝑛−1             143
O desvio padrão amostral é a raiz quadrada desse resultado: 𝑠 = √𝑠 2 = √36 = 6
Por fim, precisamos do valor de 𝑡𝛼 para 𝑛 − 1 = 143 graus de liberdade e para um nível de confiança
𝑃(𝑇 < 𝑡𝛼 ) = 1 − 𝛼 = 95%. Pela tabela fornecida, observamos que o valor de 𝑡𝛼 está entre 1,658 e 1,645.


        Receita Federal (Analista Tributário) Estatística                                                52
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Utilizando 𝑡𝛼 = 1,65 (valor aproximado), obtemos o seguinte limite superior:
                                               6                    6
                      𝐿𝑆𝑢𝑝 = 50 + 1,65.             = 50 + 1,65.      = 50 + 0,825 ≅ 50,82
                                             √144                  12
Assim, rejeitamos a hipótese nula se a média amostral for superior a 50,82. Considerando que a média
observada é 𝑥̅ = 52,5, que é superior ao limite máximo, rejeitamos a hipótese nula.
Gabarito: D


9.      (FGV/2021 – FunSaúde/CE) Para testar H0: μ ≤ 20 contra H1: μ > 20, em que μ é a média de uma
distribuição normal com variância igual a 4, uma amostra aleatória simples de tamanho 100 foi observada
e revelou uma média amostral igual a 20, 3.
O p-valor aproximado associado ao teste uniformemente mais poderoso de tamanho α e a respectiva
decisão ao nível α = 0,01 são, respectivamente,

a) 0,067 e rejeitar H0
b) 0,006 e não rejeitar H0
c) 0,067 e não rejeitar H0
d) 0,006 e rejeitar H0
e) 0,344 e não rejeitar H0

Para resolver esta questão, utilize as tabelas fornecidas na prova, constantes ao final desta seção.

Comentários:

Aqui, temos um teste para média, com variância conhecida. O enunciado fornece os seguintes dados:

   •   Variância da população 𝜎 2 = 4 (logo, o desvio padrão é 𝜎 = √ 𝜎 2 = √4 = 2);
   •   Tamanho da amostra 𝑛 = 100;
   •   Média amostral observada 𝑥̅ = 20,3;
   •   Parâmetro da hipótese nula: 𝜇 = 20.

Com esses dados, podemos calcular a estatística do teste:

                                        𝑥̅ − 𝜇 20,3 − 20   0,3 0,3
                                   𝑧=      𝜎 =           =    =     = 1,5
                                                   2        2   0,2
                                          √𝑛     √100      10

O enunciado pede o p-valor, que corresponde à probabilidade de o resultado ser mais extremo do que o
resultado observado. Como estamos em um teste unilateral à direita, o p-valor é:

                                                    𝑝 = 𝑃(𝑍 > 1,5)

Pela tabela fornecida na prova, observamos que P(Z < 1,5) = 0,9332, que é complementar à probabilidade
desejada:

        Receita Federal (Analista Tributário) Estatística                                              53
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                               𝑝 = 𝑃(𝑍 > 1,5) = 1 − 0,9332 = 0,0668 ≅ 𝟎, 𝟎𝟔𝟕

Para o nível de significância 𝛼 = 0,01, temos 𝑝 > 𝛼, conforme ilustrado a seguir:

                                                                           𝑝 = 6,7%

                                                                               𝛼 = 1%


                                                                         1,5

Nessa situação, não rejeitamos a hipótese nula.

Gabarito: C
                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                               54
        www.estrategiaconcursos.com.br                                                  110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

                               Tabela da Distribuição Normal Padrão: P(Z < z)

      Receita Federal (Analista Tributário) Estatística                         55
      www.estrategiaconcursos.com.br                                            110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  56
      www.estrategiaconcursos.com.br                                     110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                            QUESTÕES COMENTADAS - FGV

Testes para a Proporção

1.     (FGV/2024 – EPE) Uma concessionária, que presta serviço na área de energia renovável, afirma que
90% dos seus clientes estão satisfeitos com seu serviço. Um analista curioso resolve fazer um teste de
hipótese para verificar se a afirmação da concessionária é verdadeira. Para tanto, selecionou uma amostra
de 25 clientes, dos quais verificou que 20 estão satisfeitos com os serviços prestados pela concessionária.

Considerando que o analista aplicou um teste bilateral com um nível de significância de 5%, onde Z α/2 =
1,96, assinale a opção que indica a conclusão do teste de hipótese aplicado pelo analista.

a) Não se pode rejeitar a hipótese nula, ou seja, não se pode contradizer a afirmação concessionária.
b) Rejeita-se a hipótese nula, ou seja, não se pode contradizer a afirmação concessionária.
c) Não se pode rejeitar a hipótese nula, ou seja, pode-se contradizer a afirmação concessionária.
d) Rejeita-se a hipótese nula, ou seja, pode-se contradizer a afirmação concessionária.
e) O teste é inconclusivo.

Comentários:

Trata-se de um teste bilateral para a proporção, em que os limites críticos são calculados como:

                                                                𝑝. (1 − 𝑝)
                                                 𝐿 = 𝑝 ± 𝑧. √
                                                                     𝑛

O enunciado informa que:
   •   A proporção indicada na hipótese nula é 𝑝 = 90% = 0,9;
   •   O valor do escore da normal padrão é 𝑧 = 1,96;
   •   O tamanho da amostra é 𝑛 = 25.
Substituindo esses dados na fórmula acima, temos:

                              0,9. (1 − 0,9)               √0,09
        𝐿 = 0,9 ± 1,96. √                    = 0,9 ± 1,96.       = 0,9 ± 0,392 × 0,3 = 0,9 ± 0,1176
                                    25                       5

Assim, o limite inferior é:
                                           𝐿𝐼𝑛𝑓 = 0,9 − 0,1176 = 0,7824
Como a proporção observada na amostra é:
                                                             20
                                                      𝑝̂ =      = 0,8
                                                             25

         Receita Federal (Analista Tributário) Estatística                                              57
         www.estrategiaconcursos.com.br                                                                 110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Que é superior ao limite crítico inferior, então não devemos rejeitar a hipótese nula. Portanto, não podemos
contradizer a afirmação de que a proporção é 𝑝 = 90%.
Gabarito: A


2.     (FGV/2023 – TJ/SE) Um fabricante garante que, no mínimo, 95% de seus produtos estão dentro das
especificações. Na dúvida, um auditor testa 200 peças e detecta 17 defeituosas. A 5% de significância, ele
conclui que a alegação do fabricante é:
Obs: Por aproximação e simplificação rejeita-se a hipótese nula para estatísticas maiores que 2, em
módulo.
a) provavelmente falsa;
b) certamente falsa;
c) provavelmente verdadeira;
d) certamente verdadeira;
e) impossível de ser verificada
Comentários:

Para concluirmos se a afirmação do fabricante é verdadeira ou falsa, conduzimos um teste de hipóteses para
a proporção e calculamos a estatística do teste:

                                                             𝑝̂ − 𝑝
                                                       𝑧=
                                                                𝜎𝑝

               𝑝.𝑞
Sendo 𝜎𝑝 = √ 𝑛 , que é o desvio padrão da proporção amostral.

O enunciado informa que 95% dos produtos estão dentro da especificação, que corresponde à hipótese nula.
Assim, considerando essa hipótese, a proporção de defeito é p = 0,05 e a de não defeito é q = 0,95. Sabendo
que o tamanho da amostra é n = 200, o desvio padrão da proporção amostral é:


                            𝑝. 𝑞    0,05 × 0,95    0,0475    0,02375 0,15
                     𝜎𝑝 = √      =√             =√        =√        ≅     = 0,015
                             𝑛          200         200        100    10

E a proporção de defeito encontrada na amostra é:

                                                          17
                                                   𝑝̂ =       = 0,085
                                                          200

Portanto, a estatística da amostra é aproximadamente:

                                               0,085 − 0,05 0,035
                                         𝑧≅                =       ≅ 2,3
                                                  0,015      0,015

        Receita Federal (Analista Tributário) Estatística                                                58
        www.estrategiaconcursos.com.br                                                                   110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Que é maior que o limite crítico, igual a 2. Assim, concluímos que a hipótese nula (afirmação do fabricante)
é provavelmente falsa.

Gabarito: A

3.     (FGV/2023 – TJ/SE) Em um período histórico, verificou-se que dos 10 mil processos semelhantes
julgados por diversos julgadores, 8 mil tiveram a liminar concedida a favor.
Considerando a normalidade dentro de um intervalo de 3 desvios padrões, se um determinado julgador
concedeu 780 liminares a favor entre os 900 processos julgados por ele, pode-se inferir, estatisticamente,
que o julgador:

a) está sobrecarregado;

b) concede liminares abaixo da média;

c) concede mais liminares que qualquer outro julgador;

d) concede liminares aleatoriamente com probabilidade de 50%;

e) concede liminares acima do normal.

Comentários:

Essa questão trabalha com intervalo de confiança para a proporção. A proporção padrão das liminares
concedidas é p = 80% = 0,8, enquanto a proporção observada para determinado julgador é:

                                                            780
                                                   𝑝̂ =         ≅ 0,87
                                                            900

Para verificar se esse resultado está dentro do limite esperado, considerando a hipótese nula como premissa,
calculamos o limite crítico superior:

                                                   𝐿𝑆𝑢𝑝 = 𝑝 + 𝑧. 𝜎𝑝̂

                𝑝.𝑞
Em que 𝜎𝑝̂ = √ 𝑛 é o desvio padrão da proporção amostral. Sabendo que n = 900, temos:


                                             𝑝. 𝑞    0,8 × 0,2    0,16 0,4
                                    𝜎𝑝̂ = √       =√           =√     =
                                              𝑛         900       900   30

Considerando o valor crítico z = 3, o limite superior é:

                                                            0,4
                                    𝐿𝑆𝑢𝑝 = 0,8 + 3 ×            = 0,8 + 0,04 = 0,84
                                                            30


        Receita Federal (Analista Tributário) Estatística                                                59
        www.estrategiaconcursos.com.br                                                                   110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Como a proporção do julgador supera o limite crítico superior, concluímos que a proporção de liminares que
ele concede é maior do que 80% (acima do normal).

Gabarito: E

4.      (FGV/2022 – TRT/MA) Para testar se a proporção p de pessoas infectadas pela dengue já é superior
a 10%, num dado momento, uma amostra aleatória simples de 400 pessoas será observada e será usado
o critério de decisão que decide por p > 10% se ao menos 48 pessoas estiverem infectadas. O nível de
significância associado a esse critério é aproximadamente igual a
a) 0,01.
b) 0,02.
c) 0,05.
                                                               ==219a34==

d) 0,09.
e) 0,12.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

Comentários:

Essa questão trabalha com o teste para a proporção, em que as hipóteses são:
                                                          𝐻0 : 𝑝 = 10%
                                                          𝐻1 : 𝑝 > 10%
O enunciado informa que, se pelo menos 48 pessoas, da amostra de 400 pessoas, estiverem infectadas, ficará
decido que p > 10%. Em outras palavras, o limite crítico para a proporção amostral é:
                                                          48   12
                                                   𝑝̂ =      =    = 0,12
                                                          400 100
Utilizando a aproximação à distribuição normal, haja vista o tamanho da amostra, temos a seguinte
transformação para a normal padrão, sabendo que 𝑝 = 0,1, logo 𝑞 = 1 − 𝑝 = 0,9, e que 𝑛 = 400:
                                          𝑝̂ − 𝑝       0,12 − 0,1               0,02 0,4
                                    𝑧=             =                        =        =     ≅ 1,33
                                            𝑝. 𝑞                                 0,3   0,3
                                          √            √0,1 × 0,9                20
                                             𝑛             400
Assim, o nível de significância, isto é, a probabilidade de obter uma proporção amostral que nos leva à
rejeição da hipótese nula, dado que a verdadeira proporção populacional é 𝑝 = 0,1, corresponde a:
                                               𝑃(𝑝̂ > 0,12) = 𝑃(𝑍 > 1,33)
Pela tabela fornecida, observamos que 𝑃(𝑍 < 1,33) = 0,9082. A probabilidade desejada é complementar:
                         𝑃(𝑝̂ > 0,12) = 1 − 𝑃(𝑍 < 1,33) = 1 − 0,9082 = 0,0918 ≅ 0,09
Gabarito: D

           Receita Federal (Analista Tributário) Estatística                                            60
           www.estrategiaconcursos.com.br                                                               110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

5.     (FGV/2022 – EPE) Um fabricante de certo produto afirma que, no máximo, 10% dos seus produtos
são defeituosos. Um comprador desconfiado do fabricante resolveu analisar uma amostra de tamanho
100 desses produtos e encontrou 19 itens defeituosos.
Considere α = 5% e que P(Z ≤ 1,64) = 0,95.
O valor da estatística de teste mais adequada para testar a hipótese nula de que o fabricante tem razão e
a respectiva conclusão são, respectivamente,

a) 3,0 e concluir que o fabricante tem razão.

b) 3,0 e concluir que o fabricante não tem razão.

c) 2,0 e concluir que o fabricante tem razão.

d) 2,0 e concluir que o fabricante não tem razão.

e) 2,5 e concluir que o fabricante tem razão.

Comentários:

Essa questão trabalha com um teste de hipóteses para proporções. O objetivo é verificar a proporção de
defeito indicada pelo fabricante é no máximo 𝑝 = 10% = 0,1, que corresponde à hipótese nula.

O enunciado informa que foi selecionada uma amostra de tamanho 𝑛 = 100, sendo encontrados 19 itens
defeituosos. Logo, a proporção de defeito encontrada na amostra é:

                                                            19
                                                   𝑝̂ =         = 0,19
                                                            100

Com 𝑝 = 0,1 (logo, 𝑞 = 1 − 𝑝 = 0,9) e 𝑝̂ = 0,19, podemos calcular a estatística do teste:

                                                              𝑝̂ − 𝑝
                                                       𝑧=
                                                                𝑝. 𝑞
                                                              √
                                                                 𝑛

Vale pontuar que, no cálculo do denominador da fórmula, que corresponde ao desvio padrão da proporção
amostral, consideramos a proporção indicada na hipótese nula.

                                       0,19 − 0,1           0,09       0,09 0,09
                                  𝑧=                 =             =        =      =𝟑
                                                                        0,3   0,03
                                       √0,1 × 0,9         √0,09         10
                                           100             100

Por fim, precisamos comparar esse resultado ao valor crítico. Sendo o nível de significância 𝛼 = 5% e o teste
unilateral, precisamos do valor de z que delimita uma probabilidade P(Z < z) = 95%. Pelo dado do enunciado,
observamos que z = 1,64.

        Receita Federal (Analista Tributário) Estatística                                                 61
        www.estrategiaconcursos.com.br                                                                   110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Como a estatística do teste é maior que o valor crítico, rejeitamos a hipótese nula, ou seja, concluímos que
o fabricante não tem razão.

Gabarito: B

6.      (FGV/2021 – FUNSAÚDE-CE) Para testar H0: p ≤ 0,5 versus H1: p > 0,5, em que p é uma proporção
de “sucessos” populacional, uma amostra aleatória simples de tamanho 144 será obtida e será usado o
critério de decisão que rejeitará H0 se a proporção de “sucessos” observada na amostra for maior do que
0,6. O nível de significância desse critério é, aproximadamente, igual a

a) 0,01;

b) 0,02;

c) 0,03;

d) 0,04;

e) 0,05.

Para resolver essa questão, utilize a tabela normal apresentada ao final, fornecida na prova.
Comentários:

O enunciado pede o nível de significância do teste, que é a probabilidade de rejeitar a hipótese nula sendo
ela verdadeira. Para isso, informa que a hipótese será rejeitada se a proporção amostral for maior que 𝑝̂ =
0,6 e que a proporção indicada na hipótese nula é p = 0,5. Assim, temos a seguinte transformação para a
normal padrão:

                                                                𝑝̂ − 𝑝
                                                           𝑧=
                                                                  𝑝. 𝑞
                                                                √
                                                                   𝑛

            𝑝.𝑞
Em que √ 𝑛 corresponde ao desvio padrão da proporção amostral. Substituindo os valores fornecidos:

                                          0,6 − 0,5        0,1         12 12
                                    𝑧=                 =       = 0,1 ×     =   = 2,4
                                                           0,5         0,5   5
                                         √0,5 × 0,5        12
                                             144

Pela tabela normal padrão, observamos que P(Z < 2,4) = 0,9918. Logo, a probabilidade de obter uma
proporção maior que 𝑝̂ = 0,6 é complementar:

                  𝑃(𝑝̂ > 0,6) = 𝑃(𝑍 > 2,4) = 1 − 𝑃(𝑍 < 2,4) = 1 − 0,9918 = 0,0082 ≅ 0,01

Gabarito: A


           Receita Federal (Analista Tributário) Estatística                                             62
           www.estrategiaconcursos.com.br                                                                110

                                         


---

Equipe Exatas Estratégia Concursos
Aula 12

                               Tabela da Distribuição Normal Padrão: P(Z < z)

      Receita Federal (Analista Tributário) Estatística                         63
      www.estrategiaconcursos.com.br                                            110

                                    


---

     Equipe Exatas Estratégia Concursos
     Aula 12

                              QUESTÕES COMENTADAS - FGV

p-valor

1.       (FGV/2023 – TJ/SE) Sobre teste de hipóteses, é correto afirmar que:
a) ocorre erro do tipo II quando a hipótese nula é verdadeira e rejeitada;
b) ocorre erro do tipo II quando a hipótese nula é falsa e não é rejeitada;
c) o p-valor representa a probabilidade de que a hipótese nula seja verdadeira;
d) o poder de um teste aumenta quando a probabilidade do erro do tipo I diminui;
e) os erros do tipo I e do tipo II não são relacionados.
Comentários:

Precisamos identificar a afirmação correta a respeito dos tipos de erros e do p-valor, que é a probabilidade
de obtermos um resultado mais extremo do que o observado, considerando como premissa a hipótese nula.
Assim, verificamos que a alternativa C está errada.

O erro tipo II ocorre quando não rejeitamos a hipótese nula sendo ela falsa, logo a alternativa A está errada
e a alternativa B está certa. Embora esses erros não façam parte do mesmo Espaço Amostral, há uma relação
entre eles: quando diminuímos um tipo de erro, para um mesmo tamanho amostral, o outro aumenta. Logo,
a alternativa E está errada. Assim, quando aumentamos o poder do teste, que é complementar ao erro tipo
II, este erro diminui e, dessa forma, o erro tipo I aumenta. Logo, a alternativa D está errada.

Gabarito: B

2.     (FGV/2022 – TRT/PB) Para testar H0: p > 0,5 versus H1: p ≤ 0,5 será usado o critério usual baseado
na proporção de sucessos amostral. Observada uma amostra aleatória de tamanho 225, verificou-se uma
proporção de sucessos amostral aproximadamente igual a 46%. O p-valor associado a esse critério é,
então, aproximadamente igual a

a) 0,01.

b) 0,05.

c) 0,09.

d) 0,12.

e) 0,15.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

           Receita Federal (Analista Tributário) Estatística                                              64
           www.estrategiaconcursos.com.br                                                                110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Comentários:

O p-valor é a probabilidade de o resultado do teste ser mais extremo que o resultado obtido, considerando
a hipótese nula como premissa. Sabendo que a proporção amostral observada foi 𝑝̂ = 0,46 e que o teste é
unilateral à esquerda, temos:
                                              𝑝 − 𝑣𝑎𝑙𝑜𝑟 = 𝑃(𝑝̂ < 0,46)
Para calcular essa probabilidade, vamos utilizar a transformação para a normal padrão, sabendo que a
proporção indicada na hipótese nula é 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 = 0,5):
                                    𝑝̂ − 𝑝       0,46 − 0,5                  −0,04 −0,6
                              𝑧=             =                           =        =     = −1,2
                                     𝑝×𝑞                                      0,5   0,5
                                   √             √0,5 × 0,5                   15
                                      𝑛              225
Pela tabela normal padrão, observamos que 𝑃(𝑍 ≤ 1,2) = 0,8849. A probabilidade complementar é:
                                                            ==219a34==

                            𝑃(𝑍 > 1,2) = 1 − 𝑃(𝑍 ≤ 1,2) = 1 − 0,8849 = 0,1151
Pela simetria da normal padrão, temos:
                                  𝑃(𝑍 < −1,2) = 𝑃(𝑍 > 1,2) = 0,1151 ≅ 0,12
Que é justamente a probabilidade desejada.
Gabarito: D


3.     (FGV/2022 – TRT/PB) Considere uma variável aleatória populacional X com distribuição Normal
     𝟐
(𝝁, 𝝈 ), cujos parâmetros são desconhecidos. Um pesquisador coletou uma amostra aleatória de 100
observações com o objetivo de testar as seguintes hipóteses:
Hipótese nula: 𝝁 = 𝟐𝟎𝟎
Hipótese alternativa: 𝝁 ≠ 𝟐𝟎𝟎
Na amostra coletada, obtém-se uma média igual a 203 e uma variância (baseada no estimador não viesado
usual) igual a 100. O pesquisador considerou o nível de significância de 5% para esse teste, e que os valores
críticos correspondentes são -2,06 e 2,06.
A esse respeito, assinale a afirmativa incorreta.

a) A probabilidade do erro tipo I é igual a 5%

b) A estatística do teste apropriada será igual a 3.

c) A hipótese nula é rejeitada.

d) O p-valor é maior que 5%

e) O intervalo de confiança para 𝜇 é dado por [203 ± 2,06]

Comentários:


        Receita Federal (Analista Tributário) Estatística                                                 65
        www.estrategiaconcursos.com.br                                                                    110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Essa questão trabalha com um teste bilateral para a média de uma população, com variância desconhecida.
Os dados fornecidos são:

   •   Parâmetro indicado na hipótese nula: 𝜇 = 200;

   •   Nível de significância 𝛼 = 5%, associado a 𝑡𝐶 = ±2,06;

   •   Tamanho da amostra 𝑛 = 100

   •   Média amostral observada: 𝑋̅ = 203;

   •   Variância amostral observada: 𝑠 2 = 100, logo o desvio padrão é 𝑠 = √𝑠 2 = 10.
Vamos analisar as alternativas, sabendo que precisamos da alternativa incorreta. Em relação à alternativa A,
a probabilidade do erro tipo I, qual seja de rejeitar a hipótese nula, sendo ela verdadeira, é igual ao nível de
significância. Como o nível de significância é igual a 5%, a alternativa A está correta.
Em relação à alternativa B, a estatística do teste é dada por:

                                                𝑋̅ − 𝜇 203 − 200    3
                                       𝑡𝑜𝑏𝑠 =      𝑠 =           =    =3
                                                          10       10
                                                  √𝑛     √100      10

De fato, a estatística do teste é igual a 3, logo, a alternativa B está correta.
Em relação à alternativa C, para sabermos se devemos rejeitar ou não a hipótese nula, podemos comparar a
estatística do teste 𝑡𝑜𝑏𝑠 = 3 com o valor crítico tabelado 𝑡𝐶 = 2,06.
Como a estatística supera o valor crítico, rejeitamos a hipótese nula, logo, a alternativa C está correta.
Em relação à alternativa D, o p-valor é a probabilidade de o resultado ser mais extremo do que o resultado
obtido, considerando a premissa da hipótese nula. Considerando que a hipótese nula deve ser rejeitada
quando o p-valor for menor que o nível de significância e sabendo que rejeitamos a hipótese nula, então,
podemos concluir que o p-valor é menor do que o nível de significância de 5%.
Alternativamente, podemos raciocinar que o p-valor é a probabilidade de o resultado ser mais extremo:

                                                𝑝 − 𝑣𝑎𝑙𝑜𝑟 = 𝑃(|𝑇| > 3)

E sabemos que o nível de significância de 5% está associado a 𝑡 = 2,06, ou seja:

                                                𝛼 = 𝑃(|𝑇| > 2,06) = 5%

Consequentemente, a probabilidade 𝑃(|𝑇| > 3) é menor que 5%. Logo, a alternativa D está incorreta.
Em relação à alternativa E, o intervalo de confiança para a média é dado por:

                                                𝑠                     10
                             𝐼𝐶 = 𝑋̅ ± 𝑡 ×          = 203 ± 2,06 ×          = 203 ± 2,06
                                              √𝑛                     √100

Logo, a alternativa E está correta.

         Receita Federal (Analista Tributário) Estatística                                                   66
         www.estrategiaconcursos.com.br                                                                      110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                  67
        www.estrategiaconcursos.com.br                                     110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  68
      www.estrategiaconcursos.com.br                                     110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                           QUESTÕES COMENTADAS - FGV

Teste Qui-quadrado

1.     (FGV/2024 – TJ/RR) Para testar a hipótese nula de que as probabilidades de classificação em cinco
classes são todas igualmente prováveis, uma amostra de 200 indivíduos mostrou os seguintes resultados:

                                       Classe     1          2    3    4    5
                                       Frequência 50         40   30   30   50

O valor da estatística qui-quadrado usual sob a hipótese nula é igual a

a) 8
b) 9
c) 10
d) 11
e) 12

Comentários:

Aqui, temos um teste de aderência, que verifica se os dados seguem determinadas proporções, no caso, de
que as probabilidades são todas iguais. Considerando que o tamanho total da amostral é de 200 indivíduos
e que há 5 classes, então, o número esperado de indivíduos para cada classe é:

                                                            200
                                                    𝐸𝑖 =        = 40
                                                             5

E a estatística do teste qui-quadrado é dada por:

                                                   2
                                                      (𝑂𝑖 − 𝐸𝑖 )2
                                                 𝒳 =∑
                                                          𝐸𝑖

                        (50 − 40)2 (40 − 40)2 (30 − 40)2 (30 − 40)2 (50 − 40)2
                𝒳2 =              +          +          +          +
                            40         40         40         40         40

                           2
                             102 02 (−10)2 (−10)2 102     100
                         𝒳 =    +  +      +      +    =4×     = 10
                             40 40    25     25    40     40

Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                            69
        www.estrategiaconcursos.com.br                                                               110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

2.     (FGV/2024 – SES/MT) Para testar a independência entre duas variáveis dicotômicas 1 e 2, uma
tabela de contingência 2 x 2 foi obtida a partir de uma amostra aleatória de 100 observações e mostrou os
seguintes resultados:

A estatística de teste usual qui-quadrado (com 1 grau de liberdade) para esses dados é igual a

a) 1
b) 2
c) 3
d) 4

Comentários:

Para calcular a estatística do teste qui-quadrado, precisamos dos valores esperados.

O valor esperado de cada campo da tabela de contingência é obtido multiplicando-se o total da linha pelo
total da coluna e dividindo pelo tamanho total da amostra.

Verifica-se que o total de ambas as linhas é igual a 50, assim como o total de ambas as colunas. Considerando
que a amostra tem tamanho 𝑛 = 100, o valor esperado de cada campo é:

                                                   50 × 50 2500
                                            𝐸𝑖 =          =     = 25
                                                     100    100

E a estatística do teste qui-quadrado é dada por:

                                                   2
                                                      (𝑂𝑖 − 𝐸𝑖 )2
                                                 𝒳 =∑
                                                          𝐸𝑖

               (30 − 25)2 (20 − 25)2 (30 − 25)2 (20 − 25)2 52 (−5)2 52 (−5)2
        𝒳2 =             +          +          +          =    +    +    +
                   25         25         25         25      25   25   25   25

                                        25 25 25 25
                                 𝒳2 =     +  +  +   =1+1+1+1=4
                                        25 25 25 25

Gabarito: D

        Receita Federal (Analista Tributário) Estatística                                                 70
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

3.     (FGV/2023 – TJ/SE) Para se testar a independência entre dois atributos, dados amostrais serão
organizados em uma tabela de contingência. O atributo A tem seis classes e o atributo B tem cinco.

Se a amostra é suficientemente grande, será usada então uma estatística de teste que tem, sob a hipótese
de independência, distribuição:

a) qui-quadrado com 20 graus de liberdade.
b) qui-quadrado com 30 graus de liberdade.
c) t de student com 20 graus de liberdade;
d) t de student com 30 graus de liberdade;
e) normal
Comentários:

Para testar a independência entre dois atributos, utilizamos o teste qui-quadrado de independência, que
segue distribuição qui-quadrado. O número de graus de liberdade é dado por:

                                                 𝑘 = (𝐿 − 1). (𝐶 − 1)

Em que L é o número de linhas e C é o número de colunas da tabela de contingência. O enunciado informa
que o atributo A tem 6 classes e o atributo B tem 5 classes, logo, temos L = 6 e C = 5 (ou vice-versa). Assim,
o número de graus de liberdade é:

                                        𝑘 = (6 − 1). (5 − 1) = 5 × 4 = 20

Gabarito: A

4.     (FGV/2022 – SEFAZ/AM) Para se testar a independência entre dois atributos, dados amostrais serão
organizados em uma tabela de contingência. O atributo A tem seis classes, o atributo B tem cinco.

Se a amostra á suficientemente grande, será usada então uma estatística de teste que tem, sob a hipótese
de independência, distribuição

a) qui-quadrado com 30 graus de liberdade.
b) qui-quadrado com 20 graus de liberdade.
c) normal padrão.
d) F-Snedecor com 5 graus de liberdade no numerador e 6 no denominador.
e) F-Snedecor com 4 graus de liberdade no numerador e 5 no denominador.
Comentários:

Para testar a independência entre 2 atributos, utilizamos o teste qui-quadrado de independência. O número
de graus de liberdade é dado por:


        Receita Federal (Analista Tributário) Estatística                                                  71
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                                 𝑘 = (𝐿 − 1). (𝐶 − 1)

Em que L é o número de linhas e C é o número de colunas da tabela de contingência. O enunciado informa
que o atributo A tem 6 classes e o atributo B tem 5 classes, logo, temos L = 6 e C = 5 (ou vice-versa). Assim,
o número de graus de liberdade é:

                                        𝑘 = (6 − 1). (5 − 1) = 5 × 4 = 20

Gabarito: B

5.     (FGV/2022 – TJDFT) Após a cerimônia de posse dos novos servidores aprovados em um concurso
para o TJDFT, os recém-nomeados precisam realizar um curso de capacitação especializado. Ao final do
curso, os alunos avaliam o curso de forma negativa, se suas expectativas não tiverem sido atendidas, ou
                                                            ==219a34==

de forma positiva, caso contrário.

Os dados estão representados na tabela a seguir.

                                                    Avaliações do curso
                                     Gênero                                Total
                                                    Negativa Positiva
                                     Masculino      30         30          60
                                     Feminino       10         30          40
                                     Total          40         60          100

Com o objetivo de concluir se as avaliações são ou não dependentes do gênero, realizou-se o teste do qui-
quadrado. O valor do χ2 observado foi de 6,25.

Utilizando-se um nível de 10% de confiança, é possível concluir que:

a) não se pode rejeitar a hipótese nula, ou seja, a avaliação independe do gênero, pois a estatística de teste
   é maior do que o valor crítico;
b) não se pode rejeitar a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste
   é menor do que o valor crítico;
c) não se pode rejeitar a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste
   é maior do que o valor crítico;
d) rejeita-se a hipótese nula, ou seja, a avaliação independe do gênero, pois a estatística de teste é menor
   do que o valor crítico;
e) rejeita-se a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste é maior do
   que o valor crítico.
Para resolver essa questão, utilize a tabela fornecida na prova, constante ao final desta seção.

Comentários:

        Receita Federal (Analista Tributário) Estatística                                                  72
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

A questão trabalha com o teste qui-quadrado de independência, para verificar se o gênero e a avaliação do
curso são independentes ou não. A hipótese nula do teste é de que os atributos são independentes, a qual
será rejeitada se a estatística do teste for superior ao valor crítico.

Sabendo que há L = 2 linhas e C = 2 colunas na tabela de contingência, o número de graus de liberdade é:

                                𝑘 = (𝐿 − 1). (𝐶 − 1) = (2 − 1). (2 − 1) = 1 × 1 = 1

Para 1 grau de liberdade e 𝛼 = 10% = 0,1, que corresponde à área da cauda superior, observamos na tabela
ao final desta seção que o valor crítico é 𝒳𝐶2 = 2,71. Sabendo que a estatística observada é 𝒳𝑇2 = 6,25,
concluímos que a estatística do teste é maior do que o valor crítico, conforme ilustrado a seguir:

                                                                  10%

                                                           2,71 6,25

Assim, rejeitamos a hipótese nula de independência e concluímos que a avaliação depende do gênero.

Gabarito: E

6.      (FGV/2022 – TRT/MA) Para testar a independência entre dois atributos, 400 pessoas foram
classificadas de acordo com sexo e opinião em relação a certa proposta da prefeitura. Os resultados
observados estão na tabela de contingências a seguir.

                                                        Opinião
                                                                    Total
                                                     Contra A favor
                                               Masc.  120      80    200
                                         Sexo
                                               Fem.   130      70    200
                                            Total     250     150    400
O valor da estatística de teste qui-quadrado usual para esses dados é aproximadamente igual a
a) 1,07.
b) 1,56.
c) 2,24.
d) 2,56.
e) 3,02.

Comentários:

           Receita Federal (Analista Tributário) Estatística                                               73
           www.estrategiaconcursos.com.br                                                              110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

O teste qui-quadrado de independência verifica se dois atributos (no caso, sexo e opinião em relação à
proposta) são independentes ou não. Para isso, o teste compara os resultados observados com os valores
que seriam esperados, caso os dois atributos fossem, de fato, independentes.
Nessa situação, as proporções seriam sempre as mesmas. Por exemplo, se metade das pessoas é do sexo
masculino, então metade dos que são contrários à proposta deveriam ser do sexo masculino e metade dos
que são favoráveis deveriam ser do sexo masculino.
Assim, calculamos o valor esperado de cada campo, multiplicando o total da linha com o total da coluna e
dividindo pelo número total de pessoas:
                                                            𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                  𝐸𝑖𝑗 =
                                                                𝑡𝑜𝑡𝑎𝑙


                                     Contra                             A Favor           Total
                                𝟐𝟎𝟎 × 𝟐𝟓𝟎                           𝟐𝟎𝟎 × 𝟏𝟓𝟎
              Masculino                    = 125                               = 75       200
                                   400                                 400
                                𝟐𝟎𝟎 × 𝟐𝟓𝟎                           𝟐𝟎𝟎 × 𝟏𝟓𝟎
              Feminino                    = 125                               = 75        200
                                   400                                 400
                Total                 250                                150              400


Agora, calculamos o quadrado do desvio do valor observado para cada campo, que consta na tabela
fornecida no enunciado, em relação ao valor esperado, que acabamos de calcular:

                                                             (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                                  𝐸𝑖𝑗
                                                Contra                        A Favor
                                     (120 − 125)2 1                     (80 − 75)2 1
                     Masculino                   = = 0,2                          = = 0,333
                                         125      5                         75     3
                                     (130 − 125)2 1                     (70 − 75)2 1
                        Feminino                 = = 0,2                          = = 0,333
                                         125      5                         75     3


A estatística do teste consiste na soma desses valores:

                                                  2
                                                     (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                𝒳 =∑
                                                          𝐸𝑖𝑗

                               𝒳 2 ≅ 0,2 + 0,333 + 0,2 + 0,333 = 1,066 ≅ 1,07

Gabarito: A

        Receita Federal (Analista Tributário) Estatística                                            74
        www.estrategiaconcursos.com.br                                                               110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

7.    (FGV/2022 – TRT/PB) Para testar se dois atributos são independentes, 400 indivíduos foram
observados e a seguinte tabela de contingências 2x2 foi obtida:


                                                                      Atributo 1
                                                                                         Total
                                                                 Presente Ausente

                                                 Presente           50            50      100
                                  Atributo 2
                                                 Ausente            250           50      300

                                            Total                   300           100     400

O valor da estatística de teste qui-quadrado usual para esse teste é aproximadamente igual a

a) 16,1.

b) 28,8.

c) 36,6.

d) 44,4.

e) 55,5.

Comentários:

O teste qui-quadrado de independência verifica se dois atributos são independentes ou não, comparando
os resultados observados com os valores que seriam esperados, caso os dois atributos fossem, de fato,
independentes.
O valor esperado de cada campo é o produto do total da linha com o total da coluna, dividido pelo número
total de indivíduos:
                                                               𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                     𝐸𝑖𝑗 =
                                                                   𝑡𝑜𝑡𝑎𝑙


                                                                   Atributo 1
                                                                                                   Total
                                              Presente                               Ausente
                                           𝟏𝟎𝟎 × 𝟑𝟎𝟎                             𝟏𝟎𝟎 × 𝟏𝟎𝟎
                        Presente                     = 75                                   = 25   100
                                              400                                   400
       Atributo 2
                                          𝟑𝟎𝟎 × 𝟑𝟎𝟎                              𝟑𝟎𝟎 × 𝟏𝟎𝟎
                        Ausente                     = 225                                  = 75    300
                                             400                                    400
                   Total                        300                                   100          400

           Receita Federal (Analista Tributário) Estatística                                               75
           www.estrategiaconcursos.com.br                                                                  110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Agora, calculamos o quadrado do desvio do valor observado para cada campo, que consta na tabela
fornecida no enunciado, em relação ao valor esperado, que acabamos de calcular:
                                                            (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                                 𝐸𝑖𝑗
                                                                      Atributo 1
                                                      Presente                            Ausente
                                                      2          2
                                         (50 − 75)     (25)     25                (50 − 25)2 (25)2
                          Presente                 =          =                             =      = 25
                                             75       3 × 25     3                    25      25
            Atributo 2                              2        2
                                        (250 − 225)     (25)     25               (50 − 75)2   (25)2    25
                           Ausente                    =      2
                                                               =                             =        =
                                             225        (15)      9                   75       3 × 25    3


A estatística do teste consiste na soma desses valores:

                                                  2
                                                     (𝑂𝑖𝑗 − 𝐸𝑖𝑗 )2
                                                𝒳 =∑
                                                          𝐸𝑖𝑗

                                25        25 25 75 + 225 + 25 + 75 400
                         𝒳2 =      + 25 +    +   =                =    ≅ 44,4
                                 3         9   3        9           9

Gabarito: D

8.     (FGV/2021 – FunSaúde/CE) A tabela de contingências a seguir mostra a classificação de indivíduos
de acordo com as variáveis sexo e preferência por dois candidatos em uma eleição.

                                                          Preferem
                                                                            Preferem
                                                          Candidato
                                                                            Candidato B
                                                          A
                                   Sexo
                                                          58                42
                                   masculino
                                   Sexo feminino          62                138

A estatística qui-quadrado usual para testar independência entre sexo e preferência é, aproximadamente,
igual a

a) 5
b) 10
c) 20
d) 25
e) 30


        Receita Federal (Analista Tributário) Estatística                                                    76
        www.estrategiaconcursos.com.br                                                                       110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Comentários:

Para resolver essa questão, precisamos da estatística do teste. Para isso, precisamos calcular o valor
esperado de cada campo, multiplicando a soma da linha correspondente com a soma da coluna
correspondente e dividindo pelo número total de elementos.

Pela tabela fornecida, temos 58 + 42 = 100 indivíduos do sexo masculino e 62 + 138 = 200 indivíduos do sexo
feminino, totalizando 300 indivíduos. Desses, 58 + 62 = 120 preferem o candidato A e 42 + 138 = 180
preferem o candidato B.

Os valores esperados de cada campo estão indicados na tabela a seguir:

                                              Preferem                   Preferem
                                                                                        Total
                                             Candidato A               Candidato B
                                           100 × 120                 100 × 180
                     Sexo masculino                  = 40                       = 60    100
                                              300                       300
                                           200 × 120                 200 × 180
                      Sexo feminino                  = 80                       = 120   200
                                              300                       300
                           Total                 120                        180         300


Em seguida, calculamos o quadrado do desvio, dividido pelo valor esperado, para cada campo:

                                                       (𝑂𝑖 − 𝐸𝑖 )2
                                                           𝐸𝑖

Para o campo na primeira linha e primeira coluna (sexo masculino, candidato A), temos:
                                    (58 − 40)2 (18)2 324
                                               =       =       = 8,1
                                        40         40     40
Para o campo na primeira linha e segunda coluna (sexo masculino, candidato B), temos:
                                  (42 − 60)2 (−18)2 324
                                              =          =      = 5,4
                                      60           60       60
Para o campo na segunda linha e primeira coluna (sexo feminino, candidato A), temos:
                                  (62 − 80)2 (−18)2 324
                                             =          =     = 4,05
                                      80          80      80
E para o campo na segunda linha e segunda coluna (sexo feminino, candidato B), temos:
                                     (138 − 120)2 (18)2 324
                                                  =         =      = 2,7
                                         120          120     120
Por fim, a estatística do teste corresponde à soma desses resultados:
                                   𝒳𝑇2 = 8,1 + 5,4 + 4,05 + 2,7 = 20,25 ≅ 20
Gabarito: C

        Receita Federal (Analista Tributário) Estatística                                               77
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  78
      www.estrategiaconcursos.com.br                                     110

                                    


---

     Equipe Exatas Estratégia Concursos
     Aula 12

                                   LISTA DE QUESTÕES - FGV

Conceitos Fundamentais

1.       (FGV/2025 – TCE-RR - Adaptada) Julgue a afirmativa a seguir sobre inferência estatística.

O teste de hipótese presume que a negação da hipótese nula é verdadeira, cria um modelo para isso e testa
se o efeito observado é plausível dentro de um intervalo de confiança.

2.       (FGV/2025 – TCE-RR - Adaptada) Julgue a afirmativa a seguir sobre inferência estatística.

Em um teste de hipótese, se a hipótese alternativa contém o símbolo maior que (“>”), então tem-se um teste
unilateral à esquerda.

3.     (FGV/2024 – EPE) Um fabricante de certo equipamento diz que o tempo médio de sobrevida de seu
produto é de 720 dias. Para verificar se a afirmação do fabricante estava correta, foi realizado um teste de
hipótese. Para tanto, foi selecionado uma amostra de 25 equipamentos, em que se observou que o tempo
médio e o desvio padrão dessa amostra foi de, aproximadamente, 700 dias e 20 dias respectivamente.
Levando em consideração a potência do teste, assinale a opção que apresenta a hipótese alternativa mais
adequada para a realização do teste.
a) HA: μ < 720.
b) HA: μ ≠ 720.
c) HA: μ > 720.
d) HA: μ < 700.
e) HA: μ ≠ 700.

           Receita Federal (Analista Tributário) Estatística                                             79
           www.estrategiaconcursos.com.br                                                                110

                                         


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. ERRADO                                   3. LETRA A
 2. ERRADO

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                  80
      www.estrategiaconcursos.com.br                                     110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                  LISTA DE QUESTÕES - FGV

Tipos de Erros

1.     (FGV/2024 – Pref. Nova Iguaçu) A prefeitura de uma cidade está preocupada com o elevado índice
de acidentes automobilísticos que vêm acontecendo em determinada rodovia. O número de acidentes
nesse local pode ser modelado por uma distribuição Poisson de média λ. A prefeitura decide registrar o
número X de acidentes nessa rodovia ao longo de um mês para testar a hipótese de que o número médio
de acidentes nesse intervalo é maior que 20.
Assim, foi definido que:
H0: λ = 20
H1: λ > 20
E a hipótese nula será rejeitada se X > 26.
É correto afirmar que a probabilidade de que seja cometido erro do Tipo I corresponde à
a) P(X ≥ 25 | λ = 20).
b) P(X ≥ 25 | λ = 26).
c) P(X ≥ 26 | λ = 20).
d) P(X ≥ 27 | λ = 20).
e) P(X ≥ 27 | λ = 26).


2.     (FGV/2024 – TJ/RR) Considere que uma amostra aleatória simples de tamanho 100 de uma
densidade 𝑵(𝝁, 𝟐𝟓) será obtida para testar 𝑯𝟎 : 𝝁 ≤ 𝟏𝟎 versus 𝑯𝟏 : 𝝁 ≤ 𝟏𝟎. Será usado como critério de
                       ̅ > 𝟏𝟎, 𝟖𝟐.
decisão rejeitar 𝑯𝟎 se 𝒙
A função de potência desse teste quando 𝝁 = 𝟏𝟏 é aproximadamente igual a
a) 0,35
b) 0,50
c) 0,64
d) 0,72
e) 0,80

Para resolver essa questão, considere a tabela normal padrão fornecida na prova, constante ao final desta
seção de questões.

          Receita Federal (Analista Tributário) Estatística                                           81
          www.estrategiaconcursos.com.br                                                              110

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 12

3.     (FGV/2023 – TJ/SE) A função poder de um teste de hipóteses é uma medida importante para avaliar
a capacidade de o teste detectar uma diferença ou efeito verdadeiro, caso ele exista. A função poder é
definida como a probabilidade de:
a) rejeitar a hipótese nula falsa;
b) rejeitar a hipótese nula verdadeira;
c) aceitar a hipótese nula verdadeira;
d) aceitar a hipótese nula, dada a hipótese alternativa verdadeira;
e) rejeitar a hipótese alternativa, dada a hipótese nula verdadeira.


4.     (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 400 será usada para testar
𝑯𝟎 : 𝝁 ≤ 𝟏𝟎𝟎 versus 𝑯𝟏 : 𝝁 > 𝟏𝟎𝟎, em que 𝝁 é a média de uma densidade normal com desvio padrão
                                                 ̅ > 𝟏𝟎𝟓 será usado.
suposto igual a 50. O critério que rejeita 𝑯𝟎 se 𝒙

O nível de significância desse critério e a probabilidade de erro tipo II se 𝝁 = 103 valem, respectivamente,
aproximadamente:

a) 0,02 e 0,79.
b) 0,02 e 0,21.
c) 0,02 e 0,54.
d) 0,05 e 0,21.
e) 0,05 e 0,38.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

5.    (FGV/2021 – IMBEL) O planejamento e controle de qualidade de uma operação envolvem
amostragens de desempenho, que devem ser analisadas. Nessas análises, podem ocorrer erros de
julgamento, que se classificam em tipos X e Z. Assim, o quadro a seguir apresenta as possíveis decisões a
se tomar para cada resultado de análise.

                                                 O lote de sacos de arroz está, na
                                                            realidade...

                               Decisão           Adequado             Inadequado

                               Rejeitar               (a)           Decisão Correta

                                Aceitar       Decisão Correta               (b)

Sobre esse quadro, analise as afirmativas a seguir.
I. O erro de análise indicado por (a) corresponde a um erro do tipo X.

         Receita Federal (Analista Tributário) Estatística                                               82
         www.estrategiaconcursos.com.br                                                                  110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

II. O erro de análise indicado por (b) também corresponde a um erro do tipo X.
III. Os erros (a) e (b) podem também ser referidos como riscos para o consumidor e para o produtor,
respectivamente.
Está correto o que se afirma em

a) I, somente.

b) II, somente.

c) I e II, somente.

d) I e III, somente.

e) II e III, somente.

         Receita Federal (Analista Tributário) Estatística                                      83
         www.estrategiaconcursos.com.br                                                         110

                                       


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                  84
      www.estrategiaconcursos.com.br                                     110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. LETRA D                                  3. LETRA A                  5. LETRA A
 2. LETRA C                                  4. LETRA A

      Receita Federal (Analista Tributário) Estatística                               85
      www.estrategiaconcursos.com.br                                                  110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                LISTA DE QUESTÕES - FGV

Testes para a Média

1.      (FGV/2024 – SES/MT) Para testar H0: μ ≤ 20 versus H1: μ > 20, em que μ é a média de uma
distribuição normal com variância conhecida e igual a 125, uma amostra aleatória simples de tamanho 100
será obtida e o critério de decisão rejeitará H0 se o valor da média amostral for maior do que 23.

Se P[Z > z] indica a probabilidade de que uma variável com distribuição normal padrão seja maior do que
z, então, o tamanho α deste critério de teste será dado por
a) 𝛼 = P[Z > 2] ≅ 0,023
b) 𝛼 = P[Z > 1,6] ≅ 0,054
c) 𝛼 = P[Z > 1,4] ≅ 0,081
d) 𝛼 = P[Z > 1,2] ≅ 0,115

2.      (FGV/2024 – SES/MT) Para testar H0: μ ≤ 36 versus H1: μ > 36, em que μ é a média de uma
distribuição normal com variância conhecida e igual a 144, uma amostra aleatória simples de tamanho
n=100 será obtida.

Lembre-se que se Z tem distribuição N(0, 1), então P[Z > 1,64] ≅ 0,05. Assim, ao nível de significância de
                                                ̅ da média amostral rejeitará H0 se 𝒙
5%, o critério usual baseado no valor observado 𝒙                                   ̅ for maior ou igual a

a) 37,124
b) 37,968
c) 38,605
d) 39,666

3.     (FGV/2024 – Pref. Vitória) Para testar H0: µ ≤ 30 versus H1: µ > 30, em que µ é a média de uma
variável populacional suposta normalmente distribuída com variância 64, uma amostra aleatória simples
de tamanho 100 será obtida.

Lembre-se que se Z tem distribuição N(0, 1), então P[Z > 1,64] ≅ 0,05. O teste uniformemente mais potente
de tamanho aa = 0,05 rejeitará H0 se o valor da média amostral observada for maior ou igual a

a) 30,866
b) 30,978
c) 31,312

        Receita Federal (Analista Tributário) Estatística                                              86
        www.estrategiaconcursos.com.br                                                                 110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

d) 32,568
e) 33,650

4.     (FGV/2024 – CVM) Para a resolução da questão abaixo, pode ser necessário utilizar alguns dos
resultados a seguir.

Probabilidades aproximadas da Normal padrão Z~N(0,1): P(Z>0.25) = 0.40; P(Z>0.5) = 0.31; P(Z>0.8) = 0.21;
P(Z>1) = 0.16; P(Z>1.2) = 0.12; P(Z>1.28) = 0.1; P(Z>1.5) = 0.07; P(Z>1.64) = 0.05; P(Z>1,96) = 0.025; P(Z>2)
= 0.02; P(Z>2,33) = 0,01; P(Z>2.5) = 0.06; P(Z>2,575) = 0,005; P(Z>3) = 0.013

O número de fraudes anuais detectadas no mercado financeiro, nos últimos 16 anos, foi registrado por um
auditor. Ele deseja testar se o resultado fornece evidência de que a média anual de fraudes no mercado é
inferior a 4, supondo que esses 16 registros constituam observações de uma amostra aleatória simples
obtida a partir de uma população Normal. A variância dessa população é conhecida e igual a 25.

Nessas condições, o auditor obterá evidência estatística de que a média populacional é inferior a 4, ao
nível de significância 0,1, se a média na amostra for menor ou igual a:

a) 1,6
b) 1,8
c) 2,4
d) 3,6
e) 5,6

5.     (FGV/2024 – CVM) Para a resolução da questão abaixo, pode ser necessário utilizar alguns dos
resultados a seguir.

Probabilidades aproximadas da Normal padrão (Z ~ N(0,1): P(Z>0.25) = 0.40; P(Z>0.5) = 0.31; P(Z>0.8) =
0.21; P(Z>1) = 0.16; P(Z>1.2) = 0.12; P(Z>1.28) = 0.1; P(Z>1.5) = 0.07; P(Z>1.64) = 0.05; P(Z>1,96) = 0.025;
P(Z>2) = 0.02; P(Z>2,33) = 0,01; P(Z>2.5) = 0.06; P(Z>2,575) = 0,005; P(Z>3) = 0.013

Distribuição t de Student:

                              Graus de       Área da Extremidade Superior
                              Liberdade      10%     5%      2,5%   1%      0,5%
                              15             1,341 1,753 2,131 2,602        2,947
                              16             1,337 1,746 2,120 2,583        2,921
                              17             1,333 1,740 2,110 2,567        2,898
                              18             1,330 1,734 2,101 2,552        2,878
                              19             1,328 1,729 2,093 2,539        2,861
                              20             1,325 1,725 2,086 2,528        2,845


         Receita Federal (Analista Tributário) Estatística                                                87
         www.estrategiaconcursos.com.br                                                                  110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

Um analista busca evidenciar estatisticamente a conjectura de que a valorização média das cotas dos
fundos imobiliários negociados no mercado em 2023 tenha sido superior a 15%. Supõe-se que as
valorizações das cotas sigam distribuição Normal, sendo o desvio padrão desconhecido. Com base nas
observações de uma amostra aleatória de tamanho 16, ele observa que a valorização média foi de 15,85%,
com desvio padrão amostral igual a 2%.

Considerando os três níveis de significância usuais (0,01, 0,05 e 0,1), a conjectura investigada:

a) foi evidenciada apenas aos níveis 0,05 e 0,1, o que resulta da comparação do valor da estatística de teste
com os valores críticos 1,64 e 1,28;
b) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de
teste com os valores críticos 1,96 e 1,64;
c) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de teste
com os valores críticos 1,64 e 1,28;
d) foi evidenciada apenas ao nível 0,1, o que se conclui a partir da comparação do valor da estatística de
teste com os valores críticos 1,753 e 1,341;
e) não foi evidenciada a nenhum dos três níveis, o que se conclui comparando o valor da estatística de teste
com os valores 2,947, 2,131 e 1,753.

6.     (FGV/2024 – TJ/RR) Uma amostra de tamanho 25 de uma densidade normal com média μμ e
variância σ2σ2desconhecidas resultou nos seguintes dados:

̅ = 𝟑𝟏, 𝟐 e ∑𝟐𝟓
𝒙                     ̅)𝟐 = 𝟗𝟔
             𝒊=𝟏(𝒙𝒊 − 𝒙


Deseja-se testar H0: μ ≤ 30 versus H1: μ > 30 usando a estatística t usual.

Assinale a opção que indica o valor da estatística t, o critério de decisão e a correspondente decisão ao
nível de significância de 5%.

a) t = 2,0 / Rejeitar H0 se t > 2,064 / H0 rejeitada
b) t = 1,5 / Rejeitar H0 se t > 1,711 / H0 não rejeitada
c) t = 1,5 / Rejeitar H0 se t > 2,064 / H0 não rejeitada
d) t = 3,0 / Rejeitar H0 se t > 1,711 / H0 rejeitada
e) t = 3,0 / Rejeitar H0 se t > 2,064 / H0 rejeitada

Considere a tabela da distribuição de t-Student, constante ao final desta seção de questões, fornecida na
prova.

         Receita Federal (Analista Tributário) Estatística                                                   88
         www.estrategiaconcursos.com.br                                                                     110

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 12

7.     (FGV/2022 – SEFAZ/AM) Uma amostra aleatória de tamanho 16 de uma variável populacional
normalmente distribuída com parâmetros desconhecidos será obtida para testar as seguintes hipóteses
acerca do valor da média populacional:

                                        𝑯𝟎 : 𝝁 ≤ 𝝁𝟎 𝒗𝒆𝒓𝒔𝒖𝒔        𝑯𝟏 : 𝝁 > 𝝁 𝟎

A estatística de teste usual mais adequada a ser usada tem, quando μ = μ0, distribuição:

a) N(0, 1).
b) t-student com 15 graus de liberdade.
c) t-student com 16 graus de liberdade.
d) qui-quadrado com 16 graus de liberdade.
e) qui-quadrado com 15 graus de liberdade.

8.     (FGV/2022 – TRT/MA) Uma amostra aleatória de tamanho 144 de uma população descrita por uma
variável aleatória suposta normalmente distribuída com média 𝝁 e variância 𝝈𝟐 apresentou os seguintes
dados:

                                                            𝟏𝟒𝟒

                                       ̅ = 𝟓𝟐, 𝟓,
                                       𝒙                          ̅)𝟐 = 𝟓𝟏𝟒𝟖
                                                            ∑(𝒙 − 𝒙
                                                            𝒊=𝟏


Assim, se queremos testar H0: 𝝁 ≤ 50 versus H1: 𝝁 > 50, o critério de decisão com base na estatística de
teste t usual, ao nível de significância de 5%, e a respectiva decisão serão:

a) Rejeitar H0 se 𝑥̅ ≥ 54,02, logo não rejeitamos H0.

b) Rejeitar H0 se 𝑥̅ ≥ 49,12, logo rejeitamos H0.

c) Rejeitar H0 se 𝑥̅ ≥ 55,03, logo não rejeitamos H0.

d) Rejeitar H0 se 𝑥̅ ≥ 50,82, logo rejeitamos H0.

e) Rejeitar H0 se 𝑥̅ ≥ 53,28, logo não rejeitamos H0.

Para essa questão, considere as tabelas constantes no final desta seção de questões, fornecidas na prova.

9.      (FGV/2021 – FunSaúde/CE) Para testar H0: μ ≤ 20 contra H1: μ > 20, em que μ é a média de uma
distribuição normal com variância igual a 4, uma amostra aleatória simples de tamanho 100 foi observada
e revelou uma média amostral igual a 20, 3. O p-valor aproximado associado ao teste uniformemente mais
poderoso de tamanho α e a respectiva decisão ao nível α = 0,01 são, respectivamente,

        Receita Federal (Analista Tributário) Estatística                                             89
        www.estrategiaconcursos.com.br                                                                110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

a) 0,067 e rejeitar H0
b) 0,006 e não rejeitar H0
c) 0,067 e não rejeitar H0
d) 0,006 e rejeitar H0
e) 0,344 e não rejeitar H0

Para resolver esta questão, utilize a tabela fornecida na prova, constante ao final desta seção.

                                                            ==219a34==

        Receita Federal (Analista Tributário) Estatística                                          90
        www.estrategiaconcursos.com.br                                                             110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

                               Tabela da Distribuição Normal Padrão: P(Z < z)

      Receita Federal (Analista Tributário) Estatística                         91
      www.estrategiaconcursos.com.br                                            110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  92
      www.estrategiaconcursos.com.br                                     110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. LETRA A                                  4. LETRA C                  7. LETRA B
 2. LETRA B                                  5. LETRA D                  8. LETRA D
 3. LETRA C                                  6. LETRA D                  9. LETRA C

      Receita Federal (Analista Tributário) Estatística                               93
      www.estrategiaconcursos.com.br                                                  110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                LISTA DE QUESTÕES - FGV

Testes para a Proporção

1.     (FGV/2024 – EPE) Uma concessionária, que presta serviço na área de energia renovável, afirma que
90% dos seus clientes estão satisfeitos com seu serviço. Um analista curioso resolve fazer um teste de
hipótese para verificar se a afirmação da concessionária é verdadeira. Para tanto, selecionou uma amostra
de 25 clientes, dos quais verificou que 20 estão satisfeitos com os serviços prestados pela concessionária.

Considerando que o analista aplicou um teste bilateral com um nível de significância de 5%, onde Z α/2 =
1,96, assinale a opção que indica a conclusão do teste de hipótese aplicado pelo analista.

a) Não se pode rejeitar a hipótese nula, ou seja, não se pode contradizer a afirmação concessionária.

b) Rejeita-se a hipótese nula, ou seja, não se pode contradizer a afirmação concessionária.

c) Não se pode rejeitar a hipótese nula, ou seja, pode-se contradizer a afirmação concessionária.

d) Rejeita-se a hipótese nula, ou seja, pode-se contradizer a afirmação concessionária.

e) O teste é inconclusivo.

2.     (FGV/2023 – TJ/SE) Um fabricante garante que, no mínimo, 95% de seus produtos estão dentro das
especificações. Na dúvida, um auditor testa 200 peças e detecta 17 defeituosas. A 5% de significância, ele
conclui que a alegação do fabricante é:
Obs: Por aproximação e simplificação rejeita-se a hipótese nula para estatísticas maiores que 2, em
módulo.

a) provavelmente falsa;
b) certamente falsa;
c) provavelmente verdadeira;
d) certamente verdadeira;
e) impossível de ser verificada

3.     (FGV/2023 – TJ/SE) Em um período histórico, verificou-se que dos 10 mil processos semelhantes
julgados por diversos julgadores, 8 mil tiveram a liminar concedida a favor.
Considerando a normalidade dentro de um intervalo de 3 desvios padrões, se um determinado julgador
concedeu 780 liminares a favor entre os 900 processos julgados por ele, pode-se inferir, estatisticamente,
que o julgador:

        Receita Federal (Analista Tributário) Estatística                                               94
        www.estrategiaconcursos.com.br                                                                  110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

a) está sobrecarregado;

b) concede liminares abaixo da média;

c) concede mais liminares que qualquer outro julgador;

d) concede liminares aleatoriamente com probabilidade de 50%;

e) concede liminares acima do normal.

4.      (FGV/2022 – TRT/MA) Para testar se a proporção p de pessoas infectadas pela dengue já é superior
a 10%, num dado momento, uma amostra aleatória simples de 400 pessoas será observada e será usado
o critério de decisão que decide por p > 10% se ao menos 48 pessoas estiverem infectadas.
                                                               ==219a34==

O nível de significância associado a esse critério é aproximadamente igual a

a) 0,01.
b) 0,02.
c) 0,05.
d) 0,09.
e) 0,12.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

5.     (FGV/2022 – EPE) Um fabricante de certo produto afirma que, no máximo, 10% dos seus produtos
são defeituosos. Um comprador desconfiado do fabricante resolveu analisar uma amostra de tamanho
100 desses produtos e encontrou 19 itens defeituosos.
Considere α = 5% e que P(Z ≤ 1,64) = 0,95.
O valor da estatística de teste mais adequada para testar a hipótese nula de que o fabricante tem razão e
a respectiva conclusão são, respectivamente,

a) 3,0 e concluir que o fabricante tem razão.

b) 3,0 e concluir que o fabricante não tem razão.

c) 2,0 e concluir que o fabricante tem razão.

d) 2,0 e concluir que o fabricante não tem razão.

e) 2,5 e concluir que o fabricante tem razão.

           Receita Federal (Analista Tributário) Estatística                                            95
           www.estrategiaconcursos.com.br                                                               110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

6.      (FGV/2021 – FUNSAÚDE-CE) Para testar H0: p ≤ 0,5 versus H1: p > 0,5, em que p é uma proporção
de “sucessos” populacional, uma amostra aleatória simples de tamanho 144 será obtida e será usado o
critério de decisão que rejeitará H0 se a proporção de “sucessos” observada na amostra for maior do que
0,6. O nível de significância desse critério é, aproximadamente, igual a

a) 0,01;

b) 0,02;

c) 0,03;

d) 0,04;

e) 0,05.

Para resolver essa questão, utilize a tabela normal apresentada ao final, fornecida na prova.

           Receita Federal (Analista Tributário) Estatística                                        96
           www.estrategiaconcursos.com.br                                                           110

                                         


---

Equipe Exatas Estratégia Concursos
Aula 12

                               Tabela da Distribuição Normal Padrão: P(Z < z)

      Receita Federal (Analista Tributário) Estatística                         97
      www.estrategiaconcursos.com.br                                            110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. LETRA A                                  3. LETRA E                  5. LETRA B
 2. LETRA A                                  4. LETRA D                  6. LETRA A

      Receita Federal (Analista Tributário) Estatística                               98
      www.estrategiaconcursos.com.br                                                  110

                                    


---

     Equipe Exatas Estratégia Concursos
     Aula 12

                                   LISTA DE QUESTÕES - FGV

p-valor

1.       (FGV/2023 – TJ/SE) Sobre teste de hipóteses, é correto afirmar que:
a) ocorre erro do tipo II quando a hipótese nula é verdadeira e rejeitada;
b) ocorre erro do tipo II quando a hipótese nula é falsa e não é rejeitada;
c) o p-valor representa a probabilidade de que a hipótese nula seja verdadeira;
d) o poder de um teste aumenta quando a probabilidade do erro do tipo I diminui;
e) os erros do tipo I e do tipo II não são relacionados.


2.     (FGV/2022 – TRT/PB) Para testar H0: p > 0,5 versus H1: p ≤ 0,5 será usado o critério usual baseado
na proporção de sucessos amostral. Observada uma amostra aleatória de tamanho 225, verificou-se uma
proporção de sucessos amostral aproximadamente igual a 46%. O p-valor associado a esse critério é,
então, aproximadamente igual a

a) 0,01.

b) 0,05.

c) 0,09.

d) 0,12.

e) 0,15.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

3.     (FGV/2022 – TRT/PB) Considere uma variável aleatória populacional X com distribuição Normal
     𝟐
(𝝁, 𝝈 ), cujos parâmetros são desconhecidos. Um pesquisador coletou uma amostra aleatória de 100
observações com o objetivo de testar as seguintes hipóteses:
Hipótese nula: 𝝁 = 𝟐𝟎𝟎
Hipótese alternativa: 𝝁 ≠ 𝟐𝟎𝟎
Na amostra coletada, obtém-se uma média igual a 203 e uma variância (baseada no estimador não viesado
usual) igual a 100. O pesquisador considerou o nível de significância de 5% para esse teste, e que os valores
críticos correspondentes são -2,06 e 2,06.
A esse respeito, assinale a afirmativa incorreta.


           Receita Federal (Analista Tributário) Estatística                                              99
           www.estrategiaconcursos.com.br                                                                 110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

a) A probabilidade do erro tipo I é igual a 5%

b) A estatística do teste apropriada será igual a 3.

c) A hipótese nula é rejeitada.

d) O p-valor é maior que 5%

e) O intervalo de confiança para 𝜇 é dado por [203 ± 2,06]

        Receita Federal (Analista Tributário) Estatística                  100
        www.estrategiaconcursos.com.br                                     110

                                      


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                  101
      www.estrategiaconcursos.com.br                                     110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. LETRA B                                  2. LETRA D                  3. LETRA D

      Receita Federal (Analista Tributário) Estatística                               102
      www.estrategiaconcursos.com.br                                                  110

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 12

                                LISTA DE QUESTÕES - FGV

Teste Qui-quadrado

1.     (FGV/2024 – TJ/RR) Para testar a hipótese nula de que as probabilidades de classificação em cinco
classes são todas igualmente prováveis, uma amostra de 200 indivíduos mostrou os seguintes resultados:

                                       Classe          1    2    3    4    5

                                       Frequência 50        40   30   30   50

O valor da estatística qui-quadrado usual sob a hipótese nula é igual a
a) 8
b) 9
c) 10
d) 11
e) 12

2.     (FGV/2024 – SES/MT) Para testar a independência entre duas variáveis dicotômicas 1 e 2, uma
tabela de contingência 2 x 2 foi obtida a partir de uma amostra aleatória de 100 observações e mostrou os
seguintes resultados:

A estatística de teste usual qui-quadrado (com 1 grau de liberdade) para esses dados é igual a
a) 1
b) 2
c) 3
d) 4


3.     (FGV/2023 – TJ/SE) Para se testar a independência entre dois atributos, dados amostrais serão
organizados em uma tabela de contingência. O atributo A tem seis classes e o atributo B tem cinco.
Se a amostra é suficientemente grande, será usada então uma estatística de teste que tem, sob a hipótese
de independência, distribuição:


        Receita Federal (Analista Tributário) Estatística                                             103
        www.estrategiaconcursos.com.br                                                                110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

a) qui-quadrado com 20 graus de liberdade.
b) qui-quadrado com 30 graus de liberdade.
c) t de student com 20 graus de liberdade;
d) t de student com 30 graus de liberdade;
e) normal


4.     (FGV/2022 – SEFAZ/AM) Para se testar a independência entre dois atributos, dados amostrais serão
organizados em uma tabela de contingência. O atributo A tem seis classes, o atributo B tem cinco. Se a
amostra á suficientemente grande, será usada então uma estatística de teste que tem, sob a hipótese de
independência, distribuição
a) qui-quadrado com 30 graus de liberdade.
b) qui-quadrado com 20 graus de liberdade.
c) normal padrão.
d) F-Snedecor com 5 graus de liberdade no numerador e 6 no denominador.
e) F-Snedecor com 4 graus de liberdade no numerador e 5 no denominador.

5.     (FGV/2022 – TJDFT) Após a cerimônia de posse dos novos servidores aprovados em um concurso
para o TJDFT, os recém-nomeados precisam realizar um curso de capacitação especializado. Ao final do
curso, os alunos avaliam o curso de forma negativa, se suas expectativas não tiverem sido atendidas, ou
de forma positiva, caso contrário. Os dados estão representados na tabela a seguir.
                                                      Avaliações do curso
                                       Gênero                               Total
                                                     Negativa    Positiva

                                     Masculino          30          30       60

                                      Feminino          10          30       40

                                        Total           40          60      100

Com o objetivo de concluir se as avaliações são ou não dependentes do gênero, realizou-se o teste do qui-
quadrado. O valor do χ2 observado foi de 6,25.
Utilizando-se um nível de 10% de confiança, é possível concluir que:
a) não se pode rejeitar a hipótese nula, ou seja, a avaliação independe do gênero, pois a estatística de teste
   é maior do que o valor crítico;
b) não se pode rejeitar a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste
   é menor do que o valor crítico;
c) não se pode rejeitar a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste
   é maior do que o valor crítico;

        Receita Federal (Analista Tributário) Estatística                                                 104
        www.estrategiaconcursos.com.br                                                                    110

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 12

d) rejeita-se a hipótese nula, ou seja, a avaliação independe do gênero, pois a estatística de teste é menor
   do que o valor crítico;
e) rejeita-se a hipótese nula, ou seja, a avaliação depende do gênero, pois a estatística de teste é maior do
   que o valor crítico.

Para resolver essa questão, utilize a tabela fornecida na prova, constante ao final desta seção.

6.      (FGV/2022 – TRT/MA) Para testar a independência entre dois atributos, 400 pessoas foram
classificadas de acordo com sexo e opinião em relação a certa proposta da prefeitura. Os resultados
observados estão na tabela de contingências a seguir.

                                                                 Opinião
                                                                                   Total
                                                           Contra A favor

                                                 Masc.         120         80         200
                                         Sexo
                                                    Fem.       130         70         200

                                              Total            250         150        400

O valor da estatística de teste qui-quadrado usual para esses dados é aproximadamente igual a
a) 1,07.
b) 1,56.
c) 2,24.
d) 2,56.
e) 3,02.

7.    (FGV/2022 – TRT/PB) Para testar se dois atributos são independentes, 400 indivíduos foram
observados e a seguinte tabela de contingências 2x2 foi obtida:

                                                                      Atributo 1
                                                                                            Total
                                                               Presente Ausente

                                                 Presente            50          50         100
                                  Atributo 2
                                                 Ausente             250         50         300

                                            Total                    300         100        400

           Receita Federal (Analista Tributário) Estatística                                              105
           www.estrategiaconcursos.com.br                                                                 110

                                         


---

  Equipe Exatas Estratégia Concursos
  Aula 12

O valor da estatística de teste qui-quadrado usual para esse teste é aproximadamente igual a
a) 16,1.
b) 28,8.
c) 36,6.
d) 44,4.
e) 55,5.


8.     (FGV/2021 – FunSaúde/CE) A tabela de contingências a seguir mostra a classificação de indivíduos
de acordo com as variáveis sexo e preferência por dois candidatos em uma eleição.
                                                            Preferem      Preferem
                                                           Candidato A   Candidato B

                                      Sexo masculino           58             42

                                       Sexo feminino           62             138

A estatística qui-quadrado usual para testar independência entre sexo e preferência é, aproximadamente,
igual a
a) 5
b) 10
c) 20
d) 25
e) 30

           Receita Federal (Analista Tributário) Estatística                                        106
           www.estrategiaconcursos.com.br                                                           110

                                         


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  107
      www.estrategiaconcursos.com.br                                     110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

                                                GABARITO
 1. LETRA C                                  4. LETRA B                  7. LETRA D
 2. LETRA D                                  5. LETRA E                  8. LETRA C
 3. LETRA A                                  6. LETRA A

                                                          ==219a34==

      Receita Federal (Analista Tributário) Estatística                               108
      www.estrategiaconcursos.com.br                                                  110

                                    


---

Equipe Exatas Estratégia Concursos
Aula 12

      Receita Federal (Analista Tributário) Estatística                  109
      www.estrategiaconcursos.com.br                                     110

                                    


---

---
