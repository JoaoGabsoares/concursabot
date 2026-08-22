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
arquivo_origem: Aula 05_004_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '05'
titulo_aula: TECNOLOGIA DA INFORMAÇÃO
---

# TECNOLOGIA DA INFORMAÇÃO

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

                          TECNOLOGIA DA INFORMAÇÃO


                                                                                        Prof. MSc. Renato da Costa:.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

                                            Professor Renato da Costa
                                                   Resultado de imagem para instagram png

                                                                                                             Cargo atual:
                                                                                                             ➢Ministra aulas para concursos públicos desde 1996, tendo sido aprovado
                                                                                                               em diversos concursos nas esferas estaduais e federais.
                                                                                                             ➢Atualmente é servidor federal, professor de computação do IFRJ, tendo sido
                                                                                                               aprovado em 1º lugar em concurso de provas e títulos para o quadro
                                              @prof.renatodacosta
                                                                                                               efetivo.
                                                                                                             Formação:
                                                                                                             ➢Doutorando em Administração pela Unigranrio; Mestre em Novas
                                                                                                               Tecnologias Digitais pela UniCarioca e Mestre em Educação pela
                                                                                                               Universidade de Jaén (Espanha), tem MBA em Gerenciamento de Projetos
                                                      Renato da Costa                                          pela FGV, é pós-graduado em Tecnologia da Informação e Comunicação e
                                                                                                               pós-graduado em Docência do Ensino Superior sendo ambas as
                                                                                                               especializações pela Ucam, possui Licenciatura Plena em Informática,
                                                                                                               Matemática e Pedagogia além da graduação em Tecnologia em
                                                                                                               Processamento de Dados.
                                                                                                             Informações adicionais:
                                                                                                             ➢É autor do livro "Informática pra Concursos", atualmente na 4ª edição, pela
                                                                                                                editora Impetus, citado como referência bibliográfica por diversas bancas.
                                                                                                             ➢Possui certificações Cisco e Microsoft.
Prof. Renato da Costa - TI - @prof.renatodacosta                                            


---

                                               BANCO DE DADOS


                                                                                        Prof. MSc. Renato da Costa:.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

                         ARQUITETURA DE TRÊS ESQUEMAS
                               BANCO DE DADOS

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Schema (esquemas)
    Os schemas são unidades de especificação que servem de mapeamento para as
    estruturas de um banco de dados.
    No passado um mesmo modelo de dados, gerado para uma aplicação, ao
    necessitar ser implementado em diferentes SGBDs, exigia a geração de diferentes
    esquemas com transformações significativas.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Schema

                 Visão 1                           Visão 2                              Visão 3       Visão 4

            Modo de                                         Modo de                                  Modo de
         Implementação 1                                 Implementação 2                          Implementação 3

        No passado a quantidade de schemas e modelos de uma aplicação seria o produto da
            quantidade de modos de implementação pelo número de diferentes visões
                                       (12 no exemplo).
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Arquitetura de Três Níveis de Esquemas
    As dificuldades advindas da administração e manutenção de toda essa variedade
    de schemas fizeram com que o grupo ANSI/SPARK ainda na década de 70
    propusesse um padrão onde a ideia básica consistia na definição de níveis para
    definição de esquemas associados a um modelo de dados.
    Os níveis deveriam isolar as características específicas que lhes diziam respeito em
    um schema próprio. Sintaxes seriam para cada um dos níveis e haveria grande
    isolamento entre eles, fazendo com que mudanças em um nível causassem
    nenhum ou pouco impacto nos demais.
    • Nível Interno
    • Nível Conceitual
    • Nível Externo ou de Visão
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Arquitetura ANSI/SPARC
      Nível Externo

        Esquema Externo 1                     Esquema Externo 2              Esquema Externo 3     Esquema Externo 4
             Visão 1                               Visão 2                        Visão 3               Visão 4

                                                     Nível = Schema Conceitual

      Nível Interno
        Esquema Interno 1                                Esquema Interno 2                       Esquema Interno 3
              Modo de                                        Modo de                                 Modo de
         Implementação 1                                  Implementação 2                         Implementação 3

          Com os três níveis da arquitetura ANSI/SPARC a quantidade de esquemas para uma
                                aplicação é o somatório dos esquemas.
Prof. Renato da Costa - TI - @prof.renatodacosta    


---

    MDA – Funcab – 2014
    Em 1971, o Comitê sobre Computador e Processamento de Informações,
    abreviado Comitê X3, do American National Standards Institute (ANSI), formou um
    grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de
    Padrões (Standards Planning and Requirements Committee – SPARC), que propôs
    uma arquitetura de esquemas de um sistema de gerência de banco de dados, ou
    arquitetura de Sistema de Banco de Dados (SBD) , arquitetura esta conhecida
    como ANSI/X3/SPARC ou, simplesmente,ANSI/SPARC.
    A arquitetura ANSI/SPARC possui a seguinte quantidade de níveis:
    A) 2
    B) 3
    C) 5
    D) 6
    E) 8

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    MDA – Funcab – 2014
    Em 1971, o Comitê sobre Computador e Processamento de Informações,
    abreviado Comitê X3, do American National Standards Institute (ANSI), formou um
    grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de
    Padrões (Standards Planning and Requirements Committee – SPARC), que propôs
    uma arquitetura de esquemas de um sistema de gerência de banco de dados, ou
    arquitetura de Sistema de Banco de Dados (SBD) , arquitetura esta conhecida
    como ANSI/X3/SPARC ou, simplesmente,ANSI/SPARC.
    A arquitetura ANSI/SPARC possui a seguinte quantidade de níveis:
    A) 2
    B) 3
    C) 5
    D) 6
    E) 8

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Arquitetura de Três Esquemas

                                                                                    Nível Externo é o mais próximo do
                                                                                            usuário individual.

                                                                                Nível Conceitual pode ser considerado
                                                                                    a visão do grupo de usuários.

                                                                                    Nível Interno é o mais próximo do
                                                                                          armazenamento físico.
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    DECEA – Cesgranrio
    Segundo a arquitetura ANSI/SPARC, os três níveis de esquema usados para
    separar o banco de dados físico das aplicações do usuário são:
    A) físico, estrutural e externo.
    B) lógico, físico e interno.
    C) interno, conceitual e externo.
    D) interno, lógico e restrito.
    E) conceitual, estrutural e físico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    DECEA – Cesgranrio
    Segundo a arquitetura ANSI/SPARC, os três níveis de esquema usados para
    separar o banco de dados físico das aplicações do usuário são:
    A) físico, estrutural e externo.
    B) lógico, físico e interno.
    C) interno, conceitual e externo.
    D) interno, lógico e restrito.
    E) conceitual, estrutural e físico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Arquitetura de três esquemas
    • Nível ou Esquema Externo ou de Visão: O nível externo inclui uma séria de
      esquemas externos ou visões. Cada esquema externo descreve a parte do
      banco de dados em que um grupo de usuários em particular está interessado e
      oculta o restante do banco de dados do grupo de usuários.
    • Nível ou Esquema Conceitual: O nível conceitual tem um esquema conceitual,
      que descreve o banco de dados inteiro. O esquema conceitual oculta os
      detalhes das estruturas de armazenamento físico e se concentra na descrição
      de entidades, tipos de dados, relacionamentos, operações do usuário e
      restrições.
    • Nível ou Esquema Interno: O nível interno tem um esquema interno, que
      descreve a estrutura do armazenamento físico do banco de dados
      (compressão: acesso: índice, ponteiros, hash; etc).
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    MDA – Funcab – 2014
    Em 1971, o Comitê sobre Computador e Processamento de Informações,
    abreviado Comitê X3, do American National Standards Institute (ANSI), formou um
    grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de
    Padrões (Standards Planning and Requirements Committee – SPARC), que propôs
    uma arquitetura de esquemas de um sistema de gerência de banco de dados, ou
    arquitetura de Sistema de Banco de Dados (SBD) , arquitetura esta conhecida
    como ANSI/X3/SPARC ou, simplesmente, ANSI/SPARC.
    A arquitetura ANSI/SPARC tem por objetivo separar:
    A) as aplicações do usuário do metadados.
    B) o banco de dados físico do catálogo do sistema do SGBD
    C) as aplicações do usuário do catálogo do SGBD.
    D) o banco de dados físico do metadados.
    E) as aplicações do usuário do banco de dados físico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    MDA – Funcab – 2014
    Em 1971, o Comitê sobre Computador e Processamento de Informações,
    abreviado Comitê X3, do American National Standards Institute (ANSI), formou um
    grupo de estudo especial, denominado Comitê de Planejamento e Requisitos de
    Padrões (Standards Planning and Requirements Committee – SPARC), que propôs
    uma arquitetura de esquemas de um sistema de gerência de banco de dados, ou
    arquitetura de Sistema de Banco de Dados (SBD) , arquitetura esta conhecida
    como ANSI/X3/SPARC ou, simplesmente, ANSI/SPARC.
    A arquitetura ANSI/SPARC tem por objetivo separar:
    A) as aplicações do usuário do metadados.
    B) o banco de dados físico do catálogo do sistema do SGBD
    C) as aplicações do usuário do catálogo do SGBD.
    D) o banco de dados físico do metadados.
    E) as aplicações do usuário do banco de dados físico

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    MPE PA – Consulplan – 2022
    Considerando que a arquitetura ANSI/SPARC se divide em três níveis – interno,
    externo e conceitual, analise as afirmativas a seguir.
    I. Nível interno: se ocupa do modo como os dados são fisicamente armazenados
    dentro do sistema.
    II. Nível externo: se ocupa do modo como os dados são vistos por usuários
    individuais.
    III. Nível conceitual: é o nível intermediário entre o nível interno e externo;se
    ocupa de apresentar os dados armazenados dentro do sistema como uma visão
    vista pelos usuários individuais.
    Está correto o que se afirma em
    A) I, II e III.
    B) I e II, apenas.
    C) I e III, apenas.
    D) II e III, apenas.
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    MPE PA – Consulplan – 2022
    Considerando que a arquitetura ANSI/SPARC se divide em três níveis – interno,
    externo e conceitual, analise as afirmativas a seguir.
    I. Nível interno: se ocupa do modo como os dados são fisicamente armazenados
    dentro do sistema.
    II. Nível externo: se ocupa do modo como os dados são vistos por usuários
    individuais.
    III. Nível conceitual: é o nível intermediário entre o nível interno e externo;se
    ocupa de apresentar os dados armazenados dentro do sistema como uma visão
    vista pelos usuários individuais.
    Está correto o que se afirma em
    A) I, II e III.
    B) I e II, apenas.
    C) I e III, apenas.
    D) II e III, apenas.
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Emgepron – Selecon - 2021
    A arquitetura em três níveis ANSI/SPARC para banco de dados permite ter uma
    independência entre os dados e os tratamentos, definindo níveis de abstração
    para um sistema de gestão de bases de dados baseado na divisão três níveis,
    descritos a seguir.
    I. Visão dos usuários individuais - se ocupa do modo como os dados são vistos por
    usuários individualmente.
    II. Visão do meio de armazenamento - se ocupa do modo como os dados são
    fisicamente armazenados dentro do sistema.
    III. Visão da comunidade de usuários - se ocupa da interação entre os outros dois.
    Os níveis I, II e III são denominados, respectivamente:
    A) INTERNO, EXTERNO e CONCEITUAL
    B) EXTERNO, INTERNO e CONCEITUAL
    C) INTERNO, EXTERNO e FUNCIONAL
    D) EXTERNO, INTERNO e FUNCIONAL
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Emgepron – Selecon - 2021
    A arquitetura em três níveis ANSI/SPARC para banco de dados permite ter uma
    independência entre os dados e os tratamentos, definindo níveis de abstração
    para um sistema de gestão de bases de dados baseado na divisão três níveis,
    descritos a seguir.
    I. Visão dos usuários individuais - se ocupa do modo como os dados são vistos por
    usuários individualmente.
    II. Visão do meio de armazenamento - se ocupa do modo como os dados são
    fisicamente armazenados dentro do sistema.
    III. Visão da comunidade de usuários - se ocupa da interação entre os outros dois.
    Os níveis I, II e III são denominados, respectivamente:
    A) INTERNO, EXTERNO e CONCEITUAL
    B) EXTERNO, INTERNO e CONCEITUAL
    C) INTERNO, EXTERNO e FUNCIONAL
    D) EXTERNO, INTERNO e FUNCIONAL
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Independência de dados
    A arquitetura de três esquemas pode ser usada para explicar melhor o conceito
    de independência de dados, que pode ser definida como a capacidade de alterar o
    esquema em um nível do sistema de banco de dados sem ter de alterar o
    esquema no próximo nível mais alto.

    * Independência lógica de dados é a capacidade de alterar o esquema conceitual
    sem ter de alterar os esquemas externos ou os programas de aplicação.
    * Independência física de dados é a capacidade de alterar o esquema interno sem
    ter de alterar o esquema conceitual (detalhes físicos, como a localização exata
    dos dados no disco, e detalhes de hardware sobre codificação do armazenamento,
    posicionamento, compactação, divisão, fusão de registros).
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Transpetro – Selecon - 2023
    O princípio de independência de dados é um conceito fundamental no modelo
    relacional de bancos de dados. A aplicação prática deste princípio permite que os
    bancos de dados sejam gerenciados, otimizados e modificados eficientemente
    sem a necessidade de realizar modificações extensivas em cada aplicação ou
    consulta que utiliza o banco de dados, facilitando a manutenção e a evolução dos
    sistemas.
    Na arquitetura de referência ANSI/SPARC, que é composta por três níveis de
    esquema — externo, conceitual (ou lógico) e interno —, o princípio de
    independência de dados é expresso por meio da:
    ...

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Transpetro – Cesgranrio - 2023
    ...
    A) necessidade de alterar o esquema externo quando ocorrem mudanças no
    esquema interno.
    B) obrigatoriedade de alterar os programas aplicativos quando há uma
    modificação no esquema interno.
    C) incapacidade de realizar mudanças no esquema conceitual sem afetar os
    esquemas externos.
    D) dependência entre os esquemas, garantindo que uma modificação em um nível
    requer alterações em todos os níveis.
    E) capacidade de modificar o esquema interno sem afetar o esquema conceitual e,
    portanto, sem afetar os esquemas externos e os programas aplicativos.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Transpetro – Cesgranrio - 2023
    ...
    A) necessidade de alterar o esquema externo quando ocorrem mudanças no
    esquema interno.
    B) obrigatoriedade de alterar os programas aplicativos quando há uma
    modificação no esquema interno.
    C) incapacidade de realizar mudanças no esquema conceitual sem afetar os
    esquemas externos.
    D) dependência entre os esquemas, garantindo que uma modificação em um nível
    requer alterações em todos os níveis.
    E) capacidade de modificar o esquema interno sem afetar o esquema conceitual e,
    portanto, sem afetar os esquemas externos e os programas aplicativos.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    IFRJ – Selecon - 2023
    A arquitetura ANSI/SPARC para bancos de dados é composta por três níveis
    independentes, cada um deles descrevendo o banco de dados em um nível
    diferente de abstração. Esse tipo de arquitetura permite três tipos de
    independência, caracterizadas a seguir.
    I. Alterações no nível interno não repercutem no nível conceitual.
    II. Alterações no esquema conceitual não têm, necessariamente, de alterar o
    esquema externo.
    III. Alterações que envolvam a estrutura dos dados ou a sua implementação física
    não obrigam a alterações no nível da aplicação.
    Os tipos de independência em I, II e IlI são denominados, respectivamente:
    A) física, lógica e de dados
    B) lógica, física e de dados
    C) física, de dados e lógica
    D) lógica, de dados e física
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    IFRJ – Selecon - 2023
    A arquitetura ANSI/SPARC para bancos de dados é composta por três níveis
    independentes, cada um deles descrevendo o banco de dados em um nível
    diferente de abstração. Esse tipo de arquitetura permite três tipos de
    independência, caracterizadas a seguir.
    I. Alterações no nível interno não repercutem no nível conceitual.
    II. Alterações no esquema conceitual não têm, necessariamente, de alterar o
    esquema externo.
    III. Alterações que envolvam a estrutura dos dados ou a sua implementação física
    não obrigam a alterações no nível da aplicação.
    Os tipos de independência em I, II e IlI são denominados, respectivamente:
    A) física, lógica e de dados
    B) lógica, física e de dados
    C) física, de dados e lógica
    D) lógica, de dados e física
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Câmara Municipal de SP – FGV – 2024
    Com relação aos níveis da arquitetura ANSI/SPARC dos Sistemas Gerenciadores de
    Bancos de Dados (SGBD) relacionais, assinale (V) para a afirmativa verdadeira e (F)
    para a falsa.
    I - O nível interno é o mais próximo do meio de armazenamento físico, é uma
    representação de baixo nível de todo o banco de dados, ele se ocupa do modo
    como os dados são fisicamente armazenados dentro do SGBD.
    II - O nível externo, também conhecido como o nível lógico de comunidade, é o
    mais próximo dos usuários finais ou programadores de aplicação, é aquele que se
    ocupa do modo como os dados são vistos pelos usuários do sistema.
    III - O nível conceitual, também conhecido nível lógico de usuário, é um nível
    indireto entre os outros dois níveis e representa todo o conteúdo do banco de
    dados de uma forma um tanto abstrata em comparação como os dados são
    armazenados logicamente.
    ...
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Câmara Municipal de SP – FGV – 2024
    ...
    As afirmativas são, respectivamente,
    a) F–V–V.
    b) F–F–V.
    c) F–V–F.
    d) V–V–F.
    e) V–F–F.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Câmara Municipal de SP – FGV – 2024
    Com relação aos níveis da arquitetura ANSI/SPARC dos Sistemas Gerenciadores de
    Bancos de Dados (SGBD) relacionais, assinale (V) para a afirmativa verdadeira e (F)
    para a falsa.
    I - O nível interno é o mais próximo do meio de armazenamento físico, é uma
    representação de baixo nível de todo o banco de dados, ele se ocupa do modo
    como os dados são fisicamente armazenados dentro do SGBD.
    II - O nível externo, também conhecido como o nível lógico de comunidade, é o
    mais próximo dos usuários finais ou programadores de aplicação, é aquele que se
    ocupa do modo como os dados são vistos pelos usuários do sistema.
    III - O nível conceitual, também conhecido nível lógico de usuário, é um nível
    indireto entre os outros dois níveis e representa todo o conteúdo do banco de
    dados de uma forma um tanto abstrata em comparação como os dados são
    armazenados logicamente.
    ...
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Câmara Municipal de SP – FGV – 2024
    ...
    As afirmativas são, respectivamente,
    a) F–V–V.
    b) F–F–V.
    c) F–V–F.
    d) V–V–F.
    e) V–F–F.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Embasa – Cespe
    A arquitetura ANSI/SPARC divide-se em três níveis; o conceitual é o mais próximo
    do meio de armazenamento físico, ou seja, é aquele que se ocupa do modo como
    os dados são fisicamente armazenados.
    (        ) CERTO          (      ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Embasa – Cespe
    A arquitetura ANSI/SPARC divide-se em três níveis; o conceitual é o mais próximo
    do meio de armazenamento físico, ou seja, é aquele que se ocupa do modo como
    os dados são fisicamente armazenados.
    (        ) CERTO          (      ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Banco da Amazônia – Cesgranrio
    Na arquitetura ANSI/SPARC de banco de dados, o nível conceitual
    A) define a estrutura de armazenamento do banco de dados.
    B) define a estrutura do banco de dados para uma comunidade de usuários.
    C) descreve a parte do banco de dados em que um grupo de usuários está
    interessado, escondendo as outras partes.
    D) descreve os caminhos de acesso para a base de dados.
    E) inclui um número de visões de usuário.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Banco da Amazônia – Cesgranrio
    Na arquitetura ANSI/SPARC de banco de dados, o nível conceitual
    A) define a estrutura de armazenamento do banco de dados.
    B) define a estrutura do banco de dados para uma comunidade de usuários.
    C) descreve a parte do banco de dados em que um grupo de usuários está
    interessado, escondendo as outras partes.
    D) descreve os caminhos de acesso para a base de dados.
    E) inclui um número de visões de usuário.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    UFFS – Instituto Access – 2023
    Banco de Dados é definido como uma coleção de dados interrelacionados, sendo
    o objetivo da arquitetura de sistemas de BD, estabelecida pela ANSI por meio do
    SPARC, separar o banco de dados físico das aplicações dos usuários, através de
    três diferentes níveis, descritos a seguir:
    I. Nível mais alto da abstração, associada às partes do BD a que o usuário tem
    acesso conforme a necessidade individual de cada usuário.
    II. Nível mais baixo da abstração, associada à estrutura física de armazenamento
    do BD, a organização de arquivos e os métodos de acesso.
    III. Nível intermediário da abstração, associada à definição dos dados
    armazenados e às ligações entre eles, com destaque para as entidades, atributos,
    relacionamentos, operações e restrições.
    Os níveis descritos em I, II e III são denominados, respectivamente,
    ...

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    UFFS – Instituto Access – 2023
    ...
    A) das visões, lógico e relacional
    B) das visões, físico e conceitual.
    C) das visões, físico e relacional.
    D) das implementações, físico e relacional.
    E) das implementações, lógico e conceitual.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    UFFS – Instituto Access – 2023
    ...
    A) das visões, lógico e relacional
    B) das visões, físico e conceitual.
    C) das visões, físico e relacional.
    D) das implementações, físico e relacional.
    E) das implementações, lógico e conceitual.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Petrobras – Cesgranrio
    Relacione os usuários de Sistemas Gerenciadores de Bancos de Dados,
    apresentados na coluna da esquerda, com seu escopo de atuação respectivo na
    arquitetura ANSI/ SPARC, listado na coluna da direita.
    Estão corretas as associações
    A) I - P , II - R , III - Q
    B) I - Q , II - R , IV - P
    C) I - R , II - P , III - Q
    D) II - P , III - R , IV - Q
    E) II - R , III - Q , IV - P

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Petrobras – Cesgranrio
    Relacione os usuários de Sistemas Gerenciadores de Bancos de Dados,
    apresentados na coluna da esquerda, com seu escopo de atuação respectivo na
    arquitetura ANSI/ SPARC, listado na coluna da direita.
    Estão corretas as associações
    A) I - P , II - R , III - Q
    B) I - Q , II - R , IV - P
    C) I - R , II - P , III - Q
    D) II - P , III - R , IV - Q
    E) II - R , III - Q , IV - P

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Polícia Federal – Cespe – 2013
    A arquitetura ANSI de três níveis separa o nível externo dos usuários, o nível
    conceitual do banco de dados e o nível de armazenamento interno no projeto de
    um banco de dados. O nível interno tem um esquema interno, que descreve a
    estrutura do armazenamento físico do banco de dados e descreve os detalhes
    completos do armazenamento de dados e os caminhos de acesso para o banco de
    dados.
    (        ) CERTO         (       ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Polícia Federal – Cespe – 2013
    A arquitetura ANSI de três níveis separa o nível externo dos usuários, o nível
    conceitual do banco de dados e o nível de armazenamento interno no projeto de
    um banco de dados. O nível interno tem um esquema interno, que descreve a
    estrutura do armazenamento físico do banco de dados e descreve os detalhes
    completos do armazenamento de dados e os caminhos de acesso para o banco de
    dados.
    (        ) CERTO         (       ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

                                                     PROJETO DE
                                                   BANCO DE DADOS

Prof. Renato da Costa - TI - @prof.renatodacosta    


---

    Modelo
    Um modelo de (banco de) dados é uma descrição dos tipos de informações que
    estão armazenadas em um banco de dados.
    Existem linguagens de modelagem para descrever modelos de bancos de dados
    em diferentes níveis de abstração e com diferentes objetivos.


                                    Modelo de Dados é a descrição formal da estrutura
                                                de um Banco de Dados

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Abordagem E-R
    Peter Chen apresenta em 1976 um paradigma de abordagem Entidade e
    Relacionamento (E-R) com um projeto de banco de dados aderente a Arquitetura
    de Três Níveis de Esquemas baseado nos modelos:

    • CONCEITUAL

                                                              Aumenta
    • LÓGICO                                                            Abstração       Detalhamento

                                                                                                       Diminui
    • FÍSICO.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Modelo Conceitual
    Um modelo conceitual é uma descrição do banco de dados de forma
    independente de implementação em um SGBD.
    O modelo conceitual registra que dados podem aparecer no banco de dados, mas
    não registra como estes dados estão armazenados a nível de SGBD.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Modelo Lógico
    Também chamado na literatura de Modelo Representativo ou de Implementação.
    Um modelo lógico é uma descrição de um banco de dados no nível de abstração
    visto pelo usuário do SGBD. Assim, o modelo lógico é dependente do tipo
    particular de SGBD que está sendo usado (hierárquico, rede, orientado a objeto
    ou relacional).

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Modelo Lógico

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Modelo Físico
    Oferece conceitos que descrevem os detalhes de como os dados estão
    armazenados no computador. Destinados a especialistas em informática
    e não a usuários finais comuns, totalmente dependente do SGBD.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Integração da Abordagem E-R com a
    Arquitetura de Três Níveis

                                                   Objetos de Interesse / Aderência
                                     Modelo Conceitual                                  Nível Conceitual
                                         Modelo Lógico                                      Nível Externo
                                          Modelo Físico                                     Nível Interno

Prof. Renato da Costa - TI - @prof.renatodacosta       


---

    SEED PR – Cespe – 2021
    Os sistemas de banco de dados têm um ciclo de vida para sua execução. O modelo
    conceitual, lógico e físico é criado na etapa de
    A) conversão de aplicação.
    B) definição do sistema.
    C) teste e validação.
    D) projeto do banco de dados.
    E) operação do banco de dados.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    SEED PR – Cespe – 2021
    Os sistemas de banco de dados têm um ciclo de vida para sua execução. O modelo
    conceitual, lógico e físico é criado na etapa de
    A) conversão de aplicação.
    B) definição do sistema.
    C) teste e validação.
    D) projeto do banco de dados.
    E) operação do banco de dados.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Udesc - Fepese
    Assinale a alternativa que indica o(s) modelo(s) de projeto de BD que é (são)
    independente(s) do Sistema Gerenciador de Banco de Dados (SGBD) a ser
    adotado.
    A) Modelo conceitual apenas.
    B) Modelo lógico e modelo físico.
    C) Modelo conceitual e modelo lógico.
    D) Modelo conceitual, modelo lógico e modelo físico.
    E) Modelo lógico apenas.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Udesc - Fepese
    Assinale a alternativa que indica o(s) modelo(s) de projeto de BD que é (são)
    independente(s) do Sistema Gerenciador de Banco de Dados (SGBD) a ser
    adotado.
    A) Modelo conceitual apenas.
    B) Modelo lógico e modelo físico.
    C) Modelo conceitual e modelo lógico.
    D) Modelo conceitual, modelo lógico e modelo físico.
    E) Modelo lógico apenas.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    UFPE - Covest
    O Projeto de um banco de dados é normalmente dividido em fases. Assinale a
    afirmativa correta.
    A) Projeto Conceitual: é analisado um modelo de dados em função do SGBD
    definido e usa modelo de dados para descrever a realidade.
    B) Projeto Lógico: linguagem usada para especificar esquemas lógicos, consiste em
    criar um modelo físico de dados a partir do modelo conceitual independente do
    SGBD escolhido.
    C) Projeto Físico: descreve estruturas de armazenamento e métodos de acesso.
    D) Projeto Físico: total independência do SGBD específico.
    E) Projeto Conceitual: define como os dados são armazenados no SGBD específico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    UFPE - Covest
    O Projeto de um banco de dados é normalmente dividido em fases. Assinale a
    afirmativa correta.
    A) Projeto Conceitual: é analisado um modelo de dados em função do SGBD
    definido e usa modelo de dados para descrever a realidade.
    B) Projeto Lógico: linguagem usada para especificar esquemas lógicos, consiste em
    criar um modelo físico de dados a partir do modelo conceitual independente do
    SGBD escolhido.
    C) Projeto Físico: descreve estruturas de armazenamento e métodos de acesso.
    D) Projeto Físico: total independência do SGBD específico.
    E) Projeto Conceitual: define como os dados são armazenados no SGBD específico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Banese – AOCP – 2022
    As três fases previstas em um projeto de banco de dados são:
    A) levantamento de requisitos, modelagem entidade-relacionamento e projeto de
    banco de dados.
    B) modelagem conceitual, projeto lógico e projeto físico.
    C) estudo de viabilidade, modelo lógico e modelo relacional.
    D) viabilidade de projeto, modelo entidaderelacionamento e projeto físico.
    E) projeto lógico, normalização e projeto físico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Banese – AOCP – 2022
    As três fases previstas em um projeto de banco de dados são:
    A) levantamento de requisitos, modelagem entidade-relacionamento e projeto de
    banco de dados.
    B) modelagem conceitual, projeto lógico e projeto físico.
    C) estudo de viabilidade, modelo lógico e modelo relacional.
    D) viabilidade de projeto, modelo entidaderelacionamento e projeto físico.
    E) projeto lógico, normalização e projeto físico.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    TJ RJ – FGV – 2024
    Com relação às três fases de um projeto de um novo banco de dados, avalie se as
    afirmativas a seguir são verdadeiras (V) ou falsas (F).
    ( ) O modelo conceitual pode ter a forma de um diagrama entidade-
    relacionamentos e captura as necessidades de uma organização em termos de
    armazenamento de dados independentemente da sua implementação.
    ( ) O projeto lógico tem como objetivo transformar o modelo conceitual obtido
    na primeira fase em um modelo lógico que definirá como o banco de dados será
    implementado em um SGBD.
    ( ) Na etapa do projeto físico, o modelo de banco d e dados é enriquecido com
    detalhes que influenciam no desempenho do banco mas interferem em suas
    funcionalidades.
    As afirmativas são, respectivamente,

    A) V – F – F.                     B) V – V – F.          C) F – F – F.              D) F – V – V.   E) F – F – V.
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    TJ RJ – FGV – 2024 (Extraída literalmente do Heuser)
    Com relação às três fases de um projeto de um novo banco de dados, avalie se as
    afirmativas a seguir são verdadeiras (V) ou falsas (F).
    ( ) O modelo conceitual pode ter a forma de um diagrama entidade-
    relacionamentos e captura as necessidades de uma organização em termos de
    armazenamento de dados independentemente da sua implementação.
    ( ) O projeto lógico tem como objetivo transformar o modelo conceitual obtido
    na primeira fase em um modelo lógico que definirá como o banco de dados será
    implementado em um SGBD.
    ( ) Na etapa do projeto físico, o modelo de banco de dados é enriquecido com
    detalhes que influenciam no desempenho do banco mas interferem em suas
    funcionalidades.
    As afirmativas são, respectivamente,                         Não

    A) V – F – F.                     B) V – V – F.          C) F – F – F.              D) F – V – V.   E) F – F – V.
Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Unirio
    Em relação aos níveis de abstração de modelo de banco de dados, pode-se afirmar
    que :
    A) existem três níveis de abstração (conceitual, lógico e físico) em que todos os
    níveis são totalmente dependentes do SGBD escolhido para construção do banco
    de dados.
    B) existem três níveis de abstração (conceitual, lógico e físico) em que o único
    nível dependente do SGBD escolhido para construção do banco de dados é o nível
    físico onde é elaborado o modelo Entidade- Relacionamento do banco de dados.
    C) existem dois níveis de abstração (lógico e físico) em que o primeiro representa
    o modelo gráfico do banco de dados independente de SGBD e o segundo
    corresponde aos aspectos de armazenamento, independente do SGBD.
    ...


Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Unirio
    ...
    D) existem dois níveis de abstração (lógico e físico), ambos totalmente
    dependentes do SGBD escolhido para construção do banco de dados. No primeiro
    nível, é utilizado, por exemplo, o modelo Entidade- Relacionamento para
    elaboração do esquema do banco de dados enquanto que, no segundo nível, é
    empregado o modelo relacional.
    E) existem três níveis de abstração (conceitual, lógico e físico) em que os modelos
    elaborados para o nível conceitual são independentes do SGBD escolhido para
    construção do banco de dados, enquanto que os modelos e artefatos elaborados
    para o nível lógico e o nível físico são totalmente dependentes do SGBD.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

    Unirio
    ...
    D) existem dois níveis de abstração (lógico e físico), ambos totalmente
    dependentes do SGBD escolhido para construção do banco de dados. No primeiro
    nível, é utilizado, por exemplo, o modelo Entidade- Relacionamento para
    elaboração do esquema do banco de dados enquanto que, no segundo nível, é
    empregado o modelo relacional.
    E) existem três níveis de abstração (conceitual, lógico e físico) em que os modelos
    elaborados para o nível conceitual são independentes do SGBD escolhido para
    construção do banco de dados, enquanto que os modelos e artefatos elaborados
    para o nível lógico e o nível físico são totalmente dependentes do SGBD.

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---

                        OBRIGADO
                                                                                        Prof. MSc. Renato da Costa
                                                                                        @prof.renatodacosta


Prof. Renato da Costa - TI - @prof.renatodacosta   


---

Prof. Renato da Costa - TI - @prof.renatodacosta   


---
