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
arquivo_origem: Aula 11_023_Slide.txt
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
     AULA 06 Prof. Emannuelle Gouveia
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
