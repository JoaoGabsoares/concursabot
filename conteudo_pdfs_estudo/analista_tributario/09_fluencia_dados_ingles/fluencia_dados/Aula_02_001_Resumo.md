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
arquivo_origem: Aula 02_001_Resumo.txt
tipo_material: Resumo Esquematizado
aula_numero: '02'
titulo_aula: RESUMO
---

# RESUMO

RESUMO

                                                                                                Definições básicas

           CONCEITOS                                           DESCRIÇÃO
                       É um conjunto de regras ou normas simples e bem definidas para a realização ou emprego
           Instrução de algo, indicando ao computador uma ação ou função elementar a ser executada.
                    Um conjunto predeterminado e bem definido de passos destinados à solução de um
           Algoritmo
                    problema, com um número finito de etapas.
                    Algoritmos podem ser representados por: linguagem natural, linguagem de máquina,
      Representação
                    linguagem de programação, pseudocódigo e fluxograma.

                                                                                                Linguagem python

                                                 O que é Python?
Python é uma linguagem de programação de alto nível, interpretada, multiparadigma e case-sensitive sendo
bastante utilizada para desenvolvimento web, criação de fluxos de trabalho, conexão com bancos de dados,
resolução de problemas matemáticos, prototipação de software, entre outros.


Principais CARACTERÍSTICAS                                         DESCRIÇÃO
                             Trata-se de uma linguagem de alto nível porque é uma linguagem com nível de
                             abstração bastante elevado, bem longe do código de máquina e mais próximo da
                ALTO NÍVEL   linguagem humana. Em outras palavras, o Python está muito mais próximo à forma
                             humana de pensar/escrever do que dos comandos entendidos por um processador.
                             Trata-se de uma linguagem interpretada porque seu código-fonte é executado linha a
                             linha por um interpretador (software que traduz uma linguagem em outra) e depois
            INTERPRETADA     pelo sistema operacional, isto é, seu código -fonte não precisa ser totalmente
                             transformado em código de máquina para somente depois ser executado.
                             Trata-se de uma linguagem multiparadigma porque suporta mais de um paradigma
                             de programação. No caso, eles são: imperativo, procedural, funcional e orientado a
          MULTIPARADIGMA     objetos. Paradigmas são formas diferentes de resolver problemas – alguns utilizam
                             funções, outros utilizam objetos, outros procedimentos e assim por diante.
                             Trata-se de uma linguagem case-sensitive, isto é, capaz de diferenciar maiúsculas e
                             minúsculas. Em outras palavras, isso significa que as variáveis nome, Nome e NOME
            CASE SENSITIVE   são diferentes entre si, uma vez que possuem diferenças de caixa em sua grafia.

                                             Outras CARACTERÍSTICAS
Python permite utilizar ponto-e-vírgula (;) para delimitar comandos, mas de forma opcional – assim como em
outras linguagens como JavaScript e Typescript.

Python é distribuída sob uma licença própria (compatível com a GPL), que permite a distribuição – comercial ou
não – tanto da linguagem quanto de aplicações desenvolvidas nela, em formato binário ou código fonte, bastando
cumprir a exigência de manter o aviso de copyright.

                                    


---

Python permite que programas sejam compilados para um formato portável chamado de bytecode. Essa
característica faz com que programas escritos nessa linguagem com uma biblioteca padrão sejam executadas da
mesma forma em diversos sistemas operacionais que possuam um software interpretador de Python.
Python possui uma interface com muitas bibliotecas e sistemas de janela, sendo extensível em C/C++. Além disso,
pode ser utilizada como linguagem de extensão para aplicações que necessitam de uma interface programável
(muito comum em aplicativos, jogos, processamento de textos, dados científicos e motores de busca).
Python possui funcionalidades para expressões regulares; sockets; threads; data/tempo; analisadores XML;
analisadores de arquivos de configuração; manipulação de arquivos e diretórios; persistência de dados; unidades
de testes; bibliotecas clientes para os protocolos HTTP, FTP, IMAP, SMTP e NNTP.
Python suporta o paradigma orientado a objetos com todos os seus componentes, tais como herança (simples ou
múltipla), polimorfismo, sobrescrita, encapsulamento, abstração, reflexão, introspecção, etc! Não é necessário
entender o que isso significa exatamente, apenas saber que ele suporta e que tudo em Python é um objeto.

                                                                                          Cuidados com indentação

                                                                                                Principais operadores

   SÍMBOLO           Operadores Aritméticos       exemplo
      +                       Soma                10 + 10 = 20.
      -                    Subtração              20 - 20 = 0.
      *                   Multiplicação           15 * 25 = 375.
      /                      Divisão              25 / 4 = 6,25.
     //                 Divisão com Piso          25 // 4 = 6 (6,25 arredondado para baixo) .
     **                  Exponenciação            2 ** 5 = 32.
     %                   Módulo/Resto             30 % 7 = 2 (resto da divisão).


   SÍMBOLO          Operadores de atribuição      exemplo
      =                Atribuição Simples         x = 10 é o mesmo que atribuir o valor 10 a x.
     +=              Atribuição com Soma          x += 1 é o mesmo que x = x + 1, logo x = 10 + 1 = 11.
     -=            Atribuição com Subtração       x -= 6 é o mesmo que x = x - 6, logo x = 11 – 6 = 5.
     *=             Atribuição com Produto        x *= 2 é o mesmo que x = x*2, logo x = 5 * 2 = 10.
     /=             Atribuição com Divisão        x /= 5 é o mesmo que x = x / 5, logo x = 10 / 5 = 2.


   SÍMBOLO         Operadores de comparação       exemplo
     ==                      Igual                x == y retorna Falso.
     !=                    Diferente              x != y retorna Verdadeiro.

                                  


---

      >                    Maior que                x > y retorna Falso.
       <                   Menor que                x < y retorna Verdadeiro.
      >=                 Maior ou igual a           x >= y retorna Falso.
      <=                 Menor ou igual a           x <= y retorna Verdadeiro.


    SÍMBOLO             Operadores Lógicos          exemplo
                   Retorna Verdadeiro se ambas
      and                                           x == 10 and y > 20 retorna Falso.
                   condições forem Verdadeiras
                  Retorna Verdadeiro se uma das
      or                                            x == 10 or y > 20 retorna Verdadeiro.
                     condições for Verdadeira
                    Inverte o resultado de uma
      not                                           not(x == 10 or y > 20) retorna Falso.
                        condição qualquer


    SÍMBOLO          Operadores de associação       exemplo
                     Retorna Verdadeiro se o        x = [“Flamengo”, “Vasco”]
       in           conjunto de valores estiver     y = “Botafogo” in x
                       presente no objeto           print(y) retornará Falso porque Botafogo não está na lista.
                     Retorna Verdadeiro se o        x = [“Flamengo”, “Vasco”]
     not in       conjunto de valores não estiver   y = “Flamengo” not in
                       presente no objeto           print(y) retornará Falso porque Flamengo está na lista.

                                                                                               Definições de função

                                   Sintaxe: def NomeFunção(argumentos):

                            Sintaxe: lambda lista_de_argumentos : expressão


                                                                                                      comentários

                                                    comentários
 Seu objetivo é adicionar descrições em partes especificas do código, seja para documentá-lo, seja para descrevê-
 lo, ou mesmo, para marcar que uma determinada linha, ou um conjunto de linhas, não devem ser executadas.

# Comentário para documentar a função "Olá, Mundo!"
print("Olá, Mundo!")

’’’
Comentário para documentar
a função "Olá, Mundo!"
com mais de uma linha
e aspas simples
’’’

print("Olá, Mundo!")

”””
Comentário para documentar
a função "Olá, Mundo!"

                                    


---

com mais de uma linha
e aspas duplas
”””

print("Olá, Mundo!")


                                                                                             declaração de variáveis

                                            Regras de nomenclatura de variáveis
 (1) Começar necessariamente com uma letra ou _ (underline); (2) Jamais devem começar com um número; (3)
 Conter caracteres alfanuméricos e undelines (a-z, A-Z, 0-9 e _); (4) São Case-Sensitive, isto é, capazes de
 diferenciar maiúscula de minúscula.


                                NOMES VÁLIDOS DE VARIÁVEIS NOMES INVÁLIDOS DE VARIÁVEIS
                                nomevariavel = "Diego"         2nomevariavel = "Diego"
                               nome_variavel = "Diego"         nome-variavel = "Diego"
                              _nome_variavel = "Diego"         nome variavel = "Diego"
                                nomeVariavel = "Diego"         nome#variavel = "Diego"


                                                                                                      Tipos de dados

      CATEGORIA                   TIPO                    PYTHON                          Exemplo
                                                                          x = True
      BOOLEANO                  Booleano                   bool           x = False
                                                                          x = 10
                                 Inteiro                    int           x = -5
                                                                          x = 10.7
      numérico            Ponto Flutuante                  float          x = -2.8
                                                                          x = 345j
                               Complexo                  complex          x = 2-9j
                                                                          x = 'texto'
       textual                   Texto                      str           x = "texto"
                                                                          x = [4, 8]
                                  Lista                     list          x = list()
                                                                          x = (5, 10)
                                 Tupla                     tuple          x = tuple()
  Coleção/sequência                                                       x = {2, 4}
                                  Set                       set           x = set( )
                                                                          x = {'nome': 'Diego', idade: 31}
                               Dicionário               dictionary


 TIPO DE COLEÇÃO   TRADUÇÃO                                             DESCRIÇÃO
                              Trata-se de uma coleção de valores ordenados, mutáveis e indexáveis que pode
      LIST            LISTA
                              conter valores duplicados.
                              Trata-se de uma coleção de valores ordenados, imutáveis e indexáveis que pode
      TUPLE          TUPLA
                              conter valores duplicados (também podem ser chamadas de sequências).
                              Trata-se de uma coleção de valores desordenados, mutáveis e não indexáveis que
       SET         CONJUNTO não pode conter valores duplicados.
                              Trata-se de uma coleção de valores ordenados, mutáveis e indexáveis que não pode
   DICTIONARY      DICIONÁRIO conter valores duplicados.

                                         


---

      Critério                List                     Tuple                     Set                   Dictionary
    Ordenação              Ordenada                   Ordenada              Não ordenada                ordenada
    Modificação             Mutável                   Imutável                 Mutável                   mutável
    Duplicatas       Permite duplicatas          Permite duplicatas     Não permite duplicatas    Não permite duplicatas
     Indexação             Por inteiro               Por inteiro            Não indexada                Por string
    delimitador       Entre colchetes [ ]        Entre parênteses ( )      Entre chaves { }          Entre chaves { }


                                                                                       Estrutura de decisão (if-elif-else)

if expressão-lógica1:
    bloco-de-instruções1
elif expressão-lógica2:
    bloco-de-instruções2
else:
    bloco-de-instruções3

                                                                                           Estrutura de repetição (while)

while expressão-lógica:
    bloco-de-instruções

                                     


---

                                                                                             Estrutura de repetição (for)

for variável-de-controle in variavel-colecao
    bloco-de-instruções


        Alterações de fluxo                                                DESCRIÇÃO
                                 Interrompe o loop completamente e vai para a linha seguinte ao término do loop.
                         Break
                                 Interrompe a iteração atual do loop e volta para o teste de condição do loop.
                     continue


                                                                                                                 Arquivos

                 Sintaxe: open(NomeDoArquivo, Modo) #Permite abrir/criar um arquivo


 MODO
           significado                                                DESCRIÇÃO
 DE USO
                           Esse parâmetro permite abrir um arquivo para leitura a partir de sua posição inicial sem que
  ‘r’         READ
                           o arquivo seja truncado e retorna um erro caso o arquivo não exista (é o modo default).
                           Esse parâmetro permite abrir um arquivo para escrita a partir de sua posição inicial após o
  ‘w’         WRITE
                           arquivo ser truncado e, caso o arquivo não exista, ele é criado.
                           Esse parâmetro permite abrir um arquivo para escrever/adicionar dados a partir de sua
  ‘a’        APPEND
                           posição final sem que o arquivo seja truncado e, caso o arquivo não exista, ele é criado.
                           Esse parâmetro permite criar um arquivo especificado e, caso o arquivo exista, ele retorna
  ‘x’         CREATE
                           um erro.


 MODO
           significado                                                DESCRIÇÃO
 DE USO
                           Esse parâmetro permite abrir um arquivo para leitura e escrita de dados a partir de sua
 ‘r+’       READ/write
                           posição inicial sem que o arquivo seja truncado e retorna um erro caso o arquivo não exista.
                           Esse parâmetro permite abrir um arquivo para escrever/adicionar e ler dados a partir de sua
 ‘a+’      APPEND/read
                           posição final sem que o arquivo seja truncado e, caso o arquivo não exista, ele é criado.
                           Esse parâmetro permite abrir um arquivo para escrita e leitura de dados a partir de sua
 ‘w+’       WRITE/read
                           posição inicial após o arquivo ser truncado e, caso o arquivo não exista, ele é criado.


                                    resumo      ‘x’    ‘r’    ‘r+’    ‘w’       ‘w+’   ‘a’   ‘a+’
                                       Criar    x                      x         x     x      x
                                         Ler            x      x                 x            x
                                   Escrever                    x       x         x     x      x
                                    truncar                            x         x
                           A partir do início           x      x       x         x
                             A partir do fim                                           x      x

                                           


---

MODO
         significado                                          DESCRIÇÃO
DE USO
                       Permite manipular o arquivo de texto simples – aqueles que contenham apenas caracteres
 ‘t’        Text
                       alfanuméricos sem formatação (é o default).
                       Permite manipular o arquivo como um binário – aqueles restantes que tratam de imagens,
 ‘b’        Binary
                       vídeos, áudios, documentos, planilhas, etc.


       MÉTODO                                              DESCRIÇÃO
                Retorna o conteúdo do arquivo como uma única string.
       read()

                Retorna uma linha do texto a cada chamada na ordem em que aparecem no arquivo.
 readline()

                Retorna uma lista de valores de string do arquivo, sendo que cada string corresponde a uma linha
readlines()
                do texto.

                                   


---

---
