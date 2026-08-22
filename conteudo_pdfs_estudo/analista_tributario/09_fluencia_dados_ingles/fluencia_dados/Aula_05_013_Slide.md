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
arquivo_origem: Aula 05_013_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '05'
titulo_aula: ARQUITETURA DE
---

# ARQUITETURA DE

ARQUITETURA DE
3 ESQUEMAS!

                                                Prof. Raphael Lacerda

           


---

       Arquitetura 3 esquemas

Prof. Raphael Lacerda
                        


---

       Arquitetura 3 esquemas

Prof. Raphael Lacerda
                        


---

       Esquema Externo

Prof. Raphael Lacerda
                        


---

       Esquema Conceitual

Prof. Raphael Lacerda
                        


---

       Esquema Interno

Prof. Raphael Lacerda
                        


---

       Então Como ﬁca?

Prof. Raphael Lacerda
                        


---

       Mapeamento &
       Independência

Prof. Raphael Lacerda
                        


---

ARQUITETURA                                          https://questoes.estrategiacon
                                                     cursos.com.br/cadernos/7b27

3 ESQUEMAS
                                                     cf54-0657-4db3-8d06-f80522
                                                     2f843b


QUESTÕES

                                                   Prof. Raphael Lacerda

              


---

       UFRPE/2019
       O padrão de ANSI/SPARC para arquitetura de SGBD deﬁne uma
       arquitetura em três níveis. São eles:
       A nível interno, nível de usuário e nível físico.
       B nível interno, nível externo e nível conceitual.
       C nível externo, nível de tabelas e nível físico.
       D nível conceitual, nível de usuário e nível de arquivos.
       E nível de tabelas, nível de arquivos e nível de visão.

Prof. Raphael Lacerda
                                 


---

       TJ-AM/2019
       Na arquitetura ANSI/SPARC de um SGBD, o nível interno trata do
       armazenamento físico dos dados, o nível externo trata do modo
       como os dados são visualizados por usuários individuais, e o nível
       conceitual oferece uma visão comunitária dos dados.

Prof. Raphael Lacerda
                              


---

       DAE-SP/2019
       A deﬁnição a seguir diz respeito a qual das Formas Normais (FN):
       “todos os atributos não chaves devem ser totalmente dependente da
       chave primária”.
       A 1FN.
       B 2 FN.
       C 3 FN.
       D 4 FN.

Prof. Raphael Lacerda
                             


---

       FSA-SP/2019

Prof. Raphael Lacerda
                        


---

       FSA-SP/2019
       Ao considerar a estrutura de PEDIDO, CLIENTE e PRODUTO, é
       possível aﬁrmar que a estrutura não está na 1ª forma normal. A esse
       respeito, assinale a alternativa correta.
       A Chave estrangeira de PRODUTO na tabela de Pedido.
       B Campo ENDERECO na tabela CLIENTE contém todas as
       informações pertinentes ao endereço, como logradouro, número,
       bairro e cidade.
       C Campo IDCLIENTE na tabela PEDIDO aceita NULL.
       D Não possuí relacionamento entre PRODUTO e CLIENTE.

Prof. Raphael Lacerda
                              


---

       Pref. Criciúma/2018
       Date 2014, relata que a arquitetura ANSI/SPARC de um Banco de
       Dados se divide em três níveis, conhecidos como nível interno, nível
       externo e nível conceitual. Leia as aﬁrmativas abaixo sobre os níveis
       de arquitetura.
       I – Nível interno é o mais próximo do meio de armazenamento físico,
       é aquele que se ocupa do modo como os dados são ﬁsicamente
       armazenados dentro do sistema.
       II – Nível externo é o mais próximo dos usuários, é aquele que se
       ocupa do modo como os dados são vistos por usuários individuais.
       III – Nível conceitual é um nível indireto entre o nível interno e
       externo.
Prof. Raphael Lacerda
                               


---

       SEDF/2017
       O esquema do nível externo de uma arquitetura de três esquemas
       oculta os detalhes das estruturas de armazenamento físico e se
       concentra na descrição de entidades, tipos de dados, conexões,
       operações de usuários e restrições.

Prof. Raphael Lacerda
                            


---

       IGPC-SC/2017
       O objetivo da arquitetura três esquemas é separar as aplicações do
       usuário do banco de dados físico. Nesta arquitetura, os esquemas
       podem ser deﬁnidos em três níveis: externo, conceitual e interno.
       Neste contexto, informe a alternativa que contém todas as aﬁrmações
       corretas.


       I. O nível conceitual oculta os detalhes das estruturas de
       armazenamento físico e se concentra na descrição de entidades, tipos
       de dados, relacionamentos, operações do usuário e restrições.


Prof. Raphael Lacerda
                              


---

       IGPC-SC/2017
       II. A independência lógica de dados é a capacidade de alterar o
       esquema conceitual sem ter que
       alterar os esquemas externos ou os programas de aplicação.


       III. A independência física de dados é a capacidade de alterar o
       esquema conceitual sem ter que
       alterar o esquema físico.

Prof. Raphael Lacerda
                                   


---

       IGPC-SC/2017
       IV. O nível externo representa o conjunto dos programas de aplicação
       que acessam as informações armazenadas no banco de dados.
       A I e II.
       B II e III.
       C III e IV.
       D I e IV.

Prof. Raphael Lacerda
                              


---

       TRF-2/2017
       Em banco de dados relacional à arquitetura mais difundida na
       literatura é a Arquitetura “Three-Schema” (também conhecida como
       arquitetura ANSI/SPARC), proposta por Tsichritzis & Klug em 1978. A
       arquitetura “three-schema” pode ser utilizada para explicar conceitos
       de independência de dados, que podem ser deﬁnidos como a
       capacidade de alterar o esquema de um nível sem ter que alterar o
       esquema no próximo nível superior. Um SGBD é uma coleção de
       arquivos e programas inter-relacionados permitindo a consulta e
       modiﬁcação de dados, no qual é possível ter uma abstração dos
       dados em 3 níveis; na arquitetura ANSI/SPARC são conhecidos como
       interno, conceitual e externo

Prof. Raphael Lacerda
                               


---

       TCE-PA/2016
       No nível conceitual da arquitetura de três camadas de banco de
       dados, cada esquema externo descreve a parte do banco que
       interessa a determinado grupo de usuários e oculta desse grupo o
       restante do banco de dados.

Prof. Raphael Lacerda
                             


---

       TCE-PA/2016
       Independência lógica de dados refere-se à capacidade de alterar o
       esquema conceitual sem a necessidade de alterar os esquemas
       externos ou os programas de aplicação.

Prof. Raphael Lacerda
                             


---

       DEPEN/2015
       Os níveis interno, externo e conceitual da arquitetura de um banco de
       dados são responsáveis, respectivamente, por gerenciar o modo
       como os dados serão armazenados ﬁsicamente, por gerenciar o
       modo como os dados serão vistos pelos usuários e por representar
       todo o conteúdo de informações do banco de dados.

Prof. Raphael Lacerda
                               


---

       MEC/2015
       No nível externo, pode-se ter uma visão única de todo o banco de
       dados, incluindo deﬁnições de esquemas e restrições de integridade,
       independentemente do armazenamento físico.

Prof. Raphael Lacerda
                              


---

       MEC/2015
       O nível interno de um banco de dados é deﬁnido como sendo o mais
       próximo do meio de armazenamento físico. Nesse nível, estão a
       representação física dos campos e a sequência física em que os
       registros estão armazenados no sistema.

Prof. Raphael Lacerda
                             


---

       MEC/2015
       As linguagens de programação podem ser utilizadas no nível
       conceitual para que visualize a parte do banco de dados de interesse.

Prof. Raphael Lacerda
                               


---

       TJ-SE/2014
       De acordo com a arquitetura ANSI, o nível conceitual representa os
       dados independentemente de qualquer aplicação.

Prof. Raphael Lacerda
                              


---

       AGERIO/2014
       A arquitetura ANSI/SPARC de bancos de dados é composta por três
       níveis independentes, cada um deles descrevendo o banco em um
       nível diferente de abstração. Um desses níveis se refere ao
       armazenamento físico dos dados e à deﬁnição das estruturas físicas
       que permitem obter um desempenho satisfatório. Esse nível é
       conhecido por:


       A interno B operacional C estratégico D conceitual E externo

Prof. Raphael Lacerda
                               


---

       MDA/2014
       Em 1971, o Comitê sobre Computador e Processamento de
       Informações, abreviado Comitê X3, do American National Standards
       Institute (ANSI), formou um grupo de estudo especial, denominado
       Comitê de Planejamento e Requisitos de Padrões (Standards Planning
       and Requirements Committee – SPARC), que propôs uma arquitetura
       de esquemas de um sistema de gerência de banco de dados, ou
       arquitetura de Sistema de Banco de Dados (SBD) , arquitetura esta
       conhecida como ANSI/X3/SPARC ou, simplesmente, ANSI/SPARC.

Prof. Raphael Lacerda
                              


---

       MDA/2014
       A arquitetura ANSI/SPARC tem por objetivo separar:
       A as aplicações do usuário do metadados.
       B o banco de dados físico do catálogo do sistema do SGBD
       C as aplicações do usuário do catálogo do SGBD.
       D'o banco de dados físico do metadados.
       E as aplicações do usuário do banco de dados físico

Prof. Raphael Lacerda
                               


---

       MDA/2014
       A arquitetura ANSI/SPARC possui a seguinte quantidade de níveis:
       A2
       B3
       C5
       D6
       E8

Prof. Raphael Lacerda
                              


---

       MDA/2014
       A arquitetura ANSI/SPARC pode ser usada para melhor explicar o
       conceito de independência de dados. Esse conceito pode ser
       dividido em:
       A lógica e física
       B conceitual e lógica.
       C física e conceitual.
       D esquema e lógica.
       E física e esquema.


Prof. Raphael Lacerda
                                


---

       Banco Amazônia/2014
       Na arquitetura ANSI/SPARC de banco de dados, o nível conceitual
       A deﬁne a estrutura de armazenamento do banco de dados.
       B deﬁne a estrutura do banco de dados para uma comunidade de
       usuários.
       C descreve a parte do banco de dados em que um grupo de usuários
       está interessado, escondendo as outras partes.
       D descreve os caminhos de acesso para a base de dados.
       E inclui um número de visões de usuário.


Prof. Raphael Lacerda
                               


---

       Banco Amazônia/2012
       A arquitetura ANSI SPARC é um modelo de interoperabilidade de
       dados, voltado para o domínio de sistemas de gerenciamento de
       bases de dados (SGBDs). O modelo em questão é organizado em três
       níveis, dos quais um é o nível conceitual, mais semântico; e outro é o
       nível físico ou interno, mais sintático.

Prof. Raphael Lacerda
                               


---

       Banco Amazônia/2012
       Independência de dados lógica é a capacidade de modiﬁcar o
       esquema lógico sem que, com isso, qualquer programa de aplicação
       precise ser reescrito. Modiﬁcações no nível lógico são necessárias,
       ocasionalmente, para aprimorar o desempenho.

Prof. Raphael Lacerda
                              


---

       LIQUIGÁS/2012
       A arquitetura ANSI/SPARC de um Sistema Gerenciador de Banco de
       Dados (SGBD) divide-se nos níveis
       A externo, conceitual e interno
       B externo, lógico e recuperador
       C interno, indexador e lógico
       D físico, conceitual e lógico
       E físico, indexador e recuperador

Prof. Raphael Lacerda
                                


---

       TSE/2012

Prof. Raphael Lacerda
                        


---

       TSE/2012
       Sendo dois níveis descritos a seguir.
       I. Trata do armazenamento físico dos dados e deﬁnição das estruturas
       que permitem obter um bom nível de desempenho.
       II. Representa os dados, independente de qualquer usuário,
       escondendo os detalhes de implementação física dos arquivos que
       armazenam os dados.
       Esses níveis são denominados, respectivamente,
       A interno e aplicação.       B externo e aplicação.
       C interno e conceitual.     D externo e conceitual
Prof. Raphael Lacerda
                                 


---

       TRE-RJ/2012
       De acordo com a arquitetura ANSI/SPARC um Sistema de Banco de
       Dados divide-se em três níveis gerais: interno, conceitual e externo. É
       correto aﬁrmar que:
       A o nível interno é responsável pelo mapeamento entre os níveis
       externo e conceitual;
       B o nível externo é o mais próximo ao armazenamento físico;
       C o nível conceitual é o mais próximo ao usuário;
       D o nível conceitual esconde os detalhes sobre o armazenamento
       físico dos dados;
       E existe uma única visão externa no nível externo.
Prof. Raphael Lacerda
                               


---

       TJ-ES/2011
       Em razão de a independência de dados, provida pela arquitetura em
       tela, permitir a execução mais eﬁciente de consultas no sistema
       gerenciador de banco de dados (SGBD), os mais conhecidos SGBDs
       comerciais implementam a arquitetura de banco de dados de três
       esquemas por completo.

Prof. Raphael Lacerda
                             


---

       Banco Amazônia/2010
       Se um sistema de banco de dados provê independência física dos
       dados, é correto inferir que esse sistema também permite
       independência lógica de dados.

Prof. Raphael Lacerda
                            


---

       PRODAM-AM/2010
       Marque a alternativa que apresenta os três níveis descritos na
       proposta ANSI/SPARC para a deﬁnição de uma arquitetura de três
       esquemas para sistemas de banco de dados.
       A Conceitual, Lógico e Físico.
       B Hierárquico,EmRedes e Relacional.
       C Conceitual, Relacional e Orientado a Objetos.
       D Interno, Conceitual e Externo.
       E Relacional, Objeto-Relacional e Orientado a Objetos.


Prof. Raphael Lacerda
                               


---

       PETRO/2010
       Relacione os usuários de Sistemas Gerenciadores de Bancos de
       Dados, apresentados na coluna da esquerda, com seu escopo de
       atuação respectivo na arquitetura ANSI/ SPARC, listado na coluna da
       direita.

Prof. Raphael Lacerda
                              


---

       Pref. Patos/2010
       Sobre a arquitetura ANSI/SPARC de sistemas de banco de dados,
       julgue corretos os itens abaixo:
       I) Divide a arquitetura em dois níveis.
       II) O nível interno deﬁne como os dados são vistos pelos usuários
       individuais.
       III) O nível lógico dá uma visão comunitária dos dados.
       IV) O nível lógico compõe-se de tabelas.


       Estão corretos:
Prof. Raphael Lacerda
                                


---

       SEFAZ-SP/2009
       A arquitetura ANSI/SPARC aplicada aos bancos de dados divide-os
       em níveis com as seguintes características:
       I. O que se ocupa do modo como os dados são ﬁsicamente
       armazenados.
       II. O que se ocupa do modo como os dados são vistos por usuários
       individuais.
       III. Nível lógico de comunidade ou apenas lógico (mais abstrato que o
       físico e diferente da visão do usuário individual).
       Em um projeto arquitetural, os itens I, II e III são classiﬁcados,
       respectivamente, como níveis
Prof. Raphael Lacerda
                               


---

       IPHAN/2009
       O American National Standards Institute (ANSI), por meio do
       Standards Planning and Requirements Committee (SPARC),
       estabeleceu um padrão para o desenvolvimento de tecnologias de
       Banco de Dados (BD), deﬁnindo uma arquitetura de três níveis
       independentes. Assinale a alternativa que apresenta os três níveis da
       arquitetura ANSI/SPARC para banco de dados.
       A Plano, Relacional e Hierárquico.
       B Local, Remoto e Distribuído.
       C Interno, Conceitual e Externo.
       D File, Table e View.
Prof. Raphael Lacerda
                               


---

       IPEA/2009
       Os três níveis apresentados nos elementos #1, #2 e #3 correspondem
       aos três níveis do modelo ANSI/SPARC.

Prof. Raphael Lacerda
                              


---

       DECEA/2006
       Segundo a arquitetura ANSI/SPARC, os três níveis de esquema
       usados para separar o banco de dados físico das aplicações do
       usuário são:
       A físico, estrutural e externo.
       B lógico, físico e interno.
       C interno, conceitual e externo.
       D interno, lógico e restrito.
       E conceitual, estrutural e físico.


Prof. Raphael Lacerda
                                  


---

BETTER
 CALL
  OWL!

                                              Prof. Raphael Lacerda

         


---

OBRIGADO
                                               @estrategia
                                               concursosti

                                        Prof. Raphael Lacerda

   


---

      http://anchor.fm/estrategia-tech

   http://instagram.com/estrategiaconcursosti


                


---

---
