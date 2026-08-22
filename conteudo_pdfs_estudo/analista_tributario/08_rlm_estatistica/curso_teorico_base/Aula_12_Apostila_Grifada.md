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
arquivo_origem: Aula 12_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '12'
titulo_aula: Índice
---

# Índice

Índice
1)  Introdução à Teoria dos Conjuntos


)  União, Intersecção, Complementar e Diferença                                                                                                                                            14

3)  Princípio da Inclusão-Exclusão                                                                                                                                                          26
)  Questões Comentadas - Introdução à Teoria dos Conjuntos - FGV                                                                                                                           39
..............................................................................................................................................................................................

)  Questões Comentadas - União, Intersecção, Complementar e Diferença - FGV                                                                                                                45

6)  Questões Comentadas - Princípio da Inclusão-Exclusão - FGV                                                                                                                              49
..............................................................................................................................................................................................

)  Lista de Questões - Introdução à Teoria dos Conjuntos - FGV                                                                                                                             87

8)  Lista de Questões - União, Intersecção, Complementar e Diferença - FGV                                                                                                                  90
)  Lista de Questões - Princípio da Inclusão-Exclusão - FGV                                                                                                                                92
..............................................................................................................................................................................................


---

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
   • 𝐶 = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}

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
   • 15 ∈ 𝐶 : Lemos: 15 pertence a 𝐶.


---

Atente-se à simbologia! Podemos dizer que um elemento não pertence a um determinado conjunto. Para
isso, utilizamos o símbolo "não pertence": ∉.

   • 𝑧 ∉ 𝐴 : 𝑧 não pertence a 𝐴;
   • 100 ∉ 𝐵 : 100 não pertence a 𝐵;
   • 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜 ∉ 𝐸 : 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜 não pertence a 𝐸.

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
                                                        2    4


---

Nesse caso, temos que {𝑎, 𝑒} ⊄ 𝐵 : Lemos: {𝑎, 𝑒} não está contido em 𝐵 ou {𝑎, 𝑒} não é um subconjunto de
𝐵. Vamos ver mais alguns exemplos de quando um conjunto não está contido em outro:

   •   {𝑎, 𝑒, 𝑓} ⊄ 𝐴
   •   {1, 3, 5} ⊄ 𝐵
   •   {0, 1} ⊄ 𝐶
   •   {𝑆𝑖𝑐𝑟𝑎𝑛𝑜, 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜} ⊄ 𝐸

Perceba que basta um elemento do conjunto não pertencer ao conjunto maior que não poderemos
estabelecer uma relação de inclusão entre os dois conjuntos e, portanto, dizemos que um não está contido
no outro. Pessoal, se {𝒂, 𝒆} está contido em 𝑨, então também podemos dizer que 𝑨 contém {𝒂, 𝒆}. Quando
queremos expressar essa ideia de que um conjunto maior contém determinado subconjunto, utilizamos o
símbolo ⊃.

   • 𝐴 ⊃ {𝑎, 𝑒} : 𝐴 contém {𝑎, 𝑒}
   • 𝐵 ⊃ {0, 2, 8} : 𝐵 contém {0, 2, 8}
   • 𝐶 ⊃ {1, 3, 5, 19} : 𝐶 contém {1, 3, 5, 19}
   • 𝐸 ⊃ {𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜, 𝐸𝑑𝑢𝑎𝑟𝑑𝑜} : 𝐸 contém {𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜, 𝐸𝑑𝑢𝑎𝑟𝑑𝑜}

Analogamente, podemos estender o raciocínio para quando queremos dizer que determinado conjunto não
contém outro. Nessas situações, utilizamos ⊅.

   • 𝐴 ⊅ {𝑎, 𝑒, 𝑓} : 𝐴 não contém {𝑎, 𝑒, 𝑓}
   • 𝐶 ⊅ {0, 1} : 𝐶 não contém {0, 1}
   • 𝐸 ⊅ {𝑆𝑖𝑐𝑟𝑎𝑛𝑜, 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜} -- 𝐸 não contém {𝑆𝑖𝑐𝑟𝑎𝑛𝑜, 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜}

                                                                             𝐸
                                          𝐵                               𝐷𝑗𝑒𝑓𝑓𝑒𝑟𝑠𝑜𝑛
          𝐴
                                      0        2                          𝐸𝑑𝑢𝑎𝑟𝑑𝑜         𝑆𝑖𝑐𝑟𝑎𝑛𝑜
          𝑏       𝑎                                       1
                         𝑓
                                                              5           𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜
                                      4        6                                         𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜
          𝑐       𝑒                                       3               𝐿𝑢𝑎𝑛𝑎
                                           8
              𝑑                                                           𝑉𝑖𝑛í𝑐𝑖𝑢𝑠

         𝐴 ⊅ {𝑎, 𝑒, 𝑓}                    𝐵 ⊅ {1, 3, 5}             𝐸 ⊅ {𝑆𝑖𝑐𝑟𝑎𝑛𝑜, 𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜}


---

(PREF. DE PINHAIS/2019) Considerando os conjuntos 𝐴 = {1, 2, 4, 5, 6, 7, 8}, 𝐵 = {1, 3, 4, 5, 6, 9, 10} e 𝐶 =
{1, 2, 3, 4, 5, 6, 7, 8}, assinale a alternativa CORRETA:
A) O conjunto A está contido no conjunto B.
B) O conjunto B está contido no conjunto A.
C) O conjunto C está contido no conjunto B.
D) O conjunto C está contido no conjunto A.
E) O conjunto A está contido no conjunto C.

Comentários:

                                         𝑪 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕, 𝟖}

Observe que os elementos destacados em vermelho são exatamente todos os elementos do conjunto A.
Perceba, portanto, que A está contido em C. Para facilitar a visualização, veja o diagrama a seguir.

Gabarito: Letra E.

Igualdade entre Conjuntos
Pessoal, dois conjuntos são considerados iguais (ou idênticos) se eles possuem exatamente os mesmos
elementos! Todo elemento que estiver em um deve necessariamente estar no outro. Por exemplo, considere
os conjuntos 𝐴 = {1, 2, 3} e 𝐵 = {3, 2,1}. Nessa situação, podemos escrever que 𝐴 = 𝐵.

Professor, mas a ordem está diferente!

Não importa! O importante é que todos elementos de A são os mesmos elementos de B.


---

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

Com isso, observe que podemos ter duas situações.

1ª situação) 𝑥 = 0 e 𝑦 = 8

2ª situação) 𝑥 = 8 e 𝑦 = 0

Sabendo disso, vamos analisar as alternativas.

A) 𝑥 = 0 e 𝑦 = 8
Errado. Essa é a nossa primeira situação, que não é necessariamente verdade. Também é uma possibilidade
o caso em que 𝑥 = 8 e 𝑦 = 0.

B) 𝑥 + 𝑦 = 8
Correto. Esse é nosso gabarito, pessoal. Verifique que independentemente da situação, sempre vamos ter
𝑥 + 𝑦 = 8. Afinal, sempre um vai ser 0 (zero) e o outro será 8 (oito), de forma que a soma é sempre 8 (oito).

C) 𝑥 < 𝑦
Errado. Essa afirmação é verdade apenas para a primeira situação. Como podemos ter o caso em que 𝑥 = 8
e 𝑦 = 0, tem-se também que 𝑥 pode ser maior que 𝑦.

D) 𝑥 + 2𝑦 = 8
Errado. Essa equação é válida apenas para a segunda situação. No caso em que 𝑥 = 0 e 𝑦 = 8, já é possível
verificar que ela é inválida.

Gabarito: LETRA B.


---

Subconjuntos
Vamos aprofundar um pouco o nosso estudo sobre os subconjuntos. Para começar, tente dizer quais são os
subconjuntos do conjunto 𝐴 = {𝑎, 𝑏}. Pronto? Observe como fica:

                                    Conjunto           Subconjuntos
                                                              ∅
                                                             {𝑎}
                               𝐴 = {𝑎, 𝑏}                    {𝑏}
                                                            {𝑎, 𝑏}

A tabela acima lista todos os subconjuntos que podemos formar utilizando o conjunto 𝐴. Sabendo disso,
podemos escrever as seguintes relações:

   • ∅ ⊂𝐴                                                • {𝑏} ⊂ 𝐴
   • {𝑎} ⊂ 𝐴                                             • {𝑎, 𝑏} ⊂ 𝐴

Devemos falar um pouco do conjunto vazio e conjunto unitário. O conjunto vazio, como o próprio nome
sugere, é um conjunto que não possui elementos! É representado por meio do símbolo ∅ mas também
pode aparecer como um simples par de chaves { }. Já o conjunto unitário é todo conjunto que possui um
único elemento!
                           O conjunto vazio é subconjunto de qualquer outro conjunto.

                                             Seja 𝑋 um conjunto genérico, então:

                                            ∅⊂𝑿             𝑜𝑢             {}⊂𝑿
Observe que {𝑎, 𝑏} ⊂ 𝐴, indicando que qualquer conjunto é também um subconjunto de si mesmo! Seja
𝐵 = {𝑎, 𝑏, 𝑐}. Vamos listar os seus subconjuntos também?

                                    Conjunto              Subconjuntos
                                                                     ∅
                                                                   {𝑎}
                                                                   {𝑏}
                                                                   {𝑐}
                            𝐵 = {𝑎, 𝑏, 𝑐}                         {𝑎, 𝑏}
                                                                  {𝑎, 𝑐}
                                                                  {𝑏, 𝑐}
                                                               {𝑎, 𝑏, 𝑐}


---

Quando um subconjunto de B é diferente do próprio B, chamamos ele de subconjunto próprio de B. Por
exemplo, {𝑎}, {𝑏}, {𝑐}, {𝑎, 𝑏}, {𝑎, 𝑐} são subconjuntos próprios de B. Já o subconjunto {𝑎, 𝑏, 𝑐} é denominado
impróprio pois é igual ao próprio B! Com os conjuntos listados na tabela acima são subconjuntos de 𝐵, então
podemos escrever:

               •   ∅ ⊂𝐵                                                  •   {𝑎, 𝑏} ⊂ 𝐵
               •   {𝑎} ⊂ 𝐵                                               •   {𝑎, 𝑐} ⊂ 𝐵
               •   {𝑏} ⊂ 𝐵                                               •   {𝑏, 𝑐} ⊂ 𝐵
               •   {𝑐} ⊂ 𝐵                                               •   {𝑎, 𝑏, 𝑐} ⊂

Pessoal, observe que os subconjuntos de um conjunto são apenas diferentes combinações de seus
elementos. Portanto, se você precisar listar os subconjuntos, siga os seguintes passos:

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


---

Como o conjunto 𝐶 só possui 3 elementos, encerramos por aqui! Listamos todos os subconjuntos dele.
Observe que quando tínhamos um conjunto com 2 elementos, obtivemos 4 subconjuntos. Ao aumentar um
elemento no conjunto, passamos a ter 8 subconjuntos. Será que é possível estabelecer uma fórmula para
calcular o número de subconjuntos baseado na quantidade de elementos de um conjunto?

É possível sim e a fórmula é bem simples. Seja 𝒏(𝑨) o número de elementos de um conjunto 𝑨. Então, o
número de subconjuntos de 𝑨, 𝒏𝑺𝑨 , é dado por:

                                            𝑛𝑆𝐴 = 2𝑛(𝐴)
Por exemplo, vamos voltar no conjunto 𝐶 = {1, 2, 3}. Como ele tem três elementos, para encontrar o
número de subconjuntos de C, fazemos assim:

                    𝑛𝑆𝐶 = 2𝑛(𝐶)           →         𝑛𝑆𝐶 = 23           →        𝑛𝑆𝐶 = 8
Logo, C tem oito subconjuntos.

(Polícia Federal/2021) Considere os seguintes conjuntos:

P = {todos os policiais federais em efetivo exercício no país}
P1 = {policiais federais em efetivo exercício no país e que têm até 1 ano de experiência no exercício do cargo}
P2 = {policiais federais em efetivo exercício no país e que têm até 2 anos de experiência no exercício do cargo}
P3 = {policiais federais em efetivo exercício no país e que têm até 3 anos de experiência no exercício do cargo}

e, assim, sucessivamente. Com base nessas informações, julgue o item que se seguem.

P2 é subconjunto de P1.

Comentários
Galera, para que 𝑃2 seja um subconjunto de 𝑃1 , 𝑷𝟐 precisa estar contido em 𝑷𝟏 . De acordo com o enunciado,
𝑃2 representa os policiais federais em exercício no país com até 2 anos de experiência, enquanto 𝑃1 são
aqueles com até 1 ano de experiência.

Observe que um policial que possuísse um ano e meio de experiência, pertenceria a 𝑃2 , mas não a 𝑃1 . Logo,
não podemos dizer que 𝑃2 é um subconjunto de 𝑃1 , uma vez que podem existir elementos em 𝑃2 que não
estejam em 𝑃1 .

Gabarito: ERRADO.


---

(IDAF-AC/2020) Quantos subconjuntos possui o conjunto das vogais?
A) 10
B) 25
C) 32
D) 50

Comentários
Seja 𝑽 o conjunto formado por todas as vogais, então temos que: 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢}

O conjunto acima possui 5 elementos, sabemos que o número de subconjuntos de um conjunto depende da
quantidade de elementos e é dado através de uma fórmula.

                      𝑛𝑆𝑉 = 2𝑛(𝑉)       →       𝑛𝑆𝑉 = 25       →       𝑛𝑆𝑉 = 32

Gabarito: Letra C.

Conjunto das Partes
Você sabia que podemos juntar todos os subconjuntos de um conjunto para formar um novo conjunto?
Esse novo conjunto formado é denominado conjunto das partes e é representado pelo símbolo ℘. Por
exemplo, os conjuntos das partes de 𝐴 = {𝑎, 𝑏} e de 𝐵 = {𝑎, 𝑏, 𝑐} são:


                                   ℘(𝐴) = {{ }, {𝑎}, {𝑏}, {𝑎, 𝑏}}
                     ℘(𝐵) = {{ }, {𝑎}, {𝑏}, {𝑐}, {𝑎, 𝑏}, {𝑎, 𝑐}, {𝑏, 𝑐}, {𝑎, 𝑏, 𝑐}}

Observe que ℘(𝐴) e ℘(𝐵) são conjuntos formados por outros conjuntos! Note ainda que a sua quantidade
de elementos é exatamente a quantidade de subconjuntos calculada pela fórmula 𝒏𝑺𝑨 = 𝟐𝒏(𝑨) . Um outro
ponto que chamamos atenção é que, no conjunto das partes, listamos o conjunto vazio { } explicitamente
com um dos seus elementos.

(PREF. PETROLINA/2019) Dado um conjunto A, representa-se por ℘(𝐴) o conjunto formado por todos os
subconjuntos de A – o chamado conjunto das partes que também costuma ser representado por 2𝐴 . Se 𝐴 =
{𝜙, {𝜙}, 1, {1}}, qual das alternativas seguintes NÃO é elemento de ℘(𝐴)?
A) 𝜙
B) {𝜙, 1}
C) {1, {𝜙, 1}}
D) {𝜙, {𝜙}}


---

E) {1, {1}}

Comentários:
O jeito mais imediato de resolver a questão é listar todos os subconjuntos de 𝑨. Perceba que teremos 24 =
𝟏𝟔 subconjuntos. Para nos auxiliar, vamos usar uma tabela. Vale também destacar que 𝝓 representa o
conjunto vazio e você deve lembrar que o conjunto vazio é sempre subconjunto de qualquer conjunto.

Ao listar os subconjuntos do conjunto 𝐴, percebemos que apenas o conjunto {𝟏, {𝝓, 𝟏}} não é elemento de
℘(𝐴). Isso acontece, pois, o conjunto {𝝓, 𝟏} não é elemento de A.

Gabarito: Letra C.

Observe o conjunto 𝐹 exemplificado abaixo.

                             𝐹 = {1, 2, 3, {𝑎, 𝑏, 𝑐}, {𝑑, 𝑒, 𝑓}, {𝑊} }
Assim como o conjunto das partes, 𝑭 é um conjunto que possui como elemento outros conjuntos. Note que
o conjunto {𝒂, 𝒃, 𝒄} é um elemento de 𝑭. Nessas situações, e somente nelas, podemos escrever {𝒂, 𝒃, 𝒄} ∈
𝑭. Galera, muita atenção aqui! {𝒂, 𝒃, 𝒄} não é um subconjunto de F, é um elemento! Perceba que ele está
listado juntamente com os demais elementos!

              •   1∈𝐹                                             •   {𝑎, 𝑏, 𝑐} ∈ 𝐹
              •   2∈𝐹                                             •   {𝑑, 𝑒, 𝑓} ∈ 𝐹
              •   3∈𝐹                                             •   {𝑊} ∈ 𝐹

E nesses casos, quando usaremos a relação de inclusão? Veja alguns exemplos de subconjuntos de F:


---

          •    {1} ⊂ 𝐹                                            •   {{𝑎, 𝑏, 𝑐, }} ⊂ 𝐹
          •    {1, 2} ⊂ 𝐹                                         •   {{𝑊}} ⊂ 𝐹
          •    {1, 2, 3} ⊂ 𝐹                                      •   {{𝑎, 𝑏, 𝑐, }, {𝑑, 𝑒, 𝑓}, {𝑊}} ⊂ 𝐹

Observe que, para representar os subconjuntos que contém outros conjuntos, utilizamos, sem problema
algum, dois pares de chaves. Tenha bastante cuidado em questões que tragam esse tipo de abordagem! Já
vi muitas bancas se enrolarem ao cobrar questões com essa temática, pois desconhecem que conjuntos
podem sim ser elementos de outros conjuntos e que podemos estabelecer uma relação de pertinência
nessas situações.

(PREF. JEQUIÉ/2018) Considerando o conjunto 𝐴 = {Ω, Δ, {Δ}} qual das afirmações abaixo não está correta?
A) Ω ∈ A
B) Ω ⊂ A
C) {Δ} ⊂ 𝐴
D) {Δ} ∈ 𝐴

Comentários:
                                           Δ ∈ A;
Os elementos de 𝐴 são: Δ, {Δ} e Ω. Logo: {{Δ} ∈ 𝐴;
                                           Ω ∈ A.

Essa pequena análise permite concluir que as alternativas A e D estão corretas e, portanto, não podem ser
nosso gabarito, já que ele procura a alternativa incorreta. Observe que como 𝚫 é um elemento de 𝑨, então
podemos dizer que {𝚫} é um subconjunto de 𝑨.

Dessa forma, é também correto escrever que {Δ} ⊂ A. Opa, espere aí, professor! Então podemos dizer nessa
situação que {𝛥} ⊂ 𝐴 e {𝛥} ∈ 𝐴? Isso! Essa conclusão somente é válida pois 𝚫 e {𝚫} são elementos de um
mesmo conjunto!

Ao escrever que {𝚫} ⊂ 𝐀 estamos nos referindo ao subconjunto {𝚫} que existe pois 𝚫 é um elemento de
𝑨. Quando escrevemos {𝚫} ∈ 𝑨, estamos nos referindo ao elemento {𝚫}, que é explicitamente declarado.
O subconjunto associado ao elemento {Δ} é representado com mais um par de chaves: {{Δ}}. Nessa situação,
dizemos que {{Δ}} ⊂ 𝐴.

Com isso, a única alternativa que pode estar errada é a letra B, pois 𝛀 é um elemento de A e, portanto, o
correto seria 𝛀 ∈ 𝐀.


---

União, Intersecção, Complementar e Diferença
Representação por Diagramas
Você deve ter visto ao longo da aula que apareceram alguns conjuntos na forma de diagramas. Esse tipo de
representação é extremamente útil na resolução de questões, pois possibilita uma melhor compreensão do
problema. Por exemplo, seja 𝑨 o conjunto de funcionários de uma determinada empresa.

                                                𝑨
                                        Ana
                                                     Ohara
                                                    Beatriz          Yasmim
                                                       Ítalo

Todos aqueles que estão dentro do conjunto 𝑨 representam funcionários da empresa. Quem está fora, não
é funcionário da empresa. Olhando simplesmente para o diagrama, podemos dizer que:

       •     𝑂ℎ𝑎𝑟𝑎 ∈ 𝐴;                                          •    𝑌𝑎𝑠𝑚𝑖𝑚 ∉ 𝐴;
       •     𝐵𝑒𝑎𝑡𝑟𝑖𝑧 ∈ 𝐴;                                        •    𝐴𝑛𝑎 ∉ 𝐴.
       •     𝐼𝑡𝑎𝑙𝑜 ∈ 𝐴;

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


---

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
𝐷. Logo, o conjunto intersecção será formado apenas pelo elemento 2: 𝑪 ∩ 𝑫 = {𝟐}. Veja mais um exemplo
abaixo.


---

Temos que 𝑋 = {𝐴, 𝐵, 𝐶, 𝐷} e 𝑍 = {𝐵, 𝐶, 𝐷, 𝐸}. São dois conjuntos distintos, mas que possuem alguns
elementos em comum. Os elementos 𝐵, 𝐶 𝑒 𝐷 aparecem nos 2 conjuntos e formam o conjunto intersecção:
𝑿 ∩ 𝒁 = {𝑩, 𝑪, 𝑫}. Vamos treinar um pouco esses conceitos?

(PREF. ÂNGULO/2020) Sejam os conjuntos 𝐴 = {0,1,3,5,7}, 𝐵 = {0,2,4,6,8} e 𝐶 = {0,14,15}, assinale a
alternativa correta.
A) 𝐴 ∩ 𝐵 ∩ 𝐶 = {0}
B) 𝐴 ∪ 𝐶 = {1, 3, 5, 7, 14, 15}
C) 𝐵 ∩ 𝐶 = {2, 4, 6, 8, 14, 15}
D) 𝐴 ∪ 𝐵 = {0, 1, 2, 3, 4, 5, 6, 7, 8, 15}

Comentários:
Devemos verificar alternativa por alternativa.

A) 𝐴 ∩ 𝐵 ∩ 𝐶 = {0}
Alternativa correta. Nessa alternativa, devemos buscar a intersecção dos três conjuntos dados no
enunciado. A intersecção é formada pelos elementos que são comuns aos três conjuntos. Por exemplo,
observe que o número 0 pertence tanto ao conjunto 𝑨, 𝑩 e 𝑪. Logo, com certeza o 0 é elemento de 𝐴 ∩
𝐵 ∩ 𝐶. Observe que não há nenhum outro elemento que aparece nos três conjuntos. Com isso, podemos
dizer que, de fato, 𝐴 ∩ 𝐵 ∩ 𝐶 = {0}.

B) 𝐴 ∪ 𝐶 = {1, 3, 5, 7, 14, 15}
Alternativa incorreta. Para obter a união de dois conjuntos, juntamos todos os elementos dos dois
conjuntos e se houver elementos repetidos, basta escrevê-los apenas uma vez, eles não vão contar duas
vezes. Veja, no entanto, que o 𝟎 é elemento de 𝑨 e de 𝑪, mas não aparece no conjunto união dos dois.

C) 𝐵 ∩ 𝐶 = {2,4,6,8,14,15}
Alternativa incorreta. A intersecção representa apenas os elementos em comum entre dois ou mais
conjuntos. Quais são os elementos em comum entre B e C? O número 0 é o único elemento comum aos dois.
Logo, 𝐵 ∩ 𝐶 = {0}.

D) 𝐴 ∪ 𝐵 = {0,1,2,3,4,5,6,7,8,15}
Alternativa incorreta. Note que o conjunto está quase correto, o único erro seria a presença desse elemento
"15". O "15" não faz parte de A nem B, portanto, não pode fazer parte do conjunto que é a união dos dois.
Esse é o erro da alternativa.

Gabarito: Letra A.


---

Quando dois conjuntos possuem elementos em comum, podemos representá-los assim:

Essa região comum representa exatamente a sua intersecção. Os elementos que estão na região em
vermelho abaixo pertencem simultaneamente aos conjuntos A e B.

Caso os conjuntos não possuam elementos em comum, isto é, não haja intersecção entre os dois, nós
vamos chamá-los de disjuntos e os representaremos utilizando círculos afastados um do outro.

(CM MONTE ALTO/2019) Observe o diagrama de conjuntos e considere que há elementos em todas as suas
regiões.


---

A partir dessa disposição, é correto afirmar que
A) há elemento de G que é também elemento de A e C.
B) qualquer elemento que esteja em dois desses conjuntos, certamente pode estar em qualquer um desses
sete conjuntos.
C) qualquer elemento de G, que não esteja em E, certamente estará em A ou em B ou em C
D) qualquer elemento que esteja em três desses conjuntos, certamente está em C e em D.
E) há elemento de G que também é elemento de A, mas não é elemento de B.

Comentários:
Vamos verificar alternativa por alternativa

A) há elemento de G que é também elemento de A e C.
Alternativa incorreta. Observe que 𝐴 e 𝐶 são conjuntos disjuntos, isto é, não possuem elementos em
comum e por isso não há intersecção entre os dois. Se 𝐴 e 𝐶 são conjuntos disjuntos, não pode existir um
elemento em G que seja ao mesmo tempo elemento de A e de C, pois isso implicaria em um elemento
comum aos três simultaneamente.

B) qualquer elemento que esteja em dois desses conjuntos, certamente pode estar em qualquer um desses
sete conjuntos.

Alternativa correta. Todos os conjuntos fazem intersecção com pelo menos um outro conjunto! Dessa
forma, haverá sempre um elemento de qualquer conjunto que também pertencerá a outro!

C) qualquer elemento de G, que não esteja em E, certamente estará em A ou em B ou em C

Alternativa incorreta. Mesmo não estando em 𝐸, um elemento em 𝑮 pode estar somente em 𝑮.
Não podemos afirmar necessariamente que estará em A ou em B ou em C. Veja a região destacada abaixo.

D) qualquer elemento que esteja em três desses conjuntos, certamente está em C e em D.

Alternativa incorreta. 𝐷 só faz intersecção com 𝐸. Desse modo, um elemento de 𝐷 só poder estar, no
máximo, em dois conjuntos.


---

E) há elemento de G que também é elemento de A, mas não é elemento de B.
Alternativa incorreta. Todo elemento de G que também é elemento de A também pertence a B.

Gabarito: Letra B.

Diferença
Existe uma outra operação que é muito importante para a sua prova! Essa operação é a diferença ou, como
também é conhecida, a subtração de conjuntos! O conjunto diferença é representado por 𝑨 − 𝑩 e é
formado por todos os elementos de A que não são elementos de B! Por exemplo, considere os conjuntos:

Observe que 𝐴 = {1, 2, 3, 4, 5, 6} e 𝐵 = {1, 3, 5}. Para encontrar 𝐴 − 𝐵, devemos selecionar os elementos
de 𝑨 que não são elementos de 𝑩! Ou seja, aqueles elementos que são apenas elementos de 𝑨! Observe


---

que 𝐴 e 𝐵 possuem em comum os seguintes elementos: 𝐴 ∩ 𝐵 = {1, 3, 5}. Logo, se 𝐴 = {𝟏, 2, 𝟑, 4, 𝟓, 6},
então o 𝐴 − 𝐵 = {2, 4, 6}. Em diagramas, também é possível representar o conjunto diferença.

Um detalhe importante é que se 𝐴 e 𝐵 são conjuntos disjuntos, então 𝑨 − 𝑩 = 𝑨 𝒆 𝑩 − 𝑨 = 𝑩. Veja como
essa informação pode ser representada:

Vamos fazer alguns exemplos numéricos para visualizar ainda melhor essa última situação.

Considere os conjuntos 𝐴 = {10, 20, 30} e 𝐵 = {40, 50}. Primeiramente, note que os conjuntos são
disjuntos. Mas qual é o motivo mesmo para eles serem disjuntos, professor?

A e B são disjuntos pois não possuem elementos em comum! Nenhum sequer!! São totalmente diferentes
um outro. Tudo bem?! Agora, lembre-se que 𝑨 − 𝑩 é o conjunto de elementos formados por todos os
elementos de A que não são elementos de B.

Ora, nesse nosso exemplo, todos os elementos de A não são elementos de B!! Sendo assim, podemos
escrever que:


                                   𝐴 − 𝐵 = {10, 20, 30} = 𝐴


---

(PREF. LINHARES/2020) Dados os três conjuntos numéricos:

𝐴 = {1,2,3,4,5,6},
𝐵 = {0,2,4,6},
𝐶 = {1,3,5,7,9}.

O resultado de (𝐴 − 𝐵) ∩ 𝐶 é igual a:
A) {1,3,5}
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


---

(PREF. SÃO GONÇALO/2022) Sejam A e B conjuntos definidos da seguinte maneira:

A = {pessoas que moram em São Gonçalo}
B= {pessoas que trabalham em Niterói}

O conjunto A – (A – B) representa o conjunto cujos elementos são pessoas que:
A) moram em São Gonçalo e trabalham em Niterói
B) moram em Niterói e trabalham em São Gonçalo
C) moram em São Gonçalo e não trabalham em Niterói
D) moram em Niterói e não trabalham em São Gonçalo

Comentários:
Você lembra que 𝐴 − 𝐵 é o conjunto formado por todos os elementos de A que não são elementos de B.
Por meio de diagramas, podemos representar esse conjunto como a seguinte região:


                                        𝐴                        𝐵

A questão pede o conjunto 𝐴 − (𝐴 − 𝐵). Vamos encontrá-lo por meio de diagramas.


    𝐴                      𝐵            𝐴                        𝐵         𝐴                          𝐵

            A em azul                         A − B em amarelo                  A − (A − B) em roxo

Com isso, observe que o conjunto 𝑨 − (𝑨 − 𝑩) corresponde exatamente à intersecção dos dois conjuntos.
Se A é composto pelas pessoas que moram em São Gonçalo e B é composto pelas pessoas que trabalham
em Niterói, então 𝐴 − (𝐴 − 𝐵) é o conjunto formado pelas pessoas que moram em São Gonçalo e trabalham
em Niterói.

Gabarito: LETRA A.

Complementar
Quando falamos de um determinado conjunto, normalmente estamos destacando determinado grupo
dentro de um universo maior. Por exemplo, podemos formar um conjunto dos funcionários especializados


---

em RH de uma empresa. Esse grupo de funcionários foi retirado de um conjunto maior: o conjunto formado
por todos os funcionários da empresa. Acompanhe o diagrama abaixo.


                                                    𝑅𝐻                 𝑈

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


                                                    𝑅𝐻                 𝑈

O complementar do conjunto RH é representado pela parte pintada em amarelo. E no nosso exemplo das
letras? Qual o complementar do conjunto formado apenas pelas vogais? Ora, é o conjunto formado por
todas as outras letras que não são vogais, isto é, o conjunto das consoantes! Para determinar o
complementar de qualquer conjunto, é de fundamental importância conseguir identificar qual é o conjunto
universo.


A notação utilizada para representar o complementar de um conjunto 𝑋 é 𝑿𝑪 ou 𝑿   ̅ . Representamos o
conjunto complementar com esse "expoente" 𝐶 ou uma barra em cima. Ademais, podemos definir o
conjunto complementar utilizando o que acabamos de ver sobre conjunto diferença.


---

                                     ̅ = 𝑿𝑪 = 𝑼 − 𝑿
                                     𝑿
Veja que utilizando a definição acima, temos que o conjunto complementar 𝑋 𝐶 é formado por tudo que está
no conjunto universo, mas não está em 𝑿. Vamos fazer algumas questões para aplicar o que acabamos de
ver?

(PREF. NOVO HAMBURGO/2020) A é o conjunto de todas as pessoas que dominam o idioma espanhol e B é
o conjunto de todas as pessoas que dominam o idioma inglês, conforme representado no diagrama:

Com base nessas informações, é correto afirmar que
A) a região I representa o conjunto de todas as pessoas que dominam o idioma inglês, mas não dominam o
idioma espanhol.
B) a região II representa o conjunto de todas as pessoas que dominam os dois idiomas.
C) a região III representa o conjunto de todas as pessoas que dominam o idioma espanhol, mas não dominam
o idioma inglês.
D) a região IV representa o conjunto de todas as pessoas que dominam os dois idiomas.
E) U representa o conjunto de todas as pessoas que não dominam nenhum desses dois idiomas.

Comentários:
Vamos analisar cada uma das alternativas tendo em mente que:

• 𝐴 é o conjunto das pessoas que dominam ESPANHOL;


---

• 𝐵 é o conjunto das pessoas que dominam INGLÊS.

A) a região I representa o conjunto de todas as pessoas que dominam o idioma inglês, mas não dominam o
idioma espanhol.
Alternativa incorreta. A região I representa o conjunto de todas as pessoas que dominam o idioma
ESPANHOL, mas não dominam o idioma INGLÊS.

B) a região II representa o conjunto de todas as pessoas que dominam os dois idiomas.
Alternativa correta. A região comum aos 2 conjuntos representa as pessoas que dominam os dois idiomas.

C) a região III representa o conjunto de todas as pessoas que dominam o idioma espanhol, mas não dominam
o idioma inglês.
Alternativa incorreta. A região III representa o conjunto de todas as pessoas que dominam o idioma INGLÊS,
mas não dominam o idioma ESPANHOL.

D) a região IV representa o conjunto de todas as pessoas que dominam os dois idiomas.
Alternativa incorreta. A região IV é toda área fora dos dois conjuntos. Isso significa que ela representa
aqueles não dominam nenhum dos dois idiomas.

E) U representa o conjunto de todas as pessoas que não dominam nenhum desses dois idiomas.
Alternativa incorreta. 𝑈 é o conjunto universo e representa todos aqueles que dominam ou não os idiomas.

Gabarito: Letra B.


---

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


---

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

                       𝑛(𝑀) = 72             𝑛(𝑋) = 64           𝑛(𝑀 ∩ 𝑋) = 35

Do princípio da inclusão-exclusão, sabemos que:

                                𝑛(𝑀 ∪ 𝑋) = 𝑛(𝑀) + 𝑛(𝑋) − 𝑛(𝑀 ∩ 𝑋)

Substituindo as informações que temos,

                      𝑛(𝑀 ∪ 𝑋) = 72 + 64 − 35          →       𝒏(𝑴 ∪ 𝑿) = 𝟏𝟎𝟏

Note que a união desses dois conjuntos tem 101 pessoas. Por sua vez, o enunciado disse que o número total
de funcionários dessa empresa é 116. Com isso, a quantidade de funcionários que não possuem ensino
médio e não sabem usar o EXCEL é exatamente a diferença entre o total de funcionário e 𝒏(𝑴 ∪ 𝑿). Assim,

                                            116 − 101 = 15

Gabarito: LETRA C.


A verdade é que não precisamos decorar fórmulas para responder questões que envolva esse princípio.
Utilizando um pouco de lógica e diagramas de Venn, podemos encontrar a quantidade de elemento de cada


---

conjunto envolvido em um problema típico de Princípio da Inclusão-Exclusão. Antes disso, quero deixar claro
para vocês o significado de cada uma das regiões no seguinte diagrama:

(CLDF/2018) Em uma escola com 150 alunos, são oferecidos cursos de Inglês e Francês. Conforme um
levantamento, 15 alunos desta escola não estão frequentando estes cursos e 90 frequentam o curso de
Inglês. Se 72 alunos frequentam o curso de Francês, então o número de alunos que frequenta um e somente
um dos cursos é igual a
A) 144.
B) 138.
C) 132.
D) 108.
E) 126.

Comentários:
O conjunto universo da nossa questão é formado pelos 150 alunos da escola. Esses 150 alunos podem fazer
2 cursos ou não fazer nenhum. A primeira informação que temos é que 15 alunos não frequentam nenhum
dos cursos. Em diagramas, podemos representar essa informação da seguinte maneira:


---

Observe que a questão não informou a quantidade de alunos que fazem os dois cursos simultaneamente.
Portanto, vamos chamá-la de x e colocá-la no diagrama.

Se 90 frequentam o curso de inglês, então 90 − 𝑥 frequentam APENAS o curso de inglês. Se 72 alunos
frequentam o curso de Francês, então 72 − 𝑥 frequentam APENAS o curso de Francês.

Nosso diagrama está completamente preenchido. Você concorda que ao somar individualmente as
quantidades acima, deveremos obter o total de alunos dessa escola, isto é, 150?

             (90 − 𝑥) + (72 − 𝑥) + 𝑥 + 15 = 150      →     177 − 𝑥 = 150     →      𝑥 = 27

A questão não quer saber quantos alunos fazem os dois cursos simultaneamente. Ela pede a quantidade de
alunos que fazem APENAS um único curso. Logo,

                                (90 − 𝑥) + (72 − 𝑥) = 63 + 45 = 108

Gabarito: Letra D.

E usando a fórmula? Como ficaria? Seja 𝑰 o conjunto daqueles que fazem o curso de inglês e 𝑭 o conjunto
formado por aqueles que fazem o curso de francês. Se a escola tem 150 alunos e foi dito que 15 alunos não
fazem nenhum dos cursos, então:

                                      𝑛(𝐼 ∪ 𝐹) = 150 − 15 = 135


---

São 135 alunos que fazem pelo menos um dos cursos. A questão diz ainda que: 𝒏(𝑰) = 𝟗𝟎 e 𝒏(𝑭) = 𝟕𝟐.

    𝑛(𝐼 ∪ 𝐹) = 𝑛(𝐼) + 𝑛(𝐹) − 𝑛(𝐼 ∩ 𝐹)     →    135 = 90 + 72 − 𝑛(𝐼 ∩ 𝐹)   →      𝑛(𝐼 ∩ 𝐹) = 27

Com isso, descobrimos que 27 pessoas fazem simultaneamente o curso de inglês e de francês. A questão
pede a quantidade de alunos que fazem apenas um dos cursos. Se 27 dos que fazem inglês também fazem
francês, então 𝟗𝟎 − 𝟐𝟕 = 𝟔𝟑 fazem apenas inglês. Analogamente, 𝟕𝟐 − 𝟐𝟕 = 𝟒𝟓 fazem apenas francês.

                                        63 + 45 = 108 𝑎𝑙𝑢𝑛𝑜𝑠


➢ 3 Conjuntos
Imagine que você tem 3 conjuntos, cada conjunto possui elementos em comum com os outros dois. A
situação mais completa que podemos imaginar está representada pelo diagrama abaixo.

Vamos fazer uma leitura de cada uma das regiões da figura acima?


---

Observe que o número de regiões com três conjuntos aumenta bastante em relação à análise
anteriormente feita com dois. Agora, considere que você conhece a quantidade de elementos de cada um
dos conjuntos cima, isto é, 𝒏(𝑨), 𝒏(𝑩) e 𝒏(𝑪).

Como você faria para encontrar 𝒏(𝑨 ∪ 𝑩 ∪ 𝑪) ? Será que é só somar as três quantidades? A resposta para
essa pergunta é não! Precisamos ter atenção aos elementos que podem pertencer a mais de um conjunto.

Segundo o Princípio da Inclusão- Exclusão, a fórmula geral que permite calcular a quantidade de elementos
de um conjunto formado pela união de outros três é dada por:

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


---

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

(ISS-BH/2022) Uma empresa do ramo de turismo abriu processo para a seleção de agentes de viagens. Dos
180 candidatos inscritos, 12 foram eliminados logo no início do processo por não falarem um segundo
idioma, o que era pré-requisito na seleção. Dos que ficaram, sabe-se que 78 falam inglês, 20 falam inglês e
espanhol, 17 falam inglês e francês, 15 falam francês e espanhol e 5 falam os três idiomas. Sendo assim,
assinale a alternativa correta.
A) A quantidade de candidatos que falam espanhol é igual a quantidade de candidatos que falam francês.
B) 50 candidatos falam somente inglês.


---

C) 46 candidatos falam pelo menos dois idiomas.
D) 49 candidatos falam francês.
E) 126 candidatos falam somente um dos idiomas.

Comentários:
Primeiramente, vamos convencionar algumas coisas. Chamemos de "I" o conjunto formado por aqueles que
falam inglês, de "F" o conjunto formado por aqueles que falam francês e de "E" o conjunto formado por
aqueles que falam espanhol. Dito isso, vamos extrair algumas informações do enunciado.

- 78 falam inglês: 𝑛(𝐼) = 78
- 20 falam inglês e espanhol: 𝑛(𝐼 ∩ 𝐸) = 20
- 17 falam inglês e francês: 𝑛(𝐼 ∩ 𝐹) = 17
- 15 falam francês e espanhol: 𝑛(𝐹 ∩ 𝐸) = 15
- 5 falam os três idiomas: 𝑛(𝐹 ∩ 𝐸 ∩ 𝐼) = 5
- 12 não falam um segundo idioma.

Agora, vamos passar essas informações para um diagrama.


                                          𝐼                           𝐸

                                                        15
                                              46                  𝑒
                                                        5
                                                   12        10


                                                         𝑓
                                     12                           𝐹


Observe que existem algumas quantidades que não conseguimos determinar pois o enunciado não nos
forneceu essas informações de forma direta. "e" representa quantas pessoas falam apenas espanhol (como
segundo idioma) e "f", quantas falam apenas francês (como segundo idioma). Ademais, sabemos que
quando somamos todas essas regiões, devemos ter o total de candidatos (180).

                   46 + 5 + 15 + 12 + 10 + 𝑒 + 𝑓 + 12 = 180               →   𝑒 + 𝑓 = 80

Com essas informações, vamos analisar as alternativas.
A) A quantidade de candidatos que falam espanhol é igual a quantidade de candidatos que falam francês.
Errado. Não temos informações suficientes que nos permitam concluir isso.

B) 50 candidatos falam somente inglês.


---

Errado. Pelo diagrama que desenhamos, vemos que 46 candidatos falam apenas inglês.

C) 46 candidatos falam pelo menos dois idiomas.
Errado. Vamos destacar no diagrama as regiões de interesse.


                                         𝐼                           𝐸

                                                       15
                                             46                  𝑒
                                                       5
                                                  12        10


                                                        𝑓
                                    12                           𝐹

Assim, a quantidade de candidatos que falam pelo menos dois idiomas é: 5+15+12+10=42.

D) 49 candidatos falam francês.
Errado. Pessoal, não temos informações suficientes para "cravar" quantos candidatos falam francês.

E) 126 candidatos falam somente um dos idiomas.
Certo. Essa aqui é nossa resposta, pessoal. Vamos destacar no diagrama as regiões que retratam a
quantidade de candidatos que falam apenas um idioma.

                                         𝐼                           𝐸

                                                       15
                                             46                  𝑒
                                                       5
                                                  12        10


                                                        𝑓
                                    12                           𝐹

Ora, sendo assim, a quantidade de candidatos que falam apenas um idioma é dada pela soma: 46 + 𝑒 + 𝑓.

Note que, apesar de não termos os valores de "e" e "f" individualmente, sabemos o valor da soma "𝑒 + 𝑓",
pois já a calculamos anteriormente. Assim, 46 + 80 = 126. Logo, são 126 candidatos que falam apenas 1
idioma.

Gabarito: LETRA E.


---

Em algumas questões não precisaremos aplicar diretamente a fórmula acima. Será necessário um trabalho
mais braçal da nossa parte, para chegar à resposta. Muitas vezes a questão pede valores específicos que vão
surgir de uma maneira mais fácil se a gente for completando o diagrama de Venn com as quantidades.

Por favor, dê mais olhada naquele "mapa" que mostrei logo no início desse tópico, destacando as regiões
e o seu significado.

        Para contar elementos em um diagrama de Venn, o primeiro passo é sempre inserir a
        quantidade de elementos que possui a intersecção dos três conjuntos! Depois, partimos
        para as intersecções duplas e, por fim, analisamos a quantidade de elementos exclusivos
        de cada conjunto. Vamos ver na prática como fazemos isso?

(TRF-3/2019) O número de matriculados nas disciplinas de Cálculo, Estatística e Microeconomia é 150. Sabe-
se que 12 deles cursam simultaneamente Microeconomia e Estatística, e que 80 deles cursam somente
Cálculo. Os alunos matriculados em Microeconomia não cursam Cálculo. Se a turma de Cálculo tem 96 alunos
e a de Estatística, 35, o número de alunos na turma de Microeconomia é
A) 12.
B) 47.
C) 7.
D) 28.
E) 23.

Comentários:
Nosso conjunto universo é formado por 𝟏𝟓𝟎 alunos que estão matriculados em três disciplinas: Cálculo (𝐶),
Estatística (𝐸) e Microeconomia (𝑀). Lembre-se de que nesse tipo de questão, nossa abordagem sempre é
começar pela intersecção dos três conjuntos, depois, partimos para as intersecções dois a dois e por fim,
para as regiões isoladas. Comece se perguntando: qual a quantidade de alunos que cursam as 3 disciplinas?

A resposta será zero! Veja que, de acordo com o enunciado, não existem alunos que são matriculados em
Microeconomia e Cálculo ao mesmo tempo. Sendo assim, se não existe aluno matriculado nas duas, não
pode ter aluno matriculado nas 3.


---

                                     𝑀                       𝐶

                                                0

                                                0

                                                        𝐸


Sabemos ainda que 12 deles cursam simultaneamente Microeconomia e Estatística.


                                     𝑀                       𝐶

                                                0

                                                0
                                           12

                                                        𝐸


80 deles cursam SOMENTE cálculo.


                                     𝑀                       𝐶

                                                0       80

                                                0
                                           12

                                                        𝐸


Como temos 80 alunos que fazem somente Cálculo, então devemos ter 16 alunos que fazem Cálculo e
Estatística para poder completar os 96 alunos da turma.


---

                                        𝑀                          𝐶

                                                     0        80

                                                     0
                                                12       16

                                                              𝐸


São 35 alunos de Estatística e no diagrama temos 12 + 16 = 28. Logo, 7 alunos cursam somente Estatística.


                                        𝑀                          𝐶

                                                     0        80

                                                     0
                                                12       16

                                                     7
                                                              𝐸


Seja 𝑥 a quantidade de alunos que fazem apenas Microeconomia.


                                        𝑀                          𝐶


                                            𝑥        0        80

                                                     0
                                                12       16

                                                     7
                                                              𝐸

A quantidade de alunos elencadas nos diagramas acima deve totalizar os 150 alunos dos 3 cursos.

                              𝑥 + 12 + 0 + 0 + 7 + 16 + 80 = 150
                                        𝑥 + 115 = 150
                                            𝑥 = 35


---

Cuidado aqui! 35 é a quantidade de alunos que fazem APENAS Microeconomia. Para descobrir o total de
alunos de Microeconomia devemos somar com aqueles que também fazem Estatística (12). Logo,

                           𝒏(𝑴) = 𝟑𝟓 + 𝟏𝟐          →      𝒏(𝑴) = 𝟒𝟕

Gabarito: Letra B.


---

                       QUESTÕES COMENTADAS - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/PREF. SALVADOR/2019) Em uma classe de 20 estudantes, 12 são meninas. Além disso, dos 20
estudantes, 15 gostam de Matemática. É correto concluir que
a) nenhuma menina gosta de Matemática.
b) todas as meninas gostam de Matemática.
c) no máximo 7 meninas gostam de Matemática.
d) no mínimo 7 meninas gostam de Matemática.
e) exatamente 7 meninas gostam de Matemática.

Comentários:
Temos 20 estudantes e 12 são meninas. Consequentemente, 8 serão meninos. Depois, o enunciado afirma
que 15 estudantes gostam de matemática. Vamos fazer uma análise item a item.

a) nenhuma menina gosta de Matemática.
ERRADO. Galera, temos 15 estudantes que gostam de matemática e apenas 8 meninos. Com isso,
certamente há meninas que gostam de matemática.

b) todas as meninas gostam de Matemática.
ERRADO. Não conseguimos concluir isso com as informações do enunciado. Veja que temos 15 estudantes
de que gostam de matemática e 12 meninas. Logo, poderíamos ter as 12 meninas gostando de matemática
mais 3 meninos. Acontece que, isso não é necessariamente verdade. Note que não há problema algum
serem também 10 meninas e 5 meninos, por exemplo.

c) no máximo 7 meninas gostam de Matemática.
ERRADO. Podemos inclusive ter as 12 meninas gostando de matemática. Não há essa restrição superior.

d) no mínimo 7 meninas gostam de Matemática.
CERTO. Imagine que apenas 6 meninas gostem de matemática. Com isso, precisaríamos de 9 meninos (para
fechar os 15 que gostam). Sabemos, no entanto, que só temos 8 meninos. Logo, a quantidade mínima de
meninas que gostam de matemática deve ser 7. Assim, ficamos na condição limite em que todos os meninos
gostam de matemática. Tudo certo?!

e) exatamente 7 meninas gostam de Matemática.
ERRADO. Há um limite mínimo de meninas, mas não temos informação suficiente para falar exatamente
quantas meninas gostam de matemática.


---

Gabarito: LETRA D.

2. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
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

3. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;


---

c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

Comentários:
Vamos procurar uma coleção que não possua elementos. Devemos analisar alternativa por alternativa.

a) de meses do ano que começam pela letra J;
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

4. (FGV/CODEBA/2010) Sejam 𝑨 = {𝟎, 𝟏, 𝟐, 𝟑} e 𝑩 = {𝟎, 𝟐, 𝟒} dois conjuntos. Com relação aos conjuntos
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


---

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

5. (FGV/BADESC/2010) Dado um conjunto A, chamamos subconjunto próprio não vazio de A a qualquer
conjunto que pode ser formado com parte dos elementos do conjunto A, desde que:

- algum elemento de A seja escolhido;
- não sejam escolhidos todos os elementos de A.

Sabemos que a quantidade de subconjuntos próprios não vazios de A é 14. A quantidade de elementos de
A é igual a:
a) 4
b) 5
c) 6
d) 7
e) 8

Comentários:
Estudamos que o número de subconjuntos é dado por uma relação bem conhecida:

                                 𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 2𝑛

Aqui, 𝑛 representa a quantidade de elementos de A. Por exemplo! Considere que 𝑩 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓}. Nessa
situação, o conjunto A tem 5 elementos, portanto, o número de subconjuntos seria:

                                 𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 2𝑛
                                 𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 25


---

                                   𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 32
Logo, A tem 32 subconjuntos. Agora, vamos entender a questão em si. O enunciado fala de subconjunto
próprio. Esse subconjunto obedece duas propriedades.

- algum elemento de A seja escolhido;
Em outras palavras, o enunciado está dizendo que para ser um subconjunto próprio, o subconjunto não pode
estar vazio, é preciso ter pelo menos um elemento.

- não sejam escolhidos todos os elementos de A.
Em outras palavras, o enunciado está dizendo que para ser um subconjunto próprio, o subconjunto não pode
coincidir com o A.

Logo, se temos 14 subconjuntos próprios devemos somar mais 2 subconjuntos, para obter a quantidade
total, calculada pela fórmula. Se A tem 14 subconjuntos próprios, então ele tem 14 + 2 = 𝟏𝟔 subconjuntos
ao total. Assim,
                                   𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐴 = 2𝑛
                                                 16 = 2𝑛
                                                  𝑛 = 4.
Assim, A tem 4 elementos.

Gabarito: LETRA A.

6. (FGV/ALESP/2002) São dados os conjuntos: D = divisores de 24 (divisores positivos), M = múltiplos de 3
(múltiplos positivos), S = D ∩ M e n = números de subconjuntos de S. Portanto, n é igual a:
a) 64
b) 16
c) 32
d) 8

Comentários:
Vamos listar os divisores de 24:

                                      𝐷(24) = {1, 2, 𝟑, 4, 𝟔, 8, 𝟏𝟐, 𝟐𝟒}

Agora, vamos começar a listar os múltiplos positivos de 3.

                               𝑀 (3) = {𝟑, 𝟔, 9, 𝟏𝟐, 15, 18, 21, 𝟐𝟒, 27, 30, … }

Note que já deixei marcado os elementos em comum aos dois conjuntos. Assim,


---

                                     𝑆 = 𝐷 ∩ 𝑀 = {3, 6, 12, 24}

Portanto, S tem 4 elementos. Na teoria, vimos que o número de subconjuntos de um conjunto é dado por:

                               𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 2𝑛(𝑆)
                                𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 24
                                𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 16

Gabarito: LETRA B.


---

                       QUESTÕES COMENTADAS - FGV

União, Intersecção, Complementar e Diferença

1. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

- A união de A e B tem 130 elementos.
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

Observe que já colocamos as quantidades de cada desses conjuntos. Como não sabemos quantos elementos
pertencem a 𝐴 e a 𝐵 simultaneamente, então vamos chamar essa quantidade de "z".


---

O enunciado nos diz que a união desses dois conjuntos possui 130 elementos. Na prática, isso significa que
se somamos todas as regiões destacadas no diagrama de Venn acima, então devemos obter esses 130
elementos. Vamos fazer isso?

                     60 + 𝑧 + 50 = 130      →      𝑧 = 130 − 110      →      𝒛 = 𝟐𝟎

Pronto, temos "z". Com ele, podemos determinar quantos elementos possui cada um dos conjuntos.

                     𝑛(𝐴) = 60 + 𝑧     →     𝑛(𝐴) = 60 + 20       →       𝒏(𝑨) = 𝟖𝟎


                     𝑛(𝐵) = 50 + 𝑧     →     𝑛(𝐵) = 50 + 20       →       𝒏(𝑩) = 𝟕𝟎

Gabarito: LETRA E.

2. (FGV/SEFAZ-MS/2006) Os conjuntos A, B e C satisfazem 𝑨 − (𝑩 ∩ 𝑪) = (𝑨 − 𝑩) ∪ (𝑨 − 𝑪):
a) nunca.
b) se e somente se A = B = C.
c) se e somente se B = C.
d) se e somente se B ∩ C = ⊘.
e) sempre.
Comentários:
Na minha opinião, o melhor jeito de resolver essas questões é desenhando o diagrama. Vamos primeiros
identificar o que significa cada lado da equação:

•   𝑨 − (𝑩 ∩ 𝑪): Elementos de A que não são elementos da intersecção de B com C.

          Conjunto 𝐴                        Conjunto 𝐵 ∩ 𝐶                  Conjunto 𝑨 − (𝑩 ∩ 𝑪)


•   (𝑨 − 𝑩) ∪ (𝑨 − 𝑪): Elementos de A que não são elementos de B ou Elementos de A que não elementos
    de C.


---

      Conjunto 𝐴 − 𝐵                     Conjunto 𝐴 − 𝐶                 Conjunto (𝑨 − 𝑩) ∪ (𝑨 − 𝑪)

Observe que quando desenhamos as duas regiões, percebemos que elas são iguais. Logo, a igualdade é
sempre verdade.

Gabarito: LETRA E.

3. (FGV/SEFAZ-MS/2006) Se X, Y e Z são conjuntos, 𝑿 ∩ (𝒀 ∪ 𝒁) = (𝑿 ∩ 𝒀) ∪ 𝒁:
a) nunca.
b) se e somente se X = Y = Z.
c) se e somente se 𝑍 ⊂ 𝑋
d) se e somente se 𝑍 ⊂ 𝑌
e) sempre.

Comentários:
Novamente, vamos recorrer aos diagramas. No entanto, primeiro devemos entender o que cada uma das
regiões expressa.

•   𝑿 ∩ (𝒀 ∪ 𝒁): Elementos que X tem em comum com a união de Y e Z.

         Conjunto 𝑋                       Conjunto 𝑌 ∪ 𝑍                Conjunto 𝑿 ∩ (𝒀 ∪ 𝒁)

•   (𝑿 ∩ 𝒀) ∪ 𝒁: Elementos de 𝑋 ∩ 𝑌 reunidos com os elementos de Z.


---

         Conjunto 𝑋 ∩ 𝑌                       Conjunto 𝑍                 Conjunto (𝑿 ∩ 𝒀) ∪ 𝒁

Dessa vez, as regiões que desenhamos não ficaram iguais. Mas, o que devemos fazer para que elas fiquem?
Ora devemos retirar toda a região diferente:

Nessa situação, percebemos que não podem haver elementos de Z que não sejam elementos de X. O que
implica que Z deve ser um subconjunto de X.

Gabarito: LETRA C.


---

                        QUESTÕES COMENTADAS - FGV

Princípio da Inclusão-Exclusão

1. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em relação
a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.
E) é possível que nenhuma delas seja capixaba torcedor do Vasco.

Comentários:
Galera, esse tipo de questão está muito comum nas provas da FGV. Logo, preste bem atenção no que desen-
volveremos aqui! Vou resolver de duas formas com vocês, ok? Uma forma mais qualitativa e outra forma
usando diagramas. Inicialmente, vamos perceber o seguinte:

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


---

A) no máximo 20 são capixabas torcedores do Vasco.
Errado. Podemos ter até 40 capixabas torcedores do Vasco.

B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
Errado. O correto seria "no máximo" ao invés de "no mínimo".

C) exatamente 30 são capixabas não torcedores do Vasco.
Errado. O enunciado não fornece informações suficientes para concluirmos "exatamente". Com o que foi
passado, podemos apenas fazer considerações sobre quantidades máximas e/ou mínimas.

D) no máximo 40 são capixabas torcedores do Vasco.
Correto, foi uma das conclusão que chegamos com a resolução do exercício.

E) é possível que nenhuma delas seja capixaba torcedor do Vasco.
Errado. Isso seria verdade se a soma das duas quantidades fosse inferior a 70.

Feita essa primeira resolução, vamos desenhar uns diagramas para entender o problema sobre um outro
ângulo!

                                                                          𝑃
                                       𝐶                       𝑉

                                        50 − 𝑥    𝑥       40 − 𝑥


                                                                    𝑦


"C" é o conjunto dos capixabas, "V" é o conjunto dos torcedores do Vasco, "P" é o conjunto formado por
todas as 70 pessoas (é o conjunto universo). Além disso, temos que "x" denota todas as pessoas que são
capixabas e também torcem para o Vasco. Por sua vez, "y" é exatamente o contrário, ele denota a quantidade
de pessoas que não são capixabas e também não são torcedores do Vasco.

Como o enunciado falou que o total de pessoas é 70, quando somamos todas essas quantidades destacadas
no diagramas, devemos ter exatamente essas 70 pessoas.

            (50 − 𝑥 ) + 𝑥 + (40 − 𝑥 ) + 𝑦 = 70        →      𝑦 − 𝑥 = 20       →   𝑥 = 20 + 𝑦

Note que "x" é tanto maior quanto for "y". Assim, quando "y" for máximo "x" também será.


---

No começo da solução vimos que a quantidade máxima de pessoas que não podem ser capixabas nem
torcerem para o Vasco é 20. Sendo assim, o valor máximo para "x", que é a quantidade de pessoas que são
capixabas e torcedoras do Vasco é de:

                  𝑥𝑚𝑎𝑥 = 20 + 𝑦𝑚𝑎𝑥       →      𝑥𝑚𝑎𝑥 = 20 + 20       →       𝑥𝑚𝑎𝑥 = 40


Logo, no máximo, podemos ter 40 pessoas que são capixabas e torcedoras do Vasco.

Gabarito: LETRA D.

2. (FGV/MPE-GO/2022) Em um grupo de 48 pessoas, há 35 advogados e 32 policiais. Nesse grupo, o
número mínimo de pessoas que são ao mesmo tempo advogados e policiais é
A) 13.
B) 16.
C) 19.
D) 32.
E) 35.

Comentários:
Essa questão parece com a anterior, não é verdade? Vamos resolvê-la usando diagramas.

                                                                         𝑈
                                     𝐴                      𝑃

                                      35 − 𝑥     𝑥     32 − 𝑥


                                                                 𝑦


Nessa questão, "A" representa o conjunto dos advogados, "P" o conjunto dos policiais e "U" é o nosso
conjunto universo (compreende todas as 48 pessoas). Ademais, "x" representa a quantidade de advogados
que também são policiais e "y" é a quantidade de pessoas que não são advogados nem policiais. Quando
somamos todas as quantidades destacadas no nosso diagrama, devemos obter as 48 pessoas.

           (35 − 𝑥 ) + 𝑥 + (32 − 𝑥 ) + 𝑦 = 48    →      𝑦 − 𝑥 = −19          →    𝑥 = 𝑦 + 19


Observe que encontramos uma relação entre "x" e "y".


---

A questão pede o valor mínimo de pessoas que são ao mesmo tempo advogadas e policiais, ou seja, o valor
mínimo de "x". Para que "x" seja mínimo, devemos ter que "y" também seja mínimo. Note que quanto
menor "y", menor também será "x".

A pergunta que vem agora é: qual é o menor valor possível para "y"?

A situação que minimiza "y" seria aquela em não existiria ninguém (entre essas 48 pessoas) que não fosse
advogado ou policial, ou seja, 𝑦𝑚𝑖𝑛 = 0. Com isso:

                     𝑥𝑚𝑖𝑛 = 𝑦𝑚𝑖𝑛 + 19       →    𝑥𝑚𝑖𝑛 = 0 + 19    →           𝑥𝑚𝑖𝑛 = 19


Gabarito: LETRA C.

3. (FGV/SEMSA-MANAUS/2022) Em um grupo de 50 pessoas, 27 gostam de filmes de suspense e 32 gostam
de filmes de terror. Com relação a essas 50 pessoas, é correto concluir que
A) no máximo 18 delas não gostam de filmes de suspense nem de filmes de terror.
B) exatamente 9 delas gostam tanto de filmes de suspense como de filmes de terror.
C) exatamente 18 delas só gostam de filmes de suspense.
D) exatamente 23 delas só gostam de filmes de terror.
E) no mínimo 18 delas gostam tanto de filmes de suspense como de filmes de terror.

Comentários:
Mais uma nesse estilo! Todas de 2022! Vamos usar os diagramas de novo!

                                                                          𝑈
                                        𝑆                    𝑇

                                        27 − 𝑥     𝑥   32 − 𝑥


                                                                      𝑦


- "S" denota o conjunto formado por aqueles que gostam de filmes de suspense;
- "T" denota o conjunto formado por aqueles que gostam de filmes de terror;
- "U" denota o conjunto universo, formado por todas as 50 pessoas mencionadas na questão;
- "x" é a quantidade de pessoas que gostam tanto de filmes de suspense quanto de terror;
- "y" é a quantidade de pessoas que não gostam de filmes de suspense nem de terror.

Quando fazemos o diagrama da forma acima, a soma das quantidades destacadas deve totalizar o número
de pessoas envolvidas, ou seja:


---

         (27 − 𝑥 ) + 𝑥 + (32 − 𝑥 ) + 𝑦 = 50         →     59 − 𝑥 + 𝑦 = 50      →        𝑦 = 𝑥−9


Encontramos uma relação entre "x" e "y". Note que quanto maior "x", maior será "y".

Sendo assim, para maximizarmos "y", devemos determinar o valor máximo de "x".

Para isso, note que temos 27 pessoas que gostam de filme de suspense e 32 pessoas que gostam de terror.

Observe que, em uma situação extrema, as 27 pessoas que gostam de suspense podem também gostar de
terror. Essa seria a situação que "x" assumiria seu máximo valor. Não poderíamos ter, por exemplo, 28
pessoas gostando de suspense e terror, já que sabemos que apenas 27 gostam de suspense. Tudo bem?
Esse é o "batente" para o "x". Descoberto isso, podemos usar na expressão que determinamos
anteriormente.

                     𝑦𝑚𝑎𝑥 = 𝑥𝑚𝑎𝑥 − 9      →         𝑦𝑚𝑎𝑥 = 27 − 9   →       𝑦𝑚𝑎𝑥 = 18


Gabarito: LETRA A.

4. (FGV/MPE-GO/2022) Uma empresa possui 32 funcionários que trabalham nos setores A, B e C. Sabe-se
que 20 funcionários trabalham no setor A, 14 funcionários trabalham no setor B e 9 funcionários trabalham
no setor C. Há funcionários que trabalham simultaneamente nos setores A e B, há funcionários que
trabalham simultaneamente nos setores A e C, mas nenhum funcionário trabalha simultaneamente nos
setores B e C. O número de funcionários que trabalha apenas no setor A é igual a
A) 4
B) 5
C) 6
D) 8
E) 9

Comentários:
Questão para usarmos o Princípio da Inclusão-Exclusão. Vamos anotar os dados que a questão passa:

- 32 funcionários trabalham nos setores A, B e C.

                                            𝑛(𝐴 ∪ 𝐵 ∪ 𝐶 ) = 32

- 20 funcionários trabalham no setor A.

                                                𝑛(𝐴) = 20


---

- 14 funcionários trabalham no setor B.

                                                 𝑛(𝐵) = 14

- 9 funcionários trabalham no setor C.

                                                  𝑛 (𝐶 ) = 9

- Nenhum funcionário trabalha simultaneamente nos setores B e C.

                                                𝑛 (𝐵 ∩ 𝐶 ) = 0

Observe que como não existe funcionário que trabalhe simultaneamente em B e C, consequentemente não
podemos ter funcionário que trabalhe simultaneamente nos três setores: A, B e C.

                                              𝑛 (𝐴 ∩ 𝐵 ∩ 𝐶 ) = 0

Pelo Princípio da Inclusão-Exclusão, temos:

       𝑛(𝐴 ∪ 𝐵 ∪ 𝐶 ) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶 ) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶 ) − 𝑛(𝐵 ∩ 𝐶 ) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                           32 = 20 + 14 + 9 − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶 ) − 0 + 0

                                          𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐶 ) = 11

O enunciado pede o número de funcionários que trabalham apenas no setor A. Para encontrar seu valor,
devemos subtrair de 𝑛(𝐴) o número de elementos das intersecções de A com os outros conjuntos. Afinal,
queremos a quantidade de elementos que estejam apenas em A.

                  𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶 ) − 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                                    𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 20 − 11 − 0

                                           𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 𝟗


Gabarito: LETRA E.

5. (FGV/SEMSA-MANAUS/2022) Uma pesquisa foi feita com 40 funcionários de uma empresa e entre as
perguntas havia as que estão abaixo:


---

- Você tem filhos?
- Você tem animal de estimação?

20 pessoas responderam SIM para a primeira pergunta.
15 pessoas responderam SIM para a segunda pergunta.
11 pessoas deixaram as duas perguntas em branco.

As instruções da pesquisa estabeleciam que deixar em branco significaria dizer NÃO. Sendo assim, o
número de pessoas que possuem filhos e animais de estimação é igual a
A) 2.
B) 3.
C) 4.
D) 5.
E) 6.

Comentários:
Nós vamos resolver essa questão por meio do Princípio da Inclusão-Exclusão. Inicialmente, considere que
"F" denota o conjunto formado por aqueles que tem filhos. Por sua vez, "A" denota o conjunto formado por
aqueles que tem animal de estimação. Dos 40 funcionários que responderam as perguntas, 11 deixaram as
duas perguntas em branco (na prática, a pesquisa considerou que essas 11 pessoas não possuem filhos nem
animal de estimação). Com isso, podemos escrever:

                            𝑛(𝐴 ∪ 𝐹 ) = 40 − 11      →      𝑛(𝐴 ∪ 𝐹 ) = 29

Por sua vez, como 20 responderam que tem filhos, podemos escrever 𝑛(𝐹 ) = 20.

E, ainda, como 15 responderam que possuem animal de estimação, 𝑛(𝐴) = 15.

Com essas três informações, conseguimos encontrar o número de pessoas que possuem filhos e animais de
estimação - 𝑛(𝐴 ∩ 𝐹 ) - por meio da aplicação do Princípio da Inclusão-Exclusão:

                                  𝑛(𝐴 ∪ 𝐹 ) = 𝑛(𝐴) + 𝑛(𝐹 ) − 𝑛(𝐴 ∩ 𝐹)

Substituindo os valores,

         29 = 20 + 15 − 𝑛(𝐴 ∩ 𝐹 )      →      𝑛(𝐴 ∩ 𝐹 ) = 35 − 29       →       𝒏(𝑨 ∩ 𝑭) = 𝟔

Gabarito: LETRA E.


---

6. (FGV/PC-RN/2021) Em um grupo de esportistas, 1/3 deles só gostam de vôlei e, dos demais, 2/5 gostam
de vôlei e também de basquete. Todos os esportistas desse grupo gostam de, pelo menos, um desses dois
esportes. Em relação ao total de membros desse grupo, a fração daqueles que só gostam de basquete é:
A) 2/3;
B) 2/5;
C) 3/5;
D) 4/15;
E) 1/15.

Comentários:
Considere que "V" denota o conjunto daqueles que gostam de Vôlei e "B" denota o conjunto daqueles que
gostam de basquete. Por fim, considere que "T" é o total de esportistas desse grupo.

1) Como 1/3 desses esportistas só gostam de vôlei, então podemos escrever que a quantidade dos que só
gostam de vôlei é T/3.

2) Atenção aqui!! Depois da informação acima, o enunciado fala: "DOS DEMAIS", ou seja, refere-se aqueles
que não gostam só de vôlei ou não gostam de vôlei mesmo. Assim, essa quantia é 2T/3! Temos que 2/5
dessa quantidade gostam de vôlei e de basquete.

                                                2𝑇 2 𝟒𝑻
                                                   ⋅ =
                                                 3 5 𝟏𝟓

No diagrama, ficamos com o seguinte:

                                        𝑉                      𝐵
                                            𝑇      4𝑇      𝑥
                                            3      15

Estamos procurando a fração daqueles que só gostam de basquete, ou seja, o valor de "x/T".

Vamos perceber algumas coisas aqui:

1) Todos nesse grupo gostam de, pelo menos, um desses dois esportes. Isso significa que não temos ninguém
fora de "V" ou "B".

2) Ademais, lembre-se que quando somamos as quantidades destacadas no diagrama, ela deve totalizar o
número de membros desse grupo.


---

              𝑇 4𝑇                        9𝑇                           6𝑇            𝒙 𝟐
               +   +𝑥 =𝑇          →          +𝑥 =1        →       𝑥=         →        =
              3 15                        15                           15            𝑻 𝟓

Gabarito: LETRA B.

7. (FGV/IMBEL/2021) Os 38 empregados novos da fábrica de brinquedos BLIME estão passando por um
treinamento inicial. Uma das tarefas do treinamento é a de assistir aos filmes A e B sobre o funcionamento
de duas partes da fábrica. Em uma reunião com os novos empregados o coordenador perguntou a todos
quem já tinha assistido aos filmes recomendados e ele percebeu, pelas respostas, que

- N pessoas assistiram ao filme A.
- 2N pessoas assistiram ao filme B.
- 3N pessoas não assistiram a nenhum dos dois filmes.

É correto concluir que o número mínimo de pessoas que assistiu aos dois filmes foi
A) 1.
B) 2.
C) 3.
D) 4.
E) 5.

Comentários:
Vamos colocar essas informações em um diagrama para uma melhor avaliação do problema.


                                                                        𝑈
                                      𝐴                       𝐵

                                       𝑁−𝑥       𝑥      2𝑁 − 𝑥


                                                                  3𝑁


A soma das quantidades destacadas no diagrama deve totalizar o número de empregados novos (38).

                                  (𝑁 − 𝑥 ) + 𝑥 + (2𝑁 − 𝑥 ) + 3𝑁 = 38

                                  6𝑁 − 𝑥 = 38      →      𝑥 = 6𝑁 − 38


---

Vamos voltar nossa atenção à expressão que destaquei acima. Note que "x" e "N" são números naturais,
pois estão mensurando a quantidade de empregados. Não podemos ter "1,5" pessoas. Concorda? Além
disso, deve ser uma quantidade maior ou igual a zero. Não faz sentido encontrarmos "-3" empregados!

Com isso, o valor mínimo de "x" é o primeiro valor em que ele é positivo. Isso acontece quando 𝑵 = 𝟕.

                          𝑥 = 6 ⋅ 7 − 38    →      𝑥 = 42 − 38     →      𝒙=𝟒

Note que para valores de "N" abaixo de 7, o valor de "x" é negativo. Não sendo uma solução possível para o
problema.

Gabarito: LETRA D.

8. (FGV/IMBEL/2021) Trinta estudantes praticam judô, natação e basquete, sendo que todos eles praticam
pelo menos um desses esportes. Há 15 que praticam judô, 17 que praticam natação e 12 que praticam
basquete. Há 10 estudantes que praticam pelo menos dois esportes. O número de estudantes que
praticam os três esportes é
A) 4.
B) 5.
C) 6.
D) 7.
E) 8.

Comentários:
Vamos resolver essa questão usando o Princípio da Inclusão-Exclusão.

- "J" denota o conjunto daqueles que praticam judô;
- "N" denota o conjunto daqueles que praticam natação;
- "B" denota o conjunto daqueles que praticam basquete.

1) Trinta estudantes praticam judô, natação e basquete.

                                           𝑛(𝐽 ∪ 𝑁 ∪ 𝐵) = 30

2) 15 praticam judô.

                                                𝑛(𝐽) = 15

3) 17 praticam natação.


---

                                                     𝑛(𝑁) = 17

4) 12 praticam basquete.

                                                     𝑛(𝐵) = 12

5) Há 10 estudantes que praticam pelo menos dois esportes.

                          𝑛(𝐽 ∩ 𝐵) + 𝑛(𝑁 ∩ 𝐵) + 𝑛(𝐽 ∩ 𝑁) − 𝟐𝒏(𝑱 ∩ 𝑵 ∩ 𝑩) = 10

Aqui está o "pulo do gato", pessoal!

A subtração em vermelho deve ser feita pois estamos contando a "intersecção tripla" três vezes quando
fazemos a soma 𝑛(𝐽 ∩ 𝐵) + 𝑛(𝑁 ∩ 𝐵) + 𝑛(𝐽 ∩ 𝑁). No final, só queremos contar ela uma única vez! Por isso,
subtraímos 𝟐𝒏(𝑱 ∩ 𝑵 ∩ 𝑩). Agora, vamos escrever a expressão acima de uma forma mais conveniente, que
você irá entender em breve.

                           𝑛(𝐽 ∩ 𝐵) + 𝑛(𝑁 ∩ 𝐵) + 𝑛(𝐽 ∩ 𝑁) = 10 + 2𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

Do PIE, temos:

        𝑛 ( 𝐽 ∪ 𝑁 ∪ 𝐵 ) = 𝑛 ( 𝐽 ) + 𝑛 ( 𝑁 ) + 𝑛 (𝐵 ) − 𝑛 ( 𝐽 ∩ 𝐵 ) − 𝑛 ( 𝑁 ∩ 𝐵 ) − 𝑛 (𝐽 ∩ 𝑁 ) + 𝑛 ( 𝐽 ∩ 𝑁 ∩ 𝐵 )

Substituindo as informações,

                       30 = 15 + 17 + 12 − (𝟏𝟎 + 𝟐𝒏(𝑱 ∩ 𝑵 ∩ 𝑩)) + 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

                         30 = 15 + 17 + 12 − 10 − 2𝑛(𝐽 ∩ 𝑁 ∩ 𝐵) + 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

                          30 = 34 − 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)            →         𝒏(𝑱 ∩ 𝑵 ∩ 𝑩) = 𝟒

Gabarito: LETRA A.

9. (FGV/PM-AM/2022) Em um grupo de 45 soldados, 27 gostam de marchar e 38 gostam de praticar tiro
ao alvo. Sejam:

X: o número de soldados desse grupo que gostam de marchar e também de praticar tiro ao alvo;
Y: o número de soldados desse grupo que não gostam nem de marchar nem de praticar tiro ao alvo.

Nesse caso, é correto afirmar que


---

A) X é no máximo 20.
B) Y é no mínimo 7.
C) quando X = 23, tem-se Y = 7.
D) quando Y = 7, tem-se X = 20.
E) quando Y = 5, tem-se X = 25.

Comentários:
Vamos desenhar os diagramas!
                                                                   S

                                       M                     T

                                        27 − 𝑥    𝑥    38 − 𝑥


                                                                  𝑦


No diagrama acima, "M" representa o conjunto daqueles soldados que gostam de marchar. Por sua vez, "T"
representa o conjunto daqueles que gostam de praticar tiro ao alvo. Dito isso, perceba o seguinte:

1) Representamos com "x" a quantidade de soldados na intersecção dos dois conjuntos, ou seja, "x" é a
quantidade de soldados que gostam de marcar e de praticar tiro ao alvo. Com isso, podemos concluir que
"27 − 𝑥" é a quantidade de soldados que gosta apenas de marchar.

2) Da mesma forma que raciocinamos anteriormente, podemos concluir que "38 − 𝑥" é a quantidade de
soldados que gostam apenas de praticar tiro ao alvo.

3) Fora dos conjuntos "M" e "T", colocamos o "y". Esse "y" é a quantidade de soldados que não gostam de
marchar nem de praticar tiro ao alvo.
E agora? O que fazemos?

Agora, nós utilizamos a informação de que o total de soldados é igual a 45. Ou seja, quando somamos cada
uma das regiões desse diagrama, devemos obter o total de soldados, isto é,

           (27 − 𝑥 ) + 𝑥 + (38 − 𝑥 ) + 𝑦 = 45    →    65 − 𝑥 + 𝑦 = 45     →      𝑥 = 20 + 𝑦

Essa é a relação entre "x" e "y". Perceba que quando 𝑦 = 5, temos 𝑥 = 25, exatamente como consta na
alternativa E.

Gabarito: LETRA E.


---

10. (FGV/PREF. SALVADOR/2019) 50 atletas estão treinando e todos usam bermuda e camiseta do mesmo
modelo, mas com cores diversas. Entre esses atletas há 20 com bermudas brancas, 25 com camisetas
brancas e 12 com bermudas e camisetas brancas. Assinale a opção que indica o número de atletas que não
estão vestindo nenhuma peça branca.
a) 5
b) 13
c) 15
d) 17
e) 20

Comentários:
Beleza, moçada. Vamos extrair as informações do enunciado.

- Atletas com bermudas brancas. 𝑛(𝐵) = 20
- Atletas com camisetas brancas. 𝑛(𝐶) = 25
- Atletas com bermudas e camisetas brancas. 𝑛(𝐵 ∩ 𝐶 ) = 12

Podemos resolver de duas maneiras.

1ª) Por diagrama de Venn.

- Primeiro passo: desenhar os dois conjuntos.

- Segundo passo: colocar o valor da intersecção. No nosso caso, seria quantos estão de bermuda branca e
de camiseta branca.


---

- Terceiro passo: subtraímos as quantidade total de cada conjunto pela quantidade que já colocamos na
intersecção. Dessa forma, encontraremos quantas pessoas usaram apenas a bermuda branca (20 − 12 =
8) ou apenas a camiseta branca (25 − 12 = 13).

- Quarto passo: somar os números para obter a quantidade de pessoas que está usando o bermuda branca
ou camiseta branca (incluindo os dois ao mesmo tempo) = 8 + 12 + 13 = 33. Logo, se temos 33 atletas que
estão vestindo alguma peça branca de um total de 50, então 50 - 33 = 17 não estão.

2ª) Por Princípio da Inclusão-Exclusão.

Aplicar na fórmula que aprendemos na teoria e descobrir 𝑛(𝐵 ∪ 𝐶).

                                   𝑛 (𝐵 ∪ 𝐶 ) = 𝑛 ( 𝐵 ) + 𝑛 ( 𝐶 ) − 𝑛 ( 𝐵 ∩ 𝐶 )
                                         𝑛(𝐵 ∪ 𝐶 ) = 20 + 25 − 12
                                               𝑛(𝐵 ∪ 𝐶 ) = 33
Logo, 33 atletas estão usando algo branco. Como ao todo são 50 atletas, 50 - 33 = 17 não estão vestindo
nenhuma peça branca.

Gabarito: LETRA D.

11. (FGV/PREF. ANGRA/2019) Aos 5 anos, toda criança deve tomar um reforço das vacinas tríplice e pólio.
Uma pesquisa feita com as 80 crianças que entraram no 1º ano do Ensino Fundamental de uma escola
mostrou que:

- 54 alunos tomaram a vacina tríplice.
- 52 alunos tomaram a vacina pólio.
- 16 alunos não tomaram nenhuma das duas vacinas.

O número de alunos que tomou as duas vacinas é
a) 42.
b) 44.
c) 46.
d) 48.
e) 50.


---

Comentários:
- Primeiro passo: desenhar os conjuntos daqueles que tomaram a vacina tríplice e daqueles que tomaram a
vacina pólio.

- Segundo passo: Adicionar as informações que foram passadas no enunciado. Conforme aprendemos,
sempre devemos começar pelo valor que está na intersecção. Na questão, esse valor equivale ao número
de pessoas que tomaram a vacina tríplice e também a pólio. Como não sabemos, podemos simplesmente
chamar de 𝑥.

É importante perceber que devemos colocar a quantidade de pessoas que não tomaram nenhuma das
vacinas também. No nosso caso, essa quantidade é o 16.

- Terceiro passo: somar todas as quantidades do diagrama e a igualar a quantidade de pessoas participantes
da pesquisa. De acordo com o enunciado, foram 80 crianças. Assim,
                (54 − 𝑥 ) + 𝑥 + (52 − 𝑥 ) + 16 = 80 → 122 − 𝑥 = 80             → 𝒙 = 𝟒𝟐

Portanto, 42 alunos tomaram as duas vacinas.

Gabarito: LETRA A.

12. (FGV/MPE-RJ/2019) Sobre os conjuntos A e B, sabe-se que:

- (𝑨 – 𝑩) tem 7 elementos;
- A tem 28 elementos;
- A união de A e B tem 38 elementos


---

O número de elementos do conjunto B é:
a) 10;
b) 18;
c) 19;
d) 31;
e) 35.

Comentários:
De acordo com o enunciado, temos o seguinte:
- 𝑛 (𝐴 − 𝐵 ) = 7
- 𝑛(𝐴) = 28
- 𝑛(𝐴 ∪ 𝐵) = 38

Não sei se você lembra, mais 𝐴 − 𝐵 é o conjunto formado por todos os elementos de A que não são
elementos de B. Graficamente, representamos assim:

Veja que para obter o número de elementos dessa região, basta pegarmos a totalidade do conjunto A e
subtrair da intersecção. Matematicamente,

                                     𝑛(𝐴 − 𝐵) = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐵)

Usando essa fórmula, devemos encontrar 𝑛(𝐴 ∩ 𝐵). Substituindo os valores que temos, ficamos com:
                           7 = 28 − 𝑛(𝐴 ∩ 𝐵)      →      𝒏(𝑨 ∩ 𝑩) = 𝟐𝟏

Com o valor da intersecção descoberto, podemos usar o princípio da inclusão-exclusão para determinar 𝑛(𝐵)

                                 𝑛 (𝐴 ∪ 𝐵 ) = 𝑛 ( 𝐴 ) + 𝑛 (𝐵 ) − 𝑛 ( 𝐴 ∩ 𝐵 )
                                         38 = 28 + 𝑛(𝐵) − 21
                                              𝒏(𝑩) = 𝟑𝟏
Gabarito: LETRA D.

13. (FGV/BANESTES/2018) Um conjunto tem 8 elementos, outro conjunto tem 9 elementos e a união deles
tem 12 elementos. O número de elementos da interseção desses conjuntos é:


---

a) 1;
b) 2;
c) 3;
d) 4;
e) 5.

Comentários:
Essa é uma questão bem direta e que devemos usar o Princípio da Inclusão-Exclusão para resolvê-la. Vamos
chamar um conjunto de A e o outro de B. Assim,

- Um conjunto tem 8 elementos → 𝑛(𝐴) = 8.
- Um outro conjunto tem 9 elementos → 𝑛(𝐵) = 9.
- A união deles tem 12 elementos → 𝑛(𝐴 ∪ 𝐵) = 12.

Lembre-se da fórmula:

                                 𝑛 (𝐴 ∪ 𝐵 ) = 𝑛 ( 𝐴 ) + 𝑛 (𝐵 ) − 𝑛 ( 𝐴 ∩ 𝐵 )

Substituindo o que temos:

                            12 = 8 + 9 − 𝑛(𝐴 ∩ 𝐵)         →      𝒏(𝑨 ∩ 𝑩) = 𝟓

Gabarito: LETRA E.

14. (FGV/COMPESA/2018) Em uma empresa trabalham 40 técnicos e todos falam português. Entre eles,
há técnicos que falam inglês e há técnicos que falam alemão, porém, entre os que falam apenas um idioma
estrangeiro, o número dos que falam inglês é o dobro do número dos que falam alemão. Sabe-se que 15
técnicos falam apenas português e que 4 técnicos falam tanto inglês quanto alemão. O número de técnicos
que falam inglês é
a) 7
b) 11
c) 14
d) 18
e) 20

Comentários:
Ok, moçada! Muita informação, né?! Se formos com calma, dá certo! Temos dois conjuntos: o primeiro
formado pelos técnicos que falam alemão (A) e o segundo formado pelos técnicos que falam inglês (I). Em
diagramas, podemos representar assim:


---

Para começar a preencher esse diagrama, devemos pegar a intersecção. Observe que o enunciado diz que 4
técnicos falam tanto inglês quanto alemão. Esse é o valor da intersecção. Além disso, 15 técnicos falam
apenas português, ou seja, não falam alemão ou inglês. Ficamos com,

Considere que o número de técnicos que falam alemão seja 𝒏(𝑨) e o número de técnicos que falam inglês
seja 𝒏(𝑰). Assim,

Quando somamos todos os valores do nosso diagrama, devemos obter o total de técnicos. O enunciado
disse que são 40. Logo,

                                 𝑛(𝐴) − 4 + 4 + 𝑛(𝐼 ) − 4 + 15 = 40
                                       𝑛(𝐴) + 𝑛(𝐼 ) + 11 = 40
                                          𝑛(𝐴) + 𝑛(𝐼 ) = 29

Observe que temos dois valores desconhecidos. Precisamos de mais uma equação para formar um sistema.
De onde vamos tirar a outra equação? Ora, do enunciado! Veja que o examinador diz "entre os que falam


---

apenas um idioma estrangeiro, o número dos que falam inglês é o dobro do número dos que falam alemão".
Matematicamente, temos:

                                       𝑛(𝐼 ) − 4 = 2 ∙ (𝑛(𝐴) − 4)
                                         𝑛 (𝐼 ) − 4 = 2 ∙ 𝑛 (𝐴 ) − 8
                                           𝑛 (𝐼 ) = 2 ∙ 𝑛 (𝐴 ) − 4

Agora, devemos pegar essa relação e substituir na primeira equação que encontramos.

                                       𝑛(𝐴) + 2 ∙ 𝑛(𝐴) − 4 = 29
                                              3 ∙ 𝑛(𝐴) = 33
                                                𝑛(𝐴) = 11

Portanto, 11 técnicos falam alemão. Consequentemente, 29 − 11 = 𝟏𝟖 falam inglês.

Gabarito: LETRA D.

15. (FGV/BANESTES/2018) As equipes de Abel e de Nádia têm o mesmo número de funcionários. Cinco
funcionários participam das duas equipes. Não há outros funcionários com essa característica. Juntando-
se as duas equipes tem-se 41 funcionários ao todo. As equipes de Abel e de Nádia têm cada uma:
a) 26
b) 25
c) 24
d) 23
e) 22

Comentários:
Uma ótima questão para aplicarmos o Princípio da Inclusão-Exclusão. Vamos primeiro entender o que cada
informação do enunciado significa. Considere que o conjunto dos funcionários na equipe de Abel seja
representada pelo conjunto A. Analogamente, o conjunto dos funcionários na equipe de Nádia é
representado por N.
- As equipes de Abel e de Nádia têm o mesmo número de funcionários → 𝒏(𝑨) = 𝒏(𝑵).
- Cinco funcionários participam das duas equipes   → 𝒏(𝑨 ∩ 𝑵) = 𝟓.
- Juntando-se as duas equipes tem-se 41 funcionários ao todo → 𝒏(𝑨 ∪ 𝑵) = 𝟒𝟏.

Assim, usando o Princípio da Inclusão-Exclusão, sabemos que:

                                 𝑛 (𝐴 ∪ 𝑁 ) = 𝑛 ( 𝐴 ) + 𝑛 (𝑁 ) − 𝑛 ( 𝐴 ∩ 𝑁 )
                                         41 = 𝑛(𝐴) + 𝑛(𝐴) − 5
                                              2 ∙ 𝑛(𝐴) = 46


---

                                                 𝑛(𝐴) = 23

Como o número de funcionários são iguais nas duas equipes, cada uma possui 23.

Gabarito: LETRA D.

16. (FGV/PREF. SALVADOR/2017) Em um grupo de 30 profissionais, todos são engenheiros ou arquitetos.
A quantidade daqueles que são somente arquitetos é o dobro da quantidade dos que são somente
engenheiros. Doze desses profissionais são arquitetos e também engenheiros. Assinale a opção que indica
o número de engenheiros desse grupo.
a) 6
b) 10
c) 12
d) 18
e) 24

Comentários:
Questão bem parecida com a anterior, concorda galera? Sinal que a FGV gosta desse estilo. Vamos dar uma
destrinchada maior, com uma solução um pouco diferente. Um primeiro passo é retirar as informações do
enunciado.

- Um grupo de 30 profissionais, todos são engenheiros ou arquitetos. → 𝑛(𝐴 ∪ 𝐸) = 30.
- Doze desses profissionais são arquitetos e também engenheiros. → 𝑛(𝐴 ∩ 𝐸) = 12.
- A quantidade daqueles que são somente arquitetos é o dobro da quantidade dos que são somente
engenheiros. → 𝑛(𝐴) − 12 = 2 ∙ (𝑛(𝐸) − 12)        →     𝑛(𝐴) = 2 ∙ 𝑛(𝐸) − 12     (1)

Pessoal, atenção nesse último fato, pois ele fala a quantidade daqueles que são somente arquitetos.
Portanto, não podemos considerar a quantidade os são arquitetos e engenheiros. Por esse motivo, devemos
fazer a subtração por 12, pra descontar essas pessoas que exercem as 2 profissões. Tudo certo?!

Usando o Princípio da Inclusão-Exclusão:

                                  𝑛 (𝐴 ∪ 𝐸 ) = 𝑛 ( 𝐴 ) + 𝑛 (𝐸 ) − 𝑛 ( 𝐴 ∩ 𝐸 )
                                           30 = 𝑛(𝐴) + 𝑛(𝐸) − 12
                                       𝑛(𝐴) + 𝑛(𝐸) = 42            (2)

Percebam que (1) e (2) formam um sistema com duas equações e duas incógnitas. Podemos resolvê-lo.
Substituindo (1) em (2), ficamos com:

                                        2 ∙ 𝑛(𝐸) − 12 + 𝑛(𝐸) = 42
                                   3 ∙ 𝑛(𝐸) = 54      →    𝒏(𝑬) = 𝟏𝟖


---

Quando usamos 𝑛(𝐸) = 18 em qualquer uma das equações, chegamos a 𝑛(𝐴) = 36. Portanto, o número
de engenheiros nesse grupo é 18.

Gabarito: LETRA D.

17. (FGV/PREF. SALVADOR/2017) Em certo concurso, inscreveram-se 80 candidatos. Sabe-se que, desses
candidatos, 50 são baianos, 22 possuem curso superior e 26 são de outros estados e não possuem curso
superior. O número de candidatos baianos com curso superior é
a) 16.
b) 18.
c) 20.
d) 22.
e) 24.

Comentários:
Pessoal, se foram 80 candidatos e 50 deles são baianos, então 30 são de outros estados. Tudo bem?! Desses
30, o enunciado diz que 26 não possuem curso superior. O que podemos concluir com isso? Que 4 desses
30 possuem curso superior. Ademais, o enunciado diz que, dos 80 candidatos, 22 possuem curso superior.
Desses 22, já descobrimos que 4 vieram de outros estados. Logo, 22 − 4 = 𝟏𝟖 deles são baianos.

Gabarito: LETRA B.

18. (FGV/PREF. SALVADOR/2017) Dois conjuntos A e B têm a mesma quantidade de elementos. A união
deles tem 2017 elementos e a interseção deles tem 1007 elementos. O número de elementos do conjunto
Aé
a) 505.
b) 1010.
c) 1512.
d) 1515.
e) 3014.

Comentários:
Vamos analisar as informações do enunciado.

- Dois conjuntos A e B têm a mesma quantidade de elementos → 𝒏(𝑨) = 𝒏(𝑩).
- A união deles tem 2017 elementos → 𝒏(𝑨 ∪ 𝑩) = 𝟐𝟎𝟏𝟕.
- A intersecção deles tem 1007 → 𝒏(𝑨 ∩ 𝑩) = 𝟏𝟎𝟎𝟕.

Agora, só aplicar na fórmula do Princípio da Inclusão-Exclusão.


---

                                 𝑛 (𝐴 ∪ 𝐵 ) = 𝑛 ( 𝐴 ) + 𝑛 (𝐵 ) − 𝑛 ( 𝐴 ∩ 𝐵 )

Como 𝒏(𝑨) = 𝒏(𝑩), podemos escrever assim:

                                   𝑛 (𝐴 ∪ 𝐵 ) = 2 ∙ 𝑛 (𝐴 ) − 𝑛 (𝐴 ∩ 𝐵 )

Substituindo os valores:

              2017 = 2 ∙ 𝑛(𝐴) − 1007      →       2 ∙ 𝑛(𝐴) = 3024         →      𝒏(𝑨) = 𝟏𝟓𝟏𝟐

Gabarito: LETRA C.

19. (FGV/IBGE/2017) Na assembleia de um condomínio, duas questões independentes foram colocadas
em votação para aprovação. Dos 200 condôminos presentes, 125 votaram a favor da primeira questão,
110 votaram a favor da segunda questão e 45 votaram contra as duas questões. Não houve votos em
branco ou anulados. O número de condôminos que votaram a favor das duas questões foi:
a) 80;
b) 75;
c) 70;
d) 65;
e) 60.

Comentários:
Vamos ver o que significa cada uma das informações que o enunciado trouxe.

- 125 votaram a favor da primeira questão → 𝒏(𝑷) = 𝟏𝟐𝟓
- 110 votaram a favor da segunda questão → 𝒏(𝑺) = 𝟏𝟏𝟎
- Não sabemos quantos votaram a favor das duas questões →         𝒏(𝑷 ∩ 𝑺) = 𝒙
- 45 votaram contra as duas questões.

Em diagramas, ficamos com o seguinte:


---

A soma de todas as regiões deve dar o total de pessoas envolvidas. Foram 200 condôminos que votaram.
Assim,

                                (125 − 𝑥 ) + 𝑥 + (110 − 𝑥 ) + 45 = 200
                                            280 − 𝑥 = 200
                                                𝑥 = 80

Gabarito: LETRA A.

20. (FGV/SEPOG-RO/2017) Cada um dos 40 funcionários de uma empresa tem pelo menos uma das
habilidades A, B ou C. Nenhum deles tem as três habilidades. 21 deles não têm a habilidade A, 20 deles
não têm a habilidade B e 24 deles não têm a habilidade C. O número de funcionários dessa empresa que
têm duas das habilidades A, B ou C é:
a) 11.
b) 13.
c) 15.
d) 17.
e) 19.

Comentários:
Vamos primeiro desenhar o diagrama de Venn associado ao problema.

Note que, com as informações passadas pelo enunciado, praticamente não conseguimos preencher
nenhuma das regiões. A única que conseguimos colocar um valor foi a intersecção dos três conjuntos. Como
o enunciado fala que nenhum dos funcionários possui a três habilidades, então podemos colocar um 0 no
centro sem medo (rsrs).

A questão quer saber quantos funcionários tem a duas habilidades. Esse valor, olhando para o nosso
diagrama, é dado pela seguinte soma:

                                          𝑅𝑒𝑠𝑝. = 𝑥 + 𝑦 + 𝑧


---

Concordam comigo, moçada?! É isso que a questão está nos perguntando. Não é preciso descobrir cada
uma dos valores individualmente. Para entender isso melhor, devemos analisar as informações do
enunciado mais detalhadamente.

- 21 deles não tem a habilidade A. Ora, quem não tem a habilidade A? Olhe no diagrama abaixo.

Assim, 𝑏 + 𝑐 + 𝑧 = 21.

- 20 deles não tem a habilidade B. Aqui, o pensamento é análogo ao anterior.

Assim, 𝑎 + 𝑐 + 𝑦 = 20.

- 24 deles não tem a habilidade C. Vamos repetir o procedimento.


---

Assim, 𝑎 + 𝑏 + 𝑥 = 24.

Vamos somar membro a membro todas essas expressões.

                         (𝑏 + 𝑐 + 𝑧) + (𝑎 + 𝑐 + 𝑦) + (𝑎 + 𝑏 + 𝑥 ) = 21 + 20 + 24
                                2 ∙ (𝑎 + 𝑏 + 𝑐 ) + (𝒙 + 𝒚 + 𝒛) = 65   (1)

Fiz questão de destacar a soma que estamos procurando. No entanto, note que tem outra soma
atrapalhando (𝑎 + 𝑏 + 𝑐). Para encontrá-la, devemos utilizar o fato que são 40 funcionários. Assim, quando
somamos todas as regiões do diagrama, devemos totalizar esse valor.

                                     (𝑎 + 𝑏 + 𝑐 ) + (𝑥 + 𝑦 + 𝑧) = 40
                                  (𝑎 + 𝑏 + 𝑐 ) = 40 − (𝑥 + 𝑦 + 𝑧)    (2)

Substituindo (2) em (1), temos:

                                2 ∙ (40 − (𝑥 + 𝑦 + 𝑧)) + (𝑥 + 𝑦 + 𝑧) = 65
                                          80 − (𝑥 + 𝑦 + 𝑧) = 65
                                             (𝒙 + 𝒚 + 𝒛) = 𝟏𝟓

Portanto, 15 pessoas possuem duas habilidades. Galera, eu sei que essa questão tem muitos passos que
talvez não sejam intuitivos. Logo, ela possui um certo grau de dificuldade. Esse tipo de manipulação fica mais
natural à medida que fazemos mais e mais exercícios.

Eu reconheço que o tempo de vocês é limitado, dado a quantidade de matérias que devem estudar. Por isso,
simplesmente faça o seu melhor considerando o tempo que você tem. Tenho certeza que os resultados
aparecerão e você conseguirá passar no concurso que almeja.

Gabarito: LETRA C.

21. (FGV/PREF. PAULÍNIA/2016) Em certo escritório trabalham 25 advogados. Dentre eles, 18 falam inglês
e 12 falam espanhol. O número máximo de advogados desse escritório que não fala nenhum desses dois
idiomas é
a) 5.
b) 6.
c) 7.
d) 8.
e) 9.

Comentários:
Essa questão pode ser resolvida utilizando diagrama de Venn. Vamos esboçá-lo.


---

Aprendemos que a primeira informação que devemos preencher é a quantidade na intersecção. Como não
sabemos, podemos simplesmente colocar um x.

Observe que, como não sabemos também a quantidade de advogados que não fala nenhum dos dois
idiomas, nós tivemos que chamá-la de 𝑦. Quando somamos os valores em cada uma das regiões do nosso
diagrama, devemos obter o número total de elementos envolvidos. No nosso caso, são 25 advogados.

          (18 − 𝑥 ) + 𝑥 + (12 − 𝑥 ) + 𝑦 = 25   →     30 − 𝑥 + 𝑦 = 25     →     𝑦=𝑥−5

Portanto, para ter a quantidade máxima de advogados que não falam nenhum dos idiomas, devemos ter a
quantidade máxima de advogados que falam os dois idiomas. Conseguem ver? Explico melhor.

- Se 𝑥 = 6, então 𝑦 = 6 − 5 = 1.
- Se 𝑥 = 7, então 𝑦 = 7 − 5 = 2.
- Se 𝑥 = 8, então 𝑦 = 8 − 5 = 3.

Percebem que quanto maior x, maior y? Dessa forma, y é máximo quando x é máximo. A próxima pergunta
que devemos responder é: quando x é máximo?


---

Observe que o número de advogados que falam apenas espanhol é 𝟏𝟐 − 𝒙. Essa será a restrição que limitará
o valor de x. Veja que 𝑥 não pode ser 13, pois se fosse, teríamos 12 − 13 = −1 pessoas. Isso é possível?
Claro que não. Logo, o máximo valor que x pode assumir é 12.

Desse modo, ficamos com 12 − 12 = 𝟎 pessoas que falam apenas espanhol. Em outras palavras, as 12
pessoas que falam espanhol também falam inglês! Essa é uma situação hipotética, mas que garante a
máxima intersecção. Assim, descoberto o 𝑥 máximo, basta substituirmos na fórmula.

                                      𝑦 = 12 − 5      →      𝑦=7

Logo, 7 é quantidade máxima de advogados que não falam nenhum dos dois idiomas.

Gabarito: LETRA C.

22. (FGV/PREF. PAULÍNIA/2016) Em um processo seletivo, os candidatos tinham que possuir três
características desejáveis A, B e C para ocupar o cargo. Dos 120 candidatos inscritos, todos possuíam pelo
menos uma das três características, mas nenhum possuía as três características desejáveis: 52 candidatos
não possuíam a característica A, 65 não possuíam a característica B e 47 não possuíam a característica C.
O número de candidatos que possuíam duas das três características desejáveis é
a) 76.
b) 68.
c) 60.
d) 52.
e) 44.

Comentários:
Pessoal, já fizemos uma questão anteriormente praticamente idêntica. Vamos repetir a solução, apenas
trocando os números. Veja como é uma receitinha de bolo e se você pega o jeito, sempre acertará esse tipo
de questão.

Note que, com as informações passadas pelo enunciado, praticamente não conseguimos preencher
nenhuma das regiões. A única que conseguimos colocar um valor foi a intersecção dos três conjuntos.


---

Como o enunciado fala que nenhum dos candidatos possui as três características, então podemos colocar
um 0 no centro sem medo (rsrs). A questão quer saber quantos candidatos possuem duas das três
características desejáveis. Esse valor, olhando para o nosso diagrama, é dado pela seguinte soma:

                                           𝑅𝑒𝑠𝑝. = 𝑥 + 𝑦 + 𝑧

Concordam comigo, moçada?! É isso que a questão está nos perguntando. Não é preciso descobrir cada
uma dos valores individualmente. Para entender isso melhor, devemos analisar as informações do
enunciado mais detalhadamente.

- 52 candidatos não possuíam a característica A. Ora, quem não tem a habilidade A? Olhe no diagrama
abaixo.

Assim, 𝑏 + 𝑐 + 𝑧 = 52.
- 65 não possuíam a característica B. Aqui, o pensamento é análogo ao anterior.

Assim, 𝑎 + 𝑐 + 𝑦 = 65.

- 47 não possuíam a característica C. Vamos repetir o procedimento.


---

Assim, 𝑎 + 𝑏 + 𝑥 = 47.

Vamos somar membro a membro todas essas expressões.

                         (𝑏 + 𝑐 + 𝑧) + (𝑎 + 𝑐 + 𝑦) + (𝑎 + 𝑏 + 𝑥 ) = 52 + 65 + 47
                               2 ∙ (𝑎 + 𝑏 + 𝑐 ) + (𝒙 + 𝒚 + 𝒛) = 164      (1)

Fiz questão de destacar a soma que estamos procurando. No entanto, note que tem outra soma
atrapalhando (𝑎 + 𝑏 + 𝑐). Para encontrá-la, devemos utilizar o fato que são 120 candidatos inscritos. Assim,
quando somamos todas as regiões do diagrama, devemos totalizar esse valor.


                                     (𝑎 + 𝑏 + 𝑐 ) + (𝑥 + 𝑦 + 𝑧) = 120
                                  (𝑎 + 𝑏 + 𝑐 ) = 120 − (𝑥 + 𝑦 + 𝑧)      (2)

Substituindo (2) em (1), temos:

                              2 ∙ (120 − (𝑥 + 𝑦 + 𝑧)) + (𝑥 + 𝑦 + 𝑧) = 164
                                         240 − (𝑥 + 𝑦 + 𝑧) = 164
                                             (𝒙 + 𝒚 + 𝒛) = 𝟕𝟔

Portanto, 76 candidatos possuem duas das características.

Gabarito: LETRA A.

23. (FGV/CODEBA/2015) Entre os trabalhadores de uma empresa, há os que são filiados ao Sindicato A e
os que são filiados ao Sindicato B. Alguns são filiados aos dois Sindicatos e outros a nenhum dos dois. Dos
que são filiados ao Sindicato A, 2/3 também são filiados ao Sindicato B e dos que são filiados ao Sindicato
B, 2/5 também são filiados ao Sindicato A. Além disso, o número de trabalhadores da empresa que são
filiados a somente um desses dois Sindicatos é igual ao número daqueles que não são filiados a nenhum


---

dos dois. A razão entre o número de trabalhadores que são filiados aos dois Sindicatos e o número total
de trabalhadores da empresa é
a) 1/4
b) 1/5
c) 2/5
d) 3/5
e) 3/10

Comentários:
Pessoal, temos que analisar dois conjuntos. Podemos optar pelo diagrama de Venn.

Note que o enunciado não fornece nenhum valor de fato. Por isso, a quantidade em cada uma das regiões
está representada apenas por letras. Vou traduzir para você o que significa cada uma dessas quantidades.

- 𝑎: quantidade de trabalhadores filiados ao Sindicato A.
- 𝑏: quantidade de trabalhadores filiados ao Sindicato B.
- 𝑥: quantidade de trabalhadores filiados ao Sindicato A e ao Sindicato B.
- y: quantidade de trabalhadores que não são filiados a nenhum sindicato.
- (𝑎 − 𝑥): quantidade de trabalhados que são filiados apenas ao Sindicato A.
- (𝑏 − 𝑥): quantidade de trabalhadores que são filiados apenas ao Sindicato B.

Pronto. Identificamos o que significa cada uma das letras que usamos. Vamos agora analisar as informações
que o enunciado trouxe.

- Dos que são filiados ao Sindicato A, 2/3 também são filiados ao Sindicato B.
Com essa informação, conseguimos encontrar a intersecção em função daqueles que são filiados ao Sind. A.:

                                                      2𝑎
                                                 𝑥=
                                                       3

- dos que são filiados ao Sindicato B, 2/5 também são filiados ao Sindicato A.
Trata-se de uma informação muito parecida com a anterior, só que em relação ao sindicato B. Assim,


---

                                                        2𝑏
                                                 𝑥=
                                                         5

- o número de trabalhadores da empresa que são filiados a somente um desses dois Sindicatos é igual ao
número daqueles que não são filiados a nenhum dos dois.
O número de trabalhadores que são filiados a somente um desses sindicatos é a soma das seguintes regiões:

Ele diz que essa soma é igual a número daqueles que não são filiados a nenhum dos dois sindicatos. Assim,

                                          (𝑎 − 𝑥 ) + (𝑏 − 𝑥 ) = 𝑦
                                              𝑎 + 𝑏 − 2𝑥 = 𝑦

Tudo bem até aqui, galera? A questão quer a razão entre o número de trabalhadores que são filiados aos
dois Sindicatos e o número total de trabalhadores da empresa. Matematicamente,

                                                      𝑥
                                         𝑅𝑒𝑠𝑝. =
                                                   𝑎+𝑏−𝑥+𝑦

O total de trabalhadores é obtido somando todas as regiões do diagrama.

                         𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝑡𝑟𝑎𝑏𝑎𝑙ℎ𝑎𝑑𝑜𝑟𝑒𝑠 = (𝑎 − 𝑥 ) + 𝑥 + (𝑏 − 𝑥 ) + 𝑦
                                 𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝑡𝑟𝑎𝑏𝑎𝑙ℎ𝑎𝑑𝑜𝑟𝑒𝑠 = 𝑎 + 𝑏 − 𝑥 + 𝑦
O problema que temos que enfrentar agora é essa excessiva quantidade de letras. Podemos usar o fato que
𝒂 + 𝒃 − 𝟐𝒙 = 𝒚 para sumir com o y na resposta. Veja:

                                         𝑥                                       𝑥
                   𝑅𝑒𝑠𝑝. =                             →       𝑅𝑒𝑠𝑝. =
                              𝑎 + 𝑏 − 𝑥 + (𝑎 + 𝑏 − 2𝑥)                   2 ∙ (𝑎 + 𝑏) − 3𝑥

Vamos escrever o a e o b em função do x e substituir.

                         2𝑎              𝟑𝒙                         2𝑏               𝟓𝒙
                    𝑥=          →   𝒂=                       𝑥=           →     𝒃=
                          3              𝟐                           5               𝟐


---

Assim,

                  𝑥                                    𝑥                          𝑥                     𝟏
𝑅𝑒𝑠𝑝. =                         →     𝑅𝑒𝑠𝑝. =                    →      𝑅𝑒𝑠𝑝. =         →     𝑹𝒆𝒔𝒑. =
               3𝑥 5𝑥                                 8𝑥                           5𝑥                    𝟓
          2 ∙ ( + ) − 3𝑥                        2 ∙ ( 2 ) − 3𝑥
                2   2

Gabarito: LETRA B.

24. (FGV/TJ-SP/2015) Em uma empresa com 40 funcionários, um funcionário é considerado novo quando
está na empresa há menos de 5 anos e é considerado antigo quando está há 5 anos ou mais. Atualmente,
há 14 funcionários novos na empresa, 18 funcionários com curso superior e 16 funcionários antigos que
não possuem curso superior. O número de funcionários novos com curso superior é:
a) 4.
b) 6.
c) 8.
d) 10.
e) 12.

Comentários:
Galera, são 40 funcionários. Se 14 são novos na empresa, então 40 − 14 = 𝟐𝟔 são funcionários antigos.
Desses 26 funcionários antigos, o examinador fala que 16 não possuem curso superior. Logo, quantos
possuem? Ora, 26 − 16 = 𝟏𝟎 funcionários antigos possuem curso superior! Tudo tranquilo até aqui?!

A questão diz que na empresa há, no total, 18 funcionários com curso superior. Já descobrimos que 10 deles
são funcionários antigos. Logo, 8 devem ser funcionários novos!

Gabarito: LETRA C.

25. (FGV/PREF. CUIABÁ/2015) Dos 30 alunos do 2º ano do Ensino Fundamental, 22 gostam de Português
e 26 gostam de Matemática. Apenas dois alunos não gostam nem de Português, nem de Matemática. O
número de alunos que gostam tanto de Português como de Matemática é
a) 18.
b) 20.
c) 22.
d) 24.
e) 26.

Comentários:
Pessoal, essa é uma ótima questão para usarmos diagramas de Venn. O primeiro passo é esboçá-los.


---

Note que são dois conjuntos. Um daqueles que gostam de português (P) e outro formado por aqueles que
gostam de matemática (M). O enunciado quer saber quantos alunos gostam das duas matérias. É
exatamente o valor da intersecção. Como ainda não sabemos, vamos chamá-lo de 𝑥.

Usamos todas as informações do enunciado para preencher as regiões. Peço atenção ao fato que "apenas
dois alunos não gostam nem de Português, nem de Matemática". Por esse motivo, temos o "2" ali fora dos
conjuntos. Ademias, sabemos que o somatório das regiões deve totalizar o número de pessoas envolvidas
na situação. No nosso caso, temos 30 alunos. Assim,

                                  (22 − 𝑥 ) + 𝑥 + (26 − 𝑥 ) + 2 = 30
                                            50 − 𝑥 = 30
                                               𝑥 = 20

Logo, 20 alunos gostam das duas matérias.

Gabarito: LETRA B.

26. (FGV/MRE/2015) Uma turma do curso de Relações Internacionais tem 28 alunos e todos falam inglês.
Sabe-se que 17 alunos falam espanhol e que 15 alunos falam francês. O número mínimo de estudantes
dessa turma que falam esses três idiomas é:
a) 4;
b) 5;
c) 6;
d) 7;
e) 8.


---

Comentários:
Pessoal, um dos fatos que devemos prestar mais atenção aqui é esse: todos falam inglês. Dessa forma, não
precisamos desenhar um diagrama de Venn com três conjuntos, mas apenas com dois. Observe.

Queremos a intersecção do conjunto acima, afinal, quem falar espanhol e francês, falará os três idiomas.
Afinal, lembre-se que o enunciado já disse que todos falam inglês. Vamos preencher o diagrama com as
informações do enunciado.

Pronto. Note que o 𝒚 representa aqueles que não falam nem espanhol nem francês. Sabemos que quando
somamos as regiões, devemos obter o total de pessoas envolvidas. No nosso problema, 28 alunos de um
curso de Relações Internacionais.

                                  (17 − 𝑥 ) + 𝑥 + (15 − 𝑥 ) + 𝑦 = 28
                                           32 − 𝑥 + 𝑦 = 28
                                              𝑥 =𝑦+4


Quando 𝑥 vai ser mínimo? Ora quando 𝒚 for igual a 0. Esse é o menor valor que 𝑦 pode assumir. Nessa
situação, não haveria ninguém que não sabe falar espanhol ou inglês.

                                               𝑥 = 0+4
                                                 𝑥=4


---

Logo, a quantidade mínima de pessoas que falam os três idiomas é 4.

Gabarito: LETRA A.

27. (FGV/PREF. CUIABÁ/2015) Uma empresa tem 20 funcionários sendo que 12 são homens. Sabe-se que
entre todos os funcionários apenas 9 sabem dirigir e que 6 mulheres não sabem dirigir. O número de
homens que não sabem dirigir é
a) 4.
b) 5.
c) 6.
d) 7.
e) 8.

Comentários:
Note que, 9 funcionários sabem dirigir. Assim, se ao todo são 20, temos 11 funcionários que não dirigem.
Se, desses 11 funcionários que não sabem dirigir, 6 são mulheres, então 5 são homens.

Gabarito: LETRA B.

28. (FGV/TJ-RO/2015) Dois conjuntos A e B têm exatamente a mesma quantidade de elementos. A união
deles tem 2015 elementos e a interseção deles tem 1515 elementos. O número de elementos do conjunto
A é:
a) 250;
b) 500;
c) 1015;
d) 1765;
e) 1845.

Comentários:
Questão que serve para fazermos uma aplicação do Princípio da Inclusão-Exclusão. Primeiro, vamos
entender as informações do enunciado.

- Dois conjuntos A e B têm exatamente a mesma quantidade de elementos → 𝒏(𝑨) = 𝒏(𝑩).
- A união deles tem 2015 elementos → 𝒏(𝑨 ∪ 𝑩) = 𝟐𝟎𝟏𝟓.
- A intersecção deles tem 1515 elementos → 𝒏(𝑨 ∩ 𝑩) = 𝟏𝟓𝟏𝟓.

Lembre-se da fórmula:

                                 𝑛(𝐴 ∪ 𝐵) = 𝑛(𝐴) + 𝑛(𝐵) − 𝑛(𝐴 ∩ 𝐵)

Substituindo o que temos.

                                     2015 = 𝑛(𝐴) + 𝑛(𝐴) − 1515


---

                                           3530 = 2 ∙ 𝑛(𝐴)
                                             𝑛(𝐴) = 1765
Gabarito: LETRA D.

29. (FGV/SSP-AM/2015) Em uma empresa de porte médio, 217 funcionários têm casa própria ou carro ou
as duas coisas. Se 189 têm carro e 63 têm casa própria, o número de funcionários que têm carro, mas não
têm casa própria é:
a) 124.
b) 138.
c) 144.
d) 148.
e) 154.

Comentários:
Beleza, galera. Estamos trabalhando com dois conjuntos. Um daqueles que têm a casa própria e um daqueles
que têm carro. Vamos esboçar o diagrama de Venn.

Note que não sabemos quantas pessoas possuem a casa própria e o carro. Por esse motivo, colocamos um
𝑥 na intersecção. Tudo bem? Agora, devemos somar as regiões. Essa soma equivale ao total de funcionários
que estão envolvidos no problema (217).

                      (63 − 𝑥 ) + 𝑥 + (189 − 𝑥 ) = 217     →      252 − 𝑥 = 217
                                                𝑥 = 35
Logo, 35 funcionários possuem tanto o carro quanto a casa. O número de funcionários que possui o carro
mas não possui a casa própria é dado pela região:


---

Assim,
                 𝑅𝑒𝑠𝑝. = 189 − 𝑥    →     𝑅𝑒𝑠𝑝. = 189 − 35     →       𝑹𝒆𝒔𝒑. = 𝟏𝟓𝟒

Gabarito: LETRA E.

30. (FGV/SSP-AM/2015) Em uma empresa trabalham homens e mulheres sendo, ao todo, 80 pessoas.
Dentre elas, sabe-se que:

- 20 falam inglês;
- 45 são homens;
- 26 mulheres não falam inglês.

O número de homens que trabalham nessa empresa e não falam inglês é:
a) 32.
b) 34.
c) 35.
d) 37.
e) 39.

Comentários:
Temos uma empresa com 80 pessoas. Dessas 80, 20 falam inglês. Como consequência, 60 não falam.

Além disso, dessas 60 pessoas que não falam, 26 são mulheres. Consequentemente, 34 serão homens.

Gabarito: LETRA B.

31. (FGV/PREF. OSASCO/2014) Em uma turma de 30 alunos, 10 gostam de matemática, 20 gostam de
português e 5 gostam de matemática e português. Nesta turma, não gostam nem de matemática nem de
português exatamente:
a) 5 alunos;
b) 10 alunos;
c) 15 alunos;
d) 20 alunos;
e) 25 alunos.

Comentários:
Vamos usar o Princípio da Inclusão-Exclusão para encontrar quantos alunos gostam de matemática ou de
português. Primeiro, vamos entender o que foi passado pelo enunciado.

- 10 gostam de matemática → 𝒏(𝑴) = 𝟏𝟎.
- 20 gostam de português → 𝒏(𝑷) = 𝟐𝟎.
- 5 gostam de matemática e português → 𝒏(𝑴 ∩ 𝑷) = 𝟓.


---

Lembre-se da fórmula:

                              𝑛 (𝑀 ∪ 𝑃 ) = 𝑛 ( 𝑀 ) + 𝑛 (𝑃 ) − 𝑛 ( 𝑀 ∩ 𝑃 )
                                     𝑛(𝑀 ∪ 𝑃) = 10 + 20 − 5
                                          𝑛(𝑀 ∪ 𝑃) = 25


Logo, 25 alunos gostam de matemática ou de português. Como a sala tem um total de 30 alunos, então
percebemos que existem 5 alunos que não gostam de nenhuma dessas matérias.

Gabarito: LETRA A.


---

                              LISTA DE QUESTÕES - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/PREF. SALVADOR/2019) Em uma classe de 20 estudantes, 12 são meninas. Além disso, dos 20
estudantes, 15 gostam de Matemática. É correto concluir que
a) nenhuma menina gosta de Matemática.
b) todas as meninas gostam de Matemática.
c) no máximo 7 meninas gostam de Matemática.
d) no mínimo 7 meninas gostam de Matemática.
e) exatamente 7 meninas gostam de Matemática.

2. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
tem apenas um elemento, ela é dita um conjunto unitário. Um exemplo de conjunto unitário é a coleção
formada pelos números que são:
a) ao mesmo tempo, divisores de 4 e 9;
b) divisores de 4;
c) divisores de 9;
d) maiores que 4 e menores que 9;
e) formados pelos algarismos 4 e 9.

3. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;
c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

4. (FGV/CODEBA/2010) Sejam 𝑨 = {𝟎, 𝟏, 𝟐, 𝟑} e 𝑩 = {𝟎, 𝟐, 𝟒} dois conjuntos. Com relação aos conjuntos
A e B, analise as afirmativas a seguir:

I. 𝑩 ⊂ 𝑨
II. 𝑨 ∪ 𝑩 = {𝟎, 𝟏, 𝟐, 𝟑, 𝟒}
III. 𝑨 ∩ 𝑩 = {𝟎, 𝟐}

Está(ão) correta(s) somente
a) I.


---

b) II.
c) III.
d) I e II.
e) II e III.

5. (FGV/BADESC/2010) Dado um conjunto A, chamamos subconjunto próprio não vazio de A a qualquer
conjunto que pode ser formado com parte dos elementos do conjunto A, desde que:

- algum elemento de A seja escolhido;
- não sejam escolhidos todos os elementos de A.

Sabemos que a quantidade de subconjuntos próprios não vazios de A é 14. A quantidade de elementos de
A é igual a:
a) 4
b) 5
c) 6
d) 7
e) 8

6. (FGV/ALESP/2002) São dados os conjuntos: D = divisores de 24 (divisores positivos), M = múltiplos de 3
(múltiplos positivos), S = D ∩ M e n = números de subconjuntos de S. Portanto, n é igual a:
a) 64
b) 16
c) 32
d) 8


---

               GABARITO
1.   LETRA D
2.   LETRA A
3.   LETRA C
4.   LETRA E
5.   LETRA A
6.   LETRA B


---

                            LISTA DE QUESTÕES - FGV

União, Intersecção, Complementar e Diferença

1. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

- A união de A e B tem 130 elementos.
- A diferença B – A tem 50 elementos.
- A diferença A – B tem 60 elementos.

Sendo x o número de elementos de A e y o número de elementos de B, o valor de x + y é igual a
A) 110.
B) 120.
C) 130.
D) 140.
E) 150.

2. (FGV/SEFAZ-MS/2006) Os conjuntos A, B e C satisfazem 𝑨 − (𝑩 ∩ 𝑪) = (𝑨 − 𝑩) ∪ (𝑨 − 𝑪):
a) nunca.
b) se e somente se A = B = C.
c) se e somente se B = C.
d) se e somente se B ∩ C = ⊘.
e) sempre.

3. (FGV/SEFAZ-MS/2006) Se X, Y e Z são conjuntos, 𝑿 ∩ (𝒀 ∪ 𝒁) = (𝑿 ∩ 𝒀) ∪ 𝒁:
a) nunca.
b) se e somente se X = Y = Z.
c) se e somente se 𝑍 ⊂ 𝑋
d) se e somente se 𝑍 ⊂ 𝑌
e) sempre.


---

             GABARITO
1. LETRA E
2. LETRA E
3. LETRA C


---

                            LISTA DE QUESTÕES - FGV

Princípio da Inclusão-Exclusão

1. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em relação
a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.
E) é possível que nenhuma delas seja capixaba torcedor do Vasco.

2. (FGV/MPE-GO/2022) Em um grupo de 48 pessoas, há 35 advogados e 32 policiais. Nesse grupo, o
número mínimo de pessoas que são ao mesmo tempo advogados e policiais é
A) 13.
B) 16.
C) 19.
D) 32.
E) 35.

3. (FGV/SEMSA-MANAUS/2022) Em um grupo de 50 pessoas, 27 gostam de filmes de suspense e 32 gostam
de filmes de terror. Com relação a essas 50 pessoas, é correto concluir que
A) no máximo 18 delas não gostam de filmes de suspense nem de filmes de terror.
B) exatamente 9 delas gostam tanto de filmes de suspense como de filmes de terror.
C) exatamente 18 delas só gostam de filmes de suspense.
D) exatamente 23 delas só gostam de filmes de terror.
E) no mínimo 18 delas gostam tanto de filmes de suspense como de filmes de terror.

4. (FGV/MPE-GO/2022) Uma empresa possui 32 funcionários que trabalham nos setores A, B e C. Sabe-se
que 20 funcionários trabalham no setor A, 14 funcionários trabalham no setor B e 9 funcionários trabalham
no setor C. Há funcionários que trabalham simultaneamente nos setores A e B, há funcionários que
trabalham simultaneamente nos setores A e C, mas nenhum funcionário trabalha simultaneamente nos
setores B e C. O número de funcionários que trabalha apenas no setor A é igual a
A) 4
B) 5
C) 6
D) 8
E) 9


---

5. (FGV/SEMSA-MANAUS/2022) Uma pesquisa foi feita com 40 funcionários de uma empresa e entre as
perguntas havia as que estão abaixo:

- Você tem filhos?
- Você tem animal de estimação?

20 pessoas responderam SIM para a primeira pergunta.
15 pessoas responderam SIM para a segunda pergunta.
11 pessoas deixaram as duas perguntas em branco.

As instruções da pesquisa estabeleciam que deixar em branco significaria dizer NÃO. Sendo assim, o
número de pessoas que possuem filhos e animais de estimação é igual a
A) 2.
B) 3.
C) 4.
D) 5.
E) 6.

6. (FGV/PC-RN/2021) Em um grupo de esportistas, 1/3 deles só gostam de vôlei e, dos demais, 2/5 gostam
de vôlei e também de basquete. Todos os esportistas desse grupo gostam de, pelo menos, um desses dois
esportes. Em relação ao total de membros desse grupo, a fração daqueles que só gostam de basquete é:
A) 2/3;
B) 2/5;
C) 3/5;
D) 4/15;
E) 1/15.

7. (FGV/IMBEL/2021) Os 38 empregados novos da fábrica de brinquedos BLIME estão passando por um
treinamento inicial. Uma das tarefas do treinamento é a de assistir aos filmes A e B sobre o funcionamento
de duas partes da fábrica. Em uma reunião com os novos empregados o coordenador perguntou a todos
quem já tinha assistido aos filmes recomendados e ele percebeu, pelas respostas, que

- N pessoas assistiram ao filme A.
- 2N pessoas assistiram ao filme B.
- 3N pessoas não assistiram a nenhum dos dois filmes.

É correto concluir que o número mínimo de pessoas que assistiu aos dois filmes foi
A) 1.
B) 2.
C) 3.


---

D) 4.
E) 5.

8. (FGV/IMBEL/2021) Trinta estudantes praticam judô, natação e basquete, sendo que todos eles praticam
pelo menos um desses esportes. Há 15 que praticam judô, 17 que praticam natação e 12 que praticam
basquete. Há 10 estudantes que praticam pelo menos dois esportes. O número de estudantes que
praticam os três esportes é
A) 4.
B) 5.
C) 6.
D) 7.
E) 8.

9. (FGV/PM-AM/2022) Em um grupo de 45 soldados, 27 gostam de marchar e 38 gostam de praticar tiro
ao alvo. Sejam:

X: o número de soldados desse grupo que gostam de marchar e também de praticar tiro ao alvo;
Y: o número de soldados desse grupo que não gostam nem de marchar nem de praticar tiro ao alvo.

Nesse caso, é correto afirmar que
A) X é no máximo 20.
B) Y é no mínimo 7.
C) quando X = 23, tem-se Y = 7.
D) quando Y = 7, tem-se X = 20.
E) quando Y = 5, tem-se X = 25.

10. (FGV/PREF. SALVADOR/2019) 50 atletas estão treinando e todos usam bermuda e camiseta do mesmo
modelo, mas com cores diversas. Entre esses atletas há 20 com bermudas brancas, 25 com camisetas
brancas e 12 com bermudas e camisetas brancas. Assinale a opção que indica o número de atletas que não
estão vestindo nenhuma peça branca.
a) 5
b) 13
c) 15
d) 17
e) 20

11. (FGV/PREF. ANGRA/2019) Aos 5 anos, toda criança deve tomar um reforço das vacinas tríplice e pólio.
Uma pesquisa feita com as 80 crianças que entraram no 1º ano do Ensino Fundamental de uma escola
mostrou que:


---

- 54 alunos tomaram a vacina tríplice.
- 52 alunos tomaram a vacina pólio.
- 16 alunos não tomaram nenhuma das duas vacinas.

O número de alunos que tomou as duas vacinas é
a) 42.
b) 44.
c) 46.
d) 48.
e) 50.

12. (FGV/MPE-RJ/2019) Sobre os conjuntos A e B, sabe-se que:
- (𝑨 – 𝑩) tem 7 elementos;
- A tem 28 elementos;
- A união de A e B tem 38 elementos
O número de elementos do conjunto B é:
a) 10;
b) 18;
c) 19;
d) 31;
e) 35.
13. (FGV/BANESTES/2018) Um conjunto tem 8 elementos, outro conjunto tem 9 elementos e a união deles
tem 12 elementos. O número de elementos da interseção desses conjuntos é:
a) 1;
b) 2;
c) 3;
d) 4;
e) 5.

14. (FGV/COMPESA/2018) Em uma empresa trabalham 40 técnicos e todos falam português. Entre eles,
há técnicos que falam inglês e há técnicos que falam alemão, porém, entre os que falam apenas um idioma
estrangeiro, o número dos que falam inglês é o dobro do número dos que falam alemão. Sabe-se que 15
técnicos falam apenas português e que 4 técnicos falam tanto inglês quanto alemão. O número de técnicos
que falam inglês é
a) 7
b) 11
c) 14
d) 18
e) 20


---

15. (FGV/BANESTES/2018) As equipes de Abel e de Nádia têm o mesmo número de funcionários. Cinco
funcionários participam das duas equipes. Não há outros funcionários com essa característica. Juntando-
se as duas equipes tem-se 41 funcionários ao todo. As equipes de Abel e de Nádia têm cada uma:
a) 26
b) 25
c) 24
d) 23
e) 22

16. (FGV/PREF. SALVADOR/2017) Em um grupo de 30 profissionais, todos são engenheiros ou arquitetos.
A quantidade daqueles que são somente arquitetos é o dobro da quantidade dos que são somente
engenheiros. Doze desses profissionais são arquitetos e também engenheiros. Assinale a opção que indica
o número de engenheiros desse grupo.
a) 6
b) 10
c) 12
d) 18
e) 24

17. (FGV/PREF. SALVADOR/2017) Em certo concurso, inscreveram-se 80 candidatos. Sabe-se que, desses
candidatos, 50 são baianos, 22 possuem curso superior e 26 são de outros estados e não possuem curso
superior. O número de candidatos baianos com curso superior é
a) 16.
b) 18.
c) 20.
d) 22.
e) 24.

18. (FGV/PREF. SALVADOR/2017) Dois conjuntos A e B têm a mesma quantidade de elementos. A união
deles tem 2017 elementos e a interseção deles tem 1007 elementos. O número de elementos do conjunto
Aé
a) 505.
b) 1010.
c) 1512.
d) 1515.
e) 3014.

19. (FGV/IBGE/2017) Na assembleia de um condomínio, duas questões independentes foram colocadas
em votação para aprovação. Dos 200 condôminos presentes, 125 votaram a favor da primeira questão,
110 votaram a favor da segunda questão e 45 votaram contra as duas questões. Não houve votos em
branco ou anulados. O número de condôminos que votaram a favor das duas questões foi:


---

a) 80;
b) 75;
c) 70;
d) 65;
e) 60.

20. (FGV/SEPOG-RO/2017) Cada um dos 40 funcionários de uma empresa tem pelo menos uma das
habilidades A, B ou C. Nenhum deles tem as três habilidades. 21 deles não têm a habilidade A, 20 deles
não têm a habilidade B e 24 deles não têm a habilidade C. O número de funcionários dessa empresa que
têm duas das habilidades A, B ou C é:
a) 11.
b) 13.
c) 15.
d) 17.
e) 19.

21. (FGV/PREF. PAULÍNIA/2016) Em certo escritório trabalham 25 advogados. Dentre eles, 18 falam inglês
e 12 falam espanhol. O número máximo de advogados desse escritório que não fala nenhum desses dois
idiomas é
a) 5.
b) 6.
c) 7.
d) 8.
e) 9.

22. (FGV/PREF. PAULÍNIA/2016) Em um processo seletivo, os candidatos tinham que possuir três
características desejáveis A, B e C para ocupar o cargo. Dos 120 candidatos inscritos, todos possuíam pelo
menos uma das três características, mas nenhum possuía as três características desejáveis: 52 candidatos
não possuíam a característica A, 65 não possuíam a característica B e 47 não possuíam a característica C.
O número de candidatos que possuíam duas das três características desejáveis é
a) 76.
b) 68.
c) 60.
d) 52.
e) 44.

23. (FGV/CODEBA/2015) Entre os trabalhadores de uma empresa, há os que são filiados ao Sindicato A e
os que são filiados ao Sindicato B. Alguns são filiados aos dois Sindicatos e outros a nenhum dos dois. Dos
que são filiados ao Sindicato A, 2/3 também são filiados ao Sindicato B e dos que são filiados ao Sindicato
B, 2/5 também são filiados ao Sindicato A. Além disso, o número de trabalhadores da empresa que são
filiados a somente um desses dois Sindicatos é igual ao número daqueles que não são filiados a nenhum


---

dos dois. A razão entre o número de trabalhadores que são filiados aos dois Sindicatos e o número total
de trabalhadores da empresa é
a) 1/4
b) 1/5
c) 2/5
d) 3/5
e) 3/10

24. (FGV/TJ-SP/2015) Em uma empresa com 40 funcionários, um funcionário é considerado novo quando
está na empresa há menos de 5 anos e é considerado antigo quando está há 5 anos ou mais. Atualmente,
há 14 funcionários novos na empresa, 18 funcionários com curso superior e 16 funcionários antigos que
não possuem curso superior. O número de funcionários novos com curso superior é:
a) 4.
b) 6.
c) 8.
d) 10.
e) 12.

25. (FGV/PREF. CUIABÁ/2015) Dos 30 alunos do 2º ano do Ensino Fundamental, 22 gostam de Português
e 26 gostam de Matemática. Apenas dois alunos não gostam nem de Português, nem de Matemática. O
número de alunos que gostam tanto de Português como de Matemática é
a) 18.
b) 20.
c) 22.
d) 24.
e) 26.

26. (FGV/MRE/2015) Uma turma do curso de Relações Internacionais tem 28 alunos e todos falam inglês.
Sabe-se que 17 alunos falam espanhol e que 15 alunos falam francês. O número mínimo de estudantes
dessa turma que falam esses três idiomas é:
a) 4;
b) 5;
c) 6;
d) 7;
e) 8.

27. (FGV/PREF. CUIABÁ/2015) Uma empresa tem 20 funcionários sendo que 12 são homens. Sabe-se que
entre todos os funcionários apenas 9 sabem dirigir e que 6 mulheres não sabem dirigir. O número de
homens que não sabem dirigir é
a) 4.
b) 5.


---

c) 6.
d) 7.
e) 8.

28. (FGV/TJ-RO/2015) Dois conjuntos A e B têm exatamente a mesma quantidade de elementos. A união
deles tem 2015 elementos e a interseção deles tem 1515 elementos. O número de elementos do conjunto
A é:
a) 250;
b) 500;
c) 1015;
d) 1765;
e) 1845.

29. (FGV/SSP-AM/2015) Em uma empresa de porte médio, 217 funcionários têm casa própria ou carro ou
as duas coisas. Se 189 têm carro e 63 têm casa própria, o número de funcionários que têm carro, mas não
têm casa própria é:
a) 124.
b) 138.
c) 144.
d) 148.
e) 154.

30. (FGV/SSP-AM/2015) Em uma empresa trabalham homens e mulheres sendo, ao todo, 80 pessoas.
Dentre elas, sabe-se que:

- 20 falam inglês;
- 45 são homens;
- 26 mulheres não falam inglês.

O número de homens que trabalham nessa empresa e não falam inglês é:
a) 32.
b) 34.
c) 35.
d) 37.
e) 39.

31. (FGV/PREF. OSASCO/2014) Em uma turma de 30 alunos, 10 gostam de matemática, 20 gostam de
português e 5 gostam de matemática e português. Nesta turma, não gostam nem de matemática nem de
português exatamente:
a) 5 alunos;
b) 10 alunos;
c) 15 alunos;


---

d) 20 alunos;
e) 25 alunos.


---

              GABARITO
1. LETRA D               17. LETRA B
2. LETRA C               18. LETRA C
3. LETRA A               19. LETRA A
4. LETRA E               20. LETRA C
5. LETRA E               21. LETRA C
6. LETRA B               22. LETRA A
7. LETRA D               23. LETRA B
8. LETRA A               24. LETRA C
9. LETRA E               25. LETRA B
10. LETRA D              26. LETRA A
11. LETRA A              27. LETRA B
12. LETRA D              28. LETRA D
13. LETRA E              29. LETRA E
14. LETRA D              30. LETRA B
15. LETRA D              31. LETRA A
16. LETRA D


---
