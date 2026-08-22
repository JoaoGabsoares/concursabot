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
arquivo_origem: Aula 12_Apostila.txt
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
                www.estrategiaconcursos.com.br                                                                                                                                          100

                                                             


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

   •   𝐴 = {𝑎, 𝑏, 𝑐, 𝑑, 𝑒}
   •   𝐵 = {0, 2, 4, 6, 8}
   •   𝐶 = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}

O conjunto 𝐴 é formado pelas 5 primeiras letras no nosso alfabeto. O conjunto 𝐵 é formado por 5 números
pares. O conjunto 𝐶 é formado por 10 números ímpares. Você pode estar se perguntando: só podemos fazer
conjuntos de números e letras?

A resposta é não! Podemos criar conjuntos de basicamente qualquer coisa, desde um conjunto
representando os funcionários de determinada empresa a conjuntos formados por outros conjuntos! Por
exemplo, o conjunto 𝐸 lista alguns professores de exatas do Estratégia Concursos.

   •   E = {Francisco, Eduardo, Vinicius, Luana, Djefferson}

Primeiramente, note que um conjunto muitas vezes aparecerá com seus elementos listados dentro de um
par de chaves. Por isso, sempre que for escrever algum conjunto, não esqueça de colocar seus elementos
aqui dentro: { }. É também usual as pessoas nomearem seus conjuntos com letras maiúsculas, mas isso não
é mandatório, nem necessário, em algumas situações.

Relação de Pertinência
Quando um elemento faz parte de determinado conjunto, dizemos que o elemento PERTENCE ao conjunto.
Essa relação de pertinência entre um elemento e um conjunto é representada pelo símbolo ∈.

   •   𝑏 ∈ 𝐴 : Lemos: 𝑏 pertence a 𝐴;
   •   4 ∈ 𝐵 : Lemos: 4 pertence a 𝐵;
   •   15 ∈ 𝐶 : Lemos: 15 pertence a 𝐶.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            3
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Atente-se à simbologia! Podemos dizer que um elemento não pertence a um determinado conjunto. Para
isso, utilizamos o símbolo "não pertence": ∉.

   •   z ∉ A : z não pertence a A;
   •   100 ∉ B : 100 não pertence a B;
   •   Beltrano ∉ E : Beltrano não pertence a E.

Relação de Inclusão
Existe mais um tipo de relação que devemos estudar: a relação de inclusão. Nesse tipo de relação, é
estabelecido um relacionamento entre dois conjuntos e não mais entre um elemento e outro conjunto. Para
isso, usamos uma simbologia específica que você deverá guardar: ⊂, ⊄, ⊃ 𝒆 ⊅. Vamos ver com calma o que
cada um deles diz! Considere: 𝑨 = {𝒂, 𝒃, 𝒄, 𝒅, 𝒆}, 𝑩 = {𝟎, 𝟐, 𝟒, 𝟔, 𝟖} e 𝑪 = {𝟏, 𝟑, 𝟓, 𝟕, 𝟗, 𝟏𝟏, 𝟏𝟑, 𝟏𝟓, 𝟏𝟕, 𝟏𝟗}.

   •   {𝑎, 𝑒} ⊂ 𝐴 : Lemos: {𝑎, 𝑒} está contido em 𝐴;
   •   {0, 2, 8} ⊂ 𝐵 : Lemos: {0, 2, 8} está contido em 𝐵;

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
        www.estrategiaconcursos.com.br                                                                       100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Nesse caso, temos que {𝑎, 𝑒} ⊄ 𝐵 : Lemos: {𝑎, 𝑒} não está contido em 𝐵 ou {𝑎, 𝑒} não é um subconjunto de
𝐵. Vamos ver mais alguns exemplos de quando um conjunto não está contido em outro:

   •   {𝑎, 𝑒, 𝑓} ⊄ 𝐴
   •   {1, 3, 5} ⊄ 𝐵
   •   {0, 1} ⊄ 𝐶
   •   {Sicrano, Beltrano} ⊄ E

Perceba que basta um elemento do conjunto não pertencer ao conjunto maior que não poderemos
estabelecer uma relação de inclusão entre os dois conjuntos e, portanto, dizemos que um não está contido
no outro. Pessoal, se {𝒂, 𝒆} está contido em 𝑨, então também podemos dizer que 𝑨 contém {𝒂, 𝒆}. Quando
queremos expressar essa ideia de que um conjunto maior contém determinado subconjunto, utilizamos o
símbolo ⊃.

   •   𝐴 ⊃ {𝑎, 𝑒} : 𝐴 contém {𝑎, 𝑒}
   •   𝐵 ⊃ {0, 2, 8} : 𝐵 contém {0, 2, 8}
   •   𝐶 ⊃ {1, 3, 5, 19} : 𝐶 contém {1, 3, 5, 19}
   •   E ⊃ {Francisco, Eduardo} : 𝐸 contém {Francisco, Eduardo}

Analogamente, podemos estender o raciocínio para quando queremos dizer que determinado conjunto não
contém outro. Nessas situações, utilizamos ⊅.

   •   𝐴 ⊅ {𝑎, 𝑒, 𝑓} : 𝐴 não contém {𝑎, 𝑒, 𝑓}
   •   𝐶 ⊅ {0, 1} : 𝐶 não contém {0, 1}
   •   E ⊅ {Sicrano, Beltrano} -- 𝐸 não contém {Sicrano, Beltrano}

                                                                                    𝐸
                                               𝐵                                 𝐷𝑗𝑒𝑓𝑓𝑒𝑟𝑠𝑜𝑛
            𝐴
            𝑏                              0        2                            𝐸𝑑𝑢𝑎𝑟𝑑𝑜      𝑆𝑖𝑐𝑟𝑎𝑛𝑜
                    𝑎       𝑓                                  1
                                                                     5           𝐹𝑟𝑎𝑛𝑐𝑖𝑠𝑐𝑜
            𝑐                             4         6                                         𝐵𝑒𝑙𝑡𝑟𝑎𝑛𝑜
                    𝑒                                           3                𝐿𝑢𝑎𝑛𝑎

                𝑑                               8
                                                                                 𝑉𝑖𝑛í𝑐𝑖𝑢𝑠

            𝐴 ⊅ {𝑎, 𝑒, 𝑓}                      𝐵 ⊅ {1, 3, 5}                 E ⊅ {Sicrano, Beltrano}

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                5
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(PREF. PIÊN/2023) Sejam A, B e C conjuntos dados por 𝐴 = {−1,2,9,7,3}, 𝐵 = {2,7} e 𝐶 = {−1,0}. Assinale
a alternativa CORRETA.
A) 0 ∈ 𝐴
B) 7 ⊂ 𝐴
C) 𝐵 ⊂ 𝐴
D) 𝐶 ⊂ 𝐴
E) −1 ∉ 𝐴

Comentários:
Vamos verificar se cada alternativa, de acordo com a definição dos conjuntos A, B e C.

A) 0 ∈ 𝐴
Falsa, pois 0 não está no conjunto 𝐴 = {−1,2,9,7,3}.

B) 7 ⊂ 𝐴
Falsa, pois 7 não é um conjunto, mas um elemento. Não podemos dizer que um elemento está contido em
outro conjunto.

C) 𝐵 ⊂ 𝐴
Verdadeira, pois todos os elementos de 𝐵 = {2,7} também estão no conjunto A.

D) 𝐶 ⊂ 𝐴
Falsa, pois 𝐶 = {−1,0} tem um elemento, 0, que não está no conjunto A.

E) −1 ∉ 𝐴
Falsa, pois −1 está no conjunto A.

Gabarito: LETRA C.

Igualdade entre Conjuntos
Pessoal, dois conjuntos são considerados iguais (ou idênticos) se eles possuem exatamente os mesmos
elementos! Todo elemento que estiver em um deve necessariamente estar no outro. Por exemplo, considere
os conjuntos 𝐴 = {1, 2, 3} e 𝐵 = {3, 2,1}. Nessa situação, podemos escrever que 𝐴 = 𝐵.

Professor, mas a ordem está diferente!

Não importa! O importante é que todos elementos de A são os mesmos elementos de B.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           6
        www.estrategiaconcursos.com.br                                                              100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(MPE-GO/2022) Sejam x e y números tais que os conjuntos {0, 8, 2} e {𝑥, 𝑦, 2} são iguais, podemos afirmar
que:
A) 𝑥 = 0 e 𝑦 = 8
B) 𝑥 + 𝑦 = 8
C) 𝑥 < 𝑦
D) 𝑥 + 2𝑦 = 8

Comentários:
Para que os dois conjuntos sejam iguais, seus elementos devem ser iguais. Note que o "2" já aparece nos
dois conjuntos, então não vamos nos preocupar com ele.

                                           {0, 8, 2}             {𝑥, 𝑦, 2}

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


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                7
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Subconjuntos
Vamos aprofundar um pouco o nosso estudo sobre os subconjuntos. Para começar, tente dizer quais são os
subconjuntos do conjunto 𝐴 = {𝑎, 𝑏}. Pronto? Observe como fica:

                                         Conjunto              Subconjuntos
                                                                         ∅
                                                                       {𝑎}
                                   𝐴 = {𝑎, 𝑏}                          {𝑏}
                                                                      {𝑎, 𝑏}

A tabela acima lista todos os subconjuntos que podemos formar utilizando o conjunto 𝐴. Sabendo disso,
podemos escrever as seguintes relações:

   • ∅ ⊂𝐴                                                          • {𝑏} ⊂ 𝐴
   • {𝑎} ⊂ 𝐴                                                       • {𝑎, 𝑏} ⊂ 𝐴

Devemos falar um pouco do conjunto vazio e conjunto unitário. O conjunto vazio, como o próprio nome
sugere, é um conjunto que não possui elementos! É representado por meio do símbolo ∅ mas também
pode aparecer como um simples par de chaves { }. Já o conjunto unitário é todo conjunto que possui um
único elemento!
                               O conjunto vazio é subconjunto de qualquer outro conjunto.

                                                    Seja 𝑋 um conjunto genérico, então:

                                                   ∅⊂𝑿                𝑜𝑢              {}⊂𝑿
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


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          8
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Quando um subconjunto de B é diferente do próprio B, chamamos ele de subconjunto próprio de B. Por
exemplo, {𝑎}, {𝑏}, {𝑐}, {𝑎, 𝑏}, {𝑎, 𝑐} são subconjuntos próprios de B. Já o subconjunto {𝑎, 𝑏, 𝑐} é denominado
impróprio pois é igual ao próprio B! Com os conjuntos listados na tabela acima são subconjuntos de 𝐵, então
podemos escrever:

               •   ∅ ⊂𝐵                                                       •   {𝑎, 𝑏} ⊂ 𝐵
               •   {𝑎} ⊂ 𝐵                                                    •   {𝑎, 𝑐} ⊂ 𝐵
               •   {𝑏} ⊂ 𝐵                                                    •   {𝑏, 𝑐} ⊂ 𝐵
               •   {𝑐} ⊂ 𝐵                                                    •   {𝑎, 𝑏, 𝑐} ⊂

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


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                9
         www.estrategiaconcursos.com.br                                                                   100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como o conjunto 𝐶 só possui 3 elementos, encerramos por aqui! Listamos todos os subconjuntos dele.
Observe que quando tínhamos um conjunto com 2 elementos, obtivemos 4 subconjuntos. Ao aumentar um
elemento no conjunto, passamos a ter 8 subconjuntos. Será que é possível estabelecer uma fórmula para
calcular o número de subconjuntos baseado na quantidade de elementos de um conjunto?

É possível sim e a fórmula é bem simples. Seja 𝒏(𝑨) o número de elementos de um conjunto 𝑨. Então, o
número de subconjuntos de 𝑨, 𝒏𝑺𝑨 , é dado por:

                                              𝑛𝑆𝐴 = 2𝑛(𝐴)
Por exemplo, vamos voltar no conjunto 𝐶 = {1, 2, 3}. Como ele tem três elementos, para encontrar o
número de subconjuntos de C, fazemos assim:            ==219a34==

                    𝑛𝑆𝐶 = 2𝑛(𝐶)             →         𝑛𝑆𝐶 = 23               →   𝑛𝑆𝐶 = 8
Logo, C tem oito subconjuntos.

(Pref. Tuparetema/2024) Julgue o item:

Um conjunto não pode ser um subconjunto de si mesmo.

Comentários:
Para julgar o item, precisamos saber o que é um subconjunto. Um conjunto 𝐴 é um subconjunto de um
conjunto 𝐵 se todos os elementos de 𝐴 também pertencem a 𝐵. Por exemplo, {𝑎, 𝑏} é um subconjunto de
{𝑎, 𝑏, 𝑐}, mas {𝑎, 𝑑} não é um subconjunto de {𝑎, 𝑏, 𝑐}. A relação de subconjunto é representada pelo símbolo
⊆. Podemos escrever {𝑎, 𝑏} ⊆ {𝑎, 𝑏, 𝑐}, mas não podemos escrever {𝑎, 𝑑} ⊆ {𝑎, 𝑏, 𝑐}.

Uma propriedade importante da relação de subconjunto é que todo conjunto é um subconjunto de si
mesmo. Isso significa que qualquer conjunto 𝐴 satisfaz 𝑨 ⊆ 𝑨, pois todos os elementos de 𝐴 pertencem a
𝐴. Portanto, o item está errado. Um conjunto pode sim ser um subconjunto de si mesmo.

Gabarito: ERRADO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                10
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

(CRQ 4/2023) Considerem-se A o conjunto dos meses do ano que começam com vogal, B o conjunto dos
meses do ano que começam com consoante e C o conjunto dos meses do ano que começam com a letra J.
Com base nessas informações, julgue o item.

O conjunto das partes de A tem 8 subconjuntos não vazios.

Comentários:
Vamos lá!

conjunto A é formado pelos meses do ano que começam com vogal, ou seja:

                                          A = {abril, agosto, outubro}

O conjunto das partes de A é o conjunto que contém todos os subconjuntos possíveis de A, incluindo o
subconjunto vazio e o próprio A. Para calcular o número de elementos do conjunto das partes de um
conjunto finito, usa-se a fórmula 𝟐𝒏 , onde n é o número de elementos do conjunto original. No caso de A,
𝑛 = 3, então o conjunto das partes de A tem 23 = 𝟖 elementos.

Porém, desses 8 elementos, um deles é o subconjunto vazio. Portanto, o conjunto das partes de A tem 7
subconjuntos não vazios, e não 8 como afirma o item.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            11
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Os subconjuntos não vazios de A são: {abril}, {agosto}, {outubro}, {abril, agosto}, {abril, outubro}, {agosto,
outubro} e {abril, agosto, outubro}.

Gabarito: ERRADO.

Observe o conjunto 𝐹 exemplificado abaixo.

                                𝐹 = {1, 2, 3, {𝑎, 𝑏, 𝑐}, {𝑑, 𝑒, 𝑓}, {𝑊} }
Assim como o conjunto das partes, 𝑭 é um conjunto que possui como elemento outros conjuntos. Note que
o conjunto {𝒂, 𝒃, 𝒄} é um elemento de 𝑭. Nessas situações, e somente nelas, podemos escrever {𝒂, 𝒃, 𝒄} ∈
𝑭. Galera, muita atenção aqui! {𝒂, 𝒃, 𝒄} não é um subconjunto de F, é um elemento! Perceba que ele está
listado juntamente com os demais elementos!

            •   1∈𝐹                                                          •   {𝑎, 𝑏, 𝑐} ∈ 𝐹
            •   2∈𝐹                                                          •   {𝑑, 𝑒, 𝑓} ∈ 𝐹
            •   3∈𝐹                                                          •   {𝑊} ∈ 𝐹

E nesses casos, quando usaremos a relação de inclusão? Veja alguns exemplos de subconjuntos de F:

            •   {1} ⊂ 𝐹                                                      •   {{𝑎, 𝑏, 𝑐, }} ⊂ 𝐹
            •   {1, 2} ⊂ 𝐹                                                   •   {{𝑊}} ⊂ 𝐹
            •   {1, 2, 3} ⊂ 𝐹                                                •   {{𝑎, 𝑏, 𝑐, }, {𝑑, 𝑒, 𝑓}, {𝑊}} ⊂ 𝐹

Observe que, para representar os subconjuntos que contém outros conjuntos, utilizamos, sem problema
algum, dois pares de chaves. Tenha bastante cuidado em questões que tragam esse tipo de abordagem! Já
vi muitas bancas se enrolarem ao cobrar questões com essa temática, pois desconhecem que conjuntos
podem sim ser elementos de outros conjuntos e que podemos estabelecer uma relação de pertinência
nessas situações.

(FMS POMBOS/2023) Julgue o item:

Dado que X = {3, 5, 7, 9} e Y = {3, 5, {7, 9}}, podemos afirmar corretamente que esses conjuntos são iguais.


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                           12
        www.estrategiaconcursos.com.br                                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Comentários:
Para julgar o item, devemos lembrar a definição de conjunto e de igualdade entre conjuntos. Um conjunto é
uma coleção de objetos distintos e não ordenados, chamados de elementos. Dois conjuntos são iguais se e
somente se têm os mesmos elementos, independentemente da ordem ou da forma como são apresentados.

No caso dos conjuntos X = {3, 5, 7, 9} e Y = {3, 5, {7, 9}}, podemos observar que eles não são iguais, pois têm
elementos diferentes. O conjunto X tem quatro elementos: 3, 5, 7 e 9. O conjunto Y tem três elementos: 3,
5 e {7, 9}. O elemento {7, 9} é um conjunto em si mesmo, formado por dois números. Portanto, ele é diferente
do elemento 7 e do elemento 9, que são números simples.

Logo, o item está errado, pois afirma incorretamente que os conjuntos X e Y são iguais.

Gabarito: ERRADO.

(FMS POMBOS/2023) Julgue o item:

Ao empregar a linguagem de conjuntos e considerando o conjunto 𝑋 = {𝑥, {𝑦}, 𝑧}, podemos afirmar
corretamente que o conjunto {𝑥, {𝑦}} pertence a X.

Comentários:
Na linguagem dos conjuntos, usamos os símbolos ∈ (pertence) e ∉ (não pertence) para indicar se um
elemento faz ou não parte de um conjunto. Por exemplo, se A = {1, 2, 3}, então 1 ∈ A e 4 ∉ A. Um conjunto
também pode conter outros conjuntos como seus elementos. Nesse caso, usamos as chaves {{ }} para
diferenciar os conjuntos dos elementos. Por exemplo, se B = {a, {b, c}, d}, então a ∈ B, b ∉ B, {b, c} ∈ B e {a,
d} ∉ B.

No item, temos o conjunto 𝑿 = {𝒙, {𝒚}, 𝒛}, que contém três elementos: x, {y} e z. O elemento {y} é um
conjunto que contém o elemento y. Portanto, podemos dizer que y ∈ {y} e {y} ∈ X. No entanto, o conjunto
{x, {y}} não é um elemento de X, mas sim um subconjunto de X. Logo, o item está errado.

Gabarito: ERRADO.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                   13
        www.estrategiaconcursos.com.br                                                                      100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Operações com Conjuntos
Representação por Diagramas
Você deve ter visto ao longo da aula que apareceram alguns conjuntos na forma de diagramas. Esse tipo de
representação é extremamente útil na resolução de questões, pois possibilita uma melhor compreensão do
problema. Por exemplo, seja 𝑨 o conjunto de funcionários de uma determinada empresa.

                                                    𝑨
                                          Ana
                                                         Ohara
                                                        Beatriz            Yasmim
                                                           Ítalo

Todos aqueles que estão dentro do conjunto 𝑨 representam funcionários da empresa. Quem está fora, não
é funcionário da empresa. Olhando simplesmente para o diagrama, podemos dizer que:

       •     𝑂ℎ𝑎𝑟𝑎 ∈ 𝐴;                                                •     𝑌𝑎𝑠𝑚𝑖𝑚 ∉ 𝐴;
       •     𝐵𝑒𝑎𝑡𝑟𝑖𝑧 ∈ 𝐴;                                              •     𝐴𝑛𝑎 ∉ 𝐴.
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           14
        www.estrategiaconcursos.com.br                                                               100

                                    


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
𝐷. Logo, o conjunto intersecção será formado apenas pelo elemento 2: 𝑪 ∩ 𝑫 = {𝟐}. Veja mais um exemplo
abaixo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              15
        www.estrategiaconcursos.com.br                                                                  100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Temos que 𝑋 = {𝐴, 𝐵, 𝐶, 𝐷} e 𝑍 = {𝐵, 𝐶, 𝐷, 𝐸}. São dois conjuntos distintos, mas que possuem alguns
elementos em comum. Os elementos 𝐵, 𝐶 𝑒 𝐷 aparecem nos 2 conjuntos e formam o conjunto intersecção:
𝑿 ∩ 𝒁 = {𝑩, 𝑪, 𝑫}. Vamos treinar um pouco esses conceitos?

(IBGE/2023) Assinale a alternativa que identifica corretamente a intersecção entre esses três conjuntos A =
{1, 2, 5, 6, 7}, B = {2, 3, 4, 5, 6, 7} e C = {0, 1, 2, 3, 4, 5}.
A) {2, 3, 5}
B) {2, 5}
C) {6, 7}
D) {1, 2, 5}
E) {1, 2, 3, 4, 5}

Comentários:
A intersecção entre três conjuntos é o conjunto formado pelos elementos que pertencem aos três conjuntos
ao mesmo tempo. Portanto, para encontrar a intersecção entre A, B e C, basta identificar quais elementos
estão presentes nos três conjuntos dados.

Assim, para encontrar a intersecção entre A, B e C, devemos verificar quais elementos satisfazem a condição
de pertencer aos três conjuntos A, B e C. Dados os conjuntos A = {1, 2, 5, 6, 7}, B = {2, 3, 4, 5, 6, 7} e C = {0, 1,
2, 3, 4, 5}, podemos ver que os únicos elementos que cumprem essa condição são 2 e 5. Portanto, a
intersecção entre esses três conjuntos é o conjunto {2, 5}. Assim, a alternativa correta é a letra B.

Gabarito: LETRA B.

Quando dois conjuntos possuem elementos em comum, podemos representá-los assim:

Essa região comum representa exatamente a sua intersecção. Os elementos que estão na região em
vermelho abaixo pertencem simultaneamente aos conjuntos A e B.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                       16
         www.estrategiaconcursos.com.br                                                                          100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Caso os conjuntos não possuam elementos em comum, isto é, não haja intersecção entre os dois, nós
vamos chamá-los de disjuntos e os representaremos utilizando círculos afastados um do outro.

Diferença
Existe uma outra operação que é muito importante para a sua prova! Essa operação é a diferença ou, como
também é conhecida, a subtração de conjuntos! O conjunto diferença é representado por 𝑨 − 𝑩 e é
formado por todos os elementos de A que não são elementos de B! Por exemplo, considere os conjuntos:

Observe que 𝐴 = {1, 2, 3, 4, 5, 6} e 𝐵 = {1, 3, 5}. Para encontrar 𝐴 − 𝐵, devemos selecionar os elementos
de 𝑨 que não são elementos de 𝑩! Ou seja, aqueles elementos que são apenas elementos de 𝑨! Observe
que 𝐴 e 𝐵 possuem em comum os seguintes elementos: 𝐴 ∩ 𝐵 = {1, 3, 5}. Logo, se 𝐴 = {𝟏, 2, 𝟑, 4, 𝟓, 6},
então o 𝐴 − 𝐵 = {2, 4, 6}. Em diagramas, também é possível representar o conjunto diferença.

Um detalhe importante é que se 𝐴 e 𝐵 são conjuntos disjuntos, então 𝑨 − 𝑩 = 𝑨 𝒆 𝑩 − 𝑨 = 𝑩. Veja como
essa informação pode ser representada:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            17
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Vamos fazer alguns exemplos numéricos para visualizar ainda melhor essa última situação.

Considere os conjuntos 𝐴 = {10, 20, 30} e 𝐵 = {40, 50}. Primeiramente, note que os conjuntos são
disjuntos. Mas qual é o motivo mesmo para eles serem disjuntos, professor?

A e B são disjuntos pois não possuem elementos em comum! Nenhum sequer!! São totalmente diferentes
um outro. Tudo bem?! Agora, lembre-se que 𝑨 − 𝑩 é o conjunto de elementos formados por todos os
elementos de A que não são elementos de B.

Ora, nesse nosso exemplo, todos os elementos de A não são elementos de B!! Sendo assim, podemos
escrever que:


                                       𝐴 − 𝐵 = {10, 20, 30} = 𝐴

(UFPB/2023) Sejam os conjuntos finitos A = {0,1,2,3,5,6} e B = {0,2,3,5,8}, então podemos dizer que:
A) A união entre os conjuntos A e B possui exatamente 8 elementos
B) A – B possui exatamente 2 elementos
C) B – A possui exatamente 2 elementos
D) A intersecção entre os conjuntos A e B possui exatamente 3 elementos
E) Os conjuntos A e B são disjuntos

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             18
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Comentários:
Essa questão envolve várias operações e conceitos da Teoria dos Conjuntos! Vamos comentar cada uma das
alternativas.

A) A união entre os conjuntos A e B possui exatamente 8 elementos
Incorreta! A união entre A e B é formada pelos elementos {0,1,2,3,5,6,8}, que são 7 ao todo.

B) A – B possui exatamente 2 elementos
Correta! A – B é formado pelos elementos que pertencem a A, mas não a B. Neste caso, temos que 𝐴 − 𝐵 =
{1,6}, que possui exatamente 2 elementos.

C) B – A possui exatamente 2 elementos
Incorreta! 𝐵 − 𝐴 é formado pelos elementos que pertencem a B, mas não a A. Neste caso, temos que 𝐵 −
𝐴 = {8}, que possui apenas 1 elemento.

D) A intersecção entre os conjuntos A e B possui exatamente 3 elementos
Incorreta! A intersecção entre A e B é formada pelos elementos que pertencem aos dois conjuntos ao mesmo
tempo. Neste caso, temos que 𝐴 ∩ 𝐵 = {0,2,3,5}, que possui 4 elementos.

E) Os conjuntos A e B são disjuntos
Incorreta! Dois conjuntos são disjuntos se não possuem nenhum elemento em comum. Neste caso,
podemos ver que A e B possuem vários elementos em comum, como 0, 2, 3 e 5.

Gabarito: LETRA B.

Complementar
Quando falamos de um determinado conjunto, normalmente estamos destacando determinado grupo
dentro de um universo maior. Por exemplo, podemos formar um conjunto dos funcionários especializados
em RH de uma empresa. Esse grupo de funcionários foi retirado de um conjunto maior: o conjunto formado
por todos os funcionários da empresa. Acompanhe o diagrama abaixo.


                                                        𝑅𝐻                   𝑈

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           19
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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


A notação utilizada para representar o complementar de um conjunto 𝑋 é 𝑿𝑪 ou 𝑿   ̅ . Representamos o
conjunto complementar com esse "expoente" 𝐶 ou uma barra em cima. Ademais, podemos definir o
conjunto complementar utilizando o que acabamos de ver sobre conjunto diferença.

                                          ̅ = 𝑿𝑪 = 𝑼 − 𝑿
                                          𝑿

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                20
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Veja que utilizando a definição acima, temos que o conjunto complementar 𝑋 𝐶 é formado por tudo que está
no conjunto universo, mas não está em 𝑿. Vamos fazer algumas questões para aplicar o que acabamos de
ver?

(CREFONO/2023) Os alienígenas estão estudando a população da Terra e, para isso, estão analisando alguns
conjuntos de dados. Considere os conjuntos A, B e C, em que:

- A representa os seres humanos que já avistaram um OVNI;
- B representa os seres humanos que acreditam em vida extraterrestre; e
- C representa os seres humanos que afirmam ter sido abduzidos por alienígenas.

Com base nesse caso hipotético, julgue o item.

O complemento de A representa os seres humanos que nunca avistaram um OVNI.

Comentários:
O complemento de um conjunto A é o conjunto formado por todos os elementos que não pertencem a A.
Como A representa os seres humanos que já avistaram um OVNI, o complemento de A representa os seres
humanos que não avistaram um OVNI. Portanto, o item está certo.

Gabarito: CERTO.

(CRAS/2023) Sendo 𝑋 = {−3, −2, −1, 0, 1, 2, 3, 5, 7, 10} e 𝑌 = {2, 3, 4, 5, 10, 11}, então o complementar de
Y em X é:
A) {2, 3, 5, 10}.
B) Ø.
C) {−3, −2, −1}.
D) {11}.
E) {−3, −2, −1, 0, 1, 7}.

Comentários:
O complementar de Y em X (𝐶𝑋𝑌 ) é o conjunto formado pelos elementos que pertencem a X mas não
pertencem a Y. Para encontrar esse conjunto, temos que eliminar de X os elementos que são comuns a Y.
Assim:

                     𝐶𝑋𝑌 = 𝑋 − 𝑌 = {−3, −2, −1,0,1, 𝟐, 𝟑, 𝟓, 7, 𝟏𝟎} − {𝟐, 𝟑, 4, 𝟓, 𝟏𝟎, 11}

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               21
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

   Equipe Exatas Estratégia Concursos
   Aula 11

Note que os elementos comuns são {2,3,5,10}. Logo, sobram os elementos {-3,-2,-1,0,1,7}, que formam o
complementar de Y em X.

                                           𝑿 − 𝒀 = {−𝟑, −𝟐, −𝟏, 𝟎, 𝟏, 𝟕}

Gabarito: LETRA E.

Leis de De Morgan
Pessoal, as leis de De Morgan são dois teoremas que relacionam as operações de união e intersecção de
conjuntos com a complementação. Elas foram formuladas pelo matemático britânico Augustus De Morgan
no século 19 e podem ser enunciadas assim:               ==219a34==

- O complemento da união de dois conjuntos é igual à intersecção dos complementos desses conjuntos.


                                                (𝐴 ∪ 𝐵)ᶜ = 𝐴ᶜ ∩ 𝐵ᶜ

- O complemento da intersecção de dois conjuntos é igual à união dos complementos desses conjuntos.


                                                (𝐴 ∩ 𝐵)ᶜ = 𝐴ᶜ ∪ 𝐵ᶜ

Essas leis nos permitem manipular expressões envolvendo conjuntos de maneiras diferentes e facilitam o
entendimento de algumas propriedades dos conjuntos. Vamos ver alguns exemplos para ilustrar como elas
funcionam.

Suponha que A seja o conjunto dos números pares menores que 10 e que B seja o conjunto dos números
múltiplos de 3 menores que 10. Temos que:

- 𝐴 = {0, 2, 4, 6, 8}
- 𝐵 = {0, 3, 6, 9}
- 𝑈 = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

Então, a união de A e B é o conjunto que contém todos os elementos de A ou de B, ou seja:

                                              𝐴 ∪ 𝐵 = {0, 2, 3, 4, 6, 8, 9}

O complemento de A∪B é o conjunto que contém todos os elementos de U que não estão em A∪B, ou seja:

                                                 (𝐴 ∪ 𝐵)ᶜ = {1, 5, 7}

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          22
          www.estrategiaconcursos.com.br                                                              100

                                       


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Por outro lado, o complemento de A é o conjunto que contém todos os elementos que não estão em A:

                                                𝐴ᶜ = {1, 3, 5, 7, 9}

E o complemento de B é o conjunto que contém todos os elementos que não estão em B:

                                               𝐵ᶜ = {1, 2, 4, 5, 7, 8}

A intersecção de Aᶜ e Bᶜ é o conjunto que contém todos os elementos que estão em Aᶜ e em Bᶜ, ou seja:

                                                𝐴ᶜ ∩ 𝐵ᶜ = {1, 5, 7}

Observe que esse conjunto é exatamente o mesmo que o complemento de A ∪ B. Isso mostra que a
primeira lei de De Morgan é válida nesse caso. Podemos fazer um raciocínio análogo para mostrar a validade
da segunda lei! Agora, vamos ver como o tema aparece em prova!

(PM-SP/2018) De acordo com as leis de De Morgan, o complementar da união é igual a intersecção dos
complementares. Assim, dado um conjunto X, seja 𝑋 𝑐 o seu complementar em relação ao conjunto universo.
Considerando 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢} o conjunto universo, sejam os subconjuntos 𝐴 = {𝑎, 𝑒} e 𝐵 = {𝑜, 𝑢}. O
conjunto 𝐴𝑐 ∩ 𝐵 𝑐 é igual ao conjunto
A) {𝑖}
B) {𝑜}
C) {𝑜, 𝑖}
D) {𝑎, 𝑖}

Comentários:
O complementar de A é tudo que pertence ao universo de A, mas não pertence a A.

                                                    𝐴𝐶 = 𝑉 − 𝐴

Como 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢} e 𝑨 = {𝒂, 𝒆}, ficamos:

                                                   𝐴𝐶 = {𝑖, 𝑜, 𝑢}

Por sua vez:

                                                   𝐵𝐶 = 𝑉 − 𝐵


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              23
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como 𝑉 = {𝑎, 𝑒, 𝑖, 𝑜, 𝑢} e 𝑩 = {𝒐, 𝒖}, ficamos:

                                                   𝐵 𝐶 = {𝑎, 𝑒, 𝑖}

Queremos a intersecção entre 𝐴𝐶 e 𝐵 𝐶 :


                                                  𝑨𝑪 ∩ 𝑩𝑪 = {𝒊}

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   24
        www.estrategiaconcursos.com.br                                       100

                                    


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


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                25
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(PREF. CAMPOS DOS GOYTACAZES/2024) Certo congresso acadêmico organizado na universidade federal
de determinado Estado contou com a participação de 160 pesquisadores e foi realizado em dois dias. O
primeiro dia do congresso teve a participação de 120 pesquisadores e, no segundo, a participação foi de 100
pesquisadores. Considerando estas informações, quantos pesquisadores participaram dos dois dias do
congresso?
A) 30.
B) 45.
C) 60.
D) 75.

Comentários:
Para resolver esta questão, podemos usar o princípio da inclusão-exclusão, que diz que:

                                     𝑛(𝐴 ∪ 𝐵) = 𝑛(𝐴) + 𝑛(𝐵) − 𝑛(𝐴 ∩ 𝐵)

No caso, o conjunto A é formado pelos pesquisadores que participaram do primeiro dia do congresso, e o
conjunto B é formado pelos que participaram do segundo dia. O número de elementos da união entre A e
B é igual ao número total de pesquisadores, ou seja, 160. Substituindo os dados na fórmula, temos:

                                         160 = 120 + 100 − 𝑛(𝐴 ∩ 𝐵)

Simplificando, obtemos:

                                                  𝑛(𝐴 ∩ 𝐵) = 60

Gabarito: LETRA C.


A verdade é que não precisamos decorar fórmulas para responder questões que envolva esse princípio.
Utilizando um pouco de lógica e diagramas de Venn, podemos encontrar a quantidade de elemento de cada
conjunto envolvido em um problema típico de Princípio da Inclusão-Exclusão. Antes disso, quero deixar claro
para vocês o significado de cada uma das regiões no seguinte diagrama:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              26
        www.estrategiaconcursos.com.br                                                                  100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

(PREF. AMERICANA/2023) Para uma vaga de emprego foram entrevistados 820 candidatos, dos quais 450
são carpinteiros, 250 são pedreiros, 320 não são carpinteiros nem pedreiros. Dos candidatos entrevistados,
são carpinteiro e pedreiro, aproximadamente:
A) 13,05%.
B) 19,15%.
C) 24,39%.
D) 25,50%.
E) 32,95%.

Comentários:
Vamos organizar as informações do enunciado em um diagrama.

                                       𝐶                              𝑃

                                           450 − 𝑥    𝑥     250 − 𝑥


                                                                          320


No diagrama desenhado, "C" representa o conjunto dos carpinteiros e "P", o dos pedreiros. Tem-se ainda:

- "x" é a quantidade de candidatos que são carpinteiro e pedreiro;
- "450 − 𝑥" é a quantidade de candidatos que são apenas carpinteiros;
- "250 − 𝑥" é a quantidade de candidatos que são apenas pedreiros;
- "320" é a quantidade de candidatos que não são carpinteiros nem pedreiros.

A soma dos valores dessas regiões deve totalizar a quantidade de candidatos entrevistados. Logo:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             27
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                   𝑥 + (450 − 𝑥) + (250 − 𝑥) + 320 = 820

                                                 1020 − 𝑥 = 820

                                                      𝑥 = 200

A questão quer esse resultado em porcentagem. Logo:

                                       200
                               𝑥% =        ⋅ 100        →           𝒙% = 𝟐𝟒, 𝟑𝟗%
                                       820

Gabarito: LETRA C.


➢ 3 Conjuntos
Imagine que você tem 3 conjuntos, cada conjunto possui elementos em comum com os outros dois. A
situação mais completa que podemos imaginar está representada pelo diagrama abaixo.

Vamos fazer uma leitura de cada uma das regiões da figura acima?

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                  28
        www.estrategiaconcursos.com.br                                                      100

                                    


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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            29
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

um jeito que vocês poderão utilizar caso não lembrem da fórmula. Algumas vezes, no entanto, a questão
pode exigir a aplicação direta dela. Confira o exercício abaixo.

(ITAIPU/2024) A divisão de saúde da usina de Itaipu entrevistou 79 servidores a respeito dos seus hábitos
esportivos. Nessa pesquisa, verificou-se que:

- 35 jogam futebol;
- 35 praticam natação;                                 ==219a34==

- 30 jogam tênis;
- 11 praticam futebol e natação;
- 8 praticam natação e tênis;
- 6 praticam tênis e futebol;
- todos os entrevistados praticam algum esporte.

Na situação apresentada, o número de entrevistados que praticam todos os esportes é igual a
A) 1.
B) 3.
C) 4.
D) 6.
E) 11.

Comentários:
Para resolver essa questão, podemos usar o princípio da inclusão-exclusão!


  𝒏(𝑭 ∪ 𝑵 ∪ 𝑻) = 𝒏(𝑭) + 𝒏(𝑵) + 𝒏(𝑻) − 𝒏(𝑭 ∩ 𝑵) − 𝒏(𝑭 ∩ 𝑻) − 𝒏(𝑵 ∩ 𝑻) + 𝒏(𝑭 ∩ 𝑵 ∩ 𝑻)

- "F" representa o conjunto daqueles que jogam futebol;
- "N" representa o conjunto daqueles que praticam natação;
- "T" representa o conjunto daqueles que jogam tênis;

De acordo com o enunciado, podemos retirar as seguintes informações:

- 35 jogam futebol:

                                                    𝑛(𝐹) = 35

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            30
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

- 35 praticam natação:

                                                    𝑛(𝑁) = 35

- 30 jogam tênis:

                                                    𝑛(𝑇) = 30

- 11 praticam futebol e natação;

                                                 𝑛(𝐹 ∩ 𝑁) = 11

- 8 praticam natação e tênis;

                                                  𝑛 (𝑁 ∩ 𝑇 ) = 8

- 6 praticam tênis e futebol:

                                                  𝑛 (𝐹 ∩ 𝑇 ) = 6

- todos os entrevistados (79) praticam algum esporte.

                                              𝒏(𝑭 ∪ 𝑵 ∪ 𝑻) = 𝟕𝟗

Pronto! Podemos substituir essas quantidades na fórmula:

                                79 = 35 + 35 + 30 − 11 − 6 − 8 + 𝑛(𝐹 ∩ 𝑁 ∩ 𝑇)

Simplificando:

                                            79 = 75 + 𝑛(𝐹 ∩ 𝑁 ∩ 𝑇)

                                                𝒏(𝑭 ∩ 𝑵 ∩ 𝑻) = 𝟒

Gabarito: LETRA C.

Em algumas questões não precisaremos aplicar diretamente a fórmula acima. Será necessário um trabalho
mais braçal da nossa parte, para chegar à resposta. Muitas vezes a questão pede valores específicos que vão
surgir de uma maneira mais fácil se a gente for completando o diagrama de Venn com as quantidades.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              31
        www.estrategiaconcursos.com.br                                                                  100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Por favor, dê mais olhada naquele "mapa" que mostrei logo no início desse tópico, destacando as regiões
e o seu significado.

        Para contar elementos em um diagrama de Venn, o primeiro passo é sempre inserir a
        quantidade de elementos que possui a intersecção dos três conjuntos! Depois, partimos
        para as intersecções duplas e, por fim, analisamos a quantidade de elementos exclusivos
        de cada conjunto. Vamos ver na prática como fazemos isso?

(UNICAMP/2024) Num congresso, o número de pessoas que falam inglês é o dobro do número de pessoas
que falam espanhol e é o triplo do número de pessoas que falam alemão. Há 3 pessoas que falam inglês e
espanhol, 4 pessoas que falam inglês e alemão e 6 pessoas que falam espanhol e alemão. Não há ninguém
que fale as três línguas. Há 447 pessoas que falam apenas uma dessas três línguas. Nessas condições, o
número de pessoas que falam apenas inglês é igual a:
A) 294
B) 280
C) 273
D) 260
E) 251

Comentários:
Vamos organizar as informações do enunciado em um diagrama. A primeira coisa que fazemos é colocar a
intersecção entre os três conjuntos. Sendo assim, note que o enunciado diz que não há ninguém que fale as
três línguas. Logo, essa intersecção é zero.


                                            𝐼                          𝐸

                                                          0

                                                                   𝐴


O enunciado também diz as intersecções dois a dois: Há 3 pessoas que falam inglês e espanhol, 4 pessoas
que falam inglês e alemão e 6 pessoas que falam espanhol e alemão. No diagrama, ficamos:


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            32
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                            𝐼                               𝐸

                                                           3

                                                           0
                                                      4         6

                                                                    𝐴


Sobre as quantidades de pessoas que falam apenas inglês, apenas espanhol ou apenas alemão, o enunciado
não fala nada. Por esse motivo, vamos chamar essas quantidades de "x", "y" e "z", respectivamente.


                                            𝐼                               𝐸

                                                           3
                                                𝑥                       𝑦
                                                           0
                                                      4         6


                                                           𝑧
                                                                    𝐴


Ora, o enunciado afirma 447 pessoas falam apenas uma dessas três línguas. Logo:

                                            𝑥 + 𝑦 + 𝑧 = 447             (1)

Por sua vez, temos que o número de pessoas que falam inglês é o dobro do número de pessoas que falam
espanhol. Logo:

                                     (𝑥 + 3 + 0 + 4) = 2 ⋅ (3 + 𝑦 + 0 + 6)

                                                    𝑥 + 7 = 2𝑦 + 18

                                                𝑥 = 2𝑦 + 11         (2)

Por fim, sabemos também que o número de pessoas que falam inglês é o triplo do número de pessoas que
falam alemão. Logo:

                                     (𝑥 + 3 + 0 + 4) = 3 ⋅ (𝑧 + 0 + 4 + 6)


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         33
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                                 𝑥 + 7 = 3𝑧 + 30

                                               𝑥 = 3𝑧 + 23        (3)

Vamos isolar "y" em (2) e "z" em (3):

                                        𝑥 − 11                               𝑥 − 23
                                   𝑦=                                𝑧=
                                          2                                    3

Substituindo em (1):

                                             (𝑥 − 11) (𝑥 − 23)
                                        𝑥+           +         = 447
                                                2        3

Multiplicando os dois membros da equação pelo mínimo múltiplo comum dos denominadores, que é 6,
obtemos:

                                  6𝑥 + 3(𝑥 − 11) + 2(𝑥 − 23) = 2682

Simplificando e colocando em ordem, temos:

                                               11𝑥 − 79 = 2682

Isolando x, obtemos:

                                                      (2682 + 79)
                                                𝑥 =
                                                          11

                                                          2761
                                                    𝑥 =
                                                           11

                                                      𝒙 = 𝟐𝟓𝟏

"x" é exatamente o valor procurado pela questão, pois é a quantidade de pessoas que falam apenas inglês.

Gabarito: LETRA E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            34
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                          QUESTÕES COMENTADAS - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/TCE-SP/2023) Considere o conjunto 𝐴 = {2, 3, 4, 6, 7, 8}. O número de subconjuntos de 𝐴 com 3
elementos, sendo pelo menos um elemento ímpar, é:
A) 16
B) 15
C) 14
D) 12
E) 8

Comentários:
Podemos resolver mais rapidamente esse exercício por meio de análise combinatória. No entanto, vamos
por outro caminho para treinarmos o que vimos na teoria. Nesse caminho, vamos escrever os subconjuntos
de A que possuem três elementos.


                           ሼ2, 3, 4ሽ     ሼ2, 3, 6ሽ ሼ2, 3, 7ሽ ሼ2, 3, 8ሽ ሼ2 4, 6ሽ

                           ሼ2, 4, 7ሽ ሼ2, 4, 8ሽ ሼ2, 6, 7ሽ ሼ2, 6, 8ሽ ሼ2, 7, 8ሽ

                           ሼ3, 4, 6ሽ     ሼ3, 4, 7ሽ ሼ3, 4, 8ሽ ሼ3, 6, 7ሽ ሼ3, 6, 8ሽ

                           ሼ3, 7, 8ሽ ሼ4, 6, 7ሽ ሼ4, 6, 8ሽ ሼ4, 7,8 ሽ ሼ6, 7, 8ሽ

Observe que temos 20 subconjuntos de A com três elementos. Agora, vamos marcar aqueles que têm pelo
menos um elemento ímpar.


                           ሼ2, 3, 4ሽ     ሼ2, 3, 6ሽ ሼ2, 3, 7ሽ ሼ2, 3, 8ሽ ሼ2 4, 6ሽ

                           ሼ2, 4, 7ሽ ሼ2, 4, 8ሽ ሼ2, 6, 7ሽ ሼ2, 6, 8ሽ ሼ2, 7, 8ሽ

                           ሼ3, 4, 6ሽ     ሼ3, 4, 7ሽ ሼ3, 4, 8ሽ ሼ3, 6, 7ሽ ሼ3, 6, 8ሽ

                           ሼ3, 7, 8ሽ ሼ4, 6, 7ሽ ሼ4, 6, 8ሽ ሼ4, 7, 8ሽ ሼ6, 7, 8ሽ

Pronto! São 16 subconjuntos com pelo menos 1 elemento ímpar! Podemos marcar a alternativa A.

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         35
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

2. (FGV/PREF. SALVADOR/2019) Em uma classe de 20 estudantes, 12 são meninas. Além disso, dos 20
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

Gabarito: LETRA D.

3. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
tem apenas um elemento, ela é dita um conjunto unitário. Um exemplo de conjunto unitário é a coleção
formada pelos números que são:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            36
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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
ERRADO. São divisores de 4: 𝐷(4) = ሼ1, 2, 4ሽ. Note que temos 3 elementos, portanto, não é o conjunto
unitário que estamos procurando.

c) divisores de 9;
ERRADO. São divisores de 9: 𝐷(9) = ሼ1, 3, 9ሽ. Note que temos 3 elementos, portanto, não é o conjunto
unitário que estamos procurando.

d) maiores que 4 e menores que 9;
ERRADO. Se considerarmos apenas os números inteiros entre 4 e 9, vamos ter: ሼ5, 6, 7, 8ሽ. Portanto, está
longe de ser o conjunto unitário que estamos procurando.

e) formados pelos algarismos 4 e 9.
ERRADO. Pessoal, podemos formar infinitos números com os algarismos 4 e 9. Entre eles, posso citar 49,
94, 449, 494, etc.

Gabarito: LETRA A.

4. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;
c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

Comentários:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           37
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Vamos procurar uma coleção que não possua elementos. Devemos analisar alternativa por alternativa.

a) de meses do ano que começam pela letra J;
ERRADO. Temos vários meses que começam pela letra J: Janeiro, Junho e Julho.

b) de dias da semana que começam pela letra T;
ERRADO. Terça-feira é um dia da semana que começa pela letra T. Portanto, uma coleção formada por esses
dias não é vazia.

c) dos números que são, ao mesmo tempo, pares e ímpares;
CERTO. Não existe nenhum número que seja ao mesmo tempo par ou ímpar. Ou é ímpar, ou é par. Portanto,
um conjunto formado por esses números seria vazio.
                                                       ==219a34==

d) dos números menores que 10 e maiores que 6;
ERRADO. Considerando apenas o conjunto dos inteiros, os números que são menores que 10 e maiores que
6 são: 7, 8 e 9. Portanto, não é um conjunto vazio.

e) das pessoas brasileiras que são casadas.
ERRADO. Muitos brasileiros são casados. Portanto, não seria um conjunto vazio.

Gabarito: LETRA C.

5. (FGV/CODEBA/2010) Sejam 𝑨 = ሼ𝟎, 𝟏, 𝟐, 𝟑ሽ e 𝑩 = ሼ𝟎, 𝟐, 𝟒ሽ dois conjuntos. Com relação aos conjuntos
A e B, analise as afirmativas a seguir:

I. 𝑩 ⊂ 𝑨
II. 𝑨 ∪ 𝑩 = ሼ𝟎, 𝟏, 𝟐, 𝟑, 𝟒ሽ
III. 𝑨 ∩ 𝑩 = ሼ𝟎, 𝟐ሽ

Está(ão) correta(s) somente
a) I.
b) II.
c) III.
d) I e II.
e) II e III.

Comentários:
Devemos analisar cada afirmativa.

I. 𝐵 ⊂ 𝐴

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           38
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

ERRADO. Para que B estivesse contido em A, todos os seus elementos também devem ser elementos de A.
Note que B possui o elemento 4, enquanto A não possui. Logo, B não pode estar contido em A.

II. 𝐴 ∪ 𝐵 = ሼ0,1,2,3,4ሽ
CERTO. A união dos dois conjuntos é a reunião de seus elementos. Assim, quando juntamos "todo mundo",
realmente ficamos com 𝐴 ∪ 𝐵 = ሼ0,1,2,3,4ሽ.

III. 𝐴 ∩ 𝐵 = ሼ0,2ሽ
CERTO. A intersecção é formada pelos elementos em comum dos dois conjuntos. Perceba que o 0 e o 2 são
os elementos que estão nos dois conjuntos, ao mesmo tempo. Portanto, é correto dizer que 𝐴 ∩ 𝐵 = ሼ0,2ሽ.

Gabarito: LETRA E.

6. (FGV/BADESC/2010) Dado um conjunto A, chamamos subconjunto próprio não vazio de A a qualquer
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

Aqui, 𝑛 representa a quantidade de elementos de A. Por exemplo! Considere que 𝑩 = ሼ𝟏, 𝟐, 𝟑, 𝟒, 𝟓ሽ. Nessa
situação, o conjunto A tem 5 elementos, portanto, o número de subconjuntos seria:

                                    𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 2𝑛
                                    𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 25
                                    𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑆𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝐵 = 32
Logo, A tem 32 subconjuntos. Agora, vamos entender a questão em si. O enunciado fala de subconjunto
próprio. Esse subconjunto obedece duas propriedades.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           39
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

7. (FGV/ALESP/2002) São dados os conjuntos: D = divisores de 24 (divisores positivos), M = múltiplos de 3
(múltiplos positivos), S = D ∩ M e n = números de subconjuntos de S. Portanto, n é igual a:
a) 64
b) 16
c) 32
d) 8

Comentários:
Vamos listar os divisores de 24:

                                        𝐷(24) = ሼ1, 2, 𝟑, 4, 𝟔, 8, 𝟏𝟐, 𝟐𝟒ሽ

Agora, vamos começar a listar os múltiplos positivos de 3.

                                 𝑀(3) = ሼ𝟑, 𝟔, 9, 𝟏𝟐, 15, 18, 21, 𝟐𝟒, 27, 30, … ሽ

Note que já deixei marcado os elementos em comum aos dois conjuntos. Assim,

                                           𝑆 = 𝐷 ∩ 𝑀 = ሼ3, 6, 12, 24ሽ

Portanto, S tem 4 elementos. Na teoria, vimos que o número de subconjuntos de um conjunto é dado por:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            40
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                   𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 2𝑛(𝑆)
                                    𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 24
                                    𝑁ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑢𝑏𝑐𝑜𝑛𝑗𝑢𝑛𝑡𝑜𝑠 𝑑𝑒 𝑆 = 16

Gabarito: LETRA B.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   41
        www.estrategiaconcursos.com.br                                       100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                 QUESTÕES COMENTADAS - FGV

Operações com Conjuntos

1. (FGV/CM-SP/2024) Sabe-se que os conjuntos 𝑨 = {𝟏, 𝟑, 𝟓, 𝒙, 𝟖} e 𝑩 = {𝟐, 𝟑, 𝒚, 𝟕, 𝟖} têm, cada um, 5
elementos. Sabe-se, também, que a interseção de A e B tem 4 elementos. A soma dos elementos da união
de A e B é
A) 26.
B) 27.
C) 28.
D) 29.
E) 30.

Comentários:
O enunciado informa que a intersecção entre A e B tem 4 elementos.

                                                 𝐴 = {1, 3, 5, 𝑥, 8}

                                                 𝐵 = {2, 3, 𝑦, 7, 8}

Perceba que, de imediato, conseguimos identificar dois elementos em comum.

O que podemos concluir?

x só pode ser 2 ou 7.

y só pode ser 1 ou 5.

Apenas dessa forma teremos os 4 elementos da intersecção, concordam?
O enunciado pede a soma dos elementos da união entre A e B.

                                          𝐴 ∪ 𝐵 = {1, 2, 3, 5, 7, 8, 𝑥, 𝑦}

Agora vem o "pulo do gato"!

"x" e "y" fazem parte da intersecção. Não precisamos repetir esses valores no conjunto união! Sendo assim:

                                             𝐴 ∪ 𝐵 = {1, 2, 3, 5, 7, 8}

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             42
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A soma dos elementos fica:

                                            1 + 2 + 3 + 5 + 7 + 8 = 26

Gabarito: LETRA A.

2. (FGV/BANESTES/2023) Sejam A e B dois conjuntos finitos tais que 𝑨 ∪ 𝑩 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕} e {𝟏, 𝟐, 𝟓}
é o conjunto de elementos que estão em A e não estão em B. O conjunto dos elementos que não estão em
A ou estão em B é
A) {3, 4}.
B) {3, 6}.
C) {3, 4, 6}.
D) {4, 6, 7}.                                          ==219a34==

E) {3, 4, 6, 7}.

Comentários:
De acordo com o enunciado, temos que:

                             𝐴 ∪ 𝐵 = {1, 2, 3, 4, 5, 6, 7}              𝐴 − 𝐵 = {1, 2, 5}

A questão pede o conjunto dos elementos que não estão em A ou estão em B. Como estamos falando da
união de um subconjunto de B com o próprio B, o conjunto pedido é o próprio B. Vamos esquematizar.


             A               B                    A                 B                       A               B

                                       ou

            conjunto dos elementos               conjunto dos elementos
              que não estão em A                                                                O conjunto B!
                                                     que estão em B

Observe que para encontrar o B, podemos fazer:


             A               B                    A                 B                       A               B

                    𝐴∪𝐵                          conjunto dos elementos
                                                                                                O conjunto B!
                                                   que não estão em B

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                      43
        www.estrategiaconcursos.com.br                                                                          100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Sendo assim, para encontrar B, basta retirarmos da união aqueles elementos que estão apenas em A!
                                        𝐴 ∪ 𝐵 = {𝟏, 𝟐, 3, 4, 𝟓, 6, 7}

                                                 𝐴 − 𝐵 = {𝟏, 𝟐, 𝟓}

Isso resulta em:


                                                  𝑩 = {𝟑, 𝟒, 𝟔, 𝟕}

Gabarito: LETRA E.

3. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          44
        www.estrategiaconcursos.com.br                                                              100

                                    


---

    Equipe Exatas Estratégia Concursos
    Aula 11

Observe que já colocamos as quantidades de cada desses conjuntos. Como não sabemos quantos elementos
pertencem a 𝐴 e a 𝐵 simultaneamente, então vamos chamar essa quantidade de "z". O enunciado nos diz
que a união desses dois conjuntos possui 130 elementos. Na prática, isso significa que se somamos todas as
regiões destacadas no diagrama de Venn acima, então devemos obter esses 130 elementos.

                        60 + 𝑧 + 50 = 130          →       𝑧 = 130 − 110           →      𝒛 = 𝟐𝟎

Pronto, temos "z". Com ele, podemos determinar quantos elementos possui cada um dos conjuntos.

                        𝑛(𝐴) = 60 + 𝑧        →      𝑛(𝐴) = 60 + 20             →       𝒏(𝑨) = 𝟖𝟎


                        𝑛(𝐵) = 50 + 𝑧        →      𝑛(𝐵) = 50 + 20             →       𝒏(𝑩) = 𝟕𝟎

Gabarito: LETRA E.

4. (FGV/SEFAZ-MS/2006) Os conjuntos A, B e C satisfazem 𝑨 − (𝑩 ∩ 𝑪) = (𝑨 − 𝑩) ∪ (𝑨 − 𝑪):
a) nunca.
b) se e somente se A = B = C.
c) se e somente se B = C.
d) se e somente se B ∩ C = ⊘.
e) sempre.

Comentários:
Na minha opinião, o melhor jeito de resolver essas questões é desenhando o diagrama. Vamos primeiros
identificar o que significa cada lado da equação:

•    𝑨 − (𝑩 ∩ 𝑪): Elementos de A que não são elementos da intersecção de B com C.

              Conjunto 𝐴                          Conjunto 𝐵 ∩ 𝐶                         Conjunto 𝑨 − (𝑩 ∩ 𝑪)

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                    45
          www.estrategiaconcursos.com.br                                                                        100

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 11

•    (𝑨 − 𝑩) ∪ (𝑨 − 𝑪): Elementos de A que não são elementos de B ou Elementos de A que não elementos
     de C.

        Conjunto 𝐴 − 𝐵                           Conjunto 𝐴 − 𝐶                Conjunto (𝑨 − 𝑩) ∪ (𝑨 − 𝑪)

Quando desenhamos as duas regiões, percebemos que elas são iguais. Logo, a igualdade é sempre verdade.

Gabarito: LETRA E.

5. (FGV/SEFAZ-MS/2006) Se X, Y e Z são conjuntos, 𝑿 ∩ (𝒀 ∪ 𝒁) = (𝑿 ∩ 𝒀) ∪ 𝒁:
a) nunca.
b) se e somente se X = Y = Z.
c) se e somente se 𝑍 ⊂ 𝑋
d) se e somente se 𝑍 ⊂ 𝑌
e) sempre.

Comentários:
Novamente, vamos recorrer aos diagramas. No entanto, primeiro devemos entender o que cada uma das
regiões expressa.

•    𝑿 ∩ (𝒀 ∪ 𝒁): Elementos que X tem em comum com a união de Y e Z.

              Conjunto 𝑋                          Conjunto 𝑌 ∪ 𝑍               Conjunto 𝑿 ∩ (𝒀 ∪ 𝒁)

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           46
          www.estrategiaconcursos.com.br                                                               100

                                      


---

    Equipe Exatas Estratégia Concursos
    Aula 11

•    (𝑿 ∩ 𝒀) ∪ 𝒁: Elementos de 𝑋 ∩ 𝑌 reunidos com os elementos de Z.

              Conjunto 𝑋 ∩ 𝑌                          Conjunto 𝑍               Conjunto (𝑿 ∩ 𝒀) ∪ 𝒁

Dessa vez, as regiões que desenhamos não ficaram iguais. Mas, o que devemos fazer para que elas fiquem?
Ora devemos retirar toda a região diferente:

Nessa situação, percebemos que não pode haver elementos de Z que não sejam elementos de X. O que
implica que Z deve ser um subconjunto de X.

Gabarito: LETRA C.

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          47
          www.estrategiaconcursos.com.br                                                              100

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                 QUESTÕES COMENTADAS - FGV

Princípio da Inclusão-Exclusão

1. (FGV/GCM-SJC/2024) Em um grupo de 50 guardas, 35 estão de bermuda e 27 estão de boné. Sabe-se
também que, nesse grupo, todos estão usando bermuda ou boné. O número de guardas, nesse grupo, que
estão usando bermuda e boné é
A) 35.
B) 27.
C) 23.
D) 15.
E) 12.

Comentários:
Para responder essa questão, precisamos usar o Princípio da Inclusão-Exclusão.

                                     𝑛(𝐴 ∪ 𝐵) = 𝑛(𝐴) + 𝑛(𝐵) − 𝑛(𝐴 ∩ 𝐵)

Seja “A” o conjunto de guardas que estão de bermuda e “B” o conjunto de guardas que estão de boné.

De acordo com o enunciado, podemos tirar que:

                         𝑛(𝐴 ∪ 𝐵) = 50                 𝑛(𝐴) = 35             𝑛(𝐵) = 27

Usando essas informações, temos:

                                           50 = 35 + 27 − 𝑛(𝐴 ∩ 𝐵)

                                               𝑛(𝐴 ∩ 𝐵) = 62 − 50

                                                 𝒏(𝑨 ∩ 𝑩) = 𝟏𝟐

Gabarito: LETRA E.

2. (FGV/ALESC/2024) Em uma prateleira há 15 latas iguais e vazias. Em algumas delas são colocadas
bolinhas pretas e bolinhas brancas. Sabe-se que 7 latas contêm bolinhas pretas, 5 latas contêm bolinhas
brancas e 3 latas contém bolinhas pretas e bolinhas brancas. O número de latas que ficaram vazias é igual
a
A) 3.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            48
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

B) 4.
C) 5.
D) 6.
E) 7.

Comentários:
Para resolver a questão, podemos usar o princípio da inclusão-exclusão, que afirma que, se temos dois
conjuntos A e B, então:

                                     𝑛(𝐴 ∪ 𝐵) = 𝑛(𝐴) + 𝑛(𝐵) − 𝑛(𝐴 ∩ 𝐵)

Onde 𝑛(𝐴) representa o número de elementos de A.

Neste caso, podemos considerar os conjuntos P (latas com bolinhas pretas) e B (latas com bolinhas brancas).

De acordo com o enunciado, tem-se que:

                               𝑛(𝑃) = 7            𝑛(𝐵) = 5           𝑛(𝑃 ∩ 𝐵) = 3

Então, podemos aplicar o princípio da inclusão-exclusão:

                                     𝑛(𝑃 ∪ 𝐵) = 𝑛(𝑃) + 𝑛(𝐵) − 𝑛(𝑃 ∩ 𝐵)

                                              𝑛(𝑃 ∪ 𝐵) = 7 + 5 − 3

                                                  𝑛(𝑃 ∪ 𝐵) = 9

Pronto! Isso significa que temos um total de 9 latas com bolinhas, sejam elas pretas ou brancas.

Como na prateleira temos 15 latas, o total de latas vazias é:

                                          𝑉 = 15 − 9       →       𝑽=𝟔

Portanto, o número de latas que ficaram vazias é igual a 6.

Gabarito: LETRA D

3. (FGV/CM-FORTALEZA/2024) Uma turma é composta por 40 alunos, dos quais:

- 12 gostam de Matemática, mas não de História;
- 19 não gostam de Matemática.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              49
        www.estrategiaconcursos.com.br                                                                  100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A quantidade de alunos dessa turma que gostam, simultaneamente, de Matemática e de História é
A) 6.
B) 7.
C) 8.
D) 9.
E) 10.

Comentários:
Para resolver esta questão, podemos usar o diagrama de Venn para representar os conjuntos de alunos que
gostam de Matemática e História. Observe a figura abaixo:


                                                                                 𝑈
                                          𝑀                             𝐻
                                                12                 𝑦
                                                         𝑥


                                                                             𝑧


No diagrama, M é o conjunto dos alunos que gostam de Matemática, H é o conjunto dos alunos que gostam
de História e U é o conjunto universo, que corresponde à turma inteira. Podemos obter as seguintes
informações a partir do enunciado:

- Como o total de alunos é 40, podemos escrever:

                                         12 + 𝑥 + 𝑦 + 𝑧 = 40            (1)

- Como 19 não gostam de matemática:

                                                𝑦 + 𝑧 = 19       (2)
Substituindo (2) em (1):

                                                12 + 𝑥 + 19 = 40

                                                     𝑥 + 31 = 40

                                                       𝒙=𝟗

Ora, "x" é exatamente a quantidade de alunos que gostam, simultaneamente, das duas matérias.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          50
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Gabarito: LETRA D.

4. (FGV/ALEP-PR/2024) Uma escola de ensino médio oferece a seus estudantes cursos extras de francês,
italiano e alemão. Os estudantes podem frequentar um ou mais desses cursos. Uma turma dessa escola
tem 50 alunos no total. Todos os estudantes dessa turma frequentam pelo menos um dos três cursos
extras de idiomas oferecidos pela escola, sendo que 30 frequentam o curso de francês, 20 frequentam
italiano e 10 frequentam alemão. Sabe-se ainda que 10 frequentam simultaneamente francês e italiano, 8
frequentam simultaneamente francês e alemão e 6 frequentam simultaneamente italiano e alemão.
Assinale a opção que indica o número de alunos da turma frequentam simultaneamente os três cursos de
idiomas oferecidos pela escola.
A) 6
B) 10
C) 14
D) 34
E) 86

Comentários:
Para resolver esse problema, podemos usar o princípio de inclusão e exclusão, que diz que:

            𝑛(𝐹 ∪ 𝐼 ∪ 𝐴) = 𝑛(𝐹) + 𝑛(𝐼) + 𝑛(𝐴) − 𝑛(𝐹 ∩ 𝐼) − 𝑛(𝐹 ∩ 𝐴) − 𝑛(𝐼 ∩ 𝐴) + 𝑛(𝐹 ∩ 𝐼 ∩ 𝐴)

Nesse caso, F, I e A são os conjuntos dos alunos que frequentam francês, italiano e alemão, respectivamente.

De acordo com as informações do enunciado, temos:

- Uma turma dessa escola tem 50 alunos no total:

                                                𝑛(𝐹 ∪ 𝐼 ∪ 𝐴) = 50

- 30 frequentam o curso de francês, 20 frequentam italiano e 10 frequentam alemão.

                                                    𝑛(𝐹) = 30

                                                     𝑛(𝐼) = 20

                                                    𝑛(𝐴) = 10

- 10 frequentam simultaneamente francês e italiano, 8 frequentam simultaneamente francês e alemão e
6 frequentam simultaneamente italiano e alemão.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               51
        www.estrategiaconcursos.com.br                                                                   100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                                   𝑛(𝐹 ∩ 𝐼) = 10
                                                   𝑛(𝐹 ∩ 𝐴) = 8
                                                   𝑛(𝐼 ∩ 𝐴) = 6

Substituindo os valores dados, temos:

                              50 = 30 + 20 + 10 − 10 − 8 − 6 + 𝑛(𝐹 ∩ 𝐼 ∩ 𝐴)

Simplificando, obtemos:

                                               𝒏(𝑭 ∩ 𝑰 ∩ 𝑨) = 𝟏𝟒
                                                       ==219a34==

Portanto, existem 14 alunos que frequentam simultaneamente os três cursos de idiomas.

Gabarito: LETRA C.

5. (FGV/CÂMARA DOS DEPUTADOS/2023) Dra. Míriam é a responsável pelo atendimento psicológico de
97 estudantes de uma escola, às segundas, quartas e sextas. Há 21 estudantes que só procuram a Dra.
Míriam na segunda-feira, 20 que só comparecem às quartas e 17 que só vão às sextas. Dra. Míriam atende
48 estudantes às segundas, 53 às quartas e 43 às sextas. O número de estudantes que são atendidos três
vezes por semana é igual a
A) 7.
B) 8.
C) 9.
D) 10.
E) 11.

Comentários:
Organizaremos as informações da questão em um diagrama de Venn.

                                            SEG.                           QUA.

                                                                    SEX.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         52
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como há 21 estudantes que só procuram a Dra. Míriam na segunda-feira, 20 que só comparecem às quartas
e 17 que só vão às sextas, podemos escrever:


                                            SEG.                      QUA.

                                                 21                  20

                                                          17
                                                          SEX.

Como nenhuma informação foi dada sobre as intersecções, vamos colocar incógnitas.


                                            SEG.                      QUA.

                                                 21       𝑎          20
                                                          𝑥
                                                      𝑏          𝑐

                                                          17

                                                          SEX.

Queremos determinar o "x", pois ele retrata justamente a quantidade de estudantes que são atendidos três
vezes na semana. Agora, com o diagrama pré-esquematizado, vamos para as próximas informações dadas
pelo enunciado:

- Dra. Míriam atende 48 estudantes às segundas.

Nesse caso, somamos todas as quantidades dentro de "SEG" e igualamos a 48.


                                            SEG.                      QUA.

                                                 21       𝑎          20
                                                          𝑥
                                                      𝑏          𝑐

                                                          17

                                                          SEX.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           53
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                 21 + 𝑎 + 𝑏 + 𝑥 = 48                    →             𝑎 + 𝑏 + 𝑥 = 27         (1)

Vamos repetir esse raciocínio sabendo que a Dra. Mirian atende 53 às quartas e 43 às sextas:

                20 + 𝑎 + 𝑐 + 𝑥 = 53                    →              𝑎 + 𝑐 + 𝑥 = 33         (2)

                17 + 𝑏 + 𝑐 + 𝑥 = 43                    →              𝑏 + 𝑐 + 𝑥 = 26          (3)

Por fim, o enunciado ainda fala que a quantidade de alunos atendidos é 97. Dessa forma, a soma de todas
as quantidades no diagrama deve resultar nesse número.

      21 + 𝑎 + 𝑏 + 𝑥 + 21 + 𝑐 + 17 = 97                      →               𝑥 + (𝑎 + 𝑏 + 𝑐) = 39   (4)

Observe que temos 4 equações e 4 incógnitas.

Para resolver esse sistema, vamos somar as equações (1), (2) e (3).

                         (𝑎 + 𝑏 + 𝑥) + (𝑎 + 𝑐 + 𝑥) + (𝑏 + 𝑐 + 𝑥) = 27 + 33 + 26

                                       2(𝑎 + 𝑏 + 𝑐) + 3𝑥 = 86                (5)

Da equação (4), podemos tirar que:

                                              (𝑎 + 𝑏 + 𝑐) = 39 − 𝑥

Vamos substituir esse resultado em (5):

                                              2(39 − 𝑥) + 3𝑥 = 86

                                               78 − 2𝑥 + 3𝑥 = 86

                                                   𝑥 = 86 − 78

                                                       𝒙=𝟖

Logo, temos oito estudantes que são atendidos 3 vezes na semana.

Gabarito: LETRA B.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                54
        www.estrategiaconcursos.com.br                                                                    100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

6. (FGV/PM-SP/2023) Em um conjunto de 20 objetos, 12 têm a característica A e 9 têm a característica B.
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

7. (FGV/MPE-SP/2023) Em um grupo de 55 pessoas, 32 jogam pôquer, 36 jogam truco, 34 jogam buraco,
18 jogam pôquer e truco, 21 jogam truco e buraco e 20 jogam buraco e pôquer. Se há, no grupo, uma única
pessoa que não joga quaisquer desses três jogos de cartas, então a quantidade de pessoas que jogam esses
três jogos é
A) 12.
B) 11.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           55
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

C) 9.
D) 7.
E) 6.

Comentários:
Mais uma questão para usarmos o Princípio da Inclusão-Exclusão! Dessa vez, usaremos três conjuntos. Antes
de qualquer coisa, vamos organizar as informações do enunciado.

32 pessoas jogam pôquer:            𝑛(𝑃) = 32
36 pessoas jogam truco:             𝑛(𝑇) = 36
34 pessoas jogam buraco:            𝑛(𝐵 ) = 34
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

8. (FGV/SEFAZ-MG/2023) Sobre 3 conjuntos 𝐴, 𝐵 e 𝐶, sabe-se que:

𝐴 tem 16 elementos;
𝐵 tem 24 elementos;
𝐶 tem 18 elementos;

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            56
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

                                        𝐴                                    𝐵

                                                                    𝐶

Note que o conjunto 𝐴 − (𝐵 ∪ 𝐶) é formado por todos os elementos de A que não são elementos da união
de B com C. É exatamente a região destacada em amarelo na figura acima. Logo, perceba que:

                     𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

Muito cuidado na hora de escrever a expressão acima. Muitos alunos podem achar que:

                                       𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐵 ∪ 𝐶)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        57
        www.estrategiaconcursos.com.br                                                            100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Mas está errado! A expressão correta é:


                     𝑛(𝐴 − (𝐵 ∪ 𝐶)) = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)


Nós devemos retirar de A apenas o que ele tem em comum com B e C.

Professor, qual motivo de somar o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)?

Pessoal, devemos somar o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶) pois caso exista um elemento que seja comum aos três conjuntos,
quando fazemos " − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐴 ∩ 𝐵)" retiramos ele duas vezes! Sendo assim, devemos "devolver"
esses elementos retirados mais de uma vez. Fazemos isso somando o 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶). Esclarecido esses
pontos, observe que a expressão contém exatamente o que estamos procurando.

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

9. (FGV/SENADO FEDERAL/2022) Um clube tem 180 associados que participam de suas duas atividades
sociais. Há 130 frequentadores da cinemateca, enquanto 92 sócios participam das aulas de dança de salão.
Sendo assim, é correto afirmar que
a) mais de 40 sócios participam das duas atividades.
b) menos de 30 sócios participam das duas atividades.
c) mais de 55 sócios só vão às aulas de dança.
d) menos de 80 sócios só vão à cinemateca.
e) menos de 45 sócios só vão às aulas de dança.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           58
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

10. (FGV/CM TAUBATÉ/2022) Em uma assembleia com 172 votantes, duas propostas independentes, A e
B, foram colocadas em votação. Cada votante votou a favor ou contra cada uma das duas propostas. Sabe-
se que 138 votaram a favor da proposta A, 74 votaram a favor da proposta B e 32 votaram contra as duas
propostas. O número de votantes que votaram a favor da proposta A e contra a proposta B é
a) 66.
b) 69.
c) 72.
d) 74.
e) 140.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            59
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

Pronto, com o valor de “x”, vamos complementar o diagrama.

                                          𝐴                                  𝐵
                                                66       72        2


                                                                                 32

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          60
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como o enunciado quer o número de votantes a favor de A e contra B, então queremos a seguinte região:

                                          𝐴                                  𝐵
                                                 66      72        2


                                                                                 32


Gabarito: LETRA A.

11. (FGV/CM TAUBATÉ/2022) A prefeitura de certo município formou com seus funcionários 3 comissões
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
Como são três comissões, vamos chamá-las de “A”, “B” e “C”.

                                          𝐴                                  𝐵

                                                                  𝐶


Agora, vamos inserir no diagrama algumas informações que a questão passou.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         61
        www.estrategiaconcursos.com.br                                                            100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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
                                                  𝑥 + 𝑦 + 𝑧 = 12


Professor, o que vamos fazer com essa soma?

Galera, vamos lá! Observe que o enunciado pede o número de funcionários que participam de pelo menos
uma comissão. Isso compreende tudo que está dentro dos diagramas.

                                          𝐴                                  𝐵
                                                 5        𝑦        5
                                                         2
                                                     𝑥         𝑧

                                                          5
                                                                   𝐶

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           62
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Sendo assim, o que estamos procurando é:

                     𝑇 = 5+5+5+2+𝑥+𝑦+𝑧                         →         𝑇 = 17 + 𝑥 + 𝑦 + 𝑧

Podemos usar a soma “𝑥 + 𝑦 + 𝑧” que determinamos anteriormente.

                                       𝑇 = 17 + 12         →           𝑻 = 𝟐𝟗

Gabarito: LETRA A.

12. (FGV/CM TAUBATÉ/2022) Uma empresa disponibilizou 3 cursos de aperfeiçoamento para seus
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

Comentários:
Vamos resolver esse exercício usando apenas os Diagramas de Venn! O primeiro passo é desenhá-los.

                                          𝐴                                  𝐵

                                                                   𝐶


Nesse momento, devemos inserir as informações que possuímos. Ressalto que essas informações não
podem ser colocadas de qualquer forma no diagrama. Existe uma ordem que deve ser observada!
Começamos inserindo a quantidade referente à intersecção tripla, depois colocamos aquelas referentes às
intersecções duplas e, por fim, aquelas referentes aos conjuntos isoladamente.

Professor, o enunciado não falou quantos alunos se matricularam nos três cursos!

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             63
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Então vamos chamar essa quantidade de “x”.

                                          𝐴                                  𝐵

                                                          𝑥

                                                                      𝐶


Agora, vamos para as intersecções duplas. O enunciado nos disse que:

- 4 funcionários matriculados nos cursos A e B;
- 4 funcionários nos cursos B e C;
- 4 funcionários nos cursos A e C.

No diagrama, ficamos:

                                          𝐴                                  𝐵
                                                          4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


Por fim, vamos analisar as informações sobre cada conjunto. Esse momento é mais delicado! Note que
devemos ter 8 funcionários em A. No nosso desenho até agora, temos:

                                          𝐴                                  𝐵
                                                𝑦         4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶

Queremos determinar o “y” para preencher o diagrama. Devemos somar tudo dentro de A e igualar a 8, pois
A deve ter 8 funcionários matriculados (conforme informado na questão).

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          64
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑦 = 8             →       𝑦=𝑥

Com isso:

                                          𝐴                                   𝐵
                                                𝑥         4−𝑥

                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


Vamos seguir esse mesmo raciocínio para as demais regiões que ainda faltam.

- 10 funcionários no curso B:

                                          𝐴                                   𝐵
                                                𝑥         4−𝑥         𝑧
                                                          𝑥
                                                    4−𝑥         4−𝑥

                                                                      𝐶


                            (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑧 = 10                →       𝑧 = 2+𝑥

- 12 funcionários no curso C:

                                          𝐴                                   𝐵
                                                𝑥         4−𝑥     2+𝑥
                                                          𝑥
                                                    4−𝑥         4−𝑥


                                                          𝑤
                                                                      𝐶

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                  65
        www.estrategiaconcursos.com.br                                                      100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                           (4 − 𝑥) + 𝑥 + (4 − 𝑥) + 𝑤 = 12                  →       𝑤 = 4+𝑥

Pronto! Temos nosso diagrama esquematizado e preenchido!

                                          𝐴                                    𝐵
                                                𝑥          4−𝑥        2+𝑥
                                                           𝑥
                                                     4−𝑥         4−𝑥


                                                           4+𝑥
                                                                       𝐶


Agora vem uma informação superimportante: há 1 único funcionário matriculado apenas no curso A.

Qual região do diagrama representa exatamente esse grupo?

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        66
        www.estrategiaconcursos.com.br                                                            100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Como a questão pede o número de funcionários matriculados em pelo menos um curso, basicamente
queremos a soma dos valores em todas as regiões.

                            𝑇 =1+3+1+3+3+3+5                          →      𝑻 = 𝟏𝟗

Gabarito: LETRA A.

13. (FGV/SEJUSP-MG/2022) Um grupo de 60 estudantes que se formaram juntos no Ensino Médio resolveu
formar 2 grupos no WhatsApp: GP1 e GP2. Sabe-se que dos 60 estudantes, 7 resolveram não participar do
GP1 nem do GP2 e que os números de participantes do GP1 e do GP2 são, respetivamente, 41 e 32. O
número de estudantes que participam simultaneamente dos dois grupos é
a) 7.
b) 13.
c) 20.
d) 23.
e) 32.

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          67
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                              𝒏(𝑮𝑷𝟏 ∩ 𝑮𝑷𝟐) = 𝟐𝟎

Gabarito: LETRA C.

14. (FGV/SEJUSP-MG/2022) Os conjuntos A, B e C possuem, cada um, 10 elementos e são tais que: A e B
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

                                          𝐴                                  𝐵

                                                                  𝐶


Ora, se A e C não possuem elementos em comum, já podemos escrever:

                                          𝐴                                  𝐵

                                                         0
                                                    0


                                                                  𝐶


Como 8 elementos pertencem apenas ao conjunto A:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                      68
        www.estrategiaconcursos.com.br                                                          100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                          𝐴                                  𝐵
                                                 8
                                                         0
                                                     0


                                                                   𝐶


Ainda, sabemos que 5 elementos pertencem apenas ao conjunto C:

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          69
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                     𝑥 + 𝑦 + 𝑧 + 0 = 10          →       𝑥 + 2 + 5 = 10      →   𝒙=𝟑

Gabarito: LETRA C.

15. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em
relação a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             70
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A) no máximo 20 são capixabas torcedores do Vasco.
Errado. Podemos ter até 40 capixabas torcedores do Vasco.

B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
Errado. O correto seria "no máximo" ao invés de "no mínimo".

C) exatamente 30 são capixabas não torcedores do Vasco.
Errado. O enunciado não fornece informações suficientes para concluirmos "exatamente". Com o que foi
passado, podemos apenas fazer considerações sobre quantidades máximas e/ou mínimas.

D) no máximo 40 são capixabas torcedores do Vasco.
Correto, foi uma das conclusões que chegamos com a resolução do exercício.

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
nos diagramas, devemos ter exatamente essas 70 pessoas.

            (50 − 𝑥) + 𝑥 + (40 − 𝑥) + 𝑦 = 70               →      𝑦 − 𝑥 = 20         →   𝑥 = 20 + 𝑦

Note que "x" é tanto maior quanto for "y". Assim, quando "y" for máximo "x" também será.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            71
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

No começo da solução vimos que a quantidade máxima de pessoas que não podem ser capixabas nem
torcerem para o Vasco é 20. Sendo assim, o valor máximo para "x", que é a quantidade de pessoas que são
capixabas e torcedoras do Vasco é de:

                   𝑥𝑚𝑎𝑥 = 20 + 𝑦𝑚𝑎𝑥           →      𝑥𝑚𝑎𝑥 = 20 + 20              →       𝑥𝑚𝑎𝑥 = 40

Logo, no máximo, podemos ter 40 pessoas que são capixabas e torcedoras do Vasco.

Gabarito: LETRA D.

16. (FGV/MPE-GO/2022) Em um grupo de 48 pessoas, há 35 advogados e 32 policiais. Nesse grupo, o
número mínimo de pessoas que são ao mesmo tempo advogados e policiais é
A) 13.
B) 16.
C) 19.
D) 32.
E) 35.

Comentários:
Essa questão parece com a anterior, não é verdade? Vamos resolvê-la usando diagramas.

                                                                                     𝑈
                                          𝐴                         𝑃

                                           35 − 𝑥      𝑥     32 − 𝑥


                                                                             𝑦


Nessa questão, "A" representa o conjunto dos advogados, "P" o conjunto dos policiais e "U" é o nosso
conjunto universo (compreende todas as 48 pessoas). Ademais, "x" representa a quantidade de advogados
que também são policiais e "y" é a quantidade de pessoas que não são advogados nem policiais. Quando
somamos todas as quantidades destacadas no nosso diagrama, devemos obter as 48 pessoas.

            (35 − 𝑥) + 𝑥 + (32 − 𝑥) + 𝑦 = 48            →      𝑦 − 𝑥 = −19               →    𝑥 = 𝑦 + 19


Observe que encontramos uma relação entre "x" e "y".

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 72
        www.estrategiaconcursos.com.br                                                                     100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A questão pede o valor mínimo de pessoas que são ao mesmo tempo advogadas e policiais, ou seja, o valor
mínimo de "x". Para que "x" seja mínimo, devemos ter que "y" também seja mínimo. Note que quanto
menor "y", menor também será "x".

A pergunta que vem agora é: qual é o menor valor possível para "y"?

A situação que minimiza "y" seria aquela em não existiria ninguém (entre essas 48 pessoas) que não fosse
advogado ou policial, ou seja, 𝑦𝑚𝑖𝑛 = 0. Com isso:

                     𝑥𝑚𝑖𝑛 = 𝑦𝑚𝑖𝑛 + 19          →    𝑥𝑚𝑖𝑛 = 0 + 19            →       𝑥𝑚𝑖𝑛 = 19

Gabarito: LETRA C.

17. (FGV/SEMSA-MANAUS/2022) Em um grupo de 50 pessoas, 27 gostam de filmes de suspense e 32
gostam de filmes de terror. Com relação a essas 50 pessoas, é correto concluir que
A) no máximo 18 delas não gostam de filmes de suspense nem de filmes de terror.
B) exatamente 9 delas gostam tanto de filmes de suspense como de filmes de terror.
C) exatamente 18 delas só gostam de filmes de suspense.
D) exatamente 23 delas só gostam de filmes de terror.
E) no mínimo 18 delas gostam tanto de filmes de suspense como de filmes de terror.

Comentários:
Mais uma nesse estilo! Todas de 2022! Vamos usar os diagramas de novo!

                                                                                 𝑈
                                           𝑆                        𝑇

                                           27 − 𝑥      𝑥     32 − 𝑥


                                                                             𝑦


- "S" denota o conjunto formado por aqueles que gostam de filmes de suspense;
- "T" denota o conjunto formado por aqueles que gostam de filmes de terror;
- "U" denota o conjunto universo, formado por todas as 50 pessoas mencionadas na questão;
- "x" é a quantidade de pessoas que gostam tanto de filmes de suspense quanto de terror;
- "y" é a quantidade de pessoas que não gostam de filmes de suspense nem de terror.

Quando fazemos o diagrama da forma acima, a soma das quantidades destacadas deve totalizar o número
de pessoas envolvidas, ou seja:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           73
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

            (27 − 𝑥) + 𝑥 + (32 − 𝑥) + 𝑦 = 50          →       59 − 𝑥 + 𝑦 = 50       →        𝑦 =𝑥−9


Encontramos uma relação entre "x" e "y". Note que quanto maior "x", maior será "y".

Sendo assim, para maximizarmos "y", devemos determinar o valor máximo de "x".

Para isso, note que temos 27 pessoas que gostam de filme de suspense e 32 pessoas que gostam de terror.

Observe que, em uma situação extrema, as 27 pessoas que gostam de suspense podem também gostar de
terror. Essa seria a situação que "x" assumiria seu máximo valor. Não poderíamos ter, por exemplo, 28
pessoas gostando de suspense e terror, já que sabemos que apenas 27 gostam de suspense. Tudo bem?
Esse é o "batente" para o "x". Descoberto isso, podemos usar na expressão que determinamos
anteriormente.

                      𝑦𝑚𝑎𝑥 = 𝑥𝑚𝑎𝑥 − 9         →       𝑦𝑚𝑎𝑥 = 27 − 9          →   𝑦𝑚𝑎𝑥 = 18


Gabarito: LETRA A.

18. (FGV/MPE-GO/2022) Uma empresa possui 32 funcionários que trabalham nos setores A, B e C. Sabe-
se que 20 funcionários trabalham no setor A, 14 funcionários trabalham no setor B e 9 funcionários
trabalham no setor C. Há funcionários que trabalham simultaneamente nos setores A e B, há funcionários
que trabalham simultaneamente nos setores A e C, mas nenhum funcionário trabalha simultaneamente
nos setores B e C. O número de funcionários que trabalha apenas no setor A é igual a
A) 4
B) 5
C) 6
D) 8
E) 9

Comentários:
Questão para usarmos o Princípio da Inclusão-Exclusão. Vamos anotar os dados que a questão passa:

- 32 funcionários trabalham nos setores A, B e C.

                                               𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 32

- 20 funcionários trabalham no setor A.

                                                    𝑛(𝐴) = 20

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            74
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

- 14 funcionários trabalham no setor B.

                                                    𝑛(𝐵) = 14

- 9 funcionários trabalham no setor C.

                                                     𝑛(𝐶) = 9

- Nenhum funcionário trabalha simultaneamente nos setores B e C.

                                                   𝑛(𝐵 ∩ 𝐶) = 0

Observe que como não existe funcionário que trabalhe simultaneamente em B e C, consequentemente não
podemos ter funcionário que trabalhe simultaneamente nos três setores: A, B e C.

                                                𝑛(𝐴 ∩ 𝐵 ∩ 𝐶) = 0

Pelo Princípio da Inclusão-Exclusão, temos:

       𝑛(𝐴 ∪ 𝐵 ∪ 𝐶) = 𝑛(𝐴) + 𝑛(𝐵) + 𝑛(𝐶) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶) − 𝑛(𝐵 ∩ 𝐶) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                             32 = 20 + 14 + 9 − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶) − 0 + 0

                                           𝑛(𝐴 ∩ 𝐵) + 𝑛(𝐴 ∩ 𝐶) = 11

O enunciado pede o número de funcionários que trabalham apenas no setor A. Para encontrar seu valor,
devemos subtrair de 𝑛(𝐴) o número de elementos das intersecções de A com os outros conjuntos. Afinal,
queremos a quantidade de elementos que estejam apenas em A.

                   𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 𝑛(𝐴) − 𝑛(𝐴 ∩ 𝐵) − 𝑛(𝐴 ∩ 𝐶) + 𝑛(𝐴 ∩ 𝐵 ∩ 𝐶)

                                       𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 20 − 11 − 0

                                            𝐴𝑝𝑒𝑛𝑎𝑠 𝑛𝑜 𝑆𝑒𝑡𝑜𝑟 𝐴 = 𝟗

Gabarito: LETRA E.

19. (FGV/SEMSA-MANAUS/2022) Uma pesquisa foi feita com 40 funcionários de uma empresa e entre as
perguntas havia as que estão abaixo:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        75
        www.estrategiaconcursos.com.br                                                            100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

                               𝑛(𝐴 ∪ 𝐹) = 40 − 11           →       𝑛(𝐴 ∪ 𝐹) = 29

Por sua vez, como 20 responderam que tem filhos, podemos escrever 𝑛(𝐹) = 20.

E, ainda, como 15 responderam que possuem animal de estimação, 𝑛(𝐴) = 15.

Com essas três informações, conseguimos encontrar o número de pessoas que possuem filhos e animais de
estimação - 𝑛(𝐴 ∩ 𝐹) - por meio da aplicação do Princípio da Inclusão-Exclusão:

                                     𝑛(𝐴 ∪ 𝐹) = 𝑛(𝐴) + 𝑛(𝐹) − 𝑛(𝐴 ∩ 𝐹)

Substituindo os valores,


            29 = 20 + 15 − 𝑛(𝐴 ∩ 𝐹)         →       𝑛(𝐴 ∩ 𝐹) = 35 − 29        →     𝒏(𝑨 ∩ 𝑭) = 𝟔

Gabarito: LETRA E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           76
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

20. (FGV/PC-RN/2021) Em um grupo de esportistas, 1/3 deles só gostam de vôlei e, dos demais, 2/5 gostam
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

                                             𝑉                         𝐵
                                                 𝑇       4𝑇        𝑥
                                                 3       15

Estamos procurando a fração daqueles que só gostam de basquete, ou seja, o valor de "x/T".

Vamos perceber algumas coisas aqui:

1) Todos nesse grupo gostam de, pelo menos, um desses dois esportes. Isso significa que não temos ninguém
fora de "V" ou "B".

2) Ademais, lembre-se que quando somamos as quantidades destacadas no diagrama, ela deve totalizar o
número de membros desse grupo.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            77
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

               𝑇 4𝑇                            9𝑇                                 6𝑇       𝒙 𝟐
                +   +𝑥 =𝑇              →          +𝑥 =1         →       𝑥=             →    =
               3 15                            15                                 15       𝑻 𝟓

Gabarito: LETRA B.

21. (FGV/IMBEL/2021) Os 38 empregados novos da fábrica de brinquedos BLIME estão passando por um
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
                                           𝐴                        𝐵

                                           𝑁−𝑥         𝑥    2𝑁 − 𝑥


                                                                             3𝑁


A soma das quantidades destacadas no diagrama deve totalizar o número de empregados novos (38).

                                       (𝑁 − 𝑥) + 𝑥 + (2𝑁 − 𝑥) + 3𝑁 = 38

                                     6𝑁 − 𝑥 = 38        →       𝑥 = 6𝑁 − 38

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             78
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

Vamos voltar nossa atenção à expressão que destaquei acima. Note que "x" e "N" são números naturais,
pois estão mensurando a quantidade de empregados. Não podemos ter "1,5" pessoas. Concorda? Além
disso, deve ser uma quantidade maior ou igual a zero. Não faz sentido encontrarmos "-3" empregados!

Com isso, o valor mínimo de "x" é o primeiro valor em que ele é positivo. Isso acontece quando 𝑵 = 𝟕.

                           𝑥 = 6 ⋅ 7 − 38       →       𝑥 = 42 − 38          →   𝒙=𝟒

Note que para valores de "N" abaixo de 7, o valor de "x" é negativo. Não sendo uma solução possível para o
problema.

Gabarito: LETRA D.

22. (FGV/IMBEL/2021) Trinta estudantes praticam judô, natação e basquete, sendo que todos eles
praticam pelo menos um desses esportes. Há 15 que praticam judô, 17 que praticam natação e 12 que
praticam basquete. Há 10 estudantes que praticam pelo menos dois esportes. O número de estudantes
que praticam os três esportes é
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              79
        www.estrategiaconcursos.com.br                                                                  100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

        𝑛(𝐽 ∪ 𝑁 ∪ 𝐵) = 𝑛(𝐽) + 𝑛(𝑁) + 𝑛(𝐵) − 𝑛(𝐽 ∩ 𝐵) − 𝑛(𝑁 ∩ 𝐵) − 𝑛(𝐽 ∩ 𝑁) + 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

Substituindo as informações,

                       30 = 15 + 17 + 12 − (𝟏𝟎 + 𝟐𝒏(𝑱 ∩ 𝑵 ∩ 𝑩)) + 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

                         30 = 15 + 17 + 12 − 10 − 2𝑛(𝐽 ∩ 𝑁 ∩ 𝐵) + 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)

                          30 = 34 − 𝑛(𝐽 ∩ 𝑁 ∩ 𝐵)            →         𝒏(𝑱 ∩ 𝑵 ∩ 𝑩) = 𝟒

Gabarito: LETRA A.

23. (FGV/PM-AM/2022) Em um grupo de 45 soldados, 27 gostam de marchar e 38 gostam de praticar tiro
ao alvo. Sejam:

X: o número de soldados desse grupo que gostam de marchar e também de praticar tiro ao alvo;
Y: o número de soldados desse grupo que não gostam nem de marchar nem de praticar tiro ao alvo.

Nesse caso, é correto afirmar que

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           80
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

A) X é no máximo 20.
B) Y é no mínimo 7.
C) quando X = 23, tem-se Y = 7.
D) quando Y = 7, tem-se X = 20.
E) quando Y = 5, tem-se X = 25.

Comentários:
Vamos desenhar os diagramas!
                                                                             S

                                            M                        T

                                             27 − 𝑥      𝑥     38 − 𝑥


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

            (27 − 𝑥) + 𝑥 + (38 − 𝑥) + 𝑦 = 45           →     65 − 𝑥 + 𝑦 = 45     →   𝑥 = 20 + 𝑦

Essa é a relação entre "x" e "y". Perceba que quando 𝑦 = 5, temos 𝑥 = 25, exatamente como consta na
alternativa E.

Gabarito: LETRA E.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           81
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

24. (FGV/PREF. SALVADOR/2019) 50 atletas estão treinando e todos usam bermuda e camiseta do mesmo
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
- Atletas com bermudas e camisetas brancas. 𝑛(𝐵 ∩ 𝐶) = 12

Podemos resolver de duas maneiras.

1ª) Por diagrama de Venn.

- Primeiro passo: desenhar os dois conjuntos.

- Segundo passo: colocar o valor da intersecção. No nosso caso, seria quantos estão de bermuda branca e
de camiseta branca.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          82
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

- Terceiro passo: subtraímos as quantidades totais de cada conjunto pela quantidade que já colocamos na
intersecção. Dessa forma, encontraremos quantas pessoas usaram apenas a bermuda branca (20 − 12 =
8) ou apenas a camiseta branca (25 − 12 = 13).

- Quarto passo: somar os números para obter a quantidade de pessoas que está usando o bermuda branca
ou camiseta branca (incluindo os dois ao mesmo tempo) = 8 + 12 + 13 = 33. Logo, se temos 33 atletas que
estão vestindo alguma peça branca de um total de 50, então 50 - 33 = 17 não estão.

2ª) Por Princípio da Inclusão-Exclusão.

Aplicar na fórmula que aprendemos na teoria e descobrir 𝑛(𝐵 ∪ 𝐶).

                                     𝑛(𝐵 ∪ 𝐶) = 𝑛(𝐵) + 𝑛(𝐶) − 𝑛(𝐵 ∩ 𝐶)

                                           𝑛(𝐵 ∪ 𝐶) = 20 + 25 − 12

                                                  𝑛(𝐵 ∪ 𝐶) = 33

Logo, 33 atletas estão usando algo branco. Como ao todo são 50 atletas, 50 - 33 = 17 não estão vestindo
nenhuma peça branca.

Gabarito: LETRA D.

25. (FGV/PREF. ANGRA/2019) Aos 5 anos, toda criança deve tomar um reforço das vacinas tríplice e pólio.
Uma pesquisa feita com as 80 crianças que entraram no 1º ano do Ensino Fundamental de uma escola
mostrou que:

- 54 alunos tomaram a vacina tríplice.
- 52 alunos tomaram a vacina pólio.
- 16 alunos não tomaram nenhuma das duas vacinas.

O número de alunos que tomou as duas vacinas é
a) 42.
b) 44.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          83
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

c) 46.
d) 48.
e) 50.

Comentários:
- Primeiro passo: desenhar os conjuntos daqueles que tomaram a vacina tríplice e daqueles que tomaram a
vacina pólio.

- Segundo passo: Adicionar as informações que foram passadas no enunciado. Conforme aprendemos,
sempre devemos começar pelo valor que está na intersecção. Na questão, esse valor equivale ao número
de pessoas que tomaram a vacina tríplice e a pólio. Como não sabemos, podemos simplesmente chamar de
𝑥.

É importante perceber que devemos colocar a quantidade de pessoas que não tomaram nenhuma das
vacinas também. No nosso caso, essa quantidade é o 16.

- Terceiro passo: somar todas as quantidades do diagrama e a igualar a quantidade de pessoas participantes
da pesquisa. De acordo com o enunciado, foram 80 crianças. Assim,

                (54 − 𝑥) + 𝑥 + (52 − 𝑥) + 16 = 80            →      122 − 𝑥 = 80   →   𝒙 = 𝟒𝟐

Portanto, 42 alunos tomaram as duas vacinas.

Gabarito: LETRA A.

         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            84
         www.estrategiaconcursos.com.br                                                                100

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                               LISTA DE QUESTÕES - FGV

Introdução à Teoria dos Conjuntos

1. (FGV/TCE-SP/2023) Considere o conjunto 𝐴 = {2, 3, 4, 6, 7, 8}. O número de subconjuntos de 𝐴 com 3
elementos, sendo pelo menos um elemento ímpar, é:
A) 16
B) 15
C) 14
D) 12
E) 8

2. (FGV/PREF. SALVADOR/2019) Em uma classe de 20 estudantes, 12 são meninas. Além disso, dos 20
estudantes, 15 gostam de Matemática. É correto concluir que
a) nenhuma menina gosta de Matemática.
b) todas as meninas gostam de Matemática.
c) no máximo 7 meninas gostam de Matemática.
d) no mínimo 7 meninas gostam de Matemática.
e) exatamente 7 meninas gostam de Matemática.

3. (FGV/PREF. OSASCO/2014) Na matemática, as coleções são chamadas de conjuntos. Se uma coleção
tem apenas um elemento, ela é dita um conjunto unitário. Um exemplo de conjunto unitário é a coleção
formada pelos números que são:
a) ao mesmo tempo, divisores de 4 e 9;
b) divisores de 4;
c) divisores de 9;
d) maiores que 4 e menores que 9;
e) formados pelos algarismos 4 e 9.

4. (FGV/PREF. OSASCO/2014) Conjunto é o nome dado, na Matemática, a qualquer coleção. Entretanto,
uma coleção pode não ter elementos. Nesse caso, diz-se que esse é um conjunto vazio. Um exemplo de
conjunto vazio é a coleção:
a) de meses do ano que começam pela letra J;
b) de dias da semana que começam pela letra T;
c) dos números que são, ao mesmo tempo, pares e ímpares;
d) dos números menores que 10 e maiores que 6;
e) das pessoas brasileiras que são casadas.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        85
        www.estrategiaconcursos.com.br                                                            100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

5. (FGV/CODEBA/2010) Sejam 𝑨 = {𝟎, 𝟏, 𝟐, 𝟑} e 𝑩 = {𝟎, 𝟐, 𝟒} dois conjuntos. Com relação aos conjuntos
A e B, analise as afirmativas a seguir:

I. 𝑩 ⊂ 𝑨
II. 𝑨 ∪ 𝑩 = {𝟎, 𝟏, 𝟐, 𝟑, 𝟒}
III. 𝑨 ∩ 𝑩 = {𝟎, 𝟐}

Está(ão) correta(s) somente
a) I.
b) II.
c) III.
d) I e II.
e) II e III.                                           ==219a34==

6. (FGV/BADESC/2010) Dado um conjunto A, chamamos subconjunto próprio não vazio de A a qualquer
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

7. (FGV/ALESP/2002) São dados os conjuntos: D = divisores de 24 (divisores positivos), M = múltiplos de 3
(múltiplos positivos), S = D ∩ M e n = números de subconjuntos de S. Portanto, n é igual a:
a) 64
b) 16
c) 32
d) 8

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            86
        www.estrategiaconcursos.com.br                                                                100

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                              GABARITO
 1.   LETRA A
 2.   LETRA D
 3.   LETRA A
 4.   LETRA C
 5.   LETRA E
 6.   LETRA A
 7.   LETRA B

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   87
      www.estrategiaconcursos.com.br                                       100

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                       LISTA DE QUESTÕES - FGV

Operações com Conjuntos

1. (FGV/CM-SP/2024) Sabe-se que os conjuntos 𝑨 = {𝟏, 𝟑, 𝟓, 𝒙, 𝟖} e 𝑩 = {𝟐, 𝟑, 𝒚, 𝟕, 𝟖} têm, cada um, 5
elementos. Sabe-se, também, que a interseção de A e B tem 4 elementos. A soma dos elementos da união
de A e B é
A) 26.
B) 27.
C) 28.
D) 29.
E) 30.

2. (FGV/BANESTES/2023) Sejam A e B dois conjuntos finitos tais que 𝑨 ∪ 𝑩 = {𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕} e {𝟏, 𝟐, 𝟓}
é o conjunto de elementos que estão em A e não estão em B. O conjunto dos elementos que não estão em
A ou estão em B é
A) {3, 4}.
B) {3, 6}.
C) {3, 4, 6}.
D) {4, 6, 7}.
E) {3, 4, 6, 7}.

3. (FGV/SSP-AM/2022) Sobre dois conjuntos A e B sabe-se que:

- A união de A e B tem 130 elementos.
- A diferença B – A tem 50 elementos.
- A diferença A – B tem 60 elementos.

Sendo x o número de elementos de A e y o número de elementos de B, o valor de x + y é igual a
A) 110.
B) 120.
C) 130.
D) 140.
E) 150.

4. (FGV/SEFAZ-MS/2006) Os conjuntos A, B e C satisfazem 𝑨 − (𝑩 ∩ 𝑪) = (𝑨 − 𝑩) ∪ (𝑨 − 𝑪):
a) nunca.
b) se e somente se A = B = C.
c) se e somente se B = C.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               88
        www.estrategiaconcursos.com.br                                                                  100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

d) se e somente se B ∩ C = ⊘.
e) sempre.

5. (FGV/SEFAZ-MS/2006) Se X, Y e Z são conjuntos, 𝑿 ∩ (𝒀 ∪ 𝒁) = (𝑿 ∩ 𝒀) ∪ 𝒁:
a) nunca.
b) se e somente se X = Y = Z.
c) se e somente se 𝑍 ⊂ 𝑋
d) se e somente se 𝑍 ⊂ 𝑌
e) sempre.

                                                       ==219a34==

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático     89
        www.estrategiaconcursos.com.br                                         100

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                                GABARITO
 1.   LETRA A
 2.   LETRA E
 3.   LETRA E
 4.   LETRA E
 5.   LETRA C

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   90
      www.estrategiaconcursos.com.br                                       100

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 11

                                       LISTA DE QUESTÕES - FGV

Princípio da Inclusão-Exclusão

1. (FGV/GCM-SJC/2024) Em um grupo de 50 guardas, 35 estão de bermuda e 27 estão de boné. Sabe-se
também que, nesse grupo, todos estão usando bermuda ou boné. O número de guardas, nesse grupo, que
estão usando bermuda e boné é
A) 35.
B) 27.
C) 23.
D) 15.
E) 12.

2. (FGV/ALESC/2024) Em uma prateleira há 15 latas iguais e vazias. Em algumas delas são colocadas
bolinhas pretas e bolinhas brancas. Sabe-se que 7 latas contêm bolinhas pretas, 5 latas contêm bolinhas
brancas e 3 latas contém bolinhas pretas e bolinhas brancas. O número de latas que ficaram vazias é igual
a
A) 3.
B) 4.
C) 5.
D) 6.
E) 7.

3. (FGV/CM-FORTALEZA/2024) Uma turma é composta por 40 alunos, dos quais:

- 12 gostam de Matemática, mas não de História;
- 19 não gostam de Matemática.

A quantidade de alunos dessa turma que gostam, simultaneamente, de Matemática e de História é
A) 6.
B) 7.
C) 8.
D) 9.
E) 10.

4. (FGV/ALEP-PR/2024) Uma escola de ensino médio oferece a seus estudantes cursos extras de francês,
italiano e alemão. Os estudantes podem frequentar um ou mais desses cursos. Uma turma dessa escola
tem 50 alunos no total. Todos os estudantes dessa turma frequentam pelo menos um dos três cursos
extras de idiomas oferecidos pela escola, sendo que 30 frequentam o curso de francês, 20 frequentam

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            91
        www.estrategiaconcursos.com.br                                                                100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

italiano e 10 frequentam alemão. Sabe-se ainda que 10 frequentam simultaneamente francês e italiano, 8
frequentam simultaneamente francês e alemão e 6 frequentam simultaneamente italiano e alemão.
Assinale a opção que indica o número de alunos da turma frequentam simultaneamente os três cursos de
idiomas oferecidos pela escola.
A) 6
B) 10
C) 14
D) 34
E) 86

5. (FGV/CÂMARA DOS DEPUTADOS/2023) Dra. Míriam é a responsável pelo atendimento psicológico de
97 estudantes de uma escola, às segundas, quartas e sextas. Há 21 estudantes que só procuram a Dra.
Míriam na segunda-feira, 20 que só comparecem às quartas e 17 que só vão às sextas. Dra. Míriam atende
48 estudantes às segundas, 53 às quartas e 43 às sextas. O número de estudantes que são atendidos três
vezes por semana é igual a
A) 7.
B) 8.
C) 9.
D) 10.
E) 11.

6. (FGV/PM-SP/2023) Em um conjunto de 20 objetos, 12 têm a característica A e 9 têm a característica B.
Apenas 3 dos objetos não possuem nem a característica A, nem a característica B. Assim, a quantidade de
objetos desse conjunto que possuem simultaneamente as características A e B é igual a
A) 1.
B) 2.
C) 3.
D) 4.

7. (FGV/MPE-SP/2023) Em um grupo de 55 pessoas, 32 jogam pôquer, 36 jogam truco, 34 jogam buraco,
18 jogam pôquer e truco, 21 jogam truco e buraco e 20 jogam buraco e pôquer. Se há, no grupo, uma única
pessoa que não joga quaisquer desses três jogos de cartas, então a quantidade de pessoas que jogam esses
três jogos é
A) 12.
B) 11.
C) 9.
D) 7.
E) 6.

8. (FGV/SEFAZ-MG/2023) Sobre 3 conjuntos 𝐴, 𝐵 e 𝐶, sabe-se que:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           92
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

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

9. (FGV/SENADO FEDERAL/2022) Um clube tem 180 associados que participam de suas duas atividades
sociais. Há 130 frequentadores da cinemateca, enquanto 92 sócios participam das aulas de dança de salão.
Sendo assim, é correto afirmar que
a) mais de 40 sócios participam das duas atividades.
b) menos de 30 sócios participam das duas atividades.
c) mais de 55 sócios só vão às aulas de dança.
d) menos de 80 sócios só vão à cinemateca.
e) menos de 45 sócios só vão às aulas de dança.

10. (FGV/CM TAUBATÉ/2022) Em uma assembleia com 172 votantes, duas propostas independentes, A e
B, foram colocadas em votação. Cada votante votou a favor ou contra cada uma das duas propostas. Sabe-
se que 138 votaram a favor da proposta A, 74 votaram a favor da proposta B e 32 votaram contra as duas
propostas. O número de votantes que votaram a favor da proposta A e contra a proposta B é
a) 66.
b) 69.
c) 72.
d) 74.
e) 140.

11. (FGV/CM TAUBATÉ/2022) A prefeitura de certo município formou com seus funcionários 3 comissões
para examinar assuntos diferentes. Sabe-se que:

- há funcionários que participam de mais de uma comissão.
- cada comissão é formada por 15 funcionários.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           93
        www.estrategiaconcursos.com.br                                                               100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

- em cada comissão há 5 funcionários que não participam de mais nenhuma outra comissão.
- há 2 funcionários que participam das três comissões.

O número de funcionários que participam de, pelo menos, uma comissão é igual a
a) 29.
b) 31.
c) 36.
d) 39.
e) 43.

12. (FGV/CM TAUBATÉ/2022) Uma empresa disponibilizou 3 cursos de aperfeiçoamento para seus
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

13. (FGV/SEJUSP-MG/2022) Um grupo de 60 estudantes que se formaram juntos no Ensino Médio resolveu
formar 2 grupos no WhatsApp: GP1 e GP2. Sabe-se que dos 60 estudantes, 7 resolveram não participar do
GP1 nem do GP2 e que os números de participantes do GP1 e do GP2 são, respetivamente, 41 e 32. O
número de estudantes que participam simultaneamente dos dois grupos é
a) 7.
b) 13.
c) 20.
d) 23.
e) 32.

14. (FGV/SEJUSP-MG/2022) Os conjuntos A, B e C possuem, cada um, 10 elementos e são tais que: A e B
possuem elementos em comum, B e C possuem elementos em comum, mas A e C não possuem elementos
comuns. Entre os elementos da união dos três conjuntos sabe-se que 8 elementos pertencem apenas ao
conjunto A e 5 elementos pertencem apenas ao conjunto C. O número de elementos que pertencem
apenas ao conjunto B é
a) 1.
b) 2.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             94
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

c) 3.
d) 4.
e) 5.

15. (FGV/SEFAZ-ES/2022) Em um grupo de 70 pessoas, há 50 capixabas e 40 torcedores do Vasco. Em
relação a esse grupo de pessoas, é correto concluir que
A) no máximo 20 são capixabas torcedores do Vasco.
B) no mínimo 20 não são nem capixabas nem torcedores do Vasco.
C) exatamente 30 são capixabas não torcedores do Vasco.
D) no máximo 40 são capixabas torcedores do Vasco.
E) é possível que nenhuma delas seja capixaba torcedor do Vasco.

16. (FGV/MPE-GO/2022) Em um grupo de 48 pessoas, há 35 advogados e 32 policiais. Nesse grupo, o
                                                       ==219a34==

número mínimo de pessoas que são ao mesmo tempo advogados e policiais é
A) 13.
B) 16.
C) 19.
D) 32.
E) 35.

17. (FGV/SEMSA-MANAUS/2022) Em um grupo de 50 pessoas, 27 gostam de filmes de suspense e 32
gostam de filmes de terror. Com relação a essas 50 pessoas, é correto concluir que
A) no máximo 18 delas não gostam de filmes de suspense nem de filmes de terror.
B) exatamente 9 delas gostam tanto de filmes de suspense como de filmes de terror.
C) exatamente 18 delas só gostam de filmes de suspense.
D) exatamente 23 delas só gostam de filmes de terror.
E) no mínimo 18 delas gostam tanto de filmes de suspense como de filmes de terror.

18. (FGV/MPE-GO/2022) Uma empresa possui 32 funcionários que trabalham nos setores A, B e C. Sabe-
se que 20 funcionários trabalham no setor A, 14 funcionários trabalham no setor B e 9 funcionários
trabalham no setor C. Há funcionários que trabalham simultaneamente nos setores A e B, há funcionários
que trabalham simultaneamente nos setores A e C, mas nenhum funcionário trabalha simultaneamente
nos setores B e C. O número de funcionários que trabalha apenas no setor A é igual a
A) 4
B) 5
C) 6
D) 8
E) 9

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         95
        www.estrategiaconcursos.com.br                                                             100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

19. (FGV/SEMSA-MANAUS/2022) Uma pesquisa foi feita com 40 funcionários de uma empresa e entre as
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

20. (FGV/PC-RN/2021) Em um grupo de esportistas, 1/3 deles só gostam de vôlei e, dos demais, 2/5 gostam
de vôlei e também de basquete. Todos os esportistas desse grupo gostam de, pelo menos, um desses dois
esportes. Em relação ao total de membros desse grupo, a fração daqueles que só gostam de basquete é:
A) 2/3;
B) 2/5;
C) 3/5;
D) 4/15;
E) 1/15.

21. (FGV/IMBEL/2021) Os 38 empregados novos da fábrica de brinquedos BLIME estão passando por um
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             96
        www.estrategiaconcursos.com.br                                                                 100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

D) 4.
E) 5.

22. (FGV/IMBEL/2021) Trinta estudantes praticam judô, natação e basquete, sendo que todos eles
praticam pelo menos um desses esportes. Há 15 que praticam judô, 17 que praticam natação e 12 que
praticam basquete. Há 10 estudantes que praticam pelo menos dois esportes. O número de estudantes
que praticam os três esportes é
A) 4.
B) 5.
C) 6.
D) 7.
E) 8.

23. (FGV/PM-AM/2022) Em um grupo de 45 soldados, 27 gostam de marchar e 38 gostam de praticar tiro
ao alvo. Sejam:

X: o número de soldados desse grupo que gostam de marchar e também de praticar tiro ao alvo;
Y: o número de soldados desse grupo que não gostam nem de marchar nem de praticar tiro ao alvo.

Nesse caso, é correto afirmar que
A) X é no máximo 20.
B) Y é no mínimo 7.
C) quando X = 23, tem-se Y = 7.
D) quando Y = 7, tem-se X = 20.
E) quando Y = 5, tem-se X = 25.

24. (FGV/PREF. SALVADOR/2019) 50 atletas estão treinando e todos usam bermuda e camiseta do mesmo
modelo, mas com cores diversas. Entre esses atletas há 20 com bermudas brancas, 25 com camisetas
brancas e 12 com bermudas e camisetas brancas. Assinale a opção que indica o número de atletas que não
estão vestindo nenhuma peça branca.
a) 5
b) 13
c) 15
d) 17
e) 20

25. (FGV/PREF. ANGRA/2019) Aos 5 anos, toda criança deve tomar um reforço das vacinas tríplice e pólio.
Uma pesquisa feita com as 80 crianças que entraram no 1º ano do Ensino Fundamental de uma escola
mostrou que:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          97
        www.estrategiaconcursos.com.br                                                              100

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 11

- 54 alunos tomaram a vacina tríplice.
- 52 alunos tomaram a vacina pólio.
- 16 alunos não tomaram nenhuma das duas vacinas.

O número de alunos que tomou as duas vacinas é
a) 42.
b) 44.
c) 46.
d) 48.
e) 50.

26. (FGV/MPE-RJ/2019) Sobre os conjuntos A e B, sabe-se que:

- (𝑨 – 𝑩) tem 7 elementos;
- A tem 28 elementos;
- A união de A e B tem 38 elementos

O número de elementos do conjunto B é:
a) 10;
b) 18;
c) 19;
d) 31;
e) 35.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   98
        www.estrategiaconcursos.com.br                                       100

                                    


---

Equipe Exatas Estratégia Concursos
Aula 11

                                                GABARITO
     1.   LETRA E                              10. LETRA A                 19. LETRA E
     2.   LETRA D                              11. LETRA A                 20. LETRA B
     3.   LETRA D                              12. LETRA A                 21. LETRA D
     4.   LETRA C                              13. LETRA C                 22. LETRA A
     5.   LETRA B                              14. LETRA C                 23. LETRA E
     6.   LETRA D                              15. LETRA D                 24. LETRA D
     7.   LETRA B                              16. LETRA C                 25. LETRA A
     8.   LETRA B                              17. LETRA A
     9.   LETRA A                              18. LETRA E

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                 99
      www.estrategiaconcursos.com.br                                                     100

                                  


---

---
