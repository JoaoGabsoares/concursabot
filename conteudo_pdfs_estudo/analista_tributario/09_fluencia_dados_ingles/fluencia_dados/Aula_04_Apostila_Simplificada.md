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
arquivo_origem: Aula 04_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '04'
titulo_aula: Fluência em Dados
artigos_citados:
- Art. 24.
- Art. 3º
- art. 198
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
                www.estrategiaconcursos.com.br                                                                                                                                           98

                                                             


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

Funcionários fluentes em dados podem transformar dados brutos em informações ,porque eles
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
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Antes de prosseguirmos, é importante mencionar uma visão ligeiramente diferente que o autor
Jordan Morrow traz em seu livro Be Data Literate: The Data Literacy Skills Everyone Needs to
Succeed. Ele afirma que a fluência de dados é a capacidade de falar e compreender a linguagem dos
dados; é essencialmente uma capacidade de se comunicar com e sobre os dados. No entanto, ele
diferencia Fluência de Dados (Data Fluency) e Alfabetização de Dados (Data Literacy).

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

           PILARES                                       DESCRIÇÃO
    ESTRATÉGIA DE As organizações podem ter uma ideia não realista sobre a implementação de estratégias de
 DADOS E ANALYTICS dados e analytics. Empresas normalmente investem em ferramentas, capacitação da equipe


        Receita Federal (Analista Tributário) Fluência em Dados                                          4
        www.estrategiaconcursos.com.br                                                                  98

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                   de dados, plataformas, mas muitas vezes não tem uma estratégia desenhada de como
                   alcançar sucesso com esses elementos. Essa estratégia deve apresentar como os dados
                   podem se tornar ação no futuro.

                 Um dos principais desafios da fluência em dados é a necessidade em explicar algoritmos de IA
                 (Inteligência Artificial) e os meios pelos quais o algoritmo chegou a determinado resultado.
CIÊNCIA DE DADOS Cientistas de Dados e colaboradores do negócio que trabalham com dados têm o desafio de
                 entender os modelos e seus resultados.

                 A área que ajuda a simplificar e dar visibilidade dos produtos de dados para os clientes é o
 VISUALIZAÇÃO DE mundo da visualização de dados. Todo conjunto de dados esconde uma história. O desafio é
                 utilizar as ferramentas de visualização de dados (Qlik, por exemplo) para apresentar qual
          DADOS história esses dados contam.

                 Executivos precisam ser fluentes em dados e fomentar que os colaboradores também sejam.
                 O programa de fluência em dados é um programa educacional e, como tal, ele precisa ter um
   EXECUTIVAS DE patrocinador; um patrocinador que possa tornar sua adoção e realização alinhada aos
                 objetivos estratégicos da empresa. Além disso, os executivos que utilizam os dados para
       EMPRESAS embasar suas decisões têm melhores resultados, se comparados a executivos que tomam
                 decisões baseadas em feeling ou em experiências pessoais do passado.

                  Se existe uma barreira para o sucesso na utilização dos dados e estratégias de analytics é a
                  cultura empresarial. Nós nos sentimos confortáveis em fazer coisas de forma conhecida.
                  Quando implementamos uma mudança em uma cultura, saímos da nossa zona de conforto. E
          CULTURA por isso tornar a cultura da empresa data driven requer o esforço de fazer com que os
                  colaboradores possam tomar decisões baseadas em dados, seja no âmbito operacional, tático
                  ou estratégico.

                 A qualidade de dados é imperativo para o sucesso de estratégias de analytics nas
                 organizações. Dados sem qualidade não podem gerar decisões confiáveis. Garbage In,
    QUALIDADE DE Garbage Out (GIGO) é uma expressão atribuída ao funcionário da IBM George Fuechsel que
          DADOS significa, "lixo entra, lixo sai". Se a informação não gera credibilidade, os colaboradores podem
                 se tornar resistentes à utilização dos produtos de dados disponibilizados.

                Um ambiente com governança gera confiança e segurança de que os dados podem ser
                utilizados de maneira ampla. Rotinas de cargas de dados, segurança e controle de acesso são
                essenciais para que o ambiente de dados esteja em conformidade com o cenário
  GOVERNANÇA DE organizacional. A fluência em dados se beneficia do processo de governança de dados, já que
         DADOS esta permite que saibamos o ciclo de vida que o dado percorre desde sua ingestão até o
                descarte, garante que os dados estejam atualizados tempestivamente e que o acesso só estará
                disponível àqueles que tem autorização para acessá-lo.

                A implementação da Lei Geral de Proteção de Dados (LGPD) veio para regular e proteger os
                dados dos indivíduos. As empresas se adequaram para tratar e proteger os dados que
                tramitam nas organizações. A fluência em dados ajuda a entender o ciclo de vida dos dados
        ÉTICA E (por onde o dado passa para cumprir a sua função), questionar se os dados estão corretos, se
REGULAMENTAÇÃO a empresa possui as devidas proteções em relação aos dados, dentre tantas outras
                possibilidades. A fluência em dados ainda nos ajuda a entender onde os dados estão sendo
                usados de forma ética e não-ética, dando às pessoas o conhecimento necessário para fazer
                esse tipo de avaliação.

      Receita Federal (Analista Tributário) Fluência em Dados                                                   5
      www.estrategiaconcursos.com.br                                                                           98

                                  


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

        Receita Federal (Analista Tributário) Fluência em Dados                                6
        www.estrategiaconcursos.com.br                                                        98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

       APLICAÇÕES                                                 descrição
                    A capacidade da empresa de entender os dados e traduzi-los em análises perspicazes deve
        TOMADA DE direcionar a organização para longe de fazer escolhas cegas ou tendenciosas. A fluência de
          DECISÕES dados suporta uma abordagem sistemática e baseada em metas durante todo o processo de
        INFORMADA tomada de decisão, garantindo assim que decisões objetivas e impactantes sejam tomadas.

                   Em uma organização imatura de dados, mais tempo e energia são gastos decodificando
      MELHORIA DA gráficos e tabelas, em vez de ter conversas significativas. Um dos obstáculos em tais
                   transformações reside na falta de comunicação e na incompreensão dos dados. Promover um
        EFICIÊNCIA ambiente fluente em dados permite que os indivíduos entendam e resolvam os problemas
                   rapidamente.
                   É difícil entender o progresso de uma empresa com dados incompletos ou ausentes.
          MELHOR Visualizações apropriadas e comunicação clara sobre as principais métricas ajudam a iluminar
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


        Receita Federal (Analista Tributário) Fluência em Dados                                              7
        www.estrategiaconcursos.com.br                                                                      98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

               NÍVEL                                              DESCRIÇÃO
                 São organizações que não fizeram investimentos para criar uma infraestrutura de coleta e
    Conhecimento análise de dados em tempo real. Como resultado, eles não possuem os dados necessários para
                 inteligência de negócios e fluência de dados de longo prazo.
       Rudimentar

                       São organizações que possuem a tecnologia e amplo acesso aos dados, mas não níveis de
                       conhecimento e habilidade necessários para explorar os dados completamente e usá-los para
    Alfabetização
                       a tomada de decisões importantes. Como essas empresas têm os meios para coletar e analisar
           básica      grandes quantidades de dados, elas estão em melhor posição para obter fluência de dados,
                       pois precisam apenas aprimorar as habilidades de seus funcionários nos diferentes níveis.
                       As organizações que se enquadram nesta categoria possuem habilidades analíticas de dados
                       impressionantes, mas o acesso aos dados é limitado a funcionários pertencentes
            Alto
                       exclusivamente a algumas funções. Como as organizações que se enquadram na segunda
    conhecimento       categoria, essas empresas também podem se considerar bem posicionadas para obter
                       fluência de dados.
                       Essas organizações atingem o equilíbrio ideal entre recursos analíticos de dados sofisticados e
                       uma infraestrutura robusta de coleta e análise de dados. Além disso, essas organizações têm
             Fluente
                       estratégias para manter sua cultura à prova de balas por vários anos. Essencialmente, as
            em dados   empresas precisam investir em tecnologia e qualificação para subir a escada no espectro da
                       fluência.


Framework

Em síntese, podemos afirmar que a fluência de dados é a habilidade de utilizar a linguagem dos
dados para trocar e explorar ideias que são importantes para uma organização de forma fluida. É
importante salientar que, embora enfatizemos as organizações, a fluência de dados também se

        Receita Federal (Analista Tributário) Fluência em Dados                                                      8
        www.estrategiaconcursos.com.br                                                                              98

                                      


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

aplica a indivíduos – todo mundo precisa de habilidades para ler, escrever, ouvir e falar utilizando a
linguagem dos dados. Para tal, existe um framework1 de fluência de dados!

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

1
 Framework é basicamente uma série de ações e estratégias que visam solucionar um problema bem específico. Assim, quando se deparam com
esse cenário, os profissionais recorrem a um conjunto pronto de abordagens e otimizam os seus resultados.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                   9
          www.estrategiaconcursos.com.br                                                                                           98

                                          


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

    Pergunta 1: De onde vêm os dados? Não simplesmente que banco de dados ou sistema. Em
     vez disso, que comportamento da vida real os dados refletem? Qual é o escopo e a
     granularidade dos dados? E o que os campos de dados realmente significam?

    Pergunta 2: O que posso aprender com os dados? As pessoas precisam aprender a
     interpretar gráficos, reconhecer o inesperado e contextualizar os dados por meio da
     comparação.

        Receita Federal (Analista Tributário) Fluência em Dados                                    10
        www.estrategiaconcursos.com.br                                                             98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

    Pergunta 3: O que posso fazer com ele? A capacidade de agir sobre os dados requer uma
     compreensão da validade e confiabilidade dos insights e ver como os insights se conectam
     às decisões disponíveis para você.

Produtores de Dados

Nem sempre, mas com muita frequência, os autores de comunicações de dados abandonam seu
papel. É comum em nosso trabalho nos depararmos com tabelas de dados brutos entregues como
“relatórios”; longas apresentações de PowerPoint com slide após slide de gráficos repetitivos; e
painéis densamente repletos de figuras coloridas. O que os autores estão realmente dizendo com
esses produtos de dados é:

      Não sei o que é importante nos dados.
      Não respeito o tempo e a atenção do meu público.
      Não sei como comunicar dados visualmente.
      Não sei se preciso comunicar significado.

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

        Receita Federal (Analista Tributário) Fluência em Dados                              11
        www.estrategiaconcursos.com.br                                                       98

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                   12
        www.estrategiaconcursos.com.br                                                            98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Os três elementos anteriores da estrutura concentram-se nas pessoas e nos comportamentos. Para
permitir o fluxo de informações e a criação e compartilhamento de produtos de dados, deve haver
processos, ferramentas e padrões em vigor. Considere o ecossistema que a Apple criou para
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


Atributos
                                                                                                INCIDÊNCIA EM PROVA: baixa


Galera, eu escarafunchei exaustivamente a (pouca) literatura sobre fluência de dados e não
encontrei absolutamente nada sobre atributos, mas achei uma página que trata do tema:

                             https://www.digitalfluency.guide/data/attributes-of-data

             atributos                                            descrição
                         Trata da utilidade de um conjunto de dados para os seus fins, isto é, quão relevantes são os
            relevância dados para os usos pretendidos.

        Receita Federal (Analista Tributário) Fluência em Dados                                                       13
        www.estrategiaconcursos.com.br                                                                                98

                                     


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 03

                       Trata da área geográfica que o conjunto de dados descreve, isto é, se os dados se aplicam
          Cobertura a apenas uma ou várias regiões geográficas.
                       Trata de quão abrangente é a amostra do conjunto de dados, isto é, quão amplo é o
          AMPLITUDE conjunto de dados, se se aplica a apenas um grupo demográfico, entre outros.
                       Trata da variedade e o número de pontos de dados diferentes no conjunto de dados, isto é,
      PROFUNDIDADE se o conjunto fornece muitos pontos de dados úteis ou apenas alguns.
                       Trata do custo de acesso e processamento dos dados, isto é, qual é o custo por unidade do
              Custo conjunto de dados.
                       Também chamado de comprimento ou duração, trata do alcance histórico do conjunto de
            História
                       dados (se houver), isto é, até quando para trás vai o conjunto de dados.
                       Trata do intervalo de tempo entre os pontos de dados, isto é, da frequência com que os
          Frequência   dados são atualizados.
                       Trata da quantidade de correção de erros e rotulagem executada no conjunto de dados
    processamento      antes da distribuição, isto é, quão processados são os dados, se houve correções, etc.
                       Trata do período de tempo entre a aquisição dos dados originais e a distribuição do
Tempo de publicação    conjunto de dados.
                       Trata do grau em que os atributos dos dados foram definidos e categorizados, isto é, quão
      estruturação
                       estruturado é o conjunto de dados.
                       Trata do custo de aquisição e verificação dos dados em sua forma original, isto é, o custo
  Custo de pesquisa
                       de aquisição, custo de atualização, entre outros.
                       Trata de quão precisos são os dados originais. Se houver erros, analisa-se se eles são críticos
          Qualidade
                       ou apenas uma necessidade de processamento.
                       Trata dos vieses replicados nos dados por fatores humanos e/ou de máquina, isto é, se
          tendência
                       existem vieses intencionais, não intencionais ou inerentes aos dados.
                       Trata da facilidade de acessar o conjunto de dados, isto é, quão amplamente disponíveis
     Disponibilidade
                       estão os dados, se eles podem ser obtidos facilmente, entre outros.
                       Trata de quão exclusivo o conjunto de dados é comparado a outros conjuntos de dados,
      Originalidade    isto é, quão original, nova, inovadora é a fonte.
                       Trata de quão avançadas são as ferramentas digitais necessárias para acessar e analisar os
          Tecnologia
                       dados, isto é, se são necessárias tecnologias especiais para acessar ou processar os dados.
                       Trata do comprimento, a amplitude e a profundidade dos dados de pré-visualização
               Trial   disponíveis para avaliação.
       Legalidade/     Trata da facilidade de acesso e uso dos dados em relação a restrições de lei,
              ética    regulamentação e padrões éticos.
        Portfolio/     Trata da porcentagem de casos de utilização que os dados se aplicam, isto é, se dados são
    Ortogonalidade     úteis para diversas áreas ou apenas algumas.

Adequação ao tipo de Trata de quão bem adaptados seus dados estão ao tipo de investimento que você pode
                     fazer, isto é, se os dados são adequados para os tipos de investimento que você está
      investimento considerando.
Frequência de tempo Trata do grau em que a frequência de dados se alinha com a frequência de investimento
                    pretendida. Se você estiver usando dados para orientar as decisões de investimento em um
   da Estratégia de
                    cronograma específico, os dados são atualizados regularmente o suficiente para serem de
      Investimento  valor para você?
                    Trata do custo de transformar os dados em informações úteis (diferente dos custos de
   Custo de análise processamento que precedem a análise).

      Receita Federal (Analista Tributário) Fluência em Dados                                                       14
      www.estrategiaconcursos.com.br                                                                                98

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Uma outra fonte traz um segundo conjunto (bem mais enxuto) de atributos de fluência de dados.
Vejam na tabela a seguir:

            atributos                                             descrição
             PRECISÃO   A precisão da análise de dados e insights.
        PONTUALIDADE    A capacidade de analisar dados rapidamente e obter insights.
       CONFIABILIDADE   A capacidade de produzir consistentemente resultados precisos.
          RELEVÂNCIA    A capacidade de identificar dados e tendências relevantes.
       ESCALABILIDADE   A capacidade de dimensionar processos de análise de dados.
      CUSTO/BENEFÍCIO   A capacidade de analisar dados de maneira econômica.
            QUALIDADE   A capacidade de produzir insights de dados de alta qualidade.
             VALIDADE   A capacidade de validar dados e insights.
           SEGURANÇA    A capacidade de proteger dados e proteger a privacidade
             ROBUSTEZ   A capacidade de se adaptar às mudanças nas fontes de dados.


Métricas
                                                                                         INCIDÊNCIA EM PROVA: baixa


Métricas são os valores que você usa para julgar o desempenho. Eles também são o ponto focal de
qualquer produto de dados, sendo o reflexo numérico do comportamento do mundo real que sua
organização deseja melhorar, evitar ou moldar. As métricas podem criar foco e alinhamento em
uma organização, fornecendo clareza sobre como é a melhoria. As métricas também podem criar
comportamentos contra-intuitivos ou contrários aos objetivos organizacionais.

Apesar da importância de escolher as métricas certas, é comum não pensar muito sobre o que
medir. Erros comuns na escolha de métricas incluem: métricas simples demais, métricas complexas
demais, grande quantidade de métricas, métricas enganosas, entre outros. Para evitar essas

        Receita Federal (Analista Tributário) Fluência em Dados                                                15
        www.estrategiaconcursos.com.br                                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

armadilhas muito comuns e escolher a melhor métrica possível, podemos considerar a estrutura de
métricas apresentada na imagem anterior que equilibra quatro fatores ou dimensões.

Você consegue imaginar um jogo de basquete sem aro ou uma partida de tênis sem a marcação das
linhas? Na ausência de objetivos claros e de uma forma de medir o progresso, os esportes seriam
desorganizados. Isso também é verdade para organizações: na ausência de métricas de sucesso
organizacional claramente comunicadas, os funcionários não têm como saber se estão no caminho
certo, contribuindo de maneira significativa ou apenas perdendo o controle.

Para criar uma cultura de fluência de dados, os líderes devem estabelecer as principais métricas
organizacionais que orientam os esforços individuais e da organização, mas o que faz uma boa métrica?

Metas desalinhadas, comportamentos distorcidos e uma sensação equivocada de sucesso são
problemas causados pelo uso de métricas ruins em uma organização. Um exemplo comum é o
departamento de atendimento ao cliente que rastreia chamadas atendidas sem levar em
consideração a qualidade da experiência do chamador. E se a empresa atendeu a ligação depois de o
cliente esperar por uma hora? E se a empresa atendeu a ligação, mas não resolveu o problema?

O primeiro passo para estabelecer o que constitui uma boa métrica é entender o que você deseja
alcançar. As métricas podem servir a dois propósitos: identificar problemas e medir o desempenho.
Quando o objetivo é identificar problemas e apontar áreas de ineficiência e ineficácia operacional,
definir a métrica certa requer um pouco de trabalho, dado que necessita que se determine quais
evidências podem ser encontradas e como exatamente elas aparecem.

Quando o objetivo é medir o desempenho, as métricas de sucesso certas se concentram em
medidas que podem ser controladas e onde a melhoria na métrica é uma coisa inequivocamente
boa. Depois de ter clareza sobre a finalidade para a qual você usará determinada métrica, o próximo
passo é escolher uma boa métrica. Boas métricas incluem várias os fatores ou dimensões vistas na
página anterior. E o que são boas métricas?

    Boas métricas são     Cada métrica leva tempo e esforço para ser construída. Antes de escolher a métrica, vale a
   criadas a partir de    pena fazer perguntas à fonte de dados: os dados são coletados de forma a capturar com
                          precisão a realidade? Os dados são difíceis de coletar ou atrasados de forma a prejudicar
    dados acessíveis e
                          seu valor? Os consumidores encontrarão motivos para questionar a fonte de dados? Para
  confiáveis, fáceis de   que os resultados tenham validade e para que uma cultura de engajamento de dados surja
 coletar de uma fonte     em sua organização, os produtores de dados devem ter acesso a dados confiáveis.
            confiável
                          Para que as métricas identificadas por uma organização moldem a prática individual e
    Boas métricas são     coletiva, elas devem ser facilmente compreendidas, dando transparência de como foram
     transparentes e      desenvolvidas. Além disso, boas métricas são melhor expressas como um número ou
          geradas por     porcentagem. Os números também devem conter pelo menos uma unidade de medida que
             cálculos     caracterize a coisa que está sendo contada. As unidades de medida permitem que os
      compreensíveis      analistas de dados expressem consistentemente os resultados de um processo de medição.
                          O uso de duas medidas pode auxiliar nesse processo.

        Receita Federal (Analista Tributário) Fluência em Dados                                                   16
        www.estrategiaconcursos.com.br                                                                            98

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                     É imperativo em uma organização que todas as pessoas reconheçam o que as métricas
   Boas métricas têm significam e tenham certeza de que as métricas são geradas de forma consistente. Para
   uma interpretação facilitar isso, os líderes devem garantir que os processos de medição sejam claramente
                     documentados e que os funcionários compartilhem um conjunto comum de terminologia
 comum e são medidas para entender o significado das apresentações de dados.
 de forma consistente

                      Boas métricas têm significado para os membros de uma organização e sinalizam ações
    Boas métricas são específicas que podem ser tomadas. Elas lançam luz sobre uma parte de baixo desempenho
    contextualmente de uma organização, registram os resultados dos esforços de melhoria contínua ou
                      demonstram o valor de pessoas e processos específicos dentro da organização.
            específicas e
              acionáveis

    Exemplo de SETOR                                            Exemplo de MÉTRICA
                            Custo de transporte por quilômetro, tal como o total gasto dividido pela quantidade de km.
             transporte
                            Custo por metro quadrado, tal como o custo operacional total dividido pelo tamanho em
               Depósitos metro quadrado.
                            Custo de aquisição de clientes, tal como o custo de vendas/marketing dividido por novos
              Marketing clientes em um determinado período.
                            Taxa de conversão de um site, tal como a porcentagem de visitantes únicos do site que
            e-commerce fazem uma compra.
                            Receita média por usuário (receita total dividida pelo número total de usuários).
                internet


Legal! Agora como nós fazemos para utilizar as métricas para impulsionar a melhoria organizacional
como um todo? Vejamos...

 Escolha algumas poucas métricas-chave em qualquer nível: muitas organizações acabam
  com dezenas de métricas-chave. Na verdade, essas organizações normalmente não sabem em
  que focar. Líderes devem investir tempo e energia para socializar sua organização para um
  pequeno conjunto de métricas essenciais. O desafio é oferecer uma definição clara do que está
  sendo medido e demonstrar sua importância. de estabelecer um conjunto de três a cinco
  métricas, incorpore as métricas em reuniões e outros locais, dado que é saudável que essas
  métricas se tornem parte do vernáculo organizacional. Aos poucos, as pessoas vão se
  acostumando com as métricas e suas implicações sobre o negócio.

 Selecione as principais métricas que se alinham com a missão e a visão: uma transformação
  pode ocorrer nas organizações que aprendem no que focar. Com a consciência e a compreensão
  de um pequeno conjunto de métricas-chave, as pessoas começam a se perguntar quais metas
  estão associadas a essas métricas – é uma progressão natural. Tanto para as partes interessadas
  internas quanto externas, há um forte alinhamento entre missão, visão, metas e
  acompanhamento do progresso da organização. Os esforços de todos podem ser direcionados

        Receita Federal (Analista Tributário) Fluência em Dados                                                     17
        www.estrategiaconcursos.com.br                                                                              98

                                        


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   para essas metas mensuráveis, e as pessoas se concentrarão nos processos que podem impactar
   essas métricas.

 Mostre aos funcionários que suas contribuições são essenciais: líderes verdadeiramente
  excepcionais não apenas articulam metas organizacionais e identificam métricas para avaliar o
  progresso operacional, mas também podem ajudar os funcionários a entender como suas
  contribuições de trabalho são um componente essencial das metas e medidas de progresso mais
  amplas. As métricas devem ter uma conexão hierárquica que permita que a equipe de linha de
  frente veja como suas medidas se relacionam com as principais métricas de toda a organização.
  Na natureza, a forma segue a função e temos inúmeros exemplos de alinhamento entre
  atributos físicos e condições ambientais. Da mesma forma, quanto mais os indivíduos tiverem
  uma linha de visão clara entre suas contribuições diárias e as prioridades da organização, mais
  capazes (e dispostos) estarão de tomar decisões inteligentes e comprometer sua energia de
  maneira a sustentar o desempenho organizacional geral.
                                                       ==219a34==

 Referenciar métricas-chave e análise de dados ao comunicar metas: líderes fluentes em
  dados lideram pelo exemplo. Da mesma forma, os líderes devem modelar a confiança na análise
  de dados e fazer referência às principais métricas ao comunicar metas e prioridades às partes
  interessadas. Para construir uma cultura fluente em dados, os líderes devem se comunicar na
  linguagem de suas métricas, usando dados para apoiar suas decisões sobre o progresso
  organizacional. Ao fazer isso, eles reforçam a importância das principais métricas selecionadas
  e demonstram sua alfabetização de dados em fóruns públicos, modelando assim os hábitos
  mentais desejados.

 Evitando as armadilhas das métricas: embora selecionar a métrica certa possa promover o
  sucesso, a métrica errada pode criar comportamentos inesperados, equivocados e
  contraproducentes. As métricas erradas podem criar estruturas de incentivo para
  comportamentos que realmente funcionam contra os objetivos da empresa. A maioria das
  empresas comete o erro de avaliar o desempenho (estabelecendo métricas de sucesso) ao longo
  das atividades funcionais. Isso perpetua silos disfuncionais e desconectados dentro de uma
  organização.

Ainda dentro desse contexto, devem-se considerar mais alguns pontos ao decidir sobre as métricas
adequadas:

 Tendências, distribuições e comparação: um número único e solitário muitas vezes não revela
  uma verdadeira compreensão do desempenho de uma organização. É necessário colocar um
  conceito em torno do valor para permitir que as pessoas tenham uma compreensão mais
  completa. Ao mostrar tendências, distribuição e comparação, você melhora a compreensão da
  métrica para o público. A tendência mostra se a métrica se aproxima ou se afasta de uma meta.
  As comparações com os benchmarks do setor mostram como sua organização se destaca em um
  contexto mais amplo. Por fim, divida o valor por diferentes dimensões (por exemplo, locais,
  produtos e segmentos de clientes) para revelar se um fator está sustentando ou diminuindo o
  valor da métrica.

        Receita Federal (Analista Tributário) Fluência em Dados                               18
        www.estrategiaconcursos.com.br                                                        98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

 Casos extremos: sempre haverá casos extremos, ou outliers, em que uma métrica pode não
  significar o que você pensa que significa. Vale a pena entender essas situações, mas você não
  deve permitir que o perfeito seja inimigo do bom. Como líder, você precisa pesar os benefícios
  de escolher métricas que funcionem para 90%, 95% ou 99% dos casos com os custos desses
  ganhos incrementais.

 Teste de responsabilidade: você poderia responsabilizar alguém por essa métrica sem que ela
  apresentasse uma dúzia de razões pelas quais isso não faz sentido? Caso contrário, talvez seja
  necessário reconsiderar a validade e o valor da métrica. Este exercício de pensamento simples é
  um bom teste do valor da métrica.

 Autoatendimento: tenha cuidado para não selecionar métricas simplesmente porque sabe que
  elas farão você parecer bom. Essas vitórias de curto prazo têm uma maneira de se transformar
  gradualmente em uma estratégia de longo prazo perdedora para a competitividade e o sucesso
  organizacional.

 Deixar ir: descartar uma métrica, especialmente dentro do contexto de uma organização
  grande, multifacetada e complexa, é uma coisa difícil de fazer. Existem alguns motivos para isso
  acontecer: (a) a métrica foi desenvolvida com muito esforço e alto custo; (b) Após o processo de
  coleta dos dados para as paradas métricas, ele só pode ser reiniciado com muito esforço e alto
  custo; e (c) pessoas mais altas na organização (que prestaram atenção à métrica pela última vez
  quando ela foi útil) podem procurá-la se algo der errado. No entanto, devemos deixar as
  métricas finalmente serem descartadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                19
        www.estrategiaconcursos.com.br                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                 GOVERNANÇA DE DADOS
Conceitos Básicos
                                                                                            INCIDÊNCIA EM PROVA: baixa

De acordo com a bíblia da Governança de Dados (DAMA – DMBOK2: Data Management Book of
Knowledge), temos que:

       A governança de dados é definida como o exercício de autoridade e controle (planejamento,
       monitoramento e execução) sobre o gerenciamento de ativos de dados. Todas as organizações
       tomam decisões sobre dados, independentemente de terem ou não uma função formal de
       governança de dados, porém aquelas que estabelecem um programa formal exercem
       autoridade e controle com maior intencionalidade, sendo mais capazes de aumentar o valor que
       obtêm de seus ativos de dados.

Já de acordo com Cartilha de Governança de Dados do Poder Executivo Federal, a definição de
Governança de Dados será:

       Governança de dados, para a administração pública brasileira, refere-se a um conjunto de
       princípios, políticas, padrões, métricas e responsabilidades que permitem o alinhamento da
       estratégia, processos, pessoas, uso de tecnologia e dados. Assim, visa estruturar e administrar
       os ativos de dados com o objetivo de fomentar, aprimorar e garantir a efetividade do uso dos
       dados para o desenvolvimento de políticas públicas e entrega de soluções e serviços ao cidadão.

  GOVERNANÇA provê direcionamento, monitoramento, supervisão e avaliação da prática da gestão, ou seja,
     DE DADOS estabelece as diretrizes e as políticas a serem seguidas pela Gestão de Dados.


    GESTÃO DE é inerente e integrada aos processos organizacionais, sendo responsável pelo planejamento,
       DADOS execução, controle e monitoramento. Enfim, pelo manejo dos recursos e poderes colocados à
                disposição de órgãos e entidades para a consecução de seus objetivos. De modo geral, a Gestão de
                Dados executa as políticas e diretrizes definidas pela Governança de Dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                                   20
        www.estrategiaconcursos.com.br                                                                            98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

O escopo e o foco de um determinado programa de governança de dados dependerão das
necessidades organizacionais, mas a maioria dos programas inclui os seguintes itens:

              ESCOPO/foco                                            DESCRIÇÃO
              ESTRATÉGIA Definir, comunicar e conduzir a execução da estratégia de dados e da estratégia de
                            governança de dados.

                POLÍTICAS Definição e aplicação de políticas relacionadas ao gerenciamento de dados e
                            metadados, acesso, uso, segurança e qualidade.

     PADRÕES E QUALIDADE Definição e aplicação de padrões de qualidade e arquitetura de dados.

              SUPERVISÃO Fornecer observação prática, auditoria e correção em áreas-chave de qualidade, política
                            e gerenciamento de dados (muitas vezes referido como administração).

            CONFORMIDADE Garantir que a organização possa atender aos requisitos de conformidade regulatória
                            relacionados a dados.

       GERENCIAMENTO DE Identificar, definir, escalar e resolver problemas relacionados à segurança de dados,
             PROBLEMAS acesso, qualidade de dados, conformidade regulatória, propriedade de dados, política,
                          padrões, terminologia ou procedimentos de governança de dados.
              PROJETOS DE Patrocinar esforços para melhorar as práticas de gerenciamento de dados.
 GERENCIAMENTO DE DADOS
   AVALIAÇÃO DE ATIVOS DE Estabelecer padrões e processos para definir consistentemente o valor comercial dos
                   DADOS ativos de dados.


Com a Governança de Dados é mais fácil apontar o caminho a ser seguido para cumprir com os
objetivos das políticas públicas e como alcançar os resultados desejados. Vejamos suas vantagens:

       PRINCIPAIS
                                                                  DESCRIÇÃO
       VANTAGENS

        Receita Federal (Analista Tributário) Fluência em Dados                                               21
        www.estrategiaconcursos.com.br                                                                        98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                  A regulação brasileira sobre proteção de dados pessoais tornou o assunto ainda mais latente,
  FORTALECIMENTO demostrando a necessidade crítica de cuidar dos dados dos cidadãos e proteger sua privacidade.
                  Assim, a Governança de Dados servirá para criar regras e ferramentas que protegem e prezam
  DA SEGURANÇA DE
                  pela qualidade dos dados, bem como ampliar as práticas de segurança utilizadas pelos órgãos.
            DADOS

                     Fazer Governança de Dados possibilita a construção de uma cultura de excelência operacional,
      AUMENTO DA     o que reflete diretamente na melhoria da consistência dos dados. Possibilitando ainda
                     redesenhar os processos de gestão de dados dentro de uma estratégia organizacional, para
        EFICIÊNCIA
                     melhoria contínua na oferta de serviços públicos e consecução das políticas oferecidas para o
   ORGANIZACIONAL    cidadão. Tornar equipes e processos mais eficientes proporciona a redução de custos
                     operacionais, podendo esses recursos serem redistribuídos para outras inciativas.
                     Para decisões baseadas em dados, é crucial garantir informações confiáveis, organizadas,
      MELHORIA NA    precisas e interpretáveis. Melhorar a eficiência operacional, processos e segurança dos dados
                     aumenta a confiança no ecossistema de dados governamentais, que inclui a administração
       TOMADA DE
                     pública, cidadãos, sociedade civil, academia, organizações internacionais, setor privado e
          DECISÃO    outros interessados. A Governança de Dados permite gestores visualizar e prever problemas,
                     oferecendo alternativas para soluções eficientes.
                     A não conformidade com dados organizacionais pode acarretar severas penalidades em setores
                     regulados como saúde, educação, produção, seguro e finanças, resultando em custos altos,
                     perda de produtividade, receita e interrupções. A Governança de Dados ajuda a identificar,
 REDUÇÃO DE RISCOS
                     mitigar e contornar esses riscos. É essencial para aumentar o uso e reuso de dados, garantir
                     acesso igualitário, proteger contra uso indevido e construir um sistema integrado de dados no
                     Brasil, melhorando a qualidade dos dados e a tomada de decisões baseadas em evidências.
                     O Brasil se destaca na inovação, competitividade e digitalização de serviços, superando países
                     vizinhos. A implementação de diretrizes de Governança de Dados pode potencializar esses
        FOMENTO A    aspectos, promovendo a democratização e o uso amplo de dados. Isso fomenta a inovação nos
         INOVAÇÃO    serviços públicos, permitindo alcançar resultados inéditos. Exemplos incluem o "Meu INSS",
                     carteiras digitais de trabalho e trânsito, o Pix e a plataforma Gov.br, todos derivados de
                     iniciativas baseadas em dados.


Para atingir os objetivos de governança de dados, um programa deve: desenvolver políticas e
procedimentos; cultivar práticas de administração de dados em todos os níveis; gerenciar
mudanças organizacionais, comunicando os benefícios da governança de dados. Adotar a
governança de dados formal requer suporte para mudanças organizacionais e patrocínio de
executivos que atuam como Curadores de Dados.

Eles são fundamentais para melhorar a qualidade dos dados e gerenciar os ativos de dados
conforme as necessidades do negócio.

A capacidade de criar e compartilhar dados transformou as interações pessoais e econômicas,
levando as organizações a realinhar responsabilidades de gerenciamento de dados. Setores
como financeiro, comércio eletrônico, governo e varejo estão se tornando mais orientados por
dados, integrando requisitos de dados no desenvolvimento de estratégias e implementação de
tecnologia, enfrentando desafios culturais significativos.

        Receita Federal (Analista Tributário) Fluência em Dados                                                  22
        www.estrategiaconcursos.com.br                                                                           98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Os esforços de governança de dados devem incluir a mudança cultural, apoiada por uma
liderança forte. A cultura organizacional deve valorizar os dados e as atividades de gerenciamento
de dados para que os planos de governança e gerenciamento sejam bem-sucedidos. A mudança
cultural é um grande desafio, exigindo mudança individual e formal de gerenciamento de
mudanças.

A conformidade regulatória, especialmente em setores como serviços financeiros e de saúde, é um
incentivador comum para a implantação da governança de dados. A evolução da legislação e a
explosão em análises avançadas e ciência de dados também são forças motrizes adicionais. A
governança de dados deve alinhar-se diretamente com a estratégia organizacional, sendo
impulsionada por necessidades de negócios e problemas de dados importantes.

Ela visa resolver problemas organizacionais, incentivando a mudança de comportamento e a
adoção de práticas de governança. Os direcionadores comuns para a implantação da governança
de dados incluem a redução de riscos – gerenciamento de riscos, segurança de dados e privacidade;
melhoria de processos – qualidade dos dados, gerenciamento de metadados, eficiência em
desenvolvimento de projetos e gestão de fornecedores.

Governança de dados pode ser entendida aplicando conceitos de outras governanças, como
auditoria ou contabilidade, onde se estabelecem regras para gerenciar ativos de dados. Para ser
eficaz, a governança de dados requer um programa contínuo, focado em obter valor dos dados
e reduzir riscos. É essencial que as funções e atividades de governança sejam bem compreendidas
e construídas em torno de uma estrutura operacional adequada à organização, considerando
questões organizacionais, culturais, desafios e oportunidades específicas.

Governança de dados é distinta da governança de tecnologia da informação, que toma decisões
sobre investimentos em TI, portfólio de aplicativos e projetos de TI. A governança de TI alinha
estratégias e investimentos com os objetivos da empresa. Já a governança de dados se concentra
exclusivamente no gerenciamento de ativos de dados. O framework COBIT fornece padrões para
governança de TI, mas aborda o gerenciamento de dados apenas marginalmente. Em contraste, a
governança de dados é dedicada ao gerenciamento de dados como ativos.

Por fim, o hexágono de fatores Ambientais mostra a relação entre pessoas, processos e
tecnologia e fornece uma chave para a leitura dos diagramas de contexto do DMBOK. Ele coloca
metas e princípios no centro, uma vez que fornecem orientação sobre como as pessoas devem
executar atividades e usar efetivamente as ferramentas necessárias para o gerenciamento de dados
bem-sucedido. Vejamos...

        Receita Federal (Analista Tributário) Fluência em Dados                                23
        www.estrategiaconcursos.com.br                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Princípios e Objetivos
                                                                                            INCIDÊNCIA EM PROVA: baixa


O objetivo da governança de dados é permitir que uma organização gerencie os dados como
um ativo. A governança de dados fornece os princípios, políticas, processos, frameworks, métricas
e supervisão para gerenciar os dados como um ativo e orientar as atividades de gerenciamento de
dados em todos os níveis. Para atingir esse objetivo geral, um programa de governança de dados
deve ser:

        CARACTERÍSTICA                                            DESCRIÇÃO
            Sustentável A governança de dados é um processo contínuo que requer compromisso da organização.
                        Exige mudanças na maneira como os dados são gerenciados e usados. Isso significa
                        gerenciar as mudanças de maneira sustentável, além da implementação inicial de qualquer
                        componente de controle de dados.
            incorporado A governança de dados não é um processo complementar. As atividades de governança
                        precisam ser incorporadas aos métodos de desenvolvimento de software, uso de dados
                        para análise, gerenciamento de dados mestre e gerenciamento de riscos.

                 medido A governança de dados bem implementada gera impactos positivos, mas demonstrar esse
                         impacto requer a compreensão do ponto de partida, do planejamento e definição de
                         indicadores que represente o quanto a governança de dados gera melhorias mensuráveis.

Ressaltamos que a implementação de um programa de governança de dados requer compromisso

        Receita Federal (Analista Tributário) Fluência em Dados                                                   24
        www.estrategiaconcursos.com.br                                                                            98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

com a mudança. Nesse sentido, desde o início dos anos 2000, princípios foram desenvolvidos para
favorecer o estabelecimento de uma base sólida para essas situações de empreendimento do
programa. São eles:

             princípios                                             DESCRIÇÃO
            LIDERANÇA E A governança de dados bem-sucedida começa com uma liderança visionária,
             ESTRATÉGIA comprometida e alinhada à estratégia de negócios da organização.
        Orientado aos A governança de dados é um programa de negócios que deve governar as decisões de TIC
             negócios relacionadas aos dados, assim como governa a interação dos negócios com os dados.
    Responsabilidade A governança de dados é uma responsabilidade compartilhada entre gestores de negócios
      compartilhada e profissionais de gerenciamento de dados.
         MULTICAMADA A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.


            Baseado em Como as atividades de governança de dados exigem coordenação entre áreas funcionais,
             estrutura o programa de governança de dados deve estabelecer uma estrutura operacional que
                        defina responsabilidades e interações.
            Baseado em Os princípios orientadores são a base das atividades de governança de dados e,
             princípios principalmente, da política de governança de dados.


Já Bergson Rêgo afirma que, quando falamos em governança de dados, nós precisamos ter em
mente também algumas ideias básicas. Vejamos...

    governança de
                                                                  DESCRIÇÃO
           dados
                    A governança de dados é a gestão de dados definida e aplicada nos altos níveis da empresa pelos
      É uma gestão executivos. Em suma, ela é a tomada de decisões a respeito de gestão de dados pela alta
    estratégica de administração. Tentar emplacar alguma iniciativa de governança de dados sem prever esta
             dados premissa é assinar a sentença de morte do programa. Iniciativas de governança de dados não
                   devem começar nem ser somente aplicadas nos níveis táticos e operacionais das empresas.
                   Este patrocínio deve ser constante em todo o programa. Claro que nas fases iniciais o patrocínio
                   se torna mais evidente por questões de estratégia de implantação e divulgação do programa,
 Requer patrocínio porém sempre deverá existir no decorrer do programa, sob pena das novas iniciativas não serem
                   totalmente adotadas devido a diversos fatores, desde os culturais (como resistência a
                   mudanças) até os financeiros, cuja falta impacta o andamento e a conclusão das iniciativas.
                   Veremos depois que a governança de dados funciona semelhante a um governo. Se fizermos
                   uma analogia, poderemos ter uma subdivisão em governança de dados legislativa, executiva e
     É um governo judiciária.


                 A governança de dados não pode simplesmente ser adotada através de um projeto. Segundo a
   É um programa definição, um projeto é um esforço temporário empreendido para criar um produto, serviço ou
                 resultado exclusivo. Os projetos são exclusivos (únicos), possuem tempo e orçamentos

        Receita Federal (Analista Tributário) Fluência em Dados                                                  25
        www.estrategiaconcursos.com.br                                                                           98

                                    


---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 03

                       limitados. Mesmo após um projeto inicial de implantação, para adotar a governança de dados
                       de forma efetiva, vários projetos serão necessários no decorrer do tempo.


As necessidades desses projetos serão definidas nas reuniões periódicas do Conselho de
Governança de Dados. Vale destacar que um dos objetivos da gestão de dados estratégica é a
melhoria contínua da qualidade dos dados e também dos processos de gestão adotados para
esses propósitos. Logo, enquanto houver uma governança de dados efetiva, haverá também
projetos de melhoria.


Interoperabilidade
                                                                                              INCIDÊNCIA EM PROVA: baixa


Trata-se da capacidade de sistemas (informatizados ou não) se comunicarem com outros sistemas,
por meio do compartilhamento de dados. Seu objetivo é melhorar a qualidade e a eficiência na
prestação de serviços públicos, além de facilitar a construção de políticas públicas baseadas em
evidências. Dentre seus benefícios, a execução de políticas públicas cada vez mais personalizadas
de acordo com a necessidade do cidadão, reduzindo custos e aumentando sua efetividade.

Os sistemas do governo conversam entre si e obtém as informações de maneira automática, sem
precisar solicitá-las ao cidadão. Isso é economia de dinheiro público. Vejamos algumas soluções:

▪ Conecta Gov.Br: programa que permite que o cidadão não tenha que reapresentar informações
  que o governo já possua. Essa iniciativa desonera o cidadão, simplifica o serviço público, reduz
  fraude e traz segurança e economia para todo o processo. O Conecta é uma iniciativa da
  Secretaria de Governo Digital para os órgãos e entidades do Poder Executivo Federal.

▪ Catálogo de APIs Governamentais: reúne as principais API disponíveis para órgãos públicos.
  API é uma tecnologia que permite um sistema "conversar" com outro sistema sem intervenção
  humana. Você pode acessar o catálogo, descubra as API disponíveis e faça uma adesão ao
  Conecta: é simples! O passo-a-passo está disponível na descrição de cada API.

De acordo com a Lei 14.129/2021, temos que:

Art. 3º São princípios e diretrizes do Governo Digital e da eficiência pública:

IX - atuação integrada entre os órgãos e as entidades envolvidos na prestação e no controle dos
serviços públicos, com o compartilhamento de dados pessoais em ambiente seguro quando for
indispensável para a prestação do serviço, nos termos da Lei nº 13.709, de 14 de agosto de 2018 (Lei
Geral de Proteção de Dados Pessoais), e, quando couber, com a transferência de sigilo, nos termos
do art. 198 da Lei nº 5.172, de 25 de outubro de 1966 (Código Tributário Nacional), e da Lei
Complementar nº 105, de 10 de janeiro de 2001;

...

Art. 24. Os órgãos e as entidades responsáveis pela prestação digital de serviços públicos deverão,
no âmbito de suas competências:


            Receita Federal (Analista Tributário) Fluência em Dados                                                 26
            www.estrategiaconcursos.com.br                                                                          98

                                        


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

IV - eliminar, inclusive por meio da interoperabilidade de dados, as exigências desnecessárias ao
usuário quanto à apresentação de informações e de documentos comprobatórios prescindíveis;


De acordo com o Decreto 10.046/2019, temos que:

Dispõe sobre a governança no compartilhamento de dados no âmbito da administração pública
federal e institui o Cadastro Base do Cidadão e o Comitê Central de Governança de Dados.


Privacidade e Segurança
                                                                                       INCIDÊNCIA EM PROVA: baixa


A Privacidade e Segurança da Informação no Governo Digital tem como ponto de partida o
Programa de Privacidade e Segurança da Informação (PPSI), o qual envolve um conjunto de
ações de adequação na temática, voltadas para melhoria no grau de maturidade e de resiliência dos
órgãos e das entidades integrantes do Sistema de Administração dos Recursos de Tecnologia da
Informação (SISP), da Administração Pública Federal.

O fortalecimento da privacidade e segurança da informação proporciona ainda aumentar o grau
de confiança do Cidadão no uso dos serviços públicos digitais. O PPSI caracteriza-se como um
conjunto de projetos e processos de adequação nas áreas de privacidade e segurança da informação
e tem como valores: a maturidade; a resiliência; a efetividade; a colaboração e a inteligência. Ele
eleva a maturidade e a resiliência dos órgãos e entidades.

Temos também o Centro de Excelência em Privacidade e Segurança (CEPS). Ele tem como
missão promover a cultura de privacidade e segurança da informação nos órgãos e entidades da
administração pública federal direta, autárquica e fundacional, que possuem unidades que
compõem o SISP. Seu objetivo é disseminar boas práticas em privacidade e segurança da
informação.

Além disso, busca promover parcerias com órgãos e entidades públicas, instituições privadas e
organismos internacionais, nos termos da legislação e fomentar e promover ações de
sensibilização, conscientização, capacitação e especialização dos recursos humanos. Temos
também o Centro Integrado de Segurança Cibernética do Governo Digital (CISC), que busca
promover a coordenação operacional das ações de prevenção, tratamento e resposta a incidentes.

        Receita Federal (Analista Tributário) Fluência em Dados                                              27
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Conceitos Fundamentais
                                                                                       INCIDÊNCIA EM PROVA: baixa


Assim como um auditor controla os processos financeiros, mas na verdade não executa o
gerenciamento financeiro, a governança de dados garante que os dados sejam gerenciados
adequadamente sem executar diretamente o gerenciamento de dados. Conforme mostra a
imagem seguinte (essa e outras foram retiradas do Curso de Governança de Dados da ENAP), a
governança de dados representa uma separação inerente de deveres entre supervisão e execução.

Organização Centrada em Dados

Para se tornar centrada em dados, uma organização deve valorizar e gerenciar os dados como
ativos em todas as fases do ciclo de vida, desde o desenvolvimento de projetos até as operações
contínuas. A qualidade dos dados deve ser uma meta central nos processos de negócios, e o
gerenciamento eficaz de dados deve ser uma prioridade. É fundamental diferenciar entre
gerenciamento de dados e tecnologia da informação.

Superar obstáculos culturais, como políticas internas, ambiguidade de propriedade, competição
orçamentária e sistemas legados, é crucial para estabelecer uma visão corporativa clara para a
governança de dados. Implementar uma governança de dados eficaz permite tomar decisões
baseadas em insights de análises, garantindo a alta qualidade dos dados e alinhamento com a
estratégia de negócios.

Essa mudança envolve tratar os dados como componentes essenciais dos processos de negócios,
não mais como subprodutos. Para isso, é necessário adotar uma abordagem estratégica e contínua
no gerenciamento de dados, alinhando-os com os objetivos empresariais.

Governança de Dados da Organização

A palavra central em governança é governar. A governança de dados pode ser entendida em termos
de governança política. Inclui funções do tipo legislativo (definição de políticas, padrões e a
arquitetura de dados corporativos), funções do tipo judicial (gerenciamento e escalonamento


        Receita Federal (Analista Tributário) Fluência em Dados                                              28
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

de problemas) e funções executivas (proteção e atendimento, responsabilidades
administrativas).

                                                       ==219a34==

Para melhor gerenciar o risco, a maioria das organizações adota uma forma representativa de
governança de dados, para que todas as partes interessadas possam ser ouvidas. Cada organização
deve adotar um modelo de governança que apoie sua estratégia de negócios e tenha probabilidade
de sucesso dentro de seu próprio contexto cultural. As organizações também devem estar
preparadas para evoluir esse modelo a fim de enfrentar novos desafios.

Os modelos diferem em relação à sua estrutura organizacional, nível de formalidade e abordagem
para a tomada de decisões. Alguns modelos são organizados centralmente, enquanto outros são
distribuídos. As organizações de governança de dados também podem ter várias camadas para
abordar preocupações em diferentes níveis dentro de uma empresa – local, divisional e em toda
a empresa.

        Receita Federal (Analista Tributário) Fluência em Dados                             29
        www.estrategiaconcursos.com.br                                                      98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

O trabalho de governança costuma ser dividido entre vários comitês, cada um com um
propósito e um nível de supervisão diferente dos outros. A imagem seguinte representa um
modelo genérico de governança de dados, com atividades em diferentes níveis dentro da
organização (eixo vertical), bem como separação de responsabilidades de governança dentro das
funções organizacionais e entre áreas técnicas (TI) e de negócios.

Tipos de Modelo Operacional de Governança de Dados

As opções organizacionais para governança de dados dependem da estrutura existente na
instituição, dos objetivos da governança de dados e da disposição cultural da organização para
centralização e colaboração. Nesse sentido, temos:

       TIPO DE MODELO                                     DESCRIÇÃO
        CENTRALIZADO Em um modelo centralizado, uma organização de governança de dados supervisiona todas
                        as atividades em todas as áreas de assuntos.
              REPLICADO Em um modelo replicado, o mesmo modelo operacional e padrões da governança de dados
            (COLEGIADO) são adotados por cada unidade de negócios.
           FEDERADO Em um modelo federado, uma organização de governança de dados coordena-se com
     (COMPARTILHADO) várias unidades de negócios para manter definições e padrões consistentes.

Data Stewardship


        Receita Federal (Analista Tributário) Fluência em Dados                                          30
        www.estrategiaconcursos.com.br                                                                   98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Data Stewardship é o rótulo mais comum para descrever a prestação de contas e a
responsabilidade por dados e processos que garantem o controle e o uso eficazes dos ativos de
dados. A administração pode ser formalizada por meio de cargos e descrições ou pode ser uma
função menos formal conduzida por pessoas que tentam ajudar uma organização a obter valor de
seus dados. Frequentemente, termos como custodiante ou curador são sinônimos para aqueles que
desempenham funções semelhantes às do administrador.

O foco das atividades de administração será diferente de organização para organização,
dependendo da estratégia organizacional, da cultura, dos problemas que uma organização
está tentando resolver, de seu nível de maturidade em gerenciamento de dados e da
formalidade de seu programa de administração. No entanto, na maioria dos casos, as atividades
de gerenciamento de dados se concentrarão em alguns, se não em todos os itens a seguir:

              atividades                                      DESCRIÇÃO
              Criação de Padronização, definição e gerenciamento de terminologia de negócios, valores de
       Gerenciamento de dados válidos e outros metadados críticos.
    Metadados Principais
 Documentação de Regras Definição/documentação de regras de negócios, padrões e regras de qualidade de
              e Padrões dados. As expectativas usadas para definir dados de alta qualidade são frequentemente
                           formuladas em termos de regras fundamentadas nos processos de negócios que criam
                           ou consomem dados.
      Gerenciamento de     Os organizadores geralmente estão envolvidos na identificação, priorização e resolução
 Problemas de Qualidade    de problemas relacionados a dados ou na facilitação do processo de resolução.

               de Dados
  Execução de Atividades   Os organizadores são responsáveis por garantir que as políticas e iniciativas de
         Operacionais de   governança de dados sejam cumpridas diariamente. Influenciam as decisões para
                           garantir que os dados sejam gerenciados de maneira a apoiar os objetivos gerais da
    Governança de Dados    organização.


Tipos de Data Stewardship

Um curador, custodiante, mordomo ou administrador de dados é uma pessoa cujo trabalho é
administrar a propriedade de outra pessoa. Data Stewards gerenciam ativos de dados em nome


        Receita Federal (Analista Tributário) Fluência em Dados                                                31
        www.estrategiaconcursos.com.br                                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

de outros e no melhor interesse da organização. Eles representam os interesses de todas as partes
interessadas e devem adotar uma perspectiva corporativa para garantir que os dados corporativos
sejam de alta qualidade e possam ser usados com eficácia.

Administradores de dados eficazes são responsáveis pelas atividades de governança de dados
e têm uma parte de seu tempo dedicada a essas atividades. Dependendo da complexidade da
organização e dos objetivos de seu programa de governança de dados, Data Stewards formalmente
nomeados podem ser diferenciados por seu lugar dentro de uma organização, pelo foco de seu
trabalho ou por ambos.

Exemplos: Chief Data Stewards, Executive Data Stewards, Enterprise Data Stewards, Business
Data Stewards, Data Owner, Technical Data Stewards e Coordinating Data Stewards.

Políticas de Dados

As políticas de dados são diretrizes que codificam os princípios e a intenção de gerenciamento em
regras fundamentais que regem a criação, aquisição, integridade, segurança, qualidade e uso de
dados e informações. As políticas de dados são globais. Elas suportam padrões de dados, bem
como comportamentos esperados relacionados aos principais aspectos do gerenciamento e
uso de dados.

As políticas de dados variam amplamente entre as organizações. As políticas de dados
descrevem o “o quê” da governança de dados (o que fazer e o que não fazer), enquanto os padrões
e procedimentos descrevem “como” fazer a governança de dados. Deve haver relativamente
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

        Receita Federal (Analista Tributário) Fluência em Dados                                32
        www.estrategiaconcursos.com.br                                                         98

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

surge quando o benefício econômico do uso de dados supera os custos de aquisição e
armazenamento, bem como o gerenciamento de riscos relacionados ao uso.

       Receita Federal (Analista Tributário) Fluência em Dados                        33
       www.estrategiaconcursos.com.br                                                 98

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Componentes de Governança
                                                                                       INCIDÊNCIA EM PROVA: baixa


A governança de dados é responsável por alinhar tecnologia, processos e pessoas para definir
papéis, responsabilidades e processos necessários para gerir os dados estratégicos da empresa.
A imagem seguinte baseada no livro de Bergson Rêgo nos mostra como a governança de dados
permite alinhar Pessoas (Ex: Profissionais de Tecnologia, Gestão de Dados e Negócio), Processos
(Ex: Governança, Financeiro, Administrativo, etc) e Ferramentas (Ex: SGBD, Metadados, etc).

Questões como: “Quais são os dados existentes? Quais são os dados estratégicos? Quais dados são
necessários? Quem possui acesso aos seguintes dados? Quem é o gestor de um determinado dado? O
que significa este conceito? Quando este dado foi criado? Quando poderá ser descartado? Onde ele
está? Onde ele é utilizado? Como ele é criado? Como consigo acessá-lo? Quanto custa a sua gestão?”
são respondidas quando a empresa possui um programa de governança de dados estabelecido.

Pessoas, processos e tecnologia devem atuar de forma integrada com o propósito de efetivar a
política e a estratégia de dados definidas para o programa de Governança de Dados. Vejamos...

Pessoas

As pessoas são os recursos humanos envolvidos direta ou indiretamente nas atividades de
Governança de Dados. São elas que executam ou são responsáveis pelas ações da Governança de
Dados. São representadas pelos profissionais de negócio (Executivos, profissionais de Gestão de
Dados ligados ao Negócio, gestores e usuários das informações) e também pelos profissionais de
tecnologia (gerentes, gestores de dados ligados à TI e demais técnicos).

        Receita Federal (Analista Tributário) Fluência em Dados                                              34
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

     Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
     Aula 03

O Programa de Governança de Dados deve prever, de forma constante, a conscientização e a
capacitação das pessoas nos objetivos do programa, nos processos executados e também nas
ferramentas utilizadas nas atividades.

Processos

Os processos definem a forma de trabalho e as “regras do jogo” da Governança de Dados na
empresa. Um processo define quem está fazendo o quê, quando e como, a fim de atingir certo
objetivo. Em Governança de Dados, os processos são divididos em duas grandes frentes. A primeira
representa os processos da área de negócios, que são aplicados quando os dados entram ou mudam
de status no seu ciclo de vida. Aqui a existência de uma Arquitetura de Dados que contemple a
execução desses processos é fundamental para o sucesso de qualquer programa de
governança.

A segunda frente representa os processos da própria área de Gestão de Dados, que são adotados
de forma comum em todas as atividades necessárias para garantir a governança dos dados,
independentemente das áreas onde os dados são (ou serão) utilizados. Esses processos devem
compor a metodologia de Gestão de Dados vigente. A existência de processos mapeados e
homologados em ambas as frentes é um requisito obrigatório para a adoção da Governança de
Dados nas empresas.

Tecnologia

Já a tecnologia é formada pelo hardware, com servidores e demais mecanismos de
infraestrutura hospedando as soluções de software e demais ferramentas que apoiam a
execução dos processos mapeados e executados pelas pessoas. Entre os principais softwares e
ferramentas podemos citar: SGBDs, ferramentas de modelagem de dados, repositórios de modelos
de dados, repositórios de metadados, ferramentas de gerenciamento de dados mestre,
ferramentas de qualidade de dados e ferramentas customizadas para apoiar as atividades.

Gestão de Dados Mestres (GDM)
                                                                                          INCIDÊNCIA EM PROVA: baixa


A Gestão de Dados Mestres (GDM)1 é uma abordagem disciplinada para gerenciar e manter os
dados essenciais de uma organização, garantindo sua precisão, consistência, e acessibilidade
em toda a empresa. Esses dados essenciais, conhecidos como dados mestres, geralmente incluem
informações essenciais sobre clientes, produtos, fornecedores, ativos e outros elementos
fundamentais que são usados por diversas partes da organização.

    Características de gdm                                            DESCRIÇÃO


1
    Também chamado de Master Data Management (MDM).

            Receita Federal (Analista Tributário) Fluência em Dados                                             35
            www.estrategiaconcursos.com.br                                                                      98

                                          


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

Quando a empresa não possui uma gestão efetiva desses conceitos, representados sob a ótica dos
dados, cada vez mais são criados silos de dados, gerando um número crescente de disparidades de
conceitos e valores nas aplicações da empresa e apresentando duplicações e representações
redundantes, muitas vezes diferentes, sobre os mesmos conceitos.

A Gestão de Dados Mestres e Referência procura eliminar essas disparidades e fornecer
mecanismos para eliminar a cultura “feudal” sobre o uso dos dados. Um dos mais importantes
princípios do MDM é que o dado não é de uso exclusivo de uma determinada área e sim de toda a
empresa.

Dados Mestres

        Receita Federal (Analista Tributário) Fluência em Dados                                              36
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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
exemplos podemos citar: cargos, unidades federativas, municípios, moedas, unidades de medida,
etc.

Os dados de referência não representam um papel primário nas transações que são processadas
pelas aplicações da empresa. Entretanto, eles conectam os dados da empresa às informações
mantidas por outras aplicações e até mesmo por outras empresas ou organizações. Como exemplo,
as tabelas de municípios e Unidades da Federação mantidas pelo IBGE. Vejamos uma tabela
adaptada de Rêgo (2013) que compara dados mestres e dados de referência sob alguns aspectos:

                     Dados mestres                                           Dados de referência
                                Muitas linhas por tabela Poucas linhas por tabela

                              Muitas colunas por tabela Poucas colunas por tabela

        Receita Federal (Analista Tributário) Fluência em Dados                                    37
        www.estrategiaconcursos.com.br                                                             98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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


Catálogo de Bases de Dados
                                                                                           INCIDÊNCIA EM PROVA: baixa


No contexto O Catálogo de Bases de Dados é pode ser definido como um padrão estabelecido
para organizar e disponibilizar as informações sobre os dados em posse do governo a fim de
que se tornem úteis para todos. Seu objetivo principal é permitir a descoberta para fomentar o
reúso de dados, estimulando a melhoria da prestação dos serviços públicos e privados e a inovação
no país.

Dentre seus principais benefícios, podemos dizer que ele busca identificar com clareza os dados que
existem do governo; estimular o uso e reuso dos dados; tornar os dados acessíveis ao público;
desenvolver novos produtos; e criar novas organizações ou novas abordagens de gestão. Não basta
reunir todas as informações sobre dados do governo em um só local. O mais importante é
garantir que esse acervo esteja padronizado.

Por isso o Catálogo de Bases de Dados (CBD) adotou o padrão DCAT-BR, o qual fornece uma
especificação comum para descrever conjuntos de dados do setor público brasileiro, permitindo a
troca de descrições de conjuntos de dados e aumentando a encontrabilidade e interoperabilidade
desses dados. E o que é o CBD? Ele consiste em uma base centralizada de informações a respeito
de bases de dados custodiadas pela administração pública federal.

O CBD permitirá que o governo identifique as bases de dados governamentais, suas características,
onde estão e quem são seus curadores. O projeto CBD tem o objetivo de classificar e organizar
ativos de dados da administração pública federal, através de metadados (informações de onde


        Receita Federal (Analista Tributário) Fluência em Dados                                                  38
        www.estrategiaconcursos.com.br                                                                           98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

estão os dados e suas características). Essa iniciativa aumenta a relevância do uso dos dados e a
sua reutilização, apoiando iniciativas de políticas públicas orientadas a dados.

        Receita Federal (Analista Tributário) Fluência em Dados                               39
        www.estrategiaconcursos.com.br                                                        98

                                    


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

O que podemos concluir? Podemos concluir que dados são fatos ou estatísticas coletadas para servir de
referência ou análise. O grande lance quando se pensa em dados é que eles não têm significado ou
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


        Receita Federal (Analista Tributário) Fluência em Dados                                                40
        www.estrategiaconcursos.com.br                                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

ser elaboradas ou obtidas. Além disso, eles são frequentemente quantificados, facilmente
estruturados, facilmente transferíveis e facilmente obtidos por máquinas.

Quando os dados são organizados, processados, relacionados, contextualizados, avaliados ou
interpretados, ele passa a ser uma informação, conforme veremos no tópico seguinte.

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

        Receita Federal (Analista Tributário) Fluência em Dados                                             41
        www.estrategiaconcursos.com.br                                                                      98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Note que, para cada linha dessa tabela, nós temos sempre as mesmas cinco colunas, com os mesmos
atributos e os atributos são sempre do mesmo tipo para cada coluna (Ex: Salário é sempre um Número;
Sexo é sempre uma Palavra; Naturalidade são sempre duas letras; entre outras). Viram como é rígido? E
tem mais: eu não consigo inserir um novo atributo na tabela sem antes modificá-la (Ex: CPF) – caso eu
queira inserir essa informação, devo adicionar uma coluna!

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

        Receita Federal (Analista Tributário) Fluência em Dados                                               42
        www.estrategiaconcursos.com.br                                                                        98

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

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

Por fim, é possível classificar os tipos de dados quanto à capacidade de terem suas estruturas descritas
implicitamente ou explicitamente. Vejamos:

▪    Dados Estruturados: possuem uma estrutura predefinida, logo ela pode ser descrita de forma
     explícita – você bate o olho e identifica um padrão definido;

▪    Dados Não-Estruturados: não possuem uma estrutura predefinida, logo ela não pode ser descrita
     (implícita ou explicitamente) – você bate o olho e não identifica um padrão definido;

▪    Dados Semiestruturados: possuem parte de sua estrutura predefinida, logo alguns dados podem
     ser descritos implicitamente – você bate o olho e consegue inferir um padrão nos dados.

          Receita Federal (Analista Tributário) Fluência em Dados                                    43
          www.estrategiaconcursos.com.br                                                             98

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Métricas de Dados
                                                                                       INCIDÊNCIA EM PROVA: BAIXA


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

        Receita Federal (Analista Tributário) Fluência em Dados                                               44
        www.estrategiaconcursos.com.br                                                                        98

                                    


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
                                                       ==219a34==

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
            SETOR                                                   EXEMPLO DE MÉTRICA


                        Custo de transporte por quilômetro, tal como o total gasto dividido pela quantidade de
      TRANSPORTE
                        km.

        Receita Federal (Analista Tributário) Fluência em Dados                                             45
        www.estrategiaconcursos.com.br                                                                      98

                                    


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


          Receita Federal (Analista Tributário) Fluência em Dados                                              46
          www.estrategiaconcursos.com.br                                                                       98

                                      


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

          Receita Federal (Analista Tributário) Fluência em Dados                                        47
          www.estrategiaconcursos.com.br                                                                 98

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Atributos de Dados
                                                                                       INCIDÊNCIA EM PROVA: BAIXA


Galera, eu escarafunchei exaustivamente a (pouca) literatura sobre fluência de dados e não encontrei
absolutamente nada sobre atributos, mas achei uma página que trata do tema:

               HTTPS://WWW.DIGITALFLUENCY.GUIDE/DATA/ATTRIBUTES-OF-DATA

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

        Receita Federal (Analista Tributário) Fluência em Dados                                                 48
        www.estrategiaconcursos.com.br                                                                          98

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                            49
        www.estrategiaconcursos.com.br                                                                     98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Transformação de Dados
                                                                                       INCIDÊNCIA EM PROVA: MÉDIA


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

No tratamento de dados ausentes (missing data), existem diferentes mecanismos que descrevem como e
por que os dados não estão presentes. Vejamos:

        Receita Federal (Analista Tributário) Fluência em Dados                                               50
        www.estrategiaconcursos.com.br                                                                        98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                           IMPLICAÇÕES PARA
     MECANISMO               DEFINIÇÃO                        EXEMPLO
                                                                                                  ANÁLISE
                        A ausência ocorre de                                             Métodos simples, como
                                                     Questionários perdidos pelo
   MCAR (Missing          forma totalmente                                                 exclusão de casos ou
                                                      correio, sem ligação com
   Completely At        aleatória, sem relação                                            imputação básica, não
                                                    idade, renda ou escolaridade
       Random)        com variáveis observadas                                         introduzem viés. É o cenário
                                                          dos participantes.
                         ou não observadas.                                                    mais “seguro”.
                                                          Pessoas com baixa                Tratável com técnicas
                      A ausência depende de
                                                     escolaridade não informam         estatísticas como imputação
 MAR (Missing At     variáveis observadas, mas
                                                    renda. A ausência depende            múltipla ou modelagem
       Random)        não da própria variável
                                                    da escolaridade (observada),           baseada em variáveis
                               faltante.
                                                         não da renda em si.                     auxiliares.
                      A ausência depende do          Pessoas com rendas muito          Cenário mais difícil: técnicas
  MNAR (Missing       próprio valor ausente ou      altas deixam de informar seu         padrão introduzem viés.
  Not At Random)          de variáveis não                     salário.                  Exige coleta adicional ou
                            observadas.                                                     modelos específicos.


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
DD/MM/AAAA, MM-DD-AAAA, ou até mesmo AAAA.MM.DD. Isso pode causar uma confusão na
integração de dados, pode causar erros de interpretação e problemas de compatibilidade.

Para resolver esse tipo de problema, podemos realizar uma padronização de formatos, utilizar bibliotecas
de parsing (decomposição) e estabelecer um conjunto de regras.

Redução de Dimensionalidade
É intuitivo pensar que, quanto maior a quantidade de objetos e atributos, mais informações estão
disponíveis para o algoritmo de mineração de dados. Entretanto, o aumento do número de objetos e da
dimensão do espaço (número de atributos/variáveis na base) pode fazer com que os dados disponíveis
se tornem esparsos e as medidas matemáticas usadas na análise tornem-se numericamente instáveis.

Além disso, uma quantidade muito grande de objetos e atributos pode tornar o processamento dos
algoritmos de aprendizado de máquina muito complexo, assim como os modelos gerados. O ideal é
utilizar técnicas de redução de dimensionalidade para reduzir a quantidade de atributos que descrevem
os objetos. Esse tema pode ser extremamente aprofundado, mas por aqui é suficiente saber apenas isso.

        Receita Federal (Analista Tributário) Fluência em Dados                                                     51
        www.estrategiaconcursos.com.br                                                                              98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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
numérica de dados com a normalização de bases de dados relacionais, que é um conceito totalmente
diferente visto dentro do contexto de bancos de dados.

Existe também a normalização por padronização – também conhecida como z-score ou padronização de
variáveis –, que é uma técnica de pré-processamento de dados aplicada a variáveis contínuas e tem como

        Receita Federal (Analista Tributário) Fluência em Dados                                          52
        www.estrategiaconcursos.com.br                                                                   98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

objetivo colocar essas variáveis em uma escala com média zero (0) e desvio padrão um (1). Isso significa
que, após a normalização, os dados terão uma média igual a zero e um desvio padrão igual a um.

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

Agregações
O tratamento de agregações é uma etapa fundamental no pré-processamento de dados, especialmente
no contexto de mineração de dados. Esse processo envolve a combinação de múltiplas informações em
uma única unidade para facilitar a análise e descobrir padrões relevantes. Existem várias técnicas de
agregação, cada uma com propósitos específicos, tais como: soma, média, mediana, moda, contagem,
mínimo, máximo, desvio padrão, variância, entre outros.

 AGREGAÇÃO                                                DESCRIÇÃO
      SOMA       Consiste em somar os valores de um conjunto de dados para obter um valor total. Por exemplo,
                 somar as vendas diárias para obter o total de vendas mensais.
       MÉDIA     Calcula a média aritmética dos valores de um conjunto de dados. É útil para obter um valor
                 representativo do conjunto, como a média de vendas diárias em um mês.
    MEDIANA      É o valor que divide um conjunto de dados ordenado em duas partes iguais. É usada para obter
                 uma medida central que não seja afetada por valores atípicos (outliers).

        Receita Federal (Analista Tributário) Fluência em Dados                                            53
        www.estrategiaconcursos.com.br                                                                     98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

       MODA      É o valor mais frequente em um conjunto de dados. Pode ser útil para identificar tendências ou
                 comportamentos predominantes.
  CONTAGEM       Conta o número de ocorrências de um valor ou o número total de valores em um conjunto de
                 dados. Por exemplo, contar o número de transações em um dia.
    MÍNIMO E
                 Determinam os valores mínimo e máximo em um conjunto de dados. São úteis para entender
     MÁXIMO
                 os limites dos dados.

      DESVIO
                 Mede a dispersão dos dados em relação à média. É importante para entender a variabilidade
     PADRÃO
                 dos dados.

   VARIÂNCIA     É o quadrado do desvio padrão e também mede a dispersão dos dados. É usada em análises
                 estatísticas mais complexas.

Dentre as vantagens do tratamento de agregações, temos: redução de volume de dados – ao agregar
dados, o volume total de dados é reduzido, o que pode melhorar o desempenho de sistemas de análise
e armazenamento; simplicidade – dados agregados são geralmente mais simples de analisar, facilitando
a identificação de padrões e tendências; eficiência – a agregação pode acelerar o processamento de
consultas em bancos de dados, tornando as análises mais rápidas e eficientes.

Dados Categóricos

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

        Receita Federal (Analista Tributário) Fluência em Dados                                              54
        www.estrategiaconcursos.com.br                                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

observação é “vermelho”, logo inserimos 1 (um) na coluna “vermelho” e 0 (zero) nas outras colunas; e
fazemos assim para cada uma das observações.

Note que essa operação é bidirecional: é possível sair do valor original para o one-hot enconding quanto
do one-hot encoding para o valor original. Dessa forma, não temos uma perda nem um acréscimo de
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

        Receita Federal (Analista Tributário) Fluência em Dados                                      55
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

        Receita Federal (Analista Tributário) Fluência em Dados                                    56
        www.estrategiaconcursos.com.br                                                             98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

Esse foi basicamente o tema de uma das questões da prova discursiva do TCU! Ele mostrava um caso em
que um classificador de peças boas ou defeituosas atingiu altíssima precisão. Ocorre que o modelo
basicamente que todas as peças eram boas e nenhuma peça era defeituosa – caso típico de
desbalanceamento de classes. Como o modelo tinha o objetivo principal justamente de indicar peças
defeituosas, ele fez um péssimo serviço!

Pedia-se também para dar exemplos de soluções, tais como oversampling, undersampling, atribuição de
pesos diferentes às classes, entre outras – tudo que acabamos de estudar!

Desidentificação de Dados Sensíveis
A desidentificação de dados sensíveis é uma técnica utilizada especialmente em cenários onde a
privacidade e a segurança dos dados pessoais são de suma importância. Esta técnica visa proteger a
identidade dos indivíduos, removendo ou modificando informações que possam ser usadas para
identificá-los diretamente ou indiretamente. Dentre as principais técnicas, temos: anonimização,
pseudonimização, mascaramento, tokenização, agregação, supressão, entre outros.

        Receita Federal (Analista Tributário) Fluência em Dados                                        57
        www.estrategiaconcursos.com.br                                                                 98

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

               TÉCNICAS                                            DESCRIÇÃO
                            Eliminar informações como nome, endereço, número de telefone, e outros
      ANONIMIZAÇÃO
                            identificadores diretos que possam revelar a identidade de uma pessoa. Modificar
                            dados específicos para que se tornem menos precisos, mas ainda úteis para análise.
                            Substituir identificadores diretos por pseudônimos ou códigos. Esses pseudônimos não
    PSEUDONIMIZAÇÃO         revelam a identidade real dos indivíduos sem acesso a uma tabela de correspondência
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

Viés de Seleção
O viés de seleção (também chamado de viés de amostragem) é um problema crítico que pode afetar a
validade das conclusões tiradas a partir da análise dos dados. Ele ocorre quando o conjunto de dados
utilizado para a análise não é representativo da população total ou quando há um processo sistemático
que favorece a inclusão de certas observações sobre outras. O viés de seleção acontece quando o
método de coleta ou amostragem dos dados introduz uma distorção nos resultados.

Este viés pode surgir de várias formas, como a exclusão não intencional de grupos específicos ou a
inclusão excessiva de certos dados devido a conveniências na coleta. Suas causas comuns são:

▪    Amostragem Não Aleatória: quando a seleção dos dados é feita de maneira não aleatória ou
     baseada em conveniência, e não reflete a diversidade ou composição da população-alvo.

▪    Perda de Dados: situações em que há perda de dados de certos grupos, como quando pesquisas
     online excluem automaticamente indivíduos sem acesso à internet.

▪    Autoseleção: quando a participação nos dados depende da vontade dos indivíduos, como em
     pesquisas voluntárias, que podem atrair apenas aqueles com um interesse particular no tema.

▪    Fatores Externos: mudanças no ambiente que afetam a coleta de dados, como eventos sazonais que
     influenciam o comportamento de compra dos consumidores.

O viés de seleção pode ter diversos impactos:

          Receita Federal (Analista Tributário) Fluência em Dados                                                58
          www.estrategiaconcursos.com.br                                                                         98

                                      


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 03

▪    Conclusões Errôneas: as análises baseadas em dados com viés de seleção podem levar a conclusões
     incorretas sobre tendências e padrões.

▪    Generalização Inválida: resultados podem não ser aplicáveis à população geral, limitando a utilidade
     prática das análises.

▪    Modelos Prejudicados: modelos treinados em dados enviesados podem apresentar desempenho
     ruim em novos dados.

          Receita Federal (Analista Tributário) Fluência em Dados                                     59
          www.estrategiaconcursos.com.br                                                              98

                                      


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


        Receita Federal (Analista Tributário) Fluência em Dados                                      60
        www.estrategiaconcursos.com.br                                                               98

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                      61
        www.estrategiaconcursos.com.br                                                               98

                                    


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
                                                       ==219a34==

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

        Receita Federal (Analista Tributário) Fluência em Dados                                      62
        www.estrategiaconcursos.com.br                                                               98

                                    


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

6. (FEPESE / ISS-Criciúma – 2022) Analise as afirmativas abaixo com relação a dado, informação
   e conhecimento no domínio subjetivo.

   1. Dados são estímulos sensoriais, que nós percebemos através dos nossos sentidos.
   2. Informação é, mais do que ser somente um estágio intermediário entre dado e conhecimento,
   um conhecimento empírico em si.
   3. Conhecimento é o significado desses estímulos sensoriais que nós percebemos através de
   nossos sentidos.

   a) É correta apenas a afirmativa 2.
   b) São corretas apenas as afirmativas 1 e 2.
   c) São corretas apenas as afirmativas 1 e 3.
   d) São corretas apenas as afirmativas 2 e 3.
   e) São corretas as afirmativas 1, 2 e 3.

Comentários:

O assunto de Teoria da Informação (Dado, Informação, Conhecimento e Inteligência) é abordado
em diversas áreas do conhecimento: Tecnologia da Informação, Comunicação, Filosofia,
Arquivologia, entre outros. Por conta disso, autores diferentes oferecem definições de acordo com
a sua área (Ex: um autor de livros de arquivologia dará uma definição mais voltada à sua área, assim
como ocorrem com outras áreas). E qual é o problema disso?

        Receita Federal (Analista Tributário) Fluência em Dados                                      63
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

O problema é que examinadores eventualmente trazem definições de outras áreas para provas da
área de tecnologia da informação. A prova trouxe definições de Chaim Zins, que é um autor de
Ciências da Informação (área mais próxima da filosofia do que da computação). De acordo com ele,
“Dados” são os estímulos sensoriais que percebemos por meio de nossos sentidos. “Informação” é
o significado destes estímulos sensoriais (por exemplo, a percepção empírica).

Em outras palavras, um ruído que ouçamos é considerado um dado; o significa desse ruído (por
exemplo, um motor ligado do carro) é considerado informação. Ainda de acordo com ele,
“Informação”, no domínio subjetivo, é conhecimento empírico. Sendo assim, no exemplo
mencionado, o conhecimento que o motor está em movimento é informação, pois ele está
empiricamente baseado.

Ainda: “Conhecimento”, no domínio subjetivo, como observado, é um pensamento na mente do
indivíduo, caracterizado pela crença justificável do indivíduo de que ele é verdade. Ele pode ser
empírico e não empírico, como no caso do conhecimento lógico e matemático (por exemplo, “todo
triangulo tem três lados”), conhecimento religioso (por exemplo, “Deus existe”), conhecimento
filosófico (por exemplo, “cogito, ergo sum”), e semelhantes.

Viram como é uma definição bastante filosófica dos conceitos? Pois é! Na minha opinião,
examinadores não deveriam trazer esse tipo de visão para provas de tecnologia da informação, uma
vez que destoam completamente do que estamos acostumados a ver. Enfim... infelizmente não
temos o que fazer. Quanto à questão, (1) e (2) estão corretas de acordo com o autor e (3) está errado
porque o autor afirma que isso seria a definição de Informação e, não, Conhecimento.

                                                                                       Gabarito: Letra B

7. (CESPE / Petrobrás - 2022) A inteligência é a informação que é expressa na forma de números,
   letras ou símbolos, os quais são os insumos dos gráficos.

Comentários:

Na verdade, esse é o conceito de um dado bruto. Os dados são coletados e servem de insumos para
os gráficos.

                                                                                       Gabarito: Errado

8. (CESPE / PCDF – 2021). Embora não haja conceitos únicos para dados e informação, é possível
   afirmar que os dados são matéria-prima para a informação.

Comentários:

Nada melhor do que a justificativa da própria banca: “Há muitos conceitos diferentes para dados,
informação e conhecimento. Entretanto, é comumente aceita a ideia de que os dados são matéria

        Receita Federal (Analista Tributário) Fluência em Dados                                      64
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

prima para conhecimento e informação. “Fatos desorganizados e não processados, números brutos,
figuras, imagens, palavras, sons, derivados de observações ou medições. Normalmente, os dados são
de natureza estática, um conjunto de fatos discretos e objetivos sobre eventos. Observa que dados não
são conhecimento. Os dados são a matéria-prima para a criação do conhecimento. Não há significado
inerente aos dados. Dados são matéria-prima para informação. Ao agregar valor, os dados são
transformados em informação, que tem significado, relevância e propósito”.

Perfeito! Basta lembrar Pirâmide DIKW: dados realmente são a matéria prima para informação –
dados brutos são processados para gerar informação.

                                                                                       Gabarito: Correto

9. (CESPE / STM – 2011) O modelo SECI (sensibilização, externalização, combinação e
   informação) representa modos de criação de conhecimento organizacional.

Comentários:

SECI é o acrônimo para Sensibilização Socialização, Externalização, Combinação e Informação
Internalização.

                                                                                       Gabarito: Errado

10. (FCC / TCE/RS – 2018) Os conceitos de dados, informação e conhecimento são de grande
    importância no contexto de sistemas de informação.

   Sobre eles, é correto afirmar que:

   a) não são necessários os dados para que se obtenha o conhecimento.
   b) a informação é obtida acrescentando-se significado aos dados.
   c) a informação é obtida a partir do conceito de conhecimento.
   d) o processo de tomada de decisão em um sistema de informação tem por base apenas os
   dados brutos.
   e) os dados consistem do conhecimento analisado sob diferentes pontos de vista.

Comentários:

(a) Errado, dados e informações são necessários para que se obtenha conhecimento; (b) Correto, a
informação realmente é obtida acrescentando-se significado aos dados; (c) Errado, a informação é
obtida a partir do conceito de dados; (d) Errado, não são apenas dados brutos, são também a partir
de informações; (e) Errado, o conhecimento consiste dos dados e informações analisados sob
diferentes pontos de vista.

                                                                                       Gabarito: Letra B

        Receita Federal (Analista Tributário) Fluência em Dados                                      65
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

11. (CESPE / Polícia Federal – 2018) A informação se caracteriza pela compreensão e internalização
    do conteúdo recebido, por meio do seu uso em nossas ações; o dado, por sua vez, é um elemento
    bruto dotado apenas de significado e relevância que visem fornecer uma solução para
    determinada situação de decisão.

Comentários:

Na verdade, é o conhecimento que se caracteriza pela compreensão e internalização do conteúdo
recebido, por meio do uso em nossas ações. Além disso, dados não possuem nenhum significado
que visem fornecer uma solução para determinada situação de decisão.

                                                                                       Gabarito: Errado

12. (CESPE / Polícia Federal – 2018) Informação é constituída por um conjunto de dados com
    características específicas. O ponto de análise é que os dados devem ser irrelevantes para o
    sistema a que se destinam.

Comentários:

Quando dados passam por algum tipo de relacionamento, avaliação, interpretação ou organização,
tem-se a geração de informação. Logo, informação é realmente constituída por um conjunto de
dados com características específicas, no entanto os dados são importantes e relevantes, visto que
eles são o fundamento para a geração de informação que os sistemas utilizam.

                                                                                       Gabarito: Errado

13. (CESPE / TCE/SC – 2018) Define-se informação como significado, ou seja, como registros
    icônicos e simbólicos — fonéticos ou numéricos — e signos — linguísticos, lógicos ou
    matemáticos —, por meio dos quais se representam atos, conceitos ou instruções.

Comentários:

A questão trata de dados e, não, de informação. Registros icônicos, simbólicos (fonéticos ou
numéricos) e signos (linguísticos, lógicos ou matemáticos) são simplesmente dados que não
possuem significado. Ao serem processados, eles adquirem significado e passam a ser informações.

                                                                                       Gabarito: Errado

14. (CESPE / DPU – 2010) Dados acerca de determinado assunto de interesse de uma ou mais
    pessoas, que possam ser interpretados ou tenham significado para o receptor, são
    considerados:

   a) aprendizagem organizacional.


        Receita Federal (Analista Tributário) Fluência em Dados                                     66
        www.estrategiaconcursos.com.br                                                              98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   b) conhecimento.
   c) capital intelectual.
   d) informação.
   e) sistema de gerenciamento.

Comentários:

Dados que possam ser interpretados ou que tenham um significado é o conceito básico de
informação.

                                                                                       Gabarito: Letra D

15. (FCC / TCE/RS – 2011) Com relação aos conceitos de dado e informação assinale a afirmação
    correta.

   a) Uma lista com a quantidade de produtos vendidos é uma informação.
   b) Um relatório sobre a produtividade dos funcionários é um dado.
   c) Produtividade da mão de obra de uma empresa é um dado.
   d) Custo da matéria prima é uma informação.
   e) A capacidade de produção é uma informação.

Comentários:

(a) Errado, isso é um dado, visto que não há processamento; (b) Errado, isso é uma informação, visto
que um relatório precisa ser processado; (c) Errado, isso é uma informação, visto que a
produtividade precisa ser derivada a partir de dados; (d) Errado, isso é um dado, visto que – em
princípio – não há processamento, mas é bem subjetivo; (e) Correto, isso é uma informação, visto
que a capacidade de produção precisa ser processada e derivada de outros dados.

                                                                                       Gabarito: Letra E

16. (COPEVE-UFAL / UFAL – 2014) Qual a denominação de um conjunto de dados devidamente
    ordenados e organizados de forma a terem significado?

   a) Dado
   b) Processamento
   c) Informação
   d) Memória
   e) Cluster

Comentários:

Dados ordenados e organizados de forma a terem significado é a definição de informação.


        Receita Federal (Analista Tributário) Fluência em Dados                                      67
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                       Gabarito: Letra C

17. (CESPE / CGE-PB – 2008) Informação é um conjunto de dados contextualizados que visam
    fornecer uma solução para determinada situação de decisão.

Comentários:

Informação é realmente um conjunto de dados contextualizados e processados para auxiliar na
tomada de decisão.
                                                                         Gabarito: Correto

18. (CESPE / Polícia Federal – 2018) O conceito de conhecimento é mais complexo que o de
    informação, pois conhecimento pressupõe um processo de compreensão e internalização das
    informações recebidas, possivelmente combinando-as.

Comentários:

Galera... que questão linda! Conhecimento é realmente mais complexo que informação porque
pressupõe que haja um processo de compreensão e internalização das informações recebidas –
vejam as palavras-chave: compreensão e internalização.

                                                                                       Gabarito: Correto

19. (CESPE / FUB – 2013) Conhecimentos estruturados encontram-se materializados em bens
    materiais tangíveis.

Comentários:

Conhecimento estruturado é também conhecido como conhecimento explícito e, de fato, se
materializa em bens materiais tangíveis.

                                                                                       Gabarito: Correto

20. (CESPE / EMAP – 2018) No que se refere à espiral do conhecimento, socialização,
    externalização, modelagem e feedback são os diferentes modos de conversão do
    conhecimento.

Comentários:

Modelagem e feedback não são modos de conversão.

                                                                                       Gabarito: Errado


        Receita Federal (Analista Tributário) Fluência em Dados                                      68
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

21. (FURMAR / PC-MG – 2013) Sobre conceitos e definições de dados e informações no contexto
    de Sistemas de Informação, analise as seguintes afirmativas:

   I. Dados se referem a uma descrição elementar de coisas, eventos, atividades e transações que
   são registrados, classificados e armazenados, mas não são organizados para transmitir
   significados específicos.

   II. Informação se refere a dados que foram organizados para terem significado e valor para o
   receptor, que interpreta o significado e elabora conclusões sobre a informação.

   III. Conhecimento consiste em informações organizadas para transmitir experiência,
   aprendizagem e prática aplicadas a um problema ou atividade empresarial.

   Estão CORRETAS as afirmativas:

   a) I, II e III.
   b) I e II, apenas.
   c) I e III, apenas.
   d) II e III, apenas.

Comentários:

(I) Correto. Dados, ou dados brutos, são as descrições básicas de produtos, clientes, eventos,
atividades e transações que são registradas, classificadas, armazenadas. Os dados são a matéria
prima a partir da qual as informações são produzidas. Exemplos disso são o número de horas que
um funcionário trabalhou em determinada semana ou o número de novos veículos que a Toyota
vendeu no primeiro trimestre de 2010; (II) Correto. Informação é um dado que já foi processado,
organizado ou colocado em contexto de forma a ter significado para a pessoa que recebe. Por
exemplo: o número de vendas trimestrais de novos veículos da Toyota de 2008 até 2010 é uma
informação, porque dará a ideia de como os recalls dos veículos de 2009 e 2010 causaram impacto
nas vendas; (III) Correto. Conhecimento é um dado e/ou uma informação que foi processado,
organizado e colocado em contexto para ter significado, e transmite um conhecimento,
experiência, aprendizado acumulado e especialização, já que se aplica a um problema ou atividade
atual. Saber como gerir o recall de veículos para minimizar os impactos negativos nas vendas é um
exemplo de conhecimento.

                                                                                       Gabarito: Letra A

22. (CESPE / EMAP – 2018) Em uma instituição, o conhecimento explícito está relacionado ao
    capital intangível.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      69
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

O conhecimento explícito está relacionado ao capital tangível.

                                                                                       Gabarito: Errado

23. (CESPE / EMAP – 2018) Na solução de problemas, o conhecimento tácito é associado ao
    conhecimento do expert.

Comentários:

O conhecimento tácito está realmente relacionado com o conhecimento do expert – aquele que
vem da experiência.

                                                                                       Gabarito: Correto

24. (CESPE / MPU – 2013) Desejando externalizar o conhecimento tácito que determinado
    colaborador detenha sobre a elaboração de estudos técnicos, por exemplo, a organização deve
    documentar esse conhecimento de modo que seja possível a outros colaboradores reproduzi-lo
    facilmente. Nesse tipo de situação, observa-se a conversão do conhecimento tácito em
    explícito.

Comentários:

Observem palavras-chave como externalizar, conhecimento tácito, documentar, reproduzir, entre
outros. A externalização converter conhecimento tácito em explícito por meio de estudos técnicos
documentados e fáceis de reproduzir (Ex: livro).

                                                                                       Gabarito: Correto

25. (CESPE / TC-DF – 2014) O conhecimento tácito é fruto de aprendizado e experiência de vida e
    é disseminado de maneira formalizada e declarada por meio de artigos e livros.

Comentários:

Questão polêmica! O conhecimento tácito é realmente fruto de aprendizado e experiência de vida,
mas ele não é facilmente disseminado ou reproduzido de maneira formalizada e documentada
como artigos e livros – sua reprodução é complexa. A questão não afirma que é fácil de ser
disseminado, então caberia recurso! De toda forma, é o conhecimento explícito que geralmente é
disseminado de maneira formalizada.

                                                                                       Gabarito: Errado

        Receita Federal (Analista Tributário) Fluência em Dados                                      70
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

26. (CESPE / MPU – 2013) Considerando-se a espiral do conhecimento, é correto afirmar que
    situações em que os colaboradores de uma organização convertem o conhecimento explícito
    em tácito correspondem à etapa denominada combinação.

Comentários:

Quando se passa de conhecimento explícito para tácito é chamado de internalização e, não,
combinação.

                                                                                       Gabarito: Errado

27. (CESPE / TCE-PA – 2016) O conhecimento tácito é pessoal, específico ao contexto e de difícil
    formulação e comunicação; o conhecimento explícito, por sua vez, é transmitido em linguagem
    formal e sistemática, propiciando ao indivíduo a apreensão de fatos.

Comentários:

O conhecimento tácito realmente é mais pessoal e específico de um contexto, sendo difícil de
formular, formalizar e comunicar; já o conhecimento explícito é transmitido em linguagem mais
formal, sistemática, estruturada e organizada, como livros, manuais, entre outros.

                                                                                       Gabarito: Correto

28. (CESPE / MEC – 2011) Considere que, em uma organização, os profissionais capazes de criar
    maquetes de prédios mostrem a seus aprendizes que, por meio da observação e imitação, eles
    obterão o conhecimento do assunto. Nessa situação, o processo de construção de
    conhecimento é realizado do conhecimento tácito para o explícito.

Comentários:

Trata-se de um caso em que profissionais mais experientes estão passando conhecimento para
aprendizes sobre um determinado assunto. Nesse caso, temos conhecimento tácito para tácito,
logo trata-se de uma socialização.

                                                                                       Gabarito: Errado

29. (CESPE / IFB – 2011) A transformação de informação em conhecimento envolve a realização de
    comparações e contrastes, a identificação de relacionamentos e a inferência de consequências
    e, portanto, é influenciada por especialização, experiência, valores e insights estruturados dos
    integrantes da equipe.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      71
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Perfeito, perfeito, perfeito! Nós vimos que ter informação é uma coisa e ter conhecimento é outra.
Para converter informação em conhecimento, é necessário comparar, contrastar, identificar
relações, inferir consequências, refletir, valorar e contextualizar. Para tudo isso, é necessário um
conjunto de habilidades de especialização, experiência, valores, insights, know-how, entre outros.

                                                                                       Gabarito: Correto

30. (CESPE / EBC – 2011) Ocorre internalização quando parte do conhecimento tácito de uma
    pessoa converte-se no conhecimento tácito de outrem, tal como ocorre na realização de
    atividades práticas sob a supervisão de tutores.

Comentários:

A conversão do conhecimento tácito para tácito é chamada de socialização e, não, internalização.

                                                                                       Gabarito: Errado

31. (CESPE / EBC – 2011) A socialização é a conversão de partes do conhecimento explícito da
    organização em conhecimento tácito do indivíduo.

Comentários:

A conversão de conhecimento explícito para tácito é chamada de internalização e, não,
socialização.

                                                                                       Gabarito: Errado

32. (CESPE / ANAC – 2012) Os modos de conversão do conhecimento tácito em explícito referem-
    se à socialização e à combinação.

Comentários:

A conversão de conhecimento tácito em explícito é chamada de externalização e, não, socialização
e combinação.

                                                                                       Gabarito: Errado

33. (CESPE / TCE/PE – 2017) A informação caracteriza-se por ser frequentemente tácita, bem como
    por ser de estruturação e captura difíceis em máquinas.

Comentários:

Quem é frequentemente tácito é o conhecimento e, não, a informação – que geralmente é explícita.


        Receita Federal (Analista Tributário) Fluência em Dados                                      72
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                       Gabarito: Errado

34. (CESPE / Polícia Federal – 2018) O atributo de inteligência depende mais da qualidade da
    informação disponível do que da sua quantidade, tendo, portanto, natureza qualitativa.

Comentários:

A inteligência é um atributo que realmente depende mais da qualidade da informação disponível
do que da sua quantidade – ao contrário dos dados, que dependem mais da quantidade do que da
qualidade em si.

                                                                                       Gabarito: Correto

35. (FCC / CNMP– 2015) Os Sistemas de Informação (SI) são construídos com Dados, Informação,
    Conhecimento e Inteligência. Sobre o tema, considere:

   I. Informação é coletada nos ambientes interno e externo e representa, por exemplo: fatos,
   textos, gráficos.

   II. A inteligência é realizada por meio de síntese, baseada em experiência e intuição, sendo uma
   habilidade humana.

   III. Conhecimento demanda análise e avaliação sobre a confiabilidade, relevância e importância
   de dados e informações para a construção de um quadro de situação.

   Está correto o que consta APENAS em:

   a) I e III.
   b) II.
   c) II e III.
   d) I.
   e) III.

Comentários:

(I) Errado, informação dados são coletados nos ambientes interno e externo e representam fatos,
textos, gráficos, etc; (II) Correto, dado é processado para se tornar informação, que é avaliada para
se tornar conhecimento, que é sintetizado para se tornar inteligência baseado em experiência,
intuição e complexidade; (III) Correto, para que informação se torne conhecimento, é necessário
considerar aspectos como confiabilidade, relevância e importância.

                                                                                       Gabarito: Letra C


         Receita Federal (Analista Tributário) Fluência em Dados                                     73
         www.estrategiaconcursos.com.br                                                              98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

36. (IESES / BAHIAGÁS – 2016) De acordo com Marcos Magalhães e Rafael Sampaio, página 81, “a
    tecnologia disponível, os sistemas, a miríade de programas e aplicativos hoje existentes
    alimentam o Sistema de Informações e Inteligência de Marketing (SIM) das organizações de
    qualquer porte com uma avalanche de informações provenientes de fontes variadas. Se, antes,
    o desafio era ‘obter informação’, - o que podia ser sistematizado de modo relativamente fácil –,
    a questão que se coloca hoje é conseguir organizar e analisar uma imensa quantidade de dados
    que chegam de todos os lados. Ou seja, o problema agora é ‘usar a informação’. Para entender
    melhor essa questão, é necessário adotar critérios para a compreensão de algumas definições e
    exemplos”. Para isto, é preciso distinguir a diferença entre Dados, Informação e Conhecimento.
    Desta forma, é correto afirmar:

   a) Conhecimento: são sequências de textos, fotos, figuras ou sons que podem ser manipulados
   e descritos.

   b) Informação relaciona-se à prática, à ação. Por exemplo: ‘A temperatura no interior do Rio
   Grande do Sul é de 18º Celsius e, nesta época do ano, deve provocar um aumento da colheita de
   soja naquela região’.

   c) Dados são sequências de símbolos (letras ou números), textos, fotos, figuras ou sons que
   podem ser descritos, armazenados e manipulados. Por exemplo: ’18º Celsius’.

   d) Conhecimento são dados contextualizados que também podem ser armazenados e
   manipulados.

   e) Representa um exemplo de ‘dados’: ‘A temperatura média deste mês, no interior do Rio
   Grande do Sul, é de 18º Celsius’.

Comentários:

(a) Errado, isso é dado; (b) Errado, isso é conhecimento; (c) Correto, mas eu discordo do gabarito!
Dados brutos não processados seria apenas 18 – quando a questão dá como exemplo 18º Celsius,
isso já é informação. No entanto, essa questão é a menos errada; (d) Errado, isso é informação; (e)
Errado, isso é informação.

                                                                                       Gabarito: Letra C

37. (CESPE / TCE-RJ – 2021) Um dado que está inserido em um contexto pode ser denominado de
    informação.

Comentários:

Perfeito! Um dado em um contexto é chamado de informação.

        Receita Federal (Analista Tributário) Fluência em Dados                                      74
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                       Gabarito: Correto

38. (CESPE / TCE-RJ – 2021) A informação pode ser facilmente obtida por meio de máquinas, além
    de ser transferível e frequentemente quantificável.

Comentários:

Opa... o enunciado descreveu características de dados e, não, de informações.

                                                                                       Gabarito: Errado

39. (CESPE / TCE-RJ – 2021) O conceito de inteligência está relacionado à capacidade de
    julgamento, ou seja, o ser humano usa o seu conhecimento para tomar a melhor decisão em
    uma situação real.

Comentários:

Perfeito! A inteligência realmente está associada à capacidade de julgamento, sendo uma
habilidade essencialmente humana para tomar a decisão mais eficiente em uma situação concreta.

                                                                                       Gabarito: Correto

40. (CESPE / Polícia Federal – 2021) Considerando-se a classificação dados, informação,
    conhecimento e inteligência, é correto afirmar que o gráfico representa, por si só, a inteligência.

Comentários:

Opa... o gráfico – por si só – representa informação e, não, inteligência!

                                                                                       Gabarito: Errado

41. (CESPE / Polícia Federal – 2021) O número 1.789 sozinho caracteriza uma informação,
    independentemente do contexto.

Comentários:


        Receita Federal (Analista Tributário) Fluência em Dados                                      75
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

Opa... o número 1.789 sozinho caracteriza apenas um dado!

                                                                                       Gabarito: Errado

42. (CESPE / Polícia Federal – 2018) Dados são fatos que descrevem os objetos de informação, por
    exemplo, eventos e entidades.

Comentários:

Dados realmente podem ser vistos como fatos que descrevem objetos de informação, isto é,
eventos, acontecimentos, entidades, podendo se referir a mais de um fato – trata-se de qualquer
registro ou indício relacionável a alguma entidade ou evento.

                                                                                       Gabarito: Correto

43. (CESPE / Polícia Federal – 2018) Na representação da informação, os atributos permitem que
    entidades e eventos possam ser reconhecidos, referidos e descritos. Um atributo relacional
    permite relacionar eventos e entidades.

Comentários:

Atributos são características que permitem que entidades e eventos sejam representados,
reconhecidos, referidos e descritos, sendo que um atributo relacional, de fato, permite relacionar
eventos e entidades.

                                                                                       Gabarito: Correto

        Receita Federal (Analista Tributário) Fluência em Dados                                      76
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

             QUESTÕES COMENTADAS – DIVERSAS BANCAS
1. (PROF.DIEGO / INÉDITA – 2023) Assinale a alternativa correta sobre o principal objetivo da
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

2. (PROF.DIEGO / INÉDITA – 2023) Qual das seguintes afirmações é verdadeira sobre governança
   de dados?

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

3. (PROF.DIEGO / INÉDITA – 2023) Assinale a alternativa que não representa a correta associação
   da descrição com o escopo/foco de um programa de governança de dados:

        Receita Federal (Analista Tributário) Fluência em Dados                                      77
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

Note que Padrões de Qualidade trata da definição e aplicação de padrões de qualidade e arquitetura
de dados; patrocinar esforços para melhorar as práticas de gerenciamento de dados está
relacionado a Projetos de Gerenciamento de Dados.


        Receita Federal (Analista Tributário) Fluência em Dados                                                 78
        www.estrategiaconcursos.com.br                                                                          98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

                                                                                       Gabarito: Letra E

4. (PROF.DIEGO / INÉDITA – 2023) Sobre governança de dados, assinale a alternativa incorreta.

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

5. (PROF.DIEGO / INÉDITA – 2023) A respeito de governança de dados, assinale a alternativa
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

        Receita Federal (Analista Tributário) Fluência em Dados                                      79
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

6. (PROF.DIEGO / INÉDITA – 2023) Sobre os princípios de governança de dados, assinale a
   alternativa incorreta.

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

Comentários:

Todas as alternativas estão corretas, exceto a alternativa (a). A governança de dados bem-sucedida
começa com uma liderança visionária, comprometida e alinhada à estratégia de negócios da
organização.

                                                                                       Gabarito: Letra A

7. (PROF.DIEGO / INÉDITA – 2023) Sobre os tipos de modelo operacional de governança de
   dados, assinale a alternativa correta.


        Receita Federal (Analista Tributário) Fluência em Dados                                      80
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

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

8. (FGV / SEFAZ-MG – 2023) Sobre o conceito de Governança de Dados (DAMA), assinale a
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

        Receita Federal (Analista Tributário) Fluência em Dados                                      81
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

(a) Correto. A governança de dados trata do exercício da autoridade, controle e tomada de decisão
compartilhada (planejamento, monitoramento e execução) sobre o gerenciamento de ativos de
dados. Nenhuma das outras alternativas trazem o conceito de governança de dados; (b) Errado,
essa é a função da arquitetura de dados; (c) Errado, essa é a função da segurança de dados; (d)
Errado, essa é a função do gerenciamento de dados; (e) Errado, essa é a função do gerenciamento
de dados mestres.

                                                                                       Gabarito: Letra A

9. (FGV / CGU – 2022) No âmbito do DAMA-DMBOK, com referência à Governança de Dados, a
   figura dos Data Stewards caracteriza-se como:

   a) etapas de testes de conformidade dos dados;
   b) instâncias de aprovação da arquitetura de dados;
                                                       ==219a34==

   c) instâncias de unidades organizacionais responsáveis pela estratégia de dados;
   d) responsáveis, dentro da área de negócios, pelo controle e uso dos dados;
   e) usuários que consomem dados dentro de uma organização.

Comentários:

Data Stewards são os responsáveis, dentro da área de negócios, pelo controle e uso dos dados. Um
curador, custodiante ou administrador de dados é uma pessoa cujo trabalho é administrar a
propriedade de outra pessoa. Data Stewards gerenciam ativos de dados em nome de outros e no
melhor interesse da organização. Eles representam os interesses de todas as partes interessadas e
devem adotar uma perspectiva corporativa para garantir que os dados corporativos sejam de alta
qualidade e possam ser usados com eficácia.

                                                                                       Gabarito: Letra D

10. (CESPE / BNB – 2022) O DAMA-DMBoK introduz a figura do mordomo de dados, indivíduo cujo
    trabalho é administrar a propriedade ou os dados de outra pessoa.

Comentários:

Um curador, custodiante, mordomo ou administrador de dados é uma pessoa cujo trabalho é
administrar a propriedade de outra pessoa. Data Stewards gerenciam ativos de dados em nome de
outros e no melhor interesse da organização. Eles representam os interesses de todas as partes
interessadas e devem adotar uma perspectiva corporativa para garantir que os dados corporativos
sejam de alta qualidade e possam ser usados com eficácia.

                                                                                       Gabarito: Correto

11. (CESPE / SERPRO – 2021) Em uma organização, foram elencadas as seguintes necessidades:


        Receita Federal (Analista Tributário) Fluência em Dados                                      82
        www.estrategiaconcursos.com.br                                                               98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   I identificar os data stewards como parte da governança de dados e do planejamento da gestão
   dos dados;
   II implementar a gestão de qualidade de dados e a gestão de arquitetura de dados;
   III gerenciar fatores ambientais tais como pessoas e tecnologias afetas à governança de dados.

   A partir da situação hipotética apresentada, julgue os itens a seguir, relativos à governança de
   dados.

   A implementação da gestão da necessidade III deve incluir a cultura organizacional e excluir os
   processos, uma vez que estes últimos não são abrangidos pelo DMBOK.

Comentários:

Conforme podemos ver no hexágono, é claro que os processos são abrangidos pelo DMBOK.

                                                                                       Gabarito: Errado

        Receita Federal (Analista Tributário) Fluência em Dados                                     83
        www.estrategiaconcursos.com.br                                                              98

                                    


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


        Receita Federal (Analista Tributário) Fluência em Dados                               84
        www.estrategiaconcursos.com.br                                                        98

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                 85
        www.estrategiaconcursos.com.br                                                          98

                                    


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

6. (FEPESE / ISS-Criciúma – 2022) Analise as afirmativas abaixo com relação a dado, informação
   e conhecimento no domínio subjetivo.

   1. Dados são estímulos sensoriais, que nós percebemos através dos nossos sentidos.
   2. Informação é, mais do que ser somente um estágio intermediário entre dado e conhecimento,
   um conhecimento empírico em si.
   3. Conhecimento é o significado desses estímulos sensoriais que nós percebemos através de
   nossos sentidos.

   a) É correta apenas a afirmativa 2.
   b) São corretas apenas as afirmativas 1 e 2.
   c) São corretas apenas as afirmativas 1 e 3.
   d) São corretas apenas as afirmativas 2 e 3.
   e) São corretas as afirmativas 1, 2 e 3.

7. (CESPE / Petrobrás - 2022) A inteligência é a informação que é expressa na forma de números,
   letras ou símbolos, os quais são os insumos dos gráficos.

8. (CESPE / PCDF – 2021). Embora não haja conceitos únicos para dados e informação, é possível
   afirmar que os dados são matéria-prima para a informação.

9. (CESPE / STM – 2011) O modelo SECI (sensibilização, externalização, combinação e
   informação) representa modos de criação de conhecimento organizacional.

10. (FCC / TCE/RS – 2018) Os conceitos de dados, informação e conhecimento são de grande
    importância no contexto de sistemas de informação.

        Receita Federal (Analista Tributário) Fluência em Dados                                86
        www.estrategiaconcursos.com.br                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   Sobre eles, é correto afirmar que:

   a) não são necessários os dados para que se obtenha o conhecimento.
   b) a informação é obtida acrescentando-se significado aos dados.
   c) a informação é obtida a partir do conceito de conhecimento.
   d) o processo de tomada de decisão em um sistema de informação tem por base apenas os
   dados brutos.
   e) os dados consistem do conhecimento analisado sob diferentes pontos de vista.

11. (CESPE / Polícia Federal – 2018) A informação se caracteriza pela compreensão e internalização
    do conteúdo recebido, por meio do seu uso em nossas ações; o dado, por sua vez, é um elemento
    bruto dotado apenas de significado e relevância que visem fornecer uma solução para
    determinada situação de decisão.

12. (CESPE / Polícia Federal – 2018) Informação é constituída por um conjunto de dados com
    características específicas. O ponto de análise é que os dados devem ser irrelevantes para o
    sistema a que se destinam.

13. (CESPE / TCE/SC – 2018) Define-se informação como significado, ou seja, como registros
    icônicos e simbólicos — fonéticos ou numéricos — e signos — linguísticos, lógicos ou
    matemáticos —, por meio dos quais se representam atos, conceitos ou instruções.

14. (CESPE / DPU – 2010) Dados acerca de determinado assunto de interesse de uma ou mais
    pessoas, que possam ser interpretados ou tenham significado para o receptor, são
    considerados:

   a) aprendizagem organizacional.
   b) conhecimento.
   c) capital intelectual.
   d) informação.
   e) sistema de gerenciamento.

15. (FCC / TCE/RS – 2011) Com relação aos conceitos de dado e informação assinale a afirmação
    correta.

   a) Uma lista com a quantidade de produtos vendidos é uma informação.
   b) Um relatório sobre a produtividade dos funcionários é um dado.
   c) Produtividade da mão de obra de uma empresa é um dado.
   d) Custo da matéria prima é uma informação.
   e) A capacidade de produção é uma informação.

16. (COPEVE-UFAL / UFAL – 2014) Qual a denominação de um conjunto de dados devidamente
    ordenados e organizados de forma a terem significado?

        Receita Federal (Analista Tributário) Fluência em Dados                                87
        www.estrategiaconcursos.com.br                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) Dado
   b) Processamento
   c) Informação
   d) Memória
   e) Cluster

17. (CESPE / CGE/PB – 2008) Informação é um conjunto de dados contextualizados que visam
    fornecer uma solução para determinada situação de decisão.

18. (CESPE / Polícia Federal – 2018) O conceito de conhecimento é mais complexo que o de
    informação, pois conhecimento pressupõe um processo de compreensão e internalização das
    informações recebidas, possivelmente combinando-as.

19. (CESPE / FUB – 2013) Conhecimentos estruturados encontram-se materializados em bens
    materiais tangíveis.

20. (CESPE / EMAP – 2018) No que se refere à espiral do conhecimento, socialização,
    externalização, modelagem e feedback são os diferentes modos de conversão do
    conhecimento.

21. (FURMAR / PC-MG – 2013) Sobre conceitos e definições de dados e informações no contexto
    de Sistemas de Informação, analise as seguintes afirmativas:

   I. Dados se referem a uma descrição elementar de coisas, eventos, atividades e transações que
   são registrados, classificados e armazenados, mas não são organizados para transmitir
   significados específicos.

   II. Informação se refere a dados que foram organizados para terem significado e valor para o
   receptor, que interpreta o significado e elabora conclusões sobre a informação.

   III. Conhecimento consiste em informações organizadas para transmitir experiência,
   aprendizagem e prática aplicadas a um problema ou atividade empresarial.

   Estão CORRETAS as afirmativas:

   a) I, II e III.
   b) I e II, apenas.
   c) I e III, apenas.
   d) II e III, apenas.

22. (CESPE / EMAP – 2018) Em uma instituição, o conhecimento explícito está relacionado ao
    capital intangível.

        Receita Federal (Analista Tributário) Fluência em Dados                              88
        www.estrategiaconcursos.com.br                                                       98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

23. (CESPE / EMAP – 2018) Na solução de problemas, o conhecimento tácito é associado ao
    conhecimento do expert.

24. (CESPE / MPU – 2013) Desejando externalizar o conhecimento tácito que determinado
    colaborador detenha sobre a elaboração de estudos técnicos, por exemplo, a organização deve
    documentar esse conhecimento de modo que seja possível a outros colaboradores reproduzi-lo
    facilmente. Nesse tipo de situação, observa-se a conversão do conhecimento tácito em
    explícito.

25. (CESPE / TC-DF – 2014) O conhecimento tácito é fruto de aprendizado e experiência de vida e
    é disseminado de maneira formalizada e declarada por meio de artigos e livros.

26. (CESPE / MPU – 2013) Considerando-se a espiral do conhecimento, é correto afirmar que
    situações em que os colaboradores de uma organização convertem o conhecimento explícito
    em tácito correspondem à etapa denominada combinação.

27. (CESPE / TCE-PA – 2016) O conhecimento tácito é pessoal, específico ao contexto e de difícil
    formulação e comunicação; o conhecimento explícito, por sua vez, é transmitido em linguagem
    formal e sistemática, propiciando ao indivíduo a apreensão de fatos.

28. (CESPE / MEC – 2011) Considere que, em uma organização, os profissionais capazes de criar
    maquetes de prédios mostrem a seus aprendizes que, por meio da observação e imitação, eles
    obterão o conhecimento do assunto. Nessa situação, o processo de construção de
    conhecimento é realizado do conhecimento tácito para o explícito.

29. (CESPE / IFB – 2011) A transformação de informação em conhecimento envolve a realização de
    comparações e contrastes, a identificação de relacionamentos e a inferência de consequências
    e, portanto, é influenciada por especialização, experiência, valores e insights estruturados dos
    integrantes da equipe.

30. (CESPE / EBC – 2011) Ocorre internalização quando parte do conhecimento tácito de uma
    pessoa converte-se no conhecimento tácito de outrem, tal como ocorre na realização de
    atividades práticas sob a supervisão de tutores.

31. (CESPE / EBC – 2011) A socialização é a conversão de partes do conhecimento explícito da
    organização em conhecimento tácito do indivíduo.

32. (CESPE / ANAC – 2012) Os modos de conversão do conhecimento tácito em explícito referem-
    se à socialização e à combinação.

33. (CESPE / TCE/PE – 2017) A informação caracteriza-se por ser frequentemente tácita, bem como
    por ser de estruturação e captura difíceis em máquinas.

        Receita Federal (Analista Tributário) Fluência em Dados                                  89
        www.estrategiaconcursos.com.br                                                           98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

34. (CESPE / Polícia Federal – 2018) O atributo de inteligência depende mais da qualidade da
    informação disponível do que da sua quantidade, tendo, portanto, natureza qualitativa.

35. (FCC / CNMP– 2015) Os Sistemas de Informação (SI) são construídos com Dados, Informação,
    Conhecimento e Inteligência. Sobre o tema, considere:

   I. Informação é coletada nos ambientes interno e externo e representa, por exemplo: fatos,
   textos, gráficos.

   II. A inteligência é realizada por meio de síntese, baseada em experiência e intuição, sendo uma
   habilidade humana.

   III. Conhecimento demanda análise e avaliação sobre a confiabilidade, relevância e importância
   de dados e informações para a construção de um quadro de situação.

   Está correto o que consta APENAS em:

   a) I e III.
   b) II.
   c) II e III.
   d) I.
   e) III.

36. (IESES / BAHIAGÁS – 2016) De acordo com Marcos Magalhães e Rafael Sampaio, página 81, “a
    tecnologia disponível, os sistemas, a miríade de programas e aplicativos hoje existentes
    alimentam o Sistema de Informações e Inteligência de Marketing (SIM) das organizações de
    qualquer porte com uma avalanche de informações provenientes de fontes variadas. Se, antes,
    o desafio era ‘obter informação’, - o que podia ser sistematizado de modo relativamente fácil –,
    a questão que se coloca hoje é conseguir organizar e analisar uma imensa quantidade de dados
    que chegam de todos os lados. Ou seja, o problema agora é ‘usar a informação’. Para entender
    melhor essa questão, é necessário adotar critérios para a compreensão de algumas definições e
    exemplos”. Para isto, é preciso distinguir a diferença entre Dados, Informação e Conhecimento.
    Desta forma, é correto afirmar:

   a) Conhecimento: são sequências de textos, fotos, figuras ou sons que podem ser manipulados
   e descritos.

   b) Informação relaciona-se à prática, à ação. Por exemplo: ‘A temperatura no interior do Rio
   Grande do Sul é de 18º Celsius e, nesta época do ano, deve provocar um aumento da colheita de
   soja naquela região’.

   c) Dados são sequências de símbolos (letras ou números), textos, fotos, figuras ou sons que
   podem ser descritos, armazenados e manipulados. Por exemplo: ’18º Celsius’.

         Receita Federal (Analista Tributário) Fluência em Dados                                 90
         www.estrategiaconcursos.com.br                                                          98

                                     


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   d) Conhecimento são dados contextualizados que também podem ser armazenados e
   manipulados.

   e) Representa um exemplo de ‘dados’: ‘A temperatura média deste mês, no interior do Rio
   Grande do Sul, é de 18º Celsius’.

37. (CESPE / TCE-RJ – 2021) Um dado que está inserido em um contexto pode ser denominado de
    informação.

38. (CESPE / TCE/RJ – 2021) A informação pode ser facilmente obtida por meio de máquinas, além
    de ser transferível e frequentemente quantificável.

39. (CESPE / TCE/RJ – 2021) O conceito de inteligência está relacionado à capacidade de
    julgamento, ou seja, o ser humano usa o seu conhecimento para tomar a melhor decisão em
                                                       ==219a34==

    uma situação real.

40. (CESPE / Polícia Federal – 2021) Considerando-se a classificação dados, informação,
    conhecimento e inteligência, é correto afirmar que o gráfico representa, por si só, a inteligência.

41. (CESPE / Polícia Federal – 2021) O número 1.789 sozinho caracteriza uma informação,
    independentemente do contexto.

42. (CESPE / Polícia Federal – 2018) Dados são fatos que descrevem os objetos de informação, por
    exemplo, eventos e entidades.

43. (CESPE / Polícia Federal – 2018) Na representação da informação, os atributos permitem que
    entidades e eventos possam ser reconhecidos, referidos e descritos. Um atributo relacional
    permite relacionar eventos e entidades.

        Receita Federal (Analista Tributário) Fluência em Dados                                     91
        www.estrategiaconcursos.com.br                                                              98

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                         GABARITO – DIVERSAS BANCAS
1. LETRA E                              41. ERRADO
2. LETRA C                              42. CORRETO
3. LETRA E                              43. CORRETO
4. LETRA D
5. LETRA B
6. LETRA B
7. ERRADO
8. CORRETO
9. ERRADO
10. LETRA B
11. ERRADO
12. ERRADO
13. ERRADO
14. LETRA D
15. LETRA E
16. LETRA C
17. CORRETO
18. CORRETO
19. CORRETO
20. ERRADO
21. LETRA A
22. ERRADO
23. CORRETO
24. CORRETO
25. ERRADO
26. ERRADO
27. CORRETO
28. ERRADO
29. CORRETO
30. ERRADO
31. ERRADO
32. ERRADO
33. ERRADO
34. CORRETO
35. LETRA C
36. LETRA C
37. CORRETO
38. ERRADO
39. CORRETO
40. ERRADO


       Receita Federal (Analista Tributário) Fluência em Dados                        92
       www.estrategiaconcursos.com.br                                                 98

                                   


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

             QUESTÕES COMENTADAS – DIVERSAS BANCAS
1. (PROF.DIEGO / INÉDITA – 2023) Assinale a alternativa correta sobre o principal objetivo da
   governança de dados?

   a) Criar novos ativos de dados.
   b) Automatizar processos de gerenciamento.
   c) Otimizar o uso dos ativos de dados.
   d) Gerenciar a privacidade dos dados.
   e) Exercer autoridade e controle sobre o gerenciamento de ativos de dados.

2. (PROF.DIEGO / INÉDITA – 2023) Qual das seguintes afirmações é verdadeira sobre governança
   de dados?

   a) Tem o mesmo sentido de gerenciamento de dados.
   b) É usada para garantir que os dados estejam disponíveis e acessíveis.
   c) Está fortemente associada às atividades de Administrador de Banco de Dados (DBAs).
   d) É usada para descrever os processos pelos quais as organizações tomam decisões sobre
   dados.
   e) A governança de dados está presente apenas no nível operacional e não o nível estratégico.

3. (PROF.DIEGO / INÉDITA – 2023) Assinale a alternativa que não representa a correta associação
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

4. (PROF.DIEGO / INÉDITA – 2023) Sobre governança de dados, assinale a alternativa incorreta.

   a) Em geral, o principal driver para implantação da governança de dados é a redução de riscos.


        Receita Federal (Analista Tributário) Fluência em Dados                                93
        www.estrategiaconcursos.com.br                                                         98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   b) Os esforços de governança de dados precisam incluir um componente de mudança cultural.
   c) Para que planos de governança de dados sejam exitosos, é necessário que a organização
   aceite e gerencie mudanças.
   d) A governança de dados requer um programa contínuo focado em garantir que uma
   organização obtenha valor de seus dados e reduza os riscos relacionados eles.
   e) A cultura organizacional pode inviabilizar a estratégia de governança de dados.

5. (PROF.DIEGO / INÉDITA – 2023) A respeito de governança de dados, assinale a alternativa
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

6. (PROF.DIEGO / INÉDITA – 2023) Sobre os princípios de governança de dados, assinale a
   alternativa incorreta.

   a) A governança de dados bem-sucedida começa com uma liderança visionária e comprometida,
   mas não é necessário que ela esteja alinhada à estratégia de negócios da organização.

   b) A governança de dados é uma responsabilidade compartilhada entre gestores de negócios e
   profissionais de gerenciamento de dados.

   c) Os princípios orientadores são a base das atividades de governança de dados e,
   principalmente, da política de governança de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                             94
        www.estrategiaconcursos.com.br                                                      98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   d) Como as atividades de governança de dados exigem coordenação entre áreas funcionais, o
   programa de governança de dados deve estabelecer uma estrutura operacional que defina
   responsabilidades e interações.

   e) A governança de dados atua nos níveis corporativo, local e nos níveis intermediários.

7. (PROF.DIEGO / INÉDITA – 2023) Sobre os tipos de modelo operacional de governança de
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

8. (FGV / SEFAZ-MG – 2023) Sobre o conceito de Governança de Dados (DAMA), assinale a
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

9. (FGV / CGU – 2022) No âmbito do DAMA-DMBOK, com referência à Governança de Dados, a
   figura dos Data Stewards caracteriza-se como:

        Receita Federal (Analista Tributário) Fluência em Dados                                 95
        www.estrategiaconcursos.com.br                                                          98

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 03

   a) etapas de testes de conformidade dos dados;
   b) instâncias de aprovação da arquitetura de dados;
   c) instâncias de unidades organizacionais responsáveis pela estratégia de dados;
   d) responsáveis, dentro da área de negócios, pelo controle e uso dos dados;
   e) usuários que consomem dados dentro de uma organização.

10. (CESPE / BNB – 2022) O DAMA-DMBoK introduz a figura do mordomo de dados, indivíduo cujo
    trabalho é administrar a propriedade ou os dados de outra pessoa.

11. (CESPE / SERPRO – 2021) Em uma organização, foram elencadas as seguintes necessidades:

   I identificar os data stewards como parte da governança de dados e do planejamento da gestão
   dos dados;                                          ==219a34==

   II implementar a gestão de qualidade de dados e a gestão de arquitetura de dados;
   III gerenciar fatores ambientais tais como pessoas e tecnologias afetas à governança de dados.

   A partir da situação hipotética apresentada, julgue os itens a seguir, relativos à governança de
   dados.

   A implementação da gestão da necessidade III deve incluir a cultura organizacional e excluir os
   processos, uma vez que estes últimos não são abrangidos pelo DMBOK.

        Receita Federal (Analista Tributário) Fluência em Dados                                 96
        www.estrategiaconcursos.com.br                                                          98

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 03

                          GABARITO – DIVERSAS BANCAS
1. LETRA E
2. LETRA D
3. LETRA E
4. LETRA A
5. LETRA E
6. LETRA A
7. LETRA A
8. LETRA A
9. LETRA D
10. CORRETO
11. ERRADO

       Receita Federal (Analista Tributário) Fluência em Dados                        97
       www.estrategiaconcursos.com.br                                                 98

                                   


---

---
