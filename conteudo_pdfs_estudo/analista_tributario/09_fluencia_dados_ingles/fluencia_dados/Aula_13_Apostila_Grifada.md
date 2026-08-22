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
arquivo_origem: Aula 13_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '13'
titulo_aula: Índice
---

# Índice

Índice
1)  Análise de Informações - Big Data - Conceitos Básicos


)  Análise de Informações - Big Data - Premissas                                                                                                                                           16

3)  Análise de Informações - Big Data - Big Data Analytics                                                                                                                                  19
)  Análise de Informações - Big Data - Conceitos Avançados                                                                                                                                 23
..............................................................................................................................................................................................

)  Análise de Informações - Big Data - Resumo                                                                                                                                              60

6)  Questões Comentadas - Análise de Informações - Big Data - Multibancas                                                                                                                   74
..............................................................................................................................................................................................

)  Lista de Questões - Análise de Informações - Big Data - Multibancas                                                                                                                   108


---

                         APRESENTAÇÃO DA AULA
Fala, galera! O assunto da nossa aula de hoje é Big Data! Sim... as bancas começaram a cobrar esse
tema recentemente de forma até bastante frequente. Nós vamos estudar seu conceito, suas
premissas e algumas particularidades. Galera, considerando tudo que nós já estudamos
anteriormente, esse é um tema bem tranquilo e pequeno. Além disso, essa aula possui quase todos
os exercícios que já caíram sobre o tema, então tá sussa...

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


---

---

---

                                           BIG DATA
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: ALTA

Sabe aquele vídeo insuportável com um anúncio de visualizar um vídeo no Youtube? Ou quando você
está navegando pelo Facebook e aparece uma propaganda nos eu feed? Esses anúncios são ótimos
exemplos de como é utilizado o Big Data. Por diversas vezes, ele é escolhido especificamente para
você com base nos sites que você frequenta, sua idade aproximada, seu sexo, onde você mora, além
de um monte de outras variáveis.

Deixa eu contar uma historinha para vocês: vocês sabem qual é a maior e melhor banda de rock de
todos os tempos? Ora... para o bem da nossa relação, eu espero que vocês tenham respondido
Pink Floyd! Acertei??? Ela é a minha banda favorita, eu já ouvi todas as músicas, já li todos os livros,
possuo todos os discos e... tenho várias camisetas! Certo dia, estava eu fuçando em meu Instagram
quando apareceu o seguinte anúncio:

                                                            Galera, essa camisa diz: “Nunca subestime
                                                            um fã de Pink Floyd que tenha nascido em
                                                            outubro”. Eu pensei ingenuamente: “Meu
                                                            pai do céu, não é possível que eu esteja com
                                                            tanta sorte hoje!” Apareceu justamente no
                                                            meu feed do Instagram uma camiseta à
                                                            venda da minha banda favorita falando de
                                                            pessoas que nasceram em outubro e...

                                                                 vocês não vão acreditar, mas...

                                                                               sabe
                                                                                em
                                                                               qual
                                                                               mês
                                                                                eu
                                                                              nasci?

                                                                        EM OUTUBRO!!!

Eu sou retardado, não é? É claro que não havia coincidência alguma! O Instagram sabe meus dados
pessoais e conhece todos os meus interesses. Dessa forma, ele consegue direcionar melhor os
anúncios. Fim da história: eu quaaaase comprei a camiseta e depois passei dias me achando um
completo trouxa por pensar que era coincidência. Mané, né? Prosseguindo... os dados são parte
de um conjunto gigantesco de dados sobre você e outras pessoas.


---

Quase todas as vezes você clica (ou não clica) em um anúncio, dados são armazenados em
algum lugar. Toda vez que você assiste a um vídeo do Youtube – como as aulas do Estratégia
Concursos – são mantidos registros. Existem registros de todos os cliques de todas as pessoas que
já acessaram o Twitter, todos os likes e comentários de todas as fotos do Instagram, todas as
compras que você fez com seu cartão de crédito, todo filme assistido no Netflix e quanto tempo!

Com 7,5 bilhões de pessoas no planeta, muitos (mas muitos meeeeeesmo) dados são criados a cada
segundo. Basicamente, apenas de existir, você já estará criando dados – é tanto dado, mas
tanto dado que nós chamamos isso de Big Data. Galera, antes do surgimento de smartphones,
notebooks e computadores, era muito trabalhoso e demorado registrar medições e armazenar
dados. Aliás, nem existia uma preocupação de se armazenar dados sobre essas coisas.

Só existem dados climatológicos sobre a cidade de São Paulo a partir de 1961. Antes disso, não
havia nenhum registro oficial. Dados sobre o censo dos Estados Unidos – que ocorre a cada dez anos
– frequentemente demoravam justamente dez anos para ficar pronto. Dessa forma, se ele
começasse a ser medido em 1950, ele demoraria dez anos para terminar. Assim, as pessoas só
descobririam qual era o tamanho da população de 1950 em 1960 1!

O termo Big Data – na forma como o utilizamos hoje – surgiu na década de 1990! O autor, John
Mashey, usou o termo para descrever dados que são tão grandes e complexos que ferramentas para
trabalhar e interpretar dados simplesmente não davam conta do recado. Galera, seu telefone
registra a sua localização, registra os aplicativos que você usa e registra quanto tempo você os
usa, então todos os aplicativos que você usa coletam dados sobre você.

Eu vou me casar em breve e já estou olhando alguns eletrodomésticos! Por conta disso, eu não paro
de receber ofertas de geladeira, fogão e televisores em meu e-mail. Galera, a sociedade está criando
um mundo interconectado – às vezes chamado de Internet of Things (IoT) ou Internet das Coisas.
Considerem a rede de dispositivos inteligentes que coletam dados e podem potencialmente se
comunicar entre si, desde sua geladeira até seu carro, relógio, luzes, etc.

Vocês acreditam que já há cientistas que equipam algumas mudas de espinafre para poderem enviar e-
mails via wireless em determinados eventos? O grande lance do Big Data é que há muita coisa para
se discutir ainda, então vamos analisar um pequeno aspecto dele: Likes no Facebook! Por anos,
esses likes pareciam bem inúteis. Ninguém entra nas redes sociais para ver no que o amigo tem
dado like. Vocês concordam?

No entanto, essas informações são mais reveladoras do que você imagina! Em 2013, a PNAS
(Proceedings of National Academy of Sciences) publicou um estudo da Universidade de Cambridge
em que 58.000 usuários do Facebook participaram de uma pesquisa de personalidade em um

1
  Computadores ajudaram a reduzir o tempo necessário para coletar, resumir e armazenar dados. No entanto, quanto mais aumenta o poder dos
computadores de coletar e analisar dados, mais aumentam também... os próprios dados!


---

aplicativo. Em seguida, eles pediram permissão para ver os likes dos usuários. Eles descobriram
que traços e atributos individuais podem ser previstos com um alto grau de precisão!

Como, professor? Com base apenas em registros de likes! Olha que coisa interessante: likes em fotos
de raios e tempestades ou em postagens sobre ciência apontam para pessoas altamente
inteligentes; likes em postagens sobre rap e Lionel Messi apontam para homens heterossexuais.
Esta é uma minúscula peça do quebra-cabeça que pode lhe dar uma pequena noção sobre o que
é, na prática, o Big Data.

Se um pouquinho de informação sobre uma pessoa pode revelar muito, podemos imaginar o
que toneladas e toneladas de outros dados produzidos diariamente a cada dia podem fornecer.
Galera, vocês compreendem o poder disso? Durante as últimas eleições presidenciais americanas, a
campanha de Donald Trump escolheu grupos particulares de apoiadores de Hillary Clinton para ver
anúncios contra ela em mídias sociais, tentando torná-los menos propensos a votar nela.

Por outro lado, há uma boa chance de o Big Data impactar positivamente a sua vida. Ele pode
ser usado para criar um remédio personalizado, para prever quais jogadores de futebol uma equipe
deve contratar, e para criar carros sem motorista. Sabe quando você está perdido e precisa utilizar o
Google Maps? Pois é, você está consumindo e servido ao Big Data! Se você habilitar sua localização,
informações sobre local e velocidade são continuamente transferidas ao Google.

Essa informação por si só não é útil para alguém, mas inúmeras pessoas ao seu redor também
estão usando o Google Maps. Então, o Google possui uma tonelada de dados sobre onde as
pessoas estão e quão rápido elas estão se movendo. Como eles vêm trabalhando com esses dados
a algum tempo, eles conseguem prever como estará o trânsito de uma cidade com base em coisas
como: dia da semana, horários, feriados, entre outros dados.

Com essa quantidade massiva de dados, eles conseguem te dizer se há muito trânsito em uma rota
específica. Em 2013, o Google adquiriu o aplicativo Waze, que deu eles ainda mais dados para
trabalhar. Usuários do Waze informam o aplicativo sobre trânsito e acidentes e o Google Maps é
capaz de acessar essas informações também. Ademais, ele é capaz de manter o registro sobre o
seu histórico e te auxiliar de diversas maneiras.

                                              Hoje em dia, eu acho normal, mas eu me lembro da
                                              primeira vez que eu recebi uma notificação do Google
                                              me informando sobre o tempo até o meu trabalho. Eu
                                              acordei, tomei banho, escovei os dentes, desci para a
                                              garagem e assim que eu entrei no carro... o Google
                                              me enviou uma notificação informando que eu
                                              chegaria no trabalho em 15 minutos! Eu fiquei igual a
                                              esse bebê do meme ao lado... achando que havia
                                              um drone me vigiando!


---

Por fim, vamos falar sobre como a Netflix utiliza o Big Data para melhorar a sua experiência de
entretenimento. Quando você acessa a Netflix, ela te dá uma lista de recomendações 2 em sua
página inicial. Para dar essas recomendações, o algoritmo da Netflix aprende – a partir de infinitas
fontes de dados – se você gosta de filmes estrelados, por exemplo, por Matt Damon. Enfim, há
diversas informações que ela pode cruzar para te recomendar o filme ideal.

Uma das revelações mais interessantes trata do poster. Sabe aquelas imagens que aparecem na hora
que você vai escolher o filme? Pois é, muitas pessoas escolhem um filme simplesmente baseado
nessa imagem. Uma vez que o título e a imagem são a primeira exposição ao conteúdo, escolher
as imagens mais atrativas para pessoas específicas pode afetar na sua decisão de assistir um
filme ou não. Observem a imagem abaixo:

Há um filme chamado Good Will Hunting (em português, Gênio Indomável). Ele é interpretado por
Matt Damon e Robin Williams. Observem que há duas imagens diferentes para o mesmo filme!
No entanto, se você gosta mais de assistir filmes românticos, ele mostrará uma imagem do filme
com o Matt Damon beijando uma mulher; se você gosta mais de assistir filmes de comédia, ele
mostrará uma imagem do mesmo filme, porém com Robin Williams.


2
 O Sistema de Recomendações combina várias técnicas computacionais para selecionar itens personalizados com base nos interesses dos usuários
conforme o contexto em que estão inseridos, com o intuito de obter vantagem competitiva. As recomendações são cada vez mais otimizadas por
meio de técnicas de Inteligência Artificial, como Machine Learning.


---

De ambas as formas, ele consegue atrair a pessoa certa a assistir ao filme! Possuir uma quantidade
absurda de dados à disposição permite que a Netflix torne sua experiência melhor. Por meio do
Big Data, seria possível personalizar remédios com base no genoma de um paciente e prever qual
remédio terá menos efeitos colaterais ou até mesmo qual tratamento possui a menor probabilidade
de causar um ataque cardíaco.

Em suma: Big Data chegou para ficar e você está ajudando a criá-lo nesse instante ao ler essa aula!
Não existe uma definição singular sobre a terminologia Big Data. Vejamos algumas:

     Oxford English Big Data é um dado de grande tamanho, tipicamente ao nível que sua manipulação e
                    gerenciamento apresenta desafios significativos a logística.
         Dictionary
                         Big Data é o dado que excede a capacidade de processamento convencional dos sistemas de
       Dumbill e Edd bancos de dados.

            Mayer- Big Data é a habilidade da sociedade de aproveitar a informação por novas maneiras para
      Schönberger e produzir introspecção úteis ou bens e serviços de valor significante.
           Cukier’s
 International Data Big Data é uma nova geração de tecnologias e arquiteturas, projetadas economicamente
                    para extrair valor de volumes muito grandes e vastos de dados, permitindo alta velocidade
       Corporation de captura, descoberta e análise.
                   Big Data é o termo geral para a enorme quantidade de dados digitais coletados a partir de
 Kim, trimi e ji-hyong
                   todos os tipos de fontes.
                   Big Data denota um maior conjunto de dados ao longo do tempo, conjunto de dados estes
  Mahrt e scharkow que são grandes demais para serem manipulados por infraestruturas de armazenamento e
                   processamento regulares.
                   Big Data são dados demasiadamente volumosos ou muito desestruturados para serem
  DAVENPORT E KWON gerenciados e analisados através de meios tradicionais.

                         Big Data se refere ao conjunto de dados cujo tamanho está além da habilidade de
          DI MARTINO ferramentas típicas de banco de dados em capturer, gerenciar e analisar.

                     Big Data são conjuntos de dados que são tão grandes que se tornam difíceis de trabalhar com
              RAJESH o uso de ferramentas atualmente disponíveis.

     (Polícia Federal – 2018) Big data refere-se a uma nova geração de tecnologias e
     arquiteturas projetadas para processar volumes muito grandes e com grande variedade
     de dados, permitindo alta velocidade de captura, descoberta e análise.
     _______________________
     Comentários: ele realmente é um conceito que trata de tecnologias e arquiteturas projetadas para processar volumes muito
     grandes e com grande variedade de dados, permitindo alta velocidade de captura, descoberta e análise. Observem as palavras-
     chave: “processar volumes grandes”, “grande variedade”, “alta velocidade”, “descoberta” (Correto).


---

     (Polícia Federal – 2018) De maneira geral, big data não se refere apenas aos dados, mas
     também às soluções tecnológicas criadas para lidar com dados em volume, variedade e
     velocidade significativos.
     _______________________
     Comentários: perfeito... Big Data é um conceito que engloba tecnologias, ferramentas, arquiteturas e dados – os dados sem
     ferramentas para manipulá-los realmente são inúteis (Correto).

     (CREF/11 – 2014) Trata-se de uma infinidade de informações não estruturadas que, quando
     usadas com inteligência, se tornam uma arma poderosa para empresas tomarem decisões
     cada vez melhores. As soluções tecnológicas que trabalham com esse conceito permitem
     analisar um enorme volume de dados de forma rápida e ainda oferecem total controle ao
     gestor das informações. E as fontes de dados são as mais diversas possíveis: de textos e
     fotos em rede sociais, passando por imagens e vídeos, até jogadas específicas no esporte e
     até tratamentos na medicina.

                                                                          (http://olhardigital. uol. com.br/pro/video/39376/39376)
     O conceito definido no texto é:

     a) Governança de TI     b) QoS.                          c) Big Data              d) Data Center.                e) ITIL.
     _______________________
     Comentários: infinidade de informações não estruturadas que podem ser utilizadas para tomada de decisões cada vez melhores
     é o Big Data (Letra C).

Trata-se de um termo amplo para conjuntos de dados muito grandes ou complexos que aplicativos
de processamento de dados tradicionais são insuficientes. Os desafios incluem análise, captura,
curadoria de dados, pesquisa, compartilhamento, armazenamento, transferência, visualização
e informações sobre privacidade. Esse termo – por vezes – se refere ao uso de análise preditiva e
outros métodos avançados para extrair valor de dados.

Por fim, minha definição favorita o define como a captura, gerenciamento e a análise de um grande
volume de dados estruturados ou não estruturados que não podem ser consultados e pesquisados
através de bancos de dados relacionais. Frequentemente são dados obtidos de arquivos não
estruturados como vídeo digital, imagens, dados de sensores, arquivos de logs e de qualquer
tipo de dados não contidos em registros típicos com campos que podem ser pesquisados.

     TIPOS DE DADOS DESCRIÇÃO
                        São dados que podem ser armazenados, acessados e processados em formato fixo e
             DADOS padronizado de acordo com alguma regra específica. Esta organização é geralmente feita
      ESTRUTURADOS por colunas e linhas (semelhante a planilhas do Excel), mas pode variar de acordo com a fonte
                    de dados. Exemplo: Planilhas Eletrônicas, Bancos de Dados Relacionais e CSV.
                    São dados estruturados que não estão de acordo com a estrutura formal dos modelos de
        DADOS SEMI- dados como em tabelas, mas que possuem marcadores para separar elementos semânticos
      ESTRUTURADOS e impor hierarquias de registros e campos dentro dos dados Exemplo: Dados de E-mail,
                    Arquivos XML, Arquivos JSON e Banco de Dados NoSQL.


---

                    São dados que apresentam formato ou estrutura desconhecidos, em que não se sabe extrair
         DADOS NÃO- de forma simples os valores desses dados em forma bruta. Exemplo: Documentos, Imagens,
      ESTRUTURADOS Vídeos, Arquivos de Texto, Posts em Redes Sociais.

     (EBSERH – 2018) As soluções de big data focalizam dados que já existem, descartam
     dados não estruturados e disponibilizam os dados estruturados.
     _______________________
     Comentários: Big Data é um termo que descreve o grande volume de dados – tanto estruturados quanto não-estruturados —
     que impactam as empresas diariamente (Errado).

De acordo com Mayer-Schonberger, com a informação, assim como na física, o tamanho
importa. Desse modo, ao combinar centenas de bilhões de termos de busca, o Google mostrou ser
capaz de identificar o surgimento de um surto de gripe quase tão bem quanto os dados oficiais com
base nos pacientes que visitam o médico – e pôde gerar uma resposta quase em tempo real, muito
mais rápido que as fontes oficiais.

Do mesmo modo, pode-se prever a volatilidade do preço de uma passagem de avião e, assim,
dar um poder econômico significativo para os consumidores. No entanto, ambos só conseguem
isso pela análise de centenas de bilhões de dados. Esses dois exemplos mostram o valor científico
do Big Data, assim como a medida em que eles podem se tornar fonte de valor econômico. Essa
quantidade massiva de dados tem influenciado áreas como saúde, governo, educação, etc.

Professor, onde esses dados são armazenados? Podem ser armazenados em um Data Warehouse ou
em um Data Lake (Lago de Dados). O Data Lake é um grande repositório capaz de armazenar
dados estruturados, semi-estruturados e não-estruturados, assim como um método para
organizar grandes volumes de dados de diversos formatos e de diversas fontes diferentes.
Professor, qual seria a diferença entre Data Warehouse e Data Lake?

                     DATA WAREHOUSE                                                       DATA LAKE
 Dados geralmente são tratados (limpos, combinados,             Dados geralmente são armazenados da maneira que
 organizados, etc) antes de serem armazenados.                  foram capturados – brutos, sem nenhum tratamento.
 Podem armazenar todos os tipos de dados, mas o foco            Armazenam dados estruturados, semi-estruturados e
 é nos dados estruturados.                                      não-estruturados.
 Ideal para usuários operacionais visto que as                  Ideal para cientistas de dados visto que as ferramentas
 ferramentas analíticas são mais fáceis de usar.                analíticas são mais difíceis de usar.
 Armazenamento de dados custam geralmente mais                  Armazenamento de dados custam geralmente mais
 caro e consome mais tempo.                                     barato e consome menos tempo.
 Um esquema é definido antes dos dados serem                    Um esquema é definido após os dados serem
 armazenados.                                                   armazenados.
 Armazenam um grande volume de dados.                           Armazenam um gigantesco volume de dados.


---

                                   ANTES QUE ME PERGUNTEM, A IMAGEM É UMA BRINCADEIRA! =)


     (TJ/RN – 2020) Big Data surgiu a partir da necessidade de manipular um grande volume
     de dados e, com isso, novos conceitos foram introduzidos, como o Data Lake, que:

     a) pode ser considerado um repositório de dados relacionados, sendo, portanto, um
     armazém de dados orientado por assunto.

     b) pode ser considerado um conjunto de bancos de dados relacionais e com
     relacionamentos entre tabelas de diferentes esquemas de bancos de dados.

     c) é o resultado de sucessivas operações de mineração de dados, sendo um ambiente no
     qual é possível ter relatórios e dashboards de maneira amigável para os analistas de
     negócio.

     d) é projetado para armazenar dados de diversas fontes e formatos, não havendo a
     necessidade da definição de um esquema de dados para inserir novos itens.
     _______________________
     Comentários: (a) Errado, os dados não precisam estar relacionados e, portanto, não é orientado por assunto; (b) Errado, não é
     um conjunto de dados relacionais e não precisa haver relacionamentos entre tabelas de diferentes esquemas – os dados são de
     diversos formatos e de diversas fontes; (c) Errado, não é o resultado de operações de mineração de dados – são dados brutos
     sem tratamento e da maneira que foram capturados; (d) Correto, ele realmente é projetado para armazenar dados de diversas
     fontes e formatos, não havendo a necessidade da definição de um esquema de dados para inserir novos itens (Letra D)

Antes de ver algumas curiosidades, eu acho bacana falar um pouco sobre a infraestrutura para
suportar Big Data! Sim, pessoal... eu falei que se trata de uma quantidade absurda de dados. Isso
implica a necessidade de uma infraestrutura também absurda. Professor, o que você quer dizer com
infraestrutura? Galera, eu me refiro ao conjunto de hardware, software e outras tecnologias
capazes de suportar serviços de TI (Ex: Servidor, Firewall, Rede, etc).


---

Hoje em dia, você pode utilizar serviços fornecidos pela computação em nuvem ou ter uma
infraestrutura própria. Para o primeiro caso, existem inúmeras possibilidades de negócio para
quem confia na combinação de Computação em Nuvem e Big Data! De forma geral, as empresas
utilizam o Big Data para se tornarem mais competitivas. Além disso, espera-se com esse uso algo
essencial para o sucesso: errar menos. E, quando inevitável, aprender com o erro.

                                                                      Ter um sistema de computação em nuvem é
                                                                      condição para se trabalhar bem com um grande
                                                                      volume de dados, uma vez que isso envolve
                                                                      coleta, armazenamento e compartilhamento
                                                                      de um número gigantesco de informações.
                                                                      Além disso, a constante necessidade de
                                                                      conhecer o resultado das ações de um
                                                                      negócio, muitas vezes, imediatamente, torna
                                                                      essa relação entre Cloud Computing e Big
                                                                      Data extremamente harmoniosa. Entendido?


     (TCU – 2015) Devido à quantidade de informações manipuladas, a (cloud computing)
     computação em nuvem torna-se inviável para soluções de big data.
     _______________________
     Comentários: na verdade, a computação em nuvem é a infraestrutura geralmente utilizada para suportar iniciativas de Big Data!
     Por que? Porque ela possui capacidade para processar grandes volumes de dados em tempo real. Big Data e Cloud Computing
     são praticamente indissociáveis quando o assunto é gerar vantagens competitivas para uma organização a partir das
     informações que ela possui disponíveis, seja internamente ou no mercado. A grande vantagem de associar Big Data à Cloud
     Computing é reduzir os custos de uma infraestrutura para armazenar e processar os dados (Errado).

Por fim, uma lista de curiosidades para que vocês entendam que quando falamos de grande volume
de dados, é realmente um grande... volume... de dados! Vejam só:


                                                    CURIOSIDADE 1
 A cada dois dias, a população mundial cria a mesma quantidade de dados criados do início da civilização humana
                                                   até 2003.

                                                    Curiosidade 2
 O Google processa em média mais de 40.000 buscas a cada segundo. Isso significa mais de 3,5 bilhões de buscas
                         por dia e 1,2 trilhão de buscas por ano em todo o mundo.

                                                    Curiosidade 3
  Os usuários do Facebook enviam em média 31,25 milhões de mensagens e visualizam 2,77 milhões de vídeos a
                                              cada minuto.


---

                                            Curiosidade 4
 Dados estão crescendo mais rápido do que nunca e, até o ano de 2020, cerca de 1,7 megabytes de novos dados
                       serão criados a cada segundo para cada ser humano no planeta.

                                            Curiosidade 5
 Até lá, nosso universo digital de dados crescerá de 4,4 zettabyets para cerca de 44 zettabytes, ou 44 trilhões de
                                                    gigabytes.

                                            Curiosidade 6
   Em agosto de 2015, mais de 1/6 da população mundial (mais de um bilhão de pessoas) usaram o Facebook.

                                            Curiosidade 7
 Estamos vendo um grande crescimento nos dados de vídeos e fotos, onde cada minuto até 300 horas de vídeo
                                     são enviados para o YouTube.

                                            Curiosidade 8
 Em 2015, foram tiradas 1 trilhão de fotos e bilhões delas foram compartilhadas online. Em 2017, quase 80% das
                                      fotos foram tiradas em smartphones.

                                            Curiosidade 9
Até 2020, teremos mais de 6,1 bilhões de usuários de smartphones no mundo e pelo menos um terço de todos os
                                          dados passarão pela nuvem.

                                           Curiosidade 10
Hoje em dia, menos de 0,5% de todos os dados criados no planeta são analisados e utilizados, portanto existe um
                                          grande potencial ocioso.


---

Podemos afirmar que a definição de Big Data pode ser quebrada em cinco dimensões, quais sejam:
Volume, Velocidade, Variedade, Veracidade e Valor1.

Big Data trata de uma grande quantidade de dados gerada a cada segundo. Pense em todos os
e-mails, mensagens de Twitter, fotos e vídeos que circulam na rede a cada instante. Não são
terabytes e, sim, zetabytes ou brontobytes. A tecnologia do Big Data serve exatamente para lidar
com esse volume massivo de dados, guardando-os em diferentes localidades e juntando-os através
de software.

Em outras palavras, nós podemos dizer que o volume de dados atualmente já é grande, mas a
tendência é que continue a crescer ainda mais nas próximas décadas. Dessa forma, é preciso
buscar ferramentas e formas de tratar esses dados de maneira que possam se converter – de fato –
em informação que seja útil para o crescimento e desenvolvimentos das organizações e, não
apenas, um grande volume de dados.

Refere-se à velocidade com que os dados são criados. São mensagens de redes sociais se
viralizando em segundos, transações de cartão de crédito sendo verificadas a cada instante ou os
milissegundos necessários para calcular o valor de compra e venda de ações. Quem tem Twitter aí?
Hoje em dia, informações surgem primeiro no Twitter! O Big Data serve para analisar os dados no
instante em que são criados, em tempo real, sem ter de armazená-los.


1
  O Big Data foi inicialmente conceituado a partir de três premissas básicas: Volume, Velocidade e Variedade (3 V’s). Atualmente, já há autores que
tratam de 10V’s (+Variabilidade, Validade, Vulnerabilidade, Volatilidade e Visualização), apesar de não cair em prova.


---

Não apenas o volume de dados é gigantesco, mas a velocidade em que esses dados são produzidos
(e se tornam desatualizados é vertiginosa). Justamente por isso o segundo desafio do Big Data é o
timing do processamento desses dados: para que possuam valor real e aplicabilidade no
mercado, é preciso utilizar os dados antes que se tornem desatualizados. O objetivo, portanto,
é alcançar formas de trabalhar o processamento dessas informações em tempo real.

No passado, a maior parte dos dados utilizados por organizações era estruturado e podia ser
facilmente armazenado em tabelas de bancos de dados relacionais. No entanto, a maioria dos
dados do mundo não se comporta dessa forma. Com o Big Data, mensagens, fotos, mídia social, e-
mail, vídeos e sons – que são dados não-estruturados – podem ser administrados juntamente com
dados tradicionais.

Os dados de que dispomos atualmente são provenientes das mais diversas fontes: redes sociais,
aplicativos, cookies, IoT, e-mails, etc. Isso significa que não seguem um único padrão e nem
fornecem todos o mesmo tipo de informações, tornando a tarefa de compilar esses dados em
um banco de dados tradicional inviável. É preciso desenvolver novas ferramentas de análise que
respondam à heterogeneidade dos dados.

Um dos pontos mais importantes de qualquer informação é que ela seja verdadeira. Com o Big
Data, não é possível controlar cada hashtag do Twitter ou notícia falsa na internet, mas com análises
e estatísticas de grandes volumes de dados é possível compensar as informações incorretas. Dentre
a massa de dados que circula, é preciso estabelecer quais os dados que são verídicos e que ainda
correspondem ao momento atual.

Dados desatualizados podem ser considerados inverídicos, mas não porque tenham sido
gerados com segundas intenções, mas porque não correspondem mais à realidade e podem
guiar uma empresa a decisões equivocadas. O desafio posto pelo Big Data é, então, determinar a
relevância dos dados disponíveis para uma empresa, de forma que essas informações possam servir
de guia para o seu planejamento com maior segurança.

O último V é o que torna Big Data relevante: tudo bem ter acesso a uma quantidade massiva de
informação a cada segundo, mas isso não adianta nada se não puder gerar valor algum para um
órgão ou uma empresa. É importante que organizações entrem no negócio do Big Data, mas é
sempre importante lembrar dos custos e benefícios, além de tentar agregar valor ao que se está
fazendo. Bacana?


---

O quinto desafio posto pelo Big Data pelas empresas é o de definir a abordagem que será feita
dessa massa de dados que está circulando. Afinal, para que um dado se converta em informação
útil e utilizável é preciso o olho do analisador, é preciso colocar uma pergunta a esse dado que
permita orientar a análise de dados para o objetivo de uma empresa. Não é toda a informação que
está circulando que é relevante ou útil para os objetivos específicos de uma empresa.

     Terabytes                 Transmissão                 Estatístico              Confiabilidade               Estruturado
     Registros                 Tempo Real                   Hipóteses               Autenticidade              Não-Estruturado
  Tabelas/Arquivos              Processos                  Correlações            Origem/Reputação             Múltiplas Fontes

                          Corresponde à grande quantidade de dados acumulada.
                          Corresponde à rapidez na geração e obtenção de dados.
                          Corresponde à grande diversidade de tipos ou formas de dados.
                          Corresponde à confiança na geração e obtenção dos dados.
                          Corresponde à utilidade e valor agregado ao negócio.


     (ANAC – 2016) Big Data é:

     a) volume + variedade + agilidade + efetividade, tudo agregando + valor + atualidade.
     b) volume + oportunidade + segurança + veracidade, tudo agregando + valor.
     c) dimensão + variedade + otimização + veracidade, tudo agregando + agilidade.
     d) volume + variedade + velocidade + veracidade, tudo agregando + valor.
     e) volume + disponibilidade + velocidade + portabilidade, tudo requerendo - valor.
     _______________________
     Comentários: trata-se do volume + variedade + velocidade + veracidade, e tudo agregando em valor (Letra D).

     (DPE/RS – 2017) Os sistemas de Big Data costumam ser caracterizados pelos chamados
     3 Vs, sendo que o V de:

     a) Veracidade corresponde à rapidez na geração e obtenção de dados.
     b) Valor corresponde à grande quantidade de dados acumulada.
     c) Volume corresponde à rapidez na geração e obtenção de dados.
     d) Velocidade corresponde à confiança na geração e obtenção dos dados.
     e) Variedade corresponde ao grande número de tipos ou formas de dados.
     _______________________
     Comentários: (a) Errado. Veracidade Velocidade corresponde à rapidez na geração e obtenção de dados; (b) Errado. Valor
     Volume corresponde à grande quantidade de dados acumulada; (c) Errado. Volume Velocidade corresponde à rapidez na
     geração e obtenção de dados; (d) Errado. Velocidade Veracidade corresponde à confiança na geração e obtenção dos dados; (e)
     Correto. Variedade corresponde ao grande número de tipos ou formas de dados (Letra E).


---

Nós já sabemos que a imensa parte dos dados disponíveis no mundo hoje foram criados apenas
nos últimos dois anos. Estes dados são caracterizados por sua velocidade, volume, variedade,
veracidade e valor – conforme vimos anteriormente. Mais de 2.5 trilhões de bytes são gerados todos
os dias por meio de nossos smartphones, tablets, sensores, redes sociais e cartões de crédito, mas
o que pode ser feito com todos esses dados é que é a pergunta relevante.

É aí que entra o conceito de Big Data Analytics: o estudo e interpretação de grandes
quantidades de dados armazenados com a finalidade de extrair padrões de comportamento.
Em outras palavras, utiliza-se uma combinação de sistemas de softwares matemáticos de alta
tecnologia que juntos são capazes de tratar dados estruturados e não-estruturados, analisá-los e
extrair um significado de alto valor para organizações.

Dessa forma, o Big Data Analytics poderá auxiliar empresas privadas ou administradores de
órgãos públicos a entender seus usuários, encontrar oportunidades não percebidas
anteriormente, fornecer um serviço melhor e mitigar possíveis fraudes – são bastante utilizados
em órgãos fazendários – como a Receita Federal – para evitar sonegação de tributos. Ué, professor...
isso não seria Business Intelligence? Não, vamos ver a diferença...

O objetivo de ambos é ajudar uma organização a tomar boas decisões por meio da análise de
dados. No entanto, o Business Intelligence ajuda a encontrar as respostas para as perguntas de
negócios que já conhecemos, enquanto o Big Data Analytics nos ajuda a encontrar as perguntas e
respostas que nem sequer sabíamos que existiam – tudo isso por meio de padrões, correlações
desconhecidas, tendências de mercado e preferências de consumidores.

Em outras palavras, o Business Intelligence trata de encontrar respostas que explicam o
passado, já o Big Data Analytics trata de encontrar as perguntas que explicam o futuro. Ambos
possuem grande importância, complementam-se e devem ser bem entendidos para que as
empresas possam aproveitá-los da melhor forma, agregando e alcançando os valores e resultados
desejados aos negócios. Professor, como eu vou encontrar perguntas que explicam o futuro?

Prever o futuro é um desejo comum entre as pessoas! Se você fosse capaz de saber com seis meses
de antecedência que uma grande crise econômica iria assolar o seu país, o que faria? Será que você
conseguiria criar um plano para prevenir ou diminuir o impacto daquele grande problema? Poderia
mudar o rumo da história? Com a ajuda de estratégias de Análise Preditiva, você pode conseguir
(sim, é sério!).

A Análise Preditiva não é bola de cristal, nem obra da Mãe Dináh! Trata-se, na verdade, do trabalho
de analisar um cenário específico e traçar possíveis tendências e mudanças capazes de afetar seu
planejamento estratégico. É óbvio que, muitas das vezes, esse tipo de trabalho lida com volumes


---

gigantescos de dados e, por isso, exige o uso de ferramentas de inteligência artificial para
analisar a correlação entre os dados. Viram como tudo se encaixa?

A Análise Preditiva é capaz de identificar o relacionamento existente entre os componentes de um
conjunto de dados, utilizando algoritmos sofisticados, com o intuito de identificar padrões de
comportamento ao examinar automaticamente grandes quantidades de dados. Dessa forma,
permite-se que estatísticas e dados armazenados sejam agrupados, fornecendo previsões e
indicando padrões e tendências comportamentais.

Galera, esse tema não é novo, mas só recentemente tem ganhado notoriedade como uma
ferramenta de negócio. Com o avanço de tecnologias que possibilitam a mineração de dados, a
Análise Preditiva conta com cada vez mais segurança e precisão para descobrir padrões e avaliar a
probabilidade de um resultado ou acontecimento futuro, diferentemente da simples análise
descritiva de dados, que apenas mede e apresenta resultados passados.

                        Em vez de se focar no futuro, busca fazer uma fotografia do presente, para que
                        decisões de cunho imediato possam ser tomadas com segurança. Ela trabalha com
                        histórico de dados, cruzando informações com o objetivo de gerar um panorama claro
                        e preciso dos temas relevantes para a empresa no presente momento. Exemplo: por
                        meio do cruzamento de dados, conclui-se que determinada pessoa atualmente é
                        identificada como má pagadora.
                        O foco está na relação de causas e consequências percebidas ao longo do tempo,
                        dentro de um determinado tema. Assim, a análise diagnóstica funciona baseada na
                        coleta de dados relacionados a um determinado assunto, cruzando informações com o
                        objetivo de entender quais fatores influenciaram o resultado atual. Exemplo:
                        determinada pessoa nunca havia sido identificada como má pagadora – somente é
                        agora porque ficou viúva recentemente.
                        Este tipo de análise é o mais indicado para quem precisa prever algum tipo de
                        comportamento ou resultado. Esta técnica busca analisar dados relevantes ao longo
                        do tempo, buscando padrões comportamentais e suas variações de acordo com cada
                        contexto, a fim de prever como será o comportamento de seu público ou mercado no
                        futuro, dadas as condições atuais. Exemplo: quanto estará o valor do dólar no ano que
                        vem?
                        Segue um modelo similar à Análise Preditiva, no entanto com objetivos ligeiramente
                        diferentes. Em vez de tentar prever um determinado acontecimento, esta análise
                        busca prever as consequências deste acontecimento. Exemplo: dado um aumento do
                        valor do dólar no ano que vem, como isso poderá afetar as importações de matéria
                        prima, consequentemente, o faturamento das vendas de determinada empresa.

Uma dúvida comum é sobre a diferença entre Business Intelligence, Big Data Analytics e Data
Mining! Alguns autores consideram um é a evolução do anterior, abrangendo mais dados e
ferramentas matemáticas/estatísticas; outros afirmam que – na verdade – é tudo a mesma coisa e


---

que possuem nomes diferentes apenas por uma questão de marketing: vende mais dizer que uma
ferramenta de software é uma solução de Big Data Analytics do que uma solução de Data Mining.


 Uma estratégia baseada em tecnologia que permite Somente tecnologia – no nível empresarial, refere-se a
 coletar insights mais profundos e relevantes de clientes, explorar fontes amplamente melhoradas de dados para
 parceiros e negócio, ganhando assim uma vantagem adquirir insights.
 competitiva.

 Trabalhar com conjuntos de dados cujo porte e Somente volume – também se refere à variedade e à
 variedade estão além da habilidade de captura, velocidade, mas – talvez mais importante – refere-se ao
 armazenamento e análise de softwares de banco de valor derivado dos dados.
 dados típicos.

 Processamento de um fluxo contínuo de dados em         Mais gerada ou mais utilizada somente por grandes
 tempo real, possibilitando a tomada de decisões        empresas online como Google ou Amazon. Embora as
 sensíveis ao tempo mais rápido do que em qualquer      empresas de internet possam ter sido pioneiras no Big
 outra época.                                           Data na escala web, aplicativos chegam a todas as
                                                        indústrias.
 Distribuído na natureza, isto é, o processamento de Uso de bancos de dados relacionais tradicionais de
 análise vai aonde estão os dados para maior velocidade “tamanho único” criados com base em disco
 e eficiência.                                          compartilhado e arquitetura de memória. Análise de Big
                                                        Data usa uma rede de recursos de computação para
                                                        processamento massivamente paralelo e escalável.
 Um novo paradigma no qual a tecnologia da informação Um substituto de bancos de dados relacionais – dados
 colabora com usuários empresariais e “cientistas de estruturados continuam a ser de importância crítica
 dados” para identificar e implementar análises que para as empresas. No entanto, sistemas tradicionais
 ampliam a eficiência operacional e resolvem novos podem não ter capacidade de manipular as novas fontes
 problemas empresariais.                                e contextos do Big Data.
 Transferir a tomada de decisão dentro da empresa e
 permitir que pessoas tomem decisões melhores, mais
 rápidas e em tempo real.                                                         -

Apesar de estarmos apenas nos primórdios do Big Data, ele é utilizado diariamente. Filtros
antispam são projetados para se adaptarem automaticamente às mudanças dos tipos de lixo
eletrônico. Sites de namoro formam pares com base em como suas várias características
correspondem às de relacionamentos anteriores. O corretor automático dos smartphones analisa
nossas ações e acrescenta novas palavras a seus dicionários com base no que é escrito.

Por fim, vamos ver dois casos de sucesso que se tornaram referência de êxito na utilização do
conceito de Big Data Analytics. Me acompanhem...


---

O Fast-Food mais famosos do planeta, o MC Donald’s, gerencia cerca de 34 mil restaurantes e
serve mais de 69 milhões de pessoas em 118 países – tudo isso com frequência diária! Com base
nesse pequeno trecho de informações, você já deve estar imaginando o quão gigantesco é o
número de dados gerados diariamente pelo MC Donald’s. Bom, e o que o maior restaurante faz com
todos esses dados gerados?

Sabe-se que o MC Donald’s coleta e combina os dados de suas lanchonetes ao redor do globo
com o objetivo de padronizá-los e, com isso, compreender o comportamento de seu público;
como esse público percebe seus produtos; os aperfeiçoamentos logísticos; e layouts que podem ser
concebidos para melhorar a experiência do usuário perante seus serviços e produtos. Tudo isso com
o auxílio do Big Data!

A partir dos estudos de Sentiment Analysis (Análises de Sentimentos) realizados em redes
sociais, foram lançados novos sanduíches, promoções em tempo real, entre outros. Tudo isso
só foi possível graças ao acompanhamento dos cientistas de dados, que mensuraram atentamente
as manifestações e reações de seu público – alterando estratégia em tempo real e, até a logística
do Drive-Thru. Como assim, professor?

A logística de pedido, produção e entrega de sanduíches foi alterada em cada país conforme as
reações de seus consumidores no que diz respeito ao layout, tempo de espera e informações
providenciadas por seus funcionários no ponto de entrega dos lanches. Tudo possibilitado por meio
de ferramentas de Big Data. Legal, não é? Esse foi um caso de sucesso da utilização do Big Data na
prática em organizações.

A American Express, empresa norte-americana de serviços financeiros, passou a investir em Big
Data ao perceber que os insights gerados pelas ferramentas tradicionais de BI não estavam sendo
suficientes para diminuir as taxas de cancelamento de seus clientes. A companhia desenvolveu
sofisticados modelos preditivos para analisar históricos de transações dos usuários de seus
cartões de crédito, além de 115 variáveis, para prever potenciais churns.

Professor, o que diabos é churn? É um termo em inglês para uma métrica que indica o quanto uma
empresa perdeu de receite ou de clientes! Após a implementação de uma solução de Big Data em
seus processos, a American Express acredita ser capaz, por exemplo, de identificar 24% de seus
clientes australianos que pretendem encerrar suas contas dentro dos próximos quatro meses.
Genial, concordam?


---

                             CONCEITOS AVANÇADOS
NoSQL (Not Only SQL)
                                                                               INCIDÊNCIA EM PROVA: baixa

Antes de falar sobre NoSQL, precisamos falar o que é SQL (Structured Query Language). O SQL
é uma linguagem de consulta estruturada utilizada para manipular bancos de dados relacionais
(tabelas). Por meio dela, um usuário pode executar comandos para inserir, pesquisar, atualizar ou
deletar registros em um banco de dados relacionais, criar ou excluir tabelas, conceder ou revogar
permissões para acessar o banco de dados, entre outros recursos.

É interessante, mas notem que agora estamos falando em um contexto de Big Data! E nós já
sabemos que grande parte dos dados armazenados e processados dentro desse conceito são não-
estruturados e/ou semi-estruturados, logo não se adequam bem a bases de dados relacionais. Foi
então que surgiu o NoSQL (Not Only SQL)! Observe que a sigla significa Não Apenas SQL – logo
ela suporta outras linguagens de recuperação de dados e não apenas SQL.

Bancos de Dados NoSQL são cada vez mais utilizados em aplicações web de tempo real (online)
com a finalidade de atender aos requisitos de gerenciamento de grandes volumes de dados que
necessitam de alta disponibilidade e escalabilidade. Aliás, eles geralmente são orientados a
documentos, isto é, são capazes de manipular dados semiestruturados (Ex: XML e JSON). Ora, mas
por que não continuar utilizando bancos de dados relacionais? Vejamos...

Nos dias de hoje, o volume de dados de certas organizações (Ex: Facebook, que atingiu o nível de
300 petabytes ou 300 mil terabytes) atingiu valores nunca antes imaginados. No caso destes tipos
de organizações, a utilização de bancos de dados relacionais tem se mostrado muito problemática
e até ineficiente. Os principais problemas estão relacionados à dificuldade de conciliar o tipo de
modelo com a demanda da escalabilidade que está cada vez mais frequente.

Vamos tomar como exemplo o próprio Facebook! Caso o sistema esteja rodando sobre um banco
de dados relacional e haja um crescimento do número de usuários, haverá consequentemente uma
queda de performance. Para superar este problema, seria necessário fazer um upgrade na
potência do servidor atual (também chamado de escalabilidade vertical) ou aumentar o número
de servidores (também chamado de escalabilidade horizontal).

No entanto, em organizações que tratam de uma quantidade massiva de dados que nunca param
de crescer, chega um momento em que o banco de dados não consegue mais atender todas as
requisições em um tempo hábil. A escalabilidade vertical é mais fácil, mas é mais limitada; a
escalabilidade horizontal é ilimitada, mas é mais complexa – é necessário realizar uma série de
configurações e alterações nas aplicações para que tudo funcione em uma arquitetura distribuída.

Galera, bancos de dados relacionais estão mais focados nos relacionamentos entre as entidades.
Como vantagem, isso mantém a integridade dos dados; como desvantagem, torna mais


---

burocráticas alterações e implementações de novas funcionalidades. Como esse intenso volume
de dados vem aumentando e pela sua natureza não-estruturada ou semiestruturada,
desenvolvedores perceberam a dificuldade ao se organizar dados no modelo relacional.

Pensando em solucionar diversos problemas relacionados à escalabilidade, performance e
disponibilidade, projetistas de bancos de dados não-relacionais promoveram uma alternativa de
alto armazenamento com alta velocidade e alta disponibilidade, procurando se livrar de certas
regras e estruturas inflexíveis que norteiam o modelo relacional de armazenamento de dados.
Que legaaaaaaal, professor...

A proposta dos bancos de dados não-relacionais não é substituir os bancos de dados
relacionais, mas serem utilizados nos casos em que é necessária uma maior flexibilidade na
estrutura do banco de dados. Dito isso, eu gostaria de apresentar para vocês uma tabela que
contém uma comparação com as diferenças fundamentais entre NoSQL e SQL quanto ao modelo,
armazenamento, flexibilidade, adequação, escalabilidade e exemplos de aplicações.

             CRITÉRIO                    NOSQL                                      SQL
              Modelo                Não-Relacional                               Relacional
     ARMAZENAMENTO        Variados (Grafos, Documentos, etc)                      Tabelas
        Flexibilidade    Alta flexibilidade (Esquema indefinido)   Baixa flexibilidade (Esquema definido)
          ADEQUAÇÃO     Mais adequado a dados não-estruturados     Mais adequado a dados estruturados
      ESCALABILIDADE      Em geral, escalabilidade horizontal         Em geral, escalabilidade vertical
                 Sgbd   MongoDB, Cassandra, HBase, Neo4J, etc      Oracle, MySQL, DB2, SQL Server, etc


Dentro desse contexto, eu gostaria de enfatizar alguns pontos! Primeiro: NoSQL é um termo que
funciona como um guarda-chuva para bancos de dados não-relacionais. Isso significa que todos
esses bancos de dados não-relacionais terão características semelhantes? Não, esse é um termo
genérico para absolutamente todas as variedades de bancos de dados que não sejam relacionais,
abarcando bancos de dados com algumas características completamente díspares entre si.

Segundo: apesar do nome sugerir o contrário, bancos de dados não-relacionais podem – sim –
armazenar relacionamentos entre dados, no entanto eles o farão de maneira diferente de
bancos de dados relacionais. Lembrando que bancos de dados relacionais, em geral, utilizam
chaves (primárias e estrangeiras) para armazenar o relacionamento entre dados, já os bancos de
dados não-relacionais utilizam cada um o seu modelo/forma de armazená-los.

Terceiro: bancos de dados relacionais e não-relacionais possuem uma grande diferença em
relação ao esquema de dados. Vocês ainda se lembram o que é esquema ou já esqueceram? Esquema
é uma descrição do banco de dados, que informa qual estrutura/organização será utilizada para
suportar os dados que serão manipulados. Ora, bancos de dados relacionais possuem esquema
inflexíveis enquanto bancos de dados não-relacionais possuem esquemas flexíveis.


---

Diego, não saquei essa parte! Galera, quando eu era criança um número de telefone possuía apenas
sete números (eu até me lembro do primeiro número da minha casa: 354-8915). Um desenvolvedor
de sistemas daquela época, ao criar o esquema de banco de dados que descreveria os dados
que seriam armazenados, especificou que a coluna TELEFONE de uma determinada tabela
receberia um número com exatos sete algarismos.

No entanto, o tempo passou e os números de telefone brasileiros ganharam mais um número. Esse
tipo de alteração é bastante problemático e trabalhoso para o desenvolvedor de sistemas porque
ele tem que alterar todo o esquema que havia sido estabelecido inicialmente. Alguns anos atrás, os
números de telefone ganharam mais um número, fazendo com que desenvolvedores xingassem
até a última geração de quem teve essa ideia, porque novamente tiveram que alterar o esquema.

Em outras palavras, bancos de dados tradicionais possuem esquemas extremamente
inflexíveis. Eu mencionei um caso bastante simples, mas há alterações que podem realmente ser
extremamente complexas, ainda mais em bancos de dados antigos. Pois bem, os bancos de dados
não-relacionais são diferentes: eles se caracterizam pela ausência parcial ou total de esquemas que
definem uma estrutura de dados – também chamado de esquema flexível ou ausência de esquema.

Dessa forma, dados armazenados em um banco de dados não-relacional podem ter características,
tipos, estruturas e organizações completamente diferentes até mesmo entre um mesmo conjunto
de dados. É justamente essa ausência de esquema que facilita uma alta escalabilidade e alta
disponibilidade, mas em contrapartida não há a garantia de integridade dos dados, fato que
não ocorre em bancos de dados relacionais.

Professor, se bancos de dados não-relacionais não armazenam dados em tabelas, como eles
armazenam seus dados? Bancos de dados não-relacionais utilizam modelos diferentes de
armazenamento de dados, os quais podem ser divididos em quatro categorias principais:
Chave-Valor, Orientado a Documentos, Orientado a Grafos e Orientado a Colunas (Colunar).
Alguns bancos de dados podem implementar mais de um desses modelos.


---

                                CARACTERÍSTICAS DE BANCOS DE DADOS NÃO RELACIONAIS
 Bancos de dados não relacionais não usam a estrutura tradicional baseada em tabela de bancos de dados
 relacionais como tabela, chave e valor.
 Bancos de dados não relacionais geralmente são mais escaláveis horizontalmente do que os bancos de dados
 relacionais – é possível adicionar uma nova máquina ao cluster para aumentar a capacidade do sistema distribuído.
 Bancos de dados não relacionais geralmente usam modelos de dados mais simples, como pares chave-valor ou
 documentos, para lidar melhor com dados complexos não estruturados.
 Bancos de dados não relacionais geralmente usam arquiteturas distribuídas, que permitem processamento de
 consultas mais rápido e maior disponibilidade.
 Bancos de dados não relacionais geralmente usam estruturas de dados mais flexíveis, como JSON, que permite
 uma integração de dados mais dinâmica.
 Bancos de dados não relacionais geralmente fornecem melhor desempenho e escalabilidade do que os bancos de
 dados relacionais tradicionais para diversas atividades.
 Bancos de dados não relacionais geralmente fornecem mais flexibilidade na modelagem de dados, permitindo que
 os desenvolvedores modifiquem sua estrutura de dados com mais rapidez e facilidade.
 Bancos de dados não relacionais geralmente usam linguagens de consulta NoSQL, que – em regra – são mais fáceis
 de aprender do que SQL.
 Bancos de dados não relacionais geralmente requerem menos manutenção do que os bancos de dados relacionais
 tradicionais.
 Bancos de dados não relacionais geralmente usam diferentes tecnologias de armazenamento, como
 armazenamento baseado em nuvem, para lidar melhor com grandes conjuntos de dados.
 Bancos de dados não relacionais geralmente fornecem diferentes recursos de pesquisa do que os bancos de dados
 relacionais tradicionais, mas eventualmente podem ser mais ineficientes.
 Bancos de dados não relacionais geralmente oferecem melhor suporte para processamento e streaming de dados
 em tempo real.
 Bancos de dados não relacionais podem frequentemente ser usados em conjunto com bancos de dados relacionais
 tradicionais para lidar melhor com dados complexos.
 Bancos de dados não relacionais permitem a inserção de dados a qualquer momento sem a necessidade de definir
 previamente um esquema ou por meio de um esquema flexível.
 Bancos de dados não relacionais normalmente não impõem regras de integridade de dados, o que pode levar a
 erros e inconsistência de dados – o que geralmente não ocorre com bancos de dados relacionais.


A tabela apresentada a seguir exibe diversas técnicas ou recursos existentes na maioria dos bancos
de dados não relacionais:

        TÉCNICAS                                              DESCRIÇÃO
                   Os dados são copiados e armazenados em vários nós para redundância e melhor desempenho.
      REPLICAÇÃO

 Particionamento Os dados são divididos em partes menores e distribuídos em vários nós.
                   Os dados são organizados em unidades lógicas (shards) e distribuídos por vários nós.
        Sharding
         Hashing Os dados são mapeados para um identificador exclusivo (hash) e distribuídos por vários nós.
     consistente


---

           Views Os dados são pré-agregados e armazenados em um formato de consulta amigável.
  materializadas
                    Os dados são indexados para permitir pesquisas rápidas e recuperação de dados.
      Indexação
                    Os dados são armazenados na memória para melhorar o desempenho de leitura.
           cache


     (CNJ – 2013) Apesar de implementarem tecnologias distintas, todos os bancos de dados
     NoSQL apresentam em comum a implementação da tecnologia chave-valor.
     _______________________
     Comentários: eles podem apresentar implementações diferentes, como chave-valor, orientado a documentos, orientado a
     grafos ou orientado a colunas (Errado).

Orientado a Chave-Valor

Dentre os sistemas de bancos de dados conhecidos como NoSQL, o modelo chave-valor (Key-
Value) é o mais simples. Sua estrutura constitui-se basicamente de uma lista de pares de valores
compostos por uma chave e um valor. Esse modelo pode ser comparado com a estrutura de dados
chamada Tabela Hash, onde valores são associados às chaves de busca que permitem um rápido
acesso ao seu conteúdo.

Esse modelo de banco de dados não costuma permitir que consultas sejam realizadas sobre os seus
dados, mas apenas sobre as chaves de busca. Assim, todo o acesso é feito por meio das chaves de
busca e, apenas com a chave, é possível se ter acesso ao valor. Ele também não agrupa os dados
por entidades como pode ser visto no modelo relacional. Todo o conteúdo está em apenas uma
única cadeia.

Em relação ao modelo relacional o modelo chave-valor pode ser comparado da seguinte maneira:
em ambos os casos eles funcionam em estrutura tabular (forma de tabela) sendo que este último é
formado por uma única tabela composta por duas colunas: uma correspondente à chave e a outra
ao valor associado. O campo de chave corresponderia à chave primária no modelo relacional,
também apresentando a propriedade de unicidade.

Diferentemente do que acontece no modelo relacional, os valores no modelo chave-valor não são
agrupados por tipos de dados. Neste modelo, os dados estão armazenados em uma única coluna
de uma mesma tabela. Essas características dos sistemas de dados chave-valor impossibilitam a
definição de esquemas de dados, apenas os metadados que podem ser incorporados por meio das
chaves. Logo, guardem essa informação: ele não requer um esquema!

Também não existe a possibilidade ou mesmo necessidade de uso de junções (joins). Essa
perspectiva torna esse modelo de dados mais simples e com menores tempos de resposta
permitindo que a capacidade de armazenamento de suas bases de dados seja uma das maiores dos


---

sistemas enquadrados no conceito NoSQL. Para ficar mais claro, vamos ver um exemplo de uma
possível tabela de chave-valor:

                                       CHAVE                      VALOR
                                        CPF1              111.222.333-44
                                       NOME1                     Diego
                                     TELEFONE1               99999-8888
                                       LIVRO             Irmãos Karamázov
                                        ISBN               9788573264098
                                      QTD_PGS                     1040
                                        CPF2              555.666.777-88
                                       NOME2                    Renato
                                     TELEFONE2               99999-7777


Note que temos dados sobre duas pessoas e dados sobre um livro – e não há distinção explícita
entre as pessoas ou livros. Além disso, não existe referência de chaves e, consequentemente,
também não há integridade referencial. Assim, o modelo não dá suporte a relacionamentos entre
os itens de dados como, por exemplo, o relacionamento de compra de um livro. Somando-se a isso,
não existe uma linguagem de consulta, ocasionando algumas limitações na capacidade de busca.

Esse modelo também não oferece as propriedades ACID e exigem que os implementadores pensem
no posicionamento, replicação e tolerância a falhas dos dados, pois não são expressamente
controlados pela própria tecnologia. Em suma: é um sistema que funciona de forma semelhante
a um dicionário de palavras, onde os dados são endereçados por uma chave (palavra). Os valores
são isolados e independentes, e o relacionamento é tratado pela lógica da aplicação.

Este tipo de banco de dados é considerado útil para aplicações em que o processamento das
transações é baseado em chaves e para aplicações que realizam constantes leituras nos dados.
Trata-se de uma solução adequada para aplicações simples que funcionam com um único tipo de
objeto, e esses objetos são baseados em um único atributo. Esse modelo oferece grande
flexibilidade e escalabilidade e seus principais exemplos são: Redis, Voldemort e BerkeleyDB.

 características                 DESCRIÇÃO de modelos de bancos de dados orientados a chave-valor
                   Modelos de chave-valor não necessitam definir uma estrutura de tabela ou colunas antes que
            Sem
                   os dados sejam armazenados.


---

         esquema
             Fácil   Devido à simplicidade do banco de dados, os dados podem aceitar qualquer tipo de dados, até
          de usar    mesmo tipos diferentes, quando necessário.
 rápido tempo de     Seu tempo de resposta é rápido devido à sua simplicidade, visto que o restante ambiente
        resposta     próximo a ele é muito construído e aprimorado.
 Escalabilidade e    Os dados são distribuídos em vários nós, o que fornece escalabilidade e melhor disponibilidade.
  disponibilidade

Orientado a Colunas

Conceitualmente esse modelo é o que mais se assemelha ao modelo relacional, dado que também
é organizado em linhas e colunas. Por outro lado, essa abordagem é projetada para tratar os
dados de maneira não normalizada, normalmente não privilegiando a consistência das
informações. Ainda em oposição ao modelo relacional, o modelo orientado a colunas, como o
próprio nome sugere, faz uma inversão na organização de seus dados.

Nessa abordagem, os atributos que compõem uma instância são organizados em colunas e as
linhas passam a conter as ocorrências de determinado atributo para cada instância de dados.
Dessa forma, as linhas não mais armazenam uma tupla, mas – sim – um conjunto de atributos de
mesmo tipo, enquanto o conjunto de atributos de uma coluna contém a informação de uma
instância por completo. Como assim, Diego? Vejam um exemplo...

                                          ARMAZENAMENTO ORIENTADO à LINHA
 111.222.333-44, Diego, 99999-8888; 555.666.777-88, Renato, 99999-7777


                                         ARMAZENAMENTO ORIENTADO à coluna
 111.222.333-44, 555.666.777-88; Diego, Renato; 99999-8888, 99999-7777


Note que existe uma inversão na orientação de armazenamento dos dados do modelo relacional
para o modelo em colunas. Enquanto no modelo relacional os atributos referentes a uma tupla
de dados são organizados juntos (CPF, Nome, Telefone), no modelo orientado a colunas os
atributos de uma mesma categoria são priorizados – vejam que temos dois CPFs, depois dois
nomes e depois dois números de telefone.

Na prática isso permite que consultas que façam análises em subconjuntos de dados possam
ser mais eficientes, porém a obtenção de itens inteiros passa a ser mais custosa. Essa diferença
ocorre pelo esforço necessário para se percorrer as informações necessárias. Para analisar os
valores de determinado atributo, o banco de dados efetua uma consulta semelhante à obtenção
dos atributos de uma linha no modelo relacional.

Já para resgatar uma instância de dados seria equivalente a consultar no modelo relacional se em
cada linha de dados existe uma coluna com determinado valor. Além da inversão na orientação dos


---

dados, o modelo em colunas também apresenta nomenclaturas diferentes para alguns conceitos.
Nesse modelo, as instâncias de uma entidade fazem parte da mesma família de colunas e não
de tabelas como é conhecido no relacional.

Em uma família de colunas, é possível a existência de atributos não atômicos, quando são
possíveis mais de um valor por meio de listas. Além disso, nas famílias de colunas, as instâncias
podem apresentar quantidades de atributos diferentes, não sendo necessário reservar espaços de
armazenamento para valores nulos.

Apesar do modelo em colunas facilitar a execução de consultas em um subconjunto de dados, os
sistemas dessa abordagem não permitem consultas com a junção de famílias de colunas. Nesses
casos, é preferível que informações que necessitem ser resgatadas unidas estejam na mesma
família de coluna. Isso se deve ao fato desse modelo de dados não dar suporte ao uso de chaves
estrangeiras, não sendo possível fazer referências de uma instância para outra.

Em suma: cada linha de dados não necessita possuir o mesmo grau, ou seja, pode ter um número
variável de colunas, e devido a esta característica, esse modelo tem dados espaçados. As colunas
de uma tabela estão divididas sobre os nós usando o conceito de grupos de colunas. Grupos de
colunas são uma maneira simples dos usuários indicarem quais colunas devem ser armazenadas
juntas.

Este modelo é adequado para aplicações que tratam com grandes volumes de dados, de modo
que o modelo de dados pode ser eficientemente particionado. Trata-se de um modelo adequado
quando se deseja otimizar a leitura de dados estruturados, pois mantém dados de forma contígua
por coluna. Ademais, são apropriados para propósitos analíticos porque eles podem tratar com
colunas específicas. Os principais exemplos desse modelo são: Cassandra, HBase e BigTable.

 características                     DESCRIÇÃO de modelos de bancos de dados orientados a colunas
  Otimizado para    Modelos orientados a colunas são otimizados para legibilidade, permitindo leituras mais rápidas
     legibilidade   e eficientes.
      Altamente     Modelos orientados a colunas são altamente escaláveis e podem acomodar grandes conjuntos
       escalável    de dados de forma rápida e fácil.


---

    Modelo de dados    A flexibilidade do modelo de dados de um modelo orientado a colunas permite alterações de
            flexível   esquema mais rápidas e fáceis.
               Baixa   Os modelos orientados a colunas oferecem baixa latência ao consultar dados, pois os dados
           latência    podem ser armazenados em várias colunas em vez de uma longa linha.
                Alta   Os modelos orientados a colunas geralmente são projetados para alta disponibilidade e podem
     disponibilidade   ser replicados em vários nós.


Orientado a Documentos

Assim como o modelo em chave-valor, o modelo em documentos também faz uso de associações
entre pares chaves e valores, porém, nesse último, os dados não são dispostos em uma única
estrutura de dados. Neste modelo, os dados de uma entidade são agrupados em documentos
que podem seguir, por exemplo, a codificação XML (Extensible Markup Language) ou JSON
(JavaScript Object Notation).

Podemos afirmar que um documento é uma coleção de chaves e valores que está relacionado a uma
instância de dados. As chaves dentro dos documentos são únicas e cada documento contém um
identificador, que é único dentro do conjunto. Em geral, o banco de dados orientado a documentos
não possui esquema: o documento não precisa ter uma estrutura comum. Esse modelo permite que
documentos de uma mesma coleção de dados possam apresentar campos distintos uns dos outros.

Vamos ver um exemplo: temos um arquivo em formato JSON. Note que temos um campo e seu
valor correspondente separados por dois-pontos. Perceba também que esse modelo permite
representar campos multivalorados (com mais de um valor), como o campo Telefones. O modelo
orientado a documentos geralmente suporta índices e diversos tipos de documentos (objetos) por
banco de dados, além de documentos aninhados ou listas.

Ele é de fácil manutenção, sendo adequado para aplicações web que precisam executar
consultas dinâmicas, tais como aplicações de análise em tempo real e blogs. O que seria uma
consulta dinâmica, Diego? Um exemplo é quando se tem diferentes tipos de objetos e é necessário
pesquisar objetos com base em múltiplos campos. Os principais bancos de dados orientados a
documentos são: MongoDB, CouchDB e Riak.

{
          cpf: “11122233344”,
          nome: “Diego”,
          telefone: “999998888”
}
{
          cpf: “55566677788”,
          nome: “Renato”,
          Telefones: [
               {telefone: “999997777”},
               {telefone: “999996666”}


---

          ]
}

    características                  DESCRIÇÃO de modelos de bancos de dados orientados a documentos
    Modelo de dados    Modelos orientados a documentos são mais flexíveis do que os bancos de dados relacionais
            flexível   tradicionais, pois não têm esquemas e podem acomodar dados com estruturas variadas.
                Alta   Modelos orientados a documentos são altamente escaláveis e podem acomodar conjuntos de
     escalabilidade    dados maiores com facilidade.
                Alto   Modelos orientados a documentos são muito eficientes em termos de recuperação de dados e
        desempenho     fornecem alto desempenho.
                Alta   Modelos orientados a documentos são altamente disponíveis e podem lidar com várias
     disponibilidade   solicitações simultâneas.
                       Modelos orientados a documentos são relativamente fáceis de usar, pois usam uma linguagem
       Fácil de usar
                       de consulta simples para manipulação de dados.


Orientado a Grafos

Dentre os modelos classificados como NoSQL, o orientado a grafo é o que mais se distancia dos
demais. Enquanto as outras abordagens têm seu foco no armazenamento dos dados, esse
modelo tem como destaque principal os relacionamentos que ocorrem entre as entidades de
sua base. Os bancos de dados que seguem essa abordagem possuem três tipos de informações: os
nós, arestas (também chamadas de arcos) e propriedades.

Os nós correspondem às instâncias de dados (como as tuplas para o modelo relacional), as arestas
se referem aos relacionamentos mantidos entre as instâncias dos nós, enquanto as propriedades
dizem respeito aos valores de dados contidos nas instâncias, podendo assumir valores como:
booleanos, inteiros, caracteres e conjunto de valores. O uso desses conceitos se deve ao fato
dessa abordagem estar baseada na teoria dos grafos.


---

Com isso, o banco de dados permite que as instâncias de dados (nós) possam estabelecer
relacionamentos uns com os outros por meio das arestas que assim como os nós também podem
conter propriedades que o descrevem. Além das propriedades, os nós e arestas podem conter
rótulos que os classificam em grupos mais específicos. Esses rótulos poderiam funcionar como um
metadado. Como assim, Diego?

Imagine que temos dados de um vendedor e de um cliente. Como saber se os dados se referem a um
ou a outro? Os rótulos podem ser usados para diferenciarem as instâncias em vendedor ou
cliente e, nas arestas, eles servem para determinar o tipo de relacionamento que está
ocorrendo como, por exemplo, a venda ou o aluguel de um livro. Vejam na imagem seguinte um
exemplo de um grafo com seus nós, arestas e propriedades:

Diferentemente dos demais modelos, o modelo em grafo, além de dar suporte a referências,
também garante a integridade referencial, assegurando que o nó de entrada sempre faça
referência ao nó de saída. As chaves de acesso aos nós são definidas automaticamente pelo
sistema de banco de dados. No entanto, é possível estabelecer restrições de unicidade para demais
propriedades do nó. Os principais exemplos desse modelo são: Neo4j, AllegroGraph e Virtuoso.

 características                    DESCRIÇÃO de modelos de bancos de dados orientados a grafos
             Sem   São projetados para armazenar dados sem esquema predefinido, permitindo modelos de dados
        esquema    flexíveis e evolução do esquema.
      Altamente    Seguindo as relações entre os dados, os bancos de dados orientados a grafos podem facilmente
      conectado    percorrer e consultar dados conectados de maneiras complexas.
      Altamente    Permitem o dimensionamento de dados com facilidade e a capacidade de adicionar
       escalável   rapidamente mais nós e relacionamentos.
  Desempenho de    Projetados para consultar rapidamente dados com relacionamentos complexos e acessar os
 consulta rápida   dados em uma fração do tempo dos bancos de dados tradicionais.


---

                    Podem acessar dados rapidamente e responder em um ambiente de baixa latência, permitindo
   Baixa latência
                    aplicações em tempo real.


Vamos fazer um resumão sobre NoSQL? Bora lá! Baseado no livro Banco de Dados para Big Data de
Geomar André Schreiner. Vamos lá...

Com o surgimento da web, muitas demandas mudaram. Atualmente, muitas aplicações necessitam
lidar com grandes volumes de dados que, geralmente, caracterizam-se por serem heterogêneos e não
possuírem um esquema bem definido. Esses dados são comumente denominados de Big Data. Apesar
de os bancos de dados relacionais serem usados há décadas como meio seguro de armazenamento,
eles se mostram ineficientes para o gerenciamento de Big Data.

Isso se deve principalmente pelo comprometimento do desempenho com verificações de consistência
dos dados, processamento de consultas complexas, manutenção das propriedades ACID, entre outras,
e a representação rígida e estruturada dos dados através de esquemas. Dessa forma, para suprir os
requisitos impostos pelo processamento de Big Data, novas arquiteturas de bancos de dados foram
propostas.

Geralmente, essas novas arquiteturas utilizam recursos de alta disponibilidade e escalabilidade
atrelados ao paradigma da computação na nuvem, paradigma baseado na capacidade de
processamento e armazenamento de grandes volumes de dados por centros distribuídos
geograficamente. A quantidade de dados gerados, armazenados e processados atingiu escalas inéditas
com a Web 2.0, a partir disso nasceram os chamados bancos de dados NoSQL.

Os bancos de dados relacionais foram utilizados durantes anos como fonte segura de armazenamento
e consulta de dados, porém eles não são adequados para lidar com os requisitos impostos pelo Big
Data. Os desenvolvedores começaram a questionar o uso de uma estrutura tão rígida para o
armazenamento de dados, sendo que algumas aplicações não necessitam dessa rigidez.

Ainda temos o fato de que a escalabilidade do modelo relacional é baseada no crescimento vertical
(escalonamento vertical), ou seja, a melhora do desempenho do SGBD pode ser efetuada
acrescentando mais recursos ao servidor, o que torna o processo caro. Considerando os pontos falhos
dos bancos de dados relacionais, os bancos de dados NoSQL foram propostos como bancos de dados
essencialmente distribuídos, baseados no escalonamento horizontal.

Esses novos bancos de dados podem ser definidos como bancos de dados que não seguem o modelo
relacional de dados e possuem seis propriedades: (1) escalonamento horizontal; (2) armazenamento de
dados complexos de maneira distribuída; (3) interface/protocolo de acesso simples para manipulação
de dados; (4) sem suporte – ou relaxamento – das propriedades ACID; (5) alta disponibilidade; (6)
esquema flexível ou até ausência de esquema.

Os bancos de dados NoSQL não vão acabar com o uso de bancos de dados relacionais, eles tratam de
problemas diferentes e são complementares. Os bancos de dados NoSQL não seguem o modelo
relacional de dados e, geralmente, não possuem acesso via SQL. Além disso, não existe um padrão de


---

consulta para esses bancos de dados. Os bancos de dados NoSQL não possuem suporte da ACID,
assim, não podem ser utilizados em ambientes que necessitam de transações.

Os bancos de dados NoSQL podem ser caracterizados em quatro diferentes modelos de dados: chave-
valor, orientado a colunas, orientado a documentos e orientado a grafos. Os bancos de dados chave-
valor possuem um modelo de dados simples, baseado em chaves únicas que apresentam um valor
associado. Esse valor pode ter qualquer estrutura, sendo tratado pelo modelo como uma caixa-preta.

Os bancos de dados chave-valor possuem uma linguagem de consulta simples que, geralmente, apenas
permitem consultas nas chaves. Pesquisas nos valores tornariam o sistema mais lento, sendo assim
não são permitidas consultas com base neles. O acesso aos dados armazenados em um banco de dados
chave-valor é bastante rápido, pois os valores são armazenados de maneira otimizada baseada na
chave.

Esses bancos de dados utilizam particionamento de dados para facilitar o suporte à escalabilidade.
Além disso, a fim de suportar alta disponibilidade, as partições dos dados são replicadas entre os nós
do cluster. Os bancos de dados chave-valor são indicados para uso em que a busca de dados é sempre
feita por um identificador único. Os bancos de dados orientados a documentos armazenam seus dados
em documentos com estruturas hierárquicas em forma de árvores.

Os bancos de dados orientados a documentos são constituídos de coleções de documentos, cada
coleção possui diversos documentos. Um documento precisa de um nome único (para a coleção) e
armazena uma série de atributos. Atributos podem possuir valores simples (inteiros, caracteres, datas,
entre outros) ou valores complexos (vetores, matrizes, outros documentos, estrutura chave-valor, entre
outros).

Geralmente, os bancos de dados possuem linguagens de consultas mais robustas que permitem
consultas complexas sobre os dados. Os bancos de dados orientados a documentos possuem suporte a
diferentes níveis de consistência. A escalabilidade e alta disponibilidade são alcançadas por meio de
uma arquitetura baseada em replicação. Os bancos de dados orientados a colunas armazenam seus
dados baseado em conjunto de colunas identificadas por uma chave de acesso.

Os dados são organizados fisicamente no disco baseados nas chaves de acesso, dessa forma, a
consulta sobre a chave possui um desempenho elevado. Esses bancos de dados não são bons para
aplicações que possuem mudanças constantes nas colunas consultadas, pois os dados são
armazenados baseados nos valores das colunas que compõem a chave de acesso. Os bancos de dados
orientados a grafos possuem estruturas baseadas no acesso a grafo.

Diferentemente dos demais modelos de dados, os bancos de dados orientados a grafos possuem o
armazenamento baseado nos relacionamentos dos dados. Esses bancos de dados possuem uma
estrutura composta por nós e arestas. Os nós representam objetos e possuem atributos. As arestas
representam relações entre objetos, sendo que elas possuem direção (origem e destino) e
opcionalmente possuem uma série de atributos.


---

O modelo relacional de dados não pode ser mapeado diretamente para o modelo de grafos devida a
sua estrutura de armazenamento baseadas nas relações que os grafos empregam. Diferentemente dos
demais bancos de dados NoSQL, os bancos de dados orientados a grafos possuem uma linguagem de
consulta considerada padrão baseada no Gremlin. Esses bancos de dados geralmente possuem suporte
em forte consistência, suportando as propriedades ACID.

Os bancos de dados orientados a grafos suportam transações sobre conjuntos de dados com múltiplas
operações em um ambiente fortemente consistente (ACID). Esses bancos de dados são muito indicados
para uso em aplicações que possuem dados conectados de alguma forma, porém é desencorajado seu
uso em aplicações que necessitem realizar consultas que busque nós baseado em suas propriedades
(consultas transversais).


---

Propriedades ACID/BASE
                                                                                     INCIDÊNCIA EM PROVA: baixíssima

Edgar Codd introduziu o modelo relacional na década de 70 com o objetivo principal de superar
questões relativas ao suporte, à independência e integridade dos dados nos Sistemas
Gerenciadores de Banco de Dados (SGBD). Naquela época, devido aos problemas de falta de
integridade dos dados era necessário desenvolver programas complexos para responder a uma
simples consulta.

Assim, houve uma boa aceitação dos usuários e da comunidade acadêmica, devido a simplicidade
e praticidade do modelo relacional e o seu embasamento teórico, que engloba conceitos como as
propriedades de atomicidade, consistência, isolamento e durabilidade das transações. Por outro
lado, há um trade-off: se todas as transações precisarem ser confirmadas e verificadas quanto à
consistência, bancos de dados serão lentos na leitura e gravação de dados.

Além disso, eles exigem mais esforço para armazenar novos dados em novos formatos. Na química,
a base (BASE) é o oposto do ácido (ACID). Aqui é semelhante: o BASE oferece vários benefícios
em relação aos bancos de dados compatíveis com ACID, pois eles se concentram mais
intensamente na disponibilidade de dados de sistemas de banco de dados sem garantia de
segurança contra falhas ou inconsistências de rede. Vamos ver um pouco melhor os dois:

ACID (Atomicity, Consistency, Isolation, Durability) é um conjunto de propriedades que as transações
do banco de dados devem seguir para garantir a integridade/confiabilidade dos dados.

  Propriedades acid                                         descrição
                      Requer que todas as operações de banco de dados que formam uma transação sejam todas
       Atomicidade
                      bem-sucedidas ou todas falhem.
                      Requer que qualquer transação leve o banco de dados de um estado válido para outro.
       Consistência
                      Garante que a execução simultânea de transações não afete os resultados de nenhuma das
        Isolamento
                      transações.
                      Afirma que os resultados de uma transação devem persistir mesmo se o sistema falhar.
       durabilidade


---

De acordo com o livro Geomar André Schreiner (Banco de Dados para Big Data), as propriedades
de transações ACID tornam o trabalho do desenvolvedor de aplicações muito mais simples. No
entanto, apesar de muito desejáveis, essas propriedades criam dificuldades ao se distribuir o
banco de dados. Quando um banco de dados relacional cresce além da capacidade de um único
nó, é preciso se optar por escalabilidade vertical ou horizontal.

A escalabilidade vertical não é uma opção para sistemas que lidam com grandes volumes de
dados. Assim, a opção é escalar horizontalmente, e nesse caso há duas formas de se particionar os
dados. A primeira é o particionamento funcional, que consiste em distribuir as tabelas pelos nós de
acordo com as funcionalidades do sistema que elas atendem, por exemplo, um nó pode conter as
tabelas relacionadas a usuários e outro pode conter as tabelas relacionadas à cobrança.

O segundo tipo, chamado sharding, ocorre quando uma tabela está dividida em mais de um nó.
Quando essa técnica é utilizada, os dados são espalhados por nós de acordo com um critério
arbitrário qualquer, como a inicial do nome do usuário em uma tabela de usuários, por exemplo. Ao
se aplicar sharding em um banco de dados, mesmo com a falha de um nó, o sistema continua
funcionando para todas as operações que não dependam dos dados contidos naquele nó.

A desvantagem dessa estratégia é que o banco de dados perde parte da sua capacidade de lidar
com restrições dos dados, além de não serem mais capazes de realizar joins transparentemente.
Com isso, os bancos de dados relacionais deixam de oferecer algumas de suas principais
funcionalidades para o desenvolvedor de aplicações, que passa a ter que fazer esses
tratamentos no nível da aplicação.

Partições de rede são raras, mas ocorrem de tempos em tempos em sistemas largamente
distribuídos (sistemas distribuídos por vários datacenters, por exemplo). A partir dessa
constatação, para essa categoria de sistemas, é necessário escolher entre disponibilidade e
consistência. Dada a natureza das aplicações Web 2.0, elas costumam optar por disponibilidade
quando for possível tolerar alguma inconsistência temporária. Aí é que entra o BASE!

BASE (Basically Available, Soft State, Eventually Consistent): trata-se de um conjunto de
propriedades utilizadas em bancos de dados não relacionais de sistemas distribuídos. Ele significa
Basicamente Disponível, Estado Suave e Eventualmente Consistente, mas o termo não descreve
exatamente as propriedades como as definidas pelo ACID – ele apenas indica que se deve planejar
sistemas de forma a tolerar inconsistências temporárias quando se quer priorizar disponibilidade.

  Propriedades base                                           descrição
       Basicamente    Significa que o sistema sempre aceitará solicitações, mesmo que não seja capaz de processá-
         disponível   las imediatamente.
            Estado    Significa que o sistema não precisa manter um estado constante e pode eventualmente
             suave    convergir para um estado consistente.


---

Eventualmente Significa que o sistema pode não responder a uma solicitação imediatamente, mas
   consistente eventualmente convergirá para um estado consistente.


---

Teorema CAP
                                                                                        INCIDÊNCIA EM PROVA: baixíssima

Uma vez introduzidos os modelos de dados NoSQL, muitos são induzidos a pensar que a proposta
desses novos sistemas de bancos de dados vem em substituição aos baseados no Modelo
Relacional. Porém, é de extrema importância mencionar que os bancos de dados NoSQL vêm para
solucionar uma nova e diferente demanda de necessidades de manipulação de dados. Cada modelo
NoSQL trata os dados de maneira pontual e não devem ser usados indistintamente.

Baseado nesses estudos foi desenvolvida uma teoria conhecida como Teorema CAP (sigla em
inglês para Consistency, Availability, Partition Tolerance). Nesse teorema, é admitida a
inviabilidade de que um sistema de computação possa oferecer a consistência, disponibilidade e
tolerância de partição ao mesmo tempo em um dado momento, sendo apenas possível a garantia
de duas das propriedades por vez. Atenção a esse ponto...

As estratégias de manipulação de dados dos bancos de dados tentam englobar três conceitos
fundamentais. Vejamos...

     CARACTERÍSTICA                                           descrição
                     Significa que todos os clientes veem os mesmos dados ao mesmo tempo, não importa em
                     qual nó eles se conectem. Para que isso aconteça, sempre que os dados forem gravados em
        Consistência
                     um nó, ele deve ser instantaneamente encaminhado ou replicado para todos os outros nós
                     do sistema antes que a gravação seja considerada "bem-sucedida".
                     Significa que qualquer cliente que fizer uma solicitação de dados obterá uma resposta,
     Disponibilidade mesmo que um ou mais nós estejam desativados. Ou seja, todos os nós em funcionamento
                     no sistema distribuído retornam uma resposta válida para qualquer solicitação, sem exceção.

                      A partição é uma quebra de comunicações dentro de um sistema distribuído, uma conexão
      Tolerância de perdida ou temporariamente lenta entre dois nós. Tolerância de partição significa que o
    partição (falha) cluster deve continuar a funcionar mesmo de ocorrer uma ou mais falhas de comunicação
                      entre os nós no sistema.


Ao longo dos anos, os sistemas computacionais funcionavam em sua maioria em ambientes únicos
(ou distribuídos em poucos servidores). Além disso, esses sistemas tratavam de dados quantitativos
dos quais situações como dois usuários obterem valores diferentes para a mesma informação não
poderia ser admitida em hipótese alguma. A garantia de que as informações não sofreriam
mutações era mais relevante do que o prejuízo da queda do sistema por uma eventual falha.

Os sistemas de bancos de dados NoSQL que vêm como soluções para as novas demandas de
problemas, assumem posturas diferentes para resolverem os problemas propostos. Enquanto os
sistemas de bancos de dados relacionais seguem os padrões do modelo relacional, no domínio
NoSQL é possível perceber que mesmo ferramentas pertencentes a modelos de dados
semelhantes podem oferecer princípios diferentes.


---

Algumas soluções de sistemas gerenciadores de banco de dados orientados a chave valor aplicam
um maior esforço para garantir a disponibilidade (CAP) sobre as requisições recebidas e a tolerância
de partição (CAP) em casos de problemas. Um exemplo de implementação dessa abordagem seria
o SGBD DynamoDB – ele é geralmente utilizado com aplicações que precisam estar disponíveis em
tempo oportuno.

Em muitos casos, bancos de dados distribuídos sacrificam a consistência, permitindo que as
transações ocorram e que a sincronização dos dados venha a ser estabelecida em um momento
posterior. Outra vertente do modelo chave-valor (Ex: Redis) está focada em oferecer alta
consistência (CAP) e tolerância de partição (CAP). Essa perspectiva faz com que um sistema
particionado possa suspender a escrita em um de seus nós caso haja um conflito.

Isso garante o funcionamento da aplicação e evita inconsistências. Se dentro do mesmo modelo
de dados os sistemas NoSQL podem divergir de tal forma, pondo em perspectiva modelos
diferentes, essas mudanças são ainda maiores. Atualmente, os sistemas de bancos de dados
NoSQL são classificados com base nas duas características do CAP que oferecem. Vejamos abaixo
a descrição desses tipos junto com o diagrama que representa o Teorema CAP:

    Bancos de dados                                        descrição
                    Entrega consistência e tolerância de partição em detrimento da disponibilidade. Quando
     Banco de dados uma partição ocorre entre dois nós quaisquer, o sistema deverá desativar o nó não
                    consistente (ou seja, torná-lo indisponível) até que a partição seja resolvida.
                cp

     Banco de dados Entrega disponibilidade e tolerância de partição em detrimento da consistência. Quando
                 ap ocorre uma partição, todos os nós permanecem disponíveis, exceto aqueles na extremidade


---

                    errada de uma partição podem retornar uma versão mais antiga de dados do que outros.
                    Quando a partição é resolvida, os bancos de dados AP geralmente ressincronizam os nós
                    para corrigir todas as inconsistências no sistema.
                    Entrega consistência e disponibilidade em todos os nós. Porém, isso não é possível se houver
     Banco de dados uma partição entre dois nós quaisquer no sistema, no entanto, e, portanto, não poderá
                    entregar tolerância a falhas.
                 ca

Atenção: em um sistema distribuído, partições não podem ser evitadas. Por isso, enquanto
podemos discutir um banco de dados distribuído CA em teoria, para todos os efeitos práticos, um
banco de dados distribuído CA não pode existir. No entanto, isso não significa que você não pode
ter um banco de dados CA para a sua aplicação distribuída se você precisar de um. Muitos bancos
de dados relacionais, como o PostgreSQL, entregam consistência e disponibilidade e podem ser
implementados em múltiplos nós usando replicação.


---

Arquitetura de Big Data
                                                                           INCIDÊNCIA EM PROVA: baixíssima

Uma arquitetura de Big Data é projetada para lidar com a ingestão (consumo), processamento
e análise de dados que são muito grandes ou complexos para sistemas de banco de dados
tradicionais. O limite no qual as organizações entram no domínio do Big Data é diferente,
dependendo dos recursos dos usuários e de suas ferramentas. Para alguns, pode significar centenas
de gigabytes de dados, enquanto para outros significa centenas de terabytes.

À medida que as ferramentas para trabalhar com grandes conjuntos de dados avançam, o mesmo
acontece com o significado de Big Data. Cada vez mais, esse termo se relaciona com o valor que
você pode extrair de seus conjuntos de dados por meio de análises avançadas, em vez de
estritamente o tamanho dos dados, embora nesses casos eles tendam a ser bem grandes. Ao longo
dos anos, o que você pode fazer, ou espera-se que faça, com os dados mudou.

O custo do armazenamento caiu drasticamente, enquanto os meios pelos quais os dados são
coletados continuam crescendo. Alguns dados chegam em ritmo acelerado, exigindo
constantemente serem coletados e observados. Outros dados chegam mais lentamente, mas em
pedaços muito grandes, muitas vezes na forma de décadas de dados históricos. Você pode estar
enfrentando um problema de análise avançada ou um que exija aprendizado de máquina.

Esses são desafios que as arquiteturas de Big Data buscam resolver. As soluções de Big Data
geralmente envolvem um ou mais dos seguintes tipos de carga de trabalho: processamento em
lote de fontes de Big Data em repouso; processamento em tempo real de Big Data em
movimento; exploração interativa de Big Data; análise preditiva e aprendizado de máquina.
Considere arquiteturas de big data quando precisar:

 Armazenar e processar dados em volumes muito grandes para um banco de dados tradicional.
 Transformar dados não estruturados para análise e emissão de relatórios.
 Capturar, processar e analisar fluxos ilimitados de dados em tempo real ou com baixa latência.


---

O diagrama anterior mostra os componentes lógicos que se encaixam em uma arquitetura de Big
Data1. A maioria das arquiteturas de Big Data inclui alguns ou todos os seguintes componentes:

       COMPONENTES                                                        DESCRIÇÃO
                    Todas as soluções de big data começam com uma ou mais fontes de dados, tais como:
                    armazenamentos de dados de aplicações, como bancos de dados relacionais; arquivos estáticos
    Fontes de Dados produzidos por aplicações, como arquivos de log do servidor web; fontes de dados em tempo
                    real, como dispositivos IoT.

                  Os dados para operações de processamento em lote geralmente são armazenados em um
                  armazenamento de arquivos distribuído que pode conter grandes volumes de arquivos grandes
                  em vários formatos estruturados ou não – esse tipo de armazenamento geralmente é chamado
    Armazenamento de Data Lake.
             de dados
                          As opções para implementar esse armazenamento incluem o Repositório Azure Data Lake ou
                          contêineres de BLOB no Armazenamento do Azure.

                   Como os conjuntos de dados são gigantescos, geralmente uma solução de Big Data deve
                   processar arquivos de dados em lote de longa duração para filtrar, agregar e, de outra forma,
                   preparar os dados para análise. Normalmente, esses trabalhos envolvem a leitura de arquivos de
     Processamento origem, processá-los e gravar a saída em novos arquivos.
              em Lote As opções incluem a execução de trabalhos U-SQL no Azure Data Lake Analytics, o uso de
                          trabalhos Hive, Pig ou Map/Reduce personalizados em um cluster Hadoop do HDInsight ou o uso
                          de programas Java, Scala ou Python em um cluster HDInsight Spark.

                    Se a solução incluir fontes em tempo real (real-time), a arquitetura deverá incluir uma maneira
                    de capturar e armazenar mensagens online para processamento de fluxo. Isso pode ser um
                    armazenamento de dados simples, onde as mensagens de entrada são descartadas em uma
                    pasta para processamento. No entanto, muitas soluções precisam de um armazenamento de
        Ingestão de ingestão (consumo) de mensagens para atuar como um buffer para mensagens e para oferecer
      mensagens em suporte ao processamento de expansão, entrega confiável e outras semânticas de
         tempo real enfileiramento de mensagens. Essa parte de uma arquitetura de streaming é geralmente
                    chamada de buffer de fluxo.

                          As opções incluem Hubs de Eventos do Azure, Hub IoT do Azure e Kafka.

                          Depois de capturar mensagens em tempo real, a solução deve processá-las, filtrando, agregando
                          e preparando os dados para análise – os dados de fluxo processados são gravados em um coletor
                          de saída.
     Processamento
           em Fluxo O Azure Stream Analytics fornece um serviço de processamento de fluxo gerenciado com base
                          em consultas SQL em execução perpétua que operam em fluxos ilimitados. Você também pode
                          usar tecnologias de streaming Apache de código aberto, como Storm e Spark Streaming, em um
                          cluster HDInsight.

1
    Soluções individuais podem não conter todos os itens deste diagrama


---

                Muitas soluções de Big Data preparam dados para análise e, em seguida, servem os dados
                processados em um formato estruturado que pode ser consultado usando ferramentas
                analíticas.

                O armazenamento de dados analíticos usado para atender a essas consultas pode ser em um
Armazenamento Data Warehouse Relacional no estilo Kimball ou, como alternativa, os dados podem ser
      de Dados apresentados por meio de uma tecnologia NoSQL de baixa latência, como o HBase, ou um banco
    Analíticos de dados Hive interativo que fornece uma abstração de metadados sobre arquivos de dados no
                armazenamento de dados distribuído. O Azure Synapse Analytics fornece um serviço
                gerenciado para Data Warehouse baseado em nuvem em larga escala. O HDInsight oferece
                suporte ao Interactive Hive, HBase e Spark SQL, que também podem ser usados para fornecer
                dados para análise.

                O objetivo da maioria das soluções de big data é fornecer insights sobre os dados por meio de
                análises e relatórios.

                Para capacitar os usuários a analisar os dados, a arquitetura pode incluir uma camada de
                modelagem de dados, como um cubo OLAP multidimensional ou um modelo de dados tabular
      Análise e no Azure Analysis Services. Ele também pode oferecer suporte a BI de autoatendimento, usando
                as tecnologias de modelagem e visualização no Microsoft Power BI ou no Microsoft Excel. A
    Relatórios análise e os relatórios também podem assumir a forma de exploração interativa de dados por
                cientistas de dados ou analistas de dados. Para esses cenários, muitos serviços do Azure dão
                suporte a blocos de anotações analíticos, como o Jupyter, permitindo que esses usuários
                aproveitem suas habilidades existentes com Python ou R. Para exploração de dados em larga
                escala, você pode usar o Microsoft R Server, autônomo ou com o Spark.

                A maioria das soluções de big data consiste em operações repetidas de processamento de dados,
                encapsuladas em fluxos de trabalho, que transformam dados de origem, movem dados entre
                várias fontes e coletores, carregam os dados processados em um armazenamento de dados
                analíticos ou enviam os resultados diretamente para um relatório ou painel.
 Orquestração
                Para automatizar esses fluxos de trabalho, você pode usar uma tecnologia de orquestração,
                como o Azure Data Factory ou o Apache Oozie e o Sqoop.

Arquitetura Lambda


---

Ao trabalhar com conjuntos de dados muito grandes, pode-se levar muito tempo para executar o
tipo de consultas de que os clientes precisam. Essas consultas não podem ser executadas em tempo
real e geralmente exigem algoritmos como o MapReduce, que operam em paralelo em todo o
conjunto de dados. Os resultados são, então, armazenados separadamente dos dados brutos e
usados para consulta.

Uma desvantagem dessa abordagem é que ela introduz latência: se o processamento levar
algumas horas, uma consulta poderá retornar resultados com várias horas. Idealmente, obtêm-se
alguns resultados em tempo real (talvez com alguma perda de precisão) e combinam-se esses
resultados com os resultados da análise em lote. A arquitetura lambda aborda esse problema
criando dois caminhos para o fluxo de dados em que passam todos os dados que entram no sistema:

                 Responsável por armazenar e processar todos os dados do sistema em sua forma bruta. Trata-se
     Camada de   de um armazenamento distribuído, tolerante a falhas, imutável (append-only) que armazena
                 todos os dados no sistema, incluindo dados históricos – o resultado é armazenado como uma
          LOTE   exibição em lote. Ele é usado para gerar um conjunto de dados mestre atualizado que pode ser
                 consultado pelas camadas de velocidade e serviço.
                 Responsável por processar pequenos fluxos de dados e consultas em tempo real. Essa camada é
    Camada de    responsável por fornecer acesso quase em tempo real aos dados usando tecnologias de
                 processamento de fluxo. Ela é normalmente usada para processar eventos à medida que ocorrem
    VELOCIDADE   e disponibilizar os resultados para consulta ou análise. Por fim, pode-se afirmar que ela reduz a
                 latência em detrimento da precisão dos dados.
                 Responsável por fornecer acesso de baixa latência às visualizações de dados pré-processadas
     Camada de   para realização de consultas mais eficientes. É a camada que fornece os resultados da consulta
                 aos consumidores de dados. Ela é normalmente um sistema somente leitura que responde com
       SERVIÇO   eficiência às consultas. As tecnologias comuns usadas nas camadas de serviço são índices de
                 pesquisa, caches distribuídos e bancos de dados na memória.


---

Conforme é possível ver no diagrama apresentado, a camada de lote alimenta uma camada de
serviço que indexa a exibição em lote para consultas eficientes. A camada de velocidade atualiza
a camada de serviço com atualizações incrementais com base nos dados mais recentes. Os dados
que fluem para o caminho quente são limitados pelos requisitos de latência impostos pela camada
de velocidade, para que possam ser processados o mais rápido possível.

Muitas vezes, isso requer uma troca de algum nível de precisão em favor de dados que estejam
prontos o mais rápido possível. Por exemplo: considere um cenário de IoT (Internet of Things ou
Internet das Coisas) em que um grande número de sensores de temperatura está enviando dados
de telemetria. A camada de velocidade pode ser usada para processar os dados recebidos pelo
caminho quente (hot path).

Por outro lado, os dados que fluem para o caminho frio (cold path) não estão sujeitos aos mesmos
requisitos de baixa latência. Isso permite a computação de alta precisão em grandes conjuntos de
dados, o que pode consumir muito tempo. Eventualmente, os caminhos quentes e frios convergem
para a aplicação cliente de análise. Se o cliente precisar exibir dados oportunos, mas
potencialmente menos precisos em tempo real, ele adquirirá seu resultado do caminho quente.

Caso contrário, ele selecionará os resultados do caminho frio para exibir dados menos oportunos,
mas mais precisos. Em outras palavras, o caminho quente tem dados para uma janela de tempo
relativamente pequena, após a qual os resultados podem ser atualizados com dados mais precisos
do caminho frio. Os dados brutos armazenados na camada de lote são imutáveis. Dados de
entrada são sempre acrescentados aos dados existentes e dados anteriores nunca são substituídos.

Quaisquer alterações no valor de um dado específico são armazenadas como um novo registro de
evento com carimbo de data/hora. Isso permite o recálculo a qualquer momento ao longo do
histórico dos dados coletados. A capacidade de recalcular a exibição em lote a partir dos dados
brutos originais é importante, pois permite que novas exibições sejam criadas à medida que o
sistema evolui. Uma outra forma de visualizar a Arquitetura Lambda:


---

Arquitetura Kappa

Uma desvantagem da arquitetura lambda é a sua complexidade. A lógica de processamento
aparece em dois lugares diferentes — os caminhos frios e quentes — usando estruturas diferentes.
Isso leva à lógica de computação duplicada e à complexidade do gerenciamento da arquitetura para
ambos os caminhos. É nesse momento que surge a Arquitetura Kappa: proposta por Jay Kreps, é
como uma alternativa à arquitetura lambda.

Ela tem os mesmos objetivos básicos que a arquitetura lambda, mas com uma distinção
importante: todos os dados fluem através de um único caminho, usando um sistema de
processamento de fluxo. Existem algumas semelhanças com a camada de lote da arquitetura
lambda, na medida em que os dados do evento são imutáveis e todos eles são coletados, em vez de
um subconjunto. No entanto, ela não realiza processamento em lote (batch).

Os dados são consumidos como um fluxo de eventos em um log unificado distribuído e tolerante a
falhas. Esses eventos são ordenados e o estado atual de um evento é alterado somente por um novo
evento que esteja sendo acrescentado. Semelhante à camada de velocidade de uma arquitetura
lambda, todo o processamento de eventos é executado no fluxo de entrada e persiste como
uma exibição em tempo real.


---

Para recalcular todo o conjunto de dados (como a camada de lote faz no lambda), basta reproduzir
o fluxo, normalmente usando paralelismo para concluir a computação em tempo hábil. A
arquitetura Kappa veio para resolver alguns problemas da Arquitetura Lambda por meio da
eliminação da Camada de Lote (Batch). Essa camada, diferentemente da camada de lote, não tem
começo nem fim do ponto de vista temporal.

Ela está continuamente processando novos dados à medida que chegam. Como um processo
em lote pode ser entendido como um fluxo (streaming) limitado, poderíamos dizer que o
processamento em lote é um subconjunto do processamento de streaming. Essa evolução consiste
em uma simplificação da Arquitetura Lambda, que dá suporte tanto ao processamento batch
quanto ao processamento em tempo real. Uma outra forma de visualizar a Arquitetura Kappa:

A Arquitetura Lambda é mais adequada para tarefas que podem lidar com atrasos e não exigem
processamento em tempo real, enquanto a Arquitetura Kappa é mais adequada para tarefas
que exigem processamento em tempo real. Além disso, com diferentes camadas na Arquitetura
Lambda (Speed Layer, Batch Layer e Presentation Layer), você precisa usar diferentes ferramentas
e linguagens de programação.

Isso leva à complexidade do código e ao risco de você acabar tendo versões inconsistentes de seus
recursos de processamento. Uma alteração na lógica em uma camada também requer alterações
na outra camada. A complexidade é algo que queremos remover de nossa arquitetura em todos os
momentos – inclusive no processamento de dados. Já a Arquitetura Kappa veio com a promessa
de colocar tudo em um único sistema: o Apache Kafka.


---

A velocidade com que os dados podem ser processados é tremenda e a simplicidade é maior.
Você só precisa alterar o código uma vez e diversas em comparação com o Lambda. Isso também
leva a custos de mão-de-obra mais baratos, já que menos pessoas são necessárias para manter e
produzir código. Além disso, todos os nossos dados estão disponíveis rapidamente, sem grandes
atrasos, como acontece com o processamento em lote.

Arquitetura IoT

Do ponto de vista prático, a Internet das Coisas (IoT) representa qualquer dispositivo conectado
à Internet. Isso inclui seu PC, telefone celular, relógio inteligente, termostato inteligente, geladeira
inteligente, automóvel conectado, implantes de monitoramento cardíaco e qualquer outra coisa
que se conecte à Internet e envie ou receba dados. O número de dispositivos conectados cresce a
cada dia, assim como a quantidade de dados coletados deles.

Muitas vezes, esses dados estão sendo coletados em ambientes altamente restritos, às vezes de
alta latência. Em outros casos, os dados são enviados de ambientes de baixa latência por milhares
ou milhões de dispositivos, exigindo a capacidade de consumir rapidamente os dados e processá-
los de acordo. Logo, o planejamento adequado é necessário para lidar com essas restrições e
requisitos exclusivos. As arquiteturas orientadas a eventos são fundamentais para soluções de IoT.

O diagrama a seguir mostra uma possível arquitetura lógica para IoT e enfatiza os componentes de
fluxo de eventos da arquitetura:

O gateway de nuvem consome eventos de dispositivo no limite da nuvem, usando um sistema de
mensagens confiável e de baixa latência. Os dispositivos podem enviar eventos diretamente para
o gateway de nuvem ou por meio de um gateway de campo. Um gateway de campo é um
dispositivo ou um software especializado, geralmente colocado com os dispositivos, que recebe
eventos e os encaminha para o gateway de nuvem.


---

O gateway de campo também pode pré-processar os eventos brutos do dispositivo,
executando funções como filtragem, agregação ou transformação de protocolo. Após a
ingestão (consumo), os eventos passam por um ou mais processadores de fluxo que podem rotear
os dados (por exemplo, para o armazenamento) ou executar análises e outros processamentos. A
seguir estão alguns tipos comuns de processamento:

 Gravação de dados de eventos no armazenamento a frio, para arquivamento ou análise em lote.

 Análise de caminho quente, analisando o fluxo de eventos em (quase) tempo real, para detectar
  anomalias, reconhecer padrões ao longo de janelas de tempo de rolagem ou acionar alertas
  quando uma condição específica ocorre no fluxo.

 Manipulação de tipos especiais de mensagens não telemétricas de dispositivos, como
  notificações e alarmes.

 Aprendizado de máquina.

As caixas cinzas no diagrama mostram componentes de um sistema IoT que não estão diretamente
relacionados ao streaming de eventos, mas estão incluídos aqui para uma representação completa.

 O registro do dispositivo é um banco de dados dos dispositivos provisionados, incluindo as IDs
  do dispositivo e, geralmente, os metadados do dispositivo, como a localização.

 A API de provisionamento é uma interface externa comum para provisionamento e registro de
  novos dispositivos.

 Algumas soluções de IoT permitem que mensagens de comando e controle sejam enviadas para
  dispositivos.


---

Hadoop/MapReduce
                                                                            INCIDÊNCIA EM PROVA: baixa

Esse é um assunto um pouquinho complexo, portanto eu vou explicá-lo com algumas metáforas
para que vocês não esqueçam. Em 2004, o Google publicou um artigo chamado MapReduce:
Processamento Simplificado de Dados em Grandes Clusters. De acordo com os autores, tratava-
se de um modelo de programação e uma implementação associada para processamento e
geração de grandes conjuntos de dados. Vamos começar com as metáforas...

Antigamente, havia uma ideia de que, quanto mais dados eram armazenados e processados por
uma organização, maior era a necessidade de aquisição de computadores maiores e mais potentes.
O MapReduce surgiu porque algumas organizações começaram a perceber que, quando você
começava a armazenar quantidades gigantescas de dados, obter computadores maiores e mais
rápidos não funcionava mais.

A não ser que a organização possua o computador do Homem de Ferro (que tem uma capacidade
computacional infinita), chega um momento para todos os mortais em que não adianta comprar
mais memória, processador, armazenamento para o computador. Por que? Porque isso não é
muito escalável – por melhor que seja, um computador tem o seu limite! E há alguma maneira
ter uma escalabilidade maior? Claro que há! Vamos ver como funciona...

Alguns problemas computacionais podem ser resolvidos com muita facilidade dividindo os
dados em blocos menores (é o famoso Dividir para Conquistar)! Como assim, Diego? Vamos supor


---

que você está tentando encontrar o maior número em uma lista com cem milhões de números. Uma
maneira seria comprar um único computador bem potente para verificar número por número até
encontrar qual é o maior número da lista.

Se esse computador poderoso tem a capacidade de verificar que possa olhar através de um milhão
de números por hora, ele precisará – portanto – de 100 horas (+- 4 dias) para verificar todos os cem
milhões de números. Agora, se você dividir essa lista em cem partes e as entregar para 100
computadores, cada computador pesquisará em uma lista de apenas 1 milhão de números e
poderá encontrar o maior número dessa lista em 1 hora.

Após cada computador encontrar seu maior número, bastam alguns segundos para encontrar o
maior dentre esses cem números. Logo, o trabalho que foi realizado em cerca de quatro dias por
um único computador poderá ser finalizado em cerca de uma hora pelos cem computadores. O
processo de decomposição dos dados é chamado de Mapeamento (Map); e o processo de
consolidação do resultado dos mapeamentos é chamado de Redução (Reduce).

O MapReduce é um modelo de programação que permite reduzir problemas grandes em
problemas menores, mapeando cada subproblema para máquinas diferentes (ou processadores
diferentes de uma mesma máquina) e, em seguida, reduzindo cada resposta intermediária à única
resposta final que você está procurando. Um excelente exemplo para que vocês nunca esqueçam é
o site de questões do Estratégia Concursos. Atualmente, ele possui um bocadinho de questões...

Ainda nesse semestre, será disponibilizada a funcionalidade que permite fazer buscas por palavras
em todas essas questões. Vocês já imaginaram a complexidade do problema de fazer uma busca
textual em mais de dois milhões de questões? Pois é, mas vocês já sabem que uma maneira de
resolver problemas complexos é dividindo-o em vários problemas menores (inclusive, isso vale
para tudo na vida). Vejamos...

Quando eu pesquisar por “MapReduce” em nosso sistema, ele retornará todas as questões que
contenham essa palavra. Se um único computador fosse responsável por realizar essa busca,
demoraríamos muito! Uma forma de resolver esse problema é dividir a busca em diversos
computadores diferentes trabalhando paralelamente (Ex: Computador 1 buscará em questões
do CESPE; Computador 2 buscará em questões da FCC; e assim por diante).

Após cada computador chegar ao seu resultado, pode-se consolidar os resultados individuais em
um único resultado global que contenha todas as questões encontradas com essa palavra. Como
último exemplo, vamos ver o clássico do sanduíche! Para fazer uma grande quantidade de
sanduíches em uma franquia de fast-food, cada funcionário pode ser responsável por escolher
um ingrediente e cortá-lo (processo de mapeamento).


---

                                                                    Após todos os ingredientes estarem
                                                                    cortados, outro funcionário pode ser
                                                                    responsável por juntá-los em um único
                                                                    sanduíche (processo de redução). A
                                                                    imagem ao lado representa toda a ideia que
                                                                    vimos nessa página (coitado do porquinho).
                                                                    Bem, agora eu pergunto: será que essa
                                                                    técnica é útil para Big Data? Ora, evidente
                                                                    que sim! Um dos problemas do Big Data é
                                                                    justamente a dificuldade de processar
                                                                    uma quantidade massiva de dados.

Legal... nós vimos um bocado de metáforas, mas agora temos que ver alguns termos técnicos. O
MapReduce é considerado um modelo de programação que permite o processamento de dados
massivos em um algoritmo paralelo e distribuído (em clusters). A etapa de mapeamento se baseia
em uma combinação de chave-valor. Como assim, Diego? Voltemos ao exemplo do sistema de
questões: a chave escolhida foi Banca e o valor é o Nome da Banca em si.

- Mapeamento (Chave, Valor)  Mapeamento (Banca, CESPE); Mapeamento (Banca, FCC); mapeamento (Banca; FGV) . . .

Professor, eu poderia escolher outra chave? Claro que sim! Nós poderíamos ter escolhido, por
exemplo, matéria, ano, dificuldade, entre outros. Vejamos:

1. Mapeamento (Chave, Valor)  Mapeamento (matéria, informática); Mapeamento (matéria, português) . . .

2. Mapeamento (Chave, Valor)  Mapeamento (ano, 2020); Mapeamento (ano, 2019); mapeamento (ano; 2018) . . .

3. Mapeamento (Chave, Valor)  Mapeamento (dificuldade, fácil); Mapeamento (dificuldade, difícil); . . .

Já a etapa de redução é responsável por consolidar os resultados de cada mapeamento,
gerando um resultado agregado. E o tal do Hadoop, Diego? Apache Hadoop é apenas uma das
implementações da técnica de MapReduce – existem outras implementações, mas essa é a mais


---

famosa! Em outras palavras, ele é um software de código aberto, implementado na linguagem de
programação Java, para implementar o algoritmo de MapReduce em máquinas comuns.

Na verdade, ele é mais do que um software – ele é uma plataforma, um framework, um ecossistema
de computação distribuída orientada a clusters e voltado para armazenamento e processamento
de grandes volumes de dados, com alta escalabilidade, grande confiabilidade e tolerância a
falhas. Ele é responsável por todo gerenciamento do cluster, não sendo necessário configurar
máquinas individualmente.

Em implementações de Big Data, temos uma arquitetura baseada em dois componentes principais:
armazenamento de dados e processamento paralelo. No Hadoop, o armazenamento distribuído
de dados é tratado pelo HDFS (Hadoop File System2) e o processamento paralelo de dados é
tratado pelo MapReduce. Em suma, podemos dizer que o Hadoop é uma combinação do
MapReduce e do HDFS (que foi inspirado no GoogleFS – Google FileSystem).


       (Polícia Federal – 2018) MapReduce permite o processamento de dados massivos
       usando um algoritmo paralelo mas não distribuído.
       _______________________
       Comentários: na verdade, ele é um modelo de programação que permite o processamento de dados massivos em um algoritmo
       escalável, paralelo e distribuído, geralmente utilizando um cluster de computadores (Errado).

       (ANAC – 2016) Para o processamento de grandes massas de dados, no contexto de Big
       Data, é muito utilizada uma plataforma de software em Java, de computação distribuída,
       voltada para clusters, inspirada no MapReduce e no GoogleFS. Esta plataforma é o(a):

       a) Yam Common       b) GoogleCrush                               c) EMRx            d) Hadoop                e) MapFix.
       _______________________
       Comentários: essa plataforma é também chamada de Hadoop – nenhuma das outras opções existem! (Letra D).

2
 HDFS é um sistema de arquivos (forma de organização de dados em um meio de armazenamento em massa) criado para armazenar arquivos muito
grandes de forma distribuída. O conceito sobre o qual o HDFS foi construído é o chamado write-once, read-many-times, ou seja, escreva uma
vez, leia muitas vezes. Esse tipo de construção é essencial para o Hadoop, uma vez que os dados serão processados inúmeras vezes, dependendo
da aplicação, embora, normalmente, sejam escritos apenas uma vez. Esse tipo de construção faz com que seja desaconselhável a modificação de
arquivos, pois acaba gerando muita sobrecarga.


---

De acordo com César Taurion, a comunidade Apache mantém diversos projetos relacionados ao
Hadoop, como o Hbase, que é um banco de dados NoSQL que trabalha em cima do HDFS. Este
banco de dados é usado pelo Facebook para suportar seu sistema de mensagens e os seus serviços
de informações analíticas em tempo real. Existe também o Hive, criado pelo Facebook, que é
uma camada de data warehouse que roda em cima do Hadoop.

Utiliza uma linguagem chamada Hive SQL, similar à SQL, o que facilita sua utilização, pois
desenvolvedores acostumados com SQL não encontram maiores dificuldades em trabalhar com o
Hibe SQL. Um outro e também muito interessante projeto é o Pig, criado pelo Yahoo. É uma
plataforma que permite análises de arquivos muito grandes usando uma linguagem de alto
nível chamada Pig Latin.

Olhando-se o stack de softwares do Hadoop, o Pig se situa entre o Hive e o HMR e é uma tentativa
de fornecer uma linguagem de alto nível para se trabalhar com o Hadoop. Outros projetos menos
conhecidos são o Avro (sistema de serialização de dados), o Chukwa (monitoramento de sistemas
distribuídos) e o Hama (para computações científicas massivas). O quadro a seguir mostra as
camadas funcionais do Hadoop e seus principais subprojetos de acordo com a Forrester Research:

                                   CAMADA FUNCIONAL                          Exemplos
                       Modelagem e Desenvolvimento      MapReduce, Pig e Mahout.
                   Armazenamento e Gestão de Dados      HDFS, HBase e Cassandra.
                          Data Warehousing e Queries    Hive e Sqoop.
                 Coleta, Agregação e Análise de Dados   Chukwa e Flume.
                       Metadados, Tabela e Esquemas     HCatalog.
       Cluster Management, Job Scheduling e Worflow     Zookeeper, Oozie e Ambari.
                               Serialização de Dados    Avro.


---

Inteligência Artificial
                                                                                  INCIDÊNCIA EM PROVA: baixa

Galera, um dos problemas do Big Data é que ele é... muito grande! No passado, as pessoas
tentavam evitar formatos como imagens, vídeo ou voz porque não podiam fazer muita coisa com
eles e seu custo de armazenamento era alto. Hoje em dia, esse custo foi reduzido
substancialmente e já existem tecnologias capazes de manipular uma quantidade absurda com
eficiência. Do que você está falando, Diego?

Atualmente, tem sido cada vez mais comum a vigilância por vídeo em todos os lugares. Pensem em
100 câmeras operando 24 horas por dia, 7 dias por semana, 365 dias por ano. Isso resulta em um
total de 2400 horas de vídeo por dia. Se um ser humano fosse revisar esses dados em busca de
eventuais atividades suspeitas, por exemplo, seria necessária uma equipe de 60 pessoas – e isso
simplesmente não vale a pena economicamente.

É nesse ponto que a Inteligência Artificial e o Big Data trabalham juntos! Uma maneira de lidar de
forma eficiente com essa quantidade de dados é gerenciá-los com uma varredura de dados e
utilizar algoritmos de software de Inteligência Artificial. Vocês se lembram do Big Data Analytics?
Pois é, ele comumente utiliza ferramentas de Inteligência Artificial para ajudar a analisar e
compreender uma quantidade massiva de dados.

Vejam como eles se complementam bem: Big Data lida com uma quantidade absurda de dados!
Agora adivinhem quem se dá super bem quando possui uma quantidade absurda de dados? A
Inteligência Artificial! Quanto mais dados ela possuir, mais “inteligente” será! Essa combinação
está ajudando as organizações a entenderem seus clientes muito melhor – até mesmo de
maneiras que eram impossíveis no passado.

O Big Data, por si só, é inútil sem uma ferramenta para analisar os dados e humanos não
conseguem fazer isso de forma eficiente. A Inteligência Artificial pode ser extremamente útil para
detectar anomalias, para calcular probabilidades de sucessos, para reconhecimento de padrões,
para reconhecimento de imagens, para reconhecimento de palavras (discursos), para as tecnologias
de carros autônomos, entre outros.

Alguns autores dividem as possíveis aplicações de Inteligência Artificial em três grupos: (1) Ciência
Cognitiva: sistemas especialistas, lógica difusa, algoritmos genéticos e redes neurais; (2) Robótica:
percepção visual, locomoção, condução, tatilidade; (3) Interfaces Naturais: linguagens naturais,
reconhecimento de discurso, interfaces multissensoriais e realidade virtual. No entanto, eu gostaria
de falar sobre uma aplicação muito comum em órgãos públicos e empresas atualmente: Chatbots!

O ChatBot é um programa de computador que tenta simular um ser humano na conversação
com as pessoas. O objetivo é responder as perguntas de tal forma que as pessoas tenham a
impressão de estar conversando com outra pessoa e não com um programa de computador. Após


---

o envio de perguntas em linguagem natural, o programa consulta uma base de conhecimento e em
seguida fornece uma resposta que tenta imitar o comportamento humano.

Com toda certeza, vocês já foram atendidos por um robô quando precisavam de alguma informação
específica. O Bradesco – por exemplo – possui uma assistente virtual chamada Bia para auxiliar
correntistas com o aplicativo do banco. O Tesouro Nacional – órgão em que trabalho – possui
uma assistente virtual chamada Jaque que responde sobre informações contábeis e fiscais de
municípios. E isso tem sido cada vez mais comum em órgãos públicos...

A inteligência artificial permitiu que a Jaque realizasse mais de 2000 interações mensais em 2020.
Ao mesmo tempo, a equipe do Tesouro Nacional que apoiava essa missão, foi reduzida em
50%, permitindo um deslocamento para atuação em papeis mais analíticos e de atendimento
mais especializado. Eu sei o que vocês estão pensando: vários desses robôs ainda não satisfazem
as necessidades dos usuários.

Em suma, a Inteligência artificial é uma nova disciplina técnica que pesquisa e desenvolve teorias,
métodos, tecnologias e sistemas de aplicação para simular a extensão e expansão da inteligência
humana. O objetivo da pesquisa de inteligência artificial é permitir que as máquinas realizem
algumas tarefas complexas que requerem atualmente humanos inteligentes para que sejam
concluídas.

Em outras palavras, esperamos que a máquina possa nos substituir para resolver algumas tarefas
complicadas. Não apenas atividades mecânicas repetitivas, mas algumas atividades que
requerem conhecimento humano para que sejam concluídas com sucesso. A intersecção entre
Big Data e Inteligência Artificial é considerada uma revolução capaz de moldar o futuro de como as
empresas agregam valor aos negócios a partir de seus dados e recursos analíticos.


     (SLU/DF – 2019) O serviço de chatbot, um sistema que permite às grandes corporações
     oferecer um canal direto com o consumidor, é um dos exemplos tecnológicos utilizado
     no atendimento ao público, tornando a comunicação entre empresa e cliente mais
     próxima e personalizada, graças aos avanços da inteligência artificial.
     _______________________
     Comentários: com o avanço da tecnologia, as organizações têm buscado formas de otimizar custos e potencializar seus serviços
     de atendimento ao público. Uma das formas mais modernas e que se utiliza dos atributos da Inteligência Artificial é o chatbot,
     que de forma robotizada permite uma interação em tempo real e o atendimento das principais demandas com maior rapidez
     (Correto).

     (UECE/CEV – 2019) Atualmente utilizado por diversas empresas e tido por alguns como
     um vilão que compromete vagas no mercado de trabalho, esse avanço da tecnologia se
     caracteriza como a capacidade do sistema para interpretar, aprender e utilizar dados
     externos, com o objetivo de executar tarefas que, se um humano executasse, seriam
     consideradas inteligentes. Essa descrição se refere:


---

a) à inteligência artificial.
b) à terceirização de serviços.
c) ao telemarketing.
d) ao atendimento personalizado.
_______________________
Comentários: a tecnologia que se caracteriza como a capacidade do sistema para interpretar, aprender e utilizar dados
externos, com o objetivo de executar tarefas que, se um humano executasse, seriam consideradas inteligentes é a Inteligência
Artificial (Letra A).


---

                                                 RESUMO

    Oxford English Big Data é um dado de grande tamanho, tipicamente ao nível que sua manipulação e
                   gerenciamento apresenta desafios significativos a logística.
        Dictionary
                        Big Data é o dado que excede a capacidade de processamento convencional dos sistemas de
      Dumbill e Edd bancos de dados.

           Mayer- Big Data é a habilidade da sociedade de aproveitar a informação por novas maneiras para
     Schönberger e produzir introspecção úteis ou bens e serviços de valor significante.
          Cukier’s
International Data Big Data é uma nova geração de tecnologias e arquiteturas, projetadas economicamente
                   para extrair valor de volumes muito grandes e vastos de dados, permitindo alta velocidade
      Corporation de captura, descoberta e análise.
                  Big Data é o termo geral para a enorme quantidade de dados digitais coletados a partir de
Kim, trimi e ji-hyong
                  todos os tipos de fontes.
                  Big Data denota um maior conjunto de dados ao longo do tempo, conjunto de dados estes
 Mahrt e scharkow que são grandes demais para serem manipulados por infraestruturas de armazenamento e
                  processamento regulares.
                  Big Data são dados demasiadamente volumosos ou muito desestruturados para serem
 DAVENPORT E KWON gerenciados e analisados através de meios tradicionais.

                        Big Data se refere ao conjunto de dados cujo tamanho está além da habilidade de
         DI MARTINO ferramentas típicas de banco de dados em capturer, gerenciar e analisar.

                    Big Data são conjuntos de dados que são tão grandes que se tornam difíceis de trabalhar com
             RAJESH o uso de ferramentas atualmente disponíveis.


     TIPOS DE DADOS DESCRIÇÃO
                        São dados que podem ser armazenados, acessados e processados em formato fixo e
             DADOS padronizado de acordo com alguma regra específica. Esta organização é geralmente feita
      ESTRUTURADOS por colunas e linhas (semelhante a planilhas do Excel), mas pode variar de acordo com a fonte
                    de dados. Exemplo: Planilhas Eletrônicas, Bancos de Dados Relacionais e CSV.
                    São dados estruturados que não estão de acordo com a estrutura formal dos modelos de
        DADOS SEMI- dados como em tabelas, mas que possuem marcadores para separar elementos semânticos
      ESTRUTURADOS e impor hierarquias de registros e campos dentro dos dados Exemplo: Dados de E-mail,
                    Arquivos XML, Arquivos JSON e Banco de Dados NoSQL.
                    São dados que apresentam formato ou estrutura desconhecidos, em que não se sabe extrair
         DADOS NÃO- de forma simples os valores desses dados em forma bruta. Exemplo: Documentos, Imagens,
      ESTRUTURADOS Vídeos, Arquivos de Texto, Posts em Redes Sociais.


---

                    DATA WAREHOUSE                                              DATA LAKE
Dados geralmente são tratados (limpos, combinados,      Dados geralmente são armazenados da maneira que
organizados, etc) antes de serem armazenados.           foram capturados – brutos, sem nenhum tratamento.
Podem armazenar todos os tipos de dados, mas o foco     Armazenam dados estruturados, semi-estruturados e
é nos dados estruturados.                               não-estruturados.
Ideal para usuários operacionais visto que as           Ideal para cientistas de dados visto que as ferramentas
ferramentas analíticas são mais fáceis de usar.         analíticas são mais difíceis de usar.
Armazenamento de dados custam geralmente mais           Armazenamento de dados custam geralmente mais
caro e consome mais tempo.                              barato e consome menos tempo.
Um esquema é definido antes dos dados serem             Um esquema é definido após os dados serem
armazenados.                                            armazenados.
Armazenam um grande volume de dados.                    Armazenam um gigantesco volume de dados.

                                               Palavras-chave
      VOLUME               VELOCIDADE              VALOR                   VERACIDADE          VARIEDADE
    Terabytes             Transmissão            Estatístico           Confiabilidade         Estruturado
    Registros             Tempo Real              Hipóteses            Autenticidade        Não-Estruturado
 Tabelas/Arquivos          Processos             Correlações         Origem/Reputação       Múltiplas Fontes


          premissas                                            DESCRIÇÃO
             VOLUME    Corresponde à grande quantidade de dados acumulada.
         VELOCIDADE    Corresponde à rapidez na geração e obtenção de dados.
          VARIEDADE    Corresponde à grande diversidade de tipos ou formas de dados.
         VERACIDADE    Corresponde à confiança na geração e obtenção dos dados.


---

               VALOR Corresponde à utilidade e valor agregado ao negócio.

  TIPO DE
               Questão?                                         DESCRIÇÃO
  ANÁLISE
                          Em vez de se focar no futuro, busca fazer uma fotografia do presente, para que
                          decisões de cunho imediato possam ser tomadas com segurança. Ela trabalha com
 ANÁLISE          O QUE   histórico de dados, cruzando informações com o objetivo de gerar um panorama claro
DESCRITIVA    ACONTECEU? e preciso dos temas relevantes para a empresa no presente momento. Exemplo: por
                          meio do cruzamento de dados, conclui-se que determinada pessoa atualmente é
                          identificada como má pagadora.
                          O foco está na relação de causas e consequências percebidas ao longo do tempo,
                          dentro de um determinado tema. Assim, a análise diagnóstica funciona baseada na
  ANÁLISE        POR QUE  coleta de dados relacionados a um determinado assunto, cruzando informações com o
DIAGNÓSTICA   ACONTECEU? objetivo de entender quais fatores influenciaram o resultado atual. Exemplo:
                          determinada pessoa nunca havia sido identificada como má pagadora – somente é
                          agora porque ficou viúva recentemente.
                          Este tipo de análise é o mais indicado para quem precisa prever algum tipo de
                          comportamento ou resultado. Esta técnica busca analisar dados relevantes ao longo
  ANÁLISE       O QUE IRÁ do tempo, buscando padrões comportamentais e suas variações de acordo com cada
 PREDITIVA    ACONTECER? contexto, a fim de prever como será o comportamento de seu público ou mercado no
                          futuro, dadas as condições atuais. Exemplo: quanto estará o valor do dólar no ano que
                          vem?
                          Segue um modelo similar à Análise Preditiva, no entanto com objetivos ligeiramente
                          diferentes. Em vez de tentar prever um determinado acontecimento, esta análise
  ANÁLISE      O QUE DEVO busca prever as consequências deste acontecimento. Exemplo: dado um aumento do
PRESCRITIVA      FAZER?   valor do dólar no ano que vem, como isso poderá afetar as importações de matéria
                          prima, consequentemente, o faturamento das vendas de determinada empresa.

                 Big data analytics é:                                  Big data analytics não é:
Uma estratégia baseada em tecnologia que permite Somente tecnologia – no nível empresarial, refere-se a
coletar insights mais profundos e relevantes de clientes, explorar fontes amplamente melhoradas de dados para
parceiros e negócio, ganhando assim uma vantagem adquirir insights.
competitiva.

Trabalhar com conjuntos de dados cujo porte e           Somente volume – também se refere à variedade e à
variedade estão além da habilidade de captura,          velocidade, mas – talvez mais importante – refere-se ao
armazenamento e análise de softwares de banco de        valor derivado dos dados.
dados típicos.

Processamento de um fluxo contínuo de dados em         Mais gerada ou mais utilizada somente por grandes
tempo real, possibilitando a tomada de decisões        empresas online como Google ou Amazon. Embora as
sensíveis ao tempo mais rápido do que em qualquer      empresas de internet possam ter sido pioneiras no Big
outra época.                                           Data na escala web, aplicativos chegam a todas as
                                                       indústrias.
Distribuído na natureza, isto é, o processamento de Uso de bancos de dados relacionais tradicionais de
análise vai aonde estão os dados para maior velocidade “tamanho único” criados com base em disco
e eficiência.                                          compartilhado e arquitetura de memória. Análise de Big


---

                                                     Data usa uma rede de recursos de computação para
                                                     processamento massivamente paralelo e escalável.
Um novo paradigma no qual a tecnologia da informação Um substituto de bancos de dados relacionais – dados
colabora com usuários empresariais e “cientistas de estruturados continuam a ser de importância crítica
dados” para identificar e implementar análises que para as empresas. No entanto, sistemas tradicionais
ampliam a eficiência operacional e resolvem novos podem não ter capacidade de manipular as novas fontes
problemas empresariais.                              e contextos do Big Data.
Transferir a tomada de decisão dentro da empresa e
permitir que pessoas tomem decisões melhores, mais
rápidas e em tempo real.                                                      -

            CRITÉRIO                    NOSQL                                      SQL
             Modelo                Não-Relacional                               Relacional
    ARMAZENAMENTO        Variados (Grafos, Documentos, etc)                      Tabelas
       Flexibilidade    Alta flexibilidade (Esquema indefinido)   Baixa flexibilidade (Esquema definido)
         ADEQUAÇÃO     Mais adequado a dados não-estruturados      Mais adequado a dados estruturados
     ESCALABILIDADE      Em geral, escalabilidade horizontal         Em geral, escalabilidade vertical
                Sgbd   MongoDB, Cassandra, HBase, Neo4J, etc      Oracle, MySQL, DB2, SQL Server, etc

                                                                                      ARQUITETURA DE BIG DATA


---

  COMPONENTES                                             DESCRIÇÃO
                Todas as soluções de big data começam com uma ou mais fontes de dados, tais como:
                armazenamentos de dados de aplicações, como bancos de dados relacionais; arquivos estáticos
Fontes de Dados produzidos por aplicações, como arquivos de log do servidor web; fontes de dados em tempo
                real, como dispositivos IoT.

               Os dados para operações de processamento em lote geralmente são armazenados em um
               armazenamento de arquivos distribuído que pode conter grandes volumes de arquivos grandes
Armazenamento em vários formatos estruturados ou não – esse tipo de armazenamento geralmente é chamado
      de dados de Data Lake. As opções para implementar esse armazenamento incluem o Repositório Azure
               Data Lake ou contêineres de BLOB no Armazenamento do Azure.

               Como os conjuntos de dados são gigantescos, geralmente uma solução de Big Data deve
               processar arquivos de dados em lote de longa duração para filtrar, agregar e, de outra forma,
               preparar os dados para análise. Normalmente, esses trabalhos envolvem a leitura de arquivos de
Processamento origem, processá-los e gravar a saída em novos arquivos. As opções incluem a execução de
       em Lote trabalhos U-SQL no Azure Data Lake Analytics, o uso de trabalhos Hive, Pig ou Map/Reduce
               personalizados em um cluster Hadoop do HDInsight ou o uso de programas Java, Scala ou
               Python em um cluster HDInsight Spark.

               Se a solução incluir fontes em tempo real (real-time), a arquitetura deverá incluir uma maneira
               de capturar e armazenar mensagens online para processamento de fluxo. Isso pode ser um
               armazenamento de dados simples, onde as mensagens de entrada são descartadas em uma
   Ingestão de pasta para processamento. No entanto, muitas soluções precisam de um armazenamento de
               ingestão (consumo) de mensagens para atuar como um buffer para mensagens e para oferecer
 mensagens em
               suporte ao processamento de expansão, entrega confiável e outras semânticas de
    tempo real enfileiramento de mensagens. Essa parte de uma arquitetura de streaming é geralmente
               chamada de buffer de fluxo. As opções incluem Hubs de Eventos do Azure, Hub IoT do Azure e
               Kafka.

                Depois de capturar mensagens em tempo real, a solução deve processá-las, filtrando, agregando
Processamento e preparando os dados para análise – os dados de fluxo processados são gravados em um coletor
      em Fluxo de saída. O Azure Stream Analytics fornece um serviço de processamento de fluxo gerenciado
                com base em consultas SQL em execução perpétua que operam em fluxos ilimitados. Você


---

                 também pode usar tecnologias de streaming Apache de código aberto, como Storm e Spark
                 Streaming, em um cluster HDInsight.

               Muitas soluções de Big Data preparam dados para análise e, em seguida, servem os dados
               processados em um formato estruturado que pode ser consultado usando ferramentas
               analíticas. O armazenamento de dados analíticos usado para atender a essas consultas pode ser
               em um Data Warehouse Relacional no estilo Kimball ou, como alternativa, os dados podem ser
Armazenamento apresentados por meio de uma tecnologia NoSQL de baixa latência, como o HBase, ou um banco
      de Dados de dados Hive interativo que fornece uma abstração de metadados sobre arquivos de dados no
    Analíticos armazenamento de dados distribuído. O Azure Synapse Analytics fornece um serviço
               gerenciado para Data Warehouse baseado em nuvem em larga escala. O HDInsight oferece
               suporte ao Interactive Hive, HBase e Spark SQL, que também podem ser usados para fornecer
               dados para análise.

                O objetivo da maioria das soluções de big data é fornecer insights sobre os dados por meio de
                análises e relatórios. Para capacitar os usuários a analisar os dados, a arquitetura pode incluir
                uma camada de modelagem de dados, como um cubo OLAP multidimensional ou um modelo
                de dados tabular no Azure Analysis Services. Ele também pode oferecer suporte a BI de
      Análise e autoatendimento, usando as tecnologias de modelagem e visualização no Microsoft Power BI
                ou no Microsoft Excel. A análise e os relatórios também podem assumir a forma de exploração
    Relatórios interativa de dados por cientistas de dados ou analistas de dados. Para esses cenários, muitos
                serviços do Azure dão suporte a blocos de anotações analíticos, como o Jupyter, permitindo que
                esses usuários aproveitem suas habilidades existentes com Python ou R. Para exploração de
                dados em larga escala, você pode usar o Microsoft R Server, autônomo ou com o Spark.

              A maioria das soluções de big data consiste em operações repetidas de processamento de dados,
              encapsuladas em fluxos de trabalho, que transformam dados de origem, movem dados entre
              várias fontes e coletores, carregam os dados processados em um armazenamento de dados
 Orquestração analíticos ou enviam os resultados diretamente para um relatório ou painel. Para automatizar
              esses fluxos de trabalho, você pode usar uma tecnologia de orquestração, como o Azure Data
              Factory ou o Apache Oozie e o Sqoop.

    Camada de Responsável por armazenar e processar todos os dados do sistema em sua forma bruta. Trata-se
              de um armazenamento distribuído, tolerante a falhas, imutável (append-only) que armazena
         LOTE todos os dados no sistema, incluindo dados históricos – o resultado é armazenado como uma


---

             exibição em lote. Ele é usado para gerar um conjunto de dados mestre atualizado que pode ser
             consultado pelas camadas de velocidade e serviço.
             Responsável por processar pequenos fluxos de dados e consultas em tempo real. Essa camada é
Camada de    responsável por fornecer acesso quase em tempo real aos dados usando tecnologias de
             processamento de fluxo. Ela é normalmente usada para processar eventos à medida que ocorrem
VELOCIDADE   e disponibilizar os resultados para consulta ou análise. Por fim, pode-se afirmar que ela reduz a
             latência em detrimento da precisão dos dados.
             Responsável por fornecer acesso de baixa latência às visualizações de dados pré-processadas
Camada de    para realização de consultas mais eficientes. É a camada que fornece os resultados da consulta
             aos consumidores de dados. Ela é normalmente um sistema somente leitura que responde com
  SERVIÇO    eficiência às consultas. As tecnologias comuns usadas nas camadas de serviço são índices de
             pesquisa, caches distribuídos e bancos de dados na memória.

                                                                                                Camada de LOTE


---

---

                                                                           Bancos de dados não relacionais - nosql

                               CARACTERÍSTICAS DE BANCOS DE DADOS NÃO RELACIONAIS
Bancos de dados não relacionais não usam a estrutura tradicional baseada em tabela de bancos de dados
relacionais como tabela, chave e valor.
Bancos de dados não relacionais geralmente são mais escaláveis horizontalmente do que os bancos de dados
relacionais – é possível adicionar uma nova máquina ao cluster para aumentar a capacidade do sistema distribuído.
Bancos de dados não relacionais geralmente usam modelos de dados mais simples, como pares chave-valor ou
documentos, para lidar melhor com dados complexos não estruturados.
Bancos de dados não relacionais geralmente usam arquiteturas distribuídas, que permitem processamento de
consultas mais rápido e maior disponibilidade.
Bancos de dados não relacionais geralmente usam estruturas de dados mais flexíveis, como JSON, que permite
uma integração de dados mais dinâmica.
Bancos de dados não relacionais geralmente fornecem melhor desempenho e escalabilidade do que os bancos de
dados relacionais tradicionais para diversas atividades.
Bancos de dados não relacionais geralmente fornecem mais flexibilidade na modelagem de dados, permitindo que
os desenvolvedores modifiquem sua estrutura de dados com mais rapidez e facilidade.
Bancos de dados não relacionais geralmente usam linguagens de consulta NoSQL, que – em regra – são mais fáceis
de aprender do que SQL.
Bancos de dados não relacionais geralmente requerem menos manutenção do que os bancos de dados relacionais
tradicionais.
Bancos de dados não relacionais geralmente usam diferentes tecnologias de armazenamento, como
armazenamento baseado em nuvem, para lidar melhor com grandes conjuntos de dados.
Bancos de dados não relacionais geralmente fornecem diferentes recursos de pesquisa do que os bancos de dados
relacionais tradicionais, mas eventualmente podem ser mais ineficientes.
Bancos de dados não relacionais geralmente oferecem melhor suporte para processamento e streaming de dados
em tempo real.
Bancos de dados não relacionais podem frequentemente ser usados em conjunto com bancos de dados relacionais
tradicionais para lidar melhor com dados complexos.
Bancos de dados não relacionais permitem a inserção de dados a qualquer momento sem a necessidade de definir
previamente um esquema ou por meio de um esquema flexível.
Bancos de dados não relacionais normalmente não impõem regras de integridade de dados, o que pode levar a
erros e inconsistência de dados – o que geralmente não ocorre com bancos de dados relacionais.


       TÉCNICAS                                              DESCRIÇÃO
     REPLICAÇÃO Os dados são copiados e armazenados em vários nós para redundância e melhor desempenho.
                  Os dados são divididos em partes menores e distribuídos em vários nós.
Particionamento
                  Os dados são organizados em unidades lógicas (shards) e distribuídos por vários nós.
       Sharding
        Hashing Os dados são mapeados para um identificador exclusivo (hash) e distribuídos por vários nós.
    consistente


---

          Views Os dados são pré-agregados e armazenados em um formato de consulta amigável.
 materializadas
                    Os dados são indexados para permitir pesquisas rápidas e recuperação de dados.
      Indexação
                    Os dados são armazenados na memória para melhorar o desempenho de leitura.
          cache


                                                                                    Modelo orientado a chave/valor

características                   DESCRIÇÃO de modelos de bancos de dados orientados a chave-valor
             Sem    Modelos de chave-valor não necessitam definir uma estrutura de tabela ou colunas antes que
        esquema     os dados sejam armazenados.
            Fácil   Devido à simplicidade do banco de dados, os dados podem aceitar qualquer tipo de dados, até
         de usar    mesmo tipos diferentes, quando necessário.
rápido tempo de     Seu tempo de resposta é rápido devido à sua simplicidade, visto que o restante ambiente
       resposta     próximo a ele é muito construído e aprimorado.
Escalabilidade e    Os dados são distribuídos em vários nós, o que fornece escalabilidade e melhor disponibilidade.
 disponibilidade

                                                                                         Modelo orientado a colunas

características                 DESCRIÇÃO de modelos de bancos de dados orientados a colunas
 Otimizado para Modelos orientados a colunas são otimizados para legibilidade, permitindo leituras mais rápidas
    legibilidade e eficientes.


---

     Altamente     Modelos orientados a colunas são altamente escaláveis e podem acomodar grandes conjuntos
      escalável    de dados de forma rápida e fácil.
Modelo de dados    A flexibilidade do modelo de dados de um modelo orientado a colunas permite alterações de
        flexível   esquema mais rápidas e fáceis.
           Baixa   Os modelos orientados a colunas oferecem baixa latência ao consultar dados, pois os dados
       latência    podem ser armazenados em várias colunas em vez de uma longa linha.
            Alta   Os modelos orientados a colunas geralmente são projetados para alta disponibilidade e podem
 disponibilidade   ser replicados em vários nós.


                                                                                  Modelo orientado a documentos

características                  DESCRIÇÃO de modelos de bancos de dados orientados a documentos
Modelo de dados    Modelos orientados a documentos são mais flexíveis do que os bancos de dados relacionais
        flexível   tradicionais, pois não têm esquemas e podem acomodar dados com estruturas variadas.
            Alta   Modelos orientados a documentos são altamente escaláveis e podem acomodar conjuntos de
 escalabilidade    dados maiores com facilidade.
            Alto   Modelos orientados a documentos são muito eficientes em termos de recuperação de dados e
    desempenho     fornecem alto desempenho.
            Alta   Modelos orientados a documentos são altamente disponíveis e podem lidar com várias
 disponibilidade   solicitações simultâneas.

   Fácil de usar Modelos orientados a documentos são relativamente fáceis de usar, pois usam uma linguagem
                   de consulta simples para manipulação de dados.


                                                                                      Modelo orientado a grafos


---

características                    DESCRIÇÃO de modelos de bancos de dados orientados a grafos
            Sem   São projetados para armazenar dados sem esquema predefinido, permitindo modelos de dados
       esquema    flexíveis e evolução do esquema.
     Altamente    Seguindo as relações entre os dados, os bancos de dados orientados a grafos podem facilmente
     conectado    percorrer e consultar dados conectados de maneiras complexas.
     Altamente    Permitem o dimensionamento de dados com facilidade e a capacidade de adicionar
      escalável   rapidamente mais nós e relacionamentos.
 Desempenho de    Projetados para consultar rapidamente dados com relacionamentos complexos e acessar os
consulta rápida   dados em uma fração do tempo dos bancos de dados tradicionais.
                  Podem acessar dados rapidamente e responder em um ambiente de baixa latência, permitindo
 Baixa latência
                  aplicações em tempo real.


                                                                                          Propriedades acid/base

 Propriedades acid                                           descrição
                     Requer que todas as operações de banco de dados que formam uma transação sejam todas
      Atomicidade
                     bem-sucedidas ou todas falhem.
                     Requer que qualquer transação leve o banco de dados de um estado válido para outro.
      Consistência
                     Garante que a execução simultânea de transações não afete os resultados de nenhuma das
       Isolamento
                     transações.
                     Afirma que os resultados de uma transação devem persistir mesmo se o sistema falhar.
      durabilidade


---

Propriedades base                                           descrição
     Basicamente    Significa que o sistema sempre aceitará solicitações, mesmo que não seja capaz de processá-
       disponível   las imediatamente.
           Estado   Significa que o sistema não precisa manter um estado constante e pode eventualmente
            suave   convergir para um estado consistente.
   Eventualmente    Significa que o sistema pode não responder a uma solicitação imediatamente, mas
      consistente   eventualmente convergirá para um estado consistente.


                                                                                                    Teorema cap

   CARACTERÍSTICA                                           descrição
                   Significa que todos os clientes veem os mesmos dados ao mesmo tempo, não importa em
                   qual nó eles se conectem. Para que isso aconteça, sempre que os dados forem gravados em
      Consistência
                   um nó, ele deve ser instantaneamente encaminhado ou replicado para todos os outros nós
                   do sistema antes que a gravação seja considerada "bem-sucedida".
                   Significa que qualquer cliente que fizer uma solicitação de dados obterá uma resposta,
                   mesmo que um ou mais nós estejam desativados. Ou seja, todos os nós em funcionamento
   Disponibilidade
                   no sistema distribuído retornam uma resposta válida para qualquer solicitação, sem exceção.

                    A partição é uma quebra de comunicações dentro de um sistema distribuído, uma conexão
   Tolerância de perdida ou temporariamente lenta entre dois nós. Tolerância de partição significa que o
 partição (falha) cluster deve continuar a funcionar mesmo de ocorrer uma ou mais falhas de comunicação
                    entre os nós no sistema.

 Bancos de dados                                            descrição
                 Entrega consistência e tolerância de partição em detrimento da disponibilidade. Quando
  Banco de dados uma partição ocorre entre dois nós quaisquer, o sistema deverá desativar o nó não
                 consistente (ou seja, torná-lo indisponível) até que a partição seja resolvida.
               cp


---

               Entrega disponibilidade e tolerância de partição em detrimento da consistência. Quando
Banco de dados ocorre uma partição, todos os nós permanecem disponíveis, exceto aqueles na extremidade
               errada de uma partição podem retornar uma versão mais antiga de dados do que outros.
            ap Quando a partição é resolvida, os bancos de dados AP geralmente ressincronizam os nós
               para corrigir todas as inconsistências no sistema.
               Entrega consistência e disponibilidade em todos os nós. Porém, isso não é possível se houver
Banco de dados uma partição entre dois nós quaisquer no sistema, no entanto, e, portanto, não poderá
               entregar tolerância a falhas.
            ca


---

                   QUESTÕES COMENTADAS – CESPE

1. (CESPE / SEPLAN-RR - 2023) Variedade, em big data, refere-se à quantidade de fontes que
   geram os dados com potencial de serem altamente desestruturados.

Comentários:

Perfeito! A variedade, em big data, diz respeito à diversidade de tipos e formatos de dados, além
da capacidade de lidar com dados provenientes de várias fontes.

                                                                               Gabarito: Correto

2. (CESPE / SEPLAN-RR - 2023) Big data somente se aplica a dados não estruturados.

Comentários:

Big Data abrange não apenas dados não estruturados, mas também dados estruturados e semi-
estruturados. O foco está na capacidade de lidar com grandes volumes de dados,
independentemente de sua estrutura, e extrair insights e valor desses dados.

                                                                               Gabarito: Errado

3. (CESPE / TCE-SC - 2022) Big data necessitam de algoritmos de computação mais robustos em
   comparação aos algoritmos tradicionais de banco de dados, que não são capazes de lidar com
   os volumes de dados representados em big data.

Comentários:

Perfeito! A natureza volumosa e complexa dos conjuntos de dados de big data exige abordagens e
algoritmos de processamento mais robustos do que aqueles tradicionalmente utilizados em bancos
de dados convencionais. Os algoritmos tradicionais muitas vezes não são adequados para lidar
eficientemente com os volumes e velocidades de dados característicos do Big Data, tornando
necessária a adoção de métodos específicos, como algoritmos distribuídos, sistemas de
processamento paralelo e tecnologias de armazenamento escalável, para enfrentar os desafios
inerentes a esse domínio de processamento de dados.

                                                                               Gabarito: Correto

4. (CESPE / SECONT-ES - 2022) Kappa, uma arquitetura de software usada para processar dados,
   fornece acesso a métodos de processamento em lote e processamento de fluxo com uma
   abordagem em quatro camadas.


---

Comentários:

A arquitetura Kappa é uma arquitetura de processamento de dados projetada para lidar com
grandes volumes de dados em tempo real – ela não suporta processamento em lote (batch). Além
disso, temos duas camadas: Camada de Real-Time (Velocidade) e Camada de Serviço.

                                                                             Gabarito: Errado

5. (CESPE / SEFAZ-SE – 2022) Com relação a noções de big data, julgue os itens que se seguem.

   I Como qualquer tecnologia, soluções de big data também apresentam algumas restrições. Por
   exemplo, elas não podem ser utilizadas na área da saúde para determinar a causa de uma
   doença, porque esse é um procedimento complexo que somente pode ser executado por
   pessoas devidamente capacitadas — nesse caso, os médicos.

   II Big data é qualquer tipo de fonte de dados que possui, no mínimo, as seguintes três
   características: volume de dados extremamente grande; velocidade de dados extremamente
   alta; e variedade de dados extremamente ampla.

   III Para que as organizações obtenham os conhecimentos corretos, a tecnologia big data não
   permite que elas executem as operações de armazenar e administrar as grandes quantidades de
   dados de si próprias.

   IV Big data é uma combinação de tecnologias de gestão de dados que evoluíram ao longo dos
   anos, razão por que não é considerado um mercado único.

   Estão certos apenas os itens:

   a) I e III
   b) I e IV
   c) II e IV
   d) II e V
   e) III e V

Comentários:


---

(I) Errado. Que viagem! Big Data não só pode como já é muito utilizado na área de saúde; (II)
Correto. Há versões que consideram tanto 3V’s quanto 5V’s; (III) Errado. Não há restrições para que
organizações executem operações de armazenamento e administração; (IV) Correto. Atualmente
é considerado um grande conjunto de tecnologias que envolve diversas áreas de conhecimento.

                                                                                 Gabarito: Letra C

6. (CESPE / PETROBRAS – 2022) Em sistemas NoSQL baseados em armazenamento de
   chavevalor, a chave é multidimensional e composta pela combinação do nome de tabela com a
   chave linha-coluna e com o rótulo de data e hora.

Comentários:

No modelo chave-valor, a chave é bidimensional e composta pela combinação de um identificador
alfanumérico único (chave) e um valor associado em uma tabela (valor). Em outras palavras, esse
modelo armazena dados por meio de uma estrutura de mapeamento ou dicionário, em que todo
dado armazenado possui uma chave identificadora e seu valor em si – para cada chave de entrada,
é retornado um valor de saída.

                                                                                  Gabarito: Errado

7. (CESPE / TCE-RJ - 2021) Os fatores críticos de sucesso da análise de Big Data incluem uma sólida
   infraestrutura de dados, além de ferramentas analíticas e pessoal habilitado para lidar com elas.

Comentários:

Questão com interpretação bem ampla e genérica. É claro que é necessário ter infraestrutura de
dados, ferramentas e pessoas para que a análise de Big Data tenha sucesso! Uma infraestrutura de
dados fornece o armazenamento, o poder de processamento e a tecnologia necessários para
coletar, armazenar, gerenciar, analisar e visualizar dados. Sem uma forte infraestrutura de dados,
seria difícil adquirir, gerenciar e analisar grandes quantidades de dados. As ferramentas analíticas
são usadas para coletar, armazenar e processar dados para gerar insights e responder a perguntas,
tais como Apache Hadoop, Apache Spark, Tableau e Microsoft Azure. Por fim, requer pessoas que
tenham habilidades e conhecimentos para entender e analisar grandes quantidades de dados.
Pessoas com experiência em ciência de dados, estatística, programação e inteligência de negócios
são necessárias para entender os dados e usá-los para fundamentar decisões.

                                                                                 Gabarito: Correto

8. (CESPE / SEFAZ-AL - 2021) Sistemas NoSQL com fundamento em documentos possuem um
   modelo de dados simples embasado no acesso rápido pela palavra; os resultados estão
   relacionados à informação e podem ser encontrados percorrendo-se os textos usando-se
   expressões regulares.


---

Comentários:

Em um modelo de banco de dados orientado a documentos, as pesquisas funcionam comparando
os valores nos documentos com os critérios de consulta. Os documentos no banco de dados podem
ser pesquisados usando uma variedade de critérios, incluindo conteúdo, rótulos e propriedades.
Quando uma pesquisa é realizada, o banco de dados pesquisa todos os documentos, extraindo os
documentos que correspondem aos critérios da consulta. Os resultados da pesquisa são retornados
ao usuário na forma de uma lista de documentos que correspondem à consulta. Logo, não há
nenhuma relação com expressões regulares, que são basicamente padrões de pesquisa usados para
procurar e manipular texto.

                                                                                        Gabarito: Errado

9. (CESPE / ISS-Aracaju – 2021) Big data ajudou a sedimentar o cargo de cientista de dados. Entre
   as funções desse cargo inclui-se:

   a) a modelagem estruturada.
   b) a análise retrospectiva.
   c) a modelagem não estruturada.
   d) a modelagem relacional.
   e) o processamento comparativo.

Comentários:

Questão bizarra! Todos os itens podem ser executados por um cientista de dados. Ele não pode fazer
uma modelagem relacional? Claro que pode! De toda forma, essa questão foi retirada do livro do
Taurion (2013), em que ele diferencia Analista de BI e Cientista de Dados.

                    ANALISTA DE BI                                     CIENTISTA DE DADOS
 Cognos, Modelo Relacional,          Banco   de Dados Hadoop, Modelos Relacionais e NoSQL, bancos e dados
 SQLServer, Oracle, DB2.                               não relacionais e in-memory.
                                                       Inclui também modelagem não estruturada.
 Modelagem Relacional/Estruturada.
                                                       Modelagem analítica é essencial.
                                                       Cria perguntas e busca relacionamentos entre fatos
 Desenvolve queries estruturadas sobre dados passados.
                                                       aparentemente desconexos.


Em primeiro lugar, o autor não é uma unanimidade; em segundo lugar, o autor não disse que essas
eram atividades exclusivas de cada papel. Logo, não se trata de atividades taxativas!

                                                                                        Gabarito: Letra C

10. (CESPE / SERPRO – 2021) No que se refere aos três Vs do Big Data, o termo volume refere-se a
    dados que, atualmente, não são estruturados nem armazenados em tabelas relacionais, o que
    torna sua análise mais complexa.


---

Comentários:

Na verdade, referem-se à quantidade de dados de quaisquer tipos (estruturados, semiestruturados
ou não estruturados) armazenados em fontes de estruturas diversas.

                                                                              Gabarito: Errado

11. (CESPE / SERPRO – 2021) Big data caracteriza-se, principalmente, por volume, variedade e
    velocidade, o que se justifica devido ao fato de os dados serem provenientes de sistemas
    estruturados, que são maioria, e de sistemas não estruturados, os quais, embora ainda sejam
    minoria, vêm, ao longo dos anos, crescendo consideravelmente.

Comentários:

Pelo contrário, os dados provenientes de sistemas não estruturados são maioria e os dados
provenientes de sistemas estruturados são minoria.

                                                                              Gabarito: Errado

12. (CESPE / SERPRO – 2021) Uma das principais características de big data é que seu custo de
    armazenamento de dados é relativamente baixo se comparado a um data warehouse.

Comentários:

Pode parecer contraintuitivo, mas o Data Warehouse possui um custo de armazenamento
realmente maior em relação ao Big Data – esse é mais otimizado para armazenar gigantescos
volumes de dados do que aquele.

                                                                             Gabarito: Correto

13. (CESPE / TCE-RJ – 2021) Em Big Data, a premissa volume refere-se à capacidade de processar,
    em um ambiente computacional, diferentes tipos e formatos de dados, como fotos, vídeos e
    geolocalização.

Comentários:

Na verdade, essa é a premissa de variedade e, não, volume.

                                                                              Gabarito: Errado

14. (CESPE / TCE-RJ – 2021) Volume, variedade e visualização são as três características,
    conhecidas como 3 Vs, utilizadas para definir Big Data.


---

Comentários:

Visualização não é uma característica do Big Data!

                                                                                Gabarito: Errado

15. (CESPE / Polícia Federal – 2021) As aplicações de bigdata caracterizam-se exclusivamente pelo
    grande volume de dados armazenados em tabelas relacionais.

Comentários:

Opa... Volume é apenas um dos cinco V’s do Big Data! Ele também se caracteriza pela Veracidade,
Velocidade, Valor e Variedade. Além disso, os dados são armazenados em bancos de dados não
relacionais.

                                                                                Gabarito: Errado

16. (CESPE / PRF – 2021) A Internet das Coisas (IoT) aumenta a quantidade e a complexidade dos
    dados por meio das novas formas e novas fontes de informações, influenciando diretamente
    em uma ou mais das características do Big Data, a exemplo de volume, velocidade e variedade.

Comentários:

Internet das Coisas é a tecnologia que permite a interconexão digital de objetos cotidianos com a
Internet. Logo, faz sentido que ela aumente a quantidade e a complexidade dos dados por meio de
novas formas e fontes de informações? Claro! Galera... quando houver a popularização da
tecnologia 5G, teremos objetos trocando informações via internet a todo instante em todo mundo.
Vamos ver um exemplo:

Em um futuro próximo, meu cachorro (@chico.golden.gff) poderá ter um chip em sua coleira que
envia informações de geolocalização para o meu smartphone (Ex: iPhone); meu smartphone
poderá enviar dados para o meu smartwatch (Apple Watch); meu smartwatch poderá se comunicar
com a caixa de som (Ex: JBL); a caixa de som poderá se comunicar com um assistente virtual (Ex:
Alexa); minha assistente virtual poderá se comunicar com a geladeira (Ex: Electrolux); a geladeira
poderá identificar que um determinado produto está acabando e se comunicar com a página de
supermercado (Ex: Pão de Açúcar); e assim por diante...

Agora percebam: a quantidade de informações produzidas no mundo se multiplicará de forma
avassaladora. Será que isso influencia as características de volume, velocidade e variedade do Big
Data? Claro! Uma quantidade absurdamente monstruosa de novos dados será gerada (Volume) e


---

processados a todo instante (Velocidade) provenientes de diversas fontes e formas diferentes
(Variedade).
                                                                           Gabarito: Correto

17. (CESPE / AL-AP – 2020) Atualmente, diversos dados são coletados pelos sistemas digitais de
    empresas na internet para constituir Big Data com conteúdo sobre os resultados alcançados por
    seus produtos e serviços, prestígio da imagem da organização e seus representantes. Porém,
    parte desses dados pode ser falsa ou manipulada por internautas. O tratamento dos dados, a
    fim de qualificá-los antes de disponibilizá-los para a tomada de decisão na empresa, segundo o
    conceito das cinco dimensões “V” de avaliação de um Big Data, se refere:

   a) ao valor.
   b) à variedade.
   c) à veracidade.
   d) à velocidade.
   e) ao volume.

Comentários:

Os dados podem ser falsos ou manipulados por internautas? Os dados devem ser qualificados antes de
serem disponibilizados? A questão deu a dica para inferir que se trata da dimensão de veracidade,
isto é, a capacidade de selecionar dados que sejam úteis e verídicos

                                                                                Gabarito: Letra C

18. (CESPE / TCE-RO – 2019) Com relação a fundamentos e conceitos de Big Data, julgue os itens
    a seguir.

   I. O volume de dados é uma característica importante de Big Data.

   II. Em Big Data, a qualidade do dado não tem importância, porque a transformação dos dados
   não impacta os negócios.

   III. A característica de velocidade de entrada dos dados impacta o modelo de processamento e
   armazenamento.

   IV. A variedade dos dados não é característica intrínseca nos fundamentos de Big Data.

   Estão certos apenas os itens:

   a) I e II.
   b) I e III.
   c) II e IV.


---

   d) I, III e IV.
   e) II, III e IV.

Comentários:

(I) Correto, trata-se de uma das premissas do Big Data; (II) Errado, a qualidade é importante –
volume de dados em qualidade não terá utilidade e, portanto, não agregará valor ao negócio; (III)
Correto, trata-se de uma das premissas do Big Data – a velocidade de input de dados é
extremamente relevante para o modelo de processamento e armazenamento utilizado. Imagine
que dados sejam inseridos a uma velocidade que o seu modelo não consiga processar ou armazenar;
(IV) Errado, trata-se de uma das premissas do Big Data.

                                                                               Gabarito: Letra B

19. (CESPE / SLU-DF - 2019) Para uma empresa que necessite implantar uma base de dados
    altamente escalável, com grande desempenho e cujo esquema de dados seja flexível, de modo
    que suporte constantes mudanças de campos e valores armazenados, a melhor opção é uma
    base de dados NoSQL.

Comentários:

A empresa quer uma base de dados: (1) altamente escalável; (2) com alto desempenho; e (3) com
esquema flexível. Essas três características nos remetem ao NoSQL! Eles permitem a inserção de
dados a qualquer momento sem a necessidade de definir previamente um esquema ou por meio de
um esquema flexível. Além disso, fornecem melhor desempenho e escalabilidade do que os bancos
de dados relacionais tradicionais para grandes quantidades de dados.

                                                                               Gabarito: Correto

20. (CESPE / TCM-BA – 2018) Acerca de big data, assinale a opção correta:

   a) A utilização de big data nas organizações não é capaz de transformar os seus processos de
   gestão e cultura.

   b) Sistemas de recomendação são métodos baseados em computação distribuída, que proveem
   uma interface para programação de clusters, a fim de recomendar os tipos certos de dados e
   processar grandes volumes de dados.

   c) Pode-se recorrer a software conhecidos como scrapers para coletar automaticamente e
   visualizar dados que se encontram disponíveis em sítios de navegabilidade ruim ou em bancos
   de dados difíceis de manipular.


---

   d) As ações inerentes ao processo de preparação de dados incluem detecção de anomalias,
   deduplicação, desambiguação de entradas e mineração de dados.

   e) O termo big data se baseia em cinco Vs: velocidade, virtuosidade, volume, vantagem e valor.

Comentários:

(a) Errado. Como é? Big Data tem sido revolucionário em muitas organizações! Big Data tem
modificado processos de gestão e cultura de diversas organizações por meio da descoberta de
novas informações para tomadas de decisão estratégicas;

(b) Errado. Sabem quando a Netflix te recomenda um filme ou o Spotify te recomenda uma
música/banda? Pois é, isso ocorre por meio de um Sistema de Recomendação! Ela combina várias
técnicas computacionais para selecionar itens personalizados com base nos interesses dos usuários.
No entanto, não existe nenhuma obrigação dos sistemas serem estruturados em um cluster e
usarem computação distribuída. O que é isso, Diego? Cara, é basicamente uma forma de dividir um
problema em várias partes para serem processados paralelamente por uma grande quantidade de
computadores e posteriormente combinar o resultado;

(c) Correto. Professor, o que é Data Scraping? Basicamente é uma técnica que coleta dados de bases
de dados complexas (com muitas tabelas e relacionamentos) ou de sites de difícil navegabilidade,
processa automaticamente esses dados e os exibe de uma forma mais legível – ele transforma
dados pouco estruturados em dados mais estruturados e fáceis de manipular. Grosso modo,
podemos imaginar uma biblioteca em que o bibliotecário organizou todos os livros de acordo com
tema, tamanho, data, número de identificação, etc – isso é bem estruturado; agora imagine uma
biblioteca sem um bibliotecário em que as coisas são organizados de forma aleatória – isso não é
bem estruturado;

(d) Errado. Todas essas ações são realmente inerentes ao processo de preparação de dados (Data
Preparation), exceto a mineração de dados! Por que? Porque a mineração ocorre após a preparação
dos dados! Não há como minerar dados (explorar em busca de padrões e informações úteis) sem
antes preparar esses dados. Além disso, não é obrigatória a preparação dos dados;

(e) Errado. Virtuosidade e Vantagem não fazem parte dos 5 Vs do Big Data.

                                                                                 Gabarito: Letra C

21. (CESPE / TCM-BA – 2018) Um dos desdobramentos de big data é o big data analytics, que se
    refere aos softwares capazes de tratar dados para transformá-los em informações úteis às
    organizações. O big data analytics difere do business intelligence por:

   a) priorizar o ambiente de negócios em detrimento de outras áreas.
   b) analisar dúvidas já conhecidas para as quais se deseje obter resposta.
   c) analisar o que já existe e o que está por vir, apontando novos caminhos.


---

   d) dar enfoque à coleta, à transformação e à disponibilização dos dados.
   e) analisar o que já existe, definindo as melhores hipóteses.

Comentários:

O Business Intelligence trata das perguntas conhecidas e das nossas pré-concepções com relação
aos dados. Ao passo que Big Data Analytics se envolve com um universo de novas possibilidades e
perguntas que ainda não conhecemos, analisando o que já existe e o que está por vir, apontando
novos caminhos.

                                                                              Gabarito: Letra C

22. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   O big data consiste de um grande depósito de dados estruturados, ao passo que os dados não
   estruturados são considerados data files.

Comentários:

O Big Data consiste no gerenciamento e na análise de dados que vão além dos dados tipicamente
estruturados. A questão afirma que dados não estruturados são considerados Data Files (que são
arquivos de dados), no entanto dados não estruturados podem ser de absolutamente qualquer tipo,
como vídeo digital, imagens, dados de sensores, arquivos de logs, entre outros. Vocês se lembram
do V de Variedade? Pois é, os formatos são variados em um Big Data!

                                                                               Gabarito: Errado

23. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   Dados coletados de redes sociais podem ser armazenados, correlacionados e expostos com o
   uso de análises preditivas.

Comentários:

Redes Sociais realmente geram uma grande quantidade de dados diariamente e esses dados
podem ser muito úteis a um Big Data. Quando armazenados, podem facilmente ser correlacionados
e expostos por meio do uso de análises preditivas – tudo perfeito na questão.


---

                                                                               Gabarito: Correto

24. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   Uma aplicação que reconheça o acesso de um usuário e forneça sugestões diferentes para cada
   tipo de usuário pode ser considerada uma aplicação que usa machine learning.

Comentários:

Uma aplicação que reconheça o acesso de um usuário e forneça sugestões diferentes para cada tipo
de usuário, em geral, utiliza sistemas de recomendações que – por sua vez – utilizam algoritmos de
Machine Learning para que a aplicação consiga aprender com o contexto e fazer sugestões mais
certeiras – é o velho exemplo do Netflix!

                                                                               Gabarito: Correto

25. (CESPE / ABIN – 2018) O registro e a análise de conjuntos de dados referentes a eventos de
    segurança da informação são úteis para a identificação de anomalias; esse tipo de recurso pode
    ser provido com uma solução de big data.

Comentários:

O Big Data é capaz de registrar e analisar dados estruturados ou não-estruturados de diversos
contextos diferentes para descobrir informações de valor para o negócio de uma organização.
Dentre eles, eventos de segurança da informação para identificação de anomalias é – sim – uma
possibilidade.

                                                                               Gabarito: Correto

26. (CESPE / IPHAN – 2018) A utilização de tecnologias emergentes para o tratamento de grandes
    volumes de dados (big data) pode contribuir para o sucesso da implantação da estratégia de
    governança digital.

Comentários:

A governança digital define objetivos estratégicos, metas, indicadores e iniciativas de uma
determinada organização. Uma vez que os dados obtidos através do Big Data são tratados de
alguma maneira, eles podem contribuir para a obtenção de informações relevantes para a tomada
de decisões estratégicas.


---

                                                                                 Gabarito: Correto

27. (CESPE / TCE-MG – 2018) Uma empresa, ao implementar técnicas e softwares de big data, deu
    enfoque diferenciado à análise que tem como objetivo mostrar as consequências de
    determinado evento. Essa análise é do tipo:

   a) preemptiva.
   b) perceptiva.
   c) prescritiva.
   d) preditiva.
   e) evolutiva.

Comentários:

Em vez de tentar prever um determinado acontecimento, a Análise Prescritiva busca prever as
consequências deste acontecimento. Exemplo: dado um aumento do valor do dólar no ano que
vem, como isso poderá afetar as importações de matéria prima, consequentemente, o faturamento
das vendas de determinada empresa.

                                                                                 Gabarito: Letra C

28. (CESPE / TCE-MG – 2018) Um dos desdobramentos de big data é o Big Data Analytics, que se
    refere aos softwares capazes de tratar dados para transformá-los em informações úteis às
    organizações. O Big Data Analytics difere do Business Intelligence por:

   a) priorizar o ambiente de negócios em detrimento de outras áreas.
   b) analisar dúvidas já conhecidas para as quais se deseje obter resposta.
   c) analisar o que já existe e o que está por vir, apontando novos caminhos.
   d) dar enfoque à coleta, à transformação e à disponibilização dos dados.
   e) analisar o que já existe, definindo as melhores hipóteses.

Comentários:

O Business Intelligence trata de encontrar respostas que explicam o passado, já o Big Data Analytics
trata de encontrar as perguntas que explicam o futuro. Ambos possuem grande importância,
complementam-se e devem ser bem entendidos para que as empresas possam aproveitá-los da
melhor forma, agregando e alcançando os valores e resultados desejados aos negócios. Dessa
forma, podemos concluir que o Big Data Analytics difere do Business Intelligence por analisar o que
já existe e o que está por vir, apontando novos caminhos.

                                                                                 Gabarito: Letra C


---

29. (CESPE / Polícia Federal – 2018) A mineração de dados se caracteriza especialmente pela busca
    de informações em grandes volumes de dados, tanto estruturados quanto não estruturados,
    alicerçados no conceito dos 4V’s: volume de mineração, variedade de algoritmos, velocidade de
    aprendizado e veracidade dos padrões.

Comentários:

Opa... a questão trata de Big Data e, não, de Mineração de Dados! Além disso, são 5V’s e todos eles
tratam de dados: volume de dados, variedade de dados, velocidade de dados, veracidade dos dados
e valor dos dados.

                                                                                 Gabarito: Errado

Em um big data, alimentado com os dados de um sítio de comércio eletrônico, são armazenadas
informações diversificadas, que consideram a navegação dos usuários, os produtos comprados e
outras preferências que o usuário demonstre nos seus acessos.

Tendo como referência as informações apresentadas, julgue o item seguinte.

30. (CESPE / Polícia Federal – 2018) Pelo monitoramento do tráfego de rede no acesso ao sítio em
    questão, uma aplicação que utiliza machine learning é capaz de identificar, por exemplo, que os
    acessos diminuíram 20% em relação ao padrão de acesso em horário específico do dia da
    semana.

Comentários:

Perfeito! Ferramentas de Machine Learning são capazes de analisar uma grande quantidade de
dados por meio de algoritmos complexos para encontrar padrões interessantes que sejam úteis
para o negócio e fazer insights de forma autônoma. Logo, uma aplicação certamente seria capaz
de identificar queda no acesso em relação ao padrão do horário específico do dia da semana por
meio do monitoramento do tráfego. Aliás, isso é bastante utilizado por redes sociais para
incrementar ou reduzir a quantidade de anúncios e propagandas.

                                                                                Gabarito: Correto

31. (CESPE / Polícia Federal – 2018) Uma aplicação que reconheça o acesso de um usuário e forneça
    sugestões diferentes para cada tipo de usuário pode ser considerada uma aplicação que usa
    machine learning.

Comentários:

Perfeito! Observe que o enunciado menciona que a solução é alimentada com os dados de um sítio
de comércio eletrônico, armazenando informações diversificadas, que consideram a navegação dos


---

usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus acessos.
Isso é frequentemente utilizado em redes sociais para exibir anúncios específicos de acordo com o
perfil de um usuário.

Por exemplo: meu instagram não para de exibir anúncios de camisas do Flamengo e do Pink Floyd.
Por que? Porque ele analisa uma quantidade imensa de dados que eu forneço enquanto navego por
essa rede social e é capaz de identificar autonomamente que eu sigo páginas sobre esses temas.

                                                                                 Gabarito: Correto

32. (CESPE / Polícia Federal – 2018) Dados coletados de redes sociais podem ser armazenados,
    correlacionados e expostos com o uso de análises preditivas.

Comentários:

Dados coletados de redes sociais podem ser armazenados? Sim! Podem ser correlacionados? Sim!
Podem ser expostos com o uso de análises preditivas? Sim! A Análise Preditiva é capaz de identificar
o relacionamento existente entre os componentes de um conjunto de dados, utilizando algoritmos
sofisticados, com o intuito de identificar padrões de comportamento ao examinar grandes
quantidades de dados automaticamente. Logo, é claro que dados coletados de redes sociais podem
ser expostos com o uso de análises preditivas.

                                                                                 Gabarito: Correto

33. (CESPE / TCE-PE – 2017) Além de estar relacionado à grande quantidade de informações a
    serem analisadas, o Big Data considera o volume, a velocidade e a variedade dos dados
    estruturados — dos quais se conhece a estrutura de armazenamento — bem como dos não
    estruturados, como imagens, vídeos, áudios e documentos.

Comentários:

Perfeito! Volume, Velocidade e Variedade são algumas das características que definem o que é Big
Data – além de ser formado por dados estruturados e não estruturados.

                                                                                 Gabarito: Correto

34. (CESPE / TCE-PE – 2017) O termo Big Data Analytics refere-se aos poderosos softwares que
    tratam dados estruturados e não estruturados para transformá-los em informações úteis às
    organizações, permitindo-lhes analisar dados, como registros de call center, postagens de redes
    sociais, de blogs, dados de CRM e demonstrativos de resultados.

Comentários:


---

Big Data Analytics é o estudo e interpretação de grandes quantidades de dados armazenados com
a finalidade de extrair padrões de comportamento. Em outras palavras, utiliza-se uma combinação
de sistemas de softwares matemáticos de alta tecnologia que juntos são capazes de tratar dados
estruturados e não-estruturados, analisá-los e extrair um significado de alto valor para
organizações. E, de fato, é permitido analisar dados como registros de call center, postagens de
redes sociais, de blogs, dados de CRM e demonstrativos de resultados.

                                                                               Gabarito: Correto

35. (CESPE / TRE-GO – 2015) A Big Data pode ser utilizada na EAD para se entender as preferências
    e necessidades de aprendizagem dos alunos e, assim, contribuir para soluções mais eficientes
    de educação mediada por tecnologia.

Comentários:

A grande quantidade de informações obtidas através do Big Data pode ser empregada para auxiliar
em diversos cenários de tomadas estratégicas de decisões, tal como em um EAD (Ensino À
Distância).

                                                                               Gabarito: Correto

36. (CESPE / FUNPRESP-EXE - 2016) Em um banco de dados NoSQL do tipo grafo, cada arco é
    definido por um identificador único e expresso como um par chave/valor.

Comentários:

Bancos NoSQL orientados a grafos não trabalham com chave-valor e, sim, com nós, arestas e
propriedades. Além disso, são os nós que são definidos por um identificador único.

                                                                               Gabarito: Errado

37. (CESPE / FUNPRESP-JUD - 2016) Em um banco de dados NoSQL orientado a documentos, a
    inexistência de um esquema impossibilita a definição de índices.

Comentários:

Opa! A ausência de esquema não impede que os índices sejam definidos. Os bancos de dados
NoSQL permitem a criação de índices para melhorar a performance de acesso aos dados, mesmo
que não haja esquema definido.

                                                                               Gabarito: Errado


---

38. (CESPE / FUNPRESP - JUD – 2016) Uma big data não engloba dados não estruturados, mas
    inclui um imenso volume de dados estruturados suportado por tecnologias como o DataMining
    e o DataWarehouse para a obtenção de conhecimento a partir da manipulação desses dados.

Comentários:

Big Data é o termo que descreve o imenso volume de dados – estruturados e não estruturados –
que impactam os negócios de uma organização.

                                                                               Gabarito: Errado

39. (CESPE / TJ-SE – 2014) Ao utilizar armazenamento dos dados em nuvem, a localização do
    processamento de aplicações Big Data não influenciará os custos e o tempo de resposta, uma
    vez que os dados são acessíveis a partir de qualquer lugar.

Comentários:

Para uma quantidade gigantesca de dados, a distância do local de processamento afeta – sim – os
custos e o tempo de resposta. Quanto mais próximo, mais barato e mais rápido; quanto mais longe,
mais caro e mais lento. É claro que isso pode mudar nos próximos anos...

                                                                               Gabarito: Errado

40. (CESPE / TJ-SE – 2014) Em soluções Big Data, a análise dos dados comumente precisa ser
    precedida de uma transformação de dados não estruturados em dados estruturados.

Comentários:

Para executar a análise dos dados, os dados não estruturados comumente devem estar em algum
tipo de formato estruturado (Ex: JSON, que é um formato de intercâmbio de dados).

                                                                              Gabarito: Correto


---

                      QUESTÕES COMENTADAS – FCC

41. (FCC / SEFAZ-SC - 2018) Como não existe um modelo de armazenamento de dados único
    adequado para atender a todos os cenários e necessidades das aplicações de Big Data, em
    complemento ao modelo relacional, foram criados quatro novos tipos de armazenamento
    NoSQL (Not only SQL). Dentre esses, aqueles que modelam os dados usando o formato de
    linhas e colunas são APENAS os tipos de bancos de dados orientados a colunas,

   a) chave-valor e grafos.
   b) chave-valor e documentos.
   c) documentos e grafos.
   d) chave-valor.
   e) grafos.

Comentários:

Todos os modelos podem usar o formato de linhas e colunas, exceto o modelo orientado a grafos
– que usa uma estrutura composta de nós, arestas e propriedades para representar e armazenar
dados.

                                                                              Gabarito: Letra B

42. (FCC / SEFAZ-SC – 2018) No âmbito da ciência de dados na definição de Big Data, utilizam-se
    características ou atributos que alguns pesquisadores adotam como sendo os cinco Vs. Porém,
    a base necessária para o reconhecimento de Big Data é formada por três propriedades:

   a) valor, velocidade e volume.
   b) valor, veracidade e volume.
   c) variedade, velocidade e volume.
   d) variedade, valor e volume.
   e) velocidade, veracidade e volume.

Comentários:

As três propriedades principais são variedade, velocidade e volume.

                                                                              Gabarito: Letra C

43. (FCC / SEFAZ-SC – 2018) As soluções em Big Data Analytics, usadas, por exemplo, pela Fazenda
    Pública principalmente para evitar sonegações de tributos, trabalham com algoritmos
    complexos, agregando dados de origens diversas, relacionando-os e gerando conclusões


---

   fundamentais para a tomada de decisões. Na execução dessas análises pelos auditores,
   considere:

   I. Dados estruturados.
   II. Dados semiestruturados.
   III. Dados não estruturados.
   IV. Dados brutos, não processados.
   V. Esquemas de dados gerados no momento da gravação.

   Sobre um repositório de armazenamento, que contenha uma grande quantidade de dados a ser
   examinada, deverão ser utilizados APENAS os que constam de:

   a) I, III e IV.
   b) I, II, III e V.
   c) III, IV e V.
   d) I, II, III e IV.
   e) I, II, IV e V.

Comentários:

Devem ser utilizados apenas Dados Estruturados, Dados Semiestruturados, Dados Não-
Estruturados e Dados Brutos. Os Dados Brutos designam os dados/valores recolhidos e
armazenados tal qual foram adquiridos, sem terem sofrido o menor tratamento. Apresentam-se
como um conjunto de números, caracteres, imagens ou outros dispositivos de saídas para converter
quantidades físicas em símbolos, num sentido muito extenso. No entanto, esquemas de dados
gerados no momento da gravação são dados temporários e, normalmente, não são úteis como
fonte de dados para Big Data Analytics.

                                                                              Gabarito: Letra D

44. (FCC / TCE-RS – 2018) Um sistema de Big Data costuma ser caracterizado pelos chamados 3 Vs,
    ou seja, volume, variedade e velocidade. Por variedade entende-se que:

   a) há um grande número de tipos de dados suportados pelo sistema.
   b) há um grande número de usuários distintos acessando o sistema.
   c) os tempos de acesso ao sistema apresentam grande variação.
   d) há um grande número de tipos de máquinas acessando o sistema.
   e) os tamanhos das tabelas que compõem o sistema são muito variáveis.

Comentários:

(a) Correto. A Variedade é a propriedade de os dados serem gerados em inúmeros formatos
diferentes – estruturados e não-estruturados; (b) Errado. Não há limitação de usuários distintos
acessando o sistema na definição; (c) Errado. Tempos de acesso não entram na definição de


---

variedade dos 3V’s; (d) Errado. Quantidade de tipos de máquinas acessando o sistema não entram
na definição de variedade dos 3V’s; (e) Errado. Tamanhos das tabelas que compõem o sistema não
entram na definição de variedade dos 3V’s.

Lembrando que o Big Data foi inicialmente conceituado com base apenas em três premissas
básicas: Volume, Velocidade e Variedade (3 V’s).

                                                                              Gabarito: Letra A

45. (FCC / Câmara Legislativa do Distrito Federal – 2018) A proposta de uma solução de Big Data,
    oferecendo uma abordagem consistente no tratamento do constante crescimento e da
    complexidade dos dados, deve considerar os 5 V’s do Big Data que envolvem APENAS os
    conceitos de:

   a) volume, versionamento, variedade, velocidade e visibilidade.
   b) velocidade, visibilidade, volume, veracidade e vencimento do dado
   c) volume, velocidade, variedade, veracidade e valor
   d) variedade, vencimento do dado, veracidade, valor e volume
   e) vulnerabilidade, velocidade, visibilidade, valor e veracidade

Comentários:

(a) Errado, não envolve versionamento e visibilidade; (b) Errado, não envolve visibilidade e
vencimento do dado; (c) Correto; (d) Errado, não envolve vencimento do dado; (e) Errado, não
envolve vulnerabilidade e visibilidade.

                                                                              Gabarito: Letra C


---

                      QUESTÕES COMENTADAS – FGV

46.(FGV / TJ-RN - 2023) Observe a estrutura do dataset ilustrado a seguir

   Para armazenar o dataset ilustrado, é necessário utilizar o banco de dados NoSQL:

   a) grafo;
   b) colunar;
   c) chave-valor;
   d) criptografado;
   e) orientado a documento.

Comentários:

A imagem nos mostra um grafo – para armazenar o conjunto de dados ilustrado, é necessário
utilizar o banco de dados NoSQL do tipo grafo.

                                                                               Gabarito: Letra A

47. (FGV / TJ-RN - 2023) O modelo de banco de dados em que a associação entre dois registros é
    feita por meio do relacionamento entre um registropai e vários registros-filhos com
    cardinalidade 1:N, e a navegação é feita da raiz para as folhas, é o:

   a) em rede;
   b) otimizado;
   c) relacional;
   d) hierárquico;
   e) orientado a objetos.

Comentários:

A questão trata do modelo hierárquico. Nesse modelo, os dados são organizados em uma estrutura
de árvore, onde cada registro possui um único pai, exceto o registro raiz, que não possui pai. Os


---

registros filhos são associados aos registros pais por meio de relacionamentos 1:N, o que significa
que um registro pai pode ter vários registros filhos, mas um registro filho só pode ter um único pai.

                                                                                  Gabarito: Letra D

48.(FGV / TJ-RN - 2023) O volume de informações digitais heterogêneas sobre processos judiciais
   está crescendo diariamente, especialmente quando correlações com bases de dados de outros
   contextos são criadas. Observe o seguinte exemplo de representação gráfica de uma pequena
   amostra do dataset ProcessosJudiciais, contendo nós, arestas e propriedades, armazenado em
   um banco de dados massivo. Imagem associada para resolução da questão

   Para armazenar o dataset ProcessosJudiciais exemplificado, é necessário utilizar um banco de
   dados:

   a) ágil;
   b) de grafos;
   c) chave-valor;
   d) orientado a objeto;
   e) orientado a documentos.

Comentários:

A imagem nos mostra um grafo, logo é necessário utilizar um banco de dados de grafos.

                                                                                  Gabarito: Letra B

49.(FGV / TJ-RN - 2023) Os bancos de dados massivos possuem características que precisam ser
   consideradas no desenvolvimento de soluções para analisar os dados armazenados.

   Nesse tipo de ambiente de bancos de dados, a capacidade de minimizar os ruídos dos dados
   oriundos de múltiplas fontes heterogêneas, identificar o que é irrelevante e redundante, e apoiar
   a limpeza dos dados, contribuindo para sua qualidade, corresponde à característica Big Data:

   a) valor;


---

   b) volume;
   c) variedade;
   d) veracidade;
   e) velocidade.

Comentários:

A característica Big Data que corresponde à capacidade de minimizar ruídos, identificar o que é
irrelevante e redundante, e apoiar a limpeza dos dados para melhorar sua qualidade é a variedade.

                                                                                Gabarito: Letra D

50. (FGV / Receita Federal - 2023) Bancos de dados NoSQL são usualmente divididos em categorias
    de store.

   Assinale a opção que apresenta o tipo de store que privilegia velocidade, capacidade de leitura
   e escrita e estruturas de dados flexíveis, sem a necessidade de esquemas estabelecidos
   previamente.

   a) Document.
   b) Key Value.
   c) Wide-Column.
   d) Graph.
   e) Full Text.

Comentários:

Vamos responder por eliminação: (e) Errado, porque isso não é um tipo de store de bancos de dados
NoSQL; (d) Errado, porque ele velocidade de leitura/escrita mais lenta que os outros tipos; (c)
Errado, porque esse tipo de banco de dados necessita de um esquema estabelecido previamente.

Agora aqui chegamos a um problema: tanto bancos de dados orientados a documentos quanto
bancos de dados Key Value apresentam as características do enunciado. Em regra, de forma
genérica, os bancos de dados Key Value são mais rápidos que os bancos de dados orientados a
documentos. Houve alguns recursos, mas a banca respondeu da seguinte forma:

A questão foca no tipo de store utilizado por um banco de dados NoSQL, e não na comparação entre
bancos NoSQL vs bancos relacionais. Nesse contexto, o modo key-value tem a maior flexibilidade e
velocidade de recuperação, pois cada item de dado (value) é acessível diretamente a partir de uma
chave (key). As demais stores citadas dentre as alternativas incluem algum elemento no sentido de
uma estrutura, tais como documentos, graphs e wide column. Full text torna as buscas mais lentas.
Recurso indeferido.


---

                                                                                    Gabarito: Letra B

51. (FGV / IBGE - 2017) Observe a figura a seguir que ilustra relações entre colegas e seus interesses.

   O tipo de Banco de Dados NoSQL, não relacional, que armazena tais informações, utilizando
   estruturas de vértices e arestas, com propriedades associadas, é o:

   a) Colunar;
   b) Documento;
   c) Grafo;
   d) Chave-valor;
   e) Tabular.

Comentários:

Estrutura de vértices e arestas com propriedades associadas? Trata-se do modelo orientado a grafos.
Dentre os modelos classificados como NoSQL, o orientado a grafo é o que mais se distancia dos
demais. Enquanto as outras abordagens têm seu foco no armazenamento dos dados, esse modelo
tem como destaque principal os relacionamentos que ocorrem entre as entidades de sua base. Os
bancos de dados que seguem essa abordagem possuem três tipos de informações: os nós, arestas
e propriedades.

                                                                                    Gabarito: Letra C

52. (FGV / IBGE - 2017) Bancos de Dados NoSQL podem armazenar dados em diversos formatos
    não relacionais, como documentos compostos por pares de campo-e-valor (field-and-value),
    conforme a estrutura exemplificada a seguir.


---

   O Banco de Dados NoSQL utilizado para armazenar documentos compostos por pares campo-
   e-valor, no formato BSON (JSON-like), é o:

   a) OpenLink Virtuoso;
   b) Neo4j;
   c) Apache HBase;
   d) MongoDB;
   e) Titan.

Comentários:

BSON (Binary JSON) é uma serialização codificada em binário de documentos do tipo JSON. É
usado principalmente como um formato de armazenamento de dados e transferência de rede no
MongoDB, mas também pode ser usado em outros locais. BSON estende o modelo JSON para
fornecer tipos de dados adicionais e para ser eficiente para codificação e decodificação em
diferentes idiomas.

(a) Errado, trata-se de um SGBD híbrido (relacional, objeto-relacional, etc); (b) Errado, trata-se de
um SGBD orientado a grafos; (c) Errado, trata-se de um SGBD orientado a coluna; (d) Correto, trata-
se de um SGBD orientado a documentos; (e) Errado, trata-se de um SGBD orientado a grafos.

                                                                                  Gabarito: Letra D

53. (FGV / IBGE - 2016) Considere as seguintes características de um projeto de banco de dados.

   I. O modelo de dados é conhecido a priori e é estável;
   II. A integridade dos dados deve ser rigorosamente mantida;
   III. Velocidade e escalabilidade são preponderantes.

   Dessas características, o emprego de bancos de dados NoSQL é favorecido somente por:

   a) I;
   b) I e II;
   c) II;
   d) II e III;
   e) III.

Comentários:

(I) Errado, bancos de dados NoSQL permitem a inserção de dados a qualquer momento sem a
necessidade de definir previamente um esquema ou por meio de um esquema flexível; (II) Errado,
normalmente não impõem regras de integridade de dados, o que pode levar a erros e inconsistência
de dados – o que geralmente não ocorre com bancos de dados relacionais; (III) Correto, A velocidade
é importante no processamento de grandes conjuntos de dados, pois significa a diferença entre


---

explorar os dados interativamente e esperar minutos ou horas e a escalabilidade também é
importante para acomodar cargas de trabalho em larga escala, permitindo que os usuários
aumentem ou diminuam a capacidade de armazenamento de acordo com as necessidades de
negócios.

                                                                                Gabarito: Letra E

54. (FGV / TJ-SC – 2015) Os termos Business Intelligence (BI) e Big Data confundem-se em certos
    aspectos. Uma conhecida abordagem para identificação dos pontos críticos de cada paradigma
    é conhecida como 3V, e destaca:

   a) variedade, visualização, volume;
   b) velocidade, virtualização, volume;
   c) variedade, velocidade, volume;
   d) virtualização, visualização, volume;
   e) variedade, visualização, virtualização.

Comentários:

O Big Data pode ser rapidamente identificado através das premissas: Variedade, Velocidade e
Volume.

                                                                                Gabarito: Letra C

55. (FGV / TJ-BA - 2015) Analise as afirmativas a respeito da classe de gerenciadores de bancos de
    dados, surgida em anos recentes, conhecida como NoSQL.

   I. Mesmo sem suportar tabelas relacionais, baseiam-se em esquemas de dados previamente
   definidos;
   II. Suas estruturas não permitem o uso de linguagens do tipo do SQL para recuperação de dados;
   III. Garantem operações com as propriedades conhecidas pela sigla ACID;
   IV. Privilegiam a rapidez de acesso e a disponibilidade dos dados em detrimento das regras de
   consistência das transações.

   O número de afirmativas corretas é:

   a) uma;
   b) duas;
   c) três;
   d) quatro;
   e) cinco.

Comentários:


---

(I) Errado, eles permitem a inserção de dados a qualquer momento sem a necessidade de definir
previamente um esquema ou por meio de um esquema flexível;

(II) Errado, a sigla significa Not Only SQL (Não Apenas SQL). Logo, ele suporta outras linguagens de
recuperação de dados e não apenas SQL;

(III) Errado, eles não garantem as propriedades ACID e, sim, as propriedades BASE (Basicamente
Disponível, Estado Suave e Eventualmente Consistente);

(IV) Correto, eles realmente privilegiam a maior disponibilidade e rapidez nas consultas dado que
precisam tratar de volumes gigantescos de dados com alta disponibilidade escalabilidade.

                                                                                 Gabarito: Letra A

56. (FGV / PROCEMPA - 2014) O teorema CAP (CAP Theorem) é um importante resultado teórico
    na Ciência da Computação, e frequentemente é referenciado na comparação entre sistemas de
    bancos de dados “tradicionais” e aqueles que são conhecidos pela sigla NoSQL. Esse teorema
    aborda as propriedades (ou garantias) que um sistema de banco de dados deve prover, e é
    central na discussão das conveniências de utilização de um ou outro modelo.

   Assinale a opção que descreve, corretamente, o significado das letras na sigla CAP.

   a) Concurrency, Access, Time
   b) Consistency, Atomicity, Parallel processing.
   c) Consistency, Availability, Partition tolerance.
   d) Concurrency, Availability, Pear processing.
   e) Control, Atomicity, Partition network.

Comentários:

Teorema CAP (Consistency, Availability, Partition Tolerance) é o teorema que afirma que em
sistemas distribuídos não é possível garantir simultaneamente a consistência dos dados, a
disponibilidade contínua e a tolerância de partição. Em outras palavras, se você tiver um banco de
dados distribuído, só poderá ter duas das três características ao mesmo tempo.

                                                                                 Gabarito: Letra C

57. (FGV / AL-BA – 2014) A expressão Big Data é utilizada para descrever o contexto da informação
    contemporânea, caracterizada pelo volume, velocidade e variedade de dados disponíveis, em
    escala inédita. Com relação às características do Big Data, analise as afirmativas a seguir.


---

   I. O volume da informação se refere ao fato de que certas coleções de dados atingem a faixa de
   gigabytes (bilhões de bytes), terabytes (trilhões), petabytes (milhares de trilhões) ou mesmo
   exabytes (milhões de trilhões).

   II. A velocidade está relacionada à rapidez com a qual os dados são produzidos e tratados para
   atender à demanda, o que significa que não é possível armazená-los todos, de modo que somos
   obrigados a escolher dados para guardar e outros para descartar.

   III. A variedade significa que os dados de hoje aparecem em todos os tipos de formatos, como,
   por exemplo, arquivos de texto, e-mail, medidores e sensores de coleta de dados, vídeo, áudio,
   dados de ações do mercado ou transações financeiras.

   Assinale:

   a) se somente a afirmativa I estiver correta.
   b) se somente a afirmativa II estiver correta.
   c) se somente a afirmativa III estiver correta.
   d) se somente as afirmativas I e II estiverem corretas.
   e) se todas as afirmativas estiverem corretas.

Comentários:

(I) Correto. Volume trata realmente da quantidade gigantesca e crescente de dados; (II) Correto.
Velocidade trata da capacidade de processar dados rapidamente para gerar as informações
necessárias para que sejam tomadas decisões de forma tempestiva. No entanto, a questão fala que
não é possível armazenar todos os dados, sendo obrigatório escolher os dados que serão
armazenados. Eu discordo desse entendimento, mas a banca manteve o gabarito; (III) Correto.
Variedade trata dos diferentes tipos de dados (estruturados e não-estruturados) advindos de fontes
diversas.

                                                                                Gabarito: Letra E


---

          QUESTÕES COMENTADAS – DIVERSAS BANCAS

58. (CP-T / Marinha - 2022) De acordo com Elmasri (2018), em projetos de bancos de dados
    distribuídos, é possível dividir os dados em unidades lógicas de acordo com as técnicas de:

   a) disjunção inclusiva ou shardíng, na qual as tuplas são separadas de acordo com suas
   semelhanças de chave primária; disjunção exclusiva, na qual a condição de separação se dá por
   meio das colunas da relação; disjunção condicional, na qual as tuplas são separadas por meio de
   uma condição definida de acordo com um ou mais atributos da relação; e disjunção mista, que
   integra os demais tipos de disjunção.

   b) disjunção exclusiva, na qual as tuplas são separadas de acordo com suas semelhanças de
   chave primária; disjunção inclusiva ou shardíng, onde a condição de separação se dá por meio
   das colunas da relação; disjunção condicional, na qual as tuplas são separadas por meio de uma
   condição definida de acordo com um ou mais atributos da relação; e disjunção mista, que integra
   os demais tipos de disjunção.

   c) fragmentação inclusiva ou shardíng, na qual as tuplas são separadas de acordo com suas
   semelhanças de chave primária; fragmentação exclusiva, na qual a condição de separação se dá
   por meio das colunas da relação; fragmentação condicional, na qual as tuplas são separadas por
   meio de uma condição definida de acordo com um ou mais atributos da relação; e fragmentação
   mista, que integra os demais tipos de fragmentação.

   d) fragmentação vertical ou shardíng, na qual uma relação é um subconjunto das tuplas nessa
   relação; fragmentação horizontal, na qual o fragmento é gerado a partir das colunas da relação;
   fragmentação híbrida, que integra os outros dois tipos; alocação geral, que compreende a cópia
   de todos os dados; alocação não redundante, que significa não ter replicação e replicação parcial
   de dados, na qual apenas alguns fragmentos são replicados.

   e) fragmentação horizontal ou shardíng, na qual o fragmento de uma relação é um subconjunto
   das tuplas nessa relação; fragmentação vertical, na qual o fragmento é gerado a partir das
   colunas da relação; e fragmentação híbrida, que mistura os outros dois tipos.

Comentários:

Fragmentação/Particionamento Horizontal (também chamado de Sharding) divide as tabelas em
linhas ou tuplas. Já Fragmentação/Particionamento Vertical divide as tabelas em colunas. Por fim,
a Fragmentação/Particionamento Híbrida realmente mistura os outros dois tipos.

                                                                                 Gabarito: Letra E


---

59. (SELECON / EMGEPRON – 2021) Trata-se de uma infinidade de informações não estruturadas
    que, quando usadas com inteligência, se tornam uma arma poderosa para empresas tomarem
    decisões cada vez melhores. As soluções tecnológicas que trabalham com esse conceito
    permitem analisar um enorme volume de dados de forma rápida e ainda oferecem total controle
    ao gestor das informações. E as fontes de dados são as mais diversas possíveis: de textos e fotos
    em rede sociais, passando por imagens e vídeos, até jogadas específicas no esporte e até
    tratamentos na medicina.

                                                         (http://olhardigital. uol. com.br/pro/video/39376/39376).


   O conceito definido no texto é:

   a) Governança de TI.
   b) QoS.
   c) Big Data.
   d) Data Center.
   e) ITIL.

Comentários:

Infinidade de informações não estruturadas? Arma poderosa para empresas tomarem decisões?
Permitem analisar um enorme volume de dados de forma rápida? Oferecem total controle ao gestor
das informações? As fontes de dados são as mais diversas possíveis? Todas essas são características
de Big Data!

                                                                                          Gabarito: Letra C

60. (COMPERVE / TJ/RN – 2020) Embora Big Data tenha diferentes definições, há um consenso
    sobre o modelo dos 3 V’s que correspondem a 3 características. Duas dessas características são:

   a) Volume e Velocity.
   b) Variety e Value.
   c) Viable e Vast.
   d) Valid e Verbose.

Comentários:

Na verdade, atualmente já existe um consenso sobre os 5V’s. No entanto, o Big Data foi
inicialmente conceituado com base apenas em três premissas: Volume, Velocidade e Variedade
(Volume, Velocity e Variety).

                                                                                          Gabarito: Letra A

61. (CCV-UFC / UFC – 2019) Sobre os banco de dados NoSQL, assinale a afirmativa correta:


---

   a)Bancos de dados NoSQL não podem ser indexados.
   b)Bancos de dados NoSQL são considerados banco de dados relacionais.
   c) Nos bancos de dados NoSQL devem ser definidos um esquema de dados fixo antes de
   qualquer operação.
   d) São exemplos de bancos de dados NoSQL: MongoDB, Firebird, DynamoDB, SQLite,
   Microsoft Access e Azure Table Storage.
   e) Os bancos de dados NoSQL usam diversos modelos para acessar e gerenciar dados, como
   documento, gráfico, chave-valor, em memória e, pesquisa.

Comentários:

(a) Errado, podem – sim – ser indexados; (b) Errado, são considerados não-relacionais; (c) Errado,
não é necessário definir um esquema fixo prévio; (d) Errado, FireBird, SQLite e Microsoft Access são
exemplos de bancos de dados relacionais; (e) Correto, eles realmente usam modelos para acessar e
gerenciar dados como documento, gráfico, chave-valor, em memória e pesquisa. Algumas
ressalvas: (1) o termo mais correto é grafo; (2) em memória e pesquisa não são modelos
consagrados.

                                                                                  Gabarito: Letra E

62. (IADES / APEX BRASIL – 2018) Assinale a alternativa que apresenta o conceito de Big Data.

   a) Conjuntos de dados de grande volume que se utilizam de ferramentas especiais de
   processamento, pesquisa e análise, e que podem ser aproveitados no tempo necessário, com
   precisão e grande velocidade.

   b) São bancos de dados de fácil acesso e rápida velocidade, operados como computadores
   pessoais.

   c) Manuseio de informações necessárias às empresas e aos negócios do mundo moderno, que
   podem ser armazenadas em computadores pessoais, utilizando-se a técnica de nuvem de
   dados.

   d) São apenas grandes volumes de dados que precisam ainda ser mais bem aproveitados pelo
   mundo corporativo.

   e) Refere-se a um grande número de computadores pessoais (PC) interligados entre si em uma
   grande rede de informação.

Comentários:

(a) Correto. Trata-se de um enorme conjunto de dados que utiliza softwares especiais para o
processamento e transformação de dados em informações com precisão em uma velocidade


---

absurdamente alta; (b) Errado. Não são de fácil acesso e rápida velocidade, muito menos operados
como computadores pessoais; (c) Errado. Não há nada que faça sentido nesse item; (d) Errado.
Atualmente eles são muito bem aproveitados pelo mundo corporativo; (e) Errado. Essa é a
definição de uma rede de computadores.

                                                                                Gabarito: Letra A

63. (CESGRANRIO / PETROBRAS – 2018) A principal definição de Big Data parte de três
    características, conhecidas como 3 V do Big Data, a saber: velocidade, variedade e volume. O
    termo velocidade refere-se, principalmente, à:

   a) necessidade das aplicações de gerar respostas rapidamente, a partir de grandes massas de
   dados.

   b) existência de um alto fluxo de dados na entrada.

   c) necessidade de gerar aplicações rapidamente, em função da demanda do negócio.

   d) importância da facilidade de manipular cubos de visualização de dados, rapidamente.

   e) rapidez com que os dados se tornam inválidos com o tempo.

Comentários:

O termo velocidade refere-se à velocidade com que os dados são criados. Em outras palavras, trata-
se da existência de um alto fluxo de dados na entrada. São mensagens de redes sociais se
viralizando em segundos, transações de cartão de crédito sendo verificadas a cada instante ou os
milissegundos necessários para calcular o valor de compra e venda de ações.

                                                                                Gabarito: Letra B

64.(AOCP / CPD/BA – 2018) Big Data se refere ao imenso volume de conjuntos de dados que
   alcançam elevadas ordens de magnitude. O valor real do Big Data está no insight que ele produz
   quando analisado — buscando padrões, derivando significado, tomando decisões e, por fim,
   respondendo ao mundo com inteligência. Referente ao Big Data, é correto afirmar que o termo
   variedade refere-se:

   a) um conjunto de dados mais diversos, incluindo dados estruturados, semiestruturados e não
   estruturados. É heterogêneo e vem em muitos formatos, incluindo texto, documento, imagem,
   vídeo e outros.

   b) a banco de dados homogêneo que trata de informações do mesmo tipo definindo padrões de
   segurança.


---

      c) a um conjunto de dados que são gerados em tempo real, o que requer a oferta imediata de
      informações úteis.

      d) aos data centers físicos que transformam os dados em informações pertinentes ao negócio.

      e) ao controle de dados semiestruturados de formatos definidos como texto e números.

Comentários:

(a) Correto, essa é definição perfeita de variedade no contexto de Big Data; (b) Errado, trata-se de
um banco de dados heterogêneo, que trata de informações de tipos diferentes e sem um padrão de
segurança; (c) Errado, essa definição se refere à velocidade; (d) Errado, essa definição não apresenta
nenhuma relação com o conceito de variedade; (e) Errado, o conceito de variedade trata de dados
em quaisquer formatos.

                                                                                   Gabarito: Letra A

65. (QUADRIX / CRM/DF – 2018) O fato de o ser humano gerar milhares de informações a cada
    minuto dá origem ao conceito de Big Data, que se trata de uma nova linha de banco de dados
    que não possui qualquer relação com as existentes até o momento. Pelo fato de as bases de
    dados Big Data serem do tipo Plano, não podem ser manipuladas e consultadas pelo SQL.

Comentários:

Big Data não é uma nova linha de banco de dados. Além disso, as bases de dados não são do tipo
plano (que são aquelas que armazenam dados em um arquivo texto simples) – elas são, em geral,
não-relacionais.

                                                                                    Gabarito: Errado

66.      FEPESE / CIA/SC – 2017) Um banco de dados de Big Data deve possuir pelo menos três
      aspectos, os chamados 3Vs do Big Data, que são:

      a) Variedade; Volume; Valor.
      b) Valor; Variabilidade; Velocidade.
      c) Volume; Veracidade; Velocidade.
      d) Veracidade; Velocidade; Variedade.
      e) Velocidade; Volume; Variedade.

Comentários:


---

Atualmente, existe um consenso sobre os 5V’s! No entanto, o Big Data foi inicialmente conceituado
com base apenas em três premissas: Volume, Velocidade e Variedade.

                                                                                 Gabarito: Letra E

67. (CESGRANRIO / PETROBRÁS – 2017) O termo Big Data é bastante conhecido pelos
    profissionais de tecnologia da informação, especialmente aqueles envolvidos com bancos de
    dados, inteligência de negócios, sistemas de informações e sistemas de apoio à decisão. Uma
    característica inerente a esse conceito é a da:

   a) complexidade das suas fontes de informação, o que demanda a necessidade de sua prévia
   limpeza, integração e transformação.

   b) estabilidade da taxa de geração desses dados, o que garante sua utilização confiável na
   geração analítica de informação com independência temporal.

   c) heterogeneidade do conjunto de dados, empregada em dados originalmente estruturados ou
   semiestruturados.

   d) qualidade das fontes de dados, por conta dos padrões de expansão e de retenção reveladores
   da ordem existente nos dados.

   e) escalabilidade, que, na sua forma original, possui alto valor granular quando comparado ao
   de seu volume.

Comentários:

(a) Correto, porém com ressalvas – em geral, é realmente necessária a limpeza, mas isso não é
obrigatório com faz crer a redação da questão; (b) Errado, não há estabilidade da taxa de geração
de dados – pelo contrário, tudo é caótico e depende da realidade do negócio; (c) Errado, os dados
originais são primariamente não-estruturados; (d) Errado, confesso que não sei o que a questão quis
dizer com padrões de expansão e de retenção reveladores da ordem existente nos dados – não vejo
relação disso com Big Data; (e) Errado, Big Data é um conceito – as suas implementações que
podem ser escaláveis, logo não se trata de uma característica inerente a esse conceito.

                                                                                 Gabarito: Letra A

68.   (AOCP / CCAS-SC – 2015) Em relação à Big Data e NoSQL, é correto afirmar que:

   a) são conceitos concorrentes, portanto não podem ser implementados juntos.
   b) são conceitos que se complementam e com características eficientes para trabalhar com
   pequenas quantidades de informações.
   c) são duas ferramentas de empresas concorrentes.


---

   d) são conceitos que se complementam.
   e) os SGBDs Oracle e MySQL são implementações desses conceitos.

Comentários:

(a) Errado, são conceitos complementares e, não, concorrentes – podendo ser implementados
juntos; (b) Errado, uma das suas características é trabalhar com grandes quantidades de
informações; (c) Errado, não são ferramentas – são conceitos; (d) Correto, realmente são conceitos
complementares; (e) Errado, Oracle e MySQL são implementações de bancos de dados relacionais.

                                                                                Gabarito: Letra D


---

                   QUESTÕES COMENTADAS – CESPE

1. (CESPE / SEPLAN-RR - 2023) Variedade, em big data, refere-se à quantidade de fontes que
   geram os dados com potencial de serem altamente desestruturados.

2. (CESPE / SEPLAN-RR - 2023) Big data somente se aplica a dados não estruturados.

3. (CESPE / TCE-SC - 2022) Big data necessitam de algoritmos de computação mais robustos em
   comparação aos algoritmos tradicionais de banco de dados, que não são capazes de lidar com
   os volumes de dados representados em big data.

4. (CESPE / SECONT-ES - 2022) Kappa, uma arquitetura de software usada para processar dados,
   fornece acesso a métodos de processamento em lote e processamento de fluxo com uma
   abordagem em quatro camadas.

5. (CESPE / SEFAZ-SE – 2022) Com relação a noções de big data, julgue os itens que se seguem.

   I Como qualquer tecnologia, soluções de big data também apresentam algumas restrições. Por
   exemplo, elas não podem ser utilizadas na área da saúde para determinar a causa de uma
   doença, porque esse é um procedimento complexo que somente pode ser executado por
   pessoas devidamente capacitadas — nesse caso, os médicos.

   II Big data é qualquer tipo de fonte de dados que possui, no mínimo, as seguintes três
   características: volume de dados extremamente grande; velocidade de dados extremamente
   alta; e variedade de dados extremamente ampla.

   III Para que as organizações obtenham os conhecimentos corretos, a tecnologia big data não
   permite que elas executem as operações de armazenar e administrar as grandes quantidades de
   dados de si próprias.

   IV Big data é uma combinação de tecnologias de gestão de dados que evoluíram ao longo dos
   anos, razão por que não é considerado um mercado único.

   Estão certos apenas os itens:

   a) I e III
   b) I e IV
   c) II e IV
   d) II e V
   e) III e V


---

6. (CESPE / PETROBRAS – 2022) Em sistemas NoSQL baseados em armazenamento de
   chavevalor, a chave é multidimensional e composta pela combinação do nome de tabela com a
   chave linha-coluna e com o rótulo de data e hora.

7. (CESPE / TCE-RJ - 2021) Os fatores críticos de sucesso da análise de Big Data incluem uma sólida
   infraestrutura de dados, além de ferramentas analíticas e pessoal habilitado para lidar com elas.

8. (CESPE / SEFAZ-AL - 2021) Sistemas NoSQL com fundamento em documentos possuem um
   modelo de dados simples embasado no acesso rápido pela palavra; os resultados estão
   relacionados à informação e podem ser encontrados percorrendo-se os textos usando-se
   expressões regulares.

9. (CESPE / ISS-Aracaju – 2021) Big data ajudou a sedimentar o cargo de cientista de dados. Entre
   as funções desse cargo inclui-se:

   a) a modelagem estruturada.
   b) a análise retrospectiva.
   c) a modelagem não estruturada.
   d) a modelagem relacional.
   e) o processamento comparativo.

10. (CESPE / SERPRO – 2021) No que se refere aos três Vs do Big Data, o termo volume refere-se a
    dados que, atualmente, não são estruturados nem armazenados em tabelas relacionais, o que
    torna sua análise mais complexa.

11. (CESPE / SERPRO – 2021) Big data caracteriza-se, principalmente, por volume, variedade e
    velocidade, o que se justifica devido ao fato de os dados serem provenientes de sistemas
    estruturados, que são maioria, e de sistemas não estruturados, os quais, embora ainda sejam
    minoria, vêm, ao longo dos anos, crescendo consideravelmente.

12. (CESPE / SERPRO – 2021) Uma das principais características de big data é que seu custo de
    armazenamento de dados é relativamente baixo se comparado a um data warehouse.

13. (CESPE / TCE-RJ – 2021) Em Big Data, a premissa volume refere-se à capacidade de processar,
    em um ambiente computacional, diferentes tipos e formatos de dados, como fotos, vídeos e
    geolocalização.

14. (CESPE / TCE-RJ – 2021) Volume, variedade e visualização são as três características,
    conhecidas como 3 Vs, utilizadas para definir Big Data.

15. (CESPE / Polícia Federal – 2021) As aplicações de bigdata caracterizam-se exclusivamente
    pelo grande volume de dados armazenados em tabelas relacionais.


---

16. (CESPE / PRF – 2021) A Internet das Coisas (IoT) aumenta a quantidade e a complexidade dos
    dados por meio das novas formas e novas fontes de informações, influenciando diretamente
    em uma ou mais das características do Big Data, a exemplo de volume, velocidade e variedade.

17. (CESPE / AL-AP – 2020) Atualmente, diversos dados são coletados pelos sistemas digitais de
    empresas na internet para constituir Big Data com conteúdo sobre os resultados alcançados por
    seus produtos e serviços, prestígio da imagem da organização e seus representantes. Porém,
    parte desses dados pode ser falsa ou manipulada por internautas. O tratamento dos dados, a
    fim de qualificá-los antes de disponibilizá-los para a tomada de decisão na empresa, segundo o
    conceito das cinco dimensões “V” de avaliação de um Big Data, se refere:

   a) ao valor.
   b) à variedade.
   c) à veracidade.
   d) à velocidade.
   e) ao volume.

18. (CESPE / TCE-RO – 2019) Com relação a fundamentos e conceitos de Big Data, julgue os itens
    a seguir.

   I. O volume de dados é uma característica importante de Big Data.

   II. Em Big Data, a qualidade do dado não tem importância, porque a transformação dos dados
   não impacta os negócios.

   III. A característica de velocidade de entrada dos dados impacta o modelo de processamento e
   armazenamento.

   IV. A variedade dos dados não é característica intrínseca nos fundamentos de Big Data.

   Estão certos apenas os itens:

   a) I e II.
   b) I e III.
   c) II e IV.
   d) I, III e IV.
   e) II, III e IV.

19. (CESPE / SLU-DF - 2019) Para uma empresa que necessite implantar uma base de dados
    altamente escalável, com grande desempenho e cujo esquema de dados seja flexível, de modo
    que suporte constantes mudanças de campos e valores armazenados, a melhor opção é uma
    base de dados NoSQL.


---

20. (CESPE / TCM-BA – 2018) Acerca de big data, assinale a opção correta:

   a) A utilização de big data nas organizações não é capaz de transformar os seus processos de
   gestão e cultura.

   b) Sistemas de recomendação são métodos baseados em computação distribuída, que proveem
   uma interface para programação de clusters, a fim de recomendar os tipos certos de dados e
   processar grandes volumes de dados.

   c) Pode-se recorrer a software conhecidos como scrapers para coletar automaticamente e
   visualizar dados que se encontram disponíveis em sítios de navegabilidade ruim ou em bancos
   de dados difíceis de manipular.

   d) As ações inerentes ao processo de preparação de dados incluem detecção de anomalias,
   deduplicação, desambiguação de entradas e mineração de dados.

   e) O termo big data se baseia em cinco Vs: velocidade, virtuosidade, volume, vantagem e valor.

21. (CESPE / TCM-BA – 2018) Um dos desdobramentos de big data é o big data analytics, que se
    refere aos softwares capazes de tratar dados para transformá-los em informações úteis às
    organizações. O big data analytics difere do business intelligence por:

   a) priorizar o ambiente de negócios em detrimento de outras áreas.
   b) analisar dúvidas já conhecidas para as quais se deseje obter resposta.
   c) analisar o que já existe e o que está por vir, apontando novos caminhos.
   d) dar enfoque à coleta, à transformação e à disponibilização dos dados.
   e) analisar o que já existe, definindo as melhores hipóteses.

22. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   O big data consiste de um grande depósito de dados estruturados, ao passo que os dados não
   estruturados são considerados data files.

23. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   Dados coletados de redes sociais podem ser armazenados, correlacionados e expostos com o
   uso de análises preditivas.


---

24. (CESPE / Polícia Federal – 2018) Em um big data, alimentado com os dados de um sítio de
    comércio eletrônico, são armazenadas informações diversificadas, que consideram a navegação
    dos usuários, os produtos comprados e outras preferências que o usuário demonstre nos seus
    acessos. Tendo como referência as informações apresentadas, julgue o item seguinte.

   Uma aplicação que reconheça o acesso de um usuário e forneça sugestões diferentes para cada
   tipo de usuário pode ser considerada uma aplicação que usa machine learning.

25. (CESPE / ABIN – 2018) O registro e a análise de conjuntos de dados referentes a eventos de
    segurança da informação são úteis para a identificação de anomalias; esse tipo de recurso pode
    ser provido com uma solução de big data.

26. (CESPE / IPHAN – 2018) A utilização de tecnologias emergentes para o tratamento de grandes
    volumes de dados (big data) pode contribuir para o sucesso da implantação da estratégia de
    governança digital.

27. (CESPE / TCE-MG – 2018) Uma empresa, ao implementar técnicas e softwares de big data, deu
    enfoque diferenciado à análise que tem como objetivo mostrar as consequências de
    determinado evento. Essa análise é do tipo:

   a) preemptiva.
   b) perceptiva.
   c) prescritiva.
   d) preditiva.
   e) evolutiva.

28. (CESPE / TCE-MG – 2018) Um dos desdobramentos de big data é o Big Data Analytics, que se
    refere aos softwares capazes de tratar dados para transformá-los em informações úteis às
    organizações. O Big Data Analytics difere do Business Intelligence por:

   a) priorizar o ambiente de negócios em detrimento de outras áreas.
   b) analisar dúvidas já conhecidas para as quais se deseje obter resposta.
   c) analisar o que já existe e o que está por vir, apontando novos caminhos.
   d) dar enfoque à coleta, à transformação e à disponibilização dos dados.
   e) analisar o que já existe, definindo as melhores hipóteses.

29. (CESPE / Polícia Federal – 2018) A mineração de dados se caracteriza especialmente pela busca
    de informações em grandes volumes de dados, tanto estruturados quanto não estruturados,
    alicerçados no conceito dos 4V’s: volume de mineração, variedade de algoritmos, velocidade de
    aprendizado e veracidade dos padrões.

Em um big data, alimentado com os dados de um sítio de comércio eletrônico, são armazenadas
informações diversificadas, que consideram a navegação dos usuários, os produtos comprados e
outras preferências que o usuário demonstre nos seus acessos.


---

Tendo como referência as informações apresentadas, julgue o item seguinte.

30. (CESPE / Polícia Federal – 2018) Pelo monitoramento do tráfego de rede no acesso ao sítio em
    questão, uma aplicação que utiliza machine learning é capaz de identificar, por exemplo, que os
    acessos diminuíram 20% em relação ao padrão de acesso em horário específico do dia da
    semana.

31. (CESPE / Polícia Federal – 2018) Uma aplicação que reconheça o acesso de um usuário e forneça
    sugestões diferentes para cada tipo de usuário pode ser considerada uma aplicação que usa
    machine learning.

32. (CESPE / Polícia Federal – 2018) Dados coletados de redes sociais podem ser armazenados,
    correlacionados e expostos com o uso de análises preditivas.

33. (CESPE / TCE-PE – 2017) Além de estar relacionado à grande quantidade de informações a
    serem analisadas, o Big Data considera o volume, a velocidade e a variedade dos dados
    estruturados — dos quais se conhece a estrutura de armazenamento — bem como dos não
    estruturados, como imagens, vídeos, áudios e documentos.

34. (CESPE / TCE-PE – 2017) O termo Big Data Analytics refere-se aos poderosos softwares que
    tratam dados estruturados e não estruturados para transformá-los em informações úteis às
    organizações, permitindo-lhes analisar dados, como registros de call center, postagens de redes
    sociais, de blogs, dados de CRM e demonstrativos de resultados.

35. (CESPE / TRE-GO – 2015) A Big Data pode ser utilizada na EAD para se entender as preferências
    e necessidades de aprendizagem dos alunos e, assim, contribuir para soluções mais eficientes
    de educação mediada por tecnologia.

36. (CESPE / FUNPRESP-EXE - 2016) Em um banco de dados NoSQL do tipo grafo, cada arco é
    definido por um identificador único e expresso como um par chave/valor.

37. (CESPE / FUNPRESP - JUD – 2016) Uma big data não engloba dados não estruturados, mas
    inclui um imenso volume de dados estruturados suportado por tecnologias como o DataMining
    e o DataWarehouse para a obtenção de conhecimento a partir da manipulação desses dados.

38. (CESPE / FUNPRESP - JUD – 2016) Uma big data não engloba dados não estruturados, mas
    inclui um imenso volume de dados estruturados suportado por tecnologias como o DataMining
    e o DataWarehouse para a obtenção de conhecimento a partir da manipulação desses dados.

39. (CESPE / TJ-SE – 2014) Ao utilizar armazenamento dos dados em nuvem, a localização do
    processamento de aplicações Big Data não influenciará os custos e o tempo de resposta, uma
    vez que os dados são acessíveis a partir de qualquer lugar.


---

40. (CESPE / TJ-SE – 2014) Em soluções Big Data, a análise dos dados comumente precisa ser
    precedida de uma transformação de dados não estruturados em dados estruturados.


---

                        QUESTÕES COMENTADAS – FCC

41. (FCC / SEFAZ-SC - 2018) Como não existe um modelo de armazenamento de dados único
    adequado para atender a todos os cenários e necessidades das aplicações de Big Data, em
    complemento ao modelo relacional, foram criados quatro novos tipos de armazenamento
    NoSQL (Not only SQL). Dentre esses, aqueles que modelam os dados usando o formato de
    linhas e colunas são APENAS os tipos de bancos de dados orientados a colunas,

   a) chave-valor e grafos.
   b) chave-valor e documentos.
   c) documentos e grafos.
   d) chave-valor.
   e) grafos.

42. (FCC / SEFAZ-SC – 2018) No âmbito da ciência de dados na definição de Big Data, utilizam-se
    características ou atributos que alguns pesquisadores adotam como sendo os cinco Vs. Porém,
    a base necessária para o reconhecimento de Big Data é formada por três propriedades:

   a) valor, velocidade e volume.
   b) valor, veracidade e volume.
   c) variedade, velocidade e volume.
   d) variedade, valor e volume.
   e) velocidade, veracidade e volume.

43. (FCC / SEFAZ-SC – 2018) As soluções em Big Data Analytics, usadas, por exemplo, pela Fazenda
    Pública principalmente para evitar sonegações de tributos, trabalham com algoritmos
    complexos, agregando dados de origens diversas, relacionando-os e gerando conclusões
    fundamentais para a tomada de decisões. Na execução dessas análises pelos auditores,
    considere:

   I. Dados estruturados.
   II. Dados semiestruturados.
   III. Dados não estruturados.
   IV. Dados brutos, não processados.
   V. Esquemas de dados gerados no momento da gravação.

   Sobre um repositório de armazenamento, que contenha uma grande quantidade de dados a ser
   examinada, deverão ser utilizados APENAS os que constam de:

   a) I, III e IV.
   b) I, II, III e V.
   c) III, IV e V.


---

   d) I, II, III e IV.
   e) I, II, IV e V.

44. (FCC / TCE-RS – 2018) Um sistema de Big Data costuma ser caracterizado pelos chamados 3 Vs,
    ou seja, volume, variedade e velocidade. Por variedade entende-se que:

   a) há um grande número de tipos de dados suportados pelo sistema.
   b) há um grande número de usuários distintos acessando o sistema.
   c) os tempos de acesso ao sistema apresentam grande variação.
   d) há um grande número de tipos de máquinas acessando o sistema.
   e) os tamanhos das tabelas que compõem o sistema são muito variáveis.

45. (FCC / Câmara Legislativa do Distrito Federal – 2018) A proposta de uma solução de Big Data,
    oferecendo uma abordagem consistente no tratamento do constante crescimento e da
    complexidade dos dados, deve considerar os 5 V’s do Big Data que envolvem APENAS os
    conceitos de:

   a) volume, versionamento, variedade, velocidade e visibilidade.
   b) velocidade, visibilidade, volume, veracidade e vencimento do dado
   c) volume, velocidade, variedade, veracidade e valor
   d) variedade, vencimento do dado, veracidade, valor e volume
   e) vulnerabilidade, velocidade, visibilidade, valor e veracidade


---

                      QUESTÕES COMENTADAS – FGV

46.(FGV / TJ-RN - 2023) Observe a estrutura do dataset ilustrado a seguir

   Para armazenar o dataset ilustrado, é necessário utilizar o banco de dados NoSQL:

   a) grafo;
   b) colunar;
   c) chave-valor;
   d) criptografado;
   e) orientado a documento.

47. (FGV / TJ-RN - 2023) O modelo de banco de dados em que a associação entre dois registros é
    feita por meio do relacionamento entre um registropai e vários registros-filhos com
    cardinalidade 1:N, e a navegação é feita da raiz para as folhas, é o:

   a) em rede;
   b) otimizado;
   c) relacional;
   d) hierárquico;
   e) orientado a objetos.

48.(FGV / TJ-RN - 2023) O volume de informações digitais heterogêneas sobre processos judiciais
   está crescendo diariamente, especialmente quando correlações com bases de dados de outros
   contextos são criadas. Observe o seguinte exemplo de representação gráfica de uma pequena
   amostra do dataset ProcessosJudiciais, contendo nós, arestas e propriedades, armazenado em
   um banco de dados massivo. Imagem associada para resolução da questão


---

   Para armazenar o dataset ProcessosJudiciais exemplificado, é necessário utilizar um banco de
   dados:

   a) ágil;
   b) de grafos;
   c) chave-valor;
   d) orientado a objeto;
   e) orientado a documentos.

49.(FGV / TJ-RN - 2023) Os bancos de dados massivos possuem características que precisam ser
   consideradas no desenvolvimento de soluções para analisar os dados armazenados.

   Nesse tipo de ambiente de bancos de dados, a capacidade de minimizar os ruídos dos dados
   oriundos de múltiplas fontes heterogêneas, identificar o que é irrelevante e redundante, e apoiar
   a limpeza dos dados, contribuindo para sua qualidade, corresponde à característica Big Data:

   a) valor;
   b) volume;
   c) variedade;
   d) veracidade;
   e) velocidade.

50. (FGV / Receita Federal - 2023) Bancos de dados NoSQL são usualmente divididos em categorias
    de store.

   Assinale a opção que apresenta o tipo de store que privilegia velocidade, capacidade de leitura
   e escrita e estruturas de dados flexíveis, sem a necessidade de esquemas estabelecidos
   previamente.

   a) Document.
   b) Key Value.
   c) Wide-Column.
   d) Graph.
   e) Full Text.


---

51. (FGV / IBGE - 2017) Observe a figura a seguir que ilustra relações entre colegas e seus interesses.

   O tipo de Banco de Dados NoSQL, não relacional, que armazena tais informações, utilizando
   estruturas de vértices e arestas, com propriedades associadas, é o:

   a) Colunar;
   b) Documento;
   c) Grafo;
   d) Chave-valor;
   e) Tabular.

52. (FGV / IBGE - 2017) Bancos de Dados NoSQL podem armazenar dados em diversos formatos
    não relacionais, como documentos compostos por pares de campo-e-valor (field-and-value),
    conforme a estrutura exemplificada a seguir.

   O Banco de Dados NoSQL utilizado para armazenar documentos compostos por pares campo-
   e-valor, no formato BSON (JSON-like), é o:

   a) OpenLink Virtuoso;
   b) Neo4j;
   c) Apache HBase;
   d) MongoDB;
   e) Titan.

53. (FGV / IBGE - 2016) Considere as seguintes características de um projeto de banco de dados.

   I. O modelo de dados é conhecido a priori e é estável;


---

   II. A integridade dos dados deve ser rigorosamente mantida;
   III. Velocidade e escalabilidade são preponderantes.

   Dessas características, o emprego de bancos de dados NoSQL é favorecido somente por:

   a) I;
   b) I e II;
   c) II;
   d) II e III;
   e) III.

54. (FGV / TJ-SC – 2015) Os termos Business Intelligence (BI) e Big Data confundem-se em certos
    aspectos. Uma conhecida abordagem para identificação dos pontos críticos de cada paradigma
    é conhecida como 3V, e destaca:

   a) variedade, visualização, volume;
   b) velocidade, virtualização, volume;
   c) variedade, velocidade, volume;
   d) virtualização, visualização, volume;
   e) variedade, visualização, virtualização.

55. (FGV / TJ-BA - 2015) Analise as afirmativas a respeito da classe de gerenciadores de bancos de
    dados, surgida em anos recentes, conhecida como NoSQL.

   I. Mesmo sem suportar tabelas relacionais, baseiam-se em esquemas de dados previamente
   definidos;
   II. Suas estruturas não permitem o uso de linguagens do tipo do SQL para recuperação de dados;
   III. Garantem operações com as propriedades conhecidas pela sigla ACID;
   IV. Privilegiam a rapidez de acesso e a disponibilidade dos dados em detrimento das regras de
   consistência das transações.

   O número de afirmativas corretas é:

   a) uma;
   b) duas;
   c) três;
   d) quatro;
   e) cinco.

56. (FGV / PROCEMPA - 2014) O teorema CAP (CAP Theorem) é um importante resultado teórico
    na Ciência da Computação, e frequentemente é referenciado na comparação entre sistemas de
    bancos de dados “tradicionais” e aqueles que são conhecidos pela sigla NoSQL. Esse teorema
    aborda as propriedades (ou garantias) que um sistema de banco de dados deve prover, e é
    central na discussão das conveniências de utilização de um ou outro modelo.


---

   Assinale a opção que descreve, corretamente, o significado das letras na sigla CAP.

   a) Concurrency, Access, Time
   b) Consistency, Atomicity, Parallel processing.
   c) Consistency, Availability, Partition tolerance.
   d) Concurrency, Availability, Pear processing.
   e) Control, Atomicity, Partition network.

57. (FGV / AL-BA – 2014) A expressão Big Data é utilizada para descrever o contexto da informação
    contemporânea, caracterizada pelo volume, velocidade e variedade de dados disponíveis, em
    escala inédita. Com relação às características do Big Data, analise as afirmativas a seguir.

   I. O volume da informação se refere ao fato de que certas coleções de dados atingem a faixa de
   gigabytes (bilhões de bytes), terabytes (trilhões), petabytes (milhares de trilhões) ou mesmo
   exabytes (milhões de trilhões).

   II. A velocidade está relacionada à rapidez com a qual os dados são produzidos e tratados para
   atender à demanda, o que significa que não é possível armazená-los todos, de modo que somos
   obrigados a escolher dados para guardar e outros para descartar.

   III. A variedade significa que os dados de hoje aparecem em todos os tipos de formatos, como,
   por exemplo, arquivos de texto, e-mail, medidores e sensores de coleta de dados, vídeo, áudio,
   dados de ações do mercado ou transações financeiras.

   Assinale:

   a) se somente a afirmativa I estiver correta.
   b) se somente a afirmativa II estiver correta.
   c) se somente a afirmativa III estiver correta.
   d) se somente as afirmativas I e II estiverem corretas.
   e) se todas as afirmativas estiverem corretas.


---

          QUESTÕES COMENTADAS – DIVERSAS BANCAS

58. (CP-T / Marinha - 2022) De acordo com Elmasri (2018), em projetos de bancos de dados
    distribuídos, é possível dividir os dados em unidades lógicas de acordo com as técnicas de:

   a) disjunção inclusiva ou shardíng, na qual as tuplas são separadas de acordo com suas
   semelhanças de chave primária; disjunção exclusiva, na qual a condição de separação se dá por
   meio das colunas da relação; disjunção condicional, na qual as tuplas são separadas por meio de
   uma condição definida de acordo com um ou mais atributos da relação; e disjunção mista, que
   integra os demais tipos de disjunção.

   b) disjunção exclusiva, na qual as tuplas são separadas de acordo com suas semelhanças de
   chave primária; disjunção inclusiva ou shardíng, onde a condição de separação se dá por meio
   das colunas da relação; disjunção condicional, na qual as tuplas são separadas por meio de uma
   condição definida de acordo com um ou mais atributos da relação; e disjunção mista, que integra
   os demais tipos de disjunção.

   c) fragmentação inclusiva ou shardíng, na qual as tuplas são separadas de acordo com suas
   semelhanças de chave primária; fragmentação exclusiva, na qual a condição de separação se dá
   por meio das colunas da relação; fragmentação condicional, na qual as tuplas são separadas por
   meio de uma condição definida de acordo com um ou mais atributos da relação; e fragmentação
   mista, que integra os demais tipos de fragmentação.

   d) fragmentação vertical ou shardíng, na qual uma relação é um subconjunto das tuplas nessa
   relação; fragmentação horizontal, na qual o fragmento é gerado a partir das colunas da relação;
   fragmentação híbrida, que integra os outros dois tipos; alocação geral, que compreende a cópia
   de todos os dados; alocação não redundante, que significa não ter replicação e replicação parcial
   de dados, na qual apenas alguns fragmentos são replicados.

   e) fragmentação horizontal ou shardíng, na qual o fragmento de uma relação é um subconjunto
   das tuplas nessa relação; fragmentação vertical, na qual o fragmento é gerado a partir das
   colunas da relação; e fragmentação híbrida, que mistura os outros dois tipos.

59. (SELECON / EMGEPRON – 2021) Trata-se de uma infinidade de informações não estruturadas
    que, quando usadas com inteligência, se tornam uma arma poderosa para empresas tomarem
    decisões cada vez melhores. As soluções tecnológicas que trabalham com esse conceito
    permitem analisar um enorme volume de dados de forma rápida e ainda oferecem total controle
    ao gestor das informações. E as fontes de dados são as mais diversas possíveis: de textos e fotos
    em rede sociais, passando por imagens e vídeos, até jogadas específicas no esporte e até
    tratamentos na medicina.

                                                         (http://olhardigital. uol. com.br/pro/video/39376/39376).


---

   O conceito definido no texto é:

   a) Governança de TI.
   b) QoS.
   c) Big Data.
   d) Data Center.
   e) ITIL.

60. (COMPERVE / TJ/RN – 2020) Embora Big Data tenha diferentes definições, há um consenso
    sobre o modelo dos 3 V’s que correspondem a 3 características. Duas dessas características são:

   a) Volume e Velocity.
   b) Variety e Value.
   c) Viable e Vast.
   d) Valid e Verbose.

61. (CCV-UFC / UFC – 2019) Sobre os banco de dados NoSQL, assinale a afirmativa correta:

   a)Bancos de dados NoSQL não podem ser indexados.
   b)Bancos de dados NoSQL são considerados banco de dados relacionais.
   c) Nos bancos de dados NoSQL devem ser definidos um esquema de dados fixo antes de
   qualquer operação.
   d) São exemplos de bancos de dados NoSQL: MongoDB, Firebird, DynamoDB, SQLite,
   Microsoft Access e Azure Table Storage.
   e) Os bancos de dados NoSQL usam diversos modelos para acessar e gerenciar dados, como
   documento, gráfico, chave-valor, em memória e, pesquisa.

62. (IADES / APEX BRASIL – 2018) Assinale a alternativa que apresenta o conceito de Big Data.

   a) Conjuntos de dados de grande volume que se utilizam de ferramentas especiais de
   processamento, pesquisa e análise, e que podem ser aproveitados no tempo necessário, com
   precisão e grande velocidade.

   b) São bancos de dados de fácil acesso e rápida velocidade, operados como computadores
   pessoais.

   c) Manuseio de informações necessárias às empresas e aos negócios do mundo moderno, que
   podem ser armazenadas em computadores pessoais, utilizando-se a técnica de nuvem de
   dados.

   d) São apenas grandes volumes de dados que precisam ainda ser mais bem aproveitados pelo
   mundo corporativo.


---

   e) Refere-se a um grande número de computadores pessoais (PC) interligados entre si em uma
   grande rede de informação.

63. (CESGRANRIO / PETROBRAS – 2018) A principal definição de Big Data parte de três
    características, conhecidas como 3 V do Big Data, a saber: velocidade, variedade e volume. O
    termo velocidade refere-se, principalmente, à:

   a) necessidade das aplicações de gerar respostas rapidamente, a partir de grandes massas de
   dados.

   b) existência de um alto fluxo de dados na entrada.

   c) necessidade de gerar aplicações rapidamente, em função da demanda do negócio.

   d) importância da facilidade de manipular cubos de visualização de dados, rapidamente.

   e) rapidez com que os dados se tornam inválidos com o tempo.

64.(AOCP / CPD/BA – 2018) Big Data se refere ao imenso volume de conjuntos de dados que
   alcançam elevadas ordens de magnitude. O valor real do Big Data está no insight que ele produz
   quando analisado — buscando padrões, derivando significado, tomando decisões e, por fim,
   respondendo ao mundo com inteligência. Referente ao Big Data, é correto afirmar que o termo
   variedade refere-se:

   a) um conjunto de dados mais diversos, incluindo dados estruturados, semiestruturados e não
   estruturados. É heterogêneo e vem em muitos formatos, incluindo texto, documento, imagem,
   vídeo e outros.

   b) a banco de dados homogêneo que trata de informações do mesmo tipo definindo padrões de
   segurança.

   c) a um conjunto de dados que são gerados em tempo real, o que requer a oferta imediata de
   informações úteis.

   d) aos data centers físicos que transformam os dados em informações pertinentes ao negócio.

   e) ao controle de dados semiestruturados de formatos definidos como texto e números.

65. (QUADRIX / CRM/DF – 2018) O fato de o ser humano gerar milhares de informações a cada
    minuto dá origem ao conceito de Big Data, que se trata de uma nova linha de banco de dados
    que não possui qualquer relação com as existentes até o momento. Pelo fato de as bases de
    dados Big Data serem do tipo Plano, não podem ser manipuladas e consultadas pelo SQL.


---

66.      FEPESE / CIA/SC – 2017) Um banco de dados de Big Data deve possuir pelo menos três
      aspectos, os chamados 3Vs do Big Data, que são:

      a) Variedade; Volume; Valor.
      b) Valor; Variabilidade; Velocidade.
      c) Volume; Veracidade; Velocidade.
      d) Veracidade; Velocidade; Variedade.
      e) Velocidade; Volume; Variedade.

67. (CESGRANRIO / PETROBRÁS – 2017) O termo Big Data é bastante conhecido pelos
    profissionais de tecnologia da informação, especialmente aqueles envolvidos com bancos de
    dados, inteligência de negócios, sistemas de informações e sistemas de apoio à decisão. Uma
    característica inerente a esse conceito é a da:

      a) complexidade das suas fontes de informação, o que demanda a necessidade de sua prévia
      limpeza, integração e transformação.

      b) estabilidade da taxa de geração desses dados, o que garante sua utilização confiável na
      geração analítica de informação com independência temporal.

      c) heterogeneidade do conjunto de dados, empregada em dados originalmente estruturados ou
      semiestruturados.

      d) qualidade das fontes de dados, por conta dos padrões de expansão e de retenção reveladores
      da ordem existente nos dados.

      e) escalabilidade, que, na sua forma original, possui alto valor granular quando comparado ao
      de seu volume.

68.      (AOCP / CCAS-SC – 2015) Em relação à Big Data e NoSQL, é correto afirmar que:

      a) são conceitos concorrentes, portanto não podem ser implementados juntos.
      b) são conceitos que se complementam e com características eficientes para trabalhar com
      pequenas quantidades de informações.
      c) são duas ferramentas de empresas concorrentes.
      d) são conceitos que se complementam.
      e) os SGBDs Oracle e MySQL são implementações desses conceitos.


---

              GABARITO

1. CORRETO         41. LETRA B
2. ERRADO          42. LETRA C
3. CORRETO         43. LETRA D
4. ERRADO          44. LETRA A
5. LETRA C         45. LETRA C
6. ERRADO          46. LETRA A
7. CORRETO         47. LETRA D
8. ERRADO          48. LETRA B
9. LETRA C         49. LETRA D
10. ERRADO         50. LETRA B
11. ERRADO         51. LETRA C
12. CORRETO        52. LETRA D
13. ERRADO         53. LETRA E
14. ERRADO         54. LETRA C
15. ERRADO         55. LETRA A
16. CORRETO        56. LETRA C
17. LETRA C        57. LETRA E
18. LETRA B        58. LETRA E
19. CORRETO        59. LETRA C
20. LETRA C        60. LETRA A
21. LETRA C        61. LETRA E
22. ERRADO         62. LETRA A
23. CORRETO        63. LETRA B
24. CORRETO        64. LETRA A
25. CORRETO        65. ERRADO
26. CORRETO        66. LETRA E
27. LETRA C        67. LETRA A
28. LETRA C        68. LETRA D
29. ERRADO
30. CORRETO
31. CORRETO
32. CORRETO
33. CORRETO
34. CORRETO
35. CORRETO
36. ERRADO
37. ERRADO
38. ERRADO
39. ERRADO
40. CORRETO


---
