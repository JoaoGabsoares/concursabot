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
arquivo_origem: Aula 12_001_Mapa Mental.txt
tipo_material: Mapas Mentais & Esquemas
aula_numero: '12'
titulo_aula: Os estimadores são calculados a partir da amostra selecionada. É com
---

# Os estimadores são calculados a partir da amostra selecionada. É com

Os estimadores são calculados a partir da amostra selecionada. É com
 ESTIMADORES E AS SUAS                base neles que inferimos o parâmetro populacional de interesse.
                                      Os estimadores são variáveis                   aleatórias   e,   portanto,   seguem
     DISTRIBUIÇÕES                    distribuições de probabilidade.


                   A média amostral é utilizada para inferir a média populacional.Quando a população segue
                   distribuição normal com variância conhecida, a média segue distribuição normal.
MÉDIA AMOSTRAL
                   Quando a população segue distribuição normal com variância desconhecida, a média segue
                   distribuição de t-Student.

                   Quando a população segue outra distribuição, mas a amostra for grande o suficiente (em geral, a
                   partir de 30 elementos), a média amostral tende a uma distribuição normal.


                   A esperança desse estimador é                       Quando a esperança do estimador é igual ao parâmetro
  ESPERANÇA        a própria média populacional:                       sendo estimado, dizemos que o estimador é não
                                                                       tendencioso ou não viesado.

                   E a variância da média amostral                     Quando a variância da população é desconhecida,
                   é a razão entre a variância da                      estimamos esse parâmetro a partir da variância amostral.
  VARIÂNCIA        população e o tamanho da                            Se a população for finita e a amostra for extraída sem
                   amostra:
                                                                       reposição, a variância do estimador deve ser multiplicada
                                                                       pelo fator de correção, que diminui o seu valor:

                                                                                 ESTRATÉGIA CONCURSOS


---

                                                      ESTIMAÇÃO PONTUAL E
                                                           INTERVALAR

               PROPORÇÃO AMOSTRAL                                                                    VARIÂNCIA AMOSTRAL


A proporção amostral é utilizada para inferir a proporção                          A variância amostral, que é o estimador não tendencioso
populacional. A esperança desse estimador é a própria                              para a variância populacional, é definido como:
proporção populacional:

E a variância também é a razão entre a variância da
                                                                                   Quando dividimos por n, em vez de n-1, o estimador se
população e o tamanho da amostra. Nesse caso, a variância
                                                                                   torna tendencioso.
da população é o produto da proporção de sucesso pela
proporção de fracasso:

O desvio padrão de um estimador, que é a raiz quadrada da
variância, pode ser chamado de erro padrão.


                                                                                                   ESTRATÉGIA CONCURSOS


---

Para que a inferência seja mais precisa, construímos um                                  Em que σ é o desvio padrão da população, n é o
intervalo em torno do estimador, chamado intervalo de                                    tamanho da amostra e z é o valor da normal
confiança. Para    isso, somamos e       subtraímos do                                   padrão que corresponde ao nível de confiança
estimador a chamada margem de erro (E).                                                  desejado.

                                                 ESTIMAÇÃO INTERVALAR

Existe uma probabilidade conhecida de esse intervalo
englobar   o   verdadeiro    parâmetro     populacional,
chamada nível de confiança (1 - α).
                                                                          Reorganizando a fórmula da margem de erro, podemos
                                                                          calcular o tamanho da amostra necessário:
Quando a população segue distribuição normal com
variância conhecida, a margem de erro para a média
amostral é dada por:

                                                                                           ESTRATÉGIA CONCURSOS


---

Quando a população segue distribuição normal com                                        A margem de erro para a proporção amostral
variância desconhecida, a margem de erro para a                                         também é baseada no desvio padrão do
média amostral é dada por:                                                              estimador:

                                                ESTIMAÇÃO INTERVALAR

                                                                         E o tamanho amostral pode ser calculado como:
Em que s é a raiz quadrada da variância amostral, n
é o tamanho da amostra e t é o valor da distribuição
de t-Student que corresponde ao nível de confiança
desejado, com n - 1 graus de liberdade.
                                                                         Quando temos uma estimativa para a proporção, podemos
                                                                         considerar a proporção que maximiza o tamanho da
                                                                         amostra, qual seja, p = 50%.


                                                                                         ESTRATÉGIA CONCURSOS


---
