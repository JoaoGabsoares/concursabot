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
arquivo_origem: Aula 04_Apostila.txt
tipo_material: Curso Teórico Base
aula_numero: '04'
titulo_aula: Fluência em Dados
---

# Fluência em Dados

Aula 03
                          Receita Federal (Analista Tributário)
                                             Fluência em Dados

                                                           Autor:
                                     Diego Carvalho, Emannuelle
                        Gouveia Rolim, Equipe Informática
                                           e TI, Renato da Costa

                                            23 de Setembro de 2025

---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 03

                                                                                     Índice
1) Análise de Informações - Fluência de Dados - Teoria


2) Análise de Informações - Governança de Dados - Teoria


3) Análise de Informações - Dados, Atributos e Métricas - Teoria


4) Questões Comentadas - Análise de Informações - Fluência de Dados


5) Questões Comentadas - Análise de Informações - Governança de Dados


6) Lista de Questões - Análise de Informações - Fluência de Dados


7) Lista de Questões - Análise de Informações - Governança de Dados

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                          120

                                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                     FLUÊNCIA DE DADOS
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

A ascensão da Análise de Dados trouxe várias palavras da moda: Análise Preditiva, Análise
Descritiva, Data Mining, Big Data e... Fluência de Dados! Acima do Machine Learning, Business
Intelligence e Real-time Analytics, a fluência de dados pode ser o maior obstáculo para as
organizações entenderem seus dados e obterem vantagens competitivas de longo prazo. Mas o que
seria a fluência de dados?

Ora, tem gente que é fluente em diversos idiomas, tais como inglês, francês, espanhol, entre outros.
De forma análoga, ser fluente em dados é como ser fluente em um idioma, isto é, permite que
pessoas expressem ideias sobre dados em um idioma compartilhado. Em um contexto de negócios,
a fluência de dados conecta os funcionários em todas as funções por meio de um conjunto de
padrões, processos, ferramentas e termos.

Funcionários fluentes em dados podem transformar dados brutos em informações, porque eles
entendem como interpretá-los, conhecem os dados que estão e os que não estão disponíveis e
como usá-los adequadamente. A fluência de dados rejeita a ideia de que apenas alguns poucos são
guardiões de informações; em vez disso, espalham conhecimento, ampliam o acesso a dados em
uma organização e, como resultado, melhoram a tomada de decisões para todos.

A fluência de dados permite que as organizações expressem ideias sobre dados em um idioma
compartilhado. Ele conecta os funcionários em diferentes funções, através de um conjunto de
qualidade, processos, ferramentas e definições. Esses funcionários podem transformar dados
brutos e primitivos em informações disponíveis porque estão familiarizados com que tipo de dados
estão e não estão disponíveis, como interpretá-los e como utilizá-los adequadamente.

É bom sempre salientar que dado bruto sem nenhuma interpretação não é um ativo valioso – é um
ativo custoso. Coletar, armazenar e gerenciar dados custa dinheiro. Os dados só se tornam valiosos
quando você começa a obter insights sobre eles e a aplicá-los ativamente em seu contexto de
negócio. Simplesmente criar um painel melhor ou visualizações de dados mais cuidadosamente
projetadas é útil, mas não é a solução por si só.


        Receita Federal (Analista Tributário) Fluência em Dados                                               3
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Antes de prosseguirmos, é importante mencionar uma visão ligeiramente diferente que o autor
Jordan Morrow traz em seu livro Be Data Literate: The Data Literacy Skills Everyone Needs to
Succeed. Ele afirma que a fluência de dados é a capacidade de falar e compreender a linguagem dos
dados; é essencialmente uma capacidade de se comunicar com e sobre os dados. No entanto, ele
diferencia Fluência de Dados (Data Fluency) e Alfabetização de Dados (Data Literacy).

                                                       ==219a34==

De acordo com o autor, em diferentes casos ao redor do mundo, o termo fluência de dados às vezes
tem sido usado de forma intercambiável com alfabetização de dados. Já para ele, a alfabetização de
dados é a capacidade de ler, trabalhar, analisar e se comunicar com dados; e a fluência de dados é
a capacidade de falar e entender a linguagem dos dados. Logo, a fluência de dados desempenha
um papel direto na última parte da definição de alfabetização de dados: a comunicação com dados.

Como não temos nenhuma referência anterior a esse tema em questões de provas anteriores, não
sabemos como ele será cobrado, logo é importante ter essas duas definições em mente. Para alguns
autores, ambos os conceitos são sinônimos; e para outros, a fluência de dados está dentro da
alfabetização de dados, sendo o primeiro conceito referente basicamente a poder falar e entender
a linguagem dos dados e o segundo mais abrangente: permite analisar e se comunicar com dados.

O poder da fluência de dados está no fluxo livre de informações: de cientistas de dados para
analistas de dados, para tomadores de decisões, para a equipe de executivos, para a força de
trabalho. Podemos ver que o livre fluxo de informações é incrível para o sucesso organizacional e
devemos utilizar essa capacidade de falar o mesmo idioma para ajudar a impulsionar o sucesso
analítico dos dados. Por fim, o autor afirma que a alfabetização de dados tem oito pilares:

            PILARES                                                 DESCRIÇÃO
    ESTRATÉGIA DE As organizações podem ter uma ideia não realista sobre a implementação de estratégias de
                   dados e analytics. Empresas normalmente investem em ferramentas, capacitação da equipe
 DADOS E ANALYTICS de dados, plataformas, mas muitas vezes não tem uma estratégia desenhada de como

        Receita Federal (Analista Tributário) Fluência em Dados                                          4
        www.estrategiaconcursos.com.br                                                                  120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                    alcançar sucesso com esses elementos. Essa estratégia deve apresentar como os dados
                    podem se tornar ação no futuro.

                    Um dos principais desafios da fluência em dados é a necessidade em explicar algoritmos de IA
                    (Inteligência Artificial) e os meios pelos quais o algoritmo chegou a determinado resultado.
CIÊNCIA DE DADOS    Cientistas de Dados e colaboradores do negócio que trabalham com dados têm o desafio de
                    entender os modelos e seus resultados.

                    A área que ajuda a simplificar e dar visibilidade dos produtos de dados para os clientes é o
                    mundo da visualização de dados. Todo conjunto de dados esconde uma história. O desafio é
 VISUALIZAÇÃO DE
                    utilizar as ferramentas de visualização de dados (Qlik, por exemplo) para apresentar qual
          DADOS     história esses dados contam.

                    Executivos precisam ser fluentes em dados e fomentar que os colaboradores também sejam.
                    O programa de fluência em dados é um programa educacional, e como tal, ele precisa ter um
                    patrocinador; um patrocinador que possa tornar sua adoção e realização alinhada aos
   EXECUTIVAS DE
                    objetivos estratégicos da empresa. Além disso, os executivos que utilizam os dados para
       EMPRESAS     embasar suas decisões tem melhores resultados, se comparados a executivos que tomam
                    decisões baseadas em feeling ou em experiências pessoais do passado.

                    Se existe uma barreira para o sucesso na utilização dos dados e estratégias de analytics é a
                    cultura empresarial. Nós nos sentimos confortáveis em fazer coisas de forma conhecida.
                    Quando implementamos uma mudança em uma cultura, saímos da nossa zona de conforto. E
          CULTURA   por isso tornar a cultura da empresa data driven requer o esforço de fazer com que os
                    colaboradores possam tomar decisões baseadas em dados, seja no âmbito operacional, tático
                    ou estratégico.

                    A qualidade de dados é imperativo para o sucesso de estratégias de analytics nas
                    organizações. Dados sem qualidade não podem gerar decisões confiáveis. Garbage In,
    QUALIDADE DE    Garbage Out (GIGO) é uma expressão atribuída ao funcionário da IBM George Fuechsel que
          DADOS     significa, "lixo entra, lixo sai". Se a informação não gera credibilidade, os colaboradores podem
                    se tornar resistentes à utilização dos produtos de dados disponibilizados.

                    Um ambiente com governança gera confiança e segurança de que os dados podem ser
                    utilizados de maneira ampla. Rotinas de cargas de dados, segurança e controle de acesso são
                    essenciais para que o ambiente de dados esteja em conformidade com o cenário
  GOVERNANÇA DE     organizacional. A fluência em dados se beneficia do processo de governança de dados, já que
         DADOS      esta permite que saibamos o ciclo de vida que o dado percorre desde sua ingestão até o
                    descarte, garante que os dados estejam atualizados tempestivamente e que o acesso só
                    estará disponível àqueles que tem autorização para acessá-lo.

                    A implementação da lei geral de proteção de dados (LGPD) veio para regular e proteger os
                    dados dos indivíduos. As empresas se adequaram para tratar e proteger os dados que
                    tramitam nas organizações. A fluência em dados ajuda a entender o ciclo de vida dos dados
        ÉTICA E     (por onde o dado passa para cumprir a sua função), questionar se os dados estão corretos, se
REGULAMENTAÇÃO      a empresa possui as devidas proteções em relação aos dados, dentre tantas outras
                    possibilidades. A fluência em dados ainda nos ajuda a entender onde os dados estão sendo
                    usados de forma ética e não-ética, dando às pessoas o conhecimento necessário para fazer
                    esse tipo de avaliação.

      Receita Federal (Analista Tributário) Fluência em Dados                                                       5
      www.estrategiaconcursos.com.br                                                                               120

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Importância e Aplicações

Por que a fluência de dados é importante? Toda empresa quer ser mais orientada por dados, mas
apenas algumas poucas empresas atingem esse objetivo. Para empresas que falham, cultivar uma
cultura corporativa fluente em dados é a resposta. A fluência de dados impulsiona a tomada de
decisões e, quando a cultura de uma empresa promove a acessibilidade, interpretação e relevância
de seus dados, as equipes tomam decisões com confiança e rapidez.

O poder da descoberta do conhecimento motiva os funcionários a fazerem mais perguntas,
sabendo que a resposta está próxima. Quando equipes e departamentos de uma organização estão
em sintonia com os dados, é mais fácil definir KPIs (Key Performance Indicators) e acompanhar os
resultados. Finalmente, a fluência de dados promove a curiosidade dentro da organização, dado
que os instiga a sempre descobrir o que está por trás dos dados.

Quando os funcionários estão aprendendo coisas novas, eles geralmente estão mais envolvidos em
suas funções, levando a perguntas mais inteligentes, melhor análise de dados e taxas gerais de
produtividade mais altas. Vamos imaginar isso dentro do serviço público? Diversos órgãos são
responsáveis pela criação e execução de políticas públicas. Por exemplo: vamos investir mais em
educação primária ou educação superior?

Vamos investir em saneamento básico? Como? Quanto? Quando? Por quê? Qual é o resultado esperado
daqui a quatro anos? Um órgão fluente em dados vai buscar responder a essas perguntas com dados.
Idealmente, todos os órgãos deveriam ser fluentes em dados, isto é, buscar sempre a resposta para
qualquer pergunta baseado em dados. Dessa forma, órgãos (e organizações em geral) poderão
tomar decisões melhores e mais informadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                6
        www.estrategiaconcursos.com.br                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Isso permite também que todas as partes interessadas estejam alinhadas sobre o que precisa ser
feito, quando, quem e como. Dessa forma, uma organização se torna capaz de cultivar a cultura de
aprendizagem e também de transparência, e as partes interessadas (stakeholders) poderão tomar
decisões informadas, medi-las e iterá-las, melhorando assim a produtividade, dentre diversos
outros aspectos.

O caminho para a alfabetização de dados tem seus pontos fortes, bem como desafios. Para muitas
organizações, os benefícios são bem conhecidos – aumento da produtividade, vantagem
competitiva – enquanto os riscos são menos definidos. Ao aprimorar a força de trabalho existente
para se tornar mais fluente em dados, é importante notar que nenhum conjunto único de
habilidades será suficiente para cada pessoa.

Assim como as universidades oferecem diferentes faixas acadêmicas, as organizações devem criar
programas que atendam a diferentes funções e departamentos. Além disso, as empresas que
procuram promover o talento com dados também devem começar no nível de lideranças, isto é, as
empresas que são capazes de preparar programas de dados completos e iniciar mudanças nos níveis
mais altos estarão mais bem posicionadas futuramente. Vejamos as principais aplicações:

       APLICAÇÕES                                                 descrição
                     A capacidade da empresa de entender os dados e traduzi-los em análises perspicazes deve
        TOMADA DE direcionar a organização para longe de fazer escolhas cegas ou tendenciosas. A fluência de
          DECISÕES dados suporta uma abordagem sistemática e baseada em metas durante todo o processo de
        INFORMADA tomada de decisão, garantindo assim que decisões objetivas e impactantes sejam tomadas.

                     Em uma organização imatura de dados, mais tempo e energia são gastos decodificando
                     gráficos e tabelas, em vez de ter conversas significativas. Um dos obstáculos em tais
      MELHORIA DA
                     transformações reside na falta de comunicação e na incompreensão dos dados. Promover um
        EFICIÊNCIA   ambiente fluente em dados permite que os indivíduos entendam e resolvam os problemas
                     rapidamente.
                     É difícil entender o progresso de uma empresa com dados incompletos ou ausentes.
                     Visualizações apropriadas e comunicação clara sobre as principais métricas ajudam a iluminar
          MELHOR
                     as prioridades e qual deve ser o próximo curso de ação.
    TRANSPARÊNCIA

                     Conversas sobre dados geralmente levantam mais perguntas do que respostas. Em uma
       CULTIVO DA organização onde a comunicação clara é estabelecida, essas questões podem ser valiosas. Elas
       CULTURA DE podem inspirar o pensamento criativo e moldar a discussão em direção a um conhecimento
    APRENDIZAGEM mais profundo, melhores insights e mudanças positivas.


Níveis de Proficiência

E como uma organização pode se tornar fluente em dados? O primeiro passo é a avaliação do estado
atual, que inclui a infraestrutura de dados existente na organização e o nível de competência para
lidar com dados em todas as unidades de negócios. A avaliação inicial ajuda a identificar uma linha

        Receita Federal (Analista Tributário) Fluência em Dados                                                 7
        www.estrategiaconcursos.com.br                                                                         120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

de base (baseline) da proficiência dos funcionários em relação aos dados. Em outras palavras, a
avaliação inicial permite visualizar uma referência para medir o progresso da organização.

Ao mesmo tempo, as organizações precisam estar cientes de seus objetivos estratégicos no que se
refere tanto à análise de dados quanto à fluência de dados. Nesse sentido, essas avaliações não
devem ser realizadas isoladamente, mas – sim – dentro do contexto dos objetivos gerais de
negócios. Logo, é de extrema importância abordar questões-chave durante o período de avaliação
do estado atual, tais como:

Quem são os principais atores e quem pode atuar como administradores e proprietários de dados? Eles
podem identificar e comunicar as lacunas em seus conjuntos de dados? Quais dados estão disponíveis
e quais são as estruturas de dados existentes? Quais segmentos de negócios têm recursos de dados
fracos? Como é o ecossistema de dados do estado de destino? Como a fluência de dados se encaixa nas
metas e objetivos estratégicos mais amplos da empresa?

O segundo passo é cuidar do treinamento de funcionários. O aprimoramento da qualificação é uma
maneira de aumentar gradualmente a fluência de dados de uma organização, o que pode resolver
uma variedade de problemas e responder até mesmo a perguntas altamente especializadas. A
qualificação permite tornar funcionários fluentes em dados de modo que eles consigam analisar
dados que ainda não foram analisados.

Várias empresas já investiram na qualificação de seus funcionários em um esforço para se envolver
com a era digital. Por exemplo: a AT&T iniciou um projeto de US$ 1 bilhão e 10 anos para capacitar
cerca de 125.000 de seus funcionários. Da mesma forma, o Airbnb avançou em sua própria
Universidade de Dados privada que introduziu habilidades básicas na organização e os ensinou a
tomar decisões precisas e baseadas em dados.

Independentemente da estratégia, isso destaca que a cultura da organização deve ser propícia à
inovação digital e, por sua vez, à adoção de novas abordagens para a aprendizagem. Em todo caso,
o nível de proficiência em fluência de dados de uma organização pode variar bastante baseado em
sua capacidade tecnológica de gerar enormes quantidades de dados e o nível de conhecimento
analítico de seus funcionários. Nesse sentido, temos quatro níveis de proficiência:

             NÍVEL                                                DESCRIÇÃO
                     São organizações que não fizeram investimentos para criar uma infraestrutura de coleta e
                     análise de dados em tempo real. Como resultado, eles não possuem os dados necessários para
    Conhecimento
                     inteligência de negócios e fluência de dados de longo prazo.
      Rudimentar

                     São organizações que possuem a tecnologia e amplo acesso aos dados, mas não níveis de
                     conhecimento e habilidade necessários para explorar os dados completamente e usá-los para
    Alfabetização
                     a tomada de decisões importantes. Como essas empresas têm os meios para coletar e analisar
           básica    grandes quantidades de dados, elas estão em melhor posição para obter fluência de dados,
                     pois precisam apenas aprimorar as habilidades de seus funcionários nos diferentes níveis.

        Receita Federal (Analista Tributário) Fluência em Dados                                               8
        www.estrategiaconcursos.com.br                                                                       120

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

                         As organizações que se enquadram nesta categoria possuem habilidades analíticas de dados
                         impressionantes, mas o acesso aos dados é limitado a funcionários pertencentes
              Alto
                         exclusivamente a algumas funções. Como as organizações que se enquadram na segunda
      conhecimento       categoria, essas empresas também podem se considerar bem posicionadas para obter
                         fluência de dados.
                         Essas organizações atingem o equilíbrio ideal entre recursos analíticos de dados sofisticados
                         e uma infraestrutura robusta de coleta e análise de dados. Além disso, essas organizações têm
               Fluente
                         estratégias para manter sua cultura à prova de balas por vários anos. Essencialmente, as
              em dados   empresas precisam investir em tecnologia e qualificação para subir a escada no espectro da
                         fluência.


Framework

Em síntese, podemos afirmar que a fluência de dados é a habilidade de utilizar a linguagem dos
dados para trocar e explorar ideias que são importantes para uma organização de forma fluida. É
importante salientar que, embora enfatizemos as organizações, a fluência de dados também se
aplica a indivíduos – todo mundo precisa de habilidades para ler, escrever, ouvir e falar utilizando a
linguagem dos dados. Para tal, existe um framework1 de fluência de dados:

1 Framework é basicamente uma série de ações e estratégias que visam solucionar um problema bem específico. Assim, quando se deparam com
esse cenário, os profissionais recorrem a um conjunto pronto de abordagens e otimizam os seus resultados.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                    9
          www.estrategiaconcursos.com.br                                                                                            120

                                           


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

A estrutura de fluência de dados é composta por quatro elementos fundamentais. Os elementos
são agrupados ao longo de duas dimensões. Ao longo da dimensão vertical, há uma distinção entre
as capacidades necessárias em um nível individual (superior) e no nível organizacional (inferior). Ao
longo da dimensão horizontal, você pode focar no público, ou consumidores, de dados (à esquerda)
separados dos autores, ou produtores, de produtos de dados (à direita).

Organizações têm suas próprias maneiras de fazer as coisas e muitas vezes um conjunto intangível
de convenções e comportamentos esperados. Equipes moldam e são moldadas por esses processos
e cultura. É importante desenvolver habilidades de fluência de dados em um nível individual e criar
um ambiente no qual a fluência de dados floresça. Ambos são necessários para criar uma
organização fluente em dados.

Indivíduos treinados em comunicação com dados ficarão frustrados em uma organização sem as
ferramentas e expectativas que se alinham com suas habilidades. Da mesma forma, os melhores
esforços dos líderes para moldar uma cultura de dados fluentes farão pouco progresso sem
indivíduos que tenham a capacidade de se envolver com os dados. Logo, temos que combinar tanto
a cultura de fluência de dados com indivíduos capacitados, treinados e qualificados.

A fluência de dados é a troca de ideias com dados como meio. Sem ambos os lados de uma troca,
nenhuma mensagem pode ser transmitida. No entanto, separar as pessoas em consumidores ou
produtores de conteúdo de dados é um pouco simplista; a mesma pessoa pode desempenhar
ambos os papéis em momentos diferentes. A equipe de vendas de uma organização pode consumir
relatórios sobre desempenho organizacional, tendências de produtos e etc.

Ao mesmo tempo, a equipe de vendas pode comunicar ao seu gerente sobre seu desempenho com
análises de dados mais aprofundadas, em vez de reclamações pessoais sobre uma dificuldade
genérica em converter contatos em clientes. Dentro do framework, é possível aprender como
construir um grupo de consumidores de dados potenciais e uma cultura que facilite o entendimento
compartilhado dos dados.

Do lado do produtor, o framework oferece orientação sobre como ensinar as habilidades para
comunicação eficaz e os sistemas necessários para tornar esses produtores bem-sucedidos.

Comsumidores de Dados

        Receita Federal (Analista Tributário) Fluência em Dados                                   10
        www.estrategiaconcursos.com.br                                                            120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Se a fluência de dados é a troca fluida de ideias usando dados, a alfabetização de dados é a
capacidade dos indivíduos de entender e extrair significado dos dados. Você deve começar por aqui,
porque atingir um público interessado e informado talvez seja a condição mais fundamental para
uma organização fluente em dados. O famoso experimento de pensamento filosófico pergunta: “Se
uma árvore cai em uma floresta e ninguém está por perto para ouvi-la, ela faz barulho?”.

Ou seja, algo existe se não for percebido? Seus dados são importantes sem alguém para lê-los, entendê-
los e interpretá-los? No entanto, os dados são uma linguagem relativamente nova para a maioria
das pessoas. O objetivo da alfabetização de dados, como a alfabetização de leitura, é desenvolver
o controle sobre a compreensão de nível superficial para que o leitor “possa se concentrar na
compreensão dos níveis mais profundos de significado embutidos no texto”.

Leva tempo para sair do domínio do vocabulário para a internalização instantânea do significado. É
uma viagem que vale a pena porque esta nova linguagem de dados é útil para interpretar o seu
mundo. Pode-se argumentar que os dados se tornarão uma nova língua franca, ou seja, uma língua
sistematicamente utilizada para facilitar a comunicação possível entre pessoas que não
compartilham uma língua materna.

Nesse sentido, o elemento mais fundamental do framework é o indivíduo ou o consumidor de
dados. Permitir que esses indivíduos entendam e extraiam um significado mais profundo dos dados
é a condição fundamental para uma organização fluente em dados. É preciso mais do que um
ouvinte solitário para dar significado aos dados. Quando os indivíduos são informados, eles podem
participar de um diálogo abrangente em torno desses dados.

Em suma, podemos dizer que se tornar alfabetizado em dados se resume a ser capaz de fazer e
responder a três perguntas sobre dados:

   ▪   Pergunta 1: De onde vêm os dados? Não simplesmente que banco de dados ou sistema. Em
       vez disso, que comportamento da vida real os dados refletem? Qual é o escopo e a
       granularidade dos dados? E o que os campos de dados realmente significam?

   ▪   Pergunta 2: O que posso aprender com os dados? As pessoas precisam aprender a
       interpretar gráficos, reconhecer o inesperado e contextualizar os dados por meio da
       comparação.

   ▪   Pergunta 3: O que posso fazer com ele? A capacidade de agir sobre os dados requer uma
       compreensão da validade e confiabilidade dos insights e ver como os insights se conectam
       às decisões disponíveis para você.

Produtores de Dados

        Receita Federal (Analista Tributário) Fluência em Dados                                    11
        www.estrategiaconcursos.com.br                                                             120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Nem sempre, mas com muita frequência, os autores de comunicações de dados abandonam seu
papel. É comum em nosso trabalho nos depararmos com tabelas de dados brutos entregues como
“relatórios”; longas apresentações de PowerPoint com slide após slide de gráficos repetitivos; e
painéis densamente repletos de figuras coloridas. O que os autores estão realmente dizendo com
esses produtos de dados é:

   ▪   Não sei o que é importante nos dados.
   ▪   Não respeito o tempo e a atenção do meu público.
   ▪   Não sei como comunicar dados visualmente.
   ▪   Não sei se preciso comunicar significado.

Um problema comum é a consciência do próprio papel. Os produtores de dados são, antes de tudo,
encarregados de comunicar informações e insights a partir dos dados. Produtores de dados
precisam considerar as necessidades e ações de seu público e fornecer conteúdo de maneira fácil
de absorver. Cada membro do seu público chega aos dados com uma variedade de prioridades,
necessidades e perspectivas.

A comunicação bem-sucedida de dados se baseia nessa variedade como um ativo – todos podem
contribuir para a compreensão geral do grupo e também encontrar seus próprios insights. Em
suma: produtores de dados devem trabalhar os dados brutos e fornecer o conteúdo de maneiras
fáceis de entender e agir. Cada consumidor de dados chega às informações com diferentes
prioridades, necessidades e perspectivas.

Para preencher a lacuna entre dados e um público, o produtor de dados tem um trabalho complexo.
Ele deve decidir em quais dados são mais importantes se concentrar para responder às perguntas
em questão e como aproveitar e descrever de forma ideal os dados para informar o pensamento e
a ação. A comunicação eficaz com os dados é um conjunto de habilidades raras – pessoas que
sabem se comunicar bem sempre têm espaço no mercado de trabalho.

Cultura de Fluência em Dados

        Receita Federal (Analista Tributário) Fluência em Dados                              12
        www.estrategiaconcursos.com.br                                                       120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Se as habilidades individuais são um requisito para a troca de ideias por meio de dados, a cultura da
organização é o solo rico em nutrientes que ajuda essas habilidades individuais a crescer. Uma
cultura de fluência de dados é construída sob liderança organizacional, entendimento e convenções
compartilhadas e hábitos e processos cotidianos que tornam a comunicação de dados uma
prioridade.

As pessoas em qualquer organização procuram seus líderes para definir expectativas e modelar
comportamentos. Em primeiro lugar, os líderes fluentes em dados devem se comunicar usando
dados para apoiar seus argumentos e prioridades. Ao fazer isso, eles estabelecem o padrão para
produtos de dados de qualidade e demonstram sua alfabetização de dados em fóruns públicos. A
linguagem dos dados tem seu próprio dialeto de organização para organização.

Esse dialeto reflete o setor, a história e as circunstâncias da organização e resulta em significados
exclusivos associados a seus dados. Por exemplo, um conceito como satisfação do cliente pode ter
um significado abrangente. A definição estará vinculada à abordagem da organização na coleta de
dados, às expectativas do que significa satisfeito, ao período de tempo necessário para a coleta de
dados e ao tamanho da amostra.

O objetivo de uma cultura de dados fluentes, em parte, é garantir que todos saibam o que significa
um termo como satisfação do cliente. Uma cultura de fluência de dados se desfaz quando as pessoas
passam mais tempo debatendo terminologia, cálculos e validade das fontes de dados, em vez de
discutir qual ação tomar com base nos resultados. Uma cultura também é definida por
comportamentos aceitáveis e inaceitáveis.

Uma cultura de dados fluentes traz métricas-chave bem compreendidas para as reuniões; sabe
exatamente como medir o desempenho de um novo projeto ou produto; e inclui habilidades de
fluência de dados nos processos de contratação e avaliação de funcionários. Essa mesma cultura
não aceita a ignorância intencional de dados e rejeita evidências anedóticas apaixonadas como a
única contribuição para as decisões.

Ecossistema de Produtos de Dados

Os três elementos anteriores da estrutura concentram-se nas pessoas e nos comportamentos. Para
permitir o fluxo de informações e a criação e compartilhamento de produtos de dados, deve haver
processos, ferramentas e padrões em vigor. Considere o ecossistema que a Apple criou para

        Receita Federal (Analista Tributário) Fluência em Dados                                   13
        www.estrategiaconcursos.com.br                                                            120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

aplicativos para iPhone e iPad. A Apple criou um sistema no qual aplicativos de alta qualidade
podem ser projetados, desenvolvidos, testados, comercializados e vendidos.

Existem mecanismos para feedback do usuário, processos para verificar a qualidade do aplicativo e
a conformidade com os padrões da Apple e uma maneira bem conhecida de os consumidores
encontrarem os aplicativos que atendem às suas necessidades. Em uma escala muito menor, as
organizações fluentes em dados bem-sucedidas criam um ecossistema que permite a criação e o
compartilhamento de produtos de dados.

Os objetivos são semelhantes aos da loja de aplicativos da Apple: garantir produtos de dados de
qualidade; permitir a distribuição dos dados certos para os tomadores de decisão certos no
momento certo; e incentivar a curadoria de produtos de dados para que os mais valiosos sejam
descobertos e usados. O ecossistema requer três condições fundamentais: padrões, ferramentas e
processos.

Os padrões são os padrões de design e as diretrizes de estilo que tornam mais fácil para os
produtores de dados se comunicarem efetivamente com os dados. As ferramentas tornam
eficiente o design e a criação de produtos de dados e garantem que sejam detectáveis pelo público-
alvo. Os processos incentivam o compartilhamento de insights, colaboração entre produtores e
audiências, higiene de dados e controle de qualidade.

        Receita Federal (Analista Tributário) Fluência em Dados                                14
        www.estrategiaconcursos.com.br                                                         120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                                                 RESUMO

          PILARES                                                DESCRIÇÃO
                    As organizações podem ter uma ideia não realista sobre a implementação de estratégias de
                    dados e analytics. Empresas normalmente investem em ferramentas, capacitação da equipe
   ESTRATÉGIA DE    de dados, plataformas, mas muitas vezes não tem uma estratégia desenhada de como
DADOS E ANALYTICS   alcançar sucesso com esses elementos. Essa estratégia deve apresentar como os dados
                    podem se tornar ação no futuro.

                    Um dos principais desafios da fluência em dados é a necessidade em explicar algoritmos de IA
                    e os meios pelos quais o algoritmo chegou a determinado resultado. Cientistas de Dados e
 CIÊNCIA DE DADOS   colaboradores do negócio que trabalham com dados tem o desafio de entender os modelos e
                    seus resultados.

                    A área que ajuda a simplificar e dar visibilidade dos produtos de dados para os clientes é o
                    mundo da visualização de dados. Todo conjunto de dados esconde uma história. O desafio é
  VISUALIZAÇÃO DE
                    utilizar as ferramentas de visualização de dados (Qlik, por exemplo), para apresentar qual
           DADOS    história esses dados contam.

                    Executivos precisam ser fluentes em dados e fomentar que os colaboradores também sejam.
                    O programa de fluência em dados é um programa educacional e ,como tal, ele precisa ter um
                    patrocinador; um patrocinador que possa tornar sua adoção e realização alinhada aos
   EXECUTIVAS DE
                    objetivos estratégicos da empresa. Além disso, os executivos que utilizam os dados para
       EMPRESAS     embasar suas decisões têm melhores resultados, se comparados a executivos que tomam
                    decisões baseadas em feeling ou em experiências pessoais do passado.

                    Se existe uma barreira para o sucesso na utilização dos dados e estratégias de analytics é a
                    cultura empresarial. Nós nos sentimos confortáveis em fazer coisas de forma conhecida.
                    Quando implementamos uma mudança em uma cultura, saímos da nossa zona de conforto. E
          CULTURA   por isso tornar a cultura da empresa data driven requer o esforço de fazer com que os
                    colaboradores possam tomar decisões baseadas em dados, seja no âmbito operacional, tático
                    ou estratégico.

                    A qualidade de dados é imperativo para o sucesso de estratégias de analytics nas
                    organizações. Dados sem qualidade não podem gerar decisões confiáveis. Garbage In,
    QUALIDADE DE
                    Garbage Out (GIGO) é uma expressão atribuída ao funcionário da IBM George Fuechsel que
          DADOS     significa, "lixo entra, lixo sai". Se a informação não gera credibilidade, os colaboradores podem
                    se tornar resistentes à utilização dos produtos de dados disponibilizados.

       Receita Federal (Analista Tributário) Fluência em Dados                                                     15
       www.estrategiaconcursos.com.br                                                                              120

                                   


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                   Um ambiente com governança gera confiança e segurança de que os dados podem ser
                   utilizados de maneira ampla. Rotinas de cargas de dados, segurança e controle de acesso são
                   essenciais para que o ambiente de dados esteja em conformidade com o cenário
  GOVERNANÇA DE    organizacional. A fluência em dados se beneficia do processo de governança de dados, já que
         DADOS     esta permite que saibamos o ciclo de vida que o dado percorre desde sua ingestão até o
                   descarte, garante que os dados estejam atualizados tempestivamente e que o acesso só
                   estará disponível àqueles que tem autorização para acessá-lo.

                   A implementação da Lei Geral de Proteção de Dados (LGPD) veio para regular e proteger os
                   dados dos indivíduos. As empresas se adequaram para tratar e proteger os dados que
                   tramitam nas organizações. A fluência em dados ajuda a entender o ciclo de vida dos dados
        ÉTICA E    (por onde o dado passa para cumprir a sua função), questionar se os dados estão corretos, se
REGULAMENTAÇÃO     a empresa possui as devidas proteções em relação aos dados, dentre tantas outras
                   possibilidades. A fluência em dados ainda nos ajuda a entender onde os dados estão sendo
                   usados de forma ética e não-ética, dando às pessoas o conhecimento necessário para fazer
                   esse tipo de avaliação.


     APLICAÇÕES                                                 descrição
                   A capacidade da empresa de entender os dados e traduzi-los em análises perspicazes deve
      TOMADA DE direcionar a organização para longe de fazer escolhas cegas ou tendenciosas. A fluência de
        DECISÕES dados suporta uma abordagem sistemática e baseada em metas durante todo o processo de
      INFORMADA tomada de decisão, garantindo assim que decisões objetivas e impactantes sejam tomadas.

                   Em uma organização imatura de dados, mais tempo e energia são gastos decodificando
                   gráficos e tabelas, em vez de ter conversas significativas. Um dos obstáculos em tais
    MELHORIA DA
                   transformações reside na falta de comunicação e na incompreensão dos dados. Promover um
      EFICIÊNCIA   ambiente fluente em dados permite que os indivíduos entendam e resolvam os problemas
                   rapidamente.
                   É difícil entender o progresso de uma empresa com dados incompletos ou ausentes.
                   Visualizações apropriadas e comunicação clara sobre as principais métricas ajudam a iluminar
        MELHOR
                   as prioridades e qual deve ser o próximo curso de ação.
  TRANSPARÊNCIA

                   Conversas sobre dados geralmente levantam mais perguntas do que respostas. Em uma
     CULTIVO DA organização onde a comunicação clara é estabelecida, essas questões podem ser valiosas. Elas
     CULTURA DE podem inspirar o pensamento criativo e moldar a discussão em direção a um conhecimento
  APRENDIZAGEM mais profundo, melhores insights e mudanças positivas.


           NÍVEL                                                DESCRIÇÃO
                   São organizações que não fizeram investimentos para criar uma infraestrutura de coleta e
                   análise de dados em tempo real. Como resultado, eles não possuem os dados necessários para
  Conhecimento
                   inteligência de negócios e fluência de dados de longo prazo.
    Rudimentar


  Alfabetização São organizações que possuem a tecnologia e amplo acesso aos dados, mas não níveis de
                conhecimento e habilidade necessários para explorar os dados completamente e usá-los para
         básica a tomada de decisões importantes. Como essas empresas têm os meios para coletar e analisar


      Receita Federal (Analista Tributário) Fluência em Dados                                                16
      www.estrategiaconcursos.com.br                                                                         120

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                     grandes quantidades de dados, elas estão em melhor posição para obter fluência de dados,
                     pois precisam apenas aprimorar as habilidades de seus funcionários nos diferentes níveis.
                     As organizações que se enquadram nesta categoria possuem habilidades analíticas de dados
                     impressionantes, mas o acesso aos dados é limitado a funcionários pertencentes
          Alto
                     exclusivamente a algumas funções. Como as organizações que se enquadram na segunda
  conhecimento       categoria, essas empresas também podem se considerar bem posicionadas para obter
                     fluência de dados.
                     Essas organizações atingem o equilíbrio ideal entre recursos analíticos de dados sofisticados
                     e uma infraestrutura robusta de coleta e análise de dados. Além disso, essas organizações têm
           Fluente
                     estratégias para manter sua cultura à prova de balas por vários anos. Essencialmente, as
          em dados   empresas precisam investir em tecnologia e qualificação para subir a escada no espectro da
                     fluência.

      Receita Federal (Analista Tributário) Fluência em Dados                                                   17
      www.estrategiaconcursos.com.br                                                                            120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                 GOVERNANÇA DE DADOS
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

Em primeiro lugar, vamos entender o que significa genericamente o termo Governança. Trata-se
de um conjunto de processos, normas, políticas e práticas que orientam a forma como uma
organização é dirigida e controlada. Ela envolve a tomada de decisões estratégicas e a supervisão
para garantir que a organização alcance seus objetivos de maneira ética e eficiente. Bacana! Antes
de ver o que é a Governança de Dados, vamos entender primeiro do que se trata a Governança
Corporativa e a Governança de Tecnologia da Informação.

A Governança Corporativa trata de princípios que asseguram que a empresa seja gerida no melhor
interesse de seus acionistas e outras partes interessadas, garantindo transparência,
responsabilidade, equidade e responsabilidade corporativa. Trata-se de um tipo de governança
específica para a direção e controle de empresas e organizações corporativas.

Já a Governança de Tecnologia da Informação se concentra na gestão e controle dos recursos e
processos de tecnologia da informação dentro de uma organização. Seu objetivo é garantir que a
área de TI apoie os objetivos estratégicos da empresa, forneça valor e mitigue os riscos associados
ao uso da tecnologia. Agora olha que interessante...

A Governança de Dados surgiu como uma extensão da Governança Corporativa e da Governança
de Tecnologia da Informação, focando na organização e controle dos dados, essenciais para a
produção de informação e conhecimento nas empresas. Na década de 70, surgiram os primeiros
bancos de dados e, nesse contexto, tornou-se cada vez mais necessário manter um controle
rigoroso sobre os dados das organizações.

Quem fazia esse controle era o chamado Administrador de Dados, que buscava criar modelos
integrados, regras de uso e dicionários de dados, mas isso nunca andou muito para frente na época.
Por quê? Porque havia uma percepção de que os dados eram um recurso da área de tecnologia da
informação. Além disso, o processamento de dados foi se tornando cada vez mais descentralizado
e fragmentado entre diferentes departamentos – o que dificultava seu controle.

        Receita Federal (Analista Tributário) Fluência em Dados                                              18
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

Nesse contexto, os dados perderam clareza em termos de propriedade e responsabilidade,
comprometendo a eficácia da gestão de dados nas organizações. Hoje, ainda bem, nós sabemos
que o maior ativo da organização são seus dados.

A Governança de Dados é, portanto, um conceito abrangente e em constante desenvolvimento,
que integra várias disciplinas, com ênfase na qualidade dos dados. Ela visa o amadurecimento da
empresa na gestão dos dados, aprimorando sua valoração, produção, monitoramento, além de
abordar questões críticas de segurança, privacidade, ética e conformidade com
regulamentações. Para alcançar isso, é necessário que as empresas definam objetivos e processos
organizacionais claros, equilibrando as funções da área de tecnologia da informação e áreas de
negócios, reconhecendo os dados como um ativo organizacional.

Atualmente, a Governança de Dados também envolve a criação de mecanismos para analisar e
melhorar os processos que geram e utilizam dados, promovendo a qualidade integrada entre dados
e processos, o que é especialmente relevante em empresas mais maduras. Como parte desse
processo, ela estabelece políticas, normas, e procedimentos que regulam o tratamento dos dados,
atribuindo responsabilidades claras. Novos papéis, como proprietários de dados e gestores, surgem
para trabalhar em conjunto com profissionais de tecnologia da informação, como administradores
e arquitetos de dados, para garantir uma governança de dados eficaz, harmonizando as operações
de negócios com a gestão de dados. Fechado? Vamos seguir...

De acordo com a bíblia da Governança de Dados (DAMA – DMBOK2: Data Management Book of
Knowledge1), temos que:

         A governança de dados é definida como o exercício de autoridade e controle (planejamento,
         monitoramento e execução) sobre o gerenciamento de ativos de dados. Todas as organizações
         tomam decisões sobre dados, independentemente de terem ou não uma função formal de
         governança de dados, porém aquelas que estabelecem um programa formal exercem
         autoridade e controle com maior intencionalidade, sendo mais capazes de aumentar o valor que
         obtêm de seus ativos de dados.

Já de acordo com Cartilha de Governança de Dados do Poder Executivo Federal, a definição de
Governança de Dados é:

         Governança de dados, para a administração pública brasileira, refere-se a um conjunto de
         princípios, políticas, padrões, métricas e responsabilidades que permitem o alinhamento da
         estratégia, processos, pessoas, uso de tecnologia e dados. Assim, visa estruturar e administrar
         os ativos de dados com o objetivo de fomentar, aprimorar e garantir a efetividade do uso dos
         dados para o desenvolvimento de políticas públicas e entrega de soluções e serviços ao cidadão.

1
 DMBOK (Data Management Body of Knowledge) é um guia abrangente que reúne o conhecimento e as melhores práticas na área de gestão de
dados, tais como: governança de dados, arquitetura de dados, qualidade de dados, modelagem de dados e design, armazenamento e operações de
dados, segurança de dados, integração de dados, gerenciamento de metadados, gerenciamento de dados mestres e de referência, entre outros.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                     19
          www.estrategiaconcursos.com.br                                                                                              120

                                           


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Já de acordo com Carlos Barbieri (Governança de Dados: Práticas, Conceitos e Novos Caminhos), a
Governança de Dados é:

       A Governança de Dados (GD) é um conjunto de práticas dispostas em um framework com o
       objetivo de organizar o uso e o controle adequado dos dados com um ativo organizacional; a
       Governança de Dados busca organizar os dados visando disponibilidades, integridade,
       consistência, usabilidade, segurança, controle etc.

Cuidado: é importante não confundir Governança de Dados com Gestão de Dados. A Gestão de
Dados orienta todas as funções de gerenciamento de dados, focando nas decisões e no
comportamento esperado em relação aos dados. Já a Governança de Dados, por outro lado,
abrange processos decisórios e a execução de políticas e melhores práticas por toda a organização,
assegurando um gerenciamento adequado dos dados.

  GOVERNANÇA Provê direcionamento, monitoramento, supervisão e avaliação da prática da gestão, ou seja,
     DE DADOS estabelece as diretrizes e as políticas a serem seguidas pela Gestão de Dados.


    GESTÃO DE É inerente e integrada aos processos organizacionais, sendo responsável pelo planejamento,
       DADOS execução, controle e monitoramento. Enfim, pelo manejo dos recursos e poderes colocados à
                disposição de órgãos e entidades para a consecução de seus objetivos. De modo geral, a Gestão de
                Dados executa as políticas e diretrizes definidas pela Governança de Dados.

              Componentes da Governança de Dados em Diferentes Níveis Organizacionais (DMBOK/ENAP)


A Governança de Dados deve orientar as atividades de Gestão de Dados, isto é, a função da Gestão
de Dados é assegurar que a organização obtenha valor a partir de seus dados, observando o que
prescreve a Governança de Dados nos termos em que essa direciona como pessoas e processos
devem se comportar em relação aos dados.

Adicionalmente, a Governança de Dados está relacionada a conformidade e prevenção de
ocorrência de eventos de risco. Logo, uma das principais motivações para a governança de dados


        Receita Federal (Analista Tributário) Fluência em Dados                                               20
        www.estrategiaconcursos.com.br                                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

é a necessidade de as organizações cumprirem as leis e regras, que são projetadas para evitar que
incidentes inadequados aconteçam e para auxiliar na detecção e mitigação desses incidentes antes
que eles aconteçam novamente.

O escopo e o foco de um determinado programa de governança de dados dependerão das
necessidades organizacionais, mas a maioria dos programas inclui os seguintes itens:

             ESCOPO/foco                                          DESCRIÇÃO
                           Definir, comunicar e conduzir a execução da estratégia de dados e da estratégia de
              ESTRATÉGIA governança de dados.

                           Definição e aplicação de políticas relacionadas ao gerenciamento de dados e
                POLÍTICAS metadados, acesso, uso, segurança e qualidade.

                           Definição e aplicação de padrões de qualidade e arquitetura de dados.
     PADRÕES E QUALIDADE

                           Fornecer observação prática, auditoria e correção em áreas-chave de qualidade, política
              SUPERVISÃO e gerenciamento de dados (muitas vezes referido como administração).

                           Garantir que a organização possa atender aos requisitos de conformidade regulatória
            CONFORMIDADE relacionados a dados.

       GERENCIAMENTO DE Identificar, definir, escalar e resolver problemas relacionados à segurança de dados,
                        acesso, qualidade de dados, conformidade regulatória, propriedade de dados, política,
             PROBLEMAS padrões, terminologia ou procedimentos de governança de dados.
            PROJETOS DE Patrocinar esforços para melhorar as práticas de gerenciamento de dados.
 GERENCIAMENTO DE DADOS
   AVALIAÇÃO DE ATIVOS DE Estabelecer padrões e processos para definir consistentemente o valor comercial dos
                          ativos de dados.
                   DADOS

        Receita Federal (Analista Tributário) Fluência em Dados                                                 21
        www.estrategiaconcursos.com.br                                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Principais Vantagens
                                                                                             INCIDÊNCIA EM PROVA: baixa


E quais são as vantagens de implementar a governança de dados em órgãos públicos? O potencial
econômico e social do uso de dados é cada vez maior. A partir da adoção de uma gestão orientada
a dados, há uma tendência de aumento do valor dos dados, em decorrência da análise destes.
Governos inteligentes utilizam dados para tornar a produção mais eficiente e fornece
ferramentas para enfrentar os desafios sociais.

Além da necessidade de harmonizar o avanço tecnológico, a prestação dos serviços públicos de
qualidade, bem como a adaptação e adequação de conhecimentos dos servidores e funcionários
públicos que atuam nos órgãos e entidades. Para implementar a Governança de Dados em seu
órgão é preciso focar nos objetivos estratégicos (segurança, qualidade, acesso, uso,
organização dos dados etc.), considerando os benefícios gerados por ela.

Com a Governança de Dados é mais fácil apontar o caminho a ser seguido para cumprir com os
objetivos das políticas públicas e como alcançar os resultados desejados. Vejamos suas vantagens:

       PRINCIPAIS                                                 DESCRIÇÃO
      VANTAGENS
                 A regulação brasileira sobre proteção de dados pessoais tornou o assunto ainda mais latente,
 FORTALECIMENTO demostrando a necessidade crítica de cuidar dos dados dos cidadãos e proteger sua privacidade.
 DA SEGURANÇA DE Assim, a Governança de Dados servirá para criar regras e ferramentas que protegem e prezam
                 pela qualidade dos dados, bem como ampliar as práticas de segurança utilizadas pelos órgãos.
            DADOS

                    Fazer Governança de Dados possibilita a construção de uma cultura de excelência operacional,
     AUMENTO DA     o que reflete diretamente na melhoria da consistência dos dados. Possibilitando ainda
                    redesenhar os processos de gestão de dados dentro de uma estratégia organizacional, para
       EFICIÊNCIA
                    melhoria contínua na oferta de serviços públicos e consecução das políticas oferecidas para o
  ORGANIZACIONAL    cidadão. Tornar equipes e processos mais eficientes proporciona a redução de custos
                    operacionais, podendo esses recursos serem redistribuídos para outras inciativas.
                    Para decisões baseadas em dados, é essencial garantir informações confiáveis, organizadas,
     MELHORIA NA    precisas e interpretáveis. Melhorar a eficiência operacional, processos e segurança dos dados
                    aumenta a confiança no ecossistema de dados governamentais, que inclui a administração
      TOMADA DE
                    pública, cidadãos, sociedade civil, academia, organizações internacionais, setor privado e
         DECISÃO    outros interessados. A Governança de Dados permite gestores visualizar e prever problemas,
                    oferecendo alternativas para soluções eficientes.
                    A não conformidade com dados organizacionais pode acarretar severas penalidades em setores
                    regulados como saúde, educação, produção, seguro e finanças, resultando em custos altos,
      REDUÇÃO DE    perda de produtividade, receita e interrupções. A Governança de Dados ajuda a identificar,
          RISCOS    mitigar e contornar esses riscos. É essencial para aumentar o uso e reuso de dados, garantir
                    acesso igualitário, proteger contra uso indevido e construir um sistema integrado de dados no
                    Brasil, melhorando a qualidade dos dados e a tomada de decisões baseadas em evidências.

        Receita Federal (Analista Tributário) Fluência em Dados                                                    22
        www.estrategiaconcursos.com.br                                                                            120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

               O Brasil se destaca na inovação, competitividade e digitalização de serviços, superando países
               vizinhos. A implementação de diretrizes de Governança de Dados pode potencializar esses
     FOMENTO A aspectos, promovendo a democratização e o uso amplo de dados. Isso fomenta a inovação nos
      INOVAÇÃO serviços públicos, permitindo alcançar resultados inéditos. Exemplos incluem o "Meu INSS",
               carteiras digitais de trabalho e trânsito, o Pix e a plataforma Gov.br, todos derivados de
               iniciativas baseadas em dados.

      Receita Federal (Analista Tributário) Fluência em Dados                                              23
      www.estrategiaconcursos.com.br                                                                       120

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Papeis da Governança de Dados
                                                                                                INCIDÊNCIA EM PROVA: baixa


De acordo com Rêgo (2013), encontramos alguns papeis clássicos pré-definidos na Governança de
dados. Vejamos:

            Papeis                                             DESCRIÇÃO
               Os Gestores das Informações são as pessoas que representam as áreas proprietárias das
               informações. Entende-se como área proprietária a estrutura organizacional que origina ou
  Gestores das adquire as informações. Somente os gestores das informações podem definir questões sobre o
  informações uso dos dados, tais como: classificação da segurança das informações, definição das permissões
               e acesso às informações e opções de descarte.

                     Os Mantenedores, também conhecidos como custodiantes, são as organizações responsáveis
                     pela guarda e disponibilização das informações conforme diretrizes estabelecidas pelos Gestores
                     das Informações. Os custodiantes não devem definir ou tomar decisões em relação às questões
 Mantenedores
                     sobre o uso dos dados que são de responsabilidade dos Gestores das Informações. Entre os
                     mantenedores conhecidos, podemos destacar a área de TI ou empresas especializadas em guarda
                     de informações, sejam elas armazenadas na nuvem (cloud) ou não.
                     Os Criadores de Dados e Informações registram as informações dentro das aplicações que
  Criadores dos      armazenam os dados. Algumas aplicações também atuam como criadores dos dados, onde,
        dados e      através de interfaces específicas, incluem ou alteram os dados armazenados. Geralmente
   informações       possuem acessos de criação, edição e consulta às informações.

               Os Consumidores dos Dados e informações são pessoas ou aplicações que utilizam os dados
  Consumidores armazenados para execução de algum propósito. Os consumidores dos dados podem ser diretos,
               com acesso direto às informações solicitadas (ex.: consulta online a uma aplicação) ou então
     dos dados indiretos, onde o acesso à informação é obtido através de outras pessoas ou aplicações.

                     O Staff da Gestão de Dados, formado por Gestores Técnicos de Dados, Gestores Estratégicos de
      Staff da Dados e Gestores de Dados de Negócio, é responsável por definir, orientar, executar,
     gestão de acompanhar e avaliar os mecanismos de controle estabelecidos nos processos de Governança de
        dados Dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                                       24
        www.estrategiaconcursos.com.br                                                                               120

                                       


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Razões para Implantação da Governança de Dados
                                                                                       INCIDÊNCIA EM PROVA: baixa


De acordo com Rêgo (2013), existem diversas razões para implantação da Governança de Dados.
Dependendo das particularidades de cada empresa, cada razão pode ter um peso específico. Entre
as razões mais comuns, temos:

▪ Ter subsídios para obter informações corretas, de fácil acesso e ágeis para tomadas de decisões
  e inovações. Este é o desejo de todo executivo de alto escalão.

▪ Estabelecer a imagem de uma empresa sólida e confiável. Afinal, na mente do público, se a
  empresa é sólida, certamente os dados são sadios e confiáveis.

▪ Ter conhecimento completo dos dados do negócio da empresa e disseminar todo este
  conhecimento para o restante da empresa conforme política vigente.

▪ Evitar prejuízos decorrentes da baixa qualidade dos dados. Dado de baixa qualidade no mínimo
  gera retrabalho, aumentando os custos e desperdiçando o tempo. Em casos mais graves, as
  empresas podem perder grandes somas de dinheiro devido a decisões baseadas em dados
  incorretos, ações na justiça ou multas e penalidades aplicadas pelo setor público.

▪ Redução nos custos de operações com os dados. Dados governados requerem processos de
  criação, disponibilização e utilização definidos. Em qualquer disciplina, quando temos as regras
  do jogo definidas e aplicadas, a tendência natural é redução dos custos e ganho na
  produtividade. A Governança de Dados é a função responsável por definir essas regras.

▪ Tornar a empresa apta para seguir novas regulamentações. Dependendo do ramo de atuação,
  é comum haver exigências a respeito dos controles internos da empresa. A lei Sarbanes-Oxley e
  o acordo de Basileia são exemplos de regulamentações aplicadas em setores específicos para
  garantir uma melhor governança, não só dos dados, mas de toda a empresa.

▪ Diminuir os custos do desenvolvimento das aplicações através da diminuição do retrabalho, da
  eliminação de silos redundantes e da disseminação dos processos de Gestão de Dados vigentes.

▪ Evitar fraudes devido à ausência de processos formais de controle ou existência de processos de
  Gestão de Dados mal definidos ou executados.

        Receita Federal (Analista Tributário) Fluência em Dados                                              25
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Programa de Controle de Dados
                                                                                                 INCIDÊNCIA EM PROVA: baixa


O objetivo da governança de dados é permitir que uma organização gerencie os dados como
um ativo. A governança de dados fornece os princípios, políticas, processos, frameworks, métricas
e supervisão para gerenciar os dados como um ativo e orientar as atividades de gerenciamento de
dados em todos os níveis. Para atingir esse objetivo geral, um programa de governança de dados
deve ser:

       CARACTERÍSTICA                                              DESCRIÇÃO
                           A governança de dados é um processo contínuo que requer compromisso da organização.
                           Exige mudanças na maneira como os dados são gerenciados e usados. Isso significa
            Sustentável
                           gerenciar as mudanças de maneira sustentável, além da implementação inicial de qualquer
                           componente de controle de dados.
                           A governança de dados não é um processo complementar. As atividades de governança
                           precisam ser incorporadas aos métodos de desenvolvimento de software, uso de dados
            incorporado
                           para análise, gerenciamento de dados mestre e gerenciamento de riscos.

                           A governança de dados bem implementada gera impactos positivos, mas demonstrar esse
                           impacto requer a compreensão do ponto de partida, do planejamento e definição de
                 medido
                           indicadores que represente o quanto a governança de dados gera melhorias mensuráveis.

Desde o início dos anos 2000, princípios foram desenvolvidos para favorecer o estabelecimento de
uma base sólida para essas situações de empreendimento do programa de governança de dados:

              princípios                                           DESCRIÇÃO
            LIDERANÇA E A governança de dados bem-sucedida começa com uma liderança visionária,
                        comprometida e alinhada à estratégia de negócios da organização.
             ESTRATÉGIA
       Orientado aos A governança de dados é um programa de negócios que deve governar as decisões de TIC
                     relacionadas aos dados, assim como governa a interação dos negócios com os dados.
            negócios
    Responsabilidade A governança de dados é uma responsabilidade compartilhada entre gestores de negócios
                     e profissionais de gerenciamento de dados.
      compartilhada
                           A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.
        MULTICAMADA

             Baseado em Como as atividades de governança de dados exigem coordenação entre áreas funcionais,
                        o programa de governança de dados deve estabelecer uma estrutura operacional que
              estrutura defina responsabilidades e interações.
             Baseado em Os princípios orientadores são a base das atividades de governança de dados e,
                         principalmente, da política de governança de dados.
              princípios

        Receita Federal (Analista Tributário) Fluência em Dados                                                        26
        www.estrategiaconcursos.com.br                                                                                120

                                       


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Princípios de Governança de Dados
                                                                                              INCIDÊNCIA EM PROVA: baixa


Bergson Rêgo afirma que, quando falamos em governança de dados, nós precisamos ter em mente
também alguns princípios básicos. Vejamos...

  governança de
                                                                    DESCRIÇÃO
         dados
                   A governança de dados é a gestão de dados definida e aplicada nos altos níveis da empresa pelos
    É uma gestão executivos. Em suma, ela é a tomada de decisões a respeito de gestão de dados pela alta
  estratégica de administração. Tentar emplacar alguma iniciativa de governança de dados sem prever esta
           dados premissa é assinar a sentença de morte do programa. Iniciativas de governança de dados não
                  devem começar nem ser somente aplicadas nos níveis táticos e operacionais das empresas.
                                                       ==219a34==

                  Este patrocínio deve ser constante em todo o programa. Claro que nas fases iniciais o patrocínio
          Requer se torna mais evidente por questões de estratégia de implantação e divulgação do programa,
                  porém sempre deverá existir no decorrer do programa, sob pena das novas iniciativas não serem
       patrocínio totalmente adotadas devido a diversos fatores, desde os culturais (como resistência a
                  mudanças) até os financeiros, cuja falta impacta o andamento e a conclusão das iniciativas.
                  Veremos depois que a governança de dados funciona semelhante a um governo. Se fizermos
                  uma analogia, poderemos ter uma subdivisão em governança de dados legislativa, executiva e
    É um governo judiciária.


                A governança de dados não pode simplesmente ser adotada através de um projeto. Segundo a
                definição, um projeto é um esforço temporário empreendido para criar um produto, serviço ou
  É um programa resultado exclusivo. Os projetos são exclusivos (únicos), possuem tempo e orçamentos
                limitados. Mesmo após um projeto inicial de implantação, para adotar a governança de dados
                de forma efetiva, vários projetos serão necessários no decorrer do tempo.


Para implementar a Governança de Dados de maneira eficaz, mesmo após o projeto inicial, será
necessário realizar diversos projetos adicionais ao longo do tempo. As demandas desses projetos
serão estabelecidas nas reuniões regulares do Conselho de Governança de Dados.

É fundamental destacar que um dos objetivos principais da gestão estratégica de dados é a
melhoria contínua da qualidade dos dados e dos processos de gestão relacionados. Assim,
enquanto a governança de dados for mantida de forma eficiente, sempre haverá projetos de
aprimoramento focados na excelência no uso dos dados pela empresa.

Já Barbieri faz uma diferenciação entre princípios e políticas. Para ele, ambas são grandes regras,
definidas por consenso e aprovadas, atualizadas e respeitadas pela organização, que legislam sobre
os dados. Os princípios são elementos mais filosóficos, e as políticas, mais normativos e
regulatórios. De acordo com o autor, esses elementos, depois de criados, devem estar
armazenados, juntamente com padrões, processos/procedimentos e papeis de forma facilmente
acessível e ser constantemente revistos e melhorados. Barbieri menciona alguns exemplos de
princípios de governança de dados:


        Receita Federal (Analista Tributário) Fluência em Dados                                                     27
        www.estrategiaconcursos.com.br                                                                             120

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                                        Princípios de Governança de dados
Dado é um ativo e, portanto, deverá haver responsabilidade formal e final sobre eles (accountability). Os dados e
seus conteúdos de todos os tipos são considerados ativos, da mesma forma que os outros tipos como ativos físicos,
materiais e financeiros, exigindo, dessa forma, procedimentos de controle organizacional similares.
A informação deverá vir de uma fonte autorizada, estar disponível, ser precisa, íntegra e sem ambiguidade, além
de passível de ser compartilhada e catalogada (metadados). Soluções de dados manterão estrito alinhamento com
os negócios da empresa, respondendo às suas necessidades e às requisições das áreas envolvidas.
O valor do dado está no aspecto intrínseco que ele retorna para a empresa, agregando e melhorando os seus
objetivos operacionais e negociais. A governança de dados deverá respaldar esse princípio.

A governança de dados é um programa de negócios e, como tal, suas definições formalmente aprovadas deverão
governar a interação da TI com os dados, da mesma forma que a interação da área de negócios com esses mesmos
ativos.
A governança de dados é de responsabilidade compartilhada entre gestores de dados de áreas de negócios em
parceria com profissionais de TI, que atuam nas diversas gerências de dados (Arquitetura, BD, DW/BI, etc.). A união
lógica e funcional entre a Governança e a Gerência dos dados forma o conceito maior de Gestão de Dados.
Cada programa de Governança e de Gerência de dados é único e deve-se levar sempre em conta as características
específicas de cada organização e de sua cultura.

Os melhores gestores de dados já existem e raramente são contratados. Devem ser escolhidos entre os que já
estão envolvidos com dados nas suas respectivas áreas (SME) e demonstram interesse nessa nova forma de
tratamento desses ativos.
A tomada de decisão compartilhada é a marca da Governança de Dados, envolvendo as diversas camadas definidas
no seu modelo operacional

Com o crescimento dos conceitos de Big Data, Data Science e Inteligência Artificial, a empresa deverá estabelecer
princípios éticos sobre a utilização dos dados, preservando aspectos de privacidade, segurança, equidade e
direitos, controlando o seu uso, a fim de evitar problemas neste patamar.

       Receita Federal (Analista Tributário) Fluência em Dados                                                   28
       www.estrategiaconcursos.com.br                                                                            120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Componentes de Governança
                                                                                       INCIDÊNCIA EM PROVA: baixa


A governança de dados é responsável por alinhar tecnologia, processos e pessoas para definir
papéis, responsabilidades e processos necessários para gerir os dados estratégicos da empresa.
A imagem seguinte baseada no livro de Bergson Rêgo nos mostra como a governança de dados
permite alinhar Pessoas (Ex: Profissionais de Tecnologia, Gestão de Dados e Negócio), Processos
(Ex: Governança, Financeiro, Administrativo, etc) e Tecnologias (Ex: SGBD, Metadados, etc).

Questões como: “Quais são os dados existentes? Quais são os dados estratégicos? Quais dados são
necessários? Quem possui acesso aos seguintes dados? Quem é o gestor de um determinado dado? O
que significa este conceito? Quando este dado foi criado? Quando poderá ser descartado? Onde ele
está? Onde ele é utilizado? Como ele é criado? Como consigo acessá-lo? Quanto custa a sua gestão?”
são respondidas quando a empresa possui um programa de governança de dados estabelecido.

Pessoas, processos e tecnologia devem atuar de forma integrada com o propósito de efetivar a
política e a estratégia de dados definidas para o programa de Governança de Dados. Vejamos...

Pessoas

As pessoas desempenham um papel essencial nas atividades de Governança de Dados, seja de
forma direta ou indireta. Elas são responsáveis por implementar e gerir as ações de governança, e
incluem tanto profissionais da área de negócios, como executivos, gestores e usuários da
informação, quanto profissionais de tecnologia, como gerentes de tecnologia da informação e
técnicos especializados em dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                              29
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Para garantir o sucesso do Programa de Governança de Dados, é fundamental que haja um esforço
contínuo para educar e treinar esses profissionais, focando nos objetivos do programa, nos
processos executados e nas ferramentas utilizadas.

Processos

Para que a Governança de Dados funcione adequadamente em uma empresa, é essencial definir
processos claros que estabeleçam como o trabalho deve ser realizado e quais são as "regras do
jogo". Esses processos determinam quem faz o quê, em que momento e de que forma, para atingir
os objetivos definidos. Na Governança de Dados, esses processos podem ser divididos em duas
grandes áreas.

A primeira área abrange os processos relacionados ao negócio, que entram em ação quando os
dados são criados ou sofrem alguma alteração em seu ciclo de vida. Para garantir o sucesso do
programa de governança, é fundamental contar com uma Arquitetura de Dados que suporte esses
processos. A segunda área envolve os processos específicos da Gestão de Dados.

Esses processos são aplicados de forma consistente em todas as atividades que visam garantir
a governança, independentemente de onde os dados serão ou estão sendo usados. Eles devem
fazer parte da metodologia padrão de Gestão de Dados da empresa. A implementação eficaz da
Governança de Dados exige que os processos em ambas as áreas sejam cuidadosamente mapeados
e aprovados.

Tecnologia

A tecnologia envolve tanto a infraestrutura de hardware, como servidores e outros
equipamentos que suportam as soluções de software, quanto as ferramentas que auxiliam na
implementação dos processos definidos e executados pelas pessoas. Entre as ferramentas e
softwares essenciais, encontram-se os Sistemas de Gerenciamento de Banco de Dados (SGBDs), os
repositórios de metadados e modelos de dados, as ferramentas para modelagem e qualidade de
dados, as ferramentas de gerenciamento de dados mestre, além de soluções personalizadas para
apoiar atividades específicas.

        Receita Federal (Analista Tributário) Fluência em Dados                           30
        www.estrategiaconcursos.com.br                                                    120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Documentos da Governança de Dados
                                                                                       INCIDÊNCIA EM PROVA: baixa


Os documentos de Governança de Dados são elementos essenciais dentro da metodologia de
Gestão de Dados das empresas. Normalmente, são desenvolvidos por especialistas em Gestão de
Dados e, em seguida, passam por um processo de validação e aprovação pelos executivos de alto
escalão. Esses documentos permeiam vários níveis da organização. Enquanto os procedimentos e
instruções guiam as atividades diárias de controle da Governança de Dados, os documentos de nível
estratégico estabelecem os objetivos e diretrizes para a estratégia de dados da empresa. Vejamos
os principais documentos...

Estratégia de Dados

A Estratégia de Dados define os objetivos e direções para a Gestão e Governança de Dados,
alinhando-os com as metas estratégicas do negócio. Este documento, criado pelo Conselho de
Governança de Dados, formaliza e institucionaliza as atividades e responsabilidades relacionadas à
gestão de dados dentro da empresa, sendo amplamente divulgado em todos os níveis da
organização. Componentes típicos incluem a missão, visão, princípios orientadores, e a descrição
das responsabilidades e organizações de apoio. Cada empresa deve personalizar sua estratégia de
acordo com suas necessidades específicas.

Política de Dados

As políticas de dados estabelecem regras fundamentais para o ciclo de vida dos dados na empresa
e são elaboradas por profissionais de Gestão de Dados, tanto técnicos quanto de negócios.
Diferentemente da Estratégia de Dados, as políticas podem estar distribuídas em vários
documentos, cada um focado em áreas específicas, como Arquitetura, Modelagem e Integração de
Dados. Essas políticas devem ser validadas pelo Conselho de Gestão e Governança de Dados, mas
não precisam ser amplamente divulgadas dentro da empresa, sendo suficiente que apenas os
envolvidos diretamente as conheçam.

Normas e Padrões

Normas e padrões são documentos normativos que regulam a criação de artefatos nas atividades
de Gestão de Dados, definindo o que deve e não deve ser feito. Eles diferem de procedimentos, que
explicam como executar as tarefas. Exemplos incluem padrões de nomenclatura para bancos de
dados e modelagem de dados, solicitação de acesso a dados corporativos e normas de segurança
da informação.

Procedimentos

        Receita Federal (Analista Tributário) Fluência em Dados                                              31
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Procedimentos e roteiros, ao contrário de normas e padrões, servem para orientar a execução de
tarefas específicas, funcionando como uma "receita de bolo". Eles guiam as pessoas em atividades
como solicitar tarefas, carregar metadados, realizar engenharia reversa em bancos de dados e pedir
acesso a bases de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                32
        www.estrategiaconcursos.com.br                                                         120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Modelos de Governança de Dados
                                                                                           INCIDÊNCIA EM PROVA: baixa


Para alcançar o sucesso dentro de seu contexto específico, é fundamental que cada organização
adote um modelo de governança que esteja alinhado com sua estratégia de negócios. Esses
modelos podem variar significativamente em termos de estrutura organizacional, formalidade e
processos de tomada de decisão. Algumas organizações optam por um modelo centralizado,
enquanto outras preferem uma abordagem mais distribuída.

Seja qual for a escolha, é crucial que o modelo tenha flexibilidade para se adaptar às mudanças.
Além disso, as organizações precisam estar prontas para evoluir e ajustar seu modelo de
governança à medida que novos desafios surgem e a cultura interna se transforma.

No caso da governança de dados, as organizações podem adotar diferentes métodos para lidar com
preocupações em vários níveis. Normalmente, o trabalho de governança é dividido entre diversos
comitês, cada um com um propósito específico e diferentes níveis de responsabilidade. A chave
para o sucesso é a coordenação eficaz entre esses comitês, permitindo que a organização maximize
os benefícios da sinergia resultante dessa colaboração.

Na imagem seguinte, temos um modelo genérico de Governança de dados que envolve atividades
em variados níveis da organização (exibidos na vertical), assim como a separação das
responsabilidades de governança nas funções da organização e entre negócios (lado esquerdo) e a
área de tecnologia da informação (lado direito).

              Componentes da Governança de Dados em Diferentes Níveis Organizacionais (DMBOK/ENAP)

        Receita Federal (Analista Tributário) Fluência em Dados                                                  33
        www.estrategiaconcursos.com.br                                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Uma parte essencial da governança de dados é realizada por gestores de dados no nível "0", que
geralmente pertencem a um escritório de governança de dados. Esses gestores são responsáveis
por administrar diferentes tipos de dados conforme as necessidades da organização e
frequentemente lideram grupos de trabalho que reportam ao Conselho de Governança de Dados.

No nível estratégico, muitas organizações têm um Comitê Gestor de Governança de Dados, que
desempenha funções diretivas e deliberativas. Esse comitê supervisiona a implementação das
políticas de governança de dados, funciona como um fórum para resolver controvérsias
relacionadas à gestão de dados e estabelece subcomitês para avaliar e sugerir soluções.

No setor de TIC, o trabalho é geralmente distribuído entre programas que envolvem projetos
específicos, conduzidos por equipes de projeto, enquanto as tarefas operacionais são executadas
por equipes de gerenciamento de dados ou de suporte e operações de produção. É também
fundamental estabelecer um nível de gestão, o que faz com que a maioria das organizações
necessite de estruturas de governança tanto nas áreas de negócios quanto em TIC, além de uma
função de supervisão.

A colaboração e coordenação ativa entre as várias partes da organização encarregadas da
governança são cruciais. A estrutura desse modelo pode ser ajustada de diferentes maneiras,
conforme as necessidades e limitações específicas de cada organização. As opções organizacionais
para governança de dados dependem da estrutura existente na instituição, dos objetivos da
governança de dados e da disposição cultural da organização para centralização e colaboração.
Nesse sentido, temos:

              Componentes da Governança de Dados em Diferentes Níveis Organizacionais (DMBOK/ENAP)

        Receita Federal (Analista Tributário) Fluência em Dados                                      34
        www.estrategiaconcursos.com.br                                                               120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

     TIPO DE MODELO                                             DESCRIÇÃO
                      Em um modelo centralizado, uma organização de governança de dados supervisiona todas
      CENTRALIZADO
                      as atividades em todas as áreas de assuntos.
         REPLICADO    Em um modelo replicado, o mesmo modelo operacional e padrões da governança de dados
       (COLEGIADO)    são adotados por cada unidade de negócios.
         FEDERADO     Em um modelo federado, uma organização de governança de dados coordena-se com
   (COMPARTILHADO)    várias unidades de negócios para manter definições e padrões consistentes.

      Receita Federal (Analista Tributário) Fluência em Dados                                           35
      www.estrategiaconcursos.com.br                                                                    120

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Data Stewardship
                                                                                             INCIDÊNCIA EM PROVA: baixa

Um "steward" é uma pessoa cuja função é administrar a propriedade de outra pessoa. Data
Stewards gerenciam ativos de dados em nome de outros e no melhor interesse da organização. Eles
representam os interesses de todas as partes interessadas e devem adotar uma perspectiva
empresarial para garantir que os dados da empresa sejam de alta qualidade e possam ser usados de
forma eficaz.

Data Stewardship é o termo mais comum para descrever a prestação de contas e a
responsabilidade por dados e processos que garantem o controle e o uso eficazes dos ativos de
dados. A administração pode ser formalizada por meio de cargos e descrições ou pode ser uma
função menos formal conduzida por pessoas que tentam ajudar uma organização a obter valor de
seus dados.

O foco das atividades de administração será diferente de organização para organização,
dependendo da estratégia organizacional, da cultura, dos problemas que uma organização
está tentando resolver, de seu nível de maturidade em gerenciamento de dados e da
formalidade de seu programa de administração. No entanto, na maioria dos casos, as atividades
de gerenciamento de dados se concentrarão em alguns, se não em todos os itens a seguir:

              atividades                                          DESCRIÇÃO
              Criação de Padronização, definição e gerenciamento de terminologia de negócios, valores de
       Gerenciamento de dados válidos e outros metadados críticos.
    Metadados Principais
                           Definição/documentação de regras de negócios, padrões e regras de qualidade de
 Documentação de Regras dados. As expectativas usadas para definir dados de alta qualidade são frequentemente
              e Padrões formuladas em termos de regras fundamentadas nos processos de negócios que criam
                           ou consomem dados.
      Gerenciamento de     Os organizadores geralmente estão envolvidos na identificação, priorização e resolução
                           de problemas relacionados a dados ou na facilitação do processo de resolução.
 Problemas de Qualidade
               de Dados

        Receita Federal (Analista Tributário) Fluência em Dados                                                    36
        www.estrategiaconcursos.com.br                                                                            120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

  Execução de Atividades   Os organizadores são responsáveis por garantir que as políticas e iniciativas de
                           governança de dados sejam cumpridas diariamente. Influenciam as decisões para
         Operacionais de
                           garantir que os dados sejam gerenciados de maneira a apoiar os objetivos gerais da
    Governança de Dados    organização.


Ele também pode ser chamado de curador de dados, custodiante de dados, mordomo de dados
ou administrador de dados – é uma pessoa cujo trabalho é administrar a propriedade de outra
pessoa. Dependendo da complexidade da organização e dos objetivos de seu programa de
governança de dados, Data Stewards formalmente nomeados podem ser diferenciados por seu
lugar dentro de uma organização, pelo foco de seu trabalho ou por ambos.

Exemplos: Chief Data Stewards, Executive Data Stewards, Enterprise Data Stewards, Business
Data Stewards, Data Owner, Technical Data Stewards e Coordinating Data Stewards.

Políticas de Dados

As políticas de dados são diretrizes que codificam os princípios e a intenção de gerenciamento em
regras fundamentais que regem a criação, aquisição, integridade, segurança, qualidade e uso de
dados e informações. As políticas de dados são globais. Elas suportam padrões de dados, bem
como comportamentos esperados relacionados aos principais aspectos do gerenciamento e
uso de dados.

As políticas de dados variam amplamente entre as organizações. As políticas de dados
descrevem o “o quê” da governança de dados (o que fazer e o que não fazer), enquanto os padrões
e procedimentos descrevem “como” fazer a governança de dados. Deve haver relativamente
poucas políticas de dados e elas devem ser declaradas de forma breve e direta.

Avaliação de Políticas de Dados

A avaliação de ativos de dados é o processo de entender e calcular o valor econômico dos dados
para uma organização. Como dados, informações e até Business Intelligence são conceitos
abstratos, as pessoas têm dificuldade em alinhá-los com impacto econômico. A chave para
entender o valor de um item não fungível (como dados) é entender como ele é usado e o valor
trazido por seu uso.

Ao contrário de muitos outros ativos (Ex: dinheiro, equipamento físico), os conjuntos de dados
não são intercambiáveis (fungíveis). Os dados do cliente de uma organização diferem dos dados
de outra organização de maneiras importantes; não apenas os próprios clientes, mas os dados
associados a eles (Ex: histórico de compras, preferências, etc) ser um diferencial competitivo.

A maioria das fases do ciclo de vida dos dados envolve custos (incluindo aquisição, armazenamento,
administração e descarte de dados). Os dados só agregam valor quando são usados. Quando
usados, os dados também criam custos relacionados ao gerenciamento de riscos. Logo, o valor

        Receita Federal (Analista Tributário) Fluência em Dados                                            37
        www.estrategiaconcursos.com.br                                                                     120

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

surge quando o benefício econômico do uso de dados supera os custos de aquisição e
armazenamento, bem como o gerenciamento de riscos relacionados ao uso.

       Receita Federal (Analista Tributário) Fluência em Dados                        38
       www.estrategiaconcursos.com.br                                                 120

                                   


---

     Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
     Aula 03

Gestão de Dados Mestres (GDM)
                                                                                              INCIDÊNCIA EM PROVA: baixa


A Gestão de Dados Mestres (GDM)2 é uma abordagem disciplinada para gerenciar e manter os
dados essenciais de uma organização, garantindo sua precisão, consistência, e acessibilidade
em toda a empresa. Esses dados essenciais, conhecidos como dados mestres, geralmente incluem
informações essenciais sobre clientes, produtos, fornecedores, ativos e outros elementos
fundamentais que são usados por diversas partes da organização.

    Características de gdm                                  DESCRIÇÃO
       Integração de dados A Gestão de Dados Mestres (GDM) busca integrar dados de várias fontes e sistemas
                           diferentes dentro de uma organização para criar uma fonte única e confiável de
                           informações mestres. Isso pode envolver a consolidação de vários sistemas de dados,
                           eliminando inconsistências e duplicidades.
      Governança de dados A Gestão de Dados Mestres (GDM) estabelece políticas, procedimentos, e padrões para
                           o gerenciamento de dados mestres, incluindo controle de acesso, qualidade de dados,
                           conformidade e segurança. A governança é essencial para manter a integridade e a
                           segurança dos dados ao longo do tempo.
        Qualidade de dados A Gestão de Dados Mestres (GDM) envolve processos contínuos para limpar, enriquecer
                           e manter a qualidade dos dados mestres. Isso assegura que os dados sejam precisos,
                           completos e atualizados, o que é essencial para operações de negócios eficazes e tomada
                           de decisões informadas.
           Visão unificada A abordagem proporciona uma visão holística e consistente dos dados mestres. Por
                           exemplo, informações de cliente consistentes em marketing, vendas, e suporte ao cliente
                           podem melhorar significativamente a eficiência operacional e a satisfação do cliente.

                                                          BENEFÍCIOS
    Conhecimento abrangente dos domínios relativos aos nomes dos dados.
    Relatórios com maior grau de qualidade.
    Gerenciamento de riscos mais apurados devido à maior confiança nos ativos de dados.
    Melhoria nas operações de manipulação dos dados e redução de custos.
    Melhoria da análise e do planejamento de custos (orçamento).
    Aderência às exigências regulatórias.
    Visão integrada dos dados.
    Simplificação do desenvolvimento de aplicações com a nova arquitetura de MDM.


A nossa bíblia para esse assunto é o livro Gestão e Governança de Dados de Bergson Lopes Rêgo.
Ele afirma que os dados desses conceitos são considerados mestres e constituem os principais
dados de uma empresa. De forma geral, esses dados são categorizados por outros dados,
considerados dados de referência.

2
    Também chamado de Master Data Management (MDM).

            Receita Federal (Analista Tributário) Fluência em Dados                                                 39
            www.estrategiaconcursos.com.br                                                                         120

                                          


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Quando a empresa não possui uma gestão efetiva desses conceitos, representados sob a ótica dos
dados, cada vez mais são criados silos de dados, gerando um número crescente de disparidades de
conceitos e valores nas aplicações da empresa e apresentando duplicações e representações
redundantes, muitas vezes diferentes, sobre os mesmos conceitos.

A Gestão de Dados Mestres e Referência procura eliminar essas disparidades e fornecer
mecanismos para eliminar a cultura “feudal” sobre o uso dos dados. Um dos mais importantes
princípios do MDM é que o dado não é de uso exclusivo de uma determinada área e sim de toda a
empresa.

Dados Mestres

Os dados mestres são dados sobre as entidades de negócio que provêm um contexto para as
transações de negócio. Entre exemplos de dados mestres podemos citar: clientes, fornecedores,
funcionários, produtos, contratos, imóveis, contas, etc. Eles são considerados dados críticos para o
negócio, tendem a ser mais estáveis que os dados de transação e são utilizados por mais de uma
área de negócio.

Exemplo: um cliente pode estar envolvido em vários processos de negócio, tais como campanhas
de marketing, sistemas de vendas, faturamento e cobrança. Os dados mestres são classificados em
três grandes grupos: pessoas, coisas e locais.

Diferentemente dos dados de referência, dados mestres usualmente não são limitados a valores de
domínios predefinidos. Entretanto, regras de negócio podem influenciar no formato e nos
intervalos permitidos para os valores dos dados mestres.

Os dados mestres são encontrados tanto no patamar operacional quanto no estratégico, apoiando
os processos de tomada de decisão da empresa. Em sistemas transacionais, os dados mestres estão
quase sempre envolvidos com dados de transações. Um cliente compra um produto. Um
fornecedor vende um item e um parceiro entrega uma caixa de materiais em um local.

Os dados mestres são os dados autorizáveis disponíveis mais precisos sobre as entidades chave do
negócio. São utilizados para estabelecer um contexto para os dados das transações. Esta relação
entre dados mestres e dados transacionais pode ser considerada, de forma geral, como uma relação
“verbo/substantivo”. Os dados transacionais capturam os verbos, como vender, entregar, comprar;
já os dados mestres são os substantivos.

Dados de Referência

Dados de referência são utilizados para categorizar (agrupar ou classificar) outros dados,
principalmente os dados mestres. Os dados de referência podem ser de origem externa ou interna
à corporação. São armazenados em tabelas constituídas por códigos e suas descrições. Entre alguns


        Receita Federal (Analista Tributário) Fluência em Dados                                  40
        www.estrategiaconcursos.com.br                                                           120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

exemplos podemos citar: cargos, unidades federativas, municípios, moedas, unidades de medida,
etc.

Os dados de referência não representam um papel primário nas transações que são processadas
pelas aplicações da empresa. Entretanto, eles conectam os dados da empresa às informações
mantidas por outras aplicações e até mesmo por outras empresas ou organizações. Como exemplo,
as tabelas de municípios e Unidades da Federação mantidas pelo IBGE. Vejamos uma tabela
adaptada de Rêgo (2013) que compara dados mestres e dados de referência sob alguns aspectos:

                      Dados mestres                                          Dados de referência
                                Muitas linhas por tabela Poucas linhas por tabela

                              Muitas colunas por tabela Poucas colunas por tabela

                        Poucas tabelas na base de dados Muitas tabelas na base de dados

                      Sofre alterações mais rapidamente Sofre alterações mais lentamente

            Altamente compartilhados dentro da empresa Ainda mais compartilhados dentro da empresa e entre
                                                       empresas


Dados Transacionais

É a categoria que abrange os dados oriundos das atividades do negócio, tais como: informações
sobre ordens de compra, faturas e demonstrações financeiras. São informações registradas como
fatos nos modelos multidimensionais ou transações nos modelos entidade-relacionamento. Os
dados transacionais são aqueles que alimentam e impulsionam os indicadores de negócio da
empresa. Dependem inteiramente dos dados mestres para serem contextualizados.

O modelo de dados representado na figura a seguir demonstra exemplos de dados transacionais,
além dos dados mestres e dados de referência. Os dados transacionais não são compartilhados e
pertencem a uma ou poucas áreas.

        Receita Federal (Analista Tributário) Fluência em Dados                                          41
        www.estrategiaconcursos.com.br                                                                   120

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Linhagem de Dados
                                                                                       INCIDÊNCIA EM PROVA: baixa


No contexto de Governança de Dados, a Linhagem de Dados refere-se ao rastreamento e
documentação do ciclo de vida completo dos dados dentro de uma organização. Isso inclui a
origem dos dados, as transformações pelas quais eles passam, e os destinos onde são armazenados
ou utilizados ao longo do tempo. A linhagem de dados proporciona uma visão clara de como os
dados fluem através dos sistemas e processos da organização, permitindo identificar:

▪ Origem dos Dados: de onde os dados foram obtidos originalmente (por exemplo, sistemas de
  origem, fontes externas, bases de dados).

▪ Transformações: quais alterações, cálculos ou processos foram aplicados aos dados à medida
  que eles se moveram através dos sistemas (por exemplo, limpeza de dados, agregações,
  transformações de formatos).

▪ Destinos e Uso: onde os dados são armazenados e como são utilizados, incluindo relatórios,
  análises ou outras aplicações.

▪ Interdependências: como diferentes sistemas e processos interagem com os mesmos
  conjuntos de dados e como essas interações podem afetar a qualidade e a consistência dos
  dados.

De acordo com Barbieri (2019), a Linhagem de Dados (Data Lineage) significa o entendimento de
cada passo ao longo dos processos, observando quais dados e matadados entraram em cada bloco
de processamento, quais dados saíram, quais foram os processamentos efetuados, regras
aplicadas, etc. Quando houver um problema específico no fluxo de processamento dos dados, a
linhagem será de grande valia para você depurar os pontos e as causas do problema. A linhagem de
dados é essencial para a governança de dados por várias razões:

▪ Qualidade e Confiança nos Dados: compreender a linhagem dos dados ajuda a garantir que os
  dados são precisos, completos e consistentes em todas as etapas de seu ciclo de vida.

▪ Auditoria e Conformidade: em muitos setores, é necessário demonstrar a conformidade com
  regulamentações e normas. A linhagem de dados permite que as organizações rastreiem o
  histórico dos dados e demonstrem como eles foram manipulados.

▪ Resolução de Problemas: se surgirem questões de qualidade de dados ou discrepâncias, a
  linhagem de dados permite rastrear a origem do problema e identificar onde ele ocorreu.

▪ Transparência: fornece clareza sobre os processos de manipulação de dados, permitindo que
  as partes interessadas confiem nos dados utilizados para tomadas de decisão.

        Receita Federal (Analista Tributário) Fluência em Dados                                              42
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                                                RESUMO

GOVERNANÇA Provê direcionamento, monitoramento, supervisão e avaliação da prática da gestão, ou seja,
   DE DADOS estabelece as diretrizes e as políticas a serem seguidas pela Gestão de Dados.


  GESTÃO DE É inerente e integrada aos processos organizacionais, sendo responsável pelo planejamento,
     DADOS execução, controle e monitoramento. Enfim, pelo manejo dos recursos e poderes colocados à
              disposição de órgãos e entidades para a consecução de seus objetivos. De modo geral, a Gestão de
              Dados executa as políticas e diretrizes definidas pela Governança de Dados.

          ESCOPO/foco                                           DESCRIÇÃO
                         Definir, comunicar e conduzir a execução da estratégia de dados e da estratégia de
            ESTRATÉGIA   governança de dados.

                         Definição e aplicação de políticas relacionadas ao gerenciamento de dados e
              POLÍTICAS metadados, acesso, uso, segurança e qualidade.

                         Definição e aplicação de padrões de qualidade e arquitetura de dados.
   PADRÕES E QUALIDADE

                         Fornecer observação prática, auditoria e correção em áreas-chave de qualidade, política
            SUPERVISÃO
                         e gerenciamento de dados (muitas vezes referido como administração).


      Receita Federal (Analista Tributário) Fluência em Dados                                                 43
      www.estrategiaconcursos.com.br                                                                          120

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                          Garantir que a organização possa atender aos requisitos de conformidade regulatória
           CONFORMIDADE   relacionados a dados.


      GERENCIAMENTO DE Identificar, definir, escalar e resolver problemas relacionados à segurança de dados,
                       acesso, qualidade de dados, conformidade regulatória, propriedade de dados, política,
            PROBLEMAS padrões, terminologia ou procedimentos de governança de dados.
           PROJETOS DE Patrocinar esforços para melhorar as práticas de gerenciamento de dados.
GERENCIAMENTO DE DADOS
 AVALIAÇÃO DE ATIVOS DE Estabelecer padrões e processos para definir consistentemente o valor comercial dos
                        ativos de dados.
                 DADOS


      PRINCIPAIS                                                DESCRIÇÃO
     VANTAGENS
                A regulação brasileira sobre proteção de dados pessoais tornou o assunto ainda mais latente,
FORTALECIMENTO demostrando a necessidade crítica de cuidar dos dados dos cidadãos e proteger sua privacidade.
DA SEGURANÇA DE Assim, a Governança de Dados servirá para criar regras e ferramentas que protegem e prezam
                pela qualidade dos dados, bem como ampliar as práticas de segurança utilizadas pelos órgãos.
           DADOS

                   Fazer Governança de Dados possibilita a construção de uma cultura de excelência operacional,
   AUMENTO DA      o que reflete diretamente na melhoria da consistência dos dados. Possibilitando ainda
                   redesenhar os processos de gestão de dados dentro de uma estratégia organizacional, para
     EFICIÊNCIA
                   melhoria contínua na oferta de serviços públicos e consecução das políticas oferecidas para o
ORGANIZACIONAL     cidadão. Tornar equipes e processos mais eficientes proporciona a redução de custos
                   operacionais, podendo esses recursos serem redistribuídos para outras inciativas.
                   Para decisões baseadas em dados, é essencial garantir informações confiáveis, organizadas,
   MELHORIA NA     precisas e interpretáveis. Melhorar a eficiência operacional, processos e segurança dos dados
                   aumenta a confiança no ecossistema de dados governamentais, que inclui a administração
    TOMADA DE
                   pública, cidadãos, sociedade civil, academia, organizações internacionais, setor privado e
       DECISÃO     outros interessados. A Governança de Dados permite gestores visualizar e prever problemas,
                   oferecendo alternativas para soluções eficientes.
                   A não conformidade com dados organizacionais pode acarretar severas penalidades em setores
                   regulados como saúde, educação, produção, seguro e finanças, resultando em custos altos,
    REDUÇÃO DE     perda de produtividade, receita e interrupções. A Governança de Dados ajuda a identificar,
        RISCOS     mitigar e contornar esses riscos. É essencial para aumentar o uso e reuso de dados, garantir
                   acesso igualitário, proteger contra uso indevido e construir um sistema integrado de dados no
                   Brasil, melhorando a qualidade dos dados e a tomada de decisões baseadas em evidências.
                   O Brasil se destaca na inovação, competitividade e digitalização de serviços, superando países
                   vizinhos. A implementação de diretrizes de Governança de Dados pode potencializar esses
     FOMENTO A     aspectos, promovendo a democratização e o uso amplo de dados. Isso fomenta a inovação nos
      INOVAÇÃO     serviços públicos, permitindo alcançar resultados inéditos. Exemplos incluem o "Meu INSS",
                   carteiras digitais de trabalho e trânsito, o Pix e a plataforma Gov.br, todos derivados de
                   iniciativas baseadas em dados.


          Papeis                                            DESCRIÇÃO


      Receita Federal (Analista Tributário) Fluência em Dados                                                  44
      www.estrategiaconcursos.com.br                                                                           120

                                   


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

              Os Gestores das Informações são as pessoas que representam as áreas proprietárias das
              informações. Entende-se como área proprietária a estrutura organizacional que origina ou
 Gestores das adquire as informações. Somente os gestores das informações podem definir questões sobre o
 informações uso dos dados, tais como: classificação da segurança das informações, definição das permissões
              e acesso às informações e opções de descarte.

                  Os Mantenedores, também conhecidos como custodiantes, são as organizações responsáveis
                  pela guarda e disponibilização das informações conforme diretrizes estabelecidas pelos Gestores
                  das Informações. Os custodiantes não devem definir ou tomar decisões em relação às questões
Mantenedores
                  sobre o uso dos dados que são de responsabilidade dos Gestores das Informações. Entre os
                  mantenedores conhecidos, podemos destacar a área de TI ou empresas especializadas em guarda
                  de informações, sejam elas armazenadas na nuvem (cloud) ou não.
                  Os Criadores de Dados e Informações registram as informações dentro das aplicações que
Criadores dos     armazenam os dados. Algumas aplicações também atuam como criadores dos dados, onde,
      dados e     através de interfaces específicas, incluem ou alteram os dados armazenados. Geralmente
 informações      possuem acessos de criação, edição e consulta às informações.

             Os Consumidores dos Dados e informações são pessoas ou aplicações que utilizam os dados
Consumidores armazenados para execução de algum propósito. Os consumidores dos dados podem ser diretos,
             com acesso direto às informações solicitadas (ex.: consulta online a uma aplicação) ou então
   dos dados indiretos, onde o acesso à informação é obtido através de outras pessoas ou aplicações.

                  O Staff da Gestão de Dados, formado por Gestores Técnicos de Dados, Gestores Estratégicos de
     Staff da Dados e Gestores de Dados de Negócio, é responsável por definir, orientar, executar,
    gestão de acompanhar e avaliar os mecanismos de controle estabelecidos nos processos de Governança de
       dados Dados.


     CARACTERÍSTICA                                             DESCRIÇÃO
                         A governança de dados é um processo contínuo que requer compromisso da organização.
                         Exige mudanças na maneira como os dados são gerenciados e usados. Isso significa
          Sustentável
                         gerenciar as mudanças de maneira sustentável, além da implementação inicial de qualquer
                         componente de controle de dados.
                         A governança de dados não é um processo complementar. As atividades de governança
                         precisam ser incorporadas aos métodos de desenvolvimento de software, uso de dados
          incorporado
                         para análise, gerenciamento de dados mestre e gerenciamento de riscos.

                         A governança de dados bem implementada gera impactos positivos, mas demonstrar esse
                         impacto requer a compreensão do ponto de partida, do planejamento e definição de
               medido
                         indicadores que represente o quanto a governança de dados gera melhorias mensuráveis.

            princípios                                          DESCRIÇÃO
          LIDERANÇA E A governança de dados bem-sucedida começa com uma liderança visionária,
                      comprometida e alinhada à estratégia de negócios da organização.
           ESTRATÉGIA
      Orientado aos A governança de dados é um programa de negócios que deve governar as decisões de TIC
           negócios relacionadas aos dados, assim como governa a interação dos negócios com os dados.


      Receita Federal (Analista Tributário) Fluência em Dados                                                  45
      www.estrategiaconcursos.com.br                                                                           120

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

   Responsabilidade A governança de dados é uma responsabilidade compartilhada entre gestores de negócios
                    e profissionais de gerenciamento de dados.
     compartilhada
                       A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.
        MULTICAMADA

           Baseado em Como as atividades de governança de dados exigem coordenação entre áreas funcionais,
                      o programa de governança de dados deve estabelecer uma estrutura operacional que
            estrutura defina responsabilidades e interações.
           Baseado em Os princípios orientadores são a base das atividades de governança de dados e,
                       principalmente, da política de governança de dados.
            princípios


  governança de
                                                                 DESCRIÇÃO
         dados
                   A governança de dados é a gestão de dados definida e aplicada nos altos níveis da empresa pelos
    É uma gestão executivos. Em suma, ela é a tomada de decisões a respeito de gestão de dados pela alta
  estratégica de administração. Tentar emplacar alguma iniciativa de governança de dados sem prever esta
           dados premissa é assinar a sentença de morte do programa. Iniciativas de governança de dados não
                 devem começar nem ser somente aplicadas nos níveis táticos e operacionais das empresas.
                 Este patrocínio deve ser constante em todo o programa. Claro que nas fases iniciais o patrocínio
         Requer se torna mais evidente por questões de estratégia de implantação e divulgação do programa,
                 porém sempre deverá existir no decorrer do programa, sob pena das novas iniciativas não serem
      patrocínio totalmente adotadas devido a diversos fatores, desde os culturais (como resistência a
                 mudanças) até os financeiros, cuja falta impacta o andamento e a conclusão das iniciativas.
                 Veremos depois que a governança de dados funciona semelhante a um governo. Se fizermos
                 uma analogia, poderemos ter uma subdivisão em governança de dados legislativa, executiva e
   É um governo judiciária.


               A governança de dados não pode simplesmente ser adotada através de um projeto. Segundo a
               definição, um projeto é um esforço temporário empreendido para criar um produto, serviço ou
 É um programa resultado exclusivo. Os projetos são exclusivos (únicos), possuem tempo e orçamentos
               limitados. Mesmo após um projeto inicial de implantação, para adotar a governança de dados
               de forma efetiva, vários projetos serão necessários no decorrer do tempo.


                                        Princípios de Governança de dados
Dado é um ativo e, portanto, deverá haver responsabilidade formal e final sobre eles (accountability). Os dados e
seus conteúdos de todos os tipos são considerados ativos, da mesma forma que os outros tipos como ativos físicos,
materiais e financeiros, exigindo, dessa forma, procedimentos de controle organizacional similares.
A informação deverá vir de uma fonte autorizada, estar disponível, ser precisa, íntegra e sem ambiguidade, além
de passível de ser compartilhada e catalogada (metadados). Soluções de dados manterão estrito alinhamento com
os negócios da empresa, respondendo às suas necessidades e às requisições das áreas envolvidas.
O valor do dado está no aspecto intrínseco que ele retorna para a empresa, agregando e melhorando os seus
objetivos operacionais e negociais. A governança de dados deverá respaldar esse princípio.

       Receita Federal (Analista Tributário) Fluência em Dados                                                  46
       www.estrategiaconcursos.com.br                                                                           120

                                   


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

A governança de dados é um programa de negócios e, como tal, suas definições formalmente aprovadas deverão
governar a interação da TI com os dados, da mesma forma que a interação da área de negócios com esses mesmos
ativos.
A governança de dados é de responsabilidade compartilhada entre gestores de dados de áreas de negócios em
parceria com profissionais de TI, que atuam nas diversas gerências de dados (Arquitetura, BD, DW/BI, etc.). A união
lógica e funcional entre a Governança e a Gerência dos dados forma o conceito maior de Gestão de Dados.
Cada programa de Governança e de Gerência de dados é único e deve-se levar sempre em conta as características
específicas de cada organização e de sua cultura.

Os melhores gestores de dados já existem e raramente são contratados. Devem ser escolhidos entre os que já
estão envolvidos com dados nas suas respectivas áreas (SME) e demonstram interesse nessa nova forma de
tratamento desses ativos.
A tomada de decisão compartilhada é a marca da Governança de Dados, envolvendo as diversas camadas definidas
no seu modelo operacional

Com o crescimento dos conceitos de Big Data, Data Science e Inteligência Artificial, a empresa deverá estabelecer
princípios éticos sobre a utilização dos dados, preservando aspectos de privacidade, segurança, equidade e
direitos, controlando o seu uso, a fim de evitar problemas neste patamar.

      TIPO DE MODELO                                             DESCRIÇÃO
                       Em um modelo centralizado, uma organização de governança de dados supervisiona todas
        CENTRALIZADO
                       as atividades em todas as áreas de assuntos.
          REPLICADO    Em um modelo replicado, o mesmo modelo operacional e padrões da governança de dados
        (COLEGIADO)    são adotados por cada unidade de negócios.
          FEDERADO     Em um modelo federado, uma organização de governança de dados coordena-se com
    (COMPARTILHADO)    várias unidades de negócios para manter definições e padrões consistentes.

       Receita Federal (Analista Tributário) Fluência em Dados                                                   47
       www.estrategiaconcursos.com.br                                                                            120

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

             Componentes da Governança de Dados em Diferentes Níveis Organizacionais (DMBOK/ENAP)

             atividades                                          DESCRIÇÃO
             Criação de Padronização, definição e gerenciamento de terminologia de negócios, valores de
                        dados válidos e outros metadados críticos.
      Gerenciamento de
   Metadados Principais
Documentação de Regras Definição/documentação de regras de negócios, padrões e regras de qualidade de
             e Padrões dados. As expectativas usadas para definir dados de alta qualidade são frequentemente

       Receita Federal (Analista Tributário) Fluência em Dados                                            48
       www.estrategiaconcursos.com.br                                                                     120

                                   


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                          formuladas em termos de regras fundamentadas nos processos de negócios que criam
                          ou consomem dados.
     Gerenciamento de     Os organizadores geralmente estão envolvidos na identificação, priorização e resolução
                          de problemas relacionados a dados ou na facilitação do processo de resolução.
Problemas de Qualidade
              de Dados
 Execução de Atividades   Os organizadores são responsáveis por garantir que as políticas e iniciativas de
                          governança de dados sejam cumpridas diariamente. Influenciam as decisões para
        Operacionais de
                          garantir que os dados sejam gerenciados de maneira a apoiar os objetivos gerais da
   Governança de Dados    organização.


Características de gdm                                  DESCRIÇÃO
   Integração de dados A Gestão de Dados Mestres (GDM) busca integrar dados de várias fontes e sistemas
                       diferentes dentro de uma organização para criar uma fonte única e confiável de
                       informações mestres. Isso pode envolver a consolidação de vários sistemas de dados,
                       eliminando inconsistências e duplicidades.
  Governança de dados A Gestão de Dados Mestres (GDM) estabelece políticas, procedimentos, e padrões para
                       o gerenciamento de dados mestres, incluindo controle de acesso, qualidade de dados,
                       conformidade e segurança. A governança é essencial para manter a integridade e a
                       segurança dos dados ao longo do tempo.
    Qualidade de dados A Gestão de Dados Mestres (GDM) envolve processos contínuos para limpar, enriquecer
                       e manter a qualidade dos dados mestres. Isso assegura que os dados sejam precisos,
                       completos e atualizados, o que é essencial para operações de negócios eficazes e tomada
                       de decisões informadas.
       Visão unificada A abordagem proporciona uma visão holística e consistente dos dados mestres. Por
                       exemplo, informações de cliente consistentes em marketing, vendas, e suporte ao cliente
                       podem melhorar significativamente a eficiência operacional e a satisfação do cliente.

                                                    BENEFÍCIOS
Conhecimento abrangente dos domínios relativos aos nomes dos dados.
Relatórios com maior grau de qualidade.
Gerenciamento de riscos mais apurados devido à maior confiança nos ativos de dados.
Melhoria nas operações de manipulação dos dados e redução de custos.
Melhoria da análise e do planejamento de custos (orçamento).
Aderência às exigências regulatórias.
Visão integrada dos dados.
Simplificação do desenvolvimento de aplicações com a nova arquitetura de MDM.


                    Dados mestres                                           Dados de referência
                               Muitas linhas por tabela Poucas linhas por tabela

                             Muitas colunas por tabela Poucas colunas por tabela

                      Poucas tabelas na base de dados Muitas tabelas na base de dados

       Receita Federal (Analista Tributário) Fluência em Dados                                                49
       www.estrategiaconcursos.com.br                                                                         120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                    Sofre alterações mais rapidamente Sofre alterações mais lentamente

          Altamente compartilhados dentro da empresa Ainda mais compartilhados dentro da empresa e entre
                                                     empresas

      Receita Federal (Analista Tributário) Fluência em Dados                                          50
      www.estrategiaconcursos.com.br                                                                   120

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                            REFERÊNCIAS
1. DAMA-DMBOK – Data Management Body of Knowledge – 2ª Ed. – Dama International
2. Cartilha de Governança de Dados do Poder Executivo Federal
3. ENAP – Curso de Governança de Dados – Módulo 3: Gestão Inteligente de Dados
4. Rêgo, Bergson. Gestão e Governança de Dados: Promovendo Dados como Ativo de Valor nas
   Empresas. 1ª ed. Editora Brasport (2013).
5. Barbieri, Carlos. Governança de Dados: Práticas, Conceitos e Novos Caminhos. 1ª ed. Editora
   Altabooks (2019).

        Receita Federal (Analista Tributário) Fluência em Dados                            51
        www.estrategiaconcursos.com.br                                                     120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                   DADOS
Conceitos Básicos
                                                                                 INCIDÊNCIA EM PROVA: ALTÍSSIMA


                                                       DADO

 Dados são correspondências de um atributo, característica ou propriedade que, sozinho, não tem significado.
 Dados são elementos brutos, sem significado, desvinculados da realidade.
 Dados são simples observações sobre o estado do mundo.
 Dados são um conjunto de fatos objetivos e discretos sobre eventos.
 Dados são a menor partícula estruturada que compõe uma informação.

O que podemos concluir? Podemos concluir que dados são fatos ou estatísticas coletadas para servir
de referência ou análise. O grande lance quando se pensa em dados é que eles não têm significado ou
semântica quando vistos isoladamente – eles são brutos, simples e desvinculados de contexto/realidade.
Professor, ainda não entendi! Cara... imagine que sem nenhum contexto, eu te mostro um relatório com
uma tabela escrito a palavra abaixo em todas as linhas e colunas.

Você consegue tirar alguma informação desse relatório? Não, você pode até inferir que se trata – por
exemplo – de algum relatório sobre frutas. No entanto, você não pode afirmar com certeza! Por quê?
Porque isso pode ser tanto um relatório de um hortifruti quanto um relatório de um camiseteria. E aí, sem
nenhum contexto, tem como saber? Não, é impossível! Por quê? Porque isso é apenas um dado: bruto,
simples, objetivo e desvinculado da realidade.

Dados são sucessões de fatos brutos, que não foram organizados, processados, relacionados,
contextualizados, avaliados ou interpretados, representando apenas partes isoladas de eventos,
situações ou ocorrências. Eles se constituem de unidades básicas a partir das quais informações poderão


        Receita Federal (Analista Tributário) Fluência em Dados                                                52
        www.estrategiaconcursos.com.br                                                                         120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

ser elaboradas ou obtidas. Além disso, eles são frequentemente quantificados, facilmente
estruturados, facilmente transferíveis e facilmente obtidos por máquinas.

Quando os dados são organizados, processados, relacionados, contextualizados, avaliados ou
interpretados, ele passa a ser uma informação, conforme veremos no tópico seguinte.


     (COREN/PA – 2013) Nos Sistemas de Informação, dados são:

     a) informações que possuem significado isoladamente.
     b) representações do conhecimento contextualizado.
     c) definições do real sentido das coisas.
     d) correspondências de um atributo, característica ou propriedade que, sozinho, não tem
     significado.
     _______________________
     Comentários: dados são correspondências de um atributo, característica ou propriedade que, sozinho, não tem significado (Letra
     D).

     (CEFET – 2014) Para os sistemas de informação, definem-se dados como:

     a) melhoria contínua de processos organizacionais.
     b) resultado da análise do ambiente de negócios.
     c) fatos organizados e apresentados de forma útil
     d) sequências de fatos ainda não analisados.
     e) decisões tomadas pelos gestores da organização.
     _______________________
     Comentários: dados são sequências de fatos ainda não analisados, isto é, brutos (Letra D).

     (CGE/PB – 2008 – Letra B) Dados são elementos brutos, sem significado, desvinculados da
     realidade.
     _______________________
     Comentários: eles realmente são elementos bruto, sem significado e desvinculados da realidade (Correto).

Agora precisamos ver a diferença entre dados estruturados e não estruturados. Basicamente, dados
estruturados são rigidamente organizados e formatados de uma maneira que seja facilmente
pesquisável em bases de dados relacionais. Professor, você falou grego agora! Calma, tudo isso será
detalhado futuramente, mas – simplificando – bases de dados relacionais nada mais são que tabelas
(linhas e colunas) que armazenam dados.

Logo, se eu consigo organizar um conjunto de dados em um formato que possa ser exibido em uma
tabela, então esse é um conjunto de dados estruturados. Certinho? Já os dados não-estruturados não
possuem um formato ou uma organização predefinida, tornando muito mais difícil sua coleta,
processamento e análise. Sim, a maneira como os dados são coletados, processados e analisados
depende completamente do formato em que eles estão.

        Receita Federal (Analista Tributário) Fluência em Dados                                                                       53
        www.estrategiaconcursos.com.br                                                                                                120

                                          


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

      Receita Federal (Analista Tributário) Fluência em Dados                        54
      www.estrategiaconcursos.com.br                                                 120

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Dados Estruturados
                                                                                 INCIDÊNCIA EM PROVA: ALTÍSSIMA

Dados estruturados são frequentemente categorizados como dados quantitativos. No seu trabalho,
provavelmente você está acostumado a trabalhar com eles. Tente se lembrar! Os dados que você trabalha
podem ser organizados em linhas e colunas de bases de dados relacionais? Se sim, você trabalha com
dados estruturados! Exemplos: nomes, datas, endereços, números de cartão de crédito, tabelas do Excel,
metadados (que são dados sobre dados), entre outros.

Galera, o bacana dos dados estruturados é que eles podem ser facilmente compreendidos e manipulados
por linguagens de máquinas – pode-se manipular dados estruturados com relativa rapidez e essa é uma
de suas maiores vantagens: você pode ordenar, agregar, separar, juntar, inserir, atualizar, deletar e
consultar dados e tabelas com facilidade. A tabela que vimos no exemplo do tópico anterior é um
exemplo de dado estruturado.

      NOME                    SEXO                   IDADE                 SALÁRIO          NATURALIDADE


       ALICE                Feminino                   18                 R$ 8.500,00             DF

    BERNARDO                Masculino                  26                 R$ 2.000,00             GO

    CAROLINA                Feminino                   30                 R$ 9.500,00             TO

       DAVI                 Masculino                  22                 R$ 1.500,00             RR

    EDUARDA                 Feminino                   32                 R$ 7.500,00              SP

      FELIPE                Masculino                  24                 R$ 3.000,00              RJ

    GABRIELA                Feminino                   28                 R$ 6.500,00             PA

      HUGO                  Masculino                  20                 R$ 1.000,00              RS

Note que, para cada linha dessa tabela, nós temos sempre as mesmas cinco colunas, com os mesmos
atributos e os atributos são sempre do mesmo tipo para cada coluna (Ex: Salário é sempre um Número;
Sexo é sempre uma Palavra; Naturalidade são sempre duas letras; entre outras). Viram como é rígido? E
tem mais: eu não consigo inserir um novo atributo na tabela sem antes modificá-la (Ex: CPF) – caso eu
queira inserir essa informação, devo adicionar uma coluna!

        Receita Federal (Analista Tributário) Fluência em Dados                                             55
        www.estrategiaconcursos.com.br                                                                      120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Dados Não-Estruturados
                                                                                 INCIDÊNCIA EM PROVA: ALTÍSSIMA

Dados não-estruturados são dados que não possuem um formato ou organização predefinida.
Assim como os dados estruturados são frequentemente categorizados como dados quantitativos, os
dados não-estruturados são frequentemente categorizados como qualitativos, e não podem ser
processados e analisados utilizando ferramentas e métodos convencionais. Exemplos: texto, vídeo, áudio,
atividades de mídias sociais, entre outros.

Dados não-estruturados são difíceis de desconstruir porque não têm um formato ou modelo
predefinido, significando que não podem ser organizados em uma base de dados relacional. Mais
de oitenta por cento de todos os dados gerados atualmente são considerados não-estruturados, e esse
número só tende a continuar crescente com o surgimento da Internet das Coisas – tecnologia que permite
que vários objetos estejam conectados à internet.

        Receita Federal (Analista Tributário) Fluência em Dados                                             56
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Dados Semiestruturados
                                                                                       INCIDÊNCIA EM PROVA: BAIXA


Dados semiestruturados é uma mistura dos dados estruturados com os dados não-estruturados. Eles
não estão de acordo com a estrutura formal dos modelos de dados associados com bancos de dados
relacionais ou outras formas de tabelas de dados, mas contêm tags ou outros marcadores para separar
elementos semânticos e impor hierarquias de registros e campos dentro dos dados. Temos os dados
junto com um esquema de representação parcialmente organizados!

Pensem em um dado que não pode ser perfeitamente encaixado em uma base de dados relacional,
mas ele também não é completamente sem formato. Um exemplo clássico é o XML, que é uma
linguagem que permite autodescrever um dado! Em outras palavras, ela apresenta o dado e, junto com
ele, apresenta uma autodescrição. Eu sei que está difícil de imaginar, mas eu vou dar um exemplo...

<xml version="1.0" encoding="UTF-8" standalone="yes" ?>

<MUSICAS xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <MUSICA>
        <NOME> THE SCRIPT FOR MY REQUIEM </NOME>
        <BANDA> BLIND GUARDIAN </BANDA>
        <ALBUM> IMAGINATIONS FROM THE OTHER SIDE </ALBUM>
    </MUSICA>
    <MUSICA>
        <NOME> STARLESS </NOME>
        <BANDA> KING CRIMSON </BANDA>
        <ALBUM> MELTDOWN </ALBUM>
    </MUSICA>
    <MUSICA>
        <NOME> CALADVWCH </NOME>
        <BANDA> DARK AVENGER </BANDA>
        <ALBUM> ALIVE IN THE DARK </ALBUM>
    </MUSICA>
</MUSICAS>


Esse é um exemplo de dado escrito em linguagem XML! Notem que os dados em si são os que estão
com a cor preta – todo o resto são dados que auxiliam a descrever os dados. Apesar de, nesse
exemplo, termos estruturas idênticas para cada música/banda/álbum, nada impede que haja estruturas
diferentes para cada um. Por essa razão, não é possível dizer que se trata de dados completamente
estruturados ou dados completamente não-estruturados. Então, o que ele é?

XML descreve dados semiestruturados, porque veja que é possível identificar marcações em seu código,
portanto você poderia dizer que são dados estruturados. No entanto, essas tags não possuem uma ordem
ou padrão específico. Você pode organizá-las da maneira que achar adequado. Se meus dados possuem
marcações identificáveis, mas sem ordem e padrão fixo, trata-se de dados semiestruturados – assim
como HTML e outras linguagens de marcação!

        Receita Federal (Analista Tributário) Fluência em Dados                                               57
        www.estrategiaconcursos.com.br                                                                        120

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

Por fim, é possível classificar os tipos de dados quanto à capacidade de terem suas estruturas descritas
implicitamente ou explicitamente. Vejamos:

▪    Dados Estruturados: possuem uma estrutura predefinida, logo ela pode ser descrita de forma
     explícita – você bate o olho e identifica um padrão definido;

▪    Dados Não-Estruturados: não possuem uma estrutura predefinida, logo ela não pode ser descrita
     (implícita ou explicitamente) – você bate o olho e não identifica um padrão definido;

▪    Dados Semiestruturados: possuem parte de sua estrutura predefinida, logo alguns dados podem
     ser descritos implicitamente – você bate o olho e consegue inferir um padrão nos dados.


       (TCE/PB – 2018) Com relação a dados estruturados e não estruturados, assinale a opção
       correta.

       a) Dados não estruturados podem ser caracterizados por arquivos de diversos tipos — textos,
       imagens, vídeos, entre outros —, cujas estruturas não são descritas implicitamente.

       b) Por padrão, documentos do tipo XML (eXtensible Markup Language) são estruturados.

       c) Dados não estruturados de um mesmo grupo possuem as mesmas descrições e,
       consequentemente, os mesmos atributos.

       d) Por padrão, dados não estruturados são organizados em blocos semânticos.

       e) A alta heterogeneidade facilita as consultas aos dados não estruturados, desde que estes
       estejam ligados por ponteiros.
       _______________________
       Comentários: (a) Correto, as estruturas não são descritas implicitamente porque sequer há estrutura; (b) Errado, são
       semiestruturados; (c) Errado, são os dados estruturados de um mesmo grupo que possuem as mesmas descrições e atributos;
       (d) Errado, dados estruturados são organizados em blocos semânticos iguais; (e) Errado, ela dificulta as consultas aos dados não-
       estruturados (Letra A).

          Receita Federal (Analista Tributário) Fluência em Dados                                                                          58
          www.estrategiaconcursos.com.br                                                                                                   120

                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Métricas de Dados
                                                                                       INCIDÊNCIA EM PROVA: MÉDIA


Métricas são os valores que você usa para julgar o desempenho. Eles também são o ponto focal de
qualquer produto de dados, sendo o reflexo numérico do comportamento do mundo real que sua
organização deseja melhorar, evitar ou moldar. As métricas podem criar foco e alinhamento em uma
organização, fornecendo clareza sobre como é a melhoria. As métricas também podem criar
comportamentos contra-intuitivos ou contrários aos objetivos organizacionais.

Apesar da importância de escolher as métricas certas, é comum não pensar muito sobre o que medir.
Erros comuns na escolha de métricas incluem: métricas simples demais, métricas complexas demais,
grande quantidade de métricas, métricas enganosas, entre outros. Para evitar essas armadilhas muito
comuns e escolher a melhor métrica possível, podemos considerar a seguinte estrutura de métricas que
equilibra quatro fatores ou dimensões:

Você consegue imaginar um jogo de basquete sem aro ou uma partida de tênis sem a marcação das linhas?
Na ausência de objetivos claros e de uma forma de medir o progresso, os esportes seriam
desorganizados. Isso também é verdade para organizações: na ausência de métricas de sucesso
organizacional claramente comunicadas, os funcionários não têm como saber se estão no caminho certo,
contribuindo de maneira significativa ou apenas perdendo o controle.

Para criar uma cultura de fluência de dados, os líderes devem estabelecer as principais métricas
organizacionais que orientam os esforços individuais e da organização, mas o que faz uma boa métrica?

Metas desalinhadas, comportamentos distorcidos e uma sensação equivocada de sucesso são problemas
causados pelo uso de métricas ruins em uma organização. Um exemplo comum é o departamento de
atendimento ao cliente que rastreia chamadas atendidas sem levar em consideração a qualidade da
experiência do chamador. E se a empresa atendeu a ligação depois de o cliente esperar por uma hora? E
se a empresa atendeu a ligação, mas não resolveu o problema?

        Receita Federal (Analista Tributário) Fluência em Dados                                               59
        www.estrategiaconcursos.com.br                                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

O primeiro passo para estabelecer o que constitui uma boa métrica é entender o que você deseja
alcançar. As métricas podem servir a dois propósitos: identificar problemas e medir o desempenho.
Quando o objetivo é identificar problemas e apontar áreas de ineficiência e ineficácia operacional, definir
a métrica certa requer um pouco de trabalho, dado que necessita que se determine quais evidências
podem ser encontradas e como exatamente elas aparecem.

Quando o objetivo é medir o desempenho, as métricas de sucesso certas se concentram em medidas
que podem ser controladas e onde a melhoria na métrica é uma coisa inequivocamente boa. Depois de
ter clareza sobre a finalidade para a qual você usará determinada métrica, o próximo passo é escolher
uma boa métrica. Boas métricas incluem várias os fatores ou dimensões vistas na página anterior. E o que
são boas métricas?

  BOAS MÉTRICAS
                        CADA MÉTRICA LEVA TEMPO E ESFORÇO PARA SER CONSTRUÍDA. ANTES DE
   SÃO CRIADAS A
                        ESCOLHER A MÉTRICA, VALE A PENA FAZER PERGUNTAS À FONTE DE DADOS: OS
 PARTIR DE DADOS
                        DADOS SÃO COLETADOS DE FORMA A CAPTURAR COM PRECISÃO A REALIDADE?
     ACESSÍVEIS E
                        OS DADOS SÃO DIFÍCEIS DE COLETAR OU ATRASADOS DE FORMA A PREJUDICAR
     CONFIÁVEIS,
                        SEU VALOR? OS CONSUMIDORES ENCONTRARÃO MOTIVOS PARA QUESTIONAR A
        FÁCEIS DE
                        FONTE DE DADOS? PARA QUE OS RESULTADOS TENHAM VALIDADE E PARA QUE
 COLETAR DE UMA
                        UMA CULTURA DE ENGAJAMENTO DE DADOS SURJA EM SUA ORGANIZAÇÃO, OS
           FONTE
                        PRODUTORES DE DADOS DEVEM TER ACESSO A DADOS CONFIÁVEIS.
       CONFIÁVEL


   BOAS MÉTRICAS        Para que as métricas identificadas por uma organização moldem a prática individual e
             SÃO        coletiva, elas devem ser facilmente compreendidas, dando transparência de como foram
  TRANSPARENTES         desenvolvidas. Além disso, boas métricas são melhor expressas como um número ou
   E GERADAS POR        porcentagem. Os números também devem conter pelo menos uma unidade de medida
        CÁLCULOS        que caracterize a coisa que está sendo contada. As unidades de medida permitem que os
  COMPREENSÍVEIS        analistas de dados expressem consistentemente os resultados de um processo de
                        medição. O uso de duas medidas pode auxiliar nesse processo.
    BOAS MÉTRICAS
                        É imperativo em uma organização que todas as pessoas reconheçam o que as métricas
         TÊM UMA
                        significam e tenham certeza de que as métricas são geradas de forma consistente. Para
   INTERPRETAÇÃO
                        facilitar isso, os líderes devem garantir que os processos de medição sejam claramente
     COMUM E SÃO
                        documentados e que os funcionários compartilhem um conjunto comum de terminologia
       MEDIDAS DE
                        para entender o significado das apresentações de dados.
           FORMA
      CONSISTENTE

                        Boas métricas têm significado para os membros de uma organização e sinalizam ações
   BOAS MÉTRICAS        específicas que podem ser tomadas. Elas lançam luz sobre uma parte de baixo
              SÃO       desempenho de uma organização, registram os resultados dos esforços de melhoria
 CONTEXTUALMEN          contínua ou demonstram o valor de pessoas e processos específicos dentro da
  TE ESPECÍFICAS E      organização.
       ACIONÁVEIS

       EXEMPLO DE
            SETOR                                        EXEMPLO DE MÉTRICA


                        Custo de transporte por quilômetro, tal como o total gasto dividido pela quantidade de
      TRANSPORTE
                        km.

        Receita Federal (Analista Tributário) Fluência em Dados                                             60
        www.estrategiaconcursos.com.br                                                                      120

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

          DEPÓSITOS       Custo por metro quadrado, tal como o custo operacional total dividido pelo tamanho em
                          metro quadrado.
         MARKETING        Custo de aquisição de clientes, tal como o custo de vendas/marketing dividido por novos
                          clientes em um determinado período.
        E-COMMERCE        Taxa de conversão de um site, tal como a porcentagem de visitantes únicos do site que
                          fazem uma compra.
              INTERNET    Receita média por usuário (receita total dividida pelo número total de usuários).

Legal! Agora como nós fazemos para utilizar as métricas para impulsionar a melhoria organizacional como
um todo? Vejamos...

▪    Escolha algumas poucas métricas-chave em qualquer nível: muitas organizações acabam com
     dezenas de métricas-chave. Na verdade, essas organizações normalmente não sabem em que focar.
     Líderes devem investir tempo e energia para socializar sua organização para um pequeno conjunto
     de métricas essenciais. O desafio é oferecer uma definição clara do que está sendo medido e
                                                         ==219a34==

     demonstrar sua importância. de estabelecer um conjunto de três a cinco métricas, incorpore as
     métricas em reuniões e outros locais, dado que é saudável que essas métricas se tornem parte do
     vernáculo organizacional. Aos poucos, as pessoas vão se acostumando com as métricas e suas
     implicações sobre o negócio.

▪    Selecione as principais métricas que se alinham com a missão e a visão: uma transformação pode
     ocorrer nas organizações que aprendem no que focar. Com a consciência e a compreensão de um
     pequeno conjunto de métricas-chave, as pessoas começam a se perguntar quais metas estão
     associadas a essas métricas – é uma progressão natural. Tanto para as partes interessadas internas
     quanto externas, há um forte alinhamento entre missão, visão, metas e acompanhamento do
     progresso da organização. Os esforços de todos podem ser direcionados para essas metas
     mensuráveis, e as pessoas se concentrarão nos processos que podem impactar essas métricas.

▪    Mostre aos funcionários que suas contribuições são essenciais: líderes verdadeiramente
     excepcionais não apenas articulam metas organizacionais e identificam métricas para avaliar o
     progresso operacional, mas também podem ajudar os funcionários a entender como suas
     contribuições de trabalho são um componente essencial das metas e medidas de progresso mais
     amplas. As métricas devem ter uma conexão hierárquica que permita que a equipe de linha de frente
     veja como suas medidas se relacionam com as principais métricas de toda a organização. Na natureza,
     a forma segue a função e temos inúmeros exemplos de alinhamento entre atributos físicos e condições
     ambientais. Da mesma forma, quanto mais os indivíduos tiverem uma linha de visão clara entre suas
     contribuições diárias e as prioridades da organização, mais capazes (e dispostos) estarão de tomar
     decisões inteligentes e comprometer sua energia de maneira a sustentar o desempenho
     organizacional geral.

▪    Referenciar métricas-chave e análise de dados ao comunicar metas: líderes fluentes em dados
     lideram pelo exemplo. Da mesma forma, os líderes devem modelar a confiança na análise de dados
     e fazer referência às principais métricas ao comunicar metas e prioridades às partes interessadas. Para
     construir uma cultura fluente em dados, os líderes devem se comunicar na linguagem de suas
     métricas, usando dados para apoiar suas decisões sobre o progresso organizacional. Ao fazer isso,
     eles reforçam a importância das principais métricas selecionadas e demonstram sua alfabetização de
     dados em fóruns públicos, modelando assim os hábitos mentais desejados.

▪    Evitando as armadilhas das métricas: embora selecionar a métrica certa possa promover o sucesso,
     a métrica errada pode criar comportamentos inesperados, equivocados e contraproducentes. As
     métricas erradas podem criar estruturas de incentivo para comportamentos que realmente funcionam


          Receita Federal (Analista Tributário) Fluência em Dados                                              61
          www.estrategiaconcursos.com.br                                                                       120

                                      


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

     contra os objetivos da empresa. A maioria das empresas comete o erro de avaliar o desempenho
     (estabelecendo métricas de sucesso) ao longo das atividades funcionais. Isso perpetua silos
     disfuncionais e desconectados dentro de uma organização.

Ainda dentro desse contexto, devem-se considerar mais alguns pontos ao decidir sobre as métricas
adequadas:

▪    Tendências, distribuições e comparação: um número único e solitário muitas vezes não revela uma
     verdadeira compreensão do desempenho de uma organização. É necessário colocar um conceito em
     torno do valor para permitir que as pessoas tenham uma compreensão mais completa. Ao mostrar
     tendências, distribuição e comparação, você melhora a compreensão da métrica para o público. A
     tendência mostra se a métrica se aproxima ou se afasta de uma meta. As comparações com os
     benchmarks do setor mostram como sua organização se destaca em um contexto mais amplo. Por fim,
     divida o valor por diferentes dimensões (por exemplo, locais, produtos e segmentos de clientes) para
     revelar se um fator está sustentando ou diminuindo o valor da métrica.

▪    Casos extremos: sempre haverá casos extremos, ou outliers, em que uma métrica pode não significar
     o que você pensa que significa. Vale a pena entender essas situações, mas você não deve permitir
     que o perfeito seja inimigo do bom. Como líder, você precisa pesar os benefícios de escolher métricas
     que funcionem para 90%, 95% ou 99% dos casos com os custos desses ganhos incrementais.

▪    Teste de responsabilidade: você poderia responsabilizar alguém por essa métrica sem que ela
     apresentasse uma dúzia de razões pelas quais isso não faz sentido? Caso contrário, talvez seja
     necessário reconsiderar a validade e o valor da métrica. Este exercício de pensamento simples é um
     bom teste do valor da métrica.

▪    Autoatendimento: tenha cuidado para não selecionar métricas simplesmente porque sabe que elas
     farão você parecer bom. Essas vitórias de curto prazo têm uma maneira de se transformar
     gradualmente em uma estratégia de longo prazo perdedora para a competitividade e o sucesso
     organizacional.

▪    Deixar ir: descartar uma métrica, especialmente dentro do contexto de uma organização grande,
     multifacetada e complexa, é uma coisa difícil de fazer. Existem alguns motivos para isso acontecer: (a)
     a métrica foi desenvolvida com muito esforço e alto custo; (b) Após o processo de coleta dos dados
     para as paradas métricas, ele só pode ser reiniciado com muito esforço e alto custo; e (c) pessoas mais
     altas na organização (que prestaram atenção à métrica pela última vez quando ela foi útil) podem
     procurá-la se algo der errado. No entanto, devemos deixar as métricas finalmente serem descartadas.

          Receita Federal (Analista Tributário) Fluência em Dados                                        62
          www.estrategiaconcursos.com.br                                                                 120

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Atributos de Dados
                                                                                       INCIDÊNCIA EM PROVA: BAIXA


Galera, eu escarafunchei exaustivamente a (pouca) literatura sobre fluência de dados e não encontrei
absolutamente nada sobre atributos, mas achei uma página que trata do tema:

                            https://www.digitalfluency.guide/data/attributes-of-data

        ATRIBUTOS
                                                                  DESCRIÇÃO


       RELEVÂNCIA       Trata da utilidade de um conjunto de dados para os seus fins, isto é, quão relevantes são
                        os dados para os usos pretendidos.
       COBERTURA        Trata da área geográfica que o conjunto de dados descreve, isto é, se os dados se aplicam
                        a apenas uma ou várias regiões geográficas.
        AMPLITUDE       Trata de quão abrangente é a amostra do conjunto de dados, isto é, quão amplo é o
                        conjunto de dados, se se aplica a apenas um grupo demográfico, entre outros.
   PROFUNDIDADE         Trata da variedade e o número de pontos de dados diferentes no conjunto de dados, isto
                        é, se o conjunto fornece muitos pontos de dados úteis ou apenas alguns.
              CUSTO     Trata do custo de acesso e processamento dos dados, isto é, qual é o custo por unidade
                        do conjunto de dados.
            HISTÓRIA    Também chamado de comprimento ou duração, trata do alcance histórico do conjunto
                        de dados (se houver), isto é, até quando para trás vai o conjunto de dados.
      FREQUÊNCIA        Trata do intervalo de tempo entre os pontos de dados, isto é, da frequência com que os
                        dados são atualizados.
 PROCESSAMENTO          Trata da quantidade de correção de erros e rotulagem executada no conjunto de dados
                        antes da distribuição, isto é, quão processados são os dados, se houve correções, etc.
        TEMPO DE
                        Trata do período de tempo entre a aquisição dos dados originais e a distribuição do
      PUBLICAÇÃO
                        conjunto de dados.

   ESTRUTURAÇÃO         Trata do grau em que os atributos dos dados foram definidos e categorizados, isto é, quão
                        estruturado é o conjunto de dados.
            CUSTO DE
                        Trata do custo de aquisição e verificação dos dados em sua forma original, isto é, o custo
            PESQUISA
                        de aquisição, custo de atualização, entre outros.

        QUALIDADE       Trata de quão precisos são os dados originais. Se houver erros, analisa-se se eles são
                        críticos ou apenas uma necessidade de processamento.
        TENDÊNCIA       Trata dos vieses replicados nos dados por fatores humanos e/ou de máquina, isto é, se
                        existem vieses intencionais, não intencionais ou inerentes aos dados.
  DISPONIBILIDADE       Trata da facilidade de acessar o conjunto de dados, isto é, quão amplamente disponíveis
                        estão os dados, se eles podem ser obtidos facilmente, entre outros.
   ORIGINALIDADE        Trata de quão exclusivo o conjunto de dados é comparado a outros conjuntos de dados,
                        isto é, quão original, nova, inovadora é a fonte.
                        Trata de quão avançadas são as ferramentas digitais necessárias para acessar e analisar
      TECNOLOGIA
                        os dados, isto é, se são necessárias tecnologias especiais para acessar ou processar os
                        dados.
               TRIAL    Trata do comprimento, a amplitude e a profundidade dos dados de pré-visualização
                        disponíveis para avaliação.
      LEGALIDADE/
                        Trata da facilidade de acesso e uso dos dados em relação a restrições de lei,
            ÉTICA
                        regulamentação e padrões éticos.

        Receita Federal (Analista Tributário) Fluência em Dados                                                 63
        www.estrategiaconcursos.com.br                                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     PORTFOLIO/
 ORTOGONALIDAD          Trata da porcentagem de casos de utilização que os dados se aplicam, isto é, se dados
              E         são úteis para diversas áreas ou apenas algumas.

  ADEQUAÇÃO AO
                        Trata de quão bem adaptados seus dados estão ao tipo de investimento que você pode
         TIPO DE
                        fazer, isto é, se os dados são adequados para os tipos de investimento que você está
   INVESTIMENTO
                        considerando.

   FREQUÊNCIA DE
                        Trata do grau em que a frequência de dados se alinha com a frequência de investimento
        TEMPO DA
                        pretendida. Se você estiver usando dados para orientar as decisões de investimento em
    ESTRATÉGIA DE
                        um cronograma específico, os dados são atualizados regularmente o suficiente para
    INVESTIMENTO
                        serem de valor para você?

            CUSTO DE
                        Trata do custo de transformar os dados em informações úteis (diferente dos custos de
             ANÁLISE
                        processamento que precedem a análise).


Uma outra fonte traz um segundo conjunto (bem mais enxuto) de atributos de fluência de dados. Vejam
na tabela a seguir:

        ATRIBUTOS
                                                                  DESCRIÇÃO


            PRECISÃO
                        A precisão da análise de dados e insights.

   PONTUALIDADE
                        A capacidade de analisar dados rapidamente e obter insights.

  CONFIABILIDADE
                        A capacidade de produzir consistentemente resultados precisos.

       RELEVÂNCIA
                        A capacidade de identificar dados e tendências relevantes.

  ESCALABILIDADE
                        A capacidade de dimensionar processos de análise de dados.

 CUSTO/BENEFÍCIO
                        A capacidade de analisar dados de maneira econômica.

        QUALIDADE
                        A capacidade de produzir insights de dados de alta qualidade.

            VALIDADE
                        A capacidade de validar dados e insights.

       SEGURANÇA
                        A capacidade de proteger dados e proteger a privacidade

            ROBUSTEZ
                        A capacidade de se adaptar às mudanças nas fontes de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                            64
        www.estrategiaconcursos.com.br                                                                     120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Transformação de Dados
                                                                                       INCIDÊNCIA EM PROVA: BAIXA


Ao construir uma casa nova, antes de pensar em aspectos estéticos ou nos móveis planejados, é
necessário construir uma base sólida sobre a qual serão construídas as paredes. Além disso, quanto mais
difícil for o terreno em que você construirá a casa, mais tempo e esforço podem ser necessários. Se você
deixar de criar uma base robusta, nada construído sobre ela resistirá ao tempo e à natureza por muito
tempo.

O mesmo problema ocorre na mineração de dados e no aprendizado de máquina. Não importa o nível
de sofisticação do algoritmo, se você não preparar bem sua base – ou seja, seus dados – seu algoritmo
não durará muito quando testado em situações reais de dados. Mesmo os modelos mais sofisticados e
avançados atingem um limite e têm desempenho inferior quando os dados não estão devidamente
preparados.

Tem um ditado no meio de tecnologia da informação que diz: “Garbage In, Garbage Out”. Em outras
palavras, se entrarem dados ruins para serem processados por algoritmos de aprendizado de máquina,
sairão dados ruins das predições dos algoritmos. E o que seria um dado ruim, Diego? São dados ausentes,
anômalos, redundantes, não padronizados, entre outros. O tratamento dos dados brutos é útil para
facilitar a compreensão, visualização e identificação de padrões.

Para vocês terem uma ideia, o tempo gasto no tratamento de dados pode levar cerca de 80% do tempo
total que você dedica a um projeto de aprendizado de máquina. Dito isso, nas próximas páginas, nós
veremos diversas técnicas de transformação (ou pré-processamento) de dados. Para cada uma das
técnicas, eu vou colocar um quadrinho vermelho com um estudo de caso. Não ignorem esse quadrinho,
porque geralmente é assim que as bancas cobram esse tipo de questão. Vamos lá!

Valores Ausentes
Um valor ausente costuma ser representado por um código de ausência, que pode ser um valor
específico, um espaço em branco ou um símbolo (por exemplo, “?”). Um valor ausente caracteriza um
valor ignorado ou que não foi observado, e, nesse sentido, a substituição de valores ausentes, também
conhecida como imputação, tem como objetivo estimar os valores ausentes com base nas informações
disponíveis no conjunto de dados.

A imputação de valores ausentes é uma técnica de pré-processamento que assume que a ausência de
valor implica a perda de informação relevante de algum atributo. Consequentemente, o valor a ser
imputado não deve somar nem subtrair informação à base, ou seja, ele não deve enviesar a base.
Associado a isso está o fato de que muitos algoritmos de mineração não conseguem trabalhar com os
dados na ausência de valores e, portanto, a imputação é necessária para a análise.

Além disso, o tratamento incorreto ou a eliminação de objetos com valores ausentes pode promover erros
das ferramentas de análise. Para resolver o problema de valores ausentes, temos algumas opções: ignorar
os objetos que possuem um ou mais valores ausentes; imputar manualmente os valores ausentes; usar
uma constante global para imputar o valor ausente; utilizar a média ou moda de um atributo para imputar
o valor ausente; entre outros.


                                                 Estudo de Caso

        Receita Federal (Analista Tributário) Fluência em Dados                                               65
        www.estrategiaconcursos.com.br                                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     Contexto: João é um servidor público responsável pela análise de dados de saúde em uma
     secretaria estadual de saúde. Ele está encarregado de preparar um relatório sobre a incidência
     de doenças respiratórias na população local. Para isso, ele precisa analisar um grande
     conjunto de dados coletados de diferentes unidades de saúde, contendo informações como
     idade, sexo, diagnóstico, datas de consultas e tratamentos prescritos.

     Problema: ao importar os dados para o seu ambiente de análise, João percebe que muitos
     registros estão incompletos, com valores ausentes em várias colunas críticas, como idade dos
     pacientes e diagnósticos. Esses valores ausentes podem comprometer a qualidade das
     análises e a precisão das previsões que João precisa fazer.

     Estratégias de Solução: João decide aplicar diferentes técnicas de pré-processamento de
     dados para lidar com os valores ausentes. Aqui estão os passos que ele seguiu:

     ▪      Identificação de Valores Ausentes: João identifica onde os dados estão faltando. Ele usa
            métodos estatísticos e visualizações para encontrar padrões nos valores ausentes;

     ▪      Remoção de Registros Incompletos: para colunas menos críticas ou onde os valores
            ausentes são poucos, João opta por remover os registros incompletos;

     ▪      Imputação de Valores Ausentes: para colunas críticas, há diferentes técnicas (Ex:
            Imputação com Média/Mediana/Moda; Imputação com Valores Faltantes Frequentes;
            Imputação por Modelagem).

     ▪      Imputação com Média/Mediana/Moda: para colunas numéricas como idade, ele pode
            substituir os valores ausentes pela média, mediana ou moda da coluna;

     ▪      Imputação com Valores Faltantes Frequentes: para colunas categóricas, como diagnóstico,
            ele usa o valor mais frequente (moda);

     ▪      Imputação por Modelagem: pode usar algoritmos de aprendizado de máquina para
            prever os valores ausentes com base em outras colunas;

     ▪      Criação de Novas Colunas: João cria colunas indicando onde os valores ausentes estavam
            presentes, permitindo uma análise mais detalhada do impacto desses valores no futuro;

     ▪      Verificação Pós-Imputação: após a imputação, João verifica novamente os dados para
            garantir que todos os valores ausentes foram tratados adequadamente.

     Resultados: ao seguir esses passos, João conseguiu lidar eficazmente com os valores
     ausentes em seu conjunto de dados. Ele preparou um conjunto de dados limpo e completo,
     adequado para análise e modelagem preditiva. Isso permitiu que ele gerasse relatórios
     precisos sobre a incidência de doenças respiratórias e tomasse decisões informadas para
     melhorar a saúde pública.


No tratamento de dados ausentes (missing data), existem diferentes mecanismos que descrevem como e
por que os dados não estão presentes. Vejamos:

                                                                                       IMPLICAÇÕES PARA
    MECANISMO                 DEFINIÇÃO                        EXEMPLO
                                                                                            ANÁLISE

         Receita Federal (Analista Tributário) Fluência em Dados                                          66
         www.estrategiaconcursos.com.br                                                                   120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                          A ausência ocorre de                                                       Métodos simples, como
                                                            Questionários perdidos pelo
   MCAR (Missing            forma totalmente                                                           exclusão de casos ou
                                                             correio, sem ligação com
   Completely At          aleatória, sem relação                                                      imputação básica, não
                                                           idade, renda ou escolaridade
       Random)          com variáveis observadas                                                   introduzem viés. É o cenário
                                                                 dos participantes.
                           ou não observadas.                                                              mais “seguro”.
                                                                  Pessoas com baixa                    Tratável com técnicas
                         A ausência depende de
                                                             escolaridade não informam             estatísticas como imputação
 MAR (Missing At        variáveis observadas, mas
                                                            renda. A ausência depende                múltipla ou modelagem
       Random)           não da própria variável
                                                            da escolaridade (observada),               baseada em variáveis
                                  faltante.
                                                                 não da renda em si.                         auxiliares.
                         A ausência depende do               Pessoas com rendas muito              Cenário mais difícil: técnicas
  MNAR (Missing          próprio valor ausente ou           altas deixam de informar seu             padrão introduzem viés.
  Not At Random)             de variáveis não                          salário.                      Exige coleta adicional ou
                               observadas.                                                             modelos específicos.


     (FGV / SEAP-PR – 2025) Em uma planilha do Excel contendo dados de uma pesquisa sobre
     saúde mental, observa-se que a taxa de resposta sobre a severidade da depressão é menor
     entre os homens em comparação com as mulheres. Considere que a primeira coluna da
     planilha representa o campo “sexo” e está completamente preenchida, mas há dados ausentes
     na segunda coluna – “severidade da depressão”. Sabendo que a ausência dessas respostas
     está relacionada ao sexo dos respondentes (uma variável observável), mas não à severidade
     em si, assinale a opção que indica como podemos classificar os valores não preenchidos na
     coluna B da planilha.

     a) MCAR – Missing Completely at Random.
     b) MNAR – Missing Not at Random.
     c) MAR – Missing at Random.
     d) NAR – Not at Random.
     e) NCNAR – Not Completely not at Random.
     _______________________
     Comentários: (a) Errado. MCAR ocorre quando a ausência não depende de nenhuma variável observada ou não observada.
     Aqui, depende do sexo (observável); (b) Errado. MNAR ocorre quando os dados ausentes dependem da própria variável ausente
     (a severidade), o que não é o caso; (c) Correto. MAR (Missing at Random) ocorre quando a ausência está relacionada a uma
     variável observável (sexo), mas não à própria severidade; (d) Errado. "NAR" não é uma classificação formalmente utilizada em
     estatística para valores ausentes; (e) Errado. "NCNAR" não é uma categoria válida (Letra C).

Dados Inconsistentes

A consistência de um dado está relacionada à sua discrepância em relação a outros dados ou a um
atributo, e tal consistência influencia na validade, na utilidade e na integridade da aplicação de mineração
de dados. Esse problema geralmente ocorre de duas formas: tipos de dados inconsistentes ou mistura
de formatos de dados. As inconsistências nos tipos de dados ocorrem quando os valores de uma
determinada coluna não seguem o tipo de dados esperado.

Por exemplo, uma coluna que deveria conter apenas números inteiros pode ter valores de texto ou uma
data pode estar representada como um texto em vez de um formato de data adequado. Isso pode afetar
a análise estatística dos dados, pode causar erros em modelos de aprendizado de máquina e podem
causar dificuldades na visualização dos dados. Para resolver esse problema, podemos fazer a conversão
de tipos, validação de dados e tratamento de erros.

A mistura de formatos de dados ocorre quando diferentes formatos de representação são usados para o
mesmo tipo de dados. Por exemplo, uma coluna de datas pode ter valores em formatos diferentes, como

        Receita Federal (Analista Tributário) Fluência em Dados                                                                     67
        www.estrategiaconcursos.com.br                                                                                              120

                                         


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

DD/MM/AAAA, MM-DD-AAAA, ou até mesmo AAAA.MM.DD. Isso pode causar uma confusão na
integração de dados, pode causar erros de interpretação e problemas de compatibilidade.

Para resolver esse tipo de problema, podemos realizar uma padronização de formatos, utilizar bibliotecas
de parsing (decomposição) e estabelecer um conjunto de regras.


                                                  Estudo de Caso

     Contexto: O Ministério da Saúde de um país desenvolveu um novo sistema de coleta de
     dados para monitorar as condições de saúde da população. Este sistema coleta dados de
     hospitais, clínicas e postos de saúde, capturando informações como idade dos pacientes,
     diagnósticos, datas de admissão e alta, e tratamentos realizados. O objetivo é utilizar esses
     dados para melhorar a alocação de recursos e a elaboração de políticas públicas de saúde. A
     servidora responsável por este projeto, Maria, é analista de dados e tem como tarefa garantir
     que os dados coletados sejam precisos e úteis para as análises pretendidas.

     Problema: Durante a análise inicial dos dados coletados, Maria percebeu que havia vários
     erros nos tipos de dados, que poderiam comprometer a qualidade das análises. Os problemas
     identificados incluíam:

     ▪      Idade dos Pacientes: a coluna que deveria conter apenas números inteiros tinha valores
            registrados como texto, por exemplo, "quarenta e dois" em vez de 42;

     ▪      Datas de Admissão e Alta: as datas estavam em formatos variados, como DD/MM/AAAA,
            MM-DD-AAAA, e AAAA.MM.DD, tornando difícil a comparação e análise temporal.

     ▪      Diagnósticos Médicos: a coluna de diagnósticos, que deveria conter códigos padrão
            (como ICD-10), continha texto livre e até emojis, o que dificultava a categorização.

     ▪      Tempo de Tratamento: alguns valores foram inseridos como texto ou com unidades
            diferentes (dias, semanas), por exemplo, "2 semanas" ou "14 dias".

     Estratégias de Solução: Para resolver esses problemas, Maria implementou as seguintes
     estratégias de pré-processamento de dados:

     ▪      Conversão de Tipos de Dados: Maria utilizou técnicas de string parsing para converter
            palavras em números inteiros. Por exemplo, "quarenta e dois" foi convertido para 42. Ela
            também padronizou todas as entradas para "dias", convertendo "2 semanas" em 14 dias.

     ▪      Padronização de Formatos: Maria optou por padronizar todas as datas no formato AAAA-
            MM-DD utilizando bibliotecas de parsing de data como Pandas em Python.

     Resultados: ao aplicar essas técnicas de pré-processamento, Maria observou melhorias
     significativas nos dados, incluindo aumento na acurácia das análises, maior eficiência no
     processo de dados, facilidade na integração de dados e confiabilidade nas decisões de
     políticas públicas.


Redução de Dimensionalidade

         Receita Federal (Analista Tributário) Fluência em Dados                                       68
         www.estrategiaconcursos.com.br                                                                120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

É intuitivo pensar que, quanto maior a quantidade de objetos e atributos, mais informações estão
disponíveis para o algoritmo de mineração de dados. Entretanto, o aumento do número de objetos e da
dimensão do espaço (número de atributos/variáveis na base) pode fazer com que os dados disponíveis
se tornem esparsos e as medidas matemáticas usadas na análise tornem-se numericamente instáveis.

Além disso, uma quantidade muito grande de objetos e atributos pode tornar o processamento dos
algoritmos de aprendizado de máquina muito complexo, assim como os modelos gerados. O ideal é
utilizar técnicas de redução de dimensionalidade para reduzir a quantidade de atributos que descrevem
os objetos. Esse tema pode ser extremamente aprofundado, mas por aqui é suficiente saber apenas isso.


                                                  Estudo de Caso

     Contexto: Ana é uma servidora pública responsável pela análise de dados ambientais em uma
     secretaria estadual de meio ambiente. Ela está encarregada de analisar um grande conjunto
     de dados coletados de sensores ambientais espalhados por toda a região. Esses dados
     incluem medições de temperatura, umidade, poluição do ar, níveis de dióxido de carbono,
     entre outros.

     Problema: o conjunto de dados que Ana precisa analisar é extremamente volumoso, com
     dezenas de variáveis diferentes coletadas de cada sensor em intervalos regulares. Essa alta
     dimensionalidade pode dificultar a análise e a modelagem preditiva, tornando os algoritmos
     de aprendizado de máquina menos eficientes e mais propensos ao overfitting (quando um
     modelo de aprendizado se ajusta bem a dados de treinamento, mas não a novos dados.

     Estratégias de Solução: Ana decide aplicar técnicas de redução de dimensionalidade para
     simplificar o conjunto de dados sem perder informações importantes. Aqui estão os passos
     que ela seguiu:

     ▪      Exploração Inicial dos Dados: Ana começa explorando o conjunto de dados para entender
            a estrutura e as correlações entre as variáveis;

     ▪      Identificação de Variáveis Altamente Correlacionadas: Ana identifica variáveis que estão
            altamente correlacionadas, indicando que elas podem conter informações redundantes;

     ▪      Aplicação de Análise de Componentes Principais (PCA): Ana aplica o PCA para transformar
            as variáveis originais em um novo conjunto de variáveis não correlacionadas.

     ▪      Interpretação dos Resultados do PCA: Ana interpreta os resultados do PCA para entender
            a variância explicada por cada componente principal e decide quantos componentes
            manter com base na quantidade de variância que cada um explica;

     ▪      Implementação de Seleção de Variáveis: Ana também utiliza técnicas de seleção de
            variáveis baseadas em importância, como o método de árvore de decisão, para identificar
            as variáveis mais relevantes para a análise.

     ▪      Criação de Conjunto de Dados Reduzido: com base nos resultados do PCA e da seleção
            de variáveis, Ana cria um novo conjunto de dados com menos variáveis, mas que ainda
            preserva a maior parte das informações importantes.

     Resultados: ao aplicar essas técnicas de redução de dimensionalidade, Ana conseguiu
     simplificar o conjunto de dados original, tornando-o mais manejável para análise e

         Receita Federal (Analista Tributário) Fluência em Dados                                       69
         www.estrategiaconcursos.com.br                                                                120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     modelagem preditiva. O novo conjunto de dados reduzido permite que ela aplique
     algoritmos de aprendizado de máquina de forma mais eficiente e obtenha resultados mais
     robustos.


Normalização Numérica
A normalização é uma técnica geralmente aplicada como parte da preparação de dados para o
aprendizado de máquina. O objetivo da normalização é mudar os valores das colunas numéricas no
conjunto de dados para usar uma escala comum, sem distorcer as diferenças nos intervalos de valores
nem perder informações. A normalização também é necessária para alguns algoritmos para modelar os
dados corretamente.

Por exemplo: vamos supor que o conjunto de dados de entrada contenha uma coluna com valores
variando de 0 a 1 e outra coluna com valores variando de 10.000 a 100.000. A grande diferença na escala
dos números pode causar problemas ao tentar combinar os valores durante a modelagem. A
normalização criando novos valores que mantêm a distribuição geral e as proporções nos dados de
origem, mantendo os valores em uma escala aplicada em todas as colunas numéricas do modelo.

E como resolve isso? Você pode mudar todos os valores para uma escala de 0 a 1. Por exemplo: se você
tiver um conjunto de dados de idades, poderá normalizá-lo para que todas as idades fiquem entre 0 e 1,
subtraindo a idade mínima de cada valor e dividindo pela diferença entre as idades máxima e mínima.
Vamos considerar o seguinte conjunto de dados de idade: [12, 17, 21, 29, 54, 89]. Agora utilizamos a
seguinte fórmula:

,em que x é a idade e i ∈ {1, ..., n}. Logo, vamos normalizar os valores do nosso conjunto original de dados
para a escala entre 0 e 1:

             𝐼𝐷𝐴𝐷𝐸1−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           12 −12       12 −12       0
IDADE1’ =                          =            =            =        = 0,000
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

             𝐼𝐷𝐴𝐷𝐸2−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           17 −12       17 −12       5
IDADE2’ =                          =            =            =        = 0,064
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

             𝐼𝐷𝐴𝐷𝐸3−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           21 −12       21 −12       9
IDADE3’ =                          =            =            =        = 0,116
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

             𝐼𝐷𝐴𝐷𝐸4−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           29 −12       29 −12       17
IDADE4’ =                          =            =            =        = 0,220
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

             𝐼𝐷𝐴𝐷𝐸5−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           54 −12       54 −12       42
IDADE5’ =                          =            =            =        = 0,545
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

             𝐼𝐷𝐴𝐷𝐸6−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛           89 −12       89 −12       77
IDADE6’ =                          =            =            =        = 1,000
            𝐼𝐷𝐴𝐷𝐸𝑚á𝑥−𝐼𝐷𝐴𝐷𝐸𝑚𝑖𝑛          89 −12       89 −12       77

Pronto! Agora o conjunto de dados original foi normalizado em um novo conjunto de dados
contemplando valores que variam entre 0 e 1: [0, 0,064, 0,116, 0,220, 0,545, 1]. Esse tipo de normalização
se chama Normalização Max-Min, mas existem outros tipos. Por fim não confundam a normalização

        Receita Federal (Analista Tributário) Fluência em Dados                                          70
        www.estrategiaconcursos.com.br                                                                  120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

numérica de dados com a normalização de bases de dados relacionais, que é um conceito totalmente
diferente visto dentro do contexto de bancos de dados.

Existe também a normalização por padronização – também conhecida como z-score ou padronização de
variáveis –, que é uma técnica de pré-processamento de dados aplicada a variáveis contínuas e tem como
objetivo colocar essas variáveis em uma escala com média zero (0) e desvio padrão um (1). Isso significa
que, após a normalização, os dados terão uma média igual a zero e um desvio padrão igual a um.


                                                  Estudo de Caso

     Contexto: Carlos é um servidor público responsável pela análise de dados financeiros em
     uma secretaria estadual de finanças. Ele está encarregado de analisar um grande conjunto de
     dados que inclui informações sobre receitas, despesas, impostos arrecadados e outros
     indicadores econômicos de diversos municípios ao longo dos anos.

     Problema: ao analisar os dados financeiros, Carlos percebe que os valores de diferentes
     variáveis estão em escalas muito diferentes. Por exemplo, os valores das receitas municipais
     estão na ordem de milhões, enquanto os valores dos impostos sobre serviços específicos
     estão na ordem de milhares. Essas discrepâncias de escala podem dificultar a análise e
     prejudicar o desempenho de algoritmos de aprendizado de máquina, que podem ser
     sensíveis às diferenças de magnitude nas variáveis.

     Estratégias de Solução: Carlos decide aplicar técnicas de normalização numérica para
     transformar os dados em uma escala comum, facilitando a análise e melhorando o
     desempenho dos modelos preditivos. Aqui estão os passos que ele seguiu:

     ▪      Exploração Inicial dos Dados: Carlos começa explorando o conjunto de dados para
            entender a distribuição e a escala das variáveis numéricas;

     ▪      Identificação de Variáveis a Serem Normalizadas: Carlos identifica as variáveis numéricas
            que precisam ser normalizadas para reduzir as diferenças de escala;

     ▪      Aplicação de Normalização Min-Max: Carlos aplica a normalização Min-Max para escalar
            as variáveis numéricas para um intervalo entre 0 e 1. Esta técnica preserva a distribuição
            original dos dados enquanto reduz a escala;

     ▪      Aplicação de Padronização (Z-score Normalization): alternativamente, Carlos pode optar
            por padronizar os dados, transformando as variáveis para que tenham média 0 e desvio
            padrão 1, utilizando a técnica de normalização Z-score;

     ▪      Verificação Pós-Normalização: após a normalização, Carlos verifica novamente as
            estatísticas descritivas para garantir que as variáveis foram escaladas corretamente e que
            estão na faixa esperada;

     Resultados: ao aplicar essas técnicas de normalização numérica, Carlos conseguiu
     transformar os dados financeiros em uma escala comum, melhorando a eficiência e a precisão
     dos modelos preditivos. Os dados normalizados facilitaram a análise e permitiram que ele
     identificasse padrões e tendências com maior precisão.

         Receita Federal (Analista Tributário) Fluência em Dados                                         71
         www.estrategiaconcursos.com.br                                                                  120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Discretização

Alguns algoritmos de mineração operam apenas com atributos categóricos e, portanto, não podem ser
aplicados a dados numéricos. Nesses casos, atributos numéricos podem ser discretizados, dividindo o
domínio do atributo em intervalos e ampliando a quantidade de métodos de análise disponíveis para
aplicação. Além disso, a discretização reduz a quantidade de valores de um dado atributo contínuo,
facilitando, em muitos casos, o processo de mineração.

A maneira mais óbvia de discretizar um certo atributo é dividindo seu domínio em um número
predeterminado de intervalos iguais, o que normalmente é feito no momento da coleta dos dados. Vamos
ver um exemplo? Imagine que tenhamos um conjunto de dados numéricos que representam o peso de
um grupo de pessoas. Nesse caso, podemos dividi-los em três faixas: 50 a 75 kg, 76 a 100 kg e 101 a 150
kgs.


                                                  Estudo de Caso

     Contexto: Pedro é um servidor público responsável pela análise de dados de segurança
     pública em uma secretaria estadual de segurança. Ele está encarregado de analisar um
     conjunto de dados que inclui informações sobre incidentes criminais, como roubos, furtos e
     agressões, ocorridos em diferentes regiões e horários.

     Problema: ao analisar os dados, Pedro percebe que algumas variáveis numéricas, como idade
     dos suspeitos e tempo do dia em que os incidentes ocorrem, são contínuas e têm uma ampla
     gama de valores. Para facilitar a análise e a interpretação dos dados, bem como melhorar a
     eficácia de certos algoritmos de aprendizado de máquina, Pedro decide discretizar essas
     variáveis contínuas em categorias discretas.

     Estratégias de Solução: Pedro decide aplicar técnicas de discretização para transformar
     variáveis contínuas em categorias. Aqui estão os passos que ele seguiu:

     ▪      Exploração Inicial dos Dados: Pedro começa explorando o conjunto de dados para
            entender a distribuição das variáveis contínuas que precisam ser discretizadas;

     ▪      Discretização da Idade: Pedro decide agrupar a variável idade em faixas etárias, como
            jovem, adulto e idoso;

     ▪      Discretização do Tempo do Dia: para a variável tempo_do_dia, Pedro decide criar
            categorias como madrugada, manhã, tarde e noite;

     ▪      Verificação e Análise Pós-Discretização: após a discretização, Pedro verifica novamente os
            dados para garantir que as novas categorias foram criadas corretamente e analisa a
            distribuição dessas categorias;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados discretizados, Pedro
            pode prosseguir com a implementação e avaliação de modelos preditivos. Ele treina e
            testa algoritmos de aprendizado de máquina para prever padrões criminais com base nas
            novas categorias discretas.

     Resultados: ao aplicar essas técnicas de discretização, Pedro conseguiu transformar variáveis
     contínuas em categorias discretas, facilitando a análise e a interpretação dos dados. As novas

         Receita Federal (Analista Tributário) Fluência em Dados                                         72
         www.estrategiaconcursos.com.br                                                                  120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     categorias permitiram que ele identificasse padrões e tendências mais facilmente, além de
     melhorar a eficácia dos modelos preditivos.


Anomalias (Outliers)
Também chamado de valores ruidosos, referem-se a modificações dos valores originais e que, portanto,
consistem em erros de medidas ou em valores consideravelmente diferentes da maioria dos outros
valores do conjunto de dados. Casos típicos percebidos quando se conhece o domínio esperado para os
valores em um atributo ou a distribuição esperada para os valores de um atributo, mas, no conjunto de
dados, aparecem alguns valores fora desse domínio ou dessa distribuição.

Alguns exemplos são: valores que naturalmente deveriam ser positivos, mas, no conjunto de dados,
aparecem como negativos, como seria o caso de observar um valor negativo para a quantidade de vendas
de um restaurante em um período de um mês; ou ainda, observar que o valor de vendas desse mesmo
restaurante ultrapassa, com uma grande margem, o valor total de vendas de todos os anos anteriores.

No primeiro caso, diz-se que o valor está errado por não fazer sentido no contexto dos dados; no segundo
caso, tem-se um exemplo de outlier, que pode representar um valor errado ou uma mudança não
esperada, porém real, do comportamento dos valores de um atributo, e, nesse caso, há a necessidade de
identificar qual é a explicação que se adéqua à situação. Para resolver esse problema, pode-se fazer
inspeções/correções manuais ou identificação/limpeza automáticas.


                                                  Estudo de Caso

     Contexto: Mariana é uma servidora pública responsável pela análise de dados de transporte
     em uma secretaria estadual de transporte. Ela está encarregada de analisar um conjunto de
     dados que inclui informações sobre o tempo de viagem, velocidade média, número de
     passageiros e outros indicadores de desempenho de diferentes rotas de transporte público.

     Problema: ao analisar os dados, Mariana percebe que algumas observações apresentam
     valores extremamente altos ou baixos, que se desviam significativamente da maioria dos
     dados. Esses outliers podem ser causados por erros de entrada, eventos extraordinários ou
     variabilidade natural, mas eles podem distorcer as análises estatísticas e prejudicar o
     desempenho dos modelos preditivos.

     Estratégias de Solução: Mariana decide aplicar técnicas de tratamento de outliers para lidar
     com essas observações extremas. Aqui estão os passos que ela seguiu:

     ▪      Exploração Inicial dos Dados: Mariana começa explorando o conjunto de dados para
            identificar e visualizar os outliers;

     ▪      Identificação de Outliers: Mariana identifica os outliers usando métodos estatísticos, como
            o IQR (Interquartile Range) e o Z-score;

     ▪      Tratamento de Outliers: Mariana aplica diferentes técnicas para tratar os outliers,
            dependendo da natureza dos dados e do impacto dos outliers nas análises (Ex: Remoção
            de Outliers, Transformação de Outliers e Imputação de Outliers);

     ▪      Remoção de Outliers: tratamento utilizado para outliers claramente causados por erros de
            entrada ou eventos extraordinários;

         Receita Federal (Analista Tributário) Fluência em Dados                                          73
         www.estrategiaconcursos.com.br                                                                   120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     ▪      Transformação de Outliers: tratamento utilizado para reduzir o impacto dos outliers sem
            removê-los;

     ▪      Imputação de Outliers: tratamento utilizado para substituir os outliers por valores mais
            representativos, como a mediana ou média;

     ▪      Verificação Pós-Tratamento: após o tratamento, Mariana verifica novamente os dados para
            garantir que os outliers foram tratados adequadamente e que as distribuições estão mais
            equilibradas;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados tratados, Mariana pode
            prosseguir com a implementação e avaliação de modelos preditivos. Ela treina e testa
            algoritmos de aprendizado de máquina para prever o desempenho das rotas de
            transporte público com base nos dados tratados.

     Resultados: ao aplicar essas técnicas de tratamento de outliers, Mariana conseguiu lidar com
     observações extremas, melhorando a qualidade dos dados e a precisão das análises. Os
     dados tratados permitiram que ela identificasse padrões e tendências mais facilmente e
     implementasse modelos preditivos mais robustos.


Agregações
O tratamento de agregações é uma etapa fundamental no pré-processamento de dados, especialmente
no contexto de mineração de dados. Esse processo envolve a combinação de múltiplas informações em
uma única unidade para facilitar a análise e descobrir padrões relevantes. Existem várias técnicas de
agregação, cada uma com propósitos específicos, tais como: soma, média, mediana, moda, contagem,
mínimo, máximo, desvio padrão, variância, entre outros.

 AGREGAÇÃO                                                  DESCRIÇÃO
      SOMA         Consiste em somar os valores de um conjunto de dados para obter um valor total. Por exemplo,
                   somar as vendas diárias para obter o total de vendas mensais.
         MÉDIA     Calcula a média aritmética dos valores de um conjunto de dados. É útil para obter um valor
                   representativo do conjunto, como a média de vendas diárias em um mês.
    MEDIANA        É o valor que divide um conjunto de dados ordenado em duas partes iguais. É usada para obter
                   uma medida central que não seja afetada por valores atípicos (outliers).
         MODA      É o valor mais frequente em um conjunto de dados. Pode ser útil para identificar tendências ou
                   comportamentos predominantes.
  CONTAGEM         Conta o número de ocorrências de um valor ou o número total de valores em um conjunto de
                   dados. Por exemplo, contar o número de transações em um dia.
    MÍNIMO E
                   Determinam os valores mínimo e máximo em um conjunto de dados. São úteis para entender
     MÁXIMO
                   os limites dos dados.

      DESVIO
                   Mede a dispersão dos dados em relação à média. É importante para entender a variabilidade
     PADRÃO
                   dos dados.

   VARIÂNCIA       É o quadrado do desvio padrão e também mede a dispersão dos dados. É usada em análises
                   estatísticas mais complexas.

Dentre as vantagens do tratamento de agregações, temos: redução de volume de dados – ao agregar
dados, o volume total de dados é reduzido, o que pode melhorar o desempenho de sistemas de análise


         Receita Federal (Analista Tributário) Fluência em Dados                                               74
         www.estrategiaconcursos.com.br                                                                        120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

e armazenamento; simplicidade – dados agregados são geralmente mais simples de analisar, facilitando
a identificação de padrões e tendências; eficiência – a agregação pode acelerar o processamento de
consultas em bancos de dados, tornando as análises mais rápidas e eficientes.


                                                  Estudo de Caso

     Contexto: Lucas é um servidor público responsável pela análise de dados de turismo em uma
     secretaria estadual de turismo. Ele está encarregado de analisar um conjunto de dados que
     inclui informações sobre a quantidade de visitantes em diferentes pontos turísticos, receitas
     geradas, e feedbacks dos turistas ao longo de vários anos. Os dados são coletados de
     diferentes fontes e em diferentes granularidades, como dados diários, mensais e anuais.

     Problema: Lucas percebe que os dados precisam ser agregados e transformados em uma
     granularidade uniforme para análise. Por exemplo, ele precisa combinar dados diários em
     dados mensais ou anuais para identificar tendências e padrões sazonais. Além disso, os dados
     de diferentes fontes precisam ser consolidados em um formato coerente para análise
     integrada.

     Estratégias de Solução: Lucas decide aplicar técnicas de tratamento de agregações para
     transformar os dados em um formato mais adequado para análise. Aqui estão seus passos:

     ▪      Exploração Inicial dos Dados: Lucas começa explorando o conjunto de dados para
            entender a estrutura e as granularidades dos dados disponíveis;

     ▪      Conversão de Datas e Extração de Componentes Temporais: Lucas converte as colunas de
            datas para o formato datetime e extrai componentes temporais, como mês e ano;

     ▪      Agregação de Dados Diários em Dados Mensais: Lucas agrega os dados diários em dados
            mensais, somando as quantidades de visitantes e receitas para cada mês;

     ▪      Consolidação de Dados de Diferentes Fontes: Lucas combina dados mensais agregados
            com os dados mensais existentes, consolidando as informações em um único dataframe;

     ▪      Verificação e Análise Pós-Agregação: após a agregação e consolidação, Lucas verifica
            novamente os dados para garantir que todas as informações foram agregadas
            corretamente e que os dados estão prontos para análise;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados agregados e
            consolidados, Lucas pode prosseguir com a implementação e avaliação de modelos
            preditivos. Ele treina e testa algoritmos de aprendizado de máquina para prever
            tendências de turismo com base nos dados transformados;

     Resultados: ao aplicar essas técnicas de tratamento de agregações, Lucas conseguiu
     transformar dados coletados em diferentes granularidades em um formato uniforme e
     consolidado, adequado para análise. Os dados agregados permitiram que ele identificasse
     tendências e padrões sazonais no turismo, melhorando a eficácia dos modelos preditivos.


Dados Categóricos

         Receita Federal (Analista Tributário) Fluência em Dados                                     75
         www.estrategiaconcursos.com.br                                                              120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Dados categóricos são comuns em problemas aprendizado de máquina e, na maioria das vezes, podem
ser mais desafiadores de extrair informações do que dados numéricos. Esses dados deverão ser
transformados em dados numéricos para que possam ser incluídos na etapa de treinamento. Assim, uma
melhor representação dos dados categóricos afeta diretamente a performance do treinamento como
também introduz melhores formas de explicar sua contribuição para a predição.

A maioria dos algoritmos de aprendizado de máquina trabalha com variáveis numéricas, mas e quando
temos dados categóricos? Aí temos que fazer uma conversão! Lembrando que dados categóricos podem
ser ordenados (Ex: baixo, médio, alto) ou não ordenados (Ex: vermelho, azul, verde). No primeiro caso,
pode-se representar por meio de uma codificação chamada Ordinal Encoding, em que cada valor varia
de 1 até n classes (Ex: baixo = 1, médio = 2 e alto = 3).

Professor, essa atribuição de valores não pode dar problema? Pode, sim! Nesse exemplo, meu modelo
pode entender que “alto” tem três vezes o peso de “baixo” – o que pode não ser verdadeiro em meu
modelo de negócio. O nome desse problema é ponderação arbitrária, dado que estamos dando pesos
arbitrários às classes. No caso de dados categóricos não ordenados, é mais complicado ainda e nem a
solução anterior funciona.

Para resolver esse tipo de problema, o ideal é utilizar uma codificação chamada One-Hot Enconding ou
Dummy Encoding. Vamos ver um exemplo rapidamente: imagine uma classificação de dados nas
categorias Vermelho, Verde e Azul. Note que não existe uma ordem natural dessas categorias e atribuir
valores aleatórios poderia recair no problema da ponderação arbitrária. Podemos utilizar, portanto,
variáveis dummy. O que seria isso, Diego?

Variáveis dummy são variáveis que assumem os valores binários (0 ou 1) para representar a ausência ou
presença de um determinado atributo, característica, categoria, evento ou critério.

Agora vamos criar uma tabelinha com uma coluna para cada categoria (vermelho, verde e azul). Em
seguida, para cada observação do nosso conjunto de dados, vamos atribuir o valor 1 (um) – quando
correspondente à categoria – e 0 (zero) – quando não correspondente à categoria. Logo, a primeira
observação é “vermelho”, logo inserimos 1 (um) na coluna “vermelho” e 0 (zero) nas outras colunas; e
fazemos assim para cada uma das observações.

Note que essa operação é bidirecional: é possível sair do valor original para o one-hot enconding quanto
do one-hot encoding para o valor original. Dessa forma, não temos uma perda nem um acréscimo de


        Receita Federal (Analista Tributário) Fluência em Dados                                      76
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

informação! Existem variações dessa técnica para a codificação de dados categóricos. A vantagem dessas
técnicas é permitir que o algoritmo de aprendizado de máquina entenda melhor as relações entre os
dados e faça previsões mais precisas sem perda/acréscimo de dados.

Para finalizar, note que o one-hot encoding tem uma redundância: se eu tenho n categorias, eu não
preciso de n colunas na tabela para representá-las. No caso das categorias de cores, se uma observação
não é vermelha nem verde, ela é necessariamente azul; se não é vermelha nem azul, ela é
necessariamente verde; e se não é verde nem azul, ela é necessariamente vermelha. Logo, para
representar essas categorias, bastava n-1 colunas na tabela. Vejamos:

Note que, com apenas duas colunas, foi possível representar a mesma informação da tabela anterior. É
bem simples: tudo que não for vermelho ou verde, será azul!


                                                  Estudo de Caso

     Contexto: João é um servidor público responsável pela análise de dados de emprego em
     uma secretaria estadual de trabalho. Ele está encarregado de analisar um conjunto de dados
     que inclui informações sobre o status de emprego, nível de educação, ocupação e setor de
     trabalho dos cidadãos.

     Problema: ao analisar os dados, João percebe que muitas das variáveis são categóricas.
     Variáveis categóricas, como o nível de educação (por exemplo, "Ensino Fundamental", "Ensino
     Médio", "Ensino Superior") e setor de trabalho (por exemplo, "Tecnologia", "Saúde",
     "Educação"), precisam ser transformadas em um formato numérico adequado para análise e
     para o uso em algoritmos de aprendizado de máquina.

     Estratégias de Solução: João decide aplicar técnicas de codificação de dados categóricos
     para transformar essas variáveis em um formato numérico. Aqui estão seus passos:

     ▪      Exploração Inicial dos Dados: João começa explorando o conjunto de dados para
            entender a distribuição das variáveis categóricas;

     ▪      Codificação de Variáveis Categóricas: João utiliza diferentes técnicas para transformar as
            variáveis categóricas em um formato numérico (Ex: Label Encoding ou One-Hot Encoding);

         Receita Federal (Analista Tributário) Fluência em Dados                                         77
         www.estrategiaconcursos.com.br                                                                  120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     ▪      Label Encoding: para variáveis ordinais, onde há uma ordem intrínseca nas categorias,
            como o nível de educação;

     ▪      One-Hot Encoding: para variáveis nominais, onde não há uma ordem intrínseca nas
            categorias, como o setor de trabalho;

     ▪      Verificação e Análise Pós-Codificação: João verifica os dados para garantir que as variáveis
            foram transformadas corretamente e que o novo formato está adequado para análise;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados codificados, João pode
            prosseguir com a implementação e avaliação de modelos preditivos. Ele treina e testa
            algoritmos de aprendizado de máquina para prever, por exemplo, o status de emprego
            com base nos dados transformados.

     Resultados: ao aplicar essas técnicas de codificação de dados categóricos, João conseguiu
     transformar variáveis categóricas em um formato numérico adequado para análise e
     modelagem preditiva. Isso permitiu que ele implementasse algoritmos de aprendizado de
     máquina mais eficazes e precisos para prever o status de emprego dos cidadãos.


Classes Desbalanceadas
Um problema muito comum de classificação ocorre quando existe uma desproporção nos dados, isto é,
temos muito mais dados de uma classe do que de outra (pode ocorrer também para problemas com mais
de duas classes). Então, quando temos um desequilíbrio de classe, o classificador de aprendizado de
máquina tende a ser mais tendencioso em relação à classe majoritária, causando má classificação da
classe minoritária. Como assim, Diego?

Imagine os dados sobre análise de fraudes em transações de cartões de crédito. Sabe quando aparece
no seu celular uma notificação sobre uma compra que você sabe que você não fez? É aquela correria para
ligar no banco e bloquear o cartão. Pois é, tem sido cada vez mais comum! Quando analisamos um
conjunto de dados sobre transações de cartões de crédito, vemos basicamente duas classes: transações
normais e transações fraudulentas. E onde entra o desbalanceamento?

         Receita Federal (Analista Tributário) Fluência em Dados                                           78
         www.estrategiaconcursos.com.br                                                                    120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Ora, eu já tive cartões bloqueados em duas oportunidades por conta de transações fraudulentas, mas é
a exceção da exceção da exceção: a regra é que a imensa maioria das transações sejam normais. Vejam
na imagem anterior um exemplo de um conjunto de dados de transações de uma operadora de cartão
de crédito: a Classe 0 representa as transações normais e a Classe 1 representa as transações
fraudulentas.

Note que nem é possível ver nada azul da Classe 1 porque é tão pouco que é quase irrelevante, mas esse
gráfico representa 284.315 transações normais e 492 transações fraudulentas. Em outras palavras, temos
99,82% de transações normais e 0,17% de transações fraudulentas. E por que isso é um problema, Diego?
Porque esse desequilíbrio pode levar a modelos tendenciosos que não são representativos da população
como um todo.

Isso pode ocasionar previsões imprecisas e baixo desempenho do modelo. Além disso, pode levar a
classificadores excessivamente sensíveis à classe majoritária, ignorando a classe minoritária. Galera,
imagine que eu faça a pior modelagem possível de um modelo de classificação! Por pior que ele seja, se
ele simplesmente “chutar” sempre que uma transação foi normal, ele acertará na maioria das vezes
porque raramente uma transação é fraudulenta.

Nesse caso, a acurácia do nosso modelo será próxima de 100%, mesmo ele tendo sido pessimamente
modelado. A máquina não aprendeu nada – ela apenas foi guiada a minimizar o erro no conjunto de
dados de treinamento (que tem ampla maioria de transações normais) e ignorou os padrões de
transações fraudulentas. O nome disso é Paradoxo da Acurácia, em que parâmetros de um algoritmo não
diferenciam a classe minoritária das demais categorias.

Ora, mas o principal objetivo de um modelo de aprendizado de máquina que trata de transações de
cartão de crédito é justamente identificar padrões de transações fraudulentas a fim de impedi-las. Bacana!
E como resolve isso? Bem, uma alternativa é conseguir mais dados de treinamento – preferencialmente
da classe minoritária. Outra alternativa é alterar a métrica de desempenho: em vez de usar a acurácia.

A acurácia é uma métrica muito sensível ao acerto médio, logo não tem um bom desempenho na medição
da qualidade de modelos quando o conjunto de dados tem uma desproporção muito grande entre as
classes. Para resolver esse problema, podemos utilizar outras métricas de desempenho, tais como F-Score
ou Curva ROC. Outra alternativa é fazer uma reamostragem e, para isso, temos duas opções...

Podemos fazer um undersampling majoritário (ou subamostragem), que consiste em eliminar
aleatoriamente dados da classe majoritária até que ambas as classes tenham a mesma quantidade de
dados. Inversamente, podemos fazer um oversampling minoritário (ou superamostragem), que consiste
em criar novos dados baseados nos dados da classe minoritária de forma aleatória até que ambas as
classes tenham a mesma quantidade de dados.

Trata-se de uma forma de garantir que os dados da classe minoritária apareçam várias vezes – é como se
eu replicasse aleatoriamente dados da classe minoritária para eliminar a desproporção. É claro que essas
soluções também possuem problemas: a subamostragem perde informações úteis, o que pode fazer o
modelo gerar underfitting; já a superamostragem pode induzir o modelo a encontrar padrões de dados
que não refletem a realidade da classe minoritária.

Existem outras técnicas, tais como: utilização de amostras sintéticas, atribuição de pesos diferentes às
classes, utilização de algoritmos específicos para detecção de anomalias, avaliação de algoritmos menos
sensíveis ao desbalanceamento (como as árvores de decisão). Enfim... existem diversas soluções e essas
soluções podem ser combinadas de diversas formas para minimizar o problema do desbalanceamento
(também chamado de amostras enviesadas).


        Receita Federal (Analista Tributário) Fluência em Dados                                        79
        www.estrategiaconcursos.com.br                                                                120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Esse foi basicamente o tema de uma das questões da prova discursiva do TCU! Ele mostrava um caso em
que um classificador de peças boas ou defeituosas atingiu altíssima precisão. Ocorre que o modelo
basicamente que todas as peças eram boas e nenhuma peça era defeituosa – caso típico de
desbalanceamento de classes. Como o modelo tinha o objetivo principal justamente de indicar peças
defeituosas, ele fez um péssimo serviço!

Pedia-se também para dar exemplos de soluções, tais como oversampling, undersampling, atribuição de
pesos diferentes às classes, entre outras – tudo que acabamos de estudar!


                                                  Estudo de Caso

     Contexto: Rafael é um servidor público responsável pela análise de dados de saúde em uma
     secretaria estadual de saúde. Ele está encarregado de analisar um conjunto de dados sobre
     diagnósticos de doenças raras. Os dados incluem informações sobre pacientes, sintomas,
     histórico médico e resultados de testes. A variável alvo é o diagnóstico de uma doença rara,
     que é bastante desbalanceada, com muito mais casos negativos (ausência da doença) do que
     positivos (presença da doença).

     Problema: a alta desproporção entre as classes na variável alvo pode levar a modelos
     preditivos que são tendenciosos para a classe majoritária, resultando em baixa sensibilidade
     para a detecção da classe minoritária (a doença rara). Rafael precisa encontrar uma maneira
     de tratar o desbalanceamento das classes para melhorar a eficácia dos modelos preditivos.

     Estratégias de Solução: Rafael decide aplicar várias técnicas de pré-processamento de dados
     para lidar com classes desbalanceadas. Aqui estão os passos que ele seguiu:

     ▪      Exploração Inicial dos Dados: Rafael começa explorando o conjunto de dados para
            entender a distribuição das classes na variável alvo;

     ▪      Técnicas de Amostragem: Rafael aplica diferentes técnicas para balancear as classes:
            Subamostragem da Classe Majoritária; Superamostragem da Classe Minoritária; SMOTE;

     ▪      Subamostragem da Classe Majoritária: essa técnica permitir reduzir o número de exemplos
            na classe majoritária;

     ▪      Superamostragem da Classe Minoritária: aumenta o número de exemplos na classe
            minoritária;

     ▪      SMOTE (Synthetic Minority Over-sampling Technique): gera exemplos sintéticos da classe
            minoritária;

     ▪      Verificação e Análise Pós-Amostragem: após aplicar as técnicas de amostragem, Rafael
            verifica novamente os dados para garantir que as classes estão balanceadas;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados balanceados, Rafael
            pode prosseguir com a implementação e avaliação de modelos preditivos. Ele treina e
            testa algoritmos de aprendizado de máquina para prever a presença da doença rara com
            base nos dados balanceados.

         Receita Federal (Analista Tributário) Fluência em Dados                                      80
         www.estrategiaconcursos.com.br                                                               120

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     Resultados: ao aplicar essas técnicas de balanceamento de classes, Rafael conseguiu lidar
     com o desbalanceamento das classes, melhorando a sensibilidade e a precisão dos modelos
     preditivos na detecção da doença rara. Isso permitiu que ele gerasse insights mais robustos e
     confiáveis para a tomada de decisões na área de saúde pública.


Desidentificação de Dados Sensíveis
A desidentificação de dados sensíveis é uma técnica utilizada especialmente em cenários onde a
privacidade e a segurança dos dados pessoais são de suma importância. Esta técnica visa proteger a
identidade dos indivíduos, removendo ou modificando informações que possam ser usadas para
identificá-los diretamente ou indiretamente. Dentre as principais técnicas, temos: anonimização,
pseudonimização, mascaramento, tokenização, agregação, supressão, entre outros.

             TÉCNICAS                                            DESCRIÇÃO
                          Eliminar informações como nome, endereço, número de telefone, e outros
    ANONIMIZAÇÃO
                          identificadores diretos que possam revelar a identidade de uma pessoa. Modificar
                          dados específicos para que se tornem menos precisos, mas ainda úteis para análise.
                          Substituir identificadores diretos por pseudônimos ou códigos. Esses pseudônimos não
 PSEUDONIMIZAÇÃO          revelam a identidade real dos indivíduos sem acesso a uma tabela de correspondência
                          segura.

                          Substituir dados sensíveis por caracteres ou símbolos, de forma que os dados reais não
   MASCARAMENTO           sejam visíveis. Por exemplo, transformar um número de cartão de crédito em "**** ****
                          **** 1234".

                          Substituir dados sensíveis por tokens únicos que podem ser mapeados de volta aos
      TOKENIZAÇÃO
                          dados originais por meio de uma tabela de tokenização segura. É amplamente usado
                          em transações financeiras.
                          Agrupar dados de várias fontes para criar estatísticas agregadas que não podem ser
        AGREGAÇÃO
                          atribuídas a indivíduos específicos. Por exemplo, calcular a média de uma variável para
                          um grupo de pessoas.
                          Excluir completamente os dados sensíveis de conjuntos de dados onde sua presença
            SUPRESSÃO
                          não é necessária para a análise.

Dentre as vantagens dessa técnica, temos: Proteção da Privacidade – a desidentificação protege a
privacidade dos indivíduos, minimizando o risco de identificação em conjuntos de dados; Conformidade
com Regulamentações – ajuda a cumprir regulamentos de proteção de dados (Ex: LGPD); Facilitação da
Compartilhamento de Dados – permite o compartilhamento seguro de dados entre diferentes entidades
para fins de pesquisa e análise, sem comprometer a privacidade.


                                                 Estudo de Caso

     Contexto: Clara é uma servidora pública responsável pela análise de dados de saúde em uma
     secretaria estadual de saúde. Ela está encarregada de preparar um conjunto de dados sobre
     pacientes para análise estatística e modelagem preditiva, com o objetivo de melhorar os
     serviços de saúde. Os dados incluem informações sensíveis, como nomes, endereços,
     números de telefone e números de identificação dos pacientes.

     Problema: para garantir a privacidade dos pacientes e cumprir com as regulamentações de
     proteção de dados (como a LGPD no Brasil), Clara precisa desidentificar os dados sensíveis


        Receita Federal (Analista Tributário) Fluência em Dados                                                81
        www.estrategiaconcursos.com.br                                                                         120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

     antes de compartilhá-los com a equipe de análise. Isso envolve a remoção ou mascaramento
     de informações que possam identificar diretamente os indivíduos.

     Estratégias de Solução: Clara decide aplicar técnicas de desidentificação de dados sensíveis
     para proteger a privacidade dos pacientes. Aqui estão os passos que ela seguiu:

     ▪      Exploração Inicial dos Dados: Clara começa explorando o conjunto de dados para
            identificar as colunas que contêm informações sensíveis;

     ▪      Remoção de Informações Diretas de Identificação: Clara remove colunas que contêm
            informações que identificam diretamente os indivíduos, como nomes, números de
            telefone e números de identificação;

     ▪      Mascaramento de Informações Sensíveis: para colunas que não podem ser removidas, mas
            que ainda contêm informações sensíveis (como endereços), Clara aplica técnicas de
            mascaramento, substituindo os valores originais por valores fictícios;

     ▪      Generalização de Dados: Clara generaliza os dados sensíveis que não podem ser
            removidos nem mascarados diretamente, transformando informações específicas em
            categorias mais amplas. Por exemplo, ela pode transformar datas de nascimento em faixas
            etárias;

     ▪      Pseudonimização de Dados: Clara substitui identificadores únicos por pseudônimos que
            preservam a unicidade mas não revelam a identidade real dos indivíduos;

     ▪      Verificação Pós-Desidentificação: Clara verifica novamente os dados para garantir que
            todas as informações sensíveis foram adequadamente desidentificadas e que os dados
            estão prontos para análise;

     ▪      Implementação e Avaliação de Modelos Preditivos: com os dados desidentificados, Clara
            pode prosseguir com a implementação e avaliação de modelos preditivos. Ela treina e
            testa algoritmos de aprendizado de máquina para prever resultados de saúde com base
            nos dados transformados.

     Resultados: ao aplicar essas técnicas de desidentificação de dados sensíveis, Clara conseguiu
     proteger a privacidade dos pacientes enquanto preparava os dados para análise. Isso permitiu
     que a equipe de análise conduzisse estudos estatísticos e modelagem preditiva sem
     comprometer a confidencialidade dos dados dos pacientes.


Viés de Seleção
O viés de seleção (também chamado de viés de amostragem) é um problema crítico que pode afetar a
validade das conclusões tiradas a partir da análise dos dados. Ele ocorre quando o conjunto de dados
utilizado para a análise não é representativo da população total ou quando há um processo sistemático
que favorece a inclusão de certas observações sobre outras. O viés de seleção acontece quando o
método de coleta ou amostragem dos dados introduz uma distorção nos resultados.

Este viés pode surgir de várias formas, como a exclusão não intencional de grupos específicos ou a
inclusão excessiva de certos dados devido a conveniências na coleta. Suas causas comuns são:

         Receita Federal (Analista Tributário) Fluência em Dados                                      82
         www.estrategiaconcursos.com.br                                                               120

                                     


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

▪    Amostragem Não Aleatória: quando a seleção dos dados é feita de maneira não aleatória ou
     baseada em conveniência, e não reflete a diversidade ou composição da população-alvo.

▪    Perda de Dados: situações em que há perda de dados de certos grupos, como quando pesquisas
     online excluem automaticamente indivíduos sem acesso à internet.

▪    Autoseleção: quando a participação nos dados depende da vontade dos indivíduos, como em
     pesquisas voluntárias, que podem atrair apenas aqueles com um interesse particular no tema.

▪    Fatores Externos: mudanças no ambiente que afetam a coleta de dados, como eventos sazonais que
     influenciam o comportamento de compra dos consumidores.

O viés de seleção pode ter diversos impactos:

▪    Conclusões Errôneas: as análises baseadas em dados com viés de seleção podem levar a conclusões
     incorretas sobre tendências e padrões.

▪    Generalização Inválida: resultados podem não ser aplicáveis à população geral, limitando a utilidade
     prática das análises.

▪    Modelos Prejudicados: modelos treinados em dados enviesados podem apresentar desempenho
     ruim em novos dados.


                                                    Estudo de Caso

       Contexto: João é um servidor público responsável pela análise de dados no Ministério da
       Educação de um estado. Ele está encarregado de analisar os dados de desempenho escolar
       para avaliar a eficácia de diferentes políticas educacionais. O conjunto de dados inclui
       informações sobre o desempenho acadêmico dos alunos em várias disciplinas, dados
       demográficos, taxas de frequência, e recursos disponíveis nas escolas.

       Problema: durante a análise inicial, João percebeu que o conjunto de dados apresentava um
       viés de seleção que poderia comprometer a validade dos resultados. As escolas participantes
       eram, em sua maioria, aquelas localizadas em áreas urbanas com mais recursos, enquanto
       escolas de áreas rurais e desfavorecidas estavam sub-representadas. Este viés pode distorcer
       as conclusões, fazendo parecer que as políticas educacionais estão funcionando melhor do
       que realmente estão, já que as escolas com mais recursos tendem a ter um desempenho
       melhor.

       Estratégias de Solução: Para resolver esses problemas, João implementou as seguintes
       estratégias de pré-processamento de dados:

       ▪      Reamostragem dos Dados: João decidiu coletar dados adicionais das escolas em áreas
              rurais e desfavorecidas para garantir uma representação equilibrada no conjunto de
              dados. Ele também usou técnicas de amostragem estratificada para garantir que cada
              subgrupo (urbanos vs. rurais) fosse proporcionalmente representado na análise.

       ▪      Ajuste Estatístico: João aplicou pesos aos dados existentes para refletir a proporção real
              de escolas em cada região. Isso envolveu ajustar o impacto das escolas urbanas e rurais
              nos resultados gerais. Ele também utilizou técnicas de correspondência de escore de

           Receita Federal (Analista Tributário) Fluência em Dados                                         83
           www.estrategiaconcursos.com.br                                                                  120

                                       


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

          propensão para equilibrar as características das escolas nos grupos analisados, permitindo
          comparações mais justas entre as escolas urbanas e rurais.

   ▪      Análise e Integração de Dados Adicionais: João integrou dados adicionais sobre fatores
          socioeconômicos, como renda familiar média e nível de educação dos pais, para controlar
          melhor as diferenças entre as populações escolares. Ele também trabalhou com governos
          locais e ONGs para obter informações mais detalhadas e abrangentes das escolas sub-
          representadas, enriquecendo o conjunto de dados com insights qualitativos.

   ▪      Ferramentas de Correção de Viés: João implementou algoritmos de machine learning
          que detectam e ajustam automaticamente o viés de seleção, utilizando técnicas como a
          reponderação de observações para equilibrar o conjunto de dados.

   Resultados: após a implementação dessas estratégias, João observou melhorias significativas
   na representatividade e qualidade dos dados, tais como aumento da acurácia, insights mais
   aprofundados, políticas mais eficazes e reconhecimento de padrões regionais.

       Receita Federal (Analista Tributário) Fluência em Dados                                         84
       www.estrategiaconcursos.com.br                                                                  120

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

            QUESTÕES COMENTADAS – DIVERSAS BANCAS
1. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta sobre a importância da
   fluência de dados:

   a) Trata-se de um instrumento para gerar vantagens competitivas de longo prazo.
   b) Trata-se de um instrumento para aprimorar a tomada de decisões.
   c) Trata-se de um instrumento para envolver os funcionários de todas as funções.
   d) Trata-se de um instrumento para tornar os dados acessíveis a todos.
   e) Trata-se de um instrumento baseado em aprendizado de máquina para melhorar a
   comunicação.

Comentários:

A fluência de dados realmente é importante para gerar vantagens competitivas de longo prazo,
aprimorar a tomada de decisões, envolver os funcionários de todas as funções e tornar os dados
acessíveis a todos. No entanto, ela não é baseada em aprendizado de máquina – trata-se da
capacidade de gerar insights úteis à organização baseado na capacidade de seus funcionários
reunirem, interpretarem e utilizarem grandes conjuntos de dados para tomada de decisões de
negócio.

                                                                                       Gabarito: Letra E

2. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa correta sobre a fluência de dados:

   a) Dados brutos são tão valiosos quanto dados interpretados.
   b) Coletar, armazenar e gerenciar dados não custa dinheiro.
   c) Os dados só se tornam valiosos quando se obtêm insights.
   d) Criar visualizações de dados é suficiente para atingir a fluência de dados.
   e) A qualidade dos dados brutos não é relevante para a fluência de dados.

Comentários:

(a) Errado, dados brutos sem interpretação podem ser custo; (b) Errado, todas essas atividades são
bastante onerosas; (c) Correto, os dados só se tornam valiosos quando você começa a obter insights
sobre eles e a aplicá-los ativamente em seu contexto de negócio; (d) Errado, criar painéis e
visualizações é útil, mas não é suficiente para atingir a fluência de dados; (e) Errado, a qualidade dos
dados é imperativo para a confiável tomada de decisões.

                                                                                       Gabarito: Letra C

3. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta sobre fluência de dados:


        Receita Federal (Analista Tributário) Fluência em Dados                                      85
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) A fluência em dados se beneficia do processo de governança de dados, já que esta permite
   que saibamos o ciclo de vida que o dado percorre desde sua ingestão até o descarte, garante
   que os dados estejam atualizados tempestivamente e que o acesso só estará disponível àqueles
   que tem autorização para acessá-lo.

   b) Executivos precisam ser fluentes em dados e fomentar que os colaboradores também sejam.
   O programa de fluência em dados é um programa educacional e, como tal, ele precisa ter um
   patrocinador; um patrocinador que possa tornar sua adoção e realização alinhada aos objetivos
   estratégicos da empresa.

   c) Um dos principais desafios da fluência em dados é a necessidade em explicar algoritmos de
   Inteligência Artificial e os meios pelos quais o algoritmo chegou a determinado resultado.
   Cientistas de Dados e colaboradores do negócio que trabalham com dados têm o desafio de
                                                       ==219a34==

   entender os modelos e seus resultados.

   d) As organizações muitas vezes podem ter uma ideia não realista sobre a implementação de
   estratégias de dados e analytics. Empresas normalmente investem em ferramentas,
   capacitação da equipe de dados, plataformas, mas muitas vezes não tem uma estratégia
   desenhada de como alcançar sucesso com esses elementos. Essa estratégia deve apresentar
   como os dados podem se tornar ação no futuro.

   e) Apesar de relevante, a cultura empresarial não chega a se tornar uma barreira para o sucesso
   na utilização dos dados e estratégias de analytics, dado que ela pode ser imposta de forma top-
   down pela alta direção da organização.

Comentários:

Todos os itens estão corretos, exceto o último. Se existe uma barreira para o sucesso na utilização
dos dados e estratégias de analytics é a cultura empresarial. Nós nos sentimos confortáveis em
fazer coisas de forma conhecida. Quando implementamos uma mudança em uma cultura, saímos
da nossa zona de conforto. E por isso tornar a cultura da empresa orientada por dados requer o
esforço de fazer com que os colaboradores possam tomar decisões baseadas em dados, seja no
âmbito operacional, tático ou estratégico.

                                                                                       Gabarito: Letra E

4. (PROF. DIEGO / INÉDITA – 2023) Assinale alternativa correta.

   a) A capacidade da empresa de entender os dados e traduzi-los em análises perspicazes deve
   direcionar a organização para longe de fazer escolhas cegas ou tendenciosas. A fluência de
   dados suporta uma abordagem sistemática e baseada em metas durante todo o processo de
   tomada de decisão, garantindo assim que decisões subjetivas e impactantes sejam tomadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                      86
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   b) Conversas sobre dados geralmente levantam mais perguntas do que respostas. Em uma
   organização onde a comunicação clara é estabelecida, essas questões podem ser valiosas. Elas
   podem inspirar o pensamento criativo e moldar a discussão em direção a um conhecimento mais
   superficial, melhores insights e mudanças positivas.

   c) É difícil entender o progresso de uma empresa com dados incompletos ou ausentes.
   Visualizações apropriadas e comunicação clara sobre as principais métricas ajudam a iluminar
   as prioridades e qual deve ser o próximo curso de ação. A visualização de dados ajuda a melhorar
   a compreensão dos dados, mas não interfere na transparência dos dados.

   d) O caminho para a alfabetização de dados tem seus pontos fortes, bem como desafios. Para
   muitas organizações, os benefícios são bem conhecidos – aumento da produtividade, vantagem
   competitiva – enquanto os riscos são menos definidos. Ao aprimorar a força de trabalho
   existente para se tornar mais fluente em dados, é importante notar que nenhum conjunto único
   de habilidades será suficiente para cada pessoa.

   e) Em uma organização madura de dados, mais tempo e energia são gastos decodificando
   gráficos e tabelas, em vez de ter conversas significativas. Um dos obstáculos em tais
   transformações reside na falta de comunicação e na incompreensão dos dados. Promover um
   ambiente fluente em dados permite que os indivíduos entendam e resolvam os problemas
   rapidamente.

Comentários:

(a) Errado, garante assim que decisões objetivas e impactantes sejam tomadas; (b) Errado, elas
moldam a discussão em direção a um conhecimento mais aprofundado; (c) Errado, a visualização
de dados interfere – de maneira positiva – na transparência dos dados; (d) Correto; (e) Errado, mais
tempo e energia são gastos decodificando gráficos e tabelas em organizações imaturas de dados.

                                                                                       Gabarito: Letra D

5. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta:

   a) Consumidores de Dados são pessoas que utilizam dados para tomar decisões e agir. Eles
   incluem executivos, gerentes, analistas e outros tomadores de decisão que usam dados para
   informar suas decisões. Os consumidores de dados também incluem usuários finais que usam
   dados para tomar decisões em suas vidas diárias.

   b) Produtores de dados devem trabalhar os dados brutos e fornecer o conteúdo de maneiras
   fáceis de entender e agir. Em geral, os consumidores de dados chegam às informações com
   prioridades, necessidades e perspectivas semelhantes.

        Receita Federal (Analista Tributário) Fluência em Dados                                      87
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   c) A cultura de fluência de dados valoriza o uso de dados para tomar decisões informadas, com
   foco na solução de problemas baseado em dados. Ela incentiva a colaboração entre profissionais
   de dados, partes interessadas e tomadores de decisão para gerar insights e criar planos de ação
   e também reconhece o poder dos dados para moldar decisões e criar resultados positivos.

   d) O ecossistema de produção de dados é o conjunto de padrões, ferramentas e processos
   implementados para permitir o fluxo de informações e compartilhamento de dados. Esse
   ecossistema de produção de dados permite apoiar o desenvolvimento e a entrega de produtos
   e serviços de dados.

   e) Produtores de Dados são pessoas ou organizações que geram dados. Eles são responsáveis
   por criar, coletar e/ou produzir dados e disponibilizá-los aos consumidores. Exemplos de
   produtores de dados incluem agências governamentais, fontes públicas de dados, instituições
   de pesquisa e empresas privadas.

Comentários:

Todos os itens estão corretos, exceto a alternativa (b). Cada consumidor de dados chega às
informações com diferentes prioridades, necessidades e perspectivas.

                                                                                       Gabarito: Letra B

        Receita Federal (Analista Tributário) Fluência em Dados                                      88
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

            QUESTÕES COMENTADAS – DIVERSAS BANCAS
1. (FGV / TCE-PA – 2024) O crescimento na quantidade e complexidade dos dados disponíveis para
   as empresas torna imprescindível que a Governança de Dados seja estruturada com
   documentos que circulem em vários níveis da empresa de acordo com as suas respectivas
   finalidades, contribuindo para colimar os esforços de todos os membros para obter os
   resultados esperados.

   Com relação aos documentos da Governança de Dados, avalie as afirmativas a seguir.

    I. As políticas de dados são regras pormenorizadas do que pode ser feito e o que não pode ser
   feito, devendo ser conhecidas por todos os profissionais da empresa.

   II. As normas são documentos que indicam as práticas recomendadas, mas não obrigatórias, que
   devem ser adotadas pelas pessoas que trabalham com os dados.

   III. Os procedimentos têm por finalidade orientar as pessoas na execução de tarefas específicas
   visando atingir determinado objetivo, ou seja, documentos que indicam o “como fazer”
   determinada tarefa.

   Está correto o que se afirma em:

   a) I, apenas.
   b) II, apenas.
   c) III, apenas.
   d) I e III apenas.
   e) I, II e III.

Comentários:

(I) Errado. As políticas de dados são diretrizes gerais que indicam o que pode ou não ser feito com
os dados, mas sem detalhamento excessivo. São conhecidas por todos, mas não contêm regras
pormenorizadas;

(II) Errado. Normas, ao contrário do afirmado, são de cumprimento obrigatório e não apenas
recomendações. Elas estabelecem padrões que devem ser seguidos;

(III) Correto. Os procedimentos descrevem de forma detalhada "como fazer" determinadas tarefas,
servindo para guiar a execução de processos específicos.

                                                                                       Gabarito: Letra C

        Receita Federal (Analista Tributário) Fluência em Dados                                      89
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

2. (FGV / CGM-BH – 2024) Considere os tipos de modelos operacionais de governança de dados
   relacionados no DAMA-DMBOK v2, e assinale (V) para a afirmativa verdadeira e (F) para a falsa.

   ( ) Num modelo simplificado, uma organização de governança de dados importa modelos
   padronizados para seu segmento de atuação e supervisiona todas as atividades em todas as
   áreas temáticas.

   ( ) Num modelo replicado, o mesmo modelo operacional e padrões de governança de dados são
   adotados por cada unidade de negócio.

   ( ) Num modelo híbrido, uma organização de governança de dados importa e adapta os modelos
   simplificado e replicado para as múltiplas unidades de negócios com a função de manter
   definições e padrões consistentes.
                                                       ==219a34==

   As afirmativas são, respectivamente,

   a) F – V – F.
   b) V – F – F.
   c) F – F – V.
   d) V – V – F.

Comentários:

        TIPO DE MODELO DESCRIÇÃO
                        Em um modelo centralizado, uma organização de governança de dados supervisiona todas
        CENTRALIZADO
                        as atividades em todas as áreas de assuntos.
           REPLICADO    Em um modelo replicado, o mesmo modelo operacional e padrões da governança de dados
         (COLEGIADO)    são adotados por cada unidade de negócios.
           FEDERADO     Em um modelo federado, uma organização de governança de dados coordena-se com
     (COMPARTILHADO)    várias unidades de negócios para manter definições e padrões consistentes.


(F) Na verdade, esse é o chamado Modelo Centralizado; (V) O mesmo modelo operacional e
padrões são adotados por cada unidade de negócios; (F) Esse modelo não existe.

                                                                                         Gabarito: Letra A

3. (FGV / CGE-PB – 2024) Os processos de coleta e organização de dados devem observar, com
   cuidado, um aspecto preconizado na Governança de Dados especialmente útil na elucidação de
   erros, mudanças nos processos e migrações de sistemas. Esse aspecto, numa estrutura de
   governança, é conhecido como:

   a) Controle de acesso;
   b) Linhagem de dados;


        Receita Federal (Analista Tributário) Fluência em Dados                                           90
        www.estrategiaconcursos.com.br                                                                    120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   c) Segurança de dados;
   d) Propriedade de dados;
   e) Classificação de dados.

Comentários:

(a) Errado. Controle de acesso refere-se à gestão de quem tem permissão para acessar dados e
sistemas, não ao rastreamento de origem e alterações dos dados;

(b) Correto. A linhagem de dados permite rastrear a origem, movimentação e transformação dos
dados, sendo fundamental na identificação de erros e nas mudanças de processos;

(c) Errado. Segurança de dados trata da proteção contra acessos não autorizados e perdas, não do
rastreamento de mudanças e migrações;

(d) Errado. Propriedade de dados se refere à responsabilidade pelo dado, não à elucidação de erros
ou mudanças;

(e) Errado. Classificação de dados se refere à categorização de dados com base na sensibilidade e
criticidade, não ao rastreamento de alterações.

                                                                                       Gabarito: Letra B

4. (QUADRIX / CRQ12 – 2024) Na governança de dados, o principal objetivo da implementação de
   uma política de linhagem de dados é melhorar a velocidade de processamento de dados dentro
   de uma organização.

Comentários:

Perfeito! O principal objetivo de uma política de linhagem de dados na governança de dados é
garantir a rastreabilidade e a transparência dos dados ao longo de seu ciclo de vida. Isso permite
entender a origem, as transformações e o destino dos dados, melhorando a conformidade, a
qualidade e a confiabilidade das informações, e não necessariamente a velocidade de
processamento.

                                                                                       Gabarito: Errado

5. (QUADRIX / CRQ12 – 2024) A governança de dados é um conjunto de processos, políticas,
   normas e métricas que garantem a eficácia e a eficiência do uso da informação em uma
   organização. De acordo com seus princípios, ela somente poderá ser empregada no setor
   privado.

Comentários:


        Receita Federal (Analista Tributário) Fluência em Dados                                      91
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Isso não existe! Ela pode ser aplicada ao setor público ou privado.

                                                                                       Gabarito: Errado

6. (FGV / SEFAZ-MG – 2023) Sobre o conceito de Governança de Dados (DAMA), assinale a
   afirmativa correta.

   a) É a função central da Gestão, que representa o exercício da autoridade e do controle de
   estratégias etc.

   b) Serve para criar e manter a arquitetura corporativa de dados de acordo com objetivos
   estratégicos da empresa.

   c) É a função responsável por definir e manter políticas de segurança a fim de prover
   autenticação, acesso e auditoria.

   d) Trata-se de função operacional responsável por manter os dados através dos vários ciclos, até
   o arquivamento final ou eliminação.

   e) Serve para definir e controlar atividades para a disponibilização de visões únicas de dados
   mestre (Golden Record) e de referência na empresa.

Comentários:

(a) Correto. A governança de dados trata do exercício da autoridade, controle e tomada de decisão
compartilhada (planejamento, monitoramento e execução) sobre o gerenciamento de ativos de
dados. Nenhuma das outras alternativas trazem o conceito de governança de dados; (b) Errado,
essa é a função da arquitetura de dados; (c) Errado, essa é a função da segurança de dados; (d)
Errado, essa é a função do gerenciamento de dados; (e) Errado, essa é a função do gerenciamento
de dados mestres.

                                                                                       Gabarito: Letra A

7. (FGV / CGU – 2022) No âmbito do DAMA-DMBOK, com referência à Governança de Dados, a
   figura dos Data Stewards caracteriza-se como:

   a) etapas de testes de conformidade dos dados;
   b) instâncias de aprovação da arquitetura de dados;
   c) instâncias de unidades organizacionais responsáveis pela estratégia de dados;
   d) responsáveis, dentro da área de negócios, pelo controle e uso dos dados;
   e) usuários que consomem dados dentro de uma organização.

        Receita Federal (Analista Tributário) Fluência em Dados                                      92
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Comentários:

Data Stewards são os responsáveis, dentro da área de negócios, pelo controle e uso dos dados. Um
curador, custodiante ou administrador de dados é uma pessoa cujo trabalho é administrar a
propriedade de outra pessoa. Data Stewards gerenciam ativos de dados em nome de outros e no
melhor interesse da organização. Eles representam os interesses de todas as partes interessadas e
devem adotar uma perspectiva corporativa para garantir que os dados corporativos sejam de alta
qualidade e possam ser usados com eficácia.

                                                                                       Gabarito: Letra D

8. (CESPE / BNB – 2022) O DAMA-DMBoK introduz a figura do mordomo de dados, indivíduo cujo
   trabalho é administrar a propriedade ou os dados de outra pessoa.

Comentários:

Um curador, custodiante, mordomo ou administrador de dados é uma pessoa cujo trabalho é
administrar a propriedade de outra pessoa. Data Stewards gerenciam ativos de dados em nome de
outros e no melhor interesse da organização. Eles representam os interesses de todas as partes
interessadas e devem adotar uma perspectiva corporativa para garantir que os dados corporativos
sejam de alta qualidade e possam ser usados com eficácia.

                                                                                       Gabarito: Correto

9. (PROF.DIEGO / INÉDITA – 2024) Assinale a alternativa correta sobre o principal objetivo da
   governança de dados?

   a) Criar novos ativos de dados.
   b) Automatizar processos de gerenciamento.
   c) Otimizar o uso dos ativos de dados.
   d) Gerenciar a privacidade dos dados.
   e) Exercer autoridade e controle sobre o gerenciamento de ativos de dados.

Comentários:

A governança de dados é definida como o exercício de autoridade e controle (planejamento,
monitoramento e execução) sobre o gerenciamento de ativos de dados.

                                                                                       Gabarito: Letra E

10. (PROF.DIEGO / INÉDITA – 2024) Qual das seguintes afirmações é verdadeira sobre governança
    de dados?

        Receita Federal (Analista Tributário) Fluência em Dados                                      93
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) Tem o mesmo sentido de gerenciamento de dados.
   b) É usada para garantir que os dados estejam disponíveis e acessíveis.
   c) Está fortemente associada às atividades de Administrador de Banco de Dados (DBAs).
   d) É usada para descrever os processos pelos quais as organizações tomam decisões sobre
   dados.
   e) A governança de dados está presente apenas no nível operacional e não o nível estratégico.

Comentários:

(a) Errado, enquanto o objetivo geral do gerenciamento de dados é garantir que uma organização
obtenha valor de seus dados, a governança de dados se concentra em como as decisões são
tomadas sobre os dados e como se espera que pessoas/processos se comportem em relação a eles;
(b) Errado, essa é uma função do gerenciamento de dados; (c) Errado, é a função de gerenciamento
de dados que está associada às atividades de DBAs; (d) Correto; (e) Errado, ela atinge – sim – o nível
estratégico e depende do patrocínio da alta administração.

                                                                                        Gabarito: Letra D

11. (PROF.DIEGO / INÉDITA – 2024) Assinale a alternativa que não representa a correta associação
    da descrição com o escopo/foco de um programa de governança de dados:

   a) Supervisão: fornecer observação prática, auditoria e correção em áreas-chave de qualidade,
   política e gerenciamento de dados (muitas vezes referido como administração).

   b) Políticas: definição e aplicação de políticas relacionadas ao gerenciamento de dados e
   metadados, acesso, uso, segurança e qualidade.

   c) Conformidade: garantir que a organização possa atender aos requisitos de conformidade
   regulatória relacionados a dados.

   d) Estratégia: definir, comunicar e conduzir a execução da estratégia de dados e da estratégia
   de governança de dados.

   e) Padrões e Qualidade: patrocinar esforços para melhorar as práticas de gerenciamento de
   dados.

Comentários:

            ESCOPO/foco                                           DESCRIÇÃO
                         Definir, comunicar e conduzir a execução da estratégia de dados e da estratégia de
              ESTRATÉGIA governança de dados.

                            Definição e aplicação de políticas relacionadas ao gerenciamento de dados e
                POLÍTICAS
                            metadados, acesso, uso, segurança e qualidade.


        Receita Federal (Analista Tributário) Fluência em Dados                                          94
        www.estrategiaconcursos.com.br                                                                   120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                           Definição e aplicação de padrões de qualidade e arquitetura de dados.
     PADRÕES E QUALIDADE

                           Fornecer observação prática, auditoria e correção em áreas-chave de qualidade, política
              SUPERVISÃO e gerenciamento de dados (muitas vezes referido como administração).

                           Garantir que a organização possa atender aos requisitos de conformidade regulatória
            CONFORMIDADE relacionados a dados.

       GERENCIAMENTO DE Identificar, definir, escalar e resolver problemas relacionados à segurança de dados,
                        acesso, qualidade de dados, conformidade regulatória, propriedade de dados, política,
             PROBLEMAS padrões, terminologia ou procedimentos de governança de dados.
            PROJETOS DE Patrocinar esforços para melhorar as práticas de gerenciamento de dados.
 GERENCIAMENTO DE DADOS
   AVALIAÇÃO DE ATIVOS DE Estabelecer padrões e processos para definir consistentemente o valor comercial dos
                          ativos de dados.
                   DADOS

Note que Padrões de Qualidade trata da definição e aplicação de padrões de qualidade e arquitetura
de dados; patrocinar esforços para melhorar as práticas de gerenciamento de dados está
relacionado a Projetos de Gerenciamento de Dados.

                                                                                              Gabarito: Letra E

12. (PROF.DIEGO / INÉDITA – 2024) Sobre governança de dados, assinale a alternativa incorreta.

   a) Em geral, o principal driver para implantação da governança de dados é a redução de riscos.
   b) Os esforços de governança de dados precisam incluir um componente de mudança cultural.
   c) Para que planos de governança de dados sejam exitosos, é necessário que a organização
   aceite e gerencie mudanças.
   d) A governança de dados requer um programa contínuo focado em garantir que uma
   organização obtenha valor de seus dados e reduza os riscos relacionados eles.
   e) A cultura organizacional pode inviabilizar a estratégia de governança de dados.

Comentários:

Todas as alternativas estão corretas, exceto a alternativa (a). Em geral, o principal driver para
implantação da governança de dados é a conformidade regulatória e, não, a redução de riscos.

                                                                                              Gabarito: Letra A

13. (PROF.DIEGO / INÉDITA – 2024) A respeito de governança de dados, assinale a alternativa
    incorreta.


        Receita Federal (Analista Tributário) Fluência em Dados                                                 95
        www.estrategiaconcursos.com.br                                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) A governança de dados é um processo contínuo que requer compromisso da organização.
   Exige mudanças na maneira como os dados são gerenciados e usados. Isso significa gerenciar
   as mudanças de maneira sustentável, além da implementação inicial de qualquer componente
   de controle de dados.

   b) O objetivo da governança de dados é permitir que uma organização gerencie os dados como
   um ativo. A governança de dados fornece os princípios, políticas, processos, frameworks,
   métricas e supervisão para gerenciar os dados como um ativo e orientar as atividades de
   gerenciamento de dados em todos os níveis.

   c) A governança de dados não é um processo complementar. As atividades de governança
   precisam ser incorporadas aos métodos de desenvolvimento de software, uso de dados para
   análise, gerenciamento de dados mestre e gerenciamento de riscos.

   d) A governança de dados bem implementada gera impactos positivos, mas demonstrar esse
   impacto requer a compreensão do ponto de partida, do planejamento e definição de indicadores
   que represente o quanto a governança de dados gera melhorias mensuráveis.


   e) A governança de dados, apesar de ter um escopo amplo, está basicamente ligada apenas à
   área de tecnologia da informação.

Comentários:

Todas as alternativas estão corretas, exceto a alternativa (e). A governança de dados é separada da
governança de tecnologia da informação. A governança de tecnologia da informação toma
decisões sobre investimentos em tecnologia da informação, portfólio de aplicativos de tecnologia
da informação e portfólio de projetos de tecnologia da informação – em outras palavras, hardware,
software e arquitetura técnica geral. A governança de tecnologia da informação alinha as
estratégias e investimentos de tecnologia da informação com os objetivos e estratégias da
empresa.

                                                                                       Gabarito: Letra E

14. (PROF.DIEGO / INÉDITA – 2024) Sobre os princípios de governança de dados, assinale a
    alternativa incorreta.

   a) A governança de dados bem-sucedida começa com uma liderança visionária e comprometida,
   mas não é necessário que ela esteja alinhada à estratégia de negócios da organização.

   b) A governança de dados é uma responsabilidade compartilhada entre gestores de negócios e
   profissionais de gerenciamento de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                      96
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   c) Os princípios orientadores são a base das atividades de governança de dados e,
   principalmente, da política de governança de dados.

   d) Como as atividades de governança de dados exigem coordenação entre áreas funcionais, o
   programa de governança de dados deve estabelecer uma estrutura operacional que defina
   responsabilidades e interações.

   e) A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.

Comentários:

Todas as alternativas estão corretas, exceto a alternativa (a). A governança de dados bem-sucedida
começa com uma liderança visionária, comprometida e alinhada à estratégia de negócios da
organização.

                                                                                       Gabarito: Letra A

15. (PROF.DIEGO / INÉDITA – 2024) Sobre os tipos de modelo operacional de governança de
    dados, assinale a alternativa correta.

   a) Em um modelo colegiado, o mesmo modelo operacional e padrões da governança de dados
   são adotados por cada unidade de negócios.

   b) Em um modelo centralizado, uma organização de governança de dados coordena-se com
   várias unidades de negócios para manter definições e padrões consistentes.

   c) Em um modelo replicado, uma organização de governança de dados supervisiona todas as
   atividades em todas as áreas de assunto.

   d) Em um modelo federado, o mesmo modelo operacional e padrões da governança de dados
   são adotados por cada unidade de negócios.

   e) Em um modelo compartilhado, uma organização de governança de dados supervisiona todas
   as atividades em todas as áreas de assunto.

Comentários:

(a) Correto; (b) Errado, essa é a descrição de um modelo federado ou compartilhado; (c) Errado,
essa é a descrição de um modelo centralizado; (d) Errado, essa é a descrição de um modelo
replicado ou colegiado; (e) Errado, essa é a descrição de um modelo centralizado.

                                                                                       Gabarito: Letra A

        Receita Federal (Analista Tributário) Fluência em Dados                                      97
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

16. (PROF. DIEGO / INÉDITA – 2024) A Governança de Tecnologia da Informação visa
    exclusivamente o controle dos recursos tecnológicos, sem se preocupar com o alinhamento
    desses recursos com os objetivos estratégicos da empresa.

Comentários:

A Governança de Tecnologia da Informação não se limita ao controle dos recursos tecnológicos,
mas também busca garantir que esses recursos apoiem os objetivos estratégicos da empresa,
fornecendo valor e mitigando riscos associados ao uso da tecnologia.

                                                                                       Gabarito: Errado

17. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados é uma extensão da Governança
    Corporativa e da Governança de Tecnologia da Informação, mas, diferentemente dessas, não
    atribui responsabilidades claras para o tratamento dos dados.

Comentários:

A Governança de Dados, assim como a Governança Corporativa e a Governança de Tecnologia da
Informação, atribui responsabilidades claras para o tratamento dos dados. Ela envolve a criação de
políticas, normas e procedimentos que regulam o tratamento dos dados, e atribui papéis como
proprietários de dados e gestores para garantir uma governança eficaz.

                                                                                       Gabarito: Errado

18. (PROF. DIEGO / INÉDITA – 2024) A Gestão de Dados deve orientar as atividades de Governança
    de Dados, garantindo que as pessoas e processos sigam as diretrizes estabelecidas pela Gestão
    de Dados.

Comentários:

A Governança de Dados é que deve orientar as atividades de Gestão de Dados, estabelecendo como
pessoas e processos devem se comportar em relação aos dados para assegurar que a organização
obtenha valor a partir deles.

                                                                                       Gabarito: Errado

19. (PROF. DIEGO / INÉDITA – 2024) Uma das principais motivações para a Governança de Dados
    é a necessidade de as organizações cumprirem leis e regulamentações, prevenindo e mitigando
    riscos de incidentes inadequados.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                     98
        www.estrategiaconcursos.com.br                                                              120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

A Governança de Dados está diretamente relacionada à conformidade com leis e regras, sendo uma
de suas principais motivações a prevenção de riscos e a mitigação de incidentes antes que eles
aconteçam novamente.

                                                                                       Gabarito: Correto

20. (PROF. DIEGO / INÉDITA – 2024) O gerenciamento de problemas em um programa de
    Governança de Dados não se limita à segurança de dados, considerando outros aspectos como
    propriedade de dados ou conformidade regulatória.

Comentários:

O gerenciamento de problemas em um programa de Governança de Dados envolve a identificação,
definição, escalonamento e resolução de problemas relacionados a diversos aspectos, como
segurança de dados, qualidade, conformidade regulatória, propriedade de dados, entre outros.

                                                                                       Gabarito: Correto

21. (PROF. DIEGO / INÉDITA – 2024) A implementação da Governança de Dados em órgãos
    públicos contribui para a melhoria na tomada de decisões, ao garantir que as informações
    utilizadas sejam confiáveis, organizadas, precisas e interpretáveis.

Comentários:

A Governança de Dados fortalece a tomada de decisões ao assegurar que as informações
disponíveis sejam de alta qualidade e possam ser confiavelmente usadas para embasar decisões,
beneficiando tanto a administração pública quanto outros interessados.

                                                                                       Gabarito: Correto

22. (PROF. DIEGO / INÉDITA – 2024) A adoção da Governança de Dados em órgãos públicos tende
    a aumentar os custos operacionais, uma vez que requer mais recursos para o gerenciamento de
    dados e processos.

Comentários:

A Governança de Dados tende a aumentar a eficiência organizacional, o que pode resultar na
redução de custos operacionais, permitindo a redistribuição de recursos para outras iniciativas
dentro do órgão público.

                                                                                       Gabarito: Errado

        Receita Federal (Analista Tributário) Fluência em Dados                                      99
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

23. (PROF. DIEGO / INÉDITA – 2024) Uma das vantagens da Governança de Dados é a criação de
    diretrizes que podem ajudar a proteger os dados dos cidadãos e fortalecer a segurança da
    informação nos órgãos públicos.

Comentários:

A Governança de Dados desempenha um papel crucial na criação de regras e ferramentas que visam
proteger os dados dos cidadãos e ampliar as práticas de segurança nos órgãos públicos, em
conformidade com as regulações de proteção de dados.

                                                                                       Gabarito: Correto

24. (PROF. DIEGO / INÉDITA – 2024) Os Mantenedores, também conhecidos como custodiantes,
    são responsáveis pela definição de como os dados devem ser utilizados e pelas decisões
    relacionadas ao uso das informações.

Comentários:

Os Mantenedores não devem definir ou tomar decisões em relação ao uso dos dados; essa
responsabilidade cabe exclusivamente aos Gestores das Informações.

                                                                                       Gabarito: Errado

25. (PROF. DIEGO / INÉDITA – 2024) Os Criadores dos Dados e Informações são responsáveis por
    registrar e armazenar informações dentro das aplicações, tendo geralmente acessos de criação,
    edição e consulta às informações.

Comentários:

Os Criadores dos Dados e Informações têm a função de registrar e armazenar dados dentro das
aplicações, com acesso para criação, edição e consulta das informações.

                                                                                       Gabarito: Correto

26. (PROF. DIEGO / INÉDITA – 2024) Uma das razões para a implantação da Governança de Dados
    é evitar prejuízos decorrentes da baixa qualidade dos dados, que podem gerar retrabalho, custos
    elevados e até perdas financeiras devido a decisões erradas.

Comentários:

A implantação da Governança de Dados visa evitar prejuízos associados à baixa qualidade dos
dados, o que pode resultar em retrabalho, aumento de custos e perdas financeiras por decisões
baseadas em dados incorretos.


        Receita Federal (Analista Tributário) Fluência em Dados                                      100
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                       Gabarito: Correto

27. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados não contribui para a redução dos
    custos de desenvolvimento de aplicações, uma vez que não interfere nos processos de criação
    ou eliminação de silos redundantes.

Comentários:

A Governança de Dados contribui para a redução dos custos de desenvolvimento de aplicações ao
diminuir o retrabalho, eliminar silos redundantes e disseminar processos eficientes de Gestão de
Dados.

                                                                                       Gabarito: Errado

28. (PROF. DIEGO / INÉDITA – 2024) Os Consumidores dos Dados e Informações podem ter acesso
    direto ou indireto aos dados armazenados, dependendo do propósito e da forma como acessam
    as informações.

Comentários:

Os Consumidores dos Dados podem acessar as informações de forma direta (ex.: consulta online a
uma aplicação) ou indireta, através de outros intermediários.

                                                                                       Gabarito: Correto

29. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados pode ser adotada como um projeto
    único e temporário, uma vez que, após sua implementação inicial, não são necessários projetos
    adicionais.

Comentários:

A Governança de Dados é um programa contínuo, não um projeto único. Mesmo após a
implementação inicial, diversos projetos adicionais serão necessários ao longo do tempo para
garantir a eficácia da governança.

                                                                                       Gabarito: Errado

30. (PROF. DIEGO / INÉDITA – 2024) Um dos princípios da Governança de Dados é que os dados
    devem ser considerados ativos da organização, exigindo procedimentos de controle
    organizacional semelhantes aos aplicados a outros ativos, como os financeiros e materiais.

Comentários:


        Receita Federal (Analista Tributário) Fluência em Dados                                      101
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Os dados são considerados ativos valiosos da organização e, como tal, devem ser geridos com
procedimentos de controle organizacional, semelhante aos utilizados para ativos financeiros e
materiais.

                                                                                       Gabarito: Correto

31. (PROF. DIEGO / INÉDITA – 2024) A governança de dados exige um compromisso contínuo da
    organização e deve ser incorporada aos métodos de desenvolvimento de software,
    gerenciamento de dados mestre e outras atividades operacionais.

Comentários:

A Governança de Dados precisa ser sustentada ao longo do tempo e deve estar integrada aos
processos organizacionais, como desenvolvimento de software e gerenciamento de dados mestre,
para ser eficaz.

                                                                                       Gabarito: Correto

32. (PROF. DIEGO / INÉDITA – 2024) Um dos objetivos principais da governança de dados é a
    melhoria contínua da qualidade dos dados e dos processos de gestão relacionados, o que implica
    na execução regular de novos projetos.

Comentários:

A melhoria contínua da qualidade dos dados e dos processos de gestão é um dos principais objetivos
da Governança de Dados, o que requer a execução de projetos regulares para alcançar excelência
no uso dos dados.

                                                                                       Gabarito: Correto

33. (PROF. DIEGO / INÉDITA – 2024) Na Governança de Dados, os processos relacionados ao
    negócio são ativados apenas quando os dados são criados, sem considerar as alterações que
    ocorrem ao longo do ciclo de vida dos dados.

Comentários:

Os processos relacionados ao negócio na Governança de Dados são ativados tanto quando os dados
são criados quanto quando sofrem alterações ao longo do seu ciclo de vida.

                                                                                       Gabarito: Errado

        Receita Federal (Analista Tributário) Fluência em Dados                                      102
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

34. (PROF. DIEGO / INÉDITA – 2024) A tecnologia na Governança de Dados abrange apenas as
    ferramentas de software utilizadas, não incluindo a infraestrutura de hardware, como servidores
    e equipamentos.

Comentários:

A tecnologia na Governança de Dados inclui tanto as ferramentas de software quanto a
infraestrutura de hardware, como servidores e outros equipamentos que suportam as soluções
implementadas.

                                                                                       Gabarito: Errado

35. (PROF. DIEGO / INÉDITA – 2024) A Estratégia de Dados é um documento que alinha a gestão
    e governança de dados às metas estratégicas do negócio e deve ser amplamente divulgado em
    todos os níveis da organização.

Comentários:

A Estratégia de Dados define os objetivos e direções para a Gestão e Governança de Dados,
alinhando-os com as metas do negócio, e deve ser amplamente divulgada para garantir a
compreensão e adesão em todos os níveis da organização.

                                                                                       Gabarito: Correto

36. (PROF. DIEGO / INÉDITA – 2024) As políticas de dados, ao contrário da Estratégia de Dados,
    não precisam ser amplamente divulgadas dentro da empresa e são voltadas principalmente para
    os profissionais diretamente envolvidos com a Gestão de Dados.

Comentários:

As políticas de dados, que estabelecem regras para o ciclo de vida dos dados, são focadas nos
profissionais diretamente envolvidos e não precisam ser amplamente divulgadas como a Estratégia
de Dados.

                                                                                       Gabarito: Correto

37. (PROF. DIEGO / INÉDITA – 2024) Normas e padrões na Governança de Dados explicam
    detalhadamente como as tarefas devem ser executadas, servindo como um guia prático para a
    execução de atividades específicas.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      103
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Normas e padrões regulam o que deve ou não ser feito na criação de artefatos nas atividades de
Gestão de Dados, enquanto os procedimentos são os que orientam detalhadamente como as
tarefas devem ser executadas.

                                                                                       Gabarito: Errado

38. (PROF. DIEGO / INÉDITA – 2024) Um modelo de governança de dados centralizado envolve
    uma organização de governança que supervisiona todas as atividades relacionadas aos dados
    em todas as áreas de negócios.

Comentários:

No modelo centralizado, uma única organização de governança de dados é responsável por
supervisionar todas as atividades relacionadas aos dados em toda a organização.

                                                                                       Gabarito: Correto

39. (PROF. DIEGO / INÉDITA – 2024) No modelo federado de governança de dados, cada unidade
    de negócios adota padrões e modelos operacionais independentes e sem coordenação entre
    elas.

Comentários:

No modelo federado, há coordenação entre as várias unidades de negócios para manter definições
e padrões consistentes, mesmo que cada unidade tenha alguma autonomia.

                                                                                       Gabarito: Errado

40. (PROF. DIEGO / INÉDITA – 2024) Data Stewardship é um termo que descreve a
    responsabilidade de gerenciar dados em nome de outros e garantir que esses dados sejam de
    alta qualidade e usados de forma eficaz.

Comentários:

Data Stewardship refere-se à prestação de contas e responsabilidade por gerenciar dados de forma
que sejam de alta qualidade e utilizados de maneira eficaz.

                                                                                       Gabarito: Correto

41. (PROF. DIEGO / INÉDITA – 2024) As atividades de Data Stewardship incluem apenas a criação
    de metadados e não envolvem a resolução de problemas de qualidade de dados ou a execução
    de atividades operacionais de governança de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                      104
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Comentários:

As atividades de Data Stewardship incluem a criação de metadados, mas também envolvem a
resolução de problemas de qualidade de dados e a execução de atividades operacionais de
governança de dados.

                                                                                       Gabarito: Errado

42. (PROF. DIEGO / INÉDITA – 2024) As políticas de dados definem como as atividades de
    governança de dados devem ser executadas, detalhando o processo passo a passo.

Comentários:

As políticas de dados descrevem o "o quê" da governança de dados (o que fazer e o que não fazer),
enquanto os padrões e procedimentos descrevem o "como" (como executar as atividades).

                                                                                       Gabarito: Errado

43. (PROF. DIEGO / INÉDITA – 2024) A avaliação de ativos de dados envolve entender e calcular o
    valor econômico dos dados para uma organização, considerando como esses dados são usados
    e o valor que trazem.

Comentários:

A avaliação de ativos de dados busca entender o valor econômico dos dados para uma organização
com base em seu uso e no valor que proporcionam.

                                                                                       Gabarito: Correto

44.(PROF. DIEGO / INÉDITA – 2024) A Gestão de Dados Mestres (GDM) visa manter a qualidade
   dos dados mestres, garantindo que sejam precisos, consistentes e atualizados em toda a
   organização.

Comentários:

A GDM envolve processos contínuos para manter a qualidade dos dados mestres, garantindo sua
precisão, consistência e atualização em toda a organização.

                                                                                       Gabarito: Correto

45. (PROF. DIEGO / INÉDITA – 2024) Um dos principais benefícios da Gestão de Dados Mestres é
    a criação de uma visão unificada e consistente dos dados em diferentes áreas da organização,
    como marketing, vendas e suporte ao cliente.


        Receita Federal (Analista Tributário) Fluência em Dados                                      105
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Comentários:

A GDM proporciona uma visão holística e consistente dos dados mestres, o que melhora a eficiência
operacional e a satisfação do cliente em diferentes áreas da organização.

                                                                                       Gabarito: Correto

46.(PROF. DIEGO / INÉDITA – 2024) As plataformas de Gestão de Dados Mestres (MDM) não
   possuem funcionalidades de qualidade de dados e, portanto, não podem corrigir erros como
   duplicação de dados ou falhas de digitação.

Comentários:

As plataformas de MDM incluem funcionalidades robustas de qualidade de dados que permitem
identificar e corrigir erros, como duplicações ou falhas de digitação.

                                                                                       Gabarito: Errado

47. (PROF. DIEGO / INÉDITA – 2024) Após consolidar e corrigir os dados em uma plataforma MDM,
    as informações corrigidas podem ser redistribuídas para os sistemas de origem, garantindo que
    toda a organização trabalhe com dados precisos e atualizados.

Comentários:

Após a consolidação e correção dos dados, as informações podem ser sincronizadas de volta aos
sistemas de origem, assegurando que toda a organização trabalhe com dados precisos e
atualizados.
                                                                            Gabarito: Correto

        Receita Federal (Analista Tributário) Fluência em Dados                                      106
        www.estrategiaconcursos.com.br                                                               120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

            QUESTÕES COMENTADAS – DIVERSAS BANCAS
1. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta sobre a importância da
   fluência de dados:

   a) Trata-se de um instrumento para gerar vantagens competitivas de longo prazo.
   b) Trata-se de um instrumento para aprimorar a tomada de decisões.
   c) Trata-se de um instrumento para envolver os funcionários de todas as funções.
   d) Trata-se de um instrumento para tornar os dados acessíveis a todos.
   e) Trata-se de um instrumento baseado em aprendizado de máquina para melhorar a
   comunicação.

2. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa correta sobre a fluência de dados:

   a) Dados brutos são tão valiosos quanto dados interpretados.
   b) Coletar, armazenar e gerenciar dados não custa dinheiro.
   c) Os dados só se tornam valiosos quando se obtêm insights.
   d) Criar visualizações de dados é suficiente para atingir a fluência de dados.
   e) A qualidade dos dados brutos não é relevante para a fluência de dados.

3. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta sobre fluência de dados:

   a) A fluência em dados se beneficia do processo de governança de dados, já que esta permite
   que saibamos o ciclo de vida que o dado percorre desde sua ingestão até o descarte, garante
   que os dados estejam atualizados tempestivamente e que o acesso só estará disponível àqueles
   que tem autorização para acessá-lo.

   b) Executivos precisam ser fluentes em dados e fomentar que os colaboradores também sejam.
   O programa de fluência em dados é um programa educacional e, como tal, ele precisa ter um
   patrocinador; um patrocinador que possa tornar sua adoção e realização alinhada aos objetivos
   estratégicos da empresa.

   c) Um dos principais desafios da fluência em dados é a necessidade em explicar algoritmos de
   Inteligência Artificial e os meios pelos quais o algoritmo chegou a determinado resultado.
   Cientistas de Dados e colaboradores do negócio que trabalham com dados têm o desafio de
   entender os modelos e seus resultados.

   d) As organizações muitas vezes podem ter uma ideia não realista sobre a implementação de
   estratégias de dados e analytics. Empresas normalmente investem em ferramentas,
   capacitação da equipe de dados, plataformas, mas muitas vezes não tem uma estratégia
   desenhada de como alcançar sucesso com esses elementos. Essa estratégia deve apresentar
   como os dados podem se tornar ação no futuro.


        Receita Federal (Analista Tributário) Fluência em Dados                               107
        www.estrategiaconcursos.com.br                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   e) Apesar de relevante, a cultura empresarial não chega a se tornar uma barreira para o sucesso
   na utilização dos dados e estratégias de analytics, dado que ela pode ser imposta de forma top-
   down pela alta direção da organização.

4. (PROF. DIEGO / INÉDITA – 2023) Assinale alternativa correta.

   a) A capacidade da empresa de entender os dados e traduzi-los em análises perspicazes deve
   direcionar a organização para longe de fazer escolhas cegas ou tendenciosas. A fluência de
   dados suporta uma abordagem sistemática e baseada em metas durante todo o processo de
   tomada de decisão, garantindo assim que decisões subjetivas e impactantes sejam tomadas.

   b) Conversas sobre dados geralmente levantam mais perguntas do que respostas. Em uma
   organização onde a comunicação clara é estabelecida, essas questões podem ser valiosas. Elas
                                                       ==219a34==

   podem inspirar o pensamento criativo e moldar a discussão em direção a um conhecimento mais
   superficial, melhores insights e mudanças positivas.

   c) É difícil entender o progresso de uma empresa com dados incompletos ou ausentes.
   Visualizações apropriadas e comunicação clara sobre as principais métricas ajudam a iluminar
   as prioridades e qual deve ser o próximo curso de ação. A visualização de dados ajuda a melhorar
   a compreensão dos dados, mas não interfere na transparência dos dados.

   d) O caminho para a alfabetização de dados tem seus pontos fortes, bem como desafios. Para
   muitas organizações, os benefícios são bem conhecidos – aumento da produtividade, vantagem
   competitiva – enquanto os riscos são menos definidos. Ao aprimorar a força de trabalho
   existente para se tornar mais fluente em dados, é importante notar que nenhum conjunto único
   de habilidades será suficiente para cada pessoa.

   e) Em uma organização madura de dados, mais tempo e energia são gastos decodificando
   gráficos e tabelas, em vez de ter conversas significativas. Um dos obstáculos em tais
   transformações reside na falta de comunicação e na incompreensão dos dados. Promover um
   ambiente fluente em dados permite que os indivíduos entendam e resolvam os problemas
   rapidamente.

5. (PROF. DIEGO / INÉDITA – 2023) Assinale a alternativa incorreta:

   a) Consumidores de Dados são pessoas que utilizam dados para tomar decisões e agir. Eles
   incluem executivos, gerentes, analistas e outros tomadores de decisão que usam dados para
   informar suas decisões. Os consumidores de dados também incluem usuários finais que usam
   dados para tomar decisões em suas vidas diárias.

   b) Produtores de dados devem trabalhar os dados brutos e fornecer o conteúdo de maneiras
   fáceis de entender e agir. Em geral, os consumidores de dados chegam às informações com
   prioridades, necessidades e perspectivas semelhantes.

        Receita Federal (Analista Tributário) Fluência em Dados                                 108
        www.estrategiaconcursos.com.br                                                          120

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

 c) A cultura de fluência de dados valoriza o uso de dados para tomar decisões informadas, com
 foco na solução de problemas baseado em dados. Ela incentiva a colaboração entre profissionais
 de dados, partes interessadas e tomadores de decisão para gerar insights e criar planos de ação
 e também reconhece o poder dos dados para moldar decisões e criar resultados positivos.

 d) O ecossistema de produção de dados é o conjunto de padrões, ferramentas e processos
 implementados para permitir o fluxo de informações e compartilhamento de dados. Esse
 ecossistema de produção de dados permite apoiar o desenvolvimento e a entrega de produtos
 e serviços de dados.

 e) Produtores de Dados são pessoas ou organizações que geram dados. Eles são responsáveis
 por criar, coletar e/ou produzir dados e disponibilizá-los aos consumidores. Exemplos de
 produtores de dados incluem agências governamentais, fontes públicas de dados, instituições
 de pesquisa e empresas privadas.

      Receita Federal (Analista Tributário) Fluência em Dados                                109
      www.estrategiaconcursos.com.br                                                         120

                                  


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                         GABARITO – DIVERSAS BANCAS
1. LETRA E
2. LETRA C
3. LETRA E
4. LETRA D
5. LETRA B

       Receita Federal (Analista Tributário) Fluência em Dados                        110
       www.estrategiaconcursos.com.br                                                 120

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                 LISTA DE QUESTÕES – DIVERSAS BANCAS
1. (FGV / TCE-PA – 2024) O crescimento na quantidade e complexidade dos dados disponíveis para
   as empresas torna imprescindível que a Governança de Dados seja estruturada com
   documentos que circulem em vários níveis da empresa de acordo com as suas respectivas
   finalidades, contribuindo para colimar os esforços de todos os membros para obter os
   resultados esperados.

   Com relação aos documentos da Governança de Dados, avalie as afirmativas a seguir.

    I. As políticas de dados são regras pormenorizadas do que pode ser feito e o que não pode ser
   feito, devendo ser conhecidas por todos os profissionais da empresa.

   II. As normas são documentos que indicam as práticas recomendadas, mas não obrigatórias, que
   devem ser adotadas pelas pessoas que trabalham com os dados.

   III. Os procedimentos têm por finalidade orientar as pessoas na execução de tarefas específicas
   visando atingir determinado objetivo, ou seja, documentos que indicam o “como fazer”
   determinada tarefa.

   Está correto o que se afirma em:

   a) I, apenas.
   b) II, apenas.
   c) III, apenas.
   d) I e III apenas.
   e) I, II e III.

2. (FGV / CGM-BH – 2024) Considere os tipos de modelos operacionais de governança de dados
   relacionados no DAMA-DMBOK v2, e assinale (V) para a afirmativa verdadeira e (F) para a falsa.

   ( ) Num modelo simplificado, uma organização de governança de dados importa modelos
   padronizados para seu segmento de atuação e supervisiona todas as atividades em todas as
   áreas temáticas.

   ( ) Num modelo replicado, o mesmo modelo operacional e padrões de governança de dados são
   adotados por cada unidade de negócio.

   ( ) Num modelo híbrido, uma organização de governança de dados importa e adapta os modelos
   simplificado e replicado para as múltiplas unidades de negócios com a função de manter
   definições e padrões consistentes.

        Receita Federal (Analista Tributário) Fluência em Dados                                111
        www.estrategiaconcursos.com.br                                                         120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   As afirmativas são, respectivamente,

   a) F – V – F.
   b) V – F – F.
   c) F – F – V.
   d) V – V – F.

3. (FGV / CGE-PB – 2024) Os processos de coleta e organização de dados devem observar, com
   cuidado, um aspecto preconizado na Governança de Dados especialmente útil na elucidação de
   erros, mudanças nos processos e migrações de sistemas. Esse aspecto, numa estrutura de
   governança, é conhecido como:

   a) Controle de acesso;
   b) Linhagem de dados;
   c) Segurança de dados;
   d) Propriedade de dados;
   e) Classificação de dados.

4. (QUADRIX / CRQ12 – 2024) Na governança de dados, o principal objetivo da implementação de
   uma política de linhagem de dados é melhorar a velocidade de processamento de dados dentro
   de uma organização.

5. (QUADRIX / CRQ12 – 2024) A governança de dados é um conjunto de processos, políticas,
   normas e métricas que garantem a eficácia e a eficiência do uso da informação em uma
   organização. De acordo com seus princípios, ela somente poderá ser empregada no setor
   privado.

6. (FGV / SEFAZ-MG – 2023) Sobre o conceito de Governança de Dados (DAMA), assinale a
   afirmativa correta.

   a) É a função central da Gestão, que representa o exercício da autoridade e do controle de
   estratégias etc.

   b) Serve para criar e manter a arquitetura corporativa de dados de acordo com objetivos
   estratégicos da empresa.

   c) É a função responsável por definir e manter políticas de segurança a fim de prover
   autenticação, acesso e auditoria.

   d) Trata-se de função operacional responsável por manter os dados através dos vários ciclos, até
   o arquivamento final ou eliminação.

   e) Serve para definir e controlar atividades para a disponibilização de visões únicas de dados
   mestre (Golden Record) e de referência na empresa.

        Receita Federal (Analista Tributário) Fluência em Dados                                 112
        www.estrategiaconcursos.com.br                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

7. (FGV / CGU – 2022) No âmbito do DAMA-DMBOK, com referência à Governança de Dados, a
   figura dos Data Stewards caracteriza-se como:

   a) etapas de testes de conformidade dos dados;
   b) instâncias de aprovação da arquitetura de dados;
   c) instâncias de unidades organizacionais responsáveis pela estratégia de dados;
   d) responsáveis, dentro da área de negócios, pelo controle e uso dos dados;
   e) usuários que consomem dados dentro de uma organização.

8. (CESPE / BNB – 2022) O DAMA-DMBoK introduz a figura do mordomo de dados, indivíduo cujo
   trabalho é administrar a propriedade ou os dados de outra pessoa.

9. (PROF.DIEGO / INÉDITA – 2024) Assinale a alternativa correta sobre o principal objetivo da
   governança de dados?

   a) Criar novos ativos de dados.
   b) Automatizar processos de gerenciamento.
   c) Otimizar o uso dos ativos de dados.
   d) Gerenciar a privacidade dos dados.
   e) Exercer autoridade e controle sobre o gerenciamento de ativos de dados.

10. (PROF.DIEGO / INÉDITA – 2024) Qual das seguintes afirmações é verdadeira sobre governança
    de dados?

   a) Tem o mesmo sentido de gerenciamento de dados.
   b) É usada para garantir que os dados estejam disponíveis e acessíveis.
   c) Está fortemente associada às atividades de Administrador de Banco de Dados (DBAs).
   d) É usada para descrever os processos pelos quais as organizações tomam decisões sobre
   dados.
   e) A governança de dados está presente apenas no nível operacional e não o nível estratégico.

11. (PROF.DIEGO / INÉDITA – 2024) Assinale a alternativa que não representa a correta associação
    da descrição com o escopo/foco de um programa de governança de dados:

   a) Supervisão: fornecer observação prática, auditoria e correção em áreas-chave de qualidade,
   política e gerenciamento de dados (muitas vezes referido como administração).

   b) Políticas: definição e aplicação de políticas relacionadas ao gerenciamento de dados e
   metadados, acesso, uso, segurança e qualidade.

   c) Conformidade: garantir que a organização possa atender aos requisitos de conformidade
   regulatória relacionados a dados.

        Receita Federal (Analista Tributário) Fluência em Dados                              113
        www.estrategiaconcursos.com.br                                                       120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   d) Estratégia: definir, comunicar e conduzir a execução da estratégia de dados e da estratégia
   de governança de dados.

   e) Padrões e Qualidade: patrocinar esforços para melhorar as práticas de gerenciamento de
   dados.

12. (PROF.DIEGO / INÉDITA – 2024) Sobre governança de dados, assinale a alternativa incorreta.

   a) Em geral, o principal driver para implantação da governança de dados é a redução de riscos.
   b) Os esforços de governança de dados precisam incluir um componente de mudança cultural.
   c) Para que planos de governança de dados sejam exitosos, é necessário que a organização
   aceite e gerencie mudanças.
   d) A governança de dados requer um programa contínuo focado em garantir que uma
   organização obtenha valor de seus dados e reduza os riscos relacionados eles.
   e) A cultura organizacional pode inviabilizar a estratégia de governança de dados.

13. (PROF.DIEGO / INÉDITA – 2024) A respeito de governança de dados, assinale a alternativa
    incorreta.

   a) A governança de dados é um processo contínuo que requer compromisso da organização.
   Exige mudanças na maneira como os dados são gerenciados e usados. Isso significa gerenciar
   as mudanças de maneira sustentável, além da implementação inicial de qualquer componente
   de controle de dados.

   b) O objetivo da governança de dados é permitir que uma organização gerencie os dados como
   um ativo. A governança de dados fornece os princípios, políticas, processos, frameworks,
   métricas e supervisão para gerenciar os dados como um ativo e orientar as atividades de
   gerenciamento de dados em todos os níveis.

   c) A governança de dados não é um processo complementar. As atividades de governança
   precisam ser incorporadas aos métodos de desenvolvimento de software, uso de dados para
   análise, gerenciamento de dados mestre e gerenciamento de riscos.

   d) A governança de dados bem implementada gera impactos positivos, mas demonstrar esse
   impacto requer a compreensão do ponto de partida, do planejamento e definição de indicadores
   que represente o quanto a governança de dados gera melhorias mensuráveis.


   e) A governança de dados, apesar de ter um escopo amplo, está basicamente ligada apenas à
   área de tecnologia da informação.

14. (PROF.DIEGO / INÉDITA – 2024) Sobre os princípios de governança de dados, assinale a
    alternativa incorreta.

        Receita Federal (Analista Tributário) Fluência em Dados                               114
        www.estrategiaconcursos.com.br                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) A governança de dados bem-sucedida começa com uma liderança visionária e comprometida,
   mas não é necessário que ela esteja alinhada à estratégia de negócios da organização.

   b) A governança de dados é uma responsabilidade compartilhada entre gestores de negócios e
   profissionais de gerenciamento de dados.

   c) Os princípios orientadores são a base das atividades de governança de dados e,
   principalmente, da política de governança de dados.

   d) Como as atividades de governança de dados exigem coordenação entre áreas funcionais, o
   programa de governança de dados deve estabelecer uma estrutura operacional que defina
   responsabilidades e interações.

   e) A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.

15. (PROF.DIEGO / INÉDITA – 2024) Sobre os tipos de modelo operacional de governança de
    dados, assinale a alternativa correta.

   a) Em um modelo colegiado, o mesmo modelo operacional e padrões da governança de dados
   são adotados por cada unidade de negócios.

   b) Em um modelo centralizado, uma organização de governança de dados coordena-se com
   várias unidades de negócios para manter definições e padrões consistentes.

   c) Em um modelo replicado, uma organização de governança de dados supervisiona todas as
   atividades em todas as áreas de assunto.

   d) Em um modelo federado, o mesmo modelo operacional e padrões da governança de dados
   são adotados por cada unidade de negócios.

   e) Em um modelo compartilhado, uma organização de governança de dados supervisiona todas
   as atividades em todas as áreas de assunto.

16. (PROF. DIEGO / INÉDITA – 2024) A Governança de Tecnologia da Informação visa
    exclusivamente o controle dos recursos tecnológicos, sem se preocupar com o alinhamento
    desses recursos com os objetivos estratégicos da empresa.

17. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados é uma extensão da Governança
    Corporativa e da Governança de Tecnologia da Informação, mas, diferentemente dessas, não
    atribui responsabilidades claras para o tratamento dos dados.

        Receita Federal (Analista Tributário) Fluência em Dados                               115
        www.estrategiaconcursos.com.br                                                        120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

18. (PROF. DIEGO / INÉDITA – 2024) A Gestão de Dados deve orientar as atividades de Governança
    de Dados, garantindo que as pessoas e processos sigam as diretrizes estabelecidas pela Gestão
    de Dados.

19. (PROF. DIEGO / INÉDITA – 2024) Uma das principais motivações para a Governança de Dados
    é a necessidade de as organizações cumprirem leis e regulamentações, prevenindo e mitigando
    riscos de incidentes inadequados.

20. (PROF. DIEGO / INÉDITA – 2024) O gerenciamento de problemas em um programa de
    Governança de Dados não se limita à segurança de dados, considerando outros aspectos como
    propriedade de dados ou conformidade regulatória.

21. (PROF. DIEGO / INÉDITA – 2024) A implementação da Governança de Dados em órgãos
    públicos contribui para a melhoria na tomada de decisões, ao garantir que as informações
    utilizadas sejam confiáveis, organizadas, precisas e interpretáveis.

22. (PROF. DIEGO / INÉDITA – 2024) A adoção da Governança de Dados em órgãos públicos tende
    a aumentar os custos operacionais, uma vez que requer mais recursos para o gerenciamento de
    dados e processos.

23. (PROF. DIEGO / INÉDITA – 2024) Uma das vantagens da Governança de Dados é a criação de
    diretrizes que podem ajudar a proteger os dados dos cidadãos e fortalecer a segurança da
    informação nos órgãos públicos.

24. (PROF. DIEGO / INÉDITA – 2024) Os Mantenedores, também conhecidos como custodiantes,
    são responsáveis pela definição de como os dados devem ser utilizados e pelas decisões
    relacionadas ao uso das informações.

25. (PROF. DIEGO / INÉDITA – 2024) Os Criadores dos Dados e Informações são responsáveis por
    registrar e armazenar informações dentro das aplicações, tendo geralmente acessos de criação,
    edição e consulta às informações.

26. (PROF. DIEGO / INÉDITA – 2024) Uma das razões para a implantação da Governança de Dados
    é evitar prejuízos decorrentes da baixa qualidade dos dados, que podem gerar retrabalho, custos
    elevados e até perdas financeiras devido a decisões erradas.

27. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados não contribui para a redução dos
    custos de desenvolvimento de aplicações, uma vez que não interfere nos processos de criação
    ou eliminação de silos redundantes.

28. (PROF. DIEGO / INÉDITA – 2024) Os Consumidores dos Dados e Informações podem ter acesso
    direto ou indireto aos dados armazenados, dependendo do propósito e da forma como acessam
    as informações.

        Receita Federal (Analista Tributário) Fluência em Dados                                 116
        www.estrategiaconcursos.com.br                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

29. (PROF. DIEGO / INÉDITA – 2024) A Governança de Dados pode ser adotada como um projeto
    único e temporário, uma vez que, após sua implementação inicial, não são necessários projetos
    adicionais.

30. (PROF. DIEGO / INÉDITA – 2024) Um dos princípios da Governança de Dados é que os dados
    devem ser considerados ativos da organização, exigindo procedimentos de controle
    organizacional semelhantes aos aplicados a outros ativos, como os financeiros e materiais.

31. (PROF. DIEGO / INÉDITA – 2024) A governança de dados exige um compromisso contínuo da
    organização e deve ser incorporada aos métodos de desenvolvimento de software,
    gerenciamento de dados mestre e outras atividades operacionais.

32. (PROF. DIEGO / INÉDITA – 2024) Um dos objetivos principais da governança de dados é a
    melhoria contínua da qualidade dos dados e dos processos de gestão relacionados, o que implica
    na execução regular de novos projetos.

33. (PROF. DIEGO / INÉDITA – 2024) Na Governança de Dados, os processos relacionados ao
    negócio são ativados apenas quando os dados são criados, sem considerar as alterações que
    ocorrem ao longo do ciclo de vida dos dados.

34. (PROF. DIEGO / INÉDITA – 2024) A tecnologia na Governança de Dados abrange apenas as
    ferramentas de software utilizadas, não incluindo a infraestrutura de hardware, como servidores
    e equipamentos.


35. (PROF. DIEGO / INÉDITA – 2024) A Estratégia de Dados é um documento que alinha a gestão
    e governança de dados às metas estratégicas do negócio e deve ser amplamente divulgado em
    todos os níveis da organização.

36. (PROF. DIEGO / INÉDITA – 2024) As políticas de dados, ao contrário da Estratégia de Dados,
    não precisam ser amplamente divulgadas dentro da empresa e são voltadas principalmente para
    os profissionais diretamente envolvidos com a Gestão de Dados.

37. (PROF. DIEGO / INÉDITA – 2024) Normas e padrões na Governança de Dados explicam
    detalhadamente como as tarefas devem ser executadas, servindo como um guia prático para a
    execução de atividades específicas.


38. (PROF. DIEGO / INÉDITA – 2024) Um modelo de governança de dados centralizado envolve
    uma organização de governança que supervisiona todas as atividades relacionadas aos dados
    em todas as áreas de negócios.

        Receita Federal (Analista Tributário) Fluência em Dados                                 117
        www.estrategiaconcursos.com.br                                                          120

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

39. (PROF. DIEGO / INÉDITA – 2024) No modelo federado de governança de dados, cada unidade
    de negócios adota padrões e modelos operacionais independentes e sem coordenação entre
    elas.

40. (PROF. DIEGO / INÉDITA – 2024) Data Stewardship é um termo que descreve a
    responsabilidade de gerenciar dados em nome de outros e garantir que esses dados sejam de
    alta qualidade e usados de forma eficaz.

41. (PROF. DIEGO / INÉDITA – 2024) As atividades de Data Stewardship incluem apenas a criação
    de metadados e não envolvem a resolução de problemas de qualidade de dados ou a execução
    de atividades operacionais de governança de dados.

42. (PROF. DIEGO / INÉDITA – 2024) As políticas de dados definem como as atividades de
    governança de dados devem ser executadas, detalhando o processo passo a passo.
                                                       ==219a34==

43. (PROF. DIEGO / INÉDITA – 2024) A avaliação de ativos de dados envolve entender e calcular o
    valor econômico dos dados para uma organização, considerando como esses dados são usados
    e o valor que trazem.

44.(PROF. DIEGO / INÉDITA – 2024) A Gestão de Dados Mestres (GDM) visa manter a qualidade
   dos dados mestres, garantindo que sejam precisos, consistentes e atualizados em toda a
   organização.

45. (PROF. DIEGO / INÉDITA – 2024) Um dos principais benefícios da Gestão de Dados Mestres é
    a criação de uma visão unificada e consistente dos dados em diferentes áreas da organização,
    como marketing, vendas e suporte ao cliente.

46.(PROF. DIEGO / INÉDITA – 2024) As plataformas de Gestão de Dados Mestres (MDM) não
   possuem funcionalidades de qualidade de dados e, portanto, não podem corrigir erros como
   duplicação de dados ou falhas de digitação.

47. (PROF. DIEGO / INÉDITA – 2024) Após consolidar e corrigir os dados em uma plataforma MDM,
    as informações corrigidas podem ser redistribuídas para os sistemas de origem, garantindo que
    toda a organização trabalhe com dados precisos e atualizados.

        Receita Federal (Analista Tributário) Fluência em Dados                               118
        www.estrategiaconcursos.com.br                                                        120

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                                               GABARITO
1. LETRA C                                                   25. CORRETO
2. LETRA C                                                   26. CORRETO
3. LETRA B                                                   27. ERRADO
4. ERRADO                                                    28. CORRETO
5. ERRADO                                                    29. ERRADO
6. LETRA A                                                   30. CORRETO
7. LETRA D                                                   31. CORRETO
8. CORRETO                                                   32. CORRETO
9. LETRA E                                                   33. ERRADO
10. LETRA D                                                  34. ERRADO
11. LETRA E                                                  35. CORRETO
12. LETRA A                                                  36. CORRETO
13. LETRA E                                                  37. ERRADO
14. LETRA A                                                  38. CORRETO
15. LETRA A                                                  39. ERRADO
16. ERRADO                                                   40. CORRETO
17. ERRADO                                                   41. ERRADO
18. ERRADO                                                   42. ERRADO
19. CORRETO                                                  43. CORRETO
20. CORRETO                                                  44.CORRETO
21. CORRETO                                                  45. CORRETO
22. ERRADO                                                   46.ERRADO
23. CORRETO                                                  47. CORRETO
24. ERRADO

       Receita Federal (Analista Tributário) Fluência em Dados                        119
       www.estrategiaconcursos.com.br                                                 120

                                   


---

---
