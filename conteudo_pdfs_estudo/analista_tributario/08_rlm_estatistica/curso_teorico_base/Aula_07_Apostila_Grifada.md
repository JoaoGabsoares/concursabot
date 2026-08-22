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
arquivo_origem: Aula 07_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: Índice
---

# Índice

Índice
1)  Sequências Numéricas


)  Sequência de Figuras                                                                                                                                                                    15

3)  Sequência de Letras e Palavras                                                                                                                                                          18
)  Questões Comentadas - Sequências Numéricas - FGV                                                                                                                                        21
..............................................................................................................................................................................................

)  Questões Comentadas - Sequências de Figuras - FGV                                                                                                                                       39

6)  Questões Comentadas - Sequência de Letras e Palavras - FGV                                                                                                                              48
..............................................................................................................................................................................................

)  Lista de Questões - Sequências Numéricas - FGV                                                                                                                                          61

8)  Lista de Questões - Sequências de Figuras - FGV                                                                                                                                         67
)  Lista de Questões - Sequência de Letras e Palavras - FGV                                                                                                                                71
..............................................................................................................................................................................................


---

                                         RACIOCÍNIO SEQUENCIAL

Sequências Numéricas

O assunto de Raciocínio Sequencial possui uma teoria muito discreta que muitas vezes não chega a ser
requisitada para a resolução das questões dessa parte da matéria. As questões exigem muito mais que você
seja capaz de desenvolver um raciocínio coerente do que realmente saber se você aprendeu alguma teoria
a respeito. Apesar disso, darei aqui uma introdução ao estudo das sequências para que você possa
desenvolver uma noção intuitiva da matéria que te ajudará na hora desenvolver seu raciocínio. Mãos à obra!

De modo objetivo, podemos definir as sequências afirmando que são listas de números em que os termos
obedecem a uma determinada regra de sucessão. Vamos ver alguns exemplos?

   •    (1, 2, 3, 4, 5, 6, 7, ...);
   •    (1, 1 ,2 ,2 ,3 ,3, 4, 4, ...);
   •    (2, 4, 8, 16, 32, ...);
   •    (1, -1, 1, -1, 1, -1, ...);

Normalmente, as sequências aparecem representadas na forma acima: entre parênteses, termo separados
por vírgulas e com as reticências ao final, caso necessário. De modo geral, também é possível representar
as sequências da seguinte forma:

                                               (𝑎1 , 𝑎2 , 𝑎3 , 𝑎4 , 𝑎5 , … )

Nesse tipo de representação, temos que o 𝒂𝟏 é lido como "a índice um", 𝑎2 é o "a índice dois", 𝑎3 é o "a
índice três" e assim sucessivamente. Por exemplo, na sequência (3, 6, 9, 12, 15, . . . ) temos que:

    •   𝑎1 = 3
    •   𝑎2 = 6
    •   𝑎3 = 9
    •   𝑎4 = 12
    •   𝑎5 = 15

Esse índice que está subscrito ao "a" indica a ordem do termo! 𝑎1 é o primeiro termo da sequência, 𝑎2 é o
segundo termo da sequência, 𝑎3 é o terceiro. Quando queremos representar um termo de uma sequência e
não sabemos qual a sua ordem, simplesmente o denotamos como 𝒂𝒏 e o lemos "a índice n". Essa mesma
notação pode ser usada para denotar um termo genérico e a sua lei de formação. Vamos detalhar.

A sequência (3, 6, 9, 12, 15, . . . ) pode ser representada simplesmente como 𝒂𝒏 = 𝟑 ∙ 𝒏. O 𝑛 é qualquer
número pertencente ao conjunto dos números naturais excluindo o zero (ℕ∗ ), relembre-se:

                                              ℕ∗ = {1, 2, 3, 4, 5, 6, … }


---

Assim, ficamos com:

    •   Quando 𝑛 = 1, então 𝑎1 = 3 ∙ 1 ⟹ 𝑎1 = 3
    •   Quando 𝑛 = 2, então 𝑎2 = 3 ∙ 2 ⟹ 𝑎2 = 6
    •   Quando 𝑛 = 3, então 𝑎3 = 3 ∙ 3 ⟹ 𝑎3 = 9
    •   Quando 𝑛 = 4, então 𝑎4 = 3 ∙ 4 ⟹ 𝑎4 = 12
    •   Quando 𝑛 = 5, então 𝑎5 = 3 ∙ 5 ⟹ 𝑎5 = 15

Veja que obtivemos exatamente os mesmos números da sequência que estávamos tratando, inclusive na
ordem dada. Conclusão: nossas sequências podem ser representadas de formas diferentes, por meio da lei
de formação, e não só na forma explícita (𝑎1 , 𝑎2 , 𝑎3 , 𝑎4 , 𝑎5 , … ).

Existem sequências que apresentam um padrão muito específico. Essas sequências ganham um nome
especial e trataremos delas nas seções subsequentes. Faremos, a partir desse ponto, uma intersecção com
a disciplina de matemática, apresentando a vocês a sequência de Fibonacci, a progressão aritmética e a
progressão geométrica. Fique ciente que não esgotaremos nenhum desses conteúdos, apenas veremos o
suficiente para desenvolver uma noção intuitiva que será suficiente para a resolução das questões.

(SEFAZ-AM/2022) Uma sequência de números inteiros é tal que cada termo, a partir do terceiro, é a soma
do seu termo antecessor com o dobro do antecessor do antecessor. Sabe-se que o sexto termo dessa
sequência é 85 e, o oitavo, é 341. O quarto termo da referida sequência é
a) 15.
b) 17
c) 19
d) 21
e) 23

Comentários:
Questão bem legal! Vamos analisar a informação crucial:

"Cada termo, a partir do terceiro, é a soma do seu antecessor com o dobro do antecessor do antecessor."

Na prática, temos o seguinte:

𝑎1 = 𝑎1
𝑎2 = 𝑎2
𝑎3 = 𝑎2 + 2𝑎1      (1)
𝑎4 = 𝑎3 + 2𝑎2      (2)
𝑎5 = 𝑎4 + 2𝑎3      (3)


---

𝑎6 = 𝑎5 + 2𝑎4        (4)
𝑎7 = 𝑎6 + 2𝑎5        (5)
𝑎8 = 𝑎7 + 2𝑎6        (6)

Escrevi até a equação (6) pois o enunciado deu o oitavo (𝒂𝟖 = 𝟑𝟒𝟏) e o sexto (𝒂𝟔 = 𝟖𝟓) termo. Com isso,
por meio de (6), podemos encontrar o 𝑎7 .

       𝑎8 = 𝑎7 + 2𝑎6       →       341 = 𝑎7 + 2 ⋅ 85         →        𝑎7 = 341 − 170         →    𝑎7 = 171

Com o valor de 𝑎7 , podemos usar a equação (5) para encontrar 𝑎5 .

           𝑎7 = 𝑎6 + 2𝑎5       →        171 = 85 + 2 ⋅ 𝑎5         →       86 = 2𝑎5       →       𝑎5 = 43

Com o valor de 𝑎5 , podemos usar a equação (4) para encontrar 𝒂𝟒 .

            𝑎6 = 𝑎5 + 2𝑎4      →        85 = 43 + 2𝑎4         →       42 = 2𝑎4       →       𝒂𝟒 = 𝟐𝟏

Pronto! Podemos marcar a alternativa D.

Gabarito: LETRA D.

Sequência de Fibonacci

Pessoal, a sequência de Fibonacci é muito conhecida no meio matemático. Reconhecê-la na hora da prova
pode ser um diferencial, de modo a propiciar mais confiança e agilidade na questão. E qual é a sequência de
Fibonacci?

                                   (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, … )

Você consegue desvendar o padrão dessa sequência? Destrincharemos essa sequência para você. A
sequência de Fibonacci é definida a partir de dois valores iniciais: o primeiro e o segundo termo. Em uma
sequência qualquer, chamaríamos esses termos de 𝑎1 e 𝑎2 . No entanto, estamos falando da sequência de
Fibonacci e por esse motivo, chamamos esses termos de 𝑭𝟏 e 𝑭𝟐 .

Note que os dois primeiros termos dessa sequência são iguais a 1! Depois, cada termo subsequente é
formado pela soma dos dois anteriores! Percebeu?

   •   𝐹3 = 𝐹1 + 𝐹2 ⟹ 𝐹3 = 1 + 1 = 2
   •   𝐹4 = 𝐹3 + 𝐹2 ⟹ 𝐹4 = 2 + 1 = 3
   •   𝐹5 = 𝐹4 + 𝐹3 ⟹ 𝐹5 = 3 + 2 = 5
   •   𝐹6 = 𝐹5 + 𝐹4 ⟹ 𝐹6 = 5 + 3 = 8
   •   Por aí vai...

Podemos representar esses fatos de uma forma resumida e organizada. Para essa finalidade, definimos a
sequência de Fibonacci da seguinte forma:


---

                                                 1, 𝑠𝑒 𝑛 = 1
                                     𝐹𝑛 = {      1, 𝑠𝑒 𝑛 = 2
                                            𝐹𝑛−1 + 𝐹𝑛−2 , 𝑠𝑒 𝑛 ≥ 3

Veja que é tudo o que a gente falou até aqui, mas utilizando a notação matemática. Os dois primeiros termos
são iguais a um e um termo genérico 𝐹𝑛 é dado como a soma dos dois termos anteriores a ele: 𝑭𝒏−𝟏 + 𝑭𝒏−𝟐 .
Podemos, ainda, representar a sequência de Fibonacci de mais um jeito, através de uma fórmula! Qualquer
termo da sequência de Fibonacci pode ser obtido usando a seguinte expressão:
                                                     𝑛             𝑛
                                             (1 + √5) − (1 − √5)
                                      𝐹𝑛 =
                                                     2𝑛 √5

É um jeito mais trabalhoso de obtermos os termos, pois precisaremos ficar desenvolvendo os binômios.
Recomendo que, para escrever a sequência, utilize nossa regra de somar os dois termos anteriores,
lembrando que os dois primeiros termos são iguais a um. No mais, é importante ter uma noção do aspecto
da fórmula, pois poderá te ajudar em eventuais questões. Falando nelas, vamos fazer algumas?

(ALESE/2018) Um servidor público, no seu primeiro dia de trabalho, atendeu uma única pessoa, o que se
repetiu no segundo dia. A partir do terceiro, o número de pessoas atendidas por ele sempre foi igual à soma
dos números de pessoas atendidas nos dois dias anteriores. Seu supervisor prometeu que, se houvesse um
dia em que ele atendesse 50 ou mais pessoas, ele ganharia uma folga extra. Considerando que o padrão de
atendimentos descrito se manteve, o servidor ganhou sua primeira folga extra ao final do
A) oitavo dia de trabalho.
B) décimo dia de trabalho.
C) décimo segundo dia de trabalho.
D) vigésimo dia de trabalho.
E) vigésimo segundo dia de trabalho.

Comentários:
Vamos montar uma sequência com as informações fornecidas no enunciado. Temos que um servidor público
atendeu uma pessoa no primeiro dia de trabalho, 𝒂𝟏 = 𝟏. No segundo dia, o servidor atendeu também uma
pessoa, 𝒂𝟐 = 𝟏. A partir do terceiro dia, o número de pessoas atendidas é igual à soma dos dois dias
anteriores. Por exemplo, 𝒂𝟑 = 𝒂𝟏 + 𝒂𝟐 = 𝟐.

Note que a sequência cujo os dois primeiros termos são 1 e os demais termos é a soma do dois anteriores é
uma sequência muito conhecida no meio matemático: é a sequência de Fibonacci. Lembre-se:

                                                  1, 𝑠𝑒 𝑛 = 1
                                      𝐹𝑛 = {      1, 𝑠𝑒 𝑛 = 2
                                             𝐹𝑛−1 + 𝐹𝑛−2 , 𝑠𝑒 𝑛 ≥ 3


---

Logo, queremos achar o primeiro termo da sequência de Fibonacci maior do que 50. Como fazemos isso?
O jeito mais fácil é escrever todos eles!

Encontramos, portanto, que ao fim do décimo dia o servidor terá atendido 55 pessoas e ganhará a sua
primeira folga extra.

Gabarito: Letra B.

Noções Básicas de Progressão Aritmética

A progressão aritmética é o tipo de sequência mais comum em questões. De modo geral, é qualquer
sequência cujo termo subsequente difere do anterior por uma constante. É mais fácil do que você está
pensando! Vamos ver alguns exemplos para começar a destrinchar essa matéria!

   •   (1, 2, 3, 4, 5, 6, 7, . . . )
   •   (2, 4, 6, 8, 10, 12, . . . )
   •   (21, 14, 7, 0, −7, −14, −21, . . . )
   •   (0, 50, 100, 150, 200, 250, . . . )

Você é capaz de identificar os padrões das sequências acima? Todas elas são exemplos de progressões
aritméticas. À medida que "se anda" na sequência, os termos sempre aumentam (ou diminuem) de um
mesmo um valor.

   •   (1, 2, 3, 4, 5, 6, 7, . . . ) ⟹ Cada termo subsequente é igual ao anterior mais 1.
   •   (2, 4, 6, 8, 10, 12, . . . ) ⟹ Cada termo subsequente é igual ao anterior mais 2.
   •   (21, 14, 7, 0, −7, . . . ) ⟹ Cada termo subsequente é igual ao anterior menos 7.
   •   (0, 50, 100, 150, 200, . . . ) ⟹ Cada termo subsequente é igual ao anterior mais 50.

Esse número que somamos ou subtraímos de cada termo é chamado de razão (𝒓). Quando a razão é
positiva, nós dizemos que a PA é crescente, quando é negativa, dizemos que a PA é decrescente. Observe
que em uma progressão aritmética de forma geral (𝑎1 , 𝑎2 , 𝑎3 , 𝑎4 , 𝑎5 , … ), sempre poderemos escrever um
termo como função da razão e do primeiro termo.

   •   𝑎2 = 𝑎1 + 𝑟
   •   𝑎3 = 𝑎2 + 𝑟 ⟹ 𝑎3 = (𝑎1 + 𝑟) + 𝑟 ⟹ 𝑎3 = 𝑎1 + 2𝑟
   •   𝑎4 = 𝑎3 + 𝑟 ⟹ 𝑎4 = (𝑎1 + 2𝑟) + 𝑟 ⟹ 𝑎4 = 𝑎1 + 3𝑟
   •   𝑎5 = 𝑎4 + 𝑟 ⟹ 𝑎5 = (𝑎1 + 3𝑟) + 𝑟 ⟹ 𝑎5 = 𝑎1 + 4𝑟

Note que utilizamos o fato de que, em uma PA, um determinado termo é igual ao seu anterior mais uma
constante. Para descobrir o 𝑎5 , nós só precisamos do 𝑎1 e da razão (𝑟), não sendo necessário escrever todos
os termos da PA até o 𝒂𝟓 . Imagine, por exemplo, que você quer saber o 𝑎50 da sequência


---

(2, 4, 6, 8, 10, 12, . . . ). Você concorda que listar os 50 termos não seria uma tarefa muito rápida? Se você
souber o 𝑎1 e a razão (𝑟), é possível determiná-lo em segundos. A fórmula do termo geral de uma progressão
aritmética é dada pela expressão abaixo, guarde ela bem!

                                            𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Por exemplo, para obter o 𝑎50 da sequência (2, 4, 6, 8, 10, 12, . . . ), basta sabermos que 𝑎1 = 2 e 𝑟 = 2.

                                           𝑎50 = 2 + (50 − 1) ∙ 2

                                              𝑎50 = 2 + 49 ∙ 2

                                                 𝑎50 = 100

E se a razão for negativa, como fazemos? Absolutamente do mesmo jeito, não vai mudar nada. Vamos pegar
a sequência (21, 14, 7, 0, −7, . . . ) que possui razão 𝑟 = −7 e primeiro termo 𝑎1 = 21. Veja que é uma PA
decrescente. Qual será o 𝑎75 ? Da fórmula do termo geral de uma progressão aritmética, podemos fazer:

                                            𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

                                        𝑎75 = 21 + (75 − 1) ∙ (−7)

                                              𝑎75 = 21 − 74 ∙ 7

                                                𝑎75 = −497

Um fato que eu gostaria de ressaltar com vocês é que a escolha da letra "a" para representar elementos de
uma sequência é só uma convenção. Na prática, você poderá ver sequências representadas das mais
diferentes maneiras, por exemplo, utilizando a letra "b" no lugar da letra "a": (𝑏1 , 𝑏2 , 𝑏3 , 𝑏4 , 𝑏5 , … ) e
escrevendo o termo geral como 𝑏𝑛 = 𝑏1 + (𝑛 − 1) ∙ 𝑟. Esse tipo de notação é válido! Não tem problema
algum, é ao gosto do freguês! Por isso, quando você ver sequências representadas com outras letras,
continua sendo uma sequência e a abordagem é exatamente a que estamos fazendo aqui. Entendido?

Existe mais uma fórmula dentro do universo da progressão aritmética que é a da soma dos n primeiros
termos. Não irei entrar no mérito da demonstração pois, apesar de ser uma demonstração simples, fugirá
do escopo de uma aula de raciocínio lógico.

Imagine que temos a seguinte PA: (1, 2, 3, 4, 5, 6, 7, . . . ). Qual é a soma dos 100 primeiros termos? Para
responder essa pergunta, temos que realizar uma tarefa que parece não ser tão imediata, concorda? Porém,
utilizando a fórmula da soma dos n primeiros termos de uma PA, podemos responder de maneira rápida. A
fórmula da soma dos n primeiros termos é dada por:

                                                    (𝑎1 + 𝑎𝑛 ) ∙ 𝑛
                                             𝑆𝑛 =
                                                         2

Ou seja, para calcularmos a soma dos n primeiros termos, precisamos do 𝑎1 e do 𝑎𝑛 . Como estamos atrás
dos 100 primeiros termos, temos que 𝑛 = 100 e precisamos encontrar o 𝑎100.


---

                                           𝑎100 = 1 + (100 − 1) ∙ 1

                                                    𝑎100 = 100
Substituindo na fórmula:

                                                    (𝑎1 + 𝑎100 ) ∙ 100
                                           𝑆100 =
                                                           2

                                             𝑆100 = (1 + 100) ∙ 50

                                                  𝑆100 = 5050

Portanto, a soma dos 100 primeiros termos da progressão aritmética (1, 2, 3, 4, 5, 6, 7, . . . ) é 5050.

(CÂMARA DOS DEPUTADOS/2014) Em determinado colégio, todos os 215 alunos estiveram presentes no
primeiro dia de aula; no segundo dia letivo, 2 alunos faltaram; no terceiro dia, 4 alunos faltaram; no quarto
dia, 6 alunos faltaram, e assim sucessivamente. Com base nessas informações, julgue o próximo item,
sabendo que o número de alunos presentes às aulas não pode ser negativo.

No vigésimo quinto dia de aula, faltaram 50 alunos

Comentários:
O número de faltosos aumenta conforme uma progressão aritmética de razão 2, observe:
𝒂𝟏 = 𝟎
𝒂𝟐 = 𝟐
𝒂𝟑 = 𝟒
𝒂𝟒 = 𝟔

Sabemos que a fórmula do termo geral de uma PA é dada por:

                                             𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Queremos calcular quantos alunos faltaram no 25º dia (𝑛 = 25). Como a razão é 2 (𝑟 = 2), então:

                                            𝑎25 = 0 + (25 − 1) ∙ 2

                                                    𝑎25 = 48

Logo, no 25º dia, faltaram 48 alunos.

Gabarito: ERRADO


---

Noções Básicas de Progressão Geométrica

Pessoal, não entraremos muito a fundo na parte de Progressão Geométrica pois é mais comum sua cobrança
na matéria de Matemática, apenas. No entanto, comentaremos aqui os aspectos relevantes da matéria que
devem ser levados para a sua prova de Raciocínio Lógico.

Na parte de progressões aritméticas, vimos que elas são caracterizadas pela presença de uma razão, que
somamos ao termo anterior para obtermos o termo subsequente. Na progressão geométrica, também
teremos uma razão que entrará não somando o termo anterior, mas multiplicando-o! Vamos com calma!
São exemplos de PGs as seguintes sequências:

   •   (2, 4, 8, 16, 32, 64, … );
   •   (5, 25, 125, 625, … );
   •   (100, 10, 1, 0.1, 0.01, … );

Veja que, na primeira sequência acima, cada termo subsequente é o dobro do anterior. Na segunda
sequência, multiplicamos cada próximo termo por 5 em relação ao termo passado. Por fim, na nossa terceira
sequência, cada termo subsequente está multiplicado por 0,1 em relação ao anterior. Esses números que
multiplicamos os termos são as razões de cada sequência e, no estudo das PGs, denotamos ela por 𝒒 e não
mais por 𝒓.

Texto para as próximas questões

Uma unidade da PRF interceptou, durante vários meses, lotes de mercadorias vendidas por uma empresa
com a emissão de notas fiscais falsas. A sequência dos números das notas fiscais apreendidas, ordenados
pela data de interceptação, é a seguinte: 25, 75, 50, 150, 100, 300, 200, 600, 400, 1.200, 800, .... Tendo como
referência essa situação hipotética, julgue o item seguinte, considerando que a sequência dos números das
notas fiscais apreendidas segue o padrão apresentado.

(PRF/2019) A partir do padrão da sequência, infere-se que o 12º termo é o número 1.600.

Comentários:
Vamos extrair do enunciado a sequência fornecida para uma melhor análise:

O examinador faz uma afirmação sobre o 12º termo, isto é, o 𝑎12 . Para conseguir encontrar o seu valor, é
necessário determinar o padrão da sequência. Observe que existem duas progressões geométricas dentro
dessa sequência principal. Vamos destacá-las?


---

Veja que os números destacados em vermelho formam uma progressão geométrica de razão 2. Além disso,
os termos que formam essa sequência sempre pulam um termo da sequência principal. A outra PG é
formada com os demais termos que não estão destacados e também possui razão 2.

Para encontrarmos o valor do 𝑎12 , basta seguirmos o padrão acima, multiplicando o 𝑎10 por 2.

                  𝒂𝟏𝟐 = 𝒂𝟏𝟎 ∙ 𝟐       ⟹     𝒂𝟏𝟐 = 𝟏𝟐𝟎𝟎 ∙ 𝟐          ⟹       𝒂𝟏𝟐 = 𝟐𝟒𝟎𝟎

Gabarito: ERRADO.

A questão acima mostra que, na prática, você não precisa de conhecimentos avançados em PG para resolver
questões de Raciocínio Sequencial (no entanto, é muito importante estar afiado nesse assunto para sua
prova de Matemática, se houver previsão no edital!).

Observe que, se você conhece esse tipo de sequência, fica bem mais fácil reconhecer os padrões trazidos
pela questão, facilitando muito resolvê-la. Para encerrar esse breve tópico, quero ainda apresentar-lhes
algumas formas. Assim como na PA, a PG possui uma fórmula para o termo geral em função da razão (q), do
primeiro termo (𝑎1 ) e da ordem (n) do termo procurado.

                                               𝑎𝑛 = 𝑎1 ∙ 𝑞𝑛−1

Se, por acaso, você precisasse descobrir o 𝑎11 da sequência (2, 4, 8, 16, 32, 64, … ), o que faria? Obviamente,
uma solução seria listar todos os termos até o 𝒂𝟏𝟏 sempre multiplicando o termo anterior por 2 para obter
o termo subsequente. No entanto, você também poderia aplicar a fórmula do termo geral e descobrir de
imediato:

             𝑎11 = 2 ∙ 211−1      →    𝑎11 = 2 ∙ 210     →      𝑎11 = 211     →     𝒂𝟏𝟏 = 𝟐𝟎𝟒𝟖

E como faríamos para obter a soma de todos os termos da sequência acima? Digo de 𝑎1 até 𝑎11 ? Temos uma
fórmula para isso, anote (ou revise) aí.

                                                    𝑎1 ∙ (𝑞𝑛 − 1)
                                             𝑆𝑛 =
                                                        𝑞−1

Essa é a fórmula da soma dos termos de uma P.G. finita. Logo, a soma dos 11 primeiros termos da PG
(2, 4, 8, 16, 32, 64, … ) é:


---

               2 ∙ (211 − 1)                2 ∙ (2048 − 1)
       𝑆11 =                   →    𝑆11 =                                          →       𝑆11 = 2 ∙ 2047   →   𝑆11 = 4094
                   2−1                             1

Ok! Professor, vi que você comentou que essa é a fórmula para a soma dos termos de uma P. G. finita. Por
acaso existe uma P.G. infinita? Boa observação! Existe sim! Uma sequência é tão grande quanto você queira
e caso ela tenha infinitos termos, sob algumas condições, você poderá somar todos eles por meio de uma
fórmula específica. Vamos detalhar isso um pouco mais.

Continue considerando a PG que estávamos trabalhando: (2, 4, 8, 16, 32, 64, … ). Observe que os termos
continuam aumentando cada vez mais, de modo que a soma dos infinitos termos certamente também dará
um número estratosférico (infinito).

                                                           1 1 1               1
Agora, imagine que estamos com a sequência (2, 1, 2 , 4 , 8 , 16 , … ). Note que se trata de uma P.G. com razão
    1
𝑞 = . Os termos vão se tornando cada vez menores. Com isso, a soma vai tender a se "estabilizar" em um
    2
valor e poderemos calculá-lo. Vamos ver?

   •    Soma dos dois primeiros termos: 2 + 1 = 𝟑
   •    Soma dos três primeiros termos: 2 + 1 + 1/2 = 𝟑, 𝟓
                                                           1           1
   •    Soma dos quatro primeiros termos: 2 + 1 + + = 𝟑, 𝟕𝟓
                                                           2           4
                                                       1           1           1
   •    Soma dos cinco primeiros termos: 2 + 1 + 2 + + = 𝟑, 𝟖𝟕𝟓
                                                    4 8
                                                   1           1           1           1
   •    Soma dos sete primeiros termos: 2 + 1 + 2 + 4 + 8 + 16 = 𝟑, 𝟗𝟑𝟕𝟓
                                                   1           1           1       1        1
   •    Soma dos oito primeiros termos: 2 + 1 + 2 + 4 + 8 + 16 + 32 = 𝟑, 𝟗𝟔𝟖𝟕𝟓
                                                      1        1           1           1       1       1
   •    Soma dos nove primeiros termos: 2 + 1 + 2 + 4 + 8 + 16 + 32 + 64 = 𝟑, 𝟗𝟖𝟒𝟑𝟕𝟓
                                                  1        1           1           1       1       1
   •    Soma dos dez primeiros termos: 2 + 1 + 2 + 4 + 8 + 16 + 32 + 64 = 𝟑, 𝟗𝟗𝟐𝟏𝟖𝟕𝟓

Galera, vocês conseguem perceber que nossa primeira soma foi igual a 3 e depois de somar vários outros
termos não passamos nem do número 4? Isso porque os termos diminuem cada vez mais e mais. O limite
da soma quando o número de termos tender ao infinito será exatamente 4. A fórmula que nos fornece esse
valor é:

                                                                𝑎1
                                                  𝑆∞ =
                                                               1−𝑞

Essa é a fórmula da soma dos infinitos termos de uma PG. Ressalto que ela só será válida quando o módulo
da razão for menor do que um, isto é, |𝒒| < 𝟏. Agora, vamos ver na prática!


---

(SEFAZ-RS/2018) Sobre uma mesa há 9 caixas vazias. Em uma dessas caixas, será colocado um grão de feijão;
depois, em outra caixa, serão colocados três grãos de feijão. Prosseguindo-se sucessivamente, será escolhida
uma caixa vazia, e nela colocada uma quantidade de grãos de feijão igual ao triplo da quantidade colocada
na caixa anteriormente escolhida, até que não reste caixa vazia. Nessa situação, nas 9 caixas será colocada
uma quantidade de grãos de feijão igual a
     39 −1
A)
         2
B)39 − 1
     310 −1
C)        2
         10
D) 3          −1
     38 −3
E)       2


Comentários:
Pessoal, temos 9 caixas. Na primeira caixa será colocado um único grão de feijão, depois será colocado 3
grãos em outra, depois o triplo (9) e assim sucessivamente... Veja que está sendo formado uma sequência
muito conhecida:

                                            (1, 3, 9, 27, 81, … )

Portanto, temos uma P.G. de razão 3. O enunciado pede a soma de todos os grãos colocados nas caixas. Em
outras palavras, queremos a soma dos 9 primeiros termos dessa sequência (são 9 caixas). Lembre-se:

                                                   𝑎1 ∙ (𝑞𝑛 − 1)
                                            𝑆𝑛 =
                                                       𝑞−1

Olhando para a sequência, tiramos que 𝑎1 = 1, 𝑞 = 3 e 𝑛 = 9. Logo,

                                      1 ∙ (39 − 1)                 𝟑𝟗 − 𝟏
                                 𝑆9 =                  →      𝑺𝟗 =
                                          3−1                        𝟐

Gabarito: LETRA A.

(CRMV-ES/2018) Marque a alternativa que apresente a soma da progressão geométrica infinita abaixo.

                                                1 1 1
                                              1, , , , …
                                                4 16 64

A) 1
     5
B) 3
     2
C) 5
     2
D) 3
     4
E) 3

Comentários:


---

Pessoal, questão apenas para testarmos o que vimos. O enunciado quer a soma da progressão geométrica
infinita dada. Sabemos que a soma dos termos de uma P.G. infinita é dada por:

                                                         𝑎1
                                                 𝑆∞ =
                                                        1−𝑞

Para calcular essa soma, basta sabermos o primeiro termo (𝒂𝟏 ) e a razão (𝒒). Olhando para a sequência do
enunciado, temos que 𝑎1 = 1. Além disso, a razão pode ser encontrada dividindo dois termos consecutivos:

                                                       1
                                     𝑎2                                   1
                                  𝑞=         →       𝑞=4      →      𝑞=
                                     𝑎1                1                  4

Veja que |𝑞| < 1 e, portanto, a fórmula é aplicável. Substituindo os valores de 𝑎1 e 𝑞:

                             𝑎1                  1                   1                    𝟒
                     𝑆∞ =         →     𝑆∞ =             →    𝑆∞ =            →   𝑺∞ =
                            1−𝑞                  1                   3                    𝟑
                                               1−4                   4

Gabarito: LETRA E.


---

Sequências de Figuras

Além de entender as sequências numéricas, é fundamental que consigamos desvendar padrões por trás de
sequências de figuras. No entanto, como falamos anteriormente, não existe uma teoria formalizada sobre
o assunto. E o que fazemos, professor?

O segredo aqui é muito treino, pessoal! E é por esse motivo que focaremos nas questões!

A seguir, resolverei uma questão sobre o tema para você ter uma noção do que estou falando. Logo depois,
é sua tarefa tentar resolver a lista de exercícios. Se surgirem dúvidas, você deve conferir os comentários!
Use e abuse deles, pois são fundamentais para o aprendizado.

(TJ-RO/2021) Observe a sequência de figuras a seguir.

Mantendo o padrão apresentado nas figuras acima, o número de bolinhas da figura 15 é:
A) 238;
B) 244;
C) 258;
D) 270;
E) 304

Comentários:
Vamos resolver esse exercício de duas maneiras! A primeiras delas é contar as bolinhas mesmo! No entanto,
podemos simplificar essa conta ao entender como o número de bolinhas está aumentando. Observe a
tabela abaixo.


---

Note que a figura 2 tem 6 bolinhas a mais do que a primeira. Por sua vez, a figura 3 tem 8 bolinhas a mais
do que a segunda. Por fim, a figura 4 tem 10 bolinhas a mais do que a terceira.

Nessa lógica, podemos concluir que a figura "5" terá 12 bolinhas a mais do que a quarta figura, a figura "5"
terá 14 bolinhas a mais do que sua antecessora e assim sucessivamente... Sempre aumentando 2 bolinhas
a mais do que antes. Com essas informações, vamos continuar a tabela acima.

Ao prosseguir com a tabela, chegamos ao resultado de que a figura 15 terá 270 bolinhas.

A segunda forma de fazer, poderia custar um tempo "inicial" maior, pois é de maior dificuldade. No entanto,
uma vez que o aluno percebesse isso, a resposta sairia com uma "única" conta.

Note que é possível determinar a quantidade de bolinhas apenas com o número da figura. A quantidade
de bolinhas dessa sequência é dada pela fórmula:

                                              𝑄𝑛 = 𝑛(𝑛 + 3)

Em que "n" é o número da figura! Faça o teste!

Pessoal, uma pausa aqui! Eu sei que determinar essa fórmula não é algo fácil de fazer na hora da prova!
Tenho total consciência disso! Meu intuito aqui é fazer você perceber que pode existir uma fórmula por trás


---

de um determinado problema. Sendo assim, caso você perceba que está fazendo muita conta para chegar
no resultado, em uma questão de raciocínio sequencial, então é possível que o examinador não queira todas
as contas, mas sim, que você consiga derivar uma expressão genérica para aplicá-la na condição pedida.

No caso dessa questão, queremos o número de bolinhas na figura 15:

                  𝑄15 = 15 ⋅ (15 + 3)     →      𝑄15 = 15 ⋅ 18    →       𝑸𝟏𝟓 = 𝟐𝟕𝟎

Gabarito: LETRA D.


---

Sequências de Letras e Palavras

Essas sequências despencam em provas! As bancas gostam bastante! Por esse motivo, atenção redobrada
aqui! Vou reforçar que não temos uma teoria formalizada disso. Por essa razão, recomendo que veja muitos
exercícios resolvidos, pois será a chave para que você desenrole qualquer questão sobre assunto.

Uma boa notícia que posso dar, é que "padrão" das questões se repetem muito. Com isso, podemos montar
um passo a passo para que você tenha velocidade durante a prova e ganhe preciosos minutos! Quando ver
questões desse tipo, saberá exatamente o que fazer!

(TJ-RO/2021) Um artista criou uma faixa decorativa com o nome do estado escrito diversas vezes em
sequência:

                                  SERGIPESERGIPESERGIPESERG...
A milésima letra dessa faixa é:
A) S;
B) R;
C) G;
D) I;
E) P.

Comentários:
O primeiro passo é identificar a palavra que está se repetindo. Nesse caso, a palavra que se repete é SERGIPE.
Observe que SERGIPE tem 7 letras. O segundo passo é identificar a letra que está sendo pedida. No caso
dessa questão, queremos a 1000ª letra. Para determinar que letra é essa, devemos dividir 1000 por 7.

- 1000 é por causa da ordem da letra que estamos procurando.
- 7 é a quantidade de letras da palavra SERGIPE.

Ao fazer isso, o quociente nos informará quantas vezes a palavra de SERGIPE apareceu completamente. Por
sua vez, o resto dessa divisão indicará em qual letra a sequência "parou".


---

O quociente foi 142, ou seja, a palavra SERGIPE apareceu inteiramente 142 vezes antes da milésima letra.
Por fim, o resto "6" indica que a 1000ª letra é a 6ª letra da palavra SERGIPE, ou seja, a letra "P".

   ⏟
   𝑆𝐸𝑅𝐺𝐼𝑃𝐸 ⏟
           𝑆𝐸𝑅𝐺𝐼𝑃𝐸 ⏟         ⏟
                   𝑆𝐸𝑅𝐺𝐼𝑃𝐸 … 𝑆𝐸𝑅𝐺𝐼𝑃𝐸 ⏟
                                     𝑆𝐸𝑅𝐺𝐼𝑃𝐸 𝑆𝐸𝑅𝐺𝐼 𝑃
                                                   ⏟
       1ª 𝑣𝑒𝑧          2ª 𝑣𝑒𝑧           3ª 𝑣𝑒𝑧          141ª 𝑣𝑒𝑧       142ª 𝑣𝑒𝑧              1000ª


Gabarito: LETRA D.

(IMBEL/2021) Um funcionário da fábrica da IMBEL de Juiz de Fora pensou em pintar uma faixa decorativa no
muro externo da fábrica com o motivo abaixo:

                           I M B E L J F I M B E L J F I M B E L J F ...
Mantendo esse padrão, a 500ª letra dessa faixa será
A) B.
B) E.
C) L.
D) J.
E) F.

Comentários:
Mais uma questão naquele estilo! O procedimento é o mesmo, vamos aplicá-lo aqui!

1º passo - Identificar a palavra que se repete

                                                 𝐼𝑀𝐵𝐸𝐿𝐽𝐹

2º passo - Quantas letras tem essa palavra?

                                           𝐼𝑀𝐵𝐸𝐿𝐽𝐹 tem 7 letras.

3º passo - Qual a letra que o enunciado quer?

                                        A questão pede a 500ª letra.

4º passo - Dividir 500 por 7.


                                               500 7
                                             − 49 71
                                                10
                                              − 7
                                                 3


---

O que essa divisão nos fornece?

Como o quociente é 71, temos que IMBELJF aparece completamente 71 vezes antes de chegarmos na 500ª
letra. Por sua vez, o resto igual a 3 indica que a letra procurada é a 3ª letra da palavra IMBELJF, ou seja, a
letra "B".

Gabarito: LETRA A.


---

                          QUESTÕES COMENTADAS - FGV

Sequências Numéricas

1. (FGV/SEFAZ-AM/2022) Uma sequência de números inteiros é tal que cada termo, a partir do terceiro,
é a soma do seu termo antecessor com o dobro do antecessor do antecessor. Sabe-se que o sexto termo
dessa sequência é 85 e, o oitavo, é 341. O quarto termo da referida sequência é
A) 15.
B) 17.
C) 19.
D) 21.
E) 23.

Comentários:
Questão bem legal! Vamos analisar a informação crucial:

"Cada termo, a partir do terceiro, é a soma do seu antecessor com o dobro do antecessor do antecessor."

Na prática, temos o seguinte:

𝑎1 = 𝑎1
𝑎2 = 𝑎2
𝑎3 = 𝑎2 + 2𝑎1      (1)
𝑎4 = 𝑎3 + 2𝑎2      (2)
𝑎5 = 𝑎4 + 2𝑎3      (3)
𝑎6 = 𝑎5 + 2𝑎4      (4)
𝑎7 = 𝑎6 + 2𝑎5      (5)
𝑎8 = 𝑎7 + 2𝑎6      (6)


Escrevi até a equação (6) pois o enunciado deu o oitavo (𝒂𝟖 = 𝟑𝟒𝟏) e o sexto (𝒂𝟔 = 𝟖𝟓) termo. Com isso,
por meio de (6), podemos encontrar o 𝑎7 .

          𝑎8 = 𝑎7 + 2𝑎6      →       341 = 𝑎7 + 2 ⋅ 85   →       𝑎7 = 341 − 170       →    𝑎7 = 171

Com o valor de 𝑎7 , podemos usar a equação (5) para encontrar 𝑎5 .

             𝑎7 = 𝑎6 + 2𝑎5       →       171 = 85 + 2 ⋅ 𝑎5   →       86 = 2𝑎5     →       𝑎5 = 43

Com o valor de 𝑎5 , podemos usar a equação (4) para encontrar 𝒂𝟒 .


---

            𝑎6 = 𝑎5 + 2𝑎4      →     85 = 43 + 2𝑎4     →     42 = 2𝑎4     →      𝒂𝟒 = 𝟐𝟏

Pronto! Podemos marcar a alternativa D.

Gabarito: LETRA D.

2. (FGV/CM ARACAJU/2021) Sejam:

            𝑿 = 𝟐 + 𝟒 + 𝟔 + . . . + 𝟗𝟔 + 𝟗𝟖        e   𝒀 = 𝟏 + 𝟑 + 𝟓 + . . . + 𝟗𝟓 + 𝟗𝟕.

O valor de 𝑿 − 𝒀 é:
A) 2;
B) 49;
C) 50;
D) 51;
E) 102.

Comentários:
Questão bem interessante! Temos:

                                   𝑋 = 2 + 4 + 6 + … + 96 + 98

                                   𝑌 = 1 + 3 + 5 + . . . + 95 + 97

Antes de qualquer coisa, é bom fazermos algumas observações iniciais:

- X e Y contém apenas números entre 1 e 98.
- X é a soma dos termos pares de 1 até 98.
- Y é a soma dos termos ímpares de 1 até 98.

Agora, devemos nos perguntar: quantos números estão sendo somados em "X" e quantos em "Y"?

Note que de 1 a 98 são 98 números em que temos 49 pares e 49 ímpares, ou seja, temos 49 números em
"X" e 49 em "Y".

Nesse momento, vamos fazer a subtração que está sendo pedida!

                     𝑋 − 𝑌 = (2 + 4 + 6 + ⋯ + 96 + 98) − (1 + 3 + 5 + ⋯ + 95 + 97)

Podemos reorganizar essa subtração da seguinte maneira:

                  𝑋 − 𝑌 = (2 − 1) + (4 − 3) + (6 − 5) + ⋯ + (96 − 95) + (98 − 97)

Ou seja, podemos transformar a subtração do enunciado em 49 "subtrações internas", que são mais simples
para serem resolvidas, pois todas fornecem o mesmo resultado: "1"! Com isso,


---

                       𝑋 − 𝑌 = 1 + 1 + 1 + ⋯+ 1 + 1          →    𝑋 − 𝑌 = 49

Gabarito: LETRA B.

3. (FGV/PREF. SALVADOR/2019) Considere a sequência infinita de algarismos:

                                     𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔. ..

A soma dos 2019 primeiros algarismos dessa sequência é
A) 8020.
B) 8040.
C) 8060.
D) 8080.
E) 8100.

Comentários:
Questão bem parecida com a anterior, só que não temos uma palavra se repetindo, mas sim um número.
Note que o número que está se repetindo é o "24680". Esse número possui 5 algarismos. Como estamos
interessados nos algarismos até o 2019º, vamos dividir 2019 por 5.


                                        2019 5
                                       −20   403
                                         01
                                        −00
                                          19
                                         −15
                                           4
O que essa divisão nos revela? Ela nos diz que o número "24680" apareceu 403 vezes por completo. Além
disso, o resto igual a 4 nos indica que o 2019º algarismo será o 4 º algarismo do número "24680", ou
seja, o 8. Acompanhe o esquema abaixo para melhor visualização do que está acontecendo.


            24680
            ᇣᇤᇥ 24680
                  ᇣᇤᇥ 24680
                      ᇣᇤᇥ . . . 24680
                                ᇣᇤᇥ 24680
                                      ᇣᇤᇥ 246𝟖
                1ª          2ª           3ª              402ª       403ª

Queremos o resultado da soma de todos os algarismos. Para isso, devemos perceber que a soma dos
algarismos de "24680" é 𝟐 + 𝟒 + 𝟔 + 𝟖 + 𝟎 = 𝟐𝟎. Como "24680" se repete 403 vezes, então a soma de
todos os algarismos até lá pode ser calculado como:

                                          403 ∙ 20 = 8.060


---

Como ainda temos 4 algarismos após o último "24680" completo, devemos somá-los também:

                                    8.060 + 2 + 4 + 6 + 8 = 8.080

Gabarito: LETRA D.

4. (FGV/ALERO/2018) Uma sequência de números naturais é tal que dado um termo x qualquer dessa
sequência, se ele é par, então o próximo termo será x/2; se ele é ímpar, então o próximo termo será x+5.
Se o primeiro termo dessa sequência é 6, então o décimo termo será
A) 2.
B) 3.
C) 4.
D) 6.
E) 8.

Comentários:
Opa! Beleza, se o termo é par, o próximo é metade dele. Por sua vez, se o termo for ímpar, o próximo será
ele somado com 5. É como se fosse um jogo, moçada! Temos só que seguir as regras.

Primeiro Termo = 6 (foi dado pelo enunciado).

Com o primeiro termo é par, então o segundo termo será metade dele (x/2).

Segundo Termo = 3.

Opa, aqui temos um termo ímpar! Para o próximo termo, teremos que somar 5.

Terceiro Termo = 3 + 5 = 8.

Mais uma vez, um termo par. O próximo termo será metade dele.

Quarto Termo = 4.

Continuamos com um termo par. O próximo também será metade dele.

Quinto Termo = 2.

Ainda com termo par. O próximo será metade dele.

Sexto Termo = 1.

Agora chegamos a um termo ímpar. Nessas condições, o próximo termo é obtido somando 5.

Sétimo Termo = 1 + 5 = 6.

Termo par. O próximo será metade dele.


---

Oitavo Termo = 3.

Termo Ímpar. Vamos somar 5.

Nono Termo = 3 + 5 = 8.

Por fim, temos um termo par. Logo, o próximo será metade dele.

Décimo Termo = 4.

O enunciado pediu o décimo termo. Podemos marcar a alternativa "C".

Gabarito: LETRA C.

5. (FGV/ALERO/2018) Em uma sequência de números, para quaisquer três termos consecutivos x, y, z vale
a relação z = 3y – x. Se o 18º termo dessa sequência é 2 e o 20º termo é 10, então o 14º termo é
A) 2.
B) 4.
C) 10.
D) 16.
E) 26.

Comentários:
Três termos consecutivos, 𝑥, 𝑦 𝑒 𝑧, obedecem a relação 𝒛 = 𝟑𝒚 − 𝒙. Note que o enunciado deu o 18ª termo
e o 20ª termo.

                                   ณ
                                   2                   𝑦
                                                       ณ             10
                                                                     ด
                                (𝑥) 18º            19º           (𝑧 ) 20º

Observe que esses três termos devem obedecer a relação do enunciado em que 𝑥 = 2 e 𝑧 = 10. Com isso,
podemos encontrar "y".

                             10 = 3𝑦 − 2     →    3𝑦 = 12        →     𝑦=4

Com o 19º termo determinado, podemos ir voltando até encontrarmos o 14º termo.

- Encontrando o 17º termo.

                                      ณ
                                      𝑥            ณ
                                                   2             ณ
                                                                 4
                                   17º            18º            19º
                    4 =3∙2−𝑥      →       −𝑥 = 4 − 6       →   −𝑥 = −2      →   𝒙=𝟐

- Encontrando o 16º termo.


---

                                         ณ
                                         𝑥             ณ
                                                       2           ณ
                                                                   2
                                     16º             17º          18º
                     2 =3∙2−𝑥        →       −𝑥 = 2 − 6    →    −𝑥 = −4    →     𝒙=𝟒

- Encontrando o 15º termo.


                                         ณ
                                         𝑥             ณ
                                                       4           ณ
                                                                   2
                                     15º             16º          17º
                2 = 3∙4−𝑥        →       −𝑥 = 2 − 12       →    −𝑥 = −10    →     𝒙 = 𝟏𝟎

- Encontrando o 14º termo.


                                         ณ
                                         𝑥           10
                                                     ด             ณ
                                                                   4
                                     14º             15º          16º
               4 = 3 ∙ 10 − 𝑥    →       −𝑥 = 4 − 30       →    −𝑥 = −26    →     𝒙 = 𝟐𝟔

Logo, o 14º termo dessa sequência é o 26.

Gabarito: LETRA E.

6. (FGV/COMPESA/2018) Considere uma sequência de números na qual cada número, a partir do terceiro,
é a soma dos dois anteriores. Se o quinto número dessa sequência é 88 e o sétimo é 229, então o segundo
número é
A) 17.
B) 18.
C) 19.
D) 20.
E) 21.

Comentários:
Opa... uma sequência de números na qual cada número, a partir do terceiro, é a soma dos dois anteriores...
Parece muito com a sequência de Fibonacci, né? Caso os dois primeiros termos fossem iguais a um, aí sim.
No entanto, note que, pelas alternativas, o segundo termo não é igual a 1. Tá, mas então como vamos fazer
para determinar o segundo termo (𝑎2 )? Veja só!

O enunciado nos forneceu o quinto (𝑎5 ) e o sétimo (𝑎7 ) termo dessa sequência. Ademais, lembre-se que
um termo é sempre igual à soma dos dois termos anteriores. Dessa forma, podemos escrever que:

                                                 𝑎7 = 𝑎6 + 𝑎5


---

Substituindo 𝑎7 = 229 e 𝑎5 = 88, temos que:

                       229 = 𝑎6 + 88    →     𝑎6 = 229 − 88       →     𝑎6 = 141

Podemos ir voltando na sequência até encontrarmos o 𝑎2 ! Olha só:

            𝑎6 = 𝑎5 + 𝑎4        →   141 = 88 + 𝑎4    →       𝑎4 = 141 − 88   →      𝑎4 = 53

             𝑎5 = 𝑎4 + 𝑎3       →   88 = 53 + 𝑎3     →       𝑎3 = 88 − 53    →     𝑎3 = 35

Por fim, vamos chegar ao 𝑎2 :

             𝑎4 = 𝑎3 + 𝑎2       →    53 = 35 + 𝑎2    →       𝑎2 = 53 − 35    →     𝑎2 = 18

Logo, o segundo termo da sequência do enunciado será o 18.

Gabarito: LETRA B.

7. (FGV/TJ-RO/2015) Em uma sequência numérica, cada termo a partir do terceiro é a soma dos dois
termos anteriores. O 7º e o 9º termos são, respectivamente, 29 e 76. O 2º termo dessa sequência é:
A) 1.
B) 2.
C) 3.
D) 4.
E) 5.

Comentários:
Vocês devem ter percebido que a FGV gosta dessas questões em que devemos ir voltando na sequência.
Note que a descrição do enunciado parece bastante com uma sequência de Fibonacci, mas nada podemos
concluir pois não sabemos quais são os dois primeiros termos.

O enunciado nos forneceu o sétimo (𝑎7 ) e o nono (𝑎9 ) termo dessa sequência. Ademais, lembre-se que um
termo é sempre igual à soma dos dois termos anteriores. Dessa forma, podemos escrever que:

                                              𝑎9 = 𝑎8 + 𝑎7

Substituindo 𝑎7 = 29 e 𝑎9 = 76, temos que:

                         76 = 𝑎8 + 29    →     𝑎8 = 76 − 29      →     𝑎8 = 47

Vamos voltar na sequência até encontrarmos o 𝑎2 ! Olha só:

             𝑎8 = 𝑎7 + 𝑎6       →    47 = 29 + 𝑎6    →       𝑎6 = 47 − 29    →     𝑎6 = 18

              𝑎7 = 𝑎6 + 𝑎5      →   29 = 18 + 𝑎5     →       𝑎5 = 29 − 18    →     𝑎5 = 11


---

               𝑎6 = 𝑎5 + 𝑎4      →       18 = 11 + 𝑎4    →     𝑎4 = 18 − 11        →    𝑎4 = 7

                𝑎5 = 𝑎4 + 𝑎3      →       11 = 7 + 𝑎3    →     𝑎3 = 11 − 7      →      𝑎3 = 4

Por fim, vamos chegar ao 𝑎2 :

                 𝑎4 = 𝑎3 + 𝑎2        →     7 = 4 + 𝑎2     →     𝑎2 = 7 − 4     →       𝑎2 = 3

Logo, o segundo termo da sequência do enunciado será o 3.

Gabarito: LETRA C.

8. (FGV/PREF. NITEROI/2015) A sequência 2, 2, 1, 5, 5, 5, 5, 5, 2, 2, 1, 5, 5, 5, 5, 5, 2, ... mantém o padrão
apresentado indefinidamente. A soma dos 2015 primeiros termos dessa sequência é:
A) 7560.
B) 7555.
C) 7550
D) 7545.
E) 7540.

Comentários:
Perceba que o padrão "2, 2, 1, 5, 5, 5, 5, 5" fica se repetindo. Assim, para descobrir qual a soma dos 2015
primeiros termos, vai nos ajudar saber quantas vezes "2, 2, 1, 5, 5, 5, 5, 5" aparece. Isso é fundamental, pois
já sabemos a soma desses termos que se repetem:

                                     2 + 2 + 1 + 5 + 5 + 5 + 5 + 5 = 30

Ademais, essa parte possui oito números, para descobrir quantas vezes ela vai se repetir até o 2015º termo,
basta dividirmos 2015 por 8.


                                             2015 8
                                            −16    251
                                              41
                                             −40
                                               15
                                               −8
                                                 7
Essa divisão nos indica que "2, 2, 1, 5, 5, 5, 5, 5" aparece 251 vezes por completo. Além disso, o 2015º termo
será o 7º termo do padrão, isto é, o número 5, "2, 2, 1, 5, 5, 5, 5, 5". Para ficar mais fácil visualizar,
acompanhe:


---

          2, 2, 1, 5,ᇤ5, 5, 5,ᇥ
          ᇣ                   5, ᇣ        ᇤ5, 5, 5,ᇥ5 . . . 2,
                                 2, 2, 1, 5,                ᇣ2, 1, 5,ᇤ5, 5, 5,ᇥ5 2, 2, 1, 5, 5, 5,       ณ
                                                                                                         5
                     1ª                   2ª                      251ª                               2015º 𝑡𝑒𝑟𝑚𝑜

Sendo assim, a soma de todos esses números pode ser realizada da seguinte forma:

                                   𝑆 = 30 ∙ 251 + 2 + 2 + 1 + 5 + 5 + 5 + 5

                                       𝑆 = 7530 + 25          →        𝑺 = 𝟕𝟓𝟓𝟓

Gabarito: LETRA B.

9. (FGV/MPE-MS/2013) Na sequência x, y, z, 0, 1, 2, 3, 6, 11,... cada termo, a partir do 4º termo, é a soma
dos três termos imediatamente anteriores a ele. O valor de x é:
A) -3.
B) -2.
C) -1.
D) 0.
E) 1.

Comentários:
Temos a seguinte sequência:

                                           x, y, z, 0, 1, 2, 3, 6, 11, . ..
A partir do 4º, cada termo é formado pela soma dos três anteriores. Sendo assim, podemos escrever que:

                                          𝑧+0+1= 2                →      𝑧=1
                             𝑦+𝑧+0= 1               →        𝑦+1=1            →       𝑦=0
                          𝑥+𝑦+𝑧 =0             →        𝑥+0+1 = 0               →       𝑥 = −1

Gabarito: LETRA C.

10. (FGV/PM-SP/2021) Um sargento organizou um grupo de soldados em 16 filas, com 2 soldados na
primeira fila e 3 soldados a mais em cada fila subsequente: 2, 5, 8, 11, ... Se o sargento organizasse o
mesmo grupo de soldados em filas de 14 soldados cada uma, o número total de filas seria
A) 14.
B) 16.
C) 24.
D) 28.
E) 32.

Comentários:
O primeiro passo é descobrir quantos soldados compõem esse grupo. Note que as quantidades de soldados
em cada fila vão formando uma progressão aritmética.


---

                                              2, 5, 8, 11, …

Ademais, podemos perceber que a razão dessa PA é 3, pois as quantidades vão subindo sempre de três em
três. Como temos 16 filas, para determinarmos o total de soldados desse grupo, devemos calcular a soma
dos 16 primeiros termos da PA. Sendo assim, relembre-se:

                                                   (𝑎1 + 𝑎𝑛 ) ∙ 𝑛
                                            𝑆𝑛 =
                                                        2

Como 𝑛 = 16, precisaremos encontrar 𝑎16 . Para isso, podemos usar a fórmula do termo geral de uma PA.

                                           𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

                                           𝑎16 = 2 + (16 − 1) ∙ 3

                        𝑎16 = 2 + 15 ∙ 3    →      𝑎16 = 2 + 45      →    𝑎16 = 47

Agora, usando essa informação na fórmula da soma:

             (𝑎1 + 𝑎16 ) ∙ 16
     𝑆16 =                      →     𝑆16 = (2 + 47) ∙ 8       →    𝑆16 = 49 ∙ 8     →   𝑆16 = 392
                   2

Pronto! Sabemos que temos 392 soldados. Como queremos reorganizá-los em filas com 14 soldados cada
uma, para determinamos o total de filas, basta dividirmos o número de soldados pela quantidade de soldado
que queremos em cada fila.
                                                 392
                                                      = 28
                                                  14
Portanto, precisaremos de 28 filas.

Gabarito: LETRA D.

11. (FGV/PREF. ANGRA/2019) Laura construiu uma progressão aritmética decrescente começando com o
número 500 e subtraindo 7 unidades sucessivamente:

                                      𝟓𝟎𝟎     𝟒𝟗𝟑     𝟒𝟖𝟔     𝟒𝟕𝟗 . ..

O primeiro número dessa sequência que possui apenas dois algarismos é
A) 98.
B) 97.
C) 96.
D) 95.
E) 94.

Comentários:
Pessoal, sabemos que o termo geral de uma progressão aritmética é dado pela seguinte relação:


---

                                          𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Para a PA construída por Laura, temos que o primeiro termo (𝒂𝟏 ) é 500 e a razão (r) é igual a −𝟕. Uma
maneira de saber qual dos números das alternativas pertence a essa sequência, é substituí-lo na fórmula do
termo geral e observar se vamos obter um valor inteiro para "n".

Como "n" mede a quantidade de termos, seu valor deve ser necessariamente um número inteiro. Assim, se
substituímos (em 𝑎𝑛 ) o valor da alternativa e "n" for um "número quebrado", então com toda certeza esse
número não pertencerá a sequência, tudo bem? Vamos analisar as alternativas.

A) 98.

                                       98 = 500 + (𝑛 − 1) ∙ (−7)

                      −402 = −7𝑛 + 7        →      7𝑛 = 409       →   𝑛 = 58,42 …

Como "n" resultou em um número quebrado, o número 98 não faz parte da PA em análise.

B) 97.

                                       97 = 500 + (𝑛 − 1) ∙ (−7)

                      −403 = −7𝑛 + 7        →      7𝑛 = 410       →   𝑛 = 58,57 …

Como "n" resultou em um número quebrado, o número 97 não faz parte da PA em análise.

C) 96.

                                       96 = 500 + (𝑛 − 1) ∙ (−7)

                      −404 = −7𝑛 + 7        →      7𝑛 = 411       →   𝑛 = 58,71 …

Como "n" resultou em um número quebrado, o número 96 não faz parte da PA em análise.

D) 95.

                                       95 = 500 + (𝑛 − 1) ∙ (−7)

                      −405 = −7𝑛 + 7        →      7𝑛 = 412       →   𝑛 = 58,85 …

Como "n" resultou em um número quebrado, o número 95 não faz parte da PA em análise.

E) 94.

                                       94 = 500 + (𝑛 − 1) ∙ (−7)


---

                          −406 = −7𝑛 + 7          →      7𝑛 = 413       →      𝑛 = 59

Opa!! "n" agora é um inteiro. Sendo assim, "94" faz parte dessa PA e é o 59º termo dela.

Gabarito: LETRA E.

12. (FGV/ALERO/2018) Os números 𝒙 + 𝟏, 𝟐𝒙 − 𝟏 e 𝒙 + 𝟓, nessa ordem, são os três primeiros termos de
uma progressão aritmética. O quarto termo dessa progressão aritmética é
A) 11.
B) 10.
C) 9.
D) 8.
E) 7.

Comentários:
Sabemos que para três termos consecutivos de uma progressão aritmética vale a seguinte relação;

                                                        𝑎1 + 𝑎3
                                                 𝑎2 =
                                                           2

Do enunciado, podemos retirar que:

                                𝑎1 = 𝑥 + 1       𝑎2 = 2𝑥 − 1       𝑎3 = 𝑥 + 5

Substituindo na expressão inicial,

              (𝑥 + 1) + (𝑥 + 5)                         2𝑥 + 6
   2𝑥 − 1 =                          →     2𝑥 − 1 =                →        4𝑥 − 2 = 2𝑥 + 6   →   𝑥=4
                      2                                   2

Agora, com o valor de "x", podemos determinar os três primeiros termos dessa PA.

                              𝑎1 = 𝑥 + 1     →     𝑎1 = 4 + 1      →        𝑎1 = 5

                           𝑎2 = 2𝑥 − 1       →    𝑎2 = 2 ∙ 4 − 1        →     𝑎2 = 7

                              𝑎3 = 𝑥 + 5     →     𝑎3 = 4 + 5       →       𝑎3 = 9

Beleza! Com isso, conseguimos ver que a razão dessa PA é 2. Para determinarmos o quarto termo (𝑎4 ), basta
somarmos 2 ao terceiro termo (𝒂𝟑 ).

                           𝑎4 = 𝑎3 + 2       →        𝑎4 = 9 + 2       →     𝑎4 = 11

Gabarito: LETRA A.

13. (FGV/ALERO/2018) A soma dos termos da progressão aritmética 8, 11, 14 ,..., 2015, 2018 é
A) 680736.
B) 679723.


---

C) 678710.
D) 677697.
E) 676684.

Comentários:
Opa! Vamos lá. A soma dos n primeiros termos de uma PA é dada por:
                                               (𝑎1 + 𝑎𝑛 ) ∙ 𝑛
                                          𝑆𝑛 =
                                                    2

Pela sequência dada no enunciado, temos que:

                                      𝑎1 = 8           𝑎𝑛 = 2018

No entanto, note que ainda não temos "n" para conseguir aplicar a fórmula. Para determiná-lo, usaremos a
fórmula do termo geral.

                                          𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Observe que os termos da sequência aumentam de três em três. Isso nos diz que a razão (r) dessa PA é 3.
Sendo assim,

                                          2018 = 8 + (𝑛 − 1) ∙ 3

                     2010 = 3 ∙ (𝑛 − 1)       →     𝑛 − 1 = 670     →     𝑛 = 671

Pronto, agora temos todas as quantidades que precisamos, basta substituirmos na fórmula.

         (8 + 2018) ∙ 671                 2026 ∙ 671
𝑆671 =                      →    𝑆671 =                →     𝑆671 = 1013 ∙ 671    →     𝑆671 = 679723
                2                             2

Gabarito: LETRA B.

14. (FGV/SEDUC-AM/2014) Marcelo comprou um cofrinho para juntar moedas. No primeiro dia, Marcelo
colocou no cofrinho todas as moedas que possuía na ocasião. A partir do segundo dia, ele colocou
diariamente três moedas no cofrinho. Ao final do décimo dia, o cofrinho de Marcelo tinha ao todo 40
moedas. O número de moedas que Marcelo colocou no cofrinho no primeiro dia foi
A) 10.
B) 11.
C) 12.
D) 13.
E) 14.

Comentários:
Vamos chamar a quantidade de moedas que Marcelo colocou no cofre no primeiro dia de 𝑿 (𝑎1 = 𝑋). Como
todo dia ele coloca 3 moedas, é como se as quantidades dentro do cofre aumentassem conforme uma
progressão aritmética de razão igual a 3 (𝑟 = 3).


---

                                     𝑋, (𝑋 + 3), (𝑋 + 6), (𝑋 + 9), …

Como ao final do décimo dia o cofre terá 40 moedas, a questão está nos informando, com outras palavras,
que o décimo termo é igual a 40. Tudo bem? Sendo assim, vamos usar:

                                           𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Note que precisamos encontrar o 𝑎10 . Da fórmula do termo geral,

                     𝑎10 = 𝑎1 + 9𝑟    →        𝑎10 = 𝑋 + 9 ∙ 3       →     𝑎10 = 𝑋 + 27

Igualando a 40:

                                     𝑋 + 27 = 40         →       𝑋 = 13

Gabarito: LETRA D.

15. (FGV/ALERO/2018) Se x - 1, x + 1, x + 7 são, nessa ordem, os três primeiros termos de uma progressão
geométrica, o quarto termo é
A) 27.
B) 18.
C) 16.
D) 9.
E) 8.

Comentários:
Lembre-se que se temos três termos consecutivos de uma PG, podemos escrever que o quadrado do termo
central é igual ao produto dos termos vizinhos. Com a PG do enunciado, podemos escrever:

                                         (𝑥 + 1)2 = (𝑥 − 1)(𝑥 + 7)

Desenvolvendo o quadrado e usando a propriedade distributiva no produto:

                                     𝑥 2 + 2𝑥 + 1 = 𝑥 2 − 𝑥 + 7𝑥 − 7

                                          4𝑥 = 8     →         𝑥=2

Com o valor de x encontrado, podemos determinar os três primeiros termos dessa PG:

                                                   1, 3, 9

Note que o primeiro termo (𝒂𝟏 ) é 1 e a razão (𝒒) é 3. Para achar o quarto termo dessa sequência, basta
multiplicarmos o terceiro termo pela razão.

                           𝑎4 = 𝑎3 ∙ 𝑞     →      𝑎4 = 9 ∙ 3      →       𝒂𝟒 = 𝟐𝟕

Gabarito: LETRA A.


---

16. (FGV/SSP-AM/2015) Um supersapo faz uma sequência de saltos dobrando sempre, a cada salto, a
distância do salto anterior. No 1º, 2º e 3º saltos, o supersapo saltou, respectivamente, 5 cm, 10 cm e 20
cm. O salto em que o supersapo saltou pela primeira vez mais de 10 metros foi o:
A) 8º salto;
B) 9º salto;
C) 10º salto;
D) 11º salto;
E) 12º salto;

Comentários:
Note que a distâncias saltadas pelo supersapo formam uma progressão geométrica de razão igual a 2.

- 1ª salto (𝑎1 ) é igual a 5 cm.
- 2ª salto (𝑎2 ) é igual a 10 cm.
- 3ª salto (𝑎3 ) é igual a 20 cm.
...
- 8ª salto (𝑎8 ) é igual a x cm.
- 9ª salto (𝑎9 ) é igual a y cm.

Como estamos procurando a primeira vez que ele salta mais do que 10 m (1000 cm), então vamos começar
encontrando quanto ele salta no 8º salto (primeiro salto das alternativas). Para isso, devemos usar a fórmula
do termo geral da PG.

                                                  𝑎𝑛 = 𝑎1 ∙ 𝑞𝑛−1

            a8 = a1 ∙ q7     →      a8 = 5 ∙ 27     →       a8 = 5 ∙ 128     →      a8 = 640 cm

Note que o 8º salto ainda é menor do que 1000 cm (10 m). Vamos ver o 9º salto.

           a9 = a1 ∙ q8     →       a8 = 5 ∙ 28    →       a8 = 5 ∙ 256     →      a8 = 1280 cm

Agora, sim! O nono salto é o primeiro maior que 10 metros! Será um salto de 12,8 m! Podemos marcar a
alternativa B.

Gabarito: LETRA B.

17. (FGV/PREF. OSASCO/2014) Observe a expressão abaixo.

                                                   𝟏 𝟏 𝟏 𝟏
                                         𝑺= 𝟏+      + + +   +. ..
                                                   𝟐 𝟒 𝟖 𝟏𝟔

Considerando-se um número muito grande de termos sendo adicionados, o valor de S tende a:
A) 1
B) 2
C) 4
D) 8


---

E) ∞

Comentários:
Ora, sempre que você ver somas infinitas em sua prova, pense na soma dos termos de uma PG infinita. Ela
pode ser sua saída! Note que a soma S do enunciado é a soma dos termos de uma PG com primeiro termo
igual (𝒂𝟏 ) a 1 e razão (𝒒) igual a 1/2.

Aprendemos que quando |𝑞| < 1, então a soma dos termos de uma PG infinita irá convergir para um
número e essa soma pode ser encontrada por meio da expressão:

                                                           𝑎1
                                                  𝑆∞ =
                                                          1−𝑞

É exatamente a fórmula que precisamos. Vamos substituir os valores de 𝐚𝟏 e 𝐪.

                                                  1
                                         𝑆∞ =              →      𝑆∞ = 2
                                                  1
                                                1−2

Gabarito: LETRA B.

18. (FGV/SEDUC-AM/2014) Considere a sequência de 𝑵 + 𝟏 termos: 𝟏, 𝟑, 𝟑𝟐 , 𝟑𝟑 , . . . , 𝟑𝑵−𝟏, 𝟑𝑵

Seja 𝑺𝑵 a soma dos N primeiros termos dessa sequência.

O valor de 𝟑𝑵 − 𝑺𝑵 é
A) menor do que zero.
B) maior do que zero e menor do que 𝑆𝑁 .
                                    3𝑁
C) maior do que 𝑆𝑁 e menor do que 2
                3𝑁
D) maior do que e menor do que 𝑆𝑁+1 .
                  2
E) igual a 𝑆𝑁 +1.

Comentários:
A sequência do enunciado é uma progressão geométrica de primeiro termo (𝒂𝟏 ) igual a 1 e de razão (𝒒)
igual a 3. Vimos na teoria que a soma dos n primeiros termos da PG é dada por:

                                                       𝑎1 ∙ (𝑞𝑛 − 1)
                                                𝑆𝑛 =
                                                           𝑞−1

Logo, substituindo 𝒂𝟏 e 𝒒, então ficamos com:

                                       1 ∙ (3𝑁 − 1)                       3𝑁 − 1
                                𝑆𝑁 =                       →       𝑆𝑁 =
                                           3−1                              2

Queremos o valor de 𝟑𝑵 − 𝑺𝑵 :


---

                                                 3𝑁 1                      3𝑁 1                    3𝑁 + 1
         𝐸 = 𝟑𝑵 − 𝑺𝑵       →        𝑬 = 3𝑁 − (     − )       →        𝐸=     +           →    𝐸=
                                                  2 2                       2 2                      2

Nesse ponto da questão, é interessante olharmos para as alternativas.

- E não é menor que zero (pois é um número positivo). Com isso, descartamos a A.

- E não é menor que 𝑺𝑵 . Note que o numerador da expressão E é maior. Logo, descartamos a B.
                     𝟑𝑵
- E não é menor que 𝟐 . Note que o numerador da expressão E é maior. Logo, descartamos a C.

Para marcarmos entre a D ou a E, seria interessante calcularmos 𝑆𝑁 + 1

                                        3𝑁 − 1                                  𝟑𝑵 + 𝟏
                            𝑆𝑁 + 1 =           +1        →       𝑺𝑵 + 𝟏 =
                                          2                                       𝟐

Percebemos que 𝑺𝑵 + 𝟏 tem o mesmo valor que E, de forma que podemos já marcar a alternativa correta.

Gabarito: LETRA E.

19. (FGV/DETRAN MA/2013) Observe as progressões (𝒂𝒏 ) e (𝒃𝒏 ), n = 1, 2, 3, ... a seguir:

                               𝒂𝒏       1        5     9         13        17      ...
                               𝒃𝒏       1        2     4         8         16      ...

A diferença entre os vigésimos quintos termos dessas progressões, ou seja, 𝒃𝟐𝟓 – 𝒂𝟐𝟓 .
A) é menor do que 102 .
B) fica entre 102 e 104 .
C) fica entre 104 e 106 .
D) fica entre 106 e 108 .
E) é maior do que 108 .

Comentários:
(𝑎𝑛 ) é uma progressão aritmética de primeiro termo (𝒂𝟏 ) igual a 1 e razão (𝒓) igual a 4.

(𝑏𝑛 ) é uma progressão geométrica de primeiro termo (𝒃𝟏 ) igual a 1 e razão (𝒒) igual a 2.

Para determinarmos 𝑎25 , precisamos usar a fórmula do termo geral da PA.

                                                 𝑎25 = 𝑎1 + 24𝑟

Usando, os valores de 𝑎1 e 𝑟, ficamos com:

                       𝑎25 = 1 + 24 ∙ 4      →       𝑎25 = 1 + 96          →       𝑎25 = 97

Por sua vez, para determinarmos 𝑏25 , precisamos usar a fórmula do termo geral da PG.


---

                                                 𝑏25 = 𝑎1 𝑞24

Usando, os valores de 𝑏1 e 𝑞, ficamos com:

                                    𝑏25 = 1 ∙ 224      →        𝑏25 = 224

Ora, 224 é muita coisa né? Logo, vamos começar a fazer uns "malabarismos". Veja.

                                               𝑏25 = (212 )2

𝟐𝟏𝟐 é mais tranquilo! Lembre-se que 212 = 4096.

                             𝑏25 = 4096 ∙ 4096       →      𝑏25 = 16.777.216

Professor, isso é um absurdo! Nunca iria fazer essa multiplicação no braço!

A verdade é que não precisa, moçada! Podemos tentar aproximar os números, afinal, devemos apenas
indicar o intervalo em que está o valor. Para isso, vamos fazer a seguinte aproximação:

                                                 212 ≅ 4000

Assim,

  𝑏25 ≅ (4000)2      →       𝑏25 ≅ (4 ∙ 1000)2       →     𝑏25 ≅ 16 ∙ 1.000.000    →   𝑏25 ≅ 16 ∙ 106

Note que 𝒂𝟐𝟓 é praticamente nada comparado a 𝒃𝟐𝟓 . Sendo assim,

                                             𝑏25 − 𝑎25 ≅ 𝑏25

Como 𝒃𝟐𝟓 está entre 𝟏𝟎𝟔 e 𝟏𝟎𝟖 , podemos marcar a alternativa D.

Gabarito: LETRA D.


---

                        QUESTÕES COMENTADAS - FGV

Sequências de Figuras

1. (FGV/SEFAZ-BA/2022) Os números naturais foram escritos em uma tabela de 4 linhas como na figura a
seguir.

As linhas são numeradas de baixo para cima e as colunas são numeradas da esquerda para a direita. O
número da linha e o número da coluna onde está o número 2022 são, respectivamente,
A) 2 e 253.
B) 3 e 253.
C) 2 e 506.
D) 3 e 506.
E) 4 e 524.

Comentários:
Preliminarmente, vamos observar algumas coisas nessa tabela:

1ª observação) Os números da tabela são consecutivos e vão aumentando baixo para cima e, na coluna
seguinte, de cima para baixo. Repete-se esse "caminho".

2ª observação) As colunas ímpares sempre terminam com números ímpares. Por exemplo, a primeira
coluna termina com o "1", a terceira coluna termina com o "9", a quinta coluna com o "17".... Observe ainda,
que nas colunas ímpares, os números aumentam de baixo para cima.


---

3ª observação) As colunas pares sempre terminam com números pares. Por exemplo, a segunda coluna
termina com "8", a quarta coluna termina com "16"... Note também que, nas colunas pares, os números
aumentam de cima para baixo.

4ª observação) O primeiro ou o último número da coluna são sempre múltiplos de 4.

Com isso, para encontrarmos a coluna que contém o número de 2022, é interessante determinarmos o
múltiplo de 4 mais próximo de 2022. Nesse objetivo, note que:

                                           505 ⋅ 4 = 2020

Logo, na 505ª coluna, teremos o 2020.

Note que 505ª é uma coluna ímpar. Sendo assim, ela termina com um ímpar e começa com o múltiplo de 4.

                                                            2020 2021
                                                            2019 2022 3ª
                                                            2018         2ª
                                                            2017         1ª
                                                             505ª 506ª

Atenção! O enunciado fala que as linhas são numeradas de baixo para cima! Caso o aluno não se atentasse
a isso, poderia acabar marcando a letra C como resposta. Dito isso, concluímos que o 2022 está na 506ª
coluna e na 3ª linha.

Gabarito: LETRA D.

2. (FGV/CBM-AM/2022) No plano cartesiano, a partir da origem, foi construído o caminho representado
abaixo, mantendo o padrão do desenho.


---

O comprimento da parte do caminho desde o início até o ponto (49, 1) é
A) 166.
B) 168.
C) 170.
D) 172.
E) 174.

Comentários:
Primeiramente, imagine comigo os seguintes blocos:

                                  Bloco 1          Bloco 2              Bloco 3

Note que criamos cada bloco tem exatamente o mesmo caminho. Mais ainda, vamos verificar que o
comprimento do caminho em cada bloco é igual a 14.

                                                      4

                                               3          5        11

                                               2      6       10   12
                                               1          7    9   13

                                                              8           14


A pergunta que devemos fazer agora é: quantos blocos desses existem até o ponto (49,1)?

Ora, observe que cada bloco ocupa 4 unidades na horizontal. Sendo assim, o múltiplo de 4 mais próximo de
49 é o 48 (4 × 12 = 48). Logo, temos 12 blocos completos até o 48. Vamos visualizar essa ideia.

                 Bloco 1     Bloco 2        Bloco 3            Bloco 4                     Bloco 12

                                                                                  ...
                                                                                        44 45 46 47 48 49

Com a figura acima, conseguimos constatar que são 12 blocos inteiros mais um caminho curto de 6 unidades
(que destacamos de roxo) até o ponto (49, 1). Sendo assim, o comprimento total é:


---

                               Comprimento Total = 12 × 14 + 6 = 𝟏𝟕𝟒

Gabarito: LETRA E.

3. (FGV/TJ-RO/2021) Observe a sequência de figuras a seguir.

Mantendo o padrão apresentado nas figuras acima, o número de bolinhas da figura 15 é:
A) 238;
B) 244;
C) 258;
D) 270;
E) 304.

Comentários:
Um jeito mais direto de fazer essa questão é contarmos na mão mesmo e montarmos uma tabela.

                                              Quantidade
                                     Figura               Diferença
                                              de Bolinhas
                                        1          4           -
                                        2         10           6
                                        3         18           8
                                        4         28          10

Note que a figura 2 tem 6 bolinhas a mais do que a primeira. Por sua vez, a figura 3 tem 8 bolinhas a mais
do que a segunda. Por fim, a figura 4 tem 10 bolinhas a mais do que a terceira.

Nessa lógica, podemos concluir que a figura "5" terá 12 bolinhas a mais do que a quarta figura, a figura "5"
terá 14 bolinhas a mais do que sua antecessora e assim sucessivamente... Sempre aumentando 2 bolinhas
a mais do que antes. Com essas informações, vamos continuar a tabela acima.

                                              Quantidade
                                     Figura               Diferença
                                              de Bolinhas
                                        1          4           -
                                        2         10           6
                                        3         18           8
                                        4         28          10
                                        5         40          12
                                        6         54          14
                                        7         70          16


---

                                        8         88           18
                                        9        108           20
                                       10        130           22
                                       11        154           24
                                       12        180           26
                                       13        208           28
                                       14        238           30
                                       15        270           32

Gabarito: LETRA D.

4. (FGV/PREF. SALVADOR/2017) A figura a seguir mostra grupos de bolinhas cujos números crescem
mantendo determinado padrão.

Assinale a opção que indica o número de bolinhas da figura 16.
A) 241.
B) 255.
C) 273.
D) 289.
E) 297.

Comentários:
Questão bem similar a vista anteriormente! No entanto, dessa vez, resolveremos diferente!

Vamos criar uma tabela com a quantidade de bolinhas em cada figura e procurar por um padrão.

                                                 Qtd de
                                     Figura                  Padrão
                                                Bolinhas
                                    Figura 1        3       1∙2+1
                                    Figura 2        7       2∙3+1
                                    Figura 3       13       3∙4+1
                                    Figura 4       21       4∙5+1

Podemos perceber que, para obter a quantidade de bolinhas, sempre multiplicamos o número da figura
pelo número seguinte a ele. Por exemplo, a quantidade de bolinhas da figura 2 será o número 2 multiplicado
pelo 3 (próximo número). Após essa multiplicação, somamos mais um no resultado. Dessa forma,

                 Fig16 = 16 ∙ 17 + 1        →   Fig16 = 272 + 1       →   𝐅𝐢𝐠𝟏𝟔 = 𝟐𝟕𝟑

Gabarito: LETRA C.


---

5. (FGV/SME CUIABÁ/2015) A figura abaixo mostra uma reta numerada e uma sequência de bolinhas
mantendo sempre o mesmo padrão:

A quantidade de bolinhas desde o número 1 até o número 50, inclusive, é
A) 96.
B) 97.
C) 98.
D) 99.
E) 100.

Comentários:
Note que temos 6 bolinhas para cada 3 números.

Para determinar quantos grupos de 3 desses vamos ter até o número 50, devemos dividir 50 por 3.


                                             50 3
                                            −3 𝟏𝟔
                                             20
                                            −18
                                              𝟐
A divisão acima indica que teremos 16 quadrados vermelhos desses, cada um com 6 bolinhas. Além disso,
o resto igual a 2 indica que teremos mais dois números de fora, totalizando 3 bolinhas. Sendo assim,

                               𝑇𝑜𝑡𝑎𝑙 = 16 ∙ 6 + 3    →      𝑇𝑜𝑡𝑎𝑙 = 99

Gabarito: LETRA D.

6. (FGV/TJ-RJ/2014) Brincando com palitos, Bernardo criou uma sequência de quadrados e triângulos
como na figura a seguir:


---

Bernardo terminou a brincadeira após construir o 50º quadrado. O número total de palitos que Bernardo
utilizou foi:
A) 330.
B) 340.
C) 343.
D) 347.
E) 350.

Comentários:
Note que o quadrado vem antes do triângulo. Sendo assim, quando Bernardo terminar o 50º quadrado, ele
terá feito 49 triângulos. Como cada quadrado usa 4 palitos e cada triângulo usa 3, podemos escrever que:

                                   𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝑃𝑎𝑙𝑖𝑡𝑜𝑠 = 4 ∙ 50 + 3 ∙ 49
                                     𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝑃𝑎𝑙𝑖𝑡𝑜𝑠 = 200 + 147
                                        𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝑃𝑎𝑙𝑖𝑡𝑜𝑠 = 347

Gabarito: LETRA D.

7. (FGV/BADESC/2010) Observe a sequência de figuras formadas por pontos.

De acordo com a lógica sequencial estabelecida, assinale a alternativa que apresente corretamente a figura
8.

A)
                                                        D)

B)
                                                        E)


C)

Comentários:
Galera, o primeiro passo a perceber é que a cada nova figura, apenas uma bolinha está sendo acrescentada.
Com isso, certamente a figura 8 terá 8 bolinhas e poderíamos eliminar a alternativa A. Note também que
em nenhum momento passamos de duas linhas de bolas. Portanto, a alternativa C é bem improvável. Por
fim, observe que o padrão é sempre completar as duas linhas, de cima para baixo. Diante disso, a única
alternativa possível será a B.

Gabarito: LETRA B.


---

8. (FGV/MPE-RJ/2019) Em uma rua retilínea há 20 postes espaçados igualmente entre si. A distância entre
dois postes quaisquer consecutivos é de 15 metros. A distância entre o terceiro poste e o décimo sétimo
poste é:
A) 225 metros
B) 210 metros
C) 195 metros
D) 180 metros
E) 165 metros

Comentários:
Vamos considerar a seguinte situação:
             1º             2º             3º          4º        5º    6º        7º


                                                                                        ...


                    15 m

                            30 m

                                   45 m

                                                60 m


Perceba que a distância do primeiro poste para os demais vai aumentando conforme uma progressão
aritmética de razão igual a 15. Para determinar a distância entre o terceiro e o décimo sétimo poste,
podemos pensar assim:


               1º            2º             3º          4º              16º       17º


                                                                 ...


                     15 m

                             30 m                                𝐷

                                    45 m

                                                             𝑋

Observe que a distância D é encontrada pela subtração 𝑿 − 𝟑𝟎. Ademais, 𝑋 é o décimo sexto termo da PA
formada pelas distâncias, acompanhe o porquê:

- A distância entre o segundo e o primeiro poste é 𝑎1 = 15;
- A distância entre o terceiro e o primeiro poste é 𝑎𝟐 = 30;
- A distância entre o quarto e o primeiro poste é 𝑎𝟑 = 45;


---

...
- A distância entre o décimo sétimo e o primeiro poste é 𝑎𝟏𝟔 = 𝑋.

Assim,

                                             𝑋 = 𝑎16 = 𝑎1 + 15𝑟
                      𝑋 = 15 + 15 ∙ 15       →     𝑋 = 15 + 225         →     𝑿 = 𝟐𝟒𝟎

Com isso, conseguimos encontrar a distância D.

                         𝐷 = 𝑋 − 30      →       𝐷 = 240 − 30       →       𝑫 = 𝟐𝟏𝟎

Gabarito: LETRA B.


---

                        QUESTÕES COMENTADAS - FGV

Sequências de Letras e Palavras

1. (FGV/SSP-AM/2022) Considere a sequência das letras do alfabeto formada por 1 letra A, 2 letras B, 3
letras C, e assim por diante até o final com 26 letras Z.

                                         A B B C C C D D D D E E E E E ...

A 100ª letra dessa sequência é
A) M.
B) N.
C) O.
D) P.
E) Q.

Comentários:
Um jeito mais direto de resolver esse exercício é contando na mão mesmo!

Note que o "A" aparece 1 vez. O "B" aparece 2 vezes. O "C" aparece 3 vezes...

                                            Quantas letras     Quantas letras ao
                                 Letra
                                             aparecem?        total ? (acumulado)

                                  A               1                   1
                                  B               2                   3
                                  C               3                   6
                                  D               4                   10
                                  E               5                   15
                                  F               6                   21
                                  G               7                   28
                                  H               8                   36
                                   I              9                   45
                                   J             10                   55
                                  K              11                   66
                                  L              12                   78
                                  M              13                   91
                                  N              14                  105


---

Note que é na letra "N" que a soma ultrapassa 105. Portanto, é a letra que estamos procurando.

Vamos fazer um último esquema visualizarmos o que foi feito!


 𝐴 𝐵 𝐵 𝐶 𝐶 𝐶 𝐷 𝐷 𝐷 𝐷… 𝐿 𝐿 𝑀 𝑀 𝑀…𝑀 𝑀 𝑁 𝑁 𝑁…𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑂 𝑂
 ᇣᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇤᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇥ
                        91 letras aqui

                                                                        100ª letra       105ª letra
Gabarito: LETRA B.

2. (FGV/TJ-RO/2021) Na sala de arquivos de um escritório há 7 armários, cada um com 7 gavetas, sendo
que cada gaveta comporta 15 pastas.

- Os armários são identificados por A, B, C, ..., G.
- As gavetas são numeradas com 1, 2, 3, ..., 7.
- As pastas são numeradas com 01, 02, 03, ..., 15.

A localização de uma pasta é dada por um código que indica o armário, a gaveta e a posição onde ela está.
Por exemplo, uma pasta com o código B403 significa que ela é a 3ª pasta da gaveta 4 do armário B. Todas
as pastas foram arquivadas em ordem, nenhum lugar ficou vazio e a última pasta colocada no arquivo foi
a de código D512.O número total de pastas desse arquivo é:
A) 338;
B) 342;
C) 366;
D) 387;
E) 398.

Comentários:
Primeiramente, vamos calcular quantas pastas cabem em cada armário.

Se um armário tem 7 gavetas e em cada gaveta cabem 15 pastas, então um armário lotado tem:

                                             7 ⋅ 15 = 105 pastas

Agora, note que a última pasta foi a D512, então ela é a 12ª pasta da 5ª gaveta do armário D.

Se o armário D está sendo utilizado, então os armários "A", "B" e "C" já estão todos lotados. Como em cada
armário cabem 105 pastas, teremos 315 pastas somente nesses 3 armários.

Por sua vez, quando analisamos apenas o armário "D", vemos que a última pasta foi colocada na 5ª gaveta.
Com isso, podemos concluir que já temos 4 gavetas desse armário completamente cheias. Se em cada
gaveta cabem 15, então temos 4 ⋅ 15 = 𝟔𝟎 pastas nessas 4 gavetas completas.

Ademais, quando analisamos a 5ª gaveta, vemos que nela temos 12 pastas.


---

Por fim, para encontrarmos a quantidade de pasta desse arquivo, vamos somar essas quantidades:

                     Total de Pastas = 315 + 60 + 12       →     Total de Pastas = 387

Gabarito: LETRA D.

3. (FGV/CM ARACAJU/2021) Um artista criou uma faixa decorativa com o nome do estado escrito diversas
vezes em sequência:

                                      SERGIPESERGIPESERGIPESERG...

A milésima letra dessa faixa é:
A) S;
B) R;
C) G;
D) I;
E) P.

Comentários:
Esse tipo de questão é muito comum, moçada! Por isso, atenção redobrada aqui!

O primeiro passo é identificar a palavra que está se repetindo. No caso dessa questão, a palavra que se repete
é SERGIPE. Observe que SERGIPE tem 7 letras.

O segundo passo é identificar a letra que está sendo pedida. No caso dessa questão, queremos a 1000ª letra.

Para determinar que letra é essa, devemos dividir 1000 por 7.

- 1000 é por causa da ordem da letra que estamos procurando.
- 7 é a quantidade de letras da palavra SERGIPE.

Ao fazer isso, o quociente nos informará quantas vezes a palavra de SERGIPE apareceu completamente. Por
sua vez, o resto dessa divisão indicará em qual letra a sequência "parou".


                                              1000 7
                                             − 7 142
                                               30
                                             −28
                                                20
                                               −14
                                                  6


---

O quociente foi 142, ou seja, a palavra SERGIPE apareceu inteiramente 142 vezes antes da milésima letra.
Por fim, o resto "6" indica que a 1000ª letra é a 6ª letra da palavra SERGIPE, ou seja, a letra "P".

   𝑆𝐸𝑅𝐺𝐼𝑃𝐸
   ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
           ᇣᇧᇧᇤᇧᇧᇥ ᇣᇧ
                   𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                     ᇧᇤᇧᇧᇥ … 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                             ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                                     ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼 𝑃
                                                   ⏟
       1ª 𝑣𝑒𝑧          2ª 𝑣𝑒𝑧           3ª 𝑣𝑒𝑧              141ª 𝑣𝑒𝑧          142ª 𝑣𝑒𝑧       1000ª

Gabarito: LETRA E.

4. (FGV/IMBEL/2021) Um funcionário da fábrica da IMBEL de Juiz de Fora pensou em pintar uma faixa
decorativa no muro externo da fábrica com o motivo abaixo:

                                   I M B E L J F I M B E L J F I M B E L J F ...

Mantendo esse padrão, a 500ª letra dessa faixa será
A) B.
B) E.
C) L.
D) J.
E) F.

Comentários:
Mais uma questão naquele estilo! O procedimento é o mesmo, vamos aplicá-lo aqui!

1º passo - Identificar a palavra que se repete

                                                   𝐼𝑀𝐵𝐸𝐿𝐽𝐹

2º passo - Quantas letras tem essa palavra?

                                            𝐼𝑀𝐵𝐸𝐿𝐽𝐹 tem 7 letras.

3º passo - Qual a letra que o enunciado quer?

                                        A questão pede a 500ª letra.

4º passo - Dividir 500 por 7.


                                               500 7
                                             − 49 71
                                                10
                                              − 7
                                                 3


---

O que essa divisão nos fornece?

Como o quociente é 71, temos que IMBELJF aparece completamente 71 vezes antes de chegarmos na 500ª
letra. Por sua vez, o resto igual a 3 indica que a letra procurada é a 3ª letra da palavra IMBELJF, ou seja, a
letra "B".

Gabarito: LETRA A.

5. (FGV/PREF. PAULÍNIA/2021) Uma faixa decorativa foi desenhada usando a palavra PAULINIA e sua
grafia ao contrário, AINILUAP seguidas, sem repetir a letra comum das extremidades:

                                  PAULINIAINILUAPAULINIAINILUAPAUL...

A milésima letra dessa faixa é
A) A.
B) U.
C) L.
D) N.
E) I.

Comentários:
Vamos aplicar aquele procedimento!

1º passo - Identificar a palavra que se repete

                                              𝑃𝐴𝑈𝐿𝐼𝑁𝐼𝐴𝐼𝑁𝐼𝐿𝑈𝐴

Cuidado aqui, pessoal! Não é a palavra PAULINIA que se repete! É a palavra PAULINIAINILUA! Cuidado
também para não usar PAULINIAINILUAP! Precisamos deixar o último "P" para a próxima PAULINIAINILUA
que aparece na sequência.

2º passo - Quantas letras tem essa palavra?

                                      𝑃𝐴𝑈𝐿𝐼𝑁𝐼𝐴𝐼𝑁𝐼𝐿𝑈𝐴 tem 14 letras.

3º passo - Qual a letra que o enunciado quer?

                                        A questão pede a 1000ª letra.

4º passo - Dividir 1000 por 14.


---

                                            1000 14
                                           − 98 71
                                              20
                                            − 14
                                               6
O que essa divisão nos fornece?

Como o quociente é 71, temos que PAULINIAINILUA aparece completamente 71 vezes antes de chegarmos
na 1000ª letra. Por sua vez, o resto igual a 6 indica que a letra procurada é a 6ª letra da palavra
PAULINIAINILUA, ou seja, a letra "N".

Gabarito: LETRA D.

6. (FGV/PREF. SALVADOR/2019) Considere a sequência infinita de letras ONDINAONDINAONDINAOND...
A 2019ª letra dessa sequência é
A) O.
B) N.
C) D.
D) I.
E) N.

Comentários:
Galera, nesse tipo de questão temos um procedimento para seguir. O primeiro passo é identificar quantas
letras tem a palavra que se repete. Observe que o que está sendo repetido é a palavra ONDINA, que tem 6
letras. Como queremos saber qual será a 2019ª letra, pegamos 2019 e dividimos por 6.


                                           2019 6
                                          −18   336
                                            21
                                           −18
                                             39
                                            −36
                                              3
O que essa divisão nos revela? Ela nos diz que até o 2019ª letra, a palavra ONDINA vai aparecer por inteiro
336 vezes. O resto da divisão vai indicar exatamente a letra que vai parar antes de termos ONDINA pela 227ª
vez. Como o resto é 3, temos que a 2019ª letra será a 3ª letra da palavra ONDINA, ou seja, o "D".

Gabarito: LETRA C.


---

7. (FGV/MPE-RJ/2019) Observe a sequência infinita a seguir.

                          𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃. ..

A 2019ª letra dessa sequência é:
A) B.
B) C.
C) D.
D) F.
E) G.

Comentários:
Você deve ter começado a notar que a FGV parece gostar bastante desse tipo de questão. Coloquei algumas
aqui na nossa lista para treinarmos bem. Vamos ver mais essa. O primeiro passo é identificar quantas letras
tem a palavra (ou sequência de letras, como é o caso) que se repete.

Note que "𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂" é o que está se repetindo. Essa sequência de letras tem 10 letras. Como estamos
interessado em saber qual será a 2019ª letra, vamos pegar 2019 e dividir por 10.


                                           2019 10
                                          −20   201
                                            01
                                           −00
                                             19
                                            −10
                                              9
O que essa divisão nos diz? Ela nos diz que a sequência de letras "𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂" apareceu 201 vezes por
completo. O resto igual a 9 nos diz que a 2019ª letra será a 9ª letra do padrão de repetição "BCDFGHGF𝐃C".
Logo, teremos a 2019ª letra será a letra "D". Para uma melhor visualização, acompanhe o esquema abaixo.

   ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ 𝐵𝐶𝐷𝐹𝐺𝐻𝐺𝐹𝐷𝐶
   𝐵𝐶𝐷𝐹𝐺𝐻𝐺𝐹𝐷𝐶  ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ . . . ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ 𝐵𝐶𝐷𝐹𝐺𝐻𝐺𝐹𝐷𝐶
                                 𝐵𝐶𝐷𝐹𝐺𝐻𝐺𝐹𝐷𝐶  ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ 𝐵𝐶𝐷𝐹𝐺𝐻𝐺𝐹 𝐷
                                                                  ⏟
            1ª                   2ª                200ª                201ª                        2019ª

Gabarito: LETRA C.

8. (FGV/PREF. ANGRA/2019) A sequência a seguir é formada pelas letras de “Angra dos Reis”, nessa ordem,
com as letras todas juntas.
                            𝐀𝐍𝐆𝐑𝐀𝐃𝐎𝐒𝐑𝐄𝐈𝐒𝐀𝐍𝐆𝐑𝐀𝐃𝐎𝐒𝐑𝐄𝐈𝐒𝐀𝐍𝐆𝐑𝐀𝐃𝐎. ..
A 100ª letra dessa sequência é
A) R.
B) G.


---

C) A.
D) D.
E) S.

Comentários:
Mais uma dessas! Aqui quem se repete é a sequência "ANGRADOSREIS". Note que ela tem 12 letras. Como
estamos interessados na 100ª letra dessa sequência, vamos pegar 100 e dividir por 12.


                                            100           12
                                            −96           8
                                              4
Essa divisão nos diz que, até chegarmos na 100ª letra, "ANGRADOSREIS" aparece 8 vezes por completo. O
resto igual a 4 diz que a 100ª letra é a 4ª letra do padrão da sequência, ou seja, a letra R.

                           𝐴𝑁𝐺𝑅𝐴𝐷𝑂𝑆𝑅𝐸𝐼𝑆 . . . ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ
              ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ ᇣᇧᇧᇧᇧᇤᇧᇧᇧᇧᇥ
              𝐴𝑁𝐺𝑅𝐴𝐷𝑂𝑆𝑅𝐸𝐼𝑆                    𝐴𝑁𝐺𝑅𝐴𝐷𝑂𝑆𝑅𝐸𝐼𝑆 𝐴𝑁𝐺 𝑅
                                                               ⏟
                       1ª                    2ª                       8ª                 100ª


Gabarito: LETRA A.

9. (FGV/BANESTES/2018) Um artista estava pintando uma faixa decorativa repetindo continuamente o
nome do banco:

                               𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍. ..

Ele pintou 150 letras dessa sequência e parou para almoçar. A última letra pintada pelo artista foi:
A) A.
B) N.
C) E.
D) S.
E) T.

Comentários:
É a última desse estilo, moçada! Para fechar nosso treino. Nessa questão, a palavra que está se repetindo é
"BANESTES". Note que ela tem 8 letras. Como estamos interessados na 150ª letra, vamos pegar 150 e dividir
por 8.


---

                                                150 8
                                                −8 18
                                                / 70
                                                −64
                                                   6
Essa divisão nos diz que, até a 150ª letra, a palavra "BANESTES" aparece 18 vezes por completo. Além disso,
o resto igual a 6 indica que a 150ª letra é a 6ª letra da palavra "BANESTES". Sendo assim, a última letra
pintada foi a letra "T". Para melhor visualização, veja o esquema abaixo.
                      ᇣᇧᇧᇧᇤᇧᇧᇧᇥ 𝐵𝐴𝑁𝐸𝑆𝑇𝐸𝑆
                      𝐵𝐴𝑁𝐸𝑆𝑇𝐸𝑆  ᇣᇧᇧᇧᇤᇧᇧᇧᇥ . . . 𝐵𝐴𝑁𝐸𝑆𝑇𝐸𝑆
                                                ᇣᇧᇧᇧᇤᇧᇧᇧᇥ 𝐵𝐴𝑁𝐸𝑆 𝑇
                                                                ⏟
                            1ª             2ª               18ª                150ª

Gabarito: LETRA E.

10. (FGV/MPE-RJ/2016) Observe a seguinte sequência formada por quatro letras do alfabeto:

                                                 𝐌𝐏𝐑𝐉

Afirma-se que uma nova sequência tem a mesma estrutura da sequência dada quando as distâncias
relativas entre as letras é a mesma da sequência original.

Considere as sequências:
1) D G I A
2) Q T V O
3) H K N F

Dessas sequências, possuem a mesma estrutura da sequência original:
A) somente (1);
B) somente (2);
C) somente (3);
D) somente (1) e (2);
E) somente (2) e (3).

Comentários:
A informação mais importante que temos que ter na mente é´:

"Afirma-se que uma nova sequência tem a mesma estrutura da sequência dada quando as distâncias
relativas entre as letras é a mesma da sequência original."

Vamos observar as distâncias entre as letras de MPRJ.

           M N O P Q R S T U V W X Y Z A B C D E F G H I J


---

São duas letras entre M e P, uma letra entre P e R e dezessete letras entre R e J. Agora, vamos ver as
sequências fornecidas e procurar por algo com a mesma estrutura.

1) D G I A

             D E F G H I J K L M N O P Q R S T U V W X Y Z A

Opa, mesma coisa aqui! Então essa é uma sequência com a mesma estrutura de MPRJ.

2) Q T V O

             Q R S T U V W X Y Z A B C D E F G H I J K L M J

Opa, aqui a última letra não ficou correta! Para manter a estrutura da sequência original, deveríamos ter um
"J" ao invés do "O".

3) H K N F

             H I J K L M N O P Q R S T U V W X Y Z A B C D E

Opa, aqui duas letras não estão ok! Com isso, apenas a sequência (1) possui a mesma estrutura.

Gabarito: LETRA A.

11. (FGV/TCE-BA/2014) Em um enfeite de Natal, pequenas lâmpadas vermelhas e brancas são colocadas
em um fio. Representando vermelhas com V e brancas com B, as lâmpadas são colocadas de acordo com
o padrão a seguir:

                                       𝐕𝐕𝐕𝐁𝐁𝐁𝐁𝐕𝐕𝐕𝐁𝐁𝐁𝐁𝐕𝐕𝐕. ..

Sempre três lâmpadas vermelhas, seguidas de quatro lâmpadas brancas. A primeira lâmpada é vermelha
e a distância entre duas lâmpadas consecutivas é sempre de 3 cm. A distância, em centímetros, entre a
segunda lâmpada vermelha e a quadragésima lâmpada vermelha
A) 261.
B) 264.
C) 267.
D) 270.
E) 273.
Comentários:
Galera, perceba que o padrão é sempre "𝐕𝐕𝐕𝐁𝐁𝐁𝐁". Sendo assim, cada vez que ele se repete, temos 3
lâmpadas vermelhas. Nessa lógica, quando tivermos 13 repetições, serão 39 (𝟏𝟑 ∙ 𝟑) lâmpadas vermelhas.
Com isso, concluímos que a 40º lâmpada vermelha aparecerá na 14ª repetição desse padrão (e será logo
indicado pelo primeiro V.


---

                            2ª 𝑉                                   40ª 𝑉
                          ᇣᇧ
                          V ⏞
                            Vᇧᇤᇧ
                              VBBBB VVVBBBB . . . VVVBBBB
                                ᇧᇥ ᇣᇧᇤᇧᇥ          ᇣᇧᇤᇧᇥ ᇣᇧ⏞
                                                          V ᇧᇤᇧ ᇧᇥ
                                                             VVBBBB
                                   1ª       2ª               13ª           14ª

Como temos 7 letras em "𝐕𝐕𝐕𝐁𝐁𝐁𝐁", ao contar a quantidade de letras da 2ª repetição até a 13ª, obteremos
um total de 12 ∙ 7 = 84 letras. Ademais, contando com as 5 letras da primeira repetição, ficamos com:

                            2ª 𝑉 5 𝑙𝑒𝑡𝑟𝑎𝑠        84 𝑙𝑒𝑡𝑟𝑎𝑠         40ª 𝑉
                          ᇣᇧ
                          V ⏞ ⏞ ᇧᇥ ⏞
                            Vᇧᇤᇧ
                              VBBBB ᇣᇧᇤᇧᇥ
                                    VVVBBBB . . . VVVBBBB
                                                  ᇣᇧᇤᇧᇥ ᇣᇧ⏞
                                                          V ᇧᇤᇧ ᇧᇥ
                                                             VVBBBB
                                   1ª       2ª               13ª           14ª


    𝑇𝑜𝑡𝑎𝑙 𝑑𝑒 𝐿â𝑚𝑝𝑎𝑑𝑎𝑠 𝑒𝑛𝑡𝑟𝑒 𝑎 2ª 𝑣𝑒𝑟𝑚𝑒𝑙ℎ𝑎 𝑒 𝑎 40ª (𝑖𝑛𝑐𝑙𝑢𝑖𝑛𝑑𝑜 𝑜𝑠 𝑒𝑥𝑡𝑟𝑒𝑚𝑜𝑠) = 84 + 5 + 2 = 91

Cuidado aqui! São 91 letras mas não quer dizer que serão 91 espaços a serem contabilizados! Existe um
espaço entre duas letras. Dessa forma, teremos 90 espaços, cada um com 3 cm.

                            𝐷𝑖𝑠𝑡â𝑛𝑐𝑖𝑎 = 90 ∙ 3       →        𝐷𝑖𝑠𝑡â𝑛𝑐𝑖𝑎 = 270

Gabarito: LETRA D.

12. (FGV/TJ-AM/2013) Observe a seguinte sequência de letras do alfabeto: C D E G. Entre as alternativas
a seguir, o grupo que mostra uma sequência com a mesma estrutura é
A) B D E F.
B) M N P Q.
C) J K L M.
D) R S T V.
E) M N O R.

Comentários:
Vamos dispor essa sequência de letras da seguinte forma:

                                            C D E F G

Observe que o padrão é termos 3 letras consecutivas e a quarta pulando uma. Vamos procurar por isso nas
alternativas.

A) B D E F.

                                            B C D E F

Errado. Diferente né, moçada? É o inverso da sequência do enunciado.

B) M N P Q.

                                            M N O P Q


---

Errado. Aqui o salto foi no meio da sequência;

C) J K L M.

                                                 J   K L M

Errado. Aqui as quatro letras são consecutivas, não houve salto.

D) R S T V.
                                               R S T U V

Certo. Opa! É essa aqui mesmo! Temos três letras consecutivas e a última é obtida pulando uma.

E) M N O R.

                                            M N O P Q R

Errado. Essa foi quase! Mas a última letra pulou duas.

Gabarito: LETRA D.

13. (FGV/SENADO FEDERAL/2012) Considere a sequência de letras a seguir: "abczydefxwghiv...".
Mantendo-se a lei de formação, as duas próximas letras na sequência serão
A) jk.
B) uj.
C) tk.
D) uk.
E) tj.
Comentários:
Vamos analisar a sequência de letras do enunciado.

                                      abczydefxwghiv …
Primeiramente, vamos olhar para o alfabeto em ordem normal e outro em ordem reversa:

                              "a b c d e f g h i j k l m n o p q r s t u v w x y z"
                              "z y x w v u t s r p q o n m l k j i h g f e d c b a"

A sequência do enunciado é formada colocando três letras do alfabeto "normal" e mais duas letras do
alfabeto "reverso". Acompanhe o esquema:


---

                             " 𝑎ถ
                                𝑏𝑐 ᇣ
                                   𝑑ᇤ𝑒ᇥ
                                      𝑓 𝑔ถ
                                         ℎ𝑖 ถ
                                            𝑗𝑘𝑙 𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥


                         𝑎𝑏𝑐𝑧𝑦𝑑𝑒𝑓𝑥𝑤𝑔ℎ𝑖𝑣𝑢𝑗𝑘𝑙 …

                           " 𝑧ฏ𝑦 𝑥ฐ𝑤 𝑣ฏ𝑢 𝑡ฏ𝑠 𝑟 𝑝 𝑞 𝑜 𝑛 𝑚 𝑙 𝑘 𝑗 𝑖 ℎ 𝑔 𝑓 𝑒 𝑑 𝑐 𝑏 𝑎

Sendo assim, as próximas duas letras serão "uj".

Gabarito: LETRA B.


---

                            LISTA DE QUESTÕES - FGV

Sequências Numéricas

1. (FGV/SEFAZ-AM/2022) Uma sequência de números inteiros é tal que cada termo, a partir do terceiro,
é a soma do seu termo antecessor com o dobro do antecessor do antecessor. Sabe-se que o sexto termo
dessa sequência é 85 e, o oitavo, é 341. O quarto termo da referida sequência é
A) 15.
B) 17.
C) 19.
D) 21.
E) 23.

2. (FGV/CM ARACAJU/2021) Sejam:

            𝑿 = 𝟐 + 𝟒 + 𝟔 + . . . + 𝟗𝟔 + 𝟗𝟖        e    𝒀 = 𝟏 + 𝟑 + 𝟓 + . . . + 𝟗𝟓 + 𝟗𝟕.

O valor de 𝑿 − 𝒀 é:
A) 2;
B) 49;
C) 50;
D) 51;
E) 102.

3. (FGV/PREF. SALVADOR/2019) Considere a sequência infinita de algarismos:

                                      𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔. ..

A soma dos 2019 primeiros algarismos dessa sequência é
A) 8020.
B) 8040.
C) 8060.
D) 8080.
E) 8100.

4. (FGV/ALERO/2018) Uma sequência de números naturais é tal que dado um termo x qualquer dessa
sequência, se ele é par, então o próximo termo será x/2; se ele é ímpar, então o próximo termo será x+5.
Se o primeiro termo dessa sequência é 6, então o décimo termo será
A) 2.
B) 3.
C) 4.
D) 6.
E) 8.


---

5. (FGV/ALERO/2018) Em uma sequência de números, para quaisquer três termos consecutivos x, y, z vale
a relação z = 3y – x. Se o 18º termo dessa sequência é 2 e o 20º termo é 10, então o 14º termo é
A) 2.
B) 4.
C) 10.
D) 16.
E) 26.

6. (FGV/COMPESA/2018) Considere uma sequência de números na qual cada número, a partir do terceiro,
é a soma dos dois anteriores. Se o quinto número dessa sequência é 88 e o sétimo é 229, então o segundo
número é
A) 17.
B) 18.
C) 19.
D) 20.
E) 21.

7. (FGV/TJ-RO/2015) Em uma sequência numérica, cada termo a partir do terceiro é a soma dos dois
termos anteriores. O 7º e o 9º termos são, respectivamente, 29 e 76. O 2º termo dessa sequência é:
A) 1.
B) 2.
C) 3.
D) 4.
E) 5.

8. (FGV/PREF. NITEROI/2015) A sequência 2, 2, 1, 5, 5, 5, 5, 5, 2, 2, 1, 5, 5, 5, 5, 5, 2, ... mantém o padrão
apresentado indefinidamente. A soma dos 2015 primeiros termos dessa sequência é:
A) 7560.
B) 7555.
C) 7550
D) 7545.
E) 7540.

9. (FGV/MPE-MS/2013) Na sequência x, y, z, 0, 1, 2, 3, 6, 11,... cada termo, a partir do 4º termo, é a soma
dos três termos imediatamente anteriores a ele. O valor de x é:
A) -3.
B) -2.
C) -1.
D) 0.
E) 1.

10. (FGV/PM-SP/2021) Um sargento organizou um grupo de soldados em 16 filas, com 2 soldados na
primeira fila e 3 soldados a mais em cada fila subsequente: 2, 5, 8, 11, ... Se o sargento organizasse o
mesmo grupo de soldados em filas de 14 soldados cada uma, o número total de filas seria
A) 14.


---

B) 16.
C) 24.
D) 28.
E) 32.

11. (FGV/PREF. ANGRA/2019) Laura construiu uma progressão aritmética decrescente começando com o
número 500 e subtraindo 7 unidades sucessivamente:

                                     𝟓𝟎𝟎    𝟒𝟗𝟑    𝟒𝟖𝟔    𝟒𝟕𝟗 . ..

O primeiro número dessa sequência que possui apenas dois algarismos é
A) 98.
B) 97.
C) 96.
D) 95.
E) 94.

12. (FGV/ALERO/2018) Os números 𝒙 + 𝟏, 𝟐𝒙 − 𝟏 e 𝒙 + 𝟓, nessa ordem, são os três primeiros termos de
uma progressão aritmética. O quarto termo dessa progressão aritmética é
A) 11.
B) 10.
C) 9.
D) 8.
E) 7.

13. (FGV/ALERO/2018) A soma dos termos da progressão aritmética 8, 11, 14 ,..., 2015, 2018 é
A) 680736.
B) 679723.
C) 678710.
D) 677697.
E) 676684.

14. (FGV/SEDUC-AM/2014) Marcelo comprou um cofrinho para juntar moedas. No primeiro dia, Marcelo
colocou no cofrinho todas as moedas que possuía na ocasião. A partir do segundo dia, ele colocou
diariamente três moedas no cofrinho. Ao final do décimo dia, o cofrinho de Marcelo tinha ao todo 40
moedas. O número de moedas que Marcelo colocou no cofrinho no primeiro dia foi
A) 10.
B) 11.
C) 12.
D) 13.
E) 14.

15. (FGV/ALERO/2018) Se x - 1, x + 1, x + 7 são, nessa ordem, os três primeiros termos de uma progressão
geométrica, o quarto termo é
A) 27.
B) 18.


---

C) 16.
D) 9.
E) 8.

16. (FGV/SSP-AM/2015) Um supersapo faz uma sequência de saltos dobrando sempre, a cada salto, a
distância do salto anterior. No 1º, 2º e 3º saltos, o supersapo saltou, respectivamente, 5 cm, 10 cm e 20
cm. O salto em que o supersapo saltou pela primeira vez mais de 10 metros foi o:
A) 8º salto;
B) 9º salto;
C) 10º salto;
D) 11º salto;
E) 12º salto;

17. (FGV/PREF. OSASCO/2014) Observe a expressão abaixo.

                                                 𝟏 𝟏 𝟏 𝟏
                                         𝑺= 𝟏+    + + +   +. ..
                                                 𝟐 𝟒 𝟖 𝟏𝟔

Considerando-se um número muito grande de termos sendo adicionados, o valor de S tende a:
A) 1
B) 2
C) 4
D) 8
E) ∞

18. (FGV/SEDUC-AM/2014) Considere a sequência de 𝑵 + 𝟏 termos: 𝟏, 𝟑, 𝟑𝟐 , 𝟑𝟑 , . . . , 𝟑𝑵−𝟏, 𝟑𝑵

Seja 𝑺𝑵 a soma dos N primeiros termos dessa sequência.

O valor de 𝟑𝑵 − 𝑺𝑵 é
A) menor do que zero.
B) maior do que zero e menor do que 𝑆𝑁 .
                                    3𝑁
C) maior do que 𝑆𝑁 e menor do que
                                     2
                3𝑁
D) maior do que 2 e menor do que 𝑆𝑁+1 .
E) igual a 𝑆𝑁 +1.

19. (FGV/DETRAN MA/2013) Observe as progressões (𝒂𝒏 ) e (𝒃𝒏 ), n = 1, 2, 3, ... a seguir:

                             𝒂𝒏          1   5       9      13     17      ...
                             𝒃𝒏          1   2       4      8      16      ...

A diferença entre os vigésimos quintos termos dessas progressões, ou seja, 𝒃𝟐𝟓 – 𝒂𝟐𝟓 .
A) é menor do que 102 .
B) fica entre 102 e 104 .
C) fica entre 104 e 106 .


---

D) fica entre 106 e 108 .
E) é maior do que 108 .


---

               GABARITO
1.   LETRA D   8. LETRA B    15. LETRA A
2.   LETRA B   9. LETRA C    16. LETRA B
3.   LETRA D   10. LETRA D   17. LETRA B
4.   LETRA C   11. LETRA E   18. LETRA E
5.   LETRA E   12. LETRA A   19. LETRA D
6.   LETRA B   13. LETRA B
7.   LETRA C   14. LETRA D


---

                            LISTA DE QUESTÕES - FGV

Sequências de Figuras

1. (FGV/SEFAZ-BA/2022) Os números naturais foram escritos em uma tabela de 4 linhas como na figura a
seguir.

As linhas são numeradas de baixo para cima e as colunas são numeradas da esquerda para a direita. O
número da linha e o número da coluna onde está o número 2022 são, respectivamente,
A) 2 e 253.
B) 3 e 253.
C) 2 e 506.
D) 3 e 506.
E) 4 e 524.

2. (FGV/CBM-AM/2022) No plano cartesiano, a partir da origem, foi construído o caminho representado
abaixo, mantendo o padrão do desenho.

O comprimento da parte do caminho desde o início até o ponto (49, 1) é
A) 166.
B) 168.
C) 170.
D) 172.
E) 174.

3. (FGV/TJ-RO/2021) Observe a sequência de figuras a seguir.


---

Mantendo o padrão apresentado nas figuras acima, o número de bolinhas da figura 15 é:
A) 238;
B) 244;
C) 258;
D) 270;
E) 304.

4. (FGV/PREF. SALVADOR/2017) A figura a seguir mostra grupos de bolinhas cujos números crescem
mantendo determinado padrão.

Assinale a opção que indica o número de bolinhas da figura 16.
A) 241.
B) 255.
C) 273.
D) 289.
E) 297.

5. (FGV/SME CUIABÁ/2015) A figura abaixo mostra uma reta numerada e uma sequência de bolinhas
mantendo sempre o mesmo padrão:

A quantidade de bolinhas desde o número 1 até o número 50, inclusive, é
A) 96.
B) 97.
C) 98.
D) 99.
E) 100.

6. (FGV/TJ-RJ/2014) Brincando com palitos, Bernardo criou uma sequência de quadrados e triângulos
como na figura a seguir:


---

Bernardo terminou a brincadeira após construir o 50º quadrado. O número total de palitos que Bernardo
utilizou foi:
A) 330.
B) 340.
C) 343.
D) 347.
E) 350.

7. (FGV/BADESC/2010) Observe a sequência de figuras formadas por pontos.

De acordo com a lógica sequencial estabelecida, assinale a alternativa que apresente corretamente a figura
8.

A)
                                                        D)

B)
                                                        E)


C)

8. (FGV/MPE-RJ/2019) Em uma rua retilínea há 20 postes espaçados igualmente entre si. A distância entre
dois postes quaisquer consecutivos é de 15 metros. A distância entre o terceiro poste e o décimo sétimo
poste é:
A) 225 metros
B) 210 metros
C) 195 metros
D) 180 metros
E) 165 metros


---

               GABARITO
1.   LETRA D          5.   LETRA D
2.   LETRA E          6.   LETRA D
3.   LETRA D          7.   LETRA B
4.   LETRA C          8.   LETRA B


---

                              LISTA DE QUESTÕES - FGV

Sequências de Letras e Palavras

1. (FGV/SSP-AM/2022) Considere a sequência das letras do alfabeto formada por 1 letra A, 2 letras B, 3
letras C, e assim por diante até o final com 26 letras Z.

                                        A B B C C C D D D D E E E E E ...

A 100ª letra dessa sequência é
A) M.
B) N.
C) O.
D) P.
E) Q.

2. (FGV/TJ-RO/2021) Na sala de arquivos de um escritório há 7 armários, cada um com 7 gavetas, sendo
que cada gaveta comporta 15 pastas.

- Os armários são identificados por A, B, C, ..., G.
- As gavetas são numeradas com 1, 2, 3, ..., 7.
- As pastas são numeradas com 01, 02, 03, ..., 15.

A localização de uma pasta é dada por um código que indica o armário, a gaveta e a posição onde ela está.
Por exemplo, uma pasta com o código B403 significa que ela é a 3ª pasta da gaveta 4 do armário B. Todas
as pastas foram arquivadas em ordem, nenhum lugar ficou vazio e a última pasta colocada no arquivo foi
a de código D512.O número total de pastas desse arquivo é:
A) 338;
B) 342;
C) 366;
D) 387;
E) 398.

3. (FGV/CM ARACAJU/2021) Um artista criou uma faixa decorativa com o nome do estado escrito diversas
vezes em sequência:

                                       SERGIPESERGIPESERGIPESERG...

A milésima letra dessa faixa é:
A) S;
B) R;
C) G;
D) I;
E) P.


---

4. (FGV/IMBEL/2021) Um funcionário da fábrica da IMBEL de Juiz de Fora pensou em pintar uma faixa
decorativa no muro externo da fábrica com o motivo abaixo:

                                    I M B E L J F I M B E L J F I M B E L J F ...

Mantendo esse padrão, a 500ª letra dessa faixa será
A) B.
B) E.
C) L.
D) J.
E) F.

5. (FGV/PREF. PAULÍNIA/2021) Uma faixa decorativa foi desenhada usando a palavra PAULINIA e sua
grafia ao contrário, AINILUAP seguidas, sem repetir a letra comum das extremidades:

                                   PAULINIAINILUAPAULINIAINILUAPAUL...

A milésima letra dessa faixa é
A) A.
B) U.
C) L.
D) N.
E) I.

6. (FGV/PREF. SALVADOR/2019) Considere a sequência infinita de letras ONDINAONDINAONDINAOND...
A 2019ª letra dessa sequência é
A) O.
B) N.
C) D.
D) I.
E) N.

7. (FGV/MPE-RJ/2019) Observe a sequência infinita a seguir.

                          𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃𝐅𝐆𝐇𝐆𝐅𝐃𝐂𝐁𝐂𝐃. ..

A 2019ª letra dessa sequência é:
A) B.
B) C.
C) D.
D) F.
E) G.

8. (FGV/PREF. ANGRA/2019) A sequência a seguir é formada pelas letras de “Angra dos Reis”, nessa ordem,
com as letras todas juntas.


---

                            𝐀𝐍𝐆𝐑𝐀𝐃𝐎𝐒𝐑𝐄𝐈𝐒𝐀𝐍𝐆𝐑𝐀𝐃𝐎𝐒𝐑𝐄𝐈𝐒𝐀𝐍𝐆𝐑𝐀𝐃𝐎. ..

A 100ª letra dessa sequência é
A) R.
B) G.
C) A.
D) D.
E) S.

9. (FGV/BANESTES/2018) Um artista estava pintando uma faixa decorativa repetindo continuamente o
nome do banco:

                                 𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍𝐄𝐒𝐓𝐄𝐒𝐁𝐀𝐍. ..

Ele pintou 150 letras dessa sequência e parou para almoçar. A última letra pintada pelo artista foi:
A) A.
B) N.
C) E.
D) S.
E) T.

10. (FGV/MPE-RJ/2016) Observe a seguinte sequência formada por quatro letras do alfabeto:

                                                 𝐌𝐏𝐑𝐉

Afirma-se que uma nova sequência tem a mesma estrutura da sequência dada quando as distâncias
relativas entre as letras é a mesma da sequência original.

Considere as sequências:
1) D G I A
2) Q T V O
3) H K N F

Dessas sequências, possuem a mesma estrutura da sequência original:
A) somente (1);
B) somente (2);
C) somente (3);
D) somente (1) e (2);
E) somente (2) e (3).

11. (FGV/TCE-BA/2014) Em um enfeite de Natal, pequenas lâmpadas vermelhas e brancas são colocadas
em um fio. Representando vermelhas com V e brancas com B, as lâmpadas são colocadas de acordo com
o padrão a seguir:

                                      𝐕𝐕𝐕𝐁𝐁𝐁𝐁𝐕𝐕𝐕𝐁𝐁𝐁𝐁𝐕𝐕𝐕. ..


---

Sempre três lâmpadas vermelhas, seguidas de quatro lâmpadas brancas. A primeira lâmpada é vermelha
e a distância entre duas lâmpadas consecutivas é sempre de 3 cm. A distância, em centímetros, entre a
segunda lâmpada vermelha e a quadragésima lâmpada vermelha
A) 261.
B) 264.
C) 267.
D) 270.
E) 273.

12. (FGV/TJ-AM/2013) Observe a seguinte sequência de letras do alfabeto: C D E G. Entre as alternativas
a seguir, o grupo que mostra uma sequência com a mesma estrutura é
A) B D E F.
B) M N P Q.
C) J K L M.
D) R S T V.
E) M N O R.

13. (FGV/SENADO FEDERAL/2012) Considere a sequência de letras a seguir: "abczydefxwghiv...".
Mantendo-se a lei de formação, as duas próximas letras na sequência serão
A) jk.
B) uj.
C) tk.
D) uk.
E) tj.


---

                GABARITO
1.   LETRA B   6. LETRA C    11. LETRA D
2.   LETRA D   7. LETRA C    12. LETRA D
3.   LETRA E   8. LETRA A    13. LETRA B
4.   LETRA A   9. LETRA E
5.   LETRA D   10. LETRA A


---
