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
arquivo_origem: Aula 15_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '15'
titulo_aula: Fluência em Dados
---

# Fluência em Dados

Aula 12
                          Receita Federal (Analista Tributário)
                                             Fluência em Dados

                                                           Autor:
                                     Diego Carvalho, Emannuelle
                        Gouveia Rolim, Equipe Informática
                                           e TI, Renato da Costa

                                            23 de Dezembro de 2024

---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 12

                                                                                     Índice
1) Principais SGBDs - Teoria


2) Principais SGBDs - Questões Comentadas


3) Principais SGBDs - Lista de Questões

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                           66

                                                             


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                       AVISO IMPORTANTE

Antes de iniciar, é importantíssimo que vocês leiam o seguinte recado: o edital trouxe um conjunto
de itens desorganizados que misturam Big Data, Ciência de Dados e Banco de Dados. Na minha
opinião, ficou tudo muito confuso tanto para alunos quanto para professores. Eu me refiro ao
seguinte trecho do edital:

Ciência de dados: Importância da informação. Big Data. Big Data em relação a outras disciplinas.
Ciência dos dados. Ciclo de vida do processo de ciência de dados. Papeis dos envolvidos em projetos de
Ciência de dados e Big Data. Arquitetura de Big Data. Modelos de entrega e distribuição de serviços de
Big Data. Plataformas de computação em nuvem para Big Data. Bancos de dados não relacionais:
bancos de dados NoSQL; Modelos Nosql. Principais SGBD’s. Soluções para Big Data.

No meio de toda essa bagunça, há um item: Principais SGBDs. Ocorre que há diversos problemas
com esse item: primeiro, por conta do ponto-final, não é possível afirmar se ele será cobrado dentro
do contexto de Bancos de Dados Não Relacionais ou se será cobrado genericamente; segundo,
existem dezenas de SGBDs – tanto os relacionais quanto os não relacionais. Quais seriam os
principais? Seriam os mais populares no mercado? Seriam os mais populares na academia? Seriam
aqueles utilizados na Receita Federal? Enfim...

Há um terceiro problema: SGBDs são ferramentas pesadas, complexas e com documentações
gigantescas. Vejam na imagem a quantidade de páginas da documentação oficial do PostgreSQL:

Em tese, a banca pode cobrar qualquer coisa dentro dessa documentação. E quem disse que
PostgreSQL faz parte dos principais SGBDs de acordo com a banca? Impossível saber! Nós fizemos
um exercício de adivinhação e decidimos falar de forma genérica – sem entrar em muitos detalhes
técnicos – de quatro SGBDs: Oracle (Relacional), PostgreSQL (Relacional), MongoDB (Não-
Relacional) e Cassandra (Não-Relacional).

Agora o mais importante: esse item tem um péssimo custo/benefício! Eu, honestamente, não
estudaria essa aula se estivesse estudando para esse concurso. O custo é altíssimo e o benefício é
minúsculo. Professor, não tem chance de cair uma questão? Tem, sim! Se veio no edital, a banca pode
cobrar! É provável? Na minha opinião, não! Você – como aluno – tem que fazer uma análise para se
focar naqueles assuntos que tem maiores chances de cair em prova e esse assunto definitivamente
não é um deles. Dito isso, a escolha é individual! De toda forma, segue a aula com os principais
pontos sobre os quatro SGBDs escolhidos. Forte abraço ;)


        Receita Federal (Analista Tributário) Fluência em Dados                                     3
        www.estrategiaconcursos.com.br                                                             66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                  ORACLE
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

Vamos começar a falar sobre um dos principais sistemas gerenciadores de bancos de dados
relacionais: Oracle Database! No entanto, antes vamos ver alguns conceitos fundamentais! Bem,
toda organização tem informações que deve armazenar e gerenciar para atender aos seus
requisitos. Por exemplo, uma corporação deve coletar e manter registros de recursos humanos para
seus funcionários. Esta informação deve estar disponível para aqueles que dela necessitam.

Nesse contexto, um Sistema de Informação (SI) é um sistema formal para armazenar e processar
informações. Um sistema de informação pode ser um conjunto de caixas de papelão contendo
pastas e pastas de papel pardo com regras de como armazenar e recuperar as pastas. No entanto,
a maioria das empresas hoje usa um banco de dados para automatizar seus sistemas de informação.
Um banco de dados é uma coleção organizada de informações tratadas como uma unidade.

O objetivo de um banco de dados é coletar, armazenar e recuperar informações relacionadas para
uso por aplicações de banco de dados. E um SGBD?

Sistema Gerenciador de Banco de Dados (SGBD)

Um SGBD é um software que controla o armazenamento, a organização e a recuperação de dados.
Normalmente, ele tem os seguintes elementos:

Uma aplicação de banco de dados é um programa de software que interage com um banco de dados
para acessar e manipular dados. A primeira geração de SGBDs incluiu os seguintes tipos:


        Receita Federal (Analista Tributário) Fluência em Dados                                               4
        www.estrategiaconcursos.com.br                                                                       66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

 Hierárquico: um banco de dados que organiza dados em uma estrutura de árvore. Cada registro
  pai possui um ou mais registros filhos, semelhante à estrutura de um sistema de arquivos.

 Rede: um banco de dados semelhante a um banco de dados hierárquico, exceto que os registros
  têm um relacionamento muitos-para-muitos em vez de um-para-muitos.

Os sistemas gerenciadores de bancos de dados anteriores armazenavam dados em
relacionamentos rígidos e predeterminados. Como não existia nenhuma linguagem de definição de
dados (Data Definition Language – DDL), era difícil alterar a estrutura dos dados. Além disso, esses
sistemas careciam de uma linguagem de consulta simples, o que dificultava o desenvolvimento de
aplicações. Foi quando surgiu o modelo relacional...

Modelo Relacional

Em seu artigo seminal de 1970: "A Relational Model of Data for Large Shared Data Banks", E. F. Codd
definiu um modelo relacional baseado na teoria dos conjuntos matemáticos. Hoje, o modelo de
banco de dados mais amplamente aceito é o modelo relacional. Um banco de dados relacional é
um banco de dados que está em conformidade com o modelo relacional. O modelo relacional tem
os seguintes aspectos principais:

Um banco de dados relacional armazena dados em um conjunto de relações simples. E o que é
uma relação? Uma relação é um conjunto de tuplas. E o que é uma tupla? Uma tupla é um conjunto
não ordenado de valores de atributos. E o que é uma tabela? Uma tabela é uma representação
bidimensional de uma relação na forma de linhas (tuplas) e colunas (atributos). Cada linha em uma
tabela tem o mesmo conjunto de colunas.

Galera, o conceito principal que vocês precisam assimilar é que um banco de dados relacional é
um banco de dados que armazena os dados em relações (também chamadas de tabelas). Por


        Receita Federal (Analista Tributário) Fluência em Dados                                   5
        www.estrategiaconcursos.com.br                                                           66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

exemplo, um banco de dados relacional pode armazenar informações sobre funcionários da
empresa em uma tabela FUNCIONÁRIOS, uma tabela de DEPARTAMENTOS e uma tabela de SALÁRIOS.
Professor, existem bancos de dados que não armazenam dados em tabelas? Claro!

Sistema de Gerenciamento de Bancos de Dados Relacionais

O modelo relacional é a base para um Sistema Gerenciador de Banco de Dados Relacional (SGBDR).
Um SGBDR move dados para um banco de dados, armazena os dados e os recupera para que
as aplicações possam manipulá-los. Pense em uma aplicação qualquer que você usa no navegador
ou em seu smartphone! Ela provavelmente manipula dados de um banco de dados (consulta, insere,
exclui ou atualiza dados). Um SGBDR distingue entre os seguintes tipos de operações:

   OPERAÇÕES                                                      DESCRIÇÃO
                   Nesse caso, uma aplicação especifica qual conteúdo é necessário. Por exemplo, uma aplicação
                   solicita o nome de um funcionário ou adiciona um registro de funcionário a uma tabela.
     Lógicas


                   Nesse caso, o SGBDR determina como as coisas devem ser feitas e realiza a operação. Por
                   exemplo, depois que uma aplicação consulta uma tabela, o banco de dados pode usar um índice
     físicas       para localizar as linhas solicitadas, ler os dados na memória e executar muitas outras etapas
                   antes de retornar um resultado ao usuário. O SGBDR armazena e recupera dados para que as
                   operações físicas sejam transparentes para as aplicações de banco de dados.


Eu disse que o Oracle era um SGBDR, mas há um detalhe: temos alguns casos em que um SGBDR
implementa recursos orientados a objeto, como tipos definidos pelo usuário, herança e
polimorfismo. Não vamos entrar nos detalhes, mas existe um outro paradigma de sistemas
gerenciadores de bancos de dados que trata seus recursos como objetos. O Oracle é originalmente
um banco de dados relacional, mas estendeu seus recursos para representar também objetos.

Por essa razão, podemos afirmar que o Oracle é atualmente Sistema Gerenciador de Banco de
Dados Objeto-Relacional (SGBDOR).


Objetos de Esquema

Uma característica de um SGBDR é a independência do armazenamento de dados físicos das
estruturas de dados lógicos. O primeiro se refere à localização física dos dados no disco rígido,
enquanto o segundo se refere à forma como os dados são organizados, como tabelas e índices. As
estruturas de dados físicas e lógicas são completamente independentes umas das outras, o que
permite maior flexibilidade na criação e gerenciamento de dados.

No Oracle, um esquema de banco de dados é uma coleção de estruturas lógicas de dados ou objetos
de esquema. Trata-se de uma coleção de tabelas, visualizações, sequências, procedimentos
armazenados, funções, pacotes e outros objetos. Um esquema pertence a um usuário do banco

        Receita Federal (Analista Tributário) Fluência em Dados                                                6
        www.estrategiaconcursos.com.br                                                                        66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

de dados e tem o mesmo nome desse usuário. Todos os objetos no esquema são acessíveis ao
usuário que possui o esquema.

Objetos de esquema são estruturas criadas pelo usuário que se referem diretamente aos dados no
banco de dados. O banco de dados oferece suporte a muitos tipos de objetos de esquema, sendo
os mais importantes as tabelas e os índices. Um objeto de esquema é um tipo de objeto de banco
de dados. É importante salientar que alguns objetos de banco de dados, como perfis e funções, não
residem em esquemas. Logo, nem todo objeto está em um esquema.

Tabelas

Uma tabela descreve uma entidade como, por exemplo, funcionários. Você define uma tabela com
um nome de tabela, como funcionários e um conjunto de colunas. Em geral, você dá a cada coluna
um nome, um tipo de dados e um tamanho ao criar a tabela. Uma tabela é um conjunto de linhas
e colunas. Uma coluna identifica um atributo da entidade descrita pela tabela, enquanto uma
linha identifica uma instância da entidade.

Por exemplo, podemos definir dois atributos para a entidade de funcionários: uma coluna para
armazenar um identificador e uma coluna para armazenar o nome do funcionário. Logo, uma linha
identifica um funcionário específico. Você pode opcionalmente especificar uma regra, chamada
de restrição de integridade, para uma coluna. Um exemplo é uma restrição de integridade NOT
NULL. Essa restrição força a coluna a conter um valor em cada linha, logo ela jamais pode estar vazia.


Índices

        Receita Federal (Analista Tributário) Fluência em Dados                                     7
        www.estrategiaconcursos.com.br                                                             66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Um índice é uma estrutura de dados opcional que você pode criar em uma ou mais colunas de
uma tabela. Eles podem aumentar o desempenho da recuperação de dados. Isso é importante por
quê? Ora, lembre-se que você consulta dados em bancos de dados o tempo todo. E se o banco de
dados tiver milhões de linhas e uma estrutura complexa? Nesses casos, o desempenho da
recuperação de dados pode ser fundamental.

Ao processar uma solicitação, o banco de dados pode usar os índices disponíveis para localizar
as linhas solicitadas com eficiência. Os índices são úteis quando as aplicações geralmente
consultam uma linha específica ou um intervalo de linhas. Eles são lógica e fisicamente
independentes dos dados. Assim, você pode descartar e criar índices sem efeito nas tabelas ou
outros índices. Todas as aplicações continuam a funcionar depois que você descarta um índice.

Views

Views (Visões) são apresentações personalizadas de dados em uma ou mais tabelas ou de
outras views. Ela também pode ser considerada uma consulta armazenada. Views não contêm os
dados realmente; em vez disso, elas derivam seus dados das tabelas nas quais se baseiam,
conhecidas como as tabelas base. Como tabelas, os dados de uma view podem ser consultados,
atualizados, inseridos e excluídos, porém com algumas restrições.

Todas as operações executadas em uma view afetam as tabelas base da view correspondente. Uma
das principais vantagens das views é que elas fornecem um nível adicional de segurança para a
tabela, restringindo o acesso a um conjunto predeterminado de linhas e colunas. Assim,
usuários não conseguem acessar dados não autorizados. Eles também escondem a complexidade
de dados e armazenam consultas complexas.

Clusters

        Receita Federal (Analista Tributário) Fluência em Dados                             8
        www.estrategiaconcursos.com.br                                                     66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Clusters são grupos de uma ou mais tabelas armazenadas fisicamente juntas, porque elas
compartilham colunas comuns e são muitas vezes utilizadas em conjunto. Porque linhas
relacionadas são armazenadas fisicamente juntas, o tempo de acesso ao disco melhora. Como
índices, os clusters não afetam o design da aplicação. Se uma tabela é parte de um cluster ou não,
isso é transparente para os usuários e aplicações.

Os dados armazenados em uma tabela em cluster são acessados por SQL da mesma forma como
os dados armazenados em uma tabela sem clusters.

Synonyms

Um sinônimo é um alias (apelido) para qualquer tabela, view, view materializada, sequência,
stored procedure, function, pacote, tipo, objeto de esquema de classe Java, um tipo de objeto
definido pelo usuário, ou outro sinônimo. Pelo fato de um synonym ser simplesmente um alias,
não requer nenhum armazenamento, além da sua definição no dicionário de dados. Eles caem
pouquíssimo em prova, mas é bem simples de compreender.


Tipos de Dados

Cada valor manipulado pelo Oracle possui um tipo de dado. O tipo de dados de um valor associa
um conjunto fixo de propriedades ao valor. Essas propriedades fazem com que o Oracle trate os
valores de um tipo de dados de maneira diferente dos valores de outro. Por exemplo, você pode
adicionar valores do tipo de dados NUMBER, mas não valores do tipo de dados RAW. Ao criar uma
tabela ou cluster, você deve especificar um tipo de dados para cada uma de suas colunas.

Ao criar um procedimento ou função armazenada, você deve especificar um tipo de dados para
cada um de seus argumentos. Esses tipos de dados definem o domínio de valores que cada coluna
pode conter ou cada argumento pode ter. Por exemplo, as colunas DATE não podem aceitar o valor

        Receita Federal (Analista Tributário) Fluência em Dados                                 9
        www.estrategiaconcursos.com.br                                                         66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

29 de fevereiro (exceto para um ano bissexto) ou os valores 2 ou “Sapato”. Cada valor
subsequentemente colocado em uma coluna assume o tipo de dados da coluna.

Por exemplo, se você inserir '01-JAN-98' em uma coluna DATE, o Oracle tratará a cadeia de
caracteres '01-JAN-98' como um valor DATE após verificar se ela é convertida em uma data válida.
O Oracle fornece vários tipos de dados integrados, bem como várias categorias para tipos
definidos pelo usuário que podem ser usados como tipos de dados. Os tipos de dados definidos
pelo Oracle são apresentados na tabela seguinte (em amarelo, os mais comuns em prova):

            Tipos de dados                                         DESCRIÇÃO
                             Cadeia de caracteres de comprimento variável.
              varchar2

                             Cadeia de caracteres de comprimento variável com tamanho máximo.
             nvarchar2

                             Número com precisão de 1 a 38 e escala de -84 a 127.
                 number

                             Subtitpo do Number usado para armazenar dados numéricos em ponto flutuante.
                   float

                             Dado de caractere de comprimento variável com um comprimento até 2GB.
                    long

                             Valores de data de 1º de janeiro de 4712 A.C. a 31 de dezembro de 9999 A.D.
                    date

                             Um número de ponto flutuante de 32 bits.
        binary_float

                             Um número de ponto flutuante de 64 bits.
       binary_double

                       Ano, mês, dia, hora, minuto, segundo e segundos fracionários (pode conter ou não
             timestamp fuso horário).

                    Armazena um período de tempo em anos e meses. O valor de precisão_do_ano é o
   interval year to
                    número de dígitos do campo YEAR.
              month

                    Armazena um período de tempo como dias, horas, minutos, segundos e segundos
    interval day to fracionários. O valor para precisão_do_dia varia de 0 a 9, com um padrão igual a 2. O
             second valor de precisão_dos_segundos_fracionários é similar aos segundos fracionários em
                    um valor TIMESTAMP.
                    Dados binários brutos, com com tamanho máximo: 32767 bytes, se
                raw MAX_STRING_SIZE = EXTENDED; 2000 bytes, se MAX_STRING_SIZE = STANDARD.

        Receita Federal (Analista Tributário) Fluência em Dados                                            10
        www.estrategiaconcursos.com.br                                                                     66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                             Dados binários brutos, comprimento variável, até 2GB.
              long raw

                         Uma string em base 64 representando o endereço único de uma linha na sua tabela
                   rowid correspondente. Esse endereço é exclusivo em todo o banco de dados.

                        Uma string em base 64 representando o endereço lógico de uma linha na sua tabela
                 urowid organizada por índices. O tamanho máximo é 4000 bytes.

                             Uma string de caractere de comprimento fixo, cujo comprimento corresponde ao
                    char     comprimento tamanho. O tamanho mínimo é 1 e o máximo é 2000 bytes. Os
                             parâmetros BYTE e CHAR, como em VARCHAR2.
                             Uma string de caractere de comprimento fixo de até 2000 bytes; o argumento
                   nchar     tamanho máximo depende da definição do conjunto de caracteres nacional para o
                             banco de dados. O argumento tamanho padrão é igual a 1.
                             Um Character Large Object contendo caracteres single-byte ou multibytes; suporta
                    clob     conjunto de caracteres de largura fixa ou de largura variável. O tamanho máximo é
                             (4GB - 1) * DB_BLOCK_SIZE.
                             Similar ao CLOB, exceto que caracteres Unicode são armazenados tanto de conjuntos
                   nclob     de caracteres de largura fixa quanto de largura variável. O tamanho máximo é (4GB -
                             1) * DB_BLOCK_SIZE.
                             Um Binary Large Object; o tamanho máximo é (4GB - 1) * DB_BLOCK_SIZE.
                    blob

                         Um ponteiro para um Large Binary File armazenado fora do banco de dados. Arquivos
                   bfile binários devem ser acessíveis a partir do servidor que executa a instância Oracle. O
                         tamanho máximo é de 4GB.


Contas de Usuários

Duas contas de usuário administrativo são criadas automaticamente quando você instala o Oracle:
SYS e SYSTEM. Ambas são criadas com a senha que você forneceu na instalação e ambos recebem
automaticamente a função de DBA (Database Administrator). Vejamos:

  USUÁRIOS                                                  DESCRIÇÃO
          Esta conta pode executar todas as funções administrativas. Todas as tabelas e view subjacentes para
          o dicionário de dados do banco de dados são armazenadas no esquema SYS. Essas tabelas e views são
          críticas para a operação do Oracle. Para manter a integridade do dicionário de dados, as tabelas no
      SYS esquema SYS são manipuladas apenas pelo banco de dados. Elas nunca devem ser modificadas por
          nenhum usuário ou administrador de banco de dados. Você não deve criar nenhuma tabela no
          esquema SYS. O usuário SYS recebe o privilégio SYSDBA, que permite que um usuário execute tarefas
          administrativas de alto nível, como backup e recuperação.
          Esta conta pode executar todas as funções administrativas, exceto as seguintes: restauração e
          recuperação; e atualização do banco de dados. Embora essa conta possa ser usada para executar
   SYSTEM tarefas administrativas do dia a dia, a Oracle recomenda enfaticamente a criação de contas de
          usuários nomeados para administrar o banco de dados para permitir o monitoramento da atividade
          do banco de dados.


        Receita Federal (Analista Tributário) Fluência em Dados                                               11
        www.estrategiaconcursos.com.br                                                                        66

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

Acesso aos Dados

Um requisito geral para um sistema gerenciador de banco de dados é aderir aos padrões da
indústria aceitos para uma linguagem de acesso a dados. Vejamos as principais:

Structured Query Language (SQL)

SQL é uma linguagem declarativa baseada em conjuntos que fornece uma interface para um
SGBDR como o Oracle. Em contraste com as linguagens procedurais (Ex: C, Pascal, VB, Cobol,
PL/SQL, JavaScript, etc) que descrevem como as coisas devem ser feitas, o SQL não é procedural –
ela descreve o que deve ser feito. SQL é a linguagem padrão ANSI1 para bancos de dados
relacionais.

Todas as operações em dados no Oracle são executadas usando instruções SQL. Por exemplo,
você pode usar o SQL para criar tabelas e consultar/modificar dados em tabelas. Uma instrução
SQL pode ser considerada como um programa ou instrução de computador muito simples, mas
poderosa. Os usuários especificam o resultado que desejam (por exemplo, os nomes dos
funcionários) e, não, como derivá-lo. Vamos ver um exemplo de instrução SQL:

                              SELECT first_name, last_name FROM empregados;

As instruções SQL permitem que você execute as seguintes tarefas: consultar dados; inserir,
atualizar e excluir linhas em uma tabela; criar, substituir, alterar e soltar objetos; controlar o acesso
ao banco de dados e seus objetos; garantir consistência e integridade do banco de dados. O SQL
unifica as tarefas anteriores em uma linguagem consistente. O Oracle SQL é uma implementação
do padrão ANSI e suporta vários recursos que vão além do SQL padrão.

PL/SQL e Java

Vocês se lembram que falamos que SQL não é uma linguagem procedural? Pois é, já o PL/SQL é uma
extensão procedural do Oracle SQL. Ele é integrado ao Oracle, permitindo que você use instruções,
funções e tipos de dados SQL do Oracle. Você pode usar PL/SQL para controlar o fluxo de um
programa SQL, criar variáveis e escrever procedimentos de tratamento de erros. Um benefício do
PL/SQL é a capacidade de armazenar a lógica da aplicação no próprio banco de dados.

1
  Padrão ANSI (American National Standards Institute) é um conjunto de normas técnicas e padrões desenvolvidos para ajudar a garantir que os
produtos, serviços e processos sejam padronizados. Esses padrões são amplamente utilizados na indústria de computação e software, permitindo
que os fabricantes de hardware e software desenvolvam produtos que sejam compatíveis e interoperáveis entre diferentes sistemas.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                       12
          www.estrategiaconcursos.com.br                                                                                                66

                                            


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Como assim? O que seria a lógica da aplicação, Diego? A lógica de uma aplicação é o conjunto de
regras e procedimentos que regem a execução dos processos, desde a entrada de dados até a
saída de resultados. É responsável por determinar como os dados serão processados e quais ações
serão executadas e também pela estruturação dos dados, permitindo que eles sejam armazenados,
recuperados e utilizados de maneira eficiente.

Em geral, utilizamos linguagens específicas para criar as regras da lógica da aplicação. No entanto,
isso também pode ser feito em PL/SQL – já que ele é uma linguagem procedural. Aliás, um
procedimento ou função PL/SQL é um objeto de esquema que consiste em um conjunto de
instruções SQL, agrupadas, armazenadas no banco de dados e executadas como uma unidade para
resolver um problema específico ou executar um conjunto de tarefas relacionadas.


Gerenciamento de Transações

O Oracle Database foi projetado como um banco de dados multiusuário. Logo, ele deve garantir
que vários usuários possam trabalhar simultaneamente sem corromper os dados uns dos outros.

Transações

Uma transação é uma unidade de trabalho lógica e atômica que contém uma ou mais instruções
SQL. Um SGBDR deve ser capaz de agrupar instruções SQL para que sejam todas confirmadas
(commit), o que significa que serão aplicadas ao banco de dados, ou todas revertidas (rollback), o
que significa que serão desfeitas. Exemplo: imagine que vamos transferir dinheiro de uma conta
poupança para uma conta corrente. A transferência consiste nas seguintes operações separadas:

1.Diminuir a conta poupança.
2. Aumentar a conta corrente.
3. Registrar a transação no diário de transações.

O Oracle garante que todas as três operações tenham sucesso ou falhem como uma unidade.
Por exemplo, se uma falha de hardware impedir a execução de uma instrução, as outras instruções
deverão ser revertidas. As transações são um recurso que diferencia o Oracle de um Sistema de
Arquivos, que não possui esses recursos. Se você executar uma operação atômica que atualiza
vários arquivos e o sistema falhar no meio do caminho, os arquivos não serão consistentes.

Em contraste, uma transação move um banco de dados de um estado consistente para outro. É
tudo ou nada: uma operação atômica é bem-sucedida ou falha como um todo.

Concorrência de Dados

Um SGBDR multiusuário deve ter um controle da concorrência dos dados, que é o acesso dos
mesmos dados por vários usuários simultâneos. Sem isso, os usuários podem alterar os dados


        Receita Federal (Analista Tributário) Fluência em Dados                                  13
        www.estrategiaconcursos.com.br                                                           66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

indevidamente, comprometendo a integridade dos dados. Por exemplo, um usuário pode atualizar
uma linha enquanto outro usuário a atualiza simultaneamente. Se vários usuários acessarem os
mesmos dados, uma maneira de gerenciar a concorrência é fazer com que os usuários esperem.

No entanto, o objetivo de um SGBD é reduzir o tempo de espera para que seja inexistente ou
insignificante. Todas as instruções SQL que modificam dados devem prosseguir com o mínimo
de interferência possível. Interações destrutivas, que são interações que atualizam dados
incorretamente ou alteram estruturas de dados subjacentes, devem ser evitadas. O Oracle usa
bloqueios (locks) para controlar o acesso simultâneo aos dados.

Um bloqueio é um mecanismo que impede a interação destrutiva entre as transações que acessam
um recurso compartilhado – eles ajudam a garantir a integridade dos dados.

Consistência de Dados

No Oracle, cada usuário deve ter uma visão consistente dos dados, incluindo alterações visíveis
feitas pelas próprias transações do usuário e transações confirmadas (commit) de outros
usuários. Por exemplo, o banco de dados deve evitar o problema de atualização perdida, que ocorre
quando uma transação vê alterações não confirmadas feitas por outra transação simultânea. O que
é uma transação confirmada, Diego?

Uma transação confirmada é uma transação que foi concluída com sucesso e as alterações foram
permanentemente aplicadas ao banco de dados – é o estágio final em uma transação de banco de
dados, na qual todas as alterações nos dados são salvas e registradas no banco de dados. O Oracle
sempre reforça a consistência de leitura em nível de instrução, o que garante que os dados
retornados por uma única consulta sejam confirmados e consistentes em um único ponto no tempo.


Arquitetura de Bancos de Dados Oracle

Um servidor de banco de dados é a chave para o gerenciamento de informações. Em geral, um
servidor gerencia de forma confiável uma grande quantidade de dados em um ambiente
multiusuário para que os usuários possam acessar simultaneamente os mesmos dados. Um servidor
de banco de dados também impede o acesso não autorizado e fornece soluções eficientes para
recuperação de falhas.

Bases de Dados e Instâncias

Um servidor de banco de dados Oracle consiste em um banco de dados e pelo menos uma instância
de banco de dados, comumente referido simplesmente como instância. Como uma instância e um
banco de dados estão intimamente conectados, o termo banco de dados Oracle às vezes é
usado para se referir tanto à instância quanto ao banco de dados. No sentido mais estrito, os
termos têm os seguintes significados:


        Receita Federal (Analista Tributário) Fluência em Dados                               14
        www.estrategiaconcursos.com.br                                                        66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                 Trata-se de um conjunto de arquivos, localizados em disco, que armazenam dados – esses
  BANCO DE DADOS arquivos podem existir independentemente de uma instância de banco de dados.

                 Conjunto de estruturas de memória que gerenciam arquivos de banco de dados. A instância
                 consiste em uma área de memória compartilhada, chamada System Global Area (SGA), e um
    INSTÂNCIA DE conjunto de processos em segundo plano. Uma instância pode existir independentemente dos
                 arquivos de banco de dados. A imagem seguinte mostra um banco de dados e sua instância.
  BANCO DE DADOS Para cada conexão de usuário com a instância, um processo cliente executa a aplicação. Cada
                 processo cliente está associado ao seu próprio processo servidor. O processo do servidor tem
                 sua própria memória de sessão privada, conhecida como Program Global Area (PGA).


Um banco de dados pode ser considerado de uma perspectiva física e lógica. Os dados físicos são
dados visíveis no nível do sistema operacional. Por exemplo, utilitários do sistema operacional,
como ls e ps no Linux, que são utilitários que permite listar arquivos e processos de banco de dados.
Já os dados lógicos, como uma tabela, são significativos apenas para o banco de dados. Como assim,
professor?

Uma instrução SQL pode listar as tabelas em um banco de dados, mas um utilitário do sistema
operacional, não. O banco de dados possui estruturas físicas e estruturas lógicas. Como as
estruturas físicas e lógicas são separadas, você pode gerenciar o armazenamento físico de dados
sem afetar o acesso às estruturas de armazenamento lógico. Por exemplo, renomear um arquivo
de banco de dados físico não renomeia as tabelas cujos dados estão armazenados nesse arquivo.

        Receita Federal (Analista Tributário) Fluência em Dados                                            15
        www.estrategiaconcursos.com.br                                                                     66

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

Estruturas de Armazenamento de Bancos de Dados

Uma tarefa essencial de um banco de dados relacional é o armazenamento de dados. O
armazenamento lógico é composto, dentre outros, por Schema, Tablespaces, Segment, Extent,
Data Blocks e Indexes; já o armazenamento físico é composto, dentre outros, por Data File, Control
File e Online Redo Log. A imagem seguinte mostra uma representação dos principais objetos e como
eles se relacionam. Vamos interpretá-la:

    Dados do Oracle são armazenados em TABLESPACES.
    Um TABLESPACE pode pertencer a somente um DATABASE.
    Cada TABLESPACE consiste em um ou mais DATAFILES.
    Um TABLESPACE pode consistir em um ou mais SEGMENTS.
    DATAFILES são a implementação física de TABLESPACES.
    Cada DATAFILE pertence a um único TABLESPACE.
    DATAFILES são formados por vários O.S. BLOCKS (menor unidade manipulável pelo Oracle).
    Um BLOCK não pertence a mais de um EXTENT ou DATAFILE.

Estruturas de Armazenamento Físico

          Receita Federal (Analista Tributário) Fluência em Dados                              16
          www.estrategiaconcursos.com.br                                                       66

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

As estruturas físicas do banco de dados são os arquivos que armazenam os dados. Quando você
executa uma instrução CREATE DATABASE, os seguintes arquivos são criados:

Através dos arquivos de log de redo online pode-se obter informações sobre os dados alterados.
Eles são fundamentais nas operações de recovery e recomenda-se manter cópias múltiplas destes
arquivos de preferência em discos diferentes.

Muitos outros arquivos são importantes para o funcionamento de um servidor de banco de dados
Oracle – isso inclui arquivos de parâmetros e arquivos de rede. Arquivos de backup e arquivos de
redo log arquivados são arquivos offline importantes para backup e recuperação.

Estruturas de Armazenamento Lógico

        Receita Federal (Analista Tributário) Fluência em Dados                              17
        www.estrategiaconcursos.com.br                                                       66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

As estruturas de armazenamento lógico permitem que o Oracle tenha um controle refinado do uso
do espaço em disco. Vejamos em sequência hierárquica de armazenamento:

Vamos detalhar um pouco mais os tablespaces. Um banco de dados é dividido em unidades
lógicas de armazenamento chamadas tablespaces, que agrupam estruturas lógicas
relacionadas (como tabelas, visualizações e outros objetos de banco de dados). Por exemplo,
todos os objetos de uma aplicação podem ser agrupados em um único tablespace para simplificar
as operações de manutenção. Um tablespace consiste em um ou mais arquivos de dados físicos.

Os objetos de banco de dados atribuídos a um tablespace são armazenados nos arquivos de dados
físicos desse tablespace. Quando você cria um banco de dados Oracle, alguns tablespaces já
existem, como SYSTEM e SYSAUX. Tablespaces fornecem um meio de localizar fisicamente os
dados no armazenamento. Ao definir os arquivos de dados que compõem um tablespace, você
especifica um local de armazenamento para esses arquivos.

        Receita Federal (Analista Tributário) Fluência em Dados                           18
        www.estrategiaconcursos.com.br                                                    66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Quaisquer objetos de esquema atribuídos a esse espaço de tabela são localizados no local de
armazenamento especificado. Tablespaces também fornecem uma unidade de backup e
recuperação. Os recursos de backup e recuperação do Oracle permitem que você faça backup ou
recupere no nível do tablespace. O Oracle já vem com alguns tablespaces padrão que veremos na
tabela seguinte:

  Tablespaces                                                DESCRIÇÃO
             Este tablespace contém os esquemas de amostra incluídos no Oracle. Os esquemas de exemplo
             fornecem uma plataforma comum para exemplos. A documentação e os materiais educacionais da
     EXAMPLE
             Oracle contêm exemplos baseados nos esquemas de exemplo.

             Este tablespace é criado automaticamente na criação do banco de dados. O Oracle o utiliza para
             gerenciar o banco de dados. Ele contém o dicionário de dados, que é o conjunto central de tabelas
             e views usadas como referência somente leitura para um banco de dados específico. Ele também
      SYSTEM
             contém várias tabelas e views que contêm informações administrativas sobre o banco de dados.
             Todos eles estão contidos no esquema SYS e podem ser acessados apenas pelo usuário SYS ou
             outros usuários administrativos com o privilégio necessário.
             Este é um tablespace auxiliar para o SYSTEM. Ele contém dados para alguns componentes e
             produtos, reduzindo a carga no SYSTEM. Todo banco de dados que usa o Oracle 10g release 1 (10.1)
      SYSAUX
             ou posterior deve ter um tablespace SYSAUX.

             Este tablespace armazena dados temporários gerados durante o processamento de instruções
             SQL. Por exemplo, ele seria usado para classificação de consultas. Cada banco de dados deve ter
        TEMP um tablespace temporário que é atribuído aos usuários como seu tablespace temporário. No banco
             de dados pré-configurado, o TEMP é especificado como o tablespace temporário padrão. Se
             nenhum tablespace temporário for especificado quando uma conta de usuário for criada, o Oracle
             atribuirá esse tablespace ao usuário.
             Este é o tablespace de undo usado pelo banco de dados para armazenar informações de undo. Todo
    UNDOTBS1 banco de dados deve ter um tablespace de undo.

              Este tablespace é usado para armazenar objetos e dados permanentes do usuário. Semelhante ao
              TEMP, todo banco de dados deve ter um tablespace para dados permanentes do usuário atribuídos
        USERS aos usuários. Caso contrário, objetos de usuário serão criados no SYSTEM, o que não é uma boa
              prática. No banco de dados pré-configurado, USERS é designado como tablespace padrão para
              todos os novos usuários.


Para finalizar, é importante destacar que não há relacionamento direto entre um tablespaces e
esquemas. Logo, objetos no mesmo esquema podem usar armazenamento em tablespaces
diferentes, e um tablespace pode conter dados de esquemas diferentes.

Estruturas de Instâncias de Bancos de Dados

Um banco de dados Oracle usa estruturas de memória e processos para gerenciar e acessar o
banco de dados. Todas as estruturas de memória existem na memória principal dos computadores
que constituem o SGBDR. Quando as aplicações se conectam a um banco de dados Oracle, elas se
conectam a uma instância do banco de dados. A instância atende aplicações alocando outras áreas
de memória (além da SGA) e iniciando outros processos além dos processos em segundo plano.

        Receita Federal (Analista Tributário) Fluência em Dados                                             19
        www.estrategiaconcursos.com.br                                                                      66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Processos de Banco de Dados Oracle

Processo (também chamado de job, task ou thread) é um mecanismo do sistema operacional que
pode executar uma série de etapas. Uma instância de banco de dados possui os tipos de processos:

  Tipos de processos                                              DESCRIÇÃO
       Processos de Esses processos são criados e mantidos para executar o código de software de uma aplicação
                    ou de uma ferramenta Oracle. A maioria dos ambientes possui máquinas separados para
            cliente processos cliente.
       Processos de Esses processos consolidam funções que, de outra forma, seriam tratadas por vários
                    programas de banco de dados Oracle em execução para cada processo cliente. Os processos
     segundo plano
                    em segundo plano executam E/S (Entrada/Saída) de forma assíncrona e monitoram outros
      (BAGKGROUND)  processos para fornecer maior paralelismo para melhor desempenho e confiabilidade.
       Processos do Esses processos se comunicam com os processos do cliente e interagem com o Oracle para
                    atender às solicitações.
            servidor

Processos Oracle incluem Processos de Servidor e Processos de Segundo Plano. Na maioria dos
ambientes, Processos Oracle e Processos de Cliente são executados em máquinas separadas.

Estruturas de Memória de Instância

O Oracle cria e usa estruturas de memória para código de programa, dados compartilhados entre
usuários e áreas de dados privados para cada usuário conectado. As seguintes estruturas de
memória estão associadas a uma instância de banco de dados:

 System Global Area (SGA): trata-se de um grupo de estruturas de memória compartilhada que
  contém dados e informações de controle para uma instância de banco de dados. Exemplos:
  cache de buffer do banco de dados e áreas SQL compartilhadas.

A SGA consiste em diversas estruturas de memória: Shared Pool, usado para armazenar instruções
SQL mais executadas recentemente e os dados do dicionário de dados mais usados; Data Buffer
Cache, usado para armazenar em blocos os dados mais usados recentemente – que são lidos e
gravados nos arquivos de dados; Redo Log Buffer, usado para controlar alterações no banco de
dados pelo servidor e pelos processos de segundo plano.

Todas as vezes que o Oracle é inicializado, um grupo de buffers de memória do System Global
Area (SGA) é alocado e alguns processos que permanecem em background são inicializados. A
combinação desses buffers de memória e dos processos em background forma uma instância
Oracle. Para que o banco de dados não se confunda, cada instância é identificada pelo que é
conhecido como identificador de sistema (SID – System IDentifier).

        Receita Federal (Analista Tributário) Fluência em Dados                                             20
        www.estrategiaconcursos.com.br                                                                      66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

 Program Global Area (PGA): trata-se de uma região de memória que contém informações de
  controle para um servidor ou processo em segundo plano. O acesso ao PGA é exclusivo do
  processo. Cada processo do servidor e processo em segundo plano tem seu próprio PGA.

Arquitetura de Aplicação e Redes

Para aproveitar ao máximo um determinado sistema de computador ou rede, o Oracle permite que
o processamento seja dividido entre o servidor de banco de dados e os programas clientes. O
computador que executa o sistema gerenciador de banco de dados relacional lida com as
responsabilidades do servidor de banco de dados enquanto os computadores que executam as
aplicações lidam com a interpretação e exibição dos dados.

Arquitetura de Aplicação

A arquitetura de aplicação é o ambiente no qual uma aplicação de banco de dados se conecta a um
banco de dados Oracle. As duas arquiteturas mais comuns são cliente/servidor e multicamada:

 Em uma arquitetura cliente/servidor, a aplicação cliente inicia uma solicitação para que uma
  operação seja executada no servidor de banco de dados.

O servidor executa o Oracle e controla as funções necessárias para o acesso simultâneo e
compartilhado aos dados. Nesse caso, o servidor recebe e processa solicitações originadas de
clientes.

 Já em uma arquitetura multicamada tradicional, um ou mais servidores de aplicações
  executam partes da operação.

        Receita Federal (Analista Tributário) Fluência em Dados                             21
        www.estrategiaconcursos.com.br                                                      66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Um servidor de aplicação contém grande parte da lógica da aplicação, fornece acesso aos dados
para o cliente e executa algum processamento de consulta. Dessa forma, a carga no banco de dados
é reduzida. O servidor de aplicação pode servir como uma interface entre clientes e vários bancos
de dados e pode fornecer um nível adicional de segurança.

Uma Arquitetura Orientada a Serviços (SOA) é uma arquitetura multicamada na qual a
funcionalidade da aplicação é encapsulada em serviços. Serviços SOA geralmente são
implementados como web services. Eles são acessíveis por meio de HTTP e baseados em padrões
baseados em XML, como Web Services Description Language (WSDL) e SOAP. O Oracle pode atuar
como um provedor de web services em um ambiente multicamadas ou SOA tradicional.

Arquitetura de Rede

O Oracle Net Services é a interface entre o banco de dados e os protocolos de comunicação de
rede que facilitam o processamento distribuído e os bancos de dados distribuídos. Os protocolos
de comunicação definem a maneira como os dados são transmitidos e recebidos em uma rede. O
Oracle Net Services suporta comunicações em todos os principais protocolos de rede, incluindo
TCP/IP, HTTP, FTP e WebDAV.

O Oracle Net, um componente do Oracle Net Services, estabelece e mantém uma sessão de
rede de uma aplicação cliente para um servidor de banco de dados. Depois que uma sessão de
rede é estabelecida, o Oracle Net atua como o mensageiro de dados tanto para a aplicação cliente
quanto para o servidor de banco de dados, trocando mensagens entre eles. O Oracle Net pode
executar essas tarefas porque está localizado em cada computador da rede.

Um componente importante do Net Services é o Oracle Net Listener, que é um processo executado
no banco de dados ou em outro local da rede. As aplicações clientes enviam solicitações de conexão
para o listener, que gerencia o tráfego dessas solicitações para o banco de dados. Quando uma
conexão é estabelecida, o cliente e o banco de dados se comunicam diretamente. As formas mais
comuns de configurar um banco de dados Oracle para atender às solicitações do cliente são:

Arquitetura de Servidor Dedicado

Cada processo cliente se conecta a um processo servidor dedicado. O processo do servidor não é
compartilhado por nenhum outro cliente durante a sessão do cliente. Cada nova sessão é
atribuída a um processo de servidor dedicado.

Arquitetura de Servidor Compartilhado

O banco de dados usa um pool de processos de servidor compartilhado para várias sessões. Um
processo cliente se comunica com um dispatcher, que é um processo que permite que muitos
clientes se conectem à mesma instância de banco de dados sem a necessidade de um processo
servidor dedicado para cada cliente.

        Receita Federal (Analista Tributário) Fluência em Dados                                22
        www.estrategiaconcursos.com.br                                                         66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                            POSTGRESQL
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

PostgreSQL é um Sistema de Gerenciamento de Banco de Dados Objeto-Relacional (SGBDOR)
baseado em POSTGRES, que foi desenvolvido no Departamento de Ciência da Computação da
Universidade da Califórnia em Berkeley. E o que é o POSTGRES? Ele foi pioneiro em muitos
conceitos que só se tornaram disponíveis em alguns sistemas de gerenciamento de banco de dados
comerciais muito mais tarde. O PostgreSQL é um descendente do POSTGRES.

Ele suporta grande parte do Padrão SQL e oferece muitos recursos modernos tais como: consultas
complexas, chaves estrangeiras, triggers, views atualizáveis, integridade transacional e controle de
concorrência multiversão. Além disso, ele pode ser estendido pelo usuário de várias maneiras, por
exemplo, adicionando novos tipos de dados, funções, operadores, funções agregadas, métodos de
indexação e linguagens procedurais.

E por causa de sua licença (PostgreSQL License), ele pode ser usado, modificado e distribuído por
qualquer pessoa gratuitamente para qualquer finalidade – seja privada, comercial ou acadêmica.


Arquitetura do PostgreSQL
                                                                                       INCIDÊNCIA EM PROVA: baixa

O PostgreSQL utiliza um modelo cliente/servidor. Uma sessão do PostgreSQL consiste nos
seguintes processos cooperativos (programas):

 A aplicação-servidora, processo que gerencia os arquivos do banco de dados, aceita conexões
  com o banco de dados de aplicações-clientes e executa ações de banco de dados em nome dos
  clientes. O programa do servidor de banco de dados é chamado postgres.

 A aplicação-cliente (front-end) do usuário que deseja executar operações de banco de dados.
  elas podem ser de naturezas diversas: um cliente pode ser uma ferramenta orientada a texto,
  uma aplicação gráfica, um servidor web que acessa o banco de dados para exibir páginas web
  ou uma ferramenta especializada de manutenção de banco de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                              23
        www.estrategiaconcursos.com.br                                                                       66

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

O servidor é responsável pelo gerenciamento do banco de dados, incluindo o armazenamento
de dados e execução de comandos do cliente. Ele é responsável por lidar com consultas, garantir
que os dados sejam armazenados corretamente e executar comandos do usuário. O cliente é
responsável por se comunicar com o servidor e enviar comandos para ele. Também é
responsável por exibir os resultados das consultas ao usuário.

A arquitetura cliente/servidor permite um sistema descentralizado onde vários clientes podem
acessar o mesmo banco de dados. Isso permite maior escalabilidade e flexibilidade no sistema e
facilita a manutenção do banco de dados, pois o servidor pode ser atualizado sem a necessidade de
desligar todo o sistema. Além disso, essa arquitetura torna o PostgreSQL mais seguro, pois o
servidor pode ser configurado para aceitar apenas determinados tipos de solicitações do cliente.

Como é típico de aplicações cliente/servidor, o cliente e o se
