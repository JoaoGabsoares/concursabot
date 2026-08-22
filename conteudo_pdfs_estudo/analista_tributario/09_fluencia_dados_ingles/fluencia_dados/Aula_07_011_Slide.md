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
arquivo_origem: Aula 07_011_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: MODELAGEM
---

# MODELAGEM

MODELAGEM
FÍSICA


                                                 Prof. Raphael Lacerda

            


---

       Modelo Físico

Prof. Raphael Lacerda
                        


---

       Índices

Prof. Raphael Lacerda
                        


---

       Índices

Prof. Raphael Lacerda
                        


---

       Views

Prof. Raphael Lacerda
                        


---

       Triggers

Prof. Raphael Lacerda
                        


---

       Resume aí!

Prof. Raphael Lacerda
                        


---

       pra dizer que não
       avisei!

Prof. Raphael Lacerda
                        


---

MODELAGEM                                          https://questoes.estrategiacon
                                                   cursos.com.br/cadernos/7b27

FÍSICA
                                                   cf54-0657-4db3-8d06-f80522
                                                   2f843b


QUESTÕES

                                                 Prof. Raphael Lacerda

            


---

       FCC/SANASA/2019
       Um proprietário A de uma tabela T quer que uma outra conta B seja
       capaz de recuperar apenas alguns campos de T, então A pode criar
       um mecanismo M de T que inclua apenas aqueles atributos e, então,
       conceder SELECT em M para B. O mesmo se aplica para limitar B a
       recuperar apenas certas tuplas de T; um mecanismo M' pode ser
       criado pela deﬁnição de M por meio de uma consulta que selecione
       apenas aquelas tuplas de T que A deseja permitir que B acesse.

Prof. Raphael Lacerda
                             


---

       FCC/SANASA/2019
       O mecanismo          referenciado          pela         situação   descrita   refere-se,
       corretamente, à


       A GRANT.
       B visão.
       C esquema.
       D REVOKE.
       E polinstanciação.

Prof. Raphael Lacerda
                                  


---

       FUB/2018
       Uma view materializada armazena apenas a consulta que deﬁne e
       apresenta o resultado sempre atualizado de todas as operações de
       deﬁnição de dados DDL.

Prof. Raphael Lacerda
                             


---

       cespe S2!

       A diferença entre materialized view e view comum em um banco de
       dados é o fato de que a primeira é armazenada em cache como uma
       tabela física, enquanto a segunda existe apenas virtualmente.

Prof. Raphael Lacerda
                             


---

       Pref Boa Vista / 2019
       Em bancos de dados SQL, um recurso é utilizado como um tipo
       especial de procedimento armazenado, que é executado sempre que
       há uma tentativa de modiﬁcar os dados de uma tabela que é
       protegida por ele, antes ou depois das operações de INSERT,
       UPDATE e DELETE de registros. Esse recurso é denominado:


       A checkpoint     B rollback              C trigger           D commit

Prof. Raphael Lacerda
                               


---

       BASA/2018
       Considere que, em um modelo relacional, há duas tabelas bem formadas
       denominadas Pessoa e Projeto. Os atributos de Pessoa são CPF (PK), nome,
       endereço e o código do projeto no qual ela trabalha (FK); os atributos de
       Projeto são código (PK), título e data de início. Considere também que existe
       uma regra de negócio que determina que, em um projeto, não possam
       trabalhar mais do que 15 pessoas.


       Um gatilho, criado para garantir que essa regra de negócio seja
       permanentemente observada, deve ser programado para ser executado

Prof. Raphael Lacerda
                                 


---

       BASA/2018
       A antes de cada inserção ou alteração de linhas na tabela Pessoa
       B antes de cada inserção ou remoção de linhas na tabela Projeto
       C antes de cada inserção ou alteração de linhas na tabela Projeto
       D depois de cada inserção de linhas na tabela Pessoa
       E depois de cada alteração de linhas na tabela Projeto

Prof. Raphael Lacerda
                                  


---

       STJ/2018
       A diferença entre materialized view e view comum em um banco de
       dados é o fato de que a primeira é armazenada em cache como uma
       tabela física, enquanto a segunda existe apenas virtualmente.

Prof. Raphael Lacerda
                             


---

       FUB/2018
       Uma view materializada armazena apenas a consulta que deﬁne e
       apresenta o resultado sempre atualizado de todas as operações de
       deﬁnição de dados DDL.

Prof. Raphael Lacerda
                             


---

       DPE-AM/2018
       Visões constituem um tipo de estrutura possível de ser criada em um
       banco de dados relacional e apresentam como característica:
       A Permitir a consulta apenas a tabelas que possuam somente
       atributos do tipo numérico armazenados.
       B Possuir o armazenamento somente do comando de criação de sua
       estrutura, sendo os dados consultados a partir de tabelas com dados
       ﬁsicamente armazenados.

Prof. Raphael Lacerda
                              


---

       DPE-AM/2018
       C Não comportar a visualização de atributos do tipo booleano.
       D Exibir apenas as chaves primária e estrangeira das tabelas
       especiﬁcadas em sua estrutura.
       E Ser consultadas um número restrito de vezes, conforme seja o
       sistema gerenciador de banco de dados utilizado.

Prof. Raphael Lacerda
                              


---

       Pref. Foz Iguaçu/2018
       Qual das alternativas abaixo, melhor descreve a funcionalidade de um
       Modelo Físico de Dados?
       A Procura abstrair a realidade, independente de qualquer plataforma
       de Hardware ou Software.
       B Deﬁne as regras básicas e quais os dados devem ser inseridos no
       banco.
       C Implementa as deﬁnições do Modelo Lógico na prática, ou seja,
       desenvolve o projeto deﬁnido anteriormente.
       D É um layout inicial do projeto, não representa a base real.
       E É o acesso do usuário aos dados, login e senha.
Prof. Raphael Lacerda
                                


---

       Pref. Foz Iguaçu/2018
       Um comando importante em SQL é o CREATE TRIGGER. Um trigger
       típico possui três componentes básicos, que são:


       A atributos - relações - condições a serem tomadas
       B eventos - a condição - relações a serem tomadas
       C atributos - a condição - ações a serem tomadas
       D atributos - relações - relações a serem tomadas
       E eventos - a condição - ações a serem tomadas

Prof. Raphael Lacerda
                               


---

       DPE-RS/2017
       A função básica de um gatilho ou trigger, em um banco de dados
       relacional, é
       A veriﬁcar o grau de normalização de todas as tabelas de um banco
       de dados, assegurando-se do respeito às formas normais desejadas.
       B realizar a compilação de todos comandos SQL presentes no banco
       de dados e armazenar os comandos compilados.
       C veriﬁcar a correção das deﬁnições presentes no dicionário de
       dados, apontando eventuais erros de semântica.

Prof. Raphael Lacerda
                             


---

       DPE-RS/2017
       D executar comandos previamente declarados, quando da ocorrência
       de um evento no banco de dados, também especiﬁcado em sua
       deﬁnição.
       E veriﬁcar a eﬁcácia da política de atribuição de senhas implementada
       no banco de dados, determinando seu grau de eﬁcácia.

Prof. Raphael Lacerda
                               


---

       TRT-7/2017
       Com relação à modelagem de dados, assinale a opção correta.
       A Um atributo é do tipo referencial quando representa as
       características do objeto ao qual o atributo se refere.
       B Em um modelo de dados relacional, as deﬁnições dos elementos
       (entidades e atributos) são armazenadas no documento denominado
       modelo conceitual.

Prof. Raphael Lacerda
                             


---

       TRT-7/2017
       C Atributos opcionais podem compor a chave primária, desde que
       exista pelo menos um atributo não opcional nessa chave primária.
       D O objetivo da modelagem de dados é atender a três perspectivas:
       conceitual, lógica e física.

Prof. Raphael Lacerda
                             


---

       TCE-PE/2017
       Uma visão (view) é derivada de uma ou mais relações e armazena os
       dados em uma tabela física do banco de dados, visando tornar ágeis
       as consultas.

Prof. Raphael Lacerda
                              


---

       Prefeitura Venda Nova/2016
       Nos bancos de dados relacionais, existe um tipo de objeto que é uma
       estrutura auxiliar e acelera a recuperação de registros por
       determinados critérios. Isso evita a leitura excessiva em todo um
       arquivo de dados. Esse objeto é tecnicamente conhecido como
         a) Procedure.
         b) Esquema.
         c) Chave.
         d) Índice.
         e) Visão.
Prof. Raphael Lacerda
                              


---

       TRE-MT/2016
       Denomina-se visão uma tabela única derivada de uma ou mais
       tabelas básicas do banco. Essa tabela existe em forma física e viabiliza
       operações ilimitadas de atualização e consulta.

Prof. Raphael Lacerda
                                


---

       MEC/2015
       O uso de views materializadas permite aumentar o desempenho do
       banco de dados, pois minimiza o acesso às tabelas de dados e torna
       mais rápida a execução das consultas.

Prof. Raphael Lacerda
                              


---

       STJ/2015
       View é um objeto que permite implementar a segurança em um
       banco de dados, omitindo dados irrelevantes para algum grupo de
       usuário. No entanto, não é permitido criar uma view com base na
       deﬁnição de outra view.

Prof. Raphael Lacerda
                             


---

       CNMP/2015

Prof. Raphael Lacerda
                        


---

       CNMP/2015
       Considere que:


       - A tabela empregados contém os campos citados no trigger;
       - O banco de dados está aberto e funcionando em condições ideais;
       - O funcionário cujo sobrenome é Souza possui como id_emp o valor
       'VEND'.


       Ao se executar a instrução UPDATE empregados SET salario = 5500
       WHERE sobrenome='Souza'; é correto aﬁrmar que
Prof. Raphael Lacerda
                              


---

       CNMP/2015
       A o trigger gera uma exceção, exibindo a mensagem 'Funcionário não
       pode ganhar mais que R$ 5000'.
       B a condição do trigger será violada, pois somente empregados cujo
       id_emp não seja 'PRES' ou 'DIRE' poderão receber salário de mais de
       5000.
       C a operação de atualização será executada com sucesso, pois o trigger
       não restringe a entrada de valores maiores que 5000.
       D a condição do trigger será violada, pois apenas empregados cujo
       id_emp seja 'PRES' ou 'DIRE' poderão ter o campo salario alterado.
       E a operação de atualização será bem sucedida, pois a condição
       especiﬁcada no trigger não é violada por instruções do tipo UPDATE.
Prof. Raphael Lacerda
                               


---

       COBRA/2015
       A adoção de índices pode melhorar sensivelmente o tempo de
       resposta de consultas; por outro lado, pode aumentar o tempo de
       atualização, exclusão ou inserção de dados nas tabelas.

Prof. Raphael Lacerda
                             


---

       MEC/2015
       Com relação ao tempo de execução de uma consulta, o uso de
       índices em tabelas é recomendado para que os dados sejam exibidos
       rapidamente. A eﬁciência de uma consulta está relacionada à
       quantidade de índices na tabela: quanto mais índices ela possuir, mais
       rápida será a execução das operações de leitura e escrita.

Prof. Raphael Lacerda
                               


---

       MEC/2015
       No projeto lógico, o modelo físico é obtido por meio da
       transformação do modelo conceitual.

Prof. Raphael Lacerda
                          


---

       UFOB/2014
       Tomando como base o modelo relacional de dados, a modelagem de
       dados, na abordagem lógica, deve contemplar todas as formas
       normais; já o modelo físico de dados pode dispensar algumas formas
       normais com o objetivo de incrementar o desempenho nas operações
       de consulta a dados.

Prof. Raphael Lacerda
                              


---

       MPE-ES/2013
       O disparo de um trigger em um banco de dados relacional ocorre
       A apenas no momento da desativação do sistema de banco de dados.
       B em função da ocorrência de um evento no banco de dados, por
       exemplo, uma operação de modiﬁcação em algum de seus valores.
       C em intervalos de tempo pré-determinados, de acordo com um
       parâmetro especíﬁco para essa ﬁnalidade.
       D quando da atualização de versões do sistema gerenciador de bancos
       de dados em uso.
       E somente quando da realização de cópias de segurança do banco de
       dados.
Prof. Raphael Lacerda
                               


---

       CNJ/2013
       O modelo físico contém detalhes de armazenamento interno de
       informações e inﬂuencia na velocidade de resposta das aplicações.

Prof. Raphael Lacerda
                             


---

       ANP/2013
       O modelo físico contém detalhes do armazenamento interno de
       informações. Esses detalhes inﬂuenciam o desempenho das
       aplicações, mas não a programação de aplicações no sistema de
       gerenciamento de banco de dados (SGBD).

Prof. Raphael Lacerda
                            


---

       TCE-RO/2013
       No contexto de bancos de dados, visão (view) é um objeto que
       consiste em uma lista organizada de todos os elementos de dados
       que são pertinentes para o sistema. A visão descreve entradas,
       saídas, composição de depósito de dados e cálculos intermediários.

Prof. Raphael Lacerda
                              


---

       TCE-ES/2013
       Uma forma de observação de dados de uma ou mais entidades que
       compõem uma base de dados e que é considerada uma tabela virtual
       ou consulta armazenada denomina-se
       A esquema conceitual.
       B entidade.
       C chave primária.
       D integridade referencial.
       E views.


Prof. Raphael Lacerda
                                


---

       CODATA/2013
       Um trigger
       A é uma instrução que o sistema executa, sob comando do usuário,
       para restauração colateral de um banco de dados com trigs.
       B pertence à tríade usuário-entidade-ação.
       C é uma instrução que o sistema executa automaticamente como um
       efeito colateral de uma modiﬁcação no banco de dados.
       D é criado pelo modelo premissa-condição- ação.
       E é um instrumento do actiondriver.


Prof. Raphael Lacerda
                               


---

       CVM/2010
       Os modelos conceitual, lógico e físico de banco de dados auxiliam no
       desenvolvimento de projetos de bancos de dados relacionais. A
       principal diferença entre os modelos físico e lógico é que este último
       não contém os atributos, mas somente as entidades e seus
       relacionamentos.

Prof. Raphael Lacerda
                               


---

       ANAC/2012
       Os modelos conceitual, lógico e físico de banco de dados auxiliam no
       desenvolvimento de projetos de bancos de dados relacionais. A
       principal diferença entre os modelos físico e lógico é que este último
       não contém os atributos, mas somente as entidades e seus
       relacionamentos.

Prof. Raphael Lacerda
                               


---

       Banco Amazônia/2012
       Para cada atributo usado em operações de join, deve-se criar um
       índice.

Prof. Raphael Lacerda
                             


---

       Banco Amazônia/2010
       Um índice é um artifício usado para se encontrar, rapidamente, linhas
       (registros) com valores especíﬁcos. Sem um índice, o gerenciador
       precisará sempre procurar determinados valores da primeira até a
       última linha do banco de dados. Esse processo de busca, em tabelas
       muito grandes (com muitos registros), pode demandar elevado
       tempo e causar até mesmo perdas signiﬁcativas de informação.

Prof. Raphael Lacerda
                               


---

       TRT-21/2010
       É recomendável o uso de índices do tipo clustered em colunas que
       sofram alterações frequentes, visando diminuir o "nível de
       folheamento" da página de índices.

Prof. Raphael Lacerda
                             


---

       TRT-21/2010
       Os índices do tipo clustered determinam a ordem física dos dados em
       uma tabela e mostram-se particularmente eﬁcientes em colunas
       pesquisadas frequentemente por uma faixa de valores ou quando o
       valor do registro é único na tabela.

Prof. Raphael Lacerda
                              


---

       Aneel/2010
       Considerando que certas consultas podem demorar muito tempo
       para serem executadas devido à falta de um índice, então a criação
       de índices em tabelas melhora o desempenho do banco de dados

Prof. Raphael Lacerda
                              


---

       TRT-5/2008
       No ORACLE, um trigger é um bloco PL/SQL armazenado e associado
       a uma tabela, esquema ou banco de dados que pode ser criado com
       o comando CREATE TRIGGER.

Prof. Raphael Lacerda
                             


---
