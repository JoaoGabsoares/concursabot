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
arquivo_origem: Aula 15_Apostila.txt
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


2) Principais SGBDs - Resumo


3) Principais SGBDs - Questões Comentadas


4) Principais SGBDs - Lista de Questões

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                          113

                                                             


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
        www.estrategiaconcursos.com.br                                                             113

                                    


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
        www.estrategiaconcursos.com.br                                                                      113

                                    


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
        www.estrategiaconcursos.com.br                                                           113

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                                6
        www.estrategiaconcursos.com.br                                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Objetos de Esquema

Uma característica de um SGBDR é a independência do armazenamento de dados físicos das
estruturas de dados lógicos. O primeiro se refere à localização física dos dados no disco rígido,
enquanto o segundo se refere à forma como os dados são organizados, como tabelas e índices. As
estruturas de dados físicas e lógicas são completamente independentes umas das outras, o que
permite maior flexibilidade na criação e gerenciamento de dados.

No Oracle, um esquema de banco de dados é uma coleção de estruturas lógicas de dados ou objetos
de esquema. Trata-se de uma coleção de tabelas, visualizações, sequências, procedimentos
armazenados, funções, pacotes e outros objetos. Um esquema pertence a um usuário do banco
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


        Receita Federal (Analista Tributário) Fluência em Dados                                7
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

e colunas. Uma coluna identifica um atributo da entidade descrita pela tabela, enquanto uma
linha identifica uma instância da entidade.

Por exemplo, podemos definir dois atributos para a entidade de funcionários: uma coluna para
armazenar um identificador e uma coluna para armazenar o nome do funcionário. Logo, uma linha
identifica um funcionário específico. Você pode opcionalmente especificar uma regra, chamada
de restrição de integridade, para uma coluna. Um exemplo é uma restrição de integridade NOT
NULL. Essa restrição força a coluna a conter um valor em cada linha, logo ela jamais pode estar vazia.


Índices

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

        Receita Federal (Analista Tributário) Fluência em Dados                                     8
        www.estrategiaconcursos.com.br                                                             113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

conhecidas como as tabelas base. Como tabelas, os dados de uma view podem ser consultados,
atualizados, inseridos e excluídos, porém com algumas restrições.

Todas as operações executadas em uma view afetam as tabelas base da view correspondente. Uma
das principais vantagens das views é que elas fornecem um nível adicional de segurança para a
tabela, restringindo o acesso a um conjunto predeterminado de linhas e colunas. Assim,
usuários não conseguem acessar dados não autorizados. Eles também escondem a complexidade
de dados e armazenam consultas complexas.

Clusters

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

        Receita Federal (Analista Tributário) Fluência em Dados                                 9
        www.estrategiaconcursos.com.br                                                         113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Tipos de Dados

Cada valor manipulado pelo Oracle possui um tipo de dado. O tipo de dados de um valor associa
um conjunto fixo de propriedades ao valor. Essas propriedades fazem com que o Oracle trate os
valores de um tipo de dados de maneira diferente dos valores de outro. Por exemplo, você pode
adicionar valores do tipo de dados NUMBER, mas não valores do tipo de dados RAW. Ao criar uma
tabela ou cluster, você deve especificar um tipo de dados para cada uma de suas colunas.

Ao criar um procedimento ou função armazenada, você deve especificar um tipo de dados para
cada um de seus argumentos. Esses tipos de dados definem o domínio de valores que cada coluna
pode conter ou cada argumento pode ter. Por exemplo, as colunas DATE não podem aceitar o valor
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

        Receita Federal (Analista Tributário) Fluência em Dados                                            10
        www.estrategiaconcursos.com.br                                                                     113

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

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

      Receita Federal (Analista Tributário) Fluência em Dados                                               11
      www.estrategiaconcursos.com.br                                                                        113

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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
          tarefas administrativas do dia a dia, a Oracle recomenda enfaticamente a criação de contas de
   SYSTEM usuários nomeados para administrar o banco de dados para permitir o monitoramento da atividade
          do banco de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                            12
        www.estrategiaconcursos.com.br                                                                     113

                                    


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

Como assim? O que seria a lógica da aplicação, Diego? A lógica de uma aplicação é o conjunto de
regras e procedimentos que regem a execução dos processos, desde a entrada de dados até a
saída de resultados. É responsável por determinar como os dados serão processados e quais ações

1
  Padrão ANSI (American National Standards Institute) é um conjunto de normas técnicas e padrões desenvolvidos para ajudar a garantir que os
produtos, serviços e processos sejam padronizados. Esses padrões são amplamente utilizados na indústria de computação e software, permitindo
que os fabricantes de hardware e software desenvolvam produtos que sejam compatíveis e interoperáveis entre diferentes sistemas.

          Receita Federal (Analista Tributário) Fluência em Dados                                                                       13
          www.estrategiaconcursos.com.br                                                                                                113

                                            


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

serão executadas e também pela estruturação dos dados, permitindo que eles sejam armazenados,
recuperados e utilizados de maneira eficiente.

Em geral, utilizamos linguagens específicas para criar as regras da lógica da aplicação. No entanto,
isso também pode ser feito em PL/SQL – já que ele é uma linguagem procedural. Aliás, um
procedimento ou função PL/SQL é um objeto de esquema que consiste em um conjunto de
instruções SQL, agrupadas, armazenadas no banco de dados e executadas como uma unidade para
resolver um problema específico ou executar um conjunto de tarefas relacionadas.

        Receita Federal (Analista Tributário) Fluência em Dados                                  14
        www.estrategiaconcursos.com.br                                                           113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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


        Receita Federal (Analista Tributário) Fluência em Dados                                15
        www.estrategiaconcursos.com.br                                                         113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

        Receita Federal (Analista Tributário) Fluência em Dados                               16
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

        Receita Federal (Analista Tributário) Fluência em Dados                                            17
        www.estrategiaconcursos.com.br                                                                     113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Estruturas de Armazenamento de Bancos de Dados

Uma tarefa essencial de um banco de dados relacional é o armazenamento de dados. O
armazenamento lógico é composto, dentre outros, por Schema, Tablespaces, Segment, Extent,
Data Blocks e Indexes; já o armazenamento físico é composto, dentre outros, por Data File, Control
File e Online Redo Log. A imagem seguinte mostra uma representação dos principais objetos e como
eles se relacionam. Vamos interpretá-la:

        Receita Federal (Analista Tributário) Fluência em Dados                                18
        www.estrategiaconcursos.com.br                                                         113

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

    Dados do Oracle são armazenados em TABLESPACES.
    Um TABLESPACE pode pertencer a somente um DATABASE.
    Cada TABLESPACE consiste em um ou mais DATAFILES.
    Um TABLESPACE pode consistir em um ou mais SEGMENTS.
    DATAFILES são a implementação física de TABLESPACES.
    Cada DATAFILE pertence a um único TABLESPACE.
    DATAFILES são formados por vários O.S. BLOCKS (menor unidade manipulável pelo Oracle).
    Um BLOCK não pertence a mais de um EXTENT ou DATAFILE.

Estruturas de Armazenamento Físico

As estruturas físicas do banco de dados são os arquivos que armazenam os dados. Quando você
executa uma instrução CREATE DATABASE, os seguintes arquivos são criados:

          Receita Federal (Analista Tributário) Fluência em Dados                         19
          www.estrategiaconcursos.com.br                                                  113

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Através dos arquivos de log de redo online pode-se obter informações sobre os dados alterados.
Eles são fundamentais nas operações de recovery e recomenda-se manter cópias múltiplas destes
arquivos de preferência em discos diferentes.

Muitos outros arquivos são importantes para o funcionamento de um servidor de banco de dados
Oracle – isso inclui arquivos de parâmetros e arquivos de rede. Arquivos de backup e arquivos de
redo log arquivados são arquivos offline importantes para backup e recuperação.

Estruturas de Armazenamento Lógico

As estruturas de armazenamento lógico permitem que o Oracle tenha um controle refinado do uso
do espaço em disco. Vejamos em sequência hierárquica de armazenamento:

        Receita Federal (Analista Tributário) Fluência em Dados                              20
        www.estrategiaconcursos.com.br                                                       113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

Quaisquer objetos de esquema atribuídos a esse espaço de tabela são localizados no local de
armazenamento especificado. Tablespaces também fornecem uma unidade de backup e
recuperação. Os recursos de backup e recuperação do Oracle permitem que você faça backup ou
recupere no nível do tablespace. O Oracle já vem com alguns tablespaces padrão que veremos na
tabela seguinte:

  Tablespaces                                                DESCRIÇÃO
                Este tablespace contém os esquemas de amostra incluídos no Oracle. Os esquemas de exemplo
                fornecem uma plataforma comum para exemplos. A documentação e os materiais educacionais da
                Oracle contêm exemplos baseados nos esquemas de exemplo.
     EXAMPLE


             Este tablespace é criado automaticamente na criação do banco de dados. O Oracle o utiliza para
      SYSTEM gerenciar o banco de dados. Ele contém o dicionário de dados, que é o conjunto central de tabelas
             e views usadas como referência somente leitura para um banco de dados específico. Ele também
             contém várias tabelas e views que contêm informações administrativas sobre o banco de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                                             21
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                Todos eles estão contidos no esquema SYS e podem ser acessados apenas pelo usuário SYS ou
                outros usuários administrativos com o privilégio necessário.
                Este é um tablespace auxiliar para o SYSTEM. Ele contém dados para alguns componentes e
                produtos, reduzindo a carga no SYSTEM. Todo banco de dados que usa o Oracle 10g release 1 (10.1)
                ou posterior deve ter um tablespace SYSAUX.
      SYSAUX


              Este tablespace armazena dados temporários gerados durante o processamento de instruções
              SQL. Por exemplo, ele seria usado para classificação de consultas. Cada banco de dados deve ter
              um tablespace temporário que é atribuído aos usuários como seu tablespace temporário. No banco
         TEMP
              de dados pré-configurado, o TEMP é especificado como o tablespace temporário padrão. Se
              nenhum tablespace temporário for especificado quando uma conta de usuário for criada, o Oracle
              atribuirá esse tablespace ao usuário.
              Este é o tablespace de undo usado pelo banco de dados para armazenar informações de undo. Todo
              banco de dados deve ter um tablespace de undo.
    UNDOTBS1


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

Processos de Banco de Dados Oracle

Processo (também chamado de job, task ou thread) é um mecanismo do sistema operacional que
pode executar uma série de etapas. Uma instância de banco de dados possui os tipos de processos:

  Tipos de processos                                              DESCRIÇÃO

        Receita Federal (Analista Tributário) Fluência em Dados                                               22
        www.estrategiaconcursos.com.br                                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                       Esses processos são criados e mantidos para executar o código de software de uma aplicação
       Processos de ou de uma ferramenta Oracle. A maioria dos ambientes possui máquinas separados para
            cliente processos cliente.

       Processos de Esses processos consolidam funções que, de outra forma, seriam tratadas por vários
                    programas de banco de dados Oracle em execução para cada processo cliente. Os processos
     segundo plano
                    em segundo plano executam E/S (Entrada/Saída) de forma assíncrona e monitoram outros
      (BAGKGROUND)  processos para fornecer maior paralelismo para melhor desempenho e confiabilidade.
                    Esses processos se comunicam com os processos do cliente e interagem com o Oracle para
       Processos do atender às solicitações.
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

 Program Global Area (PGA): trata-se de uma região de memória que contém informações de
  controle para um servidor ou processo em segundo plano. O acesso ao PGA é exclusivo do
  processo. Cada processo do servidor e processo em segundo plano tem seu próprio PGA.

        Receita Federal (Analista Tributário) Fluência em Dados                                                23
        www.estrategiaconcursos.com.br                                                                         113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

Um servidor de aplicação contém grande parte da lógica da aplicação, fornece acesso aos dados
para o cliente e executa algum processamento de consulta. Dessa forma, a carga no banco de dados
é reduzida. O servidor de aplicação pode servir como uma interface entre clientes e vários bancos
de dados e pode fornecer um nível adicional de segurança.

        Receita Federal (Analista Tributário) Fluência em Dados                               24
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

        Receita Federal (Analista Tributário) Fluência em Dados                                25
        www.estrategiaconcursos.com.br                                                         113

                                    


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

        Receita Federal (Analista Tributário) Fluência em Dados                                              26
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

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

        Receita Federal (Analista Tributário) Fluência em Dados                                              27
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Como é típico de aplicações cliente/servidor, o cliente e o servidor podem estar em hosts
diferentes. Nesse caso, eles se comunicam por meio de uma conexão de rede TCP/IP. Você deve
ter isso em mente, porque os arquivos que podem ser acessados em uma máquina cliente podem
não estar acessíveis (ou podem ser acessados apenas usando um nome de arquivo diferente) na
máquina servidora de banco de dados.

Por fim, mais duas coisas: em primeiro lugar, o PostgreSQL tem um terminal de linha de comando
que pode ser utilizado para fazer consultas interativamente, enviá-las para o PostgreSQL e ver os
resultados da consulta – o nome desse terminal é psql; em segundo lugar, o PostgreSQL possui
uma linguagem procedural que permite manipular dados como uma extensão do SQL – o nome
dessa linguagem procedural é PL/pgSQL.

O PostgreSQL é um sistema de gerenciamento de banco de dados relacional objeto-relacional,
ou seja, é um sistema de gerenciamento de dados armazenados em relações que também
implementa conceitos relacionados a objetos. A relação é essencialmente um termo matemático
para tabela. A noção de armazenamento de dados em tabelas é tão comum hoje que pode parecer
inerentemente óbvia, mas há várias outras maneiras de organizar bancos de dados.

Arquivos e diretórios em sistemas operacionais do tipo Unix formam um exemplo de banco de
dados hierárquico. Um desenvolvimento mais moderno é o banco de dados orientado a objetos.
Cada tabela é uma coleção nomeada de linhas. Cada linha de uma determinada tabela tem o
mesmo conjunto de colunas nomeadas e cada coluna é de um tipo de dados específico (Ex: inteiro,
booleano, etc).

Considerando que as colunas têm uma ordem fixa em cada linha, é importante lembrar que o SQL
não garante a ordem das linhas dentro da tabela de forma alguma (embora possam ser
explicitamente classificadas para exibição). As tabelas são agrupadas em bancos de dados e uma
coleção de bancos de dados gerenciados por uma única instância do servidor PostgreSQL constitui
um cluster de banco de dados.

        Receita Federal (Analista Tributário) Fluência em Dados                               28
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Tipos de Dados
                                                                                        INCIDÊNCIA EM PROVA: baixa

Para armazenar dados no banco de dados, precisamos informar previamente qual é o seu tipo. É
um texto? Um número? Dinheiro? Para isso temos os tipos de dados suportados:

            Tipos de dados                                         DESCRIÇÃO
            bigint           Inteiro de oito bytes com sinal.
         bigserial           Inteiro de oito bytes autoincrementável.
               bit           Cadeia de bits de tamanho fixo.
       bit varying           Cadeia de bits de tamanho variável.
           boolean           Booleano lógico (true/false).
               box           Caixa rectangular em um plano.
             bytea           Dados binários (Byte Array).
         character           Cadeia de caracteres de tamanho fixo.
 character varying           Cadeia de caracteres de tamanho variável (também chamado de varchar).
              cidr           Endereço de rede IPv4 ou IPv6.
            circle           Círculo em um plano.
              date           Data de calendário (ano, mês, dia).
  double precision           Número de ponto flutuante de precisão dupla (8 bytes).
              inet           Endereço de host IPv4 ou IPv6.
           integer           Inteiro de quatro bytes com sinal.
          interval           Intervalo de tempo.
              json           Dado textual do tipo JSON.
             jsonb           Dado binário do tipo JSON.
              line           Linha infinita em um plano.
              lseg           Segmento infinito em um plano.
           macaddr           Endereço MAC (Media Access Control).
          macaddr8           Endereço MAC (Media Access Control) em formato EUI-64.
             money           Montante de dinheiro com 8 bytes.
           numeric           Número exato de precisão selecionável.
              path           Caminho geométrico em um plano.
            pg_lsn           Número de sequência do log do PostgreSQL.
       pg_snapshot           ID do Snapshot de transação em nível de usuário.
             point           Ponto geométrico em um plano.
           polygon           Caminho geométrico fechado em um plano.
              real           Número de ponto flutuante com precisão simples (4 bytes).
          smallint           Inteiro de dois bytes com sinal.
       smallserial           Inteiro de dois bytes autoincrementável.
            serial           Inteiro de quatro bytes autoincrementável.
              text           Cadeia de caracteres de tamanho variável.
              time           Hora do dia (desconsiderando fuso horário).

        Receita Federal (Analista Tributário) Fluência em Dados                                               29
        www.estrategiaconcursos.com.br                                                                       113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

             timestamp       Data e hora (desconsiderando fuso horário).
               tsquery       Consulta de pesquisa de texto.
              tsvector       Documento de pesquisa de texto.
                  uuid       Identificador único universal.
                   xml       Dados em XML.


Note que são muitos tipos de dados diferentes suportados pelo PostgreSQL, mas eu destaquei em
amarelo aqueles mais importantes. Há outros tipos que são definidos por padrão pelo próprio SQL:
bigint, bit, bit varying, boolean, char, character varying, character, varchar, date,
double precision, integer, interval, numeric, decimal, real, smallint, time (com ou sem
fuso horário), timestamp (com ou sem fuso horário), xml.

E qual é a diferença entre char(n), varchar(n) e text? Ambos char(n) e varchar(n) podem
armazenar até n caracteres. Se você tentar armazenar uma string com mais de n caracteres, o
PostgreSQL emitirá um erro. No entanto, uma exceção é que, se os caracteres excessivos forem
todos espaços em branco, o PostgreSQL truncará os espaços até o comprimento máximo (n) e
armazenará os caracteres.

Se uma string for convertida explicitamente para um char(n) ou varchar(n), o PostgreSQL
truncará a string para n caracteres antes de inseri-la na tabela. O tipo de dados text pode
armazenar uma string com comprimento ilimitado. Se você não especificar o n inteiro para o tipo
de dados varchar, ele se comportará como o tipo de dados text. O desempenho do varchar (sem
o tamanho n) e text são os mesmos.

A única vantagem de especificar o especificador de comprimento para o varchar é que o
PostgreSQL emitirá um erro se você tentar inserir uma string com mais de n caracteres na coluna
varchar(n). Ao contrário de varchar, o character ou char sem o especificador de comprimento
(n) é o mesmo que character(1) ou char(1). Diferentemente de outros sistemas de banco de
dados, no PostgreSQL não há diferença de desempenho entre os três tipos de caracteres.

Na maioria dos casos, você deve usar text ou varchar. E você poderia usar o varchar(n) quando
deseja que o PostgreSQL verifique o comprimento.

                Tipos de caracteres                                 descrição
   CHARACTER VARYING(N), VARCHAR(N) Comprimento variável com limite de comprimento.
              CHARACTER(N), CHAR(N) Comprimento fixo com espaço completado.
                      TEXT, VARCHAR Comprimento ilimitado variável.

Por fim, os tipos serial e smallserial não são tipos verdadeiros – são meramente uma
conveniência de notação para criar colunas de identificador exclusivo (semelhante ao tipo
AUTO_INCREMENT suportada por alguns outros bancos de dados).

        Receita Federal (Analista Tributário) Fluência em Dados                              30
        www.estrategiaconcursos.com.br                                                       113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Aplicações de Cliente
                                                                                            INCIDÊNCIA EM PROVA: baixa

Vejamos as principais aplicações de clientes e utilitárias do PostgreSQL. Nem todos esses
comandos são de utilidade geral; alguns podem exigir privilégios especiais. Vejamos:

    APLICAÇÕES DE CLIENTE                                         DESCRIÇÃO
                            Agrupa um banco de dados PostgreSQL.
             clusterdb

                            Cria um novo banco de dados PostgreSQL.
             createdb

                            Define uma nova conta de usuário do PostgreSQL.
            createuser

                            Remove um banco de dados PostgreSQL.
                dropdb

                            Remove uma conta de usuário do PostgreSQL.
             dropuser

                            Pré-processador SQL C incorporado.
                   ecpg

                            Verifica se há corrupção em um ou mais bancos de dados PostgreSQL.
            pg_amcheck

                            Faça um backup básico de um cluster PostgreSQL.
     pg_basebackup

                            Executa um teste de benchmark no PostgreSQL.
               pgbench

                            Recupera informações sobre a versão instalada do PostgreSQL.
             pg_config

                            Extrai um banco de dados em um arquivo de script ou outro arquivo compactado.
               pg_dump

                            Extrai um cluster de banco de dados PostgreSQL em um arquivo de script.
            pg_dumpall

                            Verifica o status da conexão de um servidor PostgreSQL.
            pg_isready

                            Transmite logs write-ahead de um servidor PostgreSQL.
     pg_receivewal

                            Controla os fluxos de decodificação lógica do PostgreSQL.
    pg_recvlogical

                            Restaura banco de dados PostgreSQL de um arquivo compactado criado por pg_dump.
            pg_restore

                            Verifica a integridade de um backup básico de um cluster PostgreSQL.
  pg_verifybackup

                            Terminal interativo do PostgreSQL.
                   psql

                            Reindexa um banco de dados PostgreSQL.
             reindexdb

             vacuumdb Coleta de lixo e analisa um banco de dados PostgreSQL.


        Receita Federal (Analista Tributário) Fluência em Dados                                                   31
        www.estrategiaconcursos.com.br                                                                           113

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

      Receita Federal (Analista Tributário) Fluência em Dados                        32
      www.estrategiaconcursos.com.br                                                 113

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Aplicações de Servidor
                                                                                        INCIDÊNCIA EM PROVA: baixa

Esta parte contém informações de referência para aplicações de servidor PostgreSQL e utilitários
de suporte. Esses comandos só podem ser executados de maneira útil no host em que o servidor de
banco de dados reside.

   APLICAÇÕES DE SERVIDOR                                         DESCRIÇÃO
                            Cria um novo cluster de banco de dados PostgreSQL.
                 initdb

                            Limpa arquivos PostgreSQL WAL.
 pg_archivecleanup

                    Ativa, desativa ou verifica somas de verificação de dados em um cluster de banco de
       pg_checksums
                    dados PostgreSQL.
                    Exibe informações de controle de um cluster de banco de dados PostgreSQL pg_ctl —
     pg_controldata
                    inicializa, inicia, para ou controla um servidor PostgreSQL.
                    Redefinir o log write-ahead e outras informações de controle de um cluster de banco
        pg_resetwal
                    de dados PostgreSQL.
                    Sincroniza um diretório de dados do PostgreSQL com outro diretório de dados que foi
          pg_rewind
                    bifurcado a partir dele.
                    Determina wal_sync_method mais rápido para PostgreSQL.
      pg_test_fsync

                            Mede a sobrecarga de tempo.
     pg_test_timing

                            Atualiza uma instância do servidor PostgreSQL.
            pg_upgrade

                       Exibe uma renderização legível por humanos do Write-Ahead Log (WAL) de um cluster
            pg_waldump
                       de banco de dados PostgreSQL.
                       Processo que se conecta ao servidor de banco de dados PostgreSQL, responsável por
              postgres gerenciar dados armazenados no banco de dados, atender às solicitações dos usuários
                       e realizar transações.
                       Processo responsável por gerenciar a conexão entre o servidor de banco de dados e as
            postmaster
                       aplicações clientes, bem como autenticar usuários e prover controle de acesso.

        Receita Federal (Analista Tributário) Fluência em Dados                                               33
        www.estrategiaconcursos.com.br                                                                       113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Tablespaces
                                                                                       INCIDÊNCIA EM PROVA: baixa

Tablespaces no PostgreSQL permitem que administradores de banco de dados definam
localizações no sistema de arquivos onde os arquivos que representam objetos de banco de
dados podem ser armazenados. Depois de criado, um tablespace pode ser referido pelo nome ao
criar objetos de banco de dados. Usando tablespaces, um administrador pode controlar o layout do
disco de uma instalação do PostgreSQL.

Isso é útil de pelo menos duas maneiras: primeiro, se a partição ou volume no qual o cluster foi
inicializado ficar sem espaço e não puder ser estendida, um tablespace poderá ser criado em uma
partição diferente e usado até que o sistema possa ser reconfigurado; em segundo lugar, os
tablespaces permitem que um administrador use o conhecimento do padrão de uso dos objetos
do banco de dados para otimizar o desempenho.

Embora localizados fora do diretório de dados principal do PostgreSQL, os tablespaces são parte
integrante do cluster de banco de dados e não podem ser tratados como uma coleção autônoma
de arquivos de dados. Eles dependem dos metadados contidos no diretório de dados principal
e, portanto, não podem ser anexados a um cluster de banco de dados diferente ou fazer backup
individualmente.

Da mesma forma, se você perder um tablespace (exclusão de arquivo, falha de disco, etc), o
cluster de banco de dados poderá ficar ilegível ou incapaz de iniciar. Colocar um tablespace em
um sistema de arquivos temporário como um disco RAM arrisca a confiabilidade de todo o cluster.
Tablespaces são, em resumo, a maneira de informar ao servidor Postgres onde colocar os arquivos
físicos para objetos SQL.

Tablespaces são criadas por meio do comando CREATE TABLESPACE junto da cláusula LOCATION.
Por exemplo:

             CREATE TABLESPACE fastspace LOCATION '/ssd1/postgresql/data'

O LOCATION deve ser um diretório vazio existente que pertença ao usuário do sistema operacional
PostgreSQL. Todos os objetos subsequentemente criados dentro do tablespace serão
armazenados em arquivos sob este diretório. O local não deve estar em armazenamento removível
ou transitório, pois o cluster pode falhar ao funcionar se o espaço de tabela estiver ausente ou
perdido. Fechado?

        Receita Federal (Analista Tributário) Fluência em Dados                                              34
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                               MONGODB
Conceitos Básicos
                                                                                       INCIDÊNCIA EM PROVA: baixa

Imagine um mundo onde usar um banco de dados é tão simples que você logo esquece que está
usando. Imagine um mundo onde a velocidade e a escalabilidade simplesmente funcionam e não
há necessidade de configuração complicada. Imagine ser capaz de se concentrar apenas na tarefa
em mãos, fazer as coisas e, só para variar, sair do trabalho no horário. Isso pode parecer um pouco
fantasioso, mas o MongoDB promete ajudá-lo a realizar todas essas coisas (e muito mais).

MongoDB (derivado da palavra Humongous, que significa enorme ou gigantesco) é um tipo
relativamente novo de banco de dados que não tem conceito de tabelas, esquemas, SQL ou linhas.
Ele não possui transações, propriedades ACID, joins, chaves estrangeiras ou muitos outros recursos.
Em suma, ele é um banco de dados muito diferente do que você está acostumado, especialmente
se você já usou um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) no passado.

O MongoDB é um SGBD NoSQL de código aberto que usa um modelo de dados orientado a
documentos. O MongoDB é escrito em C++ e armazena dados em documentos semelhantes a
JSON com esquemas dinâmicos, permitindo que seja mais flexível e escalável do que um banco de


        Receita Federal (Analista Tributário) Fluência em Dados                                              35
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

dados relacional tradicional. Ele foi projetado para lidar com grandes quantidades de dados
rapidamente, tornando-o uma escolha popular para aplicações corporativas.

        Receita Federal (Analista Tributário) Fluência em Dados                         36
        www.estrategiaconcursos.com.br                                                  113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Filosofia do MongoDB
                                                                                       INCIDÊNCIA EM PROVA: baixa

O MongoDB possui um conjunto de filosofias de design que ajudam a orientar seu desenvolvimento.
Nesta seção, revisaremos algumas dessas filosofias desse banco de dados:

Ferramentas

A mais importante das filosofias que sustentam o MongoDB é a noção de que uma ferramenta
não serve para todos os contextos. Por muitos anos, bancos de dados tradicionais foram usados
para armazenar conteúdo de todos os tipos. Não importava se os dados eram adequados para o
modelo relacional (que é usado em SGBDRs como MySQL, PostgresSQL, SQLite, Oracle, SQL
Server, etc); os dados foram colocados lá, de qualquer maneira.

A equipe do MongoDB decidiu que não criaria outro banco de dados que tenta fazer tudo para
todos. Em vez disso, a equipe queria criar um banco de dados que funcionasse com documentos em
vez de linhas, fosse extremamente rápido, massivamente escalável e fácil de usar. Para fazer isso,
a equipe teve que deixar alguns recursos para trás, o que significa que o MongoDB não é um
candidato ideal para determinadas situações.

Por exemplo: sua falta de suporte a transações significa que você não gostaria de usar o MongoDB
para escrever uma aplicação de contabilidade. Por outro lado, ele pode ser perfeito para
aplicações como o armazenamento de dados complexos. Isso não é um problema, porque não há
razão para que você não possa usar um SGBDR tradicional para os componentes de contabilidade
e o MongoDB para o armazenamento de documentos.

Assim que estiver confortável com a ideia de que o MongoDB pode não resolver todos os seus
problemas, você descobrirá que há certos problemas que o MongoDB é perfeito para resolver,
como análise em tempo real e estruturas de dados complexas. Outro conceito-chave por trás do
design do MongoDB: sempre deve haver mais de uma cópia do banco de dados. Se um único banco
de dados falhar, ele pode simplesmente ser restaurado a partir dos outros servidores.

Como o MongoDB pretende ser o mais rápido possível, são necessários alguns atalhos que
dificultam a recuperação de uma falha. Os desenvolvedores acreditam que as falhas mais graves
provavelmente removerão um computador inteiro do serviço de qualquer maneira; isso significa
que, mesmo que o banco de dados fosse perfeitamente restaurado, ele ainda não seria utilizável.
Lembre-se: o MongoDB não tenta ser tudo para todos.

Então agora você sabe de onde vem o MongoDB. Sabe que ele não está tentando ser o melhor em
tudo e reconhece prontamente que não é para todos. No entanto, para aqueles que optam por usá-
lo, o MongoDB fornece um rico banco de dados orientado a documentos otimizado para velocidade
e escalabilidade. Ele também pode ser executado em quase qualquer lugar que você queira. O site
do MongoDB inclui downloads para Linux, Mac, Windows e Solaris.


        Receita Federal (Analista Tributário) Fluência em Dados                                              37
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Com o MongoDB, você não precisa se preocupar em espremer seus dados em uma tabela - basta
juntar os dados e depois passá-los para o MongoDB para manipulação.

Suporte a Transações

Outra importante decisão de design dos desenvolvedores do MongoDB: o banco de dados não
inclui semântica transacional. Esta é uma compensação baseada no objetivo do MongoDB de ser
simples, rápido e escalável. Depois de deixar esses recursos pesados de lado, fica muito mais fácil
escalar horizontalmente. Normalmente, com um SGBDR tradicional, você melhora o desempenho
comprando uma máquina maior e mais potente.

Isso é escalar verticalmente, mas você só pode levar isso até certo ponto. A escala horizontal é
onde, em vez de ter uma grande máquina, você tem muitas máquinas pequenas menos
potentes. Historicamente, bancos de dados sempre foram um problema devido às limitações
internas de design. Você pode pensar que esse suporte ausente constitui um problema, mas para o
nosso contexto ele não é!

Como acontece com a maioria das coisas ao desenvolver soluções, usar o MongoDB será uma
questão de escolha pessoal e se as compensações se encaixam no seu projeto.

JSON

JSON (JavaScript Object Notation) é um formato leve de troca de dados. Ele é um formato legível
por humanos baseado em texto para representar estruturas de dados e objetos simples. É
frequentemente utilizado para trocar dados entre um servidor e uma aplicação web, como uma
alternativa ao XML. No entanto, ele é mais do que uma ótima maneira de trocar dados; também é
uma boa maneira de armazenar dados.

Um SGBDR é altamente estruturado, com vários arquivos (tabelas) que armazenam as partes
individuais. O MongoDB, por outro lado, armazena tudo junto em um único documento. O
MongoDB é como o JSON nesse aspecto, e esse modelo fornece uma maneira rica e expressiva de
armazenar dados. Além disso, o JSON descreve todo o conteúdo de um determinado documento,
portanto, não há necessidade de especificar a estrutura do documento com antecedência.

O JSON é efetivamente sem esquema porque os documentos podem ser atualizados
individualmente ou alterados independentemente de quaisquer outros documentos. Como um
bônus adicional, o JSON também oferece excelente desempenho, mantendo todos os dados
relacionados em um só lugar. Na verdade, o MongoDB não usa JSON para armazenar os dados; em
vez disso, ele usa um formato de dados aberto desenvolvido pela equipe do MongoDB: BSON!

Na maioria das vezes, usar BSON (Binary JSON) em vez de JSON não altera a forma como você
trabalhará com seus dados. BSON faz MongoDB ainda mais rápido, tornando muito mais fácil


        Receita Federal (Analista Tributário) Fluência em Dados                                 38
        www.estrategiaconcursos.com.br                                                          113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

para um computador processar e pesquisar documentos. O BSON também adiciona alguns
recursos que não estão disponíveis no JSON padrão, incluindo a capacidade de adicionar tipos para
lidar com dados binários.

O JSON permite que estruturas de dados complexas sejam representadas em um formato de texto
simples e legível por humanos que geralmente é considerado muito mais fácil de ler e entender do
que o XML. Assim como o XML, o JSON foi concebido como uma forma de trocar dados entre
um cliente web (como um navegador) e aplicações web. Sua simplicidade o tornou o formato de
troca de dados para a maioria dos desenvolvedores.

Você pode se perguntar o que significa aqui estruturas de dados complexas. Historicamente, os
dados eram trocados usando o formato de valores separados por vírgula (CSV) (na verdade, essa
abordagem continua muito comum hoje). CSV é um formato de texto simples que separa as
linhas com uma nova linha e os campos com uma vírgula. Por exemplo, um arquivo CSV pode ter
esta aparência:

Diego, Carvalho, (61)99999-9999
Renato, Costa, (21)99999-8888

Um ser humano pode olhar para esta informação e ver rapidamente qual informação está sendo
comunicada, mas um CSV também pode vir com um cabeçalho para facilitar:

Nome, Sobrenome, NrTelefone
Diego, Carvalho, (61)99999-9999
Renato, Costa, (21)99999-8888

Ok, isso é um pouco melhor. Mas agora suponha que você tenha mais de um número de telefone.
Você pode adicionar outro campo para um número de telefone do escritório, mas enfrentará um
novo conjunto de problemas se desejar vários números de telefone do escritório. E você enfrenta
ainda outro conjunto de problemas se também quiser incorporar vários endereços de e-mail ou algo
parecido.

A maioria das pessoas tem mais de um e-mail, e esses endereços geralmente não podem ser
claramente definidos como casa ou trabalho. De repente, o CSV começa a mostrar suas limitações.
Os arquivos CSV são bons apenas para armazenar dados simples e sem valores repetidos. Da
mesma forma, não é incomum que vários arquivos CSV sejam fornecidos, cada um com
informações separadas.

Esses arquivos são combinados (geralmente em um SGBDR) para criar um cenário completo. Por
exemplo, uma grande empresa de varejo pode receber arquivos CSV de cada uma de suas lojas ao
final de cada dia. Esses arquivos devem ser combinados antes que a empresa possa ver seu
desempenho em um determinado dia. Esse processo não é exatamente direto e certamente
aumenta as chances de erro à medida que o número de arquivos necessários aumenta.

        Receita Federal (Analista Tributário) Fluência em Dados                               39
        www.estrategiaconcursos.com.br                                                        113

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

XML (eXtented Markup Language) resolve esse problema em grande parte, mas usar XML para a
maioria das coisas é um pouco como usar uma marreta para quebrar um amendoim: funciona, mas
parece um exagero. A razão para isso: XML é altamente extensível. Em vez de definir um formato
de dados específico, o XML define como você define um formato de dados. Isso pode ser útil quando
você precisa trocar dados complexos e altamente estruturados.

No entanto, para troca de dados simples, isso geralmente resulta em muito trabalho. JSON fornece
um meio termo. Ao contrário do CSV, ele pode armazenar conteúdo estruturado; mas, ao contrário
do XML, o JSON torna-o fácil de entender e simples de usar. Vamos revisitar o exemplo anterior, no
entanto, desta vez você usará JSON em vez de CSV:

{
    "Nome": "Diego",
    "Sobrenome": "Carvalho",
    "NrTelefone": [
        "(61)99999-9999",
        "(61)98888-8888"
    ]
}

No exemplo anterior, cada objeto JSON (ou documento) contém todas as informações necessárias
para entendê-lo. Se você olhar para NrTelefone, verá que tem uma lista de números diferentes.
Esta lista pode ser tão grande quanto você quiser. Você também pode ser mais específico sobre o
tipo de número que está sendo registrado, como neste exemplo:

{
    "Nome": "Diego",
    "Sobrenome": "Carvalho",
    "NrTelefone": [
         {
              "Pessoal": "(61)99999-9999"
         },
         {
              "Profissional": "(61)98888-8888"
         }
    ]
}

O exemplo anterior melhora um pouco mais as coisas. Agora você pode ver claramente para que
serve cada número. JSON é extremamente expressivo e, embora seja bastante fácil escrever
JSON manualmente, geralmente é gerado automaticamente por software. Por exemplo,
Python inclui um módulo chamado simplejson que pega objetos Python existentes e os converte
automaticamente em JSON.

Como JSON é suportado e usado em muitas plataformas, é uma escolha ideal para troca de
dados. Quando você adiciona itens como a lista de números de telefone, na verdade está criando o


          Receita Federal (Analista Tributário) Fluência em Dados                              40
          www.estrategiaconcursos.com.br                                                       113

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

que é conhecido como documento incorporado. Isso acontece sempre que você adiciona conteúdo
complexo, como uma lista (ou array, para usar o termo preferido em JSON). De um modo geral,
também há uma distinção lógica.

Abordagem Não-Relacional

Melhorar o desempenho com um banco de dados relacional geralmente é simples: você compra um
servidor maior e mais rápido. E isso funciona muito bem até chegar ao ponto em que não há um
servidor maior disponível para compra. E agora, o que fazer? Nesse ponto, a única opção é utilizar
dois ou mais servidores. Isso pode parecer fácil, mas é um grande obstáculo para a maioria dos
bancos de dados.

Por exemplo: nem o MySQL nem o PostgresSQL podem executar um único banco de dados em dois
servidores, onde ambos os servidores podem ler e gravar dados (isso geralmente é chamado de
cluster ativo/ativo). E embora a Oracle possa fazer isso com sua impressionante arquitetura RAC
(Real Application Clusters), é uma solução caríssima — a implementação de uma solução baseada
em RAC requer vários servidores, armazenamento compartilhado e várias licenças de software.

Um problema clássico que você pode encontrar: um usuário pode consultar informações no
segundo servidor que acabaram de ser gravadas no primeiro servidor, mas essas informações ainda
não foram atualizadas no segundo servidor. Quando você considera todos esses problemas, fica
fácil entender por que a solução Oracle é tão cara — esses problemas são extremamente difíceis de
solucionar. O MongoDB resolve esse problema de uma maneira muito inteligente: evitando-o.

Lembre-se de que o MongoDB armazena dados em documentos BSON, logo os dados são
independentes. Embora documentos semelhantes sejam armazenados juntos, os documentos
individuais não são compostos de relacionamentos. Assim, tudo o que você precisa está em um só
lugar. Como as consultas no MongoDB procuram chaves e valores específicos em um documento,
essas informações podem ser facilmente distribuídas em quantos servidores você tiver disponível.

Cada servidor verifica o conteúdo que possui e retorna o resultado. Isso efetivamente permite
escalabilidade e desempenho quase lineares – e de forma barata! Reconhecidamente, o MongoDB
não oferece replicação mestre/mestre, onde dois servidores separados podem aceitar solicitações
de gravação. No entanto, ele possui sharding, que permite que os dados sejam divididos em várias
máquinas, com cada máquina responsável por atualizar diferentes partes do conjunto de dados.

Enquanto algumas soluções permitem dois bancos de dados mestres, o MongoDB pode escalar
para centenas de máquinas com a mesma facilidade com que pode ser executado em dois.

Execução

O MongoDB é escrito em C++, o que torna relativamente fácil portar e/ou executar a aplicação
praticamente em qualquer lugar. Atualmente, os binários podem ser baixados do site do


        Receita Federal (Analista Tributário) Fluência em Dados                                41
        www.estrategiaconcursos.com.br                                                         113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

MongoDB para Linux, Mac, Windows e Solaris. Você pode até baixar o código-fonte e criar seu
próprio MongoDB, embora seja recomendável usar os binários fornecidos sempre que possível.
Todos os binários estão disponíveis nas versões de 32 bits e 64 bits.

Os requisitos modestos do MongoDB permitem que ele seja executado em servidores de alta
potência, máquinas virtuais ou até mesmo em aplicações baseadas em nuvem. Mantendo as coisas
simples e focando na velocidade e eficiência, o MongoDB fornece desempenho sólido onde
quer que você escolha implantá-lo.

        Receita Federal (Analista Tributário) Fluência em Dados                          42
        www.estrategiaconcursos.com.br                                                   113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Modelagem de Dados
                                                                                       INCIDÊNCIA EM PROVA: baixa

O principal desafio na modelagem de dados é equilibrar as necessidades da aplicação, as
características de desempenho do mecanismo de banco de dados e os padrões de recuperação de
dados. Ao projetar modelos de dados, sempre considere o uso dos dados pela aplicação (ou seja,
consultas, atualizações e processamento dos dados), bem como a estrutura inerente dos
próprios dados.

Ao contrário dos bancos de dados SQL, onde você deve determinar e declarar o esquema de uma
tabela antes de inserir dados, as coleções do MongoDB, por padrão, não exigem que seus
documentos tenham o mesmo esquema. Em outras palavras, os documentos em uma única
coleção não precisam ter o mesmo conjunto de campos e o tipo de dados de um campo pode
diferir entre os documentos de uma coleção.

Para alterar a estrutura dos documentos em uma coleção, como adicionar novos campos, remover
campos existentes ou alterar os valores dos campos para um novo tipo, deve-se atualizar os
documentos para a nova estrutura. Essa flexibilidade facilita o mapeamento de documentos para
uma entidade/objeto. Cada documento pode corresponder aos campos de dados da entidade
representada, mesmo que o documento tenha uma variação de outros documentos na coleção.

A validação de esquema permite criar regras de validação para seus campos, como tipos de dados
permitidos e intervalos de valores. O MongoDB usa um modelo de esquema flexível, o que significa
que os documentos em uma coleção não precisam ter os mesmos campos ou tipos de dados por
padrão. Depois de estabelecer um esquema de aplicação, você pode usar a validação de esquema
para garantir que não haja alterações de esquema não intencionais ou tipos de dados impróprios.

Suas necessidades de validação de esquema dependem de como os usuários usam sua aplicação.
Quando sua aplicação está nos estágios iniciais de desenvolvimento, a validação do esquema pode
impor restrições inúteis porque você não sabe como deseja organizar seus dados. Especificamente,
os campos em suas coleções podem mudar com o tempo. A validação de esquema é mais útil para
uma aplicação estabelecida onde você tem uma boa noção de como organizar seus dados.

Na prática, porém, quando você cria uma nova coleção com validação de esquema, o MongoDB
verifica a validação durante atualizações e inserções nessa coleção. Quando você adiciona
validação a uma coleção não vazia existente, temos duas possibilidades: (1) documentos recém-
inseridos são verificados para validação; (2) documentos já existentes em sua coleção não são
verificados para validação até que sejam modificados.

O comportamento específico para documentos existentes dependerá do nível de validação
escolhido. Bacana?

        Receita Federal (Analista Tributário) Fluência em Dados                                              43
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Tables e Collections
                                                                                               INCIDÊNCIA EM PROVA: baixa

O MongoDB armazena registros de dados como documentos (especificamente documentos
BSON) que são reunidos em coleções. Um banco de dados armazena uma ou mais coleções de
documentos. Se um banco de dados não existir, o MongoDB criará o banco de dados quando você
armazenar os dados desse banco de dados pela primeira vez.

O MongoDB armazena documentos em coleções – coleções são análogas às tabelas em bancos de
dados relacionais. Se uma coleção não existir, ele criará a coleção quando você armazenar os dados
dessa coleção pela primeira vez. Por padrão, uma coleção não exige que seus documentos tenham
o mesmo esquema, i.e., documentos em uma única coleção não precisam ter o mesmo conjunto de
campos e o tipo de dados para um campo pode diferir entre os documentos de uma coleção.

Para alterar a estrutura dos documentos em uma coleção, como adicionar novos campos, remover
campos existentes ou alterar os valores dos campos para um novo digite, atualize os documentos
para a nova estrutura. As coleções recebem um imutável UUID. O UUID da coleção permanece o
mesmo em todos os membros de um conjunto de réplicas e fragmentos em um aglomerado
fragmentado. Apenas a título de curiosidade, podemos fazer a seguinte comparação:

                    SGBD RELACIONAL                                             SGBD MONGODB
                     Base de Dados                                        Base de Dados (Database)
                        Tabela                                              Coleção (Collection)
                         Linha                                             Documento (Document)
                         Índice                                                 Índice (Index)
                        Coluna                                                  Campo (Field)

        Receita Federal (Analista Tributário) Fluência em Dados                                                      44
        www.estrategiaconcursos.com.br                                                                              113

                                     


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

Documentos
                                                                                         INCIDÊNCIA EM PROVA: baixa

MongoDB armazena registros de dados como documentos BSON. BSON é uma representação
binária de documentos JSON, embora contenha mais tipos de dados que JSON.

Os documentos do MongoDB são compostos de pares de campo e valor e possuem a seguinte
estrutura:

{
     campo1: valor1,
     campo2: valor2,
     campo3: valor3,
     ...
     campoN: valorN
}

          Receita Federal (Analista Tributário) Fluência em Dados                                              45
          www.estrategiaconcursos.com.br                                                                      113

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Views
                                                                                       INCIDÊNCIA EM PROVA: baixa

Uma view do MongoDB é um objeto consultável somente leitura cujo conteúdo é definido por
um pipeline de agregação em outras coleções ou views. O MongoDB não persiste o conteúdo da
views no disco. O conteúdo de uma view é processado sob demanda quando um cliente consulta a
view. O MongoDB fornece dois tipos de views diferentes: views padrão e views materializadas sob
demanda.

As views padrão usam índices da coleção subjacente. Como um resultado, você não pode criar,
descartar ou reconstruir índices em um view padrão diretamente, nem obter uma lista de índices na
view. Você pode criar índices diretamente em views materializadas sob demanda, porque elas são
efetivamente armazenadas em disco. As views materializadas sob demanda fornecem melhor
desempenho de leitura do que as views padrão.

Isso ocorre porque são lidas do disco em vez de processadas como parte da consulta. Esse benefício
de desempenho aumenta com base no tamanho dos dados que estão sendo agregados.

        Receita Federal (Analista Tributário) Fluência em Dados                                              46
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Segurança
                                                                                         INCIDÊNCIA EM PROVA: baixa

O MongoDB fornece vários recursos, como autenticação, controle de acesso, criptografia, para
proteger suas implantações do MongoDB. Alguns dos principais recursos de segurança incluem:

 RECURSOS DE SEGURANÇA                                            DESCRIÇÃO
                           SCRAM (Salted Challenge Response Authentitcation Mechanism); x.509.
      AUTENTICAÇÃO
                           RBAC (Role-Based Access Control); EAC (Enable Access Control); Gerenciamento de
      AUTORIZAÇÃO
                           Usuários e Papeis.
                           TLS/SSL (Transporte Criptografado); Configuração do mongod e mongos para TLS/SSL;
         TLS/SSL
                           Configuração de TLS/SSL para clientes.
                           Criptografia Consultável; Client-Side Field Level Encryption; Encryption at rest.
      CRIPTOGRAFIA

        Receita Federal (Analista Tributário) Fluência em Dados                                                47
        www.estrategiaconcursos.com.br                                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Sharding
                                                                                       INCIDÊNCIA EM PROVA: baixa

Sharding é um método para distribuir dados em várias máquinas. O MongoDB usa sharding para
oferecer suporte a implantações com conjuntos de dados muito grandes e operações de alto
rendimento. Os sistemas de banco de dados com grandes conjuntos de dados ou aplicações de alto
rendimento podem desafiar a capacidade de um único servidor. Por exemplo, altas taxas de
consulta podem esgotar a capacidade da CPU do servidor.

Tamanhos de workload maiores que a RAM do sistema aumentam a capacidade de Entrada/Saída
das unidades de disco. Existem dois métodos para abordar o crescimento do sistema:
dimensionamento vertical e horizontal. A escala vertical envolve aumentar a capacidade de um
único servidor, como usar uma CPU mais poderosa, adicionar mais RAM ou aumentar a quantidade
                                                       ==219a34==

de espaço de armazenamento.

Limitações na tecnologia disponível podem impedir que uma única máquina seja suficientemente
poderosa para um determinado workload. Ademais, provedores baseados em nuvem têm tetos
rígidos com base nas configurações de hardware disponíveis, logo há um máximo prático para
escala vertical. O dimensionamento horizontal divide o conjunto de dados do sistema e a carga em
vários servidores, adicionando servidores para aumentar a capacidade conforme necessário.

Embora a velocidade ou capacidade geral de uma única máquina possa não ser alta, cada máquina
lida com um subconjunto da carga de trabalho geral, oferecendo potencialmente melhor eficiência
do que um único servidor de alta capacidade e alta velocidade. A expansão da capacidade da
implantação requer apenas a adição de servidores adicionais conforme necessário, o que pode ser
um custo geral menor do que o hardware de ponta para uma única máquina.

A desvantagem dessa estratégia é o aumento da complexidade na infraestrutura e na
manutenção da implantação.


Armazenamento
                                                                                       INCIDÊNCIA EM PROVA: baixa

O Storage Engine é o principal componente do MongoDB responsável pelo gerenciamento de
dados. Ele fornece uma variedade de mecanismos de armazenamento, permitindo que você
escolha o mais adequado a sua aplicação. O journal é um log que ajuda o banco de dados a se
recuperar no caso de um desligamento forçado. Existem várias opções configuráveis que permitem
que ele encontre um equilíbrio entre desempenho e confiabilidade.

O GridFS é um sistema de armazenamento versátil adequado para lidar com arquivos grandes,
como aqueles que excedem o limite de tamanho de documento de 16 MB.

        Receita Federal (Analista Tributário) Fluência em Dados                                              48
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

    Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
    Aula 12

                                                CASSANDRA
Conceitos Básicos
                                                                                         INCIDÊNCIA EM PROVA: baixa

O Apache Cassandra é um banco de dados NoSQL distribuído e de código aberto. Ele apresenta
um modelo de armazenamento em coluna, particionado, com semântica e eventualmente
consistente. Ele foi inicialmente projetado no Facebook usando uma arquitetura orientada a
eventos para implementar uma combinação de armazenamento distribuído Dynamo da Amazon e
técnicas de replicação e dados BigTable do Google, e modelo de mecanismo de armazenamento.

O Dynamo e o Bigtable foram desenvolvidos para atender aos requisitos emergentes de sistemas
de armazenamento escalonáveis, confiáveis e altamente disponíveis, mas cada um tinha áreas que
poderiam ser melhoradas. O Cassandra foi projetado como a melhor combinação de ambos os
sistemas para atender aos requisitos de armazenamento em larga escala emergentes, tanto
em volume de dados quanto em volume de consultas.

Como as aplicações começaram a exigir replicação global completa, e leituras e gravações sempre
disponíveis de baixa latência, tornou-se imperativo projetar um novo tipo de modelo de banco
de dados, pois os sistemas de banco de dados relacionais da época lutavam para atender aos
novos requisitos de aplicações de escala global. Sistemas como o Cassandra são projetados para
esses desafios e buscam os seguintes objetivos de design:

    Replicação completa de banco de dados multimestre;
    Disponibilidade global com baixa latência;
    Expansão em hardware de commodity;
    Aumento de throughput linear com cada processador adicional;
    Balanceamento de carga online e crescimento do cluster;
    Consultas orientadas a chaves particionadas esquema flexível.

          Receita Federal (Analista Tributário) Fluência em Dados                                              49
          www.estrategiaconcursos.com.br                                                                      113

                                      


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

      Receita Federal (Analista Tributário) Fluência em Dados                        50
      www.estrategiaconcursos.com.br                                                 113

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Visão Geral
                                                                                       INCIDÊNCIA EM PROVA: baixa

Cassandra é um banco de dados distribuído NoSQL. Por design, os bancos de dados NoSQL são
leves, de código aberto, não relacionais e amplamente distribuídos. Entre seus pontos fortes estão
escalabilidade horizontal, arquiteturas distribuídas e uma abordagem flexível para definição de
esquema. Os bancos de dados NoSQL permitem organização e análise rápidas e ad hoc de tipos de
dados díspares e de volume extremamente alto.

Isso se tornou mais importante nos últimos anos, com o advento do Big Data e a necessidade de
dimensionar rapidamente os bancos de dados na nuvem. Cassandra está entre os bancos de dados
NoSQL que abordaram as restrições de tecnologias de gerenciamento de dados anteriores, como
bancos de dados SQL. Um atributo importante do Cassandra é que seus bancos de dados são
distribuídos. Isso gera vantagens técnicas e comerciais.

Os bancos de dados Cassandra são dimensionados facilmente quando uma aplicação está sob alto
estresse, e a distribuição também evita a perda de dados de qualquer falha de hardware do
datacenter. Uma arquitetura distribuída também traz poder técnico; por exemplo, um
desenvolvedor pode ajustar a taxa de transferência de consultas de leitura ou escrever consultas
isoladamente.

"Distribuído" significa que o Cassandra pode ser executado em várias máquinas enquanto
aparece para os usuários como um todo unificado. Há pouco sentido em executar o Cassandra
como um único nó, embora seja muito útil fazê-lo para ajudá-lo a entender como ele funciona. Mas,
para obter o máximo benefício do Cassandra, você o executaria em várias máquinas. Como é um
banco de dados distribuído, o Cassandra pode (e geralmente tem) vários nós.

        Receita Federal (Analista Tributário) Fluência em Dados                                              51
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Um nó representa uma única instância do Cassandra. Esses nós se comunicam entre si por meio de
um protocolo chamado gossip, que é um processo de comunicação ponto a ponto do computador.
O Cassandra também possui uma arquitetura sem mestre – qualquer nó no banco de dados pode
fornecer exatamente a mesma funcionalidade que qualquer outro nó – contribuindo para a robustez
e resiliência do Cassandra.

Vários nós podem ser organizados logicamente em um cluster ou "anel". Você também pode ter
vários datacenters. Uma razão para a popularidade do Cassandra é que ele permite que os
desenvolvedores dimensionem seus bancos de dados dinamicamente, usando hardware pronto
para uso, sem tempo de inatividade. Você pode expandir quando precisar – e também encolher, se
os requisitos da aplicação sugerirem esse caminho.

        Receita Federal (Analista Tributário) Fluência em Dados                             52
        www.estrategiaconcursos.com.br                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Talvez você esteja acostumado com bancos de dados Oracle ou MySQL. Em caso afirmativo, você
sabe que estendê-los para oferecer suporte a mais usuários ou capacidade de armazenamento
exige que você adicione mais potência de CPU, RAM ou discos mais rápidos. Cada um deles custa
uma quantia significativa de dinheiro. E ainda: você ainda pode encontrar alguns tetos e restrições.
Por outro lado, o Cassandra facilita o aumento da quantidade de dados que pode gerenciar.

Por ser baseado em nós, o Cassandra escala horizontalmente (também conhecido como scale-
out), usando hardware de commodity inferior. Para dobrar sua capacidade ou taxa de
transferência, basta dobrar o número de nós. Isso é tudo o que é preciso. Precisa de mais potência?
Adicione mais nós – sejam mais 8 ou mais 8.000 – sem tempo de inatividade. Você também tem a
flexibilidade de reduzir, se desejar.

Essa escalabilidade linear se aplica essencialmente de forma indefinida. Essa capacidade se tornou
um dos principais pontos fortes de Cassandra.

No Cassandra, os próprios dados são distribuídos automaticamente, com consequências (positivas)
de desempenho. Ele faz isso usando partições. Cada nó possui um determinado conjunto de
tokens e o Cassandra distribui dados com base nos intervalos desses tokens no cluster. A chave de
partição é responsável pela distribuição de dados entre os nós e é importante para determinar a
localidade dos dados. Lembrando que um dado pode ser replicado para vários nós (réplicas).

A natureza distribuída do Cassandra o torna mais resiliente e eficiente. Isso realmente entra em
jogo quando temos várias réplicas para os mesmos dados. Isso ajuda o sistema a se autorrecuperar
se algo der errado, como se um nó cair, um disco rígido falhar ou a AWS redefinir uma instância. A
replicação garante que os dados não sejam perdidos. Se chegar uma solicitação de dados, mesmo
que uma das réplicas tenha caído, outras ainda estarão disponíveis para atender à solicitação.

Nenhuma ação manual é necessária, isso é feito de forma totalmente automática. O uso de várias
réplicas também tem vantagens de desempenho, porque não estamos limitados a uma única
instância. Temos nós (réplicas) que podem ser acessados para fornecer dados para nossas

        Receita Federal (Analista Tributário) Fluência em Dados                                  53
        www.estrategiaconcursos.com.br                                                           113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

operações, entre os quais podemos balancear a carga para obter o melhor desempenho. O
Cassandra replica automaticamente esses dados em seus diferentes data centers.

Sua aplicação pode gravar dados em um nó Cassandra na costa oeste dos EUA, e esses dados são
disponibilizados automaticamente em datacenters em nós na Ásia e na Europa. Isso tem vantagens
de desempenho positivas – especialmente se você oferece suporte a uma base de usuários em todo
o mundo. Em um mundo dependente de computação em nuvem e acesso rápido a dados,
nenhum usuário sofre com latência devido à distância.

Temos falado muito sobre sistemas distribuídos e disponibilidade. O Cassandra é, por padrão, um
banco de dados AP (tolerante à partição), portanto, está “sempre ativado”. Nesse contexto, o
nível de consistência representa o número mínimo de nós Cassandra que devem reconhecer uma
operação de leitura ou gravação para o coordenador antes que a operação seja considerada bem-
sucedida.

Em última análise, Cassandra é agnóstico à implantação. Não importa onde você o coloca – no
local, em um provedor de nuvem ou em vários provedores de nuvem. Você pode usar uma
combinação deles para um único banco de dados. Isso dá aos desenvolvedores de software o
máximo de flexibilidade.

        Receita Federal (Analista Tributário) Fluência em Dados                             54
        www.estrategiaconcursos.com.br                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Arquitetura
                                                                                       INCIDÊNCIA EM PROVA: baixa

Cassandra é construído em um modelo de arquitetura descentralizado peer-to-peer onde todos
os nós são iguais. Isso é diferente de alguns modelos de banco de dados com um relacionamento
“escravo para mestre” em que uma unidade dirige o funcionamento das outras unidades, e a outra
unidade só se comunica com a unidade central ou master. No Cassandra, diferentes unidades
podem se comunicar entre si como pares, o que elimina um possível ponto único de falha.

O Cassandra é segmentado em keyspaces, tabelas (famílias de colunas), linhas e colunas. Segue
abaixo uma visão hierárquica dessas camadas para maior entendimento:

O Cassandra fornece o Cassandra Query Language (CQL), uma linguagem semelhante ao SQL,
para criar e atualizar o esquema do banco de dados e acessar os dados. O CQL permite que os
usuários organizem dados em um cluster de nós do Cassandra usando:

Keyspace

O keyspace define como um conjunto de dados é replicado por centro de dados. A replicação é
o número de cópias salvas por cluster. Esse objeto é usado para armazenar tipos definidos pelo
usuário e famílias de colunas. Um keyspace é semelhante a um SGBDR, pois inclui índices, tipos
definidos pelo usuário, índices, fatores de replicação, famílias de colunas, reconhecimento do
centro de dados, entre outros.

Em outras palavras, um keyspace é um namespace (agrupamento lógico de tabelas) que define
a replicação de dados em nós, sendo usado para armazenar dados em várias máquinas no
cluster. Um keyspace é o nível mais alto de organização no CassandraDB e todas as tabelas devem
ser criadas dentro dele. Eles também são usados para autenticação e autorização. Um keyspace no
CassandraDB é como um esquema de um SGBDR.

Table (Column Family)

        Receita Federal (Analista Tributário) Fluência em Dados                                              55
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Define o esquema digitado para uma coleção de partições. As tabelas contêm partições, que
contêm linhas, que contêm colunas. As tabelas do Cassandra podem adicionar com flexibilidade
novas colunas às tabelas com tempo de inatividade zero. Pode-se afirmar que uma família de
colunas no CassandraDB é um contêiner para linhas de dados relacionados. É semelhante a uma
tabela em um banco de dados relacional.

Cada família de colunas consiste em um conjunto de pares chave-valor, em que a chave é o nome
da coluna e o valor são os dados armazenados na coluna. As famílias de colunas podem ser usadas
para armazenar diferentes tipos de dados.

Partition

Define a parte obrigatória da chave primária que todas as linhas no CassandraDB devem ter
para identificar o nó em um cluster onde a linha está armazenada. Todas as consultas de
desempenho fornecem a chave de partição na consulta. Uma partição é uma coleção de dados
relacionados armazenados juntos no mesmo nó físico. As partições são usadas para armazenar
linhas de dados em uma tabela de banco de dados CassandraDB.

As partições são identificadas por uma chave primária, que é um conjunto de colunas que
identificam exclusivamente uma linha de dados. Todas as linhas pertencentes à mesma partição
têm os mesmos valores de chave primária.

Row

Contém uma coleção de colunas identificadas por uma chave primária exclusiva composta pela
chave de partição e, opcionalmente, por chaves de agrupamento adicionais. Uma linha no é um
registro que contém os pontos de dados associados a uma determinada entidade ou objeto. Ele é
composto de colunas, cada uma com um nome, um valor e um tipo de dado associado a ela. As
linhas são organizadas em tabelas, que são identificadas por uma chave primária.

Column

Trata-se de um único dado com um tipo que pertence a uma linha. Uma coluna no CassandraDB
é basicamente um único valor de dados em uma tabela, semelhante às células individuais em uma
linha de um banco de dados relacional. Cada coluna é identificada por seu nome e armazena um
único valor de dados. As colunas são organizadas em famílias de colunas, que podem conter
qualquer número de colunas.

        Receita Federal (Analista Tributário) Fluência em Dados                             56
        www.estrategiaconcursos.com.br                                                      113

                                    


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

      Receita Federal (Analista Tributário) Fluência em Dados                        57
      www.estrategiaconcursos.com.br                                                 113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                                                RESUMO

                                                                                               Oracle database

 OPERAÇÕES                                                      DESCRIÇÃO
                 Nesse caso, uma aplicação especifica qual conteúdo é necessário. Por exemplo, uma aplicação
                 solicita o nome de um funcionário ou adiciona um registro de funcionário a uma tabela.
   Lógicas


                 Nesse caso, o SGBDR determina como as coisas devem ser feitas e realiza a operação. Por
   físicas       exemplo, depois que uma aplicação consulta uma tabela, o banco de dados pode usar um índice
                 para localizar as linhas solicitadas, ler os dados na memória e executar muitas outras etapas


      Receita Federal (Analista Tributário) Fluência em Dados                                               58
      www.estrategiaconcursos.com.br                                                                        113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                 antes de retornar um resultado ao usuário. O SGBDR armazena e recupera dados para que as
                 operações físicas sejam transparentes para as aplicações de banco de dados.

      Receita Federal (Analista Tributário) Fluência em Dados                                          59
      www.estrategiaconcursos.com.br                                                                   113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

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

                           Dados binários brutos, comprimento variável, até 2GB.
            long raw

      Receita Federal (Analista Tributário) Fluência em Dados                                            60
      www.estrategiaconcursos.com.br                                                                     113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                       Uma string em base 64 representando o endereço único de uma linha na sua tabela
                 rowid correspondente. Esse endereço é exclusivo em todo o banco de dados.

                      Uma string em base 64 representando o endereço lógico de uma linha na sua tabela
               urowid organizada por índices. O tamanho máximo é 4000 bytes.

                       Uma string de caractere de comprimento fixo, cujo comprimento corresponde ao
                  char comprimento tamanho. O tamanho mínimo é 1 e o máximo é 2000 bytes. Os
                       parâmetros BYTE e CHAR, como em VARCHAR2.
                       Uma string de caractere de comprimento fixo de até 2000 bytes; o argumento
                 nchar tamanho máximo depende da definição do conjunto de caracteres nacional para o
                       banco de dados. O argumento tamanho padrão é igual a 1.
                       Um Character Large Object contendo caracteres single-byte ou multibytes; suporta
                  clob conjunto de caracteres de largura fixa ou de largura variável. O tamanho máximo é
                       (4GB - 1) * DB_BLOCK_SIZE.
                       Similar ao CLOB, exceto que caracteres Unicode são armazenados tanto de conjuntos
                 nclob de caracteres de largura fixa quanto de largura variável. O tamanho máximo é (4GB -
                       1) * DB_BLOCK_SIZE.
                       Um Binary Large Object; o tamanho máximo é (4GB - 1) * DB_BLOCK_SIZE.
                  blob

                       Um ponteiro para um Large Binary File armazenado fora do banco de dados. Arquivos
                 bfile binários devem ser acessíveis a partir do servidor que executa a instância Oracle. O
                       tamanho máximo é de 4GB.


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
        tarefas administrativas do dia a dia, a Oracle recomenda enfaticamente a criação de contas de
 SYSTEM usuários nomeados para administrar o banco de dados para permitir o monitoramento da atividade
        do banco de dados.

               Trata-se de um conjunto de arquivos, localizados em disco, que armazenam dados – esses
BANCO DE DADOS arquivos podem existir independentemente de uma instância de banco de dados.

  INSTÂNCIA DE Conjunto de estruturas de memória que gerenciam arquivos de banco de dados. A instância
               consiste em uma área de memória compartilhada, chamada System Global Area (SGA), e um
BANCO DE DADOS conjunto de processos em segundo plano. Uma instância pode existir independentemente dos


      Receita Federal (Analista Tributário) Fluência em Dados                                            61
      www.estrategiaconcursos.com.br                                                                     113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                 arquivos de banco de dados. A imagem seguinte mostra um banco de dados e sua instância.
                 Para cada conexão de usuário com a instância, um processo cliente executa a aplicação. Cada
                 processo cliente está associado ao seu próprio processo servidor. O processo do servidor tem
                 sua própria memória de sessão privada, conhecida como Program Global Area (PGA).

      Receita Federal (Analista Tributário) Fluência em Dados                                              62
      www.estrategiaconcursos.com.br                                                                       113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

Tablespaces                                                DESCRIÇÃO


      Receita Federal (Analista Tributário) Fluência em Dados                        63
      www.estrategiaconcursos.com.br                                                 113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

              Este tablespace contém os esquemas de amostra incluídos no Oracle. Os esquemas de exemplo
              fornecem uma plataforma comum para exemplos. A documentação e os materiais educacionais da
              Oracle contêm exemplos baseados nos esquemas de exemplo.
   EXAMPLE


           Este tablespace é criado automaticamente na criação do banco de dados. O Oracle o utiliza para
           gerenciar o banco de dados. Ele contém o dicionário de dados, que é o conjunto central de tabelas
    SYSTEM e views usadas como referência somente leitura para um banco de dados específico. Ele também
           contém várias tabelas e views que contêm informações administrativas sobre o banco de dados.
           Todos eles estão contidos no esquema SYS e podem ser acessados apenas pelo usuário SYS ou
           outros usuários administrativos com o privilégio necessário.
           Este é um tablespace auxiliar para o SYSTEM. Ele contém dados para alguns componentes e
           produtos, reduzindo a carga no SYSTEM. Todo banco de dados que usa o Oracle 10g release 1 (10.1)
           ou posterior deve ter um tablespace SYSAUX.
    SYSAUX


            Este tablespace armazena dados temporários gerados durante o processamento de instruções
            SQL. Por exemplo, ele seria usado para classificação de consultas. Cada banco de dados deve ter
            um tablespace temporário que é atribuído aos usuários como seu tablespace temporário. No banco
       TEMP
            de dados pré-configurado, o TEMP é especificado como o tablespace temporário padrão. Se
            nenhum tablespace temporário for especificado quando uma conta de usuário for criada, o Oracle
            atribuirá esse tablespace ao usuário.
            Este é o tablespace de undo usado pelo banco de dados para armazenar informações de undo. Todo
            banco de dados deve ter um tablespace de undo.
  UNDOTBS1


            Este tablespace é usado para armazenar objetos e dados permanentes do usuário. Semelhante ao
            TEMP, todo banco de dados deve ter um tablespace para dados permanentes do usuário atribuídos
      USERS aos usuários. Caso contrário, objetos de usuário serão criados no SYSTEM, o que não é uma boa
            prática. No banco de dados pré-configurado, USERS é designado como tablespace padrão para
            todos os novos usuários.


Tipos de processos                                              DESCRIÇÃO
                     Esses processos são criados e mantidos para executar o código de software de uma aplicação
     Processos de ou de uma ferramenta Oracle. A maioria dos ambientes possui máquinas separados para
          cliente processos cliente.

     Processos de Esses processos consolidam funções que, de outra forma, seriam tratadas por vários
                  programas de banco de dados Oracle em execução para cada processo cliente. Os processos
   segundo plano
                  em segundo plano executam E/S (Entrada/Saída) de forma assíncrona e monitoram outros
    (BAGKGROUND)  processos para fornecer maior paralelismo para melhor desempenho e confiabilidade.
                  Esses processos se comunicam com os processos do cliente e interagem com o Oracle para
     Processos do atender às solicitações.
          servidor

      Receita Federal (Analista Tributário) Fluência em Dados                                                64
      www.estrategiaconcursos.com.br                                                                         113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                                                                                       Postgresql database

          Tipos de dados                                         DESCRIÇÃO
           bigint          Inteiro de oito bytes com sinal.
        bigserial          Inteiro de oito bytes autoincrementável.
              bit          Cadeia de bits de tamanho fixo.
      bit varying          Cadeia de bits de tamanho variável.
          boolean          Booleano lógico (true/false).
              box          Caixa rectangular em um plano.
            bytea          Dados binários (Byte Array).
        character          Cadeia de caracteres de tamanho fixo.
character varying          Cadeia de caracteres de tamanho variável (também chamado de varchar).
             cidr          Endereço de rede IPv4 ou IPv6.
           circle          Círculo em um plano.
             date          Data de calendário (ano, mês, dia).
 double precision          Número de ponto flutuante de precisão dupla (8 bytes).
             inet          Endereço de host IPv4 ou IPv6.
          integer          Inteiro de quatro bytes com sinal.
         interval          Intervalo de tempo.
             json          Dado textual do tipo JSON.


      Receita Federal (Analista Tributário) Fluência em Dados                                          65
      www.estrategiaconcursos.com.br                                                                  113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                jsonb      Dado binário do tipo JSON.
                 line      Linha infinita em um plano.
                 lseg      Segmento infinito em um plano.
              macaddr      Endereço MAC (Media Access Control).
             macaddr8      Endereço MAC (Media Access Control) em formato EUI-64.
                money      Montante de dinheiro com 8 bytes.
              numeric      Número exato de precisão selecionável.
                 path      Caminho geométrico em um plano.
               pg_lsn      Número de sequência do log do PostgreSQL.
          pg_snapshot      ID do Snapshot de transação em nível de usuário.
                point      Ponto geométrico em um plano.
              polygon      Caminho geométrico fechado em um plano.
                 real      Número de ponto flutuante com precisão simples (4 bytes).
             smallint      Inteiro de dois bytes com sinal.
          smallserial      Inteiro de dois bytes autoincrementável.
               serial      Inteiro de quatro bytes autoincrementável.
                 text      Cadeia de caracteres de tamanho variável.
                 time      Hora do dia (desconsiderando fuso horário).
            timestamp      Data e hora (desconsiderando fuso horário).
              tsquery      Consulta de pesquisa de texto.
             tsvector      Documento de pesquisa de texto.
                 uuid      Identificador único universal.
                  xml      Dados em XML.


             Tipos de caracteres                                 descrição
CHARACTER VARYING(N), VARCHAR(N) Comprimento variável com limite de comprimento.
           CHARACTER(N), CHAR(N) Comprimento fixo com espaço completado.
                   TEXT, VARCHAR Comprimento ilimitado variável.

  APLICAÇÕES DE CLIENTE                                         DESCRIÇÃO
                          Agrupa um banco de dados PostgreSQL.
           clusterdb

                          Cria um novo banco de dados PostgreSQL.
            createdb

                          Define uma nova conta de usuário do PostgreSQL.
          createuser

                          Remove um banco de dados PostgreSQL.
               dropdb

                          Remove uma conta de usuário do PostgreSQL.
            dropuser

                          Pré-processador SQL C incorporado.
                 ecpg

          pg_amcheck Verifica se há corrupção em um ou mais bancos de dados PostgreSQL.


      Receita Federal (Analista Tributário) Fluência em Dados                             66
      www.estrategiaconcursos.com.br                                                      113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                          Faça um backup básico de um cluster PostgreSQL.
   pg_basebackup

                          Executa um teste de benchmark no PostgreSQL.
             pgbench

                          Recupera informações sobre a versão instalada do PostgreSQL.
           pg_config

                          Extrai um banco de dados em um arquivo de script ou outro arquivo compactado.
             pg_dump

                          Extrai um cluster de banco de dados PostgreSQL em um arquivo de script.
          pg_dumpall

                          Verifica o status da conexão de um servidor PostgreSQL.
          pg_isready

                          Transmite logs write-ahead de um servidor PostgreSQL.
   pg_receivewal

                          Controla os fluxos de decodificação lógica do PostgreSQL.
  pg_recvlogical

                          Restaura banco de dados PostgreSQL de um arquivo compactado criado por pg_dump.
          pg_restore

                          Verifica a integridade de um backup básico de um cluster PostgreSQL.
 pg_verifybackup

                          Terminal interativo do PostgreSQL.
                psql

                          Reindexa um banco de dados PostgreSQL.
           reindexdb

                          Coleta de lixo e analisa um banco de dados PostgreSQL.
           vacuumdb


 APLICAÇÕES DE SERVIDOR                                         DESCRIÇÃO
                          Cria um novo cluster de banco de dados PostgreSQL.
              initdb

                          Limpa arquivos PostgreSQL WAL.
pg_archivecleanup

                  Ativa, desativa ou verifica somas de verificação de dados em um cluster de banco de
     pg_checksums
                  dados PostgreSQL.
                  Exibe informações de controle de um cluster de banco de dados PostgreSQL pg_ctl —
   pg_controldata
                  inicializa, inicia, para ou controla um servidor PostgreSQL.
                  Redefinir o log write-ahead e outras informações de controle de um cluster de banco
      pg_resetwal
                  de dados PostgreSQL.
                  Sincroniza um diretório de dados do PostgreSQL com outro diretório de dados que foi
        pg_rewind
                  bifurcado a partir dele.
                  Determina wal_sync_method mais rápido para PostgreSQL.
    pg_test_fsync

                          Mede a sobrecarga de tempo.
   pg_test_timing

                          Atualiza uma instância do servidor PostgreSQL.
          pg_upgrade

      Receita Federal (Analista Tributário) Fluência em Dados                                             67
      www.estrategiaconcursos.com.br                                                                      113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                     Exibe uma renderização legível por humanos do Write-Ahead Log (WAL) de um cluster
          pg_waldump
                     de banco de dados PostgreSQL.
                     Processo que se conecta ao servidor de banco de dados PostgreSQL, responsável por
            postgres gerenciar dados armazenados no banco de dados, atender às solicitações dos usuários
                     e realizar transações.
                     Processo responsável por gerenciar a conexão entre o servidor de banco de dados e as
          postmaster
                     aplicações clientes, bem como autenticar usuários e prover controle de acesso.


                                                                                                    MONGODB

                                                     ==219a34==

                   SGBD RELACIONAL                                            SGBD MONGODB
                   Base de Dados                                         Base de Dados (Database)
                      Tabela                                               Coleção (Collection)
                       Linha                                              Documento (Document)
                       Índice                                                  Índice (Index)
                      Coluna                                                   Campo (Field)


RECURSOS DE SEGURANÇA                                             DESCRIÇÃO
                         SCRAM (Salted Challenge Response Authentitcation Mechanism); x.509.
    AUTENTICAÇÃO
                         RBAC (Role-Based Access Control); EAC (Enable Access Control); Gerenciamento de
    AUTORIZAÇÃO
                         Usuários e Papeis.


      Receita Federal (Analista Tributário) Fluência em Dados                                           68
      www.estrategiaconcursos.com.br                                                                    113

                                   


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

                         TLS/SSL (Transporte Criptografado); Configuração do mongod e mongos para TLS/SSL;
       TLS/SSL
                         Configuração de TLS/SSL para clientes.
                         Criptografia Consultável; Client-Side Field Level Encryption; Encryption at rest.
    CRIPTOGRAFIA


                                                                                                 cassandra

      Receita Federal (Analista Tributário) Fluência em Dados                                           69
      www.estrategiaconcursos.com.br                                                                    113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

      Receita Federal (Analista Tributário) Fluência em Dados                        70
      www.estrategiaconcursos.com.br                                                 113

                                  


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 12

      Receita Federal (Analista Tributário) Fluência em Dados                        71
      www.estrategiaconcursos.com.br                                                 113

                                  


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                 QUESTÕES COMENTADAS

1. (FGV / SEFAZ-MT - 2023) O Mongo DB é citado frequentemente como um dos bancos de dados
   não relacionais (NoSQL) mais utilizados no mundo.

   Assinale a opção que representa o elemento disponível nesse sistema que mais se assemelha à
   ideia de tabela relacional.

   a) Cluster.
   b) Collection
   c) Database.
   d) Document.
   e) Index.

Comentários:

                    SGBD RELACIONAL                                             SGBD MONGODB
                     Base de Dados                                         Base de Dados (Database)
                        Tabela                                                Coleção (Collection)
                         Linha                                              Documento (Document)
                         Índice                                                  Índice (Index)
                        Coluna                                                   Campo (Field)


No MongoDB, uma Collection é um agrupamento lógico de documentos, que são os elementos
básicos de armazenamento de dados no MongoDB. Assim como uma tabela em um banco de dados
relacional, uma Collection é responsável por armazenar um conjunto de dados relacionados.

                                                                                               Gabarito: Letra B

2. (Quadrix / CFO-DF - 2022) No banco de dados Oracle 11g, uma entrada é gravada nos arquivos
   de redo log quando ocorre uma gravação de dados nas tabelas.

Comentários:

Os arquivos Redo Log Files gravam todas alterações nos dados do Banco. O Oracle possui dois ou
mais desses arquivos, porque eles são gravados de forma cíclica. Através deles pode-se obter
informações sobre os dados alterados. São fundamentais nas operações de recovery. É
aconselhável manter cópias múltiplas destes arquivos de preferência em discos diferentes.

                                                                                               Gabarito: Correto

        Receita Federal (Analista Tributário) Fluência em Dados                                              72
        www.estrategiaconcursos.com.br                                                                       113

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

3. (FUNDATEC / AGERGS - 2022) Classificado como um programa de banco de dados NoSQL, o
   MongoDB é um banco de dados de código aberto e de alta performance, que se caracteriza por
   não possuir esquemas, ser escrito em C++, ser multiplataforma e ser formado por um conjunto
   de aplicativos JSON. O MongoDB é um banco de dados NoSQL:

   a) Orientado a colunas, semelhante ao banco de dados BigTable do Google.

   b) Orientado a documentos, com estruturas flexíveis que podem ser obtidas por meio de dados
   semiestruturados, como o formato XML e JSON.

   c) Orientado a objetos e possui conceitos similares ao do modelo relacional, como a criação de
   linhas e colunas.

   d) Do tipo chave-valor, que usa uma tabela hash na qual há uma chave única e um indicador de
   um dado ou de um item em particular.

   e) Orientado a grafos, semelhante ao banco de dados Neo4J.

Comentários:

(a) Errado, ele é orientado a documentos e não tem relação com o BigTable; (b) Correto; (c) Errado,
ele é orientado a documentos; (d) Errado, ele é orientado a documentos; (e) Errado, ele é orientado
a documentos.

                                                                                       Gabarito: Letra B

4. (CESPE / ANP - 2022) Nos sistemas orientados a documentos NoSQL, como o MongoDB, os
   novos documentos devem ter elementos de dados que já existem em documentos atuais da
   coleção.

Comentários:

Embora os documentos em uma coleção devam ser semelhantes, eles podem ter diferentes
elementos de dados (atributos), e novos documentos podem ter novos elementos de dados que
não existem em nenhum dos documentos atuais na coleção.

                                                                                       Gabarito: Errado

5. (FGV / CGU - 2022) Sobre o MongoDB v5.0, considere as afirmativas a seguir.

   I. Todos os documentos de uma coleção (collection) devem possuir o mesmo número de campos
   (fields).

        Receita Federal (Analista Tributário) Fluência em Dados                                      73
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   II. Um campo presente em diferentes documentos de uma collection pode ter diferentes tipos
   de dados ao longo dos documentos.
   III. MongoDB oferece a capacidade de validar esquemas durante operações de inserção
   (insertion) e atualização (update).

   Está correto o que se afirma em:

   a) somente I;
   b) somente III;
   c) somente I e II;
   d) somente II e III;
   e) I, II e III.

Comentários:

(I) Errado, isso não faz o menor sentido – os documentos de uma coleção podem possuir diferentes
quantidades de campos; (II) Correto, lembrem-se que uma das principais características é a
flexibilidade do esquema – ou até ausência de esquemas; (III) Correto, ele realmente permite
validação de esquemas durante operações de inserção e atualização. Professor, mas não é sem
esquema? Não. Na prática, quando você cria uma nova coleção com validação de esquema, o
MongoDB verifica a validação durante atualizações e inserções nessa coleção. Quando você
adiciona validação a uma coleção não vazia existente, temos duas possibilidades: (1) documentos
recém-inseridos são verificados para validação; (2) documentos já existentes em sua coleção não
são verificados para validação até que sejam modificados.

                                                                                               Gabarito: Letra D

6. (CESPE / SERPRO – 2021) Uma coleção e um documento, no MongoDB, são equivalentes à
   tabela e à linha, no Modelo Relacional de Dados.

Comentários:

                    SGBD RELACIONAL                                             SGBD MONGODB
                     Base de Dados                                         Base de Dados (Database)
                        Tabela                                                Coleção (Collection)
                         Linha                                              Documento (Document)
                         Índice                                                  Índice (Index)
                        Coluna                                                   Campo (Field)


Perfeito, conforme apresenta a tabela!

                                                                                               Gabarito: Correto

        Receita Federal (Analista Tributário) Fluência em Dados                                              74
        www.estrategiaconcursos.com.br                                                                       113

                                      


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

7. (IBFC / IBGE - 2021) Basicamente existem atualmente duas grandes categorias de Banco de
   Dados no mercado que são os Relacionais e os Não-Relacionais. Assinale a alternativa que
   identifica corretamente dois Bancos de Dados Não-Relacionais.

   a) Oracle e MongoDB
   b) MongoDB e NoSQL
   c) Oracle e NoSQL
   d) SQL Server e Oracle
   e) MongoDB e SQL Server

Comentários:

(a) Relacional e Não-Relacional;
(b) Não-Relacional e Não-Relacional;
(c) Relacional e Não-Relacional;
(d) Relacional e Relacional;
(e) Não-Relacional e Relacional;

                                                                                       Gabarito: Letra B

8. (IF-Sul Rio-Grandense/ IF-Sul Rio-Grandense – 2021) Sobre o Banco de Dados MongoDB,
   analise as afirmações abaixo:

   I. MongoDB é um banco de dados baseado em documentos, e esses documentos são codificados
   como BSON – um formato binário do JSON.
   II. No MongoDB, não existem tabelas, chaves primárias e nem chaves estrangeiras.
   III. No MongoDB, o equivalente a cada linha de uma tabela do modelo relacional chama-se
   Collections.

   Está(ão) correta(s) a(s) afirmativa(s)

   a) I, apenas.
   b) I e II, apenas.
   c) II e III, apenas.
   d) I, II e III.

Comentários:

(I) Correto; (II) Correto; (III) Errado. O MongoDB armazena documentos em coleções – coleções são
análogas às tabelas em bancos de dados relacionais.

                                                                                       Gabarito: Letra B

        Receita Federal (Analista Tributário) Fluência em Dados                                      75
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

9. (IF-Sul Rio-Grandense/ IF-Sul Rio-Grandense – 2021) Sobre o Banco de Dados MongoDB,
   analise as afirmações abaixo:

   I. MongoDB é um banco de dados baseado em documentos, e esses documentos são codificados
   como BSON – um formato binário do JSON.
   II. No MongoDB, não existem tabelas, chaves primárias e nem chaves estrangeiras.
   III. No MongoDB, o equivalente a cada linha de uma tabela do modelo relacional chama-se
   Collections.

   Está(ão) correta(s) a(s) afirmativa(s)

   a) I, apenas.
   b) I e II, apenas.
   c) II e III, apenas.
   d) I, II e III.

Comentários:

(I) Correto; (II) Correto; (III) Errado. O MongoDB armazena documentos em coleções – coleções são
análogas às tabelas em bancos de dados relacionais.

                                                                                       Gabarito: Letra B

10. (AOCP / MJSP - 2020) Em um banco de dados MongoDB, uma projeção apresenta quais
    campos, em um documento, são incluídos ou excluídos da saída final. Um administrador de
    banco de dados MongoDB do MJSP necessita realizar uma projeção. Sabendo que tal projeção
    assume a forma de uma expressão JSON que consiste em pares, assinale a alternativa que
    apresenta corretamente esses pares.

   a) key:value.
   b) key:document.
   c) value:document.
   d) primarykey:document.
   e) primarykey:foreingkey.

Comentários:

O MongoDB utiliza JSON, que representa dados em uma estrutura chave:valor (key:value).

                                                                                       Gabarito: Letra A

        Receita Federal (Analista Tributário) Fluência em Dados                                      76
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

11. (AOCP / MJSP - 2020) O Cassandra DB é um banco NoSQL baseado em um esquema flexível.
    Sabendo disso, assinale a alternativa que apresenta o nome do elemento do Cassandra DB que
    seja equivalente ao ‘esquema’ de um banco de dados relacional:

   a) Family.
   b) Widespace.
   c) Keyspace.
   d) Collection.
   e) Tablespace.

Comentários:

O keyspace define como um conjunto de dados é replicado por centro de dados. A replicação é o
número de cópias salvas por cluster. Esse objeto é usado para armazenar tipos definidos pelo
usuário e famílias de colunas. Um keyspace é semelhante a um SGBDR, pois inclui índices, tipos
definidos pelo usuário, índices, fatores de replicação, famílias de colunas, reconhecimento do
centro de dados, entre outros.

Em outras palavras, um keyspace é um namespace (agrupamento lógico de tabelas) que define a
replicação de dados em nós, sendo usado para armazenar dados em várias máquinas no cluster. Um
keyspace é o nível mais alto de organização no CassandraDB e todas as tabelas devem ser criadas
dentro dele. Eles também são usados para autenticação e autorização. Um keyspace no
CassandraDB é como um esquema de um SGBDR.

                                                                                       Gabarito: Letra C

12. (IBADE / Prefeitura de Jaru – RO - 2019) Ultimamente há um movimento que propõe novas
    estruturas de bancos de dados “não relacionais”, chamado NoSql. O banco que pode ser
    considerado NoSql é:

   a) Mysql.
   b) Postgree.
   c) Oracle.
   d) MongoDB.
   e) DB 2.

Comentários:

(a) Errado, trata-se de um SGBD Relacional;
(b) Errado, trata-se de um SGBD Relacional;
(c) Errado, trata-se de um SGBD Relacional;
(d) Correto, trata-se de um SGBD Não-Relacional;
(e) Errado, trata-se de um SGBD Relacional;

        Receita Federal (Analista Tributário) Fluência em Dados                                      77
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Letra D

13. (CS-UFG / IF Goiano - 2019) Sistemas de Gerenciamento de Bancos de Dados (SGBDs)
    oferecem serviços para armazenamento de dados. MySQL, SQL Server e PostgreSQL são
    alguns exemplos. Especificamente, o PostgreSQL:

   a) impede a criação de índices em dados do tipo texto e numérico.
   b) oferece os tipos de dados JSON e XML.
   c) é uma tecnologia que foi criada há menos de uma década.
   d) é incompatível com uso em nuvem (cloud computing).

Comentários:

(a) Errado, não há nenhuma restrição a criação de índices em dados do tipo texto ou numérico; (b)
Correto; (c) Errado, foi criado na década de 90! Agora cobrar data em prova? É sério isso? (d) Errado,
é compatível com computação em nuvem.

                                                                                       Gabarito: Letra B

14. (FEPESE / CELESC - 2019) Analise as afirmativas abaixo sobre o Apache Cassandra.

   1. Possui uma arquitetura descentralizada, de modo que todo nó no cluster é idêntico.
   2. É um sistema gerenciador de bancos de dados do tipo NoSQL.
   3. A replicação das atualizações ocorre necessariamente de forma síncrona por todo o cluster.

   Assinale a alternativa que indica todas as afirmativas corretas.

   a) É correta apenas a afirmativa 1.
   b) São corretas apenas as afirmativas 1 e 2.
   c) São corretas apenas as afirmativas 1 e 3.
   d) São corretas apenas as afirmativas 2 e 3.
   e) São corretas as afirmativas 1, 2 e 3.

Comentários:

(1) Correto. Cassandra é construído em um modelo de arquitetura descentralizado peer-to-peer
onde todos os nós são iguais; (2) Correto. Ele realmente um SGBD NoSQL; (3) Errado. Por padrão,
o Cassandra usa a replicação síncrona para garantir que as atualizações sejam replicadas em todos
os nós do cluster antes de retornar uma confirmação ao cliente. No entanto, o Cassandra também
oferece suporte a replicação assíncrona, o que permite que as atualizações sejam replicadas com
menos latência, pois não é necessário esperar pela confirmação de todos os nós do cluster.

                                                                                       Gabarito: Letra B

        Receita Federal (Analista Tributário) Fluência em Dados                                      78
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

15. (CS-UFG / UFG - 2018) PostgreSQL é

   a) um algoritmo de conteúdos.
   b) uma linguagem de programação.
   c) um gerenciador de banco de dados.
   d) um servidor de páginas web.

Comentários:

PostgreSQL é um Sistema Gerenciador de Banco de Dados.

                                                                                       Gabarito: Letra C

16. (UFPR / UFPR - 2018) Em relação à TABLESPACE no Oracle e no PostgreSQL, é correto afirmar:

   a) As “tablespace” são arquivos de índice que organizam os dados das tabelas segundo uma
   chave e ordem definidas pelo usuário.

   b) No PostgreSQL, as tablespace são compostas por arquivos físicos indicados na cláusula
   DATAFILE do comando CREATE TABLESPACE.

   c) Em PostgreSQL, os objetos são armazenados em um único tablespace.

   d) No Oracle, a tablespace temporária padrão do usuário é utilizada para armazenar os
   segmentos undo.

   e) As “tablespace” dividem os bancos de dados fisicamente.

Comentários:

(a) Errado, um tablespace é um local no disco onde o SGBD armazena arquivos de dados. Ele é
usado para agrupar objetos relacionados, que podem ser atribuídos a um disco diferente para
melhorar o desempenho. Tablespaces também permitem que o usuário controle o uso do espaço
em disco por objeto e podem ser usados para armazenar diferentes tipos de dados em diferentes
discos; (b) Errado, os arquivos físicos são indicados na cláusula LOCATION do comando CREATE
TABLESPACE; (c) Errado, o PostgreSQL usa um conjunto de tablespaces para armazenar os seus
objetos; (d) Errado. No Oracle, o undo é uma função que permite aos usuários desfazer sua última
ação ou transação. Ele permite que os usuários se recuperem de erros e restaurem o banco de dados
a um estado anterior. O recurso de desfazer é usado para se recuperar de erros e enganos e para
reverter alterações que não foram intencionais; (e) Correto, elas realmente dividem os bancos
fisicamente.

                                                                                       Gabarito: Letra E

        Receita Federal (Analista Tributário) Fluência em Dados                                      79
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

17. (QUADRIX / CFBio - 2018) O PostgreSQL é um sistema gerenciador de banco de dados que
    oferece suporte para chaves estrangeiras e triggers.

Comentários:

Ele realmente é um sistema gerenciador de banco de dados e oferece – sim – suporte para chaves
estrangeiras e triggers.

                                                                                          Gabarito: Correto

18. (QUADRIX / CFBio - 2018) Com o programa createuser, é possível criar um novo usuário no
    PostgreSQL via linha de comando.

Comentários:

     createuser Define uma nova conta de usuário do PostgreSQL.


Perfeito! Conforme podemos ver pela tabela!

                                                                                          Gabarito: Correto

19. (FAURGS / BANRISUL - 2018) Sobre as tablespaces criadas automaticamente durante o
    processo de criação de um banco de dados no Oracle 11G, é correto afirmar que:

   a) UNDO contém as tabelas utilizadas por ferramentas do próprio banco de dados.
   b) USERS contém informações de recuperação de transações.
   c) SYSAUX contém dados temporários, criados durante a execução de instruções SQL.
   d) SYSTEM contém o Dicionário de Dados e todas as informações para o gerenciamento do
   banco de dados.
   e) TEMP é a tabela padrão que contém todos os objetos criados pelo usuário.

Comentários:

             Este tablespace é criado automaticamente na criação do banco de dados. O Oracle o utiliza para
             gerenciar o banco de dados. Ele contém o dicionário de dados, que é o conjunto central de tabelas
             e views usadas como referência somente leitura para um banco de dados específico. Ele também
      SYSTEM contém várias tabelas e views que contêm informações administrativas sobre o banco de dados.
             Todos eles estão contidos no esquema SYS e podem ser acessados apenas pelo usuário SYS ou
             outros usuários administrativos com o privilégio necessário.


(a) Errado, trata-se do SYSAUX; (b) Errado, trata-se do UNDO; (c) Errado, trata-se do TEMP; (d)
Correto; (e) Errado, trata-se do USERS.

        Receita Federal (Analista Tributário) Fluência em Dados                                             80
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Letra D

20. (FGV / BANESTES - 2018) Nos bancos de dados Oracle, o comando SYNONYM estabelece:

   a) um nome alternativo para uma tabela ou view;
   b) um novo tipo de dados definido pelo usuário;
   c) uma chave identificadora alternativa numa tabela;
   d) uma equivalência entre dois usuários;
   e) uma equivalência entre duas stored procedures.

Comentários:

Um sinônimo é um alias (apelido) para qualquer tabela, view, view materializada, sequência, stored
procedure, function, pacote, tipo, objeto de esquema de classe Java, um tipo de objeto definido
                                                       ==219a34==

pelo usuário, ou outro sinônimo. Pelo fato de um synonym ser simplesmente um alias, não requer
nenhum armazenamento, além da sua definição no dicionário de dados.

                                                                                       Gabarito: Letra A

21. (CCV-UFC / UFC - 2018) Sob qual tipo de licença o banco de dados PostgreSQL é lançado
    atualmente?

   a) GPL license.
   b) BSD license.
   c) LGPL license.
   d) X11(MIT) license.
   e) PostgreSQL license.

Comentários:

O PostgreSQL é lançado atualmente sob a licença PostgreSQL License.

                                                                                       Gabarito: Letra E

22. (FGV / IBGE - 2017) Bancos de Dados NoSQL podem armazenar dados em diversos formatos
    não relacionais, como documentos compostos por pares de campo-e-valor (field-and-value),
    conforme a estrutura exemplificada a seguir.

        Receita Federal (Analista Tributário) Fluência em Dados                                      81
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   O Banco de Dados NoSQL utilizado para armazenar documentos compostos por pares campo-
   e-valor, no formato BSON (JSON-like), é o:

   a) OpenLink Virtuoso;
   b) Neo4j;
   c) Apache HBase;
   d) MongoDB;
   e) Titan.

Comentários:

(a) Errado, trata-se de um SGBD orientado a Objetos;
(b) Errado, trata-se de um SGBD baseado em Grafos;
(c) Errado, trata-se de um SGBD orientado a Colunas;
(d) Errado, trata-se de um SGBD orientado a Documentos;
(e) Errado, trata-se de um SGBD orientado a Grafos;

                                                                                       Gabarito: Letra D

23. (FCC / TRT23-MT - 2016) São vários os tipos de dados numéricos no PostgreSQL. O tipo:

   a) smallint tem tamanho de armazenamento de 1 byte, que permite armazenar a faixa de valores
   inteiros de −128 a 127.

   b) bigint é a escolha usual para números inteiros, pois oferece o melhor equilíbrio entre faixa de
   valores, tamanho de armazenamento e desempenho.

   c) integer tem tamanho de armazenamento de 4 bytes e pode armazenar valores na faixa de
   −32768 a 32767.

   d) numeric pode armazenar números com precisão variável de, no máximo, 100 dígitos.

   e) serial é um tipo conveniente para definir colunas identificadoras únicas, semelhante à
   propriedade auto incremento.

Comentários:

(a) Errado, tem o tamanho de dois bytes; (b) Errado, o bigint é utilizado quando o range do
integer é insuficiente – ele é mais utilizado para representar inteiros gigantescos, logo não é a
escolha usual para números inteiros; (c) Errado, ele armazena um range de -2147483648 to
+2147483647; (d) Errado, é até 131072 dígitos antes do ponto decimal e até 16383 dígitos após o
ponto decimal; (e) Correto, trata-se de um inteiro de quatro bytes autoincrementável usado para
definir colunas identificadoras.

        Receita Federal (Analista Tributário) Fluência em Dados                                      82
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Letra E

24. (IESES / BAHIAGÁS - 2016) Qual a ferramenta interativa de linha de comando padrão utilizado
    para acessar o SGBD PostgreSQL 9.1?

   a) mysqld
   b) sqlplus
   c) pgcmd
   d) psql
   e) connect

Comentários:

O PostgreSQL tem um terminal de linha de comando que pode ser utilizado para fazer consultas
interativamente, enviá-las para o PostgreSQL e ver os resultados da consulta – o nome desse
terminal é psql.

                                                                                       Gabarito: Letra D

25. (IESES / BAHIAGÁS - 2016) Qual linguagem procedural utilizada para a criação de funções e
    gatilhos no PostgreSQL 9.1?

   a) PL/SQL
   b) MySQL
   c) PL/pgSQL
   d) SQL
   e) Transact-SQL

Comentários:

O PostgreSQL possui uma linguagem procedural que permite manipular dados como uma extensão
do SQL – o nome dessa linguagem procedural é PL/pgSQL.

                                                                                       Gabarito: Letra C

26. (IESES / BAHIAGÁS - 2016) Qual tipo de dado numérico é suportado pelo PostgreSQL 9.1?

   a) var
   b) time
   c) blob
   d) numeric
   e) byte

        Receita Federal (Analista Tributário) Fluência em Dados                                      83
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Comentários:

(a) Errado, esse não é sequer um tipo de dados; (b) Errado, não se trata de um tipo numérico; (c)
Errado, esse tipo de dado não é suportado; (d) Correto; (e) Errado, esse tipo de dado não é
suportado.

                                                                                       Gabarito: Letra D

27. (IBFC / EBSERH - 2016) Relacione os tipos de dados numéricos do Banco de Dados PostgreSQL
    9.5 da coluna da esquerda com a respectiva quantidade de bytes da coluna da direita:

   (1) real
   (2) smallserial
   (3) double precision

   (A) 8 bytes
   (B) 4 bytes
   (C) 2 bytes.

   a) 1B - 2C - 3A
   b) 1C - 2B - 3A
   c) 1B - 2A - 3C
   d) 1A - 2C - 3B
   e) 1C - 2A - 3B

Comentários:

               real Número de ponto flutuante com precisão simples (4 bytes).
        smallserial Inteiro de dois bytes autoincrementável.
   double precision Número de ponto flutuante de precisão dupla (8 bytes).


Logo, a resposta correta seria: 1B - 2C - 3A.

                                                                                       Gabarito: Letra A

28. (CESPE / FUNPRESP-JUD - 2016) No banco de dados Oracle, cada tablespace armazena
    objetos de apenas um esquema específico.

Comentários:

Para finalizar, é importante destacar que não há relacionamento direto entre um tablespaces e
esquemas. Logo, objetos no mesmo esquema podem usar armazenamento em tablespaces
diferentes, e um tablespace pode conter dados de esquemas diferentes.


        Receita Federal (Analista Tributário) Fluência em Dados                                      84
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Errado

29. (Quadrix / CRN-9 - 2015) A SGA (System Global Area) pode ser definida como um grupo de
    estruturas de memória compartilhadas para uma instância ORACLE.

Comentários:

Trata-se de um grupo de estruturas de memória compartilhada que contém dados e informações
de controle para uma instância de banco de dados. Exemplos: cache de buffer do banco de dados e
áreas SQL compartilhadas.

                                                                                       Gabarito: Correto

30. (FGV / PGE-RO – 2015) O conceito de SYNONYM, amplamente empregado nas instalações
    Oracle, permite o estabelecimento de nomes alternativos para objetos. Esse comando é
    usualmente aplicado a:

   a) instâncias;
   b) servidores;
   c) tabelas;
   d) tablespaces;
   e) usuários.

Comentários:

Um sinônimo é um alias (apelido) para qualquer tabela, view, view materializada, sequência, stored
procedure, function, pacote, tipo, objeto de esquema de classe Java, um tipo de objeto definido pelo
usuário, ou outro sinônimo.

                                                                                       Gabarito: Letra C

31. (COSEAC / UFF - 2015) No banco de dados PostgreSQL, existe um gerenciador de conexões que
    deve estar rodando para que o banco aceite as conexões solicitadas. Este recurso é conhecido
    como:

   a) pg_connect.
   b) postmaster.
   c) pg_result.
   d) psql.
   e) pg_query.

Comentários:


        Receita Federal (Analista Tributário) Fluência em Dados                                      85
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

(a) Errado, essa é uma função que estabelece uma conexão entre um script PHP e um banco de
dados PostgreSQL; (b) Correto, esse é o processo responsável por gerenciar a conexão entre o
servidor de banco de dados e as aplicações clientes, bem como autenticar usuários e prover controle
de acesso; (c) Errado, essa é uma função que permite aos desenvolvedores acessar os resultados de
uma consulta enviada a um banco de dados PostgreSQL; (d) Errado, trata-se de uma interface de
linha de comando para interagir com bancos de dados PostgreSQL; (e) Errado, trata-se de uma
função do lado do servidor que permite executar consultas dinâmicas.

                                                                                       Gabarito: Letra B

32. (ESAF / MPDG – 2015) Em relação a Big Data e NoSQL, é correto afirmar que:

   a) os “3 Vs” principais do Big Data referem-se a Volume, Velocidade e Versatilidade de dados.

   b) na era do Big Data, as únicas estratégias eficientes para garantir a privacidade são
   consentimento individual, opção de exclusão e anonimização.

   c) o Hadoop, o mais conhecido e popular sistema para gestão de Big Data, foi criado pela IBM, a
   partir de sua ferramenta de Data Mining WEKA.

   d) o NoSQL é um sistema relacional, distribuído, em larga escala, muito eficaz na organização e
   análise de grande quantidade de dados.

   e) o Cassandra é um sistema de banco de dados baseado na abordagem NoSQL, originalmente
   criado pelo Facebook, no qual os dados são identificados por meio de uma chave.

Comentários:

(a) Errado, referem-se a Volume, Velocidade e Variedade; (b) Errado, a questão viajou e misturou
até alguns conceitos de proteção de dados; (c) Errado, ele foi criado pela Apache – é ridículo cobrar
isso em prova; (d) Errado, é um conjunto de bancos de dados não relacionais, distribuído, de larga
escala e muito eficaz na organização e análise de grande quantidade de dados; (e) Correto, ele
realmente é um sistema de banco de dados não-relacionado baseado em NoSQL criado pelo
Facebook no qual dados podem ser identificados por meio de uma chave.

                                                                                       Gabarito: Letra E

33. (FCC / DPE-SP - 2015) Sobre as estruturas de armazenamento do sistema gerenciador de banco
    de dados Oracle 11g é correto afirmar:

   a) Cada tablespace é mapeado em um único bloco de dados.
   b) Um datafile é mapeado em mais de um tablespace.


        Receita Federal (Analista Tributário) Fluência em Dados                                      86
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   c) Cada segmento possui uma única extensão (extent).
   d) Um tablespace pode ser composto por um ou mais segmentos.
   e) Uma extensão é mapeada em mais de um datafile.

Comentários:

(a) Errado, cada tablespace é mapeado em vários blocos de dados; (b) Errado, um datafile é
mapeado em apenas um tablespace; (c) Errado, cada segmento possui diversas extensões; (d)
Correto; (e) Errado, uma extensão é mapeada em apenas um datafile.

                                                                                       Gabarito: Letra D

34. (FCC / TRE-PB - 2015) No PostgreSQL, o tipo de dados numérico considerado meramente uma
    notação conveniente para definir colunas identificadoras únicas, semelhante à propriedade auto
    incremento em alguns Sistemas Gerenciadores de Banco de Dados, é o tipo:

   a) serial.
   b) smallint.
   c) byte.
   d) bit.
   e) blob.

Comentários:

                serial Inteiro de quatro bytes autoincrementável.
              smallint Inteiro de dois bytes com sinal.
                   bit Cadeia de bits de tamanho fixo.

        Receita Federal (Analista Tributário) Fluência em Dados                                      87
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Os tipos serial e smallserial não são tipos verdadeiros – são meramente uma conveniência de
notação para criar colunas de identificador exclusivo (semelhante ao tipo AUTO_INCREMENT
suportada por alguns outros bancos de dados). Não existem os tipos byte e blob.

                                                                                       Gabarito: Letra A

35. (IADES / TRE-PA - 2014) Um Sistema Gerenciador de Banco de Dados (SGBD) é um conjunto
    de softwares responsáveis pela administração de bases de dados. Há diversos tipos de SGBD,
    livres ou proprietários. Entre as alternativas, assinale a que apresenta o nome de um SGBD
    classificado como software livre.

   a) SQL Server.
   b) Oracle.
   c) Access.
   d) Informix.
   e) PostgreSQL

Comentários:

(a) Errado, ele pertence à Microsoft;
(b) Errado, ele pertence à Oracle;
(c) Errado, ele pertence à Microsoft;
(d) Errado, ele pertence à IBM;
(e) Correto, ele realmente é livre.

                                                                                       Gabarito: Letra E

36. (FCC / TRT 13PB - 2014) O SQL define dois tipos primários para caracteres: A e B. Estes tipos
    podem armazenar cadeias de caracteres com comprimento de até n caracteres, onde n é um
    número inteiro positivo. A tentativa de armazenar uma cadeia de caracteres mais longa em uma
    coluna de um destes tipos resulta em erro, a não ser que os caracteres excedentes sejam todos
    espaços; neste caso, a cadeia de caracteres será truncada em seu comprimento máximo. Se a
    cadeia de caracteres a ser armazenada for mais curta que o comprimento declarado, os valores
    do tipo B são completados com espaços; os valores do tipo A simplesmente armazenam a cadeia
    de caracteres mais curta.

   Os tipos de dados destinados a armazenar cadeias de caracteres no PostgreSQL 8.0, descritos
   como A e B no texto acima são, respectivamente,

   a) char(n) e character varying(n).
   b) character varying(n) e character(n).
   c) character(n) e char(n).
   d) varchar(n) e text(n).


        Receita Federal (Analista Tributário) Fluência em Dados                                      88
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   e) character varying(n) e varchar(n).

Comentários:

(a) char(n) e character varying(n).
(b) character varying(n) e character(n).
(c) character(n) e char(n).
(d) varchar(n) e text(n).
(e) character varying(n) e varchar(n).

                                                                                       Gabarito: Letra B

37. (FCC / TRF1 - 2014) O PostgreSQL disponibiliza para os usuários um amplo conjunto de tipos de
    dados nativos. Dentre os tipos para data e hora estão: time, timestamp, date e:

   a) bigdate.
   b) datetime.
   c) datetimeoffset.
   d) smalldatetime.
   e) interval.

Comentários:

(a) Errado, esse tipo não existe; (b) Errado, esse tipo não existe; (c) Errado, esse tipo não existe; (d)
Correto.

              interval Intervalo de tempo.


                                                                                       Gabarito: Letra E

38. (FCC / TCE-RS – 2014) O sistema gerenciador de bancos de dados PostgreSQL 9.1 admite
    diversos tipos de dados. Dentre eles, o tipo de dados:

   a) integer requer 8 bytes para seu armazenamento.
   b) boolean admite até 3 valores distintos.
   c) money requer 4 bytes para seu armazenamento.
   d) para armazenamento de endereços IPv4 não está disponível.
   e) smallint requer 2 bytes para seu armazenamento.

Comentários:

                integer Inteiro de quatro bytes com sinal.
                boolean Booleano lógico (true/false).

        Receita Federal (Analista Tributário) Fluência em Dados                                       89
        www.estrategiaconcursos.com.br                                                                113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                 money Montante de dinheiro com 8 bytes.
              smallint Inteiro de dois bytes com sinal.
                  cidr Endereço de rede IPv4 ou IPv6.


(a) Errado, requer 4 bytes; (b) Errado, admite apenas dois valores distintos; (c) Errado, requer 8
bytes; (d) Errado, está disponível por meio do tipo cidr; (e) Correto.

                                                                                           Gabarito: Letra E

39. (FCC / TRT-RJ - 2014) O sistema gerenciador de Bancos de Dados Oracle 11g armazena as
    tabelas de dicionário de dados na tablespace:

   a) TEMP.
   b) MAIN.
   c) SYSTEM.
   d) SYSAUX.
   e) UNDO.

Comentários:

             Este tablespace é criado automaticamente na criação do banco de dados. O Oracle o utiliza para
             gerenciar o banco de dados. Ele contém o dicionário de dados, que é o conjunto central de tabelas
             e views usadas como referência somente leitura para um banco de dados específico. Ele também
      SYSTEM contém várias tabelas e views que contêm informações administrativas sobre o banco de dados.
             Todos eles estão contidos no esquema SYS e podem ser acessados apenas pelo usuário SYS ou
             outros usuários administrativos com o privilégio necessário.


                                                                                           Gabarito: Letra C

40. (FCC / MPE-MA - 2013) Quando uma base de dados é criada no Sistema Gerenciador de Bancos
    de Dados Oracle, são criadas, automaticamente, duas contas administrativas, cujas
    denominações são:

   a) FILE e SNAME.
   b) FORCE e MAXLOG.
   c) SQLU e ROLL.
   d) SYS e SYSTEM.
   e) SID e SGA.

Comentários:

As contas de usuário administrativo SYS e SYSTEM são criadas automaticamente quando você
instala o Oracle. Ambas são criadas com a senha que você forneceu na instalação e ambos recebem
automaticamente a função de DBA (Database Administrator).


        Receita Federal (Analista Tributário) Fluência em Dados                                             90
        www.estrategiaconcursos.com.br                                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Letra D

41. (FUMARC / TJM-MG - 2013) Um banco de dados Oracle 10g consiste em uma ou mais unidades
    de armazenamento lógicas denominadas _______________. SYSTEM e SYSAUX são exemplos
    dessas estruturas:

   a) Data Blocks
   b) Extents
   c) Segments
   d) Tablespaces

Comentários:

Um banco de dados é dividido em unidades lógicas de armazenamento chamadas tablespaces, que
agrupam estruturas lógicas relacionadas (como tabelas, visualizações e outros objetos de banco de
dados). Por exemplo, todos os objetos de uma aplicação podem ser agrupados em um único
tablespace para simplificar as operações de manutenção. Um tablespace consiste em um ou mais
arquivos de dados físicos.

Os objetos de banco de dados atribuídos a um tablespace são armazenados nos arquivos de dados
físicos desse tablespace. Quando você cria um banco de dados Oracle, alguns tablespaces já
existem, como SYSTEM e SYSAUX.

                                                                                       Gabarito: Letra D

42. (FCC / TRE-CE - 2012) No banco de dados Oracle 10g, os segmentos:

   a) são as unidades mais básicas de armazenamento dentro das tuplas.
   b) são as menores unidades de armazenamento, também chamados tablespaces.
   c) estão um nível acima na hierarquia dos agrupamentos lógicos ou grids.
   d) são agrupados em uma ou mais estruturas lógicas que são as views.
   e) contêm todos os dados de um agrupamento lógico dentro de um tablespace.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      91
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Segmentos contêm todos os dados de um agrupamento lógico dentro de um tablespace. Um
tablespace é composto de diversos segmentos.

                                                                                       Gabarito: Letra E

43. (FCC / TST - 2012) Um banco de dados criado por meio do SGBD dados Oracle, versão 11g, tem
    uma estrutura lógica e física peculiares, tendo como característica:

   a) um segmento contém exatamente uma extensão.
   b) o tablespace não comporta mais de um datafile.
   c) um mesmo tablespace pode ser utilizado por vários bancos de dados, simultaneamente.
   d) o banco de dados pode conter um ou mais tablespaces.
   e) um segmento pode ser dividido em vários tablespaces.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      92
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

(a) Errado, um segmento pode conter diversas extensões; (b) Errado, um tablespace comporta
diversos datafiles; (c) Errado, um tablespace pertence a apenas um banco de dados; (d) Errado, ele
deve conter dois ou mais tablespaces (SYSTEM e SYSAUX); (e) Errado, um segmento pertence a
apenas um tablespace.

Então não há resposta correta, professor? Sendo rigoroso, não! No entanto, vamos ser bonzinhos
com o examinador: é comum falar um banco de dados pode conter um ou mais tablespaces e esse
foi o gabarito definitivo. É que o examinador esqueceu que deve existir ao menos dois, por padrão.

                                                                                       Gabarito: Letra D

44. (FCC / TER-PE - 2011) Contém apenas estruturas de armazenamento lógico do banco de dados
    Oracle:

   a) data blocks, extents e segments.
   b) datafiles, extents e segments.
   c) datafiles, redo log files e control files.
   d) datafiles, data blocks e control files.
   e) control files, redo log files e data blocks.

Comentários:

Trata-se de data blocks, extents e segments.

                                                                                       Gabarito: Letra A

45. (CESPE / EMBASA - 2010) SGA (System Global Area) é uma área de memória alocada pelo
    Oracle quando um banco de dados é iniciado em um servidor de banco de dados.


        Receita Federal (Analista Tributário) Fluência em Dados                                      93
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Comentários:

Todas as vezes que o Oracle é inicializado, um grupo de buffers de memória do System Global Area
(SGA) é alocado e alguns processos que permanecem em background são inicializados. A
combinação desses buffers de memória e dos processos em background forma uma instância
Oracle.

                                                                                       Gabarito: Correto


46.(FCC / MPE-SE - 2010) Strings de caracteres de tamanho fixo são armazenados em um banco
   de dados ORACLE por meio do tipo de dados:

   a) char ou nchar.
   b) varchar ou nvarchar.
   c) char ou varchar2.
   d) varchar ou varchar2.
   e) nchar ou nvarchar.

Comentários:

(a) char ou nchar.
(b) varchar ou nvarchar.
(c) char ou varchar2.
(d) varchar ou varchar2.
(e) nchar ou nvarchar.

                                                                                       Gabarito: Letra A

47. (MOVENS / Prefeitura de Manaus-AM - 2010) Quando o usuário faz um commit, as mudanças
    são feitas no banco de dados Oracle. Assinale a opção que apresenta o local em que essas
    mudanças são feitas, inicialmente:

   a) Redo log File.
   b) Control File.
   c) Password File.
   d) DataFile.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      94
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

Arquivos de Log de Redo Online: todo banco de dados Oracle tem um log de redo online, que é um
conjunto de dois ou mais arquivos de redo log online. Ele é composto de entradas de redo (também
chamadas de registros de redo log), que registram todas as alterações feitas nos dados.

                                                                                       Gabarito: Letra A

48.(FCC / SEFAZ-SP - 2009) Um database Oracle é constituído de um ou mais:

   a) datafiles, estruturas físicas de armazenamento, e cada datafile consiste de um ou mais
   tablespaces, unidades lógicas de armazenamento.

   b) datafiles, unidades lógicas de armazenamento, e cada datafile consiste de um ou mais
   tablespaces, estruturas físicas de armazenamento.

   c) tablespaces, unidades lógicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, estruturas físicas de armazenamento.

   d) tablespaces, estruturas físicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, unidades lógicas de armazenamento.

   e) tablespaces, unidades lógicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, também unidades lógicas de armazenamento.

Comentários:

Conforme podemos ver pela imagem, o Oracle é constituído de um ou mais tablespaces (unidades
lógicas de armazenamento) e cada tablespace é constituída de um ou mais Data Files (unidades
físicas de armazenamento).

        Receita Federal (Analista Tributário) Fluência em Dados                                      95
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                                                                       Gabarito: Letra C

49.(FCC / TCE-AL - 2008) Na estrutura lógica do Oracle NÃO estão contidos:

   a) extents
   b) data blocks
   c) data files
   d) schemas
   e) tablespaces

Comentários:

Todos estão contidos na estrutura lógica (inclusive schema), exceto Data Files.

                                                                                       Gabarito: Letra C

50. (FCC / TRT-SP - 2008) A estrutura lógica de armazenamento nas bases de dados Oracle é
    representada na sequência hierárquica de:

   a) segmentos, blocos de dados e extensões.
   b) segmentos, extensões e blocos de dados.
   c) extensões, segmentos e blocos de dados.
   d) extensões, blocos de dados e segmentos.
   e) blocos de dados, segmentos e extensões.

Comentários:

        Receita Federal (Analista Tributário) Fluência em Dados                                      96
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

A estrutura lógica de armazenamento nas bases de dados Oracle é representada na sequência
hierárquica de segmentos, extensões e blocos de dados.

                                                                                       Gabarito: Letra B

51. (FCC / TCE-AL - 2008) Quando um banco de dados Oracle é iniciado será alocado para os
    processos background:

   a) um schema.
   b) um ou mais redo log files.
   c) um ou mais control files.
   d) uma tablespace.
   e) uma área global de sistema.

Comentários:

Todas as vezes que o Oracle é inicializado, um grupo de buffers de memória do System Global Area
(SGA) é alocado e alguns processos que permanecem em background são inicializados. A
combinação desses buffers de memória e dos processos em background forma uma instância
Oracle. Para que o banco de dados não se confunda, cada instância é identificada pelo que é
conhecido como identificador de sistema (SID – System IDentifier).

                                                                                       Gabarito: Letra E

52. (FCC / TCE-AL - 2008) Todos os dados de uma tabela Oracle são armazenados em extents de
    um:

   a) data segment
   b) index segment


        Receita Federal (Analista Tributário) Fluência em Dados                                      97
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   c) temporary segment
   d) rollback segment
   e) redlog segment

Comentários:

Todos os dados de uma tabela Oracle são armazenados em extents de um segmento de dados.

                                                                                       Gabarito: Letra A

53. (FCC / TRF-5 - 2003) O Oracle é um SGBD - Sistema de Gerenciamento de Banco de Dados -

   a) em rede
   b) hierárquico.
   c) distribuído.
   d) relacional.
   e) dimensional.

Comentários:

O Oracle é um SGBD relacional!

                                                                                       Gabarito: Letra D

        Receita Federal (Analista Tributário) Fluência em Dados                                      98
        www.estrategiaconcursos.com.br                                                               113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

                                      LISTA DE QUESTÕES

1. (FGV / SEFAZ-MT - 2023) O Mongo DB é citado frequentemente como um dos bancos de dados
   não relacionais (NoSQL) mais utilizados no mundo.

   Assinale a opção que representa o elemento disponível nesse sistema que mais se assemelha à
   ideia de tabela relacional.

   a) Cluster.
   b) Collection
   c) Database.
   d) Document.
   e) Index.

2. (Quadrix / CFO-DF - 2022) No banco de dados Oracle 11g, uma entrada é gravada nos arquivos
   de redo log quando ocorre uma gravação de dados nas tabelas.

3. (FUNDATEC / AGERGS - 2022) Classificado como um programa de banco de dados NoSQL, o
   MongoDB é um banco de dados de código aberto e de alta performance, que se caracteriza por
   não possuir esquemas, ser escrito em C++, ser multiplataforma e ser formado por um conjunto
   de aplicativos JSON. O MongoDB é um banco de dados NoSQL:

   a) Orientado a colunas, semelhante ao banco de dados BigTable do Google.

   b) Orientado a documentos, com estruturas flexíveis que podem ser obtidas por meio de dados
   semiestruturados, como o formato XML e JSON.

   c) Orientado a objetos e possui conceitos similares ao do modelo relacional, como a criação de
   linhas e colunas.

   d) Do tipo chave-valor, que usa uma tabela hash na qual há uma chave única e um indicador de
   um dado ou de um item em particular.

   e) Orientado a grafos, semelhante ao banco de dados Neo4J.

4. (CESPE / ANP - 2022) Nos sistemas orientados a documentos NoSQL, como o MongoDB, os
   novos documentos devem ter elementos de dados que já existem em documentos atuais da
   coleção.

5. (FGV / CGU - 2022) Sobre o MongoDB v5.0, considere as afirmativas a seguir.

        Receita Federal (Analista Tributário) Fluência em Dados                               99
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   I. Todos os documentos de uma coleção (collection) devem possuir o mesmo número de campos
   (fields).
   II. Um campo presente em diferentes documentos de uma collection pode ter diferentes tipos
   de dados ao longo dos documentos.
   III. MongoDB oferece a capacidade de validar esquemas durante operações de inserção
   (insertion) e atualização (update).

   Está correto o que se afirma em:

   a) somente I;
   b) somente III;
   c) somente I e II;
   d) somente II e III;
   e) I, II e III.

6. (CESPE / SERPRO – 2021) Uma coleção e um documento, no MongoDB, são equivalentes à
   tabela e à linha, no Modelo Relacional de Dados.

7. (IBFC / IBGE - 2021) Basicamente existem atualmente duas grandes categorias de Banco de
   Dados no mercado que são os Relacionais e os Não-Relacionais. Assinale a alternativa que
   identifica corretamente dois Bancos de Dados Não-Relacionais.

   a) Oracle e MongoDB
   b) MongoDB e NoSQL
   c) Oracle e NoSQL
   d) SQL Server e Oracle
   e) MongoDB e SQL Server

8. (IF-Sul Rio-Grandense/ IF-Sul Rio-Grandense – 2021) Sobre o Banco de Dados MongoDB,
   analise as afirmações abaixo:

   I. MongoDB é um banco de dados baseado em documentos, e esses documentos são codificados
   como BSON – um formato binário do JSON.
   II. No MongoDB, não existem tabelas, chaves primárias e nem chaves estrangeiras.
   III. No MongoDB, o equivalente a cada linha de uma tabela do modelo relacional chama-se
   Collections.

   Está(ão) correta(s) a(s) afirmativa(s)

   a) I, apenas.
   b) I e II, apenas.
   c) II e III, apenas.
   d) I, II e III.

        Receita Federal (Analista Tributário) Fluência em Dados                           100
        www.estrategiaconcursos.com.br                                                    113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

9. (IF-Sul Rio-Grandense/ IF-Sul Rio-Grandense – 2021) Sobre o Banco de Dados MongoDB,
   analise as afirmações abaixo:

   I. MongoDB é um banco de dados baseado em documentos, e esses documentos são codificados
   como BSON – um formato binário do JSON.
   II. No MongoDB, não existem tabelas, chaves primárias e nem chaves estrangeiras.
   III. No MongoDB, o equivalente a cada linha de uma tabela do modelo relacional chama-se
   Collections.

   Está(ão) correta(s) a(s) afirmativa(s)

   a) I, apenas.
   b) I e II, apenas.
   c) II e III, apenas.
   d) I, II e III.

10. (AOCP / MJSP - 2020) Em um banco de dados MongoDB, uma projeção apresenta quais
    campos, em um documento, são incluídos ou excluídos da saída final. Um administrador de
    banco de dados MongoDB do MJSP necessita realizar uma projeção. Sabendo que tal projeção
    assume a forma de uma expressão JSON que consiste em pares, assinale a alternativa que
    apresenta corretamente esses pares.

   a) key:value.
   b) key:document.
   c) value:document.
   d) primarykey:document.
   e) primarykey:foreingkey.

11. (AOCP / MJSP - 2020) O Cassandra DB é um banco NoSQL baseado em um esquema flexível.
    Sabendo disso, assinale a alternativa que apresenta o nome do elemento do Cassandra DB que
    seja equivalente ao ‘esquema’ de um banco de dados relacional:

   a) Family.
   b) Widespace.
   c) Keyspace.
   d) Collection.
   e) Tablespace.

12. (IBADE / Prefeitura de Jaru – RO - 2019) Ultimamente há um movimento que propõe novas
    estruturas de bancos de dados “não relacionais”, chamado NoSql. O banco que pode ser
    considerado NoSql é:

   a) Mysql.
   b) Postgree.

        Receita Federal (Analista Tributário) Fluência em Dados                            101
        www.estrategiaconcursos.com.br                                                     113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   c) Oracle.
   d) MongoDB.
   e) DB 2.

13. (CS-UFG / IF Goiano - 2019) Sistemas de Gerenciamento de Bancos de Dados (SGBDs)
    oferecem serviços para armazenamento de dados. MySQL, SQL Server e PostgreSQL são
    alguns exemplos. Especificamente, o PostgreSQL:

   a) impede a criação de índices em dados do tipo texto e numérico.
   b) oferece os tipos de dados JSON e XML.
   c) é uma tecnologia que foi criada há menos de uma década.
   d) é incompatível com uso em nuvem (cloud computing).

14. (FEPESE / CELESC - 2019) Analise as afirmativas abaixo sobre o Apache Cassandra.

   1. Possui uma arquitetura descentralizada, de modo que todo nó no cluster é idêntico.
   2. É um sistema gerenciador de bancos de dados do tipo NoSQL.
   3. A replicação das atualizações ocorre necessariamente de forma síncrona por todo o cluster.

   Assinale a alternativa que indica todas as afirmativas corretas.

   a) É correta apenas a afirmativa 1.
   b) São corretas apenas as afirmativas 1 e 2.
   c) São corretas apenas as afirmativas 1 e 3.
   d) São corretas apenas as afirmativas 2 e 3.
   e) São corretas as afirmativas 1, 2 e 3.

15. (CS-UFG / UFG - 2018) PostgreSQL é

   a) um algoritmo de conteúdos.
   b) uma linguagem de programação.
   c) um gerenciador de banco de dados.
   d) um servidor de páginas web.

16. (UFPR / UFPR - 2018) Em relação à TABLESPACE no Oracle e no PostgreSQL, é correto afirmar:

   a) As “tablespace” são arquivos de índice que organizam os dados das tabelas segundo uma
   chave e ordem definidas pelo usuário.

   b) No PostgreSQL, as tablespace são compostas por arquivos físicos indicados na cláusula
   DATAFILE do comando CREATE TABLESPACE.

   c) Em PostgreSQL, os objetos são armazenados em um único tablespace.

        Receita Federal (Analista Tributário) Fluência em Dados                               102
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   d) No Oracle, a tablespace temporária padrão do usuário é utilizada para armazenar os
   segmentos undo.

   e) As “tablespace” dividem os bancos de dados fisicamente.

17. (QUADRIX / CFBio - 2018) O PostgreSQL é um sistema gerenciador de banco de dados que
    oferece suporte para chaves estrangeiras e triggers.

18. (QUADRIX / CFBio - 2018) Com o programa createuser, é possível criar um novo usuário no
    PostgreSQL via linha de comando.

19. (FAURGS / BANRISUL - 2018) Sobre as tablespaces criadas automaticamente durante o
    processo de criação de um banco de dados no Oracle 11G, é correto afirmar que:

   a) UNDO contém as tabelas utilizadas por ferramentas do próprio banco de dados.
   b) USERS contém informações de recuperação de transações.
   c) SYSAUX contém dados temporários, criados durante a execução de instruções SQL.
   d) SYSTEM contém o Dicionário de Dados e todas as informações para o gerenciamento do
   banco de dados.
   e) TEMP é a tabela padrão que contém todos os objetos criados pelo usuário.

20. (FGV / BANESTES - 2018) Nos bancos de dados Oracle, o comando SYNONYM estabelece:

   a) um nome alternativo para uma tabela ou view;
   b) um novo tipo de dados definido pelo usuário;
   c) uma chave identificadora alternativa numa tabela;
   d) uma equivalência entre dois usuários;
   e) uma equivalência entre duas stored procedures.

21. (CCV-UFC / UFC - 2018) Sob qual tipo de licença o banco de dados PostgreSQL é lançado
    atualmente?

   a) GPL license.
   b) BSD license.
   c) LGPL license.
   d) X11(MIT) license.
   e) PostgreSQL license.

22. (FGV / IBGE - 2017) Bancos de Dados NoSQL podem armazenar dados em diversos formatos
    não relacionais, como documentos compostos por pares de campo-e-valor (field-and-value),
    conforme a estrutura exemplificada a seguir.

        Receita Federal (Analista Tributário) Fluência em Dados                          103
        www.estrategiaconcursos.com.br                                                   113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   O Banco de Dados NoSQL utilizado para armazenar documentos compostos por pares campo-
   e-valor, no formato BSON (JSON-like), é o:

   a) OpenLink Virtuoso;
   b) Neo4j;
   c) Apache HBase;
   d) MongoDB;
   e) Titan.

23. (FCC / TRT23-MT - 2016) São vários os tipos de dados numéricos no PostgreSQL. O tipo:

   a) smallint tem tamanho de armazenamento de 1 byte, que permite armazenar a faixa de valores
   inteiros de −128 a 127.

   b) bigint é a escolha usual para números inteiros, pois oferece o melhor equilíbrio entre faixa de
   valores, tamanho de armazenamento e desempenho.

   c) integer tem tamanho de armazenamento de 4 bytes e pode armazenar valores na faixa de
   −32768 a 32767.

   d) numeric pode armazenar números com precisão variável de, no máximo, 100 dígitos.

   e) serial é um tipo conveniente para definir colunas identificadoras únicas, semelhante à
   propriedade auto incremento.

24. (IESES / BAHIAGÁS - 2016) Qual a ferramenta interativa de linha de comando padrão utilizado
    para acessar o SGBD PostgreSQL 9.1?

   a) mysqld
   b) sqlplus
   c) pgcmd
   d) psql
   e) connect

25. (IESES / BAHIAGÁS - 2016) Qual linguagem procedural utilizada para a criação de funções e
    gatilhos no PostgreSQL 9.1?

   a) PL/SQL


        Receita Federal (Analista Tributário) Fluência em Dados                                   104
        www.estrategiaconcursos.com.br                                                            113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   b) MySQL
   c) PL/pgSQL
   d) SQL
   e) Transact-SQL

26. (IESES / BAHIAGÁS - 2016) Qual tipo de dado numérico é suportado pelo PostgreSQL 9.1?

   a) var
   b) time
   c) blob
   d) numeric
   e) byte

27. (IBFC / EBSERH - 2016) Relacione os tipos de dados numéricos do Banco de Dados PostgreSQL
                                                       ==219a34==

    9.5 da coluna da esquerda com a respectiva quantidade de bytes da coluna da direita:

   (1) real
   (2) smallserial
   (3) double precision

   (A) 8 bytes
   (B) 4 bytes
   (C) 2 bytes.

   a) 1B - 2C - 3A
   b) 1C - 2B - 3A
   c) 1B - 2A - 3C
   d) 1A - 2C - 3B
   e) 1C - 2A - 3B

28. (CESPE / FUNPRESP-JUD - 2016) No banco de dados Oracle, cada tablespace armazena
    objetos de apenas um esquema específico.

29. (Quadrix / CRN-9 - 2015) A SGA (System Global Area) pode ser definida como um grupo de
    estruturas de memória compartilhadas para uma instância ORACLE.

30. (FGV / PGE-RO – 2015) O conceito de SYNONYM, amplamente empregado nas instalações
    Oracle, permite o estabelecimento de nomes alternativos para objetos. Esse comando é
    usualmente aplicado a:

   a) instâncias;
   b) servidores;
   c) tabelas;
   d) tablespaces;

        Receita Federal (Analista Tributário) Fluência em Dados                             105
        www.estrategiaconcursos.com.br                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   e) usuários.

31. (COSEAC / UFF - 2015) No banco de dados PostgreSQL, existe um gerenciador de conexões que
    deve estar rodando para que o banco aceite as conexões solicitadas. Este recurso é conhecido
    como:

   a) pg_connect.
   b) postmaster.
   c) pg_result.
   d) psql.
   e) pg_query.

32. (ESAF / MPDG – 2015) Em relação a Big Data e NoSQL, é correto afirmar que:

   a) os “3 Vs” principais do Big Data referem-se a Volume, Velocidade e Versatilidade de dados.

   b) na era do Big Data, as únicas estratégias eficientes para garantir a privacidade são
   consentimento individual, opção de exclusão e anonimização.

   c) o Hadoop, o mais conhecido e popular sistema para gestão de Big Data, foi criado pela IBM, a
   partir de sua ferramenta de Data Mining WEKA.

   d) o NoSQL é um sistema relacional, distribuído, em larga escala, muito eficaz na organização e
   análise de grande quantidade de dados.

   e) o Cassandra é um sistema de banco de dados baseado na abordagem NoSQL, originalmente
   criado pelo Facebook, no qual os dados são identificados por meio de uma chave.

33. (FCC / DPE-SP - 2015) Sobre as estruturas de armazenamento do sistema gerenciador de banco
    de dados Oracle 11g é correto afirmar:

   a) Cada tablespace é mapeado em um único bloco de dados.
   b) Um datafile é mapeado em mais de um tablespace.
   c) Cada segmento possui uma única extensão (extent).
   d) Um tablespace pode ser composto por um ou mais segmentos.
   e) Uma extensão é mapeada em mais de um datafile.

34. (FCC / TRE-PB - 2015) No PostgreSQL, o tipo de dados numérico considerado meramente uma
    notação conveniente para definir colunas identificadoras únicas, semelhante à propriedade auto
    incremento em alguns Sistemas Gerenciadores de Banco de Dados, é o tipo:

   a) serial.
   b) smallint.
   c) byte.

        Receita Federal (Analista Tributário) Fluência em Dados                                106
        www.estrategiaconcursos.com.br                                                         113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   d) bit.
   e) blob.

35. (IADES / TRE-PA - 2014) Um Sistema Gerenciador de Banco de Dados (SGBD) é um conjunto
    de softwares responsáveis pela administração de bases de dados. Há diversos tipos de SGBD,
    livres ou proprietários. Entre as alternativas, assinale a que apresenta o nome de um SGBD
    classificado como software livre.

   a) SQL Server.
   b) Oracle.
   c) Access.
   d) Informix.
   e) PostgreSQL

36. (FCC / TRT 13PB - 2014) O SQL define dois tipos primários para caracteres: A e B. Estes tipos
    podem armazenar cadeias de caracteres com comprimento de até n caracteres, onde n é um
    número inteiro positivo. A tentativa de armazenar uma cadeia de caracteres mais longa em uma
    coluna de um destes tipos resulta em erro, a não ser que os caracteres excedentes sejam todos
    espaços; neste caso, a cadeia de caracteres será truncada em seu comprimento máximo. Se a
    cadeia de caracteres a ser armazenada for mais curta que o comprimento declarado, os valores
    do tipo B são completados com espaços; os valores do tipo A simplesmente armazenam a cadeia
    de caracteres mais curta.

   Os tipos de dados destinados a armazenar cadeias de caracteres no PostgreSQL 8.0, descritos
   como A e B no texto acima são, respectivamente,

   a) char(n) e character varying(n).
   b) character varying(n) e character(n).
   c) character(n) e char(n).
   d) varchar(n) e text(n).
   e) character varying(n) e varchar(n).

37. (FCC / TRF1 - 2014) O PostgreSQL disponibiliza para os usuários um amplo conjunto de tipos de
    dados nativos. Dentre os tipos para data e hora estão: time, timestamp, date e:

   a) bigdate.
   b) datetime.
   c) datetimeoffset.
   d) smalldatetime.
   e) interval.

38. (FCC / TCE-RS – 2014) O sistema gerenciador de bancos de dados PostgreSQL 9.1 admite
    diversos tipos de dados. Dentre eles, o tipo de dados:

        Receita Federal (Analista Tributário) Fluência em Dados                               107
        www.estrategiaconcursos.com.br                                                        113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   a) integer requer 8 bytes para seu armazenamento.
   b) boolean admite até 3 valores distintos.
   c) money requer 4 bytes para seu armazenamento.
   d) para armazenamento de endereços IPv4 não está disponível.
   e) smallint requer 2 bytes para seu armazenamento.

39. (FCC / TRT-RJ - 2014) O sistema gerenciador de Bancos de Dados Oracle 11g armazena as
    tabelas de dicionário de dados na tablespace:

   a) TEMP.
   b) MAIN.
   c) SYSTEM.
   d) SYSAUX.
   e) UNDO.

40. (FCC / MPE-MA - 2013) Quando uma base de dados é criada no Sistema Gerenciador de Bancos
    de Dados Oracle, são criadas, automaticamente, duas contas administrativas, cujas
    denominações são:

   a) FILE e SNAME.
   b) FORCE e MAXLOG.
   c) SQLU e ROLL.
   d) SYS e SYSTEM.
   e) SID e SGA.

41. (FUMARC / TJM-MG - 2013) Um banco de dados Oracle 10g consiste em uma ou mais unidades
    de armazenamento lógicas denominadas _______________. SYSTEM e SYSAUX são exemplos
    dessas estruturas:

   a) Data Blocks
   b) Extents
   c) Segments
   d) Tablespaces

42. (FCC / TRE-CE - 2012) No banco de dados Oracle 10g, os segmentos:

   a) são as unidades mais básicas de armazenamento dentro das tuplas.
   b) são as menores unidades de armazenamento, também chamados tablespaces.
   c) estão um nível acima na hierarquia dos agrupamentos lógicos ou grids.
   d) são agrupados em uma ou mais estruturas lógicas que são as views.
   e) contêm todos os dados de um agrupamento lógico dentro de um tablespace.

43. (FCC / TST - 2012) Um banco de dados criado por meio do SGBD dados Oracle, versão 11g, tem
    uma estrutura lógica e física peculiares, tendo como característica:

        Receita Federal (Analista Tributário) Fluência em Dados                            108
        www.estrategiaconcursos.com.br                                                     113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   a) um segmento contém exatamente uma extensão.
   b) o tablespace não comporta mais de um datafile.
   c) um mesmo tablespace pode ser utilizado por vários bancos de dados, simultaneamente.
   d) o banco de dados pode conter um ou mais tablespaces.
   e) um segmento pode ser dividido em vários tablespaces.

44. (FCC / TER-PE - 2011) Contém apenas estruturas de armazenamento lógico do banco de dados
    Oracle:

   a) data blocks, extents e segments.
   b) datafiles, extents e segments.
   c) datafiles, redo log files e control files.
   d) datafiles, data blocks e control files.
   e) control files, redo log files e data blocks.

45. (CESPE / EMBASA - 2010) SGA (System Global Area) é uma área de memória alocada pelo
    Oracle quando um banco de dados é iniciado em um servidor de banco de dados.

46.(FCC / MPE-SE - 2010) Strings de caracteres de tamanho fixo são armazenados em um banco
   de dados ORACLE por meio do tipo de dados:

   a) char ou nchar.
   b) varchar ou nvarchar.
   c) char ou varchar2.
   d) varchar ou varchar2.
   e) nchar ou nvarchar.

47. (MOVENS / Prefeitura de Manaus-AM - 2010) Quando o usuário faz um commit, as mudanças
    são feitas no banco de dados Oracle. Assinale a opção que apresenta o local em que essas
    mudanças são feitas, inicialmente:

   a) Redo log File.
   b) Control File.
   c) Password File.
   d) DataFile.

48.(FCC / SEFAZ-SP - 2009) Um database Oracle é constituído de um ou mais:

   a) datafiles, estruturas físicas de armazenamento, e cada datafile consiste de um ou mais
   tablespaces, unidades lógicas de armazenamento.

   b) datafiles, unidades lógicas de armazenamento, e cada datafile consiste de um ou mais
   tablespaces, estruturas físicas de armazenamento.

        Receita Federal (Analista Tributário) Fluência em Dados                             109
        www.estrategiaconcursos.com.br                                                      113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

   c) tablespaces, unidades lógicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, estruturas físicas de armazenamento.

   d) tablespaces, estruturas físicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, unidades lógicas de armazenamento.

   e) tablespaces, unidades lógicas de armazenamento, e cada tablespace consiste de um ou mais
   datafiles, também unidades lógicas de armazenamento.

49.(FCC / TCE-AL - 2008) Na estrutura lógica do Oracle NÃO estão contidos:

   a) extents
   b) data blocks
   c) data files
   d) schemas
   e) tablespaces

50. (FCC / TRT-SP - 2008) A estrutura lógica de armazenamento nas bases de dados Oracle é
    representada na sequência hierárquica de:

   a) segmentos, blocos de dados e extensões.
   b) segmentos, extensões e blocos de dados.
   c) extensões, segmentos e blocos de dados.
   d) extensões, blocos de dados e segmentos.
   e) blocos de dados, segmentos e extensões.

51. (FCC / TCE-AL - 2008) Quando um banco de dados Oracle é iniciado será alocado para os
    processos background:

   a) um schema.
   b) um ou mais redo log files.
   c) um ou mais control files.
   d) uma tablespace.
   e) uma área global de sistema.

52. (FCC / TCE-AL - 2008) Todos os dados de uma tabela Oracle são armazenados em extents de
    um:

   a) data segment
   b) index segment
   c) temporary segment
   d) rollback segment
   e) redlog segment

        Receita Federal (Analista Tributário) Fluência em Dados                              110
        www.estrategiaconcursos.com.br                                                       113

                                    


---

  Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
  Aula 12

53. (FCC / TRF-5 - 2003) O Oracle é um SGBD - Sistema de Gerenciamento de Banco de Dados -

   a) em rede
   b) hierárquico.
   c) distribuído.
   d) relacional.
   e) dimensional.

        Receita Federal (Analista Tributário) Fluência em Dados                              111
        www.estrategiaconcursos.com.br                                                       113

                                    


---

 Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
 Aula 12

                                               GABARITO

1. LETRA B                                                   28. ERRADO
2. CORRETO                                                   29. CORRETO
3. LETRA B                                                   30. LETRA C
4. ERRADO                                                    31. LETRA B
5. LETRA D                                                   32. LETRA E
6. CORRETO                                                   33. LETRA D
7. LETRA B                                                   34. LETRA A
8. LETRA B                                                   35. LETRA E
9. LETRA B                                                   36. LETRA B
10. LETRA A                                                  37. LETRA E
11. LETRA C                                                  38. LETRA E
12. LETRA D                                                  39. LETRA C
13. LETRA B                                                  40. LETRA D
14. LETRA B                                                  41. LETRA D
15. LETRA C                                                  42. LETRA E
16. LETRA E                                                  43. LETRA D
17. CORRETO                                                  44. LETRA A
18. CORRETO                                                  45. CORRETO
19. LETRA D                                                  46.LETRA A
20. LETRA A                                                  47. LETRA A
21. LETRA E                                                  48.LETRA C
22. LETRA D                                                  49.LETRA C
23. LETRA E                                                  50. LETRA B
24. LETRA D                                                  51. LETRA E
25. LETRA C                                                  52. LETRA A
26. LETRA D                                                  53. LETRA D
27. LETRA A

       Receita Federal (Analista Tributário) Fluência em Dados                        112
       www.estrategiaconcursos.com.br                                                 113

                                   


---

---
