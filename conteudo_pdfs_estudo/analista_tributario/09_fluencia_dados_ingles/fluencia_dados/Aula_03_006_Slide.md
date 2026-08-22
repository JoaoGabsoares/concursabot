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
arquivo_origem: Aula 03_006_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '03'
titulo_aula: TECNOLOGIA DA INFORMAÇÃO
---

# TECNOLOGIA DA INFORMAÇÃO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                 TECNOLOGIA DA INFORMAÇÃO


                                                                                        Prof. MSc. Renato da
                                                                                        Costa


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                             Professor Renato da Costa
                                                                           Cargo atual:

                                                                             Ministra aulas para concursos públicos desde 1996, tendo sido
                                                                             aprovado em diversos concursos nas esferas estaduais e federais.
                                              @prof.renatodacosta
                                                                             Atualmente é servidor federal, professor de computação do IFRJ,
                                                                             tendo sido aprovado em 1º lugar em concurso de provas e títulos
                                                                             para o quadro efetivo.

                                                   Renato da Costa         Formação:

                                                                             Doutorando em Administração pela Unigranrio; Mestre em Novas
                                                                             Tecnologias Digitais pela UniCarioca e Mestre em Educação pela
                                                                             Universidade de Jaén (Espanha), tem MBA em Gerenciamento de
                                                                             Projetos pela FGV, é pós-graduado em Tecnologia da Informação e
                                                                             Comunicação e pós-graduado em Docência do Ensino Superior
                                                                             sendo ambas as especializações pela Ucam, possui Licenciatura Plena
Prof. Renato da Costa - TI - @prof.renatodacosta                                em Informática, Matemática e Pedagogia além da graduação em
                                                            


---

                                       LINGUAGEM R
                                 TECNOLOGIA DA INFORMAÇÃO

                                                                                        Prof. MSc. Renato da
                                                                                        Costa


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                   LINGUAGEM R
                                                   (INTRODUÇÃO)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Linguagem R
             É uma linguagem idealizada para análise de dados através de um
             sistema para computação estatística e gráﬁca.
             Trata-se de um sistema de licença LIVRE que pode ser utilizado
             gratuitamente.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Pref. de Sapucaia do Sul – Fundatec – 2023
         Assinale a alternativa que identiﬁca uma linguagem e ambiente para
         computação estatística e gráﬁcos, caracterizada pela utilização de
         recursos de software para manipulação de dados, cálculo e exibição
         gráﬁca.
         A) Java
         B) PHP
         C) R
         D) C#
         E) XML

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Pref. de Sapucaia do Sul – Fundatec – 2023
         Assinale a alternativa que identiﬁca uma linguagem e ambiente para
         computação estatística e gráﬁcos, caracterizada pela utilização de
         recursos de software para manipulação de dados, cálculo e exibição
         gráﬁca.
         A) Java
         B) PHP
         C) R
         D) C#
         E) XML

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Como obter o R?
             Uma sugestão de site para o download do R é:
             https://cran.r-project.org/

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Como obter o R Studio?
             O R Studio é o mais popular ambiente de desenvolvimento de
             pesquisas e relatórios com análise de dados em que se faça uso
             do R.
             Para instalar o R Studio é necessário ter o R instalado na máquina
             e em seguida o download pode ser realizado através do link:
             http://www.rstudio.com/products/rstudio/download
             Uma alternativa interessante para baixar os dois programas
             necessários (R e R Studio) se dá a partir do link:
             https://posit.co/download/rstudio-desktop/

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Utilizando o R na nuvem.
             É possível utilizar o R Studio diretamente em um servidor na
             nuvem, para isto basta ter acesso a um navegador e uma conexão
             com a Internet.
             Um serviço que possibilita a criação de projetos na nuvem está
             disponível a partir do URL: https://posit.cloud

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Operadores Matemáticos no R
             ^                Exponenciação
             *                Multiplicação
             /                Divisão
             %%                        Mod – resto da divisão entre dois
             números
             %/%              Quociente
             +                Adição
             -                Subtração
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Variáveis em R (objeto)
             Uma variável (objeto) corresponde a um espaço de memória que
             irá guardar um dado qualquer manipulado pela linguagem.
             O nome de uma variável (objeto) deve necessariamente começar
             com uma letra, faz distinção de letras maiúsculas e minúsculas,
             pode conter números e admite como caracteres especiais o
             underline “_” e o ponto “.”.

             OBS: Tudo no R é um objeto, variáveis podem ser genericamente
             chamadas de objetos.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe - 2023
         Na linguagem R, admite-se que o nome de uma variável seja
         iniciado com uma letra ou com um número.
         ( ) Certo      ( ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Operador de Atribuição
             = Recebe
             <- Implica
             -> Implica

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Primeiro desaﬁo!!!
             var1 =5
             var2 =7
             var2 =var1+var2
             var1 <- var2
             var2 -> var3
             print(var2)

             [1] 12
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Polícia Federal – Cespe - 2018
         Considere os comandos a seguir, na linguagem R, os quais serão
         executados no ambiente do R, e considere, ainda, que > seja um
         símbolo desse ambiente.
         > helloStr <- "Hello world!"
         > print(helloStr)
         Nesse caso, após a execução dos comandos, será obtido o
         resultado a seguir.
         [1] "Hello world!“
         ( ) Certo         ( ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Polícia Federal – Cespe - 2018
         Considere os comandos a seguir, na linguagem R, os quais serão
         executados no ambiente do R, e considere, ainda, que > seja um
         símbolo desse ambiente.
         > helloStr <- "Hello world!"
         > print(helloStr)
         Nesse caso, após a execução dos comandos, será obtido o
         resultado a seguir.
         [1] "Hello world!“
         ( ) Certo         ( ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe - 2023
         Na linguagem R, admite-se que o nome de uma variável seja
         iniciado com uma letra ou com um número.
         ( ) Certo      ( ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe - 2023
         Na linguagem R, admite-se que o nome de uma variável seja
         iniciado com uma letra ou com um número.
         ( ) Certo      ( ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe - 2023
         Tendo como referência a linguagem R, julgue o item subsecutivo.
         O resultado da execução do código R a seguir será 2.
             x <- 10
             y = 12
             z = x+y
             print(z)

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Dataprev – Cespe - 2023
         Tendo como referência a linguagem R, julgue o item subsecutivo.
         O resultado da execução do código R a seguir será 2.
             x <- 10
             y = 12
             z = x+y
             print(z)

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função
             Uma função é uma sub-rotina usada em um programa, um conjunto de
             comandos que realiza uma tarefa específica.
             Toda função possui um par de parênteses onde devemos colocar
             argumentos de entrada separados por vírgula para que haja um
             processamento.
             Sintaxe:
             nome(argumento1, argumento2, ...)
             Veremos a seguir alguns exemplos de funções.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função print()
             print() é uma função usada genericamente para imprimir argumentos,
             ou seja, para saída de dados.


             OBS: No modo interativo não precisamos utilizar a função print(), esta
             função se torna necessária ao se trabalhar com scripts em R.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função ls()
             Quando usado sem argumentos retorna o nome das variáveis/objetos
             definidos pelo usuário.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         AGERGS – Fundatec – 2022
         Quando usamos o símbolo “=” ou “<” seguido de “-” estamos
         criando objetos com um nome que aparece à esquerda e que
         contém alguns elementos (o que vem à direita do símbolo). Quando
         criamos um objeto, ele ﬁca guardado na memória do R até que se
         feche o programa. Porém, os objetos criados ﬁcam ocultos. Para ver
         a lista de arquivos ocultos, basta dar o seguinte comando:
         A) tuple()
         B) console()
         C) rain()
         D) table_rain()
         E) ls()


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         AGERGS – Fundatec – 2022
         Quando usamos o símbolo “=” ou “<” seguido de “-” estamos
         criando objetos com um nome que aparece à esquerda e que
         contém alguns elementos (o que vem à direita do símbolo). Quando
         criamos um objeto, ele ﬁca guardado na memória do R até que se
         feche o programa. Porém, os objetos criados ﬁcam ocultos. Para ver
         a lista de arquivos ocultos, basta dar o seguinte comando:
         A) tuple()
         B) console()
         C) rain()
         D) table_rain()
         E) ls()


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Help de uma função
             Para acessar a ajuda de uma função e saber mais sobre sua sintaxe, seus
             argumentos é possível digitar a função precedida de um sinal de
             interrogação ou utilizar a função help()
             Exemplos:
             ?ls
             help(ls)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Operadores de Comparação
             >                Maior que
             <                Menor que
             >=               Maior ou igual
             <=               Menor ou igual
             ==               Igual
             !=               Diferente


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Valores Lógicos
             TRUE
             FALSE


             T
             F

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Operadores Lógicos
             &                E
             |                Ou
             !                Não
             xor()            Ou Exclusivo

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Tabela Verdade
                 A             B           A&B      A|B                 !A              xor(A,B)

                  T            T               T       T                 F                 F
                  T            F               F       T                 F                 T
                  F            T               F       T                 T                 T
                  F            F               F       F                 T                 F
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Polícia Federal – Cespe - 2018
         Considere o programa a seguir, escrito em R.
         x <- TRUE
         y <- FALSE
         print (xy)

         Após a execução do programa, será obtido o seguinte resultado.
         [1] FALSE

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Polícia Federal – Cespe - 2018
         Considere o programa a seguir, escrito em R.
         x <- TRUE
         y <- FALSE
         print (xy)

         Após a execução do programa, será obtido o seguinte resultado.
         [1] FALSE

         (       ) Certo                   (       ) Errado

         OBS: x é uma variável, y é outra variável, não existe a variável xy.


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Polícia Federal – Cespe – 2018 (ADAPTADA)
         Considere o programa a seguir, escrito em R.
         x <- TRUE
         y <- FALSE
         print (x&y)

         Após a execução do programa, será obtido o seguinte resultado.
         [1] FALSE

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Comentários
             É possível inserir comentários no final de uma linha de comando em R
             utilizando o caractere #.
             Exemplo: > x = 5                      # A variável x recebe 5

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Dataprev – Cespe – 2023
         Para fazer comentários na linguagem R, é necessário acrescentar os
         caracteres // antes do que se deseja comentar.

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Dataprev – Cespe – 2023
         Para fazer comentários na linguagem R, é necessário acrescentar os
         caracteres // antes do que se deseja comentar.

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Classes de variáveis
              ∙     numeric
              ∙     character
              ∙     logical                        Classes básicas ou atômicas
              ∙     integer
              ∙     Complex

              ∙     matrix
              ∙     array
              ∙     data.frame
              ∙     list
              ∙     function
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função class()
             Retorna a classe de um objeto apresentado como argumento.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Tipos de Dados
              ∙     double
              ∙     integer
              ∙     character
              ∙     logical

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função typeof()
             Retorna o tipo de armazenamento de qualquer objeto.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função c() – Vetores
             Um vetor é um array unidimensional, uma estrutura HOMOGÊNEA de
             dados, ou seja, todos os seus elementos são de mesmo tipo.
             Para criar um objeto do tipo vetor usamos a função c() de concatenate
             ou concatenar.
             Exemplo 1
             nome_do_vetor1=c(5,7,9)
             Exemplo 2
             nome_do_vetor2=c(“renato”, “costa”, “carol”)
             ...

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

              Função c() – Vetores
              ...
              Exemplo 3:
              nome_do_vetor3=c(5,7,9,”a”)

              # Os elementos de dados em um vetor são chamados de componentes.
              # Observe que os caracteres/strings no R devem estar contidos entre
              “aspas duplas” ou ‘aspas simples’.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

            Índice dos Vetores
            Os vetores em R são indexados a partir do 1.
            A referência do índice estará entre colchetes após o nome do vetor.
            Exemplos:
            notas.aluno = c(7, 8.5, 9) # cria um vetor com as 3 notas de um aluno
            notas.aluno[2] # retornará a segunda nota do aluno.
            notas.aluno[-1] # removerá a primeira nota.
            Notas.aluno[4]=5 # acrescentará o número 5 como quarto elemento do vetor.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         ANP – CESPE – 2022
         Considere-se o script R que se segue.
         X <- c(0, 19, 205, 34, 506)
         Y <- X
         X[2] <- 91
         Y[6] <- 71
         print(X)
         print(Y)
         O resultado da execução desse script é o apresentado a seguir.
         0 91 205 34 506
         0 19 205 34 506 71

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         ANP – CESPE – 2022
         Considere-se o script R que se segue.
         X <- c(0, 19, 205, 34, 506)
         Y <- X
         X[2] <- 91
         Y[6] <- 71
         print(X)
         print(Y)
         O resultado da execução desse script é o apresentado a seguir.
         0 91 205 34 506
         0 19 205 34 506 71

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

              Operações com Vetores
              Operações podem ser feitas entre um vetor e um número ou entre
              vetores.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

              Operações com Vetores
              Exemplo de operação entre um vetor e um número:
              num = 5
              vetor1 = c(3,7,9)
              vetor2 = num+vetor

              [1] 8 12 14

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

              Operações com Vetores
              Exemplo de operação entre vetores de mesmo comprimento:
              vetor1 = c(3,7,9)
              vetor2 = c(9,8,15)
              soma = vetor1+vetor2
              soma


              [1] 12 15 24

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

              Operações com Vetores
              Para que possamos trabalhar operações matemáticas com vetores de
              quantidade de elementos diferentes, é necessário que os
              comprimentos sejam múltiplos.
                                                                             vetor1     vetor2   soma
              vetor1 = c(3,7,9)                                                   3       9
              vetor2 = c(9,8,15,10,20,30)                                         7       8
              soma = vetor1+vetor2                                                9      15

              soma                                                                       10
                                                                                         20
              [1] 12 15 24 13 27 39                                                      30

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Polícia Federal – Cespe – 2018
         Considere o programa a seguir, escrito em R.
         x <- c (3, 5, 7)
         y <- c (1, 9, 11)
         print (x + y)

         Após a execução do programa, será obtido o seguinte resultado.

         [1] 36

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Polícia Federal – Cespe – 2018
         Considere o programa a seguir, escrito em R.
         x <- c (3, 5, 7)
         y <- c (1, 9, 11)
         print (x + y)

         Após a execução do programa, será obtido o seguinte resultado.

         [1] 36

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Polícia Federal – Cespe – 2018
         Considere o programa a seguir, escrito em R.
         x <- c (3, 5, 7)
         y <- c (1, 9, 11)
         print (x + y)

         Após a execução do programa, será obtido o seguinte resultado.

         [1] 36

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Polícia Federal – Cespe – 2018 (ADAPTADA)
         Considere o programa a seguir, escrito em R.
         x <- c (3, 5, 7)
         y <- c (1, 9, 11)
         print(sum (x, y))

         Após a execução do programa, será obtido o seguinte resultado.

         [1] 36

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         TCE ES – FGV – 2023
         No contexto da linguagem de programação R, analise o código a
         seguir.
         x <- c(4, NA)
         x <- 2
         x^2
         A saída (output) da última linha será:
         A) [1] 16;
         B) [1] 4;
         C) [1] 16 4;
         D) [1] NA;
         E) [1] 16 NA.
                   Em R, "NA" representa um valor ausente ou faltante. A sigla "NA" significa
                   "Not Available" (Não Disponível).
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TCE ES – FGV – 2023
         No contexto da linguagem de programação R, analise o código a
         seguir.
         x <- c(4, NA)
         x <- 2
         x^2
         A saída (output) da última linha será:
         A) [1] 16;
         B) [1] 4;
         C) [1] 16 4;
         D) [1] NA;
         E) [1] 16 NA.


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função seq()
             A função seq() gera uma sequência (crescente ou decrescente) do valor
             do argumento from até o valor do argumento to, com salto entre valores
             consecutivos de acordo com o argumento by.
             Exemplo 1:
             seq(1,10)
             [1] 1 2 3 4 5 6 7 8 9 10
             Exemplo 2:
             seq(1,10,2)
             [1] 1 3 5 7 9
             ...
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função seq()
             ...
             seq(10,1)
             [1] 10 9 8 7 6 5 4 3 2 1
             Exemplo 3:
             seq(8,2,-2)
             [1] 8 6 4 2
             ...

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Operador para sequências numéricas
             Vetores sequenciais também podem ser criados com o uso do operador
             “:” (dois pontos).


             Exemplo
             1:10
             [1] 1 2 3 4 5 6 7 8 9 10

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn FO – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.

         O código seq(3, 22, length=6) apresentará, ao ser executado, o
         resultado a seguir.
         [1]    3 4 5 6 7 8

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Seﬁn FO – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.

         O código seq(3, 22, length=6) apresentará, ao ser executado, o
         resultado a seguir.
         [1]    3 4 5 6 7 8

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função rep()
             A função rep() gera uma sequência onde o primeiro argumento
             representa a expressão a ser repetida e o segundo argumento
             representa o número de repetições.
             Exemplo 1:
             rep(1,5)
             [1] 1 1 1 1 1
             Exemplo 2
             rep(10,2)
             [1] 10 10
             ...
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Segundo desaﬁo!!!
             rep(seq(-1,1,0.5),2)
             [1]


             [1] -1.0 -0.5 0.0 0.5 1.0 -1.0 -0.5 0.0 0.5 1.0

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Terceiro desaﬁo!!!
             rep(c(1,3,5),c(3,2,1))
             [1]


             [1] 1 1 1 3 3 5

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         ANP – Cespe – 2022
         Julgue o item a seguir, relativos a conceitos de R.

         A execução do seguinte código R resulta em 1000.

         sum(rep(5,20))+sum(seq(0,200,25))

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         ANP – Cespe – 2022
         Julgue o item a seguir, relativos a conceitos de R.

         A execução do seguinte código R resulta em 1000.

         sum(rep(5,20))+sum(seq(0,200,25))

         (        ) Certo                  (       ) Errado

    rep(5,20)                                                 seq(0,200,25)
    Replica o número 5 por 20                                 Cria a sequência: [1] 0 25 50 75 100 125 150 175
    vezes                                                     200
    sum(rep(5,20))                                            sum(seq(0,200,25))
    Retorna 100 como resultado                                Retorna 900 como resultado
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função sample()
             É usada no R para criar amostras aleatórias a partir de um vetor ou de
             uma sequência de valores.
             Sintaxe:
             sample(x, size, replace)
             Exemplo 1:
             vetor=c("bola","pipa", "peao", "boneca")
             sample(vetor,1)
             [1]


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função sample()
             ...
             Exemplo 2:
             sample(1:60,6,replace=FALSE)
             [1] 57 4 39 1 34 23

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função set.seed()
             Em R, a função set.seed() é utilizada para definir uma semente (seed)
             para a geração de números aleatórios. Isso é útil quando você quer
             garantir que seus resultados sejam reproduzíveis.
             Exemplo:
             set.seed(1)
             sample(1:60,6,replace=FALSE)
             [1] 57 4 39 1 34 23

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Funpresp – Cespe – 2022
         Julgue o item a seguir, relativos a conceitos de R.

         No programa R, o comando > sample (1:60, 6) fornece os seis
         números aleatórios para um jogo na Mega Sena.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Funpresp – Cespe – 2022
         Julgue o item a seguir, relativos a conceitos de R.

         No programa R, o comando > sample (1:60, 6) fornece os seis
         números aleatórios para um jogo na Mega Sena.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                             LINGUAGEM R
                                       (OPERAÇÕES COM MATRIZES)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Banco do Brasil – Cesgranrio – 2018
         O script em R apresentado abaixo gera um determinado gráﬁco.

         c=1:6
         x=c(2,4,6)
         y<-x+c
         rev(c)->k
         f=sort(y)
         barplot(f)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

   A)


                                                                     D)


   B)


                                                                       E)


   C)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

   A)


                                                                     D)


   B)


                                                                       E)


   C)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função rev()
             A função rev() fornece uma versão invertida de seu argumento.
             Exemplo:
             c=1:6
             rev(c)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função sort()
             A função sort() ordena um objeto em ordem crescente ou decrescente.
             Sintaxe:
             sort( x, decreasing=FALSE)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matriz
             Uma matriz é um array bidimensional de elementos de dados do mesmo
             tipo (homogêneos).
             A matriz pode ser somente de números, somente de strings de
             caracteres ou somente de valores lógicos, por exemplo.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Representação matricial
             Em uma representação matricial devemos referenciar LINHAS e
             COLUNAS, respectivamente.


             Matriz 2x3


             Matriz 3x2

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função cbind()
             A função cbind() em R é usada para combinar diferentes objetos de
             dados por coluna, ou seja, "ligar" ou "juntar" colunas de diferentes
             conjuntos de dados.
             O termo "cbind" significa "column bind" (ligação por coluna).
             É possível criar matrizes combinando vetores com a função cbind()
             Exemplo 1:
             vetor1 = 1:5
             vetor2 = 5:1
             vetor3 = c(1,1,2,3,5)
             matriz = cbind(vetor1, vetor2, vetor3)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função rbind()
             A função rbind() em R é usada para combinar diferentes objetos de
             dados por linha, ou seja, "ligar" ou "juntar" linhas de diferentes
             conjuntos de dados.
             O termo “rbind" significa “row bind" (ligação por linha).
             É possível criar matrizes combinando vetores com a função rbind()
             Exemplo 1:
             vetor1 = 1:5
             vetor2 = 5:1
             vetor3 = c(1,1,2,3,5)
             matriz = rbind(vetor1, vetor2, vetor3)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função dim()
             A função dim() em R é usada para retornar (informar) as dimensão de
             um objeto.
             Com a função dim() é possível também converter um vetor em um array
             (arranjo) de N dimensões.
             OBS: O R preenche o array ao longo das colunas.
             Exemplo 1:
             dim(matriz)
             Exemplo2:
             vetor=c(3,2,1,4,5,6)
             dim(vetor) <- c(3,2)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn Fortaleza – Cespe – 2023
         Julgue o item a seguir, relativos a conceitos de R.

         O código

         vector <- c(1,2,3,4,5,6)
         dim(vector) <- c(2,3)
         vector

         apresentará, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Seﬁn Fortaleza – Cespe – 2023
         Julgue o item a seguir, relativos a conceitos de R.

         O código

         vector <- c(1,2,3,4,5,6)
         dim(vector) <- c(2,3)
         vector

         apresentará, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Referenciando elementos da matriz
             O índice de um elemento de uma matriz é referenciado como m x n, lê
             se m por n, onde m é a quantidade de linhas e n a quantidade de
             colunas:
             [linha,coluna]
             Exemplo:
             matriz[2,2]
             [1] 4

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Excluindo elementos da matriz
             Para remover uma linha utilizamos o sinal de – na frente da referência
             da linha no índice da matriz.
             Exemplo:
             matriz[-2,]

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Excluindo elementos da matriz
             Para remover uma coluna utilizamos o sinal de – na frente da referência
             da coluna no índice da matriz.
             Exemplo:
             matriz[,-2]

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Excluindo elementos da matriz
             Para remover uma elemento específico atribuímos o valor NA a sua
             referência no índice
             Exemplo:
             matriz[2,2]<-NA

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função matrix()
              Cria uma matriz a partir de um determinado conjunto de valores.
              Sintaxe:
              matrix(data, nrow, ncol)
              Exemplo:
              vetor = 1:10 # Cria um vetor com 10 elementos variando de 1 até 10
              matrix( vetor, nrow=2, ncol=5) # Cria uma matriz distribuindo os dados
              do vetor em 2 linhas e 5 colunas

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn FO – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.

         O código matrix(1:9, nrow = 3, ncol = 3) apresentará, ao ser
         executado, o resultado a seguir

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Seﬁn FO – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.

         O código matrix(1:9, nrow = 3, ncol = 3) apresentará, ao ser
         executado, o resultado a seguir

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Matrizes especiais: matriz quadrada
              É toda matriz cujo número de linhas é igual ao número de colunas.
              1x1 matriz quadrada de ordem 1;
              2x2 matriz quadrada de ordem 2;
              3x3 matriz quadrada de ordem 3

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matrizes especiais: matriz identidade
              A matriz [1] e qualquer matriz quadrada onde os elementos da diagonal
              principal são iguais a 1 e todos os demais elementos são iguais a zero
              são chamadas de matriz identidade.
              Exemplo:
              dados = c(1, 0, 0 , 0 , 1, 0 , 0 , 0 ,1)
              matrix(dados, 3, 3)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matrizes especiais: matriz nula
              Toda matriz cujos elementos são iguais a zero.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matrizes especiais: matriz transposta
              Transposta de uma matriz A é a matriz At tal que os números que
              formam cada coluna i da matriz At são, ordenadamente, iguais aos
              números que formam cada linha i de A.
              Exemplo:
              Considerando uma matriz 2x3 a sua matriz transposta será 3x2.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função t()
              Dada uma matriz X, t() retorna a transposta de X.
              Exemplo:
              x = matrix(1:6, 2, 3)
              t(x)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Adição de matrizes
              É a adição das matrizes necessariamente de mesmo tipo (linhas e
              colunas), A e B, em que cada elemento é a soma dos seus
              correspondentes.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Adição de matrizes
                                                        Produção da Filial A
                                          Dia 1         Dia 2              Dia 3
                Modelo 1                     49           60                  70
                Modelo 2                     90           48                  73

                                                        Produção da Filial B
                                          Dia 1         Dia 2              Dia 3
                Modelo 1                     76           80                  45
                Modelo 2                     93           60                  50

                                                   Produção das Filiais A e B
                                           Dia 1        Dia 2              Dia 3
                 Modelo 1
                 Modelo 2

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                      


---

             Adição de matrizes
                                                        Produção da Filial A
                                          Dia 1         Dia 2              Dia 3
                Modelo 1                     49           60                  70
                Modelo 2                     90           48                  73

                                                        Produção da Filial B
                                          Dia 1         Dia 2              Dia 3
                Modelo 1                     76           80                  45
                Modelo 2                     93           60                  50

                                                   Produção das Filiais A e B
                                           Dia 1        Dia 2              Dia 3
                 Modelo 1                    125          140                115
                 Modelo 2                    183          108                123

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                      


---

             Quarto desaﬁo!!!
             a = matrix(c(4, -5, 7, 3), 2, 2)
             b = matrix(c(2, -3, 1, -6), 2, 2)
             c = a+b
             print(c)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matrizes especiais: matriz oposta
              Dada uma matriz A, chama-se oposta de A a matriz que, adicionada com
              A, resulta na matriz nula.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Subtração de matrizes
              A diferença de duas matrizes do mesmo tipo, A e B, nessa ordem, é a
              soma de A com a oposta de B.
              * Matriz diferença

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Quinto desaﬁo!!!
             a = matrix(c(4, -5, 7, 3), 2, 2)
             b = matrix(c(2, -3, 1, -6), 2, 2)
             c = a-b
             print(c)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Multiplicação de um número real por
             uma matriz
              Quando multiplicamos o número real p pela matriz C encontraremos
              como produto outra matriz p*C de ordem mxn e seus elementos é o
              produto de p por cada elemento de C.
              Exemplo 1:

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Multiplicação de matrizes
              É necessário que o número de colunas da primeira matriz seja igual ao
              número de linhas da segunda matriz.

                                                                                        =
                           Amxn * Bnxp Cmxp

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Multiplicação de matrizes
                                                   Maçã              Uva              Laranja         Mamão

                  Quantidade                         25                30                  100            20
                        (KG)

                                                                             Preço por Quilograma (em real)

                                                                Fornecedor 1                     Fornecedor 2

                                         Maçã                               2,00                         2,40

                                           Uva                              3,50                         3,00

                                      Laranja                               0,80                         0,85

                                       Mamão                                1,70                         1,80

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                          


---

             Multiplicação de matrizes
                                                   Maçã              Uva              Laranja         Mamão       Matriz 1x4
                  Quantidade                         25                30                  100            20
                        (KG)

                                                                             Preço por Quilograma (em real)

                                                                Fornecedor 1                     Fornecedor 2     Matriz 4x2
                                         Maçã                               2,00                         2,40

                                           Uva                              3,50                         3,00

                                      Laranja                               0,80                         0,85

                                       Mamão                                1,70                         1,80


                                                                                                                269,00   271,00
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                          


---

             Sexto desaﬁo!!!

         •    Primeira linha x Primeira coluna
         •    Primeira linha x Segunda coluna
         •    Primeira linha x Terceira coluna
         •    Segunda linha x Primeira coluna
         •    Segunda linha x Segunda coluna
         •    Segunda linha x Terceira coluna

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         A=matrix(c(1,2,3,4,5,6), ncol=2, nrow=3)
         B=matrix(c(6,5,4,3,2,1), nrow=3, ncol=2)
         C=A*B

         O resultado da execução do código R precedente será o seguinte.

         dim(C)
         [1] 2 2

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Dataprev – Cespe – 2023
         A=matrix(c(1,2,3,4,5,6), ncol=2, nrow=3)
         B=matrix(c(6,5,4,3,2,1), nrow=3, ncol=2)
         C=A*B

         O resultado da execução do código R precedente será o seguinte.

         dim(C)
         [1] 2 2

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função diag()
              A função diag() em R é usada para retornar (informar) os
              elementos da diagonal de uma matriz.
              Com a função diag() é possível também substituir os elementos de
              uma diagonal por um vetor.
              Exemplo 1:
              matriz <-matrix(1:16, 4, 4)
              diag(matriz)
              Exemplo 2:
              diag(matriz) <- c(1,2,3,4)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TCE ES – FGV – 2023
         Analise o código da linguagem de programação R a seguir.

         mat <- matrix(c(16:1), ncol = 4, nrow = 4)
         print (diag(mat)[1:3])

         A saída (output) do print será:
         A) [1] 16 11 6;
         B) [1] 1 6 11;
         C) [1] 11 6 1;
         D) [1] 16 11 6 1;
         E) [1] 1 6 11 16.


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TCE ES – FGV – 2023
         Analise o código da linguagem de programação R a seguir.

         mat <- matrix(c(16:1), ncol = 4, nrow = 4)
         print (diag(mat)[1:3])

         A saída (output) do print será:
         A) [1] 16 11 6;
         B) [1] 1 6 11;
         C) [1] 11 6 1;
         D) [1] 16 11 6 1;
         E) [1] 1 6 11 16.


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Determinante
              O propósito de calcular o determinante de uma matriz é identificar
              se um sistema linear é possível e determinado, quando seu
              resultado é diferente de zero.
              * O determinante de uma matriz de ordem 1 é o próprio elemento.
              * O determinante de uma matriz quadrada de ordem 2 é o produto
              da diagonal principal subtraído do produto da diagonal secundária.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         O resultado da execução do código R a seguir será [1] -2.

         B <- matrix(1:4, ncol = 2)
         det(B)

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Dataprev – Cespe – 2023
         O resultado da execução do código R a seguir será [1] -2.

         B <- matrix(1:4, ncol = 2)
         det(B)

         (       ) Certo                   (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Matrizes multidimensionais
              Uma matriz multidimensional é uma matriz cujos elementos são
              matrizes. Por exemplo, o primeiro elemento de uma matriz
              tridimensional é uma matriz com duas dimensões.
              Exemplo 1:
              vetor = 1:27
              dim(vetor) = c(3,3,3)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função array()
              Permite a criação de matrizes multidimensionais.
              Exemplo 1:
              array(1:3, c(2,4,3))


              #recicla de 1 até 3 preenchendo 3 matrizes
              de duas linhas e quatro colunas

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MPE SC – FGV - 2022
         Analise o código da linguagem de programação R a seguir.

         xpto <- array(c(1:24), dim = c(4, 3, 2))
         print (xpto[3, 2, 1])

         Na execução desse código, o print produz o valor:
         A) 5
         B) 7
         C) 10
         D) 18
         E) 19


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MPE SC – FGV - 2022
         Analise o código da linguagem de programação R a seguir.

         xpto <- array(c(1:24), dim = c(4, 3, 2)) print (xpto[3, 2, 1])

         Na execução desse código, o print produz o valor:
         A) 5
         B) 7
         C) 10
         D) 18
         E) 19

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP – 2020
         Um analista do MJSP necessita criar a seguinte matriz em linguagem
         R:

         Sabendo disso, assinale a alternativa que apresenta corretamente o
         código que o analista deverá escrever em linguagem R.
         A) array(data=c(45,75,51,0.17),nrow=2,ncol=2).
         B) array(c=(45,75,51,0.17),row=2,col=2).
         C) data=c(45,75,51,0.17),nrow=2,ncol=2.
         D) matrix(data=c(45,75,51,0.17),nrow=2,ncol=2).
         E) matrix(c=(45,75,51,0.17),row=2,col=2).

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP – 2020
         Um analista do MJSP necessita criar a seguinte matriz em linguagem
         R:

         Sabendo disso, assinale a alternativa que apresenta corretamente o
         código que o analista deverá escrever em linguagem R.
         A) array(data=c(45,75,51,0.17),nrow=2,ncol=2).
         B) array(c=(45,75,51,0.17),row=2,col=2).
         C) data=c(45,75,51,0.17),nrow=2,ncol=2.
         D) matrix(data=c(45,75,51,0.17),nrow=2,ncol=2).
         E) matrix(c=(45,75,51,0.17),row=2,col=2).

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                        LINGUAGEM R
                                (OPERAÇÕES COM DATA FRAMES)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Data Frames
              Um data frame é uma tabela propriamente dita e pode ser criada a
              partir dos vetores existentes através da função data.frame().
              Exemplos:
              nomes <- c('Renato', 'Brunno', 'Diego', 'Adriana', 'Nelma’)
              naturalidades <- c('RJ', 'MG', 'DF', 'SP', 'GO’)
              idades <- c(46, 33, 29, 40, 32)
              tabela <- data.frame(nomes, naturalidades, idades)
              View(tabela)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função View()
              A função View() abre um visualizador de dados em estilo de planilha.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função edit()
              A função edit() abre um editor de dados em estilo de planilha.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Data Frames
              Para obtermos os dados referentes a primeira linha podemos usar
              a sintaxe:
              tabela[1,]
              Para obtermos os dados referentes a terceira coluna podemos usar
              as sintaxes:
              tabela[,3]
              tabela$idades

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn Fortaleza – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.
         O código
         x <- data.frame(“id”=1:5,“idade”=c(33,50,47,51,54), “nome”=
         c(“Yeshua”, “Mariah”, “Paul”, “John”, “Peter”))
         x[3]
         apresentará, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Seﬁn Fortaleza – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.
         O código
         x <- data.frame(“id”=1:5,“idade”=c(33,50,47,51,54), “nome”=
         c(“Yeshua”, “Mariah”, “Paul”, “John”, “Peter”))
         x[3]
         apresentará, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Data Frames
              Para se referir a um componente do Data Frame, digite o nome do
              Data Frame, o cifrão e o nome do componente.
              Exemplo 1:
              tabela$nomes
              Exemplo 2:
              tabela$nomes[tabela$idades>=30]

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função order()
              A função order() pode ser utilizada para ordenar um vetor, uma
              matriz ou um data frame de modo crescente ou decrescente.
              Exemplo 1:
              tabela=tabela[order(tabela$nomes)]
              Exemplo 2:
              tabela=tabela[order(tabela$nomes, decreasing = TRUE),]

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         lista <- data.frame( id=c(10,11,12,13), nome = c('pedro’, 'mauro’,
         'maria’, 'joana’), sexo=c('M','M','F','F’), uf= c('PA','RJ','AL',NA),
         row.names=c('r1','r2','r3','r4’))

         Considerando-se o dataframe lista do código R apresentado, ao se
         executar o comando dim(lista), o resultado será [1] 4 4.
         (  ) Certo     (  ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         lista <- data.frame( id=c(10,11,12,13), nome = c('pedro’, 'mauro’,
         'maria’, 'joana’), sexo=c('M','M','F','F’), uf= c('PA','RJ','AL',NA),
         row.names=c('r1','r2','r3','r4’))

         Considerando-se o dataframe lista do código R apresentado, ao se
         executar o comando dim(lista), o resultado será [1] 4 4.
         (  ) Certo     (  ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                               LINGUAGEM R
                                          (OPERAÇÕES ESTATÍSTICAS)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Funções estatísticas (básicas)
             •        sum()
             •        mean()
             •        median()
             •        min()
             •        max()
             •        var()
             •        sd()
             OBS: A base do R não oferece uma função para encontrar a moda, sendo
             necessário instalar o pacote modeest e utilizar a função mfv()
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

        Tabela de base para usarmos na aula:
             nomes <- c('Renato', 'Brunno', 'Diego', 'Adriana', 'Nelma’)
             naturalidades <- c('RJ', 'MG', 'DF', 'SP', 'GO’)
             idades <- c(46, 33, 29, 40, 32)
             tabela <- data.frame(nomes, naturalidades, idades)
             View(tabela)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Funções sum()
             A função sum(x), calcula a soma de x.
             Exemplo 1:
             sum(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Medidas de tendência central
             “São usadas para indicar um valor que tende a tipificar, ou a representar
             melhor um conjunto de números. São exemplos de medidas usadas, a
             média, a mediana e a moda.”
             (Stevenson, 1981)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função mean()
             A função mean(x), calcula a média aritmética simples de x.
             A média aritmética é o quociente da soma dos valores do objeto pelo
             número deles.
             Exemplo 1:
             mean(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função median()
             A função median(x), calcula a mediana de x.
             A mediana é o número que se encontra no centro de uma série de
             números, estando estes dispostos segundo uma ordem.
             Exemplo 1:
             median(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Medidas de dispersão
             “São necessários dois tipos de medidas para descrever adequadamente
             um conjunto de dados. Além da informação quanto ao “meio” de um
             conjunto de números, é conveniente dispor também de um método que
             permita expremir a dispersão. As medidas de dispersão indica se os
             valores estão relativamente próximos uns dos outros.
             São medidas de dispersão, o intervalo, o desvio médio, a variância e o
             desvio padrão.”
             (Stevenson, 1981)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função min()
             A função min(x), calcula o menor valor de x.
             Exemplo 1:
             min(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função max()
             A função max(x), calcula o maior valor de x.
             Exemplo 1:
             max(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função max()
             A função max(x), calcula o maior valor de x.
             Exemplo 1:
             max(tabela$idades)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Quinto desaﬁo!!!
             Calcule a Amplitude (Intervalo) Total da coluna referente às
             idades da tabela.

                                            max(tabela$idades)-min(tabela$idades)
                                      # quanto maior a amplitude maior a dispersão
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                    


---

             Função var()
             A função var(x), calcula a variância de x.
              É a média aritmética dos quadrados dos desvios de cada valor em
             relação à média.
             Exemplo 1:
             var(tabela$idades)

             # A função var() calcula a variância amostral.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                      Idade                Média                         Desvio     Quadrado do
                                                                                                      Desvio
                                         46                   36
                                         36                   36
                                         29                   36
                                         40                   36
                                         32                   36
                                                                                     Soma do
                                                                                   Quadrado dos
                                                                                     Desvios
                                                                                     Variância
                                                                                    Populacional
                                                                                        Variância
                                                                                        Amostral
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                      Idade                Média                         Desvio     Quadrado do
                                                                                                      Desvio
                                         46                   36                           10           100
                                         36                   36                           -3            9
                                         29                   36                           -7           49
                                         40                   36                           4            16
                                         32                   36                           -4           16
                                                                                     Soma do            190
                                                                                   Quadrado dos
                                                                                     Desvios
                                                                                     Variância       190/5 = 38
                                                                                    Populacional
                                                                                        Variância   190/4 = 47,5
                                                                                        Amostral
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função sd()
             A função sd(x), calcula o desvio padrão de x.
             É a raiz quadrada da variância amostral.
             Exemplo 1:
             sd(tabela$idades)
             # A variância é calculada a partir do quadrado dos desvíos, ela é um número
             em unidade quadrada em relação à variável em questão, o que é
             inconveniente. O Desvio Padrão é a raíz quadrada da variância que resulta
             em uma medida útil e prática.
             # standard deviation
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP - 2020
         A linguagem R é uma poderosa linguagem para se trabalhar com
         dados. Assinale a alternativa que apresenta somente funções da
         Linguagem R.
         A) input(), output(), ﬂoor(), avg().
         B) mean(), summary(), quantile( ), var().
         C) sum(), avarage(), clean(), goto().
         D) class(), vetor(), sum(), min().
         E) for(), loop(), data(), math().

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP - 2020
         A linguagem R é uma poderosa linguagem para se trabalhar com
         dados. Assinale a alternativa que apresenta somente funções da
         Linguagem R.
         A) input(), output(), ﬂoor(), avg().
         B) mean(), summary(), quantile( ), var().
         C) sum(), avarage(), clean(), goto().
         D) class(), vetor(), sum(), min().
         E) for(), loop(), data(), math().

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                    LINGUAGEM R
                                                     (GRÁFICOS)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Gráﬁcos
        “O gráfico estatístico é uma forma de apresentação dos dados, cujo objetivo é
        o de produzir, no investigador ou no público em geral, uma impressão mais
        rápida e viva do fenômeno em estudo, já que os gráficos falam mais rápido à
        compreensão que as séries.”
        (CRESPO, 1996)
        Iremos abordar os gráficos básicos de uma instalação padrão do R.
        Gráficos mais elaborados podem ser utilizados a partir da utilização do pacote
        ggplot2.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                        Tipos de gráﬁcos da base do R

                                  barplot          boxplot                     coplot   curve
                                  dotplot              hist               mosaicplot    pairs
                                      pie              plot                  qqnorm     stem
                               stripchart

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Tipos de gráﬁcos do pacote ggplot2
              geom_área ou                         geom_bar ou               geom_boxplot     geom_curve
              geom_ribbon                           geom_col
              geom_density                         geom_dotplot            geom_histogram      geom_line,
                                                                                              geom_abline,
                                                                                              geom_hline,
                                                                                               geom_vline
                geom_point                         geom_qq ou                   geom_title,   geom_violin
                                                   geom_qqline                  geom_rect,
                                                                               geom_raster


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                        


---

         SEGER ES – CONSULPLAN – 2023

         A construção de gráﬁcos no software R foi revolucionada com a
         criação do pacote ggplot2, fruto de uma tese de doutorado. A
         essência desse pacote é a construção de gráﬁcos camada por
         camada, deixando os gráﬁcos naturalmente mais bonitos,
         permitindo uma fácil personalização. As funções do pacote ggplot2
         responsáveis por gerar um histograma e um boxplot são,
         respectivamente:
         A) boxplot() e hist()
         B) geom_box() e geom_hist()
         C) geom_boxplot() e geom_hist()
         D) geom_box() e geom_histogram()
         E) geom_boxplot() e geom_histogram()
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         SEGER ES – CONSULPLAN – 2023

         A construção de gráﬁcos no software R foi revolucionada com a
         criação do pacote ggplot2, fruto de uma tese de doutorado. A
         essência desse pacote é a construção de gráﬁcos camada por
         camada, deixando os gráﬁcos naturalmente mais bonitos,
         permitindo uma fácil personalização. As funções do pacote ggplot2
         responsáveis por gerar um histograma e um boxplot são,
         respectivamente:
         A) boxplot() e hist()
         B) geom_box() e geom_hist()
         C) geom_boxplot() e geom_hist()
         D) geom_box() e geom_histogram()
         E) geom_boxplot() e geom_histogram()
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Gráﬁco em barras
        É uma representação de uma série por meio de retângulos, dispostos
        verticalmente (em colunas) ou horizontalmente (em barras).

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função barplot()
        Cria um gráfico de barras a partir de um vetor.
        Exemplo 1:
        vetor <- c(5,2,7,8,9)
        barplot(vetor)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função barplot()
        Cria um gráfico de barras a partir de um vetor.
        Exemplo 1:
        vetor <- c(5,2,7,8,9)
        barplot(vetor, horiz=TRUE)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seduc AM - Cespe
         A qualiﬁcação dos professores é de grande importância para a
         qualidade da formação dos estudantes. Considerando que a ﬁgura
         acima apresenta a distribuição do número de professores em uma
         faculdade, segundo a formação acadêmica (curso), julgue o item.

         A ﬁgura apresenta um gráﬁco de barras horizontais.
         (  ) Certo     (   ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seduc AM - Cespe
         A qualiﬁcação dos professores é de grande importância para a
         qualidade da formação dos estudantes. Considerando que a ﬁgura
         acima apresenta a distribuição do número de professores em uma
         faculdade, segundo a formação acadêmica (curso), julgue o item.

         A ﬁgura apresenta um gráﬁco de barras horizontais.
         (  ) Certo     (   ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Gráﬁco em setores (pie)
        “Um gráfico construído com base em um círculo, e é empregado sempre que
        desejamos ressaltar a participação do dado no total.
        O total é representado pelo círculo, que fica dividido em tantos setores
        quantas são as partes.
        Os setores são tais que suas áreas são respectivamente proporcionais aos
        dados das séries.
        Obtemos cada setor por meio de uma regra de três simples e direta lembrando
        que o total da série corresponde a 360º.”
        (CRESPO, 1996)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função pie()
        Cria um gráfico de setores (pizza) a partir de um vetor.


        Exemplo 1:
        setores <- c(20,30,40,10)
        pie(setores)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Gráﬁco de Dispersão (scatter plot)
        Um gráfico de dispersão, também conhecido como gráfico de pontos, é uma
        representação visual de dados em um plano cartesiano. Ele é usado para
        mostrar a relação entre duas variáveis e identificar padrões ou tendências.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

   Função plot()
   Cria um gráfico de dispersão a partir de vetores, matrizes ou data frames.
   Exemplo 1:
   vetorX <- c(5,2,9)
   vetorY <- c(3,7,12)
   plot(vetorX,vetorY)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TJ SE – FGV – 2023
         A análise dos dados multivariados, como a correlação linear entre
         dois atributos do conjunto de dados X, pode ser facilitada pelo uso
         do gráﬁco de:
         A) pizza;
         B) boxplot;
         C) densidade;
         D) histograma;
         E) scatter plot.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TJ SE – FGV – 2023
         A análise dos dados multivariados, como a correlação linear entre
         dois atributos do conjunto de dados X, pode ser facilitada pelo uso
         do gráﬁco de:
         A) pizza;
         B) boxplot;
         C) densidade;
         D) histograma;
         E) scatter plot.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TCE ES – FGV – 2023
         Observe o seguinte gráﬁco gerado da linguagem de programação
         R.
         A função plot() usada para gerar o gráﬁco apresentado é:
         A) plot(1:3)
         B) plot(2:3, type="l")
         C) x <- c(1,2,3)
             y <- c(3,3,3)
             plot(x, y)
         D) plot(c(1, 2, 3), c(3, 3, 3), cex=1)
         E) plot(c(1, 2, 3), c(3, 2, 3), cex=2, pch=24)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TCE ES – FGV – 2023
         Observe o seguinte gráﬁco gerado da linguagem de programação
         R.
         A função plot() usada para gerar o gráﬁco apresentado é:
         A) plot(1:3)
         B) plot(2:3, type="l")
         C) x <- c(1,2,3)
             y <- c(3,3,3)
             plot(x, y)
         D) plot(c(1, 2, 3), c(3, 3, 3), cex=1)
         E) plot(c(1, 2, 3), c(3, 2, 3), cex=2, pch=24)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Observações acerca da questão e do gráﬁco de dispersão:

         cex é um parâmetro que deﬁne o tamanho dos símbolos usados
         para representar os pontos no gráﬁco. Logo, cex=2 signiﬁca que os
         símbolos serão desenhados com o dobro do tamanho padrão.

         pch é um parâmetro que deﬁne o tipo de símbolo a ser usado. No
         caso, o pch=24 é o símbolo do triângulo usado.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP – 2020
          Um analista do MJSP necessita apresentar um gráﬁco para seus
         usuários. Para tanto, ele irá utilizar a linguagem R. Assinale a
         alternativa que apresenta corretamente o nome da função que o
         analista deve utilizar para gerar o gráﬁco em linguagem R.
         A) Graph.
         B) Draw.
         C) Plot.
         D) Picture.
         E) Trace.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MJSP – AOCP – 2020
          Um analista do MJSP necessita apresentar um gráﬁco para seus
         usuários. Para tanto, ele irá utilizar a linguagem R. Assinale a
         alternativa que apresenta corretamente o nome da função que o
         analista deve utilizar para gerar o gráﬁco em linguagem R.
         A) Graph.
         B) Draw.
         C) Plot.
         D) Picture.
         E) Trace.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         IBGE – IBFC – 2020
         Função da linguagem de programação R que permite fazer gráﬁcos
         de dispersão. De acordo com a descrição, a função é:
         A) head
         B) plot
         C) grafhic
         D) dispersion
         E) mean

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         IBGE – IBFC – 2020
         Função da linguagem de programação R que permite fazer gráﬁcos
         de dispersão. De acordo com a descrição, a função é:
         A) head
         B) plot
         C) grafhic
         D) dispersion
         E) mean

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Gráﬁco de caixa (boxplot)
        Um boxplot, também conhecido como diagrama de caixa, é um tipo de gráfico
        utilizado para representar a distribuição de um conjunto de dados numéricos
        através de cinco estatísticas principais: mínimo, primeiro quartil (Q1),
        mediana, terceiro quartil (Q3) e máximo.
        Esse gráfico fornece uma visão geral da dispersão dos dados e destaca
        possíveis outliers.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Relembrando os quartis
        Denominamos quartis os valores de uma série que a dividem em quatro
        partes iguais.
        Há portanto 3 quartis:
        * Q1 é o valor situado de tal modo na série que uma quarta parte (25%) dos
        dados é menor que ele e as três partes (75%) restantes são maiores.
        * Q2 evidentemente coincide com a mediana.
        * Q3 é o valor situado de tal modo na série que as três partes (75%) dos
        termos são menores que ele e uma quarta parte (25%) é maior.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Relembrando os quartis
        Exemplo 1:
                                                   Q1                      Q2                     Q3
                               16        16        17    18       20        21       22      23   23   25   30

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                        


---

             Componentes de um boxplot
        Caixa (Box): A caixa do boxplot representa o intervalo interquartil (IQR), que é
        a faixa de valores entre o primeiro quartil (Q1) e o terceiro quartil (Q3). A linha
        dentro da caixa representa a mediana dos dados. IQR=Q3-Q1
        Whiskers (Bigodes): Os bigodes estendem-se da caixa até os valores mais
        extremos dentro de um limite especificado. Os valores que estão fora desse
        limite são frequentemente considerados outliers.
        Outliers: São pontos individuais que estão fora do intervalo dos bigodes e são
        representados como pontos separados.
        Linha Limite: Às vezes, os bigodes podem ser limitados a uma certa
        multiplicação do IQR (1,5 do IQR), e qualquer valor fora dessa faixa é
        considerado um outlier.
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função boxplot()
        Cria um gráfico de dispersão a partir de valores agrupados.
        Exemplo 1:
        caixa = c(16,16,17,18,20,21,22,23,23,25,30)
        boxplot(caixa)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         PC BA – Idecan – 2022
          Observe o gráﬁco do tipo boxplot ou diagrama de caixas abaixo e
         assinale a opção correta a partir do que é mostrado:


         A) O 3º quartil está acima de 34.
         B) O 1º quartil está abaixo de 24.
         C) O limite superior está acima de 36.
         D) O 2º quartil está abaixo de 28.
         E) Não temos outliers abaixo do limite inferior.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         PC BA – Idecan – 2022
          Observe o gráﬁco do tipo boxplot ou diagrama de caixas abaixo e
         assinale a opção correta a partir do que é mostrado:


         A) O 3º quartil está acima de 34.
         B) O 1º quartil está abaixo de 24.
         C) O limite superior está acima de 36.
         D) O 2º quartil está abaixo de 28.
         E) Não temos outliers abaixo do limite inferior.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         Um gráﬁco muito útil para a etapa de análise de dados é o box plot,
         que ajuda a identiﬁcar a distribuição real ou padrão dos valores dos
         dados, permite visualizar mediana, quartis, valores mínimos e
         máximos, além de identiﬁcar possíveis outliers.
         (  ) CERTO          (   ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         Um gráﬁco muito útil para a etapa de análise de dados é o box plot,
         que ajuda a identiﬁcar a distribuição real ou padrão dos valores dos
         dados, permite visualizar mediana, quartis, valores mínimos e
         máximos, além de identiﬁcar possíveis outliers.
         (  ) CERTO          (   ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TBG – Cespe – 2023
         Relativamente à ﬁgura acima, que mostra o diagrama esquemático
         (box plot) referente a uma variável quantitativa x, julgue o item a
         seguir.

         A amplitude total da variável x é igual ou inferior a 8.
         (  ) CERTO          (   ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TBG – Cespe – 2023
         Relativamente à ﬁgura acima, que mostra o diagrama esquemático
         (box plot) referente a uma variável quantitativa x, julgue o item a
         seguir.

         A amplitude total da variável x é igual ou inferior a 8.
         (  ) CERTO          (   ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TBG – Cespe – 2023
         Relativamente à ﬁgura acima, que mostra o diagrama esquemático
         (box plot) referente a uma variável quantitativa x, julgue o item a
         seguir.

         A mediana da variável x é igual a 5.
         (  ) CERTO         (    ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         TBG – Cespe – 2023
         Relativamente à ﬁgura acima, que mostra o diagrama esquemático
         (box plot) referente a uma variável quantitativa x, julgue o item a
         seguir.

         A mediana da variável x é igual a 5.
         (  ) CERTO         (    ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Distribuição por frequência
        Uma distribuição por frequência é um método de grupamento de dados em
        classes, ou intervalos, de tal forma que se possa representar o número ou a
        porcentagem de cada classe.


             Histograma
        Um histograma de frequências da as classes no eixo horizontal e as
        frequências ao longo do eixo vertical.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MPU – FCC
         Considere o histograma da variável X a seguir, em que as
         freqüências simples absolutas foram anotadas no interior dos
         retângulos.
         O valor do terceiro quartil de X é
         A) 40
         B) 35
         C) 30
         D) 25
         E) 12

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MPU – FCC
         Considere o histograma da variável X a seguir, em que as
         freqüências simples absolutas foram anotadas no interior dos
         retângulos.
         O valor do terceiro quartil de X é
         A) 40
         B) 35
         C) 30
         D) 25
         E) 12

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seeduc MT – Selecon – 2023
         Os dados da tabela correspondem ao tempo (em horas gastos) por
         semana de uma amostra de 700 assinantes de um plano de
         transmissão de televisão.
         O gráﬁco que poderia ser utilizado para representar os dados dessa
         tabela é o:
         A) série temporal
         B) ramo-e-folha
         C) histograma
         D) boxplot

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seeduc MT – Selecon – 2023
         Os dados da tabela correspondem ao tempo (em horas gastos) por
         semana de uma amostra de 700 assinantes de um plano de
         transmissão de televisão.
         O gráﬁco que poderia ser utilizado para representar os dados dessa
         tabela é o:
         A) série temporal
         B) ramo-e-folha
         C) histograma
         D) boxplot

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                    LINGUAGEM R
                           (OPERAÇÕES COM BASES DE DADOS)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Trabalhando com arquivos de dados
             Na linguagem R é possível importar ou exportar bases de/para
             diferentes formatos, como CSV ou XLS.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função getwd()
             A função getwd() retorna um caminho de arquivo absoluto que
             representa o diretório de trabalho atual do processo R.
             Exemplo 1:
             getwd()

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função setwd()
             A função setwd(dir) é usada para definir o diretório de trabalho como
             dir.
             Exemplo 1:
             setwd(“c:/users/renat/onedrive/documents/estratégia”)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

            Função write.csv()
            Permite exportar um data frame para um arquivo CSV (texto separado
            por vírgulas).
            Sintaxe com principais argumentos:
            write.table(x, file = "", append = FALSE, sep = " ", eol = "\n", na = "NA",
            dec = ".", row.names = TRUE, col.names = TRUE,)
            Exemplo 1:
            write.csv(tabela, file=‘tabela.csv’)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Fub – Cespe – 2022
         Considerando que um usuário inicie uma sessão R escrevendo um
         código na janela R Console conforme mostra a ﬁgura apresentada,
         julgue o item subsequente.

         O código write_csv(dados, “D:/dados.csv”) permite salvar o data
         frame dados em “D:/dados.csv”. .

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Função read.csv()
             Permite importar um arquivo CSV (texto separado por vírgulas) no
             ambiente R.
             Exemplo 1:
             read.csv(“tabela.csv”)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         MC – Cespe – 2013
         O comando
         read.csv(“arquivo.csv”, header = TRUE)
         permite carregar os dados exportados por uma planilha Excel em
         português, sem que seja necessário qualquer manipulação no
         arquivo CSV.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

     MC – Cespe – 2013
     O comando
     read.csv(“arquivo.csv”, header = TRUE)
     permite carregar os dados exportados por uma planilha Excel em
     português, sem que seja necessário qualquer manipulação no
     arquivo CSV.

     (   ) Certo       (    ) Errado

                     Inglês: separador de lista , e separador decimal .
                   Português: separador de lista ; e separador decimal ,

          #header=TRUE habilita a primeira linha do CSV como cabeçalho das
          colunas.
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                 


---

             Função head()
             A função “head”“ apresenta as primeiras linhas de uma Data Set. A
             função abaixo é uma das mais importantes para checagem da correta
             importação dos dados.
             Exemplo 1:
             head(“tabela”,n=2)


             # na ausência do parâmetro que informa o número de linhas o padrão
             para n será igual a seis (6).


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn Fortaleza – Cespe – 2023
         A seguir, são apresentados dados listados no arquivo seﬁn.csv, que
         se encontra gravado no diretório /home/sec/ e cujo código foi
         desenvolvido em linguagem R versão 4.3.

         O referido arquivo também está disponibilizado na URL
         https://ide.seﬁn.fortaleza.ce.gov.br/downloads/seﬁn.csv e o arquivo
         /home/sec/seﬁn.txt possui conteúdo idêntico ao arquivo
         /home/sec/seﬁn.csv.
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn Fortaleza – Cespe – 2023
         O código
         library(readr)
         endereco = “/home/sec/seﬁn.csv”
         seﬁn <- read.csv(endereco, sep=“;”)
         head(seﬁn,2,3)
         produzirá, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

         Seﬁn Fortaleza – Cespe – 2023
         O código
         library(readr)
         endereco = “/home/sec/seﬁn.csv”
         seﬁn <- read.csv(endereco, sep=“;”)
         head(seﬁn,2,3)
         produzirá, ao ser executado, o resultado a seguir.

         (        ) Certo                  (       ) Errado

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                       


---

             Vamos praticar!!!
             1) Acesse o URL: http://www.ispdados.rj.gov.br/estatistica.html baixe o
             arquivo CSV abaixo e o salve no diretório de trabalho atual do R - caso
             tenha esquecido utilize a função getwd() -.

             2) Visualize o arquivo baixado no Bloco de Notas.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Vamos praticar!!!
        3) Importe o arquivo baixado com a função read.csv() criando uma tabela
        dadosseg, conforme sintaxe a seguir:


        dadosseg <- read.csv("DOMensalEstadoDesde1991.csv", sep = ";", dec = ",")

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Vamos praticar!!!
        4) Calcule a soma dos homicídios dolosos de 2023.
                  sum(dadosseg$hom_doloso[dadosseg$ano==2023])

        5) Calcule a média dos homicídios dolosos de 2022.
                  mean(dadosseg$hom_doloso[dadosseg$ano==2023])
        6) Determine o maior número de mortes mensal de 2022.
                  max(dadosseg$hom_doloso[dadosseg$ano==2022])
        7) Determine o número do mês de que apresentou a maior quantidade de
        mortes em 2023.
                  dadosseg$mes[dadosseg$ano==2023 & dadosseg$hom_doloso==343]


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Vamos praticar!!!
        Vamos criar um gráfico de barras verticais a partir dos homicídios dolosos de
        2023:
        barplot(dadosseg$hom_doloso[dadosseg$ano==2023])

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Vamos praticar!!!
        Vamos criar um histograma a partir dos homicídios dolosos de 2023:
        hist(dadosseg$hom_doloso[dadosseg$ano==2023])

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Vamos praticar!!!
        Vamos criar um histograma a partir dos homicídios dolosos de 2023,
        reduzindo a quantidade de classes ou bins (grupos de intervalos numéricos):
        hist(dadosseg$hom_doloso[dadosseg$ano==2023], breaks=3)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                             LINGUAGEM R
                                       (CORRELAÇÃO E REGRESSÃO)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Correlação e Regressão
        A correlação e a regressão são duas técnicas estreitamente relacionadas que
        envolvem uma forma de estimação de uma relação que pode ocorrer em uma
        população.

         A correlação mede a força, ou o grau, de relacionamento entre duas variáveis. A
         regressão dá uma equação que descreve o relacionamento em termos matemáticos

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

              Vamos praticar!!!
      Considerando os seguintes dados históricos:

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                 Plotando os dados
        temp <-c(18,20,22,24,26,28,30,32,34)
        consumo <-c(80,100,110,125,150,180,220,250,300)
        # par(oma=c(2,2,2,2))
        # par(margin=c(2,2,2,2))
        plot(temp, consumo)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Diagrama de dispersão para
             veriﬁcar a correlação linear:
        Os pontos obtidos, vistos em conjunto, formam uma elipse em diagonal.
        Quanto mais fina for a elipse mais ela se aproxima de uma reta, denominada
        correlação linear.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função cor()
        O instrumento utilizado para calcular a correlação linear é o coeficiente de
        correlação, faremos o uso do coeficiente de correlação de Pearson através da
        função cor().
        Exemplo 1:
        cor(temp, consumo)


        Resultado do coeficiente de correlação (r):
        [1] 0.977859


        OBS: Os valores limites de r são -1 e +1.
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Coeﬁciente de Pearson
      Para que uma correlação possa ser descrita por meio do coeficiente de correlação
      de Pearson é imprescindível que ela se aproxime de uma função linear.


      Se r = +1, há uma correlação perfeita e positiva entre as variáveis;
      Se r = -1, há uma correlação perfeita e negativa entre as variáveis;
      Se r = 0 ou não há correlação entre as variáveis ou a correlação não é linear.
      Se 0,6 <= r <=1, há conclusões significativas sobre o comportamento simultâneo
      das variáveis.
      Se 0,3 <= r <0,6, a correlação é relativamente fraca
      Se 0 <= r <= 0,3, a correlação é muito fraca e inconclusiva.
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Matriz de correlação de Pearson
      Para exibição gráfica de uma matriz de correlação de Pearson é necessário que
      tenhamos atribuído um objeto ao resultado da função cor() e em seguida
      aplicado a função corrplot() da biblioteca de mesmo nome.
      Exemplo 1:
      tabela <- data.frame(temp, consumo)
      mat_cor = cor(tabela)
      corrplot(mat_cor)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Regressão linear
        “A regressão linear estima valores de uma variável, com base em valores
        conhecidos da outra.
        Na regressão os valores y são preditos com base em valores dados ou
        conhecidos de x. A variável y é chamada de dependente e a variável x é
        chamada de independente.”
        (STEVENSON, 1981)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                                                        50º=489.3333
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                                                        50º=489.3333
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Regressão Linear
        “A regressão linear estima valores de uma variável, com base em valores
        conhecidos da outra.
        Na regressão os valores y são preditos com base em valores dados ou
        conhecidos de x. A variável y é chamada de dependente e a variável x é
        chamada de independente.”
        (STEVENSON, 1981)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         AGERGS – Fundatec – 2022
         Estamos interessados em ajustar um modelo de regressão linear
         simples no pacote estatístico R. O comando a ser utilizado para esse
         ﬁm é:
         A) ts
         B) glm
         C) lm
         D) cor
         E) road

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         AGERGS – Fundatec – 2022
         Estamos interessados em ajustar um modelo de regressão linear
         simples no pacote estatístico R. O comando a ser utilizado para esse
         ﬁm é:
         A) ts
         B) glm
         C) lm
         D) cor
         E) road

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn CE – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.
         Caso o código
         x <- c(2, 4, 6, 8)
         y <- c(4, 8, 12, 16)
         z <- c(3, 5, 7, 9)
         seja utilizado para se criar uma regressão linear multivariada, em
         que a variável y é a alvo, e as variáveis x e z são preditoras, então,
         para isso, é correto usar o comando a seguir.
         f <- lm(y > x+z).
         (    ) CERTO         (    ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Seﬁn CE – Cespe – 2023
         Em relação ao software livre R, versão 4.3, julgue o item
         subsequente, considerando que todas as bibliotecas necessárias
         foram corretamente instaladas e disponibilizadas.
         Caso o código
         x <- c(2, 4, 6, 8)
         y <- c(4, 8, 12, 16)
         z <- c(3, 5, 7, 9)
         seja utilizado para se criar uma regressão linear multivariada, em
         que a variável y é a alvo, e as variáveis x e z são preditoras, então,
         para isso, é correto usar o comando a seguir.
         f <- lm(y > x+z).
         (    ) CERTO         (    ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                    LINGUAGEM R
                                                      (SCRIPTS)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Algoritmo
        Um algoritmo é um conjunto de instruções ordenados de forma lógica para
        resolução de uma determinada tarefa.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Programa
        É um algoritmo escrito em uma linguagem computacional.

                                      Entrada             Processamento                 Saída

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Estrutura condicional IF ELSE
        Executa uma sequência de comandos de acordo com o resultado de um teste.
        A estrutura de decisão SE pode ser Simples ou Composta, baseada em um
        resultado lógico, a partir daí uma alternativa será executada.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Estrutura condicional IF ELSE
        Condicional Simples
        Exemplo 1:
        x <- 30
        if (x == 30) {
            res <- "Número igual a 30"
            print(res)
        }

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Estrutura condicional IF ELSE
        Condicional Composto
        Exemplo 2:
        x <- 30
        if (x == 30) {
        res <- "Número igual a 30“
        }
        else {
        res <- "Número diferente de 30“
        }
        print(res)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Estrutura condicional IF ELSE
        Condicional Encadeado
        Exemplo 3:
        x <- 10
        if (x == 30) {res <- "Número igual a 30“
        }
        else if (x > 30) {res <- "Número maior que 30“
        }
        else {res <- "Número menor que 30“
        }
        print(res)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         IBGE – Selecon – 2023
         Em relação ao software livre R, versão 4.2, considere o código a
         seguir:
         x = 1:4
         y=2
         z=x+y
         if(max(z)>11){print(max(z))}else{print(sum(z))}
         O código foi executado sem apresentar erro. Com isso, o resultado
         obtido será:
         A) [1] 12
         B) [1] 14
         C) [1] 16
         D) [1] 18
         E) [1] 20
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         IBGE – Selecon – 2023
         Em relação ao software livre R, versão 4.2, considere o código a
         seguir:
         x = 1:4
         y=2
         z=x+y
         if(max(z)>11){print(max(z))}else{print(sum(z))}
         O código foi executado sem apresentar erro. Com isso, o resultado
         obtido será:
         A) [1] 12
         B) [1] 14
         C) [1] 16
         D) [1] 18
         E) [1] 20
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função ifelse()
        Apresenta a vantagem de poder trabalhar com vetores.
        Exemplo 1:
        ifelse(4 %% 2 == 0,"par","ímpar")


        Exemplo 2:
        num <- c(5,7,2,9,0)
        ifelse( num %% 2 == 0,"par","ímpar")


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

        Estruturas de Repetição FOR e WHILE
        Quando uma sequência de comandos deve ser executada repetidas vezes,
        tem-se uma estrutura de repetição.
        A estrutura de repetição, assim como a de decisão, envolve sempre a
        avaliação de uma condição que enquanto for verdadeira irá proceder a
        execução dos comandos.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

        Estruturas de Repetição FOR
        Na repetição FOR, o script o programador deverá saber previamente a
        quantidade de repetições desejadas.
        Sintaxe:
        for (variável in vetor_números) {
            comandos
        }
        Exemplo 1:
        for (i in 1:10) {
            print(i)
        }
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Estrutura de Repetição WHILE
        É usada para repetir N vezes uma ou mais instruções. Apresenta como
        característica o fato de não haver necessáriamente o conhecimento prévio do
        número de repetições.
        Sintaxe:
        while(teste) {
            comandos
        }

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         O resultado da execução do código R a seguir será 6.

         (        ) CERTO                          (     ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

         Dataprev – Cespe – 2023
         O resultado da execução do código R a seguir será 6.

         (        ) CERTO                           (      ) ERRADO

                                                   Sintaxe Errada
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                     


---

         Dataprev – Cespe – 2023
         O resultado da execução do código R a seguir será 6.

         (        ) CERTO                           (      ) ERRADO

                                                   Sintaxe Errada
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                     


---

         Adaptação para sintaxe correta em R
         O resultado da execução do código R a seguir será 6.
         i=1
         n=5
         while (i<=n) {
         i=i+1
         }
         print(i)

         (        ) CERTO                          (     ) ERRADO

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Funções em R
        Sintaxe:
        funcao.nome = function {
        comandos
        }
        Exemplo 1:
        funcao.cubo = function(x) {
        cubo=x*x*x
        return(cubo)
        }
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Funções em R
        Uma função é um script que tem como objetivo retornar um valor ou uma
        informação. A chamada de uma função é feita através da citação do seu nome
        seguido opcionalmente de seu argumento inicial entre parênteses.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Função function() e return()
        Essas funções fornecem os mecanismos básicos para definir novas funções na
        linguagem R.
        Exemplo 1:
        funcao.cubo = function(x) {
        cubo=x*x*x
        return(cubo)
        }

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

           Funções recursivas:
      Uma função recursiva é aquela que chama a si mesma para resolver um
      problema. Aqui está um exemplo simples de uma função recursiva em R que
      calcula o fatorial de um número:
      Exemplo 1:                                   fatorial <- function(n) {
                                                       if (n == 0) {
                                                           return(1)
                                                       } else {
                                                           return(n * fatorial(n - 1))
                                                       }
Prof. Renato da Costa - TI - @prof.renatodacosta   }        


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                    LINGUAGEM R
                                                     (PACOTES)

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Pacotes
        “Pacotes do R armazenam um conjunto de funções, criado por um ou mais
        colaboradores e disponibilizados para acesso público no repositório CRAN.
        Os pacotes estão divididos em três categorias:
        Base – contém as principais funções quando iniciamos o pacote R.
        Recommended – são instaladas com o R mas não são carregadas quando
        iniciamos o programa, sendo necessário usar o comando library ou require
        para habilitar.
        Contributed – não são instaladas autimaticamente e sim por decisão do
        usuário através do comando install.package”
        (ALCOFORADO, 2021)
Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Alguns pacotes relevantes
        Janitor – para limpeza de dados
        Ggplot2 – para elaboração de dados
        Dplyr - usado para as mais variadas tarefas de manuseio de dados: agregar,
        sumarizar, filtrar, ordenar, criar variáveis, joins, dentre outras.
        Tydiverse - utilizado para manipulação, exploração e visualização de dados.

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                                                    BIBLIOGRAFIA

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

             Referências Bibliográﬁcas
        Alcoforado, L. F. (2021). Utilizando a linguagem R. Rio de Janeiro: Alta Books.
        Crespo, A. A. (1996). Estatística Fácil. Rio de Janeiro: Saraiva.
        Guimarães, A. d., & Lages, N. A. (1994). Algoritmo e Estrutura de Dados. Rio
        de Janeiro: LTC.
        Paiva, M. (2013). Matemática Paiva. São Paulo: Editora Moderna.
        Schmuller, J. (2019). Análise estatística com R para leigos. Rio de Janeiro:
        Altabooks.
        Stevenson, W. J. (1981). Estatística aplicada à administração. Editora Harbra:
        São Paulo.


Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

                         OBRIGADO
                                                                                        Prof. MSc. Renato da
                                                                                        Costa
                                                                                        @prof.renatodacosta

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---

Prof. Renato da Costa - TI - @prof.renatodacosta
                                                   


---
