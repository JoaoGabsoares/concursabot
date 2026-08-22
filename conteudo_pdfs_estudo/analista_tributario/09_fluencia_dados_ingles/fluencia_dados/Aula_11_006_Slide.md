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
arquivo_origem: Aula 11_006_Slide.txt
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
     AULA 02 Prof. Emannuelle Gouveia
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

OBRIGADA
                            Prof. Emannuelle Gouveia
                            @emannuellegouveia


    


---

---
