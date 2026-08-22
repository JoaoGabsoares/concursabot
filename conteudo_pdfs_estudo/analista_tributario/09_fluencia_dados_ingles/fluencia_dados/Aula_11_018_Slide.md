---
cargo: Analista-Tributário da Receita Federal do Brasil (ATRFB)
banca: FGV
disciplina: Fluência em Dados e Língua Inglesa
tags:
- dados
- sql
- nosql
- big_data
- ingles_fiscal
arquivo_origem: Aula 11_018_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '11'
titulo_aula: TECNOLOGIA DA INFORMAÇÃO
---

# TECNOLOGIA DA INFORMAÇÃO

---

---

TECNOLOGIA DA INFORMAÇÃO

                             Profa. Emannuelle Gouveia
                             @Emannuellegouveia


      


---

 APRENDIZADO DE
    MÁQUINA
MACHINE LEARNING
     AULA 05 Prof. Emannuelle Gouveia
                                             @Emannuelle Gouveia


        


---

                            REDES NEURAIS


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            A redes neurais artificiais são versáteis, poderosas e escaláveis,
        tornando-as ideais para lidar com tarefas de aprendizado de máquina
        altamente complexas, como classificar bilhões de imagens (Ex: Google
        Imagens), alimentar serviços de reconhecimento de voz (Ex: Siri da Apple),
        recomendar os melhores vídeos para assistir (Ex: YouTube
        Recommendations).
            O neurônio artificial funciona de maneira muito simples e parecida com
        o neurônio biológico: ele ativa sua saída quando mais de um certo número
        de suas entradas estão ativas.
            Os pesquisadores mostraram que mesmo com um modelo tão
        simplificado é possível construir uma rede de neurônios artificiais que
        computa qualquer proposição lógica que você deseja.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Frank Rosenblatt criou o Perceptron e o conectou a uma câmera
       fotográfica. A ideia era o fazer capturar imagens e ensiná-lo a identificar o
       que era ou não um triangulo.
           Em cada imagem ele identifica os pixels pretos em uma determinada
       área e calculava a carga elétrica total. Se fosse acima de um certo limite,
       acenderia uma lâmpada.
           Se realmente estivesse certo o operador apertaria um botão indicando
       certo e se fosse errado outro indicando erro o que disparava uma cadeia de
       eventos e cálculos para reajustar o limite de carga elétrica suficiente para
       acender a lâmpada de forma que as chances de a máquina acertar nas
       próximas vezes aumentava.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD
           O perceptron é a unidade básica de uma Rede Neural Artificial (RNA),
       sendo equivalente a um neurônio biológico. Vejamos abaixo como seria sua
       estrutura básica:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

                Note que temos um conjunto de n entradas (e1, e2, e3, ..., en) que
       são multiplicadas por pesos específicos associados a cada entrada (p1, p2,
       p3, ..., pn). Cada um desses pesos é livremente ajustável de forma
       independente dos demais. Em seguida, nós realizamos a soma de cada
       entrada multiplicada por seu respectivo peso associado. E o próximo passo é
       somar tudo isso com uma entrada especial denominada viés ou bias (b).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

                Em outras palavras, podemos afirmar que o peso de uma entrada
       representa seu grau de força ou influência no resultado – quanto maior o
       peso de uma determinada entrada, maior será a influência no resultado; e o
       viés (bias) é um valor que pode ser ajustado para aumentar ou diminuir a
       força do sinal ao adicionar um valor positivo/negativo com o intuito de
       regular o formato/curvatura da função e ajustá-la ao propósito desejado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Estamos multiplicando valores por um coeficiente, somando-os e
       adicionando uma constante! Bem, isso parece uma regressão linear múltipla:
            y = a + bx + cy + dz ...


                 s = b + p1e1 + p2e2 + p3e3 ... + pnen

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                    


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            A lógica básica de um perceptron na parte inicial é realmente parecida
       com uma regressão linear, mas na etapa seguinte, passa o resultado da
       regressão linear por uma função de ativação, responsável por fazer uma
       transformação não-linear do resultado da etapa anterior e definir se um nó
       será ativado ou não.
            Funções lineares (Ex: regressão linear) são aquelas que podem ser
       representadas em um plano cartesiano como uma reta. O objetivo da função
       de ativação é transformar o formato de reta em um formato não linear,
       tornando a função mais flexível/adaptável para tarefas complexas e
       permitir que pequenas alterações na entrada de dados não causem grandes
       alterações na saída de dados
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Existem duas grandes classes de funções de ativação: funções de limite
       e funções sigmóides.
            Os perceptrons originais utilizavam funções de limite. Nesse caso, se o
       resultado da função de ativação fosse maior ou igual a um determinado
       limite (em inglês, threshold), então essa função retornaria 1 (nó ativado); se
       o resultado da função de ativação fosse menor que um determinado limite,
       então essa função retornaria 0 (nó não-ativado).
            Existem outras variações, mas funções desse tipo sempre têm formato
       de um degrau (em inglês, step).


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia               


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Ocorre que a maioria das aplicações necessita de um resultado
       probabilístico (contínuo) e, não, de um resultado binário (discreto) e a
       função limite não é capaz de retornar esse tipo de resultado.
            Dessa forma, perceptrons modernos utilizam funções sigmóide.
            Nesse caso, podemos ver o resultado do perceptron como uma espécie
       de regressão logística, trata-se de uma função estritamente crescente que
       recebe um valor real qualquer que varia horizontalmente entre [-∞,+∞] e
       varia verticalmente [0,1].

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

                 A função sigmóide mais famosa é a função logística apresentada a
       seguir (frequentemente são tratadas como sinônimos):

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Há também o caso em que desejamos que o resultado assuma valores
       entre [-1,1]. Para tal, podemos utilizar um outro tipo de função sigmóide
       chamada de tangente hiperbólica:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Essa transformação não-linear realizada pelas funções de ativação
       permite tornar o perceptron mais capaz de aprender e executar tarefas
       complexas.
            O aprendizado vai se dando por massa de dados e ajustes dos pesos de
       acordo com a supervisão.
            Observe que o perceptron é a unidade básica de uma rede neural
       artificial, assim como o neurônio é a unidade básica de uma rede neural
       biológica.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Na prática, os perceptrons não são utilizados isoladamente e sim de
       forma combinada.
           Existem diversas formas de organização de perceptrons, sendo a
       organização por camadas a mais comum.
           Aquelas que serão objeto de estudo nesse tópico serão: Single Layer
       Perceptrons (SLP) ou Multilayer Perceptrons (MLP).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD
           Single Layer Perceptrons (SLP): trata-se de uma rede neural que organiza
       os perceptrons em uma única camada de processamento. Onde os nós
       (preceptons) da camada de saída realizam processamentos e os nós da
       camada de entrada apenas transferem os valores diretamente para a
       camada de saída.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Esse tipo de rede neural é raramente utilizado justamente por utilizar
       perceptrons originais, isto é, aqueles cuja função de ativação é uma função
       de limite (em formato de degrau) é mais adequado para resolver problemas
       de classificação em que as classes são linearmente separáveis, ou seja, ele só
       lida com situações em que é possível traçar ao menos uma linha reta
       separando classes em um plano coordenado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia               


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Multilayer Perceptrons (MLP): Trata-se de uma arquitetura de redes
       neurais artificiais que utiliza múltiplas camadas de perceptrons.
           Temos duas camadas que realizam processamentos: camada oculta e
       camada de saída.
           Da mesma forma da arquitetura anterior, os nós da camada de entrada
       apenas transferem os valores (com seus respectivos pesos) para os nós da
       camada oculta ou camada escondida, sendo os únicos perceptrons que não
       executam uma função de ativação.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Já em contraste com a arquitetura anterior, aqui são utilizados
       perceptrons modernos, isto é, aqueles cuja função de ativação é uma função
       sigmóide. Aos dados de entrada são aplicados pesos, em seguida eles são
       sendo processados pela camada oculta até chegarem a um resultado de
       saída.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Em MLP, a lógica de conexão é: todos os elementos de uma camada se
       conectam a todos os elementos da camada seguinte e apenas a eles, ou seja,
       os elementos da mesma camada não se conectam entre si.
            Até existem diversas outras arquiteturas de redes neurais (Ex:
       Convolutivas (CNN), Recorrentes (RNN), Long Short-Term Memory (LSTM)),
       mas o nosso foco aqui é em redes neurais de multicamadas.
            São redes neurais feed-forward, ou seja, os sinais de informação de uma
       camada somente alimentam a próxima camada e jamais alimentam a
       camada anterior ou a camada atual.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

            Em redes neurais feed-forward, os sinais avançam sempre para frente,
       fluindo da camada atual para a próxima de forma sequencial não formando
       ciclos (em contraste com redes neurais recorrentes, por exemplo).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Atualmente existem redes neurais com mais de mil camadas escondidas,
       além de trilhões de perceptrons, que é o caso da Deep Learning.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

        A ideia é que, após um grande número de iterações, os pesos estejam
   relativamente ajustados e a rede convirja para um ponto de estabilidade
   onde há pouco ou nenhum ajuste dos pesos e os erros são bem mais raros e
   a rede neural pode ser usada para generalizar um problema para futuros
   novos dados de maneira assertiva.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Esse fenômeno em que erros de previsão entre saídas obtidas e saídas
       esperadas de uma rede neural artificial são quantificados por meio de uma
       função de custo/perda (Ex: Erro Quadrático Médio – EQM) e retornam para a
       rede em forma de ajuste dos pesos e vieses é chamado de retropropagação
       (ou backpropagation).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

                 Esse algoritmo consiste basicamente de duas etapas principais:

      1.         Etapa de Propagação: as entradas fluem através das camadas ocultas da
                 rede neural e previsões são obtidas na camada de saída;

       2. Etapa de Retropropagação: calcula-se o gradiente da função de
       custo/perda na camada de saída e ele é utilizado para atualizar os pesos
       (inclusive o viés) recursivamente.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                    


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD
            Há duas maneiras de representar o viés em uma arquitetura de
       multicamadas de perceptrons:
            Como um valor externo adicionado à soma ponderada de cada
       perceptron ou como um nó sempre ativo que recebe uma entrada de valor
       fixo = 1 e é multiplicado por um valor de peso variável.
            Ele existe para aumentar a flexibilidade do modelo para se adequar aos
       dados, evitando, por exemplo, saídas zeradas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Note que, no segundo caso, o nó especial de viés é inserido na camada
       de entrada e nas camadas ocultas, mas não faz sentido incluí-lo na camada
       de saída. Além disso, não está representado na imagem, mas cada segmento
       de reta que liga representa um valor da camada anterior multiplicado pelo
       seu respectivo peso.
           Em prova, já foi chamado de Termo de Interceptação (ou Intercept
       Term) que é análogo ao intercepto em um modelo de regressão linear e tem
       exatamente a mesma função que é representar o valor no qual uma função
       cruza o eixo y.
           Como se trata de um valor constante independente de outras variáveis,
       mesmo que as entradas sejam 0, ainda teremos um valor de saída.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – REDES NEURAIS FEED-FORWARD

           Vale ressaltar que há aplicações de redes neurais artificiais também em
       aprendizado não-supervisionado, mas ainda são mais raras.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

                       FONTES DE ERROS EM
                       MODELOS PREDITIVOS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – FONTES DE ERRO EM MODELOS PREDITIVOS

            Em um bom modelo preditivo devemos ter uma alta taxa de acertos,
       mas não há como impedir que haja erros, pq ele não é capaz de eliminar
       todas as possíveis zonas de interseção entre diversas categorias de
       classificação.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – FONTES DE ERRO EM MODELOS PREDITIVOS

          Os dados observados a partir de um fenômeno qualquer podem ser
       modelados como:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – FONTES DE ERRO EM MODELOS PREDITIVOS

           Observe que há um conjunto de elementos sobre o qual não se tem
       controle: variáveis indisponíveis, variações, aleatoriedade e erros.
           Podemos tentar minimizar os erros, mas não como ter controle total ou
       como mensurar o peso desses elementos na classificação final.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING – FONTES DE ERRO EM MODELOS PREDITIVOS


            Sendo assim, um bom modelo encontra padrões que podem ser
       generalizados por uma função que reduz o erro de generalização obtido para
       entradas desconhecidas. Lembrando que a generalização é a capacidade de
       aprender com os dados disponíveis as regras gerais que você pode aplicar a
       todos os outros dados.
            Inserção de novos dados e teste com dados fora da amostra de
       treinamento, portanto, tornam-se essenciais para descobrir se é possível
       aprender com os dados e até que ponto.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

    Observe o fluxo de processos típico de aprendizado de máquina para
 modelos preditivos:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       O pré-processamento é a primeira etapa na construção de um modelo
  de aprendizado de máquina. No aprendizado supervisionado, são recebidos
  dados brutos (conhecidos como variáveis independentes) e as possíveis
  categorias que o modelo tentará prever (conhecidas como variáveis
  dependentes).
       Realiza-se a limpeza e formatação dos dados brutos (eliminando-se
  possíveis características redundantes, excessivas, desnecessárias ou
  altamente correlacionadas, o que chamamos de redução de
  dimensionalidade), além da extração e seleção de características, isto é, os
  atributos serão avaliados.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      Em seguida, separamos os dados de forma aleatória em duas partes:
  conjunto de dados de treinamento (ou indução) e conjunto de dados de
  teste, geralmente deixando o primeiro maior que o segundo.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

             VALIDAÇÃO E AVALIAÇÃO
             DE MODELOS PREDITIVOS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Podemos dizer que os dados de treinamento são utilizados para
  construir um modelo, enquanto os dados de teste são utilizados para validar
  o modelo construído, que é uma equação matemática utilizada para definir
  valores de saída a partir de valores de entrada, e não foram usados no
  treinamento.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      Depois validamos o algoritmo utilizando várias métricas existentes,
  como a acurácia, por exemplo.
      Um bom modelo é aquele que está apto a ser generalizado para dados
  desconhecidos.
      Os dados dos conjuntos de treinamento e de testes devem ser
  escolhidos de forma aleatória e não individual e não devem estar repetidos
  em ambos os conjuntos.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Para evitar uma má surpresa ao fim do processo, é possível usar uma
  estratégia que avalia o desempenho do modelo enquanto ocorre o processo
  de treinamento.
       Essa estratégia divide os dados em três conjuntos: treinamento,
  validação e teste.
       Assim, podemos avaliar o desempenho de vários modelos distintos ou
  até mesmo avaliar o desempenho dos modelos com a otimização de
  hiperparâmetros diferentes.
       A ideia é fazer diversos ajustes de modelagem ainda em tempo de
  treinamento que permitam verificar qual modelo (e com que parâmetros)
  generaliza melhor os dados.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      O final do processo continua o mesmo: o modelo final é executado com
  os dados de teste (que permanecem desconhecidos por parte do modelo) e
  seu desempenho é calculado por meio da métrica de acurácia.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Um problema que pode ser observado é a quantidade de dados
  necessária para o treinamento e as validações.
      Por isso, existe a técnica da validação cruzada.
      A validação cruzada é uma técnica para avaliar a capacidade de
  generalização de um modelo, a partir de um conjunto de dados e é
  empregada quando se deseja realizar predições.
      Busca-se estimar o quão preciso é um modelo na prática, ou seja, o seu
  desempenho em um novo conjunto de dados.
      Idealmente, o modelo deve ser avaliado em amostras que não foram
  usadas para construir ou ajustar o modelo, de modo que forneçam um senso
  imparcial de eficácia do modelo
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

            A Validação Cruzada pode ocorrer de forma exaustiva ou não-exaustiva.

  Forma Exaustiva: essa técnica basicamente envolve testar o modelo de todas
  as formas possíveis. Dividem-se os dados originais definidos em conjuntos de
  treinamento e teste (Ex: Leave-P-Out – LpO e Leave-One-Out – LoO).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Para provas de concurso, a forma não-exaustiva é mais cobrada,
  portanto, basta saber que o LpO é uma abordagem que deixa de fora p
  observações ao fazer a validação cruzada, isto é, havendo n observações,
  haverá n-p amostras para treinamento e p observações são usadas pela
  validação. Já o LoO é um caso particular do LpO em que p = 1. Nesse caso,
  apenas uma observação é retirada do conjunto de treinamento ao fazer a
  validação cruzada.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      Forma Não-Exaustiva: essa técnica também divide os dados originais
  definidos em conjuntos de treinamento e teste, mas isso não ocorre
  analisando todas as permutações e combinações possíveis (Ex: Holdout e
  K-Fold Cross Validation).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      O Método Holdout é a forma mais simples de validação cruzada que
  consiste basicamente em dividir o conjunto de dados em dois subconjuntos
  mutuamente exclusivos (disjuntos): um para treinamento e outro para
  testes.
      O problema desse método é que não é certo que o conjunto de dados
  de validação seja representativo da amostra (além de ter pouca eficiência
  quando se têm poucos dados).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      Uma solução para esse problema é utilizar o K-Fold Cross-Validation que
  também divide os dados em conjuntos de treinamento e testes, mas
  diversas vezes.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       No exemplo abaixo, nós fizemos cinco vezes essa divisão entre dados de
  treino e dados de teste. No entanto, observe que cada uma das partições ou
  divisões é diferente uma da outra.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Pensem que esses dados estão dispostos em uma tabela com diversas
  linhas. A primeira partição pegou as 80% primeiras linhas da tabela para
  treino e o restante para teste; a segunda pegou as 60% primeiras linhas para
  treino, as 20% seguintes para teste e o restante também para treino; a
  terceira pegou as 40% primeiras linhas para treino, as 20% seguintes para
  teste e o restante para treino; e assim por diante...
       Dessa forma, conseguimos fazer cinco modelos diferentes e
  independentes de forma que cada modelo será treinado e avaliado com um
  conjunto (particionamento) diferente dos dados, o que nos fornece cinco
  modelos e cinco métricas de desempenho diferentes.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       Sendo assim, o método de validação cruzada denominado k-fold
  consiste em dividir o conjunto total de dados em k subconjuntos
  mutuamente exclusivos do mesmo tamanho e, a partir daí, um subconjunto
  é utilizado para teste e os k-1 restantes são utilizados para treinamento do
  modelo de predição. Este processo é realizado k vezes sendo que, ao final
  das k iterações, calcula-se a acurácia sobre os erros encontrados.
       Resulta em uma medida mais confiável sobre a capacidade de um
  modelo preditivo de generalizar os dados a partir de um conjunto de dados
  de treinamento.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

      Note que a diferença fundamental entre o Método Holdout e o Método
  K-Fold é que o primeiro divide o conjunto de dados em dois subconjuntos; o
  segundo também o faz, mas diversas vezes e com tamanhos diferentes.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

       O esquema a seguir representa bem como funciona a validação cruzada:
  a Parte A mostra as diversas iterações de divisões em dados de treino e
  dados de teste; a Parte B mostra o aprendizado de máquina pelos dados de
  treinamento; e a Parte C mostra a avaliação do desempenho pelos dados de
  teste.
       Note que a performance é calculada como 1/5 do somatório das cinco
  performances (= média das performances). Em outras palavras, trata-se de
  da média aritmética das performances.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING –
VALIDAÇÃO E AVALIAÇÃO DE MODELOS PREDITIVOS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


      O algoritmo de aprendizado de máquina tenta criar um modelo,
  representado no plano cartesiano como uma curva, que melhor se ajuste aos
  dados.
      Essa curva tem que ser de tal forma que generalize os dados de treino e
  minimize os erros para dados novos, isto é, se eu inserir um novo dado de
  entrada, eu gostaria que o meu modelo fizesse uma previsão de dado de
  saída de forma que tivesse o menor erro (distância) possível em relação à
  curva.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING
       Dito isto, vamos pegar um conjunto de dados e separar em conjunto de
  treinamento (verde) e conjunto de teste (vermelhos).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

       Usando os dados de treinamento e aplicando vários modelos de
  treinamento, podemos chegar aos seguintes resultados:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

    Podemos deduzir que o terceiro é melhor? Não!!! Esses são dados de
    treinamento!!!!

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


            Vamos agora usar os dados de teste

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


      Note que o modelo representado pela segunda curva é o que melhor
  generaliza os dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


       Na primeira curva, ocorre o que chamamos de Underfitting (Subajuste):
  a reta não se ajusta bem nem aos dados de treino nem aos dados de teste,
  logo podemos afirmar que o modelo possui falta de parâmetros,
  desempenho ruim, pouca expressividade e excessiva simplicidade para
  modelar a real complexidade do problema para novos dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

         Na terceira curva, ocorre o que chamamos de Overfitting (Sobreajuste):
     a curva se ajusta muito bem aos dados de treino, mas não se ajusta tão bem
     aos dados de teste, logo podemos afirmar que o modelo possui parâmetros
     demais, desempenho ruim, muita expressividade e excessiva complexidade
     para modelar a real complexidade do problema. O modelo apenas memoriza
     os dados de treino, logo não é capaz de generalizar para novos dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


      Dados observados são o resultado de um conjunto de variáveis
  disponíveis + um conjunto de variáveis indisponíveis + aleatoriedade + erros.
      Se a curva está acertando perfeitamente todos os pontos do conjunto
  de dados de treino, significa que não há nenhuma variável indisponível,
  nenhuma aleatoriedade e nenhum erro, o que até é possível, mas somente
  em casos extremamente raros e excessivamente simples.
      Na maioria dos casos, existem variáveis indisponíveis + aleatoriedade +
  erros e se o modelo tiver um excesso de complexidade, ele não generalizará
  bem para novos dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

     A essência do overfiting é extrair parte da variação residual para a
  modelagem da curva como se essa variação representasse a estrutura do
  modelo (e, não, apenas um ruído).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

       Viés: é o erro que resulta de suposições imprecisas de um modelo. Em
  termos técnicos, trata-se da diferença entre a predição do valor de uma
  variável e o valor correto que o modelo deveria prever, ou seja, trata da
  incapacidade de um modelo de capturar o verdadeiro relacionamento entre
  variáveis.
       Um modelo de aprendizado de máquina com alto viés é aquele que erra
  bastante as previsões de valores (isto é, possui baixa acurácia); já um modelo
  de aprendizado de máquina com baixo viés é aquele que acerta bastante as
  previsões de valores (isto é, possui alta acurácia).


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


       Variância: trata de quanto as previsões de um modelo variam ao serem
  usados diferentes dados de treino, ou seja, a sensibilidade de um modelo ao
  ser utilizado com conjuntos de dados de treino diferentes.
       Um modelo com alta variância é aquele cujas previsões sobre diferentes
  conjuntos de dados variam bastante (baixa generalização); e um modelo
  com baixa variância é aquele cujas previsões sobre diferentes conjuntos de
  dados são consistentes (alta generalização).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

               O modelo ideal é aquele com baixo viés e baixa variância.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                   


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


       Para termos o modelo mais próximo do ideal, devemos fazer algumas
  escolhas: se aumentarmos a variância, reduziremos o viés; se reduzirmos a
  variância, aumentaremos o viés. Logo, a melhor estratégia é encontrar o
  equilíbrio entre esses dois erros que melhor atenda ao modelo de
  aprendizado de máquina em treinamento.
       É importante destacar que modelos lineares geralmente tem alto viés e
  baixa variância e modelos não lineares geralmente são o contrário.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

       OBSERVE:
       Para resolver problemas de overfitting, podemos tomar algumas
  atitudes:
  • utilizar mais dados de treinamento (com maior variedade);
  • utilizar validação cruzada com vários modelos para detectar o melhor
      desempenho;
  • realizar a combinação de múltiplos modelos diferentes (também
      chamado de ensemble);
  • limitar a complexidade do modelo por meio de técnicas de regularização;
  • adicionar ruído aleatório nos dados de treinamento para reduzir o ajuste.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


            Já para resolver problemas de underfitting, podemos:

   •     aumentar a complexidade do modelo;
   •     aumentar o tempo de treino;
   •     selecionar variáveis;
   •     reduzir a regularização.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


      A complexidade de um modelo de aprendizado de máquina é definida
  em função da quantidade de parâmetros ou variáveis: quanto mais
  parâmetros, mais complexo; quanto menos parâmetros, menos complexo. Já
  a quantidade de erros de predição nos indica quão bom é um modelo:
  quanto menos erros de predição, melhor; quanto mais erros, pior.
      Podemos analisar isso no gráfico de Complexidade do Modelo x Erros de
  Predição.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


       Agora observem que temos duas curvas: (1) azul – referente ao
  conjunto de dados de treinamento; e (2) vermelho – referente ao conjunto
  de dados de validação.
       Vamos analisá-las separadamente: a curva azul nos mostra que, ao
  aplicar o modelo a um conjunto de dados de treinamento, a quantidade de
  erros diminui à medida que a complexidade do modelo aumenta. Logo,
  quanto mais complexo é um modelo, menos erros teremos – por isso,
  trata-se de uma curva descendente.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


      Já a curva vermelho nos mostra que, ao aplicar o modelo a um conjunto
  de dados de validação, a quantidade de erros diminui, chega em um vale, e
  depois aumenta novamente – percebam que a curva tem formato de uma
  parábola invertida. Esse ponto em que a curva chega em um vale é chamado
  de ponto de mínimo erro, porque é quando o modelo que foi treinado com
  dados de treinamento apresenta menos erros de predição quando aplicada
  aos dados de validação.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING
       Note que, à esquerda, temos uma região com curvas mais próximas, o
  que nos indica um modelo pouco complexo e apresenta alta taxa de erros de
  predição tanto nos dados de treinamento quanto nos dados de validação.
       Já à direita, temos uma região com curvas mais distantes, o que nos
  indica um modelo complexo e apresenta baixa taxa de erros de predição nos
  dados de treinamento e alta taxa de erros de predição nos dados de
  validação.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – UNDERFITTING E OVERFITTING


       Quando um modelo vai mal em suas predições quando aplicado a um
  conjunto de dados de treinamento e também a um conjunto de dados de
  validação, ocorre underfitting (região à esquerda); quando um modelo vai
  bem em suas predições quando aplicado a um conjunto de dados
  treinamento e vai mal quando aplicado a um conjunto de dados de
  validação, ocorre overfitting (região à direita) o que significa que o modelo
  generaliza mal os dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – TÉCNICAS DE REGULARIZAÇÃO


       Lembremos que, para qualquer problema de aprendizado de máquina,
  é possível afirmar que um ponto de dado observado é o resultado de uma
  função de variáveis disponíveis + uma função de variáveis indisponíveis +
  variações, como não temos disponíveis as variáveis indisponíveis, podemos
  simplificar para: um determinado ponto de dado qualquer é o resultado de
  uma função de variáveis disponíveis + variações.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – TÉCNICAS DE REGULARIZAÇÃO


      À medida que vamos adicionando mais variáveis, tendemos a fazer
  previsões cada vez melhores sobre os dados de treinamento, mas além de
  um certo ponto, a adição de mais variáveis deixa de ajudar na modelagem e
  começa a atrapalhar, podemos incorrer no overfitting e o modelo se torna
  mais complexo que o próprio fenômeno que se tenta modelar, encontrando
  padrões nos dados aleatórios.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – TÉCNICAS DE REGULARIZAÇÃO


      A regularização é o ajuste fino da complexidade do modelo e limita o
  grau de liberdade (flexibilidade) de um modelo de aprendizado de máquina
  para se ajustar aos dados de treinamento, visando evitar o sobreajuste.
      Pode ser aplicada a modelos de árvore de decisão para classificação,
  modelos de árvore de decisão para regressão, modelos de redes neurais e
  modelos de regressão linear, no entanto nosso foco nessa aula será apenas
  nesse último caso.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – TÉCNICAS DE REGULARIZAÇÃO


      A técnica de regularização para modelos de aprendizado de máquina
  que utilizam regressão linear busca efetivamente regularizar, normalizar ou
  suavizar modelos excessivamente complexos ou que dão muito destaque
  para uma característica específica, mantendo as características, mas
  impondo uma restrição à magnitude dos coeficientes. Quando as restrições
  são aplicadas aos parâmetros, o modelo produz uma função mais suave e
  menos propensa a overfitting.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – TÉCNICAS DE REGULARIZAÇÃO


       Para tal, são introduzidos parâmetros de regularização, conhecidos
  como fatores de regularização ou termos de penalização, que controlam a
  magnitude dos pesos dos parâmetros, comprimem seus valores e garantem
  que o modelo não esteja se adaptando aos dados de treinamento. É como se
  ele inserisse uma penalidade à reta de melhor ajuste aos dados de treino a
  fim de reduzir a variância nos dados de teste e restringir a influência das
  variáveis sobre o resultado previsto.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS

       No aprendizado de máquina, um hiperparâmetro é um parâmetro cujo
  valor é definido antes do início do processo de aprendizado. Por outro lado,
  os valores de outros parâmetros são derivados por meio de treinamento. Na
  verdade, um hiperparâmetro é uma espécie de característica ou restrição
  inserida em um algoritmo de aprendizado de máquina para que ele possa
  realizar o treinamento.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS


      Veja que os valores dos parâmetros são extraídos do próprio conjunto
  de dados a partir do aprendizado de máquina, logo estão sob controle do
  algoritmo e, não, do cientista de dados. Quando os valores estão sob
  controle do cientista de dados, chamamos de hiperparâmetros!
      Não há como saber com exatidão qual é o melhor valor para um
  hiperparâmetro de um problema específico porque isso dependerá de testes
  de tentativa e erro.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS

          A escolha de hiperparâmetros é também chamada de otimização
     (tunning) e trata da realização de experimentos com valores diferentes de
     hiperparâmetros com o intuito de descobrir quais deles geram os modelos
     mais eficientes.
          Diferentes escolhas de hiperparâmetros levam a modelos treinados
     distintos com níveis de desempenho potencialmente diferentes.
          É importante entender também que, quando há mais de um
     hiperparâmetro em um modelo, eles podem interagir afetando o
     desempenho do modelo de uma maneira bastante complexa e imprevisível.
     Nesses casos, temos que testar também as combinações de valores de
     hiperparâmetros que geram melhores resultados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS

          Existem diversos tipos de otimização de hiperparâmetros:

 a) Grid Search Trata-se de um método eficaz para ajustar hiperparâmetros,
 sendo utilizado para melhorar o desempenho de generalização de um
 modelo.
     Ele testa exaustivamente todas as combinações possíveis dos valores de
 hiperparâmetros de interesse até encontrar os melhores.
     É fácil de implementar, mas é mais adequado quando temos poucas
 combinações, quando há muitas combinações, ele se torna
 computacionalmente inviável, demorando um tempo excessivo.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia               


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS

  b) Random Search: define-se uma quantidade de testes e o algoritmo
  escolher aleatoriamente quais valores serão testados para cada
  hiperparâmetro.
      Reduz o tempo, é mais barato, e é bastante útil quando temos uma
  quantidade extraordinária de hiperparâmetros, visto que sua aleatoriedade
  permite descobrir combinações que seria definida intuitivamente, mas não
  garante que encontrará a melhor combinação de hiperparâmetros.
      É possível também que o algoritmo acabe explorando muito uma região
  do espaço de busca e pouco outras.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – OTIMIZAÇÃO DE HIPERPARÂMETROS


  c) Bayesiana Search: utiliza desempenhos de hiperparâmetros anteriores
  para orientar quais valores de hiperparâmetros serão testados
  posteriormente. Em outras palavras, ela tenta estimar a probabilidade de
  desempenho de combinações em função de resultados já avaliados. Após
  cada avaliação, o algoritmo detecta quais valores de hiperparâmetro são
  mais interessantes de explorar e quais não são.
      A grande vantagem é que essa abordagem perde pouco tempo
  buscando valores de hiperparâmetros onde há pouca probabilidade de
  encontrá-los e se foca em realizar buscas em áreas onde há maior
  probabilidade.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – SEPARABILIDADE DE DADOS
       A separabilidade linear é basicamente apenas uma propriedade que
  existe entre dois ou mais conjuntos de pontos. Eles são linearmente
  separáveis se existir pelo menos uma linha no plano que separe esses dois
  conjuntos de pontos. Também pode existir em três dimensões (quando
  separamos por meio de um hiperplano) ou mais dimensões.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

MACHINE LEARNING – REDUÇÃO DE DIMENSIONALIDADE

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDUÇÃO DE DIMENSIONALIDADE

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

MACHINE LEARNING – REDUÇÃO DE DIMENSIONALIDADE


            Existem dois tipos de técnicas de redução de dimensionalidade:

  a) Seleção de Variáveis/Atributos: tem como objetivo descobrir um
  subconjunto de variáveis relevantes para uma tarefa, torna o processo de
  aprendizagem mais eficiente e descarta variáveis irrelevantes, que sejam
  pouco relacionadas com a variável que desejamos prever.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

MACHINE LEARNING – REDUÇÃO DE DIMENSIONALIDADE


  b) Fatoração de Matrizes: decompõe a matriz dos dados originais em
  produtos de matrizes mais simples, com propriedades que permitem
  identificar as dimensões mais relevantes da variabilidade dos dados
  enquanto combinações lineares dos dados originais.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

OBRIGADA
                             Prof. Emannuelle Gouveia
                             @emannuellegouveia


     


---

---
