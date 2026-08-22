---
cargo: Analista-Tributário da Receita Federal do Brasil (ATRFB)
banca: FGV
disciplina: Raciocínio Lógico-Matemático e Estatística
tags:
- rlm
- logica_proposicional
- probabilidade
- estatistica
- inferencia
arquivo_origem: Aula 04_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '04'
titulo_aula: Raciocínio Lógico Matemático
---

# Raciocínio Lógico Matemático

Aula 03
                          Receita Federal (Analista Tributário)
                                     Raciocínio Lógico Matemático

                                                            Autor:
                                        Equipe Exatas Estratégia
                                                      Concursos


                                                14 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 03

                                                                                     Índice
1) Lógica de Primeira Ordem


2) Questões Comentadas - Lógica de Primeira Ordem - Inéditas


3) Lista de Questões - Lógica de Primeira Ordem - Inéditas

                Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                                                                                        2
                www.estrategiaconcursos.com.br                                                                                                                                           30

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Lógica de Primeira Ordem

Simbologia e Aspectos Iniciais

Nesse primeiro momento, nosso principal objetivo será passar alguns conceitos iniciais e provocar uma
familiarização com os símbolos que estaremos utilizando. Devemos, ao final desse capítulo, ser capazes de
traduzir a notação simbólica que permeia a LPO para o bom e velho português. Para começar, considere a
seguinte sentença:

                                                     𝑥 é ímpar

A sentença acima é verdadeira ou falsa? Não sabemos, pois dependemos do valor de 𝒙. Como 𝑥 pode
assumir vários valores distintos, chamamos o 𝒙 de variável. Além disso, tudo que é dito sobre essa variável,
nós chamamos de predicado. A oração "x é ímpar" vai ser, portanto, uma função-predicado (ou função
proposicional) pois é uma sentença que depende do valor de uma variável para que seja possível atribuí-la
determinado valor lógico. Observe:

A pergunta que faremos agora é: quais números a variável 𝑥 pode assumir? Podemos considerar o conjunto
dos números inteiros, isto é:

                                         ℤ = {… , −3, −2, −1,0,1,2,3, … }

Nessa situação, chamamos o conjunto dos números inteiros de Universo de Discurso do predicado. Em
outras palavras, o Universo de Discurso é um conjunto formado pelos valores que a variável de uma função-
predicado pode assumir. Em muitas situações, esse conjunto não é explicitamente detalhado, ficando a
cargo do leitor sua correta identificação dado o contexto do problema. Vamos observar alguns exemplos.

   •   𝑥 é um país emergente.
       Se nada for falado no comando da questão, pode-se extrair como Universo de Discurso o conjunto
       formado por todos os países existentes no globo. Por exemplo, se 𝑥 assumir o valor "Canadá", a
       proposição será falsa. Caso assuma "Índia", então teremos uma proposição verdadeira.

   •   𝑥 passou no concurso dos sonhos.
       Novamente, se nada for falado no comando da questão, pode-se extrair como Universo de Discurso
       o conjunto formado por todas as pessoas que estudam para concursos. No entanto, o examinador
       pode estabelecer o Universo de Discurso como sendo, por exemplo, só os alunos do Estratégia.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               3
        www.estrategiaconcursos.com.br                                                                   30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Observe que ficar escrevendo a função-predicado "x é ímpar" não é interessante, pois, quando começarmos
a aplicar propriedades e a fazer um estudo mais detalhado dos predicados, "carregar" a sentença inteira não
é a melhor das ideias. Por esse motivo, podemos simplificá-la escrevendo-a de até três maneiras distintas:
𝑰𝒎𝒑𝒂𝒓(𝒙) ou 𝑰(𝒙) ou 𝑰𝒙.

                                     𝑰𝒎𝒑𝒂𝒓(𝒙) = 𝑰(𝒙) = 𝑰𝒙 = 𝒙 é í𝒎𝒑𝒂𝒓

(BR/2012) Considere a afirmativa “Todo gerente de projeto é programador”. Considere os predicados G(x) e
P(x), que representam, respectivamente, que x é gerente de projeto e que x é programador. Uma
representação coerente da afirmativa acima em lógica de primeira ordem é
A) 𝐺(𝑥) → ¬𝑃(𝑥)
B) ¬𝐺(𝑥) → 𝑃(𝑥)
C) 𝑃(𝑥) → 𝐺(𝑥)
D) ¬𝑃(𝑥) → 𝐺(𝑥)
E) ¬𝑃(𝑥) → ¬𝐺(𝑥)

Comentários:
O enunciado fornece os seguintes predicados:

                                       𝐺 (𝑥): 𝑥 é gerente de projeto
                                         𝑃(𝑥):   𝑥 é programador

Note que afirmações do tipo "todo A é B" são equivalentes à "Se A, então B". Dessa forma, devemos colocar
os predicados acima na forma de uma condicional. Considerando os dados do enunciado, temos que: todo
gerente de projeto é programador. Observe que tal afirmativa equivale a falar: se é gerente de projeto,
então é programador. Em notação da lógica de primeira ordem fica:

                                                 𝐺 (𝑥) ⟹ 𝑃(𝑥)

Observe que a forma que escrevemos não está contemplada entre as alternativas. Devemos, nesse
momento, lembrar da aula de Equivalências Lógicas:

                                        𝑝⟹𝑞             ≡      ¬𝑞 ⟹ ¬𝑝

Podemos usar a mesma relação aqui na lógica de primeira ordem.

                              𝐺 (𝑥) ⟹ 𝑃(𝑥)              ≡      ¬𝑃 (𝑥) ⟹ ¬𝐺(𝑥)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               4
        www.estrategiaconcursos.com.br                                                                  30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Qualquer uma das expressões acima são possíveis respostas da questão. No entanto, apenas ¬𝑷(𝒙) ⟹
¬𝑮(𝒙) está contemplada nas alternativas e é o nosso gabarito.


Gabarito: LETRA E.

Na questão anterior, temos uma resposta coerente. No entanto, ela não é uma resposta completa. Uma
representação mais adequada para a afirmativa do enunciado deveria conter o quantificador universal ∀.
Isso acontece, pois, precisamos indicar que a totalidade dos gerentes de projeto são programadores.

Quando escrevemos que 𝐺 (𝑥 ) ⟹ 𝑃(𝑥 ), estamos dizer que:

                            Se x é gerente de projeto, então x é programador

Intuitivamente, é possível inferir uma totalidade implícita quando escrevemos a própria condicional. Mas,
para uma resposta completa e explícita, devemos fazer o uso do quantificador. Essa representação seria:

                                            (∀𝑥)(𝐺 (𝑥) ⟹ 𝑃 (𝑥))

Uma leitura completa da expressão acima é:

   Para todo x pertencente ao Universo de Discurso, se x é gerente de projeto, então x é programador.

No cotidiano, fazemos uma leitura simplificada:

                          Para todo x, se x é gerente de projetos, x é programador.

A ideia de que 𝑥 pertence ao universo de discurso fica implícita.

(IPE-SAÚDE/2022) Considere como conjunto universo 𝑈 = {0,1,2,3,4} e observe as seguintes proposições
quantificadas, assinalando V, se verdadeiro, ou F, se falso.

( ) (∀𝑥 ∈ 𝑈)(𝑥 + 3 > 6)
( ) (∃𝑥 ∈ 𝑈)(𝑥 é 𝑝𝑎𝑟)
( ) (∀𝑥 ∈ 𝑈)(𝑥 2 < 20)

O valor lógico das afirmações acima, na ordem de preenchimento, de cima para baixo, é:
A) 𝑉 – 𝑉 – 𝑉.
B) 𝑉 – 𝑉 – 𝐹.
C) 𝑉 – 𝐹 – 𝑉.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              5
        www.estrategiaconcursos.com.br                                                                  30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

D) 𝐹 – 𝑉 – 𝑉.
E) 𝐹 – 𝐹 – 𝐹.

Comentários:
Para começar nosso estudo de LPO, vamos avaliar as proposições do enunciado. O primeiro passo aqui é
observar o Universo de Discurso.

                                                  𝑈 = {0,1,2,3,4}

(F) (∀𝑥 ∈ 𝑈)(𝑥 + 3 > 6)
Pessoal, essa aqui é falsa. Quando "traduzimos" a expressão, ela diz que para todo x pertencente ao conjun-
to universo, temos que x mais três é maior do que 6. Ora, veja que se "x" for 0, a expressão não vai ser
verdade. Com isso, não poderíamos usar o "para todo".  ==219a34==

(V) (∃𝑥 ∈ 𝑈)(𝑥 é 𝑝𝑎𝑟)
Verdadeiro. A "tradução" para o português fica: "existe x pertencente a U tal que x é par". Ora, observando
o conjunto U, vemos que existe sim! O "0", o "2" e o "4" são números pares.

(V) (∀𝑥 ∈ 𝑈)(𝑥 2 < 20)
Verdadeiro. A "tradução" dessa para o português fica: "para todo x pertencente a U tem-se que o quadrado
de x é menor do que 20". Como o conjunto U tem poucos elementos, podemos testar todos.

                02 = 0           12 = 1             22 = 4               32 = 9    42 = 16

Observe que os quadrados de todos os elementos de U são realmente menores do que 20. Logo, a proposi-
ção é verdadeira.

Gabarito: LETRA D.

LPO e as Proposições Categóricas

Você deve ter percebido que nosso foco está em fazer verdadeiras traduções entre a Língua Portuguesa e
a linguagem de símbolos da Lógica de Primeira Ordem. Minha intenção aqui é fazer com que esse monte
de símbolos não te assuste e que na hora da prova você possa se diferenciar dos seus concorrentes. Nesse
intuito, eu gostaria que você prestasse bastante atenção no quadro abaixo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               6
        www.estrategiaconcursos.com.br                                                                  30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Observe que temos uma representação simbólica para cada uma das formas de proposição categórica que
estudamos e revisamos anteriormente. Vamos entender o porquê de cada uma das representações?

   •   Todo A é B.

   É exatamente a expressão que obtivemos ao escrever uma resposta mais completa para a questão que
   vimos. Note que, para representar a noção de totalidade, devemos colocar o quantificador universal.

   Além disso, não esqueça que a condicional desempenha um papel fundamental, pois, quando queremos
   dizer que todo A é B, no fundo estamos dizendo que se dado objeto possui a propriedade A, então ele
   também possuirá a propriedade B.

   •   Algum A é B.

   Agora, para representar que algum objeto A possui a propriedade B, utilizamos o quantificador
   existencial ∃. Esse quantificador, como já vimos, exprime a ideia de que existe pelo menos um x (ou,
   simplesmente, algum x). Veja que usamos a conjunção (∧) para expressar que o objeto possui duas
   propriedades (A e B), simultaneamente. Essa combinação de símbolos, de fato, expressa que Algum A é
   B, concorda?

   •   Nenhum A é B.

   Note que para dizer que Nenhum A é B, basta dizer que não existe x tal que x tenha as duas propriedades
   (seja A e B, simultaneamente). Isso é exatamente a negação (o operador ¬) de "Algum A é B". Lembre-
   se que a negação de uma proposição categórica particular positiva é uma universal negativa.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             7
        www.estrategiaconcursos.com.br                                                                 30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

   •   Algum A não é B.

   Podemos aproveitar a representação simbólica de "todo A é B" para escrever a representação de "algum
   A não é B". Para isso, devemos lembrar que um é a negação do outro. Temos ainda que na negação de
   proposições quantificadas, trocamos o quantificador e negamos a proposição subsequente. Pouco mais
   cedo nessa aula, vimos que:


                                            ~(𝑝 ⇒ 𝑞 ) ≡ 𝑝 ∧ ~𝑞

   Vamos aproveitar essa informação e usar aqui também! A Lógica de Predicados nada mais é do que uma
   extensão da Lógica Proposicional. Observe a semelhança entre as duas expressões acima. Para ajudar
   na compreensão, vamos fazer uma questão do CESPE que traz uma grande aula sobre o assunto.

(ADAPAR/2021) Considere a seguinte proposição categórica O.

                                         O: “Nem todo carneiro é dócil”.

Considerando que x pertença ao conjunto T de todos os animais do mundo, que C(x) represente
simbolicamente a propriedade “x é carneiro” e que D(x) represente simbolicamente a propriedade “x é
dócil”, assinale a opção que apresenta uma representação simbólica correta da proposição O na linguagem
da lógica de primeira ordem.
A) ∀𝑥(𝐶 (𝑥 ) → ¬𝐷 (𝑥 ))
B) ∀𝑥(𝐶 (𝑥 ) → 𝐷 (𝑥 ))
C) ¬∃𝑥(𝐶 (𝑥 ) ∧ 𝐷(𝑥 ))
D) ∃𝑥(𝐶 (𝑥 ) ∧ ¬𝐷(𝑥 ))
E) ∃𝑥(𝐶 (𝑥 ) ∧ 𝐷(𝑥 ))

Comentários:
Questão bem bacana para treinar o que acabamos de ver. Inicialmente, é interessante escrever a proposição
categórica O de um jeito mais familiar com o que estamos estudando.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             8
        www.estrategiaconcursos.com.br                                                                30

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 03

                           "Nem todo carneiro é dócil" = "Algum carneiro não é dócil"

Com isso, caímos na situação que vimos anteriormente.

- Algum A não é B.

Como o enunciado deu que C(x) representa "x é carneiro" e D(x) representa "x é dócil". Temos que:

                                                 ∃𝒙(𝑪(𝒙) ∧ ¬𝑫(𝒙))

Perceba que para matarmos a questão, convertemos a frase para um formato familiar. Guarde essa dica! Às
vezes, as questões não dão as proposições categóricas do jeito "tradicional". No entanto, lembre-se que você
pode sim escrevê-la de uma forma mais conveniente, desde que expresse o mesmo sentido. Por fim,
recomendo fortemente que decore a tabelinha abaixo:

Esse tipo de conversão costuma cair bastante e saber "na lata" vai lhe poupar preciosos minutos enquanto
seus concorrentes estarão "quebrando" a cabeça!

Gabarito: LETRA D.

Relações e Aridade

Vamos avançar um pouco mais. Todos os predicados que vimos até agora são relações unárias, isto é,
possuem apenas uma única variável. Nesse caso, dizemos que predicados assim possuem aridade 1.

𝐼 (𝑥 ):      𝑥 é impar
𝐺 (𝑥 ):      𝑥 é gerente de projetos
𝑃 (𝑥 ):      𝑥 é um pavão

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             9
          www.estrategiaconcursos.com.br                                                                 30

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 03

No entanto, podemos ir além e estabelecer relações entre dois ou mais objetos! Observe alguns exemplos
de relações binárias.

𝐶 (𝑥, 𝑦):      𝑥 é casado com y
𝐸 (𝑥, 𝑦):      𝑥 estuda na escola y
𝐴(𝑥, 𝑦):       𝑥 acredita na religião y

Os predicados acima possuem duas variáveis e, por esse motivo, dizemos que possui aridade 2. É importante
ressaltar que, com duas variáveis, encontraremos 2 quantificadores em um mesmo predicado. Cada um
deles estará associado ao escopo de sua variável. Para esclarecer melhor esse ponto da matéria, vamos
analisar uma questão recente que traz essa abordagem.

(TRANSPETRO/2018) Considere a seguinte sentença:

“Todo aluno do curso de Informática estuda algum tópico de Matemática Discreta”

e os seguintes predicados:

𝐴(𝑥): 𝑥 é aluno.
𝐼(𝑥): 𝑥 é do curso de Informática.
𝐸(𝑥, 𝑦): 𝑥 estuda 𝑦.
𝑇(𝑥): 𝑥 é tópico de Matemática Discreta.

Uma forma de traduzi-la é
A) ∀𝑥((𝐴(𝑥) ∧ 𝐼(𝑥)) → ∃𝑦(𝑇(𝑦) ∧ 𝐸(𝑥, 𝑦)))
B) ∀𝑥(𝐴(𝑥) ∧ 𝐼(𝑥)) ∧ ∀𝑦(𝑇(𝑦) → 𝐸(𝑥, 𝑦))
C) ∃𝑥∀𝑦(𝐴(𝑥) ∧/(𝑥) ∧ 𝑇(𝑦) ∧ ¬𝐸(𝑥, 𝑦))
D) ∀𝑥((𝐴(𝑥) ∧ 𝐼(𝑥)) → ∀𝑦(𝑇(𝑦) → 𝐸(𝑥, 𝑦)))
E) ∃𝑥∀(𝐴(𝑥) ∧ 𝐼(𝑥) ∧ 𝑇(𝑦) ∧ 𝐸(𝑥, 𝑦))

Comentários:
Inicialmente, note que 𝒙 irá representar alguém no conjunto de todos os alunos. 𝒚 representa alguma
matéria que é estudada por 𝒙. Temos a seguinte sentença para traduzi-la em linguagem simbólica:

               “Todo aluno do curso de Informática estuda algum tópico de Matemática Discreta”

Note que podemos reescrever a frase do seguinte modo:

        “Todo aluno do curso de Informática é estudante de algum tópico de Matemática Discreta”

            Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        10
            www.estrategiaconcursos.com.br                                                            30

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Vimos que expressões do tipo "Todo P é Q." pode ser representada simbolicamente por:

                                               ∀𝒙 (𝑷(𝒙) ⟶ 𝑸(𝒙))

Portanto, devemos procurar alternativas que possuam uma condicional. Sabendo disso, podemos eliminar
as alternativas 𝑪 e 𝑬. Agora, vamos descobrir quem é o antecedente e o consequente dessa condicional.
Atente-se aos predicados fornecidos pelo enunciado:

𝐴(𝑥): 𝑥 é aluno.
𝐼(𝑥): 𝑥 é do curso de Informática.
𝐸(𝑥, 𝑦): 𝑥 estuda 𝑦.
𝑇(𝑥): 𝑥 é tópico de Matemática Discreta.

Queremos que 𝒙 seja aluno e seja do curso de informática. Logo, 𝑨(𝒙) ∧ 𝑰(𝒙). Agora, queremos dizer que
esse aluno estuda algum tópico de matemática discreta. Se 𝑥 estuda 𝑦, então 𝑦 é o tópico de matemática
discreta, logo devemos usar 𝑻(𝒚). Para representar "algum", utilizamos o quantificador ∃. Ficamos então
com x estuda y e y é tópico de matemática discreta (𝑻(𝒚) ∧ 𝑬(𝒙, 𝒚))

                              ∀𝑥 ((𝐴(𝑥) ∧ 𝐼(𝑥)) → ∃𝑦(𝑇 (𝑦) ∧ 𝐸 (𝑥, 𝑦)))

Gabarito: LETRA A.

Equivalências Lógicas na LPO

Pessoal, já sabemos que equivalências lógicas caem muito em provas de concurso! Elas são igualmente
cobradas aqui no contexto da Lógica de Primeira Ordem. No entanto, elas aparecerão numa forma
aparentemente mais complexa. Confira, por exemplo, como representamos as leis de De Morgan:


                                  ¬(𝑷(𝒙) ∧ 𝑸(𝒙)) ≡ ¬𝑷(𝒙) ∨ ¬𝑸(𝒙)
                                  ¬(𝑷(𝒙) ∨ 𝑸(𝒙)) ≡ ¬𝑷(𝒙) ∧ ¬𝑸(𝒙)

(ESFCEX/2021) Considere a seguinte sentença quantificada: (∀𝑥) (𝑥 + 3 < 5 ∧ 𝑥 + 7 ≥ 1).

Uma negação para a sentença apresentada é:
A) (∀𝑥) (𝑥 + 3 > 5 ∧ 𝑥 + 7 ≤ 1).
B) (∀𝑥) (𝑥 + 3 ≥ 5 ∨ 𝑥 + 7 < 1).
C) (∃𝑥) (𝑥 + 3 ≥ 5 ∨ 𝑥 + 7 < 1).


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          11
        www.estrategiaconcursos.com.br                                                              30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

D) (∃𝑥) (𝑥 + 3 > 5 ∨ 𝑥 + 7 ≤ 1).
E) (∃𝑥) (𝑥 + 3 ≥ 5 ∧ 𝑥 + 7 < 1).

Comentários:
Temos que negar a proposição apresentada.

O primeiro passo é negar o quantificador. Como na sentença do enunciado tínhamos (∀𝑥), na negação
ficaremos com o (∃𝒙). Sabendo disso, já poderíamos cortar a letra A e a letra B.

O segundo passo é perceber que se trata de uma proposição composta conectadas pelo conectivo ∧. Aqui,
lembramos das leis de De Morgan, ou seja, na negação substituiremos o conectivo ∧ pelo ∨.

Nesse ponto, podemos eliminar a letra E. Ademais, devemos negar cada uma das proposições:

Quando negamos 𝑥 + 3 < 5, ficamos com 𝑥 + 3 ≥ 5.

Quando negamos 𝑥 + 7 ≥ 1, ficamos com 𝑥 + 7 < 1.

Juntando tudo, nossa resposta fica:

                                       (∃𝑥) (𝑥 + 3 ≥ 5 ∨ 𝑥 + 7 < 1)

Gabarito: LETRA C.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        12
        www.estrategiaconcursos.com.br                                                            30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

                                 QUESTÕES COMENTADAS

Lógica de Primeira Ordem

1. (Questão Inédita) Quais das sentenças abaixo é uma sentença aberta?
A) A Secretaria Especial da Receita Federal é um excelente órgão para se trabalhar.
B) O Brasil é a único país hexacampeão do mundo no futebol.
C) Aquele aluno estuda sempre que consegue ter um tempo livre.
D) O Tribunal de Contas da União aprecia as contas do Presidente da República.
E) Machado de Assis escreveu o romance "Memórias Póstumas de Brás Cubas".

Comentários:
Pessoal, questão bem rápida, apenas para treinarmos o que acabamos de ver!

Note que nas alternativas A, B, D e E temos sujeito bem definidos. Esse fato nos permite avaliar com precisão
se o que está sendo falado é verdadeiro ou falso. Quando isso acontecer, a sentença será fechada!

Por sua vez, na alternativa C, temos apenas uma referência à "aquele aluno". Mas que aluno é esse que a
sentença está falando? Eu não sei. Será que ele estuda sempre que tem um tempo livre mesmo? Não
conseguimos avaliar se a sentença é verdadeira ou falsa. Esse é o maior indicativo de que se trata de uma
sentença aberta. Guarde isso:

Se ao ler a sentença você consegue avaliá-la em verdadeiro ou falso, a sentença será fechada.
Se ao ler a sentença você não consegue avaliá-la, trata-se de uma sentença aberta.

Gabarito: LETRA C.

2. (Questão Inédita) Quais das sentenças abaixo é uma sentença aberta?
A) 𝑥 + 1 = 𝑥 + 2
B) 0 ⋅ 𝑥 = 10
C) 100 − 1 = 99
D) 𝑥 2 − 2𝑥 + 1 = 0
E) 3 + 5 = 8

Comentários:
Questão para treinarmos esses mesmos aspectos, agora relacionados às expressões matemáticas.

A) 𝑥 + 1 = 𝑥 + 2
É uma sentença fechada. Observe que o "x" está escrito, mas não tem nenhuma função. Nós podemos cortá-
lo. Na prática, temos a seguinte expressão:

                                                       1=2

E aí? A expressão é verdadeira ou falsa? É falsa, galera!! Como conseguimos avaliá-la, trata-se de uma
sentença fechada.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                13
        www.estrategiaconcursos.com.br                                                                    30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

B) 0 ⋅ 𝑥 = 10
É uma sentença fechada. Mais uma vez, moçada! O "x" está aqui só para confundir a cabeça do aluno. Afinal,
todo número ao ser multiplicado por zero é zero. Na prática, a expressão a ser avaliada é a seguinte:

                                                      0 = 10

E aí?? Trata-se de um absurdo! A expressão é falsa. Como conseguimos fazer essa avaliação, sabemos que
temos uma sentença fechada.

C) 100 − 1 = 99
É uma sentença fechada. Não há variável nenhuma aqui. Sendo assim, podemos avaliá-la sem mistérios.

D) 𝑥 2 − 2𝑥 + 1 = 0
É uma sentença aberta. Note que o "x" não some aqui. Dessa forma, a depender do valor de "x", que não
sabemos qual é, a sentença será verdadeira ou falsa.

E) 3 + 5 = 8
É uma sentença fechada. Nessas situações, como não há variáveis, temos sentenças fechadas.

Gabarito: LETRA D.

3. (Questão Inédita) Dentre as alternativas abaixo, qual não representa uma sentença aberta?
A) Aquele auditor foi o responsável pelo lançamento do crédito tributário.
B) 𝑥 + 10 = 20 para 𝑥 = 10
C) Ele não é uma pessoa confiável.
D) A cidade não foi receptiva com os turistas.
E) 𝑥 2 + 1 = 𝑥

Comentários:
Vamos analisar cada uma das alternativas.

A) Aquele auditor foi o responsável pelo lançamento do crédito tributário.
É uma sentença aberta. Que auditor foi esse? Conseguimos avaliar essa sentença com precisão?

B) 𝑥 + 10 = 20 para 𝑥 = 10
É uma sentença fechada. Note que o "x" está aqui apenas para confundir o aluno. Na verdade, não é uma
variável pois seu valor é dado logo em seguida: "para 𝒙 = 𝟏𝟎". Na prática, a alternativa representa a
seguinte sentença:

                                                  10 + 10 = 20

Note que a expressão é verdadeira, conseguimos avaliá-la. Temos, portanto, uma sentença fechada.

C) Ele não é uma pessoa confiável.
É uma sentença aberta. Ele quem? A sentença é falsa ou verdadeira? Conseguimos afirmar algo?

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             14
        www.estrategiaconcursos.com.br                                                                 30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

D) A cidade não foi receptiva com os turistas.
É uma sentença aberta. Que cidade é essa? Conseguimos dizer se é verdade ou mentira? Não!

E) 𝑥 2 + 1 = 𝑥
É uma sentença aberta. Temos aqui a variável "x". A depender do valor que ela assumir, a sentença será
verdadeira ou falsa. Sem saber, não podemos fazer qualquer avaliação.

Gabarito: LETRA B.

4. (Questão Inédita) Considere a afirmativa "Todo aluno do Estratégia Concursos é aprovado no concurso
dos sonhos". Considere também que os predicados 𝑬(𝒙) e 𝑨(𝒙) representam, respectivamente, que "x é
aluno do Estratégia Concursos" e que "x é aprovado no concurso dos sonhos". Assinale a opção que
representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐸(𝑥) → 𝐴(𝑥))
B) (∃𝑥)(𝐸(𝑥) ∧ 𝐴(𝑥))
C) (¬∃𝑥)(𝐸(𝑥) ∧ 𝐴(𝑥))
D) (∀𝑥)(𝐴(𝑥) → 𝐸(𝑥))
E) (∃𝑥)(𝐸(𝑥) ∨ ¬𝐴(𝑥))

Comentários:
Questão para treinarmos aquela tabela que vimos na teoria!

                             Proposição Categórica         Representação Simbólica
                                    Todo A é B               (∀𝑥)(𝐴(𝑥) → 𝐵(𝑥))
                                   Algum A é B                (∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                  Nenhum A é B               (¬∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                 Algum A não é B             (∃𝑥)(𝐴(𝑥) ∧ ¬𝐵(𝑥))

Observe que a afirmativa do enunciado é da forma "Todo A é B".

Como os predicados são representados por 𝐸(𝑥) e 𝐴(𝑥), podemos escrever:

                                             (∀𝒙)(𝑬(𝒙) → 𝑨(𝒙))

Gabarito: LETRA A.

5. (Questão Inédita) Considere a afirmativa "Nenhum estudante é preguiçoso". Considere também que os
predicados 𝑬(𝒙) e 𝑷(𝒙) representam, respectivamente, que "x é estudante" e que "x é preguiçoso".
Assinale a opção que representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐸(𝑥) → 𝑃(𝑥))
B) (∃𝑥)(𝐸(𝑥) ∧ 𝑃(𝑥))
C) (¬∃𝑥)(𝐸(𝑥) ∧ 𝑃(𝑥))
D) (∀𝑥)(𝑃(𝑥) → 𝐸(𝑥))
E) (∃𝑥)(𝐸(𝑥) ∨ ¬𝑃(𝑥))


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         15
        www.estrategiaconcursos.com.br                                                             30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Comentários:
Mais uma pessoal! Recomendo fortemente que vocês guardem a tabela abaixo no coração!

                             Proposição Categórica                  Representação Simbólica
                                    Todo A é B                        (∀𝑥)(𝐴(𝑥) → 𝐵(𝑥))
                                   Algum A é B                        (∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                  Nenhum A é B                       (¬∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                 Algum A não é B                     (∃𝑥)(𝐴(𝑥) ∧ ¬𝐵(𝑥))

Dessa vez, a afirmativa do enunciado é da forma "Nenhum A é B". Conforme temos na tabela acima e
considerando que os predicados são representados por 𝐸(𝑥) e 𝑃(𝑥), podemos escrever:
                                                       ==219a34==

                                          (¬∃𝒙)(𝑬(𝒙) ∧ 𝑷(𝒙))

Ressalto que também poderíamos escrever:

                                         (∀𝒙)(𝑬(𝒙) → ¬𝑷(𝒙))

Gabarito: LETRA C.

6. (Questão Inédita) Considere a afirmativa "Algum auditor fiscal é professor". Considere também que os
predicados 𝑨(𝒙) e 𝑷(𝒙) representam, respectivamente, que "x é auditor fiscal" e que "x é professor".
Assinale a opção que representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐴(𝑥) → 𝑃(𝑥))
B) (∃𝑥)(𝐴(𝑥) ∧ 𝑃(𝑥))
C) (¬∃𝑥)(𝐴(𝑥) ∧ 𝑃(𝑥))
D) (∀𝑥)(𝐴(𝑥) → 𝑃(𝑥))
E) (∀𝑥)(𝐴(𝑥) ∨ ¬𝑃(𝑥))

Comentários:
Essa é última nessa pegada! Lembre-se da tabela:

                             Proposição Categórica                  Representação Simbólica
                                    Todo A é B                        (∀𝑥)(𝐴(𝑥) → 𝐵(𝑥))
                                   Algum A é B                        (∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                  Nenhum A é B                       (¬∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                 Algum A não é B                     (∃𝑥)(𝐴(𝑥) ∧ ¬𝐵(𝑥))

Note que a afirmativa "Algum auditor fiscal é professor" é da forma "Algum A é B". Conforme a tabela que
montamos e considerando que os predicados são representados por 𝐴(𝑥) e 𝑃(𝑥), podemos escrever:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           16
        www.estrategiaconcursos.com.br                                                               30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

                                            (∃𝒙)(𝑨(𝒙) ∧ 𝑷(𝒙))


Gabarito: LETRA B.

7. (Questão Inédita) Considere a seguinte proposição quantificada:

                                        (∀𝒙)(𝒙 − 𝟏 ≤ 𝟏𝟎 ∧ 𝒙 + 𝟒 > 𝟑)

Assinale a alternativa que representa a negação da proposição acima:
A) (∀𝑥)(𝑥 − 1 ≤ 10 ∨ 𝑥 + 4 > 3)
B) (∀𝑥)(𝑥 − 1 < 10 ∨ 𝑥 + 4 ≥ 3)
C) (∀𝑥)(𝑥 − 1 > 10 ∧ 𝑥 + 4 ≤ 3)
D) (∃𝑥)(𝑥 − 1 > 10 ∨ 𝑥 + 4 ≤ 3)
E) (∃𝑥)(𝑥 − 1 ≤ 10 ∧ 𝑥 + 4 > 3)

Comentários:
Galera, nessas situações devemos ficar atentos! Queremos negar uma proposição quantificada. Quando isso
acontece, sempre trocamos o quantificador. Portanto, se a proposição do enunciado tem o quantificador ∀,
então a sua negação terá o quantificador ∃. Sabendo disso, já podemos ficar entre as alternativas D e E.

Por sua vez, observe que a proposição é composta e de forma 𝑨(𝒙) ∧ 𝑩(𝒙). Lembre-se que na negação de
conjunções ou disjunções, nós sempre usamos as leis de De Morgan.


                                  ¬(𝑷(𝒙) ∧ 𝑸(𝒙)) ≡ ¬𝑷(𝒙) ∨ ¬𝑸(𝒙)
                                  ¬(𝑷(𝒙) ∨ 𝑸(𝒙)) ≡ ¬𝑷(𝒙) ∧ ¬𝑸(𝒙)

Com isso, a negação da proposição quantificada em questão deve necessariamente ser uma disjunção (∨).
Observando as alternativas, percebemos que a única possível de ser a resposta é a letra D. De qualquer
forma, vamos terminar de resolver o exercício, fazendo as negações das proposições individualmente.

Observe a proposição do enunciado:

                                        (∀𝒙)(𝒙 − 𝟏 ≤ 𝟏𝟎 ∧ 𝒙 + 𝟒 > 𝟑)

Note que podemos reescrevê-la na forma:

                                               (∀𝒙)(𝑷(𝒙) ∧ 𝑸(𝒙))

Portanto, sua negação é:

                                             (∃𝒙)(¬𝑷(𝒙) ∨ ¬𝑸(𝒙))

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           17
        www.estrategiaconcursos.com.br                                                               30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Nesse momento, vamos encontrar ¬𝑃(𝑥) e ¬𝑄(𝑥).

Ora, se 𝑃(𝑥) está nos dizendo que "x-1 é menor ou igual a 10", então sua negação vai nos dizer que "x-1
não é menor nem é igual a 10". Dito com outras palavras, "x-1 é maior que 10".

                                               ¬𝑃(𝑥): 𝑥 − 1 > 10
Com raciocínio análogo:

                                                ¬𝑄(𝑥): 𝑥 + 4 ≤ 3

Juntando as informações:

Proposição Original:    (∀𝑥)(𝑥 − 1 ≤ 10 ∧ 𝑥 + 4 > 3)

Negação:                (∃𝑥)(𝑥 − 1 > 10 ∨ 𝑥 + 4 ≤ 3)

Gabarito: LETRA D.

8. (Questão Inédita) Considere a seguinte proposição quantificada:

                                         (∃𝒙)(𝒙 − 𝟏 = 𝟑 ∨ 𝒙 + 𝟏 < 𝟑)

Assinale a alternativa que representa a negação da proposição acima:
A) (∀𝑥)(𝑥 − 1 = 3 ∨ 𝑥 + 1 < 3)
B) (∃𝑥)(𝑥 − 1 ≠ 3 ∨ 𝑥 + 1 ≥ 3)
C) (∀𝑥)(𝑥 − 1 = 3 ∧ 𝑥 + 1 < 3)
D) (∃𝑥)(𝑥 − 1 = 3 ∨ 𝑥 + 1 ≤ 3)
E) (∀𝑥)(𝑥 − 1 ≠ 3 ∧ 𝑥 + 1 ≥ 3)

Comentários:
Mais uma no estilo da anterior para treinarmos! Observe que a proposição do enunciado é da forma:

                                               (∃𝑥)(𝑃(𝑥) ∨ 𝑄(𝑥))

Com o isso, a negação será na forma:

                                             (∀𝑥)(¬𝑃(𝑥) ∧ ¬𝑄(𝑥))

Note que trocamos o quantificador, trocamos a conjunção pela disjunção e negamos as proposições
individualmente (lei de De Morgan). Sendo assim, nosso trabalho agora é negar 𝑷(𝒙) e 𝑸(𝒙). Observe que:

                                            𝑃(𝑥):     𝑥 − 1 é igual a 3

Sua negação é:

                                         ¬𝑃(𝑥):     𝑥 − 1 não é igual a 3.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          18
        www.estrategiaconcursos.com.br                                                              30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Ou, dito de outra forma:

                                        ¬𝑃(𝑥):      𝑥 − 1 é diferente de 3.

Da forma análoga, temos que:
                                        𝑄(𝑥):     𝑥 + 1 é menor do que 3.

Sua negação é:

                                    ¬𝑄(𝑥):       𝑥 + 1 não é menor do que 3.

Ou, dito de outra forma:

                                       ¬𝑄(𝑥):     𝑥 + 1 é maior ou igual a 3.

Quando juntamos todas essas informações, ficamos com o seguinte:

Proposição Original:    (∃𝑥)(𝑥 − 1 = 3 ∨ 𝑥 + 1 < 3)

Negação:                (∀𝑥)(𝑥 − 1 ≠ 3 ∧ 𝑥 + 1 ≥ 3)

Gabarito: LETRA E.

9. (Questão Inédita) Julgue as afirmativas abaixo, considerando 𝑼 = {𝟎, 𝟐, 𝟒, 𝟔, 𝟖}.

( ) (∀𝒙 ∈ 𝑼)(𝒙 é 𝒑𝒂𝒓)
( ) (∃𝒙 ∈ 𝑼)(𝒙 + 𝟏 = 𝟑)
( ) (∀𝒙 ∈ 𝑼)(𝒙 > 𝟎)
( ) (∃𝒙 ∈ 𝑼)(𝒙 − 𝟓 > 𝟐)

Assinale a alternativa que apresenta a sequência correta dos valores lógicos das proposições.
A) V - F - F - F
B) V - V - V - V
C) V - V- F - V
D) F - V - F - V
E) F - F - F - F

Comentários:
Vamos analisar as afirmativa uma a uma.

(V) (∀𝑥 ∈ 𝑈)(𝑥 é 𝑝𝑎𝑟)
Tradução: "para todo 𝐱 pertencente a U, x é par".

Realmente! Observe que todos os elementos de U são números pares. Portanto, a proposição é verdadeira.

(V) (∃𝑥 ∈ 𝑈)(𝑥 + 1 = 3)
Tradução: "existe 𝒙 pertencente a U tal que 𝒙 + 𝟏 é igual a 3".


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         19
        www.estrategiaconcursos.com.br                                                             30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Observe que quando 𝑥 = 2, temos 2 + 1 = 3. Como 2 ∈ 𝑈, então realmente existe esse 𝑥.

(F) (∀𝑥 ∈ 𝑈)(𝑥 > 0)
Tradução: "para todo 𝒙 pertencente a U, 𝒙 é maior do que zero".
Dessa vez, temos uma proposição falsa, já que o próprio zero pertence a 𝑈 e zero não é maior do que zero.
Um jeito de escrever a fórmula de forma a tornar a proposição verdadeira seria:

                                                 (∀𝑥 ∈ 𝑈)(𝑥 ≥ 0)

(V) (∃𝑥 ∈ 𝑈)(𝑥 − 5 > 2)
Tradução: "existe x pertencente a 𝑼 tal que 𝒙 − 𝟓 é maior do que 2".

Observe que quando 𝑥 = 8, temos:

                                            8−5> 2         →      3>2

Como 3 é maior do que 2, podemos concluir que realmente existe o 𝑥 em U tal que 𝑥 − 5 > 2.

Gabarito: LETRA C.

10. (Questão Inédita) Julgue as afirmativas abaixo, considerando 𝑼 = {𝟎, 𝟑, 𝟔, 𝟖, 𝟏𝟎}.

( ) (∀𝒙 ∈ 𝑼)(𝟐𝒙 + 𝟏 > 𝟑)
( ) (∃𝒙 ∈ 𝑼)(𝒙 − 𝟏 = 𝟗)
( ) (∃𝒙 ∈ 𝑼)(𝒙 ≤ 𝟎)
( ) (∀𝒙 ∈ 𝑼)(𝒙 − 𝟓 = 𝟐)

Assinale a alternativa que apresenta a sequência correta dos valores lógicos das proposições.
A) V - V - F - F
B) F - V - V - V
C) F - V - V - F
D) V - F - F - V
E) V - F - V - F

Comentários:
Mais uma no estilo da anterior! Para reforçar!

(F) (∀𝑥 ∈ 𝑈)(2𝑥 + 1 > 3)
Tradução: "para todo x pertencente a U, 2𝑥 + 1 é maior do que 3"

Observe que isso não é verdade para 𝑥 = 0, pois ficamos com 1 > 3. Sendo assim, a proposição é falsa.

(V) (∃𝑥 ∈ 𝑈)(𝑥 − 1 = 9)
Tradução: "existe 𝑥 pertencente a U tal que 𝑥 − 1 é igual a 9"

Observe que quando 𝑥 = 10, realmente temos 10 − 1 = 9. Com isso, a proposição é verdadeira.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              20
        www.estrategiaconcursos.com.br                                                                  30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

(V) (∃𝑥 ∈ 𝑈)(𝑥 ≤ 0)
Tradução: "existe x pertencente a U tal que 𝑥 é menor ou igual a 0".

Observe que a proposição é verdadeira pois 𝑥 = 0 está em U.

(F) (∀𝑥 ∈ 𝑈)(𝑥 − 5 = 2)
Tradução: "para todo 𝑥 pertencente a 𝑈, 𝑥 − 5 é igual a 2".

Claramente errado, pessoal. O "para todo" complica a situação. Observe que quando 𝑥 = 0, ficamos com:

                                                      −5 = 2

Logo, a proposição é falsa.

Gabarito: LETRA C.

11. (Questão Inédita) Assinale a opção que corresponde a negação da fórmula (∃𝒙)(𝑷𝒙 → 𝑸𝒙 ∨ 𝑹𝒙).
A) (∃𝑥)(𝑃𝑥 → 𝑄𝑥 ∨ 𝑅𝑥).
B) (∀𝑥)(𝑃𝑥 ∧ (¬𝑄𝑥 ∧ ¬𝑅𝑥)) .
C) (∃𝑥)(¬𝑃𝑥 ∨ 𝑄𝑥 ∨ 𝑅𝑥).
D) (¬∀𝑥)(𝑃𝑥 → 𝑄𝑥 ∨ 𝑅𝑥).
E) (∃𝑥)(𝑃𝑥 ∧ ¬𝑄𝑥 ∨ ¬𝑅𝑥).

Comentários:
Na negação de proposições quantificadas, devemos sempre substituir o quantificador.

Como a fórmula da questão possui o quantificador ∃, então sua negação terá ∀.

Além disso, observe que temos uma condicional. Lembre-se da negação da condicional.


                                            ~(𝑝 ⇒ 𝑞) ≡ 𝑝 ∧ ~𝑞

Portanto, devemos manter 𝑃𝑥 e negar 𝑸𝒙 ∨ 𝑹𝒙.

Ora, na negação de uma conjunção, usamos a Lei de De Morgan.


                                         ¬(𝑷𝑥 ∨ 𝑸𝑥) ≡ ¬𝑷𝑥 ∧ ¬𝑸x

Observe que em uma mesma questão usamos várias coisas que estamos construindo ao longo do curso!

Com isso, temos:

Proposição Original: (∃𝒙)(𝑷𝒙 → 𝑸𝒙 ∨ 𝑹𝒙)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          21
        www.estrategiaconcursos.com.br                                                              30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Negação:               (∀𝒙)(𝑷𝒙 ∧ (¬𝑸𝒙 ∧ ¬𝑹𝒙))

Gabarito: LETRA B.

12. (Questão Inédita) Assinale a opção que corresponde a negação da fórmula (∀𝒙)(𝑷𝒙 ∧ 𝑹𝒙 → 𝑸𝒙).
A) (∃𝑥)(¬𝑃𝑥 ∨ ¬𝑅𝑥 → 𝑄𝑥).
B) (∀𝑥)(𝑃𝑥 ∧ ¬𝑅𝑥 ∧ 𝑄𝑥).
C) (∃𝑥)(𝑃𝑥 ∧ 𝑅𝑥 ∧ ¬𝑄𝑥).
D) (¬∀𝑥)((𝑃𝑥 → 𝑅𝑥) → 𝑄𝑥).
E) (∃𝑥)(𝑃𝑥 ∧ ¬𝑅𝑥 ∨ ¬𝑄𝑥).

Comentários:
Questão bem semelhante a que fizemos anteriormente.

Na negação de proposições quantificadas, devemos sempre substituir o quantificador.

Como a fórmula da questão possui o quantificador ∀, então sua negação terá ∃.

Além disso, observe que temos uma condicional. Lembre-se da negação da condicional.


                                            ~(𝑝 ⇒ 𝑞) ≡ 𝑝 ∧ ~𝑞

Portanto, devemos manter 𝑃𝑥 ∧ 𝑅𝑥 e negar 𝑸𝒙.

Com isso, temos:

Proposição Original: (∀𝒙)(𝑷𝒙 ∧ 𝑹𝒙 → 𝑸𝒙)

Negação:               (∃𝒙)(𝑷𝒙 ∧ 𝑹𝒙 ∧ ¬𝑸𝒙)

Gabarito: LETRA C.

13. (Questão Inédita) Assinale a alternativa que apresenta uma proposição com algum predicado binário.
A) (∀𝑥)(𝐴(𝑥) ∨ 𝐵(𝑥))
B) (∀𝑥∃𝑦)(𝐴(𝑥) ∨ 𝐵(𝑦))
C) (∃𝑥𝐴(𝑥) ∧ ∀𝑦𝐵(𝑦))
D) (∀𝑥)(𝐴(𝑥) ∧ ∃𝑦𝐵(𝑥, 𝑦))
E) (∀𝑥𝑦)(𝐴(𝑥) → ∃𝑧𝐵(𝑥, 𝑦, 𝑧))

Comentários:
Galera, predicados binários são predicados que envolvem dois objetos. Por exemplo:

𝑇(𝑥, 𝑦): x trabalha em 𝑦
𝐸(𝑥, 𝑦): x estuda y
𝑀(𝑥, 𝑦): x mora em y


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         22
        www.estrategiaconcursos.com.br                                                             30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Também dizemos que esses predicados possuem aridade igual a 2.

A única alternativa que apresenta um predicado desse tipo é a alternativa D (por causa do 𝐵(𝑥, 𝑦)).

Gabarito: LETRA D.

14. (Questão Inédita) Julgue as afirmativas abaixo:

I. A representação simbólica de "Todo A é B" é (∀𝒙)(𝑨(𝒙) → 𝑩(𝒙))
II. A representação simbólica de "Algum A é B" é (∃𝒙)(𝑨(𝒙) ∧ 𝑩(𝒙))
III. A representação simbólica de "Nenhum A é B" é (∀𝒙)(𝑨(𝒙) → ¬𝑩(𝒙))
IV. A representação simbólica de "Algum A não é B" é (∃𝒙)(𝑨(𝒙) ∧ ¬𝑩(𝒙))

Assinale a opção correta:
A) Apenas uma está correta.
B) Duas afirmativas estão corretas.
C) Três afirmativas estão corretas.
D) Todas as afirmativas estão corretas.
E) Nenhuma afirmativa está correta.

Comentários:
Note que estou insistindo bastante nessas representações! São as mais cobradas. Portanto, atenção nelas!

Todas as afirmativas estão corretas, inclusive a III.

Note que mudei a representação que usualmente vínhamos fazendo para "Nenhum A é B". Observe a tabela.

                             Proposição Categórica         Representação Simbólica
                                    Todo A é B               (∀𝑥)(𝐴(𝑥) → 𝐵(𝑥))
                                   Algum A é B                (∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                  Nenhum A é B               (¬∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥))
                                 Algum A não é B             (∃𝑥)(𝐴(𝑥) ∧ ¬𝐵(𝑥))

A representação que mais costuma aparecer em prova é realmente (¬∃𝑥)(𝐴(𝑥) ∧ 𝐵(𝑥)).

No entanto, (∀𝒙)(𝑨(𝒙) → ¬𝑩(𝒙)) também é uma representação válida (e até melhor) para representar
que "Nenhum A é B". Observe que a tradução seria:

                   (∀𝒙)(𝑨(𝒙) → ¬𝑩(𝒙)):             para todo x,       se x é A então x não é B

É exatamente a ideia por trás de "Nenhum A é B".

Logo, a alternativa correta é a letra D.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            23
        www.estrategiaconcursos.com.br                                                                30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

Gabarito: LETRA D.

15. (Questão Inédita) Julgue as afirmativas abaixo:

I. O quantificador universal é representado pelo símbolo ∃.
II. O quantificador existencial é representado pelo símbolo ∀.
III. Um predicado ternário possui aridade igual a 3.
IV. 𝑷(𝑱𝒐ã𝒐) pode representar a proposição "João é professor".

Assinale a opção correta:
A) Apenas uma está correta.
B) Duas afirmativas estão corretas.
C) Três afirmativas estão corretas.
D) Todas as afirmativas estão corretas.
E) Nenhuma afirmativa está correta.

Comentários:
I. O quantificador universal é representado pelo símbolo ∃.
Errado. O quantificador universal é representado pelo símbolo ∀.

II. O quantificador existencial é representado pelo símbolo ∀.
Errado. O quantificador existencial é representado pelo símbolo ∃.

III. Um predicado ternário possui aridade igual a 3.
Correto. Um predicado ternário é aquele que possui três objetos/argumentos. Por exemplo:

𝐹(𝑥, 𝑦, 𝑧): x é filho de y e de z.

Nessas situações, dizemos que o predicado possui aridade igual a 3.

IV. 𝑃(𝐽𝑜ã𝑜) pode representar a proposição "João é professor".
Correto. Considere que 𝑃(𝑥) seja a função-predicado "x é professor".

Quando 𝑥 = 𝐽𝑜ã𝑜, podemos escrever:
P(João): João é professor.

Gabarito: Letra B.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                24
         www.estrategiaconcursos.com.br                                                    30

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 03

                                       LISTA DE QUESTÕES

Lógica de Primeira Ordem

1. (Questão Inédita) Quais das sentenças abaixo é uma sentença aberta?
A) A Secretaria Especial da Receita Federal é um excelente órgão para se trabalhar.
B) O Brasil é a único país hexacampeão do mundo no futebol.
C) Aquele aluno estuda sempre que consegue ter um tempo livre.
D) O Tribunal de Contas da União aprecia as contas do Presidente da República.
E) Machado de Assis escreveu o romance "Memórias Póstumas de Brás Cubas".

2. (Questão Inédita) Quais das sentenças abaixo é uma sentença aberta?
A) 𝑥 + 1 = 𝑥 + 2
B) 0 ⋅ 𝑥 = 10
C) 100 − 1 = 99
D) 𝑥 2 − 2𝑥 + 1 = 0
E) 3 + 5 = 8

3. (Questão Inédita) Dentre as alternativas abaixo, qual não representa uma sentença aberta?
A) Aquele auditor foi o responsável pelo lançamento do crédito tributário.
B) 𝑥 + 10 = 20 para 𝑥 = 10
C) Ele não é uma pessoa confiável.
D) A cidade não foi receptiva com os turistas.
E) 𝑥 2 + 1 = 𝑥

4. (Questão Inédita) Considere a afirmativa "Todo aluno do Estratégia Concursos é aprovado no concurso
dos sonhos". Considere também que os predicados 𝑬(𝒙) e 𝑨(𝒙) representam, respectivamente, que "x é
aluno do Estratégia Concursos" e que "x é aprovado no concurso dos sonhos". Assinale a opção que
representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐸(𝑥) → 𝐴(𝑥))
B) (∃𝑥)(𝐸(𝑥) ∧ 𝐴(𝑥))
C) (¬∃𝑥)(𝐸(𝑥) ∧ 𝐴(𝑥))
D) (∀𝑥)(𝐴(𝑥) → 𝐸(𝑥))
E) (∃𝑥)(𝐸(𝑥) ∨ ¬𝐴(𝑥))

5. (Questão Inédita) Considere a afirmativa "Nenhum estudante é preguiçoso". Considere também que os
predicados 𝑬(𝒙) e 𝑷(𝒙) representam, respectivamente, que "x é estudante" e que "x é preguiçoso".
Assinale a opção que representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐸(𝑥) → 𝑃(𝑥))
B) (∃𝑥)(𝐸(𝑥) ∧ 𝑃(𝑥))
C) (¬∃𝑥)(𝐸(𝑥) ∧ 𝑃(𝑥))
D) (∀𝑥)(𝑃(𝑥) → 𝐸(𝑥))
E) (∃𝑥)(𝐸(𝑥) ∨ ¬𝑃(𝑥))

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         25
        www.estrategiaconcursos.com.br                                                             30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

6. (Questão Inédita) Considere a afirmativa "Algum auditor fiscal é professor". Considere também que os
predicados 𝑨(𝒙) e 𝑷(𝒙) representam, respectivamente, que "x é auditor fiscal" e que "x é professor".
Assinale a opção que representa corretamente a afirmativa acima de acordo com a Lógica de Predicados:
A) (∀𝑥)(𝐴(𝑥) → 𝑃(𝑥))
B) (∃𝑥)(𝐴(𝑥) ∧ 𝑃(𝑥))
C) (¬∃𝑥)(𝐴(𝑥) ∧ 𝑃(𝑥))
D) (∀𝑥)(𝐴(𝑥) → 𝑃(𝑥))
E) (∀𝑥)(𝐴(𝑥) ∨ ¬𝑃(𝑥))

7. (Questão Inédita) Considere a seguinte proposição quantificada:

                                        (∀𝒙)(𝒙 − 𝟏 ≤ 𝟏𝟎 ∧ 𝒙 + 𝟒 > 𝟑)

Assinale a alternativa que representa a negação da proposição acima:
                                                       ==219a34==

A) (∀𝑥)(𝑥 − 1 ≤ 10 ∨ 𝑥 + 4 > 3)
B) (∀𝑥)(𝑥 − 1 < 10 ∨ 𝑥 + 4 ≥ 3)
C) (∀𝑥)(𝑥 − 1 > 10 ∧ 𝑥 + 4 ≤ 3)
D) (∃𝑥)(𝑥 − 1 > 10 ∨ 𝑥 + 4 ≤ 3)
E) (∃𝑥)(𝑥 − 1 ≤ 10 ∧ 𝑥 + 4 > 3)

8. (Questão Inédita) Considere a seguinte proposição quantificada:

                                         (∃𝒙)(𝒙 − 𝟏 = 𝟑 ∨ 𝒙 + 𝟏 < 𝟑)

Assinale a alternativa que representa a negação da proposição acima:
A) (∀𝑥)(𝑥 − 1 = 3 ∨ 𝑥 + 1 < 3)
B) (∃𝑥)(𝑥 − 1 ≠ 3 ∨ 𝑥 + 1 ≥ 3)
C) (∀𝑥)(𝑥 − 1 = 3 ∧ 𝑥 + 1 < 3)
D) (∃𝑥)(𝑥 − 1 = 3 ∨ 𝑥 + 1 ≤ 3)
E) (∀𝑥)(𝑥 − 1 ≠ 3 ∧ 𝑥 + 1 ≥ 3)

9. (Questão Inédita) Julgue as afirmativas abaixo, considerando 𝑼 = {𝟎, 𝟐, 𝟒, 𝟔, 𝟖}.

( ) (∀𝒙 ∈ 𝑼)(𝒙 é 𝒑𝒂𝒓)
( ) (∃𝒙 ∈ 𝑼)(𝒙 + 𝟏 = 𝟑)
( ) (∀𝒙 ∈ 𝑼)(𝒙 > 𝟎)
( ) (∃𝒙 ∈ 𝑼)(𝒙 − 𝟓 > 𝟐)

Assinale a alternativa que apresenta a sequência correta dos valores lógicos das proposições.
A) V - F - F - F
B) V - V - V - V
C) V - V- F - V
D) F - V - F - V
E) F - F - F - F

10. (Questão Inédita) Julgue as afirmativas abaixo, considerando 𝑼 = {𝟎, 𝟑, 𝟔, 𝟖, 𝟏𝟎}.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          26
        www.estrategiaconcursos.com.br                                                              30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

( ) (∀𝒙 ∈ 𝑼)(𝟐𝒙 + 𝟏 > 𝟑)
( ) (∃𝒙 ∈ 𝑼)(𝒙 − 𝟏 = 𝟗)
( ) (∃𝒙 ∈ 𝑼)(𝒙 ≤ 𝟎)
( ) (∀𝒙 ∈ 𝑼)(𝒙 − 𝟓 = 𝟐)

Assinale a alternativa que apresenta a sequência correta dos valores lógicos das proposições.
A) V - V - F - F
B) F - V - V - V
C) F - V - V - F
D) V - F - F - V
E) V - F - V - F

11. (Questão Inédita) Assinale a opção que corresponde a negação da fórmula (∃𝒙)(𝑷𝒙 → 𝑸𝒙 ∨ 𝑹𝒙).
A) (∃𝑥)(𝑃𝑥 → 𝑄𝑥 ∨ 𝑅𝑥).
B) (∀𝑥)(𝑃𝑥 ∧ (¬𝑄𝑥 ∧ ¬𝑅𝑥)) .
C) (∃𝑥)(¬𝑃𝑥 ∨ 𝑄𝑥 ∨ 𝑅𝑥).
D) (¬∀𝑥)(𝑃𝑥 → 𝑄𝑥 ∨ 𝑅𝑥).
E) (∃𝑥)(𝑃𝑥 ∧ ¬𝑄𝑥 ∨ ¬𝑅𝑥).

12. (Questão Inédita) Assinale a opção que corresponde a negação da fórmula (∀𝒙)(𝑷𝒙 ∧ 𝑹𝒙 → 𝑸𝒙).
A) (∃𝑥)(¬𝑃𝑥 ∨ ¬𝑅𝑥 → 𝑄𝑥).
B) (∀𝑥)(𝑃𝑥 ∧ ¬𝑅𝑥 ∧ 𝑄𝑥).
C) (∃𝑥)(𝑃𝑥 ∧ 𝑅𝑥 ∧ ¬𝑄𝑥).
D) (¬∀𝑥)((𝑃𝑥 → 𝑅𝑥) → 𝑄𝑥).
E) (∃𝑥)(𝑃𝑥 ∧ ¬𝑅𝑥 ∨ ¬𝑄𝑥).

13. (Questão Inédita) Assinale a alternativa que apresenta uma proposição com algum predicado binário.
A) (∀𝑥)(𝐴(𝑥) ∨ 𝐵(𝑥))
B) (∀𝑥∃𝑦)(𝐴(𝑥) ∨ 𝐵(𝑦))
C) (∃𝑥𝐴(𝑥) ∧ ∀𝑦𝐵(𝑦))
D) (∀𝑥)(𝐴(𝑥) ∧ ∃𝑦𝐵(𝑥, 𝑦))
E) (∀𝑥𝑦)(𝐴(𝑥) → ∃𝑧𝐵(𝑥, 𝑦, 𝑧))

14. (Questão Inédita) Julgue as afirmativas abaixo:

I. A representação simbólica de "Todo A é B" é (∀𝒙)(𝑨(𝒙) → 𝑩(𝒙))
II. A representação simbólica de "Algum A é B" é (∃𝒙)(𝑨(𝒙) ∧ 𝑩(𝒙))
III. A representação simbólica de "Nenhum A é B" é (∀𝒙)(𝑨(𝒙) → ¬𝑩(𝒙))
IV. A representação simbólica de "Algum A não é B" é (∃𝒙)(𝑨(𝒙) ∧ ¬𝑩(𝒙))

Assinale a opção correta:
A) Apenas uma está correta.
B) Duas afirmativas estão corretas.
C) Três afirmativas estão corretas.
D) Todas as afirmativas estão corretas.
E) Nenhuma afirmativa está correta.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         27
        www.estrategiaconcursos.com.br                                                             30

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 03

15. (Questão Inédita) Julgue as afirmativas abaixo:

I. O quantificador universal é representado pelo símbolo ∃.
II. O quantificador existencial é representado pelo símbolo ∀.
III. Um predicado ternário possui aridade igual a 3.
IV. 𝑷(𝑱𝒐ã𝒐) pode representar a proposição "João é professor".

Assinale a opção correta:
A) Apenas uma está correta.
B) Duas afirmativas estão corretas.
C) Três afirmativas estão corretas.
D) Todas as afirmativas estão corretas.
E) Nenhuma afirmativa está correta.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   28
        www.estrategiaconcursos.com.br                                       30

                                    


---

Equipe Exatas Estratégia Concursos
Aula 03

                                              GABARITO
    1.    LETRA C                                                   9. LETRA C
    2.    LETRA D                                                   10. LETRA C
    3.    LETRA B                                                   11. LETRA B
    4.    LETRA A                                                   12. LETRA C
    5.    LETRA C                                                   13. LETRA D
    6.    LETRA B                                                   14. LETRA D
    7.    LETRA D                                                   15. LETRA B
    8.    LETRA E

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático          29
      www.estrategiaconcursos.com.br                                              30

                                  


---

---
