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
arquivo_origem: Aula 05_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '05'
titulo_aula: Índice
---

# Índice

Índice
1)  Análise de Informações - Banco de Dados - Conceitos Básicos


)  Análise de Informações - Banco de Dados - Características de BDs                                                                                                                        13

3)  Análise de Informações - Banco de Dados - Transações de BDs                                                                                                                             17
)  Análise de Informações - Banco de Dados - Personagens Principais                                                                                                                        22
..............................................................................................................................................................................................

)  Análise de Informações - Banco de Dados - Arquitetura ANSI-SPARC                                                                                                                        24

6)  Análise de Informações - Banco de Dados - Projeto de Banco de Dados                                                                                                                     31
..............................................................................................................................................................................................

)  Resumo - Análise de Informações - Banco de Dados                                                                                                                                        33

8)  Mapa Mental - Análise de Informações - Banco de Dados                                                                                                                                   40
)  Análise de Informações - Banco de Dados - Questões Comentadas                                                                                                                           44
..............................................................................................................................................................................................

)   Lista de Questões - Análise de Informações - Banco de Dados - Multibancas                                                                                                             95


---

                                   APRESENTAÇÃO
Futuros colegas de serviço público, iniciamos aqui a nossa aula de conceitos básicos de banco de
dados. Galera, essa disciplina pode ser bastante extensa e complexa, por outro lado o nosso
objetivo aqui é simplesmente entender seus conceitos mais fundamentais. Fiquem relaxados que
ao final dessa aula vocês vão dizer: “Ahhhh... fácil demais, professor!”. É sério, assunto tranquilo e
interessante! Prometo que vocês vão curtir...

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

                                   BANCO DE DADOS
Conceitos Básicos
                                                                               INCIDÊNCIA EM PROVA: baixíssima

Galera, agora vamos falar sobre Banco de Dados! Como nós sempre fazemos, vamos discutir o que
é o conceito e depois vamos entrar em detalhes. Primeiro, veremos a definição acadêmica:

                                             DEFINIÇÃO

                 Um banco de dados é uma coleção de dados relacionados.


Professor, essa definição é bastante genérica! É verdade! Se formos seguir essa definição, as palavras
que compõem este livro eletrônico podem ser consideradas dados relacionados e, portanto,
constituem um banco de dados. No entanto, o uso comum do termo banco de dados
normalmente é mais restrito e tem as seguintes propriedades implícitas:

 Propriedade #1: um banco de dados representa algum aspecto do mundo real – algumas
  vezes chamado de Minimundo ou Universo de Discurso. As mudanças no minimundo são
  refletidas no banco de dados;


---

 Propriedade #2: um banco de dados é uma coleção logicamente coerente de dados inter-
  relacionados com algum significado inerente. Galera, se você tiver uma variedade aleatória de
  dados, você não tem um banco de dados;

 Propriedade #3: um banco de dados é projetado, construído e populado com dados para uma
  finalidade específica. Possui um grupo definido de usuários e algumas aplicações específicas
  nas quais esses usuários estão interessados.

A definição ficou mais clara agora? Um banco de dados representa algum aspecto do mundo real
por meio de dados logicamente relacionados para uma finalidade específica. Quando pensamos
em nosso dia-a-dia, é possível notar que interagimos com bancos de dados o tempo inteiro – desde
quando sacamos dinheiro em um caixa eletrônico até quando compramos um produto em uma loja
online ou visualizamos nossas redes sociais.


     (SABESP – 2018) Banco de dados é:

     a) um aplicativo que manipula dados inter-relacionados.
     b) um sistema de nuvens híbridas utilizados em sistemas bancários.
     c) um conjunto de dados necessários para o correto funcionamento do sistema
     operacional.
     d) um conjunto de dados que visa manter a integridade e segurança do sistema.
     e) uma coleção de dados inter-relacionados, representando informações sobre um
     domínio específico.
     _______________________
     Comentários: (a) Errado, banco de dados não é um aplicativo; (b) Errado, banco de dados não é um sistema de nuvens híbridas;
     (c) banco de dados não tem nenhuma relação direta com o sistema operacional; (d) Errado, isso é papel do SGBD e, não, do
     banco de dados em si; (e) Correto, um banco de dados representa algum aspecto do mundo real por meio de dados logicamente
     relacionados para uma finalidade específica (Letra E).

Nós podemos afirmar que – hoje em dia – os bancos de dados desempenham um papel crítico em
quase todas as áreas em que os computadores são usados, incluindo negócios, comércio
eletrônico, engenharia, medicina, genética, direito e até... concurso! De toda forma, estamos
avançando demais sem antes explicar um detalhe importante da nossa definição. Nós vimos que um
banco de dados é uma coleção de dados relacionados, mas o que são dados?

                             Dados são fatos conhecidos que poderiam ser registrados e que
                             possuiriam significado implícito. Como assim, professor? Nomes, números
                             de telefone, endereços das pessoas que você conhece! Você pode ter
                             registrado esses dados em uma agenda ou, talvez, os tenha armazenado em
                             um disco rígido, usando um computador e um software como Microsoft
                             Access ou Microsoft Excel. Agora olha a sacada: se o que você está
                             registrando representam fatos e esses fatos possuem algum significado
                             implícito, você está armazenando... dados!


---

Agora, muito cuidado! Alguns tratam dados e informações como sinônimos, mas em nosso
contexto são conceitos diferentes. Para entender o que é um banco de dados, é muito importante
saber a diferença entre essas duas palavras:

 Dados são fatos brutos, em sua forma primária – e, muitas vezes, os dados podem não fazer
  sentido sozinhos;

 Informações consiste no agrupamento de dados de forma organizada para fazer sentido e gerar
  conhecimento.

Galera, nós podemos afirmar que um banco de dados pode ter qualquer tamanho e
complexidade. Querem ver uns exemplos? Em relação à complexidade, uma lista telefônica pode
ser considerada um banco de dados com uma estrutura bem simples. Em relação ao tamanho, o
catálogo computadorizado de uma grande biblioteca pode conter meio milhão de livros
organizados sob diferentes categorias.

Um banco de dados de tamanho e complexidade ainda maior é mantido pela Receita Federal
para monitorar formulários de imposto de renda preenchidos pelos contribuintes. Se
considerarmos que existem 100 milhões de contribuintes e que cada um deles preenche uma média
de cinco formulários com aproximadamente 400 caracteres cada um, teríamos um banco de dados
de 100 x 106 x 400 x 5 caracteres (bytes) de informação.

Outra característica importante de um banco de dados é que ele pode ser gerado e mantido
manualmente, ou pode ser computadorizado. Por exemplo: um fichário com as fichas de papel
dos alunos de uma academia é um banco de dados que pode ser criado e mantido manualmente.
Um banco de dados computadorizado pode ser criado e mantido por programas desenvolvidos
especificamente para essa tarefa ou por um sistema gerenciador de banco de dados.

     PODE TER QUALQUER TAMANHO E                                       PODE SER MANUAL OU
            COMPLEXIDADE                                          COMPUTADORIZADO (MAIS COMUM)

Vamos resumir: um banco de dados é uma coleção de dados logicamente relacionados que
representam algum aspecto do mundo real, podendo ter qualquer tamanho e complexidade, e
podendo ser manual ou computadorizado. Aliás, quanto maior e mais complexo um banco de


---

dados, maior a necessidade de organizar e gerenciar as informações de modo que os usuários
possam consultar, recuperar e atualizar os dados quando necessário. Questões...


         (CGM/PB – 2018) Um banco de dados é uma coleção de dados que são organizados de
         forma randômica, sem significado implícito e de tamanho variável, e projetados para
         atender a uma proposta específica de alta complexidade, de acordo com o interesse dos
         usuários.
         _______________________
         Comentários: um banco de dados é uma coleção de dados que são organizados de forma randômica coerente, sem com
         significado implícito e de tamanho variável, e projetados para atender a uma proposta específica de alta variável complexidade,
         de acordo com o interesse dos usuários (Errado).

         (SERPRO – 2013) Um banco de dados é formado por uma coleção de dados sem um
         relacionamento lógico, com um significado interpretado por uma aplicação ou um
         programa computacional.
         _______________________
         Comentários: na verdade, os dados possuem um relacionamento lógico e coerente – não se trata de uma coleção de dados
         aleatórios (Errado).

Pessoal, nos parágrafos anteriores, nós passamos direto por um conceito muito importante. Vocês
perceberam? Eu estou falando sobre o Sistema Gerenciador de Banco de Dados (SGBD)!

                                                                               DEFINIÇÃO

   Um sistema gerenciador de banco de dados é uma coleção de programas que permite
                   aos usuários criar e manter um banco de dados.


O SGBD é uma coleção de programas que facilita o processo de definição, construção,
manipulação, compartilhamento, proteção e manutenção de um banco de dados. Em detalhes:

1. Definição: processo que envolve especificar os tipos, estruturas e restrições dos dados a serem
   armazenados1;

2. Construção: processo que envolve armazenar os dados em algum meio controlado pelo sistema
   gerenciador de banco de dados;

1 Detalhe importante: a definição/descrição do banco de dados fica armazenada no próprio banco de dados na forma de um catálogo ou dicionário de dados – esses dados sobre o banco
de dados são chamados de metadados.


---

3. Manipulação: processo que inclui funções como consulta – para recuperar dados específicos;
   atualização – para refletir mudanças no minimundo; e geração de relatórios;

4. Compartilhamento: processo que permite que diversos usuários e programas acessem um
   banco de dados simultaneamente;

5. Proteção: processo que inclui a proteção do sistema contra defeitos (ou falhas) de hardware ou
   software, e proteção de segurança contra acesso não autorizado ou malicioso;

6. Manutenção: processo que permite a evolução à medida que os requisitos mudam com o
   tempo, uma vez que um banco de dados pode ter um ciclo de vida de muitos anos.

Por meio de Sistemas Gerenciadores de Bancos de Dados, os dados podem ser compartilhados, a
redundância pode ser controlada, inconsistências podem ser evitadas, a integridade dos dados
pode ser mantida, a segurança pode ser aperfeiçoada, requisitos conflitantes podem ser
balanceados, padrões podem ser utilizados e há suporte e controle de transações/usuários
concorrentes. Enfim... há diversas vantagens na sua utilização!

Galera, existem diveeeersos Sistemas Gerenciadores de Banco de Dados no mercado – como é
possível ver na imagem abaixo: SQLServer, Oracle, DB2, MySQL, Firebird, PostgreSQL, etc. Mais
um detalhe: quando que vocês virem um cilindro como esse apresentado na imagem abaixo, em
geral ele está representando um Banco/Base de Dados! Notem abaixo que SGBD é um programa
que permite que usuários manipulem uma base de dados.

     APLICAÇÕES 
     APLICAÇÕES 
     APLICAÇÕES 
     APLICAÇÕES 
Galera, nós já vimos o que é um Banco de Dados e o que é um Sistema Gerenciador de Banco de
Dados! Agora falta ver a parte de aplicações: as aplicações são sistemas, programas ou softwares
que enviam consultas ou solicitações a um SGBD, que por sua vez acessa um banco de dados.
Quer ver um exemplo? Suponha que você passou em um concurso maneiro e decidiu trocar de carro
(primeira coisa que eu fiz quando passei!).


---

Você sabe que não pode vender um carro com pendências de multas. Logo, você acessa a página
do DETRAN para verificar se há multas pendentes e, caso haja, buscar orientações sobre como
proceder para receber uma segunda via e efetuar o pagamento. Para resolver essa segunda parte,
você poderia acessar a página a seguir:

           http://www.detran.df.gov.br/emissao-de-segunda-via-de-boleto-de-multa-para-pagamento

                                     Note que você visualizará algo semelhante à imagem ao lado,
                                     isto é, uma página contendo um texto que fornece orientações
                                     sobre emissão de segunda via de boleto de multa; descrição;
                                     requisitos e documentos necessários; custo de serviço; local,
                                     horário e forma de prestação de serviço; etapas para o
                                     processamento de serviço; prazo para execução do serviço; e
                                     preferência de atendimento. Perceba também que para
                                     visualizar essas informações, você não tem que fornecer
                                     nenhum dado de entrada – basta acessar a página e visualizar
                                     as informações.

Sabe o que isso significa? Significa que essa página não possui nenhum processamento, ela é uma
página estática que fornece apenas informações sem exigir nenhuma entrada e que será sempre a
mesma para qualquer pessoa que acessá-la! Bacana, professor... até que está fácil até agora! Pois
é, agora vamos acrescentar algumas coisas. Você quer mesmo é visualizar se o seu carro possui
alguma multa e, não, informações genéricas. O que fazer? Você pode acessar outra página:

                             http://www.detran.df.gov.br/2-via-de-multas-html

                                              Essa é uma página como a anterior, no entanto ela
                                              possui uma diferença fundamental! O que, professor? O
                                              que, professor? O que, professor? Ela possui uma
                                              aplicação dentro dela! Isso mesmo, dentro da página,
                                              há uma aplicação (que é basicamente um programa
                                              como Word, Adobe, etc, mas que roda dentro de uma
                                              página web) embutida (também chamada de embedada
                                              ou embedded) e você nem percebe porque parece que é
                                              só uma página normal como qualquer outra. Vocês
                                              querem uma prova do que eu estou falando? Façam um
                                              teste comigo! Acessem o endereço abaixo e vocês verão
                                              apenas a aplicação e, não mais, a página com cabeçalho
                                              e rodapé ao redor. Entrem aí e confiram:

        http://getran.detran.df.gov.br/site/multas/consultas/filtroplacarenavam-consultaveiculo.jsp


---

Pois é, e agora vem a sacada para entender tudo! Quando você fornece entradas para a aplicação
(Ex: Placa e RENAVAM) e clica em consultar, ocorre um processamento! Que processamento seria
esse? A aplicação vai pegar os dados que você forneceu e vai acessar o SGBD! O SGBD fará uma
consulta no Banco de Dados a partir dos dados fornecidos e trará de volta a segunda via de
multas pendentes para o carro informado. É como se o SGBD conversasse com o Banco de Dados:

      – SGBD: Banco de Dados, eu preciso de um help!
      – BD: Diz aí!
      – SGBD: Eu quero fazer uma consulta na sua base.
      – BD: O que seria?
      – SGBD: Quero saber de todas as multas que o carro cuja Placa é X e o RENAVAM é Y tem!
      – BD: Vai na fé!

                                           Galera, é claro que eu abstraí várias coisas nessa
                                           explicação que não importa para vocês, mas eu só preciso
                                           que vocês entendam a função das aplicações, dos SGBDs
                                           e dos próprios bancos de dados. No fim das contas, as
                                           aplicações são programas que acessam um banco de
                                           dados por meio de consultas ou solicitações enviadas a
                                           um SGBD. Fechado? Para finalizar, é importante ressaltar
                                           que a união do BD com SGBD é chamada de Sistema de
                                           Banco de Dados (SBD).

 SBD = BD + SGBD + [aplicações] Lembrando que aplicações não são obrigatórias!


---

(Banco da Amazônia – 2010) Um SGBD é uma coleção de programas que permite aos
usuários criar e manipular uma base de dados. De forma equivalente, é um sistema de
software de propósito geral que facilita o processo de definir, construir e manipular bases
de dados de diversas aplicações.
_______________________
Comentários: essa definição está quaaaaase perfeita! O ideal era usar o termo “uso geral” e, não, “propósito geral”; mas não
invalida a questão (Correto).

(MPE/MA – 2013) Com relação aos Sistemas Gerenciadores de Bancos de Dados (SGBD),
pode-se dizer que se constituem em um:

a) conjunto de dados armazenados em discos magnéticos.
b) conjunto de programas de computador capaz de processar conjuntos de dados.
c) aplicativo disponibilizado por alguns sistemas operacionais.
d) software destinado exclusivamente ao projeto dos modelos de bancos de dados.
e) software para apoio a programas de geração de cronogramas.
_______________________
Comentários: trata-se de um conjunto de programas de computador capaz de processar conjuntos de dados (Letra B).


---

Características de Banco de Dados
                                                                                   INCIDÊNCIA EM PROVA: baixa


Nos dias atuais, nós utilizamos uma abordagem de banco de dados para salvaguarda e consulta de
dados, no entanto isso era feito por meio de arquivos esparsos antigamente. Arquivos? Sim!
Imaginem duas áreas que compõem uma escola: departamento financeiro e departamento
pedagógico. O primeiro cuida de mensalidades e pagamentos, e o segundo cuida das notas de
provas, médias e outras avaliações. Vocês sabem como era a abordagem de arquivos nesse caso?

O departamento financeiro e o departamento pedagógico possuíam seus dados armazenados em
diversos arquivos e possuíam diversas aplicações que acessavam, consultavam e manipulavam
esses arquivos. Exemplo: o departamento financeiro possuía um arquivo de dados pessoais dos
alunos e outro arquivo de pagamentos de mensalidades dos alunos; já o departamento pedagógico
possuía um arquivo de dados pessoais dos alunos e outro arquivo de notas de provas.

Vocês já sacaram o problema, não é? Embora ambos os departamentos estejam interessados em
dados sobre os alunos, cada um mantém arquivos separados e programas para manipular esses
arquivos. Existe uma clara redundância de informações, o que resulta em desperdício de espaço
de armazenamento em esforços redundantes para manter os dados comuns atualizados.
Vamos imaginar uma situação hipotética...

O aluno Renato da Costa mentiu a idade na hora de se matricular na escola: disse que tinha 15 anos,
mas ele tinha na verdade 18 anos! Ele decide contar a verdade e pede que seus dados cadastrais
sejam atualizados. Nesse caso, ele terá que ir até o departamento pedagógico e pedir para ajustar
sua data de nascimento e depois ir até o departamento financeiro e pedir para ajustá-la também.
Ou seja, nós desperdiçamos espaço e reduzimos nossa eficiência.

Quando utilizamos um banco de dados em vez de arquivos esparsos, um único repositório
mantém dados que são definidos uma vez e depois acessados por outras entidades. Outra coisa:
no sistema de arquivos, cada aplicação é livre para nomear os elementos dos dados
independentemente. Exemplo: o departamento de pessoal pode ter chamado os contatos
telefônicos de “TELEFONES” e o departamento financeiro pode ter chamado de “CONTATOS”.

Na abordagem de bancos de dados, os nomes ou rótulos de dados são definidos uma vez com o
mesmo nome, e utilizados repetidamente por consultas, transações e aplicações – nós vamos ver
isso com clareza mais à frente. Pessoal, vamos falar agora um pouquinho sobre as principais
características da abordagem de banco de dados versus a abordagem de processamento de
arquivos esparsos – são basicamente quatro:

                             CARACTERÍSTICAS DA ABORDAGEM DE BANCO DE DADOS
                       Natureza de autodescrição de um sistema de banco de dados
                        Isolamento entre programas e dados, e abstração de dados
                                 Suporte de múltiplas visões dos dados


---

                               Compartilhamento de dados e processamento de transação multiusuário


Natureza de autodescrição de um sistema de banco de dados

A palavra “autodescrição” já dá a dica! Os bancos de dados não contêm apenas dados – eles
contêm também uma definição ou descrição completa da estrutura e restrições desses dados.
Então, se ele armazena uma tabela com dados sobre as notas de um aluno, ele também armazenará
os dados sobre essa tabela. Que dados, professor? Ele armazena qual o nome da tabela, o nome de
suas colunas, o tamanho de cada coluna, entre outros.

Vejam que a imagem acima não traz informações sobre os alunos, você não consegue ver nenhum
nome de aluno, nem idade, nada disso. A imagem acima traz informações sobre a tabela que
armazena dados de alunos. Os bancos de dados possuem um catálogo1 com informações de cada
tabela, sendo que as informações armazenadas no catálogo são chamadas de metadados, uma vez
que trazem dados sobre os dados.

Isolamento entre programas e dados, e abstração de dados

Vocês se lembram da imagem de algumas páginas atrás em que nós definimos Aplicações, SGBD e
Banco de Dados? Pois é, tudo separado bonitinho! No processamento de arquivos, as aplicações
eram misturadas com a estrutura de arquivos. É por essa razão que dizemos que há um
isolamento entre programas e dados. Se você modifica suas aplicações, não interfere nos dados;
se você modifica seus dados, não interfere nas aplicações. Prosseguindo...

Vocês sabem o que quer dizer abstração? Essa é uma palavra muito comum na área de tecnologia da
informação e é bom que vocês saibam responder de bate-pronto: abstração é a subtração de
detalhes. Como consequência, podemos concluir que quanto mais abstrato, menos detalhes; e
quanto menos abstrato, mais detalhes. A seguir temos uma imagem aérea da Catedral de Brasília.
Pergunta: qual delas é mais abstrata? Da direita! Por que? Porque tem menos detalhes.

A característica que permite a independência de dados da aplicação e a independência da
operação da aplicação é chamada de abstração de dados. Um SGBD oferece aos usuários uma
representação conceitual de dados que não inclui muitos dos detalhes de como os dados são

1 Catálogo de Dados é também chamado de Dicionário de Dados.


---

armazenados ou como as operações são implementadas. De maneira informal, um modelo de
dados é uma abstração de dados usada para oferecer essa representação conceitual.

A abstração é a base para se conseguir o isolamento entre programas e dados. Por que? Porque a
aplicação não precisa de detalhes do SGBD – ela precisa apenas de uma interface. Pensando em
um exemplo mais grosseiro: quando você quer que os correios façam uma entrega para outra
pessoa, você não quer saber se eles vão enviar de carro, navio ou avião – você só precisa ter a
garantia de que a entrega seja realizada.

Suporte de Múltiplas Visões de Dados

Pessoal, eu falei para vocês que o banco de dados funciona como um repositório central de dados –
diferente dos arquivos. Dessa forma, é possível que várias aplicações tentem acessá-lo e cada
uma pode ter uma necessidade diferente. Imagine que uma determinada aplicação não precise
visualizar toooodos os dados – pode ser que ela precise acessar apenas alguns. Logo, nós podemos
afirmar que aplicações diferentes exigem pontos de vista ou visões diferentes do banco.

Uma visão (ou view) é, em geral, um subconjunto do banco de dados. Dessa forma, se você deseja
visualizar apenas uma parte dos dados de uma tabela, você pode criar uma visão personalizada
apenas para a sua aplicação ou para um conjunto de usuários. Eu sei que isso pode não estar tão
claro agora, mas ficará mais claro quando prosseguirmos com a teoria. Guardem apenas que um
banco de dados oferece suporte a múltiplas visões de dados.

Compartilhamento de Dados e Processamento de Transação

Um SGBD multiusuário é todo aquele SGBD que suporta que múltiplas aplicações – também
chamadas de usuários – acessem o banco de dados ao mesmo tempo. Galera, isso é essencial se o
dado para múltiplas aplicações estiver sendo mantido em um único banco de dados. O SGBD
precisa incluir um software de controle de concorrência para garantir que vários usuários
interajam simultaneamente com o banco de dados sem problemas.

Imagine a seguinte situação hipotética: o departamento de finanças e o departamento pedagógico
da escola tem acesso a mesma tabela de dados pessoais dos alunos. Concordam? Agora imaginem


---

que José, do Departamento de Finanças, tente atualizar um dado pessoal ao mesmo tempo
que Maria, do Departamento Pedagógico, também tenta atualizar exatamente o mesmo dado.
O que vai acontecer? Merd#%@, professor! Nada! Nadica de nada...

Sabe por quê? Porque o SGBD possui um software de controle de concorrência para garantir que
vários usuários tentando atualizar o mesmo dado façam isso de uma maneira controlada, de modo
que o resultado dessas transações seja correto. Imagine você tentando reservar o assento na janela
em um voo internacional ao mesmo tempo que outra pessoa esteja tentando reservar o mesmo
assento. O SGBD garante que operações concorrentes operem de maneira correta!

De acordo com outro doutrinador (C. J. Date), uma abordagem de banco de dados possui os
seguintes benefícios: o dado pode ser compartilhado; a redundância pode ser reduzida;
inconsistências podem ser evitadas; pode-se utilizar o suporte a transações; a integridade pode ser
mantida; a segurança pode ser aperfeiçoada; requisitos conflitantes podem ser balanceados; e
padrões podem ser utilizados.

Esse renomado autor também considera um banco de dados como um repositório central de um
conjunto de arquivos de modo que eles possam ser relacionados.


     (UNIRIO – 2014) Dentre as principais características da abordagem de bancos de dados,
     quando comparada à abordagem de processamento de arquivos, NÃO se inclui:

     a) natureza autodescrita.
     b) suporte a múltiplas visões dos dados.
     c) processamento de transações multiusuário.
     d) compartilhamento dos dados para múltiplos usuários.
     e) liberdade de cada aplicação nomear e estruturar os itens de dados armazenados de
     forma independente.
     _______________________
     Comentários: todas as opções estão corretas, exceto a última – liberdade de cada aplicação nomear e estruturar os itens de
     dados armazenados de forma independente (Letra E).

     (IF/RS – 2016) NÃO faz parte das características de utilização de Bancos de Dados:

     a) Suporte para as múltiplas visões de dados.
     b) Auto-atendimento sob demanda.
     c) Isolamento entre os programas e os dados (abstração de dados).
     d) Natureza autodescritiva do Banco de Dados.
     e) Compartilhamento de Dados e processamento de transações de multiusuários.
     _______________________
     Comentários: nós acabamos de ver as quatro características de utilização de um banco de dados e auto-atendimento sob
     demanda não está entre elas – essa seria uma característica de computação em nuvem (Letra B).


---

Transações de Banco de Dados
                                                                                      INCIDÊNCIA EM PROVA: ALTA


Galera, eu passei direto em uma palavrinha importantíssima no parágrafo anterior: transação. Uma
transação é um programa em execução ou processo que inclui um ou mais acessos ao banco de
dados, como fazer a leitura de dados ou inserir, excluir e atualizar dados do banco. Ela executa
um acesso logicamente correto a um banco de dados quando ela é executada de forma completa e
sem interferência de outras transações. Vejamos suas propriedades:

Atomicidade

Vocês se lembram que antigamente os químicos acreditavam que os átomos eram indivisíveis? A ideia
aqui é semelhante: uma transação é uma unidade de processamento atômica que deve ser
executada integralmente até o fim ou não deve ser executada de maneira alguma – é tudo ou
nada! Se, por qualquer razão que seja, uma transação não for completada, os efeitos da transação
no banco de dados devem ser retroagidos. Dá um exemplo aí, professor...

Imaginem que você está sacando uma grana em um caixa eletrônico. Você insere o cartão, digita a
sua senha, informa o valor e a máquina começa a processar a transação de saque do seu dinheiro.
No entanto, no momento exato do processamento, ocorre uma falha interna na máquina. Se após
isso ocorrer, só há duas possibilidades: ou o dinheiro não sai, mas também não debita da sua
conta; ou o dinheiro sai e também debita da sua conta. O que não pode acontecer?

O que jamais pode acontecer – devido à propriedade de atomicidade de uma transação – é o
dinheiro não sair e mesmo assim ser debitado da sua conta; ou o dinheiro sair e não ser debitado da
sua conta. Dessa forma, se tudo ocorrer bem, as operações de gravação de uma transação devem
ser confirmadas – o que chamamos de COMMIT; caso ocorra alguma falha, as operações de
gravação de uma transação devem ser desfeitas – o que chamamos de ROLLBACK.


     (TCE/CE – 2015) Em um Sistema de Gerência de Banco de Dados (SGBD), existe um
     conjunto de procedimentos (transações). Mediante a transação definida a seguir,
     assinale a alternativa que a explica corretamente:

     "Todas as ações que compõem a unidade de trabalho da transação devem ser concluídas com
     sucesso, para que seja efetivada. Se durante a transação qualquer ação que constitui unidade de
     trabalho falhar, a transação inteira deve ser desfeita (rollback). Quando todas as ações são
     efetuadas com sucesso, a transação pode ser efetivada e persistida em banco (commit)"

     a) Consistência
     b) Isolamento
     c) Durabilidade
     d) Atomicidade


---

     _______________________
     Comentários: A descrição apresentada na transação refere-se ao conceito de atomicidade, que é uma propriedade fundamental
     das transações em um Sistema de Gerenciamento de Banco de Dados (SGBD). A atomicidade garante que todas as ações
     realizadas dentro de uma transação sejam tratadas como uma unidade indivisível. Isso significa que todas as ações devem ser
     concluídas com sucesso para que a transação seja efetivada (commit), e caso ocorra algum erro em qualquer ação, a transação
     deve ser desfeita (rollback), garantindo a consistência dos dados (Letra D).

Consistência

A execução de uma transação deve levar o banco de dados de um estado consistente a um outro
estado consistente. E o que seria um estado de consistente? É aquele que respeita todas as regras e
restrições de integridade dos dados. Imaginem, por exemplo, que nós temos uma tabela que guarda
o CPF dos alunos de uma escola! Pode haver dois alunos com o mesmo CPF? Não, se essa for uma
restrição do banco de dados, transações não podem desrespeitá-la. Entendido?


     (UDESC – 2010) A afirmação “o DBA deve definir todas as restrições de integridade para
     assegurar transições válidas para os dados” se refere a uma ação tomada para garantir
     uma das propriedades ACID de uma transação. Assinale a alternativa que apresenta o
     nome dessa propriedade.

     a) Isolamento
     b) Persistência
     c) Consistência
     d) Atomicidade
     e) Durabilidade
     _______________________
     Comentários: DBA é o Data Base Administrator ou Administrador de Banco de Dados. Ademais, a afirmação menciona a
     necessidade de definir restrições de integridade para garantir transações válidas para os dados. Essa ação está relacionada à
     propriedade ACID denominada "Consistência". A consistência garante que apenas transações válidas, que mantenham a
     integridade dos dados de acordo com as restrições definidas, sejam executadas no banco de dados (Letra C).

Isolamento

Trata-se de um conjunto de técnicas que tentam evitar que transações paralelas interfiram umas
nas outras, fazendo com que o resultado de várias transações em paralelo seja o mesmo resultado
que essas transações teriam caso fossem executadas sequencialmente (uma após a outra).
Operações exteriores a uma dada transação jamais verão esta transação em estados
intermediários.

De outra forma, podemos dizer que uma transação deve parecer executar independentemente
das demais, mesmo que diversas transações estejam sendo executadas concorrentemente. Em
sistemas multiusuários, várias transações podem tentar alterar simultaneamente o mesmo dado
em um banco de dados, o que pode ocasionar falhas como locks (travas) ou deadlocks (impasses).
Exemplo: exatamente no mesmo instante, dois usuários tentam pagar um mesmo boleto.


---

        (AL/MG – 2014) Propriedade das transações de banco de dados, imposta pelo
        subsistema de controle de concorrência, na qual a execução de uma transação não deve
        ser interferida por quaisquer outras transações que acontecem simultaneamente, é
        denominada:

        a) Atomicidade.
        b) Consistência.
        c) Durabilidade.
        d) Isolamento.
        _______________________
        Comentários: a propriedade descrita na questão é denominada "Isolamento", que é uma das propriedades ACID (Atomicidade,
        Consistência, Isolamento e Durabilidade) das transações em um SGBD. O isolamento garante que a execução de uma transação
        ocorra de forma isolada e que não seja interferida por outras transações que estão ocorrendo simultaneamente. Essa
        propriedade garante que cada transação seja executada como se fosse a única transação em execução, evitando problemas de
        concorrência, como leituras sujas, leituras não repetíveis e escritas fantasmas (Letra D).

Durabilidade

Os efeitos de uma transação em caso de sucesso devem persistir1 no banco de dados mesmo
em casos de quedas de energia, travamentos ou erros. Essa propriedade garante que os
resultados de uma transação serão permanentes e estarão disponíveis em definitivo, podendo ser
desfeitos somente por outra transação subsequente. Para se defender contra a perda de energia,
as transações (ou seus efeitos) devem ser registradas em uma memória não volátil.


        (FINEP – 2011) O representante de um fabricante de SGBD respondeu assim à pergunta
        de um cliente sobre o que aconteceria às transações efetivadas, caso viesse a faltar
        energia:

        “Não se preocupe, o nosso produto mantém um log duplo de transações, armazenados em discos fisicamente
        separados. Quando o núcleo do SGBD for novamente ativado (colocado no ar), todas as transações
        efetivadas, mas cujas tabelas não tenham sido alteradas, serão reprocessadas, de modo que a base de dados
        estará totalmente consistente quando o sistema retornar.”

        A situação descrita acima relaciona-se à propriedade a que uma transação deve atender
        denominada:

        a) atomicidade
        b) consistência
        c) isolamento
        d) durabilidade


1 Persistir, professor? Sim, galera! Esse é o termo utilizado no contexto de banco de dados para o armazenamento de dados de modo que eles possam ser
recuperados ou lidos posteriormente – você grava os dados e eles persistem no mesmo local!


---

       e) concorrência
       _______________________
       Comentários: a situação descrita relaciona-se à propriedade da transação denominada "Durabilidade". A durabilidade garante
       que, uma vez que uma transação tenha sido confirmada (commit), as alterações feitas por essa transação sejam permanentes e
       persistam mesmo em caso de falhas, como falta de energia. Nesse caso, o SGBD mantém um log duplo de transações em discos
       fisicamente separados, permitindo que as transações efetivadas sejam reprocessadas após a reinicialização do sistema. Isso
       garante que a base de dados esteja totalmente consistente e que todas as transações confirmadas sejam recuperadas
       corretamente (Letra D).

Vamos colocar tudo em um contexto agora! Vamos imaginar uma transação simples:
transferência de dinheiro de uma conta para outra. Nesse caso, temos que:

       Atomicidade: se um débito for realizado com sucesso em uma conta, o crédito
        correspondente é realizado na outra conta;
       Consistência: a soma dos valores em ambas as contas é o mesmo no começo e no final da
        transação;
       Isolamento: outra transação visualiza o dinheiro a ser transferido em uma conta ou em
        outra, mas jamais em ambas ou em nenhuma;
       Durabilidade: as mudanças realizadas em uma conta não serão desfeitas após terem sido
        finalizadas com sucesso.

                                                  PROPRIEDADES DE UMA TRANSAÇÃO
                            Uma transação é uma unidade de processamento atômica que deve ser executada
 A        ATOMICIDADE       integralmente até o fim ou não deve ser executada.
                            – Responsável: Subsistema de Recuperação.
                            A execução de uma transação deve levar o banco de dados de um estado consistente a um
 C       CONSISTÊNCIA       outro estado consistente.
                            – Responsável: Programador ou Módulo de Restrições de Integridade.
                            Cada transação deve parecer executar isoladamente das demais, embora diversas
  I       ISOLAMENTO        transações possam estar executando concorrentemente.
                            – Responsável: Subsistema de Controle de Concorrência.
                            Os efeitos de uma transação em caso de sucesso devem persistir no banco de dados mesmo
 D       DURABILIDADE       em casos de quedas de energia, travamentos ou erros.
                            – Responsável: Subsistema de Recuperação.

       (ALGÁS – 2012) O acrônimo ACID refere-se às quatro propriedades básicas de um SGBD.
       Qual o significado desse acrônimo?

       a) Atomicidade, consistência, isolamento e durabilidade.
       b) Atomicidade, consistência, integridade e durabilidade.
       c) Atomicidade, consistência, integridade e densidade.
       d) Abstração, consistência, integridade e densidade.
       e) Abstração consistência, isolamento e durabilidade.
       _______________________
       Comentários: as quatro propriedades básicas são Atomicidade, Consistência Isolamento e Durabilidade (Letra A).


---

(TRE/AM – 2014) Transação é um conjunto de procedimentos que é executado num
banco de dados, que para o usuário é visto como uma única ação. A integridade de uma
transação depende de quatro propriedades, conhecidas pela sigla:

a) CISC
b) ADSL
c) CMOS
d) ACID
_______________________
Comentários: as quatro propriedades básicas são ACID – Atomicidade, Consistência Isolamento e Durabilidade (Letra D).


---

Principais Papeis (Roles)
                                                                              INCIDÊNCIA EM PROVA: baixíssima


Pessoal, vamos falar rapidamente sobre dois papeis importantes do contexto em que estamos
estudando: Administrador de Banco de Dados e Administrador de Dados! Eu gosto de dar rosto
e nome aos papeis porque assim vocês memorizam com mais facilidade. Dito isso, em nosso
contexto, o Administrador de Banco de Dados será o Neymar Júnior (famoso Cai-Cai) e o
Administrador de Dados será o Adenor Bachi (famoso Tite).

Antes de falar sobre as atribuições de cada um, é importante ressaltar que – em um pequeno banco
de dados pessoal – uma única pessoa pode exercer ambos os papeis e definir, construir e manipular
seu banco de dados. A partir do momento em que o banco de dados aumenta tamanho e
complexidade, e passa a ser compartilhado com outros bancos de dados e aplicações dentro de
uma empresa, torna-se necessário separar essas atribuições.

Administrador de Banco de Dados

Em qualquer organização onde muitas pessoas utilizam os mesmos recursos, há uma necessidade
de um administrador principal para supervisionar e gerenciar tais recursos. De que recursos você está
falando, professor? Bem, o próprio Banco de Dados; o Sistema Gerenciador de Banco de Dados
(SGBD); e os softwares ou aplicações que utilizam esse banco de dados. Sabe quem faz tudo isso?
O Administrador de Banco de Dados (DBA – Data Base Administrator).

O DBA (Neymar Júnior) tem diversas responsabilidades! Ele é o responsável por instalar o SGBD;
por autorizar o acesso ao banco de dados; por coordenar e monitorar sua performance; por adquirir
recursos de software e hardware conforme a necessidade; por problemas, como falhas na
segurança e demora na execução; assegurar-se de que os backups apropriados estão sendo
feitos e estão íntegros; etc. Tudo isso na conta do Cai-Cai...


---

Administrador de Dados

Assim como o Administrador de Banco de Dados está mais preocupado com o Banco de Dados
em si, o Administrador de Dados está mais preocupado com os dados em si. O Administrador de
Dados (AD) busca planejar, documentar, gerenciar e integrar os recursos de informação
corporativos. Ele deve entender bem o contexto da organização de modo que ele conheça – se
possível – todos os dados armazenados.

O AD (Adenor Bachi) também teria diversas responsabilidades! Ele seria o responsável por
identificar os dados a serem armazenados; por escolher estruturas apropriadas para representar e
armazenar esses dados; por definir padrões, políticas e procedimentos; por desenvolver o projeto
e modelagem de banco de dados; manter atualizados os dados corporativos. Tudo isso na conta
do Tite...


Em suma: DBA é o cara mais técnico – ele não está nem aí para o significado dos dados, ele trata
das tarefas operacionais do dia-a-dia; cuida dos backups; concede ou retira permissões de acesso;
verifica o desempenho do sistema gerenciados de banco de dados; etc. AD é o cara mais gerencial
– ele trata das atividades estratégicas da organização; sabe o significado dos dados armazenados;
sabe quem os utiliza e quem os gerencia; trata eventuais redundâncias de dados; etc.

                               Agora deixa eu contar uma curiosidade para vocês: na teoria, essas
                               atribuições são bem divididas e separadas; na prática, muitas atribuições
                               se misturam. Resultado? DBA e AD muitas vezes quase saem no tapa nas
                               organizações e órgãos por aí porque um acha que determinada
                               atribuição é do outro e vice-versa. É um relacionamento um pouco tenso,
                               mas eles sabem que eles se complementam e que um não vive sem o outro.
                               Entendido, garotada? Então vamos seguir...

     (ANTT – 2013) Uma das funções do administrador de dados é padronizar os dados,
     documentando as definições e descrições dos itens de dados.
     _______________________
     Comentários: padronizar dados, documentar definições e descrever itens de dados são realmente atribuições do Administrador
     de Dados (Correto).

     (HEMOBRÁS – 2008) Autorização de acesso ao banco, coordenação e monitoração de
     uso, aquisição de software e hardware são responsabilidades de um administrador de
     banco de dados.
     _______________________
     Comentários: todas essas são responsabilidades do DBA – Administrador do Banco de Dados (Correto).


---

Vamos falar agora sobre a Arquitetura ANSI/SPARC – também conhecida como Arquitetura de
Três Esquemas! Pelo nome, eu já vi que é complicado! Que nada! Vem comigo...

Eu tenho certeza que o sonho de muitos de vocês após passar em um concurso público é se casar!
E, após essa etapa, construir uma casa ou um apartamento do jeito que vocês sempre imaginaram.
Estou mentindo? Pois é! Para construir uma casa, vocês podem contratar – por exemplo – uma
arquiteta! E qual é o papel de uma arquiteta? Basicamente arquitetos planejam, organizam e
projetam os espaços internos e externos de uma edificação! Tudo certo até aqui?

Agora vocês concordam comigo que a arquiteta pode fazer um projeto em diferentes níveis de
abstração? Por exemplo: ela pode fazer uma Planta Baixa ou uma Planta 3D!

Você gostaria de receber qual das duas? Acho que gostaria da Planta 3D, uma vez que ela apresenta
detalhes sobre a disposição dos cômodos, móveis, cores, texturas, entre outros. Por outro lado, se
você perguntar para um engenheiro, ele responderá com toda certeza que deseja receber a
Planta Baixa, uma vez que ela apresenta apenas o que é importante para ele: medidas, dados e
outros aspectos técnicos!

Da mesma forma que temos uma arquitetura para construção de edificações, nós também temos
uma arquitetura para construção de bancos de dados – ambas com diferentes níveis de abstração!
Em 1975, o instituto americano responsável pelo desenvolvimento de padrões de produtos,
serviços, processos e sistemas sugeriu a Arquitetura ANSI/SPARC para Sistemas Gerenciadores
de Banco de Dados (SGBD).

A Arquitetura ANSI/SPARC se divide em três níveis independentes: externo, conceitual e interno.
A imagem a seguir será a matriz para tudo que vamos estudar sobre esse assunto:


---

     (LIQUIGÁS – 2012) A arquitetura ANSI/SPARC de um Sistema Gerenciador de Banco de
     Dados (SGBD) divide-se nos níveis:

     a) externo, conceitual e interno
     b) externo, lógico e recuperador
     c) interno, indexador e lógico
     d) físico, conceitual e lógico
     e) físico, indexador e recuperador
     _______________________
     Comentários: a arquitetura ANSI/SPARC se divide em níveis externo, conceitual e interno (Letra A).

     (AL/SP – 2010) A principal meta da arquitetura de "três esquemas" é separar as
     aplicações do usuário do banco de dados físico. Os esquemas são de níveis:

     a) internos, descritivos e externos.
     b) internos, conceituais e externos.
     c) independentes, conceituais e externos
     d) internos, conceituais e independentes.
     e) independentes, conceituais e descritivos.
     _______________________
     Comentários: a arquitetura de três-esquemas se divide em níveis internos, conceituais e externos (Letra B).

Antes de entrar em detalhes sobre esses níveis, falta definir o que é um esquema e o que é uma
instância! Falando de maneira bem simples, um esquema é uma descrição da estrutura de um
banco de dados. Imaginem que eu trabalho no MEC e desejo criar um banco de dados que guarde


---

dados das escolas brasileiras. Eu preciso descrever quais informações eu vou querer armazenar,
sobre quem, quando, como, entre outros – tudo isso é descrito em um esquema.

Voltando ao exemplo da casa dos sonhos: eu não sei se vocês sabem, mas – para construir uma casa
– não basta comprar um terreno e simplesmente começar a subir as paredes. Toda obra necessita
de um Memorial Descritivo! Vocês sabem o que é isso? Memorial Descritivo é um documento exigido
pela prefeitura que detalha todo o projeto a ser realizado, onde estão relacionados – um a um –
todos os itens da edificação a ser construída.

Galera, ele deve informar tudo que será realizado na obra: estruturas, acabamentos, instalações,
entre outros. De forma análoga, podemos dizer que o Esquema do Banco de Dados é como o
Memorial Descritivo da Obra! Ele descreve o projeto do banco de dados: estruturas, tabelas,
campos, visões, índices, funções, entre outros – antes que ele seja de fato implementado (ele
raramente é modificado). Já o conceito de instância de banco de dados é bem mais simples...

Instância (ou Estado) é o conjunto de dados armazenados no banco e um determinado momento
de operação. O esquema é a descrição da estrutura dos dados; a instância são os dados em si!


     (CFA – 2010) Num sistema de banco de dados, o conceito de instância é definido:

     a) pelo conjunto de dados armazenados no banco num determinado momento de
     operação.
     b) pela descrição do banco especificada durante o projeto.
     c) pela visão mais próxima da representação física de armazenamento no computador.
     d) pelo modelo de relacionamentos entre as entidades.
     _______________________
     Comentários: (a) Correto, essa é a definição de instância; (b) Errado, esse item trata do esquema; (c) Errado, esse item trata do
     nível interno; (d) Errado, esse item trata de um modelo conceitual (Letra A).

     (CGU – 2012) O projeto geral do banco de dados é:

     a) o esquema do banco de dados.
     b) o planejamento estratégico do fluxo de dados.
     c) o esquema de dimensionamento físico-financeiro do banco de dados.
     d) a versão inicial de instanciação dos dados a serem carregados no sistema.
     e) o esquema de atualização dos dados para manutenção de consistência.
     _______________________
     Comentários: o projeto geral do banco de dados é chamado de esquema do banco de dados (Letra A).


---

Também conhecido como Nível de Visão ou Nível Lógico do Usuário, inclui uma série de visões
do usuário. Cada visão descreve a parte do banco de dados em que um grupo de usuários em
particular está interessado e oculta o restante do banco de dados do grupo de usuários. Trata-se do
nível mais próximo dos usuários, isto é, aquele que se ocupa de como os dados serão vistos por
usuários individuais. Vamos ver isso melhor...

                                                                     Percebam na imagem ao lado que esse nível faz
                                                                     interface direta com os usuários. Ele descreve
                                                                     uma parte do banco de dados que é relevante
                                                                     para um usuário em particular e exclui dados
                                                                     irrelevantes, bem como dados que o usuário não
                                                                     está autorizado a acessar. Além disso, notem que
                                                                     ele apresenta uma visão externa individual e
                                                                     independente para cada usuário final. Notem
                                                                     também        que    há     um      mapeamento
                                                                     externo/conceitual que consolida dados em um
                                                                     único esquema conceitual de dados.

Galera, imaginem um banco de dados de uma universidade que contém dados pessoais dos alunos,
remuneração dos professores, dentre outras informações sensíveis. Todos os funcionários devem
poder visualizar todos esses dados? Claro que não! Cada grupo de usuários possui suas
necessidades específicas e, via de regra, somente devem poder visualizar aqueles dados
estritamente necessários para o desempenho de suas funções.

     (Prefeitura de Belo Horizonte/MG – 2012) Considerando a arquitetura de sistemas de
     bancos de dados, assinale a alternativa que corresponde ao nível lógico do usuário.

     a) Nível conceitual
     b) Nível externo
     c) Nível físico
     d) Nível interno
     _______________________
     Comentários: na arquitetura de um banco de dados, o nível lógico corresponde ao nível externo (Letra B).

     (Banco da Amazônia – 2010) Acerca da divisão nos níveis interno, conceitual e externo,
     julgue: O nível conceitual é aquele mais próximo do usuário e ocupa-se da forma como
     os dados são vistos por cada usuário.
     _______________________
     Comentários: nessa classificação, o nível mais próximo ao usuário é o nível externo e, não, conceitual (Errado).


---

Também conhecido como Nível Lógico de Comunidade (ou apenas Nível Lógico), é um nível
indireto entre os níveis interno e externo. Trata-se de uma maneira de descrever a estrutura do
banco de dados inteiro para uma comunidade de usuários, isto é, quais dados são armazenados em
todo o banco de dados e como os dados estão inter-relacionados. Esse nível oculta os detalhes das
estruturas de armazenamento físico e se concentra na descrição de entidades.

                                                                     Observem na imagem ao lado que o nível
                                                                     conceitual faz uma ponte entre o nível externo e o
                                                                     nível interno por meio de um mapeamento
                                                                     conceitual/interno de dados. O nível externo
                                                                     descrevia apenas parte do banco de dados; já o
                                                                     nível conceitual descreve todo o banco de
                                                                     dados e se concentra em definir quais dados
                                                                     estão armazenados e quais são as relações
                                                                     entre esses dados. Vamos ver um exemplo para
                                                                     solidificar o conhecimento sobre o nível
                                                                     conceitual! Vem comigo...

No caso do banco de dados da universidade, o nível externo estava preocupado em descrever o
banco na visão de cada usuário final – escondendo, por exemplo, a remuneração dos professores
para determinados grupos! No nível conceitual, a preocupação não é mais partes do banco, mas
como banco inteiro; e são descritas, em geral, as tabelas que armazenam os dados e o
relacionamento entre elas.


     (Banco da Amazônia – 2010) Na arquitetura ANSI/SPARC de banco de dados, o nível
     conceitual:

     a) define a estrutura de armazenamento do banco de dados.
     b) define a estrutura do banco de dados para uma comunidade de usuários.
     c) descreve a parte do banco de dados em que um grupo de usuários está interessado,
     escondendo as outras partes.
     d) descreve os caminhos de acesso para a base de dados.
     e) inclui um número de visões de usuário.
     _______________________
     Comentários: (a) Errado, isso é função do nível interno; (b) Correto, isso é função do nível conceitual; (c) Errado, isso é função
     do nível externo; (d) Errado, isso é função do nível interno; (e) Errado, isso é função do nível externo (Letra B).


---

Também conhecido como Nível de Armazenamento ou Físico, é o meio mais próximo do meio
de armazenamento físico, isto é, aquele que se ocupa com o modo com os dados estão fisicamente
armazenados no banco de dados e no hardware do computador – além da definição das estruturas
físicas que permitem obter um desempenho satisfatório. Ele descreve os detalhes completos do
armazenamento de dados e dos caminhos de acesso para o banco de dados.

                                                               Galera, notem na imagem ao lado que o nível
                                                               interno está mais longe dos usuários e mais
                                                               próximo do banco de dados – cuidando da
                                                               representação física em que os registros são
                                                               armazenados. Em uma analogia simples, o nível
                                                               externo seria de responsabilidade do arquiteto
                                                               da casa; o nível conceitual seria de
                                                               responsabilidade do engenheiro da casa; e o
                                                               nível interno seria de responsabilidade do
                                                               pedreiro em si. Por fim, notem que há um único
                                                               esquema interno para um único esquema
                                                               conceitual para várias visões.


     (MEC – 2015) O nível interno de um banco de dados é definido como sendo o mais
     próximo do meio de armazenamento físico. Nesse nível, estão a representação física dos
     campos e a sequência física em que os registros estão armazenados no sistema.
     _______________________
     Comentários: ele de fato é o mais próximo do meio de armazenamento físico – além de representar como os registros são
     armazenados no sistema (Correto).

Algumas observações: a arquitetura de três esquemas é uma ferramenta que pode ser utilizada
pelos usuários para poder visualizar os níveis de esquema em um sistema de banco de dados. A
maioria dos SGBDs não separa os três níveis completa e explicitamente, mas dá suporte a eles de
alguma forma. Observem que os três esquemas são apenas descrições dos dados; os dados
armazenados que realmente existem estão apenas no nível físico.

Na imagem também passamos direto no conceito de mapeamento! Galera, sempre que tivermos
uma arquitetura de SGBD com vários níveis, devemos pensar em como esses níveis se
comunicam. Basicamente, isso é feito por meio de mapeamentos! Não entendi! Como assim,
professor? Bem, um esquema de nível superior pode ser mapeado para um esquema de nível
imediatamente inferior. Entendido?

O mapeamento conceitual/interno especifica como a estrutura conceitual é armazenada
fisicamente; já o mapeamento externo/conceitual define a correspondência entre a visão externa
específica e a conceitual. Professor, qual é a vantagem disso? Cara, a grande vantagem é que esses


---

mapeamentos ajudam a garantir a independência dos dados! Como é, professor? Vamos
entender a seguir o que é a independência dos dados...


                                          Independência dos Dados
Quando estamos falando sobre independência de dados, estamos tratando da capacidade de
modificar a definição dos esquemas de determinado nível, sem afetar o esquema de nível
superior. Existem dois níveis de independência de dados: a independência física e a independência
lógica. Ressalto que se um sistema de banco de dados provê independência física dos dados, não
se pode inferir que esse sistema também permite independência lógica de dados.

▪ Independência Lógica dos Dados

A independência lógica dos dados trata da capacidade de alterar o esquema conceitual sem
precisar modificar os esquemas externos ou programas/aplicações. O mapeamento nível
externo para o conceitual é a chave para a independência lógica de dados.

▪ Independência Física dos Dados

A independência física dos dados trata da capacidade de alterar o esquema interno sem ter de
alterar o esquema conceitual. Logo, os esquemas externos também não precisam ser alterados.
O mapeamento nível conceitual para o interno é a chave para a independência física de dados.


     (AL/MT – 2013) A capacidade de alterar o esquema conceitual, sem que seja necessário
     alterar os esquemas externos ou os programas de aplicação, é denominada:

     a) independência lógica de dados.
     b) independência física de dados.
     c) independência interna de dados.
     d) fragmentação de dados.
     e) transparência de dados.
     _______________________
     Comentários: essa é a definição de independência lógica de dados, isto é, capacidade de modificar o esquema conceitual sem
     a necessidade de reescrever os programas aplicativos. (Letra A).

     (MEC – 2011) Independência de dados é a capacidade de modificar a definição dos
     esquemas de determinado nível, sem afetar o esquema de nível superior. Existem dois
     níveis de independência de dados: a independência física e a independência lógica.
     _______________________
     Comentários: a independência realmente trata da capacidade de modificar a definição de esquemas de determinado nível, sem
     afetar o esquema de nível superior. Ademais, temos dois tipos: independência física e independência lógica (Correto).


---

                                Pessoal, já vou começar o último tópico da nossa aula pedindo
                                desculpas. Não por mim, mas pelos malditos autores de banco de
                                dados e suas manias de fazer classificações semelhantes com
                                nomes diferentes! Galera, há outra classificação que também
                                representa a estrutura ou projeto de um banco de dados em
                                diferentes níveis de abstração por meio de modelos que veremos
                                a seguir: Modelo Conceitual, Modelo Lógico e Modelo Físico.

Oferece conceitos que são mais próximos ao modo como muitos
usuários compreendem os dados. Ele utiliza conceitos como
entidades, atributos e relacionamentos. Em geral, é utilizado para
envolver o cliente e discutir os aspectos do negócio e, não, da
tecnologia, visto que não há limitações ou tecnologias específicas.
Esse modelo é independente de hardware ou software, podendo ser
implementado por qualquer SGBD – é possível desenhá-lo e
implementá-lo em qualquer SGBD disponível no mercado (Ex: MER).

                           Também chamado de Modelo Representativo, oferece conceitos que
                           podem ser facilmente entendidos pelos usuários finais, mas que não
                           está muito longe do modo como os dados são organizados e
                           armazenados no computador. Em geral, eles ocultam muitos detalhes
                           do armazenamento de dados em disco, mas podem ser implementados
                           diretamente em um sistema de computador. Nesse caso, ele constitui
                           uma representação para um banco de dados específico, utilizando as
                           estruturas suportadas por ele. Logo, o modelo lógico depende do tipo
                           particular de SGBD utilizado (Ex: Modelo Relacional).

Oferece conceitos que descrevem os detalhes de como os dados são
armazenados no computador. Eles costumam ser voltados para
especialistas de computadores e, não, para usuários finais. Esse modelo é
totalmente dependente do SGBD.


---

                                                                                           Modelo Entidade-
                              Alto                  Nenhum                       Fácil
                                                                                           Relacionamento
                                              Somente Software
                            Médio                                                Médio     Modelo Relacional
                                               (Tipo do SGBD)
                                             Hardware e Software                           Depende Do SGBD
                             Baixo                                               Difícil
                                              (SGBD Específico)


Existem Tipos de SGBD (Relacional, Rede, etc) e Ferramentas de SGBD (Oracle, MySQL, etc).
Para fazer o Modelo Lógico, não é necessário saber qual ferramenta específica será utilizada, basta
saber seu tipo; já para fazer o Modelo Físico, é necessário saber tanto o seu tipo quanto a ferramenta
específica será utilizada. Infelizmente muitas questões ignoram essa diferença e afirmam que o
Modelo Lógico depende do software (sem especificar se trata do tipo ou da ferramenta específica).


     (UDESC – 2010) Assinale a alternativa que indica o(s) modelo(s) de projeto de BD que é
     (são) independente(s) do Sistema Gerenciador de Banco de Dados (SGBD) a ser adotado:

     a) Modelo Conceitual apenas.
     b) Modelo Lógico e Modelo Físico.
     c) Modelo Conceitual e Modelo Lógico.
     d) Modelo Conceitual, Modelo Lógico e Modelo Físico.
     e) Modelo Lógico apenas.
     _______________________
     Comentários: apenas o Modelo Conceitual é independente de SGBD (Letra A).


---

RESUMO


---

                                   dados X informações

 Dados são fatos brutos, em sua forma primária – e, muitas vezes, os dados podem não fazer
  sentido sozinhos;


---

  Informações consiste no agrupamento de dados de forma organizada para fazer sentido e
   gerar conhecimento.

                            Sistema gerenciador de banco de dados

                                        DEFINIÇÃO

Um sistema gerenciador de banco de dados é uma coleção de programas que permite
                aos usuários criar e manter um banco de dados.


                                  Sistema de banco de dados


---

    SBD = BD + SGBD + [aplicações]
                                     Lembrando que aplicações não são obrigatórias!

                                Características da abordagem de banco de dados

                                CARACTERÍSTICAS DA ABORDAGEM DE BANCO DE DADOS
                       Natureza de autodescrição de um sistema de banco de dados
                        Isolamento entre programas e dados, e abstração de dados
                                 Suporte de múltiplas visões dos dados
                   Compartilhamento de dados e processamento de transação multiusuário

                                          PROPRIEDADES DE UMA TRANSAÇÃO

                                          PROPRIEDADES DE UMA TRANSAÇÃO
                     Uma transação é uma unidade de processamento atômica que deve ser executada
A   ATOMICIDADE      integralmente até o fim ou não deve ser executada.
                     – Responsável: Subsistema de Recuperação.
                     A execução de uma transação deve levar o banco de dados de um estado consistente a um
C   CONSISTÊNCIA     outro estado consistente.
                     – Responsável: Programador ou Módulo de Restrições de Integridade.
                     Cada transação deve parecer executar isoladamente das demais, embora diversas
I    ISOLAMENTO      transações possam estar executando concorrentemente.
                     – Responsável: Subsistema de Controle de Concorrência.
                     Os efeitos de uma transação em caso de sucesso devem persistir no banco de dados mesmo
D   DURABILIDADE     em casos de quedas de energia, travamentos ou erros.
                     – Responsável: Subsistema de Recuperação.


---

                                          PRINCIPAIS PAPEIS

 Administrador de Banco de Dados:

   Responsável por instalar o SGBD; por autorizar o acesso ao banco de dados; por coordenar e
   monitorar sua performance; por adquirir recursos de software e hardware conforme a
   necessidade; por problemas, como falhas na segurança e demora na execução; assegurar-se de
   que os backups apropriados estão sendo feitos e estão íntegros; etc.

 Administrador de Dados:

   Responsável por identificar os dados a serem armazenados; por escolher estruturas apropriadas
   para representar e armazenar esses dados; por definir padrões, políticas e procedimentos; por
   desenvolver o projeto e modelagem de banco de dados; por zelar pela qualidade dos dados;
   manter atualizados os dados corporativos.

                                       ARQUITETURA ANSI/SPARC

 Nível Externo:

Também conhecido como Nível de Visão ou Nível Lógico do Usuário, inclui uma série de visões do
usuário. Cada visão descreve a parte do banco de dados em que um grupo de usuários em particular
está interessado e oculta o restante do banco de dados do grupo de usuários. Trata-se do nível mais
próximo dos usuários, isto é, aquele que se ocupa de como os dados serão vistos por usuários
individuais.

 Nível Conceitual:

Também conhecido como Nível Lógico de Comunidade (ou apenas Nível Lógico), é um nível
indireto entre os níveis interno e externo. Trata-se de uma maneira de descrever a estrutura do
banco de dados inteiro para uma comunidade de usuários, isto é, quais dados são armazenados em
todo o banco de dados e como os dados estão inter-relacionados. Esse nível oculta os detalhes das
estruturas de armazenamento físico e se concentra na descrição de entidades.

 Nível Interno:

Também conhecido como Nível de Armazenamento ou Físico, é o meio mais próximo do meio de
armazenamento físico, isto é, aquele que se ocupa com o modo com os dados estão fisicamente
armazenados no banco de dados e no hardware do computador – além da definição das estruturas
físicas que permitem obter um desempenho satisfatório. Ele descreve os detalhes completos do
armazenamento de dados e dos caminhos de acesso para o banco de dados.


---

                                  Tipos de Independência de dados

                                 Independência DE DADOS

 Capacidade de modificar a definição dos esquemas de determinado nível, sem afetar o
                              esquema de nível superior


 Independência Lógica dos Dados: trata da capacidade de alterar o esquema conceitual sem
  precisar modificar os esquemas externos ou programas/aplicações.

 Independência Física dos Dados: trata da capacidade de alterar o esquema interno sem ter de
  alterar o esquema conceitual. Os esquemas externos também não precisam ser alterados.

                                    PROJETO DE BANCO DE DADOS

 Modelo Conceitual (ou Modelo de Alto Nível): oferece conceitos que são mais próximos ao
  modo como muitos usuários compreendem os dados. Esse modelo é independente de hardware
  ou software, podendo ser implementado por qualquer SGBD.


---

 Modelo Lógico (de Implementação ou Representativo): oferece conceitos que podem ser
  facilmente entendidos pelos usuários finais. Ele constitui uma representação para um banco de
  dados específico, utilizando as estruturas suportadas por ele.

 Modelo Físico (ou de Baixo Nível): oferece conceitos que descrevem os detalhes de como os
  dados são armazenados no computador. Eles costumam ser voltados para especialistas de
  computadores e, não, para usuários finais. Esse modelo é totalmente dependente do SGBD.

                                                    GRAU DE                                Compreensão pelo
                               MODELO                                 DEPENDÊNCIA                                           Exemplo
                                                   ABSTRAÇÃO                                 usuário final
                          MODELO CONCEITUAL           ALTO               nenhum                 Fácil         Modelo entidade-relacionamento
                            MODELO LÓGICO            MÉDIO       Somente Software (sgbd)        Médio               Modelo relacional
                            MODELO FÍSICO            BAIXO         Software e hardware          difícil               Depende do sgbd


                                                                          COMPARATIVO


                                                                     comparativo
                                        Arquitetura ansi/sparc                                    PROJETO DE BANCO DE DADOS
                                            NÍVEL EXTERNO                                            MODELO conceitual
                                           NÍVEL CONCEITUAL                                             MODELO LÓGICO
                                             NÍVEL INTERNO                                              MODELO FÍSICO

                                                                                                       MODELO CONCEITUAL
                                                                                                        ou DE ALTO NÍVEL
 ARQUITETURA ANSI/SPARC

                                                                                                                                          MODELOS DE DADOS

                                                                                                        MODELO LÓGICO
                                                                                              REPRESENTATIVO OU DE IMPLEMENTAÇÃO
                                                                                                         MODELO FÍSICO
                                                                                                        Ou DE BAIXO NÍVEL


---

---

---

---

---

                   QUESTÕES COMENTADAS – CESPE

1. (CESPE / CNMP - 2023) As estruturas para armazenamento dos dados e os métodos de acesso
   ao banco de dados fazem parte do projeto lógico de um banco de dados.

Comentários:

Na verdade, as estruturas para armazenamento de dados e os métodos de acesso ao banco de
dados fazem parte do projeto físico de um banco de dados, não do projeto lógico.

                                                                                Gabarito: Errado

2. (CESPE / SEPLAN-RR - 2023) Atomicidade, uma das propriedades cruciais em transações de
   banco de dados relacional, é a chave para manter os dados precisos no banco de dados e garantir
   que eles estejam em conformidade com regras, regulamentos e políticas da empresa.

Comentários:

Perfeito! A atomicidade desempenha um papel crucial nas transações de banco de dados relacional,
garantindo que os dados sejam precisos, consistentes e estejam em conformidade com as regras e
políticas da empresa.

                                                                               Gabarito: Correto

3. (CESPE / AGER-MT - 2023) Assinale a opção em que é apresentada a propriedade envolvida
   quando uma transação de banco de dados é completada com sucesso e as mudanças que ela fez
   no banco persistem, mesmo que existam falhas no sistema.

   a) atomicidade
   b) consistência
   c) isolamento
   d) durabilidade
   e) inconsistência de dados.

Comentários:

A propriedade envolvida quando uma transação de banco de dados é completada com sucesso e as
mudanças que ela fez no banco persistem, mesmo que existam falhas no sistema, é a durabilidade.
Ela assegura que, uma vez que uma transação seja confirmada (completada com sucesso) e suas
mudanças sejam gravadas no banco de dados, essas alterações sejam permanentes, mesmo que
ocorram falhas subsequentes, como falta de energia, falha de hardware ou problemas de software.
Em outras palavras, as alterações devem ser duráveis e não podem ser desfeitas.


---

                                                                                Gabarito: Letra D


4. (CESPE / TCE-SC - 2022) Um esquema de banco de dados pode ser definido como a
   representação gráfica e simbológica dos componentes de um banco de dados, seja comercial,
   industrial ou residencial.

Comentários:

É o que? Que viagem foi essa? Um esquema de banco de dados não é uma representação gráfica ou
simbólica dos componentes de um banco de dados. Um esquema de banco de dados é a estrutura
lógica que define a organização dos dados, tabelas, relacionamentos, restrições e outras
informações que compõem o banco de dados. Ele não se refere à representação visual dos
componentes, mas sim à definição formal das entidades e suas propriedades, sendo essencial para
garantir a integridade e coerência dos dados armazenados.

                                                                                Gabarito: Errado

5. (CESPE / TCE-SC - 2022) O role contém as definições de permissões, privilégios e garantias de
   acesso aos objetos do banco e aos dados.

Comentários:

Perfeito! Um Role (Papel) em um SGBD é uma entidade que agrupa permissões, privilégios e
garantias de acesso, simplificando a administração de segurança. Eles também abrangem
operações, ações e tarefas específicas que os usuários ou grupos podem realizar no banco de dados.
Eles ajudam a centralizar e gerenciar de maneira eficaz os direitos de acesso e as permissões dos
usuários, melhorando a segurança e a administração do sistema. Um dos principais papeis é o DBA
(DataBase Administrador).

                                                                               Gabarito: Correto

6. (CESPE / SEFAZ-SE – 2022) As técnicas de controle de concorrência são usadas para garantir a
   propriedade de não interferência ou isolamento das transações executadas simultaneamente.
   Algumas das principais técnicas usadas para controlar a execução concorrente de transações
   são baseadas no conceito de bloqueio de itens de dados.

   Considerando os tipos de bloqueios, assinale a opção que contém o esquema de bloqueio que
   possui dois estados — bloqueado e desbloqueado — e que é considerado muito restritivo para
   itens de banco de dados, porque no máximo uma transação pode manter um bloqueio em
   determinado item.

   a) bloqueios compartilhados


---

   b) bloqueios binários
   c) bloqueios exclusivos
   d) bloqueio em duas fases conservador
   e) bloqueio em duas fases básico

Comentários:

Questão absurdamente aprofundada! Eu acho completamente inviável explicar estratégias de
controle de concorrência em aula. De todo modo, as técnicas de controle de concorrência são
usadas para garantir a propriedade de não interferência ou isolamento das transações executadas
simultaneamente. Um SGBD deve ser capaz de garantir que apenas planos de execução
serializáveis e recuperáveis sejam permitidos e que nenhuma ação de transações efetivadas seja
perdida ao desfazer transações canceladas. Normalmente, um SGBD utiliza um protocolo de
bloqueio para conseguir isso. Bloqueio é um pequeno objeto de controle associado a um objeto do
banco de dados. Protocolo de bloqueio é um conjunto de regras a serem seguidas por transação (e
impostas pelo SGBD) para garantir que, mesmo intercalado as ações de várias transações, o
resultado seja idêntico à execução de todas as transações em alguma ordem serial.

(a) Errado. Bloqueios compartilhados permitem que um item de dado seja acessado por mais de
uma transação para leitura; (b) Correto. Bloqueios binários são simples, mas também muito
restritivos para fins de controle de concorrência e, portanto, não são muito utilizados na prática –
ele pode ter dois estados ou valores: bloqueado e desbloqueado. Se o valor do bloqueio em X for 1,
o item não pode ser acessado. Se for 0, o item pode ser acessado quando solicitado; (c) Errado.
Bloqueios compartilhados são sinônimos de bloqueios exclusivos; (d) Errado. Esse tipo de bloqueio
bloqueia todos os tens aos quais terá acesso, antes de iniciar o seu processamento. Se algum dos
itens não puder ser bloqueado, a transação não bloqueia nenhum item e espera até que todos os
itens estejam disponíveis para bloqueio; (e) Errado. Esse tipo de bloqueio é utilizado para garantir
escalonamentos serializáveis – as operações de bloqueio e desbloqueio nas transações devem
seguir protocolos (Ex: Two-Phase Locking).

                                                                                 Gabarito: Letra B

7. (CESPE / Polícia Federal – 2021) Em um sistema gerenciador de banco de dados, as restrições
   de integridade garantem que os dados possam ser armazenados, consultados e utilizados com
   confiabilidade.

Comentários:

Perfeito! O objetivo das restrições de integridade é garantir a exatidão e a consistência dos dados
em um banco de dados relacional, de tal forma que eles possam ser armazenados, consultados e
utilizados com confiabilidade.

                                                                                 Gabarito: Correto


---

8. (CESPE / Polícia Federal – 2021) Atomicidade refere-se à propriedade de um sistema
   gerenciador de banco de dados (SGBD) que garante que os dados armazenados sejam
   indivisíveis.

Comentários:

Atomicidade refere-se à propriedade que garante que os dados armazenados as transações sejam
indivisíveis. Existe o conceito de atributo simples ou atômico, mas isso ocorre dentro do contexto
de modelagem conceitual e, não, no contexto de um Sistema Gerenciador de Banco de Dados
(SGBD). O gabarito preliminar veio como errado, mas a banca anulou no definitivo. Eu discordo,
mas vida que segue...

                                                                               Gabarito: Anulada

9. (CESPE / APEX-BRASIL – 2021) Assinale a opção em que o termo apresentado corresponde a
   uma sequência de instruções de consulta e(ou) atualização de banco de dados:

   a) commit
   b) rollback
   c) truncate
   d) transaction

Comentários:

Uma Transação (Transaction) corresponde a uma sequência de instruções de consulta e(ou)
atualização de banco de dados.

                                                                                Gabarito: Letra D

10. (CESPE / ME – 2020) Um esquema de banco de dados é um conjunto de regras que governa um
    banco de dados ou todo o conjunto de objetos pertencentes a determinado usuário.

Comentários:

O esquema é a descrição das regras e objetos de um banco de dados. Se pensarmos no modelo
relacional, o esquema definirá nomes das colunas, seus tipos de dados e restrições de integridade.

                                                                               Gabarito: Correto


---

11. (CESPE / TJ-PA – 2020) Um sistema de banco de dados proporciona a empresas o controle
    centralizado de todos os seus dados. O funcionamento do banco de dados baseia-se em
    unidades lógicas de trabalho conhecidas como:

   a) entidades.
   b) ocorrências.
   c) registros.
   d) tabelas.
   e) transações.

Comentários:

(a) Errado. Esse é um conceito associado ao modelo entidade-relacionamento. As entidades
representam as "coisas" do mundo real que queremos modelar. Por exemplo: uma loja pode ter o
interesse de armazenar informações dos seus clientes e dos seus produtos. Cliente e Produto são
entidades do modelo; (b) Errado. Uma ocorrência é uma linha da tabela (também chamada de
registro); (c) Errado. Um registro é uma linha da tabela (também chamado de ocorrência); (d)
Errado. As tabelas são estruturas compostas por linhas e colunas. São utilizadas para armazenar
dados nos bancos relacionais; (e) Correto. Uma transação é uma unidade lógica de trabalho que
executa um conjunto de operações no banco de dados. Essas operações podem inserir, remover,
modificar ou recuperar dados nas tabelas. Ao final da transação, é possível confirmar as alterações
realizadas (COMMIT) ou descartar as alterações (ROLLBACK).

                                                                                 Gabarito: Letra E

12. (CESPE / TJ-AM – 2019) Uma das vantagens de utilizar sistema gerenciador de banco de dados
    é o fato de ele realizar o controle da redundância de dados, o que impede a ocorrência de
    inconsistências entre os arquivos.

Comentários:

De fato, ele realiza o controle de redundância de dados. Isso impede a ocorrência de inconsistência
entre os arquivos? Eu acho que o ideal seria dizer que isso evita a inconsistência, mas podemos
relevar. Lembrando que, às vezes, há motivos comerciais ou técnicos plausíveis para manter várias
cópias distintas dos mesmos dados (redundância controlada) como para melhorar o desempenho
das consultas.

                                                                                Gabarito: Correto

13. (CESPE / TJ-AM – 2019) Na arquitetura ANSI/SPARC de um SGBD, o nível interno trata do
    armazenamento físico dos dados, o nível externo trata do modo como os dados são visualizados
    por usuários individuais, e o nível conceitual oferece uma visão comunitária dos dados.


---

Comentários:

Perfeito! O objetivo da arquitetura de três esquemas é separar as aplicações do usuário do banco
de dados físico. Nessa arquitetura, os esquemas podem ser definidos nos três níveis a seguir:

1. O nível interno tem um esquema interno, que descreve a estrutura do armazenamento físico do
banco de dados. O esquema interno usa um modelo de dados físico e descreve os detalhes
completos do armazenamento de dados e caminhos de acesso para o banco de dados.

2. O nível conceitual tem um esquema conceitual, que descreve a estrutura do banco de dados
inteiro para uma comunidade de usuários. O esquema conceitual oculta os detalhesdas estruturas
de armazenamento físico e se concentra na descrição de entidades, tipos de dados,
relacionamentos, operações do usuário e restrições.

3. O nível externo ou de visão inclui uma série de esquemas externos ou visões do usuário. Cada
esquema externo descreve a parte do banco de dados em que um grupo de usuários em particular
está interessado e oculta o restante do banco de dados do grupo de usuários.

                                                                              Gabarito: Correto

14. (CESPE / STM - 2018) O modelo conceitual, que reflete uma estrutura simplificada do banco de
    dados, é responsável por registrar como os dados estão armazenados no sistema de
    gerenciamento de banco de dados (SGBD).

Comentários:

Opaa... o responsável por dizer como os dados estão armazenados no Sistema Gerenciador de
Banco de Dados (SGBD) é o Modelo Físico! O Modelo Conceitual é responsável por dizer apenas
quais serão os dados armazenados.

                                                                               Gabarito: Errado

15. (CESPE / TCE-PB - 2018) A respeito de SGBD, assinale a opção correta.

   a) Um SGBD é um software que não prevê as funções de definição, recuperação e alteração de
   dados, sendo essa tarefa a função básica de um sistema de banco de dados.

   b) A consistência de dados é o princípio que determina a manutenção de determinado dado em
   vários arquivos diferentes.

   c) Conforme o princípio da atomicidade, caso ocorra erro em determinada transação, todo o
   conjunto a ela relacionado será desfeito até o retorno ao estado inicial, como se a transação
   nunca tivesse sido executada.


---

   d) O controle de concorrência é o princípio que garante e permite a manipulação, no mesmo
   momento, de um mesmo dado por mais de uma pessoa ou um sistema.

   e) Um SGBD, por definição, não é flexível, dada a dificuldade de mudar a estrutura dos dados
   quando os requisitos mudam.

Comentários:

(a) Errado. Sistema de Banco de Dados = SGBD + BD e as funções de definição, recuperação e
alteração de dados são de responsabilidade do SGBD;

(b) Errado. Quem determina a manutenção de determinado dado em vários arquivos diferentes é a
redundância;

(c) Correto. Perfeito! Lembrem-se: uma transação atômica é uma série indivisível e irredutível de
operações de banco de dados, de modo que todas elas ocorram completamente ou não ocorram;

(d) Errado. O controle de concorrência é na verdade um mecanismo e, não, um princípio.

(e) Errado. Pelo contrário, uma das maiores vantagens de um SGBD é sua flexibilidade, permitindo
modificar a estrutura dos dados quando requisitos se modificam.

                                                                               Gabarito: Letra C

16. (CESPE / EBSERH – 2018 ) Após um banco de dados ser criado, o administrador executa uma
    série de tarefas para dar permissão de acesso aos usuários que necessitam ler e gravar
    informações na base de dados. A responsabilidade de gerir os acessos ao banco de dados é do
    sistema gerenciador de banco de dados (SGBD).

Comentários:

O Administrador de Banco de Dados (DBA) – de fato – é responsável por atribuir aos diversos
usuários as permissões compatíveis com suas necessidades. No entanto, quem vai gerenciar o
acesso, no sentido de autorizar o usuário a acessar o banco de dados e visualizar os dados, é o
próprio SGBD.

                                                                               Gabarito: Correto

17. (CESPE / STM – 2018) Comparativamente aos usados pelos usuários leigos, os modelos de
    dados utilizados por programadores são considerados menos abstratos, pois contêm mais
    detalhes de como as informações estão organizadas internamente no banco de dados.


---

Comentários:

Os usuários leigos, por terem um conhecimento mais limitado a respeito da tecnologia de banco de
dados, devem ter uma visão mais abstrata dos dados quando comparados com os programadores.
Estes, por terem conhecimento e formação específica, podem ter mais detalhes da estrutura de
armazenamento dos dados.

                                                                                              Gabarito: Correto

18. (CESPE / TRE-BA - 2017) Sistemas de banco de dados estão sujeitos a falhas como falta de
    energia, erros de software ou mesmo sabotagem dos dados. O sistema de recuperação é
    responsável pela restauração do banco para um estado consistente que havia antes da
    ocorrência da falha. Para precaver-se de tais falhas, devem-se preservar as propriedades de:

      a) consistência e durabilidade.
      b) isolamento e consistência.
      c) atomicidade e durabilidade.
      d) durabilidade e isolamento.
      e) atomicidade e isolamento.

Comentários:

                                              PROPRIEDADES DE UMA TRANSAÇÃO
                         Uma transação é uma unidade de processamento atômica que deve ser executada
  A       ATOMICIDADE    integralmente até o fim ou não deve ser executada.
                         – Responsável: Subsistema de Recuperação.
                         A execução de uma transação deve levar o banco de dados de um estado consistente a um
  C       CONSISTÊNCIA   outro estado consistente.
                         – Responsável: Programador ou Módulo de Restrições de Integridade.
                         Cada transação deve parecer executar isoladamente das demais, embora diversas
  I       ISOLAMENTO     transações possam estar executando concorrentemente.
                         – Responsável: Subsistema de Controle de Concorrência.
                         Os efeitos de uma transação em caso de sucesso devem persistir no banco de dados mesmo
  D       DURABILIDADE   em casos de quedas de energia, travamentos ou erros.
                         – Responsável: Subsistema de Recuperação.


Cuidado com a pegadinha! A questão menciona a restauração do banco para um estado consistente
– até aqui poderia se tratar da Consistência, da Durabilidade ou da Atomicidade. No entanto,
quando a questão menciona uma possível falha (falta de energia, erros de software ou sabotagem
dos dados), a Consistência não é mais uma opção. Por que? Porque a consistência é a capacidade
que a execução de uma transação tem de levar o banco de dados de um estado consistente a outro
estado consistente, mas não em caso de falhas externas – trata-se de falhas de integridade (Ex: você
tentar referenciar uma tabela que não existe).


---

Além disso, o sistema de recuperação é responsável pela restauração do banco para um estado
consistente nos casos das propriedades de Atomicidade e Durabilidade. No primeiro caso, ou
completa a transação ou aborta completamente; e no segundo caso, os efeitos de uma transação
em caso de sucesso devem persistir no banco de dados mesmo em casos de quedas de energia,
travamentos ou erros.

                                                                                  Gabarito: Letra C

19. CESPE / TRE-BA – 2017) Na modelagem de dados, a capacidade de modificar a definição dos
    esquemas em determinado nível, sem afetar o esquema do nível superior, é denominada:

   a) integridade de domínio.
   b) esquema.
   c) especialização total.
   d) independência de dados.
   e) cardinalidade.

Comentários:

A arquitetura de Três Esquemas pode ser utilizada para explicar melhor o conceito de
independência de dados, que pode ser definida como a capacidade de alterar o esquema em um
nível do sistema de banco de dados sem ter de alterar o esquema no nível mais alto.

                                                                                  Gabarito: Letra D

20. (CESPE / TRE-TO – 2017) A respeito da arquitetura de três esquemas para banco de dados,
    assinale a opção correta.

   a) Uma das desvantagens da arquitetura de três esquemas é a impossibilidade de aplicar a
   independência de dados.

   b) Um dos objetivos da arquitetura de três esquemas é aproximar o banco de dados físico das
   aplicações.

   c) O nível conceitual serve para descrever a estrutura do banco de dados para um conjunto de
   usuários.

   d) Mapeamentos são as transformações que dados brutos armazenados sofrem para se tornar
   informações inteligíveis.

   e) O nível interno inclui uma série de visões do usuário utilizadas para descrever partes do banco
   de dados.


---

Comentários:

(a) Errado, uma das características da arquitetura em 3 esquemas é justamente a independência de
dados que pode ser classificada em independência lógica e independência física; (b) Errado, um dos
objetivos da arquitetura é abstrair a complexidade dos dados no nível físico para as aplicações; (c)
Correto, o nível conceitual descreve um esquema conceitual para uma comunidade de usuários; (d)
Errado, os processos de transformação de requisições e os resultados entre os níveis são chamados
de mapeamentos; (e) Errado, cada esquema externo descreve a parte do banco de dados em que
um grupo de usuários em particular.

                                                                                   Gabarito: Letra C

21. (CESPE / TRT/CE – 2017) Acerca da arquitetura de três esquemas para bancos de dados, assinale
    a opção correta.

   a) Uma alteração no esquema interno da arquitetura implica alterar também o esquema
   externo.

   b) Na arquitetura de três esquemas, os níveis são definidos como interno, intermediário e
   externo.

   c) No nível interno da arquitetura, são descritos os caminhos de acesso para o banco de dados.

   d) Em um SGBD embasado nessa arquitetura, todos os grupos de usuários utilizam o mesmo
   esquema externo.

Comentários:

(a) Errado, alterações no esquema interno não implica alterações no esquema externo; (b) Errado,
são interno, conceitual e externo; (c) Perfeito! (d) Errado, cada grupo de usuário utiliza seu esquema
externo.

                                                                                   Gabarito: Letra C

22. (CESPE / TCE-SC – 2016) O catálogo de um sistema de gerenciamento de banco de dados
    relacional armazena a descrição da estrutura do banco de dados e contém informações a
    respeito de cada arquivo, do tipo e formato de armazenamento de cada item de dado e das
    restrições relativas aos dados.

Comentários:


---

Perfeito! O catálogo ou dicionário de dados realmente armazena a descrição da estrutura do banco
de dados e contém informações a respeito de cada arquivo, do tipo e formato de armazenamento
de cada item de dado e das restrições relativas aos dados.

                                                                               Gabarito: Correto

23. (CESPE / TCE-PA – 2016) Independência lógica de dados refere-se à capacidade de alterar o
    esquema conceitual sem a necessidade de alterar os esquemas externos ou os programas de
    aplicação.

Comentários:

Independência lógica de dados é a capacidade de alterar o esquema conceitual sem ter de alterar
os esquemas externos ou os programas de aplicação. Podemos alterar o esquema conceitual para
expandir o banco de dados (acrescentando um tipo de registro ou item de dado), para alterar
restrições ou para reduzir o banco de dados (removendo um tipo de registro ou item de dado).

                                                                               Gabarito: Correto

24. (CESPE / FUB – 2016) Em um projeto de banco de dados, a modelagem conceitual define quais
    dados vão aparecer no banco de dados, mas sem considerar a sua implementação.

Comentários:

Perfeito! Um modelo conceitual é um modelo de dados abstrato, que descreve a estrutura de um
banco de dados de forma independente de um SGBD particular – somente o modelo físico que
dependerá de sua implementação.

                                                                               Gabarito: Correto

25. (CESPE / TCE-PA – 2016) No nível conceitual da arquitetura de três camadas de banco de dados,
    cada esquema externo descreve a parte do banco que interessa a determinado grupo de
    usuários e oculta desse grupo o restante do banco de dados.

Comentários:

No nível conceitual, cada esquema externo...? Na verdade, no nível externo da arquitetura de três
esquemas de banco de dados, cada esquema externo descreve a parte do banco que interessa a
determinado grupo de usuários e oculta desse grupo o restante do banco de dados.

                                                                               Gabarito: Errado


---

26. (CESPE / SE-DF – 2017) O esquema do nível externo de uma arquitetura de três esquemas oculta
    os detalhes das estruturas de armazenamento físico e se concentra na descrição de entidades,
    tipos de dados, conexões, operações de usuários e restrições.

Comentários:

Na verdade, a questão trata do nível conceitual e, não, externo. O nível conceitual tem um esquema
conceitual, que descreve a estrutura do banco de dados inteiro para uma comunidade de usuários.
O esquema conceitual oculta os detalhes das estruturas de armazenamento físico e se concentra
na descrição de entidades, tipos de dados, relacionamentos, operações do usuário e restrições.
Normalmente, um modelo de dados representativo é usado para descrever o esquema conceitual
quando um sistema de banco de dados é implementado. Esse esquema conceitual de
implementação costuma estar baseado em um projeto de esquema conceitual em um modelo de
dados de alto nível.

                                                                                Gabarito: Errado

27. (CESPE / MPOG – 2015) Os dados armazenados em um SGBD são acessados por um único
    usuário de cada vez, sendo impedido o acesso concorrente aos dados.

Comentários:

Opa... uma das características de SGBDs é o suporte a usuários simultâneos – ele faz o controle de
concorrência entre transações que tentam acessar a mesma tabela ao mesmo tempo.

                                                                                Gabarito: Errado

28. (CESPE / MPOG – 2015) O SGBD proporciona um conjunto de programas que permite o acesso
    aos dados sem exposição dos detalhes de representação e armazenamento de dados, por meio
    de uma visão abstrata dos dados, conhecida como independência de dados.

Comentários:

Vocês se lembram das características de um banco de dados? Uma delas era o isolamento entre
programas e dados; e abstração de dados. A abstração de dados é a capacidade de um SGBD
oferecer aos usuários uma representação conceitual de dados que não inclui muitos detalhes de
como os dados são armazenados ou como as operações são implementadas. Dessa forma, temos
a independência da operação do programa: alguns bancos de dados trabalham com o conceito de
operações, que são funções ou métodos que podem ser invocados pelo programa. Os programas
podem atuar invocando essas operações, independentemente de como estas estão
implementadas.

                                                                               Gabarito: Correto


---

29. (CESPE / MEC – 2015) No projeto lógico, o modelo físico é obtido por meio da transformação
    do modelo conceitual.

Comentários:

A questão misturou todos os conceitos! O modelo lógico é obtido por meio da transformação do
modelo conceitual e o modelo físico é obtido por meio da transformação do modelo lógico.

                                                                               Gabarito: Errado

30. (CESPE / TRE-GO – 2015) As três principais etapas de execução de um projeto de banco de
    dados são projeto lógico, projeto físico e criação do banco de dados.

Comentários:

Na verdade, as três etapas são o projeto conceitual, lógico e físico.

                                                                               Gabarito: Errado

31. (CESPE / TRE-GO – 2015) O administrador de banco de dados tem como atribuição, entre
    outras, decidir que dados devem ser armazenados no banco de dados e estabelecer normas para
    manter e tratar esses dados.

Comentários:

Opa... essa é uma característica típica do Administrador de Dados e, não, do Administrador de
Banco de Dados.

                                                                               Gabarito: Errado

32. (CESPE / DEPEN – 2015) Os níveis interno, externo e conceitual da arquitetura de um banco de
    dados são responsáveis, respectivamente, por gerenciar o modo como os dados serão
    armazenados fisicamente, por gerenciar o modo como os dados serão vistos pelos usuários e
    por representar todo o conteúdo de informações do banco de dados.

Comentários:

Perfeito! O nível interno é responsável por gerenciar o modo como os dados serão armazenados
fisicamente; o nível externo é responsável por gerenciar o modo como os dados serão vistos pelos
usuários; e o nível conceitual é responsável por representar todo o conteúdo de informações do
banco de dados.


---

                                                                               Gabarito: Correto

33. (CESPE / TRE/GO – 2015) Nas organizações, o emprego de sistemas gerenciadores de banco de
    dados promove a segurança e a consistência dos dados, favorecendo a redundância e
    garantindo a integridade dos dados.

Comentários:

Ele não favorece a redundância e não se pode garantir a integridade dos dados – apesar de poder
favorecê-la.

                                                                               Gabarito: Errado

34. (CESPE / TJ-SE – 2014) Um SGBD deve gerenciar o acesso múltiplo aos dados de uma tabela
    sem ocasionar perda da integridade dessas informações.

Comentários:

O SGBD possui como uma das suas características fazer o controle de concorrência entre diferentes
usuários ou transações que acessam uma mesma tabela, ou um conjunto de dados no modelo
relacional. Isso é importante para garantir a integridade dos registros e a consistência das
transações executadas.

                                                                               Gabarito: Correto

35. CESPE / TJ-SE – 2014) Os dados físicos de um banco de dados podem ser acessados
    diretamente por meio de qualquer sistema, sem a necessidade de utilização do SGBD.

Comentários:

Na verdade, eles não podem ser acessados diretamente por meio de qualquer sistema. Os dados
físicos são armazenados em uma organização que depende de um sistema gerenciador de banco
de dados específico, logo não é possível acessá-los diretamente por meio de qualquer sistema.

                                                                               Gabarito: Errado

36. (CESPE / MC – 2013) Uma das atribuições do administrador de banco de dados é definir a
    estratégia que determinará como será feito o becape do banco de dados.

Comentários:


---

Perfeito, essa é uma das tarefas do DBA. Ele é responsável por definir um roteiro ou procedimento
de backup do banco de dados, em que são definidas a periodicidade, o tipo de backup, a mídia de
armazenamento e outras especificidades.

                                                                                Gabarito: Correto

37. (CESPE / MC – 2013) Atualmente, os bancos de dados são utilizados para armazenar e processar
    dados de caracteres em geral, não apresentando recursos para tratar dados multimídias, como
    filmes e fotografias.

Comentários:

É claro que bancos de dados podem tratar dados multimídias como filmes e fotografias. Da mesma
forma que ele é capaz de manipular números, caracteres, datas, entre outros – ele é capaz de tratar
também arquivos binários como filmes, fotografias, áudios, etc. Em geral, armazenam-se nas
tabelas uma referência para a localização do arquivo no sistema de arquivos do sistema operacional.

                                                                                 Gabarito: Errado

38. (CESPE / BANCO DA AMAZÔNIA - 2012) A arquitetura ANSI SPARC é um modelo de
    interoperabilidade de dados, voltado para o domínio de sistemas de gerenciamento de bases de
    dados (SGBDs). O modelo em questão é organizado em três níveis, dos quais um é o nível
    conceitual, mais semântico; e outro é o nível físico ou interno, mais sintático.

Comentários:

A Arquitetura ANSI/SPARC pode ser considerada um modelo de interoperabilidade de dados no
sentido de que permite a comunicação entre níveis diferentes de abstração. Ademais, ela é
organizada em três níveis: externo, conceitual e interno. O nível conceitual é realmente mais
semântico (não o mais semântico), no sentido de que trata do significado ou sentido dos dados; já
o nível físico ou interno é mais sintático, no sentido de que trata da estrutura dos dados em si.

                                                                                Gabarito: Correto

39. (CESPE / INMETRO - 2010) No processamento de transações em sistemas de bancos de dados,
    a implementação de mecanismos de controle de concorrência garante às transações a
    característica de:

   a) isolamento.
   b) atomicidade.
   c) durabilidade.
   d) prioridade.
   e) individualidade.


---

Comentários:

Mecanismo de controle de concorrência garantem às transações a característica de isolamento. O
isolamento trata de um conjunto de técnicas que tentam evitar que transações paralelas interfiram
umas nas outras, fazendo com que o resultado de várias transações em paralelo seja o mesmo
resultado que essas transações teriam caso fossem executadas sequencialmente (uma após a
outra).

                                                                               Gabarito: Letra A

40. (CESPE / BASA – 2010) O catálogo do sistema é um repositório com função de armazenar as
    definições dos esquemas dos bancos de dados.

Comentários:

O catálogo inclui informações como os nomes de arquivos, itens de dados, detalhes sobre o
armazenamento de cada arquivo, informações sobre mapeamento entre esquemas e restrições,
além de muitos outros tipos de informações que são necessárias para o SGBD.

                                                                               Gabarito: Correto

41. (CESPE / Banco da Amazônia – 2010) O mapeamento do nível conceitual para o nível interno é
    a chave para a independência de dados física, assim como o mapeamento do nível externo para
    o conceitual é a chave para a independência lógica de dados.

Comentários:

Perfeito... do conceitual para o interno é a independência física de dados e do externo para o
conceitual é a independência lógica de dados.

                                                                               Gabarito: Correto


---

                      QUESTÕES COMENTADAS – FCC
42. (FCC / DPE-RS – 2017) O dicionário de dados de um banco de dados relacional:

   a) não se aplica a tabelas com pequeno número de registros.
   b) não considera o armazenamento da lista de atributos chave das tabelas.
   c) armazena, dentre outras informações, nomes de tabelas e de seus atributos.
   d) ignora os domínios de cada atributo das tabelas.
   e) somente se aplica a tabelas com grande número de atributos.

Comentários:

A definição/descrição do banco de dados fica armazenada no próprio banco de dados na forma de
um catálogo ou dicionário de dados – esses dados sobre o banco de dados são chamados de
metadados. Dito isso, vamos aos itens: (a) Errado, aplica-se a tabelas de quaisquer quantidades de
registros; (b) Errado, ele considera o armazenamento de todos os atributos de uma tabela – chave
ou não-chave; (c) Correto, armazena diversas informações como nomes de tabelas e seus atributos;
(d) Errado, ele armazena os domínios de cada atributo das tabelas; (e) Errado, aplica-se a tabelas
de quaisquer quantidades de registros.

                                                                                Gabarito: Letra C

43. (FCC / DPE-SP - 2015) As transações em bancos de dados distribuídos precisam preservar as
    propriedades conhecidas como ACID. Dentre estas propriedades está a:

   a) Atomicidade.
   b) Confidencialidade.
   c) Autenticidade.
   d) Integridade.
   e) Disponibilidade.

Comentários:

As propriedades ACID são: Atomicidade, Consistência, Isolamento e Durabilidade. A
Confidencialidade, Autenticidade, Integridade e Disponibilidade são princípios fundamentais da
segurança da informação e nada tem a ver com as propriedades de uma transação.

                                                                                Gabarito: Letra A

44. (FCC / SABESP - 2014) Um SGBD possui a capacidade de mudar o esquema interno sem ter de
    alterar o esquema conceitual, consequentemente não havendo necessidade de alteração do
    esquema externo. As mudanças no esquema interno podem ser necessárias para que alguns


---

   arquivos físicos possam ser reorganizados, por exemplo, pela criação de estruturas de acesso
   adicionais para aperfeiçoar o desempenho da recuperação ou atualização de dados.

   Essa característica de um SGBD é denominada:

   a) modelo lógico de dados.
   b) modelo físico de dados.
   c) independência modular.
   d) representação conceitual.
   e) independência física de dados.

Comentários:

A primeira frase já mata a questão: “Um SGBD possui a capacidade de mudar o esquema interno sem
ter de alterar o esquema conceitual, consequentemente não havendo necessidade de alteração do
esquema externo” – trata-se da independência física de dados. Vejamos:

- Independência Física dos Dados: trata da capacidade de alterar o esquema interno sem ter de
alterar o esquema conceitual. Logo, os esquemas externos também não precisam ser alterados. O
mapeamento nível conceitual para o interno é a chave para a independência física de dados.

                                                                             Gabarito: Letra E

45. (FCC / TJ-AP – 2014) Em um determinado momento, a coleção das informações armazenadas
    em um banco de dados é:

   a) o esquema desse banco de dados.
   b) uma instância desse banco de dados.
   c) um metamodelo desse banco de dados.
   d) o projeto geral desse banco de dados.
   e) uma partição desse banco de dados.

Comentários:

A coleção das informações armazenadas em um banco de dados em um determinado momento é
também chamada de instância de um banco de dados. Instância (ou Estado) é o conjunto de dados
armazenados no banco e um determinado momento de operação. O esquema é a descrição da
estrutura dos dados; a instância são os dados em si!

                                                                             Gabarito: Letra B

46.(FCC / TCE-AM – 2012) O modelo conceitual de dados:


---

   a) é aquele em que os objetos, suas características e relacionamentos têm a representação de
   acordo com as regras de implementação e limitantes impostos por algum tipo de tecnologia.

   b) é aquele em que os objetos, suas características e relacionamentos têm a representação fiel
   ao ambiente observado, independente de limitações quaisquer impostas por tecnologias,
   técnicas de implementação ou dispositivos físicos.

   c) é aquele elaborado respeitando-se e implementando-se conceitos tais como chaves de
   acesso, controle de chaves duplicadas, itens de repetição (arrays), normalização, ponteiros e
   integridade referencial, entre outros.

   d) é a fase da modelagem na qual é necessário considerar todas as particularidades de
   implementação, principalmente o modelo que será utilizado para a implementação futura.

   e) está sempre associado às fases de projeto, contrastando com o modelo lógico, que sempre
   está associado à fase de análise, quando utilizado com as metodologias de desenvolvimento de
   sistemas e implementado por ferramentas CASE.

Comentários:

(a) Errado, o modelo conceitual é independente de tecnologia; (b) Correto; (c) Errado, o modelo
conceitual não trata de conceitos como chave de acesso, controle de chaves duplicadas, arrays,
normalização, entre outros; (d) Errado, o modelo conceitual é um esboço, logo não precisa
considerar todas as particularidades de implementação; (e) Errado, é o inverso – nas fases de
análise, busca-se representar o problema e nas fases de projeto, busca-se representar a solução do
problema. Logo, a fase de análise está mais ligada ao modelo conceitual enquanto a fase de projeto
está mais ligada ao modelo lógico.

                                                                                 Gabarito: Letra B

47. (FCC / MPE-SE – 2013) A capacidade de alterar o esquema conceitual sem mudar o esquema
   externo ou os programas, podendo modificar o esquema conceitual para expandir o banco de
   dados (adicionando um tipo de registro ou item de dados), variar as restrições ou reduzir o banco
   de dados (removendo um tipo de registro ou item de dados) é chamada de:

   a) modularidade.
   b) modelo conceitual.
   c) independência lógica de dados.
   d) polimorfismo.
   e) agregação.

Comentários:


---

A capacidade de alterar o esquema conceitual sem mudar o esquema externo ou os programas é
chamado de independência lógica de dados. A independência lógica dos dados trata da capacidade
de alterar o esquema conceitual sem precisar modificar os esquemas externos ou aplicações. O
mapeamento nível externo para o conceitual é a chave para a independência lógica de dados.

                                                                             Gabarito: Letra C

48.(FCC / TCE-SP - 2010) A propriedade das transações de um SGBD que garante: “ou todas as
   operações da transação são refletidas corretamente no banco de dados ou nenhuma o será” é
   a:

   a) Atomicidade.
   b) Isolamento.
   c) Consistência.
   d) Integridade.
   e) Durabilidade.

Comentários:

A propriedade de atomicidade estabelece que: uma transação é uma unidade de processamento
atômica que deve ser executada integralmente até o fim ou não deve ser executada de maneira
alguma – em conformidade com o enunciado da questão.

                                                                            Gabarito: Letra A

49.(FCC / TRT 20 - 2010) Em relação à execução de uma transação em um banco de dados,
   considere:

   Para que uma transação seja efetivada, todas as ações que compõem a respectiva unidade de
   trabalho devem ser concluídas com sucesso. Caso contrário, a ação que constituiu falha e a
   transação devem ser desfeitas.

   A afirmação refere-se a uma das quatro propriedades da integridade de uma transação,
   denominada:

   a) Atomicidade.
   b) Isolamento.
   c) Durabilidade.
   d) Consistência.
   e) Efetividade.

Comentários:


---

A questão afirma que – para que uma transação seja efetivada, todas as ações que compõem a
respectiva unidade de trabalho devem ser concluídas com sucesso ou a ação que constituiu a falha
e a transação devem ser desfeitas. Trata-se, evidentemente, da propriedade de atomicidade – que
é a propriedade que mais cai em provas de banco de dados.

                                                                               Gabarito: Letra A

50. (FCC / TCE-SP – 2009) Considerando que os dados constituem um dos bens mais valiosos de
    uma empresa, é necessário que haja um papel que tenha a responsabilidade central pelos dados,
    principalmente entendendo as necessidades empresariais nos altos níveis da organização. Tal
    papel é mais adequadamente desempenhado pela:

   a) administração de banco de dados.
   b) administração de dados.
   c) alta administração da organização.
   d) análise de sistemas.
   e) gerência de sistemas.

Comentários:

A questão trata da padronização dos dados corporativos. Entender a organização e sua relação com
as informações de forma a gerenciar os dados de maneira eficiente é reponsabilidade da equipe de
administração de dados.

                                                                               Gabarito: Letra B

51. (FCC / TCE-SP – 2009) As três visões da arquitetura básica de um SGBD, pela ordem, desde a
    mais próxima do usuário até a mais distante, são:

   a) externa, conceitual e interna.
   b) externa, interna e conceitual.
   c) conceitual, interna e externa.
   d) conceitual, externa e interna.
   e) interna, conceitual e externa.

Comentários:

As três visões da arquitetura básica de um SGBD, pela ordem, desde a mais próxima do usuário até
a mais distante, são externa, conceitual e interna.

                                                                               Gabarito: Letra A


---

                      QUESTÕES COMENTADAS – FGV
52. (FGV / TJ-RN - 2023) Em banco de dados, uma transação é composta por diversas operações
    sobre os dados, como leitura, alteração, inserção e remoção. Contudo, a transação é percebida
    como uma operação lógica única sobre os dados. Com isso, para garantir a consistência de um
    banco de dados, as transações devem satisfazer algumas propriedades, como:

   (i) todas as operações da transação são executadas em caso de sucesso; ou
   (ii) em caso de falhas, todas as operações são desfeitas e o banco de dados deve voltar ao mesmo
   estado em que estava antes do início da transação.

   A propriedade de uma transação de banco de dados descrita é a:

   a) atomicidade;
   b) consistência;
   c) isolamento;
   d) durabilidade;
   e) redundância.

Comentários:

A questão trata da atomicidade, que é a propriedade que garante que todas as operações de uma
transação sejam tratadas como uma unidade lógica única, oferecendo segurança e consistência aos
dados do banco.

                                                                                Gabarito: Letra A

53. (FGV / SEAD-AP – 2022) Os sistemas gerenciadores de bancos de dados são largamente
    utilizados em aplicações computacionais, pois oferecem um conjunto de propriedades
    importantes para a segurança e confiabilidade dos dados, conhecido pela sigla ACID.

   O propósito da propriedade correspondente à letra I na referida sigla é:

   a) garantir a independência dos dados em relação ao hardware empregado.
   b) garantir a independência dos dados em relação ao sistema gerenciador de dados.
   c) garantir o isolamento das transições quando executadas por processos concomitantes.
   d) permitir a integração de diferentes gerenciadores de bancos de dados.
   e) permitir a inter-relação de diferentes padrões internacionais de codificação de dados.

Comentários:


---

ACID (Atomicidade, Consistência, Isolamento e Durabilidade). O Isolamento trata do conjunto de
técnicas que tentam evitar que transações paralelas interfiram umas nas outras, fazendo com que
o resultado de várias transações em paralelo seja o mesmo resultado que essas transações teriam
caso fossem executadas sequencialmente (uma após a outra).

                                                                                  Gabarito: Letra C

54. (FGV / TJ-RO – 2021) No contexto da implementação de bancos de dados, o acrônimo ACID
    denota o conjunto de propriedades que devem ser observadas por sistemas transacionais. Essas
    quatro propriedades são:

   a) Amorfabilidade, Concorrência, Integridade e Durabilidade;
   b) Atomicidade, Consistência, Isolamento e Durabilidade;
   c) Atualização, Coesão, Inserção e Deleção;
   d) Auditabilidade, Conformidade, Independência e Distribuição;
   e) Automação, Concorrência, Integridade e Distribuição.

Comentários:

[A] – Atomicidade
[C] – Consistência
[I] – Isolamento
[D] – Durabilidade

                                                                                  Gabarito: Letra B

55. (FGV / MPE-AL– 2018) O conjunto de programas responsável pelo gerenciamento de uma base
    de dados e que, entre outras funções, suporta uma linguagem de consulta, gera relatórios e
    disponibiliza uma interface para que os seus clientes possam incluir, alterar ou consultar dados,
    é chamado de:

   a) Banco de Dados Relacional (BDR).
   b) Dicionário de Dados (DD).
   c) Modelo Entidade Relacionamento (MER).
   d) Sistema de Suporte à Decisão (SSD).
   e) Sistema Gerenciador de Bancos de Dados (SGBD).

Comentários:

O conjunto de programas responsável pelo gerenciamento de uma base de dados é o Sistema
Gerenciador de Bancos de Dados (SGBD).

                                                                                  Gabarito: Letra E


---

56. (FGV / Prefeitura de Paulínia - SP – 2016) A execução de transações de bancos de dados deve
    observar um conjunto de propriedades, cuja finalidade é a manutenção da integridade dos
    dados armazenados nas tabelas. Assinale a opção que apresenta as propriedades usualmente
    implementadas nos sistemas gerenciadores de bancos de dados:

   a) Independência de dados e integridade referencial.
   b) Manutenção de logs e extração de backups.
   c) Segurança, criptografia e sigilo.
   d) Atomicidade, durabilidade, consistência e isolamento.
   e) Performance, segurança e escalabilidade.

Comentários:

As propriedades de transações usualmente implementadas nos sistemas gerenciadores de bancos
de dados são: ACID (Atomicidade, Consistência, Isolamento e Durabilidade).

                                                                             Gabarito: Letra D

57. (FGV / DPE-RJ – 2014) A sigla DBA é usualmente empregada para designar um profissional que
    é responsável:

   a) pela administração, instalação, configuração e monitoramento de instalações de bancos de
   dados.
   b) pela concepção, desenvolvimento e implantação de sistemas gerenciadores de bancos de
   dados.
   c) pelo processo de coleta e exploração de dados para geração de novos conhecimentos.
   d) pelo teste e manutenção de sistemas WEB construídos sob a égide de metodologias ágeis.
   e) pelo treinamento e certificação para utilização de gerenciadores de bancos de dados.

Comentários:

(a) Correto; (b) Errado, quem concebe, desenvolve e implanta SGBD é o programador da empresa
produtora do SGBD; (c) Errado, não faz qualquer sentido; (d) Errado, também não faz o mínimo
sentido; (e) Errado, ele não é responsável por treinamento e certificação para utilização de
gerenciadores de bancos de dados.

                                                                             Gabarito: Letra A

58. (FGV / AL-MT – 2013) Características que distinguem a abordagem de bancos de dados
    relacionais e centralizados da abordagem tradicional, baseada em processamento de arquivos,
    estão listadas a seguir à exceção de uma. Assinale-a.


---

   a) Compartilhamento de dados e processamento de transações multiusuários.
   b) Suporte para múltiplas visões de dados.
   c) Isolamento entre os programas e os dados.
   d) Dados são armazenados e tratados somente como cadeias de caracteres.
   e) Natureza autodescritiva do sistema de bancos de dados.

Comentários:

A penúltima opção não está no rol das quatro características, portanto está errada.

                                                                                Gabarito: Letra D

59. (FGV / AL-MT – 2013) O modelo de dados abstrato que descreve a estrutura de um banco de
    dados de forma independente de um SGBD chama-se modelo:

   a) lógico.
   b) conceitual.
   c) físico.
   d) algorítmico.
   e) funcional.

Comentários:

Se é independente de um SGBD, trata-se do Modelo Conceitual.

                                                                                Gabarito: Letra B

60. (FGV / BADESC - 2010) A arquitetura de um SGBD ou a arquitetura de um sistema de banco de
    dados, também denominada de arquitetura ANSI/SPARC em três níveis, determina que um
    SGBD descreva como os dados devem ser armazenados e acessados e conter estes mesmos
    dados de fato armazenados.

   As terminologias desta arquitetura que contêm essas descrições e os dados de fato
   armazenados, são respectivamente:

   a) esquema físico e nível físico.
   b) nível físico e esquema físico.
   c) nível físico e esquema conceitual.
   d) nível conceitual e esquema físico.
   e) nível conceitual e esquema conceitual.

Comentários:


---

A terminologia que contém a descrição do banco de dados é o esquema; já a terminologia que
contém os dados de fato armazenados é o nível físico/interno; a descrição respectiva do nível físico
é o esquema físico/interno.

                                                                                 Gabarito: Letra A

61. (FGV / SEFAZ-RJ – 2008) No funcionamento de um sistema de gerenciamento de banco de
    dados, uma situação de falha ocorre quando dois usuários tentam alterar, simultaneamente, um
    mesmo registro. Por exemplo, no caso de dois clientes de uma empresa de cartões de crédito
    tentarem realizar, num dado instante, a liquidação de um mesmo boleto da mesma fatura, um
    deles receberá uma mensagem de falha. A situação descrita é conhecida por:

   a) Multlock.
   b) Crashing.
   c) Overlock.
   d) Locking.
   e) Deadlock.

Comentários:

Questão extremamente polêmica! Um lock ocorre quando um processo bloqueia/trava um
determinado registro para que ele não seja alterado por outra transação. Já um deadlock ocorre
quando há um lock mútuo, isto é, dois ou mais processos bloqueiam/travam um ao outro,
resultando em um impasse porque ambos esperam a liberação um do outro. Ocorre que a questão
menciona no exemplo que somente um dos clientes recebeu uma mensagem de falha, logo se
trataria de um lock (caso fosse um deadlock, ambos receberiam uma mensagem de falha). Dito isso,
meu gabarito seria Locking, mas a banca considerou Deadlock.

                                                                                  Gabarito: Letra E

62. (FGV / SEFAZ-MS - 2006) A implementação de Sistemas Gerenciadores de Banco de Dados -
    SGBD proporciona duas grandes vantagens, que consistem em:

   I. impedir que um determinado código ou chave em uma tabela não tenha correspondência em
   outra tabela.

   II. permitir o armazenamento da informação em um único local com acesso descentralizado e,
   sendo compartilhada com vários sistemas, os usuários estarão utilizando uma informação
   confiável.

   Essas vantagens são conhecidas por:


---

   a) Manutenção de Integridade / Eliminação de Inconsistências.
   b) Independência dos Dados / Eliminação de Redundâncias.
   c) Independência dos Dados / Eliminação de Inconsistências.
   d) Restrições de Segurança / Eliminação de Inconsistências.
   e) Restrições de Segurança / Eliminação de Redundâncias.

Comentários:

Impedir que um determinado código ou chave em uma tabela não tenha correspondência em outra
tabela é uma restrição de integridade – que a questão chamou de manutenção de integridade. Ela
é especificada entre duas tabelas e utilizada para manter a consistência entre linhas nas duas
tabelas.

Permitir o armazenamento da informação em um único local com acesso descentralizado e, sendo
compartilhada com vários sistemas, os usuários estarão utilizando uma informação confiável –
trata-se de uma eliminação de inconsistências. A inconsistência ocorre quando um mesmo campo
tem valores diferentes em sistemas diferentes.

Exemplo: o estado civil de uma pessoa é solteiro em um sistema e casado em outro. Isto ocorre
porque esta pessoa atualizou o campo em um sistema e não o atualizou em outro. Quando o dado
é armazenado em um único local e compartilhado pelos sistemas, este problema não ocorre. Dessa
forma, trata-se de Manutenção de Integridade/Eliminação de Inconsistências.

                                                                            Gabarito: Letra A


---

             QUESTÕES COMENTADAS – DIVERSAS BANCAS
63. (FADESP / SEFA-PA – 2022) A informação armazenada do catálogo do Sistema Gerenciador de
    Banco de Dados (SGBD), que possui a estrutura de cada arquivo, o tipo e o formato de
    armazenamento de cada item de dados, é chamada de:

   a) recovery
   b) data center
   c) data mining
   d) metadados
   e) índices

Comentários:

As informações do catálogo são dados sobre os próprios dados (estrutura, tipo, formato, etc), logo
são chamadas de metadados.

                                                                                Gabarito: Letra D

64.(FADESP / SEFA-PA – 2022) Sobre as características de um Sistema Gerenciador de Banco de
   Dados (SGBD), julgue verdadeira (V) ou falsa (F) cada uma das afirmativas a seguir.

   I. Um SGBD tem como propriedade a dependência dos dados do programa. A estrutura dos
   arquivos de dados é armazenada no catálogo do SGDB separadamente dos programas de
   acesso.

   II. Um SGDB multiusuário precisa oferecer suporte para definir múltiplas visões dos dados. Por
   exemplo, uma visão pode ser um subconjunto do banco de dados ou conter um dado virtual que
   é derivado dos arquivos do banco de dados.

   III. Um SGDB precisa garantir que as transações concorrentes sejam realizadas de maneira
   correta, ou seja, quando vários usuários tentarem atualizar o mesmo dado é preciso garantir o
   controle de concorrência para que o resultado das operações seja correto.

   A sequência correta é:

   a) I - F; II - V; III - V.
   b) I - F; II - F; III - V.
   c) I - V; II - V; III - V.
   d) I - F; II - F; III - F.
   e) I - V; II - V; III - F.


---

Comentários:

(I) Errado, SGBD tem como propriedade a independência dos dados do programa; (II) Correto; (III)
Correto.

                                                                                  Gabarito: Letra A

65. (QUADRIX / Prefeitura de Jataí – 2019) Com relação aos conceitos e às definições de banco de
    dados, assinale a alternativa correta:

      a) Um banco de dados não é formado por um conjunto de arquivos, mas sim por um conjunto
      de dados com as mesmas características.

      b) Um banco de dados é um conjunto de dados organizados, com o objetivo de armazenamento
      persistente dos dados, que possui mecanismos de manipulação e recuperação de informações.

      c) Um banco de dados é um conjunto integrado de dados não relacionados logicamente.

      d) A melhor definição para banco de dados é que ele é uma representação estática, visto que os
      dados não podem sofrer alterações temporais.

      e) O banco de dados é uma estrutura de compartilhamento parcial, ou seja, os dados existentes
      em um banco de dados não podem ser compartilhados por várias pessoas; apenas uma pessoa
      por vez pode ter acesso ao banco de dados

Comentários:

(a) Errado, todo banco de dados digital é formado – em última instância – um conjunto de arquivos;
(b) Correto, ele realmente tem o objetivo de persistir os dados e possui mecanismos de manipulação
e recuperação de dados; (c) Errado, os dados são logicamente relacionados; (d) Errado, bancos de
dados possuem uma representação dinâmica, podendo alterar dados e modelos para se ajustar ao
minimundo que eles descrevem; (e) Errado, os dados do banco de dados são compartilhados entre
diferentes grupos de usuários – em geral, cada grupo possui a visão de apenas parte do banco de
dados.

                                                                                  Gabarito: Letra B

66.      (QUADRIX / CREA-TO – 2019) Em um banco de dados, é necessária a abstração dos dados,
      de tal forma que o usuário não se importe com a forma como eles estão armazenados.

Comentários:


---

Abstração é a retirada/redução de detalhes. Um banco de dados abstrai a complexidade de como
os dados estão efetivamente armazenados. Em outras palavras, o usuário não se preocupa com a
maneira como os dados estão fisicamente armazenados – ele se preocupa apenas com os valores
dos dados em si.

                                                                              Gabarito: Correto

67. (CETREDE / Prefeitura de Itaitinga – 2019) Antigamente, os bancos de dados eram manuais.
    Atualmente com a difusão tecnológica a grande maioria dos bancos de dados são digitais. Eles
    compõem um conjunto estruturado de dados que obedecem a um modelo de dados e são
    armazenados em formato digital – em um hardware (geralmente, um servidor da rede –
    storage). NÃO é vantagem de um banco de dados,

   a) maior volume de dados armazenado.
   b) ocupar maior espaço físico.
   c) maior velocidade de acesso aos dados.
   d) permite o compartilhamento de informações.
   e) persistência dos dados: depois de muitos anos, ainda podem ser acessados.

Comentários:

(a) Errado, essa é uma vantagem de bancos de dados; (b) Correto, essa não é uma vantagem de
bancos de dados porque, na verdade, eles ocupam menor espaço físico podendo armazenar mais
dados em um espaço menor; (c) Errado, essa é uma vantagem de bancos de dados; (d) Errado, essa
é uma vantagem de bancos de dados; (e) Errado, essa é uma vantagem de bancos de dados.

                                                                              Gabarito: Letra B

68. (IADES / CRN3 – 2019) No que se refere aos conceitos gerais de banco de dados, assinale a
   alternativa correta.

   a) Os dados, independentes ou não, de um banco de dados formam necessariamente uma
   informação.

   b) Os projetistas, também conhecidos como administradores do banco de dados (database
   administrators), são os usuários iniciantes ou paramétricos do sistema.

   c) Um banco de dados não representa um aspecto do mundo real.

   d) Uma planilha do Microsoft Excel ou uma lista de contatos (nome, telefone e e-mail) de uma
   agenda configuram um banco de dados.


---

   e) A edição ou a alteração dos dados de um banco de dados é muito onerosa ao administrador,
   o que torna comum a prática de sua total exclusão.

Comentários:

(a) Errado, dados e informações são conceitos distintos e os dados não formam necessariamente
informações; (b) Errado, os projetistas não são usuários iniciantes; (c) Errado, um banco de dados
representa uma porção do mundo real, que pode ser chamado de minimundo ou Universo de
Discurso. Qualquer alteração sofrida por esse minimundo deve ser refletida no banco de dados; (d)
Correto, eles podem ser considerados um banco de dados; (e) Errado, não é necessariamente
onerosa – pode ser, inclusive, extremamente simples.

                                                                                Gabarito: Letra D

69. (IDCAP / Prefeitura de Canaã – 2019) A coleção de informações armazenadas de um banco
   de dados é chamada de:

   a) Parâmetros.
   b) Instância.
   c) Esquema.
   d) Arquitetura.
   e) Projeto.

Comentários:

A coleção de informações armazenadas de um banco de dados é chamada de instância. Instância
(ou Estado) é o conjunto de dados armazenados no banco e um determinado momento de operação
– o esquema é a descrição da estrutura dos dados; a instância são os dados em si!

                                                                                Gabarito: Letra B

70. (SUGEP / UFRPE – 2019) O padrão de ANSI/SPARC para arquitetura de SGBD define uma
    arquitetura em três níveis. São eles:

   a) nível interno, nível de usuário e nível físico.
   b) nível interno, nível externo e nível conceitual.
   c) nível externo, nível de tabelas e nível físico.
   d) nível conceitual, nível de usuário e nível de arquivos.
   e) nível de tabelas, nível de arquivos e nível de visão.

Comentários:

Os três níveis são: nível interno, nível externo e nível conceitual.


---

                                                                                 Gabarito: Letra B

71. (CONSULPLAN / TRF 2ª REGIÃO - 2017) Em banco de dados relacional à arquitetura mais
    difundida na literatura é a Arquitetura “Three-Schema” (também conhecida como arquitetura
    ANSI/SPARC), proposta por Tsichritzis & Klug em 1978. A arquitetura “three-schema” pode ser
    utilizada para explicar conceitos de independência de dados, que podem ser definidos como a
    capacidade de alterar o esquema de um nível sem ter que alterar o esquema no próximo nível
    superior. Um SGBD é uma coleção de arquivos e programas inter-relacionados permitindo a
    consulta e modificação de dados, no qual é possível ter uma abstração dos dados em 3 níveis; na
    arquitetura ANSI/SPARC são conhecidos como:

   a) Lógico, físico e hierárquico.
   b) Interno, conceitual e externo.
   c) Relacional, rede e hierárquico.
   d) Conceitual, relacional e hierárquico.

Comentários:

A Arquitetura ANSI/SPARC (Três Esquemas) se divide em três níveis independentes de abstração
de dados: interno, conceitual e externo.

                                                                                 Gabarito: Letra B

72. (INSTITUTO AOCP / EBSERH - 2015) A técnica utilizada para a especificação e explorar
    estrutura orientada a dados para um banco de dados é chamada de Modelagem de dados. Para
    entender como os modelos de dados podem ser usados na prática, depara-se com três estilos
    básicos de modelos de dados. Quais são esses estilos?

   a) Modelos Conceituais, Modelos Lógicos e Modelos de Contexto.
   b) Modelos Conceituais, Modelos de Contexto e Modelos Físicos.
   c) Modelos de Contexto, Modelos Lógicos e Modelos Físicos.
   d) Modelos Conceituais, Modelos Lógicos e Modelos Físicos.
   e) Modelos de Aplicações, Modelos de Contexto e Modelos Conceituais.

Comentários:

Existem três modelos que representam a estrutura ou projeto de um banco de dados em diferentes
níveis de abstração: Modelo Conceitual, Modelo Lógico e Modelo Físico.

                                                                                Gabarito: Letra D


---

73. (FUNDATEC / BRDE - 2015) Uma transação corresponde a uma coleção de operações que
    desempenha uma função lógica única dentro de uma aplicação do sistema de banco de dados e
    deve possuir todas as seguintes propriedades fundamentais, impostas pelos métodos de
    controle de concorrência e recuperação do sistema de gerenciamento de banco de dados,
    EXCETO:

   a) Atomicidade.
   b) Consistência.
   c) Durabilidade.
   d) Escalabilidade.
   e) Isolamento.

Comentários:

Uma transação é um programa em execução ou processo que inclui um ou mais acessos ao banco
de dados, como fazer a leitura de dados ou inserir, excluir e atualizar dados do banco. Ela possui
quatro propriedades: Atomicidade, Consistência, Isolamento e Durabilidade (ACID) –
Escalabilidade não é uma das propriedades de uma transação.

                                                                                Gabarito: Letra D

74. (CETRO / Pref. São Paulo (AFT) - 2014) Em um sistema de informação de uma instituição
    bancária, está sendo realizada uma transação de transferência de valores entre uma conta de
    um cliente para a conta de outro cliente. No decorrer da transação, ocorre uma falha geral no
    sistema e a transação é cancelada. Imagine que o valor da transferência saiu da conta do
    primeiro cliente, mas, antes de ser acrescentado ao saldo do segundo cliente, houve a falha do
    sistema. Caso o banco de dados não possuir a capacidade de recuperar o estado original dos
    dados antes da falha, é correto afirmar que ocorreu um problema de:

   a) integridade.
   b) redundância.
   c) anomalia de acesso.
   d) atomicidade.
   e) isolamento.

Comentários:

Uma transação é uma unidade de processamento atômica que deve ser executada integralmente
até o fim ou não deve ser executada. Nós podemos afirmar que houve um problema de
atomicidade, uma vez que a transação não foi executada totalmente, logo deveria ter ocorrido um
rollback.

                                                                                Gabarito: Letra D


---

75. (FUNCAB / PRODAM-AM - 2014) Uma transação é uma unidade de execução de programa que
    acessa e, possivelmente, atualiza vários itens. Há uma propriedade das transações que garante
    que a execução simultânea de transações resulte em uma situação no sistema equivalente ao
    estado obtido caso as transações tivessem sido executadas uma de cada vez, independente da
    ordem em que são executadas. Essa propriedade denomina-se:

   a) isolamento.
   b) consistência.
   c) atomicidade.
   d) durabilidade.
   e) dinamicidade.

Comentários:

A questão trata da Propriedade de Isolamento, isto é, um conjunto de técnicas que tentam evitar
que transações paralelas interfiram umas nas outras, fazendo com que o resultado de várias
transações em paralelo seja o mesmo resultado que essas transações teriam caso fossem
executadas sequencialmente (uma após a outra).

                                                                               Gabarito: Letra A

76. (VUNESP / DESENVOLVESP - 2014) Há 4 propriedades básicas que uma transação de um
    banco de dados relacional deve respeitar. Assinale a alternativa que contém duas dessas
    propriedades:

   a) Atomicidade e isolamento.
   b) Consistência e normalização.
   c) Durabilidade e paralelismo.
   d) Normalização e atomicidade.
   e) Paralelismo e isolamento.

Comentários:

As propriedades básicas de uma transação são: Atomicidade, Consistência, Isolamento e
Durabilidade (ACID). Dessa forma, podemos julgar os itens:

(a) Correto, ambas são propriedades de uma transação; (b) Errado, normalização não é uma
propriedade de uma transação; (c) Errado, paralelismo não é uma propriedade de uma transação;
(d) Errado, normalização não é uma propriedade de uma transação; (e) Errado, paralelismo não é
uma propriedade de uma transação.

                                                                               Gabarito: Letra A


---

77. (FDC / AGERIO - 2014) A arquitetura ANSI/SPARC de bancos de dados é composta por três
    níveis independentes, cada um deles descrevendo o banco em um nível diferente de abstração.
    Um desses níveis se refere ao armazenamento físico dos dados e à definição das estruturas
    físicas que permitem obter um desempenho satisfatório. Esse nível é conhecido por:

   a) interno
   b) operacional
   c) estratégico
   d) conceitual
   e) externo

Comentários:

O nível responsável pela modelagem do armazenamento físicos dos dados e pela definição de
estruturas físicas é o nível interno. Também conhecido como Nível de Armazenamento, é o meio
mais próximo do meio de armazenamento físico, isto é, aquele que se ocupa com o modo com os
dados estão fisicamente armazenados no banco de dados e no hardware do computador – além da
definição das estruturas físicas que permitem obter um desempenho satisfatório.

                                                                             Gabarito: Letra A

78. (FUNCAB / MDA - 2014) Em 1971, o Comitê sobre Computador e Processamento de
    Informações, abreviado Comitê X3, do American National Standards Institute (ANSI), formou
    um grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de Padrões
    (Standards Planning and Requirements Committee – SPARC), que propôs uma arquitetura de
    esquemas de um sistema de gerência de banco de dados, ou arquitetura de Sistema de Banco
    de Dados (SBD) , arquitetura esta conhecida como ANSI/X3/SPARC ou, simplesmente,
    ANSI/SPARC.

   A arquitetura ANSI/SPARC pode ser usada para melhor explicar o conceito de independência de
   dados. Esse conceito pode ser dividido em:

   a) lógica e física
   b) conceitual e lógica.
   c) física e conceitual.
   d) esquema e lógica.
   e) física e esquema.

Comentários:

A independência de dados trata da capacidade de modificar a definição dos esquemas de
determinado nível, sem afetar o esquema de nível superior. Existem dois níveis de independência
de dados: a independência lógica e a independência física.


---

                                                                              Gabarito: Letra A

79. (FUNCAB / MDA - 2014) Em 1971, o Comitê sobre Computador e Processamento de
    Informações, abreviado Comitê X3, do American National Standards Institute (ANSI), formou
    um grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de Padrões
    (Standards Planning and Requirements Committee – SPARC), que propôs uma arquitetura de
    esquemas de um sistema de gerência de banco de dados, ou arquitetura de Sistema de Banco
    de Dados (SBD), arquitetura esta conhecida como ANSI/X3/SPARC ou, simplesmente,
    ANSI/SPARC.

   A arquitetura ANSI/SPARC possui a seguinte quantidade de níveis:

   a) 2
   b) 3
   c) 5
   d) 6
   e) 8

Comentários:

A Arquitetura ANSI/SPARC se divide em três níveis independentes: externo, conceitual e interno –
dessa forma, ela possui três níveis.

                                                                              Gabarito: Letra B

80.(FUNCAB / MDA - 2014) Em um banco de dados, uma transação constitui uma operação, como
   inclusão, leitura, atualização ou exclusão, realizada em um banco de dados. Nesse contexto,
   alguns princípios devem ser atendidos, tais como:

   I. se ocorrerem falhas que interrompam o processo de atualização de valores de estoque, o
   sistema deve manter os valores antigos.

   II. se a transação for completada sem problemas, a soma das quantidades existentes em estoque
   do produto transferido (nos dois estoques), antes e depois da transação, deve ser a mesma.

   Os princípios definidos em I e II são denominados, respectivamente:

   a) consistência e durabilidade.
   b) durabilidade e independência
   c) independência e confiabilidade
   d) confiabilidade e atomicidade.
   e) atomicidade e consistência.


---

Comentários:

Em (I), a questão trata de uma possível falha que interrompa o processo de atualização de valores e
menciona que – nesse caso – deve-se manter os valores antigos. Trata-se, claramente, da
propriedade de atomicidade: uma transação deve ser executada integralmente até o fim ou não
deve ser executada de maneira alguma;

Em (II), a questão trata do resultado da transação, isto é, a soma da quantidade em estoque deve
ser a mesma, uma vez que houve apenas uma transferência de produtos. Trata-se, claramente, da
propriedade de consistência: a execução de uma transação deve levar o banco de dados de um
estado consistente a um outro estado consistente.

                                                                                 Gabarito: Letra E

81. MS CONCURSOS / CRM/MS – 2014) Na fase de modelagem de um banco de dados, o modelo
    que analisa os limites impostos por alguma tecnologia de banco de dados é o:

   a) Modelo conceitual.
   b) Modelo lógico.
   c) Modelo físico.
   d) Modelo orientado a objeto.

Comentários:

O modelo lógico definirá o tipo de SGBD que será utilizado a fim de limitar as operações sobre os
dados e outros limites que são impostos quando da implementação do modelo. Quando se define
o tipo, reduzem-se as opções de SGBD que podem ser utilizados.

                                                                                 Gabarito: Letra B

82. (UEPA / SEFA – 2013) Uma empresa em sua expansão verificou que existia a necessidade de ser
    realizada a duplicação de dados em arquivos separados como forma de contingência. Em
    relação aos conceitos de banco de dados, a duplicação de dados em arquivos separados é
    conhecida como:

    a) redundância de dados
    b) integridade de dados
    c) relacionamento de dados
    d) entidades de dados
    e) sistemas de gerenciamento de banco de dados.

Comentários:


---

A duplicação de dados em arquivos separados é conhecida como redundância de dados – lembrem-
se que isso não é recomendável!

                                                                                 Gabarito: Letra A

83. (CESGRANRIO / IBGE - 2013) Um sistema de banco de dados sofreu uma falha severa devido à
    perda de energia no meio da execução de um comando SQL de UPDATE que alterava milhares
    de registros. Devido às garantias fornecidas pelo SGBD, após o reinício do sistema, a transação
    de UPDATE foi revertida, e o banco de dados voltou ao seu estado original.

   A propriedade ACID usada nesse caso foi o(a):

   a) isolamento
   b) determinismo
   c) consistência
   d) atomicidade
   e) durabilidade

Comentários:

Essa questão é uma pegadinha do examinador para confundir o aluno. A Atomicidade garante que
ou a transação é integralmente executada ou não é nada executada. Se eu transfiro dinheiro para a
sua conta, o banco tem que mostrar um valor de débito na minha conta e um mesmo valor de
crédito na sua conta. A atomicidade garante que não vai haver um débito na minha conta sem um
crédito na sua conta.

Já a Durabilidade garante que os efeitos de uma transação em caso de sucesso devem persistir no
banco de dados. Em outras palavras, uma vez que uma transação seja efetivada, o banco tem que
persisti-la de maneira durável. Não basta armazenar os valores de débito/crédito em uma memória
volátil que apaga tudo se acabar a energia - os valores devem ser armazenados de forma que,
mesmo que acabe a energia, o servidor de banco de dados trave, a internet caia ou ocorra algum
desastre, os dados devem estar persistidos ou armazenados de forma não volátil.

Como a questão afirma que ocorreu uma perda de energia no meio da execução de um comando,
logo o comando não foi executado integralmente – portanto, estamos falando de atomicidade.

                                                                                Gabarito: Letra D

84.(VUNESP / COREN-SP - 2013) Uma das propriedades que uma transação de um banco de dados
   relacional deve respeitar é a que estabelece que uma transação deva ser completada até seu
   término, não sendo admissível implementá-la apenas parcialmente. Essa é a propriedade da:


---

   a) conexão.
   b) unicidade.
   c) dependência.
   d) atomicidade.
   e) compatibilidade.

Comentários:

A transação que estabelece que uma transação deve ser completada integralmente até seu término
não admitindo ser implementada parcialmente é a atomicidade. Por isso que se diz que essa é uma
propriedade que trata a transação como uma unidade de processamento atômica, isto é, indivisível
– sem possibilidade de ser dividida ou executada parcialmente.

                                                                               Gabarito: Letra D

85. (ESPP / COBRA TECNOLOGIA - 2013) A integridade de uma transação depende de 4
    propriedades conhecidas como ACID, assinale a alternativa que NÃO faz parte destas
    propriedades:

   a) Atomicidade.
   b) Consciência
   c) Isolamento.
   d) Durabilidade.

Comentários:

As Propriedades ACID são: Atomicidade, Consistência, Isolamento e Durabilidade – não leia rápido
demais as questões, caso contrário você pode acabar marcando o item errado :)

                                                                               Gabarito: Letra B

86. (CCV - UFC / UFC - 2013) Em banco de dados, uma transação é um conjunto de
   procedimentos que é executado no banco de dados, que para o usuário é visto como uma única
   ação. Para garantir a integridade de uma transação, algumas propriedades devem dar-se no
   ambiente do banco de dados. De acordo as afirmações abaixo, marque a alternativa correta que
   associa as afirmações a uma das propriedades.

   - Se uma transação é concluída com sucesso, então seus efeitos são persistidos.
   - Ou todas as ações da transação acontecem, ou nenhuma delas acontece.

   a) durabilidade e atomicidade.
   b) isolação e esquematização
   c) durabilidade e consistência.


---

   d) persistência e automação.
   e) isolação e atomicidade.

Comentários:

- Se uma transação é concluída com sucesso, então seus efeitos são persistidos.

Trata-se da Durabilidade: os efeitos de uma transação em caso de sucesso devem persistir no
banco de dados mesmo em casos de quedas de energia, travamentos ou erros;

- Ou todas as ações da transação acontecem, ou nenhuma delas acontece.

Trata-se da Atomicidade: uma transação é uma unidade de processamento atômica que deve ser
executada integralmente até o fim ou não deve ser executada de maneira alguma;

                                                                                  Gabarito: Letra A

87. (ESAF / MF - 2013) Banco de Dados é:

   a) uma relação de dependência entre dados que tem por objetivo atender a uma comunidade
   de usuários.

   b) um conjunto de dados integrados que tem por objetivo impedir acessos indevidos a dados
   armazenados.

   c) um conjunto de dados integrados que tem por objetivo atender a requisitos do sistema
   operacional.

   d) um conjunto de dados integrados que tem por objetivo atender a uma comunidade de
   usuários.

   e) uma estrutura de máquina virtual que tem por objetivo atender a necessidades do software
   de acesso.

Comentários:

(a) Errado, não se trata necessariamente de uma relação de dependência de dados; (b) Errado, ele
não tem por objetivo impedir acessos indevidos a dados armazenados, apesar de poder fazê-lo; (c)
Errado, o objetivo não é atender a requisitos do sistema operacional; (d) Correto, é um conjunto de
dados integrados que tem por objetivo atender a uma comunidade de usuários; (e) Errado, não tem
nada de estrutura de máquina virtual nem tem o objetivo de atender as necessidades do software
de acesso.


---

                                                                                   Gabarito: Letra D

88. (COPEVE-UFAL/ MPE-AL - 2012) A arquitetura ANSI/SPARC define três níveis (ou camadas)
   que ficam entre o banco de dados em si (disco rígido) e as aplicações do usuário; são eles:

   a) físico, tabelas e modelo.
   b) físico, lógico e conceitual.
   c) físico, estrutural e externo.
   d) interno, lógico e conceitual.
   e) interno, conceitual e externo.

Comentários:

Os níveis da Arquitetura ANSI/SPARC que ficam posicionados entre o banco de dados em si (disco
rígido) e as aplicações do usuário são o Nível Interno, Conceitual e Externo.

                                                                                   Gabarito: Letra E

89. (CESGRANRIO / CHESF - 2012) A arquitetura de um Banco de Dados ANSI/SPARC possui
   três níveis. O primeiro desses níveis é responsável pelo armazenamento de dados, o segundo
   serve de interface entre o primeiro e o terceiro nível, o qual, por seu turno, é responsável pela
   visualização dos dados pelo usuário.

   Esses três níveis são denominados, respectivamente, de:

   a) físico, externo e conceitual.
   b) físico, conceitual e externo.
   c) externo, físico e conceitual.
   d) conceitual, externo e físico.
   e) conceitual, físico e externo.

Comentários:

O nível responsável pelo armazenamento de dados é o... Nível Físico. O nível que serve de interface
entre o primeiro e o terceiro nível é o... Nível Conceitual. O nível responsável pela visualização dos
dados pelo usuário é o... Nível Externo.

                                                                                   Gabarito: Letra B

90.(UNIRIO / UNIRIO – 2012) Em relação aos níveis de abstração de modelo de banco de dados,
   pode-se afirmar que:


---

   a) existem três níveis de abstração (conceitual, lógico e físico) em que todos os níveis são
   totalmente dependentes do SGBD escolhido para construção do banco de dados.

   b) existem três níveis de abstração (conceitual, lógico e físico) em que o único nível dependente
   do SGBD escolhido para construção do banco de dados é o nível físico onde é elaborado o
   modelo Entidade- Relacionamento do banco de dados.

   c) existem dois níveis de abstração (lógico e físico) em que o primeiro representa o modelo
   gráfico do banco de dados independente de SGBD e o segundo corresponde aos aspectos de
   armazenamento, independente do SGBD.

   d) existem dois níveis de abstração (lógico e físico), ambos totalmente dependentes do SGBD
   escolhido para construção do banco de dados. No primeiro nível, é utilizado, por exemplo, o
   modelo Entidade- Relacionamento para elaboração do esquema do banco de dados enquanto
   que, no segundo nível, é empregado o modelo relacional.

   e) existem três níveis de abstração (conceitual, lógico e físico) em que os modelos elaborados
   para o nível conceitual são independentes do SGBD escolhido para construção do banco de
   dados, enquanto que os modelos e artefatos elaborados para o nível lógico e o nível físico são
   totalmente dependentes do SGBD.

Comentários:

Essa questão é um exemplo de como as bancas infelizmente misturam, por vezes, os termos das
classificações. Você lê nível e já pensa se tratar da classificação da Arquitetura ANSI/SPARC, mas
na verdade se trata da classificação de Projeto de Banco de Dados. Como você sabe disso,
professor? Porque ela menciona Conceitual, Lógico e Físico. Dito isso, existem realmente três níveis
de abstração (conceitual, lógico e físico) em que os modelos elaborados para o nível conceitual são
independentes do SGBD escolhido para construção do banco de dados, enquanto que os modelos
e artefatos elaborados para o nível lógico e o nível físico são totalmente dependentes do SGBD.

                                                                                  Gabarito: Letra E

91. (CESGRANRIO / LIQUIGÁS – 2012) As transações em um banco de dados devem possuir
    algumas propriedades, conhecidas como propriedades ACID. Nesse contexto, a propriedade
    relacionada à letra I é a(o):

   a) independência de dados
   b) integridade referencial
   c) inconsistência
   d) identificação
   e) isolamento

Comentários:


---

A = Atomicidade; C = Consistência; I = Isolamento; D = Durabilidade.

                                                                                       Gabarito: Letra E

92. (FUNCAB / PRODAM-AM - 2010) Marque a alternativa que apresenta os três níveis descritos na
    proposta ANSI/SPARC para a definição de uma arquitetura de três esquemas para sistemas de
    banco de dados.

   a) Conceitual, Lógico e Físico.
   b) Hierárquico, Em Redes e Relacional.
   c) Conceitual, Relacional e Orientado a Objetos.
   d) Interno, Conceitual e Externo.
   e) Relacional, Objeto-Relacional e Orientado a Objetos.

Comentários:

Já perceberam como essa é uma questão comum, não é? Os níveis da Arquitetura ANSI/SPARC são:
Interno, Conceitual e Externo.

                                                                                       Gabarito: Letra D

93. (PACTCPB / PREF PATOS - 2010) Sobre a arquitetura ANSI/SPARC de sistemas de banco de
    dados, julgue corretos os itens abaixo:

   I) Divide a arquitetura em dois níveis.
   II) O nível interno define como os dados são vistos pelos usuários individuais.
   III) O nível lógico dá uma visão comunitária dos dados.
   IV) O nível lógico compõe-se de tabelas.

   Estão corretos:

   a) I e III.
   b) I e IV.
   c) I e II.
   d) III e IV.
   e) II e IV.

Comentários:

(I) Errado, ela divide a arquitetura em três níveis; (II) Errado, essa é uma função do nível externo; (III)
Correto, o nível lógico de fato oferece uma visão comunitária dos dados; (IV) Correto, o nível lógico
realmente compõe-se – em geral – de tabelas em um banco de dados relacional.


---

                                                                                Gabarito: Letra D

94.(ESAF / SUSEP - 2010) Um Banco de Dados é um:

   a) conjunto de objetos da realidade sobre os quais se deseja manter informações.
   b) conjunto de operações sobre dados integrados destinados a modelar processos.
   c) software que incorpora as funções de definição, recuperação e alteração de dados.
   d) software que modela funções de definição, recuperação e alteração de dados e programas.
   e) conjunto de dados integrados destinados a atender às necessidades de uma comunidade de
   usuários.

Comentários:

(a) Errado, essa é a definição de entidade do modelo entidade-relacionamento; (b) Errado, um
banco de dados não é um conjunto de operações, mas um conjunto de dados; (c) Errado, um banco
de dados não é um software; (d) Errado, um banco de dados não é um software; (e) Correto, trata-
se de um conjunto de dados integrados destinados a atender às necessidades de uma comunidade
de usuários.

                                                                                Gabarito: Letra E

95. (MOVENS / PREF MANAUS - 2010) Uma transação é uma unidade de execução de programa
    que acessa e, possivelmente, atualiza itens de dados. Com base nesse assunto, assinale a opção
    que apresenta uma propriedade das transações:

   a) divergência
   b) atomicidade
   c) compartilhamento
   d) Variabilidade

Comentários:

As Propriedades ACID são: Atomicidade, Consistência, Isolamento e Durabilidade. Logo, não há
que se falar em Divergência, Compartilhamento e Variabilidade.

                                                                                Gabarito: Letra B

96. FCC / SEFAZ - SP - 2009) A arquitetura ANSI/SPARC aplicada aos bancos de dados divide-os
   em níveis com as seguintes características:

   I. O que se ocupa do modo como os dados são fisicamente armazenados.
   II. O que se ocupa do modo como os dados são vistos por usuários individuais.


---

   III. Nível lógico de comunidade ou apenas lógico (mais abstrato que o físico e diferente da visão
   do usuário individual).

   Em um projeto arquitetural, os itens I, II e III são classificados, respectivamente, como níveis

   a) externo, conceitual e interno.
   b) externo, interno e conceitual.
   c) interno, externo e conceitual.
   d) interno, conceitual e externo.
   e) conceitual, externo e interno.

Comentários:

Quem se ocupa com o modo como os dados são fisicamente armazenados é o nível... interno; quem
se ocupa com o modo como os dados são vistos por usuários individuais é o nível... externo; o nível
lógico de comunidade (ou apenas lógico) é também chamado de nível... conceitual.

                                                                                   Gabarito: Letra C

97. (COSEAC / DATAPREV - 2009) Uma transação acontece como um todo ou nada deve ser feito.
    A esta propriedade dar-se o nome de:

   a) durabilidade;
   b) consistência;
   c) isolamento;
   d) atomicidade;
   e) integridade.

Comentários:

Mais uma das dezenas de questões sobre... atomicidade! Propriedade que estabelece que uma
transação é uma unidade de processamento atômica que deve ser executada integralmente até o
fim ou não deve ser executada de maneira alguma.

                                                                                   Gabarito: Letra D

98. (CESGRANRIO / CASA DA MOEDA - 2009) Em reunião técnica sobre a construção de um
   sistema financeiro, foi levantada a exigência de que uma transação deve ter todas as suas
   operações executadas, em caso de sucesso, ou nenhum efeito sobre a base de dados, em caso
   de falha. O administrador de banco de dados afirma que não há problema, uma vez que o SGBD
   corporativo garante a propriedade ACID de:

   a) atomicidade.


---

   b) isolamento.
   c) durabilidade.
   d) consistência.
   e) unicidade.

Comentários:

A exigência é de que uma transação tenha todas as suas operações executadas, em caso de sucesso,
ou nenhum efeito sobre a base de dados, em caso de falha. Galera, essa é mais uma questão sobre
a propriedade de... atomicidade. Já viram que ela é importante, não é?

                                                                               Gabarito: Letra A

99. (FUNIVERSA / IPHAN - 2009) O American National Standards Institute (ANSI), por meio do
   Standards Planning and Requirements Committee (SPARC), estabeleceu um padrão para o
   desenvolvimento de tecnologias de Banco de Dados (BD), definindo uma arquitetura de três
   níveis independentes. Assinale a alternativa que apresenta os três níveis da arquitetura
   ANSI/SPARC para banco de dados:

   a) Plano, Relacional e Hierárquico.
   b) Local, Remoto e Distribuído.
   c) Interno, Conceitual e Externo.
   d) File, Table e View.
   e) DSL, DDL e DML.

Comentários:

A Arquitetura ANSI/SPARC se divide em três níveis independentes: interno, conceitual e externo.

                                                                               Gabarito: Letra C

100. (UNIRIO / UNIRIO - 2009) A propriedade de atomicidade garante que:

   a) a transação será executada no menor tempo possível.
   b) a execução da transação não interferirá na execução das transações concorrentes a ela.
   c) a transação cancelará as transações concorrentes.
   d) ou a transação será executada até seu fim com sucesso ou nenhuma operação da transação
   terá efeito.
   e) a execução das operações da transação serão registradas no log (histórico).

Comentários:


---

(a) Errado, a atomicidade não possui qualquer relação com o tempo; (b) Errado, esse item trata da
execução de propriedade de isolamento; (c) Errado, esse item não faz o menor sentido; (d) Correto,
a atomicidade garante que a transação será executada até o fim com sucesso ou nenhuma operação
da transação terá efeito – é tudo ou nada; (e) Errado, esse item não faz o menor sentido.

                                                                                Gabarito: Letra D

101. (FGV / MEC – 2009) Em um Sistema Gerenciador de Banco de Dados - SGBD, os elementos
   de dados possuem uma estrutura lógica visualizada na forma de tabelas. Nesse sentido, existem
   inclusive, pacotes nos SGBDs que podem vincular elementos oriundos de várias tabelas desde
   que essas compartilhem elementos comuns de dados. Essa estrutura lógica de dados é
   conhecida como do tipo:

   a) em rede.
   b) relacional.
   c) em pilha.
   d) hierárquica.
   e) em árvore.

Comentários:

A estrutura lógica de dados organizados em tabelas é chamada de relacional.

                                                                                Gabarito: Letra B

102. (FGV / MEC – 2009) No que diz respeito ao acesso a banco de dados em Java, o controle de
   transações pode ser feito por funções. Assim, para confirmar uma transação no BD e para
   cancelar as alterações da transação, são utilizadas, respectivamente, as seguintes funções:

   a) commit() e recovery()
   b) confirm() e rollback()
   c) commit() e cancel()
   d) confirm() e cancel()
   e) commit() e rollback()

Comentários:

Para confirmar uma transação, utiliza-se o commit(); para cancelar alterações, utiliza-se o
rollback().

                                                                                Gabarito: Letra E


---

103. (FGV / Senado Federal – 2008) Considere as seguintes afirmativas a respeito das
   propriedades ACID (Atomicidade, Consistência, Isolamento, Durabilidade) de uma transação T
   de banco de dados:

   I. A atomicidade garante que todos os efeitos da transação T sejam integralmente refletidos no
   banco de dados ou que, em caso de falha, nenhum deles seja aceito.

   II. A consistência garante que, se o banco de dados estiver inicialmente em estado inconsistente,
   a execução da transação T, por si só, é capaz de deixar o banco de dados em um estado
   consistente.

   III. O isolamento garante que a execução da transação T seja isolada da execução de quaisquer
   outras transações simultâneas, de modo a evitar que o banco de dados venha a assumir um
   estado inconsistente.

   IV. A durabilidade garante que as atualizações promovidas pela transação T no estado do banco
   de dados sejam sempre mantidas, mesmo que ocorra uma falha no sistema durante a sua
   execução.

   Assinale:

   a) se apenas as afirmativas I, II e III estiverem corretas.
   b) se apenas as afirmativas I e II estiverem corretas.
   c) se apenas as afirmativas II, III e IV estiverem corretas.
   d) se apenas as afirmativas I e III estiverem corretas.
   e) se todas as afirmativas estiverem corretas.

Comentários:

(I) Correto, uma transação é uma unidade de processamento que deve ser executada por completo
ou não deve ser executada; (II) Errado, uma transação sempre leva um banco de dados de um estado
consistente para outro estado consistente; (III) Correto, uma transação deve parecer como se
estivesse sendo executada isoladamente – as transações devem ocorrer sem que outras interfiram
em sua execução; (IV) Errado, alterações aplicadas a um banco de dados por meio de uma transação
confirmada devem persistir no banco de dados, mesmo que haja alguma falha no sistema.

                                                                                 Gabarito: Letra D

104. (NCE-UFRJ / UFRJ - 2008) A sigla ACID é usualmente empregada para evocar as
   propriedades que as transações executadas num banco de dados devem possuir. Essas
   propriedades são:

   a) atomicidade, consistência, independência, durabilidade;
   b) atomicidade, concorrência, indexação, durabilidade;


---

   c) atualização, concorrência, inserção, deleção;
   d) atomicidade, concorrência, independência, durabilidade;
   e) atomicidade, consistência, isolamento, durabilidade.

Comentários:

As Propriedades ACID são: Atomicidade, Consistência, Isolamento e Durabilidade.

                                                                                Gabarito: Letra E

105. (CESGRANRIO / PETROBRAS - 2008) Atomicidade é uma propriedade de transação de um
   SGBD relacional que garante que:

   a) uma transação seja realizada de forma independente de outras transações.
   b) uma operação de uma transação seja efetuada de forma independente de outras operações.
   c) nenhuma operação de uma transação seja subdividida em tarefas menores pelo SGBD.
   d) todos os atributos manipulados por uma transação sejam atômicos.
   e) todas as operações em um banco de dados, em uma transação, sejam executadas ou
   nenhuma delas o seja.

Comentários:

(a) Errado, esse item trata da propriedade de isolamento e, não, atomicidade; (b) Errado, não se
trata da operação, mas da transação em si – além disso, isso trata do isolamento e, não,
atomicidade; (c) Errado, não se trata de operações, mas de transações; (d) Errado, não se trata de
atributos, mas de uma transação; (e) Correto, todas as operações de uma mesma transação devem
ser executados ou nenhuma delas deve ser.

                                                                                Gabarito: Letra E

106. (CESGRANRIO / DECEA - 2006) Que propriedade do modelo ACID garante que uma
   transação é totalmente executada ou nenhum passo dela é executado?

   a) atomicidade.
   b) durabilidade.
   c) consistência.
   d) completude.
   e) isolamento.

Comentários:


---

Definitivamente a propriedade mais cobrada em prova é a propriedade de... atomicidade. Em
outras palavras, uma transação é uma unidade de processamento atômica que deve ser executada
integralmente até o fim ou não deve ser executada de maneira alguma.

                                                                             Gabarito: Letra A

107. (CESGRANRIO / DECEA - 2006) Segundo a arquitetura ANSI/SPARC, os três níveis de
   esquema usados para separar o banco de dados físico das aplicações do usuário são:

   a) físico, estrutural e externo.
   b) lógico, físico e interno.
   c) interno, conceitual e externo.
   d) interno, lógico e restrito.
   e) conceitual, estrutural e físico.

Comentários:

A Arquitetura ANSI/SPARC se divide em três níveis independentes: interno, conceitual e externo.

                                                                              Gabarito: Letra C

108. (CESGRANRIO / AL-TO - 2005) Um SGBD para manter a integridade dos dados deve
   apresentar algumas propriedades para as transações. A propriedade que define "ou todas as
   operações da transação são refletidas corretamente no banco de dados ou nenhuma deve ser
   refletida" é:

   a) atomicidade.
   b) consistência.
   c) durabilidade.
   d) isolamento.
   e) polimorfismo.

Comentários:

Já cansaram? Porque eu já me cansei! Mais uma questão sobre... atomicidade: uma transação é
uma unidade de processamento atômica que deve ser executada integralmente até o fim ou não
deve ser executada de maneira alguma.

                                                                             Gabarito: Letra A

109. (NCE-UFRJ / TRE-RJ - 2001) Uma vantagem da arquitetura de 3 níveis ANSI/ SPARC é prover
   independência de dados. De acordo com esta arquitetura, é possível prover dois tipos de
   independência de dados:


---

   a) funcional e lógica;
   b) cronológica e funcional;
   c) física e lógica;
   d) física e referencial;
   e) cronológica e referencial.

Comentários:

Quando estamos falando sobre independência de dados, estamos tratando da capacidade de
modificar a definição dos esquemas de determinado nível, sem afetar o esquema de nível superior.
Existem dois níveis de independência de dados: a independência física e a independência lógica.

                                                                                 Gabarito: Letra C

110. (NCE-UFRJ / TRE-RJ - 2001) De acordo com a arquitetura ANSI/SPARC um Sistema de Banco
   de Dados divide-se em três níveis gerais: interno, conceitual e externo. É correto afirmar que:

   a) o nível interno é responsável pelo mapeamento entre os níveis externo e conceitual;
   b) o nível externo é o mais próximo ao armazenamento físico;
   c) o nível conceitual é o mais próximo ao usuário;
   d) o nível conceitual esconde os detalhes sobre o armazenamento físico dos dados;
   e) existe uma única visão externa no nível externo.

Comentários:

(a) Errado, o nível conceitual é responsável pelo mapeamento entre os níveis externos e interno; (b)
Errado, o nível interno é o mais próximo ao armazenamento físico; (c) Errado, o nível externo é o
mais próximo do usuário; (d) Correto, o nível conceitual – de fato – esconde os detalhes sobre o
armazenamento físico dos dados, visto que ele se encontra um nível acima; (e) Errado, podem
existir diversas visões externas no nível externo.

                                                                                 Gabarito: Letra D


---

                        LISTA DE QUESTÕES – CESPE

1. (CESPE / CNMP - 2023) As estruturas para armazenamento dos dados e os métodos de acesso
   ao banco de dados fazem parte do projeto lógico de um banco de dados.

2. (CESPE / SEPLAN-RR - 2023) Atomicidade, uma das propriedades cruciais em transações de
   banco de dados relacional, é a chave para manter os dados precisos no banco de dados e garantir
   que eles estejam em conformidade com regras, regulamentos e políticas da empresa.

3. (CESPE / AGER-MT - 2023) Assinale a opção em que é apresentada a propriedade envolvida
   quando uma transação de banco de dados é completada com sucesso e as mudanças que ela fez
   no banco persistem, mesmo que existam falhas no sistema.

   a) atomicidade
   b) consistência
   c) isolamento
   d) durabilidade
   e) inconsistência de dados.

4. (CESPE / TCE-SC - 2022) Um esquema de banco de dados pode ser definido como a
   representação gráfica e simbológica dos componentes de um banco de dados, seja comercial,
   industrial ou residencial.

5. (CESPE / TCE-SC - 2022) O role contém as definições de permissões, privilégios e garantias de
   acesso aos objetos do banco e aos dados.

6. (CESPE / SEFAZ-SE – 2022) As técnicas de controle de concorrência são usadas para garantir a
   propriedade de não interferência ou isolamento das transações executadas simultaneamente.
   Algumas das principais técnicas usadas para controlar a execução concorrente de transações
   são baseadas no conceito de bloqueio de itens de dados.

   Considerando os tipos de bloqueios, assinale a opção que contém o esquema de bloqueio que
   possui dois estados — bloqueado e desbloqueado — e que é considerado muito restritivo para
   itens de banco de dados, porque no máximo uma transação pode manter um bloqueio em
   determinado item.

   a) bloqueios compartilhados
   b) bloqueios binários
   c) bloqueios exclusivos
   d) bloqueio em duas fases conservador
   e) bloqueio em duas fases básico


---

7. (CESPE / Polícia Federal – 2021) Em um sistema gerenciador de banco de dados, as restrições
   de integridade garantem que os dados possam ser armazenados, consultados e utilizados com
   confiabilidade.

8. (CESPE / Polícia Federal – 2021) Atomicidade refere-se à propriedade de um sistema
   gerenciador de banco de dados (SGBD) que garante que os dados armazenados sejam
   indivisíveis.

9. (CESPE / APEX-BRASIL – 2021) Assinale a opção em que o termo apresentado corresponde a
   uma sequência de instruções de consulta e(ou) atualização de banco de dados:

   a) commit
   b) rollback
   c) truncate
   d) transaction

10. (CESPE / ME – 2020) Um esquema de banco de dados é um conjunto de regras que governa um
    banco de dados ou todo o conjunto de objetos pertencentes a determinado usuário.

11. (CESPE / TJ-PA – 2020) Um sistema de banco de dados proporciona a empresas o controle
    centralizado de todos os seus dados. O funcionamento do banco de dados baseia-se em
    unidades lógicas de trabalho conhecidas como:

   a) entidades.
   b) ocorrências.
   c) registros.
   d) tabelas.
   e) transações.

12. (CESPE / TJ-AM – 2019) Uma das vantagens de utilizar sistema gerenciador de banco de dados
    é o fato de ele realizar o controle da redundância de dados, o que impede a ocorrência de
    inconsistências entre os arquivos.

13. (CESPE / TJ-AM – 2019) Na arquitetura ANSI/SPARC de um SGBD, o nível interno trata do
    armazenamento físico dos dados, o nível externo trata do modo como os dados são visualizados
    por usuários individuais, e o nível conceitual oferece uma visão comunitária dos dados.

14. (CESPE / STM - 2018) O modelo conceitual, que reflete uma estrutura simplificada do banco de
    dados, é responsável por registrar como os dados estão armazenados no sistema de
    gerenciamento de banco de dados (SGBD).

15. (CESPE / TCE-PB - 2018) A respeito de SGBD, assinale a opção correta.


---

   a) Um SGBD é um software que não prevê as funções de definição, recuperação e alteração de
   dados, sendo essa tarefa a função básica de um sistema de banco de dados.

   b) A consistência de dados é o princípio que determina a manutenção de determinado dado em
   vários arquivos diferentes.

   c) Conforme o princípio da atomicidade, caso ocorra erro em determinada transação, todo o
   conjunto a ela relacionado será desfeito até o retorno ao estado inicial, como se a transação
   nunca tivesse sido executada.

   d) O controle de concorrência é o princípio que garante e permite a manipulação, no mesmo
   momento, de um mesmo dado por mais de uma pessoa ou um sistema.

   e) Um SGBD, por definição, não é flexível, dada a dificuldade de mudar a estrutura dos dados
   quando os requisitos mudam.

16. (CESPE / EBSERH – 2018 ) Após um banco de dados ser criado, o administrador executa uma
    série de tarefas para dar permissão de acesso aos usuários que necessitam ler e gravar
    informações na base de dados. A responsabilidade de gerir os acessos ao banco de dados é do
    sistema gerenciador de banco de dados (SGBD).

17. (CESPE / STM – 2018) Comparativamente aos usados pelos usuários leigos, os modelos de
    dados utilizados por programadores são considerados menos abstratos, pois contêm mais
    detalhes de como as informações estão organizadas internamente no banco de dados.

18. (CESPE / TRE-BA - 2017) Sistemas de banco de dados estão sujeitos a falhas como falta de
    energia, erros de software ou mesmo sabotagem dos dados. O sistema de recuperação é
    responsável pela restauração do banco para um estado consistente que havia antes da
    ocorrência da falha. Para precaver-se de tais falhas, devem-se preservar as propriedades de:

   a) consistência e durabilidade.
   b) isolamento e consistência.
   c) atomicidade e durabilidade.
   d) durabilidade e isolamento.
   e) atomicidade e isolamento.

19. CESPE / TRE-BA – 2017) Na modelagem de dados, a capacidade de modificar a definição dos
    esquemas em determinado nível, sem afetar o esquema do nível superior, é denominada:

   a) integridade de domínio.
   b) esquema.
   c) especialização total.
   d) independência de dados.
   e) cardinalidade.


---

20. (CESPE / TRE-TO – 2017) A respeito da arquitetura de três esquemas para banco de dados,
    assinale a opção correta.

   a) Uma das desvantagens da arquitetura de três esquemas é a impossibilidade de aplicar a
   independência de dados.

   b) Um dos objetivos da arquitetura de três esquemas é aproximar o banco de dados físico das
   aplicações.

   c) O nível conceitual serve para descrever a estrutura do banco de dados para um conjunto de
   usuários.

   d) Mapeamentos são as transformações que dados brutos armazenados sofrem para se tornar
   informações inteligíveis.

   e) O nível interno inclui uma série de visões do usuário utilizadas para descrever partes do banco
   de dados.

21. (CESPE / TRT/CE – 2017) Acerca da arquitetura de três esquemas para bancos de dados, assinale
    a opção correta.

   a) Uma alteração no esquema interno da arquitetura implica alterar também o esquema
   externo.

   b) Na arquitetura de três esquemas, os níveis são definidos como interno, intermediário e
   externo.

   c) No nível interno da arquitetura, são descritos os caminhos de acesso para o banco de dados.

   d) Em um SGBD embasado nessa arquitetura, todos os grupos de usuários utilizam o mesmo
   esquema externo.

22. (CESPE / TCE-SC – 2016) O catálogo de um sistema de gerenciamento de banco de dados
    relacional armazena a descrição da estrutura do banco de dados e contém informações a
    respeito de cada arquivo, do tipo e formato de armazenamento de cada item de dado e das
    restrições relativas aos dados.

23. (CESPE / TCE-PA – 2016) Independência lógica de dados refere-se à capacidade de alterar o
    esquema conceitual sem a necessidade de alterar os esquemas externos ou os programas de
    aplicação.

24. (CESPE / FUB – 2016) Em um projeto de banco de dados, a modelagem conceitual define quais
    dados vão aparecer no banco de dados, mas sem considerar a sua implementação.


---

25. (CESPE / TCE-PA – 2016) No nível conceitual da arquitetura de três camadas de banco de dados,
    cada esquema externo descreve a parte do banco que interessa a determinado grupo de
    usuários e oculta desse grupo o restante do banco de dados.

26. (CESPE / SE-DF – 2017) O esquema do nível externo de uma arquitetura de três esquemas oculta
    os detalhes das estruturas de armazenamento físico e se concentra na descrição de entidades,
    tipos de dados, conexões, operações de usuários e restrições.

27. (CESPE / MPOG – 2015) Os dados armazenados em um SGBD são acessados por um único
    usuário de cada vez, sendo impedido o acesso concorrente aos dados.

28. (CESPE / MPOG – 2015) O SGBD proporciona um conjunto de programas que permite o acesso
    aos dados sem exposição dos detalhes de representação e armazenamento de dados, por meio
    de uma visão abstrata dos dados, conhecida como independência de dados.

29. (CESPE / MEC – 2015) No projeto lógico, o modelo físico é obtido por meio da transformação
    do modelo conceitual.

30. (CESPE / TRE-GO – 2015) As três principais etapas de execução de um projeto de banco de
    dados são projeto lógico, projeto físico e criação do banco de dados.

31. (CESPE / TRE-GO – 2015) O administrador de banco de dados tem como atribuição, entre
    outras, decidir que dados devem ser armazenados no banco de dados e estabelecer normas para
    manter e tratar esses dados.

32. (CESPE / DEPEN – 2015) Os níveis interno, externo e conceitual da arquitetura de um banco de
    dados são responsáveis, respectivamente, por gerenciar o modo como os dados serão
    armazenados fisicamente, por gerenciar o modo como os dados serão vistos pelos usuários e
    por representar todo o conteúdo de informações do banco de dados.

33. (CESPE / TRE/GO – 2015) Nas organizações, o emprego de sistemas gerenciadores de banco de
    dados promove a segurança e a consistência dos dados, favorecendo a redundância e
    garantindo a integridade dos dados.

34. (CESPE / TJ-SE – 2014) Um SGBD deve gerenciar o acesso múltiplo aos dados de uma tabela
    sem ocasionar perda da integridade dessas informações.

35. CESPE / TJ-SE – 2014) Os dados físicos de um banco de dados podem ser acessados
    diretamente por meio de qualquer sistema, sem a necessidade de utilização do SGBD.

36. (CESPE / MC – 2013) Uma das atribuições do administrador de banco de dados é definir a
    estratégia que determinará como será feito o becape do banco de dados.


---

37. (CESPE / MC – 2013) Atualmente, os bancos de dados são utilizados para armazenar e processar
    dados de caracteres em geral, não apresentando recursos para tratar dados multimídias, como
    filmes e fotografias.

38. (CESPE / BANCO DA AMAZÔNIA - 2012) A arquitetura ANSI SPARC é um modelo de
    interoperabilidade de dados, voltado para o domínio de sistemas de gerenciamento de bases de
    dados (SGBDs). O modelo em questão é organizado em três níveis, dos quais um é o nível
    conceitual, mais semântico; e outro é o nível físico ou interno, mais sintático.

39. (CESPE / INMETRO - 2010) No processamento de transações em sistemas de bancos de dados,
    a implementação de mecanismos de controle de concorrência garante às transações a
    característica de:

   a) isolamento.
   b) atomicidade.
   c) durabilidade.
   d) prioridade.
   e) individualidade.

40. (CESPE / BASA – 2010) O catálogo do sistema é um repositório com função de armazenar as
    definições dos esquemas dos bancos de dados.

41. (CESPE / Banco da Amazônia – 2010) O mapeamento do nível conceitual para o nível interno é
    a chave para a independência de dados física, assim como o mapeamento do nível externo para
    o conceitual é a chave para a independência lógica de dados.


---

                           LISTA DE QUESTÕES – FCC
42. (FCC / DPE-RS – 2017) O dicionário de dados de um banco de dados relacional:

   a) não se aplica a tabelas com pequeno número de registros.
   b) não considera o armazenamento da lista de atributos chave das tabelas.
   c) armazena, dentre outras informações, nomes de tabelas e de seus atributos.
   d) ignora os domínios de cada atributo das tabelas.
   e) somente se aplica a tabelas com grande número de atributos.

43. (FCC / DPE-SP - 2015) As transações em bancos de dados distribuídos precisam preservar as
    propriedades conhecidas como ACID. Dentre estas propriedades está a:

   a) Atomicidade.
   b) Confidencialidade.
   c) Autenticidade.
   d) Integridade.
   e) Disponibilidade.

44. (FCC / SABESP - 2014) Um SGBD possui a capacidade de mudar o esquema interno sem ter de
    alterar o esquema conceitual, consequentemente não havendo necessidade de alteração do
    esquema externo. As mudanças no esquema interno podem ser necessárias para que alguns
    arquivos físicos possam ser reorganizados, por exemplo, pela criação de estruturas de acesso
    adicionais para aperfeiçoar o desempenho da recuperação ou atualização de dados.

   Essa característica de um SGBD é denominada:

   a) modelo lógico de dados.
   b) modelo físico de dados.
   c) independência modular.
   d) representação conceitual.
   e) independência física de dados.

45. (FCC / TJ-AP – 2014) Em um determinado momento, a coleção das informações armazenadas
    em um banco de dados é:

   a) o esquema desse banco de dados.
   b) uma instância desse banco de dados.
   c) um metamodelo desse banco de dados.
   d) o projeto geral desse banco de dados.
   e) uma partição desse banco de dados.


---

46.(FCC / TCE-AM – 2012) O modelo conceitual de dados:

   a) é aquele em que os objetos, suas características e relacionamentos têm a representação de
   acordo com as regras de implementação e limitantes impostos por algum tipo de tecnologia.

   b) é aquele em que os objetos, suas características e relacionamentos têm a representação fiel
   ao ambiente observado, independente de limitações quaisquer impostas por tecnologias,
   técnicas de implementação ou dispositivos físicos.

   c) é aquele elaborado respeitando-se e implementando-se conceitos tais como chaves de
   acesso, controle de chaves duplicadas, itens de repetição (arrays), normalização, ponteiros e
   integridade referencial, entre outros.

   d) é a fase da modelagem na qual é necessário considerar todas as particularidades de
   implementação, principalmente o modelo que será utilizado para a implementação futura.

   e) está sempre associado às fases de projeto, contrastando com o modelo lógico, que sempre
   está associado à fase de análise, quando utilizado com as metodologias de desenvolvimento de
   sistemas e implementado por ferramentas CASE.

47. (FCC / MPE-SE – 2013) A capacidade de alterar o esquema conceitual sem mudar o esquema
   externo ou os programas, podendo modificar o esquema conceitual para expandir o banco de
   dados (adicionando um tipo de registro ou item de dados), variar as restrições ou reduzir o banco
   de dados (removendo um tipo de registro ou item de dados) é chamada de:

   a) modularidade.
   b) modelo conceitual.
   c) independência lógica de dados.
   d) polimorfismo.
   e) agregação.

48.(FCC / TCE-SP - 2010) A propriedade das transações de um SGBD que garante: “ou todas as
   operações da transação são refletidas corretamente no banco de dados ou nenhuma o será” é
   a:

   a) Atomicidade.
   b) Isolamento.
   c) Consistência.
   d) Integridade.
   e) Durabilidade.

49.(FCC / TRT 20 - 2010) Em relação à execução de uma transação em um banco de dados,
   considere:


---

   Para que uma transação seja efetivada, todas as ações que compõem a respectiva unidade de
   trabalho devem ser concluídas com sucesso. Caso contrário, a ação que constituiu falha e a
   transação devem ser desfeitas.

   A afirmação refere-se a uma das quatro propriedades da integridade de uma transação,
   denominada:

   a) Atomicidade.
   b) Isolamento.
   c) Durabilidade.
   d) Consistência.
   e) Efetividade.

50. (FCC / TCE-SP – 2009) Considerando que os dados constituem um dos bens mais valiosos de
    uma empresa, é necessário que haja um papel que tenha a responsabilidade central pelos dados,
    principalmente entendendo as necessidades empresariais nos altos níveis da organização. Tal
    papel é mais adequadamente desempenhado pela:

   a) administração de banco de dados.
   b) administração de dados.
   c) alta administração da organização.
   d) análise de sistemas.
   e) gerência de sistemas.

51. (FCC / TCE-SP – 2009) As três visões da arquitetura básica de um SGBD, pela ordem, desde a
    mais próxima do usuário até a mais distante, são:

   a) externa, conceitual e interna.
   b) externa, interna e conceitual.
   c) conceitual, interna e externa.
   d) conceitual, externa e interna.
   e) interna, conceitual e externa.


---

                          LISTA DE QUESTÕES – FGV
52. (FGV / TJ-RN - 2023) Em banco de dados, uma transação é composta por diversas operações
    sobre os dados, como leitura, alteração, inserção e remoção. Contudo, a transação é percebida
    como uma operação lógica única sobre os dados. Com isso, para garantir a consistência de um
    banco de dados, as transações devem satisfazer algumas propriedades, como:

   (i) todas as operações da transação são executadas em caso de sucesso; ou
   (ii) em caso de falhas, todas as operações são desfeitas e o banco de dados deve voltar ao mesmo
   estado em que estava antes do início da transação.

   A propriedade de uma transação de banco de dados descrita é a:

   a) atomicidade;
   b) consistência;
   c) isolamento;
   d) durabilidade;
   e) redundância.

Comentários:

A questão trata da atomicidade, que é a propriedade que garante que todas as operações de uma
transação sejam tratadas como uma unidade lógica única, oferecendo segurança e consistência aos
dados do banco.

                                                                                Gabarito: Letra A

53. (FGV / SEAD-AP – 2022) Os sistemas gerenciadores de bancos de dados são largamente
    utilizados em aplicações computacionais, pois oferecem um conjunto de propriedades
    importantes para a segurança e confiabilidade dos dados, conhecido pela sigla ACID.

   O propósito da propriedade correspondente à letra I na referida sigla é:

   a) garantir a independência dos dados em relação ao hardware empregado.
   b) garantir a independência dos dados em relação ao sistema gerenciador de dados.
   c) garantir o isolamento das transições quando executadas por processos concomitantes.
   d) permitir a integração de diferentes gerenciadores de bancos de dados.
   e) permitir a inter-relação de diferentes padrões internacionais de codificação de dados.

54. (FGV / TJ-RO – 2021) No contexto da implementação de bancos de dados, o acrônimo ACID
    denota o conjunto de propriedades que devem ser observadas por sistemas transacionais. Essas
    quatro propriedades são:


---

   a) Amorfabilidade, Concorrência, Integridade e Durabilidade;
   b) Atomicidade, Consistência, Isolamento e Durabilidade;
   c) Atualização, Coesão, Inserção e Deleção;
   d) Auditabilidade, Conformidade, Independência e Distribuição;
   e) Automação, Concorrência, Integridade e Distribuição.

55. (FGV / MPE-AL– 2018) O conjunto de programas responsável pelo gerenciamento de uma base
    de dados e que, entre outras funções, suporta uma linguagem de consulta, gera relatórios e
    disponibiliza uma interface para que os seus clientes possam incluir, alterar ou consultar dados,
    é chamado de:

   a) Banco de Dados Relacional (BDR).
   b) Dicionário de Dados (DD).
   c) Modelo Entidade Relacionamento (MER).
   d) Sistema de Suporte à Decisão (SSD).
   e) Sistema Gerenciador de Bancos de Dados (SGBD).

56. (FGV / Prefeitura de Paulínia - SP – 2016) A execução de transações de bancos de dados deve
    observar um conjunto de propriedades, cuja finalidade é a manutenção da integridade dos
    dados armazenados nas tabelas. Assinale a opção que apresenta as propriedades usualmente
    implementadas nos sistemas gerenciadores de bancos de dados:

   a) Independência de dados e integridade referencial.
   b) Manutenção de logs e extração de backups.
   c) Segurança, criptografia e sigilo.
   d) Atomicidade, durabilidade, consistência e isolamento.
   e) Performance, segurança e escalabilidade.

57. (FGV / DPE-RJ – 2014) A sigla DBA é usualmente empregada para designar um profissional que
    é responsável:

   a) pela administração, instalação, configuração e monitoramento de instalações de bancos de
   dados.
   b) pela concepção, desenvolvimento e implantação de sistemas gerenciadores de bancos de
   dados.
   c) pelo processo de coleta e exploração de dados para geração de novos conhecimentos.
   d) pelo teste e manutenção de sistemas WEB construídos sob a égide de metodologias ágeis.
   e) pelo treinamento e certificação para utilização de gerenciadores de bancos de dados.

58. (FGV / AL-MT – 2013) Características que distinguem a abordagem de bancos de dados
    relacionais e centralizados da abordagem tradicional, baseada em processamento de arquivos,
    estão listadas a seguir à exceção de uma. Assinale-a.


---

   a) Compartilhamento de dados e processamento de transações multiusuários.
   b) Suporte para múltiplas visões de dados.
   c) Isolamento entre os programas e os dados.
   d) Dados são armazenados e tratados somente como cadeias de caracteres.
   e) Natureza autodescritiva do sistema de bancos de dados.

59. (FGV / AL-MT – 2013) O modelo de dados abstrato que descreve a estrutura de um banco de
    dados de forma independente de um SGBD chama-se modelo:

   a) lógico.
   b) conceitual.
   c) físico.
   d) algorítmico.
   e) funcional.

60. (FGV / BADESC - 2010) A arquitetura de um SGBD ou a arquitetura de um sistema de banco de
    dados, também denominada de arquitetura ANSI/SPARC em três níveis, determina que um
    SGBD descreva como os dados devem ser armazenados e acessados e conter estes mesmos
    dados de fato armazenados.

   As terminologias desta arquitetura que contêm essas descrições e os dados de fato
   armazenados, são respectivamente:

   a) esquema físico e nível físico.
   b) nível físico e esquema físico.
   c) nível físico e esquema conceitual.
   d) nível conceitual e esquema físico.
   e) nível conceitual e esquema conceitual.

61. (FGV / SEFAZ-RJ – 2008) No funcionamento de um sistema de gerenciamento de banco de
    dados, uma situação de falha ocorre quando dois usuários tentam alterar, simultaneamente, um
    mesmo registro. Por exemplo, no caso de dois clientes de uma empresa de cartões de crédito
    tentarem realizar, num dado instante, a liquidação de um mesmo boleto da mesma fatura, um
    deles receberá uma mensagem de falha. A situação descrita é conhecida por:

   a) Multlock.
   b) Crashing.
   c) Overlock.
   d) Locking.
   e) Deadlock.

62. (FGV / SEFAZ-MS - 2006) A implementação de Sistemas Gerenciadores de Banco de Dados -
    SGBD proporciona duas grandes vantagens, que consistem em:


---

I. impedir que um determinado código ou chave em uma tabela não tenha correspondência em
outra tabela.

II. permitir o armazenamento da informação em um único local com acesso descentralizado e,
sendo compartilhada com vários sistemas, os usuários estarão utilizando uma informação
confiável.

Essas vantagens são conhecidas por:

a) Manutenção de Integridade / Eliminação de Inconsistências.
b) Independência dos Dados / Eliminação de Redundâncias.
c) Independência dos Dados / Eliminação de Inconsistências.
d) Restrições de Segurança / Eliminação de Inconsistências.
e) Restrições de Segurança / Eliminação de Redundâncias.


---

                   LISTA DE QUESTÕES – DIVERSAS BANCAS
63. (FADESP / SEFA-PA – 2022) A informação armazenada do catálogo do Sistema Gerenciador de
    Banco de Dados (SGBD), que possui a estrutura de cada arquivo, o tipo e o formato de
    armazenamento de cada item de dados, é chamada de:

   a) recovery
   b) data center
   c) data mining
   d) metadados
   e) índices

64.(FADESP / SEFA-PA – 2022) Sobre as características de um Sistema Gerenciador de Banco de
   Dados (SGBD), julgue verdadeira (V) ou falsa (F) cada uma das afirmativas a seguir.

   I. Um SGBD tem como propriedade a dependência dos dados do programa. A estrutura dos
   arquivos de dados é armazenada no catálogo do SGDB separadamente dos programas de
   acesso.

   II. Um SGDB multiusuário precisa oferecer suporte para definir múltiplas visões dos dados. Por
   exemplo, uma visão pode ser um subconjunto do banco de dados ou conter um dado virtual que
   é derivado dos arquivos do banco de dados.

   III. Um SGDB precisa garantir que as transações concorrentes sejam realizadas de maneira
   correta, ou seja, quando vários usuários tentarem atualizar o mesmo dado é preciso garantir o
   controle de concorrência para que o resultado das operações seja correto.

   A sequência correta é:

   a) I - F; II - V; III - V.
   b) I - F; II - F; III - V.
   c) I - V; II - V; III - V.
   d) I - F; II - F; III - F.
   e) I - V; II - V; III - F.

65. (QUADRIX / Prefeitura de Jataí – 2019) Com relação aos conceitos e às definições de banco de
    dados, assinale a alternativa correta:

   a) Um banco de dados não é formado por um conjunto de arquivos, mas sim por um conjunto
   de dados com as mesmas características.


---

      b) Um banco de dados é um conjunto de dados organizados, com o objetivo de armazenamento
      persistente dos dados, que possui mecanismos de manipulação e recuperação de informações.

      c) Um banco de dados é um conjunto integrado de dados não relacionados logicamente.

      d) A melhor definição para banco de dados é que ele é uma representação estática, visto que os
      dados não podem sofrer alterações temporais.

      e) O banco de dados é uma estrutura de compartilhamento parcial, ou seja, os dados existentes
      em um banco de dados não podem ser compartilhados por várias pessoas; apenas uma pessoa
      por vez pode ter acesso ao banco de dados

66.      (QUADRIX / CREA-TO – 2019) Em um banco de dados, é necessária a abstração dos dados,
      de tal forma que o usuário não se importe com a forma como eles estão armazenados.

67. (CETREDE / Prefeitura de Itaitinga – 2019) Antigamente, os bancos de dados eram manuais.
    Atualmente com a difusão tecnológica a grande maioria dos bancos de dados são digitais. Eles
    compõem um conjunto estruturado de dados que obedecem a um modelo de dados e são
    armazenados em formato digital – em um hardware (geralmente, um servidor da rede –
    storage). NÃO é vantagem de um banco de dados,

      a) maior volume de dados armazenado.
      b) ocupar maior espaço físico.
      c) maior velocidade de acesso aos dados.
      d) permite o compartilhamento de informações.
      e) persistência dos dados: depois de muitos anos, ainda podem ser acessados.

68. (IADES / CRN3 – 2019) No que se refere aos conceitos gerais de banco de dados, assinale a
   alternativa correta.

      a) Os dados, independentes ou não, de um banco de dados formam necessariamente uma
      informação.

      b) Os projetistas, também conhecidos como administradores do banco de dados (database
      administrators), são os usuários iniciantes ou paramétricos do sistema.

      c) Um banco de dados não representa um aspecto do mundo real.

      d) Uma planilha do Microsoft Excel ou uma lista de contatos (nome, telefone e e-mail) de uma
      agenda configuram um banco de dados.

      e) A edição ou a alteração dos dados de um banco de dados é muito onerosa ao administrador,
      o que torna comum a prática de sua total exclusão.


---

69. (IDCAP / Prefeitura de Canaã – 2019) A coleção de informações armazenadas de um banco
   de dados é chamada de:

   a) Parâmetros.
   b) Instância.
   c) Esquema.
   d) Arquitetura.
   e) Projeto.

70. (SUGEP / UFRPE – 2019) O padrão de ANSI/SPARC para arquitetura de SGBD define uma
    arquitetura em três níveis. São eles:

   a) nível interno, nível de usuário e nível físico.
   b) nível interno, nível externo e nível conceitual.
   c) nível externo, nível de tabelas e nível físico.
   d) nível conceitual, nível de usuário e nível de arquivos.
   e) nível de tabelas, nível de arquivos e nível de visão.

71. (CONSULPLAN / TRF 2ª REGIÃO - 2017) Em banco de dados relacional à arquitetura mais
    difundida na literatura é a Arquitetura “Three-Schema” (também conhecida como arquitetura
    ANSI/SPARC), proposta por Tsichritzis & Klug em 1978. A arquitetura “three-schema” pode ser
    utilizada para explicar conceitos de independência de dados, que podem ser definidos como a
    capacidade de alterar o esquema de um nível sem ter que alterar o esquema no próximo nível
    superior. Um SGBD é uma coleção de arquivos e programas inter-relacionados permitindo a
    consulta e modificação de dados, no qual é possível ter uma abstração dos dados em 3 níveis; na
    arquitetura ANSI/SPARC são conhecidos como:

   a) Lógico, físico e hierárquico.
   b) Interno, conceitual e externo.
   c) Relacional, rede e hierárquico.
   d) Conceitual, relacional e hierárquico.

72. (INSTITUTO AOCP / EBSERH - 2015) A técnica utilizada para a especificação e explorar
    estrutura orientada a dados para um banco de dados é chamada de Modelagem de dados. Para
    entender como os modelos de dados podem ser usados na prática, depara-se com três estilos
    básicos de modelos de dados. Quais são esses estilos?

   a) Modelos Conceituais, Modelos Lógicos e Modelos de Contexto.
   b) Modelos Conceituais, Modelos de Contexto e Modelos Físicos.
   c) Modelos de Contexto, Modelos Lógicos e Modelos Físicos.
   d) Modelos Conceituais, Modelos Lógicos e Modelos Físicos.
   e) Modelos de Aplicações, Modelos de Contexto e Modelos Conceituais.


---

73. (FUNDATEC / BRDE - 2015) Uma transação corresponde a uma coleção de operações que
    desempenha uma função lógica única dentro de uma aplicação do sistema de banco de dados e
    deve possuir todas as seguintes propriedades fundamentais, impostas pelos métodos de
    controle de concorrência e recuperação do sistema de gerenciamento de banco de dados,
    EXCETO:

   a) Atomicidade.
   b) Consistência.
   c) Durabilidade.
   d) Escalabilidade.
   e) Isolamento.

74. (CETRO / Pref. São Paulo (AFT) - 2014) Em um sistema de informação de uma instituição
    bancária, está sendo realizada uma transação de transferência de valores entre uma conta de
    um cliente para a conta de outro cliente. No decorrer da transação, ocorre uma falha geral no
    sistema e a transação é cancelada. Imagine que o valor da transferência saiu da conta do
    primeiro cliente, mas, antes de ser acrescentado ao saldo do segundo cliente, houve a falha do
    sistema. Caso o banco de dados não possuir a capacidade de recuperar o estado original dos
    dados antes da falha, é correto afirmar que ocorreu um problema de:

   a) integridade.
   b) redundância.
   c) anomalia de acesso.
   d) atomicidade.
   e) isolamento.

75. (FUNCAB / PRODAM-AM - 2014) Uma transação é uma unidade de execução de programa que
    acessa e, possivelmente, atualiza vários itens. Há uma propriedade das transações que garante
    que a execução simultânea de transações resulte em uma situação no sistema equivalente ao
    estado obtido caso as transações tivessem sido executadas uma de cada vez, independente da
    ordem em que são executadas. Essa propriedade denomina-se:

   a) isolamento.
   b) consistência.
   c) atomicidade.
   d) durabilidade.
   e) dinamicidade.

76. (VUNESP / DESENVOLVESP - 2014) Há 4 propriedades básicas que uma transação de um
    banco de dados relacional deve respeitar. Assinale a alternativa que contém duas dessas
    propriedades:

   a) Atomicidade e isolamento.
   b) Consistência e normalização.


---

   c) Durabilidade e paralelismo.
   d) Normalização e atomicidade.
   e) Paralelismo e isolamento.

77. (FDC / AGERIO - 2014) A arquitetura ANSI/SPARC de bancos de dados é composta por três
    níveis independentes, cada um deles descrevendo o banco em um nível diferente de abstração.
    Um desses níveis se refere ao armazenamento físico dos dados e à definição das estruturas
    físicas que permitem obter um desempenho satisfatório. Esse nível é conhecido por:

   a) interno
   b) operacional
   c) estratégico
   d) conceitual
   e) externo

78. (FUNCAB / MDA - 2014) Em 1971, o Comitê sobre Computador e Processamento de
    Informações, abreviado Comitê X3, do American National Standards Institute (ANSI), formou
    um grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de Padrões
    (Standards Planning and Requirements Committee – SPARC), que propôs uma arquitetura de
    esquemas de um sistema de gerência de banco de dados, ou arquitetura de Sistema de Banco
    de Dados (SBD) , arquitetura esta conhecida como ANSI/X3/SPARC ou, simplesmente,
    ANSI/SPARC.

   A arquitetura ANSI/SPARC pode ser usada para melhor explicar o conceito de independência de
   dados. Esse conceito pode ser dividido em:

   a) lógica e física
   b) conceitual e lógica.
   c) física e conceitual.
   d) esquema e lógica.
   e) física e esquema.

79. (FUNCAB / MDA - 2014) Em 1971, o Comitê sobre Computador e Processamento de
    Informações, abreviado Comitê X3, do American National Standards Institute (ANSI), formou
    um grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de Padrões
    (Standards Planning and Requirements Committee – SPARC), que propôs uma arquitetura de
    esquemas de um sistema de gerência de banco de dados, ou arquitetura de Sistema de Banco
    de Dados (SBD), arquitetura esta conhecida como ANSI/X3/SPARC ou, simplesmente,
    ANSI/SPARC.

   A arquitetura ANSI/SPARC possui a seguinte quantidade de níveis:

   a) 2
   b) 3


---

   c) 5
   d) 6
   e) 8

80.(FUNCAB / MDA - 2014) Em um banco de dados, uma transação constitui uma operação, como
   inclusão, leitura, atualização ou exclusão, realizada em um banco de dados. Nesse contexto,
   alguns princípios devem ser atendidos, tais como:

   I. se ocorrerem falhas que interrompam o processo de atualização de valores de estoque, o
   sistema deve manter os valores antigos.

   II. se a transação for completada sem problemas, a soma das quantidades existentes em estoque
   do produto transferido (nos dois estoques), antes e depois da transação, deve ser a mesma.

   Os princípios definidos em I e II são denominados, respectivamente:

   a) consistência e durabilidade.
   b) durabilidade e independência
   c) independência e confiabilidade
   d) confiabilidade e atomicidade.
   e) atomicidade e consistência.

81. MS CONCURSOS / CRM/MS – 2014) Na fase de modelagem de um banco de dados, o modelo
    que analisa os limites impostos por alguma tecnologia de banco de dados é o:

   a) Modelo conceitual.
   b) Modelo lógico.
   c) Modelo físico.
   d) Modelo orientado a objeto.

82. (UEPA / SEFA – 2013) Uma empresa em sua expansão verificou que existia a necessidade de ser
    realizada a duplicação de dados em arquivos separados como forma de contingência. Em
    relação aos conceitos de banco de dados, a duplicação de dados em arquivos separados é
    conhecida como:

   a) redundância de dados
   b) integridade de dados
   c) relacionamento de dados
   d) entidades de dados
   e) sistemas de gerenciamento de banco de dados.

83. (CESGRANRIO / IBGE - 2013) Um sistema de banco de dados sofreu uma falha severa devido à
    perda de energia no meio da execução de um comando SQL de UPDATE que alterava milhares


---

   de registros. Devido às garantias fornecidas pelo SGBD, após o reinício do sistema, a transação
   de UPDATE foi revertida, e o banco de dados voltou ao seu estado original.

   A propriedade ACID usada nesse caso foi o(a):

   a) isolamento
   b) determinismo
   c) consistência
   d) atomicidade
   e) durabilidade

84.(VUNESP / COREN-SP - 2013) Uma das propriedades que uma transação de um banco de dados
   relacional deve respeitar é a que estabelece que uma transação deva ser completada até seu
   término, não sendo admissível implementá-la apenas parcialmente. Essa é a propriedade da:

   a) conexão.
   b) unicidade.
   c) dependência.
   d) atomicidade.
   e) compatibilidade.

85. (ESPP / COBRA TECNOLOGIA - 2013) A integridade de uma transação depende de 4
    propriedades conhecidas como ACID, assinale a alternativa que NÃO faz parte destas
    propriedades:

   a) Atomicidade.
   b) Consciência
   c) Isolamento.
   d) Durabilidade.

86. (CCV - UFC / UFC - 2013) Em banco de dados, uma transação é um conjunto de
   procedimentos que é executado no banco de dados, que para o usuário é visto como uma única
   ação. Para garantir a integridade de uma transação, algumas propriedades devem dar-se no
   ambiente do banco de dados. De acordo as afirmações abaixo, marque a alternativa correta que
   associa as afirmações a uma das propriedades.

   - Se uma transação é concluída com sucesso, então seus efeitos são persistidos.
   - Ou todas as ações da transação acontecem, ou nenhuma delas acontece.

   a) durabilidade e atomicidade.
   b) isolação e esquematização
   c) durabilidade e consistência.
   d) persistência e automação.
   e) isolação e atomicidade.


---

87. (ESAF / MF - 2013) Banco de Dados é:

   a) uma relação de dependência entre dados que tem por objetivo atender a uma comunidade
   de usuários.

   b) um conjunto de dados integrados que tem por objetivo impedir acessos indevidos a dados
   armazenados.

   c) um conjunto de dados integrados que tem por objetivo atender a requisitos do sistema
   operacional.

   d) um conjunto de dados integrados que tem por objetivo atender a uma comunidade de
   usuários.

   e) uma estrutura de máquina virtual que tem por objetivo atender a necessidades do software
   de acesso.

88. (COPEVE-UFAL/ MPE-AL - 2012) A arquitetura ANSI/SPARC define três níveis (ou camadas)
   que ficam entre o banco de dados em si (disco rígido) e as aplicações do usuário; são eles:

   a) físico, tabelas e modelo.
   b) físico, lógico e conceitual.
   c) físico, estrutural e externo.
   d) interno, lógico e conceitual.
   e) interno, conceitual e externo.

89. (CESGRANRIO / CHESF - 2012) A arquitetura de um Banco de Dados ANSI/SPARC possui
   três níveis. O primeiro desses níveis é responsável pelo armazenamento de dados, o segundo
   serve de interface entre o primeiro e o terceiro nível, o qual, por seu turno, é responsável pela
   visualização dos dados pelo usuário.

   Esses três níveis são denominados, respectivamente, de:

   a) físico, externo e conceitual.
   b) físico, conceitual e externo.
   c) externo, físico e conceitual.
   d) conceitual, externo e físico.
   e) conceitual, físico e externo.

90.(UNIRIO / UNIRIO – 2012) Em relação aos níveis de abstração de modelo de banco de dados,
   pode-se afirmar que:


---

   a) existem três níveis de abstração (conceitual, lógico e físico) em que todos os níveis são
   totalmente dependentes do SGBD escolhido para construção do banco de dados.

   b) existem três níveis de abstração (conceitual, lógico e físico) em que o único nível dependente
   do SGBD escolhido para construção do banco de dados é o nível físico onde é elaborado o
   modelo Entidade- Relacionamento do banco de dados.

   c) existem dois níveis de abstração (lógico e físico) em que o primeiro representa o modelo
   gráfico do banco de dados independente de SGBD e o segundo corresponde aos aspectos de
   armazenamento, independente do SGBD.

   d) existem dois níveis de abstração (lógico e físico), ambos totalmente dependentes do SGBD
   escolhido para construção do banco de dados. No primeiro nível, é utilizado, por exemplo, o
   modelo Entidade- Relacionamento para elaboração do esquema do banco de dados enquanto
   que, no segundo nível, é empregado o modelo relacional.

   e) existem três níveis de abstração (conceitual, lógico e físico) em que os modelos elaborados
   para o nível conceitual são independentes do SGBD escolhido para construção do banco de
   dados, enquanto que os modelos e artefatos elaborados para o nível lógico e o nível físico são
   totalmente dependentes do SGBD.

91. (CESGRANRIO / LIQUIGÁS – 2012) As transações em um banco de dados devem possuir
    algumas propriedades, conhecidas como propriedades ACID. Nesse contexto, a propriedade
    relacionada à letra I é a(o):

   a) independência de dados
   b) integridade referencial
   c) inconsistência
   d) identificação
   e) isolamento

92. (FUNCAB / PRODAM-AM - 2010) Marque a alternativa que apresenta os três níveis descritos na
    proposta ANSI/SPARC para a definição de uma arquitetura de três esquemas para sistemas de
    banco de dados.

   a) Conceitual, Lógico e Físico.
   b) Hierárquico, Em Redes e Relacional.
   c) Conceitual, Relacional e Orientado a Objetos.
   d) Interno, Conceitual e Externo.
   e) Relacional, Objeto-Relacional e Orientado a Objetos.

93. (PACTCPB / PREF PATOS - 2010) Sobre a arquitetura ANSI/SPARC de sistemas de banco de
    dados, julgue corretos os itens abaixo:


---

   I) Divide a arquitetura em dois níveis.
   II) O nível interno define como os dados são vistos pelos usuários individuais.
   III) O nível lógico dá uma visão comunitária dos dados.
   IV) O nível lógico compõe-se de tabelas.

   Estão corretos:

   a) I e III.
   b) I e IV.
   c) I e II.
   d) III e IV.
   e) II e IV.

94.(ESAF / SUSEP - 2010) Um Banco de Dados é um:

   a) conjunto de objetos da realidade sobre os quais se deseja manter informações.
   b) conjunto de operações sobre dados integrados destinados a modelar processos.
   c) software que incorpora as funções de definição, recuperação e alteração de dados.
   d) software que modela funções de definição, recuperação e alteração de dados e programas.
   e) conjunto de dados integrados destinados a atender às necessidades de uma comunidade de
   usuários.

95. (MOVENS / PREF MANAUS - 2010) Uma transação é uma unidade de execução de programa
    que acessa e, possivelmente, atualiza itens de dados. Com base nesse assunto, assinale a opção
    que apresenta uma propriedade das transações:

   a) divergência
   b) atomicidade
   c) compartilhamento
   d) Variabilidade

96. FCC / SEFAZ - SP - 2009) A arquitetura ANSI/SPARC aplicada aos bancos de dados divide-os
   em níveis com as seguintes características:

   I. O que se ocupa do modo como os dados são fisicamente armazenados.
   II. O que se ocupa do modo como os dados são vistos por usuários individuais.
   III. Nível lógico de comunidade ou apenas lógico (mais abstrato que o físico e diferente da visão
   do usuário individual).

   Em um projeto arquitetural, os itens I, II e III são classificados, respectivamente, como níveis

   a) externo, conceitual e interno.
   b) externo, interno e conceitual.
   c) interno, externo e conceitual.


---

   d) interno, conceitual e externo.
   e) conceitual, externo e interno.

97. (COSEAC / DATAPREV - 2009) Uma transação acontece como um todo ou nada deve ser feito.
    A esta propriedade dar-se o nome de:

   a) durabilidade;
   b) consistência;
   c) isolamento;
   d) atomicidade;
   e) integridade.

98. (CESGRANRIO / CASA DA MOEDA - 2009) Em reunião técnica sobre a construção de um
   sistema financeiro, foi levantada a exigência de que uma transação deve ter todas as suas
   operações executadas, em caso de sucesso, ou nenhum efeito sobre a base de dados, em caso
   de falha. O administrador de banco de dados afirma que não há problema, uma vez que o SGBD
   corporativo garante a propriedade ACID de:

   a) atomicidade.
   b) isolamento.
   c) durabilidade.
   d) consistência.
   e) unicidade.

99. (FUNIVERSA / IPHAN - 2009) O American National Standards Institute (ANSI), por meio do
   Standards Planning and Requirements Committee (SPARC), estabeleceu um padrão para o
   desenvolvimento de tecnologias de Banco de Dados (BD), definindo uma arquitetura de três
   níveis independentes. Assinale a alternativa que apresenta os três níveis da arquitetura
   ANSI/SPARC para banco de dados:

   a) Plano, Relacional e Hierárquico.
   b) Local, Remoto e Distribuído.
   c) Interno, Conceitual e Externo.
   d) File, Table e View.
   e) DSL, DDL e DML.

100. (UNIRIO / UNIRIO - 2009) A propriedade de atomicidade garante que:

   a) a transação será executada no menor tempo possível.
   b) a execução da transação não interferirá na execução das transações concorrentes a ela.
   c) a transação cancelará as transações concorrentes.
   d) ou a transação será executada até seu fim com sucesso ou nenhuma operação da transação
   terá efeito.
   e) a execução das operações da transação serão registradas no log (histórico).


---

101. (FGV / MEC – 2009) Em um Sistema Gerenciador de Banco de Dados - SGBD, os elementos
   de dados possuem uma estrutura lógica visualizada na forma de tabelas. Nesse sentido, existem
   inclusive, pacotes nos SGBDs que podem vincular elementos oriundos de várias tabelas desde
   que essas compartilhem elementos comuns de dados. Essa estrutura lógica de dados é
   conhecida como do tipo:

   a) em rede.
   b) relacional.
   c) em pilha.
   d) hierárquica.
   e) em árvore.

102. (FGV / MEC – 2009) No que diz respeito ao acesso a banco de dados em Java, o controle de
   transações pode ser feito por funções. Assim, para confirmar uma transação no BD e para
   cancelar as alterações da transação, são utilizadas, respectivamente, as seguintes funções:

   a) commit() e recovery()
   b) confirm() e rollback()
   c) commit() e cancel()
   d) confirm() e cancel()
   e) commit() e rollback()

103. (FGV / Senado Federal – 2008) Considere as seguintes afirmativas a respeito das
   propriedades ACID (Atomicidade, Consistência, Isolamento, Durabilidade) de uma transação T
   de banco de dados:

   I. A atomicidade garante que todos os efeitos da transação T sejam integralmente refletidos no
   banco de dados ou que, em caso de falha, nenhum deles seja aceito.

   II. A consistência garante que, se o banco de dados estiver inicialmente em estado inconsistente,
   a execução da transação T, por si só, é capaz de deixar o banco de dados em um estado
   consistente.

   III. O isolamento garante que a execução da transação T seja isolada da execução de quaisquer
   outras transações simultâneas, de modo a evitar que o banco de dados venha a assumir um
   estado inconsistente.

   IV. A durabilidade garante que as atualizações promovidas pela transação T no estado do banco
   de dados sejam sempre mantidas, mesmo que ocorra uma falha no sistema durante a sua
   execução.

   Assinale:


---

  a) se apenas as afirmativas I, II e III estiverem corretas.
  b) se apenas as afirmativas I e II estiverem corretas.
  c) se apenas as afirmativas II, III e IV estiverem corretas.
  d) se apenas as afirmativas I e III estiverem corretas.
  e) se todas as afirmativas estiverem corretas.

104. (NCE-UFRJ / UFRJ - 2008) A sigla ACID é usualmente empregada para evocar as
   propriedades que as transações executadas num banco de dados devem possuir. Essas
   propriedades são:

  a) atomicidade, consistência, independência, durabilidade;
  b) atomicidade, concorrência, indexação, durabilidade;
  c) atualização, concorrência, inserção, deleção;
  d) atomicidade, concorrência, independência, durabilidade;
  e) atomicidade, consistência, isolamento, durabilidade.

105. (CESGRANRIO / PETROBRAS - 2008) Atomicidade é uma propriedade de transação de um
   SGBD relacional que garante que:

  a) uma transação seja realizada de forma independente de outras transações.
  b) uma operação de uma transação seja efetuada de forma independente de outras operações.
  c) nenhuma operação de uma transação seja subdividida em tarefas menores pelo SGBD.
  d) todos os atributos manipulados por uma transação sejam atômicos.
  e) todas as operações em um banco de dados, em uma transação, sejam executadas ou
  nenhuma delas o seja.

106. (CESGRANRIO / DECEA - 2006) Que propriedade do modelo ACID garante que uma
   transação é totalmente executada ou nenhum passo dela é executado?

  a) atomicidade.
  b) durabilidade.
  c) consistência.
  d) completude.
  e) isolamento.

107. (CESGRANRIO / DECEA - 2006) Segundo a arquitetura ANSI/SPARC, os três níveis de
   esquema usados para separar o banco de dados físico das aplicações do usuário são:

  a) físico, estrutural e externo.
  b) lógico, físico e interno.
  c) interno, conceitual e externo.
  d) interno, lógico e restrito.
  e) conceitual, estrutural e físico.


---

108. (CESGRANRIO / AL-TO - 2005) Um SGBD para manter a integridade dos dados deve
   apresentar algumas propriedades para as transações. A propriedade que define "ou todas as
   operações da transação são refletidas corretamente no banco de dados ou nenhuma deve ser
   refletida" é:

   a) atomicidade.
   b) consistência.
   c) durabilidade.
   d) isolamento.
   e) polimorfismo.

109. (NCE-UFRJ / TRE-RJ - 2001) Uma vantagem da arquitetura de 3 níveis ANSI/ SPARC é prover
   independência de dados. De acordo com esta arquitetura, é possível prover dois tipos de
   independência de dados:

   a) funcional e lógica;
   b) cronológica e funcional;
   c) física e lógica;
   d) física e referencial;
   e) cronológica e referencial.

110. (NCE-UFRJ / TRE-RJ - 2001) De acordo com a arquitetura ANSI/SPARC um Sistema de Banco
   de Dados divide-se em três níveis gerais: interno, conceitual e externo. É correto afirmar que:

   a) o nível interno é responsável pelo mapeamento entre os níveis externo e conceitual;
   b) o nível externo é o mais próximo ao armazenamento físico;
   c) o nível conceitual é o mais próximo ao usuário;
   d) o nível conceitual esconde os detalhes sobre o armazenamento físico dos dados;
   e) existe uma única visão externa no nível externo.


---

                      GABARITO
1.    ERRADO    38.   CORRETO    75.    LETRA A
2.    CORRETO   39.   LETRA A    76.    LETRA A
3.    LETRA D   40.   CORRETO    77.    LETRA A
4.    ERRADO    41.   CORRETO    78.    LETRA A
5.    CORRETO   42.   LETRA C    79.    LETRA B
6.    LETRA B   43.   LETRA A    80.    LETRA E
7.    CORRETO   44.   LETRA E    81.    LETRA B
8.    ANULADA   45.   LETRA B    82.    LETRA A
9.    LETRA D   46.   LETRA B    83.    LETRA D
10.   CORRETO   47.   LETRA C    84.    LETRA D
11.   LETRA E   48.   LETRA A    85.    LETRA B
12.   CORRETO   49.   LETRA A    86.    LETRA A
13.   CORRETO   50.   LETRA B    87.    LETRA D
14.   ERRADO    51.   LETRA A    88.    LETRA E
15.   LETRA C   52.   LETRA A    89.    LETRA B
16.   CORRETO   53.   LETRA C    90.    LETRA E
17.   CORRETO   54.   LETRA B    91.    LETRA E
18.   LETRA C   55.   LETRA E    92.    LETRA D
19.   LETRA D   56.   LETRA D    93.    LETRA D
20.   LETRA C   57.   LETRA A    94.    LETRA E
21.   LETRA C   58.   LETRA D    95.    LETRA B
22.   CORRETO   59.   LETRA B    96.    LETRA C
23.   CORRETO   60.   LETRA A    97.    LETRA D
24.   CORRETO   61.   LETRA E    98.    LETRA A
25.   ERRADO    62.   LETRA A    99.    LETRA C
26.   ERRADO    63.   LETRA D    100.   LETRA D
27.   ERRADO    64.   LETRA A    101.   LETRA B
28.   CORRETO   65.   LETRA B    102.   LETRA E
29.   ERRADO    66.   CORRETO    103.   LETRA D
30.   ERRADO    67.   LETRA B    104.   LETRA E
31.   ERRADO    68.   LETRA D    105.   LETRA E
32.   CORRETO   69.   LETRA B    106.   LETRA A
33.   ERRADO    70.   LETRA B    107.   LETRA C
34.   CORRETO   71.   LETRA B    108.   LETRA A
35.   ERRADO    72.   LETRA D    109.   LETRA C
36.   CORRETO   73.   LETRA D    110.   LETRA D
37.   ERRADO    74.   LETRA D


---
