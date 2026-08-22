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
arquivo_origem: Aula 12_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '12'
titulo_aula: Raciocínio Lógico Matemático
---

# Raciocínio Lógico Matemático

Aula 11
                          Receita Federal (Analista Tributário)
                                     Raciocínio Lógico Matemático

                                                            Autor:
                                        Equipe Exatas Estratégia
                                                      Concursos


                                                 09 de Maio de 2025

---

      Equipe Exatas Estratégia Concursos
      Aula 11

                                                                                     Índice
1) Introdução à Teoria dos Conjuntos


2) União, Intersecção, Complementar e Diferença


3) Princípio da Inclusão-Exclusão


4) Questões Comentadas - Introdução à Teoria dos Conjuntos - FGV


5) Questões Comentadas - União, Intersecção, Complementar e Diferença - FGV


6) Questões Comentadas - Princípio da Inclusão-Exclusão - FGV


7) Lista de Questões - Introdução à Teoria dos Conjuntos - FGV


8) Lista de Questões - União, Intersecção, Complementar e Diferença - FGV


9) Lista de Questões - Princípio da Inclusão-Exclusão - FGV

                Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                                                                                        2
                www.estrategiaconcursos.com.br                                                                                                                                           56

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                 TEORIA DOS CONJUNTOS

Introdução à Teoria dos Conjuntos
Definição de Conjunto
Iniciaremos o nosso estudo da matemática pela Teoria dos Conjuntos. A escolha desse conteúdo é
cuidadosamente pensada para que você possa formar uma base sólida, que lhe servirá de alicerce na
construção de toda matemática necessária a sua prova.

A palavra "conjunto" significa exatamente o que você deve estar pensando: uma espécie de grupo, lista ou
uma coleção de determinado objeto. Observe alguns exemplos de como podemos representar conjuntos
na matemática:

   • 𝐴 = {𝑎, 𝑏, 𝑐, 𝑑, 𝑒}
   • 𝐵 = {0, 2, 4, 6, 8}

O conjunto 𝐴 é formado pelas 5 primeiras letras no nosso alfabeto. O conjunto 𝐵 é formado por 5 números
pares. O conjunto 𝐶 é formado por 10 números ímpares. Você pode estar se perguntando: só podemos fazer
conjuntos de números e letras?

A resposta é não! Podemos criar conjuntos de basicamente qualquer coisa, desde um conjunto
representando os funcionários de determinada empresa a conjuntos formados por outros conjuntos! Por
exemplo, o conjunto 𝐸 lista alguns professores de exatas do Estratégia Concursos.

   •   𝐸 = {𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜, 𝐸𝑑𝑢𝑎𝑟𝑑𝑜, 𝑉𝑖𝑛𝑖𝑐𝑖𝑢𝑠, 𝐿𝑢𝑎𝑛𝑎, 𝐷𝑗𝑒𝑓𝑓𝑒𝑟𝑠𝑜𝑛}

Primeiramente, note que um conjunto muitas vezes aparecerá com seus elementos listados dentro de um
par de chaves. Por isso, sempre que for escrever algum conjunto, não esqueça de colocar seus elementos
aqui dentro: { }. É também usual as pessoas nomearem seus conjuntos com letras maiúsculas, mas isso não
é mandatório, nem necessário, em algumas situações.

Relação de Pertinência
Quando um elemento faz parte de determinado conjunto, dizemos que o elemento PERTENCE ao conjunto.
Essa relação de pertinência entre um elemento e um conjunto é representada pelo símbolo ∈.

   • 𝑏 ∈ 𝐴 : Lemos: 𝑏 pertence a 𝐴;
   • 4 ∈ 𝐵 : Lemos: 4 pertence a 𝐵;

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            3
        www.estrategiaconcursos.com.br                                                               56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Atente-se à simbologia! Podemos dizer que um elemento não pertence a um determinado conjunto. Para
isso, utilizamos o símbolo "não pertence": ∉.

   • 𝑧 ∉ 𝐴 : 𝑧 não pertence a 𝐴;
   • 100 ∉ 𝐵 : 100 não pertence a 𝐵;

Relação de Inclusão
Existe mais um tipo de relação que devemos estudar: a relação de inclusão. Nesse tipo de relação, é
estabelecido um relacionamento entre dois conjuntos e não mais entre um elemento e outro conjunto. Para
isso, usamos uma simbologia específica que você deverá guardar: ⊂, ⊄, ⊃ 𝒆 ⊅. Vamos ver com calma o que
cada um deles diz! Considere: 𝑨 = {𝒂, 𝒃, 𝒄, 𝒅, 𝒆}, 𝑩 = {𝟎, 𝟐, 𝟒, 𝟔, 𝟖} e 𝑪 = {𝟏, 𝟑, 𝟓, 𝟕, 𝟗, 𝟏𝟏, 𝟏𝟑, 𝟏𝟓, 𝟏𝟕, 𝟏𝟗}.

   • {𝑎, 𝑒} ⊂ 𝐴 : Lemos: {𝑎, 𝑒} está contido em 𝐴;
   • {0, 2, 8} ⊂ 𝐵 : Lemos: {0, 2, 8} está contido em 𝐵;

Perceba que agora não estamos estabelecemos uma relação entre um elemento e um conjunto. A relação
de inclusão envolve 2 conjuntos! Diante disso, podemos introduzir um novo termo: o subconjunto. O
subconjunto nada mais é do que parte de um conjunto maior. Quando dizemos, por exemplo, que {𝒂, 𝒆}
está contido em 𝑨, estamos dizendo, com outras palavras, que {𝑎, 𝑒} é um subconjunto de 𝑨.


                                                 𝐴
                                                               𝑏
                                                      𝑎            𝑐
                                                          𝑒
                                                                𝑑

O diagrama acima ajuda a compreender a relação de inclusão. Observe que o conjunto {𝒂, 𝒆} está
inteiramente contido em 𝑨. Nessas condições, dizemos que {𝑎, 𝑒} está contido em 𝐴 ou ainda que {𝑎, 𝑒} é
um subconjunto de 𝐴. Algumas vezes, você poderá ver o termo "parte" sendo usado como sinônimo de
subconjunto. Agora, imagine a seguinte situação:


                                                 𝐵
                                                           8
                                                      0            6
                                                          2     4

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                    4
        www.estrategiaconcursos.com.br                                                                        56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Nesse caso, temos que {𝑎, 𝑒} ⊄ 𝐵 : Lemos: {𝑎, 𝑒} não está contido em 𝐵 ou {𝑎, 𝑒} não é um subconjunto de
𝐵. Vamos ver mais alguns exemplos de quando um conjunto não está contido em outro:

   •   {𝑎, 𝑒, 𝑓} ⊄ 𝐴
   •   {1, 3, 5} ⊄ 𝐵

Perceba que basta um elemento do conjunto não pertencer ao conjunto maior que não poderemos
estabelecer uma relação de inclusão entre os dois conjuntos e, portanto, dizemos que um não está contido
no outro. Pessoal, se {𝒂, 𝒆} está contido em 𝑨, então também podemos dizer que 𝑨 contém {𝒂, 𝒆}. Quando
queremos expressar essa ideia de que um conjunto maior contém determinado subconjunto, utilizamos o
símbolo ⊃.

   • 𝐴 ⊃ {𝑎, 𝑒} : 𝐴 contém {𝑎, 𝑒}
   • 𝐵 ⊃ {0, 2, 8} : 𝐵 contém {0, 2, 8}

Analogamente, podemos estender o raciocínio para quando queremos dizer que determinado conjunto não
contém outro. Nessas situações, utilizamos ⊅.

   • 𝐴 ⊅ {𝑎, 𝑒, 𝑓} : 𝐴 não contém {𝑎, 𝑒, 𝑓}
   • 𝐶 ⊅ {0, 1} : 𝐶 não contém {0, 1}


                                                                                    𝐸
                                               𝐵                                 𝐷𝑗𝑒𝑓𝑓𝑒𝑟𝑠𝑜𝑛
            𝐴
            𝑏                              0        2                            𝐸𝑑𝑢𝑎𝑟𝑑𝑜      𝑆𝑖𝑐𝑟𝑎𝑛𝑜
                    𝑎       𝑓                                  1
                                                                     5           𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜
            𝑐                             4         6                                         𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜
                    𝑒                                           3                𝐿𝑢𝑎𝑛𝑎
                                                8
                𝑑                                                                𝑉𝑖𝑛í𝑐𝑖𝑢𝑠

            𝐴 ⊅ {𝑎, 𝑒, 𝑓}                      𝐵 ⊅ {1, 3, 5}                 𝐸 ⊅ {𝑆𝑖𝑐𝑟𝑎𝑛𝑜, 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜}

(PREF. DE PINHAIS/2019) Considerando os conjuntos 𝐴 = {1, 2, 4, 5, 6, 7, 8}, 𝐵 = {1, 3, 4, 5, 6, 9, 10} e 𝐶 =
{1, 2, 3, 4, 5, 6, 7, 8}, assinale a alternativa CORRETA:
A) O conjunto A está contido no conjunto B.
B) O conjunto B está contido no conjunto A.
C) O conjunto C está contido no conjunto B.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 5
        www.estrategiaconcursos.com.br                                                                    56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

D) O conjunto C está contido no conjunto A.
E) O conjunto A está contido no conjunto C.

Comentários:

                                            𝑪 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕, 𝟖}

Observe que os elementos destacados em vermelho são exatamente todos os elementos do conjunto A.
Perceba, portanto, que A está contido em C.

Gabarito: Letra E.

Igualdade entre Conjuntos

Pessoal, dois conjuntos são considerados iguais (ou idênticos) se eles possuem exatamente os mesmos
elementos! Todo elemento que estiver em um deve necessariamente estar no outro. Por exemplo, considere
os conjuntos 𝐴 = {1, 2, 3} e 𝐵 = {3, 2,1}. Nessa situação, podemos escrever que 𝐴 = 𝐵.

Professor, mas a ordem está diferente!

Não importa! O importante é que todos elementos de A são os mesmos elementos de B.

(MPE-GO/2022) Sejam x e y números tais que os conjuntos {0, 8, 2} e {𝑥, 𝑦, 2} são iguais, podemos afirmar
que:
A) 𝑥 = 0 e 𝑦 = 8
B) 𝑥 + 𝑦 = 8
C) 𝑥 < 𝑦
D) 𝑥 + 2𝑦 = 8

Comentários:
Para que os dois conjuntos sejam iguais, seus elementos devem ser iguais. Note que o "2" já aparece nos
dois conjuntos, então não vamos nos preocupar com ele.

                                                      {0, 8, 2}

                                                      {𝑥, 𝑦, 2}

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             6
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Com isso, observe que podemos ter duas situações.

                     1ª situação) 𝑥 = 0 e 𝑦 = 8                       2ª situação) 𝑥 = 8 e 𝑦 = 0

Sabendo disso, vamos analisar as alternativas.

A) 𝑥 = 0 e 𝑦 = 8
Errado. Essa é a nossa primeira situação, que não é necessariamente verdade. Também é uma possibilidade
o caso em que 𝑥 = 8 e 𝑦 = 0.

B) 𝑥 + 𝑦 = 8
Correto. Esse é nosso gabarito, pessoal. Verifique que independentemente da situação, sempre vamos ter
𝑥 + 𝑦 = 8. Afinal, sempre um vai ser 0 (zero) e o outro será 8 (oito), de forma que a soma é sempre 8 (oito).
                                                       ==219a34==

C) 𝑥 < 𝑦
Errado. Essa afirmação é verdade apenas para a primeira situação. Como podemos ter o caso em que 𝑥 = 8
e 𝑦 = 0, tem-se também que 𝑥 pode ser maior que 𝑦.

D) 𝑥 + 2𝑦 = 8
Errado. Essa equação é válida apenas para a segunda situação. No caso em que 𝑥 = 0 e 𝑦 = 8, já é possível
verificar que ela é inválida.

Gabarito: LETRA B.

Subconjuntos

Vamos aprofundar um pouco o nosso estudo sobre os subconjuntos. Para começar, tente dizer quais são os
subconjuntos do conjunto 𝐴 = {𝑎, 𝑏}. Pronto? Observe como fica:

                                         Conjunto                   Subconjuntos
                                                                          ∅
                                                                         {𝑎}
                                   𝐴 = {𝑎, 𝑏}                            {𝑏}
                                                                        {𝑎, 𝑏}

A tabela acima lista todos os subconjuntos que podemos formar utilizando o conjunto 𝐴. Sabendo disso,
podemos escrever as seguintes relações:

   • ∅ ⊂𝐴                                                             • {𝑏} ⊂ 𝐴
   • {𝑎} ⊂ 𝐴                                                          • {𝑎, 𝑏} ⊂ 𝐴

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                7
        www.estrategiaconcursos.com.br                                                                    56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Devemos falar um pouco do conjunto vazio e conjunto unitário. O conjunto vazio, como o próprio nome
sugere, é um conjunto que não possui elementos! É representado por meio do símbolo ∅ mas também
pode aparecer como um simples par de chaves { }. Já o conjunto unitário é todo conjunto que possui um
único elemento!

                               O conjunto vazio é subconjunto de qualquer outro conjunto.


                                                    Seja 𝑋 um conjunto genérico, então:

                                                   ∅⊂𝑿                𝑜𝑢               {}⊂𝑿
Observe que {𝑎, 𝑏} ⊂ 𝐴, indicando que qualquer conjunto é também um subconjunto de si mesmo! Seja
𝐵 = {𝑎, 𝑏, 𝑐}. Vamos listar os seus subconjuntos também?

                                         Conjunto                  Subconjuntos
                                                                               ∅
                                                                              {𝑎}
                                                                              {𝑏}
                                                                              {𝑐}
                                𝐵 = {𝑎, 𝑏, 𝑐}                                {𝑎, 𝑏}
                                                                             {𝑎, 𝑐}
                                                                             {𝑏, 𝑐}
                                                                         {𝑎, 𝑏, 𝑐}

Quando um subconjunto de B é diferente do próprio B, chamamos ele de subconjunto próprio de B. Por
exemplo, {𝑎}, {𝑏}, {𝑐}, {𝑎, 𝑏}, {𝑎, 𝑐} são subconjuntos próprios de B. Já o subconjunto {𝑎, 𝑏, 𝑐} é denominado
impróprio pois é igual ao próprio B! Com os conjuntos listados na tabela acima são subconjuntos de 𝐵, então
podemos escrever:

              •   ∅ ⊂𝐵                                                             •   {𝑎, 𝑏} ⊂ 𝐵
              •   {𝑎} ⊂ 𝐵                                                          •   {𝑎, 𝑐} ⊂ 𝐵
              •   {𝑏} ⊂ 𝐵                                                          •   {𝑏, 𝑐} ⊂ 𝐵
              •   {𝑐} ⊂ 𝐵                                                          •   {𝑎, 𝑏, 𝑐} ⊂ 𝐵

Pessoal, observe que os subconjuntos de um conjunto são apenas diferentes combinações de seus
elementos. Portanto, se você precisar listar os subconjuntos, siga os seguintes passos:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 8
        www.estrategiaconcursos.com.br                                                                     56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

         Passo 1: O primeiro conjunto que você deve anotar como subconjunto é o conjunto vazio.

         Passo 2: Depois, transforme em subconjunto cada elemento, um por um.

         Passo 3: Em seguida, escreva os subconjuntos formado por pares de elementos.

         Passo 4: Acabando os pares, pegue os trios e assim sucessivamente.

Seguindo essa receita, vamos listar os subconjuntos de 𝐶 = {1, 2, 3} ?

Passo 1: Você não deve esquecer que o conjunto vazio é subconjunto de qualquer outro conjunto, portanto:

                                                          ∅

Passo 2: Transformando cada elemento em um subconjunto, um por um.

                                                  ∅, {1}, {2}, {3}

Passo 3: Escrever os subconjuntos formado por pares de elementos.

                                      ∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2,3}

Passo 4: Ir para os trios.

                                ∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2,3}, {1, 2, 3}

Como o conjunto 𝐶 só possui 3 elementos, encerramos por aqui! Listamos todos os subconjuntos dele.
Observe que quando tínhamos um conjunto com 2 elementos, obtivemos 4 subconjuntos. Ao aumentar um
elemento no conjunto, passamos a ter 8 subconjuntos. Será que é possível estabelecer uma fórmula para
calcular o número de subconjuntos baseado na quantidade de elementos de um conjunto?

É possível sim e a fórmula é bem simples. Seja 𝒏(𝑨) o número de elementos de um conjunto 𝑨. Então, o
número de subconjuntos de 𝑨, 𝒏𝑺𝑨 , é dado por:

                                               𝑛𝑆𝐴 = 2𝑛(𝐴)


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           9
         www.estrategiaconcursos.com.br                                                              56

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Por exemplo, vamos voltar no conjunto 𝐶 = {1, 2, 3}. Como ele tem três elementos, para encontrar o
número de subconjuntos de C, fazemos assim:


                      𝑛𝑆𝐶 = 2𝑛(𝐶)           →         𝑛𝑆𝐶 = 23               →   𝑛𝑆𝐶 = 8

Logo, C tem oito subconjuntos.

(IDAF-AC/2020) Quantos subconjuntos possui o conjunto das vogais?
A) 10
B) 25
C) 32
D) 50

Comentários
Seja 𝑽 o conjunto formado por todas as vogais, então temos que: 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢}

O conjunto acima possui 5 elementos, sabemos que o número de subconjuntos de um conjunto depende da
quantidade de elementos e é dado através de uma fórmula.

                      𝑛𝑆𝑉 = 2𝑛(𝑉)           →        𝑛𝑆𝑉 = 25            →       𝑛𝑆𝑉 = 32

Gabarito: Letra C.

Conjunto das Partes
Você sabia que podemos juntar todos os subconjuntos de um conjunto para formar um novo conjunto?
Esse novo conjunto formado é denominado conjunto das partes e é representado pelo símbolo ℘. Por
exemplo, os conjuntos das partes de 𝐴 = {𝑎, 𝑏} e de 𝐵 = {𝑎, 𝑏, 𝑐} são:


                                       ℘(𝐴) = {{ }, {𝑎}, {𝑏}, {𝑎, 𝑏}}
                     ℘(𝐵) = {{ }, {𝑎}, {𝑏}, {𝑐}, {𝑎, 𝑏}, {𝑎, 𝑐}, {𝑏, 𝑐}, {𝑎, 𝑏, 𝑐}}

Observe que ℘(𝐴) e ℘(𝐵) são conjuntos formados por outros conjuntos! Note ainda que a sua quantidade
de elementos é exatamente a quantidade de subconjuntos calculada pela fórmula 𝒏𝑺𝑨 = 𝟐𝒏(𝑨) . Um outro

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       10
        www.estrategiaconcursos.com.br                                                           56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

ponto que chamamos atenção é que, no conjunto das partes, listamos o conjunto vazio { } explicitamente
com um dos seus elementos.

(PREF. PETROLINA/2019) Dado um conjunto A, representa-se por ℘(𝐴) o conjunto formado por todos os
subconjuntos de A – o chamado conjunto das partes que também costuma ser representado por 2𝐴 . Se 𝐴 =
{𝜙, {𝜙}, 1, {1}}, qual das alternativas seguintes NÃO é elemento de ℘(𝐴)?
A) 𝜙
B) {𝜙, 1}
C) {1, {𝜙, 1}}
D) {𝜙, {𝜙}}
E) {1, {1}}

Comentários:
O jeito mais imediato de resolver a questão é listar todos os subconjuntos de 𝑨. Perceba que teremos 24 =
𝟏𝟔 subconjuntos. Para nos auxiliar, vamos usar uma tabela. Vale também destacar que 𝝓 representa o
conjunto vazio e você deve lembrar que o conjunto vazio é sempre subconjunto de qualquer conjunto.

Ao listar os subconjuntos do conjunto 𝐴, percebemos que apenas o conjunto {𝟏, {𝝓, 𝟏}} não é elemento de
℘(𝐴). Isso acontece, pois, o conjunto {𝝓, 𝟏} não é elemento de A.

Gabarito: Letra C.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            11
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

União, Intersecção, Complementar e Diferença
Representação por Diagramas
Você deve ter visto ao longo da aula que apareceram alguns conjuntos na forma de diagramas. Esse tipo de
representação é extremamente útil na resolução de questões, pois possibilita uma melhor compreensão do
problema. Por exemplo, seja 𝑨 o conjunto de funcionários de uma determinada empresa.

                                                    𝑨
                                          Ana
                                                         Ohara
                                                                           Yasmim
                                                        Beatriz

Todos aqueles que estão dentro do conjunto 𝑨 representam funcionários da empresa. Quem está fora, não
é funcionário da empresa. Olhando simplesmente para o diagrama, podemos dizer que:

       •     𝑂ℎ𝑎𝑟𝑎 ∈ 𝐴;                                                •     𝑌𝑎𝑠𝑚𝑖𝑚 ∉ 𝐴;
       •     𝐵𝑒𝑎𝑡𝑟𝑖𝑧 ∈ 𝐴;                                              •     𝐴𝑛𝑎 ∉ 𝐴.

Esses diagramas são bastante conhecidos no meio matemático e possuem um nome especial: são os
Diagramas de Venn-Euler ou, simplesmente, Diagramas de Venn. Esse tipo de representação é utilizado
principalmente quando precisamos representar vários conjuntos ao mesmo tempo. Nos tópicos a seguir,
usaremos bastante esses diagramas e você logo ficará habituado.

           Existem diferentes maneiras de representarmos os conjuntos. A primeira dela é como
           estamos fazendo desde o começo da aula, como por exemplo, em 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢}.
           Chamamos esse tipo de representação de "representação por enumeração".

           Ademais, temos a representação por propriedade. Para entender melhor, considere o
           mesmo conjunto V citado anteriormente. Ele também poderia ser escrito da seguinte
           forma: 𝑽 = {𝐱 | 𝐱 é 𝐯𝐨𝐠𝐚𝐥}.

           Na prática, podemos ler tal conjunto da seguinte forma: V é o conjunto dos elementos de
           x, tal que x é vogal. Lemos essa barrinha vertical como "tal que". Não esqueça!

           Por fim, temos a representação por diagramas que estudamos agora a pouco! Fechou?

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           12
        www.estrategiaconcursos.com.br                                                               56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

União
Nessa parte da nossa aula, veremos que existem várias operações que os conjuntos podem se submeter. A
mais conhecida talvez seja a união (ou reunião) de conjuntos. A união de conjuntos é representada pelo
símbolo ∪ e, basicamente, funde dois conjuntos em um só.

No diagrama acima, temos que 𝑨 = {𝟏, 𝟐, 𝟑} e 𝐵 = {𝑎, 𝑏, 𝑐}. Quando fazemos a união de 𝐴 e 𝐵, criamos um
conjunto que possui todos os elementos dos dois conjuntos, 𝑨 ∪ 𝑩 = {𝟏, 𝟐, 𝟑, 𝒂, 𝒃, 𝒄}. Haverá casos em que
os conjuntos possuirão um mesmo elemento e, quando for necessário fazer a união dos dois, você não
precisará escrever duas vezes o elemento repetido. Observe um exemplo nos diagramas abaixo.

Note que o 2 é um elemento comum aos dois conjuntos: 𝐶 = {2, 4, 8, 6} e 𝐷 = {2, 3, 5, 7}. Nessas situações,
quando fazemos a união de conjuntos que possuem elementos em comum, esse elemento não vai aparecer
duas vezes no conjunto união! Confira que 𝐶 ∪ 𝐷 = {2, 3, 4, 5, 6, 7, 8}, o 2 aparece apenas uma vez.

Intersecção
A operação que seleciona os elementos comuns entre dois ou mais conjuntos é denominada intersecção e
é representada por ∩. Por exemplo, nos diagramas acima o número 2 é o único elemento comum entre 𝐶 e
𝐷. Logo, o conjunto intersecção será formado apenas pelo elemento 2: 𝑪 ∩ 𝑫 = {𝟐}. Veja mais um exemplo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              13
        www.estrategiaconcursos.com.br                                                                  56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Temos que 𝑋 = {𝐴, 𝐵, 𝐶, 𝐷} e 𝑍 = {𝐵, 𝐶, 𝐷, 𝐸}. São dois conjuntos distintos, mas que possuem alguns
elementos em comum. Os elementos 𝐵, 𝐶 𝑒 𝐷 aparecem nos 2 conjuntos e formam o conjunto intersecção:
𝑿 ∩ 𝒁 = {𝑩, 𝑪, 𝑫}.

Quando dois conjuntos possuem elementos em comum, podemos representá-los assim:

Essa região comum representa exatamente a sua intersecção. Os elementos que estão na região em
vermelho abaixo pertencem simultaneamente aos conjuntos A e B.

Caso os conjuntos não possuam elementos em comum, isto é, não haja intersecção entre os dois, nós
vamos chamá-los de disjuntos e os representaremos utilizando círculos afastados um do outro.

Diferença
Existe uma outra operação que é muito importante para a sua prova! Essa operação é a diferença ou, como
também é conhecida, a subtração de conjuntos! O conjunto diferença é representado por 𝑨 − 𝑩 e é
formado por todos os elementos de A que não são elementos de B! Por exemplo, considere os conjuntos:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          14
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Observe que 𝐴 = {1, 2, 3, 4, 5, 6} e 𝐵 = {1, 3, 5}. Para encontrar 𝐴 − 𝐵, devemos selecionar os elementos
de 𝑨 que não são elementos de 𝑩! Ou seja, aqueles elementos que são apenas elementos de 𝑨! Observe
que 𝐴 e 𝐵 possuem em comum os seguintes elementos: 𝐴 ∩ 𝐵 = {1, 3, 5}. Logo, se 𝐴 = {𝟏, 2, 𝟑, 4, 𝟓, 6},
então o 𝐴 − 𝐵 = {2, 4, 6}. Em diagramas, também é possível representar o conjunto diferença.

Um detalhe importante é que se 𝐴 e 𝐵 são conjuntos disjuntos, então 𝑨 − 𝑩 = 𝑨 𝒆 𝑩 − 𝑨 = 𝑩. Veja como
essa informação pode ser representada:

Vamos fazer alguns exemplos numéricos para visualizar ainda melhor essa última situação.

Considere os conjuntos 𝐴 = {10, 20, 30} e 𝐵 = {40, 50}. Primeiramente, note que os conjuntos são
disjuntos. Mas qual é o motivo mesmo para eles serem disjuntos, professor?

A e B são disjuntos pois não possuem elementos em comum! Nenhum sequer!! São totalmente diferentes
um outro. Tudo bem?! Agora, lembre-se que 𝑨 − 𝑩 é o conjunto de elementos formados por todos os
elementos de A que não são elementos de B. Ora, nesse nosso exemplo, todos os elementos de A não são
elementos de B!! Sendo assim, podemos escrever que:


                                       𝐴 − 𝐵 = {10, 20, 30} = 𝐴


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            15
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(PREF. LINHARES/2020) Dados os três conjuntos numéricos:

𝐴 = {1,2,3,4,5,6},
𝐵 = {0,2,4,6},
𝐶 = {1,3,5,7,9}.

O resultado de (𝐴 − 𝐵) ∩ 𝐶 é igual a:
A) {1,3,5}                                             ==219a34==

B) {1,3,5,7,9}
C) {0,1,3,5,7,9}
D) {2,4,6}
E) {0}

Comentários:
Primeiramente, devemos fazer a diferença entre o conjunto A e B. Lembre-se, quando tivermos a diferença
entre dois conjuntos, por exemplo, 𝐴 − 𝐵, estamos procurando o conjunto dos elementos de A que não são
elementos de B. Na nossa questão, temos que:

                                                𝐴 = {1,2,3,4,5,6}
                                                 𝐵 = {0,2,4,6}

Primeira pergunta: quais elementos estão ao mesmo tempo em A e em B? Observe que 2, 4 e 6 são os três
elementos comuns aos dois conjuntos. Segunda pergunta: que conjunto é formado quando eu removo esses
elementos em comum do conjunto A? É exatamente o conjunto diferença!

                                               𝐴 = {1, 𝟐, 3, 𝟒, 5, 𝟔}
                                                𝐴 − 𝐵 = {1, 3, 5}

A questão não termina aqui. Ainda devemos fazer a intersecção desse conjunto com o C. Note que C possui
todos os três elementos do nosso conjunto diferença. Portanto, coincidentemente, vamos ter que:

                                           (𝐴 − 𝐵) ∩ 𝐶 = {1, 3, 5}

Gabarito: Letra A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          16
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Complementar
Quando falamos de um determinado conjunto, normalmente estamos destacando determinado grupo
dentro de um universo maior. Por exemplo, podemos formar um conjunto dos funcionários especializados
em RH de uma empresa. Esse grupo de funcionários foi retirado de um conjunto maior: o conjunto formado
por todos os funcionários da empresa. Acompanhe o diagrama abaixo.


                                                        𝑅𝐻                   𝑈

Observe que o conjunto formado por aqueles especializados em RH está contido dentro de um conjunto 𝑈.
Esse conjunto maior é frequentemente chamado de conjunto universo e, nesse exemplo, poderia
representar o conjunto de todos os funcionários da empresa.

Quer um outro exemplo? Imagine um conjunto formado por todas as vogais: 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢}. Em um
problema que estamos trabalhando com esse conjunto, qual seria o conjunto universo? O conjunto universo
nessa situação seria o conjunto formado por todas as letras do alfabeto: 𝑈 = {𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, … , 𝑥, 𝑦, 𝑧}.

Quando estamos falando de conjunto universo, um novo conceito surge: o conjunto complementar. Lembre-
se do conjunto que inventamos com os funcionários de uma empresa especializados em RH. Qual o
complementar desse conjunto? Seria o conjunto formado por todos os outros funcionários da empresa que
não são especializados em RH! Vamos mostrar no diagrama.


                                                        𝑅𝐻                   𝑈

O complementar do conjunto RH é representado pela parte pintada em amarelo. E no nosso exemplo das
letras? Qual o complementar do conjunto formado apenas pelas vogais? Ora, é o conjunto formado por
todas as outras letras que não são vogais, isto é, o conjunto das consoantes! Para determinar o
complementar de qualquer conjunto, é de fundamental importância conseguir identificar qual é o conjunto
universo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                17
        www.estrategiaconcursos.com.br                                                                    56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A notação utilizada para representar o complementar de um conjunto 𝑋 é 𝑿𝑪 ou 𝑿   ̅ . Representamos o
conjunto complementar com esse "expoente" 𝐶 ou uma barra em cima. Ademais, podemos definir o
conjunto complementar utilizando o que acabamos de ver sobre conjunto diferença.


                                          ̅ = 𝑿𝑪 = 𝑼 − 𝑿
                                          𝑿
Veja que utilizando a definição acima, temos que o conjunto complementar 𝑋 𝐶 é formado por tudo que está
no conjunto universo, mas não está em 𝑿.

Leis de De Morgan
Pessoal, as leis de De Morgan são dois teoremas que relacionam as operações de união e intersecção de
conjuntos com a complementação. Elas foram formuladas pelo matemático britânico Augustus De Morgan
no século 19 e podem ser enunciadas assim:

- O complemento da união de dois conjuntos é igual à intersecção dos complementos desses conjuntos.


                                              (𝐴 ∪ 𝐵)ᶜ = 𝐴ᶜ ∩ 𝐵ᶜ

- O complemento da intersecção de dois conjuntos é igual à união dos complementos desses conjuntos.


                                              (𝐴 ∩ 𝐵)ᶜ = 𝐴ᶜ ∪ 𝐵ᶜ

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            18
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Princípio da Inclusão-Exclusão

Pessoal, muitas vezes vamos precisar determinar o número de elementos de um conjunto. Essa tarefa de
contar pode ficar um pouco complicada quando temos elementos que pertencem a mais de um conjunto,
pois, nesses casos, devemos eliminar as repetições para não contar o mesmo elemento duas vezes.

Nesse sentido, surge o Princípio da Inclusão-Exclusão (PIE). Esse princípio possibilita uma contagem exata da
quantidade de elementos de um conjunto formado pela união de vários outros, mesmo que contenham
intersecções.

➢ 2 Conjuntos
Imagine dois conjuntos 𝑨 e 𝑩 com elementos em comum. Se 𝑛(𝐴) é o número de elementos de 𝐴 e 𝑛(𝐵) é
o número de elementos de 𝐵, quanto vale 𝑛(𝐴 ∪ 𝐵) ?

                                                𝒏(𝑨 ∪ 𝑩) = 𝒏(𝑨) + 𝒏(𝑩) − 𝒏(𝑨 ∩ 𝑩)

Vamos tentar entender o caminho das pedras para chegar na relação acima. Considere os conjuntos:

   •   𝐴 = {1, 2, 3} ⟹ 𝑛(𝐴) = 3
   •   𝐵 = {3, 4, 5} ⟹ 𝑛(𝐵) = 3
   •   𝐴 ∪ 𝐵 = {1, 2, 3, 4, 5} ⟹ 𝑛(𝐴 ∪ 𝐵) = 5
   •   𝐴 ∩ 𝐵 = {3}      ⟹ 𝑛(𝐴 ∩ 𝐵) = 1
Observe que apesar da união entre A e B ser uma espécie de fusão entre os dois conjuntos, o número de
elementos na união, na maioria dos casos, não é a soma direta do número de elementos de A com o número
de elementos de B.

Perceba que o elemento 3 aparece tanto em A como em B e ao somar o número de elementos dos dois
conjuntos devemos considerar que estamos somando o mesmo elemento duas vezes! É por isso esse
motivo que devemos subtrair a quantidade de elementos que estão na intersecção. Já para conjuntos
disjuntos temos que:


                               𝒏(𝑨 ∪ 𝑩) = 𝒏(𝑨) + 𝒏(𝑩)

                                               pois:


                                       𝒏(𝑨 ∩ 𝑩) = 𝟎.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                19
        www.estrategiaconcursos.com.br                                                                    56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(PREF. SÃO GONÇALO/2022) Em uma empresa na qual trabalham 116 pessoas, sabe-se que:

- 72 têm ensino médio completo;
- 64 sabem usar o EXCEL;
- 35 têm ensino médio completo e sabem usar o EXCEL.

O número de funcionários dessa empresa que não têm ensino médio completo e não sabem usar o EXCEL é:
A) 13
B) 14
C) 15
D) 16

Comentários:
Vamos usar o Princípio da Inclusão-Exclusão para resolver esse problema. Inicialmente, considere "M" como
o conjunto formado por todos aqueles que têm o ensino médio. Além disso, considere "X" como o conjunto
formado por todos aqueles que sabem usar o EXCEL. Com as informações do enunciado, temos que:

                         𝑛(𝑀) = 72                 𝑛(𝑋) = 64             𝑛(𝑀 ∩ 𝑋) = 35

Do princípio da inclusão-exclusão, sabemos que:

                                    𝑛(𝑀 ∪ 𝑋) = 𝑛(𝑀) + 𝑛(𝑋) − 𝑛(𝑀 ∩ 𝑋)

Substituindo as informações que temos,

                        𝑛(𝑀 ∪ 𝑋) = 72 + 64 − 35              →         𝒏(𝑴 ∪ 𝑿) = 𝟏𝟎𝟏

Note que a união desses dois conjuntos tem 101 pessoas. Por sua vez, o enunciado disse que o número total
de funcionários dessa empresa é 116. Com isso, a quantidade de funcionários que não possuem ensino
médio e não sabem usar o EXCEL é exatamente a diferença entre o total de funcionário e 𝒏(𝑴 ∪ 𝑿). Assim,

                                                 116 − 101 = 15

Gabarito: LETRA C.


A verdade é que não precisamos decorar fórmulas para responder questões que envolva esse princípio.
Utilizando um pouco de lógica e diagramas de Venn, podemos encontrar a quantidade de elemento de cada
conjunto envolvido em um problema típico de Princípio da Inclusão-Exclusão. Antes disso, quero deixar claro
para vocês o significado de cada uma das regiões no seguinte diagrama:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              20
        www.estrategiaconcursos.com.br                                                                  56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

➢ 3 Conjuntos
Imagine que você tem 3 conjuntos, cada conjunto possui elementos em comum com os outros dois. A
situação mais completa que podemos imaginar está representada pelo diagrama abaixo.

Vamos fazer uma leitura de cada uma das regiões da figura acima?

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                  21
        www.estrategiaconcursos.com.br                                                      56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Observe que o número de regiões com três conjuntos aumenta bastante em relação à análise
anteriormente feita com dois. Agora, considere que você conhece a quantidade de elementos de cada um
dos conjuntos cima, isto é, 𝒏(𝑨), 𝒏(𝑩) e 𝒏(𝑪).

Como você faria para encontrar 𝒏(𝑨 ∪ 𝑩 ∪ 𝑪) ? Será que é só somar as três quantidades? A resposta para
essa pergunta é não! Precisamos ter atenção aos elementos que podem pertencer a mais de um conjunto.

Segundo o Princípio da Inclusão- Exclusão, a fórmula geral que permite calcular a quantidade de elementos
de um conjunto formado pela união de outros três é dada por:

                                                       ==219a34==

  𝒏(𝑨 ∪ 𝑩 ∪ 𝑪) = 𝒏(𝑨) + 𝒏(𝑩) + 𝒏(𝑪) − 𝒏(𝑨 ∩ 𝑩) − 𝒏(𝑨 ∩ 𝑪) − 𝒏(𝑩 ∩ 𝑪) + 𝒏(𝑨 ∩ 𝑩 ∩ 𝑪)

Vamos tentar entender com ela surge? Note que para achar a quantidade de elementos do conjunto união,
primeiro somamos individualmente as quantidades de cada um dos conjuntos.

                                              𝒏(𝑨) + 𝒏(𝑩) + 𝒏(𝑪)

No entanto, nós vimos que, ao fazer isso, não estamos considerando os elementos que podem pertencer a
mais de um conjunto. Essa soma dará, certamente, uma quantidade de elementos maior do que a
quantidade real. Mas, então, o que fazer? É preciso subtrair as quantidades dos elementos que estão nas
intersecções, evitando assim a dupla contagem.

                         𝒏(𝑨) + 𝒏(𝑩) + 𝒏(𝑪) − 𝒏(𝑨 ∩ 𝑩) − 𝒏(𝑨 ∩ 𝑪) − 𝒏(𝑩 ∩ 𝑪)

Perceba que a fórmula ainda não está completa. Imagine um elemento que é comum a todos os 3 conjuntos,
isto é, pertence a 𝐴 ∩ 𝐵 ∩ 𝐶. Esse elemento pertence tanto a 𝐴, quanto a 𝐵 e a 𝐶. Quando fizemos a soma
𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶), contamos ele três vezes!

Quando fizemos a subtração −𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐵 ∩ 𝐶) estamos tirando ele três vezes! Resultado:
não estamos contando os elementos de 𝑨 ∩ 𝑩 ∩ 𝑪. Por esse motivo, adicionamos 𝒏(𝑨 ∩ 𝑩 ∩ 𝑪). Logo,


  𝒏(𝑨 ∪ 𝑩 ∪ 𝑪) = 𝒏(𝑨) + 𝒏(𝑩) + 𝒏(𝑪) − 𝒏(𝑨 ∩ 𝑩) − 𝒏(𝑨 ∩ 𝑪) − 𝒏(𝑩 ∩ 𝑪) + 𝒏(𝑨 ∩ 𝑩 ∩ 𝑪)

Eu sei que a fórmula pode parecer um pouco complicada, mas garanto que com um pouco de paciência e
resolução de exercícios, ela se tornará mais amigável e bastante intuitiva! Além disso, também ensinarei

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            22
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

um jeito que vocês poderão utilizar caso não lembrem da fórmula. Algumas vezes, no entanto, a questão
pode exigir a aplicação direta dela. Confira o exercício abaixo.

(IFF/2018) Para um conjunto qualquer X, 𝑛(𝑋) representa a quantidade de elementos de X. Nesse sentido,
considere que os conjuntos A, B e C tenham as seguintes propriedades:

                                         𝑛(𝐴) = 𝑛(𝐵) = 𝑛(𝐶) = 50;
                                 𝑛(𝐴 ∩ 𝐵) = 𝑛(𝐴 ∩ 𝐶) = 𝑛(𝐵 ∩ 𝐶) = 10;
                                               𝑛(𝐴 ∩ 𝐵 ∩ 𝐶) = 0.


Nessa situação, 𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) é igual a
A) 100.
B) 110.
C) 120.
D) 130.
E) 140.

Comentários:
Percebam que essa questão exige apenas a aplicação direta da fórmula que acabamos de ver.

   𝑛(𝐴 ∪ 𝐵 ∪ 𝐶 ) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶 ) − 𝑛(𝐴 ∩ 𝐵 ) − 𝑛(𝐴 ∩ 𝐶 ) − 𝑛(𝐵 ∩ 𝐶 ) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                           𝑛(𝐴 ∪ 𝐵 ∪ 𝐶 ) = 50 + 50 + 50 − 10 − 10 − 10 + 0

                                              𝑛(𝐴 ∪ 𝐵 ∪ 𝐶 ) = 120

Gabarito: Letra C.

Em algumas questões não precisaremos aplicar diretamente a fórmula acima. Será necessário um trabalho
mais braçal da nossa parte, para chegar à resposta. Muitas vezes a questão pede valores específicos que vão
surgir de uma maneira mais fácil se a gente for completando o diagrama de Venn com as quantidades.

Por favor, dê mais olhada naquele "mapa" que mostrei logo no início desse tópico, destacando as regiões
e o seu significado.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              23
        www.estrategiaconcursos.com.br                                                                  56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                          QUESTÕES COMENTADAS - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
tem apenas um elemento, ela é dita um conjunto unitário. Um exemplo de conjunto unitário é a coleção
formada pelos números que são:
a) ao mesmo tempo, divisores de 4 e 9;
b) divisores de 4;
c) divisores de 9;
d) maiores que 4 e menores que 9;
e) formados pelos algarismos 4 e 9.

Comentários:
Queremos um conjunto que possua apenas um elemento. Vamos analisar cada uma das alternativas.

a) ao mesmo tempo, divisores de 4 e 9;
CERTO. O único número que é divisor, ao mesmo tempo de 4 e 9, é o número 1. Portanto, esse conjunto tem
apenas um elemento e é considerado unitário.

b) divisores de 4;
ERRADO. São divisores de 4: 𝐷(4) = {1, 2, 4}. Note que temos 3 elementos, portanto, não é o conjunto
unitário que estamos procurando.

c) divisores de 9;
ERRADO. São divisores de 9: 𝐷(9) = {1, 3, 9}. Note que temos 3 elementos, portanto, não é o conjunto
unitário que estamos procurando.

d) maiores que 4 e menores que 9;
ERRADO. Se considerarmos apenas os números inteiros entre 4 e 9, vamos ter: {5, 6, 7, 8}. Portanto, está
longe de ser o conjunto unitário que estamos procurando.

e) formados pelos algarismos 4 e 9.
ERRADO. Pessoal, podemos formar infinitos números com os algarismos 4 e 9. Entre eles, posso citar 49,
94, 449, 494, etc.

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           24
        www.estrategiaconcursos.com.br                                                               56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

2. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;
c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

Comentários:
Vamos procurar uma coleção que não possua elementos. Devemos analisar alternativa por alternativa.

a) de meses do ano que começam pela letra J;           ==219a34==

ERRADO. Temos vários meses que começam pela letra J: Janeiro, Junho e Julho.

b) de dias da semana que começam pela letra T;
ERRADO. Terça-feira é um dia da semana que começa pela letra T. Portanto, uma coleção formada por esses
dias não é vazia.

c) dos números que são, ao mesmo tempo, pares e ímpares;
CERTO. Não existe nenhum número que seja ao mesmo tempo par ou ímpar. Ou é ímpar, ou é par. Portanto,
um conjunto formado por esses números seria vazio.

d) dos números menores que 10 e maiores que 6;
ERRADO. Considerando apenas o conjunto dos inteiros, os números que são menores que 10 e maiores que
6 são: 7, 8 e 9. Portanto, não é um conjunto vazio.

e) das pessoas brasileiras que são casadas.
ERRADO. Muitos brasileiros são casados. Portanto, não seria um conjunto vazio.

Gabarito: LETRA C.

3. (FGV/CODEBA/2010) Sejam 𝑨 = {𝟎, 𝟏, 𝟐, 𝟑} e 𝑩 = {𝟎, 𝟐, 𝟒} dois conjuntos. Com relação aos conjuntos
A e B, analise as afirmativas a seguir:

I. 𝑩 ⊂ 𝑨
II. 𝑨 ∪ 𝑩 = {𝟎, 𝟏, 𝟐, 𝟑, 𝟒}
III. 𝑨 ∩ 𝑩 = {𝟎, 𝟐}

Está(ão) correta(s) somente
a) I.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           25
        www.estrategiaconcursos.com.br                                                               56

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 11

b) II.
c) III.
d) I e II.
e) II e III.

Comentários:
Devemos analisar cada afirmativa.

I. 𝐵 ⊂ 𝐴
ERRADO. Para que B estivesse contido em A, todos os seus elementos também devem ser elementos de A.
Note que B possui o elemento 4, enquanto A não possui. Logo, B não pode estar contido em A.

II. 𝐴 ∪ 𝐵 = {0,1,2,3,4}
CERTO. A união dos dois conjuntos é a reunião de seus elementos. Assim, quando juntamos "todo mundo",
realmente ficamos com 𝐴 ∪ 𝐵 = {0,1,2,3,4}.

III. 𝐴 ∩ 𝐵 = {0,2}
CERTO. A intersecção é formada pelos elementos em comum dos dois conjuntos. Perceba que o 0 e o 2 são
os elementos que estão nos dois conjuntos, ao mesmo tempo. Portanto, é correto dizer que 𝐴 ∩ 𝐵 = {0,2}.

Gabarito: LETRA E.

           Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       26
           www.estrategiaconcursos.com.br                                                           56

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                          QUESTÕES COMENTADAS - FGV

União, Intersecção, Complementar e Diferença

1. (FGV/BANESTES/2023) Sejam A e B dois conjuntos finitos tais que 𝑨 ∪ 𝑩 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕} e {𝟏, 𝟐, 𝟓}
é o conjunto de elementos que estão em A e não estão em B. O conjunto dos elementos que não estão em
A ou estão em B é:
A) {3, 4}.
B) {3, 6}.
C) {3, 4, 6}.
D) {4, 6, 7}.
E) {3, 4, 6, 7}.

Comentários:
De acordo com o enunciado, temos que:

                             𝐴 ∪ 𝐵 = {1, 2, 3, 4, 5, 6, 7}            𝐴 − 𝐵 = {1, 2, 5}

A questão pede o conjunto dos elementos que não estão em A ou estão em B. Como estamos falando da
união de um subconjunto de B com o próprio B, o conjunto pedido é o próprio B. Vamos esquematizar.


             A               B                    A               B                       A               B

                                       ou

            conjunto dos elementos               conjunto dos elementos
              que não estão em A                                                              O conjunto B!
                                                     que estão em B

Observe que para encontrar o B, podemos fazer:


             A               B                    A               B                       A               B

                    𝐴∪𝐵                          conjunto dos elementos
                                                                                              O conjunto B!
                                                   que não estão em B


Sendo assim, para encontrar B, basta retirarmos da união aqueles elementos que estão apenas em A!

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                    27
        www.estrategiaconcursos.com.br                                                                        56

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                            𝐴 ∪ 𝐵 = {𝟏, 𝟐, 3, 4, 𝟓, 6, 7}

                                                 𝐴 − 𝐵 = {𝟏, 𝟐, 𝟓}

Isso resulta em:


                                                  𝑩 = {𝟑, 𝟒, 𝟔, 𝟕}

Gabarito: LETRA E.

2. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

- A união de A e B tem 130 elementos.                  ==219a34==

- A diferença B – A tem 50 elementos.
- A diferença A – B tem 60 elementos.

Sendo x o número de elementos de A e y o número de elementos de B, o valor de x + y é igual a
A) 110.
B) 120.
C) 130.
D) 140.
E) 150.

Comentários:
Primeiramente, vamos relembrar o que significa os conjuntos diferenças apontados no enunciado.

1) 𝐵 − 𝐴 é o conjunto formado por todos os elementos de B que não são elementos de A.
2) Analogamente, 𝐴 − 𝐵 é o conjunto formado por todos os elementos de A que não são elementos de B.

Agora, visualize esses conjuntos para melhor compreensão.

                                                                    𝒛

O conjunto 𝐴 − 𝐵 está representado pela região verde. Note que é tudo de 𝑨 menos a parte vermelha. Essa
parte vermelha representa os elementos de A que também são elementos de 𝑩, ou seja, a intersecção dos
dois conjuntos. Por sua vez, a região azul representa o conjunto 𝐵 − 𝐴.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          28
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Observe que já colocamos as quantidades de cada desses conjuntos. Como não sabemos quantos elementos
pertencem a 𝐴 e a 𝐵 simultaneamente, então vamos chamar essa quantidade de "z". O enunciado nos diz
que a união desses dois conjuntos possui 130 elementos. Na prática, isso significa que se somamos todas as
regiões destacadas no diagrama de Venn acima, então devemos obter esses 130 elementos.

                      60 + 𝑧 + 50 = 130          →       𝑧 = 130 − 110           →     𝒛 = 𝟐𝟎

Pronto, temos "z". Com ele, podemos determinar quantos elementos possui cada um dos conjuntos.

                      𝑛(𝐴) = 60 + 𝑧        →      𝑛(𝐴) = 60 + 20             →       𝒏(𝑨) = 𝟖𝟎


                      𝑛(𝐵) = 50 + 𝑧        →      𝑛(𝐵) = 50 + 20             →       𝒏(𝑩) = 𝟕𝟎

Gabarito: LETRA E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             29
        www.estrategiaconcursos.com.br                                                                 56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                          QUESTÕES COMENTADAS - FGV

Princípio da Inclusão-Exclusão

1. (FGV/PM-SP/2023) Em um conjunto de 20 objetos, 12 têm a característica A e 9 têm a característica B.
Apenas 3 dos objetos não possuem nem a característica A, nem a característica B. Assim, a quantidade de
objetos desse conjunto que possuem simultaneamente as características A e B é igual a
A) 1.
B) 2.
C) 3.
D) 4.

Comentários:
Se 12 objetos têm a característica A, podemos escrever:

                                                    𝑛(𝐴) = 12

Se 9 objetos têm a característica B, então:

                                                     𝑛(𝐵) = 9

Nesse conjunto de 20 objetos, 3 não possuem nenhuma dessas duas características. Sendo assim:

                                𝑛(𝐴 ∪ 𝐵) = 20 − 3          →        𝑛(𝐴 ∪ 𝐵) = 17

Pronto. Agora, para determinar quantos objetos possuem as duas características simultaneamente, vamos
usar o princípio da inclusão-exclusão:

                                     𝑛(𝐴 ∪ 𝐵) = 𝑛(𝐴) + 𝑛(𝐵) − 𝑛(𝐴 ∩ 𝐵)

Substituindo o que temos:

                                            17 = 12 + 9 − 𝑛(𝐴 ∩ 𝐵)

                                                   𝑛(𝐴 ∩ 𝐵) = 4

Gabarito: LETRA D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          30
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

2. (FGV/MPE-SP/2023) Em um grupo de 55 pessoas, 32 jogam pôquer, 36 jogam truco, 34 jogam buraco,
18 jogam pôquer e truco, 21 jogam truco e buraco e 20 jogam buraco e pôquer. Se há, no grupo, uma única
pessoa que não joga quaisquer desses três jogos de cartas, então a quantidade de pessoas que jogam esses
três jogos é
A) 12.
B) 11.
C) 9.
D) 7.
E) 6.

Comentários:
Mais uma questão para usarmos o Princípio da Inclusão-Exclusão! Dessa vez, usaremos três conjuntos. Antes
de qualquer coisa, vamos organizar as informações do enunciado.

32 pessoas jogam pôquer:            𝑛(𝑃) = 32
36 pessoas jogam truco:             𝑛(𝑇) = 36
34 pessoas jogam buraco:            𝑛(𝐵) = 34
18 pessoas jogam pôquer e truco:           𝑛(𝑃 ∩ 𝑇) = 18
21 pessoas jogam truco e buraco:           𝑛(𝑇 ∩ 𝐵) = 21
20 pessoas jogam buraco e pôquer:          𝑛(𝐵 ∩ 𝑃) = 20


Como do grupo de 55 pessoas apenas uma não joga nenhum dos jogos, podemos escrever:

                        𝑛(𝑃 ∪ 𝑇 ∪ 𝐵) = 55 − 1               →          𝑛(𝑃 ∪ 𝑇 ∪ 𝐵) = 54

Agora, podemos usar o PIE para determinar quantos jogam os três jogos.

       𝑛(𝑃 ∪ 𝑇 ∪ 𝐵) = 𝑛(𝑃) + 𝑛(𝑇) + 𝑛(𝐵) − 𝑛(𝑃 ∩ 𝑇) − 𝑛(𝑇 ∩ 𝐵) − 𝑛(𝐵 ∩ 𝑃) + 𝑛(𝑃 ∩ 𝑇 ∩ 𝐵)

Substituindo o que temos:

                            54 = 32 + 36 + 34 − 18 − 21 − 20 + 𝑛(𝑃 ∩ 𝑇 ∩ 𝐵)

                                            54 = 43 + 𝑛(𝑃 ∩ 𝑇 ∩ 𝐵)

                                               𝑛(𝑃 ∩ 𝑇 ∩ 𝐵) = 11

Gabarito: LETRA B.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            31
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

3. (FGV/SEFAZ-MG/2023) Sobre 3 conjuntos 𝐴, 𝐵 e 𝐶, sabe-se que:

𝐴 tem 16 elementos;
𝐵 tem 24 elementos;
𝐶 tem 18 elementos;
𝐴 ∩ 𝐵 tem 5 elementos;
𝐵 ∩ 𝐶 tem 7 elementos;
𝐴 ∩ 𝐵 ∩ 𝐶 tem 3 elementos;
𝐴 − (𝐵 ∪ 𝐶) tem 8 elementos.

O número de elementos do conjunto 𝐴 ∪ 𝐵 ∪ 𝐶 é igual a
a) 35.
b) 43.
c) 47.
d) 48.
e) 58.

Comentários:
Questão bem legal sobre conjuntos que nos remete ao Princípio da Inclusão-Exclusão.

       𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐵 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐶) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

Perceba que a única informação que não temos é 𝒏(𝑨 ∩ 𝑪). Todas as outras informações o enunciado deu!
Ademais, o enunciado nos forneceu 𝑛(𝐴 − (𝐵 ∪ 𝐶)). Certamente será com esse valor que encontraremos o
que nos falta. Para entender como isso vai nos ajudar, vamos desenhar o conjunto 𝐴 − (𝐵 ∪ 𝐶).

                                       𝐴                                     𝐵

                                                                    𝐶

Note que o conjunto 𝐴 − (𝐵 ∪ 𝐶) é formado por todos os elementos de A que não são elementos da união
de B com C. É exatamente a região destacada em amarelo na figura acima. Logo, perceba que:

                     𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        32
        www.estrategiaconcursos.com.br                                                            56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Muito cuidado na hora de escrever a expressão acima. Muitos alunos podem achar que:

                                       𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐵 ∪ 𝐶)

Mas está errado! A expressão correta é:


                     𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)


Nós devemos retirar de A apenas o que ele tem em comum com B e C.

Professor, qual motivo de somar o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)?

Pessoal, devemos somar o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶) pois caso exista um elemento que seja comum aos três conjuntos,
quando fazemos " − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵)" retiramos ele duas vezes! Sendo assim, devemos "devolver"
esses elementos retirados mais de uma vez. Fazemos isso somando o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶).
Esclarecido esses pontos, observe que a expressão contém exatamente o que estamos procurando.

                     𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝒏(𝑨 ∩ 𝑪) − 𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

Ademais, temos todos os outros valores. Vamos substituí-los na expressão.

                                           8 = 16 − 𝑛(𝐴 ∩ 𝐶) − 5 + 3

                                               𝑛(𝐴 ∩ 𝐶) = 14 − 8

                                                   𝑛(𝐴 ∩ 𝐶) = 6

Pronto! Agora sim temos tudo que precisamos para usar o Princípio da Inclusão-Exclusão.

       𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐵 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐶) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                               𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 16 + 24 + 18 − 5 − 7 − 6 + 3

                                            𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 61 − 18

                                               𝒏(𝑨 ∪ 𝑩 ∪ 𝑪) = 𝟒𝟑
Gabarito: Letra B

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        33
        www.estrategiaconcursos.com.br                                                            56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

4. (FGV/SENADO FEDERAL/2022) Um clube tem 180 associados que participam de suas duas atividades
sociais. Há 130 frequentadores da cinemateca, enquanto 92 sócios participam das aulas de dança de salão.
Sendo assim, é correto afirmar que
a) mais de 40 sócios participam das duas atividades.
b) menos de 30 sócios participam das duas atividades.
c) mais de 55 sócios só vão às aulas de dança.
d) menos de 80 sócios só vão à cinemateca.
e) menos de 45 sócios só vão às aulas de dança.

Comentários:
Para responder essa questão, vamos usar o Princípio da Inclusão-Exclusão. Seja “C” o conjunto formado por
aqueles que frequentam a cinemateca e “D” o conjunto formado por aqueles que participam da dança de
salão. Como 180 associados participam de alguma dessas duas atividades, podemos escrever:

                                                 𝑛(𝐶 ∪ 𝐷) = 180

Por sua vez, como 130 frequentam a cinemateca:

                                                   𝑛(𝐶) = 130

Sabemos ainda que 92 frequentam a dança de salão:

                                                    𝑛(𝐷) = 92

Do Princípio da Inclusão-Exclusão, podemos escrever que:

                                     𝑛(𝐶 ∪ 𝐷) = 𝑛(𝐶) + 𝑛(𝐷) − 𝑛(𝐶 ∩ 𝐷)

Substituindo o que temos:

                                          180 = 130 + 92 − 𝑛(𝐶 ∩ 𝐷)

                                             𝑛(𝐶 ∩ 𝐷) = 222 − 180

                                                  𝑛(𝐶 ∩ 𝐷) = 42

Logo, podemos concluir que 42 sócios participam das duas atividades. A alternativa que está de acordo com
o nosso resultado é a A.

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            34
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

5. (FGV/CM TAUBATÉ/2022) Em uma assembleia com 172 votantes, duas propostas independentes, A e B,
foram colocadas em votação. Cada votante votou a favor ou contra cada uma das duas propostas. Sabe-
se que 138 votaram a favor da proposta A, 74 votaram a favor da proposta B e 32 votaram contra as duas
propostas. O número de votantes que votaram a favor da proposta A e contra a proposta B é
a) 66.
b) 69.
c) 72.
d) 74.
e) 140.

Comentários:
Vamos resolver essa questão usando Diagramas de Venn. Como temos duas propostas:

                                          𝐴                             𝐵

Com o diagrama pré-esquematizado, vamos inserir as informações do enunciado.

                                          𝐴                                  𝐵
                                              138 − 𝑥     𝑥     74 − 𝑥


                                                                                 32


Vou explicar melhor o diagrama acima! Observe que o enunciado não falou quantos votaram a favor das
duas propostas. Sendo assim, coloquei o “x” na intersecção dos conjuntos. Ademais, como sabemos que 32
votou contra as duas propostas, deixei essa quantidade fora de A e B, mas ainda dentro do universo dos
votantes. Por fim, devemos saber que, após organizar essas regiões, a soma de todas as quantidades deve
resultar nos 172 votantes da assembleia.

       (138 − 𝑥) + 𝑥 + (74 − 𝑥) + 32 = 172                →         244 − 𝑥 = 172     →   𝒙 = 𝟕𝟐

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          35
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Pronto, com o valor de “x”, vamos complementar o diagrama.

                                          𝐴                                  𝐵
                                               66        72        2


                                                                                 32


Como o enunciado quer o número de votantes a favor de A e contra B, então queremos a seguinte região:

                                          𝐴                                  𝐵
                                                 66      72        2


                                                                                 32


Gabarito: LETRA A.

6. (FGV/CM TAUBATÉ/2022) A prefeitura de certo município formou com seus funcionários 3 comissões
para examinar assuntos diferentes. Sabe-se que:

- há funcionários que participam de mais de uma comissão.
- cada comissão é formada por 15 funcionários.
- em cada comissão há 5 funcionários que não participam de mais nenhuma outra comissão.
- há 2 funcionários que participam das três comissões.

O número de funcionários que participam de, pelo menos, uma comissão é igual a
a) 29.
b) 31.
c) 36.
d) 39.
e) 43.

Comentários:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         36
        www.estrategiaconcursos.com.br                                                             56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como são três comissões, vamos chamá-las de “A”, “B” e “C”.

                                          𝐴                                  𝐵

                                                                   𝐶


Agora, vamos inserir no diagrama algumas informações que a questão passou.

                                          𝐴                                  𝐵
                                                 5        𝑦        5
                                                         2
                                                     𝑥         𝑧

                                                          5
                                                                   𝐶


As informações que usamos foram: (i) em cada comissão há 5 funcionários que não participam de mais
nenhuma outra comissão; e (ii) há 2 funcionários que participam das três comissões.

Nas intersecções duplas, colocamos as incógnitas “x”, “y” e “z” pois nada conseguimos afirmar no momento
sobre elas. Agora, vamos usar a seguinte informação: cada comissão é composta por 15 funcionários. Com
isso, podemos equacionar:

                                  5 + 𝑥 + 𝑦 + 2 = 15           →       𝑥+𝑦 =8

                                  5 + 𝑥 + 𝑧 + 2 = 15           →       𝑥+𝑧 = 8

                                  5 + 𝑧 + 𝑦 + 2 = 15           →       𝑧+𝑦 =8

Agora, vamos somar as três equações acima, membro a membro.

                                       (𝑥 + 𝑦) + (𝑥 + 𝑧) + (𝑧 + 𝑦) = 24

                                               2 ⋅ (𝑥 + 𝑦 + 𝑧) = 24

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           37
        www.estrategiaconcursos.com.br                                                               56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                                  𝑥 + 𝑦 + 𝑧 = 12

Professor, o que vamos fazer com essa soma?

Galera, vamos lá! Observe que o enunciado pede o número de funcionários que participam de pelo menos
uma comissão. Isso compreende tudo que está dentro dos diagramas.

                                          𝐴                                  𝐵
                                                 5        𝑦           5
                                                         2
                                                     𝑥            𝑧

                                                          5
                                                                      𝐶


Sendo assim, o que estamos procurando é:

                     𝑇 = 5+5+5+2+𝑥+𝑦+𝑧                            →         𝑇 = 17 + 𝑥 + 𝑦 + 𝑧

Podemos usar a soma “𝑥 + 𝑦 + 𝑧” que determinamos anteriormente.

                                       𝑇 = 17 + 12            →           𝑻 = 𝟐𝟗

Gabarito: LETRA A.

7. (FGV/CM TAUBATÉ/2022) Uma empresa disponibilizou 3 cursos de aperfeiçoamento para seus
funcionários: o Curso A, o Curso B e o Curso C. Como o horário permitia, cada funcionário poderia se
matricular em mais de um curso. Terminado o prazo de matrículas, verificou-se que 8 funcionários se
matricularam no curso A, 10 no curso B e 12 no curso C. Havia 4 funcionários matriculados nos cursos A e
B, 4 funcionários nos cursos B e C e, também, 4 nos cursos A e C. Sabe-se ainda que há 1 único funcionário
matriculado apenas no curso A. O número de funcionários que estão matriculados em ao menos 1 curso
é
a) 19.
b) 21.
c) 23.
d) 27.
e) 30.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             38
        www.estrategiaconcursos.com.br                                                                 56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Comentários:
Vamos resolver esse exercício usando apenas os Diagramas de Venn! O primeiro passo é desenhá-los.

                                          𝐴                                  𝐵

                                                                  𝐶


Nesse momento, devemos inserir as informações que possuímos. Ressalto que essas informações não
podem ser colocadas de qualquer forma no diagrama. Existe uma ordem que deve ser observada!
Começamos inserindo a quantidade referente à intersecção tripla, depois colocamos aquelas referentes às
intersecções duplas e, por fim, aquelas referentes aos conjuntos isoladamente.

Professor, o enunciado não falou quantos alunos se matricularam nos três cursos!

Então vamos chamar essa quantidade de “x”.

                                          𝐴                                  𝐵

                                                         𝑥

                                                                  𝐶


Agora, vamos para as intersecções duplas. O enunciado nos disse que:

- 4 funcionários matriculados nos cursos A e B;
- 4 funcionários nos cursos B e C;
- 4 funcionários nos cursos A e C.

No diagrama, ficamos:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          39
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                   𝐵
                                                          4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


Por fim, vamos analisar as informações sobre cada conjunto. Esse momento é mais delicado! Note que
devemos ter 8 funcionários em A. No nosso desenho até agora, temos:

                                          𝐴                                   𝐵
                                                𝑦         4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


Queremos determinar o “y” para preencher o diagrama. Devemos somar tudo dentro de A e igualar a 8, pois
A deve ter 8 funcionários matriculados (conforme informado na questão).

                                (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑦 = 8             →       𝑦=𝑥

Com isso:

                                          𝐴                                   𝐵
                                                𝑥         4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


Vamos seguir esse mesmo raciocínio para as demais regiões que ainda faltam.

- 10 funcionários no curso B:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          40
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                             𝐵
                                                𝑥                   4−𝑥         𝑧
                                                                    𝑥
                                                    4−𝑥                   4−𝑥

                                                                                𝐶


                            (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑧 = 10                          →       𝑧 = 2+𝑥

- 12 funcionários no curso C:                          ==219a34==

                                          𝐴                                             𝐵
                                                𝑥                   4−𝑥     2+𝑥
                                                                    𝑥
                                                    4−𝑥                   4−𝑥


                                                                     𝑤
                                                                                𝐶


                           (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑤 = 12                           →       𝑤 = 4+𝑥

Pronto! Temos nosso diagrama esquematizado e preenchido!

                                          𝐴                                             𝐵
                                                𝑥                   4−𝑥     2+𝑥
                                                                    𝑥
                                                    4−𝑥                   4−𝑥


                                                                    4+𝑥
                                                                                𝐶


Agora vem uma informação superimportante: há 1 único funcionário matriculado apenas no curso A.

Qual região do diagrama representa exatamente esse grupo?

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            41
        www.estrategiaconcursos.com.br                                                                56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                    𝐵
                                                 𝑥         4−𝑥        2+𝑥
                                                           𝑥
                                                     4−𝑥         4−𝑥


                                                           4+𝑥
                                                                       𝐶


Logo,

                                                          𝑥=1

Com o valor de “x”, podemos usá-lo em todo diagrama.

                                          𝐴                                    𝐵
                                                1           3          3
                                                           1
                                                      3           3


                                                            5
                                                                       𝐶


Como a questão pede o número de funcionários matriculados em pelo menos um curso, basicamente
queremos a soma dos valores em todas as regiões.

                            𝑇 =1+3+1+3+3+3+5                               →       𝑻 = 𝟏𝟗

Gabarito: LETRA A.

8. (FGV/SEJUSP-MG/2022) Um grupo de 60 estudantes que se formaram juntos no Ensino Médio resolveu
formar 2 grupos no WhatsApp: GP1 e GP2. Sabe-se que dos 60 estudantes, 7 resolveram não participar do
GP1 nem do GP2 e que os números de participantes do GP1 e do GP2 são, respetivamente, 41 e 32. O
número de estudantes que participam simultaneamente dos dois grupos é
a) 7.
b) 13.
c) 20.
d) 23.
e) 32.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        42
        www.estrategiaconcursos.com.br                                                            56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Comentários:
Vamos aproveitar essa questão para treinar um pouco a fórmula do Princípio da Inclusão-Exclusão.
Inicialmente, note que temos 60 estudantes, mas 7 deles não participaram de qualquer dos grupos. Com
isso, podemos escrever que:

                          𝑛(𝐺𝑃1 ∪ 𝐺𝑃2) = 60 − 7            →       𝑛(𝐺𝑃1 ∪ 𝐺𝑃2) = 53

Além disso, como o número de participantes dos grupos GP1 e GP2 são, respectivamente, 41 e 32, então:

                                    𝑛(𝐺𝑃1) = 41           𝑒      𝑛(𝐺𝑃2) = 32

Pronto! Agora, vamos escrever a fórmula.

                           𝑛(𝐺𝑃1 ∪ 𝐺𝑃2) = 𝑛(𝐺𝑃1) + 𝑛(𝐺𝑃2) − 𝑛(𝐺𝑃1 ∩ 𝐺𝑃2)

A questão pede o número de estudantes que participam simultaneamente dos dois grupos. Logo, queremos
determinar 𝑛(𝐺𝑃1 ∩ 𝐺𝑃2). Para isso, vamos substituir as informações que temos na fórmula acima.

                                        53 = 41 + 32 − 𝑛(𝐺𝑃1 ∩ 𝐺𝑃2)

                                           𝑛(𝐺𝑃1 ∩ 𝐺𝑃2) = 73 − 53

                                              𝒏(𝑮𝑷𝟏 ∩ 𝑮𝑷𝟐) = 𝟐𝟎

Gabarito: LETRA C.

9. (FGV/SEJUSP-MG/2022) Os conjuntos A, B e C possuem, cada um, 10 elementos e são tais que: A e B
possuem elementos em comum, B e C possuem elementos em comum, mas A e C não possuem elementos
comuns. Entre os elementos da união dos três conjuntos sabe-se que 8 elementos pertencem apenas ao
conjunto A e 5 elementos pertencem apenas ao conjunto C. O número de elementos que pertencem
apenas ao conjunto B é
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.

Comentários:
Questão boa, vamos resolvê-la utilizando diagramas. Para começar, temos:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          43
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                  𝐵

                                                                  𝐶


Ora, se A e C não possuem elementos em comum, já podemos escrever:

                                          𝐴                                  𝐵

                                                         0
                                                     0


                                                                  𝐶


Como 8 elementos pertencem apenas ao conjunto A:

                                          𝐴                                  𝐵
                                                 8
                                                         0
                                                     0


                                                                  𝐶


Ainda, sabemos que 5 elementos pertencem apenas ao conjunto C:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático       44
        www.estrategiaconcursos.com.br                                           56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                  𝐵
                                                 8
                                                         0
                                                     0

                                                          5
                                                                   𝐶


Pronto, esse é o diagrama inicial que conseguimos desenhar com as informações que o enunciado passou.

Agora, nas regiões que não temos informações, vamos colocar algumas incógnitas.

                                          𝐴                                  𝐵
                                                 8       𝑦         𝑥
                                                         0
                                                     0         𝑧

                                                          5
                                                                   𝐶


Observe que a questão pede o número de elementos que pertencem apenas ao conjunto B. No nosso
diagrama, esse número corresponde a “x”. Para encontrá-lo, vamos usar a informação que cada conjunto
possui 10 elementos. Sendo assim, podemos escrever que:

                       8 + 𝑦 + 0 + 0 = 10            →        8 + 𝑦 = 10         →   𝑦=2

                         5 + 𝑧 + 0 + 0 = 10          →     5 + 𝑧 = 10            →   𝑧=5

                     𝑥 + 𝑦 + 𝑧 + 0 = 10          →       𝑥 + 2 + 5 = 10          →    𝒙=𝟑

Gabarito: LETRA C.

10. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em
relação a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          45
        www.estrategiaconcursos.com.br                                                              56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

E) é possível que nenhuma delas seja capixaba torcedor do Vasco.

Comentários:
Galera, esse tipo de questão está muito comum nas provas da FGV. Logo, preste bem atenção no que
desenvolveremos aqui! Vou resolver de duas formas com vocês, ok? Uma forma mais qualitativa e outra
forma usando diagramas. Inicialmente, vamos perceber o seguinte:

1) São 70 pessoas. 50 são capixabas. Logo, teremos 20 pessoas que não são capixabas.

2) São 70 pessoas. 40 torcedores do Vasco. Logo, teremos 30 pessoas que não são torcedoras do Vasco.

Beleza até aqui, pessoal?!

Agora, imagine que você queira saber a quantidade máxima de pessoas não são capixabas e não são
torcedoras do Vasco.

Essa situação extrema aconteceria se todas as 20 pessoas que não são capixabas também não torcessem
para o Vasco. Logo, nosso "máximo" procurado é 20 pessoas. Guarde essa conclusão: no máximo, podemos
ter 20 pessoas que não são capixabas nem torcedores do Vasco.

Da mesma forma, imagine que você queira saber o oposto do que vimos acima. No caso, seria a quantidade
máxima de pessoas que são capixabas e torcem para o Vasco.

Essa outra situação extrema aconteceria se todos os 40 torcedores do Vasco também fossem capixabas. É
importante perceber que o "40" é o número limitante aqui. Note que não poderíamos ter que todos os 50
capixabas fossem torcedores do Vasco, pois o enunciado é claro ao informar que são apenas 40 torcedores
do Vasco.

Com essas duas observações, vamos comentar as alternativas.
A) no máximo 20 são capixabas torcedores do Vasco.
Errado. Podemos ter até 40 capixabas torcedores do Vasco.

B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
Errado. O correto seria "no máximo" ao invés de "no mínimo".

C) exatamente 30 são capixabas não torcedores do Vasco.
Errado. O enunciado não fornece informações suficientes para concluirmos "exatamente". Com o que foi
passado, podemos apenas fazer considerações sobre quantidades máximas e/ou mínimas.

D) no máximo 40 são capixabas torcedores do Vasco.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             46
        www.estrategiaconcursos.com.br                                                                 56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Correto, foi uma das conclusão que chegamos com a resolução do exercício.

E) é possível que nenhuma delas seja capixaba torcedor do Vasco.
Errado. Isso seria verdade se a soma das duas quantidades fosse inferior a 70.

Feita essa primeira resolução, vamos desenhar uns diagramas para entender o problema sobre um outro
ângulo!

                                                                                     𝑃
                                          𝐶                         𝑉

                                           50 − 𝑥      𝑥       40 − 𝑥


                                                                             𝑦


"C" é o conjunto dos capixabas, "V" é o conjunto dos torcedores do Vasco, "P" é o conjunto formado por
todas as 70 pessoas (é o conjunto universo). Além disso, temos que "x" denota todas as pessoas que são
capixabas e torcem para o Vasco. Por sua vez, "y" é exatamente o contrário, ele denota a quantidade de
pessoas que não são capixabas e não são torcedores do Vasco.

Como o enunciado falou que o total de pessoas é 70, quando somamos todas essas quantidades destacadas
no diagramas, devemos ter exatamente essas 70 pessoas.

            (50 − 𝑥) + 𝑥 + (40 − 𝑥) + 𝑦 = 70               →      𝑦 − 𝑥 = 20             →    𝑥 = 20 + 𝑦

Note que "x" é tanto maior quanto for "y". Assim, quando "y" for máximo "x" também será.

No começo da solução vimos que a quantidade máxima de pessoas que não podem ser capixabas nem
torcerem para o Vasco é 20. Sendo assim, o valor máximo para "x", que é a quantidade de pessoas que são
capixabas e torcedoras do Vasco é de:

                   𝑥𝑚𝑎𝑥 = 20 + 𝑦𝑚𝑎𝑥           →      𝑥𝑚𝑎𝑥 = 20 + 20              →       𝑥𝑚𝑎𝑥 = 40

Logo, no máximo, podemos ter 40 pessoas que são capixabas e torcedoras do Vasco.

Gabarito: LETRA D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 47
        www.estrategiaconcursos.com.br                                                                     56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                               LISTA DE QUESTÕES - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
tem apenas um elemento, ela é dita um conjunto unitário. Um exemplo de conjunto unitário é a coleção
formada pelos números que são:
a) ao mesmo tempo, divisores de 4 e 9;
b) divisores de 4;
c) divisores de 9;
d) maiores que 4 e menores que 9;
e) formados pelos algarismos 4 e 9.
                                                       ==219a34==

2. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;
c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

3. (FGV/CODEBA/2010) Sejam 𝑨 = {𝟎, 𝟏, 𝟐, 𝟑} e 𝑩 = {𝟎, 𝟐, 𝟒} dois conjuntos. Com relação aos conjuntos
A e B, analise as afirmativas a seguir:

I. 𝑩 ⊂ 𝑨
II. 𝑨 ∪ 𝑩 = {𝟎, 𝟏, 𝟐, 𝟑, 𝟒}
III. 𝑨 ∩ 𝑩 = {𝟎, 𝟐}

Está(ão) correta(s) somente
a) I.
b) II.
c) III.
d) I e II.
e) II e III.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        48
        www.estrategiaconcursos.com.br                                                            56

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                              GABARITO
 1. LETRA A
 2. LETRA C
 3. LETRA E

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   49
      www.estrategiaconcursos.com.br                                       56

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                               LISTA DE QUESTÕES - FGV

União, Intersecção, Complementar e Diferença

1. (FGV/BANESTES/2023) Sejam A e B dois conjuntos finitos tais que 𝑨 ∪ 𝑩 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕} e {𝟏, 𝟐, 𝟓}
é o conjunto de elementos que estão em A e não estão em B. O conjunto dos elementos que não estão em
A ou estão em B é
A) {3, 4}.
B) {3, 6}.
C) {3, 4, 6}.
D) {4, 6, 7}.
                                                       ==219a34==

E) {3, 4, 6, 7}.

2. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

- A união de A e B tem 130 elementos.
- A diferença B – A tem 50 elementos.
- A diferença A – B tem 60 elementos.

Sendo x o número de elementos de A e y o número de elementos de B, o valor de x + y é igual a
A) 110.
B) 120.
C) 130.
D) 140.
E) 150.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               50
        www.estrategiaconcursos.com.br                                                                   56

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                              GABARITO
 1. LETRA E
 2. LETRA E
 3.

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   51
      www.estrategiaconcursos.com.br                                       56

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                               LISTA DE QUESTÕES - FGV

Princípio da Inclusão-Exclusão

1. (FGV/PM-SP/2023) Em um conjunto de 20 objetos, 12 têm a característica A e 9 têm a característica B.
Apenas 3 dos objetos não possuem nem a característica A, nem a característica B. Assim, a quantidade de
objetos desse conjunto que possuem simultaneamente as características A e B é igual a
A) 1.
B) 2.
C) 3.
D) 4.

2. (FGV/MPE-SP/2023) Em um grupo de 55 pessoas, 32 jogam pôquer, 36 jogam truco, 34 jogam buraco,
18 jogam pôquer e truco, 21 jogam truco e buraco e 20 jogam buraco e pôquer. Se há, no grupo, uma única
pessoa que não joga quaisquer desses três jogos de cartas, então a quantidade de pessoas que jogam esses
três jogos é
A) 12.
B) 11.
C) 9.
D) 7.
E) 6.

3. (FGV/SEFAZ-MG/2023) Sobre 3 conjuntos 𝐴, 𝐵 e 𝐶, sabe-se que:

𝐴 tem 16 elementos;
𝐵 tem 24 elementos;
𝐶 tem 18 elementos;
𝐴 ∩ 𝐵 tem 5 elementos;
𝐵 ∩ 𝐶 tem 7 elementos;
𝐴 ∩ 𝐵 ∩ 𝐶 tem 3 elementos;
𝐴 − (𝐵 ∪ 𝐶) tem 8 elementos.

O número de elementos do conjunto 𝐴 ∪ 𝐵 ∪ 𝐶 é igual a
a) 35.
b) 43.
c) 47.
d) 48.
e) 58.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           52
        www.estrategiaconcursos.com.br                                                               56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

4. (FGV/SENADO FEDERAL/2022) Um clube tem 180 associados que participam de suas duas atividades
sociais. Há 130 frequentadores da cinemateca, enquanto 92 sócios participam das aulas de dança de salão.
Sendo assim, é correto afirmar que
a) mais de 40 sócios participam das duas atividades.
b) menos de 30 sócios participam das duas atividades.
c) mais de 55 sócios só vão às aulas de dança.
d) menos de 80 sócios só vão à cinemateca.
e) menos de 45 sócios só vão às aulas de dança.

5. (FGV/CM TAUBATÉ/2022) Em uma assembleia com 172 votantes, duas propostas independentes, A e B,
foram colocadas em votação. Cada votante votou a favor ou contra cada uma das duas propostas. Sabe-
se que 138 votaram a favor da proposta A, 74 votaram a favor da proposta B e 32 votaram contra as duas
propostas. O número de votantes que votaram a favor da proposta A e contra a proposta B é
                                                       ==219a34==

a) 66.
b) 69.
c) 72.
d) 74.
e) 140.

6. (FGV/CM TAUBATÉ/2022) A prefeitura de certo município formou com seus funcionários 3 comissões
para examinar assuntos diferentes. Sabe-se que:

- há funcionários que participam de mais de uma comissão.
- cada comissão é formada por 15 funcionários.
- em cada comissão há 5 funcionários que não participam de mais nenhuma outra comissão.
- há 2 funcionários que participam das três comissões.

O número de funcionários que participam de, pelo menos, uma comissão é igual a
a) 29.
b) 31.
c) 36.
d) 39.
e) 43.

7. (FGV/CM TAUBATÉ/2022) Uma empresa disponibilizou 3 cursos de aperfeiçoamento para seus
funcionários: o Curso A, o Curso B e o Curso C. Como o horário permitia, cada funcionário poderia se
matricular em mais de um curso. Terminado o prazo de matrículas, verificou-se que 8 funcionários se
matricularam no curso A, 10 no curso B e 12 no curso C. Havia 4 funcionários matriculados nos cursos A e
B, 4 funcionários nos cursos B e C e, também, 4 nos cursos A e C. Sabe-se ainda que há 1 único funcionário

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             53
        www.estrategiaconcursos.com.br                                                                 56

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

matriculado apenas no curso A. O número de funcionários que estão matriculados em ao menos 1 curso
é
a) 19.
b) 21.
c) 23.
d) 27.
e) 30.

8. (FGV/SEJUSP-MG/2022) Um grupo de 60 estudantes que se formaram juntos no Ensino Médio resolveu
formar 2 grupos no WhatsApp: GP1 e GP2. Sabe-se que dos 60 estudantes, 7 resolveram não participar do
GP1 nem do GP2 e que os números de participantes do GP1 e do GP2 são, respetivamente, 41 e 32. O
número de estudantes que participam simultaneamente dos dois grupos é
a) 7.
b) 13.
c) 20.
d) 23.
e) 32.

9. (FGV/SEJUSP-MG/2022) Os conjuntos A, B e C possuem, cada um, 10 elementos e são tais que: A e B
possuem elementos em comum, B e C possuem elementos em comum, mas A e C não possuem elementos
comuns. Entre os elementos da união dos três conjuntos sabe-se que 8 elementos pertencem apenas ao
conjunto A e 5 elementos pertencem apenas ao conjunto C. O número de elementos que pertencem
apenas ao conjunto B é
a) 1.
b) 2.
c) 3.
d) 4.
e) 5.

10. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em
relação a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.
E) é possível que nenhuma delas seja capixaba torcedor do Vasco.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        54
        www.estrategiaconcursos.com.br                                                            56

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                              GABARITO
     1.   LETRA D                              5.   LETRA A                9. LETRA C
     2.   LETRA B                              6.   LETRA A                10. LETRA D
     3.   LETRA B                              7.   LETRA A
     4.   LETRA A                              8.   LETRA C

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                 55
      www.estrategiaconcursos.com.br                                                     56

                                  


---

---
