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
arquivo_origem: Aula 01_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '01'
titulo_aula: Índice
---

# Índice

Índice
1) Apresentação do Prof. Diego Carvalho - Informática


2) Noções Iniciais sobre Computação em Nuvem


3) Computação em Nuvem - Características Essenciais


4) Computação em Nuvem - Modelos de Serviço


5) Computação em Nuvem - Modelos - Tipos de Implantação


6) Computação em Nuvem - Armazenamento em Nuvem


7) Noções Avançadas sobre Computação em Nuvem


8) Resumo - Computação em Nuvem


9) Mapas Mentais - Computação em Nuvem


10) Questões Comentadas - Computação em Nuvem - Multibancas


11) Lista de Questões - Computação em Nuvem - Multibancas

---

Sobre o curso: galera, todos os tópicos da aula possuem Faixas
de Incidência, que indicam se o assunto cai muito ou pouco em
prova. Diego, se cai pouco para que colocar em aula? Cair pouco
não significa que não cairá justamente na sua prova! A ideia aqui
é: se você está com pouco tempo e precisa ver somente aquilo
que cai mais, você pode filtrar pelas incidências média, alta e
altíssima; se você tem tempo sobrando e quer ver tudo, vejam
também as incidências baixas e baixíssimas. Fechado?

Além disso, essas faixas não são por banca – é baseado tanto na
quantidade de vezes que caiu em prova independentemente da
banca quando das minhas avaliações sobre cada assunto...


---

---

                         APRESENTAÇÃO DA AULA
Pessoal, agora vamos falar sobre Cloud Computing (Computação em Nuvem). Essa aula é bem
divertida, juro para vocês! Nós vamos aprender aqui o que é essa tal de nuvem, quais são suas
características principais, quais são os principais modelos e tipos de nuvem e – para finalizar – vamos
falar sobre as principais ferramentas de mercado. Quem aí não possui Google Drive, Dropbox,
OneDrive ou iCloud? Pois é... é cada vez mais raro alguém que não possua! Venham comigo :)

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

                           COMPUTAÇÃO EM NUVEM
Conceitos Básicos
                                                                            INCIDÊNCIA EM PROVA: Altíssima


Galera, vamos falar agora sobre computação em nuvem! Eu gosto de iniciar esse assunto
mencionando um famoso vídeo da ex-presidente Dilma Rousseff. Fiquem tranquilos, o objetivo
aqui não é discutir nenhum posicionamento político, trata-se apenas de mostrar que é comum
as pessoas não entenderem muito bem alguns termos relacionados a tecnologia da informação.
Vamos entender melhor essa história...

Em 2017, uma delatora entregou uma imagem de tela de um e-mail ao Ministério Público
Federal (MPF) que ela dizia provar sua comunicação com a ex-presidente Dilma Rousseff. A
delatora informou que a conta de e-mail havia sido criada para que a ex-presidente pudesse avisá-
la com antecedência sobre avanços da Operação Lava Jato. Ambas não chegaram a enviar e-mails
uma para outra, a estratégia era manter as mensagens como rascunhos de e-mail.

Professor, o que isso tem a ver com a aula? Galera, quando nós falamos – principalmente para
pessoas mais velhas – que determinado arquivo está nas nuvens, é completamente normal que
essas pessoas achem que algo está literalmente armazenado dentro de uma nuvem do céu. Eu
mesmo já tive que explicar para o meu pai que ele não precisava se preocupar porque eu havia
armazenado o backup dos seus contatos de celular na nuvem. O que vocês acham que aconteceu?

Passei meia hora tentando explicá-lo o que era nuvem e... ele desistiu de me ouvir e falou que
confiava em mim. Bem, foi mais ou menos o que aconteceu com a ex-presidente: tentaram explicá-
la que determinadas mensagens estavam dentro de uma conta de e-mail armazenada em uma
nuvem. Ela não compreendeu muito bem e questionou a veracidade da informação da delatora.
Foi quando – em uma entrevista – ela mencionou:


---

Galera, esse nome realmente causa bastante confusão! Vamos descobrir por que ele é utilizado? O
termo nuvem é utilizado como uma metáfora para internet. Como assim, professor? Desde
antigamente até hoje, quando se deseja desenhar diagramas de redes de computadores, um
símbolo é utilizado para representar a internet. Vocês sabem qual é esse símbolo? Trata-se da
nuvem! Vejam alguns exemplos abaixo que eu encontrei:

                                  INTERNET  NUVEM

Notem que a internet é sempre representada como uma nuvem! O termo nuvem é usado como
uma metáfora para a Internet, baseado no desenho de nuvem usado no passado para representar
a rede telefônica e, mais tarde, para representar a rede mundial de computadores (Internet) em
diagramas como uma abstração para a infraestrutura da Internet (servidores, redes, centros de
dados, entre outros). Em suma: nuvem é uma metáfora para internet!

A Computação em Nuvem pode ser definida como um conjunto de recursos virtuais facilmente
utilizáveis e acessíveis, tais como hardware, plataforma de desenvolvimento, serviços, data
centers e servidores distribuídos em diferentes posições geográficas pelo mundo. A computação
em nuvem oferece acesso a aplicações online através de um navegador web. Vamos ver outras
definições na tabela a seguir:

                                                    DEFINIÇÕES
 A Computação em Nuvem é um ambiente de computação baseado em uma imensa rede de servidores, que podem
 ser físicos ou virtuais. Trata-se de um conjunto de recursos, tais como: capacidade de processamento,
 armazenamento, conectividade, plataformas, aplicações e serviços disponibilizados na Internet.
 A Computação em Nuvem é um modelo que permite um acesso, via rede, a recursos de computação configuráveis
 (Ex: redes, servidores, armazenamento de dados, aplicações e serviços em geral). Este acesso tem a característica
 de ser onipresente, conveniente e sob demanda.


---

  A Computação em Nuvem é a distribuição de serviços de computação – servidores, armazenamento, bancos de
  dados, redes, software, análises, inteligência, etc proporcionando inovações mais rápidas, recursos flexíveis e
  economia na escala.
  A Computação em Nuvem é a entrega sob demanda de poder computacional, armazenamento de banco de dados,
  aplicações e outros recursos de TI por meio de uma plataforma de serviços de nuvem via Internet com uma
  definição de preço conforme o uso.
  A Computação em Nuvem é o conjunto de recursos que permitem a um usuário de Internet, em qualquer lugar,
  com qualquer sistema operacional e qualquer dispositivo de hardware utilizar recursos na Internet da mesma
  maneira que utilizaria tais recursos instalados em sua própria máquina.


Vocês conseguem me dizer qual é a principal vantagem da computação em nuvem? Pois é, eu vos
digo: redução de custos! Sério, professor? Seríssimo! No passado, as empresas tinham que reservar
um local físico em seu prédio chamado Centro de Processamento de Dados1 (CPD) para armazenar
seus servidores (aqueles computadores especializados em fornecer serviços como site, e-mail, etc)
com segurança, redundância, confiabilidade, refrigeração, etc – imagem abaixo.

Além disso, a empresa tinha que contratar funcionários responsáveis por manter tudo aquilo
funcionando perfeitamente 24 horas por dia nos 7 dias da semana. Era necessário também estar
sempre comprando novos equipamentos para atualizar o seu parque tecnológico. Enfim, qual o
problema disso? Custo! Vamos pensar no Estratégia Concursos? Ele não é uma empresa de tecnologia
da informação – ele é uma empresa de educação.

Dessa forma, não faz sentido a empresa investir tempo e dinheiro para manter uma infraestrutura
de tecnologia se ela pode simplesmente terceirizar isso para a... nuvem! Assim, ela pode utilizar
o espaço físico ocupado para outras finalidades; pode transferir toda a responsabilidade de
manutenção da infraestrutura para um provedor remoto; pode reduzir o consumo de energia
elétrica; pode reduzir gastos com funcionários; entre diversas outras vantagens.

1 Também chamado de Centro de Dados (Data Center).


---

Professor, onde está essa infraestrutura? Galera, você não precisa mais de um Centro de Dados na
sua empresa porque você pode contratar os serviços de Centro de Dados de uma empresa
especializada. Existem várias opções nacionais ou internacionais! A IBM – por exemplo – possui
um enorme Centro de Dados na cidade de Hortolândia/SP. Além de ser gigantesco, ele possui
excelente infraestrutura de geradores, resfriamento, segurança, contingência, etc.

Tudo isso para garantir eficiência e disponibilidade aos seus clientes. Hoje em dia, as empresas
possuem a opção de mover seus serviços para a nuvem e reduzir custos – até porque existem várias
empresas oferecendo excelentes serviços de nuvem, logo tem havido uma constante redução no
preço fornecido. Professor, isso só é bom para empresas ou serve para mim também? Galera, isso é
bom para todo mundo...

                                                Pensem comigo: você vai começar a estudar
                                                para concurso e decide comprar aquele
                                                notebook dos sonhos – um Apple MacBook Pro!
                                                Você liga o maldito e descobre que ele não vem
                                                instalado com o MS-Office. Você pensa: poxa,
                                                gastei uma grana com o notebook e agora ainda
                                                vou ter que gastar mais R$600,00 para comprar
                                                uma licença do MS-Office. Você compra, instala e
                                                fica todo feliz de novo! Tão feliz que você esbarra
                                                distraído, derruba ele no chão e... perda total.

Você junta mais algumas economias, conversa com pai, implora para a mãe e consegue finalmente
comprar outro notebook, mas com sistema operacional Windows! Sai correndo todo feliz,
serelepe e pimpão com seu CD do MS-Office para instalá-lo no novo notebook e... percebe que
não é possível, porque seu disco antigo é para instalação no Sistema Operacional MacOS.
Professor, eu sou muito azarado! Calma que não acabou...

Você vende um violão velho, junta mais uma grana e compra outro CD do MS-Office (R$600,00).
Finalmente você o instala em seu novo notebook e o utiliza à vontade. Três meses se passam e sai
uma nova versão do Office com diversos recursos bem bacanas que você adoraria utilizar. Sua
única alternativa é gastar mais R$600,00 e comprar a versão mais atualizada. Poxa, agora você não
tem do que reclamar, está tudo atualizado e funcionando perfeitamente.

Aí seus pais decidem comprar um computador para sua casa. Você se lembra que você ainda tem
o seu CD do MS-Office para Windows e pensa: opa, vou instalá-lo no computador também para
ter uma segunda opção. Ledo engano: o disco que você comprou permite a instalação em apenas
uma máquina – se você quiser um que seja possível instalar em várias máquinas, terá que comprar
outro e ele vai custar mais caro. Chegaaaaaaaaaaaaaaaaaaaaa...

                          Calma, fera! Eu tenho a solução para você :)


---

Atualmente você pode utilizar o Office 365! O que é isso, professor? É a mesma suíte de aplicativos
do MS-Office, mas disponibilizada como um serviço de assinatura. Vejam as vantagens:

 Você pode utilizá-lo online a partir de um navegador em
  qualquer computador, em qualquer lugar, em qualquer
  sistema operacional;

 Você pode baixá-lo e instalá-lo em até cinco computadores
  diferentes – nesse caso, não se trata de uma nuvem, mas é
  uma possibilidade oferecida;

 Você paga apenas uma assinatura mensal de cerca de
  R$30,00, tendo acesso a todas as aplicações do MS-Office e
  estando livre para sair quando desejar;

 Você sempre terá a versão mais atualizada de todas as
  aplicações do MS-Office em quaisquer dos planos de
  assinatura;

 Você pode trabalhar colaborativamente com outras pessoas
  em um mesmo arquivo, aumentando a produtividade.

Todo esse argumento foi para convencê-los de que a principal vantagem da computação em
nuvem é a redução de custos – tanto para pessoas jurídicas quanto para pessoas físicas. Claro
que existem diversas outras vantagens, tais como liberação do espaço físico, redução do consumo
de energia, transferência de responsabilidades, redução da folha salarial, otimização de recursos,
entre outros. Certinho? Vamos ver um pequeno exercício...


     (Ministério da Fazenda – 2014) É função da computação em nuvem:

     a) cortar custos operacionais.
     b) permitir que departamentos de TI se concentrem em projetos operacionais em vez de
     manter provedores funcionando.
     c) cortar custos situacionais, associados a instabilidades.
     d) desvincular a TI de esforços estratégicos de interesse da cúpula da organização.
     e) otimizar acessos indexados.
     _______________________
     Comentários: (a) Correto. Ela permite cortar custos operacionais transferindo a responsabilidade pela manutenção da
     infraestrutura para uma empresa prestadora de serviços de nuvem; (b) Errado. O uso da computação em nuvem permite que os
     departamentos de TI se concentrem em projetos estratégicos em vez de manter serviços de dados funcionando; (c) Errado. Ela
     é capaz de cortar custos operacionais genéricos ao transferir essa responsabilidade e, não, operacionais situacionais; (d) Errado.
     Pelo contrário, ela permite que a TI se concentre em esforços estratégicos e, não, em esforços operacionais; (e) Errado. Esse
     item faz referência a acesso de bancos de dados – que nada tem a ver com a questão.


---

     (Câmara dos Deputados – 2012) Em cloud computing, cabe ao usuário do serviço se
     responsabilizar pelas tarefas de armazenamento, atualização e backup da aplicação
     disponibilizada na nuvem.
     _______________________
     Comentários: em regra, a responsabilidade é terceirizada para a prestadora de serviço de nuvem – tanto de armazenamento
     quanto de atualização, backup, manutenção, escalonamento, entre outros (Errado).

     (TCE/PA – 2016) Computação em nuvem é a forma de utilizar memória computacional
     e local de armazenamento de arquivos em computadores interligados à Internet,
     podendo esses arquivos ser acessados de qualquer lugar do mundo conectado a esta
     rede.
     _______________________
     Comentários: a computação em nuvem realmente permite utilizar memória computacional e local de armazenamento de
     arquivos em computadores interligados à Internet (entre outros recursos), podendo ser acessados de qualquer lugar do mundo
     (Correto).

Galera, existe uma agência americana chamada NIST (National Institute of Standards and
Technology) que tem como missão promover a inovação e o avanço da ciência inclusive através de
padrões tecnológicos para aumentar a segurança econômica. Em 2011, o NIST criou um
documento que estabelece definições de computação em nuvem que vêm sendo adotadas no
meio acadêmico e consequentemente nas questões de concursos públicos.

Dessa forma, pode-se dizer que um estudo sobre computação em nuvem se divide em: cinco
características essenciais, três modelos de serviço e quatro modelos de implantação (tipos de
nuvem). Nós vamos entrar em detalhes de cada um desses grupos e subgrupos nas próximas
páginas. Venham comigo...


---

Características Essenciais
Serviços Mensurados (Measured Service)
                                                                                INCIDÊNCIA EM PROVA: baixa


Galera, praticamente tudo que é feito na nuvem é controlado e medido quantitativamente. Como
assim, professor? As empresas que fornecem serviços de computação em nuvem buscam
otimizar a utilização de seus recursos de forma automática de forma a ter a utilização mais
eficiente possível. Em outras palavras, ela não pode ter recursos demais de forma que eles fiquem
ociosos; e também não pode ter serviços de menos de forma que falte recursos.

Professor, o que você está querendo dizer com recursos? Eu estou falando de recursos de
armazenamento, memória, processamento, vídeo, largura de banda, contas de usuário, entre
outros. Vejam na imagem acima que eu consigo monitorar como está o uso do meu computador!
Notem que ele está ocioso, ou seja, eu estou usando somente 9% de sua capacidade de
processamento; somente 75% de sua capacidade de memória; somente 1% de disco; etc.

Uma empresa que fornece serviços de nuvem sabe que a sua infraestrutura de tecnologia é mais
utilizada durante o dia do que durante a madrugada. Como os serviços são mensurados
constantemente, ela é capaz de otimizar a utilização da sua infraestrutura. Em suma: os serviços de
nuvem monitoram todos os recursos de tecnologia de modo a otimizá-los da melhor maneira
possível e de forma transparente tanto para o fornecedor quanto para o consumidor dos serviços.


---

Elasticidade Rápida (Rapid Elasticity)

A elasticidade rápida é a capacidade de um sistema de se adaptar a uma variação na carga de
trabalho quase instantaneamente – em regra, de forma automática e transparente. Alguns
dizem que é a capacidade de o ambiente computacional da nuvem aumentar ou diminuir os
recursos computacionais demandados e provisionados para cada usuário. Por vezes, o termo
elasticidade é utilizado de forma indiscriminada como escalabilidade1.

Galera, por que dizemos que isso ocorre de forma transparente para o usuário? Porque é irrelevante
para o usuário se estão sendo utilizados um ou dez processadores, dez ou vinte discos, etc. Para o
usuário, é como se os recursos da nuvem fossem ilimitados, isto é, quanto mais ele precisar,
mais a nuvem oferecerá. Para o cliente, esses recursos têm inúmeras possibilidades, podendo ser
adquiridos em qualquer quantidade e a qualquer momento. Bacana?

Pessoal, todo ano nós temos a Black Friday! Ocorrida em novembro, é um dia em que vários
produtos estão em promoção. Imaginem que não existe uma nuvem e você possui um site de
vendas de smartphone. Você possui um CPD no subsolo da sua empresa que suporta em média
100 visitas simultâneas por dia. Porém – no dia da Black Friday – você decide fazer uma promoção
de iPhone por R$500,00, imaginando que vai vender todo o estoque e vai ganhar muito dinheiro.

Você acerta em cheio e a promoção começa a fazer muito sucesso – tanto sucesso que o site da sua
empresa, que está hospedado em um servidor web no subsolo do seu CPD, começa a receber
100.000 visitas simultâneas. Ele não suporta e sai do ar, porque ele não tem capacidade para

1
 Qual a diferença entre elasticidade e escalabilidade? Sendo rigoroso, a elasticidade funciona como um elástico - ela permite adquirir novos recursos
de infraestrutura quando você necessita ou liberá-los quando não mais tiver necessidade - em geral, de forma automática, com base na carga ou
demanda, em um modelo pay-per-use e por curto período de tempo. Já a escalabilidade trata da habilidade de uma infraestrutura ser capaz de
suportar o aumento da carga no longo prazo como semanas, meses, anos ou décadas.


---

suportar essa quantidade de visitas. Qual o resultado? Prejuízo monstruoso! E sem a tecnologia de
nuvem, a única alternativa seria comprar mais equipamentos para o centro de dados.

Qual é o problema disso? O problema é que essa quantidade de visitas ocorre somente durante um
dia do ano, isto é, durante todo o restante do ano, essa infraestrutura que você comprou ficará
ociosa. É uma sinuca de bico, concordam? Pois é... a nuvem veio ajudá-lo porque uma de suas
características essenciais é a elasticidade rápida. Em outras palavras, se você contrata um serviço
de nuvem, você só paga pelo que foi utilizado. Olha que genial...

Se você contrata um serviço de computação em nuvem para hospedar seu site, você não precisa se
preocupar com a quantidade de visitas simultâneas. Por que, professor? Porque, se começar a
aumentar a quantidade de visitas simultâneas em seu site, a nuvem se encarrega de disponibilizar
automaticamente mais recursos para suportar essas visitas. E tudo isso de forma transparente: o
cliente não nota que o site é hospedado na nuvem e não percebe nenhuma diferença. Legal?


        (STJ – 2015) As características da computação na nuvem incluem a elasticidade, que
        consiste na capacidade de adicionar ou remover recursos para lidar com a variação de
        demanda.
        _______________________
        Comentários: a elasticidade (rápida) realmente consiste na capacidade de adicionar o remover recursos para lidar com a
        variação de demanda (sazonal, picos de demanda, etc) (Correto).

Amplo Acesso à Rede (Broad Network Access 2)

Todas as funcionalidades estão disponíveis através da rede e são acessíveis por meio de
mecanismos que promovem o uso de plataformas heterogêneas (smartphones, laptops, tablets,
etc). Os serviços disponibilizados em nuvem podem ser acessados de forma padronizada através
de diversos equipamentos, sistemas operacionais; navegadores; arquiteturas; entre outros – desde
que possua conectividade com a Internet.

2 Por vezes, é traduzido como Ampla Disponibilidade ou Acesso à Rede Ubíqua.


---

Agrupamento de Recursos (Resource Pooling)

Galera, vocês sabem o que é Pool? Pool é piscina, em inglês! Sim, mas o que nós temos de interessante
em uma piscina? Professor, nós temos basicamente água, raias e nadadores. E para que existem
essas raias? Para dividir a piscina de modo que várias pessoas possam utilizá-la simultaneamente
sem riscos de choque ou congestionamento. Então, podemos dizer que uma piscina é um recurso
que pode ser utilizado paralelamente pelos usuários? Sim!

                                                  Ahh moleque! Vocês já sabem onde eu quero
                                                  chegar, não é? Pool de Recursos é uma coleção
                                                  de recursos que podem ser utilizados
                                                  paralelamente pelos usuários com o propósito
                                                  de maximizar a eficiência de um sistema. Então,
                                                  acompanhem meu raciocínio: em uma empresa,
                                                  há 50 funcionários. Todos eles eventualmente
                                                  necessitam ter acesso à impressora, logo existem
                                                  algumas alternativas.

Uma péssima alternativa seria comprar uma impressora para cada funcionário, no entanto isso seria
extremamente ineficiente porque as impressoras passariam a maior parte do tempo ociosa e
também porque seria muito caro. Outra alternativa seria comprar apenas uma impressora, no
entanto isso também seria ineficiente porque as impressoras poderiam ficar congestionadas
devido a demanda dos funcionários.

Uma alternativa interessante seria comprar cinco impressoras e conectá-las à rede de
computadores da empresa. Vamos supor que eu me levanto da cadeira e visualizo que quatro das
cinco impressoras estão sendo utilizadas no momento – há somente uma vazia. Eu posso mandar
imprimir determinado arquivo nessa impressora vazia. No entanto, é um saco ter que levantar e
ficar olhando qual impressora não está sendo utilizada.


---

Outra alternativa seria configurar cada computador com uma impressora padrão. Em outras
palavras, teríamos uma impressora para cada vinte pessoas. Dessa forma, você competiria pela
impressão com apenas vinte pessoas – já é melhor do que cem pessoas. No entanto, isso ainda
não é ideal porque pode acontecer de a minha impressora padrão estar ocupada e a impressora do
lado, não. Aí eu tenho que – na hora de imprimir – escolher outra impressora.

Galera, isso também é um saco! A alternativa mais interessante é criar um pool de impressão. Dessa
forma, não é necessário configurar cada computador com uma impressora padrão, isto é, cada
usuário visualizará todas as impressoras como se fossem uma única impressora. Em outras
palavras, ele enviará uma requisição para o pool de impressoras e, não, para uma impressora
específica. Bacana?

Galera, o pool de impressão será o responsável por gerenciar os recursos, verificar qual
impressora está ociosa e vai enviar a requisição para a impressora vazia. Vocês percebem como
isso maximiza a eficiência? Pois é, o pool de impressão permitirá que vários equipamentos trabalhem
paralelamente. Aliás, vocês ouviram falar em pool, pensem imediatamente em paralelo. Em inglês,
carpooling é pegar carona, ou seja, um carro transportando várias pessoas.

Por conta desse agrupamento de recursos, os recursos são gerenciados de maneira mais
eficiente e os custos são reduzidos – é tudo que uma empresa deseja! Quando vamos para o
mundo das nuvens, os dispositivos de armazenamento de um provedor de nuvem armazenam
dados de milhões de pessoas diferentes. Professor, eu achei que eles reservaram um dispositivo de
armazenamento só para mim.

Não, pequeno gafanhoto! Todos os recursos são compartilhados com o intuito de alcançar a
máxima eficiência. Em suma, os recursos de computação de cada fornecedor são concebidos para
servir a vários clientes com diferentes recursos físicos e virtuais, distribuídos e alocados
dinamicamente. Existe uma sensação de independência uma vez que o cliente geralmente não tem
nenhum controle ou conhecimento sobre a localização exata dos recursos disponibilizados.

Professor, que recursos podem ser agrupados em um Resource Pooling? Exemplos de recursos incluem
armazenamento, processamento, memória, largura de banda, máquinas virtuais, etc.

Autosserviço sob Demanda (On-Demand Self-Service)

O autosserviço sob Demanda trata da capacidade de fornecer funcionalidades computacionais de
maneira automática, sem que haja a necessidade de o usuário interagir com provedor de serviço. O
consumidor pode, unilateralmente, requerer ou dispensar capacidades de computação, tais como
tempo do servidor, capacidade de armazenamento, etc – conforme necessário e de forma
automática. Tudo isso sem necessidade de interação humana com o fornecedor de cada serviço.

Sabe o que isso quer dizer na prática? Isso significa que você mesmo, sem ter que interagir com
ninguém, pode requerer acesso a serviços da nuvem. Você pode também requerer ou dispensar


---

capacidade de armazenamento. Vejam que maneiro: eu pagava por 50Gb de armazenamento do
Google Drive, mas eu decidi colocar todas as minhas fotos na nuvem e isso ocupava muito espaço.
Eu mesmo (autosserviço) fui no site do Google Drive e pedi para aumentar para 200Gb.

     (CNJ – 2013) Para que a aplicação seja considerada realmente na nuvem, ela deve
     atender a características essenciais, tais como autosserviço sob demanda; acesso por
     banda larga; agrupamento de recursos; elasticidade rápida; e serviço mensurado.
     _______________________
     Comentários: todas essas são características essenciais, apesar da péssima tradução de Broad Network Access para Acesso por
     Banda Larga (Correto).

Uma pergunta comum é: qual é a diferença entre Autosserviço Sob Demanda e Elasticidade Rápida? A
primeira característica essencial diz respeito à capacidade de fornecer um serviço como e quando
necessário, normalmente no contexto da aquisição de novos recursos. A segunda característica enfoca a
capacidade de aumentar ou diminuir o serviço com base na demanda – isso deve ser considerado no
contexto da escala de um recurso existente já anteriormente provisionado usando o serviço sob demanda.

Embora se possa argumentar que a elasticidade rápida também é uma função do autosserviço sob
demanda, a elasticidade é a capacidade de afetar um recurso existente sem ter que se preocupar com a
capacidade do provedor de nuvem de provisioná-lo. Em suma: no autosserviço sob demanda, é possível
adquirir novos recursos sempre que necessário; na elasticidade rápida, pode-se aumentar ou diminuir o
serviço baseado na demanda e dentro dos limites dos recursos previamente adquiridos.


---

Modelos de Serviço
IaaS (Infrastructure as a Service)
                                                                               INCIDÊNCIA EM PROVA: Altíssima


Trata-se da capacidade que o provedor tem de oferecer uma infraestrutura de processamento
e armazenamento de forma transparente. Nesse cenário, o usuário não tem o controle da
infraestrutura física, mas – através de mecanismos de virtualização – é possível ter o controle sobre
máquinas virtuais, aplicativos instalados e possivelmente um controle limitado dos recursos de
rede. Exemplo: Amazon Web Services.

Professor, não entendi bulhufas! Relaxa, parceiro – você não sai daqui sem entender! Galera, quando
eu estava fazendo faculdade, meu projeto de graduação tinha relação com a correção de vídeos
digitais em tempo real. Como assim? Pessoal, quando vídeos estão sendo transmitidos ao vivo, há
o risco de alguns quadros (frames) serem perdidos. Então, o software que eu implementei buscava
os quadros anteriores e posteriores para fazer uma simulação de um quadro perdido.

A imagem acima foi retirada da minha monografia. Eu não sei se vocês sabem, mas trabalhar com
manipulação de vídeos exige uma grande quantidade de processamento. Para demonstrar que
meu software funcionava corretamente, eu precisava fazer milhares de simulações. Em uma
faculdade pública, vocês acham que eu tinha um equipamento disponível assim? Claro que não! Eu
tinha duas alternativas: comprar um equipamento ou deixar rodando no meu notebook.

Pessoal, eu não tinha a menor condição de comprar um equipamento potente, então eu deixei
rodando no meu velho notebook por quase um mês para obter os resultados esperados. E o
medo de o computador desligar ou acabar a energia enquanto eu não via? Pois é, mas deu tudo certo
no final. Hoje em dia, vocês acham que eu faria a mesma coisa? É claro que não! Por que? Porque eu
tenho uma alternativa melhor do que as duas mencionadas anteriormente.


---

Atualmente, eu posso contratar uma infraestrutura em nuvem, isto é, eu posso acessar a
Amazon e escolher/configurar um computador virtual. Caraca, professor! Como assim? Na minha
época de graduação, eu teria que comprar um computador potente (processador com vários
núcleos, muita memória, etc). Hoje eu poderia contratar um computador virtual na Amazon e
configurá-lo do jeito que eu quiser. Pois é...

Eu poderia escolher um computador com dois núcleos ou com 128 núcleos (muito mais caro).
Enfim, a infraestrutura se tornou um serviço em que eu posso configurá-la virtualmente para
atender meus desejos específicos. O que eu quero fazer não exige muito processamento, mas precisa
de muita memória? Sem problema, basta eu reduzir a quantidade de núcleos do processador e
aumentar a quantidade de memória.


     (MPE/MA – 2013) Na arquitetura da computação na nuvem ou Cloud Computing, a
     camada que se utiliza dos recursos de virtualização de recursos computacionais, como o
     hardware, para prover os serviços é a:

     a) AaaS.
     b) IaaS.
     c) NaaS.
     d) PaaS.
     e) SaaS.
     _______________________
     Comentários: a capacidade que o provedor tem de oferecer uma infraestrutura de processamento e armazenamento de forma
     transparente é a IaaS. Nesse cenário, o usuário não tem o controle da infraestrutura física, mas – através de mecanismos de
     virtualização – possui controle sobre as máquinas virtuais, armazenamento, aplicativos instalados e possivelmente um controle
     limitado dos recursos de rede (Letra B).

     (BANESTES – 2018) Organizações têm buscado diminuir os custos de TI transferindo
     seus ambientes computacionais, tais como servidores, máquinas virtuais e bancos de
     dados, para provedores de computação em nuvem. A modalidade de computação em
     nuvem em que o provedor de cloud é responsável por disponibilizar esses ambientes
     computacionais, e a organização contratante continua responsável por cuidar de toda
     configuração, instalação e manutenção desses ambientes, é denominada:

     a) IaaS
     b) PaaS
     c) SaaS
     d) SECaaS
     e) Xen.
     _______________________
     Comentários: trata-se da infraestrutura – IaaS (Letra A).


---

PaaS (Platform as a Service)

Capacidade oferecida pelo provedor para o desenvolvimento de aplicativos que serão executados
e disponibilizados na nuvem. A plataforma na nuvem oferece um modelo de computação,
armazenamento e comunicação para os aplicativos. Em outras palavras, ela oferece uma
plataforma de alto nível de integração para implementar e testar aplicações na nuvem.
Exemplo: Google AppEngine e Microsoft Azure.

O usuário não administra ou controla a infraestrutura subjacente, incluindo rede, servidores,
sistemas operacionais ou armazenamento. No entanto, ele controla as aplicações implantadas e
configurações das aplicações hospedadas nesta infraestrutura. Assim sendo, PaaS fornece
linguagens de programação e ambientes de desenvolvimento para as aplicações, auxiliando a
implementação de sistemas de software.

Vamos entender isso melhor? Saca só! Eu já fui programador, o que significa que eu utilizava diversas
ferramentas que me auxiliavam no desenvolvimento de software. Como assim? Galera, todo
software (aplicativo de celular, sistema operacional, etc) é, na verdade, um conjunto de códigos
escritos por um programador. Para escrever esse código e executá-lo, são necessárias diversas
ferramentas, ambientes, linguagens de programação, entre outros.

Uma alternativa interessante seria instalar tudo isso em meu computador. No entanto, a nuvem
permite que eu contrate um serviço que me entrega tudo isso prontinho para ser usado sem
que eu precise me preocupar em nada com a instalação dessas ferramentas. Em outras palavras,
a plataforma como um serviço me oferece diversas ferramentas que permitem o desenvolvimento
e a colaboração entre programadores em um projeto.


     (MPE/BA – 2017) Uma organização precisa lançar rapidamente sua própria aplicação,
     que será desenvolvida em uma linguagem de programação de domínio público. Para isso
     considera adotar um ambiente baseado na nuvem no qual seja possível desenvolver,
     testar, executar e gerenciar a aplicação, porém, delegando ao fornecedor da plataforma
     a responsabilidade de cuidar de toda a configuração necessária para o uso, como
     instalação de servidor de aplicação, sistema operacional, certificados, firewalls, e de
     atualizar e manter a infraestrutura. Nesse contexto, o ambiente de computação em
     nuvem mais adequado é:

     a) IaaS
     b) PaaS
     c) SaaS
     d) MaaS
     e) On premises
     _______________________
     Comentários: ambiente em que é possível desenvolver, testar, executar e gerenciar a aplicação, delegando ao fornecedor da
     plataforma diversas responsabilidades é uma característica do PaaS (Platform as a Service) (Letra B).


---

SaaS (Software as a Service)

Aplicativos de interesse para uma grande quantidade de clientes passam a ser hospedados na
nuvem como uma alternativa ao processamento local. Os aplicativos são oferecidos como
serviços por provedores e acessados pelos clientes por aplicações como navegadores. Todo o
controle e gerenciamento de rede, sistemas operacionais, servidores e armazenamento é feito pelo
provedor de serviço. Exemplo: Google Apps, SalesForce, Google Drive, OneDrive, iCloud, etc.

Beleza! Eu não preciso comprar equipamentos, porque eu posso utilizar aqueles que estão na
nuvem. Eu também não preciso comprar e instalar plataformas de desenvolvimento de software
porque elas também já estão na nuvem. No entanto, eu ainda preciso o software? Não, hoje em dia
nem isso é mais necessário. Eu estou escrevendo essa aula no Microsoft Word que está
instalado na minha máquina, porém eu poderia utilizar o Microsoft Word Online.

Vejam que maneiro! Os softwares estão virando um serviço que você pode acessar e utilizar por
meio de um navegador web. Você não precisa se preocupar com a instalação, não precisa se
preocupar com vírus, nada disso... você só acessa e utiliza! O software fica hospedado em um
servidor. Dessa forma, não é necessário instalar o aplicativo na máquina local, basta o usuário ter
um navegador instalado, por exemplo, para acessar o software.

Vamos fazer um resumo bacana sobre os três modelos de serviço que nós vimos até agora! Para
entender melhor a computação em nuvem, pode-se tentar identificar os papéis desempenhados na
arquitetura baseada em nuvem. A figura acima destaca quem fornece serviços (linha sólida) e quem
consome (linha tracejada). Notem que o Modelo IaaS suporta o Modelo PaaS, que suporta o
Modelo SaaS.


---

O provedor de serviços ideal é responsável por disponibilizar, gerenciar e monitorar toda a estrutura
para a solução de computação em nuvem, deixando os desenvolvedores e usuários finais
despreocupados – sem esses tipos de responsabilidade. Para isso, o provedor pode fornecer três
modalidades de serviços (IaaS, PaaS e SaaS). Notem que os desenvolvedores consomem os
recursos fornecidos e fornecem serviços para os usuários finais. Os clientes pagam a conta!

Do ponto de vista de interação entre os três modelos de serviços, a IaaS fornece recursos
computacionais, seja de hardware ou software, para a PaaS, que por sua vez fornece recursos,
tecnologias e ferramentas para desenvolvimento e execução dos softwares implementados a
serem disponibilizados como SaaS. É importante ressaltar que uma organização provedora de
serviços de nuvem não precisa obrigatoriamente disponibilizar os três modelos. Entendido?

Em azul, temos os recursos que devem ser gerenciados pelo cliente e, em laranja, os que devem ser
gerenciados pelo provedor de nuvem. Notem que, na primeira coluna, temos recursos on-premises,
isto é, significa que a infraestrutura se encontra armazenada localmente e, não, na nuvem. Nesse
caso, se o usuário não quiser utilizar nuvem, terá que gerenciar: rede, armazenamento, servidores,
virtualização, sistema operacional, middlewares, ambientes de execução, dados e aplicações.


---

Em outras palavras, ele terá que comprar toda a infraestrutura (rede, armazenamento, servidores),
terá que instalar uma máquina virtual, terá que instalar um sistema operacional, terá que executar
softwares que ficam entre o sistema operacional e as aplicações (middlewares), terá que instalar
softwares responsáveis pela execução dos programas, terá que gerenciar os dados e terá que
instalar o software que processará esses dados. Por que? Porque ele não utilizará a nuvem!

Na segunda coluna, há uma infraestrutura como um serviço, isto é, nós transferimos a
responsabilidade de cuidar do hardware e da virtualização para um serviço de nuvem. Na terceira
coluna, temos uma plataforma como um serviço, isto é, nós transferimos a responsabilidade de
cuidar do sistema operacional1 e das ferramentas de programação para um serviço de nuvem. Por
fim, nós temos um software como um serviço, em que transferimos tudo para a nuvem.

             VÍDEO COM Dica para Memorizar                                       https://www.instagram.com/p/COy9n9xDHui


         (IF/PI – 2014) Como é conhecido o modelo de serviços de computação em nuvem (do
         Inglês “cloud computing”) que tem a capacidade de prover aos usuários aplicações on-
         line que rodam na infraestrutura da nuvem?

         a) CaaS.       b) DaaS.                                      c) IaaS.                        d) PaaS.                         e) SaaS.
         _______________________
         Comentários: cuidado com a pegadinha – a questão trata da capacidade de prover aplicações online que rodam em uma
         infraestrutura. Quem fornece aplicações online é o SaaS (Software as a Service) que evidentemente pode rodar sobre uma
         infraestrutura (Letra E)

         (PC/PI – 2018) Sobre computação em nuvem considere a afirmação abaixo:

         Nesse modelo em particular, o propósito específico é disponibilizar serviços por meio de
         interfaces como um navegador de Internet. As aplicações em nuvens são multi-
         inquilinos, ou seja, são utilizadas por diversos clientes simultaneamente. Nesse modelo
         os usuários podem executar aplicativos através de múltiplos dispositivos na
         infraestrutura em nuvem. Exemplos, neste contexto, são o Google Docs, Salesforce.
         Considerando a afirmação apresentada, a mesma se refere ao modelo:

         a) SaaS       b) HaaS                                     c) IaaS                           d) PaaS                           e) DaaS
         _______________________
         Comentários: trata-se de um SaaS. Cuidado com a pegadinha: a questão sempre coloca a palavra “infraestrutura” para
         confundir. No entanto, note que o enunciado trata de executar aplicativos em múltiplos dispositivos na infraestrutura da nuvem,
         mas o cerne da questão é a disponibilidade da aplicação na nuvem (Letra A).

1 O Sistema Operacional possui uma particularidade: na teoria, ele é considerado como parte das responsabilidades do PaaS; na prática, ele é considerado como parte das
responsabilidades do IaaS (em prova, vale mais a teoria do que a prática).


---

Galera, esses três modelos de serviço são os modelos tradicionais e são aquelas que disparado caem
mais em prova. No entanto, existem outros que veremos rapidamente abaixo:

                                 Trata-se de uma solução de comunicação corporativa terceirizada que pode ser
                                 alugada de um único fornecedor. Tais comunicações podem incluir aplicações de voz
            Communication
  CaaS                           sobre IP (VoIP ou telefonia via Internet), mensagens instantâneas (IM), colaboração
             as a Service        e videoconferência usando dispositivos fixos e móveis. O CaaS evoluiu nas mesmas
                                 linhas do Software as a Service (SaaS).
                                 Trata-se do compartilhamento de ferramentas de desenvolvimento e serviço, sendo
             Development         extremamente flexível por permitir a mescla do conteúdo de diversas fontes para
 DevaaS                          criar um novo serviço.
             as a Service

                                 Trata-se de um modelo avançado de serviços de computação em nuvem que
            Enterprise as a      incorpora ofertas de software, infraestrutura e plataforma com gerenciamento
  EaaS                           adicional de processos de negócios e camadas de serviço corporativo.
               Service

                                 Trata-se da entrega de ferramentas ou informações de análise estatística por um
             Big Data as a       fornecedor externo que ajuda as organizações a entender e usar percepções obtidas
  BDaaS
                Service          de grandes conjuntos de informações para obter uma vantagem competitiva.

                                 Trata-se do fornecimento de informações ou dados sobre demanda para os usuários
                                 independentemente da sua localização. A vantagem é que o detentor da aplicação
               Data as a
  DaaS                           conta com maior flexibilidade para expandir o banco de dados, compartilhar as
                Service          informações com outros sistemas, facilitar o acesso remoto por usuários autorizados,
                                 entre outros.
                                 Trata-se de um modelo de terceirização no qual as atividades de teste associadas a
              Testing as a       algumas atividades de negócios de uma organização são executadas por um
  TaaS                           provedor de serviços e, não, por funcionários.
                Service

     (SUFRAMA – 2014) Windows Azure, Microsoft Office 365 e SkyDrive são exemplos,
     respectivamente, de IaaS, SaaS e PaaS na computação em nuvem.
     _______________________
     Comentários: eles são respectivamente PaaS, SaaS e SaaS (Errado).


---

Modelos/Tipos de Implantação
Nuvem Pública (Public Cloud)
                                                                                                                INCIDÊNCIA EM PROVA: baixa

Trata-se basicamente de uma infraestrutura de nuvem aberta para o público em geral. Nuvem
gratuita, professor? Opa, eu não disse isso! Eu disse apenas que ela é pública, ou seja, ela está
aberta ao público em geral gratuitamente ou mediante pagamento. Pode ser gerenciada por
empresas, órgãos governamentais ou combinações dessas entidades – e existe nas instalações do
provedor da nuvem (Ex: Google Drive, Drop Box, OneDrive, Office 365, Prezi Sallesforce, etc).


     (IF/PA –2016) O modelo de implantação de um sistema de Computação em Nuvem deve
     ser escolhido de acordo com a necessidade das aplicações que serão disponibilizadas e o
     público de usuários que terá acesso aos recursos. O nome do modelo cujos recursos são
     compartilhados de forma ampla, com acesso a qualquer usuário da Internet é
     denominado:

     a) nuvem pública.
     b) nuvem comunitária.
     c) nuvem híbrida.
     d) nuvem privada.
     e) nuvem restrita.
     _______________________
     Comentários: trata-se de uma nuvem pública, visto que as aplicações serão disponibilizadas e o público de usuários terá acesso
     aos recursos (Letra A).

     (STJ – 2018) A nuvem pública, projetada para empresas públicas que gerenciam os
     recursos computacionais, é de uso exclusivo da administração federal, estadual ou
     municipal.
     _______________________
     Comentários: que viagem... nuvem pública é aquela que está disponibilizada para o público. A Administração Pública pode
     utilizar nuvens públicas, privadas ou híbridas (Errado).

     (EMAP – 2018) Como produto, a suíte Office comumente usada em uma nuvem pública,
     conhecida como Office 365, permite, de acordo com o plano de contratação escolhido,
     que softwares como Word e Excel possam ser instalados em um desktop ou executados
     pelo navegador do usuário.
     _______________________
     Comentários: Office 365 é um exemplo de nuvem pública e realmente permite o plano a ser contratado. Dessa forma, softwares
     que fazem parte dessa suíte (Word, Excel, Powerpoint, etc) podem ser instalados no computador ou executados em um
     navegador web (Correto).


---

Nuvem Privada (Private Cloud)

Trata-se basicamente de uma nuvem que pode ser acessada por um grupo exclusivo e restrito
de pessoas de uma organização. Vocês sabiam que o Estratégia Concursos possui a sua nuvem
privada? Pois é, os professores que gravam vídeos em estúdios particulares – por exemplo – fazem
o upload das aulas para a nuvem privada de modo que a equipe de edição possa editar as
videoaulas, no entanto ela é restrita a funcionários e professores.

A nuvem privada se encontra em ambiente próprio da entidade dona da rede, não
necessariamente no perímetro físico da empresa, mas protegida por um firewall e administrada
pelos funcionários da corporação. Ela evita o compartilhamento de dados sigilosos que podem ser
utilizados pelos membros da empresa através da Internet ou de uma rede local quando a nuvem é
implantada no datacenter da própria empresa.

Galera, pensem comigo: a ABIN é a Agência Brasileira de Inteligência – ela é responsável por
identificar ameaças reais e potenciais, bem como identificar oportunidades de interesse da
sociedade e defender a soberania nacional. Agora me respondam: faz sentido a ABIN utilizar uma
nuvem pública? Google Drive, OneDrive, etc? Claro que não! Ela trata de dados sigilosos do governo
brasileiro, logo não faz sentido utilizar uma nuvem pública de empresas americanas.


     (TCE/PA – 2016) O conceito de nuvens comunitárias se refere a uma infraestrutura de
     nuvem disponibilizada ao público em geral, ao passo que o conceito de nuvens híbridas
     se refere a uma infraestrutura de nuvem disponibilizada para uso exclusivo de uma
     organização.
     _______________________
     Comentários: o conceito de nuvens comunitárias públicas se refere a uma infraestrutura de nuvem disponibilizada ao público
     em geral, ao passo que o conceito de nuvens híbridas privadas se refere a uma infraestrutura de nuvem disponibilizada para uso
     exclusivo de uma organização (Errada).

     (Polícia Federal – 2012) O conceito de cloud storage está associado diretamente ao
     modelo de implantação de nuvem privada, na qual a infraestrutura é direcionada
     exclusivamente para uma empresa e são implantadas políticas de acesso aos serviços; já
     nas nuvens públicas isso não ocorre, visto que não há necessidade de autenticação nem
     autorização de acessos, sendo, portanto, impossível o armazenamento de arquivos em
     nuvens públicas.
     _______________________
     Comentários: o conceito de Cloud Storage é um serviço de armazenamento de dados na nuvem que independe da classificação
     em pública ou privada. Além disso, nuvens públicas podem exigir autenticação/autorização e é possível armazenar dados em
     nuvens públicas ou privadas (Errado).


---

Nuvem Híbrida (Hybrid Cloud)

Trata-se da combinação de duas ou mais infraestruturas de nuvens distintas (privadas,
comunitárias ou públicas) que permanecem como entidades únicas, mas que são unidas por
tecnologias padronizadas ou proprietárias – e devem permitir a portabilidade de dados e
aplicações. Como assim, professor? Em primeiro lugar, caso não permita a portabilidade dados e
aplicações, são apenas duas nuvens separadas e, não, uma nuvem híbrida.

Em segundo lugar, imaginem um cenário em que uma empresa crie uma nuvem privada e utilize
uma nuvem pública para estender recursos de sua nuvem privada. Nesse caso, dados sensíveis – por
exemplo – são hospedados na nuvem privada, e dados/aplicações que precisam ter informações
disponibilizas para usuários são hospedados na nuvem pública. Nesse caso, temos uma nuvem
híbrida porque houve uma composição de uma nuvem privada com uma nuvem pública.


     (UFRN – 2018) Modelo de implantação de computação em nuvem onde a infraestrutura
     de nuvem é uma composição de duas ou mais infraestruturas de nuvem distintas
     (privada, comunitária ou pública) que permanecem como entidades exclusivas, mas
     unidas por tecnologia padronizada ou proprietária que permite a portabilidade de dados
     e aplicativos (por exemplo, estouro de nuvem para balanceamento de carga entre
     nuvens). Esse modelo é a:

     a) nuvem pública.
     b) nuvem privada.
     c) nuvem comunitária.
     d) nuvem híbrida.
     _______________________
     Comentários: modelo que é uma composição de duas ou mais nuvens distintas é a nuvem híbrida (Letra D).

     (TJ/SE – 2014) O modelo de computação em nuvem do tipo nuvem híbrida permite a
     integração dos ambientes de TI locais e externos, de modo a unir os recursos
     computacionais próprios e os de terceiros, além de usar os mesmos processos de
     gerenciamento o que provê escalabilidade sem que haja impacto em aplicações e
     operações existentes.
     _______________________
     Comentários: perfeito... esse modelo utiliza uma combinação de nuvens que integra ambientes locais e remotos e pode
     realmente unir recursos computacionais próprios com o de terceiros, ou seja, uma nuvem privada com uma nuvem pública, por
     exemplo. Ela também pode utilizar os mesmos processos de gerenciamento e oferecer uma escalabilidade maior sem impactos
     em aplicações e operações existentes, isto é, tudo ocorre de maneira transparente para o usuário (Correto).


---

Nuvem Comunitária (Community Cloud)

Trata-se de uma nuvem exclusiva e restrita para grupos que possuam interesses e preocupações
em comum. Como é, professor? Imagine que você passou em um concurso top, vendeu seu Uno e
comprou aquela Mercedes-Benz C250 que você sempre sonhou (é o carro dos meus sonhos ). No
entanto, você se lembra que você tem que fazer um seguro para o carro. Só que tem um problema:
você é muito ruim de roda e já acionou várias vezes o seguro anterior.

Na hora de fazer uma cotação do seguro do carro atual, a seguradora pode olhar o seu perfil e
consultar a nuvem comunitária que existe entre todas as seguradoras de carro. Ela vai ver que
você manda mal no volante e vai cobrar mais caro no seu seguro. Você não concorda com o preço
e faz uma cotação em outra seguradora. Adianta alguma coisa? Não, porque ela também terá
acesso à nuvem comunitária e cobrará também um valor alto.

Podemos concluir, portanto, que uma nuvem comunitária é uma infraestrutura provida para
uso exclusivo (uma vez que o acesso é limitado) de uma comunidade que possui preocupações
comuns, tais como cooperativas, instituições de segurança, seguradores, blocos políticos, grupos
empresariais, entre outros. Ela pode ser controlada por uma ou mais organizações da comunidade,
por um terceiro ou por uma combinação entre eles – dentro ou fora das instalações da organização.


     (ABIN – 2018) Na computação em nuvem, uma nuvem pública é compartilhada por
     organizações que possuem interesses em comum, sendo o acesso restringido para não
     participantes.
     _______________________
     Comentários: uma nuvem pública comunitária é compartilhada por organizações que possuem interesses em comum, sendo o
     acesso restringido para não participantes (Errada).

     (MPOG – 2015) Nuvem comunitária é aquela em que a infraestrutura é compartilhada
     por organizações que mantêm algum tipo de interesse em comum (jurisdição,
     segurança, economia), podendo ser administrada, gerenciada e operada por uma ou
     mais dessas organizações.
     _______________________
     Comentários: impecável... a nuvem comunitária é compartilhada por organizações com interesse em comum (Correto).


---

Armazenamento em Nuvem
                                                                               INCIDÊNCIA EM PROVA: ALTA

O Armazenamento em Nuvem significa basicamente o armazenamento virtualizado ou
também chamado de Backup Online. Esse termo define recursos que permitem a um usuário de
Internet, em qualquer lugar, com qualquer sistema operacional e qualquer dispositivo de hardware
possa acessar arquivos na Internet em sites que permitem o armazenamento de cópias de
segurança. Como assim?

Este recurso permite que dados de um dispositivo (desktop, notebook, tablet, smartphone, etc)
sejam armazenados online em um servidor da Internet e que a sincronização aconteça de maneira
fácil e rápida, sendo melhor aproveitado quando se utiliza conexão em banda larga. Quaisquer
tipos de arquivos podem ser armazenados através deste recurso – músicas, textos, vídeos,
planilhas, etc.

Galera, eu sou completamente psicopata com isso! Como eu tenho pavor de perder todo o meu
material escrito, eu armazeno tudo na nuvem. Na verdade, eu armazeno tudo em várias nuvens
para não correr risco! Eu tenho tudo no Google Drive, OneDrive, Dropbox e iCloud. Esse recurso
efetua backup automaticamente dos arquivos inseridos na pasta do computador do usuário que é
criada quando da instalação do aplicativo.

Dessa forma, arquivos alterados e inseridos nesta pasta são automaticamente sincronizados no
drive virtual – tudo isso de forma gratuita. De maneira equivocada, muitos interpretam o serviço


---

de armazenamento em nuvem como um exemplo de IaaS. No entanto, quando pensamos em
IaaS, temos como consumidor o desenvolvedor que adquirirá máquinas virtuais definindo
capacidade computacional e sistema operacional.

O IaaS permitirá a construção de novas aplicações, que serão consumidas por usuários finais.
Quando você utiliza uma aplicação de armazenamento em nuvem (Ex: Google Drive), você está
adquirindo máquinas virtuais para desenvolvimento de aplicações? Não, você está apenas
consumindo um software de armazenamento que está virtualizado na nuvem. Logo, você está
utilizando um SaaS e, não, IaaS.


    (UFMS – 2016) Atualmente, há uma tecnologia que permite ao usuário armazenar
    arquivos na Internet, podendo realizar o acesso, edição e até mesmo exclusão de
    arquivos em uma diversidade de dispositivos. O acesso a esse serviço é controlado por
    um nome de usuário e senha. Há empresas que oferecem esse serviço gratuitamente.
    Assinale a alternativa correta para o nome desta nova tecnologia.

    a) Navegação Offline.
    b) Armazenamento em Nuvem.
    c) Dispositivos Móveis.
    d) Serviço de Diretório.
    e) Plataforma Java.
    _______________________
    Comentários: trata-se do Armazenamento em Nuvem (Letra B).

Google Drive

                           Trata-se de um serviço de armazenamento e computação em nuvem,
                           pois permite o armazenamento e a edição de arquivos através de seus
                           recursos. Um dos recursos que oferece a seus usuários é a possibilidade de
                           compartilhar arquivos, permitindo que estes sejam acessados por diversas
                           pessoas diferentes, o que dispensa a necessidade de se enviar o mesmo
                           arquivo para diversas pessoas através de muitos e-mails. Possibilita
                           também a criação de documentos, planilhas e apresentações.


    (TJ/AC – 2012) O Google Drive, um serviço de armazenamento de dados em nuvem, não
    pode ser utilizado a partir de tablets.
    _______________________
    Comentários: o armazenamento em nuvem pode ser utilizado por qualquer dispositivo que tenha acesso à Internet e um
    navegador web – inclusive tablets (Errado).

Dropbox


---

                                   Dropbox é um programa usado para armazenamento em nuvem,
                                   em que podemos armazenar documentos, fotos e vídeos, e acessá-
                                   los de qualquer computador no mundo inteiro. O usuário poderá
                                   acessar os arquivos armazenados no Dropbox nos computadores,
                                   tablets ou qualquer outro dispositivo conectado na Internet. O Dropbox
                                   dará ao usuário a possibilidade de compartilhar os arquivos garantindo
                                   toda a segurança e proteção dos documentos armazenados.


     (CRBio – 2013) Assinale a alternativa que exibe um aplicativo específico para
     Computação nas Nuvens.

     a) Dropbox.       b) VirtuaBox.                        c) Wamp.                   d) VLC.           e) VNC.
     _______________________
     Comentários: a única opção que apresenta uma aplicação típica de computação em nuvem é o DropBox (Letra A).

OneDrive

Antigamente chamado de Skydrive, trata-se de um serviço de
armazenamento em nuvem. Esse programa pertence a Microsoft, vem
pré-instalado no Windows 10 e funciona muito bem em todos os seus
dispositivos. Ele permite armazenar e proteger seus arquivos, compartilhá-
los com outras pessoas e acessá-los de qualquer lugar em todos os seus
dispositivos. Quando você usa o OneDrive com uma conta fornecida pela
sua empresa ou escola, é chamado OneDrive for Business.


     (CRO/SC – 2016) O serviço de armazenamento de arquivos na “nuvem” da Microsoft que
     vem pré-instalado no Windows 10 é o:

     a) Dropbox.
     b) iCloud.
     c) OneDrive.
     d) SendSpace.
     _______________________
     Comentários: o serviço de armazenamento em nuvem da Microsoft é o OneDrive (Letra C).

iCloud

                    iCloud é recurso de armazenamento e computação em nuvem da Apple, para
                    armazenar dados provenientes de iPhone, IPad, iPod Touch e computadores,
                    sendo que o iCloud sincroniza esses dispositivos Apple de forma automática. Ele
                    permite o armazenamento de arquivos de seus clientes em seus servidores,
                    assim como a sincronização dos dados automaticamente.


---

(TJ/AC – 2012) O iCloud é o serviço de armazenamento de dados em nuvem destinado
aos usuários do iOS, que podem armazenar seus conteúdos gratuitamente, sem
limitação de espaço.
_______________________
Comentários: opa... você pode armazenar seus conteúdos gratuitamente com uma limitação pequena de espaço. Para utilizar
mais espaço, você precisa pagar (Errado).


---

Conceitos Avançados
Azure
                                                                                                       INCIDÊNCIA EM PROVA: baixíssima

                                     O Microsoft Azure foi lançado em 2008, sendo classificado
                                     inicialmente como um PaaS, no entanto atualmente já é capaz de
                                     oferecer servidor de IaaS e SaaS também. Ele possui também grande
                                     integração com as tecnologias do cliente, permitindo criar
                                     máquinas virtuais com diferentes sistemas operacionais.


   (CRO/SC – 2016) Uma das tendências mais recentes da computação em nuvem é a de
   provimento de serviços de aplicativos, nos quais, ao invés de ter os aplicativos rodando
   em sua máquina local, o usuário tem os aplicativos rodando em um servidor remoto que
   é acessado através da internet. Recentemente a Microsoft apresentou ao mercado uma
   coleção de serviços de nuvem integrados, que incluem, desde um sistema operacional, a
   um serviço de banco de dados e de armazenamento de arquivos. Esta ferramenta tem o
   nome de:

   a) Microsoft OneDrive.
   b) Microsoft Cortana.
   c) Microsoft Azure.
   d) Microsoft Windows Small Business Server.
   _______________________
   Comentários: a ferramenta da Microsoft que apresenta diversos recursos integrados de nuvem é o Azure (Letra C).

   (Polícia Federal – 2013) Com o ambiente de computação em nuvem Azure, da Microsoft,
   é possível a criação de máquinas virtuais com sistemas operacionais distintos, desde o
   Windows Server até máquinas com distribuição Linux, como, por exemplo, CentOS, Suse
   e Ubuntu.
   _______________________
   Comentários: ele realmente permite criar máquinas virtuais com diversos sistemas operacionais. Apesar de ser uma ferramenta
   da Microsoft, é possível criar máquinas com Windows ou Linux e suas distribuições (Correto).


---

Ferramentas Colaborativas
                                                                              INCIDÊNCIA EM PROVA: baixíssima

Em um mundo conectado, as empresas que conseguem superar as limitações geográficas e
temporais certamente se mostrarão mais competitivas do que as suas concorrentes. É cada vez
mais importante desenvolvermos maneiras eficientes para compartilharmos as informações e o
conhecimento. Para realizar essas tarefas, tem sido muito comum a adoção das ferramentas
colaborativas na empresa.

Baseadas em computação em nuvem, as ferramentas colaborativas permitem que usuários
acessem e manipulem simultaneamente um mesmo documento. Ferramentas colaborativas
podem ser definidas como são aplicações cuja principal finalidade é o compartilhamento de
arquivos de trabalho entre um conjunto de usuários de uma organização com o intuito de que esses
desenvolvam uma tarefa em comum.

Diferentemente de sistemas de gestão que são acessados por um único usuário e quase nunca
têm recursos para conectar pessoas, essas ferramentas permitem que vários colaboradores
conversem por chat, compartilhem arquivos e troquem informações em tempo real. Por serem
baseadas na nuvem, elas oferecem um verdadeiro ambiente de trabalho virtual que pode ser
acessado a qualquer hora e lugar pelos membros do time, pelo computador ou celular.

Assim, os colaboradores conseguem organizar projetos, distribuir e acompanhar tarefas, fazer
reuniões, editar arquivos de forma colaborativa e reproduzir as mesmas atividades do escritório
físico na internet. Com o distanciamento social imposto pela pandemia de coronavírus, o uso de
ferramentas colaborativas se tornou extremamente comum para a grande parte das empresas e
órgãos que querem manter suas atividades.

Mesmo antes dessa crise, esses recursos já estavam sendo adotados pelas organizações antenadas
às tendências, como parte da transformação digital em curso no mundo. Ao utilizar uma
ferramenta colaborativa, um usuário pode contar com diversos benefícios como aumento da
produtividade, redução de custos, facilidade de utilização, aumento da mobilidade, aumento
da segurança, reforço da cultura de trabalho em equipe, entre outros.

As principais ferramentas colaborativas do mercado atualmente são: G Suite, Office 365, Trello,
Zoom, Microsoft Teams, Slack, Asana, entre outros. Vejamos...

     FERRAMENTA       LOGO                                     DESCRIÇÃO
                                  Esse pacote profissional do Google inclui os famosos Google
                                  Documentos, Google Planilhas, Google Agenda, Google Apresentações,
                                  Google Drive e outras aplicações que permitem a criação e edição de
         G Suite                  arquivos na nuvem.


---

                                              Microsoft 365 é uma versão online por assinatura da suíte de aplicativos
                                              para escritório/produtividade Microsoft Office, focado no trabalho
                                              colaborativo simultâneo de uma grande equipe e na segurança, lançado
     Office 365                               em junho de 2011 desenvolvido pela empresa Microsoft.

                                              O Trello já se consagrou como uma das plataformas de produtividade
                                              mais utilizadas no mundo dos negócios. A grande vantagem dessa
                                              ferramenta é a facilidade em gerenciar projetos online e colaborar com a
         Trello
                                              equipe à distância, graças ao formato inspirado no método Kanban —
                                              sistema de controle de processos por meio de cartões que surgiu na
                                              indústria japonesa e faz parte dos métodos ágeis modernos.
                                              A Zoom é a ferramenta de videoconferência mais popular entre as
                                              empresas e líder de mercado na categoria. Ela permite que você faça
                                              reuniões online com até 1000 participantes de uma vez, compartilhe a
           Zoom
                                              tela do computador, grave as chamadas e ainda use recursos
                                              colaborativos como agendamento integrado e co-anotações em quadro
                                              branco.
                                              O Microsoft Teams vem ganhando espaço no mercado de ferramentas
                                              colaborativas pela praticidade e variedade de recursos. A plataforma
                                              permite fazer reuniões online por vídeo com até 250 pessoas e oferece 10
Microsoft Teams                               GB de espaço de armazenamento para arquivos da equipe, além de incluir
                                              o compartilhamento de tela e edição colaborativa de documentos do
                                              Microsoft Word, PowerPoint e OneNote.
                                              O Asana é mais uma opção para manter a equipe conectada, gerenciar
                                              projetos e administrar prioridades no home office. A plataforma inclui
                                              recursos como metas, formulários, automatização de tarefas de rotina,
          Asana                               cronogramas, portfólios e várias outras funções que dão uma visão
                                              completa do trabalho e otimizam a colaboração.

    (PRODEB – 2018) Ferramentas de colaboração são soluções tecnológicas
    implementadas no ambiente de trabalho que ajudam a melhorar a produtividade das
    empresas e de pessoas. Para o funcionamento dessas ferramentas, deve-se utilizar
    estratégias colaborativas que aproveitem dos benefícios da Cloud Computing e da
    mobilidade. Os benefícios do uso das ferramentas de colaboração são extremamente
    positivos. Assinale a alternativa INCORRETA sobre esses benefícios.

    a) Compartilhamento de arquivos.
    b) Desenvolvimento coletivo de tarefas.
    c) Visão panorâmica do desenvolvimento de tarefas.
    d) Disponibilidade de recursos em todo tempo e em todo lugar.
    e) Uso exclusivo para fins profissionais
    _______________________
    Comentários: todos esses são benefícios das ferramentas de colaboração, exceto o uso exclusivo para fins profissionais – a
    maioria dos usuários, inclusive, são usuários domésticos e, não, profissionais (Errado).


---

                                                         RESUMO

                      DEFINIÇÃO


A Computação em Nuvem pode ser definida como um
conjunto de recursos virtuais facilmente utilizáveis e
acessíveis, tais como hardware, plataforma de
desenvolvimento, serviços, data centers e servidores
distribuídos em diferentes posições geográficas pelo
mundo.

     CARACTERÍSTICA                                                         DESCRIÇÃO
        SERVIÇOS             Os serviços de nuvem monitoram todos os recursos de tecnologia de modo a otimizá-los da melhor maneira
      MENSURÁVEIS            possível e de forma transparente tanto para o fornecedor quanto para o consumidor dos serviços.

      ELASTICIDADE           A elasticidade rápida é a capacidade de um sistema de se adaptar a uma variação na carga de trabalho quase
          RÁPIDA             instantaneamente – de forma automática e transparente.

      AMPLO ACESSO           Todas as funcionalidades estão disponíveis através da rede e são acessíveis por meio de mecanismos que
          À REDE             promovem o uso de plataformas heterogêneas (smartphones, laptops, tablets, etc).

      AGRUPAMENTO            Recursos computacionais devem ser agrupados para servir a múltiplos consumidores, com recursos físicos e
       DE RECURSOS           virtuais sendo arranjados e rearranjados dinamicamente conforme a demanda desses consumidores.

      AUTOSSERVIÇO           O autosserviço sob Demanda trata da capacidade de fornecer funcionalidades computacionais de maneira
      SOB DEMANDA            automática, sem que haja a necessidade de o usuário interagir com provedor de serviço.


---

    MODELO DE NUVEM                              DESCRIÇÃO
          IaaS               Trata-se da capacidade que o provedor tem de
  Infrastructure as a        oferecer uma infraestrutura de processamento e
        Service              armazenamento de forma transparente.

                             Trata-se da capacidade oferecida pelo provedor
        PaaS                 para o desenvolvimento de aplicativos que serão
 Platform as a Service       executados e disponibilizados na nuvem.

                             Trata-se de aplicativos de internet, armazenados
        SaaS                 em nuvem, que fornecem uma série de serviços sob
 Software as a Service       demanda com potencial de escala global via
                             navegador web.

Modelos de implantação                                                      DESCRIÇÃO
                             Trata-se de uma infraestrutura de nuvem aberta para o público em geral via Internet – os serviços são
     NUVEM PÚBLICA           disponibilizados a qualquer pessoa que queira utilizá-los ou comprá-los (gratuitamente ou não).

                             Trata-se de uma infraestrutura de nuvem que pode ser acessada por um grupo exclusivo e restrito de pessoas
     NUVEM PRIVADA           de uma organização pela internet ou por uma rede interna privada.

                             Trata-se da combinação de duas ou mais infraestruturas de nuvens distintas (privadas, comunitárias ou
     NUVEM HÍBRIDA           públicas) que permanecem como entidades únicas, mas que são unidas por tecnologias padronizadas ou
                             proprietárias – e devem permitir a portabilidade de dados e aplicações.
                             Trata-se de uma nuvem exclusiva e restrita para grupos que possuam interesses em comum. Pode ser de
   Nuvem comunitária         propriedade, administração e operação por uma ou mais organizações na comunidade, um terceiro, ou
                             alguma combinação deles – e pode existir dentro ou fora das instalações.


                                                DEFINIÇÃO ARMAZENAMENTO EM NUVEM
Armazenamento em Nuvem significa armazenamento virtualizado ou – colocado de maneira mais simples – trata-se de backup online. Esse
termo define recursos que permitem a um usuário de Internet, em qualquer lugar, com qualquer sistema operacional e qualquer dispositivo
de hardware possa acessar arquivos na Internet em sites que permitem o armazenamento de cópias de segurança.

     FERRAMENTA                LOGO                                                  DESCRIÇÃO
                                                Esse pacote profissional do Google inclui os famosos Google
                                                Documentos, Google Planilhas, Google Agenda, Google Apresentações,
                                                Google Drive e outras aplicações que permitem a criação e edição de
           G Suite                              arquivos na nuvem.


---

                      Microsoft 365 é uma versão online por assinatura da suíte de aplicativos
                      para escritório/produtividade Microsoft Office, focado no trabalho
                      colaborativo simultâneo de uma grande equipe e na segurança, lançado
     Office 365       em junho de 2011 desenvolvido pela empresa Microsoft.

                      O Trello já se consagrou como uma das plataformas de produtividade
                      mais utilizadas no mundo dos negócios. A grande vantagem dessa
                      ferramenta é a facilidade em gerenciar projetos online e colaborar com a
         Trello
                      equipe à distância, graças ao formato inspirado no método Kanban —
                      sistema de controle de processos por meio de cartões que surgiu na
                      indústria japonesa e faz parte dos métodos ágeis modernos.
                      A Zoom é a ferramenta de videoconferência mais popular entre as
                      empresas e líder de mercado na categoria. Ela permite que você faça
                      reuniões online com até 1000 participantes de uma vez, compartilhe a
          Zoom
                      tela do computador, grave as chamadas e ainda use recursos
                      colaborativos como agendamento integrado e co-anotações em quadro
                      branco.
                      O Microsoft Teams vem ganhando espaço no mercado de ferramentas
                      colaborativas pela praticidade e variedade de recursos. A plataforma
                      permite fazer reuniões online por vídeo com até 250 pessoas e oferece 10
Microsoft Teams       GB de espaço de armazenamento para arquivos da equipe, além de incluir
                      o compartilhamento de tela e edição colaborativa de documentos do
                      Microsoft Word, PowerPoint e OneNote.
                      O Asana é mais uma opção para manter a equipe conectada, gerenciar
                      projetos e administrar prioridades no home office. A plataforma inclui
                      recursos como metas, formulários, automatização de tarefas de rotina,
         Asana        cronogramas, portfólios e várias outras funções que dão uma visão
                      completa do trabalho e otimizam a colaboração.

  PARA MAIS DICAS:   www.instagram.com/professordiegocarvalho


---

MAPA MENTAL


---

---

---

---

---

                   QUESTÕES COMENTADAS – CESPE

  ATENÇÃO: somente o cespe possui uma grande quantidade de questões sobre
    esse tema, LOGO DISPONIBILIZO QUESTÕES COMENTADAS DE DIVERSAS BANCAS
1. (CESPE / Prefeitura de Boa Vista-RR - 2023) Suponha que um arquivo da Área de Trabalho do
   computador seja colocado na nuvem. Nesse caso, o arquivo ficará disponível:

   a) em uma solução de armazenamento online.
   b) na pasta Documentos do computador.
   c) em um pendrive do usuário.
   d) no armazenamento interno do celular do usuário.

Comentários:

Quando um arquivo da Área de Trabalho do computador é colocado na nuvem, ele é armazenado
em uma solução de armazenamento online, como Google Drive, Dropbox, OneDrive, entre
outras. Dessa forma, o arquivo poderá ser acessado e disponibilizado a partir de qualquer
dispositivo conectado à internet, garantindo maior mobilidade e facilidade de compartilhamento.

                                                                             Gabarito: Letra A

2. (CESPE / CNMP - 2023) Uma das características do armazenamento em nuvem é a elasticidade,
   ou seja, o usuário pode aumentar e diminuir a escala verticalmente, conforme a demanda, e
   pagar apenas pelo que usa.

Comentários:

Perfeito! Uma das principais características do armazenamento em nuvem é a elasticidade, que se
refere à capacidade de aumentar ou diminuir a escala verticalmente, de acordo com a demanda do
usuário ou da empresa. Isso permite que os usuários ajustem os recursos de armazenamento,
processamento e outros serviços em nuvem conforme suas necessidades específicas em
determinado momento.

Por exemplo, se uma empresa precisa de mais espaço de armazenamento para lidar com um
aumento temporário no tráfego de dados, ela pode facilmente expandir sua capacidade de
armazenamento na nuvem para acomodar essa demanda adicional. Da mesma forma, quando a
demanda diminui, ela pode reduzir a escala verticalmente, evitando custos desnecessários.

                                                                             Gabarito: Correto


---

3. (CESPE / CNMP - 2023) Sistemas de armazenamento em nuvem permitem que usuários façam
   backup de arquivos gerais de maneira online.

Comentários:

Perfeito! Essa é uma das principais funcionalidades oferecidas por serviços de armazenamento em
nuvem!

                                                                             Gabarito: Correto

4. (CESPE / Prefeitura de São Cristovão-SE - 2023) A respeito de computação em nuvem, assinale
   a opção correta.

   a) O uso doméstico da computação em nuvem ainda não é possível, porque esse recurso está
   disponível exclusivamente para empresas e organizações.

   b) O Gmail é um exemplo de aplicação em nuvem, pois o sistema de gerenciamento de emails
   fica armazenado nos servidores do prestador do serviço.

   c) Os serviços de computação em nuvem são disponibilizados apenas mediante pagamento.

   d) O Microsoft Office 365 não dispõe de aplicações em nuvem, pois só é possível utilizar os
   softwares desse pacote que estejam instalados no computador.

Comentários:

(a) Errado. A computação em nuvem não está disponível exclusivamente para empresas e
organizações; (b) Correto. Ele é um serviço de e-mail oferecido pelo Google, e o sistema de
gerenciamento de e-mails fica armazenado nos servidores do Google; (c) Errado. Embora alguns
serviços de computação em nuvem sejam pagos, existem também serviços gratuitos disponíveis;
(d) Errado. O Microsoft Office 365 oferece aplicativos em nuvem, permitindo que os usuários
acessem e utilizem os softwares do pacote, como o Word, Excel e PowerPoint, através de um
navegador web, sem a necessidade de instalação local dos aplicativos.

                                                                             Gabarito: Letra B

5. (CESPE / CNMP - 2023) No OneDrive, um arquivo poderá ser aberto no modo online e, se
   necessário, ser editado em modo offline.

Comentários:

Perfeito! No OneDrive, é possível abrir arquivos no modo online, diretamente no navegador, e
também é possível editá-los em modo offline, mesmo quando não há conexão com a Internet. O
OneDrive permite que você abra e edite arquivos no modo online diretamente no navegador, além


---

de oferecer a opção de sincronização para editar arquivos em modo offline em seu dispositivo. Isso
proporciona flexibilidade e acesso aos seus arquivos, independentemente de estar conectado à
Internet ou não.

                                                                               Gabarito: Correto

6. (CESPE / TRT8 - 2022) Um dos requisitos para implementação dos serviços na Google Cloud
   pelo TRT8 foi que o primeiro hospedasse, mantivesse e atualizasse a infraestrutura de back-end,
   tais como, armazenamento, rede e virtualização, enquanto o segundo fosse responsável por
   gerenciar o sistema operacional, middleware e aplicativos.

   Certo órgão, ao definir os modelos de serviço de computação em nuvem, decidiu que seria
   responsável por gerenciar o sistema operacional, middleware e aplicativos, enquanto
   hospedaria, manteria e atualizaria a infraestrutura de back-end, tal como, armazenamento,
   rede e virtualização através do Google Cloud.

   Assinale a opção que corresponde ao modelo de serviço descrito pelo trecho precedente.

   a) IaaS.
   b) CaaS.
   c) SaaS.
   d) PaaS.
   e) Colocation.

Comentários:


---

Vamos relembrar nossa figurinha clássica: se o órgão vai gerenciar sistema operacional,
middleware e aplicativos enquanto a nuvem cuida do armazenamento, rede e virtualização, então
estamos falando de um IaaS (Infrastructure as a Service).

                                                                               Gabarito: Letra A

7. (CESPE / TELEBRAS – 2022) Na execução de cargas de trabalho na computação em nuvem, o
   repositório de recursos de tecnologia da informação pode ser provisionado e escalado mediante
   o acesso via rede.

Comentários:

Palavras complexas, mas sentido simples: o que a questão quer dizer é que, quando há necessidade
de executar alguma função em nuvem, é possível provisionar (abastecer, fornecer, prover) recursos
via rede. Eu preciso de mais espaço? Acesso a nuvem via rede e aumento a quantidade de espaço! Eu
preciso de mais memória? Acesso a nuvem via rede e aumento a quantidade de memória! E assim
por diante...

                                                                               Gabarito: Correto

8. (CESPE / PETROBRAS – 2022) No modelo IaaS, o provedor do serviço de nuvem é responsável
   pela segurança fundamental do ambiente, enquanto o usuário da nuvem é responsável pela
   segurança de sua rede virtual e de tudo o que for construído sobre a infraestrutura
   disponibilizada.

Comentários:

Perfeito! Quem cuida da infraestrutura do ambiente será o provedor do IaaS – o usuário final será
responsável pela segurança de sua própria rede, assim como do que for construído sobre a
infraestrutura. Se uma pessoa não autorizada eventualmente se esconde das câmeras e acessa
ambiente de infraestrutura do provedor, a responsabilidade é dele; se alguém não autorizado
eventualmente acessa a minha casa e invade a minha rede interna, a responsabilidade é minha.

                                                                               Gabarito: Correto

9. (CESPE / SERES-PE – 2022) Suítes de escritório, como o Microsoft Office 365, quando
   executadas na nuvem, são um exemplo de:

   a) software as a service.
   b) business process as a service.
   c) platform as a service.
   d) functions as a service.


---

   e) infrastructure as a service.

Comentários:

Suítes de escritório em nuvem são Software as a Service (SaaS). Por que? Porque o provedor que
forneceu o software é responsável pelos dados, virtualização, servidores, armazenamento,
memória, rede, entre outros... você simplesmente abre o navegador, acessa e utiliza esses serviços.

                                                                                 Gabarito: Letra A

10. (CESPE / TCE-SC – 2022) Em arquitetura em nuvem, dentre os tipos SaaS, IaaS e PaaS, o serviço
    de becape é restrito aos dois últimos, haja vista que no SaaS não há como personalizar os
    recursos de hardware, que é essencial para oferecer métodos eficazes de cópias regulares de um
    fornecedor de serviços para outro local.

Comentários:

SaaS pode ter becape, sim! Além disso, é possível personalizar recursos de hardware – é possível
aumentar/reduzir recursos de armazenamento, entre outros.

                                                                                 Gabarito: Errado

11. (CESPE / TCE-RJ – 2022) No modelo IaaS de serviço em nuvem, o consumidor gerencia e
    controla sistemas operacionais, armazenamento, componentes e sistemas de segurança e a
    infraestrutura de nuvem subjacente.

Comentários:

O consumidor não gerencia nem controla a infraestrutura de nuvem subjacente, mas tem controle
sobre sistemas operacionais, armazenamento e aplicativos implementados, e, possivelmente,
controle limitado de componentes de rede selecionados.

                                                                                 Gabarito: Errado

12. (CESPE / TCE-SC – 2022) Uma característica própria dos serviços de armazenamento de dados
    em nuvem (cloud storage) é a:

   a) garantia de espaço ilimitado.
   b) execução de aplicações remotas.
   c) garantia de gratuidade.
   d) mobilidade facilitada para o usuário.
   e) codificação de linguagens de programação.


---

Comentários:

(a) Errado, não há garantia de espaço ilimitado; (b) Errado, não há relação com a execução de
aplicações remotas; (c) Errado, não há nenhuma garantia de gratuidade; (d) Correto. Pensa comigo:
antigamente, se quiséssemos mostrar as fotos das últimas férias para os parentes, tínhamos que
levar um pendrive ou disco rígido externo com as fotos. Hoje em dia, com os dados em nuvem, basta
acessar via web os dados armazenados, facilitando a mobilidade para o usuário; (e) Errado, essa
característica não tem qualquer relação com armazenamento de dados em nuvem.

                                                                                  Gabarito: Letra D

13. (CESPE / APEX-Brasil – 2022) Na computação em nuvem, a oferta de um ambiente de serviços
    para, por exemplo, desenvolvimento e teste de software, ocorre por meio de:

   a) IaaS – infraestrutura como serviço.
   b) PaaS – plataforma como serviço.
   c) SaaS – software como serviço.
   d) Web service – serviços web.

Comentários:

Desenvolvimento e Teste de Software são palavras-chave de PaaS (Platform as a Service).

                                                                                  Gabarito: Letra B

14. (CESPE / APEX-Brasil – 2022) Assinale a opção que apresenta o modelo de serviços na nuvem
    em que o cliente, para usufruto do serviço, deve instalar e configurar, por conta própria, os
    recursos necessários, como compiladores, banco de dados e o próprio sistema operacional.

   a) CaaS (Containers as a Service)
   b) IaaS (Infrastructure as a Service)
   c) SaaS (Software as a Service)
   d) PaaS (Platform as a Service)

Comentários:

Notem que compiladores e banco de dados são ferramentas úteis no desenvolvimento de software.
Professor, então se trata do Platform as a Service (PaaS)? Não, porque o enunciado afirma que – para
usufruto do serviço – deve instalar e configurar, por conta própria, os recursos necessários. Logo,
trata-se da Infrastructure as a Service (IaaS), já que essas serão responsabilidades do consumidor e,
não, do provedor de nuvem.

                                                                                  Gabarito: Letra B


---

15. (CESPE / APEX Brasil – 2022) Na plataforma como serviço,

   a) os desenvolvedores podem criar aplicativos móveis sem se preocupar com o gerenciamento
   de infraestrutura subjacente de servidores e bancos de dados necessários.

   b) são oferecidos recursos de computação, armazenamento e rede, sob demanda e pagos
   conforme o uso; o usuário desenvolve as soluções e é responsável pela instalação necessária.

   c) o provedor de serviços não fornece infraestrutura subjacente de software, mas fornece
   aplicativos por meio da Internet para o desenvolvimento de soluções de software.

   d) os usuários subscrevem o software e o acessam por meio da Web ou de APIs do fabricante,
   sem a necessidade que o provedor forneça infraestrutura subjacente.

Comentários:

(a) Correto. Essa é a função do PaaS: fornecer diversas ferramentas para que desenvolvedores de
software possam fazer implementações sem se preocupar com infraestrutura subjacente; (b)
Errado, o usuário não é responsável pela instalação necessária; (c) Errado, ele fornece infraestrutura
subjacente de software; (d) Errado, o provedor deve fornecer a infraestrutura subjacente.

                                                                                   Gabarito: Letra A

16. (CESPE / Prefeitura de São Cristóvão-SE – 2022) O aumento de custos e a desobrigação de
    possuir uma estrutura interna de servidores são considerados desvantagens da computação em
    nuvem para as organizações.

Comentários:

Opaaaaa... a desobrigação de possuir uma estrutura interna de servidores é uma vantagem da
computação em nuvem para as organizações! Imagine que você tenha uma empresa e pode reduzir
seus custos ao não precisar manter servidores (máquinas especializadas): são vantagens
competitivas em relação a outras organizações.

                                                                                    Gabarito: Errado

17. (CESPE / Prefeitura de São Cristóvão-SE – 2022) O ambiente em que vários sistemas
    operacionais trabalham dividindo um mesmo equipamento é denominado ambiente de
    virtualização de hardware, um dos conceitos mais utilizados em Cloud Computing.

Comentários:


---

Perfeito! A virtualização permite que um hardware possa executar vários sistemas operacionais
iguais ou distintos, de uma forma simultânea e isolados entre si. Trata-se realmente de um dos
conceitos mais utilizada na computação em nuvem.

                                                                               Gabarito: Correto

18. (CESPE / FUNPRESP-EXE - 2022) Na computação em nuvem, diversos computadores em rede
    são empregados para oferecerem recursos computacionais que visam solucionar um mesmo
    problema específico.

Comentários:

Solucionar um mesmo problema específico? Nada disso, a computação em nuvem é utilizada para
solucionar diversos problemas, por isso existem diversas infraestruturas de nuvem como IaaS, PaaS
e SaaS, cada uma é adequada a um caso específico.

                                                                                Gabarito: Errado

19. (CESPE / FUNPRESP-EXE - 2022) Design de aplicativo, desenvolvimento e testes são serviços
    típicos em uma infraestrutura de SAAS (Software as a Service).

Comentários:

A infraestrutura que está relacionada a serviços de desenvolvimento é o PaaS (Plataform as a
Service).

                                                                                Gabarito: Errado

20. (CESPE / PC-PB – 2022) O serviço no qual o provedor de nuvem fornece servidores,
    armazenamento, rede e ferramentas para desenvolver, testar, hospedar e entregar aplicativos
    e os clientes podem usar um conjunto de ferramentas pré-montadas é conhecido como:

   a) Containers as a Service (CaaS).
   b) Function as a Service (FaaS).
   c) Service as a Service (SaaS).
   d) Infrastructure as a Service (IaaS).
   e) Platform as a Service (PaaS).

Comentários:

Fornece servidores, armazenamento, rede e ferramentas para desenvolver, testar, hospedar e
entregar aplicativos? Você, na hora, tem que lembrar do PaaS. Ele é o responsável por fornecer,
além da infraestrutura necessária, uma plataforma para desenvolvedores.


---

                                                                              Gabarito: Letra E

21. (CESPE / DPDF - 2022) Em termos de arquitetura, cloud computing é considerada
    descentralizada, pois suas aplicações são executadas em ambientes distintos.

Comentários:

De fato, a descentralização é uma característica da computação em nuvem. No entanto, nem
sempre as aplicações serão executadas em ambientes distintos, elas podem ser executadas no
mesmo ambiente. Por exemplo: podemos ter uma nuvem privada em uma organização com uma
infraestrutura local.

                                                                               Gabarito: Errado

22. (CESPE / DPDF - 2022) A computação em nuvem oferece uma infraestrutura elástica e escalável
    para os sistemas que são executados em seus ambientes, sem necessidade de customizações.

Comentários:

A elasticidade funciona como um elástico - ela permite adquirir novos recursos de infraestrutura
quando você necessita ou liberá-los quando não mais tiver necessidade - em geral, de forma
automática, com base na carga ou demanda, em um modelo pay-per-use e por curto período de
tempo. Já a escalabilidade trata da habilidade de uma infraestrutura ser capaz de suportar o
aumento da carga no longo prazo como semanas, meses, anos ou décadas.

Desse modo, a escalabilidade não está diretamente ligada à computação em nuvem, mas – sim – a
arquitetura do software. Em suma: o simples fato de um sistema utilizar computação em nuvem
não torna o sistema escalável.

                                                                               Gabarito: Errado

23. (CESPE / DPDF - 2022) Em comparação aos modelos IaaS (infrastructure as a service) e SaaS
    (software as a service), a implantação do modelo PaaS (platform as a service) exige um
    investimento inicial menor, por serem desnecessários, por exemplo, investimentos com
    infraestrutura.

Comentários:

Perfeito! Tanto no SaaS quanto no PaaS, não há necessidade de investimento com infraestrutura.
No entanto, em relação ao investimento inicial com a implantação de um modelo, o PaaS tem um
investimento menor. No SaaS, é necessário o investimento em aplicações e dados; já no PaaS eles
serem gerenciados pela própria organização.


---

                                                                                   Gabarito: Correto

Um aplicativo para edição de textos foi disponibilizado para seus usuários sob a forma de
computação em nuvem. Esses usuários podem se conectar virtualmente, colaborando
mutuamente para a elaboração de documentos. Tais documentos, bem como os respectivos
históricos de versões anteriores, são armazenados na nuvem.

Com referência a essa situação hipotética, julgue o próximo item.

24. (CESPE / PETROBRAS – 2022) A situação descreve um modelo de nuvem denominado PaaS
    (platform as a service).

Comentários:

Opa... aplicativos de edição de texto são exemplos de SaaS (Software as a Service). É como um
software disponibilizado na nuvem – não pode ser PaaS (Platform as a Service) porque ele não
oferece nenhuma plataforma de desenvolvimento, teste, entre outros.

                                                                                    Gabarito: Errado

25. (CESPE / TELEBRÁS - 2021) Uma pequena empresa pode hospedar seu sistema de informações
    em nuvem pública sem qualquer custo, uma vez que toda nuvem pública é gratuita.

Comentários:

Pessoal, nem toda nuvem pública é gratuita. Nuvem pública significa que ela está aberta ao público
em geral gratuitamente ou mediante pagamento.

                                                                                    Gabarito: Errado

26. (CESPE / Petrobrás - 2022) No que se relaciona a elasticidade e escalonamento de computação
    em nuvem, os usuários têm a expectativa de que a nuvem seja capaz de fornecer rapidamente
    recursos em qualquer quantidade e a qualquer momento.

Comentários:

Exato! A elasticidade rápida é a capacidade de um sistema de se adaptar a uma variação na carga
de trabalho quase instantaneamente. Vejam que, teoricamente, os recursos não são ilimitados,
entretanto, para o usuário, é como se fossem, isto é, quanto mais ele precisar, mais a nuvem oferecerá.

                                                                                   Gabarito: Correto


---

27. (CESPE / Petrobrás - 2022) Cloud computing é uma das inovações tecnológicas que mais
    cresceu nos últimos anos, por isso é uma instância direta da computação autônoma, em que os
    sistemas se autogerenciam.

Comentários:

Opa... os sistemas não autogerenciam, os sistemas são administrados por empresas, que – por sua
vez – possuem funcionários que fazem tal gerenciamento.

                                                                              Gabarito: Errado

28. (CESPE / Petrobrás - 2022) Na cloud computing são essenciais o cumprimento de três
    indicadores: disponibilidade, capacidade e desempenho na entrega de soluções e informações.

Comentários:

Disponibilidade, capacidade e desempenho são características essenciais da cloud computing.
Disponibilidade pois os serviços devem sempre estar disponíveis, capacidade pois os serviços
devem suportar as demandas dos usuários e desempenho pois os serviços devem ser eficientes na
entrega de soluções e informações.

                                                                             Gabarito: Correto

29. (CESPE / TELEBRÁS - 2021) Uma nuvem privada permite que a organização controle o seu
    próprio ambiente, incluindo seus dados.

Comentários:

Perfeito! Uma nuvem privada é organizada e controlada pela sua própria entidade. Em suma: A
nuvem privada se encontra em ambiente próprio da entidade dona da rede, não necessariamente
no perímetro físico da empresa, mas protegida por um firewall e administrada pelos funcionários
da corporação.

                                                                             Gabarito: Correto

30. (CESPE / PC-SE – 2021) Uma nuvem pode tanto armazenar arquivos pessoais de um usuário
    quanto hospedar a intranet de uma organização.

Comentários:

Uma nuvem pode armazenar arquivos pessoais de um usuário? Sim! Ela pode hospedar a intranet de
uma organização? Também! Uma intranet baseada em nuvem oferece uma alternativa simples e


---

conveniente à intranet tradicional local. No modelo de nuvem, o provedor hospeda, gerencia e
mantém a intranet sem que ela precise estar hospedada em servidores locais da organização.

                                                                               Gabarito: Correto

31. (CESPE / PC-AL – 2021) A computação na nuvem (cloud computing) possibilita que aplicações
    executadas em servidores isolados sejam também executadas na nuvem (Internet) em um
    ambiente de larga escala e com o uso “elástico” de recursos.

Comentários:

Perfeito! Aplicações executadas em servidores isolados podem ser executadas na nuvem, que tem
escalabilidade e elasticidade de recursos.

                                                                               Gabarito: Correto

32. (CESPE / SEFAZ-CE – 2021) PaaS (Platform as a Service) é o tipo de cloud computing que
    permite a utilização de uma aplicação na Web, como, por exemplo, Google Docs e Office 365.

Comentários:

De acordo com Manoel Veras de Sousa Neto, em Computação em Nuvem: Nova Arquitetura de TI,
o conceito de Paas (Platform as a Service) está vinculado ao uso de ferramentas de
desenvolvimento de software oferecidas por provedores de serviços, onde desenvolvedores criam
as aplicações e as desenvolvem utilizando a internet como meio de acesso.

Ainda segundo o autor, o SaaS (Software as a Service) trata do contexto em que aplicativos de
interesse para uma grande quantidade de clientes passam a ser hospedados na nuvem como uma
alternativa ao processamento local. Os aplicativos são oferecidos como serviços por provedores e
acessados pelos clientes por aplicações, como um navegador. Todo o controle e gerenciamento da
rede, sistemas operacionais, servidores e armazenamento é feito pelo provedor de serviço.

Dito isso, fica claro que não é o PaaS que permite a utilização de uma aplicação na web e, sim, o
SaaS. O PaaS é responsável por oferecer ferramentas de desenvolvimento e o SaaS é o responsável
por hospedar aplicações na web, tais como Google Docs e Office 365.

                                                                               Gabarito: Errado

33. (CESPE / SEFAZ-CE – 2021) Nuvens públicas proveem espaço ilimitado em servidores que
    reúnem as informações de todos os seus usuários.

Comentários:


---

O espaço físico de nuvens públicas não é ilimitado. O Google Drive, por exemplo, fornece planos de
até 30 TB por R$1049,99/Mês.

                                                                                  Gabarito: Errado

34. (CESPE / SEFAZ-CE – 2021) Em se tratando do uso organizacional de nuvens privadas, o
    modelo, a definição e os riscos associados à organização devem permanecer intactos na nuvem,
    pois os seus recursos são provisionados para uso exclusivo da organização interessada,
    compreendendo suas várias unidades de negócios.

Comentários:

No caso de nuvens privadas, a infraestrutura na nuvem é provisionada para uso exclusivo por uma
única organização composta de diversos consumidores (como unidades de negócio). A sua
propriedade, gerenciamento e operação podem ser da organização, de terceiros ou de uma
combinação mista, e pode estar dentro ou fora das instalações da organização.

                                                                                 Gabarito: Correto

35. (CESPE / SEFAZ-CE – 2021) Na computação em nuvem, o serviço medido, ou uso medido,
    permite que o uso de recursos seja monitorado, controlado e relatado, o que fornece
    transparência tanto para o provedor quanto para o consumidor do serviço.

Comentários:

Essa questão trata de uma característica essencial da computação em nuvem chamada Serviços
Mensurados (Serviço Medido ou Uso Medido). De fato, essa característica trata da capacidade de
monitorar, controlar e relatar antecipadamente o uso de recursos, o que realmente fornece
transparência tanto para o provedor quanto para o consumidor de serviço.

                                                                                 Gabarito: Correto

36. (CESPE / SEFAZ-CE – 2021) Em uma nuvem, a característica de os recursos de computação do
    provedor serem agrupados para atender a vários consumidores é chamada de elasticidade.

Comentários:

Essa questão trata de uma característica essencial da computação em nuvem, no entanto não é
sobre a característica de elasticidade e, sim, sobre a característica de agrupamento de recursos. Os
recursos de computação do provedor são agrupados para atender a múltiplos consumidores em
modalidade multi-inquilinos, com recursos físicos e virtuais diferentes dinamicamente atribuídos e
reatribuídos conforme a demanda dos consumidores. A característica de elasticidade trata de como
os recursos são provisionados e liberados elasticamente para rapidamente aumentar ou diminuir
de acordo com a demanda.


---

                                                                                  Gabarito: Errado

37. (CESPE / PM-AL – 2021) Uma característica do ambiente de computação em nuvem é a
    elasticidade rápida, que permite provisionar recursos independentemente da sua localização.

Comentários:

Uma característica do ambiente de computação em nuvem é a elasticidade rápida? Sim. Ela permite
provisionar recursos elasticamente? Sim, recursos podem ser provisionados ou liberados de forma
elástica e rápida pela nuvem. Para o consumidor, os recursos disponíveis para provisionamento
muitas vezes parecem ser ilimitados e podem ser apropriados em qualquer quantidade a qualquer
momento e independentemente da sua localização.

A polêmica: a banca mudou de entendimento no gabarito definitivo sob a justificativa de que a
característica de ser independente da sua localização está relacionada ao agrupamento de recursos
e, não, à elasticidade rápida. Em minha opinião, a independência da localização é uma característica
genérica e básica da computação em nuvem que independe de qualquer outra característica, logo
pode estar sempre associada a qualquer uma das características essenciais. Enfim... eu erraria na
hora da prova e continuo não concordando com o gabarito definitivo.

                                                                                  Gabarito: Errado

38. (CESPE / PM-AL – 2021) Uma característica da computação em nuvem é o formato de acesso à
    rede, que é proporcionado especificamente entre equipamentos servidores, não sendo
    utilizados dispositivos clientes como notebooks e smartphones.

Comentários:

Que ideia maluca! A grande vantagem da computação nuvem é justamente permitir o acesso
ubíquo, conveniente e sob demanda via rede a recursos computacionais por um provedor de serviço
para clientes, que podem acessá-los via desktop, notebooks, smartphones, entre outros.

                                                                                  Gabarito: Errado

Uma agente, a partir do computador de sua casa, necessitava acessar, com segurança, os serviços
de PaaS na nuvem, com criptografia, utilizando a Internet pública como meio de comunicação entre
essas localidades. Para tanto, criou-se uma VPN (Virtual Private Network) da Internet pública, a fim
de estabelecer a conexão entre as localidades e, para prover o sigilo, criptografou-se o referido
tráfego antes de ele entrar na Internet pública.


---

39. (CESPE / PCDF – 2021) A solução descreve corretamente o uso da VPN como meio de prover
    segurança no tráfego, mas torna-se inviável nessa situação, pois uma VPN não pode ser utilizada
    para acesso a serviço do tipo PaaS como descrito.

Comentários:

Nada melhor do que a justificativa da própria banca: “Poderia ser utilizada, pois, em vez de
implementar e manter uma rede privada, hoje muitas instituições criam VPNs em cima da internet
pública. Com uma VPN, o tráfego interdepartamental é enviado por meio da internet pública, e não de
uma rede fisicamente independente. Mas, para prover sigilo, esse tráfego é criptografado antes de
entrar na internet pública. Isso serve para PaaS, SaaS ou IaaS. VPN é uma ferramenta extremamente
poderosa para a segurança das informações pessoais, mas muitos usuários ainda desconhecem o
recurso. O acrônimo, que representa uma “Rede Privada Virtual” (Virtual Private Network), permite o
tráfego de dados de forma segura e também permite o acesso a uma rede interna de uma empresa,
mesmo que o usuário esteja trabalhando em casa, por exemplo”.

Não há limitações na utilização de VPN em relação aos modelos de serviço em nuvem. Logo, é
possível utilizá-la com SaaS, PaaS ou IaaS!

                                                                                 Gabarito: Errado

40. (CESPE / PCDF – 2021) Caso o acesso fosse realizado por meio da VPN para o SaaS, por
    exemplo, para um webmail, os e-mails estariam imunes a vírus, pois, em um tunelamento
    criptográfico, o tráfego é, necessariamente e continuadamente, analisando por antivírus.

Comentários:

Nada melhor do que a justificativa da própria banca: “Não ficam imunes ao vírus, pois, ainda que o
tunelamento seja uma técnica utilizada pela maioria das VPNs (Redes Virtuais Privadas), esse é um


---

processo que basicamente coloca cada pacote de informação enviado dentro de outro pacote, criando
uma espécie de envoltório. Esse encapsulamento apenas é compreendido pelo emissor e pelo receptor,
sendo completamente transparente, uma vez que o empacotamento e o desempacotamento são
realizados na porta de saída, e não no computador. Dependendo do problema tratado, essa técnica é
utilizada com objetivos distintos. Nesse tipo de VPN, não há necessariamente o uso de antivírus. Logo
não seriam imunes”.

Primeiro, VPN não garante imunidade contra vírus; segundo, em um tunelamento criptográfico, o
tráfego não é necessariamente analisado por antivírus.

                                                                                   Gabarito: Errado

41. (CESPE / BANESE – 2021) O provisionamento para aumento de recursos como memória RAM
    e armazenamento é uma característica disponibilizada em um ambiente de PaaS (Plataform as
    a Service).

Comentários:

Opa... essa é uma característica disponibilizada pela IaaS! É claro que o PaaS engloba tudo que o
IaaS oferece (Ex: rede, armazenamento, servidores, virtualização, etc), no entanto o usuário não
manipula/provisiona esse tipo de recurso e, sim, o provedor de nuvem. Lembrando que o PaaS é
responsável pelos recursos de plataforma de desenvolvimento.

                                                                                  Gabarito: Errado

42. (CESPE / BANESE – 2021) Uma solução de software como o Microsoft Office 365, que pode ser
    acessado pela Web, a partir de login e senha em formato de assinatura com pagamentos
    mensais, é denominada SaaS (Software as a Service).

Comentários:

Perfeito! É um exemplo típico de SaaS...

                                                                                  Gabarito: Correto

43. (CESPE / BANESE – 2021) O aumento ou a redução rapidamente na capacidade de recursos
    computacionais como processador sob demanda, é uma característica para serviços de cloud
    computing.

Comentários:

Perfeito! A elasticidade é uma característica típica de serviços de computação em nuvem.


---

                                                                                  Gabarito: Correto

44. (CESPE / SERPRO – 2021) A computação em nuvem pública acessa recursos por meio da
    Internet, usando interface web, com alocação e pagamento por demanda (soluções elásticas);
    no entanto, o fato de ela ser pública não significa que seja livre nem aberta.

Comentários:

Perfeito! Ela não é livre (no sentido de que existe uma licença de uso) e não é aberta (no sentido de
que pode ser exigir autenticação). Agora esse é o tipo de questão que, como o examinador não
especifica o que ele quer dizer com esses atributos, pode resultar em qualquer gabarito.

                                                                                  Gabarito: Correto

45. (CESPE / SERPRO – 2021) A ideia central da computação em nuvem é possibilitar que as
    aplicações que rodam em datacenters isolados também rodem na nuvem (Internet) em um
    ambiente de larga escala e com um uso elástico de recursos.

Comentários:

Perfeito! É essa a ideia mesmo... centros de dados são “transferidos” para um ambiente de internet
de nuvem, que possuem larga escala e elasticidade de recursos.

                                                                                  Gabarito: Correto

46.(CESPE / PM-TO – 2021) Soluções de software que permitem a edição de texto online na
   Internet sem a necessidade de instalar o aplicativo na máquina do usuário, como o Microsoft
   Office 365 e Documentos Google, são exemplos de SaaS (software como serviço). O SaaS é um
   tipo de serviço:

   a) de sistemas operacionais Internet.
   b) de grupos de discussão.
   c) das redes sociais.
   d) de intranet.
   e) da cloud computing.

Comentários:

O SaaS (Software as a Service) é um tipo de serviço da Cloud Computing (Computação em Nuvem).

                                                                                  Gabarito: Letra E


---

47. (CESPE / APEX-BRASIL – 2021) Em uma organização que possui serviços de tecnologia da
    informação em uma nuvem no seu data center privado e em outras duas nuvens públicas, a
    arquitetura para deploy de nuvem é:

   a) comunitária.
   b) privada.
   c) híbrida.
   d) pública.

Comentários:

A junção de nuvem pública e privada é uma nuvem híbrida.

                                                                                 Gabarito: Letra C

48.(CESPE / Polícia Federal – 2021) A PaaS (plataforma como um serviço) contém os componentes
   básicos de IT na nuvem e oferece o mais alto nível de flexibilidade e de controle de
   gerenciamento sobre os recursos de tecnologia da informação no que diz respeito a cloud
   computing.

Comentários:

O nível mais alto de flexibilidade e de controle de gerenciamento sobre os recursos de tecnologia
da informação se dá por meio de um IaaS. Em ordem de flexibilidade e controle de gerenciamento:
IaaS > PaaS > SaaS (Obs: IT = Information Technology).

                                                                                  Gabarito: Errado

49.(CESPE / Polícia Federal – 2021) As desvantagens da cloud computing incluem a inflexibilidade
   relativa ao provisionamento de recursos computacionais: é necessário estabelecê-los no
   momento da contratação e não há possibilidade de ajustes de escala, de acordo com a evolução
   das necessidades, no mesmo contrato.

Comentários:

Opa... as vantagens incluem a flexibilidade e, não, a inflexibilidade relativa ao provisionamento de
recursos computacionais. Não é necessário estabelecê-los no momento da contratação e é possível
ajustar sua escala – essa é uma das maiores vantagens da Cloud Computing.

                                                                                  Gabarito: Errado


---

50. (CESPE / PRF – 2021) Identifica-se Software como Serviço (SaaS) quando um provedor de
    serviços oferece a um ambiente baseado em cloud, no qual os usuários podem construir e
    disponibilizar aplicativos.

Comentários:

A construção e disponibilização de aplicativos – por meio de ferramentas de desenvolvimento – são
características típicas da plataforma como serviço (PaaS) e, não, do software como serviço (SaaS).

                                                                                 Gabarito: Errado

51. (CESPE / Ministério da Economia – 2020) Considere que uma organização faça uso, para
    atividades distintas, de duas infraestruturas de cloud privadas, que sejam separadas
    geograficamente e não permitam a portabilidade de aplicativos entre elas. Nesse caso, a
    organização possui infraestrutura do tipo cloud híbrida.

Comentários:

A infraestrutura de nuvem híbrida é um ambiente de computação que combina dois ou mais tipos
distintos de nuvens, permitindo que os dados e aplicativos sejam compartilhados entre elas. Ora,
se eu tenho duas nuvens privadas, não são tipos distintos, logo não se trata de uma nuvem híbrida.
E mesmo que fossem modelos diferentes, ainda não seriam uma infraestrutura de nuvem híbrida
porque elas não permitem a portabilidade de aplicativos entre elas.

                                                                                 Gabarito: Errado

52. (CESPE / TJ-PA – 2019) Uma infraestrutura computacional pública que se denomina como
    nuvem pública e que atende os conceitos de uma nuvem reconhecidos pelo NIST (National
    Institute of Standards and Technology) caracteriza-se essencialmente por:

   a) ter serviços de banco de dados.
   b) permitir minerar dados com servidores.
   c) apresentar elasticidade rápida.
   d) possuir softwares com multiorganização.
   e) disponibilizar servidores bare metal sob demanda.

Comentários:

O NIST definiu cinco características essenciais. Dentre as opções, a única que apresenta uma dessas
características é a Elasticidade Rápida.

                                                                                 Gabarito: Letra C


---

53. (CESPE / Polícia Federal – 2018) Os gestores de determinado órgão público decidiram adotar a
    computação em nuvem como solução para algumas dificuldades de gerenciamento dos
    recursos de tecnologia da informação. Assim, para cada contexto, análises devem ser realizadas
    a fim de compatibilizar os recursos de gerenciamento e segurança com os modelos técnicos de
    contratação. Para o armazenamento de dados de trabalho dos colaboradores desse órgão
    público, incluindo-se documentos, imagens e planilhas, e para o uso de recursos de rede
    compartilhados, como impressoras e computadores, seria adequado contratar o modelo de
    computação em nuvem denominado infraestrutura como um serviço (IaaS).

Comentários:

(1) Recursos gerenciados pelos modelos de serviço são acumulativos: IaaS é responsável pelo
gerenciamento de rede, armazenamento, servidores e virtualização; PaaS engloba tudo isso, além
do sistema operacional, middlewares e ambientes de execução; e o SaaS engloba tudo isso, além
dos dados e da aplicação em si.

(2) Por outro lado, cada modelo de serviço tem o foco no gerenciamento de alguns recursos
específicos. Como assim? IaaS é responsável por gerenciar a infraestrutura; PaaS é responsável por
gerenciar plataformas de desenvolvimento; e SaaS é responsável por gerenciar a aplicação em si e
seus dados.

Apesar de todos os modelos gerenciarem o armazenamento (storage), o modelo de serviço que se
foca nesse tipo de recurso é o IaaS. E os recursos de rede (networking)? Galera, computadores e
impressoras podem ser conectados em rede, além de poderem ser fornecidos como um serviço
disponível na nuvem para os usuários. Recursos como rede, servidores, computadores – quando
gerenciados pela nuvem – são foco da... Infraestrutura como Serviço (IaaS).

                                                                               Gabarito: Correto

54. (CESPE / PRF – 2018) A computação em nuvem do tipo software as a service (SaaS) possibilita
    que o usuário acesse aplicativos e serviços de qualquer local usando um computador conectado
    à Internet.

Comentários:

Perfeito! Esse é o sentido do SaaS, isto é, disponibilizar uma aplicação ou serviço na nuvem de
forma que esteja acessível por qualquer pessoa conectada à internet de qualquer lugar.

                                                                               Gabarito: Correto

55. (CESPE / PRF – 2018) Assinale a opção correspondente ao conceito de entrega sob demanda de
    poder computacional, armazenamento de banco de dados, aplicações e outros recursos de
    tecnologia da informação por meio de uma plataforma de serviços via Internet.


---

   a) rede privada virtual
   b) extranet
   c) computação em nuvem
   d) computação quântica
   e) zona desmilitarizada, do inglês demilitarized zone (DMZ)

Comentários:

Entrega sob demanda de poder computacional, armazenamento de dados, aplicações e outros
recursos de tecnologia da informação por meio de uma plataforma de serviços via internet é a
definição impecável de computação em nuvem.

                                                                                 Gabarito: Letra C

56. (CESPE / SEFAZ-RS – 2018) Considerando que uma empresa tenha contratado serviços em
    nuvem, assinale a opção correta.

   a) Os serviços contratados podem ser desligados em horários predeterminados, para economia
   de custos.
   b) Os serviços contratados podem ser acessados apenas de computadores localizados dentro da
   empresa.
   c) A empresa terá de alterar o contrato de fornecimento de espaço em disco caso necessite de
   mais espaço de armazenamento.
   d) A empresa deverá encomendar novas máquinas de servidores para o trabalho em nuvem.
   e) A empresa terá de alterar o contrato de fornecimento de serviço de processamento caso
   necessite de maior capacidade de processamento.

Comentários:

(a) Correto. A maioria das pessoas imagina que esse item está se referindo à empresa fornecedora
do serviço de nuvem, mas ele trata da empresa contratante. Se a minha empresa contrata um
serviço, mas eu nunca o utilizo de madrugada, eu posso desligar esse serviço durante a madrugada
para economizar custos; (b) Errado, uma das principais vantagens dos serviço de nuvem é o amplo
acesso aos serviços através da internet; (c) Errado, o serviço é contratado sob demanda, logo não é
necessário alterar o contrato porque já é previsto no contrato a elasticidade dos recursos; (d)
Errado, quem fornece os servidores é a empresa contratada; (e) Errado, mesma justificativa do (c).

                                                                                 Gabarito: Letra A

57. (CESPE / BNB – 2018) PaaS (plataforma como serviço) difere de SaaS (software como serviço)
    em apenas dois componentes básicos na nuvem: no sistema operacional e no sistema de arquivo
    distribuído.


---

Comentários:

Em apenas dois componentes básicos? Elas diferem em dezenas de características e componentes!

                                                                               Gabarito: Errado

58. (CESPE / BNB – 2018) Nuvem privada e nuvem híbrida são modelos de serviços ofertados por
    provedores de nuvem.

Comentários:

Essa é uma classificação quanto ao modelo de implantação. Modelos de Serviço é uma classificação
em IaaS, PaaS e SaaS.

                                                                               Gabarito: Errado

59. (CESPE / BNB – 2018) IaaS (infraestrutura como serviço) é um modelo de implementação de
    computação em nuvem no qual a regra fundamental é que as aplicações sejam virtualizadas em
    contêineres.

Comentários:

Primeiro, trata-se de um modelo de serviço; segundo, aplicações virtualizadas em contêineres é
uma característica do PaaS. Diego, o que isso? Grosso modo, é um ambiente independente em que
são disponibilizados diversos recursos de plataforma (ferramentas, bibliotecas, sistemas
operacionais, entre outros) para que uma aplicação possa ser executada.

                                                                               Gabarito: Errado

60. (CESPE / BNB – 2018) Na computação em nuvem, elasticidade é a capacidade de um sistema
    de se adaptar a uma variação na carga de trabalho quase instantaneamente e de forma
    automática.

Comentários:

Perfeito! É uma forma de um sistema sempre se adequar a variações de volume de trabalho de
forma automática. Precisa de mais espaço de armazenamento? Precisa de menos? Precisa de mais
processamento? Precisa de menos memória? Tudo isso disponibilizado de forma instantânea e
automática.

                                                                              Gabarito: Correto


---

61. (CESPE / BNB – 2018) Em função da necessidade de acionamento de fornecedores, a
    computação em nuvem demora mais que a computação tradicional para colocar novas
    aplicações em execução.

Comentários:

Que isso? Jamaaaais! A computação em nuvem é muuuuuito mais ágil que a computação tradicional
para colocar novas aplicações em execução. Como todos os recursos são alocados e gerenciados
em tempo real, há uma massiva redução no tempo dispendido. Na computação tradicional, tudo
deve ser planejado e configurado passo a passo para colocar uma aplicação em execução. Além
disso, não é necessário o acionamento de fornecedores – todos os recursos são administrados em
tempo real automaticamente.

                                                                                    Gabarito: Errado

62. (CESPE / Polícia Federal – 2018) Um estudo técnico de viabilidade e um projeto de re-hosting
    em computação em nuvem IaaS é indicado para as aplicações legadas do órgão que tenham sido
    originalmente desenvolvidas para mainframe.

Comentários:

O que é re-hosting? Host é hospedar! Re-hosting é re-hospedar! Trata-se da técnica de migração de
uma aplicação criada inicialmente para ser hospedada em uma infraestrutura proprietária baseada
em mainframe para hospedá-la na nuvem. Galera, o mundo foi mudando, os recursos de nuvem
foram ficando mais viáveis financeiramente para empresas e órgãos de tal forma que eles têm feito
estudos para verificar a viabilidade de migrar aplicações de suas infraestruturas para a nuvem (IaaS).

Entenderam agora o que a questão quis dizer? PF é PF! Vejam o nível dessa questão... apesar de
simples, possui uma redação que mexe com o psicológico dos alunos.

                                                                                   Gabarito: Correto

63. (CESPE / Polícia Federal – 2018) O modelo PaaS (platform as a service) oferece menos recursos
    e funcionalidades integradas de segurança, necessitando que o cliente projete e gerencie os
    sistemas operacionais, aplicativos e dados.

Comentários:

PaaS é um modelo de serviço que oferece recursos de rede, armazenamento, servidores,
virtualização, sistema operacional, middlewares, ambiente de execução e – também – segurança.
De fato, o cliente deve gerenciar aplicativos e dados, mas sistema operacional é de
responsabilidade da nuvem.


---

                                                                               Gabarito: Errado

64.(CESPE / CBM-AL – 2018) A computação em nuvem é utilizada para, de forma segura,
   armazenar arquivos em uma região criptografada do disco rígido do usuário, que só terá acesso
   liberado a essa região após autenticação de uma assinatura eletrônica via Internet.

Comentários:

Como é? Que viagem! Em princípio, nuvem não tem nenhuma relação com armazenamento
criptografado de dados. Além disso, se é computação em nuvem, não armazena no disco rígido –
armazena na nuvem.

                                                                               Gabarito: Errado

65. (CESPE / ANVISA – 2018) Ao contratar e utilizar um serviço de computação em nuvem para
    armazenar seus dados, o usuário perde a governança sobre esses dados, por não visualizar como
    eles são submetidos aos processos de becape, armazenamento e controle de segurança.

Comentários:

O termo “governança” foi muito mal utilizado, porque geralmente se trata de um escopo
estratégico de processos e, não, operacional como becape, armazenamento e controle de
segurança. De todo modo, a responsabilidade sobre a administração passa para o provedor de
nuvem. Por exemplo: quando você envia dados para o Google Drive, você não tem controle sobre
as rotinas de backup dos seus dados nem como eles são armazenados ou como é seu controle de
segurança. Ignorando esse deslize, a questão está correta (mas caberia recurso).

                                                                               Gabarito: Correto

66.      (CESPE / Polícia Federal – 2018) Conceitualmente, a computação em nuvem pode ser
      implementada por meio da LAN (Local Area Network) interna de uma organização.

Comentários:

Essa questão foi bastante polêmica e eu achei sua redação infeliz. É evidente que a computação em
nuvem teve como premissa ser implementada na WAN (Internet). De fato, não faz muito sentido
você implementar uma nuvem em uma LAN. No entanto, é impossível implementar uma nuvem em
uma LAN? Não! Alguns alunos focam bastante no “conceitualmente”, mas o meu problema com a
questão é o “pode”. Enfim... polêmica!

                                                                               Gabarito: Errado


---

67. (CESPE / BNB – 2018) Em um serviço do tipo IaaS, o provedor deve fornecer recursos com
    flexibilidade, efetividade, escalabilidade, elasticidade e segurança.

Comentários:

Perfeito! O provedor de computação em nuvem deve fornecer recursos com flexibilidade,
efetividade, escalabilidade, elasticidade e segurança. Isso não significa que o software que utiliza a
nuvem seja flexível, efetivo, escalável, elástico e seguro. Em outras palavras, o provedor deve
fornecer, mas isso não significa que a arquitetura do sistema suporte essas características.

                                                                                   Gabarito: Correto

68. (CESPE / STM – 2018) O fato de um sistema utilizar computação em nuvem não é suficiente
   para que ele seja considerado escalável.

Comentários:

Professor, você não disse que a computação em nuvem é escalável? Sim, eu disse que o provedor de
computação em nuvem deve fornecer recursos com escalabilidade! O sistema que utiliza
computação em nuvem tem uma arquitetura independente do fornecedor de nuvem, logo o
simples fato de utilizar computação em nuvem não torna um sistema escalável. Vamos fazer uma
pequena analogia para entender a escalabilidade:

Se eu construo um prédio prevendo que ele tenha dois andares, mas sabendo que futuramente eu
posso querer adicionar mais três andares, eu preciso construir uma base arquitetural que permita
futuras adições (Ex: fazer colunas maiores, fazer um aterramento mais profundo, entre outros). Por
outro lado, se eu construo um prédio com uma base arquitetural para apenas dois andares sem
previsão para futuras adições, ele não será escalável. Qual é o ponto aqui? Bem...

O ponto é que o prédio preparado para futuros novos andares é considerado escalável, já o prédio
não preparado para futuros novos andares não é considerado escalável. Um sistema de software
funciona da mesma maneira: eu posso construí-lo já preparando para futuras evoluções ou não – se
eu não o preparo de modo que ele seja escalável, não é suficiente utilizar computação em nuvem
para que ele seja considerável escalável, porque um é completamente independente do outro.

                                                                                   Gabarito: Correto

69. (CESPE / BNB – 2018) O simples fato de um sistema rodar na nuvem não lhe garante o
   atributo de ser escalável, já que será considerado escalável o sistema que tiver sido concebido
   de maneira a ser capaz de alocar e liberar dinamicamente os recursos que a computação em
   nuvem oferecer.

Comentários:


---

Perfeito! Um software rodando em uma nuvem não é necessariamente escalável porque a
escalabilidade não uma característica intrínseca da computação em nuvem e, sim, do sistema de
software em si.

                                                                               Gabarito: Correto

70. (CESPE / Polícia Federal – 2018) Atualmente, as empresas de comércio na Internet podem
    disponibilizar suas aplicações na nuvem, como, por exemplo, na plataforma Azure da Microsoft;
    da mesma forma, as organizações podem fazer migrar suas aplicações de email para a nuvem.
    Essas nuvens oferecem ambientes de computação e armazenamento escaláveis, mas, por
    questões afetas à segurança, impedem o acesso implícito às suas redes privativas de alto
    desempenho.

Comentários:

Questão retirada literalmente do livro de Redes de Computadores do Kurose e Ross. Azure é uma
plataforma de computação na nuvem da Microsoft, que disponibiliza serviços para ajudar a
organização a enfrentar seus desafios de negócios – é a liberdade de criar, gerenciar e implantar
aplicativos em uma enorme rede global usando suas ferramentas estruturas favoritas. Essas nuvens
realmente oferecem ambientes escaláveis de computação e armazenamento, assim como
permitem o acesso implícito às redes privativas de alto desempenho.

E o que seria uma rede privativa de alto desempenho? Grandes provedores de serviços online (Ex:
Microsoft, Google, Amazon) possuem Centros de Dados (Data Centers) espalhados por todo
planeta. Eles precisam se comunicar de uma maneira extremamente rápida para oferecer o melhor
serviço possível (você faz buscas ou acessa seu e-mail quase que instantaneamente, não é?). Para
atingir essa velocidade, esses provedores evitam ao máximo utilizar a infraestrutura da internet
para comunicação, porque essa infraestrutura é compartilhada por todos nós – usuários.

Eles, portanto, possuem uma infraestrutura própria bastante próxima dos provedores de serviços
principais que formam a internet (backbone). Essa infraestrutura própria que se comunica
diretamente com provedores de serviço é chamada de rede privativa de alto desempenho. Por que?
Porque ela permite, por exemplo, que o Google ofereça resultados de busca e acesso a e-mail quase
instantaneamente, como se seus centros de dados estivessem rodando dentro do computador de
cada usuário. Logo, essas nuvens oferecem – sim – acesso implícito a redes de alto desempenho.

                                                                               Gabarito: Errado

71. (CESPE / Polícia Federal – 2018) Se, para enviar e receber emails sem precisar gerenciar
    recursos adicionais voltados ao software de email e sem precisar manter os servidores e
    sistemas operacionais nos quais o software de email estiver sendo executado, os gestores
    optarem por um serviço de email em nuvem embasado em webmail, eles deverão contratar,


---

   para esse serviço, um modelo de computação em nuvem do tipo plataforma como um serviço
   (PaaS).

Comentários:

Se você não precisa gerenciar recursos adicionais voltados ao software de e-mail, não precisa
manter servidores, não precisa manter sistemas operacionais nos quais o software de e-mail será
executado, isto é, você utilizar um webmail, você deverá contratar um modelo de computação em
nuvem do tipo software como serviço (SaaS) e, não, PaaS. Um webmail nada mais é do que uma
aplicação rodando em um servidor web que acessa um servidor de e-mail. Logo, você está
utilizando uma versão “virtualizada” de um software que está rodando na nuvem – sem precisar
instalar nada em seu computador.

                                                                               Gabarito: Errado

72. (CESPE / Polícia Federal – 2018) As nuvens do tipo híbridas são implementadas por
    organizações que possuem interesses em comum, como na área de segurança, por exemplo.

Comentários:

Na verdade, a questão se refere ao conceito de nuvem comunitária e, não, híbrida.

                                                                               Gabarito: Errado

73. (CESPE / Polícia Federal – 2018) Entre os modelos de computação em nuvem, o PaaS
    (Plataforma como um serviço) é o mais indicado para o desenvolvimento de soluções
    informatizadas.

Comentários:

Perfeito! PaaS é responsável por fornecer sistema operacional, linguagens de programação,
ambientes de desenvolvimento e execução, entre outros – tudo isso facilita o desenvolvimento ou
implementação de soluções informatizadas.

                                                                              Gabarito: Correto

74. (CESPE / EMAP – 2018) O uso do becape em nuvem para sistemas de armazenamento de
    imagens tem como vantagem a salvaguarda das cópias em ambientes fisicamente seguros e
    geograficamente distantes.

Comentários:


---

O becape em nuvem faz cópias em ambientes seguros, ou seja, em um Data Center que cumpre
diversos protocolos de segurança; além disso, é recomendável que seja armazenado em centros de
dados geograficamente distantes para aumentar mais ainda a segurança. Imaginem que becapes
sejam armazenados em um único centro de dados na Síria e que ela entre em guerra com outro
país: se explodirem o centro de dados, você perdeu seu becape em nuvem. Logo, é recomendável
armazenar becapes em locais geograficamente distantes.

                                                                                 Gabarito: Correto

75. (CESPE / TCE-PB – 2017) Na computação em nuvem (cloud computing), que mudou a visão de
    pessoas físicas e jurídicas acerca de recursos de tecnologia da informação, o modelo que oferece
    um ambiente sob demanda para desenvolvimento, teste e gerenciamento de aplicações de
    software é denominado:

   a) infraestrutura como serviço (IaaS).
   b) big data como serviço (BDaaS).
   c) software como serviço (SaaS).
   d) plataforma como serviço (PaaS).
   e) dados como serviço (DaaS).

Comentários:

Ambiente de desenvolvimento, teste e gerenciamento de aplicações de software? Um monte de
palavras-chave que vocês devem reconhecer imediatamente e associar à Plataforma como Serviço
(PaaS).

                                                                                 Gabarito: Letra D

76. (CESPE / PC-PE – 2016) Um usuário instalou e configurou, em uma estação de trabalho do órgão
    onde atua, um aplicativo de disco virtual, que permite armazenamento de dados em nuvem
    (Cloud storage), e sincronizou uma pasta que continha apenas um arquivo nomeado como
    xyz.doc. Em seguida, ele inseriu três arquivos nessa pasta e modificou o conteúdo do arquivo
    xyz.doc. Posteriormente, esse usuário configurou, em um computador na sua residência, o
    mesmo aplicativo com a mesma conta utilizada no seu trabalho, mas não realizou quaisquer
    edições ou inserção de arquivos na referida pasta.

   Com base nas informações apresentadas nessa situação hipotética, é correto afirmar que, no
   computador na residência do usuário, a pasta utilizada para sincronizar os dados conterá:

   a) quatro arquivos, porém o arquivo xyz.doc não conterá as modificações realizadas no órgão,
   uma vez que cloud storage sincroniza inserções, e não atualizações.


---

   b) somente o arquivo xyz.doc sem as modificações realizadas no órgão, uma vez que cloud
   storage sincroniza apenas arquivos que já existiam antes da instalação e da configuração do
   programa.

   c) somente o arquivo xyz.doc com as modificações realizadas no órgão, uma vez que cloud
   storage sincroniza apenas arquivos que já existiam antes da instalação e da configuração do
   programa com suas devidas atualizações.

   d) quatro arquivos, incluindo o arquivo xyz.doc com as modificações realizadas no órgão em que
   o usuário atua.

   e) três arquivos, uma vez que cloud storage sincroniza apenas arquivos inseridos após a
   instalação e a configuração do programa.

Comentários:

Galera, vamos dar um nome para esse usuário para contextualizar – vamos chamá-lo de Maguila. O
Maguila tem uma conta em um aplicativo de armazenamento em nuvem e o utiliza na sua casa. Ao
ir para seu trabalho, Maguila fez o download desse mesmo aplicativo, instalou em sua máquina e
fez o login em sua conta. A partir desse momento, tudo que estava armazenado no aplicativo será
sincronizado para a máquina do trabalho, inclusive o arquivo xyz.doc.

O enunciado diz que, em seguida, Maguila inseriu três arquivos em uma pasta do disco virtual criado
pelo aplicativo em sua máquina do trabalho e ainda fez uma modificação no arquivo xyz.doc. A
partir daí, ele não realizou quaisquer edições ou inserção de arquivos na referida pasta. Logo, esses
arquivos da máquina local do trabalho foram sincronizados e enviados para a nuvem. Quando ele
acessar o seu computador de casa, o aplicativo sincronizará com a nuvem e ele terá o arquivo
xyz.doc modificado, além dos três arquivos novos.

                                                                                  Gabarito: Letra D

77. (CESPE / INSS – 2016) A ferramenta OneDrive do Windows 10 é destinada à navegação em
    páginas web por meio de um browser interativo.

Comentários:

Destinada à navegação? Não, ele é um serviço de armazenamento em nuvem da Microsoft.

                                                                                   Gabarito: Errado

78. (CESPE / MEC – 2016) Para que se utilizem recursos da computação em nuvem, não é necessário
    que haja conexão com a Internet, já que todo o processamento é realizado no próprio
    computador do usuário.


---

Comentários:

Opa... necessidade básica e fundamental da computação em nuvem é o acesso à internet.

                                                                                  Gabarito: Errado

79. (CESPE / TRE-MT – 2015) Serviços de cloud storage (armazenagem na nuvem):

   a) aumentam a capacidade de processamento de computadores remotamente.
   b) aumentam a capacidade de memória RAM de computadores remotamente.
   c) suportam o aumento da capacidade de processamento e armazenamento remotamente.
   d) suportam o aumento da capacidade dos recursos da rede de computadores localmente.
   e) suportam cópia de segurança remota de arquivos.

Comentários:

Nenhum desses itens fazem sentido porque a infraestrutura de armazenamento em nuvem é de
responsabilidade do provedor do serviço, exceto o último porque ele realmente suporta cópias de
segurança remota de arquivos, isto é, ele faz um backup dos arquivos salvos no disco virtual situado
em servidores da nuvem de armazenamento. Observação: alguns alunos já me perguntaram
porque o terceiro item está incorreto. Galera, o Cloud Storage tem elasticidade apenas de
armazenamento e, não, de processamento.

                                                                                  Gabarito: Letra E

80.(CESPE / TELEBRAS – 2015) As tecnologias envolvidas na computação na nuvem não estão
   totalmente consolidadas, sendo ainda passíveis de transformações ao longo dos anos.

Comentários:

Essa questão é péssima! Nenhuma tecnologia no mundo é totalmente consolidada, então ela é
realmente passível de transformações ao longo dos anos.

                                                                                 Gabarito: Correto

81. (CESPE / STJ – 2015) Embora seja uma tecnologia que prometa resolver vários problemas
    relacionados à prestação de serviços de tecnologia da informação e ao armazenamento de
    dados, a computação em nuvem, atualmente, não suporta o processamento de um grande
    volume de dados.

Comentários:


---

A computação em nuvem suporta o armazenamento de dados massivo com alta disponibilidade,
logo suporta o processamento de um grande volume de dados.

                                                                                    Gabarito: Errado

82. (CESPE / MEC – 2015) A computação em nuvem fornece apenas serviços para armazenamento
    de dados.

Comentários:

A computação em nuvem fornece uma infinidade de serviços além do armazenamento em nuvem:
infraestrutura, plataforma, desenvolvimento, planilhas, slides, documentos, etc.

                                                                                    Gabarito: Errado

83. (CESPE / TELEBRAS – 2015) O SAAS, modelo de uso da computação em nuvem em que um
    aplicativo é acessado, via Internet, em um sítio diferente daquele do cliente, apresenta como
    vantagem para o cliente a não exigência de licença de uso.

Comentários:

SaaS é realmente um modelo de serviço em que um aplicativo é acessado via internet em um sítio
diferente daquele do cliente. No entanto, sendo rigoroso, há exigência de licença de uso – o que
não há é o pagamento pela licença. Como assim, Diego? Quando você utiliza o Google Drive, por
exemplo, existe uma licença de uso de serviço, porém ela é livre de royalties, o que significa que não
há taxas relacionadas a ela. Em outras palavras, você não precisa pagar para usar o Google Drive!
No entanto, o examinador não teve esse rigor e manteve o gabarito como correto.

                                                                                   Gabarito: Correto

84.(CESPE / TELEBRAS – 2015) O modelo de HAAS disponibiliza aplicações aos clientes, assim
   como ocorre no modelo SAAS.

Comentários:

O HaaS (Hardware as a Service) é um tipo de classificação que não é reconhecido pelo NIST, mas
que fornece equipamentos de hardware como um serviço.

                                                                                    Gabarito: Errado

85. (CESPE / TELEBRAS – 2015) Na computação na nuvem, IaaS (infrastructure as a service) refere-
    se a um modelo de serviço em que o provedor oferece ao usuário de forma transparente, uma
    infraestrutura tanto de processamento quanto de armazenamento.


---

Comentários:

Perfeito! Ela vai cuidar de toda a infraestrutura de processamento e armazenamento. Professor, o
que seria essa forma transparente? Isso significa que o usuário sequer se preocupará com esse tipo
de gerenciamento, que será feito pela empresa fornecedora do serviço de computação em nuvem.

                                                                                Gabarito: Correto

86. (CESPE / TELEBRAS – 2015) Os possíveis benefícios relacionados ao uso da computação em
   nuvem nas organizações incluem a economia de energia elétrica.

Comentários:

Perfeito! Se você não precisa mais manter imensos e custosos servidores no Data Center de uma
empresa junto com vários aparelhos de ar condicionado para manter a temperatura baixa, você
acaba economizando muita energia!

                                                                                Gabarito: Correto

87. (CESPE / STJ – 2015) O que diferencia uma nuvem pública de uma nuvem privada é o fato de
    aquela ser disponibilizada gratuitamente para uso e esta ser disponibilizada sob o modelo pay-
    per-usage (pague pelo uso).

Comentários:

Não se pode confundir público com gratuito! A nuvem pública é pública porque está disponível para
qualquer pessoa – ela pode ser paga ou gratuita. Ademais, ela é disponibilizada sob o modelo pay-
per-usage.

                                                                                 Gabarito: Errado

88. (CESPE / TCE-RN – 2015) A computação em nuvem é constituída de várias tecnologias e
   formada por um conjunto de servidores físicos e virtuais interligados em rede.

Comentários:

Ela é realmente constituída de várias tecnologias e é formada por um conjunto de servidores físicos
e virtuais em rede localizados em um centro de dados.

                                                                                Gabarito: Correto


---

89. (CESPE / Polícia Federal – 2014) Entre as desvantagens da computação em nuvem está o
   fato de as aplicações terem de ser executadas diretamente na nuvem, não sendo permitido, por
   exemplo, que uma aplicação instalada em um computador pessoal seja executada.

Comentários:

Galera, vamos pensar no Dropbox! Você pode acessá-lo por meio de um navegador web sem
consumir recursos do computador do usuário, mas você também pode fazer o download de um
aplicativo do Dropbox e instalá-lo localmente em seu computador.

                                                                                  Gabarito: Errado

90.(CESPE / Polícia Federal – 2014) Na computação em nuvem, diversos computadores são
   interligados para que trabalhem de modo colaborativo, inclusive aqueles que possuam sistemas
   operacionais diferentes.

Comentários:

A computação em nuvem é multiplataforma e permite o trabalho colaborativo dos usuários.

                                                                                 Gabarito: Correto

91. (CESPE / ICMBio – 2014) A computação na nuvem permite ao usuário alocar recursos de forma
    dinâmica e em tempo real, o que possibilita o ajuste entre a necessidade e os recursos.

Comentários:

Perfeito, item impecável – trata-se da elasticidade rápida, isto é, a capacidade de um sistema de se
adaptar a uma variação na carga de trabalho quase instantaneamente – de forma automática e
transparente.

                                                                                 Gabarito: Correto

92. (CESPE / ICMBio – 2014) A computação em nuvem é uma forma atual e segura de armazenar
    dados em servidores remotos que não dependem da Internet para se comunicar.

Comentários:

Opa... necessidade básica e fundamental da computação em nuvem é o acesso à internet.

                                                                                  Gabarito: Errado


---

93. (CESPE / TCDF – 2014) Embora a atual arquitetura de nuvem possua grande capacidade de
    armazenamento, os dados gerados por redes sociais e por mecanismos de busca não podem ser
    armazenados e gerenciados em nuvem, devido ao fato de eles serem produzidos, diariamente,
    em quantidade que extrapola a capacidade de armazenamento da referida arquitetura.

Comentários:

Pessoal, lembrem-se da elasticidade rápida. A computação em nuvem permite escalar para cima
ou para baixo de acordo com as demandas do cliente, portanto é claro que podem ser
armazenados e gerenciados em nuvem.

                                                                                   Gabarito: Errado

94.(CESPE / Câmara dos Deputados – 2014) O armazenamento de arquivos no modelo de
   computação em nuvem (cloud computing) é um recurso moderno que permite ao usuário
   acessar conteúdos diversos a partir de qualquer computador com acesso à Internet.

Comentários:

Perfeito! O armazenamento em nuvem permite ao usuário armazenar dados na nuvem e acessá-lo
a partir de qualquer computador que tenha acesso à internet.

                                                                                  Gabarito: Correto

95. (CESPE / SUFRAMA – 2014) Na hierarquia da computação em nuvem, o nível mais baixo é o
    PaaS (Platform-as-a-Service). Nesse nível, é disponibilizado ao usuário somente a estrutura de
    hardware, a qual inclui o processador, a memória, a energia, a refrigeração e a rede; ao passo
    que a estrutura de software, que inclui o sistema operacional, os servidores de banco de dados
    e os servidores web, fica a cargo do próprio usuário.

Comentários:

Opa, o nível mais baixo que disponibiliza ao usuário a estrutura de hardware é o IaaS (Infrastructure
as a Service). Já a estrutura de software – que inclui o sistema operacional, servidores de banco de
dados e servidores web – fica a cargo do PaaS (Platform as a Service).

                                                                                   Gabarito: Errado

96. (CESPE / MDIC – 2014) Na computação em nuvem, é possível acessar dados armazenados
   em diversos servidores de arquivos localizados em diferentes locais do mundo, contudo, a
   plataforma utilizada para o acesso deve ser idêntica à dos servidores da nuvem.

Comentários:


---

O armazenamento de dados em nuvem possibilita que um usuário acesse os dados armazenados
de qualquer lugar, desde que seu computador esteja conectado à Internet, não havendo
necessidade de os dados serem salvos no computador local. Não é necessário ter uma plataforma
idêntica à dos serviços de nuvem, uma vez que a computação em nuvem é multiplataforma.

                                                                               Gabarito: Errado

97. (CESPE / ANTAQ – 2014) No modelo SaaS (software-as-a-service), as aplicações estão
    disponíveis como serviços pelos provedores e podem ser acessadas pelos clientes por meio de
    aplicações, como, por exemplo, um browser. Todo controle e gerenciamento da infraestrutura
    de rede, de sistemas operacionais, de servidores e de armazenamento são feitos pelo provedor
    do serviço.

Comentários:

Perfeito! Quando você acessa o Google Drive, você não está ligando para a infraestrutura que
suporta essa aplicação, nem para o sistema operacional instalado no servidor ou em que tipo de
memória ele está armazenado – todo esse gerenciamento é de responsabilidade do fornecedor do
serviço.

                                                                              Gabarito: Correto

98.    (CESPE / FUB – 2014) O Google Drive é uma ferramenta que possibilita a criação e edição
   de documentos, planilhas e apresentações.

Comentários:

O Google Drive realmente permite a criação de Documentos (Google Docs), Planilhas (Google
Sheets) e Apresentações (Google Slides).

                                                                              Gabarito: Correto

99.   (CESPE / SERPRO – 2013) Segundo o NIST (National Institute of Standards and
   Technology), IaaS, PaaS, SaaS e UDP são modelos de serviço oferecidos pela computação em
   nuvem.

Comentários:

UDP? UDP é um protocolo da camada de transporte do Modelo OSI! Não se trata de um modelo de
serviço de computação em nuvem.

                                                                               Gabarito: Errado


---

100. (CESPE / SERPRO – 2013) Segundo o NIST, os modelos de implantação definidos para a
   computação em nuvem são: público, privado, comunitário e híbrido.

Comentários:

Perfeito! Os modelos de implantação realmente são público, privado, comunitário e híbrido.

                                                                                  Gabarito: Correto

101. (CESPE / SERPRO – 2013) A arquitetura de computação na nuvem tem um componente
   denominado infraestrutura como serviço, que provê todas as linguagens de banco de dados para
   o usuário do serviço.

Comentários:

A Infraestrutura como Serviço é um modelo de serviço e, não, um componente; além disso,
linguagens de banco de dados são linguagens como outra qualquer, acessíveis para qualquer um
independente de serviços de nuvem.

                                                                                   Gabarito: Errado

102. (CESPE / ANTT – 2013) Os modelos de implementação para computação em nuvem podem
   ser classificados em público, privado, comunitário e restrito.

Comentários:

Na verdade, eles podem ser classificados em pública, privada, comunitária e híbrida e, não, restrita.

                                                                                   Gabarito: Errado

103. (CESPE / ANTT – 2013) IaaS, PaaS e SaaS são modelos de serviço em nuvem.

Comentários:

Perfeito! Uma das classificações de nuvem é em relação ao seu modelo de serviço, que se divide em
IaaS, PaaS e SaaS.

                                                                                  Gabarito: Correto

104. (CESPE / ANTT – 2013) Os serviços de nuvem permitem que o usuário armazene seus
   arquivos pessoais, como fotos, músicas e vídeos, gratuitamente na Internet.


---

Comentários:

Perfeito! Esse é um dos serviços fornecidos pela computação em nuvem – você pode armazenar
seus arquivos pessoais e fazer um backup gratuitamente na internet. Claro que há um limite de
armazenamento gratuito em que, para além dele, deixa de ser gratuito.

                                                                               Gabarito: Correto

105. (CESPE / STF – 2013) Na infraestrutura como serviço (IaaS), os provedores podem oferecer
   infraestrutura física ou virtualizada aos clientes, a depender da situação.

Comentários:

Questão um pouco complexa! Galera, em regra, IaaS oferece infraestrutura virtualizada aos
clientes, isto é, você tem acesso à processamento, memória, armazenamento virtuais. No entanto,
é possível também oferecer infraestrutura física, isto é, você leva os seus próprios equipamentos
para o ambiente físico de um Data Center de outra fornecedor de IaaS, que aloja fisicamente seus
equipamentos oferecendo alguns outros recursos como espaço, energia, refrigeração, segurança,
entre outros.

                                                                               Gabarito: Correto

106. (CESPE / MPOG – 2013) Um dos cenários disponíveis para computação em nuvem é o SaaS
   (Software as a Service), cujos serviços dizem respeito a aplicações completas oferecidas aos
   usuários. Embora não seja instalado localmente na infraestrutura do cliente, o SaaS é utilizado
   pela web, podendo ser pago pelo tempo de uso ou volume, de acordo com a demanda.

Comentários:

Essa questão está tão perfeita que poderia ser uma definição de SaaS!

                                                                               Gabarito: Correto


---

                       QUESTÕES COMENTADAS – FCC
107. (FCC / CLDF – 2018) Na adoção dos recursos de computação na nuvem o Analista de
   Sistemas selecionou o modelo IaaS que disponibiliza, dentre outros recursos, o serviço de:

   a) armazenamento de Backup.
   b) gerenciamento de banco de dados.
   c) provedor de e-mail.
   d) edição de documento.
   e) hospedagem de site.

Comentários:

(a) Correto, esse é um recurso do IaaS; (b) Errado, esse é um recurso do PaaS; (c) Errado, esse é um
recurso do SaaS; (d) Errado, esse é um recurso do SaaS; Errado, esse é um recurso de PaaS ou SaaS.

                                                                                 Gabarito: Letra A

108. (FCC / TRT-SP – 2018) Ao pesquisar sobre cloud storage, um Técnico verificou que há
   diferentes tipos de armazenamento em nuvem, dependendo de como o storage é feito, dentre
   os quais estão:

   I. Voltada para pessoas físicas, esta nuvem é composta por sites que disponibilizam um pequeno
   espaço de armazenamento gratuitamente e oferecem planos para expandir a capacidade. Ideal
   para quem quer testar o serviço de cloud storage ou possui um pequeno volume de dados e não
   necessita de um alto nível de segurança e desempenho.

   II. Dividida entre clientes com negócios em comum, que rateiam os custos de utilização e
   manutenção, esta nuvem pode ser hospedada e gerenciada dentro das empresas ou, então,
   terceirizada.

   III. Esta nuvem é projetada para uso exclusivo de uma única empresa, nas dependências da qual
   todo o hardware (storages e servidores) fica alocado. A empresa possui controle total da
   implementação das aplicações na nuvem.

   Os tipos de I, II e III são, correta e respectivamente,

   a) FaaS, SaaS e IaaS.
   b) nuvem pública, comunitária e privada.
   c) IaaS, CaaS e SaaS.
   d) nuvem gratuita, híbrida e corporativa.
   e) IaaS, EaaS e PaaS.


---

Comentários:

(I) Dentre as opções apresentadas, essa pode ser uma nuvem pública ou uma nuvem gratuita; (II)
Essa opção necessariamente é uma nuvem comunitária; (III) Essa opção necessariamente é uma
nuvem privada. Logo, trata-se de nuvem pública, nuvem comunitária e nuvem privada.

                                                                              Gabarito: Letra B

109. (FCC / TRT-PE – 2018) Um Analista utiliza um conjunto de aplicativos de escritório (Google
   Docs) que não estão instalados em seu computador, mas em servidores espalhados em pontos
   diversos da internet. Além de acessar os aplicativos, guarda também os documentos produzidos
   por meio deles nesses servidores, de forma a poder acessá-los a partir de qualquer computador
   com acesso à internet. O Analista utiliza um tipo de computação em nuvem conhecido como:

   a) Development as a Service.
   b) Software as a Service.
   c) Plataform as a Service.
   d) Infrastructure as a Service.
   e) Communication as a Service.

Comentários:

Conjunto de aplicativos que não estão instalados em seu computador? Aplicativos instalados em
servidores espalhados em pontos diversos da internet? Permite acessar os aplicativos e guardar
documentos nesses servidores? Pode acessá-los a partir de qualquer computador com acesso à
internet? Tudo nos remete a SaaS (Software as a Service).

                                                                              Gabarito: Letra B

110. (FCC / TRE-AP – 2015) Serviços de cloud storage armazenam dados físicos on-line em pools
   virtualizados e especializados. É uma desvantagem deste tipo de armazenamento:

   a) As organizações geralmente pagam apenas para o armazenamento que realmente
   utilizarem.

   b) Dispensa instalação de dispositivos de armazenamento físico no ambiente de TI da
   organização.

   c) O desempenho pode ser menor do que o armazenamento local. Isso pode implicar que a
   organização tenha que realizar altos investimentos em banda larga e infraestrutura de rede.


---

   d) Os custos de localização offshore costumam ser mais baixos e ainda permite à organização
   se concentrar mais em seu core business.

   e) Tarefas como backup, replicação de dados e compra de dispositivos de armazenamento
   adicionais são transferidas para o prestador de serviços.

Comentários:

(a) Errado, essa é uma vantagem; (b) Errado, essa é uma vantagem; (c) Correto, o desempenho nem
sempre é igual ao desempenho de um armazenamento local e talvez seja necessário investir em
recursos de rede; (d) Errado, essa é uma vantagem – offshores são locais que possuem menor
tributação ou incentivos fiscais; (e) Errado, essa é uma vantagem.

                                                                              Gabarito: Letra C

111. (FCC / CNMP – 2015) Na Computação em Nuvem (Cloud Computing), diversos tipos de
   serviços podem ser disponibilizados aos usuários. O serviço que fornece uma infraestrutura de
   integração para implementar e testar aplicações elaboradas para a nuvem, é denominado:

   a) SaaS - Software as a Service.
   b) AaaS - Application as a Service.
   c) DaaS - Development as a Service.
   d) IaaS - Implementation as a Service.
   e) PaaS - Platform as a Service.

Comentários:

O serviço que fornece uma infraestrutura de integração para implementar e testar aplicações é a
plataforma como um serviço (Paas). O examinador sempre joga a palavra “infraestrutura” para
tentar confundir o candidato. Cuidado!

                                                                              Gabarito: Letra E

112. (FCC / TRT-15 – 2015) Os serviços de edição de texto online, como o do Google Docs, são
   serviços disponibilizados na internet por meio do conceito de Computação na Nuvem. Dentre
   os diferentes tipos de Computação na Nuvem, esses serviços são do tipo:

   a) PaaS − Plataform as a Service.
   b) IaaS − Infrastructure as a Service.
   c) CaaS − Communication as a Service.
   d) DBaas − Data Base as a Service.
   e) SaaS − Software as a Service.


---

Comentários:

Google Docs – serviço de edição de texto online – é um serviço do tipo Software as a Service (Saas).

                                                                                  Gabarito: Letra E

113. (FCC / DPE-SP – 2015) Para fazer um backup seguro de seus arquivos um internauta usou
   um serviço da Google que se baseia no conceito de computação em nuvem, pois poderá
   armazenar arquivos através deste serviço e acessá-los a partir de qualquer computador ou
   outros dispositivos compatíveis, desde que ligados à internet, com toda garantia de guarda dos
   dados, segurança e sigilo, por contrato de uso. Além disso, tal serviço disponibiliza vários
   aplicativos via on-line, sem que esses programas estejam instalados no computador da pessoa
   que os utiliza. Trata-se do Google:

   a) Blogger.
   b) Chrome.
   c) Backup.
   d) Schedule.
   e) Drive.

Comentários:

(a) Errado, trata-se de um ferramenta para criação de blogs; (b) Errado, trata-se de um navegador
web; (c) Errado, trata-se de uma cópia de segurança; (d) Errado, trata-se uma agenda, salvo engano;
(e) Correto, trata-se de uma ferramenta de armazenamento em nuvem.

                                                                                  Gabarito: Letra E

114. (FCC / TRT-MG – 2015) A computação na nuvem apresenta a grande vantagem de acessar
   os recursos computacionais (processamento, banco de dados, etc) a partir da internet sem a
   necessidade de instalar programas e aplicações nos computadores e dispositivos. Dentre os
   diferentes tipos de serviços da computação na nuvem, quando recursos de hardware são
   acessados na nuvem, está se utilizando o tipo de serviço:

   a) DevaaS.
   b) IaaS.
   c) CaaS.
   d) SaaS.
   e) PaaS.

Comentários:


---

Quando recursos de hardware são acessados na nuvem, está se utilizando o tipo de serviço de
Infrastructure as a Serviço (IaaS).

                                                                                  Gabarito: Letra B

115. (FCC / TCE-SP – 2010) Quanto à computação em nuvem, considere:

   I. Ao acessar seus dados na nuvem computacional, o usuário não precisa se preocupar com o
   hardware nem com o sistema operacional de seu computador, uma vez que dele utilizará
   somente o navegador.

   II. O trabalho corporativo e o compartilhamento de arquivos se tornam mais fáceis, uma vez que
   todas as informações se encontram no mesmo espaço físico, o que assegura ao próprio usuário
   manter seus dados sob sigilo.

   III. O usuário tem um melhor controle de gastos ao usar aplicativos, pois a maioria dos sistemas
   de computação em nuvem fornecem aplicações gratuitamente e, quando cobrado, o usuário
   paga somente pelo tempo de utilização dos recursos.

   IV. A Computação em nuvem é uma tendência integrante da Web 2.0 de se levar todo tipo de
   dados de usuários a servidores online, tornando desnecessário o uso de dispositivos de
   armazenamento.

   É correto o que consta em:

   a) I, II e III, apenas.
   b) I, III e IV, apenas.
   c) I e II, apenas.
   d) III e IV, apenas.
   e) I, II, III e IV.

Comentários:

(I) Correto, não precisa instalar nada – tudo é acessado via browser; (II) Errado, as informações não
estão necessariamente em um mesmo espaço físico; (III) Correto, há uma maior eficiência e
transparência dos gastos – pay-per-use; (IV) Correto, tem sido uma tendência realmente levar
dados para servidores em nuvem, tornando desnecessário o uso de dispositivos de armazenamento
– eu, por exemplo, uso cada vez menos o meu HD/SSD.

                                                                                  Gabarito: Letra B


---

                        QUESTÕES COMENTADAS – FGV
116. (FGV / Senado Federal – Análise de Suporte – 2022) Nos últimos anos, a adoção de
   ambientes em nuvem cresceu expressivamente. Modelos de serviços em nuvem facilitam a
   criação de soluções tecnológicas modernas de maneiras diferentes.

   A seguir, estão listadas algumas características de um desses modelos.

   I. O provedor de nuvem fica responsável pelo gerenciamento da infraestrutura de servidores,
   sistemas operacionais, atualizações e outras tarefas administrativas.
   II. Acessível pela internet por meio do navegador web.
   III. Permite equipes de desenvolvimento colaborarem em todo o ciclo de vida de um aplicativo,
   incluindo codificação, integração, teste, entrega, implantação e feedback.

   As características descritas nos itens I, II e III referem-se a:

   a) IAC.
   b) TaaS.
   c) SaaS.
   d) IaaS.
   e) PaaS.

Comentários:

(I) Essa característica serviria a qualquer modelo de serviço; (II) Essa característica também serviria
a qualquer modelo de serviço; (III) Essa característica menciona colaboração no ciclo de vida de um
aplicativo, desde codificação, integração, teste, entrega, implantação, etc – todas essas são
características de plataformas de desenvolvimento de software, logo se referem ao PaaS.

                                                                                    Gabarito: Letra E

117. (FGV / PC-AM – 2022) O desenvolvimento e a disponibilização de serviços na nuvem é uma
   prática muito comum.

   Sobre uma plataforma de streaming de filmes que cobra por assinatura, assinale a opção que
   indica o modelo de serviço recebido do provedor de nuvem e o que é entregue pelo
   desenvolvedor ao usuário final.

   a) Recebe SaaS e entrega PaaS.
   b) Recebe SaaS e entrega IaaS.
   c) Recebe PaaS e entrega SaaS.
   d) Recebe PaaS e entrega IaaS.


---

   e) Recebe IaaS e entrega IaaS.

Comentários:

O provedor de nuvem entrega um PaaS, dado que oferece uma plataforma para hospedagem de
um software em nuvem. Já o usuário final recebe do desenvolvedor um SaaS, dado que ele recebe
um software hospedado em nuvem. Em outras palavras, o desenvolvedor recebe um PaaS do
provedor de nuvem e entrega um SaaS para o usuário final.

                                                                              Gabarito: Letra C

118. (FGV / SEFAZ-AM – 2022) Assinale a opção que denota apenas elementos que tornaram
   possível a evolução de serviços em nuvem.

   a) Virtualização, Internet, computação escalável.
   b) Bancos de dados, Internet, computação escalável.
   c) Bancos de dados virtuais, Internet, computação escalável.
   d) Internet das Coisas, virtualização, computação escalável.
   e) Sistemas de ERP, virtualização, computação escalável.

Comentários:

(a) Correto, todos esses tornaram possível a evolução de serviços em nuvem; (b) Errado, não há
nenhuma relação direta com bancos de dados; (c) Errado, não há nenhuma relação direta com
bancos de dados virtuais; (d) Errado, não há nenhuma relação direta com Internet das Coisas; (e)
Errado, não há nenhuma relação direta com Sistemas de ERP.

                                                                              Gabarito: Letra A

119. (FGV / SEFAZ-AM – 2022) Existem alguns benefícios na adoção de nuvens privadas em
   relação às nuvens públicas. Assinale a opção que descreve apenas benefícios de uma nuvem
   privada.

   a) Melhor nível de serviço, em oposição às diversas equipes especializadas que operam nas
   nuvens públicas.

   b) Melhor controle e estabilidade, em oposição ao compartilhamento de recursos inerente às
   nuvens públicas.

   c) Melhor contingenciamento, em oposição às nuvens públicas, que possuem Data Centers
   distribuídos no mundo todo.


---

   d) Menor custo de administração, em oposição aos altos custos iniciais dos serviços das nuvens
   públicas.

   e) Rápida atualização no menu de serviços, em oposição à escassez de serviços das nuvens
   públicas.

Comentários:

(a) Errado. Nuvens privadas realmente possuem melhor nível de serviço, mas nuvens públicas não
possuem equipes especializadas e, sim, genéricas – quem possui equipes especializadas são as
nuvens privadas; (b) Correto. Nuvens privadas apresentam melhor controle e estabilidade, dado
que não são compartilhadas com outros clientes; (c) Errado. Nuvens públicas possuem melhor
contingenciamento, dado que os centros de dados são distribuídos em todo mundo; (d) Errado.
Nuvens privadas possuem maior custo de administração, dado que os custos são distribuídos por
vários clientes; (e) Errado. Não há escassez de serviços em nuvens públicas.

                                                                                Gabarito: Letra B

120. (FGV / SEFAZ-AM – 2022) O provisionamento de serviços em nuvem divide-se basicamente
   em: IaaS – Infraestrutura como Serviço, PaaS – Plataforma como Serviço e SaaS – Software
   como Serviço. Assinale a opção que indica o modelo de serviço que dá mais autonomia de
   gerenciamento do ambiente ao cliente:

   a) SaaS, porque o cliente é capaz de gerenciar o sistema operacional do serviço.
   b) PaaS, porque o cliente é capaz de gerenciar a virtualização do serviço.
   c) IaaS, porque o cliente é capaz de gerenciar o sistema operacional, os dados e a aplicação do
   serviço.
   d) SaaS, porque o cliente é capaz de gerenciar a unidade de armazenamento do serviço.
   e) SaaS, porque o cliente é capaz de gerenciar a virtualização do serviço.

Comentários:


---

Em vermelho, temos aquilo que é gerenciado pelo provedor de nuvem e, em verde, temos aquilo
que é gerenciado pelo cliente. Note que o IaaS (Infrastructure as a Service) é o modelo que dá mais
autonomia ao cliente, que pode gerenciar sistema operacional, middleware, ambiente de execução,
dados e aplicações.

                                                                                 Gabarito: Letra C

121. (FGV / TJDFT – 2022) O órgão XPTO do Poder Judiciário está implementando tecnologia em
   nuvem para prover serviços para outros órgãos. Os serviços ofertados consistirão em um
   ambiente no qual os clientes receberão máquinas virtuais, com suas áreas de armazenamento
   definidas (storage) e as interfaces de rede de acordo com os ambientes (produtivos ou não
   produtivos), nas quais poderão instalar os sistemas operacionais e suas aplicações para
   disponibilizarem serviços para seus clientes.

   De acordo com a NIST SP 800-145, o modelo de serviço de nuvem implementado pelo órgão
   XPTO é o:

   a) infrastructure as a service;
   b) on-demand self-service;
   c) software as a service;
   d) platform as a service;


---

   e) measured service.

Comentários:

De acordo com o enunciado, os serviços ofertados consistirão em um ambiente no qual os clientes
receberão máquinas virtuais, com suas áreas de armazenamento definidas (storage) e as
interfaces de rede de acordo com os ambientes nas quais poderão instalar os sistemas
operacionais e suas aplicações. Vamos lembrar da nossa figurinha básica...

Note que é a Infrastructure as a Service (IaaS) que gerencia storage (armazenamento),
virtualização (máquinas virtuais) que permite aos usuários instalarem seus sistemas operacionais
e aplicações. Lembrando que em verde é gerenciado pelo usuário e, em vermelho, é gerenciado
pela infraestrutura como serviço.

                                                                               Gabarito: Letra A

122. (FGV / MPE-GO – 2021) Júlia e seus colegas de faculdade estão fazendo um trabalho em
   grupo e decidiram compartilhar seus arquivos de imagens e texto na nuvem de modo que cada
   integrante do grupo possa ver e acessar as atualizações dos outros pela Internet.

   Para compartilhar na nuvem os arquivos do trabalho com os colegas do grupo, Júlia deve usar o:


---

   a) Dropbox.
   b) Pendrive.
   c) Mozilla Thunderbird.
   d) Windows Explorer.
   e) Infraestrutura como Serviço (IaaS).

Comentários:

(a) Correto, essa é uma das ferramentas mais famosas de compartilhamento em nuvem do
mercado; (b) Errado, pendrive é um dispositivo de memória flash que permite armazenar arquivos
localmente; (c) Errado, Mozilla Thunderbird é um software gerenciador de correio eletrônico; (d)
Errado, Windows Explorer é o gerenciador de arquivos e pastas do Microsoft Windows; (e) Errado,
IaaS é um modelo de computação em nuvem que fornece recursos de rede, armazenamento,
servidores, virtualização, entre outros.

                                                                              Gabarito: Letra A

123. (FGV / TJ-RO – 2021) João é um cientista de dados que iniciou o processo de estudo dos
   dados de sua empresa com o objetivo de identificar um diferencial competitivo diante de seus
   concorrentes. Como resultado, João decidiu implementar um Big Data e hospedá-lo em um
   ambiente de nuvem. Diante das possibilidades dos serviços, considerando os requisitos de
   escalabilidade e elasticidade, em caso de aumento de demanda pontual, aliados à tecnologia de
   Big Data, a alternativa que melhor descreve o tipo de serviço em nuvem a ser contratado por
   João é:

   a) infraestrutura como serviço (IaaS), que consiste na entrega de funções de computação,
   incluindo hardware, redes, armazenamento e espaço de Datacenter com base em um modelo
   de aluguel;

   b) plataforma como serviço (PaaS), que oferece um conjunto consistente de serviços que
   garantem que os desenvolvedores tenham um modo integrado para a criação de aplicativos em
   nuvem;

   c) software como serviço (SaaS), que consiste em um aplicativo de negócios criado e hospedado
   por um provedor em um modelo de múltiplos usuários;

   d) dados como serviço (DaaS), que é um serviço independente de plataforma que permite
   conexão à nuvem para armazenar e recuperar informações;

   e) infraestrutura como código (IaC), que consiste em uma abordagem baseada na agilidade para
   entregar uma infraestrutura de forma muito mais rápida, com uma codificação objetiva e
   simples.


---

Comentários:

Se João deseja hospedar um Big Data para poder realizar consultas e identificar diferenciais
competitivos que o ajudem na tomada de decisão, então ele precisa contratar um DaaS (Data as a
Service). Dessa forma, ele poderá utilizar diversos recursos de armazenamento, processamento,
recuperação e análise de dados.

                                                                                Gabarito: Letra D

124. (FGV / Câmara Municipal de Caruaru/PE – 2015) A computação em nuvem objetiva a
   utilização de servidores remotos, acessados por meio da Internet, para a realização de processos
   computacionais, que antes eram dependentes do hardware de cada usuário. De modo geral, a
   computação em nuvem pode ser dividida em duas categorias, caracterizadas a seguir:

   I. o processamento de dados está associado a programas que são acessados nos servidores
   centrais e é, ainda, a forma menos utilizada de computação em nuvem. Com as ferramentas
   disponíveis, é possível editar textos, planilhas, apresentações, tabelas, gráficos e outros
   documentos sem precisar ter um programa instalado no seu computador; porém, isso traz a
   necessidade de ter um navegador e uma conexão à Internet. Os documentos ficam
   armazenados “em nuvem", podendo-se editar um documento no computador pessoal, ou até
   mesmo por meio de um celular, sem precisar de dispositivos como o pendrive, por exemplo.

   II. o armazenamento de dados é a forma mais utilizada pelos usuários da Internet. Os primeiros
   serviços de armazenamento de dados estavam ligados aos servidores online de e-mails. Há
   necessidade de o usuário criar uma conta em algum servidor e enviar os seus arquivos. Isso
   significa que esse usuário precisa identificar quais servidores armazenam o tipo de arquivo que
   ele pretende salvar, além de avaliar se o servidor oferece a capacidade de armazenamento de
   que precisa. A forma de envio dos arquivos, assim como o tipo de arquivo a ser armazenado,
   varia de acordo com o conjunto de serviços oferecidos por cada servidor remoto.

   Nesse contexto, dois exemplos de recursos que suportam a computação em nuvem são:

   a) DataStore e GoogleDocs.
   b) DropBox e DataStore.
   c) iCloud e DropBox.
   d) Thunderbird e iCloud.
   e) GoogleDocs e Thunderbird.

Comentários:

(a) Errado, desconheço ferramenta chamada DataStore; (b) Errado, desconheço ferramenta
chamada DataStore; (c) Correto, ambas são ferramentas de computação em nuvem; (d) Errado,
Thunderbird é um cliente de correio eletrônico; (e) Errado, Thunderbird é um cliente de correio
eletrônico.


---

                                                                                    Gabarito: Letra C

125. (FGV / DPE-MT – 2015) A respeito do armazenamento de dados na nuvem, analise as
   afirmativas a seguir.

   I. A principal função da nuvem é o armazenamento de dados.
   II. A robustez da conexão à Internet é essencial para o uso da nuvem.
   III. Uma nuvem descartável é indicada para projetos que são realizados uma única vez.

   Assinale:

   a) se somente a afirmativa I estiver correta.
   b) se somente a afirmativa II estiver correta.
   c) se somente a afirmativa III estiver correta.
   d) se somente as afirmativas I e II estiverem corretas.
   e) se somente as afirmativas II e III estiverem corretas.

Comentários:

(I) Errado, a principal função de uma nuvem é fornecer serviços sob demanda acessíveis, escaláveis,
etc; (II) Correto, é realmente necessário ter uma conexão estável de internet; (III) Correto, de acordo
com a banca. No entanto, acredito ser uma grande viagem... nunca ouvi falar em uma nuvem
descartável e não acho que esse item faça qualquer sentido lógico.

                                                                                    Gabarito: Letra E

126. (FGV / SEDUC-AM – 2014) Cloud Computing ou Computação em Nuvem é uma tecnologia
   que permite acesso remoto a softwares e a arquivos de documentos, músicas, jogos, fotos,
   vídeos e serviços por meio da Internet. O sistema permite rodar aplicativos e utilitários em
   nuvem e guardar os dados do usuário, dispensando o disco rígido do computador.

   Assinale a opção que indica três exemplos de serviços atualmente disponíveis de computação
   em nuvem.

   a) Dropbox, iCloud e Android
   b) Ubuntu, SkyDrive e Dropbox
   c) iCloud, Android e Ubuntu
   d) SkyDrive, Dropbox e iCloud
   e) Android, Ubuntu e SkyDrive

Comentários:


---

(a) Errado, Android é um sistema operacional móvel; (b) Errado, Ubuntu é uma distribuição Linux;
(c) Errado, Android é um sistema operacional móvel; (d) Correto, todos eles são serviços de
computação em nuvem; (e) Errado, Android é um sistema operacional móvel e Ubuntu é uma
distribuição Linux.

                                                                                Gabarito: Letra D

127. (FGV / Prefeitura de Osasco – 2014) Uma nova tendência surgida nos últimos anos é a
   “computação em nuvem”. Observe as seguintes afirmativas sobre o uso de aplicativos por meio
   dessa modalidade.

   I. Permite o uso de computadores locais com configurações de hardware mais simples e
   econômicas.
   II. Permite acesso aos aplicativos por meio de outros computadores.
   III. Não requer instalações de software sofisticadas nos computadores de onde é feito o acesso.
   IV. O gerenciamento de pastas e arquivos dos aplicativos fica bastante simplificado.
   V. Não requer o uso de senhas de acesso.

   NÃO está correta a afirmativa:

   a) I;
   b) II;
   c) III;
   d) IV;
   e) V.

Comentários:

(I) Correto, uma vez que a maioria dos recursos serão disponibilizados pela nuvem, não é necessário
ter computadores locais com configurações de hardware potentes e caras; (II) Correto, é realmente
possível acessar aplicativos por meio de diversos computadores, uma vez que o acesso é feito via
navegador web; (III) Correto, uma vez que é necessário apenas um simples navegador web; (IV)
Correto, trata-se de um gerenciamento simples; (V) Errado, é requerido – sim – o uso de senhas
para que um usuário autorizado se autentique e acesse a nuvem.

                                                                                 Gabarito: Letra E


---

                 QUESTÕES COMENTADAS – VUNESP
128. (VUNESP / PC-SP – 2018) O recurso de armazenamento na nuvem (Cloud Storage) é
   bastante eficiente e útil para as necessidades de processamento e armazenamento de dados.
   Entretanto, deve-se tomar alguns cuidados no uso desse recurso, como:

   a) acessar o sistema de armazenamento utilizando dispositivos móveis que permitem a
   comunicação de vários lugares.
   b) acessar o sistema de armazenamento utilizando uma conexão sem fio com WPA-2.
   c) realizar backups próprios, uma vez que não há esquema de backup no armazenamento na
   nuvem.
   d) não realizar o compartilhamento dos arquivos, pois não há como configurar as permissões de
   acesso no armazenamento na nuvem.
   e) acessar o sistema de armazenamento utilizando os recursos de criptografia e segurança da
   informação.

Comentários:

(a) Errado, não há qualquer ressalva quanto à utilização de dispositivos móveis para acesso ao
sistema de armazenamento em nuvem; (b) Errado, uma conexão sem fio com WPA-2 é segura,
criptografada e autenticada, logo também não é uma preocupação específica; (c) Errado, há
esquemas de backup no armazenamento em nuvem; (d) Errado, é possível – sim – configurar
permissões de acesso no armazenamento em nuvem; (e) Correto, é realmente recomendável
acessar o sistema de armazenamento utilizando os recursos de criptografia e segurança da
informação.

                                                                              Gabarito: Letra E


---

          QUESTÕES COMENTADAS – DIVERSAS BANCAS
129. (IADES / BRB – 2022) A respeito das tecnologias de computação em nuvem, assinale a
   alternativa correta.

   a) A disponibilização de serviços em nuvem não exime o usuário de manter parte dos seus
   serviços de tecnologia da informação em execução no ambiente local da organização.

   b) Uma arquitetura em nuvem somente é capaz de prover a infraestrutura necessária ao usuário,
   mas não as aplicações utilizadas por ele.

   c) Os serviços em nuvem escaláveis entregam ao usuário uma infraestrutura pré-alocada sem
   possibilidade de expansão em razão do alto custo dos servidores. Por isso, é fundamental o
   gerenciamento do uso e o prévio dimensionamento do serviço no ato da assinatura do contrato.

   d) O modelo de infraestrutura como serviço é aquele que o usuário contrata para o
   desenvolvimento e o fornecimento de aplicativos, sem a preocupação de gerenciar sistemas
   operacionais ou middlewares.

   e) A modalidade de serviço PaaS oferece ao usuário a infraestrutura subjacente de hardware e
   sistemas operacionais.

Comentários:

(a) Errado. O usuário não precisa manter parte de seus serviços de tecnologia da informação em
execução no ambiente local da organização. É até necessário manter alguns serviços locais, mas
não no ambiente local da organização; (b) Errado. É capaz de prover infraestrutura e aplicações
utilizadas pelo usuário; (c) Errado. Há possibilidade de expansão em razão do alto custo de
servidores – trata-se de uma das grandes vantagens dos serviços em nuvem; (d) Errado, a questão
trata do modelo de plataforma como serviço e, não, infraestrutura como serviço; (e) Correto.
Lembre-se que os serviços de nuvem são cumulativos, logo a plataforma como serviço oferece – de
forma subjacente – a infraestrutura de hardware e sistemas operacionais.

                                                                              Gabarito: Letra E

130. (IADES / CAU-SE – 2022) O serviço de armazenamento em nuvem, que é nativo do sistema
   operacional Windows 10 e já vem, por padrão, instalado é o (a)

   a) Google Drive.
   b) Dropbox.
   c) Apple iCloud Drive.
   d) Microsoft OneDrive.


---

   e) Amazon Drive.

Comentários:

O Windows 10 é de propriedade da Microsoft. Logo, o serviço de armazenamento em nuvem nativo
deve ser o da própria Microsoft, que é o OneDrive.

                                                                                Gabarito: Letra D

131. (IDIB / Ministério da Economia – 2021) Vários aplicativos foram criados para armazenar e
   manipular arquivos em ambiente de nuvem, utilizando os drives virtuais. Assinale a alternativa
   que apresenta corretamente um desses aplicativos:

   a) Firefox
   b) Outlook
   c) OneDrive
   d) Megadrive
   e) Droppot

Comentários:

(a) Errado, isso é um navegador web; (b) Errado, isso é um software cliente de correio eletrônico;
(c) Correto; (d) Errado, isso é um videogame antigo; (e) Errado, a questão quis confundir com
Dropbox.

                                                                                Gabarito: Letra C

132. (IDIB / Ministério da Economia – 2021) As plataformas em nuvem são um tipo de ferramenta
   tecnológica baseada em cloud computing, termo que, em português, é traduzido como
   computação em nuvem. Existem várias empresas que oferecem serviços em nuvem. Assinale a
   alternativa que apresenta uma dessas plataformas:

   a) HTTP
   b) TELNET
   c) IMAP
   d) SSL
   e) AWS

Comentários:

(a) Errado, isso é um protocolo de comunicação; (b) Errado, isso é um protocolo de comunicação;
(c) Errado, isso é um protocolo de comunicação; (d) Errado, isso é um protocolo de comunicação;
(e) Correto, AWS (Amazon Web Services) é uma plataforma de serviços de computação em nuvem,
que formam uma plataforma de computação na nuvem oferecida pela Amazon.


---

                                                                                     Gabarito: Letra E

133. (IDIB / Ministério da Economia – 2021) “Refere-se a serviços online que fornecem APIs de alto
   nível usadas para desreferenciar vários detalhes de baixo nível da infraestrutura de rede subjacente,
   como recursos de computação física, localização, particionamento de dados, dimensionamento,
   segurança, backup etc. Executa as máquinas virtuais como convidados. "Pools" de "hipervisores"
   dentro do sistema operacional de nuvem podem suportar um grande número de máquinas virtuais
   e a capacidade de escalonar os serviços de acordo com os diferentes requisitos dos clientes.” Esse
   texto refere-se a que modelo de serviço em nuvem?

   a) "Plataform as a Service" ou Plataforma como Serviço.
   b) "Infrastructure as a Service" ou Infraestrutura como Serviço.
   c) "Function as a Service" ou Função como Serviço.
   d) "Software as a Service" ou Software como Serviço.
   e) "Everything as a Service" ou Tudo como Serviço.

Comentários:

Desreferenciar vários detalhes de baixo nível da infraestrutura de rede subjacente, como recursos de
computação física, localização, particionamento de dados, dimensionamento, segurança, backup?
Trata-se de uma Infraestrutura como Serviço (IaaS).

                                                                                     Gabarito: Letra B

134. (IBFC / SAEB-BA – 2020) Marcos deseja migrar seu backup de arquivos pessoais, que
   atualmente encontra-se em seu computador, para nuvem. Assinale a alternativa correta para
   exemplos de serviços de armazenamento de arquivos em nuvem:

   a) Dropbox e Google Chrome
   b) Firefox e Mozilla
   c) Google Arq e Team Viewer
   d) Dropbox e Google Drive
   e) Google Arq e Firefox

Comentários:

(a) Errado, Google Chrome é um navegador web; (b) Errado, Firefox é um navegador web e Mozilla
é a fundação que o mantém; (c) Errado, Google Arq não existe e Team Viewer é uma ferramenta de
acesso remoto; (d) Correto; (e) Errado, Google Arq não existe e Firefox é um navegador web.

                                                                                     Gabarito: Letra D


---

135. (UFAC / UFAC – 2019) O Armazenamento na Nuvem (Cloud) é uma extensão da
   Computação na Nuvem, um importante e interessante recurso, uma vez que permite o
   armazenamento de documentos de forma que possam ser acessados e compartilhados para
   outras pessoas através da internet, além de servir como recurso de armazenamento de
   segurança (backup). São exemplos de serviços de armazenamento na nuvem:

   a) OneDrive e Google Drive
   b) Dropbox e Cortana
   c) Google Drive e Cortana
   d) Skype e Google Drive
   e) Skype e Dropbox

Comentários:

(a) Correto; (b) Errado, Cortana é a assistente virtual do Windows 10; (c) Errado, Cortana é a
assistente virtual do Windows 10; (d) Errado, Skype é uma ferramenta de videoconferência; (e)
Errado, Skype é uma ferramenta de videoconferência.

                                                                                 Gabarito: Letra A

136. (FADESP / Câmara Municipal de Abaetetuba/PA – 2018) São exemplos de serviços de
   armazenamento de arquivos em nuvem:

   a) Dropbox e Google Chrome.
   b) Dropbox e Google Drive.
   c) Google Drive e Firefox.
   d) Firefox e Google Chrome.

Comentários:

(a) Errado, Google Chrome é um navegador web; (b) Correto; (c) Errado, Firefox é um navegador
web; (d) Errado, ambos são navegadores web.

                                                                                 Gabarito: Letra B

137. (IBFC / Prefeitura de Rio Branco/AC – 2018) A computação em nuvem é um recurso que
   surgiu para fornecimento de serviços de computação, como servidores, armazenamento,
   bancos de dados, rede, software, análise, utilizando a “nuvem”, que nada mais é do que a própria
   Internet. As empresas que oferecem esses serviços de computação são denominadas
   provedoras de nuvem. Atualmente, dois exemplos desse tipo de serviço são conhecidos por:

   a) Firefox e Dropbox.
   b) OneDrive o iCloud.


---

   c) iCloud e Firefox.
   d) Photoshop e OneDrive.
   e) Dropbox e Photoshop.

Comentários:

(a) Errado, Firefox é um navegador web; (b) Correto; (c) Errado, Firefox é um navegador web; (d)
Errado, Photoshop é uma ferramenta de edição de fotos; (e) Errado, Photoshop é uma ferramenta
de edição de foto.

                                                                                 Gabarito: Letra B

138. (Colégio Pedro II / Colégio Pedro II – 2018) São serviços de Cloud Computing:

   a) Dropbox, Google Drive e SkyDrive.
   b) Google Drive, SkyDrive e Symbian.
   c) Dropbox, Google Drive e Tizen.
   d) Dropbox, Symnbian e Tizen.

Comentários:

(a) Correto; (b) Errado, Symbian é um sistema operacional móvel; (c) Errado, Tizen é um sistema
operacional para sistemas embarcados; (d) Errado, Symnbian não existe e Tizen é um sistema
operacional para sistemas embarcados.

                                                                                 Gabarito: Letra A

139. (FUNCERN / Consórcio do Trairí/RN – 2018) Perder arquivos de HD e pendrive é muito
   comum, nos dias de hoje, para evitar a perda de dados importantes, algumas pessoas utilizarem
   o serviço de armazenamento na nuvem. São exemplos de armazenamento em nuvem:

   a) One Drive e Google Talk.
   b) Telegram e Dropbox.
   c) Google Drive e One Drive.
   d) Linkedin e Dropbox.

Comentários:

(a) Errado, Google Talk foi um serviço de mensagens instantâneas; (b) Errado, Telegram é um
serviço de mensagens instantâneas; (c) Correto; (d) Errado, Linkedin é uma rede social profissional.

                                                                                 Gabarito: Letra C


---

140. (IDIB / CRO BA – 2017) Das alternativas abaixo, marque aquela que NÃO representa um
   dispositivo de armazenamento nas nuvens.

   a) Google Drive
   b) OneDrive
   c) Disco rígido
   d) Dropbox

Comentários:

Pessoal, o armazenamento em nuvem permite guardar dados na internet através de um servidor
online sempre disponível. O Google Drive, OneDrive e o Dropbox são aplicativos que oferecem esse
tipo de serviço. Já o disco rígido é um tipo de memória do computador.

                                                                              Gabarito: Letra C

141. (IBGP / CISSUL/MG – 2017) Existem serviços para o armazenamento e a partilha de arquivos,
   baseados no conceito de "computação em nuvem", como Google Drive, One Drive e Dropbox.
   Assinale a alternativa que apresenta CORRETAMENTE uma característica desse tipo de serviço
   descrito.

   a) Armazenar seus arquivos em um servidor na rede local, impedindo o acesso não autorizado a
   partir de redes externas.
   b) Armazenar arquivos, não permitindo seu compartilhamento com outros usuários.
   c) Acessar arquivos armazenados em qualquer lugar, desde que haja uma conexão à internet e
   um navegador Web.
   d) Permitir aos usuários controlar a versão online dos documentos compartilhados por outros
   usuários.

Comentários:

(a) Errado, são armazenados em um servidor remoto; (b) Errado, é permitido seu compartilhamento
com outros usuários; (c) Correto, é possível acessá-los de qualquer lugar, desde que haja uma
conexão com a internet e um navegador web; (d) Errado, você não pode controlar versões de
documentos compartilhados por outros usuários.

                                                                              Gabarito: Letra C

142. (IBADE / Prefeitura de Rio Branco – 2016) Para se ter acesso a um arquivo armazenado em
   um sistema de Cloud Storage é preciso ter:

   a) rede WI-FI.
   b) antivírus instalado.


---

   c) acesso à internet.
   d) sistema de compartilhamento de arquivos.
   e) Firewall.

Comentários:

Para se ter acesso a um arquivo armazenado em um sistema de Cloud Storage (Armazenamento
em Nuvem) é necessário ter acesso à internet.

                                                                                   Gabarito: Letra C

143. (UFPEL / UFPEL – 2016) Considere as afirmativas a seguir:

   I) O Dropbox e o Microsoft OneDrive permitem que o usuário acesse seus arquivos de
   computadores conectados à Internet.

   II) Firefox e Opera são exemplos de navegadores de internet.

   III) O Google Agenda é uma ferramenta usada para marcar reuniões, permitindo adicionar e
   gerenciar convidados.

   IV) O Chrome é um navegador de internet que funciona somente em sistema operacional
   Windows.

   Estão corretas:

   a) II, III e IV, apenas.
   b) II e III, apenas.
   c) I, III e IV, apenas.
   d) I, II e III, apenas.
   e) I e II, apenas.

Comentários:

(I) Correto, esses aplicativos salvam arquivos na nuvem de modo que possam ser acessados por
meio de qualquer dispositivo conectado à internet; (II) Correto, ambos são exemplos de
navegadores web; (III) Correto, é possível marcar reuniões e fazer convites; (IV) Errado, ele funciona
em diversos outros sistemas operacionais.

                                                                                   Gabarito: Letra D

144. (UFPEL / UFPEL – 2016) O serviço para armazenamento e compartilhamento de arquivos da
   Google é chamado de:


---

   a) Dropbox.
   b) Opera.
   c) Nuvem.
   d) Icloud.
   e) Drive.

Comentários:

(a) Errado. Dropbox é um serviço de nuvem, mas não é do Google; (b) Errado. Opera é um
navegador web; (c) Errado. Nuvem é um conceito de armazenamento e compartilhamento de
arquivos; (d) Errado. iCloud é um serviço de nuvem, mas pertence à Apple; (e) Correto. Drive é o
nome antigo para o serviço de armazenamento e compartilhamento de arquivos do Google (hoje é
conhecido como Google Drive).

                                                                                 Gabarito: Letra E

145. (LEGATUS / Prefeitura de Angical do Piauí/PI – 2016) Computação em nuvem, ou cloud
   computing, é uma tecnologia que permite acesso remoto a programas (softwares), arquivos
   (documentos, músicas, jogos, fotos, vídeos) e serviços por meio da internet, sem que os mesmos
   estejam instalados em computadores ou dispositivos específicos. Um serviço bastante
   difundido atualmente que utiliza essa tecnologia e tem a finalidade de armazenar e compartilhar
   arquivos entre os usuários é o:

   a) Linux
   b) Foursquare.
   c) Twitter.
   d) Dropbox.
   e) Instagram.

Comentários:

(a) Errado, é um sistema operacional; (b) Errado, é uma rede social; (c) Errado, é uma rede social;
(d) Correto, é um serviço de armazenamento e compartilhamento de arquivos; (e) Errado, é uma
rede social.

                                                                                Gabarito: Letra D

146. (QUADRIX / BB – 2014) Um dos serviços de Cloud Computing mais populares na atualidade
   é o armazenamento remoto na nuvem, isto é, o usuário armazena seus arquivos em um sistema
   que funciona como uma unidade de HD, que pode ser acessada por qualquer
   computador/dispositivo que deseje utilizar. Assinale a alternativa que contém 3 serviços em
   nuvem especializados no armazenamento de dados.


---

   a) DropBox, SkyDrive/OneDrive e Google Drive.
   b) Google Docs, DropBox e IBM Smart Business.
   c) SkyDrive/OneDrive, IBM Smart Business e Desktop Two.
   d) Desktop Two, Google Docs e DropBox
   e) Google Drive, Desktop Two e IBM Smart Business.

Comentários:

(a) Correto; (b) Errado, IBM Smart Business não existe; (c) Errado, IBM Smart Business e Desktop
Two não existem; (d) Errado, Desktop Two não existe; (e) Errado, IBM Smart Business e Desktop
Two não existem.

                                                                                Gabarito: Letra A

147. (FEPESE / MPE-SC – 2014) Selecione a alternativa que define corretamente o OneDrive
   (antigo SkyDrive).

   a) É o serviço de computação na nuvem empregado pelo MAC OS X v10.9.
   b) É um serviço de armazenamento online da Microsoft, utilizado com o MS Office 2013.
   c) É um disco virtual para armazenar documentos e fotos do iOS a partir da versão 7.
   d) É o nome dado ao espaço cedido pelo Google para armazenar arquivos online, na internet.
   e) É um equipamento de rede utilizado para comunicação de dados na internet.

Comentários:

OneDrive é um serviço de armazenamento online da Microsoft utilizado no MS-Office.

                                                                                 Gabarito: Letra B

148. (Prefeitura do Rio de Janeiro / Prefeitura do Rio de Janeiro – 2014) Uma das principais
   características da computação em nuvem é:

   a) possibilidade de usar aplicações diretamente da internet, sem que estejam instaladas no
   computador do usuário.

   b) compartilhamento de dados e maior dificuldade de trabalho colaborativo, pois todos os
   usuários acessam as aplicações e os dados na “nuvem”.

   c) impossibilidade de o usuário contar com alta disponibilidade, já que, se um servidor parar de
   funcionar, o serviço para de funcionar.


---

   d) maior preocupação com backup e controle de segurança, que fica a cargo do próprio usuário
   do serviço.

Comentários:

(a) Correto. Essa á uma de suas maiores vantagens, isto é, poder ser acessado pela Internet via um
navegador web sem qualquer instalação no computador; (b) Errado. Há uma maior facilidade de
trabalho colaborativo; (c) Errado. Alta disponibilidade é uma das maiores vantagens da computação
em nuvem; (d) Errado, há menor preocupação com backup e segurança porque isso fica a cargo do
provedor.

                                                                                Gabarito: Letra A

149. (FUNRIO / MPOG – 2013) O modelo de computação em nuvem em que, entre suas
   características básicas, o usuário não precisa dispor de hardware e software nos moldes
   tradicionais, ou seja, em seu data center, e a capacidade de processamento e de
   armazenamento é obtida remotamente da nuvem, é denominado:

   a) CaaS (Communication as a Service).
   b) DaaS (Development as a Service).
   c) IaaS (Infrastructure as a Service).
   d) PaaS (Plataform as a Service).
   e) SaaS (Software as a Service).

Comentários:

A questão fala algumas palavras-chave: hardware e software. De fato, a segunda palavra pode gerar
alguma confusão, mas nós podemos interpretá-la como os softwares que administram os
hardwares (tentando justificar o gabarito da banca). Já a palavra “hardware” e o trecho que
menciona a capacidade de processamento e armazenamento não deixam dúvidas de que se trata
da infraestrutura como serviço (IaaS).

                                                                                Gabarito: Letra C


---

                        LISTA DE QUESTÕES – CESPE

  ATENÇÃO: somente o cespe possui uma grande quantidade de questões sobre
    esse tema, LOGO DISPONIBILIZO QUESTÕES COMENTADAS DE DIVERSAS BANCAS
1. (CESPE / Prefeitura de Boa Vista-RR - 2023) Suponha que um arquivo da Área de Trabalho do
   computador seja colocado na nuvem. Nesse caso, o arquivo ficará disponível:

   a) em uma solução de armazenamento online.
   b) na pasta Documentos do computador.
   c) em um pendrive do usuário.
   d) no armazenamento interno do celular do usuário.

2. (CESPE / CNMP - 2023) Uma das características do armazenamento em nuvem é a elasticidade,
   ou seja, o usuário pode aumentar e diminuir a escala verticalmente, conforme a demanda, e
   pagar apenas pelo que usa.

3. (CESPE / CNMP - 2023) Sistemas de armazenamento em nuvem permitem que usuários façam
   backup de arquivos gerais de maneira online.

4. (CESPE / Prefeitura de São Cristovão-SE - 2023) A respeito de computação em nuvem, assinale
   a opção correta.

   a) O uso doméstico da computação em nuvem ainda não é possível, porque esse recurso está
   disponível exclusivamente para empresas e organizações.

   b) O Gmail é um exemplo de aplicação em nuvem, pois o sistema de gerenciamento de emails
   fica armazenado nos servidores do prestador do serviço.

   c) Os serviços de computação em nuvem são disponibilizados apenas mediante pagamento.

   d) O Microsoft Office 365 não dispõe de aplicações em nuvem, pois só é possível utilizar os
   softwares desse pacote que estejam instalados no computador.

5. (CESPE / CNMP - 2023) No OneDrive, um arquivo poderá ser aberto no modo online e, se
   necessário, ser editado em modo offline.

6. (CESPE / TRT8 - 2022) Um dos requisitos para implementação dos serviços na Google Cloud
   pelo TRT8 foi que o primeiro hospedasse, mantivesse e atualizasse a infraestrutura de back-end,
   tais como, armazenamento, rede e virtualização, enquanto o segundo fosse responsável por
   gerenciar o sistema operacional, middleware e aplicativos.


---

   Certo órgão, ao definir os modelos de serviço de computação em nuvem, decidiu que seria
   responsável por gerenciar o sistema operacional, middleware e aplicativos, enquanto
   hospedaria, manteria e atualizaria a infraestrutura de back-end, tal como, armazenamento,
   rede e virtualização através do Google Cloud.

   Assinale a opção que corresponde ao modelo de serviço descrito pelo trecho precedente.

   a) IaaS.
   b) CaaS.
   c) SaaS.
   d) PaaS.
   e) Colocation.

7. (CESPE / TELEBRAS – 2022) Na execução de cargas de trabalho na computação em nuvem, o
   repositório de recursos de tecnologia da informação pode ser provisionado e escalado mediante
   o acesso via rede.

8. (CESPE / PETROBRAS – 2022) No modelo IaaS, o provedor do serviço de nuvem é responsável
   pela segurança fundamental do ambiente, enquanto o usuário da nuvem é responsável pela
   segurança de sua rede virtual e de tudo o que for construído sobre a infraestrutura
   disponibilizada.

9. (CESPE / SERES-PE – 2022) Suítes de escritório, como o Microsoft Office 365, quando
   executadas na nuvem, são um exemplo de:

   a) software as a service.
   b) business process as a service.
   c) platform as a service.
   d) functions as a service.
   e) infrastructure as a service.

10. (CESPE / TCE-SC – 2022) Em arquitetura em nuvem, dentre os tipos SaaS, IaaS e PaaS, o serviço
    de becape é restrito aos dois últimos, haja vista que no SaaS não há como personalizar os
    recursos de hardware, que é essencial para oferecer métodos eficazes de cópias regulares de um
    fornecedor de serviços para outro local.

11. (CESPE / TCE-RJ – 2022) No modelo IaaS de serviço em nuvem, o consumidor gerencia e
    controla sistemas operacionais, armazenamento, componentes e sistemas de segurança e a
    infraestrutura de nuvem subjacente.

12. (CESPE / TCE-SC – 2022) Uma característica própria dos serviços de armazenamento de dados
    em nuvem (cloud storage) é a:

   a) garantia de espaço ilimitado.


---

   b) execução de aplicações remotas.
   c) garantia de gratuidade.
   d) mobilidade facilitada para o usuário.
   e) codificação de linguagens de programação.

13. (CESPE / APEX-Brasil – 2022) Na computação em nuvem, a oferta de um ambiente de serviços
    para, por exemplo, desenvolvimento e teste de software, ocorre por meio de:

   a) IaaS – infraestrutura como serviço.
   b) PaaS – plataforma como serviço.
   c) SaaS – software como serviço.
   d) Web service – serviços web.

14. (CESPE / APEX-Brasil – 2022) Assinale a opção que apresenta o modelo de serviços na nuvem
    em que o cliente, para usufruto do serviço, deve instalar e configurar, por conta própria, os
    recursos necessários, como compiladores, banco de dados e o próprio sistema operacional.

   a) CaaS (Containers as a Service)
   b) IaaS (Infrastructure as a Service)
   c) SaaS (Software as a Service)
   d) PaaS (Platform as a Service)

15. (CESPE / APEX Brasil – 2022) Na plataforma como serviço,

   a) os desenvolvedores podem criar aplicativos móveis sem se preocupar com o gerenciamento
   de infraestrutura subjacente de servidores e bancos de dados necessários.

   b) são oferecidos recursos de computação, armazenamento e rede, sob demanda e pagos
   conforme o uso; o usuário desenvolve as soluções e é responsável pela instalação necessária.

   c) o provedor de serviços não fornece infraestrutura subjacente de software, mas fornece
   aplicativos por meio da Internet para o desenvolvimento de soluções de software.

   d) os usuários subscrevem o software e o acessam por meio da Web ou de APIs do fabricante,
   sem a necessidade que o provedor forneça infraestrutura subjacente.

16. (CESPE / Prefeitura de São Cristóvão-SE – 2022) O aumento de custos e a desobrigação de
    possuir uma estrutura interna de servidores são considerados desvantagens da computação em
    nuvem para as organizações.

17. (CESPE / Prefeitura de São Cristóvão-SE – 2022) O ambiente em que vários sistemas
    operacionais trabalham dividindo um mesmo equipamento é denominado ambiente de
    virtualização de hardware, um dos conceitos mais utilizados em Cloud Computing.


---

18. (CESPE / FUNPRESP-EXE - 2022) Na computação em nuvem, diversos computadores em rede
    são empregados para oferecerem recursos computacionais que visam solucionar um mesmo
    problema específico.

19. (CESPE / FUNPRESP-EXE - 2022) Design de aplicativo, desenvolvimento e testes são serviços
    típicos em uma infraestrutura de SAAS (Software as a Service).

20. (CESPE / PC-PB – 2022) O serviço no qual o provedor de nuvem fornece servidores,
    armazenamento, rede e ferramentas para desenvolver, testar, hospedar e entregar aplicativos
    e os clientes podem usar um conjunto de ferramentas pré-montadas é conhecido como:

   a) Containers as a Service (CaaS).
   b) Function as a Service (FaaS).
   c) Service as a Service (SaaS).
   d) Infrastructure as a Service (IaaS).
   e) Platform as a Service (PaaS).

21. (CESPE / DPDF - 2022) Em termos de arquitetura, cloud computing é considerada
    descentralizada, pois suas aplicações são executadas em ambientes distintos.

22. (CESPE / DPDF - 2022) A computação em nuvem oferece uma infraestrutura elástica e escalável
    para os sistemas que são executados em seus ambientes, sem necessidade de customizações.

23. (CESPE / DPDF - 2022) Em comparação aos modelos IaaS (infrastructure as a service) e SaaS
    (software as a service), a implantação do modelo PaaS (platform as a service) exige um
    investimento inicial menor, por serem desnecessários, por exemplo, investimentos com
    infraestrutura.

Um aplicativo para edição de textos foi disponibilizado para seus usuários sob a forma de
computação em nuvem. Esses usuários podem se conectar virtualmente, colaborando
mutuamente para a elaboração de documentos. Tais documentos, bem como os respectivos
históricos de versões anteriores, são armazenados na nuvem.

Com referência a essa situação hipotética, julgue o próximo item.

24. (CESPE / PETROBRAS – 2022) A situação descreve um modelo de nuvem denominado PaaS
    (platform as a service).

25. (CESPE / TELEBRÁS - 2021) Uma pequena empresa pode hospedar seu sistema de informações
    em nuvem pública sem qualquer custo, uma vez que toda nuvem pública é gratuita.

26. (CESPE / Petrobrás - 2022) No que se relaciona a elasticidade e escalonamento de computação
    em nuvem, os usuários têm a expectativa de que a nuvem seja capaz de fornecer rapidamente
    recursos em qualquer quantidade e a qualquer momento.


---

27. (CESPE / Petrobrás - 2022) Cloud computing é uma das inovações tecnológicas que mais
    cresceu nos últimos anos, por isso é uma instância direta da computação autônoma, em que os
    sistemas se autogerenciam.

28. (CESPE / Petrobrás - 2022) Na cloud computing são essenciais o cumprimento de três
    indicadores: disponibilidade, capacidade e desempenho na entrega de soluções e informações.

29. (CESPE / TELEBRÁS - 2021) Uma nuvem privada permite que a organização controle o seu
    próprio ambiente, incluindo seus dados.

30. (CESPE / PC-SE – 2021) Uma nuvem pode tanto armazenar arquivos pessoais de um usuário
    quanto hospedar a intranet de uma organização.

31. (CESPE / PC-AL – 2021) A computação na nuvem (cloud computing) possibilita que aplicações
    executadas em servidores isolados sejam também executadas na nuvem (Internet) em um
    ambiente de larga escala e com o uso “elástico” de recursos.

32. (CESPE / SEFAZ-CE – 2021) PaaS (Platform as a Service) é o tipo de cloud computing que
    permite a utilização de uma aplicação na Web, como, por exemplo, Google Docs e Office 365.

33. (CESPE / SEFAZ-CE – 2021) Nuvens públicas proveem espaço ilimitado em servidores que
    reúnem as informações de todos os seus usuários.

34. (CESPE / SEFAZ-CE – 2021) Em se tratando do uso organizacional de nuvens privadas, o
    modelo, a definição e os riscos associados à organização devem permanecer intactos na nuvem,
    pois os seus recursos são provisionados para uso exclusivo da organização interessada,
    compreendendo suas várias unidades de negócios.

35. (CESPE / SEFAZ-CE – 2021) Na computação em nuvem, o serviço medido, ou uso medido,
    permite que o uso de recursos seja monitorado, controlado e relatado, o que fornece
    transparência tanto para o provedor quanto para o consumidor do serviço.

36. (CESPE / SEFAZ-CE – 2021) Em uma nuvem, a característica de os recursos de computação do
    provedor serem agrupados para atender a vários consumidores é chamada de elasticidade.

37. (CESPE / PM-AL – 2021) Uma característica do ambiente de computação em nuvem é a
    elasticidade rápida, que permite provisionar recursos independentemente da sua localização.

38. (CESPE / PM-AL – 2021) Uma característica da computação em nuvem é o formato de acesso à
    rede, que é proporcionado especificamente entre equipamentos servidores, não sendo
    utilizados dispositivos clientes como notebooks e smartphones.


---

Uma agente, a partir do computador de sua casa, necessitava acessar, com segurança, os serviços
de PaaS na nuvem, com criptografia, utilizando a Internet pública como meio de comunicação entre
essas localidades. Para tanto, criou-se uma VPN (Virtual Private Network) da Internet pública, a fim
de estabelecer a conexão entre as localidades e, para prover o sigilo, criptografou-se o referido
tráfego antes de ele entrar na Internet pública.

39. (CESPE / PCDF – 2021) A solução descreve corretamente o uso da VPN como meio de prover
    segurança no tráfego, mas torna-se inviável nessa situação, pois uma VPN não pode ser utilizada
    para acesso a serviço do tipo PaaS como descrito.

40. (CESPE / PCDF – 2021) Caso o acesso fosse realizado por meio da VPN para o SaaS, por
    exemplo, para um webmail, os e-mails estariam imunes a vírus, pois, em um tunelamento
    criptográfico, o tráfego é, necessariamente e continuadamente, analisando por antivírus.

41. (CESPE / BANESE – 2021) O provisionamento para aumento de recursos como memória RAM
    e armazenamento é uma característica disponibilizada em um ambiente de PaaS (Plataform as
    a Service).

42. (CESPE / BANESE – 2021) Uma solução de software como o Microsoft Office 365, que pode ser
    acessado pela Web, a partir de login e senha em formato de assinatura com pagamentos
    mensais, é denominada SaaS (Software as a Service).

43. (CESPE / BANESE – 2021) O aumento ou a redução rapidamente na capacidade de recursos
    computacionais como processador sob demanda, é uma característica para serviços de cloud
    computing.

44. (CESPE / SERPRO – 2021) A computação em nuvem pública acessa recursos por meio da
    Internet, usando interface web, com alocação e pagamento por demanda (soluções elásticas);
    no entanto, o fato de ela ser pública não significa que seja livre nem aberta.


---

45. (CESPE / SERPRO – 2021) A ideia central da computação em nuvem é possibilitar que as
    aplicações que rodam em datacenters isolados também rodem na nuvem (Internet) em um
    ambiente de larga escala e com um uso elástico de recursos.

46.(CESPE / PM-TO – 2021) Soluções de software que permitem a edição de texto online na
   Internet sem a necessidade de instalar o aplicativo na máquina do usuário, como o Microsoft
   Office 365 e Documentos Google, são exemplos de SaaS (software como serviço). O SaaS é um
   tipo de serviço:

   a) de sistemas operacionais Internet.
   b) de grupos de discussão.
   c) das redes sociais.
   d) de intranet.
   e) da cloud computing.

47. (CESPE / APEX-BRASIL – 2021) Em uma organização que possui serviços de tecnologia da
    informação em uma nuvem no seu data center privado e em outras duas nuvens públicas, a
    arquitetura para deploy de nuvem é:

   a) comunitária.
   b) privada.
   c) híbrida.
   d) pública.

48.(CESPE / Polícia Federal – 2021) A PaaS (plataforma como um serviço) contém os componentes
   básicos de IT na nuvem e oferece o mais alto nível de flexibilidade e de controle de
   gerenciamento sobre os recursos de tecnologia da informação no que diz respeito a cloud
   computing.

49.(CESPE / Polícia Federal – 2021) As desvantagens da cloud computing incluem a inflexibilidade
   relativa ao provisionamento de recursos computacionais: é necessário estabelecê-los no
   momento da contratação e não há possibilidade de ajustes de escala, de acordo com a evolução
   das necessidades, no mesmo contrato.

50. (CESPE / PRF – 2021) Identifica-se Software como Serviço (SaaS) quando um provedor de
    serviços oferece a um ambiente baseado em cloud, no qual os usuários podem construir e
    disponibilizar aplicativos.

51. (CESPE / Ministério da Economia – 2020) Considere que uma organização faça uso, para
    atividades distintas, de duas infraestruturas de cloud privadas, que sejam separadas
    geograficamente e não permitam a portabilidade de aplicativos entre elas. Nesse caso, a
    organização possui infraestrutura do tipo cloud híbrida.


---

52. (CESPE / TJ-PA – 2019) Uma infraestrutura computacional pública que se denomina como
    nuvem pública e que atende os conceitos de uma nuvem reconhecidos pelo NIST (National
    Institute of Standards and Technology) caracteriza-se essencialmente por:

   a) ter serviços de banco de dados.
   b) permitir minerar dados com servidores.
   c) apresentar elasticidade rápida.
   d) possuir softwares com multiorganização.
   e) disponibilizar servidores bare metal sob demanda.

53. (CESPE / Polícia Federal – 2018) Os gestores de determinado órgão público decidiram adotar a
    computação em nuvem como solução para algumas dificuldades de gerenciamento dos
    recursos de tecnologia da informação. Assim, para cada contexto, análises devem ser realizadas
    a fim de compatibilizar os recursos de gerenciamento e segurança com os modelos técnicos de
    contratação. Para o armazenamento de dados de trabalho dos colaboradores desse órgão
    público, incluindo-se documentos, imagens e planilhas, e para o uso de recursos de rede
    compartilhados, como impressoras e computadores, seria adequado contratar o modelo de
    computação em nuvem denominado infraestrutura como um serviço (IaaS).

54. (CESPE / PRF – 2018) A computação em nuvem do tipo software as a service (SaaS) possibilita
    que o usuário acesse aplicativos e serviços de qualquer local usando um computador conectado
    à Internet.

55. (CESPE / PRF – 2018) Assinale a opção correspondente ao conceito de entrega sob demanda de
    poder computacional, armazenamento de banco de dados, aplicações e outros recursos de
    tecnologia da informação por meio de uma plataforma de serviços via Internet.

   a) rede privada virtual
   b) extranet
   c) computação em nuvem
   d) computação quântica
   e) zona desmilitarizada, do inglês demilitarized zone (DMZ)

56. (CESPE / SEFAZ-RS – 2018) Considerando que uma empresa tenha contratado serviços em
    nuvem, assinale a opção correta.

   a) Os serviços contratados podem ser desligados em horários predeterminados, para economia
   de custos.
   b) Os serviços contratados podem ser acessados apenas de computadores localizados dentro da
   empresa.
   c) A empresa terá de alterar o contrato de fornecimento de espaço em disco caso necessite de
   mais espaço de armazenamento.
   d) A empresa deverá encomendar novas máquinas de servidores para o trabalho em nuvem.


---

      e) A empresa terá de alterar o contrato de fornecimento de serviço de processamento caso
      necessite de maior capacidade de processamento.

57. (CESPE / BNB – 2018) PaaS (plataforma como serviço) difere de SaaS (software como serviço)
    em apenas dois componentes básicos na nuvem: no sistema operacional e no sistema de arquivo
    distribuído.

58. (CESPE / BNB – 2018) Nuvem privada e nuvem híbrida são modelos de serviços ofertados por
    provedores de nuvem.

59. (CESPE / BNB – 2018) IaaS (infraestrutura como serviço) é um modelo de implementação de
    computação em nuvem no qual a regra fundamental é que as aplicações sejam virtualizadas em
    contêineres.

60. (CESPE / BNB – 2018) Na computação em nuvem, elasticidade é a capacidade de um sistema
    de se adaptar a uma variação na carga de trabalho quase instantaneamente e de forma
    automática.

61. (CESPE / BNB – 2018) Em função da necessidade de acionamento de fornecedores, a
    computação em nuvem demora mais que a computação tradicional para colocar novas
    aplicações em execução.

62. (CESPE / Polícia Federal – 2018) Um estudo técnico de viabilidade e um projeto de re-hosting
    em computação em nuvem IaaS é indicado para as aplicações legadas do órgão que tenham sido
    originalmente desenvolvidas para mainframe.

63. (CESPE / Polícia Federal – 2018) O modelo PaaS (platform as a service) oferece menos recursos
    e funcionalidades integradas de segurança, necessitando que o cliente projete e gerencie os
    sistemas operacionais, aplicativos e dados.

64.(CESPE / CBM-AL – 2018) A computação em nuvem é utilizada para, de forma segura,
   armazenar arquivos em uma região criptografada do disco rígido do usuário, que só terá acesso
   liberado a essa região após autenticação de uma assinatura eletrônica via Internet.

65. (CESPE / ANVISA – 2018) Ao contratar e utilizar um serviço de computação em nuvem para
    armazenar seus dados, o usuário perde a governança sobre esses dados, por não visualizar como
    eles são submetidos aos processos de becape, armazenamento e controle de segurança.

66.      (CESPE / Polícia Federal – 2018) Conceitualmente, a computação em nuvem pode ser
      implementada por meio da LAN (Local Area Network) interna de uma organização.

67. (CESPE / BNB – 2018) Em um serviço do tipo IaaS, o provedor deve fornecer recursos com
    flexibilidade, efetividade, escalabilidade, elasticidade e segurança.


---

68. (CESPE / STM – 2018) O fato de um sistema utilizar computação em nuvem não é suficiente
   para que ele seja considerado escalável.

69. (CESPE / BNB – 2018) O simples fato de um sistema rodar na nuvem não lhe garante o
   atributo de ser escalável, já que será considerado escalável o sistema que tiver sido concebido
   de maneira a ser capaz de alocar e liberar dinamicamente os recursos que a computação em
   nuvem oferecer.

70. (CESPE / Polícia Federal – 2018) Atualmente, as empresas de comércio na Internet podem
    disponibilizar suas aplicações na nuvem, como, por exemplo, na plataforma Azure da Microsoft;
    da mesma forma, as organizações podem fazer migrar suas aplicações de email para a nuvem.
    Essas nuvens oferecem ambientes de computação e armazenamento escaláveis, mas, por
    questões afetas à segurança, impedem o acesso implícito às suas redes privativas de alto
    desempenho.

71. (CESPE / Polícia Federal – 2018) Se, para enviar e receber emails sem precisar gerenciar
    recursos adicionais voltados ao software de email e sem precisar manter os servidores e
    sistemas operacionais nos quais o software de email estiver sendo executado, os gestores
    optarem por um serviço de email em nuvem embasado em webmail, eles deverão contratar,
    para esse serviço, um modelo de computação em nuvem do tipo plataforma como um serviço
    (PaaS).

72. (CESPE / Polícia Federal – 2018) As nuvens do tipo híbridas são implementadas por
    organizações que possuem interesses em comum, como na área de segurança, por exemplo.

73. (CESPE / Polícia Federal – 2018) Entre os modelos de computação em nuvem, o PaaS
    (Plataforma como um serviço) é o mais indicado para o desenvolvimento de soluções
    informatizadas.

74. (CESPE / EMAP – 2018) O uso do becape em nuvem para sistemas de armazenamento de
    imagens tem como vantagem a salvaguarda das cópias em ambientes fisicamente seguros e
    geograficamente distantes.

75. (CESPE / TCE-PB – 2017) Na computação em nuvem (cloud computing), que mudou a visão de
    pessoas físicas e jurídicas acerca de recursos de tecnologia da informação, o modelo que oferece
    um ambiente sob demanda para desenvolvimento, teste e gerenciamento de aplicações de
    software é denominado:

   a) infraestrutura como serviço (IaaS).
   b) big data como serviço (BDaaS).
   c) software como serviço (SaaS).
   d) plataforma como serviço (PaaS).
   e) dados como serviço (DaaS).


---

76. (CESPE / PC-PE – 2016) Um usuário instalou e configurou, em uma estação de trabalho do órgão
    onde atua, um aplicativo de disco virtual, que permite armazenamento de dados em nuvem
    (Cloud storage), e sincronizou uma pasta que continha apenas um arquivo nomeado como
    xyz.doc. Em seguida, ele inseriu três arquivos nessa pasta e modificou o conteúdo do arquivo
    xyz.doc. Posteriormente, esse usuário configurou, em um computador na sua residência, o
    mesmo aplicativo com a mesma conta utilizada no seu trabalho, mas não realizou quaisquer
    edições ou inserção de arquivos na referida pasta.

   Com base nas informações apresentadas nessa situação hipotética, é correto afirmar que, no
   computador na residência do usuário, a pasta utilizada para sincronizar os dados conterá:

   a) quatro arquivos, porém o arquivo xyz.doc não conterá as modificações realizadas no órgão,
   uma vez que cloud storage sincroniza inserções, e não atualizações.

   b) somente o arquivo xyz.doc sem as modificações realizadas no órgão, uma vez que cloud
   storage sincroniza apenas arquivos que já existiam antes da instalação e da configuração do
   programa.

   c) somente o arquivo xyz.doc com as modificações realizadas no órgão, uma vez que cloud
   storage sincroniza apenas arquivos que já existiam antes da instalação e da configuração do
   programa com suas devidas atualizações.

   d) quatro arquivos, incluindo o arquivo xyz.doc com as modificações realizadas no órgão em que
   o usuário atua.

   e) três arquivos, uma vez que cloud storage sincroniza apenas arquivos inseridos após a
   instalação e a configuração do programa.

77. (CESPE / INSS – 2016) A ferramenta OneDrive do Windows 10 é destinada à navegação em
    páginas web por meio de um browser interativo.

78. (CESPE / MEC – 2016) Para que se utilizem recursos da computação em nuvem, não é necessário
    que haja conexão com a Internet, já que todo o processamento é realizado no próprio
    computador do usuário.

79. (CESPE / TRE-MT – 2015) Serviços de cloud storage (armazenagem na nuvem):

   a) aumentam a capacidade de processamento de computadores remotamente.
   b) aumentam a capacidade de memória RAM de computadores remotamente.
   c) suportam o aumento da capacidade de processamento e armazenamento remotamente.
   d) suportam o aumento da capacidade dos recursos da rede de computadores localmente.
   e) suportam cópia de segurança remota de arquivos.


---

80.(CESPE / TELEBRAS – 2015) As tecnologias envolvidas na computação na nuvem não estão
   totalmente consolidadas, sendo ainda passíveis de transformações ao longo dos anos.

81. (CESPE / STJ – 2015) Embora seja uma tecnologia que prometa resolver vários problemas
    relacionados à prestação de serviços de tecnologia da informação e ao armazenamento de
    dados, a computação em nuvem, atualmente, não suporta o processamento de um grande
    volume de dados.

82. (CESPE / MEC – 2015) A computação em nuvem fornece apenas serviços para armazenamento
    de dados.

83. (CESPE / TELEBRAS – 2015) O SAAS, modelo de uso da computação em nuvem em que um
    aplicativo é acessado, via Internet, em um sítio diferente daquele do cliente, apresenta como
    vantagem para o cliente a não exigência de licença de uso.

84.(CESPE / TELEBRAS – 2015) O modelo de HAAS disponibiliza aplicações aos clientes, assim
   como ocorre no modelo SAAS.

85. (CESPE / TELEBRAS – 2015) Na computação na nuvem, IaaS (infrastructure as a service) refere-
    se a um modelo de serviço em que o provedor oferece ao usuário de forma transparente, uma
    infraestrutura tanto de processamento quanto de armazenamento.

86. (CESPE / TELEBRAS – 2015) Os possíveis benefícios relacionados ao uso da computação em
   nuvem nas organizações incluem a economia de energia elétrica.


87. (CESPE / STJ – 2015) O que diferencia uma nuvem pública de uma nuvem privada é o fato de
    aquela ser disponibilizada gratuitamente para uso e esta ser disponibilizada sob o modelo pay-
    per-usage (pague pelo uso).

88. (CESPE / TCE-RN – 2015) A computação em nuvem é constituída de várias tecnologias e
   formada por um conjunto de servidores físicos e virtuais interligados em rede.

89. (CESPE / Polícia Federal – 2014) Entre as desvantagens da computação em nuvem está o
   fato de as aplicações terem de ser executadas diretamente na nuvem, não sendo permitido, por
   exemplo, que uma aplicação instalada em um computador pessoal seja executada.

90.(CESPE / Polícia Federal – 2014) Na computação em nuvem, diversos computadores são
   interligados para que trabalhem de modo colaborativo, inclusive aqueles que possuam sistemas
   operacionais diferentes.

91. (CESPE / ICMBio – 2014) A computação na nuvem permite ao usuário alocar recursos de forma
    dinâmica e em tempo real, o que possibilita o ajuste entre a necessidade e os recursos.


---

92. (CESPE / ICMBio – 2014) A computação em nuvem é uma forma atual e segura de armazenar
    dados em servidores remotos que não dependem da Internet para se comunicar.

93. (CESPE / TCDF – 2014) Embora a atual arquitetura de nuvem possua grande capacidade de
    armazenamento, os dados gerados por redes sociais e por mecanismos de busca não podem ser
    armazenados e gerenciados em nuvem, devido ao fato de eles serem produzidos, diariamente,
    em quantidade que extrapola a capacidade de armazenamento da referida arquitetura.

94.(CESPE / Câmara dos Deputados – 2014) O armazenamento de arquivos no modelo de
   computação em nuvem (cloud computing) é um recurso moderno que permite ao usuário
   acessar conteúdos diversos a partir de qualquer computador com acesso à Internet.

95. (CESPE / SUFRAMA – 2014) Na hierarquia da computação em nuvem, o nível mais baixo é o
    PaaS (Platform-as-a-Service). Nesse nível, é disponibilizado ao usuário somente a estrutura de
    hardware, a qual inclui o processador, a memória, a energia, a refrigeração e a rede; ao passo
    que a estrutura de software, que inclui o sistema operacional, os servidores de banco de dados
    e os servidores web, fica a cargo do próprio usuário.

96. (CESPE / MDIC – 2014) Na computação em nuvem, é possível acessar dados armazenados
   em diversos servidores de arquivos localizados em diferentes locais do mundo, contudo, a
   plataforma utilizada para o acesso deve ser idêntica à dos servidores da nuvem.

97. (CESPE / ANTAQ – 2014) No modelo SaaS (software-as-a-service), as aplicações estão
    disponíveis como serviços pelos provedores e podem ser acessadas pelos clientes por meio de
    aplicações, como, por exemplo, um browser. Todo controle e gerenciamento da infraestrutura
    de rede, de sistemas operacionais, de servidores e de armazenamento são feitos pelo provedor
    do serviço.

98.    (CESPE / FUB – 2014) O Google Drive é uma ferramenta que possibilita a criação e edição
   de documentos, planilhas e apresentações.

99.   (CESPE / SERPRO – 2013) Segundo o NIST (National Institute of Standards and
   Technology), IaaS, PaaS, SaaS e UDP são modelos de serviço oferecidos pela computação em
   nuvem.

100. (CESPE / SERPRO – 2013) Segundo o NIST, os modelos de implantação definidos para a
   computação em nuvem são: público, privado, comunitário e híbrido.

101. (CESPE / SERPRO – 2013) A arquitetura de computação na nuvem tem um componente
   denominado infraestrutura como serviço, que provê todas as linguagens de banco de dados para
   o usuário do serviço.

102. (CESPE / ANTT – 2013) Os modelos de implementação para computação em nuvem podem
   ser classificados em público, privado, comunitário e restrito.


---

103. (CESPE / ANTT – 2013) IaaS, PaaS e SaaS são modelos de serviço em nuvem.

104. (CESPE / ANTT – 2013) Os serviços de nuvem permitem que o usuário armazene seus
   arquivos pessoais, como fotos, músicas e vídeos, gratuitamente na Internet.

105. (CESPE / STF – 2013) Na infraestrutura como serviço (IaaS), os provedores podem oferecer
   infraestrutura física ou virtualizada aos clientes, a depender da situação.

106. (CESPE / MPOG – 2013) Um dos cenários disponíveis para computação em nuvem é o SaaS
   (Software as a Service), cujos serviços dizem respeito a aplicações completas oferecidas aos
   usuários. Embora não seja instalado localmente na infraestrutura do cliente, o SaaS é utilizado
   pela web, podendo ser pago pelo tempo de uso ou volume, de acordo com a demanda.


---

                            LISTA DE QUESTÕES – FCC
107. (FCC / CLDF – 2018) Na adoção dos recursos de computação na nuvem o Analista de
   Sistemas selecionou o modelo IaaS que disponibiliza, dentre outros recursos, o serviço de:

   a) armazenamento de Backup.
   b) gerenciamento de banco de dados.
   c) provedor de e-mail.
   d) edição de documento.
   e) hospedagem de site.

108. (FCC / TRT-SP – 2018) Ao pesquisar sobre cloud storage, um Técnico verificou que há
   diferentes tipos de armazenamento em nuvem, dependendo de como o storage é feito, dentre
   os quais estão:

   I. Voltada para pessoas físicas, esta nuvem é composta por sites que disponibilizam um pequeno
   espaço de armazenamento gratuitamente e oferecem planos para expandir a capacidade. Ideal
   para quem quer testar o serviço de cloud storage ou possui um pequeno volume de dados e não
   necessita de um alto nível de segurança e desempenho.

   II. Dividida entre clientes com negócios em comum, que rateiam os custos de utilização e
   manutenção, esta nuvem pode ser hospedada e gerenciada dentro das empresas ou, então,
   terceirizada.

   III. Esta nuvem é projetada para uso exclusivo de uma única empresa, nas dependências da qual
   todo o hardware (storages e servidores) fica alocado. A empresa possui controle total da
   implementação das aplicações na nuvem.

   Os tipos de I, II e III são, correta e respectivamente,

   a) FaaS, SaaS e IaaS.
   b) nuvem pública, comunitária e privada.
   c) IaaS, CaaS e SaaS.
   d) nuvem gratuita, híbrida e corporativa.
   e) IaaS, EaaS e PaaS.

109. (FCC / TRT-PE – 2018) Um Analista utiliza um conjunto de aplicativos de escritório (Google
   Docs) que não estão instalados em seu computador, mas em servidores espalhados em pontos
   diversos da internet. Além de acessar os aplicativos, guarda também os documentos produzidos
   por meio deles nesses servidores, de forma a poder acessá-los a partir de qualquer computador
   com acesso à internet. O Analista utiliza um tipo de computação em nuvem conhecido como:


---

   a) Development as a Service.
   b) Software as a Service.
   c) Plataform as a Service.
   d) Infrastructure as a Service.
   e) Communication as a Service.

110. (FCC / TRE-AP – 2015) Serviços de cloud storage armazenam dados físicos on-line em pools
   virtualizados e especializados. É uma desvantagem deste tipo de armazenamento:

   a) As organizações geralmente pagam apenas para o armazenamento que realmente
   utilizarem.

   b) Dispensa instalação de dispositivos de armazenamento físico no ambiente de TI da
   organização.

   c) O desempenho pode ser menor do que o armazenamento local. Isso pode implicar que a
   organização tenha que realizar altos investimentos em banda larga e infraestrutura de rede.

   d) Os custos de localização offshore costumam ser mais baixos e ainda permite à organização
   se concentrar mais em seu core business.

   e) Tarefas como backup, replicação de dados e compra de dispositivos de armazenamento
   adicionais são transferidas para o prestador de serviços.

111. (FCC / CNMP – 2015) Na Computação em Nuvem (Cloud Computing), diversos tipos de
   serviços podem ser disponibilizados aos usuários. O serviço que fornece uma infraestrutura de
   integração para implementar e testar aplicações elaboradas para a nuvem, é denominado:

   a) SaaS - Software as a Service.
   b) AaaS - Application as a Service.
   c) DaaS - Development as a Service.
   d) IaaS - Implementation as a Service.
   e) PaaS - Platform as a Service.

112. (FCC / TRT-15 – 2015) Os serviços de edição de texto online, como o do Google Docs, são
   serviços disponibilizados na internet por meio do conceito de Computação na Nuvem. Dentre
   os diferentes tipos de Computação na Nuvem, esses serviços são do tipo:

   a) PaaS − Plataform as a Service.
   b) IaaS − Infrastructure as a Service.
   c) CaaS − Communication as a Service.
   d) DBaas − Data Base as a Service.
   e) SaaS − Software as a Service.


---

113. (FCC / DPE-SP – 2015) Para fazer um backup seguro de seus arquivos um internauta usou um
   serviço da Google que se baseia no conceito de computação em nuvem, pois poderá armazenar
   arquivos através deste serviço e acessá-los a partir de qualquer computador ou outros
   dispositivos compatíveis, desde que ligados à internet, com toda garantia de guarda dos dados,
   segurança e sigilo, por contrato de uso. Além disso, tal serviço disponibiliza vários aplicativos via
   on-line, sem que esses programas estejam instalados no computador da pessoa que os utiliza.
   Trata-se do Google:

   a) Blogger.
   b) Chrome.
   c) Backup.
   d) Schedule.
   e) Drive.

114. (FCC / TRT-MG – 2015) A computação na nuvem apresenta a grande vantagem de acessar
   os recursos computacionais (processamento, banco de dados, etc) a partir da internet sem a
   necessidade de instalar programas e aplicações nos computadores e dispositivos. Dentre os
   diferentes tipos de serviços da computação na nuvem, quando recursos de hardware são
   acessados na nuvem, está se utilizando o tipo de serviço:

   a) DevaaS.
   b) IaaS.
   c) CaaS.
   d) SaaS.
   e) PaaS.

115. (FCC / TCE-SP – 2010) Quanto à computação em nuvem, considere:

   I. Ao acessar seus dados na nuvem computacional, o usuário não precisa se preocupar com o
   hardware nem com o sistema operacional de seu computador, uma vez que dele utilizará
   somente o navegador.

   II. O trabalho corporativo e o compartilhamento de arquivos se tornam mais fáceis, uma vez que
   todas as informações se encontram no mesmo espaço físico, o que assegura ao próprio usuário
   manter seus dados sob sigilo.

   III. O usuário tem um melhor controle de gastos ao usar aplicativos, pois a maioria dos sistemas
   de computação em nuvem fornecem aplicações gratuitamente e, quando cobrado, o usuário
   paga somente pelo tempo de utilização dos recursos.

   IV. A Computação em nuvem é uma tendência integrante da Web 2.0 de se levar todo tipo de
   dados de usuários a servidores online, tornando desnecessário o uso de dispositivos de
   armazenamento.


---

É correto o que consta em:

a) I, II e III, apenas.
b) I, III e IV, apenas.
c) I e II, apenas.
d) III e IV, apenas.
e) I, II, III e IV.


---

                            LISTA DE QUESTÕES – FGV
116. (FGV / Senado Federal – Análise de Suporte – 2022) Nos últimos anos, a adoção de
   ambientes em nuvem cresceu expressivamente. Modelos de serviços em nuvem facilitam a
   criação de soluções tecnológicas modernas de maneiras diferentes.

   A seguir, estão listadas algumas características de um desses modelos.

   I. O provedor de nuvem fica responsável pelo gerenciamento da infraestrutura de servidores,
   sistemas operacionais, atualizações e outras tarefas administrativas.
   II. Acessível pela internet por meio do navegador web.
   III. Permite equipes de desenvolvimento colaborarem em todo o ciclo de vida de um aplicativo,
   incluindo codificação, integração, teste, entrega, implantação e feedback.

   As características descritas nos itens I, II e III referem-se a:

   a) IAC.
   b) TaaS.
   c) SaaS.
   d) IaaS.
   e) PaaS.

117. (FGV / PC-AM – 2022) O desenvolvimento e a disponibilização de serviços na nuvem é uma
   prática muito comum.

   Sobre uma plataforma de streaming de filmes que cobra por assinatura, assinale a opção que
   indica o modelo de serviço recebido do provedor de nuvem e o que é entregue pelo
   desenvolvedor ao usuário final.

   a) Recebe SaaS e entrega PaaS.
   b) Recebe SaaS e entrega IaaS.
   c) Recebe PaaS e entrega SaaS.
   d) Recebe PaaS e entrega IaaS.
   e) Recebe IaaS e entrega IaaS.

118. (FGV / SEFAZ-AM – 2022) Assinale a opção que denota apenas elementos que tornaram
   possível a evolução de serviços em nuvem.

   a) Virtualização, Internet, computação escalável.
   b) Bancos de dados, Internet, computação escalável.
   c) Bancos de dados virtuais, Internet, computação escalável.
   d) Internet das Coisas, virtualização, computação escalável.


---

   e) Sistemas de ERP, virtualização, computação escalável.

119. (FGV / SEFAZ-AM – 2022) Existem alguns benefícios na adoção de nuvens privadas em
   relação às nuvens públicas. Assinale a opção que descreve apenas benefícios de uma nuvem
   privada.

   a) Melhor nível de serviço, em oposição às diversas equipes especializadas que operam nas
   nuvens públicas.

   b) Melhor controle e estabilidade, em oposição ao compartilhamento de recursos inerente às
   nuvens públicas.

   c) Melhor contingenciamento, em oposição às nuvens públicas, que possuem Data Centers
   distribuídos no mundo todo.

   d) Menor custo de administração, em oposição aos altos custos iniciais dos serviços das nuvens
   públicas.

   e) Rápida atualização no menu de serviços, em oposição à escassez de serviços das nuvens
   públicas.

120. (FGV / SEFAZ-AM – 2022) O provisionamento de serviços em nuvem divide-se basicamente
   em: IaaS – Infraestrutura como Serviço, PaaS – Plataforma como Serviço e SaaS – Software
   como Serviço. Assinale a opção que indica o modelo de serviço que dá mais autonomia de
   gerenciamento do ambiente ao cliente:

   a) SaaS, porque o cliente é capaz de gerenciar o sistema operacional do serviço.
   b) PaaS, porque o cliente é capaz de gerenciar a virtualização do serviço.
   c) IaaS, porque o cliente é capaz de gerenciar o sistema operacional, os dados e a aplicação do
   serviço.
   d) SaaS, porque o cliente é capaz de gerenciar a unidade de armazenamento do serviço.
   e) SaaS, porque o cliente é capaz de gerenciar a virtualização do serviço.

121. (FGV / TJDFT – 2022) O órgão XPTO do Poder Judiciário está implementando tecnologia em
   nuvem para prover serviços para outros órgãos. Os serviços ofertados consistirão em um
   ambiente no qual os clientes receberão máquinas virtuais, com suas áreas de armazenamento
   definidas (storage) e as interfaces de rede de acordo com os ambientes (produtivos ou não
   produtivos), nas quais poderão instalar os sistemas operacionais e suas aplicações para
   disponibilizarem serviços para seus clientes.

   De acordo com a NIST SP 800-145, o modelo de serviço de nuvem implementado pelo órgão
   XPTO é o:

   a) infrastructure as a service;


---

   b) on-demand self-service;
   c) software as a service;
   d) platform as a service;
   e) measured service.

122. (FGV / MPE-GO – 2021) Júlia e seus colegas de faculdade estão fazendo um trabalho em
   grupo e decidiram compartilhar seus arquivos de imagens e texto na nuvem de modo que cada
   integrante do grupo possa ver e acessar as atualizações dos outros pela Internet.

   Para compartilhar na nuvem os arquivos do trabalho com os colegas do grupo, Júlia deve usar o:

   a) Dropbox.
   b) Pendrive.
   c) Mozilla Thunderbird.
   d) Windows Explorer.
   e) Infraestrutura como Serviço (IaaS).

123. (FGV / TJ-RO – 2021) João é um cientista de dados que iniciou o processo de estudo dos
   dados de sua empresa com o objetivo de identificar um diferencial competitivo diante de seus
   concorrentes. Como resultado, João decidiu implementar um Big Data e hospedá-lo em um
   ambiente de nuvem. Diante das possibilidades dos serviços, considerando os requisitos de
   escalabilidade e elasticidade, em caso de aumento de demanda pontual, aliados à tecnologia de
   Big Data, a alternativa que melhor descreve o tipo de serviço em nuvem a ser contratado por
   João é:

   a) infraestrutura como serviço (IaaS), que consiste na entrega de funções de computação,
   incluindo hardware, redes, armazenamento e espaço de Datacenter com base em um modelo
   de aluguel;

   b) plataforma como serviço (PaaS), que oferece um conjunto consistente de serviços que
   garantem que os desenvolvedores tenham um modo integrado para a criação de aplicativos em
   nuvem;

   c) software como serviço (SaaS), que consiste em um aplicativo de negócios criado e hospedado
   por um provedor em um modelo de múltiplos usuários;

   d) dados como serviço (DaaS), que é um serviço independente de plataforma que permite
   conexão à nuvem para armazenar e recuperar informações;

   e) infraestrutura como código (IaC), que consiste em uma abordagem baseada na agilidade para
   entregar uma infraestrutura de forma muito mais rápida, com uma codificação objetiva e
   simples.


---

124. (FGV / Câmara Municipal de Caruaru/PE – 2015) A computação em nuvem objetiva a
   utilização de servidores remotos, acessados por meio da Internet, para a realização de processos
   computacionais, que antes eram dependentes do hardware de cada usuário. De modo geral, a
   computação em nuvem pode ser dividida em duas categorias, caracterizadas a seguir:

   I. o processamento de dados está associado a programas que são acessados nos servidores
   centrais e é, ainda, a forma menos utilizada de computação em nuvem. Com as ferramentas
   disponíveis, é possível editar textos, planilhas, apresentações, tabelas, gráficos e outros
   documentos sem precisar ter um programa instalado no seu computador; porém, isso traz a
   necessidade de ter um navegador e uma conexão à Internet. Os documentos ficam
   armazenados “em nuvem", podendo-se editar um documento no computador pessoal, ou até
   mesmo por meio de um celular, sem precisar de dispositivos como o pendrive, por exemplo.

   II. o armazenamento de dados é a forma mais utilizada pelos usuários da Internet. Os primeiros
   serviços de armazenamento de dados estavam ligados aos servidores online de e-mails. Há
   necessidade de o usuário criar uma conta em algum servidor e enviar os seus arquivos. Isso
   significa que esse usuário precisa identificar quais servidores armazenam o tipo de arquivo que
   ele pretende salvar, além de avaliar se o servidor oferece a capacidade de armazenamento de
   que precisa. A forma de envio dos arquivos, assim como o tipo de arquivo a ser armazenado,
   varia de acordo com o conjunto de serviços oferecidos por cada servidor remoto.

   Nesse contexto, dois exemplos de recursos que suportam a computação em nuvem são:

   a) DataStore e GoogleDocs.
   b) DropBox e DataStore.
   c) iCloud e DropBox.
   d) Thunderbird e iCloud.
   e) GoogleDocs e Thunderbird.

125. (FGV / DPE-MT – 2015) A respeito do armazenamento de dados na nuvem, analise as
   afirmativas a seguir.

   I. A principal função da nuvem é o armazenamento de dados.
   II. A robustez da conexão à Internet é essencial para o uso da nuvem.
   III. Uma nuvem descartável é indicada para projetos que são realizados uma única vez.

   Assinale:

   a) se somente a afirmativa I estiver correta.
   b) se somente a afirmativa II estiver correta.
   c) se somente a afirmativa III estiver correta.
   d) se somente as afirmativas I e II estiverem corretas.
   e) se somente as afirmativas II e III estiverem corretas.


---

126. (FGV / SEDUC-AM – 2014) Cloud Computing ou Computação em Nuvem é uma tecnologia
   que permite acesso remoto a softwares e a arquivos de documentos, músicas, jogos, fotos,
   vídeos e serviços por meio da Internet. O sistema permite rodar aplicativos e utilitários em
   nuvem e guardar os dados do usuário, dispensando o disco rígido do computador.

   Assinale a opção que indica três exemplos de serviços atualmente disponíveis de computação
   em nuvem.

   a) Dropbox, iCloud e Android
   b) Ubuntu, SkyDrive e Dropbox
   c) iCloud, Android e Ubuntu
   d) SkyDrive, Dropbox e iCloud
   e) Android, Ubuntu e SkyDrive

127. (FGV / Prefeitura de Osasco – 2014) Uma nova tendência surgida nos últimos anos é a
   “computação em nuvem”. Observe as seguintes afirmativas sobre o uso de aplicativos por meio
   dessa modalidade.

   I. Permite o uso de computadores locais com configurações de hardware mais simples e
   econômicas.
   II. Permite acesso aos aplicativos por meio de outros computadores.
   III. Não requer instalações de software sofisticadas nos computadores de onde é feito o acesso.
   IV. O gerenciamento de pastas e arquivos dos aplicativos fica bastante simplificado.
   V. Não requer o uso de senhas de acesso.

   NÃO está correta a afirmativa:

   a) I;
   b) II;
   c) III;
   d) IV;
   e) V.


---

                     LISTA DE QUESTÕES – VUNESP
128. (VUNESP / PC-SP – 2018) O recurso de armazenamento na nuvem (Cloud Storage) é
   bastante eficiente e útil para as necessidades de processamento e armazenamento de dados.
   Entretanto, deve-se tomar alguns cuidados no uso desse recurso, como:

   a) acessar o sistema de armazenamento utilizando dispositivos móveis que permitem a
   comunicação de vários lugares.
   b) acessar o sistema de armazenamento utilizando uma conexão sem fio com WPA-2.
   c) realizar backups próprios, uma vez que não há esquema de backup no armazenamento na
   nuvem.
   d) não realizar o compartilhamento dos arquivos, pois não há como configurar as permissões de
   acesso no armazenamento na nuvem.
   e) acessar o sistema de armazenamento utilizando os recursos de criptografia e segurança da
   informação.


---

              LISTA DE QUESTÕES – DIVERSAS BANCAS
129. (IADES / BRB – 2022) A respeito das tecnologias de computação em nuvem, assinale a
   alternativa correta.

   a) A disponibilização de serviços em nuvem não exime o usuário de manter parte dos seus
   serviços de tecnologia da informação em execução no ambiente local da organização.

   b) Uma arquitetura em nuvem somente é capaz de prover a infraestrutura necessária ao usuário,
   mas não as aplicações utilizadas por ele.

   c) Os serviços em nuvem escaláveis entregam ao usuário uma infraestrutura pré-alocada sem
   possibilidade de expansão em razão do alto custo dos servidores. Por isso, é fundamental o
   gerenciamento do uso e o prévio dimensionamento do serviço no ato da assinatura do contrato.

   d) O modelo de infraestrutura como serviço é aquele que o usuário contrata para o
   desenvolvimento e o fornecimento de aplicativos, sem a preocupação de gerenciar sistemas
   operacionais ou middlewares.

   e) A modalidade de serviço PaaS oferece ao usuário a infraestrutura subjacente de hardware e
   sistemas operacionais.

130. (IADES / CAU-SE – 2022) O serviço de armazenamento em nuvem, que é nativo do sistema
   operacional Windows 10 e já vem, por padrão, instalado é o (a)

   a) Google Drive.
   b) Dropbox.
   c) Apple iCloud Drive.
   d) Microsoft OneDrive.
   e) Amazon Drive.

131. (IDIB / Ministério da Economia – 2021) Vários aplicativos foram criados para armazenar e
   manipular arquivos em ambiente de nuvem, utilizando os drives virtuais. Assinale a alternativa
   que apresenta corretamente um desses aplicativos:

   a) Firefox
   b) Outlook
   c) OneDrive
   d) Megadrive
   e) Droppot


---

132. (IDIB / Ministério da Economia – 2021) As plataformas em nuvem são um tipo de ferramenta
   tecnológica baseada em cloud computing, termo que, em português, é traduzido como
   computação em nuvem. Existem várias empresas que oferecem serviços em nuvem. Assinale a
   alternativa que apresenta uma dessas plataformas:

   a) HTTP
   b) TELNET
   c) IMAP
   d) SSL
   e) AWS

133. (IDIB / Ministério da Economia – 2021) “Refere-se a serviços online que fornecem APIs de alto
   nível usadas para desreferenciar vários detalhes de baixo nível da infraestrutura de rede subjacente,
   como recursos de computação física, localização, particionamento de dados, dimensionamento,
   segurança, backup etc. Executa as máquinas virtuais como convidados. "Pools" de "hipervisores"
   dentro do sistema operacional de nuvem podem suportar um grande número de máquinas virtuais
   e a capacidade de escalonar os serviços de acordo com os diferentes requisitos dos clientes.” Esse
   texto refere-se a que modelo de serviço em nuvem?

   a) "Plataform as a Service" ou Plataforma como Serviço.
   b) "Infrastructure as a Service" ou Infraestrutura como Serviço.
   c) "Function as a Service" ou Função como Serviço.
   d) "Software as a Service" ou Software como Serviço.
   e) "Everything as a Service" ou Tudo como Serviço.

134. (IBFC / SAEB-BA – 2020) Marcos deseja migrar seu backup de arquivos pessoais, que
   atualmente encontra-se em seu computador, para nuvem. Assinale a alternativa correta para
   exemplos de serviços de armazenamento de arquivos em nuvem:

   a) Dropbox e Google Chrome
   b) Firefox e Mozilla
   c) Google Arq e Team Viewer
   d) Dropbox e Google Drive
   e) Google Arq e Firefox

135. (UFAC / UFAC – 2019) O Armazenamento na Nuvem (Cloud) é uma extensão da
   Computação na Nuvem, um importante e interessante recurso, uma vez que permite o
   armazenamento de documentos de forma que possam ser acessados e compartilhados para
   outras pessoas através da internet, além de servir como recurso de armazenamento de
   segurança (backup). São exemplos de serviços de armazenamento na nuvem:

   a) OneDrive e Google Drive
   b) Dropbox e Cortana
   c) Google Drive e Cortana


---

   d) Skype e Google Drive
   e) Skype e Dropbox

136. (FADESP / Câmara Municipal de Abaetetuba/PA – 2018) São exemplos de serviços de
   armazenamento de arquivos em nuvem:

   a) Dropbox e Google Chrome.
   b) Dropbox e Google Drive.
   c) Google Drive e Firefox.
   d) Firefox e Google Chrome.

137. (IBFC / Prefeitura de Rio Branco/AC – 2018) A computação em nuvem é um recurso que
   surgiu para fornecimento de serviços de computação, como servidores, armazenamento,
   bancos de dados, rede, software, análise, utilizando a “nuvem”, que nada mais é do que a própria
   Internet. As empresas que oferecem esses serviços de computação são denominadas
   provedoras de nuvem. Atualmente, dois exemplos desse tipo de serviço são conhecidos por:

   a) Firefox e Dropbox.
   b) OneDrive o iCloud.
   c) iCloud e Firefox.
   d) Photoshop e OneDrive.
   e) Dropbox e Photoshop.

138. (Colégio Pedro II / Colégio Pedro II – 2018) São serviços de Cloud Computing:

   a) Dropbox, Google Drive e SkyDrive.
   b) Google Drive, SkyDrive e Symbian.
   c) Dropbox, Google Drive e Tizen.
   d) Dropbox, Symnbian e Tizen.

139. (FUNCERN / Consórcio do Trairí/RN – 2018) Perder arquivos de HD e pendrive é muito
   comum, nos dias de hoje, para evitar a perda de dados importantes, algumas pessoas utilizarem
   o serviço de armazenamento na nuvem. São exemplos de armazenamento em nuvem:

   a) One Drive e Google Talk.
   b) Telegram e Dropbox.
   c) Google Drive e One Drive.
   d) Linkedin e Dropbox.


140. (IDIB / CRO BA – 2017) Das alternativas abaixo, marque aquela que NÃO representa um
   dispositivo de armazenamento nas nuvens.

   a) Google Drive


---

   b) OneDrive
   c) Disco rígido
   d) Dropbox

141. (IBGP / CISSUL/MG – 2017) Existem serviços para o armazenamento e a partilha de arquivos,
   baseados no conceito de "computação em nuvem", como Google Drive, One Drive e Dropbox.
   Assinale a alternativa que apresenta CORRETAMENTE uma característica desse tipo de serviço
   descrito.

   a) Armazenar seus arquivos em um servidor na rede local, impedindo o acesso não autorizado a
   partir de redes externas.
   b) Armazenar arquivos, não permitindo seu compartilhamento com outros usuários.
   c) Acessar arquivos armazenados em qualquer lugar, desde que haja uma conexão à internet e
   um navegador Web.
   d) Permitir aos usuários controlar a versão online dos documentos compartilhados por outros
   usuários.

142. (IBADE / Prefeitura de Rio Branco – 2016) Para se ter acesso a um arquivo armazenado em
   um sistema de Cloud Storage é preciso ter:

   a) rede WI-FI.
   b) antivírus instalado.
   c) acesso à internet.
   d) sistema de compartilhamento de arquivos.
   e) Firewall.

143. (UFPEL / UFPEL – 2016) Considere as afirmativas a seguir:

   I) O Dropbox e o Microsoft OneDrive permitem que o usuário acesse seus arquivos de
   computadores conectados à Internet.

   II) Firefox e Opera são exemplos de navegadores de internet.

   III) O Google Agenda é uma ferramenta usada para marcar reuniões, permitindo adicionar e
   gerenciar convidados.

   IV) O Chrome é um navegador de internet que funciona somente em sistema operacional
   Windows.

   Estão corretas:

   a) II, III e IV, apenas.
   b) II e III, apenas.
   c) I, III e IV, apenas.


---

   d) I, II e III, apenas.
   e) I e II, apenas.

144. (UFPEL / UFPEL – 2016) O serviço para armazenamento e compartilhamento de arquivos da
   Google é chamado de:

   a) Dropbox.
   b) Opera.
   c) Nuvem.
   d) Icloud.
   e) Drive.

145. (LEGATUS / Prefeitura de Angical do Piauí/PI – 2016) Computação em nuvem, ou cloud
   computing, é uma tecnologia que permite acesso remoto a programas (softwares), arquivos
   (documentos, músicas, jogos, fotos, vídeos) e serviços por meio da internet, sem que os mesmos
   estejam instalados em computadores ou dispositivos específicos. Um serviço bastante
   difundido atualmente que utiliza essa tecnologia e tem a finalidade de armazenar e compartilhar
   arquivos entre os usuários é o:

   a) Linux
   b) Foursquare.
   c) Twitter.
   d) Dropbox.
   e) Instagram.

146. (QUADRIX / BB – 2014) Um dos serviços de Cloud Computing mais populares na atualidade
   é o armazenamento remoto na nuvem, isto é, o usuário armazena seus arquivos em um sistema
   que funciona como uma unidade de HD, que pode ser acessada por qualquer
   computador/dispositivo que deseje utilizar. Assinale a alternativa que contém 3 serviços em
   nuvem especializados no armazenamento de dados.

   a) DropBox, SkyDrive/OneDrive e Google Drive.
   b) Google Docs, DropBox e IBM Smart Business.
   c) SkyDrive/OneDrive, IBM Smart Business e Desktop Two.
   d) Desktop Two, Google Docs e DropBox
   e) Google Drive, Desktop Two e IBM Smart Business.

147. (FEPESE / MPE-SC – 2014) Selecione a alternativa que define corretamente o OneDrive
   (antigo SkyDrive).

   a) É o serviço de computação na nuvem empregado pelo MAC OS X v10.9.
   b) É um serviço de armazenamento online da Microsoft, utilizado com o MS Office 2013.
   c) É um disco virtual para armazenar documentos e fotos do iOS a partir da versão 7.
   d) É o nome dado ao espaço cedido pelo Google para armazenar arquivos online, na internet.


---

   e) É um equipamento de rede utilizado para comunicação de dados na internet.

148. (Prefeitura do Rio de Janeiro / Prefeitura do Rio de Janeiro – 2014) Uma das principais
   características da computação em nuvem é:

   a) possibilidade de usar aplicações diretamente da internet, sem que estejam instaladas no
   computador do usuário.

   b) compartilhamento de dados e maior dificuldade de trabalho colaborativo, pois todos os
   usuários acessam as aplicações e os dados na “nuvem”.

   c) impossibilidade de o usuário contar com alta disponibilidade, já que, se um servidor parar de
   funcionar, o serviço para de funcionar.

   d) maior preocupação com backup e controle de segurança, que fica a cargo do próprio usuário
   do serviço.

149. (FUNRIO / MPOG – 2013) O modelo de computação em nuvem em que, entre suas
   características básicas, o usuário não precisa dispor de hardware e software nos moldes
   tradicionais, ou seja, em seu data center, e a capacidade de processamento e de
   armazenamento é obtida remotamente da nuvem, é denominado:

   a) CaaS (Communication as a Service).
   b) DaaS (Development as a Service).
   c) IaaS (Infrastructure as a Service).
   d) PaaS (Plataform as a Service).
   e) SaaS (Software as a Service).


---

                      GABARITO
1.    LETRA A   41.   ERRADO     81.    ERRADO
2.    CORRETO   42.   CORRETO    82.    ERRADO
3.    CORRETO   43.   CORRETO    83.    CORRETO
4.    LETRA B   44.   CORRETO    84.    ERRADO
5.    CORRETO   45.   CORRETO    85.    CORRETO
6.    LETRA A   46.   LETRA E    86.    CORRETO
7.    CORRETO   47.   LETRA C    87.    ERRADO
8.    CORRETO   48.   ERRADO     88.    CORRETO
9.    LETRA A   49.   ERRADO     89.    ERRADO
10.   ERRADO    50.   ERRADO     90.    CORRETO
11.   ERRADO    51.   ERRADO     91.    CORRETO
12.   LETRA D   52.   LETRA C    92.    ERRADO
13.   LETRA B   53.   CORRETO    93.    ERRADO
14.   LETRA B   54.   CORRETO    94.    CORRETO
15.   LETRA A   55.   LETRA C    95.    ERRADO
16.   ERRADO    56.   LETRA A    96.    ERRADO
17.   CORRETO   57.   ERRADO     97.    CORRETO
18.   ERRADO    58.   ERRADO     98.    CORRETO
19.   ERRADO    59.   ERRADO     99.    ERRADO
20.   LETRA E   60.   CORRETO    100.   CORRETO
21.   ERRADO    61.   ERRADO     101.   ERRADO
22.   ERRADO    62.   CORRETO    102.   ERRADO
23.   CORRETO   63.   ERRADO     103.   CORRETO
24.   ERRADO    64.   ERRADO     104.   CORRETO
25.   ERRADO    65.   CORRETO    105.   CORRETO
26.   CORRETO   66.   ERRADO     106.   CORRETO
27.   ERRADO    67.   CORRETO    107.   LETRA A
28.   CORRETO   68.   CORRETO    108.   LETRA B
29.   CORRETO   69.   CORRETO    109.   LETRA B
30.   CORRETO   70.   ERRADO     110.   LETRA C
31.   CORRETO   71.   ERRADO     111.   LETRA E
32.   ERRADO    72.   ERRADO     112.   LETRA E
33.   ERRADO    73.   CORRETO    113.   LETRA E
34.   CORRETO   74.   CORRETO    114.   LETRA B
35.   CORRETO   75.   LETRA D    115.   LETRA B
36.   ERRADO    76.   LETRA D    116.   LETRA E
37.   ERRADO    77.   ERRADO     117.   LETRA C
38.   ERRADO    78.   ERRADO     118.   LETRA A
39.   ERRADO    79.   LETRA E    119.   LETRA B
40.   ERRADO    80.   CORRETO    120.   LETRA C


---

121.   LETRA A   131.   LETRA C   141.   LETRA C
122.   LETRA A   132.   LETRA E   142.   LETRA C
123.   LETRA D   133.   LETRA B   143.   LETRA D
124.   LETRA C   134.   LETRA D   144.   LETRA E
125.   LETRA E   135.   LETRA A   145.   LETRA D
126.   LETRA D   136.   LETRA B   146.   LETRA A
127.   LETRA E   137.   LETRA B   147.   LETRA B
128.   LETRA E   138.   LETRA A   148.   LETRA A
129.   LETRA E   139.   LETRA C   149.   LETRA C
130.   LETRA D   140.   LETRA C


---
