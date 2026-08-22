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
arquivo_origem: Aula 02_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '02'
titulo_aula: Raciocínio Lógico Matemático
---

# Raciocínio Lógico Matemático

Aula 01
                          Receita Federal (Analista Tributário)
                                     Raciocínio Lógico Matemático

                                                            Autor:
                                        Equipe Exatas Estratégia
                                                      Concursos


                                                14 de Junho de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 01

                                                                                     Índice
1) Equivalências Lógicas


2) Álgebra de Proposições


3) Questões Comentadas - Equivalências Lógicas - FGV


4) Questões Comentadas - Introdução à Álgebra de Proposições - FGV


5) Lista de Questões - Equivalências Lógicas - FGV


6) Lista de Questões - Introdução à Álgebra de Proposições - FGV

                Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                                                                                        2
                www.estrategiaconcursos.com.br                                                                                                                                          122

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                 APRESENTAÇÃO DA AULA
Fala, pessoal!

O principal assunto da aula de hoje é equivalências lógicas.

O entendimento da aula é muito importante, porém igualmente importante é que você DECORE as
principais equivalências lógicas. Equivalências lógicas existem para serem usadas, e o uso delas requer que
você tenha as principais fórmulas "no sangue".

Em seguida, será abordado álgebra de proposições. Nesse assunto, você deve focar especialmente nas
propriedades comutativa, associativa e distributiva. Além disso, nesse tópico, trataremos do uso de
equivalências lógicas para a resolução de problemas de tautologia, contradição e contingência.

Como de costume, vamos exibir um resumo logo no início de cada tópico para que você tenha uma visão
geral do conteúdo antes mesmo de iniciar o assunto.

                          Conte comigo nessa caminhada =)

                          Prof. Eduardo Mocellin.

                                @edu.mocellin

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               3
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

 Equipe Exatas Estratégia Concursos
 Aula 01

EQUIVALÊNCIAS LÓGICAS

                                               Equivalências lógicas
    Duas proposições A e B são equivalentes quando todos os valores lógicos (V ou F) assumidos por elas são
    iguais para todas as combinações de valores lógicos atribuídos às proposições simples que as compõem.
                                            Equivalências fundamentais

    Equivalência contrapositiva
                                                  p→q ≡ ~q→~p

    Transformação da condicional (se...então) em disjunção inclusiva (ou)
                                                p→q ≡ ~p∨q

    Transformação disjunção inclusiva (ou) em condicional (se...então)
                                                p∨q ≡ ~p→q
                                                 Negações lógicas

    Dupla negação da proposição simples

                                                    ~(~p) ≡ p

    Negação da conjunção e da disjunção inclusiva (Leis de De Morgan)
    Para negar "e": negar ambas as proposições e trocar o "e" pelo "ou".

                                                ~(p∧q) ≡ ~p∨~q

    Para negar "ou": negar ambas as proposições e trocar o "ou" pelo "e".

                                                ~(p∨q) ≡ ~p∧~q

    Negação da condicional (se...então)
                                                 ~(p→q) ≡ p∧~q
                                          Outras equivalências e negações
    Negação da conjunção (e) para a forma condicional (se...então)

                                                 ~(p∧q) ≡ p→~q

                                                 ~(p∧q) ≡ q →~p
    Conjunção de condicionais

    Quando o termo comum é o consequente, a equivalência apresenta uma disjunção inclusiva no
    antecedente.
                                   (p→r)∧(q→r) ≡ (p∨q)→r

    Quanto o termo comum é o antecedente, a equivalência apresenta uma conjunção no consequente.

                                             (p→q)∧(p→r) ≡ p→(q∧r)

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                      4
       www.estrategiaconcursos.com.br                                                                         122

                                   


---

Equipe Exatas Estratégia Concursos
Aula 01

   Equivalências da disjunção exclusiva (ou...ou)

                                                p∨q ≡ (~p)∨(~q)

                                                 p∨q ≡ (~p)q

                                                 p∨q ≡ p(~q)


   Negações da disjunção exclusiva (ou...ou)
                                                 ~(p∨q) ≡ pq

                                                ~(p∨q) ≡ (~p)∨q

                                                ~(p∨q) ≡ p∨(~q)

   Equivalências da bicondicional (se e somente se)

                                               pq ≡ (p→q)∧(q→p)

                                               pq ≡ (~p)(~q)

                                                    pq ≡ (~p)∨q

                                                    pq ≡ p∨(~q)

   Negações da bicondicional (se e somente se)
                                                 ~(pq) ≡ p∨q

                                               ~(pq) ≡ (~p)q

                                               ~(pq) ≡ p(~ q)

                                          ~(pq) ≡ (p∧~q)∨(q∧~p)

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático    5
      www.estrategiaconcursos.com.br                                       122

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 01

O que é uma equivalência lógica

Quando duas proposições apresentam a mesma tabela-verdade, dizemos que as proposições são
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
Para resolver esse problema, basta construirmos a tabela-verdade de ambas proposições. Como a
bicondicional já é conhecida por nós, precisamos simplesmente confeccionar a tabela-verdade de
(p→q)∧(q→p) e comparar com a bicondicional pq.


Passo 1: determinar o número de linhas da tabela-verdade.
Temos duas proposições simples distintas, p e q. Logo, o número de linhas é 2𝑛 = 22 = 4.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          6
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Passo 2: desenhar o esquema da tabela-verdade.
Para determinar (p→q)∧(q→p), precisamos obter (p→q) e (q→p).
Para determinar (p→q), precisamos obter p e q.
Para determinar (q→p), precisamos obter p e q.


Podemos também incluir, de imediato, na nossa tabela a condicional pq, pois vamos compará-la com a
expressão que estamos querendo obter.

Passo 3: atribuir V ou F às proposições simples de maneira alternada.

Passo 4: obter o valor das demais proposições.
A condicional p→q é falsa somente quando o antecedente p for verdadeiro e o consequente q for falso.

A condicional q→p é falsa somente quando o antecedente q for verdadeiro e o consequente p for falso.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              7
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A conjunção (p→q)∧(q→p) só será verdadeira quando p→q e q→p forem ambos verdadeiros.

Para a bicondicional, já sabemos que ela será verdadeira quando p e q tiverem o mesmo valor lógico.

Podemos perceber da análise da tabela-verdade acima que (p→q)∧(q→p) e pq assumem os exatos
mesmos valores lógicos para todas as possibilidades de valores lógicos de p e q. Logo, as proposições são
equivalentes. Veja:

Podemos escrever:
                                              pq ⇔ (p→q)∧(q→p)
                                                         ou
                                              pq ≡ (p→q)∧(q→p)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             8
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Equivalências fundamentais

Existem três equivalências fundamentais que despencam em provas de concurso público:

   •   Equivalência contrapositiva;
   •   Transformação da condicional (se...então) em disjunção inclusiva (ou); e
   •   Transformação da disjunção inclusiva (ou) em condicional (se...então).

Equivalência contrapositiva

A primeira equivalência fundamental é conhecida como contrapositiva da condicional:

                                                  p→q ≡ ~q→~p

A equivalência é realizada do seguinte modo:

    1. Invertem-se as posições do antecedente e do consequente; e
    2. Negam-se ambos os termos da condicional.

Como exemplo, sejam as proposições:

                                                 p: “Hoje choveu.”

                                              q: “João fez a barba.”

Considere a seguinte condicional p→q:

                              p→q: "Se [hoje choveu], então [João fez a barba]."

A condicional a seguir é equivalente à condicional original:

                       ~q→~p: "Se [João não fez a barba], então [hoje não choveu]."

        Um erro muito explorado pelas bancas é dizer que p→q seria equivalente a ~p→~q. Isso
        porque é muito comum no dia a dia as pessoas cometerem esse erro.

        Observe o exemplo acima: "Se hoje choveu, então João fez a barba". Vamos supor que não
        choveu. O que podemos afirmar sobre a barba de João? Absolutamente nada, ele pode
        tanto ter feito quanto não ter feito a barba. Logo, não podemos dizer que "Se hoje não
        choveu, então João não fez a barba" é equivalente à condicional original. Em outras
        palavras, não podemos dizer que ~p→~q é equivalente a p→q.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        9
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

        Por outro lado, podemos afirmar sem dúvida que ~q→~p. Em outras palavras,
        considerando a proposição original, podemos dizer que "Se João não fez a barba, então
        hoje não choveu".

                                                    Em resumo:

                                          p→q é equivalente a ~q→~p

                                       p→q não é equivalente a ~p→~q

Vamos resolver um exercício envolvendo essa equivalência que acabamos de aprender.

(EPC/2023) Considere a seguinte afirmação:
                          Se subir a montanha é difícil, então a paisagem compensa.
Assinale a alternativa que contém uma equivalente lógica à afirmação apresentada.
a) Subir a montanha é difícil e a paisagem compensa.
b) Subir a montanha não é difícil e a paisagem não compensa.
c) Se a paisagem não compensa, então subir a montanha não é difícil.
d) Se subir a montanha é difícil, então a paisagem não compensa.
e) Subir a montanha não é difícil ou a paisagem não compensa.
Comentários:
Sejam as proposições simples:
                                         m: "Subir a montanha é difícil."
                                           p: "A paisagem compensa."
A sentença original pode ser descrita por m→p:
                     m→p: “Se [subir a montanha é difícil], então [a paisagem compensa].”


Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.
Para o caso em questão, temos:
                                                 m→p ≡ ~p→~m
A proposição equivalente pode ser descrita por:
            ~p→~m: “Se [a paisagem não compensa], então [subir a montanha não é difícil]”.
Gabarito: Letra C.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        10
        www.estrategiaconcursos.com.br                                                            122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Transformação da condicional (se...então) em disjunção inclusiva (ou)

A segunda equivalência fundamental é a transformação da condicional (se...então; →) em disjunção
inclusiva (ou; ∨):

                                                   p→q ≡ ~p∨q

A equivalência é realizada do seguinte modo:

    1. Nega-se o primeiro termo;
    2. Troca-se a condicional (se...então; →) pela disjunção inclusiva (ou; ∨); e
    3. Mantém-se o segundo termo.

Como exemplo, considere novamente a seguinte condicional:

                              p→q: "Se [hoje choveu], então [João fez a barba]."

Observe que a frase seguinte é equivalente:

                               ~p∨q: "[Hoje não choveu] ou [João fez a barba]."

Antes de realizar alguns exercícios sobre essa equivalência, é importante que você saiba que a condicional
p→q apresenta somente duas possíveis equivalências: ~q→~p e ~p∨q:

     A condicional p→q apresenta somente duas possíveis equivalências:

                                                  p→q ≡ ~q→~p
                                                   p→q ≡ ~p∨q

     Portanto, uma condicional só pode ser equivalente a outra condicional ou a uma disjunção
     inclusiva.


Vamos resolver exercícios envolvendo essa equivalência que acabamos de aprender.

(PROCON-DF/2023) A respeito de raciocínio lógico, julgue o item.
As proposições “Se Alice é uma estudante de medicina, então ela é inteligente” e “Alice não é uma estudante
de medicina ou é inteligente” são equivalentes.
Comentários:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              11
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Sejam as proposições simples:
                                    e: "Alice é uma estudante de medicina."
                                              i: "Alice é inteligente."


A proposição original pode ser descrita por e→i:
               e→i: "Se [Alice é uma estudante de medicina], então [ela (Alice) é inteligente]."


Note que a questão sugere que a proposição original é equivalente a uma disjunção inclusiva (ou; ∨).
Devemos, portanto, usar a equivalência da transformação da condicional (se...então; →) em disjunção
inclusiva (ou; ∨).
                                                   p→q ≡ ~p∨q


Para aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Nega-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela disjunção inclusiva (ou; ∨); e
• Mantém-se o segundo termo.


Para o caso em questão, temos:
                                                    e→i ≡ ~e∨i


A proposição equivalente pode ser descrita por:
                 ~e∨i: "[Alice não é uma estudante de medicina] ou [(Alice) é inteligente]."
Gabarito: CERTO.


(Pref. S Parnaíba/2023) Considerando como verdadeira a sentença “Se Marcos cozinha, então ele não lava
a louça”, assinale a alternativa que apresenta uma sentença equivalente a esta.
a) Marcos não cozinha ou não lava a louça.
b) Marcos não cozinha ou lava a louça.
c) Se Marcos não lava a louça, então ele cozinha.
d) Se Marcos lava a louça, então ele cozinha.
Comentários:
Sejam as proposições simples:
                                               c: "Marcos cozinha."
                                             l: "Marcos lava a louça."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         12
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A proposição original pode ser descrita por c→~l:
                          c→~l: “Se [Marcos cozinha], então [ele não lava a louça].”


As alternativas apresentam tanto condicionais (se...então; →) quanto disjunções inclusivas (ou; ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:
• p→q ≡ ~q→~p (contrapositiva)
• p→q ≡ ~p∨q (transformação da condicional em disjunção inclusiva)


Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                                c→~l ≡ ~(~l)→~c


A dupla negação de l corresponde à proposição original l. Ficamos com:
                                                   c→~l ≡ l→~c


A proposição equivalente pode ser descrita por:
                     l→~c: "Se [Marcos lava a louça], então [ele (Marcos) não cozinha]."


Veja que essa equivalência não está nas alternativas apresentadas.
Vamos agora utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o seguinte
procedimento:
• Nega-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela disjunção inclusiva (ou; ∨); e
• Mantém-se o segundo termo.
Para o caso em questão, temos:
                                                  c→~l ≡ ~c∨~l


A proposição equivalente pode ser descrita por:
                            ~c∨~l: " [Marcos não cozinha] ou [não lava a louça]."
Gabarito: Letra A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           13
        www.estrategiaconcursos.com.br                                                               122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Transformação disjunção inclusiva (ou) em condicional (se...então)

A terceira equivalência fundamental para sua prova é a transformação da disjunção inclusiva (ou; ∨) em
condicional (se...então; →):

                                                   p∨q ≡ ~p→q

A equivalência é realizada do seguinte modo:

    1. Nega-se o primeiro termo;
    2. Troca-se a disjunção inclusiva (ou; ∨) pela condicional (se...então; →); e
    3. Mantém-se o segundo termo.

Como exemplo, considere a seguinte disjunção inclusiva:

                                  p∨q: "[Pedro estuda] ou [Maria trabalha]."

Observe que a frase seguinte é equivalente:

                           ~p→q: "Se [Pedro não estuda], então [Maria trabalha]."

Vamos resolver um exercício envolvendo essa equivalência que acabamos de aprender.

(EPC/2023) Posso contar com os amigos ou ficarei sozinho. Uma afirmação que é logicamente equivalente a
afirmação anterior é:
a) Se não posso contar com os amigos, então ficarei sozinho.
b) Se posso contar com os amigos, então ficarei sozinho.
c) Se não posso contar com os amigos, então não ficarei sozinho.
d) Se ficarei sozinho, então não posso contar com os amigos.
e) Posso contar com os amigos e ficarei sozinho.
Comentários:
Sejam as proposições simples:
                                        a: "Posso contar com os amigos."
                                               s: "Ficarei sozinho."


A proposição original pode ser descrita por a∨s:
                          a∨s: "[Posso contar com os amigos] ou [ficarei sozinho]."


Sabemos que a disjunção inclusiva (ou; ∨) apresenta uma equivalência fundamental dada por p∨q ≡ ~p→q.
Para aplicar essa equivalência, devemos realizar o seguinte procedimento:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          14
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

• Nega-se o primeiro termo;
• Troca-se a disjunção inclusiva (ou; ∨) pela condicional (se...então; →); e
• Mantém-se o segundo termo.


Aplicando essa equivalência para proposição em questão, ficamos com:
                                                    a∨s ≡ ~a→s
A equivalência obtida é descrita por:
                     ~a→s: "Se [não posso contar com os amigos], então [ficarei sozinho]."
Gabarito: Letra A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                   15
        www.estrategiaconcursos.com.br                                                       122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negações Lógicas

Nesse tópico iremos estudar as principais negações lógicas. Antes de apresentarmos as negações, é
importante que você entenda que uma negação lógica acaba sendo uma equivalência proveniente da
negação de uma proposição.

Veremos mais adiante, por exemplo, que a negação de p∧q, que pode ser representada por ~(p∧q),
corresponde a ~p∨~q. Nesse caso:

   •   Podemos dizer que a negação de p∧q é ~p∨~q;
   •   Podemos dizer que ~(p∧q) é equivalente a ~p∨~q.

Ao se construir negação de uma proposição, constrói-se uma nova proposição com valores lógicos sempre
opostos aos da proposição original. Para o exemplo apresentado, ~p∨~q sempre terá o valor contrário da
proposição p∧q para todas as linhas da tabela-verdade, conforme pode ser observado a seguir:

Em outras palavras, ~p∨~q terá o valor lógico da negação de p∧q, dada por ~(p∧q), para todas as linhas da
tabela-verdade:

Veremos a seguir as principais negações que você precisa saber.

Dupla negação da proposição simples

Um resultado importante que pode ser obtido da tabela verdade é que a negação da negação de p sempre
tem valor lógico igual a proposição p, ou seja, é equivalente a p.

                                                     ~(~p) ≡ p

A prova dessa equivalência corresponde à tabela-verdade abaixo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            16
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Como exemplo, temos que a dupla negação "Não é verdade que [Joãozinho não comeu o chocolate]" é
equivalente a "Joãozinho comeu o chocolate".

     A negação da negação de p é equivalente a p.

                                                    ~ (~p) ≡ p


Negação da conjunção e da disjunção inclusiva (Leis de De Morgan)

Nesse tópico, veremos como se nega a conjunção (e; ∧) e a disjunção inclusiva (ou; ∨). Essas negações são
conhecidas como Leis de De Morgan.

Negação da conjunção (e; ∧)

Para realizar a negação conjunção p∧q, deve-se seguir o seguinte procedimento:

    1. Negam-se ambas as parcelas da conjunção (e; ∧); e
    2. Troca-se a conjunção (e; ∧) pela disjunção inclusiva (ou; ∨).

Como resultado, podemos dizer que a negação de p∧q, também conhecida por ~(p∧q), é equivalente a
~p∨~q:

                                                 ~(p∧q) ≡ ~p∨~q

Como exemplo, considere as seguintes proposições simples:

                                                p: "Comi lasanha."

                                              q: "Bebi refrigerante."

A conjunção entre dessas duas proposições pode ser descrita por:

                                  p∧q: "[Comi lasanha] e [bebi refrigerante]."

A negação dessa proposição composta é:

                     ~(p∧q) ≡ ~p∨~q: "[Não comi lasanha] ou [não bebi refrigerante]."


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            17
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negação da disjunção inclusiva (ou; ∨)

De modo semelhante à negação da conjunção, para negarmos a disjunção inclusiva p∨q, devemos seguir o
seguinte procedimento:

    1. Negam-se ambas as parcelas da disjunção inclusiva (ou; ∨); e
    2. Troca-se a disjunção inclusiva (ou; ∨) pela conjunção (e; ∧).

Como resultado disso, podemos escrever que a negação de p∨q, também conhecida por ~(p∨q), é
equivalente a ~p∧~q:

                                                ~ (p∨q) ≡ ~p∧~q

Vejamos um exemplo:

                                 p∨q: "[Comi lasanha] ou [bebi refrigerante]."

A negação dessa proposição composta é:

                     ~(p∨q) ≡ ~p∧~q: "[Não comi lasanha] e [não bebi refrigerante]."

A seguir temos um mnemônico que resume as duas Leis de De Morgan:

                                                Leis de De Morgan

     Para negar o "e": negar ambas as proposições e trocar o "e" pelo "ou".
                                          ~(p∧q) ≡ ~p∨~q

     Para negar o "ou": negar ambas as proposições e trocar o "ou" pelo "e".
                                           ~(p∨q) ≡ ~p∧~q


Vamos agora resolver exercícios envolvendo as Leis de De Morgan.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       18
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(AGENERSA/2023) Considere a afirmação:
                                        “Caminho ou não saio do lugar.”
Assinale a opção que apresenta sua negação lógica.
a) Não caminho ou não saio do lugar.
b) Caminho ou saio do lugar.
c) Não caminho ou saio do lugar.
d) Caminho e não saio do lugar.
e) Não caminho e saio do lugar.
Comentários:
Sejam as proposições simples:
                                                   c: "Caminho."
                                                s: "Saio do lugar."


A proposição original pode ser escrita pela disjunção inclusiva c∨~s:
                                   c∨~s: "[Caminho] ou [não saio do lugar]."


Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da disjunção inclusiva (ou; ∨); e
• Troca-se a disjunção inclusiva (ou; ∨) pela conjunção (e; ∧).


Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:
                                               ~(c∨~s) ≡ ~c∨~(~s)


A dupla negação da proposição simples s corresponde à proposição original. Ficamos com:
                                                 ~(c∨~s) ≡ ~c∨s


Logo, a negação requerida pode ser descrita por:
                                    ~c∨s: “[Não caminho] e [saio do lugar].”
Gabarito: Letra E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              19
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(PM CE/2023) Sabendo-se que não é verdade que o policial militar de serviço pode dormir e pode usar a
viatura para fins pessoais, é correto afirmar que:
a) O policial militar de serviço pode dormir ou pode usar a viatura para fins pessoais.
b) O policial militar de serviço não pode dormir ou não pode usar a viatura para fins pessoais.
c) O policial militar de serviço pode dormir ou não pode usar a viatura para fins pessoais.
d) O policial militar de serviço não pode dormir ou pode usar a viatura para fins pessoais.
e) O policial militar de serviço não pode dormir e não pode usar a viatura para fins pessoais.
Comentários:
Sejam as proposições simples:
                                  d: "O policial militar de serviço pode dormir."
                     v: "O policial militar de serviço pode usar a viatura para fins pessoais."


Note que a proposição original pode ser descrita por ~(d∧v):
  ~(d∧v): "Não é verdade que [(o policial militar de serviço pode dormir) e ((o policial militar de serviço)
                               pode usar a viatura para fins pessoais)]."


Observe que a proposição original, ~(d∧v), é a negação da conjunção (d∧v). Como a questão pergunta por
algo que é correto de se afirmar, devemos encontrar algo que é equivalente a ~(d∧v), ou seja, devemos
negar (d∧v).
Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da conjunção (e; ∧); e
• Troca-se a conjunção (e; ∧) pela disjunção inclusiva (ou; ∨).


Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:
                                                 ~(d∧v) ≡ ~d∨~v


Logo, a negação requerida pode ser descrita por:
 ~d∨~v: "[O policial militar de serviço não pode dormir] ou [(o policial militar de serviço) não pode usar a
                                         viatura para fins pessoais]."
Gabarito: Letra B.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 20
        www.estrategiaconcursos.com.br                                                                     122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negação da condicional (se...então)

A negação de p→q é realizada por meio da seguinte equivalência:

                                                 ~(p→q) ≡ p∧~q

A negação da condicional é realizada do seguinte modo:

    1. Mantém-se o primeiro termo;
    2. Troca-se a condicional (se...então; →) pela conjunção (e; ∧); e
    3. Nega-se o segundo termo.

Como exemplo, considere a seguinte condicional:

                         p→q: "Se [eu comi lasanha], então [eu bebi refrigerante]."

A negação dessa expressão pode ser escrita como:

                     ~ (p→q) ≡ p∧~q: "[Eu comi lasanha] e [eu não bebi refrigerante]."

(DPE SP/2023) Uma afirmação que corresponde a uma negação da lógica da afirmação:
'Se cada escultura é uma obra de arte, então a chuva é uma grande artista”, é
a) Se a chuva não é uma grande artista, então cada escultura não é uma obra de arte.
b) Cada escultura é uma obra de arte ou a chuva é uma grande artista.
c) Cada escultura não é uma obra de arte ou a chuva não é uma grande artista.
d) Cada escultura é uma obra de arte, e a chuva não é uma grande artista.
e) Se cada escultura não é uma obra de arte, então a chuva não é uma grande artista.
Comentários:
Sejam as proposições simples:
                                    o: "Cada escultura é uma obra de arte."
                                       a: "A chuva é uma grande artista."


A sentença original pode ser descrita por o→a:
            o→a: “Se [cada escultura é uma obra de arte], então [a chuva é uma grande artista]”.


Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Mantém-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela conjunção (e; ∧); e
• Nega-se o segundo termo.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         21
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Para o caso em questão, temos:
                                                 ~(o→a) ≡ o∧~a
Logo, a negação pode ser descrita por:
            o∧~a: "[Cada escultura é uma obra de arte] e [a chuva não é uma grande artista]."
Gabarito: Letra D.


(MPE SP/2023) Considere a proposição:
               “Se Maria não sabe Matemática, então ela erra problemas de porcentagem”.
Assinale a opção que apresenta a negação dessa proposição.
a) Se Maria sabe Matemática, então ela não erra problemas de porcentagem.
                                                       ==219a34==

b) Se Maria não sabe Matemática, então ela não erra problemas de porcentagem.
c) Se Maria não erra problemas de porcentagem, então ela sabe Matemática.
d) Maria não sabe Matemática e não erra problemas de porcentagem.
e) Maria sabe Matemática e erra problemas de porcentagem.
Comentários:
Sejam as proposições simples:
                                          m: "Maria sabe Matemática."
                                  p: "Maria erra problemas de porcentagem."


A sentença original pode ser descrita por ~m→p:
     ~m→p: “Se [Maria não sabe Matemática], então [ela (Maria) erra problemas de porcentagem]”.


Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Mantém-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela conjunção (e; ∧); e
• Nega-se o segundo termo.


Para o caso em questão, temos:
                                               ~(~m→p) ≡ ~m∧~p
Logo, a negação pode ser descrita por:
        ~m∧~p: "[Maria não sabe Matemática] e [(Maria) não erra problemas de porcentagem]."
Gabarito: Letra D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        22
        www.estrategiaconcursos.com.br                                                            122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Questões com mais de uma equivalência

Para fins de resolução de questões de concurso público, é importante que você se familiarize com a utilização
de mais de uma equivalência em um mesmo problema.

Vamos praticar com algumas questões.

(SEPLAN RR/2023) Considerando os conectivos lógicos usuais, que as letras maiúsculas representam
proposições lógicas e que o símbolo ~ representa a negação de uma proposição, julgue o item subsecutivo.
A expressão (A∨B)→C é equivalente à expressão (~A∧~B)∨C.
Comentários:
Note que originalmente temos uma condicional cujo antecedente é (A∨B) e cujo consequente é C. Sabemos
que a condicional apresenta somente duas equivalências:
• p→q ≡ ~q→~p (contrapositiva)
• p→q ≡ ~p∨q (transformação da condicional em disjunção inclusiva)


Como a proposição composta sugerida como equivalente não é uma condicional, vamos utilizar a segunda
equivalência.
Para aplicar essa equivalência, devemos realizar o seguinte procedimento:
• Nega-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela disjunção inclusiva (ou; ∨); e
• Mantém-se o segundo termo.


Para o caso em questão, temos:
                                              (A∨B)→C ≡ ~(A∨B)∨C


Note que ~(A∨B) é a negação de (A∨B), podendo ser desenvolvida por De Morgan. Para negar a disjunção
inclusiva "ou" negam-se as duas proposições e troca-se o "ou" pelo "e". Ficamos com:
                                             (A∨B)→C ≡ (~A∧~B)∨C
Gabarito: CERTO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                23
        www.estrategiaconcursos.com.br                                                                   122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(TJ SP/2023) Em uma reunião, com seus colaboradores, o chefe do atendimento diz: “Se o atendimento é
bom, então o cliente fica satisfeito e volta”. A alternativa que contém uma afirmação equivalente à afirmação
do chefe é:
a) Se o cliente fica satisfeito e volta, então o atendimento é bom.
b) Se o cliente não fica satisfeito ou não volta, então o atendimento não é bom.
c) O cliente fica satisfeito ou volta e o atendimento é bom.
d) Se o cliente não fica satisfeito ou volta, então o atendimento não é bom.
e) O atendimento é bom e o cliente fica satisfeito e volta.
Comentários:
Sejam as proposições simples:
                                           b: "O atendimento é bom."
                                           s: "O cliente fica satisfeito."
                                                v: "O cliente volta."


A sentença original pode ser descrita por b→(s∧v):
        b→(s∧v): “Se [o atendimento é bom], então [(o cliente fica satisfeito) e ((o cliente) volta)].”


Note que originalmente temos uma condicional cujo antecedente é b e cujo consequente é (s∧v). Sabemos
que a condicional apresenta somente duas equivalências:
• p→q ≡ ~q→~p (contrapositiva)
• p→q ≡ ~p∨q (transformação da condicional em disjunção inclusiva)


Vamos começar utilizando a equivalência contrapositiva: p→q ≡ ~q→~p. Para aplicar essa equivalência,
devemos realizar o seguinte procedimento:
• Invertem-se as posições do antecedente e do consequente; e
• Negam-se ambos os termos da condicional.


Para o caso em questão, temos:
                                             b→(s∧v) ≡ ~(s∧v)→~b:


Note que ~(s∧v) é a negação de (s∧v), podendo ser desenvolvida por De Morgan. Para negar a conjunção
"e" negam-se as duas proposições e troca-se o "e" pelo "ou". Ficamos com:
                                            b→(s∧v) ≡ (~s∨~v)→~b:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                24
        www.estrategiaconcursos.com.br                                                                    122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Note que a proposição obtida como equivalente corresponde à alternativa B, que é o gabarito da questão:
 (~s∨~v)→~b: "Se [(o cliente não fica satisfeito) ou ((o cliente) não volta)], então [o atendimento não é
                                                 bom]."


Para fins didáticos, vamos aplicar a segunda equivalência da condicional, dada por p∨q ≡ ~p→q. Para aplicar
essa equivalência, devemos realizar o seguinte procedimento:
• Nega-se o primeiro termo;
• Troca-se a disjunção inclusiva (ou; ∨) pela condicional (se...então; →); e
• Mantém-se o segundo termo.


Para o caso em questão, temos:
                                               b→(s∧v) ≡ ~b∨(s∧v)


Ficamos com a seguinte equivalência:
        ~b∨(s∧v): "[O atendimento não é bom] ou [(o cliente fica satisfeito) e ((o cliente) volta)]."


Veja que não temos essa opção nas alternativas.
Gabarito: Letra B.


(CBM SC/2023) Dentre as alternativas a seguir, aquela que contém a negação lógica da proposição composta
“Estou doente e, se o médico permite, então viajo” é:
a) Estou doente e o médico permite e não viajo.
b) Não estou doente e o médico permite e viajo.
c) Estou doente ou o médico permite e não viajo.
d) Não estou doente e o médico permite e não viajo.
e) Não estou doente ou o médico permite e não viajo.
Comentários:
Sejam as proposições simples:
                                                d: "Estou doente."
                                             m: "O médico permite."
                                                   v: "Eu viajo."


A sentença original pode ser descrita por d∧(m→v):
                 d∧(m→v): “[Estou doente] e, [se (o médico permite), então ((eu) viajo)]”

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              25
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Devemos negar a sentença original. Note que temos uma conjunção (e; ∧) entre a proposição simples d e a
condicional (m→v).
Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Negam-se ambas as parcelas da conjunção (e; ∧);
• Troca-se a conjunção (e; ∧) pela disjunção inclusiva (ou; ∨).


Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:
                                           ~[d∧(m→v)] ≡ ~d∨~(m→v)


Note que uma das parcelas obtidas, ~(m→v), é a negação da condicional (m→v).
Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:
• Mantém-se o primeiro termo;
• Troca-se a condicional (se...então; →) pela conjunção (e; ∧); e
• Nega-se o segundo termo.
Logo, ficamos com:
                                           ~[d∧(m→v)] ≡ ~d∨(m∧~v)


Logo, a negação requerida corresponde a:
                 ~d∨(m∧~v): "[Não estou doente] ou [(o médico permite) e (não viajo)]."
Gabarito: Letra E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          26
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Outras equivalências e negações

Neste tópico, serão apresentadas outras equivalências e negações que, apesar de apresentarem baixa
incidência, podem aparecer na sua prova.

Negações da conjunção (e) para a forma condicional (se...então)

Existem duas maneiras de se negar a conjunção de modo que ela adquira a forma condicional:
                                                 ~(p∧q) ≡ p→~q
                                                 ~(p∧q) ≡ q→~p
Considere, por exemplo, a seguinte conjunção:

                                  p∧q: "[Comi lasanha] e [bebi refrigerante]."

Além de negar por De Morgan, temos as seguintes possíveis negações de p∧q:
                    ~(p∧q) ≡ p→~q: "Se [comi lasanha], então [não bebi refrigerante]."
                    ~(p∧q) ≡ q→~p: "Se [bebi refrigerante], então [não comi lasanha]."
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


A proposição original pode ser escrita pela conjunção c∧~f:
                                       c∧~f: "[Corro] e [não fico cansado]."
A questão pede pela negação da conjunção (e; ∧) considerada. Em regra, devemos utilizar De Morgan para
negar uma conjunção. Logo, vamos testar essa possibilidade primeiro.


Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         27
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

• Negam-se ambas as parcelas da conjunção (e; ∧); e
• Troca-se a conjunção (e; ∧) pela disjunção inclusiva (ou; ∨).


Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:
                                               ~(c∧~f) ≡ ~c∨~(~f)


A dupla negação da proposição simples f corresponde à proposição original. Ficamos com:
                                                  ~(c∧~f) ≡ ~c∨f


Logo, a negação requerida pode ser descrita por:
                                     ~c∨f: “[Não corro] ou [fico cansado].”


Note que essa possível negação não está presente nas alternativas. Observe, porém, que as alternativas A
e B apresentam condicionais como a negação da conjunção original. Logo, vamos utilizar as seguintes
negações da conjunção:
                                                 ~(p∧q) ≡ p→~q
                                                         ou
                                                 ~(p∧q) ≡ q→~p


Aplicando essas equivalências para o caso em questão, ficamos com:
                                               ~(c∧~f) ≡ c→~(~f)
                                                         ou
                                                ~(c∧~f) ≡ ~f→~c


A dupla negação de f corresponde à proposição original. Ficamos com:
                                                  ~(c∧~f) ≡ c→f
                                                         ou
                                                ~(c∧~f) ≡ ~f→~c


Logo, podemos escrever a negação da conjunção c∧~f das seguintes formas:
                              ~(c∧~f) ≡ c→f: "Se [corro], então [fico cansado]."
                                                         ou
                       ~(c∧~f) ≡ ~f→~c: "Se [não fico cansado], então [não corro]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           28
        www.estrategiaconcursos.com.br                                                               122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Veja que a primeira possibilidade de se negar a conjunção está presente na alternativa A, que é o gabarito
da questão.
Gabarito: Letra A.

Conjunção de condicionais

Existem duas equivalências envolvendo conjunção de condicionais que de vez em quando aparecem nas
provas:

                                             (p→r)∧(q→r) ≡ (p∨q)→r

                                             (p→q)∧(p→r) ≡ p→(q∧r)

        Quando o termo comum é o consequente, a equivalência apresenta uma disjunção
        inclusiva no antecedente.
                                             (p→r)∧(q→r) ≡ (p∨q)→r
        Quanto o termo comum é o antecedente, a equivalência apresenta uma conjunção no
        consequente.
                                             (p→q)∧(p→r) ≡ p→(q∧r)

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              29
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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
Gabarito: CERTO.


(PF/2004) As proposições (P∨Q)→S e (P→S)∨(Q→S) possuem tabelas de valorações iguais.
Comentários:
A assertiva está ERRADA. A equivalência correta seria (P→S)∧(Q→S) ≡ (P∨Q)→S.
Lembre-se que as equivalências mostradas nesse tópico são conjunções (e; ∧) de condicionais. Veja:
                                             (p→r)∧(q→r) ≡ (p∨q)→r
                                             (p→q)∧(p→r) ≡ p→(q∧r)


Para mostrar formalmente que (P∨Q)→S e (P→S)∨(Q→S) não possuem tabelas de valorações iguais, isto é,
para mostrar que essas proposições não são equivalentes, podemos montar a seguinte tabela-verdade:

Gabarito: ERRADO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             30
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Equivalências da disjunção exclusiva (ou...ou)

Uma forma equivalente de se escrever a disjunção exclusiva (ou...ou; ∨) consiste em negar ambos os
termos:

                                                 p∨q ≡ (~p)∨(~q)

Como exemplo, considere a disjunção exclusiva:

                                    p∨q: "Ou [jogo bola], ou [jogo sinuca]."

Essa disjunção exclusiva é equivalente a:

                            (~p)∨(~q): "Ou [não jogo bola], ou [não jogo sinuca]."

      Uma possível equivalência da disjunção exclusiva p∨q consiste em negar tanto p quanto q:

                                                 p∨q ≡ (~p)∨(~q)


Além disso, outras duas possibilidades de se obter equivalências da disjunção exclusiva consiste em
transformá-la em uma bicondicional (se e somente se; ) negando-se apenas um dos termos:

                                                  p∨q ≡ (~p)q

                                                  p∨q ≡ p(~q)

Para fins de exemplo, considere novamente a seguinte disjunção exclusiva:

                                    p∨q: "Ou [jogo bola], ou [jogo sinuca]."

Essa disjunção exclusiva também é equivalente às seguintes proposições:

                          (~p)q: "[Não jogo bola] se e somente se [jogo sinuca]."

                          p(~q): "[Jogo bola] se e somente se [não jogo sinuca]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       31
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                                 p∨q ≡ (~p)∨(~q)

                                                  p∨q ≡ (~p)q

                                                  p∨q ≡ p(~q)


(TCE SP/2017) Se a afirmação “Ou Renato é o gerente da loja ou Rodrigo é o dono da loja” é verdadeira,
então uma afirmação necessariamente verdadeira é:
a) Renato é o gerente da loja e Rodrigo é o dono da loja.
b) Renato é o gerente da loja se, e somente se, Rodrigo não é o dono da loja.
c) Se Renato não é o gerente da loja, então Rodrigo não é o dono da loja.
d) Se Renato é o gerente da loja, então Rodrigo é o dono da loja.
e) Renato é o gerente da loja.
Comentários:
Sejam as proposições simples:
                                         g: "Renato é o gerente da loja."
                                          d: "Rodrigo é o dono da loja."


A proposição original pode ser descrita por g∨d:
                    g∨d: "Ou [Renato é o gerente da loja] ou [Rodrigo é o dono da loja]."


Temos que procurar nas alternativas uma resposta equivalente a uma disjunção exclusiva. Sabemos que
existem as seguintes equivalências:
                                                 p∨q ≡ (~p)∨(~q)
                                                  p∨q ≡ (~p)q
                                                  p∨q ≡ p(~q)


Como não há uma disjunção exclusiva nas respostas, devemos testar as últimas duas equivalências. Para o
caso em questão, temos as seguintes equivalências:
                                                  g∨d ≡ (~g)d
                                                  g∨d ≡ g(~d)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          32
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Essas equivalências podem ser descritas por:
            (~g)d: "[Renato não é o gerente da loja] se, e somente se, [Rodrigo é o dono da loja]."
         g(~d): "[Renato é o gerente da loja] se, e somente se, [Rodrigo não é o dono da loja]."


Veja que g(~d) corresponde à proposição composta que está na letra B, que é o gabarito da questão.
Gabarito: Letra B.

Negação da disjunção exclusiva (ou...ou)

A principal negação da disjunção exclusiva é a bicondicional:

                                                  ~(p∨q) ≡ pq

Como exemplo, considere a seguinte disjunção exclusiva:

                                    p∨q: "Ou [jogo bola], ou [jogo sinuca]."

A negação dessa disjunção exclusiva pode ser escrita da seguinte forma:

                          ~(p∨q) ≡ pq: "[Jogo bola] se e somente se [jogo sinuca]."

Podemos ainda negar a disjunção exclusiva negando apenas uma das suas parcelas. Veja:

                                                 ~(p∨q) ≡ (~p)∨q
                                                 ~(p∨q) ≡ p∨(~q)

Como exemplo, considere novamente a seguinte disjunção exclusiva:

                                    p∨q: "Ou [jogo bola], ou [jogo sinuca]."

A negação dessa disjunção exclusiva também pode ser escrita das seguintes formas:

                           ~(p∨q) ≡ (~p)∨q: "Ou [não jogo bola], ou [jogo sinuca]."

                           ~(p∨q) ≡ p∨(~q): "Ou [jogo bola], ou [não jogo sinuca]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             33
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                                  ~(p∨q) ≡ pq

                                                 ~(p∨q) ≡ (~p)∨q

                                                 ~(p∨q) ≡ p∨(~q)


Vamos resolver alguns exercícios relativos à negação da disjunção exclusiva.

(DPE SP/2023) Considere a seguinte afirmação:
                 Ou Flávio é funcionário público ou Flávio é funcionário de empresa privada.
Assinale a alternativa que contém uma negação lógica para a afirmação apresentada.
a) Ou Flávio não é funcionário público ou Flávio não é funcionário de empresa privada.
b) Flávio é funcionário de empresa privada se, e somente se, ele é funcionário público.
c) Se Flávio é funcionário público, então ele é funcionário de empresa privada.
d) Flávio é funcionário de empresa privada e é funcionário público.
e) Flávio é funcionário público ou é funcionário de empresa privada.
Comentários:
Sejam as proposições simples:
                                        p: "Flávio é funcionário público."
                                 e: "Flávio é funcionário de empresa privada."


A afirmação original é uma disjunção exclusiva (ou...ou) representada por p∨e:
            p∨e: " Ou [Flávio é funcionário público] ou [Flávio é funcionário de empresa privada]."


Conhecemos as seguintes negações da disjunção exclusiva:
                                                  ~(p∨q) ≡ pq
                                                 ~(p∨q) ≡ (~p)∨q
                                                 ~(p∨q) ≡ p∨(~q)


Veja que as alternativas C, D e E podem ser eliminadas, pois a negação da disjunção exclusiva não pode ser
uma condicional, uma conjunção ou uma disjunção inclusiva. Restam apenas as alternativas A e B.
Aplicando negações aprendidas para o caso em questão, temos:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             34
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                                  ~(p∨e) ≡ pe
                                                 ~(p∨e) ≡ (~p)∨e
                                                 ~(p∨e) ≡ p∨(~e)


Veja que a alternativa A está errada, pois ela nega ambas as parcelas da disjunção exclusiva, apresentando
a proposição (~p)∨(~e). Essa proposição é uma equivalência de p∨e, não uma negação de p∨e.
Logo, a alternativa correta é a letra B, que apresenta uma possibilidade para a negação ~(p∨e), dada por
pe:
 ~(p∨e) ≡ pe: "[Flávio é funcionário de empresa privada] se, e somente se, [ele é funcionário público]."
Gabarito: Letra B.

(CMSJC/2022) Considere a afirmação: "Ou arranjo emprego ou não me caso". A negação dessa afirmação é:
a) Se eu arranjo emprego, então eu me caso.
b) Se eu não arranjo emprego, então eu me caso.
c) Ou não arranjo emprego ou me caso.
d) Ou não arranjo emprego ou não me caso.
e) Arranjo emprego e não me caso.
Comentários:
Considere as proposições simples:
                                              a: "Arranjo emprego."
                                                   c: "Me caso."


A afirmação original é uma disjunção exclusiva (ou...ou) representada por a∨~c:
                              a∨~c: " Ou [arranjo emprego] ou [não me caso]."


Conhecemos as seguintes negações da disjunção exclusiva:
                                                  ~(p∨q) ≡ pq
                                                 ~(p∨q) ≡ (~p)∨q
                                                 ~(p∨q) ≡ p∨(~q)


Note que nas alternativas não temos nenhuma bicondicional. Portanto, não devemos utilizar essa forma
de se negar a disjunção exclusiva.
Utilizando a negação ~(p∨q) ≡ (~p)∨q para o caso em questão, ficamos com:
                     ~(a∨~c) ≡ ~a∨~c: "Ou [não arranjo emprego] ou [não me caso]."


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             35
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Veja que a primeira negação está presente na alternativa D, que é o gabarito da questão.
Note que o uso da equivalência ~(p∨q) ≡ p∨(~q) também seria possível. Ocorre que, nesse caso, não
encontramos resposta. Vejamos:
                                               ~(a∨~c) ≡ a∨~(~c)


A dupla negação de c corresponde à proposição original. Ficamos com:
                                                  ~(a∨~c) ≡ a∨c


Logo, a negação poderia ser descrita por:
                            ~(a∨~c) ≡ a∨c: "Ou [arranjo emprego] ou [me caso]."


Note que essa possibilidade não aparece nas possíveis alternativas.
Gabarito: Letra D.

Equivalências da bicondicional (se e somente se)

Inicialmente, é importante que você saiba que a bicondicional apresenta a seguinte equivalência:

                                              pq ≡ (p→q)∧(q→p)

Considere, por exemplo, a seguinte bicondicional pq:

                              pq: "[Durmo] se e somente se [estou cansado]"

Essa bicondicional é equivalente a (p→q)∧(q→p):

       (p→q)∧(q→p): "[Se (estou cansado), então (durmo)] e [se (durmo), então (estou cansado)]".

Os alunos costumam decorar essa equivalência do seguinte modo: uma forma equivalente à bicondicional é
ir (p→q) e (∧) voltar (q→p) com a condicional.

                                              pq ≡ (p→q)∧(q→p)

            Mnemônico: uma forma equivalente à bicondicional é ir e voltar com a condicional


Outra forma equivalente de se escrever a bicondicional consiste em negar ambos os termos:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         36
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                                pq ≡ (~p)(~q)

Considere novamente a seguinte bicondicional pq:

                              pq: "[Durmo] se e somente se [estou cansado]"

Essa bicondicional é equivalente a (~p)(~q):

                     (~p)(~q): "[Não durmo] se e somente se [não estou cansado]."

Além disso, outras duas possibilidades de se obter uma equivalência da bicondicional consiste em
transformá-la em uma disjunção exclusiva (ou...ou; ∨) negando-se apenas um dos termos:

                                                  pq ≡ (~p)∨q

                                                  pq ≡ p∨(~q)

Para fins de exemplo, considere novamente a seguinte bicondicional:

                              pq: "[Durmo] se e somente se [estou cansado]"

Essa bicondicional também é equivalente às seguintes proposições:

                                (~p)∨q: "Ou [não durmo], ou [estou cansado]."

                               p∨(~q): " Ou [durmo], ou [não estou cansado]."

                                              pq ≡ (p→q)∧(q→p)

                                                pq ≡ (~p)(~q)

                                                  pq ≡ (~p)∨q

                                                  pq ≡ p∨(~q)


Vejamos algumas questões sobre equivalências da bicondicional.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                   37
        www.estrategiaconcursos.com.br                                                       122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(APPGG Pref. SP/2023) Uma proposição lógica equivalente à proposição “Adriano é pai se, e somente se,
Giuliano é filho” está contida na alternativa:
a) Se Giuliano não é filho, então Adriano não é pai.
b) Adriano é pai, e Giuliano não é filho.
c) Ou Adriano é pai, ou Giuliano é filho.
d) Se Adriano é pai, então Giuliano é filho.
e) Ou Giuliano é filho, ou Adriano não é pai.
Comentários:
Sejam as seguintes proposições simples:
                                                a: "Adriano é pai."
                                                g: "Giuliano é filho."


A proposição original pode ser escrita pela bicondicional ag:
                             “[Adriano é pai] se, e somente se, [Giuliano é filho].”


Conhecemos as seguintes equivalências para a bicondicional:
                                               pq ≡ (p→q)∧(q→p)
                                                pq ≡ (~p)(~q)
                                                  pq ≡ (~p)∨q
                                                  pq ≡ p∨(~q)


Note que as alternativas A e D podem ser eliminadas, pois são condicionais em que há apenas duas
proposições simples sem uma conjunção.
A alternativa B também pode ser eliminada, pois a bicondicional não pode ser equivalente a uma conjunção.
Logo, restam as alternativas C e E, que são disjunções exclusivas (ou...ou; ∨). Devemos, portanto, aplicar as
duas últimas equivalências:
                       ag ≡ (~a)∨g: "Ou [Adriano não é pai], ou [Giuliano é filho]."
                       ag ≡ a∨(~g): " Ou [Adriano é pai], ou [Giuliano não é filho]."


Note que a alternativa C deve ser eliminada, pois ela não negou nenhuma parcela. Essa alternativa
corresponde a a∨g:
                                a∨g: "Ou [Adriano é pai], ou [Giuliano é filho]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                38
        www.estrategiaconcursos.com.br                                                                   122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A alternativa correta é a letra E, que apresenta a proposição g∨(~a).
Ainda nessa aula, em álgebra de proposições, veremos que na disjunção exclusiva podemos trocar
livremente de posição ambas as parcelas, de modo que a equivalência dada por (~a)∨g corresponde a
g∨(~a):
                             g∨(~a): Ou [Giuliano é filho], ou [Adriano não é pai].
Gabarito: Letra E.


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
Sejam as proposições:
                                          p: "Um número inteiro é par."
                                 q: "O quadrado de um número inteiro é par."


A proposição composta pode ser assim representada:
               pq: "[Um número inteiro é par] se e somente se [o seu quadrado for par]."


Sabemos que uma possível equivalência para a bicondicional é:
                                              pq ≡ (p→q)∧(q→p)


Não temos alternativa que corresponda a essa última equivalência. Note, porém, que se realizarmos a
contrapositiva de (q→p), encontramos:
                                            pq ≡ (p→q)∧(~p→~q)
Esse resultado pode ser lido como:
   (p→q)∧(~p→~q): "[Se (um número inteiro for par), então (o seu quadrado é par)], e [se (um número
                      inteiro não for par), então (o seu quadrado não é par)]."
Gabarito: Letra A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            39
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negações da bicondicional (se e somente se)

São quatro as maneiras mais comuns de se negar a bicondicional. A primeira que vamos apresentar é que a
negação da bicondicional é equivalente à disjunção exclusiva.

                                                  ~(pq) ≡ p∨q

Considere novamente a seguinte bicondicional pq:

                              pq: "[Durmo] se e somente se [estou cansado]"

A negação dessa bicondicional pode ser escrita da seguinte forma:

                              ~(pq) ≡ p∨q: "Ou [Durmo], ou [estou cansado]"

Podemos ainda negar a proposição bicondicional negando apenas uma das suas parcelas. Veja:

                                                ~(pq) ≡ (~p)q
                                                ~(pq) ≡ p(~q)

Como exemplo, considere novamente a seguinte bicondicional:

                              pq: "[Durmo] se e somente se [estou cansado]"

A negação dessa bicondicional também pode ser escrita das seguintes formas:

                    ~(pq) ≡ (~p)q: "[Não durmo] se e somente se [estou cansado]"
                    ~(pq) ≡ p(~q): "[Durmo] se e somente se [não estou cansado]"

Cabe salientar que existe uma outra forma de negação da bicondicional utilizando apenas operadores de
conjunção e de disjunção inclusiva:

                                           ~ (pq) ≡ (p∧~q)∨(q∧~p)

                                                 ~ (pq) ≡ p∨q
                                               ~ (pq) ≡ (~p)q
                                               ~ (pq) ≡ p(~q)
                                           ~ (pq) ≡ (p∧~q)∨(q∧~p)


Vamos resolver alguns exercícios relativos à negação da bicondicional.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          40
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(CAU TO/2023) Com relação a estruturas lógicas, julgue o item.
A negação de “A Fênix é imortal se, e somente se, renasce das cinzas” é “Ou a Fênix é imortal ou renasce das
cinzas”.
Comentários:
Sejam as proposições simples:
                                              i: "A Fênix é imortal."
                                          r: "A Fênix renasce das cinzas."


A afirmação original é a bicondicional ir:
                      ir: "[A Fênix é imortal] se, e somente se, [renasce das cinzas]."


A questão sugere que a negação da bicondicional é uma disjunção exclusiva. Devemos, portanto, utilizar a
negação ~(pq) ≡ p∨q. Para o caso em questão, temos:
                                                   ~(ir) ≡ i∨r
Ficamos com a seguinte negação:
                        ~(ir) ≡ i∨r: “Ou [a Fênix é imortal] ou [renasce das cinzas].”
Gabarito: CERTO.


(Pref. Vila Lângaro/2019) A negação da proposição “João passa no concurso público se e somente se João
estuda” é:
a) João não passa no concurso público se e somente se João não estudou.
b) João não passa no concurso público e João não estudou.
c) João passa no concurso público e João estuda.
d) Ou João passa no concurso público ou João estuda.
e) Se João passa no concurso público, então João estuda.
Comentários:
Sejam as proposições simples:
                                       p: " João passa no concurso público."
                                                 e: " João estuda."


A afirmação original é a bicondicional pe:
                 pe: "[João passa no concurso público] se, e somente se, [João estuda]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               41
        www.estrategiaconcursos.com.br                                                                   122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

As principais formas de se negar a bicondicional são:
                                                  ~ (pq) ≡ p∨q
                                               ~ (pq) ≡ (~p)q
                                               ~ (pq) ≡ p(~q)
                                           ~ (pq) ≡ (p∧~q)∨(q∧~p)


Note que a primeira forma de se negar a bicondicional apresentada, quando aplicada para a bicondicional
pe, corresponde à alternativa D, que é o gabarito da questão:
                 ~(pe) ≡ p∨e: " Ou [João passa no concurso público] ou [João estuda]."


As demais formas apresentadas nas alternativas não correspondem à negação da bicondicional. Especial
atenção deve ser dada à alternativa A, que apresenta uma equivalência da bicondicional, não uma negação:
                                                pe ≡ (~p)(~e)
Gabarito: Letra D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           42
        www.estrategiaconcursos.com.br                                                               122

                                    


---

 Equipe Exatas Estratégia Concursos
 Aula 01

ÁLGEBRA DE PROPOSIÇÕES
                                             Álgebra de proposições
                                              Propriedade comutativa

    Todos os conectivos, exceto o condicional (se...então; →), gozam da propriedade comutativa.

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
                                                      p∧t ≡ p
                                                      p∧c ≡ c

                                                      p∨t ≡ t
                                                      p∨c ≡ p

                                              Propriedade da absorção
                                                    p∨(p∧q) ≡ p
                                                    p∧(p∨q) ≡ p

                                           Propriedade da idempotência
                                                      p∧p ≡ p
                                                      p∨p ≡ p

                           Álgebra de proposições × tautologia, contradição e contingência
    Desenvolver a proposição composta original até se chegar:
    • Em uma tautologia t; ou
    • Em uma contradição c; ou
    • Em uma contingência, que pode ser uma proposição simples p, uma conjunção p∧q, etc.

                     Bicondicional em problemas de tautologia, contradição e contingência
                                                     XY
    • Se X e Y forem proposições equivalentes, a bicondicional será uma tautologia.
    • Se X e Y forem proposições em que uma é a negação da outra, a bicondicional será uma contradição.

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 43
       www.estrategiaconcursos.com.br                                                                     122

                                   


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Introdução

A álgebra de proposições trata do uso sequencial de equivalências lógicas e de outras propriedades para
simplificar expressões.

O uso dessa ferramenta é interessante para resolver questões de um modo mais rápido. Além disso, pode
ser muito útil em questões mais diretas de equivalências lógicas, quando a banca tenta "esconder" a
equivalência nas alternativas.
O mais importante é você conhecer as propriedades comutativa, associativa e distributiva e suas aplicações
mais imediatas nas questões. Isso porque, via de regra, o conhecimento das demais propriedades não
costuma ser cobrado e, além disso, é comum que as questões mais complexas de álgebra de proposições
possam ser resolvidas por tabela-verdade.


Propriedade comutativa

Todos os conectivos, exceto o condicional (se...então; →), gozam da propriedade comutativa. Isso quer dizer
que é possível trocar a ordem dos componentes em uma proposição composta sem afetar o resultado da
tabela-verdade:

                                                     p∧q ≡ q∧p

                                                     p∨q ≡ q∨p

                                                     p∨q ≡ q∨p

                                                   pq ≡ qp

A seguir temos um exemplo da utilidade da propriedade comutativa em questões de concursos públicos.

Suponha que uma questão peça para você a negação da seguinte condicional:
                                p→q: "Se [eu correr], então [chego a tempo]."


Sabemos que essa condicional não goza da propriedade comutativa. A negação dessa condicional, pedida
pela questão, pode ser encontrada pela seguinte equivalência:
                                ~ (p→q) ≡ p∧~q: "Corro e não chego a tempo."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              44
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Suponha agora que, dentre as alternativas da questão, você não encontre a proposição composta "Corro e
não chego a tempo", porém encontre "Não chego a tempo e corro". Pode marcar essa alternativa sem medo!
Isso porque, usando a propriedade comutativa, a conjunção obtida p∧~q pode ser escrita como ~q∧p:
                            ~ (p→q) ≡ p∧~q ≡ ~q∧p: "Não chego a tempo e corro."

       Todos os conectivos, exceto o condicional, comutam:

                                                     p∧q ≡ q∧p
                                                     p∨q ≡ q∨p
                                                     p∨q ≡ q∨p
                                                    pq ≡ qp

                           A condicional p→q não goza da propriedade comutativa.
                                      p→q e q→p não são equivalentes.

       A equivalência correta para a condicional é a contrapositiva:

                                                   p→q ≡ ~q→~p


Propriedade associativa

Na álgebra elementar, quando realizamos uma multiplicação, é comum ouvirmos a frase "a ordem dos
fatores não altera o produto". Essa frase resume a propriedade associativa para a multiplicação.
Vamos supor que queremos realizar a multiplicação 3×5×7. Ela pode ser feita de duas formas:

   •    Multiplicamos 3×5 e depois multiplicamos esse resultado por 7, obtendo (3×5)×7; ou
   •    Multiplicamos 3 pelo resultado da multiplicação de 5×7, obtendo 3×(5×7).
Ou seja, na álgebra elementar, a propriedade associativa nos diz que em uma multiplicação de diversos
termos, podemos realizar as operações de multiplicação na ordem que bem entendermos que o resultado
será o mesmo:
                                            (𝟑 × 𝟓) × 𝟕 = 𝟑 × (𝟓 × 𝟕)
O mesmo vale para a adição de termos:
                                            (𝟑 + 𝟓) + 𝟕 = 𝟑 + (𝟓 + 𝟕)

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        45
         www.estrategiaconcursos.com.br                                                            122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Na álgebra de proposições temos algo muito semelhante. Dizemos que a conjunção (e; ∧) e a disjunção
inclusiva (ou; ∨) gozam da propriedade associativa, sendo válidas as equivalências:

                                                (p∧q)∧r ≡ p∧(q∧r)

                                                (p∨q)∨r ≡ p∨(q∨r)

         Observe que a propriedade associativa não mistura em uma mesma expressão o conectivo
         "e" e o conectivo "ou"

Vamos a um exemplo que mostra uma utilidade para a propriedade associativa.

(Inédita) Julgue o item a seguir.
A proposição p∨(q∨~p) é uma tautologia.
Comentários:
Nesse tipo de problema, é interessante tentarmos chegar em uma proposição do tipo (p∨~p). Isso porque,
de acordo com a aula anterior, sabemos que essa proposição é uma tautologia. Originalmente, temos:
                                                     p∨(q∨~p)


Utilizando a propriedade comutativa em (q∨~p), temos:
                                                     p∨(~p∨q)


Utilizando a propriedade associativa na expressão anterior, temos:
                                                     (p∨~p)∨q


De acordo com a aula anterior, sabemos que (p∨~p) é uma tautologia clássica. Representando a tautologia
pela letra t, ficamos com:
                                                        t∨q


Observe que a t∨q é a disjunção inclusiva entre um termo que é sempre verdade com a proposição q.
Sabemos que, para a disjunção inclusiva ser falsa, ambos os termos precisam ser falsos. Logo, como um dos
termos é sempre verdadeiro, essa disjunção inclusiva é sempre verdadeira. Consequentemente, a
expressão original é uma tautologia. Podemos escrever:
                                                   p∨(q∨~p) ≡ t
Gabarito: CERTO.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            46
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Outra forma de se entender a propriedade associativa é perceber que, quando temos uma sequência só de
conjunções (e; ∧) ou só de disjunções inclusivas (ou; ∨), podemos remover os parênteses/colchetes.

(TRT 1/2008) Proposições compostas são denominadas equivalentes quando possuem os mesmos valores
lógicos V ou F, para todas as possíveis valorações V ou F atribuídas às proposições simples que as compõem.
Assinale a opção correspondente à proposição equivalente a “~[[A∧(¬B)]→C]”.
a) A∧(~B)∧(~C)
b) (~A)∨(~B)∨C
c) C→[A∧(~B)]
d) (~A)∨B∨C
e) [(~A)∧B]→(~C)
Comentários:
A proposição original, dada por ~[[A∧(~B)]→C], corresponde à negação de um condicional cujo o
antecedente é [A∧(~B)] e cujo o consequente é C.
Para negar uma condicional, utilizamos a equivalência ~(p→q) ≡ p∧~q. Aplicando ao caso em questão,
devemos manter [A∧(~B)], trocar a condicional pela conjunção e negar C:
                                        ~[[A∧(~B)]→C] ≡ [A∧(~B)]∧(~C)
Observe que, pela propriedade associativa, a ordem em que é executada a conjunção não importa. Nesse
caso, podemos remover os colchetes da proposição obtida. Consequentemente, podemos escrever:
                                        ~[[A∧(~B)]→C] ≡ A∧(~B)∧(~C)
Gabarito: Letra A.


Propriedade distributiva

Na álgebra elementar, a propriedade distributiva da multiplicação com relação à adição consiste em realizar
a seguinte operação:
                                         3×(5 + 7) = 3 × 5 + 3 × 7
Da mesma forma, podemos partir do lado direito da equação acima chegar ao lado esquerdo "colocando o
número 3 em evidência":
                                         3 × 5 + 3 × 7 = 3 × (5 + 7)

Na álgebra de proposições temos as seguintes propriedades distributivas:

   •   Da conjunção (e; ∧) com relação à disjunção inclusiva (ou; ∨); e
   •   Da disjunção inclusiva (ou; ∨) com relação à conjunção (e; ∧);

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              47
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Propriedade distributiva da conjunção com relação à disjunção inclusiva

A propriedade distributiva do conectivo "e" em relação ao "ou" é dada pela equivalência abaixo. Perceba
que nela "p∧" é distribuído.

                                             p∧(q∨r) ≡ (p∧q) ∨ (p∧r)

É importante também reconhecer a propriedade "de trás para frente". Isso significa que podemos colocar o
termo "p∧" em evidência.

                                              (p∧q)∨(p∧r) ≡ p∧(q∨r)

Propriedade distributiva da disjunção inclusiva com relação à conjunção

A propriedade distributiva do conectivo "ou" em relação ao "e" é dada pela equivalência abaixo. Perceba
que nela "p∨" é distribuído.

                                              p∨(q∧r) ≡ (p∨q)∧(p∨r)

É importante também reconhecer a propriedade "de trás para frente". Isso significa que podemos colocar o
termo " p∨" em evidência.

                                              (p∨q)∧(p∨r) ≡ p∨(q∧r)

(ISS Fortaleza/2023) P: "Se a pessoa trabalha com o que gosta e está de férias, então é feliz ou está de férias."
Considerando a proposição P precedente, julgue o item seguinte.
A proposição P pode ser obtida pela aplicação da propriedade distributiva da conjunção sobre a condicional,
utilizando-se as proposições "A pessoa está de férias." e "Se a pessoa trabalha com o que gosta, é feliz.".
Comentários:
Em lógica de proposições, temos as seguintes propriedades distributivas:
                 Propriedade distributiva da conjunção com relação à disjunção inclusiva
                                             p∧(q∨r) ≡ (p∧q) ∨ (p∧r)
                 Propriedade distributiva da disjunção inclusiva com relação à conjunção
                                              p∨(q∧r) ≡ (p∨q)∧(p∨r)


Não há que se falar em "propriedade distributiva da conjunção sobre a condicional".
Gabarito: ERRADO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                    48
        www.estrategiaconcursos.com.br                                                                       122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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


Logo, temos a seguinte representação:
                                                      s∧(g∨k)


Por meio da propriedade distributiva, podemos distribuir "s∧”:
                                              s∧(g∨k) ≡ (s∧g)∨(s∧k)


Temos, portanto, a seguinte equivalência:
   (s∧g)∨(s∧k): "([Sueli é professora] e [pratica ginástica]), ou ([Sueli é professora] e [pratica corrida])"


Essa equivalência corresponde à alternativa C.
Gabarito: Letra C.

Cumpre destacar que quando temos um condicional e queremos utilizar a álgebra de proposições para
resolver alguma questão, é necessário transformar a condicional em disjunção inclusiva por meio da
seguinte equivalência já conhecida:

                                                   p→q ≡ ~p∨q

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                      49
        www.estrategiaconcursos.com.br                                                                          122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Lembre-se, também, que temos como transformar a negação da condicional em uma conjunção:

                                                 ~(p→q) ≡ p∧~q

A seguir, apresentaremos uma questão que pode ser resolvida mais rapidamente utilizando as propriedades
que vimos até agora.

(MPE RO/2023) Assinale a opção em que é apresentada a proposição lógica equivalente à proposição lógica
(P→Q)∧(R∨Q).
a) Q∨(~P∧R)
b) (P∧R)∨(~Q∨~P)
c) P→(R∧Q)
d) ~P→(~Q∧R)
e) (P→R)∨(~Q→~P)
Comentários:
Para resolver essa questão, faz-se necessário utilizar as propriedades que aprendemos até agora de modo a
desenvolver a proposição composta (P→Q)∧(R∨Q) até se chegar em outra mais simples.
Veja que, caso não resolvêssemos essa questão por álgebra de proposições, seria necessário construir a
tabela-verdade de (P→Q)∧(R∨Q) e comparar essa tabela-verdade com as tabelas das outras cinco
alternativas.
Feitas essas observações, vamos ao problema.
Note que temos uma condicional na proposição composta original: (P→Q). Para desenvolver a expressão
por álgebra de proposições, devemos transformá-la em disjunção inclusiva: ~P∨Q. Logo, a proposição
original pode ser descrita por:
                                                  (~P∨Q)∧(R∨Q)


Observando o que acabamos de obter, note que, após algumas operações, poderemos colocar "Q∨" em
evidência, por meio da propriedade distributiva. Antes disso, note que:
• Aplicando a propriedade comutativa em (~P∨Q), ficamos com (Q∨~P); e
• Aplicando a propriedade comutativa em (R∨Q), ficamos com (Q∨R).
Logo, a proposição (~P∨Q)∧(R∨Q) pode ser descrita por:
                                                  (Q∨~P)∧(Q∨R)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            50
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Por meio da propriedade distributiva, podemos colocar "Q∨" em evidência:
                                                    Q∨(~P∧R)


Note, portanto, que a proposição original corresponde à proposição apresentada na alternativa A.
Gabarito: Letra A.


Propriedade da identidade, da absorção e da idempotência

        Trate as propriedades da identidade, da absorção e da idempotência como um "bônus"
        que pode te ajudar em algumas questões mais difíceis. Não se apegue muito a essas
        propriedades, pois elas não costumam aparecer em prova.

Propriedade da identidade

Propriedade da identidade para a conjunção

Sendo t uma tautologia e c uma contradição, temos as seguintes equivalências:

                                                      p∧t ≡ p

                                                      p∧c ≡ c

Note que p∧t é equivalente a p porque se trata de uma conjunção em que um termo é sempre verdadeiro.
Isso significa que o valor de p∧t depende somente do valor de p:

   •   Se p for verdadeiro, teremos V∧V, que é uma conjunção verdadeira; e
   •   Se p for falso, teremos F∧V, que é uma conjunção falsa.

Além disso, p∧c é equivalente a c porque se trata de uma conjunção em que temos um termo sempre falso.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         51
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Propriedade da identidade para a disjunção inclusiva

Sendo t uma tautologia e c uma contradição, temos as seguintes equivalências:

                                                         p∨t ≡ t

                                                        p∨c ≡ p

Note que p∨t é uma tautologia t porque se trata de uma disjunção inclusiva em que temos um termo sempre
verdadeiro:

Além disso, p∨c é equivalente a p porque se trata de uma disjunção inclusiva em que um termo é sempre
falso. Isso significa que o valor de p∨c depende somente do valor de p:

   •     Se p for verdadeiro, teremos V∨F, que é uma disjunção inclusiva verdadeira; e
   •     Se p for falso, teremos F∨F, que é uma disjunção inclusiva falsa.

(ANPAD/2014) A proposição composta p∧(q∨(~p)) é logicamente equivalente à proposição
a) q
b) p∧q
c) p∨q
d) p∧(~q)
e) p∨(~q)
Comentários:

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        52
          www.estrategiaconcursos.com.br                                                            122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Aplicado a propriedade distributiva em "p∧", temos:
                                            p∧(q∨~p) ≡ (p∧q)∨(p∧~p)


Conforme visto na aula anterior, (p∧~p) é uma contradição. Logo, ficamos com:
                                                       (p∧q)∨c


Veja que temos uma disjunção inclusiva entre (p∧q) e uma contradição c. Essa disjunção inclusiva é
equivalente a (p∧q), pois se trata de uma disjunção inclusiva em que um termo é sempre falso (propriedade
da identidade para a disjunção inclusiva). Logo, ficamos com:
                                                              (p∧q)
Gabarito: Letra B.                                      ==219a34==

Propriedade da absorção

A propriedade da absorção é representada por duas equivalências:

                                                     p∨(p∧q) ≡ p

                                                     p∧(p∨q) ≡ p

Essas equivalências são demonstráveis por tabela-verdade:

(SEFAZ-MS/2006) Representando por ~r a negação de uma proposição r, a negação de p∧(p∨q) é
equivalente a:
a) ~p.
b) ~q.
c) ~(p∨q).
d) ~(p∧q).
e) uma contradição.
Comentários:
Pela propriedade da absorção, sabemos que p∧(p∨q) ≡ p. Logo, a negação pedida é ~p.
Gabarito: Letra A.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           53
         www.estrategiaconcursos.com.br                                                               122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Propriedade da idempotência

A propriedade da idempotência é representada por duas equivalências:

                                                      p∧p ≡ p

                                                      p∨p ≡ p

Note que o valor lógico da conjunção p∧p depende exclusivamente da proposição p, pois:

   •   Se p for verdadeiro, p∧p será verdadeiro, pois será uma conjunção entre dois termos verdadeiros; e
   •   Se p for falso, p∧p será falso, pois será uma conjunção entre dois termos falsos

Além disso, o valor lógico da disjunção inclusiva p∨p também depende exclusivamente da proposição p, pois:

   •   Se p for verdadeiro, p∨p será verdadeiro, pois será uma disjunção inclusiva entre dois termos
       verdadeiros; e
   •   Se p for falso, p∨p será falso, pois será uma disjunção inclusiva entre dois termos falsos.

Para que não reste dúvidas, as equivalências são demonstráveis por tabela-verdade:

(DPEN/2013) Considerando que, P, Q e R são proposições conhecidas, julgue o próximo item.
A proposição ¬[(P → Q)∨Q] é equivalente à proposição P∧(¬Q), em que ¬P é a negação de P.
Comentários:
Primeiramente, vale perceber que essa questão pode ser resolvida por tabela-verdade. Isso porque, para
duas proposições serem equivalentes, basta que elas apresentem a mesma tabela-verdade.
Dito isso, vamos resolver a questão por álgebra de proposições. A nossa estratégia será partir de
~[(P→Q)∨Q] para chegar em P∧(~Q).


Veja que ~[(P→Q)∨Q] é a negação da disjunção inclusiva entre (P→Q) e Q. Vamos desenvolver essa negação
por De Morgan, negando ambas as parcelas e trocando "ou" por "e". Ficamos com:
                                                   ~(P→Q)∧~Q


Para negar uma condicional, utilizamos a seguinte equivalência: ~(p→ q) ≡ p∧~ q. Ficamos com:
                                                   [P∧~Q]∧~Q

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             54
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Pela propriedade associativa, podemos escrever:
                                                   P∧[~Q∧~Q]


Observe que, pela propriedade idempotente, [~Q∧~Q] apresenta sempre o valor lógico de ~Q. Isso porque
quando ~Q é V, [~Q∧~Q] é V, e quando ~Q é F, [~Q∧~Q] é F. Logo, nossa conjunção fica assim:
                                                      P∧(~Q)
Gabarito: CERTO.


Álgebra de proposições × tautologia, contradição e contingência

Você se lembra que um dos métodos para descobrirmos se uma proposição composta é uma tautologia,
uma contradição ou uma contingência é utilizar equivalências lógicas ou álgebra de proposições?

Esse método costuma ser o mais rápido, porém requer o domínio das equivalências lógicas e das
propriedades da álgebra de proposições.

A ideia consiste basicamente em desenvolver a proposição composta original até se chegar:

   •   Em uma tautologia t; ou
   •   Em uma contradição c; ou
   •   Em uma contingência, que pode ser uma proposição simples p, uma conjunção p∧q, etc.

(STJ/2018) A proposição ¬P→(P→Q), em que ¬P denota a negação da proposição P, é uma tautologia, isto é,
todos os elementos de sua tabela-verdade são V (verdadeiro).
Comentários:
Note que originalmente temos a condicional ~P→ (P→Q), cujo antecedente é ~P e cujo consequente é outra
condicional, dada por (P→Q).
Utilizando a equivalência p→q ≡ ~p∨q, ficamos com:
                                                  ~(~P)∨(P→Q)


A dupla negação de P corresponde à proposição simples P. Ficamos com:
                                                     P∨(P→Q)


Utilizando novamente a equivalência p→q ≡ ~p∨q para a condicional (P→Q), ficamos com:
                                                     P∨(~P∨Q)


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          55
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Utilizando a propriedade associativa, temos:
                                                     (P∨~P)∨Q


P∨~P é uma tautologia. Ficamos com:
                                                        t∨Q


Veja que temos uma disjunção inclusiva entre uma tautologia t e uma proposição simples Q. Essa disjunção
inclusiva é sempre verdadeira, pois um dos termos dela (tautologia t) sempre será verdadeiro (propriedade
da identidade para a disjunção inclusiva). Logo, a proposição original corresponde a uma tautologia:
                                                          t
Gabarito: CERTO.


(CBM AL/2017) A respeito de proposições lógicas, julgue o item a seguir.
Se P e Q forem proposições simples, então a proposição composta Q∨(Q→P) é uma tautologia.
Comentários:
Temos a seguinte proposição composta:
                                                    Q∨(Q → P)


Utilizando a equivalência p→q ≡ ~p∨q para a condicional (Q→P), ficamos com:
                                                    Q∨(~Q∨P)


Utilizando a propriedade associativa, temos:
                                                    (Q∨~Q)∨P


Q∨~Q é uma tautologia. Ficamos com:
                                                        t∨P


Veja que temos uma disjunção inclusiva entre uma tautologia t e uma proposição simples P. Essa disjunção
inclusiva é sempre verdadeira, pois um dos termos dela (tautologia t) sempre será verdadeiro (propriedade
da identidade para a disjunção inclusiva). Logo, a proposição original corresponde a uma tautologia:
                                                          t
Gabarito: CERTO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            56
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Bicondicional em problemas de tautologia, contradição e contingência

Um problema muito explorado pelas bancas de concurso público consiste em perguntar se uma determinada
bicondicional é uma tautologia ou uma contradição.
Quanto ao conectivo bicondicional, sabemos que:

   •   A bicondicional é verdadeira quando ambas as parcelas tiverem o mesmo valor lógico; e
   •   A bicondicional é falsa quando ambas as parcelas tiverem valores lógicos contrários.

Considere a seguinte bicondicional cujas parcelas são duas proposições compostas X e Y:

                                                       XY

Note que:

   •   Se X e Y forem proposições equivalentes, ambas as parcelas terão sempre o mesmo valor lógico.
       Nesse caso, a bicondicional será sempre verdadeira, ou seja, a bicondicional será uma tautologia.
   •   Se X e Y forem proposições em que uma é a negação da outra, ambas as parcelas terão sempre
       valores lógicos contrários. Nesse caso, a bicondicional será sempre falsa, ou seja, a bicondicional será
       uma contradição.

(POLC AL/2023) Considere os conectivos lógicos usuais e assuma que as letras maiúsculas representam
proposições lógicas simples. Com base nessas informações, julgue o item seguinte relativo à lógica
proposicional.
A proposição lógica (P→Q)((~P)∨Q) é uma tautologia.
Comentários:
Originalmente, temos a seguinte bicondicional:
                                                (P→Q)((~P)∨Q)


Utilizando a equivalência p→q ≡ ~p∨q para a condicional (P→Q), obtemos ((~P)∨Q). Logo, a bicondicional
original pode ser descrita por:
                                               ((~P)∨Q)((~P)∨Q)


Veja que a bicondicional original corresponde a uma bicondicional em que as duas parcelas são iguais. Logo,
ambas as parcelas da bicondicional sempre vão apresentar o mesmo valor lógico. Consequentemente, a
bicondicional sempre será verdadeira. Trata-se, portanto, de uma tautologia.
Gabarito: CERTO


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                  57
        www.estrategiaconcursos.com.br                                                                     122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(Pref Acrelândia/2022) A proposição (P∧Q)(∼P∨∼Q) representa uma afirmativa que podemos chamar de:
a) contingência.
b) tautologia.
c) implicação lógica.
d) contradição.
e) paradoxo.
Comentários:
Originalmente, temos a seguinte bicondicional:
                                                (P∧Q)(∼P∨∼Q)


Note que o segundo termo da bicondicional, (~P∨~Q), é a negação do primeiro termo (P∧Q). Isso porque,
por De Morgan, temos:
                                                (P∧Q) ≡ (~P∨~Q)


Logo, a bicondicional em questão pode ser escrita do seguinte modo:
                                                 (P∧Q)~(P∧Q)


Veja que a bicondicional original corresponde a uma bicondicional em que as duas parcelas são uma a
negação da outra. Logo, ambas as parcelas da bicondicional sempre vão apresentar valores lógicos distintos.
Consequentemente, a bicondicional sempre será falsa. Trata-se, portanto, de uma contradição.
Gabarito: Letra D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              58
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

 Equipe Exatas Estratégia Concursos
 Aula 01

                         QUESTÕES COMENTADAS - FGV

Equivalências lógicas

       As questões estão divididas em quatro tópicos, conforme a teoria da aula:

       • Equivalências fundamentais
       • Negações lógicas
       • Questões com mais de uma equivalência
       • Outras equivalências e negações

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático          59
       www.estrategiaconcursos.com.br                                              122

                                   


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Equivalências fundamentais

 (FGV/ALESC/2024) Considere a afirmação:
                                 “Se tenho namorada então não fico sozinho”
Uma afirmação logicamente equivalente à afirmação dada é:
a) Se não fico sozinho então tenho namorada.
b) Se fico sozinho então não tenho namorada.
c) Se não tenho namorada então fico sozinho.
d) Tenho namorada e não fico sozinho.
e) Tenho namorada ou não fico sozinho.

Comentários:

Sejam as proposições simples:

                                              t: "Tenho namorada."
                                                 f: "Fico sozinho."

A afirmação original corresponde a t→~f:

                           t→~f: “Se [tenho namorada], então [não fico sozinho].”

As alternativas apresentam tanto condicionais (se...então; →) quanto uma disjunção inclusiva (ou; ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                t→~f ≡ ~(~f)→~t

A dupla negação de f corresponde à proposição original f. Ficamos com:

                                                   t→~f ≡ f→~t

A proposição equivalente pode ser descrita por:

                           f→~t: “Se [fico sozinho], então [não tenho namorada].”


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            60
        www.estrategiaconcursos.com.br                                                                122

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 01

Veja que essa equivalência está na alternativa B, que é o gabarito da questão.

Para fins didáticos, vamos utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

     •   Nega-se o primeiro termo;
     •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
     •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                   t→~f ≡ ≡ ~t∨~f

A proposição equivalente pode ser descrita por:

                            ~t∨~f: “[Não tenho namorada] ou [não fico sozinho].”

Veja que essa possível equivalência não aparece nas alternativas.

Gabarito: Letra B.

  (FGV/SEFAZ-MG/2023) É dada a afirmativa:
                                   “Se o cliente pagou então não é devedor.”
Para cada uma das três afirmativas a seguir, assinale “V” se a afirmativa for logicamente equivalente à
afirmativa dada e “F” se a afirmativa não for logicamente equivalente à afirmativa dada.
I. Se o cliente não pagou então é devedor.
II. Se o cliente não é devedor então pagou.
III. Se o cliente é devedor então não pagou.
As afirmativas I, II e III são, respectivamente,
a) V, V e F.
b) F, V e F.
c) F, F e V.
d) F, V e V.
e) V, V e V.

Comentários:

Sejam as proposições simples:

                                                p: "O cliente pagou."

                                             d: "O cliente é devedor."


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                61
         www.estrategiaconcursos.com.br                                                                   122

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 01

A proposição original pode ser descrita por p→~d:

                                p→~d: "Se [o cliente pagou], então [não é devedor]."

Veja que estamos partindo de uma condicional e a questão pergunta quais das três condicionais são
equivalentes. Para avaliá-las, devemos utilizar somente a equivalência contrapositiva, pois ela é a única que
transforma uma condicional em outra condicional.

A equivalência contrapositiva é dada por p→q ≡ ~q→~p. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

      •    Invertem-se as posições do antecedente e do consequente; e
      •    Negam-se ambos os termos da condicional.

Para o caso em questão, temos:
                                                   p→~d ≡ ~(~d)→~p
A dupla negação de uma proposição corresponde à proposição original. Ficamos com:
                                                      p→~d ≡ d→~p

A proposição equivalente pode ser descrita por:

                                d→~p: "Se [o cliente é devedor], então [não pagou]."

Somente a afirmação III apresenta uma condicional equivalente. As demais condicionais não são
equivalentes, pois não decorrem da equivalência contrapositiva. O gabarito, portanto, é letra C: F, F e V.

Gabarito: Letra C.

   (FGV/AGENERSA/2023) Considere a afirmativa a seguir.
                                     “Se não durmo, então tenho dor de cabeça.”
Analise, a seguir, três novas afirmativas:
I. Se durmo, então não tenho dor de cabeça.
II. Se tenho dor de cabeça, então não durmo.
III. Se não tenho dor de cabeça, então durmo.
Assinale a opção que indica a(s) afirmativa(s) que é(são) equivalente(s) à inicial.
a) I, apenas.
b) II, apenas.
c) III, apenas.
d) I e II, apenas.
e) I, II e III.


            Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            62
            www.estrategiaconcursos.com.br                                                               122

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Comentários:

Sejam as proposições simples:

                                                    d: "Durmo."

                                            t: "Tenho dor de cabeça."

A proposição original pode ser descrita por ~d→t:

                           ~d→t: "Se [não durmo], então [tenho dor de cabeça]."

Veja que estamos partindo de uma condicional e a questão pergunta quais das três condicionais são
equivalentes. Para avaliá-las, devemos utilizar somente a equivalência contrapositiva, pois ela é a única que
transforma uma condicional em outra condicional.

A equivalência contrapositiva é dada por p→q ≡ ~q→~p. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                ~d→t ≡ ~t→~(~d)

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                  ~d→t ≡ ~t→d

A proposição equivalente pode ser descrita por:

                           ~t→d: "Se [não tenho dor de cabeça], então [durmo]."

Somente a afirmação III apresenta uma condicional equivalente. As demais condicionais não são
equivalentes, pois não decorrem da equivalência contrapositiva. O gabarito, portanto, é letra C.

Gabarito: Letra C.


  (FGV/DPE RS/2023) Sobre as condições de trabalho em uma empresa, o diretor afirmou:
                          “Se o ambiente é calmo, então o resultado não demora.”
Considere as três novas afirmações:
I. Se o resultado não demora, então o ambiente é calmo.
II. Se o ambiente não é calmo, então o resultado demora.
III. Se o resultado demora, então o ambiente não é calmo.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                63
        www.estrategiaconcursos.com.br                                                                   122

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 01

Dessas três novas afirmações, são equivalentes à afirmação do diretor:
a) somente I;
b) somente II;
c) somente III;
d) somente II e III;
e) I, II e III.

Comentários:

Sejam as proposições simples:
                                                c: "O ambiente é calmo."
                                                d: "O resultado demora."

A proposição original pode ser descrita por c→~d:

                        c→~d: "Se [o ambiente é calmo], então [o resultado não demora]."

Veja que estamos partindo de uma condicional e a questão pergunta quais das três condicionais são
equivalentes. Para avaliá-las, devemos utilizar somente a equivalência contrapositiva, pois ela é a única que
transforma uma condicional em outra condicional.

A equivalência contrapositiva é dada por p→q ≡ ~q→~p. Para aplicar essa equivalência, devemos realizar o
seguinte procedimento:

      •    Invertem-se as posições do antecedente e do consequente; e
      •    Negam-se ambos os termos da condicional.

Para o caso em questão, temos:
                                                   c→~d ≡ ~(~d)→~c
A dupla negação de uma proposição corresponde à proposição original. Ficamos com:
                                                      c→~d ≡ d→~c

A proposição equivalente pode ser descrita por:

                        d→~c: "Se [o resultado demora], então [o ambiente não é calmo]."

Somente a afirmação III apresenta uma condicional equivalente. As demais condicionais não são
equivalentes, pois não decorrem da equivalência contrapositiva. O gabarito, portanto, é letra C.

Gabarito: Letra C.

            Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            64
            www.estrategiaconcursos.com.br                                                               122

                                        


---

  Equipe Exatas Estratégia Concursos
  Aula 01

 (FGV/CM Taubaté/2022) Considere a sentença: “Se Antônio é baiano, então Carlos não é amapaense”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se Carlos não é amapaense, então Antônio é baiano.
b) Se Antônio não é baiano, então Carlos é amapaense.
c) Se Carlos é amapaense, então Antônio é baiano.
d) Antônio não é baiano ou Carlos não é amapaense.
e) Antônio é baiano e Carlos é amapaense.

Comentários:

Sejam as proposições simples:

                                               a: "Antônio é baiano."

                                             c: "Carlos é amapaense."

A proposição original pode ser descrita por a→~c:

                       a→~c: "Se [Antônio é baiano], então [Carlos não é amapaense]."

As alternativas apresentam tanto condicionais (se...então; →) quanto uma disjunção inclusiva (ou; ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                a→~c ≡ ~(~c)→~a

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                   a→~c ≡ c→~a

A proposição equivalente pode ser escrita por:

                       c→~a: "Se [Carlos é amapaense], então [Antônio não é baiano]."

Veja que essa equivalência não está nas alternativas apresentadas.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           65
         www.estrategiaconcursos.com.br                                                               122

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 01

Vamos agora utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o seguinte
procedimento:

     •   Nega-se o primeiro termo;
     •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
     •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                    a→~c ≡ ~a∨~c

A proposição equivalente pode ser descrita por:

                        ~a∨~c: “[Antônio não é baiano] ou [Carlos não é amapaense].”

Note que essa proposição equivalente está presente na alternativa D.

Gabarito: Letra D.

  (FGV/TRT MA/2022) Considere verdadeira a afirmação:
                                        “Todos os corredores são magros”.
Observe, a seguir, três conclusões da afirmação dada:
1. Se João é magro então é corredor.
2. Se João não é corredor, então não é magro.
3. Se João não é magro então não é corredor.
Denotando por V uma conclusão verdadeira e por F uma conclusão falsa, para as três conclusões dadas,
temos, respectivamente,
a) V, V, V.
b) F, V, V.
c) F, F, V.
d) V, V, F.
e) V, F, F.

Comentários:

Considere as seguintes proposições simples:

                                                 c: "João é corredor."
                                                  m: "João é magro."

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         66
          www.estrategiaconcursos.com.br                                                             122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Originalmente, temos a proposição “todos os corredores são magros”. Trata-se de uma proposição
categórica, pois estabelece uma relação entre a categoria dos "corredores" e a categoria dos "magros". Mais
detalhes sobre as proposições categóricas são estudados nas aulas de Diagramas Lógicos e de Lógica de
Primeira Ordem, caso esse assunto faça parte do seu edital.

Note que, para o caso específico de João, a proposição categórica “todos os corredores são magros”
apresenta o sentido da seguinte condicional:

                              c→m: "Se [João é corredor], então [João é magro]."

Dentre as três conclusões sugeridas, devemos procurar por aquelas que são equivalentes à condicional c→m.

Como as três conclusões sugeridas são condicionais, sabemos que devemos procurar uma condicional
equivalente a c→m. Portanto, resta-nos aplicar a equivalência contrapositiva: p→q ≡ ~q→~p.

Para aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                  c→m ≡ ~m→~c

A proposição equivalente pode ser escrita por:

                       ~m→~c: "Se [João não é magro], então [João não é corredor]."

Note, portanto, que somente a conclusão 3 está correta. As outras conclusões não correspondem a uma
equivalência da condicional c→m:

   •    Conclusão 1: "Se [João é magro] então [é corredor]." − corresponde a m→c, que não é equivalente
        a c→m;
   •    Conclusão 2: "Se [João não é corredor], então [não é magro]." − corresponde a ~c→~m, que não é
        equivalente a c→m.

Logo, denotando por V uma conclusão verdadeira e por F uma conclusão falsa, para as três conclusões dadas,
temos, respectivamente, F, F, V.

Gabarito: Letra C.


  (FGV/CBM AM/2022) Um antigo ditado diz: “Se há fumaça então há fogo”.
Uma sentença logicamente equivalente é
a) se há fogo então há fumaça.
b) se não há fumaça então não há fogo.


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             67
         www.estrategiaconcursos.com.br                                                                122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

c) se não há fogo, então não há fumaça.
d) se não há fumaça pode haver fogo.
e) se há fogo então pode haver fumaça.

Comentários:

Sejam as proposições simples:

                                                  u: "Há fumaça."
                                                   o: "Há fogo."

A sentença original pode ser descrita por u→o:

                                    u→o: “Se [há fumaça], então [há fogo].”

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                                  u→o ≡ ~o→~u

A proposição equivalente pode ser descrita por:

                             ~o→~u: "Se [não há fogo], então [não há fumaça]."

Gabarito: Letra C.

 (FGV/SEMSA Manaus/2022) Considere a afirmação:
                           “Se o acusado estava no hospital então não é culpado”.
É correto concluir que
a) se o acusado não estava no hospital então é culpado.
b) se o acusado é culpado então não estava no hospital.
c) se o acusado não é culpado então não estava no hospital.
d) o acusado estava no hospital e é culpado.
e) o acusado não é culpado e não estava no hospital.

Comentários:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        68
        www.estrategiaconcursos.com.br                                                            122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        69
        www.estrategiaconcursos.com.br                                                            122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                                    c: "Tem cão."

                                                g: "Caça com gato."

A proposição original pode ser descrita por ~c→g:

                               ~c→g: "Se [não tem cão], então [caça com gato]."

As alternativas apresentam tanto condicionais (se...então; →) quanto disjunções inclusivas (ou; ∨) como
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

Vamos agora utilizar a segunda equivalência. Para aplicar essa equivalência, devemos realizar o seguinte
procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                                  ~c→g ≡ ~(~c)∨g

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                                     ~c→g ≡ c∨g

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          70
         www.estrategiaconcursos.com.br                                                              122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A proposição equivalente pode ser descrita por:

                                       c∨g: “[Tem cão] ou [caça com gato].”

Note que essa proposição equivalente está presente na alternativa C.

Gabarito: Letra C.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático    71
        www.estrategiaconcursos.com.br                                        122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negações lógicas

   (FGV/MPE SP/2023) Considere a proposição:
                              “Se estamos em fevereiro, então eu pago o IPVA”.
Assinale a opção que apresenta uma negação dessa proposição.
a) Estamos em fevereiro e eu não pago o IPVA.
b) Não estamos em fevereiro e eu não pago o IPVA.
c) Se estamos em fevereiro, então eu não pago o IPVA.
d) Se não estamos em fevereiro, então eu não pago o IPVA.
e) Se não estamos em fevereiro, então eu pago o IPVA.

Comentários:

Sejam as proposições simples:

                                           e: "Estamos em fevereiro."

                                               p: "Eu pago o IPVA."

A sentença original pode ser descrita por e→p:

                         e→p: “Se [estamos em fevereiro], então [eu pago o IPVA]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                 ~(e→p) ≡ e∧~p

Logo, a negação pode ser descrita por:

                           e∧~p: "[Estamos em fevereiro] e [eu não pago o IPVA]."

Gabarito: Letra A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                     72
        www.estrategiaconcursos.com.br                                                         122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

   (FGV/PGM Niterói/2023) Considere a sentença: “Se o chapéu é branco, então o sapato é bicolor”.
A negação lógica da sentença dada é:
a) se o chapéu é branco, então o sapato não é bicolor;
b) se o chapéu não é branco, então o sapato é bicolor;
c) se o sapato não é bicolor, então o chapéu não é branco;
d) o chapéu não é branco ou o sapato é bicolor;
e) o chapéu é branco e o sapato não é bicolor.

Comentários:

Sejam as proposições simples:

                                             c: "O chapéu é branco."

                                              s: "O sapato é bicolor."

A sentença original pode ser descrita por c→s:

                          c→s: “Se [o chapéu é branco], então [o sapato é bicolor]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                  ~(c→s) ≡ c∧~s

Logo, a negação pode ser descrita por:

                           c∧~s: "[O chapéu é branco] e [o sapato não é bicolor]."

Gabarito: Letra E.

   (FGV/Pref Niterói/2023) Houve um problema na construção de uma casa e o arquiteto que elaborou o
projeto disse:
                                 “O projeto está certo e eu fiscalizei a obra.”
Considerando que essa frase é falsa, é correto concluir que

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          73
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

a) “O projeto não está certo e o arquiteto fiscalizou a obra.”
b) “O projeto está certo e o arquiteto não fiscalizou a obra.”
c) “O projeto não está certo e o arquiteto não fiscalizou a obra.”
d) “O projeto está certo ou o arquiteto fiscalizou a obra.”
e) “O projeto não está certo ou o arquiteto não fiscalizou a obra.”

Comentários:

Sejam as proposições simples:

                                            p: "O projeto está certo."

                                        f: "O arquiteto fiscalizou a obra."

Note que a frase original foi dita pelo arquiteto. Nesse caso, podemos escrever a frase como uma conjunção
da forma p∧f:

                        p∧f: "[O projeto está certo] e [o arquiteto fiscalizou a obra]."

Como o enunciado diz que a frase original é falsa, é correto concluir a negação dessa proposição. Devemos,
portanto, negar a conjunção p∧f.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                                 ~ (p∧f) ≡ ~p∨~f

Logo, a negação requerida pode ser descrita por:

                ~p∨~f: “[O projeto não está certo] ou [o arquiteto não fiscalizou a obra].”

Gabarito: Letra E.

    (FGV/Câmara dos Deputados/2023) Na canção “Se você jurar”, de Ismael Silva, encontramos a
afirmação:
                          Se você jurar que me tem amor, eu posso me regenerar.
A negação dessa proposição é

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             74
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

a) você jura que me tem amor e eu não me regenero.
b) você não jura que me tem amor e eu não me regenero.
c) você não jura que me tem amor e eu me regenero.
d) você jura que me tem amor e eu posso me regenerar.
e) você não jura que me tem amor e eu não posso me regenerar.

Comentários:

Sejam as proposições simples:

                                        j: "Você jura que me tem amor."

                                           r: "Eu posso me regenerar."

Observação: Em "Você jura que me tem amor.", apesar de termos dois verbos (jurar e ter), temos uma
proposição simples, pois há apenas uma oração principal:
                                         "Você jura que me tem amor."
                                                 "Você jura ISSO."


O mesmo ocorre com a proposição "Eu posso me regenerar.", que apresenta apenas uma oração principal:
                                            "Eu posso me regenerar."
                                                 "Eu posso ISSO."

Note que a afirmação original pode ser descrita por j→r:

                     j→r: "Se [você jurar que me tem amor], [eu posso me regenerar]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                   ~(j→r) ≡ j∧~r

Ficamos com a seguinte negação:

                   j∧~r: "[Você jura que me tem amor] e [eu não posso me regenerar]."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        75
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A alternativa que mais se aproxima da negação obtida corresponde à letra A, em que a proposição ~r, dada
por "eu não posso me regenerar", é reescrita como "eu não me regenero".

                       j∧~r: "[Você jura que me tem amor] e [eu não me regenero]."

Gabarito: Letra A.

   (FGV/Câmara dos Deputados/2023) A canção Folhetim, de Chico Buarque de Holanda, inicia com os
versos
                                              Se acaso me quiseres,
                                               sou dessas mulheres
                                                que só dizem sim.
A negação desses versos é
a) Me queres ou não sou dessas mulheres que só dizem sim
b) Não me queres e sou dessas mulheres que só dizem sim.
c) Me queres e não sou dessas mulheres que só dizem sim.
d) Não me queres e não sou dessas mulheres que só dizem sim.
e) Se acaso me quiseres, não sou dessas mulheres que só dizem não.

Comentários:

Sejam as proposições simples:

                                                 q: "Me queres."

                                  s: "Sou dessas mulheres que só dizem sim."

Observação 1: Em "Sou dessas mulheres que só dizem sim.", apesar de termos dois verbos (ser e dizer),
temos uma proposição simples, pois há apenas uma oração principal:
                                   "Sou dessas mulheres que só dizem sim."
                                             "Sou dessas mulheres."

Note que os versos podem ser descritos por q→s:

               q→s: "Se [acaso me quiseres], então [sou dessas mulheres que só dizem sim]."

Observação 2: perceba que podemos remover o termo "acaso" sem mudança de sentido, pois esse termo
somente reforça a ideia de hipótese presente na condicional.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           76
        www.estrategiaconcursos.com.br                                                               122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                  ~(q→s) ≡ q∧~s

Ficamos com a seguinte negação:

                     q∧~s: "[Me queres] e [não sou dessas mulheres que só dizem sim]."

O gabarito, portanto, é letra C.

Observação 3: note que a negação de "sou dessas mulheres que só dizem sim" corresponde a "não sou
dessas mulheres que só dizem sim". Isso porque, em uma proposição simples, devemos negar o verbo da
oração principal.
Seria ERRADO dizer que a negação dessa proposição simples seria "sou dessas mulheres que só dizem não"
ou "não sou dessas mulheres que só dizem não".

Gabarito: Letra C.

   (FGV/MPE GO/2022) Considere a sentença:
            “Se Pedro é senador e Simone não é deputada federal, então Carlota é vereadora”.
Sabe-se que a sentença dada é FALSA.
É então correto concluir que
a) Pedro é senador, Simone não é deputada federal, Carlota não é vereadora.
b) Pedro não é senador, Simone é deputada federal, Carlota é vereadora.
c) Pedro é senador, Simone não é deputada federal, Carlota é vereadora.
d) Pedro não é senador, Simone é deputada federal, Carlota não é vereadora.
e) Pedro não é senador, Simone não é deputada federal, Carlota não é vereadora.

Comentários:

Considere as seguintes proposições simples:

                                              p: "Pedro é senador."

                                         s: "Simone é deputada federal."

                                             c: "Carlota é vereadora."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         77
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Note que a proposição original pode ser descrita por (p∧~s)→c:

   (p∧~s)→c: “Se [(Pedro é senador) e (Simone não é deputada federal)], então [Carlota é vereadora]”.

Como o enunciado diz que a sentença original é falsa, é correto concluir a negação dessa proposição.
Devemos, portanto, negar a condicional (p∧~s)→c.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •     Mantém-se o primeiro termo;
    •     Troca-se a condicional (→) pela conjunção (∧); e
    •     Nega-se o segundo termo.

Para o caso em questão, temos:

                                               (p∧~s)→c ≡ (p∧~s)∧~c

Logo, podemos concluir:

        (p∧~s)∧~c: "[Pedro é senador] e [Simone não é deputada federal] e [Carlota não é vereadora]."

A alternativa A representa essa conclusão obtida omitindo-se o conectivo "e":

                   Pedro é senador, Simone não é deputada federal, Carlota não é vereadora.

Gabarito: Letra A.

   (FGV/DEPEN MG/2022) Considere a afirmação: “Pedro comprou a moto e não vendeu o carro”.
Sabendo que essa afirmação é falsa, então
a) Pedro não comprou a moto e não vendeu o carro.
b) Pedro comprou a moto e vendeu o carro.
c) Pedro não comprou a moto e vendeu o carro.
d) Pedro comprou a moto ou não vendeu o carro.
e) Pedro não comprou a moto ou vendeu o carro.

Comentários:

Sejam as proposições simples:
                                             c: "Pedro comprou a moto."
                                             v: "Pedro vendeu o carro."

A proposição original pode ser escrita pela conjunção c∧~v:


          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            78
          www.estrategiaconcursos.com.br                                                                122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                          c∧~v: "[Pedro comprou a moto] e [não vendeu o carro]."

Note que, sendo c∧~v uma proposição composta falsa, a negação dessa proposição composta, ~(c∧~v), é
verdadeira. Como queremos uma conclusão correta que pode ser extraída da afirmação original, devemos
negá-la.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                              ~ (c∧~v) ≡ ~c∨~(~v)

A dupla negação da proposição simples v corresponde à proposição original. Ficamos com:

                                                 ~ (c∧~v) ≡ ~c∨v

Logo, a negação requerida pode ser descrita por:

                         ~c∨v: “[Pedro não comprou a moto] ou [vendeu o carro].”

Gabarito: Letra E.


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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       79
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       80
        www.estrategiaconcursos.com.br                                                           122

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 01

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

   (FGV/Senado Federal/2022) Se não é verdade que Daniel fala mandarim ou japonês, avalie as
afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.
( ) Pode ser que Daniel fale mandarim e não fale japonês.
( ) Daniel não fala nem mandarim nem japonês.
( ) Pode ser que Daniel fale mandarim e japonês.
As afirmativas são, respectivamente,
a) V, V e V.
b) F, V e F.
c) V, V e F.
d) F, F e V.
e) F, F e F.

Comentários:

Sejam as proposições simples:

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            81
          www.estrategiaconcursos.com.br                                                               122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                                           m: "Daniel fala mandarim."
                                             j: "Daniel fala japonês."

Sabemos que, em regra, a expressão "não é verdade que" costuma negar toda a proposição composta. Logo,
a sentença original do enunciado pode ser expressa por ~(m∨j):

              ~(m∨j): "Não é verdade que [(Daniel fala mandarim) ou (Daniel fala japonês)]."

Note que proposição ~(m∨j) corresponde à negação de (m∨j).

Para realizar a negação de uma disjunção inclusiva, usa-se a equivalência ~(p∨q) ≡ ~p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da disjunção inclusiva;
    •   Troca-se a disjunção inclusiva (∨) pela conjunção (∧).

Em outras palavras, negam-se as duas proposições e troca-se o "ou" pelo "e". Para o caso em questão,
temos:

                                                 ~(m∨j) ≡ ~m∧~j
Logo, a sentença original, ~(m∨j), pode ser descrita por ~m∧~j:
                     ~m∧~j: "[Daniel não fala mandarim] e [Daniel não fala japonês]."

Com base nessa sentença obtida a partir da sentença original, vamos avaliar as três alternativas.

(F) Pode ser que Daniel fale mandarim e não fale japonês. FALSO.

Daniel não fala mandarim e também não fala japonês. Não há uma possibilidade de Daniel falar ou não
mandarim.

(V) Daniel não fala nem mandarim nem japonês. VERDADEIRO.

Veja que essa afirmação apresenta o seguinte sentido:

                            "Daniel não fala mandarim e Daniel não fala japonês"

É justamente esse sentido que obtivemos em ~m∧~j:

                     ~m∧~j: "[Daniel não fala mandarim] e [Daniel não fala japonês]."

Uma possível confusão que a afirmação poderia gerar seria se o concurseiro considerasse o "nem...nem"
como se fosse uma disjunção exclusiva, isto é, como se fosse algo como "ou não.... ou não".

Esse entendimento está errado, pois, considerando a língua portuguesa, a expressão "nem...nem" não
apresenta sentido de alternância nem de exclusão.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              82
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

(F) Pode ser que Daniel fale mandarim e japonês. FALSO.

Daniel não fala mandarim e também não fala japonês. Não há uma possibilidade de Daniel falar ou não
mandarim e japonês.

Consequentemente, conclui-se que as afirmativas são, respectivamente, F, V e F.

Gabarito: Letra B.


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


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                      83
        www.estrategiaconcursos.com.br                                                          122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

   (FGV/CM Taubaté/2022) Um menino conversa com seu irmão sobre os pequenos bichos da floresta e
diz: “Se tem 8 patas, não é um inseto”.
A negação lógica dessa afirmação é
a) Tem 8 patas e é um inseto.
b) Não tem 8 patas e é um inseto.
c) Não tem 8 patas e não é um inseto.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                     84
        www.estrategiaconcursos.com.br                                                         122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

d) Se não é um inseto, então não tem 8 patas.
e) Se não é um inseto, então tem 8 patas.

Comentários:

Sejam as proposições simples:

                                                 t: "Tem 8 patas."

                                                 i: "É um inseto."

A sentença original pode ser descrita pela condicional t→~i, na forma em que se omite o "então":

                                t→~i: “Se [tem oito patas], [não é um inseto]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                ~(t→~i) ≡ t∧~(~i)

A dupla negação corresponde à proposição original. Ficamos com:

                                                   ~(t→~i) ≡ t∧i

Logo, a negação pode ser descrita por:

                                       t∧i: "[Tem 8 patas] e [é um inseto]."

Gabarito: Letra A.

   (FGV/Senado Federal/2022) A negativa da frase “Se fizer sol amanhã, eu vou à praia.” é
a) Se fizer sol amanhã, eu vou ficar em casa.
b) Amanhã fará sol, mas eu não vou à praia.
c) Se fizer sol amanhã, eu não vou à praia.
d) Se não fizer sol amanhã, eu não vou à praia.
e) Amanhã não fará sol e eu vou à praia.

Comentários:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         85
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Sejam as proposições simples:

                                               s: "Fará sol amanhã."

                                                p: "Eu vou à praia."

A sentença original pode ser descrita pela condicional s→p, na forma em que se omite o "então":

                                s→p: “Se [fizer sol amanhã], [eu vou à praia]”.

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                  ~(s→p) ≡ s∧~p

Logo, a negação pode ser descrita por:

                              s∧~p: "[Fará sol amanhã] e [eu não vou à praia]."

Sabemos que, para fins de lógica de proposições, a conjunção "e" pode ser substituída pela palavra "mas".
Além disso, sem prejuízo no sentido da proposição, podemos dizer que "fará sol amanhã" corresponde a
"amanhã fará sol". Logo, a negação requerida pode ser descrita por:

                            s∧~p: "[Amanhã fará sol], mas [eu não vou à praia]."

O gabarito, portanto, é letra B.

Infelizmente a banca FGV manteve em seu gabarito definitivo a alternativa C como resposta à questão.

Gabarito do professor: Letra B.
Gabarito da banca: Letra C.


   (FGV/Senado Federal/2022) A negativa do dito “Quem tudo quer tudo perde” é
a) Quem tudo quer nem tudo perde.
b) Quem tudo quer nada perde.
c) Quem algo quer nem tudo perde.
d) Quem algo quer algo perde.
e) Quem algo quer nada perde.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             86
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Comentários:

Sejam as proposições simples:

                                          r: "Um indivíduo tudo quer."

                                         e: "Um indivíduo tudo perde."

Note que a sentença original apresenta um sentido de condicional. Logo, a sentença original pode ser
descrita por r→e:

                  r→e: "Se [um indivíduo tudo quer], então [esse indivíduo tudo perde]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                  ~(r→e) ≡ r∧~e

Logo, a negação pode ser descrita por:

                    r∧~e: "[Um indivíduo tudo quer] e [esse indivíduo não perde tudo]."

Note que nenhuma alternativa apresenta a negação da afirmação, pois todas exprimem condicionais. Por
esse motivo, a questão deveria ter sido anulada.

Infelizmente a banca FGV manteve em seu gabarito definitivo a alternativa A como resposta à questão.
Assim, a banca considerou que a proposição presente na alternativa A, que pode ser representada por r→~e,
seria uma possível negação de r→e.

Trata-se de um entendimento completamente equivocado. Conforme pode ser observado na tabela-verdade
a seguir, a negação de r→e, dada por ~(r→e), não corresponde a r→~e.

Gabarito do professor: ANULADA.

Gabarito da banca: Letra A.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            87
        www.estrategiaconcursos.com.br                                                                122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

   (FGV/Senado Federal/2022) Considere a afirmativa a seguir.
(1) “Se tudo der certo, eu viajo amanhã.”
Avalie se as três frases a seguir são negações dessa afirmativa:
I. Se tudo der certo, eu não viajo amanhã.
II. Se tudo der errado, eu viajo amanhã.
III. Se algo der errado, eu não viajo amanhã.
Assim, é correto concluir que:
a) I, II e III são negações da afirmativa (1).
b) apenas I é uma negação da afirmativa (1).
c) apenas II é uma negação da afirmativa (1).
d) apenas III é uma negação da afirmativa (1).
e) apenas II não é uma negação da afirmativa (1).

Comentários:

Sejam as proposições simples:

                                                 c: "Tudo dará certo."

                                                 a: "Eu viajo amanhã."

A afirmativa (1) pode ser descrita pela condicional c→a, na forma em que se omite o "então":

                                  c→a: “Se [tudo der certo], [eu viajo amanhã].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                                   ~(c→a) ≡ c∧~a

Logo, a negação pode ser descrita por:

                               c∧~a: "[Tudo dará certo] e [eu não viajo amanhã]."

Note que nenhuma das três frases sugeridas apresenta a negação da afirmação.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                    88
         www.estrategiaconcursos.com.br                                                        122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Mesmo sem realizar a negação da condicional, poderíamos perceber que a questão não apresenta
alternativa correta, pois a negação de uma condicional sempre resultará em uma conjunção "e". Por esse
motivo, a questão deveria ter sido anulada.

Infelizmente a banca FGV manteve em seu gabarito definitivo a alternativa B como resposta à questão.
Assim, a banca considerou que a frase I, que pode ser representada por c→~a, seria uma possível negação
de c→a.

Trata-se de um entendimento completamente equivocado. Conforme pode ser observado na tabela-verdade
a seguir, a negação de c→a, dada por ~(c→a), não corresponde a c→~a.

Gabarito do professor: ANULADA.
Gabarito da banca: Letra B.


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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          89
        www.estrategiaconcursos.com.br                                                              122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        90
        www.estrategiaconcursos.com.br                                                            122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                     91
        www.estrategiaconcursos.com.br                                                         122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Questões com mais de uma equivalência

   (FGV/ALESC/2024) Considere a sentença:
“Se x ≤ 6 e x > 4, então −x ≤ 2”. Uma sentença logicamente equivalente à sentença dada é
a) Se x > 6 e x ≤ 4, então −x > 2.
b) Se −x ≤ 2, então x ≤ 6 e x > 4.
c) Se x > 6 ou x ≤ 4, então − x > 2.
d) x > 6 ou x ≤ 4 ou −x ≤ 2.
e) x > 6 e x ≤ 4 ou −x ≤ 2.

Comentários:

Pessoal, nessa questão temos sentenças abertas, não proposições. Isso porque as sentenças que vamos
definir a seguir dependem de uma variável. Apesar disso, podemos utilizar nossos conhecimentos de
equivalências lógicas para resolver o problema.

Cumpre destacar também que a resolução da questão requer um conhecimento básico sobre inequações.

Considere as seguintes sentenças:

                                                      p: “x ≤ 6”

                                                      q: “x > 4”

                                                      r: “−x ≤ 2”

Observe que as negações dessas sentenças são:

                                                      ~p: “x > 6”

                                                      ~q: “x ≤ 4”

                                                     ~r: “−x > 2”

Observação: note que, se “𝒙 é menor ou igual (≤) a um número”, a negação dessa sentença corresponde a
“𝒙 maior do que (>) esse número”.
Por exemplo, considerando x ≤ 6, os números 6, 5, 4 satisfazem essa inequação e os números 7, 8 e 9 não
satisfazem. Na negação é o contrário: em x > 6, os números 7, 8 e 9 satisfazem essa inequação e os números
6, 5 e 4 não satisfazem.
Além disso, se “𝒙 é maior do que (>) um número”, a negação dessa sentença corresponde a “𝒙 é menor ou
igual (≤) a esse número”.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            92
         www.estrategiaconcursos.com.br                                                                122

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Por exemplo, se x > 4, os números 5, 6 e 7 satisfazem essa inequação e os números 4, 3 e 2 não satisfazem.
Na negação é o contrário: em x ≤ 4, os números 4, 3 e 2 satisfazem essa inequação e os números 5, 6 e 7 não
satisfazem.
Voltando ao problema, note que a sentença original pode ser descrita por p∧q→r:
                                 p∧q→r: “Se [(x ≤ 6) e (x > 4)], então [−x ≤ 2].”

As alternativas apresentam tanto condicionais (se...então; →) quanto uma disjunção inclusiva (ou; ∨) como
equivalentes. Devemos, portanto, testar as duas equivalências fundamentais que envolvem a condicional:

   •    p→q ≡ ~q→~p (contrapositiva)
   •    p→q ≡ ~p ∨ q (transformação da condicional em disjunção inclusiva)

Para aplicar a primeira equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                              p∧q→r ≡ ~r→~(p∧q)

Observe que ~(p∧q) é a negação da conjunção p∧q. Desenvolvendo por De Morgan, obtemos ~p∨~q.
Ficamos com:

                                             p∧q→r ≡ ~r→(~p∨~q)

Logo, uma possível sentença equivalente corresponde a:

                            ~r→(~p∨~q): “Se [−x > 2], então [(x > 6) ou (x ≤ 4)].”

Note que não temos essa equivalência nas alternativas.

Nesse momento, vamos utilizar a segunda equivalência possível. Para aplicar essa equivalência, devemos
realizar o seguinte procedimento:

    •   Nega-se o primeiro termo;
    •   Troca-se a condicional (→) pela disjunção inclusiva (∨); e
    •   Mantém-se o segundo termo.

Para o caso em questão, temos:

                                               p∧q→r ≡ ≡ ~(p∧q)∨r

Observe que ~(p∧q) é a negação da conjunção p∧q. Desenvolvendo por De Morgan, obtemos ~p∨~q.
Ficamos com:

                                              p∧q→r ≡ ≡ (~p∨~q)∨r


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              93
        www.estrategiaconcursos.com.br                                                                  122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A proposição equivalente pode ser descrita por:

                                    (~p∨~q)∨r: “[(x > 6) ou (x ≤ 4)] ou [−x ≤ 2].”

Gabarito: Letra D.

   (FGV/ALE TO/2024) A negação da proposição:
                                            Se 𝑦 ≠ 0, então 𝑥 > 2 e 𝑥 ≤ 5
é dada por
a) Se 𝑦 = 0, então 𝑥 > 2 e 𝑥 ≤ 5
b) Se 𝑦 = 0, então 𝑥 < 2 ou 𝑥 ≥ 5
c) 𝑦 = 0 e 𝑥 ≤ 2 ou 𝑥 > 5
d) 𝑦 ≠ 0 e 𝑥 ≤ 2 ou 𝑥 > 5
e) 𝑦 ≠ 0 e 𝑥 ≤ 2 e 𝑥 > 5

Comentários:

Antes de resolvermos o problema, cumpre destacar que a sentença apresentada não é uma proposição.
Trata-se de uma sentença aberta, pois dependemos das variáveis 𝑥 e 𝑦 para determinar os possíveis valores
lógicos dela.

Considere as seguintes sentenças:

                                                      p: "𝑦 ≠ 0”

                                                      q: "𝑥 > 2"

                                                      r: "𝑥 ≤ 5"

Observe que a negação dessas sentenças corresponde a:

                                                     ~p: "𝑦 = 0”

                                                     ~q: "𝑥 ≤ 2"

                                                     ~r: "𝑥 > 5"

Observação: note que a negação de q:"𝑥 > 2" é ~q:"𝑥 ≤ 2". Para o caso em que 𝑥 é igual a 2, q é falso, porque
2 não é "maior do que dois". Nesse caso, ~q deve ser verdadeiro. Consequentemente, o caso em que 𝑥 é
exatamente igual a 2 deve ser incluído na sentença ~q.
Além disso, note que a negação de r: "𝑥 ≤ 5" é ~r: "𝑥 > 5". Para o caso em que 𝑥 é igual a 5, r é verdadeiro,
porque 5 é "menor ou igual a 5". Nesse caso, ~r deve ser falso. Consequentemente, o caso em que 𝑥 é
exatamente igual a 5 não deve ser incluído na sentença ~r.


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               94
         www.estrategiaconcursos.com.br                                                                  122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Note que a sentença original corresponde a p→(q∧r):

                                p→(q∧r): "Se [𝑦 ≠ 0], então [(𝑥 > 2) e (𝑥 ≤ 5)]."

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Mantém-se o primeiro termo;
    •   Troca-se a condicional (→) pela conjunção (∧); e
    •   Nega-se o segundo termo.

Para o caso em questão, temos:

                                             ~[p→(q∧r)] ≡ p∧~(q∧r)
                                                       ==219a34==

Note que a parcela ~(q∧r) pode ser desenvolvida por De Morgan, correspondendo a ~q∨~r. Ficamos com:

                                            ~[p→(q∧r)] ≡ p∧(~q∨~r)

Ficamos com a seguinte negação:

                                   p∧(~q∨~r): "[𝑦 ≠ 0] e [(𝑥 ≤ 2) ou (𝑥 > 5)]."

Gabarito: Letra D.

   (FGV/Câmara dos Deputados/2023) Considere a afirmação:
        Se Fred não for ao supermercado hoje, nós iremos a um restaurante ou passaremos fome.
A negativa dessa afirmação é
a) Se Fred for ao supermercado hoje, nós não iremos a um restaurante.
b) Se Fred for ao supermercado hoje, nós não passaremos fome.
c) Se Fred for ao supermercado hoje, nós não iremos a um restaurante e não passaremos fome.
d) Se Fred não for ao supermercado hoje, nós não iremos a um restaurante e não passaremos fome.
e) Se Fred não for ao supermercado hoje, nós não iremos a um restaurante ou não passaremos fome.

Comentários:

Sejam as proposições simples:

                                       s: "Fred vai ao supermercado hoje."

                                       r: "Nós iremos a um restaurante."

                                              p: "Passaremos fome."

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         95
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

A afirmação pode ser descrita pela condicional ~s→(r∨p), na forma em que se omite o "então":

   ~s→(r∨p): “Se [Fred não for ao supermercado hoje], [(nós iremos a um restaurante) ou (passaremos
                                              fome)].”

Para realizar a negação de uma condicional, usa-se a equivalência ~(p→q) ≡ p∧~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •     Mantém-se o primeiro termo;
    •     Troca-se a condicional (→) pela conjunção (∧); e
    •     Nega-se o segundo termo.

Para o caso em questão, temos:

                                             ~[~s→(r∨p)] ≡ ~s∧~(r∨p)

Note que a parcela ~(r∨p) pode ser desenvolvida por De Morgan, correspondendo a ~r∧~p. Ficamos com:

                                            ~[~s→(r∨p)] ≡ ~s∧(~r∧~p)

Logo, a negação pode ser descrita por:

        ~s∧(~r∧~p): "[Fred não vai ao supermercado hoje] e [nós não iremos a um restaurante] e [não
                                           passaremos fome]."

Veja que nenhuma alternativa apresenta a negação da condicional original.

Mesmo sem realizar a negação da condicional, poderíamos perceber que a questão não apresenta
alternativa correta, pois a negação de uma condicional sempre resultará em uma conjunção "e". Por esse
motivo, a questão deveria ter sido anulada.

Infelizmente a banca FGV apresentou como gabarito a alternativa C como resposta à questão. Assim, a banca
considerou que ~s→(~r∧~p) seria uma possível negação de ~s→(r∨p).

Trata-se de um entendimento completamente equivocado que a banca utilizou não só na prova da Câmara
dos Deputados de 2023, mas também na prova do Senado Federal de 2022. Segundo o entendimento
equivocado da banca, a negação (ou a "negativa") de uma condicional p→q pode ser representada por
p→~q. Vejamos os exemplos da prova da prova do Senado Federal:

   •     A negativa da frase “Se fizer sol amanhã, eu vou à praia." é "Se fizer sol amanhã, eu não vou à praia."
   •     A negativa do dito “Quem tudo quer tudo perde” é "Quem tudo quer nem tudo perde."
   •     A negação de “Se tudo der certo, eu viajo amanhã.” é "Se tudo der certo, eu não viajo amanhã."

Gabarito do professor: ANULADA.

Gabarito da banca: Letra C.

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 96
          www.estrategiaconcursos.com.br                                                                    122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

   (FGV/MPE SP/2023) “Se a TV não está ligada, então eu estou dormindo ou estou lendo”.
Assinale a opção que descreve uma sentença logicamente equivalente à afirmação acima.
a) A TV não está ligada e eu estou acordado e não estou lendo.
b) Se eu não estou dormindo e não estou lendo, então a TV está ligada.
c) Se eu estou acordado ou não estou lendo, então a TV está ligada.
d) Eu estou acordado e lendo se, e somente se, a TV está desligada.
e) A TV está ligada e eu estou acordado ou não estou lendo.

Comentários:

Sejam as proposições simples:
                                               t: "A TV está ligada."
                                             d: "Eu estou dormindo."
                                                l: "Eu estou lendo."

A proposição original pode ser descrita pela condicional entre ~t e (d∨l), isto é, pode ser descrita por
~t→(d∨l):

            ~t→(d∨l): “Se [a TV não está ligada], então [(eu estou dormindo) ou (estou lendo)].”

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                           ~t→(d∨l) ≡ ~(d∨l)→~(~t)

A dupla negação de uma proposição corresponde à proposição original. Ficamos com:

                                              ~t→(d∨l) ≡ ~(d∨l)→t

Note que a parcela ~(d∨l) também pode ser desenvolvida por De Morgan, e corresponde a ~d∧~l. Portanto,
temos a seguinte equivalência:

                                             ~t→(d∨l) ≡ (~d∧~l)→t

Logo, a proposição equivalente pode ser descrita por:

        (~d∧~l)→t: "Se [(eu não estou dormindo) e (não estou lendo)], então [a TV está ligada]."

Gabarito: Letra B.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           97
        www.estrategiaconcursos.com.br                                                               122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

   (FGV/GCM SJC/2023) Considere a seguinte proposição:
                               Se estou de férias e é verão, então fico satisfeito.
Essa proposição é equivalente a
a) Se não estou de férias e não é verão, então não fico satisfeito.
b) Se não estou de férias ou não é verão, então não fico satisfeito.
c) Se fico satisfeito, então estou de férias e é verão.
d) Se fico satisfeito, então não estou de férias e não é verão.
e) Se não fico satisfeito, então não estou de férias ou não é verão.

Comentários:

Sejam as proposições simples:

                                                 f: "Estou de férias."

                                                    v: "É verão."

                                                 s: "Fico satisfeito."

A proposição original pode ser descrita pela condicional entre (f∧v) e s, isto é, pode ser descrita por (f∧v)→s:

                      (f∧v)→s: “Se [(estou de férias) e (é verão)], então [fico satisfeito]."

Uma equivalência fundamental envolvendo o conectivo condicional é a contrapositiva: p→q ≡ ~q→~p. Para
aplicar essa equivalência, devemos realizar o seguinte procedimento:

    •   Invertem-se as posições do antecedente e do consequente; e
    •   Negam-se ambos os termos da condicional.

Para o caso em questão, temos:

                                               (f∧v)→s ≡ ~s→~(f∧v)

Note que a parcela ~(f∧v) também pode ser desenvolvida por De Morgan, e corresponde a ~f∨~v. Portanto,
temos a seguinte equivalência:

                                              (f∧v)→s ≡ ~s→ (~f∨~v)

Logo, a proposição equivalente pode ser descrita por:

            ~s→ (~f∨~v): "Se [não fico satisfeito], então [(não estou de férias) ou (não é verão)]."

Gabarito: Letra E.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                  98
         www.estrategiaconcursos.com.br                                                                     122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

Veja que essa negação é apresentada na alternativa E, que a representa a expressão "e não" por "nem":

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 99
        www.estrategiaconcursos.com.br                                                                     122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

                                             a∧~r → ~c ≡ c → ~a∨r

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         100
        www.estrategiaconcursos.com.br                                                             122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Logo, a proposição equivalente pode ser descrita por:

    c → ~a∨r: "Se [Carlota é carioca], então [(Amazonino não é amazonense) ou (Reno é alagoano)]."

Gabarito: Letra D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           101
        www.estrategiaconcursos.com.br                                                               122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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

Sejam as proposições simples:

                                             l: "Joana gosta de leite."

                                             c: "Joana gosta de café."

A proposição original pode ser escrita pela conjunção l∧~c:

                              l∧~c:"[Joana gosta de leite] e [não gosta de café]."

Ao informar que "a sentença dada é falsa", podemos deduzir corretamente que a negação da sentença é
verdadeira. A questão pede, portanto, para negarmos a conjunção original.

Em regra, devemos utilizar De Morgan para negar uma conjunção. Logo, vamos testar essa possibilidade
primeiro.

Para realizar a negação de uma conjunção, usa-se a equivalência ~(p∧q) ≡ ~p∨~q. Para aplicar essa
equivalência, devemos seguir o seguinte procedimento:

    •   Negam-se ambas as parcelas da conjunção;
    •   Troca-se a conjunção (∧) pela disjunção inclusiva (∨).

Em outras palavras, negam-se as duas proposições e troca-se o "e" pelo "ou". Para o caso em questão,
temos:

                                               ~ (l∧~c) ≡ ~l∨~(~c)

A dupla negação de uma proposição corresponde à proposição original:

                                                 ~ (l∧~c) ≡ ~l∨c

Logo, a negação requerida pode ser descrita por:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       102
        www.estrategiaconcursos.com.br                                                           122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

                          ~l∨c: “[Joana não gosta de leite] ou [Joana gosta de café].”

Note que essa possível negação não está presente nas alternativas. Observe, porém, que as alternativas B
e D apresentam condicionais como a negação da conjunção original. Logo, vamos utilizar as seguintes
negações da conjunção:

                                                 ~(p∧q) ≡ p→~q

                                                         ou

                                                 ~(p∧q) ≡ q→~p

Aplicando essas equivalências para o caso em questão, ficamos com:

                                                ~(l∧~c) ≡ l→~(~c)

                                                         ou

                                                 ~(l∧~c) ≡ ~c→~l

A dupla negação de c corresponde à proposição original. Ficamos com:

                                                  ~(l∧~c) ≡ l→c

                                                         ou

                                                 ~(l∧~c) ≡ ~c→~l

Logo, podemos escrever a negação da conjunção l∧~c das seguintes formas:

                  ~(l∧~c) ≡ l→c: "Se [Joana gosta de leite], então [ela (Joana) gosta de café]."

                                                         ou

            ~(l∧~c) ≡ ~c→~l: "Se [Joana não gosta de café], então [ela (Joana) não gosta de leite]."

Veja que a segunda possibilidade de se negar a conjunção em questão está presente na alternativa D, que é
o gabarito da questão.

Gabarito: Letra D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             103
        www.estrategiaconcursos.com.br                                                                 122

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 01

                             QUESTÕES COMENTADAS – FGV

Álgebra de Proposições

                                                       ̅, 𝒒
  (FGV/PPBA/2024) Sejam 𝒑, 𝒒 e 𝒓 proposições simples e 𝒑  ̅ e 𝒓̅, suas respectivas negações.
                       ̅ ∨ 𝒒) ∧ (𝒑
A proposição composta (𝒑         ̅ ∨ 𝒓) é equivalente a:
a) 𝑝̅ ∨ (𝑞 ∧ 𝑟)
b) 𝑝̅ ∧ (𝑞 ∨ 𝑟)
c) 𝑝̅ ∨ (𝑞̅ ∧ 𝑟̅ )
d) 𝑝̅ ∧ (𝑞̅ ∧ 𝑟̅ )
e) 𝑝 ∧ 𝑞 ∧ 𝑟

Comentários:

A questão apresenta uma notação incomum referente à negação de proposições simples. Segundo o
enunciado, devemos considerar que 𝒑 ̅ é a negação da proposição simples p, ou seja, 𝒑
                                                                                    ̅ corresponde a ~p.
Nesse caso, temos originalmente a seguinte proposição composta:

                                                     (~p∨q)∧(~p∨r)

Por meio da propriedade distributiva, podemos colocar "~p∨" em evidência. Nesse caso, temos a seguinte
equivalência:

                                              (~p∨q)∧(~p∨r) ≡ ~p∨(q∧r)

Portanto, a proposição composta original é equivalente a ~p∨(q∧r). Utilizando a notação do enunciado,
temos 𝑝̅ ∨ (𝑞 ∧ 𝑟).

Gabarito: Letra A.

   (FGV/PMSJC/2024) Em um laboratório, há 3 salas (1, 2 e 3). Em cada uma delas, há um sensor de
temperatura que é acionado quando a temperatura no interior da sala ultrapassa os 35 °C. De acordo com
o protocolo de segurança, se forem acionados simultaneamente o sensor da sala 1 e o sensor de qualquer
uma das outras duas salas, o alarme do laboratório é soado e a energia local é desligada.
Considere as seguintes proposições simples:
    •    𝒔𝟏 : o sensor da sala 1 é acionado;
    •    𝒔𝟐 : o sensor da sala 2 é acionado;
    •    𝒔𝟑 : o sensor da sala 3 é acionado;

           Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       104
           www.estrategiaconcursos.com.br                                                           122

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 01

    •   𝒂: o alarme do laboratório é soado;
    •   𝒆: a energia elétrica local é ligada.
Considerando ~ como a negação de uma proposição qualquer, o protocolo de segurança descrito acima
pode ser representado, com exatidão, em linguagem lógica simbólica por
a) 𝑠1 ∧ 𝑠2 ∧ 𝑠3 → 𝑎 ∧ 𝑒
b) 𝑠1 ∧ 𝑠2 ∧ 𝑠3 → 𝑎 ∧ ~𝑒
c) (𝑠1 ∧ 𝑠2 ) ∨ (𝑠1 ∧ 𝑠3 ) → 𝑎 ∧ 𝑒
d) (𝑠1 ∨ 𝑠2 ) ∧ (𝑠1 ∨ 𝑠3 ) → 𝑎 ∧ ~𝑒
e) (𝑠1 ∧ 𝑠2 ) ∨ (𝑠1 ∧ 𝑠3 ) → 𝑎 ∧ ~𝑒

Comentários:
                                                        ==219a34==

Temos as seguintes proposições simples:

                                       𝒔𝟏 : "O sensor da sala 𝑆1 é acionado."

                                       𝒔𝟐 : "O sensor da sala 𝑆2 é acionado."

                                       𝒔𝟑 : "O sensor da sala 𝑆3 é acionado."

                                       𝒂: "O alarme do laboratório é soado."

                                       𝒆: "A energia elétrica local é ligada."

Devemos transformar para a linguagem proposicional a seguinte condicional:

 "Se [(forem acionados simultaneamente o sensor da sala 1) e (o sensor de qualquer uma das outras duas
            salas)], então [(o alarme do laboratório é soado) e (a energia local é desligada)]."

Sem perder o sentido original, podemos reescrever essa condicional da seguinte forma:

"Se [(o sensor da sala 1 é acionado) e ({o sensor da sala 2 é acionado} ou {o sensor da sala 3 é acionado})],
                então [(o alarme do laboratório é soado) e (a energia local não é ligada)]."

Portanto, o protocolo de segurança pode ser representado em linguagem simbólica por:

                                             𝒔𝟏 ∧ (𝒔𝟐 ∨ 𝒔𝟑 ) → 𝒂 ∧ ~𝒆

Aplicando a propriedade distributiva em 𝒔𝟏 ∧(𝒔𝟐 ∨ 𝒔𝟑 ), obtemos (𝒔𝟏 ∧𝒔𝟐 )∨(𝒔𝟏 ∧𝒔𝟑 ). Portanto, o protocolo
de segurança pode ser representado por:

                                          (𝒔𝟏 ∧ 𝒔𝟐 ) ∨ (𝒔𝟏 ∧ 𝒔𝟑 ) → 𝒂 ∧ ~𝒆

Gabarito: Letra E.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               105
         www.estrategiaconcursos.com.br                                                                   122

                                      


---

 Equipe Exatas Estratégia Concursos
 Aula 01

                               LISTA DE QUESTÕES - FGV

Equivalências lógicas

       As questões estão divididas em quatro tópicos, conforme a teoria da aula:

       • Equivalências fundamentais
       • Negações lógicas
       • Questões com mais de uma equivalência
       • Outras equivalências e negações

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático          106
       www.estrategiaconcursos.com.br                                              122

                                   


---

   Equipe Exatas Estratégia Concursos
   Aula 01

Equivalências fundamentais

  (FGV/ALESC/2024) Considere a afirmação:
                                  “Se tenho namorada então não fico sozinho”
Uma afirmação logicamente equivalente à afirmação dada é:
a) Se não fico sozinho então tenho namorada.
b) Se fico sozinho então não tenho namorada.
c) Se não tenho namorada então fico sozinho.
d) Tenho namorada e não fico sozinho.
e) Tenho namorada ou não fico sozinho.


  (FGV/SEFAZ-MG/2023) É dada a afirmativa:
                                   “Se o cliente pagou então não é devedor.”
Para cada uma das três afirmativas a seguir, assinale “V” se a afirmativa for logicamente equivalente à
afirmativa dada e “F” se a afirmativa não for logicamente equivalente à afirmativa dada.
I. Se o cliente não pagou então é devedor.
II. Se o cliente não é devedor então pagou.
III. Se o cliente é devedor então não pagou.
As afirmativas I, II e III são, respectivamente,
a) V, V e F.
b) F, V e F.
c) F, F e V.
d) F, V e V.
e) V, V e V.


  (FGV/AGENERSA/2023) Considere a afirmativa a seguir.
                                  “Se não durmo, então tenho dor de cabeça.”
Analise, a seguir, três novas afirmativas:
I. Se durmo, então não tenho dor de cabeça.
II. Se tenho dor de cabeça, então não durmo.
III. Se não tenho dor de cabeça, então durmo.
Assinale a opção que indica a(s) afirmativa(s) que é(são) equivalente(s) à inicial.
a) I, apenas.
b) II, apenas.


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         107
         www.estrategiaconcursos.com.br                                                             122

                                     


---

   Equipe Exatas Estratégia Concursos
   Aula 01

c) III, apenas.
d) I e II, apenas.
e) I, II e III.


   (FGV/DPE RS/2023) Sobre as condições de trabalho em uma empresa, o diretor afirmou:
                              “Se o ambiente é calmo, então o resultado não demora.”
Considere as três novas afirmações:
I. Se o resultado não demora, então o ambiente é calmo.
II. Se o ambiente não é calmo, então o resultado demora.
III. Se o resultado demora, então o ambiente não é calmo.
Dessas três novas afirmações, são equivalentes à afirmação do diretor:
a) somente I;
b) somente II;
c) somente III;
d) somente II e III;
e) I, II e III.


  (FGV/CM Taubaté/2022) Considere a sentença: “Se Antônio é baiano, então Carlos não é amapaense”.
Uma sentença logicamente equivalente à sentença dada é:
a) Se Carlos não é amapaense, então Antônio é baiano.
b) Se Antônio não é baiano, então Carlos é amapaense.
c) Se Carlos é amapaense, então Antônio é baiano.
d) Antônio não é baiano ou Carlos não é amapaense.
e) Antônio é baiano e Carlos é amapaense.


  (FGV/TRT MA/2022) Considere verdadeira a afirmação:
                                          “Todos os corredores são magros”.
Observe, a seguir, três conclusões da afirmação dada:
1. Se João é magro então é corredor.
2. Se João não é corredor, então não é magro.
3. Se João não é magro então não é corredor.
Denotando por V uma conclusão verdadeira e por F uma conclusão falsa, para as três conclusões dadas,
temos, respectivamente,
a) V, V, V.


            Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                   108
            www.estrategiaconcursos.com.br                                                       122

                                        


---

   Equipe Exatas Estratégia Concursos
   Aula 01

b) F, V, V.
c) F, F, V.
d) V, V, F.
e) V, F, F.


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

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático          109
          www.estrategiaconcursos.com.br                                              122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Negações lógicas

   (FGV/MPE SP/2023) Considere a proposição:
                              “Se estamos em fevereiro, então eu pago o IPVA”.
Assinale a opção que apresenta uma negação dessa proposição.
a) Estamos em fevereiro e eu não pago o IPVA.
b) Não estamos em fevereiro e eu não pago o IPVA.
c) Se estamos em fevereiro, então eu não pago o IPVA.
d) Se não estamos em fevereiro, então eu não pago o IPVA.
e) Se não estamos em fevereiro, então eu pago o IPVA.


   (FGV/PGM Niterói/2023) Considere a sentença: “Se o chapéu é branco, então o sapato é bicolor”.
A negação lógica da sentença dada é:
a) se o chapéu é branco, então o sapato não é bicolor;
b) se o chapéu não é branco, então o sapato é bicolor;
c) se o sapato não é bicolor, então o chapéu não é branco;
d) o chapéu não é branco ou o sapato é bicolor;
e) o chapéu é branco e o sapato não é bicolor.


   (FGV/Pref Niterói/2023) Houve um problema na construção de uma casa e o arquiteto que elaborou o
projeto disse:
                                 “O projeto está certo e eu fiscalizei a obra.”
Considerando que essa frase é falsa, é correto concluir que
a) “O projeto não está certo e o arquiteto fiscalizou a obra.”
b) “O projeto está certo e o arquiteto não fiscalizou a obra.”
c) “O projeto não está certo e o arquiteto não fiscalizou a obra.”
d) “O projeto está certo ou o arquiteto fiscalizou a obra.”
e) “O projeto não está certo ou o arquiteto não fiscalizou a obra.”


    (FGV/Câmara dos Deputados/2023) Na canção “Se você jurar”, de Ismael Silva, encontramos a
afirmação:
                          Se você jurar que me tem amor, eu posso me regenerar.
A negação dessa proposição é
a) você jura que me tem amor e eu não me regenero.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          110
        www.estrategiaconcursos.com.br                                                              122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

b) você não jura que me tem amor e eu não me regenero.
c) você não jura que me tem amor e eu me regenero.
d) você jura que me tem amor e eu posso me regenerar.
e) você não jura que me tem amor e eu não posso me regenerar.


   (FGV/Câmara dos Deputados/2023) A canção Folhetim, de Chico Buarque de Holanda, inicia com os
versos
                                              Se acaso me quiseres,
                                               sou dessas mulheres
                                                que só dizem sim.
A negação desses versos é
a) Me queres ou não sou dessas mulheres que só dizem sim
b) Não me queres e sou dessas mulheres que só dizem sim.
c) Me queres e não sou dessas mulheres que só dizem sim.
d) Não me queres e não sou dessas mulheres que só dizem sim.
e) Se acaso me quiseres, não sou dessas mulheres que só dizem não.


   (FGV/MPE GO/2022) Considere a sentença:
            “Se Pedro é senador e Simone não é deputada federal, então Carlota é vereadora”.
Sabe-se que a sentença dada é FALSA.
É então correto concluir que
a) Pedro é senador, Simone não é deputada federal, Carlota não é vereadora.
b) Pedro não é senador, Simone é deputada federal, Carlota é vereadora.
c) Pedro é senador, Simone não é deputada federal, Carlota é vereadora.
d) Pedro não é senador, Simone é deputada federal, Carlota não é vereadora.
e) Pedro não é senador, Simone não é deputada federal, Carlota não é vereadora.


   (FGV/DEPEN MG/2022) Considere a afirmação: “Pedro comprou a moto e não vendeu o carro”.
Sabendo que essa afirmação é falsa, então
a) Pedro não comprou a moto e não vendeu o carro.
b) Pedro comprou a moto e vendeu o carro.
c) Pedro não comprou a moto e vendeu o carro.
d) Pedro comprou a moto ou não vendeu o carro.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                     111
        www.estrategiaconcursos.com.br                                                         122

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 01

e) Pedro não comprou a moto ou vendeu o carro.


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


    (FGV/Senado Federal/2022) Se não é verdade que Daniel fala mandarim ou japonês, avalie as
afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.
( ) Pode ser que Daniel fale mandarim e não fale japonês.
( ) Daniel não fala nem mandarim nem japonês.
( ) Pode ser que Daniel fale mandarim e japonês.
As afirmativas são, respectivamente,
a) V, V e V.
b) F, V e F.
c) V, V e F.
d) F, F e V.
e) F, F e F.

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático              112
          www.estrategiaconcursos.com.br                                                  122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

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


   (FGV/CM Taubaté/2022) Um menino conversa com seu irmão sobre os pequenos bichos da floresta e
diz: “Se tem 8 patas, não é um inseto”.
A negação lógica dessa afirmação é
a) Tem 8 patas e é um inseto.
b) Não tem 8 patas e é um inseto.
c) Não tem 8 patas e não é um inseto.
d) Se não é um inseto, então não tem 8 patas.
e) Se não é um inseto, então tem 8 patas.


   (FGV/Senado Federal/2022) A negativa da frase “Se fizer sol amanhã, eu vou à praia.” é
a) Se fizer sol amanhã, eu vou ficar em casa.
b) Amanhã fará sol, mas eu não vou à praia.
c) Se fizer sol amanhã, eu não vou à praia.
d) Se não fizer sol amanhã, eu não vou à praia.
e) Amanhã não fará sol e eu vou à praia.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                   113
        www.estrategiaconcursos.com.br                                                       122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

   (FGV/Senado Federal/2022) A negativa do dito “Quem tudo quer tudo perde” é
a) Quem tudo quer nem tudo perde.
b) Quem tudo quer nada perde.
c) Quem algo quer nem tudo perde.
d) Quem algo quer algo perde.
e) Quem algo quer nada perde.


   (FGV/Senado Federal/2022) Considere a afirmativa a seguir.
(1) “Se tudo der certo, eu viajo amanhã.”
Avalie se as três frases a seguir são negações dessa afirmativa:
I. Se tudo der certo, eu não viajo amanhã.
II. Se tudo der errado, eu viajo amanhã.
III. Se algo der errado, eu não viajo amanhã.
Assim, é correto concluir que:
a) I, II e III são negações da afirmativa (1).
b) apenas I é uma negação da afirmativa (1).
c) apenas II é uma negação da afirmativa (1).
d) apenas III é uma negação da afirmativa (1).
e) apenas II não é uma negação da afirmativa (1).


   (FGV/PC RN/2021) Mário, que mora sozinho, falava ao telefone com sua mãe a respeito do dia anterior:
Lavei a louça e não dormi tarde.
A negação lógica dessa sentença é:
a) Não lavei a louça e não dormi tarde;
b) Lavei a louça e dormi tarde;
c) Não lavei a louça e dormi tarde;
d) Não lavei a louça ou não dormi tarde;
e) Não lavei a louça ou dormi tarde.


   (FGV/ISS Paulínia/2021) Considere a afirmação:
                        “Uma proposta, se apresentada com clareza, não é recusada”.
A negação lógica dessa afirmação é:
a) Uma proposta é apresentada com clareza e é recusada.


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         114
         www.estrategiaconcursos.com.br                                                             122

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 01

b) Uma proposta não é apresentada com clareza e é recusada.
c) Se uma proposta não é apresentada com clareza, não é recusada.
d) Se uma proposta não é recusada, foi apresentada com clareza.
e) Se uma proposta não é recusada, não foi apresentada com clareza.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   115
        www.estrategiaconcursos.com.br                                       122

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Questões com mais de uma equivalência

   (FGV/ALESC/2024) Considere a sentença:
“Se x ≤ 6 e x > 4, então −x ≤ 2”. Uma sentença logicamente equivalente à sentença dada é
a) Se x > 6 e x ≤ 4, então −x > 2.
b) Se −x ≤ 2, então x ≤ 6 e x > 4.
c) Se x > 6 ou x ≤ 4, então − x > 2.
d) x > 6 ou x ≤ 4 ou −x ≤ 2.
e) x > 6 e x ≤ 4 ou −x ≤ 2.


   (FGV/ALE TO/2024) A negação da proposição:           ==219a34==

                                             Se 𝑦 ≠ 0, então 𝑥 > 2 e 𝑥 ≤ 5
é dada por
a) Se 𝑦 = 0, então 𝑥 > 2 e 𝑥 ≤ 5
b) Se 𝑦 = 0, então 𝑥 < 2 ou 𝑥 ≥ 5
c) 𝑦 = 0 e 𝑥 ≤ 2 ou 𝑥 > 5
d) 𝑦 ≠ 0 e 𝑥 ≤ 2 ou 𝑥 > 5
e) 𝑦 ≠ 0 e 𝑥 ≤ 2 e 𝑥 > 5


   (FGV/Câmara dos Deputados/2023) Considere a afirmação:
        Se Fred não for ao supermercado hoje, nós iremos a um restaurante ou passaremos fome.
A negativa dessa afirmação é
a) Se Fred for ao supermercado hoje, nós não iremos a um restaurante.
b) Se Fred for ao supermercado hoje, nós não passaremos fome.
c) Se Fred for ao supermercado hoje, nós não iremos a um restaurante e não passaremos fome.
d) Se Fred não for ao supermercado hoje, nós não iremos a um restaurante e não passaremos fome.
e) Se Fred não for ao supermercado hoje, nós não iremos a um restaurante ou não passaremos fome.


    (FGV/MPE SP/2023) “Se a TV não está ligada, então eu estou dormindo ou estou lendo”.
Assinale a opção que descreve uma sentença logicamente equivalente à afirmação acima.
a) A TV não está ligada e eu estou acordado e não estou lendo.
b) Se eu não estou dormindo e não estou lendo, então a TV está ligada.
c) Se eu estou acordado ou não estou lendo, então a TV está ligada.
d) Eu estou acordado e lendo se, e somente se, a TV está desligada.


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        116
         www.estrategiaconcursos.com.br                                                            122

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 01

e) A TV está ligada e eu estou acordado ou não estou lendo.


   (FGV/GCM SJC/2023) Considere a seguinte proposição:
                               Se estou de férias e é verão, então fico satisfeito.
Essa proposição é equivalente a
a) Se não estou de férias e não é verão, então não fico satisfeito.
b) Se não estou de férias ou não é verão, então não fico satisfeito.
c) Se fico satisfeito, então estou de férias e é verão.
d) Se fico satisfeito, então não estou de férias e não é verão.
e) Se não fico satisfeito, então não estou de férias ou não é verão.


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

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                   117
         www.estrategiaconcursos.com.br                                                       122

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 01

Outras equivalências e negações

   (FGV/BANESTES/2018) Considere a sentença “Joana gosta de leite e não gosta de café”.
Sabe-se que a sentença dada é falsa.
Deduz-se que:
a) Joana não gosta de leite e não gosta de café;
b) Se Joana gosta de leite, então ela não gosta de café;
c) Joana gosta de leite ou gosta de café;
d) Se Joana não gosta de café, então ela não gosta de leite;
e) Joana não gosta de leite ou não gosta de café.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                118
        www.estrategiaconcursos.com.br                                                    122

                                    


---

 Equipe Exatas Estratégia Concursos
 Aula 01

                                        GABARITO - FGV

Equivalências lógicas

 LETRA B                                    LETRA D
 LETRA C                                    LETRA D
 LETRA C
 LETRA C
 LETRA D
 LETRA C
 LETRA C
 LETRA B
 LETRA C
  LETRA A
  LETRA E
  LETRA E
  LETRA A
  LETRA C
  LETRA A
  LETRA E
  LETRA B
  LETRA D
  LETRA B
  LETRA A
  LETRA A
  LETRA A
  LETRA B / LETRA C
  ANULADA / LETRA A
  ANULADA / LETRA B
  LETRA E
  LETRA A
  LETRA D
  LETRA D
  ANULADA / LETRA C
  LETRA B
  LETRA E
  LETRA E

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   119
       www.estrategiaconcursos.com.br                                       122

                                   


---

   Equipe Exatas Estratégia Concursos
   Aula 01

                                  LISTA DE QUESTÕES – FGV

Álgebra de Proposições

                                                        ̅, 𝒒
   (FGV/PPBA/2024) Sejam 𝒑, 𝒒 e 𝒓 proposições simples e 𝒑  ̅ e 𝒓̅, suas respectivas negações.
                       ̅ ∨ 𝒒) ∧ (𝒑
A proposição composta (𝒑         ̅ ∨ 𝒓) é equivalente a:
a) 𝑝̅ ∨ (𝑞 ∧ 𝑟)
b) 𝑝̅ ∧ (𝑞 ∨ 𝑟)
c) 𝑝̅ ∨ (𝑞̅ ∧ 𝑟̅ )
d) 𝑝̅ ∧ (𝑞̅ ∧ 𝑟̅ )
e) 𝑝 ∧ 𝑞 ∧ 𝑟


  (FGV/PMSJC/2024) Em um laboratório, há 3 salas (1, 2 e 3). Em cada uma delas, há um sensor de
temperatura que é acionado quando a temperatura no interior da sala ultrapassa os 35 °C. De acordo com
o protocolo de segurança, se forem acionados simultaneamente o sensor da sala 1 e o sensor de qualquer
uma das outras duas salas, o alarme do laboratório é soado e a energia local é desligada.
Considere as seguintes proposições simples:
    •    𝒔𝟏 : o sensor da sala 1 é acionado;
    •    𝒔𝟐 : o sensor da sala 2 é acionado;
    •    𝒔𝟑 : o sensor da sala 3 é acionado;
    •    𝒂: o alarme do laboratório é soado;
    •    𝒆: a energia elétrica local é ligada.
Considerando ~ como a negação de uma proposição qualquer, o protocolo de segurança descrito acima
pode ser representado, com exatidão, em linguagem lógica simbólica por
a) 𝑠1 ∧ 𝑠2 ∧ 𝑠3 → 𝑎 ∧ 𝑒
b) 𝑠1 ∧ 𝑠2 ∧ 𝑠3 → 𝑎 ∧ ~𝑒
c) (𝑠1 ∧ 𝑠2 ) ∨ (𝑠1 ∧ 𝑠3 ) → 𝑎 ∧ 𝑒
d) (𝑠1 ∨ 𝑠2 ) ∧ (𝑠1 ∨ 𝑠3 ) → 𝑎 ∧ ~𝑒
e) (𝑠1 ∧ 𝑠2 ) ∨ (𝑠1 ∧ 𝑠3 ) → 𝑎 ∧ ~𝑒

           Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                      120
           www.estrategiaconcursos.com.br                                                          122

                                       


---

 Equipe Exatas Estratégia Concursos
 Aula 01

                                        GABARITO – FGV

Álgebra de Proposições

 LETRA A
 LETRA E

                                                      ==219a34==

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   121
       www.estrategiaconcursos.com.br                                       122

                                   


---

---
