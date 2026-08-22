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
arquivo_origem: Aula 11_010_Slide.txt
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
     AULA 03 Prof. Emannuelle Gouveia
                                             @Emannuelle Gouveia


        


---

                            CLASSIFICAÇÃO


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

        CLASSIFICAÇÃO
           Trata-se de uma técnica de mineração de dados que designa itens de
      dados a uma determinada classe ou categoria previamente definida a fim de
      prever a classe alvo para cada item de dado.
           Vamos agora a um dos exemplos mais famosos sobre o assunto que
      virou case de mineração nos livros didáticos.
           Existe uma loja americana chamada Target que vende de tudo, mas
      principalmente roupas e que ficou famosa em 2002 por conseguir adivinhar
      mulheres que estavam grávidas e lhes enviar cupons de desconto
      relacionados a bebês.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        CLASSIFICAÇÃO
           A Target precisava classificar cada cliente em uma de duas categorias:
      provavelmente grávida ou provavelmente não grávida.
           A classificação é um processo que geralmente funciona em vários
      estágios. Primeiro, cada instância tem que ser dividida em uma coleção de
      atributos, também chamados de rótulo ou etiqueta.
           Para uma loja como a Target, uma instância poderia ser uma mulher
      qualquer, então precisamos descobrir a coleção de atributos relevantes para
      descobrir se uma mulher está grávida.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO
           Bem, a Target possuía um banco de dados com informações sobre todas
      as suas clientes como nome, data de nascimento, endereço, e-mail e o
      principal: histórico de compras, ademais, nessa época, como ainda não havia
      legislação sobre uso de dados pessoais, era comum a compra ou
      compartilhamento de bases de dados entre empresas, então ela possuía
      todo o histórico de compras de diversas clientes em várias empresas.
           Além disso, a Target possuía um cadastro em seu site para oferecer
      descontos para mulheres que se registrassem como grávidas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO
          Com base em tudo isso, ela analisou uma pequena amostra de dados e,
      em pouco tempo, surgiram alguns padrões úteis, por exemplo: percebeu-se
      que mulheres grávidas compravam quantidades maiores de creme
      hidratante sem cheiro por volta do começo do segundo trimestre de
      gravidez; em algum momento das vinte primeiras semanas, elas compravam
      muitos suplementos como cálcio, magnésio e zinco.
          Cada informação dessas pode ser considerada um atributo que ajuda a
      encaixar nas duas categorias.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

        CLASSIFICAÇÃO
          Perceberam também que grávidas bem próximas de ganhar o bebê
      estavam comprando de forma diferenciada uma quantidade maior de sabão
      neutro e desinfetantes para mãos.
          Após interpretação, foi descoberto que isso significava que
      provavelmente o bebê estava próximo de nascer.
          Cada informação dessa é um atributo fundamental para a classificação
      de gravidez ou não-gravidez.
          Então, foram identificados 25 atributos que, quando analisados em
      conjunto, permitissem a atribuição de um peso ou uma pontuação.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        CLASSIFICAÇÃO
            Comprar fraldas é um atributo com um peso/pontuação muito maior do
       que comprar creme hidratante, por exemplo.
            Bem, à medida que os computadores começaram a processar os dados,
       chegou-se a uma pontuação em relação à probabilidade de gravidez de cada
       compradora e mais que isso: foi também possível estimar uma data de
       nascimento dentro de uma pequena janela, para que a Target pudesse
       enviar cupons cronometrados para fases mais específicas da gravidez.
            Para testar, criou-se uma pessoa fictícia no banco de dados chamada
       Jennifer Simpson que tinha 23 anos, morava em Atlanta e em março havia
       comprado um creme hidratante de cacau, uma bolsa grande o suficiente
       para caber um pacote de fraldas, suplementos de zinco e magnésio e um
       tapete azul brilhante.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

        CLASSIFICAÇÃO
          O algoritmo estimou que havia uma chance de 87% de que ela estivesse
      grávida e que o bebê nasceria em algum momento no final de agosto.

           Chegou o momento então de colocar o algoritmo para rodar na base
      histórica inteira, e daí a Target começou a enviar cupons de desconto para
      itens de bebê pelos correios para clientes que nunca haviam se cadastrado
      como grávidas, baseado na pontuação de seus algoritmos em relação à
      classificação realizada.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        CLASSIFICAÇÃO
           Um dia, um homem irritado entrou em uma Target de Minneapolis
      exigindo falar com o gerente. "Minha filha recebeu isso pelo correio", disse
      ele. "Ela ainda está no ensino médio e vocês estão enviando cupons para
      roupas de bebê e berços? Vocês estão tentando incentivá-la a engravidar?”.
           O gerente não tinha ideia do que o homem estava falando, mas viu o
      cupom e conferiu que o endereço estava correto, realmente era para a filha
      daquele senhor e continha anúncios de roupas de maternidade, móveis de
      criança e fotos de bebês sorridentes.
           O gerente pediu mil desculpas e se despediu do pai da menina.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO
          No dia seguinte, ele fez questão de ligar para aquele senhor e pedir
      desculpas mais uma vez.
          Conta-se a história que ao receber o telefone de desculpas, o pai ficou
      envergonhado: "Eu tive uma conversa com minha filha", disse ele.
      "Acontece que tem havido algumas atividades em minha casa que eu não
      conhecia completamente. Ela está grávida, prevista para agosto e eu que te
      devo desculpas“.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO
          Companhias de Seguro utilizam a classificação para adivinhar quais
      pacientes idosos morrerão em breve; médicos usam para verificar se bebês
      prematuros estão desenvolvendo infecções perigosas (já que o classificador
      pode colocar indicadores sutis de doenças antes que os humanos notem
      quaisquer sinais); enfim, há infinitos exemplos de utilização da classificação
      como técnica de mineração de dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

        CLASSIFICAÇÃO
           Em suma, podemos dizer que a técnica de classificação utiliza um
      algoritmo de aprendizado supervisionado a fim de distribuir um conjunto de
      dados de entrada em categorias ou classes prédefinidas de saída para
      realizar a análise de dados.
           Constroem-se modelos de classificação a partir de um conjunto de
      dados de entrada, identificando cada classe por meio de múltiplos atributos
      e os rotulando/etiquetando, sendo essa técnica possível de ser utilizada
      combinadas com outras.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

           Trata-se de uma técnica de aprendizado supervisionado para distribuir
      um conjunto de dados de entrada em categorias ou classes pré-definidas de
      saída.
          Nele o supervisor pode escolher um conjunto de features (também
      chamados de características ou qualidades) que são os valores que
      caracterizam de forma útil as coisas que desejamos classificar.
           E depois inserir dados de treinamento para ir afinando o aprendizado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        CLASSIFICAÇÃO

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        CLASSIFICAÇÃO
           No gráfico de dispersão temos: no eixo horizontal, temos a envergadura
      em milímetros; no eixo vertical, temos a massa em gramas. Observe na
      imagem da direita que é possível ver dois agrupamentos, mas no meio
      (círculo roxo) existe uma sobreposição.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

           Imagine que eu trace uma linha reta vertical na altura dos 45 milímetros
      de envergadura e afirme que tudo que estiver à esquerda provavelmente é
      uma mariposa imperatriz e tudo à direita uma mariposa luna. Além disso, eu
      posso traçar uma linha horizontal na altura dos 0,75 gramas de massa e
      afirmar que tudo que estiver abaixo desse valor provavelmente é uma
      mariposa imperatriz. Com isso, vejam na imagem ao lado que se forma um
      quadrante em que sua parte inferior esquerda representa prováveis
      mariposas imperatriz e o restante representa as mariposas luna.
           Essas linhas que dividem o espaço de decisão são chamadas de limites
      de decisão porque auxiliam a indicar qual será o classificador sugerido

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        CLASSIFICAÇÃO

           Se olharmos atentamente, podemos verificar que 86 mariposas
      imperatriz (vermelho) terminaram de forma correta dentro da região de
      decisão (em vermelho), mas 14 delas acabaram de forma incorreta no
      território da mariposa luna (em azul). Por outro lado, 82 mariposas luna
      (azul) foram classificadas corretamente (em azul), com 18 caindo para o lado
      errado (em vermelho).
           E isso é bom ou ruim?

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

           Nós podemos representar esses valores por meio de uma matriz de
      confusão ou de erro.
           Consiste em uma tabela utilizada para avaliar a qualidade de um
      modelo que mostra as frequências de classificação para cada
      classificador/rótulo do modelo. Trata-se geralmente de uma tabela com
      duas linhas e duas colunas que exibe a quantidade de erros e acertos de
      classificação de uma amostra de dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

        CLASSIFICAÇÃO

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        CLASSIFICAÇÃO

          Essa é a nossa matriz de confusão! Note que ela possui dois eixos:
      horizontal, que indica o valor previsto ou esperado; e vertical, que indica o
      valor real.
          Para avaliar o desempenho do algoritmo, nós podemos utilizar a
      métrica de acurácia, isto é, a divisão do número de acertos pelo total de
      predições. Em nosso caso, tivemos 82+86 = 168 acertos em uma amostra de
      200 mariposas. Dessa forma, a nossa acurácia foi de 168/200 = 84%.
          Observe que não há como desenharmos linhas que nos forneçam 100%
      de acurácia!


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

         O trabalho dos algoritmos de aprendizado de máquina é tentar
      maximizar as classificações corretas enquanto minimiza seus erros.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

        CLASSIFICAÇÃO

               Nós podemos generalizar a matriz de confusão da seguinte forma:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

        MACHINE LEARNING – CLASSIFICAÇÃO

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        CLASSIFICAÇÃO

      Outras formas de medir o desempenho do algoritmo é com técnicas como: a
      Sensibilidade, Precisão e F1-Score.
      Dependendo do contexto, o desempenho pode ser medido de maneira
      diferente para refletir melhor a efetividade da medição, por exemplo, em
      alguns casos, ter falsos-negativos não é tão relevante, mas em outros pode
      ser e etc.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        CLASSIFICAÇÃO

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        CLASSIFICAÇÃO

           A precisão pode ser utilizada em situações em que falsos-positivos são
      mais prejudiciais que os falsos-negativos. Por exemplo: ao classificar ações
      da bolsa de valores como boas ou ruins, um falso-positivo pode fazer uma
      pessoa investir em uma ação ruim e ter prejuízos; já um falso-negativo pode
      fazer uma pessoa não investir em uma ação boa e deixar de ter lucros, mas
      ela não terá prejuízos, logo é menos prejudicial.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        CLASSIFICAÇÃO

          Já o recall pode ser utilizado em situações em que falsos-negativos são
      mais prejudiciais que os falsos-positivos. Por exemplo: ao classificar uma
      pessoa com vacinado ou não-vacinado, um falso-positivo pode fazer uma
      pessoa saudável não pegar um avião com outras pessoas; já um falso-
      negativo pode fazer uma pessoa infectada pegar um avião com outras
      pessoas e infectá-las com seu vírus.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

           Uma das principais ferramentas de classificação é a árvore de decisão,
      que consiste basicamente em uma representação gráfica de regras de
      classificação.
           Conseguem demonstrar visualmente as condições para categorizar
      dados por meio de uma estrutura que contém nó raiz, nós folha e nós finais.
           Na imagem seguinte, eles elementos estão representados
      respectivamente por um quadrado, um círculo e um triângulo.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Árvores de Decisão

            É possível atravessar a árvore de decisão partindo do nó raiz até cada
      folha por meio de diversas regras de decisão e o nó final contém sempre
      uma das classes pré-definidas.
            É importante destacar também que uma árvore de decisão pode ser
      utilizada tanto para classificação quanto para regressão, mas o nosso foco
      aqui será na árvore de classificação porque nossas classes são categóricas e
      finitas e, não, contínuas e infinitas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

           Cada nó interno denota um teste de um atributo, cada ramificação
      denota o resultado de um teste e cada nó folha apresenta um rótulo de uma
      classe definida de antemão por um supervisor.
           O objetivo dessa técnica é criar uma árvore que verifica cada um dos
      testes até chegar a uma folha, que representa a categoria, classe ou rótulo
      do item avaliado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

          A árvore de decisão, por si só, não tem a ver com aprendizado de
      máquina, mas o seu processo de construção automático e recursivo, a partir
      de um conjunto de dados, pode ser considerado um algoritmo de
      aprendizado de máquina.
          O processo de construção do modelo de uma árvore de decisão se
      chama indução e busca fazer diversas divisões ou particionamentos dos
      dados em subconjuntos de forma automática, de modo que os subconjuntos
      sejam cada vez mais homogêneos.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Árvores de Decisão

          O algoritmo da árvore de decisão analisará, em cada nó, várias variáveis
      previamente colocadas e aprenderá aos poucos as suas relevâncias,
      assumindo uma decisão para cada uma dessas variáveis (e seus possíveis
      pontos de corte) a fim de descobrir quais são as melhores para realizar o
      particionamento dos dados de modo que se formem dois subgrupos mais
      homogêneos possíveis.
          Ex: um software de análise de concessão de cartão de crédito. A
      máquina pode aprender oferecendo para ela uma lista que contenha os
      valores de variáveis (como: estado civil, saldo na conta, salario) referentes a
      diversos clientes antigos e uma coluna extra que indique se esses clientes
      deram calote na operadora ou não.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia              


---

        Árvores de Decisão

          O algoritmo vai fazer milhares de testes com cada uma das variáveis, vai
      testar diversos pontos de corte diferentes e diversas sequências de análise
      de variáveis diferentes. O que importa aqui é que nós vamos sair de um
      grupo muito misturado (menos homogêneo) para dois subgrupos menos
      misturados (mais homogêneos, o que chamamos de Ganho de Informação
      ou Redução de Entropia.


      OBS: Lembrando que entropia é a medida que nos diz o quanto um conjunto
      de dados está desorganizado ou misturado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

           Note que sempre que dividimos um grupo em outros subgrupos, esses
      subgrupos serão mais puros à medida que seus dados forem mais
      homogêneos.
           Temos diversas métricas para calcular a pureza de um subgrupo como:
      Índice de Gini, Redução de Variância, etc.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Árvores de Decisão

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Árvores de Decisão

           Para encontrar modelos cada vez mais puros, falamos que ocorrem as
      divisões nos nós, mas esse processo precisa ser finito para evitar o
      overfitting que é um único dado para cada nó folha.
           Há diversas maneiras de definir um limite para as divisões: nós
      podemos definir uma altura/profundidade máxima da árvore e quando esse
      limite for atingido, interrompe as subdivisões ou podemos realizar a poda da
      árvore que consiste em deixarmos a árvore crescer quanto quiser e depois
      vamos reduzindo as divisões que sejam pouco significativas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Árvores de Decisão

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Árvores de Decisão

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Árvores de Decisão
          É importante mencionar que esse algoritmo é capaz de classificar dados
      dentre de um conjunto finito de classes com base em valores de entrada por
      meio de uma abordagem chamada estratificação, que permite determinar
      as regras para que se possa designar ou direcionar cada caso a uma
      categoria pré-existente, separando-os em níveis diferentes (Ex: executar o
      processo da troca, enviar para a assistência, comunicar o cliente, reenviar o
      produto).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão
               Os algoritmos de árvore de decisão mais comuns são: ID3, c4.5 e CART.

           O algoritmo ID3 é utilizado para gerar árvores a partir de um conjunto
      de dados. É usado em problemas de aprendizado supervisionado, onde os
      dados de entrada são divididos em categorias com base em certas
      condições.
          O algoritmo funciona selecionando o melhor atributo de um
      determinado conjunto de atributos para dividir os dados em dois (ou mais)
      subconjuntos. Isso é feito de forma iterativa, onde, a cada passo do
      algoritmo, o melhor atributo é escolhido e os dados são divididos em dois
      (ou mais) subconjuntos.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

        Árvores de Decisão
           Este processo é repetido até que todos os dados sejam divididos em
      categorias.
           Depois que a árvore é gerada, ela pode ser usada para classificar novos
      pontos de dados seguindo o caminho da árvore até que o ponto de dados
      seja associado a uma categoria.
           Ela trabalha apenas com atributos categóricos/qualitativos (Ex:
      Masculino ou Feminino), construindo a árvore a partir do nó raiz de cima
      para baixo recursivamente por meio do método dividir-para-conquistar.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão
           Já o algoritmo c4.5 é uma evolução do ID3 capaz de trabalhar tanto com
      atributos categóricos quanto numéricos/quantitativos (Ex: 95kg).
           Ele funciona dividindo iterativamente os dados em subconjuntos com
      base no atributo que melhor separa os dados. A cada divisão, o C4.5 calcula
      a impureza de cada um dos subconjuntos e seleciona o atributo que produz
      os subconjuntos mais puros, isto é, aqueles que contêm apenas dados de
      apenas uma classe ou rótulo.
           O algoritmo então repete o processo até que todos os dados tenham
      sido divididos em subconjuntos puros ou até que um critério de parada seja
      atingido.
           Além disso, trata-se de um algoritmo bem mais rápido que o anterior.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Árvores de Decisão
           Por fim, o algoritmo CART (Classification and Regression Trees) é um
      tipo de algoritmo de árvore de decisão utilizado para problemas de
      classificação e regressão.
           Ele funciona construindo uma árvore de decisão durante a fase de
      treinamento, que é usada para fazer previsões sobre dados não vistos.
           O objetivo do algoritmo é criar um modelo que preveja com precisão o
      valor alvo, além de ter o menor número possível de divisões.
           Ele funciona dividindo recursivamente os dados de treinamento em
      subconjuntos menores com base na variável independente mais
      significativa.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Árvores de Decisão
           A árvore para de crescer quando atinge uma profundidade máxima
      especificada ou quando todas as amostras restantes pertencem à mesma
      classe.
           O algoritmo CART é capaz de trabalhar tanto com atributos
      categóricos/qualitativos quanto numéricos/quantitativos.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

        Florestas Aleatórias
           Árvores de decisão são ferramentas interessantes, mas não fazem
      previsões com acurácia. Em outras palavras, elas funcionam bem com dados
      de treinamento, mas não são tão flexíveis quando utilizadas para classificar
      novas amostras.
           Já florestas aleatórias (random forests) permitem combinar a
      simplicidade de árvores de decisão com flexibilidade para melhorar
      significativamente a acurácia das previsões, sendo utilizadas tanto para
      classificação quanto para regressão.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Florestas Aleatórias
           Imagine que tenhamos um conjunto de dados (dataset) original com
      diversas variáveis, em nosso primeiro passo, precisaremos criar um
      bootstrapped dataset que é um conjunto de dados retirados do conjunto de
      dados original (inclusive com o mesmo tamanho do conjunto de dados
      original), mas com amostras aleatórias dos dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Florestas Aleatórias
           Lembrando que as amostras de dados retirada do conjunto de dados
      original pode conter amostras repetidas.
           Vejam um exemplo na tabela a seguir: a primeira linha é igual a segunda
      linha do dataset original; a segunda linha é igual a primeira do dataset
      original.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Florestas Aleatórias
           Note que a quarta linha do conjunto de dados original foi repetida duas
      vezes e a terceira sequer foi selecionado.
           É por essa razão que o bootstrapped dataset é considerado um dataset
      retirado do dataset original e possui o mesmo tamanho.
           O segundo passo é criar uma árvore de decisão baseado no bootstrap
      dataset, mas com uma particularidade: nós vamos utilizar um subconjunto
      aleatório de colunas para cada nível da árvore.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Florestas Aleatórias
            Por exemplo: para a primeira árvore, vamos escolher duas variáveis
      quaisquer e verificar qual delas divide melhor as amostras.
            Vamos supor que tenhamos escolhido “Boa Circulação” e “Artérias
      Bloqueadas” e que, dentre essa duas, “Boa Circulação” divide melhor as
      amostras.
            Agora vamos para o próximo nível e fazemos os mesmos passos até
      utilizar todas as variáveis disponíveis.
            Essa iteração permitirá construir diversas árvores diferentes:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Florestas Aleatórias

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Florestas Aleatórias
          É a variedade que torna as florestas aleatórias mais efetivas que árvores
      de decisão utilizadas de forma individual.
          Agora que nós temos uma enorme variedade de árvores de decisões
      (uma enorme variedade de árvores é uma... floresta), nós podemos tentar
      prever de uma determinada pessoa tem ou não doenças cardíacas.
          Considere abaixo os dados de uma nova pessoa que desejar prever
      doenças cardíacas:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Florestas Aleatórias
          Pega-se esses dados das variáveis e se passa por todas as árvores de
      decisão aleatórias criadas nos passos anteriores.
          Vamos supor que, de 100 árvores aleatórias, 75 indicaram que esse
      paciente possui doença cardíaca e 25 indicaram que ele não possui.
          Dessa forma, podemos prever que, sim, ele tem doença cardíaca.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Florestas Aleatórias
           Para saber se a floresta está fazendo uma boa classificação, podemos
      usar as amostras do dataset original que não foram utilizadas no
      bootstrapped dataset, passando-as pela floresta e verificando se o resultado
      final bate com o inicial.
           Em relação às árvores de decisão individuais, podemos afirmar que esse
      algoritmo é capaz de fazer previsões mais acuradas, dado que ele combina
      previsões de diversas árvores de decisão treinadas em diferentes
      subconjuntos do conjunto de dados de treinamento original.
           Ademais, ela é menos propensa a sofrer com overfitting, dado que
      árvores individuais geralmente se ajustam excessivamente aos dados de
      treinamento.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Florestas Aleatórias

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

        Classificador Naive Bayes
           Vamos começar exemplificando para compreendermos melhor a
      fórmula final.
           Suponhamos que desejamos separar e-mails desejados de e-mails
      indesejados (spam).
           Para isso podemos pegar o texto de todos os e-mails normais e criar um
      gráfico com a frequência de todas as palavras em suas mensagens.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Classificador Naive Bayes
          Em seguida, nós podemos utilizar esse gráfico para calcular as
      probabilidades de encontrar cada palavra dado que elas estão presentes em
      um e-mail normal.
          Exemplo: a probabilidade de vermos a palavra “Querido” dado que
      estamos vendo apenas e-mails normais é 80/320. Calculada pela frequência
      da palavra “querido” sobre a quantidade total de palavras contidas em
      todos os e-mails normais da seguinte forma:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

    Classificador Naive Bayes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

 Classificador Naive Bayes
         Vamos colocá-las no gráfico de frequência de palavras em e-mails
      normais:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Classificador Naive Bayes
          Agora vamos fazer a mesma coisa, mas para e-mails de spam! Para tal,
      pegamos o texto de todos os e-mails de spam e criamos um gráfico com a
      frequência de todas as palavras em suas mensagens:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
          Da mesma forma, nós podemos calcular a probabilidade de cada uma
      das palavras, porém agora dentro do contexto de e-mails indesejados:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Classificador Naive Bayes
          Vamos colocá-las no gráfico de frequência de palavras em e-mails
      indesejado

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

  Classificador Naive Bayes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Classificador Naive Bayes
          Agora vamos classificar uma mensagem que chegou começando com:
      “Querido amigo,...”
          Para iniciar, devemos definir a probabilidade de um e-mail qualquer
      (independentemente do que diz em seu texto) seja um e-mail normal. Como
      é um palpite, podemos sugerir qualquer probabilidade que quisermos (Ex:
      50%), mas um palpite mais direcionado pode ser estimado a partir do nosso
      conjunto de dados de treinamento que continha 320 e-mails normais e 40 e-
      mails indesejados, logo um palpite inicial mais razoável seria: (Ex: 89%).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
          Como queremos calcular a probabilidade de um e-mail que contenha as
      palavras “Querido amigo”, devemos multiplicar nosso palpite inicial pela
      probabilidade de a palavra “Querido” ocorrer em um e-mail normal e
      multiplicar pela probabilidade de a palavra “amigo” ocorrer em um e-mail
      normal.
          Ora, nós temos essas probabilidades todas calculadas da etapa anterior
      em nossa tabelinha apresentada na página passada. Vamos fazer os
      cálculos...

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
         Agora vamos repetir o procedimento para e-mails indesejados.
      Comecemos pelo cálculo do nosso palpite inicial:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Classificador Naive Bayes
          Como queremos calcular a probabilidade de um e-mail que contenha as
      palavras “Querido amigo”, devemos multiplicar nosso palpite inicial pela
      probabilidade de a palavra “Querido” ocorrer em um e-mail indesejado e
      multiplicar pela probabilidade de a palavra “amigo” ocorrer em um e-mail
      indesejado. Ora, nós temos essas probabilidades todas calculadas da etapa
      anterior em nossa tabelinha apresentada na página passada. Vamos fazer os
      cálculos...

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
          Ora, como a probabilidade que calculamos para que essa mensagem
      fosse um e-mail normal é maior que a probabilidade que calculamos para
      que essa mensagem fosse um e-mail indesejado (3,56% > 0,03%), logo esse
      e-mail será considerado normal e, não, indesejado.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Classificador Naive Bayes
           O Classificador Naive Bayes é um classificador probabilístico baseado no
      Teorema de Bayes com hipótese forte de independência entre seus
      atributos/variáveis.
           Ele descreve a probabilidade condicional de um evento, baseado em
      um conhecimento anterior, que pode estar relacionado ao evento.
           A fórmula desse teorema é extremamente simples, sendo basicamente
      uma aplicação direta de sua definição:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

Classificador Naive Bayes
       Esse teorema pode ser lido como: probabilidade de ocorrência de um evento
  A dado que um evento B ocorreu é igual à probabilidade de ocorrência de um
  evento B dado que um evento A ocorreu multiplicado pela probabilidade de
  ocorrência de um evento A sobre a probabilidade de ocorrência de um evento B.
       Ele permite calcular uma probabilidade condicional, isto é, probabilidade de
  ocorrência de um evento dado que outro evento ocorreu.
       Por exemplo: qual é a probabilidade de uma pessoa qualquer ser uma
  mulher dado que essa pessoa tem 1,90m de altura?
       Pelo Teorema de Bayes, é a probabilidade de uma pessoa ter 1,90m de altura
  dado que ela é uma mulher, multiplicado pela probabilidade de ser mulher
  dividido pela probabilidade de ter 1,90m.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Classificador Naive Bayes
           O Teorema de Bayes é a base para estudar o Classificador Naive Bayes.
      A palavra de origem inglesa naive significa ingênuo, ou seja, esse tópico
      trata do classificador ingênuo de Bayes.
           Ele é chamado de ingênuo porque pressupõe-se que as variáveis ou
      atributos contribuem para a probabilidade de forma independente uma da
      outra.
           Em outras palavras, trata-se de uma aplicação ingênua do Teorema de
      Bayes por considerar que as variáveis são independentes.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
          Na prática, isso significa que esse classificador retorna a mesma
      probabilidade independente da ordem dos eventos.
          Logo, a probabilidade para “Querido Amigo” é igual à de “Amigo
      Querido”:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Classificador Naive Bayes
          Nós temos regras gramaticais que regulam a forma em que falamos ou
      escrevemos, mas esse classificador ignora completamente essa
      característica e considera que a língua escrita é simplesmente um saco cheio
      de palavras e cada mensagem de e-mail é só um conjunto aleatório dessas
      palavras, mas, de forma curiosa, funciona bem com aprendizado de
      máquina.
          Logo, diz-se que ele tem alto viés e baixa variância.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

Classificador Naive Bayes
          Note que existe um paralelismo interessante entre esse classificador e o
      algoritmo de árvores de decisão, visto que ambos respondem perguntas
      para descobrir a probabilidade de algo pertencer a uma determinada classe
      Só que, para o algoritmo de árvore de decisão, a ordem das perguntas
      importa; no classificador ingênuo, a ordem das perguntas não importa
      porque as variáveis são consideradas não correlacionáveis.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

Classificador Naive Bayes
             Um dos grandes benefícios desse classificador é que ele é muito
       simples, rápido e escalável, dado que as variáveis são independentes (e isso
       facilita muito os cálculos).
             Em alguns casos, a velocidade é preferível à maior precisão.
             Funciona bem com a classificação de texto, processamento de
       linguagem natural, detecção de spam, entre outros e utiliza uma quantidade
       reduzida de amostras para o treinamento do modelo, visto que ele precisa
       apenas de dados suficientes para entender a relação probabilística entre
       cada variável independente isoladamente em relação à variável alvo.
             Observe que, se os dados não fossem independentes, precisaríamos de
       uma amostra maior para entender a relação probabilística entre as
       combinações de variáveis.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Classificador Naive Bayes
           Como desvantagens, podemos destacar que ele assume que as variáveis
      são independentes, o que raramente ocorre na vida real e há o problema de
      variáveis com nenhuma ocorrência de frequência.

          Em suma: o Classificador Naive Bayes se baseia na probabilidade
      condicional do Teorema de Bayes para encontrar a mais provável das
      possíveis classificações considerando que as variáveis/atributos não são
      correlacionadas, isto é, são independentes entre si (ou ingênuos).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

                            REGRESSÃO


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

        Regressão
           Na regressão, em vez de prever uma categoria, o objetivo é prever um
      número.
           Vamos pegar o exemplo da Target novamente! Eles queriam saber não
      apenas se cada cliente estava grávida, mas quando enviar cada cupom de
      desconto. Então eles conseguiram estimar as datas de nascimento também
      dos bebês. Essa é uma questão de regressão, i.e., quantas semanas até a
      cliente dar à luz.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Regressão
           A Regressão depende muitas vezes de dezenas ou mesmo milhares de
      variáveis ou características que descrevam cada exemplo e encontra uma
      equação ou curva para ajustar os pontos de dados.
           Como na classificação, muitas técnicas de regressão dão a cada
      característica um peso, então combinam contribuições positivas e negativas
      dos recursos ponderados para obter uma estimativa.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Regressão
               Vejam no exemplo a seguir:

          Notem que baseado em diversos pontos de dados, foi traçada uma linha
      capaz de estimar dados, que poderia ter sido não-linear também.
          Essa linha do gráfico é dada por uma equação baseada em variáveis.
      Logo, tendo a equação, pode-se estimar qualquer outro valor, basta jogar na
      equação e esperar o resultado.
          Vamos supor que o exemplo acima seja dado pela equação y = 2,2923x
      – 46,244 – se eu quiser saber qualquer valor de y, é só mudar o valor de x.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                 


---

        Regressão
            E, assim como a classificação, a regressão também é usada em vários
       lugares.
            Um dos exemplos mais conhecidos é o Google Trend da Gripe. Em 2008,
       o Google começou a publicar estimativas em tempo real de quantas pessoas
       teriam gripe com base em pesquisas por palavras como "febre" e "tosse".
       Em alguns casos, ele foi capaz de prever surtos regionais de gripe até 10 dias
       antes de serem notificados pelo CDC (Centros de Controle e Prevenção de
       Doenças).
            Em 2010, o CDC identificou um pico de casos de gripe na região do
       Atlântico dos Estados Unidos. No entanto, os dados das consultas de
       pesquisa do Google sobre os sintomas da gripe conseguiram mostrar esse
       mesmo pico duas semanas antes do relatório do CDC!
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

        Regressão
           Inicialmente, o Google tinha uma precisão de 97% em relação ao CDC,
      porém em anos subsequentes ele reduziu sua precisão e o Google decidiu
      retirar do ar enquanto não houvesse uma precisão melhor.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

        Regressão
           Em uma definição formal, Navathe afirma que a regressão é uma
      aplicação especial da regra de classificação.
           Se uma regra de classificação é considerada uma função sobre variáveis
      que as mapeia em uma classe destino, a regra é chamada regressão. Isto
      ocorre quando, ao invés de mapear um registro de dados para uma classe
      específica, o valor da variável é previsto (calculado) baseado em outros
      atributos do próprio registro.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

OBRIGADA
                            Prof. Emannuelle Gouveia
                            @emannuellegouveia


    


---

---
