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
arquivo_origem: Aula 13_001_Mapa Mental.txt
tipo_material: Mapas Mentais & Esquemas
aula_numero: '13'
titulo_aula: TESTE DE HIPÓTESES
---

# TESTE DE HIPÓTESES

TESTE DE HIPÓTESES
Hipóteses são suposições a respeito da população que desejamos verificar. Por exemplo, desejamos verificar se o
tempo médio de trabalho de uma população de funcionários é igual a 8 horas ou não.
Para isso, formulamos uma hipótese nula H0 e uma hipótese alternativa H1 (ou HA):
H0: μ = 8 horas
H1: μ ≠ 8 horas

Para testar as hipóteses, consideramos que a hipótese nula é verdadeira e construímos um intervalo em torno
desse parâmetro.
Em seguida, extraímos uma amostra e calculamos o estimador, no caso, a média amostral. vSe o resultado estiver
dentro do intervalo (chamada Região de Não Rejeição), não rejeitamos a hipótese nula. No caso, consideramos
que a média verdadeira é realmente de 8 horas.

Se o resultado estiver fora do intervalo (chamada Região Crítica), rejeitamos a hipótese nula. No caso,
consideramos que a média verdadeira é diferente de 8 horas

Considerando a hipótese nula como premissa, a probabilidade associada à Região de Não Rejeição é igual ao nível
de confiança 1 - α; e a probabilidade associada à Região Crítica é α, chamado nível de significância.

Esse é o chamado teste bilateral, em que verificamos se o parâmetro verdadeiro é igual ou diferente daquele que
supomos.
                                                                          ESTRATÉGIA CONCURSOS


---

                                         TESTE DE HIPÓTESES

                 Podemos verificar se o parâmetro é               Nessa situação, a região crítica
                 igual ou maior que o suposto. Esse               está concentrada à direita e
UNILATERAL À     corresponde a um teste unilateral à              rejeitamos a hipótese nula se o
  DIREITA
                 direita, em que as hipóteses são:                resultado observado na amostra
                 H0: μ = 8 horas                                  for maior que o limite.
                 H1: μ > 8 horas

               Ou, podemos verificar se o parâmetro é igual ou menor que o
               suposto, que corresponde a um teste unilateral à esquerda,
UNILATERAL À   em que rejeitamos a hipótese nula se o resultado observado
 ESQUERDA      na amostra for menor que o limite.
               H0: μ = 8 horas
               H1: μ < 8 horas

                                                                   ESTRATÉGIA CONCURSOS


---

                TIPOS DE ERROS

                                                         O nível de significância α é a probabilidade de rejeitar a hipótese nula
                        ERRO TIPO I
                                                         sendo ela verdadeira, que corresponde ao erro tipo I.

                                                         O erro tipo II é o evento de não rejeitar a hipótese nula sendo ela falsa, cuja

                        ERRO TIPO II                     probabilidade é indicada por β. Para calcular β, precisamos considerar como
                                                         premissa a hipótese alternativa, ou seja, construímos um outro gráfico, baseado
                                                         nessa outra hipótese. Assim, os dois tipos de erros fazem parte de Universos
                                                         distintos.

                                O complementar do erro tipo I corresponde à não            Quanto    maior    a   diferença    entre     o
                                rejeição da hipótese nula, sendo ela verdadeira,           parâmetro da hipótese nula e o parâmetro
OS COMPLEMENTARES DOS           cuja probabilidade é o nível de confiança 1 - α.           verdadeiro, maior o poder do teste.
ERROS CORRESPONDEM A
   DECISÕES CERTAS                                                                         O poder do teste também aumenta com o
                                O complementar do erro tipo II corresponde à               aumento do tamanho da amostra e do
                                rejeição da hipótese nula, sendo ela falsa, cuja           nível de significância α.
                                probabilidade é chamada de poder do teste 1 - β.

                                                                                      ESTRATÉGIA CONCURSOS


---

                                                                                              • Em um teste unilateral à esquerda, o p-valor é a
                                                                                                probabilidade associada aos valores inferiores ao
  Quando a população for normal
                                                                                                resultado observado.
  com variância conhecida, os
  limites da Região de Não
  Rejeição são dados por:

                                                                                              • No teste unilateral à direita, o p-valor é a
                                                                                                probabilidade associada aos valores superiores
                                                                                                ao resultado observado; e, no teste bilateral, o p-
                                                                  TESTES PARA A
Em vez de compararmos a                                                                         valor está associado a ambos os extremos.
média amostral observada com
                                                                     MÉDIA
esse limite, podemos comparar
o nível crítico zC com a chamada
estatística do teste:


Devemos rejeitar a hipótese nula se a estatística do teste
superar,    em     termos     absolutos,   o   nível   crítico.                               Em qualquer caso, rejeitamos a hipótese nula se o
Alternativamente, podemos decidir se vamos rejeitar ou                                        p-valor for menor que o nível de significância; e não
não a hipótese nula, comparando ao nível de significância                                     a rejeitamos, caso contrário.
com o chamado p-valor, que é a probabilidade de obter
um valor tão ou mais extremo que o resultado observado.

                                                                                                 ESTRATÉGIA CONCURSOS


---

                                              TESTES PARA A MÉDIA

                     QUANDO A POPULAÇÃO SEGUIR DISTRIBUIÇÃO NORMAL COM VARIÂNCIA
                      DESCONHECIDA, OS LIMITES DA REGIÃO DE NÃO REJEIÇÃO SÃO DADOS
                                                   POR:

                                                                                  OU COMPARAMOS O VALOR CRÍTICO TABELADO COM A
                                                                                  ESTATÍSTICA DO TESTE, BASEADA NA MÉDIA AMOSTRAL
                                                                                                     OBSERVADA:

 EM QUE TC É O VALOR TABELADO DA DISTRIBUIÇÃO DE T-
STUDENT COM N - 1 GRAUS DE LIBERDADE, ASSOCIADO AO
NÍVEL DE SIGNIFICÂNCIA DESEJADO E S É O DESVIO PADRÃO
                      AMOSTRAL.
                                                                                         ESTRATÉGIA CONCURSOS


---

                                    TESTES PARA A PROPORÇÃO

                      QUANDO PRECISAMOS TESTAR HIPÓTESES A RESPEITO DA
                    PROPORÇÃO DE UMA POPULAÇÃO, CALCULAMOS OS LIMITES DA
                               REGIÃO DE NÃO REJEIÇÃO COMO:

                                                                    OU, COMPARAMOS O VALOR CRÍTICO COM A
                                                                       ESTATÍSTICA DO TESTE, BASEADA NA
                                                                      PROPORÇÃO AMOSTRAL OBSERVADA:

Em que p é o parâmetro indicado na hipótese nula,

zC é o valor tabelado associado ao nível de
significância desejado e n é o tamanho da amostra.
                                                                 ESTRATÉGIA CONCURSOS


---

                                              Pode ser utilizado para verificar se duas variáveis são independentes ou se uma influencia
                                              a outra. Por exemplo, podemos verificar se o nível de educação influencia no salário de um
                 TESTE DE
                                              grupo de pessoas (teste de independência).
              INDEPENDÊNCIA                   A hipótese nula desse teste é de que as variáveis são independentes.


                                               O teste qui-quadrado também pode ser utilizado para verificar se uma população é a
                 TESTE DE                      mesma em diversos grupos, ou se são populações diferentes (teste de homogeneidade).
                                               Por exemplo, podemos verificar se os níveis de educação seguem a mesma distribuição
              HOMOGENEIDADE                    em todas as regiões do país.
                                               A hipótese nula desse teste é de que se trata da mesma população.

                                               E o teste de aderência verifica se uma população segue determinada distribuição,
                                               indicada na hipótese nula. Por exemplo, se as pessoas de olhos marrons, verdes e azuis
                                               seguem as proporções de 80%, 15% e 5%.
                 TESTE DE
                ADERÊNCIA                      A estatística desse teste é baseada na diferença entre os valores observados e os valores
TESTE QUI-                                     que seriam esperados com base na hipótese nula:

QUADRADO

                                              Nos testes de homogeneidade e de independência, em que representamos os dados
                TABELA DE                     observados em uma tabela (chamada tabela de contingência), calculamos o valor
                                              esperado de cada campo, multiplicando o total da linha pelo total da coluna e dividindo
              CONTINGÊNCIA                    pelo tamanho total da amostra:

                                              E comparamos a estatística do teste com o valor tabelado da distribuição qui-quadrado.
                                              O número de graus de liberdade da distribuição é o produto:

             DISTRIBUIÇÃO QUI-
                QUADRADO
                                              Em que L é o número de linhas da tabela de contingência e C é o número de colunas. Se
                                              houver apenas 1 linha ou 1 coluna, não subtraímos 1 unidade.
                                              Se a estatística do teste superar o valor crítico tabelado, rejeitamos a hipótese nula; e não
                                              a rejeitamos, caso contrário.


                                                                                      ESTRATÉGIA CONCURSOS


---
