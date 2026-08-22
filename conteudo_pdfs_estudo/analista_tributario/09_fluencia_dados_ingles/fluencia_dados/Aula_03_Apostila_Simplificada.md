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
arquivo_origem: Aula 03_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '03'
titulo_aula: Carvalho e Renato da
sumulas_citadas:
- SV1
- sv2
---

# Carvalho e Renato da

Aula 02 - Profs. Diego
                                 Carvalho e Renato da
                                                  Costa
                          Receita Federal (Analista Tributário)
                                             Fluência em Dados

                                                           Autor:
                                     Diego Carvalho, Emannuelle
                        Gouveia Rolim, Equipe Informática
                                           e TI, Renato da Costa

                                             08 de Outubro de 2025

---

      Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
      Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                                                                     Índice
1) Apresentação do Prof. Diego Carvalho - Informática


2) Linguagem R - Teoria


3) Linguagem R - Questões Comentadas


4) Linguagem R - Lista de Questões

                Receita Federal (Analista Tributário) Fluência em Dados                                                                                                                   2
                www.estrategiaconcursos.com.br                                                                                                                                          116

                                                             


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 02 - Profs. Diego Carvalho e Renato da Costa

                   APRESENTAÇÃO DO PROFESSOR

                                                     ==219a34==

     PROFESSOR DIEGO CARVALHO - www.instagram.com/professordiegocarvalho

                                         Sobre o curso: galera, todos os tópicos da aula possuem
                                         Faixas de Incidência, que indicam se o assunto cai muito ou
                                         pouco em prova. Diego, se cai pouco para que colocar em
                                         aula? Cair pouco não significa que não cairá justamente na sua
                                         prova! A ideia aqui é: se você está com pouco tempo e precisa
                                         ver somente aquilo que cai mais, você pode filtrar pelas
                                         incidências média, alta e altíssima; se você tem tempo
                                         sobrando e quer ver tudo, vejam também as incidências baixas
                                         e baixíssimas. Fechado?

                                                                  INCIDÊNCIA EM PROVA: baixíssima
                                                                    INCIDÊNCIA EM PROVA: baixa
                                                                    INCIDÊNCIA EM PROVA: média
                                                                    INCIDÊNCIA EM PROVA: ALTA
                                                                  INCIDÊNCIA EM PROVA: Altíssima

                                         Além disso, essas faixas não são por banca – é baseado tanto
                                         na quantidade de vezes que caiu em prova
                                         independentemente da banca quanto nas minhas próprias
                                         avaliações sobre cada assunto.


      Receita Federal (Analista Tributário) Fluência em Dados                                        3
      www.estrategiaconcursos.com.br                                                                116

                                   


---

Diego Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
Aula 02 - Profs. Diego Carvalho e Renato da Costa

      Receita Federal (Analista Tributário) Fluência em Dados                         4
      www.estrategiaconcursos.com.br                                                 116

                                   


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                           APRESENTAÇÃO DO TÓPICO
Galera, vamos iniciar a nossa aula sobre R. Trata-se de uma linguagem bem tranquila de
aprender e bastante útil análise de dados, estatísticas, ciência de dados e aprendizado de
máquina, sendo uma ferramenta poderosa e flexível para trabalhos de grande volume de dados.
Vocês notarão que é uma linguagem simples, direta e com bastante foco nas funções – então é
isso que nós vamos enfatizar em nossa aula.


       PROFESSOR DIEGO CARVALHO - www.instagram.com/professordiegocarvalho

Todos os tópicos da aula possuem Faixas de Incidência, que indicam se o assunto cai muito
ou pouco em prova. Diego, se cai pouco para que colocar em aula? Cair pouco não significa
que não cairá justamente na sua prova! A ideia aqui é: se você está com pouco tempo e precisa
ver somente aquilo que cai mais, você pode filtrar pelas incidências média, alta e altíssima; se
você tem tempo sobrando e quer ver tudo, vejam também as incidências baixas e baixíssimas.


                                                                            INCIDÊNCIA EM PROVA: BAIXÍSSIMA
                                                                                  INCIDÊNCIA EM PROVA: BAIXA
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA
                                                                                    INCIDÊNCIA EM PROVA: ALTA
                                                                              INCIDÊNCIA EM PROVA: ALTÍSSIMA

Além disso, essas faixas não são por banca – é baseado tanto na quantidade de vezes que caiu
em prova independentemente da banca e também em minhas avaliações sobre cada assunto...

         Receita Federal (Analista Tributário) Fluência em Dados                                           5
         www.estrategiaconcursos.com.br                                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                             LINGUAGEM R
 Conceitos Básicos
                                                                            INCIDÊNCIA EM PROVA: BAIXÍSSIMA


A linguagem R é uma linguagem de programação especializada em estatística, diferenciando-se
de outras linguagens que são voltadas para o desenvolvimento de software geral. Em termos
básicos, o R pode substituir funções estatísticas de planilhas como o MS-Excel e oferece
vantagens significativas ao lidar com grandes volumes de dados, não estando limitado pelo
número de linhas como as planilhas eletrônicas.

O R permite a criação de funções customizadas e conta com a contribuição de desenvolvedores
ao redor do mundo, oferecendo ferramentas avançadas para análises estatísticas descritivas,
inferenciais e multivariadas. No meio acadêmico, o R é preferido em relação ao MS-Excel para
análises estatísticas, sendo um software livre que pode ser utilizado, modificado e distribuído
gratuitamente.

A linguagem R é ideal para análise de dados, facilitando a manipulação de tabelas, a execução
de estatísticas complexas, a realização de predições e a criação de gráficos variados. Sua licença
aberta permite melhorias contínuas com a colaboração global, tornando o R uma ferramenta
poderosa e flexível para pesquisadores e cientistas de dados.

Para facilitar o entendimento da linguagem em nossa aula, eu recomendo fortemente que vocês
instalem dois softwares que vão auxiliar bastante o acompanhamento do nosso curso. Para tal,
sugiro que você acesso: https://posit.co/download/rstudio-desktop. Vocês verão a imagem
apresenta a seguir:

         Receita Federal (Analista Tributário) Fluência em Dados                                         6
         www.estrategiaconcursos.com.br                                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Primeiro, vocês vão baixar e instalar o R (link à esquerda); depois vocês vão baixar e instalar o
RStudio. O que é RStudio, Diego? É um Ambiente de Desenvolvimento Integrado (IDE) voltado
para a análise de dados com o R. O RStudio oferece ferramentas para a construção de relatórios
(R Markdown), análise de dados e possui uma seção de ajuda detalhada. Vejam como é a carinha
do RStudio:

Observem que a interface do RStudio é composta por várias áreas de trabalho, das quais a mais
importante para o início do aprendizado é o Console. O Console permite a interação direta com
o R por meio de comandos de linha. Ao utilizar o Console, você notará um cursor piscando,
precedido de um sinal de maior (>), chamado de prompt. Esse símbolo indica que o R está pronto
para receber comandos.


 Operadores Suportados
                                                                                  INCIDÊNCIA EM PROVA: BAIXA


A linguagem R oferece uma ampla gama de operadores para realizar operações matemáticas,
lógicas e de atribuição. Vejamos as principais categorias:

Operadores Aritméticos

Os operadores aritméticos são usados para realizar operações matemáticas básicas em números.
Os principais operadores são:

    OPERADORES
                          OPERADOR                            DESCRIÇÃO                        EXEMPLO
     ARITMÉTICOS
          ADIÇÃO                +          Retorna a soma de valores.                     Ex: 2+3 = 5
      SUBTRAÇÃO                 -          Retorna a subtração de valores.                Ex: 5-2 = 3
   MULTIPLICAÇÃO                *          Retorna a multiplicação de valores.            Ex: 4*3 = 12


         Receita Federal (Analista Tributário) Fluência em Dados                                          7
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

          DIVISÃO               /           Retorna a divisão de valores.                         Ex: 10/2 = 5
  EXPONENCIAÇÃO              ^ ou **        Retorna um valor à potência do outro.                 Ex: 2^3 = 2**3 = 8
         MÓDULO               %%            Retorna o resto da divisão de valores.                Ex: 10%%3 = 1
   DIVISÃO INTEIRA            %/%           Retorna o quociente inteiro da divisão de valores.    Ex: 10%/%3 = 3

A precedência de operadores é uma regra importante em qualquer linguagem de programação,
pois determina a ordem em que as operações são realizadas quando há múltiplos operadores
em uma expressão. Em R, assim como em outras linguagens, essa hierarquia segue princípios
matemáticos clássicos. A hierarquia de operadores na linguagem R (do mais alto ao mais baixo)
é: Exponenciação -> Multiplicação e Divisão -> Soma e Subtração.

Quando há uma expressão que envolve vários operadores, o R resolve as operações conforme
essa hierarquia. Dentro de uma mesma prioridade, as operações são avaliadas da esquerda para
a direita, exceto a exponenciação, que é avaliada da direita para a esquerda. Por exemplo: 2 + 2
* 2^2 = 2 + 2*4 = 2 + 8 = 10. Lembrando que, se houver parênteses, eles ganham prioridade.
Por exemplo: 3 + 5 * (6 - 4)^2 / 2 = 3 + 5 * (2)^2 / 2 = 3 + 5 * (4) / 2 = 3 + 20 / 2 = 3 + 10 = 13.

Operadores Relacionais

Os operadores relacionais são usados para comparar dois valores. Eles retornam um valor lógico
TRUE ou FALSE. Vejamos:

      OPERADORES
                         OPERADOR                           DESCRIÇÃO                                 EXEMPLO
      RELACIONAIS
                                          Verifica se o primeiro valor é maior que o
              MAIOR            >                                                                 Ex: 5>3 retorna TRUE
                                          segundo.
                                          Verifica se o primeiro valor é menor que o
             MENOR             <                                                                 Ex: 3<5 retorna TRUE
                                          segundo.

         Receita Federal (Analista Tributário) Fluência em Dados                                                        8
         www.estrategiaconcursos.com.br                                                                                116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                         Verifica se o primeiro valor é maior ou igual ao
  MAIOR OU IGUAL              >=                                                            Ex: 6>=5 retorna TRUE
                                         segundo.
                                         Verifica se o primeiro valor é menor ou igual ao   Ex:  4<=3     retorna
  MENOR OU IGUAL              <=
                                         segundo.                                           FALSE
                                         Verifica se dois valores são iguais.
               IGUAL          ==                                                            Ex: 3==3 retorna TRUE

                                         Verifica se dois valores são diferentes.           Ex:   3!=3    retorna
          DIFERENTE           !=
                                                                                            FALSE

Operadores Lógicos

Os operadores lógicos são utilizados para combinar ou inverter expressões lógicas, sempre
retornando TRUE ou FALSE (em maiúsculo). Vejamos a seguir as principais categorias:

      OPERADORES
                         OPERADOR                           DESCRIÇÃO                            EXEMPLO
         LÓGICOS
                                         Retorna TRUE se ambos os operandos forem           Ex: TRUE & FALSE
                     E         &
                                         verdadeiros (avalia elemento a elemento).          retorna FALSE
                                         Retorna TRUE se pelo menos um dos operandos        Ex: TRUE | FALSE
                   OU          |
                                         for verdadeiro (avalia elemento a elemento).       retorna TRUE
                                         Inverte o valor lógico de um operando.             Ex: !TRUE retorna
                 NÃO           !
                                                                                            FALSE
                                         Avalia apenas o primeiro elemento (E lógico para   Ex: TRUE && FALSE
          E (LÓGICO)          &&
                                         vetores inteiros).                                 retorna FALSE
                                         Avalia apenas o primeiro elemento (OU lógico       Ex: TRUE || FALSE
       OU (LÓGICO)             ||
                                         para vetores inteiros).                            retorna TRUE

         Receita Federal (Analista Tributário) Fluência em Dados                                                9
         www.estrategiaconcursos.com.br                                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Operadores de Atribuição

Os operadores de atribuição são usados para armazenar valores em variáveis. Vejamos a seguir
as principais categorias:

   OPERADORES DE
                         OPERADOR                           DESCRIÇÃO                               EXEMPLO
      ATRIBUIÇÃO
                                         Atribui o valor do lado direito à variável do lado   Ex: x <- 5 ou x = 5
             RECEBE         <- ou =
                                         esquerdo.                                            armazena 5 em x
                                         Atribui o valor do lado esquerdo à variável do       Ex: 5 -> x armazena o
             IMPLICA          ->
                                         lado direito.                                        valor 5 na variável x


Muito cuidado: o operador = é um operador de atribuição; já o operador == é um operador de
igualdade. São coisas diferentes! Muito cuidado com pegadinhas da banca...

Funções Matemáticas

As funções matemáticas da linguagem R são fundamentais para realizar cálculos e operações
matemáticas. As funções são expressões predefinidas que aceitam argumentos dentro de
parênteses e realizam uma operação com base nesses valores. Elas podem ser mais complexas
e podem aceitar diferentes tipos de parâmetros. As três funções apresentadas a seguir estão
juntas nesse tópico de operadores porque são operações fundamentais da matemática.

         FUNÇÕES
                           FUNÇÃO                           DESCRIÇÃO                               EXEMPLO
     MATEMÁTICAS
                                         Calcula a raiz quadrada de um número.                Ex: sqrt(16) retorna 4.
   RAIZ QUADRADA             sqrt()

                                         Calcula o logaritmo natural de um número.            Ex: log(10) retorna
        LOGARITMO            log()
                                                                                              1.

         Receita Federal (Analista Tributário) Fluência em Dados                                                    10
         www.estrategiaconcursos.com.br                                                                             116

                                      


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                         Retorna o valor absoluto (positivo) de um       Ex: abs(-5) retorna 5
 VALOR ABSOLUTO              abs()
                                         número.


Observação: no exemplo de logaritmo, o resultado foi aproximadamente 2.302585. Note que a
Linguagem R obedece ao padrão americano de separador de milhar e decimal. O padrão
americano utiliza o ponto (.) como o separador decimal e a vírgula (,) como o separador de milhar
(Ex: 1,850.25) enquanto o padrão brasileiro utiliza a vírgula (,) como separador de decimal e o
ponto (.) como o separador de milhar (Ex: 1.850,25). Veremos funções em detalhes mais à frente!

 Variáveis
                                                                                  INCIDÊNCIA EM PROVA: BAIXA

No R, tudo o que criamos é considerado um objeto e um dos conceitos fundamentais ao
programar em R é o conceito de variável. Uma variável é um tipo específico de objeto, que atua
como um espaço de memória na RAM (Memória Volátil), reservado para armazenar dados
temporários enquanto o programa está em execução.

As variáveis em R são espaços de memória que podem armazenar valores que serão utilizados
em cálculos e operações dentro dos scripts. Para ilustrar o conceito, vejamos o exemplo:


 nota1 <- 8
 nota2 <- 7

No exemplo acima, nós criamos duas variáveis: nota1 e nota2. O valor de nota1 é 8, e o de nota2
é 7. Essas variáveis são usadas para armazenar valores que podem ser manipulados e
processados em operações futuras. Uma vez criadas, as variáveis aparecem no ambiente de
trabalho do R, exibido no canto superior direito do RStudio (imagem acima).


         Receita Federal (Analista Tributário) Fluência em Dados                                                 11
         www.estrategiaconcursos.com.br                                                                          116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Após criar as variáveis, podemos utilizá-las para realizar operações. Por exemplo, se quisermos
calcular a média entre as duas notas, podemos criar uma nova variável chamada media:


 media <- (nota1 + nota2) / 2


Esse comando armazena a média das notas na variável media. Ao digitar media no console, o R
exibirá o resultado da operação, que será 7.5.

 [1] 7.5


A variável corresponde, portanto, a um espaço de memória que guarda um dado qualquer. No
R, variáveis são objetos, e o nome de uma variável deve seguir regras específicas para ser válido:

 REGRAS BÁSICAS                         DESCRIÇÃO                                          EXEMPLO
                       Os nomes de variáveis podem conter letras,
      CARACTERES                                                            Ex: minha_variavel,       minha.variavel,
                       números, pontos (.) e sublinhados (_).
      PERMITIDOS                                                            variavel_1.

                       O nome de uma variável deve começar com uma
        PRIMEIRO                                                            Ex: .minhaVariavel (válido), 1variavel
                       letra ou um ponto seguido por uma letra. Não
       CARACTERE                                                            (inválido).
                       pode começar com um número.
                       A linguagem R diferencia maiúsculas de
                                                                            Ex: minhaVariavel e minhavariavel são
   CASE-SENSITIVE      minúsculas.
                                                                            variáveis diferentes.

                       Não se pode utilizar palavras reservadas da
        PALAVRAS
                       linguagem R como nomes de variáveis.                 Ex: if, else, TRUE, FALSE, for, etc.
      RESERVADAS


         NOME DA
                               VÁLIDO?                                     EXPLICAÇÃO
         VARIÁVEL
            nota1                 Sim              Começa com uma letra, contém números.
            1nota                 Não              Não pode começar com número.
            Nota1                 Sim              Válido, mas diferente de nota1.
           nota_1                 Sim              Contém sublinhado, válido.
            nota.1                Sim              Contém ponto, válido.


Vocês se lembram que falamos sobre os operadores de atribuição? Pois é! Um operador de
atribuição na linguagem R é utilizado para armazenar valores em variáveis. Ele define o valor de
um dado e o "passa" para uma variável, permitindo que esse valor seja utilizado posteriormente
em operações ou manipulações. Em R, há diferentes formas de realizar essa atribuição. Podemos,
por exemplo, atribuir um texto ou um número a uma variável:


 nome <- "Diego"     # Variável do tipo texto (string)
 sexo <- "Masculino" # Variável do tipo texto (aspas simples)
 idade <- 36         # Variável numérica (inteiro)

         Receita Federal (Analista Tributário) Fluência em Dados                                                   12
         www.estrategiaconcursos.com.br                                                                            116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Algumas observações: (1) quando atribuímos textos a uma variável, eles devem estar entre aspas
duplas ou aspas simples; (2) quando atribuímos números, não utilizamos aspas; (3) veremos
melhor adiante, mas o símbolo de cerquilha (#) no código acima indica um comentário, isto é,
uma explicação ou anotação que os programadores escrevem em seus códigos para facilitar o
entendimento – eles não interferem na execução do programa.

As variáveis nome, sexo e idade serão criadas e armazenarão, respectivamente, os valores
"Diego", "Masculino" e 36. Para visualizar o valor de uma variável, basta digitá-la no console:

A atribuição nome <- “Diego” é uma prática comum e recomendada, pois reflete melhor o
conceito de "receber um valor". Já a atribuição nome = “Diego” também é válida, mas menos
comum no contexto de R. Além de atribuir valores com <-, também podemos fazer o oposto,
utilizando -> para atribuir da direita para a esquerda:


 "Diego" -> nome # O valor “Diego” é atribuído à variável nome


Vamos ver um exemplo para verificar se vocês entenderam mesmo:


 var1 <- 5
 var2 <- 7
 var2 <- var1 + var2             # var2 agora é 5 + 7, ou seja, 12
 var1 <- var2                    # var1 agora recebe o valor de var2, ou seja, 12
 var3 <- var2                    # var3 recebe o valor de var2, ou seja, 12


Neste exemplo, inicialmente atribuímos valores 5 e 7 às variáveis var1 e var2, respectivamente.
Em seguida, fazemos var2 receber a soma de var1 e var2 (resultando em 12). Posteriormente,

         Receita Federal (Analista Tributário) Fluência em Dados                            13
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

var1 também recebe o valor de var2, e finalmente var3 também recebe o valor de var2, que é
12. Vejam a seguir no console:

Professor, o que é aquele print(var2) no Console? Em um ambiente interativo, como o Console
do R, podemos simplesmente digitar o nome da variável para ver o valor armazenado. Por outro
lado, quando estamos escrevendo um script (conjunto de comandos), é necessário utilizar a
função print() para exibir o valor de uma variável ou resultado no Console.


 print(var2)       # Exibe o valor de var2 no console


Se estivermos rodando o código interativamente no Console, bastaria digitar var2 e o valor 12
seria exibido. No entanto, ao criar scripts, é necessário utilizar o print().

Variáveis podem ser classificadas de acordo com seu escopo em globais ou locais a depender
de onde e quando podem ser acessadas e modificadas durante a execução de um programa.

Variáveis Globais

Uma variável global é aquela que é definida fora de qualquer função e pode ser acessada e
modificada em qualquer lugar do código, incluindo dentro de funções, a menos que uma
variável local com o mesmo nome seja criada dentro da função. Elas têm um escopo global, ou
seja, podem ser utilizadas em qualquer parte do programa depois de serem definidas.

 x <- 10 # Variável Global

 funcao <- function() {
   print(x) # Acessa a variável global x

         Receita Federal (Analista Tributário) Fluência em Dados                          14
         www.estrategiaconcursos.com.br                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 }

 funcao() # Mostra o valor 10, pois x é global


Ao executar essa função, o resultado será:

 [1] 10


Variáveis Locais

Uma variável local é aquela que é definida dentro de uma função e só pode ser acessada dentro
dessa função. Essas variáveis têm um escopo local, o que significa que deixam de existir assim
que a execução da função termina. Elas não podem ser acessadas ou modificadas fora da função
onde foram criadas.


 funcao <- function() {
   y <- 5   # Variável Local
   print(y)
 }

 funcao() # Mostra o valor 5
 print(y) # Erro: y não existe fora da função


Ao executar essa função, o resultado será:

 [1] 5


Se uma variável com o mesmo nome é criada tanto globalmente quanto localmente, o escopo
local dentro da função terá prioridade. Ou seja, a função utilizará a variável local em vez da global.

 Funções Genéricas
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA

Uma função, no contexto da linguagem R, pode ser comparada a uma "caixa" que recebe uma
entrada (argumentos), realiza um processamento específico e retorna uma saída (resultado).
Assim como na matemática, onde temos funções do tipo 𝑓(𝑥) = 𝑦, em R, as funções seguem o
mesmo princípio: elas recebem argumentos, executam uma tarefa e devolvem um resultado.

Funções, formalmente, são um bloco de código que executa uma tarefa específica e pode ser
reutilizada. Ela pode receber argumentos (entradas), realizar operações e retornar um valor
(saída). Funções são fundamentais para organizar e modularizar o código. A estrutura básica de
uma função em R é a seguinte:

         Receita Federal (Analista Tributário) Fluência em Dados                                         15
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

    nome_funcao <- function(argumentos) {
        # Bloco de código
        retorno # É Opcional
    }


Em R, todas as funções seguem uma sintaxe básica:

▪    Nome da Função: em geral, as funções possuem nomes descritivos que indicam sua
     finalidade. Por convenção, os nomes das funções são escritos em letras minúsculas;

▪    Parênteses: após o nome da função, sempre deve haver um par de parênteses, que contêm
     os argumentos de entrada;

▪    Argumentos: são os valores de entrada que a função utiliza para processar a informação e
     gerar o resultado. Os argumentos podem ser números, strings, vetores, entre outros;

▪    Argumentos Opcionais: é possível definir valores padrão para os argumentos, tornando-os
     opcionais ao chamar a função;

▪    Retorno: as funções em R retornam automaticamente o último valor calculado, a menos que
     seja usado o comando return() para especificar o valor de retorno.


    # Definindo uma função que calcula o quadrado de um número

    quadrado <- function(x) {
      resultado <- x^2
      return(resultado) # Opcional, pois a última linha já seria retornada automaticamente
    }

    # Chamando a função

    quadrado(4)

    # Retorna 16


Já para apenas executar uma função, basta chamá-la no Console seguindo a sintaxe apresentada
a seguir:

    nome_funcao(argumento1, argumento2, ...)


A linguagem R contém milhares de funções disponíveis, uma vez que é uma linguagem de
código aberto e tem uma vasta comunidade de usuários que desenvolvem pacotes adicionais.
As funções nativas (ou base) fornecidas com a instalação padrão do R são centenas, mas o
número exato de funções depende do número de pacotes instalados no ambiente.

          Receita Federal (Analista Tributário) Fluência em Dados                         16
          www.estrategiaconcursos.com.br                                                  116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Além disso, o R possui um sistema de ajuda para obter informações detalhadas sobre funções,
pacotes, objetos e tópicos específicos. Ele fornece documentação completa com a descrição da
função, sua sintaxe, argumentos, exemplos de uso e, em muitos casos, referências e notas
adicionais. Existem várias maneiras de acessar a ajuda para funções ou tópicos no R:

1. Função help(): utilizado para buscar a documentação de uma função ou objeto:


 help(nome_funcao)


2. Interrogação: utilizado antes do nome da função:


 ?nome_funcao


Função print( )

A função print() é usada para exibir valores ou objetos na saída padrão (geralmente a tela do
console). Ela é uma das funções mais básicas e frequentemente utilizadas para depuração e
visualização de resultados intermediários em scripts. A sua sintaxe básica é:


 print(objeto)


Sendo que objeto é qualquer objeto ou expressão que você deseja exibir, como números,
strings, vetores, listas, data frames, entre outros.


 print("Olá, Mundo!")          # Exibe "Olá, Mundo!" no console


No console do R, em muitos casos, você não precisa chamar explicitamente print(), pois R
automaticamente exibe o valor das expressões executadas no console. No entanto, em scripts
ou dentro de funções, o uso de print() é essencial para exibir os resultados explicitamente.

Função ls( )

A função ls() (esse nome vem de listar) no R é utilizada para listar todos os objetos (variáveis,
funções, etc.) que estão presentes no ambiente de trabalho atual (workspace). Ela permite
verificar quais objetos foram criados durante a sessão de trabalho, facilitando a gestão e controle
desses itens. Logo, para visualizar os objetos que estão carregados na memória, utilizamos a
função ls(), que lista todos os objetos presentes no ambiente de trabalho:


 ls()    # Lista todos os objetos (variáveis) no ambiente

         Receita Federal (Analista Tributário) Fluência em Dados                                17
         www.estrategiaconcursos.com.br                                                         116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Função xor( )

A função xor() no R é utilizada para realizar a operação lógica "OU exclusivo" (exclusive OR)
entre dois valores lógicos (booleanos). Essa operação retorna TRUE se exatamente um dos
valores for TRUE e o outro for FALSE. Se ambos os valores forem TRUE ou ambos forem FALSE,
a função retorna FALSE. Vejamos sua sintaxe:


 xor(x, y)


Essa foi apenas uma iniciação básica sobre funções. No decorrer da aula, nós veremos diversas
outras funções no contexto de cada tópico.


 Comentários
                                                                                  INCIDÊNCIA EM PROVA: BAIXA


Comentários na linguagem R são trechos de texto incluídos no código que não são executados
pelo interpretador. Eles servem para explicar o código a outros desenvolvedores (ou a você
mesmo, no futuro), tornando-o mais compreensível e documentado. Comentários podem ser
usados para descrever a funcionalidade de partes do código, lembrar de melhorias futuras ou
anotar alterações.

Para adicionar um comentário em R, utiliza-se o símbolo # (também chamado de cerquilha,
tralha, sustenido, jogo da velha ou hashtag). Tudo o que estiver à direita desse símbolo na mesma
linha será ignorado pelo interpretador de R. Lembrem-se de usar comentários de forma clara e
objetiva, sem exagerar, e garantir que eles reflitam corretamente a função do código ao lado
deles.

         Receita Federal (Analista Tributário) Fluência em Dados                                         18
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 Tipos de Dados
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Na linguagem R, as variáveis são genericamente chamadas de objetos. Quando atribuídos a uma
variável, os dados assumem um tipo específico, conhecido como tipo primitivo de dados ou
classe atômica básica. Esses tipos de dados servem como blocos de construção fundamentais
para manipulação de informações no R. As cinco classes atômicas básicas incluem: numérico,
caractere, lógico, inteiro e complexo.

Estas classes atômicas básicas são amplamente utilizadas na criação de estruturas de dados mais
complexas, como vetores, matrizes, listas e data frames que veremos mais adiante.

         CLASSE                                             DESCRIÇÃO
       NUMERIC       Representa números de maneira geral. Inclui números reais (decimais ou de ponto flutuante).
     CHARACTER       Contém strings ou texto. Representa valores de caracteres (strings de texto).
        LOGICAL      Representa valores booleanos, que podem ser TRUE ou FALSE.
        INTEGER      Um tipo numérico específico que representa números inteiros.
       COMPLEX       Representa números complexos, que incluem uma parte real e uma parte imaginária.


Um dos aspectos mais importantes da linguagem R é que ela é dinamicamente tipada, o que
significa que o programador não precisa declarar antecipadamente o tipo de uma variável. O
tipo de uma variável é determinado automaticamente pelo valor que é atribuído a ela no
momento da execução. Em muitas outras linguagens de programação, como C ou Java, o
programador precisa declarar explicitamente o tipo de uma variável antes de utilizá-la, para que
o compilador possa alocar memória de forma correta e garantir a consistência de tipos.

Na linguagem R, essa tipagem dinâmica simplifica o código e permite maior flexibilidade. O tipo
de uma variável é definido automaticamente durante a atribuição de um valor, sem a
necessidade de uma declaração prévia. A seguir veremos alguns exemplos, mas antes é
importante entender a função class().

Função class( )

A função class() determina o tipo de qualquer objeto e retorna a classe ou tipo primitivo de
uma variável ou objeto. Seu uso é simples: basta passar o objeto como argumento e a função
retornará a classe correspondente. Vejamos:


 nome <- "Diego Carvalho"            # Atribuição de uma string
 class(nome)
 # Saída: [1] "character"


Neste exemplo, atribuímos o valor "Diego Carvalho" à variável nome. Quando usamos a função
class(nome), o R retorna que a classe do objeto nome é character, indicando que a variável
nome contém um valor de tipo caractere (string).

         Receita Federal (Analista Tributário) Fluência em Dados                                              19
         www.estrategiaconcursos.com.br                                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 salario <- 1200 # Atribuição de um valor numérico
 class(salario)
 # Saída: [1] "numeric"


Neste exemplo, a variável salario foi atribuída com o valor 1200, um número. Ao usar a função
class(salario), o R identifica que a classe de salario é numeric, pois o valor é numérico.

 aprovado <- TRUE # Atribuição de um valor lógico
 class(aprovado)
 # Saída: [1] "logical"


Neste exemplo, a variável aprovado recebe o valor TRUE, que é um valor booleano (lógico). A
função class(aprovado) confirma que o tipo da variável é logical.

Por fim, é importante salientar que as classes atômicas básicas em R servem como base para a
construção de estruturas de dados mais complexas, como vetores, matrizes, listas e data frames.
Essas estruturas utilizam uma ou mais dessas classes atômicas para armazenar e manipular dados
de forma mais eficiente.


 Vetores
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Os vetores são uma das estruturas de dados mais fundamentais na linguagem R. Um vetor é uma
estrutura de dados unidimensional e homogênea, o que significa que todos os elementos de um
vetor devem ser do mesmo tipo. Vetores são amplamente utilizados no R para armazenar e
manipular conjuntos de dados que compartilham a mesma natureza, como uma série de
números ou uma coleção de valores lógicos. Então, vejamos as características dos vetores:

 CARACTERÍSTICAS                                                DESCRIÇÃO
                         Todos os elementos de um vetor devem ser do mesmo tipo de dado (numérico, lógico,
 HOMOGENEIDADE           caractere, etc.). Se diferentes tipos de dados forem combinados em um vetor, R os
                         converte automaticamente para o tipo mais inclusivo (como caractere).
                         Os vetores são indexados a partir de 1, o que significa que o primeiro elemento do vetor
        INDEXAÇÃO        está na posição 1 (diferente de outras linguagens de programação que começam com 0).

                         R permite realizar operações em todos os elementos de um vetor ao mesmo tempo, o que
       OPERAÇÕES
                         é altamente eficiente.
      VETORIZADAS


Imaginemos um cenário em que temos quatro notas de um aluno, atribuídas a quatro variáveis
diferentes:

 nota1 <- 7
 nota2 <- 8
 nota3 <- 6

         Receita Federal (Analista Tributário) Fluência em Dados                                               20
         www.estrategiaconcursos.com.br                                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 nota4 <- 10


Para calcular a média das quatro notas, seria necessário somar os valores e dividir por 4:


 media <- (nota1 + nota2 + nota3 + nota4) / 4
 # Resultado: 7.75


Embora este método funcione, ele é ineficiente, especialmente quando temos uma grande
quantidade de dados, como 50 ou 100 valores. Nesse contexto, os vetores são uma solução mais
eficiente, permitindo agrupar todas as notas em uma única estrutura de dados. Professor, como
se cria um vetor? É o que veremos agora...

Função c( )

Em vez de declarar várias variáveis, podemos criar um vetor que contenha as quatro notas
utilizando a função c() (vem de concatenar), que combina os elementos em um vetor. Vejamos:


 notas <- c(7, 8, 6, 10)


Agora, notas é um vetor numérico contendo os valores 7, 8, 6 e 10. O vetor armazena esses
elementos em índices começando de 1 (veremos mais à frente), o que facilita o acesso a cada
elemento individualmente. Vejamos a seguir alguns tipos comuns de vetores:


 # Vetor Numérico
 numero <- c(1, 2, 3, 4, 5)


 # Vetor de Caracteres
 nomes <- c(“Ana”, “Beto”, “Carlos”)


 # Vetor Lógico
 logicos <- c(TRUE, FALSE, TRUE)


 # Vetor Vazio
 Vazio <- c()


Com o vetor criado, podemos realizar diversas operações de forma simplificada, usando funções
que operam sobre todos os elementos do vetor. Para calcular a média de todos os elementos do
vetor, nós podemos utilizar a função mean():

 media <- mean(notas)
 # Resultado: 7.75

         Receita Federal (Analista Tributário) Fluência em Dados                             21
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Para somar todos os valores do vetor, usamos a função sum():


 soma <- sum(notas)
 # Resultado: 31


Essas operações seriam muito mais complicadas se tivéssemos que trabalhar com variáveis
separadas. Se, por exemplo, houvesse 50 notas, seria inviável somar cada uma individualmente.
Ao armazenar os dados em um vetor, podemos realizar essas operações de forma simples e
eficiente. Agora temos que falar sobre indexação...

Os elementos de um vetor em R são acessados utilizando seus índices, que vêm representados
dentro de colchetes e começam a partir de 1 (em contraste com outras linguagens que começam
o índice em 0). O índice de um vetor indica a posição de um determinado elemento. No exemplo
da página anterior, nós tínhamos um vetor que armazenava quatro notas de um aluno. Ao
especificar o índice dentro dos colchetes de um vetor, acessamos um elemento específico:

 notas[1]      # Acessa o primeiro elemento do vetor 'notas', que é 7
 notas[2]      # Acessa o segundo elemento do vetor 'notas', que é 8
 notas[3]      # Acessa o terceiro elemento do vetor 'notas', que é 6
 notas[4]      # Acessa o quarto elemento do vetor ‘notas’, que é 10


O acesso a vetores possui uma dinâmica bastante flexível. Por exemplo, é possível acessar uma
faixa de elementos de um vetor por meio do comando a seguir:


 notas[2:4]      # Acessa os elementos de 2 a 4, que são (7, 8, 6)

         Receita Federal (Analista Tributário) Fluência em Dados                          22
         www.estrategiaconcursos.com.br                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Na imagem anterior, à direita, vemos que existe um vetor chamado notas com índices de 1 a 4
e cujos valores são: 7, 8, 6, 10. À esquerda, é possível ver o resultado do comando notas[2:4].

Eu disse para vocês que o acesso a vetores pode ser bastante dinâmico, então observem a seguir
o que ocorreria se nós utilizássemos o comando notas[-2]:


 notas[-2]      # Acessa todos os elementos, exceto aquele de índice 2, logo (7, 6, 10)


Observe que ele retornará todos os elementos do vetor, exceto o elemento do índice
especificado nos colchetes. Agora se eu quiser excluir de vez o elemento de índice 4, posso fazer:


 notas = notas[-4] # Exclui o elemento de índice 4, que é o 10
 notas # Retornará (7, 8, 6)


Falamos sobre a exclusão de elementos, mas e sobre a inclusão? Sim, é possível também inserir
um novo elemento em um vetor. Observem o código a seguir:

 notas[4] = 10 # Cria um elemento de índice 4 e atribui o valor 10
 notas # Retornará (7, 8, 6, 10)


E se eu percebi que uma das notas do aluno estava errada e precisar atualizar a sua nota? Para
tal, basta atualizar o valor no índice adequado:


 notas[2] = 10 # Atualiza o valor do elemento de índice 2 de 8 para 10
 notas # Retornará (7, 10, 6, 10)


Na Linguagem R, nós já vimos que vetores são estruturas de dados fundamentais que permitem
armazenar múltiplos valores do mesmo tipo. Além de armazenar esses valores, podemos realizar
diversas operações matemáticas diretamente sobre os vetores. As operações podem ser
realizadas entre um vetor e um número escalar (um único valor) ou entre dois vetores de mesmo
comprimento.

Quando realizamos uma operação entre um vetor e um número, o número é aplicado a cada
elemento do vetor. Isso significa que o número será "reciclado" (repetido) para cada operação,
e o resultado será um novo vetor, onde cada elemento resulta da operação entre o número e o
elemento correspondente do vetor original. Dito isso, vamos considerar a seguinte operação:


 num <- 5
 vetor1 <- c(3, 7, 9)
 vetor2 <- num + vetor1

         Receita Federal (Analista Tributário) Fluência em Dados                               23
         www.estrategiaconcursos.com.br                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

Neste exemplo, temos o número num com valor 5 e o vetor vetor1 com três elementos: 3, 7 e 9.
Ao somarmos o número 5 ao vetor, R realiza a seguinte operação para cada elemento:

▪    3+5=8
▪    7 + 5 = 12
▪    9 + 5 = 14

Logo, o resultado é um novo vetor, chamado vetor2, que conterá os valores 8, 12 e 14. Nessa
operação vetorizada, o R somou o valor a todos os elementos do vetor de forma automática.

Além da adição, você pode realizar outras operações como subtração, multiplicação, divisão e
exponenciação entre um vetor e um número, e o resultado será sempre um novo vetor onde a
operação é aplicada a cada elemento. Vejamos alguns exemplos na tabela seguinte:

                   OPERAÇÃO                     EXEMPLO                     RESULTADO
                     ADIÇÃO              vetor2 <- num + vetor1             c(8, 12, 14)
                 SUBTRAÇÃO               vetor2 <- num - vetor1             c(2, -2, -4)
             MULTIPLICAÇÃO               vetor2 <- num * vetor1             c(15, 35, 45)
                    DIVISÃO              vetor2 <- num / vetor1             c(1.67, 0.71, 0.56)
           EXPONENCIAÇÃO                 vetor2 <- num ^ vetor1             c(125, 78125, 1953125)


Quando dois vetores possuem o mesmo comprimento, R realiza a operação de forma elemento
por elemento. Isso significa que o primeiro elemento de um vetor é operado com o primeiro
elemento do outro vetor, o segundo elemento com o segundo elemento do outro vetor, o
terceiro elemento com o terceiro elemento do outro vetor, e assim por diante. Para entender isso
melhor, vamos considerar dois vetores:

    vetor1 <- c(3, 7, 9)
    vetor2 <- c(1, 2, 3)
    resultado <- vetor1 + vetor2


Nesse caso, a soma será feita elemento por elemento:

▪    3+1=4
▪    7+2=9
▪    9 + 3 = 12

Logo, o vetor resultado será então:


    resultado # Retorna c(4, 9, 12)


De forma análoga, o mesmo conceito se aplica para outras operações como subtração,
multiplicação e divisão:

                   OPERAÇÃO                      EXEMPLO                    RESULTADO

          Receita Federal (Analista Tributário) Fluência em Dados                                    24
          www.estrategiaconcursos.com.br                                                             116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

                    ADIÇÃO                   vetor1 + vetor2                c(4, 9, 12)
                SUBTRAÇÃO                    vetor1 – vetor2                c(2, 5, 6)
             MULTIPLICAÇÃO                   vetor1 * vetor2                c(3, 14, 27)
                    DIVISÃO                  vetor1 / vetor2                c(3, 3.5, 3)


Já quando os vetores envolvidos em uma operação possuem comprimentos diferentes, R aplica
um mecanismo chamado reciclagem. Nesse processo, o vetor menor é repetido (reciclado) até
que ele tenha o mesmo comprimento do vetor maior. Vejamos alguns exemplos de reciclagem:

    vetor1 <- c(2, 4, 6, 8)
    vetor2 <- c(1, 2)
    resultado <- vetor1 + vetor2


Neste caso, o vetor vetor2 será reciclado, repetindo seus elementos:

▪    2+1=3
▪    4+2=6

▪    6+1=7
▪    8 + 2 = 10

Logo, o vetor resultado será:

    resultado # Retorna c(3, 6, 7, 10)


É importante destacar que, para que a reciclagem funcione corretamente, o comprimento do
vetor menor deve ser múltiplo do comprimento do vetor maior. Caso contrário, R emitirá um
aviso, mas ainda tentará realizar a operação.

Função seq( )

Agora vamos falar sobre a função seq(). Essa função é utilizada para gerar sequências
numéricas, podendo ser crescentes ou decrescentes. Ela permite criar vetores com valores
sequenciais definidos pelo usuário. A função seq() é muito flexível, pois além de especificar os
valores de início e fim da sequência, também permite definir o incremento ou decremento
(também passo ou salto) entre os valores. Vejamos sua sintaxe básica:


    seq(from, to, by)


Sendo que from é o valor inicial da sequência; to é o valor final da sequência; by é o valor do
incremento/decremento entre os valores da sequência. Se omitido, o valor padrão é 1 ou -1.

Vejamos um exemplo de Sequência Crescente (Incremento):

          Receita Federal (Analista Tributário) Fluência em Dados                            25
          www.estrategiaconcursos.com.br                                                     116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 seq(1, 10)


Neste exemplo, a função seq() gera uma sequência de números de 1 a 10, com um incremento
padrão de 1. O vetor resultante será:


 [1] 1 2 3 4 5 6 7 8 9 10


Agora vejamos um exemplo de Sequência Decrescente (Decremento):

 seq(10, 1)


Nesse caso, a função cria uma sequência decrescente de 10 a 1, mas agora com um incremento
de -1 (que é um decremento):

 [1] 10 9 8 7 6 5 4 3 2 1


Agora vejamos um exemplo de Sequência com Incremento Definido:


 seq(1, 10, by = 2)


Neste caso, especificamos um incremento de 2, de modo que a sequência vai de 1 até 10,
somando 2 a cada passo. O resultado será:


 [1] 1 3 5 7 9


Por fim, vejamos um exemplo de Sequência com Decremento Definido:

 seq(20, 1, by = -2)


Quando desejamos uma sequência decrescente com um passo maior que -1, podemos
especificar o valor do passo como negativo. O vetor gerado será:

 [1] 20 18 16 14 12 10 8 6 4 2


Podemos atribuir o resultado da função seq() a um objeto (vetor). Isso nos permite armazenar a
sequência gerada e utilizá-la posteriormente. Vejamos um exemplo de criação de vetor:

 numeros <- seq(1, 10)

         Receita Federal (Analista Tributário) Fluência em Dados                           26
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Nesse caso, criamos um vetor chamado numeros, que conterá a sequência de números de 1 a
10. O vetor numeros armazenará:


 [1] 1 2 3 4 5 6 7 8 9 10


Outra maneira de criar sequências numéricas em R é utilizando o operador : (dois pontos). Esse
operador cria uma sequência de números inteiros de maneira crescente ou decrescente.


 numeros <- 1:10


Nesse caso, o operador : cria uma sequência de números de 1 a 10, semelhante ao que a função
seq(1, 10) faria:


 [1] 1 2 3 4 5 6 7 8 9 10


Podemos utilizar valores negativos também, tais como:


 numeros <- -2:2


Se esse comando for executado, o resultado será:

 [1] -2 -1      0   1   2


Por fim, a função seq() possui um parâmetro chamado length, que indica a quantidade de
elementos que a sequência deve ter. Vejam o seguinte código:

 seq(2, 15, length=3)


Ao executar esse código, o resultado será:


 [1] 2.0     8.5    15.0


Note que a função retorna uma sequência que varia entre 2 e 15, e que contém 3 números
uniformemente espaçados.

         Receita Federal (Analista Tributário) Fluência em Dados                           27
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Função rep( )

A função rep() é usada para repetir valores em R. Ela permite replicar um valor ou um conjunto
de valores diversas vezes, criando assim um vetor com esses elementos repetidos. Sua sintaxe é:

 rep(x, times)


Sendo que x é o valor ou vetor que será repetido e times é o número de vezes que cada valor
será repetido. Vejamos um exemplo de repetição de um único valor:


 rep(1, 5)


Nesse caso, o valor 1 será repetido cinco vezes, resultando em:


 [1] 1 1 1 1 1


Vejamos um exemplo de repetição de um vetor:

 rep(c(10, 20), 3)


Nesse caso, o vetor c(10, 20) será repetido três vezes consecutivas, formando o seguinte vetor
apresentado:

 [1] 10 20 10 20 10 20


Agora vamos complicar um pouco mais: é possível utilizar funções alinhadas, ou seja, funções
que operam uma dentro da outra. Quando encontramos esse tipo de situação, o R executa a
função mais interna primeiro e, em seguida, a função externa. Vamos analisar um exemplo
prático com as funções seq() e rep():


 rep(seq(-1, 1, by = 0.5), 2)


Em primeiro lugar, precisamos resolver a função mais interna, que é a função seq():


 seq(-1, 1, by = 0.5)


Nesse caso, a função seq() gera uma sequência de números de -1 até 1, com incremento de 0,5.
Como o separador decimal em R é o ponto (.), o incremento será de meio em meio. Vejamos:

         Receita Federal (Analista Tributário) Fluência em Dados                            28
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

    [1] -1.0 -0.5 0.0 0.5 1.0


Observem que essa sequência contém cinco elementos: -1, -0.5, 0, 0.5 e 1. Continuando, agora
a função rep() é aplicada:


    rep(seq(-1, 1, by = 0.5), 2)


A função rep() repete o resultado da sequência duas vezes. Isso significa que o vetor gerado
anteriormente será repetido:

    [1] -1.0 -0.5      0.0    0.5    1.0 -1.0 -0.5       0.0    0.5   1.0


No total, o vetor resultante conterá 10 elementos: a sequência original de 5 elementos repetida
duas vezes. Agora vamos complicar um pouco mais:

    rep(c(1, 3, 5), c(3, 2, 1))


A função rep() aceita dois argumentos: o vetor a ser repetido: c(1, 3, 5) e o número de
repetições para cada elemento: c(3, 2, 1). Isso significa que o primeiro elemento do vetor será
repetido o número de vezes especificado pelo primeiro elemento do segundo vetor, o segundo
elemento será repetido o número de vezes especificado pelo segundo elemento do segundo
vetor, e assim por diante. O resultado da função será:

▪    O número 1 será repetido 3 vezes.
▪    O número 3 será repetido 2 vezes.
▪    O número 5 será repetido 1 vez.


    [1] 1 1 1 3 3 5


Logo, a função vai gerar o seguinte vetor:


    [1] 1 1 1 3 3 5


Função sample( )

Agora vamos falar sobre a função sample(). No R, ela é utilizada para gerar amostras aleatórias
a partir de um conjunto de elementos. Isso é útil quando precisamos selecionar elementos de
um vetor ou gerar números aleatórios dentro de um intervalo definido. A aleatoriedade é
amplamente utilizada em simulações, estudos estatísticos e experimentos que envolvem
amostragem. Vamos conhecer sua sintaxe básica:

          Receita Federal (Analista Tributário) Fluência em Dados                           29
          www.estrategiaconcursos.com.br                                                    116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 sample(x, size, replace = FALSE)


Sendo que x é um vetor ou uma sequência de elementos de onde as amostras serão retiradas;
size é o número de elementos que desejamos amostrar; e replace é um argumento lógico que
define se a amostragem será feita com reposição (TRUE) ou sem reposição (FALSE, padrão).
Quando replace = TRUE, o mesmo elemento pode ser sorteado mais de uma vez; quando
replace = FALSE, cada elemento será sorteado apenas uma vez. Vejamos um exemplo:

 vetor <- c("bola", "pipa", "peão", "boneca")
 sample(vetor, 1)


Neste exemplo, a função sample() seleciona um elemento aleatório do vetor vetor. Cada vez
que o código é executado, o resultado pode ser diferente. Se executarmos o código uma vez,
ele pode retornar algo como:


 [1] "peão"


Se executarmos novamente, ele pode retornar outro resultado, como:


 [1] "bola"


Podemos usar sample() também para criar uma sequência de números aleatórios dentro de um
intervalo. Por exemplo, podemos simular o sorteio de números da loteria:


 sample(1:60, 6)


Este código sorteia 6 números aleatórios entre 1 e 60, sem repetição (por padrão, replace =
FALSE). O resultado será uma sequência diferente a cada execução, como:


 [1] 42 17 5 33 12 60


O argumento replace controla se os elementos podem ser repetidos na amostra. Quando
replace = TRUE, a função permite a repetição de elementos.


 sample(1:10, 5, replace = TRUE)


Nesse caso, cinco números aleatórios entre 1 e 10 serão selecionados, mas com a possibilidade
de repetição de números, já que replace = TRUE. O resultado pode ser algo como:


 [1] 3 7 7 1 9


         Receita Federal (Analista Tributário) Fluência em Dados                          30
         www.estrategiaconcursos.com.br                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Função set.seed( )

Em muitos casos, especialmente em pesquisas científicas, é necessário garantir que os resultados
de uma amostra aleatória possam ser reproduzidos por outras pessoas. Isso é possível utilizando
a função set.seed(), que define uma semente (seed) para a aleatoriedade. Quando uma
semente é definida, os mesmos números aleatórios serão gerados sempre que o código for
executado. Isso é essencial para garantir que experimentos possam ser repetidos e validados.

 set.seed(123)
 sample(1:60, 6)


Nesse exemplo, a função set.seed(123) define a semente para a geração dos números
aleatórios. Sempre que esse código for executado, o resultado será o mesmo:


 [1] 31 15 51 14 3 42


Mesmo que a amostra seja aleatória, a semente garante que o sorteio seja reproduzível. Se outra
pessoa usar o mesmo código com a mesma semente, ela obterá o mesmo resultado. Se
mudarmos a semente, o resultado será diferente. Por exemplo:


 set.seed(1)
 sample(1:60, 6)


Com a semente 1, o resultado será:


 [1] 57 4 39 1 34 23


Números aleatórios são amplamente utilizados em pesquisas científicas e estatísticas,
especialmente em estudos que envolvem amostragem. Quando queremos garantir que uma
amostra seja verdadeiramente aleatória, a função sample() é uma excelente escolha. No
entanto, quando os resultados precisam ser reproduzidos, é crucial definir uma semente para a
aleatoriedade utilizando set.seed(). Isso garante que outras pessoas possam reproduzir o
mesmo experimento e validar os resultados.

Função rev( )

Agora vamos falar sobre a função rev(). Essa função é utilizada para inverter (ou reverter) a
ordem dos elementos de um vetor. Ela funciona com vetores de qualquer tipo, como numéricos,
lógicos ou de caracteres, e retorna um novo vetor com os elementos na ordem inversa ao
original. Sua sintaxe básica é:


 rev(x)

         Receita Federal (Analista Tributário) Fluência em Dados                             31
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

Sendo que x é um vetor de qualquer tipo (números, caracteres, entre outros) cujos elementos
você deseja inverter. Vejamos um exemplo:


    numeros <- c(1, 2, 3, 4, 5)
    rev(numeros)


Se executarmos esse código, o resultado será:


    [1] 5 4 3 2 1


E se quisermos inverter um vetor de caracteres:


    palavras <- c("R", "é", "muito", "útil")
    rev(palavras)


Se executarmos esse código, o resultado será:


    [1] "útil" "muito" "é" "R"


Função sort( )

Por fim, a função sort() é utilizada para ordenar os elementos de um vetor de forma crescente
ou de forma decrescente. Essa função funciona com vetores numéricos, de caracteres ou lógicos,
e oferece flexibilidade ao permitir ordenar os dados de acordo com suas necessidades. Sua
sintaxe básica é:


    sort(x, decreasing = FALSE, na.last = TRUE)


Sendo que x é o vetor que você deseja ordenar; decreasing é um valor lógico (TRUE ou FALSE);
e na.last é um valor lógico ou NA. Se decreasing for FALSE (Padrão), a ordenação será em
ordem crescente; se for TRUE, a ordenação será em ordem decrescente. Já na.last define como
os valores ausentes (NA) devem ser tratados conforme podemos ver a seguir:

▪    TRUE: os valores ausentes aparecem no final (é o padrão).
▪    FALSE: os valores ausentes aparecem no início.
▪    NA: exclui os valores ausentes da ordenação.

Vejamos um exemplo de ordenação de vetor numérico em ordem crescente:


    numeros <- c(5, 2, 9, 1, 7)
    sort(numeros)

          Receita Federal (Analista Tributário) Fluência em Dados                          32
          www.estrategiaconcursos.com.br                                                   116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Se executarmos esse código, o resultado será:


 [1] 1 2 5 7 9


Agora vejamos um exemplo de ordenação de vetor numérico em ordem decrescente:

 sort(numeros, decreasing = TRUE)


Se executarmos esse código, o resultado será:


 [1] 9 7 5 2 1


Agora vejamos um exemplo de ordenação com valores ausentes:


 numeros_com_na <- c(5, 2, NA, 9, 1)
 sort(numeros_com_na, na.last = TRUE) # Coloca os NA no final


Se executarmos esse código, o resultado será:


 [1] 1 2 5 9 NA


Se na.last = FALSE, os valores ausentes serão colocados no início:

 sort(numeros_com_na, na.last = FALSE)


Se executarmos esse código, o resultado será:


 [1] NA 1 2 5 9


Agora vejamos um exemplo de ordenação de vetor de caracteres:

 palavras <- c("maçã", "banana", "laranja")
 sort(palavras)


Se executarmos esse código, o resultado será:

 [1] "banana" "laranja" "maçã"

         Receita Federal (Analista Tributário) Fluência em Dados                        33
         www.estrategiaconcursos.com.br                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

    Matrizes
                                                                                    INCIDÊNCIA EM PROVA: ALTA


Nós vimos que vetores são uma estrutura (também chamado de array ou arranjo) unidimensional,
isto é, têm apenas uma dimensão: uma única linha ou uma única coluna). Já uma matriz é uma
estrutura de dados bidimensional, composta por linhas e colunas. Ambas as estruturas são
consideradas homogêneas, isto é, todos os elementos devem ser do mesmo tipo (Ex: uma matriz
pode conter apenas números, ou apenas caracteres, mas não uma mistura de ambos).

O conceito de matriz é fundamental em R, especialmente em operações matemáticas e
estatísticas. Para acessar elementos de uma matriz, utiliza-se como referência sempre linhas e
colunas (como em uma tabela). Por exemplo:

▪    Uma matriz com duas linhas e três colunas é chamada de uma matriz 2x3.

▪    Uma matriz com três linhas e duas colunas é chamada de uma matriz 3x2.

Além disso, uma matriz é chamada de matriz quadrada quando o número de linhas é igual ao
número de colunas. Por exemplo:

▪    Uma matriz com duas linhas e duas colunas é chamada de uma matriz quadrada (2x2).

▪    Uma matriz com três linhas e três colunas é chamada de uma matriz quadrada (3x3).

Função cbind( )

Professor, como se cria uma matriz a partir de um vetor? Duas das funções mais utilizadas para
criar matrizes em R a partir de vetores são cbind() (combinar por colunas) e rbind() (combinar
por linhas). Ambas permitem combinar vetores para criar matrizes, desde que os vetores tenham
o mesmo número de elementos. A função cbind() combina vetores por colunas, ou seja, cada
vetor se torna uma coluna da matriz resultante.

          Receita Federal (Analista Tributário) Fluência em Dados                                         34
          www.estrategiaconcursos.com.br                                                                  116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

O termo “cbind” vem de column bind (ligação/combinação de colunas) e o termo “rbind” vem
de row bind (ligação/combinação de linhas) Vejamos um exemplo:


 vetor1 <- c(1, 2, 3, 4, 5)
 vetor2 <- c(5, 4, 3, 2, 1)
 vetor3 <- c(1, 1, 2, 3, 5)
 print(matriz <- cbind(vetor1, vetor2, vetor3))


Se executarmos esse código, o resultado será:

        vetor1 vetor2 vetor3
 [1,]     1      5      1
 [2,]     2      4      1
 [3,]     3      3      2
 [4,]     4      2      3
 [5,]     5      1      5


Nesse caso, combinamos os vetores como colunas, criando uma Matriz 5x3 (5 linhas e 3
colunas). Note que cada vetor foi colocado em uma coluna.

Função rbind( )

Já a função rbind() combina vetores por linhas, ou seja, cada vetor se torna uma linha da matriz
resultante. Vejamos um exemplo:


 print(matriz2 <- rbind(vetor1, vetor2, vetor3))


Se executarmos esse código, o resultado será:


             [,1] [,2] [,3] [,4] [,5]
 vetor1       1    2    3    4    5
 vetor2       5    4    3    2    1
 vetor3       1    1    2    3    5


Nesse caso, em contraste com o anterior, combinamos os vetores como linhas, criando uma
Matriz 3x5 (3 linhas e 5 colunas).

Função dim( )

A função dim() pode ser usada tanto para consultar as dimensões de uma matriz quanto para
converter um vetor em uma matriz ao definir suas dimensões. Vejamos sua sintaxe:

 dim(matriz)

         Receita Federal (Analista Tributário) Fluência em Dados                             35
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Se executarmos esse código, o resultado será:

 [1] 5 3


Isso indica que a matriz tem 5 linhas e 3 colunas. É possível também converter um vetor em uma
matriz usando a função dim() para definir as dimensões. Para tal, o número total de elementos
de uma matriz é dado pelo produto das suas dimensões (linhas × colunas). Dessa forma, você
deve garantir que o comprimento do vetor seja igual ao produto das dimensões que você deseja
definir.

Por exemplo, se temos um vetor com 6 elementos, podemos organizá-lo em uma matriz de
dimensões 2x3 ou 3x2, mas nunca em uma matriz de 3x4 (porque 3x4 = 12 e o vetor só tem 6
elementos). Além disso, ao transformar um vetor em matriz com dim(), o R preenche a matriz
por colunas, ou seja, os elementos do vetor são dispostos primeiro nas colunas, e depois nas
linhas. Vejamos um exemplo:

 vetor <- c(3, 2, 1, 4, 5, 6)
 dim(vetor) <- c(3, 2)
 print(vetor)


Se executarmos esse código, o resultado será:


         [,1] [,2]
 [1,]     3    4
 [2,]     2    5
 [3,]     1    6


Note que o vetor foi transformado em uma Matriz 3x2 (3 linhas e 2 colunas).

No R, o índice de um elemento de uma matriz é sempre referenciado pela sua linha e coluna. A
sintaxe para acessar elementos de uma matriz segue o formato:

 matriz[linha, coluna]


 ▪   linha: refere-se ao índice da linha onde o elemento está localizado
 ▪   coluna: refere-se ao índice da coluna onde o elemento está localizado

Considere a seguinte matriz chamada matriz com 5 linhas e 3 colunas:


         vetor1     vetor2     vetor3
 [1,]      1          5          1
 [2,]      2          4          1
 [3,]      3          3          2
 [4,]      4          2          3


         Receita Federal (Analista Tributário) Fluência em Dados                           36
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 [5,]       5          1          5


Para acessar o elemento na linha 3 e coluna 2, usamos:


 matriz[3, 2]


Se executarmos esse código, o resultado será 3:

         vetor1     vetor2     vetor3
 [1,]      1          5          1
 [2,]      2          4          1
 [3,]      3          3          2
 [4,]      4          2          3
 [5,]      5          1          5


Para acessar o elemento na linha 5 e coluna 3, usamos:


 matriz[5, 3]


Se executarmos esse código, o resultado será 5:

         vetor1     vetor2     vetor3
 [1,]      1          5          1
 [2,]      2          4          1
 [3,]      3          3          2
 [4,]      4          2          3
 [5,]      5          1          5


Além de acessar um elemento específico, também podemos acessar linhas ou colunas inteiras.
Para acessar toda a linha 2, omitimos o índice da coluna:


 matriz[2, ]


Se executarmos esse código, o resultado será:


 vetor1     vetor2     vetor3
   2          4          1


Já para acessar toda a coluna 1, omitimos o índice da linha:


 matriz[, 1]

         Receita Federal (Analista Tributário) Fluência em Dados                        37
         www.estrategiaconcursos.com.br                                                 116

                                      


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Se executarmos esse código, o resultado será:


 [1,]    1 2 3 4 5


Ao executarmos esse código, ele retornará todos os elementos da coluna 1. Agora se eu quiser
remover uma linha, basta utilizar o valor negativo na frente da referência da linha. Vejamos:


 matriz[-2, ]


Se executarmos esse código, vamos remover a linha 2 e o resultado será:

         vetor1     vetor2     vetor3
 [1,]      1          5          1
 [2,]      3          3          2
 [3,]      4          2          3
 [4,]      5          1          5


Agora se quisermos remover uma coluna, basta utilizar o valor negativo na frente da referência
de coluna. Vejamos um exemplo:


 matriz[,-1]


Se executarmos esse código, vamos remover a coluna 1 e o resultado será:

         vetor1     vetor2
 [1,]      5          1
 [2,]      4          1
 [3,]      3          2
 [4,]      2          3
 [5,]      1          5


Professor, e se quisermos excluir um elemento específico da matriz em vez de uma linha ou coluna
inteira? Em vez de removermos elementos específicos, nós podemos atribuir valores ausentes
utilizando NA. Esse valor significa "valor ausente" ou "não disponível" (Not Available). Quando o
atribuímos a um elemento da matriz, ele marca esse valor como ausente, sem removê-lo da
estrutura. Vejamos um exemplo:


 matriz[1,1] <- NA


Se executarmos esse código, o resultado será:

         Receita Federal (Analista Tributário) Fluência em Dados                              38
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

         vetor1     vetor2     vetor3
 [1,]      NA         5          1
 [2,]      2          4          1
 [3,]      3          3          2
 [4,]      4          2          3
 [5,]      5          1          5


Agora se tivermos a seguinte matriz:


 print(matriz <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3, ncol = 2))


A matriz resultante será:


        [,1] [,2]
 [1,]     1    4
 [2,]     2    5
 [3,]     3    6


Para acessar o elemento na linha 2 e coluna 2, podemos fazer:

 matriz[2, 2]


Se executarmos esse código, o resultado será:


 [1] 5


Para acessar todos os elementos da linha 3, podemos fazer:

 matriz[3, ]


Se executarmos esse código, o resultado será:

 [1] 3 6


Para acessar todos os elementos da coluna 1, podemos fazer:


 matriz[, 1]


Se executarmos esse código, o resultado será:

         Receita Federal (Analista Tributário) Fluência em Dados                        39
         www.estrategiaconcursos.com.br                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 [1] 1 2 3


Para remover uma linha ou coluna de uma matriz, podemos usar o sinal de menos (-) junto com
a função de referenciamento. Para remover a linha 2, podemos fazer:


 matriz[-2, ]


Para remover a coluna 1, podemos fazer:

 matriz[, -1]


Esses comandos retornam uma nova matriz sem a linha ou coluna especificada. Vamos usar como
exemplo a matriz a seguir:

     [,1] [,2]
 [1,] 1     4
 [2,] 2     5
 [3,] 3     6


Para remover a linha 2, podemos fazer:


 matriz[-2, ]


Se executarmos esse código, o resultado será:


 [,1] [,2]


Função matrix( )

A função matrix() é usada para criar matrizes diretamente e permite que você especifique um
vetor de dados, juntamente com o número de linhas e colunas que a matriz deve ter. Sintaxe:

 matrix(dados, nrow, ncol)


Sendo que dados é o vetor de dados que será usado para preencher a matriz; nrow é o número
de linhas da matriz; e ncol é o número de colunas da matriz. Vejamos um exemplo:

 dados <- 1:10
 matriz <- matrix(dados, nrow = 2, ncol = 5)

         Receita Federal (Analista Tributário) Fluência em Dados                        40
         www.estrategiaconcursos.com.br                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Na primeira linha, a variável dados é criada utilizando a expressão 1:10, que gera um vetor
sequencial contendo os números de 1 a 10: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

Na segunda linha, a função matrix() é utilizada para criar uma matriz a partir do vetor dados.
Essa função pega os elementos do vetor e os distribui por colunas na matriz resultante. Ora, se
temos 10 valores nesse vetor, as únicas matrizes possíveis a partir dele são 1x10, 2x5 e 5x2. Por
quê? Porque o número total de elementos na matriz (10 elementos) deve ser igual ao número de
elementos no vetor dados (que também tem 10 elementos).

No caso, a segunda linha especificou que teremos 2 linhas e 5 colunas. Como a quantidade de
elementos no vetor é compatível com as dimensões especificadas para a matriz, a criação ocorre
sem erros. A função matrix() preenche a matriz por colunas, ou seja, os elementos do vetor
dados são colocados coluna por coluna, começando pela primeira. É importante destacar que
não é obrigatório escrever “nrow” e “ncol”. O código poderia ser escrito da seguinte forma:


 matriz <- matrix(dados, 2, 5)


Logo, a matriz resultante do código acima será:

           [,1] [,2] [,3] [,4] [,5]
 [1,]        1    3    5    7    9
 [2,]        2    4    6    8    10


No R, as matrizes são um conceito central para muitas operações matemáticas e estatísticas. Além
das operações básicas, como criação e manipulação de matrizes, é importante conhecer as
matrizes especiais e suas propriedades. A seguir, discutiremos algumas das matrizes mais
comuns e suas características. Vamos iniciar pelas matrizes quadradas...

Uma matriz quadrada é uma matriz em que o número de linhas é igual ao número de colunas. A
ordem de uma matriz quadrada é definida pela quantidade de linhas (ou colunas). Por exemplo:
uma matriz de ordem 1 tem uma linha e uma coluna (1x1); uma matriz de ordem 2 tem duas
linhas e duas colunas (2x2); e assim sucessivamente. Vejamos um exemplo:


 matriz1x1 <- matrix(1, nrow=1, ncol=1) # Matriz 1x1
 matriz2x2 <- matrix(c(1,2,3,4), nrow=2, ncol=2) # Matrix 2x2


Já uma matriz identidade é uma matriz quadrada em que os elementos da diagonal principal são
iguais a 1 e todos os outros elementos são iguais a 0. Vejamos um exemplo:


 dados = c(1, 0, 0, 0, 1, 0, 0, 0, 1)
 matrix(dados, 3, 3)


Se executarmos esse código, o resultado será:

         Receita Federal (Analista Tributário) Fluência em Dados                              41
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

         [,1] [,2] [,3]
 [1,]      1    0    0
 [2,]      0    1    0
 [3,]      0    0    1


Uma matriz nula é uma matriz em que todos os elementos são iguais a zero. Não importa o
tamanho ou a ordem da matriz, desde que todos os elementos sejam zero. Vejamos um exemplo:


 matriz_nula <- matrix(0, nrow=3, ncol=3)


Se executarmos esse código, o resultado será:

         [,1] [,2] [,3]
 [1,]      0    0    0
 [2,]      0    0    0
 [3,]      0    0    0


Função t( )

A matriz transposta de uma matriz A é a matriz obtida ao trocar suas linhas por colunas. Se A tem
dimensão m x n, sua transposta terá dimensão n x m. A função t() em R realiza a transposição:


 matrizA <- matrix(1:6, 2, 3)
 transpostaA <- t(matrizA)


Note que matrizA tem 2 linhas e 3 colunas, sendo criada a partir de um vetor cujos elementos
são a sequência de 1 a 6: 1, 2, 3, 4, 5, 6. Vejamos:

         [,1] [,2] [,3]
 [1,]      1    3    5
 [2,]      2    4    6


Quando fazemos a transposição, resulta em:


        [,1] [,2]
 [1,]     1    2
 [2,]     3    4
 [3,]     5    6


Quanto à adição matrizes, ela só é possível apenas se as matrizes tiverem a mesma dimensão. O
processo consiste em somar os elementos de mesma posição de cada matriz. Vejamos:

         Receita Federal (Analista Tributário) Fluência em Dados                              42
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 matrizA <- matrix(c(4, -5, 7, 3), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:

         [,1] [,2]
 [1,]      4    7
 [2,]     -5    3


Já a segunda matriz será:


 matrizB <- matrix(c(2, -3, 1, -6), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:

         [,1] [,2]
 [1,]      2    1
 [2,]     -3   -6


Por fim, vamos fazer a soma:


 matrizC <- matrizA + matrizB


Se executarmos esse código, o resultado será:

         [,1] [,2]
 [1,]      6    8
 [2,]     -8   -3


Dada uma matriz A, a matriz oposta de A é a matriz -A, onde cada elemento de A é substituído
pelo seu valor negativo. A soma de A com -A sempre resulta em uma matriz nula. Vejamos:


 matrizA <- matrix(c(2, 0, 7, -8), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:

         [,1] [,2]
 [1,]      2    7
 [2,]      0   -8


Agora descobrimos a matriz oposta:


         Receita Federal (Analista Tributário) Fluência em Dados                         43
         www.estrategiaconcursos.com.br                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 matriz_opostaA <- -matrizA


Se executarmos esse código, o resultado será:


        [,1] [,2]
 [1,]     -2   -7
 [2,]      0    8


Note que podemos somar as duas matrizes agora:


 matriz_nula <- matriza + matriz_opostaA


Se executarmos esse código, o resultado será:

         [,1] [,2]
 [1,]      0    0
 [2,]      0    0


Já a subtração de matrizes obedece ao mesmo princípio da adição, isto é, elas devem ser do
mesmo tipo –com o mesmo número de linhas e colunas. A subtração é realizada somando uma
matriz A com a matriz oposta de B. A matriz oposta de B é obtida invertendo o sinal de todos os
seus elementos. Esse processo é o conceito básico da diferença entre matrizes. Vamos definir a
Matriz A:

 A <- matrix(c(4, -5, 7, 3), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:


         [,1] [,2]
 [1,]      4    7
 [2,]     -5    3


Agora definimos a Matriz B:

 B <- matrix(c(2, -3, 1, -6), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:


         [,1] [,2]
 [1,]      2    1


         Receita Federal (Analista Tributário) Fluência em Dados                            44
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 [2,]      -3    -6


A subtração A - B é realizada somando a Matriz A com a Matriz Oposta de B, que é:


         [,1] [,2]
 [1,]     -2   -1
 [2,]      3    6


Pronto! Somando Matriz A com a Matriz Oposta de B, teremos:


         [,1] [,2]
 [1,]      2    6
 [2,]     -2    9


A multiplicação de uma matriz por um número real é uma operação simples. Basta multiplicar o
número real por todos os elementos da matriz, individualmente. Essa operação é conhecida
como multiplicação escalar. Vamos definir a Matriz A:


 A <- matrix(c(5, 7, 0, -3), nrow=2, ncol=2)


Se executarmos esse código, o resultado será:


         [,1] [,2]
 [1,]      5    0
 [2,]      7   -3


Se multiplicamos essa matriz pelo valor escalar 2, teremos:


 C <- A * 2


Se executarmos esse código, o resultado será:


             [,1]   [,2]
 [1,]       5x2=10 0x2=0
 [2,]       7x2=14 -3x2=-6


Formatando melhor, teremos:


         [,1] [,2]
 [1,]     10    0
 [2,]     14   -6

         Receita Federal (Analista Tributário) Fluência em Dados                         45
         www.estrategiaconcursos.com.br                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Podemos fazer também a multiplicação elemento a elemento. Nesse caso, as matrizes deverão
ter exatamente as mesmas dimensões. Vamos definir a Matriz A:


 A <- matrix(c(2, 3, 0, 1), nrow=2, ncol=2)


E agora vamos definir a Matriz B:


 B <- matrix(c(4, 3, 9, 7), nrow=2, ncol=2)


Agora vamos multiplicar as duas matrizes:

                                                        ==219a34==

 C <- A * B


Se executarmos esse código, o resultado será:


            [,1] [,2]
 [1,]       2x3   0x9
 [2,]       3x3   1x7


Formatando melhor, teremos:

         [,1] [,2]
 [1,]      8    0
 [2,]      9    7


Agora a multiplicação matricial de duas matrizes é mais complexa e requer uma condição
específica: o número de colunas da primeira matriz deve ser igual ao número de linhas da
segunda matriz. Logo, se A for uma matriz de dimensão m x n (com m linhas e n colunas) e B for
uma matriz de dimensão n x p (com n linhas e p colunas), o produto das matrizes resultará em
uma nova matriz C de dimensão m x p.

Cada elemento da matriz C é obtido multiplicando cada linha de A pelos elementos
correspondentes de cada coluna de B e somando os resultados. Vamos definir a Matriz A (1x4):


 A <- matrix(c(25, 30, 100, 20), nrow=1, ncol=4)


Se executarmos esse código, o resultado será:


         [,1] [,2] [,3] [,4]
 [1,]     25   30 100    20

         Receita Federal (Analista Tributário) Fluência em Dados                           46
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Agora vamos definir a Matriz B (4x2):


 B <- matrix(c(2, 3.50, 0.80, 1.70, 2.40, 3.00, 0.85, 1.80), nrow=4, ncol=2)


Se executarmos esse código, o resultado será:

        [,1] [,2]
 [1,]    2.0 2.40
 [2,]    3.5 3.00
 [3,]    0.8 0.85
 [4,]    1.7 1.80


Antes de tudo, precisamos verificar se a multiplicação atende a nossa regra fundamental. A Matriz
A tem dimensão 1x4 e a Matriz B tem dimensão 4x2. Como a coluna da Matriz A (4) é igual à
linha da Matriz B (4), a condição para multiplicação matricial está atendida. Além disso, a Matriz
C terá dimensão 1x2. Agora vem a parte da multiplicação e com isso um novo operador. Para
multiplicação matricial, utiliza-se o operador %*%. Vejamos:


 C <- A %*% B


Se executarmos esse código, o resultado será:

                       [,1]                                                        [,2]
 [1,]    (25x2)+(30*3.5)+(100*0.8)+(20*1.7)                        (25x2.4)+(30*3.0)+(100*0.85)+(20*1.8)


Formatando melhor, teremos:

         [,1] [,2]
 [1,]    269 271


Função diag( )

A função diag() é utilizada para obter os elementos da diagonal principal de uma matriz ou para
substituir os valores dos elementos da diagonal por novos valores de um vetor. Esse é um
conceito importante para operações em matrizes, principalmente em sistemas lineares, onde a
diagonal pode representar valores chave. Considere a criação de uma matriz de ordem 4 (4
linhas e 4 colunas) com os valores de 1 a 16:


 matriz <- matrix(1:16, nrow = 4, ncol = 4)


Se executarmos esse código, o resultado será:


         Receita Federal (Analista Tributário) Fluência em Dados                                           47
         www.estrategiaconcursos.com.br                                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

        [,1] [,2] [,3] [,4]
 [1,]      1    5    9   13
 [2,]      2    6   10   14
 [3,]      3    7   11   15
 [4,]      4    8   12   16


A função diag() é utilizada para extrair os elementos da diagonal principal:


 diag(matriz)


Se executarmos esse código, o resultado será:


 [1] 1 6 11 16


É possível também substituir os valores da diagonal por um novo vetor. Por exemplo, se
quisermos substituir os valores da diagonal principal pelos números 1, 2, 3, 4. Vejamos:


 diag(matriz) <- c(1, 2, 3, 4)


Se executarmos esse código, o resultado será:

        [,1] [,2] [,3] [,4]
 [1,]      1    5    9   13
 [2,]      2    2   10   14
 [3,]      3    7   3    15
 [4,]      4    8   12   4


Note que a diagonal foi substituída pelos valores 1, 2, 3, 4.

Função det( )

A função det() em R é utilizada para calcular o determinante de uma matriz quadrada. O
propósito do cálculo do determinante de uma matriz é identificar se um sistema linear é possível
e determinado, quando seu resultado é diferente de zero. O cálculo do determinante varia de
acordo com a ordem da matriz, então há uma maneira de calcular para matrizes 1x1, outra
maneira para matrizes 2x2 e a assim por diante (vamos nos preocupar até 2x2).

O determinante de uma matriz 1x1 é o próprio valor. Logo, vamos criar uma matriz 1x1 para servir
de exemplo:

 A <- matrix(c(10), nrow = 1, ncol = 1)

         Receita Federal (Analista Tributário) Fluência em Dados                             48
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Esse código geraria a seguinte matriz:


 [1] 10


Para gerar o determinante dessa matriz, poderíamos fazer:

 det(A)


Se executarmos esse código, o resultado será:


 [1] 10


Note que o determinante é o próprio elemento (10). Já o determinante de uma matriz 2x2 é o
produto da diagonal principal subtraído do produto da diagonal secundária. Vejamos:


 B <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)


Esse código geraria a seguinte matriz:


        [,1] [,2]
 [1,]      1    3
 [2,]      2    4


A diagonal primária será (1, 4):


        [,1] [,2]
 [1,]      1    3
 [2,]      2    4


Já a diagonal secundária será (2, 3):

        [,1] [,2]
 [1,]      1    3
 [2,]      2    4


Para gerar o determinante dessa matriz, poderíamos fazer:


 det(B)

         Receita Federal (Analista Tributário) Fluência em Dados                        49
         www.estrategiaconcursos.com.br                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Se executarmos esse código, o resultado será:

 [1] -2


Como chegamos a esse valor? Subtraindo o produto da diagonal principal do produto da
diagonal secundária, conforme vemos a seguir

                                      det(B) = (1×4)−(2×3) = 4 – 6 = -2

As matrizes multidimensionais são uma extensão das matrizes bidimensionais, permitindo a
organização de dados em várias dimensões. Uma forma simples de entender esse conceito é por
meio de planilhas de cálculo, como as usadas no MS-Excel. Enquanto no MS-Excel temos apenas
linhas e colunas em cada planilha, podemos adicionar múltiplas folhas, onde cada folha
representa uma nova dimensão. De forma análoga, em uma matriz multidimensional no R, a
terceira dimensão pode ser vista como um conjunto de camadas ou folhas.

Uma matriz bidimensional possui linhas e colunas, com cada célula referenciada pela
combinação desses dois índices. Ao adicionar uma terceira dimensão, adicionamos a
"profundidade", ou seja, várias camadas de matrizes bidimensionais empilhadas umas sobre as
outras.

Por exemplo, considere um vetor de 27 elementos. Nós podemos reorganizar esse vetor em uma
matriz tridimensional com três matrizes, onde cada matriz tem três linhas e três colunas. Dessa
forma, passamos a ter três índices para referenciar os elementos: um para as linhas, um para as
colunas e o terceiro para as camadas, páginas ou outro nome para profundidade.

 vetor = 1:27

         Receita Federal (Analista Tributário) Fluência em Dados                            50
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 dim(vetor) = c(3,3,3)


No código acima, temos um vetor que contém os números de 1 a 27. A função dim(vetor) <-
c(3, 3, 3) transforma esse vetor em uma matriz tridimensional com três camadas (ou páginas),
onde cada camada tem 3 linhas e 3 colunas. A matriz gerada seria algo como:

Camada 1:


         [,1] [,2] [,3]
 [1,]      1    4    7
 [2,]      2    5    8
 [3,]      3    6    9


Camada 2:


         [,1] [,2] [,3]
 [1,]     10   13   16
 [2,]     11   14   17
 [3,]     12   15   18


Camada 3:

         [,1] [,2] [,3]
 [1,]     19   22   25
 [2,]     20   23   26
 [3,]     21   24   27


Vamos tentar fazer uma representação gráfica:

Note que temos três matrizes de três linhas por três colunas:

Quando o número de elementos no vetor não é suficiente para preencher todas as posições de
uma matriz multidimensional, o R utiliza o conceito de reciclagem (que já vimos anteriormente).


         Receita Federal (Analista Tributário) Fluência em Dados                            51
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Isso significa que os elementos do vetor original são repetidos até que todas as posições sejam
preenchidas. Vejamos um exemplo:


 array(1:3, dim = c(2, 4, 3))


O vetor 1:3 será reciclado para preencher uma matriz tridimensional com 2 linhas, 4 colunas e 3
camadas. Os dados do vetor 1:3 são repetidos para preencher todo o array, uma vez que o
número total de elementos no array (2 × 4 × 3 = 24 elementos) é maior do que o tamanho do
vetor (apenas 3 elementos). O vetor será repetido até preencher todos os 24 elementos
necessários. O resultado seria algo como:


 # Camada 1:

      [,1] [,2] [,3] [,4]
 [1,]    1    3    2    1
 [2,]    2    1    3    2

 # Camada 2:

        [,1] [,2] [,3] [,4]
 [1,]      3    2    1    3
 [2,]      1    3    2    1

 # Camada 3

        [,1] [,2] [,3] [,4]
 [1,]      2    1    3    2
 [2,]      3    2    1    3

 Data Frames
                                                                                    INCIDÊNCIA EM PROVA: ALTA


Os data frames são uma das estruturas de dados mais utilizadas no R, e eles permitem armazenar
dados de maneira tabular (tabela), com colunas de diferentes tipos de dados (numéricos,
textuais, lógicos, entre outros). Essa característica os diferencia das matrizes, que devem conter
elementos homogêneos.

Função data.frame( )

Para criar um data frame no R, nós podemos utilizar a função data.frame(). A sintaxe básica
dessa função é:


 data.frame(coluna1 = vetor1, coluna2 = vetor2, ...)

         Receita Federal (Analista Tributário) Fluência em Dados                                          52
         www.estrategiaconcursos.com.br                                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Vejamos um exemplo de criação de um data frame contendo algumas informações. Primeiro
vamos criar três vetores:


 nomes <- c("Renato", "Bruno", "Diego", "Adriana", "Nelma")
 naturalidades <- c("Rio de Janeiro", "Minas Gerais", "Distrito Federal", "São Paulo",
 "Goiás")
 idades <- c(46, 33, 29, 40, 32)


Agora vamos efetivamente criar o data frame a partir dos três vetores:

 tabela <- data.frame(nomes, naturalidades, idades)


Por vim, vamos visualizar o data frame no Console por meio do comando:


 View(tabela)

Dito isso, qual é a diferença entre Data Frames e Matrizes? Matrizes devem conter dados
homogêneos, ou seja, todos os elementos precisam ser do mesmo tipo (numéricos, textuais,
entre outros). Já Data Frames podem conter colunas com diferentes tipos de dados. Por
exemplo: algumas colunas podem conter números (idades), enquanto outras podem conter
textos (nomes, naturalidade). Em suma:

       ESTRUTURA                 TIPOS DE DADOS                    EXEMPLO
          MATRIZ                   Homogêneos                      Todos os dados são numéricos
      DATA FRAME                   Heterogêneos                    Colunas com textos e números


Os elementos de um data frame podem ser referenciados de maneira semelhante às matrizes,
utilizando a notação [linha, coluna]. Outra forma comum de referenciar as colunas é utilizando o
operador $ (cifrão) com a sintaxe tabela$coluna. Vejamos um exemplo de como acessar os
dados da primeira linha (Renato, Rio de Janeiro, 46):

         Receita Federal (Analista Tributário) Fluência em Dados                                  53
         www.estrategiaconcursos.com.br                                                           116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 tabela[1, ]


Se executarmos esse código, o resultado será:

 1 Renato          Rio de Janeiro            46


E para acessar a primeira coluna (nomes):


 tabela[, 1]


Se executarmos esse código, o resultado será:


 [1] "Renato"       "Bruno"       "Diego"       "Adriana"          "Nelma"


E para acessar diretamente a coluna "Idades" utilizando o cifrão:

 tabela$idades


Se executarmos esse código, o resultado será:


 [1] 46 33 29 40 32


Existem diversas funções para manipulação de data frames. Vejamos as principais:

    FUNÇÃO                                                  DESCRIÇÃO
      View( )    Abre uma interface visual para visualizar os dados do data frame.
       edit( )   Abre um editor para que os dados do data frame possam ser alterados diretamente.
        str( )   Exibe a estrutura do data frame, incluindo as colunas e os tipos de dados.
  summary( )     Fornece um resumo estatístico das colunas numéricas do data frame.


Nós vimos que os data frames são compostos por vetores, em que cada vetor representa uma
coluna da tabela. Podemos acessar um vetor específico de um data frame usando o operador $
(cifrão). Esse operador nos permite acessar colunas de forma direta, sem a necessidade de
especificar índices. Ainda considerando o data frame apresentado no início desse tópico, vamos
ver a sintaxe básica utilizando esse operador:


 nome_tabela$nome_coluna


Para obter os valores da coluna Idades, podemos fazer:

         Receita Federal (Analista Tributário) Fluência em Dados                                    54
         www.estrategiaconcursos.com.br                                                             116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 tabela$idades


Se executarmos esse código, o resultado será:

 [1] 46 33 29 40 32


Podemos aplicar condições lógicas para filtrar os dados de um data frame. Por exemplo, para
obter todas as idades maiores que 30, podemos usar a seguinte expressão:

 tabela$idades > 30


Se executarmos esse código, o resultado será:


 [1]    TRUE    TRUE FALSE       TRUE    TRUE


Note que foi retornado um vetor lógico indicando quais valores da coluna idades são maiores
que 30. Com essa informação, nós podemos filtrar diretamente os valores de idades ou outras
colunas, combinando a lógica com a estrutura de índices. Vejamos a seguir um exemplo de
filtragem de idades maiores que 30:


 tabela$idades[tabela$idades > 30]


Se executarmos esse código, o resultado será:

 [1] 46 33 40 32


Se quisermos saber quais são os nomes das pessoas que têm mais de 30 anos, basta combinar
os índices lógicos da seguinte forma:

 tabela$nomes[tabela$idades > 30]


Se executarmos esse código, o resultado será:


  [1] "Renato" "Bruno" "Adriana" "Nelma"

         Receita Federal (Analista Tributário) Fluência em Dados                        55
         www.estrategiaconcursos.com.br                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Função order( )

A função order() é utilizada para ordenar os elementos de um vetor em ordem crescente ou
decrescente. Quando aplicada a um data frame, ela permite reordenar as linhas com base em
uma coluna específica. Para ordenar o data frame tabela pela coluna nomes, podemos usar o
seguinte código:


 tabela <- tabela[order(tabela$nomes), ]


Aa função order() retorna um vetor com as posições dos nomes em ordem alfabética, e usamos
esse vetor para reordenar as linhas da tabela. O data frame resultante terá as linhas organizadas
conforme a ordem dos nomes, conforme apresenta a imagem seguinte:

Se quisermos realizar a ordenação em ordem decrescente, basta adicionar o argumento
decreasing = TRUE:

 tabela <- tabela[order(tabela$Nomes, decreasing = TRUE), ]

         Receita Federal (Analista Tributário) Fluência em Dados                              56
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Função aggregate( )

A função aggregate() é utilizada para aplicar funções estatísticas de agregação a grupos de
dados em um data frame ou matriz. Ela permite dividir os dados em subconjuntos com base em
uma ou mais variáveis (fatores ou colunas categóricas) e, em seguida, aplicar funções agregadas
como soma, média, mediana, entre outras, a cada grupo. Sua sintaxe básica é:


 aggregate(x, by, FUN...)


Sendo que x é o objeto a ser agregado, geralmente uma coluna numérica de um data frame ou
matriz; by é uma lista de variáveis que são usadas para dividir os dados em grupos (geralmente
fatores ou colunas categóricas); FUN é a função de agregação que será aplicada a cada
subconjunto. Por exemplo: mean, sum, median, etc.

Suponha que você tenha um data frame df com duas colunas, uma com a categoria de um item
e outra com o preço:

 df <- data.frame(
   Categoria = c('A', 'A', 'B', 'B', 'A', 'B'),
   Preco = c(10, 15, 8, 12, 9, 10)
 )


Se você quiser calcular a média do preço por categoria, pode usar a função aggregate() da
seguinte forma:

 aggregate (Preco ~ Categoria, data = df, FUN = mean)


Ao executar esse comando, o resultado será:


     Categoria      Preco
 1           A      11.33
 2           B      10.00


Note que o aggregate() divide os dados pela coluna "Categoria" e calcula a média dos preços
para cada grupo ("A" e "B").


 Funções Estatísticas
                                                                                    INCIDÊNCIA EM PROVA: ALTA


Vamos explorar as funções estatísticas básicas que podem ser usadas no R. Essas funções são
essenciais para realizar análises estatísticas descritivas e incluem cálculos como soma, média,
mediana, variância, entre outros. Vamos ver também como organizar os dados em uma tabela
(data frame) e como aplicar essas funções às colunas numéricas dessa tabela. O R fornece várias


         Receita Federal (Analista Tributário) Fluência em Dados                                          57
         www.estrategiaconcursos.com.br                                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

funções estatísticas diretamente em sua base, que são amplamente utilizadas em estatísticas
descritivas. Vejamos as principais funções estatísticas:

    FUNÇÃO                                                   DESCRIÇÃO
      sum( )     Calcula a soma dos elementos.
     mean( )     Calcula a média aritmética simples.
    median( )    Calcula a mediana dos elementos.
      min( )     Retorna o valor mínimo.
      max( )     Retorna o valor máximo.
       var( )    Calcula a variância.
        sd( )    Calcula o desvio padrão.


Observação: o cálculo da moda (valor que mais aparece em um conjunto de dados) não está
presente na base do R, mas é possível calculá-la com pacotes de terceiros (Ex: ModEst).

Para demonstrar o uso dessas funções estatísticas, vamos criar um data frame com dados de
exemplo. A tabela terá três colunas: nomes, naturalidades e idades. Para isso, usaremos a função
data.frame(), que permite agrupar vetores em uma estrutura tabular. Começamos criando três
vetores que representam os nomes, naturalidades e idades de um grupo de pessoas:


 nomes <- c("Renato", "Bruno", "Diego", "Adriana", "Nelma")
 naturalidades <- c("RJ", "MG", "DF", "SP", "GO")
 idades <- c(46, 33, 29, 40, 32)


Agora combinamos esses vetores em uma tabela utilizando a função data.frame():

 tabela <- data.frame(nomes, naturalidades, idades)


Para visualizarmos a tabela criada, basta utilizar a função View():


 View(tabela)


Se executarmos esse código, o resultado será o apresentado na imagem seguinte:

         Receita Federal (Analista Tributário) Fluência em Dados                             58
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Com a tabela criada, podemos aplicar as funções estatísticas à coluna Idades. Lembre-se de que,
para acessar uma coluna específica de um data frame, usamos a notação com o operador $.


Função sum( )

A função sum() é utilizada para calcular a soma de todos os valores de um vetor, lista ou coluna
de dados numéricos. Ela pode ser aplicada a vetores numéricos, matrizes, ou até mesmo a
variáveis dentro de um data frame. Para calcular a soma das idades, poderíamos fazer:


 print(soma_idades <- sum(tabela$idades))


Se executarmos esse código, o resultado será:

 [1] 180 # 46 + 33 + 29 + 40 + 32


Função mean( )

A função mean() é usada para calcular a média aritmética de um conjunto de valores numéricos.
Ela é amplamente utilizada em análises estatísticas e pode ser aplicada a vetores, listas, colunas
de data frames ou matrizes. Para calcular a média das idades, poderíamos fazer:

 print(media_idades <- mean(tabela$idades))


Se executarmos esse código, o resultado será:


         Receita Federal (Analista Tributário) Fluência em Dados                               59
         www.estrategiaconcursos.com.br                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 [1] 36 # (46 + 33 + 29 + 40 + 32)/5

Função median( )

A função median() é usada para calcular a mediana de um conjunto de valores numéricos. A
mediana é o valor que separa a metade superior da metade inferior de um conjunto de dados
ordenado. Se o número de elementos for ímpar, a mediana é o valor central; se for par, a mediana
é a média dos dois valores centrais. Para calcular a mediana das idades, poderíamos fazer:


 print(mediana_idades <- median(tabela$idades))


Se executarmos esse código, o resultado será:

 [1] 33 # 29 + 32 + 33 + 40 + 46

Função min( )

A função min() é usada para encontrar o menor valor dentro de um vetor ou conjunto de dados
numéricos. Ela retorna o menor elemento presente no objeto fornecido. Para calcular o valor
mínimo das idades, poderíamos fazer:


 print(min_idades <- min(tabela$idades))


Se executarmos esse código, o resultado será:


 [1] 29 # (46 33 29 40 32)


Função max( )

A função max() é usada para encontrar o maior valor dentro de um vetor ou conjunto de dados
numéricos. Ela retorna o maior elemento presente no objeto fornecido. Para calcular o valor
máximo das idades, poderíamos fazer:


 print(max_idades <- max(tabela$idades))


Se executarmos esse código, o resultado será:

         Receita Federal (Analista Tributário) Fluência em Dados                             60
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 [1] 46 # (46 33 29 40 32)


Função var( )

A função var() é usada para calcular a variância amostral de um conjunto de dados numéricos.
A variância é uma medida estatística que quantifica a dispersão dos valores em torno da média.
Ela calcula o grau de variação de um conjunto de dados, ou seja, o quanto os valores se desviam
da média. Podemos dizer que a variância é calculada por meio da média aritmética dos
quadrados dos desvios de cada valor em relação à média. A sua sintaxe básica é:

 var(x, y = NULL, na.rm = FALSE)


Sendo que x é um vetor numérico ou um conjunto de dados cujos valores você deseja calcular a
variância; y (opcional) é um segundo vetor numérico – se for fornecido, var(x,y) calculará a
covariância entre x e y; e na.rm é um argumento lógico (por padrão, FALSE) – se for TRUE,
remove valores ausentes (NA) antes de calcular a variância. Vamos calcular a variância das idades
na nossa tabela:

 print(variancia_idades <- var(tabela$idades))


Se executarmos esse código, o resultado será:


 [1] 47.5


Esse cálculo é feito da seguinte maneira:

 VAMOSTRAL = [(x1 - Média)² + (x2 - Média)² + (x3 - Média)² ... (xN - Média)² ] / N-1


Sendo que xi representam os valores do conjunto de dados (no caso, é: 46, 33, 29, 40, 32); Média
representa a média aritmética dos valores do conjunto de dados (no caso, é 36); N representa a
quantidade de valores no conjunto de dados (no caso, é 5). Vejamos o cálculo a seguir:


 = [(46 – 36)² + (33-36)² + (29-36)² + (40-36)² + (32-36)²] / 5-1
 = [(10)² + (-3)² + (-7)² + (4)² + (-4)²] / 4
 = [100 + 9 + 49 + 16 + 16] / 4
 = [190] / 4
 = 47,5


A variância amostral é utilizada quando se trabalha com uma amostra, ou seja, uma parte
representativa da população. Nesse caso, o denominador é ajustado para 𝑛−1, para corrigir o
viés da amostra. No entanto, existe também a variância populacional, que é utilizada quando se

         Receita Federal (Analista Tributário) Fluência em Dados                              61
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

conhece todos os elementos da população. Nesse caso, o cálculo da variância é realizado
dividindo a soma dos quadrados dos desvios pela quantidade total de elementos da população.

A variância populacional é utilizada quando se conhece todos os dados de uma população. Na
estatística, normalmente, utiliza-se a variância amostral. É bastante raro ter dados de uma
população – em geral, temos apenas uma amostra (suficiente para fazer inferências com algum
grau de confiança). Por essa razão, o padrão é a variância amostral em vez da variância
populacional.

Função sd( )

A função sd() (standard deviation) é a raiz quadrada da variância e retorna a dispersão para a
mesma unidade dos dados originais, tornando-o mais interpretável. Ele fornece uma visão
prática da dispersão dos dados. Quando o desvio padrão é menor, os dados estão mais
próximos da média. Se todos os elementos tivessem o mesmo valor, o desvio padrão seria zero,
indicando nenhuma dispersão. Vamos aplicar ao nosso exemplo:


 print(desvio_padrao <- sd(idades))


Se executarmos esse código, o resultado será:

 [1] 6.892024


No exemplo, o desvio padrão (raiz quadrada da variância) de 6,89 indica que as idades variam
em torno de 6,89 anos em relação à média, que foi de 36 anos.


 Principais Gráficos
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Os gráficos são essenciais na estatística, pois permitem transmitir informações de forma clara e
intuitiva. Eles facilitam a compreensão dos dados, tornando o fenômeno estudado mais acessível
ao público. Nesse tópico, abordaremos a criação de gráficos básicos usando a linguagem R,
focando nas funções disponíveis na instalação padrão do R.

Um gráfico estatístico é uma forma de representação visual de dados cujo objetivo é
proporcionar ao investigador ou ao público uma impressão rápida e clara sobre o fenômeno
estudado. Os gráficos geralmente são mais eficazes do que tabelas ou séries numéricas para
transmitir insights, pois facilitam a visualização de padrões, tendências e variações nos dados.

A instalação padrão do R vem com diversas funções que permitem a criação de gráficos simples
e úteis. Esses gráficos estão diretamente acessíveis, sem a necessidade de pacotes adicionais
(por exemplo, por meio do Pacote ggplot2). A tabela abaixo apresenta os principais tipos de
gráficos disponíveis na base do R:

         Receita Federal (Analista Tributário) Fluência em Dados                                         62
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                       TIPOS DE GRÁFICOS DA BASE DO R
           barplot                      boxplot                coplot                              curve
           dotplot                        hist               mosaicplot                            pairs
             pie                          plot                qqnorm                               stem
          stripchat


Além dos gráficos disponíveis na base do R, o pacote ggplot2 oferece uma gama muito mais
ampla de opções de visualização. Ele é altamente personalizável e é amplamente utilizado para
gráficos mais elaborados. Os gráficos do pacote ggplot2 têm nomes que geralmente começam
com "geom_", o que ajuda a diferenciar os gráficos da base do R dos gráficos do pacote. Vejamos
alguns exemplos:

                                      GRÁFICOS DA PACOTE DO GGPLOT2
    geom_área ou geom_ribbon                geom_bar ou geom_col                         geom_boxplot
         geom_density                           geom_dotplot                            geom_histogram
          geom_point                       geom_qq ou geom_qqline                          geom_title
          geom_curve                             geom_line                                geom_violin


Função barplot( )

A função barplot() é usada para criar gráficos de barras. Esses gráficos são úteis para visualizar
a distribuição de variáveis categóricas ou comparações entre diferentes categorias. A função
permite que você crie gráficos de barras verticais ou horizontais e oferece uma ampla gama de
opções de personalização, como cores, rótulos, títulos, e muito mais. Vejamos a sua sintaxe
básica dessa função:


 barplot(height, names.arg = NULL, col = NULL, main = NULL, horiz = FALSE, ...)


    ARGUMENTOS                                                 DESCRIÇÃO
                       Vetor ou matriz que contém os valores das alturas das barras (frequências/contagens). Se
             height
                       for matriz, cada coluna da matriz será representada por um conjunto de barras no gráfico.
                       Um vetor que especifica os rótulos das barras.
         names.arg

                       A cor ou as cores das barras. Você pode especificar um vetor de cores se quiser diferentes
                 col
                       cores para cada barra.
                       O título do gráfico.
               main

                       Um valor lógico. Se for TRUE, as barras serão horizontais em vez de verticais. O valor padrão
               horiz
                       é FALSE (barras verticais).
                       Outros parâmetros gráficos, como rótulos para os eixos (xlab, ylab), limites dos eixos (ylim,
                  …
                       xlim), etc.


Vejamos um exemplo de gráfico de barras vertical. Para tal, vamos criar um vetor com quatro
valores conforme o código a seguir:


 valores <- c(10, 20, 15, 5)

         Receita Federal (Analista Tributário) Fluência em Dados                                                  63
         www.estrategiaconcursos.com.br                                                                           116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Agora vamos plotar o gráfico de barras verticais:


 barplot(valores, main="Gráfico de Barras", names.arg=c("A","B","C","D"), col = "blue")


A saída desse código é um gráfico barras com quatro barras representando os valores 10, 20, 15
e 5, com os rótulos "A", "B", "C" e "D" abaixo das barras, e as barras preenchidas na cor azul.

Agora vamos plotar o gráfico de barras horizontais. Para tal, faremos horiz = TRUE:


 barplot(valores, main = "Gráfico de Barras Horizontal", names.arg = c("A", "B", "C",
 "D"), col = "green", horiz = TRUE)


A saída desse código é um gráfico de barras em que as barras estão dispostas horizontalmente
em vez de verticalmente, com as barras preenchidas na cor verde.

Vamos plotar o gráfico de barras empilhadas/agrupadas. Para tal, vamos criar uma matriz com
seis valores conforme o código a seguir:


 valores <- matrix(c(10, 15, 20, 5, 7, 12), nrow = 2)


Agora vamos plotar o gráfico de barras verticais (para tal, vamos utilizar o argumento height):


 barplot(valores, main = "Gráfico de Barras Empilhadas", col = c("blue", "red"),
 names.arg = c("Grupo 1", "Grupo 2", "Grupo 3"))

         Receita Federal (Analista Tributário) Fluência em Dados                              64
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

A saída desse código é um gráfico com duas barras para cada grupo, com as barras sendo
empilhadas uma sobre a outra, usando as cores "blue" e "red" para diferenciar os componentes.

Função pie( )

A função pie() é utilizada para criar gráficos de setores (também chamada de gráfico de pizza),
uma maneira visual de representar proporções de um conjunto de dados categóricos em forma
de um círculo, onde cada fatia do gráfico representa uma categoria e o tamanho de cada fatia é
proporcional ao valor da categoria. Vejamos a sua sintaxe básica dessa função:


 pie(x, labels = names(x), col = NULL, main = NULL, ...)


    ARGUMENTOS                                                  DESCRIÇÃO
                         Um vetor numérico contendo os valores que serão representados como proporções no
                   x
                         gráfico. Esses valores serão convertidos em frações do total.
                         Um vetor que contém os rótulos das fatias do gráfico. Por padrão, os nomes de x são usados
              labels
                         como rótulos.
                         Um vetor de cores que define a cor de cada fatia.
                 col

                         O título do gráfico.
               main

                         Outros parâmetros gráficos opcionais para personalização (como margens, tamanho do
                   ...
                         título, etc.).


Vejamos um exemplo de gráfico de setores. Para tal, vamos criar um vetor com quatro valores
conforme o código a seguir:

 valores <- c(40, 30, 20, 10)


Agora vamos criar outro vetor com os rótulos para as categorias:


 categorias <- c("A", "B", "C", "D")


Por fim, vamos plotar o gráfico de setores:

         Receita Federal (Analista Tributário) Fluência em Dados                                                 65
         www.estrategiaconcursos.com.br                                                                          116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 pie(valores, labels = categorias, main = "Gráfico de Pizza")


A saída é um gráfico de pizza com quatro fatias representando as proporções 40, 30, 20 e 10,
com os rótulos "A", "B", "C" e "D". Cada fatia terá um tamanho proporcional ao valor associado.

Nós podemos definir as cores das fatias do gráfico utilizando o argumento col:


 pie(valores, labels = categorias, col = c("red", "blue", "green", "yellow"), main =
 "Gráfico de Pizza Colorido")

A saída é um gráfico de pizza em que as fatias são coloridas com as cores definidas: vermelho,
azul, verde e amarelo.

Função plot( )

A função plot() é uma das funções gráficas mais poderosas e versáteis, usada para criar uma
ampla variedade de gráficos. Ela pode ser utilizada para gerar gráficos de dispersão (scatter
plots), gráficos de linhas, gráficos de pontos, gráficos de barras e muitos outros tipos de
visualização de dados. A função plot() também permite uma grande quantidade de
personalização gráfica, como ajustar títulos, rótulos, cores, tipos de pontos e eixos.

 plot(x, y = NULL, type = "p", main = NULL, xlab = NULL, ylab = NULL, col = NULL, pch
 = NULL, ...)


    ARGUMENTOS                                                DESCRIÇÃO
                       Um vetor numérico ou objeto contendo os dados a serem plotados no eixo X. Se y não for
                   x
                       especificado, x será plotado sozinho (em gráficos de séries temporais, por exemplo).

         Receita Federal (Analista Tributário) Fluência em Dados                                           66
         www.estrategiaconcursos.com.br                                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                       (Opcional) Um vetor numérico contendo os dados para o eixo Y. Quando fornecido, o
                   y   gráfico será uma relação entre x e y.

                       Define o tipo de gráfico: “p”: Gráfico de Dispersão (Padrão); “l”: Gráfico de Linhas; “b”:
               type:   Gráfico de Pontos e Linhas; “o”: Gráfico com Pontos sobre Linhas; “h”: Histograma; “s”
                       Gráfico de Degraus.
                       O título principal do gráfico.
               main

                       O rótulo do eixo X.
                xlab

                       O rótulo do eixo Y.
                ylab

                       Cor dos pontos ou das linhas.
                 col

                       Símbolos de plotagem (pontos, círculos, triângulos, etc.).
                 pch

                       Outros parâmetros gráficos que podem ser usados para personalização.
                  …

Gráfico de Dispersão

Se fornecermos os vetores x e y, a função plot() cria um Gráfico de Dispersão, por padrão, com
pontos representando a relação entre os valores de x e y. Vamos declarar dois vetores:


 x <- c(1, 2, 3, 4, 5)
 y <- c(2, 4, 3, 6, 7)


Agora vamos plotar o Gráfico de Dispersão (Scatter Plot):


 plot(x, y, main = "Gráfico de Dispersão", xlab = "Eixo X", ylab = "Eixo Y", col =
 "blue", pch = 16)

         Receita Federal (Analista Tributário) Fluência em Dados                                               67
         www.estrategiaconcursos.com.br                                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

A saída desse código exibe um gráfico de dispersões, onde os pontos são desenhados nas
coordenadas (x, y), com o título "Gráfico de Dispersão", rótulos dos eixos, pontos azuis (col =
"blue") e o símbolo pch = 16 (círculo preenchido).

Gráfico de Linhas

Nós também podemos criar um gráfico de linhas. Para tal, podemos alterar o parâmetro type
para "l":

 plot(x, y, type = "l", main = "Gráfico de Linhas", col = "red")

A saída desse código exibe um gráfico com uma linha ligando os pontos (x, y), com a linha sendo
desenhada em vermelho (col = "red").


Gráfico de Pontos e Linhas

Nós também podemos criar um gráfico que mostre tanto pontos quanto linhas entre eles, usando
o parâmetro type = "b" (both):


 plot(x, y, type = "b", main = "Gráfico de Pontos e Linhas", col = "green", pch = 17)

A saída desse código exibe um gráfico terá tanto os pontos quanto as linhas conectando-os, com
os pontos sendo triângulos (pch = 17) e a cor verde (col = "green").

Gráfico de Série Temporal

Se nós fornecermos apenas um vetor x, o R o plotará ao longo do eixo Y e usará os índices
(posição dos elementos) no eixo X. Isso é útil para séries temporais.

         Receita Federal (Analista Tributário) Fluência em Dados                            68
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 valores <- c(5, 6, 7, 8, 10, 12)
 plot(valores, type = "o", main = "Gráfico de Série Temporal", col = "blue")

A saída desse código exibe um gráfico onde os valores são plotados ao longo do tempo (índices
1, 2, 3, etc.), conectados por linhas e pontos.

Função boxplot( )

A função boxplot()é usada para criar gráficos de caixa (boxplots), que são uma ferramenta visual
útil para descrever a distribuição de dados numéricos. O Gráfico de Caixas também é uma
disposição gráfica comparativa. As medidas de estatísticas descritivas como mínimo, primeiro
quartil, mediana (ou segundo quartil), terceiro quartil e máximo formam o boxplot.


                         Boxplot
  150
  100
   50
    0
  -50
 -100
          Categoria 1       Categoria 2       Categoria 3


Esse gráfico é utilizado para representar a variação de dados observados de uma variável
numérica por meio de quartis. O boxplot tem uma reta que estende–se verticalmente ou
horizontalmente a partir da caixa, indicando a variabilidade fora do quartil superior e do quartil
inferior. Os valores atípicos ou outliers (valores discrepantes) podem ser plotados como pontos
individuais.

         Receita Federal (Analista Tributário) Fluência em Dados                               69
         www.estrategiaconcursos.com.br                                                        116

                                      


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

A diferença entre o valor máximo (considerando outliers) e o valor mínimo (considerando
outliers) é chamada de Amplitude Total. O boxplot pode ter uma reta (também chamado de
whisker ou fio de bigode) que se estende verticalmente ou horizontalmente a partir da caixa,
indicando a variabilidade fora do quartil superior e do quartil inferior. E os valores atípicos ou
outliers (valores discrepantes) podem ser plotados como pontos individuais.

Observem a imagem anterior: 25% dos valores são menores que -7 (Q1); 25% dos valores são
maiores que -7 (Q1) e menores que -2 (Q2); 25% dos valores são maiores que -2 (Q2) e menores
que 1 (Q3); e 25% dos valores são maiores que 1 (Q3). Bacana! Vamos ver a seguir a sintaxe
básica dessa função:

 boxplot(x, data = NULL, main = NULL, xlab = NULL, ylab = NULL, col = NULL, ...)


    ARGUMENTOS                                             DESCRIÇÃO
                       Um vetor ou uma fórmula. Pode ser um conjunto de dados numéricos ou uma fórmula que
                   x
                       descreve a relação entre variáveis.
                       Um data frame opcional que contém os dados para o gráfico.
                data

                       O título principal do gráfico.
               main

                       O rótulo para o eixo X.
                xlab

                       O rótulo para o eixo Y.
                ylab

                       Cores para as caixas no gráfico.
                 col

                       Outros parâmetros gráficos para personalização.
                  …


Vamos criar um boxplot simples. Para tal, vamos declarar um vetor inicial:


 dados <- c(5, 7, 7, 8, 9, 10, 12, 12, 15, 18, 20, 25)


Agora vamos criar efetivamente o gráfico:


 boxplot(dados, main = "Boxplot Simples", ylab = "Valores", col = "lightblue")

         Receita Federal (Analista Tributário) Fluência em Dados                                        70
         www.estrategiaconcursos.com.br                                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

A saída desse código exibe um gráfico de caixa mostrando a distribuição dos dados, com a
mediana, quartis, whiskers e possíveis outliers. Notem que a distribuição dos dados está
concentrada entre os valores 5 e 20. A mediana é 10 e não há outliers (valores fora do padrão)
no conjunto de dados. Agora vamos comprar grupos com boxplot. Para tal, vamos declarar dois
vetores:


 grupo1 <- c(5, 7, 8, 9, 10, 12, 14, 15, 16, 18)
 grupo2 <- c(6, 9, 10, 12, 13, 15, 18, 20, 22, 25)


Agora vamos criar efetivamente o gráfico:


 boxplot(grupo1, grupo2, names = c("Grupo 1", "Grupo 2"), main = "Comparação de Grupos",
 col = c("red", "blue"))

A saída desse código exibe um gráfico com dois boxplots lado a lado, permitindo a comparação
entre as distribuições dos dois grupos. Note que a mediana do Grupo 2 é mais alta que a do
Grupo 1, indicando que o Grupo 2 tem valores centrais maiores. O Grupo 2 tem uma maior
dispersão (intervalo interquartil mais amplo e whiskers mais longos), indicando uma maior
variabilidade dos dados comparado ao Grupo 1. O Grupo 1 parece ter uma distribuição mais
simétrica em comparação ao Grupo 2, que mostra maior variabilidade. Não há outliers!

Outliers são valores que se distanciam significativamente do restante dos dados e podem ter um
grande impacto nos resultados de uma análise estatística. Eles podem surgir devido a erros de
medição, entrada de dados incorreta ou, em alguns casos, representam verdadeiramente uma
observação atípica, mas válida. O tratamento adequado dos outliers depende do contexto e da
natureza dos dados.

Imagine que você está conduzindo uma pesquisa sobre o perfil dos alunos concurseiros e tem
acesso à tabela de idades dos alunos de um curso preparatório. Ao revisar os dados, você se
depara com uma idade registrada como 150 anos. Nesse caso, você pode supor que esse valor
foi inserido de maneira incorreta, pois é biologicamente impossível que uma pessoa tenha essa


         Receita Federal (Analista Tributário) Fluência em Dados                           71
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

idade. Esse seria um exemplo claro de outlier gerado por erro, e você provavelmente descartaria
ou corrigiria essa informação.

No entanto, suponha que você encontre um aluno com 70 anos. Embora seja uma idade atípica
comparada à maioria dos alunos, é plausível que esse aluno seja genuíno e esteja estudando
para alcançar um objetivo pessoal. Nesse cenário, você poderia decidir manter esse dado, já que
ele pode ser uma observação válida, ainda que rara. O que é considerado um outlier em um
contexto pode não ser em outro. Por exemplo:

▪    Concursos Fiscais: pode ser comum encontrar alunos com idades mais avançadas, como 50
     ou 60 anos, pois muitas pessoas buscam essa estabilidade profissional mais tarde em suas
     carreiras.
▪    Concursos Policiais: os candidatos geralmente são mais jovens devido aos limites de idade
     impostos pela profissão. Aqui, um aluno de 55 anos seria considerado um outlier, enquanto
     essa idade seria normal em concursos fiscais.

Função hist( )

A função hist()é usada para criar histogramas, que são gráficos de barras que representam a
distribuição de frequências de um conjunto de dados numéricos. Um histograma divide os dados
em intervalos ou classes (bins) e mostra quantos valores caem em cada intervalo, ajudando a
visualizar a distribuição dos dados, incluindo a densidade e a forma da distribuição, como a
presença de assimetria ou outliers. Vejamos sua sintaxe básica:

    hist(x, breaks = "Sturges", col = NULL, main = NULL, xlab = NULL, ylab = NULL, ...)


      ARGUMENTOS                                              DESCRIÇÃO
                         Um vetor numérico cujos valores serão usados para criar o histograma.
                     x

                         Define o número de intervalos ou classes (bins). Pode ser um valor numérico ou um método
               breaks
                         para calcular automaticamente o número de intervalos.
                         Define a cor das barras do histograma.
                   col

                         O título principal do gráfico.
                 main

                         Rótulos para os eixos X e Y, respectivamente.
          xlab e ylab

                         Outros parâmetros gráficos opcionais.
                    …


Um histograma divide o conjunto de dados em intervalos (intervalos). Cada barra do histograma
mostra o número de observações (ou frequência) que caem dentro de um determinado intervalo.
O eixo X representa os intervalos dos dados, e o eixo Y representa a contagem (ou densidade,
se for ajustado para densidade) das observações. Vamos criar um histograma, mas antes vamos
declarar um conjunto de dados:

          Receita Federal (Analista Tributário) Fluência em Dados                                              72
          www.estrategiaconcursos.com.br                                                                       116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 dados <- c(1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8)


Agora vamos criar o histograma:

 hist(dados, main = "Histograma Simples", xlab = "Valores", col = "lightblue")

Detalhe: o primeiro intervalo é fechado em ambos os lados, o que significa que inclui tanto o
limite esquerdo quanto o limite direito. A partir da segunda classe, as classes são abertas à
esquerda e fechadas à direita, o que significa que incluem o limite direito, mas não o limite
esquerdo. No exemplo, nós temos as classes: 1 a 2; 2 a 3; 3 a 4; 4 a 5; 5 a 6; 6 a 7; e 7 a 8.
Podemos ver os limites representados a seguir:


[1 2 2] ]3 3 3] ]4 4] ]5 5] ]6 6 6] ]7] ]8]
A saída desse código exibirá um barras para cada intervalo de valores, com a altura de cada barra
representando o número de vezes que os valores do conjunto de dados caem naquele intervalo.
O gráfico terá o título "Histograma Simples", o eixo X rotulado como "Valores", e as barras serão
coloridas de azul claro.


 Diretórios e Bases de Dados
                                                                                  INCIDÊNCIA EM PROVA: BAIXA


Na linguagem R, operações com diretórios e bases de dados são fundamentais para a
manipulação, análise e armazenamento de dados. R oferece diversas funções para trabalhar com
diretórios (ou pastas) no sistema de arquivos e para importar, exportar e manipular bases de
dados de diferentes fontes e formatos. No R, o diretório de trabalho é o local em que o R busca
ou salva arquivos. Para saber qual é o diretório de trabalho atual, podemos utilizar a função:


 getwd()


Ao executar essa função (no meu computador pessoal), o resultado será:

 [1] "C:/Users/dieee/Documents"

         Receita Federal (Analista Tributário) Fluência em Dados                                         73
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Se você quiser alterar esse diretório, pode utilizar uma função que indica um novo diretório:


 setwd("C:/Users/dieee/Documents/Estratégia")


Um ponto importante é que, no R, o separador de diretórios é a barra "/", ao contrário do
Windows, que utiliza a contrabarra "\". Logo, sempre que for trabalhar com caminhos no R,
certifique-se de usar a barra para separar as pastas. Agora, vamos criar um exemplo de tabela,
em que armazenamos dados básicos sobre um grupo de pessoas. Primeiramente, criaremos
vetores para os nomes, naturalidades e idades dessas pessoas, utilizando a função c():


 nomes <- c("Renato", "Bruno", "Diego", "Adriana", "Nelma")
 naturalidades <- c("RJ", "MG", "DF", "SP", "GO")
 idades <- c(46, 33, 29, 40, 32)
 desvio <- c(10, -3, -7, 4, -4)
 desvioquadrado <- c(100, 9, 49, 16, 16)


A função data.frame() permite agrupar esses vetores em uma tabela estruturada, onde cada
coluna é um vetor e cada linha corresponde a uma observação. Vejamos:


 tabela <- data.frame(nomes, naturalidades, idades, desvio, desvioquadrado)


Para visualizar a tabela, podemos utilizar o seguinte comando:


 View(tabela)


Vejamos a tabela que foi criada:

         Receita Federal (Analista Tributário) Fluência em Dados                                74
         www.estrategiaconcursos.com.br                                                         116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

Após criar a tabela, é comum que você queira exportá-la para um arquivo, para compartilhar ou
para analisar em outros programas (Ex: MS-Excel). Para tal, utilizamos a função write.csv():

    write.csv(tabela, file = "exemplo_de_aula.csv")

O comando anterior criará um arquivo CSV1 no diretório de trabalho atual, que pode ser aberto
em qualquer editor de texto ou programa de planilhas. É importante lembrar que o formato .csv
padrão utiliza a vírgula como separador de colunas (padrão americano), o que pode gerar

1
 O formato .csv (Comma-Separated Values) é um formato de arquivo de texto simples onde os dados são organizados em linhas
e colunas, separados por vírgulas (ou ponto e vírgula), comumente utilizado para armazenar e intercambiar dados tabulares entre
diferentes sistemas e softwares.

          Receita Federal (Analista Tributário) Fluência em Dados                                                           75
          www.estrategiaconcursos.com.br                                                                                   116

                                        


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

incompatibilidade com programas que esperam ponto e vírgula (como é o padrão no Brasil).
Vejam o resultado do arquivo a seguir:

Se você quiser usar o separador ponto e vírgula, utilize a função write.csv2():

 write.csv2(tabela, file = "exemplo_de_aula_pt_virgula.csv")

É possível também utilizar a função write.table() para exportar dados para arquivos de texto
com diferentes formatos (e com diferentes separadores):

 write.table(tabela, "dados_exportados.txt”)


Além de exportar dados, você também pode importar arquivos .csv com a função read.csv()
ou read.csv2()– a depender do separador utilizado):

 tabela_importada <- read.csv("exemplo_de_aula.csv")


O R lerá o arquivo exemplo_de_aula.csv do diretório de trabalho padrão e criará um objeto
data frame, que pode ser manipulado da mesma forma que as tabelas criadas diretamente no R.

    ARGUMENTOS                                                    DESCRIÇÃO
                       Indica se a primeira linha do arquivo contém os nomes das colunas. TRUE (Padrão) indica
             header
                       que primeira linha contém os nomes das colunas; FALSE indica que não.
                       Define o delimitador entre colunas. O valor padrão é "," (vírgula), mas pode-se usar também
                 sep
                       “;” (ponto-e-vírgula); “\t” (tabulação); “|” (barra vertical); “ ” (espaço); entre outros.


Importante: essa linguagem possui uma vasta coleção de pacotes que estendem suas
funcionalidades. Para manipulação de arquivos .csv de maneira mais eficiente, você pode instalar
e utilizar o pacote tidyverse. Para tal, pode-se utilizar o seguinte comando:

         Receita Federal (Analista Tributário) Fluência em Dados                                                76
         www.estrategiaconcursos.com.br                                                                         116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 install.packages("tidyverse")


Vai demorar um pouquinho para fazer o download do pacote. Depois de instalado, basta
carregá-lo. Para tal, utiliza-se o seguinte comando:


 library(tidyverse)


Agora observem o que acontece se eu digito “write_”. Note que ele abre um conjunto de novas
sugestões: write_csv, write_csv2, write_delim, etc. Ao lado desses nomes, está escrito
{readr}. Isso significa que essas funções não são nativas do R – elas são funções de uma
biblioteca chamada readr do pacote tidyverse, que nós acabamos de fazer o download. A última
sugestão tem um {base}, o que indica que write é uma função nativa da base do R.

Nós podemos utilizar agora a função write_csv() para exportar a tabela para um arquivo:


 write_csv(tabela, "exemplo_de_aula_readr.csv")


Agora vejam um problema: quando estamos trabalhando com diferentes pacotes na linguagem
R, é comum que funções com o mesmo nome estejam presentes em múltiplas bibliotecas ou
pacotes. Para evitar confusões e garantir que estamos utilizando a função correta, uma prática
recomendada é especificar o pacote ao qual a função pertence. Isso é feito utilizando a notação
de dois pontos duplos (::).

         Receita Federal (Analista Tributário) Fluência em Dados                            77
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Por exemplo, ao utilizar a função write_csv do pacote readr, é possível especificar a origem da
função da seguinte forma:


 readr::write_csv()


Ao adicionar o nome do pacote seguido de dois pontos duplos antes da função, garantimos que
a função executada pertence ao pacote correto, mesmo que outras bibliotecas carregadas
contenham funções com o mesmo nome. Isso é útil para evitar erros, especialmente quando
múltiplos pacotes estão carregados simultaneamente e podem causar conflitos de
nomenclatura.

Por exemplo, o R possui o write.csv como parte de sua base de funções. No entanto, a biblioteca
readr, que é um pacote especializado para leitura e escrita de dados, oferece uma função
semelhante chamada write_csv, com vantagens em performance e usabilidade. Ao especificar
readr::write_csv(), fica claro que a função utilizada pertence ao pacote readr, e não ao
pacote base do R.

Dado que existem diversas funções para realizar uma mesma atividade, essa prática de explicitar
a origem da função é considerada uma boa prática para manter o código claro e reduzir a
probabilidade de erros, especialmente em projetos maiores com múltiplos pacotes sendo
utilizados. Vamos considerar o seguinte código que exemplifica a prática de especificar a
biblioteca antes da função:


 readr::write_csv(minha_tabela, "meus_dados.csv")


Nesse caso, utilizamos o write_csv específico do pacote readr para salvar o DataFrame
minha_tabela em um arquivo CSV chamado meus_dados.csv.

Na linguagem R, ao trabalhar com grandes volumes de dados, como tabelas contendo milhares
ou até milhões de registros, é essencial poder visualizar rapidamente se os dados foram
carregados corretamente. A função head() é uma ferramenta prática que permite visualizar as
primeiras linhas de um data frame ou tabela. Isso ajuda a garantir que as colunas e variáveis foram
identificadas corretamente, assim como o separador adequado foi interpretado conforme
esperado.

A função head() exibe, por padrão, as primeiras 6 linhas do data frame, mas esse número pode
ser ajustado de acordo com a necessidade do usuário. A sintaxe é simples:

 head(nome_do_data_frame, n)


Sendo que nome_do_data_frame é o nome do data frame ou tabela que você deseja inspecionar;
e n é o número de linhas que você quer visualizar (opcional). Vejamos um data frame:


 df <- data.frame(


         Receita Federal (Analista Tributário) Fluência em Dados                                78
         www.estrategiaconcursos.com.br                                                         116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

     nome = c("Ana", "Bruno", "Carlos", "Daniel", "Eva", "Fabiana", "Gustavo"),
     idade = c(28, 34, 29, 40, 25, 30, 35)
 )


Para exibir as primeiras seis linhas do data frame, podemos utilizar o código:

 head(df)


Ao executar esse código, o resultado será:


      nome idade
 1     Ana    28
 2   Bruno    34
 3 Carlos     29
 4 Daniel     40
 5     Eva    25
 6 Fabiana    30


Se você quiser exibir um número diferente de linhas, por exemplo, apenas as 3 primeiras linhas,
você pode ajustar o valor de n.


 head(df, n = 3)


Ao executar esse código, o resultado será:


     nome idade
 1    Ana    28
 2 Bruno     34
 3 Carlos    29


Observação: o Prof. Renato da Costa tem uma videoaula sobre como realizar essas operações
na prática. É bem bacana! Não percam...


 Correlação e Regressão
                                                                                  INCIDÊNCIA EM PROVA: BAIXA


Correlação é uma medida que quantifica o grau/força do relacionamento entre duas ou mais
variáveis. Ela indica como uma variável pode afetar outra, sendo que a correlação é geralmente
analisada entre uma variável independente e uma variável dependente. A variável independente,
como o próprio nome sugere, é aquela que não sofre influências de outras variáveis no estudo,
enquanto a variável dependente muda de acordo com as alterações na variável independente.

         Receita Federal (Analista Tributário) Fluência em Dados                                         79
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Por exemplo, em um estudo sobre a influência da temperatura no consumo de sorvetes, a
temperatura é a variável independente, e o consumo de sorvete seria a variável dependente.
Conforme a temperatura aumenta, espera-se que o consumo de sorvete também aumente. No
entanto, em algumas situações, podemos encontrar correlações espúrias, que são associações
que, na verdade, não possuem uma relação causal. Para a vida, guardem sempre a frase:

                          CORRELAÇÃO NÃO É CAUSALIDADE
                                             Um exemplo clássico seria a correlação entre o aumento de
                                             vendas de sorvete e o aumento de ataques de tubarão.

                                             Embora os dados possam mostrar que ambos realmente
                                             aumentam ao mesmo tempo, isso ocorre por conta de um
                                             fator externo (a temperatura) que afeta ambos os
                                             fenômenos de forma independente. O aumento da
                                             temperatura leva ao aumento da quantidade de pessoas na
                                             praia, o que incorre no aumento do ataque de tubarões.

                                             Logo, existe uma correlação, mas não existe uma
                                             causalidade entre o aumento da venda de sorvetes e o
                                             aumento de ataques de tubarão. Vejamos agora os tipos de
                                             correlação da imagem (o valor do coeficiente de correlação
                                             (geralmente por r) varia de -1 a +1):

        TIPOS DE
                                                                   DESCRIÇÃO
    CORRELAÇÃO
    CORRELAÇÃO         Os pontos estão dispersos, mostrando uma relação fraca ou quase inexistente entre as
 POSITIVA FRACA        variáveis.
            (r ≅ 0)
    CORRELAÇÃO
                       Existe uma tendência clara de os pontos subirem em conjunto, indicando que à medida que
  POSITIVA FORTE
                       uma variável aumenta, a outra também aumenta, com uma relação forte, mas não perfeita.
        (0 < r < 1)
    CORRELAÇÃO         Todos os pontos estão alinhados em uma linha reta ascendente, indicando uma correlação
        POSITIVA       perfeita positiva entre as variáveis.
   PERFEITA (r = 1)
    CORRELAÇÃO         Os pontos estão dispersos, mostrando uma relação fraca ou quase inexistente, mas com
       NEGATIVA        uma leve tendência negativa.
     FRACA (r ≅ 0)
    CORRELAÇÃO         Existe uma tendência clara de os pontos descerem juntos, indicando que à medida que
       NEGATIVA        uma variável aumenta, a outra diminui, com uma relação forte, mas não perfeita.
 FORTE (-1 < r < 0)
    CORRELAÇÃO         Todos os pontos estão alinhados em uma linha reta descendente, indicando uma
       NEGATIVA        correlação perfeita negativa entre as variáveis.
  PERFEITA (r = -1)


Para calcular a correlação no R, usamos a função cor(), que retorna o coeficiente de correlação
entre duas variáveis. Sua sintaxe básica é:

         Receita Federal (Analista Tributário) Fluência em Dados                                            80
         www.estrategiaconcursos.com.br                                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 cor(x, y = NULL, method = c("pearson", "kendall", "spearman"))


    ARGUMENTOS                                                DESCRIÇÃO
              x        Um vetor, matriz ou data frame contendo as variáveis.
              y        Opcional. Se especificado, calcula a correlação entre x e y.
         method        Define o método de correlação. Pode ser: Pearson, Kendall ou Spearman.


Enquanto a correlação mede a relação entre variáveis, a regressão é uma técnica que vai além –
fornecendo uma equação matemática que descreve essa relação. A regressão linear, por
exemplo, permite estimarmos o valor de uma variável dependente com base em uma variável
independente. A equação da regressão linear simples é dada por:


                                                   𝑦=𝛽0 + 𝛽1𝑥 + 𝜖


Sendo que: y é a variável dependente; x é a variável independente; β0 é o intercepto (valor de y
quando x = 0); β1 é o coeficiente angular (a inclinação da reta, ou seja, a variação de y a cada
unidade de variação de x); e ε é o termo de erro (diferenças não explicadas pelo modelo). A
linguagem R possui a função lm() que nos permite ajustar modelos de regressão linear. Vejamos
sua sintaxe básica:


 lm(variavel_dependente~variavel_independente, dataset)


Dito isso, vamos agora ver na prática como é a análise de correlação e regressão. Para tal, vamos
utilizar duas variáveis de interesse: temperatura (em ºC) e o consumo de água (em litros).

                  TEMPERATURA (ºC)                                     CONSUMO DE ÁGUA (LITROS)
                        18                                                       80
                        20                                                      100
                        22                                                      110
                        24                                                      125
                        26                                                      150
                        28                                                      180
                        30                                                      220
                        32                                                      250
                        34                                                      300


Na linguagem R, vamos criar dois vetores: temp, que armazena os valores de temperatura, e
consumo, que armazena o consumo de água correspondente a cada temperatura.


 temp <- seq(18, 34, 2)
 consumo <- c(80, 100, 110, 125, 150, 180, 220, 250, 300)


Agora vamos colocar os dados de temperatura e consumo em um data frame tabela:

         Receita Federal (Analista Tributário) Fluência em Dados                                  81
         www.estrategiaconcursos.com.br                                                           116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

    tabela <- data.frame(consumo, temp)


Por fim, com os vetores estão definidos, podemos criar um gráfico de dispersão para visualizar a
relação entre temperatura e consumo de água. No gráfico de dispersão, os valores de
temperatura são plotados no eixo X, e os valores de consumo de água no eixo Y. Vejamos:

    plot(temp, consumo)

Ao observar o gráfico, notamos que os pontos tendem a subir conforme a temperatura aumenta,
o que indica uma correlação positiva entre as variáveis. Isso significa que, à medida que a
temperatura sobe, o consumo de água também aumenta. Visualmente, a tendência dos pontos
sugere a existência de uma relação linear, o que nos permite considerar o uso da regressão linear
para descrever essa relação matematicamente.

Para descobrir a correlação entre as variáveis temperatura (independente) e consumo de água
(dependente), podemos utilizar a função cor(). Ela calculará o coeficiente de correlação entre
essas duas variáveis, fornecendo uma medida da força e direção dessa relação. Vejamos o
exemplo a seguir:


    cor(temp, consumo)


Ao executar esse comando, o resultado será:

    [1] 0.977859


Esse valor indica uma correlação positiva muito forte entre temperatura e consumo de água. Isso
significa que, à medida que a temperatura aumenta, o consumo de água também tende a
aumentar de forma quase linear. De forma geral, é possível interpretar os resultados de
correlação de acordo com o Coeficiente de Pearson da seguinte forma:

▪    Correlação entre 0,6 e 1: indica uma correlação significativa, suficiente para justificar o uso
     de regressão.
▪    Correlação entre 0,3 e 0,6: a correlação é fraca, e o modelo de regressão pode não ser tão
     eficiente.


          Receita Federal (Analista Tributário) Fluência em Dados                                82
          www.estrategiaconcursos.com.br                                                         116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

▪    Correlação entre 0 e 0,3: a correlação é inconclusiva, o que sugere que as variáveis não
     estão suficientemente relacionadas.

Já a regressão linear é uma técnica estatística utilizada para estimar o valor de uma variável
dependente com base em uma variável independente. Vejamos alguns conceitos básicos:

▪    Variável independente (x): também chamada de variável preditora, é aquela que serve de
     base para a previsão. No exemplo, a temperatura é a variável independente.
▪    Variável dependente (y): também conhecida como variável prevista ou explicada, é o valor
     que desejamos prever. Neste caso, estamos prevendo o consumo de água.

O objetivo da regressão linear é encontrar uma equação ou modelo matemático que explique o
comportamento da variável dependente em função da variável independente. Uma vez obtida a
equação, podemos fornecer novos valores da variável independente (como uma nova
temperatura) para prever o consumo de água. Logo, vamos utilizar a função lm() conforme
apresenta o código a seguir:


    modelo <- lm(consumo~temp, tabela)


Após isso, nós podemos utilizar a função predict() para realizar predições de novos valores da
variável dependente com base em valores fornecidos da variável independente. Como assim,
Diego? Isso significa que nós podemos utilizar essa função para prever novos valores de
consumo de água dada uma determinada temperatura. Por exemplo, para prever o consumo de
água para uma temperatura de 19ºC, podemos utilizar o seguinte código:


    predict(modelo, data.frame(temp = 19))


Ao executar esse código, o resultado será:

    74.70833


No exemplo, com uma temperatura de 19 graus, o modelo prevê um consumo de 74,70 litros de
água, o que pode não ser o mais adequado devido à extrapolação dos dados originais. Já para
temperaturas mais altas, como 40 graus, as predições são mais próximas da realidade do
conjunto de dados. Vejam só:


    predict(modelo, data.frame(temp = 40))


Ao executar esse código, o resultado será:


    355.5833

          Receita Federal (Analista Tributário) Fluência em Dados                          83
          www.estrategiaconcursos.com.br                                                   116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
     Aula 02 - Profs. Diego Carvalho e Renato da Costa

A capacidade de prever valores futuros a partir de dados passados torna a regressão uma
ferramenta essencial na análise de dados, auxiliando em decisões informadas e planejamentos.


 Scripts de Programação
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Na programação com R, podemos trabalhar de forma interativa (digitando comandos linha por
linha no console) ou de forma programática, criando scripts que automatizam a execução de
várias linhas de código de forma sequencial. Nós passamos um bom tempo vendo o modo
interativo via console e agora estudar o modo programático via scripts. A ideia aqui é construir
scripts para automatizar tarefas, seguindo uma lógica de programação.

Um algoritmo é uma sequência de instruções lógicas e ordenadas para a resolução de um
problema. Os algoritmos são normalmente escritos em linguagem natural (português, por
exemplo) antes de serem codificados em uma linguagem de programação. Quando escrevemos
um algoritmo em R, estamos criando um programa. Podemos dizer, portanto, que um algoritmo
é uma norma executável para alcançar um efeito desejado.

Existem diversas linguagens de programação como Pascal, COBOL, Java, Python, C, e, no nosso
caso, o R. Cada linguagem tem sua sintaxe, mas a lógica de programação é comum a todas:
entrada, processamento e saída. Todo programa segue a sequência: Entrada (recebimento de
dados); Processamento (realização de operações com os dados); e Saída (apresentação dos
resultados). Vamos começar a programar?

No RStudio, vá em File > New File > R Script. A partir daí, estamos prontos para digitar
comandos, salvá-los e executá-los.

Estruturas Condicionais

Estruturas condicionais são mecanismos que permitem que um programa tome decisões com
base em condições específicas. Elas avaliam se uma determinada expressão lógica é verdadeira
ou falsa e, dependendo do resultado, executam diferentes blocos de código. Vejamos a seguir
as principais estruturas condicionais do R:

if

A estrutura condicional if permite ao programa tomar decisões com base em uma condição. Se
a condição for verdadeira, um bloco de comandos é executado. Sua sintaxe básica é:


 if (condição) {
     # Código a ser executado se a condição for TRUE
 }


Vejamos um exemplo para melhorar a compreensão:

           Receita Federal (Analista Tributário) Fluência em Dados                                       84
           www.estrategiaconcursos.com.br                                                                116

                                        


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 # Entrada

 nota1 <- 5
 nota2 <- 8

 # Processamento

 media <- (nota1+nota2)/2

 # Saída

 if (media >= 6) {
     print("Aluno aprovado")
 }

 print(media)


O script acima busca calcular a média de duas notas e exibir o resultado. Ao executá-lo (basta
clicar em Source), o resultado será:

Se a média fosse maior ou igual a 6, a mensagem "Aluno aprovado" seria exibida – assim como
a sua média. Caso contrário, nada será exibido. Note que foi exibido: “Aluno aprovado” e “6.5”.

if...else

Se precisarmos tratar tanto a condição verdadeira quanto a falsa, utilizamos a estrutura
if...else. Sua sintaxe básica é:


 if (condição) {


         Receita Federal (Analista Tributário) Fluência em Dados                            85
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

     # Código a ser executado se a condição for TRUE
 }
 else {
     # Código a ser executado se a condição for FALSE
 }


Vejamos um exemplo para melhorar a compreensão:


 # Entrada

 nota1 <- 0
 nota2 <- 2

 # Processamento

 media <- (nota1+nota2)/2

 # Saída

 if (media >= 6) {
     print("Aluno aprovado")
 } else {
     print("Aluno reprovado")
 }

 print(media)


Aqui, se a média for menor que 6, a mensagem "Aluno reprovado" será exibida. Caso contrário,
a mensagem será "Aluno aprovado". Como a média foi 1, será exibido “Aluno reprovado”.

if...else if...else

Quando temos mais de duas condições, podemos usar a estrutura if...else if...else para
tratar múltiplas verificações. Sua sintaxe básica é:


 if (condição1) {
     # Código a ser executado se condição1 for TRUE
 }
 else if (condição2) {
     # Código a ser executado se condição2 for TRUE
 }
 else if (condição3) {
     # Código a ser executado se condição3 for TRUE
 ...
 else (condiçãoN) {
     # Código a ser executado se condiçãoN for FALSE
 }


Vejamos um exemplo para melhorar a compreensão:


         Receita Federal (Analista Tributário) Fluência em Dados                         86
         www.estrategiaconcursos.com.br                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 x <- 10

 if (x == 30) {
   print("Número igual a 30")
 } else if (x > 30) {
   print("Número maior que 30")
 } else {
   print("Número menor que 30")
 }


ifelse

R também tem a função ifelse(), que é útil para trabalhar com vetores. Ela avalia uma condição
e retorna valores específicos com base no resultado (verdadeiro ou falso) para cada elemento de
um vetor. Ele é uma versão mais eficiente do clássico if-else quando se trabalha com vetores
e matrizes, permitindo a aplicação de decisões condicionais em todos os elementos de uma
estrutura de dados de forma rápida. Sua sintaxe básica é:


 ifelse(test, yes, no)


Sendo que test é uma condição lógica (pode ser um vetor lógico) a ser avaliada; yes: é o valor
a ser retornado quando a condição é TRUE; e no é o valor a ser retornado quando a condição é
FALSE. Vejamos um exemplo para facilitar a compreensão:


 print(ifelse(4 %% 2 == 0,"par", "ímpar"))


Essa função avalia a condição 4 %% 2 = 0, isto é, se o resto da divisão de 4 por 2 é 0. Por quê?
Porque 4 dividido por 2 tem quociente 2 e resto 0. Como 0 é igual a 0, essa condição é
verdadeira. Nós vimos que o segundo argumento é retornado quando a condição é verdadeira
ou o terceiro argumento é retornado quando a condição é falsa. Como nossa condição foi
verdadeira, ela retornará o segundo argumento, e será impresso “par”.

Diego, você não disse que essa função é útil para trabalhar com vetores? É, sim! Vamos ver um
exemplo agora envolvendo vetores. Suponham que tenhamos o seguinte vetor:

 num <- c(5,7,2,9,0)


Agora executamos a nossa função:


 print(ifelse(num %% 2 == 0, "par", "ímpar"))

         Receita Federal (Analista Tributário) Fluência em Dados                             87
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

A função ifelse() é utilizada para verificar se cada elemento do vetor é par ou ímpar, com base
na condição num %% 2 == 0, que verifica se o número é divisível por 2 (matematicamente um
número é par se o resto da divisão por 2 for igual a zero). Se a condição for verdadeira, o valor
retornado será "par"; caso contrário, será "ímpar". O resultado é um vetor de strings que classifica
cada número do vetor original como "par" ou "ímpar", e esse vetor é exibido usando print().


 [1] "ímpar" "ímpar" "par" "ímpar" "par"


Note que, ao executar esse código, ele retornou que 5 é ímpar, 7 é ímpar, 2 é par, 9 é ímpar e 0
é par. Entendido?

Estruturas de Repetição

As estruturas de repetição são essenciais na programação para automatizar tarefas que precisam
ser repetidas diversas vezes. Elas são usadas para executar um bloco de código repetidamente
enquanto uma condição for verdadeira ou por um número predeterminado de vezes. No R,
temos três principais estruturas de repetição: for, repeat e while. Cada uma delas tem uma
característica única, e o programador deve escolher a mais adequada dependendo da situação.

for

A estrutura for é utilizada quando se sabe previamente o número de vezes que o loop deve ser
executado. Ela itera (repete) sobre um vetor ou sequência de valores, executando um bloco de
código para cada elemento da sequência. Sua sintaxe básica é:

 for (variável in sequência) {
      # bloco de comandos
 }


Vamos fazer um exemplo bem simples no console para começar! A nossa ideia aqui é imprimir
“Estratégia Concursos” 100 vezes:


 for (i in 1:100) {
      print("Estratégia Concursos")
 }

         Receita Federal (Analista Tributário) Fluência em Dados                                 88
         www.estrategiaconcursos.com.br                                                          116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Neste exemplo, a variável i assume os valores de 1 a 100, e o comando print("Estratégia
Concursos") é executado a cada iteração, imprimindo a frase 100 vezes. Para ficar mais claro,
vamos adicionar a impressão do valor de i conforme o código seguinte:


 for (i in 1:100) {
      print("Estratégia Concursos")
      print(i)
 }

Aqui, para cada uma das 100 vezes que ele imprimir "Estratégia Concursos", ele identificará qual
é a iteração (1, 2, 3, ... , 100). E se eu quiser imprimir apenas números ímpares de 1 a 100:


 impar = 1
 for (i in 1:100) {
      print(impar)
      impar = impar + 2
 }

         Receita Federal (Analista Tributário) Fluência em Dados                             89
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Este código imprime os 100 primeiros números ímpares, iniciando com o valor 1 e somando 2 a
cada iteração até chegar ao 199.

Existe um comando especial chamado next que faz com que o loop pule diretamente para a
próxima iteração, sem executar o restante do código da iteração atual. Vejamos um exemplo:


 for (i in 1:10) {
    if (i %% 2 == 0) {
        next
    }
    print(i)
 }


No código acima, o loop imprime apenas os números ímpares, pois o next faz com que o loop
pule a impressão de números pares. Vejamos cada iteração:


 i = 1: Como 1 não é divisível por 2 (ímpar), o valor 1 é impresso.
 i = 2: Como 2 é divisível por 2 (par), o comando next é acionado e nada é impresso.
 i = 3: Como 3 não é divisível por 2 (ímpar), o valor 3 é impresso.
 i = 4: Como 4 é divisível por 2 (par), o comando next é acionado e nada é impresso.
 i = 5: Como 5 não é divisível por 2 (ímpar), o valor 5 é impresso.
 i = 6: Como 6 é divisível por 2 (par), o comando next é acionado e nada é impresso.
 i = 7: Como 7 não é divisível por 2 (ímpar), o valor 7 é impresso.
 i = 8: Como 8 é divisível por 2 (par), o comando next é acionado e nada é impresso.
 i = 9: Como 9 não é divisível por 2 (ímpar), o valor 9 é impresso.
 i = 10: Como 10 é divisível por 2 (par), o comando next é acionado e nada é impresso.


repeat

A estrutura repeat executa o bloco de código repetidamente até que seja forçado o fim do loop
com a instrução break. O repeat garante que o bloco seja executado pelo menos uma vez,
mesmo que a condição de saída já esteja satisfeita. Sua sintaxe básica é:

         Receita Federal (Analista Tributário) Fluência em Dados                          90
         www.estrategiaconcursos.com.br                                                   116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 repeat {
     # bloco de comandos
     if (condição) {
         break
     }
 }


No exemplo a seguir, busca-se imprimir um número de 1 a 10:


 i <- 0
 repeat {
    i <- i + 1
    print(i)
    if (i == 10) {
       break
    }
 }


Neste exemplo, a variável i é definida como 0. Dentro do loop, a cada iteração, o valor de i é
incrementado em 1 (i <- i + 1), e o valor de i é impresso com print(i). O loop continua até
que o valor de i seja igual a 10, momento em que a condição if (i == 10) é satisfeita e o
comando break interrompe o loop, finalizando a execução. Logo, o código imprime os números
de 1 a 10 na saída. Vejamos cada iteração:

 i = 1: i é incrementado para 1, e o valor 1 é impresso. O Loop continua.
 i = 2: i é incrementado para 2, e o valor 2 é impresso. O loop continua.
 i = 3: i é incrementado para 3, e o valor 3 é impresso. O loop continua.
 i = 4: i é incrementado para 4, e o valor 4 é impresso. O loop continua.
 i = 5: i é incrementado para 5, e o valor 5 é impresso. O loop continua.
 i = 6: i é incrementado para 6, e o valor 6 é impresso. O loop continua.
 i = 7: i é incrementado para 7, e o valor 7 é impresso. O loop continua.
 i = 8: i é incrementado para 8, e o valor 8 é impresso. O loop continua.
 i = 9: i é incrementado para 9, e o valor 9 é impresso. O loop continua.
 i = 10: i é incrementado para 10, e o valor 10 é impresso.


         Receita Federal (Analista Tributário) Fluência em Dados                           91
         www.estrategiaconcursos.com.br                                                    116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

 O if (i==10) é satisfeito, e o comando break é acionado, interrompendo o loop.


Todo repeat precisa de um break; caso contrário, o laço ficará em looping infinito. Além disso,
todo break possui uma condição de saída (em nosso exemplo, foi i == 10).

while

A estrutura while repete o bloco de comandos enquanto a condição for verdadeira. Diferente
do repeat, o while pode não executar o bloco de comandos nenhuma vez, caso a condição inicial
seja falsa. Sua sintaxe básica é:


 while (condição) {
   # bloco de comandos
 }


No exemplo a seguir, busca-se imprimir um número de 1 a 10:

 i <- 0
 while (i < 10) {
   i <- i + 1
   print(i)
 }


Neste código, a variável i é definida como 0. O loop verifica a condição i < 10, ou seja, ele
continua a executar enquanto o valor de i for menor que 10. Dentro do loop, o valor de i é
incrementado em 1 (i <- i + 1) a cada iteração, e esse novo valor de i é impresso com
print(i). Quando i atinge 10, a condição i < 10 se torna falsa, e o loop para. Como resultado,
o código imprime os números de 1 a 10. Vejamos cada iteração:

 i = 1: Inicialmente, i vale 0. O valor de i é incrementado para 1, e o valor 1 é
 impresso. O loop continua, pois i < 10 ainda é verdadeiro.

 i = 2: O valor de i é incrementado para 2, e o valor 2 é impresso. O loop continua.
 i = 3: O valor de i é incrementado para 3, e o valor 3 é impresso. O loop continua.
 i = 4: O valor de i é incrementado para 4, e o valor 4 é impresso. O loop continua.
 i = 5: O valor de i é incrementado para 5, e o valor 5 é impresso. O loop continua.
 i = 6: O valor de i é incrementado para 6, e o valor 6 é impresso. O loop continua.
 i = 7: O valor de i é incrementado para 7, e o valor 7 é impresso. O loop continua.
 i = 8: O valor de i é incrementado para 8, e o valor 8 é impresso. O loop continua.
 i = 9: O valor de i é incrementado para 9, e o valor 9 é impresso. O loop continua.
 i = 10: O valor de i é incrementado para 10, e o valor 10 é impresso.

 Agora, a condição i < 10 não é mais verdadeira, então o loop para.


      ESTRUTURA                    CARACTERÍSTICA                                   QUANDO USAR

         Receita Federal (Analista Tributário) Fluência em Dados                                  92
         www.estrategiaconcursos.com.br                                                           116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
    Aula 02 - Profs. Diego Carvalho e Renato da Costa

                       Repete um número determinado de vezes.         Quando se sabe o número de iterações.
                FOR

                       Garante que o bloco será executado pelo        Quando é necessário repetir até que uma
            REPEAT
                       menos uma vez.                                 condição específica seja satisfeita.
                                                                      Quando o número de repetições é
             WHILE     Repete enquanto a condição for verdadeira.
                                                                      indeterminado e depende de uma condição.


    Funções Personalizadas
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Durante a aula, nós vimos várias funções predefinidas que fazem parte do próprio ambiente R ou
de pacotes externos. No entanto, uma característica poderosa do R é a possibilidade de criar
nossas próprias funções. Uma função é basicamente um bloco de código reutilizável que pode
ser executado em qualquer parte de um programa. Ela é utilizada para simplificar operações
repetitivas, facilitando a organização do código e promovendo a reutilização. Toda função em R
segue uma estrutura específica:

▪    Nome da Função: um identificador que deve ser único.
▪    Parâmetros de Entrada (Opcional): variáveis que a função recebe para processar.
▪    Bloco de Comandos: o que a função faz, o processamento.
▪    Retorno (Opcional): o valor que a função devolve ao final de sua execução.


    nome_da_função <- function(parâmetros) {
      # comandos da função
      return(valor_de_retorno)
    }


Vamos criar uma função simples sem argumentos:


    saudacao <- function() {
      print("Olá, bem-vindo!")
    }


Essa função não recebe nenhum argumento nem retorna valores – apenas imprime a frase: “Olá,
bem-vindo!”. Para executá-la, basta chamá-la no console do R da seguinte forma:

    saudacao()

          Receita Federal (Analista Tributário) Fluência em Dados                                             93
          www.estrategiaconcursos.com.br                                                                      116

                                       


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Agora vamos ver uma função com argumentos:


 soma <- function(a, b) {
   resultado <- a + b
   return(resultado)
 }


Essa função recebe dois argumentos (a e b) e retorna a soma desses valores. Para executá-la,
basta chamá-la no console do R da seguinte forma:


 soma(3, 5)

Existem também as funções recursivas. O que é isso, Diego? Essas funções são funções que
chamam a si mesmas durante a execução. A recursão é útil quando um problema pode ser
dividido em subproblemas menores de forma semelhante ao problema original, e esses
subproblemas podem ser resolvidos repetidamente por meio da mesma função.

         Receita Federal (Analista Tributário) Fluência em Dados                         94
         www.estrategiaconcursos.com.br                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Uma função recursiva geralmente possui dois componentes principais: (1) Caso Base: a condição
que interrompe a recursão, evitando um loop infinito; (2) Chamada Recursiva: a função se chama
novamente, com um problema menor, progredindo em direção ao caso base. O exemplo mais
clássico de qualquer linguagem de programação é o fatorial de um número.

                                       Vamos relembrar a época de escola agora: o fatorial de um
                                       número 𝑛 é definido como 𝑛! = 𝑛 × (𝑛−1) × (𝑛−2) × ... × 1, e
                                       podemos resolver isso de maneira recursiva. A base é quando 𝑛
                                       = 1, e a chamada recursiva é feita com 𝑛−1. Por exemplo:

                                       5! = 5 x 4!, só que 4! = 4 x 3!, só que 3! = 3 x 2!, só que 2! = 2 x
                                       1!, só que 1! = 1. Agora vamos voltando: se 1! = 1, então 2! = 2
                                       x 1 = 2; então 3! = 3 x 2! = 3 x 2 = 6; então 4! = 4 x 3! = 4 x 6 =
                                       24; então 5! = 5 x 4! = 5 x 24 = 120. Podemos ver graficamente
                                       na imagem a seguir:


5! = 5x4!
       4! = 4x3!
              3! = 3x2!
                     2! = 2x1!
                            1! = 1
                     2! = 2x1 = 2
              3! = 3x2 = 6
       4! = 4x6 = 24
5! = 5x24 = 120
Uma função que representa o fatorial poderia ser:

fatorial <- function(n) {
  if (n == 1) {
    return(1) # Caso base: fatorial de 1 é 1
  } else {
    return(n * fatorial(n - 1)) # Chamada recursiva
  }
}

fatorial(5) # Resultado: 120 (5*4*3*2*1)

         Receita Federal (Analista Tributário) Fluência em Dados                                        95
         www.estrategiaconcursos.com.br                                                                 116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Note que ele retornou fatorial(5) = 120. Observação: no caso do fatorial, existem dois casos
base. Além de 1! = 1, temos que 0! = 1. Logo, o código também poderia ser escrito como:

fatorial <- function(n) {
  if (n == 0) {
    return(1) # Caso base: fatorial de 0 é 1
  } else {
    return(n * fatorial(n - 1)) # Chamada recursiva
  }
}

A recursão pode simplificar a solução de problemas complexos, especialmente os que podem
ser definidos em termos de subproblemas menores (como árvores, fatorial, Fibonacci). Além
disso, o código recursivo pode ser mais intuitivo e legível quando o problema naturalmente se
presta à divisão recursiva.

Por outro lado, a recursão muitas vezes não é a abordagem mais eficiente, pois pode gerar
muitas chamadas à função, o que consome mais memória e processamento. Ademais, com uma
profundidade de recursão muito grande, pode ocorrer um estouro de pilha, resultando em erro,
especialmente em linguagens que limitam a profundidade da pilha de chamadas.


 Pacotes e Bibliotecas
                                                                                  INCIDÊNCIA EM PROVA: MÉDIA


Na linguagem R, pacotes e bibliotecas são componentes essenciais que ampliam a
funcionalidade básica da linguagem. Eles fornecem uma vasta gama de funções, conjuntos de
dados e ferramentas desenvolvidas por usuários e a comunidade para realizar análises
estatísticas, gráficos, machine learning, entre outras tarefas.


         Receita Federal (Analista Tributário) Fluência em Dados                                         96
         www.estrategiaconcursos.com.br                                                                  116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                       Um pacote em R é uma coleção de funções, dados, e documentação que estende as
                       capacidades do R base. Cada pacote é desenvolvido para resolver um problema específico
          PACOTES
                       ou fornecer uma funcionalidade específica, como análise de dados, visualização gráfica ou
                       manipulação de dados.
                       O termo biblioteca em R refere-se ao local onde os pacotes estão armazenados no sistema.
                       Quando você carrega um pacote usando library(), você está acessando o conteúdo do
      BIBLIOTECAS
                       pacote dentro de uma biblioteca onde ele está instalado.

A linguagem R já vem com um conjunto de pacotes básicos, mas muitos outros pacotes
adicionais estão disponíveis no repositório CRAN (Comprehensive R Archive Network), no
Bioconductor (para bioinformática), e no GitHub (para pacotes em desenvolvimento). Os pacotes
estão divididos em três categorias:

      CATEGORIAS                                               DESCRIÇÃO
                       São aqueles que vêm pré-instalados com o núcleo da linguagem R e fornecem a
                       funcionalidade essencial da linguagem. Eles contêm as funções fundamentais necessárias
               BASE    para a operação básica do R, como manipulação de objetos, entrada e saída de dados,
                       gráficos básicos, controle de fluxo (como loops e condicionais), e muito mais.

                       São aqueles que, embora não façam parte do núcleo básico, são considerados essenciais
                       pela comunidade R para operações comuns e de uso frequente. Eles são instalados
  RECOMMENDED          automaticamente com a instalação padrão do R e foram escolhidos pelos desenvolvedores
                       para ajudar em tarefas comuns, como manipulação de dados, gráficos avançados, e outras
                       operações úteis em análise estatística e computação científica.
                       São aqueles criados e mantidos pela comunidade R. Eles não fazem parte da distribuição
                       padrão do R e precisam ser instalados separadamente por meio de repositórios como
    CONTRIBUTED        CRAN, Github, etc. Eles cobrem uma vasta gama de funcionalidades e são submetidos por
                       desenvolvedores de todo o mundo, permitindo que usuários contribuam com ferramentas
                       específicas para seus domínios.


O CRAN (Comprehensive R Archive Network) é o principal repositório de pacotes da linguagem
R. Ele contém milhares de pacotes desenvolvidos pela comunidade, e você pode acessá-lo
diretamente no site ou por meio do próprio RStudio, que realiza buscas automáticas quando
você tenta instalar um pacote. O CRAN é o repositório oficial e seguro de pacotes R. Existem
pacotes essenciais para diferentes tarefas no R. Aqui estão alguns dos mais utilizados:

          PACOTES                                                DESCRIÇÃO
                       Um pacote popular para criar visualizações de dados baseadas na gramática dos gráficos.
            ggplot2    Ele permite construir gráficos sofisticados e customizados a partir de camadas, facilitando
                       a criação de diversos tipos de visualizações.
                       Pacote focado em manipulação de dados. Ele oferece verbos intuitivos, como filter(),
               dplyr   select() e mutate(), para facilitar operações sobre data frames de forma rápida e eficiente.

                       Conjunto de pacotes, como ggplot2, dplyr e tidyr, que compartilham uma filosofia de
          tidyverse    manipulação de dados baseada em "dados tidy", facilitando a importação, manipulação e
                       visualização de dados.
                       Pacote útil para limpeza de dados, com funções que facilitam a normalização de nomes de
             janitor   colunas, remoção de dados duplicados e tabulações de dados, tornando o processo de
                       preparação mais simples.

         Receita Federal (Analista Tributário) Fluência em Dados                                                 97
         www.estrategiaconcursos.com.br                                                                          116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                       Pacote voltado para a criação de mapas interativos no R. Ele facilita a integração com dados
            leafleat   espaciais e permite adicionar camadas, marcadores e estilos personalizados diretamente
                       nos mapas.


Para utilizar um pacote que não faz parte da base do R, é necessário seguir dois passos:

1. Instalação do pacote: você precisa instalar o pacote apenas uma vez. Esse comando faz com
   que o R busque automaticamente o pacote no repositório CRAN e o instale na sua máquina.

 install.packages("nome_do_pacote")


2. Carregar o pacote: toda vez que for utilizar o pacote, você precisa carregá-lo na sessão atual
   do R.

 library(nome_do_pacote)


Com o crescimento da comunidade R, novos pacotes estão sendo desenvolvidos
constantemente, ampliando as possibilidades de uso da linguagem. É importante conhecer e se
familiarizar com os pacotes mais utilizados para tirar o máximo proveito da linguagem R.

         Receita Federal (Analista Tributário) Fluência em Dados                                                 98
         www.estrategiaconcursos.com.br                                                                          116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                             REFERÊNCIAS
1. Alcoforado, L. F. (2021). Utilizando a linguagem R. Rio de Janeiro: Alta Books.

2. Crespo, A. A. (1996). Estatística Fácil. Rio de Janeiro: Saraiva.

3. Guimarães, A. d., & Lages, N. A. (1994). Algoritmo e Estrutura de Dados. Rio de Janeiro: LTC.

4. Paiva, M. (2013). Matemática Paiva. São Paulo: Editora Moderna.

5. Schmuller, J. (2019). Análise estatística com R para leigos. Rio de Janeiro: Altabooks.

6. Stevenson, W. J. (1981). Estatística aplicada à administração. Editora Harbra: São Paulo.

         Receita Federal (Analista Tributário) Fluência em Dados                               99
         www.estrategiaconcursos.com.br                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                  QUESTÕES COMENTADAS
1. (FGV / EPE – 2024) Na Ciência de Dados é muito comum a utilização da linguagem Python e
   do R para visualização de dados.

    Sobre as diferenças entre essas duas ferramentas, analise as afirmativas a seguir.

    I. Python possui um padrão mais bem definido, permitindo que diferentes tipos de
    funcionalidades sejam escritos da mesma forma, enquanto no R, a mesma funcionalidade
    pode ser escrita de diversas formas diferentes.

    II. Python é principalmente usada quando a análise de dados precisa ser integrada com
    aplicativos web ou se o código estatístico precisa ser integrado em um servidor em ambiente
    de produção, que vai servir muitos usuários, enquanto o R é principalmente usado quando as
    atividades de análise de dados requerem computação standalone (em um único computador)
    ou análise em servidores individuais.

    III. Tanto o Python quanto o R foram criados inicialmente para análise de dados.

    Está correto o que se afirma em:

    a) I, apenas.
    b) I e II, apenas.
    c) I e III, apenas.
    d) II e III, apenas.
    e) I, II e III.

Comentários:

(I) Correto. Python possui um estilo mais uniforme e consistente, seguindo o princípio "There
should be one – and preferably only one – obvious way to do it". Isso facilita a padronização e
manutenção do código. Em R, há mais flexibilidade, permitindo diferentes abordagens para
resolver o mesmo problema, o que pode resultar em menor consistência no código.

(II) Correto. Python é amplamente utilizada para integração com aplicações web e ambientes de
produção devido à sua versatilidade e robustez. Já R é mais comum em análises estatísticas
standalone ou em servidores específicos, sendo preferido por estatísticos e pesquisadores
devido às suas bibliotecas especializadas em análises de dados. Python se destaca em cenários
de produção e escalabilidade, enquanto R é forte em análises acadêmicas e estatísticas.

(III) Errado. Python foi criado em 1991 como uma linguagem de propósito geral, focada em
simplicidade e legibilidade, e só mais tarde foi amplamente adotado para análise de dados com
o desenvolvimento de bibliotecas como Pandas e NumPy. R, por outro lado, foi criado em 1993
especificamente para análise estatística e gráfica, sendo direcionado desde o início para
cientistas de dados e estatísticos.

         Receita Federal (Analista Tributário) Fluência em Dados                            100
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                                                                        Gabarito: Letra B

2. (CESGRANRIO / CAIXA – 2024) Um cientista de dados utiliza a linguagem de programação
   R para explorar a distribuição dos saldos das contas dos clientes. Para isso, ele costuma gerar
   um histograma a partir de um vetor anonimizado contendo os saldos. Para gerar
   corretamente um histograma a partir de um vetor de números reais denominado saldos em
   R, o cientista de dados pode usar a expressão:

    a) barplot(saldos)
    b) graph(saldos, type="histogram")
    c) plot(saldos, type="hist")
    d) plot(hist(saldos))
    e) hist(saldos).

Comentários:

(a) Errado. A função barplot() é usada para gráficos de barras e não para histogramas; (b)
Errado. A função graph() não existe no R para esse propósito; (c) Errado. A função plot() com
o argumento type="hist" não gera histogramas; (d) Errado. Embora o histograma seja gerado
pela função hist(), o plot() adicional é desnecessário e incorreto; (e) Correto. A função hist()
gera diretamente o histograma de um vetor numérico.

                                                                                        Gabarito: Letra E

3. (CESPE / MPO – 2024) Considere o seguinte código R.

    Caso o ambiente e o programa não apresentem nenhum tipo de erro ou exceção, a execução
    desse código retornará o seguinte resultado.

    [1] 1
    [1] 2
    [1] 3
    [1] 4
    [1] 5
    [1] 6

Comentários:

         Receita Federal (Analista Tributário) Fluência em Dados                                      101
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

No código, o comando next faz com que a iteração atual do laço seja interrompida e a próxima
iteração comece, sem executar o que está abaixo. Logo, quando i == 3, o valor não será
impresso.

Vamos detalhar um pouco mais: o código começa com i <- 0, ou seja, a variável i é inicializada
com o valor 0; o loop while irá rodar enquanto a condição i < 6 for verdadeira. Em cada
iteração, o valor de i será incrementado em 1; dentro do loop, existe uma condição if (i ==
3), que verifica se o valor de i é igual a 3; se i for igual a 3, a instrução next é executada. O next
faz com que o loop pule diretamente para a próxima iteração, ou seja, nada após o next dentro
dessa iteração será executado (incluindo o print(i)); A função print(i) será chamada em
todas as iterações, exceto quando i for 3. O resultado correto da execução seria:

[1] 1
[1] 2
[1] 4
[1] 5
[1] 6

                                                                                        Gabarito: Errado

4. (CESPE / MPO – 2024) Em R, o sinal de cerquilha (#), no início de uma linha, transforma essa
   linha em comentário.

Comentários:

Em R, o sinal de cerquilha (#) é usado para indicar que o restante da linha é um comentário, que
será ignorado pelo interpretador durante a execução do código. Isso permite incluir anotações
explicativas sem afetar o comportamento do programa.

                                                                                        Gabarito: Correto

5. (CESPE / MPO – 2024) Considere o código a seguir.

    int x: 5;

    A execução do código precedente atribuirá o valor 5 à variável x.

Comentários:

Em R, a sintaxe correta para atribuir o valor 5 à variável x seria x <- 5 ou x = 5. O código
apresentado (int x: 5;) não é válido em R, pois utiliza uma sintaxe incorreta e um tipo de
declaração de variável que não existe nessa linguagem.

                                                                                        Gabarito: Errado

6. (FGV / AL-PR – 2024) Analise o código, escrito na linguagem R, a seguir.

         Receita Federal (Analista Tributário) Fluência em Dados                                      102
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    a.x <- c(1,2,5:8)
    b.x <- as.matrix(a.x)
    (dim(b.x))
    is.matrix(b.x)

    A saída por ele produzida será:

    a)
    [1] 3 1
    [1] TRUE

    b)
    [1] 3 1
    [1] FALSE

    c)
    [1] 4 1
    [1] FALSE

    d)
    [1] 6 1
    [1] TRUE

    e)
    [1] 6 1
    [1] FALSE

Comentários:

Na primeira linha, cria-se um vetor a.x utilizando a função c() (que concatena ou cria um vetor).
O vetor a.x contém os valores: 1, 2, 5, 6, 7, 8. O operador 5:8 cria uma sequência de números
de 5 até 8. Assim, o vetor completo será: 1, 2, 5, 6, 7, 8.


 [1] 1 2 5 6 7 8


Na segunda linha, o vetor a.x é convertido para uma matriz usando a função as.matrix(). A
função as.matrix() transforma o vetor em uma matriz com uma única coluna. Cada elemento
do vetor a.x será um elemento da matriz b.x.


        [,1]
 [1,]      1
 [2,]      2
 [3,]      5
 [4,]      6
 [5,]      7
 [6,]      8

         Receita Federal (Analista Tributário) Fluência em Dados                              103
         www.estrategiaconcursos.com.br                                                       116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Na terceira linha, utiliza-se a função dim() para obter as dimensões da matriz b.x. Como b.x foi
gerada a partir de um vetor de 6 elementos, a matriz terá 6 linhas e 1 coluna.


 [1] 6 1     # 6 linhas e 1 coluna


Na quarta linha, verifica-se se b.x é uma matriz utilizando a função is.matrix(). Como b.x foi
convertido para matriz, o resultado será TRUE.

 [1] TRUE


Logo, o resultado será:

 [1] 6 1
 [1] TRUE


                                                                                        Gabarito: Letra D

7. (CESGRANRIO / IPEA – 2024) Um cientista de dados recebeu um vetor chamado dados
   contendo valores da renda mensal da população de uma cidade e resolveu obter algumas
   estatísticas que descrevessem os dados recebidos. A linha de código em R que calcula
   corretamente a média do vetor dados é:

    a) media <- sum(dados)/len(dados)
    b) media <- mean(dados)
    c) media <- average(dados)
    d) media <- sapply(dados, function(x) length(x))
    e) media <- sapply(dados, function(x) x/len(dados))

Comentários:

(a) Errado. A função len() não existe em R. A função correta para obter o tamanho de um vetor
é length(); (b) Correto. A função mean() calcula diretamente a média de um vetor em R; (c)
Errado. A função average() não existe em R para calcular a média; (d) Errado. A função sapply()
aqui está incorreta, pois a expressão calcula o comprimento de cada elemento, o que não resulta
na média; (e) Errado. A função len() está incorreta, além de que sapply() não é necessário para
calcular a média.

                                                                                        Gabarito: Letra B

8. (CESGRANRIO / IPEA – 2024) Um cientista de dados está trabalhando com um conjunto de
   dados e usando a linguagem de programação R. O conjunto de dados, chamado dados,
   consiste em três colunas: ID, Idade e Salario, em que Idade indica um grupo de idade. O
   cientista de dados precisa calcular a média de Salario para cada grupo de idade. No entanto,
   ele deve realizar essa tarefa utilizando apenas as funções base do R, sem pacotes adicionais.

         Receita Federal (Analista Tributário) Fluência em Dados                                      104
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    Qual função ou conjunto de funções do R ele deve usar para realizar essa tarefa de forma
    eficiente?

    a) mean(dados$Salario)
    b) split(dados$Salario, dados$Idade)
    c) tapply(dados$Salario, dados$Idade, sum)
    d) aggregate(Salario ~ Idade, dados, mean)
    e) sum(dados$Salario) / length(unique(dados$Idade))

Comentários:

(a) Errado. A função mean(dados$Salario) calcula a média do salário total, sem agrupar por
idade; (b) Errado. A função split() separa os dados, mas não calcula automaticamente a média;
(c) Errado. A função tapply() está correta para agrupar por idade, mas o uso de sum está
incorreto, pois o objetivo é calcular a média; (d) Correto. A função aggregate() permite calcular
                                                        ==219a34==

a média de Salario para cada grupo de Idade de forma eficiente usando apenas funções base
do R; (e) Errado. A expressão calcula a média total dos salários, não por grupo de idade.

                                                                                        Gabarito: Letra D

9. (COPEVE-UFAL / UFAL – 2023) A linguagem de programação de R fornece múltiplas
   funcionalidades para operações matemáticas e vetoriais. Assim, qual é o resultado da
   execução do comando -2:2 em R?

    a) 0
    b) 1
    c) -2 2
    d) -1 0 1
    e) -2 -1 0 1 2

Comentários:

(a) Errado. O comando -2:2 gera uma sequência de números, não um valor único como 0; (b)
Errado. O resultado não é um valor único como 1; (c) Errado. O comando -2:2 gera uma
sequência completa de números inteiros de -2 a 2, não apenas os extremos; (d) Errado. A
sequência gerada por -2:2 inclui o número -2, que está ausente nessa opção; (e) Correto. O
comando -2:2 gera uma sequência de números inteiros de -2 a 2: -2, -1, 0, 1, 2.

                                                                                        Gabarito: Letra E

10. (COPEVE-UFAL / UFAL – 2023) Um estudante está implementando um programa em R
   para realizar cálculos matemáticos. Ele precisa determinar o resultado de uma expressão que
   envolve operações aritméticas. Considerando as regras de precedência de operadores, qual
   é o valor resultante da expressão 12/2*3+3^2 em R?

    a) 36
    b) 27
    c) 21


         Receita Federal (Analista Tributário) Fluência em Dados                                      105
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    d) 17
    e) 11

Comentários:

(a) Errado. O valor de 12/2*3 é 18, mas a soma e a potência não resultam em 36; (b) Correto. A
expressão é avaliada com a seguinte precedência: primeiro, a potência 3^2 = 9, depois as
operações de divisão e multiplicação, 12/2 = 6 e 6*3 = 18. Finalmente, 18 + 9 = 27; (c) Errado.
O resultado intermediário da expressão 12/2*3 é 18, mas a soma com 3^2 não gera 21; (d)
Errado. O resultado final da expressão é maior que 17; (e) Errado. O valor final da expressão é
maior que 11.

                                                                                        Gabarito: Letra B

11.     (FGV / SMPOG de Belo Horizonte-MG – 2023) Analise o código R a seguir.

    xpto <- function(k) {
        if (k > 0) {
            a <- k + xpto(k - 2)
            print(a)
      } else {
          a = 0
          return(a)
      }
    }
    xpto(7)

    Assinale o conjunto completo de valores exibidos na execução desse código, na ordem em
    que foram gerados.

    a) 1 4 9
    b) 1 4 9 16
    c) 9 4 1
    d) 1 6 9 4 1

Comentários:

Este código define uma função recursiva chamada xpto(), que opera sobre um número k. A
função chama a si mesma repetidamente, diminuindo o valor de k em 2 a cada vez, até que k seja
igual ou menor que zero. Quando isso ocorre, ela começa a "desempilhar" as chamadas
recursivas, somando os valores intermediários e imprimindo o valor de a a cada etapa. A função
é chamada com k = 7, logo vejamos passo a passo:

Primeira chamada: xpto(7): k = 7 (maior que 0), então a função chama xpto(5).
Segunda chamada: xpto(5): k = 5 (maior que 0), então a função chama xpto(3).
Terceira chamada: xpto(3): k = 3 (maior que 0), então a função chama xpto(1).
Quarta chamada: xpto(1): k = 1 (maior que 0), então a função chama xpto(-1).
Quinta chamada: xpto(-1): k = -1 (não é maior que 0), então a função retorna 0.


         Receita Federal (Analista Tributário) Fluência em Dados                                      106
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

Agora, começamos a retornar os valores a cada chamada recursiva anterior:

Quarta chamada: xpto(1): o retorno de xpto(-1) é 0, então a <- 1 + 0, ou seja, a = 1. A função
imprime 1 e retorna a = 1.

Terceira chamada: xpto(3): o retorno de xpto(1) é 1, então a <- 3 + 1, ou seja, a = 4. A função
imprime 4 e retorna a = 4.

Segunda chamada: xpto(5): o retorno de xpto(3) é 4, então, a <- 5 + 4, ou seja, a = 9. A função
imprime 9 e retorna a = 9.

Primeira chamada: xpto(7): o retorno de xpto(5) é 9, então a <- 7 + 9, ou seja, a = 16. A função
imprime 16 e retorna a = 16.

Logo, ao chamar xpto(7), o programa imprime os seguintes valores à medida que a função
desempilha as chamadas recursivas:

1
4
9
16

                                                                                        Gabarito: Letra B

12. (CESPE / DATAPREV – 2023) Leafleat é uma biblioteca R para criar e manipular uma
   hierarquia de classes ou árvore de herança, mostrando os relacionamentos entre classes na
   programação orientada a objetos.

Comentários:

Leaflet é uma biblioteca R utilizada para criar mapas interativos, e não para manipular hierarquias
de classes ou árvores de herança. Para representar relacionamentos entre classes na
programação orientada a objetos, seriam utilizadas outras ferramentas, como diagramas de
classe ou bibliotecas específicas para esse propósito, como DiagrammeR.

                                                                                        Gabarito: Errado

13. (CESPE / SEFIN de FORTALEZA-CE – 2023) Em relação ao software livre R, versão 4.3,
   julgue o item subsequente, considerando que todas as bibliotecas necessárias foram
   corretamente instaladas e disponibilizadas.

     Considere-se que, após o código a seguir, tenha sido inserida uma quarta linha com um
     comando capaz de criar uma regressão linear multivariada para uma variável de nome model.
     Considere-se, ainda, que o código final tenha sido executado com sucesso.

     x <- c(2, 4, 6, 8)
     y <- c(4, 8, 12, 16)


         Receita Federal (Analista Tributário) Fluência em Dados                                      107
         www.estrategiaconcursos.com.br                                                               116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    z <- c(3, 5, 7, 9)

    Nesse caso, a fim de resumir os dados presentes nos vetores x, y e z em apenas um vetor, de
    modo a mostrar, por exemplo, o maior valor, o menor valor e a média, por meio de
    agrupamento usando valores categóricos, seria correto inserir uma quinta linha no código,
    com o comando summarize(model).

Comentários:

O comando summarize(model) não é correto nesse contexto. Para resumir os dados de vetores
como x, y e z em R, funções como summary() ou agregações manuais, como min(), max(), e
mean(), seriam mais apropriadas. Além disso, a função summarize() é usada no pacote dplyr
para resumir dados em dataframes, e não para resumir diretamente vetores simples ou modelos
de regressão linear.

                                                                                        Gabarito: Errado

14. (CESPE / SEFIN de FORTALEZA-CE – 2023) Em relação ao software livre R, versão 4.3,
   julgue o item subsequente, considerando que todas as bibliotecas necessárias foram
   corretamente instaladas e disponibilizadas.

    O código seq(3, 22, length=6) apresentará, ao ser executado, o resultado a seguir.

    [1]      3     4     5      6     7     8

Comentários:

O comando seq(3, 22, length=6) gera uma sequência de 6 números igualmente espaçados
entre 3 e 22, e não uma sequência de números inteiros consecutivos como mostrado no item.
Logo, o resultado correto seria:

[1]    3.0       6.80     10.60       14.40       18.20       22.0

O valor de length = 6 define o número de elementos na sequência, que são distribuídos
uniformemente entre 3 e 22.

                                                                                        Gabarito: Errado

15. (CESPE / SEFIN DE FORTALEZA-CE – 2023) A seguir, são apresentados dados listados
   no arquivo sefin.csv, que se encontra gravado no diretório /home/sec/ e cujo código foi
   desenvolvido em linguagem R versão 4.3.

    id; nome; cartografia; tipo
    3; Quarup; 48-110-130; Médio
    4;Mirafiori; 48-110-172; Superior
    5; Scopa Residenza; 48-115-117; Superior
    6; Luciano Magalhães; 48-26-354; Médio
    7; San Marino; 48-26-371; Médio


          Receita Federal (Analista Tributário) Fluência em Dados                                    108
          www.estrategiaconcursos.com.br                                                             116

                                      


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    8; Copenhague; 48-26-393; Proletário
    9; Montreal I; 48-26-448; Médio
    10; Liberty Place; 48-36-290; Médio
    11; Tia Joana II;50-213-124; Proletário
    12; Tia Joana III; 50-239-123; Econômico

Embora o RStudio 2023 permita importar dados diretamente de arquivos Excel a partir da opção
Import Dataset, em destaque na figura a seguir, por questão de segurança, somente é possível
obter dados de arquivos gravados localmente no servidor que esteja executando o R ou na
máquina do usuário, ou seja, não é possível importar dados por meio de URL.

Comentários:

No R, é possível importar dados por meio de URLs utilizando funções como read.csv() para
arquivos CSV e read_excel() para arquivos MS-Excel (se o pacote readxl estiver instalado),
desde que a URL forneça acesso direto ao arquivo. Embora a interface gráfica do RStudio foque
na importação local, o R permite carregar dados de arquivos remotos, desde que as permissões
e formatos sejam compatíveis.

                                                                                        Gabarito: Errado

         Receita Federal (Analista Tributário) Fluência em Dados                                     109
         www.estrategiaconcursos.com.br                                                              116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                       LISTA DE QUESTÕES
1. (FGV / EPE – 2024) Na Ciência de Dados é muito comum a utilização da linguagem Python e
   do R para visualização de dados.

    Sobre as diferenças entre essas duas ferramentas, analise as afirmativas a seguir.

    I. Python possui um padrão mais bem definido, permitindo que diferentes tipos de
    funcionalidades sejam escritos da mesma forma, enquanto no R, a mesma funcionalidade
    pode ser escrita de diversas formas diferentes.

    II. Python é principalmente usada quando a análise de dados precisa ser integrada com
    aplicativos web ou se o código estatístico precisa ser integrado em um servidor em ambiente
    de produção, que vai servir muitos usuários, enquanto o R é principalmente usado quando as
    atividades de análise de dados requerem computação standalone (em um único computador)
    ou análise em servidores individuais.

    III. Tanto o Python quanto o R foram criados inicialmente para análise de dados.

    Está correto o que se afirma em:

    a) I, apenas.
    b) I e II, apenas.
    c) I e III, apenas.
    d) II e III, apenas.
    e) I, II e III.

2. (CESGRANRIO / CAIXA – 2024) Um cientista de dados utiliza a linguagem de programação
   R para explorar a distribuição dos saldos das contas dos clientes. Para isso, ele costuma gerar
   um histograma a partir de um vetor anonimizado contendo os saldos. Para gerar
   corretamente um histograma a partir de um vetor de números reais denominado saldos em
   R, o cientista de dados pode usar a expressão:

    a) barplot(saldos)
    b) graph(saldos, type="histogram")
    c) plot(saldos, type="hist")
    d) plot(hist(saldos))
    e) hist(saldos).

3. (CESPE / MPO – 2024) Considere o seguinte código R.

         Receita Federal (Analista Tributário) Fluência em Dados                               110
         www.estrategiaconcursos.com.br                                                        116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    Caso o ambiente e o programa não apresentem nenhum tipo de erro ou exceção, a execução
    desse código retornará o seguinte resultado.

    [1] 1
    [1] 2
    [1] 3
    [1] 4
    [1] 5
    [1] 6

4. (CESPE / MPO – 2024) Em R, o sinal de cerquilha (#), no início de uma linha, transforma essa
   linha em comentário.

5. (CESPE / MPO – 2024) Considere o código a seguir.

    int x: 5;

    A execução do código precedente atribuirá o valor 5 à variável x.

6. (FGV / AL-PR – 2024) Analise o código, escrito na linguagem R, a seguir.

    a.x <- c(1,2,5:8)
    b.x <- as.matrix(a.x)
    (dim(b.x))
    is.matrix(b.x)

    A saída por ele produzida será:

    a)
    [1] 3 1
    [1] TRUE

    b)
    [1] 3 1
    [1] FALSE

    c)
    [1] 4 1
    [1] FALSE

         Receita Federal (Analista Tributário) Fluência em Dados                            111
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    d)
    [1] 6 1
    [1] TRUE

    e)
    [1] 6 1
    [1] FALSE

7. (CESGRANRIO / IPEA – 2024) Um cientista de dados recebeu um vetor chamado dados
   contendo valores da renda mensal da população de uma cidade e resolveu obter algumas
   estatísticas que descrevessem os dados recebidos. A linha de código em R que calcula
   corretamente a média do vetor dados é:

    a) media <- sum(dados)/len(dados)
    b) media <- mean(dados)
    c) media <- average(dados)
    d) media <- sapply(dados, function(x) length(x))
    e) media <- sapply(dados, function(x) x/len(dados))

8. (CESGRANRIO / IPEA – 2024) Um cientista de dados está trabalhando com um conjunto de
   dados e usando a linguagem de programação R. O conjunto de dados, chamado dados,
   consiste em três colunas: ID, Idade e Salario, em que Idade indica um grupo de idade. O
   cientista de dados precisa calcular a média de Salario para cada grupo de idade. No entanto,
   ele deve realizar essa tarefa utilizando apenas as funções base do R, sem pacotes adicionais.

    Qual função ou conjunto de funções do R ele deve usar para realizar essa tarefa de forma
    eficiente?

    a) mean(dados$Salario)
    b) split(dados$Salario, dados$Idade)
    c) tapply(dados$Salario, dados$Idade, sum)
    d) aggregate(Salario ~ Idade, dados, mean)
    e) sum(dados$Salario) / length(unique(dados$Idade))

9. (COPEVE-UFAL / UFAL – 2023) A linguagem de programação de R fornece múltiplas
   funcionalidades para operações matemáticas e vetoriais. Assim, qual é o resultado da
   execução do comando -2:2 em R?

    a) 0
    b) 1
    c) -2 2
    d) -1 0 1
    e) -2 -1 0 1 2

10. (COPEVE-UFAL / UFAL – 2023) Um estudante está implementando um programa em R
   para realizar cálculos matemáticos. Ele precisa determinar o resultado de uma expressão que
   envolve operações aritméticas. Considerando as regras de precedência de operadores, qual
   é o valor resultante da expressão 12/2*3+3^2 em R?


         Receita Federal (Analista Tributário) Fluência em Dados                             112
         www.estrategiaconcursos.com.br                                                      116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

    a) 36
    b) 27
    c) 21
    d) 17
    e) 11

11.     (FGV / SMPOG de Belo Horizonte-MG – 2023) Analise o código R a seguir.

    xpto <- function(k) {
        if (k > 0) {
            a <- k + xpto(k - 2)
            print(a)
      } else {
          a = 0                                         ==219a34==

          return(a)
      }
    }
    xpto(7)

    Assinale o conjunto completo de valores exibidos na execução desse código, na ordem em
    que foram gerados.

    a) 1 4 9
    b) 1 4 9 16
    c) 9 4 1
    d) 1 6 9 4 1

12. (CESPE / DATAPREV – 2023) Leafleat é uma biblioteca R para criar e manipular uma
   hierarquia de classes ou árvore de herança, mostrando os relacionamentos entre classes na
   programação orientada a objetos.

13. (CESPE / SEFIN de FORTALEZA-CE – 2023) Em relação ao software livre R, versão 4.3,
   julgue o item subsequente, considerando que todas as bibliotecas necessárias foram
   corretamente instaladas e disponibilizadas.

    Considere-se que, após o código a seguir, tenha sido inserida uma quarta linha com um
    comando capaz de criar uma regressão linear multivariada para uma variável de nome model.
    Considere-se, ainda, que o código final tenha sido executado com sucesso.

    x <- c(2, 4, 6, 8)
    y <- c(4, 8, 12, 16)
    z <- c(3, 5, 7, 9)

    Nesse caso, a fim de resumir os dados presentes nos vetores x, y e z em apenas um vetor, de
    modo a mostrar, por exemplo, o maior valor, o menor valor e a média, por meio de
    agrupamento usando valores categóricos, seria correto inserir uma quinta linha no código,
    com o comando summarize(model).


         Receita Federal (Analista Tributário) Fluência em Dados                            113
         www.estrategiaconcursos.com.br                                                     116

                                     


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

14. (CESPE / SEFIN de FORTALEZA-CE – 2023) Em relação ao software livre R, versão 4.3,
   julgue o item subsequente, considerando que todas as bibliotecas necessárias foram
   corretamente instaladas e disponibilizadas.

    O código seq(3, 22, length=6) apresentará, ao ser executado, o resultado a seguir.

    [1]      3     4     5      6     7     8

15. (CESPE / SEFIN DE FORTALEZA-CE – 2023) A seguir, são apresentados dados listados
   no arquivo sefin.csv, que se encontra gravado no diretório /home/sec/ e cujo código foi
   desenvolvido em linguagem R versão 4.3.

    id; nome; cartografia; tipo
    3; Quarup; 48-110-130; Médio
    4;Mirafiori; 48-110-172; Superior
    5; Scopa Residenza; 48-115-117; Superior
    6; Luciano Magalhães; 48-26-354; Médio
    7; San Marino; 48-26-371; Médio
    8; Copenhague; 48-26-393; Proletário
    9; Montreal I; 48-26-448; Médio
    10; Liberty Place; 48-36-290; Médio
    11; Tia Joana II;50-213-124; Proletário
    12; Tia Joana III; 50-239-123; Econômico

Embora o RStudio 2023 permita importar dados diretamente de arquivos Excel a partir da opção
Import Dataset, em destaque na figura a seguir, por questão de segurança, somente é possível
obter dados de arquivos gravados localmente no servidor que esteja executando o R ou na
máquina do usuário, ou seja, não é possível importar dados por meio de URL.

          Receita Federal (Analista Tributário) Fluência em Dados                        114
          www.estrategiaconcursos.com.br                                                 116

                                      


---

. Túlio Lages
Aula  00 Carvalho, Emannuelle Gouveia Rolim, Equipe Informática e TI, Renato da Costa
   Diego
  Aula 02 - Profs. Diego Carvalho e Renato da Costa

                                                 GABARITO
1. LETRA B
2. LETRA E
3. ERRADO
4. CORRETO
5. ERRADO
6. LETRA D
7. LETRA B
8. LETRA D
9. LETRA E
10. LETRA B
11. LETRA B
12. ERRADO
13. ERRADO
14. ERRADO
15. ERRADO

         Receita Federal (Analista Tributário) Fluência em Dados                        115
         www.estrategiaconcursos.com.br                                                 116

                                     


---

---
