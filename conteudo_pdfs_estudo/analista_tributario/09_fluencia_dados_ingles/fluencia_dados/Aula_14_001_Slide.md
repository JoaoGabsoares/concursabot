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
arquivo_origem: Aula 14_001_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '14'
titulo_aula: TECNOLOGIA DA INFORMAÇÃO
---

# TECNOLOGIA DA INFORMAÇÃO

---

---

TECNOLOGIA DA INFORMAÇÃO

                             Profa. Emannuelle Gouveia
                             @Emannuellegouveia


      


---

APACHE HADOOP

                      Prof. Emannuelle Gouveia
                      @Emannuelle Gouveia


   


---

Conceitos Básicos

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Conceitos Básicos

      Observe que o Apache Hadoop é um framework open source, escalável,
 distribuído, robusto, confiável, com baixo custo, tolerante a falhas e de alta
 disponibilidade escrito em Java, não é apenas um sistema de armazenamento
 de dados, mas também uma plataforma para processamento desses dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Conceitos Básicos

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Conceitos Básicos

      O Hadoop fornece uma estrutura extremamente eficiente para executar
 tarefas em vários nós de um cluster com processamento paralelo de dados.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Conceitos Básicos
       Em seguida, temos uma tabela que resume as principais soluções do
   Ecossistema Hadoop:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Conceitos Básicos

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Conceitos Básicos

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Conceitos Básicos

     Apesar de ter um imenso ecossistema, o Hadoop possui três componentes
 principais: HDFS (Armazenamento), YARN (Gerenciamento) e MapReduce
 (Processamento).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

           HDFS

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes
        O HDFS (Hadoop Distributed File System) é um sistema de arquivos
   (forma de organização de dados em um meio de armazenamento em massa)
   criado para armazenar arquivos muito grandes de forma distribuída. Ele
   funciona através do conceito de Write-Once, Read-Many (WORM) que é uma
   característica de armazenamento de dados que permite que um arquivo seja
   gravado uma vez, mas depois lido várias vezes.
        Este recurso é útil para garantir que os dados permaneçam inalterados ao
   longo do tempo, pois não podem ser alterados ou excluídos depois que são
   gravados (caso contrário, gerarão sobrecarga). O HDFS oferece suporte ao
   WORM, logo os arquivos armazenados no HDFS não podem ser alterados ou
   excluídos depois que são gravados.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

Principais Componentes

           Antes de nos aprofundarmos no assunto, vamos revisar alguns conceitos:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                


---

Principais Componentes

     A imagem seguinte apresenta um Data Center com diversos racks e cada
 raque contém diversos nós. Lembrando que um cluster pode estar distribuído
 em diversos Data Centers:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

      Dito isso, agora podemos analisar a Arquitetura do HDFS!
      Quando um usuário envia um arquivo para ser armazenado no HDFS,
 esse arquivo é dividido em blocos de 128MB (por padrão) que são replicados
 e distribuídos em diferentes nós contidos em diferentes racks para aumentar a
 tolerância a falhas.
      Esses nós onde os blocos de dados da aplicação são efetivamente
 armazenados são chamados de DataNodes.
      Existe também um tipo especial de nó chamado NameNode que é um nó
 de gerenciamento de cada cluster dedicado a manter uma lista de todos os
 arquivos contidos no HDFS, assim como a localização de cada bloco e suas
 réplicas nos DataNodes.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

      Em outras palavras, o NameNode é um registro central responsável por
 fazer todo o gerenciamento de metadados do sistema, caso ocorra uma falha
 em um DataNode, basta consultar o NameNode para encontrar a réplica dos
 blocos de dados necessários.
      Existe ainda um terceiro nó chamado SecondaryNameNode que é um nó
 de suporte que executa o processo de verificação de consistência para o
 HDFS. Ele realiza uma cópia de verificação do NameNode e verifica se os
 blocos de dados correspondentes aos arquivos armazenados estão presentes.
      Por fim, temos o Cliente HDFS: processo ou software responsável por ler
 e escrever os dados para o HDFS.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

     O NameNode também pode ser chamado de Nó Mestre (Master) e o
 DataNode também pode ser chamado de Nó Escravo (Slave). Por essa razão,
 a Arquitetura HDFS também pode ser chamada de arquitetura mestre/escravo
 e vocês encontrarão questões de prova ainda com esses termos, mas eles têm
 sido retirados de toda a documentação do Hadoop por serem considerados
 ofensivos e racistas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

      Vejamos um cenário: imagine que queiramos armazenar um arquivo de
 572MB!
      O primeiro passo é dividi-lo em blocos de 128MB, e teremos quatro
 blocos (A, B, C, D) com 128MB e um bloco (E) com 60MB.
      Depois fazemos a replicação dos blocos para garantir a alta
 disponibilidade e a tolerância a falhas.
      Escolhemos uma Taxa de Replicação = 3, o que significa que, para cada
 bloco, haverá três cópias ou réplicas (A1, A2, A3, B1, B2, B3, ..., E1, E2,
 E3).
      Note que a consequência da alta disponibilidade é o aumento do espaço
 de armazenamento.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

     Em seguida, vamos distribuir os blocos pelos DataNodes contidos nos
 racks.
     Observem que cada bloco tem três réplicas distribuídas, por isso se trata
 de um sistema de armazenamento distribuído.
     Não está representado na imagem, mas temos também nosso repositório
 de metadados chamado NameNode, o SecondaryNameNode e os clientes.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

      Por fim, um detalhe sobre Rack Awareness: trata-se de um recurso de
 cluster de armazenamento que garante que os nós de um cluster
 mantenham-se sincronizados, permitindo que os nós saibam em qual rack
 cada arquivo está armazenado e como o acesso a esses arquivos deve ser
 distribuído uniformemente entre os nós.
      Esta função também pode ajudar a melhorar o desempenho do cluster,
 pois garante que os nós acessem os arquivos a partir do rack mais próximo.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

            YARN

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes
       Apache Hadoop YARN (Yet Another Resource Negotiator) é uma
  tecnologia de gerenciamento de cluster responsável pelo gerenciamento de
  recursos, agendamento de tarefas e coordenação de tarefas em um cluster
  Hadoop distribuído.
       É o centro arquitetônico do Hadoop e permite que vários mecanismos de
  processamento de dados (Ex: MapReduce, Spark, Storm, Tez) executem e
  processem dados armazenados em HDFS.
       O YARN também aceita diferentes mecanismos de processamento de
  dados, como processamento de grafos, processamento interativo,
  processamento de fluxo, bem como processamento em lote para executar e
  processar dados armazenados em HDFS, tornando o sistema muito mais
  eficiente.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

     Por meio de seus vários componentes, ele pode alocar dinamicamente
 vários recursos e agendar o processamento da aplicação.
     O YARN pode ser traduzido como “Mais Um Negociador de Recursos”.
 Observe que estamos tratando de bancos de dados distribuídos em clusters
 compostos de centenas ou milhares de máquinas que possuem recursos
 computacionais e os mesmos precisam ser gerenciados para evitar, por
 exemplo, que uma única aplicação consuma todos os recursos sozinha.
     O responsável por gerenciar os recursos distribuídos no cluster é o
 YARN que vai gerenciar e alocar recursos em cluster para processamento dos
 dados distribuídos.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes
        Por essa razão, é um dos componentes centrais do Ecossistema Hadoop e,
   por meio de uma interface unificada, permite que diferentes tipos de
   aplicações sejam executados harmonicamente em clusters , sendo o
   responsável por maximizar a utilização do cluster e minimizar o tempo de
   inatividade.
        Ele também é responsável por gerenciar o agendamento de tarefas (Task
   Scheduler) em um cluster, essa é uma atividade importante em ambientes de
   computação distribuída, onde várias tarefas precisam ser executadas
   simultaneamente em vários nós do cluster.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Principais Componentes

     Cada tarefa de processamento de dados tem um nome: job!
     Uma job é um trabalho submetido ao YARN para que seja processado em
 paralelo em diversas máquinas do cluster.
     As aplicações costumam dividir as tarefas de processamentos de dados
 em várias partes menores (Jobs), que podem ser executadas simultaneamente.
     O YARN gerencia a alocação de recursos para a execução das jobs e
 fornece informações sobre seu status, como dados sobre progresso, tempo de
 execução, utilização de recursos, entre outros.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

     Vamos ver uma tabelinha com as principais características do nosso
 gerenciador de recursos:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes
     A imagem seguinte exibe a Arquitetura do YARN. Vamos entender
 melhor a função de cada um dos componentes da arquitetura:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

     Em suma: os três principais componentes da Arquitetura YARN é o
 ResourceManager, que gerencia a alocação de recursos no cluster, o
 NodeManager, que gerencia recursos em cada nó do cluster, e o
 ApplicationMaster, que coordena a execução de tarefas em um aplicativo.
 Lembrando que temos um ResourceManager global e um ApplicationMaster
 por aplicação.
     Juntos, esses componentes fornecem um sistema escalável e eficiente
 para gerenciar recursos em clusters Hadoop.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

         MapReduce

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

      Antigamente, havia uma ideia de que, quanto mais dados eram
  armazenados e processados por uma organização, maior era a necessidade de
  aquisição de computadores maiores e mais potentes (escalabilidade vertical).
      O MapReduce surgiu porque algumas organizações começaram a
  perceber que, quando você começava a armazenar quantidades gigantescas de
  dados, obter computadores maiores e mais rápidos não funcionava mais.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes
           Alguns problemas computacionais podem ser resolvidos com muita facilidade
     dividindo os dados em blocos menores (é o famoso dividir para conquistar).
            Vamos supor que você está tentando encontrar o maior número em uma lista
     com cem milhões de números. Uma maneira seria comprar um único computador bem
     potente para verificar número por número até encontrar qual é o maior número da
     lista. Se esse computador poderoso tem a capacidade de verificar que possa olhar
     através de um milhão de números por hora, ele precisará – portanto – de 100 horas (+-
     4 dias) para verificar todos os cem milhões de números. Agora, se você dividir essa
     lista em cem partes e as entregar para 100 computadores, cada computador pesquisará
     em uma lista de apenas 1 milhão de números e poderá encontrar o maior número dessa
     lista em 1 hora (escalabilidade horizontal).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia                


---

Principais Componentes

      Após cada computador encontrar seu maior número, bastam alguns
 segundos para encontrar o maior dentre esses cem números. Logo, o trabalho
 que foi realizado em cerca de quatro dias por um único computador poderá
 ser finalizado em cerca de uma hora pelos cem computadores.
      O processo de decomposição dos dados é chamado de Mapeamento
 (Map); e o processo de consolidação do resultado dos mapeamentos é
 chamado de Redução (Reduce).

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

     O MapReduce é um modelo de programação que permite reduzir
 problemas grandes em problemas menores, mapeando cada subproblema para
 máquinas diferentes (ou processadores diferentes de uma mesma máquina) e,
 em seguida, reduzindo cada resposta intermediária à única resposta final que
 você está procurando.
     Um excelente exemplo para que vocês nunca esqueçam é o site de
 questões do Estratégia Concursos. Atualmente, ele possui um bocadinho de
 questões...

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes
          Um tempo atrás, foi disponibilizada a funcionalidade que permite fazer
     buscas por palavras em todas essas questões. Imaginem a complexidade do
     problema de fazer uma busca textual em mais de dois milhões de questões?
     Então, quando pesquisar por “MapReduce” em nosso sistema, ele retornará
     todas as questões que contenham essa palavra.
          Se um único computador fosse responsável por realizar essa busca,
     demoraria muito, então, divide-se a busca em diversos computadores
     diferentes trabalhando paralelamente (Ex: Computador 1 buscará em questões
     do CESPE; Computador 2 buscará em questões da FCC; e assim por diante).
     Após cada computador chegar ao seu resultado, pode-se consolidar os
     resultados individuais em um único resultado global que contenha todas as
     questões encontradas com essa palavra.
Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia             


---

Principais Componentes

      O MapReduce é considerado um modelo de programação que permite o
 processamento de dados massivos em um algoritmo paralelo e distribuído (em
 clusters).
      A etapa de mapeamento se baseia em uma combinação de chave-valor.
 Voltemos ao exemplo do sistema de questões: a chave escolhida foi Banca e o
 valor é o Nome da Banca em si.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

      Poderíamos ter escolhido outra chave, como por exemplo: matéria, ano,
 dificuldade, entre outros. Vejamos:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes

      Já a etapa de redução é responsável por consolidar os resultados de cada
 mapeamento, gerando um resultado agregado.
      As funções Map e Reduce de MapReduce são definidas em relação aos
 dados estruturados em pares (chave, valor).
      O Map pega um par de dados com um tipo em um domínio de dados e
 retorna uma lista de pares em um domínio diferente conforme é apresentado
 em termos matemáticos a seguir:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

      A função Map é aplicada em paralelo a cada par no conjunto de dados de
 entrada. Isso produz uma lista de pares para cada chamada. Depois disso, o
 MapReduce coleta todos os pares com a mesma chave (k2) de todas as listas e
 os agrupa, criando um grupo para cada chave.
      A função Reduce é então aplicada em paralelo a cada grupo, que por sua
 vez produz uma coleção de valores no mesmo domínio:

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

     O “combine” é opcional. Após a fase de mapeamento, pode ocorrer a
 etapa de combinação, na qual os pares chave-valor intermediários são
 agrupados e processados localmente antes de serem enviados para a próxima
 etapa.
     Essa combinação auxilia a reduzir o volume de dados transferidos entre
 os nós de processamento, otimizando o desempenho geral do processo.

 Observação: Input é Entrada e Output é Saída.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes
         Vamos resumir tudo o que vimos: MapReduce é um modelo de
    programação para processamento distribuído de grandes volumes de dados
    em clusters de computadores. Ele divide o processamento em duas etapas:
    mapeamento (map) e redução (reduce), permitindo que os dados sejam
    processados em paralelo em várias máquinas. É frequentemente usado em
    sistemas de Big Data para lidar com grandes quantidades de informações.
         Ele divide o trabalho em tarefas independentes e paralelizando o
    processamento para aumentar a eficiência e a velocidade do processamento.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

      Alguns dos desafios do processamento de grandes conjuntos de dados
 incluem o gerenciamento e armazenamento de dados em larga escala, a
 necessidade de processamento em paralelo e distribuído, a garantia da
 integridade e segurança dos dados, além do desafio de extrair informações
 úteis de grandes quantidades de dados.
      Os componentes principais são o JobTracker, que gerencia e coordena as
 tarefas, e o TaskTracker, que executa as tarefas em cada nó do cluster. Além
 disso, há as funções Map e Reduce, que realizam o processamento dos dados,
 e o sistema de arquivos distribuído HDFS, que armazena os dados.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

      O MapReduce gerencia o processamento em um cluster por meio de um
 JobTracker que coordena a execução dos trabalhos (jobs) e de vários
 TaskTrackers que executam as tarefas (tasks) nos nós de dados.
      O JobTracker divide o trabalho em tarefas que são distribuídas entre os
 TaskTrackers, que executam as tarefas em paralelo e retornam os resultados
 intermediários para o JobTracker.
      O JobTracker combina os resultados intermediários e produz o resultado
 final do trabalho.
      O MapReduce também fornece mecanismos para lidar com falhas, como
 a redistribuição de tarefas para outros nós em caso de falha de um nó.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

Principais Componentes

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

Principais Componentes
    Agora vejamos as limitações do MapReduce:

    1. Dificuldade em lidar com fluxos contínuos de dados em tempo real, pois o
    MapReduce é projetado para processamento em lote.

    2. Limitações no desempenho devido à sobrecarga de comunicação entre os
    nós do cluster, especialmente quando as tarefas de processamento são muito
    pequenas.

    3. O modelo de programação pode ser complexo para usuários inexperientes
    ou aqueles que não estão familiarizados com programação distribuída.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

Principais Componentes

 4. Não é adequado para tarefas que envolvem interações entre iterações, já
 que cada iteração é uma tarefa separada.

 5. Dificuldades em lidar com dados não estruturados, como imagens ou áudio,
 que exigem uma análise mais sofisticada.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

                            QUESTÕES


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

 01) (CONSULPLAN – 2023) O processamento em batch tem grande
 eficiência; é altamente escalável, de baixo custo e processa dados em repouso.
 Assinale, a seguir, os três componentes essenciais de uma arquitetura em
 batch (Hadoop):

 a) Kafka; Spark; e, Flink.
 b) YARN; Spark; e, Kafka.
 c) HDFS; Kafka; e, Akka Streams.
 d) Flink; MapReduce; e, Akka Streams.
 e) HDFS; MapReduce e/ou Spark; e, YARN.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia            


---

 02) (TCE/PB – 2018 – LETRA C) Em big data, o sistema de arquivos HDFS
 é usado para armazenar arquivos muito grandes de forma distribuída, tendo
 como princípio o writemany, read-once.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

 03) (AOCP – 2020) O HDFS é o sistema de arquivos do Hadoop. Ele possui
 uma arquitetura mestre-escravo na qual um servidor é responsável por fazer
 todo o gerenciamento de metadados do sistema. Dentro da arquitetura do
 Hadoop, como se denomina esse servidor?

 a) NameNode.
 b) DataNode.
 c) HDFSnode.
 d) LinkNode.
 e) TraceNode.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

  04) (CESPE – 2022) O Hadoop Distributed File System (HDFS) é construído
 usando a linguagem Java, o que permite que sua arquitetura mestre/escravo
 seja implementada em uma ampla variedade de máquinas.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

 05) (CESPE – 2021) Ao serem armazenados no HDFS (Hadoop Distributed
 File System), os dados do Hadoop são divididos em blocos e distribuídos em
 discos distintos de um mesmo servidor, o que acelera o seu processamento, já
 que são pesquisados de forma simultânea, e não de forma sequencial.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

 06) (FGV – 2023) O principal objetivo do Hadoop YARN foi dividir as
 funcionalidades de gerenciamento de recursos e agendamento/monitoramento
 de tarefas em daemons separados. Assinale a opção que não figura como uma
 característica da arquitetura de Hadoop YARN:
 a) O ResourceManager é a autoridade máxima que arbitra os recursos entre
 todas as aplicações do sistema e possui dois componentes principais:
 Scheduler e ApplicationsManager.
 b) O Scheduler é responsável por alocar recursos para as aplicações em
 execução e são sujeitos a restrições de capacidade de recursos, filas etc.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia          


---

 c) O Scheduler é um scheduler puro no sentido de que não realiza nenhuma
 ação de monitoramento ou tracking de status para o aplicativo.
 d) O NodeManager é o agente deployado em cada máquina e não é
 responsável pelo monitoramento de recursos (cpu, memória, disco, rede).
 e) O ApplicationManager é responsável por aceitar envios de jobs, negociar o
 primeiro contêiner para executar a instância ApplicationMaster para a
 aplicação e fornecer o serviço para reiniciar o contêiner ApplicationMaster
 em caso de falha.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

 07) (Polícia Federal – 2018) MapReduce permite o processamento de dados
 massivos usando um algoritmo paralelo mas não distribuído.

Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia         


---

 08) (ANAC – 2016) Para o processamento de grandes massas de dados, no
 contexto de Big Data, é muito utilizada uma plataforma de software em Java,
 de computação distribuída, voltada para clusters, inspirada no MapReduce e
 no GoogleFS. Esta plataforma é o(a):
 a) Yam Common
 b) GoogleCrush
 c) EMRx
 d) Hadoop
 e) MapFix.


Informática
Profa: Emannuelle Gouveia
@Emannuelle Gouveia           


---

OBRIGADA
                             Prof. Emannuelle Gouveia
                             @emannuellegouveia


     


---

---
