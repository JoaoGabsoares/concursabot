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
arquivo_origem: Aula 09_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: 09
titulo_aula: Fluência em Dados
---

# Fluência em Dados

Aula 06
                          Receita Federal (Analista Tributário)
                                             Fluência em Dados

                                                           Autor:
                                     Diego Carvalho, Emannuelle
                        Gouveia Rolim, Equipe Informática
                                           e TI, Renato da Costa

                                               18 de Março de 2025

---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 06

                                                                                     Índice
1) Análise de Informações - BI e Data Warehouse


2) Questões Comentadas - Análise de Informações - BI e Data Warehouse - Multibancas


3) Lista de Questões - Análise de Informações - BI e Data Warehouse - Multibancas

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                           53

                                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                             APRESENTAÇÃO DA AULA
Fala, galera! O assunto da nossa aula de hoje Business Intelligence e Data Warehouse. Essa aula
é um pouco pesada, mas é necessário estudá-la porque ela é a base para a Mineração de Dados.
Aqui veremos um novo tipo de banco de dados, como ele é construído e porque ele é utilizado. Eu
juro que tentei ao máximo deixar o mais palatável possível para vocês, mas essa é uma aula que
exigirá bastante atenção! Levantem, tomem um energético e venham comigo...

       PROFESSOR DIEGO CARVALHO - www.instagram.com/professordiegocarvalho

Galera, todos os tópicos da aula possuem Faixas de Incidência, que indicam se o assunto cai
muito ou pouco em prova. Diego, se cai pouco para que colocar em aula? Cair pouco não significa
que não cairá justamente na sua prova! A ideia aqui é: se você está com pouco tempo e precisa ver
somente aquilo que cai mais, você pode filtrar pelas incidências média, alta e altíssima; se você tem
tempo sobrando e quer ver tudo, vejam também as incidências baixas e baixíssimas. Fechado?

                                             INCIDÊNCIA EM PROVA: baixíssima
                                                INCIDÊNCIA EM PROVA: baixa
                                               INCIDÊNCIA EM PROVA: média
                                                INCIDÊNCIA EM PROVA: ALTA
                                              INCIDÊNCIA EM PROVA: Altíssima

Além disso, essas faixas não são por banca – é baseado tanto na quantidade de vezes que caiu em
prova independentemente da banca e também em minhas avaliações sobre cada assunto...

        Receita Federal (Analista Tributário) Fluência em Dados                                    3
        www.estrategiaconcursos.com.br                                                            53

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 06

      Receita Federal (Analista Tributário) Fluência em Dados                        4
      www.estrategiaconcursos.com.br                                                 53

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                       SISTEMAS DE SUPORTE À DECISÃO
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

Sistemas de Suporte à Decisão (SSD) são ferramentas essenciais para auxiliar na tomada de
decisões. Enquanto decisões simples do cotidiano, como escolher um filme ou o que comer, podem
ser resolvidas com recursos simples e sem grandes consequências, decisões de maior magnitude,
como escolhas de carreira ou estratégias empresariais, requerem uma análise mais detalhada e
podem ter impactos significativos na vida das pessoas ou no sucesso de organizações.

Os SSDs são projetados para apoiar gestores e tomadores de decisão, fornecendo uma base
sólida de dados e análises para facilitar escolhas informadas. Eles não substituem o julgamento
humano, por outro lado oferecem suporte ao processo de decisão através da utilização de modelos
de dados, análises estatísticas e procedimentos algorítmicos para processar grandes volumes de
informações.

Esses sistemas visam aumentar a consistência, reduzir a subjetividade e acelerar o processo de
tomada de decisões, assegurando que, dados os mesmos conjuntos de informações, resultados
semelhantes sejam alcançados. No âmbito empresarial, as decisões podem variar desde a
previsão de demanda por produtos, como o Apple Watch, até a seleção de estratégias de marketing
e operacionais.

Os Sistemas de Suporte à Decisão ajudam as empresas a navegar pela complexidade dessas
decisões, analisando dados históricos, tendências de mercado e outros fatores relevantes para
produzir insights acionáveis. A consistência nas decisões é crucial, especialmente em contextos
em que a variabilidade pode levar a resultados indesejáveis, como na oferta de crédito por
instituições financeiras.

Tipos de Decisões
                                                                                       INCIDÊNCIA EM PROVA: baixa

As decisões no contexto organizacional e de gestão podem ser classificadas com base em quão bem
definido é o processo de decisão. Essa classificação leva em conta a estrutura, a repetibilidade e
a previsibilidade dos problemas de decisão, resultando em três categorias principais: decisões
estruturadas, semi-estruturadas e não-estruturadas. Cada tipo de decisão apresenta desafios e
necessidades diferentes em termos de suporte à decisão.

Decisões Estruturadas

        Receita Federal (Analista Tributário) Fluência em Dados                                               5
        www.estrategiaconcursos.com.br                                                                       53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

▪ Características: são aquelas em que os procedimentos a serem seguidos podem ser
  especificados com antecedência. Essas decisões são rotineiras e repetitivas, e uma metodologia
  clara pode ser aplicada para resolvê-las. Geralmente, envolvem situações em que as variáveis e
  os resultados são conhecidos e previsíveis.

▪ Suporte à Decisão: Sistemas de Informação de Gestão (SIG) e Sistemas de Processamento de
  Transações (SPT) são frequentemente utilizados para apoiar decisões estruturadas,
  automatizando processos e fornecendo relatórios regulares.

▪ Exemplos: reabastecimento de estoque baseado em níveis de inventário, aprovação de crédito
  com base em critérios predefinidos, cálculos de folha de pagamento.

Decisões Semi-Estruturadas

▪ Características: envolvem uma combinação de processos estruturados e julgamento humano.
  Enquanto parte do problema de decisão pode ser claro, outras partes requerem a avaliação e
  interpretação de dados e informações complexas. Nessas decisões, algumas etapas do processo
  podem ser automatizadas, mas outras exigem insights e avaliações humanas.

▪ Suporte à Decisão: Sistemas de Suporte à Decisão (SSD) são projetados para fornecer
  informações, ferramentas analíticas e modelos de simulação que ajudam os gestores a avaliar
  opções e tomar decisões informadas.

▪ Exemplos: decisões de investimento em novos projetos, planejamento de recursos humanos,
  desenvolvimento de novos produtos.

Decisões Não Estruturadas

▪ Características: são aquelas para as quais não existem procedimentos ou regras predefinidas
  que possam guiar a tomada de decisão. Estas decisões são geralmente complexas e envolvem
  um alto grau de incerteza. A resolução de problemas não-estruturados depende em grande
  parte do julgamento, da intuição e da experiência pessoal do tomador de decisão.

▪ Suporte à Decisão: SSDs baseados em conhecimento e Sistemas de Informações Executivas
  (SIE) podem fornecer suporte para decisões não-estruturadas, oferecendo acesso a informações
  relevantes, análises de tendências e capacidades de simulação.

▪ Exemplos: decisões estratégicas, como a escolha de entrar em um novo mercado, fusões e
  aquisições, e formulação de estratégias de longo prazo.

        Receita Federal (Analista Tributário) Fluência em Dados                               6
        www.estrategiaconcursos.com.br                                                       53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Principais Classificações
                                                                                           INCIDÊNCIA EM PROVA: baixa


Quanto ao Relacionamento com Usuário

A classificação dos Sistemas de Suporte à Decisão (SSD) proposta por Hättenschwiller organiza
esses sistemas com base na forma como interagem com os processos de tomada de decisão
dentro das organizações. Essa classificação distingue os sistemas em três categorias principais:
passivos, ativos e cooperativos, refletindo o nível de interação e o tipo de suporte que eles fornecem
aos decisores. Aqui está uma explicação detalhada de cada tipo:

 Tipo de sistema                                              Descrição
                Sistemas de Suporte à Decisão passivos servem principalmente como repositórios de
                informações e análises que os tomadores de decisão podem consultar para informar seu processo
                de tomada de decisão. Embora estes sistemas possam ajudar a organizar e analisar dados, eles
        Sistema não fazem recomendações específicas ou sugerem cursos de ação. A característica chave de um
        passivo SSD passivo é que ele deixa a decisão final inteiramente nas mãos do usuário, atuando como uma
                ferramenta de suporte, mas sem participar ativamente no processo de decisão.


                 Sistemas de Suporte à Decisão ativos vão um passo além dos passivos ao não apenas fornecer
                 informações, mas também ao recomendar ações específicas baseadas nas análises realizadas.
                 Esses sistemas utilizam algoritmos e modelos para processar os dados disponíveis e gerar
        Sistema soluções ou recomendações que os usuários podem seguir. Os SSD ativos, portanto, têm um
           ativo papel mais direto na tomada de decisão, propondo opções baseadas em uma análise objetiva dos
                 dados.


               Representam um nível ainda mais avançado de interação, facilitando um diálogo bidirecional
               entre o sistema e os usuários humanos. Eles são projetados para permitir que os decisores
               trabalhem em conjunto com o sistema, combinando a intuição humana e o julgamento com a
       Sistema capacidade de análise de dados do sistema. Os SSD cooperativos adaptam suas recomendações
   cooperativo com base no feedback do usuário, aprendendo com as decisões passadas para melhorar as
               sugestões futuras. Este tipo de sistema é particularmente útil em situações complexas de tomada
               de decisão, onde a colaboração entre a capacidade analítica do sistema e a experiência humana
               é essencial.


Quanto ao Modo de Assistência

Daniel J. Power é um autor influente na área de Sistemas de Suporte à Decisão e propôs uma
classificação que os organiza com base em suas principais características e funcionalidades. De
acordo com o autor, os SSDs podem ser divididos em cinco categorias principais: orientados a
modelos, orientados a comunicação, orientados a dados, orientados a conhecimento e orientados
a documentos. Vamos detalhar cada uma dessas categorias:

        Receita Federal (Analista Tributário) Fluência em Dados                                                   7
        www.estrategiaconcursos.com.br                                                                           53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

 Tipo de sistema                                              Descrição
                   Centram-se na utilização de modelos estatísticos, financeiros, de otimização ou de simulação
    Orientado a    para realizar análises e previsões. São aplicáveis quando o processo de decisão pode ser
                   quantificado e modelado matematicamente. Exemplo: sistemas de otimização de cadeia de
       modelos     suprimentos que usam modelos de programação linear para minimizar os custos mantendo os
                   níveis de serviço.
                   Facilitam a comunicação e a colaboração entre membros de uma equipe ou grupo de decisão.
    Orientado a    São projetados para ajudar grupos a trabalhar juntos, independentemente da localização
                   geográfica. Exemplo: software de videoconferência e ferramentas de trabalho colaborativo
   comunicação     online que suportam sessões de brainstorming ou tomada de decisão em grupo.

                Enfatizam o acesso e a manipulação de um conjunto de dados grande e complexo. São úteis
    Orientado a quando o processo de decisão depende fortemente da análise de dados históricos e atuais.
                Exemplo: Sistemas de Informação Geográfica (SIG), que podem ajudar a determinar a localização
         dados ideal para uma nova loja com base em dados demográficos e de tráfego.

                Apoiam processos de decisão que requerem especialização e conhecimento específico do
    Orientado a domínio, frequentemente capturado de especialistas humanos. Eles podem fornecer
                recomendações, conselhos ou interpretações. Exemplo: sistemas de diagnóstico médico que
  conhecimento sugerem tratamentos com base em sintomas, história do paciente e literatura médica.

               Focam na gestão e recuperação de documentos eletrônicos ou outros formatos de informação
   Orientado a não estruturada. São úteis para decisões que dependem de informações contidas em
               documentos de texto, e-mails, relatórios etc. Exemplo: sistemas de gerenciamento de
   documentos conhecimento que ajudam a localizar expertise dentro de uma organização por meio de
               documentos e relatórios de projetos anteriores.


Arquitetura de Componentes
                                                                                            INCIDÊNCIA EM PROVA: baixa

A arquitetura de Sistemas de Suporte à Decisão (SSD) refere-se à estrutura geral que define
como os componentes de um SSD são organizados e interagem para apoiar a tomada de
decisões. Os SSDs são compostos por vários subsistemas que trabalham juntos para auxiliar na
tomada de decisões. Embora a composição exata possa variar dependendo da aplicação específica,
a maioria dos SSD inclui os seguintes subsistemas principais:

      SUBSISTEMAS                                                 Descrição
                     Composto pela base de dados, pelo catálogo de dados, pelo Sistema de Gerenciamento de
    SUBSISTEMA DE Banco de Dados (SGBD), entre outros, é responsável pela coleta, armazenamento,
 GERENCIAMENTO DE recuperação e gerenciamento de dados. Permite que os usuários acessem e manipulem
            DADOS grandes volumes de dados de forma eficiente, fornecendo a base de informações necessária
                  para a análise e tomada de decisão.
                  Contém modelos matemáticos e estatísticos que são usados para analisar os dados
    SUBSISTEMA DE armazenados no SGBD. Esse subsistema pode incluir modelos para análise preditiva,
 GERENCIAMENTO DE simulações, otimização e outros métodos analíticos. Ele ajuda os tomadores de decisão a
         MODELOS entender as implicações de várias opções.


        Receita Federal (Analista Tributário) Fluência em Dados                                                    8
        www.estrategiaconcursos.com.br                                                                            53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                    Este subsistema integra conhecimento especializado e regras que orientam a análise e a
    SUBSISTEMA DE tomada de decisão. Pode incluir conhecimento de domínio específico, melhores práticas,
 GERENCIAMENTO DE regulamentações e qualquer outro tipo de conhecimento estruturado que possa informar e
    CONHECIMENTO melhorar o processo de decisão.
                    Também chamado de Interface de Usuário, trata-se do ponto de interação entre o usuário e o
    Subsistema de Sistema de Suporte à Decisão. Seu design é crucial para a eficácia do sistema, pois deve
 gerenciamento de permitir que os usuários acessem dados, modelos e conhecimento de forma intuitiva, bem
          diálogo como interpretar facilmente os resultados fornecidos pelo sistema.
                    Embora nem sempre mencionado como um subsistema distinto, é essencial para sistemas que
    SUBSISTEMA DE requerem a integração de dados e recursos distribuídos ou a colaboração entre diferentes
 GERENCIAMENTO DE usuários ou departamentos. Facilita a troca eficaz de informações e resultados de análise
     COMUNICAÇÃO dentro da organização.


A arquitetura de um sistema de suporte à decisão reflete seu objetivo de apoiar a tomada de
decisão através da combinação eficiente de dados, modelos analíticos, conhecimento do
domínio e interação do usuário. A configuração específica de um SSD pode variar amplamente
dependendo de fatores como o tipo de decisões a serem apoiadas, o ambiente operacional, as
tecnologias disponíveis e as preferências dos usuários finais.


Tipos de Análises
                                                                                          INCIDÊNCIA EM PROVA: baixa

Os Sistemas de Suporte à Decisão (SSD) são ferramentas projetadas para ajudar na tomada de
decisões em organizações. Eles utilizam dados, análises e modelos para resolver problemas não
estruturados. A análise nesses tipos de sistemas pode ser categorizada basicamente em quatro
tipos principais: análise descritiva, análise diagnóstica, análise preditiva e análise prescritiva. Vamos
detalhar cada um deles:

Análise Descritiva

A análise descritiva responde à pergunta: “O que aconteceu?”. Ela se concentra em descrever ou
resumir conjuntos de dados passados ou presentes de forma que seja compreensível e informativo.
Ela olha para os dados históricos para informar o que ocorreu durante um período específico.

▪ Objetivo: seu principal objetivo é resumir e descrever aspectos diferentes de dados e situações.
  É a base para todas as outras formas de análise de dados. Ela fornece um entendimento inicial
  do que aconteceu no passado ou o que está acontecendo no presente, através da compilação e
  apresentação de dados de forma que seja fácil de entender.

        Receita Federal (Analista Tributário) Fluência em Dados                                                  9
        www.estrategiaconcursos.com.br                                                                          53

                                    


---

     Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
     Aula 06

▪ Exemplos: relatórios de vendas que mostram o total de vendas por mês, dashboards de
  indicadores de performance que monitoram o desempenho atual de diferentes departamentos,
  gráficos (de diversos tipos) que auxiliam os gestores a tomar decisões.

▪ Analogia: é como olhar para uma fotografia de um evento. A foto mostra exatamente o que
  aconteceu naquele momento, sem interpretar ou prever os resultados.

Análise Diagnóstica

A análise diagnóstica responde à pergunta: “Por que isso aconteceu?”. Ela vai além da descrição para
explorar as causas dos eventos ou condições observadas. Ela investiga os dados para identificar
relações de causa e efeito, ajudando a entender as razões por trás dos fenômenos observados.

▪ Objetivo: foca em entender as causas e os fatores por trás de determinados eventos ou
  condições. Ela ajuda os tomadores de decisão a identificar as causas raízes dos problemas,
  facilitando a compreensão das situações e a identificação de áreas que necessitam de ajustes ou
  correções.

▪ Exemplos: análise de falhas de equipamentos, onde se investiga o motivo de uma máquina
  parar de funcionar; análise de cancelamento de clientes, para entender por que os clientes estão
  deixando a empresa; uso de técnicos de mineração para descobrir correlações.

▪ Analogia: é como ser um detetive que revisa as evidências para entender como e por que um
  evento ocorreu. Você analisa as pistas (dados) para construir uma narrativa do ocorrido.

Análise Preditiva1

A análise preditiva responde à pergunta: “O que vai acontecer?”. Utilizando dados históricos e
técnicas de modelagem estatística ou machine learning, ela estima possíveis resultados futuros e
tenta prever o que é provável que aconteça com base em padrões passados e tendências atuais.

▪ Objetivo: utiliza dados históricos e algoritmos para prever o que pode acontecer no futuro.
  Fornece estimativas sobre a probabilidade de futuros eventos, permitindo que os gestores
  tomem decisões proativas para se prepararem ou mitigarem potenciais problemas.

▪ Exemplos: previsões de demanda de venda de produtos, para auxiliar gestores no planejamento
  de estoque; modelos de pontuação (score) de crédito, para prever a probabilidade de
  inadimplência de clientes;

1
    Também chamada de modelo de previsão.

            Receita Federal (Analista Tributário) Fluência em Dados                              10
            www.estrategiaconcursos.com.br                                                       53

                                            


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

▪ Analogia: é como a previsão do tempo, onde, com base nos padrões climáticos passados e
  atuais, os meteorologistas preveem como estará o tempo nos próximos dias.

Análise Prescritiva

A análise prescritiva responde à pergunta: “O que deve ser feito caso algo aconteça?”. Ela sugere
cursos de ação e os possíveis resultados de cada decisão. Não apenas prevê o que poderia
acontecer, mas também recomenda como responder aos cenários futuros previstos.

▪ Objetivo: vai além da previsão para recomendar ações específicas que podem levar aos
  melhores resultados possíveis, com base nos dados analisados. Orienta os tomadores de
  decisão sobre quais caminhos seguir, apresentando diferentes cenários e possíveis resultados
  de cada ação proposta.

▪ Exemplos: otimização de rotas de entrega para reduzir custos de combustível e tempo de
  entrega; sistemas de recomendação personalizados, como os usados por serviços de streaming
  para sugerir conteúdos ao usuário.

▪ Analogia: é como um médico que, após diagnosticar a doença (análise diagnóstica) e prever o
  curso dela (análise preditiva), prescreve o tratamento mais eficaz para o paciente.

Há mais dois tipos de análise que caem muito raramente em prova: Análise Exploratória e Análise
Explanatória. A análise explanatória é uma novidade em concursos públicos e se trata de um passo
além da análise exploratória. Aqui o foco está em como e por que aconteceu e o que deve acontecer
a seguir e, na maioria dos casos, comunicando isso aos tomadores de decisão e partes interessadas.
A análise exploratória trata do que você deve fazer para entender os dados e a análise
explanatória trata de como explicar determinados padrões encontrados nos dados.

A análise exploratória ocorre em estágios preliminares e utiliza diversas ferramentas avançadas de
estatística, como testes de hipóteses, análise de regressões, entre outros, enquanto a análise
explanatória ocorre após a análise exploratória e combina estatística descritiva simples com
técnicas de storytelling. Imagine que nós fizemos uma análise exploratória e calculamos,
modelamos e visualizamos diversas estatísticas interessantes.

Agora, temos insights sobre a probabilidade de eventos específicos com base em variáveis
predeterminadas. No entanto, o que não temos é algo que aprimore os vários fatores contextuais -
ou seja, o "porquê" e o "como". Esse componente é a análise explanatória de dados, que ajuda a
sugerir as ações mais sólidas e lucrativas. Vejamos a seguir uma tabela comparativa de todos os
tipos de análise:

 Tipos de análise                                                 Descrição
                    Trata-se do exame de dados ou conteúdos para responder à pergunta: “O que aconteceu?” ou
      Descritiva
                    “o que está acontecendo?”. É caracterizado pelo Business Intelligence tradicional e

        Receita Federal (Analista Tributário) Fluência em Dados                                           11
        www.estrategiaconcursos.com.br                                                                    53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                        visualizações como gráficos de pizza, gráficos de barras, entre outros que servem para que
                        gestores tomem decisões.
                        Trata-se de uma forma de análise avançada que examina dados ou conteúdos para responder à
                        pergunta: “Por que isso aconteceu?”, e é caracterizada por técnicas como detalhamento,
       Diagnóstica
                        descoberta de dados, mineração de dados e correlações. Esse é o tipo de análise empregada em
                        investigações de causa-raiz.
                        Trata-se da combinação de técnicas de estatística, mineração de dados e aprendizagem de
                        máquina (Machine Learning) para encontrar significado em grandes quantidades de dados,
          Preditiva
                        trabalhando com probabilidades, entre outros para antecipar comportamentos futuros com
                        base em eventos passados. Responde à pergunta: “O que vai acontecer?”.
                        Trata-se da forma de análise avançada que examina os dados ou os conteúdos para responder
                        à pergunta: “O que deve ser feito?” ou “O que podemos fazer caso algo aconteça?”, e é
       Prescritiva
                        caracterizada por técnicas como análise de gráficos, simulação, redes neurais, mecanismos de
                        recomendação, heurísticas, aprendizado de máquina, entre outros.
                        Trata-se de uma abordagem mais aprofundada, que envolve a exploração detalhada dos dados
                        para identificar padrões, tendências e relações ocultas. Gráficos, histogramas, Scatter Plots e
     Exploratória
                        outras visualizações são frequentemente usados para revelar insights iniciais e formular
                        hipóteses para análises posteriores.
                        Trata-se de uma abordagem para entender as relações de causa e efeito entre as variáveis. Ela
                        explora como uma variável afeta outras variáveis e tenta explicar por que certos padrões estão
     explanatória
                        ocorrendo nos dados. Modelos estatísticos, como regressão, são frequentemente usados para
                        identificar relações significativas.


Business Intelligence (BI)
                                                                                                                      INCIDÊNCIA EM PROVA: ALTA

Os tempos foram passando, o mundo foi mudando e o termo Sistema de Suporte à Decisão se
tornou o que chamamos hoje de Business Intelligence (BI)! O princípio é o mesmo, porém com
alguns detalhes que veremos ao longo da aula. Vamos ver na tabela a seguir diversas definições
formais bastante comuns em prova – percebam como há algumas palavras-chave em comum
em quase todas essas definições.


                                                              DEFINIÇÕES
 Business Intelligence é o processo de recolhimento e tratamento de informações que apoiarão a gestão de um
 negócio.
 Palavras-chave: processo; tratamento de informações; apoio à gestão de negócio.

 Business Intelligence é o processo inteligente de coleta, organização, análise, compartilhamento e monitoração de
 dados que, depois de processados, geram informações para o suporte e para a tomada de decisões no ambiente
 de negócios.
 Palavras-chave: processo inteligente; coleta, organização, análise, compartilhamento e monitoração de dados; tomada de decisões.

 Business Intelligence trata da capacidade de cruzar informações de diferentes bancos de dados, gerando relatórios
 analíticos diversos.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                          12
          www.estrategiaconcursos.com.br                                                                                                   53

                                              


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 06

  Palavras-chave: cruzamento de informações; diferentes bancos de dados; relatórios analíticos.

  Business Intelligence se refere à aplicação de técnicas analíticas para informações sobre condições de negócio no
  sentido de melhorá-las, de uma maneira automatizada, mas com a interpretação e respostas humanas, de forma
  a melhorar a tomada de decisões.
  Palavras-chave: técnica analíticas; automatizada; tomada de decisões;

  Business Intelligence trata da descrição de habilidades das organizações para acessar dados e explorar
  informações, analisando e desenvolvendo percepções e entendimentos a seu respeito.
  Palavras-chave: habilidade; explorar informações; análise de percepções e entendimentos.

  Business Intelligence são técnicas, métodos e ferramentas de análise de dados para subsidiar processos de decisão
  de uma empresa.
  Palavras-chave: técnicos, métodos e ferramentas; análise de dados; processo de decisão.

  Business Intelligence nada mais é que uma série de conceitos e metodologias para auxiliar na tomada de decisões
  estratégicas nas empresas através principalmente de geração de relatórios gerenciais analíticos.
  Palavras-chave: conceitos e metodologias; tomada de decisões estratégicas; geração de relatórios analíticos.

  Business Inteligence é um termo utilizado para descrever as habilidades das corporações para coletar dados e
  explorar informações, analisá-las e desenvolver entendimentos para tomada de melhores decisões.
  Palavras-chave: habilidades; coleta, exploração e análise de dados; tomada de decisão.

Agora que nós já sabemos tudo isso, nós podemos criar a nossa própria definição:

            Business Intelligence (Inteligência de Negócio) é um termo criado pelo Gartner Group utilizado para representar
            um conjunto de processos, técnicas, metodologias, habilidades, ferramentas e capacidades utilizadas para
            acessar, coletar, organizar, tratar, analisar, cruzar, processar, compartilhar e monitorar dados de diversas fontes
            com o intuito de gerar informações e relatórios analíticos que suportem a gestão corporativa, a definição de
            estratégias e a tomada de decisão em ambientes de negócio.

O Business Intelligence é realizado sobre dados históricos consolidados, provenientes de bases
multidimensionais, tais como Data Warehouses. O que é isso, professor? Calma, pequeno
gafanhoto! Nós veremos isso tudo ainda na aula de hoje. O que vocês precisam guardar é que o
Business Intelligence é capaz de fornecer uma visão dos dados facilitando análises
diagnósticas, descritivas e até preditivas para suportar a tomada de decisão 2.

É interessante mencionar que um usuário que desejar utilizar os conceitos de BI precisará de uma
infraestrutura arquitetural específica capaz de extrair, limpar, formatar, transformar e carregar
dados estruturados ou não estruturados de diversas fontes em depósitos de informações que
possam ser acessados por sistemas analíticos. Por fim, BI possui quatro habilidades: memória
organizacional, informação integrada, criação de conhecimento (insight) e apresentação.

2 Não há consenso na literatura sobre os tipos de análise suportadas pelo BI, mas algumas questões não consideram que análises prescritivas são suportadas por essa tecnologia.

              Receita Federal (Analista Tributário) Fluência em Dados                                                                                                             13
              www.estrategiaconcursos.com.br                                                                                                                                      53

                                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

O principal recurso de Business Intelligence é a Memória Organizacional. A informação e o
conhecimento são armazenados no sistema de BI de forma que possam ser acessados e observados
posteriormente. Isso ajuda na próxima habilidade de Business Intelligence: Integração de
Informações, que é a habilidade de centralizar informações de diversas fontes. Informações
centralizadas em um único local ajudam na Criação de Insights.

Criar insights significa desenvolver a capacidade de ter intuições sobre o negócio para ajudar a
melhorar a tomada de decisões. Por fim, a criação de insights fornece contribuições para o recurso
de Apresentação. Por meio dela, o sistema de Business Intelligence tem a habilidade de gerar
relatórios e ferramentas adequados, legíveis e inteligíveis para a maioria dos usuários das
ferramentas.

O próprio Gartner Group menciona essas habilidades quando define BI: trata-se das habilidades
das corporações de acessar dados e explorar as informações (normalmente contidas em um Data
Warehouse ou Data Mart), analisando-as e desenvolvendo percepções e entendimentos a seu
respeito – o que as permite incrementar e tornar a tomada de decisões mais pautada em
informações. Entendido?

Por fim, vamos falar sobre a Arquitetura de Business IntelligenceI! De acordo com E. Turban, BI
possui quatro grandes componentes: (1) Data Warehouse, com seus dados-fonte; (2) Análise de
Negócio, uma coleção de ferramentas para manipular e analisar os dados do Data Warehouse,
incluindo Data Mining; (3) Business Performance Management (BPM), para monitoria e análise do
desempenho; e (4) uma interface de usuário, como um dashboard.

Observe que o ambiente de Data Warehousing é sobretudo de responsabilidade de uma equipe
técnica, e o ambiente de análise (também conhecido como análise de negócios) está no âmbito
dos usuários de negócios. Qualquer usuário pode conectar-se ao sistema por meio de uma

        Receita Federal (Analista Tributário) Fluência em Dados                                14
        www.estrategiaconcursos.com.br                                                         53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

interface de usuário, como um navegador, e a alta administração pode usar o componente de BPM
e também o dashboard. Vejamos uma imagem dessa arquitetura de alto nível...

    Componentes                                                   Descrição
                Partindo do lado esquerdo da figura, vemos um fluxo de dados dos sistemas operacionais (Ex:
           DATA CRM, ERP, etc) até um Data Warehouse, que é um banco ou repositório de dados de interesse
                dos gestores preparado para dar suporte a aplicações de tomada de decisão. As aplicações
      WAREHOUSE variam de simples gerações de relatórios ou consultas a complexas otimizações.

                    Trata-se de um conjunto de ferramentas para manipular, minerar e analisar dados, criar
       ANÁLISE DE   relatórios, realizar consultas sob demanda, entre outros. Dessa forma, usuários de negócio são
                    capazes de identificar com rapidez e facilidade as tendências de desempenho (Ex: usuários
        NEGÓCIOS    podem isolar e identificar produtos, clientes ou regiões que apresentam tendências
                    significativas de alta ou de baixa, ou que constituem fontes de problemas).
                    Este componente permite otimizar o desempenho geral de uma organização por meio da
                    conexão de métricas (Ex: informações financeiras) com desempenhos reais da organização.
             BPM    Para tal, utiliza-se da análise, geração de relatórios e consultas para comparar o desempenho
                    de negócios às metas estabelecidas – além de oferecer uma plataforma para compartilhar
                    metas de desempenho e resultados da empresa.
                    Esse componente permite uma visão rápida dos dados por meio de ferramentas de visualização,
    Interface de    como dashboards, painéis, portais, gráficos, cockpits, etc. Os dashboards fornecem uma visão
                    abrangente das medidas, tendências e exceções do desempenho corporativo provenientes de
         usuário    múltiplas áreas do negócio, propiciando uma visão imediata da saúde da organização.

        Receita Federal (Analista Tributário) Fluência em Dados                                                 15
        www.estrategiaconcursos.com.br                                                                          53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                                                    Trata-se de uma coleção de dados orientados por assunto,
                                                    integrados, variáveis com o tempo e não-voláteis, para dar
                                                    suporte ao processo de tomada de decisão.
                                                    TRATA-SE DE um conjunto de ferramentas para manipular, minerar
                                                    e analisar dados, criar relatórios, realizar consultas sob
                                                    demanda, entre outros.
                                                    Trata-se de um conjunto de ferramentas que permitem comparar
                                                    e compartilhar o desempenho de negócios de uma organização em
                                                    relação às metas estabelecidas.
                                                    Trata-se de um conjunto de ferramentas que permitem a rápida e
                                                    abrangente visualização de dados por meio de dashboards e
                                                    softwares similares.

Por fim, é importante diferenciar: Business Intelligence analisa dados para entender o que
aconteceu no passado e o que está acontecendo no presente. O objetivo é ajudar as empresas a
tomar decisões mais inteligentes, apresentando dados atuais e históricos no contexto dos negócios.
Já o Business Analytics informações para prever cenários de mercado e tendências estratégicas no
futuro.

        Receita Federal (Analista Tributário) Fluência em Dados                                                 16
        www.estrategiaconcursos.com.br                                                                          53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                                DATA WAREHOUSE (DW)
Contexto Geral
                                                                                       INCIDÊNCIA EM PROVA: média

Data Warehouse significa Armazém de Dados! Notem que é algo maior que um banco de dados...
é um armazém de dados! Professor, para que eu vou precisar de um banco de dados enorme?

                                      Vamos imaginar um cenário hipotético: Quatro servidores
                                      públicos decidem criar uma empresa de cursos preparatórios para
                                      concursos! São poucos funcionários, poucas vendas e todas elas
                                      podiam ser registradas em um pequeno banco de dados por meio
                                      de um sistema. E não é que essa empresa começa a dar muito certo?
                                      Começa, então, a surgir alunos de todo canto do país querendo
                                      comprar cursos e mais cursos. Resultado? O volume de vendas
                                      aumentou substancialmente – assim como os dados armazenados
                                      em nosso pequeno banco de dados. Além disso, os sócios
                                      começaram a ficar estafados de tanto trabalhar e começaram a
                                      contratar vários funcionários para trabalhar na área financeira,
                                      comercial, recursos humanos, pedagógica, coaching, etc.

Professor, esse tanto de novos funcionários também utilizavam o mesmo sistema e esse mesmo banco
de dados? Sim, senhor! No entanto, os bancos de dados tradicionais possuem uma característica
específica: eles são extremamente eficientes para trabalhar com transações. Vocês se lembram o
que é uma transação? Basicamente é qualquer leitura, inclusão, alteração ou exclusão de dados.
Como assim, Diego? Vamos abrir um parêntese aqui!


                              INCLUSÃO
                                                                           INCLUSÃO
    INCLUSÃO

                                                                           INCLUSÃO
    INCLUSÃO                                                                      alteração
         alteração
                                             BANCO DE DADOS TRANSACIONAL


Galera, quando nós lançamos um curso para vocês, nós apresentamos um cronograma de aulas.
Quando chega a data específica, nós inserimos a aula no banco de dados (inclusão); vocês entram


        Receita Federal (Analista Tributário) Fluência em Dados                                              17
        www.estrategiaconcursos.com.br                                                                       53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

em nosso site e acessam a aula do banco de dados (leitura); se eu acabo inserindo a aula errada, eu
posso deletá-la do banco de dados (exclusão); ou se há algum erro na aula, eu posso editá-la no
banco de dados (alteração). Entenderam a transação? Prosseguindo...

Os bancos de dados tradicionais são bastante eficientes e rápidos para realizar esse tipo de
transação. Inclusive, eles são muito recomendados para a galera que trata diretamente com esses
dados transacionais. Adivinha quem? Professores e Alunos. Nós – professores – que estamos
inserindo, excluindo e alterando aulas o tempo todo; e vocês – alunos – que estão acessando aulas
diariamente para estudar e passar em um concurso público.

Voltando a nossa história: vocês devem se lembrar que essa empresa de concursos começou a
crescer demais e acabou contratando funcionários para diversas áreas (Financeira, Comercial,
Recursos Humanos, etc). Dito isso, eu tenho uma pergunta: vocês acham que – para essas áreas – é
mais interessante tratar de cada dado individualmente ou é mais interessante tratar mais de relatórios
e consultas gerenciais? Segunda opção!

O pessoal da área pedagógica precisa gerar um relatório com os professores que mais atrasam
aulas ou perguntas no fórum; o pessoal da área financeira precisa gerar um relatório de
remuneração mensal dos professores; o pessoal da área comercial precisa gerar um relatório de
quantidade de vendas e comissões mensais; por fim, o pessoal da área de recursos humanos
precisa gerar um relatório de cálculos trabalhistas.

Vocês conseguem entender que o intuito de gerar esses relatórios com informações consolidadas é
facilitar a tomada de decisão para os gestores? Pois é, se eles possuem esse tipo de informação em
mãos, eles podem tomar a decisão de – por exemplo – cobrar o professor que está atrasando as
aulas; verificar quem são os professores mais bem remunerados; monitorar porque as vendas
subiram ou caíram; entre outros.

No entanto, tudo tem um porém... gerar esses relatórios consolidados requer um alto poder de
processamento do banco de dados! Professor, um banco de dados transacional não é capaz de gerar
esses relatórios? Em geral, sim! Todavia, eu contei para vocês que essa empresa foi crescendo,
crescendo, crescendo e foi se tornando uma gigante com milhões de alunos. O resultado disso foi
que o banco de dados passou a ter mais de um bilhão de linhas...

E não é só isso! Esse banco de dados agora possui um modelo de dados gigantesco com dezenas
de relacionamentos complexos entre suas tabelas. Como esses relatórios gerenciais necessitam
de um alto poder de processamento, toda vez que eles são processados, o banco de dados fica lento
para todo mundo que estiver acessando. Logo, os alunos ficam irritados porque o download das
aulas está mais devagar; os professores ficam furiosos porque o upload das aulas está igual a uma
tartaruga; e os funcionários ficam chateados porque todo mundo está dizendo que eles são os
culpados por estarem processando esses malditos relatórios gerenciais. Que pepino!

Podemos concluir que gerar um relatório consolidado desses não é para qualquer banco de
dados tradicional – nós precisamos de mais performance! O que fazer, professor? Bem, você pode

        Receita Federal (Analista Tributário) Fluência em Dados                                    18
        www.estrategiaconcursos.com.br                                                             53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

adquirir um servidor de banco de dados transacional com o dobro do processamento, porém ele
provavelmente será muito caro e, se a empresa crescer mais ainda, ele logo logo também não dará
conta do recado. Concordam comigo?

                                            TROCAR POR UM MAIS POTENTE

              BANCO DE DADOS TRANSACIONAL

                                                                           BANCO DE DADOS TRANSACIONAL
Outra alternativa interessante seria adquirir mais um servidor de banco de dados transacional,
copiar os mesmos dados do banco de dados atual, porém utilizá-lo somente para processar
relatórios e, não, para processar transações. Opa, essa ideia é interessante porque o custo é menor,
no entanto continuamos tendo que processar relatórios imensos sob demanda toda vez que for
necessário – o que ainda pode ser muito lento. Vejamos o esquema abaixo:

             BANCO DE DADOS TRANSACIONAL                                     BANCO DE DADOS TRANSACIONAL

Legal, estamos nos aproximando da solução ideal: que tal se nós tivéssemos mais um servidor de
banco de dados, mas que já guardasse esses relatórios prontos em tabelas? Ahhhhh... que ideia
sensacional! Galera, relatórios são complexos de gerar porque o servidor tem que processar
dados de diversos relacionamentos entre dezenas ou até centenas de tabelas diferentes do
banco de dados transacional e consolidá-los em um único lugar.

Nessa solução, essas tabelas continuariam no banco de dados transacional, mas nós teríamos mais
um banco de dados um pouquinho diferente chamado: Data Warehouse (DW)!

            BANCO DE DADOS TRANSACIONAL                                                DATA WAREHOUSE

        Receita Federal (Analista Tributário) Fluência em Dados                                            19
        www.estrategiaconcursos.com.br                                                                     53

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

O Data Warehouse deixará esses relatórios já armazenados em tabelas e prontinhos para serem
consultados. Calma, professor... para que ele deixe esses relatórios armazenados em tabelas, ele terá
que fazer o mesmo processamento do banco de dados tradicional! Isso é verdade, porém o Data
Warehouse é um banco de dados especializado em gerar relatórios, logo sua performance para
esse tipo de processamento é extremamente eficiente.

Professor, de todo modo os relatórios não terão que ser alimentados? Sim, senhor! Isso é realizado por
meio de um processo chamado ETL (Extract, Transform, Load). Em outras palavras, esse processo
realiza três operações: Extract – extrai as informações do banco de dados transacional; Transform
– transforma as informações para o formato adequado; e Load – carrega as informações no Data
Warehouse! Entendido?

Esse modelo apresenta alta performance, uma vez que os usuários estão distribuídos (alunos e
professores acessam o banco de dados transacional; funcionários e gestores acessam o Data
Warehouse); é mais fácil realizar consultas e analisar informações, uma vez que os dados já estarão
organizados em relatórios pré-definidos; o processamento é reaproveitado, isto é, uma vez que seja
realizado o ETL, os relatórios estarão processados e prontos para serem consultados.

Professor, só tem vantagens? Claro que não! Não é fácil captar e transformar os dados de fontes
diversas em algo útil para o Data Warehouse – isso pode reduzir a relação custo/benefício;
ferramentas e infraestrutura extras costumam ser necessárias, nem sempre compensando o custo
de aquisição, treinamento e operação; a informação pode ficar obsoleta rapidamente; dados pouco
estruturados costumam ser difíceis de se trabalhar; entre outros.

De todo modo, essa empresa era muito sinistra e continuou crescendo exponencialmente!
Agora ela não é mais uma empresa – ela é uma holding fazendo a gestão de várias outras empresas:
uma que cuida somente de concursos; outra que cuida somente de pós-graduação; outra que cuida
somente de provas de certificação; outra que cuida somente de vestibulares; outra que cuida
somente de um site de questões; e assim por diante.

E o número de usuários explodiu de novo porque os gestores dessas empresas também começaram
a utilizar o DW! Resultado? Nem ele aguentou tanto acesso e começou a ficar lento de novo. Oh,
céus! De novo isso, professor? Pois é! Nós até podemos utilizar a mesma estratégia que utilizamos
na ocasião anterior, mas existe uma alternativa mais interessante: nós podemos criar
subconjuntos de um Data Warehouse. Como é, professor?

  BANCO DE DADOS TRANSACIONAL                     DATA WAREHOUSE                        DATA marts

Nós podemos segmentar em subconjuntos de acordo com diversos critérios, por exemplo: assuntos
(Concursos, Coaching, Pós-Graduação, Certificação, Vestibulares, Questões, etc); níveis de

        Receita Federal (Analista Tributário) Fluência em Dados                                      20
        www.estrategiaconcursos.com.br                                                               53

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 06

sumarização 3 (Anual, Semestral, Trimestral, Mensal, Semanal, etc); localização (Nordeste, Norte,
Centro Oeste, Sudeste, Sul). Para finalizar, esses subconjuntos de Data Warehouse (DW) são
chamados de Data Mart (DM).


Definições Básicas
                                                                                                                                           INCIDÊNCIA EM PROVA: média

Pessoal, eu dei uma visão geral sobre o tema, mas é interessante ver como são as definições
acadêmicas e como isso geralmente cai em prova. Então, vejam a tabela a seguir:

      AUTOR                                                                       DEFINIÇÕES ACADÊMICAS
      Ralph            Conjunto de ferramentas e técnicas de projeto4 que – quando aplicadas às necessidades específicas dos
    Kimball            usuários e aos bancos de dados específicos – permitirá que planejem e construam um Data Warehouse.

       Bill            Coleção de dados5 orientados por assunto, integrados, variáveis com o tempo e não-voláteis, para dar
      Inmon            suporte ao processo de tomada de decisão.

       Arun            Banco de dados construídos no interesse de suporte à decisão de negócios e contêm dados históricos
        Sen            sumarizados e consolidados provenientes de registros individuais de bancos de dados operacionais.

    Kenneth            Banco de dados – com ferramentas de consulta e relatório – que armazena dados atuais e históricos extraídos
     Laudon            de vários sistemas/ambientes operacionais e consolidados para fins de análises e relatórios administrativos.


Vamos identificar as palavras-chaves que formam essas definições? Coleção de dados; ferramentas
de consulta e relatório; orientados por assuntos; integrados; variáveis com o tempo; não-voláteis;
dados históricos sumarizados e consolidados; suporte à tomada de decisão. Notem que nós vimos
basicamente todos esses conceitos em nossa contextualização. Fiquem tranquilos porque nós
vamos ver em detalhes no tópico a seguir...


Características Essenciais
                                                                                                                                             INCIDÊNCIA EM PROVA: ALTA

Galera, nós vimos um contexto geral e um conjunto de definições básicas. No entanto, nós
passamos direto por vários termos importantes que veremos a seguir:

▪ Data Warehouse é orientado por assunto:

Um Data Warehouse é montado por assunto, isto é, ele trata de temas específicos e
importantes para o negócio da organização. Por exemplo: uma empresa do ramo de concursos


3 Granularidade é o nome que se dá ao nível de sumarização dos elementos de dados de um Data Warehouse. Quanto maior a granularidade, maior será o grão e menor será o nível de
detalhes; quanto menor a granularidade, menor será o grão e maior será o nível de detalhes.
4 Note que Ralph Kimball apresenta uma definição bastante abrangente em que trata o Data Warehouse como um conjunto de ferramentas e técnicas de projeto.
5 Esses dados podem ser estruturados ou não-estruturados. No entanto, Data Warehouses geralmente são pouco eficientes ao lidar com dados não-estruturados.

             Receita Federal (Analista Tributário) Fluência em Dados                                                                                                       21
             www.estrategiaconcursos.com.br                                                                                                                                53

                                                       


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

pode ter como assuntos principais: concursos militares, concursos fiscais, concursos policiais,
concursos de tribunais, concursos bancários, concursos legislativos, entre outros. Aqui não tem
muito o que falar, essa característica é bastante intuitiva.

▪ Data Warehouse é não-volátil:

Galera, vem comigo! Vocês sabem o que significa algo ser volátil? O dicionário nos diz que volátil é
aquilo que muda com facilidade. Nós vimos que os dados são carregados a partir do Banco de
Dados Transacional para o Data Warehouse. Vocês se lembram? O lance é que o Data Warehouse é
não-volátil, logo ele não muda com facilidade. Na verdade, os dados – em tese – jamais devem
mudar (serem alterados ou deletados) após inseridos.

Em outras palavras, podemos dizer que os dados ficam disponíveis apenas para que os usuários
realizem consultas e façam relatórios que auxiliem a tomada de decisão por parte dos gestores
de uma organização. Logo, os dados disponíveis em um Data Warehouse mostram uma
característica de somente leitura para os usuários finais de um banco de dados. Essa primeira
característica foi fácil, concordam?

▪ Data Warehouse é integrado:

Professor, o que diabos é isso? Galera, quando eu era desenvolvedor de sistemas, era comum
desenvolver um software que – por exemplo – requisitava várias informações dos usuários em
um formulário. Dentre essas informações, uma muito comum perguntava em que banco o usuário
possuía uma conta corrente. Como funcionava: havia um campo em branco e o usuário preenchia
livremente qual era o banco em que ele tinha conta corrente.

Qual é o grande problema disso? O problema é que um usuário escrevia “Caixa Econômica”; outro
usuário escrevia “Caixa”; outro usuário escrevia “Caixa Econômica Federal”; e – por fim – outro
escrevia “CEF”. Galera, se os dados representam a mesma entidade, mas estão com nomes
diferentes, podemos dizer que os dados não estão integrados. Em outras palavras, ser integrado
significa que os dados estão consistentes e uniformes.

Professor, uma maneira de resolver isso não seria obrigar o usuário a escolher o nome do banco em uma
lista em vez de permitir que ele escreva? Booooa... é isso que nós fazemos! No entanto, o que fazer
com os dados que já foram cadastrados? Além disso, é comum que vários softwares diferentes,
desenvolvidos por empresas diferentes, salvem dados em um mesmo banco de dados. E se uma
empresa escolheu o nome “Caixa Econômica Federal” e outra “CEF”? Já era...

Como vocês fazem para corrigir isso? Galera, nós limpamos a base de dados! Limpamos, professor?
Sim, esse é o termo utilizado! Isso significa que as inconsistências são removidas e os conflitos
de informações são consertados antes de serem inseridos ou carregados em um Data
Warehouse! Dessa forma, podemos afirmar que os dados de um Data Warehouse são integrados
de múltiplas fontes diferentes de forma consistente, padronizada e uniforme.

        Receita Federal (Analista Tributário) Fluência em Dados                                   22
        www.estrategiaconcursos.com.br                                                            53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

▪ Data Warehouse é histórico (variável com o tempo):

Dados históricos são mantidos em um Data Warehouse. Por exemplo: pode-se recuperar dados
de três, seis, doze meses ou até mesmo dados mais antigos de um Data Warehouse. Isso contrasta
com os bancos de dados transacionais, em que geralmente apenas os dados mais recentes são
mantidos. Por exemplo: um banco de dados transacional pode conter o endereço mais recente de
um cliente, enquanto um DW pode conter todos os endereços associados a um cliente.

Tipos de Data Warehouse
                                                                                        INCIDÊNCIA EM PROVA: média

Galera, existem basicamente três tipos de Data Warehouse: Enterprise Data Warehouse (EDW),
Operational Data Store (ODS) e Data Mart (DM)! Armaria, professor... que siglas são essas?
            DATA WAREHOUSE

                                                                               ENTERPRISE DATA
                                                EDW
                                                                                 WAREHOUSE

                                                 ODS                     OPERATIONAL DATA STORE


                                                 DM                               DATA MART

Vamos ver a definição dos três tipos, mas não se preocupem tanto com os dois primeiros – nosso
foco aqui é o Data Mart. Então, vejamos abaixo:

▪ Enterprise Data Warehouse (EDW):

Traduzido como Armazém de Dados Corporativos/Abrangentes/Empresariais, é um repositório
central tático/estratégico que contém todas as informações de negócio de uma organização de
forma acessível para toda empresa com a finalidade de suportar as análises de decisões. Grosso
modo, é possível afirmar que um EDW é um DW de larga escala – grande e abrangente – que é
utilizado pela organização como um todo e que integra informações de diversas fontes de dados.

▪ Operational Data Store (ODS):


        Receita Federal (Analista Tributário) Fluência em Dados                                               23
        www.estrategiaconcursos.com.br                                                                        53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Traduzido como Armazenamento de Dados Operacionais, trata-se de um repositório
intermediário de dados utilizado para relatórios operacionais e como uma fonte de dados para
o Enterprise Data Warehouse (EDW). É um elemento complementar a um EDW em um cenário de
suporte a decisões, e é usado para relatórios, controles e tomada de decisões operacionais – em
oposição ao EDW, que é utilizado para suporte de decisões táticas e estratégicas.

▪ Data Mart (DM):

Traduzido como Mercado de Dados, trata-se de um subconjunto de dados de um Data
Warehouse. Geralmente são dados referentes a um assunto em especial (Ex: Vendas, Estoque,
Controladoria, entre outros) ou diferentes níveis de sumarização (Ex: Vendas Anual, Vendas
Semestral, Vendas Mensal, entre outros), que focalizam uma ou mais áreas específicas. Seus dados
são obtidos do DW – indexados para suportar intensas pesquisas.

O Data Mart é considerado um pequeno Data Warehouse – ou um subconjunto/segmentação de
um Data Warehouse – que contém dados de uma organização em geral restritos a uma unidade de
negócio ou a um processo de negócio específico com a finalidade de dar suporte ao processo
decisório da alta direção por meio da criação de uma visão personalizada dos dados. De acordo
com Date, trata-se de um repositório especializado e volátil (mas é o único autor que diz isso)!

Data Marts geralmente lidam com um único assunto, sendo frequentemente construídos e
gerenciados por um único departamento comercial. Eles normalmente obtêm dados de apenas um
pequeno número de fontes e – como consequência – são geralmente menos complexos, mais
econômicos, mais fáceis de construir e mais fáceis de manter do que Data Warehouses. Vejamos
algumas de suas principais características:

▪ Um Data Mart permite um acesso mais rápido aos dados, recuperando um conjunto específico
  de dados para BI e Relatórios. Como resultado, ajuda a acelerar os processos de negócios;

▪ Sendo focado em um assunto, é mais fácil implementar um Data Mart, sendo mais econômico
  em comparação com a construção de uma empresa Data Warehouse;

▪ O uso de um Data Mart é fácil, visto que ele é projetado de acordo com os requisitos de um grupo
  específico de usuários que trabalham em um departamento específico;

▪ Um Data Mart é comparativamente mais adaptável que um Data Warehouse. Qualquer
  alteração no modelo de dados pode ser fácil e rapidamente incorporada no Data Mart;

▪ Em um Data Mart, os dados são particionados e segmentados, o que permite um controle de
  acesso em um nível mais granular.

Os Data Marts são utilizados por uma única unidade de negócios para armazenar suas informações.
Digamos que o departamento de vendas de uma empresa tenha que armazenar seus dados de

        Receita Federal (Analista Tributário) Fluência em Dados                                24
        www.estrategiaconcursos.com.br                                                         53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

negócios – eles poderão utilizar um Data Mart para armazenar seus dados. Quando as
informações precisam ser visualizadas pelos superiores, elas são carregadas em um Data
Warehouse e são, então, transformadas em insights usando software de Business Intelligence.

  Tipos de Data mart DESCRIÇÃO
                      Nesse caso, um conjunto de fontes de dados operacionais são integradas em um EDW, que
        dependente – por sua vez – são divididos em diversos Data Marts dependentes.

                      Nesse caso, um conjunto de fontes de dados operacionais são permitem gerar um ou mais
       independente Data Marts independentes, sem a necessidade de criar um EDW.

                      Nesse caso, um conjunto de fontes de dados operacionais podem ser tanto integradas em
             híbrido um EDW para posteriormente permitir a criação de Data Marts quanto podem gerá-los de
                      maneira independente.            ==219a34==

             DEPENDENTE                             INDEPENDENTE                       HÍBRIDO

Processo de Data Warehouse
                                                                                       INCIDÊNCIA EM PROVA: baixa

Galera, nós já vimos componentes suficientes para finalmente entender como funciona o
processo de um Data Warehouse. Vejam a figura abaixo:

        Receita Federal (Analista Tributário) Fluência em Dados                                              25
        www.estrategiaconcursos.com.br                                                                       53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Vamos por partes: à esquerda, temos os Data Sources! O que é isso, Diego? Cara, essas são as
Fontes de Dados. Vocês se lembram que nós vimos que um DW possui dados de diversas fontes
distintas? Pois é, essa imagem mostra alguns exemplos: ERP/CRM, Sistemas Legados, Dados Web
(XML/JSON), Dados Externos, etc. Na tabela, podemos ver uma descrição das principais fontes de
dados:

    Fontes de dados                                               DESCRIÇÃO
                    Sistemas de CRM (Customer Relationship Management) e ERP (Enterprise Resource
            Crm/erp
                    Planning) que fornecem dados transacionais e operacionais.
                    Sistemas mais antigos que ainda estão em uso por uma organização e que ainda fornecem
   Sistemas legados
                    serviços essenciais (muitas vezes, desenvolvidos com tecnologias ultrapassadas).
                    Bancos de dados estruturados que armazenam informações essenciais.
    BANCOS DE DADOS
          Dados web   Dados extraídos da web em formatos como XML ou JSON. Esses formatos são
         (xml/JSON)   representações de dados utilizados na troca de dados entre aplicações.
          Planilhas   Dados armazenados em planilhas eletrônicas, frequentemente usados para relatórios
        ELETRÔNICAS   manuais e análises ad hoc.
                      Informações obtidas de fontes externas à organização que podem vir de diversas fontes
    Dados externos
                      diferentes.


A imagem quer mostrar que diversas fontes de dados servem de entrada para um Enterprise
Data Warehouse (EDW). No entanto, notem que – antes de serem carregados – eles devem passar
pelo processo de ETL (Extract, Transform, Load). Essas são as principais etapas, mas é possível
dividi-la também em Seleção, Extração, Transformação, Integração e Carga, conforme
apresentamos a seguir:


        Receita Federal (Analista Tributário) Fluência em Dados                                          26
        www.estrategiaconcursos.com.br                                                                   53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

               Etapas                                              DESCRIÇÃO
                         Escolha dos dados que serão extraídos das diferentes fontes.
              Seleção
                         Coleta dos dados selecionados a partir das fontes de dados.
             Extração
                         Conversão dos dados para um formato adequado para análise. Isso pode incluir limpeza de
    Transformação
                         dados, agregações e outras operações de transformação.
                         Combinação de dados de diferentes fontes em um formato unificado e uniforme.
            Integração
                         Inserção dos dados transformados e integrados no Data Warehouse.
                carga


Os dados podem passar por uma área intermediária chamada ODS/Staging antes de serem
carregados no Data Warehouse. Esta área serve para armazenar temporariamente os dados
durante o Processo ETL. Nós não vamos detalhar o Processo de ETL agora porque será visto no
tópico seguinte! O Data Warehouse é um repositório central onde os dados integrados e
transformados são armazenados. Ele contém:

▪ Metadados: informações sobre os dados armazenados no DW, como estruturas e atributos de
  tabelas, especificações do modelo de dados, rotinas de acesso, log de extrações, etc.
▪ Replicação: mecanismos para copiar e sincronizar dados entre diferentes sistemas e o Data
  Warehouse.

Notem que os metadados auxiliam também na criação da visualização dos dados por meio de
diversas ferramentas. Na próxima etapa, nós vemos que os Data Warehouses podem ser
organizados em Data Marts para facilitar o acesso e análise. Um Data Mart é uma subdivisão do
Data Warehouse focada em uma área específica da empresa, tais como: Marketing, Finanças, RH,
Executivo, entre outros.

Notem que usuários e aplicações utilizam middlewares para acessar Data Marts ou Data
Warehouses – eles não acessam os dados diretamente. As interfaces de programação de aplicativos
(APIs) e middleware facilitam a comunicação e integração entre diferentes sistemas e o Data
Warehouse, permitindo o acesso eficiente aos dados armazenados. Por fim, temos a etapa de
visualização de dados.

Finalmente, os dados são acessados e analisados para descobrir informações relevantes para a
organização através de diversas ferramentas e métodos de visualização, incluindo:

    ferramentas                                                   DESCRIÇÃO
                 Processo de descoberta de padrões significativos em grandes conjuntos de dados, usando
     data mining
                 métodos estatísticos e algoritmos para encontrar insights ocultos.
                 Análise de textos para extrair informações úteis, identificar tendências e padrões,
     Text mining
                 frequentemente utilizada para processar dados não estruturados, como documentos e e-mails.

        Receita Federal (Analista Tributário) Fluência em Dados                                               27
        www.estrategiaconcursos.com.br                                                                        53

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                     Interfaces de software acessíveis via navegador que permitem usuários interagir e visualizar
  Aplicações web
                     dados do DW em tempo real, com foco em usabilidade e acessibilidade.
   Aplicações de Softwares específicos de negócio que utilizam dados do DW para otimizar operações
         negócio empresariais, melhorar processos e suporte a decisões estratégicas.
                 Representações visuais de dados em formas gráficas, como fluxogramas ou organogramas, que
      Diagramas
                 ajudam a entender e comunicar informações complexas.
                 Visualizações de dados que utilizam elementos gráficos como barras, linhas ou setores para
        Gráficos
                 representar e comparar informações numéricas de forma intuitiva.
    Ferramentas      Ferramentas de Processamento Analítico Online que permitem análise multidimensional dos
             olap    dados, oferecendo capacidades de slicing, dicing e drill-down para explorar insights.
     Dashboards      Painéis visuais que agregam e mostram métricas e KPIs importantes, permitindo aos usuários
      interativos    interagir com os dados para análises detalhadas e insights rápidos.
        Planilhas    Ferramentas como Excel ou Google Sheets que permitem organização, análise e visualização de
     eletrônicas     dados em tabelas, com funcionalidades de cálculo e gráfico.
          Análise    Processo de investigar dados para encontrar padrões, detectar anomalias, testar hipóteses e
    exploratória     validar suposições com ajuda de visualizações interativas.
          Machine    Aplicação de algoritmos que permitem que sistemas aprendam e façam previsões ou decisões
         learning    baseadas em dados históricos, melhorando com o tempo e experiência.
          Análise    Uso de técnicas estatísticas e algoritmos de machine learning para prever tendências futuras e
         preditiva   comportamentos, baseando-se em dados históricos e padrões identificados.
         Sistemas    Integração de dados do DW com sistemas operacionais para otimizar funções e processos
    operacionais     internos da empresa, como ERP e CRM.
       Relatórios    Documentos que compilam dados e análises para informar gestores sobre o desempenho e
       gerenciais    estado de diferentes aspectos do negócio, auxiliando na tomada de decisão.

Kimball x Inmon
                                                                                             INCIDÊNCIA EM PROVA: média

Galera... existem dois autores que são considerados pioneiros na teoria sobre Data Warehouse
iniciada no início da década de noventa: Ralph Kimball e Bill Inmon! Ocorre que eesses dois caras
concordam em váááááááááááárias coisas sobre como implementar um Data Warehouse, no
entanto há alguns pontos em que eles discordam diametralmente. Vamos começar pela parte
que eles concordam...

A Arquitetura de Inmon é chamada de Enterprise Data Warehouse (sim, aquele que nós vimos
lá atrás) e a Arquitetura de Kimball é chamada de Dimensional Data Warehouse. Via de regra,
elas são muito parecidas contendo um único repositório integrado de dados corporativos que
suporta a análise de informações em toda a organização. Por outro lado, esses discordam
veementemente na forma como um Data Warehouse deve ser construído. Vejamos:

        Receita Federal (Analista Tributário) Fluência em Dados                                                    28
        www.estrategiaconcursos.com.br                                                                             53

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

De maneira simplista, pode-se afirmar que Inmon defende uma abordagem de cima para baixo
(top-down) e Kimball defende uma abordagem de baixo para cima (bottom-up). Em outras
palavras, Inmon acha que a maneira correta é construir o Data Warehouse e depois dividi-lo em
Data Marts; já Kimball acha que a maneira correta é construir vários Data Marts e, só então, integrá-
los em um Data Warehouse. Em suma:

▪ Abordagem de Inmon:

Recomenda a construção do DW que siga a abordagem de cima para baixo. Na filosofia de Inmon,
é começando com a construção de um grande Enterprise Data Warehouse centralizado, onde
todos os dados disponíveis dos sistemas transacionais são consolidados em uma coleção de dados
orientada ao assunto, integrada, variante no tempo e não volátil que suporta a tomada de decisões.
Em seguida, os Data Marts são construídos para necessidades analíticas de departamentos.

▪ Abordagem de Kimball:

Recomenda a construção do DW que segue a abordagem de baixo para cima. Na filosofia de
Kimball, inicia-se primeiro com Data Marts de missão crítica que atendem às necessidades
analíticas dos departamentos. Em seguida, integram-se esses Data Marts para consistência de
dados por meio do chamado barramento de informações. Kimball faz uso do modelo dimensional
para atender às necessidades dos departamentos em várias áreas da empresa.

    CARACTERÍSTICAS                       KIMBALL (DM)                                   INMON (EDW)
      Abordagem              Bottom-Up (Data Marts → Data Warehouse)       Top-Down (Data Warehouse → Data Marts)

      Orientação                 Orientado a processos de negócio                      Orientado a dados

  investimento Inicial                        Baixo                                           Alto

     Normalização                        Desnormalizado                         Normalizado (3ª Forma Normal)

    Direcionamento                        Usuários finais                              Profissionais de TI

       Consultas                   Realizadas no Data Warehouse                    Realizadas no Data Mart


Antes de prosseguir, é importante explicar duas palavrinhas: normalizado e multidimensional!
Explicando beeem rapidamente, a normalização é um conjunto de regras aplicadas a um banco de
dados para reduzir a redundância, aumentar a integridade e melhorar o desempenho (exceto de
consultas). Como mostra a tabela, o banco de dados do Kimball não se importa com dados
redundantes, já o banco de dados de Inmon se importa (e é normalizado).

Agora vocês se lembram que temos a modelagem relacional? Temos também a modelagem
multidimensional – em geral, utilizada em Data Warehouses! A Modelagem dimensional é uma
técnica normalmente usada com Data Warehouses. Segundo Kimball, a modelagem dimensional
é a única técnica viável para bancos de dados que devem responder consultas em um DW, uma vez
que a modelagem relacional é mais útil para representação de transações.

        Receita Federal (Analista Tributário) Fluência em Dados                                                     29
        www.estrategiaconcursos.com.br                                                                              53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Não há certo ou errado entre essas duas ideias, uma vez que elas representam apenas
diferentes filosofias de armazenamento de dados. Na realidade, a maioria das empresas adota a
abordagem de Kimball, porque a maioria dos Data Warehouses começam como um esforço
departamental e, portanto, originaram-se como um Data Mart. Somente quando mais Data Marts
são construídos posteriormente é que eles evoluem para um Data Warehouse.

Por fim, eu deixo um desafio para vocês: nos diagramas abaixo, um representa a abordagem de
Kimball e outro representa a abordagem de Inmon. E aí, qual que é qual?

ETL
                                                                                       INCIDÊNCIA EM PROVA: média

Galera, você precisa carregar seu Data Warehouse regularmente para que possa servir ao propósito
de facilitar a análise de negócios. Para fazer isso, os dados de um ou mais sistemas/ambientes
operacionais precisam ser extraídos e copiados no Data Warehouse. O desafio nos ambientes de
Data Warehouse é integrar, reorganizar e consolidar grandes volumes de dados de muitos sistemas,
fornecendo assim uma nova base de informações unificada para análise de dados.

O processo de extrair dados de sistemas de origem e trazê-los para o Data Warehouse é
comumente chamado de ETL (Extract, Transform e Load). Galera, é importante entender que o
ETL se refere a um processo mais amplo e, não, a três etapas bem definidas. A verdade é que a
sigla ETL é simplista demais, uma vez que omite algumas fases e implica que cada uma das outras
fases do processo é distinta. No entanto, o processo como um todo é conhecido como ETL!

        Receita Federal (Analista Tributário) Fluência em Dados                                              30
        www.estrategiaconcursos.com.br                                                                       53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Ele é o processo mais crítico e demorado na construção de um Data Warehouse, uma vez que
consiste na extração dos dados de fontes homogêneas ou heterogêneas; na transformação e
limpeza destes dados; e na carga dos dados no DW. Pessoal, as decisões estratégicas – aquelas
mais importantes de uma organização – são tomadas com base nas informações geradas através
dos dados armazenados no Data Warehouse.

Se estes dados não forem corretamente trabalhados no processo de extração, as informações
geradas através deles farão com que decisões sejam tomadas erroneamente, podendo afetar
diretamente os negócios da organização. Já viram a responsabilidade, não é? Galera, hoje em dia
todo órgão público de médio/grande porte possui – em sua área de tecnologia da informação – uma
gerência responsável por toda essa parte de Business Intelligence.

Essa área geralmente é responsável pela criação de Data Warehouses e pelo Processo de ETL! Aliás,
não sei se vocês sabem, mas a maior parte do esforço exigido no desenvolvimento de um DW é
consumido neste momento – eu diria que cerca de uns 80%! Logo, ele tem que ser bem feito e
refletir a realidade de modo que analistas consigam tirar informações relevantes para o
processo de tomada de decisões gerenciais.

Sabe outra curiosidade? Eu disse que 80% do esforço de desenvolvimento de um DW é ETL! Sabia
que 60% do Processo de ETL é só com a Extração? Pois é, essa etapa deve se basear na busca das
informações mais importantes em aplicações ou fontes externas. Pessoal, essa busca geralmente
não é tão simples! Dados podem estar distribuídos em dezenas de lugares, tecnologias ou
plataformas diferentes necessitando de formas de extração distintas para cada local.

É, galera – não é tudo mil maravilhas! Você perde muito tempo durante a extração porque
frequentemente é necessário implementar diversas formas diferentes de extrair dados de seus
locais de origem. E sem carga de dados, não temos Data Warehouse! No momento da criação de
um DW, é comum realizar uma carga de dados inicial, mas com o decorrer do tempo a extração
deve estar preparada apenas para fazer cargas incrementais.

A carga incremental é muito mais eficiente visto que carrega apenas os dados que foram inseridos
desde a carga inicial. Professor, e para onde vão esses dados que foram extraídos, mas ainda não
foram transformados e carregados no Data Warehouse? Excelente pergunta! Resposta: eles vão para
um local chamado Stage Area! O que é isso, professor? Vocês devem se lembrar que uma das
características essenciais de um Data Warehouse é sua integridade.

Relembrando: os dados devem estar padronizados, consistentes e uniformizados antes de serem
carregados no Data Warehouse! Para tal, eles precisam ser limpos, entre outras atividades. Isso
tudo ocorre na Stage Area, portanto ela é basicamente uma localização temporária de onde os
dados de diversas fontes de origem são copiados. Sabe quando você copia e cola algo em um
sistema operacional? O que você copiou vai para um local chamada Área de Transferência!

        Receita Federal (Analista Tributário) Fluência em Dados                               31
        www.estrategiaconcursos.com.br                                                        53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Adivinhem só: Stage Area é similar à Área de Transferência, isto é, uma localização de
armazenamento temporário. Seguindo: a transformação dos dados é a fase subsequente à
extração. Esta fase não só transforma os dados, mas também realiza a limpeza dos mesmos. A
correção de erros de digitação, a descoberta de violações de integridade, a substituição de
caracteres desconhecidos, a padronização de abreviações podem ser exemplos dessa limpeza.

Já a fase de carga consiste no carregamento dos dados para seu destino final. Esse processo
pode variar muito, uma vez que alguns Data Warehouses podem adicionar as informações
existentes mensalmente (com dados cumulativos e atualizados) ao passo que outros podem
adicionar dados a cada hora, dia ou semana. Galera, era isso que era cobrado até pouco tempo
atrás, mas as coisas mudaram... agora estão cobrando até o ELT!

Professor, você errou a sigla! Errei, não... é isso mesmo! ELT é uma inversão da ordem das etapas
que vimos anteriormente: em vez de fazermos (1) Extração, depois (2) Transformação e só depois
a (3) Carga, nós fazemos a (1) Extração, depois a (2) Carga e só depois a (3) Transformação dos
dados. Primeiramente, é importante destacar que os processos de ETL e ELT – apesar de
diferentes – solucionam o mesmo problema.

O ELT é um processo mais ágil para o carregamento e o processamento de dados, visto inverte
a ordem das etapas de transformação de dados da abordagem tradicional de ETL. Nesse
cenário, a transformação de dados ocorre logo após a coleta e o carregamento das informações em
um repositório de dados centralizado e, não, antes. Com isso, é possível transformar dados brutos
em dados modelados dentro de um Data Warehouse.

Essa simples inversão de etapas reduz consideravelmente o tempo de carregamento de dados,
permitindo que a transformação de dados seja feita por analistas de dados comuns, sem a
dependência de profissionais altamente técnicos como desenvolvedores e engenheiros de dados.
Na prática, os engenheiros de dados se focam apenas nas etapas de extração e carregamento,
atribuições características de sua área de atuação.

Dessa forma, a responsabilidade da transformação de dados fica nas mãos de profissionais
próximos à empresa que conhecem as regras de negócio, como analistas e cientistas de dados,
trazendo benefícios como: menor tempo gasto entre extração e transformação de dados; maior

        Receita Federal (Analista Tributário) Fluência em Dados                               32
        www.estrategiaconcursos.com.br                                                        53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

eficiência na implementação de projetos; menor dependência de profissionais altamente técnicos;
e independência dos analistas para o manuseio de dados brutos.

Quando a ETL foi criada, o armazenamento de dados em repositórios era extremamente caro. Além
disso, o processamento dessas informações era extremamente lento e, por isso, pouquíssimas
organizações podiam investir nessas tecnologias. Ocorre que essa realidade mudou com a
computação na nuvem (cloud computing). Hoje, o que era lento tornou-se rápido; e o que era caro
tornou-se acessível.

Assim, considerando o volume massivo de dados para processamento nas operações modernas,
muitas empresas têm optado pelo ELT em vez do tradicional ETL, buscando mais flexibilidade e
agilidade nos seus pipelines de dados. O ELT permite analisar grandes volumes de dados de
forma rápida, com menos manutenção e gastos de recursos – além de possibilitar uma maior
colaboração entre equipes de negócio e profissionais técnicos.

Por essa razão, ainda que o ELT seja um processo mais complexo, exigindo mais esforços nos
quesitos de design e infraestrutura do que o ETL, a primeira oferece mais vantagens no longo prazo.
Além disso, o ELT leva menos tempo no carregamento e na transformação de dados e, por isso,
é mais econômico. No entanto, caso o repositório de dados de destino não seja robusto para
comportar um volume massivo de dados, o processo de ETL pode ser uma opção mais viável.

Bem... agora que as provas começaram a cobrar o ELT, logo 99% das questões ainda serão sobre
ETL! De toda forma, vamos resumir as diferenças na tabelinha a seguir:

                             ETL (Ex: data warehouse)                            ELT (EX: DATA LAKE)
        CRITÉRIOS
                         Extração > transformação > carga                 Extração > carga > transformação
                          Uso de sistemas distintos implica uma Uso de um sistema de carregamento integrado
        TEMPO DE                 maior demora/latência para o implica uma menor demora/latência para o
           carga                       carregamento de dados. carregamento de dados

                     Demora considerável – particularmente na       Transformação de dados feita de maneira
                         transformação de grandes volumes de        integrada e mais rápida, visto que sua
        TEMPO DE    dados. Além disso, à medida que os volumes      velocidade independe do tamanho ou da
  TRANSFORMAÇÃO             crescem, o tempo de transformação       complexidade dos dados – graças às
                                                     aumenta.       tecnologias de infraestrutura na nuvem.

                       Altos custos de manutenção, dado que a       Baixos custos de manutenção, pois os dados
                    atualização do repositório de dados requer o    estão sempre disponíveis e acessíveis para
        custo DE     trabalho recorrente de profissionais caros e   todos sem a necessidade de profissionais
     MANUTENÇÃO     escassos no mercado, como engenheiros de        extremamente especializados.
                                      dados e desenvolvedores.

                    Requer menos conhecimento aprofundado Requer maior conhecimento aprofundado de
 COMPLEXIDADE DE      de projeto e arquitetura do repositório de ferramentas avançadas de análise e uma
  IMPLEMENTAÇÃO                                          dados. arquitetura bem estruturada do repositório de
                                                                 dados.


        Receita Federal (Analista Tributário) Fluência em Dados                                                  33
        www.estrategiaconcursos.com.br                                                                           53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                    Dados devem ser selecionados a priori, ou Dados brutos ficam disponíveis, por isso a
    Limitação de     seja, o que não for selecionado é perdido. retenção de dados depende apenas da política
          dados                                                 de retenção eleita pela operação de dados.

                        ETL foi desenvolvido para dar suporte a ELT foi construído para suportar grandes
   Suporte para           banco de dados relacionais, locais e volumes e diversas fontes de dados,
                                             sistemas legados. estruturadas e não estruturadas, de forma
 Bancos de dados                                                escalável em infraestruturas de nuvem.

                             Tabelas fixas, cronogramas fixos,    Ad hoc, abordagem escalável, flexível e
                          predominantemente utilizados por        colaborativa, utilizável tanto por profissionais
     Usabilidade                profissionais técnicos de TI,     técnicos quanto pelo usuário final de
                    desenvolvedores e engenheiros de dados.       negócio.

                    Abordagem não econômica, especialmente Por ser escalável, adaptável e acessível para
          Custo/     para empresas de pequeno e médio portes. negócios de todos os tamanhos, é uma
                                                              solução muito mais viável, econômica e
        benefício                                             moderna.

                     É mais adequado para o armazenamento É menos adequado para o armazenamento
                      de dados sensíveis e confidenciais, dado de dados sensíveis e confidenciais, dado que a
  DADOS SENSÍVEIS   que permite a transformação antes da carga transformação ocorre somente após a carga.
                                 (Ex: anonimização dos dados).

                         Comumente utilizado em Armazém de Comumente utilizado em Lagos de Dados
     Repositório                 Dados (Data Warehouses). (Data Lakes).

É importante mencionar que esses sistemas são complementares: não necessariamente é preciso
fazer a substituição de um por outro. Pode-se afirmar que o Data Lake é ótimo para realizar análises
de Machine Learning/Deep Learning, Data Discovery e Análises Preditivas; já o Data Warehouse é
bastante útil para análises de Business Intelligence, Visualização de Dados, Criação de Relatórios e
Análises Transacionais.

        Receita Federal (Analista Tributário) Fluência em Dados                                                  34
        www.estrategiaconcursos.com.br                                                                           53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

            QUESTÕES COMENTADAS – DIVERSAS BANCAS
                                                                                       Sistemas de suporte à decisão

1. (CESPE / SEFAZ-RS - 2019) A respeito do BI (business intelligence), assinale a opção correta:

   a) O BI consiste na transformação metódica e consciente das informações exclusivamente
   prestadas pelos tomadores de decisão em novas formas de conhecimento, para evolução dos
   negócios e dos resultados organizacionais.

   b) ETL é o processo de análise de dados previsto pela arquitetura de BI.

   c) As técnicas do BI objetivam definir regras para a formatação adequada dos dados, com vista
   a sua transformação em depósitos estruturados de informações, sem considerar a sua origem.

   d) O repositório de dados analíticos de BI é representado pelas diversas bases de dados
   relacionais e por repositórios de dados que utilizem modelagens relacionais.

   e) A camada de apresentação de uma arquitetura de BI é aquela em que as informações são
   organizadas e centralizadas.

Comentários:

(a) Errado. Via de regra, informações são geradas por prestadores de serviços operacionais e
transformadas em informações úteis para os tomadores de decisão – está invertido;

(b) Errado. ETL é o processo de extração, transformação e carga de dados previsto pela Arquitetura
de Business Intelligence para posterior análise de dados;

(c) Correto. A Arquitetura BI/DW realmente define regras para transformação de dados de diversas
fontes que serão carregados em depósitos de dados (Data Warehouse);

(d) Errado. É representado por uma única base de dados centralizada que utiliza uma modelagem
multidimensional e, não, relacional;

(e) Errado. As informações são organizadas e centralizadas na Camada de Data Warehouse e são
acessadas pelos usuários finais por meio de aplicações (Camada de Apresentação/Visualização).

Observação: no item correto, quando a questão fala em “sem considerar a origem dos dados”, ela
quis dizer que é independente da origem dos dados. A redação não é muito boa, mas ela quis dizer
que – uma vez que os dados são provenientes de diversas fontes diferentes e são transformados no
ETL – a origem dos dados é desconsiderada.

        Receita Federal (Analista Tributário) Fluência em Dados                                                  35
        www.estrategiaconcursos.com.br                                                                           53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                                                                                       Gabarito: Letra C

2. (IADES / APEX BRASIL - 2018) No jargão empresarial moderno, business intelligence é o (a):

   a) mesmo que data warehouse, já que ambos têm a finalidade de armazenar dados e criar
   relatórios gerenciais.

   b) inteligência artificial dos computadores modernos.

   c) inteligência da empresa que tem por base os sistemas modernos de informatização.

   d) processo de recolhimento e tratamento de informações que apoiarão a gestão de um
   negócio.

   e) conjunto de relatórios preparados pelos executivos de uma empresa.

Comentários:

(a) Errado. DW é uma coleção de dados orientados por assunto, integrados, variáveis com o tempo
e não-voláteis – já o BI é um processo que auxilia na tomada de decisões;

(b) Errado. Inteligência artificial se refere à capacidade de simular a inteligência humana e Business
Intelligence se refere à capacidade de auxiliar na tomada de decisões;

(c) Errado. Não se trata de inteligência da empresa, mas de processos que ajudam na tomada de
decisões empresariais estratégicas;

(d) Correto. Pode ser definido como um processo de recolhimento e tratamento de informações
que auxiliarão a gestão de um negócio;

(e) Errado. Esse item não faz o menor sentido. Na verdade, pode-se gerar relatórios para os
executivos de uma empresa, mas isso não é a definição de Business Intelligence.

                                                                                       Gabarito: Letra D

3. (CESPE / CGM JOÃO PESSOA - 2018) Business intelligence pode ser definido como um processo
   inteligente de coleta, organização, análise, compartilhamento e monitoração de dados que,
   depois de processados, geram informações para o suporte e para a tomada de decisões no
   ambiente de negócios.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      36
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Perfeito! Business Intelligence (Inteligência de Negócio) é um termo criado pelo Gartner Group
utilizado para representar um conjunto de processos, técnicas, metodologias, habilidades,
ferramentas e capacidades utilizadas para acessar, coletar, organizar, tratar, analisar, cruzar,
processar, compartilhar e monitorar dados de diversas fontes com o intuito de gerar informações e
relatórios analíticos que suportem a gestão corporativa, a definição de estratégias e a tomada de
decisão em ambientes de negócio.

                                                                                       Gabarito: Correto

4. (VUNESP / MPE-SP - 2016) Observe o esquema a seguir, que representa a estrutura geral e os
   componentes de uma solução de Business Intelligence – BI (Inteligência Empresarial ou
   Inteligência de Negócios).

   Sobre esse esquema, é correto afirmar que:

   a) a camada “origem de dados” é o ambiente operacional onde se encontram os aplicativos de
   gestão, com alto grau de interação sistêmica entre eles (os aplicativos), e é onde os
   consumidores e fornecedores interagem diretamente com os sistemas administrativos.

   b) na camada ETL (do inglês Extract Transform Load – Extração, Transformação e Carga), os
   dados extraídos dos aplicativos de gestão são inseridos diretamente no banco de dados.

   c) no centro dessa arquitetura, está o data warehouse (banco de dados), que além de conter
   dados granulares integrados, é considerado o “coração” de informações da fábrica.

   d) na última camada, à direita, está a plataforma de BI, representando um conjunto de
   ferramentas que apenas disponibiliza dados para consulta e processamento pelo usuário, com
   alta disponibilidade e grande número de acessos.

   e) a estrutura geral e os componentes que compõem uma solução de BI não necessariamente
   demandam que cada um de seus componentes e o fluxo de informações corporativas sejam
   delineados de forma lógica. Basta apenas as informações estarem organizadas no data
   warehouse (banco de dados).

        Receita Federal (Analista Tributário) Fluência em Dados                                      37
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Comentários:

(a) Errado. Na origem dos dados estão os aplicativos operacionais/transacional e, não, de gestão.
Esses dados servem de insumo para popular o Data Warehouse após o Processo de ETL;

(b) Errado. Os dados extraídos dos aplicativos operacionais/transacionais passam por uma Stage
Area, são limpos, transformados e só então são carregados no banco de dados dimensional;

(c) Correto. Apesar de não saber o que o examinador quis dizer com “informações da fábrica”, o DW
realmente é o centro da arquitetura e contém dados granulares;

(d) Errado. As informações de BI não apenas disponibilizam dados para consultas e processamento
pelo usuário – elas possuem diversas outras funcionalidades;

(e) Errado. Por conta do Processo de ETL, os componentes devem necessariamente ser delineados
de forma lógica para que os dados sejam armazenados de forma organizada no DW.

                                                                                       Gabarito: Letra C

5. (CESPE / FUB - 2015) Em um ambiente de Business Intelligence, o usuário pode deparar com
   diferentes requisitos de infraestrutura para atender às necessidades de cada uma das instâncias
   dos sistemas analíticos.

Comentários:

Um usuário que desejar utilizar os conceitos de BI precisará de uma infraestrutura arquitetural
específica capaz de extrair, limpar, formatar, transformar e carregar dados estruturados ou não
estruturados de diversas fontes em depósitos de informações que possam ser acessados por
sistemas analíticos. Logo, ele acabará se deparando com diferentes requisitos de infraestrutura
para atender suas necessidades (Ex: Ferramentas de ETL, Data Warehouses; Ferramentas de
Análises de Dados, etc).

                                                                                       Gabarito: Correto

6. (FCC / INFRAERO - 2011) É uma característica de um sistema de Business Intelligence:

   a) Capacidade de cruzar informações de diferentes bancos de dados, gerando relatórios
   analíticos diversos.

   b) Utilização de comandos SQL para a geração de tabelas dinâmicas inteligentes ligadas às
   regras de negócio.

        Receita Federal (Analista Tributário) Fluência em Dados                                      38
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   c) Utilização de Sistemas Baseados em Conhecimento, onde é possível utilizar técnicas de
   Inteligência Artificial na geração de relatórios.

   d) Análise automática de requisitos funcionais e não funcionais, permitindo a geração de
   relatórios gerenciais.

   e) Análise de informações com o intuito de fornecer subsídio para a criação de sistemas
   inteligentes.

Comentários:

(a) Correto, ele realmente permite cruzar informações de fontes diversas para gerar relatórios; (b)
Errado, BI é um processo ou metodologia e não cabe utilizar comandos SQL; (c) Errado, essa não é
uma característica de Business Intelligence; (d) Errado, essa não é uma característica de Business
Intelligence; (e) Errado, essa não é uma característica de Business Intelligence;

                                                                                       Gabarito: Letra A

7. (FCC / MPE-CE - 2013) Em relação ao entendimento do significado do termo Business
   Intelligence (BI) e da solução que provê, a definição que NÃO é coerente com o termo Business
   Intelligence é a que:

   a) consiste em uma metodologia que fornece objetivos de negócios ligados a objetivos de TI,
   provendo métricas e modelos de maturidade para medir a sua eficácia e identificando as
   responsabilidades relacionadas dos donos dos processos de negócios e de TI.

   b) se refere à aplicação de técnicas analíticas para informações sobre condições de negócio no
   sentido de melhorá-las, de uma maneira automatizada, mas com a interpretação e respostas
   humanas, de forma a melhorar a tomada de decisões.

   c) reúne recursos que provêm a habilidade para que a pessoa certa receba a informação
   adequada e no momento correto para tomar a melhor decisão.

   d) consiste em um sistema de negócios que inclui uma estrutura de busca efetiva e acessível,
   acurada, em tempo real, com informações e relatórios que permitam aos líderes das áreas de
   negócio se manterem informados para tomar decisões.

   e) é uma solução fácil de dizer, mas difícil de fazer corretamente pois envolve mudanças na
   forma como a organização conduz uma busca efetiva, bem como, a necessidade de se possuir
   uma base de dados de qualidade para que se possa tomar ações com o objetivo de otimizar a
   performance corporativa.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      39
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Metodologia que fornece objetivos de negócios (?) ligados a objetivos de TI (?), provendo métricas
e modelos de maturidade (?) para medir a sua eficácia e identificando as responsabilidades
relacionadas dos donos dos processos de negócios e de TI (?). Galera, tudo isso trata de um assunto
que não tem absolutamente nada a ver com Business Intelligence – isso é a definição de COBIT
(que é um framework de boas práticas em governança de TI).

                                                                                       Gabarito: Letra A

8. (IBFC / INEP - 2012) A Inteligência Empresarial, ou Business Intelligence, é um termo que foi
   criado por:

   a) EEE
   b) Gartner Group
   c) Ernst & Young
                                                       ==219a34==

   d) PricewaterhouseCoopers
   e) ABNT

Comentários:

O termo Business Intelligence foi criado pelo Gartner Group.

                                                                                       Gabarito: Letra B

9. (AOCP / TCE PA - 2012) Segundo o Gartner Group, é correto afirmar que um BI (Business
   Intelligence) é:

   a) uma política
   b) de informação que especifica regras para compartilhar, disseminar, adquirir, padronizar,
   classificar e inventariar informações.

   b) um banco de dados que armazena os dados históricos de interesse de toda a empresa para a
   tomada de decisão, é também conhecido como Data Warehouse.

   c) a descrição de habilidades das organizações para acessar dados e explorar informações,
   analisando e desenvolvendo percepções e entendimentos a seu respeito.

   d) uma tecnologia de software que visa fornecer informações empresariais por meio de uma
   base de dados.

   e) um conjunto de indicadores de desempenho, conhecidos como KPI, com a finalidade de medir
   qualquer etapa de um processo ou resultado.

Comentários:


        Receita Federal (Analista Tributário) Fluência em Dados                                      40
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

O Gartner Group define BI como as habilidades das corporações de acessar dados e explorar as
informações (normalmente contidas em um Data Warehouse ou Data Mart), analisando-as e
desenvolvendo percepções e entendimentos a seu respeito – o que as permite incrementar e tornar
a tomada de decisões mais pautada em informações. BI não é uma política de informação, nem um
banco de dados, muito menos uma tecnologia de software ou um conjunto de indicadores de
desempenho.

                                                                                       Gabarito: Letra C

10. (CESPE / CORREIOS - 2011) Inteligência empresarial, ou business inteligence, é um termo
    utilizado para descrever as habilidades das corporações para coletar dados e explorar
    informações, analisá-las e desenvolver entendimentos para tomada de melhores decisões.

Comentários:

Definição retirada ipsis litteris do próprio Gartner Group – que foi quem cunhou esse termo.

                                                                                       Gabarito: Correto

11. (ESAF / MPOG - 2010) BI - Business Inteligence:

   a) é uma técnica de otimização da árvore de decisão.

   b) é um método de formação avançada de gestores.

   c) compreende ferramentas de análise de dados para otimizar os processos produtivos de uma
   empresa.

   d) são técnicas, métodos e ferramentas para mineração de dados na área de negócios de uma
   empresa.

   e) são técnicas, métodos e ferramentas de análise de dados para subsidiar processos de decisão
   de uma empresa.

Comentários:

BI é um conjunto de técnicas, métodos e ferramentas de análise de dados para subsidias processos
de decisão de uma empresa – nenhum dos outros itens faz qualquer sentido.

                                                                                       Gabarito: Letra E

        Receita Federal (Analista Tributário) Fluência em Dados                                      41
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

12. (CETAP / DETRAN RR - 2010) Sobre Sistemas de Apoio à Decisão, leia os enunciados seguintes
    e marque a alternativa CORRETA:

   I - O termo Business Inteligence (BI) nada mais é que uma série de conceitos e metodologias
   para auxiliar na tomada de decisões estratégicas nas empresas através principalmente de
   geração de relatórios gerenciais analíticos;

   II - Um Data Warehouse é um banco de dados multidimensional grande, de escopo
   organizacional (ou seja, abrange toda a empresa) e reúne dados de todos os departamentos de
   forma a permitir a busca rápida de informações para auxiliar a tomada de decisões estratégicas;

   III - Um Data Mart é um banco de dados multidimensional de escopo departamental, ou seja,
   abrange apenas um determinado departamento;

   IV - Data Mining (Mineração de dados) é o termo usado para definir uma série de procedimentos,
   técnicas e ferramentas para recuperar e analisar dados de um Data Warehouse ou Data Mart;

   V - Nos Sistemas de Apoio à Decisão é comum desnormalizar os dados para atingir uma melhor
   performance nos Data Mart e Data Warehouse.

   a) Somente o enunciado III está correto.
   b) Os enunciados I, II e III estão corretos.
   c) Os enunciados I, II e V estão corretos.
   d) Somente o enunciado V está correto.
   e) Todos os enunciados estão corretos.

Comentários:

(I) Correto. São conceitos e metodologias, auxiliam na tomada de decisões estratégicas, ajudam a
geração de relatórios gerenciais analíticos;

(II) Correto. DW é realmente um banco de dados multidimensional, possui escopo organizacional e
permite a busca rápida de informações para auxiliar a tomada de decisões estratégicas;

(III) Correto. DM também é um banco de dados multidimensional, mas realmente possui um escopo
departamental;

(IV) Correto. Essa definição está tão genérica que eu acredito que ela poderia ser tanto para
Mineração de Dados quanto para OLAP;

(V) Correto. Desnormalizar é manter dados redundantes no banco de dados. Sistemas de Apoio à
Decisão realmente desnormalizam dados para melhorar o desempenho de DW ou DM.

                                                                                       Gabarito: Letra E

        Receita Federal (Analista Tributário) Fluência em Dados                                      42
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

13. (CESPE / INMETRO - 2009) Entre as operações típicas realizadas em uma organização que
    adota a abordagem de business intelligence, destaca-se o uso de mineração de dados e a
    construção de datawarehouses, ambas empregando bancos de dados relacionais com elevado
    grau de normalização.

Comentários:

Opa! Ambas empregam – em geral – bancos de dados multidimensionais com baixo grau de
normalização (alta redundância de dados).

                                                                                       Gabarito: Errado

14. (CESPE / ANTAQ - 2009) Aplicações de business intelligence (BI) oferecem visões históricas e
    atuais de operações de negócios empregando unicamente dados operacionais.

Comentários:

Na verdade, emprega dados gerenciais consolidados a partir de dados operacionais. Logo, de forma
genérica, emprega tanto dados operacionais quanto dados gerenciais.

                                                                                       Gabarito: Errado

                                                                                           Data warehouse

15. (CESGRANRIO / PETROBRÁS / 2010) Data Warehouse tem por característica ser:

   a) orientado a assuntos.
   b) temporário.
   c) descentralizado.
   d) focalizado em aspectos operacionais.
   e) normalizado.

Comentários:

(a) Correto; (b) Errado, ele é não-volátil; (c) Errado, ele é centralizado; (d) Errado, ele é focado em
aspectos táticos e estratégicos; (e) Errado, ele é desnormalizado.

De acordo com Bill Inmon, um Data Warehouse é uma coleção de dados orientados por assunto,
integrados, variáveis com o tempo e não-voláteis, para dar suporte ao processo de tomada de
decisão.

                                                                                       Gabarito: Letra A


        Receita Federal (Analista Tributário) Fluência em Dados                                       43
        www.estrategiaconcursos.com.br                                                                53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

16. (CESPE / ANATEL – 2014) Em um Data Warehouse (armazém de dados) que apresente a
    característica de ser não volátil, os dados não são atualizados após a inserção inicial.

Comentários:

Nos sistemas transacionais, os dados sofrem diversas alterações como, por exemplo, a inclusão,
alteração e exclusão de dados. No ambiente do Data Warehouse, os dados – antes de serem
carregados – são transformados e limpos. Após essa etapa, esses dados sofrem somente operações
de consulta, sem que possam ser atualizados, sendo essa característica conhecida como não-
volatilidade.

                                                                                       Gabarito: Correto

17. (FGV / INEA/RJ – 2013) Data warehouses são definidos como:

   a) um conjunto de dados integrado, orientados por assunto, variante no tempo e não volátil.

   b) um conjunto de dados integrado, orientados por departamentos, variante no tempo e não
   volátil.

   c) um conjunto de regras, orientadas por departamentos, invariante no tempo e não volátil.

   d) um conjunto de dados integrado, orientados por assunto, variante no tempo e volátil.

   e) um conjunto de regras, orientadas a objeto, invariante no tempo e não volátil.

Comentários:

De acordo com Bill Inmon, um Data Warehouse é uma coleção de dados orientados por assunto,
integrados, variáveis com o tempo e não-voláteis, para dar suporte ao processo de tomada de
decisão.

                                                                                       Gabarito: Letra A

18. (CESPE / SECONT/ES - 2018) Data Warehouse é uma coleção de dados orientados ao assunto,
    que tem como características visão conceitual multidimensional, operações interdimensionais
    irrestritas, dimensões e níveis de agregação ilimitados, sendo que os dados são não voláteis e
    variantes no tempo.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      44
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

Data Warehouse é uma coleção de dados orientados por assunto? Sim, de acordo com Bill Inmon. Ele
tem como característica visão conceitual multidimensional? Sim, Data Warehouse utiliza uma
modelagem multidimensional e, não, modelo entidade-relacionamento. Realiza operações
interdimensionais irrestritas? Sim, há infinitas possibilidades. Dimensões e níveis de agregação são
ilimitados? Sim, você possui diversos níveis de granularidade. Por fim, os dados são não-voláteis e
variantes no tempo, de acordo com Bill Inmon.

                                                                                       Gabarito: Correto

19. (CESPE / TJ/SE - 2018) Os dados armazenados em um DataWarehouse devem estar integrados,
    temporalmente identificados, orientados ao assunto e devem ser protegidos, de modo a se
    evitar o acesso do usuário.

Comentários:

De acordo com Bill Inmon, um Data Warehouse é uma coleção de dados orientados por assunto,
integrados, variáveis com o tempo e não-voláteis, para dar suporte ao processo de tomada de
decisão. No entanto, os dados devem estar protegidos para evitar o acesso do usuário não
autorizado, mas devem estar acessíveis aos usuários autorizados.

                                                                                       Gabarito: Errado

20. (FGV / IBGE – 2017) Pedro foi contratado para desenvolver uma solução de integração de dados
    a partir de diversas fontes heterogêneas com o objetivo de apoiar a análise de informações. A
    solução deve ter as seguintes características: Não-volátil, Histórico, Orientado a Assunto e
    Variante no Tempo. Para isso, Pedro deve desenvolver um:

   a) Sistema de Informação Transacional;
   b) Data Warehouse;
   c) Otimizador de Consultas;
   d) Sistema Gerenciador de Banco de Dados;
   e) Banco de Dados Distribuído.

Comentários:

Acho que já ficou claro como é importante a definição de Bill Inmon: Data Warehouse é uma coleção
de dados orientados por assunto, integrados, variáveis com o tempo e não-voláteis, para dar
suporte ao processo de tomada de decisão.

                                                                                       Gabarito: Letra B

        Receita Federal (Analista Tributário) Fluência em Dados                                      45
        www.estrategiaconcursos.com.br                                                               53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                LISTA DE QUESTÕES – DIVERSAS BANCAS
                                                                                       Sistemas de suporte à decisão

1. (CESPE / SEFAZ-RS - 2019) A respeito do BI (business intelligence), assinale a opção correta:

   a) O BI consiste na transformação metódica e consciente das informações exclusivamente
   prestadas pelos tomadores de decisão em novas formas de conhecimento, para evolução dos
   negócios e dos resultados organizacionais.

   b) ETL é o processo de análise de dados previsto pela arquitetura de BI.

   c) As técnicas do BI objetivam definir regras para a formatação adequada dos dados, com vista
   a sua transformação em depósitos estruturados de informações, sem considerar a sua origem.

   d) O repositório de dados analíticos de BI é representado pelas diversas bases de dados
   relacionais e por repositórios de dados que utilizem modelagens relacionais.

   e) A camada de apresentação de uma arquitetura de BI é aquela em que as informações são
   organizadas e centralizadas.

2. (IADES / APEX BRASIL - 2018) No jargão empresarial moderno, business intelligence é o (a):

   a) mesmo que data warehouse, já que ambos têm a finalidade de armazenar dados e criar
   relatórios gerenciais.

   b) inteligência artificial dos computadores modernos.

   c) inteligência da empresa que tem por base os sistemas modernos de informatização.

   d) processo de recolhimento e tratamento de informações que apoiarão a gestão de um
   negócio.

   e) conjunto de relatórios preparados pelos executivos de uma empresa.

3. (CESPE / CGM JOÃO PESSOA - 2018) Business intelligence pode ser definido como um processo
   inteligente de coleta, organização, análise, compartilhamento e monitoração de dados que,
   depois de processados, geram informações para o suporte e para a tomada de decisões no
   ambiente de negócios.

4. (VUNESP / MPE-SP - 2016) Observe o esquema a seguir, que representa a estrutura geral e os
   componentes de uma solução de Business Intelligence – BI (Inteligência Empresarial ou
   Inteligência de Negócios).


        Receita Federal (Analista Tributário) Fluência em Dados                                                  46
        www.estrategiaconcursos.com.br                                                                           53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   Sobre esse esquema, é correto afirmar que:

   a) a camada “origem de dados” é o ambiente operacional onde se encontram os aplicativos de
   gestão, com alto grau de interação sistêmica entre eles (os aplicativos), e é onde os
   consumidores e fornecedores interagem diretamente com os sistemas administrativos.

   b) na camada ETL (do inglês Extract Transform Load – Extração, Transformação e Carga), os
   dados extraídos dos aplicativos de gestão são inseridos diretamente no banco de dados.

   c) no centro dessa arquitetura, está o data warehouse (banco de dados), que além de conter
   dados granulares integrados, é considerado o “coração” de informações da fábrica.

   d) na última camada, à direita, está a plataforma de BI, representando um conjunto de
   ferramentas que apenas disponibiliza dados para consulta e processamento pelo usuário, com
   alta disponibilidade e grande número de acessos.

   e) a estrutura geral e os componentes que compõem uma solução de BI não necessariamente
   demandam que cada um de seus componentes e o fluxo de informações corporativas sejam
   delineados de forma lógica. Basta apenas as informações estarem organizadas no data
   warehouse (banco de dados).

5. (CESPE / FUB - 2015) Em um ambiente de Business Intelligence, o usuário pode deparar com
   diferentes requisitos de infraestrutura para atender às necessidades de cada uma das instâncias
   dos sistemas analíticos.

6. (FCC / INFRAERO - 2011) É uma característica de um sistema de Business Intelligence:

   a) Capacidade de cruzar informações de diferentes bancos de dados, gerando relatórios
   analíticos diversos.

   b) Utilização de comandos SQL para a geração de tabelas dinâmicas inteligentes ligadas às
   regras de negócio.

   c) Utilização de Sistemas Baseados em Conhecimento, onde é possível utilizar técnicas de
   Inteligência Artificial na geração de relatórios.

        Receita Federal (Analista Tributário) Fluência em Dados                                47
        www.estrategiaconcursos.com.br                                                         53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   d) Análise automática de requisitos funcionais e não funcionais, permitindo a geração de
   relatórios gerenciais.

   e) Análise de informações com o intuito de fornecer subsídio para a criação de sistemas
   inteligentes.

7. (FCC / MPE-CE - 2013) Em relação ao entendimento do significado do termo Business
   Intelligence (BI) e da solução que provê, a definição que NÃO é coerente com o termo Business
   Intelligence é a que:

   a) consiste em uma metodologia que fornece objetivos de negócios ligados a objetivos de TI,
   provendo métricas e modelos de maturidade para medir a sua eficácia e identificando as
   responsabilidades relacionadas dos donos dos processos de negócios e de TI.

   b) se refere à aplicação de técnicas analíticas para informações sobre condições de negócio no
   sentido de melhorá-las, de uma maneira automatizada, mas com a interpretação e respostas
   humanas, de forma a melhorar a tomada de decisões.

   c) reúne recursos que provêm a habilidade para que a pessoa certa receba a informação
   adequada e no momento correto para tomar a melhor decisão.

   d) consiste em um sistema de negócios que inclui uma estrutura de busca efetiva e acessível,
   acurada, em tempo real, com informações e relatórios que permitam aos líderes das áreas de
   negócio se manterem informados para tomar decisões.

   e) é uma solução fácil de dizer, mas difícil de fazer corretamente pois envolve mudanças na
   forma como a organização conduz uma busca efetiva, bem como, a necessidade de se possuir
   uma base de dados de qualidade para que se possa tomar ações com o objetivo de otimizar a
   performance corporativa.

8. (IBFC / INEP - 2012) A Inteligência Empresarial, ou Business Intelligence, é um termo que foi
   criado por:

   a) EEE
   b) Gartner Group
   c) Ernst & Young
   d) PricewaterhouseCoopers
   e) ABNT

9. (AOCP / TCE PA - 2012) Segundo o Gartner Group, é correto afirmar que um BI (Business
   Intelligence) é:

        Receita Federal (Analista Tributário) Fluência em Dados                               48
        www.estrategiaconcursos.com.br                                                        53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   a) uma política de informação que especifica regras para compartilhar, disseminar, adquirir,
   padronizar, classificar e inventariar informações.

   b) um banco de dados que armazena os dados históricos de interesse de toda a empresa para a
   tomada de decisão, é também conhecido como Data Warehouse.

   c) a descrição de habilidades das organizações para acessar dados e explorar informações,
   analisando e desenvolvendo percepções e entendimentos a seu respeito.

   d) uma tecnologia de software que visa fornecer informações empresariais por meio de uma
   base de dados.

   e) um conjunto de indicadores de desempenho, conhecidos como KPI, com a finalidade de medir
   qualquer etapa de um processo ou resultado.

10. (CESPE / CORREIOS - 2011) Inteligência empresarial, ou business inteligence, é um termo
    utilizado para descrever as habilidades das corporações para coletar dados e explorar
    informações, analisá-las e desenvolver entendimentos para tomada de melhores decisões.

11. (ESAF / MPOG - 2010) BI - Business Inteligence:

   a) é uma técnica de otimização da árvore de decisão.

   b) é um método de formação avançada de gestores.

   c) compreende ferramentas de análise de dados para otimizar os processos produtivos de uma
   empresa.

   d) são técnicas, métodos e ferramentas para mineração de dados na área de negócios de uma
   empresa.

   e) são técnicas, métodos e ferramentas de análise de dados para subsidiar processos de decisão
   de uma empresa.

12. (CETAP / DETRAN RR - 2010) Sobre Sistemas de Apoio à Decisão, leia os enunciados seguintes
    e marque a alternativa CORRETA:

   I - O termo Business Inteligence (BI) nada mais é que uma série de conceitos e metodologias
   para auxiliar na tomada de decisões estratégicas nas empresas através principalmente de
   geração de relatórios gerenciais analíticos;

   II - Um Data Warehouse é um banco de dados multidimensional grande, de escopo
   organizacional (ou seja, abrange toda a empresa) e reúne dados de todos os departamentos de
   forma a permitir a busca rápida de informações para auxiliar a tomada de decisões estratégicas;

        Receita Federal (Analista Tributário) Fluência em Dados                                49
        www.estrategiaconcursos.com.br                                                         53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   III - Um Data Mart é um banco de dados multidimensional de escopo departamental, ou seja,
   abrange apenas um determinado departamento;

   IV - Data Mining (Mineração de dados) é o termo usado para definir uma série de procedimentos,
   técnicas e ferramentas para recuperar e analisar dados de um Data Warehouse ou Data Mart;

   V - Nos Sistemas de Apoio à Decisão é comum desnormalizar os dados para atingir uma melhor
   performance nos Data Mart e Data Warehouse.

   a) Somente o enunciado III está correto.
   b) Os enunciados I, II e III estão corretos.
   c) Os enunciados I, II e V estão corretos.
   d) Somente o enunciado V está correto.
   e) Todos os enunciados estão corretos.

13. (CESPE / INMETRO - 2009) Entre as operações típicas realizadas em uma organização que
    adota a abordagem de business intelligence, destaca-se o uso de mineração de dados e a
    construção de datawarehouses, ambas empregando bancos de dados relacionais com elevado
    grau de normalização.

14. (CESPE / ANTAQ - 2009) Aplicações de business intelligence (BI) oferecem visões históricas e
    atuais de operações de negócios empregando unicamente dados operacionais.

                                                                                       Data warehouse

15. (CESGRANRIO / PETROBRÁS / 2010) Data Warehouse tem por característica ser:

   a) orientado a assuntos.
   b) temporário.
   c) descentralizado.
   d) focalizado em aspectos operacionais.
   e) normalizado.

16. (CESPE / ANATEL – 2014) Em um Data Warehouse (armazém de dados) que apresente a
    característica de ser não volátil, os dados não são atualizados após a inserção inicial.

17. (FGV / INEA/RJ – 2013) Data warehouses são definidos como:

   a) um conjunto de dados integrado, orientados por assunto, variante no tempo e não volátil.

   b) um conjunto de dados integrado, orientados por departamentos, variante no tempo e não
   volátil.

        Receita Federal (Analista Tributário) Fluência em Dados                                   50
        www.estrategiaconcursos.com.br                                                            53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

   c) um conjunto de regras, orientadas por departamentos, invariante no tempo e não volátil.

   d) um conjunto de dados integrado, orientados por assunto, variante no tempo e volátil.

   e) um conjunto de regras, orientadas a objeto, invariante no tempo e não volátil.

18. (CESPE / SECONT/ES - 2018) Data Warehouse é uma coleção de dados orientados ao assunto,
    que tem como características visão conceitual multidimensional, operações interdimensionais
    irrestritas, dimensões e níveis de agregação ilimitados, sendo que os dados são não voláteis e
    variantes no tempo.

19. (CESPE / TJ/SE - 2018) Os dados armazenados em um DataWarehouse devem estar integrados,
    temporalmente identificados, orientados ao assunto e devem ser protegidos, de modo a se
    evitar o acesso do usuário.                        ==219a34==

20. (FGV / IBGE – 2017) Pedro foi contratado para desenvolver uma solução de integração de dados
    a partir de diversas fontes heterogêneas com o objetivo de apoiar a análise de informações. A
    solução deve ter as seguintes características: Não-volátil, Histórico, Orientado a Assunto e
    Variante no Tempo. Para isso, Pedro deve desenvolver um:

   a) Sistema de Informação Transacional;
   b) Data Warehouse;
   c) Otimizador de Consultas;
   d) Sistema Gerenciador de Banco de Dados;
   e) Banco de Dados Distribuído.

        Receita Federal (Analista Tributário) Fluência em Dados                                 51
        www.estrategiaconcursos.com.br                                                          53

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 06

                          GABARITO – DIVERSAS BANCAS

1.     LETRA C
2.     LETRA D
3.     CORRETO
4.     LETRA C
5.     CORRETO
6.     LETRA A
7.     LETRA A
8.     LETRA B
9.     LETRA C
10.    CORRETO
11.    LETRA E
12.    LETRA E
13.    ERRADO
14.    ERRADO
15.    LETRA A
16.    CORRETO
17.    LETRA A
18.    CORRETO
19.    ERRADO
20.    LETRA B

        Receita Federal (Analista Tributário) Fluência em Dados                        52
        www.estrategiaconcursos.com.br                                                 53

                                    


---

---
