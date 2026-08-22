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
arquivo_origem: Aula 03_001_Mapa Mental.txt
tipo_material: Mapas Mentais & Esquemas
aula_numero: '03'
titulo_aula: CONCEITOS BÁSICOS
---

# CONCEITOS BÁSICOS

CONCEITOS BÁSICOS
                                                                                                                              NOMES DE VARIÁVEIS
●   Multiparadigma
     ■ Funcional
     ■ Orientada a objetos                                                    ■     Podem conter combinações arbitrárias de números, textos, bem como ponto (.) e underscore (_)
●   Dinâmica                                                                  ■     Não podem começar com números ou underscore
●   Fortemente tipada
●   Voltada à
     ■ Manipulação                                                                                                                   PACOTES
     ■ Análise
     ■ Visualização de dados
                                                                               ■    Quando um objeto suporta tipos diferentes ele é chamado de heterogêneo, quando admite apenas objetos
●   Disponível sob a licença GNU GPL (software livre)
                                                                                    do mesmo tipo é denominado homogêneo
●   Versões binárias pré-compiladas são fornecidas para
     ■ Windows                                                                 ■    Para carregar um pacote, use a função library()
     ■ Macintosh                                                               ■    A função search() pode ser utilizada para verificar os pacotes já carregados e disponíveis
     ■ Muitos sistemas operacionais Unix/Linux.                                ■    A função detach() pode ser utilizada para descarregar um pacote
●   Disponibiliza                                                              ■    O operador :: pode ser utilizado para desambiguar funções com o mesmo nome, mas em pacotes
     ■ Técnicas estatísticas e gráficas                                             diferentes
          ● Modelação linear e não linear                                      ■    A função install() pode ser utilizada para instalar um pacote
          ● Testes estatísticos clássicos
          ● Análise de séries temporais (time-series analysis)
     ■ Classificação                                                               PARTES BÁSICAS DE UM                                                     RSTUDIO
     ■ Agrupamento
●   Facilmente extensível através de funções e extensões                             PROGRAMA EM R
                                                                                                                                      ○   IDE (Integrated Development Environment)
●   Interpretada
                                                                                                                                            ■ Ambiente de Desenvolvimento Integrado
●   Suporta matrizes aritméticas                                               ■    R-base                                                  ■ Gratuito
●   Operadores aritméticos                                                            ● O “coração” do R que contém as funções              ■ Visual
     ■ Soma: +                                                                           principais disponíveis quando iniciamos o          ■ Simples de usar
     ■ Subtração: -                                                                      programa
     ■ Multiplicação: *                                                        ■    Pacotes recomendados
                                                                                      ● São instalados junto com o R-base mas
     ■ Divisão: /
                                                                                         não são carregados quando iniciamos o
     ■ Exponenciação: ^                                                                  programa
     ■ Resto da divisão: %%                                                    ■    Pacotes de contribuição de usuários
                                                                                      ● Não são instalados junto com o R-base
                                                                                                                                                                    ESTRATÉGIA CONCURSOS
                                                                   


---

                                                                                  OBJETOS
           TIPOS BÁSICOS DE OBJETOS                                                                                        ATRIBUTOS INTRÍNSECOS DE OBJETOS
■   Vetores
      ● Sequência de valores numéricos ou de caracteres (letras, palavras) sempre do
          mesmo tipo                                                                                               ■   Tipo
      ● Podem ser criados por meio das funções c(), seq() e rep()                                                        ● Podem ser
■   Matrizes                                                                                                                   ● Numérico
      ● Coleção de vetores em linhas e colunas, todos os vetores dever ser do mesmo                                            ● Caractere
          tipo                                                                                                                 ● Complexo
■   Dataframes (similares a tabelas numa base de dados relacional)                                                             ● Lógico
      ● O mesmo que uma matriz, mas aceita vetores de tipos diferentes (numérico e                                       ● A função mode() e a função class() podem ser utilizadas para recuperar o tipo
          caracteres)                                                                                                       de um objeto
■   Listas                                                                                                         ■   Tamanho
      ● Conjunto de vetores, dataframes ou de matrizes                                                                   ● A função length() pode ser utilizada para recuperar o tamanho de um objeto
      ● Não precisam ter o mesmo comprimento
■   Funções
      ● As funções criadas para fazer diversos cálculos também são objetos do R
■   Factors (fatores)
      ● São formas de representar objetos categóricos no R

                                                                      HOMOGENEIDADE DE OBJETOS


          ■ Quando um objeto suporta tipos
            diferentes ele é chamado de
            heterogêneo, quando admite apenas
            objetos do mesmo tipo é denominado
            homogêneo

                                                                                                                                                                         ESTRATÉGIA CONCURSOS
                                                                              


---

                                                                                      FUNÇÕES
FUNÇÕES PARA PEDIR AJUDA E                                        FUNÇÕES PARA CRIAR DADOS                                        FUNÇÕES PARA FRAGMENTAR E EXTRAIR DADOS
     COMPREENDER OBJETOS
                                                      ○   c(...)
○    help(tópico)                                           ■ Pode se entender c de combinar                                  ○   x[n]
       ■ Documentação do tópico, que pode ser               ■ É uma função genérica que combina os argumentos em um vetor          ■ Seleciona o elemento presente no n índice do vetor x
           uma função ou um objeto                    ○   from:to                                                             ○   x[-n]
○    str(“tópico”)                                          ■ Gera uma sequência                                                   ■ Seleciona todos os elementos do vetor x, exceto o elemento n
       ■ Mostra a estrutura do tópico no R                  ■ Os dois pontos (:) tem a prioridade na operação
                                                                                                                              ○   x[1:n]
○    summary(a)                                             ■ Exemplos:
                                                                   ● 1:4+1, a saída no console é “2,3,4,5”                         ■ Seleciona os primeiros n elementos do vetor x
       ■ Mostra o resumo de ‘a’. Geralmente um
                                                      ○   seq(from,to)                                                        ○   x[c(1,3,5)]
           resumo estatístico. Mas há diferentes
           operações para diferentes classes de ‘a’         ■ Gera uma sequência                                                   ■ Seleciona os elementos do vetor x nas posições especificadas, neste caso,
○    ls()                                                   ■ Possui os seguintes parâmetros, by=específica o incremento                1,3 e 5
       ■ Lista os objetos criados no console                     length=especifica o Tamanho desejado da sequência            ○   x[“nome”]
○    dir(“diretório”)                                       ■ by e length não podem ser usados como argumentos ao mesmo            ■ Seleciona o elemento do vetor x, pelo nome indicado
       ■ Lista arquivos de determinado diretório                 tempo
                                                                                                                              ○   x[x>3]
                                                            ■ Exemplos:
                                                                   ● > seq(1,10, by= 2)                                            ■ Seleciona todos os elementos do vetor x maiores que 3
                                                                           [1] 1 3 5 7 9
                                                                   ● > seq(1,4, length = 5)
    FUNÇÕES PARA IMPORTAR E                                                [1] 1.00 1.75 2.50 3.25 4.00
                 EXPORTAR                             ○   rep(x,times)                                                                    FUNÇÕES PARA PLOTAR GRÁFICOS
                                                            ■ Repete x vezes
                                                            ■ Use each=para repetir cada elemento x vezes
○    load()                                                 ■ Exemplos:                                                       ○   plot(a)
       ■ Carrega datasets(dados) escritos com                      ● > rep(c(1,2,3),2)                                             ■ Cria um gráfico com os valores de a no eixo y e no eixo x a sua respectiva
           save                                                            [1] 1 2 3 1 2 3                                              posição
○    data(x)                                                       ● > rep(c(1,2,3),2, each = 2)                              ○   plot(a,b)
       ■ Carrega dados específicos                                         [1] 1 1 2 2 3 3 1 1 2 2 3 3                             ■ Cria um gráfico em que os valores de a estarão no eixo x e os valores de b
○    library(x)                                       ○   data.frame()                                                                  no eixo y
       ■ Carrega um pacote de dados                         ■ Cria um data frame com os argumentos, nomeados ou não           ○   hist(x)
○    read.table(file)                                 ○   list()                                                                   ■ Cria um histograma de frequência de x
       ■ Lê um arquivo no formato de tabela e               ■ Cria uma lista com os argumentos                                ○   barplot(x)
           cria a partir dele um dataframe            ○   matrix(x,nrow=,ncol=)                                                    ■ Cria um histograma com os valores de x
       ■ O separador padrão sep=”” é qualquer               ■ Cria uma matrix; com nrow=número de linhas e ncol=número de          ■ Use horiz=TRUE para criar barras horizontais
           espaço em branco                                      colunas                                                      ○   pie(x)
       ■ Use header=TRUE para ler a primeira                ■ Elementos menores serão reciclados                                   ■ Cria um gráfico de setores (o famoso gráfico de pizza)
           linha como cabeçalho das colunas           ○   rbind(...)                                                          ○   boxplot(x)
○    save(arquivo,...)                                      ■ Combina os argumentos por linhas em uma matriz, data frame e         ■ Cria um gráfico do tipo box-plot
       ■ Salva o objeto especificado na                          entre outros
           plataforma binária                         ○   cbind(...)
○    print(a,...)                                           ■ Combina os argumentos por colunas em uma matriz, data frame e
       ■ Mostra a saída no console do objeto ‘a’                 entre outros

                                                                                                                                                                               ESTRATÉGIA CONCURSOS
                                                                                   


---

                                                          FUNÇÕES

FUNÇÕES PARA MANIPULAÇÃO DE MATRIZES                                                                     FUNÇÕES ADICIONAIS

                                                                                   ○        names()
  ○   t()                                                                                      ■ Nomeia elementos de um vetor, de modo a ser possível acessá-los
        ■ Retorna a matriz transposta                                                              por meio de seus nomes
  ○   diag(k)                                                                      ○        order()
        ■ Cria uma matriz identidade k x k                                                     ■ Retorna um vetor com as posições para que um objeto fique em
  ○   det()                                                                                        ordem crescente
        ■ Calcula o determinante da matriz                                         ○        sort()
  ○   diag()                                                                                   ■ Retorna o vetor ordenado
        ■ Retorna os elementos da diagonal principal                               ○        ls() e objects()
  ○   dim()                                                                                    ■ Lista todos os objetos que estão na sua área de trabalho
        ■ Retorna a dimensão da matriz                                             ○        rm()
  ○   ncol()                                                                                   ■ Remove um objeto da área de trabalho
        ■ Retorna o número de colunas da matriz                                    ○        abs()
  ○   nrow()                                                                                   ■ Valor absoluto
        ■ Retorna o número de linhas da matriz                                     ○        log()
  ○   rowSums()                                                                                ■ Logaritmo
        ■ Retorna a soma das linhas da matriz                                      ○        exp()
  ○   rowMeans()                                                                               ■ Exponenciação
        ■ Retorna a média das linhas da matriz                                     ○        sqrt()
  ○   colSums()                                                                                ■ Raiz quadrada
        ■ Retorna a soma das colunas da matriz                                     ○        factorial()
  ○   colMeans()                                                                               ■ Fatorial
        ■ Retorna a média das colunas da matriz                                    ○        choose()
                                                                                               ■ Combinação
                                                                                   ○        sin()
                                                                                               ■ Seno
                                                                                   ○        cos()
                                                                                               ■ Cosseno
                                                                                   ○        tan()
                                                                                               ■ Tangente

                                                                                                                                                                   ESTRATÉGIA CONCURSOS
                                                       


---
