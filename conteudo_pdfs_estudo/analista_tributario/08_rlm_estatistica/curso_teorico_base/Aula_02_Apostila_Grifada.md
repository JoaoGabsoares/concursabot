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
arquivo_origem: Aula 02_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '02'
titulo_aula: Índice
---

# Índice

Índice
1)  Equivalências Lógicas


)  Álgebra de Proposições                                                                                                                                                                  48

3)  Questões Comentadas - Equivalências Lógicas - FGV                                                                                                                                       65
)  Lista de Questões - Equivalências Lógicas - FGV                                                                                                                                       132
..............................................................................................................................................................................................


---

                               APRESENTAÇÃO DA AULA
Fala, pessoal!

O principal assunto da aula de hoje é equivalências lógicas.

O entendimento da aula é muito importante, porém igualmente importante é que você DECORE as
principais equivalências lógicas. Equivalências lógicas existem para serem usadas, e o uso delas requer que
você tenha as principais fórmulas "no sangue".

Em seguida, será abordado álgebra de proposições. Nesse assunto, você deve focar nas propriedades
comutativa, associativa e distributiva.

Como de costume, vamos exibir um resumo logo no início de cada tópico para que você tenha uma visão
geral do conteúdo antes mesmo de iniciar o assunto.

                         Conte comigo nessa caminhada =)

                         Prof. Eduardo Mocellin.

                              @edu.mocellin


---

EQUIVALÊNCIAS LÓGICAS

                                              Equivalências lógicas
  Duas proposições A e B são equivalentes quando todos os valores lógicos (V ou F) assumidos por elas são
  iguais para todas as combinações de valores lógicos atribuídos às proposições simples que as compõem.
                                           Equivalências fundamentais

                                                  p→q ≡ ~q→~p
                                                     Contrapositiva


                                                    p→q ≡ ~p∨q
                                   Transformação da condicional em disjunção inclusiva


                                                    p∨q ≡~p→q
                                   Transformação da disjunção inclusiva em condicional

                                              pq ≡ (p→q)∧(q→p)
                                Transformação da bicondicional em condicional/conjunção

                             Equivalências provenientes da negação de proposições

  Dupla negação da proposição simples

                                                      ~(~p) ≡ p

  Negação da conjunção e da disjunção inclusiva (leis de De Morgan)
  Para negar "e": negar ambas as proposições e trocar por "ou".

                                                ~ (p∧ q) ≡~p ∨~q

  Para negar "ou": negar ambas as proposições e trocar por "e".

                                                ~ (p∨q) ≡~p ∧~q

  Negação da condicional
                                                 ~ (p→q) ≡ p∧~q


  Negação da disjunção exclusiva
                                                  ~(p∨q) ≡ pq

  Negação da bicondicional
                                                  ~(pq) ≡ p∨q

                                               ~(pq) ≡ (~ p)q

                                               ~(pq) ≡ p(~ q)

                                         ~(pq) ≡ ( p∧~q) ∨ (q∧~p)


---

                                            Outras equivalências


Equivalência do conectivo bicondicional

                                            pq ≡ (~p)(~q)

Negação da conjunção para a forma condicional

                                             ~(p∧q) ≡ p→~q

                                             ~(p∧q) ≡ q →~p


Conjunção de condicionais

Quando o termo comum é o consequente, a equivalência apresenta uma disjunção inclusiva no
antecedente.
                               (p→r)∧(q→r) ≡ (p∨q)→r

Quanto o termo comum é o antecedente, a equivalência apresenta uma conjunção no consequente.

                                          (p→q)∧(p→r) ≡ p→(q∧r)


---

O que é uma equivalência lógica

Quando duas proposições apresentam a mesma tabela-verdade dizemos que as proposições são
equivalentes.

A representação da equivalência lógica é dada pelo o símbolo ⇔ ou ≡. Se A é equivalente a B, podemos
escrever de duas maneiras:

                                                 A⇔B

                                                 A≡B

          Observação: o símbolo de equivalência ⇔ é diferente do conectivo bicondicional 

Informalmente, podemos dizer que duas proposições são equivalentes quando elas têm o mesmo
significado. Exemplo:

                                       a: "Eu moro em Taubaté."

                           b: "Não é verdade que eu não moro em Taubaté."

O conceito de equivalência lógica pode ser melhor detalhado assim:

        Duas proposições A e B são equivalentes quando todos os valores lógicos (V ou F)
        assumidos por elas são iguais para todas as combinações de valores lógicos atribuídos às
        proposições simples que as compõem.

Vejamos um exemplo:

Mostre que as proposições (p→q)∧(q→p) e pq são equivalentes.
Para resolver esse problema, basta construirmos a tabela-verdade de ambas proposições. A bicondicional já
é conhecida por nós, então precisamos simplesmente confeccionar a tabela-verdade de (p→q)∧(q→p) e
comparar com a bicondicional pq.


Passo 1: determinar o número de linhas da tabela-verdade.
Número de linhas = 2𝑛 = 22 = 4.


---

Passo 2: desenhar o esquema da tabela-verdade.
Devemos determinar:
(p→q)∧(q→p) ; (p→q) ; (q→p) ; p ; q
Podemos também incluir, de imediato, na nossa tabela a condicional pq, pois vamos compará-la com a
expressão que estamos querendo obter.

Passo 3: atribuir V ou F às proposições simples de maneira alternada.

Passo 4: obter o valor das demais proposições.
Para os condicionais, temos que eles só serão falsos nos casos em que o precedente é verdadeiro e o
consequente é falso.

A conjunção (p→q)∧(q→p) só será verdadeira quando (p→q) for verdadeiro e quando (q→p) for verdadeiro.


---

Para a bicondicional, já sabemos que ela será verdadeira quando p e q forem ambos verdadeiros ou ambos
falsos.

Podemos perceber da análise da tabela-verdade acima que (p→q)∧(q→p) e pq assumem os exatos
mesmos valores lógicos para todas as possibilidades de p e q. Logo, as proposições são equivalentes. Veja:

Podemos escrever:
                                         pq ⇔ (p→q)∧(q→p)
                                                   ou
                                          pq ≡ (p→q)∧(q→p)


---

Equivalências fundamentais

Existem quatro equivalências fundamentais que devem ser entendidas e memorizadas. Dê especial atenção
aos três primeiros casos que não só caem, mas despencam em provas de concurso público.

A primeira equivalência fundamental é conhecida como contrapositiva da condicional:

                                               p→q ≡ ~q→~p

A equivalência é realizada do seguinte modo:

    1. Invertem-se as posições do antecedente e do consequente; e
    2. Negam-se ambos os termos da condicional.

Como exemplo, sejam as proposições:

                                              p: “Hoje choveu.”

                                          q: “João fez a barba.”

A condicional dessas duas proposições pode ser escrita por:

                            p→q: "Se [hoje choveu], então [João fez a barba]."

Observe que a frase seguinte é equivalente:

                        ~q→~p: "Se [João não fez a barba], então [não choveu]."

        Um erro muito explorado pelas bancas é dizer que p→q seria equivalente a ~p→~q. Isso
        porque é muito comum no dia-a-dia as pessoas cometerem esse erro.

        Observe o exemplo acima: "se hoje choveu, então João fez a barba". Vamos supor que não
        choveu. O que podemos afirmar sobre barba de João? Absolutamente nada, ele pode tanto
        ter feito quanto não ter feito a barba.

        Por outro lado, podemos afirmar sem dúvida que ~q→~p, isto é, "se João não fez a barba,
        então hoje não choveu".

                             Em resumo: p→q não é equivalente a ~p→~q.


---

Mostre que são equivalentes p→q e ~q→~p.
Para mostrar a equivalência, montaremos a tabela-verdade de ~q→~p e compararemos com p→q.
Passos 1, 2 e 3: determinar o número de linhas, desenhar o esquema e atribuir V ou F às proposições
simples de maneira alternada.
Vamos também incluir p→q para fins de comparação.

Passo 4: obter o valor das demais proposições.
Para obter ~p e ~q, basta inverter o valor lógico de p e de q.

Para obter ~q→~p, basta observar que ela só será falsa quando ~q for verdadeiro ~p for falso.

Por fim, podemos incluir na tabela a condicional p→q e comparar os valores lógicos assumidos por ~q→~p.

Observe que os valores lógicos são exatamente iguais e, portanto, p→q e ~q→~p são equivalentes.
                                              p→q ≡ ~q→~p


---

Vamos resolver dois exercícios envolvendo essa equivalência que acabamos de aprender.

(CBM AM/2022) Um antigo ditado diz: “Se há fumaça então há fogo”.
Uma sentença logicamente equivalente é
a) se há fogo então há fumaça.
b) se não há fumaça então não há fogo.
c) se não há fogo, então não há fumaça.
d) se não há fumaça pode haver fogo.
e) se há fogo então pode haver fumaça.
Comentários:
Sejam as proposições simples:
                                             u: "Há fumaça."
                                                 o: "Há fogo."


A sentença original pode ser descrita por u→o:
                                 u→o: “Se [há fumaça], então [há fogo]”.


Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                             u→o ≡ ~o→~u


A proposição equivalente pode ser descrita por:
                          ~o→~u: "Se [não há fogo], então [não há fumaça]."
Gabarito: Letra C.


---

(Pref. Bagé/2020) Uma proposição equivalente de “Se a prova está difícil, então Antônio não será aprovado
no concurso” é:
a) A prova está difícil e Antônio não será aprovado no concurso.
b) Se Antônio for aprovado no concurso, então a prova não está difícil.
c) A prova está fácil e Antônio foi aprovado no concurso.
d) A prova está fácil e Antônio não foi aprovado no concurso.
e) A prova não está fácil e Antônio foi aprovado no concurso.
Comentários:
Sejam as proposições simples:
                                          p: "A prova está difícil."
                                 a: "Antônio será aprovado no concurso."


A proposição original pode ser descrita por p→~a:
            p→~a: “Se [a prova está difícil], então [Antônio não será aprovado no concurso].”


Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                            p→~a ≡ ~(~a)→~p


Como a dupla negação de a corresponde à própria proposição a, a condicional equivalente pode também ser
descrita por a→~p.
                                              p→~a ≡ a→~p


Logo, temos a seguinte proposição equivalente:
             a→~p: "Se [Antônio for aprovado no concurso], então [a prova não está difícil]."
Gabarito: Letra B.


---

        Na questão anterior definimos originalmente a seguinte sentença declarativa afirmativa:

                                        a: "Antônio será aprovado."

        A sua negação corresponde a:

                                     ~a: "Antônio não será aprovado."

        A proposição original, nesse caso, foi descrita por p→~a.

        Poderíamos ter resolvido a questão definindo originalmente uma sentença declarativa
        negativa. Isso em nada altera o gabarito. Poderíamos, portanto, ter definido a proposição
        a como:

                                      a: "Antônio não será aprovado."

        Nesse caso, a sua negação seria:

                                       ~a: "Antônio será aprovado."

        A proposição original, a partir dessas novas definições, seria descrita por p→a.

A seguir, vamos resolver a mesma questão de outro modo. Compare com a resolução anterior.

(Pref. Bagé/2020) Uma proposição equivalente de “Se a prova está difícil, então Antônio não será aprovado
no concurso” é:
a) A prova está difícil e Antônio não será aprovado no concurso.
b) Se Antônio for aprovado no concurso, então a prova não está difícil.
c) A prova está fácil e Antônio foi aprovado no concurso.
d) A prova está fácil e Antônio não foi aprovado no concurso.
e) A prova não está fácil e Antônio foi aprovado no concurso.
Comentários:
Considere as proposições simples:
                                           p: "A prova está difícil."
                                      a: "Antônio não será aprovado."


---

A proposição original é descrita por p→a:
             p→a: “Se [a prova está difícil], então [Antônio não será aprovado no concurso].”


Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                               p→a ≡ ~a→~p


Logo, temos a seguinte proposição equivalente:
            ~a→~p: "Se [Antônio for aprovado no concurso], então [a prova não está difícil]."
Gabarito: Letra B.

A segunda equivalência fundamental é a transformação da condicional em disjunção inclusiva:

                                               p→q ≡ ~p∨q

A equivalência é realizada do seguinte modo:

    1. Nega-se o primeiro termo;
    2. Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    3. Mantém-se o segundo termo.

Como exemplo, considere novamente a seguinte condicional:

                            p→q: "Se [hoje choveu], então [João fez a barba]."

Observe que a frase seguinte é equivalente:

                            ~p∨q: "[Hoje não choveu] ou [João fez a barba]."


---

Mostre que são equivalentes p→q e ~p∨q
Para mostrar a equivalência, montaremos a tabela-verdade de ~p∨q e compararemos com p→q.
Passos 1, 2 e 3: determinar o número de linhas, desenhar o esquema e atribuir V ou F às proposições
simples de maneira alternada.
Vamos também incluir p→q para fins de comparação.

Passo 4: obter o valor das demais proposições.
Para obter ~p basta inverter o valor lógico de p.

Para obter ~p∨q, basta observar que ela só será falsa quando ~p e q forem ambos falsos.

Por fim, podemos incluir na tabela a condicional p→q e comparar os valores lógicos assumidos por ~p∨q.

Observe que os valores lógicos são exatamente iguais e, portanto, p→q e ~p∨q são equivalentes.
                                                 p→q ≡ ~p∨q


---

Vamos resolver duas questões que utilizam essa equivalência.

(BANESTES/2021) A frase a seguir é um conhecido ditado popular:
                                   “Se não tem cão então caça com gato"
Uma frase logicamente equivalente é:
a) Se tem cão então não caça com gato;
b) Se caça com gato então não tem cão;
c) Tem cão ou caça com gato;
d) Tem cão e caça com gato;
e) Tem cão ou não caça com gato.
Comentários:
Sejam as proposições simples:
                                               c: "Tem cão."
                                            g: "Caça com gato."


A proposição original pode ser descrita por ~c→g:
                              ~c→g: "Se [não tem cão], então [caça com gato]."


As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:
• p→q ≡ ~q→~p (contrapositiva)
• p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)


Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                            ~c→g ≡ ~g→~(~c)


A dupla negação de uma proposição corresponde à proposição original. Ficamos com:
                                               ~c→g ≡ ~g→c


---

A proposição equivalente pode ser escrita por:
                              ~g→c:"Se [não caça com gato], então [tem cão]."


Veja que essa equivalência não está nas alternativas apresentadas.
Vamos agora utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o seguinte
procedimento:
• Nega-se o primeiro termo;
• Troca-se a condicional (→) pela disjunção inclusiva (∨); e
• Mantém-se o segundo termo.


Para o caso em questão, temos:
                                             ~c→g ≡ ~(~c)∨g


A dupla negação de uma proposição corresponde à proposição original. Ficamos com:
                                                 ~c→g ≡ c∨g


A proposição equivalente pode ser descrita por:
                                   c∨g: “[Tem cão] ou [caça com gato].”
Gabarito: Letra C.


(CM POA/2012) Se p e q são proposições, e o símbolo ~ denota negação, o símbolo ∨ denota o conetivo ou,
o símbolo ∧ denota o conetivo e, símbolo → denota o conetivo condicional, então a proposição (p→~q) é
equivalente à seguinte fórmula
a) (~p∧~q)
b) ~(p∨q)
c) (~p∧q)
d) (~p∨q)
e) (~p∨~q)
Comentários:
Note que a proposição original é uma condicional e, nas alternativas, as possíveis opções de equivalência são
a conjunção ("e", ∧) e a disjunção inclusiva ("ou", ∧). Nesse caso, não devemos utilizar a equivalência
contrapositiva, pois ela resulta em uma nova condicional. Devemos, portanto, aplicar a seguinte
equivalência fundamental:
                                                 p→q ≡ ~p∨q


---

A equivalência é realizada do seguinte modo:
• Nega-se o primeiro termo;
• Troca-se a condicional (→) pela disjunção inclusiva (∨); e
• Mantém-se o segundo termo.


Aplicando essa equivalência para (p→~q), temos:
                                            p→(~q) ≡ ~p∨(~q)


A equivalência obtida corresponde à alternativa E: (~p∨~q).
Gabarito: Letra E.

A terceira equivalência fundamental para sua prova é a transformação da disjunção em uma condicional:

                                               p∨q ≡ ~p→q

A equivalência é realizada do seguinte modo:

    1. Nega-se o primeiro termo;
    2. Troca-se a disjunção inclusiva (∨) pela condicional (→); e
    3. Mantém-se o segundo termo.

Como exemplo, a disjunção inclusiva "[Pedro estuda] ou [trabalha]" é equivalente a "Se [Pedro não estuda],
então [trabalha]".

Mostre que são equivalentes p∨q e ~p→q.
Para demonstrar a equivalência, poderíamos estruturar a tabela-verdade de ~p→q e comparar com p∨q,
como feito nos exemplos anteriores. Contudo, existe uma outra forma.
Já vimos que uma equivalência da condicional corresponde a negar o primeiro termo e realizar uma disjunção
inclusiva com o segundo termo. A equivalência que conhecemos é:
                                               p→q ≡ ~p∨q


Como as proposições p e q são arbitrárias (poderíamos ter chamado de r e s, por exemplo), podemos chamar
a primeira proposição de (~p). Assim, continuamos com a mesma regra: negamos o primeiro termo e
realizamos uma disjunção inclusiva com o segundo termo.
                                            (~p)→q ≡ ~(~p)∨q


---

A dupla negação de uma proposição simples é equivalente à própria proposição simples, isto é, ~(~p) ≡ p.
Substituindo esse fato na equivalência acima, temos:
                                               (~p)→q ≡ p∨q


Agora basta alterar a ordem da equivalência acima para chegarmos ao resultado que queremos:
                                                p∨q ≡~p→q
Vamos a um exercício.

(Pref. Campinas/2019) Uma afirmação equivalente a: “Os cantadores da madrugada saíram hoje ou eu não
ouço bem”, é
a) Os cantadores da madrugada não saíram hoje ou eu ouço bem.
b) Os cantadores da madrugada saíram hoje e eu ouço bem.
c) Se os cantadores da madrugada saíram hoje, então eu não ouço bem.
d) Os cantadores da madrugada não saíram hoje e eu ouço bem.
e) Se os cantadores da madrugada não saíram hoje, então eu não ouço bem.
Comentários:
Sejam as proposições simples:
                              m: "Os cantadores da madrugada saíram hoje."
                                             o: "Eu ouço bem."


A afirmação original é dada pela disjunção inclusiva m∨~o.
               m∨~o: "[Os cantadores da madrugada saíram hoje] ou [eu não ouço bem]."


Sabemos que a disjunção apresenta uma equivalência fundamental dada por p∨q ≡ ~p→q. Isto é, deve-se
realizar o seguinte procedimento:
• Nega-se o primeiro termo;
• Troca-se a disjunção inclusiva (∨) pela condicional (→); e
• Mantém-se o segundo termo.


Aplicando essa equivalência para proposição em questão, ficamos com:
                                             m∨~o ≡ ~m→~o


A equivalência obtida é descrita por:
         ~m→~o: "Se [os cantadores da madrugada não saíram hoje], então [eu não ouço bem]."
Gabarito: Letra E.


---

                                             p→q ≡ ~ q→~p
                                              p→q ≡ ~p∨q
                                              p∨q ≡~p→q


Apresentadas as três primeiras equivalências fundamentais, ressalto também que o resultado obtido com o
exemplo do primeiro tópico é importante e deve ser memorizado:

                                          pq ≡ (p→q)∧(q→p)

Para exemplificar a equivalência, podemos dizer que a bicondicional "[Durmo] se e somente se [estou
cansado]" é equivalente a "[Se (estou cansado), então (durmo)] e [se (durmo), então (estou cansado)]".

Os alunos costumam decorar essa equivalência com do seguinte modo: "uma forma equivalente à
bicondicional é ir e voltar com a condicional".

                                          pq ≡ (p→q)∧(q→p)

     Mnemônico: Uma forma equivalente à bicondicional é ir e voltar com a condicional


(ISS RJ/2010) A proposição "um número inteiro é par se e somente se o seu quadrado for par" equivale
logicamente à proposição:
a) se um número inteiro for par, então o seu quadrado é par, e se um número inteiro não for par, então o
seu quadrado não é par.
b) se um número inteiro for ímpar, então o seu quadrado é ímpar.
c) se o quadrado de um número inteiro for ímpar, então o número é ímpar.
d) se um número inteiro for par, então o seu quadrado é par, e se o quadrado de um número inteiro não for
par, então o número não é par.
e) se um número inteiro for par, então o seu quadrado é par.
Comentários:


---

Sejam as proposições:
                                      p: "Um número inteiro é par."
                               q: "O quadrado de um número inteiro é par."


A proposição composta pode ser assim representada:
               pq: "[Um número inteiro é par] se e somente se [o seu quadrado for par]."


A bicondicional é equivalente a:
                                          pq ≡ (p→q)∧(q→p)


Não temos alternativa que corresponda a essa última equivalência, porém, se realizarmos a contrapositiva
de (q→p), encontramos:
                                        pq ≡ (p→q)∧(~p→~q)


Esse resultado pode ser lido como:
  (p→q)∧ (~p→~q): "[Se (um número inteiro for par), então (o seu quadrado é par)], e [se (um número
                      inteiro não for par), então (o seu quadrado não é par)]."
Gabarito: Letra A


---

Equivalências provenientes da negação de proposições

        Antes de adentrarmos no assunto, é importante esclarecer que não se deve confundir
        equivalência com negação.

        Ao se construir negação de uma proposição, constrói-se uma nova proposição com valores
        lógicos sempre opostos aos da proposição original.

        Veremos mais adiante, por exemplo, que a negação de p∧q é ~p∨~q. Nesse caso:

        • Não podemos dizer que p∧q é equivalente a ~p ∨~q,

        • Podemos dizer que ~(p∧q) é equivalente a ~p ∨~q, isto é, ~(p∧q) ≡ ~p ∨~q.

Feitas estas considerações iniciais, passemos ao estudo das equivalências provenientes da negação de
proposições.
Existem muitas maneiras de se expressar uma negação. A seguir serão apresentadas as formas mais comuns.

Dupla negação da proposição simples

Um resultado importante que pode ser obtido da tabela verdade é que a negação da negação de p sempre
tem valor lógico igual a proposição p, ou seja, é equivalente a p.

                                              ~(~p) ≡ p

A prova dessa equivalência corresponde à tabela-verdade abaixo.

Como exemplo, a dupla negação "Não é verdade que [Joãozinho não comeu o chocolate]" é equivalente a
"Joãozinho comeu o chocolate".


---

     A negação da negação de p é equivalente a p.

                                                ~ (~p) ≡ p


Negação da conjunção e da disjunção inclusiva (leis de De Morgan)

Negação da conjunção

Para realizar a negação conjunção p∧q, deve-se seguir o seguinte procedimento:

    1. Negam-se ambas as parcelas da conjunção;
    2. Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Como resultado, podemos escrever que a negação de p∧q, também conhecida por ~(p∧q), é equivalente a
~p ∨~q:

                                             ~(p∧q) ≡~p ∨~q

Como exemplo, sejam as proposições:

                                            p: "Comi lasanha."

                                          q: "Bebi refrigerante."

A conjunção dessas duas proposições pode ser escrita por:

                                p∧q: "[Comi lasanha] e [bebi refrigerante]."

A negação dessa frase é:

                   ~ (p∧q) ≡ ~p ∨~q: "[Não comi lasanha] ou [não bebi refrigerante]."

Mostre que são equivalentes ~(p∧q) e ~p ∨~q.
Passos 1, 2 e 3: determinar o número de linhas, estruturar a tabela-verdade e atribuir V ou F às proposições
simples de maneira alternada.
Para fins de comparação, vamos incluir ambas as proposições em uma mesma tabela.


---

Passo 4: obter o valor das demais proposições.
~p e ~q são obtidos com a negação de p e q respectivamente.

A conjunção p∧q só é verdadeira quando p e q são verdadeiras. Nos demais casos, será sempre falsa.

A proposição ~ (p∧q) é obtida pela negação de p∧q.

Finalmente, os valores lógicos da proposição ~p∨~q são obtidos pela disjunção inclusiva de ~p e ~q, sendo
falsa apenas quando ambas as proposições simples negadas forem falsas.

Observe que os valores lógicos assumidos por ~(p∧q) e ~p∨~q são iguais. Portanto, as proposições são
equivalentes.
                                           ~ (p∧q) ≡~p ∨~q


---

Negação da disjunção inclusiva

De modo semelhante à negação da conjunção, para negarmos a disjunção inclusiva p∨q, devemos seguir o
seguinte procedimento:

    1. Negam-se ambas as parcelas da disjunção inclusiva;
    2. Troca-se a disjunção inclusiva (∨) pela conjunção (∧).

Como resultado disso, podemos escrever que a negação de p∨q, também conhecida por ~(p∨q), é
equivalente a ~p ∧~q:

                                            ~ (p∨q) ≡ ~p∧~q

Vejamos um exemplo:

                               p∨q: "[Comi lasanha] ou [bebi refrigerante]."

A negação dessa frase seria:

                    ~ (p∨q) ≡~p ∧~q: "[Não comi lasanha] e [não bebi refrigerante]."

Essa equivalência pode ser facilmente constatada na tabela-verdade:

     Para negar "e": negar ambas as proposições e trocar por "ou".
                                          ~ (p∧q) ≡~p ∨~q

     Para negar "ou": negar ambas as proposições e trocar por "e".
                                          ~ (p∨q) ≡~p ∧~q


---

(SSP AM/2022) Considere a afirmação:
                                “Hoje é sexta-feira e amanhã não trabalharei”.
A negação lógica dessa sentença é
a) Hoje não é sexta-feira e amanhã trabalharei.
b) Hoje não é sexta-feira ou amanhã trabalharei.
c) Hoje não é sexta-feira, então amanhã trabalharei.
d) Hoje é sexta-feira e amanhã trabalharei.
e) Hoje é sexta-feira ou amanhã não trabalharei.
Comentários:
Sejam as proposições simples:
                                           h: "Hoje é sexta-feira."
                                          a: "Amanhã trabalharei."


A proposição original pode ser escrita pela conjunção h∧~a:
                         h∧~a:"[Hoje é sexta-feira] e [Amanhã não trabalharei]."


Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da conjunção;
• Troca-se a conjunção (∧) pela disjunção inclusiva (∨).


Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:
                                           ~ (h∧~a) ≡ ~h∨~(~a)


A dupla negação da proposição simples a corresponde à proposição original. Ficamos com:
                                              ~ (h∧~a) ≡ ~h∨a


Logo, a negação requerida pode ser descrita por:
                        ~h∨a: “[Hoje não é sexta-feira] ou [amanhã trabalharei].”
Gabarito: Letra B.


---

(SEMSA Manaus/2022) Considere a sentença:
“Paulo é torcedor do Nacional ou Débora não é torcedora do Fast”.
A negação lógica dessa sentença é
a) Paulo não é torcedor do Nacional ou Débora não é torcedora do Fast.
b) Paulo não é torcedor do Nacional ou Débora é torcedora do Fast.
c) Paulo não é torcedor do Nacional e Débora não é torcedora do Fast.
d) Paulo não é torcedor do Nacional e Débora é torcedora do Fast.
e) Paulo é torcedor do Nacional ou Débora é torcedora do Fast.
Comentários:
Sejam as proposições simples:
                                    p: "Paulo é torcedor do Nacional."
                                     d: "Débora é torcedora do Fast."


A sentença original pode ser descrita por p∨~d:
               p∨~d: “[Paulo é torcedor do Nacional] ou [Débora não é torcedora do Fazt].”


Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da disjunção inclusiva;
• Troca-se a disjunção inclusiva (∨) pela conjunção (∧).


Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:
                                          ~(p∨~d) ≡ ~p∧~(~d)


A dupla negação de d corresponde à proposição original. Ficamos com:
                                             ~(p∨~d) ≡ ~p∧d


Logo, a negação requerida pode ser descrita por:
               ~p∧d: "[Paulo não é torcedor do Nacional] e [Débora é torcedora do Fast]."
Gabarito: Letra D.


---

(TRT 9/2022) A negação da afirmação: “não ficou doente e vai ficar em casa” é:
a) Ficou doente e não vai ficar em casa.
b) Não ficou doente ou vai ficar em casa.
c) Ficou doente ou não vai ficar em casa.
d) Ficou doente ou vai ficar em casa.
e) Não ficou doente ou não vai ficar em casa.
Comentários:
Sejam as proposições simples:
                                             d: "Ficou doente."
                                            c: "Vai ficar em casa."


A proposição original pode ser escrita pela conjunção ~d∧c:
                              ~d∧c:"[Não ficou doente] e [vai ficar em casa]."


Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da conjunção;
• Troca-se a conjunção (∧) pela disjunção inclusiva (∨).
Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:
                                            ~ (~d∧c) ≡ ~(~d)∨~c


A dupla negação de c corresponde à proposição original. Ficamos com:
                                                ~ (~d∧c) ≡ d∨~c


Logo, a negação requerida pode ser descrita por:
                             d∨~c: “[Ficou doente] ou [não vai ficar em casa].”
Gabarito: Letra C.


---

(SAAE/2018) Considere a afirmação:
Vou de tênis e visto um paletó, ou não faço sucesso.
Uma negação lógica dessa afirmação é:
a) Não vou de tênis ou não visto um paletó, e faço sucesso.
b) Vou de tênis e não visto um paletó, ou não faço sucesso.
c) Não vou de tênis ou visto um paletó, e faço sucesso.
d) Não vou de tênis e visto um paletó, ou não faço sucesso.
e) Vou de tênis ou visto um paletó ou faço sucesso
Comentário:
Sejam as proposições simples:
                                                t: "Vou de tênis."
                                              p: "Visto um paletó."
                                                s: "Faço sucesso."
A afirmação do enunciado é dada por:
                     (t∧p)∨~s: "[(Vou de tênis) e (visto um paletó)], ou [não faço sucesso]."


A negação dessa frase é a negação de uma disjunção inclusiva ("ou", ∨) composta por dois termos: o termo
(t∧p) e o termo ~s.


Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da disjunção inclusiva;
• Troca-se a disjunção inclusiva (∨) pela conjunção (∧).


Aplicando a equivalência em questão para negar (t∧p)∨~s, ficamos com:
                                         ~ [(t∧p)∨~s] ≡ ~(t∧p) ∧ ~(~s)


Agora temos a negação da conjunção (t∧p) e a dupla negação de s. Podemos novamente negar p∧q por De
Morgan e, além disso, a dupla negação de s corresponde à proposição original s. Ficamos com:
                                                   (~t∨~p)∧s


(~t∨~p) ∧ s é a negação que estamos procurando e pode ser escrita assim:
              (~t∨~p) ∧ s: "[(Não vou de tênis) ou (não visto um paletó)], e [faço sucesso]."
Gabarito: Letra A.


---

Negação da condicional

A negação de p→q é realizada por meio da seguinte equivalência:

                                             ~ (p→q) ≡ p∧~q

A negação da condicional é realizada do seguinte modo:

    1. Mantém-se o primeiro termo;
    2. Troca-se a condicional (→) pela conjunção (∧); e
    3. Nega-se o segundo termo.

Como exemplo, considere a condicional:

                             p→q: "Se [eu beber], então [dou gargalhadas]."

A negação dessa expressão pode ser escrita como:

                          ~ (p→q) ≡ p∧~q: "[Eu bebo] e [não dou gargalhadas]."

Mostre que ~(p→q) é equivalente a p∧~q.
Como não poderia deixar de ser, essa equivalência é obtida a partir da seguinte tabela-verdade:

Podemos obter o mesmo resultado de um outro modo, pois sabemos das equivalências fundamentais que:
                                              p→q ≡ ~p∨q


Se negarmos ambos os lados da equivalência anterior, obteremos:
                                          ~(p→q) ≡ ~((~p)∨q)


O lado direito dessa equivalência é a negação de uma disjunção. Utilizando a equivalência de De Morgan,
obtemos:
                                          ~(p→q) ≡ ~(~p)∧~q


---

A negação da negação de uma proposição é a própria proposição original. Portanto:
                                                 ~(p→q) ≡ p∧~q

Essa equivalência é muito importante e deve ser memorizada.

                                              ~ (p→q) ≡ p∧~q

                                 Não confunda as seguintes equivalências

                                                  p→q ≡ ~p∨q

                                                 ~(p→q) ≡ p∧~q

(EPE/2022) A negação da afirmativa “Se João vai ao jogo, então o Flamengo perde” é
a) João vai ao jogo e o Flamengo não perde.
b) João não vai ao jogo e o Flamengo perde.
c) João não vai ao jogo e o Flamengo não perde.
d) Se João não vai ao jogo, então o Flamengo perde.
e) Se João não vai ao jogo, então o Flamengo não perde.
Comentários:
Sejam as proposições simples:
                                            j: "João vai ao jogo."
                                          f: "O Flamengo perde."


A sentença original pode ser descrita por j→f:
                          j→f: “Se [João vai ao jogo], então [o Flamengo perde]”.


---

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Mantém-se o primeiro termo;
• Troca-se a condicional (→) pela conjunção (∧); e
• Nega-se o segundo termo.


Para o caso em questão, temos:
                                                 ~(j→f) ≡ j∧~f


Logo, a negação pode ser descrita por:
                           j∧~f: "[João vai ao jogo] e [o Flamengo não perde]."
Gabarito: Letra A.


(Pref. Panambi/2020) A negação da seguinte proposição composta: “Se estudo atentamente então serei
nomeado em concurso público” é:
a) Se não estudo atentamente, então não serei nomeado em concurso público.
b) Estudo atentamente e não serei nomeado em concurso público.
c) Se não serei nomeado em concurso público, então não estudo atentamente.
d) Estudo atentamente ou serei nomeado em concurso público.
e) Não estudo atentamente se, somente se não serei nomeado em concurso público.
Comentários:
Sejam as proposições simples:
                                         e: "Estudo atentamente."
                                 n: "Serei nomeado em concurso público."


A sentença original pode ser descrita por e→n:
               e→n: "Se [estudo atentamente] então [serei nomeado em concurso público]."


Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Mantém-se o primeiro termo;
• Troca-se a condicional (→) pela conjunção (∧); e
• Nega-se o segundo termo.


---

Aplicando para a condicional da questão, temos que a negação de e→n é dada por:
                                             ~ (e→ n) ≡ e∧~n


Temos, portanto, a seguinte negação:
                e∧~n: " [Estudo atentamente] e [não serei nomeado em concurso público]."
Gabarito: Letra B.

Negação da disjunção exclusiva

A negação da disjunção exclusiva mais comum é equivalente a própria bicondicional.

                                              ~(p∨q) ≡ pq

Como exemplo, considere a disjunção exclusiva:

                                   p∨q: "Ou jogo bola, ou jogo sinuca."

A negação dessa expressão é dada pelo bicondicional abaixo:

                         ~(p∨q) ≡ pq: "Jogo bola se e somente se jogo sinuca."

Mostre que são equivalentes ~(p∨q) e pq.
Vamos colocar lado a lado as tabelas-verdade de pq e p∨q.

Quando as proposições simples p e q têm o mesmo valor lógico, a disjunção exclusiva p∨q é falsa. Nos demais
casos, é verdadeira.
Para a bicondicional pq ocorre exatamente o oposto: os casos em que ela é verdadeira são somente
aqueles em que p e q são iguais.
Isso significa que, ao negarmos a disjunção exclusiva, chegaremos à bicondicional. Veja:

Assim, temos:
                                              ~(p∨q) ≡ pq


---

     A negação da disjunção exclusiva é equivalente a própria bicondicional.

                                            ~ (p∨q) ≡ pq


Negação da bicondicional

São quatro as maneiras mais comuns de se negar a bicondicional. A primeira que vamos apresentar é que a
negação da bicondicional é equivalente à disjunção exclusiva.

                                            ~(pq) ≡ p∨q


Mostre que ~ (pq) e p∨q são equivalentes.
Essa relação pode ser provada por tabela-verdade:

Podemos também demonstrar a equivalência ~(pq) ≡ (p∨q) utilizando outra equivalência já conhecida, a
negação da disjunção exclusiva:
                                            ~(p∨q) ≡ pq
Podemos negar os dois lados desse resultado da seguinte forma:
                                         ~(~(p∨q)) ≡ ~(pq)


A proposição composta p∨q é uma proposição assim como qualquer proposição simples, com a diferença
que ela é resultado de uma composição de proposições simples por meio de um conectivo. Assim, continua
válido o entendimento de que ao negar duas vezes uma proposição retornamos à proposição original. Logo:
                                            p∨q ≡ ~(pq)


Esse resultado pode ser escrito da seguinte forma, trocando os lados direito e esquerdo da equivalência
anterior:
                                            ~(pq) ≡ (p∨q)


---

Podemos ainda negar a proposição bicondicional, negando apenas uma das suas proposições simples. Veja:

                                           ~ (pq) ≡ (~p)q
                                           ~ (pq) ≡ p(~q)

Lembre-se de que esses resultados também podem ser obtidos por tabela-verdade.

Cabe salientar que existe uma outra forma de negação da bicondicional utilizando apenas operadores de
conjunção e disjunção:

                                       ~ (pq) ≡ (p∧~q) ∨ (q∧~p)

Mostre que ~(pq) e (p∧~q)∨(q∧~p) são equivalentes.
A utilização da tabela-verdade é a forma tradicional de se provar a equivalência. Vejamos, porém, uma forma
mais interessante de provar esta equivalência por meio de outras equivalências que já aprendemos.
Vamos utilizar uma equivalência fundamental já apresentada, que relaciona a bicondicional com duas
condicionais:
                                           pq ≡(p→q)∧(q→p)


Se negarmos ambos os lados da equivalência teremos o seguinte:
                                       ~(pq) ≡ ~((p→q)∧(q→p))


Veja-se que o lado direito da equivalência é a negação de uma conjunção, que pode ser reescrita utilizando
De Morgan:
                                      ~ (pq) ≡ ~(p→q) ∨ ~(q→p)


Agora devemos negar os dois condicionais, (p→q) e (q→p).
                                      ~ (pq) ≡ (p∧~ q) ∨ (q∧~p)


Finalmente chegamos à negação da bicondicional, utilizando apenas operadores de negação, conjunção e
disjunção inclusiva.


---

As quatro formas mais comuns de negação da bicondicional são:

                                     ~ (pq) ≡ p∨q

                                   ~ (pq) ≡ (~ p)q

                                   ~ (pq) ≡ p(~ q)

                               ~ (pq) ≡ (p∧~ q) ∨ (q∧~p)


---

Outras equivalências

Neste tópico, serão apresentadas outras equivalências que podem ser cobradas em prova, mas que
apresentam menor incidência do que as ditas fundamentais.

Equivalência do conectivo bicondicional

Uma forma equivalente de se escrever a bicondicional é negar ambos os termos:

                                           pq ≡ ~p~q

Para fins de exemplo, se considerarmos:

          pq: "Hoje é dia 01/09 se e somente se hoje é o primeiro dia do mês de setembro."

Essa expressão é equivalente a:

     ~p~q: "Hoje não é dia 01/09 se e somente se hoje não é o primeiro dia do mês de setembro."

Verifiquemos na tabela-verdade:

        Equivalência do bicondicional pq: negam-se p e q.

                                          pq ≡ (~p)(~q)

        Equivalência da negação do bicondicional ~(pq): nega-se apenas um dos termos.

                                          ~ (pq) ≡ (~ p)q

                                          ~ (pq) ≡ p(~ q)


---

     Equivalência do bicondicional pq: nega-se tanto p quanto q.

                                            pq ≡ (~p)(~q)


(Pref. Vila Lângaro/2019) A negação da proposição “João passa no concurso público se e somente se João
estuda” é:
a) João não passa no concurso público se e somente se João não estudou.
b) João não passa no concurso público e João não estudou.
c) João passa no concurso público e João estuda.
d) Ou João passa no concurso público ou João estuda.
e) Se João passa no concurso público, então João estuda.
Comentários:
A proposição composta original é uma bicondicional pq cujos termos são:
                                   p: " João passa no concurso público."
                                             q: " João estuda."


As principais formas de se negar a bicondicional são:


                                              ~ (pq) ≡ p∨q
                                            ~ (pq) ≡ (~ p)q
                                            ~ (pq) ≡ p(~ q)
                                       ~ (pq) ≡ (p∧~ q) ∨ (q∧~p)


A primeira forma apresentada corresponde à letra D:
                      p∨q: " Ou [João passa no concurso público] ou [João estuda]."


As demais formas apresentadas nas alternativas não correspondem à negação da bicondicional. Especial
atenção deve ser dada à alternativa A, que apresenta uma equivalência do bicondicional, não uma negação:
                                            pq ≡ (~p)(~q)
Gabarito: Letra D.


---

Negações da conjunção para a forma condicional

Existem duas maneiras de se negar a conjunção de modo que ela adquira a forma condicional:
                                             ~(p∧q) ≡ p→~q
                                             ~(p∧q) ≡ q→~p
Mostre que ~(p∧q) ≡ p→~q são equivalentes.
Utilizando a negação da conjunção por De Morgan:
                                            ~(p∧q) ≡ ~p ∨~q


Chegamos a uma disjunção inclusiva, mas queremos encontrar uma condicional. Como proceder? Basta
lembrar que existe uma equivalência fundamental que correlaciona a disjunção inclusiva com a condicional,
que é dada por p ∨ q ≡ ~p→q. Essa equivalência nos diz basicamente que, para levar uma disjunção inclusiva
para a condicional, devemos negar o primeiro termo e manter o segundo termo. Desse modo, vamos negar
o primeiro termo e manter o segundo termo de ~p ∨~q.
                                     ~(p∧q) ≡ ~p ∨~q ≡ ~(~p)→~q
                                           ~(p∧q) ≡ ~(~p)→~q


A dupla negação de uma proposição é a própria proposição original. Assim, chegamos ao resultado
pretendido:
                                             ~(p∧q) ≡ p→~q

Agora que sabemos que ~(p∧q) ≡ p→~q, a prova da outra equivalência fica mais simples. Veja:

Mostre que ~(p∧q) ≡ q → ~p são equivalentes.
Conhecemos a seguinte equivalência fundamental:
                                            (i). p→q ≡ ~q →~p


Essa equivalência nos mostra que uma condicional é equivalente à condicional resultante da negação das
proposições originais, invertendo-se a posição do antecedente e do consequente.
Também conhecemos a seguinte equivalência:
                                           (ii). ~(p∧q) ≡ p→~q


Utilizando-se a conclusão da equivalência (i) combinada à equivalência (ii), teremos:
                                      ~(p∧q) ≡ p→~q ≡ ~(~q) →~p


A dupla negação ~(~q) equivale à proposição original q. Logo:
                                             ~(p∧q) ≡ q →~p


---

                                             ~(p∧q) ≡ p→~q

                                             ~(p∧q) ≡ q →~p


(MRE/2016) Considere a sentença "Corro e não fico cansado". Uma sentença logicamente equivalente à
negação da sentença dada é:
a) Se corro então fico cansado.
b) Se não corro então não fico cansado.
c) Não corro e fico cansado.
d) Corro e fico cansado.
e) Não corro ou não fico cansado.
Comentários:
Sejam as proposições simples:
                                                c: "Corro."
                                             f: "Fico cansado."
O enunciado apresenta a sentença c∧~f e pede a negação ~(c∧~f).


Observe que o enunciado requer a negação de uma conjunção e as alternativas apresentam condicionais
("se...então"), conjunções ("e") e disjunção inclusiva ("ou"). Conhecemos três maneiras de se negar uma
conjunção, sendo as duas últimas menos usuais:
                                           (i). ~(p∧q) ≡ ~p∨~ q
                                           (ii). ~(p∧ q) ≡ p→~ q
                                           (iii). ~(p∧q) ≡ q→ ~ p


Aplicando essas equivalências para o caso em questão, ficamos com:
                                          (i). ~(c∧~f) ≡ ~c∨~(~f)
                                          (ii). ~(c∧~f) ≡ c→~(~f)
                                          (iii). ~(c∧~f) ≡ ~f→ ~c


---

Como uma dupla negação corresponde à proposição original, nossas equivalências ficam assim:
                                               (i). ~(c∧~f) ≡ ~c∨f
                                               (ii). ~(c∧~f) ≡ c→f
                                             (iii). ~(c∧~f) ≡ ~f→ ~c


Observe que a equivalência (i). ~c∨f: "[Não corro] ou [fico cansado]" não corresponde a nenhuma
alternativa. Já a equivalência (ii) corresponde à letra A.
                                  c→f: "Se [corro], então [fico cansado]."


O gabarito, portanto, é a alternativa A.
Atenção! Poderíamos ter resolvido essa questão de uma outra maneira, sem precisar conhecer as
"negações da conjunção para a forma condicional". Sejam as proposições simples:
                                                   c: "Corro."
                                                f: "Fico cansado."


O enunciado apresenta a sentença c∧~f e pede a negação ~(c∧~f). Por De Morgan, temos:
                                              ~(c∧~f) ≡ ~c ∨ ~(~f)


A dupla negação corresponde à proposição original. Logo, temos:
                                                ~(c∧~f) ≡ ~c ∨ f


Veja que não temos como resposta ~c∨f. Podemos transformar a disjunção inclusiva ~c∨f em uma
condicional utilizando a seguinte equivalência:
                                                  p∨q ≡ ~p→q


Aplicando essa equivalência em ~c ∨ f, que é negação de c∧~f, ficamos com:
                                           ~(c∧~f) ≡ ~c ∨ f ≡ ~(~c)→f


A dupla negação de c corresponde à proposição simples c. Logo, ficamos com:
                                             ~(c∧~f) ≡ ~c ∨ f ≡ c→f


Veja, portanto, que chegamos novamente na alternativa A:
                                  c→f: "Se [corro], então [fico cansado]."
Gabarito: Letra A.


---

Conjunção de condicionais

Existem duas equivalências que de vez em quando aparecem nas provas:

                                        (p→r)∧(q→r) ≡ (p∨q)→r

                                        (p→q)∧(p→r) ≡ p→(q∧r)

        Quando o termo comum é o consequente, a equivalência apresenta uma disjunção
        inclusiva no antecedente.
                                        (p→r)∧(q→r) ≡ (p∨q)→r
        Quanto o termo comum é o antecedente, a equivalência apresenta uma conjunção no
        consequente.
                                        (p→q)∧(p→r) ≡ p→(q∧r)

Podemos verificar as duas equivalências por tabela-verdade:


---

(SEFAZ-AL/2020) Considere as proposições:
• P1: “Se há carência de recursos tecnológicos no setor Alfa, então o trabalho dos servidores públicos que
atuam nesse setor pode ficar prejudicado.”.
• P2: “Se há carência de recursos tecnológicos no setor Alfa, então os beneficiários dos serviços prestados
por esse setor podem ser mal atendidos.”.
A proposição P1∧P2 é equivalente à proposição “Se há carência de recursos tecnológicos no setor Alfa, então
o trabalho dos servidores públicos que atuam nesse setor pode ficar prejudicado e os beneficiários dos
serviços prestados por esse setor podem ser mal atendidos.”.
Comentários:
Considere as proposições simples:
                          c: "Há carência de recursos tecnológicos no setor Alfa."
          t: "O trabalho dos servidores públicos que atuam nesse setor pode ficar prejudicado."
           b: "Os beneficiários dos serviços prestados por esse setor podem ser mal atendidos."


A proposição P1 pode ser descrita por c→t e a proposição P2 pode ser descrita por c→b. Logo, a proposição
P1∧P2 pode ser descrita por:
                                               (c→t)∧(c→b)
Devemos, portanto, avaliar se (c→t)∧(c→b) é equivalente a:


 “Se [há carência de recursos tecnológicos no setor Alfa], então [(o trabalho dos servidores públicos que
atuam nesse setor pode ficar prejudicado) e (os beneficiários dos serviços prestados por esse setor podem
                                          ser mal atendidos)].”


Isto é, devemos avaliar se (c→t)∧(c→b) é equivalente a c→(t∧b).
Sabemos que essas duas proposições compostas são equivalentes, pois correspondem à seguinte
equivalência estudada:
                                         (p→q)∧(p→r) ≡ p→(q∧r)
O gabarito, portanto, é CERTO.
Caso você não se lembre dessa equivalência na hora da prova, não se esqueça que SEMPRE podemos
recorrer à tabela-verdade para verificar se duas proposições são equivalentes. Isso porque, pela definição
de equivalências, temos que duas proposições A e B são equivalentes quando todos os valores lógicos (V ou
F) assumidos por elas são iguais para todas as combinações de valores lógicos atribuídos às proposições
simples que as compõem.


---

Para o caso em questão, podemos montar a seguinte tabela-verdade:

Veja que ambas as proposições apresentam a mesma tabela-verdade e, portanto, são equivalentes.
Gabarito: CERTO.


(PF/2004) As proposições (P∨Q)→S e (P→S)∨(Q→S) possuem tabelas de valorações iguais.
Comentários:
A assertiva está ERRADA. A equivalência correta seria (P→S)∧(Q→S) ≡ (P∨Q)→S.
Lembre-se que as equivalências mostradas nesse tópico são conjunções (∧) de condicionais. Veja:
                                        (p→r)∧(q→r) ≡ (p∨q)→r
                                        (p→q)∧(p→r) ≡ p→(q∧r)


Para mostrar formalmente que (P∨Q)→S e (P→S)∨(Q→S) não possuem tabelas de valorações iguais, isto é,
para mostrar que essas proposições não são equivalentes, podemos montar a seguinte tabela-verdade:

Gabarito: ERRADO.

Vamos agora praticar algumas questões gerais sobre o que aprendemos.


---

(CBM AM/2022) Gabriel comprou a camiseta do Nacional-AM, e guardou para uma ocasião especial. Certo
dia, procurado em casa por um amigo, sua irmã disse:
                                “Vestiu a camiseta e foi ao jogo ou ao bar.”
A negação lógica dessa sentença é:
a) Não vestiu a camiseta e foi ao jogo ou ao bar.
b) Vestiu a camiseta e não foi ao jogo ou ao bar.
c) Vestiu a camiseta e não foi ao jogo nem ao bar.
d) Não vestiu a camiseta ou foi ao jogo ou ao bar.
e) Não vestiu a camiseta ou não foi ao jogo nem ao bar.
Comentários:
Sejam as proposições simples:
                                           v: "Vestiu a camiseta."
                                               j: "Foi ao jogo."
                                               b: "Foi ao bar."


A proposição original pode ser descrita pela conjunção entre v e (j∨b), isto é, pode ser descrita por v∧(j∨b):
                       v∧(j∨b):"[Vestiu a camiseta] e [(foi ao jogo) ou (foi ao bar)]."


Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da conjunção;
• Troca-se a conjunção (∧) pela disjunção inclusiva (∨).


Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:
                                          ~ [v∧(j∨b)] ≡ ~v∨~(j∨b)


Note que a parcela ~(j∨b) também pode ser desenvolvida por De Morgan, e corresponde a ~j∧~b. Portanto,
temos a seguinte equivalência:
                                         ~ [v∧(j∨b)] ≡ ~v∨(~j∧~b)


Logo, a negação requerida pode ser descrita por:
             ~v∨(~j∧~b): "[Não vestiu a camiseta] ou [(não foi ao jogo) e (não foi ao bar)]."


---

Veja que essa negação é apresentada na alternativa E, que a representa a expressão "e não" por "nem":
               ~v∨(~j∧~b): "[Não vestiu a camiseta] ou [(não foi ao jogo) (nem ao bar)]."
Gabarito: Letra E.


(TJM SP/2021) Uma proposição equivalente a “Se acordei cedo e me alimentei, então tenho um dia
produtivo” é a proposição:
a) Não tenho um dia produtivo e não acordei cedo e não me alimentei.
b) Tenho um dia produtivo e não acordei cedo e não me alimentei.
c) Se não tenho um dia produtivo, então não acordei cedo ou não me alimentei.
d) Se não tenho um dia produtivo, então não acordei cedo e não me alimentei.
e) Se tenho um dia produtivo, então acordei cedo ou me alimentei.
Comentários:
Sejam as proposições simples:
                                            c: "Acordei cedo."
                                            a: "Me alimentei."
                                      p: "Tenho um dia produtivo."


A proposição original pode ser descrita por c∧a → p.
             c∧a → p: " Se [(acordei cedo) e (me alimentei)], então [tenho um dia produtivo]."


Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                         c∧a → p ≡ ~p → ~(c∧a)


O consequente obtido, ~(c∧a), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as duas
parcelas e troca-se o "e" pelo "ou". Temos:
                                         c∧a → p ≡ ~p → ~c∨~a
Ficamos com:
~p → ~c∨~a: "Se [não tenho um dia produtivo], então [(não acordei cedo) ou (não me alimentei)]."
Gabarito: Letra C.


---

(DEPEN/2021) Com relação a lógica proposicional, julgue o item a seguir.
Considere as seguintes proposições
p: “Paola é feliz”;
q: “Paola pinta um quadro”.
Assim, a proposição “Paola é feliz apenas se ela pinta um quadro” pode ser representada por ∼(p∧∼q).
Comentários:
Sabemos que o conectivo “somente se” é do tipo condicional. Esse conectivo difere do “se e somente se”,
que é do tipo bicondicional.
Note que a proposição sugerida pelo enunciado é:
                              “[Paola é feliz] apenas se [ela pinta um quadro]”


O conectivo “apenas se” apresentado na questão corresponde ao condicional “somente se”. Logo, a
proposição pode ser descrita por p→q.
Veja que o enunciado sugere que a proposição composta pode ser representada por ~(p∧~q). Podemos
desenvolver essa negação por De Morgan. Para negar a conjunção “e”, negam-se ambas as parcelas e troca-
se o “e” pelo “ou”. Ficamos com:
                                          ~(p∧~q) ≡ ~p ∨ ~(~q)


A dupla negação de uma proposição simples corresponde à proposição original. Logo:
                                             ~(p∧~q) ≡ ~p∨q


Nesse momento, você deve se lembrar da equivalência conhecida por “transformação do condicional em
disjunção inclusiva”, dada por p→q ≡ ~p∨q.


Conhecendo essa equivalência, observe que ~(p∧~q) é equivalente a ~p∨q que, por sua vez, é equivalente
a p→q. Portanto:
                                              ~(p∧~q) ≡ p→q


Isso significa que a proposição p→q, “Paola é feliz apenas se ela pinta um quadro”, de fato pode ser
representada por sua forma equivalente ~(p∧~q). O gabarito, portanto, é CERTO.
Gabarito: CERTO.


---

ÁLGEBRA DE PROPOSIÇÕES
                                        Álgebra de proposições
                                         Propriedade comutativa

  Todos os conectivos, exceto o condicional "se...então", apresentam propriedade comutativa.

                                               p∧q ≡ q∧p
                                               p∨q ≡ q∨p
                                               p∨q ≡ q∨p
                                              pq ≡ qp
                                         Propriedade associativa


                                           (p∧q)∧r ≡ p∧(q∧r)
                                           (p∨q)∨r ≡ p∨(q∨r)


                                         Propriedade distributiva


                                        p∧(q∨r) ≡ (p∧q) ∨ (p∧r)

                                        p∨(q∧r) ≡ (p∨q) ∧ (p∨r)

                                        Propriedade da identidade

                                                p∧t≡p
                                                p∧c≡c

                                                p∨t≡t
                                                p∨c≡p


                                        Propriedade da absorção


                                             p ∨ (p ∧ q) ≡ p
                                             p ∧ (p ∨ q) ≡ p

                                      Propriedade da idempotência

                                                p∧p≡p
                                                p∨p≡p


---

A álgebra de proposições trata do uso sequencial de equivalências lógicas e de outras propriedades para
simplificar expressões.

O uso dessa ferramenta é interessante para resolver questões de um modo mais rápido. Além disso, pode
ser muito útil em questões mais diretas de equivalências lógicas, quando a banca tenta "esconder" a
equivalência nas alternativas.
O mais importante é você conhecer as propriedades comutativa, associativa e distributiva e suas aplicações
mais imediatas nas questões. Isso porque, via de regra, o conhecimento das demais propriedades não
costuma ser cobrado e, além disso, é comum que as questões mais complexas de álgebra de proposições
possam ser resolvidas por tabela-verdade.

        As três primeiras propriedades que serão apresentadas são as mais importantes para sua
        prova: comutativa, associativa e distributiva.

        Questões mais complexas via de regra podem ser resolvidas por tabela-verdade. Nesses
        casos, a desenvoltura com álgebra de proposições seria apenas um "bônus" para que você
        resolva alguns problemas mais rapidamente.


Propriedade comutativa

Todos os conectivos, exceto o condicional "se...então", gozam da propriedade comutativa. Isso quer dizer
que é possível trocar a ordem dos componentes em uma proposição composta sem afetar o resultado da
tabela-verdade:

                                               p∧q ≡ q∧p

                                               p∨q ≡ q∨p

                                               p∨q ≡ q∨p

                                              pq ≡ qp


---

Suponha que uma questão peça para você a negação da seguinte condicional:
                               p→q: "Se eu correr, então chego a tempo."


Sabemos que essa condicional não goza da propriedade comutativa. A negação dessa condicional, pedida
pela questão, pode ser encontrada pela seguinte equivalência:
                            ~ (p→q) ≡ p∧~q: "Corro e não chego a tempo."


Suponha agora que, dentre as alternativas da questão, você não encontre a proposição composta "Corro e
não chego a tempo", porém encontre "Não chego a tempo e corro". Pode marcar essa alternativa sem medo!
Isso porque, usando a propriedade comutativa, a conjunção obtida p∧~q pode ser escrita como ~q∧p:
                        ~ (p→q) ≡ p∧~q ≡ ~q∧p: "Não chego a tempo e corro."

     Todos os conectivos exceto o condicional comutam:

                                               p∧q ≡ q∧p
                                               p∨q ≡ q∨p
                                               p∨q ≡ q∨p
                                              pq ≡ qp

                A condicional p→q não é comutativa. p→q e q→p não são equivalentes.

     A equivalência correta para a condicional é a contrapositiva:

                                            p→q ≡ ~q→~p

Essa propriedade é especialmente importante para questões de concurso público, pois muitas vezes a banca
altera a ordem das proposições nas alternativas justamente para tentar esconder a resposta. Vamos a um
exemplo.


---

(TJ SP/2015) Uma afirmação equivalente à afirmação: ‘Se Marcondes é físico ou Isabela não é economista,
então Natália não é advogada e Rui é médico’, é:
a) Se Rui é médico ou Natália não é advogada, então Isabela é economista e Marcondes não é físico.
b) Se Rui não é médico e Natália é advogada, então Isabela é economista ou Marcondes não é físico.
c) Se Marcondes não é físico e Isabela é economista, então Natália é advogada ou Rui não é médico.
d) Se Isabela é economista e Rui é médico, então Marcondes é físico e Natália não é advogada.
e) Se Rui não é médico ou Natália é advogada, então Isabela é economista e Marcondes não é físico.
Comentários:
Primeiramente, observe que a questão nos dá uma condicional e nos pede uma condicional equivalente. Isso
significa que precisamos saber a contrapositiva:
                                                p→q ≡ ~q→~p
Vamos dar nomes às proposições simples:
                                           m: "Marcondes é físico."
                                           i: "Isabela é economista."
                                           n: "Natália é advogada."
                                               r: "Rui é médico."


A proposição original do enunciado é dada por:
                                               (m∨~i)→(~n∧r)
A contrapositiva equivalente é dada por:
                                             ~(~n∧r) →~(m∨~i)
As duas parcelas dessa condicional ainda podem ser melhor desenvolvidas por De Morgan: para negar tanto
a conjunção quanto a disjunção inclusiva, negam-se todas as parcelas e troca-se o operador ("e" para "ou" e
vice-versa). Logo, podemos reescrever a expressão da seguinte forma:
                                       (~(~n) ∨~r) →(~ m∧~(~i))


A dupla negação de uma proposição equivale à proposição original. Logo:
                                              (n ∨~r) →(~m ∧ i)


Devemos, então, procurar pela seguinte frase:
       "Se [(Natália é advogada) ou (Rui não é médico)], então [(Marcondes não é físico) e (Isabela é
                                               economista)]"


---

Veja que a letra E apresenta uma frase muito parecida. Essa alternativa utilizou a propriedade comutativa
para o conectivo "e" e para o "ou" da nossa frase:
                                 (n ∨~r) →(~m ∧ i) ≡ (~r ∨ n) →(i ∧ ~m)
   "Se [(Rui não é médico) ou (Natália é advogada)], então [(Isabela é economista) e (Marcondes não é
                                                físico)]."
Gabarito: Letra E.


Propriedade associativa

Na álgebra elementar, quando realizamos uma multiplicação, é comum ouvirmos a frase "a ordem dos
fatores não altera o produto". Essa frase resume a propriedade associativa para a multiplicação.
Vamos supor que queremos realizar a multiplicação 3 × 5 × 7. Ela pode ser feita de duas formas:

   •   Multiplicamos 3 × 5 e depois multiplicamos esse resultado por 7, obtendo (3 × 5) × 7; ou
   •   Multiplicamos 3 pelo resultado da multiplicação de 5 × 7, obtendo 3 × (5 × 7).
Ou seja, na álgebra elementar, a propriedade associativa nos diz que em uma multiplicação de diversos
termos, podemos realizar as operações de multiplicação na ordem que bem entendermos que o resultado
será o mesmo:
                                      (3 × 5) × 7 = 3 × (5 × 7)
O mesmo vale para a adição de termos:
                                        (3 + 5) + 7 = 3 + (5 + 7)
Na álgebra de proposições temos algo muito semelhante. Dizemos que a conjunção "e" e a disjunção
inclusiva "ou" gozam da propriedade associativa, sendo válidas as equivalências:

                                            (p∧q)∧r ≡ p∧(q∧r)

                                            (p∨q)∨r ≡ p∨(q∨r)

        Observe que a propriedade associativa não mistura em uma mesma expressão o conectivo
        "e" e o conectivo "ou"

Vamos a um exemplo que mostra uma utilidade para a propriedade associativa.


---

Mostre que p∨(q∨~p) é uma tautologia.
Lembre-se que uma tautologia ocorre quando a proposição em questão é sempre verdadeira.
Utilizando a propriedade comutativa em (q∨~p), temos:
                                                p∨(~p∨q)


Utilizando a propriedade associativa na expressão acima, temos:
                                                (p∨~p)∨q


(p∨~p) é sempre verdadeiro, portanto, é uma tautologia. Logo, ficamos com:
                                                   t∨q


Observe que a t ∨ q é a disjunção inclusiva de um termo que é sempre verdade com a proposição q. Logo, se
ao menos um dos termos é sempre verdadeiro (t), essa disjunção inclusiva é sempre verdadeira. Assim:
                                              p∨(q∨~p) ≡ t

Uma outra forma de se entender a propriedade associativa é perceber que, quando temos uma sequência
de conjunções ou de disjunções inclusivas, podemos remover os parênteses.

(TRT 1/2008) Proposições compostas são denominadas equivalentes quando possuem os mesmos valores
lógicos V ou F, para todas as possíveis valorações V ou F atribuídas às proposições simples que as compõem.
Assinale a opção correspondente à proposição equivalente a “¬[[A∧(¬B)]→C]”.
a) A∧(¬B)∧(¬C)
b) (¬A)∨(¬B)∨C
c) C→[A∧(¬B)]
d) (¬A)∨B∨C
e) [(¬A)∧B]→(¬C)
Comentários:
A proposição original trata da negação de um condicional em que o antecedente da condicional é uma
conjunção dada por [A∧(~B)].
Para negar uma condicional, utilizamos a equivalência ~ (p→ q) ≡ p∧~ q. Aplicando ao caso em questão,
devemos manter [A∧(~B)], trocar a condicional pela conjunção e negar C:
                                     [A∧(~B)] → C ≡ [A∧(~B)]∧(~C)
Observe que, pela propriedade associativa, a ordem em que é executada a conjunção não importa. Logo,
podemos escrever:
                                      [A∧(~B)] → C ≡ A∧(~B)∧(~C)
Gabarito: Letra A.


---

Propriedade distributiva

Na álgebra elementar, a propriedade distributiva da multiplicação com relação à adição consiste em realizar
a seguinte operação:
                                     3×(5 + 7) = 3 × 5 + 3 × 7
Da mesma forma, podemos partir do lado direito da equação acima chegar ao lado esquerdo "colocando o
número 3 em evidência":
                                      3 × 5 + 3 × 7 = 3 × (5 + 7)

Na álgebra de proposições temos as seguintes propriedades distributivas:

   •   Do conectivo "e" com relação ao conectivo "ou";
   •   Do conectivo "ou" com relação ao conectivo "e".

Propriedade distributiva do “e” com relação ao “ou”

A propriedade distributiva do conectivo "e" em relação ao "ou" é dada pela equivalência abaixo. Perceba
que nela "p∧” é distribuído.

                                         p∧(q∨r) ≡ (p∧q) ∨ (p∧r)

É importante também reconhecer a propriedade "de trás para frente". Isso significa que podemos colocar o
termo "p∧” em evidência.

                                          (p∧q)∨(p∧r) ≡ p∧(q∨r)

Propriedade distributiva do “ou” com relação ao “e”

A propriedade distributiva do conectivo "ou" em relação ao "e" é dada pela equivalência abaixo. Perceba
que nela "p∨” é distribuído.

                                          p∨(q∧r) ≡ (p∨q) ∧ (p∨r)

É importante também reconhecer a propriedade "de trás para frente". Isso significa que podemos colocar o
termo "p∨ " em evidência.

                                         (p∨q) ∧ (p∨r) ≡ p∨(q∧ r)


---

(SEFAZ SC/2010) Na questão, considere a notação ¬X para a negação da proposição X.
Considere as proposições a e b e assinale a expressão que é logicamente equivalente a (a ∧ b) ∨ (a ∧ ¬b)
a) ¬a ∧ ¬b
b) ¬a ∨ ¬b
c) ¬a ∨ b
d) a ∨ ¬b
e) a
Comentários:
Por meio da propriedade distributiva, podemos colocar "a∧” em evidência:
                                          (a∧b)∨ (a∧~b) ≡ a∧ (b∨~b)


A expressão (b∨~b) é uma tautologia. Logo, a∧ (b∨~b) corresponde a:
                                                        a∧ t
Perceba que o valor da conjunção é determinado exclusivamente por a, uma vez que a outra parcela da
conjunção é sempre verdadeira. Portanto:
                                                  (a∧b)∨(a∧~b) ≡ a
Gabarito: Letra E.


(Pref. Alumínio/2016) Considere a afirmação: Sueli é professora e, pratica ginástica ou pratica corrida. Uma
afirmação equivalente é
A) Sueli é professora e pratica ginástica e pratica corrida.
B) Se Sueli é professora, então ela não pratica ginástica e não pratica corrida.
C) Sueli é professora e pratica ginástica, ou é professora e pratica corrida.
D) Se Sueli não pratica ginástica ou não pratica corrida, então ela é professora.
E) Sueli pratica ginástica e pratica corrida, ou é professora.
Comentários:
Sejam as proposições simples:
                                             s: "Sueli é professora."
                                          g: "Sueli pratica ginástica."
                                           k: "Sueli pratica corrida."


Na afirmação do enunciado, a vírgula após o "e" indica parênteses na proposição composta:

                                              ,
                      "[Sueli é professora] e [(pratica ginástica) ou (pratica corrida)]."


---

Logo, temos a seguinte representação:
                                                   s∧(g∨k)


Por meio da propriedade distributiva, podemos distribuir "s∧”:
                                            s∧(g∨k) ≡ (s∧g)∨(s∧k)


Temos, portanto, a seguinte equivalência:
   (s∧g)∨(s∧k): "([Sueli é professora] e [pratica ginástica]), ou ([Sueli é professora] e [pratica corrida])"


Essa equivalência corresponde à alternativa C.
Gabarito: Letra C.

Quanto temos um condicional e queremos utilizar a álgebra de proposições para resolver alguma questão,
é necessário transformar a condicional em disjunção inclusiva por meio da seguinte equivalência já
conhecida:

                                                 p→q ≡ ~p∨q

Lembre-se, também, que temos como transformar a negação da condicional em uma conjunção:

                                               ~(p→q) ≡ p∧~q

Vejamos um exemplo.

(TCE-RO/2013) Com referência às proposições lógicas simples P, Q e R, julgue o próximo item.
Se ¬R representa a negação de R, então as proposições P∨[¬(Q→R)] e (P∨Q)∧[P∨(¬R)] são equivalentes.
Comentários:
Note que poderíamos resolver essa questão comparando as tabelas-verdade das duas proposições. Nesse
momento, vamos resolver o problema com álgebra de proposições.
A nossa estratégia será desenvolver P∨[~(Q→R)] para tentar chegar em (P∨Q)∧[P∨(~R)].


Veja que, para a negação da condicional (Q→R), podemos utilizar a equivalência ~(p→q) ≡ p∧~q. Logo,
P∨[~(Q→R)] corresponde a:
                                                  P∨[Q∧~R]


Aplicando a propriedade distributiva em "P∨”, temos:
                                        P∨[Q∧~R] ≡ [P∨Q] ∧ [P∨~R]


---

Note, portanto, que a partir de P∨[~(Q→R)] chegamos em [P∨Q]∧[P∨~R]. Logo, as proposições são
equivalentes.
Gabarito: CERTO.


Propriedade da identidade, da absorção e da idempotência

        Trate as propriedades da identidade, da absorção e da idempotência como um "bônus"
        que pode te ajudar em algumas questões mais difíceis. Não se apegue muito a essas
        propriedades, pois elas não costumam aparecer em prova.

Para melhor memorizar as propriedades da identidade e da absorção, podemos estabelecer uma analogia
entre lógica de proposições e conjuntos.

Observada a analogia, vamos às propriedades.

Propriedade da identidade

Propriedade da identidade para a conjunção

Sendo t uma tautologia e c uma contradição, temos as seguintes equivalências:

                                                 p∧t≡p

                                                 p∧c≡c

Note que p ∧ t é equivalente a p porque se trata de uma conjunção em que um termo é sempre verdadeiro
(t). Isso significa que o valor de p ∧ t é consequência somente do valor de p:

   •   Se p for verdadeiro, teremos V ∧ V, que é uma conjunção verdadeira; e
   •   Se p for falso, teremos F ∧ V, que é uma conjunção falsa.


---

Além disso, p ∧ c é equivalente a c porque se trata de uma conjunção em que temos um termo sempre falso
(c).

Para fins de memorização, observe o análogo da teoria dos conjuntos:

Propriedade da identidade para a disjunção inclusiva

Sendo t uma tautologia e c uma contradição, temos as seguintes equivalências:

                                                  p∨t≡t

                                                  p∨c≡p

Note que p ∨ t é equivalente a t porque se trata de uma disjunção inclusiva em que temos um termo sempre
verdadeiro (t).

Além disso, p ∨ c é sempre equivalente a p porque se trata de uma disjunção inclusiva em que um termo é
sempre falso (c). Isso significa que o valor de p∨c é consequência somente do valor de p:

   •   Se p for verdadeiro, teremos V ∨ F, que é uma disjunção verdadeira; e
   •   Se p for falso, teremos F ∨ F, que é uma disjunção falsa.


---

Para fins de memorização, observe o análogo da teoria dos conjuntos:

(ANPAD/2014) A proposição composta p∧(q∨(~p)) é logicamente equivalente à proposição
A) q
B) p∧q
C) p∨q
D) p∧(~q)
E) p∨(~q)
Comentários:
Aplicado a propriedade distributiva em "p∧", temos:
                                      p∧(q∨~p) ≡ (p∧q) ∨ (p∧~p)


(p∧~p) é uma contradição. Logo, ficamos com:
                                               (p∧q) ∨ c


A disjunção inclusiva de um termo com uma contradição corresponde ao próprio termo (propriedade da
identidade para a disjunção inclusiva). Logo, temos:
                                                 (p∧q)
Gabarito: Letra B.


---

Propriedade da absorção

A propriedade da absorção é representada por duas equivalências:

                                             p ∨ (p ∧ q) ≡ p

                                             p ∧ (p ∨ q) ≡ p

Para fins de memorização, observe o análogo da teoria dos conjuntos:

Essas equivalências são demonstráveis por tabela-verdade:

(SEFAZ-MS/2006) Representando por ~r a negação de uma proposição r, a negação de p ∧ (p ∨ q) é
equivalente a:
a) ~p.
b) ~q.
c) ~(p ∨ q).
d) ~(p ∧ q).
e) uma contradição.
Comentários:
Pela propriedade da absorção, sabemos que p ∧ (p ∨ q) ≡ p. Logo, a negação pedida é ~p.
Gabarito: Letra A.


---

Propriedade da idempotência

A propriedade da idempotência é representada por duas equivalências:

                                                p∧p≡p

                                                p∨p≡p

O análogo à teoria dos corresponderia à intersecção de um conjunto com ele mesmo e à união de um
conjunto com ele mesmo.

Essas equivalências são demonstráveis por tabela-verdade:

(DPEN/2013) Considerando que, P, Q e R são proposições conhecidas, julgue o próximo item.
A Proposição ¬[(P → Q) ∨ Q] é equivalente à proposição P ∧ (¬Q), em que ¬P é a negação de P.
Comentários:
Primeiramente, vale perceber que essa questão pode ser resolvida por tabela-verdade, pois para duas
proposições serem equivalentes basta que elas apresentem a mesma tabela-verdade.
Dito isso, vamos resolver a questão por álgebra de proposições. A nossa estratégia será partir de
~[(P→Q)∨Q] para chegar em P∧(~Q).


Vamos desenvolver ~[(P→Q)∨Q] por De Morgan, negando cada parcela da disjunção inclusiva e trocando
"ou" por "e":
                                              ~(P→Q)∧~Q


Para negar uma condicional, utilizamos a seguinte equivalência: ~(p→ q) ≡ p∧~ q. Ficamos com:
                                            [P∧(~Q)]∧(~Q)


---

Pela propriedade associativa, podemos escrever:
                                            P∧[(~Q)∧(~Q)]


Observe que, pela propriedade idempotente, [(~Q)∧(~Q)] apresenta sempre o valor lógico de (~Q). Isso
porque Quando (~Q) é V, [(~Q)∧(~Q)] é V, e quando (~Q) é F, [(~Q)∧(~Q)] é F. Logo, nossa conjunção fica:
                                                  P∧(~Q)
Gabarito: CERTO.


Equivalências lógicas × tautologia, contradição e contingência

Você se lembra que um dos métodos para descobrirmos se uma proposição composta é uma tautologia,
uma contradição ou uma contingência é utilizar equivalências lógicas ou álgebra de proposições?

Esse método costuma ser o mais rápido, porém requer o domínio das equivalências lógicas e das
propriedades da álgebra de proposições.

Voltemos ao exemplo da aula de tautologia, contradição e contingência: queremos verificar se a proposição
abaixo é uma tautologia:

                              ((p∧q) → r)  (p→(q→ r)) é uma tautologia?

Agora conhecemos a seguinte equivalência: (p→q) ≡ (~p∨q). Aplicando essa equivalência a cada um dos
lados da expressão bicondicional do nosso exemplo, tem-se que:

                                Lado esquerdo: ((p∧q) → r) ≡ ~(p∧q) ∨ r

                                 Lado direito: (p→ (q→ r)) ≡ ~p∨ (q→ r)

Portanto, reescrevendo a bicondicional original ((p∧q) → r)  (p→(q→ r)), temos:

                                        ~(p∧q) ∨ r  ~p∨ (q→ r)

Prosseguindo, por De Morgan, a proposição composta ~(p∧q), ao lado esquerdo da expressão, pode ser
reescrita como (~p∨~q). Já a condicional q→r, ao lado direito, pode ser reescrita como seu equivalente
~qVr. Fazendo as devidas substituições na expressão obtida no passo anterior, ~(p∧q) ∨ r  ~p∨(q→ r),
teremos:

                                      (~p∨~q) ∨ r  ~p∨(~q ∨ r)

Observe os dois lados da bicondicional. Eles são muito parecidos, exceto pelo uso dos parênteses que
indicam uma ordem diferente de se executar o operador "ou". Utilizando a propriedade associativa do lado
direito da bicondicional, podemos reescrever:


---

                                        (~p∨~q) ∨ r  (~p∨ ~q) ∨ r

Podemos concluir, portanto, que ambos os lados da expressão bicondicional são idênticos, e, por
conseguinte, sempre assumirão o mesmo valor lógico. Isso significa que o nosso bicondicional sempre será
verdadeiro e, portanto, é uma tautologia.

Pessoal, uma vez que se tem a prática com álgebra de proposições, a resolução de algumas questões de
tautologia, contradição e contingência ficam mais rápidas. Observe, porém, que sempre é possível resolver
esse tipo de questão por tabela-verdade ou pelo método da conclusão falsa.
Vamos resolver alguns exercícios do assunto utilizando equivalências lógicas.

(STJ/2018) Considere as proposições P e Q a seguir.
P: Todo processo que tramita no tribunal A ou é enviado para tramitar no tribunal B ou no tribunal C.
Q: Todo processo que tramita no tribunal C é enviado para tramitar no tribunal B.
A partir dessas proposições, julgue o item seguinte.
A proposição ¬P→(P→Q), em que ¬P denota a negação da proposição P, é uma tautologia, isto é, todos os
elementos de sua tabela-verdade são V (verdadeiro).
Comentários:
Temos a proposição:
                                                ~P→ (P→Q)


Utilizando a equivalência p→q ≡ ~p∨q, temos:
                                               ~(~P)∨(P→Q)
                                                 P∨(P→Q)


Novamente, utilizando a mesma equivalência para (P→Q):
                                                 P∨(~P∨Q)


Utilizando a propriedade associativa:
                                                 (P∨~P)∨Q


P∨~P é uma tautologia, logo:
                                                       t∨Q


---

Observe que t ∨ Q é a disjunção inclusiva de um termo que é sempre verdade com a proposição Q. Portanto,
como ao menos um dos termos é sempre verdadeiro (t), essa disjunção inclusiva é sempre verdadeira
(propriedade da identidade para a disjunção inclusiva). Logo, trata-se de uma tautologia.
Gabarito: CERTO.


(CBM AL/2017) A respeito de proposições lógicas, julgue o item a seguir.
Se P e Q forem proposições simples, então a proposição composta Q∨(Q→P) é uma tautologia.
Comentários:
Temos a seguinte proposição composta:
                                               Q∨ (Q → P)


Utilizando a equivalência p→q ≡ ~p∨q para (Q → P), temos:
                                               Q∨(~Q∨ P)


Pela propriedade associativa, podemos escrever:
                                               (Q∨~Q)∨P


Q∨~Q é uma tautologia. Portanto, ficamos com:
                                                   t∨P


Observe que a t ∨ P é a disjunção inclusiva de um termo que é sempre verdade com a proposição P. Portanto,
como ao menos um dos termos é sempre verdadeiro (t), essa disjunção inclusiva é sempre verdadeira
(propriedade da identidade para a disjunção inclusiva). Logo, trata-se de uma tautologia.
Gabarito: CERTO.


---

                        QUESTÕES COMENTADAS - FGV

Equivalências lógicas

Equivalências fundamentais

 (FGV/CBM AM/2022) Um antigo ditado diz: “Se há fumaça então há fogo”.
Uma sentença logicamente equivalente é
a) se há fogo então há fumaça.
b) se não há fumaça então não há fogo.
c) se não há fogo, então não há fumaça.
d) se não há fumaça pode haver fogo.
e) se há fogo então pode haver fumaça.

Comentários:

Sejam as proposições simples:

                                             u: "Há fumaça."

                                                 o: "Há fogo."

A sentença original pode ser descrita por u→o:

                                 u→o: “Se [há fumaça], então [há fogo]”.

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                             u→o ≡ ~o→~u

A proposição equivalente pode ser descrita por:

                          ~o→~u: "Se [não há fogo], então [não há fumaça]."

Gabarito: Letra C.


---

 (FGV/SEMSA Manaus/2022) Considere a afirmação:
“Se o acusado estava no hospital então não é culpado”.
É correto concluir que
a) se o acusado não estava no hospital então é culpado.
b) se o acusado é culpado então não estava no hospital.
c) se o acusado não é culpado então não estava no hospital.
d) o acusado estava no hospital e é culpado.
e) o acusado não é culpado e não estava no hospital.

Comentários:

Sejam as proposições simples:

                                      h: "O acusado estava no hospital."

                                          c: "O acusado é culpado."

A sentença original pode ser descrita por h→~c:

                     h→~c: “Se [o acusado estava no hospital], então [ele não é culpado]”.

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                             h→~c ≡ ~(~c)→~h

A dupla negação de c corresponde à proposição original. Ficamos com:

                                                h→~c ≡ c→~h

A proposição equivalente pode ser descrita por:

                      c→~h: "Se [o acusado é culpado], então [não estava no hospital]."

Gabarito: Letra B.


---

 (FGV/BANESTES/2021) A frase a seguir é um conhecido ditado popular:
“Se não tem cão então caça com gato".
Uma frase logicamente equivalente é:
a) Se tem cão então não caça com gato;
b) Se caça com gato então não tem cão;
c) Tem cão ou caça com gato;
d) Tem cão e caça com gato;
e) Tem cão ou não caça com gato.

Comentários:

Sejam as proposições simples:

                                                 c: "Tem cão."

                                            g: "Caça com gato."

A proposição original pode ser descrita por ~c→g:

                              ~c→g: "Se [não tem cão], então [caça com gato]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                            ~c→g ≡ ~g→~(~c)

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                 ~c→g ≡ ~g→c

A proposição equivalente pode ser escrita por:

                              ~g→c:"Se [não caça com gato], então [tem cão]."

Veja que essa equivalência não está nas alternativas apresentadas.


---

Vamos agora utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o seguinte
procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                              ~c→g ≡ ~(~c)∨g

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                ~c→g ≡ c∨g

A proposição equivalente pode ser descrita por:

                                   c∨g: “[Tem cão] ou [caça com gato].”

Note que essa proposição equivalente está presente na alternativa C.

Gabarito: Letra C.

  (FGV/FunSaúde CE/2021) Considere a afirmação tradicional abaixo: “Cão que ladra não morde” Essa
afirmativa é equivalente a:
a) Cão que não morde, ladra.
b) Cão que não ladra, morde.
c) Cão que morde, não ladra.
d) Um cão não ladra ou morde.
e) Um cão ladra ou morde.

Comentários:

Considere as seguintes proposições simples:

                                              l: "Um cão ladra."

                                           m: "Um cão morde."

Note que a afirmação presente no enunciado, “cão que ladra não morde”, apresenta a ideia de "se um cão
ladra, então um cão não morde". Portanto, a afirmação original pode ser descrita por l→~m.

                         l→~m: "Se [um cão ladra], então [um cão não morde]."


---

As alternativas da questão apresentam tanto a ideia de condicional (→) quanto a ideia de disjunção
inclusiva ("ou", ∨). Devemos, portanto, testar as duas equivalências fundamentais que envolvem a
condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                            l→~m ≡ ~(~m)→~l

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                               l→~m ≡ m→~l

A proposição equivalente pode ser escrita por:

                          m→~l: "Se [um cão morde], então [um cão não ladra]."

Essa equivalência está descrita de uma forma similar na alternativa C:

                                   m→~l: "[Cão que morde], [não ladra]"

O gabarito, portanto, é a alternativa C.

Para fins didáticos, vamos utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                              l→~m ≡ ~l∨~m

A proposição equivalente pode ser descrita por:

                          ~l∨~m: “[Um cão não ladra] ou [um cão não morde].”

Essa proposição equivalente poderia ser representada por:

                              ~l∨~m: “[Um cão não ladra] ou [não morde].”


---

Veja que essa equivalência não aparece nas alternativas.

Gabarito: Letra C.

 (FGV/CGM Niterói/2018) Considere a sentença:
“Se Arlindo é baixo, então Arlindo não é atleta.”
Assinale a opção que apresenta a sentença logicamente equivalente à sentença dada.
a) “Se Arlindo não é atleta, então Arlindo é baixo.”
b) “Se Arlindo não é baixo, então Arlindo é atleta.”
c) “Se Arlindo é atleta, então Arlindo não é baixo.”
d) “Arlindo é baixo e atleta.”
e) “Arlindo não é baixo e não é atleta.”

Comentários:

Sejam as proposições simples:

                                             b: "Arlindo é baixo."
                                            a: "Arlindo é atleta."

A proposição original pode ser descrita por b→~a:

                          b→~a: "Se [Arlindo é baixo], então [Arlindo não é atleta].

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                             b→~a ≡ ~(~a)→~b

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                               b→~a ≡ a→~b

A proposição equivalente pode ser descrita por:

                         a→~b:"Se [Arlindo é atleta], então [Arlindo não é baixo]."

Gabarito: Letra C.


---

 (FGV/Pref. Salvador/2017) Considere a sentença:
“Se Juvenal foi trabalhar, então Rosalva não saiu de casa”.
É correto concluir que
a) “Juvenal foi trabalhar ou Rosalva não saiu de casa”.
b) “Juvenal foi trabalhar e Rosalva não saiu de casa”.
c) “se Juvenal não foi trabalhar, então Rosalva saiu de casa”.
d) “se Rosalva não saiu de casa, então Juvenal foi trabalhar”.
e) “se Rosalva saiu de casa, então Juvenal não foi trabalhar”.

Comentários:

Sejam as proposições simples:

                                           j: "Juvenal foi trabalhar."

                                           r: "Rosalva saiu de casa."

A proposição original pode ser descrita por j→~r:

                    j→~r: "Se [Juvenal foi trabalhar], então [Rosalva não saiu de casa]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                              j→~r ≡ ~(~r)→~j

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                 j→~r ≡ r→~j

A proposição equivalente pode ser escrita por:

                    r→~j:"Se [Rosalva saiu de casa], então [Juvenal não foi trabalhar]."

O gabarito, portanto, é a alternativa E.


---

Para fins didáticos, vamos utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                j→~r ≡ ~j∨~r

A proposição equivalente pode ser descrita por:

                     ~j∨r: “[Juvenal não foi trabalhar] ou [Rosalva não saiu de casa].”

Veja que essa equivalência não aparece nas alternativas.

Gabarito: Letra E.

  (FGV/BANESTES/2018) Considere a sentença “Se Marta gosta de pescar, então ela gosta de siri”. Uma
sentença equivalente à sentença dada é:
a) Se Marta não gosta de pescar, então ela não gosta de siri;
b) Se Marta gosta de siri, então ela gosta de pescar;
c) Se Marta gosta de siri, então ela não gosta de pescar;
d) Se Marta não gosta de siri, então ela não gosta de pescar;
e) Se Marta não gosta de pescar, então ela gosta de siri.

Comentários:

Sejam as proposições simples:

                                         p: "Marta gosta de pescar."

                                           s: "Marta gosta de siri."

A proposição original pode ser descrita por p→s:

                        p→s: "Se [Marta gosta de pescar], então [ela gosta de siri]."

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.


---

Para o caso em questão, temos:

                                                 p→s ≡ ~s→~p

A proposição equivalente pode ser descrita por:

                     ~s→~p: "Se [Marta não gosta de siri], então [ela não gosta de pescar]."

Gabarito: Letra D.

  (FGV/BANESTES/2018) Considere a afirmação:
Se um carro não tem gasolina então não anda.
Considere, agora, as afirmações seguintes:
I. Se um carro tem gasolina então anda.
II. Se um carro não anda então não tem gasolina.
III. Se um carro anda então tem gasolina.
É/são logicamente equivalente(s) à afirmação dada:
a) somente I;
b) somente II;
c) somente III;
d) somente I e II;
e) I, II e III.

Comentários:

Sejam as proposições simples:

                                          g: "Um carro tem gasolina."

                                              a: "Um carro anda."

A proposição original pode ser descrita por ~g→~a:

                          ~g→~a: "Se [um carro não tem gasolina], então [não anda]."

Veja que estamos partindo de uma condicional e a questão pergunta quais das três condicionais são
equivalentes. Para avaliá-las, devemos utilizar somente a equivalência contrapositiva, pois ela é a única que
transforma uma condicional em outra condicional.

A equivalência contrapositiva é dada por p→q ≡ ~q→~p. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:


---

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                         ~g→~a ≡ ~(~a)→~(~g)

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                ~g→~a ≡ a→g

A proposição equivalente pode ser descrita por:

                             a→g: "Se [um carro anda], então [tem gasolina]."

Somente a afirmação III apresenta uma condicional equivalente. As demais condicionais não são
equivalentes, pois não decorrem da equivalência contrapositiva.

Gabarito: Letra C.

  (FGV/BANESTES/2018) Considere a sentença: “Se Carla gosta de peixe, então Carla sabe nadar”. Uma
sentença logicamente equivalente à sentença dada é:
a) Se Carla sabe nadar, então Carla gosta de peixe;
b) Se Carla não sabe nadar, então Carla não gosta de peixe;
c) Se Carla não gosta de peixe, então Carla não sabe nadar;
d) Carla gosta de peixe e sabe nadar;
e) Carla gosta de peixe ou não sabe nadar.

Comentários:

Sejam as proposições simples:

                                         p: "Carla gosta de peixe."
                                             n: "Carla sabe nadar."

A proposição composta original pode ser descrita por p→n:

                        p→n: "Se [Carla gosta de peixe], então [Carla sabe nadar]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)


---

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                p→n ≡ ~n→~p

Ficamos com:

                     ~n→~p: "Se [Carla não sabe nadar], então [Carla não gosta de peixe]."

O gabarito, portanto, é a alternativa B.

Para fins didáticos, vamos avaliar a segunda possibilidade. Para aplicar a segunda equivalência, devemos
realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                 p→n ≡ ~p∨n

Ficamos com:

                           ~p∨n: "[Carla não gosta de peixe] ou [Carla sabe nadar]."

Veja que essa equivalência não aparece nas alternativas.

Gabarito: Letra B.

   (FGV/Pref. Angra/2019) Considere a sentença:
“Se João gosta de goiaba, então gosta de abacate.”
Uma sentença logicamente equivalente à sentença dada é
a) “João não gosta de goiaba ou gosta de abacate”.
b) “Se João não gosta de goiaba, então não gosta de abacate.”
c) “Se João gosta de abacate, então gosta de goiaba.”
d) “João gosta de goiaba e não gosta de abacate.”
e) “João gosta de goiaba ou gosta de abacate.


---

Comentários:

Sejam as proposições simples:

                                         g: "João gosta de goiaba."
                                        a: "João gosta de abacate."

A proposição composta original pode ser descrita por g→a:

                       g→a: "Se [João gosta de goiaba], então [gosta de abacate]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                              g→a ≡ ~a→~g

Ficamos com:

                 ~a→~g: "Se [João não gosta de abacate], então [não gosta de goiaba]."

Note que não temos resposta para esse caso.
Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                               g→a ≡ ~g∨a
Ficamos com:

                        ~g∨a: "[João não gosta de goiaba] ou [gosta de abacate]."

Note que a alternativa A apresenta essa segunda equivalência.

Gabarito: Letra A.


---

   (FGV/TJ SC/2018) Uma sentença logicamente equivalente à sentença “Se Pedro é torcedor da
Chapecoense, então ele nasceu em Chapecó” é:
a) Se Pedro não é torcedor da Chapecoense, então ele não nasceu em Chapecó;
b) Se Pedro nasceu em Chapecó, então ele é torcedor da Chapecoense;
c) Pedro é torcedor da Chapecoense e não nasceu em Chapecó;
d) Pedro não é torcedor da Chapecoense ou nasceu em Chapecó;
e) Pedro é torcedor da Chapecoense ou não nasceu em Chapecó.

Comentários:

Sejam as proposições simples:

                                  p: "Pedro é torcedor da Chapecoense."
                                     n: "Pedro nasceu em Chapecó."

A proposição composta original pode ser descrita por p→n:

               p→n: "Se [Pedro é torcedor da Chapecoense], então [ele nasceu em Chapecó]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                              p→n ≡ ~n→~p

Ficamos com:

        ~n→~p: "Se [Pedro não nasceu em Chapecó], então [ele não é torcedor da Chapecoense]."

Note que não temos resposta para esse caso.

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:


---

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                               p→n ≡ ~p∨n

Ficamos com:

                ~p∨n: "[Pedro não é torcedor da Chapecoense] ou [nasceu em Chapecó]."

Note que a alternativa D apresenta essa segunda equivalência.

Gabarito: Letra D.


   (FGV/ALERO/2018) Considere a afirmação:
“Se um animal não tem dentes então não morde”.
Uma afirmação logicamente equivalente é
a) “Se um animal tem dentes então morde.”
b) “Se um animal não morde então não tem dentes.”
c) “Se um animal morde então tem dentes.”
d) “Existe um animal que não tem dentes e morde.”
e) “Um animal não tem dentes ou morde.”

Comentários:

Sejam as proposições simples:

                                        d: "Um animal tem dentes."
                                          m: "Um animal morde."

A proposição composta original pode ser descrita por ~d→~m:

                     ~d→~m: "Se [um animal não tem dentes], então [não morde]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:


---

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                         ~d→~m ≡ ~(~m)→~(~d)

A dupla negação de uma proposição corresponde à proposição original. Logo:

                                              ~d→~m ≡ m→d

Ficamos com:

                            m→d: "Se [um animal morde], então [tem dentes]."

O gabarito, portanto, é a letra C.

Para fins didáticos, vamos utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                           ~d→~m ≡ ~(~d)∨~m

A dupla negação de uma proposição corresponde à proposição original. Logo:

                                             ~d→~m ≡ d∨~m

Ficamos com:

                             d∨~m: "[Um animal tem dentes] ou [não morde]."

Veja que essa equivalência não aparece nas alternativas.

Gabarito: Letra C.


---

   (FGV/TRT 12/2017) O salão principal do tribunal está preparado para um evento comemorativo e
diversas pessoas foram convidadas a comparecer. Na porta do salão está um funcionário que recebeu
instruções sobre as pessoas que podem entrar e uma delas foi:
“Se tiver carteira de advogado pode entrar.”
É correto concluir que:
a) se João entrou então tem carteira de advogado;
b) quem não tem carteira de advogado não pode entrar;
c) se Pedro não pode entrar então não tem carteira de advogado;
d) quem é advogado, mas não tem carteira, pode entrar;
e) todos os que entraram são advogados.

Comentários:

Considere as proposições simples:

                               k: "Um indivíduo tem carteira de advogado."

                                      e: "Um indivíduo pode entrar."

A condicional do enunciado, “se tiver carteira de advogado pode entrar” pode ser entendida como k→e:

         k→e: "Se [um indivíduo tem carteira de advogado], então [esse indivíduo pode entrar]."

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               k→e ≡ ~e→~k

A proposição equivalente pode ser descrita por:

   ~e→~k: "Se [um indivíduo não pode entrar], então [esse indivíduo não tem carteira de advogado]."

A alternativa C traz essa conclusão para o caso particular de um indivíduo chamado Pedro. A partir da regra
geral obtida, é correto concluir que "se Pedro não pode entrar, então (Pedro) não tem carteira de advogado".

Gabarito: Letra C.


---

   (FGV/Pref. Salvador/2017) Considere a afirmação:
“Se um sapo é verde, então não come minhoca”.
A partir dessa afirmação, conclui-se, logicamente, que
a) “Se um sapo come minhoca, então não é verde”.
b) “Se um sapo não come minhoca, então é verde”.
c) “Se um sapo não é verde, então come minhoca”.
d) “Um sapo é verde, ou não come minhoca”.
e) “Um sapo não é verde, ou come minhoca”.

Comentários:

Sejam as proposições simples:

                                           v: "Um sapo é verde."

                                       m: "Um sapo come minhoca."

A proposição original pode ser descrita por v→~m:

                       v→~m: "Se [um sapo é verde], então [não come minhoca]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                           v→~m ≡ ~(~m)→~v

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                             v→~m ≡ m→~v

A proposição equivalente pode ser escrita por:

                       m→~v: "Se [um sapo come minhoca], então [não é verde]."

O gabarito, portanto, é a alternativa A.


---

Para fins didáticos, vamos utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                v→~m ≡ ~v∨~m

A proposição equivalente pode ser descrita por:

                        ~v∨~m: “[Um sapo não é verde] ou [não come minhoca].”

Veja que essa equivalência não aparece nas alternativas.

Gabarito: Letra A.

   (FGV/TJ PI/2015) Considere a sentença: “Se gosto de capivara, então gosto de javali”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se não gosto de capivara, então não gosto de javali.
b) Gosto de capivara e gosto de javali.
c) Não gosto de capivara ou gosto de javali.
d) Gosto de capivara ou não gosto de javali.
e) Gosto de capivara e não gosto de javali.

Comentários:

Sejam as proposições simples:

                                              k: "Gosto de capivara."

                                               j: "Gosto de javali."

A proposição original pode ser descrita por k→j:

                           k→j: "Se [gosto de capivara], então [gosto de javali]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)


---

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               k→j ≡ ~j→~k

A proposição equivalente pode ser descrita por:

                     ~j→~k:"Se [não gosto de javali], então [não gosto de capivara]."

Note que não temos resposta para esse caso.

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                  k→j ≡ ~k∨j

A proposição equivalente pode ser descrita por:

                            ~k∨j: “[Não gosto de capivara] ou [gosto de javali].”

O gabarito, portanto, é a alternativa C.

Gabarito: Letra C.

   (FGV/TJ SC/2015) Considere a sentença: “Se cometi um crime, então serei condenado”.
Uma sentença logicamente equivalente à sentença dada é:
a) Não cometi um crime ou serei condenado.
b) Se não cometi um crime, então não serei condenado.
c) Se eu for condenado, então cometi um crime.
d) Cometi um crime e serei condenado.
e) Não cometi um crime e não serei condenado.

Comentários:

Sejam as proposições simples:


---

                                           i: "Cometi um crime."

                                           o: "Serei condenado."

A proposição original pode ser descrita por i→o:

                          i→o: "Se [cometi um crime], então [serei condenado]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               i→o ≡ ~o→~i

A proposição equivalente pode ser descrita por:

                     ~o→~i: "Se [não for condenado], então [não cometi um crime]."

Note que não temos resposta para esse caso.

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                  i→o ≡ ~i∨o

A proposição equivalente pode ser descrita por:

                           ~i∨o: “[Não cometi um crime] ou [serei condenado].”

O gabarito, portanto, é a alternativa A.

Gabarito: Letra A.


---

   (FGV/CGE MA/2014) Considere a sentença: “Se Geraldo foi à academia então Jovelina foi ao cinema.”
É correto concluir que
a) se Geraldo não foi à academia então Jovelina não foi ao cinema.
b) se Jovelina foi ao cinema então Geraldo foi à academia.
c) Geraldo foi à academia ou Jovelina foi ao cinema.
d) Geraldo foi à academia e Jovelina foi ao cinema.
e) Geraldo não foi à academia ou Jovelina foi ao cinema.

Comentários:

Sejam as proposições simples:

                                        g: "Geraldo foi à academia."

                                         j: "Jovelina foi ao cinema."

A proposição original pode ser descrita por g→j:

                     g→j: "Se [Geraldo foi à academia], então [Jovelina foi ao cinema]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               g→j ≡ ~j→~g

A proposição equivalente pode ser descrita por:

               ~j→~g: "Se [Jovelina não foi ao cinema], então [Geraldo não foi à academia]."

Note que não temos resposta para esse caso.

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:


---

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                   g→j ≡ ~g∨j

A proposição equivalente pode ser descrita por:

                      ~g∨j: “[Geraldo não foi à academia] ou [Jovelina foi ao cinema].”

O gabarito, portanto, é a alternativa E.

Gabarito: Letra E.

   (FGV/TJ RJ/2014) Considere a seguinte sentença:
“Se há muitos processos, então os juízes trabalham muito”.
Uma sentença logicamente equivalente a essa é:
a) se não há muitos processos, então os juízes não trabalham muito;
b) se os juízes trabalham muito, então há muitos processos;
c) há muitos processos e os juízes não trabalham muito;
d) não há muitos processos ou os juízes trabalham muito;
e) há muitos processos e os juízes trabalham muito.

Comentários:

Sejam as proposições simples:

                                           p: "Há muitos processos."

                                       j: "Os juízes trabalham muito."

A proposição original pode ser descrita por p→j:

                     p→j: "Se [há muitos processos], então [os juízes trabalham muito]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)


---

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               p→j ≡ ~j→~p

A proposição equivalente pode ser descrita por:

             ~j→~p: "Se [Os juízes não trabalham muito], então [não há muitos processos]."

Note que não temos resposta para esse caso.

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                  p→j ≡ ~p∨j

A proposição equivalente pode ser descrita por:

                     ~p∨j: “[Não há muitos processos] ou [os juízes trabalham muito].”

O gabarito, portanto, é a alternativa D.

Gabarito: Letra D.

   (FGV/CODEBA/2016) Um guarda portuário trabalha na fiscalização das pessoas que transitam pelo
porto e conhece a regra:
“Quem tem crachá pode entrar no navio.”
A partir dessa regra, é correto concluir que
a) se alguém não pode entrar no navio então não tem crachá.
b) quem não tem crachá não pode entrar no navio.
c) se alguém pode entrar no navio então tem crachá.
d) algumas pessoas com crachá não podem entrar no navio.
e) uma pessoa tem crachá ou não entra no navio.


---

Comentários:

A regra conhecida pelo guarda, dada por “quem tem crachá pode entrar no navio”, pode ser entendida como
"se alguém tem crachá, então pode entrar no navio."

Sejam as proposições simples:

                                         k: "Alguém tem crachá."

                                    e: "Alguém pode entrar no navio."

A proposição original pode ser descrita por k→e:

                      k→e: "Se [alguém tem crachá], então [pode entrar no navio].

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                             k→e ≡ ~e→~k

A proposição equivalente pode ser descrita por:

                ~e→~k: "Se [alguém não pode entrar no navio], então [não tem crachá]."

Gabarito: Letra A.


---

Negação da conjunção e da disjunção inclusiva (leis de De Morgan)

   (FGV/SSP AM/2022) Considere a afirmação:
                              “Hoje é sexta-feira e amanhã não trabalharei”.
A negação lógica dessa sentença é
a) Hoje não é sexta-feira e amanhã trabalharei.
b) Hoje não é sexta-feira ou amanhã trabalharei.
c) Hoje não é sexta-feira, então amanhã trabalharei.
d) Hoje é sexta-feira e amanhã trabalharei.
e) Hoje é sexta-feira ou amanhã não trabalharei.

Comentários:

Sejam as proposições simples:

                                          h: "Hoje é sexta-feira."

                                         a: "Amanhã trabalharei."

A proposição original pode ser escrita pela conjunção h∧~a:

                         h∧~a:"[Hoje é sexta-feira] e [Amanhã não trabalharei]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                          ~ (h∧~a) ≡ ~h∨~(~a)

A dupla negação da proposição simples a corresponde à proposição original. Ficamos com:

                                              ~ (h∧~a) ≡ ~h∨a

Logo, a negação requerida pode ser descrita por:

                        ~h∨a: “[Hoje não é sexta-feira] ou [amanhã trabalharei].”

Gabarito: Letra B.


---

   (FGV/SEMSA Manaus/2022) Considere a sentença:
“Paulo é torcedor do Nacional ou Débora não é torcedora do Fast”.
A negação lógica dessa sentença é
a) Paulo não é torcedor do Nacional ou Débora não é torcedora do Fast.
b) Paulo não é torcedor do Nacional ou Débora é torcedora do Fast.
c) Paulo não é torcedor do Nacional e Débora não é torcedora do Fast.
d) Paulo não é torcedor do Nacional e Débora é torcedora do Fast.
e) Paulo é torcedor do Nacional ou Débora é torcedora do Fast.

Comentários:

Sejam as proposições simples:

                                    p: "Paulo é torcedor do Nacional."

                                     d: "Débora é torcedora do Fast."

A sentença original pode ser descrita por p∨~d:

               p∨~d: “[Paulo é torcedor do Nacional] ou [Débora não é torcedora do Fast].”

Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da disjunção inclusiva;
    •   Troca-se a disjunção inclusiva (∨) pela conjunção (∧).

Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:

                                          ~(p∨~d) ≡ ~p∧~(~d)

A dupla negação de d corresponde à proposição original. Ficamos com:

                                             ~(p∨~d) ≡ ~p∧d

Logo, a negação requerida pode ser descrita por:

               ~p∧d: "[Paulo não é torcedor do Nacional] e [Débora é torcedora do Fast]."

Gabarito: Letra D.


---

   (FGV/PC RN/2021) Mário, que mora sozinho, falava ao telefone com sua mãe a respeito do dia anterior:
Lavei a louça e não dormi tarde.
A negação lógica dessa sentença é:
a) Não lavei a louça e não dormi tarde;
b) Lavei a louça e dormi tarde;
c) Não lavei a louça e dormi tarde;
d) Não lavei a louça ou não dormi tarde;
e) Não lavei a louça ou dormi tarde.

Comentários:

Sejam as proposições simples:

                                                l: "Lavei a louça."

                                                d: "Dormi tarde."

A proposição original pode ser escrita pela conjunção l∧~d:

                                   l∧~d:"[Lavei a louça] e [não dormi tarde]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                              ~ (l∧~d) ≡ ~l∨~(~d)

A dupla negação da proposição simples d corresponde à proposição original. Ficamos com:

                                                ~ (l∧~d) ≡ ~l∨d

Logo, a negação requerida pode ser descrita por:

                                  ~l∨d: “[Não lavei a louça] ou [dormi tarde ].”

Gabarito: Letra E.


---

   (FGV/Pref. Salvador/2019) Considere a afirmativa:
“Este mês tem 31 dias e o mês que vem também terá”
A negação dessa afirmativa é
a) “Este mês tem 30 dias e o mês que vem terá 31”.
b) “Este mês não tem 31 dias e o mês que vem também não terá”.
c) “Este mês tem 31 dias e o mês que vem não terá”.
d) “Este mês tem 30 dias ou o mês que vem também terá”.
e) “Este mês não tem 31 dias ou o mês que vem não terá 31 dias”.

Comentários:

Sejam as proposições simples:

                                        e: "Este mês tem 31 dias."
                                     v: "O mês que vem terá 31 dias."

A proposição original pode ser escrita pela conjunção e∧v:

                      e∧v:"[Este mês tem 31 dias] e [o mês que vem também terá]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                             ~ (e∧v) ≡ ~e∨~v

Logo, a negação requerida pode ser descrita por:

                ~e∨~v: “[Este mês não tem 31 dias] ou [o mês que vem não terá 31 dias].”

Gabarito: Letra E.


---

   (FGV/Pref. Angra/2019) Considere a sentença:
“Renato viajou e não telefonou para sua mãe”.
A negação lógica dessa sentença é
a) “Renato viajou e telefonou para sua mãe.”
b) “Renato não viajou e não telefonou para sua mãe.”
c) “Renato não viajou ou telefonou para sua mãe.”
d) “Renato viajou ou não telefonou para sua mãe.”
e) “Renato não viajou ou não telefonou para sua mãe.”

Comentários:

Sejam as proposições simples:

                                            v: "Renato viajou."
                                  m: "Renato telefonou para a sua mãe."

A proposição original pode ser escrita pela conjunção v∧~m:

                        v∧~m: "[Renato viajou] e [não telefonou para a sua mãe]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                         ~ (v∧~m) ≡ ~v∨~(~m)

A dupla negação de uma proposição simples corresponde à proposição original:

                                            ~ (v∧~m) ≡ ~v∨m

Logo, a negação requerida pode ser descrita por:

                       ~v∨m: “[Renato não viajou] ou [telefonou para a sua mãe].”

Gabarito: Letra C.


---

   (FGV/IBGE/2019) Considere a sentença: “Rubens tem mais de 18 anos e sabe dirigir”.
A negação lógica dessa sentença é:
a) Rubens não tem mais de 18 anos e não sabe dirigir;
b) Rubens não tem mais de 18 anos ou não sabe dirigir;
c) Rubens tem mais de 18 anos e não sabe dirigir;
d) Rubens não tem mais de 18 anos e sabe dirigir;
e) Rubens tem mais de 18 anos ou sabe dirigir.

Comentários:

Sejam as proposições simples:

                                       a: "Rubens tem mais de 18 anos."

                                           s: "Rubens sabe dirigir."

A proposição original pode ser escrita pela conjunção a∧s:

                           a∧s: "[Rubens tem mais de 18 anos] e [sabe dirigir]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

   •   Negam-se ambas as parcelas da conjunção;
   •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                              ~ (a∧s) ≡ ~a∨~s

Logo, a negação requerida pode ser descrita por:

                     ~a∨~s: “[Rubens não tem mais de 18 anos] ou [não sabe dirigir].”

Gabarito: Letra B.

   (FGV/BANESTES/2018) A secretária disse ao advogado:
“Fechei a janela e não mexi nos papéis”.
Algum tempo depois, o advogado descobriu que o que disse a secretária não era verdade.
É correto concluir que a secretária:


---

a) fechou a janela e mexeu nos papéis;
b) não fechou a janela e não mexeu nos papéis;
c) não fechou a janela e mexeu nos papéis;
d) fechou a janela ou não mexeu nos papéis;
e) não fechou a janela ou mexeu nos papéis.

Comentários:

Sejam as proposições simples:

                                             f: "Fechei a janela."
                                           m: "Mexi nos papéis."

A proposição original pode ser escrita pela conjunção f∧~m:

                            f∧~m: "[Fechei a janela] e [não mexi nos papéis]."

O fato de que a secretária não disse a verdade significa que a negação do que ela disse, isto é, a negação de
f∧~m, é verdadeira. Devemos, portanto, negar f∧~m para obter uma conclusão correta.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                          ~ (f∧~m) ≡ ~f ∨~(~m)

A dupla negação de uma proposição simples corresponde à proposição original:

                                              ~ (f∧~m) ≡ ~f ∨m

Logo, a negação requerida pode ser descrita por:

                           ~f ∨m: “[Não fechei a janela] ou [mexi nos papéis].”

Portanto, é correto concluir que a secretária "não fechou a janela ou mexeu nos papéis".

Gabarito: Letra E.


---

   (FGV/SEPOG-RO/2017) João voltou de um passeio na floresta com seus amigos e, ao chegar em casa,
disse: “Eu matei a cobra e mostrei o pau”. Pedro, um dos amigos, disse: “isso não foi verdade”.
O significado do que Pedro disse é que João
a) matou a cobra, mas não mostrou o pau.
b) não matou a cobra, mas mostrou o pau.
c) não matou a cobra e não mostrou o pau.
d) não matou a cobra ou não mostrou o pau.
e) matou a cobra ou mostrou o pau.

Comentários:

Sejam as proposições simples:

                                             k: "Eu matei a cobra."
                                             p: "Eu mostrei o pau."

A proposição dita por João pode ser descrita por k∧p:

                                  k∧p: "[Eu matei a cobra] e [mostrei o pau]."

Pedro disse que não é verdade a fala de João, isto é, disse que é falsa a proposição composta k∧p. Isso
significa que a negação de k∧p, segundo Pedro, é verdadeira. Devemos, portanto, negar k∧p.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                               ~(k∧p) ≡ ~k∨~p

Portanto, a negação fica:

                            ~k∨~p: "[Eu não matei a cobra] ou [não mostrei o pau]."

Gabarito: Letra D.


---

   (FGV/SEFIN-RO/2018) Considere a afirmação:
“Ronaldo foi de ônibus e não usou o celular”.
A negação dessa afirmação é:
a) “Ronaldo foi de ônibus e usou o celular”.
b) “Ronaldo não foi de ônibus e não usou o celular”.
c) “Ronaldo não foi de ônibus e usou o celular”.
d) “Ronaldo foi de ônibus ou não usou o celular”.
e) “Ronaldo não foi de ônibus ou usou o celular”.

Comentários:

Sejam as proposições simples:

                                         f: " Ronaldo foi de ônibus."
                                        u: "Ronaldo usou o celular."

A afirmação original pode ser descrita pela conjunção f∧~u:

                          f∧~u: “[Ronaldo foi de ônibus] e [não usou o celular].”

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                           ~(r∧~u) ≡ ~r ∨ ~(~u)

A dupla negação de uma proposição corresponde à proposição original:

                                               ~(r∧~u) ≡ ~r ∨ u

Logo, a negação requerida pode ser descrita por:

                         ~r ∨ u: "[Ronaldo não foi de ônibus] ou [usou o celular]."

Gabarito: Letra E.


---

   (FGV/MPE RJ/2019) Considere a sentença: “João não tomou café e saiu de casa”.
A negação dessa sentença é:
a) João tomou café e saiu de casa;
b) João não tomou café e não saiu de casa;
c) João tomou café e não saiu de casa;
d) João não tomou café ou saiu de casa;
e) João tomou café ou não saiu de casa.

Comentários:

Sejam as proposições simples:

                                             k: "João tomou café."

                                             s: "João saiu de casa."

A sentença original pode ser descrita por ~k∧s:

                              ~k∧s: “[João não tomou café] e [saiu de casa].”

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                             ~(~k∧s) ≡ ~(~k)∨~s

A dupla negação de uma proposição corresponde à proposição original:

                                               ~(~k∧s) ≡ k∨~s

Logo, a negação requerida pode ser descrita por:

                              k∨~s: "[João tomou café] ou [não saiu de casa]."

Gabarito: Letra E.


---

   (FGV/BANESTES/2018) Considere a sentença “Alda gosta de maçã e não gosta de banana”. A negação
da sentença dada é:
a) Alda não gosta de maçã e gosta de banana;
b) Alda não gosta de maçã e não gosta de banana;
c) Alda não gosta de maçã ou gosta de banana;
d) Alda não gosta de maçã ou não gosta de banana;
e) Alda gosta de maçã e gosta de banana.

Comentários:

Sejam as proposições simples:

                                         m: "Alda gosta de maçã."

                                        b: "Alda gosta de banana."

A sentença original pode ser descrita por m∧~b:

                         m∧~b: “[Alda gosta de maçã] e [não gosta de banana].”

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                           ~(m∧~b) ≡ ~m∨~(~b)

A dupla negação de uma proposição corresponde à proposição original:

                                            ~(m∧~b) ≡ ~m∨b

Logo, a negação requerida pode ser descrita por:

                        ~m∨b: "[Alda não gosta de maçã] ou [gosta de banana]."

Gabarito: Letra C.


---

   (FGV/BANESTES/2018) Considere a afirmação:
“João não trabalha e Maria fica em casa.”
A negação dessa afirmação é:
a) João não trabalha e Maria não fica em casa;
b) João trabalha e Maria fica em casa;
c) João trabalha e Maria não fica em casa;
d) João trabalha ou Maria não fica em casa;
e) João trabalha ou Maria fica em casa.

Comentários:

Sejam as proposições simples:

                                              j: "João trabalha."

                                          m: "Maria fica em casa."

A sentença original pode ser descrita por ~j∧m:

                            ~j∧m: “[João não trabalha] e [Maria fica em casa].”

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                             ~(~j∧m) ≡ ~(~j)∨~m

A dupla negação de uma proposição corresponde à proposição original:

                                               ~(~j∧m) ≡ j∨~m

Logo, a negação requerida pode ser descrita por:

                           j∨~m: "[João trabalha] ou [Maria não fica em casa]."

Gabarito: Letra D.


---

   (FGV/ALERO/2018) Considere a afirmação:
“Eu recebi o boleto e não paguei”.
A negação lógica dessa afirmação é
a) “Eu não recebi o boleto e não paguei.”
b) “Eu não recebi o boleto e paguei.”
c) “Eu recebi o boleto e paguei.”
d) “Eu não recebi o boleto ou não paguei.”
e) “Eu não recebi o boleto ou paguei.”

Comentários:

Sejam as proposições simples:

                                               r: "Recebi o boleto."

                                              p: "Paguei o boleto."

A sentença original pode ser descrita por r∧~p:

                                    r∧~p: “[Recebi o boleto] e [não paguei].”

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                              ~(r∧~p) ≡ ~r∨~(~p)

A dupla negação de uma proposição corresponde à proposição original:

                                                 ~(r∧~p) ≡ ~r∨p

Logo, a negação requerida pode ser descrita por:

                                    ~r∨p: "[Não recebi o boleto] ou [paguei]."

Gabarito: Letra E.


---

   (FGV/COMPESA/2018) Certo dia Cesar disse: “Eu vim e venci”.
Sabendo que a afirmação acima não é verdadeira, é correto concluir que Cesar
a) não veio e venceu.
b) veio e não venceu.
c) não veio e não venceu.
d) não veio ou não venceu.
e) se veio, não venceu.

Comentários:

Sejam as proposições simples:

                                                   i: "Eu vim."

                                                  e: "Eu venci."

A sentença original pode ser descrita por i∧e:

                                         i∧e: “[Eu vim] e [venci].”

Como a afirmação i∧e não é verdadeira, a sua negação é verdadeira. Logo, uma conclusão correta é a
negação de i∧e.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                                 ~(i∧e) ≡ ~i∨~e

Logo, a negação requerida pode ser descrita por:

                                    ~i∨~e: "[Não vim] ou [não venci]."

Gabarito: Letra D.


---

   (FGV/MPE BA/2017) Considere a afirmativa:
“Tereza comprou pão e leite”.
Se a afirmativa acima é falsa, conclui-se logicamente que Tereza:
a) não comprou pão nem leite.
b) comprou pão, mas não comprou leite.
c) comprou leite, mas não comprou pão.
d) comprou pão ou comprou leite.
e) não comprou pão ou não comprou leite.

Comentários:

Sejam as proposições simples:

                                         p: "Tereza comprou pão."

                                         l: " Tereza comprou leite."

A sentença original pode ser descrita por p∧l:

                                   p∧l: “[Tereza comprou pão] e [leite].”

Como a afirmação p∧l é falsa, a sua negação é verdadeira. Logo, uma conclusão correta é negação de p∧l.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                                 ~(p∧l) ≡ ~p∨~l

A dupla negação de uma proposição corresponde à proposição original:

                                                 ~(p∧l) ≡ ~p∨~l

Logo, a negação requerida pode ser descrita por:

                           ~p∨~l: "[Não comprei pão] ou [não comprei leite]."

Portanto, conclui-se logicamente que Tereza "não comprou pão ou não comprou leite".

Gabarito: Letra E.


---

   (FGV/BANESTES/2018) A negação lógica da sentença “Paulo torce pelo Vasco ou é carioca” é:
a) Paulo não torce pelo Vasco ou não é carioca;
b) Paulo torce pelo Vasco ou não é carioca;
c) Se Paulo torce pelo Vasco, então é carioca;
d) Paulo não torce pelo Vasco e não é carioca;
e) Se Paulo é carioca, então não torce pelo Vasco.

Comentários:

Sejam as proposições simples:

                                         v: "Paulo torce pelo Vasco."

                                              k: "Paulo é carioca."

A sentença original pode ser descrita por v∨k:

                                v∨k: “[Paulo torce pelo Vasco] ou [é carioca].”

Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da disjunção inclusiva;
    •   Troca-se a disjunção inclusiva (∨) pela conjunção (∧).

Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:

                                                 ~(v∨k) ≡ ~v∧~k

Logo, a negação requerida pode ser descrita por:

                         ~v∧~k: "[Paulo não torce pelo Vasco] e [não é carioca]."

Gabarito: Letra D.


---

   (FGV/CODEMIG/2015) Em uma empresa, o diretor de um departamento percebeu que Pedro, um dos
funcionários, tinha cometido alguns erros em seu trabalho e comentou:
“Pedro está cansado ou desatento.”
A negação lógica dessa afirmação é:
a) Pedro está descansado ou desatento.
b) Pedro está descansado ou atento.
c) Pedro está cansado e desatento.
d) Pedro está descansado e atento.
e) Se Pedro está descansado então está desatento.

Comentários:

Sejam as proposições simples:

                                          k: "Pedro está cansado."
                                         d: "Pedro está desatento."

A sentença original pode ser descrita por k∨d:

                                 k∨d: “[Pedro está cansado] ou [desatento].”

Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da disjunção inclusiva;
    •   Troca-se a disjunção inclusiva (∨) pela conjunção (∧).

Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:

                                              ~(k∨d) ≡ ~k∧~d

Logo, a negação requerida pode ser descrita por:

                       ~k∧~d: "[Pedro não está cansado] e [não está desatento]."

Para chegarmos ao gabarito, devemos considerar que a negação de "cansado" é "descansado" e que a
negação de "desatento" é "atento". Essas duas negações utilizando antônimos não consistem na melhor
forma de se negar uma proposição, porém temos que realizar esse raciocínio para marcarmos o gabarito.
Nesse caso, ficamos com:

                                ~k∧~d: "[Pedro está descansado] e [atento]."

Gabarito: Letra D.


---

   (FGV/BANESTES/2018) Considere a sentença “Pedro gosta de moqueca ou não é capixaba”. Um cenário
no qual a sentença dada é FALSA é:
a) Pedro gosta de moqueca e nasceu no Rio de Janeiro;
b) Pedro gosta de moqueca e nasceu em São Paulo;
c) Pedro não gosta de moqueca e nasceu no Rio de Janeiro;
d) Pedro não gosta de moqueca e nasceu em Minas Gerais;
e) Pedro não gosta de moqueca e nasceu no Espírito Santo.

Comentários:

Sejam as proposições simples:

                                      m: "Pedro gosta de moqueca."

                                          x: "Pedro é capixaba."

A sentença original pode ser descrita por m∨~x:

                         m∨~x: “[Pedro gosta de moqueca] ou [não é capixaba].”

Se considerarmos a sentença m∨~x verdadeira, a sentença é falsa quando temos a negação dela, isto é,
quando temos o caso ~(m∨~x).

Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da disjunção inclusiva;
    •   Troca-se a disjunção inclusiva (∨) pela conjunção (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:

                                          ~(m∨~x) ≡ ~m∧~(~x)

A dupla negação de uma proposição corresponde à proposição original:

                                            ~(m∨~x) ≡ ~m∧x

Logo, a negação requerida pode ser descrita por:

                          ~m∧x: "[Paulo não gosta de moqueca] e [é capixaba]."

Essa negação corresponde à alternativa E: "Pedro não gosta de moqueca e nasceu no Espírito Santo".

Gabarito: Letra E.


---

Negação da Condicional

   (FGV/PC AM/2022) Considere a afirmação:
                                  “Se Jonas é um soldado então é forte”.
A negação dessa afirmação é
a) Jonas é um soldado e não é forte.
b) Se Jonas não é um soldado então é forte.
c) Se Jonas é um soldado então não é forte.
d) Se Jonas não é um soldado então não é forte.
e) Se Jonas não é forte então não é um soldado.

Comentários:

Sejam as proposições simples:

                                          s: "Jonas é um soldado."

                                              f: "Jonas é forte."

A sentença original pode ser descrita por s→f:

                             s→f: “Se [Jonas é um soldado], então [é forte]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                 ~(s→f) ≡ s∧~f

Logo, a negação pode ser descrita por:

                                s∧~f: "[Jonas é um soldado] e [não é forte]."

Gabarito: Letra A.


---

   (FGV/EPE/2022) A negação da afirmativa “Se João vai ao jogo, então o Flamengo perde” é
a) João vai ao jogo e o Flamengo não perde.
b) João não vai ao jogo e o Flamengo perde.
c) João não vai ao jogo e o Flamengo não perde.
d) Se João não vai ao jogo, então o Flamengo perde.
e) Se João não vai ao jogo, então o Flamengo não perde.

Comentários:

Sejam as proposições simples:

                                            j: "João vai ao jogo."

                                          f: "O Flamengo perde."

A sentença original pode ser descrita por j→f:

                          j→f: “Se [João vai ao jogo], então [o Flamengo perde]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                 ~(j→f) ≡ j∧~f

Logo, a negação pode ser descrita por:

                           j∧~f: "[João vai ao jogo] e [o Flamengo não perde]."

Gabarito: Letra A.


---

   (FGV/ISS Paulínia/2021) Considere a afirmação:
                     “Uma proposta, se apresentada com clareza, não é recusada”.
A negação lógica dessa afirmação é:
a) Uma proposta é apresentada com clareza e é recusada.
b) Uma proposta não é apresentada com clareza e é recusada.
c) Se uma proposta não é apresentada com clareza, não é recusada.
d) Se uma proposta não é recusada, foi apresentada com clareza.
e) Se uma proposta não é recusada, não foi apresentada com clareza.

Comentários:

Sejam as proposições simples:

                                a: "Uma proposta é apresentada com clareza."

                                         r: "A proposta é recusada."

A sentença original pode ser descrita por a→~r:

        s→~r: “Se [uma proposta é apresentada com clareza], então [a proposta não é recusada]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                            ~(a→~r) ≡ a∧~(~r)

A dupla negação da proposição simples r corresponde à proposição original. Ficamos com:

                                              ~(a→~r) ≡ a∧r

Logo, a negação pode ser descrita por:

               a∧r: "[Uma proposta é apresentada com clareza] e [a proposta é recusada]."

Note que a negação obtida corresponde à alternativa A.

Gabarito: Letra A.


---

   (FGV/SEFIN-RO/2018) Considere a sentença
“Se Arquimedes é torcedor do Ji-Paraná, então Sócrates é torcedor do Rondoniense”.
A negação lógica dessa sentença é:
a) “Se Arquimedes é torcedor do Ji-Paraná, então Sócrates não é torcedor do Rondoniense”.
b) “Se Arquimedes não é torcedor do Ji-Paraná, então Sócrates é torcedor do Rondoniense”.
c) “Se Arquimedes não é torcedor do Ji-Paraná, então Sócrates não é torcedor do Rondoniense”.
d) “Arquimedes é torcedor do Ji-Paraná e Sócrates não é torcedor do Rondoniense”.
e) “Arquimedes é torcedor do Ji-Paraná ou Sócrates não é torcedor do Rondoniense”.

Comentários:

Sejam as proposições simples:

                                 a: "Arquimedes é torcedor do Ji-Paraná."

                                 s: "Sócrates é torcedor do Rondoniense."

A sentença original pode ser descrita por a→s:

        a→s: “Se [Arquimedes é torcedor do Ji-Paraná], então [Sócrates é torcedor do Rondoniense]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •    Mantém-se o primeiro termo;
    •    Troca-se a condicional (→) pela conjunção (∧); e
    •    Nega-se o segundo termo.

Para o caso em questão, temos:

                                              ~(a→s) ≡ a∧~s

Logo, a negação pode ser descrita por:

         a∧~s: "[Arquimedes é torcedor do Ji-Paraná] e [Sócrates não é torcedor do Rondoniense]."

Gabarito: Letra D.


---

   (FGV/Pref. Angra/2019) Considere a sentença:
“Se pratico esportes, então fico feliz”.
A negação lógica dessa sentença é
a) “Se não pratico esportes, então não fico feliz.”
b) “Se não pratico esportes, então fico feliz.”
c) “Se pratico esportes, então não fico feliz.”
d) “Pratico esportes e não fico feliz.”
e) “Não pratico esportes e fico feliz.”
Comentários:

Sejam as proposições simples:

                                             p: "Pratico esportes."
                                                  f: "Fico feliz."

A proposição composta original pode ser definida pela condicional p→f:

                                p→f: “Se [pratico esportes], então [fico feliz].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                  ~(p→f) ≡ p∧~f

Logo, a negação pode ser descrita por:

                                  p∧~f: “[Pratico esportes] e [não fico feliz].”

Gabarito: Letra D.


---

   (FGV/BANESTES/2018) Considere a afirmação:
“Quem rouba é preso. ”
A negação dessa afirmação é:
a) Alguém rouba e não é preso;
b) Quem não é preso não roubou;
c) Quem não rouba não é preso;
d) Quem rouba não é preso;
e) Alguém não rouba ou não é preso.

Comentários:

Sejam as proposições simples:

                                           r: "Alguém rouba."
                                          p: "Alguém é preso."

Devemos entender a afirmação original "quem rouba é preso" como a condicional r→p:

                                   r→p: "Se [alguém rouba], então [é preso]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                             ~(r→p) ≡ r∧~p

Logo, podemos descrever a negação como:

                                 r∧~p: "[Alguém rouba] e [não é preso]."

Gabarito: Letra A.


---

   (FGV/SSP AM/2015) A negação lógica da sentença “Se corro muito, então fico cansado” é:
a) Corro muito e não fico cansado.
b) Se não corro muito, então não fico cansado.
c) Se corro muito, então não fico cansado.
d) Não corro muito e fico cansado.
e) Não corro muito ou fico cansado.

Comentários:

Sejam as proposições simples:

                                              k: "Corro muito."
                                              f: "Fico cansado."

A proposição composta original pode ser definida pela condicional k→f:

                                k→f: “Se [corro muito], então [fico cansado].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:
                                               ~(k→f) ≡ k∧~f
Logo, a negação pode ser descrita por:

                                 k∧~f: “[Corro muito] e [não fico cansado].”

Gabarito: Letra A.

   (FGV/TCE-SE/2015) Considere a afirmação: “Se hoje é sábado, amanhã não trabalharei.”
A negação dessa afirmação é:
a) Hoje é sábado e amanhã trabalharei.
b) Hoje não é sábado e amanhã trabalharei.
c) Hoje não é sábado ou amanhã trabalharei.
d) Se hoje não é sábado, amanhã trabalharei.
e) Se hoje não é sábado, amanhã não trabalharei.


---

Comentários:

Sejam as proposições simples:

                                            h: "Hoje é sábado."
                                         a: "Amanhã trabalharei."

A proposição composta original pode ser definida pela condicional h→~a:

                      h→~a: “Se [hoje é sábado], então [amanhã não trabalharei].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                          ~(h→~a) ≡ h∧~(~a)

A dupla negação de uma proposição corresponde à proposição original:

                                             ~(h→~a) ≡ h∧a

Logo, a negação pode ser descrita por:

                             h∧a: “[Hoje é sábado] e [amanhã trabalharei].”

Gabarito: Letra A.

   (FGV/ALERO/2018) A negação lógica da sentença “Se como demais, então passo mal” é
a) “Se não como demais, então não passo mal”.
b) “Se não como demais, então passo mal”.
c) “Como demais e não passo mal”.
d) “Não como demais ou passo mal”.
e) “Não como demais e passo mal”.

Comentários:

Sejam as proposições simples:


---

                                             d: "Como demais."
                                              m: "Passo mal."

A proposição composta original pode ser definida pela condicional d→m:

                                d→m: “Se [como demais], então [passo mal].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                             ~(d→m) ≡ d∧~m

Logo, a negação pode ser descrita por:

                                 d∧~m: “[Como demais] e [não passo mal].”

Gabarito: Letra C.

   (FGV/CONDER/2013) A negação lógica da sentença “Se como demais e não faço exercícios físicos então
engordo” é
a) “Se não como demais e faço exercícios físicos então não engordo.”
b) “Se como demais e não faço exercícios físicos então não engordo.”
c) “Como demais e não faço exercícios físicos e não engordo.”
d) “Se não engordo então não como demais ou faço exercícios físicos.”
e) “Não como demais ou faço exercícios físicos ou não engordo.”

Comentários:

Sejam as proposições simples:
                                             d: "Como demais."
                                         f: "Faço exercícios físicos."
                                                e: "Engordo."

Observe que a proposição composta original é dada por (d∧~f ) → e:

             (d∧~f ) → e: “Se [(como demais) e (não faço exercícios físicos)], então [engordo].”


---

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                         ~[(d∧~f ) → e] ≡ (d∧~f ) ∧~ e

Logo, a negação pode ser descrita por:

               (d∧~f) ∧~ e: "[Como demais] e [não faço exercícios físicos] e [não engordo]."

Gabarito: Letra C.


---

Outras equivalências e negações

   (FGV/BANESTES/2018) Considere a sentença “Joana gosta de leite e não gosta de café”.
Sabe-se que a sentença dada é falsa.
Deduz-se que:
a) Joana não gosta de leite e não gosta de café;
b) Se Joana gosta de leite, então ela não gosta de café;
c) Joana gosta de leite ou gosta de café;
d) Se Joana não gosta de café, então ela não gosta de leite;
e) Joana não gosta de leite ou não gosta de café.

Comentários:

Ao informar que "a sentença dada é falsa", podemos deduzir corretamente que a negação da sentença é
verdadeira. A questão pede, portanto, para negarmos a sentença original.

A primeira equivalência a ser utilizada diante a negação de uma conjunção é a equivalência de De Morgan.

Sejam as proposições simples:

                                            l: "Joana gosta de leite."

                                            k: "Joana gosta de café."

A proposição original pode ser escrita pela conjunção l∧~k:

                             l∧~k:"[Joana gosta de leite] e [não gosta de café]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                             ~ (l∧~k) ≡ ~l∨~(~k)

A dupla negação de uma proposição corresponde à proposição original:

                                                ~ (l∧~k) ≡ ~l∨k

Logo, a negação requerida pode ser descrita por:


---

                        ~l∨k: “[Joana não gosta de leite] ou [Joana gosta de café].”

Note que não temos essa negação como resposta.

                        "E agora, professor? Será que erramos em alguma coisa?"

Não, caro aluno! Primeiro, perceba que já podemos eliminar as alternativas C e E, pois elas apresentam
disjunções inclusivas diferentes da que obtemos. Além disso, a alternativa A pode ser eliminada, pois a
negação de uma conjunção nunca será outra conjunção. Resta-nos as alternativas B e D, que são
condicionais. Logo, temos que dar um jeito de transformar ~l∨k em uma condicional.

Para transformar ~l∨k em uma condicional, devemos utilizar a equivalência transformação da disjunção
inclusiva em condicional: p∨q ≡ ~p→q. A equivalência é realizada do seguinte modo:

    •   Nega-se o primeiro termo;
    •   Troca-se a disjunção inclusiva (∨) pela condicional (→); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                              ~l∨k ≡ ~(~l)→k

A dupla negação de uma proposição corresponde à proposição original:

                                                ~l∨k ≡ l→k

Ficamos com:

                       l→k: “Se [Joana gosta de leite], então [Joana gosta de café].”

Note que ainda não temos resposta. Podemos ainda usar a equivalência contrapositiva em l→k. Para aplicar
essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               l→k ≡ ~k→~l

Ficamos com:

                 ~k→~l: “Se [Joana não gosta de café], então [Joana não gosta de leite].”

Agora sim chegamos no gabarito! Alternativa D.

                                                     −


---

Uma forma mais simples de se resolver a questão requer que o aluno se lembre de duas equivalências que
são mais raras: as negações da conjunção para a forma condicional. Lembre-se das seguintes equivalências:

   •   ~(p∧q) ≡ p→~q
   •   ~(p∧q) ≡ q→~p

Para essa questão, devemos negar l∧~k, isto é, devemos obter ~(l∧~k). Utilizando essas duas equivalências,
temos:

   •   ~(l∧~k) ≡ l→~(~k), isto é, ~(l∧~k) ≡ l→k,
   •   ~(l∧~k) ≡ ~k→~l

Note que, na segunda equivalência, obtemos que a negação da conjunção em questão é ~k→~l:

                ~k→~l: “Se [Joana não gosta de café], então [Joana não gosta de leite].”

Novamente, a alternativa D corresponde à negação requerida.

Gabarito: Letra D.


---

Questões com mais de uma equivalência

   (FGV/CBM AM/2022) Gabriel comprou a camiseta do Nacional-AM, e guardou para uma ocasião
especial. Certo dia, procurado em casa por um amigo, sua irmã disse:
                                “Vestiu a camiseta e foi ao jogo ou ao bar.”
A negação lógica dessa sentença é:
a) Não vestiu a camiseta e foi ao jogo ou ao bar.
b) Vestiu a camiseta e não foi ao jogo ou ao bar.
c) Vestiu a camiseta e não foi ao jogo nem ao bar.
d) Não vestiu a camiseta ou foi ao jogo ou ao bar.
e) Não vestiu a camiseta ou não foi ao jogo nem ao bar.

Comentários:

Sejam as proposições simples:

                                           v: "Vestiu a camiseta."
                                               j: "Foi ao jogo."
                                               b: "Foi ao bar."

A proposição original pode ser descrita pela conjunção entre v e (j∨b), isto é, pode ser descrita por v∧(j∨b):

                       v∧(j∨b):"[Vestiu a camiseta] e [(foi ao jogo) ou (foi ao bar)]."

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                          ~ [v∧(j∨b)] ≡ ~v∨~(j∨b)

Note que a parcela ~(j∨b) também pode ser desenvolvida por De Morgan, e corresponde a ~j∧~b. Portanto,
temos a seguinte equivalência:

                                         ~ [v∧(j∨b)] ≡ ~v∨(~j∧~b)

Logo, a negação requerida pode ser descrita por:

             ~v∨(~j∧~b): "[Não vestiu a camiseta] ou [(não foi ao jogo) e (não foi ao bar)]."


---

Veja que essa negação é apresentada na alternativa E, que a representa a expressão "e não" por "nem":

               ~v∨(~j∧~b): "[Não vestiu a camiseta] ou [(não foi ao jogo) (nem ao bar)]."

Gabarito: Letra E.

   (FGV/SSP AM/2022) Considere a sentença:
           “Se Amazonino é amazonense e Reno não é alagoano, então Carlota não é carioca”.
Uma sentença logicamente equivalente à sentença dada é
a) Se Carlota não é carioca, então Amazonino é amazonense e Reno não é alagoano.
b) Se Amazonino não é amazonense e Reno é alagoano, então Carlota é carioca.
c) Se Amazonino não é amazonense ou Reno é alagoano, então Carlota é carioca.
d) Se Carlota é carioca, então Amazonino não é amazonense ou Reno é alagoano.
e) Se Carlota é carioca, então Amazonino não é amazonense e Reno não é alagoano.

Comentários:

Considere as proposições simples:

                                     a: "Amazonino é amazonense."
                                         r: "Reno é alagoano."
                                         c: "Carlota é carioca."

Note que a proposição original pode ser descrita por a∧~r → ~c.

  a∧~r → ~c: “Se [(Amazonino é amazonense) e (Reno não é alagoano)], então [Carlota não é carioca]”.

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                    a∧~r → ~c ≡ ~(~c) → ~(a∧~r)

A dupla negação da proposição simples c corresponde à proposição original. Ficamos com:

                                       a∧~r → ~c ≡ c → ~(a∧~r)

Além disso, ~(a∧~r) pode ser desenvolvido por De Morgan, correspondendo a ~a∨r. Ficamos com:


---

                                         a∧~r → ~c ≡ c → ~a∨r

Logo, a proposição equivalente pode ser descrita por:

    c → ~a∨r: "Se [Carlota é carioca], então [(Amazonino não é amazonense) ou (Reno é alagoano)]."

Gabarito: Letra D.

   (FGV/FunSaúde CE/2021) Considere a sentença:
“Se a cobra é verde, então ela não morde ou ela é venenosa”.
A sentença logicamente equivalente à sentença dada é:
a) Se a cobra morde e não é venenosa, então ela não é verde.
b) Se a cobra não é verde, então ela morde e não é venenosa.
c) Se a cobra não é verde, então ela não morde ou não é venenosa.
d) A cobra é verde e não morde ou é venenosa.
e) A cobra não é verde e morde e não é venenosa.

Comentários:

Considere as proposições simples:

                                           e: "A cobra é verde."
                                           m: "A cobra morde."
                                         a: "A cobra é venenosa."

Note que a proposição original é dada por e→~m∨a:

               e→~m∨a: “Se [a cobra é verde], então [(ela não morde) ou (ela é venenosa)].”

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                        e→~m∨a ≡ ~(~m∨a)→~r

~(~m∨a) pode ser desenvolvido por De Morgan, correspondendo a m∧~a. Ficamos com:

                                         e→~m∨a ≡ m∧~a →~r


---

Logo, a proposição equivalente pode ser descrita por:

             m∧~a →~r: "Se [(a cobra morde) e (não é venenosa)], então [ela não é verde]."

Gabarito: Letra A.

   (FGV/ALERO/2018) Considere a sentença a seguir.
“Se nasci em Rondônia ou Roraima, então sou brasileiro”.
Assinale a opção que apresenta uma sentença logicamente equivalente à sentença dada.
a) “Se não nasci em Rondônia nem em Roraima, então não sou brasileiro”.
b) “Se nasci em Rondônia, então sou brasileiro”.
c) “Se não nasci em Roraima, então não sou brasileiro”.
d) “Se não sou brasileiro, então não nasci em Rondônia nem em Roraima”.
e) “Se sou brasileiro e não nasci em Rondônia, então nasci em Roraima”.

Comentários:

Sejam as proposições simples:

                                         o: "Nasci em Rondônia."
                                          a: "Nasci em Roraima."
                                            b: "Sou brasileiro."

A proposição original pode ser descrita por o∨a → b.

                o∨a → b: " Se [(nasci em Rondônia) ou (Roraima)], então [sou brasileiro]."

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                         o∨a → b ≡ ~b → ~(o∨a)

O consequente obtido, ~(o∨a), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as duas
parcelas e troca-se o "ou" pelo "e". Temos:

                                         o∨a → b ≡ ~b → ~o∧~a


---

Ficamos com:

   ~b → ~o∧~a: "Se [não sou brasileiro], então [(não nasci em Rondônia) e (não nasci em Roraima)]."

A alternativa D apresenta essa equivalência substituindo "e não" por "nem":

        ~b → ~o∧~a: "Se [não sou brasileiro], então [(não nasci em Rondônia) (nem em Roraima)]."

Gabarito: Letra D.


   (FGV/IBGE/2019) Considere a sentença: “Se corro ou faço musculação, então fico cansado”.
Uma sentença logicamente equivalente a essa é:
a) Se não corro ou faço musculação, então não fico cansado;
b) Se não corro e não faço musculação, então não fico cansado;
c) Não corro e não faço musculação ou fico cansado;
d) Corro ou faço musculação e não fico cansado;
e) Não corro ou não faço musculação e fico cansado.

Comentários:

Sejam as proposições simples:

                                                  k: "Corro."
                                           m: "Faço musculação."
                                              f: "Fico cansado."

A proposição original pode ser descrita por k∨m → f.

                     k∨m → f: " Se [(corro) ou (faço musculação)], então [fico cansado]."

As alternativas apresentam tanto condicionais (→) quanto uma disjunção inclusiva ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

                                               Contrapositiva

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.


---

Para o caso em questão, temos:

                                            k∨m → f ≡ ~f→~(k∨m)

O consequente obtido, ~(k∨m), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as duas
parcelas e troca-se o "ou" pelo "e". Temos:

                                           k∨m → f ≡ ~f → ~k∧~m

Ficamos com:

           ~f → ~k∧~m: "Se [não fico cansado], então [(não corro) e (não faço musculação)]."

Não temos essa resposta nas alternativas. Devemos testar a segunda equivalência.

                             Transformação da condicional em disjunção inclusiva

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                             k∨m → f ≡ ~(k∨m)∨ f

O primeiro termo obtido, ~(k∨m), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as
duas parcelas e troca-se o "ou" pelo "e". Temos:

                                            k∨m → f ≡ ~k∧~m ∨ f

Ficamos com:

                     (~k∧~m) ∨ f: "[Não corro] e [não faço musculação] ou [fico cansado]."

Gabarito: Letra C.

   (FGV/TRT 12/2017) Considere a sentença: “Se Pedro é torcedor do Avaí e Marcela não é torcedora do
Figueirense, então Joana é torcedora da Chapecoense”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense, então Joana não é torcedora da
Chapecoense.
b) Se Pedro não é torcedor do Avaí e Marcela é torcedora do Figueirense, então Joana não é torcedora da
Chapecoense.


---

c) Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense ou Joana é torcedora da
Chapecoense.
d) Se Joana não é torcedora da Chapecoense, então Pedro não é torcedor do Avaí e Marcela é torcedora do
Figueirense.
e) Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense e Joana é torcedora da Chapecoense.

Comentários:

Sejam as proposições simples:

                                      p: "Pedro é torcedor do Avaí."
                                 m: "Marcela é torcedora do Figueirense."
                                 j: "Joana é torcedora do Chapecoense."

A proposição original pode ser descrita por p∧~m → j.

 p∧~m → j: " Se [(Pedro é torcedor do Avaí) e (Marcela não é torcedora do Figueirense)], então [Joana é
                                     torcedora do Chapecoense]."

As alternativas apresentam tanto condicionais (→) quanto disjunções inclusivas ("ou", ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

                                             Contrapositiva

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                       p∧~m → j ≡ ~j→~(p∧~m)

O consequente obtido, ~(p∧~m), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as
duas parcelas e troca-se o "e" pelo "ou". Temos:

                                      p∧~m → j ≡ ~j → ~p∨~(~m)

A dupla negação de uma proposição corresponde à proposição original:

                                         p∧~m → j ≡ ~j → ~p∨m


---

Ficamos com:

   ~j → ~p∨m: "Se [Joana não é torcedora do Chapecoense], então [(Pedro não é torcedor do Avaí) ou
                               (Marcela é torcedora do Figueirense)]."

Não temos essa resposta nas alternativas. Devemos testar a segunda equivalência.

                          Transformação da condicional em disjunção inclusiva

Para aplicar a segunda equivalência, devemos realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                         p∧~m → j ≡ ~(p∧~m)∨ j

O primeiro termo obtido, ~(p∧~m), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as
duas parcelas e troca-se o "e" pelo "ou". Temos:

                                        p∧~m → j ≡ ~p∨~(~m)∨ j

A dupla negação de uma proposição corresponde à proposição original:

                                          p∧~m → j ≡ ~p∨ m ∨ j

Ficamos com:

~p∨ m ∨ j: "[Pedro não é torcedor do Avaí] ou [Marcela é torcedora do Figueirense] ou [Joana é torcedora
                                           do Chapecoense]."

Gabarito: Letra C.

   (FGV/MPE RJ/2019) Considere a sentença: “Se não estou cansado, então vejo televisão ou vou ao
cinema”.
A negação lógica dessa sentença é:
a) Se estou cansado, então não vejo televisão e não vou ao cinema;
b) Se estou cansado, então vejo televisão ou vou ao cinema;
c) Se não vejo televisão e não vou ao cinema, então estou cansado;
d) Não estou cansado e não vejo televisão e não vou ao cinema;
e) Estou cansado ou vejo televisão ou vou ao cinema.


---

Comentários:

Sejam as proposições simples:

                                            e: "Estou cansado."
                                            v: "Vejo televisão."
                                            a: "Vou ao cinema."

A sentença original pode ser descrita por ~e → (v∨a).

            ~e → (v∨a): "Se [não estou cansado], então [(vejo televisão) ou (vou ao cinema)]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                        ~[~e → (v∨a)] ≡ ~e ∧~(v∨a)

O segundo termo obtido, ~(v∨a), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as
duas parcelas e troca-se o "ou" pelo "e". Temos:

                                      ~[~e → (v∨a)] ≡ ~e ∧~v ∧ ~a

Logo, a negação requerida pode ser descrita por:

            ~e ∧~v ∧ ~a: "[Não estou cansado] e [não vejo televisão] e [não vou ao cinema]."

Gabarito: Letra D.

   (FGV/TRT 12/2017) A negação lógica da sentença “Se eu como e não corro, então eu engordo” é:
a) Se eu como e não corro, então eu não engordo.
b) Eu como e não corro e não engordo.
c) Se eu não engordo, então eu não como ou corro.
d) Eu não como e corro e não engordo.
e) Se eu não como ou corro, então eu não engordo.

Comentários:


---

Sejam as proposições simples:
                                               m: "Eu como."
                                               r: "Eu corro."
                                              e: "Eu engordo."

A sentença original pode ser descrita por m∧~r → e.

                      m∧~r → e: "Se [(eu como) e (não corro)], então [eu engordo]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                          m∧~r → e ≡ m∧~r ∧ ~e

Logo, a negação requerida pode ser descrita por:

                         m∧~r ∧ ~e: "[Eu como] e [não corro] e [não engordo]."

Gabarito: Letra B.

   (FGV/ALEMA/2013) Considere a sentença:
“Se o projeto de lei A é aprovado então o presidente da comissão se fortalece ou não renuncia.”
A negação lógica dessa sentença é
a) O projeto de lei A é aprovado e o presidente da comissão não se fortalece e renuncia.
b) Se o projeto de lei A não é aprovado então o presidente da comissão não se fortalece e não renuncia.
c) Se o projeto de lei A não é aprovado então o presidente da comissão não se fortalece ou renuncia.
d) Se o presidente da comissão não se fortalece ou renuncia então o projeto de lei A não é aprovado.
e) O projeto de lei A não é aprovado ou o presidente da comissão se fortalece ou não renuncia.

Comentários:

Sejam as proposições simples:
                                     a: "O projeto de lei A é aprovado."
                                 f: "O presidente da comissão se fortalece."
                                  r: " O presidente da comissão renuncia."


---

A sentença original pode ser descrita por a → f ∨~r.

   a → f ∨~r: "Se [o projeto de lei A é aprovado], então [(o presidente da comissão se fortalece) ou (não
                                                renuncia)]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                             a → f ∨~r ≡ a ∧ ~(f ∨~r)

O segundo termo obtido, ~(f∨~r), pode ainda ser desenvolvido por De Morgan. Nesse caso, negam-se as
duas parcelas e troca-se o "ou" pelo "e". Temos:

                                            a → f ∨~r ≡ a ∧ ~f ∧ ~(~r)

A dupla negação de uma proposição corresponde à proposição original:

                                              a → f ∨~r ≡ a ∧ ~f ∧ r

Logo, a negação requerida pode ser descrita por:

 a ∧ ~f ∧ r: "[ O projeto de lei A é aprovado] e [o presidente da comissão não se fortalece] e [renuncia]."

Gabarito: Letra A.

   (FGV/CONDER/2013) Solange afirmou: “Se é domingo e faz sol então eu vou à praia”.
O cenário para o qual a afirmativa de Solange é falsa é
a) sábado, chove e Solange foi à praia.
b) domingo, chove e Solange foi à praia.
c) sábado, faz sol e Solange foi à praia.
d) domingo, faz sol e Solange não foi à praia.
e) sábado, faz sol e Solange não foi à praia.

Comentários:

Sejam as proposições simples:


---

                                              d: "É domingo."
                                                 s: "Faz sol."
                                              p: "Vou à praia."

A afirmação de Solange pode ser descrita por d∧f → p.

                        d∧f → p: " Se [(é domingo) e (faz sol)], então [vou à praia]."

Ao considerarmos a afirmação verdadeira, o cenário em que essa afirmação é falsa ocorre quando se nega
d∧f → p.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                            d∧f → p ≡ d∧f ∧ ~p

Logo, a negação requerida pode ser descrita por:

                          d∧f ∧ ~p: "[É domingo] e [faz sol] e [não vou à praia]."

Isso significa que o cenário para o qual a afirmativa de Solange é falsa é "domingo, faz sol e Solange não foi
à praia".

Gabarito: Letra D.


---

                              LISTA DE QUESTÕES - FGV

Equivalências lógicas

Equivalências fundamentais

 (FGV/CBM AM/2022) Um antigo ditado diz: “Se há fumaça então há fogo”.
Uma sentença logicamente equivalente é
a) se há fogo então há fumaça.
b) se não há fumaça então não há fogo.
c) se não há fogo, então não há fumaça.
d) se não há fumaça pode haver fogo.
e) se há fogo então pode haver fumaça.


 (FGV/SEMSA Manaus/2022) Considere a afirmação:
“Se o acusado estava no hospital então não é culpado”.
É correto concluir que
a) se o acusado não estava no hospital então é culpado.
b) se o acusado é culpado então não estava no hospital.
c) se o acusado não é culpado então não estava no hospital.
d) o acusado estava no hospital e é culpado.
e) o acusado não é culpado e não estava no hospital.

 (FGV/BANESTES/2021) A frase a seguir é um conhecido ditado popular:
“Se não tem cão então caça com gato".
Uma frase logicamente equivalente é:
a) Se tem cão então não caça com gato;
b) Se caça com gato então não tem cão;
c) Tem cão ou caça com gato;
d) Tem cão e caça com gato;
e) Tem cão ou não caça com gato.


---

 (FGV/FunSaúde CE/2021) Considere a afirmação tradicional abaixo: “Cão que ladra não morde” Essa
afirmativa é equivalente a:
a) Cão que não morde, ladra.
b) Cão que não ladra, morde.
c) Cão que morde, não ladra.
d) Um cão não ladra ou morde.
e) Um cão ladra ou morde.


 (FGV/CGM Niterói/2018) Considere a sentença:
“Se Arlindo é baixo, então Arlindo não é atleta.”
Assinale a opção que apresenta a sentença logicamente equivalente à sentença dada.
a) “Se Arlindo não é atleta, então Arlindo é baixo.”
b) “Se Arlindo não é baixo, então Arlindo é atleta.”
c) “Se Arlindo é atleta, então Arlindo não é baixo.”
d) “Arlindo é baixo e atleta.”
e) “Arlindo não é baixo e não é atleta.”


 (FGV/Pref. Salvador/2017) Considere a sentença:
“Se Juvenal foi trabalhar, então Rosalva não saiu de casa”.
É correto concluir que
a) “Juvenal foi trabalhar ou Rosalva não saiu de casa”.
b) “Juvenal foi trabalhar e Rosalva não saiu de casa”.
c) “se Juvenal não foi trabalhar, então Rosalva saiu de casa”.
d) “se Rosalva não saiu de casa, então Juvenal foi trabalhar”.


  (FGV/BANESTES/2018) Considere a sentença “Se Marta gosta de pescar, então ela gosta de siri”. Uma
sentença equivalente à sentença dada é:
a) Se Marta não gosta de pescar, então ela não gosta de siri;
b) Se Marta gosta de siri, então ela gosta de pescar;
c) Se Marta gosta de siri, então ela não gosta de pescar;
d) Se Marta não gosta de siri, então ela não gosta de pescar;
e) Se Marta não gosta de pescar, então ela gosta de siri.


---

  (FGV/BANESTES/2018) Considere a afirmação:
Se um carro não tem gasolina então não anda.
Considere, agora, as afirmações seguintes:
I. Se um carro tem gasolina então anda.
II. Se um carro não anda então não tem gasolina.
III. Se um carro anda então tem gasolina.
É/são logicamente equivalente(s) à afirmação dada:
a) somente I;
b) somente II;
c) somente III;
d) somente I e II;
e) I, II e III.


  (FGV/BANESTES/2018) Considere a sentença: “Se Carla gosta de peixe, então Carla sabe nadar”. Uma
sentença logicamente equivalente à sentença dada é:
a) Se Carla sabe nadar, então Carla gosta de peixe;
b) Se Carla não sabe nadar, então Carla não gosta de peixe;
c) Se Carla não gosta de peixe, então Carla não sabe nadar;
d) Carla gosta de peixe e sabe nadar;
e) Carla gosta de peixe ou não sabe nadar.


    (FGV/Pref. Angra/2019) Considere a sentença:
“Se João gosta de goiaba, então gosta de abacate.”
Uma sentença logicamente equivalente à sentença dada é
a) “João não gosta de goiaba ou gosta de abacate”.
b) “Se João não gosta de goiaba, então não gosta de abacate.”
c) “Se João gosta de abacate, então gosta de goiaba.”
d) “João gosta de goiaba e não gosta de abacate.”
e) “João gosta de goiaba ou gosta de abacate.


---

   (FGV/TJ SC/2018) Uma sentença logicamente equivalente à sentença “Se Pedro é torcedor da
Chapecoense, então ele nasceu em Chapecó” é:
a) Se Pedro não é torcedor da Chapecoense, então ele não nasceu em Chapecó;
b) Se Pedro nasceu em Chapecó, então ele é torcedor da Chapecoense;
c) Pedro é torcedor da Chapecoense e não nasceu em Chapecó;
d) Pedro não é torcedor da Chapecoense ou nasceu em Chapecó;
e) Pedro é torcedor da Chapecoense ou não nasceu em Chapecó.


   (FGV/ALERO/2018) Considere a afirmação:
“Se um animal não tem dentes então não morde”.
Uma afirmação logicamente equivalente é
a) “Se um animal tem dentes então morde.”
b) “Se um animal não morde então não tem dentes.”
c) “Se um animal morde então tem dentes.”
d) “Existe um animal que não tem dentes e morde.”
e) “Um animal não tem dentes ou morde.”


   (FGV/TRT 12/2017) O salão principal do tribunal está preparado para um evento comemorativo e
diversas pessoas foram convidadas a comparecer. Na porta do salão está um funcionário que recebeu
instruções sobre as pessoas que podem entrar e uma delas foi:
“Se tiver carteira de advogado pode entrar.”
É correto concluir que:
a) se João entrou então tem carteira de advogado;
b) quem não tem carteira de advogado não pode entrar;
c) se Pedro não pode entrar então não tem carteira de advogado;
d) quem é advogado, mas não tem carteira, pode entrar;
e) todos os que entraram são advogados.


---

   (FGV/Pref. Salvador/2017) Considere a afirmação:
“Se um sapo é verde, então não come minhoca”.
A partir dessa afirmação, conclui-se, logicamente, que
a) “Se um sapo come minhoca, então não é verde”.
b) “Se um sapo não come minhoca, então é verde”.
c) “Se um sapo não é verde, então come minhoca”.
d) “Um sapo é verde, ou não come minhoca”.
e) “Um sapo não é verde, ou come minhoca”.


   (FGV/TJ PI/2015) Considere a sentença: “Se gosto de capivara, então gosto de javali”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se não gosto de capivara, então não gosto de javali.
b) Gosto de capivara e gosto de javali.
c) Não gosto de capivara ou gosto de javali.
d) Gosto de capivara ou não gosto de javali.
e) Gosto de capivara e não gosto de javali.


   (FGV/TJ SC/2015) Considere a sentença: “Se cometi um crime, então serei condenado”.
Uma sentença logicamente equivalente à sentença dada é:
a) Não cometi um crime ou serei condenado.
b) Se não cometi um crime, então não serei condenado.
c) Se eu for condenado, então cometi um crime.
d) Cometi um crime e serei condenado.
e) Não cometi um crime e não serei condenado.


   (FGV/CGE MA/2014) Considere a sentença: “Se Geraldo foi à academia então Jovelina foi ao cinema.”
É correto concluir que
a) se Geraldo não foi à academia então Jovelina não foi ao cinema.
b) se Jovelina foi ao cinema então Geraldo foi à academia.
c) Geraldo foi à academia ou Jovelina foi ao cinema.
d) Geraldo foi à academia e Jovelina foi ao cinema.
e) Geraldo não foi à academia ou Jovelina foi ao cinema.


---

   (FGV/TJ RJ/2014) Considere a seguinte sentença:
“Se há muitos processos, então os juízes trabalham muito”.
Uma sentença logicamente equivalente a essa é:
a) se não há muitos processos, então os juízes não trabalham muito;
b) se os juízes trabalham muito, então há muitos processos;
c) há muitos processos e os juízes não trabalham muito;
d) não há muitos processos ou os juízes trabalham muito;
e) há muitos processos e os juízes trabalham muito.


   (FGV/CODEBA/2016) Um guarda portuário trabalha na fiscalização das pessoas que transitam pelo
porto e conhece a regra:
“Quem tem crachá pode entrar no navio.”
A partir dessa regra, é correto concluir que
a) se alguém não pode entrar no navio então não tem crachá.
b) quem não tem crachá não pode entrar no navio.
c) se alguém pode entrar no navio então tem crachá.
d) algumas pessoas com crachá não podem entrar no navio.
e) uma pessoa tem crachá ou não entra no navio.


---

Negação da conjunção e da disjunção inclusiva (leis de De Morgan)

   (FGV/SSP AM/2022) Considere a afirmação:
                              “Hoje é sexta-feira e amanhã não trabalharei”.
A negação lógica dessa sentença é
a) Hoje não é sexta-feira e amanhã trabalharei.
b) Hoje não é sexta-feira ou amanhã trabalharei.
c) Hoje não é sexta-feira, então amanhã trabalharei.
d) Hoje é sexta-feira e amanhã trabalharei.
e) Hoje é sexta-feira ou amanhã não trabalharei.


   (FGV/SEMSA Manaus/2022) Considere a sentença:
“Paulo é torcedor do Nacional ou Débora não é torcedora do Fast”.
A negação lógica dessa sentença é
a) Paulo não é torcedor do Nacional ou Débora não é torcedora do Fast.
b) Paulo não é torcedor do Nacional ou Débora é torcedora do Fast.
c) Paulo não é torcedor do Nacional e Débora não é torcedora do Fast.
d) Paulo não é torcedor do Nacional e Débora é torcedora do Fast.
e) Paulo é torcedor do Nacional ou Débora é torcedora do Fast.

   (FGV/PC RN/2021) Mário, que mora sozinho, falava ao telefone com sua mãe a respeito do dia anterior:
Lavei a louça e não dormi tarde.
A negação lógica dessa sentença é:
a) Não lavei a louça e não dormi tarde;
b) Lavei a louça e dormi tarde;
c) Não lavei a louça e dormi tarde;
d) Não lavei a louça ou não dormi tarde;
e) Não lavei a louça ou dormi tarde.


---

   (FGV/Pref. Salvador/2019) Considere a afirmativa:
“Este mês tem 31 dias e o mês que vem também terá”
A negação dessa afirmativa é
a) “Este mês tem 30 dias e o mês que vem terá 31”.
b) “Este mês não tem 31 dias e o mês que vem também não terá”.
c) “Este mês tem 31 dias e o mês que vem não terá”.
d) “Este mês tem 30 dias ou o mês que vem também terá”.
e) “Este mês não tem 31 dias ou o mês que vem não terá 31 dias”.


   (FGV/Pref. Angra/2019) Considere a sentença:
“Renato viajou e não telefonou para sua mãe”.
A negação lógica dessa sentença é
a) “Renato viajou e telefonou para sua mãe.”
b) “Renato não viajou e não telefonou para sua mãe.”
c) “Renato não viajou ou telefonou para sua mãe.”
d) “Renato viajou ou não telefonou para sua mãe.”
e) “Renato não viajou ou não telefonou para sua mãe.”


   (FGV/IBGE/2019) Considere a sentença: “Rubens tem mais de 18 anos e sabe dirigir”.
A negação lógica dessa sentença é:
a) Rubens não tem mais de 18 anos e não sabe dirigir;
b) Rubens não tem mais de 18 anos ou não sabe dirigir;
c) Rubens tem mais de 18 anos e não sabe dirigir;
d) Rubens não tem mais de 18 anos e sabe dirigir;
e) Rubens tem mais de 18 anos ou sabe dirigir.


   (FGV/BANESTES/2018) A secretária disse ao advogado:
“Fechei a janela e não mexi nos papéis”.
Algum tempo depois, o advogado descobriu que o que disse a secretária não era verdade.
É correto concluir que a secretária:
a) fechou a janela e mexeu nos papéis;
b) não fechou a janela e não mexeu nos papéis;
c) não fechou a janela e mexeu nos papéis;


---

d) fechou a janela ou não mexeu nos papéis;
e) não fechou a janela ou mexeu nos papéis.


   (FGV/SEPOG-RO/2017) João voltou de um passeio na floresta com seus amigos e, ao chegar em casa,
disse: “Eu matei a cobra e mostrei o pau”. Pedro, um dos amigos, disse: “isso não foi verdade”.
O significado do que Pedro disse é que João
a) matou a cobra, mas não mostrou o pau.
b) não matou a cobra, mas mostrou o pau.
c) não matou a cobra e não mostrou o pau.
d) não matou a cobra ou não mostrou o pau.
e) matou a cobra ou mostrou o pau.

   (FGV/SEFIN-RO/2018) Considere a afirmação:
“Ronaldo foi de ônibus e não usou o celular”.
A negação dessa afirmação é:
a) “Ronaldo foi de ônibus e usou o celular”.
b) “Ronaldo não foi de ônibus e não usou o celular”.
c) “Ronaldo não foi de ônibus e usou o celular”.
d) “Ronaldo foi de ônibus ou não usou o celular”.
e) “Ronaldo não foi de ônibus ou usou o celular”.


   (FGV/MPE RJ/2019) Considere a sentença: “João não tomou café e saiu de casa”.
A negação dessa sentença é:
a) João tomou café e saiu de casa;
b) João não tomou café e não saiu de casa;
c) João tomou café e não saiu de casa;
d) João não tomou café ou saiu de casa;
e) João tomou café ou não saiu de casa.


---

   (FGV/BANESTES/2018) Considere a sentença “Alda gosta de maçã e não gosta de banana”. A negação
da sentença dada é:
a) Alda não gosta de maçã e gosta de banana;
b) Alda não gosta de maçã e não gosta de banana;
c) Alda não gosta de maçã ou gosta de banana;
d) Alda não gosta de maçã ou não gosta de banana;
e) Alda gosta de maçã e gosta de banana.


   (FGV/BANESTES/2018) Considere a afirmação:
“João não trabalha e Maria fica em casa.”
A negação dessa afirmação é:
a) João não trabalha e Maria não fica em casa;
b) João trabalha e Maria fica em casa;
c) João trabalha e Maria não fica em casa;
d) João trabalha ou Maria não fica em casa;
e) João trabalha ou Maria fica em casa.


   (FGV/ALERO/2018) Considere a afirmação:
“Eu recebi o boleto e não paguei”.
A negação lógica dessa afirmação é
a) “Eu não recebi o boleto e não paguei.”
b) “Eu não recebi o boleto e paguei.”
c) “Eu recebi o boleto e paguei.”
d) “Eu não recebi o boleto ou não paguei.”
e) “Eu não recebi o boleto ou paguei.”


   (FGV/COMPESA/2018) Certo dia Cesar disse: “Eu vim e venci”.
Sabendo que a afirmação acima não é verdadeira, é correto concluir que Cesar
a) não veio e venceu.
b) veio e não venceu.
c) não veio e não venceu.
d) não veio ou não venceu.
e) se veio, não venceu.


---

   (FGV/MPE BA/2017) Considere a afirmativa:
“Tereza comprou pão e leite”.
Se a afirmativa acima é falsa, conclui-se logicamente que Tereza:
a) não comprou pão nem leite.
b) comprou pão, mas não comprou leite.
c) comprou leite, mas não comprou pão.
d) comprou pão ou comprou leite.
e) não comprou pão ou não comprou leite.


   (FGV/BANESTES/2018) A negação lógica da sentença “Paulo torce pelo Vasco ou é carioca” é:
a) Paulo não torce pelo Vasco ou não é carioca;
b) Paulo torce pelo Vasco ou não é carioca;
c) Se Paulo torce pelo Vasco, então é carioca;
d) Paulo não torce pelo Vasco e não é carioca;
e) Se Paulo é carioca, então não torce pelo Vasco.


   (FGV/CODEMIG/2015) Em uma empresa, o diretor de um departamento percebeu que Pedro, um dos
funcionários, tinha cometido alguns erros em seu trabalho e comentou:
“Pedro está cansado ou desatento.”
A negação lógica dessa afirmação é:
a) Pedro está descansado ou desatento.
b) Pedro está descansado ou atento.
c) Pedro está cansado e desatento.
d) Pedro está descansado e atento.
e) Se Pedro está descansado então está desatento.


   (FGV/BANESTES/2018) Considere a sentença “Pedro gosta de moqueca ou não é capixaba”. Um cenário
no qual a sentença dada é FALSA é:
a) Pedro gosta de moqueca e nasceu no Rio de Janeiro;
b) Pedro gosta de moqueca e nasceu em São Paulo;
c) Pedro não gosta de moqueca e nasceu no Rio de Janeiro;
d) Pedro não gosta de moqueca e nasceu em Minas Gerais;
e) Pedro não gosta de moqueca e nasceu no Espírito Santo.


---

Negação da Condicional

   (FGV/PC AM/2022) Considere a afirmação:
                                 “Se Jonas é um soldado então é forte”.
A negação dessa afirmação é
a) Jonas é um soldado e não é forte.
b) Se Jonas não é um soldado então é forte.
c) Se Jonas é um soldado então não é forte.
d) Se Jonas não é um soldado então não é forte.
e) Se Jonas não é forte então não é um soldado.


   (FGV/EPE/2022) A negação da afirmativa “Se João vai ao jogo, então o Flamengo perde” é
a) João vai ao jogo e o Flamengo não perde.
b) João não vai ao jogo e o Flamengo perde.
c) João não vai ao jogo e o Flamengo não perde.
d) Se João não vai ao jogo, então o Flamengo perde.
e) Se João não vai ao jogo, então o Flamengo não perde.

   (FGV/ISS Paulínia/2021) Considere a afirmação:
                      “Uma proposta, se apresentada com clareza, não é recusada”.
A negação lógica dessa afirmação é:
a) Uma proposta é apresentada com clareza e é recusada.
b) Uma proposta não é apresentada com clareza e é recusada.
c) Se uma proposta não é apresentada com clareza, não é recusada.
d) Se uma proposta não é recusada, foi apresentada com clareza.
e) Se uma proposta não é recusada, não foi apresentada com clareza.


   (FGV/SEFIN-RO/2018) Considere a sentença
“Se Arquimedes é torcedor do Ji-Paraná, então Sócrates é torcedor do Rondoniense”.
A negação lógica dessa sentença é:
a) “Se Arquimedes é torcedor do Ji-Paraná, então Sócrates não é torcedor do Rondoniense”.
b) “Se Arquimedes não é torcedor do Ji-Paraná, então Sócrates é torcedor do Rondoniense”.


---

c) “Se Arquimedes não é torcedor do Ji-Paraná, então Sócrates não é torcedor do Rondoniense”.
d) “Arquimedes é torcedor do Ji-Paraná e Sócrates não é torcedor do Rondoniense”.
e) “Arquimedes é torcedor do Ji-Paraná ou Sócrates não é torcedor do Rondoniense”.


   (FGV/Pref. Angra/2019) Considere a sentença:
“Se pratico esportes, então fico feliz”.
A negação lógica dessa sentença é
a) “Se não pratico esportes, então não fico feliz.”
b) “Se não pratico esportes, então fico feliz.”
c) “Se pratico esportes, então não fico feliz.”
d) “Pratico esportes e não fico feliz.”
e) “Não pratico esportes e fico feliz.”


   (FGV/BANESTES/2018) Considere a afirmação:
“Quem rouba é preso. ”
A negação dessa afirmação é:
a) Alguém rouba e não é preso;
b) Quem não é preso não roubou;
c) Quem não rouba não é preso;
d) Quem rouba não é preso;
e) Alguém não rouba ou não é preso.


   (FGV/SSP AM/2015) A negação lógica da sentença “Se corro muito, então fico cansado” é:
a) Corro muito e não fico cansado.
b) Se não corro muito, então não fico cansado.
c) Se corro muito, então não fico cansado.
d) Não corro muito e fico cansado.
e) Não corro muito ou fico cansado.


---

   (FGV/TCE-SE/2015) Considere a afirmação: “Se hoje é sábado, amanhã não trabalharei.”
A negação dessa afirmação é:
a) Hoje é sábado e amanhã trabalharei.
b) Hoje não é sábado e amanhã trabalharei.
c) Hoje não é sábado ou amanhã trabalharei.
d) Se hoje não é sábado, amanhã trabalharei.
e) Se hoje não é sábado, amanhã não trabalharei.


   (FGV/ALERO/2018) A negação lógica da sentença “Se como demais, então passo mal” é
a) “Se não como demais, então não passo mal”.
b) “Se não como demais, então passo mal”.
c) “Como demais e não passo mal”.
d) “Não como demais ou passo mal”.
e) “Não como demais e passo mal”.


   (FGV/CONDER/2013) A negação lógica da sentença “Se como demais e não faço exercícios físicos então
engordo” é
a) “Se não como demais e faço exercícios físicos então não engordo.”
b) “Se como demais e não faço exercícios físicos então não engordo.”
c) “Como demais e não faço exercícios físicos e não engordo.”
d) “Se não engordo então não como demais ou faço exercícios físicos.”
e) “Não como demais ou faço exercícios físicos ou não engordo.”


---

Outras equivalências e negações

   (FGV/BANESTES/2018) Considere a sentença “Joana gosta de leite e não gosta de café”.
Sabe-se que a sentença dada é falsa.
Deduz-se que:
a) Joana não gosta de leite e não gosta de café;
b) Se Joana gosta de leite, então ela não gosta de café;
c) Joana gosta de leite ou gosta de café;
d) Se Joana não gosta de café, então ela não gosta de leite;
e) Joana não gosta de leite ou não gosta de café.


---

Questões com mais de uma equivalência

   (FGV/CBM AM/2022) Gabriel comprou a camiseta do Nacional-AM, e guardou para uma ocasião
especial. Certo dia, procurado em casa por um amigo, sua irmã disse:
                                “Vestiu a camiseta e foi ao jogo ou ao bar.”
A negação lógica dessa sentença é:
a) Não vestiu a camiseta e foi ao jogo ou ao bar.
b) Vestiu a camiseta e não foi ao jogo ou ao bar.
c) Vestiu a camiseta e não foi ao jogo nem ao bar.
d) Não vestiu a camiseta ou foi ao jogo ou ao bar.
e) Não vestiu a camiseta ou não foi ao jogo nem ao bar.

   (FGV/SSP AM/2022) Considere a sentença:
           “Se Amazonino é amazonense e Reno não é alagoano, então Carlota não é carioca”.
Uma sentença logicamente equivalente à sentença dada é
a) Se Carlota não é carioca, então Amazonino é amazonense e Reno não é alagoano.
b) Se Amazonino não é amazonense e Reno é alagoano, então Carlota é carioca.
c) Se Amazonino não é amazonense ou Reno é alagoano, então Carlota é carioca.
d) Se Carlota é carioca, então Amazonino não é amazonense ou Reno é alagoano.
e) Se Carlota é carioca, então Amazonino não é amazonense e Reno não é alagoano.

   (FGV/FunSaúde CE/2021) Considere a sentença:
“Se a cobra é verde, então ela não morde ou ela é venenosa”.
A sentença logicamente equivalente à sentença dada é:
a) Se a cobra morde e não é venenosa, então ela não é verde.
b) Se a cobra não é verde, então ela morde e não é venenosa.
c) Se a cobra não é verde, então ela não morde ou não é venenosa.
d) A cobra é verde e não morde ou é venenosa.
e) A cobra não é verde e morde e não é venenosa.


---

   (FGV/ALERO/2018) Considere a sentença a seguir.
“Se nasci em Rondônia ou Roraima, então sou brasileiro”.
Assinale a opção que apresenta uma sentença logicamente equivalente à sentença dada.
a) “Se não nasci em Rondônia nem em Roraima, então não sou brasileiro”.
b) “Se nasci em Rondônia, então sou brasileiro”.
c) “Se não nasci em Roraima, então não sou brasileiro”.
d) “Se não sou brasileiro, então não nasci em Rondônia nem em Roraima”.
e) “Se sou brasileiro e não nasci em Rondônia, então nasci em Roraima”.


   (FGV/IBGE/2019) Considere a sentença: “Se corro ou faço musculação, então fico cansado”.
Uma sentença logicamente equivalente a essa é:
a) Se não corro ou faço musculação, então não fico cansado;
b) Se não corro e não faço musculação, então não fico cansado;
c) Não corro e não faço musculação ou fico cansado;
d) Corro ou faço musculação e não fico cansado;
e) Não corro ou não faço musculação e fico cansado.


   (FGV/TRT 12/2017) Considere a sentença: “Se Pedro é torcedor do Avaí e Marcela não é torcedora do
Figueirense, então Joana é torcedora da Chapecoense”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense, então Joana não é torcedora da
Chapecoense.
b) Se Pedro não é torcedor do Avaí e Marcela é torcedora do Figueirense, então Joana não é torcedora da
Chapecoense.
c) Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense ou Joana é torcedora da
Chapecoense.
d) Se Joana não é torcedora da Chapecoense, então Pedro não é torcedor do Avaí e Marcela é torcedora do
Figueirense.
e) Pedro não é torcedor do Avaí ou Marcela é torcedora do Figueirense e Joana é torcedora da Chapecoense.


---

   (FGV/MPE RJ/2019) Considere a sentença: “Se não estou cansado, então vejo televisão ou vou ao
cinema”.
A negação lógica dessa sentença é:
a) Se estou cansado, então não vejo televisão e não vou ao cinema;
b) Se estou cansado, então vejo televisão ou vou ao cinema;
c) Se não vejo televisão e não vou ao cinema, então estou cansado;
d) Não estou cansado e não vejo televisão e não vou ao cinema;
e) Estou cansado ou vejo televisão ou vou ao cinema.


   (FGV/TRT 12/2017) A negação lógica da sentença “Se eu como e não corro, então eu engordo” é:
a) Se eu como e não corro, então eu não engordo.
b) Eu como e não corro e não engordo.
c) Se eu não engordo, então eu não como ou corro.
d) Eu não como e corro e não engordo.
e) Se eu não como ou corro, então eu não engordo.


   (FGV/ALEMA/2013) Considere a sentença:
“Se o projeto de lei A é aprovado então o presidente da comissão se fortalece ou não renuncia.”
A negação lógica dessa sentença é
a) O projeto de lei A é aprovado e o presidente da comissão não se fortalece e renuncia.
b) Se o projeto de lei A não é aprovado então o presidente da comissão não se fortalece e não renuncia.
c) Se o projeto de lei A não é aprovado então o presidente da comissão não se fortalece ou renuncia.
d) Se o presidente da comissão não se fortalece ou renuncia então o projeto de lei A não é aprovado.
e) O projeto de lei A não é aprovado ou o presidente da comissão se fortalece ou não renuncia.


   (FGV/CONDER/2013) Solange afirmou: “Se é domingo e faz sol então eu vou à praia”.
O cenário para o qual a afirmativa de Solange é falsa é
a) sábado, chove e Solange foi à praia.
b) domingo, chove e Solange foi à praia.
c) sábado, faz sol e Solange foi à praia.
d) domingo, faz sol e Solange não foi à praia.
e) sábado, faz sol e Solange não foi à praia.


---

                        GABARITO - FGV

Equivalências lógicas

 LETRA C                 LETRA D         LETRA D
 LETRA B                 LETRA E         LETRA D
 LETRA C                 LETRA E         LETRA A
 LETRA C                 LETRA C         LETRA A
 LETRA C                 LETRA B         LETRA A
 LETRA E                 LETRA E         LETRA C
 LETRA D                 LETRA D         LETRA C
 LETRA C                 LETRA E         LETRA D
 LETRA B                 LETRA E         LETRA E
  LETRA A                LETRA C         LETRA D
  LETRA D                LETRA D         LETRA A
  LETRA C                LETRA E         LETRA D
  LETRA C                LETRA D         LETRA C
  LETRA A                LETRA E         LETRA C
  LETRA C                LETRA D         LETRA D
  LETRA A                LETRA D         LETRA B
  LETRA E                LETRA E         LETRA A
  LETRA D                LETRA A         LETRA D
  LETRA A                LETRA A
  LETRA B                LETRA A


---
