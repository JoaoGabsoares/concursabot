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
arquivo_origem: Aula 07_Apostila_Simplificada.txt
tipo_material: Curso Teórico Base
aula_numero: '07'
titulo_aula: Raciocínio Lógico Matemático
---

# Raciocínio Lógico Matemático

Aula 06
                          Receita Federal (Analista Tributário)
                                     Raciocínio Lógico Matemático

                                                            Autor:
                                        Equipe Exatas Estratégia
                                                      Concursos


                                               27 de Agosto de 2024

---

      Equipe Exatas Estratégia Concursos
      Aula 06

                                                                                     Índice
1) Sequências Numéricas


2) Sequência de Figuras


3) Sequência de Letras e Palavras


4) Questões Comentadas - Sequências Numéricas - FGV


5) Questões Comentadas - Sequências de Figuras - FGV


6) Questões Comentadas - Sequência de Letras e Palavras - FGV


7) Lista de Questões - Sequências Numéricas - FGV


8) Lista de Questões - Sequências de Figuras - FGV


9) Lista de Questões - Sequência de Letras e Palavras - FGV

                Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                                                                                        2
                www.estrategiaconcursos.com.br                                                                                                                                           43

                                                             


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

Esse índice que está subscrito ao "a" indica a ordem do termo! 𝑎1 é o primeiro termo da sequência, 𝑎2 é o
segundo termo da sequência, 𝑎3 é o terceiro. Quando queremos representar um termo de uma sequência e
não sabemos qual a sua ordem, simplesmente o denotamos como 𝒂𝒏 e o lemos "a índice n". Essa mesma
notação pode ser usada para denotar um termo genérico e a sua lei de formação. Vamos detalhar.

A sequência (3, 6, 9, 12, 15, . . . ) pode ser representada simplesmente como 𝒂𝒏 = 𝟑 ∙ 𝒏. O 𝑛 é qualquer
número pertencente ao conjunto dos números naturais excluindo o zero (ℕ∗ ), relembre-se:

                                                  ℕ∗ = {1, 2, 3, 4, 5, 6, … }


         Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             3
         www.estrategiaconcursos.com.br                                                                43

                                          


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Assim, ficamos com:

    •   Quando 𝑛 = 1, então 𝑎1 = 3 ∙ 1 ⟹ 𝑎1 = 3
    •   Quando 𝑛 = 2, então 𝑎2 = 3 ∙ 2 ⟹ 𝑎2 = 6
    •   Quando 𝑛 = 3, então 𝑎3 = 3 ∙ 3 ⟹ 𝑎3 = 9

Veja que obtivemos exatamente os mesmos números da sequência que estávamos tratando, inclusive na
ordem dada. Conclusão: nossas sequências podem ser representadas de formas diferentes, por meio da lei
de formação, e não só na forma explícita (𝑎1 , 𝑎2 , 𝑎3 , 𝑎4 , 𝑎5 , … ).

Existem sequências que apresentam um padrão muito específico. Essas sequências ganham um nome
especial e trataremos delas nas seções subsequentes. Faremos, a partir desse ponto, uma intersecção com
a disciplina de matemática, apresentando a vocês a sequência de Fibonacci, a progressão aritmética e a
progressão geométrica. Fique ciente que não esgotaremos nenhum desses conteúdos, apenas veremos o
suficiente para desenvolver uma noção intuitiva que será suficiente para a resolução das questões.

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

   •    𝐹3 = 𝐹1 + 𝐹2 ⟹ 𝐹3 = 1 + 1 = 2
   •    𝐹4 = 𝐹3 + 𝐹2 ⟹ 𝐹4 = 2 + 1 = 3
   •    𝐹5 = 𝐹4 + 𝐹3 ⟹ 𝐹5 = 3 + 2 = 5
   •    𝐹6 = 𝐹5 + 𝐹4 ⟹ 𝐹6 = 5 + 3 = 8
   •    Por aí vai...

Podemos representar esses fatos de uma forma resumida e organizada. Para essa finalidade, definimos a
sequência de Fibonacci da seguinte forma:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               4
        www.estrategiaconcursos.com.br                                                                  43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                     1, 𝑠𝑒 𝑛 = 1
                                         𝐹𝑛 = {      1, 𝑠𝑒 𝑛 = 2
                                                𝐹𝑛−1 + 𝐹𝑛−2 , 𝑠𝑒 𝑛 ≥ 3

Veja que é tudo o que a gente falou até aqui, mas utilizando a notação matemática. Os dois primeiros termos
são iguais a um e um termo genérico 𝐹𝑛 é dado como a soma dos dois termos anteriores a ele: 𝑭𝒏−𝟏 + 𝑭𝒏−𝟐 .
Podemos, ainda, representar a sequência de Fibonacci de mais um jeito, através de uma fórmula! Qualquer
termo da sequência de Fibonacci pode ser obtido usando a seguinte expressão:

                                                          𝑛                  𝑛
                                                 (1 + √5) − (1 − √5)
                                          𝐹𝑛 =
                                                           2𝑛 √5

É um jeito mais trabalhoso de obtermos os termos, pois precisaremos ficar desenvolvendo os binômios.
Recomendo que, para escrever a sequência, utilize nossa regra de somar os dois termos anteriores,
lembrando que os dois primeiros termos são iguais a um. No mais, é importante ter uma noção do aspecto
da fórmula, pois poderá te ajudar em eventuais questões. Falando nelas, vamos fazer algumas?

Noções Básicas de Progressão Aritmética

A progressão aritmética é o tipo de sequência mais comum em questões. De modo geral, é qualquer
sequência cujo termo subsequente difere do anterior por uma constante. É mais fácil do que você está
pensando! Vamos ver alguns exemplos para começar a destrinchar essa matéria!

   •   (1, 2, 3, 4, 5, 6, 7, . . . )
   •   (2, 4, 6, 8, 10, 12, . . . )
   •   (21, 14, 7, 0, −7, −14, −21, . . . )

Você é capaz de identificar os padrões das sequências acima? Todas elas são exemplos de progressões
aritméticas. À medida que "se anda" na sequência, os termos sempre aumentam (ou diminuem) de um
mesmo um valor.

   •   (1, 2, 3, 4, 5, 6, 7, . . . ) ⟹ Cada termo subsequente é igual ao anterior mais 1.
   •   (2, 4, 6, 8, 10, 12, . . . ) ⟹ Cada termo subsequente é igual ao anterior mais 2.
   •   (21, 14, 7, 0, −7, . . . ) ⟹ Cada termo subsequente é igual ao anterior menos 7.

Esse número que somamos ou subtraímos de cada termo é chamado de razão (𝒓). Quando a razão é
positiva, nós dizemos que a PA é crescente, quando é negativa, dizemos que a PA é decrescente. Observe
que em uma progressão aritmética de forma geral (𝑎1 , 𝑎2 , 𝑎3 , 𝑎4 , 𝑎5 , … ), sempre poderemos escrever um
termo como função da razão e do primeiro termo.

   •   𝑎2 = 𝑎1 + 𝑟
   •   𝑎3 = 𝑎2 + 𝑟 ⟹ 𝑎3 = (𝑎1 + 𝑟) + 𝑟 ⟹                  𝑎3 = 𝑎1 + 2𝑟


        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               5
        www.estrategiaconcursos.com.br                                                                  43

                                     


---

  Equipe Exatas Estratégia Concursos
  Aula 06

   •   𝑎4 = 𝑎3 + 𝑟 ⟹ 𝑎4 = (𝑎1 + 2𝑟) + 𝑟 ⟹ 𝑎4 = 𝑎1 + 3𝑟
   •   𝑎5 = 𝑎4 + 𝑟 ⟹ 𝑎5 = (𝑎1 + 3𝑟) + 𝑟 ⟹ 𝑎5 = 𝑎1 + 4𝑟

Note que utilizamos o fato de que, em uma PA, um determinado termo é igual ao seu anterior mais uma
constante. Para descobrir o 𝑎5 , nós só precisamos do 𝑎1 e da razão (𝑟), não sendo necessário escrever todos
os termos da PA até o 𝒂𝟓 . Imagine, por exemplo, que você quer saber o 𝑎50 da sequência
(2, 4, 6, 8, 10, 12, . . . ). Você concorda que listar os 50 termos não seria uma tarefa muito rápida? Se você
souber o 𝑎1 e a razão (𝑟), é possível determiná-lo em segundos. A fórmula do termo geral de uma progressão
aritmética é dada pela expressão abaixo, guarde ela bem!

                                              𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

Por exemplo, para obter o 𝑎50 da sequência (2, 4, 6, 8, 10, 12, . . . ), basta sabermos que 𝑎1 = 2 e 𝑟 = 2.
                                                       ==219a34==

                                             𝑎50 = 2 + (50 − 1) ∙ 2

                                                    𝑎50 = 100

E se a razão for negativa, como fazemos? Absolutamente do mesmo jeito, não vai mudar nada. Vamos pegar
a sequência (21, 14, 7, 0, −7, . . . ) que possui razão 𝑟 = −7 e primeiro termo 𝑎1 = 21. Veja que é uma PA
decrescente. Qual será o 𝑎75 ? Da fórmula do termo geral de uma progressão aritmética, podemos fazer:

                                              𝑎𝑛 = 𝑎1 + (𝑛 − 1) ∙ 𝑟

                                           𝑎75 = 21 + (75 − 1) ∙ (−7)

                                                   𝑎75 = −497

Um fato que eu gostaria de ressaltar com vocês é que a escolha da letra "a" para representar elementos de
uma sequência é só uma convenção. Na prática, você poderá ver sequências representadas das mais
diferentes maneiras, por exemplo, utilizando a letra "b" no lugar da letra "a": (𝑏1 , 𝑏2 , 𝑏3 , 𝑏4 , 𝑏5 , … ) e
escrevendo o termo geral como 𝑏𝑛 = 𝑏1 + (𝑛 − 1) ∙ 𝑟. Esse tipo de notação é válido! Não tem problema
algum, é ao gosto do freguês!

Existe mais uma fórmula dentro do universo da progressão aritmética que é a da soma dos n primeiros
termos. Não irei entrar no mérito da demonstração pois, apesar de ser uma demonstração simples, fugirá
do escopo de uma aula de raciocínio lógico.

Imagine que temos a seguinte PA: (1, 2, 3, 4, 5, 6, 7, . . . ). Qual é a soma dos 100 primeiros termos? Para
responder essa pergunta, temos que realizar uma tarefa que parece não ser tão imediata, concorda? Porém,

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                    6
        www.estrategiaconcursos.com.br                                                                        43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

utilizando a fórmula da soma dos n primeiros termos de uma PA, podemos responder de maneira rápida. A
fórmula da soma dos n primeiros termos é dada por:

                                                        (𝑎1 + 𝑎𝑛 ) ∙ 𝑛
                                                𝑆𝑛 =
                                                             2

Ou seja, para calcularmos a soma dos n primeiros termos, precisamos do 𝑎1 e do 𝑎𝑛 . Como estamos atrás
dos 100 primeiros termos, temos que 𝑛 = 100 e precisamos encontrar o 𝑎100 .

                                             𝑎100 = 1 + (100 − 1) ∙ 1

                                                      𝑎100 = 100
Substituindo na fórmula:

                                                      (𝑎1 + 𝑎100 ) ∙ 100
                                             𝑆100 =
                                                             2

                                              𝑆100 = (1 + 100) ∙ 50

                                                   𝑆100 = 5050

Portanto, a soma dos 100 primeiros termos da progressão aritmética (1, 2, 3, 4, 5, 6, 7, . . . ) é 5050.

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 7
        www.estrategiaconcursos.com.br                                                                     43

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

multiplicamos os termos são as razões de cada sequência e, no estudo das PGs, denotamos ela por 𝒒 e não
mais por 𝒓.

Observe que, se você conhece esse tipo de sequência, fica bem mais fácil reconhecer os padrões trazidos
pela questão, facilitando muito resolvê-la. Para encerrar esse breve tópico, quero ainda apresentar-lhes
algumas formas. Assim como na PA, a PG possui uma fórmula para o termo geral em função da razão (q), do
primeiro termo (𝑎1 ) e da ordem (n) do termo procurado.


                                                  𝑎𝑛 = 𝑎1 ∙ 𝑞 𝑛−1

Se, por acaso, você precisasse descobrir o 𝑎11 da sequência (2, 4, 8, 16, 32, 64, … ), o que faria? Obviamente,
uma solução seria listar todos os termos até o 𝒂𝟏𝟏 sempre multiplicando o termo anterior por 2 para obter
o termo subsequente. No entanto, você também poderia aplicar a fórmula do termo geral e descobrir de
imediato:

             𝑎11 = 2 ∙ 211−1       →     𝑎11 = 2 ∙ 210      →       𝑎11 = 211   →   𝒂𝟏𝟏 = 𝟐𝟎𝟒𝟖

E como faríamos para obter a soma de todos os termos da sequência acima? Digo de 𝑎1 até 𝑎11 ? Temos uma
fórmula para isso, anote (ou revise) aí.

                                                       𝑎1 ∙ (𝑞 𝑛 − 1)
                                                𝑆𝑛 =
                                                           𝑞−1

Essa é a fórmula da soma dos termos de uma P.G. finita.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                  8
        www.estrategiaconcursos.com.br                                                                      43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               9
        www.estrategiaconcursos.com.br                                                                  43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Note que a figura 2 tem 6 bolinhas a mais do que a primeira. Por sua vez, a figura 3 tem 8 bolinhas a mais
do que a segunda. Por fim, a figura 4 tem 10 bolinhas a mais do que a terceira.

Nessa lógica, podemos concluir que a figura "5" terá 12 bolinhas a mais do que a quarta figura, a figura "5"
terá 14 bolinhas a mais do que sua antecessora e assim sucessivamente... Sempre aumentando 2 bolinhas
a mais do que antes. Com essas informações, vamos continuar a tabela acima.

                                                       ==219a34==

Ao prosseguir com a tabela, chegamos ao resultado de que a figura 15 terá 270 bolinhas.

A segunda forma de fazer, poderia custar um tempo "inicial" maior, pois é de maior dificuldade. No entanto,
uma vez que o aluno percebesse isso, a resposta sairia com uma "única" conta.

Note que é possível determinar a quantidade de bolinhas apenas com o número da figura. A quantidade
de bolinhas dessa sequência é dada pela fórmula:

                                                  𝑄𝑛 = 𝑛(𝑛 + 3)

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               10
        www.estrategiaconcursos.com.br                                                                   43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Em que "n" é o número da figura! Faça o teste!

Pessoal, uma pausa aqui! Eu sei que determinar essa fórmula não é algo fácil de fazer na hora da prova!
Tenho total consciência disso! Meu intuito aqui é fazer você perceber que pode existir uma fórmula por trás
de um determinado problema. Sendo assim, caso você perceba que está fazendo muita conta para chegar
no resultado, em uma questão de raciocínio sequencial, então é possível que o examinador não queira todas
as contas, mas sim, que você consiga derivar uma expressão genérica para aplicá-la na condição pedida.

No caso dessa questão, queremos o número de bolinhas na figura 15:

                     𝑄15 = 15 ⋅ (15 + 3)       →       𝑄15 = 15 ⋅ 18         →   𝑸𝟏𝟓 = 𝟐𝟕𝟎

Gabarito: LETRA D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                              11
        www.estrategiaconcursos.com.br                                                                  43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Sequências de Letras e Palavras

Essas sequências despencam em provas! As bancas gostam bastante! Por esse motivo, atenção redobrada
aqui! Vou reforçar que não temos uma teoria formalizada disso. Por essa razão, recomendo que veja muitos
exercícios resolvidos, pois será a chave para que você desenrole qualquer questão sobre assunto.

Uma boa notícia que posso dar, é que o "padrão" das questões se repete muito. Com isso, podemos montar
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 12
        www.estrategiaconcursos.com.br                                                                     43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

O quociente foi 142, ou seja, a palavra SERGIPE apareceu inteiramente 142 vezes antes da milésima letra.
Por fim, o resto "6" indica que a 1000ª letra é a 6ª letra da palavra SERGIPE, ou seja, a letra "P".

   ⏟
   𝑆𝐸𝑅𝐺𝐼𝑃𝐸 ⏟
           𝑆𝐸𝑅𝐺𝐼𝑃𝐸 ⏟
                   𝑆𝐸𝑅𝐺𝐼𝑃𝐸 … 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                             ⏟       ⏟
                                     𝑆𝐸𝑅𝐺𝐼𝑃𝐸 𝑆𝐸𝑅𝐺𝐼 𝑃
                                                   ⏟   ==219a34==

       1ª 𝑣𝑒𝑧           2ª 𝑣𝑒𝑧            3ª 𝑣𝑒𝑧                    141ª 𝑣𝑒𝑧   142ª 𝑣𝑒𝑧      1000ª


Gabarito: LETRA E.

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           13
        www.estrategiaconcursos.com.br                                                               43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

3º passo - Qual a letra que o enunciado quer?

                                          A questão pede a 500ª letra.

4º passo - Dividir 500 por 7.

                                                 500 7
                                               − 49 71
                                                  10
                                                − 7
                                                   3
O que essa divisão nos fornece?

Como o quociente é 71, temos que IMBELJF aparece completamente 71 vezes antes de chegarmos na 500ª
letra. Por sua vez, o resto igual a 3 indica que a letra procurada é a 3ª letra da palavra IMBELJF, ou seja, a
letra "B".

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 14
        www.estrategiaconcursos.com.br                                                                     43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                 QUESTÕES COMENTADAS - FGV

Sequências Numéricas

1. (FGV/ALE-SC/2024) Uma sequência de números naturais possui a propriedade:

“Se x é um termo da sequência, então o termo seguinte é o algarismo das unidades de 2x + 1.”

O primeiro termo da sequência é o número 6.

O 2024º termo dessa sequência é
A) 1.
B) 3.
C) 5.
D) 6.
E) 7.

Comentários:
Vamos observar o padrão que se forma na sequência. O primeiro termo é 6. Para obter o segundo termo,
fazemos 2∙6 + 1 = 13 e pegamos o algarismo das unidades, que é 3. Para obter o terceiro termo, fazemos
2∙3+ 1 = 7 e pegamos o algarismo das unidades, que é 7. Para obter o quarto termo, fazemos 2∙7+ 1 = 15 e
pegamos o algarismo das unidades, que é 5. E assim por diante.

Podemos notar que a sequência se repete a cada quatro termos: 6, 3, 7, 5, 6, 3, 7, 5... Isso significa que se
dividirmos o número da posição do termo por 4, o resto dessa divisão nos indica qual é o termo
correspondente. Por exemplo, se quisermos saber o 8º termo, fazemos 8 / 4 = 2 com resto 0. Como o resto
é 0, o 8º termo é igual ao 4º termo, que é 5. Se quisermos saber o 9º termo, fazemos 9 / 4 = 2 com resto 1.
Como o resto é 1, o 9º termo é igual ao 1º termo, que é 6.

Portanto, para saber o 2024º termo, fazemos 2024 / 4 = 506 com resto 0. Como o resto é 0, o 2024º termo
é igual ao 4º termo, que é 5. A alternativa correta é a letra C.

Gabarito: LETRA C

2. (FGV/ALE-TO/2024) A seguir, são apresentados os 9 primeiros termos de uma sequência infinita de
números inteiros.

                                       𝟏𝟑, 𝟏𝟐, 𝟏𝟒, 𝟏𝟏, 𝟏𝟓, 𝟏𝟎, 𝟏𝟔, 𝟗, 𝟏𝟕, . ..

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                15
        www.estrategiaconcursos.com.br                                                                    43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Os termos são, alternadamente, maiores e menores que seus antecessores imediatos, seguindo um padrão
de construção. Sabendo-se que esse padrão é mantido ao longo de toda a sequência, conclui-se que um
termo negativo aparecerá pela primeira vez na
A) 28ª posição.
B) 27ª posição.
C) 26ª posição.
D) 15ª posição.
E) 14ª posição.

Comentários:
Pessoal, é possível "quebrarmos" essa sequência em duas:

1ª sequência: 13, 14, 15, 16, 17...                      ==219a34==

2ª sequência: 12, 11, 10, 9...

Observe que essas duas sequências estão intercaladas! Além disso, o termo negativo só aparecerá por causa
da segunda, pois é a que diminui. Sendo assim, nosso foco será ela. Vamos observá-la.

                                       12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, −1

Note que o primeiro termo negativo (−𝟏) aparece na 14ª posição da nossa sequência "separada".

Na sequência principal, a sua posição estará dobrada, ou seja, será a 28ª posição, uma vez que precisamos
contabilizar também os termos da primeira sequência.

Gabarito: LETRA A.

3. (FGV/CBM-RJ/2024) Considere a sequência de números naturais na qual o primeiro termo é 23 e cada
termo a partir do segundo é 24 unidades maior do que o termo anterior a ele. O 100º termo dessa
sequência é
A) 2423.
B) 2400.
C) 2399.
D) 2324.
E) 2323.

Comentários:
Observe que a questão trouxe uma progressão aritmética de primeiro termo igual a 23 e razão igual a 24.

Sendo assim, vamos usar fórmula do termo geral de uma progressão aritmética:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            16
        www.estrategiaconcursos.com.br                                                                43

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                               𝑎𝑛 = 𝑎1 + (𝑛 − 1)𝑟

onde 𝑎𝑛 é o n-ésimo termo, 𝑎1 é o primeiro termo, 𝑟 é a razão e 𝑛 é o número de termos.

No caso da questão:

                                                     𝑎1 = 23
                                                      𝑟 = 24
                                                     𝑛 = 100

Substituindo na fórmula, temos:

                                         𝑎100 = 23 + (100 − 1) ⋅ 24
                                              𝑎100 = 23 + 99 ⋅ 24
                                               𝑎100 = 23 + 2376
                                                  𝒂𝟏𝟎𝟎 = 𝟐𝟑𝟗𝟗


Portanto, o 100º termo dessa sequência é 2399.

Gabarito: LETRA C.

4. (FGV/PM-SP/2023) Uma sequência de números inteiros foi criada escolhendo-se os dois primeiros
termos e, a partir do 3º termo, os próximos números da sequência foram calculados por meio de uma
mesma operação básica envolvendo os dois antecessores imediatos. A seguir, são apresentados os seis
primeiros termos dessa sequência numérica.

                                                𝟐, −𝟏, 𝟏, 𝟎, 𝟏, 𝟏, . ..

Seguindo esse padrão de construção, o valor do próximo termo é
A) 2.
B) 1.
C) 0.
D) -1.

Comentários:
Observe que essa sequência lembra a "Fibonacci". A diferença está nos dois primeiros termos. Na Fibonacci,
temos que 𝐹1 = 1 e 𝐹2 = 1. Note que a partir do terceiro termo, tem-se que o elemento é dado pela soma
dos dois anteriores.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             17
        www.estrategiaconcursos.com.br                                                                 43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                          Termo       Obtenção       Valor
                                            𝑎1          Dado           2
                                            𝑎2          Dado          −1
                                            𝑎3         𝑎1 + 𝑎2         1
                                            𝑎4         𝑎2 + 𝑎3         0
                                            𝑎5         𝑎3 + 𝑎4         1
                                            𝑎6         𝑎4 + 𝑎5         1
                                            𝒂𝟕         𝒂𝟓 + 𝒂𝟔        𝟐

Gabarito: LETRA A.

5. (FGV/BANESTES/2023) Alguns dos números que podem ser escritos na forma de fração apresentam
periodicidade quando representados na forma decimal. Isto é, a partir de uma certa casa decimal, um
dígito (ou uma sequência de dígitos) passa a se repetir infinitamente. Como exemplo, temos:

                                    𝟏
                                      = 𝟎, 𝟎𝟕𝟔𝟗𝟐𝟑𝟎𝟕𝟔𝟗𝟐𝟑𝟎𝟕𝟔𝟗𝟐𝟑𝟎𝟕𝟔 …
                                   𝟏𝟑

Nessa representação decimal, o 𝟏𝟐𝟑𝟐º dígito após a vírgula é
A) 7.
B) 6.
C) 3.
D) 2.
E) 0.

Comentários:
Inicialmente, vamos observar a dízima.

                                      1
                                        = 0,076923076923076923076 …
                                     13

Para resolver esse exercício, vamos aplicar um passo a passo que você poderá usá-lo em questões parecidas!
Problemas como esse são comuns no tópico de "Sequências de Letras e Palavras"! Você verá.

1º passo - Identificar a unidade de repetição.

                                                     𝟎𝟕𝟔𝟗𝟐𝟑

2º passo - Quantos dígitos tem esse número?

                                             𝟎𝟕𝟔𝟗𝟐𝟑 tem 6 dígitos.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             18
        www.estrategiaconcursos.com.br                                                                 43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

3º passo - Qual o dígito que o enunciado quer?

                                         A questão pede o 𝟏𝟐𝟑𝟐º dígito.

4º passo - Dividir 1232 por 6.


                                               1232 6
                                             − 12    205
                                                03
                                                −0
                                                  32
                                                −30
                                                   2
O que essa divisão nos fornece?

Como o quociente é 205, temos que 𝟎𝟕𝟔𝟗𝟐𝟑 aparece completamente 205 vezes antes de chegarmos no
1232º dígito. Por sua vez, o resto igual a 2 indica que o dígito procurado é o 2º dígito de 𝟎𝟕𝟔𝟗𝟐𝟑, ou seja, o
dígito "7".

Gabarito: LETRA A.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 19
        www.estrategiaconcursos.com.br                                                                     43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                          QUESTÕES COMENTADAS - FGV

Sequências de Figuras

1. (FGV/PM-SP/2023) As figuras abaixo ilustram as 3 primeiras etapas da sucessiva transformação de um
polígono em outro. Essa modificação é feita removendo-se todos os “bicos” do polígono anterior para
obter-se o polígono seguinte.

A figura obtida na Etapa 4 será um polígono com
A) 16 lados.
B) 20 lados.
C) 24 lados.
D) 36 lados.

Comentários:
Na etapa 1, temos um triângulo (3 lados).
Na etapa 2, temos um hexágono (6 lados).
Na etapa 3, temos um dodecágono (12 lados).

Observe que o número de lados da figura dobra em cada etapa. Sendo assim, a figura obtida na etapa 4
será um polígono com 24 lados (o dobro de 12).

Gabarito: LETRA C.

2. (FGV/MPE-SP/2023) As figuras a seguir representam os 4 primeiros termos da sequência de números
pentagonais: (𝟏, 𝟓, 𝟏𝟐, 𝟐𝟐, . . . )

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        20
        www.estrategiaconcursos.com.br                                                            43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

O número que ocupa a 7ª posição nessa sequência é
A) 46.
B) 51.
C) 59.
D) 63.
E) 70.

Comentários:
Observe a sequência de números pentagonais e seus "saltos":

                                    +4      +7         +10
                                  ⏞ 5→
                                 1→  ⏞ 12 →
                                          ⏞ 22 → 𝑋 → 𝑌 → 𝑍
                                                         ==219a34==

Do primeiro para o segundo termo, somamos 4.

Do segundo para o terceiro termo, somamos 7.

Do terceiro para o quarto temo, somamos 10.

Desse fato, podemos concluir que os "saltos" crescem de 3 unidades.

Sendo assim, é de se esperar que os próximos saltos sejam de 13, 16 e 19.

                               +4      +7        +10                  +13   +16   +19
                             ⏞ 5→
                            1→  ⏞ 12 →
                                     ⏞ 22 →
                                          ⏞ 35 →
                                               ⏞ 51 →
                                                    ⏞ 70

Gabarito: LETRA E.

3. (FGV/SEFAZ-BA/2022) Os números naturais foram escritos em uma tabela de 4 linhas como na figura a
seguir.

As linhas são numeradas de baixo para cima e as colunas são numeradas da esquerda para a direita. O
número da linha e o número da coluna onde está o número 2022 são, respectivamente,
A) 2 e 253.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       21
        www.estrategiaconcursos.com.br                                                           43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

3ª observação) As colunas pares sempre terminam com números pares. Por exemplo, a segunda coluna
termina com "8", a quarta coluna termina com "16"... Note também que, nas colunas pares, os números
aumentam de cima para baixo.

4ª observação) O primeiro ou o último número da coluna são sempre múltiplos de 4.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               22
        www.estrategiaconcursos.com.br                                                                   43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

4. (FGV/CBM-AM/2022) No plano cartesiano, a partir da origem, foi construído o caminho representado
abaixo, mantendo o padrão do desenho.

O comprimento da parte do caminho desde o início até o ponto (49, 1) é
A) 166.
B) 168.
C) 170.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                          23
        www.estrategiaconcursos.com.br                                                              43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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


                     Bloco 1      Bloco 2        Bloco 3            Bloco 4                     Bloco 12

                                                                                       ...
                                                                                             44 45 46 47 48 49

Com a figura acima, conseguimos constatar que são 12 blocos inteiros mais um caminho curto de 6 unidades
(que destacamos de roxo) até o ponto (49, 1). Sendo assim, o comprimento total é:

                                   Comprimento Total = 12 × 14 + 6 = 𝟏𝟕𝟒

Gabarito: LETRA E.

5. (FGV/TJ-RO/2021) Observe a sequência de figuras a seguir.

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                     24
          www.estrategiaconcursos.com.br                                                                         43

                                      


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Mantendo o padrão apresentado nas figuras acima, o número de bolinhas da figura 15 é:
A) 238;
B) 244;
C) 258;
D) 270;
E) 304.

Comentários:
Um jeito mais direto de fazer essa questão é contarmos na mão mesmo e montarmos uma tabela.

                                                  Quantidade
                                        Figura                Diferença
                                                  de Bolinhas
                                           1           4           -
                                           2          10          6
                                           3          18          8
                                           4          28          10

Note que a figura 2 tem 6 bolinhas a mais do que a primeira. Por sua vez, a figura 3 tem 8 bolinhas a mais
do que a segunda. Por fim, a figura 4 tem 10 bolinhas a mais do que a terceira.

Nessa lógica, podemos concluir que a figura "5" terá 12 bolinhas a mais do que a quarta figura, a figura "5"
terá 14 bolinhas a mais do que sua antecessora e assim sucessivamente... Sempre aumentando 2 bolinhas
a mais do que antes. Com essas informações, vamos continuar a tabela acima.

                                                  Quantidade
                                        Figura                Diferença
                                                  de Bolinhas
                                           1           4           -
                                           2          10          6
                                           3          18          8
                                           4          28          10
                                           5          40          12
                                           6          54          14
                                           7          70          16
                                           8          88          18

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                               25
        www.estrategiaconcursos.com.br                                                                   43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                          9           108             20
                                          10          130             22
                                          11          154             24
                                          12          180             26
                                          13          208             28
                                          14          238             30
                                          15          270             32

Gabarito: LETRA D.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   26
        www.estrategiaconcursos.com.br                                       43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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
Um jeito mais direto de resolver esse exercício é contando na mão mesmo! Note que o "A" aparece 1 vez.
O "B" aparece 2 vezes. O "C" aparece 3 vezes...

                                              Quantas letras     Quantas letras ao
                                   Letra
                                               aparecem?        total ? (acumulado)
                                    A               1                    1
                                    B               2                    3
                                     C              3                    6
                                    D               4                   10
                                     E              5                   15
                                     F              6                   21
                                    G               7                   28
                                    H               8                   36
                                     I              9                   45
                                     J             10                   55
                                     K             11                   66
                                     L             12                   78
                                    M              13                   91
                                    N              14                  105

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                         27
        www.estrategiaconcursos.com.br                                                             43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Note que é na letra "N" que a soma ultrapassa 105. Portanto, é a letra que estamos procurando.

Vamos fazer um último esquema visualizarmos o que foi feito!


 𝐴 𝐵 𝐵 𝐶 𝐶 𝐶 𝐷 𝐷 𝐷 𝐷… 𝐿 𝐿 𝑀 𝑀 𝑀…𝑀 𝑀 𝑁 𝑁 𝑁…𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑁 𝑂 𝑂
 ᇣᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇤᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇧᇥ
                        91 letras aqui

                                                                             100ª letra   105ª letra
Gabarito: LETRA B.

2. (FGV/TJ-RO/2021) Na sala de arquivos de um escritório há 7 armários, cada um com 7 gavetas, sendo
                                                       ==219a34==

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             28
        www.estrategiaconcursos.com.br                                                                 43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

Por sua vez, quando analisamos apenas o armário "D", vemos que a última pasta foi colocada na 5ª gaveta.
Com isso, podemos concluir que já temos 4 gavetas desse armário completamente cheias. Se em cada
gaveta cabem 15, então temos 4 ⋅ 15 = 𝟔𝟎 pastas nessas 4 gavetas completas.

Ademais, quando analisamos a 5ª gaveta, vemos que nela temos 12 pastas.

Por fim, para encontrarmos a quantidade de pasta desse arquivo, vamos somar essas quantidades:

                     Total de Pastas = 315 + 60 + 12           →      Total de Pastas = 387

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 29
        www.estrategiaconcursos.com.br                                                                     43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                                 1000 7
                                                − 7 142
                                                  30
                                                −28
                                                   20
                                                  −14
                                                     6
O quociente foi 142, ou seja, a palavra SERGIPE apareceu inteiramente 142 vezes antes da milésima letra.
Por fim, o resto "6" indica que a 1000ª letra é a 6ª letra da palavra SERGIPE, ou seja, a letra "P".


   ᇣᇧ
   𝑆𝐸𝑅𝐺𝐼𝑃𝐸
     ᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
           ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                   ᇣᇧᇧᇤᇧᇧᇥ … 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                             ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼𝑃𝐸
                                     ᇣᇧᇧᇤᇧᇧᇥ 𝑆𝐸𝑅𝐺𝐼 𝑃
                                                   ⏟
       1ª 𝑣𝑒𝑧           2ª 𝑣𝑒𝑧            3ª 𝑣𝑒𝑧              141ª 𝑣𝑒𝑧          142ª 𝑣𝑒𝑧     1000ª

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           30
        www.estrategiaconcursos.com.br                                                               43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                             𝐼𝑀𝐵𝐸𝐿𝐽𝐹 tem 7 letras.

3º passo - Qual a letra que o enunciado quer?

                                          A questão pede a 500ª letra.

4º passo - Dividir 500 por 7.

                                                 500 7
                                               − 49 71
                                                  10
                                                − 7
                                                   3
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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                                 31
        www.estrategiaconcursos.com.br                                                                     43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                                               𝑃𝐴𝑈𝐿𝐼𝑁𝐼𝐴𝐼𝑁𝐼𝐿𝑈𝐴

Cuidado aqui, pessoal! Não é a palavra PAULINIA que se repete! É a palavra PAULINIAINILUA! Cuidado
também para não usar PAULINIAINILUAP! Precisamos deixar o último "P" para a próxima PAULINIAINILUA
que aparece na sequência.

2º passo - Quantas letras tem essa palavra?

                                       𝑃𝐴𝑈𝐿𝐼𝑁𝐼𝐴𝐼𝑁𝐼𝐿𝑈𝐴 tem 14 letras.

3º passo - Qual a letra que o enunciado quer?

                                          A questão pede a 1000ª letra.

4º passo - Dividir 1000 por 14.

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                      32
        www.estrategiaconcursos.com.br                                                          43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                               LISTA DE QUESTÕES - FGV

Sequências Numéricas

1. (FGV/CM TAUBATÉ/2022) Na sequência a seguir são utilizados apenas os dígitos 1, 2, 3, 4 e 5, e seus
elementos obedecem a um determinado padrão.

            𝟏 𝟐 𝟏 𝟐 𝟑 𝟒 𝟓 𝟒 𝟓 𝟒 𝟑 𝟐 𝟏 𝟐 𝟏 𝟐 𝟑 𝟒 𝟓 𝟒 𝟓 𝟒 𝟑 𝟐 𝟏 𝟐 𝟏 𝟐 𝟑 𝟒 𝟓 𝟒 𝟓 𝟒 𝟑 𝟐 𝟏 𝟐 𝟏 𝟐 𝟑 𝟒 . ..

O 500º termo dessa sequência é:
A) 1.
B) 2.
C) 3.
D) 4.
E) 5.

2. (FGV/SEFAZ-AM/2022) Uma sequência de números inteiros é tal que cada termo, a partir do terceiro,
é a soma do seu termo antecessor com o dobro do antecessor do antecessor. Sabe-se que o sexto termo
dessa sequência é 85 e, o oitavo, é 341. O quarto termo da referida sequência é
A) 15.
B) 17.
C) 19.
D) 21.
E) 23.

3. (FGV/CM ARACAJU/2021) Sejam:

              𝑿 = 𝟐 + 𝟒 + 𝟔 + . . . + 𝟗𝟔 + 𝟗𝟖            e     𝒀 = 𝟏 + 𝟑 + 𝟓 + . . . + 𝟗𝟓 + 𝟗𝟕.

O valor de 𝑿 − 𝒀 é:
A) 2;
B) 49;
C) 50;
D) 51;
E) 102.

4. (FGV/PREF. SALVADOR/2019) Considere a sequência infinita de algarismos:

                                          𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔𝟖𝟎𝟐𝟒𝟔. ..

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                             33
        www.estrategiaconcursos.com.br                                                                 43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A soma dos 2019 primeiros algarismos dessa sequência é
A) 8020.
B) 8040.
C) 8060.
D) 8080.
E) 8100.

5. (FGV/ALERO/2018) Uma sequência de números naturais é tal que dado um termo x qualquer dessa
sequência, se ele é par, então o próximo termo será x/2; se ele é ímpar, então o próximo termo será x+5.
Se o primeiro termo dessa sequência é 6, então o décimo termo será
A) 2.
B) 3.                                                  ==219a34==

C) 4.
D) 6.
E) 8.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                           34
        www.estrategiaconcursos.com.br                                                               43

                                    


---

Equipe Exatas Estratégia Concursos
Aula 06

                                              GABARITO
 1.   LETRA D
 2.   LETRA D
 3.   LETRA B
 4.   LETRA D
 5.   LETRA C

      Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   35
      www.estrategiaconcursos.com.br                                       43

                                  


---

  Equipe Exatas Estratégia Concursos
  Aula 06

                               LISTA DE QUESTÕES - FGV

Sequências de Figuras

1. (FGV/PM-SP/2023) As figuras abaixo ilustram as 3 primeiras etapas da sucessiva transformação de um
polígono em outro. Essa modificação é feita removendo-se todos os “bicos” do polígono anterior para
obter-se o polígono seguinte.

A figura obtida na Etapa 4 será um polígono com
A) 16 lados.
B) 20 lados.
C) 24 lados.
D) 36 lados.

2. (FGV/MPE-SP/2023) As figuras a seguir representam os 4 primeiros termos da sequência de números
pentagonais: (𝟏, 𝟓, 𝟏𝟐, 𝟐𝟐, . . . )

O número que ocupa a 7ª posição nessa sequência é
A) 46.
B) 51.
C) 59.
D) 63.
E) 70.

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                        36
        www.estrategiaconcursos.com.br                                                            43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

3. (FGV/SEFAZ-BA/2022) Os números naturais foram escritos em uma tabela de 4 linhas como na figura a
seguir.

As linhas são numeradas de baixo para cima e as colunas são numeradas da esquerda para a direita. O
número da linha e o número da coluna onde está o número 2022 são, respectivamente,
A) 2 e 253.
B) 3 e 253.
C) 2 e 506.
D) 3 e 506.
E) 4 e 524.

4. (FGV/CBM-AM/2022) No plano cartesiano, a partir da origem, foi construído o caminho representado
abaixo, mantendo o padrão do desenho.

O comprimento da parte do caminho desde o início até o ponto (49, 1) é
A) 166.
B) 168.
C) 170.
D) 172.
E) 174.

5. (FGV/TJ-RO/2021) Observe a sequência de figuras a seguir.

Mantendo o padrão apresentado nas figuras acima, o número de bolinhas da figura 15 é:

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                       37
        www.estrategiaconcursos.com.br                                                           43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A) 238;
B) 244;
C) 258;
D) 270;
E) 304.

                                                         ==219a34==

          Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   38
          www.estrategiaconcursos.com.br                                       43

                                      


---

Equipe Exatas Estratégia Concursos
Aula 06

                                               GABARITO
  1.   LETRA C
  2.   LETRA E
  3.   LETRA D
  4.   LETRA E
  5.   LETRA D

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   39
       www.estrategiaconcursos.com.br                                       43

                                   


---

  Equipe Exatas Estratégia Concursos
  Aula 06

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                            40
        www.estrategiaconcursos.com.br                                                                43

                                    


---

  Equipe Exatas Estratégia Concursos
  Aula 06

A) S;
B) R;
C) G;
D) I;
E) P.

4. (FGV/IMBEL/2021) Um funcionário da fábrica da IMBEL de Juiz de Fora pensou em pintar uma faixa
decorativa no muro externo da fábrica com o motivo abaixo:

                                     I M B E L J F I M B E L J F I M B E L J F ...

Mantendo esse padrão, a 500ª letra dessa faixa será
A) B.                                                   ==219a34==

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

        Receita Federal (Analista Tributário) Raciocínio Lógico Matemático                    41
        www.estrategiaconcursos.com.br                                                        43

                                    


---

Equipe Exatas Estratégia Concursos
Aula 06

                                               GABARITO
  1.   LETRA B
  2.   LETRA D
  3.   LETRA E
  4.   LETRA A
  5.   LETRA D

       Receita Federal (Analista Tributário) Raciocínio Lógico Matemático   42
       www.estrategiaconcursos.com.br                                       43

                                   


---

---
